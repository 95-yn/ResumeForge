// Auto-generated — do not edit manually
export interface TemplateSchema {
  name: string;
  [key: string]: unknown;
}

export interface TemplateData {
  slug: string;
  name: string;
  category: string;
  html: string;
  css: string;
  schema: TemplateSchema;
}

const template: TemplateData = {
    slug: 'campus-spark',
    name: '校招·项目导向',
    category: 'campus',
    html: `<div class="resume campus-spark">
  <header class="resume-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="accent-line"></div>
    <div class="contact">
      {{#if basics.email}}<span class="contact-item"><span class="contact-label">邮箱</span><span data-field="basics.email">{{{basics.email}}}</span></span>{{/if}}
      {{#if basics.phone}}<span class="contact-item"><span class="contact-label">电话</span><span data-field="basics.phone">{{{basics.phone}}}</span></span>{{/if}}
      {{#if basics.location}}<span class="contact-item"><span class="contact-label">城市</span><span data-field="basics.location">{{{basics.location}}}</span></span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="section"><h2 class="section-title">个人简介</h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>
  {{/if}}
  {{#if projects.length}}
  <section class="section" data-section="projects"><h2 class="section-title">项目经历</h2>
    {{#each projects}}<div class="entry project-entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-header"><h3><span class="project-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="separator"> — </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="section" data-section="skills"><h2 class="section-title">专业技能</h2><div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>
  {{/if}}
  {{#if education.length}}
  <section class="section" data-section="education"><h2 class="section-title">教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-header"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="section" data-section="experience"><h2 class="section-title">工作经历</h2>
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="separator"> — </span><span data-field="experience.{{@index}}.position">{{{position}}}</span></h3><span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span></div>
      {{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.campus-spark {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}

/* ── Header ── */
.resume.campus-spark .resume-header {
  padding-bottom: 12px;
  margin-bottom: 14px;
}

.resume.campus-spark .resume-header h1 {
  font-size: 21pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 1px;
  line-height: 1.2;
}

.resume.campus-spark .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 3px;
  font-weight: 400;
}

.resume.campus-spark .accent-line {
  width: 48px;
  height: 2px;
  background: #B0463A;
  margin-top: 8px;
  border-radius: 1px;
}

.resume.campus-spark .contact {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  font-size: 9pt;
  color: #44403C;
}

.resume.campus-spark .contact-item {
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
}

.resume.campus-spark .contact-label {
  font-size: 8pt;
  color: #78716C;
  letter-spacing: 0.5px;
}

/* ── Section ── */
.resume.campus-spark .section { margin-bottom: 11px; }

.resume.campus-spark .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D6D3D1;
  margin-bottom: 7px;
}

/* ── Entry ── */
.resume.campus-spark .entry { margin-bottom: 8px; }
.resume.campus-spark .entry:last-child { margin-bottom: 0; }

.resume.campus-spark .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.campus-spark .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}

.resume.campus-spark .separator { color: #A8A29E; }

/* ── Projects (the stars) ── */
.resume.campus-spark .project-entry {
  padding-left: 14px;
  position: relative;
}

.resume.campus-spark .project-entry::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #B0463A;
}

.resume.campus-spark .project-name {
  color: #B0463A;
  font-weight: 700;
}

.resume.campus-spark .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.campus-spark .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.campus-spark .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.resume.campus-spark .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.campus-spark .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.resume.campus-spark .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.campus-spark .tag {
  background: transparent;
  border: 1px solid #B0463A;
  padding: 2px 9px;
  border-radius: 3px;
  font-size: 9pt;
  color: #44403C;
}

.resume.campus-spark li p, .resume.campus-spark li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.campus-spark { margin: 0; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.resume.campus-spark .tag, .resume.campus-spark .skill-tag, .resume.campus-spark .skill, .resume.campus-spark .skills span, .resume.campus-spark .skill-tags > *, .resume.campus-spark [class*='skill'] span, .resume.campus-spark [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
.resume.campus-spark li p, .resume.campus-spark li div { margin: 0; padding: 0; display: inline; }
`,
    schema: {
          "templateId": "campus-spark",
          "version": "1.0.0",
          "name": "校招·项目导向",
          "sections": [
                {
                      "key": "basics",
                      "label": "基本信息",
                      "fields": [
                            {
                                  "key": "name",
                                  "label": "姓名",
                                  "type": "text",
                                  "required": true
                            },
                            {
                                  "key": "title",
                                  "label": "职位",
                                  "type": "text"
                            },
                            {
                                  "key": "email",
                                  "label": "邮箱",
                                  "type": "email",
                                  "required": true
                            },
                            {
                                  "key": "phone",
                                  "label": "电话",
                                  "type": "tel"
                            },
                            {
                                  "key": "location",
                                  "label": "所在城市",
                                  "type": "text"
                            },
                            {
                                  "key": "avatar",
                                  "label": "头像",
                                  "type": "image"
                            },
                            {
                                  "key": "summary",
                                  "label": "个人简介",
                                  "type": "richtext"
                            }
                      ]
                },
                {
                      "key": "experience",
                      "label": "工作经历",
                      "type": "array",
                      "fields": [
                            {
                                  "key": "company",
                                  "label": "公司",
                                  "type": "text",
                                  "required": true
                            },
                            {
                                  "key": "position",
                                  "label": "职位",
                                  "type": "text",
                                  "required": true
                            },
                            {
                                  "key": "startDate",
                                  "label": "开始日期",
                                  "type": "date"
                            },
                            {
                                  "key": "endDate",
                                  "label": "结束日期",
                                  "type": "date"
                            },
                            {
                                  "key": "highlights",
                                  "label": "工作亮点",
                                  "type": "array:text"
                            }
                      ]
                },
                {
                      "key": "education",
                      "label": "教育经历",
                      "type": "array",
                      "fields": [
                            {
                                  "key": "institution",
                                  "label": "学校",
                                  "type": "text",
                                  "required": true
                            },
                            {
                                  "key": "area",
                                  "label": "专业",
                                  "type": "text"
                            },
                            {
                                  "key": "studyType",
                                  "label": "学历",
                                  "type": "select",
                                  "options": [
                                        "高中",
                                        "大专",
                                        "本科",
                                        "硕士",
                                        "博士"
                                  ]
                            },
                            {
                                  "key": "startDate",
                                  "label": "开始日期",
                                  "type": "date"
                            },
                            {
                                  "key": "endDate",
                                  "label": "结束日期",
                                  "type": "date"
                            }
                      ]
                },
                {
                      "key": "skills",
                      "label": "技能",
                      "type": "array",
                      "fields": [
                            {
                                  "key": "name",
                                  "label": "技能名称",
                                  "type": "text"
                            },
                            {
                                  "key": "level",
                                  "label": "熟练度",
                                  "type": "select",
                                  "options": [
                                        "了解",
                                        "熟悉",
                                        "掌握",
                                        "精通"
                                  ]
                            }
                      ]
                },
                {
                      "key": "projects",
                      "label": "项目经历",
                      "type": "array",
                      "fields": [
                            {
                                  "key": "name",
                                  "label": "项目名称",
                                  "type": "text"
                            },
                            {
                                  "key": "role",
                                  "label": "担任角色",
                                  "type": "text"
                            },
                            {
                                  "key": "description",
                                  "label": "项目描述",
                                  "type": "richtext"
                            },
                            {
                                  "key": "highlights",
                                  "label": "项目亮点",
                                  "type": "array:text"
                            }
                      ]
                }
          ]
    },
  };

export default template;
