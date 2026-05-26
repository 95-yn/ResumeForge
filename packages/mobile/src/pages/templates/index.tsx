import { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { request } from '../../api/client';
import type { ApiResponse } from '@resume/shared';

interface TemplateSummary { id: string; name: string; slug: string; category: string; }

export default function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
  useEffect(() => { request<ApiResponse<TemplateSummary[]>>('/templates').then((res) => setTemplates(res.data)); }, []);

  const handleSelect = async (slug: string) => {
    const res = await request<ApiResponse<{ id: string }>>('/resumes', { method: 'POST', data: { templateId: slug } });
    Taro.navigateTo({ url: `/pages/editor/index?id=${res.data.id}` });
  };

  return (
    <View style={{ padding: '24px' }}>
      <Text style={{ fontSize: '36px', fontWeight: '700', display: 'block', marginBottom: '24px' }}>选择模板</Text>
      {templates.map((t) => (
        <View key={t.id} onClick={() => handleSelect(t.slug)} style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <Text style={{ fontSize: '30px', fontWeight: '500' }}>{t.name}</Text>
          <Text style={{ fontSize: '24px', color: '#999', marginLeft: '12px' }}>{t.category}</Text>
        </View>
      ))}
    </View>
  );
}
