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
    slug: 'fullstack',
    name: '全栈工程师',
    category: 'tech',
    html: `<div class="resume fullstack">
  <header class="fs-header">
    <div class="fs-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="fs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="fs-contacts">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="fs-body">
    {{#if basics.summary}}
    <section class="fs-section">
      <h2 class="fs-section-title">Summary</h2>
      <div class="fs-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="fs-section" data-section="experience">
      <h2 class="fs-section-title">Experience</h2>
      {{#each experience}}
      <div class="fs-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="fs-entry-head">
          <div class="fs-entry-main">
            <span class="fs-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="fs-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="fs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="fs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="fs-section" data-section="projects">
      <h2 class="fs-section-title">Projects</h2>
      {{#each projects}}
      <div class="fs-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="fs-entry-head">
          <div class="fs-entry-main">
            <span class="fs-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="fs-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
        </div>
        {{#if description}}<div class="fs-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="fs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    <div class="fs-bottom">
      {{#if education.length}}
      <section class="fs-section" data-section="education">
        <h2 class="fs-section-title">Education</h2>
        {{#each education}}
        <div class="fs-entry" data-entry="education" data-entry-index="{{@index}}">
          <div class="fs-entry-head">
            <span class="fs-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
            <span class="fs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="fs-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="fs-section" data-section="skills">
        <h2 class="fs-section-title">Skills</h2>
        <div class="fs-skills">
          {{#each skills}}<span class="fs-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="fs-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.fullstack { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Plus Jakarta Sans", "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #1E293B; background: #fff; }
.fs-header { background: #1E293B; color: #fff; padding: 16mm 22mm 14mm; }
.fs-header-inner h1 { font-size: 22pt; font-weight: 800; color: #F1F5F9; letter-spacing: -0.5px; }
.fs-title { font-size: 10.5pt; color: #64748B; margin-top: 4px; }
.fs-contacts { margin-top: 10px; display: flex; gap: 16px; flex-wrap: wrap; }
.fs-contacts span { font-size: 9pt; color: #94A3B8; }
.fs-body { padding: 0 22mm; }
.fs-section { margin-top: 16px; }
.fs-section-title { font-size: 8.5pt; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #334155; border-bottom: 1px solid #E2E8F0; padding-bottom: 4px; margin-bottom: 10px; }
.fs-entry { margin-bottom: 12px; }
.fs-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.fs-entry-main { display: flex; flex-direction: column; }
.fs-company { font-size: 10.5pt; font-weight: 700; color: #0F172A; }
.fs-pos { font-size: 9.5pt; color: #64748B; }
.fs-date { font-size: 9pt; color: #94A3B8; white-space: nowrap; }
.fs-text { font-size: 9.5pt; color: #475569; margin-top: 4px; }
.fs-list { margin-top: 5px; padding-left: 16px; }
.fs-list li { font-size: 9.5pt; color: #475569; margin-bottom: 3px; }
.fs-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
.fs-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.fs-skill { font-size: 9pt; color: #334155; background: #F1F5F9; border: 1px solid #E2E8F0; padding: 2px 10px; border-radius: 4px; }
.fs-lv { color: #64748B; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.fullstack { margin: 0; } .fs-header { padding: 14mm 20mm 12mm; } .fs-body { padding: 0 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "fullstack",
          "version": "1.0.0",
          "name": "全栈工程师",
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
