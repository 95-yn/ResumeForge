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
    slug: 'cs-manager',
    name: '客服管理',
    category: 'profession',
    html: `<div class="resume cs-manager">
  <header class="cs-header">
    <div class="cs-header-bar"></div>
    <div class="cs-header-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="cs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact cs-contact">
        {{#if basics.email}}<span class="cs-chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="cs-chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="cs-chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}
  <section class="cs-section">
    <h2 class="cs-section-title"><span class="cs-tick"></span>个人简介</h2>
    <div class="cs-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}

  {{#if experience.length}}
  <section class="cs-section" data-section="experience">
    <h2 class="cs-section-title"><span class="cs-tick"></span>工作经历</h2>
    {{#each experience}}
    <div class="cs-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="cs-entry-head">
        <h3 class="cs-entry-title"><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="cs-dot"></span><span class="cs-role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date cs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if skills.length}}
  <section class="cs-section" data-section="skills">
    <h2 class="cs-section-title"><span class="cs-tick"></span>专业技能</h2>
    <div class="skills cs-skills">
      {{#each skills}}
      <span class="cs-kpi" data-entry="skills" data-entry-index="{{@index}}">
        <span class="cs-kpi-label"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="cs-kpi-level"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>
        <span class="cs-kpi-bar"><span class="cs-kpi-fill"></span></span>
      </span>
      {{/each}}
    </div>
  </section>
  {{/if}}

  {{#if education.length}}
  <section class="cs-section" data-section="education">
    <h2 class="cs-section-title"><span class="cs-tick"></span>教育背景</h2>
    {{#each education}}
    <div class="cs-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="cs-entry-head">
        <h3 class="cs-entry-title" data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date cs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="cs-sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if projects.length}}
  <section class="cs-section" data-section="projects">
    <h2 class="cs-section-title"><span class="cs-tick"></span>项目经历</h2>
    {{#each projects}}
    <div class="cs-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="cs-entry-head">
        <h3 class="cs-entry-title"><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="cs-dot"></span><span class="cs-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="cs-sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>`,
    css: `.resume.cs-manager * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.cs-manager * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.cs-manager {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 0 0 18mm;
  background: #fff;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.5;
  color: #1f2a44;
}

/* ===== Header: deep navy band with orange left rail ===== */
.resume.cs-manager .cs-header {
  display: flex;
  background: linear-gradient(135deg, #0d2444 0%, #163a66 100%);
  color: #fff;
  padding: 14mm 18mm 11mm;
  position: relative;
}
.resume.cs-manager .cs-header-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 7px;
  background: #f5841f;
}
.resume.cs-manager .cs-header-main { width: 100%; }
.resume.cs-manager .cs-header h1 {
  font-size: 23pt;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.15;
  color: #fff;
}
.resume.cs-manager .cs-title {
  margin-top: 5px;
  font-size: 10.5pt;
  font-weight: 500;
  color: #f5a04a;
  letter-spacing: 1px;
}
.resume.cs-manager .cs-contact {
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
}
.resume.cs-manager .cs-chip {
  display: inline-block;
  font-size: 8.8pt;
  color: #d9e2f0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(245, 132, 31, 0.45);
  padding: 2px 10px;
  border-radius: 3px;
}

/* ===== Sections ===== */
.resume.cs-manager .cs-section {
  padding: 0 18mm;
  margin-top: 13px;
}
.resume.cs-manager .cs-section-title {
  display: flex;
  align-items: center;
  font-size: 11pt;
  font-weight: 700;
  color: #0d2444;
  letter-spacing: 1px;
  padding-bottom: 5px;
  margin-bottom: 9px;
  border-bottom: 2px solid #163a66;
}
.resume.cs-manager .cs-tick {
  display: inline-block;
  width: 4px;
  height: 14px;
  background: #f5841f;
  margin-right: 8px;
  border-radius: 1px;
}

.resume.cs-manager .cs-summary {
  font-size: 9.5pt;
  color: #3a4763;
  line-height: 1.65;
  background: #f5f7fb;
  border-left: 3px solid #f5841f;
  padding: 8px 12px;
  border-radius: 0 4px 4px 0;
}

/* ===== Entries: management dashboard feel ===== */
.resume.cs-manager .cs-entry {
  padding: 7px 0 7px 12px;
  border-left: 2px solid #e2e8f3;
  margin-bottom: 6px;
  position: relative;
}
.resume.cs-manager .cs-entry::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 11px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f5841f;
  border: 1.5px solid #fff;
}
.resume.cs-manager .cs-entry:last-child { margin-bottom: 0; }

.resume.cs-manager .cs-entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}
.resume.cs-manager .cs-entry-title {
  font-size: 10.5pt;
  font-weight: 700;
  color: #0d2444;
  flex: 1;
}
.resume.cs-manager .cs-dot {
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #f5841f;
  vertical-align: middle;
  margin: 0 7px;
}
.resume.cs-manager .cs-role {
  font-weight: 500;
  color: #2f6db5;
}
.resume.cs-manager .cs-date {
  font-size: 8.8pt;
  font-weight: 600;
  color: #fff;
  background: #163a66;
  padding: 1px 9px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.cs-manager .cs-sub {
  font-size: 9.2pt;
  color: #5a6party;
  color: #56617a;
  margin-top: 3px;
}
.resume.cs-manager .cs-list {
  margin-top: 5px;
  padding-left: 16px;
  list-style: none;
}
.resume.cs-manager .cs-list li {
  font-size: 9.5pt;
  color: #3a4763;
  line-height: 1.55;
  margin-bottom: 3px;
  position: relative;
}
.resume.cs-manager .cs-list li::before {
  content: "";
  position: absolute;
  left: -13px;
  top: 7px;
  width: 5px;
  height: 5px;
  background: #f5841f;
  border-radius: 1px;
  transform: rotate(45deg);
}

/* ===== KPI skill bars ===== */
.resume.cs-manager .cs-skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 18px;
}
.resume.cs-manager .cs-kpi {
  display: block;
}
.resume.cs-manager .cs-kpi-label {
  display: block;
  font-size: 9.3pt;
  font-weight: 600;
  color: #0d2444;
  margin-bottom: 3px;
}
.resume.cs-manager .cs-kpi-level { font-weight: 500; color: #f5841f; }
.resume.cs-manager .cs-kpi-bar {
  display: block;
  height: 6px;
  background: #e2e8f3;
  border-radius: 3px;
  overflow: hidden;
}
.resume.cs-manager .cs-kpi-fill {
  display: block;
  height: 100%;
  width: 82%;
  background: linear-gradient(90deg, #163a66 0%, #f5841f 100%);
  border-radius: 3px;
}

.resume.cs-manager li p, .resume.cs-manager li div { margin: 0; padding: 0; display: inline; }
.resume.cs-manager .skills span, .resume.cs-manager [class*='skill'] span { white-space: nowrap; word-break: keep-all; }
.resume.cs-manager .cs-kpi-label span { white-space: normal; }

@media print {
  .resume.cs-manager { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; }
}`,
    schema: {
      "templateId": "cs-manager",
      "version": "1.0.0",
      "name": "客服管理",
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
