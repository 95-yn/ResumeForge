'use client';

import { Tooltip } from 'antd';
import { ArrowLeftOutlined, PrinterOutlined, UndoOutlined, RedoOutlined, ReloadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Modal } from 'antd';
import Handlebars from 'handlebars';
import { useEditorStore } from '@/lib/editor-store';

export function TopBar() {
  const router = useRouter();
  const { save, saveStatus, undo, redo, historyIndex, history, templateHtml, templateCss, resume, resetToDefault } = useEditorStore();

  const handlePrint = () => {
    if (!templateHtml || !templateCss || !resume) return;
    const compiled = Handlebars.compile(templateHtml);
    const body = compiled(resume);
    const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8">
<style>${templateCss}
@media print { @page { margin: 0; } body { margin: 0; } }
</style></head><body style="margin:0">${body}</body></html>`;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(html);
    win.document.close();
    win.onload = () => { win.print(); };
  };

  const statusText = saveStatus === 'saved' ? '已保存' : saveStatus === 'saving' ? '保存中' : '未保存';
  const dotColor = saveStatus === 'saved' ? '#22C55E' : saveStatus === 'saving' ? '#F59E0B' : '#A8A29E';

  const iconBtnStyle = (disabled?: boolean): React.CSSProperties => ({
    width: 30, height: 30, borderRadius: 6,
    border: 'none', padding: 0,
    background: 'transparent',
    color: disabled ? '#D6D3D1' : '#78716C',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, transition: 'all 0.1s',
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      height: 52,
      background: '#FFFFFF',
      borderBottom: '1px solid #E7E5E4',
      flexShrink: 0,
    }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          onClick={() => router.push('/templates')}
          style={{
            width: 30, height: 30, borderRadius: 6, border: '1px solid #E7E5E4',
            background: 'transparent', cursor: 'pointer', color: '#78716C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, transition: 'all 0.12s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          title="返回"
        >
          <ArrowLeftOutlined />
        </button>

        <span style={{
          fontSize: 12, fontWeight: 600, color: '#A8A29E',
          letterSpacing: '-0.2px', fontFamily: 'inherit',
        }}>
          ResumeForge
        </span>

        <div style={{ width: 1, height: 16, background: '#E7E5E4' }} />

        {/* Save status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: dotColor,
            transition: 'background 0.25s',
            boxShadow: saveStatus === 'saved' ? '0 0 0 2px rgba(34,197,94,0.15)' : 'none',
          }} />
          <span style={{ fontSize: 11, color: '#A8A29E', fontFamily: 'inherit' }}>{statusText}</span>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Tooltip title="撤销 (⌘Z)">
          <button
            style={iconBtnStyle(historyIndex <= 0)}
            disabled={historyIndex <= 0}
            onClick={undo}
            onMouseEnter={e => { if (historyIndex > 0) e.currentTarget.style.background = '#F5F5F4'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <UndoOutlined />
          </button>
        </Tooltip>
        <Tooltip title="重做 (⌘⇧Z)">
          <button
            style={iconBtnStyle(historyIndex >= history.length - 1)}
            disabled={historyIndex >= history.length - 1}
            onClick={redo}
            onMouseEnter={e => { if (historyIndex < history.length - 1) e.currentTarget.style.background = '#F5F5F4'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <RedoOutlined />
          </button>
        </Tooltip>
        <Tooltip title="还原默认内容">
          <button
            style={iconBtnStyle(false)}
            onClick={() => Modal.confirm({
              title: '还原为默认内容？', content: '当前编辑的内容将被替换',
              okText: '还原', cancelText: '取消', okButtonProps: { danger: true },
              onOk: resetToDefault,
            })}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <ReloadOutlined />
          </button>
        </Tooltip>

        <div style={{ width: 1, height: 18, background: '#E7E5E4', margin: '0 6px' }} />

        <button
          onClick={save}
          disabled={saveStatus === 'saved'}
          style={{
            padding: '0 14px', height: 32, borderRadius: 6,
            border: '1px solid #E7E5E4',
            background: saveStatus === 'saved' ? '#F5F5F4' : '#FFFFFF',
            color: saveStatus === 'saved' ? '#A8A29E' : '#78716C',
            fontSize: 12, fontWeight: 500,
            cursor: saveStatus === 'saved' ? 'default' : 'pointer',
            transition: 'all 0.12s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={e => { if (saveStatus !== 'saved') { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
          onMouseLeave={e => { e.currentTarget.style.background = saveStatus === 'saved' ? '#F5F5F4' : '#FFFFFF'; e.currentTarget.style.color = saveStatus === 'saved' ? '#A8A29E' : '#78716C'; }}
        >
          保存
        </button>

        <button
          onClick={handlePrint}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '0 16px', height: 32, borderRadius: 6,
            border: 'none',
            background: '#1C1917', color: '#FFFFFF',
            fontSize: 12, fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.12s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#292524'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1C1917'; }}
        >
          <PrinterOutlined style={{ fontSize: 12 }} />
          打印 / 导出
        </button>
      </div>
    </div>
  );
}
