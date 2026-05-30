import './fonts.css';
import './globals.css';
import type { Metadata } from 'next';
import { ContactFloat } from '@/components/ContactFloat';

export const metadata: Metadata = {
  title: 'ResumeForge — 72套专业简历模板，免费在线编辑',
  description:
    '一站式简历编辑平台。从72套专业模板中选择，直接在线编辑，浏览器打印导出。零注册，打开即用。',
  openGraph: {
    title: 'ResumeForge — 72套专业简历模板',
    description: '一站式简历编辑平台。零注册，打开即用。',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <ContactFloat />
      </body>
    </html>
  );
}
