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
    slug: 'procurement',
    name: '采购管理',
    category: 'profession',
    html: `<div class="resume procurement">
  <header>
    <div class="hd-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="summary"><h2>个人简介</h2><div class="panel" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-row">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep">/</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-row">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="sep">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-item" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="lv"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-row">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="sep">/</span><span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.procurement * { margin:0; padding:0; box-sizing:border-box; }
.resume.procurement * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.procurement {
  --ink:#1f3d33;
  --green:#234e3f;
  --green-d:#16352a;
  --cream:#f6f1e4;
  --cream-d:#ece4d1;
  --line:#c9bfa6;
  --line-soft:#ddd4bd;
  --text:#2c3530;
  --muted:#6c7269;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  color:var(--text);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* Header */
.resume.procurement header {
  background:var(--green);
  color:var(--cream);
  padding:9mm 10mm;
  margin:-18mm -18mm 9mm;
  border-bottom:3px solid var(--green-d);
}
.resume.procurement .hd-main {
  display:flex;
  align-items:baseline;
  gap:5mm;
  flex-wrap:wrap;
  padding-bottom:3mm;
  margin-bottom:3mm;
  border-bottom:1px solid rgba(246,241,228,.28);
}
.resume.procurement h1 {
  font-size:21pt;
  font-weight:700;
  letter-spacing:.06em;
  color:#fff;
}
.resume.procurement .title {
  font-size:10.5pt;
  letter-spacing:.18em;
  color:var(--cream);
  opacity:.92;
  text-transform:uppercase;
}
.resume.procurement .contact {
  display:flex;
  flex-wrap:wrap;
  gap:4mm;
  font-size:9pt;
  letter-spacing:.04em;
  color:var(--cream);
  opacity:.95;
}
.resume.procurement .contact span {
  position:relative;
  padding-left:11px;
}
.resume.procurement .contact span::before {
  content:'';
  position:absolute;
  left:0; top:50%;
  width:5px; height:5px;
  margin-top:-2.5px;
  background:var(--cream);
  opacity:.7;
}

/* Sections */
.resume.procurement section { margin-bottom:6.5mm; }
.resume.procurement h2 {
  font-size:11pt;
  font-weight:700;
  color:var(--green);
  letter-spacing:.14em;
  padding:0 0 1.6mm 0;
  margin-bottom:3.5mm;
  border-bottom:1.5px solid var(--green);
  position:relative;
}
.resume.procurement h2::before {
  content:'';
  display:inline-block;
  width:3.5mm; height:3.5mm;
  margin-right:2.5mm;
  background:var(--green);
  vertical-align:-1px;
  transform:rotate(45deg);
}
.resume.procurement h2::after {
  content:'';
  position:absolute;
  left:0; bottom:-1.5px;
  width:14mm; height:1.5px;
  background:var(--line);
}

/* Summary panel */
.resume.procurement .panel {
  background:var(--cream);
  border:1px solid var(--line-soft);
  border-left:3px solid var(--green);
  padding:3mm 4mm;
  font-size:9.5pt;
  color:var(--text);
}

/* Entries — ledger / table-line feel */
.resume.procurement .entry {
  padding:2.5mm 0;
  border-bottom:1px solid var(--line-soft);
}
.resume.procurement .entry:last-child { border-bottom:none; }
.resume.procurement .entry-row {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:4mm;
}
.resume.procurement h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
  letter-spacing:.02em;
}
.resume.procurement .position,
.resume.procurement .role {
  font-weight:600;
  color:var(--green);
}
.resume.procurement .sep {
  color:var(--line);
  font-weight:400;
  margin:0 1.5mm;
}
.resume.procurement .date {
  font-size:8.5pt;
  color:var(--muted);
  letter-spacing:.05em;
  white-space:nowrap;
  background:var(--cream);
  border:1px solid var(--line-soft);
  padding:.4mm 2mm;
  flex-shrink:0;
}
.resume.procurement .edu-meta {
  font-size:9pt;
  color:var(--muted);
  margin-top:1mm;
}

/* Lists — ledger rows */
.resume.procurement ul {
  list-style:none;
  margin-top:2mm;
}
.resume.procurement li {
  position:relative;
  padding:1mm 0 1mm 7mm;
  font-size:9.5pt;
  border-bottom:1px dotted var(--line-soft);
}
.resume.procurement li:last-child { border-bottom:none; }
.resume.procurement li::before {
  content:'';
  position:absolute;
  left:2mm; top:2.9mm;
  width:2.4mm; height:2.4mm;
  border:1.3px solid var(--green);
}
.resume.procurement li::after {
  content:'';
  position:absolute;
  left:2.7mm; top:3.5mm;
  width:1mm; height:1.8mm;
  border:solid var(--green);
  border-width:0 1.3px 1.3px 0;
  transform:rotate(40deg);
}

.resume.procurement .proj-desc {
  font-size:9.5pt;
  color:var(--text);
  margin-top:1mm;
}

/* Skills */
.resume.procurement .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.procurement .skill-item {
  background:var(--cream);
  border:1px solid var(--line);
  padding:1mm 3mm;
  font-size:9pt;
  color:var(--ink);
}
.resume.procurement .skill-item .lv { color:var(--green); }

/* Contract-required tail rules */
.resume.procurement li p,
.resume.procurement li div { margin:0; padding:0; display:inline; }
.resume.procurement .skills span,
.resume.procurement [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.procurement { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "procurement",
      "version": "1.0.0",
      "name": "采购管理",
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
