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
    slug: 'finance-analyst',
    name: '金融分析师',
    category: 'profession',
    html: `<div class="resume finance-analyst">
  <header class="resume-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span class="contact-item" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="contact-item" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="contact-item" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="section"><h2 class="section-title">个人简介</h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>
  {{/if}}
  {{#if experience.length}}
  <section class="section" data-section="experience"><h2 class="section-title">工作经历</h2>
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-header">
        <h3><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="separator"> — </span><span data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
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
</div>`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.finance-analyst {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #2D3748;
  background: #FFFFFF;
}

.resume.finance-analyst .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #1E3A5F;
}

.resume.finance-analyst .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1E3A5F;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.finance-analyst .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.resume.finance-analyst .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.finance-analyst .contact-item { margin: 0 6px; }
.resume.finance-analyst .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.finance-analyst .section { margin-bottom: 12px; }

.resume.finance-analyst .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1E3A5F;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #1E3A5F;
  margin-bottom: 8px;
}

.resume.finance-analyst .entry { margin-bottom: 8px; }
.resume.finance-analyst .entry:last-child { margin-bottom: 0; }

.resume.finance-analyst .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.finance-analyst .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1E3A5F;
  flex: 1;
}

.resume.finance-analyst .separator { color: #A8A29E; }

.resume.finance-analyst .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.finance-analyst .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.finance-analyst .summary {
  font-size: 9.5pt;
  color: #2D3748;
  line-height: 1.6;
}

.resume.finance-analyst .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.finance-analyst .highlights li {
  font-size: 9.5pt;
  color: #2D3748;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.finance-analyst .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.finance-analyst .tag {
  background: transparent;
  border: 1px solid #1E3A5F;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1E3A5F;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.finance-analyst { margin: 0; }
  @page { margin: 0; size: A4; } }

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "finance-analyst",
          "version": "1.0.0",
          "name": "金融分析师",
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
                                  "label": "项目亮点",
                                  "type": "array:text"
                            }
                      ]
                }
          ]
    },
  };

export default template;
