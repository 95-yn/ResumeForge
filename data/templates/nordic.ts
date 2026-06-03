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
@media print { .resume.nordic { margin: 0;  background: #fff; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
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
  };

export default template;
