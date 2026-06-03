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
    slug: 'civil-servant',
    name: '公务员',
    category: 'profession',
    html: `<div class="resume civil-servant">
  <header>
    <div class="emblem-line"></div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
    <div class="header-rule"><span class="rule-left"></span><span class="rule-dot"></span><span class="rule-right"></span></div>
  </header>
  {{#if basics.summary}}<section><h2><span class="h2-text">个人简介</span></h2><div class="summary" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2><span class="h2-text">工作经历</span></h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2><span class="h2-text">教育背景</span></h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-detail"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2><span class="h2-text">专业技能</span></h2><div class="skills">{{#each skills}}<span class="skill-item" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2><span class="h2-text">项目经历</span></h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.civil-servant * { margin:0; padding:0; box-sizing:border-box; }
.resume.civil-servant * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.civil-servant {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.55;
  font-family:'Songti SC','SimSun','PingFang SC','Microsoft YaHei',serif;
  color:#1a1a1a;
}

/* ===== Header 红头区，庄重对称 ===== */
.resume.civil-servant header {
  text-align:center;
  margin-bottom:9mm;
}
.resume.civil-servant .emblem-line {
  width:38mm;
  height:3px;
  background:#c01722;
  margin:0 auto 5mm;
}
.resume.civil-servant header h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:8px;
  color:#1a1a1a;
  font-family:'PingFang SC','Microsoft YaHei','Heiti SC',sans-serif;
  margin-bottom:3mm;
  text-indent:8px;
}
.resume.civil-servant header .title {
  font-size:11pt;
  color:#c01722;
  letter-spacing:4px;
  font-weight:600;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  margin-bottom:4mm;
}
.resume.civil-servant header .contact {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:0;
  font-size:9.5pt;
  color:#444;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}
.resume.civil-servant header .contact span {
  position:relative;
  padding:0 5mm;
}
.resume.civil-servant header .contact span + span::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:11px;
  background:#bbb;
}

/* 红头线：左右双线 + 中心标志点，党政庄重 */
.resume.civil-servant .header-rule {
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:6mm;
}
.resume.civil-servant .rule-left,
.resume.civil-servant .rule-right {
  height:0;
  flex:1;
  max-width:74mm;
  border-top:1.6px solid #c01722;
  border-bottom:1.6px solid #c01722;
  height:4px;
}
.resume.civil-servant .rule-dot {
  width:9px;
  height:9px;
  background:#c01722;
  transform:rotate(45deg);
  margin:0 5mm;
  flex:none;
}

/* ===== Section 标题，正黑居中标记 ===== */
.resume.civil-servant section {
  margin-bottom:7mm;
}
.resume.civil-servant section h2 {
  font-size:12.5pt;
  font-weight:700;
  color:#fff;
  font-family:'PingFang SC','Microsoft YaHei','Heiti SC',sans-serif;
  letter-spacing:3px;
  margin-bottom:4.5mm;
  position:relative;
}
.resume.civil-servant section h2 .h2-text {
  display:inline-block;
  background:#c01722;
  padding:1.4mm 6mm 1.4mm 5mm;
  position:relative;
}
.resume.civil-servant section h2 .h2-text::after {
  content:'';
  position:absolute;
  right:-3.5mm;
  top:0;
  bottom:0;
  width:3.5mm;
  background:#8c0f17;
  clip-path:polygon(0 0,100% 50%,0 100%);
}
.resume.civil-servant section h2::after {
  content:'';
  display:block;
  position:absolute;
  left:0; right:0;
  bottom:-1.8mm;
  height:1px;
  background:#d9d9d9;
}

/* ===== Summary ===== */
.resume.civil-servant .summary {
  text-align:justify;
  line-height:1.75;
  color:#2a2a2a;
  padding:0 1mm;
}

/* ===== Entry 通用 ===== */
.resume.civil-servant .entry {
  margin-bottom:4.5mm;
  padding-left:4mm;
  border-left:2px solid #e3c6c8;
}
.resume.civil-servant .entry:last-child { margin-bottom:0; }
.resume.civil-servant .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:2mm;
  margin-bottom:1.5mm;
}
.resume.civil-servant .entry h3 {
  font-size:11pt;
  font-weight:700;
  color:#1a1a1a;
  font-family:'PingFang SC','Microsoft YaHei','Heiti SC',sans-serif;
}
.resume.civil-servant .entry h3 .company {
  color:#c01722;
}
.resume.civil-servant .entry h3 .position {
  color:#333;
  font-weight:600;
}
.resume.civil-servant .entry h3 .company + .position::before {
  content:'｜';
  color:#c9c9c9;
  font-weight:400;
  margin:0 2px;
}
.resume.civil-servant .entry h3 .proj-name { color:#c01722; }
.resume.civil-servant .entry h3 .role { color:#444; font-weight:600; }

.resume.civil-servant .date {
  font-size:9pt;
  color:#777;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  white-space:nowrap;
  letter-spacing:0.5px;
}

.resume.civil-servant .edu-detail {
  font-size:9.8pt;
  color:#444;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== 列表 ===== */
.resume.civil-servant .entry ul,
.resume.civil-servant .proj-desc + ul {
  list-style:none;
  margin-top:1.5mm;
}
.resume.civil-servant .entry ul li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.2mm;
  line-height:1.7;
  text-align:justify;
  color:#2a2a2a;
}
.resume.civil-servant .entry ul li::before {
  content:'';
  position:absolute;
  left:0;
  top:2.6mm;
  width:5px;
  height:5px;
  background:#c01722;
  transform:rotate(45deg);
}

.resume.civil-servant .proj-desc {
  margin-top:1mm;
  line-height:1.7;
  color:#2a2a2a;
  text-align:justify;
}

/* ===== 技能 ===== */
.resume.civil-servant .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.civil-servant .skills .skill-item {
  display:inline-block;
  border:1px solid #c01722;
  color:#c01722;
  padding:1mm 4mm;
  font-size:9.5pt;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  background:#fdf6f6;
}
.resume.civil-servant .skills .skill-item .level {
  color:#8c0f17;
}

/* ===== 收尾必需规则 ===== */
.resume.civil-servant li p, .resume.civil-servant li div { margin:0; padding:0; display:inline; }
.resume.civil-servant .skills span, .resume.civil-servant [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.civil-servant { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "civil-servant",
      "version": "1.0.0",
      "name": "公务员",
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
