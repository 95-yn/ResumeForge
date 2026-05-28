import React from 'react';
import type { Block, ShapeBlockData } from '@resume/shared';

interface ShapeBlockProps {
  block: Block;
  isEditing: boolean;
}

const ShapeBlock: React.FC<ShapeBlockProps> = ({ block }) => {
  const data = block.data as ShapeBlockData;
  const fill = data.fill || 'none';
  const stroke = data.stroke || '#1C1917';
  const strokeWidth = data.strokeWidth ?? 1;

  const renderShape = () => {
    switch (data.shape) {
      case 'rectangle':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect
              x={strokeWidth / 2}
              y={strokeWidth / 2}
              width={100 - strokeWidth}
              height={100 - strokeWidth}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
              rx={typeof block.style.borderRadius === 'number' ? block.style.borderRadius : 0}
            />
          </svg>
        );

      case 'circle':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <circle cx="50" cy="50" r={50 - strokeWidth / 2} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
          </svg>
        );

      case 'ellipse':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <ellipse cx="50" cy="50" rx={50 - strokeWidth / 2} ry={50 - strokeWidth / 2} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
          </svg>
        );

      case 'triangle':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,2 98,98 2,98" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          </svg>
        );

      case 'diamond':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,2 98,50 50,98 2,50" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          </svg>
        );

      case 'line':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="50" x2="100" y2="50" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          </svg>
        );

      case 'arrow':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <marker id={`arrow-${block.id}`} markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={stroke} />
              </marker>
            </defs>
            <line x1="5" y1="50" x2="90" y2="50" stroke={stroke} strokeWidth={strokeWidth} markerEnd={`url(#arrow-${block.id})`} />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {renderShape()}
    </div>
  );
};

export { ShapeBlock };
