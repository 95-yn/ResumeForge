import { useState, useCallback, useRef, useEffect } from 'react';
import { useCanvasStore } from '../stores/canvas.store';
import { useCanvasHistory } from './useCanvasHistory';
import { findAlignmentGuides, rectsOverlap, snapToGrid as snapToGridUtil } from '../utils/geometry';
import type { Block } from '@resume/shared';

const A4_WIDTH = 793.7;
const A4_HEIGHT = 1122.5;

type HandlePosition = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';

interface DragState {
  type: 'move' | 'resize' | 'rotate' | 'select' | 'pan';
  blockId?: string;
  handle?: HandlePosition;
  startX: number;
  startY: number;
  startBlockX?: number;
  startBlockY?: number;
  startWidth?: number;
  startHeight?: number;
  startRotation?: number;
  startPanX?: number;
  startPanY?: number;
  blockCenter?: { x: number; y: number };
  moved: boolean;
  /** Initial positions of all selected blocks (for multi-select move) */
  startPositions?: Map<string, { x: number; y: number }>;
}

interface SelectionRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ContextMenuPos {
  x: number;
  y: number;
}

export function useCanvasInteractions(
  canvasRef: React.RefObject<HTMLDivElement | null>,
  paperRef: React.RefObject<HTMLDivElement | null>,
) {
  const [selectionRect, setSelectionRect] = useState<SelectionRect | null>(null);
  const [contextMenu, setContextMenu] = useState<ContextMenuPos | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const spaceRef = useRef(false);

  const store = useCanvasStore;
  const { debouncedPushHistory } = useCanvasHistory();

  // Track space key for panning
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat) {
        spaceRef.current = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        spaceRef.current = false;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  /** Convert screen coordinates to paper-space coordinates */
  const screenToPaper = useCallback(
    (screenX: number, screenY: number): { x: number; y: number } => {
      const paper = paperRef.current;
      if (!paper) return { x: 0, y: 0 };
      const rect = paper.getBoundingClientRect();
      const zoom = store.getState().zoom;
      return {
        x: (screenX - rect.left) / zoom,
        y: (screenY - rect.top) / zoom,
      };
    },
    [paperRef, store],
  );

  const handleBlockMouseDown = useCallback(
    (e: React.MouseEvent, blockId: string) => {
      e.stopPropagation();
      if (e.button !== 0) return;

      const state = store.getState();
      const block = state.blocks[blockId];
      if (!block) return;

      // Close context menu
      setContextMenu(null);

      // Check if clicking on a resize handle
      const target = e.target as HTMLElement;
      const resizeHandle = target.getAttribute('data-resize-handle') as HandlePosition | null;
      const rotationHandle = target.getAttribute('data-rotation-handle');

      if (rotationHandle && !block.locked) {
        const w = typeof block.size.width === 'number' ? block.size.width : 0;
        const h = typeof block.size.height === 'number' ? block.size.height : 0;
        dragRef.current = {
          type: 'rotate',
          blockId,
          startX: e.clientX,
          startY: e.clientY,
          startRotation: block.rotation,
          blockCenter: {
            x: block.position.x + w / 2,
            y: block.position.y + h / 2,
          },
          moved: false,
        };
        return;
      }

      if (resizeHandle && !block.locked) {
        dragRef.current = {
          type: 'resize',
          blockId,
          handle: resizeHandle,
          startX: e.clientX,
          startY: e.clientY,
          startBlockX: block.position.x,
          startBlockY: block.position.y,
          startWidth: typeof block.size.width === 'number' ? block.size.width : 0,
          startHeight: typeof block.size.height === 'number' ? block.size.height : 0,
          moved: false,
        };
        return;
      }

      // Selection logic
      if (!state.selectedIds.has(blockId)) {
        store.getState().select(blockId, e.shiftKey || e.metaKey);
      } else if (e.shiftKey || e.metaKey) {
        store.getState().select(blockId, true);
        return;
      }

      if (block.locked) return;

      // Capture initial positions for all selected blocks (for multi-select move)
      const currentState = store.getState();
      const startPositions = new Map<string, { x: number; y: number }>();
      currentState.selectedIds.forEach(id => {
        const b = currentState.blocks[id];
        if (b) startPositions.set(id, { x: b.position.x, y: b.position.y });
      });

      // Start move drag
      dragRef.current = {
        type: 'move',
        blockId,
        startX: e.clientX,
        startY: e.clientY,
        startBlockX: block.position.x,
        startBlockY: block.position.y,
        moved: false,
        startPositions,
      };
    },
    [store],
  );

  const handleBlockDoubleClick = useCallback(
    (e: React.MouseEvent, blockId: string) => {
      e.stopPropagation();
      const block = store.getState().blocks[blockId];
      if (!block) return;
      if (block.type === 'text' || block.type === 'heading') {
        store.getState().setEditing(blockId);
      }
    },
    [store],
  );

  const handleCanvasMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 2) return; // right click handled by context menu
      setContextMenu(null);

      const target = e.target as HTMLElement;

      // Check if clicking on a resize handle (from SelectionOverlay)
      const resizeHandle = target.getAttribute('data-resize-handle') as HandlePosition | null;
      if (resizeHandle) {
        const state = store.getState();
        const selectedBlocks = state.getSelectedBlocks();
        if (selectedBlocks.length === 1) {
          const block = selectedBlocks[0];
          if (!block.locked) {
            dragRef.current = {
              type: 'resize',
              blockId: block.id,
              handle: resizeHandle,
              startX: e.clientX,
              startY: e.clientY,
              startBlockX: block.position.x,
              startBlockY: block.position.y,
              startWidth: typeof block.size.width === 'number' ? block.size.width : 0,
              startHeight: typeof block.size.height === 'number' ? block.size.height : 0,
              moved: false,
            };
          }
        }
        return;
      }

      // Check for rotation handle
      const rotationHandle = target.getAttribute('data-rotation-handle');
      if (rotationHandle) {
        const state = store.getState();
        const selectedBlocks = state.getSelectedBlocks();
        if (selectedBlocks.length === 1) {
          const block = selectedBlocks[0];
          if (!block.locked) {
            const w = typeof block.size.width === 'number' ? block.size.width : 0;
            const h = typeof block.size.height === 'number' ? block.size.height : 0;
            dragRef.current = {
              type: 'rotate',
              blockId: block.id,
              startX: e.clientX,
              startY: e.clientY,
              startRotation: block.rotation,
              blockCenter: {
                x: block.position.x + w / 2,
                y: block.position.y + h / 2,
              },
              moved: false,
            };
          }
        }
        return;
      }

      // Space + drag = pan
      if (spaceRef.current || e.button === 1) {
        const { pan } = store.getState();
        dragRef.current = {
          type: 'pan',
          startX: e.clientX,
          startY: e.clientY,
          startPanX: pan.x,
          startPanY: pan.y,
          moved: false,
        };
        store.getState().setIsPanning(true);
        return;
      }

      // Check if clicked on a block — initiate drag from canvas level
      const blockEl = target.closest('[data-block-id]') as HTMLElement | null;
      if (blockEl) {
        const blockId = blockEl.getAttribute('data-block-id');
        if (blockId) {
          const state = store.getState();
          const block = state.blocks[blockId];
          if (block) {
            // Selection logic
            if (!state.selectedIds.has(blockId)) {
              store.getState().select(blockId, e.shiftKey || e.metaKey);
            } else if (e.shiftKey || e.metaKey) {
              store.getState().select(blockId, true);
              return;
            }

            if (!block.locked) {
              // Capture initial positions for all selected blocks
              const currentState = store.getState();
              const startPositions = new Map<string, { x: number; y: number }>();
              currentState.selectedIds.forEach(id => {
                const b = currentState.blocks[id];
                if (b) startPositions.set(id, { x: b.position.x, y: b.position.y });
              });

              dragRef.current = {
                type: 'move',
                blockId,
                startX: e.clientX,
                startY: e.clientY,
                startBlockX: block.position.x,
                startBlockY: block.position.y,
                moved: false,
                startPositions,
              };
            }
          }
        }
        return;
      }

      // Check if clicked on selection overlay
      const overlayEl = target.closest('[data-selection-overlay]');
      if (overlayEl) return;

      // Clicked on empty canvas - start rubber band selection
      store.getState().clearSelection();
      dragRef.current = {
        type: 'select',
        startX: e.clientX,
        startY: e.clientY,
        moved: false,
      };
    },
    [store],
  );

  const handleCanvasMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const drag = dragRef.current;
      if (!drag) return;

      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;
      const state = store.getState();
      const zoom = state.zoom;

      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        drag.moved = true;
      }

      if (drag.type === 'pan') {
        store.getState().setPan(
          (drag.startPanX ?? 0) + dx,
          (drag.startPanY ?? 0) + dy,
        );
        return;
      }

      if (drag.type === 'select') {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const canvasRect = canvas.getBoundingClientRect();
        const x1 = drag.startX - canvasRect.left;
        const y1 = drag.startY - canvasRect.top;
        const x2 = e.clientX - canvasRect.left;
        const y2 = e.clientY - canvasRect.top;
        setSelectionRect({
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1),
        });
        return;
      }

      if (drag.type === 'move' && drag.blockId) {
        const scaledDx = dx / zoom;
        const scaledDy = dy / zoom;
        let newX = (drag.startBlockX ?? 0) + scaledDx;
        let newY = (drag.startBlockY ?? 0) + scaledDy;

        const { canvas: canvasConfig, blocks: allBlocks, blockOrder } = state;

        // Snap to grid
        if (canvasConfig.snapToGrid) {
          newX = snapToGridUtil(newX, canvasConfig.gridSize);
          newY = snapToGridUtil(newY, canvasConfig.gridSize);
        }

        // Find alignment guides
        const block = allBlocks[drag.blockId];
        if (block) {
          const movingBlock: Block = {
            ...block,
            position: { x: newX, y: newY },
          };
          const otherBlocks = blockOrder
            .map(id => allBlocks[id])
            .filter(b => b && b.id !== drag.blockId);
          const { guides, snappedX, snappedY } = findAlignmentGuides(
            movingBlock,
            otherBlocks,
            A4_WIDTH,
            A4_HEIGHT,
          );
          store.getState().setGuides(guides);
          if (snappedX !== null) newX = snappedX;
          if (snappedY !== null) newY = snappedY;
        }

        // Move all selected blocks by the same delta
        const selectedIds = state.selectedIds;
        if (selectedIds.size > 1 && selectedIds.has(drag.blockId) && drag.startPositions) {
          const offsetX = newX - (drag.startBlockX ?? 0);
          const offsetY = newY - (drag.startBlockY ?? 0);
          selectedIds.forEach(id => {
            const startPos = drag.startPositions!.get(id);
            if (!startPos) return;
            const b = allBlocks[id];
            if (!b || b.locked) return;
            store.getState().updateBlockPosition(
              id,
              startPos.x + offsetX,
              startPos.y + offsetY,
            );
          });
        } else {
          store.getState().updateBlockPosition(drag.blockId, newX, newY);
        }
        return;
      }

      if (drag.type === 'resize' && drag.blockId && drag.handle) {
        const scaledDx = dx / zoom;
        const scaledDy = dy / zoom;
        const maintainAspect = e.shiftKey;
        const startW = drag.startWidth ?? 0;
        const startH = drag.startHeight ?? 0;
        const startX = drag.startBlockX ?? 0;
        const startY = drag.startBlockY ?? 0;
        const aspect = startH > 0 ? startW / startH : 1;

        let newX = startX;
        let newY = startY;
        let newW = startW;
        let newH = startH;

        switch (drag.handle) {
          case 'se':
            newW = Math.max(20, startW + scaledDx);
            newH = Math.max(20, startH + scaledDy);
            break;
          case 'e':
            newW = Math.max(20, startW + scaledDx);
            break;
          case 's':
            newH = Math.max(20, startH + scaledDy);
            break;
          case 'nw':
            newW = Math.max(20, startW - scaledDx);
            newH = Math.max(20, startH - scaledDy);
            newX = startX + startW - newW;
            newY = startY + startH - newH;
            break;
          case 'n':
            newH = Math.max(20, startH - scaledDy);
            newY = startY + startH - newH;
            break;
          case 'ne':
            newW = Math.max(20, startW + scaledDx);
            newH = Math.max(20, startH - scaledDy);
            newY = startY + startH - newH;
            break;
          case 'sw':
            newW = Math.max(20, startW - scaledDx);
            newH = Math.max(20, startH + scaledDy);
            newX = startX + startW - newW;
            break;
          case 'w':
            newW = Math.max(20, startW - scaledDx);
            newX = startX + startW - newW;
            break;
        }

        if (maintainAspect) {
          if (['nw', 'ne', 'se', 'sw'].includes(drag.handle)) {
            if (Math.abs(scaledDx) > Math.abs(scaledDy)) {
              newH = newW / aspect;
            } else {
              newW = newH * aspect;
            }
            if (drag.handle === 'nw' || drag.handle === 'sw') {
              newX = startX + startW - newW;
            }
            if (drag.handle === 'nw' || drag.handle === 'ne') {
              newY = startY + startH - newH;
            }
          }
        }

        store.getState().updateBlockPosition(drag.blockId, newX, newY);
        store.getState().updateBlockSize(drag.blockId, newW, newH);
        return;
      }

      if (drag.type === 'rotate' && drag.blockId && drag.blockCenter) {
        const paper = paperRef.current;
        if (!paper) return;
        const paperRect = paper.getBoundingClientRect();
        const centerScreenX = paperRect.left + drag.blockCenter.x * zoom;
        const centerScreenY = paperRect.top + drag.blockCenter.y * zoom;
        const angle = Math.atan2(
          e.clientY - centerScreenY,
          e.clientX - centerScreenX,
        );
        const startAngle = Math.atan2(
          drag.startY - centerScreenY,
          drag.startX - centerScreenX,
        );
        let degrees = ((angle - startAngle) * 180) / Math.PI + (drag.startRotation ?? 0);

        // Snap to 15-degree increments when holding Shift
        if (e.shiftKey) {
          degrees = Math.round(degrees / 15) * 15;
        }

        store.getState().updateBlock(drag.blockId, { rotation: degrees });
        return;
      }
    },
    [store, canvasRef, paperRef],
  );

  const handleCanvasMouseUp = useCallback(
    (e: React.MouseEvent) => {
      const drag = dragRef.current;
      if (!drag) return;

      if (drag.type === 'pan') {
        store.getState().setIsPanning(false);
      }

      if (drag.type === 'select' && selectionRect) {
        // Find blocks within selection rectangle
        const paper = paperRef.current;
        if (paper) {
          const paperRect = paper.getBoundingClientRect();
          const zoom = store.getState().zoom;
          const canvas = canvasRef.current;
          if (canvas) {
            const canvasRect = canvas.getBoundingClientRect();
            // Convert selection rect from screen to paper space
            const selLeft = (selectionRect.x + canvasRect.left - paperRect.left) / zoom;
            const selTop = (selectionRect.y + canvasRect.top - paperRect.top) / zoom;
            const selW = selectionRect.width / zoom;
            const selH = selectionRect.height / zoom;

            const state = store.getState();
            const selRect = { x: selLeft, y: selTop, width: selW, height: selH };
            state.blockOrder.forEach(id => {
              const block = state.blocks[id];
              if (!block || !block.visible || block.locked) return;
              const bw = typeof block.size.width === 'number' ? block.size.width : 0;
              const bh = typeof block.size.height === 'number' ? block.size.height : 0;
              const blockRect = {
                x: block.position.x,
                y: block.position.y,
                width: bw,
                height: bh,
              };
              if (rectsOverlap(selRect, blockRect)) {
                store.getState().select(id, true);
              }
            });
          }
        }
        setSelectionRect(null);
      }

      // Clear alignment guides
      if (drag.type === 'move') {
        store.getState().setGuides([]);
      }

      // Push history after drag operations
      if (drag.moved && (drag.type === 'move' || drag.type === 'resize' || drag.type === 'rotate')) {
        debouncedPushHistory();
      }

      dragRef.current = null;
    },
    [store, selectionRect, canvasRef, paperRef, debouncedPushHistory],
  );

  const handleCanvasWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const state = store.getState();
        const delta = e.deltaY > 0 ? -0.05 : 0.05;
        const newZoom = Math.max(0.1, Math.min(4, state.zoom + delta));
        store.getState().setZoom(newZoom);
      }
    },
    [store],
  );

  return {
    handleCanvasMouseDown,
    handleCanvasMouseMove,
    handleCanvasMouseUp,
    handleCanvasWheel,
    handleBlockMouseDown,
    handleBlockDoubleClick,
    selectionRect,
    contextMenu,
    setContextMenu,
  };
}
