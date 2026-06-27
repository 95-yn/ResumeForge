'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeftOutlined, PrinterOutlined, UndoOutlined, RedoOutlined, RollbackOutlined, DownloadOutlined, LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { useEditorStore } from '@/lib/editor-store';
import { useResumeExport } from '@/lib/use-resume-export';
import { confirmDialog } from './ConfirmDialog';
import { Tooltip } from './Tooltip';

// 工作坊房间统一的状态过渡缓动（ease-out-expo，DESIGN：120–200ms）。
// 导出/打印按钮原先用 0.12s 线性，与「保存」按钮的曲线不一致，这里收口为同一条。
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const SANS = "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";

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
    resetToDefault, pushToast,
  } = useEditorStore();
  // 导出/打印逻辑统一收口到 useResumeExport（与移动端布局共用）。
  const { handleExportHtml, handleExportPdf, handlePrint, printing, pdfBusy } = useResumeExport();
  const [scrolled, setScrolled] = useState(false);
  // handlePrint 来自 hook（依赖 resume 等会重建），用 ref 保存最新引用，
  // 让一次性注册的 Cmd/Ctrl+P 监听始终调到最新的打印逻辑。
  const handlePrintRef = useRef<() => void>(() => {});

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

  // 拦截 Cmd/Ctrl+P：浏览器原生打印会渲染整个编辑器页面（巨大 iframe + 纸纹 SVG 滤镜
  // + 多个富文本编辑器），按打印分辨率重新光栅化极慢、卡顿。改为走 App 内的干净打印：
  // 只在隐藏 iframe 里渲染简历本身，与「打印」按钮完全一致，所见即所得且秒开。
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        e.stopPropagation();
        handlePrintRef.current();
      }
    };
    window.addEventListener('keydown', onKey, { capture: true });
    return () => window.removeEventListener('keydown', onKey, { capture: true });
  }, []);

  // 让 Cmd/Ctrl+P 监听始终指向最新的 handlePrint。
  handlePrintRef.current = handlePrint;

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
              background: 'transparent', color: '#57534E',
              fontSize: 12, fontWeight: 500,
              cursor: 'pointer',
              transition: `background 150ms ${EASE}, color 150ms ${EASE}`,
              fontFamily: SANS,
              outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#57534E'; }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="导出为 HTML"
          >
            导出 HTML
          </button>
        </Tooltip>

        {/* 打印：通用兜底出口（不依赖服务端），降为次级 ghost 按钮。 */}
        <Tooltip title="调用系统打印，也可另存为 PDF（建议关闭页眉页脚 + 勾选背景图形）">
          <button
            onClick={handlePrint}
            disabled={printing}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '0 14px', height: 32, borderRadius: 6,
              border: '1px solid #E7E5E4',
              background: 'transparent', color: '#57534E',
              fontSize: 12, fontWeight: 500,
              cursor: printing ? 'progress' : 'pointer',
              opacity: printing ? 0.72 : 1,
              transition: `background 150ms ${EASE}, color 150ms ${EASE}, opacity 150ms ${EASE}`,
              fontFamily: SANS,
              outline: 'none',
            }}
            onMouseEnter={e => { if (!printing) { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#57534E'; }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="打印或另存为 PDF"
            aria-busy={printing}
          >
            {printing ? <LoadingOutlined style={{ fontSize: 12 }} /> : <PrinterOutlined style={{ fontSize: 12 }} />}
            {printing ? '生成预览中…' : '打印'}
          </button>
        </Tooltip>

        {/* 导出 PDF：服务端一键下载、跨设备一致——本编辑器推荐的主导出动作，承载主 CTA 视觉权重。 */}
        <Tooltip title="服务端生成 PDF（无需打印框，一键下载，排版跨设备一致）">
          <button
            onClick={handleExportPdf}
            disabled={pdfBusy}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0 16px', height: 32, borderRadius: 6,
              border: 'none',
              background: '#1C1917', color: '#FAFAF9',
              fontSize: 12, fontWeight: 600,
              cursor: pdfBusy ? 'progress' : 'pointer',
              opacity: pdfBusy ? 0.72 : 1,
              transition: `background 150ms ${EASE}, box-shadow 150ms ${EASE}, opacity 150ms ${EASE}`,
              fontFamily: SANS,
              outline: 'none',
            }}
            onMouseEnter={e => { if (!pdfBusy) { e.currentTarget.style.background = '#292524'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(28,25,23,0.18)'; } }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1C1917'; e.currentTarget.style.boxShadow = 'none'; }}
            onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            aria-label="导出为 PDF"
            aria-busy={pdfBusy}
          >
            {pdfBusy ? <LoadingOutlined style={{ fontSize: 12 }} /> : <DownloadOutlined style={{ fontSize: 12 }} />}
            {pdfBusy ? '生成中…' : '导出 PDF'}
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
