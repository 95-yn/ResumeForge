import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { api } from '../api/client';

interface TemplateSummary { id: string; name: string; slug: string; category: string; }

const TEMPLATE_META: Record<string, { desc: string; bg: string; tc: string }> = {
  classic: { desc: '标准单栏布局，适合大多数行业', bg: '#F9FAFB', tc: '#374151' },
  modern: { desc: '双栏布局，深色侧边栏突出个人品牌', bg: '#1F2937', tc: '#F9FAFB' },
  minimal: { desc: '衬线字体，极简排版，适合学术与创意行业', bg: '#FFFBEB', tc: '#92400E' },
};

function TemplatePreview({ slug }: { slug: string }) {
  const m = TEMPLATE_META[slug] ?? { bg: '#F3F4F6', tc: '#374151' };
  if (slug === 'modern') {
    return (
      <div style={{ height: 200, background: m.bg, borderRadius: '8px 8px 0 0', display: 'flex', overflow: 'hidden' }}>
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
  const center = slug === 'classic';
  return (
    <div style={{ height: 200, background: m.bg, borderRadius: '8px 8px 0 0', padding: '28px 24px' }}>
      <div style={{ textAlign: center ? 'center' : 'left' }}>
        <div style={{ height: 7, background: m.tc, opacity: 0.18, borderRadius: 3, width: '35%', margin: center ? '0 auto 5px' : '0 0 5px' }} />
        <div style={{ height: 3, background: m.tc, opacity: 0.1, borderRadius: 2, width: '45%', margin: center ? '0 auto 14px' : '0 0 14px' }} />
      </div>
      {center && <div style={{ height: 1, background: m.tc, opacity: 0.1, marginBottom: 14 }} />}
      {[30, 90, 85, 70].map((w, i) => (
        <div key={i} style={{ height: i === 0 ? 5 : 3, background: m.tc, opacity: i === 0 ? 0.12 : 0.06, borderRadius: 2, width: `${w}%`, marginBottom: i === 0 ? 8 : 3 }} />
      ))}
      <div style={{ height: 12 }} />
      {[25, 80, 60].map((w, i) => (
        <div key={i} style={{ height: i === 0 ? 5 : 3, background: m.tc, opacity: i === 0 ? 0.12 : 0.06, borderRadius: 2, width: `${w}%`, marginBottom: i === 0 ? 8 : 3 }} />
      ))}
    </div>
  );
}

export function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
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
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#111827' }}>选择模板</h1>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: '#6B7280' }}>挑一个适合你的模板，随时可以更换</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {templates.map((t) => (
            <div key={t.id} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden', transition: 'box-shadow 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
              <TemplatePreview slug={t.slug} />
              <div style={{ padding: '16px 20px 20px' }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: '#6B7280', marginBottom: 16, lineHeight: 1.5 }}>{TEMPLATE_META[t.slug]?.desc ?? ''}</div>
                <Button block onClick={() => handleUse(t.slug)} style={{ borderRadius: 8, height: 38, fontWeight: 500, background: '#111827', color: '#fff', borderColor: '#111827' }}>
                  使用此模板
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
