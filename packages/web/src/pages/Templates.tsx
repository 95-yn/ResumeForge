import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import { api } from '../api/client';

interface TemplateSummary { id: string; name: string; slug: string; category: string; }

const TEMPLATE_META: Record<string, { desc: string; bg: string; tc: string; accent?: string }> = {
  classic: { desc: '标准单栏布局，适合大多数行业', bg: '#F9FAFB', tc: '#374151' },
  modern: { desc: '双栏布局，深色侧边栏突出个人品牌', bg: '#1F2937', tc: '#F9FAFB' },
  minimal: { desc: '衬线字体，极简排版，适合学术与创意行业', bg: '#FFFBEB', tc: '#92400E' },
  professional: { desc: '深色顶部 header，商务专业感强', bg: '#1F2937', tc: '#F9FAFB', accent: '#9CA3AF' },
  fresh: { desc: '蓝色竖条装饰，清新活力，年轻感十足', bg: '#EFF6FF', tc: '#1E40AF' },
  creative: { desc: '渐变色 header，进度条技能，设计感满满', bg: '#7C3AED', tc: '#fff' },
  elegant: { desc: '居中布局，衬线大标题，优雅简约风', bg: '#FAF8F5', tc: '#2D2D2D', accent: '#C4A882' },
  tech: { desc: '等宽字体，tag 技能，暗色调技术风格', bg: '#0F172A', tc: '#CBD5E1' },
  developer: { desc: '终端风格，绿色 # 前缀，代码感设计', bg: '#1E1E1E', tc: '#D4D4D4' },
};

const CATEGORY_LABELS: Record<string, string> = {
  business: '商务',
  creative: '创意',
  minimal: '极简',
  tech: '技术',
};

function TemplatePreview({ slug, meta }: { slug: string; meta: { bg: string; tc: string; accent?: string } }) {
  const isDark = ['modern', 'professional', 'tech', 'developer', 'creative'].includes(slug);
  const isCenter = ['classic', 'elegant'].includes(slug);
  const isTwoCol = slug === 'modern';
  const hasAccent = slug === 'fresh';
  const hasBadge = ['tech', 'developer'].includes(slug);

  if (isTwoCol) {
    return (
      <div style={{ height: 200, background: meta.bg, borderRadius: '8px 8px 0 0', display: 'flex', overflow: 'hidden' }}>
        <div style={{ width: 56, background: 'rgba(255,255,255,0.08)', padding: '24px 8px' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', margin: '0 auto 12px' }} />
          <div style={{ height: 3, background: 'rgba(255,255,255,0.12)', borderRadius: 2, marginBottom: 5 }} />
          <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, width: '70%' }} />
        </div>
        <div style={{ flex: 1, padding: '24px 14px' }}>
          {[50, 100, 80, 100, 60].map((w, i) => (
            <div key={i} style={{ height: i === 0 ? 5 : 3, background: `rgba(255,255,255,${i === 0 ? 0.18 : 0.08})`, borderRadius: 2, width: `${w}%`, marginBottom: i === 0 ? 10 : i === 2 ? 14 : 4 }} />
          ))}
        </div>
      </div>
    );
  }

  if (hasAccent) {
    return (
      <div style={{ height: 200, background: meta.bg, borderRadius: '8px 8px 0 0', display: 'flex', overflow: 'hidden' }}>
        <div style={{ width: 5, background: 'linear-gradient(180deg,#3B82F6,#93C5FD)', flexShrink: 0 }} />
        <div style={{ flex: 1, padding: '22px 16px' }}>
          <div style={{ height: 7, background: meta.tc, opacity: 0.22, borderRadius: 3, width: '40%', marginBottom: 6 }} />
          <div style={{ height: 3, background: meta.tc, opacity: 0.12, borderRadius: 2, width: '55%', marginBottom: 16 }} />
          {[90, 70, 50].map((w, i) => (
            <div key={i} style={{ height: 3, background: meta.tc, opacity: 0.08, borderRadius: 2, width: `${w}%`, marginBottom: 4 }} />
          ))}
        </div>
      </div>
    );
  }

  if (hasBadge) {
    return (
      <div style={{ height: 200, background: meta.bg, borderRadius: '8px 8px 0 0', padding: '22px 18px', overflow: 'hidden' }}>
        <div style={{ height: 6, background: slug === 'developer' ? '#4EC9B0' : '#38BDF8', opacity: 0.6, borderRadius: 3, width: '30%', marginBottom: 6 }} />
        <div style={{ height: 8, background: meta.tc, opacity: 0.2, borderRadius: 3, width: '45%', marginBottom: 14 }} />
        {[80, 65, 90, 55].map((w, i) => (
          <div key={i} style={{ height: 3, background: meta.tc, opacity: 0.1, borderRadius: 2, width: `${w}%`, marginBottom: 5 }} />
        ))}
        <div style={{ marginTop: 8, display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {[40, 55, 35, 48].map((w, i) => (
            <div key={i} style={{ height: 14, background: slug === 'developer' ? '#2D2D2D' : '#1E293B', border: '1px solid #334155', borderRadius: 2, width: w }} />
          ))}
        </div>
      </div>
    );
  }

  if (slug === 'creative') {
    return (
      <div style={{ height: 200, background: meta.bg, borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(135deg,#7C3AED,#4F46E5)', padding: '18px 16px 12px' }}>
          <div style={{ height: 8, background: 'rgba(255,255,255,0.3)', borderRadius: 3, width: '40%', marginBottom: 5 }} />
          <div style={{ height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2, width: '60%' }} />
        </div>
        <div style={{ padding: '10px 16px' }}>
          {[80, 65, 90].map((w, i) => (
            <div key={i} style={{ height: 3, background: '#7C3AED', opacity: 0.12, borderRadius: 2, width: `${w}%`, marginBottom: 5 }} />
          ))}
          <div style={{ marginTop: 8 }}>
            {[60, 40, 75].map((w, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <div style={{ height: 5, background: 'linear-gradient(90deg,#7C3AED,#4F46E5)', borderRadius: 3, width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: 200, background: meta.bg, borderRadius: '8px 8px 0 0', padding: '28px 24px', overflow: 'hidden' }}>
      {slug === 'professional' && (
        <div style={{ background: '#1F2937', margin: '-28px -24px 14px', padding: '14px 24px 10px' }}>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 3, width: '38%', marginBottom: 4 }} />
          <div style={{ height: 3, background: 'rgba(255,255,255,0.12)', borderRadius: 2, width: '50%' }} />
        </div>
      )}
      <div style={{ textAlign: isCenter ? 'center' : 'left' }}>
        {slug !== 'professional' && (
          <>
            <div style={{ height: 7, background: meta.tc, opacity: 0.18, borderRadius: 3, width: '35%', margin: isCenter ? '0 auto 5px' : '0 0 5px' }} />
            <div style={{ height: 3, background: meta.tc, opacity: 0.1, borderRadius: 2, width: '45%', margin: isCenter ? '0 auto 14px' : '0 0 14px' }} />
          </>
        )}
      </div>
      {isCenter && <div style={{ height: 1, background: meta.accent ?? meta.tc, opacity: 0.15, marginBottom: 14 }} />}
      {[30, 90, 85, 70].map((w, i) => (
        <div key={i} style={{ height: i === 0 ? 5 : 3, background: meta.accent ?? meta.tc, opacity: i === 0 ? 0.12 : 0.06, borderRadius: 2, width: `${w}%`, marginBottom: i === 0 ? 8 : 3 }} />
      ))}
      <div style={{ height: 10 }} />
      {[25, 80, 60].map((w, i) => (
        <div key={i} style={{ height: i === 0 ? 5 : 3, background: meta.accent ?? meta.tc, opacity: i === 0 ? 0.12 : 0.06, borderRadius: 2, width: `${w}%`, marginBottom: i === 0 ? 8 : 3 }} />
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
            const meta = TEMPLATE_META[t.slug] ?? { bg: '#F3F4F6', tc: '#374151' };
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
                    {TEMPLATE_META[t.slug]?.desc ?? ''}
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
