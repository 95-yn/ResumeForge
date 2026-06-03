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
    slug: 'brutalist',
    name: '野兽派',
    category: 'creative',
    html: `<div class="resume brutalist">
  <header>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="block summary"><h2>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
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
  {{#if skills.length}}<section class="block" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section class="block" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.brutalist * { margin:0; padding:0; box-sizing:border-box; }
.resume.brutalist * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.brutalist {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:16mm;
  background:#fdfdf6;
  color:#0a0a0a;
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei','Arial Black',sans-serif;
  border:6px solid #0a0a0a;
}

/* ===== HEADER ===== */
.resume.brutalist header {
  border:5px solid #0a0a0a;
  background:#ffe600;
  padding:14px 18px;
  margin-bottom:20px;
  box-shadow:9px 9px 0 #0a0a0a;
}
.resume.brutalist header h1 {
  font-size:42pt;
  font-weight:900;
  line-height:0.95;
  letter-spacing:-1.5px;
  text-transform:uppercase;
  margin-bottom:6px;
  color:#0a0a0a;
}
.resume.brutalist header .role {
  display:inline-block;
  font-size:12pt;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:1px;
  background:#0a0a0a;
  color:#ffe600;
  padding:3px 10px;
  margin-bottom:10px;
}
.resume.brutalist header .contact {
  display:flex;
  flex-wrap:wrap;
  gap:0;
  border-top:3px solid #0a0a0a;
  padding-top:8px;
}
.resume.brutalist header .contact span {
  font-size:9pt;
  font-weight:700;
  padding:2px 12px 2px 0;
  margin-right:10px;
  border-right:3px solid #0a0a0a;
}
.resume.brutalist header .contact span:last-child {
  border-right:none;
  margin-right:0;
}

/* ===== SECTION BLOCKS ===== */
.resume.brutalist .block {
  border:4px solid #0a0a0a;
  margin-bottom:16px;
  background:#fff;
  box-shadow:6px 6px 0 #0a0a0a;
}
.resume.brutalist .block h2 {
  font-size:14pt;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.5px;
  background:#0a0a0a;
  color:#fdfdf6;
  padding:6px 14px;
  margin:0;
}
.resume.brutalist .block > div,
.resume.brutalist .block .entry,
.resume.brutalist .block .skills,
.resume.brutalist .summary > div {
  padding:0;
}
.resume.brutalist .summary > div {
  padding:12px 14px;
  font-size:10pt;
  font-weight:500;
}

/* ===== ENTRIES ===== */
.resume.brutalist .entry {
  padding:12px 14px;
  border-bottom:3px dashed #0a0a0a;
}
.resume.brutalist .entry:last-child {
  border-bottom:none;
}
.resume.brutalist .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  flex-wrap:wrap;
  gap:6px;
  margin-bottom:6px;
}
.resume.brutalist .entry h3 {
  font-size:13pt;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:-0.3px;
  line-height:1.15;
}
.resume.brutalist .entry h3 .company {
  display:inline-block;
}
.resume.brutalist .entry h3 .position {
  display:inline-block;
  font-size:10pt;
  font-weight:700;
  text-transform:none;
  letter-spacing:0;
  background:#ffe600;
  border:2px solid #0a0a0a;
  padding:0 7px;
  margin-left:8px;
  vertical-align:middle;
}
.resume.brutalist .entry .date {
  display:inline-block;
  font-size:8.5pt;
  font-weight:800;
  white-space:nowrap;
  background:#0a0a0a;
  color:#fdfdf6;
  padding:2px 8px;
}
.resume.brutalist .edu-meta {
  font-size:9.5pt;
  font-weight:600;
}

/* ===== LISTS ===== */
.resume.brutalist .entry ul {
  list-style:none;
  margin-top:6px;
}
.resume.brutalist .entry li {
  position:relative;
  padding-left:18px;
  margin-bottom:4px;
  font-size:9.5pt;
  font-weight:500;
}
.resume.brutalist .entry li::before {
  content:'';
  position:absolute;
  left:0;
  top:5px;
  width:9px;
  height:9px;
  background:#ffe600;
  border:2px solid #0a0a0a;
}

/* ===== SKILLS ===== */
.resume.brutalist .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  padding:12px 14px;
}
.resume.brutalist .skill-tag {
  display:inline-block;
  font-size:9.5pt;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:0.3px;
  background:#fff;
  border:3px solid #0a0a0a;
  padding:3px 10px;
  box-shadow:3px 3px 0 #0a0a0a;
}
.resume.brutalist .skill-tag .lvl {
  font-weight:600;
  text-transform:none;
}

/* ===== PROJECTS ===== */
.resume.brutalist .proj-role {
  font-weight:700;
  text-transform:none;
  letter-spacing:0;
}
.resume.brutalist .proj-desc {
  font-size:9.5pt;
  font-weight:500;
  margin:6px 0;
}

/* ===== REQUIRED RESETS ===== */
.resume.brutalist li p, .resume.brutalist li div { margin:0; padding:0; display:inline; }
.resume.brutalist .skills span, .resume.brutalist [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.brutalist { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "brutalist",
      "version": "1.0.0",
      "name": "野兽派",
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
