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
    slug: 'manager',
    name: '项目经理',
    category: 'business',
    html: `<div class="resume manager">
  <header class="mg-header">
    <div class="mg-header-top">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="mg-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="mg-contacts">
      {{#if basics.email}}<span class="mg-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="mg-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="mg-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="mg-section">
    <h2 class="mg-section-title">职业概述</h2>
    <div class="mg-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="mg-section" data-section="experience">
    <h2 class="mg-section-title">工作经历</h2>
    {{#each experience}}
    <div class="mg-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="mg-timeline-dot"></div>
      <div class="mg-entry-content">
        <div class="mg-entry-head">
          <div>
            <span class="mg-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="mg-sep"> · </span>
            <span class="mg-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="mg-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="mg-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="mg-section" data-section="projects">
    <h2 class="mg-section-title">项目经历</h2>
    {{#each projects}}
    <div class="mg-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="mg-timeline-dot"></div>
      <div class="mg-entry-content">
        <div class="mg-entry-head">
          <span class="mg-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="mg-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="mg-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="mg-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  <div class="mg-two-col">
    <div class="mg-col">
      {{#if education.length}}
      <section class="mg-section" data-section="education">
        <h2 class="mg-section-title">教育背景</h2>
        {{#each education}}
        <div class="mg-edu" data-entry="education" data-entry-index="{{@index}}">
          <span class="mg-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="mg-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="mg-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </section>
      {{/if}}
    </div>
    <div class="mg-col">
      {{#if skills.length}}
      <section class="mg-section" data-section="skills">
        <h2 class="mg-section-title">专业技能</h2>
        <div class="mg-skills">
          {{#each skills}}<div class="mg-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="mg-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
        </div>
      </section>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.manager { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 18mm 22mm; font-family: "Helvetica Neue", "Arial", "PingFang SC", sans-serif; font-size: 10pt; line-height: 1.6; color: #1E293B; background: #F8FAFC; }
.mg-header { background: #fff; border-left: 1px solid #475569; padding: 14px 18px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
.mg-header-top h1 { font-size: 22pt; font-weight: 700; color: #0F172A; }
.mg-title { font-size: 10.5pt; color: #475569; margin-top: 3px; }
.mg-contacts { margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; }
.mg-contact { font-size: 9pt; color: #64748B; }
.mg-section { margin-bottom: 14px; }
.mg-section-title { font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #fff; background: #475569; padding: 3px 10px; margin-bottom: 10px; display: inline-block; }
.mg-entry { display: flex; gap: 12px; margin-bottom: 10px; position: relative; }
.mg-timeline-dot { width: 10px; height: 10px; border-radius: 50%; background: #475569; border: 2px solid #CBD5E1; flex-shrink: 0; margin-top: 4px; }
.mg-entry-content { flex: 1; background: #fff; padding: 8px 12px; border-radius: 4px; border: 1px solid #E2E8F0; }
.mg-entry-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px; }
.mg-company { font-size: 10.5pt; font-weight: 700; color: #1E293B; }
.mg-sep { color: #94A3B8; }
.mg-position { font-size: 9.5pt; color: #475569; }
.mg-date { font-size: 9pt; color: #94A3B8; white-space: nowrap; }
.mg-body { font-size: 9.5pt; color: #475569; margin-top: 4px; }
.mg-list { margin-top: 5px; padding-left: 16px; }
.mg-list li { font-size: 9.5pt; color: #475569; margin-bottom: 3px; }
.mg-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.mg-edu { display: flex; flex-direction: column; gap: 1px; margin-bottom: 8px; }
.mg-pos { font-size: 9pt; color: #64748B; }
.mg-skills { display: flex; flex-direction: column; gap: 4px; }
.mg-skill { display: flex; justify-content: space-between; font-size: 9.5pt; padding: 4px 0; border-bottom: 1px solid #E2E8F0; }
.mg-level { color: #475569; font-size: 9pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.manager { margin: 0;  background: #fff; } .mg-entry-content { box-shadow: none; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
          "templateId": "manager",
          "version": "1.0.0",
          "name": "项目经理",
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
