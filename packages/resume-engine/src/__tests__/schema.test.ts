import { describe, it, expect } from 'vitest';
import { validateResumeData } from '../schema';
import type { TemplateSchema, ResumeData } from '@resume/shared';

const classicSchema: TemplateSchema = {
  templateId: 'classic',
  version: '1.0.0',
  name: '经典简洁',
  sections: [
    {
      key: 'basics',
      label: '基本信息',
      fields: [
        { key: 'name', label: '姓名', type: 'text', required: true },
        { key: 'email', label: '邮箱', type: 'email', required: true },
        { key: 'phone', label: '电话', type: 'tel' },
      ],
    },
    {
      key: 'experience',
      label: '工作经历',
      type: 'array',
      fields: [
        { key: 'company', label: '公司', type: 'text', required: true },
        { key: 'position', label: '职位', type: 'text', required: true },
      ],
    },
  ],
};

describe('validateResumeData', () => {
  it('returns valid for complete data', () => {
    const data: ResumeData = {
      basics: { name: '张三', email: 'zhangsan@example.com', phone: '13800138000' },
      experience: [{ company: '字节跳动', position: '前端工程师', highlights: [] }],
      education: [],
      skills: [],
      projects: [],
    };
    const result = validateResumeData(data, classicSchema);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('returns errors for missing required fields', () => {
    const data: ResumeData = {
      basics: { name: '', email: '' },
      experience: [],
      education: [],
      skills: [],
      projects: [],
    };
    const result = validateResumeData(data, classicSchema);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors.some((e) => e.field === 'basics.name')).toBe(true);
    expect(result.errors.some((e) => e.field === 'basics.email')).toBe(true);
  });

  it('returns errors for required fields in array sections', () => {
    const data: ResumeData = {
      basics: { name: '张三', email: 'z@e.com' },
      experience: [{ company: '', position: '工程师', highlights: [] }],
      education: [],
      skills: [],
      projects: [],
    };
    const result = validateResumeData(data, classicSchema);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'experience[0].company')).toBe(true);
  });
});
