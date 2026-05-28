import React, { useCallback, useRef, useState } from 'react';
import type { Block, BlockType } from '@resume/shared';
import { useCanvasStore } from '../../stores/canvas.store';

const BLOCK_TYPE_LABELS: Record<BlockType, string> = {
  'text': '文本',
  'heading': '标题',
  'image': '图片',
  'icon': '图标',
  'shape': '形状',
  'divider': '分割线',
  'timeline': '时间线',
  'skill-bar': '技能条',
  'skill-radar': '雷达图',
  'rating': '评分',
  'tag-cloud': '标签云',
  'table': '表格',
  'qrcode': '二维码',
  'section': '区块',
  'columns': '多列',
  'spacer': '间距',
  'page-break': '分页',
};

const BLOCK_TYPE_ICONS: Record<BlockType, string> = {
  'text': '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>',
  'heading': '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/>',
  'image': '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  'icon': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'shape': '<circle cx="12" cy="12" r="10"/>',
  'divider': '<line x1="2" y1="12" x2="22" y2="12"/>',
  'timeline': '<line x1="8" y1="2" x2="8" y2="22"/><circle cx="8" cy="8" r="2"/><circle cx="8" cy="16" r="2"/>',
  'skill-bar': '<rect x="3" y="5" width="14" height="3" rx="1"/><rect x="3" y="11" width="10" height="3" rx="1"/><rect x="3" y="17" width="17" height="3" rx="1"/>',
  'skill-radar': '<polygon points="12 2 20 8 18 18 6 18 4 8"/>',
  'rating': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'tag-cloud': '<rect x="2" y="4" width="6" height="4" rx="1"/><rect x="10" y="4" width="8" height="4" rx="1"/><rect x="2" y="10" width="10" height="4" rx="1"/>',
  'table': '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/>',
  'qrcode': '<rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/>',
  'section': '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>',
  'columns': '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/>',
  'spacer': '<path d="M12 5v14"/><path d="M5 8l-3 4 3 4"/><path d="M19 8l3 4-3 4"/>',
  'page-break': '<line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="3 3"/>',
};

interface ContextMenuState {
  blockId: string;
  x: number;
  y: number;
}

const LayerPanel: React.FC = () => {
  const blocks = useCanvasStore(s => s.blocks);
  const blockOrder = useCanvasStore(s => s.blockOrder);
  const selectedIds = useCanvasStore(s => s.selectedIds);
  const select = useCanvasStore(s => s.select);
  const toggleLock = useCanvasStore(s => s.toggleLock);
  const toggleVisibility = useCanvasStore(s => s.toggleVisibility);
  const updateBlock = useCanvasStore(s => s.updateBlock);
  const removeBlock = useCanvasStore(s => s.removeBlock);
  const duplicateBlock = useCanvasStore(s => s.duplicateBlock);
  const bringToFront = useCanvasStore(s => s.bringToFront);
  const sendToBack = useCanvasStore(s => s.sendToBack);

  const [editingName, setEditingName] = useState<string | null>(null);
  const [nameValue, setNameValue] = useState('');
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Reverse order so topmost layer appears first
  const sortedIds = [...blockOrder].reverse();

  const handleClick = useCallback((id: string, e: React.MouseEvent) => {
    select(id, e.shiftKey || e.metaKey);
  }, [select]);

  const handleDoubleClick = useCallback((id: string) => {
    const block = blocks[id];
    if (!block) return;
    setEditingName(id);
    setNameValue(block.name || BLOCK_TYPE_LABELS[block.type] || block.type);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, [blocks]);

  const handleNameCommit = useCallback(() => {
    if (editingName && nameValue.trim()) {
      updateBlock(editingName, { name: nameValue.trim() });
    }
    setEditingName(null);
  }, [editingName, nameValue, updateBlock]);

  const handleContextMenu = useCallback((e: React.MouseEvent, blockId: string) => {
    e.preventDefault();
    setContextMenu({ blockId, x: e.clientX, y: e.clientY });
  }, []);

  const closeContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const handleDragStart = useCallback((e: React.DragEvent, id: string) => {
    setDragId(id);
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!dragId || dragId === targetId) {
      setDragId(null);
      return;
    }
    // Move dragId to be adjacent to targetId in blockOrder
    const store = useCanvasStore.getState();
    const order = [...store.blockOrder];
    const dragIdx = order.indexOf(dragId);
    const targetIdx = order.indexOf(targetId);
    if (dragIdx === -1 || targetIdx === -1) {
      setDragId(null);
      return;
    }
    order.splice(dragIdx, 1);
    const insertIdx = order.indexOf(targetId);
    // Since we display reversed, dropping "above" in UI means higher z-index
    order.splice(insertIdx, 0, dragId);
    // Update zIndex for all
    const newBlocks = { ...store.blocks };
    order.forEach((bid, i) => {
      newBlocks[bid] = { ...newBlocks[bid], zIndex: i };
    });
    useCanvasStore.setState({ blockOrder: order, blocks: newBlocks });
    setDragId(null);
  }, [dragId]);

  const renderBlock = (block: Block) => {
    const isSelected = selectedIds.has(block.id);
    const icon = BLOCK_TYPE_ICONS[block.type] || '';
    const label = block.name || BLOCK_TYPE_LABELS[block.type] || block.type;
    const isRenaming = editingName === block.id;

    return (
      <div
        key={block.id}
        draggable
        onDragStart={e => handleDragStart(e, block.id)}
        onDragOver={handleDragOver}
        onDrop={e => handleDrop(e, block.id)}
        onClick={e => handleClick(block.id, e)}
        onDoubleClick={() => handleDoubleClick(block.id)}
        onContextMenu={e => handleContextMenu(e, block.id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '4px 8px',
          borderRadius: 4,
          cursor: 'pointer',
          background: isSelected ? '#F5F5F4' : 'transparent',
          borderLeft: isSelected ? '2px solid #1C1917' : '2px solid transparent',
          opacity: block.visible ? 1 : 0.4,
          minHeight: 28,
          transition: 'background 0.1s',
        }}
        onMouseEnter={e => {
          if (!isSelected) e.currentTarget.style.background = '#FAFAF9';
        }}
        onMouseLeave={e => {
          if (!isSelected) e.currentTarget.style.background = 'transparent';
        }}
      >
        {/* Visibility */}
        <button
          onClick={e => { e.stopPropagation(); toggleVisibility(block.id); }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            color: block.visible ? '#78716C' : '#D6D3D1',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
          title={block.visible ? '隐藏' : '显示'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {block.visible ? (
              <>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </>
            ) : (
              <>
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </>
            )}
          </svg>
        </button>

        {/* Lock */}
        <button
          onClick={e => { e.stopPropagation(); toggleLock(block.id); }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            color: block.locked ? '#1C1917' : '#D6D3D1',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
          title={block.locked ? '解锁' : '锁定'}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {block.locked ? (
              <>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </>
            ) : (
              <>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 019.9-1" />
              </>
            )}
          </svg>
        </button>

        {/* Type icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A8A29E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
          dangerouslySetInnerHTML={{ __html: icon }}
        />

        {/* Name */}
        {isRenaming ? (
          <input
            ref={inputRef}
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
            onBlur={handleNameCommit}
            onKeyDown={e => { if (e.key === 'Enter') handleNameCommit(); if (e.key === 'Escape') setEditingName(null); }}
            onClick={e => e.stopPropagation()}
            style={{
              flex: 1,
              fontSize: 11,
              padding: '1px 4px',
              border: '1px solid #78716C',
              borderRadius: 3,
              outline: 'none',
              background: '#fff',
              color: '#1C1917',
              minWidth: 0,
            }}
          />
        ) : (
          <span style={{
            flex: 1,
            fontSize: 11,
            color: '#1C1917',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}>
            {label}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      style={{ padding: '4px 4px 12px' }}
      onClick={closeContextMenu}
    >
      {/* Header */}
      <div style={{
        fontSize: 11,
        color: '#A8A29E',
        fontWeight: 600,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        padding: '4px 8px 8px',
      }}>
        图层 ({blockOrder.length})
      </div>

      {/* Layer list */}
      {sortedIds.length === 0 ? (
        <div style={{ padding: '16px 8px', textAlign: 'center', color: '#A8A29E', fontSize: 12 }}>
          暂无图层
        </div>
      ) : (
        sortedIds.map(id => {
          const block = blocks[id];
          return block ? renderBlock(block) : null;
        })
      )}

      {/* Context menu */}
      {contextMenu && (
        <div
          style={{
            position: 'fixed',
            left: contextMenu.x,
            top: contextMenu.y,
            background: '#fff',
            border: '1px solid #E7E5E4',
            borderRadius: 6,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '4px 0',
            zIndex: 1000,
            minWidth: 120,
          }}
          onClick={e => e.stopPropagation()}
        >
          {[
            { label: '复制', action: () => { duplicateBlock(contextMenu.blockId); closeContextMenu(); } },
            { label: '删除', action: () => { removeBlock(contextMenu.blockId); closeContextMenu(); } },
            { label: blocks[contextMenu.blockId]?.locked ? '解锁' : '锁定', action: () => { toggleLock(contextMenu.blockId); closeContextMenu(); } },
            { label: '置于顶层', action: () => { bringToFront(contextMenu.blockId); closeContextMenu(); } },
            { label: '置于底层', action: () => { sendToBack(contextMenu.blockId); closeContextMenu(); } },
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              style={{
                display: 'block',
                width: '100%',
                padding: '6px 12px',
                fontSize: 12,
                color: item.label === '删除' ? '#DC2626' : '#1C1917',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { LayerPanel };
export default LayerPanel;
