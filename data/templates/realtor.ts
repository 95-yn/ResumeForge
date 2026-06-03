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
    slug: 'realtor',
    name: '房产经纪',
    category: 'profession',
    html: `<div class="resume realtor">
  <header>
    <div class="rt-id">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="rt-summary"><h2>个人简介</h2><div class="rt-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="rt-block"><h2>工作经历</h2>
    {{#each experience}}<div class="rt-card" data-entry="experience" data-entry-index="{{@index}}">
      <div class="rt-card-head">
        <h3><span class="rt-co" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="rt-role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="rt-block"><h2>项目经历</h2>
    {{#each projects}}<div class="rt-card rt-proj" data-entry="projects" data-entry-index="{{@index}}">
      <div class="rt-card-head">
        <h3><span class="rt-co" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="rt-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="rt-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="rt-block"><h2>教育背景</h2>
    {{#each education}}<div class="rt-card rt-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="rt-card-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="rt-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="rt-block"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="rt-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="rt-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
</div>`,
    css: `.resume.realtor * { margin:0; padding:0; box-sizing:border-box; }
.resume.realtor * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.realtor {
  --navy:#15233f;
  --navy-2:#1f3357;
  --gold:#c8a25a;
  --gold-soft:#e7d4a8;
  --ink:#2a3142;
  --muted:#6b7384;
  --line:#e3e7ee;
  --paper:#fafbfd;
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
.resume.realtor header {
  background:linear-gradient(135deg,var(--navy) 0%,var(--navy-2) 100%);
  color:#fff;
  padding:9mm 10mm;
  border-radius:3px;
  position:relative;
  overflow:hidden;
  border-bottom:3px solid var(--gold);
  margin-bottom:8mm;
}
.resume.realtor header::before {
  content:"";
  position:absolute;
  top:-30px; right:-30px;
  width:120px; height:120px;
  border:2px solid rgba(200,162,90,0.28);
  border-radius:50%;
}
.resume.realtor header::after {
  content:"";
  position:absolute;
  bottom:-40px; right:30px;
  width:80px; height:80px;
  border:2px solid rgba(200,162,90,0.18);
  border-radius:50%;
}
.resume.realtor .rt-id { position:relative; z-index:1; }
.resume.realtor header h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:3px;
  line-height:1.1;
}
.resume.realtor header h1::after {
  content:"";
  display:block;
  width:42px; height:2px;
  background:var(--gold);
  margin-top:4mm;
}
.resume.realtor .rt-id p {
  margin-top:3mm;
  font-size:10.5pt;
  letter-spacing:2px;
  color:var(--gold-soft);
  font-weight:500;
}
.resume.realtor .contact {
  position:relative;
  z-index:1;
  margin-top:6mm;
  display:flex;
  flex-wrap:wrap;
  gap:5mm;
}
.resume.realtor .contact span {
  font-size:9pt;
  color:#dfe4ee;
  letter-spacing:0.4px;
  padding-left:14px;
  position:relative;
}
.resume.realtor .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  width:6px; height:6px;
  margin-top:-3px;
  background:var(--gold);
  transform:rotate(45deg);
}

/* ===== Section headings ===== */
.resume.realtor section { margin-bottom:7mm; }
.resume.realtor h2 {
  font-size:12pt;
  color:var(--navy);
  font-weight:700;
  letter-spacing:2px;
  padding:0 0 2.5mm 9px;
  margin-bottom:4mm;
  border-bottom:1px solid var(--line);
  position:relative;
}
.resume.realtor h2::before {
  content:"";
  position:absolute;
  left:0; top:1px;
  width:3px; height:13pt;
  background:linear-gradient(var(--gold),var(--navy));
  border-radius:2px;
}

/* ===== Summary ===== */
.resume.realtor .rt-summary .rt-body {
  background:var(--paper);
  border-left:3px solid var(--gold);
  padding:4mm 5mm;
  border-radius:0 3px 3px 0;
  color:var(--ink);
  font-size:9.6pt;
  line-height:1.65;
}

/* ===== Cards (listing style) ===== */
.resume.realtor .rt-card {
  background:var(--paper);
  border:1px solid var(--line);
  border-left:3px solid var(--navy);
  border-radius:3px;
  padding:4mm 5mm;
  margin-bottom:3.5mm;
  position:relative;
}
.resume.realtor .rt-card::after {
  content:"";
  position:absolute;
  top:0; right:0;
  width:0; height:0;
  border-style:solid;
  border-width:0 16px 16px 0;
  border-color:transparent var(--gold-soft) transparent transparent;
  opacity:0.6;
}
.resume.realtor .rt-card:last-child { margin-bottom:0; }

.resume.realtor .rt-card-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:6mm;
  flex-wrap:wrap;
}
.resume.realtor .rt-card h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--navy);
  display:flex;
  align-items:baseline;
  gap:3mm;
  flex-wrap:wrap;
}
.resume.realtor .rt-co { color:var(--navy); }
.resume.realtor .rt-role {
  font-size:9pt;
  font-weight:600;
  color:#8a6d2f;
  padding:1px 7px;
  background:rgba(200,162,90,0.14);
  border:1px solid rgba(200,162,90,0.4);
  border-radius:10px;
  letter-spacing:0.5px;
}
.resume.realtor .date {
  font-size:8.5pt;
  color:var(--muted);
  font-weight:500;
  letter-spacing:0.5px;
  white-space:nowrap;
  font-variant-numeric:tabular-nums;
}

.resume.realtor .rt-card ul {
  list-style:none;
  margin-top:3mm;
}
.resume.realtor .rt-card li {
  position:relative;
  padding-left:13px;
  margin-bottom:1.6mm;
  font-size:9.4pt;
  line-height:1.55;
  color:var(--ink);
}
.resume.realtor .rt-card li::before {
  content:"";
  position:absolute;
  left:0; top:6.5px;
  width:5px; height:5px;
  background:var(--gold);
  transform:rotate(45deg);
}
.resume.realtor .rt-card li:last-child { margin-bottom:0; }

.resume.realtor .rt-desc {
  font-size:9.4pt;
  color:#43495a;
  line-height:1.6;
  margin-top:1mm;
}

/* ===== Education ===== */
.resume.realtor .rt-edu-meta {
  margin-top:2mm;
  font-size:9.3pt;
  color:var(--muted);
}

/* ===== Skills ===== */
.resume.realtor .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.realtor .rt-skill {
  display:inline-block;
  font-size:9pt;
  color:var(--navy);
  background:#fff;
  border:1px solid var(--line);
  border-bottom:2px solid var(--gold);
  border-radius:3px;
  padding:1.6mm 3.5mm;
  font-weight:500;
}
.resume.realtor .rt-skill .rt-lv { color:#8a6d2f; font-weight:600; }

/* ===== Contract-required tails ===== */
.resume.realtor li p, .resume.realtor li div { margin:0; padding:0; display:inline; }
.resume.realtor .skills span, .resume.realtor [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.realtor { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "realtor",
      "version": "1.0.0",
      "name": "房产经纪",
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
