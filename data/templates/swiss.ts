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

@media print { .resume.swiss { margin: 0; }
  .sw-red-block { background: #DC2626;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact; }
  .sw-label { color: #DC2626;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }


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
  };

export default template;
