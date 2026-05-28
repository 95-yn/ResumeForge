import React from 'react';
import type { Block, DividerBlockData } from '@resume/shared';

interface DividerBlockProps {
  block: Block;
  isEditing: boolean;
}

const ORNAMENT_SVG = `
<svg width="40" height="10" viewBox="0 0 40 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="5" r="3" fill="currentColor"/>
  <circle cx="8" cy="5" r="1.5" fill="currentColor"/>
  <circle cx="32" cy="5" r="1.5" fill="currentColor"/>
</svg>
`;

const DividerBlock: React.FC<DividerBlockProps> = ({ block }) => {
  const data = block.data as DividerBlockData;
  const color = data.color || block.style.color || '#E7E5E4';
  const thickness = data.thickness || 1;

  if (data.variant === 'gradient') {
    return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: '100%' }}>
        <div
          style={{
            width: '100%',
            height: thickness,
            background: `linear-gradient(90deg, transparent 0%, ${color} 30%, ${color} 70%, transparent 100%)`,
          }}
        />
      </div>
    );
  }

  if (data.variant === 'ornament') {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: '100%',
          color,
        }}
      >
        <div style={{ flex: 1, height: thickness, background: color }} />
        <div dangerouslySetInnerHTML={{ __html: ORNAMENT_SVG }} />
        <div style={{ flex: 1, height: thickness, background: color }} />
      </div>
    );
  }

  const borderStyleMap: Record<string, string> = {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  };

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: '100%' }}>
      <div
        style={{
          width: '100%',
          height: 0,
          borderTop: `${thickness}px ${borderStyleMap[data.variant] || 'solid'} ${color}`,
        }}
      />
    </div>
  );
};

export { DividerBlock };
