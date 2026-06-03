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
    slug: 'japanese',
    name: '日式简约',
    category: 'minimal',
    html: `<div class="resume japanese">
  <header class="jp-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="jp-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="jp-line"></div>
    <div class="jp-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="jp-section">
    <div class="jp-section-bar">
      <span class="jp-section-title">自我介绍</span>
    </div>
    <div class="jp-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="jp-section" data-section="experience">
    <div class="jp-section-bar"><span class="jp-section-title">职务经历</span></div>
    {{#each experience}}
    <div class="jp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="jp-vert-line"></div>
      <div class="jp-entry-content">
        <div class="jp-entry-head">
          <span class="jp-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="jp-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> ─ <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="jp-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
        {{#if highlights.length}}<ul class="jp-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="jp-section" data-section="education">
    <div class="jp-section-bar"><span class="jp-section-title">学历</span></div>
    {{#each education}}
    <div class="jp-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="jp-vert-line"></div>
      <div class="jp-entry-content">
        <div class="jp-entry-head">
          <span class="jp-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="jp-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> ─ <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="jp-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="jp-section" data-section="skills">
    <div class="jp-section-bar"><span class="jp-section-title">スキル</span></div>
    <div class="jp-skills">
      {{#each skills}}<div class="jp-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="jp-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="jp-section" data-section="projects">
    <div class="jp-section-bar"><span class="jp-section-title">プロジェクト</span></div>
    {{#each projects}}
    <div class="jp-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="jp-vert-line"></div>
      <div class="jp-entry-content">
        <div class="jp-entry-head">
          <span class="jp-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="jp-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="jp-pos" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="jp-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.japanese { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 24mm 28mm; font-family: "Hiragino Sans", "PingFang SC", "Yu Gothic", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.8; color: #1C1917; background: #fff; }
.jp-header { margin-bottom: 28px; }
.jp-header h1 { font-size: 24pt; font-weight: 300; color: #1C1917; letter-spacing: 4px; }
.jp-title { font-size: 10pt; color: #78716C; margin-top: 6px; letter-spacing: 2px; }
.jp-line { height: 1px; background: #1C1917; margin: 12px 0; }
.jp-contacts { display: flex; gap: 20px; flex-wrap: wrap; font-size: 9pt; color: #57534E; letter-spacing: 0.5px; }
.jp-section { margin-bottom: 20px; }
.jp-section-bar { border-left: 1px solid #1C1917; padding-left: 12px; margin-bottom: 14px; }
.jp-section-title { font-size: 9pt; font-weight: 400; letter-spacing: 3px; color: #1C1917; }
.jp-summary { font-size: 10pt; color: #44403C; line-height: 1.9; }
.jp-entry { display: flex; gap: 0; margin-bottom: 14px; }
.jp-vert-line { width: 1px; background: #D6D3D1; margin-right: 16px; flex-shrink: 0; }
.jp-entry-content { flex: 1; }
.jp-entry-head { display: flex; justify-content: space-between; align-items: baseline; }
.jp-org { font-size: 10.5pt; font-weight: 600; color: #1C1917; letter-spacing: 0.5px; }
.jp-date { font-size: 9pt; color: #A8A29E; letter-spacing: 0.5px; }
.jp-pos { font-size: 9.5pt; color: #57534E; margin-top: 2px; }
.jp-list { margin-top: 6px; padding-left: 18px; }
.jp-list li { font-size: 9.5pt; color: #57534E; margin-bottom: 4px; }
.jp-skills { display: flex; flex-direction: column; gap: 6px; }
.jp-skill { display: flex; justify-content: space-between; font-size: 9.5pt; border-bottom: 1px solid #F5F5F4; padding-bottom: 5px; }
.jp-lv { font-size: 9pt; color: #A8A29E; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.japanese { margin: 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
          "templateId": "japanese",
          "version": "1.0.0",
          "name": "日式简约",
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
