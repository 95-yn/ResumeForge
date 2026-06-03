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
    slug: 'banking',
    name: '金融行业',
    category: 'business',
    html: `<div class="resume banking">
  <header class="bk-header">
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="bk-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="bk-divider"></div>
    <div class="bk-contacts">
      {{#if basics.email}}<span class="bk-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="bk-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="bk-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="bk-section">
    <h2 class="bk-section-title">个人陈述</h2>
    <div class="bk-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="bk-section" data-section="experience">
    <h2 class="bk-section-title">工作经历</h2>
    {{#each experience}}
    <div class="bk-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="bk-entry-top">
        <span class="bk-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="bk-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="bk-position" data-field="experience.{{@index}}.position">{{{position}}}</p>
      {{#if highlights.length}}<ul class="bk-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="bk-section" data-section="education">
    <h2 class="bk-section-title">教育背景</h2>
    {{#each education}}
    <div class="bk-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="bk-entry-top">
        <span class="bk-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="bk-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="bk-position"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="bk-section" data-section="skills">
    <h2 class="bk-section-title">专业技能</h2>
    <div class="bk-skills">
      {{#each skills}}<div class="bk-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} — <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</div>{{/each}}
    </div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="bk-section" data-section="projects">
    <h2 class="bk-section-title">主要项目</h2>
    {{#each projects}}
    <div class="bk-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="bk-entry-top">
        <span class="bk-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="bk-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="bk-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="bk-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.banking { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 22mm 22mm; font-family: "Times New Roman", "Georgia", "SimSun", "PingFang SC", "Microsoft YaHei", serif; font-size: 10.5pt; line-height: 1.65; color: #1a1a1a; background: #fff; }
.bk-header { text-align: center; margin-bottom: 22px; }
.bk-header h1 { font-size: 25pt; font-weight: 700; color: #111; letter-spacing: 4px; font-family: "Times New Roman", serif; }
.bk-title { font-size: 11pt; color: #555; margin-top: 6px; font-style: italic; letter-spacing: 1px; }
.bk-divider { display: flex; align-items: center; justify-content: center; gap: 9px; width: 62%; margin: 12px auto 0; }
.bk-divider::before, .bk-divider::after { content: ""; height: 1px; flex: 1; background: #222; }
.bk-divider::before { box-shadow: 0 3px 0 -2px #222; }
.bk-divider::after { box-shadow: 0 3px 0 -2px #222; }
.bk-contacts { display: flex; justify-content: center; gap: 20px; font-size: 9.5pt; color: #444; margin-top: 10px; }
.bk-section { margin-bottom: 16px; }
.bk-section-title { font-size: 10.5pt; font-weight: 700; color: #111; text-transform: uppercase; letter-spacing: 2.5px; border-bottom: 1px solid #222; padding-bottom: 4px; margin-bottom: 10px; font-family: "Times New Roman", serif; }
.bk-entry { margin-bottom: 12px; }
.bk-entry-top { display: flex; justify-content: space-between; align-items: baseline; }
.bk-company { font-size: 11pt; font-weight: 700; color: #111; }
.bk-date { font-size: 9.5pt; color: #555; }
.bk-position { font-size: 10pt; color: #444; margin-top: 2px; font-style: italic; }
.bk-body { font-size: 10pt; color: #333; margin-top: 5px; text-align: justify; }
.bk-list { margin-top: 5px; padding-left: 20px; }
.bk-list li { font-size: 10pt; margin-bottom: 3px; color: #333; }
.bk-skills { columns: 2; column-gap: 40px; }
.bk-skill { font-size: 10pt; color: #333; margin-bottom: 5px; break-inside: avoid; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.banking { margin: 0; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
      "templateId": "banking",
      "version": "1.0.0",
      "name": "金融行业",
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
