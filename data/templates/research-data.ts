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
    <div class="hd-glow"></div>
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
  background:#0f1620;
  color:#cdd6e2;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

.resume.research-data::before {
  content:"";
  position:absolute;
  inset:0;
  background-image:linear-gradient(rgba(45,212,191,0.05) 1px, transparent 1px),linear-gradient(90deg, rgba(45,212,191,0.05) 1px, transparent 1px);
  background-size:22px 22px;
  pointer-events:none;
}

/* ===== Header ===== */
.resume.research-data header {
  position:relative;
  margin-bottom:9mm;
  padding:7mm 7mm 6mm;
  background:linear-gradient(135deg,#152030 0%,#101a26 100%);
  border:1px solid #233143;
  border-left:3px solid #22d3ee;
  border-radius:6px;
  overflow:hidden;
}
.resume.research-data .hd-glow {
  position:absolute;
  top:-40%;
  right:-10%;
  width:55%;
  height:180%;
  background:radial-gradient(ellipse at center, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 70%);
  pointer-events:none;
}
.resume.research-data .hd-main { position:relative; }
.resume.research-data .hd-prompt {
  display:flex;
  align-items:center;
  gap:8px;
}
.resume.research-data .hd-sym {
  font-family:'SF Mono','Consolas',monospace;
  color:#22d3ee;
  font-size:15pt;
  font-weight:700;
  text-shadow:0 0 8px rgba(34,211,238,0.6);
}
.resume.research-data h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:1px;
  color:#f0f6fc;
  line-height:1.1;
}
.resume.research-data .hd-title {
  margin-top:5px;
  font-size:10.5pt;
  letter-spacing:0.5px;
  color:#22d3ee;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.research-data .contact {
  margin-top:11px;
  display:flex;
  flex-wrap:wrap;
  gap:7px 0;
}
.resume.research-data .contact span {
  font-size:8.5pt;
  color:#9fb0c3;
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
  background:#22d3ee;
  border-radius:1px;
}
.resume.research-data .contact span:first-child { padding-left:11px; }

/* ===== Section / Heading ===== */
.resume.research-data section {
  position:relative;
  margin-bottom:7mm;
}
.resume.research-data h2 {
  display:flex;
  align-items:baseline;
  gap:9px;
  margin-bottom:5mm;
  padding-bottom:3mm;
  border-bottom:1px solid #233143;
}
.resume.research-data .h2-no {
  font-family:'SF Mono','Consolas',monospace;
  font-size:8.5pt;
  color:#4a6178;
  letter-spacing:0.5px;
}
.resume.research-data .h2-tx {
  font-size:12.5pt;
  font-weight:700;
  color:#e6edf5;
  letter-spacing:1px;
}
.resume.research-data .h2-tx::after {
  content:"";
  display:inline-block;
  width:7px;
  height:13px;
  margin-left:7px;
  vertical-align:-1px;
  background:#22d3ee;
  box-shadow:0 0 7px rgba(34,211,238,0.55);
  animation:none;
}

/* ===== Summary ===== */
.resume.research-data .summary-box {
  position:relative;
  padding:11px 14px;
  background:#13202d;
  border:1px solid #233143;
  border-radius:5px;
  font-size:9.5pt;
  color:#bcc9d8;
  line-height:1.7;
}

/* ===== Timeline / Experience ===== */
.resume.research-data .timeline {
  position:relative;
  padding-left:18px;
}
.resume.research-data .timeline::before {
  content:"";
  position:absolute;
  left:4px;
  top:6px;
  bottom:6px;
  width:1px;
  background:linear-gradient(#22d3ee, #2a3b4f);
}
.resume.research-data .entry {
  position:relative;
  margin-bottom:6mm;
}
.resume.research-data .entry:last-child { margin-bottom:0; }
.resume.research-data .node {
  position:absolute;
  left:-18px;
  top:4px;
  width:9px;
  height:9px;
  background:#0f1620;
  border:2px solid #22d3ee;
  border-radius:50%;
  box-shadow:0 0 6px rgba(34,211,238,0.6);
}
.resume.research-data .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 10px;
}
.resume.research-data .entry h3 {
  font-size:11pt;
  font-weight:700;
  color:#f0f6fc;
}
.resume.research-data .company { color:#f0f6fc; }
.resume.research-data .position {
  color:#22d3ee;
  font-weight:500;
  font-size:10pt;
  margin-left:9px;
  padding-left:9px;
  border-left:1px solid #2f4254;
}
.resume.research-data .date {
  font-family:'SF Mono','Consolas',monospace;
  font-size:8pt;
  color:#7e93a8;
  white-space:nowrap;
  background:#13202d;
  border:1px solid #233143;
  padding:1px 8px;
  border-radius:3px;
}

/* ===== Lists ===== */
.resume.research-data ul {
  list-style:none;
  margin-top:6px;
}
.resume.research-data li {
  position:relative;
  padding-left:16px;
  margin-bottom:4px;
  font-size:9.3pt;
  color:#b7c4d3;
  line-height:1.6;
}
.resume.research-data li::before {
  content:"▸";
  position:absolute;
  left:0;
  top:0;
  color:#22d3ee;
  font-size:8.5pt;
}

/* ===== Projects ===== */
.resume.research-data .proj-entry {
  margin-bottom:5mm;
  padding:11px 13px;
  background:#13202d;
  border:1px solid #233143;
  border-radius:5px;
  border-top:2px solid #2a3b4f;
  transition:none;
}
.resume.research-data .proj-entry:last-child { margin-bottom:0; }
.resume.research-data .proj-entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#f0f6fc;
  margin-bottom:5px;
}
.resume.research-data .proj-name { color:#f0f6fc; }
.resume.research-data .proj-role {
  font-family:'SF Mono','Consolas',monospace;
  font-size:8pt;
  font-weight:400;
  color:#0f1620;
  background:#22d3ee;
  padding:1px 7px;
  border-radius:3px;
  margin-left:7px;
  vertical-align:1px;
}
.resume.research-data .proj-desc {
  font-size:9.2pt;
  color:#a7b6c7;
  line-height:1.6;
  margin-bottom:3px;
}

/* ===== Skills ===== */
.resume.research-data .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.research-data .skill-chip {
  display:inline-flex;
  align-items:center;
  background:#13202d;
  border:1px solid #2a3b4f;
  border-radius:4px;
  overflow:hidden;
  font-family:'SF Mono','Consolas',monospace;
}
.resume.research-data .sk-name {
  padding:3px 10px;
  font-size:8.8pt;
  color:#dbe5f0;
  font-weight:500;
}
.resume.research-data .sk-lv {
  padding:3px 9px;
  font-size:8pt;
  color:#0f1620;
  background:#22d3ee;
  font-weight:600;
}

/* ===== Education ===== */
.resume.research-data .edu-entry {
  margin-bottom:4mm;
  padding-left:13px;
  border-left:2px solid #2a3b4f;
}
.resume.research-data .edu-entry:last-child { margin-bottom:0; }
.resume.research-data .edu-entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#f0f6fc;
}
.resume.research-data .edu-meta {
  margin-top:3px;
  font-size:9pt;
  color:#9fb0c3;
}
.resume.research-data .edu-dot { color:#22d3ee; }

/* ===== Inline-list normalize ===== */
.resume.research-data li p, .resume.research-data li div { margin:0; padding:0; display:inline; }
.resume.research-data .skills span, .resume.research-data [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

/* ===== Print ===== */
@media print {
  .resume.research-data { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
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
