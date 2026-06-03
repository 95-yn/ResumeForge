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
    slug: 'ledger',
    name: '账簿风',
    category: 'business',
    html: `<div class="resume ledger">
  <header class="lg-header">
    <div class="lg-head-rule"></div>
    <div class="lg-head-inner">
      <div class="lg-head-main">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="lg-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="lg-head-meta">
        {{#if basics.email}}<span class="lg-meta-row"><span class="lg-meta-k">EMAIL</span><span class="lg-meta-v" data-field="basics.email">{{{basics.email}}}</span></span>{{/if}}
        {{#if basics.phone}}<span class="lg-meta-row"><span class="lg-meta-k">TEL</span><span class="lg-meta-v" data-field="basics.phone">{{{basics.phone}}}</span></span>{{/if}}
        {{#if basics.location}}<span class="lg-meta-row"><span class="lg-meta-k">LOC</span><span class="lg-meta-v" data-field="basics.location">{{{basics.location}}}</span></span>{{/if}}
      </div>
    </div>
    <div class="lg-head-rule lg-head-rule-d"></div>
  </header>

  {{#if basics.summary}}
  <section class="lg-section">
    <h2 class="lg-section-title"><span class="lg-no">00</span>个人简介<span class="lg-tail"></span></h2>
    <div class="lg-summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}

  {{#if experience.length}}
  <section class="lg-section" data-section="experience">
    <h2 class="lg-section-title"><span class="lg-no">01</span>工作经历<span class="lg-tail"></span></h2>
    <div class="lg-ledger">
      {{#each experience}}
      <div class="lg-row" data-entry="experience" data-entry-index="{{@index}}">
        <div class="lg-row-head">
          <span class="lg-row-label">
            <span class="lg-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="lg-dot">/</span>
            <span class="lg-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </span>
          <span class="lg-amount date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="lg-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
  </section>
  {{/if}}

  {{#if education.length}}
  <section class="lg-section" data-section="education">
    <h2 class="lg-section-title"><span class="lg-no">02</span>教育背景<span class="lg-tail"></span></h2>
    <div class="lg-ledger">
      {{#each education}}
      <div class="lg-row" data-entry="education" data-entry-index="{{@index}}">
        <div class="lg-row-head">
          <span class="lg-row-label">
            <span class="lg-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
            <span class="lg-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          </span>
          <span class="lg-amount date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
      </div>
      {{/each}}
    </div>
  </section>
  {{/if}}

  {{#if skills.length}}
  <section class="lg-section" data-section="skills">
    <h2 class="lg-section-title"><span class="lg-no">03</span>专业技能<span class="lg-tail"></span></h2>
    <div class="skills lg-skills">
      {{#each skills}}<span class="lg-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="lg-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="lg-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}

  {{#if projects.length}}
  <section class="lg-section" data-section="projects">
    <h2 class="lg-section-title"><span class="lg-no">04</span>项目经历<span class="lg-tail"></span></h2>
    <div class="lg-ledger">
      {{#each projects}}
      <div class="lg-row" data-entry="projects" data-entry-index="{{@index}}">
        <div class="lg-row-head">
          <span class="lg-row-label">
            <span class="lg-org" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="lg-dot">/</span><span class="lg-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </span>
        </div>
        {{#if description}}<div class="lg-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="lg-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
  </section>
  {{/if}}
</div>`,
    css: `.resume.ledger * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.ledger * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.ledger {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 17mm;
  background: #f6f1e4;
  background-image: linear-gradient(to bottom, rgba(120,90,50,0.045) 1px, transparent 1px);
  background-size: 100% 2.05em;
  background-position: 0 0;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 10pt;
  line-height: 1.5;
  color: #2c2620;
}

.resume.ledger .date,
.resume.ledger .lg-no,
.resume.ledger .lg-meta-k {
  font-family: "Courier New", "Consolas", monospace;
}

/* ===== HEADER ===== */
.resume.ledger .lg-header { margin-bottom: 16px; }
.resume.ledger .lg-head-rule { height: 2px; background: #5b4a32; }
.resume.ledger .lg-head-rule-d {
  height: 3px;
  background: transparent;
  border-top: 1px solid #5b4a32;
  border-bottom: 1px solid #5b4a32;
}
.resume.ledger .lg-head-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 12px 4px 10px;
}
.resume.ledger .lg-head-main h1 {
  font-size: 25pt;
  font-weight: 800;
  letter-spacing: 4px;
  color: #1f1a13;
  line-height: 1.1;
}
.resume.ledger .lg-title {
  font-size: 10.5pt;
  letter-spacing: 3px;
  color: #7a6b4f;
  margin-top: 6px;
  text-transform: uppercase;
}
.resume.ledger .lg-head-meta {
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: right;
  border-left: 1px solid #c9bb9d;
  padding-left: 14px;
}
.resume.ledger .lg-meta-row {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: 8px;
  font-size: 9pt;
}
.resume.ledger .lg-meta-k {
  font-size: 7.5pt;
  letter-spacing: 1px;
  color: #a08e6c;
  min-width: 38px;
  text-align: right;
}
.resume.ledger .lg-meta-v { color: #3a3225; }

/* ===== SECTION ===== */
.resume.ledger .lg-section { margin-bottom: 15px; break-inside: avoid; }
.resume.ledger .lg-section-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 11pt;
  font-weight: 700;
  letter-spacing: 3px;
  color: #4a3c28;
  padding-bottom: 5px;
  margin-bottom: 9px;
  border-bottom: 1.5px solid #5b4a32;
}
.resume.ledger .lg-no {
  display: inline-block;
  font-size: 8.5pt;
  font-weight: 700;
  color: #f6f1e4;
  background: #5b4a32;
  padding: 2px 5px;
  letter-spacing: 1px;
}
.resume.ledger .lg-tail {
  flex: 1;
  height: 0;
  border-top: 1px dotted #b6a684;
}

.resume.ledger .lg-summary {
  font-size: 10pt;
  color: #3a3225;
  text-align: justify;
  padding: 2px;
}

/* ===== LEDGER ROWS ===== */
.resume.ledger .lg-ledger {
  border-top: 1px solid #cdbf9f;
}
.resume.ledger .lg-row {
  padding: 7px 4px 8px;
  border-bottom: 1px solid #cdbf9f;
  break-inside: avoid;
}
.resume.ledger .lg-row-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}
.resume.ledger .lg-row-label {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
}
.resume.ledger .lg-org {
  font-size: 11pt;
  font-weight: 700;
  color: #251f16;
}
.resume.ledger .lg-dot { color: #b09a72; font-weight: 400; }
.resume.ledger .lg-pos { font-size: 10pt; color: #6b5c40; }
.resume.ledger .lg-edu-meta { font-size: 9.5pt; color: #6b5c40; }
.resume.ledger .lg-amount {
  font-size: 9pt;
  color: #5b4a32;
  white-space: nowrap;
  letter-spacing: 0.5px;
  padding: 1px 6px;
  border: 1px solid #cdbf9f;
  background: rgba(255,255,255,0.35);
}

.resume.ledger .lg-list {
  list-style: none;
  margin-top: 6px;
  padding-left: 0;
}
.resume.ledger .lg-list li {
  position: relative;
  font-size: 10pt;
  color: #3a3225;
  padding-left: 16px;
  margin-bottom: 3px;
  line-height: 1.5;
}
.resume.ledger .lg-list li::before {
  content: "·";
  position: absolute;
  left: 4px;
  top: -1px;
  color: #8a7551;
  font-weight: 700;
}
.resume.ledger .lg-desc {
  font-size: 10pt;
  color: #3a3225;
  margin-top: 5px;
  text-align: justify;
}

/* ===== SKILLS ===== */
.resume.ledger .lg-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.resume.ledger .lg-skill {
  display: inline-flex;
  align-items: stretch;
  font-size: 9pt;
  border: 1px solid #b6a684;
  background: rgba(255,255,255,0.4);
}
.resume.ledger .lg-skill-name {
  padding: 3px 9px;
  color: #2c2620;
  font-weight: 600;
}
.resume.ledger .lg-skill-lv {
  padding: 3px 8px;
  color: #f6f1e4;
  background: #5b4a32;
  font-size: 8.5pt;
}

.resume.ledger li p, .resume.ledger li div { margin: 0; padding: 0; display: inline; }
.resume.ledger .skills span, .resume.ledger [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print {
  .resume.ledger { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; }
}`,
    schema: {
      "templateId": "ledger",
      "version": "1.0.0",
      "name": "账簿风",
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
