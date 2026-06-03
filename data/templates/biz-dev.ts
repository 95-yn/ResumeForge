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
    slug: 'biz-dev',
    name: '商务拓展',
    category: 'profession',
    html: `<div class="resume biz-dev">
  <header>
    <div class="bd-head-inner">
      <div class="bd-head-main">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="bd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
        <div class="contact">
          {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
          {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
          {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
        </div>
      </div>
      <div class="bd-head-emblem" aria-hidden="true">
        <svg viewBox="0 0 120 80" preserveAspectRatio="none">
          <path class="bd-grow-fill" d="M4,72 L24,58 L48,62 L72,38 L96,24 L116,8 L116,76 L4,76 Z"/>
          <path class="bd-grow-line" d="M4,72 L24,58 L48,62 L72,38 L96,24 L116,8"/>
          <circle class="bd-grow-dot" cx="24" cy="58" r="2.6"/>
          <circle class="bd-grow-dot" cx="48" cy="62" r="2.6"/>
          <circle class="bd-grow-dot" cx="72" cy="38" r="2.6"/>
          <circle class="bd-grow-dot" cx="96" cy="24" r="2.6"/>
          <circle class="bd-grow-dot bd-grow-peak" cx="116" cy="8" r="3.4"/>
        </svg>
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="bd-summary">
    <h2><span class="bd-h2-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 14l5 1 4-5 4 4 7-9" fill="none"/><path d="M16 5h6v6" fill="none"/></svg></span>个人简介</h2>
    <div class="bd-summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience">
    <h2><span class="bd-h2-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h7l2 2h9v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" fill="none"/></svg></span>工作经历</h2>
    <div class="bd-timeline">
    {{#each experience}}<div class="bd-entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="bd-node" aria-hidden="true"></span>
      <div class="bd-entry-head">
        <h3><span class="bd-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="bd-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects">
    <h2><span class="bd-h2-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" fill="none"/></svg></span>项目经历</h2>
    {{#each projects}}<div class="bd-entry bd-entry-proj" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="bd-proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="bd-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="bd-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills">
    <h2><span class="bd-h2-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 11l3 3 7-7M2 12l3 3M22 7l-7 7" fill="none"/></svg></span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="bd-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="bd-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education">
    <h2><span class="bd-h2-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 8l10-4 10 4-10 4L2 8z" fill="none"/><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" fill="none"/></svg></span>教育背景</h2>
    {{#each education}}<div class="bd-entry bd-entry-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="bd-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="bd-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.biz-dev * { margin:0; padding:0; box-sizing:border-box; }
.resume.biz-dev * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.biz-dev {
  --bd-green:#13433a;
  --bd-green-2:#1d5c4f;
  --bd-green-deep:#0c2f28;
  --bd-copper:#b87333;
  --bd-copper-light:#d99a5b;
  --bd-ink:#21302c;
  --bd-muted:#5d6f69;
  --bd-line:#dfe6e2;
  --bd-bg-soft:#f4f7f5;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 18mm 16mm;
  background:#fff;
  color:var(--bd-ink);
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.biz-dev header {
  position:relative;
  margin:-18mm -18mm 9mm;
  padding:13mm 18mm 11mm;
  background:
    radial-gradient(120% 140% at 100% 0%, rgba(184,115,51,.28) 0%, rgba(184,115,51,0) 42%),
    linear-gradient(135deg, var(--bd-green) 0%, var(--bd-green-deep) 100%);
  color:#fff;
  overflow:hidden;
}
.resume.biz-dev header::after {
  content:"";
  position:absolute;
  left:0; right:0; bottom:0;
  height:4px;
  background:linear-gradient(90deg, var(--bd-copper) 0%, var(--bd-copper-light) 50%, var(--bd-copper) 100%);
}
.resume.biz-dev .bd-head-inner {
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10mm;
}
.resume.biz-dev .bd-head-main { min-width:0; }
.resume.biz-dev header h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:1.5px;
  line-height:1.12;
}
.resume.biz-dev .bd-title {
  margin-top:5px;
  font-size:11pt;
  font-weight:500;
  letter-spacing:2.5px;
  color:var(--bd-copper-light);
  text-transform:uppercase;
}
.resume.biz-dev .contact {
  margin-top:11px;
  display:flex;
  flex-wrap:wrap;
  gap:8px 0;
  font-size:9pt;
  color:rgba(255,255,255,.9);
}
.resume.biz-dev .contact span {
  position:relative;
  padding:0 14px;
  white-space:nowrap;
}
.resume.biz-dev .contact span:first-child { padding-left:0; }
.resume.biz-dev .contact span + span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:1px; height:11px;
  background:rgba(217,154,91,.6);
}

/* growth-curve emblem */
.resume.biz-dev .bd-head-emblem {
  flex:0 0 auto;
  width:42mm;
  height:27mm;
  opacity:.95;
}
.resume.biz-dev .bd-head-emblem svg { width:100%; height:100%; overflow:visible; }
.resume.biz-dev .bd-grow-fill { fill:rgba(184,115,51,.18); }
.resume.biz-dev .bd-grow-line {
  fill:none;
  stroke:var(--bd-copper-light);
  stroke-width:2.4;
  stroke-linecap:round;
  stroke-linejoin:round;
}
.resume.biz-dev .bd-grow-dot { fill:#fff; stroke:var(--bd-copper); stroke-width:1.6; }
.resume.biz-dev .bd-grow-peak { fill:var(--bd-copper-light); stroke:#fff; stroke-width:1.6; }

/* ===== Section headings ===== */
.resume.biz-dev section { margin-bottom:7mm; }
.resume.biz-dev h2 {
  display:flex;
  align-items:center;
  gap:9px;
  font-size:12.5pt;
  font-weight:700;
  letter-spacing:1px;
  color:var(--bd-green);
  padding-bottom:6px;
  margin-bottom:11px;
  border-bottom:1.5px solid var(--bd-line);
  position:relative;
}
.resume.biz-dev h2::after {
  content:"";
  position:absolute;
  left:0; bottom:-1.5px;
  width:34px; height:1.5px;
  background:var(--bd-copper);
}
.resume.biz-dev .bd-h2-mark {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:21px; height:21px;
  border-radius:6px;
  background:linear-gradient(135deg, var(--bd-green) 0%, var(--bd-green-2) 100%);
  flex:0 0 auto;
}
.resume.biz-dev .bd-h2-mark svg {
  width:13px; height:13px;
  stroke:var(--bd-copper-light);
  stroke-width:1.9;
  stroke-linecap:round;
  stroke-linejoin:round;
}

/* ===== Summary ===== */
.resume.biz-dev .bd-summary-body {
  padding:9px 13px;
  background:var(--bd-bg-soft);
  border-left:3px solid var(--bd-copper);
  border-radius:0 6px 6px 0;
  color:var(--bd-ink);
}

/* ===== Timeline / entries ===== */
.resume.biz-dev .bd-timeline {
  position:relative;
  padding-left:16px;
}
.resume.biz-dev .bd-timeline::before {
  content:"";
  position:absolute;
  left:3px; top:6px; bottom:6px;
  width:2px;
  background:linear-gradient(180deg, var(--bd-green-2) 0%, var(--bd-line) 100%);
}
.resume.biz-dev .bd-entry { margin-bottom:11px; position:relative; }
.resume.biz-dev .bd-entry:last-child { margin-bottom:0; }
.resume.biz-dev .bd-timeline .bd-entry { padding-left:6px; }
.resume.biz-dev .bd-node {
  position:absolute;
  left:-16px; top:5px;
  width:8px; height:8px;
  border-radius:50%;
  background:#fff;
  border:2px solid var(--bd-copper);
  box-shadow:0 0 0 3px var(--bd-bg-soft);
}

.resume.biz-dev .bd-entry-head {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:10px;
  flex-wrap:wrap;
}
.resume.biz-dev .bd-entry h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--bd-green-deep);
  line-height:1.4;
}
.resume.biz-dev .bd-company { color:var(--bd-green); }
.resume.biz-dev .bd-pos {
  margin-left:9px;
  padding-left:9px;
  font-weight:500;
  color:var(--bd-copper);
  position:relative;
}
.resume.biz-dev .bd-pos::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:1px; height:11px;
  background:var(--bd-line);
}
.resume.biz-dev .date {
  font-size:8.5pt;
  font-weight:600;
  color:var(--bd-muted);
  white-space:nowrap;
  background:var(--bd-bg-soft);
  padding:2px 8px;
  border-radius:20px;
  letter-spacing:.3px;
}

.resume.biz-dev .bd-entry ul {
  list-style:none;
  margin-top:6px;
}
.resume.biz-dev .bd-entry li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  color:var(--bd-ink);
}
.resume.biz-dev .bd-entry li::before {
  content:"";
  position:absolute;
  left:2px; top:.62em;
  width:5px; height:5px;
  border-radius:1px;
  background:var(--bd-copper);
  transform:rotate(45deg);
}

/* projects */
.resume.biz-dev .bd-entry-proj {
  padding:10px 13px;
  background:var(--bd-bg-soft);
  border-radius:7px;
  border:1px solid var(--bd-line);
  border-left:3px solid var(--bd-green-2);
}
.resume.biz-dev .bd-proj-name { font-size:11pt; font-weight:700; color:var(--bd-green-deep); }
.resume.biz-dev .bd-proj-role {
  margin-left:8px;
  font-size:8.5pt;
  font-weight:600;
  color:var(--bd-copper);
  background:rgba(184,115,51,.12);
  padding:2px 9px;
  border-radius:20px;
}
.resume.biz-dev .bd-proj-desc { margin-top:5px; color:var(--bd-muted); }
.resume.biz-dev .bd-entry-proj ul { margin-top:5px; }

/* ===== Skills ===== */
.resume.biz-dev .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.biz-dev .bd-skill {
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:4px 12px;
  font-size:9.5pt;
  font-weight:600;
  color:var(--bd-green-deep);
  background:#fff;
  border:1.5px solid var(--bd-green);
  border-radius:5px;
}
.resume.biz-dev .bd-skill-lv {
  font-size:8pt;
  font-weight:600;
  color:#fff;
  background:var(--bd-copper);
  padding:1px 7px;
  border-radius:12px;
}

/* ===== Education ===== */
.resume.biz-dev .bd-entry-edu .bd-edu-meta {
  margin-top:2px;
  color:var(--bd-muted);
  font-size:9.5pt;
}

/* ===== Required tail rules ===== */
.resume.biz-dev li p, .resume.biz-dev li div { margin:0; padding:0; display:inline; }
.resume.biz-dev .skills span, .resume.biz-dev [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.biz-dev { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
  .resume.biz-dev section { page-break-inside:avoid; }
  .resume.biz-dev .bd-entry { page-break-inside:avoid; }
}`,
    schema: {
      "templateId": "biz-dev",
      "version": "1.0.0",
      "name": "商务拓展",
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
