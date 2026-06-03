/**
 * 体检模板绑定契约：扫描指定 slug（或全部）的 data/templates/<slug>.ts，
 * 校验内联编辑所需的关键 data-field / data-section / data-entry 绑定是否齐全。
 * 用法：node scripts/validate-templates.mjs [slug ...]
 * 退出码非 0 表示有不合格模板。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'data/templates');
const argv = process.argv.slice(2);
const files = (argv.length ? argv.map(s => `${s}.ts`) : fs.readdirSync(dir).filter(f => f.endsWith('.ts')));

// 必须出现的绑定标记（最小集合）
const REQUIRED = [
  'data-field="basics.name"',
  'data-field="basics.title"',
  'data-field="basics.email"',
  'data-field="basics.summary"',
  'data-section="experience"',
  'data-entry="experience"',
  'data-field="experience.{{@index}}.company"',
  'data-field="experience.{{@../index}}.highlights.{{@index}}"',
  'data-section="education"',
  'data-entry="education"',
  'data-section="skills"',
  'data-entry="skills"',
  'data-field="skills.{{@index}}.name"',
  'data-section="projects"',
  'data-entry="projects"',
];

let bad = 0;
const report = [];
for (const f of files) {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) { report.push(`✗ ${f} 不存在`); bad++; continue; }
  const src = fs.readFileSync(fp, 'utf8');
  const slug = (src.match(/slug:\s*'([^']+)'/) || [])[1];
  const missing = REQUIRED.filter(r => !src.includes(r));
  // 三花括号绑定不可退化成两花括号
  const hasTriple = src.includes('{{{basics.name}}}');
  // CSS 应 scope 在 .resume.<slug>
  const scoped = slug && src.includes(`.resume.${slug}`);
  const probs = [];
  if (missing.length) probs.push(`缺绑定 ${missing.length}: ${missing.slice(0, 3).join(' , ')}${missing.length > 3 ? ' …' : ''}`);
  if (!hasTriple) probs.push('缺 {{{basics.name}}} 三花括号');
  if (!scoped) probs.push(`CSS 未 scope 到 .resume.${slug}`);
  if (probs.length) { report.push(`✗ ${slug || f}: ${probs.join(' | ')}`); bad++; }
  else report.push(`✓ ${slug}`);
}
const okN = files.length - bad;
console.log(report.join('\n'));
console.log(`\n体检：${okN}/${files.length} 合格${bad ? `，${bad} 套需修` : ' ✓'}`);
process.exit(bad ? 1 : 0);
