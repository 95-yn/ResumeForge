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
    slug: 'letterpress',
    name: '凸版印刷',
    category: 'minimal',
    html: `<div class="resume letterpress">
  <header>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="block"><h2>个人简介</h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section class="block" data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section class="block" data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section class="block" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section class="block" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.letterpress * { margin:0; padding:0; box-sizing:border-box; }
.resume.letterpress * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.letterpress {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#f3eee2;
  background-image:radial-gradient(rgba(120,108,86,0.05) 1px, transparent 1px);
  background-size:4px 4px;
  color:#2a2620;
  font-family:'Songti SC','SimSun','Noto Serif SC',Georgia,'Times New Roman','PingFang SC','Microsoft YaHei',serif;
  font-size:10.5pt;
  line-height:1.6;
}

/* ---- Header ---- */
.resume.letterpress header {
  text-align:center;
  padding-bottom:7mm;
  margin-bottom:7mm;
  border-bottom:1px solid #b8ab8c;
  position:relative;
}
.resume.letterpress header::after {
  content:"";
  position:absolute;
  left:50%; bottom:-3px;
  transform:translateX(-50%);
  width:64px; height:2px;
  background:#6b5e42;
}
.resume.letterpress h1 {
  font-size:30pt;
  font-weight:700;
  letter-spacing:0.18em;
  color:#1f1b14;
  text-indent:0.18em;
  text-shadow:0 1px 0 #fdfbf4;
}
.resume.letterpress .title {
  margin-top:3mm;
  font-size:11.5pt;
  font-style:italic;
  letter-spacing:0.2em;
  text-indent:0.2em;
  color:#5a4f38;
}
.resume.letterpress .contact {
  margin-top:4mm;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:5mm;
  font-size:9.5pt;
  letter-spacing:0.05em;
  color:#46402f;
}
.resume.letterpress .contact span {
  position:relative;
}
.resume.letterpress .contact span + span::before {
  content:"·";
  position:absolute;
  left:-2.8mm;
  color:#8a7d5c;
}

/* ---- Section ---- */
.resume.letterpress .block { margin-bottom:6.5mm; }
.resume.letterpress h2 {
  font-size:11.5pt;
  font-weight:700;
  letter-spacing:0.22em;
  text-indent:0.22em;
  color:#3d3525;
  padding-bottom:1.8mm;
  margin-bottom:4mm;
  border-bottom:1px solid #b8ab8c;
}

/* ---- Entry ---- */
.resume.letterpress .entry { margin-bottom:4.5mm; }
.resume.letterpress .entry:last-child { margin-bottom:0; }
.resume.letterpress .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:4mm;
  margin-bottom:1mm;
}
.resume.letterpress h3 {
  font-size:11.5pt;
  font-weight:700;
  color:#221e16;
  letter-spacing:0.02em;
}
.resume.letterpress .company { color:#221e16; }
.resume.letterpress .position {
  font-weight:400;
  font-style:italic;
  color:#5a4f38;
}
.resume.letterpress .position::before {
  content:"，";
  font-style:normal;
  color:#8a7d5c;
}
.resume.letterpress .date {
  flex-shrink:0;
  font-size:9pt;
  font-style:italic;
  letter-spacing:0.04em;
  color:#6b5f44;
  white-space:nowrap;
}

.resume.letterpress .edu-meta {
  margin-top:1mm;
  font-size:10pt;
  color:#46402f;
}

.resume.letterpress .summary {
  font-size:10.5pt;
  color:#2f2a20;
  line-height:1.75;
  text-align:justify;
}

/* ---- Lists ---- */
.resume.letterpress ul {
  list-style:none;
  margin-top:2mm;
  padding-left:5mm;
}
.resume.letterpress li {
  position:relative;
  margin-bottom:1.8mm;
  font-size:10pt;
  color:#2f2a20;
  line-height:1.65;
  text-align:justify;
}
.resume.letterpress li::before {
  content:"—";
  position:absolute;
  left:-5mm;
  color:#8a7d5c;
}

/* ---- Projects ---- */
.resume.letterpress .proj-role {
  font-weight:400;
  font-style:italic;
  color:#5a4f38;
}
.resume.letterpress .proj-desc {
  margin-top:1mm;
  font-size:10pt;
  color:#2f2a20;
  line-height:1.65;
  text-align:justify;
}

/* ---- Skills ---- */
.resume.letterpress .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.letterpress .skill-chip {
  display:inline-block;
  padding:1.2mm 3.5mm;
  font-size:9.5pt;
  letter-spacing:0.03em;
  color:#34301f;
  background:#ece4d2;
  border:1px solid #c2b594;
  border-radius:2px;
  box-shadow:inset 0 1px 2px rgba(120,108,86,0.18), 0 1px 0 #fdfbf4;
}
.resume.letterpress .skill-chip .lv { color:#6b5f44; font-style:italic; }

/* ---- print-safe inline rules ---- */
.resume.letterpress li p, .resume.letterpress li div { margin:0; padding:0; display:inline; }
.resume.letterpress .skills span, .resume.letterpress [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.letterpress { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "letterpress",
      "version": "1.0.0",
      "name": "凸版印刷",
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
