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
    slug: 'civil-engineer',
    name: '土木工程',
    category: 'profession',
    html: `<div class="resume civil-engineer">
  <header>
    <div class="head-bar">
      <div class="head-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="head-mark"><span class="mark-cross"></span></div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="block block-summary"><h2><span class="h2-tag">00</span>个人简介</h2><div class="block-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience"><h2><span class="h2-tag">01</span>工作经历</h2>
    <div class="block-body">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects"><h2><span class="h2-tag">02</span>项目经历</h2>
    <div class="block-body">
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education"><h2><span class="h2-tag">03</span>教育背景</h2>
    <div class="block-body">
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills"><h2><span class="h2-tag">04</span>专业技能</h2>
    <div class="block-body">
      <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="skill-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.civil-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.civil-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.civil-engineer {
  --cement:#4a4f54;
  --cement-dark:#33373b;
  --orange:#f26a1b;
  --orange-deep:#d4530a;
  --line:#c9cdd1;
  --paper:#fff;
  --ink:#2b2e31;
  --muted:#6c7176;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:var(--paper);
  background-image:
    linear-gradient(to right, rgba(74,79,84,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(74,79,84,0.05) 1px, transparent 1px);
  background-size:18mm 18mm;
  color:var(--ink);
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ---------- HEADER ---------- */
.resume.civil-engineer header {
  border-top:7px solid var(--orange);
  border-bottom:2px solid var(--cement);
  padding:14px 0 12px;
  margin-bottom:22px;
}
.resume.civil-engineer .head-bar {
  display:flex;
  align-items:stretch;
  justify-content:space-between;
}
.resume.civil-engineer .head-id { padding-left:14px; border-left:5px solid var(--cement); }
.resume.civil-engineer h1 {
  font-size:30pt;
  line-height:1.05;
  font-weight:900;
  letter-spacing:1px;
  color:var(--cement-dark);
  text-transform:uppercase;
}
.resume.civil-engineer .head-id p {
  margin-top:6px;
  font-size:10.5pt;
  font-weight:700;
  letter-spacing:3px;
  color:var(--orange-deep);
  text-transform:uppercase;
}
/* beam-column survey mark */
.resume.civil-engineer .head-mark {
  width:46px;
  position:relative;
  flex:none;
  align-self:flex-start;
}
.resume.civil-engineer .mark-cross,
.resume.civil-engineer .mark-cross::before,
.resume.civil-engineer .mark-cross::after { position:absolute; }
.resume.civil-engineer .mark-cross {
  top:2px; left:2px;
  width:42px; height:42px;
  border:3px solid var(--cement);
  border-radius:50%;
}
.resume.civil-engineer .mark-cross::before {
  content:""; top:50%; left:-7px; right:-7px; height:3px;
  background:var(--orange); transform:translateY(-50%);
}
.resume.civil-engineer .mark-cross::after {
  content:""; left:50%; top:-7px; bottom:-7px; width:3px;
  background:var(--orange); transform:translateX(-50%);
}

.resume.civil-engineer .contact {
  margin-top:14px;
  padding-left:14px;
  display:flex;
  flex-wrap:wrap;
  gap:0;
  font-size:9pt;
  font-weight:600;
  letter-spacing:0.5px;
  color:var(--cement);
}
.resume.civil-engineer .contact span {
  position:relative;
  padding:1px 16px 1px 0;
  margin-right:16px;
}
.resume.civil-engineer .contact span::before {
  content:"";
  position:absolute; left:-9px; top:50%;
  width:5px; height:5px; margin-top:-2.5px;
  background:var(--orange);
}
.resume.civil-engineer .contact span:first-child::before { display:none; }

/* ---------- SECTION BLOCKS ---------- */
.resume.civil-engineer .block { margin-bottom:20px; }
.resume.civil-engineer h2 {
  display:flex;
  align-items:center;
  gap:10px;
  font-size:13pt;
  font-weight:900;
  letter-spacing:2px;
  color:var(--cement-dark);
  text-transform:uppercase;
  padding-bottom:6px;
  border-bottom:2px solid var(--cement);
  margin-bottom:12px;
}
.resume.civil-engineer .h2-tag {
  display:inline-block;
  flex:none;
  min-width:30px;
  padding:3px 6px;
  background:var(--orange);
  color:#fff;
  font-size:9.5pt;
  font-weight:900;
  letter-spacing:1px;
  text-align:center;
}

/* ---------- ENTRIES ---------- */
.resume.civil-engineer .block-body { padding-left:4px; }
.resume.civil-engineer .entry {
  position:relative;
  padding:0 0 0 16px;
  margin-bottom:14px;
  border-left:2px solid var(--line);
}
.resume.civil-engineer .entry::before {
  content:"";
  position:absolute; left:-5px; top:5px;
  width:8px; height:8px;
  background:var(--orange);
  border:2px solid #fff;
  box-shadow:0 0 0 1px var(--cement);
}
.resume.civil-engineer .entry:last-child { margin-bottom:0; }

.resume.civil-engineer .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 12px;
}
.resume.civil-engineer h3 {
  font-size:11pt;
  font-weight:800;
  color:var(--cement-dark);
}
.resume.civil-engineer .company { font-weight:900; }
.resume.civil-engineer .position {
  margin-left:9px;
  padding-left:9px;
  border-left:2px solid var(--orange);
  font-size:10pt;
  font-weight:700;
  color:var(--orange-deep);
}
.resume.civil-engineer .date {
  font-size:8.5pt;
  font-weight:700;
  letter-spacing:0.5px;
  color:#fff;
  background:var(--cement);
  padding:2px 8px;
  white-space:nowrap;
  flex:none;
}

.resume.civil-engineer .proj-desc {
  margin-top:5px;
  color:var(--muted);
  font-size:9.5pt;
}
.resume.civil-engineer ul {
  margin-top:6px;
  list-style:none;
}
.resume.civil-engineer li {
  position:relative;
  padding-left:15px;
  margin-bottom:3px;
  font-size:9.7pt;
}
.resume.civil-engineer li::before {
  content:"";
  position:absolute; left:0; top:7px;
  width:6px; height:6px;
  background:var(--orange);
  clip-path:polygon(0 0, 100% 50%, 0 100%);
}

.resume.civil-engineer .edu-meta {
  margin-top:3px;
  font-size:9.5pt;
  font-weight:600;
  color:var(--muted);
}

/* ---------- SKILLS ---------- */
.resume.civil-engineer .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.civil-engineer .skill-chip {
  display:inline-block;
  padding:4px 11px;
  background:#eceeef;
  border:1px solid var(--line);
  border-left:3px solid var(--orange);
  font-size:9.3pt;
  font-weight:700;
  color:var(--cement-dark);
}
.resume.civil-engineer .skill-lvl {
  font-weight:600;
  color:var(--muted);
}

/* ---------- REQUIRED TAIL ---------- */
.resume.civil-engineer li p, .resume.civil-engineer li div { margin:0; padding:0; display:inline; }
.resume.civil-engineer .skills span, .resume.civil-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.civil-engineer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "civil-engineer",
      "version": "1.0.0",
      "name": "土木工程",
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
