import { Button, Tooltip } from 'antd';
import { ArrowLeftOutlined, PrinterOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Handlebars from 'handlebars';
import { useEditorStore } from '../../stores/editor.store';

export function TopBar() {
  const navigate = useNavigate();
  const { save, saveStatus, undo, redo, historyIndex, history, templateHtml, templateCss, resume } = useEditorStore();

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
  const dotColor = saveStatus === 'saved' ? '#22C55E' : saveStatus === 'saving' ? '#F59E0B' : '#9CA3AF';

  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 16px', height: 48, background: '#fff',
      borderBottom: '1px solid #E5E7EB', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button type="text" icon={<ArrowLeftOutlined />} onClick={() => navigate('/')} style={{ color: '#6B7280' }} />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>简历编辑器</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginLeft: 4 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor, transition: 'background 0.2s' }} />
          <span style={{ fontSize: 12, color: '#9CA3AF' }}>{statusText}</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Tooltip title="撤销">
          <Button type="text" icon={<UndoOutlined />} disabled={historyIndex <= 0} onClick={undo} style={{ color: '#6B7280' }} />
        </Tooltip>
        <Tooltip title="重做">
          <Button type="text" icon={<RedoOutlined />} disabled={historyIndex >= history.length - 1} onClick={redo} style={{ color: '#6B7280' }} />
        </Tooltip>
        <div style={{ width: 1, height: 20, background: '#E5E7EB', margin: '0 6px' }} />
        <Button icon={<PrinterOutlined />} onClick={handlePrint}
          style={{ borderRadius: 7, fontWeight: 500, fontSize: 13, background: '#111827', color: '#fff', borderColor: '#111827', height: 34 }}>
          打印 / 导出
        </Button>
        <Button onClick={save} disabled={saveStatus === 'saved'}
          style={{ borderRadius: 7, fontSize: 13, height: 34 }}>
          保存
        </Button>
      </div>
    </div>
  );
}
