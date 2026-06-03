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
    slug: 'fin-quant',
    name: '量化分析',
    category: 'profession',
    html: `<div class="resume fin-quant">
  <header>
    <div class="hdr-grid">
      <div class="hdr-main">
        <span class="prompt-tag">$ ./trader --init</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="hdr-meta">
        <span class="ticker">SHARPE&nbsp;2.41 ▲</span>
        <div class="contact">
          {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
          {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
          {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
        </div>
      </div>
    </div>
    <div class="candle-strip" aria-hidden="true">
      <span class="cd up"></span><span class="cd dn"></span><span class="cd up"></span><span class="cd up"></span><span class="cd dn"></span><span class="cd up"></span><span class="cd dn"></span><span class="cd up"></span><span class="cd up"></span><span class="cd dn"></span><span class="cd up"></span><span class="cd up"></span><span class="cd dn"></span><span class="cd up"></span><span class="cd up"></span><span class="cd dn"></span><span class="cd up"></span><span class="cd up"></span><span class="cd dn"></span><span class="cd up"></span>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary"><h2><span class="hx">//</span> 个人简介</h2><div class="formula" aria-hidden="true">α = E[R] − Rf − β(E[Rm] − Rf)</div><div class="body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience"><h2><span class="hx">//</span> 工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> <span class="dash">→</span> <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education"><h2><span class="hx">//</span> 教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> <span class="dash">→</span> <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> <span class="dot">·</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills"><h2><span class="hx">//</span> 专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="bullet">▮</span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl">· <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects"><h2><span class="hx">//</span> 项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3 class="proj-h"><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="pos">· <span data-field="projects.{{@index}}.role">{{{role}}}</span></span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.fin-quant * { margin:0; padding:0; box-sizing:border-box; }
.resume.fin-quant * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.fin-quant {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.55;
  color:#1a2024;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --green:#16c172;
  --green-d:#0e8f54;
  --ink:#0a0e0d;
  --grid:rgba(22,193,114,0.10);
}

/* ===== HEADER : black terminal panel ===== */
.resume.fin-quant header {
  background:var(--ink);
  color:#d8f5e6;
  padding:9mm 9mm 0;
  margin:-18mm -18mm 8mm;
  position:relative;
  overflow:hidden;
  background-image:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size:7mm 7mm, 7mm 7mm;
}
.resume.fin-quant .hdr-grid {
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:10mm;
  position:relative;
}
.resume.fin-quant .prompt-tag {
  display:inline-block;
  font-family:'SF Mono','Roboto Mono',Consolas,monospace;
  font-size:7.5pt;
  letter-spacing:1px;
  color:var(--green);
  border:1px solid rgba(22,193,114,0.4);
  padding:1px 7px;
  border-radius:2px;
  margin-bottom:4mm;
}
.resume.fin-quant h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:1px;
  color:#fff;
  line-height:1.05;
}
.resume.fin-quant .role {
  margin-top:2.5mm;
  font-family:'SF Mono','Roboto Mono',Consolas,monospace;
  font-size:9.5pt;
  color:var(--green);
  letter-spacing:0.5px;
}
.resume.fin-quant .hdr-meta {
  text-align:right;
  flex-shrink:0;
}
.resume.fin-quant .ticker {
  display:inline-block;
  font-family:'SF Mono','Roboto Mono',Consolas,monospace;
  font-size:8pt;
  font-weight:700;
  color:var(--green);
  background:rgba(22,193,114,0.12);
  border:1px solid rgba(22,193,114,0.35);
  padding:1.5px 8px;
  border-radius:2px;
  margin-bottom:3.5mm;
  white-space:nowrap;
}
.resume.fin-quant .contact {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:1.5mm;
}
.resume.fin-quant .contact span {
  font-family:'SF Mono','Roboto Mono',Consolas,monospace;
  font-size:8pt;
  color:#9fd9bd;
  letter-spacing:0.3px;
}
.resume.fin-quant .contact span::before {
  content:'›';
  color:var(--green);
  margin-right:5px;
  font-weight:700;
}

/* candlestick strip */
.resume.fin-quant .candle-strip {
  display:flex;
  align-items:flex-end;
  gap:3px;
  height:11mm;
  margin-top:6mm;
  padding-bottom:2.5mm;
}
.resume.fin-quant .cd {
  position:relative;
  width:4px;
  border-radius:1px;
}
.resume.fin-quant .cd::before {
  content:'';
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:1px;
  top:-3px; bottom:-3px;
}
.resume.fin-quant .cd.up { height:60%; background:var(--green); }
.resume.fin-quant .cd.up::before { background:var(--green); }
.resume.fin-quant .cd.dn { height:38%; background:#e2453a; opacity:0.85; }
.resume.fin-quant .cd.dn::before { background:#e2453a; }
.resume.fin-quant .cd:nth-child(2n){ height:75%; }
.resume.fin-quant .cd:nth-child(3n){ height:50%; }
.resume.fin-quant .cd:nth-child(5n){ height:90%; }
.resume.fin-quant .cd:nth-child(7n){ height:45%; }

/* ===== SECTIONS ===== */
.resume.fin-quant .block { margin-bottom:6.5mm; }
.resume.fin-quant h2 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
  letter-spacing:1.5px;
  text-transform:uppercase;
  padding-bottom:2mm;
  margin-bottom:4mm;
  border-bottom:1.5px solid var(--ink);
  display:flex;
  align-items:baseline;
  gap:6px;
}
.resume.fin-quant h2 .hx {
  font-family:'SF Mono','Roboto Mono',Consolas,monospace;
  color:var(--green-d);
  font-size:11pt;
  font-weight:800;
}

/* summary */
.resume.fin-quant .summary .formula {
  position:relative;
  font-family:'SF Mono','Roboto Mono',Consolas,monospace;
  font-size:8pt;
  color:var(--green-d);
  background:rgba(22,193,114,0.07);
  border:1px solid rgba(22,193,114,0.18);
  padding:2px 9px 2px 16px;
  margin-bottom:3mm;
  letter-spacing:0.5px;
}
.resume.fin-quant .summary .formula::before {
  content:'';
  position:absolute;
  left:7px;
  top:50%;
  transform:translateY(-50%);
  width:4px;
  height:4px;
  background:var(--green);
}
.resume.fin-quant .summary .body { color:#34403a; }

/* entries */
.resume.fin-quant .entry { margin-bottom:4.5mm; }
.resume.fin-quant .entry:last-child { margin-bottom:0; }
.resume.fin-quant .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:8px;
  flex-wrap:wrap;
}
.resume.fin-quant h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
}
.resume.fin-quant .company { color:var(--ink); }
.resume.fin-quant .pos {
  font-weight:500;
  color:var(--green-d);
  font-size:10pt;
}
.resume.fin-quant h3 .company + .pos::before {
  content:'/';
  color:#b8c2bc;
  margin:0 6px;
  font-weight:400;
}
.resume.fin-quant .date {
  font-family:'SF Mono','Roboto Mono',Consolas,monospace;
  font-size:8pt;
  color:#6a766f;
  letter-spacing:0.3px;
  white-space:nowrap;
  flex-shrink:0;
}
.resume.fin-quant .date .dash { color:var(--green); font-weight:700; }
.resume.fin-quant .edu-meta {
  font-size:9.5pt;
  color:#46524b;
  margin-top:1mm;
}
.resume.fin-quant .edu-meta .dot { color:var(--green); }

/* lists */
.resume.fin-quant ul {
  list-style:none;
  margin-top:2mm;
}
.resume.fin-quant li {
  position:relative;
  padding-left:13px;
  margin-bottom:1.4mm;
  color:#34403a;
  font-size:9.7pt;
}
.resume.fin-quant li::before {
  content:'▸';
  position:absolute;
  left:0;
  top:0;
  color:var(--green);
  font-size:8pt;
}

/* projects */
.resume.fin-quant .proj-h .pos::before { content:''; margin:0; }
.resume.fin-quant .proj-desc {
  margin-top:1.5mm;
  color:#46524b;
  font-size:9.6pt;
}

/* skills */
.resume.fin-quant .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.fin-quant .skill-chip {
  display:inline-flex;
  align-items:center;
  gap:5px;
  font-size:9pt;
  color:var(--ink);
  background:#f1faf5;
  border:1px solid rgba(14,143,84,0.25);
  border-radius:3px;
  padding:1.5px 9px 1.5px 7px;
}
.resume.fin-quant .skill-chip .bullet { color:var(--green); font-size:6pt; }
.resume.fin-quant .skill-chip .lvl { color:#6a766f; font-size:8pt; }

/* contract-required tails */
.resume.fin-quant li p, .resume.fin-quant li div { margin:0; padding:0; display:inline; }
.resume.fin-quant .skills span, .resume.fin-quant [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.fin-quant { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "fin-quant",
      "version": "1.0.0",
      "name": "量化分析",
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
