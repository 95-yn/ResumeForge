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
    slug: 'legal',
    name: '法律行业',
    category: 'business',
    html: `<div class="resume legal">
  <header class="lg-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="lg-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="lg-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="lg-rule"></div>
  {{#if basics.summary}}
  <section class="lg-section">
    <h2 class="lg-section-title">PROFESSIONAL SUMMARY</h2>
    <div class="lg-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="lg-section" data-section="experience">
    <h2 class="lg-section-title">PROFESSIONAL EXPERIENCE</h2>
    {{#each experience}}
    <div class="lg-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="lg-entry-head">
        <div class="lg-entry-main">
          <span class="lg-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="lg-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="lg-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="lg-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="lg-section" data-section="education">
    <h2 class="lg-section-title">EDUCATION</h2>
    {{#each education}}
    <div class="lg-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="lg-entry-head">
        <div class="lg-entry-main">
          <span class="lg-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="lg-pos"><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>, <span data-field="education.{{@index}}.area">{{{area}}}</span></span>
        </div>
        <span class="lg-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="lg-section" data-section="skills">
    <h2 class="lg-section-title">AREAS OF PRACTICE</h2>
    <div class="lg-skills">
      {{#each skills}}<span class="lg-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} (<span data-field="skills.{{@index}}.level">{{{level}}}</span>){{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="lg-section" data-section="projects">
    <h2 class="lg-section-title">NOTABLE MATTERS</h2>
    {{#each projects}}
    <div class="lg-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="lg-entry-head">
        <div class="lg-entry-main">
          <span class="lg-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="lg-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="lg-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="lg-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.legal { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 24mm; font-family: "Times New Roman", "Georgia", "PingFang SC", "Microsoft YaHei", serif; font-size: 11pt; line-height: 1.7; color: #000; background: #fff; }
.lg-header { text-align: center; margin-bottom: 8px; }
.lg-header h1 { font-size: 22pt; font-weight: 700; color: #000; letter-spacing: 2px; text-transform: uppercase; font-family: "Times New Roman", serif; }
.lg-title { font-size: 10.5pt; color: #333; margin-top: 4px; letter-spacing: 1px; }
.lg-contacts { margin-top: 6px; font-size: 9.5pt; color: #333; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
.lg-rule { height: 1px; background: #000; margin: 10px 0; }
.lg-section { margin-bottom: 14px; }
.lg-section-title { font-size: 9.5pt; font-weight: 700; letter-spacing: 2px; color: #000; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 8px; font-family: "Times New Roman", serif; }
.lg-entry { margin-bottom: 10px; }
.lg-entry-head { display: flex; justify-content: space-between; align-items: baseline; }
.lg-entry-main { display: flex; flex-direction: column; }
.lg-org { font-size: 11pt; font-weight: 700; color: #000; }
.lg-pos { font-size: 10.5pt; color: #333; font-style: italic; }
.lg-date { font-size: 9.5pt; color: #444; white-space: nowrap; }
.lg-body { font-size: 10.5pt; color: #222; margin-top: 5px; text-align: justify; }
.lg-list { margin-top: 5px; padding-left: 22px; }
.lg-list li { font-size: 10.5pt; color: #222; margin-bottom: 3px; }
.lg-skills { columns: 2; gap: 24px; }
.lg-skill { display: block; font-size: 10.5pt; color: #333; margin-bottom: 4px; break-inside: avoid; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.legal { margin: 0; padding: 20mm 22mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "legal",
          "version": "1.0.0",
          "name": "法律行业",
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
