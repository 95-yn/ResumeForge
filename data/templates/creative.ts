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
    <div class="cr-skills-grid">
      {{#each skills}}
      <div class="cr-skill-row">
        <span class="cr-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>
        <div class="cr-skill-bar">
          <div class="cr-skill-fill cr-level-{{{level}}}"></div>
        </div>
        <span class="cr-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>
      </div>
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
.resume.creative { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1F2937; background: #fff; }
.cr-header { padding: 24px 28px 20px; background: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%); color: #fff; }
.cr-header h1 { font-size: 26pt; font-weight: 900; letter-spacing: -0.5px; color: #fff; }
.cr-tagline { font-size: 12pt; color: rgba(255,255,255,0.8); margin-top: 4px; font-weight: 300; }
.cr-contacts { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 4px 16px; }
.cr-contact { font-size: 9pt; color: rgba(255,255,255,0.75); }
.cr-section { padding: 12px 28px; }
.cr-section-title { display: inline-block; font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; background: #7C3AED; color: #fff; padding: 2px 10px; border-radius: 2px; margin-bottom: 10px; }
.cr-entry { margin-bottom: 10px; }
.cr-entry:last-child { margin-bottom: 0; }
.cr-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.cr-meta { display: flex; flex-direction: column; }
.cr-entity { font-size: 11pt; font-weight: 700; color: #111827; }
.cr-role { font-size: 9.5pt; color: #6B7280; margin-top: 1px; }
.cr-date { font-size: 9pt; color: #9CA3AF; white-space: nowrap; margin-left: 12px; padding-top: 2px; }
.cr-body { font-size: 9.5pt; color: #4B5563; margin-top: 4px; }
.cr-highlights { padding-left: 16px; margin-top: 4px; }
.cr-highlights li { font-size: 9.5pt; color: #374151; margin-bottom: 2px; }
.cr-skills-grid { display: flex; flex-direction: column; gap: 8px; }
.cr-skill-row { display: flex; align-items: center; gap: 10px; }
.cr-skill-name { width: 80px; font-size: 9.5pt; font-weight: 600; color: #374151; flex-shrink: 0; }
.cr-skill-bar { flex: 1; height: 6px; background: #E5E7EB; border-radius: 3px; overflow: hidden; }
.cr-skill-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #7C3AED, #4F46E5); }
.cr-level-精通 .cr-skill-fill, .cr-skill-fill.cr-level-精通 { width: 95%; }
.cr-level-掌握 .cr-skill-fill, .cr-skill-fill.cr-level-掌握 { width: 75%; }
.cr-level-熟悉 .cr-skill-fill, .cr-skill-fill.cr-level-熟悉 { width: 55%; }
.cr-level-了解 .cr-skill-fill, .cr-skill-fill.cr-level-了解 { width: 35%; }
.cr-skill-fill { width: 60%; }
.cr-skill-level { width: 30px; font-size: 8.5pt; color: #9CA3AF; flex-shrink: 0; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.creative { margin: 0; } }


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
