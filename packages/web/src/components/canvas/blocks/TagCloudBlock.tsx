import React from 'react';
import type { Block, TagCloudBlockData } from '@resume/shared';

interface TagCloudBlockProps {
  block: Block;
  isEditing: boolean;
}

const TagCloudBlock: React.FC<TagCloudBlockProps> = ({ block }) => {
  const data = block.data as TagCloudBlockData;
  const fontFamily = block.style.fontFamily || "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";
  const textColor = block.style.color || '#1C1917';
  const gap = data.gap || 8;

  if (!data.tags || data.tags.length === 0) {
    return (
      <div style={{ padding: 8, color: '#A8A29E', fontSize: 13, fontFamily }}>
        暂无标签
      </div>
    );
  }

  const isGrid = data.layout === 'grid';

  return (
    <div
      style={{
        width: '100%',
        display: isGrid ? 'grid' : 'flex',
        flexWrap: isGrid ? undefined : 'wrap',
        gridTemplateColumns: isGrid ? 'repeat(auto-fill, minmax(80px, 1fr))' : undefined,
        gap,
        fontFamily,
      }}
    >
      {data.tags.map((tag, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            fontSize: 12,
            fontWeight: 500,
            color: tag.color || textColor,
            background: tag.bgColor || '#F5F5F4',
            borderRadius: 100,
            border: '1px solid #E7E5E4',
            whiteSpace: 'nowrap',
            lineHeight: 1.5,
            textAlign: 'center',
          }}
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
};

export { TagCloudBlock };
