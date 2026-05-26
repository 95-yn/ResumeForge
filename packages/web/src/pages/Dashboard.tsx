import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, message, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { api } from '../api/client';
import { useAuthStore } from '../stores/auth.store';

interface ResumeSummary { id: string; title: string; templateId: string; updatedAt: string; }

const TEMPLATE_LABELS: Record<string, string> = { classic: '经典', modern: '现代', minimal: '极简' };

export function Dashboard() {
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);
  const [loading, setLoading] = useState(true);
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
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {/* 顶栏 */}
      <header style={{
        background: '#fff', borderBottom: '1px solid #E5E7EB',
        padding: '0 32px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#111827', letterSpacing: '-0.3px' }}>ResumeForge</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Button size="small" type="text" onClick={() => navigate('/templates')} style={{ color: '#6B7280', fontSize: 13 }}>模板</Button>
          <Button size="small" type="text" onClick={() => { logout(); navigate('/login'); }} style={{ color: '#6B7280', fontSize: 13 }}>退出</Button>
        </div>
      </header>

      {/* 主体 */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#111827' }}>我的简历</h1>
            <p style={{ margin: '4px 0 0', fontSize: 14, color: '#6B7280' }}>
              {resumes.length > 0 ? `共 ${resumes.length} 份简历` : '开始创建你的第一份简历'}
            </p>
          </div>
          <Button
            type="primary" icon={<PlusOutlined />} onClick={handleCreate}
            style={{ borderRadius: 8, height: 38, fontWeight: 500, background: '#111827', borderColor: '#111827' }}
          >
            新建简历
          </Button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 80 }}><Spin /></div>
        ) : resumes.length === 0 ? (
          <div style={{
            background: '#fff', border: '2px dashed #E5E7EB', borderRadius: 12,
            padding: '64px 24px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📄</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#374151', marginBottom: 4 }}>还没有简历</div>
            <div style={{ fontSize: 14, color: '#9CA3AF', marginBottom: 20 }}>创建你的第一份简历，或从模板市场选择一个开始</div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <Button type="primary" onClick={handleCreate} style={{ borderRadius: 8, background: '#111827', borderColor: '#111827' }}>新建空白简历</Button>
              <Button onClick={() => navigate('/templates')} style={{ borderRadius: 8 }}>浏览模板</Button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {resumes.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/editor/${item.id}`)}
                style={{
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10,
                  padding: 20, cursor: 'pointer', transition: 'box-shadow 0.15s, border-color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#D1D5DB'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7EB'; }}
              >
                {/* 模板标签 */}
                <span style={{
                  display: 'inline-block', fontSize: 11, fontWeight: 500, color: '#6B7280',
                  background: '#F3F4F6', padding: '2px 8px', borderRadius: 4, marginBottom: 10,
                }}>
                  {TEMPLATE_LABELS[item.templateId] ?? item.templateId}
                </span>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 16 }}>
                  更新于 {new Date(item.updatedAt).toLocaleDateString('zh-CN')}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    size="small" type="text" danger
                    onClick={(e) => handleDelete(e, item.id)}
                    style={{ fontSize: 12 }}
                  >
                    删除
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
