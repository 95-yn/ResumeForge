import React, { useCallback, useState } from 'react';
import type { Block, GradientStop } from '@resume/shared';
import { useCanvasStore } from '../../stores/canvas.store';
import { PALETTE, buildGradientCSS } from '../../utils/colors';

const inputStyle: React.CSSProperties = {
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

type FillMode = 'none' | 'solid' | 'gradient';

interface FillPanelProps {
  block: Block;
}

export const FillPanel: React.FC<FillPanelProps> = ({ block }) => {
  const updateBlockStyle = useCanvasStore(s => s.updateBlockStyle);

  const hasGradient = !!block.style.gradient;
  const hasBg = !!block.style.backgroundColor;

  const initialMode: FillMode = hasGradient ? 'gradient' : hasBg ? 'solid' : 'none';
  const [mode, setMode] = useState<FillMode>(initialMode);

  const bgColor = block.style.backgroundColor || '#ffffff';
  const opacity = block.style.opacity ?? 1;
  const gradient = block.style.gradient || {
    type: 'linear' as const,
    angle: 180,
    stops: [
      { offset: 0, color: '#1C1917' },
      { offset: 1, color: '#78716C' },
    ],
  };

  const handleModeChange = useCallback((newMode: FillMode) => {
    setMode(newMode);
    if (newMode === 'none') {
      updateBlockStyle(block.id, { backgroundColor: undefined, gradient: undefined });
    } else if (newMode === 'solid') {
      updateBlockStyle(block.id, { gradient: undefined, backgroundColor: bgColor });
    } else {
      updateBlockStyle(block.id, { backgroundColor: undefined, gradient });
    }
  }, [block.id, bgColor, gradient, updateBlockStyle]);

  const handleColorChange = useCallback((color: string) => {
    updateBlockStyle(block.id, { backgroundColor: color });
  }, [block.id, updateBlockStyle]);

  const handleOpacityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) updateBlockStyle(block.id, { opacity: val / 100 });
  }, [block.id, updateBlockStyle]);

  const handleGradientType = useCallback((type: 'linear' | 'radial') => {
    const g = { ...gradient, type };
    updateBlockStyle(block.id, { gradient: g });
  }, [block.id, gradient, updateBlockStyle]);

  const handleGradientAngle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      updateBlockStyle(block.id, { gradient: { ...gradient, angle: val } });
    }
  }, [block.id, gradient, updateBlockStyle]);

  const handleStopColor = useCallback((index: number, color: string) => {
    const stops = [...gradient.stops];
    stops[index] = { ...stops[index], color };
    updateBlockStyle(block.id, { gradient: { ...gradient, stops } });
  }, [block.id, gradient, updateBlockStyle]);

  const handleStopOffset = useCallback((index: number, offset: number) => {
    const stops = [...gradient.stops];
    stops[index] = { ...stops[index], offset: Math.max(0, Math.min(1, offset)) };
    updateBlockStyle(block.id, { gradient: { ...gradient, stops } });
  }, [block.id, gradient, updateBlockStyle]);

  const addStop = useCallback(() => {
    const stops: GradientStop[] = [...gradient.stops, { offset: 0.5, color: '#A8A29E' }];
    stops.sort((a, b) => a.offset - b.offset);
    updateBlockStyle(block.id, { gradient: { ...gradient, stops } });
  }, [block.id, gradient, updateBlockStyle]);

  const removeStop = useCallback((index: number) => {
    if (gradient.stops.length <= 2) return;
    const stops = gradient.stops.filter((_, i) => i !== index);
    updateBlockStyle(block.id, { gradient: { ...gradient, stops } });
  }, [block.id, gradient, updateBlockStyle]);

  const tabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    padding: '4px 0',
    fontSize: 11,
    border: '1px solid #E7E5E4',
    borderRadius: 4,
    cursor: 'pointer',
    background: active ? '#1C1917' : '#FAFAF9',
    color: active ? '#FAFAF9' : '#78716C',
    fontWeight: active ? 600 : 400,
    textAlign: 'center',
  });

  const paletteKeys = Object.keys(PALETTE) as (keyof typeof PALETTE)[];

  return (
    <div>
      {/* Fill mode toggle */}
      <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
        {(['none', 'solid', 'gradient'] as FillMode[]).map(m => (
          <button key={m} style={tabStyle(mode === m)} onClick={() => handleModeChange(m)}>
            {m === 'none' ? '无' : m === 'solid' ? '纯色' : '渐变'}
          </button>
        ))}
      </div>

      {/* Solid color */}
      {mode === 'solid' && (
        <div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 8 }}>
            <input
              type="color"
              value={bgColor}
              onChange={e => handleColorChange(e.target.value)}
              style={{ width: 28, height: 28, padding: 0, border: '1px solid #E7E5E4', borderRadius: 4, cursor: 'pointer', background: 'none' }}
            />
            <input
              type="text"
              value={bgColor}
              onChange={e => handleColorChange(e.target.value)}
              style={{ ...inputStyle, flex: 1 }}
            />
          </div>
          {/* Preset swatches */}
          <div style={{ marginBottom: 4 }}>
            {paletteKeys.map(group => (
              <div key={group} style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                {PALETTE[group].slice(0, 8).map((c, i) => (
                  <button
                    key={i}
                    onClick={() => handleColorChange(c)}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 4,
                      border: bgColor === c ? '2px solid #1C1917' : '1px solid #E7E5E4',
                      background: c,
                      cursor: 'pointer',
                      padding: 0,
                      flex: 'none',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gradient */}
      {mode === 'gradient' && (
        <div>
          {/* Preview */}
          <div
            style={{
              height: 24,
              borderRadius: 6,
              border: '1px solid #E7E5E4',
              marginBottom: 8,
              background: buildGradientCSS(gradient),
            }}
          />

          {/* Type */}
          <div style={{ display: 'flex', gap: 2, marginBottom: 6 }}>
            <button style={tabStyle(gradient.type === 'linear')} onClick={() => handleGradientType('linear')}>
              线性
            </button>
            <button style={tabStyle(gradient.type === 'radial')} onClick={() => handleGradientType('radial')}>
              径向
            </button>
          </div>

          {/* Angle */}
          {gradient.type === 'linear' && (
            <div style={{ marginBottom: 6 }}>
              <span style={labelStyle}>角度</span>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <input
                  type="range"
                  min={0}
                  max={360}
                  value={gradient.angle ?? 180}
                  onChange={handleGradientAngle}
                  style={{ flex: 1, accentColor: '#78716C' }}
                />
                <input
                  type="number"
                  value={gradient.angle ?? 180}
                  onChange={handleGradientAngle}
                  style={{ ...inputStyle, width: 48 }}
                />
                <span style={{ fontSize: 11, color: '#A8A29E' }}>°</span>
              </div>
            </div>
          )}

          {/* Color stops */}
          <div style={{ marginBottom: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={labelStyle}>色标</span>
              <button
                onClick={addStop}
                style={{
                  fontSize: 11,
                  background: 'none',
                  border: 'none',
                  color: '#78716C',
                  cursor: 'pointer',
                  padding: '0 2px',
                }}
              >
                + 添加
              </button>
            </div>
            {gradient.stops.map((stop, i) => (
              <div key={i} style={{ display: 'flex', gap: 4, alignItems: 'center', marginBottom: 4 }}>
                <input
                  type="color"
                  value={stop.color}
                  onChange={e => handleStopColor(i, e.target.value)}
                  style={{ width: 24, height: 24, padding: 0, border: '1px solid #E7E5E4', borderRadius: 4, cursor: 'pointer', background: 'none' }}
                />
                <input
                  type="number"
                  value={Math.round(stop.offset * 100)}
                  onChange={e => handleStopOffset(i, parseFloat(e.target.value) / 100)}
                  min={0}
                  max={100}
                  style={{ ...inputStyle, width: 48 }}
                />
                <span style={{ fontSize: 10, color: '#A8A29E' }}>%</span>
                {gradient.stops.length > 2 && (
                  <button
                    onClick={() => removeStop(i)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#A8A29E',
                      cursor: 'pointer',
                      padding: '0 2px',
                      fontSize: 14,
                      lineHeight: 1,
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Opacity */}
      <div style={{ marginTop: 8 }}>
        <span style={labelStyle}>不透明度</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(opacity * 100)}
            onChange={handleOpacityChange}
            style={{ flex: 1, accentColor: '#78716C' }}
          />
          <input
            type="number"
            value={Math.round(opacity * 100)}
            onChange={handleOpacityChange}
            min={0}
            max={100}
            style={{ ...inputStyle, width: 48 }}
          />
          <span style={{ fontSize: 11, color: '#A8A29E' }}>%</span>
        </div>
      </div>
    </div>
  );
};
