import { useState, useRef, useEffect, useCallback } from 'react';
import { FONT_CATALOG, loadGoogleFont, isFontLoaded, type FontDef } from '../../utils/fonts';

interface FontManagerProps {
  value: string;
  onChange: (family: string) => void;
}

type CategoryFilter = 'all' | 'sans-serif' | 'serif' | 'monospace' | 'handwriting' | 'display';
type LangFilter = 'all' | 'zh' | 'en';

const CATEGORY_TABS: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'sans-serif', label: '无衬线' },
  { key: 'serif', label: '衬线' },
  { key: 'monospace', label: '等宽' },
  { key: 'handwriting', label: '手写' },
  { key: 'display', label: '装饰' },
];

const LANG_TABS: { key: LangFilter; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'zh', label: '中文' },
  { key: 'en', label: '英文' },
];

const PREVIEW_TEXT = '设计你的简历 Design Resume';

export function FontManager({ value, onChange }: FontManagerProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [lang, setLang] = useState<LangFilter>('all');
  const [loadingFont, setLoadingFont] = useState<string | null>(null);
  const [fontStatus, setFontStatus] = useState<Record<string, 'loaded' | 'loading' | 'idle'>>({});

  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        popoverRef.current && !popoverRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    setTimeout(() => document.addEventListener('mousedown', handler), 50);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Filter logic
  const filtered = FONT_CATALOG.filter((f) => {
    if (category !== 'all' && f.category !== category) return false;
    if (lang !== 'all') {
      if (lang === 'zh' && f.lang !== 'zh' && f.lang !== 'both') return false;
      if (lang === 'en' && f.lang !== 'en' && f.lang !== 'both') return false;
    }
    if (search) {
      const q = search.toLowerCase();
      return f.family.toLowerCase().includes(q) || f.label.toLowerCase().includes(q);
    }
    return true;
  });

  const handleHover = useCallback(async (font: FontDef) => {
    if (font.source === 'system' || isFontLoaded(font.family)) {
      setFontStatus((prev) => ({ ...prev, [font.family]: 'loaded' }));
      return;
    }
    if (fontStatus[font.family] === 'loading' || fontStatus[font.family] === 'loaded') return;
    setFontStatus((prev) => ({ ...prev, [font.family]: 'loading' }));
    try {
      await loadGoogleFont(font.family);
      setFontStatus((prev) => ({ ...prev, [font.family]: 'loaded' }));
    } catch {
      setFontStatus((prev) => ({ ...prev, [font.family]: 'idle' }));
    }
  }, [fontStatus]);

  const handleSelect = useCallback(async (font: FontDef) => {
    if (font.source !== 'system' && !isFontLoaded(font.family)) {
      setLoadingFont(font.family);
      try {
        await loadGoogleFont(font.family);
      } catch {
        // proceed anyway
      }
      setLoadingFont(null);
    }
    onChange(font.family);
    setOpen(false);
  }, [onChange]);

  // Find current font label
  const currentDef = FONT_CATALOG.find((f) => f.family === value);
  const displayLabel = currentDef?.label ?? value ?? '选择字体';

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Trigger button */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '5px 10px', borderRadius: 6,
          border: '1px solid #E7E5E4', background: '#FAFAF9',
          cursor: 'pointer', fontSize: 12, color: '#1C1917',
          fontFamily: value ? `'${value}', sans-serif` : 'inherit',
          minWidth: 120, justifyContent: 'space-between',
          transition: 'border-color 0.15s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#A8A29E'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E7E5E4'; }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {displayLabel}
        </span>
        <span style={{ fontSize: 10, color: '#A8A29E', flexShrink: 0 }}>
          {open ? '▲' : '▼'}
        </span>
      </button>

      {/* Popover */}
      {open && (
        <div
          ref={popoverRef}
          style={{
            position: 'absolute', top: '100%', left: 0, marginTop: 4,
            width: 260, maxHeight: 420, zIndex: 10000,
            background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: 10,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}
        >
          {/* Search */}
          <div style={{ padding: '8px 10px', borderBottom: '1px solid #F5F5F4' }}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索字体..."
              autoFocus
              style={{
                width: '100%', padding: '5px 8px', borderRadius: 6,
                border: '1px solid #E7E5E4', fontSize: 12, outline: 'none',
                color: '#1C1917', background: '#FAFAF9',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#A8A29E'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#E7E5E4'; }}
            />
          </div>

          {/* Category tabs */}
          <div style={{ padding: '4px 10px', borderBottom: '1px solid #F5F5F4', display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setCategory(tab.key)}
                style={{
                  padding: '2px 7px', borderRadius: 4, border: 'none',
                  fontSize: 11, cursor: 'pointer',
                  background: category === tab.key ? '#1C1917' : 'transparent',
                  color: category === tab.key ? '#FAFAF9' : '#78716C',
                  fontFamily: 'inherit', transition: 'all 0.15s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Language tabs */}
          <div style={{ padding: '4px 10px', borderBottom: '1px solid #F5F5F4', display: 'flex', gap: 2 }}>
            {LANG_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setLang(tab.key)}
                style={{
                  padding: '2px 7px', borderRadius: 4, border: 'none',
                  fontSize: 11, cursor: 'pointer',
                  background: lang === tab.key ? '#1C1917' : 'transparent',
                  color: lang === tab.key ? '#FAFAF9' : '#78716C',
                  fontFamily: 'inherit', transition: 'all 0.15s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Font list */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0' }}>
            {filtered.length === 0 && (
              <div style={{ padding: '20px 10px', textAlign: 'center', color: '#A8A29E', fontSize: 12 }}>
                未找到匹配字体
              </div>
            )}
            {filtered.map((font) => {
              const isSelected = font.family === value;
              const status = fontStatus[font.family] ??
                (font.source === 'system' || isFontLoaded(font.family) ? 'loaded' : 'idle');
              const isLoading = loadingFont === font.family || status === 'loading';

              return (
                <div
                  key={font.family}
                  onClick={() => handleSelect(font)}
                  onMouseEnter={(e) => {
                    handleHover(font);
                    if (!isSelected) e.currentTarget.style.background = '#F5F5F4';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'transparent';
                  }}
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 2,
                    padding: '6px 12px', cursor: 'pointer',
                    background: isSelected ? '#F5F5F4' : 'transparent',
                    borderLeft: isSelected ? '2px solid #1C1917' : '2px solid transparent',
                    transition: 'background 0.1s',
                  }}
                >
                  {/* Font name + status */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontSize: 12, fontWeight: isSelected ? 600 : 400,
                      color: isSelected ? '#1C1917' : '#44403C',
                    }}>
                      {font.label}
                      {font.label !== font.family && (
                        <span style={{ color: '#A8A29E', marginLeft: 4, fontSize: 10 }}>
                          {font.family}
                        </span>
                      )}
                    </span>
                    <span style={{ flexShrink: 0 }}>
                      {isLoading ? (
                        <span style={{
                          display: 'inline-block', width: 10, height: 10,
                          border: '1.5px solid #E7E5E4', borderTopColor: '#78716C',
                          borderRadius: '50%', animation: 'font-spin 0.6s linear infinite',
                        }} />
                      ) : status === 'loaded' ? (
                        <span style={{ fontSize: 10, color: '#16A34A' }}>●</span>
                      ) : (
                        <span style={{ fontSize: 10, color: '#E7E5E4' }}>○</span>
                      )}
                    </span>
                  </div>
                  {/* Preview */}
                  <div style={{
                    fontFamily: `'${font.family}', sans-serif`,
                    fontSize: 13, color: '#78716C', lineHeight: 1.4,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {PREVIEW_TEXT}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Spinner keyframes */}
          <style>{`
            @keyframes font-spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
