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
    slug: 'campus-law',
    name: '法学校招',
    category: 'campus',
    html: `<div class="resume campus-law">
  <header>
    <div class="masthead">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="summary"><h2>个人简介</h2><div class="rule"></div><div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education"><h2>教育背景</h2><div class="rule"></div>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience"><h2>实习经历</h2><div class="rule"></div>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="org" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep"></span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section class="block honors" data-section="projects"><h2>竞赛 / 项目</h2><div class="rule"></div>
    {{#each projects}}<div class="entry award" data-entry="projects" data-entry-index="{{@index}}">
      <div class="award-mark">★</div>
      <div class="award-body">
        <h3><span class="award-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="award-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="award-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills"><h2>专业技能</h2><div class="rule"></div><div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
</div>`,
    css: `.resume.campus-law * { margin:0; padding:0; box-sizing:border-box; }
.resume.campus-law * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.campus-law {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#fff;
  color:#161616;
  font-family:'Songti SC','SimSun',Georgia,'Times New Roman','PingFang SC','Microsoft YaHei',serif;
  font-size:10pt;
  line-height:1.55;
}

/* ===== Header / Masthead ===== */
.resume.campus-law header {
  border-top:3px solid #161616;
  border-bottom:1px solid #161616;
  padding:14px 0 12px;
  margin-bottom:18px;
}
.resume.campus-law .masthead {
  text-align:center;
  padding-bottom:10px;
}
.resume.campus-law h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:0.18em;
  line-height:1.2;
  text-indent:0.18em;
}
.resume.campus-law .title {
  font-size:10.5pt;
  letter-spacing:0.32em;
  text-indent:0.32em;
  color:#444;
  margin-top:6px;
  font-style:italic;
}
.resume.campus-law .contact {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:6px 22px;
  font-size:9pt;
  letter-spacing:0.04em;
  color:#333;
  border-top:1px solid #c9c9c9;
  padding-top:10px;
}
.resume.campus-law .contact span {
  position:relative;
  white-space:nowrap;
}
.resume.campus-law .contact span + span::before {
  content:'';
  position:absolute;
  left:-11px;
  top:50%;
  width:3px;
  height:3px;
  margin-top:-1.5px;
  background:#161616;
  transform:rotate(45deg);
}

/* ===== Section headings ===== */
.resume.campus-law section {
  margin-bottom:16px;
}
.resume.campus-law h2 {
  font-size:13pt;
  font-weight:700;
  letter-spacing:0.22em;
  text-indent:0.22em;
}
.resume.campus-law .rule {
  height:0;
  border-top:1.5px solid #161616;
  margin:5px 0 11px;
  position:relative;
}
.resume.campus-law .rule::after {
  content:'';
  position:absolute;
  left:0;
  top:2px;
  width:46px;
  height:0;
  border-top:1.5px solid #161616;
}

/* ===== Summary ===== */
.resume.campus-law .summary-body {
  text-align:justify;
  color:#2a2a2a;
}

/* ===== Generic entry ===== */
.resume.campus-law .entry {
  margin-bottom:12px;
}
.resume.campus-law .entry:last-child {
  margin-bottom:0;
}
.resume.campus-law .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:12px;
}
.resume.campus-law .entry h3 {
  font-size:11pt;
  font-weight:700;
  letter-spacing:0.02em;
}
.resume.campus-law .entry .sep {
  display:inline-block;
  width:1px;
  height:11px;
  background:#999;
  margin:0 9px;
  vertical-align:-1px;
}
.resume.campus-law .entry .pos {
  font-weight:400;
  font-style:italic;
  color:#3a3a3a;
}
.resume.campus-law .date {
  font-size:8.5pt;
  letter-spacing:0.06em;
  color:#555;
  font-style:italic;
  white-space:nowrap;
  flex-shrink:0;
}
.resume.campus-law .meta {
  font-size:9.5pt;
  color:#3a3a3a;
  margin-top:2px;
}

/* ===== Lists ===== */
.resume.campus-law ul {
  list-style:none;
  margin-top:5px;
}
.resume.campus-law li {
  position:relative;
  padding-left:15px;
  margin-bottom:3px;
  text-align:justify;
  color:#2a2a2a;
}
.resume.campus-law li::before {
  content:'—';
  position:absolute;
  left:0;
  top:0;
  color:#161616;
}

/* ===== Honors / Awards (signature emphasis) ===== */
.resume.campus-law .honors h2 {
  display:inline-block;
}
.resume.campus-law .entry.award {
  display:flex;
  gap:11px;
  padding:10px 12px 10px 11px;
  border:1px solid #161616;
  border-left:4px solid #161616;
  background:
    repeating-linear-gradient(45deg, #fafafa 0, #fafafa 6px, #f3f3f3 6px, #f3f3f3 7px);
  margin-bottom:9px;
}
.resume.campus-law .entry.award:last-child {
  margin-bottom:0;
}
.resume.campus-law .award-mark {
  font-size:14pt;
  line-height:1;
  flex-shrink:0;
  margin-top:1px;
  color:#161616;
}
.resume.campus-law .award-body {
  flex:1;
  min-width:0;
}
.resume.campus-law .award h3 {
  font-size:11.5pt;
  font-weight:700;
  letter-spacing:0.02em;
  display:flex;
  flex-wrap:wrap;
  align-items:baseline;
  gap:0 9px;
}
.resume.campus-law .award-name {
  text-decoration:underline;
  text-decoration-thickness:1px;
  text-underline-offset:3px;
}
.resume.campus-law .award-role {
  font-size:8.5pt;
  font-weight:400;
  font-style:italic;
  letter-spacing:0.1em;
  border:1px solid #161616;
  padding:0 6px;
  border-radius:1px;
  white-space:nowrap;
}
.resume.campus-law .award-desc {
  font-size:9.5pt;
  color:#2a2a2a;
  margin-top:4px;
  text-align:justify;
}
.resume.campus-law .award ul {
  margin-top:4px;
}

/* ===== Skills ===== */
.resume.campus-law .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 9px;
}
.resume.campus-law .skill-tag {
  border:1px solid #161616;
  padding:2px 11px;
  font-size:9pt;
  letter-spacing:0.04em;
  background:#fff;
}
.resume.campus-law .skill-tag .lvl {
  color:#555;
  font-style:italic;
}

/* ===== Contract-required tail rules ===== */
.resume.campus-law li p, .resume.campus-law li div { margin:0; padding:0; display:inline; }
.resume.campus-law .skills span, .resume.campus-law [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.campus-law { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "campus-law",
      "version": "1.0.0",
      "name": "法学校招",
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
