import React, { useCallback, useState } from 'react';
import type { Block } from '@resume/shared';
import { useCanvasStore } from '../../stores/canvas.store';
import { alignBlocks, distributeBlocks } from '../../utils/geometry';

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontSize: 12,
  padding: '5px 8px',
  borderRadius: 6,
  border: '1px solid #E7E5E4',
  background: '#FAFAF9',
  color: '#1C1917',
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#78716C',
  marginBottom: 2,
  display: 'block',
};

const btnStyle: React.CSSProperties = {
  flex: 1,
  padding: '5px 0',
  fontSize: 11,
  background: '#FAFAF9',
  border: '1px solid #E7E5E4',
  borderRadius: 4,
  cursor: 'pointer',
  color: '#57534E',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 0,
};

interface LayoutPanelProps {
  block: Block;
}

export const LayoutPanel: React.FC<LayoutPanelProps> = ({ block }) => {
  const { updateBlockPosition, updateBlockSize, updateBlock } = useCanvasStore();
  const selectedBlocks = useCanvasStore(s => s.getSelectedBlocks());
  const [lockAspect, setLockAspect] = useState(false);

  const x = block.position.x;
  const y = block.position.y;
  const w = typeof block.size.width === 'number' ? block.size.width : 0;
  const h = typeof block.size.height === 'number' ? block.size.height : 0;
  const rotation = block.rotation;
  const aspectRatio = h !== 0 ? w / h : 1;

  const onChangeX = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) updateBlockPosition(block.id, val, block.position.y);
  }, [block.id, block.position.y, updateBlockPosition]);

  const onChangeY = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) updateBlockPosition(block.id, block.position.x, val);
  }, [block.id, block.position.x, updateBlockPosition]);

  const onChangeW = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val) || val <= 0) return;
    if (lockAspect) {
      updateBlockSize(block.id, val, Math.round(val / aspectRatio));
    } else {
      updateBlockSize(block.id, val, block.size.height);
    }
  }, [block.id, block.size.height, lockAspect, aspectRatio, updateBlockSize]);

  const onChangeH = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val) || val <= 0) return;
    if (lockAspect) {
      updateBlockSize(block.id, Math.round(val * aspectRatio), val);
    } else {
      updateBlockSize(block.id, block.size.width, val);
    }
  }, [block.id, block.size.width, lockAspect, aspectRatio, updateBlockSize]);

  const onChangeRotation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) updateBlock(block.id, { rotation: val % 360 });
  }, [block.id, updateBlock]);

  const handleAlign = useCallback((alignment: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => {
    const blocks = selectedBlocks.length > 1 ? selectedBlocks : [block];
    const result = alignBlocks(blocks, alignment);
    result.forEach((pos, id) => {
      updateBlockPosition(id, pos.x, pos.y);
    });
  }, [block, selectedBlocks, updateBlockPosition]);

  const handleDistribute = useCallback((axis: 'x' | 'y') => {
    if (selectedBlocks.length < 3) return;
    const result = distributeBlocks(selectedBlocks, axis);
    result.forEach((val, id) => {
      const b = selectedBlocks.find(bl => bl.id === id);
      if (b) {
        if (axis === 'x') updateBlockPosition(id, val, b.position.y);
        else updateBlockPosition(id, b.position.x, val);
      }
    });
  }, [selectedBlocks, updateBlockPosition]);

  return (
    <div>
      {/* Position */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 8 }}>
        <div>
          <span style={labelStyle}>X</span>
          <input
            type="number"
            style={inputStyle}
            value={Math.round(x)}
            onChange={onChangeX}
          />
        </div>
        <div>
          <span style={labelStyle}>Y</span>
          <input
            type="number"
            style={inputStyle}
            value={Math.round(y)}
            onChange={onChangeY}
          />
        </div>
      </div>

      {/* Size */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 4, alignItems: 'end', marginBottom: 8 }}>
        <div>
          <span style={labelStyle}>W</span>
          <input
            type="number"
            style={inputStyle}
            value={Math.round(w)}
            onChange={onChangeW}
          />
        </div>
        <button
          onClick={() => setLockAspect(!lockAspect)}
          style={{
            ...btnStyle,
            flex: 'none',
            width: 28,
            height: 28,
            marginBottom: 0,
            background: lockAspect ? '#E7E5E4' : '#FAFAF9',
          }}
          title={lockAspect ? '解锁比例' : '锁定比例'}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {lockAspect ? (
              <>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </>
            ) : (
              <>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 019.9-1" />
              </>
            )}
          </svg>
        </button>
        <div>
          <span style={labelStyle}>H</span>
          <input
            type="number"
            style={inputStyle}
            value={Math.round(h)}
            onChange={onChangeH}
          />
        </div>
      </div>

      {/* Rotation */}
      <div style={{ marginBottom: 8 }}>
        <span style={labelStyle}>旋转</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <input
            type="range"
            min={0}
            max={360}
            step={1}
            value={rotation}
            onChange={onChangeRotation}
            style={{ flex: 1, accentColor: '#78716C' }}
          />
          <input
            type="number"
            style={{ ...inputStyle, width: 52 }}
            value={Math.round(rotation)}
            onChange={onChangeRotation}
            min={0}
            max={360}
          />
          <span style={{ fontSize: 11, color: '#A8A29E' }}>°</span>
        </div>
      </div>

      {/* Alignment */}
      <div style={{ marginBottom: 6 }}>
        <span style={labelStyle}>对齐</span>
        <div style={{ display: 'flex', gap: 2 }}>
          {([
            { key: 'left', icon: 'M4 4v16M8 8h12M8 12h8M8 16h10', title: '左对齐' },
            { key: 'center', icon: 'M12 4v16M6 8h12M8 12h8M7 16h10', title: '水平居中' },
            { key: 'right', icon: 'M20 4v16M4 8h12M8 12h8M6 16h10', title: '右对齐' },
            { key: 'top', icon: 'M4 4h16M8 8v12M12 8v8M16 8v10', title: '顶对齐' },
            { key: 'middle', icon: 'M4 12h16M8 6v12M12 8v8M16 7v10', title: '垂直居中' },
            { key: 'bottom', icon: 'M4 20h16M8 4v12M12 8v8M16 6v10', title: '底对齐' },
          ] as const).map(({ key, icon, title }) => (
            <button
              key={key}
              style={btnStyle}
              onClick={() => handleAlign(key)}
              title={title}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d={icon} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Distribute */}
      <div>
        <span style={labelStyle}>分布</span>
        <div style={{ display: 'flex', gap: 2 }}>
          <button
            style={{ ...btnStyle, opacity: selectedBlocks.length < 3 ? 0.4 : 1 }}
            onClick={() => handleDistribute('x')}
            disabled={selectedBlocks.length < 3}
            title="水平均匀分布"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="4" y2="20" />
              <line x1="20" y1="4" x2="20" y2="20" />
              <rect x="9" y="6" width="6" height="12" rx="1" />
            </svg>
            <span style={{ fontSize: 10, marginLeft: 4 }}>水平</span>
          </button>
          <button
            style={{ ...btnStyle, opacity: selectedBlocks.length < 3 ? 0.4 : 1 }}
            onClick={() => handleDistribute('y')}
            disabled={selectedBlocks.length < 3}
            title="垂直均匀分布"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="4" />
              <line x1="4" y1="20" x2="20" y2="20" />
              <rect x="6" y="9" width="12" height="6" rx="1" />
            </svg>
            <span style={{ fontSize: 10, marginLeft: 4 }}>垂直</span>
          </button>
        </div>
      </div>
    </div>
  );
};
