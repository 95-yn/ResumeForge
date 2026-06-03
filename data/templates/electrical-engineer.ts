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
    slug: 'electrical-engineer',
    name: '电气工程',
    category: 'profession',
    html: `<div class="resume electrical-engineer">
  <header class="ee-header">
    <div class="ee-header-bar">
      <span class="ee-node"></span>
      <div class="ee-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="ee-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <span class="ee-node ee-node-end"></span>
    </div>
    <div class="contact ee-contact">
      {{#if basics.email}}<span class="ee-chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="ee-chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="ee-chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="ee-section">
    <h2><span class="ee-dot"></span>个人简介</h2>
    <div class="ee-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="ee-section" data-section="experience">
    <h2><span class="ee-dot"></span>工作经历</h2>
    {{#each experience}}<div class="ee-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="ee-entry-head">
        <h3><span class="ee-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="ee-sep">/</span><span class="ee-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date ee-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span><span class="ee-dash"> — </span><span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="ee-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="ee-section" data-section="education">
    <h2><span class="ee-dot"></span>教育背景</h2>
    {{#each education}}<div class="ee-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="ee-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date ee-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span><span class="ee-dash"> — </span><span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="ee-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="ee-sep">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="ee-section" data-section="skills">
    <h2><span class="ee-dot"></span>专业技能</h2>
    <div class="skills ee-skills">{{#each skills}}<span class="ee-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="ee-skill-node"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ee-skill-level"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="ee-section" data-section="projects">
    <h2><span class="ee-dot"></span>项目经历</h2>
    {{#each projects}}<div class="ee-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3 class="ee-proj-title"><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="ee-sep">·</span><span class="ee-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="ee-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="ee-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.electrical-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.electrical-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.electrical-engineer {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  color:#2a2d31;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --ee-charcoal:#26292e;
  --ee-charcoal-soft:#3a3e44;
  --ee-brass:#b08123;
  --ee-brass-light:#c79a3d;
  --ee-ink:#2a2d31;
  --ee-muted:#6b7078;
  --ee-line:#d9d2c2;
}

/* ===== Header ===== */
.resume.electrical-engineer .ee-header {
  background:var(--ee-charcoal);
  color:#f4f1ea;
  padding:14px 18px 12px;
  border-radius:3px;
  position:relative;
  overflow:hidden;
}
.resume.electrical-engineer .ee-header::before {
  content:"";
  position:absolute;
  left:0; right:0; bottom:0;
  height:3px;
  background:linear-gradient(90deg,var(--ee-brass) 0%,var(--ee-brass-light) 40%,transparent 40%,transparent 46%,var(--ee-brass) 46%,var(--ee-brass) 100%);
}
.resume.electrical-engineer .ee-header-bar {
  display:flex;
  align-items:center;
  gap:12px;
}
.resume.electrical-engineer .ee-node {
  width:9px;
  height:9px;
  border-radius:50%;
  border:2px solid var(--ee-brass);
  background:var(--ee-charcoal);
  flex:0 0 auto;
  position:relative;
}
.resume.electrical-engineer .ee-node::after {
  content:"";
  position:absolute;
  top:50%;
  left:100%;
  width:14px;
  height:2px;
  background:var(--ee-brass);
  transform:translateY(-50%);
}
.resume.electrical-engineer .ee-node-end::after {
  left:auto;
  right:100%;
}
.resume.electrical-engineer .ee-id {
  flex:1 1 auto;
  text-align:center;
}
.resume.electrical-engineer .ee-header h1 {
  font-size:21pt;
  font-weight:700;
  letter-spacing:3px;
  color:#fff;
  line-height:1.2;
}
.resume.electrical-engineer .ee-title {
  margin-top:3px;
  font-size:9.5pt;
  letter-spacing:2px;
  color:var(--ee-brass-light);
  text-transform:uppercase;
}
.resume.electrical-engineer .ee-contact {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:8px 18px;
  margin-top:11px;
  padding-top:9px;
  border-top:1px dashed rgba(199,154,61,0.35);
}
.resume.electrical-engineer .ee-chip {
  font-size:8.8pt;
  letter-spacing:0.3px;
  color:#d8d4cb;
  position:relative;
  padding-left:11px;
}
.resume.electrical-engineer .ee-chip::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:5px;
  height:5px;
  border-radius:50%;
  background:var(--ee-brass);
}

/* ===== Sections ===== */
.resume.electrical-engineer .ee-section {
  margin-top:18px;
}
.resume.electrical-engineer .ee-section h2 {
  font-size:11.5pt;
  font-weight:700;
  letter-spacing:2px;
  color:var(--ee-charcoal);
  display:flex;
  align-items:center;
  gap:9px;
  padding-bottom:7px;
  position:relative;
}
.resume.electrical-engineer .ee-section h2::after {
  content:"";
  flex:1 1 auto;
  height:0;
  border-top:1px solid var(--ee-line);
  margin-left:4px;
  position:relative;
  /* circuit trace */
  background-image:radial-gradient(circle, var(--ee-brass) 1.5px, transparent 1.6px);
  background-size:14px 2px;
  background-repeat:repeat-x;
  background-position:left center;
  height:2px;
  border-top:none;
}
.resume.electrical-engineer .ee-dot {
  width:8px;
  height:8px;
  border-radius:50%;
  background:var(--ee-brass);
  box-shadow:0 0 0 3px rgba(176,129,35,0.18);
  flex:0 0 auto;
}

/* ===== Body text ===== */
.resume.electrical-engineer .ee-body {
  margin-top:6px;
  font-size:9.6pt;
  color:#3c4046;
  line-height:1.6;
}

/* ===== Entries ===== */
.resume.electrical-engineer .ee-entry {
  margin-top:11px;
  padding-left:14px;
  position:relative;
  border-left:1.5px solid var(--ee-line);
}
.resume.electrical-engineer .ee-entry::before {
  content:"";
  position:absolute;
  left:-5px;
  top:5px;
  width:8px;
  height:8px;
  border-radius:50%;
  background:#fff;
  border:1.5px solid var(--ee-brass);
}
.resume.electrical-engineer .ee-entry:first-of-type {
  margin-top:8px;
}
.resume.electrical-engineer .ee-entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.electrical-engineer .ee-entry h3 {
  font-size:10.6pt;
  font-weight:600;
  color:var(--ee-charcoal);
  line-height:1.35;
}
.resume.electrical-engineer .ee-company {
  font-weight:700;
}
.resume.electrical-engineer .ee-position {
  font-weight:600;
  color:var(--ee-brass);
}
.resume.electrical-engineer .ee-sep {
  color:var(--ee-muted);
  margin:0 6px;
  font-weight:400;
}
.resume.electrical-engineer .ee-date {
  font-size:8.6pt;
  letter-spacing:0.5px;
  color:var(--ee-muted);
  font-variant-numeric:tabular-nums;
  white-space:nowrap;
  flex:0 0 auto;
}
.resume.electrical-engineer .ee-dash {
  color:var(--ee-line);
}

/* ===== Lists ===== */
.resume.electrical-engineer .ee-list {
  list-style:none;
  margin-top:6px;
}
.resume.electrical-engineer .ee-list li {
  font-size:9.5pt;
  color:#3c4046;
  line-height:1.55;
  padding-left:14px;
  position:relative;
  margin-top:3px;
}
.resume.electrical-engineer .ee-list li::before {
  content:"";
  position:absolute;
  left:0;
  top:0.62em;
  width:5px;
  height:5px;
  border-radius:50%;
  border:1.5px solid var(--ee-brass);
  background:#fff;
}

/* ===== Education meta ===== */
.resume.electrical-engineer .ee-edu-meta {
  margin-top:4px;
  font-size:9.4pt;
  color:var(--ee-muted);
}

/* ===== Skills ===== */
.resume.electrical-engineer .ee-skills {
  margin-top:9px;
  display:flex;
  flex-wrap:wrap;
  gap:8px 10px;
}
.resume.electrical-engineer .ee-skill {
  display:inline-flex;
  align-items:center;
  gap:6px;
  font-size:9.2pt;
  color:var(--ee-charcoal);
  background:#f6f3ec;
  border:1px solid var(--ee-line);
  border-radius:2px;
  padding:4px 10px 4px 9px;
  position:relative;
}
.resume.electrical-engineer .ee-skill-node {
  width:5px;
  height:5px;
  border-radius:50%;
  background:var(--ee-brass);
  flex:0 0 auto;
}
.resume.electrical-engineer .ee-skill-level {
  color:var(--ee-muted);
  font-size:8.6pt;
}

/* ===== Projects ===== */
.resume.electrical-engineer .ee-proj-title {
  font-size:10.6pt;
  font-weight:700;
  color:var(--ee-charcoal);
}
.resume.electrical-engineer .ee-role {
  font-weight:600;
  color:var(--ee-brass);
}

/* ===== Required overrides ===== */
.resume.electrical-engineer li p,
.resume.electrical-engineer li div { margin:0; padding:0; display:inline; }
.resume.electrical-engineer .skills span,
.resume.electrical-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

/* ===== Print ===== */
@media print { .resume.electrical-engineer { margin:0;
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact; }
  .resume.electrical-engineer .ee-entry,
  .resume.electrical-engineer .ee-section { break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "electrical-engineer",
      "version": "1.0.0",
      "name": "电气工程",
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
