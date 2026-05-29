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
    slug: 'creative',
    name: '创意设计',
    category: 'creative',
    html: `<div class="resume creative">
  <header class="cr-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="cr-tagline" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="cr-contacts">
      {{#if basics.email}}<span class="cr-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="cr-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="cr-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="cr-section">
    <h2 class="cr-section-title">个人简介</h2>
    <div class="cr-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">工作经历</h2>
    {{#each experience}}
    <div class="cr-entry">
      <div class="cr-entry-head">
        <div class="cr-meta">
          <span class="cr-entity" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="cr-role" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </div>
        <span class="cr-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="cr-highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">教育背景</h2>
    {{#each education}}
    <div class="cr-entry">
      <div class="cr-entry-head">
        <div class="cr-meta">
          <span class="cr-entity" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="cr-role"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        </div>
        <span class="cr-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">专业技能</h2>
    <div class="cr-skills">
      {{#each skills}}
      <span class="cr-skill-tag" data-entry="skills" data-entry-index="{{@index}}">
        <span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="cr-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
      </span>
      {{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="cr-section">
    <h2 class="cr-section-title">项目经历</h2>
    {{#each projects}}
    <div class="cr-entry">
      <div class="cr-entry-head">
        <div class="cr-meta">
          <span class="cr-entity" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="cr-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
      </div>
      {{#if description}}<div class="cr-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="cr-highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.creative { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #292524; background: #fff; }
/* 头部：实色 ink 块 + 一道砖红强调（取代原紫色渐变，去 slop、回到品牌色） */
.cr-header { padding: 30px 28px 24px; background: #1C1917; color: #fff; border-bottom: 3px solid #B0463A; }
.cr-header h1 { font-size: 28pt; font-weight: 800; letter-spacing: -0.5px; line-height: 1.05; color: #fff; }
.cr-tagline { font-size: 12pt; color: rgba(255,255,255,0.72); margin-top: 6px; font-weight: 400; }
.cr-contacts { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 4px 18px; }
.cr-contact { font-size: 9pt; color: rgba(255,255,255,0.68); letter-spacing: 0.02em; }
.cr-section { padding: 13px 28px; }
/* 区块标题：砖红下划线小标签 */
.cr-section-title { display: inline-block; font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #B0463A; border-bottom: 1.5px solid #B0463A; padding-bottom: 3px; margin-bottom: 11px; }
.cr-entry { margin-bottom: 11px; }
.cr-entry:last-child { margin-bottom: 0; }
.cr-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.cr-meta { display: flex; flex-direction: column; }
.cr-entity { font-size: 11pt; font-weight: 700; color: #1C1917; }
.cr-role { font-size: 9.5pt; color: #78716C; margin-top: 1px; }
.cr-date { font-size: 9pt; color: #A8A29E; white-space: nowrap; flex-shrink: 0; padding-top: 2px; }
.cr-body { font-size: 9.5pt; color: #44403C; margin-top: 4px; }
.cr-highlights { padding-left: 16px; margin-top: 4px; }
.cr-highlights li { font-size: 9.5pt; color: #44403C; margin-bottom: 2px; line-height: 1.5; }
/* 技能：标签胶囊，无进度条 → 长名也不会与任何元素重合 */
.cr-skills { display: flex; flex-wrap: wrap; gap: 6px 8px; }
.cr-skill-tag { display: inline-flex; align-items: baseline; gap: 5px; font-size: 9pt; color: #292524; background: #F7F3EE; border: 1px solid #E7E0D6; border-radius: 4px; padding: 3px 10px; }
.cr-skill-lv { font-size: 8pt; color: #B0463A; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.creative { margin: 0; } @page { size: A4; margin: 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "creative",
          "version": "1.0.0",
          "name": "创意设计",
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
