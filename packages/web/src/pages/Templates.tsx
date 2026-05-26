import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Button, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { api } from '../api/client';

interface TemplateSummary { id: string; name: string; slug: string; category: string; thumbnail: string; isPremium: boolean; }

// 模板预览配置
const TEMPLATE_PREVIEW_CONFIG: Record<string, {
  preview: React.ReactNode;
  desc: string;
}> = {
  classic: {
    desc: '传统双栏布局，庄重大气，适合金融、咨询等行业',
    preview: (
      <div style={{
        height: 180,
        background: 'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}>
        {/* 模拟简历头部 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#4F46E5', opacity: 0.7 }} />
          <div>
            <div style={{ width: 80, height: 8, background: '#4F46E5', borderRadius: 4, marginBottom: 4, opacity: 0.8 }} />
            <div style={{ width: 55, height: 6, background: '#818CF8', borderRadius: 4, opacity: 0.6 }} />
          </div>
        </div>
        {/* 分割线 */}
        <div style={{ height: 1.5, background: '#818CF8', opacity: 0.4, borderRadius: 1 }} />
        {/* 模拟内容行 */}
        {[90, 75, 60, 80].map((w, i) => (
          <div key={i} style={{ width: `${w}%`, height: 6, background: '#6366F1', borderRadius: 4, opacity: 0.25 + i * 0.07 }} />
        ))}
        {/* 装饰角标 */}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          fontSize: 11, fontWeight: 700, color: '#4F46E5',
          background: 'rgba(79,70,229,0.12)', padding: '2px 8px', borderRadius: 10,
        }}>CLASSIC</div>
      </div>
    ),
  },
  modern: {
    desc: '深色侧边栏设计，时尚现代，适合设计、互联网行业',
    preview: (
      <div style={{
        height: 180,
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
      }}>
        {/* 左侧侧边栏 */}
        <div style={{
          width: 52,
          background: 'rgba(255,255,255,0.08)',
          padding: '14px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#818CF8', opacity: 0.8 }} />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ width: 28, height: 5, background: '#C7D2FE', borderRadius: 3, opacity: 0.4 }} />
          ))}
        </div>
        {/* 右侧内容区 */}
        <div style={{ flex: 1, padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ width: 90, height: 8, background: '#fff', borderRadius: 4, opacity: 0.85 }} />
          <div style={{ width: 60, height: 5, background: '#818CF8', borderRadius: 3, opacity: 0.6 }} />
          <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', margin: '2px 0' }} />
          {[85, 70, 90, 55].map((w, i) => (
            <div key={i} style={{ width: `${w}%`, height: 5, background: '#C7D2FE', borderRadius: 3, opacity: 0.3 + i * 0.05 }} />
          ))}
        </div>
        {/* 装饰角标 */}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          fontSize: 11, fontWeight: 700, color: '#C7D2FE',
          background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: 10,
        }}>MODERN</div>
      </div>
    ),
  },
  minimal: {
    desc: '极简白色风格，清晰简洁，适合学术、技术岗位',
    preview: (
      <div style={{
        height: 180,
        background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}>
        {/* 模拟极简头部 */}
        <div style={{ width: 100, height: 9, background: '#92400E', borderRadius: 4, opacity: 0.55 }} />
        <div style={{ width: 65, height: 5, background: '#D97706', borderRadius: 3, opacity: 0.5 }} />
        {/* 分割线 */}
        <div style={{ height: 1, background: '#D97706', opacity: 0.3, marginTop: 2, marginBottom: 2 }} />
        {/* 模拟内容 */}
        {[75, 85, 60, 80, 50].map((w, i) => (
          <div key={i} style={{ width: `${w}%`, height: 5, background: '#92400E', borderRadius: 3, opacity: 0.15 + i * 0.05 }} />
        ))}
        {/* 装饰角标 */}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          fontSize: 11, fontWeight: 700, color: '#92400E',
          background: 'rgba(217,119,6,0.12)', padding: '2px 8px', borderRadius: 10,
        }}>MINIMAL</div>
      </div>
    ),
  },
};

function getPreviewConfig(slug: string) {
  return TEMPLATE_PREVIEW_CONFIG[slug] ?? {
    desc: '专业简历模板，适合多种求职场景',
    preview: (
      <div style={{
        height: 180,
        background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 8,
      }}>
        <span style={{ fontSize: 32 }}>📄</span>
        <span style={{ fontSize: 12, color: '#9CA3AF' }}>模板预览</span>
      </div>
    ),
  };
}

export function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
  const navigate = useNavigate();

  useEffect(() => { api.get('/templates').then(({ data }) => setTemplates(data.data)); }, []);

  const handleUse = async (slug: string) => {
    const { data } = await api.post('/resumes', { templateId: slug });
    message.success('简历已创建，正在进入编辑器...');
    navigate(`/editor/${data.data.id}`);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)' }}>
      {/* 顶部导航栏 */}
      <header style={{
        background: '#fff',
        boxShadow: '0 2px 16px rgba(79,70,229,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '0 24px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 22 }}>📄</span>
            <span style={{
              fontSize: 18,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ResumeForge
            </span>
          </div>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/dashboard')}
            style={{ borderRadius: 8, borderColor: '#E0E7FF', color: '#4F46E5' }}
          >
            返回我的简历
          </Button>
        </div>
      </header>

      {/* 主内容区 */}
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px' }}>
        {/* 页面标题 */}
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1E1B4B', margin: 0 }}>模板市场</h1>
          <p style={{ fontSize: 15, color: '#9CA3AF', margin: '10px 0 0' }}>
            选择一款适合您的简历模板，打造专业求职形象
          </p>
        </div>

        {/* 模板列表 */}
        <List
          grid={{ gutter: 20, column: 3 }}
          dataSource={templates}
          renderItem={(item) => {
            const config = getPreviewConfig(item.slug);
            return (
              <List.Item style={{ marginBottom: 4 }}>
                <div
                  className="template-card"
                  style={{
                    background: '#fff',
                    borderRadius: 12,
                    boxShadow: '0 4px 24px rgba(79,70,229,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  {/* 彩色预览区域 */}
                  <div style={{ overflow: 'hidden' }}>
                    {config.preview}
                  </div>

                  {/* 卡片底部信息 */}
                  <div style={{ padding: '16px 16px 18px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1E1B4B', margin: '0 0 6px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: 12, color: '#9CA3AF', margin: '0 0 16px', lineHeight: 1.6 }}>
                      {config.desc}
                    </p>
                    <Button
                      block
                      onClick={() => handleUse(item.slug)}
                      style={{
                        borderRadius: 8,
                        background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                        border: 'none',
                        color: '#fff',
                        fontWeight: 600,
                        height: 38,
                      }}
                    >
                      使用此模板
                    </Button>
                  </div>
                </div>
              </List.Item>
            );
          }}
        />
      </main>
    </div>
  );
}
