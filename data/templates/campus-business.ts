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
    slug: 'campus-business',
    name: '商科校招',
    category: 'campus',
    html: `<div class="resume campus-business">
  <header>
    <div class="hdr-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="sec-summary"><h2>个人简介</h2><div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section class="sec-exp" data-section="experience"><h2>实习经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if projects.length}}<section class="sec-proj" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><div class="entry-head"><h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3></div>{{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section class="sec-edu" data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><div class="entry-head"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section class="sec-skills" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="skill-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
</div>`,
    css: `.resume.campus-business * { margin:0; padding:0; box-sizing:border-box; }
.resume.campus-business * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.campus-business {
  --navy:#0f2a4a;
  --navy-deep:#0a1f38;
  --gold:#c4a04a;
  --gold-soft:#d9bd74;
  --ink:#22303f;
  --muted:#6a7785;
  --line:#dfe4ea;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.campus-business header {
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:14px;
  padding:18px 22px;
  background:linear-gradient(135deg,var(--navy) 0%,var(--navy-deep) 100%);
  border-radius:3px;
  border-bottom:3px solid var(--gold);
  margin-bottom:22px;
}
.resume.campus-business .hdr-main h1 {
  color:#fff;
  font-size:23pt;
  font-weight:700;
  letter-spacing:2px;
  line-height:1.1;
}
.resume.campus-business .hdr-main p {
  color:var(--gold-soft);
  font-size:10.5pt;
  font-weight:500;
  letter-spacing:1px;
  margin-top:5px;
}
.resume.campus-business .contact {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:4px;
  text-align:right;
}
.resume.campus-business .contact span {
  color:#dbe3ec;
  font-size:9pt;
  position:relative;
  padding-right:13px;
}
.resume.campus-business .contact span::after {
  content:'';
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  width:5px;
  height:5px;
  border:1px solid var(--gold);
  border-radius:50%;
}

/* ===== Section headings ===== */
.resume.campus-business section { margin-bottom:18px; }
.resume.campus-business h2 {
  position:relative;
  font-size:12pt;
  font-weight:700;
  color:var(--navy);
  letter-spacing:1.5px;
  padding:0 0 6px 14px;
  margin-bottom:12px;
  border-bottom:1.5px solid var(--line);
}
.resume.campus-business h2::before {
  content:'';
  position:absolute;
  left:0;
  top:1px;
  width:5px;
  height:14px;
  background:var(--gold);
  border-radius:1px;
}
.resume.campus-business h2::after {
  content:'';
  position:absolute;
  left:0;
  bottom:-1.5px;
  width:48px;
  height:1.5px;
  background:var(--navy);
}

/* ===== Summary ===== */
.resume.campus-business .summary-body {
  color:var(--ink);
  font-size:10pt;
  padding:2px 0 0 2px;
}

/* ===== Entries ===== */
.resume.campus-business .entry {
  position:relative;
  padding:0 0 12px 16px;
  margin-bottom:8px;
}
.resume.campus-business .entry::before {
  content:'';
  position:absolute;
  left:0;
  top:5px;
  bottom:8px;
  width:2px;
  background:linear-gradient(var(--navy),var(--line));
}
.resume.campus-business .entry:last-child { padding-bottom:0; margin-bottom:0; }
.resume.campus-business .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  margin-bottom:5px;
}
.resume.campus-business .entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--navy);
  line-height:1.3;
}
.resume.campus-business .entry h3 .position {
  font-weight:600;
  color:var(--ink);
}
.resume.campus-business .entry h3 .company::after {
  content:'｜';
  color:var(--gold);
  font-weight:400;
  margin:0 2px;
}
.resume.campus-business .proj-role {
  font-size:9pt;
  font-weight:600;
  color:#fff;
  background:var(--gold);
  padding:1px 8px;
  border-radius:10px;
  letter-spacing:.5px;
}
.resume.campus-business .date {
  flex-shrink:0;
  font-size:8.5pt;
  font-weight:600;
  color:var(--muted);
  white-space:nowrap;
  letter-spacing:.3px;
}

/* ===== Highlight project section accent ===== */
.resume.campus-business .sec-exp .entry::before {
  background:linear-gradient(var(--gold),var(--gold-soft));
  width:2.5px;
}
.resume.campus-business .proj-desc {
  font-size:9.5pt;
  color:var(--ink);
  margin-bottom:4px;
}

/* ===== Lists ===== */
.resume.campus-business ul { list-style:none; margin-top:3px; }
.resume.campus-business li {
  position:relative;
  padding-left:14px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:var(--ink);
  line-height:1.55;
}
.resume.campus-business li::before {
  content:'';
  position:absolute;
  left:2px;
  top:7px;
  width:4px;
  height:4px;
  background:var(--navy);
  border:1px solid var(--gold);
  border-radius:50%;
}

/* ===== Education ===== */
.resume.campus-business .sec-edu .entry h3 { color:var(--navy); }
.resume.campus-business .edu-meta {
  font-size:9.5pt;
  color:var(--muted);
}

/* ===== Skills ===== */
.resume.campus-business .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.campus-business .skill-chip {
  display:inline-block;
  padding:3px 12px;
  font-size:9pt;
  color:var(--navy);
  background:#f4f6f9;
  border:1px solid var(--line);
  border-left:3px solid var(--gold);
  border-radius:3px;
}
.resume.campus-business .skill-lvl { color:var(--muted); }

.resume.campus-business li p, .resume.campus-business li div { margin:0; padding:0; display:inline; }
.resume.campus-business .skills span, .resume.campus-business [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.campus-business { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "campus-business",
      "version": "1.0.0",
      "name": "商科校招",
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
