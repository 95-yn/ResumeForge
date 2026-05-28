'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TEMPLATES } from '@/data/templates';

/* ─── Palette ─────────────────────────────────────────────── */
const PARCHMENT = '#F8F6F1';
const CHESTNUT  = '#2D1810';
const BRICK     = '#B0463A';
const DUST      = '#E9E5DD';
const INK_DIM   = 'rgba(45,24,16,0.42)';

/* ─── Template metadata ────────────────────────────────────── */
interface TemplateMeta {
  desc: string;
  profession: string;
}

const TEMPLATE_META: Record<string, TemplateMeta> = {
  classic:      { desc: '标准单栏布局，适合大多数行业', profession: '通用' },
  professional: { desc: '深色顶部 header，商务专业感强', profession: '通用' },
  executive:    { desc: '高管风格，大气稳重，金色分隔线点缀', profession: '金融财会' },
  corporate:    { desc: '企业标准配色，蓝色主调，规整表格感', profession: '通用' },
  banking:      { desc: '金融行业，保守配色，衬线标题字体', profession: '金融财会' },
  consulting:   { desc: '咨询风格，左右对称双栏，黑白为主', profession: '金融财会' },
  sales:        { desc: '销售商务，突出业绩数字，橙色点缀', profession: '市场营销' },
  hr:           { desc: '人力资源，温暖色调，柔和圆角标签', profession: '通用' },
  manager:      { desc: '项目经理，时间线布局，蓝灰色调', profession: 'IT互联网' },
  legal:        { desc: '法律行业，严肃衬线字体，全黑白无彩色', profession: '通用' },
  modern:       { desc: '双栏布局，深色侧边栏突出个人品牌', profession: '通用' },
  fresh:        { desc: '蓝色竖条装饰，清新活力，年轻感十足', profession: '通用' },
  creative:     { desc: '渐变色 header，进度条技能，设计感满满', profession: '设计创意' },
  designer:     { desc: '设计师风格，深色侧边栏，大量留白', profession: '设计创意' },
  photographer: { desc: '摄影师风格，全宽深色 header，衬线大标题', profession: '设计创意' },
  writer:       { desc: '书籍排版风格，Garamond 字体，文学气质', profession: '教育学术' },
  marketing:    { desc: '市场营销，渐变标题底色，数据可视化风格', profession: '市场营销' },
  media:        { desc: '新媒体运营，卡片式布局，圆角边框', profession: '市场营销' },
  artist:       { desc: '艺术家，大标题左对齐，棕色调', profession: '设计创意' },
  architect:    { desc: '建筑师，极细线条，网格感布局，灰色调', profession: '设计创意' },
  minimal:      { desc: '衬线字体，极简排版，适合学术与创意行业', profession: '通用' },
  elegant:      { desc: '居中布局，衬线大标题，优雅简约风', profession: '通用' },
  clean:        { desc: '纯净白，只用黑色和灰色，无任何装饰线', profession: '通用' },
  swiss:        { desc: '瑞士排版风格，网格对齐，红色点缀', profession: '设计创意' },
  nordic:       { desc: '北欧风，大量留白，浅蓝灰配色', profession: '通用' },
  japanese:     { desc: '日式简约，竖线分隔，留白极多', profession: '通用' },
  paper:        { desc: '纸质感，微黄背景，打字机字体', profession: '教育学术' },
  mono:         { desc: '单色风格，只用灰色深浅变化', profession: '通用' },
  line:         { desc: '线条艺术，所有分隔都用细线装饰', profession: '通用' },
  space:        { desc: '呼吸感设计，超大行距与section间距', profession: '教育学术' },
  tech:         { desc: '等宽字体，tag 技能，暗色调技术风格', profession: 'IT互联网' },
  developer:    { desc: '终端风格，绿色 # 前缀，代码感设计', profession: 'IT互联网' },
  github:       { desc: 'GitHub Profile 风格，绿色点缀', profession: 'IT互联网' },
  terminal:     { desc: '完整终端风格，黑底绿字，仿真命令行', profession: 'IT互联网' },
  vscode:       { desc: 'VS Code 深色主题配色，侧边栏布局', profession: 'IT互联网' },
  data:         { desc: '数据科学家，表格风格展示技能，深蓝暗色', profession: 'IT互联网' },
  devops:       { desc: 'DevOps 工程师，pipeline 时间线样式', profession: 'IT互联网' },
  mobile:       { desc: '移动开发，圆角卡片，iOS 设计语言', profession: 'IT互联网' },
  fullstack:    { desc: '全栈工程师，上深下白分栏布局', profession: 'IT互联网' },
  ai:           { desc: 'AI/ML 工程师，蓝紫渐变 header', profession: 'IT互联网' },
  'campus-general': { desc: '简洁单栏，教育置前，通用校招首选', profession: '通用' },
  'campus-tech':    { desc: '深色 header，技能和项目突出，技术校招专属', profession: 'IT互联网' },
  'campus-finance': { desc: '保守正式，衬线字体，金融校招专属', profession: '金融财会' },
  'campus-design':  { desc: '有设计感的全黑白排版，设计校招专属', profession: '设计创意' },
  'campus-intern':  { desc: '简洁明快，左侧蓝色装饰线，实习生专属', profession: '通用' },
  'it-frontend':    { desc: '技能标签突出位置，深蓝 header，前端工程师专属', profession: 'IT互联网' },
  'it-backend':     { desc: '纯白底，技能分组，代码风格标签，后端工程师专属', profession: 'IT互联网' },
  'it-fullstack':   { desc: '双栏布局，深色侧边栏，全栈工程师专属', profession: 'IT互联网' },
  'finance-analyst':    { desc: '深蓝 section 标题，资质证书突出，金融分析师专属', profession: '金融财会' },
  'finance-accounting': { desc: '纯黑白衬线标题，极严谨，会计审计专属', profession: '金融财会' },
  'finance-banking':    { desc: '深灰 header，白底正文，银行保险专属', profession: '金融财会' },
  'design-ui':      { desc: '双栏深色侧边栏，UI设计师专属', profession: '设计创意' },
  'design-graphic': { desc: '全黑白，排版层次感，平面设计专属', profession: '设计创意' },
  'design-video':   { desc: '深黑 header，视频动画专属', profession: '设计创意' },
  'edu-teacher':    { desc: '深蓝 section 标题，教育经历置前，中小学教师专属', profession: '教育学术' },
  'edu-professor':  { desc: '衬线字体，学术风格，大学教授专属', profession: '教育学术' },
  'edu-trainer':    { desc: '灰色标题，温暖色调，培训讲师专属', profession: '教育学术' },
  'mkt-digital':  { desc: '深色 header，数据突出，数字营销专属', profession: '市场营销' },
  'mkt-brand':    { desc: 'Editorial 杂志感，纯黑白，品牌营销专属', profession: '市场营销' },
  'mkt-content':  { desc: '左侧 4px 装饰线，内容运营专属', profession: '市场营销' },
  'med-doctor':  { desc: '深蓝极保守，严谨专业，医生专属', profession: '医疗健康' },
  'med-nurse':   { desc: '暖灰标题，柔和色调，护士专属', profession: '医疗健康' },
  'med-pharma':  { desc: '深灰 header，白底正文，药学专属', profession: '医疗健康' },
  'pm-product':   { desc: '细线分隔，简洁克制，产品经理专属', profession: '产品运营' },
  'pm-operation': { desc: '浅灰左栏，白底主栏，运营经理专属', profession: '产品运营' },
  'pm-growth':    { desc: '深色 header，增长策略专属', profession: '产品运营' },
  'hr-recruiter': { desc: '暖灰标题，温暖亲和，招聘HRBP专属', profession: '人力行政' },
  'hr-training':  { desc: '纯黑白简洁，培训发展专属', profession: '人力行政' },
  'hr-admin':     { desc: '深灰 section 标题，行政管理专属', profession: '人力行政' },
  'legal-lawyer':     { desc: '全黑白衬线字体，严肃正式，律师专属', profession: '法律合规' },
  'legal-compliance': { desc: '深蓝标题，合规专员专属', profession: '法律合规' },
  'legal-ip':         { desc: '深灰标题，知识产权专属', profession: '法律合规' },
};

/* ─── Filter categories ────────────────────────────────────── */
const STYLE_FILTERS = [
  { key: 'all', label: 'ALL' },
  { key: 'business', label: 'BUSINESS' },
  { key: 'creative', label: 'CREATIVE' },
  { key: 'minimal', label: 'MINIMAL' },
  { key: 'tech', label: 'TECH' },
  { key: 'campus', label: 'CAMPUS' },
  { key: 'profession', label: 'PROFESSION' },
];

const PROFESSION_FILTERS = [
  { key: 'all', label: 'ALL' },
  { key: 'IT互联网', label: 'IT' },
  { key: '金融财会', label: '金融' },
  { key: '设计创意', label: '设计' },
  { key: '教育学术', label: '教育' },
  { key: '市场营销', label: '营销' },
  { key: '医疗健康', label: '医疗' },
  { key: '产品运营', label: '产品' },
  { key: '人力行政', label: '人力' },
  { key: '法律合规', label: '法律' },
];

/* ─── Category label map ───────────────────────────────────── */
const CATEGORY_DISPLAY: Record<string, string> = {
  business:   'BUSINESS',
  creative:   'CREATIVE',
  minimal:    'MINIMAL',
  tech:       'TECH',
  profession: 'PROFESSION',
  campus:     'CAMPUS',
};

/* ─── Featured order ───────────────────────────────────────── */
const FEATURED_ORDER = ['classic', 'professional', 'elegant', 'modern', 'fresh', 'clean', 'swiss', 'minimal', 'tech', 'developer'];

/* ─── Margin rhythm ────────────────────────────────────────── */
function cardMarginBottom(idx: number): number {
  return [32, 56, 40][idx % 3];
}

/* ─── Main component ───────────────────────────────────────── */
export default function HomePage() {
  const router = useRouter();
  const [styleFilter, setStyleFilter] = useState<string>('all');
  const [professionFilter, setProfessionFilter] = useState<string>('all');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const templates = TEMPLATES;
  const total = templates.length;

  const filtered = templates
    .filter(t => {
      const styleMatch = styleFilter === 'all' || t.category === styleFilter;
      const meta = TEMPLATE_META[t.slug];
      const profMatch = professionFilter === 'all' || (meta && meta.profession === professionFilter);
      return styleMatch && profMatch;
    })
    .sort((a, b) => {
      const ai = FEATURED_ORDER.indexOf(a.slug);
      const bi = FEATURED_ORDER.indexOf(b.slug);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return 0;
    });

  const handleCardClick = (slug: string) => {
    const meta = TEMPLATE_META[slug];
    router.push(`/editor?template=${slug}&profession=${encodeURIComponent(meta?.profession || '通用')}`);
  };

  const styleLabel = STYLE_FILTERS.find(f => f.key === styleFilter)?.label ?? 'ALL';
  const profLabel  = PROFESSION_FILTERS.find(f => f.key === professionFilter)?.label ?? 'ALL';

  return (
    <>
      {/* ── Font face injection ── */}
      <style>{`
        .archive-page {
          min-height: 100vh;
          background: ${PARCHMENT};
          color: ${CHESTNUT};
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
        }

        /* ── Marginalia header ── */
        .arch-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 28px 56px 20px;
          border-bottom: 1px solid ${DUST};
        }
        .arch-logo {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: 16px;
          color: ${CHESTNUT};
          letter-spacing: -0.01em;
        }
        .arch-meta {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 10px;
          color: ${INK_DIM};
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── Title area ── */
        .arch-title-area {
          padding: 52px 56px 40px;
        }
        .arch-display-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 400;
          font-size: clamp(64px, 8vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: ${CHESTNUT};
          margin: 0 0 16px;
        }
        .arch-subtitle {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: 18px;
          color: ${CHESTNUT};
          margin: 0 0 14px;
          opacity: 0.7;
        }
        .arch-catalog-id {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${INK_DIM};
        }

        /* ── Divider ── */
        .arch-rule {
          height: 1px;
          background: ${DUST};
          margin: 0 56px;
        }

        /* ── Content wrapper ── */
        .arch-content {
          padding: 48px 56px 120px;
        }

        /* ── Masonry grid ── */
        .archive {
          columns: 3;
          column-gap: 48px;
        }
        @media (max-width: 1024px) {
          .archive { columns: 2; }
        }
        @media (max-width: 640px) {
          .archive { columns: 1; }
          .arch-header { padding: 20px 24px; }
          .arch-title-area { padding: 36px 24px 28px; }
          .arch-content { padding: 32px 24px 100px; }
          .arch-rule { margin: 0 24px; }
        }

        /* ── Card ── */
        .archive-card {
          break-inside: avoid;
          display: block;
          cursor: pointer;
          position: relative;
        }

        .archive-card-num {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 10px;
          color: ${INK_DIM};
          opacity: 0.5;
          margin-bottom: 8px;
          letter-spacing: 0.04em;
        }

        .archive-card-img-wrap {
          overflow: hidden;
          position: relative;
          background: #EEE9E0;
        }
        .archive-card-img {
          width: 100%;
          display: block;
          object-fit: cover;
          object-position: top;
          filter: grayscale(30%);
          transition: filter 0.35s ease-out, transform 0.35s ease-out;
        }
        .archive-card:hover .archive-card-img {
          filter: grayscale(0%);
          transform: scale(1.015);
        }

        .archive-card-body {
          padding: 12px 0 0;
        }

        .archive-card-name {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 500;
          font-size: 22px;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: ${CHESTNUT};
          margin: 0 0 6px;
          transition: color 0.2s ease-out;
        }
        .archive-card:hover .archive-card-name {
          color: ${BRICK};
        }

        .archive-card-tags {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: ${INK_DIM};
          opacity: 0.5;
          margin: 0 0 8px;
        }

        .archive-card-desc {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.6;
          color: ${CHESTNUT};
          opacity: 0.65;
          margin: 0;
        }

        /* ── Bottom drawer ── */
        .arch-drawer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: ${PARCHMENT};
          border-top: 1px solid ${DUST};
          transition: height 0.22s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
        }
        .arch-drawer-inner {
          padding: 0 56px;
          height: 56px;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .arch-drawer-state {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.07em;
          color: ${INK_DIM};
          white-space: nowrap;
          flex-shrink: 0;
        }
        .arch-drawer-divider {
          width: 1px;
          height: 18px;
          background: ${DUST};
          flex-shrink: 0;
        }
        .arch-filter-row {
          display: flex;
          align-items: center;
          gap: 4px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .arch-filter-row::-webkit-scrollbar { display: none; }
        .arch-filter-label {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: ${INK_DIM};
          opacity: 0.5;
          margin-right: 6px;
          flex-shrink: 0;
          text-transform: uppercase;
        }
        .arch-filter-link {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: ${CHESTNUT};
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          opacity: 0.45;
          text-decoration: none;
          transition: opacity 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .arch-filter-link:hover {
          opacity: 0.75;
        }
        .arch-filter-link.active {
          opacity: 1;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .arch-filter-sep {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: ${INK_DIM};
          opacity: 0.3;
          flex-shrink: 0;
        }

        /* Profession row expansion */
        .arch-drawer-profession {
          height: 0;
          overflow: hidden;
          padding: 0 56px;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: height 0.22s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .arch-drawer-profession.open {
          height: 44px;
          border-top: 1px solid ${DUST};
        }

        /* Toggle expand button */
        .arch-drawer-toggle {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          color: ${INK_DIM};
          opacity: 0.45;
          padding: 4px 0;
          flex-shrink: 0;
          transition: opacity 0.15s ease;
        }
        .arch-drawer-toggle:hover { opacity: 0.8; }

        /* Empty state */
        .arch-empty {
          padding: 80px 0;
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: 18px;
          color: ${INK_DIM};
          opacity: 0.6;
        }
      `}</style>

      <div className="archive-page">
        {/* ── 1. Marginalia header ── */}
        <header className="arch-header">
          <span className="arch-logo">ResumeForge</span>
          <span className="arch-meta">
            {total} Templates · 11 Professions · Updated 2026.05
          </span>
        </header>

        {/* ── 2. Editorial title ── */}
        <div className="arch-title-area">
          <h1 className="arch-display-title">Templates</h1>
          <p className="arch-subtitle">A curated archive for the working professional.</p>
          <p className="arch-catalog-id">№ 001 — {String(total).padStart(3, '0')} / Continuously Curated</p>
        </div>

        <div className="arch-rule" />

        {/* ── 3. Masonry archive ── */}
        <div className="arch-content">
          {filtered.length === 0 ? (
            <p className="arch-empty">该筛选组合暂无收录模板。</p>
          ) : (
            <div className="archive">
              {filtered.map((t, idx) => {
                const meta = TEMPLATE_META[t.slug] ?? { desc: '', profession: '通用' };
                const num = String(idx + 1).padStart(3, '0');
                const catDisplay = CATEGORY_DISPLAY[t.category] ?? t.category.toUpperCase();
                const isHovered = hoveredSlug === t.slug;

                return (
                  <div
                    key={t.slug}
                    className="archive-card"
                    style={{ marginBottom: cardMarginBottom(idx) }}
                    onClick={() => handleCardClick(t.slug)}
                    onMouseEnter={() => setHoveredSlug(t.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleCardClick(t.slug)}
                    aria-label={`使用模板：${t.name}`}
                  >
                    {/* № index */}
                    <div className="archive-card-num">№ {num}</div>

                    {/* Thumbnail */}
                    <div className="archive-card-img-wrap">
                      <img
                        src={`/thumbnails/${t.slug}.png`}
                        alt={t.name}
                        loading="lazy"
                        className="archive-card-img"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = 'none';
                          const wrap = el.parentElement;
                          if (wrap) wrap.style.minHeight = '140px';
                        }}
                      />
                    </div>

                    {/* Card body */}
                    <div className="archive-card-body">
                      <h2 className="archive-card-name">{t.name}</h2>
                      <p className="archive-card-tags">
                        {catDisplay} · {meta.profession !== '通用' ? meta.profession : 'UNIVERSAL'}
                      </p>
                      <p className="archive-card-desc">{meta.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── 4. Bottom fixed drawer ── */}
      <div className="arch-drawer" style={{ height: drawerOpen ? 100 : 56 }}>
        {/* Style row */}
        <div className="arch-drawer-inner">
          <span className="arch-drawer-state">
            STYLE: {styleLabel} / PROF: {profLabel}
          </span>
          <div className="arch-drawer-divider" />
          <div className="arch-filter-row" aria-label="Style filter">
            <span className="arch-filter-label">Style</span>
            {STYLE_FILTERS.map((f, i) => (
              <span key={f.key} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                {i > 0 && <span className="arch-filter-sep">/</span>}
                <button
                  className={`arch-filter-link${styleFilter === f.key ? ' active' : ''}`}
                  onClick={() => setStyleFilter(f.key)}
                >
                  {f.label}
                </button>
              </span>
            ))}
          </div>
          <button
            className="arch-drawer-toggle"
            onClick={() => setDrawerOpen(v => !v)}
            aria-expanded={drawerOpen}
            aria-label="Toggle profession filter"
          >
            {drawerOpen ? '▲ PROF' : '▼ PROF'}
          </button>
        </div>

        {/* Profession row */}
        <div className={`arch-drawer-profession${drawerOpen ? ' open' : ''}`} aria-label="Profession filter">
          <span className="arch-filter-label">Profession</span>
          {PROFESSION_FILTERS.map((f, i) => (
            <span key={f.key} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              {i > 0 && <span className="arch-filter-sep">/</span>}
              <button
                className={`arch-filter-link${professionFilter === f.key ? ' active' : ''}`}
                onClick={() => setProfessionFilter(f.key)}
              >
                {f.label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
