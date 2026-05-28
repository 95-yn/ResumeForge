'use client';

import { useState, useRef, useCallback } from 'react';
import { TopBar } from './TopBar';
import { SectionList } from './SectionList';
import { ResumePreview } from './ResumePreview';
import { useAutoSave } from '@/lib/use-autosave';

const MIN_SIDEBAR_WIDTH = 160;
const MAX_SIDEBAR_WIDTH = 360;
const DEFAULT_SIDEBAR_WIDTH = 220;

export function EditorLayout() {
  useAutoSave();
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);
  const isResizing = useRef(false);
  const [resizeHover, setResizeHover] = useState(false);
  const [resizeActive, setResizeActive] = useState(false);

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
            background: resizeActive ? '#3B82F6' : resizeHover ? '#D1D5DB' : 'transparent',
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
    </div>
  );
}
