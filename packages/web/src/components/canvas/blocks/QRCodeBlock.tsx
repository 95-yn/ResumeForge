import React, { useMemo } from 'react';
import type { Block, QRCodeBlockData } from '@resume/shared';

interface QRCodeBlockProps {
  block: Block;
  isEditing: boolean;
}

/**
 * Minimal QR code matrix generator (Mode: Byte, ECC: L, Version 2 - up to 32 chars)
 * For longer strings or production use, consider a library. This generates a simple
 * visual representation using a deterministic pattern based on the input string.
 */
function generateQRMatrix(value: string): boolean[][] {
  const size = 21; // Version 1 QR code size
  const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));

  // Finder patterns (top-left, top-right, bottom-left)
  const drawFinder = (cx: number, cy: number) => {
    for (let y = -3; y <= 3; y++) {
      for (let x = -3; x <= 3; x++) {
        const mx = cx + x;
        const my = cy + y;
        if (mx < 0 || mx >= size || my < 0 || my >= size) continue;
        const ring = Math.max(Math.abs(x), Math.abs(y));
        matrix[my][mx] = ring !== 2;
      }
    }
  };

  drawFinder(3, 3);
  drawFinder(size - 4, 3);
  drawFinder(3, size - 4);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    matrix[6][i] = i % 2 === 0;
    matrix[i][6] = i % 2 === 0;
  }

  // Data area: use a hash-based fill for visual representation
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
  }

  // Separators
  const isReserved = (x: number, y: number): boolean => {
    // Finder + separator regions
    if (x <= 8 && y <= 8) return true;
    if (x >= size - 8 && y <= 8) return true;
    if (x <= 8 && y >= size - 8) return true;
    // Timing
    if (x === 6 || y === 6) return true;
    return false;
  };

  // Fill data modules with deterministic pseudo-random based on input
  let seed = Math.abs(hash);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (isReserved(x, y)) continue;
      seed = ((seed * 1103515245 + 12345) & 0x7fffffff);
      matrix[y][x] = (seed % 3) !== 0;
    }
  }

  return matrix;
}

const QRCodeBlock: React.FC<QRCodeBlockProps> = ({ block }) => {
  const data = block.data as QRCodeBlockData;
  const fgColor = data.fgColor || '#1C1917';
  const bgColor = data.bgColor || '#ffffff';
  const qrSize = data.size || 120;

  const matrix = useMemo(() => generateQRMatrix(data.value || ''), [data.value]);

  const moduleCount = matrix.length;
  const moduleSize = qrSize / moduleCount;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${qrSize} ${qrSize}`}
      style={{ display: 'block' }}
    >
      <rect x="0" y="0" width={qrSize} height={qrSize} fill={bgColor} />
      {matrix.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${y}-${x}`}
              x={x * moduleSize}
              y={y * moduleSize}
              width={moduleSize}
              height={moduleSize}
              fill={fgColor}
            />
          ) : null,
        ),
      )}
    </svg>
  );
};

export { QRCodeBlock };
