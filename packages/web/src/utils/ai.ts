/**
 * AI Engine Client — stub/mock implementations
 *
 * All functions simulate a 500ms network delay and return realistic placeholder data.
 * Replace with real API calls when the backend AI service is ready.
 */

export interface AIRequest {
  type: 'improve-text' | 'generate-summary' | 'translate' | 'suggest-layout' | 'check-ats' | 'generate-bullet';
  content: string;
  context?: Record<string, unknown>;
  targetLang?: 'zh' | 'en';
}

export interface AIResponse {
  result: string;
  suggestions?: string[];
  score?: number;
}

function delay(ms = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Improve writing quality of the given text.
 * Stub: returns original text with a "coming soon" suggestion.
 */
export async function improveText(text: string): Promise<AIResponse> {
  await delay(500);
  return {
    result: text,
    suggestions: ['AI 润色功能即将上线'],
  };
}

/**
 * Generate a professional summary from experience and skills data.
 */
export async function generateSummary(
  experience: string[],
  skills: string[],
): Promise<AIResponse> {
  await delay(500);
  const expText = experience.length > 0 ? experience.join('、') : '丰富的项目经验';
  const skillText = skills.length > 0 ? skills.join('、') : '多项专业技能';
  return {
    result: `具备${expText}等工作经验，熟练掌握${skillText}，拥有良好的团队协作能力与项目管理经验，致力于为企业创造价值。`,
    suggestions: [
      '建议补充量化的工作成果',
      '可以加入行业关键词提升 ATS 通过率',
    ],
  };
}

/**
 * Translate text between Chinese and English.
 */
export async function translateText(
  text: string,
  targetLang: 'zh' | 'en',
): Promise<AIResponse> {
  await delay(500);
  if (targetLang === 'en') {
    return {
      result: `[Translation placeholder] ${text}`,
      suggestions: ['翻译功能即将上线，当前返回占位文本'],
    };
  }
  return {
    result: `[翻译占位] ${text}`,
    suggestions: ['翻译功能即将上线，当前返回占位文本'],
  };
}

/**
 * Suggest an optimized layout for the resume.
 */
export async function suggestLayout(
  _resumeData: unknown,
): Promise<{ blocks: unknown[] }> {
  await delay(500);
  return {
    blocks: [
      { type: 'heading', suggestion: '建议将姓名放在页面顶部居中' },
      { type: 'text', suggestion: '摘要建议放在姓名下方，不超过 3 行' },
      { type: 'timeline', suggestion: '工作经历建议使用时间线布局，最新的在前' },
      { type: 'skill-bar', suggestion: '技能评分建议使用进度条展示' },
      { type: 'section', suggestion: '教育背景建议放在页面底部' },
    ],
  };
}

/**
 * Check ATS (Applicant Tracking System) compatibility.
 * Stub returns a score of 85 with sample issues.
 */
export async function checkATSCompatibility(
  _html: string,
): Promise<{ score: number; issues: string[] }> {
  await delay(500);
  return {
    score: 85,
    issues: [
      '建议使用标准字体（如宋体、微软雅黑）以提高解析成功率',
      '部分内容使用了图片或图标，ATS 可能无法识别',
      '缺少明确的「工作经历」标题，建议使用标准段落名称',
      '技能部分建议使用文字列表而非进度条或图表',
    ],
  };
}

/**
 * Generate STAR-format bullet points for a given role and company.
 */
export async function generateBulletPoints(
  role: string,
  company: string,
): Promise<string[]> {
  await delay(500);
  return [
    `在${company}担任${role}期间，主导完成了核心业务系统的架构升级，性能提升 40%`,
    `负责团队 5 人的技术管理与代码评审，推动代码质量评分从 B 提升至 A`,
    `设计并实施自动化测试方案，将回归测试时间从 2 天缩短至 4 小时`,
    `与产品、设计团队紧密协作，按期交付 3 个重大版本迭代`,
  ];
}

/**
 * Suggest a proficiency level (0-100) for a given skill.
 */
export async function suggestSkillLevel(skill: string): Promise<number> {
  await delay(500);
  // Simple heuristic based on skill name length as placeholder
  const levels: Record<string, number> = {
    'JavaScript': 90,
    'TypeScript': 85,
    'React': 88,
    'Vue': 82,
    'Node.js': 80,
    'Python': 75,
    'Java': 70,
    'CSS': 85,
    'HTML': 90,
    'SQL': 72,
    'Git': 88,
    'Docker': 68,
  };
  return levels[skill] ?? Math.min(95, Math.max(40, 50 + skill.length * 3));
}

/**
 * Suggest a color scheme based on industry.
 */
export async function suggestColorScheme(
  industry: string,
): Promise<{ primary: string; secondary: string; accent: string }> {
  await delay(500);
  const schemes: Record<string, { primary: string; secondary: string; accent: string }> = {
    '科技': { primary: '#1E40AF', secondary: '#3B82F6', accent: '#06B6D4' },
    '互联网': { primary: '#0F172A', secondary: '#475569', accent: '#3B82F6' },
    '金融': { primary: '#1C1917', secondary: '#78716C', accent: '#B45309' },
    '设计': { primary: '#4C1D95', secondary: '#7C3AED', accent: '#EC4899' },
    '教育': { primary: '#166534', secondary: '#16A34A', accent: '#2563EB' },
    '医疗': { primary: '#0E7490', secondary: '#06B6D4', accent: '#10B981' },
    '法律': { primary: '#1C1917', secondary: '#57534E', accent: '#92400E' },
    '传媒': { primary: '#9D174D', secondary: '#EC4899', accent: '#F59E0B' },
    '制造': { primary: '#374151', secondary: '#6B7280', accent: '#F97316' },
    '房地产': { primary: '#78350F', secondary: '#A16207', accent: '#D97706' },
  };
  return schemes[industry] ?? { primary: '#1C1917', secondary: '#78716C', accent: '#0369A1' };
}
