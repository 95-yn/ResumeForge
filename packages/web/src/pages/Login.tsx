import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Tabs, message } from 'antd';
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

  const inputStyle: React.CSSProperties = {
    borderRadius: 8,
    height: 42,
    fontSize: 14,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 500,
    color: '#4B5563',
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4F46E5 0%, #6D28D9 50%, #7C3AED 100%)',
      padding: 24,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 背景装饰圆 */}
      <div style={{
        position: 'absolute', top: -120, right: -120,
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 300, height: 300,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        pointerEvents: 'none',
      }} />

      {/* 毛玻璃卡片 */}
      <div style={{
        width: 420,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 16,
        padding: '40px 40px 32px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.3)',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Logo 区域 */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 48, marginBottom: 8, lineHeight: 1 }}>📄</div>
          <h1 style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ResumeForge
          </h1>
          <p style={{
            margin: '6px 0 0',
            fontSize: 13,
            color: '#9CA3AF',
            letterSpacing: 0.3,
          }}>
            AI 驱动的智能简历平台
          </p>
        </div>

        {/* 选项卡 */}
        <Tabs
          activeKey={mode}
          onChange={(k) => setMode(k as 'login' | 'register')}
          centered
          items={[
            { key: 'login', label: '登录账号' },
            { key: 'register', label: '注册账号' },
          ]}
          style={{ marginBottom: 8 }}
        />

        {/* 表单 */}
        <Form layout="vertical" onFinish={onFinish} size="large">
          {mode === 'register' && (
            <Form.Item name="name" label={<span style={labelStyle}>姓名</span>}>
              <Input placeholder="请输入您的姓名" style={inputStyle} />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            label={<span style={labelStyle}>邮箱</span>}
            rules={[{ required: true, type: 'email', message: '请输入正确的邮箱' }]}
          >
            <Input placeholder="请输入邮箱地址" style={inputStyle} />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span style={labelStyle}>密码</span>}
            rules={[{ required: true, min: 6, message: '密码至少6位' }]}
          >
            <Input.Password placeholder="请输入密码（至少6位）" style={inputStyle} />
          </Form.Item>
          <Form.Item style={{ marginTop: 20, marginBottom: 0 }}>
            <Button
              htmlType="submit"
              block
              loading={loading}
              style={{
                height: 44,
                fontSize: 15,
                fontWeight: 600,
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                border: 'none',
                borderRadius: 8,
                color: '#fff',
                letterSpacing: 1,
              }}
            >
              {mode === 'login' ? '立即登录' : '注册账号'}
            </Button>
          </Form.Item>
        </Form>

        {/* 底部版权 */}
        <p style={{ textAlign: 'center', fontSize: 12, color: '#D1D5DB', marginTop: 24, marginBottom: 0 }}>
          © 2025 ResumeForge · 打造专业简历，赢得理想 offer
        </p>
      </div>
    </div>
  );
}
