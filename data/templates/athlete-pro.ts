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
    slug: 'athlete-pro',
    name: '职业运动员',
    category: 'profession',
    html: `<div class="resume athlete-pro">
  <header>
    <div class="jersey-num">01</div>
    <div class="header-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary-block"><h2><span class="h2-label">PROFILE</span>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="h2-label">CAREER</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="h2-label">EDU</span>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="h2-label">SKILLS</span>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="h2-label">PROJECTS</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.athlete-pro * { margin:0; padding:0; box-sizing:border-box; }
.resume.athlete-pro * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.athlete-pro {
  --ink:#0d0f12;
  --bolt:#e8ff2a;
  --flame:#ff3d2e;
  --steel:#1b1f26;
  --line:#d7dbe0;
  --muted:#5b6470;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:0 0 18mm 0;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
  overflow:hidden;
}

/* ===== HEADER: 斜切动感大色块 + 号码字 ===== */
.resume.athlete-pro header {
  position:relative;
  background:var(--ink);
  color:#fff;
  padding:20mm 18mm 16mm 18mm;
  margin-bottom:10mm;
  overflow:hidden;
}
.resume.athlete-pro header::before {
  content:"";
  position:absolute;
  top:0; right:0; bottom:0;
  width:55%;
  background:var(--flame);
  transform:skewX(-14deg);
  transform-origin:top right;
  right:-12%;
}
.resume.athlete-pro header::after {
  content:"";
  position:absolute;
  bottom:0; left:0; right:0;
  height:6px;
  background:var(--bolt);
}
.resume.athlete-pro .jersey-num {
  position:absolute;
  top:50%;
  right:8mm;
  transform:translateY(-50%) skewX(-8deg);
  font-size:120pt;
  font-weight:900;
  font-style:italic;
  line-height:0.8;
  color:rgba(255,255,255,0.16);
  letter-spacing:-6px;
  z-index:1;
  font-family:'Arial Black','PingFang SC',sans-serif;
  pointer-events:none;
}
.resume.athlete-pro .header-main {
  position:relative;
  z-index:2;
}
.resume.athlete-pro header h1 {
  font-size:34pt;
  font-weight:900;
  font-style:italic;
  letter-spacing:1px;
  line-height:1.02;
  text-transform:uppercase;
  transform:skewX(-4deg);
  transform-origin:left;
}
.resume.athlete-pro header .title {
  display:inline-block;
  margin-top:8px;
  padding:3px 12px;
  background:var(--bolt);
  color:var(--ink);
  font-size:10pt;
  font-weight:800;
  letter-spacing:2px;
  text-transform:uppercase;
  transform:skewX(-8deg);
}
.resume.athlete-pro header .title > * { display:inline-block; transform:skewX(8deg); }
.resume.athlete-pro header .contact {
  display:flex;
  flex-wrap:wrap;
  gap:0;
  margin-top:14px;
  font-size:9pt;
  font-weight:600;
  letter-spacing:0.4px;
}
.resume.athlete-pro header .contact span {
  position:relative;
  padding:0 14px;
  color:rgba(255,255,255,0.92);
}
.resume.athlete-pro header .contact span:first-child { padding-left:0; }
.resume.athlete-pro header .contact span:not(:last-child)::after {
  content:"";
  position:absolute;
  right:0; top:50%;
  transform:translateY(-50%);
  width:2px; height:11px;
  background:var(--bolt);
  transform:translateY(-50%) skewX(-12deg);
}

/* ===== SECTIONS ===== */
.resume.athlete-pro section {
  padding:0 18mm;
  margin-bottom:8mm;
}
.resume.athlete-pro h2 {
  position:relative;
  display:flex;
  align-items:baseline;
  gap:10px;
  font-size:14pt;
  font-weight:900;
  font-style:italic;
  text-transform:uppercase;
  letter-spacing:0.5px;
  color:var(--ink);
  padding-bottom:6px;
  margin-bottom:10px;
  border-bottom:3px solid var(--ink);
}
.resume.athlete-pro h2::before {
  content:"";
  position:absolute;
  left:0; bottom:-3px;
  width:40px; height:3px;
  background:var(--flame);
  z-index:1;
}
.resume.athlete-pro .h2-label {
  font-size:7.5pt;
  font-weight:800;
  font-style:normal;
  letter-spacing:2px;
  color:#fff;
  background:var(--flame);
  padding:2px 8px;
  transform:skewX(-10deg);
}
.resume.athlete-pro .h2-label > * { display:inline-block; }

/* summary */
.resume.athlete-pro .summary-block div {
  font-size:10pt;
  color:var(--steel);
  line-height:1.65;
  padding-left:14px;
  border-left:4px solid var(--bolt);
}

/* ===== ENTRIES ===== */
.resume.athlete-pro .entry {
  position:relative;
  padding:9px 0 9px 16px;
  margin-bottom:6px;
  border-left:3px solid var(--line);
}
.resume.athlete-pro .entry::before {
  content:"";
  position:absolute;
  left:-3px; top:9px;
  width:3px; height:18px;
  background:var(--flame);
}
.resume.athlete-pro .entry:last-child { margin-bottom:0; }
.resume.athlete-pro .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:6px;
}
.resume.athlete-pro h3 {
  font-size:11.5pt;
  font-weight:800;
  color:var(--ink);
  letter-spacing:0.2px;
}
.resume.athlete-pro .company { font-weight:900; }
.resume.athlete-pro .position {
  font-weight:700;
  color:var(--flame);
  font-style:italic;
}
.resume.athlete-pro .position::before { content:"／"; color:var(--line); font-style:normal; margin:0 4px; }
.resume.athlete-pro .date {
  font-size:8.5pt;
  font-weight:800;
  font-style:italic;
  letter-spacing:0.5px;
  color:#fff;
  background:var(--ink);
  padding:2px 9px;
  white-space:nowrap;
  transform:skewX(-8deg);
}
.resume.athlete-pro .date > * { display:inline-block; }
.resume.athlete-pro .edu-meta {
  margin-top:3px;
  font-size:9.5pt;
  color:var(--muted);
  font-weight:600;
}

/* lists */
.resume.athlete-pro ul {
  list-style:none;
  margin-top:6px;
}
.resume.athlete-pro li {
  position:relative;
  padding-left:18px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:var(--steel);
  line-height:1.55;
}
.resume.athlete-pro li::before {
  content:"";
  position:absolute;
  left:0; top:6px;
  width:9px; height:9px;
  background:var(--bolt);
  transform:skewX(-12deg);
  border:1px solid var(--ink);
}

/* ===== SKILLS ===== */
.resume.athlete-pro .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.athlete-pro .skill-chip {
  display:inline-block;
  padding:4px 12px;
  background:var(--ink);
  color:#fff;
  font-size:9pt;
  font-weight:700;
  letter-spacing:0.3px;
  transform:skewX(-10deg);
  border-left:3px solid var(--bolt);
}
.resume.athlete-pro .skill-chip > * { display:inline-block; transform:skewX(10deg); }
.resume.athlete-pro .skill-chip .lvl { color:var(--bolt); font-weight:800; }

/* ===== PROJECTS ===== */
.resume.athlete-pro .proj-name { font-weight:900; }
.resume.athlete-pro .proj-role { font-weight:700; color:var(--flame); font-style:italic; }
.resume.athlete-pro .proj-desc {
  margin-top:4px;
  font-size:9.5pt;
  color:var(--steel);
  line-height:1.6;
}

/* ===== required tail ===== */
.resume.athlete-pro li p, .resume.athlete-pro li div { margin:0; padding:0; display:inline; }
.resume.athlete-pro .skills span, .resume.athlete-pro [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.athlete-pro { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "athlete-pro",
      "version": "1.0.0",
      "name": "职业运动员",
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
