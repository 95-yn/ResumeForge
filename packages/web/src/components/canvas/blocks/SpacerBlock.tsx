import React from 'react';
import type { Block, SpacerBlockData } from '@resume/shared';

interface SpacerBlockProps {
  block: Block;
  isEditing: boolean;
}

const SpacerBlock: React.FC<SpacerBlockProps> = ({ block, isEditing }) => {
  const data = block.data as SpacerBlockData;

  return (
    <div
      style={{
        width: '100%',
        height: data.height || 20,
        position: 'relative',
      }}
    >
      {isEditing && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed #D6D3D1',
            borderRadius: 2,
          }}
        >
          <span style={{ fontSize: 11, color: '#A8A29E' }}>
            {data.height || 20}px
          </span>
        </div>
      )}
    </div>
  );
};

export { SpacerBlock };
