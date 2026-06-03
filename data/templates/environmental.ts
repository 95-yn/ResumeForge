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
    slug: 'environmental',
    name: '环境科学',
    category: 'profession',
    html: `<div class="resume environmental">
  <header>
    <div class="env-strata"></div>
    <div class="env-head-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="env-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="env-wave">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1150,15 1200,30 L1200,60 L0,60 Z"></path>
        <path class="env-wave2" d="M0,40 C200,15 400,55 600,40 C800,25 1000,55 1200,40 L1200,60 L0,60 Z"></path>
      </svg>
    </div>
  </header>

  <main class="env-body">
    {{#if basics.summary}}<section class="env-sec env-summary"><h2><span class="env-h2-mark"></span>个人简介</h2><div class="env-summary-text" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

    {{#if experience.length}}<section class="env-sec" data-section="experience"><h2><span class="env-h2-mark"></span>工作经历</h2>
      <div class="env-timeline">
      {{#each experience}}<div class="env-entry" data-entry="experience" data-entry-index="{{@index}}">
        <span class="env-node"></span>
        <div class="env-entry-top">
          <h3><span class="env-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="env-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
      </div>
    </section>{{/if}}

    {{#if projects.length}}<section class="env-sec" data-section="projects"><h2><span class="env-h2-mark"></span>项目经历</h2>
      {{#each projects}}<div class="env-entry env-project" data-entry="projects" data-entry-index="{{@index}}">
        <h3><span class="env-pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="env-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="env-pdesc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </section>{{/if}}

    {{#if education.length}}<section class="env-sec" data-section="education"><h2><span class="env-h2-mark"></span>教育背景</h2>
      {{#each education}}<div class="env-entry env-edu" data-entry="education" data-entry-index="{{@index}}">
        <div class="env-entry-top">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="env-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>{{/each}}
    </section>{{/if}}

    {{#if skills.length}}<section class="env-sec" data-section="skills"><h2><span class="env-h2-mark"></span>专业技能</h2>
      <div class="skills">{{#each skills}}<span class="env-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="env-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="env-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </section>{{/if}}
  </main>
</div>`,
    css: `.resume.environmental * { margin:0; padding:0; box-sizing:border-box; }
.resume.environmental * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.environmental {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:0;
  background:#f6f1e7;
  font-size:10pt; line-height:1.5;
  color:#2c3a3a;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --water:#3a9c9c;
  --water-deep:#1f6b6e;
  --water-light:#8fcfce;
  --sand:#f6f1e7;
  --sand-deep:#e7dcc6;
  --ink:#2c3a3a;
}

/* ===== HEADER : 地层 + 水波 ===== */
.resume.environmental header {
  position:relative;
  background:
    linear-gradient(180deg, #1f6b6e 0%, #2e8587 55%, #3a9c9c 100%);
  color:#f4f8f7;
  padding:18mm 18mm 0;
  overflow:hidden;
}
.resume.environmental .env-strata {
  position:absolute; inset:0; pointer-events:none; opacity:.5;
  background:
    repeating-linear-gradient(115deg,
      rgba(255,255,255,.05) 0, rgba(255,255,255,.05) 1px,
      transparent 1px, transparent 9px),
    repeating-linear-gradient(178deg,
      rgba(0,0,0,.06) 0, rgba(0,0,0,.06) 2px,
      transparent 2px, transparent 14px);
}
.resume.environmental .env-head-inner { position:relative; z-index:2; padding-bottom:9mm; }
.resume.environmental header h1 {
  font-size:27pt; font-weight:700; letter-spacing:.04em; line-height:1.1;
  color:#fff;
}
.resume.environmental .env-title {
  margin-top:4px; font-size:11.5pt; font-weight:400; letter-spacing:.12em;
  color:#d6efed;
}
.resume.environmental .env-title::before {
  content:''; display:inline-block; width:18px; height:2px;
  background:var(--water-light); vertical-align:middle; margin-right:8px;
  border-radius:2px;
}
.resume.environmental .contact {
  margin-top:11px; display:flex; flex-wrap:wrap; gap:7px 16px;
  font-size:9pt; color:#e4f3f1;
}
.resume.environmental .contact span { display:inline-flex; align-items:center; letter-spacing:.02em; }
.resume.environmental .contact span::before {
  content:''; display:inline-block; width:6px; height:6px; border-radius:50%;
  border:1.5px solid var(--water-light); margin-right:6px;
}

/* 水波 SVG 收尾 */
.resume.environmental .env-wave {
  position:relative; z-index:1; line-height:0;
  margin:0 -18mm;
}
.resume.environmental .env-wave svg { display:block; width:100%; height:34px; }
.resume.environmental .env-wave path { fill:#f6f1e7; }
.resume.environmental .env-wave .env-wave2 { fill:rgba(143,207,206,.55); }

/* ===== BODY ===== */
.resume.environmental .env-body { padding:6mm 18mm 18mm; }
.resume.environmental .env-sec { margin-top:8mm; }
.resume.environmental .env-sec:first-child { margin-top:2mm; }

.resume.environmental h2 {
  display:flex; align-items:center; gap:9px;
  font-size:12.5pt; font-weight:700; letter-spacing:.06em;
  color:var(--water-deep);
  padding-bottom:6px; margin-bottom:11px;
  border-bottom:1.5px solid var(--sand-deep);
  position:relative;
}
.resume.environmental h2::after {
  content:''; position:absolute; left:0; bottom:-1.5px; width:46px; height:1.5px;
  background:var(--water);
}
.resume.environmental .env-h2-mark {
  width:13px; height:13px; flex:0 0 13px; border-radius:50%;
  background:radial-gradient(circle at 35% 30%, var(--water-light), var(--water) 70%);
  box-shadow:0 0 0 3px rgba(58,156,156,.16);
}

/* summary */
.resume.environmental .env-summary-text {
  background:#fff;
  border-radius:8px;
  padding:10px 14px 10px 18px; font-size:10pt; color:#3a4a4a; line-height:1.65;
  box-shadow:0 2px 10px rgba(31,107,110,.05);
  position:relative;
}
.resume.environmental .env-summary-text::before {
  content:''; position:absolute; left:9px; top:13px;
  width:7px; height:7px;
  border-radius:50% 50% 50% 0; transform:rotate(45deg);
  background:var(--water);
}

/* timeline / entries */
.resume.environmental .env-timeline { position:relative; padding-left:16px; }
.resume.environmental .env-timeline::before {
  content:''; position:absolute; left:4px; top:6px; bottom:6px; width:2px;
  background:linear-gradient(180deg, var(--water-light), var(--sand-deep));
  border-radius:2px;
}
.resume.environmental .env-entry { position:relative; margin-bottom:13px; }
.resume.environmental .env-entry:last-child { margin-bottom:0; }
.resume.environmental .env-node {
  position:absolute; left:-16px; top:5px; width:9px; height:9px; border-radius:50%;
  background:#fff; border:2.5px solid var(--water);
  box-shadow:0 0 0 3px rgba(143,207,206,.25);
}

.resume.environmental .env-entry-top {
  display:flex; justify-content:space-between; align-items:baseline; gap:12px;
  flex-wrap:wrap;
}
.resume.environmental .env-entry h3 {
  font-size:11pt; font-weight:600; color:var(--ink); line-height:1.35;
}
.resume.environmental .env-company { font-weight:700; color:var(--water-deep); }
.resume.environmental .env-position {
  font-weight:500; color:#52716f;
}
.resume.environmental .env-position::before {
  content:'·'; margin:0 6px; color:var(--water-light); font-weight:700;
}
.resume.environmental .date {
  font-size:8.5pt; color:#6f8482; white-space:nowrap; letter-spacing:.03em;
  background:var(--sand-deep); padding:2px 9px; border-radius:20px;
}

.resume.environmental .env-entry ul {
  list-style:none; margin-top:7px;
}
.resume.environmental .env-entry li {
  position:relative; padding-left:16px; margin-bottom:4px;
  font-size:9.5pt; color:#41514f; line-height:1.55;
}
.resume.environmental .env-entry li::before {
  content:''; position:absolute; left:2px; top:7px; width:5px; height:5px;
  border-radius:50% 50% 50% 0; transform:rotate(45deg);
  background:var(--water);
}

/* projects */
.resume.environmental .env-project {
  background:#fff; border-radius:9px; padding:11px 14px; margin-bottom:9px;
  box-shadow:0 2px 9px rgba(31,107,110,.05);
  border-top:2px solid var(--water-light);
}
.resume.environmental .env-pname { font-weight:700; color:var(--water-deep); font-size:11pt; }
.resume.environmental .env-role {
  font-size:8.5pt; font-weight:500; color:var(--water);
  background:rgba(143,207,206,.22); padding:1px 8px; border-radius:20px; margin-left:6px;
}
.resume.environmental .env-pdesc {
  margin-top:5px; font-size:9.5pt; color:#52615f; line-height:1.55;
}

/* education */
.resume.environmental .env-edu { margin-bottom:9px; }
.resume.environmental .env-edu h3 { font-size:11pt; font-weight:700; color:var(--ink); }
.resume.environmental .env-edu-meta { margin-top:3px; font-size:9.5pt; color:#52716f; }

/* skills */
.resume.environmental .skills { display:flex; flex-wrap:wrap; gap:8px; }
.resume.environmental .env-skill {
  display:inline-flex; align-items:center; gap:6px;
  background:#fff; border:1px solid var(--sand-deep);
  border-radius:6px; padding:5px 11px 5px 15px; font-size:9.5pt;
  position:relative;
}
.resume.environmental .env-skill::before {
  content:''; position:absolute; left:7px; top:50%;
  width:5px; height:5px; margin-top:-2.5px;
  border-radius:50% 50% 50% 0; transform:rotate(45deg);
  background:var(--water);
}
.resume.environmental .env-skill-name { font-weight:600; color:var(--ink); }
.resume.environmental .env-skill-level {
  font-size:8.5pt; color:#fff; background:var(--water);
  padding:1px 7px; border-radius:20px;
}

/* ===== required tail ===== */
.resume.environmental li p, .resume.environmental li div { margin:0; padding:0; display:inline; }
.resume.environmental .skills span, .resume.environmental [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.environmental { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "environmental",
      "version": "1.0.0",
      "name": "环境科学",
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
