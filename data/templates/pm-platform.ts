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
    slug: 'pm-platform',
    name: '平台产品',
    category: 'profession',
    html: `<div class="resume pm-platform">
  <header>
    <div class="id-block">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="block block-summary">
    <h2><span class="tag">OVERVIEW</span>个人简介</h2>
    <div class="cell" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="tag">01</span>工作经历</h2>
    <div class="grid">
      {{#each experience}}<div class="cell entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="tag">02</span>项目经历</h2>
    <div class="grid grid-2">
      {{#each projects}}<div class="cell entry" data-entry="projects" data-entry-index="{{@index}}">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  <div class="bottom-grid">
    {{#if skills.length}}<section class="block block-skills" data-section="skills">
      <h2><span class="tag">03</span>专业技能</h2>
      <div class="cell skills">{{#each skills}}<span class="skill-item" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </section>{{/if}}

    {{#if education.length}}<section class="block block-edu" data-section="education">
      <h2><span class="tag">04</span>教育背景</h2>
      <div class="grid">
        {{#each education}}<div class="cell entry" data-entry="education" data-entry-index="{{@index}}">
          <div class="entry-head">
            <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
            <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="dot">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>{{/each}}
      </div>
    </section>{{/if}}
  </div>
</div>`,
    css: `.resume.pm-platform * { margin:0; padding:0; box-sizing:border-box; }
.resume.pm-platform * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.pm-platform {
  --ink:#16181d;
  --sub:#5b6271;
  --line:#e3e6ec;
  --line-strong:#c7ccd6;
  --bg-cell:#f6f7f9;
  --accent:#2b59ff;
  --accent-soft:#eef2ff;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  -webkit-font-smoothing:antialiased;
}

/* ---------- Header ---------- */
.resume.pm-platform header {
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:12mm;
  padding-bottom:5mm;
  margin-bottom:7mm;
  border-bottom:2px solid var(--ink);
}
.resume.pm-platform .id-block h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:0.04em;
  line-height:1.05;
}
.resume.pm-platform .id-block .role {
  margin-top:2mm;
  font-size:10.5pt;
  font-weight:500;
  color:var(--accent);
  letter-spacing:0.06em;
}
.resume.pm-platform .contact {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:1.5mm;
  text-align:right;
}
.resume.pm-platform .contact span {
  font-size:8.6pt;
  color:var(--sub);
  letter-spacing:0.02em;
  font-feature-settings:'tnum';
}

/* ---------- Section blocks ---------- */
.resume.pm-platform .block { margin-bottom:6.5mm; }
.resume.pm-platform .block:last-child { margin-bottom:0; }

.resume.pm-platform h2 {
  display:flex;
  align-items:center;
  gap:2.5mm;
  font-size:11pt;
  font-weight:700;
  letter-spacing:0.08em;
  color:var(--ink);
  margin-bottom:3.5mm;
  padding-bottom:0;
}
.resume.pm-platform h2 .tag {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:8mm;
  height:5mm;
  padding:0 1.6mm;
  background:var(--ink);
  color:#fff;
  font-size:7pt;
  font-weight:600;
  letter-spacing:0.12em;
  border-radius:1px;
  font-feature-settings:'tnum';
}

/* ---------- Cells / grid system ---------- */
.resume.pm-platform .cell {
  background:var(--bg-cell);
  border:1px solid var(--line);
  border-radius:2px;
  padding:3.5mm 4mm;
}
.resume.pm-platform .grid {
  display:grid;
  grid-template-columns:1fr;
  gap:2.5mm;
}
.resume.pm-platform .grid-2 {
  grid-template-columns:1fr 1fr;
}
.resume.pm-platform .block-summary .cell {
  position:relative;
  color:var(--ink);
  font-size:9.6pt;
  line-height:1.7;
  padding-left:7mm;
}
.resume.pm-platform .block-summary .cell::before {
  content:'';
  position:absolute;
  left:4mm; top:4.2mm;
  width:1.6mm; height:1.6mm;
  background:var(--accent);
  transform:rotate(45deg);
}

/* ---------- Entry head ---------- */
.resume.pm-platform .entry-head {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:4mm;
  margin-bottom:1mm;
}
.resume.pm-platform .entry h3 {
  font-size:10.5pt;
  font-weight:700;
  letter-spacing:0.01em;
  display:flex;
  align-items:baseline;
  gap:2.5mm;
  flex-wrap:wrap;
}
.resume.pm-platform .entry h3 .position,
.resume.pm-platform .entry h3 .proj-role {
  font-size:9pt;
  font-weight:500;
  color:var(--accent);
  position:relative;
  padding-left:2.5mm;
}
.resume.pm-platform .entry h3 .position::before,
.resume.pm-platform .entry h3 .proj-role::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:9pt;
  background:var(--line-strong);
}
.resume.pm-platform .date {
  font-size:8.2pt;
  color:var(--sub);
  font-weight:500;
  white-space:nowrap;
  letter-spacing:0.02em;
  font-feature-settings:'tnum';
  flex-shrink:0;
}

/* ---------- Lists ---------- */
.resume.pm-platform .entry ul {
  list-style:none;
  margin-top:2mm;
  display:flex;
  flex-direction:column;
  gap:1.2mm;
}
.resume.pm-platform .entry li {
  position:relative;
  padding-left:4mm;
  font-size:9.3pt;
  line-height:1.55;
  color:#2c2f37;
}
.resume.pm-platform .entry li::before {
  content:'';
  position:absolute;
  left:0;
  top:0.62em;
  width:1.6mm;
  height:1.6mm;
  border:1px solid var(--accent);
  background:var(--accent-soft);
}

/* ---------- Projects ---------- */
.resume.pm-platform .proj-desc {
  font-size:9pt;
  color:var(--sub);
  margin-top:1mm;
  line-height:1.55;
}

/* ---------- Bottom grid: skills + education ---------- */
.resume.pm-platform .bottom-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:6mm;
  align-items:start;
}
.resume.pm-platform .bottom-grid .block { margin-bottom:0; }

/* ---------- Skills ---------- */
.resume.pm-platform .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2mm;
  background:transparent;
  border:none;
  padding:0;
}
.resume.pm-platform .skill-item {
  display:inline-flex;
  align-items:center;
  gap:1.6mm;
  padding:1.6mm 2.8mm;
  background:var(--bg-cell);
  border:1px solid var(--line);
  border-radius:2px;
  font-size:8.8pt;
}
.resume.pm-platform .skill-item .sk-name {
  font-weight:600;
  color:var(--ink);
}
.resume.pm-platform .skill-item .sk-level {
  font-size:7.6pt;
  color:var(--sub);
  padding-left:1.6mm;
  border-left:1px solid var(--line-strong);
}

/* ---------- Education ---------- */
.resume.pm-platform .block-edu .entry h3 {
  font-size:10pt;
}
.resume.pm-platform .edu-meta {
  font-size:8.8pt;
  color:var(--sub);
  margin-top:0.6mm;
  display:flex;
  align-items:center;
  gap:1.6mm;
}
.resume.pm-platform .edu-meta .dot { color:var(--line-strong); }

/* ---------- Required tail rules ---------- */
.resume.pm-platform li p, .resume.pm-platform li div { margin:0; padding:0; display:inline; }
.resume.pm-platform .skills span, .resume.pm-platform [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.pm-platform { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.pm-platform .block, .resume.pm-platform .entry { break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "pm-platform",
      "version": "1.0.0",
      "name": "平台产品",
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
