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
    slug: 'logistics-coord',
    name: '物流协调',
    category: 'profession',
    html: `<div class="resume logistics-coord">
  <header>
    <div class="route-tag">CARGO ROUTE</div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="summary-sec"><h2>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience" class="route-sec"><h2>工作经历</h2>
    <div class="route-line">
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="node">
      <div class="node-marker"></div>
      <div class="node-body">
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}
  {{#if education.length}}<section data-section="education" class="route-sec"><h2>教育背景</h2>
    <div class="route-line">
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="node">
      <div class="node-marker"></div>
      <div class="node-body">
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills" class="skills-sec"><h2>专业技能</h2><div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="skill-chip"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects" class="route-sec"><h2>项目经历</h2>
    <div class="route-line">
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="node">
      <div class="node-marker"></div>
      <div class="node-body">
        <h3><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.logistics-coord * { margin:0; padding:0; box-sizing:border-box; }
.resume.logistics-coord * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.logistics-coord {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  background-image:
    linear-gradient(#eceef1 1px, transparent 1px),
    linear-gradient(90deg, #eceef1 1px, transparent 1px);
  background-size:14mm 14mm;
  font-size:10pt;
  line-height:1.5;
  color:#2b3038;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.logistics-coord header {
  position:relative;
  background:#363b45;
  color:#fff;
  padding:9mm 10mm;
  border-radius:6px;
  border-left:6px solid #d93025;
  margin-bottom:9mm;
  overflow:hidden;
}
.resume.logistics-coord header::after {
  content:"";
  position:absolute;
  right:-30px;
  top:-30px;
  width:120px;
  height:120px;
  border:14px solid rgba(217,48,37,0.16);
  border-radius:50%;
}
.resume.logistics-coord header::before {
  content:"";
  position:absolute;
  right:18px;
  top:34px;
  width:18px;
  height:18px;
  background:#d93025;
  border:4px solid #fff;
  border-radius:50% 50% 50% 0;
  transform:rotate(-45deg);
  box-shadow:0 0 0 3px rgba(217,48,37,0.3);
}
.resume.logistics-coord .route-tag {
  display:inline-block;
  font-size:7pt;
  letter-spacing:3px;
  font-weight:700;
  color:#ff8a80;
  border:1px solid rgba(255,138,128,0.5);
  padding:2px 8px;
  border-radius:3px;
  margin-bottom:7px;
}
.resume.logistics-coord header h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:2px;
  line-height:1.1;
}
.resume.logistics-coord header p {
  font-size:11pt;
  color:#c3c8d1;
  margin-top:4px;
  font-weight:500;
}
.resume.logistics-coord .contact {
  margin-top:9px;
  display:flex;
  flex-wrap:wrap;
  gap:7px 16px;
  font-size:8.5pt;
  color:#dfe2e7;
}
.resume.logistics-coord .contact span {
  position:relative;
  padding-left:13px;
}
.resume.logistics-coord .contact span::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:6px;
  height:6px;
  background:#d93025;
  border-radius:50%;
}

/* ===== Section heading ===== */
.resume.logistics-coord section { margin-bottom:8mm; }
.resume.logistics-coord h2 {
  position:relative;
  font-size:11.5pt;
  font-weight:700;
  color:#363b45;
  letter-spacing:1px;
  padding:0 0 6px 22px;
  margin-bottom:7mm;
  border-bottom:2px solid #363b45;
}
.resume.logistics-coord h2::before {
  content:"";
  position:absolute;
  left:0;
  top:1px;
  width:13px;
  height:13px;
  background:#d93025;
  border-radius:50% 50% 50% 0;
  transform:rotate(-45deg);
}
.resume.logistics-coord h2::after {
  content:"";
  position:absolute;
  left:4px;
  top:5px;
  width:5px;
  height:5px;
  background:#fff;
  border-radius:50%;
  z-index:1;
}

/* ===== Summary ===== */
.resume.logistics-coord .summary-sec > div {
  background:rgba(255,255,255,0.7);
  border:1px dashed #b9bec7;
  border-left:4px solid #d93025;
  padding:10px 14px;
  border-radius:4px;
  color:#454b55;
  font-size:9.5pt;
}

/* ===== Route line (milestone nodes) ===== */
.resume.logistics-coord .route-line {
  position:relative;
  padding-left:7mm;
}
.resume.logistics-coord .route-line::before {
  content:"";
  position:absolute;
  left:6px;
  top:6px;
  bottom:6px;
  width:0;
  border-left:2px dashed #aab0ba;
}
.resume.logistics-coord .node {
  position:relative;
  margin-bottom:6mm;
}
.resume.logistics-coord .node:last-child { margin-bottom:0; }
.resume.logistics-coord .node-marker {
  position:absolute;
  left:-7mm;
  top:3px;
  width:14px;
  height:14px;
  margin-left:-7px;
  background:#fff;
  border:3px solid #d93025;
  border-radius:50%;
  z-index:2;
}
.resume.logistics-coord .node-marker::after {
  content:"";
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width:4px;
  height:4px;
  background:#d93025;
  border-radius:50%;
}
.resume.logistics-coord .node-body {
  background:rgba(255,255,255,0.78);
  border:1px solid #dde0e5;
  border-radius:5px;
  padding:8px 13px 10px;
}
.resume.logistics-coord .node .date {
  display:inline-block;
  font-size:7.5pt;
  font-weight:700;
  letter-spacing:0.5px;
  color:#d93025;
  background:#fbe6e4;
  padding:2px 8px;
  border-radius:3px;
  margin-bottom:5px;
}
.resume.logistics-coord .node h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#2b3038;
  margin-bottom:3px;
  display:flex;
  flex-wrap:wrap;
  align-items:baseline;
  gap:9px;
}
.resume.logistics-coord .node h3 .position,
.resume.logistics-coord .node h3 .position[data-field] {
  font-size:9pt;
  font-weight:500;
  color:#6a717c;
}
.resume.logistics-coord .node h3 .company { color:#363b45; }
.resume.logistics-coord .node p {
  font-size:9pt;
  color:#5a616b;
  margin-top:2px;
}
.resume.logistics-coord .proj-desc {
  font-size:9pt;
  color:#5a616b;
  margin:2px 0 4px;
}
.resume.logistics-coord .node ul {
  list-style:none;
  margin-top:5px;
}
.resume.logistics-coord .node li {
  position:relative;
  padding-left:15px;
  font-size:9.3pt;
  color:#454b55;
  margin-bottom:3px;
  line-height:1.45;
}
.resume.logistics-coord .node li::before {
  content:"";
  position:absolute;
  left:1px;
  top:6px;
  width:6px;
  height:6px;
  background:#d93025;
  border-radius:50% 50% 50% 0;
  transform:rotate(-45deg);
}

/* ===== Skills ===== */
.resume.logistics-coord .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.logistics-coord .skill-chip {
  display:inline-block;
  font-size:8.8pt;
  font-weight:500;
  color:#363b45;
  background:#fff;
  border:1px solid #cfd3da;
  border-left:3px solid #d93025;
  padding:4px 11px;
  border-radius:3px;
}

/* ===== inline & nowrap contract ===== */
.resume.logistics-coord li p, .resume.logistics-coord li div { margin:0; padding:0; display:inline; }
.resume.logistics-coord .skills span, .resume.logistics-coord [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.logistics-coord { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "logistics-coord",
      "version": "1.0.0",
      "name": "物流协调",
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
