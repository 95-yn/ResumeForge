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
    slug: 'it-cloud',
    name: '云架构师',
    category: 'tech',
    html: `<div class="resume it-cloud">
  <header>
    <div class="hd-grid"></div>
    <div class="hd-inner">
      <div class="node-badge"><span class="node-dot"></span></div>
      <div class="hd-text">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary"><h2><span class="h2-node"></span>个人简介</h2><div class="card" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="h2-node"></span>工作经历</h2>
    <div class="topo">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="conn"></span>
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="h2-node"></span>项目经历</h2>
    {{#each projects}}<div class="entry proj" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="pdesc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="h2-node"></span>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-node" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-pin"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="h2-node"></span>教育背景</h2>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.it-cloud * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-cloud * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-cloud {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:0 0 18mm;
  background:#fff; color:#1a2b3c; font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --sky:#0ea5e9; --sky-deep:#0369a1; --sky-soft:#e0f2fe; --sky-line:#bae6fd;
}

/* ===== Header: 拓扑天空 ===== */
.resume.it-cloud header {
  position:relative; overflow:hidden;
  padding:16mm 18mm 13mm;
  background:linear-gradient(135deg,#0c4a6e 0%,#0369a1 45%,#0ea5e9 100%);
  color:#fff;
}
.resume.it-cloud .hd-grid {
  position:absolute; inset:0; opacity:.5;
  background-image:
    radial-gradient(circle at 18% 30%, rgba(255,255,255,.55) 1.6px, transparent 2px),
    radial-gradient(circle at 78% 22%, rgba(255,255,255,.45) 1.6px, transparent 2px),
    radial-gradient(circle at 62% 70%, rgba(255,255,255,.4) 1.6px, transparent 2px),
    radial-gradient(circle at 90% 60%, rgba(255,255,255,.35) 1.4px, transparent 2px),
    linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px);
  background-size:auto,auto,auto,auto,26px 26px,26px 26px;
}
.resume.it-cloud .hd-inner {
  position:relative; z-index:1;
  display:flex; align-items:center; flex-wrap:wrap; gap:14px;
}
.resume.it-cloud .node-badge {
  width:46px; height:46px; flex:0 0 auto; border-radius:14px;
  background:rgba(255,255,255,.14); border:1.5px solid rgba(255,255,255,.5);
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 0 0 6px rgba(255,255,255,.08);
}
.resume.it-cloud .node-dot {
  width:16px; height:16px; border-radius:50%; background:#fff;
  box-shadow:0 0 12px rgba(255,255,255,.9);
}
.resume.it-cloud .hd-text { flex:1 1 auto; min-width:0; }
.resume.it-cloud header h1 {
  font-size:26pt; font-weight:800; letter-spacing:2px; line-height:1.1;
}
.resume.it-cloud header .hd-text p {
  margin-top:5px; font-size:11pt; font-weight:500;
  color:#e0f2fe; letter-spacing:1.5px;
}
.resume.it-cloud .contact {
  flex:1 1 100%; z-index:1; position:relative;
  margin-top:11px; padding-top:11px;
  border-top:1px solid rgba(255,255,255,.22);
  display:flex; flex-wrap:wrap; gap:8px 18px;
  font-size:9pt; color:#e0f2fe;
}
.resume.it-cloud .contact span { display:inline-flex; align-items:center; }
.resume.it-cloud .contact span::before {
  content:''; width:5px; height:5px; border-radius:50%;
  background:#7dd3fc; margin-right:7px;
  box-shadow:0 0 6px #7dd3fc;
}

/* ===== Sections ===== */
.resume.it-cloud section { padding:0 18mm; margin-top:11mm; }
.resume.it-cloud .summary { margin-top:9mm; }
.resume.it-cloud h2 {
  display:flex; align-items:center; gap:9px;
  font-size:13pt; font-weight:700; color:var(--sky-deep);
  letter-spacing:1px; padding-bottom:7px; margin-bottom:11px;
  border-bottom:2px solid var(--sky-soft);
  position:relative;
}
.resume.it-cloud h2::after {
  content:''; position:absolute; left:0; bottom:-2px; width:46px; height:2px;
  background:var(--sky);
}
.resume.it-cloud .h2-node {
  width:11px; height:11px; flex:0 0 auto; border-radius:3px;
  background:var(--sky); transform:rotate(45deg);
  box-shadow:0 0 0 3px var(--sky-soft);
}

/* summary card */
.resume.it-cloud .card {
  background:linear-gradient(180deg,#f0f9ff,#fff);
  border:1px solid var(--sky-line); border-left:4px solid var(--sky);
  border-radius:8px; padding:11px 14px; color:#334155; font-size:9.5pt;
}

/* ===== topo entries ===== */
.resume.it-cloud .topo { position:relative; padding-left:16px; }
.resume.it-cloud .topo::before {
  content:''; position:absolute; left:4px; top:6px; bottom:6px; width:2px;
  background:linear-gradient(180deg,var(--sky),var(--sky-line));
}
.resume.it-cloud .entry { position:relative; margin-bottom:13px; }
.resume.it-cloud .topo .entry { padding-left:6px; }
.resume.it-cloud .topo .entry .conn {
  position:absolute; left:-15px; top:5px;
  width:11px; height:11px; border-radius:50%;
  background:#fff; border:2.5px solid var(--sky);
  box-shadow:0 0 0 3px var(--sky-soft);
}
.resume.it-cloud .entry-head {
  display:flex; justify-content:space-between; align-items:baseline;
  flex-wrap:wrap; gap:4px 12px;
}
.resume.it-cloud .entry h3 {
  font-size:11pt; font-weight:700; color:#0f2435;
  display:flex; align-items:baseline; flex-wrap:wrap; gap:8px;
}
.resume.it-cloud .entry h3 .pos,
.resume.it-cloud .entry h3 .prole {
  font-size:9.5pt; font-weight:600; color:var(--sky-deep);
  padding:1px 9px; border-radius:20px;
  background:var(--sky-soft);
}
.resume.it-cloud .date {
  font-size:8.5pt; font-weight:500; color:#64748b;
  white-space:nowrap; font-variant-numeric:tabular-nums;
}
.resume.it-cloud .entry ul { list-style:none; margin-top:6px; }
.resume.it-cloud .entry li {
  position:relative; padding-left:16px; margin-bottom:4px;
  font-size:9.5pt; color:#3a4a5a;
}
.resume.it-cloud .entry li::before {
  content:''; position:absolute; left:2px; top:6.5px;
  width:5px; height:5px; border-radius:1px; background:var(--sky);
  transform:rotate(45deg);
}

/* projects */
.resume.it-cloud .entry.proj {
  background:#f8fcff; border:1px solid var(--sky-line);
  border-radius:9px; padding:10px 13px; margin-bottom:9px;
}
.resume.it-cloud .pdesc { margin-top:4px; font-size:9.3pt; color:#475569; }
.resume.it-cloud .entry.proj h3 .pname { color:var(--sky-deep); }

/* skills */
.resume.it-cloud .skills { display:flex; flex-wrap:wrap; gap:8px; }
.resume.it-cloud .skill-node {
  display:inline-flex; align-items:center; gap:6px;
  padding:5px 12px; border-radius:7px;
  background:#fff; border:1px solid var(--sky-line);
  font-size:9pt; font-weight:600; color:#1e3a4f;
  box-shadow:0 1px 0 var(--sky-soft);
}
.resume.it-cloud .sk-pin {
  width:7px; height:7px; border-radius:50%;
  background:var(--sky); box-shadow:0 0 0 2px var(--sky-soft);
}
.resume.it-cloud .skill-node .lvl {
  font-size:8pt; font-weight:500; color:#0369a1;
  padding-left:7px; border-left:1px solid var(--sky-line);
}

/* education */
.resume.it-cloud .entry.edu p {
  margin-top:3px; font-size:9.3pt; color:#475569;
}

/* ===== contract tails ===== */
.resume.it-cloud li p, .resume.it-cloud li div { margin:0; padding:0; display:inline; }
.resume.it-cloud .skills span, .resume.it-cloud [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.it-cloud { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.it-cloud section { break-inside:avoid; }
  .resume.it-cloud .entry { break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "it-cloud",
      "version": "1.0.0",
      "name": "云架构师",
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
