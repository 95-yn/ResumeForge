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
    slug: 'it-data-eng',
    name: '数据工程',
    category: 'tech',
    html: `<div class="resume it-data-eng">
  <header>
    <div class="hdr-pipe">
      <div class="hdr-main">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary-sec"><h2><span class="node-tag">SRC</span>个人简介</h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="flow-sec"><h2><span class="node-tag">FLOW</span>工作经历</h2>
    <div class="pipeline">
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="stage">
      <div class="stage-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> <span class="arrow">→</span> <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="proj-sec"><h2><span class="node-tag">JOB</span>项目经历</h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="proj">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="skills-sec"><h2><span class="node-tag">SINK</span>专业技能</h2><div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="skill-chip"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if education.length}}<section data-section="education" class="edu-sec"><h2><span class="node-tag">META</span>教育背景</h2>
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="edu">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> <span class="arrow">→</span> <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.it-data-eng * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-data-eng * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-data-eng {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#1e293b;
  --slate:#1e293b;
  --slate-2:#334155;
  --slate-deep:#0f172a;
  --cyan:#06b6d4;
  --cyan-deep:#0891b2;
  --cyan-soft:#cffafe;
  --line:#e2e8f0;
}

/* ===== Header: dark slate panel with pipeline rail ===== */
.resume.it-data-eng header {
  margin:-18mm -18mm 9mm;
  padding:14mm 18mm 11mm;
  background:
    linear-gradient(135deg,var(--slate-deep) 0%,var(--slate) 60%,var(--slate-2) 100%);
  position:relative;
  overflow:hidden;
}
.resume.it-data-eng header::before {
  content:"";
  position:absolute;
  top:0; left:0; right:0;
  height:4px;
  background:repeating-linear-gradient(90deg,var(--cyan) 0 22px,transparent 22px 30px);
}
.resume.it-data-eng header::after {
  content:"";
  position:absolute;
  right:-40px; bottom:-40px;
  width:180px; height:180px;
  border:2px dashed rgba(6,182,212,.22);
  border-radius:50%;
}
.resume.it-data-eng .hdr-pipe {
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  flex-wrap:wrap;
  gap:6mm;
  z-index:1;
}
.resume.it-data-eng .hdr-main { position:relative; padding-left:14px; }
.resume.it-data-eng .hdr-main::before {
  content:"";
  position:absolute;
  left:0; top:4px; bottom:4px;
  width:3px;
  background:var(--cyan);
  box-shadow:0 0 8px rgba(6,182,212,.6);
}
.resume.it-data-eng h1 {
  font-size:25pt;
  font-weight:800;
  color:#fff;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.it-data-eng .title {
  margin-top:4px;
  font-size:10.5pt;
  color:var(--cyan);
  font-weight:600;
  letter-spacing:.5px;
}
.resume.it-data-eng .contact {
  display:flex;
  flex-direction:column;
  gap:5px;
  text-align:right;
}
.resume.it-data-eng .contact span {
  font-size:9pt;
  color:#cbd5e1;
  font-family:'SF Mono','Consolas',monospace;
  position:relative;
  padding-right:14px;
}
.resume.it-data-eng .contact span::after {
  content:"";
  position:absolute;
  right:0; top:50%;
  transform:translateY(-50%);
  width:6px; height:6px;
  border-radius:50%;
  background:var(--cyan);
  box-shadow:0 0 5px rgba(6,182,212,.8);
}

/* ===== Section headings: node tags + flow line ===== */
.resume.it-data-eng section { margin-bottom:7mm; }
.resume.it-data-eng h2 {
  display:flex;
  align-items:center;
  gap:9px;
  font-size:12.5pt;
  font-weight:800;
  color:var(--slate-deep);
  letter-spacing:.5px;
  margin-bottom:5mm;
  position:relative;
}
.resume.it-data-eng h2::after {
  content:"";
  flex:1;
  height:2px;
  background:linear-gradient(90deg,var(--cyan) 0%,var(--line) 100%);
  margin-left:4px;
}
.resume.it-data-eng .node-tag {
  display:inline-block;
  font-family:'SF Mono','Consolas',monospace;
  font-size:7pt;
  font-weight:700;
  letter-spacing:1px;
  color:#fff;
  background:var(--slate);
  padding:3px 7px;
  border-radius:3px;
  border-left:3px solid var(--cyan);
  line-height:1;
}

/* ===== Summary ===== */
.resume.it-data-eng .summary {
  font-size:9.5pt;
  color:var(--slate-2);
  line-height:1.7;
  padding:4mm 5mm;
  background:linear-gradient(180deg,#f8fafc,#f1f5f9);
  border-left:3px solid var(--cyan);
  border-radius:0 6px 6px 0;
}

/* ===== Experience pipeline ===== */
.resume.it-data-eng .pipeline {
  position:relative;
  padding-left:18px;
}
.resume.it-data-eng .pipeline::before {
  content:"";
  position:absolute;
  left:4px; top:6px; bottom:6px;
  width:2px;
  background:repeating-linear-gradient(180deg,var(--cyan) 0 6px,transparent 6px 12px);
}
.resume.it-data-eng .stage {
  position:relative;
  margin-bottom:5mm;
  padding-left:14px;
}
.resume.it-data-eng .stage::before {
  content:"";
  position:absolute;
  left:-18px; top:5px;
  width:10px; height:10px;
  border-radius:50%;
  background:#fff;
  border:2.5px solid var(--cyan);
  box-shadow:0 0 0 3px rgba(6,182,212,.12);
}
.resume.it-data-eng .stage-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 10px;
  margin-bottom:3px;
}
.resume.it-data-eng .stage h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--slate-deep);
}
.resume.it-data-eng .company { color:var(--slate-deep); }
.resume.it-data-eng .position {
  color:var(--cyan-deep);
  font-weight:600;
  margin-left:8px;
  font-size:10pt;
}
.resume.it-data-eng .position::before {
  content:"·";
  margin-right:8px;
  color:var(--line);
  font-weight:400;
}
.resume.it-data-eng .date {
  font-size:8pt;
  font-family:'SF Mono','Consolas',monospace;
  color:#64748b;
  background:#f1f5f9;
  padding:2px 8px;
  border-radius:10px;
  white-space:nowrap;
}
.resume.it-data-eng .arrow { color:var(--cyan); font-weight:700; }

.resume.it-data-eng ul {
  list-style:none;
  margin-top:4px;
}
.resume.it-data-eng li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:var(--slate-2);
  line-height:1.55;
}
.resume.it-data-eng li::before {
  content:"▸";
  position:absolute;
  left:2px;
  color:var(--cyan);
  font-size:8pt;
  top:1px;
}

/* ===== Projects ===== */
.resume.it-data-eng .proj {
  margin-bottom:4.5mm;
  padding:3.5mm 4mm;
  background:#f8fafc;
  border:1px solid var(--line);
  border-radius:6px;
  border-top:3px solid var(--cyan);
}
.resume.it-data-eng .proj h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--slate-deep);
  margin-bottom:2px;
}
.resume.it-data-eng .proj-role {
  font-family:'SF Mono','Consolas',monospace;
  font-size:7.5pt;
  color:var(--cyan-deep);
  background:var(--cyan-soft);
  padding:2px 7px;
  border-radius:3px;
  margin-left:6px;
  vertical-align:middle;
}
.resume.it-data-eng .proj-desc {
  font-size:9.5pt;
  color:var(--slate-2);
  line-height:1.6;
  margin-bottom:2px;
}
.resume.it-data-eng .proj ul { margin-top:3px; }

/* ===== Skills as data chips ===== */
.resume.it-data-eng .skills {
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}
.resume.it-data-eng .skill-chip {
  display:inline-flex;
  align-items:center;
  font-size:9pt;
  padding:4px 11px;
  background:linear-gradient(135deg,var(--slate-deep),var(--slate-2));
  color:#e2e8f0;
  border-radius:4px;
  border-left:3px solid var(--cyan);
  font-weight:500;
}
.resume.it-data-eng .skill-chip .lvl {
  font-family:'SF Mono','Consolas',monospace;
  font-size:7.5pt;
  color:var(--cyan);
  margin-left:7px;
  padding-left:7px;
  border-left:1px solid rgba(148,163,184,.4);
}

/* ===== Education ===== */
.resume.it-data-eng .edu {
  display:grid;
  grid-template-columns:1fr auto;
  align-items:baseline;
  gap:2px 10px;
  padding:2.5mm 0;
  border-bottom:1px dashed var(--line);
}
.resume.it-data-eng .edu:last-child { border-bottom:none; }
.resume.it-data-eng .edu h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--slate-deep);
}
.resume.it-data-eng .edu p {
  grid-column:1 / -1;
  font-size:9pt;
  color:var(--slate-2);
}

/* ===== Required tail rules ===== */
.resume.it-data-eng li p, .resume.it-data-eng li div { margin:0; padding:0; display:inline; }
.resume.it-data-eng .skills span, .resume.it-data-eng [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.it-data-eng { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "it-data-eng",
      "version": "1.0.0",
      "name": "数据工程",
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
