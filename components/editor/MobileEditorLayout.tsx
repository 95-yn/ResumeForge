'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftOutlined, UndoOutlined, RedoOutlined, LoadingOutlined } from '@ant-design/icons';
import { useEditorStore } from '@/lib/editor-store';
import { useResumeExport } from '@/lib/use-resume-export';
import { useAutoSave } from '@/lib/use-autosave';
import { SectionList } from './SectionList';
import { ResumePreview } from './ResumePreview';
import { ToastContainer } from './ToastContainer';
import { ConfirmDialogHost } from './ConfirmDialog';

const SANS = "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";

// 预览区高度（占视口比例）的取值边界，拖动分隔条时夹在此区间。
const PREVIEW_MIN = 120;
const PREVIEW_DEFAULT_RATIO = 0.42;

/** 保存状态小圆点（移动端紧凑顶栏用）。 */
function StatusDot({ status }: { status: string }) {
  const color =
    status === 'saved' ? '#22C55E' :
    status === 'saving' ? '#F59E0B' :
    status === 'error' ? '#EF4444' : '#D6D3D1';
  return (
    <span style={{
      width: 7, height: 7, borderRadius: '50%', background: color, flexShrink: 0,
      transition: 'background 0.2s',
    }} />
  );
}

/** 顶栏图标按钮（撤销/重做）。 */
function IconBtn({ disabled, onClick, label, children }: {
  disabled?: boolean; onClick: () => void; label: string; children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={{
        width: 34, height: 34, borderRadius: 8, border: '1px solid #E7E5E4',
        background: '#FFF', color: disabled ? '#D6D3D1' : '#57534E',
        cursor: disabled ? 'default' : 'pointer', flexShrink: 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, outline: 'none', WebkitTapHighlightColor: 'transparent',
      }}
    >
      {children}
    </button>
  );
}

/**
 * 移动端编辑器布局：紧凑顶栏 + 上下分屏（上预览 / 下编辑），同屏所见即所得。
 *  - 上：ResumePreview（mobile 模式：A4 自适应缩放、只读），随编辑实时更新。
 *  - 下：SectionList（mobile 模式：上移/下移按钮排序、按钮常显）。
 *  - 中间分隔条可上下拖动，调整预览/编辑区高度比例。
 *  - 导出：复用 useResumeExport（PDF / HTML / 打印），与桌面端同一套逻辑。
 * 只在窄屏渲染（见 app/editor/page.tsx），桌面端仍用 EditorLayout。
 */
export function MobileEditorLayout() {
  useAutoSave();
  const router = useRouter();
  const { saveStatus, undo, redo, historyIndex, history, pushToast } = useEditorStore();
  const { handleExportPdf, handleExportHtml, handlePrint, printing, pdfBusy } = useResumeExport();
  const [showExport, setShowExport] = useState(false);
  // 预览区高度（px）；null=未初始化，渲染时回退到默认比例。
  const [previewH, setPreviewH] = useState<number | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startY: number; startH: number } | null>(null);
  const prevSaveStatus = useRef(saveStatus);

  // 保存成功 → toast（与桌面 EditorLayout 行为一致）。
  useEffect(() => {
    if (prevSaveStatus.current !== 'saved' && saveStatus === 'saved') {
      pushToast('已保存', 'success');
    }
    prevSaveStatus.current = saveStatus;
  }, [saveStatus, pushToast]);

  // 初始化预览高度为视口的默认比例。
  useEffect(() => {
    if (previewH == null) setPreviewH(Math.round(window.innerHeight * PREVIEW_DEFAULT_RATIO));
  }, [previewH]);

  // 分隔条拖动可用范围：上限要给顶栏 + 编辑区留出空间。
  const clampPreviewH = useCallback((h: number) => {
    const maxH = Math.max(PREVIEW_MIN, (shellRef.current?.clientHeight ?? window.innerHeight) - 220);
    return Math.min(maxH, Math.max(PREVIEW_MIN, h));
  }, []);

  const onDividerPointerDown = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    dragRef.current = { startY: e.clientY, startH: previewH ?? Math.round(window.innerHeight * PREVIEW_DEFAULT_RATIO) };
  }, [previewH]);

  const onDividerPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current) return;
    setPreviewH(clampPreviewH(dragRef.current.startH + (e.clientY - dragRef.current.startY)));
  }, [clampPreviewH]);

  const onDividerPointerUp = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    dragRef.current = null;
  }, []);

  const statusText =
    saveStatus === 'saved' ? '已保存' :
    saveStatus === 'saving' ? '保存中' :
    saveStatus === 'error' ? '保存失败' : '未保存';

  const exporting = printing || pdfBusy;

  return (
    <div ref={shellRef} style={{
      height: '100dvh', display: 'flex', flexDirection: 'column',
      overflow: 'hidden', background: '#FAFAF9', fontFamily: SANS,
    }}>
      {/* ---- 紧凑顶栏 ---- */}
      <div style={{
        flexShrink: 0, height: 52, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 8, padding: '0 12px',
        background: '#FFFFFF', borderBottom: '1px solid #E7E5E4',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <IconBtn onClick={() => router.push('/templates')} label="返回模板市场">
            <ArrowLeftOutlined />
          </IconBtn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, minWidth: 0 }} aria-live="polite" role="status">
            <StatusDot status={saveStatus} />
            <span style={{ fontSize: 11, color: '#A8A29E', whiteSpace: 'nowrap' }}>{statusText}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <IconBtn disabled={historyIndex <= 0} onClick={undo} label="撤销">
            <UndoOutlined style={{ fontSize: 13 }} />
          </IconBtn>
          <IconBtn disabled={historyIndex >= history.length - 1} onClick={redo} label="重做">
            <RedoOutlined style={{ fontSize: 13 }} />
          </IconBtn>
          <button
            onClick={() => setShowExport(true)}
            disabled={exporting}
            style={{
              height: 34, padding: '0 14px', borderRadius: 8, border: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#1C1917', color: '#FAFAF9', fontSize: 13, fontWeight: 600,
              cursor: exporting ? 'progress' : 'pointer', opacity: exporting ? 0.7 : 1,
              fontFamily: SANS, flexShrink: 0, outline: 'none', WebkitTapHighlightColor: 'transparent',
            }}
          >
            {exporting && <LoadingOutlined style={{ fontSize: 12 }} />}
            {exporting ? '生成中…' : '导出'}
          </button>
        </div>
      </div>

      {/* ---- 上：实时预览（高度可拖动，A4 自适应宽度，只读）---- */}
      <div style={{
        flexShrink: 0, height: previewH ?? '42vh', minHeight: PREVIEW_MIN,
        position: 'relative', display: 'flex', overflow: 'hidden',
        borderBottom: '1px solid #E7E5E4',
      }}>
        <ResumePreview mobile />
        {/* 角标：预览 */}
        <span style={{
          position: 'absolute', top: 8, left: 12, zIndex: 4,
          fontSize: 10, fontWeight: 600, letterSpacing: '0.08em',
          color: '#A8A29E', background: 'rgba(255,255,255,0.82)',
          padding: '2px 7px', borderRadius: 6, pointerEvents: 'none',
          fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
        }}>预览 · 实时</span>
      </div>

      {/* ---- 可拖动分隔条 ---- */}
      <div
        onPointerDown={onDividerPointerDown}
        onPointerMove={onDividerPointerMove}
        onPointerUp={onDividerPointerUp}
        onPointerCancel={onDividerPointerUp}
        role="separator"
        aria-label="拖动调整预览高度"
        aria-orientation="horizontal"
        style={{
          flexShrink: 0, height: 22, background: '#FFFFFF',
          borderBottom: '1px solid #E7E5E4',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'row-resize', touchAction: 'none', WebkitTapHighlightColor: 'transparent',
        }}
      >
        <span style={{ width: 40, height: 4, borderRadius: 2, background: '#D6D3D1' }} />
      </div>

      {/* ---- 下：编辑表单（占据剩余空间，自身滚动）---- */}
      <div style={{ flex: 1, minHeight: 0, position: 'relative', display: 'flex' }}>
        <SectionList mobile />
      </div>

      {/* ---- 导出底部弹层 ---- */}
      {showExport && (
        <div
          onClick={() => setShowExport(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(28,25,23,0.4)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            animation: 'mobSheetFade 160ms ease-out',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#FFFFFF', borderRadius: '16px 16px 0 0', padding: '8px 16px',
              paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
              animation: 'mobSheetUp 220ms cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div style={{ width: 36, height: 4, borderRadius: 2, background: '#E7E5E4', margin: '8px auto 14px' }} />
            <div style={{
              fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#A8A29E', fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
              padding: '0 4px 10px',
            }}>导出简历</div>
            <SheetItem
              title="导出 PDF"
              desc="服务端生成，一键下载，排版跨设备一致"
              busy={pdfBusy}
              recommended
              onClick={async () => { await handleExportPdf(); setShowExport(false); }}
            />
            <SheetItem
              title="导出 HTML"
              desc="独立网页文件，可离线打开 / 二次编辑"
              onClick={() => { handleExportHtml(); setShowExport(false); }}
            />
            <SheetItem
              title="打印"
              desc="调用系统打印，也可另存为 PDF"
              busy={printing}
              onClick={() => { handlePrint(); setShowExport(false); }}
            />
            <button
              onClick={() => setShowExport(false)}
              style={{
                width: '100%', height: 48, marginTop: 6, borderRadius: 10,
                border: '1px solid #E7E5E4', background: '#FAFAF9', color: '#57534E',
                fontSize: 15, fontWeight: 600, fontFamily: SANS, cursor: 'pointer',
                outline: 'none', WebkitTapHighlightColor: 'transparent',
              }}
            >
              取消
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes mobSheetFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mobSheetUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        /* 触屏按压反馈：tap 高亮被关掉后，用 :active 给一个明确的按下态（暖底 + 轻微缩放）。 */
        .mob-sheet-item { transition: background 160ms cubic-bezier(0.16,1,0.3,1), transform 160ms cubic-bezier(0.16,1,0.3,1); }
        .mob-sheet-item:active:not(:disabled) { background: #F0EAE0; transform: scale(0.985); }
        @media (prefers-reduced-motion: reduce) {
          [style*="mobSheet"] { animation: none !important; }
          .mob-sheet-item { transition: none !important; }
        }
      `}</style>

      <ToastContainer />
      <ConfirmDialogHost />
    </div>
  );
}

/** 导出弹层里的一个操作项。recommended 项加一个 mono「推荐」标签，与桌面端主 CTA 呼应。 */
function SheetItem({ title, desc, busy, recommended, onClick }: {
  title: string; desc: string; busy?: boolean; recommended?: boolean; onClick: () => void;
}) {
  return (
    <button
      className="mob-sheet-item"
      onClick={onClick}
      disabled={busy}
      style={{
        width: '100%', textAlign: 'left', padding: '12px 14px', marginBottom: 6,
        borderRadius: 10, border: '1px solid #E7E5E4', background: '#FEFEFE',
        cursor: busy ? 'progress' : 'pointer', opacity: busy ? 0.7 : 1,
        display: 'flex', flexDirection: 'column', gap: 3,
        fontFamily: SANS, outline: 'none', WebkitTapHighlightColor: 'transparent',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 600, color: '#1C1917' }}>
        {busy && <LoadingOutlined style={{ fontSize: 13 }} />}
        {busy ? '生成中…' : title}
        {recommended && !busy && (
          <span style={{
            fontSize: 9, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#1C1917', background: '#F0EAE0', padding: '1px 6px', borderRadius: 4,
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
          }}>推荐</span>
        )}
      </span>
      <span style={{ fontSize: 12, color: '#A8A29E' }}>{desc}</span>
    </button>
  );
}
