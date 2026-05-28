import React from 'react';
import type { Block, TimelineBlockData } from '@resume/shared';

interface TimelineBlockProps {
  block: Block;
  isEditing: boolean;
}

const TimelineBlock: React.FC<TimelineBlockProps> = ({ block }) => {
  const data = block.data as TimelineBlockData;
  const lineColor = data.lineColor || '#E7E5E4';
  const dotColor = data.dotColor || '#1C1917';
  const fontFamily = block.style.fontFamily || "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";
  const textColor = block.style.color || '#1C1917';
  const secondaryColor = '#78716C';

  if (!data.items || data.items.length === 0) {
    return (
      <div style={{ padding: 16, color: '#A8A29E', fontSize: 13, fontFamily }}>
        暂无时间线数据
      </div>
    );
  }

  return (
    <div style={{ width: '100%', fontFamily }}>
      {data.items.map((item, index) => {
        const isLast = index === data.items.length - 1;
        const isRight = data.layout === 'right';
        const isAlternate = data.layout === 'alternate';
        const showOnRight = isAlternate ? index % 2 === 0 : !isRight;

        return (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: showOnRight ? 'row' : 'row-reverse',
              gap: 12,
              minHeight: 60,
            }}
          >
            {/* Content side */}
            <div style={{ flex: 1, paddingBottom: isLast ? 0 : 16, textAlign: showOnRight ? 'left' : 'right' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: textColor, lineHeight: 1.4 }}>
                {item.title}
              </div>
              {item.subtitle && (
                <div style={{ fontSize: 13, color: secondaryColor, marginTop: 2 }}>
                  {item.subtitle}
                </div>
              )}
              <div style={{ fontSize: 12, color: secondaryColor, marginTop: 2, opacity: 0.8 }}>
                {item.date}
              </div>
              {item.description && (
                <div style={{ fontSize: 13, color: textColor, marginTop: 6, lineHeight: 1.5, opacity: 0.85 }}>
                  {item.description}
                </div>
              )}
              {item.highlights && item.highlights.length > 0 && (
                <ul style={{ margin: '6px 0 0 0', padding: '0 0 0 16px', fontSize: 12, color: textColor, lineHeight: 1.6 }}>
                  {item.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Timeline line + dot */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 20,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: dotColor,
                  border: `2px solid ${lineColor}`,
                  flexShrink: 0,
                  marginTop: 4,
                }}
              />
              {!isLast && (
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    background: lineColor,
                    marginTop: 4,
                  }}
                />
              )}
            </div>

            {/* Spacer on the opposite side (only for alternate) */}
            {isAlternate && <div style={{ flex: 1 }} />}
          </div>
        );
      })}
    </div>
  );
};

export { TimelineBlock };
