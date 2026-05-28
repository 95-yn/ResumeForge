import { useState, useCallback, useRef, useEffect } from 'react';
import { Tooltip, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  ArrowLeftOutlined,
  UndoOutlined,
  RedoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  SaveOutlined,
  PrinterOutlined,
  DownOutlined,
  BorderOutlined,
  AppstoreOutlined,
  AimOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEditorStore } from '../../stores/editor.store';
import { useCanvasStore } from '../../stores/canvas.store';
import { triggerExport } from '../../utils/export';
import type { ExportFormat } from '@resume/shared';

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const FONT_FAMILY = "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";

const barStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px',
  height: 52,
  background: '#FFFFFF',
  borderBottom: '1px solid #E7E5E4',
  flexShrink: 0,
  fontFamily: FONT_FAMILY,
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

const iconBtn = (disabled?: boolean): React.CSSProperties => ({
  width: 30,
  height: 30,
  borderRadius: 6,
  border: 'none',
  padding: 0,
  background: 'transparent',
  color: disabled ? '#D6D3D1' : '#78716C',
  cursor: disabled ? 'not-allowed' : 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  transition: 'all 0.1s',
  fontFamily: FONT_FAMILY,
});

const iconBtnActive: React.CSSProperties = {
  ...iconBtn(false),
  background: '#F5F5F4',
  color: '#1C1917',
};

const dividerStyle: React.CSSProperties = {
  width: 1,
  height: 18,
  background: '#E7E5E4',
  margin: '0 4px',
  flexShrink: 0,
};

const pillBtnStyle = (active: boolean): React.CSSProperties => ({
  padding: '0 10px',
  height: 26,
  borderRadius: 13,
  border: 'none',
  background: active ? '#1C1917' : '#F5F5F4',
  color: active ? '#fff' : '#78716C',
  fontSize: 11,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.15s',
  fontFamily: FONT_FAMILY,
  whiteSpace: 'nowrap' as const,
});

// ---------------------------------------------------------------------------
// Zoom presets
// ---------------------------------------------------------------------------
const ZOOM_PRESETS = [
  { label: '50%', value: 0.5 },
  { label: '75%', value: 0.75 },
  { label: '100%', value: 1 },
  { label: '125%', value: 1.25 },
  { label: '150%', value: 1.5 },
  { label: '200%', value: 2 },
  { label: '适应页面', value: -1 }, // special sentinel
];

// ---------------------------------------------------------------------------
// Export menu items
// ---------------------------------------------------------------------------
const EXPORT_ITEMS: { key: ExportFormat; label: string }[] = [
  { key: 'pdf', label: 'PDF' },
  { key: 'html', label: 'HTML' },
  { key: 'png', label: 'PNG' },
  { key: 'docx', label: 'DOCX' },
  { key: 'markdown', label: 'Markdown' },
  { key: 'json', label: 'JSON' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function TopBarV2() {
  const navigate = useNavigate();

  // Editor store (save, undo/redo for form data)
  const { save, saveStatus } = useEditorStore();

  // Canvas store
  const {
    zoom,
    setZoom,
    canvas,
    updateCanvas,
    variables,
    undo: canvasUndo,
    redo: canvasRedo,
    historyIndex,
    history,
    showRulers,
    toggleRulers,
    getSortedBlocks,
  } = useCanvasStore();

  // Local state
  const [editorMode, setEditorMode] = useState<'canvas' | 'classic'>('canvas');
  const [showZoomDropdown, setShowZoomDropdown] = useState(false);
  const zoomRef = useRef<HTMLDivElement>(null);

  // Close zoom dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (zoomRef.current && !zoomRef.current.contains(e.target as Node)) {
        setShowZoomDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Derived
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  const saveText = saveStatus === 'saved' ? '已保存' : saveStatus === 'saving' ? '保存中...' : '未保存';
  const dotColor = saveStatus === 'saved' ? '#22C55E' : saveStatus === 'saving' ? '#F59E0B' : '#A8A29E';
  const zoomPct = Math.round(zoom * 100);

  // Handlers
  const handleZoomIn = useCallback(() => setZoom(Math.min(4, zoom + 0.1)), [zoom, setZoom]);
  const handleZoomOut = useCallback(() => setZoom(Math.max(0.1, zoom - 0.1)), [zoom, setZoom]);

  const handleZoomPreset = useCallback((value: number) => {
    if (value === -1) {
      // Fit page: approximate based on typical viewport
      const viewportWidth = window.innerWidth - 500; // rough: minus both panels
      const fitZoom = Math.min(viewportWidth / canvas.width, 1.5);
      setZoom(Math.round(fitZoom * 100) / 100);
    } else {
      setZoom(value);
    }
    setShowZoomDropdown(false);
  }, [canvas.width, setZoom]);

  const handleExport = useCallback((format: ExportFormat) => {
    const blocks = getSortedBlocks();
    triggerExport(format, blocks, canvas, variables);
  }, [getSortedBlocks, canvas, variables]);

  const handlePrint = useCallback(() => {
    handleExport('pdf');
  }, [handleExport]);

  const handleSave = useCallback(() => {
    save();
  }, [save]);

  // Toggle grid
  const gridOn = canvas.showGrid;
  const snapOn = canvas.snapToGrid;

  const toggleGrid = useCallback(() => {
    updateCanvas({ showGrid: !gridOn });
  }, [gridOn, updateCanvas]);

  const toggleSnap = useCallback(() => {
    updateCanvas({ snapToGrid: !snapOn });
  }, [snapOn, updateCanvas]);

  // Export dropdown menu
  const exportMenu: MenuProps = {
    items: EXPORT_ITEMS.map(item => ({
      key: item.key,
      label: item.label,
    })),
    onClick: ({ key }) => handleExport(key as ExportFormat),
  };

  // Hover helpers
  const onHoverIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.currentTarget as HTMLButtonElement).disabled) {
      e.currentTarget.style.background = '#F5F5F4';
      e.currentTarget.style.color = '#1C1917';
    }
  };
  const onHoverOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.color = (e.currentTarget as HTMLButtonElement).disabled ? '#D6D3D1' : '#78716C';
  };

  return (
    <div style={barStyle}>
      {/* ====== LEFT SECTION ====== */}
      <div style={sectionStyle}>
        {/* Back */}
        <Tooltip title="返回首页">
          <button
            onClick={() => navigate('/')}
            style={{
              width: 30, height: 30, borderRadius: 6,
              border: '1px solid #E7E5E4', background: 'transparent',
              cursor: 'pointer', color: '#78716C',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, transition: 'all 0.12s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
          >
            <ArrowLeftOutlined />
          </button>
        </Tooltip>

        {/* Logo */}
        <span style={{ fontSize: 12, fontWeight: 600, color: '#A8A29E', letterSpacing: '-0.2px', userSelect: 'none' }}>
          ResumeForge
        </span>

        <div style={dividerStyle} />

        {/* Save status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: dotColor,
            transition: 'background 0.25s',
            boxShadow: saveStatus === 'saved' ? '0 0 0 2px rgba(34,197,94,0.15)' : 'none',
          }} />
          <span style={{ fontSize: 11, color: '#A8A29E', userSelect: 'none' }}>{saveText}</span>
        </div>

        <div style={dividerStyle} />

        {/* Mode toggle */}
        <div style={{ display: 'flex', gap: 4, background: '#F5F5F4', borderRadius: 14, padding: 2 }}>
          <button
            style={pillBtnStyle(editorMode === 'canvas')}
            onClick={() => setEditorMode('canvas')}
          >
            设计模式
          </button>
          <button
            style={pillBtnStyle(editorMode === 'classic')}
            onClick={() => setEditorMode('classic')}
          >
            经典模式
          </button>
        </div>
      </div>

      {/* ====== CENTER SECTION ====== */}
      <div style={sectionStyle}>
        {/* Undo */}
        <Tooltip title="撤销 (⌘Z)">
          <button
            style={iconBtn(! canUndo)}
            disabled={!canUndo}
            onClick={canvasUndo}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            <UndoOutlined />
          </button>
        </Tooltip>

        {/* Redo */}
        <Tooltip title="重做 (⌘⇧Z)">
          <button
            style={iconBtn(!canRedo)}
            disabled={!canRedo}
            onClick={canvasRedo}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            <RedoOutlined />
          </button>
        </Tooltip>

        <div style={dividerStyle} />

        {/* Zoom controls */}
        <Tooltip title="缩小">
          <button
            style={iconBtn(zoom <= 0.1)}
            disabled={zoom <= 0.1}
            onClick={handleZoomOut}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            <ZoomOutOutlined />
          </button>
        </Tooltip>

        {/* Zoom percentage (clickable for presets) */}
        <div ref={zoomRef} style={{ position: 'relative' }}>
          <button
            style={{
              minWidth: 48, height: 26, borderRadius: 4,
              border: '1px solid #E7E5E4', background: '#FAFAF9',
              color: '#44403C', fontSize: 11, fontWeight: 500,
              cursor: 'pointer', fontFamily: FONT_FAMILY,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2,
            }}
            onClick={() => setShowZoomDropdown(v => !v)}
          >
            {zoomPct}%
            <DownOutlined style={{ fontSize: 8, color: '#A8A29E' }} />
          </button>

          {showZoomDropdown && (
            <div style={{
              position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)',
              background: '#fff', border: '1px solid #E7E5E4',
              borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              padding: '4px 0', zIndex: 1000, minWidth: 100,
            }}>
              {ZOOM_PRESETS.map(preset => (
                <button
                  key={preset.label}
                  style={{
                    display: 'block', width: '100%', padding: '6px 14px',
                    border: 'none', background: 'transparent',
                    color: '#44403C', fontSize: 12, cursor: 'pointer',
                    textAlign: 'left', fontFamily: FONT_FAMILY,
                    transition: 'background 0.1s',
                  }}
                  onClick={() => handleZoomPreset(preset.value)}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <Tooltip title="放大">
          <button
            style={iconBtn(zoom >= 4)}
            disabled={zoom >= 4}
            onClick={handleZoomIn}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            <ZoomInOutlined />
          </button>
        </Tooltip>
      </div>

      {/* ====== RIGHT SECTION ====== */}
      <div style={sectionStyle}>
        {/* Toggle rulers */}
        <Tooltip title={showRulers ? '隐藏标尺' : '显示标尺'}>
          <button
            style={showRulers ? iconBtnActive : iconBtn(false)}
            onClick={toggleRulers}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            <BorderOutlined />
          </button>
        </Tooltip>

        {/* Toggle grid */}
        <Tooltip title={gridOn ? '隐藏网格' : '显示网格'}>
          <button
            style={gridOn ? iconBtnActive : iconBtn(false)}
            onClick={toggleGrid}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            <AppstoreOutlined />
          </button>
        </Tooltip>

        {/* Toggle snap */}
        <Tooltip title={snapOn ? '关闭吸附' : '开启吸附'}>
          <button
            style={snapOn ? iconBtnActive : iconBtn(false)}
            onClick={toggleSnap}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
          >
            <AimOutlined />
          </button>
        </Tooltip>

        <div style={dividerStyle} />

        {/* Save */}
        <Tooltip title="保存 (⌘S)">
          <button
            onClick={handleSave}
            disabled={saveStatus === 'saved'}
            style={{
              padding: '0 12px', height: 30, borderRadius: 6,
              border: '1px solid #E7E5E4',
              background: saveStatus === 'saved' ? '#F5F5F4' : '#FFFFFF',
              color: saveStatus === 'saved' ? '#A8A29E' : '#78716C',
              fontSize: 12, fontWeight: 500,
              cursor: saveStatus === 'saved' ? 'default' : 'pointer',
              transition: 'all 0.12s',
              fontFamily: FONT_FAMILY,
              display: 'flex', alignItems: 'center', gap: 5,
            }}
            onMouseEnter={e => { if (saveStatus !== 'saved') { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { e.currentTarget.style.background = saveStatus === 'saved' ? '#F5F5F4' : '#FFFFFF'; e.currentTarget.style.color = saveStatus === 'saved' ? '#A8A29E' : '#78716C'; }}
          >
            <SaveOutlined style={{ fontSize: 12 }} />
            保存
          </button>
        </Tooltip>

        {/* Export dropdown */}
        <Dropdown menu={exportMenu} trigger={['click']} placement="bottomRight">
          <button
            style={{
              padding: '0 12px', height: 30, borderRadius: 6,
              border: '1px solid #E7E5E4', background: '#FFFFFF',
              color: '#78716C', fontSize: 12, fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.12s',
              fontFamily: FONT_FAMILY,
              display: 'flex', alignItems: 'center', gap: 5,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#78716C'; }}
          >
            导出
            <DownOutlined style={{ fontSize: 8 }} />
          </button>
        </Dropdown>

        {/* Print (primary) */}
        <button
          onClick={handlePrint}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '0 16px', height: 30, borderRadius: 6,
            border: 'none',
            background: '#1C1917', color: '#FFFFFF',
            fontSize: 12, fontWeight: 600,
            cursor: 'pointer', transition: 'background 0.12s',
            fontFamily: FONT_FAMILY,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#292524'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1C1917'; }}
        >
          <PrinterOutlined style={{ fontSize: 12 }} />
          打印
        </button>
      </div>
    </div>
  );
}
