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
    slug: 'fin-ib',
    name: '投行分析',
    category: 'profession',
    html: `<div class="resume fin-ib">
  <header class="ib-header">
    <div class="ib-headline">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ib-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="ib-rule"></div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="ib-block ib-summary">
    <h2><span class="ib-num">01</span>个人简介</h2>
    <div class="ib-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="ib-block" data-section="experience">
    <h2><span class="ib-num">02</span>工作经历</h2>
    {{#each experience}}<div class="ib-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="ib-entry-head">
        <h3><span class="ib-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="ib-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="ib-block" data-section="education">
    <h2><span class="ib-num">03</span>教育背景</h2>
    {{#each education}}<div class="ib-entry ib-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="ib-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="ib-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="ib-block" data-section="skills">
    <h2><span class="ib-num">04</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="ib-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="ib-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="ib-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="ib-block" data-section="projects">
    <h2><span class="ib-num">05</span>项目经历</h2>
    {{#each projects}}<div class="ib-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="ib-entry-head">
        <h3><span class="ib-company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="ib-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="ib-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.fin-ib * { margin:0; padding:0; box-sizing:border-box; }
.resume.fin-ib * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.fin-ib {
  --navy:#0f2543;
  --navy-2:#1c3a63;
  --gold:#b08d33;
  --gold-soft:#c9a85a;
  --ink:#222b38;
  --muted:#5d6877;
  --line:#d8dee7;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.fin-ib .ib-header {
  border-top:3px solid var(--navy);
  padding-top:10px;
  margin-bottom:18px;
}
.resume.fin-ib .ib-headline {
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:6px 16px;
}
.resume.fin-ib h1 {
  font-size:24pt;
  font-weight:700;
  letter-spacing:1px;
  color:var(--navy);
  line-height:1.1;
}
.resume.fin-ib .ib-title {
  font-size:10.5pt;
  font-weight:600;
  letter-spacing:2px;
  text-transform:uppercase;
  color:var(--gold);
}
.resume.fin-ib .ib-rule {
  height:1px;
  background:var(--line);
  margin:10px 0 8px;
  position:relative;
}
.resume.fin-ib .ib-rule::before {
  content:"";
  position:absolute;
  left:0; top:0;
  width:60px; height:1px;
  background:var(--gold);
}
.resume.fin-ib .contact {
  display:flex;
  flex-wrap:wrap;
  gap:4px 0;
  font-size:9pt;
  color:var(--muted);
  letter-spacing:.3px;
}
.resume.fin-ib .contact span {
  position:relative;
  padding:0 14px;
}
.resume.fin-ib .contact span:first-child { padding-left:0; }
.resume.fin-ib .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:3px; height:3px;
  background:var(--gold);
  border-radius:50%;
}
.resume.fin-ib .contact span:first-child::before { display:none; }

/* ===== Section blocks ===== */
.resume.fin-ib .ib-block { margin-bottom:16px; }
.resume.fin-ib h2 {
  display:flex;
  align-items:center;
  gap:10px;
  font-size:11pt;
  font-weight:700;
  letter-spacing:3px;
  color:var(--navy);
  padding-bottom:5px;
  margin-bottom:10px;
  border-bottom:1.5px solid var(--navy);
}
.resume.fin-ib .ib-num {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:22px; height:18px;
  font-size:8pt;
  font-weight:700;
  letter-spacing:1px;
  color:#fff;
  background:var(--navy);
  border-bottom:2px solid var(--gold);
}

.resume.fin-ib .ib-body { color:var(--ink); }
.resume.fin-ib .ib-summary .ib-body {
  border-left:2px solid var(--gold);
  padding-left:12px;
  color:var(--muted);
}

/* ===== Entries (table-row aesthetic) ===== */
.resume.fin-ib .ib-entry {
  padding:8px 0 9px;
  border-bottom:1px solid var(--line);
}
.resume.fin-ib .ib-entry:last-child { border-bottom:none; padding-bottom:2px; }
.resume.fin-ib .ib-entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:12px;
}
.resume.fin-ib h3 {
  font-size:10.5pt;
  font-weight:600;
  color:var(--navy);
  display:flex;
  flex-wrap:wrap;
  align-items:baseline;
  gap:8px;
}
.resume.fin-ib .ib-company { font-weight:700; }
.resume.fin-ib .ib-position {
  font-weight:500;
  font-size:9.5pt;
  color:var(--gold);
  position:relative;
  padding-left:10px;
}
.resume.fin-ib .ib-position::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:4px; height:4px;
  background:var(--gold);
  transform:translateY(-50%) rotate(45deg);
}
.resume.fin-ib .date {
  flex-shrink:0;
  font-size:8.5pt;
  font-weight:600;
  letter-spacing:.5px;
  color:var(--muted);
  font-variant-numeric:tabular-nums;
  white-space:nowrap;
}
.resume.fin-ib .date span { font-variant-numeric:tabular-nums; }

.resume.fin-ib ul {
  list-style:none;
  margin-top:6px;
}
.resume.fin-ib li {
  position:relative;
  padding-left:14px;
  margin-bottom:3px;
  color:var(--ink);
  line-height:1.5;
}
.resume.fin-ib li::before {
  content:"";
  position:absolute;
  left:0; top:7px;
  width:5px; height:1.5px;
  background:var(--gold);
}

/* ===== Education ===== */
.resume.fin-ib .ib-edu-meta {
  margin-top:3px;
  font-size:9.5pt;
  color:var(--muted);
}
.resume.fin-ib .ib-edu-meta span { color:var(--ink); }

/* ===== Projects ===== */
.resume.fin-ib .ib-proj-desc {
  margin-top:4px;
  color:var(--muted);
  font-size:9.5pt;
}

/* ===== Skills ===== */
.resume.fin-ib .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.fin-ib .ib-skill {
  display:inline-flex;
  align-items:baseline;
  gap:6px;
  padding:3px 11px;
  font-size:9pt;
  background:#f4f6f9;
  border:1px solid var(--line);
  border-left:2px solid var(--navy);
}
.resume.fin-ib .ib-skill-name {
  font-weight:600;
  color:var(--navy);
}
.resume.fin-ib .ib-skill-lv {
  font-size:8pt;
  color:var(--gold);
  letter-spacing:.5px;
}

/* ===== contract-required tail ===== */
.resume.fin-ib li p, .resume.fin-ib li div { margin:0; padding:0; display:inline; }
.resume.fin-ib .skills span, .resume.fin-ib [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.fin-ib { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.fin-ib .ib-entry { break-inside:avoid; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "fin-ib",
      "version": "1.0.0",
      "name": "投行分析",
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
