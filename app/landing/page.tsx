'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Logo } from '@/components/Logo';
import { asset } from '@/lib/base-path';
import { TEMPLATE_LIST } from '@/data/template-list';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import styles from './landing.module.css';

// 模板总数动态读取，避免新增模板后文案过期
const TPL_COUNT = TEMPLATE_LIST.length;

const SPECIMENS = [
  { num: '01', slug: 'classic',    label: 'CLASSIC',    tag: '商务通用' },
  { num: '02', slug: 'designer',   label: 'DESIGNER',   tag: '创意设计' },
  { num: '03', slug: 'developer',  label: 'DEVELOPER',  tag: '技术研发' },
  { num: '04', slug: 'executive',  label: 'EXECUTIVE',  tag: '高管领导' },
  { num: '05', slug: 'elegant',    label: 'ELEGANT',    tag: '学术研究' },
  { num: '06', slug: 'consulting', label: 'CONSULTING', tag: '咨询管理' },
];

const HERO_LETTERS = [
  { char: 'R', tag: '#01 / SERIF / 240PT', size: 'clamp(72px, 14vw, 200px)' },
  { char: 'E', tag: '#02 / DISPLAY / 210PT', size: 'clamp(64px, 12vw, 180px)' },
  { char: 'S', tag: '#03 / ROMAN / 180PT', size: 'clamp(56px, 10vw, 160px)' },
  { char: 'U', tag: '#04 / OLDSTYLE / 150PT', size: 'clamp(52px, 9vw, 140px)' },
  { char: 'M', tag: '#05 / REGULAR / 120PT', size: 'clamp(48px, 8vw, 120px)' },
  { char: 'E', tag: '#06 / ITALIC / 96PT', size: 'clamp(44px, 7vw, 100px)' },
];

export default function LandingPage() {
  const specimenGridRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

    // ── Specimen grid scroll reveal ────────────────────────────
    const cards = specimenGridRef.current?.querySelectorAll<HTMLElement>('[data-specimen-card]');
    if (cards) {
      cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = card.style.transform
          ? card.style.transform + ' translateY(16px)'
          : 'translateY(16px)';
      });

      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const card = entry.target as HTMLElement;
              const index = Array.from(cards).indexOf(card);
              const delay = index * 80;
              card.style.transition = `opacity 600ms ${ease} ${delay}ms, transform 600ms ${ease} ${delay}ms`;
              card.style.opacity = '1';
              // Restore the stagger offsets for the non-mobile cards
              const baseTransforms: Record<number, string> = {
                1: 'translateY(32px)',
                3: 'translateY(-16px)',
                4: 'translateY(20px)',
              };
              card.style.transform = baseTransforms[index] ?? 'translateY(0)';
              cardObserver.unobserve(card);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );

      cards.forEach((card) => cardObserver.observe(card));

      return () => cardObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

    // ── Manifesto lines scroll reveal ─────────────────────────
    const lines = manifestoRef.current?.querySelectorAll<HTMLElement>('[data-manifesto-line]');
    if (lines) {
      lines.forEach((line) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(12px)';
      });

      const lineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              lines.forEach((line, index) => {
                const delay = index * 120;
                line.style.transition = `opacity 800ms ${ease} ${delay}ms, transform 800ms ${ease} ${delay}ms`;
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
              });
              lineObserver.disconnect();
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
      );

      if (manifestoRef.current) lineObserver.observe(manifestoRef.current);

      return () => lineObserver.disconnect();
    }
  }, []);

  return (
    <div className={styles.root}>

      {/* NAV */}
      <nav className={styles.nav}>
        <Logo variant="landing" href="/landing" aria-label="ResumeForge 品牌页" />
        <span className={styles.navRight}>
          <Link href="/faq" className={styles.navLink}>Q&amp;A</Link>
          <Link href="/" className={styles.navCta}>开始创建 →</Link>
        </span>
      </nav>

      {/* ── SECTION 1: HERO ───────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroRule} />

          <div className={styles.heroLetters}>
            {HERO_LETTERS.map((item, i) => (
              <div className={styles.heroLetterRow} key={i}>
                <span
                  className={`${styles.letterChar} ${styles.display}`}
                  style={{ fontSize: item.size }}
                >
                  {item.char}
                </span>
                <span className={`${styles.letterTag} ${styles.mono}`}>{item.tag}</span>
                <span className={`${styles.letterRuleNum} ${styles.mono}`}>
                  {String(i + 1).padStart(2, '0')} — OLD STANDARD TT
                </span>
              </div>
            ))}
          </div>

          <div className={styles.heroPitch}>
            <p className={styles.heroPitchLead}>不用从空白页开始。</p>
            <p className={styles.heroPitchText}>
              {TPL_COUNT} 套印刷级简历模板。挑一套，填上内容，导出 PDF。
            </p>
            <ul className={`${styles.heroPitchPoints} ${styles.mono}`}>
              <li>永久免费 · 无水印</li>
              <li>数据只存本地 · 不上传</li>
              <li>无需注册 · 打开即用</li>
            </ul>
            <Link href="/" className={styles.heroPitchCta}>挑一套模板 →</Link>
            <span className={`${styles.heroPitchMeta} ${styles.mono}`}>
              RF · 2026 · SPECIMEN CATALOGUE
            </span>
          </div>

          <div className={styles.scrollHint}>
            <span className={styles.scrollLine} />
            <span className={styles.mono} style={{ fontSize: '10px' }}>SCROLL TO READ</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE BRIEF ──────────────────────────── */}
      <section className={styles.brief}>
        <div className={styles.briefMargin}>
          <span className={`${styles.briefLabel} ${styles.mono}`}>§ The Brief</span>
          <span className={`${styles.briefMarginNum} ${styles.display}`}>02</span>
        </div>

        <div className={styles.briefBody}>
          <div className={`${styles.briefSectionLabel} ${styles.mono}`}>
            The Brief &mdash; 01 &nbsp;/&nbsp; 为什么是 {TPL_COUNT} 套
          </div>

          <div className={styles.briefDropcapWrap}>
            <p className={styles.briefPara}>
              <span className={`${styles.dropcap} ${styles.display}`}>简</span>
              历不该是一张所有人都长得一样的表格。深圳的工程师和巴黎的导演，
              不共享同一种视觉语言；应届生和高管，带着不同的履历走进同一页纸。
              我们从一开始就拒绝「一套模板走天下」。
            </p>

            <p className={styles.briefPara}>
              所以我们做了 {TPL_COUNT} 套，每一套都按字体样本的标准推敲层级、字距与留白，
              覆盖商务、技术、设计、金融、校招等 21 个职能方向。
              全部<strong>永久免费</strong>，数据只存在你的浏览器本地，<strong>无需注册</strong>。
            </p>

            <Link href="/" className={styles.briefCta}>
              去模板市场挑选 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SPECIMEN GRID ──────────────────────── */}
      <section className={styles.specimen}>
        <div className={styles.specimenHeader}>
          <h2 className={`${styles.specimenTitle} ${styles.display}`}>Selected Specimens</h2>
          <span className={`${styles.specimenSubtitle} ${styles.mono}`}>{TPL_COUNT} typefaces — 6 shown / all available</span>
        </div>

        <div className={styles.specimenGrid} ref={specimenGridRef}>
          {SPECIMENS.length === 0 ? (
            <div className={`${styles.specimenEmpty} ${styles.mono}`}>No templates available</div>
          ) : (
            SPECIMENS.map((item) => (
              <Link href="/" className={styles.specimenCard} data-specimen-card key={item.slug} aria-label={`查看 ${item.label} 模板`}>
                <span className={`${styles.specimenNum} ${styles.display}`}>{item.num}</span>
                <img
                  src={asset(`/thumbnails/${item.slug}.png`)}
                  alt={`${item.label} resume template preview`}
                  className={styles.specimenThumb}
                  onError={(e) => {
                    const img = e.currentTarget;
                    // Try elegant as fallback
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = '1';
                      img.src = asset('/thumbnails/elegant.png');
                      return;
                    }
                    // Both failed: show placeholder
                    img.style.display = 'none';
                    const placeholder = img.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className={styles.specimenThumbPlaceholder}>
                  <span className={styles.specimenThumbPlaceholderLabel}>{item.label}</span>
                  <span className={styles.specimenThumbPlaceholderSub}>no preview</span>
                </div>
                <div className={styles.specimenMeta}>
                  <div className={styles.specimenMetaRow}>
                    <span>{item.slug.toUpperCase()}</span>
                    <span className={styles.specimenMetaTag}>{item.tag}</span>
                  </div>
                  <div className={styles.specimenMetaRow} style={{ color: 'var(--ink-faint)' }}>
                    <span>{item.label} · A4</span>
                    <span>2026 EDITION</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className={styles.specimenFooter}>
          <Link href="/" className={styles.specimenAll}>查看全部 {TPL_COUNT} 套模板 →</Link>
        </div>
      </section>

      {/* ── SECTION 4: MANIFESTO ──────────────────────────── */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner} ref={manifestoRef}>
          <span className={`${styles.manifestoLabel} ${styles.mono}`}>§ Manifesto — 04</span>

          <span className={`${styles.manifestoLine} ${styles.manifestoLine1} ${styles.display}`} data-manifesto-line>Resume</span>
          <span className={`${styles.manifestoLine} ${styles.manifestoLine2} ${styles.display}`} data-manifesto-line>is not a</span>
          <span className={`${styles.manifestoLine} ${styles.manifestoLine3} ${styles.display}`} data-manifesto-line>form.</span>
          <span className={`${styles.manifestoLine} ${styles.manifestoLine4} ${styles.display}`} data-manifesto-line>It is a</span>
          <span className={`${styles.manifestoLine} ${styles.manifestoLine5} ${styles.display}`} data-manifesto-line>portrait.</span>

          <div className={styles.manifestoRule} />
          <span className={`${styles.manifestoAttr} ${styles.mono}`}>
            RF Design Principles · 2026 · Print Run #001
          </span>
        </div>
      </section>

      {/* ── SECTION 5: CTA ────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaArrowWrap}>
          <Link
            href="/"
            className={`${styles.ctaArrow} ${styles.display}`}
            aria-label="前往模板市场"
            tabIndex={0}
          >
            ⟶
          </Link>
        </div>

        <div className={styles.ctaRight}>
          <span className={`${styles.ctaLabel} ${styles.mono}`}>§ Begin — 05</span>
          <Link href="/" className={`${styles.ctaLink} ${styles.display}`} tabIndex={0}>
            select your template
          </Link>
          <p className={styles.ctaSub}>
            {TPL_COUNT} specimens, zero friction.<br />
            Choose, fill, export. The page remembers your choices.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span className={styles.footerMeta}>
          &copy; 2026 RF &nbsp;·&nbsp; MADE FOR THE WEB &nbsp;·&nbsp; SET IN OLD STANDARD TT
        </span>
        <span className={styles.footerMeta}>
          <Link href="/" className={styles.footerLink}>Template Market</Link>
          &nbsp;·&nbsp;
          <Link href="/faq" className={styles.footerLink}>Q&amp;A</Link>
          &nbsp;·&nbsp;
          <Link href="/editor" className={styles.footerLink}>Editor</Link>
        </span>
      </footer>

      <MobileStickyCTA href="/templates" label="开始创建 →" />
    </div>
  );
}
