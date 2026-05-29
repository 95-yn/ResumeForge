'use client';

import Link from 'next/link';
import styles from './Logo.module.css';

export type LogoVariant = 'landing' | 'archive' | 'editor';

type LogoProps = {
  variant?: LogoVariant;
  showWordmark?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
};

const VARIANT_COLORS: Record<LogoVariant, { ink: string; accent: string }> = {
  landing: { ink: '#3D2A1A', accent: '#1E5A6B' },
  archive: { ink: '#2D1810', accent: '#1E5A6B' },
  editor: { ink: '#44403C', accent: '#1E5A6B' },
};

export function LogoMark({
  ink = '#3D2A1A',
  accent = '#1E5A6B',
  paper = '#F5F1E8',
  className,
}: {
  ink?: string;
  accent?: string;
  paper?: string;
  className?: string;
}) {
  // 概念：一张竖版「简历纸」，上面是品牌衬线（Fraunces）排出的 RF 字标——
  // logo 本身即一张自家字体的 type specimen；右上角 cyan-marine 套准点是印刷工艺签名。
  // 字标用真实文本而非手绘 path：缩放清晰，且天然继承品牌字体。
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 简历纸：单层容器，竖版 */}
      <rect x="7" y="3.5" width="18" height="25" rx="1.5" fill={paper} stroke={ink} strokeWidth="1.25" />
      {/* 抬头分隔线，呼应简历的姓名/标题栏 */}
      <line x1="10.5" y1="9" x2="18" y2="9" stroke={ink} strokeWidth="0.9" opacity="0.4" strokeLinecap="round" />
      {/* RF 衬线字标（真实文本，继承 Fraunces） */}
      <text
        x="16"
        y="22.2"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, 'Times New Roman', serif"
        fontWeight={600}
        fontSize="13"
        letterSpacing="-0.6"
        fill={ink}
      >
        RF
      </text>
      {/* 套准点：印刷工艺记号 = 品牌强调色 */}
      <circle cx="22" cy="6.5" r="1.5" fill={accent} />
    </svg>
  );
}

function Wordmark({ variant }: { variant: LogoVariant }) {
  if (variant === 'landing') {
    return (
      <span className={styles.wordmark}>
        <strong>RF</strong>
        <span> · ResumeForge</span>
      </span>
    );
  }

  return <span className={styles.wordmark}>ResumeForge</span>;
}

export function Logo({
  variant = 'archive',
  showWordmark = true,
  href,
  onClick,
  className,
  'aria-label': ariaLabel = 'ResumeForge 首页',
}: LogoProps) {
  const colors = VARIANT_COLORS[variant];
  const rootClass = [styles.brand, styles[variant], className].filter(Boolean).join(' ');

  const content = (
    <>
      <LogoMark ink={colors.ink} accent={colors.accent} className={styles.mark} />
      {showWordmark ? <Wordmark variant={variant} /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={rootClass} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={rootClass} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </button>
    );
  }

  return (
    <span className={rootClass} aria-label={ariaLabel}>
      {content}
    </span>
  );
}
