/**
 * 图片优化：把模板缩略图和微信二维码压成 WebP，并修正个别超大图。
 * 用法：npm run images:opt
 *
 * 做的事：
 *   1. public/thumbnails/*.png —— 宽度超过 760 的降到 760（只缩不放），原 png 原地覆盖；
 *      同时各生成一份同名 .webp（quality 78）。页面用 <picture> 优先吃 webp，png 兜底。
 *   2. public/contact-wechat-qr.jpg —— 降到 440 宽并原地覆盖，另生成 .webp。
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const thumbDir = path.join(root, 'public/thumbnails');

const kb = (n) => (n / 1024).toFixed(0) + 'KB';
let beforeTotal = 0, afterTotal = 0, avifTotal = 0;

// ---- 1) 缩略图 ----
const files = (await fs.readdir(thumbDir)).filter((f) => f.endsWith('.png'));
for (const f of files) {
  const p = path.join(thumbDir, f);
  const src = await fs.readFile(p);
  beforeTotal += src.length;

  // 原 png：仅在过宽时降到 760
  const meta = await sharp(src).metadata();
  let pngBuf = src;
  if ((meta.width || 0) > 760) {
    pngBuf = await sharp(src).resize({ width: 760, withoutEnlargement: true }).png({ compressionLevel: 9 }).toBuffer();
    await fs.writeFile(p, pngBuf);
  }

  // webp
  const webpBuf = await sharp(pngBuf).resize({ width: 760, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
  const webpPath = p.replace(/\.png$/, '.webp');
  await fs.writeFile(webpPath, webpBuf);
  afterTotal += webpBuf.length;

  // avif（渐进增强：现代浏览器优先吃，体积比 webp 再小约 30%）
  const avifBuf = await sharp(pngBuf).resize({ width: 760, withoutEnlargement: true }).avif({ quality: 50, effort: 4 }).toBuffer();
  await fs.writeFile(p.replace(/\.png$/, '.avif'), avifBuf);
  avifTotal += avifBuf.length;
}

// ---- 2) 微信二维码 ----
const qrJpg = path.join(root, 'public/contact-wechat-qr.jpg');
try {
  const src = await fs.readFile(qrJpg);
  const jpgBuf = await sharp(src).resize({ width: 440, withoutEnlargement: true }).jpeg({ quality: 82 }).toBuffer();
  await fs.writeFile(qrJpg, jpgBuf);
  const webpBuf = await sharp(src).resize({ width: 440, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  await fs.writeFile(qrJpg.replace(/\.jpg$/, '.webp'), webpBuf);
  process.stdout.write(`  contact-wechat-qr        jpg ${kb(src.length)} → jpg ${kb(jpgBuf.length)} / webp ${kb(webpBuf.length)}\n`);
} catch { /* 无二维码图则跳过 */ }

console.log(`\n✓ 缩略图：${files.length} 张 — png ${kb(beforeTotal)} / webp ${kb(afterTotal)} / avif ${kb(avifTotal)}`);
