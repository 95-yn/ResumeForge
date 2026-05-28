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
    slug: 'artist',
    name: '艺术家',
    category: 'creative',
    html: `<div class="resume artist">
  <header class="ar-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="ar-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="ar-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="ar-section">
    <h2 class="ar-section-title">创作自述</h2>
    <div class="ar-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="ar-section" data-section="experience">
    <h2 class="ar-section-title">工作经历</h2>
    {{#each experience}}
    <div class="ar-entry" data-entry="experience" data-entry-index="{{@index}}">
      <h3 data-field="experience.{{@index}}.company">{{{company}}}</h3>
      <div class="ar-meta">
        <span data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="ar-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="ar-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="ar-section" data-section="projects">
    <h2 class="ar-section-title">艺术作品</h2>
    {{#each projects}}
    <div class="ar-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3 data-field="projects.{{@index}}.name">{{{name}}}</h3>
      {{#if role}}<div class="ar-meta"><span data-field="projects.{{@index}}.role">{{{role}}}</span></div>{{/if}}
      {{#if description}}<div class="ar-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="ar-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="ar-section" data-section="education">
    <h2 class="ar-section-title">教育背景</h2>
    {{#each education}}
    <div class="ar-entry" data-entry="education" data-entry-index="{{@index}}">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <div class="ar-meta">
        <span><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        <span class="ar-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="ar-section" data-section="skills">
    <h2 class="ar-section-title">媒介技法</h2>
    <div class="ar-skills">
      {{#each skills}}<span class="ar-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.artist { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20mm 20mm 20mm 28mm; font-family: "Georgia", "Times New Roman", "PingFang SC", "Microsoft YaHei", serif; font-size: 10.5pt; line-height: 1.7; color: #2C1810; background: #fff; }
.ar-header { margin-bottom: 20px; border-left: 5px solid #78350F; padding-left: 16px; }
.ar-header h1 { font-size: 30pt; font-weight: 400; color: #78350F; font-family: "Georgia", serif; line-height: 1.1; }
.ar-title { font-size: 11pt; color: #92400E; margin-top: 5px; font-style: italic; }
.ar-contacts { margin-top: 8px; display: flex; gap: 14px; flex-wrap: wrap; font-size: 9pt; color: #A16207; font-family: "Helvetica Neue", sans-serif; }
.ar-section { margin-bottom: 16px; }
.ar-section-title { font-size: 9pt; font-weight: 400; text-transform: uppercase; letter-spacing: 3px; color: #78350F; margin-bottom: 10px; border-bottom: 1px solid #D4B97A; padding-bottom: 4px; font-family: "Helvetica Neue", "Arial", sans-serif; }
.ar-entry { margin-bottom: 12px; padding-left: 12px; border-left: 2px solid #F5DEB3; }
.ar-entry h3 { font-size: 11pt; font-weight: 700; color: #2C1810; }
.ar-meta { display: flex; justify-content: space-between; align-items: baseline; font-size: 9.5pt; color: #92400E; margin-top: 2px; font-style: italic; font-family: "Helvetica Neue", sans-serif; }
.ar-date { font-size: 9pt; color: #B45309; }
.ar-body { font-size: 10pt; color: #44403C; margin-top: 5px; }
.ar-list { margin-top: 5px; padding-left: 18px; }
.ar-list li { font-size: 10pt; color: #44403C; margin-bottom: 3px; }
.ar-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.ar-skill { font-size: 9.5pt; color: #78350F; border: 1px solid #D4B97A; padding: 2px 10px; border-radius: 2px; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.artist { margin: 0; padding: 18mm 18mm 18mm 26mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "artist",
          "version": "1.0.0",
          "name": "艺术家",
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
