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
    slug: 'quality-engineer',
    name: '质量工程',
    category: 'profession',
    html: `<div class="resume quality-engineer">
  <header>
    <div class="qe-header-bar">
      <div class="qe-id-block">
        <span class="qe-tag">QC / QA</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="qe-stamp">
        <span class="qe-stamp-check">&#10003;</span>
        <span class="qe-stamp-text">PASS</span>
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="qe-summary"><h2><span class="qe-mark">&#10003;</span>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="qe-mark">&#10003;</span>工作经历</h2>
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="qe-row">
      <div class="qe-row-head">
        <h3><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="qe-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="qe-mark">&#10003;</span>项目经历</h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="qe-row">
      <div class="qe-row-head">
        <h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="qe-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="qe-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="qe-mark">&#10003;</span>教育背景</h2>
    <table class="qe-table">
      <tbody>
      {{#each education}}<tr data-entry="education" data-entry-index="{{@index}}">
        <td class="qe-td-inst"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3></td>
        <td class="qe-td-major"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></td>
        <td class="qe-td-date"><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></td>
      </tr>{{/each}}
      </tbody>
    </table>
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="qe-mark">&#10003;</span>专业技能</h2><div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="qe-skill"><span class="qe-skill-tick">&#10003;</span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="qe-skill-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
</div>`,
    css: `.resume.quality-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.quality-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.quality-engineer {
  --qe-green:#16a34a;
  --qe-green-dark:#15803d;
  --qe-red:#dc2626;
  --qe-ink:#1a2421;
  --qe-gray:#5b6b66;
  --qe-line:#d4ddd9;
  --qe-bg-soft:#f3f7f5;
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm;
  background:#fff; color:var(--qe-ink);
  font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.quality-engineer header {
  border:2px solid var(--qe-ink);
  margin-bottom:6mm;
}
.resume.quality-engineer .qe-header-bar {
  display:flex; align-items:stretch; justify-content:space-between;
  border-bottom:1px dashed var(--qe-line);
}
.resume.quality-engineer .qe-id-block {
  padding:5mm 6mm; flex:1;
}
.resume.quality-engineer .qe-tag {
  display:inline-block;
  font-size:7.5pt; letter-spacing:0.18em; font-weight:700;
  color:var(--qe-green-dark);
  border:1px solid var(--qe-green);
  border-radius:2px;
  padding:1px 7px; margin-bottom:3mm;
}
.resume.quality-engineer h1 {
  font-size:21pt; font-weight:800; letter-spacing:0.02em;
  line-height:1.1; color:var(--qe-ink);
}
.resume.quality-engineer .qe-id-block p {
  font-size:10.5pt; color:var(--qe-gray); margin-top:1.5mm; font-weight:500;
}
.resume.quality-engineer .qe-stamp {
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  min-width:30mm;
  border-left:1px dashed var(--qe-line);
  color:var(--qe-green);
  position:relative;
}
.resume.quality-engineer .qe-stamp::after {
  content:""; position:absolute; inset:3.5mm;
  border:1.5px solid var(--qe-green); border-radius:3px;
  transform:rotate(-7deg); opacity:0.55;
}
.resume.quality-engineer .qe-stamp-check {
  font-size:19pt; line-height:1; font-weight:700;
}
.resume.quality-engineer .qe-stamp-text {
  font-size:8pt; font-weight:800; letter-spacing:0.22em; margin-top:1mm;
}
.resume.quality-engineer .contact {
  display:flex; flex-wrap:wrap; gap:0;
  font-size:9pt; color:var(--qe-gray);
}
.resume.quality-engineer .contact span {
  padding:2.5mm 6mm; border-right:1px dashed var(--qe-line);
}
.resume.quality-engineer .contact span:last-child { border-right:none; }

/* ===== Section headings ===== */
.resume.quality-engineer section { margin-bottom:5mm; }
.resume.quality-engineer h2 {
  font-size:11.5pt; font-weight:800; color:var(--qe-ink);
  display:flex; align-items:center; gap:2.5mm;
  padding-bottom:1.5mm; margin-bottom:3.5mm;
  border-bottom:2px solid var(--qe-ink);
}
.resume.quality-engineer .qe-mark {
  display:inline-flex; align-items:center; justify-content:center;
  width:5mm; height:5mm; flex-shrink:0;
  background:var(--qe-green); color:#fff;
  border-radius:2px; font-size:8.5pt; font-weight:700; line-height:1;
}

/* ===== Summary ===== */
.resume.quality-engineer .qe-summary div {
  position:relative;
  background:var(--qe-bg-soft);
  border:1px solid var(--qe-line);
  padding:3mm 4mm 3mm 8mm; font-size:9.5pt; color:#2c3a35;
}
.resume.quality-engineer .qe-summary div::before {
  content:"\\2713";
  position:absolute;
  left:3mm; top:3mm;
  color:var(--qe-green); font-weight:700; font-size:9pt; line-height:1;
}

/* ===== Experience / Projects rows ===== */
.resume.quality-engineer .qe-row {
  position:relative;
  border:1px solid var(--qe-line);
  padding:3mm 4mm 3mm 8mm; margin-bottom:3mm;
}
.resume.quality-engineer .qe-row::before {
  content:"\\2713";
  position:absolute;
  left:3mm; top:3mm;
  color:var(--qe-green); font-weight:700; font-size:9pt; line-height:1;
}
.resume.quality-engineer .qe-row-head {
  display:flex; align-items:baseline; justify-content:space-between;
  gap:4mm; flex-wrap:wrap;
}
.resume.quality-engineer h3 {
  font-size:11pt; font-weight:700; color:var(--qe-ink);
}
.resume.quality-engineer .qe-pos {
  font-weight:500; color:var(--qe-green-dark); margin-left:2.5mm; font-size:10pt;
}
.resume.quality-engineer .qe-pos::before {
  content:"/ "; color:var(--qe-line);
}
.resume.quality-engineer .date {
  font-size:8.5pt; color:var(--qe-gray); font-weight:600;
  white-space:nowrap; letter-spacing:0.03em;
  font-variant-numeric:tabular-nums;
}
.resume.quality-engineer .qe-desc {
  font-size:9.5pt; color:#2c3a35; margin-top:1.5mm;
}
.resume.quality-engineer .qe-row ul {
  list-style:none; margin-top:2mm;
}
.resume.quality-engineer .qe-row li {
  position:relative; padding-left:6mm; margin-bottom:1.2mm;
  font-size:9.5pt; color:#33433d; line-height:1.5;
}
.resume.quality-engineer .qe-row li::before {
  content:"\\2713"; position:absolute; left:0; top:0;
  color:var(--qe-green); font-weight:700; font-size:9pt;
}

/* ===== Education table ===== */
.resume.quality-engineer .qe-table {
  width:100%; border-collapse:collapse;
  border:1px solid var(--qe-line);
}
.resume.quality-engineer .qe-table tr {
  border-bottom:1px solid var(--qe-line);
}
.resume.quality-engineer .qe-table tr:last-child { border-bottom:none; }
.resume.quality-engineer .qe-table tr:nth-child(even) { background:var(--qe-bg-soft); }
.resume.quality-engineer .qe-table td {
  padding:2.5mm 4mm; vertical-align:middle; font-size:9.5pt;
  border-right:1px dashed var(--qe-line);
}
.resume.quality-engineer .qe-table td:last-child { border-right:none; }
.resume.quality-engineer .qe-td-inst { width:38%; }
.resume.quality-engineer .qe-table h3 { font-size:10pt; }
.resume.quality-engineer .qe-td-major { color:var(--qe-gray); width:40%; }
.resume.quality-engineer .qe-td-date { width:22%; text-align:right; }

/* ===== Skills ===== */
.resume.quality-engineer .skills {
  display:flex; flex-wrap:wrap; gap:2mm;
}
.resume.quality-engineer .qe-skill {
  display:inline-flex; align-items:center; gap:1.5mm;
  border:1px solid var(--qe-line);
  background:#fff;
  padding:1.5mm 3mm; border-radius:2px;
  font-size:9pt;
}
.resume.quality-engineer .qe-skill-tick {
  display:inline-flex; align-items:center; justify-content:center;
  width:3.5mm; height:3.5mm; flex-shrink:0;
  background:var(--qe-green); color:#fff;
  border-radius:1px; font-size:7pt; font-weight:700; line-height:1;
}
.resume.quality-engineer .qe-skill-lvl {
  color:var(--qe-gray); font-size:8pt;
  border-left:1px dashed var(--qe-line); padding-left:1.5mm;
}

/* ===== Contract-required tail ===== */
.resume.quality-engineer li p, .resume.quality-engineer li div { margin:0; padding:0; display:inline; }
.resume.quality-engineer .skills span, .resume.quality-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.quality-engineer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "quality-engineer",
      "version": "1.0.0",
      "name": "质量工程",
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
