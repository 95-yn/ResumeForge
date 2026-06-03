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
    slug: 'pm-consumer',
    name: 'C端产品',
    category: 'profession',
    html: `<div class="resume pm-consumer">
  <header>
    <div class="hero-card">
      <div class="avatar-ring"><span class="avatar-emoji">●</span></div>
      <div class="hero-text">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role-pill" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
        <div class="contact">
          {{#if basics.email}}<span class="chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
          {{#if basics.phone}}<span class="chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
          {{#if basics.location}}<span class="chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
        </div>
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="card summary-card">
    <h2><span class="dot"></span>个人简介</h2>
    <div class="card-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="card journey-card" data-section="experience">
    <h2><span class="dot"></span>工作经历</h2>
    <div class="timeline">
      {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
        <span class="node"></span>
        <div class="entry-card">
          <div class="entry-head">
            <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
            <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="card projects-card" data-section="projects">
    <h2><span class="dot"></span>项目经历</h2>
    <div class="project-grid">
      {{#each projects}}<div class="entry project-item" data-entry="projects" data-entry-index="{{@index}}">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="card skills-card" data-section="skills">
    <h2><span class="dot"></span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section class="card edu-card" data-section="education">
    <h2><span class="dot"></span>教育背景</h2>
    {{#each education}}<div class="entry edu-item" data-entry="education" data-entry-index="{{@index}}">
      <div class="edu-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.pm-consumer * { margin:0; padding:0; box-sizing:border-box; }
.resume.pm-consumer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.pm-consumer {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:16mm;
  background:#fff7f2;
  font-size:10pt;
  line-height:1.5;
  color:#2d2438;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== HERO ===== */
.resume.pm-consumer header { margin-bottom:14px; }
.resume.pm-consumer .hero-card {
  display:flex;
  align-items:center;
  gap:18px;
  padding:22px 26px;
  border-radius:26px;
  background:linear-gradient(135deg,#ff7a59 0%,#ff5fa2 55%,#a259ff 100%);
  color:#fff;
  box-shadow:0 8px 22px rgba(255,95,162,0.28);
}
.resume.pm-consumer .avatar-ring {
  flex:0 0 auto;
  width:62px;
  height:62px;
  border-radius:50%;
  background:rgba(255,255,255,0.22);
  border:3px solid rgba(255,255,255,0.6);
  display:flex;
  align-items:center;
  justify-content:center;
}
.resume.pm-consumer .avatar-emoji {
  font-size:22px;
  color:#fff;
  line-height:1;
}
.resume.pm-consumer .hero-text { flex:1; min-width:0; }
.resume.pm-consumer .hero-text h1 {
  font-size:24pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.pm-consumer .role-pill {
  display:inline-block;
  margin-top:7px;
  padding:3px 14px;
  font-size:9.5pt;
  font-weight:600;
  border-radius:20px;
  background:rgba(255,255,255,0.25);
  backdrop-filter:blur(2px);
}
.resume.pm-consumer .contact {
  margin-top:10px;
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.pm-consumer .chip {
  display:inline-block;
  padding:3px 12px;
  font-size:8.5pt;
  border-radius:14px;
  background:rgba(255,255,255,0.92);
  color:#d6336c;
  font-weight:600;
}

/* ===== CARDS ===== */
.resume.pm-consumer .card {
  background:#fff;
  border-radius:22px;
  padding:16px 20px 18px;
  margin-bottom:13px;
  box-shadow:0 4px 14px rgba(162,89,255,0.08);
  border:1px solid #ffe3d6;
}
.resume.pm-consumer h2 {
  display:flex;
  align-items:center;
  gap:8px;
  font-size:12.5pt;
  font-weight:800;
  color:#d6336c;
  margin-bottom:11px;
}
.resume.pm-consumer .dot {
  width:11px;
  height:11px;
  border-radius:50%;
  background:linear-gradient(135deg,#ff7a59,#a259ff);
  flex:0 0 auto;
}

.resume.pm-consumer .summary-card .card-body {
  color:#4a4159;
  font-size:9.8pt;
  line-height:1.65;
}

/* ===== TIMELINE / JOURNEY ===== */
.resume.pm-consumer .timeline {
  position:relative;
  padding-left:22px;
}
.resume.pm-consumer .timeline::before {
  content:'';
  position:absolute;
  left:5px;
  top:6px;
  bottom:6px;
  width:3px;
  border-radius:3px;
  background:linear-gradient(180deg,#ff7a59,#ff5fa2,#a259ff);
}
.resume.pm-consumer .entry { position:relative; margin-bottom:12px; }
.resume.pm-consumer .entry:last-child { margin-bottom:0; }
.resume.pm-consumer .node {
  position:absolute;
  left:-22px;
  top:8px;
  width:13px;
  height:13px;
  border-radius:50%;
  background:#fff;
  border:3px solid #ff5fa2;
  box-shadow:0 0 0 3px rgba(255,95,162,0.15);
}
.resume.pm-consumer .entry-card {
  background:#fff8fb;
  border-radius:16px;
  padding:10px 14px;
  border:1px solid #ffd9e6;
}
.resume.pm-consumer .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 10px;
  margin-bottom:5px;
}
.resume.pm-consumer .entry-head h3 {
  font-size:11pt;
  font-weight:700;
  color:#2d2438;
}
.resume.pm-consumer .company { font-weight:800; }
.resume.pm-consumer .position {
  margin-left:8px;
  color:#a259ff;
  font-weight:600;
  font-size:10pt;
}
.resume.pm-consumer .date {
  font-size:8.5pt;
  color:#ff7a59;
  font-weight:700;
  background:#fff0e8;
  padding:2px 10px;
  border-radius:12px;
  white-space:nowrap;
}

.resume.pm-consumer ul {
  list-style:none;
  margin-top:4px;
}
.resume.pm-consumer li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:#4a4159;
  line-height:1.55;
}
.resume.pm-consumer li::before {
  content:'';
  position:absolute;
  left:2px;
  top:7px;
  width:6px;
  height:6px;
  border-radius:50%;
  background:linear-gradient(135deg,#ff7a59,#ff5fa2);
}

/* ===== PROJECTS ===== */
.resume.pm-consumer .project-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:11px;
}
.resume.pm-consumer .project-item {
  background:#f6f0ff;
  border-radius:16px;
  padding:11px 14px;
  border:1px solid #e6d9ff;
}
.resume.pm-consumer .project-item h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#7c3aed;
  margin-bottom:4px;
}
.resume.pm-consumer .proj-role {
  font-size:8.5pt;
  font-weight:600;
  color:#a259ff;
  background:#ece1ff;
  padding:1px 9px;
  border-radius:11px;
}
.resume.pm-consumer .proj-desc {
  font-size:9.2pt;
  color:#544a66;
  margin-bottom:4px;
}

/* ===== SKILLS ===== */
.resume.pm-consumer .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.pm-consumer .skill-tag {
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:5px 14px;
  border-radius:18px;
  background:linear-gradient(135deg,#fff0e8,#ffe6f1);
  color:#d6336c;
  font-size:9.2pt;
  font-weight:700;
  border:1px solid #ffd0e2;
}
.resume.pm-consumer .skill-tag .lvl {
  font-size:8pt;
  font-weight:600;
  color:#fff;
  background:linear-gradient(135deg,#ff7a59,#ff5fa2);
  padding:1px 8px;
  border-radius:10px;
}

/* ===== EDUCATION ===== */
.resume.pm-consumer .edu-item { margin-bottom:8px; }
.resume.pm-consumer .edu-item:last-child { margin-bottom:0; }
.resume.pm-consumer .edu-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 10px;
}
.resume.pm-consumer .edu-item h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#2d2438;
}
.resume.pm-consumer .edu-item p {
  font-size:9.2pt;
  color:#6b6280;
  margin-top:2px;
}

/* ===== CONTRACT REQUIRED ===== */
.resume.pm-consumer li p, .resume.pm-consumer li div { margin:0; padding:0; display:inline; }
.resume.pm-consumer .skills span, .resume.pm-consumer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.pm-consumer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "pm-consumer",
      "version": "1.0.0",
      "name": "C端产品",
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
