'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Logo } from '@/components/Logo';
import styles from './landing.module.css';

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
        <Link href="/" className={styles.navCta}>开始创建 →</Link>
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

          <div className={styles.heroTagline}>
            <p className={styles.heroTaglineText}>
              A type specimen of resumes.<br />
              72 templates. Free to use.
            </p>
            <span className={`${styles.heroTaglineNum} ${styles.mono}`}>
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
            The Brief &mdash; 01 &nbsp;/&nbsp; Why 72 Templates
          </div>

          <div className={styles.briefDropcapWrap}>
            <p className={styles.briefPara}>
              <span className={`${styles.dropcap} ${styles.display}`}>T</span>
              here is a particular violence in the blank resume template.
              It demands that a person distill their entire professional life
              into a structure designed by committee: one font, two columns,
              a list of verbs beginning with &ldquo;led&rdquo; and &ldquo;built.&rdquo; We rejected
              that premise from the start.
            </p>

            <p className={styles.briefPara}>
              We built 72 templates because a software engineer in Shenzhen
              and a film director in Paris do not share a visual language.
              Because a fresh graduate and a senior executive bring different
              histories to the page. Because the document that gets you
              the interview is not the document that gets everyone the interview.
            </p>

            <p className={styles.briefPara}>
              Each template in this catalogue was designed the way a
              typographer designs a type specimen: with obsessive attention
              to hierarchy, spacing, and the weight of white space. The resume
              is not a form. It is a portrait. We made 72 of them.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SPECIMEN GRID ──────────────────────── */}
      <section className={styles.specimen}>
        <div className={styles.specimenHeader}>
          <h2 className={`${styles.specimenTitle} ${styles.display}`}>Selected Specimens</h2>
          <span className={`${styles.specimenSubtitle} ${styles.mono}`}>72 typefaces — 6 shown / all available</span>
        </div>

        <div className={styles.specimenGrid} ref={specimenGridRef}>
          {SPECIMENS.length === 0 ? (
            <div className={`${styles.specimenEmpty} ${styles.mono}`}>No templates available</div>
          ) : (
            SPECIMENS.map((item) => (
              <div className={styles.specimenCard} data-specimen-card key={item.slug}>
                <span className={`${styles.specimenNum} ${styles.display}`}>{item.num}</span>
                <img
                  src={`/thumbnails/${item.slug}.png`}
                  alt={`${item.label} resume template preview`}
                  className={styles.specimenThumb}
                  onError={(e) => {
                    const img = e.currentTarget;
                    // Try elegant as fallback
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = '1';
                      img.src = '/thumbnails/elegant.png';
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
              </div>
            ))
          )}
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
            72 specimens, zero friction.<br />
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
          <Link href="/editor" className={styles.footerLink}>Editor</Link>
        </span>
      </footer>

    </div>
  );
}
