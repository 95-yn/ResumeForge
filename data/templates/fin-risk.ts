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
    slug: 'fin-risk',
    name: '风险管理',
    category: 'profession',
    html: `<div class="resume fin-risk">
  <header>
    <div class="hdr-bar">
      <div class="hdr-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="hdr-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="hdr-matrix" aria-hidden="true">
        <span class="cell c-l"></span><span class="cell c-m"></span><span class="cell c-h"></span>
        <span class="cell c-m"></span><span class="cell c-h"></span><span class="cell c-x"></span>
        <span class="cell c-h"></span><span class="cell c-x"></span><span class="cell c-x"></span>
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary"><h2>个人简介</h2><div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="sec-block" data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="sec-block" data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec-block" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="skill-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section class="sec-block" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.fin-risk * { margin:0; padding:0; box-sizing:border-box; }
.resume.fin-risk * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.fin-risk {
  --ink:#1f2328;
  --gray:#3a4048;
  --muted:#6b7280;
  --line:#d6dae0;
  --bg-soft:#f4f5f7;
  --red:#c81e1e;
  --red-dk:#9b1414;
  --amber:#e0a106;
  --green:#3f8f4a;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 18mm 16mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.fin-risk header {
  border:1.5px solid var(--gray);
  border-top:5px solid var(--red);
  padding:14px 18px 12px;
  background:linear-gradient(180deg,#fafbfc 0%,#fff 100%);
}
.resume.fin-risk .hdr-bar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
}
.resume.fin-risk .hdr-id h1 {
  font-size:23pt;
  font-weight:800;
  letter-spacing:1px;
  color:var(--ink);
  line-height:1.1;
}
.resume.fin-risk .hdr-title {
  margin-top:5px;
  font-size:10.5pt;
  font-weight:600;
  color:var(--red-dk);
  letter-spacing:.5px;
  text-transform:uppercase;
}
.resume.fin-risk .hdr-title::before {
  content:'';
  display:inline-block;
  width:14px;
  height:2px;
  background:var(--red);
  vertical-align:middle;
  margin-right:7px;
}

/* Risk matrix 3x3 motif */
.resume.fin-risk .hdr-matrix {
  display:grid;
  grid-template-columns:repeat(3,12px);
  grid-template-rows:repeat(3,12px);
  gap:2.5px;
  flex-shrink:0;
  padding:5px;
  border:1px solid var(--line);
  background:#fff;
}
.resume.fin-risk .hdr-matrix .cell { width:12px; height:12px; border-radius:1px; }
.resume.fin-risk .hdr-matrix .c-l { background:#cfe3d2; }
.resume.fin-risk .hdr-matrix .c-m { background:#f3dca0; }
.resume.fin-risk .hdr-matrix .c-h { background:#e8a08a; }
.resume.fin-risk .hdr-matrix .c-x { background:var(--red); }

.resume.fin-risk .contact {
  margin-top:11px;
  padding-top:9px;
  border-top:1px dashed var(--line);
  display:flex;
  flex-wrap:wrap;
  gap:8px 0;
  font-size:9pt;
  color:var(--gray);
}
.resume.fin-risk .contact span {
  position:relative;
  padding:0 14px;
}
.resume.fin-risk .contact span:first-child { padding-left:0; }
.resume.fin-risk .contact span:not(:last-child)::after {
  content:'';
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:11px;
  background:var(--line);
}

/* ===== Section headings ===== */
.resume.fin-risk h2 {
  font-size:11pt;
  font-weight:800;
  color:var(--ink);
  letter-spacing:1.5px;
  margin:18px 0 11px;
  padding:0 0 5px 13px;
  position:relative;
  border-bottom:1.5px solid var(--gray);
}
.resume.fin-risk h2::before {
  content:'';
  position:absolute;
  left:0;
  top:1px;
  width:5px;
  height:13px;
  background:var(--red);
}

.resume.fin-risk section:first-of-type h2 { margin-top:16px; }

/* ===== Summary ===== */
.resume.fin-risk .summary-body {
  background:var(--bg-soft);
  border-left:3px solid var(--red);
  padding:9px 13px;
  font-size:9.5pt;
  color:var(--gray);
  text-align:justify;
}

/* ===== Entries ===== */
.resume.fin-risk .entry {
  padding:9px 0 9px 13px;
  border-left:1.5px solid var(--line);
  position:relative;
  margin-bottom:3px;
}
.resume.fin-risk .entry::before {
  content:'';
  position:absolute;
  left:-4px;
  top:13px;
  width:7px;
  height:7px;
  background:#fff;
  border:1.5px solid var(--red);
  transform:rotate(45deg);
}
.resume.fin-risk .entry:last-child { margin-bottom:0; }

.resume.fin-risk .entry-head {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}
.resume.fin-risk .entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
}
.resume.fin-risk .company { font-weight:800; }
.resume.fin-risk .position {
  font-weight:600;
  color:var(--red-dk);
}
.resume.fin-risk .company::after {
  content:'';
  display:inline-block;
  width:1px;
  height:11px;
  background:var(--line);
  margin:0 9px;
  vertical-align:-1px;
}
.resume.fin-risk .date {
  font-size:8.5pt;
  font-weight:600;
  color:var(--muted);
  letter-spacing:.3px;
  white-space:nowrap;
  font-variant-numeric:tabular-nums;
  flex-shrink:0;
}

.resume.fin-risk .entry ul {
  list-style:none;
  margin-top:6px;
}
.resume.fin-risk .entry li {
  position:relative;
  padding-left:14px;
  margin-bottom:3.5px;
  font-size:9.5pt;
  color:var(--gray);
  text-align:justify;
}
.resume.fin-risk .entry li::before {
  content:'';
  position:absolute;
  left:2px;
  top:6.5px;
  width:4px;
  height:4px;
  background:var(--red);
  transform:rotate(45deg);
}

/* ===== Education ===== */
.resume.fin-risk .edu-meta {
  margin-top:3px;
  font-size:9.5pt;
  color:var(--gray);
}

/* ===== Skills ===== */
.resume.fin-risk .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.fin-risk .skill-chip {
  display:inline-flex;
  align-items:center;
  padding:3.5px 11px;
  background:#fff;
  border:1px solid var(--line);
  border-left:3px solid var(--gray);
  font-size:9pt;
  font-weight:600;
  color:var(--ink);
}
.resume.fin-risk .skill-chip .skill-lvl {
  color:var(--red-dk);
  font-weight:700;
}

/* ===== Projects ===== */
.resume.fin-risk .proj-name { font-weight:800; }
.resume.fin-risk .proj-role {
  font-weight:600;
  color:var(--red-dk);
}
.resume.fin-risk .proj-desc {
  margin-top:5px;
  font-size:9.5pt;
  color:var(--gray);
  text-align:justify;
}

/* ===== Required tail rules ===== */
.resume.fin-risk li p, .resume.fin-risk li div { margin:0; padding:0; display:inline; }
.resume.fin-risk .skills span, .resume.fin-risk [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.fin-risk { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.fin-risk .entry, .resume.fin-risk section { break-inside:avoid; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "fin-risk",
      "version": "1.0.0",
      "name": "风险管理",
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
