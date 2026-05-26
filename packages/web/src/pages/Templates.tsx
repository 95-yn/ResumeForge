import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import { api } from '../api/client';

interface TemplateSummary { id: string; name: string; slug: string; category: string; }

interface TemplateMeta {
  desc: string;
  bg: string;
  tc: string;
  accent?: string;
  layout?: 'two-col' | 'dark-header' | 'single';
}

const TEMPLATE_META: Record<string, TemplateMeta> = {
  // Business
  classic:      { desc: '标准单栏布局，适合大多数行业', bg: '#F9FAFB', tc: '#374151' },
  professional: { desc: '深色顶部 header，商务专业感强', bg: '#1F2937', tc: '#F9FAFB', layout: 'dark-header' },
  executive:    { desc: '高管风格，大气稳重，金色分隔线点缀', bg: '#FFFFFF', tc: '#1C1C1C', accent: '#C9A84C' },
  corporate:    { desc: '企业标准配色，蓝色主调，规整表格感', bg: '#1E40AF', tc: '#FFFFFF', layout: 'dark-header' },
  banking:      { desc: '金融行业，保守配色，衬线标题字体', bg: '#FFFFFF', tc: '#111111' },
  consulting:   { desc: '咨询风格，左右对称双栏，黑白为主', bg: '#FFFFFF', tc: '#111111', layout: 'two-col' },
  sales:        { desc: '销售商务，突出业绩数字，橙色点缀', bg: '#FFF7ED', tc: '#EA580C', accent: '#EA580C' },
  hr:           { desc: '人力资源，温暖色调，柔和圆角标签', bg: '#FFFBEB', tc: '#B45309', accent: '#D97706' },
  manager:      { desc: '项目经理，时间线布局，蓝灰色调', bg: '#F8FAFC', tc: '#475569' },
  legal:        { desc: '法律行业，严肃衬线字体，全黑白无彩色', bg: '#FFFFFF', tc: '#000000' },
  // Creative
  modern:       { desc: '双栏布局，深色侧边栏突出个人品牌', bg: '#1F2937', tc: '#F9FAFB', layout: 'two-col' },
  fresh:        { desc: '蓝色竖条装饰，清新活力，年轻感十足', bg: '#EFF6FF', tc: '#1E40AF', accent: '#3B82F6' },
  creative:     { desc: '渐变色 header，进度条技能，设计感满满', bg: '#7C3AED', tc: '#fff', layout: 'dark-header' },
  designer:     { desc: '设计师风格，深色侧边栏，大量留白', bg: '#18181B', tc: '#FAFAFA', layout: 'two-col' },
  photographer: { desc: '摄影师风格，全宽深色 header，衬线大标题', bg: '#1C1C1C', tc: '#FFFFFF', layout: 'dark-header' },
  writer:       { desc: '书籍排版风格，Garamond 字体，文学气质', bg: '#FFFFFF', tc: '#1a1a1a' },
  marketing:    { desc: '市场营销，渐变标题底色，数据可视化风格', bg: '#DBEAFE', tc: '#1E3A5F', layout: 'two-col' },
  media:        { desc: '新媒体运营，卡片式布局，圆角边框', bg: '#111827', tc: '#F9FAFB', layout: 'dark-header' },
  artist:       { desc: '艺术家，大标题左对齐，棕色调', bg: '#FFFFFF', tc: '#78350F', accent: '#78350F' },
  architect:    { desc: '建筑师，极细线条，网格感布局，灰色调', bg: '#FFFFFF', tc: '#1A1A1A', layout: 'two-col' },
  // Minimal
  minimal:      { desc: '衬线字体，极简排版，适合学术与创意行业', bg: '#FFFBEB', tc: '#92400E' },
  elegant:      { desc: '居中布局，衬线大标题，优雅简约风', bg: '#FAF8F5', tc: '#2D2D2D', accent: '#C4A882' },
  clean:        { desc: '纯净白，只用黑色和灰色，无任何装饰线', bg: '#FFFFFF', tc: '#111111' },
  swiss:        { desc: '瑞士排版风格，网格对齐，红色点缀', bg: '#FFFFFF', tc: '#111111', accent: '#DC2626' },
  nordic:       { desc: '北欧风，大量留白，浅蓝灰配色', bg: '#F8FAFC', tc: '#1E293B', accent: '#94A3B8' },
  japanese:     { desc: '日式简约，竖线分隔，留白极多', bg: '#FFFFFF', tc: '#1C1917' },
  paper:        { desc: '纸质感，微黄背景，打字机字体', bg: '#FEFCE8', tc: '#292524' },
  mono:         { desc: '单色风格，只用灰色深浅变化', bg: '#FFFFFF', tc: '#525252' },
  line:         { desc: '线条艺术，所有分隔都用细线装饰', bg: '#FFFFFF', tc: '#1a1a1a' },
  space:        { desc: '呼吸感设计，超大行距与section间距', bg: '#FFFFFF', tc: '#222222' },
  // Tech
  tech:         { desc: '等宽字体，tag 技能，暗色调技术风格', bg: '#0F172A', tc: '#CBD5E1', layout: 'dark-header' },
  developer:    { desc: '终端风格，绿色 # 前缀，代码感设计', bg: '#1E1E1E', tc: '#D4D4D4', layout: 'dark-header' },
  github:       { desc: 'GitHub Profile 风格，绿色点缀', bg: '#FFFFFF', tc: '#24292F', accent: '#166534' },
  terminal:     { desc: '完整终端风格，黑底绿字，仿真命令行', bg: '#0A0A0A', tc: '#4ADE80', layout: 'dark-header' },
  vscode:       { desc: 'VS Code 深色主题配色，侧边栏布局', bg: '#1E1E1E', tc: '#D4D4D4', layout: 'two-col' },
  data:         { desc: '数据科学家，表格风格展示技能，深蓝暗色', bg: '#0F172A', tc: '#E2E8F0', layout: 'dark-header' },
  devops:       { desc: 'DevOps 工程师，pipeline 时间线样式', bg: '#172554', tc: '#E2E8F0', layout: 'dark-header' },
  mobile:       { desc: '移动开发，圆角卡片，iOS 设计语言', bg: '#F2F2F7', tc: '#1C1C1E' },
  fullstack:    { desc: '全栈工程师，上深下白分栏布局', bg: '#1E293B', tc: '#F1F5F9', layout: 'dark-header' },
  ai:           { desc: 'AI/ML 工程师，蓝紫渐变 header', bg: '#1E1B4B', tc: '#E0E7FF', layout: 'dark-header' },
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
  // Relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

function TemplatePreview({ slug, meta }: { slug: string; meta: TemplateMeta }) {
  const isDark = isColorDark(meta.bg);
  const lineBase = isDark ? 'rgba(255,255,255,' : 'rgba(0,0,0,';
  const accentColor = meta.accent ?? (isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)');
  const isTwoCol = meta.layout === 'two-col';
  const isDarkHeader = meta.layout === 'dark-header';

  if (isTwoCol) {
    const sidebarBg = isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)';
    const sideLineA = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';
    const sideLineB = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    const mainLineA = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.15)';
    const mainLineB = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    return (
      <div style={{ height: 200, background: meta.bg, borderRadius: '8px 8px 0 0', display: 'flex', overflow: 'hidden' }}>
        <div style={{ width: 56, background: sidebarBg, padding: '24px 8px', flexShrink: 0 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: sideLineA, margin: '0 auto 12px' }} />
          {[100, 70, 85, 60].map((w, i) => (
            <div key={i} style={{ height: 3, background: i % 2 === 0 ? sideLineA : sideLineB, borderRadius: 2, width: `${w}%`, marginBottom: 5 }} />
          ))}
        </div>
        <div style={{ flex: 1, padding: '20px 14px' }}>
          <div style={{ height: 7, background: mainLineA, borderRadius: 3, width: '50%', marginBottom: 6 }} />
          <div style={{ height: 3, background: mainLineB, borderRadius: 2, width: '65%', marginBottom: 14 }} />
          {[90, 70, 100, 60, 80].map((w, i) => (
            <div key={i} style={{ height: 3, background: mainLineB, borderRadius: 2, width: `${w}%`, marginBottom: i === 1 ? 10 : 4 }} />
          ))}
        </div>
      </div>
    );
  }

  if (isDarkHeader) {
    // Dark background header + light body
    const headerBg = isDark ? meta.bg : '#1F2937';
    const bodyBg = isDark ? 'rgba(255,255,255,0.05)' : '#FFFFFF';
    const headerLineA = 'rgba(255,255,255,0.25)';
    const headerLineB = 'rgba(255,255,255,0.12)';
    const bodyLineA = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
    const bodyLineB = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
    return (
      <div style={{ height: 200, background: bodyBg, borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
        <div style={{ background: headerBg, padding: '16px 18px 12px' }}>
          <div style={{ height: 7, background: headerLineA, borderRadius: 3, width: '40%', marginBottom: 5 }} />
          <div style={{ height: 3, background: headerLineB, borderRadius: 2, width: '55%', marginBottom: 4 }} />
          <div style={{ height: 3, background: headerLineB, borderRadius: 2, width: '70%' }} />
        </div>
        <div style={{ padding: '12px 18px' }}>
          {[90, 70, 100, 60].map((w, i) => (
            <div key={i} style={{ height: i === 0 ? 5 : 3, background: i === 0 ? bodyLineA : bodyLineB, borderRadius: 2, width: `${w}%`, marginBottom: i === 0 ? 8 : 4 }} />
          ))}
        </div>
      </div>
    );
  }

  // Single column: light or dark background
  return (
    <div style={{ height: 200, background: meta.bg, borderRadius: '8px 8px 0 0', padding: '24px 20px', overflow: 'hidden' }}>
      <div style={{ height: 7, background: lineBase + '0.18)', borderRadius: 3, width: '38%', marginBottom: 5 }} />
      <div style={{ height: 3, background: lineBase + '0.1)', borderRadius: 2, width: '50%', marginBottom: 4 }} />
      <div style={{ height: 1, background: lineBase + '0.08)', marginBottom: 12 }} />
      {[85, 65, 90, 55, 75].map((w, i) => (
        <div key={i} style={{
          height: i === 0 ? 5 : 3,
          background: i === 0 ? (meta.accent ? meta.accent : lineBase + '0.15)') : lineBase + '0.07)',
          borderRadius: 2,
          width: `${w}%`,
          marginBottom: i === 0 ? 8 : i === 2 ? 12 : 4,
          opacity: i === 0 ? 1 : 0.8,
        }} />
      ))}
      <div style={{ height: 1, background: lineBase + '0.06)', marginBottom: 8 }} />
      {[30, 80, 60].map((w, i) => (
        <div key={i} style={{ height: i === 0 ? 4 : 3, background: lineBase + '0.07)', borderRadius: 2, width: `${w}%`, marginBottom: 4 }} />
      ))}
    </div>
  );
}

const categories = [
  { key: 'all', label: '全部' },
  { key: 'business', label: '商务' },
  { key: 'creative', label: '创意' },
  { key: 'minimal', label: '极简' },
  { key: 'tech', label: '技术' },
];

export function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
  const [category, setCategory] = useState<string>('all');
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

  const filtered = category === 'all' ? templates : templates.filter(t => t.category === category);

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: 56, display: 'flex', alignItems: 'center', gap: 16, position: 'sticky', top: 0, zIndex: 10 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>ResumeForge</span>
        <div style={{ flex: 1 }} />
        {isLoggedIn
          ? <Button type="text" onClick={() => navigate('/dashboard')} style={{ color: '#6B7280', fontSize: 13 }}>我的简历</Button>
          : <Button type="text" onClick={() => navigate('/login')} style={{ color: '#6B7280', fontSize: 13 }}>登录</Button>
        }
      </header>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#111827' }}>选择模板</h1>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: '#6B7280' }}>挑一个适合你的模板，随时可以更换</p>
        </div>
        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              style={{
                padding: '6px 18px', borderRadius: 20, border: '1px solid',
                borderColor: category === cat.key ? '#111827' : '#E5E7EB',
                background: category === cat.key ? '#111827' : '#fff',
                color: category === cat.key ? '#fff' : '#374151',
                fontSize: 13, fontWeight: category === cat.key ? 600 : 400,
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              {cat.label}
              {cat.key !== 'all' && (
                <span style={{ marginLeft: 5, fontSize: 11, opacity: 0.7 }}>
                  ({templates.filter(t => t.category === cat.key).length})
                </span>
              )}
            </button>
          ))}
        </div>
        {/* Template grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {filtered.map((t) => {
            const meta = TEMPLATE_META[t.slug] ?? { bg: '#F3F4F6', tc: '#374151', desc: '' };
            return (
              <div key={t.id}
                style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden', transition: 'box-shadow 0.15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
                <TemplatePreview slug={t.slug} meta={meta} />
                <div style={{ padding: '14px 18px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>{t.name}</span>
                    {t.category && (
                      <span style={{
                        fontSize: 10, padding: '1px 7px', borderRadius: 10, fontWeight: 500,
                        background: '#F3F4F6', color: '#6B7280', border: '1px solid #E5E7EB',
                      }}>
                        {CATEGORY_LABELS[t.category] ?? t.category}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 14, lineHeight: 1.5 }}>
                    {meta.desc}
                  </div>
                  <Button block onClick={() => handleUse(t.slug)}
                    style={{ borderRadius: 8, height: 36, fontWeight: 500, background: '#111827', color: '#fff', borderColor: '#111827', fontSize: 13 }}>
                    使用此模板
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: '#9CA3AF', padding: '48px 0', fontSize: 14 }}>
            该分类暂无模板
          </div>
        )}
      </div>
    </div>
  );
}
