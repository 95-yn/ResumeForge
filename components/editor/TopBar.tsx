'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeftOutlined, PrinterOutlined, UndoOutlined, RedoOutlined, RollbackOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { compileTemplate } from '@/lib/mini-template';
import { applySectionReorder } from '@/lib/reorder-sections';
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

  // 对齐 DESIGN.md 功能色 token：safe-green / alert-amber / brick-red（取代 Tailwind 默认色）
  const color =
    status === 'saved'   ? '#16A34A' :
    status === 'saving'  ? '#D97706' :
    status === 'error'   ? '#B0463A' :
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
        boxShadow: status === 'saved' ? '0 0 0 2px rgba(22,163,74,0.15)' : 'none',
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
    templateHtml, templateCss, resume, resetToDefault, pushToast, sectionOrder,
  } = useEditorStore();
  const [scrolled, setScrolled] = useState(false);

  // 把编译后的 body 按用户拖拽/键盘重排后的 sectionOrder 重排,确保「导出/打印 === 所见」。
  const reorderBody = useCallback((bodyHtml: string): string => {
    if (typeof window === 'undefined' || !resume) return bodyHtml;
    try {
      const doc = new DOMParser().parseFromString(bodyHtml, 'text/html');
      applySectionReorder(doc, sectionOrder, resume.basics as Record<string, string> | undefined);
      return doc.body.innerHTML;
    } catch { return bodyHtml; }
  }, [sectionOrder, resume]);

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

  // 文件名（用于 PDF 默认名 / HTML 下载名）：连字符拼接，避免「· 」中点在文件名里观感怪。
  // 例：李然-运营经理-简历 / 李然-简历 / 简历
  const buildFilename = () => {
    const n = (resume?.basics?.name as string | undefined)?.trim();
    const t = (resume?.basics?.title as string | undefined)?.trim();
    return n ? (t ? `${n}-${t}-简历` : `${n}-简历`) : '简历';
  };

  // 导出为独立 HTML 文件（模板 CSS 内联 + 正文），可离线打开/二次编辑。
  const handleExportHtml = () => {
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
  };

  const handlePrint = () => {
    if (!templateHtml || !templateCss || !resume) return;
    const compiled = compileTemplate(templateHtml);
    const body = reorderBody(compiled(resume));
    // 用户没主动选背景色时，不覆盖，让模板自带背景生效；选了才强制覆盖。
    const userBg = (resume.settings as { backgroundColor?: string } | undefined)?.backgroundColor;

    // A4 with sensible default margins. Most templates control their own internal
    // padding, so we use minimal page margins and let the resume container breathe.
    // Browser uses <title> as default PDF filename — 用连字符的干净文件名。
    const pdfTitle = buildFilename();

    const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>${pdfTitle}</title>
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
      // 多数浏览器在打印 iframe 时，PDF 默认文件名取的是「顶层页面」的 document.title，
      // 而不是 iframe 里的 <title>。所以临时把主页面标题改成简历文件名，打印后还原。
      const prevTitle = document.title;
      document.title = pdfTitle;
      try { cw.focus(); cw.print(); } catch (err) { console.error('print failed:', err); pushToast('打印失败，请重试或检查浏览器设置', 'error'); }
      // Cleanup after a short delay — print() is sync in Chrome but async in Safari.
      setTimeout(() => { document.title = prevTitle; iframe.remove(); }, 1500);
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

        <Logo
          variant="editor"
          onClick={() => router.push('/templates')}
          aria-label="返回模板市场"
        />

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

        <Tooltip title="导出为独立 HTML 文件（可离线打开）">
          <button
            onClick={handleExportHtml}
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0 14px', height: 32, borderRadius: 6,
              border: '1px solid #E7E5E4',
              background: 'transparent', color: '#78716C',
              fontSize: 12, fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.12s, color 0.12s',
              fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
              outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="导出为 HTML"
          >
            导出 HTML
          </button>
        </Tooltip>

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
