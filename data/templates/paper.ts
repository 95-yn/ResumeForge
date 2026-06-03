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
@media print { .resume.paper { margin: 0;  background: #FEFCE8; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
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
  };

export default template;
