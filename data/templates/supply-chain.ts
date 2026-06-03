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
    slug: 'supply-chain',
    name: '供应链管理',
    category: 'profession',
    html: `<div class="resume supply-chain">
  <header>
    <div class="sc-node-grid" aria-hidden="true">
      <span class="sc-node"></span><span class="sc-node"></span><span class="sc-node"></span>
      <span class="sc-node"></span><span class="sc-node"></span><span class="sc-node"></span>
    </div>
    <div class="sc-head-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="sc-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span class="sc-chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="sc-chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="sc-chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="sc-summary">
    <h2><span class="sc-h2-label">个人简介</span></h2>
    <div class="sc-summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="sc-timeline">
    <h2><span class="sc-h2-label">工作经历</span></h2>
    <div class="sc-flow">
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="sc-entry">
      <span class="sc-marker" aria-hidden="true"></span>
      <div class="sc-entry-inner">
        <div class="sc-entry-top">
          <h3><span class="sc-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sc-arrow" aria-hidden="true">›</span><span class="sc-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="sc-edu">
    <h2><span class="sc-h2-label">教育背景</span></h2>
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="sc-edu-item">
      <span class="sc-node-dot" aria-hidden="true"></span>
      <div class="sc-edu-body">
        <div class="sc-edu-top">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="sc-skills-sec">
    <h2><span class="sc-h2-label">专业技能</span></h2>
    <div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="sc-skill"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="sc-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="sc-projects">
    <h2><span class="sc-h2-label">项目经历</span></h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="sc-proj-item">
      <h3><span class="sc-proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="sc-arrow" aria-hidden="true">›</span> <span class="sc-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="sc-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.supply-chain * { margin:0; padding:0; box-sizing:border-box; }
.resume.supply-chain * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.supply-chain {
  --sc-steel:#1f4e6b;
  --sc-steel-deep:#15384e;
  --sc-amber:#e8920c;
  --sc-amber-soft:#fbe9c8;
  --sc-ink:#1c2a33;
  --sc-muted:#5d7080;
  --sc-line:#d4dde3;
  --sc-bg-soft:#f2f6f8;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  color:var(--sc-ink);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ---------- Header ---------- */
.resume.supply-chain header {
  position:relative;
  background:linear-gradient(135deg,var(--sc-steel-deep) 0%,var(--sc-steel) 70%);
  color:#fff;
  padding:20px 24px;
  border-radius:8px;
  overflow:hidden;
  margin-bottom:22px;
}
.resume.supply-chain header::before {
  content:"";
  position:absolute;
  left:0; bottom:0;
  width:100%; height:4px;
  background:linear-gradient(90deg,var(--sc-amber) 0%,var(--sc-amber) 40%,transparent 40%,transparent 50%,var(--sc-amber) 50%,var(--sc-amber) 78%,transparent 78%);
}
.resume.supply-chain .sc-node-grid {
  position:absolute;
  top:18px; right:20px;
  display:grid;
  grid-template-columns:repeat(3,12px);
  grid-auto-rows:12px;
  gap:14px;
  opacity:.5;
}
.resume.supply-chain .sc-node-grid::after {
  content:"";
  position:absolute;
  inset:-6px;
  background:
    linear-gradient(90deg,transparent 5px,rgba(232,146,12,.55) 5px,rgba(232,146,12,.55) 7px,transparent 7px) 0 5px/26px 100% no-repeat,
    linear-gradient(0deg,transparent 5px,rgba(255,255,255,.3) 5px,rgba(255,255,255,.3) 7px,transparent 7px) 5px 0/100% 26px no-repeat;
}
.resume.supply-chain .sc-node {
  width:8px; height:8px;
  border-radius:50%;
  background:rgba(255,255,255,.45);
  box-shadow:0 0 0 2px rgba(232,146,12,.25);
}
.resume.supply-chain .sc-node:nth-child(2),
.resume.supply-chain .sc-node:nth-child(4) {
  background:var(--sc-amber);
  box-shadow:0 0 0 2px rgba(232,146,12,.35);
}
.resume.supply-chain .sc-head-main { position:relative; z-index:1; max-width:74%; }
.resume.supply-chain header h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.supply-chain .sc-title {
  margin-top:5px;
  font-size:11pt;
  font-weight:500;
  color:var(--sc-amber-soft);
  letter-spacing:.5px;
}
.resume.supply-chain .contact {
  margin-top:13px;
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.supply-chain .sc-chip {
  font-size:8.5pt;
  padding:3px 10px;
  border-radius:20px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.22);
  color:#eef4f7;
  white-space:nowrap;
}

/* ---------- Section headings ---------- */
.resume.supply-chain section { margin-bottom:18px; }
.resume.supply-chain h2 {
  font-size:12pt;
  font-weight:700;
  color:var(--sc-steel);
  margin-bottom:11px;
  display:flex;
  align-items:center;
  gap:9px;
}
.resume.supply-chain h2::before {
  content:"";
  width:14px; height:14px;
  flex:0 0 auto;
  border-radius:3px;
  background:var(--sc-amber);
  transform:rotate(45deg);
  box-shadow:0 0 0 3px var(--sc-amber-soft);
}
.resume.supply-chain .sc-h2-label { position:relative; }
.resume.supply-chain h2::after {
  content:"";
  flex:1;
  height:2px;
  background:linear-gradient(90deg,var(--sc-line),transparent);
}

/* ---------- Summary ---------- */
.resume.supply-chain .sc-summary-body {
  position:relative;
  background:var(--sc-bg-soft);
  border:1px solid var(--sc-line);
  padding:11px 14px 11px 20px;
  border-radius:6px;
  color:#2c3c46;
  font-size:9.5pt;
}
.resume.supply-chain .sc-summary-body::before {
  content:"";
  position:absolute;
  left:9px;
  top:14px;
  width:7px;
  height:7px;
  border-radius:2px;
  transform:rotate(45deg);
  background:var(--sc-amber);
}

/* ---------- Experience flow timeline ---------- */
.resume.supply-chain .sc-flow {
  position:relative;
  padding-left:20px;
}
.resume.supply-chain .sc-flow::before {
  content:"";
  position:absolute;
  left:5px; top:4px; bottom:4px;
  width:2px;
  background:linear-gradient(180deg,var(--sc-steel),var(--sc-line));
}
.resume.supply-chain .sc-entry {
  position:relative;
  padding-bottom:14px;
}
.resume.supply-chain .sc-entry:last-child { padding-bottom:0; }
.resume.supply-chain .sc-marker {
  position:absolute;
  left:-19px; top:3px;
  width:11px; height:11px;
  border-radius:50%;
  background:#fff;
  border:2.5px solid var(--sc-steel);
  z-index:1;
}
.resume.supply-chain .sc-entry:first-child .sc-marker {
  border-color:var(--sc-amber);
  background:var(--sc-amber);
  box-shadow:0 0 0 3px var(--sc-amber-soft);
}
.resume.supply-chain .sc-entry-top {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.supply-chain .sc-entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--sc-ink);
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:5px;
}
.resume.supply-chain .sc-company { color:var(--sc-steel); }
.resume.supply-chain .sc-position { color:var(--sc-muted); font-weight:600; }
.resume.supply-chain .sc-arrow { color:var(--sc-amber); font-weight:700; font-size:11pt; }
.resume.supply-chain .date {
  font-size:8.5pt;
  font-weight:600;
  color:#fff;
  background:var(--sc-steel);
  padding:1.5px 8px;
  border-radius:4px;
  white-space:nowrap;
}
.resume.supply-chain .sc-entry ul,
.resume.supply-chain .sc-projects ul { list-style:none; margin-top:7px; }
.resume.supply-chain .sc-entry li,
.resume.supply-chain .sc-projects li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:#33444e;
}
.resume.supply-chain .sc-entry li::before,
.resume.supply-chain .sc-projects li::before {
  content:"›";
  position:absolute;
  left:2px; top:-1px;
  color:var(--sc-amber);
  font-weight:700;
}

/* ---------- Education ---------- */
.resume.supply-chain .sc-edu-item {
  display:flex;
  gap:10px;
  padding:8px 0;
  border-bottom:1px dashed var(--sc-line);
}
.resume.supply-chain .sc-edu-item:last-child { border-bottom:none; }
.resume.supply-chain .sc-node-dot {
  flex:0 0 auto;
  width:9px; height:9px;
  margin-top:4px;
  border-radius:2px;
  transform:rotate(45deg);
  background:var(--sc-steel);
}
.resume.supply-chain .sc-edu-top {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.supply-chain .sc-edu h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--sc-steel);
}
.resume.supply-chain .sc-edu-body p {
  font-size:9.5pt;
  color:var(--sc-muted);
  margin-top:2px;
}

/* ---------- Skills ---------- */
.resume.supply-chain .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.supply-chain .sc-skill {
  display:inline-flex;
  align-items:center;
  gap:6px;
  font-size:9pt;
  padding:4px 12px;
  border-radius:5px;
  background:var(--sc-bg-soft);
  border:1px solid var(--sc-line);
  color:var(--sc-steel-deep);
  font-weight:600;
}
.resume.supply-chain .sc-skill::before {
  content:"";
  flex:0 0 auto;
  width:6px;
  height:6px;
  border-radius:1px;
  transform:rotate(45deg);
  background:var(--sc-amber);
}
.resume.supply-chain .sc-skill-lv { color:var(--sc-muted); font-weight:500; }

/* ---------- Projects ---------- */
.resume.supply-chain .sc-proj-item {
  padding:9px 12px;
  margin-bottom:9px;
  background:var(--sc-bg-soft);
  border-radius:6px;
  border-top:2px solid var(--sc-steel);
}
.resume.supply-chain .sc-proj-item:last-child { margin-bottom:0; }
.resume.supply-chain .sc-proj-item h3 {
  font-size:10.5pt;
  font-weight:700;
}
.resume.supply-chain .sc-proj-name { color:var(--sc-steel); }
.resume.supply-chain .sc-proj-role { color:var(--sc-muted); font-weight:600; font-size:9.5pt; }
.resume.supply-chain .sc-proj-desc {
  font-size:9.5pt;
  color:#33444e;
  margin-top:4px;
}

/* ---------- Contract-required tail rules ---------- */
.resume.supply-chain li p, .resume.supply-chain li div { margin:0; padding:0; display:inline; }
.resume.supply-chain .skills span, .resume.supply-chain [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.supply-chain { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "supply-chain",
      "version": "1.0.0",
      "name": "供应链管理",
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
