'use client';

import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'antd';
import { ArrowLeftOutlined, PrinterOutlined, UndoOutlined, RedoOutlined, ReloadOutlined, FilePdfOutlined, LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { compileTemplate } from '@/lib/mini-template';
import { useEditorStore } from '@/lib/editor-store';

/** Grip icon — 6 dots, 2×3 SVG */
function GripIcon() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
      <circle cx="2.5" cy="2.5" r="1.2" fill="currentColor" />
      <circle cx="7.5" cy="2.5" r="1.2" fill="currentColor" />
      <circle cx="2.5" cy="7"   r="1.2" fill="currentColor" />
      <circle cx="7.5" cy="7"   r="1.2" fill="currentColor" />
      <circle cx="2.5" cy="11.5" r="1.2" fill="currentColor" />
      <circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export { GripIcon };

type UndoRedoBtnProps = {
  disabled: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
};

function UndoRedoBtn({ disabled, onClick, title, children }: UndoRedoBtnProps) {
  const [pressing, setPressing] = useState(false);

  return (
    <Tooltip title={title}>
      <button
        disabled={disabled}
        onClick={onClick}
        onMouseDown={() => { if (!disabled) setPressing(true); }}
        onMouseUp={() => setPressing(false)}
        onMouseLeave={() => setPressing(false)}
        style={{
          width: 30, height: 30, borderRadius: 6,
          border: 'none', padding: 0,
          background: 'transparent',
          color: '#78716C',
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13,
          opacity: disabled ? 0.3 : 1,
          transform: pressing ? 'translateY(1px) scale(0.97)' : 'none',
          transition: [
            'opacity 300ms cubic-bezier(0.16, 1, 0.3, 1)',
            'transform 50ms ease-out',
            'background 120ms',
          ].join(', '),
          outline: 'none',
        }}
        onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
        onBlur={e => { e.currentTarget.style.outline = 'none'; }}
        onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = '#F0EAE0'; }}
        aria-label={title}
      >
        {children}
      </button>
    </Tooltip>
  );
}

/** Status dot with pulse animation on change */
function StatusDot({ status }: { status: 'saved' | 'saving' | 'unsaved' | 'error' }) {
  const prevStatus = useRef(status);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (prevStatus.current !== status) {
      prevStatus.current = status;
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 450);
      return () => clearTimeout(t);
    }
  }, [status]);

  const color =
    status === 'saved'   ? '#22C55E' :
    status === 'saving'  ? '#F59E0B' :
    status === 'error'   ? '#DC2626' :
    '#A8A29E';

  return (
    <div style={{ position: 'relative', width: 6, height: 6, flexShrink: 0 }}>
      {/* Pulse ring */}
      <div style={{
        position: 'absolute', inset: -3,
        borderRadius: '50%',
        background: color,
        opacity: pulse ? 0.5 : 0,
        transform: pulse ? 'scale(2.4)' : 'scale(1)',
        transition: pulse
          ? 'opacity 400ms ease-out, transform 400ms cubic-bezier(0.16, 1, 0.3, 1)'
          : 'none',
        pointerEvents: 'none',
      }} />
      {/* Dot */}
      <div style={{
        width: 6, height: 6, borderRadius: '50%',
        background: color,
        transition: 'background 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: status === 'saved' ? '0 0 0 2px rgba(34,197,94,0.15)' : 'none',
        position: 'relative',
      }} />
    </div>
  );
}

export function TopBar() {
  const router = useRouter();
  const {
    save, saveStatus, saveErrorMessage, clearSaveError,
    undo, redo, historyIndex, history,
    templateHtml, templateCss, resume, resetToDefault,
  } = useEditorStore();
  const [exportingPdf, setExportingPdf] = useState(false);

  // Dismiss error toast after 5s
  useEffect(() => {
    if (saveStatus === 'error') {
      const t = setTimeout(() => clearSaveError(), 5000);
      return () => clearTimeout(t);
    }
  }, [saveStatus, clearSaveError]);

  const handlePrint = () => {
    if (!templateHtml || !templateCss || !resume) return;
    const compiled = compileTemplate(templateHtml);
    const body = compiled(resume);
    const bgColor = (resume.settings as { backgroundColor?: string } | undefined)?.backgroundColor || '#ffffff';

    // A4 with sensible default margins. Most templates control their own internal
    // padding, so we use minimal page margins and let the resume container breathe.
    // Empty <title> ⇒ browser header in print dialog shows nothing instead of "about:blank"
    const pdfTitle = (resume.basics?.name as string | undefined) || '简历';
    const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>${pdfTitle}</title>
<style>
${templateCss}

/* Print-friendly overrides — applied on top of template's own CSS */
html, body { margin: 0; padding: 0; background: ${bgColor} !important; }
html, body, .resume { background: ${bgColor} !important; background-color: ${bgColor} !important; }
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
  color-adjust: exact !important;
}

/* Avoid orphan section headers and broken list items across pages */
h1, h2, h3, h4 { page-break-after: avoid; break-after: avoid-page; }
li, tr { page-break-inside: avoid; break-inside: avoid-page; }
.section, section, .entry, [data-section], [data-entry] {
  page-break-inside: avoid;
  break-inside: avoid-page;
}

/* Page margins live ONLY in @page — body must be 0 0 or padding stacks */
@page {
  size: A4;
  margin: 12mm 14mm;
}
@media print {
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: ${bgColor} !important;
  }
}
</style></head><body style="margin:0;background:${bgColor}">${body}</body></html>`;

    // Render in a hidden iframe — no popup window. Print is invoked inside the iframe,
    // and the iframe is removed after the print dialog closes.
    const iframe = document.createElement('iframe');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;';
    document.body.appendChild(iframe);
    const cw = iframe.contentWindow;
    const cd = iframe.contentDocument;
    if (!cw || !cd) { iframe.remove(); return; }
    cd.open();
    cd.write(html);
    cd.close();
    // Some browsers fire load synchronously after document.close, others async.
    const doPrint = () => {
      try { cw.focus(); cw.print(); } catch (err) { console.error('print failed:', err); }
      // Cleanup after a short delay — print() is sync in Chrome but async in Safari.
      setTimeout(() => iframe.remove(), 1500);
    };
    if (cd.readyState === 'complete') doPrint();
    else iframe.onload = doPrint;
  };

  // Export to PDF — Strategy A: capture the live preview iframe's body directly.
  // No hidden container, no rebuild — html2canvas reads the exact DOM the user sees.
  // Editor-injected hover/outline styles are invisible to canvas (no hover during capture).
  const handleExportPdf = async () => {
    if (!templateHtml || !templateCss || !resume) return;
    setExportingPdf(true);
    try {
      const iframe = document.querySelector<HTMLIFrameElement>('iframe[title="preview"]');
      const idoc = iframe?.contentDocument;
      const ibody = idoc?.body;
      if (!iframe || !idoc || !ibody) {
        throw new Error('Preview iframe not ready');
      }

      // Wait for any pending fonts inside the iframe
      try { await (idoc as Document & { fonts?: { ready: Promise<unknown> } }).fonts?.ready; } catch { /* no-op */ }
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

      const bgColor = (resume.settings as { backgroundColor?: string } | undefined)?.backgroundColor || '#ffffff';

      // Temporarily strip editor-injected style attrs on data-field elements
      // (cursor: text, outline, borderRadius, transition) so canvas isn't influenced
      // by transient hover background applied during interaction.
      const fields = Array.from(ibody.querySelectorAll<HTMLElement>('[data-field]'));
      const snapshot = fields.map(el => ({ el, style: el.getAttribute('style') }));
      fields.forEach(el => el.removeAttribute('style'));

      try {
        const mod = await import('html2pdf.js');
        type Html2PdfChain = {
          set: (opts: unknown) => Html2PdfChain;
          from: (el: HTMLElement) => Html2PdfChain;
          save: () => Promise<void>;
        };
        const html2pdf = ((mod as { default?: () => Html2PdfChain }).default
          ?? (mod as unknown as () => Html2PdfChain));

        const filename = `${resume.basics?.name || '简历'}.pdf`;

        await html2pdf()
          .set({
            margin: [8, 10, 8, 10],
            filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
              scale: 2,
              useCORS: true,
              allowTaint: true,
              backgroundColor: bgColor,
              letterRendering: true,
              logging: false,
              width: ibody.scrollWidth,
              height: ibody.scrollHeight,
              windowWidth: ibody.scrollWidth,
              windowHeight: ibody.scrollHeight,
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
          })
          .from(ibody)
          .save();
      } finally {
        // Restore editor inline styles so editing UX is unchanged
        snapshot.forEach(({ el, style }) => {
          if (style != null) el.setAttribute('style', style);
        });
      }
    } catch (err) {
      console.error('PDF export failed:', err);
      alert(`PDF 导出失败：${err instanceof Error ? err.message : String(err)}\n\n请改用「打印」按钮，在打印对话框中选「另存为 PDF」。`);
    } finally {
      setExportingPdf(false);
    }
  };

  const statusText =
    saveStatus === 'saved'   ? '已保存' :
    saveStatus === 'saving'  ? '保存中' :
    saveStatus === 'error'   ? '保存失败' :
    '未保存';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      height: 52,
      background: '#FFFFFF',
      borderBottom: '1px solid #E7E5E4',
      flexShrink: 0,
      position: 'relative',
    }}>
      {/* Error toast banner */}
      {saveStatus === 'error' && saveErrorMessage && (
        <div style={{
          position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
          background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8,
          padding: '8px 16px', fontSize: 12, color: '#DC2626',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)', zIndex: 9999,
          display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
          fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
        }}>
          <span>{saveErrorMessage}</span>
          <button
            onClick={clearSaveError}
            style={{ border: 'none', background: 'none', color: '#DC2626', cursor: 'pointer', fontSize: 14, padding: 0, lineHeight: 1 }}
          >×</button>
        </div>
      )}

      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          onClick={() => router.push('/templates')}
          style={{
            width: 30, height: 30, borderRadius: 6, border: '1px solid #E7E5E4',
            background: 'transparent', cursor: 'pointer', color: '#78716C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, transition: 'all 0.12s',
            outline: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
          onBlur={e => { e.currentTarget.style.outline = 'none'; }}
          title="返回模板市场"
          aria-label="返回模板市场"
        >
          <ArrowLeftOutlined />
        </button>

        {/* Logo — Fraunces italic 14px, clickable */}
        <span
          onClick={() => router.push('/templates')}
          style={{
            fontSize: 14,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#44403C',
            letterSpacing: '-0.3px',
            fontFamily: "'Fraunces', Georgia, serif",
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          ResumeForge
        </span>

        <div style={{ width: 1, height: 16, background: '#E7E5E4' }} />

        {/* Save status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <StatusDot status={saveStatus} />
          <span style={{
            fontSize: 11, color: '#A8A29E',
            fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
          }}>{statusText}</span>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <UndoRedoBtn
          disabled={historyIndex <= 0}
          onClick={undo}
          title="撤销 (⌘Z)"
        >
          <UndoOutlined />
        </UndoRedoBtn>
        <UndoRedoBtn
          disabled={historyIndex >= history.length - 1}
          onClick={redo}
          title="重做 (⌘⇧Z)"
        >
          <RedoOutlined />
        </UndoRedoBtn>
        <Tooltip title="还原默认内容">
          <button
            style={{
              width: 30, height: 30, borderRadius: 6,
              border: 'none', padding: 0,
              background: 'transparent', color: '#78716C',
              cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, transition: 'all 0.12s',
              outline: 'none',
            }}
            onClick={() => {
              if (window.confirm('还原为默认内容？\n当前编辑的内容将被替换。')) {
                try { resetToDefault(); } catch (err) { console.error('reset failed:', err); }
              }
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="还原默认内容"
          >
            <ReloadOutlined />
          </button>
        </Tooltip>

        <div style={{ width: 1, height: 18, background: '#E7E5E4', margin: '0 6px' }} />

        <button
          onClick={save}
          disabled={saveStatus === 'saved'}
          style={{
            padding: '0 14px', height: 32, borderRadius: 6,
            border: '1px solid #E7E5E4',
            background: saveStatus === 'saved' ? '#F5F5F4' : '#FFFFFF',
            color: saveStatus === 'saved' ? '#A8A29E' : '#78716C',
            fontSize: 12, fontWeight: 500,
            cursor: saveStatus === 'saved' ? 'default' : 'pointer',
            transition: 'all 0.12s',
            fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
            outline: 'none',
          }}
          onMouseEnter={e => { if (saveStatus !== 'saved') { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; } }}
          onMouseLeave={e => { e.currentTarget.style.background = saveStatus === 'saved' ? '#F5F5F4' : '#FFFFFF'; e.currentTarget.style.color = saveStatus === 'saved' ? '#A8A29E' : '#78716C'; }}
          onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
          onBlur={e => { e.currentTarget.style.outline = 'none'; }}
        >
          保存
        </button>

        <Tooltip title="浏览器原生打印 / 另存为 PDF">
          <button
            onClick={handlePrint}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0 14px', height: 32, borderRadius: 6,
              border: '1px solid #E7E5E4',
              background: '#FFFFFF', color: '#44403C',
              fontSize: 12, fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.12s, color 0.12s',
              fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
              outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#44403C'; }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="打印或另存为 PDF"
          >
            <PrinterOutlined style={{ fontSize: 12 }} />
            打印
          </button>
        </Tooltip>

        <Tooltip title="高清 PDF 直接下载（不弹打印对话框）">
          <button
            onClick={handleExportPdf}
            disabled={exportingPdf}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0 16px', height: 32, borderRadius: 6,
              border: 'none',
              background: exportingPdf ? '#78716C' : '#1C1917', color: '#FFFFFF',
              fontSize: 12, fontWeight: 600,
              cursor: exportingPdf ? 'wait' : 'pointer',
              transition: 'background 0.12s, box-shadow 0.12s',
              fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
              outline: 'none',
            }}
            onMouseEnter={e => {
              if (!exportingPdf) { e.currentTarget.style.background = '#292524'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(28,25,23,0.18)'; }
            }}
            onMouseLeave={e => {
              if (!exportingPdf) { e.currentTarget.style.background = '#1C1917'; e.currentTarget.style.boxShadow = 'none'; }
            }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="导出 PDF 文件"
          >
            {exportingPdf ? <LoadingOutlined style={{ fontSize: 12 }} /> : <FilePdfOutlined style={{ fontSize: 12 }} />}
            {exportingPdf ? '导出中…' : '导出 PDF'}
          </button>
        </Tooltip>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0ms !important; animation-duration: 0ms !important; }
        }
      `}</style>
    </div>
  );
}
