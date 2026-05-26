import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Tabs, message } from 'antd';
import { useAuthStore } from '../stores/auth.store';

export function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const { login, register, loading } = useAuthStore();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string; name?: string }) => {
    try {
      if (mode === 'login') await login(values.email, values.password);
      else await register(values.email, values.password, values.name ?? '');
      navigate('/dashboard');
    } catch { message.error(mode === 'login' ? '登录失败' : '注册失败'); }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
      <Card style={{ width: 400 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>ResumeForge</h1>
        <Tabs activeKey={mode} onChange={(k) => setMode(k as 'login' | 'register')} centered items={[{ key: 'login', label: '登录' }, { key: 'register', label: '注册' }]} />
        <Form layout="vertical" onFinish={onFinish}>
          {mode === 'register' && <Form.Item name="name" label="姓名"><Input placeholder="请输入姓名" /></Form.Item>}
          <Form.Item name="email" label="邮箱" rules={[{ required: true, type: 'email' }]}><Input placeholder="请输入邮箱" /></Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true, min: 6 }]}><Input.Password placeholder="请输入密码" /></Form.Item>
          <Form.Item><Button type="primary" htmlType="submit" block loading={loading}>{mode === 'login' ? '登录' : '注册'}</Button></Form.Item>
        </Form>
      </Card>
    </div>
  );
}
