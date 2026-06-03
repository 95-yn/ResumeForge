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
    slug: 'hotel-manager',
    name: '酒店管理',
    category: 'profession',
    html: `<div class="resume hotel-manager">
  <header>
    <div class="brand-rule"></div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
    <div class="brand-rule"></div>
  </header>

  {{#if basics.summary}}<section class="summary"><h2>个人简介</h2><div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.hotel-manager * { margin:0; padding:0; box-sizing:border-box; }
.resume.hotel-manager * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.hotel-manager {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#FBF7EF;
  color:#3A2E22;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei','Songti SC','SimSun',serif;
}

/* ---------- Header ---------- */
.resume.hotel-manager header {
  text-align:center;
  padding:6mm 0 7mm;
  margin-bottom:8mm;
}
.resume.hotel-manager .brand-rule {
  width:46px;
  height:1.2px;
  margin:0 auto;
  background:#A9803E;
  position:relative;
}
.resume.hotel-manager .brand-rule::before,
.resume.hotel-manager .brand-rule::after {
  content:'';
  position:absolute;
  top:50%;
  width:4px;
  height:4px;
  background:#A9803E;
  transform:translateY(-50%) rotate(45deg);
}
.resume.hotel-manager .brand-rule::before { left:-9px; }
.resume.hotel-manager .brand-rule::after  { right:-9px; }

.resume.hotel-manager header h1 {
  font-size:25pt;
  font-weight:600;
  letter-spacing:0.14em;
  color:#2C2014;
  margin:7mm 0 2.5mm;
}
.resume.hotel-manager header .title {
  font-size:11pt;
  font-style:italic;
  letter-spacing:0.32em;
  color:#A9803E;
  text-transform:uppercase;
  margin-bottom:5mm;
  padding-left:0.32em;
}
.resume.hotel-manager .contact {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:4mm;
  font-size:9pt;
  letter-spacing:0.04em;
  color:#6A5A47;
  margin-bottom:5.5mm;
}
.resume.hotel-manager .contact span {
  position:relative;
}
.resume.hotel-manager .contact span + span::before {
  content:'';
  position:absolute;
  left:-2.1mm;
  top:50%;
  width:3px;
  height:3px;
  background:#C9A86A;
  border-radius:50%;
  transform:translateY(-50%);
}

/* ---------- Sections ---------- */
.resume.hotel-manager section {
  margin-bottom:7mm;
}
.resume.hotel-manager h2 {
  font-size:12.5pt;
  font-weight:600;
  letter-spacing:0.22em;
  color:#8A6529;
  padding-left:0.22em;
  margin-bottom:4.5mm;
  position:relative;
  display:flex;
  align-items:center;
  gap:3mm;
}
.resume.hotel-manager h2::after {
  content:'';
  flex:1;
  height:1px;
  background:linear-gradient(to right,#D8C295,rgba(216,194,149,0));
}

/* ---------- Summary ---------- */
.resume.hotel-manager .summary-body {
  font-size:10pt;
  line-height:1.75;
  color:#4A3B2C;
  padding:0 1mm;
  text-align:justify;
}

/* ---------- Entries ---------- */
.resume.hotel-manager .entry {
  margin-bottom:5mm;
  padding-left:5mm;
  border-left:1.5px solid #E4D4B0;
  position:relative;
}
.resume.hotel-manager .entry::before {
  content:'';
  position:absolute;
  left:-3.5px;
  top:1.6mm;
  width:6px;
  height:6px;
  background:#A9803E;
  border-radius:50%;
  border:1.5px solid #FBF7EF;
}
.resume.hotel-manager .entry:last-child { margin-bottom:0; }

.resume.hotel-manager .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:4mm;
  margin-bottom:1.5mm;
}
.resume.hotel-manager .entry h3 {
  font-size:11pt;
  font-weight:600;
  color:#2C2014;
}
.resume.hotel-manager .entry h3 .company {
  letter-spacing:0.02em;
}
.resume.hotel-manager .entry h3 .position {
  font-weight:400;
  font-style:italic;
  color:#A9803E;
  margin-left:2.5mm;
  padding-left:2.5mm;
  border-left:1px solid #D8C295;
}
.resume.hotel-manager .date {
  font-size:8.5pt;
  letter-spacing:0.06em;
  color:#9A8666;
  white-space:nowrap;
  flex-shrink:0;
}

.resume.hotel-manager ul {
  list-style:none;
  margin-top:2mm;
}
.resume.hotel-manager li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.4mm;
  font-size:9.5pt;
  line-height:1.65;
  color:#4A3B2C;
  text-align:justify;
}
.resume.hotel-manager li::before {
  content:'';
  position:absolute;
  left:0.5mm;
  top:2.3mm;
  width:3.5px;
  height:3.5px;
  background:#C9A86A;
  transform:rotate(45deg);
}

/* ---------- Education ---------- */
.resume.hotel-manager .edu-meta {
  font-size:9.5pt;
  color:#6A5A47;
  margin-top:0.5mm;
}

/* ---------- Skills ---------- */
.resume.hotel-manager .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm 3mm;
  padding-left:1mm;
}
.resume.hotel-manager .skill {
  font-size:9pt;
  letter-spacing:0.03em;
  color:#5A4A38;
  padding:1.3mm 3.5mm;
  background:#F3EAD6;
  border:1px solid #E4D4B0;
  border-radius:2px;
}
.resume.hotel-manager .skill .lvl {
  color:#A9803E;
  font-style:italic;
}

/* ---------- Projects ---------- */
.resume.hotel-manager .proj-name { letter-spacing:0.02em; }
.resume.hotel-manager .proj-role {
  font-weight:400;
  font-style:italic;
  color:#A9803E;
}
.resume.hotel-manager .proj-desc {
  font-size:9.5pt;
  line-height:1.65;
  color:#4A3B2C;
  margin-top:1.5mm;
  text-align:justify;
}

/* ---------- Inline / nowrap contracts ---------- */
.resume.hotel-manager li p, .resume.hotel-manager li div { margin:0; padding:0; display:inline; }
.resume.hotel-manager .skills span, .resume.hotel-manager [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.hotel-manager { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "hotel-manager",
      "version": "1.0.0",
      "name": "酒店管理",
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
