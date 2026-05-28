'use client';

import Link from 'next/link';

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
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

        :root {
          --paper: #F5F1E8;
          --ink: #3D2A1A;
          --ink-faint: rgba(61, 42, 26, 0.12);
          --ink-mid: rgba(61, 42, 26, 0.45);
          --accent: #1E5A6B;
          --accent-faint: rgba(30, 90, 107, 0.08);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        .lp-root {
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
          font-family: 'Inter', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ─── TYPE UTILITIES ──────────────────────────────── */
        .display {
          font-family: 'Old Standard TT', 'Cormorant Garamond', Georgia, serif;
          font-weight: 400;
        }
        .mono {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink-mid);
          font-weight: 400;
        }

        /* ─── NAV ─────────────────────────────────────────── */
        .lp-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 40px;
          background: var(--paper);
          border-bottom: 1px solid var(--ink-faint);
        }

        .lp-nav-logo {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--ink);
          text-decoration: none;
        }

        .lp-nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--ink);
          color: var(--paper);
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 16px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .lp-nav-cta:hover {
          background: var(--accent);
        }

        /* ─── HERO ────────────────────────────────────────── */
        .lp-hero {
          min-height: 100vh;
          padding-top: 72px;
          display: grid;
          grid-template-columns: 1fr;
          position: relative;
          overflow: hidden;
        }

        .lp-hero-inner {
          padding: 60px 40px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .lp-hero-rule {
          width: 100%;
          height: 1px;
          background: var(--ink-faint);
          margin-bottom: 48px;
        }

        .lp-hero-letters {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .lp-hero-letter-row {
          display: flex;
          align-items: baseline;
          gap: 24px;
          border-bottom: 1px solid var(--ink-faint);
          padding: 4px 0;
          position: relative;
        }

        .lp-hero-letter-row:first-child {
          border-top: 1px solid var(--ink-faint);
        }

        .lp-letter-char {
          font-family: 'Old Standard TT', 'Cormorant Garamond', Georgia, serif;
          font-weight: 400;
          letter-spacing: -0.04em;
          line-height: 0.92;
          color: var(--ink);
          display: block;
          min-width: 80px;
        }

        .lp-letter-tag {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink-mid);
          align-self: center;
          white-space: nowrap;
        }

        .lp-letter-rule-num {
          margin-left: auto;
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--ink-faint);
          text-transform: uppercase;
          align-self: flex-end;
          padding-bottom: 6px;
        }

        .lp-hero-tagline {
          position: absolute;
          right: 40px;
          bottom: 80px;
          text-align: right;
          max-width: 280px;
        }

        .lp-hero-tagline-text {
          font-family: 'Old Standard TT', Georgia, serif;
          font-size: 13px;
          line-height: 1.7;
          color: var(--ink-mid);
          font-style: italic;
        }

        .lp-hero-tagline-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-top: 12px;
          display: block;
        }

        .lp-scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lp-scroll-line {
          width: 40px;
          height: 1px;
          background: var(--ink-mid);
        }

        /* ─── BRIEF ───────────────────────────────────────── */
        .lp-brief {
          display: grid;
          grid-template-columns: 1fr 2fr;
          border-top: 1px solid var(--ink-faint);
          min-height: 60vh;
        }

        .lp-brief-margin {
          padding: 80px 40px;
          border-right: 1px solid var(--ink-faint);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .lp-brief-label {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
        }

        .lp-brief-margin-num {
          font-family: 'Old Standard TT', Georgia, serif;
          font-size: clamp(80px, 10vw, 140px);
          color: var(--ink-faint);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 400;
        }

        .lp-brief-body {
          padding: 80px 80px 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .lp-brief-section-label {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-mid);
          margin-bottom: 48px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--ink-faint);
          font-variant: small-caps;
        }

        .lp-brief-dropcap-wrap {
          max-width: 60ch;
        }

        .lp-dropcap {
          float: left;
          font-family: 'Old Standard TT', 'Cormorant Garamond', Georgia, serif;
          font-size: 5.2em;
          line-height: 0.82;
          padding-right: 12px;
          padding-top: 6px;
          color: var(--ink);
          font-weight: 400;
        }

        .lp-brief-para {
          font-family: 'Old Standard TT', Georgia, serif;
          font-size: 16px;
          line-height: 1.85;
          color: var(--ink);
          font-weight: 400;
          margin-bottom: 24px;
        }

        .lp-brief-para:last-child { margin-bottom: 0; }

        /* ─── SPECIMEN GRID ───────────────────────────────── */
        .lp-specimen {
          padding: 100px 40px;
          border-top: 1px solid var(--ink-faint);
        }

        .lp-specimen-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 80px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--ink-faint);
        }

        .lp-specimen-title {
          font-family: 'Old Standard TT', Georgia, serif;
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
        }

        .lp-specimen-subtitle {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink-mid);
        }

        .lp-specimen-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .lp-specimen-card {
          border: 1px solid var(--ink-faint);
          margin: -1px 0 0 -1px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: background 0.25s ease;
          cursor: default;
        }

        .lp-specimen-card:nth-child(2) { transform: translateY(32px); }
        .lp-specimen-card:nth-child(4) { transform: translateY(-16px); }
        .lp-specimen-card:nth-child(5) { transform: translateY(20px); }

        .lp-specimen-card:hover {
          background: var(--accent-faint);
        }

        .lp-specimen-num {
          font-family: 'Old Standard TT', 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(80px, 10vw, 140px);
          font-weight: 400;
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: var(--ink);
        }

        .lp-specimen-thumb {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: top;
          display: block;
          border: 1px solid var(--ink-faint);
          filter: contrast(1.02) saturate(0.95);
          transition: filter 0.3s ease;
        }

        .lp-specimen-card:hover .lp-specimen-thumb {
          filter: contrast(1.05) saturate(1);
        }

        .lp-specimen-thumb-placeholder {
          width: 100%;
          aspect-ratio: 3/4;
          background: var(--ink-faint);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--ink-faint);
        }

        .lp-specimen-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 16px;
          border-top: 1px solid var(--ink-faint);
        }

        .lp-specimen-meta-row {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink-mid);
          display: flex;
          justify-content: space-between;
        }

        .lp-specimen-meta-tag {
          color: var(--accent);
          font-weight: 500;
        }

        /* ─── MANIFESTO ───────────────────────────────────── */
        .lp-manifesto {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid var(--ink-faint);
          overflow: hidden;
        }

        .lp-noise-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .lp-manifesto-inner {
          position: relative;
          z-index: 1;
          text-align: left;
          padding: 100px 80px;
          max-width: 900px;
        }

        .lp-manifesto-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 64px;
          display: block;
        }

        .lp-manifesto-line {
          font-family: 'Old Standard TT', 'Cormorant Garamond', Georgia, serif;
          font-weight: 400;
          letter-spacing: -0.03em;
          line-height: 1.0;
          color: var(--ink);
          display: block;
          margin-bottom: 8px;
        }

        .lp-manifesto-line-1 { font-size: clamp(56px, 9vw, 130px); }
        .lp-manifesto-line-2 { font-size: clamp(44px, 7vw, 100px); font-style: italic; color: var(--ink-mid); }
        .lp-manifesto-line-3 { font-size: clamp(64px, 10vw, 150px); }
        .lp-manifesto-line-4 { font-size: clamp(36px, 6vw, 88px); font-style: italic; color: var(--ink-mid); }
        .lp-manifesto-line-5 { font-size: clamp(56px, 8vw, 120px); color: var(--accent); }

        .lp-manifesto-rule {
          width: 60px;
          height: 1px;
          background: var(--ink-mid);
          margin: 48px 0;
        }

        .lp-manifesto-attr {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink-mid);
        }

        /* ─── CTA ─────────────────────────────────────────── */
        .lp-cta {
          padding: 120px 80px 80px;
          border-top: 1px solid var(--ink-faint);
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 60px;
        }

        .lp-cta-arrow-wrap {
          display: flex;
          align-items: center;
        }

        .lp-cta-arrow {
          font-family: 'Old Standard TT', Georgia, serif;
          font-size: clamp(120px, 18vw, 240px);
          color: var(--ink);
          line-height: 0.85;
          text-decoration: none;
          transition: color 0.25s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          display: block;
          letter-spacing: -0.05em;
        }

        .lp-cta-arrow:hover {
          color: var(--accent);
          transform: translateX(12px);
        }

        .lp-cta-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .lp-cta-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-mid);
        }

        .lp-cta-link {
          font-family: 'Old Standard TT', 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 60px);
          font-weight: 400;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.02em;
          line-height: 1.1;
          border-bottom: 1px solid transparent;
          padding-bottom: 4px;
          transition: border-color 0.25s ease, font-style 0.25s ease, color 0.25s ease;
          display: inline-block;
        }

        .lp-cta-link:hover {
          border-bottom-color: var(--accent);
          font-style: italic;
          color: var(--accent);
        }

        .lp-cta-sub {
          font-family: 'Old Standard TT', Georgia, serif;
          font-size: 14px;
          font-style: italic;
          color: var(--ink-mid);
          line-height: 1.6;
        }

        /* ─── FOOTER ──────────────────────────────────────── */
        .lp-footer {
          padding: 32px 80px;
          border-top: 1px solid var(--ink-faint);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .lp-footer-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink-mid);
        }

        .lp-footer-link {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }

        .lp-footer-link:hover {
          border-bottom-color: var(--accent);
        }

        /* ─── RESPONSIVE ──────────────────────────────────── */
        @media (max-width: 900px) {
          .lp-nav { padding: 16px 24px; }
          .lp-hero-inner { padding: 40px 24px 60px; }
          .lp-hero-tagline { right: 24px; bottom: 60px; }
          .lp-scroll-hint { left: 24px; }

          .lp-brief { grid-template-columns: 1fr; }
          .lp-brief-margin { display: none; }
          .lp-brief-body { padding: 60px 24px; }

          .lp-specimen { padding: 60px 24px; }
          .lp-specimen-grid { grid-template-columns: 1fr; }
          .lp-specimen-card:nth-child(2),
          .lp-specimen-card:nth-child(4),
          .lp-specimen-card:nth-child(5) { transform: none; }

          .lp-manifesto-inner { padding: 60px 24px; }

          .lp-cta {
            grid-template-columns: 1fr;
            padding: 80px 24px 60px;
            gap: 32px;
          }

          .lp-footer { padding: 24px; flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      <div className="lp-root">

        {/* NAV */}
        <nav className="lp-nav">
          <Link href="/" className="lp-nav-logo">RF · ResumeForge</Link>
          <Link href="/templates" className="lp-nav-cta">开始创建 →</Link>
        </nav>

        {/* ── SECTION 1: HERO ───────────────────────────────── */}
        <section className="lp-hero">
          <div className="lp-hero-inner">
            <div className="lp-hero-rule" />

            <div className="lp-hero-letters">
              {HERO_LETTERS.map((item, i) => (
                <div className="lp-hero-letter-row" key={i}>
                  <span
                    className="lp-letter-char display"
                    style={{ fontSize: item.size }}
                  >
                    {item.char}
                  </span>
                  <span className="lp-letter-tag mono">{item.tag}</span>
                  <span className="lp-letter-rule-num mono">
                    {String(i + 1).padStart(2, '0')} — OLD STANDARD TT
                  </span>
                </div>
              ))}
            </div>

            <div className="lp-hero-tagline">
              <p className="lp-hero-tagline-text">
                A type specimen of resumes.<br />
                72 templates. Free to use.
              </p>
              <span className="lp-hero-tagline-num mono">
                RF · 2026 · SPECIMEN CATALOGUE
              </span>
            </div>

            <div className="lp-scroll-hint">
              <span className="lp-scroll-line" />
              <span className="mono" style={{ fontSize: '10px' }}>SCROLL TO READ</span>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: THE BRIEF ──────────────────────────── */}
        <section className="lp-brief">
          <div className="lp-brief-margin">
            <span className="lp-brief-label mono">§ The Brief</span>
            <span className="lp-brief-margin-num display">02</span>
          </div>

          <div className="lp-brief-body">
            <div className="lp-brief-section-label mono">
              The Brief &mdash; 01 &nbsp;/&nbsp; Why 72 Templates
            </div>

            <div className="lp-brief-dropcap-wrap">
              <p className="lp-brief-para">
                <span className="lp-dropcap display">T</span>
                here is a particular violence in the blank resume template.
                It demands that a person distill their entire professional life
                into a structure designed by committee: one font, two columns,
                a list of verbs beginning with "led" and "built." We rejected
                that premise from the start.
              </p>

              <p className="lp-brief-para">
                We built 72 templates because a software engineer in Shenzhen
                and a film director in Paris do not share a visual language.
                Because a fresh graduate and a senior executive bring different
                histories to the page. Because the document that gets you
                the interview is not the document that gets everyone the interview.
              </p>

              <p className="lp-brief-para">
                Each template in this catalogue was designed the way a
                typographer designs a type specimen: with obsessive attention
                to hierarchy, spacing, and the weight of white space. The resume
                is not a form. It is a portrait. We made 72 of them.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: SPECIMEN GRID ──────────────────────── */}
        <section className="lp-specimen">
          <div className="lp-specimen-header">
            <h2 className="lp-specimen-title display">Selected Specimens</h2>
            <span className="lp-specimen-subtitle mono">72 typefaces — 6 shown / all available</span>
          </div>

          <div className="lp-specimen-grid">
            {SPECIMENS.map((item) => (
              <div className="lp-specimen-card" key={item.slug}>
                <span className="lp-specimen-num display">{item.num}</span>
                <img
                  src={`/thumbnails/${item.slug}.png`}
                  alt={item.label}
                  className="lp-specimen-thumb"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const placeholder = el.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="lp-specimen-thumb-placeholder" style={{ display: 'none' }}>
                  <span className="mono" style={{ color: 'var(--ink-faint)' }}>{item.label}</span>
                </div>
                <div className="lp-specimen-meta">
                  <div className="lp-specimen-meta-row">
                    <span>{item.slug.toUpperCase()}</span>
                    <span className="lp-specimen-meta-tag">{item.tag}</span>
                  </div>
                  <div className="lp-specimen-meta-row" style={{ color: 'var(--ink-faint)' }}>
                    <span>{item.label} · A4</span>
                    <span>2026 EDITION</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: MANIFESTO ──────────────────────────── */}
        <section className="lp-manifesto">
          <svg
            className="lp-noise-layer"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            aria-hidden="true"
          >
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" mode="multiply" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-filter)" opacity="0.025" />
          </svg>

          <div className="lp-manifesto-inner">
            <span className="lp-manifesto-label mono">§ Manifesto — 04</span>

            <span className="lp-manifesto-line lp-manifesto-line-1 display">Resume</span>
            <span className="lp-manifesto-line lp-manifesto-line-2 display">is not a</span>
            <span className="lp-manifesto-line lp-manifesto-line-3 display">form.</span>
            <span className="lp-manifesto-line lp-manifesto-line-4 display">It is a</span>
            <span className="lp-manifesto-line lp-manifesto-line-5 display">portrait.</span>

            <div className="lp-manifesto-rule" />
            <span className="lp-manifesto-attr mono">
              RF Design Principles · 2026 · Print Run #001
            </span>
          </div>
        </section>

        {/* ── SECTION 5: CTA ────────────────────────────────── */}
        <section className="lp-cta">
          <div className="lp-cta-arrow-wrap">
            <Link href="/templates" className="lp-cta-arrow display" aria-label="前往模板市场">
              ⟶
            </Link>
          </div>

          <div className="lp-cta-right">
            <span className="lp-cta-label mono">§ Begin — 05</span>
            <Link href="/templates" className="lp-cta-link display">
              select your template
            </Link>
            <p className="lp-cta-sub">
              72 specimens, zero friction.<br />
              Choose, fill, export. The page remembers your choices.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lp-footer">
          <span className="lp-footer-meta">
            &copy; 2026 RF &nbsp;·&nbsp; MADE FOR THE WEB &nbsp;·&nbsp; SET IN OLD STANDARD TT
          </span>
          <span className="lp-footer-meta">
            <Link href="/templates" className="lp-footer-link">Template Market</Link>
            &nbsp;·&nbsp;
            <Link href="/editor" className="lp-footer-link">Editor</Link>
          </span>
        </footer>

      </div>
    </>
  );
}
