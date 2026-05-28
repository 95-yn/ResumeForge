import React, { useCallback, useMemo, useState } from 'react';
import type { Block, BlockStyle } from '@resume/shared';
import { useCanvasStore } from '../../stores/canvas.store';
import { FONT_CATALOG, loadGoogleFont } from '../../utils/fonts';

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

const btnGroupStyle: React.CSSProperties = {
  display: 'flex',
  gap: 1,
};

const toggleBtn = (active: boolean): React.CSSProperties => ({
  flex: 1,
  padding: '5px 0',
  fontSize: 11,
  background: active ? '#1C1917' : '#FAFAF9',
  color: active ? '#FAFAF9' : '#57534E',
  border: '1px solid #E7E5E4',
  borderRadius: 4,
  cursor: 'pointer',
  fontWeight: active ? 600 : 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 0,
});

interface TypographyPanelProps {
  block: Block;
}

export const TypographyPanel: React.FC<TypographyPanelProps> = ({ block }) => {
  const updateBlockStyle = useCanvasStore(s => s.updateBlockStyle);
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);

  const style = block.style;
  const fontFamily = style.fontFamily || 'Noto Sans SC';
  const fontWeight = style.fontWeight || 400;
  const fontSize = style.fontSize || 14;
  const lineHeight = style.lineHeight || 1.5;
  const letterSpacing = style.letterSpacing || 0;
  const textAlign = style.textAlign || 'left';
  const textTransform = style.textTransform || 'none';
  const textColor = style.color || '#1C1917';
  const verticalAlign = style.verticalAlign || 'top';

  const currentFont = FONT_CATALOG.find(f => f.family === fontFamily);
  const availableWeights = currentFont?.weights || [400];

  const groupedFonts = useMemo(() => {
    const groups: Record<string, typeof FONT_CATALOG> = {};
    FONT_CATALOG.forEach(font => {
      const cat = font.category;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(font);
    });
    return groups;
  }, []);

  const categoryLabels: Record<string, string> = {
    'sans-serif': '无衬线',
    'serif': '衬线',
    'monospace': '等宽',
    'display': '展示',
    'handwriting': '手写',
  };

  const weightLabels: Record<number, string> = {
    300: 'Light',
    400: 'Regular',
    500: 'Medium',
    600: 'SemiBold',
    700: 'Bold',
  };

  const handleFontChange = useCallback((family: string) => {
    const font = FONT_CATALOG.find(f => f.family === family);
    if (font && font.source === 'google') {
      loadGoogleFont(family, font.weights);
    }
    updateBlockStyle(block.id, { fontFamily: family });
    setFontDropdownOpen(false);
  }, [block.id, updateBlockStyle]);

  const handleWeightChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateBlockStyle(block.id, { fontWeight: parseInt(e.target.value) });
  }, [block.id, updateBlockStyle]);

  const handleFontSizeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) updateBlockStyle(block.id, { fontSize: val });
  }, [block.id, updateBlockStyle]);

  const handleLineHeightChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) updateBlockStyle(block.id, { lineHeight: val });
  }, [block.id, updateBlockStyle]);

  const handleLetterSpacingChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) updateBlockStyle(block.id, { letterSpacing: val });
  }, [block.id, updateBlockStyle]);

  const handleTextAlign = useCallback((align: BlockStyle['textAlign']) => {
    updateBlockStyle(block.id, { textAlign: align });
  }, [block.id, updateBlockStyle]);

  const handleTextTransform = useCallback((transform: BlockStyle['textTransform']) => {
    updateBlockStyle(block.id, { textTransform: transform });
  }, [block.id, updateBlockStyle]);

  const handleColorChange = useCallback((color: string) => {
    updateBlockStyle(block.id, { color });
  }, [block.id, updateBlockStyle]);

  const handleVerticalAlign = useCallback((va: BlockStyle['verticalAlign']) => {
    updateBlockStyle(block.id, { verticalAlign: va });
  }, [block.id, updateBlockStyle]);

  return (
    <div>
      {/* Font Family */}
      <div style={{ marginBottom: 8, position: 'relative' }}>
        <span style={labelStyle}>字体</span>
        <button
          onClick={() => setFontDropdownOpen(!fontDropdownOpen)}
          style={{
            ...inputStyle,
            width: '100%',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: fontFamily,
          }}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {currentFont?.label || fontFamily}
          </span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#78716C" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {fontDropdownOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              maxHeight: 240,
              overflowY: 'auto',
              background: '#fff',
              border: '1px solid #E7E5E4',
              borderRadius: 6,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              zIndex: 100,
            }}
          >
            {Object.entries(groupedFonts).map(([cat, fonts]) => (
              <div key={cat}>
                <div style={{
                  fontSize: 10,
                  color: '#A8A29E',
                  fontWeight: 600,
                  padding: '6px 8px 2px',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  position: 'sticky',
                  top: 0,
                  background: '#fff',
                }}>
                  {categoryLabels[cat] || cat}
                </div>
                {fonts.map(font => (
                  <button
                    key={font.family}
                    onClick={() => handleFontChange(font.family)}
                    style={{
                      width: '100%',
                      padding: '5px 8px',
                      fontSize: 12,
                      fontFamily: font.family,
                      background: fontFamily === font.family ? '#F5F5F4' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: '#1C1917',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{font.label}</span>
                    <span style={{ fontSize: 10, color: '#A8A29E' }}>{font.lang === 'zh' ? '中' : 'En'}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Font Weight */}
      <div style={{ marginBottom: 8 }}>
        <span style={labelStyle}>字重</span>
        <select
          value={fontWeight}
          onChange={handleWeightChange}
          style={{ ...inputStyle, width: '100%', cursor: 'pointer' }}
        >
          {availableWeights.map(w => (
            <option key={w} value={w}>{weightLabels[w] || w} ({w})</option>
          ))}
        </select>
      </div>

      {/* Font Size, Line Height, Letter Spacing */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginBottom: 8 }}>
        <div>
          <span style={labelStyle}>大小</span>
          <input
            type="number"
            style={inputStyle}
            value={fontSize}
            onChange={handleFontSizeChange}
            min={1}
          />
        </div>
        <div>
          <span style={labelStyle}>行高</span>
          <input
            type="number"
            style={inputStyle}
            value={lineHeight}
            onChange={handleLineHeightChange}
            step={0.1}
            min={0.5}
          />
        </div>
        <div>
          <span style={labelStyle}>字距</span>
          <input
            type="number"
            style={inputStyle}
            value={letterSpacing}
            onChange={handleLetterSpacingChange}
            step={0.1}
          />
        </div>
      </div>

      {/* Text Align */}
      <div style={{ marginBottom: 8 }}>
        <span style={labelStyle}>水平对齐</span>
        <div style={btnGroupStyle}>
          {([
            { key: 'left' as const, label: '左', icon: 'M3 6h18M3 10h12M3 14h18M3 18h8' },
            { key: 'center' as const, label: '中', icon: 'M3 6h18M6 10h12M3 14h18M8 18h8' },
            { key: 'right' as const, label: '右', icon: 'M3 6h18M9 10h12M3 14h18M13 18h8' },
            { key: 'justify' as const, label: '两端', icon: 'M3 6h18M3 10h18M3 14h18M3 18h18' },
          ]).map(({ key, label, icon }) => (
            <button key={key} style={toggleBtn(textAlign === key)} onClick={() => handleTextAlign(key)} title={label}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d={icon} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Text Transform */}
      <div style={{ marginBottom: 8 }}>
        <span style={labelStyle}>文本变换</span>
        <div style={btnGroupStyle}>
          {([
            { key: 'none' as const, label: '无' },
            { key: 'uppercase' as const, label: 'AB' },
            { key: 'lowercase' as const, label: 'ab' },
            { key: 'capitalize' as const, label: 'Ab' },
          ]).map(({ key, label }) => (
            <button key={key} style={toggleBtn(textTransform === key)} onClick={() => handleTextTransform(key)}>
              <span style={{ fontSize: 11 }}>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Text Color */}
      <div style={{ marginBottom: 8 }}>
        <span style={labelStyle}>文字颜色</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <input
            type="color"
            value={textColor}
            onChange={e => handleColorChange(e.target.value)}
            style={{ width: 28, height: 28, padding: 0, border: '1px solid #E7E5E4', borderRadius: 4, cursor: 'pointer', background: 'none' }}
          />
          <input
            type="text"
            value={textColor}
            onChange={e => handleColorChange(e.target.value)}
            style={{ ...inputStyle, flex: 1 }}
          />
        </div>
      </div>

      {/* Vertical Alignment */}
      <div>
        <span style={labelStyle}>垂直对齐</span>
        <div style={btnGroupStyle}>
          {([
            { key: 'top' as const, label: '顶部' },
            { key: 'middle' as const, label: '居中' },
            { key: 'bottom' as const, label: '底部' },
          ]).map(({ key, label }) => (
            <button key={key} style={toggleBtn(verticalAlign === key)} onClick={() => handleVerticalAlign(key)}>
              <span style={{ fontSize: 11 }}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
