import React, { useCallback } from 'react';
import type { BlockType } from '@resume/shared';
import { useCanvasStore } from '../../stores/canvas.store';

interface BlockCategory {
  label: string;
  items: { type: BlockType; label: string; icon: string }[];
}

const CATEGORIES: BlockCategory[] = [
  {
    label: '基础',
    items: [
      { type: 'text', label: '文本', icon: '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>' },
      { type: 'heading', label: '标题', icon: '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 10l3 3-3 3"/>' },
      { type: 'image', label: '图片', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>' },
      { type: 'divider', label: '分割线', icon: '<line x1="2" y1="12" x2="22" y2="12"/>' },
      { type: 'spacer', label: '间距', icon: '<path d="M12 5v14M5 8l-3 4 3 4M19 8l3 4-3 4"/>' },
    ],
  },
  {
    label: '可视化',
    items: [
      { type: 'skill-bar', label: '技能条', icon: '<rect x="3" y="4" width="14" height="3" rx="1"/><rect x="3" y="10" width="10" height="3" rx="1"/><rect x="3" y="16" width="17" height="3" rx="1"/>' },
      { type: 'skill-radar', label: '雷达图', icon: '<polygon points="12 2 20 8 18 18 6 18 4 8"/><polygon points="12 6 16 10 15 15 9 15 8 10"/>' },
      { type: 'rating', label: '评分', icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' },
      { type: 'tag-cloud', label: '标签云', icon: '<rect x="2" y="4" width="6" height="4" rx="1"/><rect x="10" y="4" width="8" height="4" rx="1"/><rect x="2" y="10" width="10" height="4" rx="1"/><rect x="14" y="10" width="6" height="4" rx="1"/><rect x="2" y="16" width="7" height="4" rx="1"/><rect x="11" y="16" width="5" height="4" rx="1"/>' },
      { type: 'timeline', label: '时间线', icon: '<line x1="8" y1="2" x2="8" y2="22"/><circle cx="8" cy="6" r="2"/><circle cx="8" cy="14" r="2"/><line x1="12" y1="5" x2="20" y2="5"/><line x1="12" y1="7" x2="18" y2="7"/><line x1="12" y1="13" x2="20" y2="13"/><line x1="12" y1="15" x2="18" y2="15"/>' },
    ],
  },
  {
    label: '布局',
    items: [
      { type: 'section', label: '区块', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/>' },
      { type: 'columns', label: '多列', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/>' },
      { type: 'page-break', label: '分页', icon: '<polyline points="18 8 22 12 18 16"/><polyline points="6 8 2 12 6 16"/><line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="3 3"/>' },
    ],
  },
  {
    label: '其他',
    items: [
      { type: 'icon', label: '图标', icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' },
      { type: 'shape', label: '形状', icon: '<circle cx="12" cy="12" r="10"/>' },
      { type: 'table', label: '表格', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>' },
      { type: 'qrcode', label: '二维码', icon: '<rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="4" height="4" rx="0.5"/><rect x="18" y="18" width="4" height="4" rx="0.5"/>' },
    ],
  },
];

const BlockLibrary: React.FC = () => {
  const addBlock = useCanvasStore(s => s.addBlock);
  const select = useCanvasStore(s => s.select);

  const handleAdd = useCallback((type: BlockType) => {
    const id = addBlock(type);
    select(id);
  }, [addBlock, select]);

  return (
    <div style={{ padding: '0 12px 12px' }}>
      {CATEGORIES.map(cat => (
        <div key={cat.label} style={{ marginBottom: 12 }}>
          <div style={{
            fontSize: 11,
            color: '#A8A29E',
            fontWeight: 600,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            marginBottom: 6,
            paddingTop: 4,
          }}>
            {cat.label}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
            {cat.items.map(item => (
              <button
                key={item.type}
                onClick={() => handleAdd(item.type)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  padding: '8px 4px',
                  background: '#FAFAF9',
                  border: '1px solid #E7E5E4',
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'background 0.15s, border-color 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#F5F5F4';
                  e.currentTarget.style.borderColor = '#D6D3D1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#FAFAF9';
                  e.currentTarget.style.borderColor = '#E7E5E4';
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#78716C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <span style={{ fontSize: 10, color: '#57534E', lineHeight: 1 }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { BlockLibrary };
export default BlockLibrary;
