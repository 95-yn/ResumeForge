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
    slug: 'campus-tech',
    name: '技术校招',
    category: 'campus',
    html: `<div class="resume campus-tech">
  <header class="resume-header">
    <div class="header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span class="contact-item" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="contact-item" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="contact-item" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if skills.length}}
  <section class="section" data-section="skills"><h2 class="section-title">专业技能</h2><div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="level-badge" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>
  {{/if}}
  {{#if basics.summary}}
  <section class="section"><h2 class="section-title">个人简介</h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>
  {{/if}}
  {{#if education.length}}
  <section class="section" data-section="education"><h2 class="section-title">教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-header"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="section" data-section="projects"><h2 class="section-title">项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="separator"> — </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="section" data-section="experience"><h2 class="section-title">实习经历</h2>
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

.resume.campus-tech {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #CBD5E1;
  background: #fff;
}

/* ── Dark Header ── */
.resume-header {
  background: #0F172A;
  padding: 16mm 20mm 14mm;
  margin-bottom: 0;
}

.header-inner {}

.resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume-header .title {
  font-size: 10pt;
  color: #94A3B8;
  margin-top: 4px;
  font-weight: 400;
}

.contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #64748B;
}

.contact-item { margin: 0 8px 0 0; }

.contact-item + .contact-item::before {
  content: "|";
  margin-right: 8px;
  color: #334155;
}

/* ── Body ── */
.section { margin: 0 20mm 12px; padding-top: 14px; color: #1E293B; }

.section-title {
  font-size: 8.5pt;
  font-weight: 700;
  color: #0F172A;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-bottom: 4px;
  border-bottom: 1.5px solid #0F172A;
  margin-bottom: 8px;
}

/* ── Entry ── */
.entry { margin-bottom: 9px; }
.entry:last-child { margin-bottom: 0; }

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #0F172A;
  flex: 1;
}

.separator { color: #94A3B8; }

.date {
  font-size: 9pt;
  color: #64748B;
  white-space: nowrap;
  flex-shrink: 0;
}

.sub {
  font-size: 9pt;
  color: #64748B;
  margin-top: 2px;
}

.summary {
  font-size: 9.5pt;
  color: #334155;
  line-height: 1.6;
}

.highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.highlights li {
  font-size: 9.5pt;
  color: #334155;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 6px;
}

.tag {
  background: #F1F5F9;
  border: 1px solid #CBD5E1;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 9pt;
  color: #1E293B;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.level-badge {
  font-size: 8pt;
  background: #0F172A;
  color: #94A3B8;
  padding: 1px 5px;
  border-radius: 2px;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.campus-tech { margin: 0; }
  .section { margin-left: 18mm; margin-right: 18mm; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "campus-tech",
          "version": "1.0.0",
          "name": "技术校招",
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
                                  "label": "求职意向",
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
                },
                {
                      "key": "experience",
                      "label": "实习经历",
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
                }
          ]
    },
  };

export default template;
