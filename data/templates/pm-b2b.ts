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
    slug: 'pm-b2b',
    name: 'B端产品',
    category: 'profession',
    html: `<div class="resume pm-b2b">
  <header>
    <div class="hd-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary">
    <h2><span class="h2-idx">00</span><span class="h2-txt">概述</span></h2>
    <div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="sec-exp">
    <h2><span class="h2-idx">01</span><span class="h2-txt">工作经历</span></h2>
    <div class="flow">
      {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="flow-node">
        <div class="node-mark"><span class="node-dot"></span></div>
        <div class="node-body">
          <div class="node-head">
            <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
            <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="sec-proj">
    <h2><span class="h2-idx">02</span><span class="h2-txt">项目经历</span></h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="proj-card">
      <div class="proj-head">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="sec-skills">
    <h2><span class="h2-idx">03</span><span class="h2-txt">专业技能</span></h2>
    <div class="skills">
      {{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="skill-cell"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="sec-edu">
    <h2><span class="h2-idx">04</span><span class="h2-txt">教育背景</span></h2>
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="edu-row">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.pm-b2b * { margin:0; padding:0; box-sizing:border-box; }
.resume.pm-b2b * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.pm-b2b {
  --ink:#1f2733;
  --slate:#3d4a5c;
  --gb:#4a6383;
  --gb-deep:#33455c;
  --gb-line:#c3cedb;
  --gb-soft:#eef2f7;
  --gb-soft2:#e3eaf2;
  --muted:#6b7787;
  --rule:#d7dee7;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 18mm 16mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== header ===== */
.resume.pm-b2b header {
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:18px;
  padding-bottom:13px;
  margin-bottom:20px;
  border-bottom:2px solid var(--gb-deep);
  position:relative;
}
.resume.pm-b2b header::after {
  content:"";
  position:absolute;
  left:0; bottom:-2px;
  width:62px; height:2px;
  background:var(--gb);
}
.resume.pm-b2b .hd-main h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:1px;
  color:var(--ink);
  line-height:1.1;
}
.resume.pm-b2b .hd-title {
  margin-top:5px;
  font-size:10.5pt;
  color:var(--gb);
  font-weight:600;
  letter-spacing:.5px;
}
.resume.pm-b2b .contact {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:3px;
  font-size:8.8pt;
  color:var(--muted);
  letter-spacing:.3px;
  text-align:right;
}
.resume.pm-b2b .contact span {
  padding-left:14px;
  position:relative;
}
.resume.pm-b2b .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  width:5px; height:5px;
  transform:translateY(-50%) rotate(45deg);
  border:1px solid var(--gb-line);
}

/* ===== section + h2 ===== */
.resume.pm-b2b section { margin-bottom:18px; }
.resume.pm-b2b section:last-child { margin-bottom:0; }
.resume.pm-b2b h2 {
  display:flex;
  align-items:baseline;
  gap:9px;
  font-size:11.5pt;
  margin-bottom:11px;
  padding-bottom:6px;
  border-bottom:1px solid var(--rule);
}
.resume.pm-b2b .h2-idx {
  font-size:8.5pt;
  font-weight:700;
  color:#fff;
  background:var(--gb);
  padding:2px 5px;
  border-radius:2px;
  letter-spacing:1px;
  line-height:1;
}
.resume.pm-b2b .h2-txt {
  font-weight:700;
  color:var(--gb-deep);
  letter-spacing:2px;
}

/* ===== summary ===== */
.resume.pm-b2b .summary-body {
  font-size:9.5pt;
  color:var(--slate);
  line-height:1.65;
  padding:10px 13px;
  background:var(--gb-soft);
  border-left:3px solid var(--gb);
}

/* ===== experience flow ===== */
.resume.pm-b2b .flow { position:relative; }
.resume.pm-b2b .flow-node {
  display:flex;
  gap:13px;
  padding-bottom:13px;
}
.resume.pm-b2b .flow-node:last-child { padding-bottom:0; }
.resume.pm-b2b .node-mark {
  position:relative;
  width:11px;
  flex-shrink:0;
}
.resume.pm-b2b .node-mark::before {
  content:"";
  position:absolute;
  left:5px; top:8px; bottom:-13px;
  width:1.5px;
  background:var(--gb-line);
}
.resume.pm-b2b .flow-node:last-child .node-mark::before { display:none; }
.resume.pm-b2b .node-dot {
  position:absolute;
  left:0; top:5px;
  width:11px; height:11px;
  border-radius:50%;
  background:#fff;
  border:2.5px solid var(--gb);
}
.resume.pm-b2b .node-body { flex:1; min-width:0; }
.resume.pm-b2b .node-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.pm-b2b .node-head h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
  display:flex;
  align-items:baseline;
  gap:9px;
  flex-wrap:wrap;
}
.resume.pm-b2b .company { color:var(--gb-deep); }
.resume.pm-b2b .position {
  font-weight:600;
  font-size:9pt;
  color:var(--gb);
  padding-left:9px;
  position:relative;
}
.resume.pm-b2b .position::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:1px; height:10px;
  background:var(--gb-line);
}
.resume.pm-b2b .date {
  font-size:8.3pt;
  color:var(--muted);
  font-weight:600;
  letter-spacing:.4px;
  white-space:nowrap;
  font-variant-numeric:tabular-nums;
}

/* ===== shared lists ===== */
.resume.pm-b2b .node-body ul,
.resume.pm-b2b .proj-card ul {
  list-style:none;
  margin-top:6px;
}
.resume.pm-b2b .node-body li,
.resume.pm-b2b .proj-card li {
  position:relative;
  padding-left:14px;
  margin-bottom:3px;
  font-size:9.3pt;
  color:var(--slate);
  line-height:1.55;
}
.resume.pm-b2b .node-body li::before,
.resume.pm-b2b .proj-card li::before {
  content:"";
  position:absolute;
  left:0; top:7px;
  width:5px; height:5px;
  background:var(--gb-soft2);
  border-left:2px solid var(--gb);
}

/* ===== projects ===== */
.resume.pm-b2b .proj-card {
  border:1px solid var(--rule);
  border-top:2px solid var(--gb);
  padding:10px 13px;
  margin-bottom:9px;
  background:#fcfdfe;
}
.resume.pm-b2b .proj-card:last-child { margin-bottom:0; }
.resume.pm-b2b .proj-head h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--gb-deep);
  display:flex;
  align-items:baseline;
  gap:8px;
  flex-wrap:wrap;
}
.resume.pm-b2b .proj-role {
  font-size:8pt;
  font-weight:600;
  color:var(--gb);
  background:var(--gb-soft);
  border:1px solid var(--gb-soft2);
  padding:1px 7px;
  border-radius:2px;
  letter-spacing:.3px;
}
.resume.pm-b2b .proj-desc {
  margin-top:5px;
  font-size:9.3pt;
  color:var(--muted);
  line-height:1.55;
}

/* ===== skills (permission-table style) ===== */
.resume.pm-b2b .skills {
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:0;
  border:1px solid var(--rule);
  border-bottom:none;
}
.resume.pm-b2b .skill-cell {
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  padding:6px 12px;
  border-bottom:1px solid var(--rule);
  font-size:9.3pt;
  background:#fff;
}
.resume.pm-b2b .skill-cell:nth-child(4n+2),
.resume.pm-b2b .skill-cell:nth-child(4n+3) {
  background:var(--gb-soft);
}
.resume.pm-b2b .skill-cell:nth-child(odd) {
  border-right:1px solid var(--rule);
}
.resume.pm-b2b .sk-name {
  font-weight:600;
  color:var(--ink);
}
.resume.pm-b2b .sk-level {
  font-size:8pt;
  font-weight:600;
  color:var(--gb);
  letter-spacing:.3px;
  flex-shrink:0;
}

/* ===== education ===== */
.resume.pm-b2b .edu-row {
  display:grid;
  grid-template-columns:1fr auto;
  align-items:baseline;
  column-gap:12px;
  padding:7px 0;
  border-bottom:1px dashed var(--rule);
}
.resume.pm-b2b .edu-row:last-child { border-bottom:none; }
.resume.pm-b2b .edu-row h3 {
  font-size:10pt;
  font-weight:700;
  color:var(--gb-deep);
}
.resume.pm-b2b .edu-row .date {
  grid-column:2;
  grid-row:1;
}
.resume.pm-b2b .edu-meta {
  grid-column:1 / -1;
  margin-top:2px;
  font-size:9pt;
  color:var(--muted);
}

/* ===== required tail rules ===== */
.resume.pm-b2b li p, .resume.pm-b2b li div { margin:0; padding:0; display:inline; }
.resume.pm-b2b .skills span, .resume.pm-b2b [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.pm-b2b { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "pm-b2b",
      "version": "1.0.0",
      "name": "B端产品",
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
