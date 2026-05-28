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
    slug: 'design-ui',
    name: 'UI设计师',
    category: 'profession',
    html: `<div class="resume design-ui">
  <div class="sidebar">
    <div class="sidebar-name">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="sidebar-contact">
      {{#if basics.email}}<div class="contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
    {{#if skills.length}}
    <div class="sidebar-section" data-section="skills">
      <h2 class="sidebar-section-title">专业技能</h2>
      <div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </div>
    {{/if}}
    {{#if basics.summary}}
    <div class="sidebar-section">
      <h2 class="sidebar-section-title">个人简介</h2>
      <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
    </div>
    {{/if}}
  </div>
  <div class="main">
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
    {{#if projects.length}}
    <section class="section" data-section="projects"><h2 class="section-title">项目经历</h2>
      {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="separator"> — </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="section" data-section="education"><h2 class="section-title">教育背景</h2>
      {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-header"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
    </section>
    {{/if}}
  </div>
</div>`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.design-ui {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #374151;
  background: #fff;
  display: flex;
}

.resume.design-ui .sidebar {
  width: 68mm;
  min-height: 297mm;
  background: #18181B;
  padding: 20mm 12px 18mm 16px;
  flex-shrink: 0;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.design-ui .sidebar-name h1 {
  font-size: 16pt;
  font-weight: 700;
  color: rgba(255,255,255,0.92);
  line-height: 1.25;
  margin-bottom: 4px;
  word-break: break-all;
}

.resume.design-ui .sidebar-name .title {
  font-size: 9pt;
  color: rgba(255,255,255,0.65);
  font-weight: 400;
  margin-bottom: 12px;
}

.resume.design-ui .sidebar-contact {
  margin-bottom: 16px;
}

.resume.design-ui .sidebar-contact .contact-item {
  display: block;
  font-size: 8.5pt;
  color: rgba(255,255,255,0.6);
  margin-bottom: 3px;
  word-break: break-all;
}

.resume.design-ui .sidebar-section {
  margin-bottom: 14px;
}

.resume.design-ui .sidebar-section-title {
  font-size: 8pt;
  font-weight: 700;
  color: rgba(255,255,255,0.92);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 7px;
}

.resume.design-ui .sidebar .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px 4px;
}

.resume.design-ui .sidebar .tag {
  background: rgba(255,255,255,0.12);
  border: none;
  padding: 2px 7px;
  border-radius: 2px;
  font-size: 8pt;
  color: rgba(255,255,255,0.85);
}

.resume.design-ui .sidebar .summary {
  font-size: 8.5pt;
  color: rgba(255,255,255,0.7);
  line-height: 1.55;
}

.resume.design-ui .main {
  flex: 1;
  padding: 20mm 16mm 18mm 14px;
  min-width: 0;
}

.resume.design-ui .main .section { margin-bottom: 12px; }

.resume.design-ui .main .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #18181B;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 2px solid #F4F4F5;
  margin-bottom: 8px;
}

.resume.design-ui .entry { margin-bottom: 8px; }
.resume.design-ui .entry:last-child { margin-bottom: 0; }

.resume.design-ui .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.design-ui .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #18181B;
  flex: 1;
}

.resume.design-ui .separator { color: #A8A29E; }

.resume.design-ui .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.design-ui .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.design-ui .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.design-ui .highlights li {
  font-size: 9.5pt;
  color: #374151;
  margin-bottom: 2px;
  line-height: 1.5;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.design-ui { }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "design-ui",
          "version": "1.0.0",
          "name": "UI设计师",
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
