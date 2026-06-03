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
    slug: 'energy-engineer',
    name: '能源工程',
    category: 'profession',
    html: `<div class="resume energy-engineer">
  <header>
    <div class="grid-bg"></div>
    <div class="head-inner">
      <div class="node-mark"><span class="node-dot"></span><span class="node-line"></span></div>
      <div class="head-text">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
        <div class="contact">
          {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
          {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
          {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
        </div>
      </div>
    </div>
  </header>

  <div class="body">
    {{#if basics.summary}}<section class="summary-sec">
      <h2><span class="h2-node"></span>个人简介</h2>
      <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>{{/if}}

    {{#if experience.length}}<section data-section="experience">
      <h2><span class="h2-node"></span>工作经历</h2>
      <div class="timeline">
        {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
          <span class="t-node"></span>
          <div class="entry-head">
            <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
            <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>{{/each}}
      </div>
    </section>{{/if}}

    {{#if projects.length}}<section data-section="projects">
      <h2><span class="h2-node"></span>项目经历</h2>
      <div class="timeline">
        {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
          <span class="t-node"></span>
          <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
          {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>{{/each}}
      </div>
    </section>{{/if}}

    {{#if education.length}}<section data-section="education">
      <h2><span class="h2-node"></span>教育背景</h2>
      <div class="timeline">
        {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
          <span class="t-node"></span>
          <div class="entry-head">
            <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
            <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>{{/each}}
      </div>
    </section>{{/if}}

    {{#if skills.length}}<section data-section="skills">
      <h2><span class="h2-node"></span>专业技能</h2>
      <div class="skills">
        {{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-dot"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
      </div>
    </section>{{/if}}
  </div>
</div>`,
    css: `.resume.energy-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.energy-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.energy-engineer {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:0;
  background:#fff; font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#1a2238;
  --navy:#0a1f44; --navy2:#13294f; --volt:#ffd60a; --volt-dim:#f5c518;
  --grid:#28406b; --muted:#5a6a85; --hair:#dfe4ec;
}

/* ===== Header: 深蓝 + 电网节点 ===== */
.resume.energy-engineer header {
  position:relative; overflow:hidden;
  background:linear-gradient(135deg,#0a1f44 0%,#13294f 55%,#0a1f44 100%);
  color:#eef2f9; padding:16mm 18mm 13mm;
}
.resume.energy-engineer .grid-bg {
  position:absolute; inset:0; opacity:.5;
  background-image:
    linear-gradient(rgba(40,64,107,.55) 1px,transparent 1px),
    linear-gradient(90deg,rgba(40,64,107,.55) 1px,transparent 1px);
  background-size:11mm 11mm;
  -webkit-mask-image:linear-gradient(115deg,#000 30%,transparent 85%);
  mask-image:linear-gradient(115deg,#000 30%,transparent 85%);
}
.resume.energy-engineer header::after {
  content:""; position:absolute; right:-30mm; top:-30mm;
  width:80mm; height:80mm; border-radius:50%;
  background:radial-gradient(circle, rgba(255,214,10,.16), transparent 65%);
}
.resume.energy-engineer .head-inner {
  position:relative; z-index:1; display:flex; align-items:center; gap:7mm;
}
.resume.energy-engineer .node-mark {
  flex:none; display:flex; flex-direction:column; align-items:center;
}
.resume.energy-engineer .node-dot {
  width:14px; height:14px; border-radius:50%;
  background:var(--volt); box-shadow:0 0 0 5px rgba(255,214,10,.18), 0 0 14px rgba(255,214,10,.5);
}
.resume.energy-engineer .node-line {
  width:2px; height:40px; margin-top:4px;
  background:linear-gradient(var(--volt), transparent);
}
.resume.energy-engineer .head-text { flex:1; min-width:0; }
.resume.energy-engineer h1 {
  font-size:26pt; font-weight:800; letter-spacing:1px; line-height:1.1;
}
.resume.energy-engineer .title {
  margin-top:4px; font-size:11.5pt; font-weight:600;
  color:var(--volt); letter-spacing:.5px;
}
.resume.energy-engineer .contact {
  margin-top:9px; display:flex; flex-wrap:wrap; gap:6px 0; font-size:9pt;
}
.resume.energy-engineer .contact span {
  position:relative; color:#c6d2e6; padding:1px 13px 1px 13px;
}
.resume.energy-engineer .contact span::before {
  content:""; position:absolute; left:4px; top:50%; transform:translateY(-50%);
  width:5px; height:5px; border-radius:50%;
  border:1.5px solid var(--volt); background:transparent;
}
.resume.energy-engineer .contact span:first-child { padding-left:9px; }
.resume.energy-engineer .contact span:first-child::before { left:0; }

/* ===== Body ===== */
.resume.energy-engineer .body { padding:11mm 18mm 16mm; }
.resume.energy-engineer section { margin-bottom:8mm; }
.resume.energy-engineer section:last-child { margin-bottom:0; }

.resume.energy-engineer h2 {
  display:flex; align-items:center; gap:8px;
  font-size:12.5pt; font-weight:800; color:var(--navy);
  letter-spacing:1px; padding-bottom:5px;
  border-bottom:2px solid var(--hair);
  margin-bottom:9px; position:relative;
}
.resume.energy-engineer h2::after {
  content:""; position:absolute; left:0; bottom:-2px; width:34px; height:2px;
  background:var(--volt);
}
.resume.energy-engineer .h2-node {
  width:9px; height:9px; flex:none; border-radius:50%;
  background:var(--navy); position:relative;
}
.resume.energy-engineer .h2-node::after {
  content:""; position:absolute; inset:-3px; border-radius:50%;
  border:1.5px solid var(--volt-dim);
}

.resume.energy-engineer .summary {
  color:#33415c; font-size:9.8pt; line-height:1.65;
  border-left:3px solid var(--volt); padding-left:11px;
}

/* ===== Timeline (电网走线) ===== */
.resume.energy-engineer .timeline {
  position:relative; padding-left:16px;
}
.resume.energy-engineer .timeline::before {
  content:""; position:absolute; left:4px; top:5px; bottom:4px;
  width:2px; background:linear-gradient(var(--grid), var(--hair));
}
.resume.energy-engineer .entry { position:relative; margin-bottom:8px; }
.resume.energy-engineer .entry:last-child { margin-bottom:0; }
.resume.energy-engineer .t-node {
  position:absolute; left:-16px; top:4px;
  width:9px; height:9px; border-radius:50%;
  background:#fff; border:2px solid var(--navy);
  box-shadow:0 0 0 2px #fff;
}
.resume.energy-engineer .entry:hover .t-node,
.resume.energy-engineer .t-node { transition:none; }
.resume.energy-engineer .entry .t-node::after {
  content:""; position:absolute; inset:1.5px; border-radius:50%;
  background:var(--volt);
}

.resume.energy-engineer .entry-head {
  display:flex; justify-content:space-between; align-items:baseline;
  gap:10px; flex-wrap:wrap;
}
.resume.energy-engineer h3 {
  font-size:10.5pt; font-weight:700; color:var(--navy2);
}
.resume.energy-engineer .company { color:var(--navy); }
.resume.energy-engineer .position {
  margin-left:8px; font-weight:600; color:var(--muted); font-size:10pt;
}
.resume.energy-engineer .position::before {
  content:"/"; margin-right:8px; color:var(--volt-dim); font-weight:700;
}
.resume.energy-engineer .date {
  flex:none; font-size:8.3pt; font-weight:700; letter-spacing:.5px;
  color:var(--navy); background:rgba(255,214,10,.22);
  padding:2px 8px; border-radius:3px; white-space:nowrap;
}
.resume.energy-engineer .edu-meta {
  margin-top:3px; font-size:9.3pt; color:var(--muted); font-weight:500;
}

.resume.energy-engineer .proj-name { color:var(--navy); }
.resume.energy-engineer .proj-role {
  font-weight:600; color:var(--volt-dim); font-size:9pt;
}
.resume.energy-engineer .proj-role::before { content:"· "; color:var(--muted); }
.resume.energy-engineer .proj-desc {
  margin-top:3px; font-size:9.5pt; color:#3a4860; line-height:1.6;
}

.resume.energy-engineer ul {
  margin-top:4px; list-style:none;
}
.resume.energy-engineer li {
  position:relative; padding-left:15px; margin-bottom:3px;
  font-size:9.5pt; color:#33415c; line-height:1.55;
}
.resume.energy-engineer li::before {
  content:""; position:absolute; left:0; top:7px;
  width:6px; height:6px;
  background:var(--volt); clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);
}

/* ===== Skills: 电网节点芯片 ===== */
.resume.energy-engineer .skills {
  display:flex; flex-wrap:wrap; gap:7px;
}
.resume.energy-engineer .skill-chip {
  display:inline-flex; align-items:center; gap:6px;
  font-size:9pt; font-weight:600; color:var(--navy2);
  background:#f3f6fb; border:1px solid var(--hair);
  border-radius:4px; padding:4px 10px 4px 8px;
  position:relative;
}
.resume.energy-engineer .skill-chip::after {
  content:""; position:absolute; left:0; top:0; bottom:0; width:3px;
  background:var(--volt); border-radius:4px 0 0 4px;
}
.resume.energy-engineer .sk-dot {
  width:6px; height:6px; border-radius:50%; flex:none;
  background:var(--navy); box-shadow:0 0 0 2px rgba(255,214,10,.3);
}
.resume.energy-engineer .sk-level { color:var(--muted); font-weight:500; }

/* ===== contracts ===== */
.resume.energy-engineer li p, .resume.energy-engineer li div { margin:0; padding:0; display:inline; }
.resume.energy-engineer .skills span, .resume.energy-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.energy-engineer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "energy-engineer",
      "version": "1.0.0",
      "name": "能源工程",
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
