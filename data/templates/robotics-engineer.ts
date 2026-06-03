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
    slug: 'robotics-engineer',
    name: '机器人工程',
    category: 'profession',
    html: `<div class="resume robotics-engineer">
  <header>
    <div class="hdr-grid">
      <div class="hdr-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="hdr-node"><span class="node-ring"></span><span class="node-dot"></span></div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary"><h2><span class="axis-tag">x</span>个人简介</h2><div class="sum-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="sec-exp" data-section="experience"><h2><span class="axis-tag">y</span>工作经历</h2>
    <div class="timeline">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="joint"></span>
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section class="sec-edu" data-section="education"><h2><span class="axis-tag">z</span>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <span class="joint"></span>
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec-skills" data-section="skills"><h2><span class="axis-tag">θ</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="sk-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="sec-proj" data-section="projects"><h2><span class="axis-tag">∑</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <span class="joint"></span>
      <div class="entry-head">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.robotics-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.robotics-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.robotics-engineer {
  --ink:#1b2230;
  --space:#11161f;
  --space-2:#1c2536;
  --blue:#1f6fb0;
  --blue-soft:#3f8fcf;
  --line:#dfe5ee;
  --muted:#6b7585;
  --grid:rgba(31,111,176,0.07);
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:0 0 18mm;
  background:#fff;
  background-image:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size:7mm 7mm;
  background-position:18mm 0;
  color:var(--ink);
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}
/* fixed coordinate axis spine on the left */
.resume.robotics-engineer::before {
  content:"";
  position:absolute;
  top:0; bottom:0; left:10mm;
  width:1.5px;
  background:linear-gradient(var(--blue), rgba(31,111,176,0.12));
}

/* ===== HEADER ===== */
.resume.robotics-engineer header {
  background:
    radial-gradient(120% 140% at 88% -20%, rgba(63,143,207,0.28), transparent 60%),
    linear-gradient(125deg, var(--space) 0%, var(--space-2) 100%);
  color:#eef3fb;
  padding:16mm 18mm 11mm 18mm;
  position:relative;
  overflow:hidden;
}
.resume.robotics-engineer header::before {
  content:"";
  position:absolute; inset:0;
  background-image:
    linear-gradient(rgba(120,170,210,0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120,170,210,0.10) 1px, transparent 1px);
  background-size:7mm 7mm;
  opacity:0.5;
  pointer-events:none;
}
.resume.robotics-engineer .hdr-grid {
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8mm;
}
.resume.robotics-engineer .hdr-id { position:relative; }
.resume.robotics-engineer h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
  color:#fff;
}
.resume.robotics-engineer .role {
  margin-top:2mm;
  font-size:10.5pt;
  font-weight:500;
  letter-spacing:3px;
  color:var(--blue-soft);
  text-transform:uppercase;
}
/* joint node graphic top-right */
.resume.robotics-engineer .hdr-node {
  position:relative;
  width:22mm; height:22mm;
  flex:0 0 auto;
}
.resume.robotics-engineer .node-ring {
  position:absolute; inset:0;
  border:1.5px solid rgba(120,170,210,0.45);
  border-radius:50%;
  box-shadow:inset 0 0 0 4mm rgba(31,111,176,0.05);
}
.resume.robotics-engineer .node-ring::after {
  content:"";
  position:absolute; inset:3mm;
  border:1px dashed rgba(120,170,210,0.4);
  border-radius:50%;
}
.resume.robotics-engineer .node-dot {
  position:absolute; top:50%; left:50%;
  width:5mm; height:5mm;
  margin:-2.5mm 0 0 -2.5mm;
  background:var(--blue-soft);
  border-radius:50%;
  box-shadow:0 0 0 2mm rgba(31,111,176,0.18);
}
.resume.robotics-engineer .contact {
  position:relative;
  margin-top:7mm;
  display:flex;
  flex-wrap:wrap;
  gap:4mm 6mm;
  font-size:9pt;
  letter-spacing:0.4px;
  color:#cdd8e6;
}
.resume.robotics-engineer .contact span {
  position:relative;
  padding-left:4mm;
}
.resume.robotics-engineer .contact span::before {
  content:"";
  position:absolute; left:0; top:50%;
  width:2mm; height:2mm; margin-top:-1mm;
  background:var(--blue-soft);
  transform:rotate(45deg);
}

/* ===== SECTIONS ===== */
.resume.robotics-engineer section {
  position:relative;
  margin:8mm 18mm 0 18mm;
}
.resume.robotics-engineer h2 {
  display:flex;
  align-items:center;
  gap:3mm;
  font-size:11.5pt;
  font-weight:700;
  letter-spacing:1.5px;
  color:var(--space);
  padding-bottom:2.5mm;
  margin-bottom:5mm;
  border-bottom:1.5px solid var(--line);
  position:relative;
}
.resume.robotics-engineer h2::after {
  content:"";
  position:absolute; left:0; bottom:-1.5px;
  width:18mm; height:1.5px;
  background:var(--blue);
}
.resume.robotics-engineer .axis-tag {
  display:inline-flex;
  align-items:center; justify-content:center;
  width:6.5mm; height:6.5mm;
  flex:0 0 auto;
  font-size:8.5pt;
  font-weight:700;
  font-style:italic;
  color:var(--blue);
  background:rgba(31,111,176,0.09);
  border:1px solid rgba(31,111,176,0.32);
  border-radius:50%;
}

/* ===== ENTRIES / TIMELINE ===== */
.resume.robotics-engineer .timeline,
.resume.robotics-engineer .sec-edu,
.resume.robotics-engineer .sec-proj { position:relative; }
.resume.robotics-engineer .entry {
  position:relative;
  padding-left:7mm;
  margin-bottom:5.5mm;
}
.resume.robotics-engineer .entry:last-child { margin-bottom:1mm; }
.resume.robotics-engineer .entry::before {
  content:"";
  position:absolute;
  left:1.5mm; top:2.4mm;
  bottom:-5.5mm;
  width:1px;
  background:var(--line);
}
.resume.robotics-engineer .entry:last-child::before { display:none; }
.resume.robotics-engineer .joint {
  position:absolute;
  left:0; top:1.4mm;
  width:3.4mm; height:3.4mm;
  background:#fff;
  border:1.3px solid var(--blue);
  border-radius:50%;
  box-shadow:0 0 0 1.4mm rgba(31,111,176,0.10);
}
.resume.robotics-engineer .entry-head {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:4mm;
  flex-wrap:wrap;
}
.resume.robotics-engineer .entry h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--space);
  display:flex;
  align-items:baseline;
  gap:3mm;
  flex-wrap:wrap;
}
.resume.robotics-engineer .position,
.resume.robotics-engineer .proj-role {
  font-size:9.5pt;
  font-weight:600;
  color:var(--blue);
}
.resume.robotics-engineer .proj-role::before,
.resume.robotics-engineer .position::before {
  content:"/ ";
  color:var(--muted);
  font-weight:400;
}
.resume.robotics-engineer .date {
  font-size:8.5pt;
  font-weight:600;
  letter-spacing:0.5px;
  color:var(--muted);
  font-variant-numeric:tabular-nums;
  white-space:nowrap;
}
.resume.robotics-engineer .edu-meta {
  font-size:9.5pt;
  color:var(--muted);
  margin-top:1mm;
}

/* lists */
.resume.robotics-engineer ul {
  list-style:none;
  margin-top:2.5mm;
}
.resume.robotics-engineer li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.6mm;
  font-size:9.7pt;
  color:#39414f;
}
.resume.robotics-engineer li::before {
  content:"";
  position:absolute;
  left:0; top:1.9mm;
  width:1.8mm; height:1.8mm;
  background:var(--blue);
  transform:rotate(45deg);
}

/* summary — full hairline frame with micro-tint (no colored side-stripe) */
.resume.robotics-engineer .sum-body {
  font-size:10pt;
  color:#39414f;
  padding:4mm 5mm;
  border:1px solid var(--line);
  border-radius:1mm;
  background:rgba(31,111,176,0.035);
}

/* project description */
.resume.robotics-engineer .proj-desc {
  font-size:9.7pt;
  color:#39414f;
  margin-top:1.5mm;
}

/* ===== SKILLS ===== */
.resume.robotics-engineer .skills {
  display:flex;
  flex-wrap:wrap;
  gap:3mm;
}
.resume.robotics-engineer .skill-chip {
  display:inline-flex;
  align-items:center;
  gap:1.8mm;
  padding:1.6mm 3.5mm 1.6mm 3mm;
  font-size:9pt;
  font-weight:600;
  color:var(--space);
  background:#f3f7fc;
  border:1px solid var(--line);
  border-radius:1mm;
}
.resume.robotics-engineer .skill-chip::before {
  content:"";
  width:1.8mm; height:1.8mm;
  flex:0 0 auto;
  background:var(--blue);
  transform:rotate(45deg);
}
.resume.robotics-engineer .sk-lvl {
  font-size:8pt;
  font-weight:500;
  color:#fff;
  background:var(--blue);
  padding:0.4mm 1.6mm;
  border-radius:0.6mm;
}

/* ===== MANDATORY TAIL ===== */
.resume.robotics-engineer li p, .resume.robotics-engineer li div { margin:0; padding:0; display:inline; }
.resume.robotics-engineer .skills span, .resume.robotics-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.robotics-engineer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "robotics-engineer",
      "version": "1.0.0",
      "name": "机器人工程",
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
