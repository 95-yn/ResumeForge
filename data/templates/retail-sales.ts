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
    slug: 'retail-sales',
    name: '零售销售',
    category: 'profession',
    html: `<div class="resume retail-sales">
  <header>
    <div class="rs-head-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="rs-summary"><h2><span class="rs-no">01</span>个人简介</h2><div class="rs-card" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience" class="rs-block"><h2><span class="rs-no">02</span>工作经历</h2>
    {{#each experience}}<div class="rs-card rs-item" data-entry="experience" data-entry-index="{{@index}}">
      <div class="rs-item-head">
        <h3><span class="rs-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="rs-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education" class="rs-block"><h2><span class="rs-no">03</span>教育背景</h2>
    {{#each education}}<div class="rs-card rs-item" data-entry="education" data-entry-index="{{@index}}"><div class="rs-item-head"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="rs-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills" class="rs-block"><h2><span class="rs-no">04</span>专业技能</h2><div class="skills">{{#each skills}}<span class="rs-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="rs-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects" class="rs-block"><h2><span class="rs-no">05</span>项目经历</h2>
    {{#each projects}}<div class="rs-card rs-item" data-entry="projects" data-entry-index="{{@index}}"><h3><span class="rs-proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="rs-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>{{#if description}}<div class="rs-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.retail-sales * { margin:0; padding:0; box-sizing:border-box; }
.resume.retail-sales * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.retail-sales {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fffaf4;
  font-size:10pt;
  line-height:1.55;
  color:#3a2f28;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --rs-orange:#c2562a;
  --rs-orange-soft:#d77a44;
  --rs-cream:#fbeede;
  --rs-line:#ecd9c2;
}

/* ===== Header ===== */
.resume.retail-sales header {
  position:relative;
  background:var(--rs-orange);
  border-radius:10px;
  padding:22px 26px;
  color:#fff;
  overflow:hidden;
}
.resume.retail-sales header::after {
  content:"";
  position:absolute;
  left:0; top:0; bottom:0;
  width:6px;
  background:#8f3d1c;
}
.resume.retail-sales .rs-head-main { position:relative; z-index:1; }
.resume.retail-sales header h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.retail-sales .rs-head-main p {
  margin-top:6px;
  font-size:11.5pt;
  font-weight:500;
  color:#fbe6d6;
  letter-spacing:1px;
}
.resume.retail-sales .contact {
  position:relative;
  z-index:1;
  margin-top:14px;
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.retail-sales .contact span {
  display:inline-block;
  background:rgba(255,255,255,.16);
  border:1px solid rgba(255,255,255,.32);
  padding:3px 12px;
  border-radius:6px;
  font-size:9pt;
  font-weight:500;
  white-space:nowrap;
}

/* ===== Section titles — numbered ===== */
.resume.retail-sales section { margin-top:20px; }
.resume.retail-sales h2 {
  display:flex;
  align-items:center;
  gap:10px;
  font-size:13pt;
  font-weight:800;
  color:var(--rs-orange);
  margin-bottom:12px;
  letter-spacing:.5px;
}
.resume.retail-sales .rs-no {
  flex:0 0 auto;
  width:22px; height:22px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  font-size:8.5pt;
  font-weight:800;
  color:#fff;
  background:var(--rs-orange);
  border-radius:5px;
  letter-spacing:0;
}

/* ===== Cards ===== */
.resume.retail-sales .rs-card {
  background:#fff;
  border:1px solid var(--rs-line);
  border-radius:8px;
  padding:13px 16px;
}
.resume.retail-sales .rs-item + .rs-item { margin-top:10px; }

.resume.retail-sales .rs-summary .rs-card {
  background:var(--rs-cream);
  border-color:var(--rs-line);
  line-height:1.7;
}

.resume.retail-sales .rs-item-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:6px;
}
.resume.retail-sales h3 {
  font-size:11.5pt;
  font-weight:700;
  color:#2c241e;
}
.resume.retail-sales .rs-company {
  color:var(--rs-orange);
  font-weight:800;
}
.resume.retail-sales .rs-pos {
  margin-left:10px;
  color:#6a5a4d;
  font-weight:600;
  font-size:10.5pt;
}
.resume.retail-sales .rs-pos::before {
  content:"";
  display:inline-block;
  width:5px; height:5px;
  border-radius:50%;
  background:var(--rs-orange-soft);
  margin-right:8px;
  vertical-align:middle;
}
.resume.retail-sales .date {
  font-size:8.5pt;
  font-weight:600;
  color:#fff;
  background:var(--rs-orange-soft);
  padding:2px 10px;
  border-radius:999px;
  white-space:nowrap;
}

/* ===== Lists ===== */
.resume.retail-sales ul {
  list-style:none;
  margin-top:9px;
}
.resume.retail-sales li {
  position:relative;
  padding-left:18px;
  margin-bottom:5px;
  color:#473b32;
  line-height:1.6;
}
.resume.retail-sales li::before {
  content:"";
  position:absolute;
  left:2px; top:.62em;
  width:6px; height:6px;
  border-radius:50%;
  background:var(--rs-orange);
}

/* ===== Education ===== */
.resume.retail-sales .rs-edu-meta {
  margin-top:6px;
  color:#6a5a4d;
  font-size:9.5pt;
}

/* ===== Skills ===== */
.resume.retail-sales .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.retail-sales .rs-skill {
  display:inline-block;
  background:var(--rs-cream);
  border:1px solid var(--rs-line);
  color:#5a4a3d;
  padding:5px 14px;
  border-radius:6px;
  font-size:9.5pt;
  font-weight:600;
}
.resume.retail-sales .rs-skill .rs-skill-lv {
  color:var(--rs-orange);
  font-weight:700;
}

/* ===== Projects ===== */
.resume.retail-sales .rs-proj-name {
  color:var(--rs-orange);
  font-weight:800;
}
.resume.retail-sales .rs-proj-role {
  color:#6a5a4d;
  font-weight:600;
  font-size:10.5pt;
}
.resume.retail-sales .rs-proj-desc {
  margin-top:7px;
  color:#473b32;
  line-height:1.65;
}

/* ===== Contract-required tail ===== */
.resume.retail-sales li p, .resume.retail-sales li div { margin:0; padding:0; display:inline; }
.resume.retail-sales .skills span, .resume.retail-sales [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.retail-sales { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "retail-sales",
      "version": "1.0.0",
      "name": "零售销售",
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
