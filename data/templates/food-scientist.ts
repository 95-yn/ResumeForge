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
    slug: 'food-scientist',
    name: '食品研发',
    category: 'profession',
    html: `<div class="resume food-scientist">
  <header>
    <div class="fs-mast">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="fs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact fs-contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="fs-card fs-summary">
    <h2><span class="fs-tag">配方说明</span>个人简介</h2>
    <div class="fs-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="fs-card" data-section="experience">
    <h2><span class="fs-tag">主料</span>工作经历</h2>
    {{#each experience}}<div class="fs-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="fs-entry-head">
        <h3>
          <span class="fs-co" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="fs-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        <span class="date fs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="fs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section class="fs-card" data-section="projects">
    <h2><span class="fs-tag">配方</span>项目经历</h2>
    {{#each projects}}<div class="fs-entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="fs-entry-head">
        <h3>
          <span class="fs-co" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="fs-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </h3>
      </div>
      {{#if description}}<div class="fs-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="fs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="fs-card" data-section="skills">
    <h2><span class="fs-tag">成分表</span>专业技能</h2>
    <div class="skills fs-skills">{{#each skills}}<span class="fs-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="fs-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="fs-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section class="fs-card" data-section="education">
    <h2><span class="fs-tag">基底</span>教育背景</h2>
    {{#each education}}<div class="fs-entry fs-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="fs-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date fs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="fs-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.food-scientist * { margin:0; padding:0; box-sizing:border-box; }
.resume.food-scientist * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.food-scientist {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 17mm;
  background:#fffaf4;
  color:#3a2b2b;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  background-image:
    radial-gradient(circle at 12% 8%, rgba(213,63,86,0.05) 0, transparent 22%),
    radial-gradient(circle at 90% 96%, rgba(213,63,86,0.045) 0, transparent 24%);
}

/* ===== header / masthead ===== */
.resume.food-scientist header {
  margin-bottom:9mm;
  padding-bottom:5mm;
  border-bottom:2px dashed #e8b9c2;
  position:relative;
}
.resume.food-scientist .fs-mast {
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4mm 6mm;
}
.resume.food-scientist h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:1px;
  color:#c0223e;
  line-height:1.1;
}
.resume.food-scientist .fs-title {
  font-size:11pt;
  font-weight:600;
  color:#7a5a5f;
  padding:1.5mm 3.5mm;
  background:#fdeef0;
  border:1px solid #f0c9d1;
  border-radius:20px;
}
.resume.food-scientist .fs-contact {
  margin-top:3.5mm;
  display:flex;
  flex-wrap:wrap;
  gap:2mm 4mm;
  font-size:9pt;
  color:#7a6a6a;
}
.resume.food-scientist .fs-contact span {
  position:relative;
  padding-left:5mm;
}
.resume.food-scientist .fs-contact span::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:5px;
  height:5px;
  border-radius:50%;
  background:#d53f56;
}

/* ===== section cards (recipe cards) ===== */
.resume.food-scientist .fs-card {
  margin-bottom:6.5mm;
  background:#ffffff;
  border:1px solid #f3dce0;
  border-radius:10px;
  padding:5mm 6mm 5.5mm;
  box-shadow:0 1px 0 #f6e6e9;
}
.resume.food-scientist .fs-card h2 {
  font-size:12pt;
  font-weight:800;
  color:#3a2b2b;
  display:flex;
  align-items:center;
  gap:3mm;
  margin-bottom:4mm;
  padding-bottom:2.5mm;
  border-bottom:1px solid #f1e3e5;
  letter-spacing:0.5px;
}
.resume.food-scientist .fs-tag {
  font-size:7.5pt;
  font-weight:700;
  color:#fff;
  background:#d53f56;
  padding:1mm 2.6mm;
  border-radius:4px;
  letter-spacing:1px;
  white-space:nowrap;
}

/* ===== summary ===== */
.resume.food-scientist .fs-body {
  font-size:10pt;
  color:#4d3d3d;
  line-height:1.65;
}

/* ===== entries ===== */
.resume.food-scientist .fs-entry {
  padding:3mm 0 3mm 5mm;
  position:relative;
  border-left:2px solid #f3d3d9;
}
.resume.food-scientist .fs-entry + .fs-entry {
  margin-top:1mm;
}
.resume.food-scientist .fs-entry::before {
  content:"";
  position:absolute;
  left:-5px;
  top:4.5mm;
  width:8px;
  height:8px;
  border-radius:50%;
  background:#fffaf4;
  border:2px solid #d53f56;
}
.resume.food-scientist .fs-entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:3mm;
  flex-wrap:wrap;
}
.resume.food-scientist .fs-entry h3 {
  font-size:11pt;
  font-weight:700;
  color:#2c2020;
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.food-scientist .fs-co { color:#c0223e; }
.resume.food-scientist .fs-pos {
  font-size:9.5pt;
  font-weight:600;
  color:#7a5a5f;
}
.resume.food-scientist .fs-pos::before {
  content:"·";
  margin-right:2.5mm;
  color:#d9aeb6;
}
.resume.food-scientist .fs-date {
  font-size:8.5pt;
  font-weight:600;
  color:#9a8388;
  white-space:nowrap;
  background:#fdf0f2;
  padding:0.8mm 2.5mm;
  border-radius:4px;
}

/* ===== lists ===== */
.resume.food-scientist .fs-list {
  list-style:none;
  margin-top:2mm;
}
.resume.food-scientist .fs-list li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.4mm;
  font-size:9.5pt;
  color:#4d3d3d;
  line-height:1.55;
}
.resume.food-scientist .fs-list li::before {
  content:"";
  position:absolute;
  left:0;
  top:2.4mm;
  width:6px;
  height:6px;
  background:#d53f56;
  border-radius:2px 6px 2px 6px;
}

/* ===== project desc ===== */
.resume.food-scientist .fs-desc {
  margin-top:1.5mm;
  font-size:9.5pt;
  color:#5d4d4d;
  line-height:1.55;
}

/* ===== skills (ingredients) ===== */
.resume.food-scientist .fs-skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.food-scientist .fs-skill {
  display:inline-flex;
  align-items:baseline;
  gap:1.5mm;
  padding:1.4mm 3.5mm;
  background:#fdeef0;
  border:1px solid #f0c9d1;
  border-radius:6px;
  font-size:9pt;
}
.resume.food-scientist .fs-skill-name {
  font-weight:600;
  color:#3a2b2b;
}
.resume.food-scientist .fs-skill-lv {
  font-size:8pt;
  color:#c0223e;
  font-weight:600;
}

/* ===== education ===== */
.resume.food-scientist .fs-edu-meta {
  margin-top:1mm;
  font-size:9pt;
  color:#6d5a5a;
}

/* ===== contract-required tail ===== */
.resume.food-scientist li p, .resume.food-scientist li div { margin:0; padding:0; display:inline; }
.resume.food-scientist .skills span, .resume.food-scientist [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.food-scientist { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "food-scientist",
      "version": "1.0.0",
      "name": "食品研发",
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
