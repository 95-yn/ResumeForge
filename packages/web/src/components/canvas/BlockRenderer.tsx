import { useMemo, useCallback, useRef } from 'react';
import type { Block, BlockStyle } from '@resume/shared';
import { useCanvasStore } from '../../stores/canvas.store';
import { TextBlock } from './blocks/TextBlock';
import { HeadingBlock } from './blocks/HeadingBlock';
import { ImageBlock } from './blocks/ImageBlock';
import { IconBlock } from './blocks/IconBlock';
import { ShapeBlock } from './blocks/ShapeBlock';
import { DividerBlock } from './blocks/DividerBlock';
import { TimelineBlock } from './blocks/TimelineBlock';
import { SkillBarBlock } from './blocks/SkillBarBlock';
import { SkillRadarBlock } from './blocks/SkillRadarBlock';
import { RatingBlock } from './blocks/RatingBlock';
import { TagCloudBlock } from './blocks/TagCloudBlock';
import { TableBlock } from './blocks/TableBlock';
import { QRCodeBlock } from './blocks/QRCodeBlock';
import { SpacerBlock } from './blocks/SpacerBlock';
import { ColumnsBlock } from './blocks/ColumnsBlock';
import { buildGradientCSS } from '../../utils/colors';
import { getFontStack } from '../../utils/fonts';

interface BlockRendererProps {
  block: Block;
}

function blockStyleToCSS(style: BlockStyle): React.CSSProperties {
  const css: React.CSSProperties = {};

  if (style.fontFamily) css.fontFamily = getFontStack(style.fontFamily);
  if (style.fontSize) css.fontSize = style.fontSize;
  if (style.fontWeight) css.fontWeight = style.fontWeight;
  if (style.lineHeight) css.lineHeight = style.lineHeight;
  if (style.letterSpacing !== undefined) css.letterSpacing = style.letterSpacing;
  if (style.textTransform) css.textTransform = style.textTransform;
  if (style.textAlign) css.textAlign = style.textAlign;
  if (style.color) css.color = style.color;

  if (style.gradient) {
    css.background = buildGradientCSS(style.gradient);
  } else if (style.backgroundColor) {
    css.backgroundColor = style.backgroundColor;
  }

  if (style.opacity !== undefined) css.opacity = style.opacity;

  if (style.borderWidth && style.borderStyle !== 'none') {
    css.borderWidth = style.borderWidth;
    css.borderStyle = style.borderStyle || 'solid';
    css.borderColor = style.borderColor || '#E7E5E4';
  }

  if (style.borderRadius !== undefined) {
    css.borderRadius = Array.isArray(style.borderRadius)
      ? style.borderRadius.map(v => `${v}px`).join(' ')
      : style.borderRadius;
  }

  if (style.padding) {
    css.padding = style.padding.map(v => `${v}px`).join(' ');
  }
  if (style.margin) {
    css.margin = style.margin.map(v => `${v}px`).join(' ');
  }

  if (style.boxShadow) {
    const s = style.boxShadow;
    css.boxShadow = `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`;
  }

  if (style.textShadow) {
    const s = style.textShadow;
    css.textShadow = `${s.x}px ${s.y}px ${s.blur}px ${s.color}`;
  }

  if (style.overflow) css.overflow = style.overflow;

  return css;
}

const BLOCK_COMPONENTS: Record<string, React.FC<{ block: Block; isEditing: boolean }>> = {
  'text': TextBlock,
  'heading': HeadingBlock,
  'image': ImageBlock,
  'icon': IconBlock,
  'shape': ShapeBlock,
  'divider': DividerBlock,
  'timeline': TimelineBlock,
  'skill-bar': SkillBarBlock,
  'skill-radar': SkillRadarBlock,
  'rating': RatingBlock,
  'tag-cloud': TagCloudBlock,
  'table': TableBlock,
  'qrcode': QRCodeBlock,
  'spacer': SpacerBlock,
  'columns': ColumnsBlock,
};

export function BlockRenderer({ block }: BlockRendererProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedIds, editingId, select, setEditing, setHovered } = useCanvasStore();

  const isSelected = selectedIds.has(block.id);
  const isEditing = editingId === block.id;

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (block.locked) return;
    select(block.id, e.shiftKey || e.metaKey);
  }, [block.id, block.locked, select]);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (block.locked) return;
    if (block.type === 'text' || block.type === 'heading' || block.type === 'table') {
      setEditing(block.id);
    }
  }, [block.id, block.locked, block.type, setEditing]);

  const containerStyle = useMemo((): React.CSSProperties => {
    const w = typeof block.size.width === 'number' ? `${block.size.width}px` : 'auto';
    const h = typeof block.size.height === 'number' ? `${block.size.height}px` : 'auto';
    return {
      position: 'absolute',
      left: block.position.x,
      top: block.position.y,
      width: w,
      height: h,
      transform: block.rotation ? `rotate(${block.rotation}deg)` : undefined,
      opacity: block.visible ? (block.style.opacity ?? 1) : 0.3,
      zIndex: block.zIndex,
      cursor: block.locked ? 'default' : isEditing ? 'text' : 'move',
      pointerEvents: block.locked && !isEditing ? 'none' : 'auto',
      ...blockStyleToCSS(block.style),
    };
  }, [block, isEditing]);

  const Component = BLOCK_COMPONENTS[block.type];
  if (!Component) return null;

  return (
    <div
      ref={ref}
      className={`canvas-block${block.locked ? ' locked' : ''}${isEditing ? ' editing' : ''}`}
      data-block-id={block.id}
      data-block-type={block.type}
      style={containerStyle}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={() => !block.locked && setHovered(block.id)}
      onMouseLeave={() => setHovered(null)}
    >
      {!isSelected && !block.locked && <div className="block-hover-outline" style={{ position: 'absolute', inset: -1, borderRadius: 'inherit', pointerEvents: 'none' }} />}
      <Component block={block} isEditing={isEditing} />
    </div>
  );
}
