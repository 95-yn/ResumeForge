// Auto-generated file — do not edit manually
// Generated: 2026-05-28T03:31:53.526Z

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

export const TEMPLATES: TemplateData[] = [
  {
    slug: 'classic',
    name: '经典简洁',
    category: 'business',
    html: `<div class="resume classic">
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

.resume.classic {
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
.resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
}

.resume-header h1 {
  font-size: 20pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.contact-item { margin: 0 6px; }

.contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

/* ── Section ── */
.section { margin-bottom: 11px; }

.section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D6D3D1;
  margin-bottom: 7px;
}

/* ── Entry ── */
.entry { margin-bottom: 8px; }
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
  color: #1C1917;
  flex: 1;
}

.separator { color: #A8A29E; }

.date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #44403C;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.classic { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "classic",
          "version": "1.0.0",
          "name": "经典简洁",
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
  },
  {
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
  border-left: 3px solid #1C1917;
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
  },
  {
    slug: 'executive',
    name: '高管风格',
    category: 'business',
    html: `<div class="resume executive">
  <header class="ex-header">
    <div class="ex-header-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ex-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="ex-header-contact">
      {{#if basics.email}}<div class="ex-contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="ex-contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="ex-contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
  </header>
  <div class="ex-gold-line"></div>
  {{#if basics.summary}}
  <section class="ex-section">
    <h2 class="ex-section-title">个人简介</h2>
    <div class="ex-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="ex-section" data-section="experience">
    <h2 class="ex-section-title">工作经历</h2>
    {{#each experience}}
    <div class="ex-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="ex-entry-header">
        <div class="ex-entry-left">
          <span class="ex-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="ex-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="ex-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="ex-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="ex-section" data-section="education">
    <h2 class="ex-section-title">教育背景</h2>
    {{#each education}}
    <div class="ex-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="ex-entry-header">
        <div class="ex-entry-left">
          <span class="ex-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="ex-position"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        </div>
        <span class="ex-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="ex-section" data-section="skills">
    <h2 class="ex-section-title">专业技能</h2>
    <div class="ex-skills">
      {{#each skills}}<span class="ex-skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="ex-section" data-section="projects">
    <h2 class="ex-section-title">项目经历</h2>
    {{#each projects}}
    <div class="ex-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="ex-entry-header">
        <div class="ex-entry-left">
          <span class="ex-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="ex-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="ex-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="ex-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.executive { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20mm 22mm; font-family: "Georgia", "Times New Roman", "PingFang SC", "Microsoft YaHei", serif; font-size: 10pt; line-height: 1.65; color: #1a1a1a; background: #fff; }
.ex-header { display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 14px; }
.ex-header-main h1 { font-size: 26pt; font-weight: 700; color: #1C1C1C; letter-spacing: 1px; font-family: "Georgia", serif; }
.ex-title { font-size: 11pt; color: #555; margin-top: 4px; font-style: italic; letter-spacing: 0.5px; }
.ex-header-contact { text-align: right; }
.ex-contact-item { font-size: 9pt; color: #444; margin-bottom: 3px; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ex-gold-line { height: 2px; background: linear-gradient(90deg, #8B6914 0%, #C9A84C 50%, #8B6914 100%); margin-bottom: 18px; }
.ex-section { margin-bottom: 16px; }
.ex-section-title { font-size: 9pt; font-weight: 700; color: #8B6914; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #D4B97A; padding-bottom: 5px; margin-bottom: 10px; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ex-entry { margin-bottom: 12px; }
.ex-entry-header { display: flex; justify-content: space-between; align-items: baseline; }
.ex-entry-left { display: flex; flex-direction: column; }
.ex-company { font-size: 11pt; font-weight: 700; color: #1C1C1C; }
.ex-position { font-size: 9.5pt; color: #555; margin-top: 1px; font-style: italic; }
.ex-date { font-size: 9pt; color: #8B6914; white-space: nowrap; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ex-desc { font-size: 9.5pt; color: #444; margin-top: 5px; }
.ex-summary { font-size: 10pt; color: #333; line-height: 1.7; }
.ex-list { margin-top: 6px; padding-left: 18px; }
.ex-list li { font-size: 9.5pt; margin-bottom: 3px; color: #333; }
.ex-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.ex-skill-tag { font-size: 9pt; color: #444; border: 1px solid #D4B97A; padding: 2px 10px; border-radius: 2px; font-family: "Helvetica Neue", "Arial", sans-serif; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.executive { margin: 0; padding: 18mm 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "executive",
          "version": "1.0.0",
          "name": "高管风格",
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
  },
  {
    slug: 'corporate',
    name: '企业标准',
    category: 'business',
    html: `<div class="resume corporate">
  <header class="corp-header">
    <div class="corp-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="corp-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="corp-contacts">
        {{#if basics.email}}<span class="corp-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="corp-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="corp-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="corp-section">
    <h2 class="corp-section-title">职业概述</h2>
    <div class="corp-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="corp-section" data-section="experience">
    <h2 class="corp-section-title">工作经历</h2>
    {{#each experience}}
    <div class="corp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <table class="corp-table">
        <tr>
          <td class="corp-td-company"><span data-field="experience.{{@index}}.company">{{{company}}}</span></td>
          <td class="corp-td-pos"><span data-field="experience.{{@index}}.position">{{{position}}}</span></td>
          <td class="corp-td-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></td>
        </tr>
      </table>
      {{#if highlights.length}}<ul class="corp-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="corp-section" data-section="education">
    <h2 class="corp-section-title">教育背景</h2>
    {{#each education}}
    <div class="corp-entry" data-entry="education" data-entry-index="{{@index}}">
      <table class="corp-table">
        <tr>
          <td class="corp-td-company"><span data-field="education.{{@index}}.institution">{{{institution}}}</span></td>
          <td class="corp-td-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></td>
          <td class="corp-td-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></td>
        </tr>
      </table>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="corp-section" data-section="skills">
    <h2 class="corp-section-title">专业技能</h2>
    <div class="corp-skills">
      {{#each skills}}<div class="corp-skill-row" data-entry="skills" data-entry-index="{{@index}}"><span class="corp-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="corp-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="corp-section" data-section="projects">
    <h2 class="corp-section-title">项目经历</h2>
    {{#each projects}}
    <div class="corp-entry" data-entry="projects" data-entry-index="{{@index}}">
      <table class="corp-table">
        <tr>
          <td class="corp-td-company"><span data-field="projects.{{@index}}.name">{{{name}}}</span></td>
          {{#if role}}<td class="corp-td-pos"><span data-field="projects.{{@index}}.role">{{{role}}}</span></td>{{/if}}
        </tr>
      </table>
      {{#if description}}<div class="corp-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="corp-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.corporate { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1E293B; background: #fff; }
.corp-header { background: #1E40AF; color: #fff; padding: 18mm 22mm 14mm; }
.corp-header h1 { font-size: 22pt; font-weight: 700; letter-spacing: 1px; color: #fff; }
.corp-title { font-size: 11pt; color: rgba(255,255,255,0.8); margin-top: 4px; }
.corp-contacts { margin-top: 10px; display: flex; gap: 18px; flex-wrap: wrap; }
.corp-contact { font-size: 9pt; color: rgba(255,255,255,0.85); }
.corp-section { padding: 0 22mm; margin-top: 14px; }
.corp-section-title { font-size: 9pt; font-weight: 700; color: #1E40AF; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #1E40AF; padding-bottom: 4px; margin-bottom: 8px; }
.corp-entry { margin-bottom: 10px; }
.corp-table { width: 100%; border-collapse: collapse; }
.corp-td-company { font-size: 10.5pt; font-weight: 700; color: #1E293B; width: 40%; }
.corp-td-pos { font-size: 9.5pt; color: #475569; width: 35%; }
.corp-td-date { font-size: 9pt; color: #64748B; text-align: right; white-space: nowrap; }
.corp-body { font-size: 9.5pt; color: #475569; margin-top: 4px; line-height: 1.6; }
.corp-list { margin-top: 5px; padding-left: 18px; }
.corp-list li { font-size: 9.5pt; color: #374151; margin-bottom: 3px; }
.corp-skills { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; }
.corp-skill-row { display: flex; justify-content: space-between; font-size: 9.5pt; border-bottom: 1px solid #F1F5F9; padding: 3px 0; }
.corp-skill-name { color: #1E293B; font-weight: 500; }
.corp-skill-level { color: #1E40AF; font-size: 9pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.corporate { margin: 0; } .corp-section { padding: 0 20mm; } .corp-header { padding: 16mm 20mm 12mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "corporate",
          "version": "1.0.0",
          "name": "企业标准",
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
  },
  {
    slug: 'banking',
    name: '金融行业',
    category: 'business',
    html: `<div class="resume banking">
  <header class="bk-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="bk-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="bk-divider"></div>
    <div class="bk-contacts">
      {{#if basics.email}}<span class="bk-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="bk-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="bk-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="bk-section">
    <h2 class="bk-section-title">个人陈述</h2>
    <div class="bk-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="bk-section" data-section="experience">
    <h2 class="bk-section-title">工作经历</h2>
    {{#each experience}}
    <div class="bk-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="bk-entry-top">
        <span class="bk-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="bk-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="bk-position" data-field="experience.{{@index}}.position">{{{position}}}</p>
      {{#if highlights.length}}<ul class="bk-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="bk-section" data-section="education">
    <h2 class="bk-section-title">教育背景</h2>
    {{#each education}}
    <div class="bk-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="bk-entry-top">
        <span class="bk-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="bk-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="bk-position"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="bk-section" data-section="skills">
    <h2 class="bk-section-title">专业技能</h2>
    <div class="bk-skills">
      {{#each skills}}<div class="bk-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} — <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="bk-section" data-section="projects">
    <h2 class="bk-section-title">主要项目</h2>
    {{#each projects}}
    <div class="bk-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="bk-entry-top">
        <span class="bk-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="bk-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="bk-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="bk-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.banking { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 22mm; font-family: "Times New Roman", "Georgia", "SimSun", "PingFang SC", "Microsoft YaHei", serif; font-size: 10.5pt; line-height: 1.65; color: #1a1a1a; background: #fff; }
.bk-header { text-align: center; margin-bottom: 20px; }
.bk-header h1 { font-size: 24pt; font-weight: 700; color: #111; letter-spacing: 2px; font-family: "Times New Roman", serif; }
.bk-title { font-size: 11pt; color: #555; margin-top: 5px; font-style: italic; }
.bk-divider { width: 60%; height: 1px; background: #222; margin: 10px auto; }
.bk-contacts { display: flex; justify-content: center; gap: 20px; font-size: 9.5pt; color: #444; }
.bk-section { margin-bottom: 16px; }
.bk-section-title { font-size: 10.5pt; font-weight: 700; color: #111; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #222; padding-bottom: 4px; margin-bottom: 10px; font-family: "Times New Roman", serif; }
.bk-entry { margin-bottom: 12px; }
.bk-entry-top { display: flex; justify-content: space-between; align-items: baseline; }
.bk-company { font-size: 11pt; font-weight: 700; color: #111; }
.bk-date { font-size: 9.5pt; color: #555; }
.bk-position { font-size: 10pt; color: #444; margin-top: 2px; font-style: italic; }
.bk-body { font-size: 10pt; color: #333; margin-top: 5px; text-align: justify; }
.bk-list { margin-top: 5px; padding-left: 20px; }
.bk-list li { font-size: 10pt; margin-bottom: 3px; color: #333; }
.bk-skills { columns: 2; gap: 20px; }
.bk-skill { font-size: 10pt; color: #333; margin-bottom: 4px; break-inside: avoid; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.banking { margin: 0; padding: 20mm 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "banking",
          "version": "1.0.0",
          "name": "金融行业",
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
  },
  {
    slug: 'consulting',
    name: '咨询风格',
    category: 'business',
    html: `<div class="resume consulting">
  <header class="cs-header">
    <div class="cs-header-left">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="cs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="cs-header-right">
      {{#if basics.email}}<div data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
  </header>
  <div class="cs-body">
    <div class="cs-left">
      {{#if basics.summary}}
      <section class="cs-section">
        <h2 class="cs-section-title">简介</h2>
        <div class="cs-body-text" data-field="basics.summary">{{{basics.summary}}}</div>
      </section>
      {{/if}}
      {{#if experience.length}}
      <section class="cs-section" data-section="experience">
        <h2 class="cs-section-title">工作经历</h2>
        {{#each experience}}
        <div class="cs-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="cs-entry-head">
            <strong data-field="experience.{{@index}}.company">{{{company}}}</strong>
            <span class="cs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="cs-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
          {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if projects.length}}
      <section class="cs-section" data-section="projects">
        <h2 class="cs-section-title">项目经历</h2>
        {{#each projects}}
        <div class="cs-entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="cs-entry-head">
            <strong data-field="projects.{{@index}}.name">{{{name}}}</strong>
            {{#if role}}<span class="cs-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          {{#if description}}<div class="cs-body-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div class="cs-right">
      {{#if education.length}}
      <section class="cs-section" data-section="education">
        <h2 class="cs-section-title">教育背景</h2>
        {{#each education}}
        <div class="cs-entry" data-entry="education" data-entry-index="{{@index}}">
          <strong data-field="education.{{@index}}.institution">{{{institution}}}</strong>
          <p class="cs-pos"><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span> · <span data-field="education.{{@index}}.area">{{{area}}}</span></p>
          <p class="cs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></p>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="cs-section" data-section="skills">
        <h2 class="cs-section-title">专业技能</h2>
        {{#each skills}}
        <div class="cs-skill" data-entry="skills" data-entry-index="{{@index}}">
          <span data-field="skills.{{@index}}.name">{{{name}}}</span>
          {{#if level}}<span class="cs-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.consulting { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #111; background: #fff; }
.cs-header { display: flex; justify-content: space-between; align-items: flex-end; padding: 20mm 22mm 12px; border-bottom: 3px solid #111; }
.cs-header-left h1 { font-size: 22pt; font-weight: 900; color: #111; letter-spacing: -0.5px; }
.cs-title { font-size: 10.5pt; color: #555; margin-top: 3px; }
.cs-header-right { text-align: right; font-size: 9pt; color: #444; line-height: 1.8; }
.cs-body { display: flex; gap: 0; padding: 0 22mm 20mm; }
.cs-left { flex: 1.8; padding-right: 24px; padding-top: 16px; border-right: 1px solid #ddd; }
.cs-right { flex: 1; padding-left: 24px; padding-top: 16px; }
.cs-section { margin-bottom: 16px; }
.cs-section-title { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; color: #111; border-bottom: 1px solid #111; padding-bottom: 4px; margin-bottom: 10px; }
.cs-entry { margin-bottom: 11px; }
.cs-entry-head { display: flex; justify-content: space-between; align-items: baseline; }
.cs-entry-head strong { font-size: 10.5pt; font-weight: 700; color: #111; }
.cs-date { font-size: 9pt; color: #666; }
.cs-pos { font-size: 9.5pt; color: #444; margin-top: 2px; font-style: italic; }
.cs-body-text { font-size: 9.5pt; color: #333; margin-top: 4px; }
.cs-list { margin-top: 5px; padding-left: 15px; }
.cs-list li { font-size: 9.5pt; color: #333; margin-bottom: 3px; }
.cs-skill { display: flex; justify-content: space-between; font-size: 9.5pt; padding: 3px 0; border-bottom: 1px solid #eee; }
.cs-level { font-size: 9pt; color: #666; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.consulting { margin: 0; } .cs-header { padding: 18mm 20mm 12px; } .cs-body { padding: 0 20mm 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "consulting",
          "version": "1.0.0",
          "name": "咨询风格",
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
  },
  {
    slug: 'sales',
    name: '销售商务',
    category: 'business',
    html: `<div class="resume sales">
  <header class="sl-header">
    <div class="sl-accent-bar"></div>
    <div class="sl-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="sl-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="sl-contacts">
        {{#if basics.email}}<span class="sl-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="sl-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="sl-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="sl-section">
    <h2 class="sl-section-title">个人简介</h2>
    <div class="sl-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="sl-section" data-section="experience">
    <h2 class="sl-section-title">工作经历</h2>
    {{#each experience}}
    <div class="sl-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="sl-entry-head">
        <div>
          <span class="sl-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="sl-sep"> · </span>
          <span class="sl-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="sl-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="sl-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="sl-section" data-section="education">
    <h2 class="sl-section-title">教育背景</h2>
    {{#each education}}
    <div class="sl-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="sl-entry-head">
        <div>
          <span class="sl-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="sl-sep"> · </span>
          <span data-field="education.{{@index}}.area">{{{area}}}</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        </div>
        <span class="sl-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="sl-section" data-section="skills">
    <h2 class="sl-section-title">专业技能</h2>
    <div class="sl-skills">
      {{#each skills}}<span class="sl-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="sl-section" data-section="projects">
    <h2 class="sl-section-title">项目经历</h2>
    {{#each projects}}
    <div class="sl-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="sl-entry-head">
        <span class="sl-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="sl-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="sl-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="sl-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.sales { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1C1917; background: #fff; }
.sl-accent-bar { height: 5px; background: #EA580C; }
.sl-header-inner { padding: 14px 22mm 14px; border-bottom: 1px solid #E7E5E4; }
.sl-header-inner h1 { font-size: 22pt; font-weight: 800; color: #1C1917; }
.sl-title { font-size: 11pt; color: #EA580C; margin-top: 3px; font-weight: 600; }
.sl-contacts { margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; }
.sl-contact { font-size: 9pt; color: #57534E; }
.sl-section { padding: 14px 22mm 0; }
.sl-section-title { font-size: 9pt; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #EA580C; border-bottom: 2px solid #FED7AA; padding-bottom: 4px; margin-bottom: 10px; }
.sl-entry { margin-bottom: 12px; }
.sl-entry-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px; }
.sl-company { font-size: 10.5pt; font-weight: 700; color: #1C1917; }
.sl-sep { color: #EA580C; }
.sl-position { font-size: 10pt; color: #44403C; }
.sl-date { font-size: 9pt; color: #78716C; white-space: nowrap; }
.sl-body { font-size: 9.5pt; color: #44403C; margin-top: 4px; }
.sl-list { margin-top: 5px; padding-left: 18px; }
.sl-list li { font-size: 9.5pt; color: #44403C; margin-bottom: 3px; }
.sl-list li::marker { color: #EA580C; }
.sl-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.sl-tag { background: #FFF7ED; color: #EA580C; border: 1px solid #FED7AA; padding: 2px 10px; border-radius: 3px; font-size: 9pt; font-weight: 500; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.sales { margin: 0; } .sl-header-inner { padding: 12px 20mm 12px; } .sl-section { padding: 12px 20mm 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "sales",
          "version": "1.0.0",
          "name": "销售商务",
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
  },
  {
    slug: 'hr',
    name: '人力资源',
    category: 'business',
    html: `<div class="resume hr">
  <header class="hr-header">
    <div class="hr-avatar-area">
      {{#if basics.avatar}}<img class="hr-avatar" src="{{{basics.avatar}}}" alt="" />{{/if}}
    </div>
    <div class="hr-header-info">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hr-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="hr-contacts">
        {{#if basics.email}}<span class="hr-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="hr-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="hr-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="hr-section">
    <h2 class="hr-section-title">个人简介</h2>
    <div class="hr-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="hr-section" data-section="experience">
    <h2 class="hr-section-title">工作经历</h2>
    {{#each experience}}
    <div class="hr-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="hr-entry-head">
        <div class="hr-entry-meta">
          <span class="hr-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="hr-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="hr-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="hr-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="hr-section" data-section="education">
    <h2 class="hr-section-title">教育背景</h2>
    {{#each education}}
    <div class="hr-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="hr-entry-head">
        <div class="hr-entry-meta">
          <span class="hr-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="hr-position"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        </div>
        <span class="hr-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="hr-section" data-section="skills">
    <h2 class="hr-section-title">专业技能</h2>
    <div class="hr-skills">
      {{#each skills}}<div class="hr-skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="hr-skill-level" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="hr-section" data-section="projects">
    <h2 class="hr-section-title">项目经历</h2>
    {{#each projects}}
    <div class="hr-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="hr-entry-head">
        <div class="hr-entry-meta">
          <span class="hr-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="hr-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="hr-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="hr-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.hr { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 18mm 20mm; font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; font-size: 10pt; line-height: 1.65; color: #292524; background: #fff; }
.hr-header { display: flex; align-items: center; gap: 16px; padding-bottom: 16px; border-bottom: 2px solid #D97706; margin-bottom: 16px; }
.hr-avatar { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid #FDE68A; }
.hr-header-info h1 { font-size: 22pt; font-weight: 700; color: #292524; }
.hr-title { font-size: 10.5pt; color: #B45309; margin-top: 3px; font-weight: 500; }
.hr-contacts { margin-top: 6px; display: flex; gap: 12px; flex-wrap: wrap; }
.hr-contact { font-size: 9pt; color: #78716C; }
.hr-section { margin-bottom: 14px; }
.hr-section-title { font-size: 9.5pt; font-weight: 700; color: #B45309; background: #FFFBEB; border-left: 3px solid #D97706; padding: 4px 10px; margin-bottom: 10px; border-radius: 0 4px 4px 0; }
.hr-entry { margin-bottom: 10px; }
.hr-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.hr-entry-meta { display: flex; flex-direction: column; gap: 1px; }
.hr-company { font-size: 10.5pt; font-weight: 700; color: #292524; }
.hr-position { font-size: 9.5pt; color: #78716C; }
.hr-date { font-size: 9pt; color: #A8A29E; white-space: nowrap; }
.hr-body { font-size: 9.5pt; color: #44403C; margin-top: 4px; }
.hr-list { margin-top: 5px; padding-left: 16px; }
.hr-list li { font-size: 9.5pt; color: #44403C; margin-bottom: 3px; }
.hr-skills { display: flex; flex-wrap: wrap; gap: 7px; }
.hr-skill-chip { background: #FEF9C3; color: #854D0E; border: 1px solid #FDE68A; padding: 3px 12px; border-radius: 20px; font-size: 9pt; }
.hr-skill-level { color: #B45309; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.hr { margin: 0; padding: 16mm 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "hr",
          "version": "1.0.0",
          "name": "人力资源",
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
  },
  {
    slug: 'manager',
    name: '项目经理',
    category: 'business',
    html: `<div class="resume manager">
  <header class="mg-header">
    <div class="mg-header-top">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="mg-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="mg-contacts">
      {{#if basics.email}}<span class="mg-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="mg-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="mg-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="mg-section">
    <h2 class="mg-section-title">职业概述</h2>
    <div class="mg-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="mg-section" data-section="experience">
    <h2 class="mg-section-title">工作经历</h2>
    {{#each experience}}
    <div class="mg-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="mg-timeline-dot"></div>
      <div class="mg-entry-content">
        <div class="mg-entry-head">
          <div>
            <span class="mg-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="mg-sep"> · </span>
            <span class="mg-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="mg-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="mg-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="mg-section" data-section="projects">
    <h2 class="mg-section-title">项目经历</h2>
    {{#each projects}}
    <div class="mg-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="mg-timeline-dot"></div>
      <div class="mg-entry-content">
        <div class="mg-entry-head">
          <span class="mg-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="mg-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="mg-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="mg-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  <div class="mg-two-col">
    <div class="mg-col">
      {{#if education.length}}
      <section class="mg-section" data-section="education">
        <h2 class="mg-section-title">教育背景</h2>
        {{#each education}}
        <div class="mg-edu" data-entry="education" data-entry-index="{{@index}}">
          <span class="mg-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="mg-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="mg-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div class="mg-col">
      {{#if skills.length}}
      <section class="mg-section" data-section="skills">
        <h2 class="mg-section-title">专业技能</h2>
        <div class="mg-skills">
          {{#each skills}}<div class="mg-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="mg-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.manager { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 18mm 22mm; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #1E293B; background: #F8FAFC; }
.mg-header { background: #fff; border-left: 4px solid #475569; padding: 14px 18px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
.mg-header-top h1 { font-size: 22pt; font-weight: 700; color: #0F172A; }
.mg-title { font-size: 10.5pt; color: #475569; margin-top: 3px; }
.mg-contacts { margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; }
.mg-contact { font-size: 9pt; color: #64748B; }
.mg-section { margin-bottom: 14px; }
.mg-section-title { font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #fff; background: #475569; padding: 3px 10px; margin-bottom: 10px; display: inline-block; }
.mg-entry { display: flex; gap: 12px; margin-bottom: 10px; position: relative; }
.mg-timeline-dot { width: 10px; height: 10px; border-radius: 50%; background: #475569; border: 2px solid #CBD5E1; flex-shrink: 0; margin-top: 4px; }
.mg-entry-content { flex: 1; background: #fff; padding: 8px 12px; border-radius: 4px; border: 1px solid #E2E8F0; }
.mg-entry-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px; }
.mg-company { font-size: 10.5pt; font-weight: 700; color: #1E293B; }
.mg-sep { color: #94A3B8; }
.mg-position { font-size: 9.5pt; color: #475569; }
.mg-date { font-size: 9pt; color: #94A3B8; white-space: nowrap; }
.mg-body { font-size: 9.5pt; color: #475569; margin-top: 4px; }
.mg-list { margin-top: 5px; padding-left: 16px; }
.mg-list li { font-size: 9.5pt; color: #475569; margin-bottom: 3px; }
.mg-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.mg-edu { display: flex; flex-direction: column; gap: 1px; margin-bottom: 8px; }
.mg-pos { font-size: 9pt; color: #64748B; }
.mg-skills { display: flex; flex-direction: column; gap: 4px; }
.mg-skill { display: flex; justify-content: space-between; font-size: 9.5pt; padding: 4px 0; border-bottom: 1px solid #E2E8F0; }
.mg-level { color: #475569; font-size: 9pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.manager { margin: 0; padding: 16mm 20mm; background: #fff; } .mg-entry-content { box-shadow: none; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "manager",
          "version": "1.0.0",
          "name": "项目经理",
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
  },
  {
    slug: 'legal',
    name: '法律行业',
    category: 'business',
    html: `<div class="resume legal">
  <header class="lg-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="lg-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="lg-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="lg-rule"></div>
  {{#if basics.summary}}
  <section class="lg-section">
    <h2 class="lg-section-title">PROFESSIONAL SUMMARY</h2>
    <div class="lg-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="lg-section" data-section="experience">
    <h2 class="lg-section-title">PROFESSIONAL EXPERIENCE</h2>
    {{#each experience}}
    <div class="lg-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="lg-entry-head">
        <div class="lg-entry-main">
          <span class="lg-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="lg-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="lg-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="lg-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="lg-section" data-section="education">
    <h2 class="lg-section-title">EDUCATION</h2>
    {{#each education}}
    <div class="lg-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="lg-entry-head">
        <div class="lg-entry-main">
          <span class="lg-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="lg-pos"><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>, <span data-field="education.{{@index}}.area">{{{area}}}</span></span>
        </div>
        <span class="lg-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="lg-section" data-section="skills">
    <h2 class="lg-section-title">AREAS OF PRACTICE</h2>
    <div class="lg-skills">
      {{#each skills}}<span class="lg-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} (<span data-field="skills.{{@index}}.level">{{{level}}}</span>){{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="lg-section" data-section="projects">
    <h2 class="lg-section-title">NOTABLE MATTERS</h2>
    {{#each projects}}
    <div class="lg-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="lg-entry-head">
        <div class="lg-entry-main">
          <span class="lg-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="lg-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="lg-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="lg-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.legal { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 24mm; font-family: "Times New Roman", "Georgia", "PingFang SC", "Microsoft YaHei", serif; font-size: 11pt; line-height: 1.7; color: #000; background: #fff; }
.lg-header { text-align: center; margin-bottom: 8px; }
.lg-header h1 { font-size: 22pt; font-weight: 700; color: #000; letter-spacing: 2px; text-transform: uppercase; font-family: "Times New Roman", serif; }
.lg-title { font-size: 10.5pt; color: #333; margin-top: 4px; letter-spacing: 1px; }
.lg-contacts { margin-top: 6px; font-size: 9.5pt; color: #333; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
.lg-rule { height: 1px; background: #000; margin: 10px 0; }
.lg-section { margin-bottom: 14px; }
.lg-section-title { font-size: 9.5pt; font-weight: 700; letter-spacing: 2px; color: #000; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 8px; font-family: "Times New Roman", serif; }
.lg-entry { margin-bottom: 10px; }
.lg-entry-head { display: flex; justify-content: space-between; align-items: baseline; }
.lg-entry-main { display: flex; flex-direction: column; }
.lg-org { font-size: 11pt; font-weight: 700; color: #000; }
.lg-pos { font-size: 10.5pt; color: #333; font-style: italic; }
.lg-date { font-size: 9.5pt; color: #444; white-space: nowrap; }
.lg-body { font-size: 10.5pt; color: #222; margin-top: 5px; text-align: justify; }
.lg-list { margin-top: 5px; padding-left: 22px; }
.lg-list li { font-size: 10.5pt; color: #222; margin-bottom: 3px; }
.lg-skills { columns: 2; gap: 24px; }
.lg-skill { display: block; font-size: 10.5pt; color: #333; margin-bottom: 4px; break-inside: avoid; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.legal { margin: 0; padding: 20mm 22mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "legal",
          "version": "1.0.0",
          "name": "法律行业",
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
  },
  {
    slug: 'modern',
    name: '现代双栏',
    category: 'creative',
    html: `<div class="resume modern">
  <aside class="sidebar">
    {{#if basics.avatar}}<img class="avatar" src="{{{basics.avatar}}}" alt="" />{{/if}}
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact-list">
      {{#if basics.email}}<div class="contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
    {{#if skills.length}}<div class="sidebar-section" data-section="skills"><h2>专业技能</h2>{{#each skills}}<div class="skill-item" data-entry="skills" data-entry-index="{{@index}}"><span class="skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="skill-level" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</div>{{/each}}</div>{{/if}}
  </aside>
  <main class="main-content">
    {{#if basics.summary}}<section class="section"><h2>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
    {{#if experience.length}}<section class="section" data-section="experience"><h2>工作经历</h2>{{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}"><h3><span data-field="experience.{{@index}}.position">{{{position}}}</span> <span class="at">@</span> <span data-field="experience.{{@index}}.company">{{{company}}}</span></h3><span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}</section>{{/if}}
    {{#if education.length}}<section class="section" data-section="education"><h2>教育背景</h2>{{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span> · <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></p></div>{{/each}}</section>{{/if}}
    {{#if projects.length}}<section class="section" data-section="projects"><h2>项目经历</h2>{{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} — <span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>{{#if description}}<div data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}</section>{{/if}}
  </main>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.modern {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  display: flex;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  color: #44403C;
  background: #fff;
}

/* ── Sidebar ── */
.sidebar {
  width: 195px;
  min-width: 195px;
  background: #1C1917;
  color: #F5F5F4;
  padding: 20mm 16px 24px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 14px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.12);
  background: #292524;
}

.sidebar h1 {
  font-size: 15pt;
  font-weight: 700;
  color: #F5F5F4;
  line-height: 1.25;
  letter-spacing: 0.3px;
  margin-bottom: 4px;
  word-break: break-word;
}

.sidebar .title {
  font-size: 9pt;
  color: #A8A29E;
  line-height: 1.4;
  margin-bottom: 14px;
}

.contact-list { margin-bottom: 16px; }

.contact-item {
  font-size: 8.5pt;
  margin-bottom: 5px;
  color: #A8A29E;
  word-break: break-all;
  line-height: 1.4;
}

/* ── Sidebar Section ── */
.sidebar-section { margin-top: 14px; }

.sidebar-section h2 {
  font-size: 8pt;
  color: #F5F5F4;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 4px;
  margin-bottom: 8px;
}

.skill-item {
  font-size: 8.5pt;
  margin-bottom: 5px;
  line-height: 1.4;
  word-break: break-word;
  color: #D6D3D1;
}

.skill-name { color: #D6D3D1; }
.skill-level { color: #78716C; font-size: 8pt; }

/* ── Main Content ── */
.main-content {
  flex: 1;
  padding: 20mm 20px 24px 22px;
  min-width: 0;
}

.main-content .section { margin-bottom: 11px; }

.main-content h2 {
  font-size: 8.5pt;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  border-bottom: 1px solid #D6D3D1;
  padding-bottom: 4px;
  margin-bottom: 7px;
}

.entry { margin-bottom: 8px; }
.entry:last-child { margin-bottom: 0; }

.entry h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  line-height: 1.4;
}

.at { color: #A8A29E; font-weight: 400; }

.date {
  font-size: 8.5pt;
  color: #78716C;
  margin-top: 1px;
  display: block;
}

.entry ul {
  margin-top: 4px;
  padding-left: 15px;
}

.entry li {
  font-size: 9pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.entry p {
  font-size: 9pt;
  color: #57534E;
  margin-top: 2px;
  line-height: 1.5;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.modern { margin: 0; }
  .sidebar {
    background: #1C1917;
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
          "templateId": "modern",
          "version": "1.0.0",
          "name": "现代双栏",
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
  },
  {
    slug: 'fresh',
    name: '清新活力',
    category: 'creative',
    html: `<div class="resume fresh">
  <div class="fresh-sidebar"></div>
  <div class="fresh-content">
    <header class="fresh-header">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="fresh-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="fresh-contacts">
        {{#if basics.email}}<span class="fresh-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="fresh-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="fresh-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </header>
    {{#if basics.summary}}
    <section class="fresh-section">
      <h2 class="fresh-section-title"><span class="fresh-dot"></span>个人简介</h2>
      <div class="fresh-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="fresh-section" data-section="experience">
      <h2 class="fresh-section-title"><span class="fresh-dot"></span>工作经历</h2>
      {{#each experience}}
      <div class="fresh-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="fresh-entry-top">
          <div>
            <span class="fresh-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="fresh-arrow"> › </span>
            <span class="fresh-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="fresh-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="fresh-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="fresh-section" data-section="education">
      <h2 class="fresh-section-title"><span class="fresh-dot"></span>教育背景</h2>
      {{#each education}}
      <div class="fresh-entry" data-entry="education" data-entry-index="{{@index}}">
        <div class="fresh-entry-top">
          <div>
            <span class="fresh-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
            <span class="fresh-arrow"> · </span>
            <span data-field="education.{{@index}}.area">{{{area}}}</span>
            <span class="fresh-arrow"> · </span>
            <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
          </div>
          <span class="fresh-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if skills.length}}
    <section class="fresh-section" data-section="skills">
      <h2 class="fresh-section-title"><span class="fresh-dot"></span>专业技能</h2>
      <div class="fresh-skills">
        {{#each skills}}<span class="fresh-skill-badge" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="fresh-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
      </div>
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="fresh-section" data-section="projects">
      <h2 class="fresh-section-title"><span class="fresh-dot"></span>项目经历</h2>
      {{#each projects}}
      <div class="fresh-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="fresh-entry-top">
          <div>
            <span class="fresh-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="fresh-arrow"> › </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          <span class="fresh-date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if description}}<div class="fresh-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="fresh-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.fresh {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  display: flex;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #1C1917;
  background: #fff;
}

/* ── Left Accent Bar ── */
.fresh-sidebar {
  width: 4px;
  min-width: 4px;
  background: #0369A1;
  flex-shrink: 0;
}

/* ── Main Content ── */
.fresh-content {
  flex: 1;
  padding: 18mm 20px 20px 22px;
  min-width: 0;
}

/* ── Header ── */
.fresh-header {
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #E7F3FA;
}

.fresh-header h1 {
  font-size: 20pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 0.3px;
  line-height: 1.2;
}

.fresh-title {
  font-size: 10pt;
  color: #0369A1;
  font-weight: 500;
  margin-top: 3px;
}

.fresh-contacts {
  margin-top: 7px;
  display: flex;
  flex-wrap: wrap;
  gap: 3px 14px;
}

.fresh-contact {
  font-size: 9pt;
  color: #57534E;
}

/* ── Section ── */
.fresh-section { margin-bottom: 11px; }

.fresh-section-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: #0369A1;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.fresh-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0369A1;
  flex-shrink: 0;
}

/* ── Entry ── */
.fresh-entry {
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 2px solid #E0F2FE;
}

.fresh-entry:last-child { margin-bottom: 0; }

.fresh-entry-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
  gap: 8px;
}

.fresh-company {
  font-weight: 700;
  color: #1C1917;
  font-size: 10pt;
}

.fresh-pos {
  color: #44403C;
  font-size: 9.5pt;
}

.fresh-arrow {
  color: #A8A29E;
  font-weight: 400;
  margin: 0 3px;
}

.fresh-date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  margin-left: 8px;
  flex-shrink: 0;
}

.fresh-text {
  font-size: 9.5pt;
  color: #57534E;
  line-height: 1.6;
}

.fresh-list {
  padding-left: 14px;
  margin-top: 4px;
}

.fresh-list li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.fresh-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.fresh-skill-badge {
  background: #E0F2FE;
  border: none;
  color: #0369A1;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 9pt;
  font-weight: 500;
}

.fresh-skill-level {
  color: #0284C7;
  font-weight: 400;
  margin-left: 3px;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.fresh { margin: 0; }
  .fresh-sidebar {
    background: #0369A1;
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
          "templateId": "fresh",
          "version": "1.0.0",
          "name": "清新活力",
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
  },
  {
    slug: 'creative',
    name: '创意设计',
    category: 'creative',
    html: `<div class="resume creative">
  <header class="cr-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="cr-tagline" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="cr-contacts">
      {{#if basics.email}}<span class="cr-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="cr-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="cr-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="cr-section">
    <h2 class="cr-section-title">个人简介</h2>
    <div class="cr-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">工作经历</h2>
    {{#each experience}}
    <div class="cr-entry">
      <div class="cr-entry-head">
        <div class="cr-meta">
          <span class="cr-entity" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="cr-role" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="cr-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="cr-highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">教育背景</h2>
    {{#each education}}
    <div class="cr-entry">
      <div class="cr-entry-head">
        <div class="cr-meta">
          <span class="cr-entity" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="cr-role"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        </div>
        <span class="cr-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">专业技能</h2>
    <div class="cr-skills-grid">
      {{#each skills}}
      <div class="cr-skill-row">
        <span class="cr-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>
        <div class="cr-skill-bar">
          <div class="cr-skill-fill cr-level-{{{level}}}"></div>
        </div>
        <span class="cr-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>
      </div>
      {{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">项目经历</h2>
    {{#each projects}}
    <div class="cr-entry">
      <div class="cr-entry-head">
        <div class="cr-meta">
          <span class="cr-entity" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="cr-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="cr-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="cr-highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.creative { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1F2937; background: #fff; }
.cr-header { padding: 24px 28px 20px; background: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%); color: #fff; }
.cr-header h1 { font-size: 26pt; font-weight: 900; letter-spacing: -0.5px; color: #fff; }
.cr-tagline { font-size: 12pt; color: rgba(255,255,255,0.8); margin-top: 4px; font-weight: 300; }
.cr-contacts { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 4px 16px; }
.cr-contact { font-size: 9pt; color: rgba(255,255,255,0.75); }
.cr-section { padding: 12px 28px; }
.cr-section-title { display: inline-block; font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; background: #7C3AED; color: #fff; padding: 2px 10px; border-radius: 2px; margin-bottom: 10px; }
.cr-entry { margin-bottom: 10px; }
.cr-entry:last-child { margin-bottom: 0; }
.cr-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.cr-meta { display: flex; flex-direction: column; }
.cr-entity { font-size: 11pt; font-weight: 700; color: #111827; }
.cr-role { font-size: 9.5pt; color: #6B7280; margin-top: 1px; }
.cr-date { font-size: 9pt; color: #9CA3AF; white-space: nowrap; margin-left: 12px; padding-top: 2px; }
.cr-body { font-size: 9.5pt; color: #4B5563; margin-top: 4px; }
.cr-highlights { padding-left: 16px; margin-top: 4px; }
.cr-highlights li { font-size: 9.5pt; color: #374151; margin-bottom: 2px; }
.cr-skills-grid { display: flex; flex-direction: column; gap: 8px; }
.cr-skill-row { display: flex; align-items: center; gap: 10px; }
.cr-skill-name { width: 80px; font-size: 9.5pt; font-weight: 600; color: #374151; flex-shrink: 0; }
.cr-skill-bar { flex: 1; height: 6px; background: #E5E7EB; border-radius: 3px; overflow: hidden; }
.cr-skill-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #7C3AED, #4F46E5); }
.cr-level-精通 .cr-skill-fill, .cr-skill-fill.cr-level-精通 { width: 95%; }
.cr-level-掌握 .cr-skill-fill, .cr-skill-fill.cr-level-掌握 { width: 75%; }
.cr-level-熟悉 .cr-skill-fill, .cr-skill-fill.cr-level-熟悉 { width: 55%; }
.cr-level-了解 .cr-skill-fill, .cr-skill-fill.cr-level-了解 { width: 35%; }
.cr-skill-fill { width: 60%; }
.cr-skill-level { width: 30px; font-size: 8.5pt; color: #9CA3AF; flex-shrink: 0; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.creative { margin: 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "creative",
          "version": "1.0.0",
          "name": "创意设计",
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
  },
  {
    slug: 'designer',
    name: '设计师',
    category: 'creative',
    html: `<div class="resume designer">
  <aside class="ds-sidebar">
    {{#if basics.avatar}}<img class="ds-avatar" src="{{{basics.avatar}}}" alt="" />{{/if}}
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="ds-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="ds-divider"></div>
    <div class="ds-contact-section">
      {{#if basics.email}}<div class="ds-contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="ds-contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="ds-contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
    {{#if skills.length}}
    <div class="ds-skill-section" data-section="skills">
      <h3 class="ds-sidebar-title">技能</h3>
      {{#each skills}}<div class="ds-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ds-skill-dot" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
    {{/if}}
    {{#if education.length}}
    <div class="ds-edu-section" data-section="education">
      <h3 class="ds-sidebar-title">教育</h3>
      {{#each education}}
      <div class="ds-edu-item" data-entry="education" data-entry-index="{{@index}}">
        <span class="ds-edu-school" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="ds-edu-major"><span data-field="education.{{@index}}.area">{{{area}}}</span></span>
        <span class="ds-edu-deg" data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        <span class="ds-edu-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{/each}}
    </div>
    {{/if}}
  </aside>
  <main class="ds-main">
    {{#if basics.summary}}
    <section class="ds-section">
      <h2 class="ds-section-title">关于我</h2>
      <div class="ds-body" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="ds-section" data-section="experience">
      <h2 class="ds-section-title">工作经历</h2>
      {{#each experience}}
      <div class="ds-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="ds-entry-head">
          <div>
            <span class="ds-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="ds-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="ds-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="ds-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="ds-section" data-section="projects">
      <h2 class="ds-section-title">项目经历</h2>
      {{#each projects}}
      <div class="ds-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="ds-entry-head">
          <div>
            <span class="ds-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="ds-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
        </div>
        {{#if description}}<div class="ds-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ds-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
  </main>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.designer { max-width: 210mm; min-height: 297mm; margin: 0 auto; display: flex; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.65; color: #e5e5e5; background: #18181B; }
.ds-sidebar { width: 240px; min-height: 297mm; background: #18181B; padding: 28px 22px; flex-shrink: 0; border-right: 1px solid #27272A; }
.ds-avatar { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; margin-bottom: 12px; border: 2px solid #3F3F46; }
.ds-sidebar h1 { font-size: 16pt; font-weight: 700; color: #FAFAFA; line-height: 1.2; margin-bottom: 4px; }
.ds-title { font-size: 9pt; color: #A1A1AA; margin-bottom: 0; }
.ds-divider { height: 1px; background: #3F3F46; margin: 14px 0; }
.ds-contact-section { margin-bottom: 20px; }
.ds-contact-item { font-size: 8.5pt; color: #A1A1AA; margin-bottom: 4px; word-break: break-all; }
.ds-sidebar-title { font-size: 7.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #71717A; margin-bottom: 10px; }
.ds-skill-section, .ds-edu-section { margin-bottom: 20px; }
.ds-skill { font-size: 9pt; color: #D4D4D8; margin-bottom: 5px; display: flex; justify-content: space-between; }
.ds-skill-dot { font-size: 8.5pt; color: #71717A; }
.ds-edu-item { margin-bottom: 10px; }
.ds-edu-school { display: block; font-size: 9pt; font-weight: 600; color: #D4D4D8; }
.ds-edu-major { display: block; font-size: 8.5pt; color: #A1A1AA; }
.ds-edu-deg { display: block; font-size: 8.5pt; color: #71717A; }
.ds-edu-date { display: block; font-size: 8pt; color: #52525B; }
.ds-main { flex: 1; padding: 28px 26px; background: #FFFFFF; color: #18181B; }
.ds-section { margin-bottom: 20px; }
.ds-section-title { font-size: 10pt; font-weight: 700; color: #18181B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #18181B; padding-bottom: 5px; margin-bottom: 12px; }
.ds-entry { margin-bottom: 14px; }
.ds-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
.ds-company { display: block; font-size: 10.5pt; font-weight: 700; color: #111; }
.ds-position { display: block; font-size: 9.5pt; color: #525252; }
.ds-date { font-size: 9pt; color: #737373; white-space: nowrap; flex-shrink: 0; }
.ds-body { font-size: 9.5pt; color: #404040; }
.ds-list { margin-top: 5px; padding-left: 16px; }
.ds-list li { font-size: 9.5pt; color: #404040; margin-bottom: 3px; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.designer { margin: 0; } .ds-sidebar { min-height: auto; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "designer",
          "version": "1.0.0",
          "name": "设计师",
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
  },
  {
    slug: 'photographer',
    name: '摄影师',
    category: 'creative',
    html: `<div class="resume photographer">
  <header class="ph-header">
    <div class="ph-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ph-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="ph-contacts">
      {{#if basics.email}}<span class="ph-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="ph-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="ph-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="ph-content">
    {{#if basics.summary}}
    <section class="ph-section">
      <h2 class="ph-section-title">创作理念</h2>
      <div class="ph-body" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="ph-section" data-section="experience">
      <h2 class="ph-section-title">工作经历</h2>
      {{#each experience}}
      <div class="ph-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="ph-entry-head">
          <h3><span data-field="experience.{{@index}}.company">{{{company}}}</span> <span class="ph-sep">·</span> <span class="ph-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="ph-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="ph-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="ph-section" data-section="projects">
      <h2 class="ph-section-title">作品项目</h2>
      {{#each projects}}
      <div class="ph-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="ph-entry-head">
          <h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="ph-sep">·</span> <span class="ph-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        </div>
        {{#if description}}<div class="ph-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ph-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="ph-section" data-section="education">
      <h2 class="ph-section-title">教育背景</h2>
      {{#each education}}
      <div class="ph-entry" data-entry="education" data-entry-index="{{@index}}">
        <div class="ph-entry-head">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="ph-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="ph-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if skills.length}}
    <section class="ph-section" data-section="skills">
      <h2 class="ph-section-title">专业技能</h2>
      <div class="ph-skills">
        {{#each skills}}<span class="ph-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ph-skill-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
      </div>
    </section>
    {{/if}}
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.photographer { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Georgia", "Times New Roman", "PingFang SC", "Microsoft YaHei", serif; font-size: 10pt; line-height: 1.7; color: #1a1a1a; background: #fff; }
.ph-header { background: #1C1C1C; color: #fff; padding: 24mm 22mm 18mm; }
.ph-header-inner h1 { font-size: 30pt; font-weight: 400; color: #fff; letter-spacing: 3px; font-family: "Georgia", serif; line-height: 1.1; }
.ph-title { font-size: 11pt; color: rgba(255,255,255,0.65); margin-top: 8px; letter-spacing: 3px; text-transform: uppercase; font-family: "Helvetica Neue", sans-serif; font-weight: 300; }
.ph-contacts { margin-top: 14px; display: flex; gap: 20px; flex-wrap: wrap; }
.ph-contact { font-size: 9pt; color: rgba(255,255,255,0.55); font-family: "Helvetica Neue", sans-serif; letter-spacing: 0.5px; }
.ph-content { padding: 20px 22mm; }
.ph-section { margin-bottom: 18px; }
.ph-section-title { font-size: 8pt; font-weight: 400; text-transform: uppercase; letter-spacing: 3px; color: #888; border-bottom: 1px solid #E5E5E5; padding-bottom: 6px; margin-bottom: 12px; font-family: "Helvetica Neue", sans-serif; }
.ph-entry { margin-bottom: 12px; }
.ph-entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.ph-entry-head h3 { font-size: 11pt; font-weight: 700; color: #1a1a1a; }
.ph-sep { color: #ccc; }
.ph-pos { font-weight: 400; font-size: 10.5pt; color: #555; font-style: italic; }
.ph-date { font-size: 9pt; color: #999; white-space: nowrap; font-family: "Helvetica Neue", sans-serif; }
.ph-body { font-size: 10pt; color: #444; margin-top: 5px; }
.ph-list { margin-top: 5px; padding-left: 18px; }
.ph-list li { font-size: 9.5pt; color: #444; margin-bottom: 3px; }
.ph-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.ph-skill { font-size: 9pt; color: #555; font-family: "Helvetica Neue", sans-serif; }
.ph-skill + .ph-skill::before { content: "/"; margin-right: 8px; color: #ccc; }
.ph-skill-lv { color: #999; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.photographer { margin: 0; } .ph-header { padding: 20mm 20mm 16mm; } .ph-content { padding: 18px 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "photographer",
          "version": "1.0.0",
          "name": "摄影师",
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
  },
  {
    slug: 'writer',
    name: '写作编辑',
    category: 'creative',
    html: `<div class="resume writer">
  <header class="wr-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="wr-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="wr-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
    <div class="wr-rule"></div>
  </header>
  {{#if basics.summary}}
  <section class="wr-section">
    <div class="wr-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="wr-section" data-section="experience">
    <h2 class="wr-section-title">工作经历</h2>
    {{#each experience}}
    <div class="wr-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="wr-entry-head">
        <span class="wr-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="wr-em" data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="wr-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="wr-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="wr-section" data-section="projects">
    <h2 class="wr-section-title">代表作品</h2>
    {{#each projects}}
    <div class="wr-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="wr-entry-head">
        <span class="wr-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="wr-em" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="wr-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="wr-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="wr-section" data-section="education">
    <h2 class="wr-section-title">教育背景</h2>
    {{#each education}}
    <div class="wr-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="wr-entry-head">
        <span class="wr-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="wr-em"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        <span class="wr-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="wr-section" data-section="skills">
    <h2 class="wr-section-title">专业技能</h2>
    <p class="wr-skills-inline">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} (<span data-field="skills.{{@index}}.level">{{{level}}}</span>){{/if}}</span>{{#unless @last}} · {{/unless}}{{/each}}</p>
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.writer { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 28mm; font-family: "Garamond", "Georgia", "Times New Roman", "PingFang SC", "Microsoft YaHei", serif; font-size: 11.5pt; line-height: 1.75; color: #1a1a1a; background: #fff; }
.wr-header { margin-bottom: 18px; }
.wr-header h1 { font-size: 28pt; font-weight: 400; color: #111; font-family: "Garamond", "Georgia", serif; letter-spacing: 1px; line-height: 1.1; }
.wr-title { font-size: 11pt; color: #666; margin-top: 5px; font-style: italic; }
.wr-contacts { margin-top: 8px; font-size: 9.5pt; color: #777; display: flex; gap: 14px; flex-wrap: wrap; }
.wr-rule { height: 1px; background: #333; margin-top: 12px; }
.wr-section { margin-bottom: 16px; }
.wr-summary { font-size: 11.5pt; color: #333; line-height: 1.8; text-indent: 2em; margin-top: 6px; }
.wr-section-title { font-size: 10pt; font-weight: 700; font-variant: small-caps; letter-spacing: 1.5px; color: #333; margin-bottom: 10px; padding-bottom: 2px; border-bottom: 1px solid #ccc; }
.wr-entry { margin-bottom: 10px; }
.wr-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 8px; }
.wr-org { font-size: 11pt; font-weight: 700; color: #111; }
.wr-em { font-size: 10.5pt; font-style: italic; color: #555; }
.wr-date { font-size: 9.5pt; color: #888; margin-left: auto; }
.wr-desc { font-size: 10.5pt; color: #444; margin-top: 5px; }
.wr-list { margin-top: 5px; padding-left: 22px; }
.wr-list li { font-size: 10.5pt; color: #444; margin-bottom: 4px; }
.wr-skills-inline { font-size: 10.5pt; color: #444; line-height: 1.8; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.writer { margin: 0; padding: 20mm 26mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "writer",
          "version": "1.0.0",
          "name": "写作编辑",
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
  },
  {
    slug: 'marketing',
    name: '市场营销',
    category: 'creative',
    html: `<div class="resume marketing">
  <header class="mk-header">
    <div class="mk-header-bg">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="mk-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="mk-contacts">
        {{#if basics.email}}<span class="mk-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="mk-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="mk-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="mk-body">
    <div class="mk-main">
      {{#if basics.summary}}
      <section class="mk-section">
        <h2 class="mk-section-title">个人简介</h2>
        <div class="mk-text" data-field="basics.summary">{{{basics.summary}}}</div>
      </section>
      {{/if}}
      {{#if experience.length}}
      <section class="mk-section" data-section="experience">
        <h2 class="mk-section-title">工作经历</h2>
        {{#each experience}}
        <div class="mk-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="mk-entry-head">
            <div>
              <span class="mk-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
              <span class="mk-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
            </div>
            <span class="mk-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul class="mk-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if projects.length}}
      <section class="mk-section" data-section="projects">
        <h2 class="mk-section-title">营销案例</h2>
        {{#each projects}}
        <div class="mk-entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="mk-entry-head">
            <span class="mk-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="mk-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          {{#if description}}<div class="mk-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="mk-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div class="mk-side">
      {{#if education.length}}
      <section class="mk-section" data-section="education">
        <h2 class="mk-section-title">教育背景</h2>
        {{#each education}}
        <div class="mk-edu" data-entry="education" data-entry-index="{{@index}}">
          <strong data-field="education.{{@index}}.institution">{{{institution}}}</strong>
          <span data-field="education.{{@index}}.area">{{{area}}}</span>
          <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
          <span class="mk-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="mk-section" data-section="skills">
        <h2 class="mk-section-title">专业技能</h2>
        {{#each skills}}
        <div class="mk-skill-bar" data-entry="skills" data-entry-index="{{@index}}">
          <span class="mk-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>
          {{#if level}}<span class="mk-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.marketing { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #1a2233; background: #fff; }
.mk-header-bg { background: linear-gradient(135deg, #DBEAFE 0%, #DCFCE7 100%); padding: 18mm 22mm 16mm; }
.mk-header-bg h1 { font-size: 24pt; font-weight: 800; color: #1E3A5F; }
.mk-title { font-size: 11pt; color: #2D6A4F; margin-top: 4px; font-weight: 500; }
.mk-contacts { margin-top: 10px; display: flex; gap: 16px; flex-wrap: wrap; }
.mk-contact { font-size: 9pt; color: #374151; }
.mk-body { display: flex; gap: 0; padding: 0 22mm; }
.mk-main { flex: 2; padding-right: 20px; padding-top: 16px; }
.mk-side { flex: 1; padding-left: 20px; padding-top: 16px; border-left: 1px solid #E5E7EB; }
.mk-section { margin-bottom: 16px; }
.mk-section-title { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #1E3A5F; border-bottom: 2px solid #BFDBFE; padding-bottom: 4px; margin-bottom: 10px; }
.mk-entry { margin-bottom: 12px; }
.mk-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
.mk-company { display: block; font-size: 10.5pt; font-weight: 700; color: #1a2233; }
.mk-position { display: block; font-size: 9.5pt; color: #4B5563; }
.mk-date { font-size: 9pt; color: #6B7280; white-space: nowrap; }
.mk-text { font-size: 9.5pt; color: #374151; margin-top: 4px; }
.mk-list { margin-top: 5px; padding-left: 16px; }
.mk-list li { font-size: 9.5pt; color: #374151; margin-bottom: 3px; }
.mk-edu { display: flex; flex-direction: column; gap: 2px; margin-bottom: 10px; font-size: 9.5pt; }
.mk-edu strong { color: #1a2233; }
.mk-skill-bar { display: flex; justify-content: space-between; font-size: 9.5pt; padding: 5px 0; border-bottom: 1px solid #F3F4F6; }
.mk-skill-name { color: #1a2233; font-weight: 500; }
.mk-skill-level { color: #059669; font-size: 9pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.marketing { margin: 0; } .mk-header-bg { padding: 16mm 20mm 14mm; } .mk-body { padding: 0 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "marketing",
          "version": "1.0.0",
          "name": "市场营销",
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
  },
  {
    slug: 'media',
    name: '新媒体运营',
    category: 'creative',
    html: `<div class="resume media">
  <header class="md-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="md-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="md-contacts">
      {{#if basics.email}}<span class="md-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="md-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="md-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="md-content">
    {{#if basics.summary}}
    <section class="md-card">
      <h2 class="md-card-title">关于我</h2>
      <div class="md-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="md-card" data-section="experience">
      <h2 class="md-card-title">工作经历</h2>
      {{#each experience}}
      <div class="md-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="md-entry-head">
          <div>
            <span class="md-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="md-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="md-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="md-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="md-card" data-section="projects">
      <h2 class="md-card-title">内容作品</h2>
      {{#each projects}}
      <div class="md-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="md-entry-head">
          <span class="md-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="md-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="md-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="md-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    <div class="md-two-col">
      {{#if education.length}}
      <section class="md-card" data-section="education">
        <h2 class="md-card-title">教育背景</h2>
        {{#each education}}
        <div class="md-edu" data-entry="education" data-entry-index="{{@index}}">
          <strong data-field="education.{{@index}}.institution">{{{institution}}}</strong>
          <span><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="md-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="md-card" data-section="skills">
        <h2 class="md-card-title">专业技能</h2>
        <div class="md-tags">
          {{#each skills}}<span class="md-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.media { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "PingFang SC", "Helvetica Neue", "Arial", sans-serif; font-size: 10pt; line-height: 1.65; color: #111827; background: #F9FAFB; }
.md-header { background: #111827; color: #fff; padding: 20mm 22mm 14mm; }
.md-header h1 { font-size: 22pt; font-weight: 800; color: #fff; }
.md-title { font-size: 10.5pt; color: rgba(255,255,255,0.65); margin-top: 4px; }
.md-contacts { margin-top: 10px; display: flex; gap: 14px; flex-wrap: wrap; }
.md-contact { font-size: 9pt; color: rgba(255,255,255,0.55); }
.md-content { padding: 16px 22mm 22mm; }
.md-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; }
.md-card-title { font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #374151; margin-bottom: 10px; }
.md-entry { margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #F3F4F6; }
.md-entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.md-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
.md-org { display: block; font-size: 10.5pt; font-weight: 700; color: #111827; }
.md-pos { display: block; font-size: 9.5pt; color: #6B7280; }
.md-date { font-size: 9pt; color: #9CA3AF; white-space: nowrap; }
.md-text { font-size: 9.5pt; color: #374151; }
.md-list { margin-top: 5px; padding-left: 16px; }
.md-list li { font-size: 9.5pt; color: #374151; margin-bottom: 3px; }
.md-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.md-edu { display: flex; flex-direction: column; gap: 2px; font-size: 9.5pt; margin-bottom: 8px; }
.md-edu strong { color: #111827; }
.md-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.md-tag { background: #F3F4F6; color: #374151; padding: 3px 10px; border-radius: 20px; font-size: 9pt; border: 1px solid #E5E7EB; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.media { margin: 0; background: #fff; } .md-header { padding: 18mm 20mm 12mm; } .md-content { padding: 14px 20mm 18mm; } .md-card { box-shadow: none; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "media",
          "version": "1.0.0",
          "name": "新媒体运营",
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
  },
  {
    slug: 'artist',
    name: '艺术家',
    category: 'creative',
    html: `<div class="resume artist">
  <header class="ar-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="ar-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="ar-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="ar-section">
    <h2 class="ar-section-title">创作自述</h2>
    <div class="ar-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="ar-section" data-section="experience">
    <h2 class="ar-section-title">工作经历</h2>
    {{#each experience}}
    <div class="ar-entry" data-entry="experience" data-entry-index="{{@index}}">
      <h3 data-field="experience.{{@index}}.company">{{{company}}}</h3>
      <div class="ar-meta">
        <span data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="ar-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="ar-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="ar-section" data-section="projects">
    <h2 class="ar-section-title">艺术作品</h2>
    {{#each projects}}
    <div class="ar-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3 data-field="projects.{{@index}}.name">{{{name}}}</h3>
      {{#if role}}<div class="ar-meta"><span data-field="projects.{{@index}}.role">{{{role}}}</span></div>{{/if}}
      {{#if description}}<div class="ar-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="ar-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="ar-section" data-section="education">
    <h2 class="ar-section-title">教育背景</h2>
    {{#each education}}
    <div class="ar-entry" data-entry="education" data-entry-index="{{@index}}">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <div class="ar-meta">
        <span><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        <span class="ar-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="ar-section" data-section="skills">
    <h2 class="ar-section-title">媒介技法</h2>
    <div class="ar-skills">
      {{#each skills}}<span class="ar-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.artist { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20mm 20mm 20mm 28mm; font-family: "Georgia", "Times New Roman", "PingFang SC", "Microsoft YaHei", serif; font-size: 10.5pt; line-height: 1.7; color: #2C1810; background: #fff; }
.ar-header { margin-bottom: 20px; border-left: 5px solid #78350F; padding-left: 16px; }
.ar-header h1 { font-size: 30pt; font-weight: 400; color: #78350F; font-family: "Georgia", serif; line-height: 1.1; }
.ar-title { font-size: 11pt; color: #92400E; margin-top: 5px; font-style: italic; }
.ar-contacts { margin-top: 8px; display: flex; gap: 14px; flex-wrap: wrap; font-size: 9pt; color: #A16207; font-family: "Helvetica Neue", sans-serif; }
.ar-section { margin-bottom: 16px; }
.ar-section-title { font-size: 9pt; font-weight: 400; text-transform: uppercase; letter-spacing: 3px; color: #78350F; margin-bottom: 10px; border-bottom: 1px solid #D4B97A; padding-bottom: 4px; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ar-entry { margin-bottom: 12px; padding-left: 12px; border-left: 2px solid #F5DEB3; }
.ar-entry h3 { font-size: 11pt; font-weight: 700; color: #2C1810; }
.ar-meta { display: flex; justify-content: space-between; align-items: baseline; font-size: 9.5pt; color: #92400E; margin-top: 2px; font-style: italic; font-family: "Helvetica Neue", sans-serif; }
.ar-date { font-size: 9pt; color: #B45309; }
.ar-body { font-size: 10pt; color: #44403C; margin-top: 5px; }
.ar-list { margin-top: 5px; padding-left: 18px; }
.ar-list li { font-size: 10pt; color: #44403C; margin-bottom: 3px; }
.ar-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.ar-skill { font-size: 9.5pt; color: #78350F; border: 1px solid #D4B97A; padding: 2px 10px; border-radius: 2px; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.artist { margin: 0; padding: 18mm 18mm 18mm 26mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "artist",
          "version": "1.0.0",
          "name": "艺术家",
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
  },
  {
    slug: 'architect',
    name: '建筑师',
    category: 'creative',
    html: `<div class="resume architect">
  <header class="ac-header">
    <div class="ac-header-top">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ac-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="ac-header-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="ac-grid">
    <div class="ac-col-main">
      {{#if basics.summary}}
      <section class="ac-section">
        <h2 class="ac-section-title">Profile</h2>
        <div class="ac-body" data-field="basics.summary">{{{basics.summary}}}</div>
      </section>
      {{/if}}
      {{#if experience.length}}
      <section class="ac-section" data-section="experience">
        <h2 class="ac-section-title">Experience</h2>
        {{#each experience}}
        <div class="ac-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="ac-entry-head">
            <span class="ac-firm" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="ac-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="ac-role" data-field="experience.{{@index}}.position">{{{position}}}</p>
          {{#if highlights.length}}<ul class="ac-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if projects.length}}
      <section class="ac-section" data-section="projects">
        <h2 class="ac-section-title">Projects</h2>
        {{#each projects}}
        <div class="ac-entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="ac-entry-head">
            <span class="ac-firm" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="ac-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          {{#if description}}<div class="ac-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="ac-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div class="ac-col-side">
      {{#if education.length}}
      <section class="ac-section" data-section="education">
        <h2 class="ac-section-title">Education</h2>
        {{#each education}}
        <div class="ac-edu" data-entry="education" data-entry-index="{{@index}}">
          <span class="ac-firm" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="ac-role"><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span> · <span data-field="education.{{@index}}.area">{{{area}}}</span></span>
          <span class="ac-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="ac-section" data-section="skills">
        <h2 class="ac-section-title">Skills</h2>
        {{#each skills}}
        <div class="ac-skill" data-entry="skills" data-entry-index="{{@index}}">
          <span data-field="skills.{{@index}}.name">{{{name}}}</span>
          {{#if level}}<span class="ac-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.architect { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 9.5pt; line-height: 1.6; color: #2D2D2D; background: #fff; }
.ac-header { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid #BDBDBD; padding: 18mm 20mm 14px; gap: 20px; }
.ac-header-top h1 { font-size: 20pt; font-weight: 300; color: #1A1A1A; letter-spacing: 2px; text-transform: uppercase; line-height: 1.1; }
.ac-title { font-size: 9pt; color: #757575; margin-top: 4px; text-transform: uppercase; letter-spacing: 2px; }
.ac-header-contacts { display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-end; gap: 3px; font-size: 8.5pt; color: #757575; }
.ac-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 0; padding: 0 20mm; }
.ac-col-main { padding-right: 20px; border-right: 1px solid #E0E0E0; padding-top: 16px; }
.ac-col-side { padding-left: 20px; padding-top: 16px; }
.ac-section { margin-bottom: 16px; }
.ac-section-title { font-size: 7.5pt; font-weight: 400; text-transform: uppercase; letter-spacing: 3px; color: #9E9E9E; border-top: 1px solid #E0E0E0; padding-top: 6px; margin-bottom: 10px; }
.ac-entry { margin-bottom: 12px; }
.ac-entry-head { display: flex; justify-content: space-between; align-items: baseline; }
.ac-firm { font-size: 10pt; font-weight: 600; color: #1A1A1A; }
.ac-role { font-size: 9pt; color: #616161; margin-top: 1px; }
.ac-date { font-size: 8.5pt; color: #9E9E9E; }
.ac-body { font-size: 9pt; color: #424242; margin-top: 4px; }
.ac-list { margin-top: 5px; padding-left: 14px; }
.ac-list li { font-size: 9pt; color: #424242; margin-bottom: 3px; }
.ac-edu { display: flex; flex-direction: column; gap: 2px; margin-bottom: 10px; }
.ac-skill { display: flex; justify-content: space-between; font-size: 9pt; padding: 3px 0; border-bottom: 1px solid #F5F5F5; }
.ac-level { color: #9E9E9E; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.architect { margin: 0; } .ac-header { padding: 16mm 18mm 12px; } .ac-grid { padding: 0 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "architect",
          "version": "1.0.0",
          "name": "建筑师",
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
  },
  {
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
  },
  {
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

@media print {
  .resume.elegant { margin: 0; padding: 18mm 20mm; }
  @page { margin: 0; size: A4; }
}


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
  },
  {
    slug: 'clean',
    name: '纯净简洁',
    category: 'minimal',
    html: `<div class="resume clean">
  <header class="cl-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="cl-subtitle" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="cl-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="cl-section">
    <div class="cl-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="cl-section" data-section="experience">
    <h2 class="cl-heading">工作经历</h2>
    {{#each experience}}
    <div class="cl-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="cl-row">
        <span class="cl-main" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="cl-side"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="cl-sub" data-field="experience.{{@index}}.position">{{{position}}}</p>
      {{#if highlights.length}}<ul class="cl-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="cl-section" data-section="education">
    <h2 class="cl-heading">教育背景</h2>
    {{#each education}}
    <div class="cl-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="cl-row">
        <span class="cl-main" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="cl-side"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="cl-sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="cl-section" data-section="skills">
    <h2 class="cl-heading">专业技能</h2>
    <p class="cl-skills-line">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} (<span data-field="skills.{{@index}}.level">{{{level}}}</span>){{/if}}{{#unless @last}}  ·  {{/unless}}{{/each}}</p>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="cl-section" data-section="projects">
    <h2 class="cl-heading">项目经历</h2>
    {{#each projects}}
    <div class="cl-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="cl-row">
        <span class="cl-main" data-field="projects.{{@index}}.name">{{{name}}}</span>
        <span class="cl-side"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if role}}<p class="cl-sub" data-field="projects.{{@index}}.role">{{{role}}}</p>{{/if}}
      {{#if description}}<div class="cl-sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="cl-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.clean {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #111;
  background: #fff;
}

/* ── Header ── */
.cl-header { margin-bottom: 16px; }

.cl-header h1 {
  font-size: 20pt;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.cl-subtitle {
  font-size: 10pt;
  color: #A8A29E;
  margin-top: 3px;
  font-weight: 400;
}

.cl-contacts {
  margin-top: 7px;
  font-size: 9pt;
  color: #A8A29E;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* ── Section ── */
.cl-section { margin-bottom: 12px; }

.cl-summary {
  font-size: 10pt;
  color: #333;
  line-height: 1.65;
}

.cl-heading {
  font-size: 11pt;
  font-weight: 600;
  color: #000;
  margin-bottom: 7px;
}

/* ── Entry ── */
.cl-entry { margin-bottom: 8px; }
.cl-entry:last-child { margin-bottom: 0; }

.cl-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.cl-main {
  font-size: 10.5pt;
  font-weight: 700;
  color: #000;
  flex: 1;
}

.cl-side {
  font-size: 9pt;
  color: #A8A29E;
  white-space: nowrap;
  flex-shrink: 0;
}

.cl-sub {
  font-size: 9.5pt;
  color: #57534E;
  margin-top: 1px;
}

.cl-list {
  margin-top: 4px;
  padding-left: 16px;
}

.cl-list li {
  font-size: 9.5pt;
  color: #333;
  margin-bottom: 2px;
  line-height: 1.55;
}

.cl-skills-line {
  font-size: 9.5pt;
  color: #333;
  line-height: 1.8;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.clean { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "clean",
          "version": "1.0.0",
          "name": "纯净简洁",
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
  },
  {
    slug: 'swiss',
    name: '瑞士排版',
    category: 'minimal',
    html: `<div class="resume swiss">
  <header class="sw-header">
    <div class="sw-header-left">
      <div class="sw-red-block"></div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
    </div>
    <div class="sw-header-right">
      {{#if basics.title}}<p class="sw-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="sw-contacts">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="sw-body">
    {{#if basics.summary}}
    <div class="sw-row">
      <div class="sw-label">概述</div>
      <div class="sw-content">
        <div class="sw-text" data-field="basics.summary">{{{basics.summary}}}</div>
      </div>
    </div>
    {{/if}}
    {{#if experience.length}}
    <div class="sw-row" data-section="experience">
      <div class="sw-label">经历</div>
      <div class="sw-content">
        {{#each experience}}
        <div class="sw-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="sw-entry-row">
            <span class="sw-bold" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="sw-gray"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="sw-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
          {{#if highlights.length}}<ul class="sw-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </div>
    </div>
    {{/if}}
    {{#if education.length}}
    <div class="sw-row" data-section="education">
      <div class="sw-label">教育</div>
      <div class="sw-content">
        {{#each education}}
        <div class="sw-entry" data-entry="education" data-entry-index="{{@index}}">
          <div class="sw-entry-row">
            <span class="sw-bold" data-field="education.{{@index}}.institution">{{{institution}}}</span>
            <span class="sw-gray"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="sw-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> / <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>
        {{/each}}
      </div>
    </div>
    {{/if}}
    {{#if skills.length}}
    <div class="sw-row" data-section="skills">
      <div class="sw-label">技能</div>
      <div class="sw-content">
        <div class="sw-skills">
          {{#each skills}}<div class="sw-skill-item" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sw-gray"> / <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</div>{{/each}}
        </div>
      </div>
    </div>
    {{/if}}
    {{#if projects.length}}
    <div class="sw-row" data-section="projects">
      <div class="sw-label">项目</div>
      <div class="sw-content">
        {{#each projects}}
        <div class="sw-entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="sw-entry-row">
            <span class="sw-bold" data-field="projects.{{@index}}.name">{{{name}}}</span>
            <span class="sw-gray"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if role}}<p class="sw-pos" data-field="projects.{{@index}}.role">{{{role}}}</p>{{/if}}
          {{#if description}}<div class="sw-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="sw-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </div>
    </div>
    {{/if}}
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.swiss {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'PingFang SC', 'Noto Sans SC', sans-serif;
  font-size: 9.5pt;
  line-height: 1.5;
  color: #111;
  background: #fff;
}

/* ── Header ── */
.sw-header {
  display: flex;
  align-items: flex-start;
  padding: 16mm 20mm 12px;
  border-bottom: 2px solid #111;
}

.sw-header-left {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

.sw-red-block {
  width: 8px;
  height: 8px;
  background: #DC2626;
  flex-shrink: 0;
  margin-top: 6px;
}

.sw-header-left h1 {
  font-size: 22pt;
  font-weight: 900;
  color: #111;
  letter-spacing: -0.5px;
  line-height: 1;
}

.sw-header-right { text-align: right; }

.sw-title {
  font-size: 8.5pt;
  font-weight: 700;
  color: #DC2626;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 6px;
}

.sw-contacts {
  font-size: 8.5pt;
  color: #555;
  line-height: 1.8;
}

/* ── Body ── */
.sw-body {
  padding: 16px 20mm 20mm;
}

/* ── Grid Row ── */
.sw-row {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 0 20px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #EBEBEB;
}

.sw-row:last-child { border-bottom: none; }

.sw-label {
  font-size: 7pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #DC2626;
  padding-top: 2px;
  line-height: 1.4;
}

/* ── Entry ── */
.sw-entry { margin-bottom: 8px; }
.sw-entry:last-child { margin-bottom: 0; }

.sw-entry-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.sw-bold {
  font-size: 10pt;
  font-weight: 700;
  color: #111;
  flex: 1;
}

.sw-gray {
  font-size: 8.5pt;
  color: #888;
  white-space: nowrap;
  flex-shrink: 0;
}

.sw-pos {
  font-size: 9pt;
  color: #444;
  margin-top: 1px;
}

.sw-text {
  font-size: 9.5pt;
  color: #333;
  margin-top: 2px;
  line-height: 1.55;
}

.sw-list {
  margin-top: 4px;
  padding-left: 14px;
}

.sw-list li {
  font-size: 9pt;
  color: #333;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.sw-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
}

.sw-skill-item {
  font-size: 9pt;
  color: #222;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.swiss { margin: 0; }
  .sw-header { padding: 14mm 18mm 12px; }
  .sw-body { padding: 14px 18mm 18mm; }
  .sw-red-block {
    background: #DC2626;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .sw-label {
    color: #DC2626;
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
          "templateId": "swiss",
          "version": "1.0.0",
          "name": "瑞士排版",
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
  },
  {
    slug: 'nordic',
    name: '北欧风格',
    category: 'minimal',
    html: `<div class="resume nordic">
  <header class="nd-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="nd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="nd-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="nd-section">
    <div class="nd-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="nd-section" data-section="experience">
    <h2 class="nd-heading">工作经历</h2>
    {{#each experience}}
    <div class="nd-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="nd-date-col">
        <span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>
        <span class="nd-dash">—</span>
        <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>
      </div>
      <div class="nd-entry-body">
        <p class="nd-main" data-field="experience.{{@index}}.company">{{{company}}}</p>
        <p class="nd-sub" data-field="experience.{{@index}}.position">{{{position}}}</p>
        {{#if highlights.length}}<ul class="nd-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="nd-section" data-section="education">
    <h2 class="nd-heading">教育背景</h2>
    {{#each education}}
    <div class="nd-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="nd-date-col">
        <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>
        <span class="nd-dash">—</span>
        <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>
      </div>
      <div class="nd-entry-body">
        <p class="nd-main" data-field="education.{{@index}}.institution">{{{institution}}}</p>
        <p class="nd-sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="nd-section" data-section="skills">
    <h2 class="nd-heading">专业技能</h2>
    <div class="nd-skills">
      {{#each skills}}<span class="nd-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="nd-skill-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="nd-section" data-section="projects">
    <h2 class="nd-heading">项目经历</h2>
    {{#each projects}}
    <div class="nd-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="nd-date-col"></div>
      <div class="nd-entry-body">
        <p class="nd-main" data-field="projects.{{@index}}.name">{{{name}}}</p>
        {{#if role}}<p class="nd-sub" data-field="projects.{{@index}}.role">{{{role}}}</p>{{/if}}
        {{#if description}}<div class="nd-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="nd-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.nordic { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 24mm 24mm; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.7; color: #334155; background: #F8FAFC; }
.nd-header { margin-bottom: 24px; }
.nd-header h1 { font-size: 24pt; font-weight: 300; color: #1E293B; letter-spacing: 1px; }
.nd-title { font-size: 10.5pt; color: #94A3B8; margin-top: 4px; font-weight: 300; letter-spacing: 1px; }
.nd-contacts { margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; font-size: 9pt; color: #94A3B8; }
.nd-section { margin-bottom: 20px; }
.nd-summary { font-size: 10pt; color: #475569; line-height: 1.8; }
.nd-heading { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #94A3B8; margin-bottom: 14px; }
.nd-entry { display: grid; grid-template-columns: 80px 1fr; gap: 0 16px; margin-bottom: 14px; }
.nd-date-col { font-size: 8.5pt; color: #94A3B8; display: flex; flex-direction: column; gap: 0; padding-top: 2px; }
.nd-dash { color: #CBD5E1; }
.nd-entry-body { }
.nd-main { font-size: 10.5pt; font-weight: 600; color: #1E293B; }
.nd-sub { font-size: 9.5pt; color: #64748B; margin-top: 1px; }
.nd-text { font-size: 9.5pt; color: #475569; margin-top: 4px; }
.nd-list { margin-top: 5px; padding-left: 14px; }
.nd-list li { font-size: 9.5pt; color: #475569; margin-bottom: 3px; }
.nd-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.nd-skill { font-size: 9.5pt; color: #475569; border: 1px solid #CBD5E1; padding: 3px 12px; border-radius: 4px; }
.nd-skill-lv { color: #94A3B8; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.nordic { margin: 0; padding: 22mm 22mm; background: #fff; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "nordic",
          "version": "1.0.0",
          "name": "北欧风格",
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
  },
  {
    slug: 'japanese',
    name: '日式简约',
    category: 'minimal',
    html: `<div class="resume japanese">
  <header class="jp-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="jp-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="jp-line"></div>
    <div class="jp-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="jp-section">
    <div class="jp-section-bar">
      <span class="jp-section-title">自我介绍</span>
    </div>
    <div class="jp-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="jp-section" data-section="experience">
    <div class="jp-section-bar"><span class="jp-section-title">职务经历</span></div>
    {{#each experience}}
    <div class="jp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="jp-vert-line"></div>
      <div class="jp-entry-content">
        <div class="jp-entry-head">
          <span class="jp-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="jp-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> ─ <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="jp-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
        {{#if highlights.length}}<ul class="jp-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="jp-section" data-section="education">
    <div class="jp-section-bar"><span class="jp-section-title">学历</span></div>
    {{#each education}}
    <div class="jp-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="jp-vert-line"></div>
      <div class="jp-entry-content">
        <div class="jp-entry-head">
          <span class="jp-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="jp-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> ─ <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="jp-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="jp-section" data-section="skills">
    <div class="jp-section-bar"><span class="jp-section-title">スキル</span></div>
    <div class="jp-skills">
      {{#each skills}}<div class="jp-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="jp-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="jp-section" data-section="projects">
    <div class="jp-section-bar"><span class="jp-section-title">プロジェクト</span></div>
    {{#each projects}}
    <div class="jp-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="jp-vert-line"></div>
      <div class="jp-entry-content">
        <div class="jp-entry-head">
          <span class="jp-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="jp-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="jp-pos" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="jp-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.japanese { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 24mm 28mm; font-family: "Hiragino Sans", "PingFang SC", "Yu Gothic", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.8; color: #1C1917; background: #fff; }
.jp-header { margin-bottom: 28px; }
.jp-header h1 { font-size: 24pt; font-weight: 300; color: #1C1917; letter-spacing: 4px; }
.jp-title { font-size: 10pt; color: #78716C; margin-top: 6px; letter-spacing: 2px; }
.jp-line { height: 1px; background: #1C1917; margin: 12px 0; }
.jp-contacts { display: flex; gap: 20px; flex-wrap: wrap; font-size: 9pt; color: #57534E; letter-spacing: 0.5px; }
.jp-section { margin-bottom: 20px; }
.jp-section-bar { border-left: 2px solid #1C1917; padding-left: 12px; margin-bottom: 14px; }
.jp-section-title { font-size: 9pt; font-weight: 400; letter-spacing: 3px; color: #1C1917; }
.jp-summary { font-size: 10pt; color: #44403C; line-height: 1.9; }
.jp-entry { display: flex; gap: 0; margin-bottom: 14px; }
.jp-vert-line { width: 1px; background: #D6D3D1; margin-right: 16px; flex-shrink: 0; }
.jp-entry-content { flex: 1; }
.jp-entry-head { display: flex; justify-content: space-between; align-items: baseline; }
.jp-org { font-size: 10.5pt; font-weight: 600; color: #1C1917; letter-spacing: 0.5px; }
.jp-date { font-size: 9pt; color: #A8A29E; letter-spacing: 0.5px; }
.jp-pos { font-size: 9.5pt; color: #57534E; margin-top: 2px; }
.jp-list { margin-top: 6px; padding-left: 18px; }
.jp-list li { font-size: 9.5pt; color: #57534E; margin-bottom: 4px; }
.jp-skills { display: flex; flex-direction: column; gap: 6px; }
.jp-skill { display: flex; justify-content: space-between; font-size: 9.5pt; border-bottom: 1px solid #F5F5F4; padding-bottom: 5px; }
.jp-lv { font-size: 9pt; color: #A8A29E; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.japanese { margin: 0; padding: 22mm 26mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "japanese",
          "version": "1.0.0",
          "name": "日式简约",
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
  },
  {
    slug: 'paper',
    name: '纸质感',
    category: 'minimal',
    html: `<div class="resume paper">
  <header class="pp-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="pp-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="pp-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
    <div class="pp-rule"></div>
  </header>
  {{#if basics.summary}}
  <section class="pp-section">
    <h2 class="pp-heading">— 个人简介 —</h2>
    <div class="pp-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="pp-section" data-section="experience">
    <h2 class="pp-heading">— 工作经历 —</h2>
    {{#each experience}}
    <div class="pp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="pp-entry-top">
        <span class="pp-bold" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="pp-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> ~ <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="pp-italic" data-field="experience.{{@index}}.position">{{{position}}}</p>
      {{#if highlights.length}}<ul class="pp-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="pp-section" data-section="education">
    <h2 class="pp-heading">— 教育背景 —</h2>
    {{#each education}}
    <div class="pp-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="pp-entry-top">
        <span class="pp-bold" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="pp-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> ~ <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="pp-italic"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="pp-section" data-section="skills">
    <h2 class="pp-heading">— 专业技能 —</h2>
    <p class="pp-skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} [<span data-field="skills.{{@index}}.level">{{{level}}}</span>]{{/if}}</span>{{#unless @last}}  ·  {{/unless}}{{/each}}</p>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="pp-section" data-section="projects">
    <h2 class="pp-heading">— 项目经历 —</h2>
    {{#each projects}}
    <div class="pp-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="pp-entry-top">
        <span class="pp-bold" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="pp-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="pp-summary" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="pp-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.paper { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 24mm; font-family: "Courier New", "Courier", "Consolas", "PingFang SC", "Microsoft YaHei", monospace; font-size: 10pt; line-height: 1.7; color: #292524; background: #FEFCE8; }
.pp-header { text-align: center; margin-bottom: 18px; }
.pp-header h1 { font-size: 22pt; font-weight: 700; color: #1C1917; letter-spacing: 2px; font-family: "Courier New", monospace; }
.pp-title { font-size: 10pt; color: #78716C; margin-top: 5px; }
.pp-contacts { margin-top: 8px; display: flex; justify-content: center; gap: 14px; font-size: 9pt; color: #78716C; flex-wrap: wrap; }
.pp-rule { border: none; border-top: 1px dashed #A1A19A; margin-top: 12px; }
.pp-section { margin-bottom: 16px; }
.pp-heading { font-size: 9pt; font-weight: 400; color: #57534E; text-align: center; letter-spacing: 3px; margin-bottom: 10px; }
.pp-summary { font-size: 10pt; color: #44403C; }
.pp-entry { margin-bottom: 11px; }
.pp-entry-top { display: flex; justify-content: space-between; align-items: baseline; }
.pp-bold { font-size: 10.5pt; font-weight: 700; color: #1C1917; }
.pp-italic { font-size: 10pt; color: #57534E; font-style: italic; margin-top: 1px; }
.pp-date { font-size: 9pt; color: #A1A19A; }
.pp-list { margin-top: 5px; padding-left: 20px; }
.pp-list li { font-size: 10pt; color: #44403C; margin-bottom: 3px; }
.pp-skills { font-size: 10pt; color: #44403C; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.paper { margin: 0; padding: 20mm 22mm; background: #FEFCE8; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "paper",
          "version": "1.0.0",
          "name": "纸质感",
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
  },
  {
    slug: 'mono',
    name: '单色风格',
    category: 'minimal',
    html: `<div class="resume mono">
  <header class="mn-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="mn-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="mn-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="mn-section">
    <h2 class="mn-heading">个人简介</h2>
    <div class="mn-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="mn-section" data-section="experience">
    <h2 class="mn-heading">工作经历</h2>
    {{#each experience}}
    <div class="mn-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="mn-row">
        <span class="mn-strong" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="mn-light"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="mn-mid" data-field="experience.{{@index}}.position">{{{position}}}</p>
      {{#if highlights.length}}<ul class="mn-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="mn-section" data-section="education">
    <h2 class="mn-heading">教育背景</h2>
    {{#each education}}
    <div class="mn-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="mn-row">
        <span class="mn-strong" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="mn-light"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="mn-mid"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="mn-section" data-section="skills">
    <h2 class="mn-heading">专业技能</h2>
    <div class="mn-skills">
      {{#each skills}}<span class="mn-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="mn-light"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="mn-section" data-section="projects">
    <h2 class="mn-heading">项目经历</h2>
    {{#each projects}}
    <div class="mn-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="mn-row">
        <span class="mn-strong" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="mn-light" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="mn-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="mn-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.mono { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 22mm; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.65; color: #525252; background: #fff; }
.mn-header { margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid #D4D4D4; }
.mn-header h1 { font-size: 22pt; font-weight: 700; color: #171717; }
.mn-title { font-size: 10.5pt; color: #737373; margin-top: 3px; }
.mn-contacts { margin-top: 7px; display: flex; gap: 14px; flex-wrap: wrap; font-size: 9pt; color: #A3A3A3; }
.mn-section { margin-bottom: 14px; }
.mn-heading { font-size: 9pt; font-weight: 700; color: #404040; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
.mn-entry { margin-bottom: 10px; }
.mn-row { display: flex; justify-content: space-between; align-items: baseline; }
.mn-strong { font-size: 10.5pt; font-weight: 700; color: #262626; }
.mn-mid { font-size: 9.5pt; color: #737373; margin-top: 1px; }
.mn-light { font-size: 9pt; color: #A3A3A3; }
.mn-body { font-size: 9.5pt; color: #525252; margin-top: 4px; }
.mn-list { margin-top: 4px; padding-left: 16px; }
.mn-list li { font-size: 9.5pt; color: #525252; margin-bottom: 2px; }
.mn-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.mn-tag { font-size: 9pt; color: #525252; border: 1px solid #D4D4D4; padding: 2px 10px; border-radius: 3px; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.mono { margin: 0; padding: 20mm 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "mono",
          "version": "1.0.0",
          "name": "单色风格",
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
  },
  {
    slug: 'line',
    name: '线条艺术',
    category: 'minimal',
    html: `<div class="resume line">
  <header class="ln-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="ln-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="ln-sep"></div>
    <div class="ln-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="ln-section">
    <h2 class="ln-heading"><span>个人简介</span></h2>
    <div class="ln-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="ln-section" data-section="experience">
    <h2 class="ln-heading"><span>工作经历</span></h2>
    {{#each experience}}
    <div class="ln-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="ln-entry-head">
        <span class="ln-name" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="ln-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="ln-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="ln-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="ln-section" data-section="education">
    <h2 class="ln-heading"><span>教育背景</span></h2>
    {{#each education}}
    <div class="ln-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="ln-entry-head">
        <span class="ln-name" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="ln-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        <span class="ln-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="ln-section" data-section="skills">
    <h2 class="ln-heading"><span>专业技能</span></h2>
    <div class="ln-skills">
      {{#each skills}}<span class="ln-skill-item" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ln-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="ln-section" data-section="projects">
    <h2 class="ln-heading"><span>项目经历</span></h2>
    {{#each projects}}
    <div class="ln-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="ln-entry-head">
        <span class="ln-name" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="ln-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="ln-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="ln-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.line { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 22mm; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.65; color: #1a1a1a; background: #fff; }
.ln-header { margin-bottom: 16px; }
.ln-header h1 { font-size: 22pt; font-weight: 300; color: #111; letter-spacing: 1px; }
.ln-title { font-size: 10.5pt; color: #666; margin-top: 3px; }
.ln-sep { height: 1px; background: #111; margin: 10px 0; }
.ln-contacts { display: flex; gap: 16px; flex-wrap: wrap; font-size: 9pt; color: #777; }
.ln-section { margin-bottom: 14px; }
.ln-heading { font-size: 9pt; font-weight: 400; color: #111; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; display: flex; align-items: center; gap: 10px; }
.ln-heading span { white-space: nowrap; }
.ln-heading::after { content: ''; flex: 1; height: 1px; background: #ddd; }
.ln-entry { margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #f0f0f0; }
.ln-entry:last-child { border-bottom: none; }
.ln-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; }
.ln-name { font-size: 10.5pt; font-weight: 700; color: #111; }
.ln-pos { font-size: 9.5pt; color: #666; }
.ln-pos::before { content: '·'; margin-right: 6px; color: #ccc; }
.ln-date { font-size: 9pt; color: #999; margin-left: auto; }
.ln-body { font-size: 9.5pt; color: #444; margin-top: 4px; }
.ln-list { margin-top: 5px; padding-left: 16px; }
.ln-list li { font-size: 9.5pt; color: #444; margin-bottom: 3px; }
.ln-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.ln-skill-item { font-size: 9pt; color: #555; border-bottom: 1px solid #ccc; padding-bottom: 2px; }
.ln-lv { color: #aaa; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.line { margin: 0; padding: 20mm 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "line",
          "version": "1.0.0",
          "name": "线条艺术",
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
  },
  {
    slug: 'space',
    name: '呼吸感',
    category: 'minimal',
    html: `<div class="resume space">
  <header class="sp-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="sp-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="sp-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="sp-section">
    <h2 class="sp-heading">Summary</h2>
    <div class="sp-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="sp-section" data-section="experience">
    <h2 class="sp-heading">Experience</h2>
    {{#each experience}}
    <div class="sp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="sp-entry-row">
        <span class="sp-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="sp-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="sp-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
      {{#if highlights.length}}<ul class="sp-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="sp-section" data-section="education">
    <h2 class="sp-heading">Education</h2>
    {{#each education}}
    <div class="sp-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="sp-entry-row">
        <span class="sp-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="sp-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="sp-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="sp-section" data-section="skills">
    <h2 class="sp-heading">Skills</h2>
    <div class="sp-skills">
      {{#each skills}}<span class="sp-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sp-lv" data-field="skills.{{@index}}.level"> / {{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="sp-section" data-section="projects">
    <h2 class="sp-heading">Projects</h2>
    {{#each projects}}
    <div class="sp-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="sp-entry-row">
        <span class="sp-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="sp-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="sp-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="sp-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.space { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 26mm 26mm; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10.5pt; line-height: 2.0; color: #222; background: #fff; }
.sp-header { margin-bottom: 36px; }
.sp-header h1 { font-size: 26pt; font-weight: 300; color: #111; letter-spacing: 2px; line-height: 1.2; }
.sp-title { font-size: 11pt; color: #888; margin-top: 6px; }
.sp-contacts { margin-top: 10px; display: flex; gap: 20px; flex-wrap: wrap; font-size: 9.5pt; color: #aaa; }
.sp-section { margin-bottom: 32px; }
.sp-heading { font-size: 8pt; font-weight: 400; text-transform: uppercase; letter-spacing: 4px; color: #bbb; margin-bottom: 16px; }
.sp-entry { margin-bottom: 24px; }
.sp-entry-row { display: flex; justify-content: space-between; align-items: baseline; }
.sp-org { font-size: 11pt; font-weight: 600; color: #111; }
.sp-date { font-size: 9.5pt; color: #bbb; }
.sp-pos { font-size: 10pt; color: #666; }
.sp-body { font-size: 10pt; color: #555; margin-top: 4px; }
.sp-list { margin-top: 8px; padding-left: 18px; }
.sp-list li { font-size: 10pt; color: #555; margin-bottom: 4px; }
.sp-skills { display: flex; flex-wrap: wrap; gap: 12px 24px; }
.sp-skill { font-size: 10pt; color: #444; }
.sp-lv { color: #aaa; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.space { margin: 0; padding: 24mm 24mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "space",
          "version": "1.0.0",
          "name": "呼吸感",
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
  },
  {
    slug: 'tech',
    name: '技术专业',
    category: 'tech',
    html: `<div class="resume tech">
  <header class="tc-header">
    <div class="tc-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="tc-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="tc-contacts">
      {{#if basics.email}}<span class="tc-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="tc-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="tc-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="tc-section">
    <h2 class="tc-section-title">// SUMMARY</h2>
    <div class="tc-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="tc-section" data-section="experience">
    <h2 class="tc-section-title">// EXPERIENCE</h2>
    {{#each experience}}
    <div class="tc-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="tc-entry-head">
        <span class="tc-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="tc-pipe"> | </span>
        <span class="tc-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="tc-date tc-pull"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> ~ <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="tc-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="tc-section" data-section="education">
    <h2 class="tc-section-title">// EDUCATION</h2>
    {{#each education}}
    <div class="tc-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="tc-entry-head">
        <span class="tc-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="tc-pipe"> | </span>
        <span data-field="education.{{@index}}.area">{{{area}}}</span>
        <span class="tc-pipe"> · </span>
        <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        <span class="tc-date tc-pull"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> ~ <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="tc-section" data-section="skills">
    <h2 class="tc-section-title">// SKILLS</h2>
    <div class="tc-tags">
      {{#each skills}}<span class="tc-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="tc-tag-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="tc-section" data-section="projects">
    <h2 class="tc-section-title">// PROJECTS</h2>
    {{#each projects}}
    <div class="tc-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="tc-entry-head">
        <span class="tc-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="tc-pipe"> | </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        <span class="tc-date tc-pull"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> ~ <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if description}}<div class="tc-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="tc-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.tech {
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
.tc-header {
  background: #1C1917;
  padding: 16px 22px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.tc-header h1 {
  font-size: 18pt;
  font-weight: 700;
  color: #F5F5F4;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.tc-title {
  font-size: 9.5pt;
  color: #A8A29E;
  margin-top: 4px;
}

.tc-contacts { text-align: right; }

.tc-contact {
  display: block;
  font-size: 9pt;
  color: #A8A29E;
  margin-bottom: 2px;
  line-height: 1.4;
}

/* ── Section ── */
.tc-section {
  padding: 10px 22px;
  border-bottom: 1px solid #F0EFEE;
}

.tc-section:last-child { border-bottom: none; }

.tc-section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  margin-bottom: 7px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.tc-section-title::before {
  content: '//';
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  color: #A8A29E;
  font-size: 9pt;
  font-weight: 400;
}

/* ── Entry ── */
.tc-entry { margin-bottom: 8px; }
.tc-entry:last-child { margin-bottom: 0; }

.tc-entry-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0 4px;
  margin-bottom: 2px;
}

.tc-company {
  font-weight: 700;
  color: #1C1917;
  font-size: 10pt;
}

.tc-position {
  color: #57534E;
  font-size: 10pt;
}

.tc-pipe { color: #D6D3D1; margin: 0 2px; }

.tc-date {
  font-size: 9pt;
  color: #78716C;
}

.tc-pull { margin-left: auto; }

.tc-body {
  font-size: 9.5pt;
  color: #57534E;
  margin-top: 3px;
  line-height: 1.6;
}

.tc-list {
  padding-left: 15px;
  margin-top: 4px;
}

.tc-list li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Tags ── */
.tc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tc-tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  color: #44403C;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 9pt;
  display: flex;
  align-items: center;
  gap: 5px;
}

.tc-tag-level {
  color: #78716C;
  font-size: 8.5pt;
  border-left: 1px solid #D6D3D1;
  padding-left: 5px;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.tech { margin: 0; }
  .tc-header {
    background: #1C1917;
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
          "templateId": "tech",
          "version": "1.0.0",
          "name": "技术专业",
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
  },
  {
    slug: 'developer',
    name: '开发者风格',
    category: 'tech',
    html: `<div class="resume developer">
  <header class="dev-header">
    <div class="dev-prompt">$ whoami</div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<div class="dev-title" data-field="basics.title">// {{{basics.title}}}</div>{{/if}}
    <div class="dev-contacts">
      {{#if basics.email}}<span class="dev-contact"><span class="dev-key">email</span><span class="dev-sep">: </span><span data-field="basics.email">{{{basics.email}}}</span></span>{{/if}}
      {{#if basics.phone}}<span class="dev-contact"><span class="dev-key">phone</span><span class="dev-sep">: </span><span data-field="basics.phone">{{{basics.phone}}}</span></span>{{/if}}
      {{#if basics.location}}<span class="dev-contact"><span class="dev-key">location</span><span class="dev-sep">: </span><span data-field="basics.location">{{{basics.location}}}</span></span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="dev-section">
    <h2 class="dev-section-title"><span class="dev-hash">#</span> about</h2>
    <div class="dev-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="dev-section" data-section="experience">
    <h2 class="dev-section-title"><span class="dev-hash">#</span> experience</h2>
    {{#each experience}}
    <div class="dev-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="dev-entry-head">
        <span class="dev-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="dev-at"> @ </span>
        <span class="dev-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="dev-date">[<span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> → <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>]</span>
      </div>
      {{#if highlights.length}}<ul class="dev-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="dev-section" data-section="education">
    <h2 class="dev-section-title"><span class="dev-hash">#</span> education</h2>
    {{#each education}}
    <div class="dev-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="dev-entry-head">
        <span class="dev-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="dev-at"> / </span>
        <span data-field="education.{{@index}}.area">{{{area}}}</span>
        <span class="dev-at"> / </span>
        <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        <span class="dev-date">[<span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> → <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>]</span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="dev-section" data-section="skills">
    <h2 class="dev-section-title"><span class="dev-hash">#</span> skills</h2>
    <div class="dev-tags">
      {{#each skills}}<code class="dev-skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="dev-skill-level" data-field="skills.{{@index}}.level">:{{{level}}}</span>{{/if}}</code>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="dev-section" data-section="projects">
    <h2 class="dev-section-title"><span class="dev-hash">#</span> projects</h2>
    {{#each projects}}
    <div class="dev-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="dev-entry-head">
        <span class="dev-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="dev-at"> · </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        <span class="dev-date">[<span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> → <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span>]</span>
      </div>
      {{#if description}}<div class="dev-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="dev-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.developer {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 20px 28px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace, 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
  font-size: 9.5pt;
  line-height: 1.65;
  color: #D4D4D4;
  background: #0A0A0A;
}

/* ── Header ── */
.dev-header {
  border-bottom: 1px solid #1E1E1E;
  padding-bottom: 14px;
  margin-bottom: 14px;
}

.dev-prompt {
  font-size: 8.5pt;
  color: #4EC9B0;
  margin-bottom: 6px;
}

.dev-header h1 {
  font-size: 20pt;
  font-weight: 700;
  color: #D4D4D4;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.dev-title {
  font-size: 9.5pt;
  color: #6A9955;
  margin-top: 4px;
}

.dev-contacts {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 20px;
}

.dev-contact { font-size: 9pt; color: #9CDCFE; }
.dev-key { color: #9CDCFE; }
.dev-sep { color: #808080; margin: 0 2px; }

/* ── Section ── */
.dev-section { margin-bottom: 12px; }

.dev-section-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: #4EC9B0;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dev-hash {
  color: #4EC9B0;
  font-weight: 900;
  font-size: 12pt;
}

/* ── Entry ── */
.dev-entry {
  margin-bottom: 8px;
  padding-left: 4px;
  border-left: 2px solid #252525;
}

.dev-entry:last-child { margin-bottom: 0; }

.dev-entry-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0 4px;
  margin-bottom: 3px;
}

.dev-company {
  font-weight: 700;
  color: #4FC1FF;
}

.dev-pos { color: #CE9178; }
.dev-at { color: #808080; }

.dev-date {
  font-size: 8.5pt;
  color: #6A9955;
  margin-left: auto;
}

.dev-body {
  font-size: 9pt;
  color: #9D9D9D;
  margin-top: 3px;
  line-height: 1.6;
}

.dev-list {
  padding-left: 0;
  margin-top: 4px;
  list-style-type: none;
}

.dev-list li {
  font-size: 9pt;
  color: #9D9D9D;
  margin-bottom: 2px;
  line-height: 1.5;
}

.dev-list li::before {
  content: '> ';
  color: #4EC9B0;
}

/* ── Tags ── */
.dev-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.dev-skill-tag {
  background: #252525;
  border: 1px solid #1E1E1E;
  color: #D4D4D4;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 8.5pt;
}

.dev-skill-level {
  color: #4EC9B0;
  margin-left: 4px;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.developer {
    margin: 0;
    background: #0A0A0A;
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
          "templateId": "developer",
          "version": "1.0.0",
          "name": "开发者风格",
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
  },
  {
    slug: 'github',
    name: 'GitHub风格',
    category: 'tech',
    html: `<div class="resume github">
  <header class="gh-header">
    <div class="gh-avatar-wrap">
      {{#if basics.avatar}}<img class="gh-avatar" src="{{{basics.avatar}}}" alt="" />{{else}}<div class="gh-avatar-placeholder"></div>{{/if}}
    </div>
    <div class="gh-header-info">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="gh-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="gh-contacts">
        {{#if basics.email}}<span class="gh-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="gh-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="gh-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="gh-section">
    <h2 class="gh-section-title">About</h2>
    <div class="gh-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="gh-section" data-section="experience">
    <h2 class="gh-section-title">Experience</h2>
    {{#each experience}}
    <div class="gh-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="gh-entry-head">
        <span class="gh-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="gh-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="gh-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="gh-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="gh-section" data-section="projects">
    <h2 class="gh-section-title">Projects</h2>
    {{#each projects}}
    <div class="gh-repo-card" data-entry="projects" data-entry-index="{{@index}}">
      <div class="gh-repo-head">
        <span class="gh-repo-icon">⬡</span>
        <span class="gh-repo-name" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="gh-repo-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="gh-repo-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="gh-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="gh-section" data-section="education">
    <h2 class="gh-section-title">Education</h2>
    {{#each education}}
    <div class="gh-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="gh-entry-head">
        <span class="gh-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="gh-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        <span class="gh-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="gh-section" data-section="skills">
    <h2 class="gh-section-title">Skills</h2>
    <div class="gh-skills">
      {{#each skills}}<span class="gh-skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="gh-skill-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.github { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 16mm 20mm; font-family: -apple-system, "Segoe UI", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 9.5pt; line-height: 1.6; color: #24292F; background: #fff; border: 1px solid #D0D7DE; }
.gh-header { display: flex; align-items: flex-start; gap: 14px; padding-bottom: 14px; border-bottom: 1px solid #D0D7DE; margin-bottom: 16px; }
.gh-avatar { width: 64px; height: 64px; border-radius: 50%; border: 1px solid #D0D7DE; }
.gh-avatar-placeholder { width: 64px; height: 64px; border-radius: 50%; background: #218234; flex-shrink: 0; }
.gh-header-info { flex: 1; }
.gh-header-info h1 { font-size: 18pt; font-weight: 600; color: #24292F; }
.gh-title { font-size: 10pt; color: #57606A; margin-top: 3px; }
.gh-contacts { margin-top: 6px; display: flex; gap: 14px; flex-wrap: wrap; }
.gh-contact { font-size: 8.5pt; color: #57606A; }
.gh-section { margin-bottom: 16px; }
.gh-section-title { font-size: 9pt; font-weight: 700; color: #166534; border-bottom: 1px solid #D0D7DE; padding-bottom: 5px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
.gh-entry { margin-bottom: 10px; }
.gh-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; }
.gh-org { font-size: 10pt; font-weight: 700; color: #24292F; }
.gh-pos { font-size: 9pt; color: #57606A; }
.gh-pos::before { content: '/'; margin-right: 6px; color: #D0D7DE; }
.gh-date { font-size: 8.5pt; color: #57606A; margin-left: auto; }
.gh-list { margin-top: 5px; padding-left: 18px; }
.gh-list li { font-size: 9pt; color: #24292F; margin-bottom: 3px; }
.gh-repo-card { border: 1px solid #D0D7DE; border-radius: 6px; padding: 10px 14px; margin-bottom: 10px; }
.gh-repo-head { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
.gh-repo-icon { color: #166534; font-size: 12pt; }
.gh-repo-name { font-size: 10pt; font-weight: 600; color: #0969DA; }
.gh-repo-role { font-size: 9pt; color: #57606A; margin-left: auto; background: #F6F8FA; border: 1px solid #D0D7DE; padding: 1px 8px; border-radius: 20px; }
.gh-repo-desc { font-size: 9pt; color: #57606A; }
.gh-body { font-size: 9.5pt; color: #24292F; }
.gh-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.gh-skill-tag { font-size: 8.5pt; color: #166534; background: #DCFCE7; border: 1px solid #BBF7D0; padding: 2px 10px; border-radius: 20px; }
.gh-skill-lv { color: #15803D; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.github { margin: 0; border: none; padding: 14mm 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "github",
          "version": "1.0.0",
          "name": "GitHub风格",
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
  },
  {
    slug: 'terminal',
    name: '终端风格',
    category: 'tech',
    html: `<div class="resume terminal">
  <div class="tm-title-bar">
    <span class="tm-dot tm-red"></span>
    <span class="tm-dot tm-yellow"></span>
    <span class="tm-dot tm-green"></span>
    <span class="tm-bar-title">resume — bash</span>
  </div>
  <div class="tm-body">
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">cat profile.txt</span></div>
    <div class="tm-block">
      <div class="tm-label"># NAME</div>
      <h1 class="tm-name" data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="tm-title-text" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="tm-contacts">
        {{#if basics.email}}<span class="tm-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="tm-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="tm-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    {{#if basics.summary}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">cat summary.txt</span></div>
    <div class="tm-block">
      <div class="tm-label"># SUMMARY</div>
      <div class="tm-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </div>
    {{/if}}
    {{#if experience.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">ls -la experience/</span></div>
    <div class="tm-block" data-section="experience">
      <div class="tm-label"># EXPERIENCE</div>
      {{#each experience}}
      <div class="tm-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="tm-entry-row">
          <span class="tm-green-text" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="tm-separator"> | </span>
          <span class="tm-cyan-text" data-field="experience.{{@index}}.position">{{{position}}}</span>
          <span class="tm-gray-text"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> ~ <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="tm-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}"><span class="tm-bullet">▸</span> {{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    {{#if education.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">cat education.log</span></div>
    <div class="tm-block" data-section="education">
      <div class="tm-label"># EDUCATION</div>
      {{#each education}}
      <div class="tm-entry" data-entry="education" data-entry-index="{{@index}}">
        <span class="tm-green-text" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="tm-separator"> | </span>
        <span class="tm-text" data-field="education.{{@index}}.area">{{{area}}}</span>
        <span class="tm-separator"> · </span>
        <span class="tm-text" data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        <span class="tm-gray-text"> [<span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>-<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>]</span>
      </div>
      {{/each}}
    </div>
    {{/if}}
    {{#if skills.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">./list-skills.sh</span></div>
    <div class="tm-block" data-section="skills">
      <div class="tm-label"># SKILLS</div>
      <div class="tm-tags">{{#each skills}}<span class="tm-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="tm-tag-lv" data-field="skills.{{@index}}.level">:{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </div>
    {{/if}}
    {{#if projects.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">git log --oneline projects/</span></div>
    <div class="tm-block" data-section="projects">
      <div class="tm-label"># PROJECTS</div>
      {{#each projects}}
      <div class="tm-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="tm-entry-row">
          <span class="tm-green-text" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="tm-separator"> | </span><span class="tm-cyan-text" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="tm-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="tm-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}"><span class="tm-bullet">▸</span> {{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    <div class="tm-cursor">█</div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.terminal { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Menlo", "Monaco", "Courier New", "Consolas", "PingFang SC", "Microsoft YaHei", monospace; font-size: 9pt; line-height: 1.6; color: #4ADE80; background: #0A0A0A; }
.tm-title-bar { background: #1C1C1C; border-bottom: 1px solid #2D2D2D; padding: 8px 14px; display: flex; align-items: center; gap: 6px; }
.tm-dot { width: 12px; height: 12px; border-radius: 50%; }
.tm-red { background: #FF5F56; }
.tm-yellow { background: #FEBC2E; }
.tm-green { background: #28C840; }
.tm-bar-title { font-size: 9pt; color: #888; margin-left: 6px; }
.tm-body { padding: 16px 20mm 20mm; }
.tm-prompt { color: #888; margin-bottom: 5px; font-size: 9pt; }
.tm-user { color: #4ADE80; }
.tm-at { color: #888; }
.tm-path { color: #60A5FA; }
.tm-dollar { color: #E2E8F0; margin: 0 4px; }
.tm-cmd { color: #FDE68A; }
.tm-block { margin-bottom: 14px; padding-left: 0; }
.tm-label { font-size: 8pt; color: #6B7280; margin-bottom: 6px; }
.tm-name { font-size: 16pt; font-weight: 700; color: #4ADE80; letter-spacing: 1px; }
.tm-title-text { font-size: 9.5pt; color: #60A5FA; margin-top: 3px; }
.tm-contacts { margin-top: 6px; display: flex; gap: 14px; flex-wrap: wrap; }
.tm-contact { font-size: 8.5pt; color: #A1A1AA; }
.tm-text { font-size: 9pt; color: #D4D4D8; }
.tm-entry { margin-bottom: 10px; }
.tm-entry-row { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0; }
.tm-green-text { color: #4ADE80; font-weight: 700; }
.tm-cyan-text { color: #67E8F9; }
.tm-gray-text { color: #6B7280; margin-left: 8px; font-size: 8.5pt; }
.tm-separator { color: #3F3F46; margin: 0 4px; }
.tm-list { list-style: none; padding-left: 12px; margin-top: 4px; }
.tm-list li { font-size: 9pt; color: #D4D4D8; margin-bottom: 3px; }
.tm-bullet { color: #4ADE80; margin-right: 4px; }
.tm-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tm-tag { font-size: 8.5pt; color: #0A0A0A; background: #4ADE80; padding: 1px 8px; border-radius: 2px; }
.tm-tag-lv { color: #065F46; }
.tm-cursor { color: #4ADE80; animation: blink 1s step-end infinite; font-size: 11pt; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.terminal { margin: 0; print-color-adjust: exact; -webkit-print-color-adjust: exact; } .tm-body { padding: 14px 18mm 18mm; } .tm-cursor { display: none; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "terminal",
          "version": "1.0.0",
          "name": "终端风格",
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
  },
  {
    slug: 'vscode',
    name: 'VS Code风格',
    category: 'tech',
    html: `<div class="resume vscode">
  <div class="vs-activity-bar">
    <div class="vs-ab-icon">⊞</div>
    <div class="vs-ab-icon">⊙</div>
    <div class="vs-ab-icon">⋯</div>
  </div>
  <div class="vs-explorer">
    <div class="vs-explorer-title">EXPLORER</div>
    <div class="vs-file active">📄 resume.json</div>
    <div class="vs-file">📁 experience</div>
    <div class="vs-file">📁 education</div>
    <div class="vs-file">📁 projects</div>
    <div class="vs-file">📋 skills.md</div>
  </div>
  <div class="vs-main">
    <div class="vs-tab-bar">
      <div class="vs-tab active">resume.json</div>
    </div>
    <div class="vs-editor">
      <div class="vs-header-block">
        <h1 class="vs-name" data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="vs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
        <div class="vs-contacts">
          {{#if basics.email}}<span data-field="basics.email"><span class="vs-key">email: </span><span class="vs-string">{{{basics.email}}}</span></span>{{/if}}
          {{#if basics.phone}}<span data-field="basics.phone"><span class="vs-key">phone: </span><span class="vs-string">{{{basics.phone}}}</span></span>{{/if}}
          {{#if basics.location}}<span data-field="basics.location"><span class="vs-key">location: </span><span class="vs-string">{{{basics.location}}}</span></span>{{/if}}
        </div>
      </div>
      {{#if basics.summary}}
      <div class="vs-section">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">summary</span> = {</div>
        <div class="vs-body" data-field="basics.summary">{{{basics.summary}}}</div>
        <div class="vs-close">}</div>
      </div>
      {{/if}}
      {{#if experience.length}}
      <div class="vs-section" data-section="experience">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">experience</span> = [</div>
        {{#each experience}}
        <div class="vs-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="vs-entry-head">
            <span class="vs-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="vs-sep"> · </span>
            <span class="vs-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
            <span class="vs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul class="vs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
        <div class="vs-close">]</div>
      </div>
      {{/if}}
      {{#if education.length}}
      <div class="vs-section" data-section="education">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">education</span> = [</div>
        {{#each education}}
        <div class="vs-entry" data-entry="education" data-entry-index="{{@index}}">
          <span class="vs-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="vs-sep"> · </span>
          <span class="vs-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="vs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
        <div class="vs-close">]</div>
      </div>
      {{/if}}
      {{#if skills.length}}
      <div class="vs-section" data-section="skills">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">skills</span> = [</div>
        <div class="vs-tags">{{#each skills}}<span class="vs-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="vs-tag-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}</div>
        <div class="vs-close">]</div>
      </div>
      {{/if}}
      {{#if projects.length}}
      <div class="vs-section" data-section="projects">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">projects</span> = [</div>
        {{#each projects}}
        <div class="vs-entry" data-entry="projects" data-entry-index="{{@index}}">
          <span class="vs-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="vs-sep"> · </span><span class="vs-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          {{#if description}}<div class="vs-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="vs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
        <div class="vs-close">]</div>
      </div>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.vscode { max-width: 210mm; min-height: 297mm; margin: 0 auto; display: flex; font-family: "Menlo", "Monaco", "Consolas", "PingFang SC", "Microsoft YaHei", monospace; font-size: 9pt; line-height: 1.6; color: #D4D4D4; background: #1E1E1E; }
.vs-activity-bar { width: 44px; background: #333333; display: flex; flex-direction: column; align-items: center; padding: 8px 0; gap: 8px; flex-shrink: 0; }
.vs-ab-icon { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; color: #858585; font-size: 14pt; cursor: default; }
.vs-explorer { width: 160px; background: #252526; border-right: 1px solid #1E1E1E; padding: 0; flex-shrink: 0; }
.vs-explorer-title { font-size: 7.5pt; font-weight: 700; color: #CCCCCC; padding: 8px 12px 4px; letter-spacing: 1.5px; }
.vs-file { font-size: 8.5pt; color: #CCCCCC; padding: 3px 12px; cursor: default; }
.vs-file.active { background: #094771; color: #fff; }
.vs-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.vs-tab-bar { background: #2D2D2D; border-bottom: 1px solid #1E1E1E; }
.vs-tab { display: inline-block; padding: 6px 16px; font-size: 8.5pt; color: #CCCCCC; border-right: 1px solid #1E1E1E; }
.vs-tab.active { background: #1E1E1E; color: #fff; border-top: 1px solid #569CD6; }
.vs-editor { flex: 1; padding: 14px 16px 20px; }
.vs-header-block { border-left: 3px solid #569CD6; padding-left: 10px; margin-bottom: 16px; }
.vs-name { font-size: 16pt; font-weight: 700; color: #D4D4D4; }
.vs-title { font-size: 9.5pt; color: #9CDCFE; margin-top: 3px; }
.vs-contacts { margin-top: 6px; display: flex; flex-direction: column; gap: 2px; }
.vs-key { color: #9CDCFE; }
.vs-string { color: #CE9178; }
.vs-section { margin-bottom: 14px; }
.vs-section-title { font-size: 9pt; color: #D4D4D4; margin-bottom: 8px; }
.vs-keyword { color: #569CD6; }
.vs-fn { color: #DCDCAA; }
.vs-close { font-size: 9pt; color: #D4D4D4; margin-top: 4px; }
.vs-entry { margin-bottom: 10px; padding-left: 14px; border-left: 1px solid #3E3E42; }
.vs-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 2px; }
.vs-company { color: #4EC9B0; font-weight: 700; }
.vs-sep { color: #569CD6; }
.vs-pos { color: #C586C0; }
.vs-date { color: #6A9955; margin-left: auto; font-size: 8.5pt; }
.vs-body { font-size: 9pt; color: #9CDCFE; margin-top: 4px; }
.vs-list { padding-left: 16px; margin-top: 4px; }
.vs-list li { font-size: 8.5pt; color: #D4D4D4; margin-bottom: 2px; }
.vs-tags { display: flex; flex-wrap: wrap; gap: 5px; padding-left: 14px; margin-bottom: 4px; }
.vs-tag { font-size: 8.5pt; color: #1E1E1E; background: #4EC9B0; padding: 1px 7px; border-radius: 2px; }
.vs-tag-lv { color: #0A3D3D; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.vscode { margin: 0; print-color-adjust: exact; -webkit-print-color-adjust: exact; } .vs-activity-bar { display: none; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "vscode",
          "version": "1.0.0",
          "name": "VS Code风格",
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
  },
  {
    slug: 'data',
    name: '数据科学',
    category: 'tech',
    html: `<div class="resume data">
  <header class="dt-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="dt-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="dt-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="dt-section">
    <h2 class="dt-heading">Summary</h2>
    <div class="dt-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="dt-section" data-section="skills">
    <h2 class="dt-heading">Technical Skills</h2>
    <table class="dt-table">
      <tbody>
        {{#each skills}}
        <tr class="dt-tr" data-entry="skills" data-entry-index="{{@index}}">
          <td class="dt-td-name"><span data-field="skills.{{@index}}.name">{{{name}}}</span></td>
          <td class="dt-td-level">{{#if level}}<span class="dt-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</td>
        </tr>
        {{/each}}
      </tbody>
    </table>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="dt-section" data-section="experience">
    <h2 class="dt-heading">Experience</h2>
    {{#each experience}}
    <div class="dt-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="dt-entry-head">
        <span class="dt-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="dt-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="dt-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="dt-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="dt-section" data-section="projects">
    <h2 class="dt-heading">Projects</h2>
    {{#each projects}}
    <div class="dt-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="dt-entry-head">
        <span class="dt-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="dt-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="dt-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="dt-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="dt-section" data-section="education">
    <h2 class="dt-heading">Education</h2>
    {{#each education}}
    <div class="dt-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="dt-entry-head">
        <span class="dt-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="dt-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        <span class="dt-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.data { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 16mm 20mm; font-family: "Menlo", "Consolas", "Monaco", "Courier New", "PingFang SC", "Microsoft YaHei", monospace; font-size: 9.5pt; line-height: 1.6; color: #E2E8F0; background: #0F172A; }
.dt-header { border-bottom: 1px solid #1E40AF; padding-bottom: 12px; margin-bottom: 16px; }
.dt-header h1 { font-size: 20pt; font-weight: 700; color: #F1F5F9; letter-spacing: 1px; }
.dt-title { font-size: 10pt; color: #60A5FA; margin-top: 3px; }
.dt-contacts { margin-top: 7px; display: flex; gap: 14px; flex-wrap: wrap; font-size: 8.5pt; color: #94A3B8; }
.dt-section { margin-bottom: 16px; }
.dt-heading { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #60A5FA; border-bottom: 1px solid #1E3A5F; padding-bottom: 4px; margin-bottom: 10px; }
.dt-table { width: 100%; border-collapse: collapse; }
.dt-tr { border-bottom: 1px solid #1E293B; }
.dt-tr:last-child { border-bottom: none; }
.dt-td-name { padding: 4px 8px 4px 0; font-size: 9pt; color: #93C5FD; width: 60%; }
.dt-td-level { padding: 4px 0; }
.dt-level { font-size: 8.5pt; color: #6EE7B7; background: #064E3B; padding: 1px 8px; border-radius: 2px; }
.dt-entry { margin-bottom: 10px; }
.dt-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; }
.dt-org { font-size: 10pt; font-weight: 700; color: #F1F5F9; }
.dt-pos { font-size: 9pt; color: #94A3B8; }
.dt-date { font-size: 8.5pt; color: #475569; margin-left: auto; }
.dt-body { font-size: 9pt; color: #CBD5E1; margin-top: 4px; }
.dt-list { margin-top: 5px; padding-left: 16px; }
.dt-list li { font-size: 9pt; color: #CBD5E1; margin-bottom: 3px; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.data { margin: 0; padding: 14mm 18mm; print-color-adjust: exact; -webkit-print-color-adjust: exact; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "data",
          "version": "1.0.0",
          "name": "数据科学",
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
  },
  {
    slug: 'devops',
    name: 'DevOps工程师',
    category: 'tech',
    html: `<div class="resume devops">
  <header class="dv-header">
    <div class="dv-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="dv-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="dv-contacts">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="dv-section">
    <h2 class="dv-section-title">OVERVIEW</h2>
    <div class="dv-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="dv-section" data-section="experience">
    <h2 class="dv-section-title">PIPELINE · EXPERIENCE</h2>
    {{#each experience}}
    <div class="dv-pipeline-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="dv-pipe-left">
        <div class="dv-pipe-dot"></div>
        <div class="dv-pipe-line"></div>
      </div>
      <div class="dv-pipe-content">
        <div class="dv-pipe-head">
          <span class="dv-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="dv-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          <span class="dv-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="dv-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="dv-section" data-section="projects">
    <h2 class="dv-section-title">DEPLOYMENTS · PROJECTS</h2>
    {{#each projects}}
    <div class="dv-pipeline-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="dv-pipe-left">
        <div class="dv-pipe-dot dv-dot-green"></div>
        <div class="dv-pipe-line"></div>
      </div>
      <div class="dv-pipe-content">
        <div class="dv-pipe-head">
          <span class="dv-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="dv-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="dv-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="dv-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  <div class="dv-two-col">
    <div>
      {{#if education.length}}
      <section class="dv-section" data-section="education">
        <h2 class="dv-section-title">EDUCATION</h2>
        {{#each education}}
        <div class="dv-edu" data-entry="education" data-entry-index="{{@index}}">
          <span class="dv-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="dv-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="dv-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div>
      {{#if skills.length}}
      <section class="dv-section" data-section="skills">
        <h2 class="dv-section-title">STACK · SKILLS</h2>
        <div class="dv-tags">
          {{#each skills}}<span class="dv-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="dv-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.devops { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 9.5pt; line-height: 1.6; color: #E2E8F0; background: #172554; }
.dv-header { background: #1E3A8A; padding: 14mm 20mm 12mm; border-bottom: 2px solid #3B82F6; }
.dv-header-inner h1 { font-size: 20pt; font-weight: 700; color: #F1F5F9; letter-spacing: 1px; }
.dv-title { font-size: 10pt; color: #93C5FD; margin-top: 4px; }
.dv-contacts { margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; font-size: 8.5pt; color: #BFDBFE; }
.dv-section { margin: 14px 20mm 0; }
.dv-section-title { font-size: 7.5pt; font-weight: 700; letter-spacing: 2.5px; color: #3B82F6; border-bottom: 1px solid #1E3A8A; padding-bottom: 4px; margin-bottom: 10px; }
.dv-pipeline-entry { display: flex; gap: 12px; margin-bottom: 10px; }
.dv-pipe-left { display: flex; flex-direction: column; align-items: center; width: 16px; flex-shrink: 0; }
.dv-pipe-dot { width: 10px; height: 10px; border-radius: 50%; background: #3B82F6; border: 2px solid #172554; flex-shrink: 0; }
.dv-dot-green { background: #4ADE80; }
.dv-pipe-line { flex: 1; width: 2px; background: #1E3A8A; margin-top: 2px; }
.dv-pipe-content { flex: 1; }
.dv-pipe-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; margin-bottom: 4px; }
.dv-company { font-size: 10pt; font-weight: 700; color: #F1F5F9; }
.dv-pos { font-size: 9pt; color: #93C5FD; }
.dv-date { font-size: 8.5pt; color: #475569; margin-left: auto; }
.dv-body { font-size: 9pt; color: #CBD5E1; margin-top: 2px; }
.dv-list { padding-left: 14px; margin-top: 4px; }
.dv-list li { font-size: 9pt; color: #CBD5E1; margin-bottom: 3px; }
.dv-two-col { display: grid; grid-template-columns: 1fr 1fr; padding: 0; }
.dv-edu { display: flex; flex-direction: column; gap: 1px; margin-bottom: 8px; }
.dv-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.dv-tag { font-size: 8.5pt; color: #172554; background: #3B82F6; padding: 2px 8px; border-radius: 3px; }
.dv-lv { color: #1E3A8A; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.devops { margin: 0; } .dv-header { padding: 12mm 18mm 10mm; } .dv-section { margin: 12px 18mm 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "devops",
          "version": "1.0.0",
          "name": "DevOps工程师",
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
  },
  {
    slug: 'mobile',
    name: '移动开发',
    category: 'tech',
    html: `<div class="resume mobile">
  <header class="mb-header">
    <div class="mb-avatar-area">
      {{#if basics.avatar}}<img class="mb-avatar" src="{{{basics.avatar}}}" alt="" />{{else}}<div class="mb-avatar-ph"></div>{{/if}}
    </div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="mb-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="mb-contacts">
      {{#if basics.email}}<span class="mb-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="mb-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="mb-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="mb-content">
    {{#if basics.summary}}
    <div class="mb-card">
      <h2 class="mb-card-title">简介</h2>
      <div class="mb-body" data-field="basics.summary">{{{basics.summary}}}</div>
    </div>
    {{/if}}
    {{#if experience.length}}
    <div class="mb-card" data-section="experience">
      <h2 class="mb-card-title">工作经历</h2>
      {{#each experience}}
      <div class="mb-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="mb-entry-head">
          <div>
            <p class="mb-org" data-field="experience.{{@index}}.company">{{{company}}}</p>
            <p class="mb-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
          </div>
          <span class="mb-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="mb-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    {{#if projects.length}}
    <div class="mb-card" data-section="projects">
      <h2 class="mb-card-title">项目经历</h2>
      {{#each projects}}
      <div class="mb-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="mb-entry-head">
          <p class="mb-org" data-field="projects.{{@index}}.name">{{{name}}}</p>
          {{#if role}}<span class="mb-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="mb-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="mb-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    <div class="mb-two">
      {{#if education.length}}
      <div class="mb-card" data-section="education">
        <h2 class="mb-card-title">教育背景</h2>
        {{#each education}}
        <div class="mb-entry" data-entry="education" data-entry-index="{{@index}}">
          <p class="mb-org" data-field="education.{{@index}}.institution">{{{institution}}}</p>
          <p class="mb-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
          <p class="mb-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></p>
        </div>
        {{/each}}
      </div>
      {{/if}}
      {{#if skills.length}}
      <div class="mb-card" data-section="skills">
        <h2 class="mb-card-title">专业技能</h2>
        <div class="mb-tags">
          {{#each skills}}<span class="mb-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="mb-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </div>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.mobile { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: -apple-system, "SF Pro Text", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1C1C1E; background: #F2F2F7; }
.mb-header { background: #fff; text-align: center; padding: 16mm 20mm 14px; border-bottom: 1px solid #C6C6C8; }
.mb-avatar { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #E5E5EA; margin-bottom: 10px; }
.mb-avatar-ph { width: 72px; height: 72px; border-radius: 50%; background: #8E8E93; margin: 0 auto 10px; }
.mb-header h1 { font-size: 20pt; font-weight: 700; color: #1C1C1E; letter-spacing: -0.5px; }
.mb-title { font-size: 10.5pt; color: #3C3C43; opacity: 0.6; margin-top: 3px; }
.mb-contacts { margin-top: 8px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.mb-contact { font-size: 9pt; color: #007AFF; }
.mb-content { padding: 12px 14px; }
.mb-card { background: #fff; border-radius: 12px; padding: 14px 16px; margin-bottom: 10px; }
.mb-card-title { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #8E8E93; margin-bottom: 10px; }
.mb-entry { padding-bottom: 10px; border-bottom: 1px solid #F2F2F7; margin-bottom: 10px; }
.mb-entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.mb-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.mb-org { font-size: 10.5pt; font-weight: 600; color: #1C1C1E; }
.mb-pos { font-size: 9.5pt; color: #3C3C43; opacity: 0.65; }
.mb-date { font-size: 8.5pt; color: #8E8E93; white-space: nowrap; }
.mb-body { font-size: 9.5pt; color: #3C3C43; margin-top: 4px; }
.mb-list { margin-top: 5px; padding-left: 16px; }
.mb-list li { font-size: 9.5pt; color: #3C3C43; margin-bottom: 3px; }
.mb-two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.mb-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.mb-tag { font-size: 9pt; color: #007AFF; background: #EBF5FF; padding: 3px 10px; border-radius: 8px; }
.mb-lv { color: #0055CC; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.mobile { margin: 0; background: #fff; } .mb-card { box-shadow: none; border: 1px solid #E5E5EA; } .mb-header { padding: 14mm 18mm 12px; } .mb-content { padding: 10px 12px; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "mobile",
          "version": "1.0.0",
          "name": "移动开发",
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
  },
  {
    slug: 'fullstack',
    name: '全栈工程师',
    category: 'tech',
    html: `<div class="resume fullstack">
  <header class="fs-header">
    <div class="fs-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="fs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="fs-contacts">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="fs-body">
    {{#if basics.summary}}
    <section class="fs-section">
      <h2 class="fs-section-title">Summary</h2>
      <div class="fs-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="fs-section" data-section="experience">
      <h2 class="fs-section-title">Experience</h2>
      {{#each experience}}
      <div class="fs-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="fs-entry-head">
          <div class="fs-entry-main">
            <span class="fs-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="fs-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="fs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="fs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="fs-section" data-section="projects">
      <h2 class="fs-section-title">Projects</h2>
      {{#each projects}}
      <div class="fs-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="fs-entry-head">
          <div class="fs-entry-main">
            <span class="fs-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="fs-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
        </div>
        {{#if description}}<div class="fs-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="fs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    <div class="fs-bottom">
      {{#if education.length}}
      <section class="fs-section" data-section="education">
        <h2 class="fs-section-title">Education</h2>
        {{#each education}}
        <div class="fs-entry" data-entry="education" data-entry-index="{{@index}}">
          <div class="fs-entry-head">
            <span class="fs-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
            <span class="fs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="fs-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="fs-section" data-section="skills">
        <h2 class="fs-section-title">Skills</h2>
        <div class="fs-skills">
          {{#each skills}}<span class="fs-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="fs-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.fullstack { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Inter", "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #1E293B; background: #fff; }
.fs-header { background: #1E293B; color: #fff; padding: 16mm 22mm 14mm; }
.fs-header-inner h1 { font-size: 22pt; font-weight: 800; color: #F1F5F9; letter-spacing: -0.5px; }
.fs-title { font-size: 10.5pt; color: #64748B; margin-top: 4px; }
.fs-contacts { margin-top: 10px; display: flex; gap: 16px; flex-wrap: wrap; }
.fs-contacts span { font-size: 9pt; color: #94A3B8; }
.fs-body { padding: 0 22mm; }
.fs-section { margin-top: 16px; }
.fs-section-title { font-size: 8.5pt; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #334155; border-bottom: 1px solid #E2E8F0; padding-bottom: 4px; margin-bottom: 10px; }
.fs-entry { margin-bottom: 12px; }
.fs-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.fs-entry-main { display: flex; flex-direction: column; }
.fs-company { font-size: 10.5pt; font-weight: 700; color: #0F172A; }
.fs-pos { font-size: 9.5pt; color: #64748B; }
.fs-date { font-size: 9pt; color: #94A3B8; white-space: nowrap; }
.fs-text { font-size: 9.5pt; color: #475569; margin-top: 4px; }
.fs-list { margin-top: 5px; padding-left: 16px; }
.fs-list li { font-size: 9.5pt; color: #475569; margin-bottom: 3px; }
.fs-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
.fs-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.fs-skill { font-size: 9pt; color: #334155; background: #F1F5F9; border: 1px solid #E2E8F0; padding: 2px 10px; border-radius: 4px; }
.fs-lv { color: #64748B; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.fullstack { margin: 0; } .fs-header { padding: 14mm 20mm 12mm; } .fs-body { padding: 0 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "fullstack",
          "version": "1.0.0",
          "name": "全栈工程师",
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
  },
  {
    slug: 'ai',
    name: 'AI工程师',
    category: 'tech',
    html: `<div class="resume ai">
  <header class="ai-header">
    <div class="ai-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ai-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="ai-contacts">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="ai-body">
    {{#if basics.summary}}
    <section class="ai-section">
      <h2 class="ai-section-title">Overview</h2>
      <div class="ai-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="ai-section" data-section="experience">
      <h2 class="ai-section-title">Experience</h2>
      {{#each experience}}
      <div class="ai-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="ai-entry-head">
          <div>
            <span class="ai-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="ai-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="ai-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="ai-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="ai-section" data-section="projects">
      <h2 class="ai-section-title">Research & Projects</h2>
      {{#each projects}}
      <div class="ai-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="ai-entry-head">
          <span class="ai-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="ai-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="ai-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ai-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    <div class="ai-bottom">
      {{#if education.length}}
      <section class="ai-section" data-section="education">
        <h2 class="ai-section-title">Education</h2>
        {{#each education}}
        <div class="ai-edu" data-entry="education" data-entry-index="{{@index}}">
          <span class="ai-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="ai-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="ai-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="ai-section" data-section="skills">
        <h2 class="ai-section-title">Technical Stack</h2>
        <div class="ai-skills">
          {{#each skills}}<span class="ai-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ai-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.ai { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #E0E7FF; background: #1E1B4B; }
.ai-header { background: linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%); padding: 16mm 22mm 14mm; }
.ai-header-inner h1 { font-size: 22pt; font-weight: 800; color: #fff; letter-spacing: -0.5px; }
.ai-title { font-size: 10.5pt; color: rgba(255,255,255,0.75); margin-top: 4px; }
.ai-contacts { margin-top: 10px; display: flex; gap: 16px; flex-wrap: wrap; }
.ai-contacts span { font-size: 9pt; color: rgba(255,255,255,0.6); }
.ai-body { padding: 0 22mm 20mm; }
.ai-section { margin-top: 16px; }
.ai-section-title { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #818CF8; border-bottom: 1px solid #312E81; padding-bottom: 4px; margin-bottom: 10px; }
.ai-entry { margin-bottom: 12px; }
.ai-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
.ai-entry-head > div { display: flex; flex-direction: column; }
.ai-company { font-size: 10.5pt; font-weight: 700; color: #E0E7FF; }
.ai-pos { font-size: 9.5pt; color: #A5B4FC; }
.ai-date { font-size: 9pt; color: #6366F1; white-space: nowrap; }
.ai-text { font-size: 9.5pt; color: #C7D2FE; margin-top: 4px; }
.ai-list { margin-top: 5px; padding-left: 16px; }
.ai-list li { font-size: 9.5pt; color: #C7D2FE; margin-bottom: 3px; }
.ai-list li::marker { color: #818CF8; }
.ai-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
.ai-edu { display: flex; flex-direction: column; gap: 2px; margin-bottom: 8px; }
.ai-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.ai-skill { font-size: 9pt; color: #1E1B4B; background: #818CF8; padding: 2px 10px; border-radius: 4px; font-weight: 500; }
.ai-lv { color: #312E81; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.ai { margin: 0; } .ai-header { padding: 14mm 20mm 12mm; } .ai-body { padding: 0 20mm 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "ai",
          "version": "1.0.0",
          "name": "AI工程师",
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
  },
  {
    slug: 'campus-general',
    name: '通用校招',
    category: 'campus',
    html: `<div class="resume campus-general">
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
  {{#if skills.length}}
  <section class="section" data-section="skills"><h2 class="section-title">专业技能</h2><div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>
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

.resume.campus-general {
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
.resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #1C1917;
}

.resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 2px;
  line-height: 1.2;
}

.resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 5px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.contact-item { margin: 0 6px; }

.contact-item + .contact-item::before {
  content: "·";
  margin-right: 6px;
  color: #A8A29E;
}

/* ── Section ── */
.section { margin-bottom: 12px; }

.section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-bottom: 4px;
  border-bottom: 1px solid #E7E5E4;
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
  color: #1C1917;
  flex: 1;
}

.separator { color: #A8A29E; }

.date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.tag {
  background: #F5F5F4;
  border: none;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 9pt;
  color: #44403C;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.campus-general { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "campus-general",
          "version": "1.0.0",
          "name": "通用校招",
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
  },
  {
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

@media print {
  .resume.campus-tech { margin: 0; }
  .section { margin-left: 18mm; margin-right: 18mm; }
  .resume-header { padding: 14mm 18mm 12mm; }
  @page { margin: 0; size: A4; }
}


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
  },
  {
    slug: 'campus-finance',
    name: '金融校招',
    category: 'campus',
    html: `<div class="resume campus-finance">
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
  {{#if education.length}}
  <section class="section" data-section="education"><h2 class="section-title">教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-header"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
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
  {{#if projects.length}}
  <section class="section" data-section="projects"><h2 class="section-title">项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="separator"> — </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="section" data-section="skills"><h2 class="section-title">专业技能</h2><div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.campus-finance {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', Georgia, serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #2C2C2C;
  background: #fff;
}

/* ── Header ── */
.resume-header {
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 14px;
}

.resume-header h1 {
  font-size: 20pt;
  font-weight: 700;
  color: #1E3A5F;
  letter-spacing: 2px;
  line-height: 1.2;
  font-family: Georgia, 'PingFang SC', serif;
}

.resume-header .title {
  font-size: 10pt;
  color: #1E3A5F;
  margin-top: 4px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #555;
  border-top: 1px solid #1E3A5F;
  border-bottom: 1px solid #1E3A5F;
  padding: 4px 0;
  margin-top: 10px;
}

.contact-item { margin: 0 8px; }

.contact-item + .contact-item::before {
  content: "|";
  margin-right: 8px;
  color: #94A3B8;
}

/* ── Section ── */
.section { margin-bottom: 13px; }

.section-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: #1E3A5F;
  letter-spacing: 1px;
  padding-bottom: 3px;
  border-bottom: 1.5px solid #1E3A5F;
  margin-bottom: 8px;
  font-family: Georgia, 'PingFang SC', serif;
  text-transform: uppercase;
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
  color: #1C1917;
  flex: 1;
}

.separator { color: #94A3B8; }

.date {
  font-size: 9pt;
  color: #555;
  white-space: nowrap;
  flex-shrink: 0;
}

.sub {
  font-size: 9pt;
  color: #555;
  margin-top: 2px;
}

.summary {
  font-size: 9.5pt;
  color: #333;
  line-height: 1.65;
}

.highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.highlights li {
  font-size: 9.5pt;
  color: #333;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.tag {
  background: transparent;
  border: 1px solid #1E3A5F;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1E3A5F;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.campus-finance { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "campus-finance",
          "version": "1.0.0",
          "name": "金融校招",
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
                }
          ]
    },
  },
  {
    slug: 'campus-design',
    name: '设计校招',
    category: 'campus',
    html: `<div class="resume campus-design">
  <header class="resume-header">
    <div class="header-name-block">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span class="contact-item" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="contact-item" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="contact-item" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="header-rule"></div>
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
  {{#if skills.length}}
  <section class="section" data-section="skills"><h2 class="section-title">专业技能</h2><div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>
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

.resume.campus-design {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #111111;
  background: #fff;
}

/* ── Header ── */
.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0;
  margin-bottom: 4px;
}

.header-name-block {}

.resume-header h1 {
  font-size: 26pt;
  font-weight: 700;
  color: #000000;
  letter-spacing: -0.5px;
  line-height: 1.1;
}

.resume-header .title {
  font-size: 10pt;
  color: #555555;
  margin-top: 4px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.contact {
  text-align: right;
  font-size: 9pt;
  color: #555555;
  line-height: 1.7;
}

.contact-item { display: block; }

.header-rule {
  border: none;
  border-top: 2px solid #000000;
  margin: 10px 0 16px;
}

/* ── Section ── */
.section { margin-bottom: 13px; }

.section-title {
  font-size: 7.5pt;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  padding-bottom: 4px;
  border-bottom: 1px solid #000000;
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
  font-weight: 700;
  color: #000000;
  flex: 1;
}

.separator { color: #AAAAAA; }

.date {
  font-size: 8.5pt;
  color: #666666;
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.sub {
  font-size: 9pt;
  color: #555555;
  margin-top: 2px;
}

.summary {
  font-size: 9.5pt;
  color: #333333;
  line-height: 1.65;
}

.highlights {
  margin-top: 4px;
  padding-left: 0;
  list-style: none;
}

.highlights li {
  font-size: 9.5pt;
  color: #333333;
  margin-bottom: 3px;
  line-height: 1.5;
  padding-left: 12px;
  position: relative;
}

.highlights li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: #AAAAAA;
}

/* ── Skills ── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
}

.tag {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  padding: 2px 0 3px;
  font-size: 9pt;
  color: #111111;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.campus-design { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "campus-design",
          "version": "1.0.0",
          "name": "设计校招",
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
  },
  {
    slug: 'campus-intern',
    name: '实习生',
    category: 'campus',
    html: `<div class="resume campus-intern">
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
  {{#if education.length}}
  <section class="section" data-section="education"><h2 class="section-title">教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-header"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
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
  {{#if projects.length}}
  <section class="section" data-section="projects"><h2 class="section-title">项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-header"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="separator"> — </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span></div>{{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="section" data-section="skills"><h2 class="section-title">专业技能</h2><div class="skill-tags">{{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.campus-intern {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #374151;
  background: #fff;
}

/* ── Header ── */
.resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
}

.resume-header h1 {
  font-size: 21pt;
  font-weight: 700;
  color: #111827;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume-header .title {
  font-size: 10pt;
  color: #6B7280;
  margin-top: 4px;
  font-weight: 400;
}

.contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #6B7280;
}

.contact-item { margin: 0 6px; }

.contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D1D5DB;
}

/* ── Section ── */
.section { margin-bottom: 12px; }

.section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #111827;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: none;
  border-left: 4px solid #2563EB;
  padding-left: 8px;
  margin-bottom: 8px;
  line-height: 1.3;
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
  color: #111827;
  flex: 1;
}

.separator { color: #9CA3AF; }

.date {
  font-size: 9pt;
  color: #6B7280;
  white-space: nowrap;
  flex-shrink: 0;
}

.sub {
  font-size: 9pt;
  color: #6B7280;
  margin-top: 2px;
}

.summary {
  font-size: 9.5pt;
  color: #374151;
  line-height: 1.6;
}

.highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.highlights li {
  font-size: 9.5pt;
  color: #374151;
  margin-bottom: 2px;
  line-height: 1.5;
}

/* ── Skills ── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.tag {
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 2px 9px;
  border-radius: 3px;
  font-size: 9pt;
  color: #1D4ED8;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.campus-intern { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "campus-intern",
          "version": "1.0.0",
          "name": "实习生",
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
                }
          ]
    },
  },
  {
    slug: 'it-frontend',
    name: '前端工程师',
    category: 'profession',
    html: `<div class="resume it-frontend">
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

.resume.it-frontend {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #FFFFFF;
}

.resume.it-frontend .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #3B82F6;
}

.resume.it-frontend .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1E293B;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.it-frontend .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.resume.it-frontend .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.it-frontend .contact-item { margin: 0 6px; }
.resume.it-frontend .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.it-frontend .section { margin-bottom: 12px; }

.resume.it-frontend .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1E293B;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #3B82F6;
  margin-bottom: 8px;
}

.resume.it-frontend .entry { margin-bottom: 8px; }
.resume.it-frontend .entry:last-child { margin-bottom: 0; }

.resume.it-frontend .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.it-frontend .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1E293B;
  flex: 1;
}

.resume.it-frontend .separator { color: #A8A29E; }

.resume.it-frontend .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.it-frontend .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.it-frontend .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.resume.it-frontend .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.it-frontend .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.it-frontend .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.it-frontend .tag {
  background: transparent;
  border: 1px solid #3B82F6;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1E293B;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.it-frontend { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "it-frontend",
          "version": "1.0.0",
          "name": "前端工程师",
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
  },
  {
    slug: 'it-backend',
    name: '后端工程师',
    category: 'profession',
    html: `<div class="resume it-backend">
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

.resume.it-backend {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #374151;
  background: #FFFFFF;
}

.resume.it-backend .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #D1D5DB;
}

.resume.it-backend .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1E293B;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.it-backend .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.resume.it-backend .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.it-backend .contact-item { margin: 0 6px; }
.resume.it-backend .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.it-backend .section { margin-bottom: 12px; }

.resume.it-backend .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1E293B;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D1D5DB;
  margin-bottom: 8px;
}

.resume.it-backend .entry { margin-bottom: 8px; }
.resume.it-backend .entry:last-child { margin-bottom: 0; }

.resume.it-backend .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.it-backend .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1E293B;
  flex: 1;
}

.resume.it-backend .separator { color: #A8A29E; }

.resume.it-backend .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.it-backend .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.it-backend .summary {
  font-size: 9.5pt;
  color: #374151;
  line-height: 1.6;
}

.resume.it-backend .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.it-backend .highlights li {
  font-size: 9.5pt;
  color: #374151;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.it-backend .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.it-backend .tag {
  background: transparent;
  border: 1px solid #D1D5DB;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1E293B;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.it-backend { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "it-backend",
          "version": "1.0.0",
          "name": "后端工程师",
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
  },
  {
    slug: 'it-fullstack',
    name: '全栈工程师',
    category: 'profession',
    html: `<div class="resume it-fullstack">
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

.resume.it-fullstack {
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

.resume.it-fullstack .sidebar {
  width: 68mm;
  min-height: 297mm;
  background: #0F172A;
  padding: 20mm 12px 18mm 16px;
  flex-shrink: 0;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.it-fullstack .sidebar-name h1 {
  font-size: 16pt;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  line-height: 1.25;
  margin-bottom: 4px;
  word-break: break-all;
}

.resume.it-fullstack .sidebar-name .title {
  font-size: 9pt;
  color: rgba(255,255,255,0.65);
  font-weight: 400;
  margin-bottom: 12px;
}

.resume.it-fullstack .sidebar-contact {
  margin-bottom: 16px;
}

.resume.it-fullstack .sidebar-contact .contact-item {
  display: block;
  font-size: 8.5pt;
  color: rgba(255,255,255,0.6);
  margin-bottom: 3px;
  word-break: break-all;
}

.resume.it-fullstack .sidebar-section {
  margin-bottom: 14px;
}

.resume.it-fullstack .sidebar-section-title {
  font-size: 8pt;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 7px;
}

.resume.it-fullstack .sidebar .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px 4px;
}

.resume.it-fullstack .sidebar .tag {
  background: rgba(255,255,255,0.12);
  border: none;
  padding: 2px 7px;
  border-radius: 2px;
  font-size: 8pt;
  color: rgba(255,255,255,0.85);
}

.resume.it-fullstack .sidebar .summary {
  font-size: 8.5pt;
  color: rgba(255,255,255,0.7);
  line-height: 1.55;
}

.resume.it-fullstack .main {
  flex: 1;
  padding: 20mm 16mm 18mm 14px;
  min-width: 0;
}

.resume.it-fullstack .main .section { margin-bottom: 12px; }

.resume.it-fullstack .main .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #0F172A;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 2px solid #38BDF8;
  margin-bottom: 8px;
}

.resume.it-fullstack .entry { margin-bottom: 8px; }
.resume.it-fullstack .entry:last-child { margin-bottom: 0; }

.resume.it-fullstack .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.it-fullstack .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #0F172A;
  flex: 1;
}

.resume.it-fullstack .separator { color: #A8A29E; }

.resume.it-fullstack .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.it-fullstack .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.it-fullstack .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.it-fullstack .highlights li {
  font-size: 9.5pt;
  color: #374151;
  margin-bottom: 2px;
  line-height: 1.5;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.it-fullstack { }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "it-fullstack",
          "version": "1.0.0",
          "name": "全栈工程师",
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
  },
  {
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

@media print {
  .resume.finance-analyst { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

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
  },
  {
    slug: 'finance-accounting',
    name: '会计审计',
    category: 'profession',
    html: `<div class="resume finance-accounting">
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

.resume.finance-accounting {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #1A1A1A;
  background: #FFFFFF;
}

.resume.finance-accounting .resume-header {
  text-align: center;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid #111111;
}

.resume.finance-accounting .resume-header h1 {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 24pt;
  font-weight: 700;
  color: #111111;
  letter-spacing: 1px;
  line-height: 1.2;
}

.resume.finance-accounting .resume-header .title {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
  font-style: italic;
}

.resume.finance-accounting .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.finance-accounting .contact-item { margin: 0 6px; }
.resume.finance-accounting .contact-item + .contact-item::before {
  content: "·";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.finance-accounting .section { margin-bottom: 12px; }

.resume.finance-accounting .section-title {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 10pt;
  font-weight: 700;
  color: #111111;
  letter-spacing: 0.5px;
  padding-bottom: 4px;
  border-bottom: 1px solid #111111;
  margin-bottom: 8px;
}

.resume.finance-accounting .entry { margin-bottom: 8px; }
.resume.finance-accounting .entry:last-child { margin-bottom: 0; }

.resume.finance-accounting .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.finance-accounting .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #111111;
  flex: 1;
}

.resume.finance-accounting .separator { color: #A8A29E; }

.resume.finance-accounting .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.finance-accounting .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.finance-accounting .summary {
  font-size: 9.5pt;
  color: #1A1A1A;
  line-height: 1.6;
}

.resume.finance-accounting .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.finance-accounting .highlights li {
  font-size: 9.5pt;
  color: #1A1A1A;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.finance-accounting .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.finance-accounting .tag {
  background: transparent;
  border: 1px solid #111111;
  padding: 2px 9px;
  border-radius: 1px;
  font-size: 9pt;
  color: #1A1A1A;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.finance-accounting { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "finance-accounting",
          "version": "1.0.0",
          "name": "会计审计",
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
  },
  {
    slug: 'finance-banking',
    name: '银行保险',
    category: 'profession',
    html: `<div class="resume finance-banking">
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
  <div class="resume-body">
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
  </div>
</div>`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.finance-banking {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}

.resume.finance-banking .resume-header {
  background: #1F2937;
  padding: 20mm 20mm 16px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.finance-banking .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.finance-banking .resume-header .title {
  font-size: 10pt;
  color: rgba(255,255,255,0.75);
  margin-top: 4px;
  font-weight: 400;
}

.resume.finance-banking .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: rgba(255,255,255,0.65);
}

.resume.finance-banking .contact-item { margin: 0 6px; }
.resume.finance-banking .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: rgba(255,255,255,0.25);
}

.resume.finance-banking .resume-body {
  padding: 16px 20mm 18mm;
}

.resume.finance-banking .section { margin-bottom: 12px; }

.resume.finance-banking .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1F2937;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 2px solid #374151;
  margin-bottom: 8px;
}

.resume.finance-banking .entry { margin-bottom: 8px; }
.resume.finance-banking .entry:last-child { margin-bottom: 0; }

.resume.finance-banking .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.finance-banking .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1F2937;
  flex: 1;
}

.resume.finance-banking .separator { color: #A8A29E; }

.resume.finance-banking .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.finance-banking .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.finance-banking .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.resume.finance-banking .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.finance-banking .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.finance-banking .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.finance-banking .tag {
  background: transparent;
  border: 1px solid #374151;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1F2937;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.finance-banking .resume-body { padding: 14px 18mm 16mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "finance-banking",
          "version": "1.0.0",
          "name": "银行保险",
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
  },
  {
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
  },
  {
    slug: 'design-graphic',
    name: '平面设计',
    category: 'profession',
    html: `<div class="resume design-graphic">
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

.resume.design-graphic {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #1A1A1A;
  background: #FFFFFF;
}

.resume.design-graphic .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #111111;
}

.resume.design-graphic .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #111111;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.design-graphic .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.resume.design-graphic .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.design-graphic .contact-item { margin: 0 6px; }
.resume.design-graphic .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.design-graphic .section { margin-bottom: 12px; }

.resume.design-graphic .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #111111;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #111111;
  margin-bottom: 8px;
}

.resume.design-graphic .entry { margin-bottom: 8px; }
.resume.design-graphic .entry:last-child { margin-bottom: 0; }

.resume.design-graphic .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.design-graphic .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #111111;
  flex: 1;
}

.resume.design-graphic .separator { color: #A8A29E; }

.resume.design-graphic .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.design-graphic .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.design-graphic .summary {
  font-size: 9.5pt;
  color: #1A1A1A;
  line-height: 1.6;
}

.resume.design-graphic .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.design-graphic .highlights li {
  font-size: 9.5pt;
  color: #1A1A1A;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.design-graphic .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.design-graphic .tag {
  background: transparent;
  border: 1px solid #111111;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #111111;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.design-graphic { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "design-graphic",
          "version": "1.0.0",
          "name": "平面设计",
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
  },
  {
    slug: 'design-video',
    name: '视频动画',
    category: 'profession',
    html: `<div class="resume design-video">
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
  <div class="resume-body">
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
  </div>
</div>`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.design-video {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}

.resume.design-video .resume-header {
  background: #0A0A0A;
  padding: 20mm 20mm 16px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.design-video .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.design-video .resume-header .title {
  font-size: 10pt;
  color: rgba(255,255,255,0.75);
  margin-top: 4px;
  font-weight: 400;
}

.resume.design-video .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: rgba(255,255,255,0.65);
}

.resume.design-video .contact-item { margin: 0 6px; }
.resume.design-video .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: rgba(255,255,255,0.25);
}

.resume.design-video .resume-body {
  padding: 16px 20mm 18mm;
}

.resume.design-video .section { margin-bottom: 12px; }

.resume.design-video .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #0A0A0A;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 2px solid #3F3F46;
  margin-bottom: 8px;
}

.resume.design-video .entry { margin-bottom: 8px; }
.resume.design-video .entry:last-child { margin-bottom: 0; }

.resume.design-video .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.design-video .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #0A0A0A;
  flex: 1;
}

.resume.design-video .separator { color: #A8A29E; }

.resume.design-video .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.design-video .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.design-video .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.resume.design-video .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.design-video .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.design-video .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.design-video .tag {
  background: transparent;
  border: 1px solid #3F3F46;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #0A0A0A;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.design-video .resume-body { padding: 14px 18mm 16mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "design-video",
          "version": "1.0.0",
          "name": "视频动画",
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
  },
  {
    slug: 'edu-teacher',
    name: '中小学教师',
    category: 'profession',
    html: `<div class="resume edu-teacher">
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

.resume.edu-teacher {
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

.resume.edu-teacher .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #1E3A5F;
}

.resume.edu-teacher .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1E3A5F;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.edu-teacher .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.resume.edu-teacher .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.edu-teacher .contact-item { margin: 0 6px; }
.resume.edu-teacher .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.edu-teacher .section { margin-bottom: 12px; }

.resume.edu-teacher .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1E3A5F;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #1E3A5F;
  margin-bottom: 8px;
}

.resume.edu-teacher .entry { margin-bottom: 8px; }
.resume.edu-teacher .entry:last-child { margin-bottom: 0; }

.resume.edu-teacher .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.edu-teacher .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1E3A5F;
  flex: 1;
}

.resume.edu-teacher .separator { color: #A8A29E; }

.resume.edu-teacher .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.edu-teacher .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.edu-teacher .summary {
  font-size: 9.5pt;
  color: #2D3748;
  line-height: 1.6;
}

.resume.edu-teacher .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.edu-teacher .highlights li {
  font-size: 9.5pt;
  color: #2D3748;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.edu-teacher .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.edu-teacher .tag {
  background: transparent;
  border: 1px solid #1E3A5F;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1E3A5F;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.edu-teacher { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "edu-teacher",
          "version": "1.0.0",
          "name": "中小学教师",
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
  },
  {
    slug: 'edu-professor',
    name: '大学教授',
    category: 'profession',
    html: `<div class="resume edu-professor">
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

.resume.edu-professor {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #2D2D2D;
  background: #FEFCE8;
}

.resume.edu-professor .resume-header {
  text-align: center;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid #333333;
}

.resume.edu-professor .resume-header h1 {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 24pt;
  font-weight: 700;
  color: #1A1A1A;
  letter-spacing: 1px;
  line-height: 1.2;
}

.resume.edu-professor .resume-header .title {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
  font-style: italic;
}

.resume.edu-professor .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.edu-professor .contact-item { margin: 0 6px; }
.resume.edu-professor .contact-item + .contact-item::before {
  content: "·";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.edu-professor .section { margin-bottom: 12px; }

.resume.edu-professor .section-title {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 10pt;
  font-weight: 700;
  color: #1A1A1A;
  letter-spacing: 0.5px;
  padding-bottom: 4px;
  border-bottom: 1px solid #333333;
  margin-bottom: 8px;
}

.resume.edu-professor .entry { margin-bottom: 8px; }
.resume.edu-professor .entry:last-child { margin-bottom: 0; }

.resume.edu-professor .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.edu-professor .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1A1A1A;
  flex: 1;
}

.resume.edu-professor .separator { color: #A8A29E; }

.resume.edu-professor .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.edu-professor .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.edu-professor .summary {
  font-size: 9.5pt;
  color: #2D2D2D;
  line-height: 1.6;
}

.resume.edu-professor .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.edu-professor .highlights li {
  font-size: 9.5pt;
  color: #2D2D2D;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.edu-professor .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.edu-professor .tag {
  background: transparent;
  border: 1px solid #333333;
  padding: 2px 9px;
  border-radius: 1px;
  font-size: 9pt;
  color: #2D2D2D;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.edu-professor { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "edu-professor",
          "version": "1.0.0",
          "name": "大学教授",
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
  },
  {
    slug: 'edu-trainer',
    name: '培训讲师',
    category: 'profession',
    html: `<div class="resume edu-trainer">
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

.resume.edu-trainer {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #FFFBF7;
}

.resume.edu-trainer .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #D6D3D1;
}

.resume.edu-trainer .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #44403C;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.edu-trainer .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.resume.edu-trainer .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.edu-trainer .contact-item { margin: 0 6px; }
.resume.edu-trainer .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.edu-trainer .section { margin-bottom: 12px; }

.resume.edu-trainer .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #44403C;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D6D3D1;
  margin-bottom: 8px;
}

.resume.edu-trainer .entry { margin-bottom: 8px; }
.resume.edu-trainer .entry:last-child { margin-bottom: 0; }

.resume.edu-trainer .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.edu-trainer .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #44403C;
  flex: 1;
}

.resume.edu-trainer .separator { color: #A8A29E; }

.resume.edu-trainer .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.edu-trainer .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.edu-trainer .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.resume.edu-trainer .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.edu-trainer .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.edu-trainer .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.edu-trainer .tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #44403C;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.edu-trainer { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "edu-trainer",
          "version": "1.0.0",
          "name": "培训讲师",
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
  },
  {
    slug: 'mkt-digital',
    name: '数字营销',
    category: 'profession',
    html: `<div class="resume mkt-digital">
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
  <div class="resume-body">
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
  </div>
</div>`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.mkt-digital {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}

.resume.mkt-digital .resume-header {
  background: #0F172A;
  padding: 20mm 20mm 16px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.mkt-digital .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.mkt-digital .resume-header .title {
  font-size: 10pt;
  color: rgba(255,255,255,0.75);
  margin-top: 4px;
  font-weight: 400;
}

.resume.mkt-digital .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: rgba(255,255,255,0.65);
}

.resume.mkt-digital .contact-item { margin: 0 6px; }
.resume.mkt-digital .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: rgba(255,255,255,0.25);
}

.resume.mkt-digital .resume-body {
  padding: 16px 20mm 18mm;
}

.resume.mkt-digital .section { margin-bottom: 12px; }

.resume.mkt-digital .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #0F172A;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 2px solid #1E293B;
  margin-bottom: 8px;
}

.resume.mkt-digital .entry { margin-bottom: 8px; }
.resume.mkt-digital .entry:last-child { margin-bottom: 0; }

.resume.mkt-digital .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.mkt-digital .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #0F172A;
  flex: 1;
}

.resume.mkt-digital .separator { color: #A8A29E; }

.resume.mkt-digital .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.mkt-digital .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.mkt-digital .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}

.resume.mkt-digital .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.mkt-digital .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.mkt-digital .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.mkt-digital .tag {
  background: transparent;
  border: 1px solid #1E293B;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #0F172A;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.mkt-digital .resume-body { padding: 14px 18mm 16mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "mkt-digital",
          "version": "1.0.0",
          "name": "数字营销",
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
  },
  {
    slug: 'mkt-brand',
    name: '品牌营销',
    category: 'profession',
    html: `<div class="resume mkt-brand">
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

.resume.mkt-brand {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #1A1A1A;
  background: #FFFFFF;
}

.resume.mkt-brand .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #111111;
}

.resume.mkt-brand .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #111111;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.resume.mkt-brand .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
  font-weight: 400;
}

.resume.mkt-brand .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}

.resume.mkt-brand .contact-item { margin: 0 6px; }
.resume.mkt-brand .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}

.resume.mkt-brand .section { margin-bottom: 12px; }

.resume.mkt-brand .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #111111;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #111111;
  margin-bottom: 8px;
}

.resume.mkt-brand .entry { margin-bottom: 8px; }
.resume.mkt-brand .entry:last-child { margin-bottom: 0; }

.resume.mkt-brand .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.resume.mkt-brand .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #111111;
  flex: 1;
}

.resume.mkt-brand .separator { color: #A8A29E; }

.resume.mkt-brand .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.mkt-brand .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}

.resume.mkt-brand .summary {
  font-size: 9.5pt;
  color: #1A1A1A;
  line-height: 1.6;
}

.resume.mkt-brand .highlights {
  margin-top: 4px;
  padding-left: 15px;
}

.resume.mkt-brand .highlights li {
  font-size: 9.5pt;
  color: #1A1A1A;
  margin-bottom: 2px;
  line-height: 1.5;
}

.resume.mkt-brand .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}

.resume.mkt-brand .tag {
  background: transparent;
  border: 1px solid #111111;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #111111;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print {
  .resume.mkt-brand { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "mkt-brand",
          "version": "1.0.0",
          "name": "品牌营销",
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
  },
  {
    slug: 'mkt-content',
    name: '内容运营',
    category: 'profession',
    html: `<div class="resume mkt-content">
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

.resume.mkt-content {
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
.resume.mkt-content .resume-header {
  padding-bottom: 12px;
  margin-bottom: 14px;
  padding-left: 12px;
  border-left: 4px solid #44403C;
}
.resume.mkt-content .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 1px;
  line-height: 1.2;
}
.resume.mkt-content .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.mkt-content .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.mkt-content .contact-item { margin: 0 6px 0 0; }
.resume.mkt-content .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.mkt-content .section { margin-bottom: 12px; }
.resume.mkt-content .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #44403C;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  padding-left: 8px;
  border-left: 3px solid #44403C;
  margin-bottom: 8px;
}
.resume.mkt-content .entry { margin-bottom: 8px; }
.resume.mkt-content .entry:last-child { margin-bottom: 0; }
.resume.mkt-content .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.mkt-content .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}
.resume.mkt-content .separator { color: #A8A29E; }
.resume.mkt-content .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.mkt-content .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.mkt-content .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.mkt-content .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.mkt-content .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.mkt-content .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.mkt-content .tag {
  background: transparent;
  border: 1px solid #44403C;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #44403C;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.mkt-content { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "mkt-content",
          "version": "1.0.0",
          "name": "内容运营",
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
  },
  {
    slug: 'med-doctor',
    name: '医生',
    category: 'profession',
    html: `<div class="resume med-doctor">
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

.resume.med-doctor {
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
.resume.med-doctor .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #1E3A5F;
}
.resume.med-doctor .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1E3A5F;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.med-doctor .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.med-doctor .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.med-doctor .contact-item { margin: 0 6px; }
.resume.med-doctor .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.med-doctor .section { margin-bottom: 12px; }
.resume.med-doctor .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1E3A5F;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #1E3A5F;
  margin-bottom: 8px;
}
.resume.med-doctor .entry { margin-bottom: 8px; }
.resume.med-doctor .entry:last-child { margin-bottom: 0; }
.resume.med-doctor .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.med-doctor .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1E3A5F;
  flex: 1;
}
.resume.med-doctor .separator { color: #A8A29E; }
.resume.med-doctor .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.med-doctor .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.med-doctor .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.med-doctor .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.med-doctor .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.med-doctor .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.med-doctor .tag {
  background: transparent;
  border: 1px solid #1E3A5F;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1E3A5F;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.med-doctor { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "med-doctor",
          "version": "1.0.0",
          "name": "医生",
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
  },
  {
    slug: 'med-nurse',
    name: '护士',
    category: 'profession',
    html: `<div class="resume med-nurse">
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

.resume.med-nurse {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #FFFBF7;
}
.resume.med-nurse .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #D6D3D1;
}
.resume.med-nurse .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #44403C;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.med-nurse .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.med-nurse .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.med-nurse .contact-item { margin: 0 6px; }
.resume.med-nurse .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.med-nurse .section { margin-bottom: 12px; }
.resume.med-nurse .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #44403C;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D6D3D1;
  margin-bottom: 8px;
}
.resume.med-nurse .entry { margin-bottom: 8px; }
.resume.med-nurse .entry:last-child { margin-bottom: 0; }
.resume.med-nurse .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.med-nurse .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #44403C;
  flex: 1;
}
.resume.med-nurse .separator { color: #A8A29E; }
.resume.med-nurse .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.med-nurse .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.med-nurse .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.med-nurse .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.med-nurse .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.med-nurse .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.med-nurse .tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #44403C;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.med-nurse { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "med-nurse",
          "version": "1.0.0",
          "name": "护士",
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
  },
  {
    slug: 'med-pharma',
    name: '药学',
    category: 'profession',
    html: `<div class="resume med-pharma">
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
  <div class="resume-body">
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
  </div>
</div>`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.med-pharma {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}
.resume.med-pharma .resume-header {
  background: #1F2937;
  padding: 20mm 20mm 16px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
.resume.med-pharma .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.med-pharma .resume-header .title {
  font-size: 10pt;
  color: rgba(255,255,255,0.75);
  margin-top: 4px;
}
.resume.med-pharma .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: rgba(255,255,255,0.65);
}
.resume.med-pharma .contact-item { margin: 0 6px; }
.resume.med-pharma .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: rgba(255,255,255,0.25);
}
.resume.med-pharma .resume-body {
  padding: 16px 20mm 18mm;
}
.resume.med-pharma .section { margin-bottom: 12px; }
.resume.med-pharma .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 2px solid #374151;
  margin-bottom: 8px;
}
.resume.med-pharma .entry { margin-bottom: 8px; }
.resume.med-pharma .entry:last-child { margin-bottom: 0; }
.resume.med-pharma .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.med-pharma .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}
.resume.med-pharma .separator { color: #A8A29E; }
.resume.med-pharma .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.med-pharma .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.med-pharma .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.med-pharma .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.med-pharma .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.med-pharma .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.med-pharma .tag {
  background: transparent;
  border: 1px solid #374151;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1C1917;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.med-pharma .resume-body { padding: 14px 18mm 16mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "med-pharma",
          "version": "1.0.0",
          "name": "药学",
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
  },
  {
    slug: 'pm-product',
    name: '产品经理',
    category: 'profession',
    html: `<div class="resume pm-product">
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

.resume.pm-product {
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
.resume.pm-product .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #A8A29E;
}
.resume.pm-product .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.pm-product .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.pm-product .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.pm-product .contact-item { margin: 0 6px; }
.resume.pm-product .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.pm-product .section { margin-bottom: 12px; }
.resume.pm-product .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #A8A29E;
  margin-bottom: 8px;
}
.resume.pm-product .entry { margin-bottom: 8px; }
.resume.pm-product .entry:last-child { margin-bottom: 0; }
.resume.pm-product .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.pm-product .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}
.resume.pm-product .separator { color: #A8A29E; }
.resume.pm-product .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.pm-product .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.pm-product .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.pm-product .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.pm-product .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.pm-product .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.pm-product .tag {
  background: transparent;
  border: 1px solid #A8A29E;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1C1917;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.pm-product { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "pm-product",
          "version": "1.0.0",
          "name": "产品经理",
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
  },
  {
    slug: 'pm-operation',
    name: '运营经理',
    category: 'profession',
    html: `<div class="resume pm-operation">
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

.resume.pm-operation {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
  display: flex;
}
.resume.pm-operation .sidebar {
  width: 64mm;
  min-height: 297mm;
  background: #F5F5F4;
  padding: 20mm 12px 18mm 16px;
  flex-shrink: 0;
}
.resume.pm-operation .sidebar-name h1 {
  font-size: 16pt;
  font-weight: 700;
  color: #1C1917;
  line-height: 1.25;
  margin-bottom: 4px;
  word-break: break-all;
}
.resume.pm-operation .sidebar-name .title {
  font-size: 9pt;
  color: #78716C;
  margin-bottom: 12px;
}
.resume.pm-operation .sidebar-contact {
  margin-bottom: 16px;
}
.resume.pm-operation .sidebar-contact .contact-item {
  display: block;
  font-size: 8.5pt;
  color: #78716C;
  margin-bottom: 3px;
  word-break: break-all;
}
.resume.pm-operation .sidebar-section { margin-bottom: 14px; }
.resume.pm-operation .sidebar-section-title {
  font-size: 8pt;
  font-weight: 700;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 3px;
  border-bottom: 1px solid #D6D3D1;
  margin-bottom: 7px;
}
.resume.pm-operation .sidebar .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px 4px;
}
.resume.pm-operation .sidebar .tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  padding: 2px 7px;
  border-radius: 2px;
  font-size: 8pt;
  color: #44403C;
}
.resume.pm-operation .sidebar .summary {
  font-size: 8.5pt;
  color: #78716C;
  line-height: 1.55;
}
.resume.pm-operation .main {
  flex: 1;
  padding: 20mm 16mm 18mm 14px;
  min-width: 0;
}
.resume.pm-operation .main .section { margin-bottom: 12px; }
.resume.pm-operation .main .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #A8A29E;
  margin-bottom: 8px;
}
.resume.pm-operation .entry { margin-bottom: 8px; }
.resume.pm-operation .entry:last-child { margin-bottom: 0; }
.resume.pm-operation .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.pm-operation .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}
.resume.pm-operation .separator { color: #A8A29E; }
.resume.pm-operation .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.pm-operation .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.pm-operation .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.pm-operation .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "pm-operation",
          "version": "1.0.0",
          "name": "运营经理",
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
  },
  {
    slug: 'pm-growth',
    name: '增长策略',
    category: 'profession',
    html: `<div class="resume pm-growth">
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
  <div class="resume-body">
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
  </div>
</div>`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.pm-growth {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #fff;
}
.resume.pm-growth .resume-header {
  background: #0F172A;
  padding: 20mm 20mm 16px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
.resume.pm-growth .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.pm-growth .resume-header .title {
  font-size: 10pt;
  color: rgba(255,255,255,0.75);
  margin-top: 4px;
}
.resume.pm-growth .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: rgba(255,255,255,0.65);
}
.resume.pm-growth .contact-item { margin: 0 6px; }
.resume.pm-growth .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: rgba(255,255,255,0.25);
}
.resume.pm-growth .resume-body {
  padding: 16px 20mm 18mm;
}
.resume.pm-growth .section { margin-bottom: 12px; }
.resume.pm-growth .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1C1917;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 2px solid #1E293B;
  margin-bottom: 8px;
}
.resume.pm-growth .entry { margin-bottom: 8px; }
.resume.pm-growth .entry:last-child { margin-bottom: 0; }
.resume.pm-growth .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.pm-growth .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  flex: 1;
}
.resume.pm-growth .separator { color: #A8A29E; }
.resume.pm-growth .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.pm-growth .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.pm-growth .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.pm-growth .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.pm-growth .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.pm-growth .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.pm-growth .tag {
  background: transparent;
  border: 1px solid #1E293B;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1C1917;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.pm-growth .resume-body { padding: 14px 18mm 16mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "pm-growth",
          "version": "1.0.0",
          "name": "增长策略",
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
  },
  {
    slug: 'hr-recruiter',
    name: '招聘HRBP',
    category: 'profession',
    html: `<div class="resume hr-recruiter">
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

.resume.hr-recruiter {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #44403C;
  background: #FFFBF7;
}
.resume.hr-recruiter .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #D6D3D1;
}
.resume.hr-recruiter .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #44403C;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.hr-recruiter .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.hr-recruiter .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.hr-recruiter .contact-item { margin: 0 6px; }
.resume.hr-recruiter .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.hr-recruiter .section { margin-bottom: 12px; }
.resume.hr-recruiter .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #44403C;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D6D3D1;
  margin-bottom: 8px;
}
.resume.hr-recruiter .entry { margin-bottom: 8px; }
.resume.hr-recruiter .entry:last-child { margin-bottom: 0; }
.resume.hr-recruiter .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.hr-recruiter .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #44403C;
  flex: 1;
}
.resume.hr-recruiter .separator { color: #A8A29E; }
.resume.hr-recruiter .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.hr-recruiter .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.hr-recruiter .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.hr-recruiter .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.hr-recruiter .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.hr-recruiter .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.hr-recruiter .tag {
  background: transparent;
  border: 1px solid #D6D3D1;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #44403C;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.hr-recruiter { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "hr-recruiter",
          "version": "1.0.0",
          "name": "招聘HRBP",
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
  },
  {
    slug: 'hr-training',
    name: '培训发展',
    category: 'profession',
    html: `<div class="resume hr-training">
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

.resume.hr-training {
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
.resume.hr-training .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #D1D5DB;
}
.resume.hr-training .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #111111;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.hr-training .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.hr-training .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.hr-training .contact-item { margin: 0 6px; }
.resume.hr-training .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.hr-training .section { margin-bottom: 12px; }
.resume.hr-training .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #111111;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D1D5DB;
  margin-bottom: 8px;
}
.resume.hr-training .entry { margin-bottom: 8px; }
.resume.hr-training .entry:last-child { margin-bottom: 0; }
.resume.hr-training .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.hr-training .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #111111;
  flex: 1;
}
.resume.hr-training .separator { color: #A8A29E; }
.resume.hr-training .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.hr-training .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.hr-training .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.hr-training .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.hr-training .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.hr-training .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.hr-training .tag {
  background: transparent;
  border: 1px solid #D1D5DB;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #111111;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.hr-training { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "hr-training",
          "version": "1.0.0",
          "name": "培训发展",
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
  },
  {
    slug: 'hr-admin',
    name: '行政管理',
    category: 'profession',
    html: `<div class="resume hr-admin">
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

.resume.hr-admin {
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
.resume.hr-admin .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #374151;
}
.resume.hr-admin .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1F2937;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.hr-admin .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.hr-admin .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.hr-admin .contact-item { margin: 0 6px; }
.resume.hr-admin .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.hr-admin .section { margin-bottom: 12px; }
.resume.hr-admin .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1F2937;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #374151;
  margin-bottom: 8px;
}
.resume.hr-admin .entry { margin-bottom: 8px; }
.resume.hr-admin .entry:last-child { margin-bottom: 0; }
.resume.hr-admin .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.hr-admin .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1F2937;
  flex: 1;
}
.resume.hr-admin .separator { color: #A8A29E; }
.resume.hr-admin .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.hr-admin .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.hr-admin .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.hr-admin .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.hr-admin .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.hr-admin .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.hr-admin .tag {
  background: transparent;
  border: 1px solid #374151;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1F2937;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.hr-admin { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "hr-admin",
          "version": "1.0.0",
          "name": "行政管理",
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
  },
  {
    slug: 'legal-lawyer',
    name: '律师',
    category: 'profession',
    html: `<div class="resume legal-lawyer">
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

.resume.legal-lawyer {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #2D2D2D;
  background: #fff;
}
.resume.legal-lawyer .resume-header {
  text-align: center;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid #000000;
}
.resume.legal-lawyer .resume-header h1 {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 24pt;
  font-weight: 700;
  color: #000000;
  letter-spacing: 1px;
  line-height: 1.2;
}
.resume.legal-lawyer .resume-header .title {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 10pt;
  color: #78716C;
  font-style: italic;
  margin-top: 4px;
}
.resume.legal-lawyer .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.legal-lawyer .contact-item { margin: 0 6px; }
.resume.legal-lawyer .contact-item + .contact-item::before {
  content: "·";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.legal-lawyer .section { margin-bottom: 12px; }
.resume.legal-lawyer .section-title {
  font-family: Georgia, 'Times New Roman', 'SimSun', serif;
  font-size: 10pt;
  font-weight: 700;
  color: #000000;
  padding-bottom: 4px;
  border-bottom: 1px solid #000000;
  margin-bottom: 8px;
}
.resume.legal-lawyer .entry { margin-bottom: 8px; }
.resume.legal-lawyer .entry:last-child { margin-bottom: 0; }
.resume.legal-lawyer .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.legal-lawyer .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #000000;
  flex: 1;
}
.resume.legal-lawyer .separator { color: #A8A29E; }
.resume.legal-lawyer .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.legal-lawyer .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.legal-lawyer .summary {
  font-size: 9.5pt;
  color: #2D2D2D;
  line-height: 1.65;
}
.resume.legal-lawyer .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.legal-lawyer .highlights li {
  font-size: 9.5pt;
  color: #2D2D2D;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.legal-lawyer .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.legal-lawyer .tag {
  background: transparent;
  border: 1px solid #000000;
  padding: 2px 9px;
  border-radius: 1px;
  font-size: 9pt;
  color: #2D2D2D;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.legal-lawyer { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "legal-lawyer",
          "version": "1.0.0",
          "name": "律师",
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
  },
  {
    slug: 'legal-compliance',
    name: '合规专员',
    category: 'profession',
    html: `<div class="resume legal-compliance">
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

.resume.legal-compliance {
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
.resume.legal-compliance .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #1E3A5F;
}
.resume.legal-compliance .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #1E3A5F;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.legal-compliance .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.legal-compliance .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.legal-compliance .contact-item { margin: 0 6px; }
.resume.legal-compliance .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.legal-compliance .section { margin-bottom: 12px; }
.resume.legal-compliance .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1E3A5F;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #1E3A5F;
  margin-bottom: 8px;
}
.resume.legal-compliance .entry { margin-bottom: 8px; }
.resume.legal-compliance .entry:last-child { margin-bottom: 0; }
.resume.legal-compliance .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.legal-compliance .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1E3A5F;
  flex: 1;
}
.resume.legal-compliance .separator { color: #A8A29E; }
.resume.legal-compliance .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.legal-compliance .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.legal-compliance .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.legal-compliance .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.legal-compliance .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.legal-compliance .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.legal-compliance .tag {
  background: transparent;
  border: 1px solid #1E3A5F;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #1E3A5F;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.legal-compliance { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "legal-compliance",
          "version": "1.0.0",
          "name": "合规专员",
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
  },
  {
    slug: 'legal-ip',
    name: '知识产权',
    category: 'profession',
    html: `<div class="resume legal-ip">
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

.resume.legal-ip {
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
.resume.legal-ip .resume-header {
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #78716C;
}
.resume.legal-ip .resume-header h1 {
  font-size: 22pt;
  font-weight: 700;
  color: #292524;
  letter-spacing: 1.5px;
  line-height: 1.2;
}
.resume.legal-ip .resume-header .title {
  font-size: 10pt;
  color: #78716C;
  margin-top: 4px;
}
.resume.legal-ip .contact {
  margin-top: 8px;
  font-size: 9pt;
  color: #78716C;
}
.resume.legal-ip .contact-item { margin: 0 6px; }
.resume.legal-ip .contact-item + .contact-item::before {
  content: "|";
  margin-right: 6px;
  color: #D6D3D1;
}
.resume.legal-ip .section { margin-bottom: 12px; }
.resume.legal-ip .section-title {
  font-size: 9pt;
  font-weight: 700;
  color: #292524;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 4px;
  border-bottom: 1px solid #78716C;
  margin-bottom: 8px;
}
.resume.legal-ip .entry { margin-bottom: 8px; }
.resume.legal-ip .entry:last-child { margin-bottom: 0; }
.resume.legal-ip .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.legal-ip .entry-header h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #292524;
  flex: 1;
}
.resume.legal-ip .separator { color: #A8A29E; }
.resume.legal-ip .date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.legal-ip .sub {
  font-size: 9pt;
  color: #78716C;
  margin-top: 2px;
}
.resume.legal-ip .summary {
  font-size: 9.5pt;
  color: #44403C;
  line-height: 1.6;
}
.resume.legal-ip .highlights {
  margin-top: 4px;
  padding-left: 15px;
}
.resume.legal-ip .highlights li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}
.resume.legal-ip .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
}
.resume.legal-ip .tag {
  background: transparent;
  border: 1px solid #78716C;
  padding: 2px 9px;
  border-radius: 2px;
  font-size: 9pt;
  color: #292524;
}
li p, li div { margin: 0; padding: 0; display: inline; }
@media print {
  .resume.legal-ip { margin: 0; padding: 16mm 18mm; }
  @page { margin: 0; size: A4; }
}

/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "legal-ip",
          "version": "1.0.0",
          "name": "知识产权",
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
  }
];
