import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List, Tag, Button, message } from 'antd';
import { api } from '../api/client';

interface TemplateSummary { id: string; name: string; slug: string; category: string; thumbnail: string; isPremium: boolean; }

export function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
  const navigate = useNavigate();

  useEffect(() => { api.get('/templates').then(({ data }) => setTemplates(data.data)); }, []);

  const handleUse = async (slug: string) => {
    const { data } = await api.post('/resumes', { templateId: slug });
    message.success('简历已创建');
    navigate(`/editor/${data.data.id}`);
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <h1>模板市场</h1><Button onClick={() => navigate('/dashboard')}>返回</Button>
      </div>
      <List grid={{ gutter: 16, column: 3 }} dataSource={templates}
        renderItem={(item) => (
          <List.Item><Card hoverable actions={[<Button key="use" type="link" onClick={() => handleUse(item.slug)}>使用此模板</Button>]}>
            <Card.Meta title={item.name} description={<Tag>{item.category}</Tag>} /></Card></List.Item>
        )} />
    </div>
  );
}
