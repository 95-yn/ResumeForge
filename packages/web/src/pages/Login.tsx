import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
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
    } catch { message.error(mode === 'login' ? '邮箱或密码错误' : '注册失败，请重试'); }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 380 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#111827', letterSpacing: '-0.5px' }}>
            ResumeForge
          </div>
          <div style={{ fontSize: 14, color: '#6B7280', marginTop: 6 }}>
            简历编辑与管理平台
          </div>
        </div>

        {/* 卡片 */}
        <div style={{
          background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
          padding: '32px 28px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}>
          {/* 切换 Tab */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: '1px solid #E5E7EB' }}>
            {(['login', 'register'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  flex: 1, padding: '10px 0', border: 'none', background: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: mode === m ? 600 : 400,
                  color: mode === m ? '#111827' : '#9CA3AF',
                  borderBottom: mode === m ? '2px solid #111827' : '2px solid transparent',
                  marginBottom: -1, transition: 'all 0.15s',
                }}
              >
                {m === 'login' ? '登录' : '注册'}
              </button>
            ))}
          </div>

          <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
            {mode === 'register' && (
              <Form.Item name="name" label={<span style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>姓名</span>}>
                <Input placeholder="你的名字" size="large" style={{ borderRadius: 8 }} />
              </Form.Item>
            )}
            <Form.Item
              name="email"
              label={<span style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>邮箱</span>}
              rules={[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '邮箱格式不正确' }]}
            >
              <Input placeholder="you@example.com" size="large" style={{ borderRadius: 8 }} />
            </Form.Item>
            <Form.Item
              name="password"
              label={<span style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>密码</span>}
              rules={[{ required: true, message: '请输入密码' }, { min: 6, message: '至少 6 位' }]}
            >
              <Input.Password placeholder="至少 6 位" size="large" style={{ borderRadius: 8 }} />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0, marginTop: 4 }}>
              <Button
                type="primary" htmlType="submit" block size="large" loading={loading}
                style={{ borderRadius: 8, height: 44, fontWeight: 500, background: '#111827', borderColor: '#111827' }}
              >
                {mode === 'login' ? '登录' : '创建账号'}
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: '#9CA3AF' }}>
          {mode === 'login' ? '没有账号？' : '已有账号？'}
          <span
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            style={{ color: '#111827', fontWeight: 500, cursor: 'pointer', marginLeft: 4 }}
          >
            {mode === 'login' ? '注册' : '去登录'}
          </span>
        </div>
      </div>
    </div>
  );
}
