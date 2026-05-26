import { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { request } from '../../api/client';
import type { ApiResponse } from '@resume/shared';
import './index.scss';

interface ResumeSummary { id: string; title: string; updatedAt: string; }

export default function Index() {
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);

  useEffect(() => {
    const token = Taro.getStorageSync('accessToken');
    if (!token) { Taro.redirectTo({ url: '/pages/login/index' }); return; }
    request<ApiResponse<ResumeSummary[]>>('/resumes').then((res) => setResumes(res.data));
  }, []);

  const handleCreate = async () => {
    const res = await request<ApiResponse<{ id: string }>>('/resumes', { method: 'POST', data: { templateId: 'classic' } });
    Taro.navigateTo({ url: `/pages/editor/index?id=${res.data.id}` });
  };

  return (
    <View className="index-page">
      <View className="header"><Text className="title">我的简历</Text><Text className="create-btn" onClick={handleCreate}>+ 新建</Text></View>
      {resumes.length === 0 && <View className="empty">还没有简历，点击新建开始</View>}
      {resumes.map((r) => (
        <View key={r.id} className="resume-card" onClick={() => Taro.navigateTo({ url: `/pages/editor/index?id=${r.id}` })}>
          <Text className="resume-title">{r.title}</Text>
          <Text className="resume-date">{new Date(r.updatedAt).toLocaleDateString()}</Text>
        </View>
      ))}
    </View>
  );
}
