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
    slug: 'magazine',
    name: '杂志风',
    category: 'creative',
    html: `<div class="resume magazine">
  <header>
    <div class="masthead">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="lead"><h2>个人简介</h2><div class="lead-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  <div class="cols">
    <div class="col-main">
      {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>
        {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>{{/each}}
      </section>{{/if}}

      {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>
        {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>{{#if description}}<div class="pdesc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
      </section>{{/if}}
    </div>

    <aside class="col-side">
      {{#if education.length}}<section data-section="education"><h2>教育背景</h2>
        {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span><p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
      </section>{{/if}}

      {{#if skills.length}}<section data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span class="sname" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="slevel" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
    </aside>
  </div>
</div>`,
    css: `.resume.magazine * { margin:0; padding:0; box-sizing:border-box; }
.resume.magazine * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.magazine {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  color:#111;
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  font-feature-settings:'kern' 1;
}

/* ===== Masthead / Editorial Header ===== */
.resume.magazine header {
  border-top:6px solid #111;
  border-bottom:1px solid #111;
  padding:10px 0 14px;
  margin-bottom:18px;
}
.resume.magazine .masthead {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:6px 16px;
}
.resume.magazine h1 {
  font-size:38pt;
  line-height:0.95;
  font-weight:900;
  letter-spacing:-0.5px;
  text-transform:uppercase;
}
.resume.magazine .role {
  font-size:10pt;
  font-weight:700;
  letter-spacing:3px;
  text-transform:uppercase;
  color:#111;
  border-bottom:2px solid #111;
  padding-bottom:2px;
}
.resume.magazine .contact {
  margin-top:12px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 0;
  font-size:8.5pt;
  letter-spacing:0.5px;
  text-transform:uppercase;
  color:#444;
}
.resume.magazine .contact span {
  position:relative;
  padding:0 14px;
}
.resume.magazine .contact span:first-child { padding-left:0; }
.resume.magazine .contact span:not(:last-child)::after {
  content:'';
  position:absolute;
  right:0;
  top:1px;
  bottom:1px;
  width:1px;
  background:#bbb;
}

/* ===== Section Headings ===== */
.resume.magazine h2 {
  font-size:10pt;
  font-weight:900;
  letter-spacing:2.5px;
  text-transform:uppercase;
  padding-bottom:5px;
  margin-bottom:12px;
  border-bottom:2px solid #111;
  position:relative;
}
.resume.magazine h2::before {
  content:'';
  display:inline-block;
  width:8px;
  height:8px;
  background:#111;
  margin-right:8px;
  vertical-align:1px;
}

/* ===== Lead / Summary (drop-cap feel) ===== */
.resume.magazine .lead {
  margin-bottom:18px;
  padding-bottom:16px;
  border-bottom:1px solid #ddd;
}
.resume.magazine .lead-body {
  font-size:11pt;
  line-height:1.65;
  color:#222;
  column-count:2;
  column-gap:24px;
  column-rule:1px solid #e2e2e2;
  text-align:justify;
}

/* ===== Multi-column Grid ===== */
.resume.magazine .cols {
  display:grid;
  grid-template-columns:1fr 64mm;
  gap:0;
}
.resume.magazine .col-main {
  padding-right:18px;
  border-right:1px solid #111;
}
.resume.magazine .col-side {
  padding-left:18px;
}

/* ===== Entries ===== */
.resume.magazine section { margin-bottom:18px; break-inside:avoid; }
.resume.magazine .col-main section:last-child,
.resume.magazine .col-side section:last-child { margin-bottom:0; }

.resume.magazine .entry {
  margin-bottom:14px;
  padding-bottom:14px;
  border-bottom:1px solid #e4e4e4;
  break-inside:avoid;
}
.resume.magazine .entry:last-child {
  margin-bottom:0;
  padding-bottom:0;
  border-bottom:none;
}

.resume.magazine h3 {
  font-size:11pt;
  font-weight:800;
  line-height:1.3;
  margin-bottom:2px;
}
.resume.magazine .company {
  text-transform:uppercase;
  letter-spacing:0.5px;
}
.resume.magazine .position {
  font-weight:600;
  color:#333;
}
.resume.magazine .position::before {
  content:'·';
  margin:0 6px;
  color:#999;
  font-weight:400;
}
.resume.magazine .date {
  display:block;
  font-size:8pt;
  font-weight:700;
  letter-spacing:1.5px;
  text-transform:uppercase;
  color:#666;
  margin-bottom:6px;
}

.resume.magazine ul {
  list-style:none;
  margin-top:5px;
}
.resume.magazine li {
  position:relative;
  padding-left:14px;
  margin-bottom:3px;
  font-size:9.5pt;
  line-height:1.5;
  color:#222;
}
.resume.magazine li::before {
  content:'';
  position:absolute;
  left:0;
  top:7px;
  width:5px;
  height:1.5px;
  background:#111;
}

/* ===== Projects ===== */
.resume.magazine .prole {
  font-weight:600;
  color:#333;
  text-transform:uppercase;
  letter-spacing:0.5px;
  font-size:9pt;
}
.resume.magazine .prole::before {
  content:'/ ';
  color:#999;
}
.resume.magazine .pdesc {
  font-size:9.5pt;
  color:#333;
  margin-top:3px;
}

/* ===== Education (sidebar) ===== */
.resume.magazine .col-side h3 {
  font-size:10pt;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:0.3px;
  line-height:1.3;
}
.resume.magazine .edu-meta {
  font-size:9pt;
  color:#444;
  margin-top:3px;
}

/* ===== Skills ===== */
.resume.magazine .skills {
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}
.resume.magazine .skill {
  border:1px solid #111;
  padding:3px 8px;
  font-size:8.5pt;
  line-height:1.3;
  background:#fff;
}
.resume.magazine .skill:nth-child(3n+1) {
  background:#111;
  color:#fff;
}
.resume.magazine .slevel {
  opacity:0.65;
  font-size:7.5pt;
  letter-spacing:0.5px;
  text-transform:uppercase;
}
.resume.magazine .slevel::before {
  content:'·';
  margin:0 3px;
}

/* ===== Required tail rules ===== */
.resume.magazine li p, .resume.magazine li div { margin:0; padding:0; display:inline; }
.resume.magazine .skills span, .resume.magazine [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.magazine { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "magazine",
      "version": "1.0.0",
      "name": "杂志风",
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
