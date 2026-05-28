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
    slug: 'professional',
    name: '商务专业',
    category: 'business',
    html: `<div class="resume professional">
  <header class="pro-header">
    <div class="pro-header-left">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="pro-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="pro-header-right">
      {{#if basics.email}}<div class="pro-contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="pro-contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="pro-contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="pro-section">
    <h2 class="pro-section-title">个人简介</h2>
    <div class="pro-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="pro-section" data-section="experience">
    <h2 class="pro-section-title">工作经历</h2>
    {{#each experience}}
    <div class="pro-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="pro-entry-header">
        <div class="pro-entry-main">
          <span class="pro-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="pro-sep"> · </span>
          <span class="pro-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="pro-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="pro-highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="pro-section" data-section="education">
    <h2 class="pro-section-title">教育背景</h2>
    {{#each education}}
    <div class="pro-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="pro-entry-header">
        <div class="pro-entry-main">
          <span class="pro-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="pro-sep"> · </span>
          <span data-field="education.{{@index}}.area">{{{area}}}</span>
          <span class="pro-sep"> · </span>
          <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        </div>
        <span class="pro-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="pro-section" data-section="skills">
    <h2 class="pro-section-title">专业技能</h2>
    <div class="pro-skills">
      {{#each skills}}<span class="pro-skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="pro-section" data-section="projects">
    <h2 class="pro-section-title">项目经历</h2>
    {{#each projects}}
    <div class="pro-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="pro-entry-header">
        <div class="pro-entry-main">
          <span class="pro-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="pro-sep"> · </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        <span class="pro-date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if description}}<div class="pro-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="pro-highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.professional {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}

/* ── Header ── */
.pro-header {
  background: #292524;
  color: #fff;
  padding: 16px 18mm;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 76px;
}

.pro-header h1 {
  font-size: 18pt;
  font-weight: 700;
  color: #F5F5F4;
  letter-spacing: 0.3px;
  line-height: 1.2;
}

.pro-title {
  font-size: 9.5pt;
  color: #A8A29E;
  margin-top: 4px;
  font-weight: 400;
}

.pro-header-right { text-align: right; }

.pro-contact-item {
  font-size: 8.5pt;
  color: #D6D3D1;
  margin-bottom: 2px;
  line-height: 1.4;
}

/* ── Section ── */
.pro-section {
  padding: 10px 18mm;
  border-bottom: 1px solid #F0EFEE;
}

.pro-section:last-child { border-bottom: none; }

.pro-section-title {
  font-size: 9pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #44403C;
  margin-bottom: 7px;
  padding-left: 10px;
  border-left: 1px solid #1C1917;
}

/* ── Entry ── */
.pro-entry { margin-bottom: 8px; }
.pro-entry:last-child { margin-bottom: 0; }

.pro-entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
  gap: 8px;
}

.pro-entry-main { font-size: 10pt; flex: 1; }
.pro-company { font-weight: 700; color: #1C1917; }
.pro-position { color: #44403C; }
.pro-sep { color: #A8A29E; margin: 0 3px; }

.pro-date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  margin-left: 8px;
  flex-shrink: 0;
}

.pro-summary {
  font-size: 9.5pt;
  color: #57534E;
  line-height: 1.6;
}

.pro-highlights {
  padding-left: 15px;
  margin-top: 4px;
}

.pro-highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.pro-desc {
  font-size: 9.5pt;
  color: #57534E;
  margin-top: 3px;
  line-height: 1.5;
}

/* ── Skills ── */
.pro-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.pro-skill-tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #44403C;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.professional { margin: 0; }
  .pro-header {
    background: #292524;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "professional",
          "version": "1.0.0",
          "name": "商务专业",
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
