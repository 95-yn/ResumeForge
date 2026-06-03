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
@media print { .resume.data { margin: 0;  print-color-adjust: exact; -webkit-print-color-adjust: exact; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
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
  };

export default template;
