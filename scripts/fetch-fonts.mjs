/**
 * 把 Google Fonts 下载到本地自托管，解决「fonts.googleapis.com 拉不到」。
 *
 * 用法（需联网，一次即可）：
 *   node scripts/fetch-fonts.mjs       # 或 npm run fonts:local
 *
 * 做的事：
 *   1. 用浏览器 UA 拉取每个字体的 CSS（拿到 woff2 地址）；
 *   2. 把所有 woff2 下载到 public/fonts/；
 *   3. 把 @font-face 的 src 改写成本地 /fonts/xxx.woff2，写入 app/fonts.css。
 * 之后浏览器只从你自己的域名取字体，不再请求 fonts.googleapis.com。
 * 字体的 font-family 名称不变，所以全站 CSS 无需任何其它改动。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/fonts');
const cssOut = path.join(root, 'app/fonts.css');
// 子路径部署：本地字体的 @font-face url 也要带 basePath 前缀（CSS 里的 url() 不会被 Next 自动加前缀）。
// 与构建时保持一致：BASE_PATH=/resume npm run fonts:local
const BASE = process.env.BASE_PATH || '';

// 与 app/fonts.css 里一致的字体（&family 拆成单独请求，避免重复）
const FONT_CSS_URLS = [
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&display=swap',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
  'https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap',
];

// 用现代浏览器 UA 才会返回 woff2（否则可能给 ttf）
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

fs.mkdirSync(outDir, { recursive: true });

let css = '/* 自托管字体 —— 由 scripts/fetch-fonts.mjs 生成，请勿手改。重新本地化请再次运行 npm run fonts:local */\n\n';
const downloaded = new Map(); // url -> 本地文件名（去重）

for (const url of FONT_CSS_URLS) {
  process.stdout.write(`拉取 CSS: ${url.split('family=')[1].split('&')[0]}\n`);
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) { console.error(`  ✗ 失败 HTTP ${res.status}`); process.exit(1); }
  let block = await res.text();

  const woffUrls = [...new Set([...block.matchAll(/url\((https:\/\/[^)]+\.woff2?)\)/g)].map(m => m[1]))];
  for (const wurl of woffUrls) {
    let local = downloaded.get(wurl);
    if (!local) {
      // 文件名：取家族名 + 哈希段，确保唯一且可读
      const fam = (url.match(/family=([^:&]+)/)?.[1] || 'font').replace(/\+/g, '');
      const tail = wurl.split('/').pop();
      local = `${fam}-${tail}`.replace(/[^a-zA-Z0-9._-]/g, '_');
      const buf = Buffer.from(await (await fetch(wurl, { headers: { 'User-Agent': UA } })).arrayBuffer());
      fs.writeFileSync(path.join(outDir, local), buf);
      downloaded.set(wurl, local);
      process.stdout.write(`  ↓ ${local} (${(buf.length / 1024).toFixed(0)}KB)\n`);
    }
    block = block.split(wurl).join(`${BASE}/fonts/${local}`);
  }
  css += block.trim() + '\n\n';
}

fs.writeFileSync(cssOut, css);
console.log(`\n✓ 完成：${downloaded.size} 个字体文件 → public/fonts/，已写入 app/fonts.css（本地 @font-face）。`);
console.log('  现在重新构建/启动，浏览器不会再请求 fonts.googleapis.com。');
