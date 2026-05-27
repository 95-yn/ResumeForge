import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { api } from '../api/client';

interface TemplateSummary { id: string; name: string; slug: string; category: string; }

interface TemplateMeta {
  desc: string;
  bg: string;
  tc: string;
  accent?: string;
  layout?: 'two-col' | 'dark-header' | 'single';
  profession: string;
}

const TEMPLATE_META: Record<string, TemplateMeta> = {
  // Business
  classic:      { desc: '标准单栏布局，适合大多数行业', bg: '#F9FAFB', tc: '#374151', profession: '通用' },
  professional: { desc: '深色顶部 header，商务专业感强', bg: '#1F2937', tc: '#F9FAFB', layout: 'dark-header', profession: '通用' },
  executive:    { desc: '高管风格，大气稳重，金色分隔线点缀', bg: '#FFFFFF', tc: '#1C1C1C', accent: '#C9A84C', profession: '金融财会' },
  corporate:    { desc: '企业标准配色，蓝色主调，规整表格感', bg: '#1E40AF', tc: '#FFFFFF', layout: 'dark-header', profession: '通用' },
  banking:      { desc: '金融行业，保守配色，衬线标题字体', bg: '#FFFFFF', tc: '#111111', profession: '金融财会' },
  consulting:   { desc: '咨询风格，左右对称双栏，黑白为主', bg: '#FFFFFF', tc: '#111111', layout: 'two-col', profession: '金融财会' },
  sales:        { desc: '销售商务，突出业绩数字，橙色点缀', bg: '#FFF7ED', tc: '#EA580C', accent: '#EA580C', profession: '市场营销' },
  hr:           { desc: '人力资源，温暖色调，柔和圆角标签', bg: '#FFFBEB', tc: '#B45309', accent: '#D97706', profession: '通用' },
  manager:      { desc: '项目经理，时间线布局，蓝灰色调', bg: '#F8FAFC', tc: '#475569', profession: 'IT互联网' },
  legal:        { desc: '法律行业，严肃衬线字体，全黑白无彩色', bg: '#FFFFFF', tc: '#000000', profession: '通用' },
  // Creative
  modern:       { desc: '双栏布局，深色侧边栏突出个人品牌', bg: '#1F2937', tc: '#F9FAFB', layout: 'two-col', profession: '通用' },
  fresh:        { desc: '蓝色竖条装饰，清新活力，年轻感十足', bg: '#EFF6FF', tc: '#1E40AF', accent: '#3B82F6', profession: '通用' },
  creative:     { desc: '渐变色 header，进度条技能，设计感满满', bg: '#7C3AED', tc: '#fff', layout: 'dark-header', profession: '设计创意' },
  designer:     { desc: '设计师风格，深色侧边栏，大量留白', bg: '#18181B', tc: '#FAFAFA', layout: 'two-col', profession: '设计创意' },
  photographer: { desc: '摄影师风格，全宽深色 header，衬线大标题', bg: '#1C1C1C', tc: '#FFFFFF', layout: 'dark-header', profession: '设计创意' },
  writer:       { desc: '书籍排版风格，Garamond 字体，文学气质', bg: '#FFFFFF', tc: '#1a1a1a', profession: '教育学术' },
  marketing:    { desc: '市场营销，渐变标题底色，数据可视化风格', bg: '#DBEAFE', tc: '#1E3A5F', layout: 'two-col', profession: '市场营销' },
  media:        { desc: '新媒体运营，卡片式布局，圆角边框', bg: '#111827', tc: '#F9FAFB', layout: 'dark-header', profession: '市场营销' },
  artist:       { desc: '艺术家，大标题左对齐，棕色调', bg: '#FFFFFF', tc: '#78350F', accent: '#78350F', profession: '设计创意' },
  architect:    { desc: '建筑师，极细线条，网格感布局，灰色调', bg: '#FFFFFF', tc: '#1A1A1A', layout: 'two-col', profession: '设计创意' },
  // Minimal
  minimal:      { desc: '衬线字体，极简排版，适合学术与创意行业', bg: '#FFFBEB', tc: '#92400E', profession: '通用' },
  elegant:      { desc: '居中布局，衬线大标题，优雅简约风', bg: '#FAF8F5', tc: '#2D2D2D', accent: '#C4A882', profession: '通用' },
  clean:        { desc: '纯净白，只用黑色和灰色，无任何装饰线', bg: '#FFFFFF', tc: '#111111', profession: '通用' },
  swiss:        { desc: '瑞士排版风格，网格对齐，红色点缀', bg: '#FFFFFF', tc: '#111111', accent: '#DC2626', profession: '设计创意' },
  nordic:       { desc: '北欧风，大量留白，浅蓝灰配色', bg: '#F8FAFC', tc: '#1E293B', accent: '#94A3B8', profession: '通用' },
  japanese:     { desc: '日式简约，竖线分隔，留白极多', bg: '#FFFFFF', tc: '#1C1917', profession: '通用' },
  paper:        { desc: '纸质感，微黄背景，打字机字体', bg: '#FEFCE8', tc: '#292524', profession: '教育学术' },
  mono:         { desc: '单色风格，只用灰色深浅变化', bg: '#FFFFFF', tc: '#525252', profession: '通用' },
  line:         { desc: '线条艺术，所有分隔都用细线装饰', bg: '#FFFFFF', tc: '#1a1a1a', profession: '通用' },
  space:        { desc: '呼吸感设计，超大行距与section间距', bg: '#FFFFFF', tc: '#222222', profession: '教育学术' },
  // Tech
  tech:         { desc: '等宽字体，tag 技能，暗色调技术风格', bg: '#0F172A', tc: '#CBD5E1', layout: 'dark-header', profession: 'IT互联网' },
  developer:    { desc: '终端风格，绿色 # 前缀，代码感设计', bg: '#1E1E1E', tc: '#D4D4D4', layout: 'dark-header', profession: 'IT互联网' },
  github:       { desc: 'GitHub Profile 风格，绿色点缀', bg: '#FFFFFF', tc: '#24292F', accent: '#166534', profession: 'IT互联网' },
  terminal:     { desc: '完整终端风格，黑底绿字，仿真命令行', bg: '#0A0A0A', tc: '#4ADE80', layout: 'dark-header', profession: 'IT互联网' },
  vscode:       { desc: 'VS Code 深色主题配色，侧边栏布局', bg: '#1E1E1E', tc: '#D4D4D4', layout: 'two-col', profession: 'IT互联网' },
  data:         { desc: '数据科学家，表格风格展示技能，深蓝暗色', bg: '#0F172A', tc: '#E2E8F0', layout: 'dark-header', profession: 'IT互联网' },
  devops:       { desc: 'DevOps 工程师，pipeline 时间线样式', bg: '#172554', tc: '#E2E8F0', layout: 'dark-header', profession: 'IT互联网' },
  mobile:       { desc: '移动开发，圆角卡片，iOS 设计语言', bg: '#F2F2F7', tc: '#1C1C1E', profession: 'IT互联网' },
  fullstack:    { desc: '全栈工程师，上深下白分栏布局', bg: '#1E293B', tc: '#F1F5F9', layout: 'dark-header', profession: 'IT互联网' },
  ai:           { desc: 'AI/ML 工程师，蓝紫渐变 header', bg: '#1E1B4B', tc: '#E0E7FF', layout: 'dark-header', profession: 'IT互联网' },
};

const CATEGORY_LABELS: Record<string, string> = {
  business: '商务',
  creative: '创意',
  minimal: '极简',
  tech: '技术',
};

function isColorDark(hex: string): boolean {
  const h = hex.replace('#', '');
  if (h.length < 6) return false;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

function TemplatePreview({ slug, meta }: { slug: string; meta: TemplateMeta }) {
  const isDark = isColorDark(meta.bg);
  const isTwoCol = meta.layout === 'two-col';
  const isDarkHeader = meta.layout === 'dark-header';

  const lineH = isDark ? 'rgba(255,255,255,' : 'rgba(0,0,0,';
  const titleA = lineH + (isDark ? '0.9)' : '0.75)');
  const titleB = lineH + (isDark ? '0.5)' : '0.35)');
  const lineA  = lineH + (isDark ? '0.2)' : '0.12)');
  const lineB  = lineH + (isDark ? '0.1)' : '0.06)');
  const tagBg  = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)';
  const accentColor = meta.accent ?? (isDark ? 'rgba(255,255,255,0.6)' : '#1C1917');

  const gradientMask = `linear-gradient(to bottom, transparent 60%, ${meta.bg === '#FFFFFF' ? '#fff' : meta.bg} 100%)`;

  if (isTwoCol) {
    const sidebarBg = isDark ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.06)';
    const sideTitle = isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)';
    const sideLine  = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
    return (
      <div style={{ height: 220, background: meta.bg, borderRadius: '10px 10px 0 0', display: 'flex', overflow: 'hidden', position: 'relative' }}>
        {/* Sidebar */}
        <div style={{ width: 62, background: sidebarBg, padding: '20px 10px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Avatar circle */}
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: sideTitle, margin: '0 auto 14px', opacity: 0.7 }} />
          {/* Name lines */}
          <div style={{ height: 4, background: sideTitle, borderRadius: 2, width: '80%', marginBottom: 4 }} />
          <div style={{ height: 3, background: sideLine, borderRadius: 2, width: '60%', marginBottom: 14 }} />
          {/* Skill tags */}
          {[70, 85, 55, 75, 65].map((w, i) => (
            <div key={i} style={{ height: 3, background: sideLine, borderRadius: 2, width: `${w}%`, marginBottom: 5 }} />
          ))}
          {/* Tags */}
          <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {[38, 32, 36].map((w, i) => (
              <div key={i} style={{ height: 8, width: w, background: sideLine, borderRadius: 3 }} />
            ))}
          </div>
        </div>
        {/* Main */}
        <div style={{ flex: 1, padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ height: 6, background: titleA, borderRadius: 3, width: '55%', marginBottom: 5 }} />
          <div style={{ height: 3, background: lineA, borderRadius: 2, width: '70%', marginBottom: 12 }} />
          <div style={{ height: 2, background: lineB, marginBottom: 10 }} />
          {/* Section */}
          <div style={{ height: 4, background: accentColor, borderRadius: 2, width: '30%', marginBottom: 6 }} />
          {[90, 75, 85, 60].map((w, i) => (
            <div key={i} style={{ height: 3, background: i % 2 === 0 ? lineA : lineB, borderRadius: 2, width: `${w}%`, marginBottom: 4 }} />
          ))}
        </div>
        {/* Gradient mask */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: gradientMask, pointerEvents: 'none' }} />
      </div>
    );
  }

  if (isDarkHeader) {
    const headerBg = meta.bg;
    const bodyBg = isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF';
    const hTitleA = 'rgba(255,255,255,0.9)';
    const hLineA  = 'rgba(255,255,255,0.45)';
    const hLineB  = 'rgba(255,255,255,0.2)';
    const bLineA  = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.12)';
    const bLineB  = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    const bodyGradient = `linear-gradient(to bottom, transparent 50%, ${isDark ? headerBg : '#fff'} 100%)`;
    return (
      <div style={{ height: 220, background: isDark ? headerBg : '#fff', borderRadius: '10px 10px 0 0', overflow: 'hidden', position: 'relative' }}>
        {/* Header */}
        <div style={{ background: headerBg, padding: '18px 20px 14px' }}>
          <div style={{ height: 8, background: hTitleA, borderRadius: 3, width: '42%', marginBottom: 6 }} />
          <div style={{ height: 3, background: hLineA, borderRadius: 2, width: '58%', marginBottom: 4 }} />
          <div style={{ height: 3, background: hLineB, borderRadius: 2, width: '40%' }} />
        </div>
        {/* Body */}
        <div style={{ background: bodyBg, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ height: 4, background: bLineA, borderRadius: 2, width: '28%', marginBottom: 8 }} />
          {[88, 70, 94, 55, 75].map((w, i) => (
            <div key={i} style={{ height: 3, background: i % 2 === 0 ? bLineA : bLineB, borderRadius: 2, width: `${w}%`, marginBottom: 4 }} />
          ))}
        </div>
        {/* Gradient mask */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 70, background: bodyGradient, pointerEvents: 'none' }} />
      </div>
    );
  }

  // Single column
  return (
    <div style={{ height: 220, background: meta.bg, borderRadius: '10px 10px 0 0', padding: '22px 22px', overflow: 'hidden', position: 'relative' }}>
      {/* Name */}
      <div style={{ height: 8, background: titleA, borderRadius: 3, width: '40%', marginBottom: 5 }} />
      {/* Subtitle */}
      <div style={{ height: 3, background: titleB, borderRadius: 2, width: '55%', marginBottom: 4 }} />
      {/* Contact row */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {[42, 36, 48].map((w, i) => (
          <div key={i} style={{ height: 3, background: lineB, borderRadius: 2, width: w }} />
        ))}
      </div>
      {/* Divider */}
      <div style={{ height: 1, background: lineB, marginBottom: 10 }} />
      {/* Section title */}
      <div style={{ height: 4, background: meta.accent ? meta.accent : lineA, borderRadius: 2, width: '30%', marginBottom: 7 }} />
      {/* Body lines */}
      {[88, 70, 95, 58, 80].map((w, i) => (
        <div key={i} style={{
          height: 3, background: i % 2 === 0 ? lineA : lineB,
          borderRadius: 2, width: `${w}%`, marginBottom: i === 2 ? 10 : 4,
        }} />
      ))}
      {/* Skills tags */}
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {[32, 40, 28, 36].map((w, i) => (
          <div key={i} style={{ height: 10, width: w, background: tagBg, borderRadius: 4 }} />
        ))}
      </div>
      {/* Gradient mask */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: gradientMask, pointerEvents: 'none' }} />
    </div>
  );
}

const styleCategories = [
  { key: 'all', label: '全部' },
  { key: 'business', label: '商务' },
  { key: 'creative', label: '创意' },
  { key: 'minimal', label: '极简' },
  { key: 'tech', label: '技术' },
];

const professionCategories = [
  { key: 'all', label: '全部' },
  { key: 'IT互联网', label: 'IT互联网' },
  { key: '金融财会', label: '金融财会' },
  { key: '设计创意', label: '设计创意' },
  { key: '教育学术', label: '教育学术' },
  { key: '市场营销', label: '市场营销' },
  { key: '医疗健康', label: '医疗健康' },
];

function FilterBar({
  label,
  categories,
  selected,
  onSelect,
  templates,
  filterKey,
}: {
  label: string;
  categories: { key: string; label: string }[];
  selected: string;
  onSelect: (key: string) => void;
  templates: TemplateSummary[];
  filterKey: 'category' | 'profession';
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 12, color: '#A8A29E', fontWeight: 500, flexShrink: 0, minWidth: 28 }}>{label}</span>
      {categories.map(cat => {
        const count = filterKey === 'category'
          ? (cat.key !== 'all' ? templates.filter(t => t.category === cat.key).length : 0)
          : (cat.key !== 'all' ? Object.values(TEMPLATE_META).filter(m => m.profession === cat.key).length : 0);
        const isActive = selected === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            style={{
              padding: '5px 14px',
              borderRadius: 20,
              border: `1px solid ${isActive ? '#1C1917' : '#E7E5E4'}`,
              background: isActive ? '#1C1917' : '#FFFFFF',
              color: isActive ? '#FFFFFF' : '#78716C',
              fontSize: 12,
              fontWeight: isActive ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.12s ease',
              fontFamily: 'inherit',
              lineHeight: 1,
            }}
          >
            {cat.label}
            {cat.key !== 'all' && count > 0 && (
              <span style={{ marginLeft: 4, fontSize: 11, opacity: 0.65 }}>({count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

const FEATURED_ORDER = ['classic', 'professional', 'elegant', 'modern', 'fresh', 'clean', 'swiss', 'minimal', 'tech', 'developer'];

export function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [profession, setProfession] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => { api.get('/templates').then(({ data }) => setTemplates(data.data)); }, []);

  const isLoggedIn = !!localStorage.getItem('accessToken');

  const handleUse = async (slug: string) => {
    if (isLoggedIn) {
      const { data } = await api.post('/resumes', { templateId: slug });
      message.success('简历已创建');
      navigate(`/editor/${data.data.id}`);
    } else {
      navigate(`/editor?template=${slug}`);
    }
  };

  const filtered = templates
    .filter(t => {
      const categoryMatch = category === 'all' || t.category === category;
      const meta = TEMPLATE_META[t.slug];
      const professionMatch = profession === 'all' || (meta && meta.profession === profession);
      return categoryMatch && professionMatch;
    })
    .sort((a, b) => {
      const ai = FEATURED_ORDER.indexOf(a.slug);
      const bi = FEATURED_ORDER.indexOf(b.slug);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return 0;
    });

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF9' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(250,250,249,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E7E5E4',
        padding: '0 32px',
        height: 54,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#1C1917', letterSpacing: '-0.4px', fontFamily: 'inherit' }}>
          ResumeForge
        </span>
        <div style={{ flex: 1 }} />
        {isLoggedIn ? (
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              padding: '6px 14px', borderRadius: 6, border: '1px solid #E7E5E4',
              background: 'transparent', color: '#78716C', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.12s', fontFamily: 'inherit',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          >
            我的简历
          </button>
        ) : (
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '6px 14px', borderRadius: 6, border: '1px solid #E7E5E4',
              background: 'transparent', color: '#78716C', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.12s', fontFamily: 'inherit',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          >
            登录
          </button>
        )}
      </header>

      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          <h1 style={{
            margin: '0 0 8px',
            fontSize: 28,
            fontWeight: 700,
            color: '#1C1917',
            letterSpacing: '-0.6px',
            lineHeight: 1.25,
            fontFamily: 'inherit',
          }}>
            选择一个适合你的模板
          </h1>
          <p style={{ margin: 0, fontSize: 14, color: '#78716C', lineHeight: 1.6, fontFamily: 'inherit' }}>
            免费使用 · 即时编辑 · 直接打印
          </p>
        </div>

        {/* Filter bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          <FilterBar
            label="风格"
            categories={styleCategories}
            selected={category}
            onSelect={setCategory}
            templates={templates}
            filterKey="category"
          />
          <FilterBar
            label="职业"
            categories={professionCategories}
            selected={profession}
            onSelect={setProfession}
            templates={templates}
            filterKey="profession"
          />
        </div>

        {/* Template grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {filtered.map((t) => {
            const meta = TEMPLATE_META[t.slug] ?? { bg: '#F5F5F4', tc: '#374151', desc: '', profession: '通用' };
            const isHovered = hoveredCard === t.id;
            return (
              <div
                key={t.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E7E5E4',
                  borderRadius: 10,
                  overflow: 'hidden',
                  transition: 'box-shadow 0.18s ease, transform 0.18s ease',
                  boxShadow: isHovered
                    ? '0 8px 25px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)'
                    : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard(t.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <TemplatePreview slug={t.slug} meta={meta} />

                <div style={{ padding: '14px 16px 16px' }}>
                  {/* Title row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#1C1917', fontFamily: 'inherit' }}>
                      {t.name}
                    </span>
                    {t.category && (
                      <span style={{
                        fontSize: 10, padding: '2px 7px', borderRadius: 20, fontWeight: 500,
                        background: '#F5F5F4', color: '#78716C', border: '1px solid #E7E5E4',
                        fontFamily: 'inherit',
                      }}>
                        {CATEGORY_LABELS[t.category] ?? t.category}
                      </span>
                    )}
                    {meta.profession && meta.profession !== '通用' && (
                      <span style={{
                        fontSize: 10, padding: '2px 7px', borderRadius: 20, fontWeight: 500,
                        background: '#F5F5F4', color: '#78716C', border: '1px solid #E7E5E4',
                        fontFamily: 'inherit',
                      }}>
                        {meta.profession}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div style={{
                    fontSize: 12, color: '#78716C', marginBottom: 14, lineHeight: 1.55,
                    fontFamily: 'inherit',
                  }}>
                    {meta.desc}
                  </div>

                  {/* CTA button */}
                  <button
                    onClick={() => handleUse(t.slug)}
                    style={{
                      width: '100%', padding: '8px 0', borderRadius: 6,
                      border: 'none',
                      background: isHovered ? '#292524' : '#1C1917',
                      color: '#FFFFFF',
                      fontSize: 13, fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'background 0.12s ease, transform 0.1s ease',
                      transform: isHovered ? 'scale(1.01)' : 'scale(1)',
                      fontFamily: 'inherit',
                    }}
                  >
                    使用此模板
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center', color: '#A8A29E', padding: '64px 0', fontSize: 14,
            fontFamily: 'inherit',
          }}>
            该分类暂无模板
          </div>
        )}
      </div>
    </div>
  );
}
