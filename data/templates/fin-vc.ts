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
    slug: 'fin-vc',
    name: '风险投资',
    category: 'profession',
    html: `<div class="resume fin-vc">
  <header>
    <div class="hd-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary">
    <div class="sec-head"><span class="sec-no">01</span><h2>个人简介</h2></div>
    <div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="sec-exp" data-section="experience">
    <div class="sec-head"><span class="sec-no">02</span><h2>工作经历</h2></div>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-side">
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span><i class="dash"> — </i><span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <div class="entry-body">
        <h3>
          <span class="ent-primary" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="ent-secondary" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="sec-edu" data-section="education">
    <div class="sec-head"><span class="sec-no">03</span><h2>教育背景</h2></div>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-side">
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span><i class="dash"> — </i><span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <div class="entry-body">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="mid-dot"> · </span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec-skills" data-section="skills">
    <div class="sec-head"><span class="sec-no">04</span><h2>专业技能</h2></div>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sk-sep"> · </span><span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="sec-proj" data-section="projects">
    <div class="sec-head"><span class="sec-no">05</span><h2>项目经历</h2></div>
    {{#each projects}}<div class="entry proj-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-body">
        <h3>
          <span class="ent-primary" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="ent-secondary" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.fin-vc * { margin:0; padding:0; box-sizing:border-box; }
.resume.fin-vc * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.fin-vc {
  --ink:#2a2620;
  --ink-soft:#6b6354;
  --gold:#a8884e;
  --gold-deep:#8a6d36;
  --cream:#faf6ee;
  --cream-line:#e8ddc8;
  --hair:#d9cdb2;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.fin-vc header {
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:12mm;
  padding-bottom:7mm;
  border-bottom:1.5pt solid var(--gold);
  position:relative;
}
.resume.fin-vc header::after {
  content:'';
  position:absolute;
  left:0; bottom:-3.2pt;
  width:38mm; height:1.5pt;
  background:var(--ink);
}
.resume.fin-vc .hd-main { flex:1 1 auto; }
.resume.fin-vc h1 {
  font-size:25pt;
  font-weight:600;
  letter-spacing:0.08em;
  color:var(--ink);
  line-height:1.1;
}
.resume.fin-vc .hd-title {
  margin-top:2.5mm;
  font-size:10.5pt;
  letter-spacing:0.32em;
  text-transform:uppercase;
  color:var(--gold-deep);
  font-weight:500;
}
.resume.fin-vc .contact {
  flex:0 0 auto;
  text-align:right;
  display:flex;
  flex-direction:column;
  gap:1.6mm;
  padding-bottom:1mm;
}
.resume.fin-vc .contact span {
  font-size:8.6pt;
  color:var(--ink-soft);
  letter-spacing:0.02em;
  white-space:nowrap;
}
.resume.fin-vc .contact span:first-child { color:var(--ink); font-weight:500; }

/* ===== Sections ===== */
.resume.fin-vc section { margin-top:9mm; }
.resume.fin-vc .sec-head {
  display:flex;
  align-items:baseline;
  gap:4mm;
  margin-bottom:5mm;
}
.resume.fin-vc .sec-no {
  font-size:9pt;
  font-weight:600;
  letter-spacing:0.1em;
  color:var(--gold);
  font-family:Georgia,'Times New Roman',serif;
  font-style:italic;
}
.resume.fin-vc h2 {
  font-size:11.5pt;
  font-weight:600;
  letter-spacing:0.22em;
  color:var(--ink);
  position:relative;
}
.resume.fin-vc h2::after {
  content:'';
  display:block;
  width:6mm; height:1.2pt;
  margin-top:2mm;
  background:var(--gold);
}

/* ===== Summary ===== */
.resume.fin-vc .summary-body {
  font-size:10pt;
  line-height:1.85;
  color:var(--ink-soft);
  padding-left:12mm;
  max-width:155mm;
  border-left:1pt solid var(--cream-line);
  margin-left:1mm;
}

/* ===== Entry (combined list layout) ===== */
.resume.fin-vc .entry {
  display:flex;
  gap:8mm;
  padding:0 0 6mm 0;
  margin-bottom:5mm;
  border-bottom:0.6pt solid var(--cream-line);
}
.resume.fin-vc .entry:last-child { border-bottom:none; margin-bottom:0; padding-bottom:0; }
.resume.fin-vc .entry-side {
  flex:0 0 30mm;
  padding-top:1.2mm;
}
.resume.fin-vc .date {
  font-size:8.4pt;
  letter-spacing:0.04em;
  color:var(--gold-deep);
  font-family:Georgia,'Times New Roman',serif;
  font-variant-numeric:tabular-nums;
  display:inline-block;
  line-height:1.5;
}
.resume.fin-vc .date .dash { font-style:normal; color:var(--hair); }
.resume.fin-vc .entry-body { flex:1 1 auto; min-width:0; }

.resume.fin-vc .entry h3 {
  font-size:11pt;
  font-weight:600;
  color:var(--ink);
  line-height:1.4;
  display:flex;
  flex-wrap:wrap;
  align-items:baseline;
  gap:0 4mm;
}
.resume.fin-vc .ent-primary { letter-spacing:0.02em; }
.resume.fin-vc .ent-secondary {
  font-size:9pt;
  font-weight:400;
  color:var(--gold-deep);
  letter-spacing:0.06em;
  position:relative;
  padding-left:4mm;
}
.resume.fin-vc .ent-secondary::before {
  content:'';
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:1.6mm; height:1.6mm;
  border:1pt solid var(--gold);
  border-radius:50%;
}

.resume.fin-vc .entry ul {
  list-style:none;
  margin-top:3mm;
}
.resume.fin-vc .entry li {
  position:relative;
  padding-left:6mm;
  margin-bottom:1.8mm;
  font-size:9.6pt;
  line-height:1.62;
  color:var(--ink-soft);
}
.resume.fin-vc .entry li:last-child { margin-bottom:0; }
.resume.fin-vc .entry li::before {
  content:'';
  position:absolute;
  left:0.5mm; top:2.4mm;
  width:2.2mm; height:1pt;
  background:var(--gold);
}

/* ===== Education meta ===== */
.resume.fin-vc .edu-meta {
  margin-top:2mm;
  font-size:9.4pt;
  color:var(--ink-soft);
}
.resume.fin-vc .edu-meta .mid-dot { color:var(--gold); }

/* ===== Skills ===== */
.resume.fin-vc .skills {
  display:flex;
  flex-wrap:wrap;
  gap:3mm 3.5mm;
}
.resume.fin-vc .skill-chip {
  display:inline-flex;
  align-items:baseline;
  padding:1.8mm 4.5mm;
  background:var(--cream);
  border:0.6pt solid var(--cream-line);
  border-radius:1mm;
  font-size:9.2pt;
  color:var(--ink);
  line-height:1.3;
}
.resume.fin-vc .skill-chip .sk-name { font-weight:500; }
.resume.fin-vc .skill-chip .sk-sep { color:var(--gold); }
.resume.fin-vc .skill-chip .sk-level { color:var(--ink-soft); font-size:8.6pt; }

/* ===== Projects ===== */
.resume.fin-vc .proj-entry { gap:0; }
.resume.fin-vc .proj-desc {
  margin-top:2.4mm;
  font-size:9.6pt;
  line-height:1.7;
  color:var(--ink-soft);
}
.resume.fin-vc .proj-entry ul { margin-top:2.6mm; }

/* ===== Inline-list safety ===== */
.resume.fin-vc li p, .resume.fin-vc li div { margin:0; padding:0; display:inline; }
.resume.fin-vc .skills span, .resume.fin-vc [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.fin-vc { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.fin-vc .entry { break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "fin-vc",
      "version": "1.0.0",
      "name": "风险投资",
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
