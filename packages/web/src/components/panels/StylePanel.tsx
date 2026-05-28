import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useCanvasStore } from '../../stores/canvas.store';
import { LayoutPanel } from './LayoutPanel';
import { FillPanel } from './FillPanel';
import { TypographyPanel } from './TypographyPanel';
import { BorderPanel } from './BorderPanel';
import { ShadowPanel } from './ShadowPanel';
import { TemplateVariablesPanel } from './TemplateVariablesPanel';

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, defaultOpen = true, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | 'auto'>('auto');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, open]);

  const toggle = useCallback(() => setOpen(prev => !prev), []);

  return (
    <div style={{ borderBottom: '1px solid #E7E5E4' }}>
      <button
        onClick={toggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <span style={{
          fontSize: 11,
          color: '#A8A29E',
          fontWeight: 600,
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        }}>
          {title}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A8A29E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? (typeof contentHeight === 'number' ? contentHeight + 20 : 2000) : 0,
          opacity: open ? 1 : 0,
          transition: 'max-height 0.25s ease, opacity 0.2s ease',
        }}
      >
        <div ref={contentRef} style={{ padding: '0 12px 10px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

const StylePanel: React.FC = () => {
  const selectedIds = useCanvasStore(s => s.selectedIds);
  const blocks = useCanvasStore(s => s.blocks);

  // Get the first selected block
  const selectedId = selectedIds.size > 0 ? Array.from(selectedIds)[0] : null;
  const block = selectedId ? blocks[selectedId] : null;

  const isTextBlock = block?.type === 'text' || block?.type === 'heading';

  // When no block selected, show template variables
  if (!block) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '10px 12px',
          borderBottom: '1px solid #E7E5E4',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#78716C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#1C1917' }}>模板设置</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          <div style={{ padding: '4px 12px 16px' }}>
            <TemplateVariablesPanel />
          </div>
        </div>
      </div>
    );
  }

  // Block selected - show style panels
  const BLOCK_TYPE_LABELS: Record<string, string> = {
    'text': '文本',
    'heading': '标题',
    'image': '图片',
    'icon': '图标',
    'shape': '形状',
    'divider': '分割线',
    'timeline': '时间线',
    'skill-bar': '技能条',
    'skill-radar': '雷达图',
    'rating': '评分',
    'tag-cloud': '标签云',
    'table': '表格',
    'qrcode': '二维码',
    'section': '区块',
    'columns': '多列',
    'spacer': '间距',
    'page-break': '分页',
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '10px 12px',
        borderBottom: '1px solid #E7E5E4',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        flexShrink: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#78716C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#1C1917' }}>
          {block.name || BLOCK_TYPE_LABELS[block.type] || block.type}
        </span>
        {selectedIds.size > 1 && (
          <span style={{ fontSize: 10, color: '#A8A29E', marginLeft: 'auto' }}>
            +{selectedIds.size - 1}
          </span>
        )}
      </div>

      {/* Scrollable sections */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <CollapsibleSection title="布局">
          <LayoutPanel block={block} />
        </CollapsibleSection>

        {isTextBlock && (
          <CollapsibleSection title="字体">
            <TypographyPanel block={block} />
          </CollapsibleSection>
        )}

        <CollapsibleSection title="填充">
          <FillPanel block={block} />
        </CollapsibleSection>

        <CollapsibleSection title="边框">
          <BorderPanel block={block} />
        </CollapsibleSection>

        <CollapsibleSection title="阴影" defaultOpen={false}>
          <ShadowPanel block={block} />
        </CollapsibleSection>
      </div>
    </div>
  );
};

export { StylePanel };
export default StylePanel;
