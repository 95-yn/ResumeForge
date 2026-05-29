/**
 * editor-colors — 富文本编辑器统一调色板（FloatingEditor + InlineRichText 共用）
 *
 * 设计约束（来自 DESIGN.md）：
 *   - brick-red #B0463A 是编辑器唯一强调色；cyan-marine #1E5A6B 是专业蓝。
 *   - 禁止冷蓝（#2563EB）、紫（#7C3AED）、冷灰（#6B7280 系）注入到简历文档里。
 *   - 这些色会渲染进用户的简历正文，必须暖调、克制、印刷品级。
 * 因此这里只保留 ink / stone / brick-red / cyan-marine / 暖棕金 family，
 * 去掉了原先两套编辑器各自携带的彩虹色（红橙黄绿蓝紫）。
 */

export interface SwatchColor {
  color: string;
  label: string;
}

/** 文字色：暖色专业渐变，锚定 ink-warm / brick-red / cyan-marine */
export const TEXT_COLORS: SwatchColor[] = [
  { color: '#1C1917', label: '墨黑' },
  { color: '#44403C', label: '深灰' },
  { color: '#78716C', label: '中灰' },
  { color: '#B0463A', label: '砖红' },
  { color: '#A1532A', label: '赭橙' },
  { color: '#8A6D3B', label: '金棕' },
  { color: '#1E5A6B', label: '青蓝' },
  { color: '#3D2A1A', label: '咖啡' },
];

/** 高亮底色：与文字色配套的极浅暖调；首项 transparent 表示无底色 */
export const BG_COLORS: SwatchColor[] = [
  { color: 'transparent', label: '无' },
  { color: '#F7E8E5', label: '浅红' },
  { color: '#F5E9DC', label: '浅橙' },
  { color: '#F3ECD9', label: '浅金' },
  { color: '#E3ECEE', label: '浅青' },
  { color: '#EDE7E0', label: '浅咖' },
  { color: '#F5F5F4', label: '浅灰' },
];

/** 链接色：cyan-marine，专业且在调色板内（取代原先冷蓝 #0369A1） */
export const LINK_COLOR = '#1E5A6B';
