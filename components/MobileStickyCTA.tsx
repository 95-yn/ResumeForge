'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * 移动端底部常驻主 CTA。仅窄屏(≤640px)、且滚过首屏后浮现,
 * 给手机用户一个大拇指够得到的转化入口。纸感底栏 + 墨色按钮,保持品牌克制(非 SaaS 花哨条)。
 */
export function MobileStickyCTA({ href, label }: { href: string; label: string }) {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const updM = () => setMobile(mq.matches);
    updM();
    mq.addEventListener('change', updM);
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { mq.removeEventListener('change', updM); window.removeEventListener('scroll', onScroll); };
  }, []);

  if (!mobile) return null;

  return (
    <div
      aria-hidden={!show}
      style={{
        position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 60,
        padding: '11px 18px calc(11px + env(safe-area-inset-bottom, 0px))',
        background: '#F5F1E8',
        borderTop: '1px solid #E7E5E4',
        boxShadow: '0 -4px 16px rgba(61,42,26,0.06)',
        transform: show ? 'translateY(0)' : 'translateY(130%)',
        transition: 'transform 340ms cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <Link
        href={href}
        tabIndex={show ? 0 : -1}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          height: 48, borderRadius: 8, background: '#1C1917', color: '#FAFAF9',
          fontSize: 15, fontWeight: 600, letterSpacing: '0.01em', textDecoration: 'none',
          fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
        }}
      >{label}</Link>
    </div>
  );
}
