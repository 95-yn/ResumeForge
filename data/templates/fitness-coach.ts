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
    slug: 'fitness-coach',
    name: '健身教练',
    category: 'profession',
    html: `<div class="resume fitness-coach">
  <header>
    <div class="hero">
      <span class="kicker">STRENGTH · ENERGY · DISCIPLINE</span>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <span class="streak"></span>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email"><i>@</i>{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone"><i>T</i>{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location"><i>L</i>{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}
  <section class="summary">
    <h2><span class="bar"></span>个人简介</h2>
    <div class="body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section data-section="experience">
    <h2><span class="bar"></span>工作经历</h2>
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section data-section="education">
    <h2><span class="bar"></span>教育背景</h2>
    {{#each education}}
    <div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section data-section="skills">
    <h2><span class="bar"></span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section data-section="projects">
    <h2><span class="bar"></span>项目经历</h2>
    {{#each projects}}
    <div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>`,
    css: `.resume.fitness-coach * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.fitness-coach * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.fitness-coach {
  --char: #1a1a1c;
  --char-2: #2a2a2e;
  --orange: #ff5a14;
  --orange-soft: #ff8b52;
  --ink: #222226;
  --muted: #6a6a72;
  --line: #e2e2e6;
  --paper: #ffffff;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 17mm;
  background: var(--paper);
  color: var(--ink);
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.5;
}

/* ---------- Header ---------- */
.resume.fitness-coach header { margin-bottom: 9mm; }
.resume.fitness-coach .hero {
  position: relative;
  background: var(--char);
  color: #fff;
  padding: 9mm 9mm 8mm;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
}
.resume.fitness-coach .hero::before {
  content: '';
  position: absolute;
  top: -10mm;
  right: -14mm;
  width: 46mm;
  height: 64mm;
  background: var(--orange);
  transform: skewX(-16deg);
  opacity: 0.92;
}
.resume.fitness-coach .hero::after {
  content: '';
  position: absolute;
  top: -10mm;
  right: 22mm;
  width: 6mm;
  height: 64mm;
  background: var(--orange-soft);
  transform: skewX(-16deg);
  opacity: 0.55;
}
.resume.fitness-coach .hero > * { position: relative; z-index: 1; }

.resume.fitness-coach .kicker {
  display: inline-block;
  font-size: 7.5pt;
  font-weight: 800;
  letter-spacing: 0.22em;
  color: var(--orange-soft);
  margin-bottom: 4mm;
}
.resume.fitness-coach h1 {
  font-size: 30pt;
  font-weight: 900;
  letter-spacing: 0.02em;
  line-height: 1.02;
  text-transform: uppercase;
  font-style: italic;
}
.resume.fitness-coach .role {
  margin-top: 3mm;
  font-size: 11pt;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #f4f4f6;
}
.resume.fitness-coach .streak {
  display: block;
  width: 34mm;
  height: 4px;
  margin-top: 5mm;
  background: var(--orange);
  transform: skewX(-16deg);
}

.resume.fitness-coach .contact {
  display: flex;
  flex-wrap: wrap;
  gap: 3mm 6mm;
  margin-top: 5mm;
  font-size: 9pt;
  font-weight: 600;
  color: var(--ink);
}
.resume.fitness-coach .contact span { display: inline-flex; align-items: center; }
.resume.fitness-coach .contact i {
  font-style: normal;
  display: inline-block;
  width: 17px;
  height: 17px;
  line-height: 17px;
  text-align: center;
  margin-right: 6px;
  background: var(--char);
  color: var(--orange);
  font-size: 8pt;
  font-weight: 800;
  transform: skewX(-10deg);
}
.resume.fitness-coach .contact i { font-style: normal; }

/* ---------- Sections ---------- */
.resume.fitness-coach section { margin-bottom: 7mm; }
.resume.fitness-coach h2 {
  display: flex;
  align-items: center;
  font-size: 13pt;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: var(--char);
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 4.5mm;
}
.resume.fitness-coach h2 .bar {
  display: inline-block;
  width: 5mm;
  height: 4.5mm;
  margin-right: 3.5mm;
  background: var(--orange);
  transform: skewX(-16deg);
  flex-shrink: 0;
}
.resume.fitness-coach .summary .body { color: var(--ink); }

/* ---------- Entries ---------- */
.resume.fitness-coach .entry {
  position: relative;
  padding-left: 6mm;
  margin-bottom: 5mm;
}
.resume.fitness-coach .entry::before {
  content: '';
  position: absolute;
  left: 0;
  top: 1mm;
  bottom: 1mm;
  width: 3px;
  background: var(--char);
}
.resume.fitness-coach .entry::after {
  content: '';
  position: absolute;
  left: 0;
  top: 1mm;
  width: 3px;
  height: 6mm;
  background: var(--orange);
}
.resume.fitness-coach .entry:last-child { margin-bottom: 0; }

.resume.fitness-coach .entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 4mm;
  flex-wrap: wrap;
}
.resume.fitness-coach h3 {
  font-size: 11pt;
  font-weight: 700;
  color: var(--char);
}
.resume.fitness-coach h3 .company,
.resume.fitness-coach h3 .pname { font-weight: 900; color: var(--char); }
.resume.fitness-coach h3 .position,
.resume.fitness-coach h3 .role {
  font-weight: 700;
  color: var(--orange);
  margin-left: 8px;
  padding-left: 8px;
  border-left: 2px solid var(--line);
}

.resume.fitness-coach .date {
  flex-shrink: 0;
  font-size: 8.5pt;
  font-weight: 700;
  color: #fff;
  background: var(--char-2);
  padding: 0.6mm 2.6mm;
  letter-spacing: 0.02em;
  transform: skewX(-10deg);
}
.resume.fitness-coach .date span { display: inline-block; transform: skewX(10deg); }

.resume.fitness-coach .meta {
  margin-top: 1mm;
  font-size: 9.5pt;
  color: var(--muted);
  font-weight: 600;
}
.resume.fitness-coach .desc { margin-top: 1.5mm; color: var(--ink); }

.resume.fitness-coach ul {
  list-style: none;
  margin-top: 2.5mm;
}
.resume.fitness-coach li {
  position: relative;
  padding-left: 5mm;
  margin-bottom: 1.4mm;
}
.resume.fitness-coach li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 7px;
  height: 7px;
  background: var(--orange);
  transform: skewX(-16deg);
}

/* ---------- Skills ---------- */
.resume.fitness-coach .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5mm;
}
.resume.fitness-coach .chip {
  display: inline-flex;
  align-items: center;
  font-size: 9pt;
  font-weight: 700;
  color: #fff;
  background: var(--char);
  padding: 1.4mm 3.4mm;
  transform: skewX(-10deg);
}
.resume.fitness-coach .chip > span { display: inline-block; transform: skewX(10deg); }
.resume.fitness-coach .chip .lv {
  font-size: 7.8pt;
  font-weight: 800;
  color: var(--orange);
  margin-left: 6px;
}

/* ---------- Required inline rules ---------- */
.resume.fitness-coach li p, .resume.fitness-coach li div { margin: 0; padding: 0; display: inline; }
.resume.fitness-coach .skills span, .resume.fitness-coach [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.fitness-coach { margin: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "fitness-coach",
      "version": "1.0.0",
      "name": "健身教练",
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
