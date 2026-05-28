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
    slug: 'executive',
    name: '高管风格',
    category: 'business',
    html: `<div class="resume executive">
  <header class="ex-header">
    <div class="ex-header-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ex-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="ex-header-contact">
      {{#if basics.email}}<div class="ex-contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="ex-contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="ex-contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
  </header>
  <div class="ex-gold-line"></div>
  {{#if basics.summary}}
  <section class="ex-section">
    <h2 class="ex-section-title">个人简介</h2>
    <div class="ex-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="ex-section" data-section="experience">
    <h2 class="ex-section-title">工作经历</h2>
    {{#each experience}}
    <div class="ex-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="ex-entry-header">
        <div class="ex-entry-left">
          <span class="ex-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="ex-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="ex-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="ex-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="ex-section" data-section="education">
    <h2 class="ex-section-title">教育背景</h2>
    {{#each education}}
    <div class="ex-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="ex-entry-header">
        <div class="ex-entry-left">
          <span class="ex-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="ex-position"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        </div>
        <span class="ex-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="ex-section" data-section="skills">
    <h2 class="ex-section-title">专业技能</h2>
    <div class="ex-skills">
      {{#each skills}}<span class="ex-skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="ex-section" data-section="projects">
    <h2 class="ex-section-title">项目经历</h2>
    {{#each projects}}
    <div class="ex-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="ex-entry-header">
        <div class="ex-entry-left">
          <span class="ex-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="ex-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="ex-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="ex-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.executive { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20mm 22mm; font-family: "Georgia", "Times New Roman", "PingFang SC", "Microsoft YaHei", serif; font-size: 10pt; line-height: 1.65; color: #1a1a1a; background: #fff; }
.ex-header { display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 14px; }
.ex-header-main h1 { font-size: 26pt; font-weight: 700; color: #1C1C1C; letter-spacing: 1px; font-family: "Georgia", serif; }
.ex-title { font-size: 11pt; color: #555; margin-top: 4px; font-style: italic; letter-spacing: 0.5px; }
.ex-header-contact { text-align: right; }
.ex-contact-item { font-size: 9pt; color: #444; margin-bottom: 3px; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ex-gold-line { height: 2px; background: linear-gradient(90deg, #8B6914 0%, #C9A84C 50%, #8B6914 100%); margin-bottom: 18px; }
.ex-section { margin-bottom: 16px; }
.ex-section-title { font-size: 9pt; font-weight: 700; color: #8B6914; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #D4B97A; padding-bottom: 5px; margin-bottom: 10px; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ex-entry { margin-bottom: 12px; }
.ex-entry-header { display: flex; justify-content: space-between; align-items: baseline; }
.ex-entry-left { display: flex; flex-direction: column; }
.ex-company { font-size: 11pt; font-weight: 700; color: #1C1C1C; }
.ex-position { font-size: 9.5pt; color: #555; margin-top: 1px; font-style: italic; }
.ex-date { font-size: 9pt; color: #8B6914; white-space: nowrap; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ex-desc { font-size: 9.5pt; color: #444; margin-top: 5px; }
.ex-summary { font-size: 10pt; color: #333; line-height: 1.7; }
.ex-list { margin-top: 6px; padding-left: 18px; }
.ex-list li { font-size: 9.5pt; margin-bottom: 3px; color: #333; }
.ex-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.ex-skill-tag { font-size: 9pt; color: #444; border: 1px solid #D4B97A; padding: 2px 10px; border-radius: 2px; font-family: "Helvetica Neue", "Arial", sans-serif; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.executive { margin: 0; padding: 18mm 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "executive",
          "version": "1.0.0",
          "name": "高管风格",
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
