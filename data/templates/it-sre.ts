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
    slug: 'it-sre',
    name: 'SRE可靠性',
    category: 'tech',
    html: `<div class="resume it-sre">
  <header>
    <div class="hdr-grid">
      <div class="hdr-id">
        <span class="status-dot"></span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="hdr-gauges">
        <div class="gauge"><span class="gauge-val">99.99%</span><span class="gauge-lbl">UPTIME</span><span class="gauge-bar"><i style="width:99%"></i></span></div>
        <div class="gauge"><span class="gauge-val">&lt;5m</span><span class="gauge-lbl">MTTR</span><span class="gauge-bar"><i style="width:88%"></i></span></div>
        <div class="gauge"><span class="gauge-val">SLO</span><span class="gauge-lbl">ON TRACK</span><span class="gauge-bar"><i style="width:94%"></i></span></div>
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section><h2>个人简介</h2><div class="panel summary" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="panel entry" data-entry="experience" data-entry-index="{{@index}}">
      <h3><span class="metric-on"></span><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
      <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="panel entry" data-entry="education" data-entry-index="{{@index}}"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span><p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="panel entry" data-entry="projects" data-entry-index="{{@index}}"><h3><span class="metric-on"></span><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>{{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.it-sre * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-sre * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-sre {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:16mm 18mm;
  background:#0d1117; color:#c9d1d9;
  font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --orange:#ff7b1a; --orange-soft:#ff9a4d; --green:#3fb950; --line:#21262d; --panel:#161b22; --muted:#8b949e;
}

/* ---------- Header ---------- */
.resume.it-sre header {
  background:linear-gradient(135deg,#161b22 0%,#0d1117 100%);
  border:1px solid var(--line); border-top:3px solid var(--orange);
  border-radius:6px; padding:16px 20px; margin-bottom:18px;
  position:relative; overflow:hidden;
}
.resume.it-sre header::after {
  content:''; position:absolute; inset:0;
  background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);
  background-size:26px 26px; opacity:.18; pointer-events:none;
}
.resume.it-sre .hdr-grid {
  position:relative; z-index:1;
  display:flex; justify-content:space-between; align-items:flex-start; gap:24px; flex-wrap:wrap;
}
.resume.it-sre .hdr-id { display:flex; flex-direction:column; }
.resume.it-sre .status-dot {
  display:inline-block; width:8px; height:8px; border-radius:50%;
  background:var(--green); box-shadow:0 0 0 3px rgba(63,185,80,.18); margin-bottom:6px;
}
.resume.it-sre h1 {
  font-size:23pt; font-weight:800; color:#f0f6fc; letter-spacing:.5px; line-height:1.1;
}
.resume.it-sre .hdr-id p {
  margin-top:5px; font-size:10.5pt; color:var(--orange-soft);
  font-weight:600; letter-spacing:1.2px; text-transform:uppercase;
}

/* gauges */
.resume.it-sre .hdr-gauges { display:flex; gap:12px; }
.resume.it-sre .gauge {
  background:rgba(13,17,23,.7); border:1px solid var(--line);
  border-radius:5px; padding:7px 11px; min-width:74px; text-align:left;
}
.resume.it-sre .gauge-val {
  display:block; font-size:13pt; font-weight:800; color:var(--orange);
  font-family:'SF Mono','Consolas',monospace; line-height:1;
}
.resume.it-sre .gauge-lbl {
  display:block; font-size:6pt; letter-spacing:1.5px; color:var(--muted);
  margin:4px 0 5px; font-family:'SF Mono','Consolas',monospace;
}
.resume.it-sre .gauge-bar {
  display:block; height:3px; background:#21262d; border-radius:2px; overflow:hidden;
}
.resume.it-sre .gauge-bar i {
  display:block; height:100%;
  background:linear-gradient(90deg,var(--orange),var(--orange-soft));
}

.resume.it-sre .contact {
  position:relative; z-index:1;
  display:flex; flex-wrap:wrap; gap:8px 18px; margin-top:14px;
  font-size:9pt; color:var(--muted);
  font-family:'SF Mono','Consolas',monospace;
}
.resume.it-sre .contact span { position:relative; padding-left:13px; }
.resume.it-sre .contact span::before {
  content:''; position:absolute; left:0; top:50%; transform:translateY(-50%);
  width:5px; height:5px; background:var(--orange); border-radius:1px;
}

/* ---------- Sections ---------- */
.resume.it-sre section { margin-bottom:16px; }
.resume.it-sre h2 {
  font-size:9pt; font-weight:700; color:var(--orange);
  letter-spacing:2.5px; text-transform:uppercase;
  margin-bottom:10px; padding-bottom:6px;
  border-bottom:1px solid var(--line);
  display:flex; align-items:center; gap:8px;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.it-sre h2::before {
  content:'▸'; color:var(--orange); font-size:9pt;
}

/* panels */
.resume.it-sre .panel {
  background:var(--panel); border:1px solid var(--line);
  border-radius:5px; padding:11px 14px; margin-bottom:8px;
  position:relative;
}
.resume.it-sre .panel::before {
  content:''; position:absolute; left:0; top:10px; bottom:10px; width:2px;
  background:var(--orange); border-radius:2px; opacity:.7;
}
.resume.it-sre .summary {
  color:#adbac7; line-height:1.65;
  background:rgba(255,123,26,.05);
}
.resume.it-sre .summary::before {
  background:var(--orange); opacity:.9;
}

/* entry */
.resume.it-sre .entry h3 {
  font-size:11pt; color:#f0f6fc; font-weight:700;
  display:flex; align-items:center; flex-wrap:wrap; gap:6px;
}
.resume.it-sre .metric-on {
  display:inline-block; width:6px; height:6px; border-radius:50%;
  background:var(--green); box-shadow:0 0 5px rgba(63,185,80,.6); flex:0 0 auto;
}
.resume.it-sre .pos {
  font-size:9pt; font-weight:600; color:var(--orange-soft);
  background:rgba(255,123,26,.1); border:1px solid rgba(255,123,26,.3);
  padding:1px 8px; border-radius:3px;
}
.resume.it-sre .date {
  display:inline-block; margin-top:4px;
  font-size:8pt; color:var(--muted); letter-spacing:.5px;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.it-sre .edu-meta { font-size:9.5pt; color:#adbac7; margin-top:4px; }

.resume.it-sre .entry ul { list-style:none; margin-top:8px; }
.resume.it-sre .entry li {
  position:relative; padding-left:16px; margin-bottom:5px;
  font-size:9.5pt; color:#adbac7; line-height:1.55;
}
.resume.it-sre .entry li::before {
  content:''; position:absolute; left:0; top:7px;
  width:6px; height:6px; border:1.5px solid var(--orange);
  border-radius:1px; transform:rotate(45deg);
}
.resume.it-sre .proj-desc {
  font-size:9.5pt; color:#9aa7b3; margin-top:6px; line-height:1.55;
}

/* skills */
.resume.it-sre .skills { display:flex; flex-wrap:wrap; gap:7px; }
.resume.it-sre .skill-chip {
  display:inline-flex; align-items:center;
  position:relative;
  background:var(--panel); border:1px solid var(--line);
  border-radius:4px; padding:4px 11px 4px 16px;
  font-size:9pt; color:#dde3ea;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.it-sre .skill-chip::before {
  content:''; position:absolute; left:8px; top:50%; transform:translateY(-50%);
  width:4px; height:4px; background:var(--orange); border-radius:1px;
}
.resume.it-sre .skill-chip .lvl { color:var(--orange-soft); font-weight:600; }

/* contract-required tails */
.resume.it-sre li p, .resume.it-sre li div { margin:0; padding:0; display:inline; }
.resume.it-sre .skills span, .resume.it-sre [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.it-sre { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "it-sre",
      "version": "1.0.0",
      "name": "SRE可靠性",
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
