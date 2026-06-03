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
    slug: 'product-designer',
    name: '产品设计',
    category: 'profession',
    html: `<div class="resume product-designer">
  <div class="grid">
    <aside class="rail">
      <header class="id-card">
        <span class="spec-tag">PROFILE / 01</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </header>
      <div class="contact">
        <span class="spec-tag">CONTACT</span>
        <div class="contact-list">
          {{#if basics.email}}<div class="c-row"><span class="c-key">EMAIL</span><span class="c-val" data-field="basics.email">{{{basics.email}}}</span></div>{{/if}}
          {{#if basics.phone}}<div class="c-row"><span class="c-key">PHONE</span><span class="c-val" data-field="basics.phone">{{{basics.phone}}}</span></div>{{/if}}
          {{#if basics.location}}<div class="c-row"><span class="c-key">LOC</span><span class="c-val" data-field="basics.location">{{{basics.location}}}</span></div>{{/if}}
        </div>
      </div>
      {{#if skills.length}}
      <section class="rail-block" data-section="skills">
        <span class="spec-tag">SKILLS</span>
        <div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="chip-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
      </section>
      {{/if}}
      {{#if basics.summary}}
      <section class="rail-block">
        <span class="spec-tag">ABOUT</span>
        <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
      </section>
      {{/if}}
    </aside>

    <main class="main">
      {{#if experience.length}}
      <section class="block" data-section="experience">
        <div class="block-head"><span class="block-no">02</span><h2>工作经历</h2></div>
        {{#each experience}}
        <div class="entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="entry-top">
            <h3><span class="org" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="dot"></span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
            <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul class="hl">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}

      {{#if projects.length}}
      <section class="block" data-section="projects">
        <div class="block-head"><span class="block-no">03</span><h2>项目经历</h2></div>
        {{#each projects}}
        <div class="entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="entry-top">
            <h3><span class="org" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="dot"></span><span class="pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
          </div>
          {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="hl">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </section>
      {{/if}}

      {{#if education.length}}
      <section class="block" data-section="education">
        <div class="block-head"><span class="block-no">04</span><h2>教育背景</h2></div>
        {{#each education}}
        <div class="entry" data-entry="education" data-entry-index="{{@index}}">
          <div class="entry-top">
            <h3 class="edu-h"><span class="org" data-field="education.{{@index}}.institution">{{{institution}}}</span></h3>
            <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="edu-sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>
        {{/each}}
      </section>
      {{/if}}
    </main>
  </div>
</div>`,
    css: `.resume.product-designer * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.product-designer * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.product-designer {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  font-family: 'PingFang SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.5;
  color: #1c1d21;
  --accent: #4f46e5;
  --ink: #16171b;
  --muted: #6b7280;
  --line: #e8e8ec;
  --rail-bg: #f6f6f8;
}

.resume.product-designer .grid {
  display: grid;
  grid-template-columns: 66mm 1fr;
  min-height: 297mm;
}

/* ============ LEFT RAIL ============ */
.resume.product-designer .rail {
  background: var(--rail-bg);
  border-right: 1px solid var(--line);
  padding: 18mm 9mm 16mm 9mm;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.product-designer .spec-tag {
  display: block;
  font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
  font-size: 7pt;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: var(--accent);
  margin-bottom: 8px;
}

.resume.product-designer .id-card {
  padding-bottom: 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.resume.product-designer .id-card h1 {
  font-size: 19pt;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--ink);
  line-height: 1.15;
  margin-bottom: 5px;
}

.resume.product-designer .id-card .role {
  display: inline-block;
  font-size: 8.5pt;
  font-weight: 500;
  color: #fff;
  background: var(--ink);
  padding: 2px 8px;
  border-radius: 3px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.product-designer .contact {
  margin-bottom: 18px;
}

.resume.product-designer .contact-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.resume.product-designer .c-row {
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: baseline;
  gap: 6px;
}

.resume.product-designer .c-key {
  font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
  font-size: 6.5pt;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #a3a4ad;
  padding-top: 1px;
}

.resume.product-designer .c-val {
  font-size: 8.5pt;
  color: #3a3b42;
  word-break: break-all;
}

.resume.product-designer .rail-block {
  margin-bottom: 18px;
}

.resume.product-designer .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.resume.product-designer .chip {
  display: inline-flex;
  align-items: baseline;
  background: #fff;
  border: 1px solid var(--line);
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 8pt;
  color: var(--ink);
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.product-designer .chip-lv { color: var(--accent); font-weight: 500; }

.resume.product-designer .summary {
  font-size: 8.5pt;
  line-height: 1.6;
  color: #4a4b52;
}

/* ============ MAIN COLUMN ============ */
.resume.product-designer .main {
  padding: 18mm 14mm 16mm 12mm;
  min-width: 0;
}

.resume.product-designer .block {
  margin-bottom: 16px;
}
.resume.product-designer .block:last-child { margin-bottom: 0; }

.resume.product-designer .block-head {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 11px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--ink);
}

.resume.product-designer .block-no {
  font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
  font-size: 8pt;
  font-weight: 700;
  color: #fff;
  background: var(--accent);
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  flex-shrink: 0;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.product-designer .block-head h2 {
  font-size: 11pt;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--ink);
}

/* spec-grid leading index: structural memory anchor, ≤1px guide line */
.resume.product-designer .entry {
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
}
.resume.product-designer .entry:last-child { margin-bottom: 0; }
.resume.product-designer .entry::before {
  counter-increment: pd-entry;
  content: counter(pd-entry, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 1px;
  font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
  font-size: 7.5pt;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--accent);
}
.resume.product-designer .entry::after {
  content: '';
  position: absolute;
  left: 9px;
  top: 16px;
  bottom: 2px;
  width: 1px;
  background: var(--line);
}
.resume.product-designer .block { counter-reset: pd-entry; }

.resume.product-designer .entry-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.resume.product-designer .entry-top h3 {
  font-size: 10.5pt;
  font-weight: 600;
  color: var(--ink);
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  flex: 1;
  min-width: 0;
}

.resume.product-designer .org { font-weight: 700; }

.resume.product-designer .dot {
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--accent);
  margin: 0 8px;
  flex-shrink: 0;
  align-self: center;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.product-designer .pos { font-weight: 500; color: #44454c; }

.resume.product-designer .date {
  font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
  font-size: 8pt;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.product-designer .desc {
  font-size: 9pt;
  color: #44454c;
  margin-top: 4px;
  line-height: 1.55;
}

.resume.product-designer .hl {
  list-style: none;
  margin-top: 5px;
}

.resume.product-designer .hl li {
  position: relative;
  padding-left: 13px;
  font-size: 9.5pt;
  color: #2f3037;
  line-height: 1.5;
  margin-bottom: 3px;
}

.resume.product-designer .hl li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 5px;
  height: 5px;
  border: 1.2px solid var(--accent);
  border-radius: 1px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.resume.product-designer .edu-sub {
  font-size: 9pt;
  color: var(--muted);
  margin-top: 2px;
}

.resume.product-designer li p, .resume.product-designer li div { margin: 0; padding: 0; display: inline; }
.resume.product-designer .skills span, .resume.product-designer [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.product-designer { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "product-designer",
      "version": "1.0.0",
      "name": "产品设计",
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
