export interface HSL {
  h: number;
  s: number;
  l: number;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

export function hexToHsl(hex: string): HSL | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: h * 360, s, l };
}

export function hslToHex(h: number, s: number, l: number): string {
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  h /= 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
  const g = Math.round(hue2rgb(p, q, h) * 255);
  const b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
  return rgbToHex(r, g, b);
}

export function parseColor(color: string): { r: number; g: number; b: number; a: number } {
  if (color.startsWith('#')) {
    const rgb = hexToRgb(color);
    return rgb ? { ...rgb, a: 1 } : { r: 0, g: 0, b: 0, a: 1 };
  }
  const rgba = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(color);
  if (rgba) {
    return { r: +rgba[1], g: +rgba[2], b: +rgba[3], a: rgba[4] !== undefined ? +rgba[4] : 1 };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

export function toRgba(r: number, g: number, b: number, a: number): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function buildGradientCSS(gradient: { type: 'linear' | 'radial'; angle?: number; stops: Array<{ offset: number; color: string }> }): string {
  const stops = gradient.stops.map(s => `${s.color} ${s.offset * 100}%`).join(', ');
  if (gradient.type === 'radial') return `radial-gradient(circle, ${stops})`;
  return `linear-gradient(${gradient.angle ?? 180}deg, ${stops})`;
}

export const PALETTE = {
  primary: ['#1C1917', '#292524', '#44403C', '#57534E', '#78716C', '#A8A29E', '#D6D3D1', '#E7E5E4', '#F5F5F4', '#FAFAF9'],
  red: ['#7F1D1D', '#991B1B', '#B91C1C', '#DC2626', '#EF4444', '#F87171', '#FCA5A5', '#FECACA', '#FEE2E2', '#FEF2F2'],
  orange: ['#7C2D12', '#9A3412', '#C2410C', '#EA580C', '#F97316', '#FB923C', '#FDBA74', '#FED7AA', '#FFEDD5', '#FFF7ED'],
  yellow: ['#713F12', '#854D0E', '#A16207', '#CA8A04', '#EAB308', '#FACC15', '#FDE047', '#FEF08A', '#FEF9C3', '#FEFCE8'],
  green: ['#14532D', '#166534', '#15803D', '#16A34A', '#22C55E', '#4ADE80', '#86EFAC', '#BBF7D0', '#DCFCE7', '#F0FDF4'],
  blue: ['#1E3A5F', '#1E40AF', '#1D4ED8', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE', '#EFF6FF'],
  purple: ['#3B0764', '#4C1D95', '#5B21B6', '#6D28D9', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE'],
  pink: ['#831843', '#9D174D', '#BE185D', '#DB2777', '#EC4899', '#F472B6', '#F9A8D4', '#FBCFE8', '#FCE7F3', '#FDF2F8'],
} as const;

export const THEME_PRESETS = [
  { name: '经典黑白', primary: '#1C1917', secondary: '#78716C', accent: '#0369A1' },
  { name: '海洋蓝', primary: '#1E40AF', secondary: '#3B82F6', accent: '#06B6D4' },
  { name: '森林绿', primary: '#166534', secondary: '#16A34A', accent: '#84CC16' },
  { name: '优雅紫', primary: '#4C1D95', secondary: '#7C3AED', accent: '#EC4899' },
  { name: '暖橙', primary: '#9A3412', secondary: '#EA580C', accent: '#F59E0B' },
  { name: '玫瑰红', primary: '#9D174D', secondary: '#EC4899', accent: '#F472B6' },
  { name: '深邃灰', primary: '#374151', secondary: '#6B7280', accent: '#3B82F6' },
  { name: '咖啡棕', primary: '#78350F', secondary: '#A16207', accent: '#D97706' },
];
