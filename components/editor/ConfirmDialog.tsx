'use client';

/**
 * ConfirmDialog — 编辑器统一的确认对话框。
 *
 * 取代此前的三套语汇（antd Modal.confirm 删除框 + TopBar 自定义还原框 + 散落逻辑），
 * 统一成一种暖色 ink/brick 风格的对话框。提供命令式 API `confirmDialog(opts)`，
 * 调用点与原 Modal.confirm 几乎一致：
 *
 *   if (await confirmDialog({ title: '删除模块', message: '...', danger: true })) remove();
 *
 * Host 组件在 EditorLayout 挂载一次，用 Portal 渲染到 body。
 * 支持 Esc 取消 / Enter 确认 / 点击遮罩取消 / 打开时聚焦确认按钮 / aria-modal。
 */

import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';

export interface ConfirmOptions {
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** 危险操作（删除）→ 确认按钮用 brick-red；否则用 ink。 */
  danger?: boolean;
}

type Pending = ConfirmOptions & { resolve: (v: boolean) => void };

// 单例桥：confirmDialog() 把请求推给已挂载的 Host。
let pushPending: ((p: Pending) => void) | null = null;

export function confirmDialog(opts: ConfirmOptions): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    if (pushPending) pushPending({ ...opts, resolve });
    else resolve(false); // Host 未挂载时安全降级为"取消"
  });
}

function Dialog({ opts, onClose }: { opts: ConfirmOptions; onClose: (v: boolean) => void }) {
  const confirmRef = useRef<HTMLButtonElement>(null);
  const danger = opts.danger ?? false;

  useEffect(() => {
    confirmRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(false); }
      else if (e.key === 'Enter') { e.preventDefault(); onClose(true); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(28,25,23,0.30)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(false); }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={opts.title}
        style={{
          background: '#FEFEFE', borderRadius: 10, border: '1px solid #E7E5E4',
          boxShadow: '0 20px 60px rgba(28,25,23,0.18), 0 4px 16px rgba(28,25,23,0.08)',
          padding: '24px 24px 18px', width: 320,
          fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
          animation: 'rfConfirmIn 180ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: '#1C1917', margin: '0 0 6px' }}>{opts.title}</p>
        {opts.message && (
          <p style={{ fontSize: 12, color: '#78716C', margin: '0 0 20px', lineHeight: 1.6 }}>{opts.message}</p>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: opts.message ? 0 : 14 }}>
          <button
            onClick={() => onClose(false)}
            style={{
              padding: '6px 16px', borderRadius: 6, border: '1px solid #E7E5E4',
              background: 'transparent', color: '#78716C', fontSize: 12, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit', outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          >{opts.cancelLabel ?? '取消'}</button>
          <button
            ref={confirmRef}
            onClick={() => onClose(true)}
            style={{
              padding: '6px 16px', borderRadius: 6, border: 'none',
              background: danger ? '#B0463A' : '#1C1917', color: '#FAFAF9', fontSize: 12, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit', outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = danger ? '#9A3B30' : '#292524'; }}
            onMouseLeave={e => { e.currentTarget.style.background = danger ? '#B0463A' : '#1C1917'; }}
            onFocus={e => { e.currentTarget.style.boxShadow = `0 0 0 3px ${danger ? 'rgba(176,70,58,0.25)' : 'rgba(28,25,23,0.18)'}`; }}
            onBlur={e => { e.currentTarget.style.boxShadow = 'none'; }}
          >{opts.confirmLabel ?? '确定'}</button>
        </div>
      </div>
      <style>{`@keyframes rfConfirmIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }`}</style>
    </div>
  );
}

export function ConfirmDialogHost() {
  const [queue, setQueue] = useState<Pending[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    pushPending = p => setQueue(q => [...q, p]);
    return () => { pushPending = null; };
  }, []);

  const current = queue[0];
  if (!mounted || !current) return null;

  const close = (v: boolean) => {
    current.resolve(v);
    setQueue(q => q.slice(1));
  };

  return createPortal(<Dialog opts={current} onClose={close} />, document.body);
}
