import { create } from 'zustand';
import type { Block, BlockStyle, BlockData, CanvasConfig, TemplateVariables, AlignmentGuide, BlockType } from '@resume/shared';
import { generateId, A4_PX } from '../utils/geometry';

interface CanvasStore {
  blocks: Record<string, Block>;
  blockOrder: string[];
  selectedIds: Set<string>;
  hoveredId: string | null;
  editingId: string | null;
  clipboard: Block[];
  canvas: CanvasConfig;
  variables: TemplateVariables;
  guides: AlignmentGuide[];
  zoom: number;
  pan: { x: number; y: number };
  isPanning: boolean;
  showLayers: boolean;
  showRulers: boolean;
  activePanel: 'style' | 'blocks' | 'layers' | 'templates' | null;

  history: Array<{ blocks: Record<string, Block>; blockOrder: string[] }>;
  historyIndex: number;

  // Block operations
  addBlock: (type: BlockType, data?: Partial<Block>) => string;
  removeBlock: (id: string) => void;
  removeSelected: () => void;
  updateBlock: (id: string, updates: Partial<Block>) => void;
  updateBlockStyle: (id: string, style: Partial<BlockStyle>) => void;
  updateBlockData: (id: string, data: Partial<BlockData>) => void;
  updateBlockPosition: (id: string, x: number, y: number) => void;
  updateBlockSize: (id: string, width: number | 'auto', height: number | 'auto') => void;
  duplicateBlock: (id: string) => string;
  groupBlocks: (ids: string[]) => string;
  ungroupBlock: (id: string) => void;

  // Selection
  select: (id: string, additive?: boolean) => void;
  selectAll: () => void;
  clearSelection: () => void;
  setHovered: (id: string | null) => void;
  setEditing: (id: string | null) => void;

  // Z-order
  bringToFront: (id: string) => void;
  sendToBack: (id: string) => void;
  bringForward: (id: string) => void;
  sendBackward: (id: string) => void;

  // Clipboard
  copy: () => void;
  paste: () => void;
  cut: () => void;

  // Canvas
  setZoom: (zoom: number) => void;
  setPan: (x: number, y: number) => void;
  setIsPanning: (v: boolean) => void;
  setGuides: (g: AlignmentGuide[]) => void;
  updateCanvas: (config: Partial<CanvasConfig>) => void;
  updateVariables: (vars: Partial<TemplateVariables>) => void;
  setActivePanel: (p: CanvasStore['activePanel']) => void;
  toggleRulers: () => void;
  toggleLayers: () => void;

  // History
  undo: () => void;
  redo: () => void;
  pushHistory: () => void;

  // Lock/visibility
  toggleLock: (id: string) => void;
  toggleVisibility: (id: string) => void;

  // Bulk
  loadBlocks: (blocks: Block[], config?: Partial<CanvasConfig>, vars?: Partial<TemplateVariables>) => void;
  getBlock: (id: string) => Block | undefined;
  getSelectedBlocks: () => Block[];
  getSortedBlocks: () => Block[];
}

const DEFAULT_CANVAS: CanvasConfig = {
  width: A4_PX.width,
  height: A4_PX.height,
  unit: 'mm',
  background: '#ffffff',
  showGrid: false,
  gridSize: 10,
  snapToGrid: true,
  showRulers: true,
  showGuides: true,
  guides: [],
};

const DEFAULT_VARIABLES: TemplateVariables = {
  primaryColor: '#1C1917',
  secondaryColor: '#78716C',
  accentColor: '#0369A1',
  headingFont: 'Noto Sans SC',
  bodyFont: 'Noto Sans SC',
  baseFontSize: 14,
  sectionSpacing: 20,
  pageMargin: 40,
};

function createDefaultBlock(type: BlockType): Partial<Block> {
  const base = {
    position: { x: 40, y: 40 },
    size: { width: 300 as number | 'auto', height: 'auto' as number | 'auto' },
    rotation: 0,
    style: {},
    locked: false,
    visible: true,
    zIndex: 0,
  };

  const dataMap: Record<BlockType, BlockData> = {
    'text': { type: 'text', html: '<p>输入文本内容...</p>', placeholder: '输入文本...' },
    'heading': { type: 'heading', level: 2, html: '<h2>标题</h2>' },
    'image': { type: 'image', src: '', alt: '', objectFit: 'cover', clipShape: 'none' },
    'icon': { type: 'icon', icon: 'star', iconSet: 'lucide', size: 24 },
    'shape': { type: 'shape', shape: 'rectangle', fill: '#E7E5E4', stroke: '#1C1917', strokeWidth: 1 },
    'divider': { type: 'divider', variant: 'solid', thickness: 1, color: '#E7E5E4' },
    'timeline': { type: 'timeline', items: [{ title: '职位', subtitle: '公司', date: '2024', description: '描述', highlights: [] }], layout: 'left', lineColor: '#E7E5E4', dotColor: '#1C1917' },
    'skill-bar': { type: 'skill-bar', items: [{ name: 'JavaScript', level: 90 }, { name: 'TypeScript', level: 85 }, { name: 'React', level: 80 }], maxLevel: 100, barHeight: 8, showLabel: true, showPercentage: false, barColor: '#1C1917', trackColor: '#F5F5F4' },
    'skill-radar': { type: 'skill-radar', items: [{ name: '前端', level: 90 }, { name: '后端', level: 70 }, { name: '设计', level: 60 }, { name: '运维', level: 50 }, { name: '管理', level: 75 }], maxLevel: 100, showLabels: true },
    'rating': { type: 'rating', items: [{ name: 'JavaScript', rating: 5 }, { name: 'Python', rating: 4 }], maxRating: 5, symbol: 'star', activeColor: '#1C1917', inactiveColor: '#E7E5E4' },
    'tag-cloud': { type: 'tag-cloud', tags: [{ text: 'React' }, { text: 'TypeScript' }, { text: 'Node.js' }], layout: 'wrap', gap: 8 },
    'table': { type: 'table', rows: 3, cols: 3, cells: [['', '', ''], ['', '', ''], ['', '', '']], headerRow: true, headerCol: false },
    'qrcode': { type: 'qrcode', value: 'https://example.com', size: 120 },
    'section': { type: 'section', layout: 'vertical', gap: 12 },
    'columns': { type: 'columns', columns: 2, gap: 20, ratios: [1, 1] },
    'spacer': { type: 'spacer', height: 20 },
    'page-break': { type: 'page-break' },
  };

  const sizeMap: Partial<Record<BlockType, { width: number | 'auto'; height: number | 'auto' }>> = {
    'icon': { width: 24, height: 24 },
    'shape': { width: 100, height: 100 },
    'divider': { width: 500, height: 1 },
    'spacer': { width: 500, height: 20 },
    'qrcode': { width: 120, height: 120 },
    'skill-radar': { width: 200, height: 200 },
    'columns': { width: 680, height: 'auto' },
    'section': { width: 680, height: 'auto' },
    'page-break': { width: 680, height: 2 },
  };

  return {
    ...base,
    size: sizeMap[type] || base.size,
    data: dataMap[type],
  };
}

export const useCanvasStore = create<CanvasStore>((set, get) => ({
  blocks: {},
  blockOrder: [],
  selectedIds: new Set(),
  hoveredId: null,
  editingId: null,
  clipboard: [],
  canvas: { ...DEFAULT_CANVAS },
  variables: { ...DEFAULT_VARIABLES },
  guides: [],
  zoom: 1,
  pan: { x: 0, y: 0 },
  isPanning: false,
  showLayers: false,
  showRulers: true,
  activePanel: 'blocks',

  history: [],
  historyIndex: -1,

  addBlock: (type, data) => {
    const id = generateId();
    const defaults = createDefaultBlock(type);
    const block: Block = {
      id,
      type,
      position: data?.position || defaults.position || { x: 40, y: 40 },
      size: data?.size || defaults.size || { width: 300, height: 'auto' },
      rotation: data?.rotation ?? defaults.rotation ?? 0,
      style: { ...defaults.style, ...data?.style },
      locked: data?.locked ?? false,
      visible: data?.visible ?? true,
      children: data?.children,
      parentId: data?.parentId,
      data: data?.data || defaults.data!,
      zIndex: data?.zIndex ?? get().blockOrder.length,
      name: data?.name,
    };
    set(s => {
      const blocks = { ...s.blocks, [id]: block };
      const blockOrder = [...s.blockOrder, id];
      return { blocks, blockOrder };
    });
    get().pushHistory();
    return id;
  },

  removeBlock: (id) => {
    set(s => {
      const { [id]: _, ...blocks } = s.blocks;
      const blockOrder = s.blockOrder.filter(bid => bid !== id);
      const selectedIds = new Set(s.selectedIds);
      selectedIds.delete(id);
      return { blocks, blockOrder, selectedIds, editingId: s.editingId === id ? null : s.editingId };
    });
    get().pushHistory();
  },

  removeSelected: () => {
    const { selectedIds } = get();
    if (selectedIds.size === 0) return;
    set(s => {
      const blocks = { ...s.blocks };
      const idsToRemove = new Set(s.selectedIds);
      idsToRemove.forEach(id => { delete blocks[id]; });
      const blockOrder = s.blockOrder.filter(id => !idsToRemove.has(id));
      return { blocks, blockOrder, selectedIds: new Set(), editingId: null };
    });
    get().pushHistory();
  },

  updateBlock: (id, updates) => {
    set(s => {
      const block = s.blocks[id];
      if (!block) return s;
      return { blocks: { ...s.blocks, [id]: { ...block, ...updates } } };
    });
  },

  updateBlockStyle: (id, style) => {
    set(s => {
      const block = s.blocks[id];
      if (!block) return s;
      return { blocks: { ...s.blocks, [id]: { ...block, style: { ...block.style, ...style } } } };
    });
  },

  updateBlockData: (id, data) => {
    set(s => {
      const block = s.blocks[id];
      if (!block) return s;
      return { blocks: { ...s.blocks, [id]: { ...block, data: { ...block.data, ...data } as BlockData } } };
    });
  },

  updateBlockPosition: (id, x, y) => {
    set(s => {
      const block = s.blocks[id];
      if (!block || block.locked) return s;
      return { blocks: { ...s.blocks, [id]: { ...block, position: { x, y } } } };
    });
  },

  updateBlockSize: (id, width, height) => {
    set(s => {
      const block = s.blocks[id];
      if (!block || block.locked) return s;
      return { blocks: { ...s.blocks, [id]: { ...block, size: { width, height } } } };
    });
  },

  duplicateBlock: (id) => {
    const block = get().blocks[id];
    if (!block) return '';
    const newId = generateId();
    const newBlock: Block = {
      ...structuredClone(block),
      id: newId,
      position: { x: block.position.x + 20, y: block.position.y + 20 },
      zIndex: get().blockOrder.length,
    };
    set(s => ({
      blocks: { ...s.blocks, [newId]: newBlock },
      blockOrder: [...s.blockOrder, newId],
      selectedIds: new Set([newId]),
    }));
    get().pushHistory();
    return newId;
  },

  groupBlocks: (ids) => {
    if (ids.length < 2) return '';
    const groupId = generateId();
    const blocks = get().blocks;
    const children = ids.filter(id => blocks[id]);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    children.forEach(id => {
      const b = blocks[id];
      minX = Math.min(minX, b.position.x);
      minY = Math.min(minY, b.position.y);
      const w = typeof b.size.width === 'number' ? b.size.width : 0;
      const h = typeof b.size.height === 'number' ? b.size.height : 0;
      maxX = Math.max(maxX, b.position.x + w);
      maxY = Math.max(maxY, b.position.y + h);
    });

    const group: Block = {
      id: groupId,
      type: 'section',
      position: { x: minX, y: minY },
      size: { width: maxX - minX, height: maxY - minY },
      rotation: 0,
      style: {},
      locked: false,
      visible: true,
      children,
      data: { type: 'section', layout: 'vertical', gap: 0 },
      zIndex: get().blockOrder.length,
    };

    set(s => {
      const newBlocks = { ...s.blocks, [groupId]: group };
      children.forEach(id => {
        newBlocks[id] = { ...newBlocks[id], parentId: groupId };
      });
      const blockOrder = [...s.blockOrder.filter(id => !children.includes(id)), groupId];
      return { blocks: newBlocks, blockOrder, selectedIds: new Set([groupId]) };
    });
    get().pushHistory();
    return groupId;
  },

  ungroupBlock: (id) => {
    const block = get().blocks[id];
    if (!block || block.type !== 'section' || !block.children?.length) return;
    set(s => {
      const newBlocks = { ...s.blocks };
      delete newBlocks[id];
      block.children!.forEach(cid => {
        if (newBlocks[cid]) {
          newBlocks[cid] = { ...newBlocks[cid], parentId: undefined };
        }
      });
      const blockOrder = [...s.blockOrder.filter(bid => bid !== id), ...block.children!];
      return { blocks: newBlocks, blockOrder, selectedIds: new Set(block.children) };
    });
    get().pushHistory();
  },

  select: (id, additive) => {
    set(s => {
      if (additive) {
        const next = new Set(s.selectedIds);
        if (next.has(id)) next.delete(id); else next.add(id);
        return { selectedIds: next };
      }
      return { selectedIds: new Set([id]) };
    });
  },

  selectAll: () => {
    set(s => ({ selectedIds: new Set(s.blockOrder.filter(id => s.blocks[id]?.visible && !s.blocks[id]?.locked)) }));
  },

  clearSelection: () => set({ selectedIds: new Set(), editingId: null }),

  setHovered: (id) => set({ hoveredId: id }),
  setEditing: (id) => set({ editingId: id, selectedIds: id ? new Set([id]) : get().selectedIds }),

  bringToFront: (id) => {
    set(s => {
      const order = s.blockOrder.filter(bid => bid !== id);
      order.push(id);
      const blocks = { ...s.blocks };
      order.forEach((bid, i) => { blocks[bid] = { ...blocks[bid], zIndex: i }; });
      return { blockOrder: order, blocks };
    });
  },

  sendToBack: (id) => {
    set(s => {
      const order = s.blockOrder.filter(bid => bid !== id);
      order.unshift(id);
      const blocks = { ...s.blocks };
      order.forEach((bid, i) => { blocks[bid] = { ...blocks[bid], zIndex: i }; });
      return { blockOrder: order, blocks };
    });
  },

  bringForward: (id) => {
    set(s => {
      const order = [...s.blockOrder];
      const idx = order.indexOf(id);
      if (idx < order.length - 1) {
        [order[idx], order[idx + 1]] = [order[idx + 1], order[idx]];
      }
      const blocks = { ...s.blocks };
      order.forEach((bid, i) => { blocks[bid] = { ...blocks[bid], zIndex: i }; });
      return { blockOrder: order, blocks };
    });
  },

  sendBackward: (id) => {
    set(s => {
      const order = [...s.blockOrder];
      const idx = order.indexOf(id);
      if (idx > 0) {
        [order[idx], order[idx - 1]] = [order[idx - 1], order[idx]];
      }
      const blocks = { ...s.blocks };
      order.forEach((bid, i) => { blocks[bid] = { ...blocks[bid], zIndex: i }; });
      return { blockOrder: order, blocks };
    });
  },

  copy: () => {
    const { selectedIds, blocks } = get();
    const copied = Array.from(selectedIds).map(id => blocks[id]).filter(Boolean).map(b => structuredClone(b));
    set({ clipboard: copied });
  },

  paste: () => {
    const { clipboard } = get();
    if (clipboard.length === 0) return;
    const newIds: string[] = [];
    set(s => {
      const newBlocks = { ...s.blocks };
      const newOrder = [...s.blockOrder];
      clipboard.forEach(b => {
        const newId = generateId();
        newIds.push(newId);
        newBlocks[newId] = {
          ...structuredClone(b),
          id: newId,
          position: { x: b.position.x + 20, y: b.position.y + 20 },
          zIndex: newOrder.length,
        };
        newOrder.push(newId);
      });
      return { blocks: newBlocks, blockOrder: newOrder, selectedIds: new Set(newIds) };
    });
    get().pushHistory();
  },

  cut: () => {
    get().copy();
    get().removeSelected();
  },

  setZoom: (zoom) => set({ zoom: Math.max(0.1, Math.min(4, zoom)) }),
  setPan: (x, y) => set({ pan: { x, y } }),
  setIsPanning: (v) => set({ isPanning: v }),
  setGuides: (g) => set({ guides: g }),
  updateCanvas: (config) => set(s => ({ canvas: { ...s.canvas, ...config } })),
  updateVariables: (vars) => set(s => ({ variables: { ...s.variables, ...vars } })),
  setActivePanel: (p) => set({ activePanel: p }),
  toggleRulers: () => set(s => ({ showRulers: !s.showRulers })),
  toggleLayers: () => set(s => ({ showLayers: !s.showLayers })),

  pushHistory: () => {
    set(s => {
      const snap = { blocks: structuredClone(s.blocks), blockOrder: [...s.blockOrder] };
      const history = s.history.slice(0, s.historyIndex + 1);
      history.push(snap);
      if (history.length > 80) history.shift();
      return { history, historyIndex: history.length - 1 };
    });
  },

  undo: () => {
    set(s => {
      if (s.historyIndex <= 0) return s;
      const idx = s.historyIndex - 1;
      const snap = s.history[idx];
      return { blocks: structuredClone(snap.blocks), blockOrder: [...snap.blockOrder], historyIndex: idx, selectedIds: new Set(), editingId: null };
    });
  },

  redo: () => {
    set(s => {
      if (s.historyIndex >= s.history.length - 1) return s;
      const idx = s.historyIndex + 1;
      const snap = s.history[idx];
      return { blocks: structuredClone(snap.blocks), blockOrder: [...snap.blockOrder], historyIndex: idx, selectedIds: new Set(), editingId: null };
    });
  },

  toggleLock: (id) => {
    set(s => {
      const block = s.blocks[id];
      if (!block) return s;
      return { blocks: { ...s.blocks, [id]: { ...block, locked: !block.locked } } };
    });
  },

  toggleVisibility: (id) => {
    set(s => {
      const block = s.blocks[id];
      if (!block) return s;
      return { blocks: { ...s.blocks, [id]: { ...block, visible: !block.visible } } };
    });
  },

  loadBlocks: (blocks, config, vars) => {
    const blockMap: Record<string, Block> = {};
    const order: string[] = [];
    blocks.forEach(b => { blockMap[b.id] = b; order.push(b.id); });
    set({
      blocks: blockMap,
      blockOrder: order,
      selectedIds: new Set(),
      editingId: null,
      canvas: config ? { ...DEFAULT_CANVAS, ...config } : { ...DEFAULT_CANVAS },
      variables: vars ? { ...DEFAULT_VARIABLES, ...vars } : { ...DEFAULT_VARIABLES },
      history: [{ blocks: structuredClone(blockMap), blockOrder: [...order] }],
      historyIndex: 0,
    });
  },

  getBlock: (id) => get().blocks[id],
  getSelectedBlocks: () => {
    const { selectedIds, blocks } = get();
    return Array.from(selectedIds).map(id => blocks[id]).filter(Boolean);
  },
  getSortedBlocks: () => {
    const { blockOrder, blocks } = get();
    return blockOrder.map(id => blocks[id]).filter(Boolean);
  },
}));
