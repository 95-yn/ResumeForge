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
    slug: 'event-planner',
    name: '宴会策划',
    category: 'profession',
    html: `<div class="resume event-planner">
  <header>
    <div class="hd-inner">
      <div class="hd-crest" aria-hidden="true"><span class="hd-crest-i"></span></div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary"><h2><span class="h2-txt">个人简介</span></h2><div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="sec-exp" data-section="experience"><h2><span class="h2-txt">工作经历</span></h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> <span class="dash">—</span> <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="sec-edu" data-section="education"><h2><span class="h2-txt">教育背景</span></h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> <span class="dash">—</span> <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> <span class="sep">·</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec-skills" data-section="skills"><h2><span class="h2-txt">专业技能</span></h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lv-dot">·</span> <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section class="sec-proj" data-section="projects"><h2><span class="h2-txt">项目经历</span></h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="sep">·</span> <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.event-planner * { margin:0; padding:0; box-sizing:border-box; }
.resume.event-planner * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.event-planner {
  --gold:#bfa15e;
  --gold-soft:#d4bd82;
  --gold-pale:#f3ecdc;
  --ink:#3a3530;
  --ink-soft:#6b645b;
  --line:#e7ddc7;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* Header：香槟金菱形纹章记忆点 */
.resume.event-planner header {
  text-align:center;
  padding-bottom:9mm;
  margin-bottom:9mm;
  position:relative;
}
.resume.event-planner header::after {
  content:"";
  position:absolute;
  left:50%;
  bottom:0;
  transform:translateX(-50%);
  width:46%;
  height:1px;
  background:linear-gradient(90deg,transparent,var(--gold-soft),transparent);
}
.resume.event-planner .hd-inner {
  display:inline-block;
  padding:0 6mm;
}
.resume.event-planner .hd-crest {
  width:9mm;
  height:9mm;
  margin:0 auto 4mm;
  border:1px solid var(--gold);
  transform:rotate(45deg);
  display:flex;
  align-items:center;
  justify-content:center;
}
.resume.event-planner .hd-crest-i {
  width:3.4mm;
  height:3.4mm;
  background:var(--gold-pale);
  border:1px solid var(--gold-soft);
}
.resume.event-planner h1 {
  font-size:25pt;
  font-weight:600;
  letter-spacing:.16em;
  color:var(--ink);
  line-height:1.2;
}
.resume.event-planner .hd-title {
  margin-top:3mm;
  font-size:10.5pt;
  letter-spacing:.42em;
  text-transform:uppercase;
  color:var(--gold);
  font-weight:500;
  padding-left:.42em;
}
.resume.event-planner .contact {
  margin-top:5mm;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:0;
  font-size:9pt;
  color:var(--ink-soft);
  letter-spacing:.03em;
}
.resume.event-planner .contact span {
  padding:0 4.5mm;
  position:relative;
}
.resume.event-planner .contact span + span::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:11px;
  background:var(--gold-soft);
}

/* Sections */
.resume.event-planner section { margin-bottom:8mm; }
.resume.event-planner section:last-child { margin-bottom:0; }

.resume.event-planner h2 {
  font-size:11pt;
  font-weight:600;
  color:var(--ink);
  letter-spacing:.28em;
  margin-bottom:5.5mm;
  text-indent:.28em;
  display:flex;
  align-items:center;
  gap:4mm;
  white-space:nowrap;
}
.resume.event-planner h2 .h2-txt { flex:0 0 auto; }
.resume.event-planner h2::before {
  content:"";
  width:7px;
  height:7px;
  flex:0 0 auto;
  transform:rotate(45deg);
  border:1px solid var(--gold);
  background:var(--gold-pale);
}
.resume.event-planner h2::after {
  content:"";
  flex:1 1 auto;
  height:1px;
  background:linear-gradient(90deg,var(--line),transparent);
}

/* Summary */
.resume.event-planner .summary-body {
  color:var(--ink-soft);
  line-height:1.75;
  text-align:justify;
}

/* Entries */
.resume.event-planner .entry {
  padding:0 0 0 6mm;
  margin-bottom:5.5mm;
  position:relative;
}
.resume.event-planner .entry:last-child { margin-bottom:0; }
.resume.event-planner .entry::before {
  content:"";
  position:absolute;
  left:0;
  top:2.2mm;
  bottom:1mm;
  width:1px;
  background:var(--line);
}
.resume.event-planner .entry::after {
  content:"";
  position:absolute;
  left:-1.5px;
  top:1.6mm;
  width:4px;
  height:4px;
  border-radius:50%;
  background:var(--gold);
}

.resume.event-planner .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:4mm;
  flex-wrap:wrap;
}
.resume.event-planner h3 {
  font-size:11pt;
  font-weight:600;
  color:var(--ink);
  line-height:1.4;
}
.resume.event-planner .company { letter-spacing:.02em; }
.resume.event-planner .position {
  margin-left:3mm;
  padding-left:3mm;
  font-weight:500;
  font-size:10pt;
  color:var(--gold);
  position:relative;
}
.resume.event-planner .position::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:11px;
  background:var(--gold-soft);
}
.resume.event-planner .date {
  font-size:8.5pt;
  color:var(--ink-soft);
  letter-spacing:.04em;
  white-space:nowrap;
  font-style:italic;
}
.resume.event-planner .date .dash { color:var(--gold-soft); font-style:normal; }

.resume.event-planner ul {
  list-style:none;
  margin-top:2.5mm;
}
.resume.event-planner li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.4mm;
  color:var(--ink-soft);
  line-height:1.6;
}
.resume.event-planner li::before {
  content:"";
  position:absolute;
  left:0;
  top:.62em;
  width:4px;
  height:4px;
  transform:rotate(45deg);
  border:1px solid var(--gold-soft);
}

/* Education meta */
.resume.event-planner .edu-meta {
  margin-top:1.5mm;
  color:var(--ink-soft);
  font-size:9.5pt;
}
.resume.event-planner .sep { color:var(--gold-soft); margin:0 1px; }

/* Skills */
.resume.event-planner .skills {
  display:flex;
  flex-wrap:wrap;
  gap:3mm;
}
.resume.event-planner .skill-chip {
  display:inline-flex;
  align-items:baseline;
  padding:1.8mm 4.5mm;
  border:1px solid var(--line);
  border-radius:1mm;
  background:linear-gradient(180deg,#fff,var(--gold-pale));
  font-size:9.5pt;
  color:var(--ink);
}
.resume.event-planner .skill-chip .lv-dot { color:var(--gold-soft); margin:0 1.5mm; }
.resume.event-planner .skill-chip .lv { color:var(--ink-soft); font-size:8.5pt; }

/* Projects */
.resume.event-planner .proj-name { letter-spacing:.02em; }
.resume.event-planner .proj-role { color:var(--gold); font-weight:500; font-size:10pt; }
.resume.event-planner .proj-desc {
  margin-top:1.5mm;
  color:var(--ink-soft);
  line-height:1.7;
  text-align:justify;
}

/* Inline-fix contract */
.resume.event-planner li p, .resume.event-planner li div { margin:0; padding:0; display:inline; }
.resume.event-planner .skills span, .resume.event-planner [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.event-planner { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "event-planner",
      "version": "1.0.0",
      "name": "宴会策划",
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
