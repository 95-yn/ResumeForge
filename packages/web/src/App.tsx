import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

export function App() {
  return <ConfigProvider locale={zhCN}><Outlet /></ConfigProvider>;
}
