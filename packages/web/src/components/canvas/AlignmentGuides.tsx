import React from 'react';
import type { AlignmentGuide } from '@resume/shared';

interface AlignmentGuidesProps {
  guides: AlignmentGuide[];
  canvasWidth: number;
  canvasHeight: number;
}

const AlignmentGuides: React.FC<AlignmentGuidesProps> = ({ guides, canvasWidth, canvasHeight }) => {
  if (guides.length === 0) return null;

  return (
    <>
      {guides.map((guide, index) => {
        const isCenter = guide.type === 'center';
        const color = '#3B82F6';

        if (guide.axis === 'x') {
          return (
            <div
              key={`guide-x-${index}`}
              style={{
                position: 'absolute',
                left: guide.position,
                top: 0,
                width: 0,
                height: canvasHeight,
                borderLeft: isCenter
                  ? `1px dashed ${color}`
                  : `1px solid ${color}`,
                opacity: 0.8,
                pointerEvents: 'none',
                zIndex: 9999,
              }}
            />
          );
        }

        return (
          <div
            key={`guide-y-${index}`}
            style={{
              position: 'absolute',
              left: 0,
              top: guide.position,
              width: canvasWidth,
              height: 0,
              borderTop: isCenter
                ? `1px dashed ${color}`
                : `1px solid ${color}`,
              opacity: 0.8,
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          />
        );
      })}
    </>
  );
};

export default AlignmentGuides;
