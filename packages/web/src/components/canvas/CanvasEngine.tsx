import React, { useRef, useCallback, useMemo } from 'react';
import { useCanvasStore } from '../../stores/canvas.store';
import { useCanvasInteractions } from '../../hooks/useCanvasInteractions';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import { BlockRenderer } from './BlockRenderer';
import SelectionOverlay from './SelectionOverlay';
import AlignmentGuides from './AlignmentGuides';
import ContextMenu from './ContextMenu';

const A4_WIDTH = 793.7;
const A4_HEIGHT = 1122.5;

interface CanvasEngineProps {
  className?: string;
  style?: React.CSSProperties;
}

const CanvasEngine: React.FC<CanvasEngineProps> = ({ className, style }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);

  const {
    blocks,
    blockOrder,
    canvas,
    zoom,
    pan,
    guides,
    isPanning,
  } = useCanvasStore();

  const sortedBlocks = useMemo(
    () => blockOrder.map(id => blocks[id]).filter(Boolean),
    [blocks, blockOrder],
  );

  const {
    handleCanvasMouseDown,
    handleCanvasMouseMove,
    handleCanvasMouseUp,
    handleCanvasWheel,
    selectionRect,
    contextMenu,
    setContextMenu,
  } = useCanvasInteractions(canvasRef, paperRef);

  useKeyboardShortcuts();

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setContextMenu({ x: e.clientX, y: e.clientY });
    },
    [setContextMenu],
  );

  const gridPattern = useMemo(() => {
    if (!canvas.showGrid) return null;
    const gridSize = canvas.gridSize;
    return (
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <defs>
          <pattern
            id="canvas-grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke="#E7E5E4"
              strokeWidth={0.5}
              opacity={0.5}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#canvas-grid)" />
      </svg>
    );
  }, [canvas.showGrid, canvas.gridSize]);

  const pageBreakLines = useMemo(() => {
    const lines: React.ReactNode[] = [];
    const totalHeight = A4_HEIGHT;
    let y = totalHeight;
    let pageNum = 2;
    const maxPages = 10;
    while (y < totalHeight * maxPages) {
      const hasBlocksBeyond = sortedBlocks.some(b => {
        const bh = typeof b.size.height === 'number' ? b.size.height : 0;
        return b.position.y + bh > y;
      });
      if (!hasBlocksBeyond && pageNum > 2) break;
      lines.push(
        <div
          key={`page-break-${pageNum}`}
          style={{
            position: 'absolute',
            left: 0,
            top: y,
            width: A4_WIDTH,
            height: 0,
            borderTop: '1px dashed #78716C',
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        >
          <span
            style={{
              position: 'absolute',
              right: -60,
              top: -10,
              fontSize: 11,
              color: '#78716C',
              userSelect: 'none',
            }}
          >
            第{pageNum}页
          </span>
        </div>,
      );
      y += totalHeight;
      pageNum++;
    }
    return lines;
  }, [sortedBlocks]);

  return (
    <div
      ref={canvasRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#F5F5F4',
        cursor: isPanning ? 'grabbing' : 'default',
        ...style,
      }}
      onMouseDown={handleCanvasMouseDown}
      onMouseMove={handleCanvasMouseMove}
      onMouseUp={handleCanvasMouseUp}
      onWheel={handleCanvasWheel}
      onContextMenu={handleContextMenu}
      tabIndex={0}
    >
      {/* Paper container with zoom and pan */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(${pan.x - A4_WIDTH * zoom / 2}px, ${pan.y - A4_HEIGHT * zoom / 2}px) scale(${zoom})`,
          transformOrigin: '0 0',
          willChange: 'transform',
        }}
      >
        {/* A4 Paper */}
        <div
          ref={paperRef}
          data-canvas-paper="true"
          style={{
            position: 'relative',
            width: A4_WIDTH,
            minHeight: A4_HEIGHT,
            background: canvas.background || '#ffffff',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
            overflow: 'visible',
          }}
        >
          {/* Grid pattern */}
          {gridPattern}

          {/* Page break indicators */}
          {pageBreakLines}

          {/* Blocks — BlockRenderer handles its own positioning, selection UI, and events */}
          {sortedBlocks.map(block => (
            <BlockRenderer key={block.id} block={block} />
          ))}

          {/* Selection overlay for selected blocks */}
          <SelectionOverlay />

          {/* Alignment guides */}
          <AlignmentGuides guides={guides} canvasWidth={A4_WIDTH} canvasHeight={A4_HEIGHT} />
        </div>
      </div>

      {/* Selection rectangle (rubber band) */}
      {selectionRect && (
        <div
          style={{
            position: 'absolute',
            left: selectionRect.x,
            top: selectionRect.y,
            width: selectionRect.width,
            height: selectionRect.height,
            border: '1px solid #3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      )}

      {/* Context menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
};

export default CanvasEngine;
