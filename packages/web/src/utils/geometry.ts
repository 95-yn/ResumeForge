import type { Block, AlignmentGuide } from '@resume/shared';

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}

export function getBlockRect(block: Block): Rect {
  return {
    x: block.position.x,
    y: block.position.y,
    width: typeof block.size.width === 'number' ? block.size.width : 0,
    height: typeof block.size.height === 'number' ? block.size.height : 0,
  };
}

export function rectCenter(r: Rect): Point {
  return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
}

export function rectsOverlap(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

export function pointInRect(p: Point, r: Rect): boolean {
  return p.x >= r.x && p.x <= r.x + r.width && p.y >= r.y && p.y <= r.y + r.height;
}

export function snapToGrid(value: number, gridSize: number): number {
  return Math.round(value / gridSize) * gridSize;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

const SNAP_THRESHOLD = 5;

export function findAlignmentGuides(
  movingBlock: Block,
  allBlocks: Block[],
  canvasWidth: number,
  canvasHeight: number,
): { guides: AlignmentGuide[]; snappedX: number | null; snappedY: number | null } {
  const moving = getBlockRect(movingBlock);
  const movingCx = moving.x + moving.width / 2;
  const movingCy = moving.y + moving.height / 2;

  const guides: AlignmentGuide[] = [];
  let snappedX: number | null = null;
  let snappedY: number | null = null;

  const checkSnap = (value: number, target: number, axis: 'x' | 'y', type: AlignmentGuide['type'], sourceId?: string) => {
    if (Math.abs(value - target) < SNAP_THRESHOLD) {
      guides.push({ axis, position: target, type, sourceBlockId: sourceId });
      return target;
    }
    return null;
  };

  // Canvas center guides
  const cx = canvasWidth / 2;
  const cy = canvasHeight / 2;
  snappedX = checkSnap(movingCx, cx, 'x', 'center') !== null ? cx - moving.width / 2 : snappedX;
  snappedY = checkSnap(movingCy, cy, 'y', 'center') !== null ? cy - moving.height / 2 : snappedY;

  for (const other of allBlocks) {
    if (other.id === movingBlock.id || !other.visible) continue;
    const or = getBlockRect(other);
    const orCx = or.x + or.width / 2;
    const orCy = or.y + or.height / 2;

    // Left edge → left edge
    const ll = checkSnap(moving.x, or.x, 'x', 'edge', other.id);
    if (ll !== null && snappedX === null) snappedX = ll;
    // Right edge → right edge
    const rr = checkSnap(moving.x + moving.width, or.x + or.width, 'x', 'edge', other.id);
    if (rr !== null && snappedX === null) snappedX = rr - moving.width;
    // Center x → center x
    const ccx = checkSnap(movingCx, orCx, 'x', 'center', other.id);
    if (ccx !== null && snappedX === null) snappedX = ccx - moving.width / 2;
    // Left → right
    const lr = checkSnap(moving.x, or.x + or.width, 'x', 'edge', other.id);
    if (lr !== null && snappedX === null) snappedX = lr;
    // Right → left
    const rl = checkSnap(moving.x + moving.width, or.x, 'x', 'edge', other.id);
    if (rl !== null && snappedX === null) snappedX = rl - moving.width;

    // Top → top
    const tt = checkSnap(moving.y, or.y, 'y', 'edge', other.id);
    if (tt !== null && snappedY === null) snappedY = tt;
    // Bottom → bottom
    const bb = checkSnap(moving.y + moving.height, or.y + or.height, 'y', 'edge', other.id);
    if (bb !== null && snappedY === null) snappedY = bb - moving.height;
    // Center y → center y
    const ccy = checkSnap(movingCy, orCy, 'y', 'center', other.id);
    if (ccy !== null && snappedY === null) snappedY = ccy - moving.height / 2;
    // Top → bottom
    const tb = checkSnap(moving.y, or.y + or.height, 'y', 'edge', other.id);
    if (tb !== null && snappedY === null) snappedY = tb;
    // Bottom → top
    const bt = checkSnap(moving.y + moving.height, or.y, 'y', 'edge', other.id);
    if (bt !== null && snappedY === null) snappedY = bt - moving.height;
  }

  return { guides, snappedX, snappedY };
}

export function distributeBlocks(blocks: Block[], axis: 'x' | 'y'): Map<string, number> {
  if (blocks.length < 3) return new Map();
  const sorted = [...blocks].sort((a, b) => a.position[axis] - b.position[axis]);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const firstEnd = first.position[axis] + (typeof first.size[axis === 'x' ? 'width' : 'height'] === 'number' ? first.size[axis === 'x' ? 'width' : 'height'] as number : 0);
  const lastStart = last.position[axis];
  const totalBlockSize = sorted.reduce((sum, b) => sum + (typeof b.size[axis === 'x' ? 'width' : 'height'] === 'number' ? b.size[axis === 'x' ? 'width' : 'height'] as number : 0), 0);
  const totalSpace = (lastStart + (typeof last.size[axis === 'x' ? 'width' : 'height'] === 'number' ? last.size[axis === 'x' ? 'width' : 'height'] as number : 0)) - first.position[axis];
  const gap = (totalSpace - totalBlockSize) / (blocks.length - 1);

  const result = new Map<string, number>();
  let pos = first.position[axis];
  for (const b of sorted) {
    result.set(b.id, pos);
    pos += (typeof b.size[axis === 'x' ? 'width' : 'height'] === 'number' ? b.size[axis === 'x' ? 'width' : 'height'] as number : 0) + gap;
  }
  return result;
}

export function alignBlocks(blocks: Block[], alignment: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom'): Map<string, Point> {
  if (blocks.length === 0) return new Map();
  const rects = blocks.map(b => ({ id: b.id, rect: getBlockRect(b) }));
  const result = new Map<string, Point>();

  switch (alignment) {
    case 'left': {
      const minX = Math.min(...rects.map(r => r.rect.x));
      rects.forEach(r => result.set(r.id, { x: minX, y: r.rect.y }));
      break;
    }
    case 'right': {
      const maxX = Math.max(...rects.map(r => r.rect.x + r.rect.width));
      rects.forEach(r => result.set(r.id, { x: maxX - r.rect.width, y: r.rect.y }));
      break;
    }
    case 'center': {
      const minX = Math.min(...rects.map(r => r.rect.x));
      const maxX = Math.max(...rects.map(r => r.rect.x + r.rect.width));
      const cx = (minX + maxX) / 2;
      rects.forEach(r => result.set(r.id, { x: cx - r.rect.width / 2, y: r.rect.y }));
      break;
    }
    case 'top': {
      const minY = Math.min(...rects.map(r => r.rect.y));
      rects.forEach(r => result.set(r.id, { x: r.rect.x, y: minY }));
      break;
    }
    case 'bottom': {
      const maxY = Math.max(...rects.map(r => r.rect.y + r.rect.height));
      rects.forEach(r => result.set(r.id, { x: r.rect.x, y: maxY - r.rect.height }));
      break;
    }
    case 'middle': {
      const minY = Math.min(...rects.map(r => r.rect.y));
      const maxY = Math.max(...rects.map(r => r.rect.y + r.rect.height));
      const cy = (minY + maxY) / 2;
      rects.forEach(r => result.set(r.id, { x: r.rect.x, y: cy - r.rect.height / 2 }));
      break;
    }
  }
  return result;
}

export function generateId(): string {
  return `blk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function mmToPx(mm: number): number {
  return mm * 3.7795275591;
}

export function pxToMm(px: number): number {
  return px / 3.7795275591;
}

export const A4 = { width: 210, height: 297 };
export const A4_PX = { width: mmToPx(210), height: mmToPx(297) };
