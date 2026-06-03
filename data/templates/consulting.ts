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
    slug: 'consulting',
    name: '咨询风格',
    category: 'business',
    html: `<div class="resume consulting">
  <header class="cs-header">
    <div class="cs-header-left">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="cs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="cs-header-right">
      {{#if basics.email}}<div data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
  </header>
  <div class="cs-body">
    <div class="cs-left">
      {{#if basics.summary}}
      <section class="cs-section">
        <h2 class="cs-section-title">简介</h2>
        <div class="cs-body-text" data-field="basics.summary">{{{basics.summary}}}</div>
      </section>
      {{/if}}
      {{#if experience.length}}
      <section class="cs-section" data-section="experience">
        <h2 class="cs-section-title">工作经历</h2>
        {{#each experience}}
        <div class="cs-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="cs-entry-head">
            <strong data-field="experience.{{@index}}.company">{{{company}}}</strong>
            <span class="cs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="cs-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
          {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if projects.length}}
      <section class="cs-section" data-section="projects">
        <h2 class="cs-section-title">项目经历</h2>
        {{#each projects}}
        <div class="cs-entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="cs-entry-head">
            <strong data-field="projects.{{@index}}.name">{{{name}}}</strong>
            {{#if role}}<span class="cs-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          {{#if description}}<div class="cs-body-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div class="cs-right">
      {{#if education.length}}
      <section class="cs-section" data-section="education">
        <h2 class="cs-section-title">教育背景</h2>
        {{#each education}}
        <div class="cs-entry" data-entry="education" data-entry-index="{{@index}}">
          <strong data-field="education.{{@index}}.institution">{{{institution}}}</strong>
          <p class="cs-pos"><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span> · <span data-field="education.{{@index}}.area">{{{area}}}</span></p>
          <p class="cs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></p>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="cs-section" data-section="skills">
        <h2 class="cs-section-title">专业技能</h2>
        {{#each skills}}
        <div class="cs-skill" data-entry="skills" data-entry-index="{{@index}}">
          <span data-field="skills.{{@index}}.name">{{{name}}}</span>
          {{#if level}}<span class="cs-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.consulting { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #111; background: #fff; }
.cs-header { display: flex; justify-content: space-between; align-items: flex-end; padding: 20mm 22mm 12px; border-bottom: 3px solid #111; }
.cs-header-left h1 { font-size: 22pt; font-weight: 900; color: #111; letter-spacing: -0.5px; }
.cs-title { font-size: 10.5pt; color: #555; margin-top: 3px; }
.cs-header-right { text-align: right; font-size: 9pt; color: #444; line-height: 1.8; }
.cs-body { display: flex; gap: 0; padding: 0 22mm 20mm; }
.cs-left { flex: 1.8; padding-right: 24px; padding-top: 16px; border-right: 1px solid #ddd; }
.cs-right { flex: 1; padding-left: 24px; padding-top: 16px; }
.cs-section { margin-bottom: 16px; }
.cs-section-title { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; color: #111; border-bottom: 1px solid #111; padding-bottom: 4px; margin-bottom: 10px; }
.cs-entry { margin-bottom: 11px; }
.cs-entry-head { display: flex; justify-content: space-between; align-items: baseline; }
.cs-entry-head strong { font-size: 10.5pt; font-weight: 700; color: #111; }
.cs-date { font-size: 9pt; color: #666; }
.cs-pos { font-size: 9.5pt; color: #444; margin-top: 2px; font-style: italic; }
.cs-body-text { font-size: 9.5pt; color: #333; margin-top: 4px; }
.cs-list { margin-top: 5px; padding-left: 15px; }
.cs-list li { font-size: 9.5pt; color: #333; margin-bottom: 3px; }
.cs-skill { display: flex; justify-content: space-between; font-size: 9.5pt; padding: 3px 0; border-bottom: 1px solid #eee; }
.cs-level { font-size: 9pt; color: #666; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.consulting { margin: 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
          "templateId": "consulting",
          "version": "1.0.0",
          "name": "咨询风格",
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
