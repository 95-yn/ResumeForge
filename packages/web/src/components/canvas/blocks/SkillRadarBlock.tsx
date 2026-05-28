import React from 'react';
import type { Block, SkillRadarBlockData } from '@resume/shared';

interface SkillRadarBlockProps {
  block: Block;
  isEditing: boolean;
}

const SkillRadarBlock: React.FC<SkillRadarBlockProps> = ({ block }) => {
  const data = block.data as SkillRadarBlockData;
  const lineColor = data.lineColor || '#E7E5E4';
  const fillColor = data.fillColor || 'rgba(28, 25, 23, 0.15)';
  const textColor = block.style.color || '#1C1917';
  const maxLevel = data.maxLevel || 100;
  const items = data.items || [];
  const n = items.length;

  if (n < 3) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#A8A29E',
          fontSize: 13,
          fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
        }}
      >
        至少需要3项技能
      </div>
    );
  }

  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.35;
  const labelRadius = size * 0.47;
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  const getPoint = (index: number, r: number): [number, number] => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };

  // Grid polygons
  const gridPolygons = levels.map((level) => {
    const points = Array.from({ length: n }, (_, i) => getPoint(i, radius * level));
    return points.map(([x, y]) => `${x},${y}`).join(' ');
  });

  // Axis lines
  const axes = Array.from({ length: n }, (_, i) => getPoint(i, radius));

  // Data polygon
  const dataPoints = items.map((item, i) => {
    const r = (Math.min(item.level, maxLevel) / maxLevel) * radius;
    return getPoint(i, r);
  });
  const dataPolygon = dataPoints.map(([x, y]) => `${x},${y}`).join(' ');

  // Labels
  const labelPositions = Array.from({ length: n }, (_, i) => ({
    pos: getPoint(i, labelRadius),
    name: items[i].name,
    index: i,
  }));

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
      {/* Grid */}
      {gridPolygons.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill="none"
          stroke={lineColor}
          strokeWidth={i === levels.length - 1 ? 1 : 0.5}
          opacity={0.6}
        />
      ))}

      {/* Axes */}
      {axes.map(([x, y], i) => (
        <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={lineColor} strokeWidth={0.5} opacity={0.6} />
      ))}

      {/* Data polygon */}
      <polygon
        points={dataPolygon}
        fill={fillColor}
        stroke={data.lineColor || '#1C1917'}
        strokeWidth={1.5}
        opacity={0.85}
      />

      {/* Data points */}
      {dataPoints.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill={data.lineColor || '#1C1917'} />
      ))}

      {/* Labels */}
      {data.showLabels &&
        labelPositions.map(({ pos: [x, y], name, index }) => {
          const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
          const cos = Math.cos(angle);
          let textAnchor: 'start' | 'middle' | 'end' = 'middle';
          if (cos > 0.1) textAnchor = 'start';
          else if (cos < -0.1) textAnchor = 'end';

          return (
            <text
              key={index}
              x={x}
              y={y}
              textAnchor={textAnchor}
              dominantBaseline="central"
              fontSize={11}
              fill={textColor}
              fontFamily="'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif"
            >
              {name}
            </text>
          );
        })}
    </svg>
  );
};

export { SkillRadarBlock };
