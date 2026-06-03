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
    slug: 'blueprint-engineer',
    name: '蓝图工程',
    category: 'profession',
    html: `<div class="resume blueprint-engineer">
  <div class="grid-overlay"></div>
  <header>
    <div class="title-block">
      <div class="name-area">
        <span class="tech-tag">PROFILE / 01</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="corner tl"></div>
      <div class="corner tr"></div>
      <div class="corner bl"></div>
      <div class="corner br"></div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email"><i>@</i>{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone"><i>T</i>{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location"><i>L</i>{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="summary">
    <h2><span class="idx">02</span>个人简介</h2>
    <div class="body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section data-section="experience">
    <h2><span class="idx">03</span>工作经历</h2>
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep">/</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> &mdash; <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section data-section="education">
    <h2><span class="idx">04</span>教育背景</h2>
    {{#each education}}
    <div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> &mdash; <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> &middot; <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section data-section="skills">
    <h2><span class="idx">05</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section data-section="projects">
    <h2><span class="idx">06</span>项目经历</h2>
    {{#each projects}}
    <div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="sep">/</span><span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>`,
    css: `.resume.blueprint-engineer * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.blueprint-engineer * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.blueprint-engineer {
  --navy: #0d2440;
  --navy-2: #16365e;
  --cyan: #1f9ec4;
  --cyan-soft: #6fc6dd;
  --grid: rgba(31, 158, 196, 0.10);
  --ink: #24323f;
  --muted: #5d6b78;
  --line: #c2d4e0;
  position: relative;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 17mm;
  background: #ffffff;
  background-image:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 5mm 5mm, 5mm 5mm;
  color: var(--ink);
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.5;
}

.resume.blueprint-engineer .grid-overlay {
  position: absolute;
  inset: 6mm;
  border: 1px solid var(--line);
  pointer-events: none;
}
.resume.blueprint-engineer .grid-overlay::before,
.resume.blueprint-engineer .grid-overlay::after {
  content: '';
  position: absolute;
  background: var(--cyan);
}
.resume.blueprint-engineer .grid-overlay::before { left: -1px; top: -1px; width: 9mm; height: 1.4px; }
.resume.blueprint-engineer .grid-overlay::after { left: -1px; top: -1px; width: 1.4px; height: 9mm; }

.resume.blueprint-engineer > * { position: relative; z-index: 1; }

/* ---------- Header ---------- */
.resume.blueprint-engineer header { margin-bottom: 9mm; }

.resume.blueprint-engineer .title-block {
  position: relative;
  background: var(--navy);
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 4mm 4mm, 4mm 4mm;
  padding: 7mm 8mm;
  color: #fff;
}
.resume.blueprint-engineer .corner {
  position: absolute;
  width: 9px;
  height: 9px;
  border: 1.4px solid var(--cyan-soft);
}
.resume.blueprint-engineer .corner.tl { top: 4px; left: 4px; border-right: 0; border-bottom: 0; }
.resume.blueprint-engineer .corner.tr { top: 4px; right: 4px; border-left: 0; border-bottom: 0; }
.resume.blueprint-engineer .corner.bl { bottom: 4px; left: 4px; border-right: 0; border-top: 0; }
.resume.blueprint-engineer .corner.br { bottom: 4px; right: 4px; border-left: 0; border-top: 0; }

.resume.blueprint-engineer .tech-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 7.5pt;
  letter-spacing: 0.18em;
  color: var(--cyan-soft);
  border: 1px solid rgba(111, 198, 221, 0.45);
  padding: 1px 7px;
  margin-bottom: 3mm;
}
.resume.blueprint-engineer h1 {
  font-size: 23pt;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.15;
}
.resume.blueprint-engineer .role {
  margin-top: 2mm;
  font-size: 10.5pt;
  font-weight: 400;
  color: var(--cyan-soft);
  letter-spacing: 0.05em;
}

.resume.blueprint-engineer .contact {
  display: flex;
  flex-wrap: wrap;
  gap: 4mm 7mm;
  margin-top: 4mm;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 8.5pt;
  color: var(--muted);
}
.resume.blueprint-engineer .contact span { display: inline-flex; align-items: center; }
.resume.blueprint-engineer .contact i {
  font-style: normal;
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  margin-right: 5px;
  background: var(--navy);
  color: var(--cyan-soft);
  font-size: 7pt;
  border-radius: 2px;
}

/* ---------- Sections ---------- */
.resume.blueprint-engineer section { margin-bottom: 7mm; }
.resume.blueprint-engineer h2 {
  display: flex;
  align-items: center;
  font-size: 11pt;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--navy);
  padding-bottom: 2mm;
  margin-bottom: 4mm;
  border-bottom: 1.4px solid var(--navy);
}
.resume.blueprint-engineer h2 .idx {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 8pt;
  color: #fff;
  background: var(--cyan);
  padding: 1px 6px;
  margin-right: 8px;
  border-radius: 2px;
  letter-spacing: 0.05em;
}

.resume.blueprint-engineer .summary .body { color: var(--ink); }

/* ---------- Entries ---------- */
.resume.blueprint-engineer .entry {
  position: relative;
  padding-left: 6mm;
  margin-bottom: 4.5mm;
}
.resume.blueprint-engineer .entry::before {
  content: '';
  position: absolute;
  left: 0;
  top: 2.2mm;
  width: 5px;
  height: 5px;
  background: #fff;
  border: 1.4px solid var(--cyan);
  transform: rotate(45deg);
}
.resume.blueprint-engineer .entry::after {
  content: '';
  position: absolute;
  left: 2px;
  top: 7mm;
  bottom: 0;
  width: 1px;
  background: var(--line);
}
.resume.blueprint-engineer .entry:last-child::after { display: none; }

.resume.blueprint-engineer .entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 4mm;
  flex-wrap: wrap;
}
.resume.blueprint-engineer h3 {
  font-size: 10.5pt;
  font-weight: 600;
  color: var(--navy-2);
}
.resume.blueprint-engineer h3 .company,
.resume.blueprint-engineer h3 .pname { font-weight: 700; color: var(--navy); }
.resume.blueprint-engineer h3 .sep { color: var(--cyan); margin: 0 6px; font-weight: 400; }
.resume.blueprint-engineer h3 .position,
.resume.blueprint-engineer h3 .role { font-weight: 500; color: var(--ink); }

.resume.blueprint-engineer .date {
  flex-shrink: 0;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 8pt;
  color: var(--muted);
  letter-spacing: 0.02em;
}

.resume.blueprint-engineer .meta {
  margin-top: 1mm;
  font-size: 9.5pt;
  color: var(--muted);
}
.resume.blueprint-engineer .desc { margin-top: 1.5mm; color: var(--ink); }

.resume.blueprint-engineer ul {
  list-style: none;
  margin-top: 2mm;
}
.resume.blueprint-engineer li {
  position: relative;
  padding-left: 4mm;
  margin-bottom: 1.2mm;
}
.resume.blueprint-engineer li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.66em;
  width: 5px;
  height: 1.4px;
  background: var(--cyan);
}

/* ---------- Skills ---------- */
.resume.blueprint-engineer .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5mm;
}
.resume.blueprint-engineer .chip {
  display: inline-flex;
  align-items: center;
  font-size: 9pt;
  color: var(--navy);
  background: rgba(31, 158, 196, 0.07);
  border: 1px solid var(--line);
  padding: 1.2mm 3mm;
}
.resume.blueprint-engineer .chip::before {
  content: '';
  width: 5px;
  height: 5px;
  margin-right: 6px;
  flex: none;
  background: #fff;
  border: 1.4px solid var(--cyan);
  transform: rotate(45deg);
}
.resume.blueprint-engineer .chip .lv {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 7.5pt;
  color: var(--muted);
  margin-left: 5px;
}

/* ---------- Required inline rules ---------- */
.resume.blueprint-engineer li p, .resume.blueprint-engineer li div { margin: 0; padding: 0; display: inline; }
.resume.blueprint-engineer .skills span, .resume.blueprint-engineer [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.blueprint-engineer { margin: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "blueprint-engineer",
      "version": "1.0.0",
      "name": "蓝图工程",
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
