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
    slug: 'ai',
    name: 'AI工程师',
    category: 'tech',
    html: `<div class="resume ai">
  <header class="ai-header">
    <div class="ai-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ai-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="ai-contacts">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="ai-body">
    {{#if basics.summary}}
    <section class="ai-section">
      <h2 class="ai-section-title">Overview</h2>
      <div class="ai-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="ai-section" data-section="experience">
      <h2 class="ai-section-title">Experience</h2>
      {{#each experience}}
      <div class="ai-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="ai-entry-head">
          <div>
            <span class="ai-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="ai-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="ai-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="ai-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="ai-section" data-section="projects">
      <h2 class="ai-section-title">Research & Projects</h2>
      {{#each projects}}
      <div class="ai-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="ai-entry-head">
          <span class="ai-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="ai-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="ai-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ai-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    <div class="ai-bottom">
      {{#if education.length}}
      <section class="ai-section" data-section="education">
        <h2 class="ai-section-title">Education</h2>
        {{#each education}}
        <div class="ai-edu" data-entry="education" data-entry-index="{{@index}}">
          <span class="ai-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="ai-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="ai-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="ai-section" data-section="skills">
        <h2 class="ai-section-title">Technical Stack</h2>
        <div class="ai-skills">
          {{#each skills}}<span class="ai-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ai-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.ai { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #E0E7FF; background: #1E1B4B; }
.ai-header { background: linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%); padding: 16mm 22mm 14mm; }
.ai-header-inner h1 { font-size: 22pt; font-weight: 800; color: #fff; letter-spacing: -0.5px; }
.ai-title { font-size: 10.5pt; color: rgba(255,255,255,0.75); margin-top: 4px; }
.ai-contacts { margin-top: 10px; display: flex; gap: 16px; flex-wrap: wrap; }
.ai-contacts span { font-size: 9pt; color: rgba(255,255,255,0.6); }
.ai-body { padding: 0 22mm 20mm; }
.ai-section { margin-top: 16px; }
.ai-section-title { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #818CF8; border-bottom: 1px solid #312E81; padding-bottom: 4px; margin-bottom: 10px; }
.ai-entry { margin-bottom: 12px; }
.ai-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
.ai-entry-head > div { display: flex; flex-direction: column; }
.ai-company { font-size: 10.5pt; font-weight: 700; color: #E0E7FF; }
.ai-pos { font-size: 9.5pt; color: #A5B4FC; }
.ai-date { font-size: 9pt; color: #6366F1; white-space: nowrap; }
.ai-text { font-size: 9.5pt; color: #C7D2FE; margin-top: 4px; }
.ai-list { margin-top: 5px; padding-left: 16px; }
.ai-list li { font-size: 9.5pt; color: #C7D2FE; margin-bottom: 3px; }
.ai-list li::marker { color: #818CF8; }
.ai-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
.ai-edu { display: flex; flex-direction: column; gap: 2px; margin-bottom: 8px; }
.ai-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.ai-skill { font-size: 9pt; color: #1E1B4B; background: #818CF8; padding: 2px 10px; border-radius: 4px; font-weight: 500; }
.ai-lv { color: #312E81; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.ai { margin: 0; } .ai-header { padding: 14mm 20mm 12mm; } .ai-body { padding: 0 20mm 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "ai",
          "version": "1.0.0",
          "name": "AI工程师",
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
