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
  };

export default template;
