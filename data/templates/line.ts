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
@media print { .resume.line { margin: 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
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
  };

export default template;
