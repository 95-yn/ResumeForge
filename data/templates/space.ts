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
  };

export default template;
