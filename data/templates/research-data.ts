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
    slug: 'research-data',
    name: '数据科学家',
    category: 'tech',
    html: `<div class="resume research-data">
  <header>
    <div class="hd-main">
      <div class="hd-prompt">
        <span class="hd-sym">&gt;_</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
      </div>
      {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary">
    <h2><span class="h2-no">/* 01 */</span><span class="h2-tx">个人简介</span></h2>
    <div class="summary-box" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience">
    <h2><span class="h2-no">/* 02 */</span><span class="h2-tx">工作经历</span></h2>
    <div class="timeline">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="node"></span>
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects">
    <h2><span class="h2-no">/* 03 */</span><span class="h2-tx">项目经历</span></h2>
    {{#each projects}}<div class="proj-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills">
    <h2><span class="h2-no">/* 04 */</span><span class="h2-tx">专业技能</span></h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sk-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education">
    <h2><span class="h2-no">/* 05 */</span><span class="h2-tx">教育背景</span></h2>
    {{#each education}}<div class="edu-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> <span class="edu-dot">·</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.research-data * { margin:0; padding:0; box-sizing:border-box; }
.resume.research-data * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.research-data {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#f4f6f9;
  color:#1f2733;
  font-size:10pt;
  line-height:1.6;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
  --rd-blue:#0e7490;
  --rd-blue-deep:#0b5c73;
  --rd-ink:#1f2733;
  --rd-sub:#475569;
  --rd-line:#d8e0ea;
  --rd-panel:#ffffff;
}

/* ===== Header — dark banner accent only ===== */
.resume.research-data header {
  position:relative;
  margin-bottom:9mm;
  padding:8mm 8mm 7mm;
  background:linear-gradient(135deg,#152030 0%,#101a26 100%);
  border-radius:6px;
  overflow:hidden;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.resume.research-data .hd-main { position:relative; }
.resume.research-data .hd-prompt {
  display:flex;
  align-items:center;
  gap:9px;
}
.resume.research-data .hd-sym {
  font-family:'SF Mono','Consolas',monospace;
  color:#5fd6e8;
  font-size:15pt;
  font-weight:700;
}
.resume.research-data h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:1px;
  color:#f0f6fc;
  line-height:1.15;
}
.resume.research-data .hd-title {
  margin-top:6px;
  font-size:10.5pt;
  letter-spacing:0.5px;
  color:#7fdbe8;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.research-data .contact {
  margin-top:12px;
  display:flex;
  flex-wrap:wrap;
  gap:8px 0;
}
.resume.research-data .contact span {
  font-size:8.5pt;
  color:#c4d0de;
  font-family:'SF Mono','Consolas',monospace;
  padding:2px 11px;
  position:relative;
}
.resume.research-data .contact span::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:4px;
  height:4px;
  background:#5fd6e8;
  border-radius:1px;
}
.resume.research-data .contact span:first-child { padding-left:11px; }

/* ===== Section / Heading ===== */
.resume.research-data section {
  position:relative;
  margin-bottom:8mm;
}
.resume.research-data h2 {
  display:flex;
  align-items:baseline;
  gap:10px;
  margin-bottom:5mm;
  padding-bottom:3mm;
  border-bottom:1px solid var(--rd-line);
}
.resume.research-data .h2-no {
  font-family:'SF Mono','Consolas',monospace;
  font-size:8.5pt;
  color:var(--rd-blue);
  letter-spacing:0.5px;
}
.resume.research-data .h2-tx {
  font-size:12.5pt;
  font-weight:700;
  color:var(--rd-ink);
  letter-spacing:1px;
}
.resume.research-data .h2-tx::after {
  content:"";
  display:inline-block;
  width:7px;
  height:13px;
  margin-left:7px;
  vertical-align:-1px;
  background:var(--rd-blue);
}

/* ===== Summary ===== */
.resume.research-data .summary-box {
  position:relative;
  padding:13px 16px;
  background:var(--rd-panel);
  border:1px solid var(--rd-line);
  border-radius:5px;
  font-size:9.5pt;
  color:#2a3441;
  line-height:1.75;
}

/* ===== Timeline / Experience ===== */
.resume.research-data .timeline {
  position:relative;
  padding-left:20px;
}
.resume.research-data .timeline::before {
  content:"";
  position:absolute;
  left:4px;
  top:6px;
  bottom:6px;
  width:1px;
  background:linear-gradient(var(--rd-blue), #a9bccd);
}
.resume.research-data .entry {
  position:relative;
  margin-bottom:7mm;
}
.resume.research-data .entry:last-child { margin-bottom:0; }
.resume.research-data .node {
  position:absolute;
  left:-20px;
  top:4px;
  width:9px;
  height:9px;
  background:#f4f6f9;
  border:2px solid var(--rd-blue);
  border-radius:50%;
}
.resume.research-data .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:5px 12px;
}
.resume.research-data .entry h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--rd-ink);
  line-height:1.4;
}
.resume.research-data .company { color:var(--rd-ink); }
.resume.research-data .position {
  color:var(--rd-blue);
  font-weight:600;
  font-size:10pt;
  margin-left:9px;
  padding-left:9px;
  border-left:1px solid var(--rd-line);
}
.resume.research-data .date {
  font-family:'SF Mono','Consolas',monospace;
  font-size:8pt;
  color:var(--rd-sub);
  white-space:nowrap;
  background:#eef2f7;
  border:1px solid var(--rd-line);
  padding:2px 9px;
  border-radius:3px;
}

/* ===== Lists ===== */
.resume.research-data ul {
  list-style:none;
  margin-top:8px;
}
.resume.research-data li {
  position:relative;
  padding-left:17px;
  margin-bottom:6px;
  font-size:9.3pt;
  color:#2a3441;
  line-height:1.65;
}
.resume.research-data li:last-child { margin-bottom:0; }
.resume.research-data li::before {
  content:"▸";
  position:absolute;
  left:0;
  top:0;
  color:var(--rd-blue);
  font-size:8.5pt;
}

/* ===== Projects ===== */
.resume.research-data .proj-entry {
  margin-bottom:5mm;
  padding:13px 15px;
  background:var(--rd-panel);
  border:1px solid var(--rd-line);
  border-radius:5px;
}
.resume.research-data .proj-entry:last-child { margin-bottom:0; }
.resume.research-data .proj-entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--rd-ink);
  margin-bottom:7px;
  line-height:1.4;
}
.resume.research-data .proj-name { color:var(--rd-ink); }
.resume.research-data .proj-role {
  font-family:'SF Mono','Consolas',monospace;
  font-size:8pt;
  font-weight:600;
  color:#ffffff;
  background:var(--rd-blue);
  padding:1px 8px;
  border-radius:3px;
  margin-left:7px;
  vertical-align:1px;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.resume.research-data .proj-desc {
  font-size:9.2pt;
  color:#3a4654;
  line-height:1.65;
  margin-bottom:5px;
}

/* ===== Skills ===== */
.resume.research-data .skills {
  display:flex;
  flex-wrap:wrap;
  gap:9px;
}
.resume.research-data .skill-chip {
  display:inline-flex;
  align-items:center;
  background:var(--rd-panel);
  border:1px solid var(--rd-line);
  border-radius:4px;
  overflow:hidden;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.research-data .sk-name {
  padding:3px 11px;
  font-size:8.8pt;
  color:#27313d;
  font-weight:600;
}
.resume.research-data .sk-lv {
  padding:3px 10px;
  font-size:8pt;
  color:#ffffff;
  background:var(--rd-blue);
  font-weight:600;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}

/* ===== Education ===== */
.resume.research-data .edu-entry {
  margin-bottom:4mm;
  padding-left:14px;
  border-left:1px solid var(--rd-line);
}
.resume.research-data .edu-entry:last-child { margin-bottom:0; }
.resume.research-data .edu-entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--rd-ink);
  line-height:1.4;
}
.resume.research-data .edu-meta {
  margin-top:4px;
  font-size:9pt;
  color:var(--rd-sub);
}
.resume.research-data .edu-dot { color:var(--rd-blue); }

/* ===== Inline-list normalize ===== */
.resume.research-data li p, .resume.research-data li div { margin:0; padding:0; display:inline; }
.resume.research-data .skills span, .resume.research-data [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

/* ===== Print ===== */
@media print { .resume.research-data { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "research-data",
      "version": "1.0.0",
      "name": "数据科学家",
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
