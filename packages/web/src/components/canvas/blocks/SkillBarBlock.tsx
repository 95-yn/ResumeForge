import React from 'react';
import type { Block, SkillBarBlockData } from '@resume/shared';

interface SkillBarBlockProps {
  block: Block;
  isEditing: boolean;
}

const SkillBarBlock: React.FC<SkillBarBlockProps> = ({ block }) => {
  const data = block.data as SkillBarBlockData;
  const fontFamily = block.style.fontFamily || "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";
  const textColor = block.style.color || '#1C1917';
  const barColor = data.barColor || '#1C1917';
  const trackColor = data.trackColor || '#F5F5F4';
  const barHeight = data.barHeight || 8;
  const maxLevel = data.maxLevel || 100;

  if (!data.items || data.items.length === 0) {
    return (
      <div style={{ padding: 8, color: '#A8A29E', fontSize: 13, fontFamily }}>
        暂无技能数据
      </div>
    );
  }

  return (
    <div style={{ width: '100%', fontFamily, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {data.items.map((item, index) => {
        const pct = Math.min(100, Math.max(0, (item.level / maxLevel) * 100));
        const itemBarColor = item.color || barColor;

        return (
          <div key={index}>
            {(data.showLabel || data.showPercentage) && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                {data.showLabel && (
                  <span style={{ fontSize: 13, color: textColor, fontWeight: 500 }}>
                    {item.name}
                  </span>
                )}
                {data.showPercentage && (
                  <span style={{ fontSize: 12, color: '#78716C' }}>
                    {Math.round(pct)}%
                  </span>
                )}
              </div>
            )}
            <div
              style={{
                width: '100%',
                height: barHeight,
                background: trackColor,
                borderRadius: barHeight / 2,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: itemBarColor,
                  borderRadius: barHeight / 2,
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { SkillBarBlock };
