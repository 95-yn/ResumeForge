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
    slug: 'sales',
    name: '销售商务',
    category: 'business',
    html: `<div class="resume sales">
  <header class="sl-header">
    <div class="sl-accent-bar"></div>
    <div class="sl-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="sl-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="sl-contacts">
        {{#if basics.email}}<span class="sl-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="sl-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="sl-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="sl-section">
    <h2 class="sl-section-title">个人简介</h2>
    <div class="sl-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="sl-section" data-section="experience">
    <h2 class="sl-section-title">工作经历</h2>
    {{#each experience}}
    <div class="sl-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="sl-entry-head">
        <div>
          <span class="sl-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="sl-sep"> · </span>
          <span class="sl-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="sl-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="sl-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="sl-section" data-section="education">
    <h2 class="sl-section-title">教育背景</h2>
    {{#each education}}
    <div class="sl-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="sl-entry-head">
        <div>
          <span class="sl-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="sl-sep"> · </span>
          <span data-field="education.{{@index}}.area">{{{area}}}</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        </div>
        <span class="sl-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="sl-section" data-section="skills">
    <h2 class="sl-section-title">专业技能</h2>
    <div class="sl-skills">
      {{#each skills}}<span class="sl-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="sl-section" data-section="projects">
    <h2 class="sl-section-title">项目经历</h2>
    {{#each projects}}
    <div class="sl-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="sl-entry-head">
        <span class="sl-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="sl-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="sl-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="sl-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.sales { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1C1917; background: #fff; }
.sl-accent-bar { height: 5px; background: #EA580C; }
.sl-header-inner { padding: 14px 22mm 14px; border-bottom: 1px solid #E7E5E4; }
.sl-header-inner h1 { font-size: 22pt; font-weight: 800; color: #1C1917; }
.sl-title { font-size: 11pt; color: #EA580C; margin-top: 3px; font-weight: 600; }
.sl-contacts { margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; }
.sl-contact { font-size: 9pt; color: #57534E; }
.sl-section { padding: 14px 22mm 0; }
.sl-section-title { font-size: 9pt; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #EA580C; border-bottom: 2px solid #FED7AA; padding-bottom: 4px; margin-bottom: 10px; }
.sl-entry { margin-bottom: 12px; }
.sl-entry-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px; }
.sl-company { font-size: 10.5pt; font-weight: 700; color: #1C1917; }
.sl-sep { color: #EA580C; }
.sl-position { font-size: 10pt; color: #44403C; }
.sl-date { font-size: 9pt; color: #78716C; white-space: nowrap; }
.sl-body { font-size: 9.5pt; color: #44403C; margin-top: 4px; }
.sl-list { margin-top: 5px; padding-left: 18px; }
.sl-list li { font-size: 9.5pt; color: #44403C; margin-bottom: 3px; }
.sl-list li::marker { color: #EA580C; }
.sl-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.sl-tag { background: #FFF7ED; color: #EA580C; border: 1px solid #FED7AA; padding: 2px 10px; border-radius: 3px; font-size: 9pt; font-weight: 500; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.sales { margin: 0; } .sl-header-inner { padding: 12px 20mm 12px; } .sl-section { padding: 12px 20mm 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "sales",
          "version": "1.0.0",
          "name": "销售商务",
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
