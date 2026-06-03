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
    slug: 'fin-audit',
    name: '审计',
    category: 'profession',
    html: `<div class="resume fin-audit">
  <header>
    <div class="masthead">
      <div class="masthead-main">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="masthead-rule"></div>
    </div>
    <table class="contact-table">
      <tbody>
        <tr>
          {{#if basics.email}}<td><span class="ct-label">EMAIL</span><span class="ct-value" data-field="basics.email">{{{basics.email}}}</span></td>{{/if}}
          {{#if basics.phone}}<td><span class="ct-label">TEL</span><span class="ct-value" data-field="basics.phone">{{{basics.phone}}}</span></td>{{/if}}
          {{#if basics.location}}<td><span class="ct-label">ADDR</span><span class="ct-value" data-field="basics.location">{{{basics.location}}}</span></td>{{/if}}
        </tr>
      </tbody>
    </table>
  </header>

  {{#if basics.summary}}<section class="block">
    <h2><span class="h2-no">01</span><span class="h2-text">个人简介</span></h2>
    <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="h2-no">02</span><span class="h2-text">工作经历</span></h2>
    <div class="ledger">
      {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3>
            <span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="sep">/</span>
            <span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span><span class="dash">—</span><span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="h2-no">03</span><span class="h2-text">教育背景</span></h2>
    <table class="data-table">
      <tbody>
        {{#each education}}<tr data-entry="education" data-entry-index="{{@index}}">
          <td class="dt-inst"><span data-field="education.{{@index}}.institution">{{{institution}}}</span></td>
          <td class="dt-detail"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="mid-dot">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></td>
          <td class="dt-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span><span class="dash">—</span><span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></td>
        </tr>{{/each}}
      </tbody>
    </table>
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="h2-no">04</span><span class="h2-text">专业技能</span></h2>
    <div class="skills">
      {{#each skills}}<span class="skill-item" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="h2-no">05</span><span class="h2-text">项目经历</span></h2>
    <div class="ledger">
      {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3>
            <span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="sep">/</span><span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </h3>
        </div>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.fin-audit * { margin:0; padding:0; box-sizing:border-box; }
.resume.fin-audit * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.fin-audit {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#fff;
  color:#000;
  font-family:'Georgia','Times New Roman','Songti SC','PingFang SC','Microsoft YaHei',serif;
  font-size:10pt;
  line-height:1.55;
}

.resume.fin-audit header { margin-bottom:9mm; }
.resume.fin-audit .masthead {
  border-top:3pt double #000;
  border-bottom:1pt solid #000;
  padding:5mm 0 4mm;
}
.resume.fin-audit .masthead-main {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:4mm;
}
.resume.fin-audit h1 {
  font-size:27pt;
  font-weight:700;
  letter-spacing:0.06em;
  line-height:1.1;
}
.resume.fin-audit .title {
  font-size:10pt;
  font-style:italic;
  letter-spacing:0.2em;
  text-transform:uppercase;
  color:#000;
}

.resume.fin-audit .contact-table {
  width:100%;
  border-collapse:collapse;
  margin-top:3mm;
  table-layout:fixed;
}
.resume.fin-audit .contact-table td {
  border:0.75pt solid #000;
  padding:2mm 3mm;
  font-size:8.5pt;
  vertical-align:middle;
  line-height:1.3;
}
.resume.fin-audit .ct-label {
  display:block;
  font-size:6.5pt;
  letter-spacing:0.22em;
  font-weight:700;
  margin-bottom:0.8mm;
  color:#000;
}
.resume.fin-audit .ct-value {
  display:block;
  font-style:normal;
}

.resume.fin-audit .block { margin-bottom:7.5mm; page-break-inside:auto; }
.resume.fin-audit h2 {
  display:flex;
  align-items:baseline;
  gap:3mm;
  font-size:11pt;
  font-weight:700;
  letter-spacing:0.14em;
  border-bottom:1.5pt solid #000;
  padding-bottom:1.5mm;
  margin-bottom:4mm;
}
.resume.fin-audit .h2-no {
  font-size:13pt;
  font-weight:700;
  font-style:normal;
  letter-spacing:0;
  font-family:'Georgia','Times New Roman',serif;
  flex:0 0 auto;
  position:relative;
  padding-right:3mm;
}
.resume.fin-audit .h2-no::after {
  content:'';
  position:absolute;
  right:0; top:10%; bottom:10%;
  width:0.75pt;
  background:#000;
}
.resume.fin-audit .h2-text { text-transform:uppercase; }

.resume.fin-audit .summary {
  text-align:justify;
  border-left:1pt solid #000;
  padding-left:4mm;
  font-style:italic;
}

.resume.fin-audit .ledger { }
.resume.fin-audit .entry {
  padding:3mm 0;
  border-bottom:0.5pt solid #000;
  page-break-inside:avoid;
}
.resume.fin-audit .entry:first-child { padding-top:0.5mm; }
.resume.fin-audit .entry:last-child { border-bottom:none; }
.resume.fin-audit .entry-head {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:4mm;
  flex-wrap:wrap;
}
.resume.fin-audit .entry h3 {
  font-size:11pt;
  font-weight:700;
  line-height:1.3;
}
.resume.fin-audit .entry h3 .sep {
  font-weight:400;
  margin:0 1.6mm;
  color:#000;
}
.resume.fin-audit .entry h3 .position,
.resume.fin-audit .entry h3 .proj-role {
  font-weight:400;
  font-style:italic;
  font-size:10pt;
}
.resume.fin-audit .date {
  font-size:8.5pt;
  font-style:italic;
  letter-spacing:0.04em;
  white-space:nowrap;
  flex:0 0 auto;
}
.resume.fin-audit .date .dash { margin:0 1.2mm; }

.resume.fin-audit .entry ul {
  list-style:none;
  margin-top:2mm;
}
.resume.fin-audit .entry li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.3mm;
  text-align:justify;
}
.resume.fin-audit .entry li::before {
  content:'—';
  position:absolute;
  left:0;
  top:0;
  font-weight:400;
}

.resume.fin-audit .data-table {
  width:100%;
  border-collapse:collapse;
  table-layout:fixed;
}
.resume.fin-audit .data-table td {
  border-bottom:0.5pt solid #000;
  padding:2.5mm 2mm;
  vertical-align:top;
}
.resume.fin-audit .data-table tr:last-child td { border-bottom:none; }
.resume.fin-audit .dt-inst {
  width:38%;
  font-weight:700;
  font-size:10.5pt;
}
.resume.fin-audit .dt-detail {
  width:38%;
  font-style:italic;
}
.resume.fin-audit .dt-detail .mid-dot { margin:0 1.4mm; font-style:normal; }
.resume.fin-audit .dt-date {
  width:24%;
  text-align:right;
  font-size:8.5pt;
  font-style:italic;
  white-space:nowrap;
}
.resume.fin-audit .dt-date .dash { margin:0 1mm; }

.resume.fin-audit .skills {
  display:flex;
  flex-wrap:wrap;
  gap:0;
  border:0.75pt solid #000;
}
.resume.fin-audit .skill-item {
  flex:0 0 auto;
  border-right:0.5pt solid #000;
  border-bottom:0.5pt solid #000;
  padding:1.8mm 3.5mm;
  font-size:9.5pt;
  display:inline-flex;
  align-items:baseline;
  gap:2mm;
}
.resume.fin-audit .skill-item .sk-name { font-weight:700; }
.resume.fin-audit .skill-item .sk-level {
  font-size:8pt;
  font-style:italic;
  letter-spacing:0.04em;
}
.resume.fin-audit .skill-item .sk-level::before { content:'· '; }

.resume.fin-audit .proj-desc {
  margin-top:1.5mm;
  text-align:justify;
}
.resume.fin-audit .proj-name { font-weight:700; }

.resume.fin-audit li p, .resume.fin-audit li div { margin:0; padding:0; display:inline; }
.resume.fin-audit .skills span, .resume.fin-audit [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.fin-audit { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "fin-audit",
      "version": "1.0.0",
      "name": "审计",
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
