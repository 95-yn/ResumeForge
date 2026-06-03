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
    slug: 'it-qa',
    name: '测试工程',
    category: 'tech',
    html: `<div class="resume it-qa">
  <header>
    <div class="id-bar">
      <div class="id-main">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="status-stamp">
        <span class="stamp-check">✓</span>
        <span class="stamp-text">QA&nbsp;PASSED</span>
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary">
    <h2><span class="h-id">// SPEC</span>个人简介</h2>
    <div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="h-id">// TC-EXP</span>工作经历</h2>
    {{#each experience}}<div class="case" data-entry="experience" data-entry-index="{{@index}}">
      <div class="case-head">
        <span class="case-tag">CASE&nbsp;{{@index}}</span>
        <h3>
          <span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="sep">/</span>
          <span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="steps">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="h-id">// TC-EDU</span>教育背景</h2>
    {{#each education}}<div class="case edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="case-head">
        <span class="case-tag">CASE&nbsp;{{@index}}</span>
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> <span class="dot">·</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="h-id">// ASSERT</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="chk">✓</span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="lv"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="h-id">// TC-PRJ</span>项目经历</h2>
    {{#each projects}}<div class="case prj" data-entry="projects" data-entry-index="{{@index}}">
      <div class="case-head">
        <span class="case-tag">CASE&nbsp;{{@index}}</span>
        <h3>
          <span class="prj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="sep">/</span><span class="prj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </h3>
      </div>
      {{#if description}}<div class="prj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="steps">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.it-qa * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-qa * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-qa {
  --green:#1f9d55;
  --green-soft:#e6f6ec;
  --red:#d23b3b;
  --red-soft:#fbe9e9;
  --ink:#1c2430;
  --muted:#5c6675;
  --line:#d7dde5;
  --line-soft:#eef1f5;
  --mono:'SFMono-Regular','Roboto Mono','Courier New',monospace;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  color:var(--ink);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.it-qa header {
  border:1.5px solid var(--ink);
  border-radius:2px;
  margin-bottom:16px;
}
.resume.it-qa .id-bar {
  display:flex;
  align-items:stretch;
  justify-content:space-between;
}
.resume.it-qa .id-main {
  padding:14px 18px;
  border-left:5px solid var(--green);
}
.resume.it-qa header h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.it-qa .role {
  margin-top:5px;
  font-family:var(--mono);
  font-size:9.5pt;
  color:var(--green);
  font-weight:600;
  letter-spacing:.5px;
}
.resume.it-qa .status-stamp {
  display:flex;
  align-items:center;
  gap:7px;
  padding:0 18px;
  background:var(--green-soft);
  border-left:1.5px solid var(--ink);
}
.resume.it-qa .stamp-check {
  width:22px; height:22px;
  border-radius:50%;
  background:var(--green);
  color:#fff;
  font-size:13pt;
  font-weight:800;
  display:flex; align-items:center; justify-content:center;
  line-height:1;
}
.resume.it-qa .stamp-text {
  font-family:var(--mono);
  font-size:9pt;
  font-weight:700;
  letter-spacing:1px;
  color:var(--green);
}
.resume.it-qa .contact {
  display:flex;
  flex-wrap:wrap;
  gap:0;
  border-top:1px solid var(--line);
  font-family:var(--mono);
  font-size:8.8pt;
  color:var(--muted);
}
.resume.it-qa .contact span {
  padding:7px 14px;
  border-right:1px solid var(--line-soft);
}
.resume.it-qa .contact span:last-child { border-right:none; }

/* ===== Section headings ===== */
.resume.it-qa .block { margin-bottom:15px; }
.resume.it-qa h2 {
  display:flex;
  align-items:baseline;
  gap:10px;
  font-size:11.5pt;
  font-weight:800;
  letter-spacing:.5px;
  padding-bottom:6px;
  margin-bottom:10px;
  border-bottom:1.5px solid var(--ink);
}
.resume.it-qa .h-id {
  font-family:var(--mono);
  font-size:8.5pt;
  font-weight:700;
  color:var(--green);
  letter-spacing:.5px;
}

/* ===== Summary ===== */
.resume.it-qa .summary-body {
  background:var(--line-soft);
  border-left:3px solid var(--green);
  padding:10px 14px;
  border-radius:2px;
  color:#2b333f;
}

/* ===== Case (table-row style) ===== */
.resume.it-qa .case {
  border:1px solid var(--line);
  border-radius:2px;
  margin-bottom:9px;
  overflow:hidden;
}
.resume.it-qa .case:last-child { margin-bottom:0; }
.resume.it-qa .case-head {
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:10px;
  padding:7px 12px;
  background:var(--line-soft);
  border-bottom:1px solid var(--line);
}
.resume.it-qa .case-tag {
  font-family:var(--mono);
  font-size:7.6pt;
  font-weight:700;
  color:#fff;
  background:var(--ink);
  padding:2px 7px;
  border-radius:2px;
  letter-spacing:.5px;
  white-space:nowrap;
}
.resume.it-qa .case-head h3 {
  font-size:11pt;
  font-weight:700;
  flex:1;
  min-width:50%;
}
.resume.it-qa .company,
.resume.it-qa .prj-name { color:var(--ink); }
.resume.it-qa .position,
.resume.it-qa .prj-role {
  color:var(--green);
  font-weight:600;
}
.resume.it-qa .sep {
  color:var(--line);
  margin:0 4px;
  font-weight:400;
}
.resume.it-qa .date {
  font-family:var(--mono);
  font-size:8.5pt;
  color:var(--muted);
  white-space:nowrap;
}

/* ===== Steps (highlights) ===== */
.resume.it-qa .steps {
  list-style:none;
  padding:9px 14px 11px 14px;
}
.resume.it-qa .steps li {
  position:relative;
  padding-left:22px;
  margin-bottom:5px;
  color:#2b333f;
}
.resume.it-qa .steps li:last-child { margin-bottom:0; }
.resume.it-qa .steps li::before {
  content:'✓';
  position:absolute;
  left:0;
  top:0;
  width:15px; height:15px;
  background:var(--green-soft);
  color:var(--green);
  border-radius:3px;
  font-size:9pt;
  font-weight:800;
  display:flex; align-items:center; justify-content:center;
  line-height:1;
}

/* ===== Education meta ===== */
.resume.it-qa .edu-meta {
  padding:8px 14px;
  font-size:9.5pt;
  color:var(--muted);
}
.resume.it-qa .edu-meta .dot { color:var(--green); margin:0 3px; }

/* ===== Project desc ===== */
.resume.it-qa .prj-desc {
  padding:9px 14px;
  color:#2b333f;
  border-bottom:1px solid var(--line-soft);
}
.resume.it-qa .prj .steps { padding-top:9px; }

/* ===== Skills ===== */
.resume.it-qa .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.it-qa .skill-chip {
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:4px 11px;
  background:#fff;
  border:1px solid var(--line);
  border-left:3px solid var(--green);
  border-radius:2px;
  font-size:9.3pt;
}
.resume.it-qa .skill-chip .chk {
  color:var(--green);
  font-weight:800;
  font-size:9pt;
}
.resume.it-qa .skill-chip .lv { color:var(--muted); }

/* ===== contract-required tail ===== */
.resume.it-qa li p, .resume.it-qa li div { margin:0; padding:0; display:inline; }
.resume.it-qa .skills span, .resume.it-qa [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.it-qa { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.it-qa .case { break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "it-qa",
      "version": "1.0.0",
      "name": "测试工程",
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
