/**
 * 生成模板缩略图（封面）——每套模板用「市场点进编辑器时实际传入的职业默认内容」渲染，
 * 保证封面与打开后看到的内容一致。
 *
 * 用法：
 *   1. 先起服务：`npm run dev`（或 `npm run build && npm run start`，生产更快更稳）
 *   2. 另开终端：`node scripts/gen-thumbnails.mjs [slug ...]`
 *      - 不带参数：重生成全部模板
 *      - 带 slug：只重生成指定模板（如 `node scripts/gen-thumbnails.mjs classic banking`）
 *
 * 依赖：playwright（已是 devDependency）。输出到 public/thumbnails/<slug>.png。
 *
 * 注：缩略图与封面「内容一致」依赖于：市场页 (app/templates/page.tsx) 点进编辑器时
 * 传的 profession 与这里读取的 TEMPLATE_META.profession 相同；通用模板用 DEFAULT_RESUME_DATA。
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = process.env.BASE_URL || 'http://localhost:3000';

// —— 解析 slug 列表与每套模板对应的 profession ——
const listSrc = fs.readFileSync(path.join(root, 'data/template-list.ts'), 'utf8');
const pageSrc = fs.readFileSync(path.join(root, 'app/templates/page.tsx'), 'utf8');
const slugs = [...listSrc.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
const metaBlock = pageSrc.slice(pageSrc.indexOf('const TEMPLATE_META'), pageSrc.indexOf('/* ─── Template editorial'));
const prof = {};
for (const m of metaBlock.matchAll(/['"]?([a-z0-9-]+)['"]?:\s*\{[^}]*profession:\s*['"]([^'"]+)['"]/g)) prof[m[1]] = m[2];

const argv = process.argv.slice(2);
const targets = (argv.length ? slugs.filter(s => argv.includes(s)) : slugs)
  .map(slug => ({ slug, profession: prof[slug] || '通用' }));

console.log(`渲染 ${targets.length} 套模板缩略图（服务：${BASE}）…`);
const outDir = path.join(root, 'public/thumbnails');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
let ok = 0; const fail = [];
for (const { slug, profession } of targets) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 1500 }, deviceScaleFactor: 2 });
  page.setDefaultTimeout(15000);
  // 预置「已看过引导」标记，避免首次引导浮层（点击即可编辑）被截进封面
  await page.addInitScript(() => { try { localStorage.setItem('resumeforge_coachmark_seen', '1'); } catch { /* ignore */ } });
  try {
    await page.goto(`${BASE}/editor?template=${slug}&profession=${encodeURIComponent(profession)}`, { waitUntil: 'commit' });
    await page.waitForTimeout(2500);
    const resume = page.frameLocator('iframe[title="preview"]').locator('.resume').first();
    await resume.waitFor();
    await resume.screenshot({ path: path.join(outDir, `${slug}.png`) });
    ok++;
    process.stdout.write(`  ✓ ${slug}\n`);
  } catch (e) {
    fail.push(slug);
    process.stdout.write(`  ✗ ${slug} — ${String(e).split('\n')[0]}\n`);
  }
  await page.close().catch(() => {});
}
await browser.close().catch(() => {});
console.log(`\n完成：${ok} 成功，${fail.length} 失败${fail.length ? ' → ' + fail.join(', ') : ''}`);
process.exit(fail.length ? 1 : 0);
