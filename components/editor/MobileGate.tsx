'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SERIF = "'Fraunces', Georgia, serif";
const MONO = "'JetBrains Mono', 'SF Mono', monospace";
const SANS = "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";
const INK = '#2D1810';
const ACCENT = '#1E5A6B';

/**
 * 移动端访问编辑器时的友好拦截页。
 * 编辑器依赖左右分栏预览、拖拽排序、A4 实时排版，小屏体验很差，
 * 因此在窄屏（≤820px）只展示此提示，引导用户用电脑打开 / 先逛模板库。
 */
export function MobileGate() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      const url = typeof window !== 'undefined' ? window.location.href : '';
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        // 降级：选中一个临时输入框再 execCommand
        const ta = document.createElement('textarea');
        ta.value = url; ta.style.cssText = 'position:fixed;opacity:0;';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); ta.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch { /* 复制失败静默，用户仍可手动复制地址栏 */ }
  };

  return (
    <main style={{
      minHeight: '100dvh', width: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      background: '#F5F2EB',
      backgroundImage: 'radial-gradient(rgba(45,24,16,0.035) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      padding: '48px 28px',
      boxSizing: 'border-box', textAlign: 'center', fontFamily: SANS,
    }}>
      <div style={{ maxWidth: 360, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* 线描插画：显示器 + 一台被搁置的手机 */}
        <svg width="124" height="98" viewBox="0 0 124 98" fill="none"
          stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ marginBottom: 30 }} aria-hidden="true">
          {/* 显示器外框 */}
          <rect x="6" y="6" width="92" height="62" rx="6" />
          {/* 屏内简历：标题条（强调色）+ 正文行 */}
          <line x1="20" y1="22" x2="50" y2="22" stroke={ACCENT} strokeWidth="3.5" />
          <line x1="20" y1="34" x2="84" y2="34" stroke="rgba(45,24,16,0.4)" />
          <line x1="20" y1="44" x2="78" y2="44" stroke="rgba(45,24,16,0.4)" />
          <line x1="20" y1="54" x2="62" y2="54" stroke="rgba(45,24,16,0.4)" />
          {/* 支架与底座 */}
          <path d="M52 68 V80 M36 84 H68" />
          {/* 右下角搁置的手机（缩小、虚线、半透明，暗示"先放一边"） */}
          <g opacity="0.5" strokeDasharray="3 3">
            <rect x="92" y="56" width="26" height="38" rx="5" />
            <line x1="100" y1="88" x2="110" y2="88" strokeDasharray="0" />
          </g>
        </svg>

        <p style={{
          margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: ACCENT, fontWeight: 600,
        }}>
          仅限电脑端 · Desktop Only
        </p>

        <h1 style={{
          margin: '14px 0 0', fontFamily: SERIF, fontWeight: 400, fontStyle: 'italic',
          fontSize: 'clamp(26px, 8vw, 34px)', lineHeight: 1.25, color: INK,
        }}>
          请用电脑打开编辑器
        </h1>

        <p style={{
          margin: '16px 0 0', fontSize: 14, lineHeight: 1.75, color: '#6B5A4D',
        }}>
          简历编辑器需要更大的画布——左右分栏实时预览、拖拽排序、A4 精准排版。手机屏幕太小，改起来会很憋屈。为了让你改得顺手、导出得漂亮，这一步只在电脑端开放。
        </p>

        {/* 操作区 */}
        <div style={{ marginTop: 30, width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button
            onClick={copyLink}
            style={{
              width: '100%', height: 48, borderRadius: 10, border: 'none',
              background: copied ? ACCENT : INK, color: '#FAFAF9',
              fontSize: 15, fontWeight: 600, fontFamily: SANS, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'background 0.18s ease', WebkitTapHighlightColor: 'transparent',
            }}
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8.5l3.5 3.5L13 4.5" />
                </svg>
                链接已复制，去电脑上打开
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5.5" y="5.5" width="8" height="8" rx="2" />
                  <path d="M10.5 5.5V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h1.5" />
                </svg>
                复制链接，发到电脑上继续
              </>
            )}
          </button>

          <button
            onClick={() => router.push('/templates')}
            style={{
              width: '100%', height: 48, borderRadius: 10,
              background: 'transparent', color: INK,
              border: '1.5px solid rgba(45,24,16,0.18)',
              fontSize: 15, fontWeight: 600, fontFamily: SANS, cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            先逛逛模板库
          </button>
        </div>

        <p style={{
          margin: '28px 0 0', fontFamily: MONO, fontSize: 11, letterSpacing: '0.06em',
          color: '#A8A29E',
        }}>
          ResumeForge · 电脑端体验更佳
        </p>
      </div>
    </main>
  );
}
