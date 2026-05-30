'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './ContactFloat.module.css';
import { asset } from '@/lib/base-path';

/* 联系方式：换邮箱或二维码改这两行即可 */
const CONTACT_EMAIL = '95.yyyyn@gmail.com';
const WECHAT_QR = '/contact-wechat-qr'; // 同名 .webp / .jpg 两份

export function ContactFloat() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const qrPreloaded = useRef(false);

  // 悬停/聚焦「联系我」时就预取二维码，等真正打开面板时已在缓存里，不再白等
  const preloadQR = () => {
    if (qrPreloaded.current) return;
    qrPreloaded.current = true;
    const img = new Image();
    img.src = asset(`${WECHAT_QR}.webp`);
  };

  // 点击外部 / Esc 关闭
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // 编辑器是全屏工作区，预览区不放任何 UI，故跳过
  if (pathname?.startsWith('/editor')) return null;

  return (
    <div className={styles.wrap} ref={wrapRef}>
      {open && (
        <div className={styles.panel} role="dialog" aria-label="联系方式">
          <span className={styles.label}>微信 · WeChat</span>
          <picture>
            <source srcSet={asset(`${WECHAT_QR}.webp`)} type="image/webp" />
            <img
              src={asset(`${WECHAT_QR}.jpg`)}
              alt="微信二维码，扫码添加好友"
              className={styles.qr}
              decoding="async"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </picture>
          <div className={styles.divider} />
          <span className={styles.label}>邮箱 · Email</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>{CONTACT_EMAIL}</a>
        </div>
      )}

      <button
        type="button"
        className={`${styles.tab}${open ? ` ${styles.tabOpen}` : ''}`}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={preloadQR}
        onFocus={preloadQR}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="联系我"
      >
        <svg className={styles.tabIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 3.5h12v9H2v-9z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M2.4 4 8 8.4 13.6 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={styles.tabText}>联系我</span>
      </button>
    </div>
  );
}
