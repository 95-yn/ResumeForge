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
    slug: 'photographer',
    name: '摄影师',
    category: 'creative',
    html: `<div class="resume photographer">
  <header class="ph-header">
    <div class="ph-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ph-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="ph-contacts">
      {{#if basics.email}}<span class="ph-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="ph-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="ph-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="ph-content">
    {{#if basics.summary}}
    <section class="ph-section">
      <h2 class="ph-section-title">创作理念</h2>
      <div class="ph-body" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="ph-section" data-section="experience">
      <h2 class="ph-section-title">工作经历</h2>
      {{#each experience}}
      <div class="ph-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="ph-entry-head">
          <h3><span data-field="experience.{{@index}}.company">{{{company}}}</span> <span class="ph-sep">·</span> <span class="ph-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="ph-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="ph-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="ph-section" data-section="projects">
      <h2 class="ph-section-title">作品项目</h2>
      {{#each projects}}
      <div class="ph-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="ph-entry-head">
          <h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="ph-sep">·</span> <span class="ph-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        </div>
        {{#if description}}<div class="ph-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ph-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="ph-section" data-section="education">
      <h2 class="ph-section-title">教育背景</h2>
      {{#each education}}
      <div class="ph-entry" data-entry="education" data-entry-index="{{@index}}">
        <div class="ph-entry-head">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="ph-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="ph-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if skills.length}}
    <section class="ph-section" data-section="skills">
      <h2 class="ph-section-title">专业技能</h2>
      <div class="ph-skills">
        {{#each skills}}<span class="ph-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ph-skill-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
      </div>
    </section>
    {{/if}}
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.photographer { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Georgia", "Times New Roman", "PingFang SC", "Microsoft YaHei", serif; font-size: 10pt; line-height: 1.7; color: #1a1a1a; background: #fff; }
.ph-header { background: #1C1C1C; color: #fff; padding: 24mm 22mm 18mm; }
.ph-header-inner h1 { font-size: 30pt; font-weight: 400; color: #fff; letter-spacing: 3px; font-family: "Georgia", serif; line-height: 1.1; }
.ph-title { font-size: 11pt; color: rgba(255,255,255,0.65); margin-top: 8px; letter-spacing: 3px; text-transform: uppercase; font-family: "Helvetica Neue", sans-serif; font-weight: 300; }
.ph-contacts { margin-top: 14px; display: flex; gap: 20px; flex-wrap: wrap; }
.ph-contact { font-size: 9pt; color: rgba(255,255,255,0.55); font-family: "Helvetica Neue", sans-serif; letter-spacing: 0.5px; }
.ph-content { padding: 20px 22mm; }
.ph-section { margin-bottom: 18px; }
.ph-section-title { font-size: 8pt; font-weight: 400; text-transform: uppercase; letter-spacing: 3px; color: #888; border-bottom: 1px solid #E5E5E5; padding-bottom: 6px; margin-bottom: 12px; font-family: "Helvetica Neue", sans-serif; }
.ph-entry { margin-bottom: 12px; }
.ph-entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.ph-entry-head h3 { font-size: 11pt; font-weight: 700; color: #1a1a1a; }
.ph-sep { color: #ccc; }
.ph-pos { font-weight: 400; font-size: 10.5pt; color: #555; font-style: italic; }
.ph-date { font-size: 9pt; color: #999; white-space: nowrap; font-family: "Helvetica Neue", sans-serif; }
.ph-body { font-size: 10pt; color: #444; margin-top: 5px; }
.ph-list { margin-top: 5px; padding-left: 18px; }
.ph-list li { font-size: 9.5pt; color: #444; margin-bottom: 3px; }
.ph-skills { display: flex; flex-wrap: wrap; gap: 8px; }
.ph-skill { font-size: 9pt; color: #555; font-family: "Helvetica Neue", sans-serif; }
.ph-skill + .ph-skill::before { content: "/"; margin-right: 8px; color: #ccc; }
.ph-skill-lv { color: #999; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.photographer { margin: 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
          "templateId": "photographer",
          "version": "1.0.0",
          "name": "摄影师",
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
