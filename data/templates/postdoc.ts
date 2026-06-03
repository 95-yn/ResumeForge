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
    slug: 'postdoc',
    name: '博士后研究',
    category: 'profession',
    html: `<div class="resume postdoc">
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

  {{#if basics.summary}}<section class="block summary"><h2><span class="num">§</span>个人简介</h2><div class="prose" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience"><h2><span class="num">§</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="org" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep">—</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education"><h2><span class="num">§</span>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="degree"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="dot">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills"><h2><span class="num">§</span>专业技能</h2><div class="skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="lv"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects"><h2><span class="num">§</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="sep">—</span><span class="prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="prose desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.postdoc * { margin:0; padding:0; box-sizing:border-box; }
.resume.postdoc * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.postdoc {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#f7f2e9;
  color:#2b2420;
  font-size:10pt;
  line-height:1.55;
  font-family:'Georgia','Times New Roman','Songti SC','PingFang SC','Microsoft YaHei',serif;
  --wine:#7a1f2b;
  --wine-deep:#5c141d;
  --ink:#2b2420;
  --muted:#8a7d6e;
  --rule:#d8c9b0;
}

/* ===== Masthead header ===== */
.resume.postdoc header {
  border-top:3px double var(--wine);
  border-bottom:3px double var(--wine);
  padding:10mm 0 6mm;
  margin-bottom:8mm;
  text-align:center;
}
.resume.postdoc .masthead h1 {
  font-size:27pt;
  font-weight:700;
  letter-spacing:0.06em;
  color:var(--wine-deep);
  line-height:1.1;
}
.resume.postdoc .masthead .role {
  margin-top:3mm;
  font-size:11.5pt;
  font-style:italic;
  color:var(--ink);
  letter-spacing:0.04em;
}
.resume.postdoc .contact {
  margin-top:5mm;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:0;
  font-size:9pt;
  font-family:'Georgia','PingFang SC','Microsoft YaHei',serif;
  color:var(--muted);
  letter-spacing:0.03em;
}
.resume.postdoc .contact span {
  position:relative;
  padding:0 4mm;
}
.resume.postdoc .contact span + span::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:11px;
  background:var(--rule);
}

/* ===== Section blocks ===== */
.resume.postdoc .block {
  margin-bottom:7mm;
}
.resume.postdoc h2 {
  font-size:12.5pt;
  font-weight:700;
  color:var(--wine-deep);
  letter-spacing:0.08em;
  padding-bottom:1.5mm;
  margin-bottom:4mm;
  border-bottom:1.5px solid var(--wine);
  display:flex;
  align-items:baseline;
}
.resume.postdoc h2 .num {
  font-family:'Georgia',serif;
  font-style:italic;
  font-weight:400;
  color:var(--wine);
  margin-right:2.5mm;
  font-size:13pt;
  opacity:0.8;
}

/* ===== Summary ===== */
.resume.postdoc .prose {
  text-align:justify;
  color:var(--ink);
  line-height:1.65;
}
.resume.postdoc .summary .prose { font-size:10pt; }

/* ===== Entries ===== */
.resume.postdoc .entry {
  margin-bottom:5mm;
  padding-left:5mm;
  border-left:2px solid var(--rule);
}
.resume.postdoc .entry:last-child { margin-bottom:0; }
.resume.postdoc .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:4mm;
  flex-wrap:wrap;
}
.resume.postdoc .entry h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
  line-height:1.35;
}
.resume.postdoc .entry h3 .org { color:var(--wine-deep); }
.resume.postdoc .entry h3 .sep {
  color:var(--wine);
  font-weight:400;
  margin:0 1.5mm;
}
.resume.postdoc .entry h3 .pos,
.resume.postdoc .entry h3 .prole {
  font-style:italic;
  font-weight:600;
  color:var(--ink);
}
.resume.postdoc .entry h3 .pname { color:var(--wine-deep); }
.resume.postdoc .date {
  font-size:8.5pt;
  font-style:italic;
  color:var(--muted);
  white-space:nowrap;
  font-family:'Georgia',serif;
  letter-spacing:0.02em;
}
.resume.postdoc .degree {
  margin-top:1mm;
  font-size:9.5pt;
  font-style:italic;
  color:var(--ink);
}
.resume.postdoc .degree .dot {
  color:var(--wine);
  margin:0 1.5mm;
}

/* ===== Lists ===== */
.resume.postdoc .entry ul {
  list-style:none;
  margin-top:2.5mm;
}
.resume.postdoc .entry li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.5mm;
  font-size:9.5pt;
  line-height:1.55;
  text-align:justify;
}
.resume.postdoc .entry li::before {
  content:'▪';
  position:absolute;
  left:0;
  top:0;
  color:var(--wine);
  font-size:8pt;
}
.resume.postdoc .desc {
  margin-top:1.5mm;
  font-size:9.5pt;
}

/* ===== Skills ===== */
.resume.postdoc .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.postdoc .skills .skill {
  display:inline-block;
  padding:1.2mm 3.5mm;
  font-size:9pt;
  background:#efe6d4;
  border:1px solid var(--rule);
  border-radius:1px;
  color:var(--ink);
}
.resume.postdoc .skills .skill .lv {
  color:var(--wine);
  font-style:italic;
}

/* ===== contract-required ===== */
.resume.postdoc li p, .resume.postdoc li div { margin:0; padding:0; display:inline; }
.resume.postdoc .skills span, .resume.postdoc [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.postdoc { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "postdoc",
      "version": "1.0.0",
      "name": "博士后研究",
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
