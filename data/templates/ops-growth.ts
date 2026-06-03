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
    slug: 'ops-growth',
    name: '增长运营',
    category: 'profession',
    html: `<div class="resume ops-growth">
  <header>
    <div class="hd-left">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="hd-curve" aria-hidden="true">
      <svg viewBox="0 0 120 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ogGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stop-color="#e23b1f"/>
            <stop offset="1" stop-color="#e8920f"/>
          </linearGradient>
        </defs>
        <path class="og-area" d="M0,78 C30,72 50,52 70,34 C88,18 102,12 120,4 L120,80 L0,80 Z"/>
        <path class="og-line" d="M0,78 C30,72 50,52 70,34 C88,18 102,12 120,4"/>
        <circle class="og-dot" cx="70" cy="34" r="3.5"/>
        <circle class="og-dot" cx="120" cy="4" r="3.5"/>
      </svg>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary"><h2>个人简介</h2><div class="sm-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience"><h2>工作经历</h2>
    <div class="funnel">
    {{#each experience}}<div class="entry exp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="stage-num">{{inc @index}}</span>
      <div class="entry-body">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry proj-entry" data-entry="projects" data-entry-index="{{@index}}"><h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>{{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry edu-entry" data-entry="education" data-entry-index="{{@index}}"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span><p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.ops-growth * { margin:0; padding:0; box-sizing:border-box; }
.resume.ops-growth * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.ops-growth {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  color:#241a16;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --og-red:#e23b1f;
  --og-orange:#e8920f;
  --og-ink:#241a16;
  --og-muted:#7a6f69;
  --og-line:#f0e4de;
  --og-soft:#fdf2ec;
}

/* ===== Header ===== */
.resume.ops-growth header {
  position:relative;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:14mm;
  padding-bottom:14px;
  margin-bottom:18px;
  border-bottom:3px solid var(--og-ink);
}
.resume.ops-growth .hd-left { flex:1 1 auto; min-width:0; }
.resume.ops-growth h1 {
  font-size:27pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.05;
  color:var(--og-ink);
}
.resume.ops-growth .hd-title {
  display:inline-block;
  margin-top:8px;
  font-size:11pt;
  font-weight:700;
  color:#fff;
  background:var(--og-red);
  padding:3px 12px;
  border-radius:2px 10px 2px 10px;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.resume.ops-growth .contact {
  margin-top:11px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 16px;
  font-size:9pt;
  color:var(--og-muted);
}
.resume.ops-growth .contact span { position:relative; padding-left:13px; }
.resume.ops-growth .contact span::before {
  content:'';
  position:absolute;
  left:0; top:50%;
  width:5px; height:5px;
  transform:translateY(-50%);
  border-radius:50%;
  background:var(--og-red);
}

/* growth curve */
.resume.ops-growth .hd-curve {
  flex:0 0 46mm;
  height:24mm;
  align-self:flex-end;
}
.resume.ops-growth .hd-curve svg { width:100%; height:100%; display:block; }
.resume.ops-growth .og-area { fill:url(#ogGrad); opacity:.14; }
.resume.ops-growth .og-line { fill:none; stroke:url(#ogGrad); stroke-width:3; stroke-linecap:round; }
.resume.ops-growth .og-dot { fill:var(--og-red); stroke:#fff; stroke-width:1.5; }

/* ===== Section ===== */
.resume.ops-growth .block { margin-bottom:17px; }
.resume.ops-growth h2 {
  position:relative;
  font-size:11.5pt;
  font-weight:800;
  letter-spacing:1px;
  color:var(--og-ink);
  padding-left:16px;
  margin-bottom:11px;
}
.resume.ops-growth h2::before {
  content:'';
  position:absolute;
  left:0; top:1px; bottom:1px;
  width:6px;
  border-radius:3px;
  background:linear-gradient(180deg,var(--og-red),var(--og-orange));
}

/* ===== Summary — tinted full panel, no side stripe ===== */
.resume.ops-growth .summary .sm-body {
  font-size:10pt;
  color:#3c302b;
  background:var(--og-soft);
  border:1px solid var(--og-line);
  padding:10px 14px;
  border-radius:8px;
}

/* ===== Experience funnel ===== */
.resume.ops-growth .funnel { position:relative; }
.resume.ops-growth .exp-entry {
  position:relative;
  display:flex;
  gap:12px;
  padding-bottom:14px;
  margin-bottom:14px;
}
.resume.ops-growth .exp-entry:last-child { margin-bottom:0; padding-bottom:0; }
.resume.ops-growth .exp-entry::before {
  content:'';
  position:absolute;
  left:9px; top:24px; bottom:-4px;
  width:2px;
  background:repeating-linear-gradient(180deg,var(--og-orange) 0 4px,transparent 4px 9px);
}
.resume.ops-growth .exp-entry:last-child::before { display:none; }
.resume.ops-growth .stage-num {
  flex:0 0 20px;
  height:20px;
  margin-top:2px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--og-red),var(--og-orange));
  color:#fff;
  font-size:9pt;
  font-weight:800;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:1;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.resume.ops-growth .entry-body { flex:1 1 auto; min-width:0; }

.resume.ops-growth .exp-entry h3 {
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 10px;
  font-size:11pt;
  font-weight:400;
}
.resume.ops-growth .company { font-weight:800; color:var(--og-ink); }
.resume.ops-growth .position {
  font-weight:700;
  font-size:9.5pt;
  color:var(--og-red);
}
.resume.ops-growth .date {
  display:inline-block;
  margin-top:3px;
  font-size:8.5pt;
  font-weight:600;
  color:var(--og-muted);
  letter-spacing:.3px;
}

.resume.ops-growth ul { list-style:none; margin-top:7px; }
.resume.ops-growth li {
  position:relative;
  padding-left:15px;
  margin-bottom:4px;
  font-size:9.5pt;
  color:#3c302b;
}
.resume.ops-growth li::before {
  content:"\\25B8";
  position:absolute;
  left:0; top:0;
  color:var(--og-red);
  font-size:9pt;
  line-height:inherit;
  -webkit-print-color-adjust:exact;
  print-color-adjust:exact;
}

/* ===== Projects — full frame card, leading dot, no colored side bar ===== */
.resume.ops-growth .proj-entry {
  position:relative;
  padding:9px 13px 9px 18px;
  margin-bottom:9px;
  border:1px solid var(--og-line);
  border-radius:7px;
  background:#fffdfb;
}
.resume.ops-growth .proj-entry::before {
  content:'';
  position:absolute;
  left:9px; top:13px;
  width:6px; height:6px;
  border-radius:50%;
  background:var(--og-orange);
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.resume.ops-growth .proj-entry:last-child { margin-bottom:0; }
.resume.ops-growth .proj-entry h3 {
  font-size:10.5pt;
  font-weight:400;
}
.resume.ops-growth .proj-name { font-weight:800; color:var(--og-ink); }
.resume.ops-growth .proj-role {
  font-size:8.5pt;
  font-weight:700;
  color:#fff;
  background:var(--og-orange);
  padding:1px 8px;
  border-radius:9px;
  vertical-align:1px;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.resume.ops-growth .proj-desc {
  margin-top:4px;
  font-size:9.5pt;
  color:#4a3e39;
}

/* ===== Skills ===== */
.resume.ops-growth .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.ops-growth .skill-tag {
  display:inline-flex;
  align-items:center;
  gap:6px;
  font-size:9.5pt;
  font-weight:700;
  color:var(--og-ink);
  padding:4px 11px;
  border-radius:20px;
  background:var(--og-soft);
  border:1px solid #f1d3c5;
}
.resume.ops-growth .skill-tag .lvl {
  font-size:8pt;
  font-weight:600;
  color:#fff;
  background:linear-gradient(135deg,var(--og-red),var(--og-orange));
  padding:1px 7px;
  border-radius:10px;
}

/* ===== Education ===== */
.resume.ops-growth .edu-entry {
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:3px 12px;
  padding:7px 0;
  border-bottom:1px dashed var(--og-line);
}
.resume.ops-growth .edu-entry:last-child { border-bottom:none; }
.resume.ops-growth .edu-entry h3 {
  font-size:10.5pt;
  font-weight:800;
  color:var(--og-ink);
}
.resume.ops-growth .edu-meta {
  flex:1 1 100%;
  font-size:9pt;
  color:var(--og-muted);
}

/* ===== required tails ===== */
.resume.ops-growth li p, .resume.ops-growth li div { margin:0; padding:0; display:inline; }
.resume.ops-growth .skills span, .resume.ops-growth [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.ops-growth { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "ops-growth",
      "version": "1.0.0",
      "name": "增长运营",
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
