'use client';

import { useEffect, useRef } from 'react';
import { useEditorStore } from './editor-store';

export function useAutoSave(delayMs = 3000) {
  const isDirty = useEditorStore((s) => s.isDirty);
  const save = useEditorStore((s) => s.save);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!isDirty) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { save(); }, delayMs);
    return () => clearTimeout(timerRef.current);
  }, [isDirty, save, delayMs]);
}
