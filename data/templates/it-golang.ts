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
    slug: 'it-golang',
    name: '后端Go',
    category: 'tech',
    html: `<div class="resume it-golang">
  <header>
    <div class="header-inner">
      <div class="brand">
        <span class="brand-mark">{ }</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
      </div>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary-block">
    <h2><span class="h2-tag">//</span>个人简介</h2>
    <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="h2-tag">//</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep">/</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="h2-tag">//</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="sep">/</span><span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="h2-tag">//</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="h2-tag">//</span>教育背景</h2>
    {{#each education}}<div class="entry edu-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="dot">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.it-golang * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-golang * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-golang {
  --gopher:#00ADD8;
  --gopher-deep:#007D9C;
  --ink:#1a1f24;
  --muted:#5a6672;
  --line:#e6ebef;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 18mm 16mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.it-golang header {
  border-bottom:2px solid var(--ink);
  padding-bottom:5mm;
  margin-bottom:7mm;
}
.resume.it-golang .header-inner { display:block; }
.resume.it-golang .brand {
  display:flex;
  align-items:baseline;
  gap:10px;
}
.resume.it-golang .brand-mark {
  font-family:'SF Mono','Menlo',Consolas,monospace;
  font-size:18pt;
  font-weight:700;
  color:var(--gopher);
  line-height:1;
  letter-spacing:-1px;
}
.resume.it-golang h1 {
  font-size:24pt;
  font-weight:700;
  letter-spacing:0.5px;
  color:var(--ink);
}
.resume.it-golang .role {
  margin-top:3px;
  font-size:11pt;
  font-weight:500;
  color:var(--gopher-deep);
  font-family:'SF Mono','Menlo',Consolas,monospace;
}
.resume.it-golang .contact {
  margin-top:8px;
  display:flex;
  flex-wrap:wrap;
  gap:0;
  font-size:9pt;
  color:var(--muted);
}
.resume.it-golang .contact span { position:relative; padding:0 12px; }
.resume.it-golang .contact span:first-child { padding-left:0; }
.resume.it-golang .contact span + span::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:4px;
  height:4px;
  border-radius:50%;
  background:var(--gopher);
}

/* ===== Section ===== */
.resume.it-golang .block { margin-bottom:7mm; }
.resume.it-golang .block:last-child { margin-bottom:0; }
.resume.it-golang h2 {
  font-size:12pt;
  font-weight:700;
  color:var(--ink);
  margin-bottom:4mm;
  display:flex;
  align-items:center;
  gap:7px;
  letter-spacing:0.5px;
}
.resume.it-golang .h2-tag {
  font-family:'SF Mono','Menlo',Consolas,monospace;
  color:var(--gopher);
  font-weight:700;
  font-size:11pt;
}

/* ===== Summary ===== */
.resume.it-golang .summary {
  color:var(--muted);
  font-size:9.8pt;
  padding-left:12px;
  border-left:2px solid var(--gopher);
}

/* ===== Entry ===== */
.resume.it-golang .entry {
  position:relative;
  padding-left:14px;
  margin-bottom:4.5mm;
}
.resume.it-golang .entry:last-child { margin-bottom:0; }
.resume.it-golang .entry::before {
  content:'';
  position:absolute;
  left:0;
  top:4px;
  width:6px;
  height:6px;
  border-radius:50%;
  background:var(--gopher);
}
.resume.it-golang .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:12px;
  flex-wrap:wrap;
}
.resume.it-golang h3 {
  font-size:10.8pt;
  font-weight:600;
  color:var(--ink);
}
.resume.it-golang .company { color:var(--ink); font-weight:700; }
.resume.it-golang .position { color:var(--gopher-deep); font-weight:600; }
.resume.it-golang .proj-name { color:var(--ink); font-weight:700; }
.resume.it-golang .proj-role { color:var(--gopher-deep); font-weight:600; }
.resume.it-golang .sep {
  color:var(--line);
  margin:0 7px;
  font-weight:400;
  font-family:'SF Mono','Menlo',Consolas,monospace;
}
.resume.it-golang .date {
  font-size:8.5pt;
  color:var(--muted);
  font-family:'SF Mono','Menlo',Consolas,monospace;
  white-space:nowrap;
  flex-shrink:0;
}
.resume.it-golang .proj-desc {
  margin-top:2px;
  color:var(--muted);
  font-size:9.5pt;
}

/* ===== Lists ===== */
.resume.it-golang ul {
  list-style:none;
  margin-top:3px;
}
.resume.it-golang li {
  position:relative;
  padding-left:15px;
  margin-bottom:2px;
  color:#333b42;
  font-size:9.6pt;
}
.resume.it-golang li::before {
  content:'›';
  position:absolute;
  left:2px;
  top:-0.5px;
  color:var(--gopher);
  font-weight:700;
}

/* ===== Skills ===== */
.resume.it-golang .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.it-golang .skill-chip {
  display:inline-flex;
  align-items:center;
  border:1px solid var(--line);
  border-radius:5px;
  overflow:hidden;
  font-size:9pt;
  background:#fafcfd;
}
.resume.it-golang .skill-name {
  padding:2.5px 9px;
  font-weight:600;
  color:var(--ink);
}
.resume.it-golang .skill-level {
  padding:2.5px 9px;
  background:var(--gopher);
  color:#fff;
  font-size:8pt;
  font-weight:500;
  font-family:'SF Mono','Menlo',Consolas,monospace;
}

/* ===== Education ===== */
.resume.it-golang .edu-meta {
  margin-top:2px;
  color:var(--muted);
  font-size:9.5pt;
}
.resume.it-golang .dot { margin:0 7px; color:var(--gopher); }

/* ===== Required tails ===== */
.resume.it-golang li p, .resume.it-golang li div { margin:0; padding:0; display:inline; }
.resume.it-golang .skills span, .resume.it-golang [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.it-golang { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.it-golang .entry, .resume.it-golang .skill-chip { break-inside:avoid; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "it-golang",
      "version": "1.0.0",
      "name": "后端Go",
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
