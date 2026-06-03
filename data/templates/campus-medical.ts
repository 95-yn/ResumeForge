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
    slug: 'campus-medical',
    name: '医学校招',
    category: 'campus',
    html: `<div class="resume campus-medical">
  <header>
    <div class="hdr-bar"></div>
    <div class="hdr-main">
      <div class="hdr-mark" aria-hidden="true"><span class="cross"></span></div>
      <div class="hdr-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary"><h2>个人简介</h2><div class="summary-box" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if education.length}}<section class="sec-edu" data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="edu-item" data-entry="education" data-entry-index="{{@index}}">
      <div class="edu-line">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if experience.length}}<section class="sec-exp" data-section="experience"><h2>临床/实习经历</h2>
    {{#each experience}}<div class="exp-item" data-entry="experience" data-entry-index="{{@index}}">
      <div class="exp-head">
        <h3><span class="exp-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="exp-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec-skills" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section class="sec-proj" data-section="projects"><h2>科研项目</h2>
    {{#each projects}}<div class="proj-item" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.campus-medical * { margin:0; padding:0; box-sizing:border-box; }
.resume.campus-medical * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.campus-medical {
  --med-blue:#0b6cb5;
  --med-blue-dk:#08507f;
  --med-blue-lt:#e8f3fb;
  --med-line:#d4e6f4;
  --ink:#1c2b3a;
  --ink-soft:#48586a;
  --paper:#ffffff;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:var(--paper);
  color:var(--ink);
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ---------- Header ---------- */
.resume.campus-medical header { margin-bottom:9mm; }
.resume.campus-medical .hdr-bar {
  height:5px;
  background:linear-gradient(90deg,var(--med-blue) 0%,var(--med-blue) 70%,#5fb0e0 100%);
  border-radius:3px;
  margin-bottom:6mm;
}
.resume.campus-medical .hdr-main {
  display:flex;
  align-items:center;
  gap:5mm;
}
.resume.campus-medical .hdr-mark {
  flex:0 0 auto;
  width:15mm; height:15mm;
  border:1.5px solid var(--med-blue);
  border-radius:50%;
  background:var(--med-blue-lt);
  position:relative;
}
.resume.campus-medical .hdr-mark .cross {
  position:absolute; top:50%; left:50%;
  width:7mm; height:7mm;
  transform:translate(-50%,-50%);
}
.resume.campus-medical .hdr-mark .cross::before,
.resume.campus-medical .hdr-mark .cross::after {
  content:''; position:absolute; background:var(--med-blue); border-radius:1px;
}
.resume.campus-medical .hdr-mark .cross::before {
  left:50%; top:0; width:2.4mm; height:100%; transform:translateX(-50%);
}
.resume.campus-medical .hdr-mark .cross::after {
  top:50%; left:0; height:2.4mm; width:100%; transform:translateY(-50%);
}
.resume.campus-medical .hdr-id { flex:1 1 auto; }
.resume.campus-medical .hdr-id h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:1px;
  color:var(--med-blue-dk);
  line-height:1.1;
}
.resume.campus-medical .hdr-id p {
  margin-top:2px;
  font-size:10.5pt;
  color:var(--med-blue);
  font-weight:500;
}
.resume.campus-medical .contact {
  flex:0 0 auto;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:2.5px;
  text-align:right;
  font-size:9pt;
  color:var(--ink-soft);
  max-width:60mm;
}
.resume.campus-medical .contact span {
  position:relative;
  padding-left:11px;
}
.resume.campus-medical .contact span::before {
  content:''; position:absolute; left:0; top:50%;
  width:5px; height:5px; border-radius:50%;
  background:var(--med-blue);
  transform:translateY(-50%);
}

/* ---------- Sections ---------- */
.resume.campus-medical section { margin-bottom:6.5mm; }
.resume.campus-medical h2 {
  font-size:11.5pt;
  font-weight:700;
  color:var(--med-blue-dk);
  letter-spacing:.5px;
  padding-bottom:2.5mm;
  margin-bottom:3.5mm;
  border-bottom:2px solid var(--med-line);
  position:relative;
  padding-left:6mm;
}
.resume.campus-medical h2::before {
  content:''; position:absolute; left:0; top:1px;
  width:3.2mm; height:3.2mm;
  background:var(--med-blue);
  border-radius:1px;
  transform:rotate(45deg);
}
.resume.campus-medical h2::after {
  content:''; position:absolute; left:0; bottom:-2px;
  width:22mm; height:2px;
  background:var(--med-blue);
}

/* ---------- Summary ---------- */
.resume.campus-medical .summary-box {
  background:var(--med-blue-lt);
  border-left:3px solid var(--med-blue);
  border-radius:0 4px 4px 0;
  padding:3mm 4mm;
  color:var(--ink-soft);
  font-size:9.8pt;
}

/* ---------- Education (priority) ---------- */
.resume.campus-medical .edu-item {
  padding:2.5mm 0 2.5mm 4mm;
  border-left:2px solid var(--med-line);
  margin-bottom:2mm;
  position:relative;
}
.resume.campus-medical .edu-item::before {
  content:''; position:absolute; left:-4.5px; top:4mm;
  width:7px; height:7px; border-radius:50%;
  background:var(--paper);
  border:2px solid var(--med-blue);
}
.resume.campus-medical .edu-item:last-child { margin-bottom:0; }
.resume.campus-medical .edu-line {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:6px;
  flex-wrap:wrap;
}
.resume.campus-medical .edu-line h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
}
.resume.campus-medical .edu-meta {
  font-size:9.5pt;
  color:var(--med-blue-dk);
  margin-top:1px;
  font-weight:500;
}

/* ---------- Dates ---------- */
.resume.campus-medical .date {
  font-size:8.8pt;
  color:#fff;
  background:var(--med-blue);
  padding:1px 7px;
  border-radius:10px;
  white-space:nowrap;
  font-weight:500;
  letter-spacing:.3px;
}

/* ---------- Experience ---------- */
.resume.campus-medical .exp-item { margin-bottom:4mm; }
.resume.campus-medical .exp-item:last-child { margin-bottom:0; }
.resume.campus-medical .exp-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:6px;
  flex-wrap:wrap;
  margin-bottom:1.5mm;
}
.resume.campus-medical .exp-head h3 {
  font-size:10.5pt;
  font-weight:600;
  color:var(--ink);
}
.resume.campus-medical .exp-company { color:var(--med-blue-dk); font-weight:700; }
.resume.campus-medical .exp-pos {
  color:var(--ink-soft);
  font-weight:500;
  margin-left:6px;
  padding-left:6px;
  border-left:1px solid var(--med-line);
}
.resume.campus-medical ul {
  list-style:none;
  padding-left:0;
  margin-top:1mm;
}
.resume.campus-medical li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.2mm;
  color:var(--ink-soft);
  font-size:9.6pt;
}
.resume.campus-medical li::before {
  content:''; position:absolute; left:0; top:.62em;
  width:5px; height:5px;
  background:var(--med-blue);
  border-radius:50%;
}

/* ---------- Skills ---------- */
.resume.campus-medical .skills {
  display:flex;
  flex-wrap:wrap;
  gap:6px 7px;
}
.resume.campus-medical .skill-chip {
  display:inline-block;
  background:var(--med-blue-lt);
  border:1px solid var(--med-line);
  color:var(--med-blue-dk);
  padding:2px 9px;
  border-radius:4px;
  font-size:9.2pt;
  font-weight:500;
}
.resume.campus-medical .skill-chip .skill-lv { color:var(--med-blue); font-weight:400; }

/* ---------- Projects ---------- */
.resume.campus-medical .proj-item {
  margin-bottom:3.5mm;
  padding-left:4mm;
  border-left:2px solid var(--med-line);
}
.resume.campus-medical .proj-item:last-child { margin-bottom:0; }
.resume.campus-medical .proj-item h3 {
  font-size:10.5pt;
  font-weight:600;
  color:var(--ink);
}
.resume.campus-medical .proj-name { color:var(--med-blue-dk); font-weight:700; }
.resume.campus-medical .proj-role { color:var(--ink-soft); font-weight:500; }
.resume.campus-medical .proj-desc {
  font-size:9.5pt;
  color:var(--ink-soft);
  margin:1mm 0;
}

/* ---------- inline fixes ---------- */
.resume.campus-medical li p, .resume.campus-medical li div { margin:0; padding:0; display:inline; }
.resume.campus-medical .skills span, .resume.campus-medical [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.campus-medical { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "campus-medical",
      "version": "1.0.0",
      "name": "医学校招",
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
