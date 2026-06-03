/**
 * 批量拼装新模板：把 agent 产出的 { slug, name, category, profession, desc, html, css }
 * 拼成标准 data/templates/<slug>.ts（统一 schema + 统一 TS 骨架，保证 100% 可编辑），
 * 并刷新注册：data/template-list.ts（重扫生成）、TEMPLATE_META、PROFESSION_FILTERS。
 *
 * 用法：node scripts/build-templates.mjs /tmp/new-templates.json
 *   输入是一个数组，每项至少含 slug/name/category/html/css；profession/desc 选填。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inputPath = process.argv[2] || '/tmp/new-templates.json';
const specs = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const VALID_CATEGORIES = ['business', 'creative', 'minimal', 'tech', 'profession', 'campus'];

// —— 统一数据 schema（与现有 77 套完全一致，仅 templateId/name 变化）——
const STD_SECTIONS = [
  { key: 'basics', label: '基本信息', fields: [
    { key: 'name', label: '姓名', type: 'text', required: true },
    { key: 'title', label: '职位', type: 'text' },
    { key: 'email', label: '邮箱', type: 'email', required: true },
    { key: 'phone', label: '电话', type: 'tel' },
    { key: 'location', label: '所在城市', type: 'text' },
    { key: 'avatar', label: '头像', type: 'image' },
    { key: 'summary', label: '个人简介', type: 'richtext' },
  ]},
  { key: 'experience', label: '工作经历', type: 'array', fields: [
    { key: 'company', label: '公司', type: 'text', required: true },
    { key: 'position', label: '职位', type: 'text', required: true },
    { key: 'startDate', label: '开始日期', type: 'date' },
    { key: 'endDate', label: '结束日期', type: 'date' },
    { key: 'highlights', label: '工作亮点', type: 'array:text' },
  ]},
  { key: 'education', label: '教育经历', type: 'array', fields: [
    { key: 'institution', label: '学校', type: 'text', required: true },
    { key: 'area', label: '专业', type: 'text' },
    { key: 'studyType', label: '学历', type: 'select', options: ['高中', '大专', '本科', '硕士', '博士'] },
    { key: 'startDate', label: '开始日期', type: 'date' },
    { key: 'endDate', label: '结束日期', type: 'date' },
  ]},
  { key: 'skills', label: '技能', type: 'array', fields: [
    { key: 'name', label: '技能名称', type: 'text' },
    { key: 'level', label: '熟练度', type: 'select', options: ['了解', '熟悉', '掌握', '精通'] },
  ]},
  { key: 'projects', label: '项目经历', type: 'array', fields: [
    { key: 'name', label: '项目名称', type: 'text' },
    { key: 'role', label: '担任角色', type: 'text' },
    { key: 'description', label: '项目描述', type: 'richtext' },
    { key: 'highlights', label: '项目亮点', type: 'array:text' },
  ]},
];

// 反斜杠/反引号/${ 三类转义，使 html/css 能安全放进模板字符串字面量
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

function fileContent(spec) {
  const schema = { templateId: spec.slug, version: '1.0.0', name: spec.name, sections: STD_SECTIONS };
  const schemaJson = JSON.stringify(schema, null, 2).split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');
  return `// Auto-generated — do not edit manually
export interface TemplateSchema {
  name: string;
  [key: string]: unknown;
}

export interface TemplateData {
  slug: string;
  name: string;
  category: string;
  html: string;
  css: string;
  schema: TemplateSchema;
}

const template: TemplateData = {
    slug: '${spec.slug}',
    name: '${esc(spec.name)}',
    category: '${spec.category}',
    html: \`${esc(spec.html)}\`,
    css: \`${esc(spec.css)}\`,
    schema: ${schemaJson},
  };

export default template;
`;
}

// —— 1) 写模板文件 ——
const written = [];
for (const spec of specs) {
  if (!spec.slug || !/^[a-z0-9-]+$/.test(spec.slug)) { console.error('✗ 非法 slug:', spec.slug); continue; }
  if (!VALID_CATEGORIES.includes(spec.category)) { console.error(`✗ ${spec.slug} 非法 category: ${spec.category}`); continue; }
  if (!spec.html || !spec.css) { console.error(`✗ ${spec.slug} 缺 html/css`); continue; }
  const fp = path.join(root, 'data/templates', `${spec.slug}.ts`);
  fs.writeFileSync(fp, fileContent(spec));
  written.push(spec);
  console.log('  ✓ data/templates/' + spec.slug + '.ts');
}

// —— 2) 重扫生成 data/template-list.ts（保留既有顺序，新模板追加到末尾）——
const tplDir = path.join(root, 'data/templates');
const allFiles = fs.readdirSync(tplDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
const meta = {}; // slug -> {name, category}
for (const f of allFiles) {
  const src = fs.readFileSync(path.join(tplDir, f), 'utf8');
  const slug = (src.match(/slug:\s*'([^']+)'/) || [])[1];
  const name = (src.match(/name:\s*'((?:[^'\\]|\\.)*)'/) || [])[1];
  const category = (src.match(/category:\s*'([^']+)'/) || [])[1];
  if (slug && name && category) meta[slug] = { name, category };
}
const listPath = path.join(root, 'data/template-list.ts');
const listSrc = fs.readFileSync(listPath, 'utf8');
const existingOrder = [...listSrc.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
const orderedSlugs = [...existingOrder.filter(s => meta[s]), ...Object.keys(meta).filter(s => !existingOrder.includes(s))];
const listEntries = orderedSlugs.map(s => `  {\n    "slug": "${s}",\n    "name": "${meta[s].name.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}",\n    "category": "${meta[s].category}"\n  }`).join(',\n');
fs.writeFileSync(listPath, `// Auto-generated lightweight metadata for template list page.
// Avoids importing the full 991KB templates.ts on the listing page.
export interface TemplateMeta {
  slug: string;
  name: string;
  category: string;
}

export const TEMPLATE_LIST: TemplateMeta[] = [
${listEntries}
];
`);
console.log(`  ✓ data/template-list.ts（共 ${orderedSlugs.length} 套）`);

// —— 3) 插入 TEMPLATE_META（desc+profession），仅新增缺失项 ——
const pagePath = path.join(root, 'app/templates/page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');
const metaStart = page.indexOf('const TEMPLATE_META: Record<string, TemplateMeta> = {');
const metaClose = page.indexOf('\n};', metaStart);
const metaBlock = page.slice(metaStart, metaClose);
const metaInserts = [];
for (const spec of written) {
  const key = /^[a-z0-9]+$/.test(spec.slug) ? spec.slug : `'${spec.slug}'`;
  if (new RegExp(`(^|\\n)\\s*'?${spec.slug}'?:\\s*\\{`).test(metaBlock)) continue; // 已存在
  const desc = (spec.desc || '').replace(/'/g, '\\u2019');
  const prof = spec.profession || '通用';
  metaInserts.push(`  ${key}: { desc: '${desc}', profession: '${prof}' },`);
}
if (metaInserts.length) {
  page = page.slice(0, metaClose) + '\n' + metaInserts.join('\n') + page.slice(metaClose);
  console.log(`  ✓ TEMPLATE_META +${metaInserts.length}`);
}

// —— 4) 补充 PROFESSION_FILTERS（新职业桶）——
const PROF_LABELS = {
  '工程制造': '工程', '政府事业': '政府', '客户服务': '客服', '物流供应链': '物流',
  '酒店餐饮': '酒店', '建筑地产': '地产', '科研学术': '科研', '传媒影视': '传媒',
  '销售商务': '销售', '环境能源': '能源', '农业食品': '农业', '体育健身': '体育',
};
const profStart = page.indexOf('const PROFESSION_FILTERS = [');
const profClose = page.indexOf('\n];', profStart);
const profBlock = page.slice(profStart, profClose);
const neededProfs = [...new Set(written.map(s => s.profession).filter(Boolean))];
const profInserts = [];
for (const p of neededProfs) {
  if (PROF_LABELS[p] && !profBlock.includes(`key: '${p}'`)) {
    profInserts.push(`  { key: '${p}', label: '${PROF_LABELS[p]}' },`);
  }
}
if (profInserts.length) {
  const newProfClose = page.indexOf('\n];', page.indexOf('const PROFESSION_FILTERS = ['));
  page = page.slice(0, newProfClose) + '\n' + profInserts.join('\n') + page.slice(newProfClose);
  console.log(`  ✓ PROFESSION_FILTERS +${profInserts.length}: ${profInserts.map(s => s.match(/key: '([^']+)'/)[1]).join(', ')}`);
}

fs.writeFileSync(pagePath, page);
console.log(`\n完成：写入 ${written.length} 套模板。`);
