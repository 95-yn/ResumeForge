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
    slug: 'sales-director',
    name: '销售总监',
    category: 'profession',
    html: `<div class="resume sales-director">
  <header class="sd-header">
    <div class="sd-header-bar"></div>
    <div class="sd-header-main">
      <div class="sd-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="sd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="contact sd-contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}
  <section class="sd-summary">
    <h2><span class="sd-h-mark"></span>个人简介</h2>
    <div class="sd-summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}

  {{#if experience.length}}
  <section class="sd-block" data-section="experience">
    <h2><span class="sd-h-mark"></span>工作经历</h2>
    {{#each experience}}
    <div class="sd-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="sd-entry-head">
        <h3>
          <span class="sd-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="sd-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        <span class="date sd-date">
          <span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>
          <span class="sd-dash">—</span>
          <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>
        </span>
      </div>
      {{#if highlights.length}}
      <ul class="sd-highlights">
        {{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if projects.length}}
  <section class="sd-block" data-section="projects">
    <h2><span class="sd-h-mark"></span>项目经历</h2>
    {{#each projects}}
    <div class="sd-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="sd-entry-head">
        <h3>
          <span class="sd-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="sd-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </h3>
      </div>
      {{#if description}}<div class="sd-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}
      <ul class="sd-highlights">
        {{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if skills.length}}
  <section class="sd-block" data-section="skills">
    <h2><span class="sd-h-mark"></span>专业技能</h2>
    <div class="skills sd-skills">
      {{#each skills}}
      <span class="sd-skill" data-entry="skills" data-entry-index="{{@index}}">
        <span class="sd-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sd-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
      </span>
      {{/each}}
    </div>
  </section>
  {{/if}}

  {{#if education.length}}
  <section class="sd-block" data-section="education">
    <h2><span class="sd-h-mark"></span>教育背景</h2>
    {{#each education}}
    <div class="sd-entry sd-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="sd-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date sd-date">
          <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>
          <span class="sd-dash">—</span>
          <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>
        </span>
      </div>
      <p class="sd-edu-meta">
        <span data-field="education.{{@index}}.area">{{{area}}}</span>
        <span class="sd-edu-sep">·</span>
        <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
      </p>
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>`,
    css: `.resume.sales-director * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.sales-director * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.sales-director {
  --sd-ink: #1c1f26;
  --sd-charcoal: #23272f;
  --sd-charcoal-2: #2c313b;
  --sd-gold: #c9a227;
  --sd-gold-soft: #e0c463;
  --sd-line: #e4e2dc;
  --sd-muted: #6b6f78;
  --sd-paper: #ffffff;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 0 0 18mm 0;
  background: var(--sd-paper);
  color: var(--sd-ink);
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.55;
}

/* ===== Header: 深炭权威条 ===== */
.resume.sales-director .sd-header {
  background: linear-gradient(135deg, #23272f 0%, #1c1f26 100%);
  color: #f4f2ea;
  padding: 13mm 18mm 11mm 18mm;
  position: relative;
}
.resume.sales-director .sd-header-bar {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 6px;
  background: linear-gradient(180deg, var(--sd-gold-soft), var(--sd-gold));
}
.resume.sales-director .sd-header-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10mm;
  flex-wrap: wrap;
}
.resume.sales-director .sd-id h1 {
  font-size: 25pt;
  font-weight: 800;
  letter-spacing: 4px;
  line-height: 1.1;
  color: #fff;
}
.resume.sales-director .sd-title {
  margin-top: 5px;
  font-size: 10.5pt;
  letter-spacing: 2px;
  color: var(--sd-gold-soft);
  font-weight: 600;
}
.resume.sales-director .sd-contact {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.resume.sales-director .sd-contact span {
  font-size: 8.6pt;
  color: #cfd1cc;
  letter-spacing: 0.5px;
  position: relative;
  padding-right: 12px;
}
.resume.sales-director .sd-contact span::after {
  content: '';
  position: absolute;
  right: 0; top: 50%;
  transform: translateY(-50%);
  width: 5px; height: 5px;
  background: var(--sd-gold);
  border-radius: 50%;
}

/* ===== Section 通用 ===== */
.resume.sales-director section {
  padding: 0 18mm;
  margin-top: 8mm;
}
.resume.sales-director h2 {
  font-size: 11.5pt;
  font-weight: 800;
  letter-spacing: 3px;
  color: var(--sd-charcoal);
  display: flex;
  align-items: center;
  gap: 9px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--sd-charcoal);
  margin-bottom: 7px;
}
.resume.sales-director .sd-h-mark {
  display: inline-block;
  width: 16px; height: 16px;
  background: var(--sd-gold);
  position: relative;
  flex: 0 0 auto;
  transform: rotate(45deg);
}
.resume.sales-director .sd-h-mark::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: var(--sd-charcoal);
}

/* ===== Summary: 看板引言 ===== */
.resume.sales-director .sd-summary-body {
  background: #f7f6f2;
  border-left: 4px solid var(--sd-gold);
  padding: 9px 13px;
  font-size: 9.6pt;
  color: #3a3d44;
  line-height: 1.7;
}

/* ===== Entry ===== */
.resume.sales-director .sd-entry {
  padding: 8px 0 9px 0;
  border-bottom: 1px dashed var(--sd-line);
}
.resume.sales-director .sd-entry:last-child { border-bottom: none; }
.resume.sales-director .sd-entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}
.resume.sales-director .sd-entry h3 {
  font-size: 11pt;
  font-weight: 700;
  color: var(--sd-ink);
}
.resume.sales-director .sd-company {
  font-weight: 800;
}
.resume.sales-director .sd-position {
  font-weight: 600;
  color: var(--sd-gold);
  margin-left: 10px;
  font-size: 10pt;
}
.resume.sales-director .sd-position::before {
  content: '|';
  color: var(--sd-line);
  margin-right: 10px;
  font-weight: 400;
}
.resume.sales-director .sd-date {
  font-size: 8.4pt;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  background: var(--sd-charcoal);
  padding: 2px 9px;
  border-radius: 2px;
  white-space: nowrap;
}
.resume.sales-director .sd-dash { margin: 0 2px; color: var(--sd-gold-soft); }

/* ===== Highlights: 业绩条目 ===== */
.resume.sales-director .sd-highlights {
  list-style: none;
  margin-top: 6px;
}
.resume.sales-director .sd-highlights li {
  position: relative;
  padding-left: 17px;
  margin-bottom: 3px;
  font-size: 9.4pt;
  color: #3a3d44;
  line-height: 1.6;
}
.resume.sales-director .sd-highlights li::before {
  content: '';
  position: absolute;
  left: 0; top: 7px;
  width: 7px; height: 7px;
  background: var(--sd-gold);
  transform: rotate(45deg);
}

.resume.sales-director .sd-desc {
  font-size: 9.4pt;
  color: #3a3d44;
  margin-top: 3px;
  line-height: 1.6;
}

/* ===== Skills: 标签看板 ===== */
.resume.sales-director .sd-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 3px;
}
.resume.sales-director .sd-skill {
  display: inline-flex;
  align-items: stretch;
  border: 1px solid var(--sd-charcoal);
  border-radius: 2px;
  overflow: hidden;
  font-size: 8.8pt;
}
.resume.sales-director .sd-skill-name {
  padding: 3px 9px;
  font-weight: 700;
  color: var(--sd-charcoal);
}
.resume.sales-director .sd-skill-level {
  padding: 3px 8px;
  background: var(--sd-charcoal);
  color: var(--sd-gold-soft);
  font-weight: 600;
}

/* ===== Education ===== */
.resume.sales-director .sd-edu-meta {
  font-size: 9.2pt;
  color: var(--sd-muted);
  margin-top: 2px;
}
.resume.sales-director .sd-edu-sep { color: var(--sd-gold); margin: 0 5px; }

/* ===== 契约保护 ===== */
.resume.sales-director li p,
.resume.sales-director li div { margin: 0; padding: 0; display: inline; }
.resume.sales-director .skills span,
.resume.sales-director [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print {
  .resume.sales-director { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; }
}`,
    schema: {
      "templateId": "sales-director",
      "version": "1.0.0",
      "name": "销售总监",
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
