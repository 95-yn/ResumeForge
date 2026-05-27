import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { useAuthStore } from '../stores/auth.store';

function BrandPanel() {
  return (
    <div style={{
      flex: 1,
      background: '#1C1917',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '52px 52px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 60%),
                          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 60%)`,
      }} />

      {/* Logo */}
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#FAFAF9', letterSpacing: '-0.4px', fontFamily: 'inherit' }}>
          ResumeForge
        </div>
      </div>

      {/* Center content */}
      <div style={{ position: 'relative' }}>
        {/* Mock resume preview card */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          padding: '24px 28px',
          marginBottom: 32,
        }}>
          {/* Header of mock resume */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ height: 8, background: 'rgba(255,255,255,0.7)', borderRadius: 3, width: '45%', marginBottom: 6 }} />
            <div style={{ height: 3, background: 'rgba(255,255,255,0.3)', borderRadius: 2, width: '60%', marginBottom: 4 }} />
            <div style={{ display: 'flex', gap: 8 }}>
              {[50, 40, 55].map((w, i) => (
                <div key={i} style={{ height: 3, width: w, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
              ))}
            </div>
          </div>
          {/* Body lines */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 12 }} />
          <div style={{ height: 4, background: 'rgba(255,255,255,0.25)', borderRadius: 2, width: '28%', marginBottom: 8 }} />
          {[90, 70, 85, 55, 80].map((w, i) => (
            <div key={i} style={{ height: 3, background: i % 2 === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)', borderRadius: 2, width: `${w}%`, marginBottom: 4 }} />
          ))}
          {/* Skills tags */}
          <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[36, 44, 30, 40].map((w, i) => (
              <div key={i} style={{ height: 12, width: w, background: 'rgba(255,255,255,0.12)', borderRadius: 4 }} />
            ))}
          </div>
        </div>

        <blockquote style={{ margin: 0 }}>
          <p style={{
            margin: '0 0 16px', fontSize: 18, fontWeight: 600, color: '#FAFAF9',
            lineHeight: 1.4, letterSpacing: '-0.3px', fontFamily: 'inherit',
          }}>
            "专业的简历，<br />从选对模板开始。"
          </p>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'inherit' }}>
            40+ 精选模板 · 即时编辑 · 一键导出
          </p>
        </blockquote>
      </div>

      {/* Footer dots */}
      <div style={{ display: 'flex', gap: 6, position: 'relative' }}>
        {[true, false, false].map((active, i) => (
          <div key={i} style={{ width: active ? 20 : 6, height: 6, borderRadius: 3, background: active ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)', transition: 'all 0.2s' }} />
        ))}
      </div>
    </div>
  );
}

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

  const inputStyle: React.CSSProperties = {
    borderRadius: 10,
    border: '1px solid #E7E5E4',
    fontSize: 14,
    height: 42,
    fontFamily: 'inherit',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF9', display: 'flex', alignItems: 'stretch' }}>

      {/* Left: brand panel */}
      <BrandPanel />

      {/* Right: form */}
      <div style={{
        width: 440,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 40px',
        background: '#FAFAF9',
      }}>
        <div style={{ width: '100%', maxWidth: 360 }}>

          {/* Title */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              margin: '0 0 6px', fontSize: 22, fontWeight: 700, color: '#1C1917',
              letterSpacing: '-0.5px', fontFamily: 'inherit',
            }}>
              {mode === 'login' ? '欢迎回来' : '创建账号'}
            </h2>
            <p style={{ margin: 0, fontSize: 13, color: '#78716C', fontFamily: 'inherit' }}>
              {mode === 'login' ? '登录以继续编辑你的简历' : '注册即可免费使用所有模板'}
            </p>
          </div>

          {/* Card */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E7E5E4',
            borderRadius: 14,
            padding: '28px 28px 24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
          }}>
            {/* Tab switcher */}
            <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: '1px solid #F5F5F4' }}>
              {(['login', 'register'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  style={{
                    flex: 1, padding: '10px 0', border: 'none', background: 'none', cursor: 'pointer',
                    fontSize: 13, fontWeight: mode === m ? 600 : 400,
                    color: mode === m ? '#1C1917' : '#A8A29E',
                    borderBottom: mode === m ? '2px solid #1C1917' : '2px solid transparent',
                    marginBottom: -1, transition: 'all 0.15s',
                    fontFamily: 'inherit',
                  }}
                >
                  {m === 'login' ? '登录' : '注册'}
                </button>
              ))}
            </div>

            <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
              {mode === 'register' && (
                <Form.Item
                  name="name"
                  label={<span style={{ fontSize: 12, fontWeight: 500, color: '#78716C', fontFamily: 'inherit' }}>姓名</span>}
                  style={{ marginBottom: 16 }}
                >
                  <Input
                    placeholder="你的名字"
                    size="large"
                    style={inputStyle}
                  />
                </Form.Item>
              )}
              <Form.Item
                name="email"
                label={<span style={{ fontSize: 12, fontWeight: 500, color: '#78716C', fontFamily: 'inherit' }}>邮箱</span>}
                rules={[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '邮箱格式不正确' }]}
                style={{ marginBottom: 16 }}
              >
                <Input
                  placeholder="you@example.com"
                  size="large"
                  style={inputStyle}
                />
              </Form.Item>
              <Form.Item
                name="password"
                label={<span style={{ fontSize: 12, fontWeight: 500, color: '#78716C', fontFamily: 'inherit' }}>密码</span>}
                rules={[{ required: true, message: '请输入密码' }, { min: 6, message: '至少 6 位' }]}
                style={{ marginBottom: 20 }}
              >
                <Input.Password
                  placeholder="至少 6 位"
                  size="large"
                  style={inputStyle}
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  loading={loading}
                  style={{
                    borderRadius: 10,
                    height: 42,
                    fontWeight: 600,
                    background: '#1C1917',
                    borderColor: '#1C1917',
                    fontSize: 14,
                    fontFamily: 'inherit',
                    transition: 'background 0.12s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#292524'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1C1917'; }}
                >
                  {mode === 'login' ? '登录' : '创建账号'}
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Footer link */}
          <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: '#A8A29E', fontFamily: 'inherit' }}>
            {mode === 'login' ? '没有账号？' : '已有账号？'}
            <span
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              style={{ color: '#1C1917', fontWeight: 600, cursor: 'pointer', marginLeft: 4 }}
            >
              {mode === 'login' ? '注册' : '去登录'}
            </span>
          </div>

          {/* Back to templates */}
          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <span
              onClick={() => navigate('/')}
              style={{ fontSize: 12, color: '#A8A29E', cursor: 'pointer', fontFamily: 'inherit' }}
              onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.color = '#78716C'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.color = '#A8A29E'; }}
            >
              ← 返回模板市场
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .ant-input, .ant-input-password {
          font-family: 'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif !important;
        }
        .ant-input:focus, .ant-input-focused,
        .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
          border-color: #1C1917 !important;
          box-shadow: 0 0 0 2px rgba(28,25,23,0.06) !important;
        }
        .ant-form-item-label > label {
          font-family: 'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif !important;
        }
      `}</style>
    </div>
  );
}
