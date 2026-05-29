'use client';

/**
 * Tooltip — 轻量自定义提示，取代 antd Tooltip。
 * hover / focus 350ms 后显示 ink-warm 小提示；不依赖任何 CSS-in-JS 运行时。
 * 提示渲染在包裹 span 内（相对定位），随触发元素一起定位。
 */

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

interface TooltipProps {
  title: ReactNode;
  children: ReactNode;
  /** 默认 bottom（顶栏按钮向下展开，避免被窗口顶边裁切）。 */
  placement?: 'top' | 'bottom';
}

const EDGE_MARGIN = 8; // 距视口边缘的安全留白

export function Tooltip({ title, children, placement = 'bottom' }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0); // 水平修正，避免贴近视口边缘时被裁切
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const tipRef = useRef<HTMLSpanElement>(null);

  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), 350); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };

  // 打开后测量并钳制：若提示溢出视口左右边，水平平移使其回到可见区。
  useLayoutEffect(() => {
    if (!open) { setShift(0); return; }
    const el = tipRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let s = 0;
    if (r.right > window.innerWidth - EDGE_MARGIN) s = (window.innerWidth - EDGE_MARGIN) - r.right;
    else if (r.left < EDGE_MARGIN) s = EDGE_MARGIN - r.left;
    if (s !== 0) setShift(s);
  }, [open, title]);

  const posStyle: React.CSSProperties = placement === 'top'
    ? { bottom: '100%', marginBottom: 6 }
    : { top: '100%', marginTop: 6 };

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={hide}
    >
      {children}
      {open && title && (
        <span
          ref={tipRef}
          role="tooltip"
          style={{
            position: 'absolute', left: '50%',
            transform: `translateX(-50%) translateX(${shift}px)`,
            ...posStyle,
            background: '#1C1917', color: '#FAFAF9',
            fontSize: 11, fontWeight: 500, lineHeight: 1.45,
            padding: '5px 9px', borderRadius: 6,
            fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
            boxShadow: '0 4px 14px rgba(28,25,23,0.20)', zIndex: 10000,
            pointerEvents: 'none', letterSpacing: '-0.1px',
            maxWidth: 240, width: 'max-content', textAlign: 'center',
          }}
        >
          {title}
        </span>
      )}
    </span>
  );
}
