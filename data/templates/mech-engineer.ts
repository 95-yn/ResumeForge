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
    slug: 'mech-engineer',
    name: '机械工程',
    category: 'profession',
    html: `<div class="resume mech-engineer">
  <header class="me-header">
    <div class="me-header-bar">
      <div class="me-id-block">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="me-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="me-spec-tag">
        <span class="me-spec-label">SPEC</span>
        <span class="me-spec-rev">REV.A</span>
      </div>
    </div>
    <div class="me-contact-rail">
      <div class="contact">
        {{#if basics.email}}<span class="me-cell" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="me-cell" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="me-cell" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="me-section me-summary">
    <h2><span class="me-h2-num">01</span><span class="me-h2-txt">个人简介</span></h2>
    <div class="me-callout" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="me-section" data-section="experience">
    <h2><span class="me-h2-num">02</span><span class="me-h2-txt">工作经历</span></h2>
    {{#each experience}}<div class="me-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="me-entry-head">
        <h3>
          <span class="me-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="me-position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        <span class="date me-dim">
          <span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>
          <span class="me-arrow">—</span>
          <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>
        </span>
      </div>
      {{#if highlights.length}}<ul class="me-bullets">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="me-section" data-section="education">
    <h2><span class="me-h2-num">03</span><span class="me-h2-txt">教育背景</span></h2>
    {{#each education}}<div class="me-entry me-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="me-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date me-dim">
          <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>
          <span class="me-arrow">—</span>
          <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>
        </span>
      </div>
      <p class="me-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="me-section" data-section="skills">
    <h2><span class="me-h2-num">04</span><span class="me-h2-txt">专业技能</span></h2>
    <div class="skills me-skills">{{#each skills}}<span class="me-skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="me-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="me-skill-sep">·</span> <span class="me-skill-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="me-section" data-section="projects">
    <h2><span class="me-h2-num">05</span><span class="me-h2-txt">项目经历</span></h2>
    {{#each projects}}<div class="me-entry me-proj" data-entry="projects" data-entry-index="{{@index}}">
      <div class="me-entry-head">
        <h3>
          <span class="me-proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}} <span class="me-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </h3>
      </div>
      {{#if description}}<div class="me-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="me-bullets">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.mech-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.mech-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.mech-engineer {
  --me-steel:#2b2f36;
  --me-ink:#1c1f24;
  --me-gray:#4a4f57;
  --me-mute:#7a808a;
  --me-line:#c9ccd1;
  --me-faint:#e6e8eb;
  --me-orange:#ff5a1f;
  --me-orange-d:#d9410f;
  --me-paper:#fff;
  --me-panel:#f4f5f6;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 17mm;
  background:var(--me-paper);
  color:var(--me-ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

/* corner registration marks */
.resume.mech-engineer::before {
  content:"";
  position:absolute;
  top:8mm; left:8mm; right:8mm; bottom:8mm;
  border:1px solid var(--me-faint);
  pointer-events:none;
}

/* ===== HEADER ===== */
.resume.mech-engineer .me-header {
  position:relative;
  margin-bottom:9mm;
  padding-bottom:5mm;
  border-bottom:2px solid var(--me-steel);
}
.resume.mech-engineer .me-header-bar {
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:8mm;
  position:relative;
  padding:5mm 6mm 5mm 7mm;
  background:
    repeating-linear-gradient(135deg, var(--me-steel) 0 6px, #353a42 6px 12px);
  color:#fff;
  overflow:hidden;
}
.resume.mech-engineer .me-header-bar::before {
  content:"";
  position:absolute;
  left:0; top:0; bottom:0;
  width:5px;
  background:var(--me-orange);
}
.resume.mech-engineer .me-id-block { position:relative; z-index:1; }
.resume.mech-engineer .me-header h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
  color:#fff;
}
.resume.mech-engineer .me-title {
  margin-top:2mm;
  font-size:10pt;
  font-weight:500;
  letter-spacing:3px;
  color:var(--me-orange);
  text-transform:uppercase;
}
.resume.mech-engineer .me-spec-tag {
  flex-shrink:0;
  position:relative;
  z-index:1;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:2px;
  font-family:'SFMono-Regular',Consolas,'Courier New',monospace;
}
.resume.mech-engineer .me-spec-label {
  font-size:8pt;
  font-weight:700;
  letter-spacing:4px;
  padding:1px 7px;
  border:1px solid var(--me-orange);
  color:var(--me-orange);
}
.resume.mech-engineer .me-spec-rev {
  font-size:7.5pt;
  letter-spacing:2px;
  color:#aeb3bb;
}

.resume.mech-engineer .me-contact-rail {
  margin-top:4mm;
  padding-left:1mm;
}
.resume.mech-engineer .contact {
  display:flex;
  flex-wrap:wrap;
  gap:4mm 7mm;
  font-family:'SFMono-Regular',Consolas,'Courier New',monospace;
  font-size:9pt;
}
.resume.mech-engineer .me-cell {
  position:relative;
  padding-left:5mm;
  color:var(--me-gray);
  white-space:nowrap;
}
.resume.mech-engineer .me-cell::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  width:3mm; height:1px;
  background:var(--me-orange);
  transform:translateY(-50%);
}

/* ===== SECTIONS ===== */
.resume.mech-engineer .me-section { margin-bottom:7mm; }
.resume.mech-engineer .me-section h2 {
  display:flex;
  align-items:center;
  gap:3mm;
  margin-bottom:4mm;
  padding-bottom:2mm;
  border-bottom:1px solid var(--me-line);
  position:relative;
}
.resume.mech-engineer .me-section h2::after {
  content:"";
  position:absolute;
  left:0; bottom:-1px;
  width:18mm; height:2px;
  background:var(--me-orange);
}
.resume.mech-engineer .me-h2-num {
  font-family:'SFMono-Regular',Consolas,'Courier New',monospace;
  font-size:9pt;
  font-weight:700;
  color:#fff;
  background:var(--me-steel);
  padding:1px 5px;
  letter-spacing:1px;
}
.resume.mech-engineer .me-h2-txt {
  font-size:12pt;
  font-weight:700;
  letter-spacing:2px;
  color:var(--me-steel);
}

/* summary callout */
.resume.mech-engineer .me-callout {
  position:relative;
  padding:3.5mm 4mm 3.5mm 6mm;
  background:var(--me-panel);
  border-left:3px solid var(--me-orange);
  color:var(--me-gray);
  font-size:10pt;
  line-height:1.65;
}

/* ===== ENTRIES ===== */
.resume.mech-engineer .me-entry {
  position:relative;
  padding:3mm 0 3mm 7mm;
  margin-bottom:1mm;
}
.resume.mech-engineer .me-entry::before {
  content:"";
  position:absolute;
  left:1mm; top:4mm; bottom:4mm;
  width:1px;
  background:var(--me-line);
}
.resume.mech-engineer .me-entry::after {
  content:"";
  position:absolute;
  left:0; top:4.5mm;
  width:2mm; height:2mm;
  background:var(--me-orange);
  transform:rotate(45deg);
}
.resume.mech-engineer .me-entry:last-child::before { bottom:auto; height:9mm; }

.resume.mech-engineer .me-entry-head {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:5mm;
  flex-wrap:wrap;
}
.resume.mech-engineer .me-entry h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--me-ink);
  line-height:1.3;
}
.resume.mech-engineer .me-company { color:var(--me-steel); }
.resume.mech-engineer .me-position {
  margin-left:3mm;
  font-weight:500;
  color:var(--me-orange-d);
  font-size:10pt;
}
.resume.mech-engineer .me-position::before {
  content:"/ ";
  color:var(--me-line);
  font-weight:400;
}

.resume.mech-engineer .date.me-dim {
  flex-shrink:0;
  font-family:'SFMono-Regular',Consolas,'Courier New',monospace;
  font-size:8.5pt;
  letter-spacing:0.5px;
  color:var(--me-mute);
  padding:0 2mm;
  border:1px solid var(--me-faint);
  border-radius:2px;
  white-space:nowrap;
  background:var(--me-paper);
}
.resume.mech-engineer .me-arrow { color:var(--me-orange); margin:0 1px; }

/* bullets */
.resume.mech-engineer .me-bullets {
  list-style:none;
  margin-top:2.5mm;
}
.resume.mech-engineer .me-bullets li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.5mm;
  color:var(--me-gray);
  line-height:1.55;
}
.resume.mech-engineer .me-bullets li::before {
  content:"▸";
  position:absolute;
  left:0; top:0;
  color:var(--me-orange);
  font-size:9pt;
}

/* education meta */
.resume.mech-engineer .me-edu-meta {
  margin-top:1.5mm;
  font-size:9.5pt;
  color:var(--me-gray);
  font-family:'SFMono-Regular',Consolas,'Courier New',monospace;
  letter-spacing:0.3px;
}

/* ===== SKILLS ===== */
.resume.mech-engineer .me-skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.mech-engineer .me-skill-chip {
  display:inline-flex;
  align-items:baseline;
  gap:1mm;
  padding:1.5mm 3mm;
  background:var(--me-panel);
  border:1px solid var(--me-line);
  border-left:2px solid var(--me-steel);
  font-family:'SFMono-Regular',Consolas,'Courier New',monospace;
  font-size:9pt;
}
.resume.mech-engineer .me-skill-name {
  font-weight:600;
  color:var(--me-steel);
}
.resume.mech-engineer .me-skill-sep { color:var(--me-line); }
.resume.mech-engineer .me-skill-lvl {
  color:var(--me-orange-d);
  font-size:8.5pt;
}

/* ===== PROJECTS ===== */
.resume.mech-engineer .me-proj-name { color:var(--me-steel); font-weight:700; }
.resume.mech-engineer .me-proj-role {
  margin-left:2mm;
  font-size:9.5pt;
  font-weight:500;
  color:var(--me-orange-d);
}
.resume.mech-engineer .me-proj-role::before { content:"· "; color:var(--me-line); }
.resume.mech-engineer .me-proj-desc {
  margin-top:2mm;
  color:var(--me-gray);
  line-height:1.6;
  font-size:9.5pt;
}

/* required inline rules */
.resume.mech-engineer li p, .resume.mech-engineer li div { margin:0; padding:0; display:inline; }
.resume.mech-engineer .skills span, .resume.mech-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.mech-engineer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "mech-engineer",
      "version": "1.0.0",
      "name": "机械工程",
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
