'use client';

/**
 * InlineRichText — lightweight TipTap editor for left-panel rich text fields.
 * Bug 4: replaces plain <input>/<textarea> for highlights / description / summary.
 *
 * Features (per Bug 4 spec):
 *   1. Basic format: bold / italic / underline / strikethrough
 *   2. Text color + background color (highlight)
 *   3. Ordered / unordered lists
 *   4. Internal undo/redo (Cmd+Z / Cmd+Shift+Z) — independent of outer editor undo
 *   5. Keyboard shortcuts: Cmd+B / Cmd+I / Cmd+U (Cmd+Shift+X for strike)
 *   6. Paste handling: strips inline styles from Word/Notion/web, preserves basic format
 *   7. Save/restore via onBlur → getHTML() → store; setContent on external value change
 *   8. Placeholder via @tiptap/extension-placeholder
 *   9. Mini-template compatible: outputs <strong>/<em>/<u>/<s>/<span style="color:#...">/<mark>/<ul>/<ol>
 *  10. Each <InlineRichText> instance uses its own useEditor — fully independent state
 *  11. Toolbar only renders when focused
 *  12. iframe sync handled by parent via onChange → store → ResumePreview
 */

import { useEffect, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// Note: StarterKit v3 already ships Underline — adding @tiptap/extension-underline
// causes "Duplicate extension names: ['underline']" warning AND silently breaks
// chained commands like setColor() in some sessions.
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';

const TEXT_COLORS = [
  '#1C1917', '#DC2626', '#EA580C', '#CA8A04',
  '#16A34A', '#2563EB', '#7C3AED', '#78716C',
];

const BG_COLORS = [
  '#FEF3C7', '#FED7AA', '#FECACA', '#FBCFE8',
  '#DDD6FE', '#BFDBFE', '#A7F3D0', '#E7E5E4',
];

interface InlineRichTextProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

export function InlineRichText({ value, onChange, placeholder = '输入内容...', minHeight = 48 }: InlineRichTextProps) {
  const [focused, setFocused] = useState(false);
  const [openPicker, setOpenPicker] = useState<null | 'color' | 'bg'>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Debounced commit — flush HTML to store 200ms after last update.
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSent = useRef<string>(value || '');
  const flushCommit = (html: string) => {
    if (html === lastSent.current) return;
    lastSent.current = html;
    onChangeRef.current(html);
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        // StarterKit v3 ships bold/italic/strike/underline/bulletList/orderedList/history
      }),
      TextStyle,
      Color.configure({ types: ['textStyle'] }),
      Highlight.configure({ multicolor: true }),
      Placeholder.configure({
        placeholder,
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    content: value || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'tiptap-inline',
      },
      // Paste sanitization: strip Word/Notion bloat but preserve basic formatting.
      transformPastedHTML(html: string) {
        return sanitizePastedHtml(html);
      },
    },
    // Real-time sync: debounce 200ms so iframe doesn't reload on every keystroke.
    onUpdate: ({ editor }) => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => flushCommit(editor.getHTML()), 200);
    },
    onBlur: ({ editor }) => {
      if (debounceTimer.current) { clearTimeout(debounceTimer.current); debounceTimer.current = null; }
      flushCommit(editor.getHTML());
      setFocused(false);
    },
    onFocus: () => setFocused(true),
  });

  // Sync external value changes (e.g. outer-editor undo, or section switch).
  // Only call setContent when the *external* HTML differs and editor is NOT focused,
  // to avoid clobbering the user's caret while they're typing.
  useEffect(() => {
    if (!editor) return;
    if (editor.isFocused) return;
    const current = editor.getHTML();
    const next = value || '';
    if (current !== next && current !== `<p>${next}</p>`) {
      editor.commands.setContent(next, { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Close color picker on outside click. Use mouseup + document.contains guard
  // to avoid closing when an inner swatch unmounts itself in onMouseDown (the
  // detached node would falsely register as "outside").
  useEffect(() => {
    if (!openPicker) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target || !document.contains(target)) return;
      if (pickerRef.current && !pickerRef.current.contains(target)) {
        setOpenPicker(null);
      }
    };
    const t = setTimeout(() => document.addEventListener('mouseup', handler), 50);
    return () => { clearTimeout(t); document.removeEventListener('mouseup', handler); };
  }, [openPicker]);

  const btnStyle = (active: boolean): React.CSSProperties => ({
    width: 28, height: 28, borderRadius: 5, border: 'none', padding: 0,
    background: active ? 'rgba(28,25,23,0.1)' : 'transparent',
    color: active ? '#1C1917' : '#78716C',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, fontWeight: 700, fontFamily: 'inherit', flexShrink: 0, outline: 'none',
  });

  const Sep = () => <div style={{ width: 1, height: 14, background: '#E7E5E4', margin: '0 2px', flexShrink: 0 }} />;

  return (
    <div style={{ position: 'relative' }}>
      {/* Mini toolbar — shown when focused OR picker open (so click in picker doesn't blur away the toolbar) */}
      {(focused || openPicker) && (
        <div
          onMouseDown={e => e.preventDefault()}
          style={{
          display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2,
          padding: '2px 4px',
          background: '#F5F5F4', borderRadius: '4px 4px 0 0',
          border: '1px solid #E7E5E4', borderBottom: 'none',
          flexWrap: 'wrap',
        }}>
          <button
            type="button"
            style={btnStyle(editor?.isActive('bold') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBold().run(); }}
            title="加粗 (Cmd+B)"
            aria-label="加粗"
          >B</button>
          <button
            type="button"
            style={{ ...btnStyle(editor?.isActive('italic') ?? false), fontStyle: 'italic' }}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleItalic().run(); }}
            title="斜体 (Cmd+I)"
            aria-label="斜体"
          >I</button>
          <button
            type="button"
            style={{ ...btnStyle(editor?.isActive('underline') ?? false), textDecoration: 'underline' }}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleUnderline().run(); }}
            title="下划线 (Cmd+U)"
            aria-label="下划线"
          >U</button>
          <button
            type="button"
            style={{ ...btnStyle(editor?.isActive('strike') ?? false), textDecoration: 'line-through' }}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleStrike().run(); }}
            title="删除线 (Cmd+Shift+X)"
            aria-label="删除线"
          >S</button>

          <Sep />

          {/* Color & background pickers */}
          <div ref={pickerRef} style={{ position: 'relative', display: 'inline-flex', gap: 2 }}>
            <button
              type="button"
              style={{ ...btnStyle(openPicker === 'color'), fontSize: 10 }}
              onMouseDown={e => { e.preventDefault(); setOpenPicker(p => p === 'color' ? null : 'color'); }}
              title="文字颜色"
              aria-label="文字颜色"
            >A</button>
            <button
              type="button"
              style={{ ...btnStyle(openPicker === 'bg'), fontSize: 10, background: openPicker === 'bg' ? 'rgba(28,25,23,0.1)' : '#FEF3C7' }}
              onMouseDown={e => { e.preventDefault(); setOpenPicker(p => p === 'bg' ? null : 'bg'); }}
              title="高亮背景"
              aria-label="高亮背景"
            >H</button>
            {openPicker && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, zIndex: 99999, marginTop: 2,
                background: '#FFF', border: '1px solid #E7E5E4', borderRadius: 6,
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)', padding: 6,
                display: 'flex', gap: 4, flexWrap: 'wrap', width: 96,
              }}>
                {(openPicker === 'color' ? TEXT_COLORS : BG_COLORS).map(c => (
                  <button
                    type="button"
                    key={c}
                    onMouseDown={e => {
                      e.preventDefault();
                      if (openPicker === 'color') {
                        editor?.chain().focus().setColor(c).run();
                      } else {
                        editor?.chain().focus().toggleHighlight({ color: c }).run();
                      }
                      // Flush immediately so iframe reflects color without waiting for blur/debounce
                      if (editor) flushCommit(editor.getHTML());
                      setOpenPicker(null);
                    }}
                    style={{
                      width: 22, height: 22, borderRadius: '50%',
                      border: '1.5px solid #E7E5E4', background: c,
                      cursor: 'pointer', padding: 0, outline: 'none',
                    }}
                    title={c}
                    aria-label={c}
                  />
                ))}
                {/* Custom color picker — opens native browser color popup */}
                <label
                  title="自定义颜色"
                  style={{
                    width: 22, height: 22, borderRadius: '50%',
                    border: '1.5px solid #E7E5E4',
                    background: 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
                    cursor: 'pointer', padding: 0, position: 'relative',
                    overflow: 'hidden', display: 'inline-block', flexShrink: 0,
                  }}
                  onMouseDown={e => e.preventDefault()}
                >
                  <input
                    type="color"
                    defaultValue="#1C1917"
                    onChange={e => {
                      const c = e.target.value;
                      if (openPicker === 'color') {
                        editor?.chain().focus().setColor(c).run();
                      } else {
                        editor?.chain().focus().toggleHighlight({ color: c }).run();
                      }
                      if (editor) flushCommit(editor.getHTML());
                      setOpenPicker(null);
                    }}
                    style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      opacity: 0, cursor: 'pointer', border: 'none', padding: 0,
                    }}
                  />
                </label>
                <button
                  type="button"
                  onMouseDown={e => {
                    e.preventDefault();
                    if (openPicker === 'color') {
                      editor?.chain().focus().unsetColor().run();
                    } else {
                      editor?.chain().focus().unsetHighlight().run();
                    }
                    if (editor) flushCommit(editor.getHTML());
                    setOpenPicker(null);
                  }}
                  style={{ fontSize: 9, color: '#78716C', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', outline: 'none' }}
                >重置</button>
              </div>
            )}
          </div>

          <Sep />

          <button
            type="button"
            style={btnStyle(editor?.isActive('bulletList') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBulletList().run(); }}
            title="无序列表"
            aria-label="无序列表"
          >•</button>
          <button
            type="button"
            style={btnStyle(editor?.isActive('orderedList') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleOrderedList().run(); }}
            title="有序列表"
            aria-label="有序列表"
          >1.</button>
        </div>
      )}
      <div style={{
        fontSize: 13, color: '#1C1917', background: focused ? '#FFF' : '#FAFAF9',
        border: `1px solid ${focused ? '#1C1917' : '#E7E5E4'}`,
        borderRadius: focused ? '0 0 6px 6px' : 6,
        padding: '6px 9px', minHeight, boxSizing: 'border-box',
        transition: 'border-color 0.12s, background 0.12s',
        lineHeight: 1.6, wordBreak: 'break-word',
        position: 'relative',
      }}>
        <EditorContent editor={editor} />
      </div>
      <style>{`
        .tiptap-inline { outline: none; min-height: 18px; }
        .tiptap-inline p { margin: 0; }
        .tiptap-inline p:last-child { margin-bottom: 0; }
        .tiptap-inline strong { font-weight: 700; }
        .tiptap-inline u { text-decoration: underline; }
        .tiptap-inline em { font-style: italic; }
        .tiptap-inline s { text-decoration: line-through; }
        .tiptap-inline ul, .tiptap-inline ol { margin: 2px 0; padding-left: 18px; }
        .tiptap-inline li { margin: 0; }
        .tiptap-inline li p { margin: 0; }
        .tiptap-inline mark { padding: 0 2px; border-radius: 2px; }
        /* Placeholder via @tiptap/extension-placeholder */
        .tiptap-inline p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #A8A29E;
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  );
}

// ─── Paste sanitization ──────────────────────────────────────────────────────
/**
 * Strip Word/Notion/web bloat while preserving basic formatting:
 *   - keep: <strong>/<b>, <em>/<i>, <u>, <s>/<strike>, <mark>, <span style="color:...">, <ul>/<ol>/<li>, <p>, <br>
 *   - drop: all class names, all inline style except "color" / "background-color"
 *   - drop: MS Office namespace tags, comments, scripts, link previews, images
 */
function sanitizePastedHtml(html: string): string {
  if (typeof window === 'undefined' || !html) return html;

  // Quick reject MS Office wrapper noise
  let cleaned = html
    .replace(/<!--[\s\S]*?-->/g, '')          // strip HTML comments (Word inserts a LOT)
    .replace(/<\?xml[\s\S]*?\?>/g, '')        // strip XML prolog
    .replace(/<o:p>[\s\S]*?<\/o:p>/g, '')     // strip <o:p> tags
    .replace(/<o:p\s*\/>/g, '')
    .replace(/<\/?(meta|link|style|script|title|head|html|body)\b[^>]*>/gi, '');

  // Parse and walk the DOM, whitelisting tags + attrs
  const doc = new DOMParser().parseFromString(`<div>${cleaned}</div>`, 'text/html');
  const root = doc.body.firstElementChild as HTMLElement | null;
  if (!root) return cleaned;

  const ALLOWED_TAGS = new Set([
    'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'strike', 'mark',
    'ul', 'ol', 'li', 'span', 'div',
  ]);

  const walk = (el: Element) => {
    // Snapshot children first (we mutate)
    const children = Array.from(el.children);
    for (const child of children) {
      const tag = child.tagName.toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) {
        // Unwrap: replace with its children (preserves inner text/format)
        const parent = child.parentNode;
        if (parent) {
          while (child.firstChild) parent.insertBefore(child.firstChild, child);
          parent.removeChild(child);
        }
        continue;
      }
      // Clean attrs: strip everything except a sanitized `style` (color / background-color only)
      const style = (child as HTMLElement).getAttribute('style') || '';
      const safeStyle = extractSafeStyle(style);
      // Remove all attributes
      Array.from(child.attributes).forEach(a => child.removeAttribute(a.name));
      if (safeStyle) child.setAttribute('style', safeStyle);
      walk(child);
    }
  };

  walk(root);
  return root.innerHTML;
}

function extractSafeStyle(styleStr: string): string {
  if (!styleStr) return '';
  const out: string[] = [];
  styleStr.split(';').forEach(decl => {
    const idx = decl.indexOf(':');
    if (idx < 0) return;
    const prop = decl.slice(0, idx).trim().toLowerCase();
    const val = decl.slice(idx + 1).trim();
    if (!val) return;
    if (prop === 'color' || prop === 'background-color') {
      // Reject if value contains anything weird (url(), expression(), etc.)
      if (/^(#[0-9a-f]{3,8}|rgb\(.+\)|rgba\(.+\)|[a-z]+)$/i.test(val)) {
        out.push(`${prop}: ${val}`);
      }
    }
  });
  return out.join('; ');
}
