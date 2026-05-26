import { Button, Space, Typography, Tag } from 'antd';
import { ArrowLeftOutlined, DownloadOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEditorStore } from '../../stores/editor.store';
import { api } from '../../api/client';

export function TopBar() {
  const navigate = useNavigate();
  const { save, saveStatus, undo, redo, historyIndex, history, resumeId } = useEditorStore();

  const handleExportPdf = async () => {
    if (!resumeId) return;
    const response = await api.post(`/resumes/${resumeId}/export/pdf`, {}, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement('a');
    a.href = url; a.download = 'resume.pdf'; a.click();
    window.URL.revokeObjectURL(url);
  };

  const statusText = saveStatus === 'saved' ? '已保存' : saveStatus === 'saving' ? '保存中...' : '未保存';
  const statusColor = saveStatus === 'saved' ? 'green' : saveStatus === 'saving' ? 'blue' : 'orange';

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid #e8e8e8', background: '#fff' }}>
      <Space>
        <Button icon={<ArrowLeftOutlined />} type="text" onClick={() => navigate('/dashboard')} />
        <Typography.Title level={5} style={{ margin: 0 }}>简历编辑器</Typography.Title>
        <Tag color={statusColor}>{statusText}</Tag>
      </Space>
      <Space>
        <Button icon={<UndoOutlined />} type="text" disabled={historyIndex <= 0} onClick={undo} />
        <Button icon={<RedoOutlined />} type="text" disabled={historyIndex >= history.length - 1} onClick={redo} />
        <Button type="primary" icon={<DownloadOutlined />} onClick={handleExportPdf}>导出 PDF</Button>
        <Button onClick={save} disabled={saveStatus === 'saved'}>保存</Button>
      </Space>
    </div>
  );
}
