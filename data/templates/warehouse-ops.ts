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
    slug: 'warehouse-ops',
    name: '仓储运营',
    category: 'profession',
    html: `<div class="resume warehouse-ops">
  <div class="zebra-top"></div>
  <header>
    <div class="hdr-grid">
      <div class="hdr-main">
        <span class="bin-tag">BIN&nbsp;A-01</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary">
    <h2><span class="loc">A-02</span>个人简介</h2>
    <div class="body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="loc">B-01</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-bar">
        <span class="entry-no">{{@index}}</span>
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="loc">C-01</span>教育背景</h2>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-bar">
        <span class="entry-no">{{@index}}</span>
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="loc">D-01</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="loc">E-01</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-bar">
        <span class="entry-no">{{@index}}</span>
        <h3><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  <div class="zebra-bottom"></div>
</div>`,
    css: `.resume.warehouse-ops * { margin:0; padding:0; box-sizing:border-box; }
.resume.warehouse-ops * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.warehouse-ops {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:0;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#1a1a1a;
  position:relative;
  --ink:#171614;
  --amber:#f5b301;
  --amber-d:#d99700;
  --steel:#5c5a54;
  --line:#1a1a1a;
}

/* zebra hazard stripes */
.resume.warehouse-ops .zebra-top,
.resume.warehouse-ops .zebra-bottom {
  height:8mm;
  background:repeating-linear-gradient(-45deg, var(--ink) 0, var(--ink) 14px, var(--amber) 14px, var(--amber) 28px);
}
.resume.warehouse-ops .zebra-bottom { margin-top:auto; }

.resume.warehouse-ops > header,
.resume.warehouse-ops > section,
.resume.warehouse-ops > .summary { padding-left:18mm; padding-right:18mm; }

/* ===== HEADER ===== */
.resume.warehouse-ops header {
  background:var(--ink);
  color:#fff;
  padding-top:9mm;
  padding-bottom:9mm;
  border-bottom:3px solid var(--amber);
}
.resume.warehouse-ops .hdr-grid {
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:10mm;
  flex-wrap:wrap;
}
.resume.warehouse-ops .bin-tag {
  display:inline-block;
  background:var(--amber);
  color:var(--ink);
  font-size:7.5pt;
  font-weight:800;
  letter-spacing:1.5px;
  padding:2px 8px;
  margin-bottom:6px;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.warehouse-ops h1 {
  font-size:25pt;
  font-weight:900;
  letter-spacing:1px;
  line-height:1.05;
  text-transform:uppercase;
}
.resume.warehouse-ops .role {
  margin-top:5px;
  font-size:10.5pt;
  font-weight:700;
  color:var(--amber);
  letter-spacing:3px;
}
.resume.warehouse-ops .contact {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:4px;
  font-size:8.5pt;
  font-family:'SF Mono','Consolas',monospace;
  text-align:right;
}
.resume.warehouse-ops .contact span {
  position:relative;
  padding-left:11px;
  color:#e8e6e1;
}
.resume.warehouse-ops .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:4px; height:4px;
  background:var(--amber);
}

/* ===== SECTION BLOCKS ===== */
.resume.warehouse-ops .block { padding-top:7mm; padding-bottom:1mm; }
.resume.warehouse-ops .block:last-of-type { padding-bottom:7mm; }

.resume.warehouse-ops h2 {
  display:flex;
  align-items:center;
  gap:10px;
  font-size:13pt;
  font-weight:900;
  letter-spacing:2px;
  text-transform:uppercase;
  color:var(--ink);
  padding-bottom:6px;
  margin-bottom:10px;
  border-bottom:3px solid var(--ink);
  position:relative;
}
.resume.warehouse-ops h2::after {
  content:"";
  position:absolute;
  bottom:-3px; left:0;
  width:42px; height:3px;
  background:var(--amber);
}
.resume.warehouse-ops h2 .loc {
  background:var(--ink);
  color:var(--amber);
  font-size:8pt;
  font-weight:800;
  letter-spacing:1px;
  padding:2px 7px;
  font-family:'SF Mono','Consolas',monospace;
}

.resume.warehouse-ops .summary .body {
  position:relative;
  font-size:10pt;
  color:#33312c;
  padding-left:16px;
}
.resume.warehouse-ops .summary .body::before {
  content:"";
  position:absolute;
  left:0; top:3px; bottom:3px;
  width:4px;
  background:repeating-linear-gradient(-45deg, var(--ink) 0, var(--ink) 4px, var(--amber) 4px, var(--amber) 8px);
}

/* ===== ENTRIES ===== */
.resume.warehouse-ops .entry {
  margin-bottom:11px;
  padding-bottom:9px;
  border-bottom:1px dashed #cfcdc6;
}
.resume.warehouse-ops .entry:last-child { border-bottom:none; margin-bottom:0; }

.resume.warehouse-ops .entry-bar {
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:8px;
}
.resume.warehouse-ops .entry-no {
  flex:none;
  align-self:center;
  min-width:20px; height:20px;
  background:var(--amber);
  color:var(--ink);
  font-size:8pt;
  font-weight:900;
  font-family:'SF Mono','Consolas',monospace;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:0 5px;
}
.resume.warehouse-ops .entry h3 {
  flex:1 1 auto;
  font-size:11.5pt;
  font-weight:800;
  color:var(--ink);
}
.resume.warehouse-ops .entry h3 .company { letter-spacing:.3px; }
.resume.warehouse-ops .entry h3 .position {
  font-weight:600;
  color:var(--steel);
  font-size:10pt;
}
.resume.warehouse-ops .entry h3 .position::before {
  content:"/ ";
  color:var(--amber-d);
  font-weight:800;
}
.resume.warehouse-ops .entry .date {
  flex:none;
  font-size:8.5pt;
  font-weight:700;
  font-family:'SF Mono','Consolas',monospace;
  color:#fff;
  background:var(--steel);
  padding:2px 7px;
}

.resume.warehouse-ops .edu-meta {
  margin-top:4px;
  padding-left:28px;
  font-size:9.5pt;
  color:var(--steel);
  font-weight:600;
}
.resume.warehouse-ops .proj-desc {
  margin-top:5px;
  padding-left:28px;
  font-size:9.5pt;
  color:#33312c;
}

.resume.warehouse-ops .entry ul {
  list-style:none;
  margin-top:6px;
  padding-left:28px;
}
.resume.warehouse-ops .entry li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:#33312c;
}
.resume.warehouse-ops .entry li::before {
  content:"▸";
  position:absolute;
  left:0; top:0;
  color:var(--amber-d);
  font-weight:900;
}

/* ===== SKILLS ===== */
.resume.warehouse-ops .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.warehouse-ops .skill-chip {
  display:inline-flex;
  align-items:center;
  gap:7px;
  background:#faf6ea;
  border:1.5px solid var(--ink);
  padding:3px 10px;
  font-size:9pt;
  font-weight:700;
  color:var(--ink);
}
.resume.warehouse-ops .skill-chip::before {
  content:"";
  flex:0 0 auto;
  width:7px; height:7px;
  background:var(--amber);
}
.resume.warehouse-ops .skill-chip .lvl {
  font-weight:600;
  color:var(--steel);
  font-family:'SF Mono','Consolas',monospace;
  font-size:8pt;
}

/* contract-required tails */
.resume.warehouse-ops li p,
.resume.warehouse-ops li div { margin:0; padding:0; display:inline; }
.resume.warehouse-ops .skills span,
.resume.warehouse-ops [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.warehouse-ops { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "warehouse-ops",
      "version": "1.0.0",
      "name": "仓储运营",
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
