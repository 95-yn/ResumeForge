'use client';

/**
 * ToastContainer — 全局 Toast 通知系统
 * 用 React Portal 渲染到 document.body，避免 z-index 冲突。
 * 样式：ink-warm 黑底 #1C1917 + Plus Jakarta Sans 13px + paper-cream tint border。
 * Stack：多条 toast 往上叠，间距 8px。
 * 自动 4s 消失（在 editor-store.ts pushToast 中控制），用户可点 × 主动关。
 */

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEditorStore, type Toast } from '@/lib/editor-store';

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
  const [visible, setVisible] = useState(false);

  // Entrance animation: mount → next tick → set visible
  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const borderColor =
    toast.type === 'error'   ? 'rgba(220,38,38,0.25)' :
    toast.type === 'success' ? 'rgba(34,197,94,0.25)' :
    'rgba(240,234,224,0.18)';

  const accentColor =
    toast.type === 'error'   ? '#FCA5A5' :
    toast.type === 'success' ? '#86EFAC' :
    '#A8A29E';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: '#1C1917',
        color: '#FAFAF9',
        border: `1px solid ${borderColor}`,
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: 13,
        fontWeight: 500,
        fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
        boxShadow: '0 8px 28px rgba(28,25,23,0.32), 0 2px 8px rgba(28,25,23,0.18)',
        minWidth: 200,
        maxWidth: 380,
        pointerEvents: 'auto',
        // Entrance / exit animation
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.97)',
        transition: 'opacity 280ms cubic-bezier(0.16, 1, 0.3, 1), transform 280ms cubic-bezier(0.16, 1, 0.3, 1)',
        letterSpacing: '-0.1px',
        lineHeight: 1.4,
      }}
    >
      {/* Type indicator dot */}
      <div style={{
        width: 6, height: 6, borderRadius: '50%',
        background: accentColor,
        flexShrink: 0,
        boxShadow: `0 0 0 3px ${accentColor}22`,
      }} />

      {/* Message */}
      <span style={{ flex: 1 }}>{toast.message}</span>

      {/* Dismiss button */}
      <button
        onClick={() => onDismiss(toast.id)}
        aria-label="关闭提示"
        style={{
          border: 'none',
          background: 'transparent',
          color: '#78716C',
          cursor: 'pointer',
          fontSize: 16,
          lineHeight: 1,
          padding: '0 2px',
          flexShrink: 0,
          transition: 'color 120ms',
          outline: 'none',
          fontFamily: 'inherit',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#FAFAF9'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#78716C'; }}
        onFocus={e => { (e.currentTarget as HTMLButtonElement).style.outline = '1px solid #78716C'; (e.currentTarget as HTMLButtonElement).style.outlineOffset = '2px'; }}
        onBlur={e => { (e.currentTarget as HTMLButtonElement).style.outline = 'none'; }}
      >
        ×
      </button>
    </div>
  );
}

export function ToastContainer() {
  const toasts = useEditorStore(s => s.toasts);
  const dismissToast = useEditorStore(s => s.dismissToast);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted || toasts.length === 0) return null;

  return createPortal(
    <div
      aria-live="polite"
      aria-label="通知列表"
      style={{
        position: 'fixed',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        gap: 8,
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    >
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onDismiss={dismissToast} />
      ))}
    </div>,
    document.body
  );
}
