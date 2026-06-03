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
    slug: 'process-engineer',
    name: '工艺工程',
    category: 'profession',
    html: `<div class="resume process-engineer">
  <header>
    <div class="pid-tag">P-101</div>
    <div class="header-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="summary-block">
    <h2><span class="node">FT</span>个人简介</h2>
    <div class="flow-body"><div data-field="basics.summary">{{{basics.summary}}}</div></div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience">
    <h2><span class="node">R</span>工作经历</h2>
    <div class="flow-body">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-marker">{{@index}}</div>
      <div class="entry-content">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education">
    <h2><span class="node">E</span>教育背景</h2>
    <div class="flow-body">
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-marker">{{@index}}</div>
      <div class="entry-content">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills">
    <h2><span class="node">V</span>专业技能</h2>
    <div class="flow-body">
      <div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects">
    <h2><span class="node">P</span>项目经历</h2>
    <div class="flow-body">
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-marker">{{@index}}</div>
      <div class="entry-content">
        <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.process-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.process-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.process-engineer {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  background:#f7f5ef;
  color:#1f2933;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --pipe:#1f5f8b;
  --pipe-deep:#16435f;
  --paper:#f7f5ef;
  --line:#c9d6df;
  --ink:#1f2933;
  --muted:#5a6b78;
}

/* ============ HEADER ============ */
.resume.process-engineer header {
  position:relative;
  display:flex;
  align-items:flex-end;
  gap:14px;
  padding:0 0 16px 0;
  margin-bottom:8px;
  border-bottom:3px solid var(--pipe);
}
.resume.process-engineer header::after {
  content:"";
  position:absolute;
  left:0; bottom:-9px;
  width:13px; height:13px;
  border-radius:50%;
  background:var(--paper);
  border:3px solid var(--pipe);
}
.resume.process-engineer .pid-tag {
  flex:0 0 auto;
  font-family:'SFMono-Regular',Consolas,monospace;
  font-size:8.5pt;
  letter-spacing:1px;
  color:var(--pipe);
  border:1.5px solid var(--pipe);
  border-radius:3px;
  padding:3px 7px;
  background:#fff;
  margin-bottom:4px;
}
.resume.process-engineer .header-main { flex:1 1 auto; }
.resume.process-engineer header h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:2px;
  color:var(--pipe-deep);
  line-height:1.1;
}
.resume.process-engineer header .header-main p {
  margin-top:5px;
  font-size:10.5pt;
  color:var(--pipe);
  letter-spacing:3px;
  font-weight:500;
}
.resume.process-engineer header .contact {
  flex:0 0 auto;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:3px;
  text-align:right;
  font-size:8.8pt;
  color:var(--muted);
  margin-bottom:2px;
}
.resume.process-engineer header .contact span {
  position:relative;
  padding-right:13px;
}
.resume.process-engineer header .contact span::after {
  content:"";
  position:absolute;
  right:0; top:50%;
  width:6px; height:6px;
  margin-top:-3px;
  border:1.4px solid var(--pipe);
  border-radius:50%;
  background:#fff;
}

/* ============ SECTION / FLOW LINE ============ */
.resume.process-engineer section {
  position:relative;
  margin-top:18px;
  padding-left:26px;
}
/* the main vertical P&ID pipe */
.resume.process-engineer section::before {
  content:"";
  position:absolute;
  left:11px;
  top:24px;
  bottom:6px;
  width:2px;
  background:repeating-linear-gradient(
    to bottom,
    var(--pipe) 0, var(--pipe) 7px,
    transparent 7px, transparent 12px
  );
}
.resume.process-engineer section:last-child::before { bottom:10px; }

.resume.process-engineer h2 {
  position:relative;
  font-size:11.5pt;
  font-weight:700;
  letter-spacing:2px;
  color:var(--pipe-deep);
  margin-bottom:12px;
  display:flex;
  align-items:center;
  gap:9px;
}
/* the node tag bubble that sits ON the pipe */
.resume.process-engineer h2 .node {
  position:absolute;
  left:-26px;
  top:50%;
  transform:translateY(-50%);
  width:24px; height:24px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:'SFMono-Regular',Consolas,monospace;
  font-size:7.5pt;
  font-weight:700;
  letter-spacing:0;
  color:#fff;
  background:var(--pipe);
  border:2px solid var(--paper);
  border-radius:50%;
  box-shadow:0 0 0 1.5px var(--pipe);
  z-index:2;
}
.resume.process-engineer h2::after {
  content:"";
  flex:1 1 auto;
  height:1px;
  background:linear-gradient(to right,var(--line),transparent);
}

.resume.process-engineer .flow-body { padding-left:0; }

/* ============ SUMMARY ============ */
.resume.process-engineer .summary-block .flow-body {
  color:var(--muted);
  font-size:9.6pt;
  line-height:1.7;
  border-left:2px solid var(--line);
  padding-left:12px;
}

/* ============ ENTRY w/ node numbers ============ */
.resume.process-engineer .entry {
  position:relative;
  display:flex;
  gap:11px;
  padding:0 0 14px 0;
}
.resume.process-engineer .entry:last-child { padding-bottom:0; }
.resume.process-engineer .entry-marker {
  flex:0 0 auto;
  width:19px; height:19px;
  margin-top:1px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:'SFMono-Regular',Consolas,monospace;
  font-size:8pt;
  font-weight:700;
  color:var(--pipe);
  background:#fff;
  border:1.5px solid var(--pipe);
  border-radius:4px;
}
.resume.process-engineer .entry-content { flex:1 1 auto; min-width:0; }

.resume.process-engineer h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
  line-height:1.4;
}
.resume.process-engineer h3 .position {
  margin-left:8px;
  font-weight:500;
  font-size:9.3pt;
  color:var(--pipe);
}
.resume.process-engineer h3 .role,
.resume.process-engineer h3 .lvl {
  font-weight:500;
  color:var(--pipe);
}

.resume.process-engineer .date {
  display:inline-block;
  margin-top:3px;
  font-family:'SFMono-Regular',Consolas,monospace;
  font-size:8.2pt;
  letter-spacing:0.5px;
  color:var(--muted);
  background:#eef2f4;
  border:1px solid var(--line);
  border-radius:3px;
  padding:1px 6px;
}

.resume.process-engineer .entry-content p {
  margin-top:4px;
  font-size:9.4pt;
  color:var(--muted);
}

.resume.process-engineer ul {
  list-style:none;
  margin-top:7px;
}
.resume.process-engineer ul li {
  position:relative;
  padding-left:15px;
  margin-bottom:4px;
  font-size:9.5pt;
  line-height:1.6;
  color:#3a4854;
}
/* instrument/flow-arrow bullet */
.resume.process-engineer ul li::before {
  content:"";
  position:absolute;
  left:0; top:0.62em;
  width:6px; height:6px;
  border-top:1.6px solid var(--pipe);
  border-right:1.6px solid var(--pipe);
  transform:rotate(45deg);
}

.resume.process-engineer .proj-desc {
  margin-top:5px;
  font-size:9.4pt;
  color:var(--muted);
  line-height:1.65;
}

/* ============ SKILLS ============ */
.resume.process-engineer .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.process-engineer .skill-tag {
  display:inline-flex;
  align-items:center;
  font-size:9pt;
  color:var(--pipe-deep);
  background:#fff;
  border:1px solid var(--pipe);
  border-radius:14px;
  padding:3px 12px;
  position:relative;
}
.resume.process-engineer .skill-tag .lvl {
  color:var(--muted);
  font-size:8.2pt;
}

/* ============ CONTRACT TAIL ============ */
.resume.process-engineer li p,
.resume.process-engineer li div { margin:0; padding:0; display:inline; }
.resume.process-engineer .skills span,
.resume.process-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.process-engineer {
    margin:0;
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;
  }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "process-engineer",
      "version": "1.0.0",
      "name": "工艺工程",
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
