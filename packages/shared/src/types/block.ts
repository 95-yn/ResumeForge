export type BlockType =
  | 'text'
  | 'heading'
  | 'image'
  | 'icon'
  | 'shape'
  | 'divider'
  | 'timeline'
  | 'skill-bar'
  | 'skill-radar'
  | 'rating'
  | 'tag-cloud'
  | 'table'
  | 'qrcode'
  | 'section'
  | 'columns'
  | 'spacer'
  | 'page-break';

export interface GradientStop {
  offset: number;
  color: string;
}

export interface BoxShadow {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
}

export interface BlockStyle {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';

  color?: string;
  backgroundColor?: string;
  gradient?: { type: 'linear' | 'radial'; angle?: number; stops: GradientStop[] };
  opacity?: number;

  borderWidth?: number;
  borderColor?: string;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  borderRadius?: number | [number, number, number, number];

  padding?: [number, number, number, number];
  margin?: [number, number, number, number];

  boxShadow?: BoxShadow;
  textShadow?: { x: number; y: number; blur: number; color: string };

  mixBlendMode?: string;
  filter?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  overflow?: 'visible' | 'hidden' | 'auto';
}

export interface Block {
  id: string;
  type: BlockType;
  position: { x: number; y: number };
  size: { width: number | 'auto'; height: number | 'auto' };
  rotation: number;
  style: BlockStyle;
  locked: boolean;
  visible: boolean;
  children?: string[];
  parentId?: string;
  data: BlockData;
  zIndex: number;
  name?: string;
}

export type BlockData =
  | TextBlockData
  | HeadingBlockData
  | ImageBlockData
  | IconBlockData
  | ShapeBlockData
  | DividerBlockData
  | TimelineBlockData
  | SkillBarBlockData
  | SkillRadarBlockData
  | RatingBlockData
  | TagCloudBlockData
  | TableBlockData
  | QRCodeBlockData
  | SectionBlockData
  | ColumnsBlockData
  | SpacerBlockData
  | PageBreakBlockData;

export interface TextBlockData {
  type: 'text';
  html: string;
  placeholder?: string;
  bindingPath?: string;
}

export interface HeadingBlockData {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  html: string;
  bindingPath?: string;
}

export interface ImageBlockData {
  type: 'image';
  src: string;
  alt?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  clipShape?: 'none' | 'circle' | 'rounded' | 'hexagon';
  filter?: string;
  bindingPath?: string;
}

export interface IconBlockData {
  type: 'icon';
  icon: string;
  iconSet: 'lucide' | 'emoji' | 'custom';
  size: number;
  color?: string;
}

export interface ShapeBlockData {
  type: 'shape';
  shape: 'rectangle' | 'circle' | 'ellipse' | 'triangle' | 'diamond' | 'line' | 'arrow';
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export interface DividerBlockData {
  type: 'divider';
  variant: 'solid' | 'dashed' | 'dotted' | 'gradient' | 'ornament';
  thickness: number;
  color?: string;
}

export interface TimelineBlockData {
  type: 'timeline';
  items: Array<{
    title: string;
    subtitle?: string;
    date: string;
    description?: string;
    highlights?: string[];
  }>;
  layout: 'left' | 'right' | 'alternate';
  lineColor?: string;
  dotColor?: string;
  bindingSection?: string;
}

export interface SkillBarBlockData {
  type: 'skill-bar';
  items: Array<{ name: string; level: number; color?: string }>;
  maxLevel: number;
  barHeight: number;
  showLabel: boolean;
  showPercentage: boolean;
  barColor?: string;
  trackColor?: string;
  bindingSection?: string;
}

export interface SkillRadarBlockData {
  type: 'skill-radar';
  items: Array<{ name: string; level: number }>;
  maxLevel: number;
  lineColor?: string;
  fillColor?: string;
  showLabels: boolean;
}

export interface RatingBlockData {
  type: 'rating';
  items: Array<{ name: string; rating: number }>;
  maxRating: number;
  symbol: 'star' | 'circle' | 'diamond' | 'heart';
  activeColor?: string;
  inactiveColor?: string;
  bindingSection?: string;
}

export interface TagCloudBlockData {
  type: 'tag-cloud';
  tags: Array<{ text: string; color?: string; bgColor?: string }>;
  layout: 'wrap' | 'grid';
  gap: number;
  bindingSection?: string;
}

export interface TableBlockData {
  type: 'table';
  rows: number;
  cols: number;
  cells: string[][];
  headerRow: boolean;
  headerCol: boolean;
  colWidths?: number[];
  borderColor?: string;
  headerBg?: string;
}

export interface QRCodeBlockData {
  type: 'qrcode';
  value: string;
  size: number;
  fgColor?: string;
  bgColor?: string;
}

export interface SectionBlockData {
  type: 'section';
  layout: 'vertical' | 'horizontal';
  gap: number;
  title?: string;
}

export interface ColumnsBlockData {
  type: 'columns';
  columns: number;
  gap: number;
  ratios: number[];
}

export interface SpacerBlockData {
  type: 'spacer';
  height: number;
}

export interface PageBreakBlockData {
  type: 'page-break';
}

export interface CanvasConfig {
  width: number;
  height: number;
  unit: 'mm' | 'px';
  background: string;
  showGrid: boolean;
  gridSize: number;
  snapToGrid: boolean;
  showRulers: boolean;
  showGuides: boolean;
  guides: Array<{ axis: 'x' | 'y'; position: number }>;
}

export interface CanvasTemplate {
  id: string;
  name: string;
  category: string;
  thumbnail?: string;
  canvas: CanvasConfig;
  blocks: Block[];
  variables: TemplateVariables;
}

export interface TemplateVariables {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  headingFont: string;
  bodyFont: string;
  baseFontSize: number;
  sectionSpacing: number;
  pageMargin: number;
}

export interface AlignmentGuide {
  axis: 'x' | 'y';
  position: number;
  type: 'edge' | 'center' | 'custom';
  sourceBlockId?: string;
}

export type ExportFormat = 'pdf' | 'html' | 'png' | 'docx' | 'markdown' | 'json';

export interface ExportOptions {
  format: ExportFormat;
  paperSize: 'a4' | 'letter' | 'custom';
  customSize?: { width: number; height: number };
  margin: [number, number, number, number];
  dpi: 72 | 150 | 300;
  embedFonts: boolean;
  includeLinks: boolean;
}
