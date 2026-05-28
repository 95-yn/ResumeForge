import type { Block, BlockData, TemplateVariables } from '@resume/shared';
import type { ResumeData } from '@resume/shared';
import { generateId, A4_PX } from './geometry';

// ---------------------------------------------------------------------------
// Converter: ResumeData (old Handlebars shape) -> Block[] (new canvas)
// ---------------------------------------------------------------------------

const PAGE_MARGIN = 40;
const CONTENT_WIDTH = Math.round(A4_PX.width) - PAGE_MARGIN * 2;
const SECTION_GAP = 24;
const ITEM_GAP = 14;

// Skill level text -> numeric percentage (0-100)
function skillLevelToNumber(level?: string): number {
  if (!level) return 60;
  const map: Record<string, number> = {
    '精通': 95, '掌握': 80, '熟悉': 65, '了解': 45, '入门': 30,
    'expert': 95, 'advanced': 80, 'intermediate': 65, 'beginner': 45,
  };
  return map[level.toLowerCase()] ?? 60;
}

function createBlock(
  type: Block['type'],
  data: BlockData,
  x: number,
  y: number,
  width: number | 'auto' = CONTENT_WIDTH,
  height: number | 'auto' = 'auto',
  extras?: Partial<Block>,
): Block {
  return {
    id: generateId(),
    type,
    position: { x, y },
    size: { width, height },
    rotation: 0,
    style: {},
    locked: false,
    visible: true,
    data,
    zIndex: 0,
    ...extras,
  };
}

/**
 * Convert the existing ResumeData object into a Block[] array suitable for
 * the canvas engine.  Blocks are laid out in a single-column, top-to-bottom
 * flow with smart spacing.
 */
export function convertResumeDataToBlocks(
  resumeData: ResumeData,
  _templateVariables?: Partial<TemplateVariables>,
): Block[] {
  const blocks: Block[] = [];
  let cursorY = PAGE_MARGIN;
  let zIndex = 0;

  const push = (block: Block) => {
    block.zIndex = zIndex++;
    blocks.push(block);
  };

  const advanceCursor = (blockHeight: number) => {
    cursorY += blockHeight;
  };

  // -----------------------------------------------------------------------
  // BASICS: Name
  // -----------------------------------------------------------------------
  if (resumeData.basics?.name) {
    const nameBlock = createBlock('heading', {
      type: 'heading',
      level: 1,
      html: `<h1>${resumeData.basics.name}</h1>`,
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 28, fontWeight: 700, color: '#1C1917' },
      name: '姓名',
    });
    push(nameBlock);
    advanceCursor(42);
  }

  // BASICS: Title
  if (resumeData.basics?.title) {
    const titleBlock = createBlock('text', {
      type: 'text',
      html: `<p>${resumeData.basics.title}</p>`,
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 16, fontWeight: 500, color: '#78716C' },
      name: '目标职位',
    });
    push(titleBlock);
    advanceCursor(28);
  }

  // BASICS: Contact info line (email, phone, location)
  {
    const contactParts: string[] = [];
    if (resumeData.basics?.email) contactParts.push(resumeData.basics.email);
    if (resumeData.basics?.phone) contactParts.push(resumeData.basics.phone);
    if (resumeData.basics?.location) contactParts.push(resumeData.basics.location);

    if (contactParts.length > 0) {
      const contactBlock = createBlock('text', {
        type: 'text',
        html: `<p>${contactParts.join('  |  ')}</p>`,
      }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
        style: { fontSize: 12, color: '#A8A29E' },
        name: '联系方式',
      });
      push(contactBlock);
      advanceCursor(22);
    }
  }

  // Divider after basics
  {
    const dividerBlock = createBlock('divider', {
      type: 'divider',
      variant: 'solid',
      thickness: 1,
      color: '#E7E5E4',
    }, PAGE_MARGIN, cursorY + 6, CONTENT_WIDTH, 1, { name: '分割线' });
    push(dividerBlock);
    advanceCursor(18);
  }

  // BASICS: Summary
  if (resumeData.basics?.summary) {
    const summaryHeading = createBlock('heading', {
      type: 'heading',
      level: 2,
      html: '<h2>个人简介</h2>',
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 16, fontWeight: 600, color: '#1C1917' },
      name: '个人简介标题',
    });
    push(summaryHeading);
    advanceCursor(28);

    const summaryBlock = createBlock('text', {
      type: 'text',
      html: `<p>${resumeData.basics.summary}</p>`,
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 13, lineHeight: 1.7, color: '#44403C' },
      name: '个人简介',
    });
    push(summaryBlock);
    advanceCursor(60);
    cursorY += SECTION_GAP;
  }

  // -----------------------------------------------------------------------
  // EXPERIENCE
  // -----------------------------------------------------------------------
  if (resumeData.experience?.length) {
    // Section heading
    const heading = createBlock('heading', {
      type: 'heading',
      level: 2,
      html: '<h2>工作经历</h2>',
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 16, fontWeight: 600, color: '#1C1917' },
      name: '工作经历标题',
    });
    push(heading);
    advanceCursor(30);

    // Timeline block
    const timelineItems = resumeData.experience.map(exp => ({
      title: exp.position,
      subtitle: exp.company,
      date: [exp.startDate, exp.endDate].filter(Boolean).join(' - '),
      description: '',
      highlights: exp.highlights || [],
    }));

    const timelineBlock = createBlock('timeline', {
      type: 'timeline',
      items: timelineItems,
      layout: 'left',
      lineColor: '#E7E5E4',
      dotColor: '#1C1917',
      bindingSection: 'experience',
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      name: '工作经历',
    });
    push(timelineBlock);

    // Estimate height: ~80px per item
    advanceCursor(timelineItems.length * 80 + ITEM_GAP);
    cursorY += SECTION_GAP;
  }

  // -----------------------------------------------------------------------
  // EDUCATION
  // -----------------------------------------------------------------------
  if (resumeData.education?.length) {
    const heading = createBlock('heading', {
      type: 'heading',
      level: 2,
      html: '<h2>教育背景</h2>',
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 16, fontWeight: 600, color: '#1C1917' },
      name: '教育背景标题',
    });
    push(heading);
    advanceCursor(30);

    const eduItems = resumeData.education.map(edu => ({
      title: edu.institution,
      subtitle: [edu.studyType, edu.area].filter(Boolean).join(' - '),
      date: [edu.startDate, edu.endDate].filter(Boolean).join(' - '),
      description: '',
      highlights: [] as string[],
    }));

    const timelineBlock = createBlock('timeline', {
      type: 'timeline',
      items: eduItems,
      layout: 'left',
      lineColor: '#E7E5E4',
      dotColor: '#1C1917',
      bindingSection: 'education',
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      name: '教育背景',
    });
    push(timelineBlock);
    advanceCursor(eduItems.length * 56 + ITEM_GAP);
    cursorY += SECTION_GAP;
  }

  // -----------------------------------------------------------------------
  // SKILLS
  // -----------------------------------------------------------------------
  if (resumeData.skills?.length) {
    const heading = createBlock('heading', {
      type: 'heading',
      level: 2,
      html: '<h2>专业技能</h2>',
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 16, fontWeight: 600, color: '#1C1917' },
      name: '专业技能标题',
    });
    push(heading);
    advanceCursor(30);

    // If skills have levels that look like text descriptions, use skill-bar
    const hasLevelText = resumeData.skills.some(s => s.level && isNaN(Number(s.level)));

    if (hasLevelText) {
      const skillBarBlock = createBlock('skill-bar', {
        type: 'skill-bar',
        items: resumeData.skills.map(s => ({
          name: s.name,
          level: skillLevelToNumber(s.level),
        })),
        maxLevel: 100,
        barHeight: 6,
        showLabel: true,
        showPercentage: false,
        barColor: '#1C1917',
        trackColor: '#F5F5F4',
        bindingSection: 'skills',
      }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
        name: '专业技能',
      });
      push(skillBarBlock);
      advanceCursor(resumeData.skills.length * 28 + ITEM_GAP);
    } else {
      // Use tag cloud for simple skill lists
      const tagCloudBlock = createBlock('tag-cloud', {
        type: 'tag-cloud',
        tags: resumeData.skills.map(s => ({
          text: s.name + (s.level ? ` (${s.level})` : ''),
        })),
        layout: 'wrap',
        gap: 8,
        bindingSection: 'skills',
      }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
        name: '专业技能',
      });
      push(tagCloudBlock);
      advanceCursor(Math.ceil(resumeData.skills.length / 4) * 32 + ITEM_GAP);
    }
    cursorY += SECTION_GAP;
  }

  // -----------------------------------------------------------------------
  // PROJECTS
  // -----------------------------------------------------------------------
  if (resumeData.projects?.length) {
    const heading = createBlock('heading', {
      type: 'heading',
      level: 2,
      html: '<h2>项目经历</h2>',
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 16, fontWeight: 600, color: '#1C1917' },
      name: '项目经历标题',
    });
    push(heading);
    advanceCursor(30);

    for (const project of resumeData.projects) {
      // Project name + role
      const projHeading = createBlock('heading', {
        type: 'heading',
        level: 3,
        html: `<h3>${project.name}${project.role ? ` <span style="font-weight:400;color:#78716C">/ ${project.role}</span>` : ''}</h3>`,
      }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
        style: { fontSize: 14, fontWeight: 600, color: '#1C1917' },
        name: `项目: ${project.name}`,
      });
      push(projHeading);
      advanceCursor(24);

      // Date
      const dateStr = [project.startDate, project.endDate].filter(Boolean).join(' - ');
      if (dateStr) {
        const dateBlock = createBlock('text', {
          type: 'text',
          html: `<p>${dateStr}</p>`,
        }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
          style: { fontSize: 12, color: '#A8A29E' },
        });
        push(dateBlock);
        advanceCursor(20);
      }

      // Description
      if (project.description) {
        const descBlock = createBlock('text', {
          type: 'text',
          html: `<p>${project.description}</p>`,
        }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
          style: { fontSize: 13, lineHeight: 1.6, color: '#44403C' },
        });
        push(descBlock);
        advanceCursor(24);
      }

      // Highlights
      if (project.highlights?.length) {
        const highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join('');
        const highlightsBlock = createBlock('text', {
          type: 'text',
          html: `<ul style="padding-left:16px;margin:0">${highlightsHtml}</ul>`,
        }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
          style: { fontSize: 13, lineHeight: 1.6, color: '#44403C' },
        });
        push(highlightsBlock);
        advanceCursor(project.highlights.length * 22 + 8);
      }

      cursorY += ITEM_GAP;
    }
    cursorY += SECTION_GAP;
  }

  // -----------------------------------------------------------------------
  // Handle any extra custom sections in the resume data
  // -----------------------------------------------------------------------
  const knownKeys = new Set(['basics', 'experience', 'education', 'skills', 'projects', 'settings']);
  for (const [key, value] of Object.entries(resumeData)) {
    if (knownKeys.has(key)) continue;
    if (!Array.isArray(value) || value.length === 0) continue;

    // Generic section heading (capitalize key)
    const heading = createBlock('heading', {
      type: 'heading',
      level: 2,
      html: `<h2>${key}</h2>`,
    }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
      style: { fontSize: 16, fontWeight: 600, color: '#1C1917' },
      name: key,
    });
    push(heading);
    advanceCursor(30);

    // Render each item as text
    for (const item of value) {
      const text = typeof item === 'string' ? item : JSON.stringify(item);
      const textBlock = createBlock('text', {
        type: 'text',
        html: `<p>${text}</p>`,
      }, PAGE_MARGIN, cursorY, CONTENT_WIDTH, 'auto', {
        style: { fontSize: 13, color: '#44403C' },
      });
      push(textBlock);
      advanceCursor(24);
    }
    cursorY += SECTION_GAP;
  }

  return blocks;
}
