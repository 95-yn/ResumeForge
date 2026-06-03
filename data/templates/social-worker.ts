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
    slug: 'social-worker',
    name: '社会工作',
    category: 'profession',
    html: `<div class="resume social-worker">
  <header>
    <div class="head-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary">
    <h2><span class="ico">&#10084;</span>个人简介</h2>
    <div class="card" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience">
    <h2><span class="ico">&#9670;</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-top">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education">
    <h2><span class="ico">&#9670;</span>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-top">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills">
    <h2><span class="ico">&#9670;</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects">
    <h2><span class="ico">&#9670;</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.social-worker * { margin:0; padding:0; box-sizing:border-box; }
.resume.social-worker * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.social-worker {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 20mm;
  background:#fdf8f1;
  font-size:10pt;
  line-height:1.5;
  color:#4a3f35;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --orange:#e8743b;
  --orange-soft:#f6a96b;
  --cream:#fbeede;
  --cream-deep:#f5e2cb;
  --ink:#4a3f35;
  --muted:#9b8a78;
}

/* ===== Header ===== */
.resume.social-worker header {
  background:linear-gradient(135deg,#f9aa5e 0%,#e8743b 100%);
  border-radius:22px;
  padding:22px 28px;
  margin-bottom:22px;
  box-shadow:0 6px 18px rgba(232,116,59,0.18);
  position:relative;
  overflow:hidden;
}
.resume.social-worker header::after {
  content:"";
  position:absolute;
  right:-30px;
  top:-30px;
  width:130px;
  height:130px;
  background:rgba(255,255,255,0.14);
  border-radius:50%;
}
.resume.social-worker header::before {
  content:"";
  position:absolute;
  right:40px;
  bottom:-40px;
  width:90px;
  height:90px;
  background:rgba(255,255,255,0.10);
  border-radius:50%;
}
.resume.social-worker .head-inner { position:relative; z-index:1; }
.resume.social-worker h1 {
  font-size:23pt;
  font-weight:700;
  color:#fff;
  letter-spacing:1px;
  margin-bottom:4px;
}
.resume.social-worker .role {
  font-size:11pt;
  color:#fff;
  font-weight:500;
  background:rgba(255,255,255,0.22);
  display:inline-block;
  padding:2px 14px;
  border-radius:20px;
  margin-bottom:12px;
}
.resume.social-worker .contact {
  display:flex;
  flex-wrap:wrap;
  gap:8px 18px;
  margin-top:4px;
}
.resume.social-worker .contact span {
  font-size:9pt;
  color:#fff;
  position:relative;
  padding-left:14px;
}
.resume.social-worker .contact span::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:6px;
  height:6px;
  border-radius:50%;
  background:rgba(255,255,255,0.85);
}

/* ===== Sections ===== */
.resume.social-worker section { margin-bottom:18px; }
.resume.social-worker h2 {
  font-size:12.5pt;
  font-weight:700;
  color:var(--orange);
  display:flex;
  align-items:center;
  gap:9px;
  padding-bottom:8px;
  margin-bottom:13px;
  border-bottom:2px dashed var(--cream-deep);
}
.resume.social-worker h2 .ico {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:24px;
  height:24px;
  background:var(--cream);
  color:var(--orange);
  border-radius:50%;
  font-size:9pt;
}

/* ===== Summary ===== */
.resume.social-worker .summary .card {
  background:var(--cream);
  border-radius:16px;
  padding:14px 18px;
  font-size:10pt;
  line-height:1.7;
  color:var(--ink);
  border-left:4px solid var(--orange-soft);
}

/* ===== Entry ===== */
.resume.social-worker .entry {
  background:#fff;
  border-radius:16px;
  padding:13px 18px;
  margin-bottom:11px;
  box-shadow:0 2px 8px rgba(166,140,110,0.08);
  border:1px solid #f3e8d9;
}
.resume.social-worker .entry:last-child { margin-bottom:0; }
.resume.social-worker .entry-top {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:14px;
  flex-wrap:wrap;
}
.resume.social-worker h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
  display:flex;
  align-items:baseline;
  gap:9px;
  flex-wrap:wrap;
}
.resume.social-worker .company { color:var(--ink); }
.resume.social-worker .position {
  font-size:9.5pt;
  font-weight:600;
  color:var(--orange);
}
.resume.social-worker .date {
  font-size:8.5pt;
  color:#fff;
  background:var(--orange-soft);
  padding:2px 11px;
  border-radius:14px;
  white-space:nowrap;
  font-weight:500;
  flex-shrink:0;
}
.resume.social-worker .entry ul {
  list-style:none;
  margin-top:9px;
}
.resume.social-worker .entry li {
  position:relative;
  padding-left:18px;
  margin-bottom:5px;
  font-size:9.5pt;
  line-height:1.6;
  color:#5a4e42;
}
.resume.social-worker .entry li:last-child { margin-bottom:0; }
.resume.social-worker .entry li::before {
  content:"";
  position:absolute;
  left:2px;
  top:7px;
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--orange);
  box-shadow:0 0 0 3px var(--cream);
}

/* ===== Education ===== */
.resume.social-worker .edu-meta {
  font-size:9pt;
  color:var(--muted);
  margin-top:6px;
}

/* ===== Skills ===== */
.resume.social-worker .skills {
  display:flex;
  flex-wrap:wrap;
  gap:9px;
}
.resume.social-worker .chip {
  background:var(--cream);
  border:1px solid var(--cream-deep);
  border-radius:18px;
  padding:5px 15px;
  font-size:9.5pt;
  color:var(--ink);
  font-weight:600;
}
.resume.social-worker .chip .lvl {
  color:var(--orange);
  font-weight:500;
}

/* ===== Projects ===== */
.resume.social-worker .proj-role {
  font-size:9.5pt;
  font-weight:600;
  color:var(--orange);
}
.resume.social-worker .proj-desc {
  font-size:9.5pt;
  color:#5a4e42;
  line-height:1.6;
  margin-top:7px;
}
.resume.social-worker .proj-desc + ul { margin-top:7px; }

/* ===== Required tail rules ===== */
.resume.social-worker li p, .resume.social-worker li div { margin:0; padding:0; display:inline; }
.resume.social-worker .skills span, .resume.social-worker [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.social-worker { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.social-worker header { box-shadow:none; }
  .resume.social-worker .entry { box-shadow:none; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "social-worker",
      "version": "1.0.0",
      "name": "社会工作",
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
