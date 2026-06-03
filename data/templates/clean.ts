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
    slug: 'clean',
    name: '纯净简洁',
    category: 'minimal',
    html: `<div class="resume clean">
  <header class="cl-header">
    <div class="cl-name-row">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="cl-subtitle" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="cl-contacts">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="cl-section">
    <div class="cl-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="cl-section" data-section="experience">
    <h2 class="cl-heading"><span class="cl-h-txt">工作经历</span></h2>
    {{#each experience}}
    <div class="cl-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="cl-row">
        <span class="cl-main" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="cl-side"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="cl-sub" data-field="experience.{{@index}}.position">{{{position}}}</p>
      {{#if highlights.length}}<ul class="cl-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="cl-section" data-section="education">
    <h2 class="cl-heading"><span class="cl-h-txt">教育背景</span></h2>
    {{#each education}}
    <div class="cl-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="cl-row">
        <span class="cl-main" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="cl-side"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="cl-sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="cl-section" data-section="skills">
    <h2 class="cl-heading"><span class="cl-h-txt">专业技能</span></h2>
    <p class="cl-skills-line">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} (<span data-field="skills.{{@index}}.level">{{{level}}}</span>){{/if}}{{#unless @last}}  ·  {{/unless}}{{/each}}</p>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="cl-section" data-section="projects">
    <h2 class="cl-heading"><span class="cl-h-txt">项目经历</span></h2>
    {{#each projects}}
    <div class="cl-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="cl-row">
        <span class="cl-main" data-field="projects.{{@index}}.name">{{{name}}}</span>
        <span class="cl-side"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if role}}<p class="cl-sub" data-field="projects.{{@index}}.role">{{{role}}}</p>{{/if}}
      {{#if description}}<div class="cl-sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="cl-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.clean {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #111;
  background: #fff;
}

/* Header — name baseline-aligned with subtitle, ruled below */
.cl-header { margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #000; }

.cl-name-row { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }

.cl-header h1 {
  font-size: 21pt;
  font-weight: 800;
  color: #000;
  line-height: 1.1;
  letter-spacing: -0.4px;
}

.cl-subtitle {
  font-size: 10pt;
  color: #6B6B6B;
  font-weight: 500;
}

.cl-contacts {
  margin-top: 8px;
  font-size: 9pt;
  color: #6B6B6B;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Section */
.cl-section { margin-bottom: 14px; }

.cl-summary {
  font-size: 10pt;
  color: #333;
  line-height: 1.7;
}

/* Heading — small-caps label with a thin baseline rule running to the edge */
.cl-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 9px;
}

.cl-heading .cl-h-txt {
  font-size: 9pt;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
  white-space: nowrap;
}

.cl-heading::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #E2E2E2;
}

/* Entry */
.cl-entry { margin-bottom: 9px; }
.cl-entry:last-child { margin-bottom: 0; }

.cl-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.cl-main {
  font-size: 10.5pt;
  font-weight: 700;
  color: #000;
  flex: 1;
}

.cl-side {
  font-size: 9pt;
  color: #999;
  white-space: nowrap;
  flex-shrink: 0;
}

.cl-sub {
  font-size: 9.5pt;
  color: #57534E;
  margin-top: 1px;
}

.cl-list {
  margin-top: 4px;
  padding-left: 16px;
}

.cl-list li {
  font-size: 9.5pt;
  color: #333;
  margin-bottom: 2px;
  line-height: 1.55;
}

.cl-skills-line {
  font-size: 9.5pt;
  color: #333;
  line-height: 1.8;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.clean { margin: 0; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
      "templateId": "clean",
      "version": "1.0.0",
      "name": "纯净简洁",
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
