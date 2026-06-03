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
    slug: 'interior-designer',
    name: '室内设计',
    category: 'profession',
    html: `<div class="resume interior-designer">
  <header>
    <div class="id-swatch" aria-hidden="true"></div>
    <div class="id-head-text">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="id-summary"><h2>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="id-block"><h2>工作经历</h2>
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="id-entry">
      <div class="id-entry-head">
        <h3><span class="id-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="id-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="id-block"><h2>项目经历</h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="id-entry id-project">
      <h3><span class="id-proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="id-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="id-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="id-block"><h2>教育背景</h2>
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="id-entry id-edu">
      <div class="id-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="id-block id-skills-block"><h2>专业技能</h2>
    <div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="id-skill"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="id-skill-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}
</div>`,
    css: `.resume.interior-designer * { margin:0; padding:0; box-sizing:border-box; }
.resume.interior-designer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.interior-designer {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#f4ede1;
  color:#3a342c;
  font-size:10pt;
  line-height:1.6;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --oat:#f4ede1;
  --oat-card:#fbf7ef;
  --terra:#b65d3c;
  --terra-deep:#8f4429;
  --clay:#cf8a5e;
  --ink:#3a342c;
  --muted:#8c8073;
  --line:#ddd1bf;
}

/* ===== Header: material color block ===== */
.resume.interior-designer header {
  display:flex;
  align-items:stretch;
  gap:0;
  margin-bottom:11mm;
  background:var(--oat-card);
  border:1px solid var(--line);
}
.resume.interior-designer .id-swatch {
  flex:0 0 14mm;
  background:
    linear-gradient(180deg, var(--terra) 0%, var(--terra) 33%, var(--clay) 33%, var(--clay) 66%, #e7d2bd 66%, #e7d2bd 100%);
}
.resume.interior-designer .id-head-text {
  flex:1;
  padding:9mm 9mm 8mm;
}
.resume.interior-designer header h1 {
  font-size:25pt;
  font-weight:600;
  letter-spacing:0.06em;
  color:var(--ink);
  line-height:1.1;
}
.resume.interior-designer header > .id-head-text > p[data-field='basics.title'] {
  margin-top:3mm;
  font-size:11pt;
  letter-spacing:0.22em;
  text-transform:uppercase;
  color:var(--terra-deep);
  font-weight:500;
}
.resume.interior-designer .contact {
  margin-top:6mm;
  display:flex;
  flex-wrap:wrap;
  gap:4mm 7mm;
  font-size:8.6pt;
  color:var(--muted);
  letter-spacing:0.04em;
}
.resume.interior-designer .contact span {
  position:relative;
  padding-left:4.5mm;
}
.resume.interior-designer .contact span::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  width:2.2mm;
  height:2.2mm;
  transform:translateY(-50%);
  background:var(--clay);
}

/* ===== Sections ===== */
.resume.interior-designer section { margin-bottom:9mm; }
.resume.interior-designer h2 {
  font-size:11pt;
  font-weight:600;
  color:var(--terra-deep);
  letter-spacing:0.18em;
  margin-bottom:5mm;
  padding-bottom:2.5mm;
  position:relative;
}
.resume.interior-designer h2::before {
  content:'';
  display:inline-block;
  width:7mm;
  height:2.6mm;
  background:var(--terra);
  margin-right:3.5mm;
  vertical-align:0.5mm;
}
.resume.interior-designer h2::after {
  content:'';
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:1px;
  background:var(--line);
}

/* ===== Summary ===== */
.resume.interior-designer .id-summary > div[data-field='basics.summary'] {
  background:var(--oat-card);
  border-left:3mm solid var(--clay);
  padding:5mm 6mm;
  color:#4d463c;
  font-size:9.6pt;
  line-height:1.75;
}

/* ===== Entries ===== */
.resume.interior-designer .id-entry { margin-bottom:6mm; }
.resume.interior-designer .id-entry:last-child { margin-bottom:0; }
.resume.interior-designer .id-entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:5mm;
  flex-wrap:wrap;
}
.resume.interior-designer .id-entry h3 {
  font-size:11pt;
  font-weight:600;
  color:var(--ink);
}
.resume.interior-designer .id-company {
  color:var(--ink);
}
.resume.interior-designer .id-position {
  font-weight:400;
  color:var(--terra-deep);
  font-size:9.6pt;
  margin-left:3mm;
  position:relative;
  padding-left:3.5mm;
}
.resume.interior-designer .id-position::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:1.6mm;
  height:1.6mm;
  border-radius:50%;
  background:var(--clay);
}
.resume.interior-designer .date {
  font-size:8.4pt;
  color:var(--muted);
  letter-spacing:0.05em;
  white-space:nowrap;
  background:#ece2d2;
  padding:1mm 3mm;
}

.resume.interior-designer ul {
  list-style:none;
  margin-top:3mm;
}
.resume.interior-designer li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.8mm;
  font-size:9.4pt;
  line-height:1.65;
  color:#4d463c;
}
.resume.interior-designer li::before {
  content:'';
  position:absolute;
  left:0;
  top:2.6mm;
  width:2.2mm;
  height:0.9mm;
  background:var(--terra);
}

/* ===== Projects ===== */
.resume.interior-designer .id-project {
  background:var(--oat-card);
  border:1px solid var(--line);
  padding:5mm 6mm;
}
.resume.interior-designer .id-proj-name { color:var(--ink); }
.resume.interior-designer .id-proj-role {
  font-weight:400;
  font-size:9pt;
  color:#fff;
  background:var(--terra);
  padding:0.6mm 2.6mm;
  letter-spacing:0.04em;
}
.resume.interior-designer .id-desc {
  margin-top:2.5mm;
  font-size:9.4pt;
  color:#4d463c;
  line-height:1.7;
}

/* ===== Education ===== */
.resume.interior-designer .id-edu p {
  margin-top:1.5mm;
  font-size:9.2pt;
  color:var(--muted);
}

/* ===== Skills as material chips ===== */
.resume.interior-designer .skills {
  display:flex;
  flex-wrap:wrap;
  gap:3mm;
}
.resume.interior-designer .id-skill {
  display:inline-block;
  background:var(--oat-card);
  border:1px solid var(--line);
  border-left:2.2mm solid var(--clay);
  padding:1.6mm 4mm;
  font-size:9pt;
  color:var(--ink);
  letter-spacing:0.03em;
}
.resume.interior-designer .id-skill-lvl {
  color:var(--terra-deep);
}

/* ===== contract-required tail ===== */
.resume.interior-designer li p, .resume.interior-designer li div { margin:0; padding:0; display:inline; }
.resume.interior-designer .skills span, .resume.interior-designer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.interior-designer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "interior-designer",
      "version": "1.0.0",
      "name": "室内设计",
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
