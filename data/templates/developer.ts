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
  border-left: 1px solid #252525;
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
  };

export default template;
