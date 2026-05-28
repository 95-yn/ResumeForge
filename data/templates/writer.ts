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
  };

export default template;
