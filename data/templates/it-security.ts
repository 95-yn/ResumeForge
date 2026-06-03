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
    slug: 'it-security',
    name: '网络安全',
    category: 'tech',
    html: `<div class="resume it-security">
  <header>
    <div class="term-bar"><span class="dot d1"></span><span class="dot d2"></span><span class="dot d3"></span><span class="term-path">~/secops/profile --identity</span></div>
    <div class="id-block">
      <div class="shield">
        <svg viewBox="0 0 24 28" aria-hidden="true"><path d="M12 1L2 5v8c0 7 4.5 11 10 13 5.5-2 10-6 10-13V5L12 1z"/><path class="check" d="M7.5 13.5l3 3 6-6.5"/></svg>
      </div>
      <div class="id-text">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title"><span class="prompt">&gt;</span> {{{basics.title}}}<span class="caret"></span></p>{{/if}}
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span class="ctk" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="ctk" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="ctk" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="sec sec-summary">
    <h2><span class="h-mark">##</span> 个人简介</h2>
    <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="sec" data-section="experience">
    <h2><span class="h-mark">##</span> 工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep">/</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="sec" data-section="education">
    <h2><span class="h-mark">##</span> 教育背景</h2>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> <span class="sep">·</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec" data-section="skills">
    <h2><span class="h-mark">##</span> 专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="chip-key" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="chip-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="sec" data-section="projects">
    <h2><span class="h-mark">##</span> 项目经历</h2>
    {{#each projects}}<div class="entry proj" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="sep">·</span><span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.it-security * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-security * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-security {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  background:#0a0e0c;
  color:#c8e6d4;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  background-image:
    linear-gradient(rgba(0,255,140,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,140,0.035) 1px, transparent 1px);
  background-size:22px 22px;
  position:relative;
}

.resume.it-security::before {
  content:"";
  position:absolute;
  top:0; left:0; right:0;
  height:4px;
  background:linear-gradient(90deg,#00ff8c,#00e0a0 40%,transparent);
}

/* ===== HEADER ===== */
.resume.it-security header {
  border:1px solid rgba(0,255,140,0.28);
  border-radius:8px;
  background:linear-gradient(160deg,#0d1411,#0a0e0c);
  padding:0 0 14px;
  margin-bottom:18px;
  box-shadow:0 0 0 1px rgba(0,255,140,0.05), 0 6px 28px rgba(0,0,0,0.5);
  overflow:hidden;
}

.resume.it-security .term-bar {
  display:flex;
  align-items:center;
  gap:7px;
  padding:8px 14px;
  background:rgba(0,255,140,0.06);
  border-bottom:1px solid rgba(0,255,140,0.18);
}
.resume.it-security .dot { width:9px; height:9px; border-radius:50%; display:inline-block; }
.resume.it-security .d1 { background:#ff5f56; }
.resume.it-security .d2 { background:#ffbd2e; }
.resume.it-security .d3 { background:#00ff8c; box-shadow:0 0 6px #00ff8c; }
.resume.it-security .term-path {
  margin-left:8px;
  font-family:'SF Mono','Cascadia Code','Consolas',monospace;
  font-size:8.5pt;
  color:#5a8a72;
  letter-spacing:0.3px;
}

.resume.it-security .id-block {
  display:flex;
  align-items:center;
  gap:16px;
  padding:16px 18px 4px;
}
.resume.it-security .shield {
  flex:0 0 auto;
  width:54px; height:54px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid rgba(0,255,140,0.4);
  border-radius:10px;
  background:rgba(0,255,140,0.07);
  box-shadow:0 0 14px rgba(0,255,140,0.18) inset;
}
.resume.it-security .shield svg { width:30px; height:34px; }
.resume.it-security .shield svg path { fill:none; stroke:#00ff8c; stroke-width:1.6; stroke-linejoin:round; }
.resume.it-security .shield svg path:first-child { fill:rgba(0,255,140,0.08); }
.resume.it-security .shield .check { stroke-width:2.2; stroke-linecap:round; filter:drop-shadow(0 0 3px #00ff8c); }

.resume.it-security .id-text { flex:1 1 auto; min-width:0; }
.resume.it-security h1 {
  font-size:23pt;
  font-weight:800;
  color:#eafff2;
  letter-spacing:1px;
  line-height:1.1;
  text-shadow:0 0 14px rgba(0,255,140,0.35);
}
.resume.it-security .role {
  margin-top:5px;
  font-family:'SF Mono','Cascadia Code','Consolas',monospace;
  font-size:10pt;
  color:#00ff8c;
  letter-spacing:0.4px;
  display:flex;
  align-items:center;
}
.resume.it-security .role .prompt { color:#00ff8c; margin-right:6px; font-weight:700; }
.resume.it-security .caret {
  display:inline-block;
  width:8px; height:1.05em;
  margin-left:5px;
  background:#00ff8c;
  box-shadow:0 0 7px #00ff8c;
  vertical-align:-2px;
}

.resume.it-security .contact {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  padding:12px 18px 0;
}
.resume.it-security .ctk {
  font-family:'SF Mono','Cascadia Code','Consolas',monospace;
  font-size:8.5pt;
  color:#9fd4b8;
  padding:3px 10px;
  border:1px solid rgba(0,255,140,0.22);
  border-radius:4px;
  background:rgba(0,255,140,0.04);
  position:relative;
}
.resume.it-security .ctk::before { content:"["; color:#00ff8c; margin-right:3px; }
.resume.it-security .ctk::after { content:"]"; color:#00ff8c; margin-left:3px; }

/* ===== SECTIONS ===== */
.resume.it-security .sec { margin-bottom:18px; }
.resume.it-security h2 {
  font-size:12pt;
  font-weight:700;
  color:#eafff2;
  letter-spacing:1px;
  padding-bottom:7px;
  margin-bottom:11px;
  border-bottom:1px solid rgba(0,255,140,0.22);
  position:relative;
}
.resume.it-security h2 .h-mark {
  font-family:'SF Mono','Cascadia Code','Consolas',monospace;
  color:#00ff8c;
  margin-right:8px;
  font-size:11pt;
  text-shadow:0 0 8px rgba(0,255,140,0.4);
}
.resume.it-security h2::after {
  content:"";
  position:absolute;
  left:0; bottom:-1px;
  width:60px; height:2px;
  background:#00ff8c;
  box-shadow:0 0 8px #00ff8c;
}

.resume.it-security .summary {
  border-left:2px solid rgba(0,255,140,0.45);
  padding:8px 0 8px 14px;
  color:#bfe0cf;
  font-size:9.5pt;
}

/* ===== ENTRIES ===== */
.resume.it-security .entry {
  position:relative;
  padding:11px 13px 11px 15px;
  margin-bottom:10px;
  border:1px solid rgba(0,255,140,0.14);
  border-left:3px solid #00ff8c;
  border-radius:5px;
  background:rgba(0,255,140,0.022);
}
.resume.it-security .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:12px;
  flex-wrap:wrap;
}
.resume.it-security h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#eafff2;
}
.resume.it-security .company { color:#eafff2; }
.resume.it-security .position { color:#00ff8c; }
.resume.it-security .sep { color:#4a6a5a; margin:0 7px; font-weight:400; }
.resume.it-security .date {
  font-family:'SF Mono','Cascadia Code','Consolas',monospace;
  font-size:8pt;
  color:#6fb392;
  white-space:nowrap;
  padding:2px 8px;
  border:1px solid rgba(0,255,140,0.2);
  border-radius:3px;
  background:rgba(0,0,0,0.25);
}

.resume.it-security .entry ul { list-style:none; margin-top:8px; }
.resume.it-security .entry li {
  position:relative;
  padding-left:18px;
  margin-bottom:4px;
  font-size:9.5pt;
  color:#bfe0cf;
}
.resume.it-security .entry li::before {
  content:"›";
  position:absolute;
  left:2px;
  top:-1px;
  color:#00ff8c;
  font-weight:800;
  font-size:11pt;
  text-shadow:0 0 6px rgba(0,255,140,0.5);
}

.resume.it-security .edu-meta {
  margin-top:5px;
  font-size:9pt;
  color:#9fd4b8;
  font-family:'SF Mono','Cascadia Code','Consolas',monospace;
}

/* ===== SKILLS ===== */
.resume.it-security .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.it-security .skill-chip {
  display:inline-flex;
  align-items:stretch;
  border:1px solid rgba(0,255,140,0.3);
  border-radius:4px;
  overflow:hidden;
  font-family:'SF Mono','Cascadia Code','Consolas',monospace;
  font-size:8.5pt;
  background:rgba(0,255,140,0.05);
}
.resume.it-security .chip-key {
  padding:3px 9px;
  color:#eafff2;
  font-weight:600;
}
.resume.it-security .chip-lv {
  padding:3px 9px;
  color:#0a0e0c;
  background:#00ff8c;
  font-weight:700;
  box-shadow:0 0 8px rgba(0,255,140,0.4);
}

/* ===== PROJECTS ===== */
.resume.it-security .proj-name { color:#eafff2; }
.resume.it-security .proj-role { color:#00ff8c; }
.resume.it-security .proj-desc {
  margin-top:6px;
  font-size:9.5pt;
  color:#bfe0cf;
}

/* ===== REQUIRED TAIL ===== */
.resume.it-security li p, .resume.it-security li div { margin:0; padding:0; display:inline; }
.resume.it-security .skills span, .resume.it-security [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.it-security { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "it-security",
      "version": "1.0.0",
      "name": "网络安全",
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
