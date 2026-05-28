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
    slug: 'minimal',
    name: '极简风格',
    category: 'minimal',
    html: `<div class="resume minimal">
  <header><h1 data-field="basics.name">{{{basics.name}}}</h1>
    <div class="contact-line">{{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}{{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}{{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}</div>
  </header>
  {{#if basics.title}}<p class="jobtitle" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
  {{#if basics.summary}}<div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>{{#each experience}}<div class="item" data-entry="experience" data-entry-index="{{@index}}"><div class="row"><strong data-field="experience.{{@index}}.company">{{{company}}}</strong><span><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span></div><div class="role" data-field="experience.{{@index}}.position">{{{position}}}</div>{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}</section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2>教育背景</h2>{{#each education}}<div class="item" data-entry="education" data-entry-index="{{@index}}"><div class="row"><strong data-field="education.{{@index}}.institution">{{{institution}}}</strong><span><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><div class="role"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></div></div>{{/each}}</section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2>技能</h2><p class="inline-list">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#unless @last}}, {{/unless}}{{/each}}</p></section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>{{#each projects}}<div class="item" data-entry="projects" data-entry-index="{{@index}}"><div class="row"><strong data-field="projects.{{@index}}.name">{{{name}}}</strong><span><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if role}}<div class="role" data-field="projects.{{@index}}.role">{{{role}}}</div>{{/if}}{{#if description}}<div data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}</section>{{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.minimal {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 22mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #1C1917;
  background: #fff;
}

/* ── Header ── */
header { margin-bottom: 18px; }

header h1 {
  font-family: Georgia, 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 22pt;
  font-weight: 400;
  color: #1C1917;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.contact-line {
  font-size: 9pt;
  color: #78716C;
  margin-top: 6px;
  line-height: 1.5;
}

.contact-line span + span::before {
  content: " · ";
  color: #D6D3D1;
}

/* ── Summary ── */
.summary {
  font-size: 9.5pt;
  color: #57534E;
  margin-bottom: 16px;
  line-height: 1.7;
}

/* ── Section ── */
section { margin-bottom: 14px; }

section h2 {
  font-size: 9pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #1C1917;
  padding-bottom: 5px;
  margin-bottom: 8px;
  border-bottom: none;
  position: relative;
}

section h2::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #1C1917;
  opacity: 0.15;
}

/* ── Item ── */
.item { margin-bottom: 8px; }
.item:last-child { margin-bottom: 0; }

.row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.row strong {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}

.row span {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.role {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

ul {
  padding-left: 16px;
  margin-top: 4px;
}

li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.55;
}

.inline-list {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.7;
}

section p {
  font-size: 9.5pt;
  color: #57534E;
  margin-top: 3px;
  line-height: 1.6;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.minimal { margin: 0; padding: 20mm 22mm; }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "minimal",
          "version": "1.0.0",
          "name": "极简风格",
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
