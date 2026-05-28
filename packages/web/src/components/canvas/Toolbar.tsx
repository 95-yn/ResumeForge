import React, { useCallback } from 'react';
import { useCanvasStore } from '../../stores/canvas.store';
import type { BlockType } from '@resume/shared';

const BLOCK_INSERTERS: Array<{ type: BlockType; label: string; icon: string }> = [
  { type: 'text', label: '文本', icon: 'T' },
  { type: 'heading', label: '标题', icon: 'H' },
  { type: 'image', label: '图片', icon: '🖼' },
  { type: 'shape', label: '形状', icon: '⬜' },
  { type: 'divider', label: '分割线', icon: '—' },
  { type: 'icon', label: '图标', icon: '★' },
  { type: 'table', label: '表格', icon: '⊞' },
  { type: 'timeline', label: '时间线', icon: '⋮' },
  { type: 'skill-bar', label: '技能', icon: '▬' },
  { type: 'rating', label: '评分', icon: '☆' },
  { type: 'qrcode', label: '二维码', icon: '⊡' },
];

const btnBase: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #E7E5E4',
  borderRadius: 4,
  backgroundColor: '#ffffff',
  cursor: 'pointer',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  transition: 'background-color 0.15s, border-color 0.15s',
  userSelect: 'none',
};

const insertBtnStyle: React.CSSProperties = {
  ...btnBase,
  padding: '4px 8px',
  fontSize: 12,
  color: '#1C1917',
  gap: 3,
  height: 30,
};

const toolBtnStyle: React.CSSProperties = {
  ...btnBase,
  padding: '4px 8px',
  fontSize: 12,
  color: '#78716C',
  height: 30,
  minWidth: 30,
};

const activeBtnStyle: React.CSSProperties = {
  ...toolBtnStyle,
  backgroundColor: '#F0F0EE',
  borderColor: '#3B82F6',
  color: '#3B82F6',
};

const Toolbar: React.FC = () => {
  const addBlock = useCanvasStore(s => s.addBlock);
  const zoom = useCanvasStore(s => s.zoom);
  const setZoom = useCanvasStore(s => s.setZoom);
  const canvas = useCanvasStore(s => s.canvas);
  const updateCanvas = useCanvasStore(s => s.updateCanvas);
  const showRulers = useCanvasStore(s => s.showRulers);
  const toggleRulers = useCanvasStore(s => s.toggleRulers);
  const showLayers = useCanvasStore(s => s.showLayers);
  const toggleLayers = useCanvasStore(s => s.toggleLayers);

  const handleAddBlock = useCallback((type: BlockType) => {
    addBlock(type);
  }, [addBlock]);

  const handleZoomIn = useCallback(() => {
    setZoom(Math.min(4, zoom + 0.1));
  }, [zoom, setZoom]);

  const handleZoomOut = useCallback(() => {
    setZoom(Math.max(0.1, zoom - 0.1));
  }, [zoom, setZoom]);

  const handleFitToPage = useCallback(() => {
    setZoom(1);
  }, [setZoom]);

  const handleToggleGrid = useCallback(() => {
    updateCanvas({ showGrid: !canvas.showGrid });
  }, [canvas.showGrid, updateCanvas]);

  const handleToggleSnap = useCallback(() => {
    updateCanvas({ snapToGrid: !canvas.snapToGrid });
  }, [canvas.snapToGrid, updateCanvas]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 12px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #E7E5E4',
        gap: 8,
        flexShrink: 0,
        height: 44,
        boxSizing: 'border-box',
      }}
    >
      {/* Left: Block inserters */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', overflow: 'auto' }}>
        {BLOCK_INSERTERS.map(item => (
          <button
            key={item.type}
            title={item.label}
            style={insertBtnStyle}
            onClick={() => handleAddBlock(item.type)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5F5F4';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff';
            }}
          >
            <span style={{ fontSize: 14, lineHeight: 1 }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Center: Zoom controls */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexShrink: 0 }}>
        <button
          title="缩小"
          style={toolBtnStyle}
          onClick={handleZoomOut}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5F5F4';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff';
          }}
        >
          −
        </button>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            color: '#1C1917',
            minWidth: 48,
            userSelect: 'none',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {Math.round(zoom * 100)}%
        </span>

        <button
          title="放大"
          style={toolBtnStyle}
          onClick={handleZoomIn}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5F5F4';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff';
          }}
        >
          +
        </button>

        <div style={{ width: 1, height: 20, backgroundColor: '#E7E5E4', margin: '0 4px' }} />

        <button
          title="适应页面"
          style={toolBtnStyle}
          onClick={handleFitToPage}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5F5F4';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff';
          }}
        >
          适应
        </button>
      </div>

      {/* Right: Toggle buttons */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexShrink: 0 }}>
        <button
          title="标尺"
          style={showRulers ? activeBtnStyle : toolBtnStyle}
          onClick={toggleRulers}
        >
          标尺
        </button>

        <button
          title="网格"
          style={canvas.showGrid ? activeBtnStyle : toolBtnStyle}
          onClick={handleToggleGrid}
        >
          网格
        </button>

        <button
          title="对齐"
          style={canvas.snapToGrid ? activeBtnStyle : toolBtnStyle}
          onClick={handleToggleSnap}
        >
          对齐
        </button>

        <div style={{ width: 1, height: 20, backgroundColor: '#E7E5E4', margin: '0 4px' }} />

        <button
          title="图层面板"
          style={showLayers ? activeBtnStyle : toolBtnStyle}
          onClick={toggleLayers}
        >
          图层
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
