import { useState, useRef, useCallback } from 'react';
import TopBarV2 from './TopBarV2';
import CanvasEngine from '../canvas/CanvasEngine';
import { StylePanel } from '../panels/StylePanel';
import { BlockLibrary } from '../panels/BlockLibrary';
import { LayerPanel } from '../panels/LayerPanel';
import { useAutoSave } from '../../hooks/useAutoSave';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import { useCanvasStore } from '../../stores/canvas.store';

// ---------------------------------------------------------------------------
// Layout constants
// ---------------------------------------------------------------------------
const LEFT_MIN = 180;
const LEFT_MAX = 360;
const LEFT_DEFAULT = 240;

const RIGHT_MIN = 220;
const RIGHT_MAX = 320;
const RIGHT_DEFAULT = 260;

const TOPBAR_HEIGHT = 52;

type LeftTab = 'blocks' | 'layers';

// ---------------------------------------------------------------------------
// Resize handle (shared between left and right)
// ---------------------------------------------------------------------------
function ResizeHandle({
  side,
  isActive,
  isHovered,
  onMouseDown,
  onHoverChange,
}: {
  side: 'left' | 'right';
  isActive: boolean;
  isHovered: boolean;
  onMouseDown: () => void;
  onHoverChange: (h: boolean) => void;
}) {
  return (
    <div
      onMouseDown={onMouseDown}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      style={{
        width: 4,
        cursor: 'col-resize',
        background: isActive ? '#3B82F6' : isHovered ? '#D1D5DB' : 'transparent',
        transition: isActive ? 'none' : 'background 0.15s',
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Wider invisible hit area */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: -4,
          right: -4,
          cursor: 'col-resize',
        }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Collapse toggle button
// ---------------------------------------------------------------------------
function CollapseBtn({
  side,
  collapsed,
  onClick,
}: {
  side: 'left' | 'right';
  collapsed: boolean;
  onClick: () => void;
}) {
  const isLeft = side === 'left';
  const chevron = collapsed
    ? (isLeft ? '›' : '‹')
    : (isLeft ? '‹' : '›');

  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        [isLeft ? 'right' : 'left']: -12,
        transform: 'translateY(-50%)',
        width: 24,
        height: 48,
        borderRadius: isLeft ? '0 6px 6px 0' : '6px 0 0 6px',
        border: '1px solid #E7E5E4',
        borderLeft: isLeft ? '1px solid #E7E5E4' : 'none',
        borderRight: isLeft ? 'none' : '1px solid #E7E5E4',
        background: '#FFFFFF',
        color: '#A8A29E',
        fontSize: 14,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        transition: 'color 0.12s, box-shadow 0.12s',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = '#1C1917'; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#A8A29E'; }}
      title={collapsed ? '展开面板' : '收起面板'}
    >
      {chevron}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Main layout
// ---------------------------------------------------------------------------
export function EditorLayoutV2() {
  useAutoSave();
  useKeyboardShortcuts();

  const activePanel = useCanvasStore(s => s.activePanel);

  // Left panel
  const [leftWidth, setLeftWidth] = useState(LEFT_DEFAULT);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [leftTab, setLeftTab] = useState<LeftTab>('blocks');
  const [leftResizeHover, setLeftResizeHover] = useState(false);
  const [leftResizeActive, setLeftResizeActive] = useState(false);
  const leftResizing = useRef(false);

  // Right panel
  const [rightWidth, setRightWidth] = useState(RIGHT_DEFAULT);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [rightResizeHover, setRightResizeHover] = useState(false);
  const [rightResizeActive, setRightResizeActive] = useState(false);
  const rightResizing = useRef(false);

  // Left resize
  const handleLeftResizeDown = useCallback(() => {
    leftResizing.current = true;
    setLeftResizeActive(true);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onMove = (e: MouseEvent) => {
      if (!leftResizing.current) return;
      const newWidth = Math.min(LEFT_MAX, Math.max(LEFT_MIN, e.clientX));
      setLeftWidth(newWidth);
    };
    const onUp = () => {
      leftResizing.current = false;
      setLeftResizeActive(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, []);

  // Right resize
  const handleRightResizeDown = useCallback(() => {
    rightResizing.current = true;
    setRightResizeActive(true);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onMove = (e: MouseEvent) => {
      if (!rightResizing.current) return;
      const fromRight = window.innerWidth - e.clientX;
      const newWidth = Math.min(RIGHT_MAX, Math.max(RIGHT_MIN, fromRight));
      setRightWidth(newWidth);
    };
    const onUp = () => {
      rightResizing.current = false;
      setRightResizeActive(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, []);

  const effectiveLeftWidth = leftCollapsed ? 0 : leftWidth;
  const effectiveRightWidth = rightCollapsed ? 0 : rightWidth;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#FAFAF9',
        fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
      }}
    >
      {/* Top bar */}
      <TopBarV2 />

      {/* Main body */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* ====== LEFT PANEL ====== */}
        <div
          style={{
            width: effectiveLeftWidth,
            flexShrink: 0,
            background: '#FFFFFF',
            borderRight: leftCollapsed ? 'none' : '1px solid #E7E5E4',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: leftResizing.current ? 'none' : 'width 0.2s ease',
            position: 'relative',
          }}
        >
          {/* Collapse button */}
          <CollapseBtn
            side="left"
            collapsed={leftCollapsed}
            onClick={() => setLeftCollapsed(c => !c)}
          />

          {!leftCollapsed && (
            <>
              {/* Tab switcher */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #E7E5E4',
                  flexShrink: 0,
                }}
              >
                <TabButton
                  active={leftTab === 'blocks'}
                  label="组件库"
                  onClick={() => setLeftTab('blocks')}
                />
                <TabButton
                  active={leftTab === 'layers'}
                  label="图层"
                  onClick={() => setLeftTab('layers')}
                />
              </div>

              {/* Panel content */}
              <div style={{ flex: 1, overflow: 'auto' }}>
                {leftTab === 'blocks' ? <BlockLibrary /> : <LayerPanel />}
              </div>
            </>
          )}
        </div>

        {/* Left resize handle */}
        {!leftCollapsed && (
          <ResizeHandle
            side="left"
            isActive={leftResizeActive}
            isHovered={leftResizeHover}
            onMouseDown={handleLeftResizeDown}
            onHoverChange={setLeftResizeHover}
          />
        )}

        {/* ====== CENTER: Canvas ====== */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            background: '#FAFAF9',
            position: 'relative',
          }}
        >
          <CanvasEngine />
        </div>

        {/* Right resize handle */}
        {!rightCollapsed && (
          <ResizeHandle
            side="right"
            isActive={rightResizeActive}
            isHovered={rightResizeHover}
            onMouseDown={handleRightResizeDown}
            onHoverChange={setRightResizeHover}
          />
        )}

        {/* ====== RIGHT PANEL ====== */}
        <div
          style={{
            width: effectiveRightWidth,
            flexShrink: 0,
            background: '#FFFFFF',
            borderLeft: rightCollapsed ? 'none' : '1px solid #E7E5E4',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: rightResizing.current ? 'none' : 'width 0.2s ease',
            position: 'relative',
          }}
        >
          {/* Collapse button */}
          <CollapseBtn
            side="right"
            collapsed={rightCollapsed}
            onClick={() => setRightCollapsed(c => !c)}
          />

          {!rightCollapsed && (
            <>
              <div
                style={{
                  padding: '10px 14px',
                  borderBottom: '1px solid #E7E5E4',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#1C1917',
                  flexShrink: 0,
                }}
              >
                样式属性
              </div>
              <div style={{ flex: 1, overflow: 'auto' }}>
                <StylePanel />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tab button sub-component
// ---------------------------------------------------------------------------
function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: '10px 0',
        border: 'none',
        borderBottom: active ? '2px solid #1C1917' : '2px solid transparent',
        background: 'transparent',
        color: active ? '#1C1917' : '#A8A29E',
        fontSize: 12,
        fontWeight: active ? 600 : 400,
        cursor: 'pointer',
        transition: 'all 0.12s',
        fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
      }}
      onMouseEnter={e => {
        if (!active) e.currentTarget.style.color = '#78716C';
      }}
      onMouseLeave={e => {
        if (!active) e.currentTarget.style.color = '#A8A29E';
      }}
    >
      {label}
    </button>
  );
}
