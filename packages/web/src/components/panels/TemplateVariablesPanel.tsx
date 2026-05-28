import React, { useCallback, useState } from 'react';
import { useCanvasStore } from '../../stores/canvas.store';
import { THEME_PRESETS } from '../../utils/colors';
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

const sectionHeader: React.CSSProperties = {
  fontSize: 11,
  color: '#A8A29E',
  fontWeight: 600,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  marginBottom: 8,
  marginTop: 12,
};

export const TemplateVariablesPanel: React.FC = () => {
  const variables = useCanvasStore(s => s.variables);
  const updateVariables = useCanvasStore(s => s.updateVariables);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const handleColorChange = useCallback((field: 'primaryColor' | 'secondaryColor' | 'accentColor', color: string) => {
    updateVariables({ [field]: color });
    setActivePreset(null);
  }, [updateVariables]);

  const handleFontChange = useCallback((field: 'headingFont' | 'bodyFont', family: string) => {
    const font = FONT_CATALOG.find(f => f.family === family);
    if (font && font.source === 'google') {
      loadGoogleFont(family, font.weights);
    }
    updateVariables({ [field]: family });
  }, [updateVariables]);

  const handleNumberChange = useCallback((field: 'baseFontSize' | 'sectionSpacing' | 'pageMargin', e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) updateVariables({ [field]: val });
  }, [updateVariables]);

  const applyPreset = useCallback((preset: typeof THEME_PRESETS[number]) => {
    updateVariables({
      primaryColor: preset.primary,
      secondaryColor: preset.secondary,
      accentColor: preset.accent,
    });
    setActivePreset(preset.name);
  }, [updateVariables]);

  const colorFields: { key: 'primaryColor' | 'secondaryColor' | 'accentColor'; label: string }[] = [
    { key: 'primaryColor', label: '主色' },
    { key: 'secondaryColor', label: '副色' },
    { key: 'accentColor', label: '强调色' },
  ];

  return (
    <div>
      {/* Theme presets */}
      <div style={sectionHeader}>主题预设</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 12 }}>
        {THEME_PRESETS.map(preset => (
          <button
            key={preset.name}
            onClick={() => applyPreset(preset)}
            style={{
              padding: '6px 8px',
              border: activePreset === preset.name ? '2px solid #1C1917' : '1px solid #E7E5E4',
              borderRadius: 6,
              background: '#FAFAF9',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <div style={{ display: 'flex', gap: 2 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: preset.primary }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: preset.secondary }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: preset.accent }} />
            </div>
            <span style={{ fontSize: 11, color: '#57534E' }}>{preset.name}</span>
          </button>
        ))}
      </div>

      {/* Colors */}
      <div style={sectionHeader}>颜色</div>
      {colorFields.map(({ key, label }) => (
        <div key={key} style={{ marginBottom: 6 }}>
          <span style={labelStyle}>{label}</span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <input
              type="color"
              value={variables[key]}
              onChange={e => handleColorChange(key, e.target.value)}
              style={{ width: 28, height: 28, padding: 0, border: '1px solid #E7E5E4', borderRadius: 4, cursor: 'pointer', background: 'none' }}
            />
            <input
              type="text"
              value={variables[key]}
              onChange={e => handleColorChange(key, e.target.value)}
              style={{ ...inputStyle, flex: 1 }}
            />
          </div>
        </div>
      ))}

      {/* Fonts */}
      <div style={sectionHeader}>字体</div>
      <div style={{ marginBottom: 6 }}>
        <span style={labelStyle}>标题字体</span>
        <select
          value={variables.headingFont}
          onChange={e => handleFontChange('headingFont', e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          {FONT_CATALOG.map(f => (
            <option key={f.family} value={f.family}>
              {f.label} ({f.family})
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 8 }}>
        <span style={labelStyle}>正文字体</span>
        <select
          value={variables.bodyFont}
          onChange={e => handleFontChange('bodyFont', e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          {FONT_CATALOG.map(f => (
            <option key={f.family} value={f.family}>
              {f.label} ({f.family})
            </option>
          ))}
        </select>
      </div>

      {/* Spacing & Size */}
      <div style={sectionHeader}>排版</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        <div>
          <span style={labelStyle}>基础字号</span>
          <input
            type="number"
            style={inputStyle}
            value={variables.baseFontSize}
            onChange={e => handleNumberChange('baseFontSize', e)}
            min={8}
            max={24}
          />
        </div>
        <div>
          <span style={labelStyle}>段落间距</span>
          <input
            type="number"
            style={inputStyle}
            value={variables.sectionSpacing}
            onChange={e => handleNumberChange('sectionSpacing', e)}
            min={0}
          />
        </div>
        <div>
          <span style={labelStyle}>页边距</span>
          <input
            type="number"
            style={inputStyle}
            value={variables.pageMargin}
            onChange={e => handleNumberChange('pageMargin', e)}
            min={0}
          />
        </div>
      </div>
    </div>
  );
};
