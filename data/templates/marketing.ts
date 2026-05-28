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
    slug: 'marketing',
    name: '市场营销',
    category: 'creative',
    html: `<div class="resume marketing">
  <header class="mk-header">
    <div class="mk-header-bg">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="mk-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="mk-contacts">
        {{#if basics.email}}<span class="mk-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="mk-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="mk-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="mk-body">
    <div class="mk-main">
      {{#if basics.summary}}
      <section class="mk-section">
        <h2 class="mk-section-title">个人简介</h2>
        <div class="mk-text" data-field="basics.summary">{{{basics.summary}}}</div>
      </section>
      {{/if}}
      {{#if experience.length}}
      <section class="mk-section" data-section="experience">
        <h2 class="mk-section-title">工作经历</h2>
        {{#each experience}}
        <div class="mk-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="mk-entry-head">
            <div>
              <span class="mk-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
              <span class="mk-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
            </div>
            <span class="mk-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul class="mk-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if projects.length}}
      <section class="mk-section" data-section="projects">
        <h2 class="mk-section-title">营销案例</h2>
        {{#each projects}}
        <div class="mk-entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="mk-entry-head">
            <span class="mk-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="mk-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          {{#if description}}<div class="mk-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="mk-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div class="mk-side">
      {{#if education.length}}
      <section class="mk-section" data-section="education">
        <h2 class="mk-section-title">教育背景</h2>
        {{#each education}}
        <div class="mk-edu" data-entry="education" data-entry-index="{{@index}}">
          <strong data-field="education.{{@index}}.institution">{{{institution}}}</strong>
          <span data-field="education.{{@index}}.area">{{{area}}}</span>
          <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
          <span class="mk-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
      {{#if skills.length}}
      <section class="mk-section" data-section="skills">
        <h2 class="mk-section-title">专业技能</h2>
        {{#each skills}}
        <div class="mk-skill-bar" data-entry="skills" data-entry-index="{{@index}}">
          <span class="mk-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>
          {{#if level}}<span class="mk-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
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
.resume.marketing { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #1a2233; background: #fff; }
.mk-header-bg { background: linear-gradient(135deg, #DBEAFE 0%, #DCFCE7 100%); padding: 18mm 22mm 16mm; }
.mk-header-bg h1 { font-size: 24pt; font-weight: 800; color: #1E3A5F; }
.mk-title { font-size: 11pt; color: #2D6A4F; margin-top: 4px; font-weight: 500; }
.mk-contacts { margin-top: 10px; display: flex; gap: 16px; flex-wrap: wrap; }
.mk-contact { font-size: 9pt; color: #374151; }
.mk-body { display: flex; gap: 0; padding: 0 22mm; }
.mk-main { flex: 2; padding-right: 20px; padding-top: 16px; }
.mk-side { flex: 1; padding-left: 20px; padding-top: 16px; border-left: 1px solid #E5E7EB; }
.mk-section { margin-bottom: 16px; }
.mk-section-title { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #1E3A5F; border-bottom: 2px solid #BFDBFE; padding-bottom: 4px; margin-bottom: 10px; }
.mk-entry { margin-bottom: 12px; }
.mk-entry-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
.mk-company { display: block; font-size: 10.5pt; font-weight: 700; color: #1a2233; }
.mk-position { display: block; font-size: 9.5pt; color: #4B5563; }
.mk-date { font-size: 9pt; color: #6B7280; white-space: nowrap; }
.mk-text { font-size: 9.5pt; color: #374151; margin-top: 4px; }
.mk-list { margin-top: 5px; padding-left: 16px; }
.mk-list li { font-size: 9.5pt; color: #374151; margin-bottom: 3px; }
.mk-edu { display: flex; flex-direction: column; gap: 2px; margin-bottom: 10px; font-size: 9.5pt; }
.mk-edu strong { color: #1a2233; }
.mk-skill-bar { display: flex; justify-content: space-between; font-size: 9.5pt; padding: 5px 0; border-bottom: 1px solid #F3F4F6; }
.mk-skill-name { color: #1a2233; font-weight: 500; }
.mk-skill-level { color: #059669; font-size: 9pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.marketing { margin: 0; } .mk-header-bg { padding: 16mm 20mm 14mm; } .mk-body { padding: 0 20mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "marketing",
          "version": "1.0.0",
          "name": "市场营销",
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
