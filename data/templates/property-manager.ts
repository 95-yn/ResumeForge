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
    slug: 'property-manager',
    name: '物业管理',
    category: 'profession',
    html: `<div class="resume property-manager">
  <header>
    <div class="pm-head-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="pm-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="pm-section pm-summary">
    <h2><span class="pm-h2-tag">个人简介</span></h2>
    <div class="pm-summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="pm-section" data-section="experience">
    <h2><span class="pm-h2-tag">工作经历</span></h2>
    {{#each experience}}<div class="pm-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="pm-entry-head">
        <h3>
          <span class="pm-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="pm-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="pm-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="pm-section" data-section="education">
    <h2><span class="pm-h2-tag">教育背景</span></h2>
    {{#each education}}<div class="pm-entry pm-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="pm-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="pm-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="pm-section" data-section="skills">
    <h2><span class="pm-h2-tag">专业技能</span></h2>
    <div class="skills">{{#each skills}}<span class="pm-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="pm-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="pm-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="pm-section" data-section="projects">
    <h2><span class="pm-h2-tag">项目经历</span></h2>
    {{#each projects}}<div class="pm-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3>
        <span class="pm-proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="pm-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </h3>
      {{#if description}}<div class="pm-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="pm-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.property-manager * { margin:0; padding:0; box-sizing:border-box; }
.resume.property-manager * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.property-manager {
  --pm-navy:#2f4858;
  --pm-blue:#3a5a73;
  --pm-steel:#5b7488;
  --pm-line:#c9d3da;
  --pm-beige:#f3efe6;
  --pm-beige-deep:#e8e1d2;
  --pm-text:#2d3942;
  --pm-muted:#647480;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  color:var(--pm-text);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.property-manager header {
  background:var(--pm-navy);
  color:#fff;
  margin:-18mm -18mm 0 -18mm;
  padding:14mm 18mm 9mm 18mm;
  border-bottom:5px solid var(--pm-beige-deep);
  position:relative;
}
.resume.property-manager header::after {
  content:"";
  position:absolute;
  left:18mm; bottom:-5px;
  width:46mm; height:5px;
  background:var(--pm-steel);
}
.resume.property-manager .pm-head-main {
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:10px 16px;
  margin-bottom:8px;
}
.resume.property-manager h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:3px;
  color:#fff;
  line-height:1.1;
}
.resume.property-manager .pm-title {
  font-size:10.5pt;
  font-weight:400;
  color:var(--pm-beige);
  letter-spacing:1px;
  padding-left:14px;
  border-left:1px solid rgba(255,255,255,.35);
}
.resume.property-manager .contact {
  display:flex;
  flex-wrap:wrap;
  gap:6px 0;
  margin-top:2px;
}
.resume.property-manager .contact span {
  font-size:9pt;
  color:#dfe6ea;
  letter-spacing:.4px;
  padding:0 14px;
  position:relative;
  white-space:nowrap;
}
.resume.property-manager .contact span:first-child { padding-left:0; }
.resume.property-manager .contact span + span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:1px; height:11px;
  background:rgba(255,255,255,.3);
}

/* ===== Sections：编号体系记忆点（门牌号 01/02…） ===== */
.resume.property-manager .pm-section {
  margin-top:8mm;
  counter-increment:pm-sec;
}
.resume.property-manager {
  counter-reset:pm-sec;
}
.resume.property-manager h2 {
  position:relative;
  margin-bottom:5mm;
  padding-bottom:6px;
  border-bottom:1px solid var(--pm-line);
  display:flex;
  align-items:center;
  gap:10px;
}
.resume.property-manager h2::before {
  content:counter(pm-sec,decimal-leading-zero);
  flex:0 0 auto;
  font-size:9pt;
  font-weight:700;
  letter-spacing:.5px;
  color:#fff;
  background:var(--pm-navy);
  padding:2px 7px;
  border-radius:3px;
  font-family:Georgia,serif;
}
.resume.property-manager .pm-h2-tag {
  display:inline-block;
  font-size:11.5pt;
  font-weight:700;
  letter-spacing:2px;
  color:var(--pm-navy);
}

/* ===== Summary：去彩色侧条，整框米底 ===== */
.resume.property-manager .pm-summary-body {
  background:var(--pm-beige);
  border:1px solid var(--pm-beige-deep);
  padding:10px 15px;
  border-radius:3px;
  font-size:10pt;
  line-height:1.7;
  color:#3a454d;
}

/* ===== Entries ===== */
.resume.property-manager .pm-entry {
  margin-bottom:5mm;
  padding-left:13px;
  position:relative;
}
.resume.property-manager .pm-entry::before {
  content:"";
  position:absolute;
  left:0; top:5px;
  width:7px; height:7px;
  background:var(--pm-blue);
  transform:rotate(45deg);
}
.resume.property-manager .pm-entry:last-child { margin-bottom:0; }
.resume.property-manager .pm-entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:2px 12px;
  margin-bottom:4px;
}
.resume.property-manager h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--pm-navy);
  line-height:1.35;
}
.resume.property-manager .pm-position {
  font-weight:500;
  color:var(--pm-blue);
  font-size:10pt;
  margin-left:8px;
  padding-left:9px;
  border-left:1px solid var(--pm-line);
}
.resume.property-manager .date {
  font-size:8.5pt;
  font-weight:600;
  color:var(--pm-muted);
  letter-spacing:.5px;
  background:var(--pm-beige-deep);
  padding:2px 9px;
  border-radius:2px;
  white-space:nowrap;
  flex-shrink:0;
}

/* ===== Lists ===== */
.resume.property-manager .pm-list {
  list-style:none;
  margin-top:3px;
}
.resume.property-manager .pm-list li {
  position:relative;
  padding-left:15px;
  margin-bottom:3px;
  font-size:9.7pt;
  line-height:1.6;
  color:#3d4951;
}
.resume.property-manager .pm-list li::before {
  content:"";
  position:absolute;
  left:0; top:.6em;
  width:5px; height:5px;
  background:var(--pm-steel);
  transform:rotate(45deg);
}

/* ===== Education ===== */
.resume.property-manager .pm-edu-meta {
  font-size:9.5pt;
  color:var(--pm-muted);
}

/* ===== Skills：去3px侧条，改整框+钢蓝菱角点 ===== */
.resume.property-manager .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.property-manager .pm-skill {
  display:inline-flex;
  align-items:center;
  gap:7px;
  font-size:9.3pt;
  background:var(--pm-beige);
  border:1px solid var(--pm-beige-deep);
  padding:4px 11px;
  border-radius:2px;
  color:var(--pm-navy);
}
.resume.property-manager .pm-skill::before {
  content:"";
  flex:0 0 auto;
  width:5px;
  height:5px;
  background:var(--pm-blue);
  transform:rotate(45deg);
}
.resume.property-manager .pm-skill-name { font-weight:600; }
.resume.property-manager .pm-skill-level {
  font-weight:400;
  color:var(--pm-muted);
  margin-left:6px;
  padding-left:7px;
  border-left:1px solid var(--pm-line);
}

/* ===== Projects ===== */
.resume.property-manager .pm-proj-role {
  font-weight:500;
  color:var(--pm-blue);
  font-size:10pt;
  margin-left:8px;
  padding-left:9px;
  border-left:1px solid var(--pm-line);
}
.resume.property-manager .pm-proj-desc {
  font-size:9.7pt;
  line-height:1.65;
  color:#3d4951;
  margin-top:3px;
}

/* ===== required tail rules ===== */
.resume.property-manager li p, .resume.property-manager li div { margin:0; padding:0; display:inline; }
.resume.property-manager .skills span, .resume.property-manager [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.property-manager { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "property-manager",
      "version": "1.0.0",
      "name": "物业管理",
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
