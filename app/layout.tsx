import './globals.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

export const metadata = { title: 'ResumeForge', description: '简历编辑平台' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
