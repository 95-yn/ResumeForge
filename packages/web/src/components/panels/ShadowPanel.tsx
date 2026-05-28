import React, { useCallback } from 'react';
import type { Block, BoxShadow } from '@resume/shared';
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

interface ShadowPanelProps {
  block: Block;
}

const DEFAULT_SHADOW: BoxShadow = { x: 0, y: 2, blur: 8, spread: 0, color: 'rgba(0,0,0,0.12)' };

export const ShadowPanel: React.FC<ShadowPanelProps> = ({ block }) => {
  const updateBlockStyle = useCanvasStore(s => s.updateBlockStyle);

  const shadow = block.style.boxShadow;
  const enabled = !!shadow;
  const current = shadow || DEFAULT_SHADOW;

  const toggle = useCallback(() => {
    if (enabled) {
      updateBlockStyle(block.id, { boxShadow: undefined });
    } else {
      updateBlockStyle(block.id, { boxShadow: { ...DEFAULT_SHADOW } });
    }
  }, [block.id, enabled, updateBlockStyle]);

  const updateShadow = useCallback((updates: Partial<BoxShadow>) => {
    updateBlockStyle(block.id, { boxShadow: { ...current, ...updates } });
  }, [block.id, current, updateBlockStyle]);

  const handleNumChange = useCallback((field: keyof BoxShadow, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) updateShadow({ [field]: val });
  }, [updateShadow]);

  const handleColorChange = useCallback((color: string) => {
    updateShadow({ color });
  }, [updateShadow]);

  // Extract hex and alpha from rgba or hex color
  const parseAlphaColor = (c: string): { hex: string; alpha: number } => {
    const rgbaMatch = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(c);
    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      const a = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
      const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
      return { hex, alpha: a };
    }
    return { hex: c.startsWith('#') ? c : '#000000', alpha: 1 };
  };

  const { hex: shadowHex, alpha: shadowAlpha } = parseAlphaColor(current.color);

  const handleHexChange = useCallback((hex: string) => {
    const { alpha } = parseAlphaColor(current.color);
    // Convert hex to rgba
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    handleColorChange(`rgba(${r}, ${g}, ${b}, ${alpha})`);
  }, [current.color, handleColorChange]);

  const handleAlphaChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const alpha = parseFloat(e.target.value) / 100;
    if (isNaN(alpha)) return;
    const { hex } = parseAlphaColor(current.color);
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    handleColorChange(`rgba(${r}, ${g}, ${b}, ${alpha})`);
  }, [current.color, handleColorChange]);

  // Shadow preview CSS
  const previewShadow = enabled
    ? `${current.x}px ${current.y}px ${current.blur}px ${current.spread}px ${current.color}`
    : 'none';

  return (
    <div>
      {/* Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: enabled ? 8 : 0 }}>
        <button
          onClick={toggle}
          style={{
            width: 32,
            height: 18,
            borderRadius: 9,
            border: 'none',
            background: enabled ? '#1C1917' : '#D6D3D1',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background 0.2s',
            padding: 0,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#fff',
              position: 'absolute',
              top: 2,
              left: enabled ? 16 : 2,
              transition: 'left 0.2s',
            }}
          />
        </button>
        <span style={{ fontSize: 12, color: '#57534E' }}>{enabled ? '已启用' : '已关闭'}</span>
      </div>

      {enabled && (
        <>
          {/* Preview */}
          <div
            style={{
              width: '100%',
              height: 40,
              background: '#fff',
              borderRadius: 6,
              marginBottom: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #E7E5E4',
            }}
          >
            <div
              style={{
                width: 60,
                height: 24,
                background: '#FAFAF9',
                borderRadius: 4,
                boxShadow: previewShadow,
              }}
            />
          </div>

          {/* Offset X, Y */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 6 }}>
            <div>
              <span style={labelStyle}>X 偏移</span>
              <input
                type="number"
                style={inputStyle}
                value={current.x}
                onChange={e => handleNumChange('x', e)}
              />
            </div>
            <div>
              <span style={labelStyle}>Y 偏移</span>
              <input
                type="number"
                style={inputStyle}
                value={current.y}
                onChange={e => handleNumChange('y', e)}
              />
            </div>
          </div>

          {/* Blur, Spread */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 6 }}>
            <div>
              <span style={labelStyle}>模糊</span>
              <input
                type="number"
                style={inputStyle}
                value={current.blur}
                onChange={e => handleNumChange('blur', e)}
                min={0}
              />
            </div>
            <div>
              <span style={labelStyle}>扩展</span>
              <input
                type="number"
                style={inputStyle}
                value={current.spread}
                onChange={e => handleNumChange('spread', e)}
              />
            </div>
          </div>

          {/* Shadow Color + Alpha */}
          <div>
            <span style={labelStyle}>颜色</span>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <input
                type="color"
                value={shadowHex}
                onChange={e => handleHexChange(e.target.value)}
                style={{ width: 28, height: 28, padding: 0, border: '1px solid #E7E5E4', borderRadius: 4, cursor: 'pointer', background: 'none' }}
              />
              <input
                type="text"
                value={shadowHex}
                onChange={e => handleHexChange(e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
              <input
                type="number"
                value={Math.round(shadowAlpha * 100)}
                onChange={handleAlphaChange}
                min={0}
                max={100}
                style={{ ...inputStyle, width: 44 }}
              />
              <span style={{ fontSize: 10, color: '#A8A29E' }}>%</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
