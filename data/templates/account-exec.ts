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
    slug: 'account-exec',
    name: '大客户销售',
    category: 'profession',
    html: `<div class="resume account-exec">
  <header>
    <div class="hd-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary"><h2><span class="h2-tag">核心定位</span></h2><div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience"><h2><span class="h2-tag">工作经历</span></h2>
    {{#each experience}}<div class="entry exp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects"><h2><span class="h2-tag">项目经历</span></h2>
    {{#each projects}}<div class="entry proj-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills"><h2><span class="h2-tag">专业技能</span></h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="lvl-dot"></span><span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education"><h2><span class="h2-tag">教育背景</span></h2>
    {{#each education}}<div class="entry edu-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-detail"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.account-exec * { margin:0; padding:0; box-sizing:border-box; }
.resume.account-exec * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.account-exec {
  --navy:#0f2747;
  --navy-2:#1a3a63;
  --gold:#c8a24b;
  --gold-deep:#a8842e;
  --ink:#1f2a38;
  --muted:#5e6c7e;
  --line:#dfe4ea;
  --bg-soft:#f6f8fb;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 18mm 16mm;
  background:#fff;
  font-size:10pt;
  line-height:1.55;
  color:var(--ink);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

/* ===== Header ===== */
.resume.account-exec header {
  position:relative;
  background:linear-gradient(135deg,var(--navy) 0%,var(--navy-2) 100%);
  color:#fff;
  margin:-18mm -18mm 9mm;
  padding:13mm 18mm 9mm;
  border-bottom:3px solid var(--gold);
}
.resume.account-exec header::before {
  content:"";
  position:absolute;
  top:0; right:0;
  width:42mm; height:100%;
  background:
    repeating-linear-gradient(135deg, rgba(200,162,75,.14) 0 2px, transparent 2px 9px);
  pointer-events:none;
}
.resume.account-exec .hd-main { position:relative; z-index:1; }
.resume.account-exec h1 {
  font-size:26pt;
  font-weight:700;
  letter-spacing:3px;
  line-height:1.1;
}
.resume.account-exec .hd-title {
  margin-top:5px;
  font-size:11pt;
  font-weight:500;
  color:var(--gold);
  letter-spacing:2px;
}
.resume.account-exec .contact {
  position:relative;
  z-index:1;
  margin-top:9px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 0;
  font-size:9pt;
  color:#cdd8e6;
}
.resume.account-exec .contact span {
  display:inline-flex;
  align-items:center;
  padding:0 14px;
  border-left:1px solid rgba(200,162,75,.5);
  line-height:1;
}
.resume.account-exec .contact span:first-child { padding-left:0; border-left:none; }

/* ===== Section ===== */
.resume.account-exec .block { margin-bottom:7mm; }
.resume.account-exec h2 {
  position:relative;
  margin-bottom:4mm;
  padding-left:14px;
  font-size:12pt;
  font-weight:700;
  color:var(--navy);
  letter-spacing:1px;
}
.resume.account-exec h2::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:5px; height:16px;
  background:var(--gold);
  border-radius:1px;
}
.resume.account-exec .h2-tag {
  display:inline-block;
  padding-bottom:3px;
  border-bottom:2px solid var(--navy);
}

/* ===== Summary ===== */
.resume.account-exec .summary-body {
  background:var(--bg-soft);
  border-left:3px solid var(--gold);
  padding:8px 14px;
  color:var(--ink);
  font-size:10pt;
  line-height:1.7;
}

/* ===== Entry ===== */
.resume.account-exec .entry { margin-bottom:5mm; }
.resume.account-exec .entry:last-child { margin-bottom:0; }
.resume.account-exec .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  margin-bottom:4px;
}
.resume.account-exec h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--navy);
  line-height:1.4;
}
.resume.account-exec .company { font-weight:700; }
.resume.account-exec .position {
  margin-left:10px;
  padding-left:10px;
  border-left:1px solid var(--line);
  font-weight:600;
  color:var(--gold-deep);
}
.resume.account-exec .date {
  flex-shrink:0;
  font-size:8.5pt;
  font-weight:600;
  color:#fff;
  background:var(--navy);
  padding:2px 9px;
  border-radius:10px;
  letter-spacing:.3px;
  white-space:nowrap;
}

/* ===== Lists with metric emphasis ===== */
.resume.account-exec .entry ul { list-style:none; margin-top:5px; }
.resume.account-exec .entry li {
  position:relative;
  padding-left:16px;
  margin-bottom:4px;
  font-size:9.7pt;
  line-height:1.6;
  color:var(--ink);
}
.resume.account-exec .entry li::before {
  content:"";
  position:absolute;
  left:2px; top:.62em;
  width:5px; height:5px;
  background:var(--gold);
  transform:rotate(45deg);
}
/* highlight numbers/metrics in bold gold-navy */
.resume.account-exec .entry li b,
.resume.account-exec .entry li strong {
  color:var(--gold-deep);
  font-weight:700;
}

/* ===== Projects ===== */
.resume.account-exec .proj-name { color:var(--navy); }
.resume.account-exec .proj-role {
  margin-left:8px;
  font-size:8.5pt;
  font-weight:600;
  color:var(--gold-deep);
  background:rgba(200,162,75,.14);
  padding:1px 8px;
  border-radius:9px;
}
.resume.account-exec .proj-desc {
  margin:3px 0 2px;
  font-size:9.5pt;
  color:var(--muted);
  line-height:1.6;
}

/* ===== Skills ===== */
.resume.account-exec .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.account-exec .skill-chip {
  display:inline-flex;
  align-items:center;
  padding:4px 12px;
  background:var(--bg-soft);
  border:1px solid var(--line);
  border-top:2px solid var(--gold);
  border-radius:3px;
  font-size:9.3pt;
  color:var(--navy);
  font-weight:600;
}
.resume.account-exec .lvl-dot {
  display:inline-block;
  width:3px; height:3px;
  border-radius:50%;
  background:var(--gold);
  margin:0 6px;
}
.resume.account-exec .skill-chip .lvl {
  font-weight:500;
  color:var(--muted);
}

/* ===== Education ===== */
.resume.account-exec .edu-detail {
  font-size:9.5pt;
  color:var(--muted);
}

/* ===== inline-fix contract ===== */
.resume.account-exec li p, .resume.account-exec li div { margin:0; padding:0; display:inline; }
.resume.account-exec .skills span, .resume.account-exec [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.account-exec { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.account-exec .block { page-break-inside:avoid; }
  .resume.account-exec .entry { page-break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "account-exec",
      "version": "1.0.0",
      "name": "大客户销售",
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
