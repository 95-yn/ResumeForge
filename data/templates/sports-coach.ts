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
    slug: 'sports-coach',
    name: '运动教练',
    category: 'profession',
    html: `<div class="resume sports-coach">
  <header>
    <div class="sc-scoreboard">
      <div class="sc-board-top">
        <span class="sc-board-label">ATHLETE PROFILE</span>
        <span class="sc-board-dots"><i></i><i></i><i></i></span>
      </div>
      <div class="sc-board-main">
        <div class="sc-lane-num">01</div>
        <div class="sc-board-id">
          <h1 data-field="basics.name">{{{basics.name}}}</h1>
          {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
        </div>
      </div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="sc-summary"><h2><span class="sc-h2-tag">GAME PLAN</span>个人简介</h2><div class="sc-summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="sc-block" data-section="experience"><h2><span class="sc-h2-tag">SEASONS</span>工作经历</h2>
    <div class="sc-timeline">
    {{#each experience}}<div class="sc-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="sc-entry-head">
        <h3><span class="sc-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sc-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date sc-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section class="sc-block" data-section="education"><h2><span class="sc-h2-tag">TRAINING</span>教育背景</h2>
    {{#each education}}<div class="sc-entry sc-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="sc-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date sc-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="sc-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sc-block" data-section="skills"><h2><span class="sc-h2-tag">STATS</span>专业技能</h2>
    <div class="skills sc-skills">{{#each skills}}<span class="sc-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="sc-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="sc-skill-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="sc-block" data-section="projects"><h2><span class="sc-h2-tag">MATCHES</span>项目经历</h2>
    {{#each projects}}<div class="sc-entry sc-proj" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="sc-proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="sc-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="sc-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.sports-coach * { margin:0; padding:0; box-sizing:border-box; }
.resume.sports-coach * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.sports-coach {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm;
  background:#fff; font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#0f2540;
  --sc-blue:#0b3a82;
  --sc-blue-deep:#072350;
  --sc-yellow:#ffcf2d;
  --sc-track:#1456c4;
  --sc-ink:#0f2540;
  --sc-gray:#5a6b82;
}

/* ===== Scoreboard Header ===== */
.resume.sports-coach header { margin-bottom:9mm; }
.resume.sports-coach .sc-scoreboard {
  background:linear-gradient(135deg,var(--sc-blue-deep) 0%,var(--sc-blue) 60%,var(--sc-track) 100%);
  border-radius:6px;
  padding:7mm 8mm 6mm;
  position:relative;
  overflow:hidden;
  border-bottom:5px solid var(--sc-yellow);
}
.resume.sports-coach .sc-scoreboard::before {
  content:""; position:absolute; top:0; right:-10%; width:55%; height:100%;
  background:repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0 14px, transparent 14px 34px);
  pointer-events:none;
}
.resume.sports-coach .sc-board-top {
  display:flex; justify-content:space-between; align-items:center;
  margin-bottom:5mm; position:relative; z-index:1;
}
.resume.sports-coach .sc-board-label {
  font-size:7.5pt; letter-spacing:3px; font-weight:800;
  color:var(--sc-yellow);
  font-family:'Arial Narrow',Arial,sans-serif;
}
.resume.sports-coach .sc-board-dots { display:flex; gap:5px; }
.resume.sports-coach .sc-board-dots i {
  width:7px; height:7px; border-radius:50%; background:var(--sc-yellow); display:block;
  box-shadow:0 0 6px rgba(255,207,45,0.6);
}
.resume.sports-coach .sc-board-dots i:nth-child(2){ opacity:0.55; }
.resume.sports-coach .sc-board-dots i:nth-child(3){ opacity:0.3; }

.resume.sports-coach .sc-board-main {
  display:flex; align-items:center; gap:6mm; position:relative; z-index:1;
}
.resume.sports-coach .sc-lane-num {
  font-size:34pt; font-weight:900; line-height:0.9;
  color:transparent;
  -webkit-text-stroke:2px var(--sc-yellow);
  font-family:'Arial Black',Arial,sans-serif;
  flex-shrink:0;
}
.resume.sports-coach .sc-board-id h1 {
  font-size:24pt; font-weight:900; color:#fff; letter-spacing:1px;
  line-height:1.05; text-transform:uppercase;
}
.resume.sports-coach .sc-board-id p {
  margin-top:2mm; font-size:9.5pt; font-weight:700;
  color:var(--sc-yellow); letter-spacing:2px;
}

.resume.sports-coach .contact {
  display:flex; flex-wrap:wrap; gap:6px 0; margin-top:5mm;
  position:relative; z-index:1;
}
.resume.sports-coach .contact span {
  font-size:8.5pt; color:#eaf1ff; font-weight:600;
  padding:0 10px; position:relative;
}
.resume.sports-coach .contact span:first-child { padding-left:0; }
.resume.sports-coach .contact span + span::before {
  content:""; position:absolute; left:0; top:50%; transform:translateY(-50%);
  width:2px; height:11px; background:var(--sc-yellow); border-radius:1px;
}

/* ===== Section Headings ===== */
.resume.sports-coach h2 {
  display:flex; align-items:center; gap:4mm;
  font-size:13pt; font-weight:900; color:var(--sc-blue);
  letter-spacing:1px; margin-bottom:4mm;
  padding-bottom:2.5mm;
  border-bottom:2px solid #e3ebf7;
  position:relative;
}
.resume.sports-coach h2::after {
  content:""; position:absolute; left:0; bottom:-2px; width:42mm; height:2px;
  background:var(--sc-yellow);
}
.resume.sports-coach .sc-h2-tag {
  font-size:7pt; font-weight:800; letter-spacing:1.5px;
  color:var(--sc-blue-deep);
  background:var(--sc-yellow);
  padding:2px 7px; border-radius:3px;
  font-family:'Arial Narrow',Arial,sans-serif;
  line-height:1.3;
}

.resume.sports-coach section { margin-bottom:7mm; }

/* ===== Summary ===== */
.resume.sports-coach .sc-summary-body {
  font-size:10pt; color:#2c3e58; line-height:1.7;
  padding-left:4mm; border-left:3px solid var(--sc-track);
}

/* ===== Entries / Timeline ===== */
.resume.sports-coach .sc-timeline { position:relative; padding-left:6mm; }
.resume.sports-coach .sc-timeline::before {
  content:""; position:absolute; left:1.5mm; top:2mm; bottom:2mm; width:2px;
  background:repeating-linear-gradient(to bottom, var(--sc-track) 0 6px, transparent 6px 11px);
}
.resume.sports-coach .sc-entry { margin-bottom:5mm; position:relative; }
.resume.sports-coach .sc-timeline .sc-entry::before {
  content:""; position:absolute; left:-6mm; top:1.6mm;
  width:9px; height:9px; border-radius:50%;
  background:var(--sc-yellow); border:2px solid var(--sc-blue);
  transform:translateX(-3px);
}
.resume.sports-coach .sc-entry:last-child { margin-bottom:0; }

.resume.sports-coach .sc-entry-head {
  display:flex; justify-content:space-between; align-items:baseline;
  gap:4mm; flex-wrap:wrap;
}
.resume.sports-coach .sc-entry h3 {
  font-size:11pt; font-weight:800; color:var(--sc-ink);
}
.resume.sports-coach .sc-company { color:var(--sc-blue); }
.resume.sports-coach .sc-position {
  font-weight:600; color:var(--sc-gray); font-size:10pt;
}
.resume.sports-coach .sc-position::before { content:"｜"; color:#c5d2e6; font-weight:400; }

.resume.sports-coach .sc-date {
  font-size:8pt; font-weight:800; color:var(--sc-blue-deep);
  background:#eef3fb; border:1px solid #d6e2f3;
  padding:1.5px 8px; border-radius:20px;
  white-space:nowrap; letter-spacing:0.5px;
  font-family:'Arial Narrow',Arial,sans-serif;
}

.resume.sports-coach .sc-entry ul {
  list-style:none; margin-top:2.5mm;
}
.resume.sports-coach .sc-entry li {
  font-size:9.5pt; color:#34465f; line-height:1.6;
  padding-left:6mm; margin-bottom:1.5mm; position:relative;
}
.resume.sports-coach .sc-entry li::before {
  content:"▸"; position:absolute; left:0; top:0;
  color:var(--sc-track); font-weight:900; font-size:9pt;
}

/* ===== Education ===== */
.resume.sports-coach .sc-edu .sc-edu-meta {
  font-size:9.5pt; color:var(--sc-gray); margin-top:1.5mm; font-weight:600;
}
.resume.sports-coach .sc-edu .sc-edu-meta span:first-child { color:var(--sc-blue); font-weight:700; }

/* ===== Skills / Stats ===== */
.resume.sports-coach .sc-skills {
  display:flex; flex-wrap:wrap; gap:2.5mm;
}
.resume.sports-coach .sc-skill {
  display:inline-flex; align-items:center;
  font-size:9pt; font-weight:700; color:var(--sc-blue-deep);
  background:#fff;
  border:2px solid var(--sc-blue);
  border-radius:4px;
  overflow:hidden;
  line-height:1.3;
}
.resume.sports-coach .sc-skill-name { padding:2px 9px; }
.resume.sports-coach .sc-skill-lvl {
  padding:2px 8px;
  background:var(--sc-yellow);
  color:var(--sc-blue-deep);
  font-weight:800;
  font-size:8pt;
  font-family:'Arial Narrow',Arial,sans-serif;
  letter-spacing:0.5px;
}

/* ===== Projects ===== */
.resume.sports-coach .sc-proj { margin-bottom:5mm; }
.resume.sports-coach .sc-proj h3 {
  font-size:11pt; font-weight:800; color:var(--sc-ink);
  padding-left:5mm; position:relative;
}
.resume.sports-coach .sc-proj h3::before {
  content:""; position:absolute; left:0; top:2px; bottom:2px; width:3px;
  background:var(--sc-yellow); border-radius:2px;
}
.resume.sports-coach .sc-proj-name { color:var(--sc-blue); }
.resume.sports-coach .sc-proj-role {
  font-size:8pt; font-weight:800; color:var(--sc-blue-deep);
  background:var(--sc-yellow); padding:1px 7px; border-radius:3px;
  letter-spacing:0.5px; vertical-align:middle;
}
.resume.sports-coach .sc-proj-desc {
  font-size:9.5pt; color:#34465f; line-height:1.6; margin-top:2mm; padding-left:5mm;
}
.resume.sports-coach .sc-proj ul { list-style:none; margin-top:2mm; padding-left:5mm; }
.resume.sports-coach .sc-proj li {
  font-size:9.5pt; color:#34465f; line-height:1.6;
  padding-left:6mm; margin-bottom:1.5mm; position:relative;
}
.resume.sports-coach .sc-proj li::before {
  content:"▸"; position:absolute; left:0; top:0;
  color:var(--sc-track); font-weight:900; font-size:9pt;
}

/* ===== Contract-required tail ===== */
.resume.sports-coach li p, .resume.sports-coach li div { margin:0; padding:0; display:inline; }
.resume.sports-coach .skills span, .resume.sports-coach [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.sports-coach { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "sports-coach",
      "version": "1.0.0",
      "name": "运动教练",
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
