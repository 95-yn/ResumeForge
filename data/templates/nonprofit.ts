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
    slug: 'nonprofit',
    name: '公益组织',
    category: 'profession',
    html: `<div class="resume nonprofit">
  <header>
    <div class="tape tape-l"></div>
    <div class="tape tape-r"></div>
    <div class="header-inner">
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
    <h2><span class="leaf">&#10047;</span>个人简介</h2>
    <div class="note" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience">
    <h2><span class="leaf">&#10047;</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects">
    <h2><span class="leaf">&#10047;</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education">
    <h2><span class="leaf">&#10047;</span>教育背景</h2>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills">
    <h2><span class="leaf">&#10047;</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}
</div>`,
    css: `.resume.nonprofit * { margin:0; padding:0; box-sizing:border-box; }
.resume.nonprofit * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.nonprofit {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:
    radial-gradient(circle at 20% 15%, rgba(120,140,70,0.05) 0, transparent 40%),
    radial-gradient(circle at 80% 85%, rgba(120,140,70,0.05) 0, transparent 40%),
    #efe6d4;
  color:#3a3522;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

/* kraft paper fiber texture */
.resume.nonprofit::before {
  content:"";
  position:absolute;
  inset:0;
  background-image:
    repeating-linear-gradient(0deg, rgba(140,120,80,0.025) 0 1px, transparent 1px 4px),
    repeating-linear-gradient(90deg, rgba(140,120,80,0.02) 0 1px, transparent 1px 5px);
  pointer-events:none;
  z-index:0;
}
.resume.nonprofit > * { position:relative; z-index:1; }

/* ============ HEADER ============ */
.resume.nonprofit header {
  position:relative;
  margin-bottom:9mm;
  padding:0;
}
.resume.nonprofit .header-inner {
  background:#fbf7ec;
  border:1.5px dashed #6f7d3f;
  border-radius:3px;
  padding:8mm 9mm 7mm;
  box-shadow:2px 3px 0 rgba(95,108,57,0.18);
}
/* washi tape corners */
.resume.nonprofit .tape {
  position:absolute;
  width:24mm;
  height:7mm;
  background:rgba(123,142,73,0.42);
  border-left:1px dashed rgba(255,255,255,0.5);
  border-right:1px dashed rgba(255,255,255,0.5);
  z-index:2;
}
.resume.nonprofit .tape-l { top:-3mm; left:6mm; transform:rotate(-5deg); }
.resume.nonprofit .tape-r { top:-3mm; right:6mm; transform:rotate(4deg); background:rgba(159,138,92,0.42); }

.resume.nonprofit h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:2px;
  color:#4f5c2c;
  line-height:1.1;
}
.resume.nonprofit .role {
  margin-top:3px;
  font-size:11pt;
  font-weight:600;
  color:#7b8e49;
  letter-spacing:1px;
}
.resume.nonprofit .contact {
  margin-top:7px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 0;
  font-size:9pt;
  color:#5e573e;
}
.resume.nonprofit .contact span {
  position:relative;
  padding:0 10px;
}
.resume.nonprofit .contact span:first-child { padding-left:0; }
.resume.nonprofit .contact span:not(:last-child)::after {
  content:"";
  position:absolute;
  right:0;
  top:15%;
  height:70%;
  width:1px;
  background:#b9ad8c;
}

/* ============ SECTIONS ============ */
.resume.nonprofit section { margin-bottom:7mm; }
.resume.nonprofit h2 {
  font-size:12.5pt;
  font-weight:800;
  color:#4f5c2c;
  letter-spacing:1px;
  display:flex;
  align-items:center;
  gap:7px;
  padding-bottom:4px;
  margin-bottom:6px;
  border-bottom:2px solid #c9be9d;
}
.resume.nonprofit h2 .leaf {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:16px;
  height:16px;
  font-size:11px;
  color:#fbf7ec;
  background:#7b8e49;
  border-radius:50%;
  flex:0 0 auto;
}

/* ============ SUMMARY ============ */
.resume.nonprofit .summary .note {
  position:relative;
  background:#fbf7ec;
  border:1px solid #cbbf99;
  border-radius:4px;
  padding:7px 12px 7px 22px;
  font-size:9.5pt;
  color:#4a4430;
  box-shadow:1px 2px 0 rgba(95,108,57,0.1);
}
.resume.nonprofit .summary .note::before {
  content:"\\\\2713";
  position:absolute;
  left:9px;
  top:7px;
  color:#7b8e49;
  font-weight:700;
  font-size:9pt;
}

/* ============ ENTRY ============ */
.resume.nonprofit .entry {
  position:relative;
  padding:4px 0 5px 13px;
  margin-bottom:5px;
}
.resume.nonprofit .entry::before {
  content:"";
  position:absolute;
  left:0;
  top:8px;
  bottom:6px;
  width:2px;
  background:repeating-linear-gradient(#7b8e49 0 3px, transparent 3px 7px);
}
.resume.nonprofit .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.nonprofit h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#3a3522;
}
.resume.nonprofit .company { color:#4f5c2c; }
.resume.nonprofit .position {
  color:#8a7c54;
  font-weight:600;
}
.resume.nonprofit .position::before {
  content:"·";
  margin:0 5px;
  color:#b9ad8c;
}
.resume.nonprofit .date {
  font-size:8.5pt;
  font-weight:600;
  color:#7d7456;
  background:#e6dcc3;
  border-radius:10px;
  padding:1px 9px;
  white-space:nowrap;
}
.resume.nonprofit .desc {
  margin-top:3px;
  font-size:9.5pt;
  color:#4a4430;
}

.resume.nonprofit ul {
  list-style:none;
  margin-top:4px;
}
.resume.nonprofit li {
  position:relative;
  padding-left:15px;
  margin-bottom:2.5px;
  font-size:9.5pt;
  color:#4a4430;
}
.resume.nonprofit li::before {
  content:"\\\\2713";
  position:absolute;
  left:0;
  top:0;
  color:#7b8e49;
  font-weight:700;
  font-size:9pt;
}

/* ============ EDUCATION ============ */
.resume.nonprofit .edu-meta {
  margin-top:2px;
  font-size:9.5pt;
  color:#6b6244;
}

/* ============ SKILLS ============ */
.resume.nonprofit .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.nonprofit .skill-tag {
  display:inline-block;
  font-size:9pt;
  color:#4f5c2c;
  background:#fbf7ec;
  border:1px solid #a9b274;
  border-radius:3px;
  padding:3px 11px;
  box-shadow:1.5px 1.5px 0 rgba(123,142,73,0.22);
}
.resume.nonprofit .skill-tag .lvl { color:#9a8d61; font-weight:400; }

/* ============ CONTRACT REQUIRED ============ */
.resume.nonprofit li p, .resume.nonprofit li div { margin:0; padding:0; display:inline; }
.resume.nonprofit .skills span, .resume.nonprofit [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.nonprofit { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "nonprofit",
      "version": "1.0.0",
      "name": "公益组织",
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
