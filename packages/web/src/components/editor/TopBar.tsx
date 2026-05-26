import { Button, Space, Typography, Tooltip } from 'antd';
import { ArrowLeftOutlined, DownloadOutlined, UndoOutlined, RedoOutlined, SaveOutlined } from '@ant-design/icons';
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
  const statusDotColor = saveStatus === 'saved' ? '#10B981' : saveStatus === 'saving' ? '#4F46E5' : '#F59E0B';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      height: 54,
      background: '#fff',
      boxShadow: '0 2px 12px rgba(79,70,229,0.08)',
      position: 'relative',
      zIndex: 50,
    }}>
      {/* 左侧：返回 + Logo + 保存状态 */}
      <Space size={12} align="center">
        <Tooltip title="返回我的简历">
          <Button
            icon={<ArrowLeftOutlined />}
            type="text"
            onClick={() => navigate('/dashboard')}
            style={{ color: '#6B7280', borderRadius: 8 }}
          />
        </Tooltip>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 18 }}>📄</span>
          <Typography.Title level={5} style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            简历编辑器
          </Typography.Title>
        </div>

        {/* 保存状态小圆点 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: statusDotColor,
            boxShadow: `0 0 6px ${statusDotColor}80`,
            transition: 'background 0.3s, box-shadow 0.3s',
          }} />
          <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 400 }}>{statusText}</span>
        </div>
      </Space>

      {/* 右侧：撤销/重做 + 保存 + 导出 */}
      <Space size={6}>
        <Tooltip title="撤销">
          <Button
            icon={<UndoOutlined />}
            type="text"
            disabled={historyIndex <= 0}
            onClick={undo}
            style={{ color: historyIndex <= 0 ? '#D1D5DB' : '#6B7280', borderRadius: 8 }}
          />
        </Tooltip>
        <Tooltip title="重做">
          <Button
            icon={<RedoOutlined />}
            type="text"
            disabled={historyIndex >= history.length - 1}
            onClick={redo}
            style={{ color: historyIndex >= history.length - 1 ? '#D1D5DB' : '#6B7280', borderRadius: 8 }}
          />
        </Tooltip>

        <div style={{ width: 1, height: 20, background: '#E5E7EB', margin: '0 4px' }} />

        <Button
          icon={<SaveOutlined />}
          onClick={save}
          disabled={saveStatus === 'saved'}
          style={{
            borderRadius: 8,
            borderColor: saveStatus === 'saved' ? '#E5E7EB' : '#C7D2FE',
            color: saveStatus === 'saved' ? '#9CA3AF' : '#4F46E5',
            fontWeight: 500,
          }}
        >
          保存
        </Button>

        <Button
          icon={<DownloadOutlined />}
          onClick={handleExportPdf}
          style={{
            borderRadius: 8,
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            border: 'none',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          导出 PDF
        </Button>
      </Space>
    </div>
  );
}
