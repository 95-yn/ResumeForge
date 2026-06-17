'use client';

import { useCallback, useRef, useState } from 'react';
import { compileTemplate } from '@/lib/mini-template';
import { applySectionReorder } from '@/lib/reorder-sections';
import { useEditorStore } from '@/lib/editor-store';
import { asset } from '@/lib/base-path';

/**
 * 简历「导出/打印」统一逻辑 —— 桌面顶栏(TopBar)与移动端布局(MobileEditorLayout)共用。
 *
 * 三条出口共享同一份「与屏幕所见 1:1」的自包含 HTML（buildPrintHtml）：
 *  - handleExportHtml：下载独立 HTML 文件（可离线打开/二次编辑）
 *  - handleExportPdf：POST /api/pdf，服务端 Puppeteer 渲染为 PDF（不弹打印框，一键下载）
 *  - handlePrint：浏览器原生 print()（隐藏 iframe），用户可另存为 PDF
 */
export function useResumeExport() {
  const { templateHtml, templateCss, resume, pushToast, sectionOrder } = useEditorStore();

  // 打印忙碌态：点击后即时把按钮切到「生成预览中…」，给原生 print() 冻结前一个反馈画面。
  const [printing, setPrinting] = useState(false);
  const printingRef = useRef(false);
  // 服务端 Puppeteer 导出 PDF 的忙碌态（与本地打印互相独立）。
  const [pdfBusy, setPdfBusy] = useState(false);
  const pdfBusyRef = useRef(false);

  // 把编译后的 body 按用户拖拽/键盘重排后的 sectionOrder 重排,确保「导出/打印 === 所见」。
  const reorderBody = useCallback((bodyHtml: string): string => {
    if (typeof window === 'undefined' || !resume) return bodyHtml;
    try {
      const doc = new DOMParser().parseFromString(bodyHtml, 'text/html');
      applySectionReorder(
        doc,
        sectionOrder,
        resume.basics as Record<string, string> | undefined,
        resume.settings as { avatarVisible?: boolean; avatarPos?: { x: number; y: number } } | undefined,
      );
      return doc.body.innerHTML;
    } catch { return bodyHtml; }
  }, [sectionOrder, resume]);

  // 文件名（用于 PDF 默认名 / HTML 下载名）：连字符拼接，避免「· 」中点在文件名里观感怪。
  // 例：李然-运营经理-简历 / 李然-简历 / 简历
  const buildFilename = useCallback(() => {
    const n = (resume?.basics?.name as string | undefined)?.trim();
    const t = (resume?.basics?.title as string | undefined)?.trim();
    return n ? (t ? `${n}-${t}-简历` : `${n}-简历`) : '简历';
  }, [resume]);

  // 导出为独立 HTML 文件（模板 CSS 内联 + 正文），可离线打开/二次编辑。
  const handleExportHtml = useCallback(() => {
    if (!templateHtml || !templateCss || !resume) return;
    try {
      const compiled = compileTemplate(templateHtml);
      const body = reorderBody(compiled(resume));
      const userBg = (resume.settings as { backgroundColor?: string } | undefined)?.backgroundColor;
      const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${buildFilename()}</title>
<style>
${templateCss}
${userBg ? `html, body, .resume { background: ${userBg} !important; background-color: ${userBg} !important; }` : ''}
body { margin: 0; }
@page { size: A4; margin: 0; }
</style></head><body>${body}</body></html>`;
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${buildFilename()}.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      pushToast('已导出 HTML 文件', 'success');
    } catch (err) {
      console.error('export html failed:', err);
      pushToast('导出 HTML 失败，请重试', 'error');
    }
  }, [templateHtml, templateCss, resume, reorderBody, buildFilename, pushToast]);

  // 构建「与屏幕所见 1:1」的自包含打印 HTML：模板 CSS 内联 + 重排后的正文 + @page A4。
  // 本地原生打印（runPrint）和服务端 Puppeteer 导出（handleExportPdf）共用，确保两条路完全一致。
  const buildPrintHtml = useCallback((pdfTitle: string): string | null => {
    if (!templateHtml || !templateCss || !resume) return null;
    const compiled = compileTemplate(templateHtml);
    const body = reorderBody(compiled(resume));
    // 用户没主动选背景色时，不覆盖，让模板自带背景生效；选了才强制覆盖。
    const userBg = (resume.settings as { backgroundColor?: string } | undefined)?.backgroundColor;

    return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>${pdfTitle}</title>
<style>
${templateCss}

/* Print-friendly overrides — applied on top of template's own CSS */
html, body { margin: 0; padding: 0; }
${userBg ? `html, body, .resume { background: ${userBg} !important; background-color: ${userBg} !important; }` : ''}
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
  color-adjust: exact !important;
}

/* 分页只约束"原子块"，不约束整段 section 容器。
   若对整个 section / [data-section] 也 avoid，当它放不下当前页剩余空间时会被整体
   推到下一页，导致页底留下大片空白。这里只保证：
   - 标题不与紧随内容分离（避免孤行标题）
   - 单个条目 / 列表项 / 表格行不被跨页劈开
   section 容器本身允许自然跨页流动。 */
h1, h2, h3, h4 { page-break-after: avoid; break-after: avoid-page; }
li, tr { page-break-inside: avoid; break-inside: avoid-page; }

/* 1:1 打印：模板本身就是 210mm（A4 满宽）+ 自带内边距，所以 @page 边距必须为 0，
   否则 210mm 内容塞进更窄的可打印区，浏览器会整体缩放 → 打印比屏幕窄。
   margin:0 让简历精确铺满 A4，与屏幕所见完全一致；视觉留白由模板自身 padding 提供。
   不渲染任何页脚/页码，避免第二页底部出现多余信息。 */
@page {
  size: A4;
  margin: 0;
}
@media print {
  html, body {
    margin: 0 !important;
    padding: 0 !important;${userBg ? `\n    background: ${userBg} !important;` : ''}
  }
  /* 不强制 .resume 宽度：@page margin:0 下它会自然铺满 A4(210mm)。
     模板根元素有的是 content-box，强制 width:210mm 会把内边距叠加到外面 → 超出 A4 被裁。
     这里只兜底关掉任何可能的缩放/变换，保持 1:1。 */
  .resume { transform: none !important; zoom: 1 !important; }
}
</style></head><body style="margin:0;${userBg ? `background:${userBg};` : ''}">${body}</body></html>`;
  }, [templateHtml, templateCss, resume, reorderBody]);

  const runPrint = useCallback((safety?: ReturnType<typeof setTimeout>) => {
    const done = () => { if (safety) clearTimeout(safety); printingRef.current = false; setPrinting(false); };
    // Browser uses <title> as default PDF filename — 用连字符的干净文件名。
    const pdfTitle = buildFilename();
    const html = buildPrintHtml(pdfTitle);
    if (!html) { done(); return; }

    // Render in a hidden iframe — no popup window. Print is invoked inside the iframe,
    // and the iframe is removed after the print dialog closes.
    const iframe = document.createElement('iframe');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;';
    document.body.appendChild(iframe);
    const cw = iframe.contentWindow;
    const cd = iframe.contentDocument;
    if (!cw || !cd) { iframe.remove(); done(); return; }
    cd.open();
    cd.write(html);
    cd.close();
    // Some browsers fire load synchronously after document.close, others async.
    const doPrint = () => {
      // 多数浏览器在打印 iframe 时，PDF 默认文件名取的是「顶层页面」的 document.title，
      // 而不是 iframe 里的 <title>。所以临时把主页面标题改成简历文件名，打印后还原。
      const prevTitle = document.title;
      document.title = pdfTitle;
      try { cw.focus(); cw.print(); } catch (err) { console.error('print failed:', err); pushToast('打印失败，请重试或检查浏览器设置', 'error'); }
      // print() 返回即说明预览已弹出/冻结结束，立刻复位按钮忙碌态。
      done();
      // Cleanup after a short delay — print() is sync in Chrome but async in Safari.
      setTimeout(() => { document.title = prevTitle; iframe.remove(); }, 1500);
    };
    if (cd.readyState === 'complete') doPrint();
    else iframe.onload = doPrint;
  }, [buildFilename, buildPrintHtml, pushToast]);

  const handlePrint = useCallback(() => {
    if (!templateHtml || !templateCss || !resume) return;
    if (printingRef.current) return;
    // 先把按钮切到「生成预览中…」并让出两帧绘制，再触发会冻结主线程的原生 print()。
    // 否则点击瞬间同步冻结、毫无反馈，体感像卡死。
    printingRef.current = true;
    setPrinting(true);
    // 兜底：万一某些浏览器 iframe onload 不回调导致 doPrint 没执行，3.5s 后强制复位，
    // 避免按钮永久卡在「生成预览中…」。正常路径会在 print() 返回时提前复位。
    const safety = setTimeout(() => { printingRef.current = false; setPrinting(false); }, 3500);
    requestAnimationFrame(() => requestAnimationFrame(() => runPrint(safety)));
  }, [templateHtml, templateCss, resume, runPrint]);

  // 服务端导出 PDF：把与所见 1:1 的自包含 HTML 发给 /api/pdf，由无头 Chromium 渲染，
  // 直接拿到 PDF 下载——不弹系统打印框，跨浏览器/设备排版一致，背景底纹默认保留。
  // 服务繁忙（503，渲染队列已满）时自动排队重试，避免高峰期直接报失败。
  const handleExportPdf = useCallback(async () => {
    if (pdfBusyRef.current) return;
    const pdfTitle = buildFilename();
    const html = buildPrintHtml(pdfTitle);
    if (!html) return;
    pdfBusyRef.current = true;
    setPdfBusy(true);

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    const MAX_RETRY = 4; // 503 时最多重试次数（首发 + 4 次 ≈ 高峰期约 15s 内自动消化）
    try {
      let lastErr: string | null = null;
      for (let attempt = 0; attempt <= MAX_RETRY; attempt++) {
        const res = await fetch(asset('/api/pdf'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ html, filename: pdfTitle }),
        });

        // 503：服务繁忙，渲染队列已满。按 Retry-After 退避后自动重试。
        if (res.status === 503 && attempt < MAX_RETRY) {
          const ra = Number(res.headers.get('Retry-After'));
          const waitMs = (Number.isFinite(ra) && ra > 0 ? ra : 2 + attempt) * 1000;
          pushToast('导出排队中，服务繁忙，正在重试…', 'info');
          await sleep(waitMs);
          continue;
        }

        if (!res.ok) {
          if (res.status === 503) { lastErr = 'BUSY'; break; } // 重试用尽仍繁忙
          let detail = '';
          try { detail = (await res.json())?.error ?? ''; } catch { /* ignore */ }
          throw new Error(detail || `HTTP ${res.status}`);
        }

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${pdfTitle}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        pushToast('已导出 PDF', 'success');
        return;
      }
      if (lastErr === 'BUSY') {
        pushToast('服务繁忙，请稍后再试，或先用「导出 HTML / 打印」', 'error');
      }
    } catch (err) {
      console.error('export pdf failed:', err);
      pushToast('导出 PDF 失败，请重试', 'error');
    } finally {
      pdfBusyRef.current = false;
      setPdfBusy(false);
    }
  }, [buildFilename, buildPrintHtml, pushToast]);

  return {
    buildFilename,
    handleExportHtml,
    handleExportPdf,
    handlePrint,
    printing,
    pdfBusy,
    canExport: !!(templateHtml && templateCss && resume),
  };
}
