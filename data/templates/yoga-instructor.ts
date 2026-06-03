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
    slug: 'yoga-instructor',
    name: '瑜伽导师',
    category: 'profession',
    html: `<div class="resume yoga-instructor">
  <header>
    <div class="header-mark" aria-hidden="true">
      <span class="mark-dot"></span>
      <span class="mark-line"></span>
      <span class="mark-dot"></span>
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
    <h2><span class="leaf" aria-hidden="true"></span>个人简介</h2>
    <div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="block">
    <h2><span class="leaf" aria-hidden="true"></span>工作经历</h2>
    <div class="timeline">
      {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> <span class="sep">—</span> <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="block">
    <h2><span class="leaf" aria-hidden="true"></span>教育背景</h2>
    {{#each education}}<div class="entry edu-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> <span class="sep">—</span> <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="block">
    <h2><span class="leaf" aria-hidden="true"></span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="block">
    <h2><span class="leaf" aria-hidden="true"></span>项目经历</h2>
    {{#each projects}}<div class="entry proj-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.yoga-instructor * { margin:0; padding:0; box-sizing:border-box; }
.resume.yoga-instructor * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.yoga-instructor {
  --sage:#8a9a83;
  --sage-deep:#5f6f59;
  --sage-soft:#c9d3c2;
  --sage-wash:#eef1ea;
  --cream:#f7f4ec;
  --cream-deep:#efe9dc;
  --ink:#3a3f38;
  --ink-soft:#6b7066;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.6;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* Header */
.resume.yoga-instructor header {
  text-align:center;
  padding:14mm 10mm 11mm;
  margin-bottom:10mm;
  background:
    radial-gradient(120% 90% at 50% -10%, var(--sage-wash) 0%, rgba(238,241,234,0) 60%),
    var(--cream);
  border-radius:22px;
  position:relative;
}
.resume.yoga-instructor .header-mark {
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  margin-bottom:9px;
}
.resume.yoga-instructor .mark-dot {
  width:7px; height:7px;
  border-radius:50%;
  background:var(--sage);
}
.resume.yoga-instructor .mark-line {
  width:46px; height:1.5px;
  background:linear-gradient(90deg,var(--sage-soft),var(--sage),var(--sage-soft));
}
.resume.yoga-instructor h1 {
  font-size:25pt;
  font-weight:600;
  letter-spacing:6px;
  color:var(--sage-deep);
  line-height:1.2;
}
.resume.yoga-instructor .role {
  margin-top:7px;
  font-size:10.5pt;
  letter-spacing:3px;
  color:var(--sage);
  font-weight:400;
}
.resume.yoga-instructor .contact {
  margin-top:11px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:9px 16px;
  font-size:9pt;
  color:var(--ink-soft);
  letter-spacing:.4px;
}
.resume.yoga-instructor .contact span {
  position:relative;
  padding-left:13px;
}
.resume.yoga-instructor .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:5px; height:5px;
  border-radius:50%;
  background:var(--sage-soft);
}

/* Sections */
.resume.yoga-instructor section { margin-bottom:9mm; }
.resume.yoga-instructor h2 {
  display:flex;
  align-items:center;
  gap:9px;
  font-size:12pt;
  font-weight:600;
  letter-spacing:3px;
  color:var(--sage-deep);
  margin-bottom:7mm;
  padding-bottom:3mm;
  border-bottom:1px solid var(--cream-deep);
}
.resume.yoga-instructor .leaf {
  width:13px; height:13px;
  flex:0 0 auto;
  background:var(--sage);
  border-radius:0 65% 0 65%;
  transform:rotate(-10deg);
}

/* Summary */
.resume.yoga-instructor .summary-body {
  position:relative;
  background:var(--cream);
  border-radius:14px;
  padding:6mm 7mm 6mm 9mm;
  color:var(--ink-soft);
  font-size:9.7pt;
  line-height:1.75;
}
.resume.yoga-instructor .summary-body::before {
  content:"";
  position:absolute;
  left:4mm; top:6.5mm;
  width:9px; height:9px;
  background:var(--sage);
  border-radius:0 65% 0 65%;
  transform:rotate(-10deg);
}

/* Timeline / entries */
.resume.yoga-instructor .timeline { position:relative; }
.resume.yoga-instructor .entry { margin-bottom:6.5mm; }
.resume.yoga-instructor .entry:last-child { margin-bottom:0; }
.resume.yoga-instructor .timeline .entry {
  position:relative;
  padding-left:8mm;
}
.resume.yoga-instructor .timeline .entry::before {
  content:"";
  position:absolute;
  left:1.5mm; top:8px; bottom:-6.5mm;
  width:1.5px;
  background:var(--cream-deep);
}
.resume.yoga-instructor .timeline .entry:last-child::before { bottom:auto; height:8px; }
.resume.yoga-instructor .timeline .entry::after {
  content:"";
  position:absolute;
  left:0; top:6px;
  width:9px; height:9px;
  border-radius:50%;
  background:#fff;
  border:2px solid var(--sage);
}

.resume.yoga-instructor .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.yoga-instructor h3 {
  font-size:11pt;
  font-weight:600;
  color:var(--ink);
  line-height:1.45;
}
.resume.yoga-instructor h3 .company { color:var(--sage-deep); }
.resume.yoga-instructor h3 .position {
  margin-left:9px;
  font-weight:400;
  font-size:9.5pt;
  color:var(--ink-soft);
}
.resume.yoga-instructor h3 .position::before {
  content:"·";
  margin-right:9px;
  color:var(--sage-soft);
}
.resume.yoga-instructor .date {
  font-size:8.5pt;
  color:var(--sage);
  letter-spacing:.5px;
  white-space:nowrap;
  flex:0 0 auto;
}
.resume.yoga-instructor .date .sep { margin:0 1px; }

.resume.yoga-instructor ul {
  list-style:none;
  margin-top:4mm;
}
.resume.yoga-instructor li {
  position:relative;
  padding-left:15px;
  margin-bottom:2.6mm;
  font-size:9.5pt;
  color:var(--ink-soft);
  line-height:1.65;
}
.resume.yoga-instructor li:last-child { margin-bottom:0; }
.resume.yoga-instructor li::before {
  content:"";
  position:absolute;
  left:0; top:8px;
  width:5px; height:5px;
  border-radius:50%;
  background:var(--sage-soft);
}

/* Education */
.resume.yoga-instructor .edu-entry .edu-meta {
  margin-top:2mm;
  font-size:9.3pt;
  color:var(--ink-soft);
}

/* Skills */
.resume.yoga-instructor .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 9px;
}
.resume.yoga-instructor .skill-chip {
  display:inline-flex;
  align-items:baseline;
  gap:6px;
  padding:4px 13px;
  background:var(--cream);
  border:1px solid var(--cream-deep);
  border-radius:20px;
  font-size:9pt;
}
.resume.yoga-instructor .skill-name { color:var(--sage-deep); font-weight:500; }
.resume.yoga-instructor .skill-level {
  font-size:8pt;
  color:var(--sage);
  padding-left:6px;
  border-left:1px solid var(--sage-soft);
}

/* Projects */
.resume.yoga-instructor .proj-entry {
  background:var(--cream);
  border-radius:14px;
  padding:5mm 6mm;
}
.resume.yoga-instructor .proj-name { color:var(--sage-deep); }
.resume.yoga-instructor .proj-role {
  margin-left:8px;
  font-weight:400;
  font-size:9pt;
  color:var(--sage);
}
.resume.yoga-instructor .proj-role::before {
  content:"·";
  margin-right:8px;
  color:var(--sage-soft);
}
.resume.yoga-instructor .proj-desc {
  margin-top:2.5mm;
  font-size:9.4pt;
  color:var(--ink-soft);
  line-height:1.7;
}
.resume.yoga-instructor .proj-entry ul { margin-top:3mm; }

/* Inline-edit safety */
.resume.yoga-instructor li p, .resume.yoga-instructor li div { margin:0; padding:0; display:inline; }
.resume.yoga-instructor .skills span, .resume.yoga-instructor [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.yoga-instructor { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "yoga-instructor",
      "version": "1.0.0",
      "name": "瑜伽导师",
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
