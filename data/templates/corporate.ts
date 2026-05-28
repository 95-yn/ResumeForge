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
    slug: 'corporate',
    name: '企业标准',
    category: 'business',
    html: `<div class="resume corporate">
  <header class="corp-header">
    <div class="corp-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="corp-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="corp-contacts">
        {{#if basics.email}}<span class="corp-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="corp-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="corp-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="corp-section">
    <h2 class="corp-section-title">职业概述</h2>
    <div class="corp-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="corp-section" data-section="experience">
    <h2 class="corp-section-title">工作经历</h2>
    {{#each experience}}
    <div class="corp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <table class="corp-table">
        <tr>
          <td class="corp-td-company"><span data-field="experience.{{@index}}.company">{{{company}}}</span></td>
          <td class="corp-td-pos"><span data-field="experience.{{@index}}.position">{{{position}}}</span></td>
          <td class="corp-td-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></td>
        </tr>
      </table>
      {{#if highlights.length}}<ul class="corp-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="corp-section" data-section="education">
    <h2 class="corp-section-title">教育背景</h2>
    {{#each education}}
    <div class="corp-entry" data-entry="education" data-entry-index="{{@index}}">
      <table class="corp-table">
        <tr>
          <td class="corp-td-company"><span data-field="education.{{@index}}.institution">{{{institution}}}</span></td>
          <td class="corp-td-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></td>
          <td class="corp-td-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></td>
        </tr>
      </table>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="corp-section" data-section="skills">
    <h2 class="corp-section-title">专业技能</h2>
    <div class="corp-skills">
      {{#each skills}}<div class="corp-skill-row" data-entry="skills" data-entry-index="{{@index}}"><span class="corp-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="corp-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="corp-section" data-section="projects">
    <h2 class="corp-section-title">项目经历</h2>
    {{#each projects}}
    <div class="corp-entry" data-entry="projects" data-entry-index="{{@index}}">
      <table class="corp-table">
        <tr>
          <td class="corp-td-company"><span data-field="projects.{{@index}}.name">{{{name}}}</span></td>
          {{#if role}}<td class="corp-td-pos"><span data-field="projects.{{@index}}.role">{{{role}}}</span></td>{{/if}}
        </tr>
      </table>
      {{#if description}}<div class="corp-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="corp-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.corporate { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1E293B; background: #fff; }
.corp-header { background: #1E40AF; color: #fff; padding: 18mm 22mm 14mm; }
.corp-header h1 { font-size: 22pt; font-weight: 700; letter-spacing: 1px; color: #fff; }
.corp-title { font-size: 11pt; color: rgba(255,255,255,0.8); margin-top: 4px; }
.corp-contacts { margin-top: 10px; display: flex; gap: 18px; flex-wrap: wrap; }
.corp-contact { font-size: 9pt; color: rgba(255,255,255,0.85); }
.corp-section { padding: 0 22mm; margin-top: 14px; }
.corp-section-title { font-size: 9pt; font-weight: 700; color: #1E40AF; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #1E40AF; padding-bottom: 4px; margin-bottom: 8px; }
.corp-entry { margin-bottom: 10px; }
.corp-table { width: 100%; border-collapse: collapse; }
.corp-td-company { font-size: 10.5pt; font-weight: 700; color: #1E293B; width: 40%; }
.corp-td-pos { font-size: 9.5pt; color: #475569; width: 35%; }
.corp-td-date { font-size: 9pt; color: #64748B; text-align: right; white-space: nowrap; }
.corp-body { font-size: 9.5pt; color: #475569; margin-top: 4px; line-height: 1.6; }
.corp-list { margin-top: 5px; padding-left: 18px; }
.corp-list li { font-size: 9.5pt; color: #374151; margin-bottom: 3px; }
.corp-skills { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; }
.corp-skill-row { display: flex; justify-content: space-between; font-size: 9.5pt; border-bottom: 1px solid #F1F5F9; padding: 3px 0; }
.corp-skill-name { color: #1E293B; font-weight: 500; }
.corp-skill-level { color: #1E40AF; font-size: 9pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.corporate { margin: 0; } .corp-section { padding: 0 20mm; } .corp-header { padding: 16mm 20mm 12mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "corporate",
          "version": "1.0.0",
          "name": "企业标准",
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
