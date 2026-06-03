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
    slug: 'pm-metrics',
    name: '产品·数据指标',
    category: 'profession',
    html: `<div class="resume pm-metrics">
  <header class="pm-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="pm-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="pm-contact">
      {{#if basics.email}}<span class="pm-contact-item"><span class="pm-contact-label">邮箱</span> <span data-field="basics.email">{{{basics.email}}}</span></span>{{/if}}
      {{#if basics.phone}}<span class="pm-contact-item"><span class="pm-contact-label">电话</span> <span data-field="basics.phone">{{{basics.phone}}}</span></span>{{/if}}
      {{#if basics.location}}<span class="pm-contact-item"><span class="pm-contact-label">城市</span> <span data-field="basics.location">{{{basics.location}}}</span></span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="section"><h2 class="section-title">个人简介</h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>
  {{/if}}
  {{#if experience.length}}
  <section class="section" data-section="experience"><h2 class="section-title">工作经历</h2>
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="separator"> — </span><span data-field="experience.{{@index}}.position">{{{position}}}</span></h3><span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span></div>
      {{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="section" data-section="education"><h2 class="section-title">教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-header"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="section" data-section="skills"><h2 class="section-title">专业技能</h2><div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>
  {{/if}}
  {{#if projects.length}}
  <section class="section" data-section="projects"><h2 class="section-title">项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="separator"> — </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.pm-metrics {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 16mm 18mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}

/* ── Header ── */
.resume.pm-metrics .pm-header {
  border-top: 2px solid #1E5A6B;
  padding-top: 14px;
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.resume.pm-metrics .pm-header h1 {
  font-size: 21pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 0.5px;
  line-height: 1.15;
}

.resume.pm-metrics .pm-title {
  font-size: 10.5pt;
  color: #1E5A6B;
  margin-top: 3px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.resume.pm-metrics .pm-contact {
  margin-top: 10px;
  font-size: 9pt;
  color: #44403C;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
}

.resume.pm-metrics .pm-contact-item {
  white-space: nowrap;
}

.resume.pm-metrics .pm-contact-label {
  color: #A8A29E;
  font-size: 8pt;
  letter-spacing: 0.5px;
  margin-right: 2px;
}

/* ── Section ── */
.resume.pm-metrics .section { margin-bottom: 13px; }

.resume.pm-metrics .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 1.5px;
  padding-bottom: 5px;
  border-bottom: 1.5px solid #1E5A6B;
  margin-bottom: 9px;
}

/* ── Entry ── */
.resume.pm-metrics .entry { margin-bottom: 9px; }
.resume.pm-metrics .entry:last-child { margin-bottom: 0; }

.resume.pm-metrics .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.resume.pm-metrics .entry-header h3 {
  font-size: 10.5pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}

.resume.pm-metrics .separator { color: #A8A29E; font-weight: 400; }

.resume.pm-metrics .date {
  font-size: 9pt;
  color: #1E5A6B;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.pm-metrics .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.pm-metrics .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.65;
}

.resume.pm-metrics .highlights {
  margin-top: 5px;
  padding-left: 16px;
}

.resume.pm-metrics .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 3px;
  line-height: 1.5;
}

.resume.pm-metrics .highlights li::marker {
  color: #1E5A6B;
}

/* ── Skills ── */
.resume.pm-metrics .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 7px;
}

.resume.pm-metrics .tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  padding: 2px 10px;
  border-radius: 3px;
  font-size: 9pt;
  color: #44403C;
}

.resume.pm-metrics li p, .resume.pm-metrics li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.pm-metrics { margin: 0; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "pm-metrics",
          "version": "1.0.0",
          "name": "产品·数据指标",
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
