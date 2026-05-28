import { useEffect } from 'react';
import { useCanvasStore } from '../stores/canvas.store';

export function useKeyboardShortcuts() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const state = useCanvasStore.getState();
      const {
        editingId,
        selectedIds,
        removeSelected,
        copy,
        paste,
        cut,
        undo,
        redo,
        selectAll,
        duplicateBlock,
        groupBlocks,
        ungroupBlock,
        clearSelection,
        setEditing,
        updateBlockPosition,
        blocks,
      } = state;

      // When editing text, only handle Escape
      if (editingId !== null) {
        if (e.key === 'Escape') {
          e.preventDefault();
          setEditing(null);
        }
        return;
      }

      const isCtrl = e.ctrlKey || e.metaKey;

      // Delete / Backspace
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedIds.size > 0) {
          e.preventDefault();
          removeSelected();
        }
        return;
      }

      // Ctrl+C / Ctrl+V / Ctrl+X
      if (isCtrl && e.key === 'c') {
        if (selectedIds.size > 0) {
          e.preventDefault();
          copy();
        }
        return;
      }
      if (isCtrl && e.key === 'v') {
        e.preventDefault();
        paste();
        return;
      }
      if (isCtrl && e.key === 'x') {
        if (selectedIds.size > 0) {
          e.preventDefault();
          cut();
        }
        return;
      }

      // Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y
      if (isCtrl && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
        return;
      }
      if ((isCtrl && e.key === 'z' && e.shiftKey) || (isCtrl && e.key === 'y')) {
        e.preventDefault();
        redo();
        return;
      }

      // Ctrl+A
      if (isCtrl && e.key === 'a') {
        e.preventDefault();
        selectAll();
        return;
      }

      // Ctrl+D = duplicate
      if (isCtrl && e.key === 'd') {
        e.preventDefault();
        const ids = Array.from(selectedIds);
        ids.forEach(id => duplicateBlock(id));
        return;
      }

      // Ctrl+G = group
      if (isCtrl && !e.shiftKey && e.key === 'g') {
        e.preventDefault();
        if (selectedIds.size >= 2) {
          groupBlocks(Array.from(selectedIds));
        }
        return;
      }

      // Ctrl+Shift+G = ungroup
      if (isCtrl && e.shiftKey && e.key === 'G') {
        e.preventDefault();
        if (selectedIds.size === 1) {
          const id = Array.from(selectedIds)[0];
          ungroupBlock(id);
        }
        return;
      }

      // Arrow keys = nudge
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        if (selectedIds.size === 0) return;
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;
        const ids = Array.from(selectedIds);
        ids.forEach(id => {
          const block = blocks[id];
          if (!block || block.locked) return;
          let { x, y } = block.position;
          switch (e.key) {
            case 'ArrowUp':    y -= step; break;
            case 'ArrowDown':  y += step; break;
            case 'ArrowLeft':  x -= step; break;
            case 'ArrowRight': x += step; break;
          }
          updateBlockPosition(id, x, y);
        });
        return;
      }

      // Escape = clear selection
      if (e.key === 'Escape') {
        e.preventDefault();
        clearSelection();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
