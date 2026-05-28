import React, { useCallback, useMemo, useState } from 'react';
import { ICONS, ICON_CATEGORIES, getIconsByCategory } from '../../utils/icons';

interface IconPickerProps {
  onSelect: (iconName: string) => void;
  onClose: () => void;
  selectedIcon?: string;
}

export const IconPicker: React.FC<IconPickerProps> = ({ onSelect, onClose, selectedIcon }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(ICON_CATEGORIES[0]);

  const filteredIcons = useMemo(() => {
    if (search.trim()) {
      return ICONS.filter(icon =>
        icon.name.toLowerCase().includes(search.toLowerCase()) ||
        icon.category.includes(search)
      );
    }
    return getIconsByCategory(activeCategory);
  }, [search, activeCategory]);

  const handleSelect = useCallback((name: string) => {
    onSelect(name);
    onClose();
  }, [onSelect, onClose]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        borderBottom: '1px solid #E7E5E4',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#1C1917' }}>选择图标</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#78716C',
            fontSize: 16,
            padding: 0,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>

      {/* Search */}
      <div style={{ padding: '8px 12px' }}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="搜索图标..."
          style={{
            width: '100%',
            fontSize: 12,
            padding: '5px 8px',
            borderRadius: 6,
            border: '1px solid #E7E5E4',
            background: '#FAFAF9',
            color: '#1C1917',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Category tabs */}
      {!search.trim() && (
        <div style={{
          display: 'flex',
          gap: 0,
          padding: '0 12px',
          borderBottom: '1px solid #E7E5E4',
          overflowX: 'auto',
        }}>
          {ICON_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 8px',
                fontSize: 11,
                color: activeCategory === cat ? '#1C1917' : '#A8A29E',
                background: 'none',
                border: 'none',
                borderBottom: activeCategory === cat ? '2px solid #1C1917' : '2px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontWeight: activeCategory === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Icon grid */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: 12,
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 4,
        alignContent: 'start',
      }}>
        {filteredIcons.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#A8A29E', fontSize: 12, padding: 16 }}>
            未找到匹配图标
          </div>
        ) : (
          filteredIcons.map(icon => (
            <button
              key={icon.name}
              onClick={() => handleSelect(icon.name)}
              title={icon.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                aspectRatio: '1',
                background: selectedIcon === icon.name ? '#F5F5F4' : 'transparent',
                border: selectedIcon === icon.name ? '2px solid #1C1917' : '1px solid transparent',
                borderRadius: 6,
                cursor: 'pointer',
                padding: 4,
              }}
              onMouseEnter={e => {
                if (selectedIcon !== icon.name) {
                  e.currentTarget.style.background = '#F5F5F4';
                  e.currentTarget.style.borderColor = '#E7E5E4';
                }
              }}
              onMouseLeave={e => {
                if (selectedIcon !== icon.name) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#57534E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
            </button>
          ))
        )}
      </div>
    </div>
  );
};
