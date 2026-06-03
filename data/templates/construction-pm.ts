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
    slug: 'construction-pm',
    name: '工程项目管理',
    category: 'profession',
    html: `<div class="resume construction-pm">
  <header>
    <div class="hdr-bar"></div>
    <div class="hdr-main">
      <div class="hdr-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="hdr-stripe"><span></span><span></span><span></span></div>
  </header>

  {{#if basics.summary}}<section class="sec-summary">
    <h2><i class="tag"></i>项目概述</h2>
    <div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="sec-exp">
    <h2><i class="tag"></i>工作经历</h2>
    <div class="timeline">
      {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="exp-item">
        <div class="gantt"><span class="gantt-track"><span class="gantt-fill"></span></span></div>
        <div class="exp-body">
          <h3>
            <span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> <em>—</em> <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="sec-proj">
    <h2><i class="tag"></i>项目经历</h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="proj-item">
      <h3>
        <span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </h3>
      {{#if description}}<div class="pdesc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  <div class="two-col">
    {{#if skills.length}}<section data-section="skills" class="sec-skills">
      <h2><i class="tag"></i>专业技能</h2>
      <div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="skill-chip"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </section>{{/if}}

    {{#if education.length}}<section data-section="education" class="sec-edu">
      <h2><i class="tag"></i>教育背景</h2>
      {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="edu-item">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> <em>—</em> <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>{{/each}}
    </section>{{/if}}
  </div>
</div>`,
    css: `.resume.construction-pm * { margin:0; padding:0; box-sizing:border-box; }
.resume.construction-pm * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.construction-pm {
  --orange:#F26A1B;
  --orange-d:#D8550C;
  --char:#2B2D31;
  --char-2:#3C3F45;
  --gray:#5A5E66;
  --line:#E2E2E0;
  --bg-soft:#F6F5F3;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  color:var(--char);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.construction-pm header {
  position:relative;
  background:var(--char);
  color:#fff;
  padding:14px 18px 0;
  border-radius:3px;
  overflow:hidden;
  margin-bottom:18px;
}
.resume.construction-pm .hdr-bar {
  position:absolute;
  left:0; top:0; bottom:0;
  width:8px;
  background:var(--orange);
}
.resume.construction-pm .hdr-main {
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  flex-wrap:wrap;
  gap:8px 16px;
  padding-bottom:12px;
  padding-left:6px;
}
.resume.construction-pm .hdr-id h1 {
  font-size:23pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.construction-pm .hdr-id .role {
  margin-top:5px;
  font-size:10.5pt;
  font-weight:600;
  color:var(--orange);
  letter-spacing:1px;
  text-transform:uppercase;
}
.resume.construction-pm .contact {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:3px;
  font-size:8.8pt;
  color:#C9CBD0;
}
.resume.construction-pm .contact span {
  position:relative;
  padding-right:12px;
}
.resume.construction-pm .contact span::after {
  content:'';
  position:absolute;
  right:0; top:50%;
  width:5px; height:5px;
  margin-top:-2.5px;
  background:var(--orange);
  transform:rotate(45deg);
}
.resume.construction-pm .hdr-stripe {
  display:flex;
  height:7px;
  margin:0 -18px;
}
.resume.construction-pm .hdr-stripe span { flex:1; }
.resume.construction-pm .hdr-stripe span:nth-child(1){ background:var(--orange); flex:5; }
.resume.construction-pm .hdr-stripe span:nth-child(2){ background:var(--char-2); flex:2; }
.resume.construction-pm .hdr-stripe span:nth-child(3){ background:var(--orange-d); flex:1; }

/* ===== Section headings ===== */
.resume.construction-pm h2 {
  display:flex;
  align-items:center;
  gap:9px;
  font-size:12pt;
  font-weight:800;
  color:var(--char);
  letter-spacing:1px;
  margin-bottom:11px;
  padding-bottom:6px;
  border-bottom:2px solid var(--line);
}
.resume.construction-pm h2 .tag {
  display:inline-block;
  width:14px; height:14px;
  background:var(--orange);
  position:relative;
  flex:0 0 auto;
  border-radius:2px;
}
.resume.construction-pm h2 .tag::before {
  content:'';
  position:absolute;
  inset:4px;
  border:2px solid #fff;
  border-radius:1px;
}
.resume.construction-pm section { margin-bottom:16px; }

/* ===== Summary ===== */
.resume.construction-pm .summary-body {
  font-size:9.6pt;
  color:var(--gray);
  line-height:1.65;
  padding:9px 12px;
  background:var(--bg-soft);
  border-left:3px solid var(--orange);
  border-radius:0 3px 3px 0;
}

/* ===== Experience / Gantt timeline ===== */
.resume.construction-pm .timeline { position:relative; }
.resume.construction-pm .exp-item {
  display:flex;
  gap:12px;
  padding-bottom:13px;
  margin-bottom:13px;
  border-bottom:1px dashed var(--line);
}
.resume.construction-pm .exp-item:last-child {
  border-bottom:none;
  margin-bottom:0;
  padding-bottom:0;
}
.resume.construction-pm .gantt {
  flex:0 0 14px;
  padding-top:4px;
}
.resume.construction-pm .gantt-track {
  display:block;
  width:9px;
  min-height:100%;
  height:48px;
  background:var(--line);
  border-radius:5px;
  position:relative;
  overflow:hidden;
}
.resume.construction-pm .gantt-fill {
  position:absolute;
  left:0; right:0; top:0;
  height:62%;
  background:linear-gradient(180deg,var(--orange),var(--orange-d));
  border-radius:5px;
}
.resume.construction-pm .gantt-track::after {
  content:'';
  position:absolute;
  left:1px; right:1px;
  top:62%;
  height:8px;
  background-image:repeating-linear-gradient(45deg,var(--char) 0 2px,transparent 2px 5px);
  opacity:.25;
}
.resume.construction-pm .exp-body { flex:1 1 auto; min-width:0; }
.resume.construction-pm .exp-body h3 {
  font-size:11pt;
  font-weight:700;
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 10px;
}
.resume.construction-pm .exp-body h3 .company { color:var(--char); }
.resume.construction-pm .exp-body h3 .pos {
  font-size:9.4pt;
  font-weight:600;
  color:var(--orange-d);
}
.resume.construction-pm .exp-body .date {
  display:inline-block;
  margin-top:3px;
  font-size:8.5pt;
  font-weight:600;
  color:#fff;
  background:var(--char-2);
  padding:1.5px 8px;
  border-radius:10px;
  letter-spacing:.5px;
}
.resume.construction-pm .date em { font-style:normal; opacity:.7; padding:0 2px; }

/* lists */
.resume.construction-pm ul { list-style:none; margin-top:8px; }
.resume.construction-pm li {
  position:relative;
  padding-left:16px;
  margin-bottom:4px;
  font-size:9.4pt;
  color:var(--char-2);
  line-height:1.5;
}
.resume.construction-pm li::before {
  content:'';
  position:absolute;
  left:0; top:7px;
  width:7px; height:7px;
  background:var(--orange);
  transform:rotate(45deg);
  border-radius:1px;
}

/* ===== Projects ===== */
.resume.construction-pm .proj-item {
  padding:9px 12px;
  margin-bottom:9px;
  background:var(--bg-soft);
  border-radius:3px;
  border-left:3px solid var(--char);
}
.resume.construction-pm .proj-item:last-child { margin-bottom:0; }
.resume.construction-pm .proj-item h3 {
  font-size:10.5pt;
  font-weight:700;
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:3px 8px;
}
.resume.construction-pm .proj-item h3 .pname { color:var(--char); }
.resume.construction-pm .proj-item h3 .prole {
  font-size:8.8pt;
  font-weight:600;
  color:#fff;
  background:var(--orange);
  padding:1px 7px;
  border-radius:3px;
}
.resume.construction-pm .pdesc {
  margin-top:4px;
  font-size:9.2pt;
  color:var(--gray);
  line-height:1.55;
}
.resume.construction-pm .proj-item ul { margin-top:6px; }

/* ===== Two column bottom ===== */
.resume.construction-pm .two-col {
  display:flex;
  gap:20px;
  flex-wrap:wrap;
}
.resume.construction-pm .two-col > section {
  flex:1 1 230px;
  min-width:0;
  margin-bottom:16px;
}

/* ===== Skills ===== */
.resume.construction-pm .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.construction-pm .skill-chip {
  display:inline-flex;
  align-items:center;
  font-size:9pt;
  font-weight:600;
  color:var(--char);
  background:#fff;
  border:1.5px solid var(--char);
  border-radius:3px;
  padding:3px 9px;
  position:relative;
}
.resume.construction-pm .skill-chip::before {
  content:'';
  width:6px; height:6px;
  background:var(--orange);
  border-radius:1px;
  margin-right:6px;
  transform:rotate(45deg);
}
.resume.construction-pm .skill-chip .lvl {
  font-size:8pt;
  font-weight:600;
  color:#fff;
  background:var(--orange);
  padding:0 5px;
  border-radius:2px;
  margin-left:6px;
}

/* ===== Education ===== */
.resume.construction-pm .edu-item {
  padding-left:12px;
  border-left:2px solid var(--orange);
  margin-bottom:10px;
}
.resume.construction-pm .edu-item:last-child { margin-bottom:0; }
.resume.construction-pm .edu-item h3 {
  font-size:10.2pt;
  font-weight:700;
  color:var(--char);
}
.resume.construction-pm .edu-item .date {
  display:inline-block;
  margin:2px 0;
  font-size:8.4pt;
  font-weight:600;
  color:var(--orange-d);
}
.resume.construction-pm .edu-item p {
  font-size:9pt;
  color:var(--gray);
}

/* ===== mandatory inline fixes ===== */
.resume.construction-pm li p, .resume.construction-pm li div { margin:0; padding:0; display:inline; }
.resume.construction-pm .skills span, .resume.construction-pm [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.construction-pm { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "construction-pm",
      "version": "1.0.0",
      "name": "工程项目管理",
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
