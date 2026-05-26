import { describe, it, expect } from 'vitest';
import { renderResume } from '../renderer';
import type { ResumeData } from '@resume/shared';

const html = `<div class="resume">
  <h1>{{basics.name}}</h1>
  <p>{{basics.email}}</p>
  {{#each experience}}
  <div class="exp">
    <h3>{{company}} — {{position}}</h3>
    {{#each highlights}}<li>{{this}}</li>{{/each}}
  </div>
  {{/each}}
  {{#if skills.length}}
  <div class="skills">
    {{#each skills}}<span>{{name}}</span>{{/each}}
  </div>
  {{/if}}
</div>`;

const css = `.resume { font-family: sans-serif; } .exp { margin: 10px 0; }`;

const data: ResumeData = {
  basics: { name: '张三', email: 'z@e.com' },
  experience: [{ company: '字节跳动', position: '前端', highlights: ['做了 A', '做了 B'] }],
  education: [],
  skills: [{ name: 'React' }, { name: 'TypeScript' }],
  projects: [],
};

describe('renderResume', () => {
  it('renders template with data and inlines CSS', () => {
    const result = renderResume({ html, css, data });
    expect(result).toContain('张三');
    expect(result).toContain('z@e.com');
    expect(result).toContain('字节跳动 — 前端');
    expect(result).toContain('做了 A');
    expect(result).toContain('React');
    expect(result).toContain('<style>');
    expect(result).toContain('font-family: sans-serif');
  });

  it('returns a complete HTML document', () => {
    const result = renderResume({ html, css, data });
    expect(result).toContain('<!DOCTYPE html>');
    expect(result).toContain('<html');
    expect(result).toContain('</html>');
  });

  it('handles empty arrays gracefully', () => {
    const emptyData: ResumeData = {
      basics: { name: '李四', email: 'l@e.com' },
      experience: [],
      education: [],
      skills: [],
      projects: [],
    };
    const result = renderResume({ html, css, data: emptyData });
    expect(result).toContain('李四');
    expect(result).not.toContain('skills');
  });
});
