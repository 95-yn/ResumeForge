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
    slug: 'brand-designer',
    name: '品牌设计',
    category: 'creative',
    html: `<div class="resume brand-designer">
  <header>
    <div class="brand-mark">
      <span class="mark-glyph">®</span>
      <span class="mark-grid"><i></i><i></i><i></i><i></i></span>
    </div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="summary">
    <h2><span class="idx">01</span>个人简介</h2>
    <div class="lead" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="block">
    <h2><span class="idx">02</span>工作经历</h2>
    <div class="entries">
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="entry">
      <div class="entry-meta">
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <div class="entry-body">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="block">
    <h2><span class="idx">03</span>项目经历</h2>
    <div class="entries">
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="entry">
      <div class="entry-meta"><span class="proj-tag">PROJECT</span></div>
      <div class="entry-body">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="block">
    <h2><span class="idx">04</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="skill-chip"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="block">
    <h2><span class="idx">05</span>教育背景</h2>
    <div class="entries">
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="entry">
      <div class="entry-meta"><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div>
      <div class="entry-body">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <p class="edu-line"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.brand-designer * { margin:0; padding:0; box-sizing:border-box; }
.resume.brand-designer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.brand-designer {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:20mm 18mm;
  background:#fff; color:#111;
  font-size:10pt; line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --ink:#111; --paper:#fff; --accent:#ff4d2e; --muted:#8a8a8a; --line:#e6e6e6;
}

/* ===== Header: 超大字 + logo 网格 ===== */
.resume.brand-designer header {
  position:relative;
  padding-bottom:14mm;
  margin-bottom:14mm;
  border-bottom:2px solid var(--ink);
}
.resume.brand-designer .brand-mark {
  display:flex; align-items:center; gap:10px;
  margin-bottom:10mm;
}
.resume.brand-designer .mark-glyph {
  font-size:22pt; line-height:1; font-weight:800; color:var(--accent);
}
.resume.brand-designer .mark-grid {
  display:grid; grid-template-columns:7px 7px; grid-template-rows:7px 7px; gap:3px;
}
.resume.brand-designer .mark-grid i {
  display:block; width:7px; height:7px; background:var(--ink);
}
.resume.brand-designer .mark-grid i:nth-child(2),
.resume.brand-designer .mark-grid i:nth-child(3) { background:var(--accent); }

.resume.brand-designer h1 {
  font-size:46pt; line-height:1; font-weight:800;
  letter-spacing:-0.02em;
  margin-bottom:6mm;
}
.resume.brand-designer .role {
  font-size:13pt; font-weight:600; color:var(--accent);
  text-transform:uppercase; letter-spacing:0.18em;
  margin-bottom:8mm;
}
.resume.brand-designer .contact {
  display:flex; flex-wrap:wrap; gap:0;
  font-size:9pt; color:var(--muted); letter-spacing:0.04em;
}
.resume.brand-designer .contact span {
  position:relative; padding:0 14px;
}
.resume.brand-designer .contact span:first-child { padding-left:0; }
.resume.brand-designer .contact span + span::before {
  content:''; position:absolute; left:0; top:50%;
  width:1px; height:11px; background:var(--line); transform:translateY(-50%);
}

/* ===== Section headings: 编号识别系统 ===== */
.resume.brand-designer section { margin-bottom:13mm; }
.resume.brand-designer h2 {
  display:flex; align-items:baseline; gap:14px;
  font-size:12pt; font-weight:800;
  text-transform:uppercase; letter-spacing:0.12em;
  margin-bottom:7mm;
  padding-bottom:0;
}
.resume.brand-designer h2 .idx {
  font-size:9pt; font-weight:700; color:var(--accent);
  border:1.5px solid var(--accent); border-radius:50%;
  width:24px; height:24px; min-width:24px;
  display:inline-flex; align-items:center; justify-content:center;
  letter-spacing:0;
}

/* ===== Summary lead ===== */
.resume.brand-designer .summary .lead {
  font-size:13pt; line-height:1.55; font-weight:500;
  color:#222; max-width:88%;
}

/* ===== Entries grid: 左侧 meta，右侧 body ===== */
.resume.brand-designer .entries { display:flex; flex-direction:column; }
.resume.brand-designer .entry {
  display:grid; grid-template-columns:38mm 1fr; gap:8mm;
  padding:6mm 0;
  border-top:1px solid var(--line);
}
.resume.brand-designer .entries .entry:first-child { border-top:none; padding-top:0; }
.resume.brand-designer .entry-meta { padding-top:1px; }
.resume.brand-designer .entry-meta .date {
  font-size:8.5pt; font-weight:600; color:var(--muted);
  letter-spacing:0.05em; display:block;
}
.resume.brand-designer .entry-meta .proj-tag,
.resume.brand-designer .entry-meta .date {
  white-space:normal;
}
.resume.brand-designer .proj-tag {
  display:inline-block;
  font-size:7.5pt; font-weight:700; letter-spacing:0.16em;
  color:var(--paper); background:var(--ink);
  padding:3px 7px;
}

.resume.brand-designer .entry-body h3 {
  font-size:13pt; font-weight:700; line-height:1.25;
  margin-bottom:3mm;
  display:flex; flex-wrap:wrap; align-items:baseline; gap:8px;
}
.resume.brand-designer .entry-body h3 .company { color:var(--ink); }
.resume.brand-designer .entry-body h3 .position,
.resume.brand-designer .entry-body h3 .proj-role {
  font-size:10pt; font-weight:600; color:var(--accent);
}
.resume.brand-designer .entry-body h3 .position::before,
.resume.brand-designer .entry-body h3 .proj-role::before {
  content:'/'; margin-right:8px; color:var(--line); font-weight:400;
}
.resume.brand-designer .proj-desc {
  font-size:9.5pt; color:#444; margin-bottom:3mm;
}

.resume.brand-designer ul { list-style:none; }
.resume.brand-designer li {
  position:relative; padding-left:16px; margin-bottom:2.5mm;
  font-size:9.5pt; color:#333;
}
.resume.brand-designer li::before {
  content:''; position:absolute; left:0; top:7px;
  width:6px; height:6px; background:var(--accent);
}

/* ===== Skills: chip 网格 ===== */
.resume.brand-designer .skills {
  display:flex; flex-wrap:wrap; gap:8px;
}
.resume.brand-designer .skill-chip {
  display:inline-flex; align-items:baseline; gap:5px;
  font-size:9pt; font-weight:600;
  padding:5px 12px;
  border:1.5px solid var(--ink);
}
.resume.brand-designer .skill-chip .lvl {
  font-weight:500; color:var(--muted);
}

/* ===== Education line ===== */
.resume.brand-designer .edu-line {
  font-size:9.5pt; color:#555;
}

/* ===== required tail ===== */
.resume.brand-designer li p, .resume.brand-designer li div { margin:0; padding:0; display:inline; }
.resume.brand-designer .skills span, .resume.brand-designer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.brand-designer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "brand-designer",
      "version": "1.0.0",
      "name": "品牌设计",
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
