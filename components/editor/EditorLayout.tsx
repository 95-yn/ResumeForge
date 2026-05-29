'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { TopBar } from './TopBar';
import { SectionList } from './SectionList';
import { ResumePreview } from './ResumePreview';
import { ToastContainer } from './ToastContainer';
import { ConfirmDialogHost } from './ConfirmDialog';
import { useAutoSave } from '@/lib/use-autosave';
import { useEditorStore } from '@/lib/editor-store';

const MIN_SIDEBAR_WIDTH = 160;
const MAX_SIDEBAR_WIDTH = 360;
const DEFAULT_SIDEBAR_WIDTH = 220;

export function EditorLayout() {
  useAutoSave();
  const undo = useEditorStore(s => s.undo);
  const redo = useEditorStore(s => s.redo);
  const save = useEditorStore(s => s.save);
  const saveStatus = useEditorStore(s => s.saveStatus);
  const pushToast = useEditorStore(s => s.pushToast);
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);
  const isResizing = useRef(false);
  const [resizeHover, setResizeHover] = useState(false);
  const [resizeActive, setResizeActive] = useState(false);
  const prevSaveStatus = useRef(saveStatus);

  // 保存成功 → 走统一 toast 系统（去重，避免与其它 toast 重叠/堆叠）。
  useEffect(() => {
    if (prevSaveStatus.current !== 'saved' && saveStatus === 'saved') {
      pushToast('已保存', 'success');
    }
    prevSaveStatus.current = saveStatus;
  }, [saveStatus, pushToast]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (!meta) return;

      // Don't intercept when typing in input/textarea/contenteditable
      const tag = (e.target as HTMLElement).tagName;
      const editable = (e.target as HTMLElement).isContentEditable;
      const inForm = tag === 'INPUT' || tag === 'TEXTAREA' || editable;

      if (e.key === 'z' && !e.shiftKey) {
        if (inForm) return;
        e.preventDefault();
        undo();
        return;
      }
      if ((e.key === 'z' && e.shiftKey) || e.key === 'y') {
        if (inForm) return;
        e.preventDefault();
        redo();
        return;
      }
      if (e.key === 's') {
        e.preventDefault();
        save();
        return;
      }
      if (e.key === 'p') {
        e.preventDefault();
        // Trigger print via TopBar's print button click (find it or dispatch a custom event)
        const printBtn = document.querySelector<HTMLButtonElement>('[aria-label="打印或导出简历"]');
        if (printBtn) printBtn.click();
        return;
      }
      if (e.key === 'k') {
        // Cmd+K: trigger link popup inside FloatingEditor (if one is open)
        // We dispatch a custom event; FloatingEditor listens and calls handleLink()
        e.preventDefault();
        document.dispatchEvent(new CustomEvent('editor:trigger-link'));
        return;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [undo, redo, save]);

  const handleMouseDown = useCallback(() => {
    isResizing.current = true;
    setResizeActive(true);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const newWidth = Math.min(MAX_SIDEBAR_WIDTH, Math.max(MIN_SIDEBAR_WIDTH, e.clientX));
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      setResizeActive(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <TopBar />
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <div style={{ width: sidebarWidth, flexShrink: 0 }}>
          <SectionList />
        </div>
        {/* Resize handle */}
        <div
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setResizeHover(true)}
          onMouseLeave={() => setResizeHover(false)}
          style={{
            width: 4,
            cursor: 'col-resize',
            background: resizeActive ? '#1C1917' : resizeHover ? '#D6D3D1' : 'transparent',
            transition: resizeActive ? 'none' : 'background 0.15s',
            flexShrink: 0,
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0, bottom: 0,
            left: -4, right: -4,
            cursor: 'col-resize',
          }} />
        </div>
        <ResumePreview />
      </div>

      <ToastContainer />
      <ConfirmDialogHost />
    </div>
  );
}
