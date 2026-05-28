import React, { useState, useCallback } from 'react';
import type { Block, TableBlockData } from '@resume/shared';
import { useCanvasStore } from '../../../stores/canvas.store';

interface TableBlockProps {
  block: Block;
  isEditing: boolean;
}

const TableBlock: React.FC<TableBlockProps> = ({ block, isEditing }) => {
  const data = block.data as TableBlockData;
  const updateBlockData = useCanvasStore((s) => s.updateBlockData);
  const fontFamily = block.style.fontFamily || "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif";
  const textColor = block.style.color || '#1C1917';
  const borderColor = data.borderColor || '#E7E5E4';
  const headerBg = data.headerBg || '#F5F5F4';

  const [editingCell, setEditingCell] = useState<[number, number] | null>(null);

  const handleCellChange = useCallback(
    (row: number, col: number, value: string) => {
      const newCells = data.cells.map((r) => [...r]);
      newCells[row][col] = value;
      updateBlockData(block.id, { cells: newCells });
    },
    [block.id, data.cells, updateBlockData],
  );

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (isEditing) {
        setEditingCell([row, col]);
      }
    },
    [isEditing],
  );

  const handleCellBlur = useCallback(() => {
    setEditingCell(null);
  }, []);

  const rows = data.rows || data.cells.length;
  const cols = data.cols || (data.cells[0]?.length ?? 0);

  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily,
        fontSize: 13,
        color: textColor,
        tableLayout: 'fixed',
      }}
    >
      <tbody>
        {Array.from({ length: rows }, (_, rowIdx) => {
          const isHeader = (data.headerRow && rowIdx === 0);
          const CellTag = isHeader ? 'th' : 'td';

          return (
            <tr key={rowIdx}>
              {Array.from({ length: cols }, (_, colIdx) => {
                const isHeaderCol = data.headerCol && colIdx === 0;
                const cellValue = data.cells[rowIdx]?.[colIdx] ?? '';
                const isCellEditing =
                  editingCell && editingCell[0] === rowIdx && editingCell[1] === colIdx;
                const cellWidth = data.colWidths?.[colIdx]
                  ? `${data.colWidths[colIdx]}%`
                  : undefined;

                return (
                  <CellTag
                    key={colIdx}
                    style={{
                      border: `1px solid ${borderColor}`,
                      padding: '6px 8px',
                      background: isHeader || isHeaderCol ? headerBg : 'transparent',
                      fontWeight: isHeader || isHeaderCol ? 600 : 400,
                      textAlign: 'left',
                      verticalAlign: 'top',
                      width: cellWidth,
                      cursor: isEditing ? 'text' : 'default',
                      position: 'relative',
                    }}
                    onClick={() => handleCellClick(rowIdx, colIdx)}
                  >
                    {isCellEditing ? (
                      <input
                        autoFocus
                        value={cellValue}
                        onChange={(e) => handleCellChange(rowIdx, colIdx, e.target.value)}
                        onBlur={handleCellBlur}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === 'Escape') {
                            handleCellBlur();
                          }
                          if (e.key === 'Tab') {
                            e.preventDefault();
                            const nextCol = colIdx + 1 < cols ? colIdx + 1 : 0;
                            const nextRow = nextCol === 0 ? rowIdx + 1 : rowIdx;
                            if (nextRow < rows) {
                              setEditingCell([nextRow, nextCol]);
                            } else {
                              handleCellBlur();
                            }
                          }
                        }}
                        style={{
                          border: 'none',
                          outline: 'none',
                          background: 'transparent',
                          width: '100%',
                          fontFamily: 'inherit',
                          fontSize: 'inherit',
                          fontWeight: 'inherit',
                          color: 'inherit',
                          padding: 0,
                          margin: 0,
                        }}
                      />
                    ) : (
                      cellValue || (isEditing ? <span style={{ color: '#D6D3D1' }}>-</span> : '')
                    )}
                  </CellTag>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { TableBlock };
