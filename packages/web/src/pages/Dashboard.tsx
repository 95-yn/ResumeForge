import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, message, Spin } from 'antd';
import { api } from '../api/client';
import { useAuthStore } from '../stores/auth.store';

interface ResumeSummary { id: string; title: string; templateId: string; updatedAt: string; }

// Minimal template preview for dashboard cards
function MiniPreview({ templateId }: { templateId: string }) {
  // Simple heuristic-based coloring
  const darkTemplates = new Set(['professional', 'modern', 'creative', 'designer', 'photographer', 'tech', 'developer', 'terminal', 'vscode', 'data', 'devops', 'fullstack', 'ai', 'media', 'corporate']);
  const isDark = darkTemplates.has(templateId);
  const bg = isDark ? '#1C1917' : '#F5F5F4';
  const lineA = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)';
  const lineB = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
  const lineC = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  return (
    <div style={{
      height: 140, background: bg, borderRadius: '10px 10px 0 0',
      padding: '18px 16px', overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ height: 6, background: lineA, borderRadius: 3, width: '42%', marginBottom: 5 }} />
      <div style={{ height: 3, background: lineB, borderRadius: 2, width: '58%', marginBottom: 12 }} />
      <div style={{ height: 1, background: lineC, marginBottom: 8 }} />
      <div style={{ height: 3, background: lineB, borderRadius: 2, width: '28%', marginBottom: 6 }} />
      {[85, 65, 90, 55].map((w, i) => (
        <div key={i} style={{ height: 3, background: i % 2 === 0 ? lineB : lineC, borderRadius: 2, width: `${w}%`, marginBottom: 4 }} />
      ))}
      {/* Gradient mask */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 50,
        background: `linear-gradient(to bottom, transparent, ${bg})`,
        pointerEvents: 'none',
      }} />
    </div>
  );
}

export function Dashboard() {
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => { api.get('/resumes').then(({ data }) => { setResumes(data.data); setLoading(false); }); }, []);

  const handleCreate = async () => {
    const { data } = await api.post('/resumes', { templateId: 'classic' });
    navigate(`/editor/${data.data.id}`);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    Modal.confirm({
      title: '确认删除这份简历？',
      content: '删除后无法恢复',
      okText: '删除',
      cancelText: '取消',
      okButtonProps: { danger: true },
      onOk: async () => {
        await api.delete(`/resumes/${id}`);
        setResumes((prev) => prev.filter((r) => r.id !== id));
        message.success('已删除');
      },
    });
  };

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
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#1C1917', letterSpacing: '-0.4px', fontFamily: 'inherit' }}>
          ResumeForge
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button
            onClick={() => navigate('/templates')}
            style={{
              padding: '6px 14px', borderRadius: 6, border: '1px solid #E7E5E4',
              background: 'transparent', color: '#78716C', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.12s', fontFamily: 'inherit',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          >
            模板
          </button>
          <button
            onClick={() => { logout(); navigate('/login'); }}
            style={{
              padding: '6px 14px', borderRadius: 6, border: '1px solid #E7E5E4',
              background: 'transparent', color: '#78716C', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.12s', fontFamily: 'inherit',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          >
            退出
          </button>
        </div>
      </header>

      {/* Main */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '44px 24px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <h1 style={{
              margin: '0 0 6px', fontSize: 26, fontWeight: 700, color: '#1C1917',
              letterSpacing: '-0.5px', fontFamily: 'inherit',
            }}>
              我的简历
            </h1>
            <p style={{ margin: 0, fontSize: 13, color: '#78716C', fontFamily: 'inherit' }}>
              {resumes.length > 0 ? `共 ${resumes.length} 份简历` : '开始创建你的第一份简历'}
            </p>
          </div>
          <button
            onClick={handleCreate}
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '9px 18px', borderRadius: 8, border: 'none',
              background: '#1C1917', color: '#FFFFFF',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              transition: 'background 0.12s', fontFamily: 'inherit',
              boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#292524'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1C1917'; }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>+</span>
            新建简历
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 80 }}><Spin /></div>
        ) : resumes.length === 0 ? (
          <div style={{
            background: '#FFFFFF',
            border: '1.5px dashed #E7E5E4',
            borderRadius: 14,
            padding: '72px 24px',
            textAlign: 'center',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12, background: '#F5F5F4',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px', fontSize: 22,
            }}>
              📄
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#1C1917', marginBottom: 6, fontFamily: 'inherit' }}>还没有简历</div>
            <div style={{ fontSize: 13, color: '#78716C', marginBottom: 24, fontFamily: 'inherit' }}>
              创建你的第一份简历，或从模板市场选择一个开始
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <button
                onClick={handleCreate}
                style={{
                  padding: '9px 20px', borderRadius: 8, border: 'none',
                  background: '#1C1917', color: '#FFFFFF',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  transition: 'background 0.12s', fontFamily: 'inherit',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#292524'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1C1917'; }}
              >
                新建空白简历
              </button>
              <button
                onClick={() => navigate('/templates')}
                style={{
                  padding: '9px 20px', borderRadius: 8, border: '1px solid #E7E5E4',
                  background: '#FFFFFF', color: '#78716C',
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  transition: 'all 0.12s', fontFamily: 'inherit',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#78716C'; }}
              >
                浏览模板
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {resumes.map((item) => {
              const isHovered = hoveredCard === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => navigate(`/editor/${item.id}`)}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E7E5E4',
                    borderRadius: 10,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.18s ease, transform 0.18s ease',
                    boxShadow: isHovered
                      ? '0 8px 25px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)'
                      : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <MiniPreview templateId={item.templateId} />

                  <div style={{ padding: '12px 14px 14px' }}>
                    {/* Template tag */}
                    <span style={{
                      display: 'inline-block', fontSize: 10, fontWeight: 500, color: '#A8A29E',
                      background: '#F5F5F4', padding: '2px 7px', borderRadius: 4,
                      marginBottom: 8, fontFamily: 'inherit',
                    }}>
                      {item.templateId}
                    </span>

                    <div style={{ fontSize: 14, fontWeight: 600, color: '#1C1917', marginBottom: 4, fontFamily: 'inherit' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 11, color: '#A8A29E', marginBottom: 12, fontFamily: 'inherit' }}>
                      更新于 {new Date(item.updatedAt).toLocaleDateString('zh-CN')}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        style={{
                          border: 'none', background: 'none', color: '#A8A29E',
                          cursor: 'pointer', fontSize: 11, fontWeight: 500,
                          padding: '2px 0', fontFamily: 'inherit',
                          transition: 'color 0.1s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#DC2626'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#A8A29E'; }}
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
