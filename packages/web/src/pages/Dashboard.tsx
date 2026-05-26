import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, List, Empty, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { api } from '../api/client';
import { useAuthStore } from '../stores/auth.store';

interface ResumeSummary { id: string; title: string; templateId: string; updatedAt: string; }

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

  const handleDelete = (id: string) => {
    Modal.confirm({ title: '确认删除？', onOk: async () => { await api.delete(`/resumes/${id}`); setResumes((prev) => prev.filter((r) => r.id !== id)); message.success('已删除'); } });
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <h1>我的简历</h1>
        <div>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate} style={{ marginRight: 8 }}>新建简历</Button>
          <Button onClick={() => navigate('/templates')}>模板市场</Button>
          <Button type="text" onClick={() => { logout(); navigate('/login'); }} style={{ marginLeft: 8 }}>退出</Button>
        </div>
      </div>
      <List loading={loading} grid={{ gutter: 16, column: 3 }} locale={{ emptyText: <Empty description="还没有简历，点击上方新建" /> }} dataSource={resumes}
        renderItem={(item) => (
          <List.Item><Card hoverable onClick={() => navigate(`/editor/${item.id}`)} actions={[<span key="delete" onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}>删除</span>]}>
            <Card.Meta title={item.title} description={`更新于 ${new Date(item.updatedAt).toLocaleDateString()}`} /></Card></List.Item>
        )} />
    </div>
  );
}
