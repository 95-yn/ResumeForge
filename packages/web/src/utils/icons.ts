export interface IconDef {
  name: string;
  svg: string;
  category: string;
}

export const ICON_CATEGORIES = ['联系方式', '社交媒体', '技能', '通用', '箭头', '形状'] as const;

export const ICONS: IconDef[] = [
  // Contact
  { name: 'email', category: '联系方式', svg: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
  { name: 'phone', category: '联系方式', svg: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>' },
  { name: 'map-pin', category: '联系方式', svg: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>' },
  { name: 'globe', category: '联系方式', svg: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>' },
  { name: 'link', category: '联系方式', svg: '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>' },

  // Social
  { name: 'github', category: '社交媒体', svg: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>' },
  { name: 'linkedin', category: '社交媒体', svg: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
  { name: 'twitter', category: '社交媒体', svg: '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>' },
  { name: 'wechat', category: '社交媒体', svg: '<path d="M8.5 2C4.36 2 1 4.69 1 8c0 1.79 1.02 3.38 2.62 4.5L3 15l2.64-1.32C6.56 13.88 7.51 14 8.5 14c.34 0 .68-.02 1-.06A5.97 5.97 0 009 12c0-3.31 3.13-6 7-6 .34 0 .68.02 1 .06C16.38 3.55 12.87 2 8.5 2zM6 6.5a1 1 0 110 2 1 1 0 010-2zm5 0a1 1 0 110 2 1 1 0 010-2z"/><path d="M23 12c0-2.76-2.69-5-6-5s-6 2.24-6 5 2.69 5 6 5c.8 0 1.56-.12 2.25-.34L22 18l-.5-2C22.58 15.05 23 13.58 23 12zm-8-1a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"/>' },

  // Skills & general
  { name: 'code', category: '技能', svg: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
  { name: 'database', category: '技能', svg: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>' },
  { name: 'server', category: '技能', svg: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>' },
  { name: 'cpu', category: '技能', svg: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>' },
  { name: 'award', category: '通用', svg: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>' },
  { name: 'briefcase', category: '通用', svg: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>' },
  { name: 'book', category: '通用', svg: '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>' },
  { name: 'graduation-cap', category: '通用', svg: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>' },
  { name: 'user', category: '通用', svg: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { name: 'calendar', category: '通用', svg: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
  { name: 'star', category: '通用', svg: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' },
  { name: 'heart', category: '通用', svg: '<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>' },
  { name: 'check-circle', category: '通用', svg: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
  { name: 'target', category: '通用', svg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>' },

  // Arrows
  { name: 'arrow-right', category: '箭头', svg: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>' },
  { name: 'arrow-up', category: '箭头', svg: '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>' },
  { name: 'chevron-right', category: '箭头', svg: '<polyline points="9 18 15 12 9 6"/>' },
  { name: 'chevron-down', category: '箭头', svg: '<polyline points="6 9 12 15 18 9"/>' },

  // Shapes
  { name: 'circle', category: '形状', svg: '<circle cx="12" cy="12" r="10"/>' },
  { name: 'square', category: '形状', svg: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>' },
  { name: 'triangle', category: '形状', svg: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>' },
  { name: 'diamond', category: '形状', svg: '<rect x="3.51" y="3.51" width="16.97" height="16.97" rx="1" ry="1" transform="rotate(45 12 12)"/>' },
  { name: 'minus', category: '形状', svg: '<line x1="5" y1="12" x2="19" y2="12"/>' },
];

export function renderIcon(name: string, size: number = 24, color: string = 'currentColor', strokeWidth: number = 2): string {
  const icon = ICONS.find(i => i.name === name);
  if (!icon) return '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${icon.svg}</svg>`;
}

export function getIconsByCategory(category: string): IconDef[] {
  return ICONS.filter(i => i.category === category);
}
