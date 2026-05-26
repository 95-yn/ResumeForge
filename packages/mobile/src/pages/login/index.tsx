import { useState } from 'react';
import { View, Text, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useAuthStore } from '../../stores/auth.store';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const { login, register } = useAuthStore();

  const handleSubmit = async () => {
    try {
      if (mode === 'login') await login(email, password);
      else await register(email, password, name);
      Taro.redirectTo({ url: '/pages/index/index' });
    } catch { Taro.showToast({ title: '操作失败', icon: 'error' }); }
  };

  return (
    <View style={{ padding: '48px 32px' }}>
      <Text style={{ fontSize: '44px', fontWeight: '700', display: 'block', textAlign: 'center', marginBottom: '48px' }}>ResumeForge</Text>
      <View style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <Text style={{ marginRight: '32px', color: mode === 'login' ? '#1890ff' : '#999' }} onClick={() => setMode('login')}>登录</Text>
        <Text style={{ color: mode === 'register' ? '#1890ff' : '#999' }} onClick={() => setMode('register')}>注册</Text>
      </View>
      {mode === 'register' && <Input placeholder="姓名" value={name} onInput={(e) => setName(e.detail.value)} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }} />}
      <Input placeholder="邮箱" value={email} onInput={(e) => setEmail(e.detail.value)} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }} />
      <Input placeholder="密码" password value={password} onInput={(e) => setPassword(e.detail.value)} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '24px' }} />
      <View onClick={handleSubmit} style={{ background: '#1890ff', color: '#fff', textAlign: 'center', padding: '20px', borderRadius: '8px', fontWeight: '600' }}>{mode === 'login' ? '登录' : '注册'}</View>
    </View>
  );
}
