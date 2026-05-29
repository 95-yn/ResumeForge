'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeftOutlined, PrinterOutlined, UndoOutlined, RedoOutlined, RollbackOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { compileTemplate } from '@/lib/mini-template';
import { useEditorStore } from '@/lib/editor-store';
import { confirmDialog } from './ConfirmDialog';
import { Tooltip } from './Tooltip';

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
          ? 'opacity 400ms 300ms ease-out, transform 400ms 300ms cubic-bezier(0.16, 1, 0.3, 1)'
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
    templateHtml, templateCss, resume, resetToDefault, pushToast,
  } = useEditorStore();
  const [scrolled, setScrolled] = useState(false);

  // Scroll-shadow: listen on the preview scroller (closest scrollable ancestor in the editor layout)
  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>('[data-preview-scroller]') ?? window;
    const handler = () => {
      const y = scroller instanceof Window ? window.scrollY : (scroller as HTMLElement).scrollTop;
      setScrolled(y > 2);
    };
    scroller.addEventListener('scroll', handler, { passive: true });
    return () => scroller.removeEventListener('scroll', handler);
  }, []);

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
    // Browser uses <title> as default PDF filename. Compose 姓名 · 职位 for professional output.
    const rawName = (resume.basics?.name as string | undefined)?.trim();
    const rawTitle = (resume.basics?.title as string | undefined)?.trim();
    const pdfTitle = [rawName, rawTitle].filter(Boolean).join(' · ') || '简历';

    // Footer text: 姓名 · 职位 (same as title, CSS-escaped for content: "...")
    const footerName = pdfTitle.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

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

/* Page margins live ONLY in @page — body must be 0 0 or padding stacks.
   8mm / 10mm 是现代简历常用紧凑边距（约 0.31" / 0.39"），比 Word narrow
   (0.5") 紧、比印刷 editorial (6mm) 松，平衡阅读舒适和单页容纳。
   多页时底部加 14mm 留给页脚（9pt × 行高 + 间距）。 */
@page {
  size: A4;
  margin: 8mm 10mm 14mm 10mm;
  @bottom-center {
    content: "${footerName}";
    font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
    font-size: 8pt;
    color: #A8A29E;
  }
  @bottom-right {
    content: "第 " counter(page) " 页 / 共 " counter(pages) " 页";
    font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
    font-size: 8pt;
    color: #A8A29E;
  }
}
/* 首页不显示页脚（单页简历不需要页码干扰视觉） */
@page :first {
  margin-bottom: 8mm;
  @bottom-center { content: none; }
  @bottom-right { content: none; }
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
      try { cw.focus(); cw.print(); } catch (err) { console.error('print failed:', err); pushToast('打印失败，请重试或检查浏览器设置', 'error'); }
      // Cleanup after a short delay — print() is sync in Chrome but async in Safari.
      setTimeout(() => iframe.remove(), 1500);
    };
    if (cd.readyState === 'complete') doPrint();
    else iframe.onload = doPrint;
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
      // Scroll-aware shadow: appears only when content scrolls under the bar
      boxShadow: scrolled ? '0 2px 12px rgba(28,25,23,0.08), 0 1px 3px rgba(28,25,23,0.04)' : 'none',
      transition: 'box-shadow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
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

        {/* Save status — aria-live 让读屏用户也能听到保存状态变化 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }} aria-live="polite" role="status">
          <StatusDot status={saveStatus} />
          <span style={{
            fontSize: 11, color: '#A8A29E',
            fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
          }}>{statusText}</span>
        </div>
      </div>


      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Undo/Redo cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <UndoRedoBtn
            disabled={historyIndex <= 0}
            onClick={undo}
            title="撤销 (⌘Z)"
          >
            <UndoOutlined style={{ fontSize: 12 }} />
          </UndoRedoBtn>
          <UndoRedoBtn
            disabled={historyIndex >= history.length - 1}
            onClick={redo}
            title="重做 (⌘⇧Z)"
          >
            <RedoOutlined style={{ fontSize: 12 }} />
          </UndoRedoBtn>
          <Tooltip title="还原默认内容">
            <button
              style={{
                width: 30, height: 30, borderRadius: 6,
                border: 'none', padding: 0,
                background: 'transparent', color: '#78716C',
                cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, transition: 'background 120ms cubic-bezier(0.16, 1, 0.3, 1)',
                outline: 'none',
              }}
              onClick={async () => {
                if (await confirmDialog({
                  title: '还原默认内容',
                  message: '当前编辑的内容将被模板默认内容替换，此操作无法撤销。',
                  confirmLabel: '还原',
                })) {
                  try { resetToDefault(); pushToast('已还原为模板初始内容', 'success'); }
                  catch (err) { console.error('reset failed:', err); pushToast('还原失败，请重试', 'error'); }
                }
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
              onBlur={e => { e.currentTarget.style.outline = 'none'; }}
              aria-label="还原默认内容"
            >
              <RollbackOutlined style={{ fontSize: 12 }} />
            </button>
          </Tooltip>
        </div>

        <div style={{ width: 1, height: 18, background: '#E7E5E4' }} />

        <button
          onClick={save}
          disabled={saveStatus === 'saved'}
          style={{
            padding: '0 16px', height: 32, borderRadius: 6,
            border: 'none',
            background: saveStatus === 'saved' ? '#F5F5F4' : '#1C1917',
            color: saveStatus === 'saved' ? '#A8A29E' : '#FAFAF9',
            fontSize: 12, fontWeight: 600,
            cursor: saveStatus === 'saved' ? 'default' : 'pointer',
            transition: 'background 150ms cubic-bezier(0.16, 1, 0.3, 1), color 150ms cubic-bezier(0.16, 1, 0.3, 1)',
            fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
            outline: 'none',
          }}
          onMouseEnter={e => { if (saveStatus !== 'saved') { e.currentTarget.style.background = '#292524'; } }}
          onMouseLeave={e => { e.currentTarget.style.background = saveStatus === 'saved' ? '#F5F5F4' : '#1C1917'; }}
          onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
          onBlur={e => { e.currentTarget.style.outline = 'none'; }}
        >
          保存
        </button>

        <Tooltip title="打印或另存为 PDF（建议关闭页眉页脚 + 勾选背景图形）">
          <button
            onClick={handlePrint}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0 16px', height: 32, borderRadius: 6,
              border: 'none',
              background: '#1C1917', color: '#FFFFFF',
              fontSize: 12, fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.12s, box-shadow 0.12s',
              fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
              outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#292524'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(28,25,23,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1C1917'; e.currentTarget.style.boxShadow = 'none'; }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="打印或另存为 PDF"
          >
            <PrinterOutlined style={{ fontSize: 12 }} />
            打印 / 导出 PDF
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
