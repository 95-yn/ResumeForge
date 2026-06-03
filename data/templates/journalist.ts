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
    slug: 'journalist',
    name: '记者编辑',
    category: 'creative',
    html: `<div class="resume journalist">
  <header>
    <div class="masthead">
      <div class="masthead-rule top"></div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      <div class="masthead-rule bottom"></div>
      {{#if basics.title}}<p class="dateline" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="lead"><h2>个人简介</h2><div class="lead-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience" class="col-section"><h2>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-stamp"><span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span></div>
      <h3 class="headline"><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education" class="col-section"><h2>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-stamp"><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><h3 class="headline" data-field="education.{{@index}}.institution">{{{institution}}}</h3><p class="byline"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills" class="skills-section"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects" class="col-section"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><h3 class="headline"><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>{{#if description}}<div class="lead-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.journalist * { margin:0; padding:0; box-sizing:border-box; }
.resume.journalist * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.journalist {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  background:#fdfdfb;
  color:#1a1a1a;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Masthead 大刊头 ===== */
.resume.journalist header { margin-bottom:8mm; }
.resume.journalist .masthead { text-align:center; }
.resume.journalist .masthead-rule { height:0; border-top:3px solid #111; }
.resume.journalist .masthead-rule.top { border-top-width:4px; margin-bottom:3mm; }
.resume.journalist .masthead-rule.bottom { border-top-width:1px; margin-top:3mm; position:relative; }
.resume.journalist .masthead-rule.bottom::after {
  content:""; position:absolute; left:0; right:0; top:2px; border-top:1px solid #111;
}
.resume.journalist .masthead h1 {
  font-family:'Times New Roman','Songti SC','SimSun',serif;
  font-size:34pt;
  font-weight:900;
  letter-spacing:0.06em;
  line-height:1.05;
  text-transform:uppercase;
  color:#111;
}
.resume.journalist .masthead .dateline {
  margin-top:2.5mm;
  font-size:8.5pt;
  letter-spacing:0.32em;
  text-transform:uppercase;
  font-weight:600;
  color:#444;
}

/* contact bar */
.resume.journalist .contact {
  margin-top:4mm;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:0;
  font-size:8.5pt;
  letter-spacing:0.04em;
  color:#333;
  font-family:'Times New Roman',serif;
}
.resume.journalist .contact span { position:relative; padding:0 5mm; white-space:nowrap; }
.resume.journalist .contact span::after {
  content:"|"; position:absolute; right:-1px; color:#bbb;
}
.resume.journalist .contact span:last-child::after { content:""; }

/* ===== Section headings (栏目标题) ===== */
.resume.journalist h2 {
  font-family:'Times New Roman','Songti SC',serif;
  font-size:11pt;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:0.22em;
  color:#111;
  padding-bottom:1.5mm;
  margin-bottom:4mm;
  border-bottom:2px solid #111;
  position:relative;
}
.resume.journalist h2::before {
  content:"■";
  font-size:6pt;
  vertical-align:middle;
  margin-right:2.5mm;
  color:#111;
}

.resume.journalist section { margin-bottom:7mm; }

/* ===== Lead / 简介 (导语首字下沉感) ===== */
.resume.journalist .lead-body {
  font-size:10pt;
  line-height:1.65;
  color:#2a2a2a;
  text-align:justify;
  column-count:1;
}
.resume.journalist .lead .lead-body { font-style:normal; }

/* ===== Entries with timestamp 时间戳 ===== */
.resume.journalist .col-section .entry {
  padding:0 0 4mm 0;
  margin-bottom:4mm;
  position:relative;
}
.resume.journalist .col-section .entry:not(:last-child) {
  border-bottom:1px dotted #bbb;
}

.resume.journalist .entry-stamp { margin-bottom:1mm; }
.resume.journalist .date {
  display:inline-block;
  font-family:'Courier New','Courier',monospace;
  font-size:7.5pt;
  letter-spacing:0.08em;
  font-weight:700;
  color:#fff;
  background:#111;
  padding:0.6mm 2mm;
  text-transform:uppercase;
}

.resume.journalist .headline {
  font-family:'Songti SC','SimSun','Times New Roman',serif;
  font-size:12.5pt;
  font-weight:800;
  line-height:1.25;
  color:#111;
  margin-bottom:1mm;
}
.resume.journalist .headline .company { display:inline; }
.resume.journalist .headline .position {
  display:inline;
  font-weight:600;
  font-size:10pt;
  color:#444;
}
.resume.journalist .headline .position::before {
  content:" / "; color:#999; font-weight:400;
}
.resume.journalist .headline .role {
  font-weight:600;
  font-size:10pt;
  color:#555;
}

.resume.journalist .byline {
  font-size:9pt;
  color:#555;
  font-style:italic;
  margin-top:0.5mm;
  font-family:'Times New Roman',serif;
}

/* bullet lists as news copy */
.resume.journalist ul {
  list-style:none;
  margin-top:1.5mm;
}
.resume.journalist li {
  position:relative;
  padding-left:4mm;
  margin-bottom:1mm;
  font-size:9.5pt;
  line-height:1.55;
  color:#2a2a2a;
  text-align:justify;
}
.resume.journalist li::before {
  content:"›";
  position:absolute;
  left:0;
  top:0;
  font-weight:700;
  color:#111;
}

/* ===== Skills (报头小广告栏) ===== */
.resume.journalist .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2mm 2.5mm;
}
.resume.journalist .skill-chip {
  display:inline-block;
  font-family:'Times New Roman',serif;
  font-size:8.5pt;
  letter-spacing:0.03em;
  padding:0.8mm 2.5mm;
  border:1px solid #111;
  color:#111;
  background:#fff;
}
.resume.journalist .skill-chip .lvl { color:#666; font-style:italic; }

/* ===== Projects description ===== */
.resume.journalist .col-section .lead-body { margin-bottom:1.5mm; }

/* ===== Required global safety ===== */
.resume.journalist li p, .resume.journalist li div { margin:0; padding:0; display:inline; }
.resume.journalist .skills span, .resume.journalist [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.journalist { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "journalist",
      "version": "1.0.0",
      "name": "记者编辑",
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
