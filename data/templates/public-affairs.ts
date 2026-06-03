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
    slug: 'public-affairs',
    name: '公共事务',
    category: 'profession',
    html: `<div class="resume public-affairs">
  <header>
    <div class="crest">
      <span class="crest-mark"></span>
    </div>
    <div class="head-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="rule"></div>
  </header>

  {{#if basics.summary}}<section class="summary">
    <h2><span class="badge">概</span>个人简介</h2>
    <div class="body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience">
    <h2><span class="badge">职</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="org" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects">
    <h2><span class="badge">项</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="org" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education">
    <h2><span class="badge">学</span>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills">
    <h2><span class="badge">技</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}
</div>`,
    css: `.resume.public-affairs * { margin:0; padding:0; box-sizing:border-box; }
.resume.public-affairs * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.public-affairs {
  --navy:#16243f;
  --navy2:#22325a;
  --gold:#a8843a;
  --gold-soft:#bd9a52;
  --ink:#2a2f3a;
  --muted:#6a7180;
  --line:#d9dde6;
  --paper:#fff;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 18mm 16mm;
  background:var(--paper);
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ---------- Header ---------- */
.resume.public-affairs header {
  display:flex;
  align-items:flex-start;
  gap:14px;
  flex-wrap:wrap;
  position:relative;
}
.resume.public-affairs .crest {
  flex:0 0 auto;
  width:46px;
  height:46px;
  border-radius:50%;
  background:var(--navy);
  border:2px solid var(--gold);
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 0 0 3px rgba(168,132,58,.16);
}
.resume.public-affairs .crest-mark {
  width:20px;
  height:20px;
  position:relative;
}
.resume.public-affairs .crest-mark::before,
.resume.public-affairs .crest-mark::after {
  content:'';
  position:absolute;
  inset:0;
  border:1.5px solid var(--gold-soft);
}
.resume.public-affairs .crest-mark::before { transform:rotate(0deg); }
.resume.public-affairs .crest-mark::after { transform:rotate(45deg); }

.resume.public-affairs .head-main { flex:1 1 240px; min-width:200px; }
.resume.public-affairs h1 {
  font-family:Georgia,'Songti SC','Times New Roman',serif;
  font-size:25pt;
  font-weight:700;
  letter-spacing:.06em;
  color:var(--navy);
  line-height:1.1;
}
.resume.public-affairs .title {
  margin-top:4px;
  font-size:10.5pt;
  letter-spacing:.2em;
  text-transform:uppercase;
  color:var(--gold);
  font-weight:600;
}
.resume.public-affairs .contact {
  margin-top:9px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 0;
  font-size:9pt;
  color:var(--muted);
}
.resume.public-affairs .contact span {
  position:relative;
  padding:0 12px;
}
.resume.public-affairs .contact span:first-child { padding-left:0; }
.resume.public-affairs .contact span + span::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:3px;
  height:3px;
  border-radius:50%;
  background:var(--gold);
}
.resume.public-affairs .rule {
  flex:1 0 100%;
  height:3px;
  margin-top:14px;
  background:linear-gradient(90deg,var(--navy) 0 70%,var(--gold) 70% 100%);
}

/* ---------- Sections ---------- */
.resume.public-affairs section { margin-top:18px; }
.resume.public-affairs h2 {
  display:flex;
  align-items:center;
  gap:9px;
  font-family:Georgia,'Songti SC','Times New Roman',serif;
  font-size:13pt;
  font-weight:700;
  letter-spacing:.08em;
  color:var(--navy);
  padding-bottom:6px;
  margin-bottom:11px;
  border-bottom:1px solid var(--line);
}
.resume.public-affairs h2 .badge {
  flex:0 0 auto;
  width:22px;
  height:22px;
  border-radius:5px;
  background:var(--navy);
  color:var(--gold-soft);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  font-size:9.5pt;
  font-weight:600;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  letter-spacing:0;
  box-shadow:inset 0 0 0 1px var(--gold);
}

.resume.public-affairs .summary .body { color:var(--ink); }

/* ---------- Entries：金菱形前导锚点 ---------- */
.resume.public-affairs .entry {
  position:relative;
  padding-left:16px;
  margin-bottom:13px;
}
.resume.public-affairs .entry:last-child { margin-bottom:0; }
.resume.public-affairs .entry::before {
  content:'';
  position:absolute;
  left:1px;
  top:5px;
  width:6px;
  height:6px;
  background:var(--gold);
  transform:rotate(45deg);
}
.resume.public-affairs .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.public-affairs h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--navy);
}
.resume.public-affairs h3 .org { color:var(--navy); }
.resume.public-affairs h3 .role {
  font-weight:600;
  color:var(--gold);
  margin-left:8px;
  font-size:10pt;
}
.resume.public-affairs .date {
  font-size:8.5pt;
  color:var(--muted);
  letter-spacing:.04em;
  white-space:nowrap;
  font-family:Georgia,serif;
}
.resume.public-affairs .edu-meta {
  margin-top:2px;
  font-size:9.5pt;
  color:var(--muted);
}
.resume.public-affairs .proj-desc {
  margin-top:3px;
  font-size:9.5pt;
  color:var(--ink);
}

.resume.public-affairs ul {
  list-style:none;
  margin-top:5px;
}
.resume.public-affairs li {
  position:relative;
  padding-left:14px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:var(--ink);
}
.resume.public-affairs li::before {
  content:'';
  position:absolute;
  left:2px;
  top:7px;
  width:4px;
  height:4px;
  background:var(--gold);
  transform:rotate(45deg);
}

/* ---------- Skills（去金色侧条，改整框+金角点） ---------- */
.resume.public-affairs .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.public-affairs .skill {
  display:inline-flex;
  align-items:center;
  gap:7px;
  padding:4px 11px;
  font-size:9pt;
  color:var(--navy);
  background:#f4f6fa;
  border:1px solid var(--line);
  border-radius:2px;
}
.resume.public-affairs .skill::before {
  content:'';
  flex:0 0 auto;
  width:5px;
  height:5px;
  background:var(--gold);
  transform:rotate(45deg);
}
.resume.public-affairs .skill .lv { color:var(--gold); font-weight:600; }

/* ---------- Required tail ---------- */
.resume.public-affairs li p, .resume.public-affairs li div { margin:0; padding:0; display:inline; }
.resume.public-affairs .skills span, .resume.public-affairs [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.public-affairs { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "public-affairs",
      "version": "1.0.0",
      "name": "公共事务",
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
