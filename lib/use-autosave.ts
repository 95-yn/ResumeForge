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

  // 兜底立即保存：关闭/刷新页面、或切到后台标签页时，绕过 3s 防抖直接落盘，
  // 避免「改完几秒内关页就丢失」。save() 内部按 isDirty 判断，无脏数据则空操作。
  useEffect(() => {
    const flush = () => { useEditorStore.getState().save(); };
    const onVisibility = () => { if (document.visibilityState === 'hidden') flush(); };
    window.addEventListener('beforeunload', flush);
    window.addEventListener('pagehide', flush);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('beforeunload', flush);
      window.removeEventListener('pagehide', flush);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);
}
