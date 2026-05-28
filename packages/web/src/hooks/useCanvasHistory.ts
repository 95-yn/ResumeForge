import { useCallback, useRef } from 'react';
import { useCanvasStore } from '../stores/canvas.store';

const DEBOUNCE_MS = 300;

/**
 * Debounced history push to avoid flooding undo stack during drag operations.
 * Pushes history on mouseup after drag, not on every mousemove.
 */
export function useCanvasHistory() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedPushHistory = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      useCanvasStore.getState().pushHistory();
      timerRef.current = null;
    }, DEBOUNCE_MS);
  }, []);

  const pushHistoryImmediate = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    useCanvasStore.getState().pushHistory();
  }, []);

  const cancelPending = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  return {
    debouncedPushHistory,
    pushHistoryImmediate,
    cancelPending,
  };
}
