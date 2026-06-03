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
    slug: 'designer',
    name: '设计师',
    category: 'creative',
    html: `<div class="resume designer">
  <aside class="ds-sidebar">
    {{#if basics.avatar}}<img class="ds-avatar" src="{{{basics.avatar}}}" alt="" />{{/if}}
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="ds-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="ds-divider"></div>
    <div class="ds-contact-section">
      {{#if basics.email}}<div class="ds-contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="ds-contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="ds-contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
    {{#if skills.length}}
    <div class="ds-skill-section" data-section="skills">
      <h3 class="ds-sidebar-title">技能</h3>
      {{#each skills}}<div class="ds-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ds-skill-dot" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
    {{/if}}
    {{#if education.length}}
    <div class="ds-edu-section" data-section="education">
      <h3 class="ds-sidebar-title">教育</h3>
      {{#each education}}
      <div class="ds-edu-item" data-entry="education" data-entry-index="{{@index}}">
        <span class="ds-edu-school" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="ds-edu-major"><span data-field="education.{{@index}}.area">{{{area}}}</span></span>
        <span class="ds-edu-deg" data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        <span class="ds-edu-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{/each}}
    </div>
    {{/if}}
  </aside>
  <main class="ds-main">
    {{#if basics.summary}}
    <section class="ds-section">
      <h2 class="ds-section-title">关于我</h2>
      <div class="ds-body" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="ds-section" data-section="experience">
      <h2 class="ds-section-title">工作经历</h2>
      {{#each experience}}
      <div class="ds-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="ds-entry-head">
          <div>
            <span class="ds-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="ds-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="ds-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="ds-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="ds-section" data-section="projects">
      <h2 class="ds-section-title">项目经历</h2>
      {{#each projects}}
      <div class="ds-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="ds-entry-head">
          <div>
            <span class="ds-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="ds-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
        </div>
        {{#if description}}<div class="ds-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ds-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
  </main>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.designer { max-width: 210mm; min-height: 297mm; margin: 0 auto; display: flex; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.65; color: #e5e5e5; background: #18181B; }
.ds-sidebar { width: 240px; min-height: 297mm; background: #18181B; padding: 28px 22px; flex-shrink: 0; border-right: 1px solid #27272A; }
.ds-avatar { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; margin-bottom: 12px; border: 2px solid #3F3F46; }
.ds-sidebar h1 { font-size: 16pt; font-weight: 700; color: #FAFAFA; line-height: 1.2; margin-bottom: 4px; }
.ds-title { font-size: 9pt; color: #A1A1AA; margin-bottom: 0; }
.ds-divider { height: 1px; background: #3F3F46; margin: 14px 0; }
.ds-contact-section { margin-bottom: 20px; }
.ds-contact-item { font-size: 8.5pt; color: #A1A1AA; margin-bottom: 4px; word-break: break-all; }
.ds-sidebar-title { font-size: 7.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #71717A; margin-bottom: 10px; }
.ds-skill-section, .ds-edu-section { margin-bottom: 20px; }
.ds-skill { font-size: 9pt; color: #D4D4D8; margin-bottom: 5px; display: flex; justify-content: space-between; }
.ds-skill-dot { font-size: 8.5pt; color: #71717A; }
.ds-edu-item { margin-bottom: 10px; }
.ds-edu-school { display: block; font-size: 9pt; font-weight: 600; color: #D4D4D8; }
.ds-edu-major { display: block; font-size: 8.5pt; color: #A1A1AA; }
.ds-edu-deg { display: block; font-size: 8.5pt; color: #71717A; }
.ds-edu-date { display: block; font-size: 8pt; color: #52525B; }
.ds-main { flex: 1; padding: 28px 26px; background: #FFFFFF; color: #18181B; }
.ds-section { margin-bottom: 20px; }
.ds-section-title { font-size: 10pt; font-weight: 700; color: #18181B; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #18181B; padding-bottom: 5px; margin-bottom: 12px; }
.ds-entry { margin-bottom: 14px; }
.ds-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
.ds-company { display: block; font-size: 10.5pt; font-weight: 700; color: #111; }
.ds-position { display: block; font-size: 9.5pt; color: #525252; }
.ds-date { font-size: 9pt; color: #737373; white-space: nowrap; flex-shrink: 0; }
.ds-body { font-size: 9.5pt; color: #404040; }
.ds-list { margin-top: 5px; padding-left: 16px; }
.ds-list li { font-size: 9.5pt; color: #404040; margin-bottom: 3px; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.designer { margin: 0; } .ds-sidebar { min-height: auto; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
          "templateId": "designer",
          "version": "1.0.0",
          "name": "设计师",
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
