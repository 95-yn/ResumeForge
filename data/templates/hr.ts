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
    slug: 'hr',
    name: '人力资源',
    category: 'business',
    html: `<div class="resume hr">
  <header class="hr-header">
    <div class="hr-avatar-area">
      {{#if basics.avatar}}<img class="hr-avatar" src="{{{basics.avatar}}}" alt="" />{{/if}}
    </div>
    <div class="hr-header-info">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hr-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="hr-contacts">
        {{#if basics.email}}<span class="hr-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="hr-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="hr-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="hr-section">
    <h2 class="hr-section-title">个人简介</h2>
    <div class="hr-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="hr-section" data-section="experience">
    <h2 class="hr-section-title">工作经历</h2>
    {{#each experience}}
    <div class="hr-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="hr-entry-head">
        <div class="hr-entry-meta">
          <span class="hr-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="hr-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="hr-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="hr-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="hr-section" data-section="education">
    <h2 class="hr-section-title">教育背景</h2>
    {{#each education}}
    <div class="hr-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="hr-entry-head">
        <div class="hr-entry-meta">
          <span class="hr-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="hr-position"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        </div>
        <span class="hr-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="hr-section" data-section="skills">
    <h2 class="hr-section-title">专业技能</h2>
    <div class="hr-skills">
      {{#each skills}}<div class="hr-skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="hr-skill-level" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="hr-section" data-section="projects">
    <h2 class="hr-section-title">项目经历</h2>
    {{#each projects}}
    <div class="hr-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="hr-entry-head">
        <div class="hr-entry-meta">
          <span class="hr-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="hr-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="hr-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="hr-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.hr { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 18mm 20mm; font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; font-size: 10pt; line-height: 1.65; color: #292524; background: #fff; }
.hr-header { display: flex; align-items: center; gap: 16px; padding-bottom: 16px; border-bottom: 2px solid #D97706; margin-bottom: 16px; }
.hr-avatar { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid #FDE68A; }
.hr-header-info h1 { font-size: 22pt; font-weight: 700; color: #292524; }
.hr-title { font-size: 10.5pt; color: #B45309; margin-top: 3px; font-weight: 500; }
.hr-contacts { margin-top: 6px; display: flex; gap: 12px; flex-wrap: wrap; }
.hr-contact { font-size: 9pt; color: #78716C; }
.hr-section { margin-bottom: 14px; }
.hr-section-title { font-size: 9.5pt; font-weight: 700; color: #B45309; background: #FFFBEB; border-left: 1px solid #D97706; padding: 4px 10px; margin-bottom: 10px; border-radius: 0 4px 4px 0; }
.hr-entry { margin-bottom: 10px; }
.hr-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.hr-entry-meta { display: flex; flex-direction: column; gap: 1px; }
.hr-company { font-size: 10.5pt; font-weight: 700; color: #292524; }
.hr-position { font-size: 9.5pt; color: #78716C; }
.hr-date { font-size: 9pt; color: #A8A29E; white-space: nowrap; }
.hr-body { font-size: 9.5pt; color: #44403C; margin-top: 4px; }
.hr-list { margin-top: 5px; padding-left: 16px; }
.hr-list li { font-size: 9.5pt; color: #44403C; margin-bottom: 3px; }
.hr-skills { display: flex; flex-wrap: wrap; gap: 7px; }
.hr-skill-chip { background: #FEF9C3; color: #854D0E; border: 1px solid #FDE68A; padding: 3px 12px; border-radius: 20px; font-size: 9pt; }
.hr-skill-level { color: #B45309; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.hr { margin: 0; padding: 16mm 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "hr",
          "version": "1.0.0",
          "name": "人力资源",
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
