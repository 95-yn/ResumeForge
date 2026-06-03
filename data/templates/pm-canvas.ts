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
    slug: 'pm-canvas',
    name: '产品·现代留白',
    category: 'profession',
    html: `<div class="resume pm-canvas">
  <header class="resume-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span class="contact-item"><span class="contact-label">邮箱</span> <span data-field="basics.email">{{{basics.email}}}</span></span>{{/if}}
      {{#if basics.phone}}<span class="contact-item"><span class="contact-label">电话</span> <span data-field="basics.phone">{{{basics.phone}}}</span></span>{{/if}}
      {{#if basics.location}}<span class="contact-item"><span class="contact-label">城市</span> <span data-field="basics.location">{{{basics.location}}}</span></span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="section"><h2 class="section-title">个人简介</h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>
  {{/if}}
  {{#if experience.length}}
  <section class="section" data-section="experience"><h2 class="section-title">工作经历</h2>
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="separator"> · </span><span data-field="experience.{{@index}}.position">{{{position}}}</span></h3><span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span></div>
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
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="separator"> · </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.pm-canvas {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 20mm 22mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #44403C;
  background: #fff;
}

/* ── Header ── */
.resume.pm-canvas .resume-header {
  text-align: left;
  padding-bottom: 18px;
  margin-bottom: 22px;
}

.resume.pm-canvas .resume-header h1 {
  font-size: 30pt;
  font-weight: 600;
  color: #1C1917;
  letter-spacing: 0.5px;
  line-height: 1.1;
  display: inline-block;
  padding-bottom: 6px;
  border-bottom: 2px solid #B0463A;
}

.resume.pm-canvas .resume-header .title {
  font-size: 11pt;
  color: #78716C;
  margin-top: 12px;
  font-weight: 400;
  letter-spacing: 0.3px;
}

.resume.pm-canvas .contact {
  margin-top: 14px;
  font-size: 9pt;
  color: #44403C;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 22px;
}

.resume.pm-canvas .contact-item {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
}

.resume.pm-canvas .contact-label {
  font-size: 8pt;
  color: #A8A29E;
  letter-spacing: 0.5px;
}

/* ── Section ── */
.resume.pm-canvas .section { margin-bottom: 24px; }
.resume.pm-canvas .section:last-child { margin-bottom: 0; }

.resume.pm-canvas .section-title {
  font-size: 8.5pt;
  font-weight: 600;
  color: #A8A29E;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin-bottom: 14px;
}

.resume.pm-canvas .section-title::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #B0463A;
  margin-right: 8px;
  vertical-align: middle;
}

/* ── Entry ── */
.resume.pm-canvas .entry { margin-bottom: 16px; }
.resume.pm-canvas .entry:last-child { margin-bottom: 0; }

.resume.pm-canvas .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.resume.pm-canvas .entry-header h3 {
  font-size: 11pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
  letter-spacing: 0.2px;
}

.resume.pm-canvas .separator { color: #A8A29E; font-weight: 400; }

.resume.pm-canvas .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.pm-canvas .sub {
  font-size: 9.5pt;
  color: #78716C;
  margin-top: 4px;
}

.resume.pm-canvas .summary {
  font-size: 10pt;
  color: #44403C;
  line-height: 1.75;
}

.resume.pm-canvas .highlights {
  margin-top: 8px;
  padding-left: 16px;
  list-style: none;
}

.resume.pm-canvas .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 6px;
  line-height: 1.65;
  position: relative;
}

.resume.pm-canvas .highlights li::before {
  content: "";
  position: absolute;
  left: -14px;
  top: 0.7em;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #D6D3D1;
}

/* ── Skills ── */
.resume.pm-canvas .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
}

.resume.pm-canvas .tag {
  background: #FAFAF9;
  border: 1px solid #E7E5E4;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 9pt;
  color: #44403C;
}

.resume.pm-canvas li p, .resume.pm-canvas li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.pm-canvas { margin: 0; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.resume.pm-canvas .tag, .resume.pm-canvas .skill-tag, .resume.pm-canvas .skill, .resume.pm-canvas .skills span, .resume.pm-canvas .skill-tags > *, .resume.pm-canvas [class*='skill'] span, .resume.pm-canvas [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
li p, li div { margin: 0; padding: 0; display: inline; }
`,
    schema: {
          "templateId": "pm-canvas",
          "version": "1.0.0",
          "name": "产品·现代留白",
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
