import React from 'react';
import type { Block, RatingBlockData } from '@resume/shared';

interface RatingBlockProps {
  block: Block;
  isEditing: boolean;
}

const SYMBOL_PATHS: Record<string, string> = {
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  circle: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
  diamond: 'M12 2l8 10-8 10-8-10z',
  heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
};

const RatingBlock: React.FC<RatingBlockProps> = ({ block }) => {
  const data = block.data as RatingBlockData;
  const fontFamily = block.style.fontFamily || "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";
  const textColor = block.style.color || '#1C1917';
  const activeColor = data.activeColor || '#1C1917';
  const inactiveColor = data.inactiveColor || '#E7E5E4';
  const maxRating = data.maxRating || 5;
  const symbolPath = SYMBOL_PATHS[data.symbol] || SYMBOL_PATHS.star;

  if (!data.items || data.items.length === 0) {
    return (
      <div style={{ padding: 8, color: '#A8A29E', fontSize: 13, fontFamily }}>
        暂无评分数据
      </div>
    );
  }

  const renderSymbol = (filled: boolean, halfFilled: boolean, index: number) => {
    const size = 16;
    return (
      <svg
        key={index}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{ flexShrink: 0 }}
      >
        {halfFilled ? (
          <>
            <defs>
              <clipPath id={`half-${block.id}-${index}`}>
                <rect x="0" y="0" width="12" height="24" />
              </clipPath>
            </defs>
            <path d={symbolPath} fill={inactiveColor} stroke="none" />
            <path d={symbolPath} fill={activeColor} stroke="none" clipPath={`url(#half-${block.id}-${index})`} />
          </>
        ) : (
          <path d={symbolPath} fill={filled ? activeColor : inactiveColor} stroke="none" />
        )}
      </svg>
    );
  };

  return (
    <div style={{ width: '100%', fontFamily, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {data.items.map((item, idx) => {
        const fullCount = Math.floor(item.rating);
        const hasHalf = item.rating - fullCount >= 0.5;
        const emptyCount = maxRating - fullCount - (hasHalf ? 1 : 0);

        return (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                fontSize: 13,
                color: textColor,
                fontWeight: 500,
                minWidth: 60,
              }}
            >
              {item.name}
            </span>
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: fullCount }, (_, i) =>
                renderSymbol(true, false, i)
              )}
              {hasHalf && renderSymbol(false, true, fullCount)}
              {Array.from({ length: emptyCount }, (_, i) =>
                renderSymbol(false, false, fullCount + (hasHalf ? 1 : 0) + i)
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { RatingBlock };
