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
    slug: 'media',
    name: '新媒体运营',
    category: 'creative',
    html: `<div class="resume media">
  <header class="md-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="md-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="md-contacts">
      {{#if basics.email}}<span class="md-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="md-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="md-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="md-content">
    {{#if basics.summary}}
    <section class="md-card">
      <h2 class="md-card-title">关于我</h2>
      <div class="md-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="md-card" data-section="experience">
      <h2 class="md-card-title">工作经历</h2>
      {{#each experience}}
      <div class="md-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="md-entry-head">
          <div>
            <span class="md-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="md-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="md-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="md-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="md-card" data-section="projects">
      <h2 class="md-card-title">内容作品</h2>
      {{#each projects}}
      <div class="md-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="md-entry-head">
          <span class="md-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="md-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="md-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="md-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    <div class="md-two-col">
      {{#if education.length}}
      <section class="md-card" data-section="education">
        <h2 class="md-card-title">教育背景</h2>
        {{#each education}}
        <div class="md-edu" data-entry="education" data-entry-index="{{@index}}">
          <strong data-field="education.{{@index}}.institution">{{{institution}}}</strong>
          <span><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="md-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="md-card" data-section="skills">
        <h2 class="md-card-title">专业技能</h2>
        <div class="md-tags">
          {{#each skills}}<span class="md-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.media { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "PingFang SC", "Helvetica Neue", "Arial", sans-serif; font-size: 10pt; line-height: 1.65; color: #111827; background: #F9FAFB; }
.md-header { background: #111827; color: #fff; padding: 20mm 22mm 14mm; }
.md-header h1 { font-size: 22pt; font-weight: 800; color: #fff; }
.md-title { font-size: 10.5pt; color: rgba(255,255,255,0.65); margin-top: 4px; }
.md-contacts { margin-top: 10px; display: flex; gap: 14px; flex-wrap: wrap; }
.md-contact { font-size: 9pt; color: rgba(255,255,255,0.55); }
.md-content { padding: 16px 22mm 22mm; }
.md-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; }
.md-card-title { font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #374151; margin-bottom: 10px; }
.md-entry { margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #F3F4F6; }
.md-entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.md-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
.md-org { display: block; font-size: 10.5pt; font-weight: 700; color: #111827; }
.md-pos { display: block; font-size: 9.5pt; color: #6B7280; }
.md-date { font-size: 9pt; color: #9CA3AF; white-space: nowrap; }
.md-text { font-size: 9.5pt; color: #374151; }
.md-list { margin-top: 5px; padding-left: 16px; }
.md-list li { font-size: 9.5pt; color: #374151; margin-bottom: 3px; }
.md-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.md-edu { display: flex; flex-direction: column; gap: 2px; font-size: 9.5pt; margin-bottom: 8px; }
.md-edu strong { color: #111827; }
.md-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.md-tag { background: #F3F4F6; color: #374151; padding: 3px 10px; border-radius: 20px; font-size: 9pt; border: 1px solid #E5E7EB; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.media { margin: 0; background: #fff; } .md-header { padding: 18mm 20mm 12mm; } .md-content { padding: 14px 20mm 18mm; } .md-card { box-shadow: none; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "media",
          "version": "1.0.0",
          "name": "新媒体运营",
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
