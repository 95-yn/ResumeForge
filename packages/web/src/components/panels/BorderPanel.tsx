import React, { useCallback, useState } from 'react';
import type { Block } from '@resume/shared';
import { useCanvasStore } from '../../stores/canvas.store';

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

interface BorderPanelProps {
  block: Block;
}

export const BorderPanel: React.FC<BorderPanelProps> = ({ block }) => {
  const updateBlockStyle = useCanvasStore(s => s.updateBlockStyle);

  const borderWidth = block.style.borderWidth ?? 0;
  const borderStyle = block.style.borderStyle || 'solid';
  const borderColor = block.style.borderColor || '#E7E5E4';
  const borderRadius = block.style.borderRadius ?? 0;

  const isArrayRadius = Array.isArray(borderRadius);
  const [showIndividualRadius, setShowIndividualRadius] = useState(isArrayRadius);
  const radiusValues: [number, number, number, number] = isArrayRadius
    ? borderRadius
    : [borderRadius as number, borderRadius as number, borderRadius as number, borderRadius as number];

  const handleBorderWidth = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0) updateBlockStyle(block.id, { borderWidth: val });
  }, [block.id, updateBlockStyle]);

  const handleBorderStyle = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateBlockStyle(block.id, { borderStyle: e.target.value as 'solid' | 'dashed' | 'dotted' | 'none' });
  }, [block.id, updateBlockStyle]);

  const handleBorderColor = useCallback((color: string) => {
    updateBlockStyle(block.id, { borderColor: color });
  }, [block.id, updateBlockStyle]);

  const handleUniformRadius = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0) updateBlockStyle(block.id, { borderRadius: val });
  }, [block.id, updateBlockStyle]);

  const handleCornerRadius = useCallback((index: number, value: number) => {
    const next: [number, number, number, number] = [...radiusValues];
    next[index] = value;
    updateBlockStyle(block.id, { borderRadius: next });
  }, [block.id, radiusValues, updateBlockStyle]);

  const toggleRadiusMode = useCallback(() => {
    if (showIndividualRadius) {
      // Switch to uniform - use the first value
      const val = radiusValues[0];
      updateBlockStyle(block.id, { borderRadius: val });
    } else {
      // Switch to individual
      const val = typeof borderRadius === 'number' ? borderRadius : 0;
      updateBlockStyle(block.id, { borderRadius: [val, val, val, val] });
    }
    setShowIndividualRadius(!showIndividualRadius);
  }, [showIndividualRadius, block.id, borderRadius, radiusValues, updateBlockStyle]);

  const styleOptions: { value: string; label: string }[] = [
    { value: 'none', label: '无' },
    { value: 'solid', label: '实线' },
    { value: 'dashed', label: '虚线' },
    { value: 'dotted', label: '点线' },
  ];

  const cornerLabels = ['左上', '右上', '右下', '左下'];

  return (
    <div>
      {/* Border Width & Style */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 8 }}>
        <div>
          <span style={labelStyle}>宽度</span>
          <input
            type="number"
            style={inputStyle}
            value={borderWidth}
            onChange={handleBorderWidth}
            min={0}
            step={1}
          />
        </div>
        <div>
          <span style={labelStyle}>样式</span>
          <select
            value={borderStyle}
            onChange={handleBorderStyle}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            {styleOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Border Color */}
      <div style={{ marginBottom: 8 }}>
        <span style={labelStyle}>颜色</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <input
            type="color"
            value={borderColor}
            onChange={e => handleBorderColor(e.target.value)}
            style={{ width: 28, height: 28, padding: 0, border: '1px solid #E7E5E4', borderRadius: 4, cursor: 'pointer', background: 'none' }}
          />
          <input
            type="text"
            value={borderColor}
            onChange={e => handleBorderColor(e.target.value)}
            style={{ ...inputStyle, flex: 1 }}
          />
        </div>
      </div>

      {/* Border preview */}
      {borderWidth > 0 && borderStyle !== 'none' && (
        <div
          style={{
            height: 20,
            borderRadius: 4,
            marginBottom: 8,
            borderTop: `${borderWidth}px ${borderStyle} ${borderColor}`,
          }}
        />
      )}

      {/* Border Radius */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <span style={labelStyle}>圆角</span>
          <button
            onClick={toggleRadiusMode}
            style={{
              fontSize: 10,
              background: 'none',
              border: 'none',
              color: '#78716C',
              cursor: 'pointer',
              padding: '0 2px',
            }}
          >
            {showIndividualRadius ? '统一' : '独立'}
          </button>
        </div>

        {showIndividualRadius ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            {radiusValues.map((val, i) => (
              <div key={i}>
                <span style={{ ...labelStyle, fontSize: 10 }}>{cornerLabels[i]}</span>
                <input
                  type="number"
                  style={inputStyle}
                  value={val}
                  onChange={e => {
                    const v = parseFloat(e.target.value);
                    if (!isNaN(v) && v >= 0) handleCornerRadius(i, v);
                  }}
                  min={0}
                />
              </div>
            ))}
          </div>
        ) : (
          <input
            type="number"
            style={inputStyle}
            value={typeof borderRadius === 'number' ? borderRadius : radiusValues[0]}
            onChange={handleUniformRadius}
            min={0}
          />
        )}
      </div>
    </div>
  );
};
