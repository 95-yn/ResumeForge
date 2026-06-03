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
    slug: 'elegant',
    name: '优雅简约',
    category: 'minimal',
    html: `<div class="resume elegant">
  <header class="eg-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="eg-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="eg-divider"></div>
    <div class="eg-contacts">
      {{#if basics.email}}<span class="eg-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="eg-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="eg-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="eg-section">
    <h2 class="eg-section-title">简介</h2>
    <div class="eg-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="eg-section" data-section="experience">
    <h2 class="eg-section-title">工作经历</h2>
    {{#each experience}}
    <div class="eg-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="eg-entry-head">
        <div class="eg-entry-left">
          <span class="eg-primary" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="eg-secondary" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="eg-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="eg-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="eg-section" data-section="education">
    <h2 class="eg-section-title">教育背景</h2>
    {{#each education}}
    <div class="eg-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="eg-entry-head">
        <div class="eg-entry-left">
          <span class="eg-primary" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="eg-secondary"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        </div>
        <span class="eg-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="eg-section" data-section="skills">
    <h2 class="eg-section-title">技能</h2>
    <p class="eg-skills-line">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} (<span data-field="skills.{{@index}}.level">{{{level}}}</span>){{/if}}{{#unless @last}} &ensp;·&ensp; {{/unless}}{{/each}}</p>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="eg-section" data-section="projects">
    <h2 class="eg-section-title">项目经历</h2>
    {{#each projects}}
    <div class="eg-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="eg-entry-head">
        <div class="eg-entry-left">
          <span class="eg-primary" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="eg-secondary" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        <span class="eg-date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if description}}<div class="eg-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="eg-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.elegant {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 20mm 22mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #1C1917;
  background: #fff;
}

/* ── Header ── */
.eg-header {
  text-align: center;
  margin-bottom: 16px;
}

.eg-header h1 {
  font-family: Georgia, 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 24pt;
  font-weight: 400;
  color: #1C1917;
  letter-spacing: 2px;
  line-height: 1.2;
}

.eg-title {
  font-family: Georgia, 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 10pt;
  color: #78716C;
  margin-top: 6px;
  font-style: italic;
  letter-spacing: 0.5px;
}

.eg-divider {
  width: 40px;
  height: 1px;
  background: #D6D3D1;
  margin: 10px auto;
}

.eg-contacts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3px 16px;
}

.eg-contact {
  font-size: 9pt;
  color: #78716C;
}

/* ── Section ── */
.eg-section { margin-bottom: 14px; }

.eg-section-title {
  font-family: Georgia, 'Noto Serif SC', 'Source Han Serif SC', serif;
  font-size: 9pt;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #1C1917;
  text-align: center;
  padding: 5px 0;
  margin-bottom: 8px;
  border-top: 1px solid #D6D3D1;
  border-bottom: 1px solid #D6D3D1;
}

/* ── Entry ── */
.eg-entry { margin-bottom: 8px; }
.eg-entry:last-child { margin-bottom: 0; }

.eg-entry-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.eg-entry-left { display: flex; flex-direction: column; flex: 1; }

.eg-primary {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
}

.eg-secondary {
  font-size: 9pt;
  color: #78716C;
  margin-top: 1px;
}

.eg-date {
  font-size: 9pt;
  color: #A8A29E;
  white-space: nowrap;
  margin-left: 10px;
  padding-top: 1px;
  flex-shrink: 0;
}

.eg-body {
  font-size: 9.5pt;
  color: #57534E;
  margin-top: 4px;
  line-height: 1.6;
}

.eg-list {
  padding-left: 15px;
  margin-top: 4px;
}

.eg-list li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.55;
}

.eg-skills-line {
  font-size: 9.5pt;
  color: #57534E;
  line-height: 1.8;
  text-align: center;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.elegant { margin: 0; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "elegant",
          "version": "1.0.0",
          "name": "优雅简约",
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
