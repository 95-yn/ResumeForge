import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, List, Empty, Modal, message, Tag, Avatar } from 'antd';
import { PlusOutlined, UserOutlined, FileTextOutlined, AppstoreOutlined, LogoutOutlined } from '@ant-design/icons';
import { api } from '../api/client';
import { useAuthStore } from '../stores/auth.store';

interface ResumeSummary { id: string; title: string; templateId: string; updatedAt: string; }

const TEMPLATE_COLORS: Record<string, string> = {
  classic: '#4F46E5',
  modern: '#7C3AED',
  minimal: '#10B981',
};

const TEMPLATE_LABELS: Record<string, string> = {
  classic: '经典',
  modern: '现代',
  minimal: '简约',
};

const TEMPLATE_TAG_COLORS: Record<string, string> = {
  classic: 'geekblue',
  modern: 'purple',
  minimal: 'cyan',
};

export function Dashboard() {
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);
  const user = useAuthStore((s) => s.user);

  useEffect(() => { api.get('/resumes').then(({ data }) => { setResumes(data.data); setLoading(false); }); }, []);

  const handleCreate = async () => {
    const { data } = await api.post('/resumes', { templateId: 'classic' });
    navigate(`/editor/${data.data.id}`);
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: '确认删除该简历？',
      content: '删除后无法恢复，请谨慎操作。',
      okText: '确认删除',
      okType: 'danger',
      cancelText: '取消',
      onOk: async () => {
        await api.delete(`/resumes/${id}`);
        setResumes((prev) => prev.filter((r) => r.id !== id));
        message.success('简历已删除');
      },
    });
  };

  const getAccentColor = (templateId: string) => TEMPLATE_COLORS[templateId] ?? '#4F46E5';

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
          {/* Logo */}
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

          {/* 右侧操作区 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button
              icon={<AppstoreOutlined />}
              onClick={() => navigate('/templates')}
              style={{ borderRadius: 8, borderColor: '#E0E7FF', color: '#4F46E5' }}
            >
              模板市场
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleCreate}
              style={{
                borderRadius: 8,
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                border: 'none',
                fontWeight: 600,
              }}
            >
              新建简历
            </Button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              paddingLeft: 12,
              borderLeft: '1px solid #E0E7FF',
            }}>
              <Avatar
                size={32}
                icon={<UserOutlined />}
                style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
              />
              {user && (
                <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>
                  {(user as { name?: string }).name ?? (user as { email?: string }).email}
                </span>
              )}
              <Button
                type="text"
                icon={<LogoutOutlined />}
                onClick={() => { logout(); navigate('/login'); }}
                style={{ color: '#9CA3AF', padding: '4px 8px' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px' }}>
        {/* 页面标题 */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1E1B4B', margin: 0 }}>我的简历</h1>
          <p style={{ fontSize: 14, color: '#9CA3AF', margin: '6px 0 0' }}>
            共 {resumes.length} 份简历
          </p>
        </div>

        {/* 简历列表 */}
        <List
          loading={loading}
          grid={{ gutter: 20, column: 3 }}
          locale={{
            emptyText: (
              <Empty
                image={<span style={{ fontSize: 64 }}>📝</span>}
                imageStyle={{ height: 80 }}
                description={
                  <div>
                    <p style={{ fontSize: 15, color: '#6B7280', margin: '8px 0 4px', fontWeight: 500 }}>还没有简历</p>
                    <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>创建第一份简历，开始您的求职之旅</p>
                  </div>
                }
              >
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={handleCreate}
                  style={{
                    borderRadius: 8,
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    border: 'none',
                    fontWeight: 600,
                  }}
                >
                  立即新建
                </Button>
              </Empty>
            ),
          }}
          dataSource={resumes}
          renderItem={(item) => {
            const accentColor = getAccentColor(item.templateId);
            const tagColor = TEMPLATE_TAG_COLORS[item.templateId] ?? 'geekblue';
            const tagLabel = TEMPLATE_LABELS[item.templateId] ?? item.templateId;

            return (
              <List.Item style={{ marginBottom: 4 }}>
                <div
                  className="resume-card"
                  onClick={() => navigate(`/editor/${item.id}`)}
                  style={{
                    background: '#fff',
                    borderRadius: 12,
                    boxShadow: '0 4px 24px rgba(79,70,229,0.08)',
                    overflow: 'hidden',
                    display: 'flex',
                    position: 'relative',
                  }}
                >
                  {/* 彩色竖条 */}
                  <div style={{
                    width: 4,
                    background: accentColor,
                    flexShrink: 0,
                    borderRadius: '12px 0 0 12px',
                  }} />

                  {/* 卡片内容 */}
                  <div style={{ flex: 1, padding: '16px 16px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <FileTextOutlined style={{ color: accentColor, fontSize: 16 }} />
                        <span style={{ fontSize: 15, fontWeight: 600, color: '#1E1B4B' }}>{item.title}</span>
                      </div>
                      <Tag color={tagColor} style={{ borderRadius: 6, fontSize: 11, margin: 0 }}>
                        {tagLabel}
                      </Tag>
                    </div>

                    <p style={{ fontSize: 12, color: '#9CA3AF', margin: '0 0 14px' }}>
                      更新于 {new Date(item.updatedAt).toLocaleDateString('zh-CN')}
                    </p>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <Button
                        size="small"
                        type="primary"
                        onClick={(e) => { e.stopPropagation(); navigate(`/editor/${item.id}`); }}
                        style={{
                          borderRadius: 6,
                          background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                          border: 'none',
                          fontSize: 12,
                          flex: 1,
                        }}
                      >
                        编辑
                      </Button>
                      <Button
                        size="small"
                        danger
                        onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                        style={{ borderRadius: 6, fontSize: 12 }}
                      >
                        删除
                      </Button>
                    </div>
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
