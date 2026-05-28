/**
 * mini-template.ts
 * 极简 Handlebars 子集模板引擎，替代 handlebars 减少 ~75KB bundle
 *
 * 支持特性:
 *   {{{var}}} / {{{path.to.val}}}  — 不转义输出
 *   {{var}}  / {{path.to.val}}     — HTML 转义输出
 *   {{#each items}}...{{/each}}    — 数组循环，内部可用 {{this}} {{@index}} {{@../index}}
 *   {{#if cond}}...{{else}}...{{/if}}   — 条件（truthy + .length）
 *   {{#unless @last}}...{{/unless}}    — 反条件
 *
 * 不支持: partial, helper, {{#with}}, {{@first}}, {{@key}}
 */

// ─── HTML 转义 ────────────────────────────────────────────────────────────────

const ESC: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(val: unknown): string {
  if (val == null) return '';
  return String(val).replace(/[&<>"']/g, (c) => ESC[c]);
}

// ─── 路径解析 ─────────────────────────────────────────────────────────────────

function resolvePath(path: string, ctx: unknown, meta: EachMeta): unknown {
  // 元数据变量
  if (path === '@index') return meta.index;
  if (path === '@../index') return meta.parentIndex;
  if (path === '@last') return meta.isLast;
  if (path === 'this') return ctx;

  // 支持 dotted path: basics.name → ctx.basics.name
  // 若 ctx 不是对象，先尝试父级查找不做，直接返回 undefined
  const parts = path.split('.');
  let val: unknown = ctx;
  for (const p of parts) {
    if (val == null || typeof val !== 'object') return undefined;
    val = (val as Record<string, unknown>)[p];
  }
  return val;
}

// ─── 元数据接口 ───────────────────────────────────────────────────────────────

interface EachMeta {
  index: number;
  isLast: boolean;
  parentIndex: number; // @../index
}

const EMPTY_META: EachMeta = { index: 0, isLast: false, parentIndex: 0 };

// ─── 词法 Token ───────────────────────────────────────────────────────────────

type Token =
  | { type: 'text';    value: string }
  | { type: 'raw';     path: string }           // {{{...}}}
  | { type: 'escaped'; path: string }           // {{...}}
  | { type: 'open';    tag: string; path: string } // {{#each}} {{#if}} {{#unless}}
  | { type: 'else' }
  | { type: 'close';   tag: string }            // {{/each}} {{/if}} {{/unless}}

// ─── Standalone 行剥离（Handlebars 兼容） ─────────────────────────────────────
//
// 规则：若某行只包含一个块标签（#if, /if, #each, /each, #unless, /unless, else）
// 行内没有其他非空白内容，则：
//   - 删除该行行首的前缀空白
//   - 删除该行的后缀空白 + 换行符
//   - **保留标签本身**
//
// "  {{#if x}}\n" → "{{#if x}}"  (去除行首空白，去除尾部换行)
// "  {{#if x}}content" → 不剥离（同行有内容）
//
// 这与 Handlebars 的 standalone tag 行为完全一致。

function stripStandaloneLines(src: string): string {
  // 匹配：行首可选空格 + 单个块标签 + 可选空格 + 行尾换行
  // 块标签：{{#word ...}} 或 {{/word}} 或 {{else}}
  return src.replace(
    /^([ \t]*)(\{\{(?:#[a-z]+\b[^}]*|\/[a-z]+|else)\}\})([ \t]*)(\r?\n|$)/gm,
    (_m, _lead, tag, _trail, _nl) => tag,
  );
}

// ─── 词法分析 ─────────────────────────────────────────────────────────────────

const TOKEN_RE = /\{\{\{([\s\S]+?)\}\}\}|\{\{([\s\S]+?)\}\}/g;

function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(src)) !== null) {
    // 文本段
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: src.slice(lastIndex, match.index) });
    }

    if (match[1] !== undefined) {
      // {{{raw}}}
      tokens.push({ type: 'raw', path: match[1].trim() });
    } else {
      const inner = match[2].trim();

      if (inner === 'else') {
        tokens.push({ type: 'else' });
      } else if (inner.startsWith('#each ')) {
        tokens.push({ type: 'open', tag: 'each', path: inner.slice(6).trim() });
      } else if (inner.startsWith('#if ')) {
        tokens.push({ type: 'open', tag: 'if', path: inner.slice(4).trim() });
      } else if (inner.startsWith('#unless ')) {
        tokens.push({ type: 'open', tag: 'unless', path: inner.slice(8).trim() });
      } else if (inner.startsWith('/')) {
        tokens.push({ type: 'close', tag: inner.slice(1) });
      } else {
        tokens.push({ type: 'escaped', path: inner });
      }
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < src.length) {
    tokens.push({ type: 'text', value: src.slice(lastIndex) });
  }

  return tokens;
}

// ─── AST 节点 ─────────────────────────────────────────────────────────────────

type AstNode =
  | { kind: 'text';    value: string }
  | { kind: 'raw';     path: string }
  | { kind: 'escaped'; path: string }
  | { kind: 'each';    path: string; body: AstNode[] }
  | { kind: 'if';      path: string; consequent: AstNode[]; alternate: AstNode[] }
  | { kind: 'unless';  path: string; consequent: AstNode[]; alternate: AstNode[] }

// ─── 解析器 ───────────────────────────────────────────────────────────────────

/**
 * 解析结果：节点列表 + 停止原因
 * stopReason: 'eof' | 'close:TAG' | 'else'
 */
interface ParseResult {
  nodes: AstNode[];
  stopReason: string; // 'eof' | 'close:each' | 'close:if' | 'else' | ...
}

function parse(tokens: Token[]): AstNode[] {
  let pos = 0;

  /**
   * 解析节点，直到：
   *  - EOF
   *  - 遇到 {{/stopTag}} （如果指定了 stopTag）
   *  - 遇到 {{else}} （如果 stopAtElse=true）
   */
  function parseNodes(stopTag?: string, stopAtElse = false): ParseResult {
    const nodes: AstNode[] = [];

    while (pos < tokens.length) {
      const tok = tokens[pos];

      // 关闭标签
      if (tok.type === 'close') {
        if (stopTag && tok.tag === stopTag) {
          pos++; // consume close tag
          return { nodes, stopReason: 'close:' + tok.tag };
        }
        // mismatched close — skip
        pos++;
        continue;
      }

      // else 分支分隔符
      if (tok.type === 'else') {
        if (stopAtElse) {
          return { nodes, stopReason: 'else' };
        }
        pos++; // skip stray else
        continue;
      }

      if (tok.type === 'text') {
        nodes.push({ kind: 'text', value: tok.value });
        pos++;
        continue;
      }

      if (tok.type === 'raw') {
        nodes.push({ kind: 'raw', path: tok.path });
        pos++;
        continue;
      }

      if (tok.type === 'escaped') {
        nodes.push({ kind: 'escaped', path: tok.path });
        pos++;
        continue;
      }

      if (tok.type === 'open') {
        pos++; // consume open tag

        if (tok.tag === 'each') {
          const { nodes: body } = parseNodes('each');
          nodes.push({ kind: 'each', path: tok.path, body });
          continue;
        }

        if (tok.tag === 'if' || tok.tag === 'unless') {
          // 解析 consequent，遇到 else 或 /if|/unless 停止
          const r1 = parseNodes(tok.tag, true);
          let consequent = r1.nodes;
          let alternate: AstNode[] = [];

          if (r1.stopReason === 'else') {
            // consume {{else}} (already consumed by stopAtElse returning)
            pos++; // consume the else token
            const r2 = parseNodes(tok.tag);
            alternate = r2.nodes;
          }
          // if r1.stopReason === 'close:if' — already consumed, no else

          nodes.push({ kind: tok.tag as 'if' | 'unless', path: tok.path, consequent, alternate });
          continue;
        }
      }

      pos++;
    }

    return { nodes, stopReason: 'eof' };
  }

  return parseNodes().nodes;
}

// ─── 求值是否为真 ─────────────────────────────────────────────────────────────

function isTruthy(val: unknown): boolean {
  if (val == null) return false;
  if (typeof val === 'boolean') return val;
  if (typeof val === 'number') return val !== 0;
  if (typeof val === 'string') return val.length > 0;
  if (Array.isArray(val)) return val.length > 0;
  return true;
}

// ─── 渲染 ─────────────────────────────────────────────────────────────────────

function renderNodes(nodes: AstNode[], ctx: unknown, meta: EachMeta): string {
  let out = '';
  for (const node of nodes) {
    switch (node.kind) {
      case 'text':
        out += node.value;
        break;

      case 'raw': {
        const v = resolvePath(node.path, ctx, meta);
        out += v == null ? '' : String(v);
        break;
      }

      case 'escaped': {
        const v = resolvePath(node.path, ctx, meta);
        out += escapeHtml(v);
        break;
      }

      case 'each': {
        const arr = resolvePath(node.path, ctx, meta);
        if (!Array.isArray(arr)) break;
        const len = arr.length;
        for (let i = 0; i < len; i++) {
          const childMeta: EachMeta = {
            index: i,
            isLast: i === len - 1,
            parentIndex: meta.index,
          };
          out += renderNodes(node.body, arr[i], childMeta);
        }
        break;
      }

      case 'if': {
        const v = resolvePath(node.path, ctx, meta);
        if (isTruthy(v)) {
          out += renderNodes(node.consequent, ctx, meta);
        } else {
          out += renderNodes(node.alternate, ctx, meta);
        }
        break;
      }

      case 'unless': {
        const v = resolvePath(node.path, ctx, meta);
        if (!isTruthy(v)) {
          out += renderNodes(node.consequent, ctx, meta);
        } else {
          out += renderNodes(node.alternate, ctx, meta);
        }
        break;
      }
    }
  }
  return out;
}

// ─── 公共 API ─────────────────────────────────────────────────────────────────

/**
 * 编译模板字符串，返回渲染函数。
 * 与 Handlebars.compile() 接口完全一致。
 */
export function compileTemplate(source: string): (data: unknown) => string {
  const preprocessed = stripStandaloneLines(source);
  const tokens = tokenize(preprocessed);
  const ast = parse(tokens);
  return (data: unknown) => renderNodes(ast, data, EMPTY_META);
}
