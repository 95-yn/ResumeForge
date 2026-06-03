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
    slug: 'policy-analyst',
    name: '政策研究',
    category: 'profession',
    html: `<div class="resume policy-analyst">
  <header>
    <div class="masthead">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="abstract"><h2>个人简介</h2><blockquote><div data-field="basics.summary">{{{basics.summary}}}</div></blockquote></section>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="org" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="degree"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="role-inline" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.policy-analyst * { margin:0; padding:0; box-sizing:border-box; }
.resume.policy-analyst * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.policy-analyst {
  --graphite:#2b2d33;
  --ink:#33363d;
  --wine:#6e1f2b;
  --wine-soft:#8a3340;
  --paper:#fff;
  --muted:#7a7d85;
  --line:#d8d4cf;
  --rule:#c8b9a6;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:var(--paper);
  color:var(--ink);
  font-family:'Georgia','Songti SC','Times New Roman','PingFang SC','Microsoft YaHei',serif;
  font-size:10pt;
  line-height:1.55;
}

/* ===== Header / Masthead ===== */
.resume.policy-analyst header {
  border-top:3px solid var(--graphite);
  border-bottom:1px solid var(--line);
  padding:10pt 0 14pt;
  margin-bottom:18pt;
  position:relative;
}
.resume.policy-analyst header::after {
  content:"";
  position:absolute;
  left:0;
  bottom:-1px;
  width:64pt;
  height:3px;
  background:var(--wine);
}
.resume.policy-analyst .masthead { margin-bottom:8pt; }
.resume.policy-analyst h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:1pt;
  color:var(--graphite);
  line-height:1.1;
}
.resume.policy-analyst .role {
  margin-top:5pt;
  font-size:11pt;
  font-style:italic;
  color:var(--wine);
  letter-spacing:.5pt;
}
.resume.policy-analyst .contact {
  display:flex;
  flex-wrap:wrap;
  gap:6pt 0;
  font-size:8.6pt;
  font-style:italic;
  color:var(--muted);
  letter-spacing:.3pt;
}
.resume.policy-analyst .contact span { position:relative; padding:0 11pt; }
.resume.policy-analyst .contact span:first-child { padding-left:0; }
.resume.policy-analyst .contact span:not(:last-child)::after {
  content:"";
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:9pt;
  background:var(--rule);
}

/* ===== Section headings ===== */
.resume.policy-analyst section { margin-bottom:16pt; }
.resume.policy-analyst h2 {
  font-size:9.5pt;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:2.4pt;
  color:var(--graphite);
  padding-bottom:4pt;
  margin-bottom:10pt;
  border-bottom:1px solid var(--line);
  position:relative;
}
.resume.policy-analyst h2::before {
  content:"§";
  color:var(--wine);
  font-weight:400;
  font-style:italic;
  margin-right:7pt;
  font-size:11pt;
}

/* ===== Abstract / blockquote ===== */
.resume.policy-analyst .abstract blockquote {
  border-left:2.5px solid var(--wine);
  padding:2pt 0 2pt 13pt;
  font-style:italic;
  color:var(--ink);
  line-height:1.6;
  position:relative;
}
.resume.policy-analyst .abstract blockquote::before {
  content:"\\201C";
  position:absolute;
  left:5pt;
  top:-8pt;
  font-size:26pt;
  color:var(--rule);
  font-family:'Georgia',serif;
}

/* ===== Entries ===== */
.resume.policy-analyst .entry { margin-bottom:12pt; }
.resume.policy-analyst .entry:last-child { margin-bottom:0; }
.resume.policy-analyst .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10pt;
  margin-bottom:3pt;
}
.resume.policy-analyst h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--graphite);
  line-height:1.35;
}
.resume.policy-analyst .org { color:var(--graphite); }
.resume.policy-analyst .pos {
  color:var(--wine);
  font-weight:600;
  font-size:10pt;
}
.resume.policy-analyst .pos::before {
  content:" · ";
  color:var(--rule);
  font-weight:400;
}
.resume.policy-analyst .date {
  font-size:8.4pt;
  font-style:italic;
  color:var(--muted);
  white-space:nowrap;
  letter-spacing:.3pt;
  flex-shrink:0;
}
.resume.policy-analyst .degree {
  font-size:9.6pt;
  font-style:italic;
  color:var(--ink);
}

/* ===== Lists ===== */
.resume.policy-analyst ul {
  list-style:none;
  margin-top:4pt;
  padding-left:13pt;
}
.resume.policy-analyst li {
  position:relative;
  padding-left:13pt;
  margin-bottom:3.5pt;
  line-height:1.5;
}
.resume.policy-analyst li::before {
  content:"—";
  position:absolute;
  left:0;
  top:0;
  color:var(--wine);
  font-weight:600;
}

/* ===== Skills ===== */
.resume.policy-analyst .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7pt 8pt;
}
.resume.policy-analyst .skill {
  border:1px solid var(--line);
  border-left:2.5px solid var(--wine);
  padding:3.5pt 9pt;
  font-size:9pt;
  background:#fafaf8;
  color:var(--ink);
}
.resume.policy-analyst .skill .lvl {
  font-style:italic;
  color:var(--muted);
}

/* ===== Projects ===== */
.resume.policy-analyst .proj { color:var(--graphite); }
.resume.policy-analyst .role-inline {
  font-style:italic;
  font-weight:400;
  color:var(--wine);
  font-size:9.6pt;
}
.resume.policy-analyst .desc {
  font-size:9.6pt;
  color:var(--ink);
  margin-top:2pt;
  line-height:1.5;
}

/* ===== Contract-required ===== */
.resume.policy-analyst li p, .resume.policy-analyst li div { margin:0; padding:0; display:inline; }
.resume.policy-analyst .skills span, .resume.policy-analyst [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.policy-analyst { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "policy-analyst",
      "version": "1.0.0",
      "name": "政策研究",
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
