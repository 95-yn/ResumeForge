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
  };

export default template;
