export interface FontDef {
  family: string;
  label: string;
  category: 'serif' | 'sans-serif' | 'monospace' | 'display' | 'handwriting';
  weights: number[];
  lang: 'en' | 'zh' | 'both';
  source: 'google' | 'system' | 'bundled';
  url?: string;
}

export const FONT_CATALOG: FontDef[] = [
  // Chinese fonts
  { family: 'Noto Sans SC', label: '思源黑体', category: 'sans-serif', weights: [300, 400, 500, 700], lang: 'zh', source: 'google' },
  { family: 'Noto Serif SC', label: '思源宋体', category: 'serif', weights: [400, 500, 600, 700], lang: 'zh', source: 'google' },
  { family: 'ZCOOL XiaoWei', label: '站酷小薇', category: 'serif', weights: [400], lang: 'zh', source: 'google' },
  { family: 'ZCOOL QingKe HuangYou', label: '站酷庆科黄油体', category: 'display', weights: [400], lang: 'zh', source: 'google' },
  { family: 'Ma Shan Zheng', label: '马善政楷书', category: 'handwriting', weights: [400], lang: 'zh', source: 'google' },
  { family: 'PingFang SC', label: '苹方', category: 'sans-serif', weights: [300, 400, 500, 600], lang: 'zh', source: 'system' },
  { family: 'Microsoft YaHei', label: '微软雅黑', category: 'sans-serif', weights: [400, 700], lang: 'zh', source: 'system' },
  { family: 'SimSun', label: '宋体', category: 'serif', weights: [400], lang: 'zh', source: 'system' },
  { family: 'KaiTi', label: '楷体', category: 'serif', weights: [400], lang: 'zh', source: 'system' },

  // English fonts
  { family: 'Plus Jakarta Sans', label: 'Plus Jakarta Sans', category: 'sans-serif', weights: [400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Inter', label: 'Inter', category: 'sans-serif', weights: [300, 400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Roboto', label: 'Roboto', category: 'sans-serif', weights: [300, 400, 500, 700], lang: 'en', source: 'google' },
  { family: 'Open Sans', label: 'Open Sans', category: 'sans-serif', weights: [300, 400, 600, 700], lang: 'en', source: 'google' },
  { family: 'Lato', label: 'Lato', category: 'sans-serif', weights: [300, 400, 700], lang: 'en', source: 'google' },
  { family: 'Montserrat', label: 'Montserrat', category: 'sans-serif', weights: [300, 400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Poppins', label: 'Poppins', category: 'sans-serif', weights: [300, 400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Raleway', label: 'Raleway', category: 'sans-serif', weights: [300, 400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Playfair Display', label: 'Playfair Display', category: 'serif', weights: [400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Merriweather', label: 'Merriweather', category: 'serif', weights: [300, 400, 700], lang: 'en', source: 'google' },
  { family: 'Lora', label: 'Lora', category: 'serif', weights: [400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Source Code Pro', label: 'Source Code Pro', category: 'monospace', weights: [300, 400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'JetBrains Mono', label: 'JetBrains Mono', category: 'monospace', weights: [400, 500, 700], lang: 'en', source: 'google' },
  { family: 'Caveat', label: 'Caveat', category: 'handwriting', weights: [400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Dancing Script', label: 'Dancing Script', category: 'handwriting', weights: [400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'Cormorant Garamond', label: 'Cormorant Garamond', category: 'serif', weights: [300, 400, 500, 600, 700], lang: 'en', source: 'google' },
  { family: 'DM Sans', label: 'DM Sans', category: 'sans-serif', weights: [400, 500, 700], lang: 'en', source: 'google' },
  { family: 'Space Grotesk', label: 'Space Grotesk', category: 'sans-serif', weights: [300, 400, 500, 600, 700], lang: 'en', source: 'google' },
];

const loadedFonts = new Set<string>();

export function loadGoogleFont(family: string, weights?: number[]): Promise<void> {
  const key = `${family}:${(weights || [400]).join(',')}`;
  if (loadedFonts.has(key)) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const def = FONT_CATALOG.find(f => f.family === family);
    if (!def || def.source === 'system') {
      loadedFonts.add(key);
      resolve();
      return;
    }

    const w = weights || def.weights;
    const wStr = w.join(';');
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${wStr}&display=swap`;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = () => { loadedFonts.add(key); resolve(); };
    link.onerror = () => reject(new Error(`Failed to load font: ${family}`));
    document.head.appendChild(link);
  });
}

export function getFontStack(family: string): string {
  const def = FONT_CATALOG.find(f => f.family === family);
  if (!def) return `'${family}', sans-serif`;
  const fallbacks = def.lang === 'zh'
    ? "'PingFang SC', 'Microsoft YaHei', sans-serif"
    : def.category === 'serif'
      ? "'Georgia', 'Times New Roman', serif"
      : def.category === 'monospace'
        ? "'Consolas', 'Courier New', monospace"
        : "'-apple-system', 'Helvetica Neue', sans-serif";
  return `'${family}', ${fallbacks}`;
}

export function isFontLoaded(family: string): boolean {
  return loadedFonts.has(family) || document.fonts.check(`16px "${family}"`);
}
