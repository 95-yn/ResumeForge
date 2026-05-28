import React, { useEffect, useRef, useCallback } from 'react';
import { useCanvasStore } from '../../stores/canvas.store';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

type MenuItem =
  | { type: 'action'; label: string; shortcut?: string; action: () => void; disabled?: boolean }
  | { type: 'separator' };

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedIds = useCanvasStore(s => s.selectedIds);
  const blocks = useCanvasStore(s => s.blocks);
  const copy = useCanvasStore(s => s.copy);
  const paste = useCanvasStore(s => s.paste);
  const cut = useCanvasStore(s => s.cut);
  const removeSelected = useCanvasStore(s => s.removeSelected);
  const bringToFront = useCanvasStore(s => s.bringToFront);
  const sendToBack = useCanvasStore(s => s.sendToBack);
  const bringForward = useCanvasStore(s => s.bringForward);
  const sendBackward = useCanvasStore(s => s.sendBackward);
  const toggleLock = useCanvasStore(s => s.toggleLock);
  const groupBlocks = useCanvasStore(s => s.groupBlocks);
  const ungroupBlock = useCanvasStore(s => s.ungroupBlock);
  const clipboard = useCanvasStore(s => s.clipboard);

  const hasSelection = selectedIds.size > 0;
  const singleId = selectedIds.size === 1 ? Array.from(selectedIds)[0] : null;
  const singleBlock = singleId ? blocks[singleId] : null;
  const isLocked = singleBlock?.locked ?? false;
  const isGroup = singleBlock?.type === 'section' && (singleBlock?.children?.length ?? 0) > 0;
  const canGroup = selectedIds.size >= 2;

  const handleAction = useCallback((action: () => void) => {
    action();
    onClose();
  }, [onClose]);

  const items: MenuItem[] = [
    {
      type: 'action',
      label: '复制',
      shortcut: 'Ctrl+C',
      action: () => handleAction(copy),
      disabled: !hasSelection,
    },
    {
      type: 'action',
      label: '粘贴',
      shortcut: 'Ctrl+V',
      action: () => handleAction(paste),
      disabled: clipboard.length === 0,
    },
    {
      type: 'action',
      label: '剪切',
      shortcut: 'Ctrl+X',
      action: () => handleAction(cut),
      disabled: !hasSelection,
    },
    {
      type: 'action',
      label: '删除',
      shortcut: 'Del',
      action: () => handleAction(removeSelected),
      disabled: !hasSelection,
    },
    { type: 'separator' },
    {
      type: 'action',
      label: '置于顶层',
      action: () => {
        if (singleId) handleAction(() => bringToFront(singleId));
      },
      disabled: !singleId,
    },
    {
      type: 'action',
      label: '置于底层',
      action: () => {
        if (singleId) handleAction(() => sendToBack(singleId));
      },
      disabled: !singleId,
    },
    {
      type: 'action',
      label: '上移一层',
      action: () => {
        if (singleId) handleAction(() => bringForward(singleId));
      },
      disabled: !singleId,
    },
    {
      type: 'action',
      label: '下移一层',
      action: () => {
        if (singleId) handleAction(() => sendBackward(singleId));
      },
      disabled: !singleId,
    },
    { type: 'separator' },
    {
      type: 'action',
      label: isLocked ? '解锁' : '锁定',
      action: () => {
        if (singleId) handleAction(() => toggleLock(singleId));
      },
      disabled: !singleId,
    },
    { type: 'separator' },
    {
      type: 'action',
      label: '编组',
      shortcut: 'Ctrl+G',
      action: () => handleAction(() => groupBlocks(Array.from(selectedIds))),
      disabled: !canGroup,
    },
    {
      type: 'action',
      label: '取消编组',
      shortcut: 'Ctrl+Shift+G',
      action: () => {
        if (singleId) handleAction(() => ungroupBlock(singleId));
      },
      disabled: !isGroup,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Adjust position if menu would overflow viewport
  const menuWidth = 200;
  const menuHeight = items.length * 32;
  const adjustedX = x + menuWidth > window.innerWidth ? x - menuWidth : x;
  const adjustedY = y + menuHeight > window.innerHeight ? y - menuHeight : y;

  return (
    <div
      ref={menuRef}
      style={{
        position: 'fixed',
        left: adjustedX,
        top: adjustedY,
        width: menuWidth,
        backgroundColor: '#ffffff',
        border: '1px solid #E7E5E4',
        borderRadius: 6,
        boxShadow: '0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)',
        padding: '4px 0',
        zIndex: 99999,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: 13,
      }}
    >
      {items.map((item, index) => {
        if (item.type === 'separator') {
          return (
            <div
              key={`sep-${index}`}
              style={{
                height: 1,
                backgroundColor: '#E7E5E4',
                margin: '4px 0',
              }}
            />
          );
        }

        return (
          <div
            key={item.label}
            onClick={item.disabled ? undefined : item.action}
            style={{
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: item.disabled ? 'default' : 'pointer',
              color: item.disabled ? '#A8A29E' : '#1C1917',
              backgroundColor: 'transparent',
              transition: 'background-color 0.1s',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => {
              if (!item.disabled) {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '#F5F5F4';
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
            }}
          >
            <span>{item.label}</span>
            {item.shortcut && (
              <span style={{ color: '#A8A29E', fontSize: 11, marginLeft: 16 }}>
                {item.shortcut}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContextMenu;
