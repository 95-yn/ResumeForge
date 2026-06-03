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
    slug: 'devops',
    name: 'DevOps工程师',
    category: 'tech',
    html: `<div class="resume devops">
  <header class="dv-header">
    <div class="dv-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="dv-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="dv-contacts">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="dv-section">
    <h2 class="dv-section-title">OVERVIEW</h2>
    <div class="dv-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="dv-section" data-section="experience">
    <h2 class="dv-section-title">PIPELINE · EXPERIENCE</h2>
    {{#each experience}}
    <div class="dv-pipeline-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="dv-pipe-left">
        <div class="dv-pipe-dot"></div>
        <div class="dv-pipe-line"></div>
      </div>
      <div class="dv-pipe-content">
        <div class="dv-pipe-head">
          <span class="dv-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="dv-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          <span class="dv-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="dv-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="dv-section" data-section="projects">
    <h2 class="dv-section-title">DEPLOYMENTS · PROJECTS</h2>
    {{#each projects}}
    <div class="dv-pipeline-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="dv-pipe-left">
        <div class="dv-pipe-dot dv-dot-green"></div>
        <div class="dv-pipe-line"></div>
      </div>
      <div class="dv-pipe-content">
        <div class="dv-pipe-head">
          <span class="dv-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="dv-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="dv-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="dv-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  <div class="dv-two-col">
    <div>
      {{#if education.length}}
      <section class="dv-section" data-section="education">
        <h2 class="dv-section-title">EDUCATION</h2>
        {{#each education}}
        <div class="dv-edu" data-entry="education" data-entry-index="{{@index}}">
          <span class="dv-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="dv-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="dv-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div>
      {{#if skills.length}}
      <section class="dv-section" data-section="skills">
        <h2 class="dv-section-title">STACK · SKILLS</h2>
        <div class="dv-tags">
          {{#each skills}}<span class="dv-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="dv-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.devops { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 9.5pt; line-height: 1.6; color: #E2E8F0; background: #172554; }
.dv-header { background: #1E3A8A; padding: 14mm 20mm 12mm; border-bottom: 2px solid #3B82F6; }
.dv-header-inner h1 { font-size: 20pt; font-weight: 700; color: #F1F5F9; letter-spacing: 1px; }
.dv-title { font-size: 10pt; color: #93C5FD; margin-top: 4px; }
.dv-contacts { margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; font-size: 8.5pt; color: #BFDBFE; }
.dv-section { margin: 14px 20mm 0; }
.dv-section-title { font-size: 7.5pt; font-weight: 700; letter-spacing: 2.5px; color: #3B82F6; border-bottom: 1px solid #1E3A8A; padding-bottom: 4px; margin-bottom: 10px; }
.dv-pipeline-entry { display: flex; gap: 12px; margin-bottom: 10px; }
.dv-pipe-left { display: flex; flex-direction: column; align-items: center; width: 16px; flex-shrink: 0; }
.dv-pipe-dot { width: 10px; height: 10px; border-radius: 50%; background: #3B82F6; border: 2px solid #172554; flex-shrink: 0; }
.dv-dot-green { background: #4ADE80; }
.dv-pipe-line { flex: 1; width: 2px; background: #1E3A8A; margin-top: 2px; }
.dv-pipe-content { flex: 1; }
.dv-pipe-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; margin-bottom: 4px; }
.dv-company { font-size: 10pt; font-weight: 700; color: #F1F5F9; }
.dv-pos { font-size: 9pt; color: #93C5FD; }
.dv-date { font-size: 8.5pt; color: #475569; margin-left: auto; }
.dv-body { font-size: 9pt; color: #CBD5E1; margin-top: 2px; }
.dv-list { padding-left: 14px; margin-top: 4px; }
.dv-list li { font-size: 9pt; color: #CBD5E1; margin-bottom: 3px; }
.dv-two-col { display: grid; grid-template-columns: 1fr 1fr; padding: 0; }
.dv-edu { display: flex; flex-direction: column; gap: 1px; margin-bottom: 8px; }
.dv-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.dv-tag { font-size: 8.5pt; color: #172554; background: #3B82F6; padding: 2px 8px; border-radius: 3px; }
.dv-lv { color: #1E3A8A; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.devops { margin: 0; } .dv-section { margin: 12px 18mm 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
          "templateId": "devops",
          "version": "1.0.0",
          "name": "DevOps工程师",
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
