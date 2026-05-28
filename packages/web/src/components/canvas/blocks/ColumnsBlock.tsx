import React from 'react';
import type { Block, ColumnsBlockData } from '@resume/shared';
import { useCanvasStore } from '../../../stores/canvas.store';

interface ColumnsBlockProps {
  block: Block;
  isEditing: boolean;
}

const ColumnsBlock: React.FC<ColumnsBlockProps> = ({ block, isEditing }) => {
  const data = block.data as ColumnsBlockData;
  const blocks = useCanvasStore((s) => s.blocks);
  const children = block.children || [];
  const gap = data.gap || 20;
  const columns = data.columns || 2;
  const ratios = data.ratios || Array(columns).fill(1);
  const totalRatio = ratios.reduce((a, b) => a + b, 0);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap,
        minHeight: 40,
      }}
    >
      {Array.from({ length: columns }, (_, colIdx) => {
        const ratio = ratios[colIdx] || 1;
        const childId = children[colIdx];
        const childBlock = childId ? blocks[childId] : null;

        return (
          <div
            key={colIdx}
            style={{
              flex: `${ratio / totalRatio}`,
              minHeight: 40,
              position: 'relative',
              border: isEditing ? '1px dashed #E7E5E4' : 'none',
              borderRadius: 4,
              padding: isEditing ? 4 : 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {childBlock ? (
              <div
                style={{
                  fontSize: 13,
                  color: '#1C1917',
                  fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
                }}
              >
                <span style={{ color: '#A8A29E', fontSize: 11 }}>
                  [{childBlock.type}]
                </span>
              </div>
            ) : (
              <span style={{ color: '#D6D3D1', fontSize: 12 }}>
                {isEditing
                  ? `列 ${colIdx + 1} (${Math.round((ratio / totalRatio) * 100)}%)`
                  : ''}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export { ColumnsBlock };
