/**
 * PDF 导出服务（基于 Puppeteer）。
 *
 * POST /api/pdf
 *   body: { html: string, filename?: string }
 *   resp: application/pdf （附件下载）
 *
 * 前端把「与屏幕所见 1:1 的自包含打印 HTML」（模板 CSS 内联 + 正文 + @page A4）发过来，
 * 服务端用无头 Chromium 渲染并打印为 PDF。相比浏览器原生 print()：
 *  - 不弹系统打印框，一键直接下载；
 *  - 跨浏览器/设备一致（统一用服务端 Chromium 排版）；
 *  - 背景色/底纹默认保留（printBackground:true），无需用户手动勾选。
 */
import { NextRequest, NextResponse } from 'next/server';
import { getBrowser, acquirePdfSlot } from '@/lib/chromium';

// 需要 Node 运行时（Puppeteer 不能跑在 Edge），且每次实时生成不缓存。
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

// 防滥用：限制提交的 HTML 体积（单份简历自包含 HTML 通常 < 1MB）。
const MAX_HTML_BYTES = 8 * 1024 * 1024;

export async function POST(req: NextRequest) {
  let html: string;
  let filename: string;
  try {
    const body = await req.json();
    html = typeof body?.html === 'string' ? body.html : '';
    filename = typeof body?.filename === 'string' && body.filename.trim() ? body.filename.trim() : '简历';
  } catch {
    return NextResponse.json({ error: '请求体必须为 JSON' }, { status: 400 });
  }

  if (!html) {
    return NextResponse.json({ error: '缺少 html 字段' }, { status: 400 });
  }
  if (Buffer.byteLength(html, 'utf8') > MAX_HTML_BYTES) {
    return NextResponse.json({ error: 'HTML 体积过大' }, { status: 413 });
  }

  // 并发闸门：拿不到名额（队列已满）直接 503，避免瞬时高并发把内存/CPU 打爆。
  let release: (() => void) | null = null;
  try {
    release = await acquirePdfSlot();
  } catch (err) {
    if ((err as Error & { code?: string }).code === 'BUSY') {
      return NextResponse.json(
        { error: 'PDF 服务繁忙，请稍后重试' },
        { status: 503, headers: { 'Retry-After': '3' } },
      );
    }
    throw err;
  }

  let page;
  try {
    const browser = await getBrowser();
    page = await browser.newPage();
    // 用 print 媒体类型渲染，确保模板里的 @media print / @page 规则生效，与本地打印一致。
    await page.emulateMediaType('print');
    // HTML 已自包含（CSS 内联、图片为 data:、字体为系统字体），无外链请求；
    // 用 'load' 即可，不用 networkidle（无网络活动时 networkidle 可能迟迟不触发→超时）。
    await page.setContent(html, { waitUntil: 'load', timeout: 30_000 });
    // 等字体加载完成再打印，避免偶发的字体未就绪导致排版抖动。
    await page.evaluate(() => (document as Document & { fonts: FontFaceSet }).fonts.ready);

    const pdf = await page.pdf({
      // 模板本身按 A4(210mm) 排版且自带内边距，@page margin 已为 0；
      // preferCSSPageSize 让 HTML 里的 @page size:A4/margin:0 说了算，避免二次缩放。
      preferCSSPageSize: true,
      printBackground: true,
      format: 'A4',
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    // RFC 5987：文件名含中文时用 filename* 编码，兼容各浏览器。
    const asciiFallback = 'resume.pdf';
    const encoded = encodeURIComponent(`${filename}.pdf`);
    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${asciiFallback}"; filename*=UTF-8''${encoded}`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('[api/pdf] 生成失败:', err);
    return NextResponse.json(
      { error: 'PDF 生成失败', detail: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  } finally {
    if (page) {
      try {
        await page.close();
      } catch {
        /* ignore */
      }
    }
    release?.(); // 让出名额给下一个排队请求
  }
}
