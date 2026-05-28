import React, { useMemo } from 'react';
import { useCanvasStore } from '../../stores/canvas.store';

type HandlePosition = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';

const HANDLE_SIZE = 8;
const ROTATION_HANDLE_OFFSET = 24;
const ROTATION_HANDLE_SIZE = 10;

const CURSOR_MAP: Record<HandlePosition, string> = {
  nw: 'nw-resize',
  n: 'n-resize',
  ne: 'ne-resize',
  e: 'e-resize',
  se: 'se-resize',
  s: 's-resize',
  sw: 'sw-resize',
  w: 'w-resize',
};

interface HandleDef {
  position: HandlePosition;
  x: number;
  y: number;
}

function getHandles(width: number, height: number): HandleDef[] {
  const hw = width;
  const hh = height;
  return [
    { position: 'nw', x: 0, y: 0 },
    { position: 'n', x: hw / 2, y: 0 },
    { position: 'ne', x: hw, y: 0 },
    { position: 'e', x: hw, y: hh / 2 },
    { position: 'se', x: hw, y: hh },
    { position: 's', x: hw / 2, y: hh },
    { position: 'sw', x: 0, y: hh },
    { position: 'w', x: 0, y: hh / 2 },
  ];
}

const handleStyle = (x: number, y: number, cursor: string): React.CSSProperties => ({
  position: 'absolute',
  left: x - HANDLE_SIZE / 2,
  top: y - HANDLE_SIZE / 2,
  width: HANDLE_SIZE,
  height: HANDLE_SIZE,
  backgroundColor: '#ffffff',
  border: '1.5px solid #3B82F6',
  borderRadius: 1,
  cursor,
  zIndex: 10001,
  boxSizing: 'border-box',
});

const rotationHandleStyle = (centerX: number): React.CSSProperties => ({
  position: 'absolute',
  left: centerX - ROTATION_HANDLE_SIZE / 2,
  top: -ROTATION_HANDLE_OFFSET - ROTATION_HANDLE_SIZE / 2,
  width: ROTATION_HANDLE_SIZE,
  height: ROTATION_HANDLE_SIZE,
  backgroundColor: '#ffffff',
  border: '1.5px solid #3B82F6',
  borderRadius: '50%',
  cursor: 'grab',
  zIndex: 10001,
  boxSizing: 'border-box',
});

const rotationLineStyle = (centerX: number): React.CSSProperties => ({
  position: 'absolute',
  left: centerX,
  top: -ROTATION_HANDLE_OFFSET,
  width: 1,
  height: ROTATION_HANDLE_OFFSET,
  backgroundColor: '#3B82F6',
  pointerEvents: 'none',
  zIndex: 10000,
});

const SelectionOverlay: React.FC = () => {
  const blocks = useCanvasStore(s => s.blocks);
  const selectedIds = useCanvasStore(s => s.selectedIds);
  const editingId = useCanvasStore(s => s.editingId);

  const selectedBlocks = useMemo(
    () => Array.from(selectedIds).map(id => blocks[id]).filter(Boolean),
    [selectedIds, blocks],
  );

  if (selectedBlocks.length === 0 || editingId !== null) return null;

  // For multi-selection, compute bounding box
  if (selectedBlocks.length > 1) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    selectedBlocks.forEach(b => {
      const w = typeof b.size.width === 'number' ? b.size.width : 0;
      const h = typeof b.size.height === 'number' ? b.size.height : 0;
      minX = Math.min(minX, b.position.x);
      minY = Math.min(minY, b.position.y);
      maxX = Math.max(maxX, b.position.x + w);
      maxY = Math.max(maxY, b.position.y + h);
    });

    const bw = maxX - minX;
    const bh = maxY - minY;
    const handles = getHandles(bw, bh);

    return (
      <div
        data-selection-overlay="true"
        style={{
          position: 'absolute',
          left: minX,
          top: minY,
          width: bw,
          height: bh,
          border: '1.5px solid #3B82F6',
          pointerEvents: 'none',
          zIndex: 10000,
          boxSizing: 'border-box',
        }}
      >
        {handles.map(h => (
          <div
            key={h.position}
            data-resize-handle={h.position}
            style={{
              ...handleStyle(h.x, h.y, CURSOR_MAP[h.position]),
              pointerEvents: 'auto',
            }}
          />
        ))}
      </div>
    );
  }

  // Single selection
  const block = selectedBlocks[0];
  if (block.locked) {
    const w = typeof block.size.width === 'number' ? block.size.width : 0;
    const h = typeof block.size.height === 'number' ? block.size.height : 0;
    return (
      <div
        data-selection-overlay="true"
        style={{
          position: 'absolute',
          left: block.position.x,
          top: block.position.y,
          width: w,
          height: h,
          border: '1.5px dashed #78716C',
          pointerEvents: 'none',
          zIndex: 10000,
          boxSizing: 'border-box',
          transform: block.rotation ? `rotate(${block.rotation}deg)` : undefined,
        }}
      />
    );
  }

  const w = typeof block.size.width === 'number' ? block.size.width : 0;
  const h = typeof block.size.height === 'number' ? block.size.height : 0;
  const handles = getHandles(w, h);

  return (
    <div
      data-selection-overlay="true"
      style={{
        position: 'absolute',
        left: block.position.x,
        top: block.position.y,
        width: w,
        height: h,
        pointerEvents: 'none',
        zIndex: 10000,
        boxSizing: 'border-box',
        transform: block.rotation ? `rotate(${block.rotation}deg)` : undefined,
        transformOrigin: 'center center',
      }}
    >
      {/* Resize handles */}
      {handles.map(hp => (
        <div
          key={hp.position}
          data-resize-handle={hp.position}
          style={{
            ...handleStyle(hp.x, hp.y, CURSOR_MAP[hp.position]),
            pointerEvents: 'auto',
          }}
        />
      ))}

      {/* Rotation line */}
      <div style={rotationLineStyle(w / 2)} />

      {/* Rotation handle */}
      <div
        data-rotation-handle="true"
        style={{
          ...rotationHandleStyle(w / 2),
          pointerEvents: 'auto',
        }}
      />
    </div>
  );
};

export default SelectionOverlay;
