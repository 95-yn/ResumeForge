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
    slug: 'barista',
    name: '咖啡师',
    category: 'profession',
    html: `<div class="resume barista">
  <header>
    <div class="brand-stamp">
      <span class="cup">☕</span>
      <span class="roast">ROAST&nbsp;·&nbsp;CV</span>
    </div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="summary">
    <h2><span class="bean">●</span>杯测笔记<span class="en">CUPPING NOTES</span></h2>
    <div class="note-card" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="block">
    <h2><span class="bean">●</span>冲煮履历<span class="en">BREW LOG</span></h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3>
          <span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="sep">/</span>
          <span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span><span class="dash">—</span><span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="block">
    <h2><span class="bean">●</span>教育背景<span class="en">ORIGIN</span></h2>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span><span class="dash">—</span><span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="mid">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="block">
    <h2><span class="bean">●</span>风味轮<span class="en">FLAVOR WHEEL</span></h2>
    <div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span class="dot"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="lv"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="block">
    <h2><span class="bean">●</span>限定特调<span class="en">SIGNATURE</span></h2>
    {{#each projects}}<div class="entry proj" data-entry="projects" data-entry-index="{{@index}}">
      <h3>
        <span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="role"> · <span data-field="projects.{{@index}}.role">{{{role}}}</span></span>{{/if}}
      </h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.barista * { margin:0; padding:0; box-sizing:border-box; }
.resume.barista * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.barista {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 17mm;
  background:#e8dcc4;
  background-image:
    radial-gradient(circle at 12% 8%, rgba(90,54,30,0.05) 0, transparent 38%),
    radial-gradient(circle at 88% 30%, rgba(90,54,30,0.045) 0, transparent 32%),
    radial-gradient(circle at 50% 95%, rgba(90,54,30,0.04) 0, transparent 40%),
    repeating-linear-gradient(0deg, rgba(120,80,48,0.018) 0, rgba(120,80,48,0.018) 1px, transparent 1px, transparent 4px);
  color:#3a2415;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

/* ===== Header ===== */
.resume.barista header {
  border-bottom:2.5px solid #4a2c18;
  padding-bottom:14px;
  margin-bottom:20px;
  position:relative;
}
.resume.barista .brand-stamp {
  display:inline-flex;
  align-items:center;
  gap:7px;
  border:1.5px solid #6b4226;
  border-radius:40px;
  padding:3px 12px 3px 9px;
  margin-bottom:11px;
  background:rgba(255,250,240,0.35);
}
.resume.barista .brand-stamp .cup { font-size:12pt; line-height:1; }
.resume.barista .brand-stamp .roast {
  font-size:7.5pt;
  letter-spacing:0.22em;
  font-weight:700;
  color:#6b4226;
}
.resume.barista header h1 {
  font-size:30pt;
  font-weight:800;
  letter-spacing:0.04em;
  color:#33200f;
  line-height:1.05;
}
.resume.barista header .title {
  display:inline-block;
  margin-top:6px;
  font-size:11pt;
  font-weight:600;
  color:#7a4a28;
  letter-spacing:0.05em;
  border-bottom:1.5px dotted #a06a3f;
  padding-bottom:1px;
}
.resume.barista .contact {
  margin-top:11px;
  display:flex;
  flex-wrap:wrap;
  gap:7px 14px;
  font-size:9pt;
}
.resume.barista .contact span {
  position:relative;
  padding-left:13px;
  color:#5a3a22;
  letter-spacing:0.02em;
}
.resume.barista .contact span::before {
  content:'';
  position:absolute;
  left:0; top:50%;
  width:5px; height:5px;
  margin-top:-2.5px;
  border-radius:50%;
  background:#8a5a32;
  box-shadow:0 0 0 1.5px rgba(138,90,50,0.3);
}

/* ===== Section headings ===== */
.resume.barista h2 {
  display:flex;
  align-items:baseline;
  gap:8px;
  font-size:12.5pt;
  font-weight:800;
  color:#4a2c18;
  letter-spacing:0.05em;
  margin-bottom:11px;
  padding-bottom:5px;
  border-bottom:1px dashed #b08a5e;
}
.resume.barista h2 .bean {
  font-size:7pt;
  color:#8a4f2a;
  position:relative;
  top:-2px;
}
.resume.barista h2 .en {
  margin-left:auto;
  font-size:7pt;
  font-weight:600;
  letter-spacing:0.28em;
  color:#a07a52;
}
.resume.barista section { margin-bottom:18px; }

/* ===== Summary card ===== */
.resume.barista .note-card {
  position:relative;
  background:rgba(255,250,242,0.55);
  border:1px solid #c8a878;
  border-radius:6px;
  padding:11px 14px 11px 19px;
  font-size:9.7pt;
  line-height:1.7;
  color:#43291a;
  box-shadow:1px 1px 0 rgba(74,44,24,0.08);
}
.resume.barista .note-card::before {
  content:'';
  position:absolute;
  left:9px; top:15px;
  width:6px; height:6px;
  border-radius:50% 50% 50% 0;
  background:#7a4a28;
  transform:rotate(45deg);
}

/* ===== Entries ===== */
.resume.barista .entry {
  padding:0 0 12px 16px;
  margin-bottom:12px;
  position:relative;
  border-left:1.5px solid #c8a878;
}
.resume.barista .entry:last-child { margin-bottom:0; padding-bottom:2px; }
.resume.barista .entry::before {
  content:'';
  position:absolute;
  left:-5.5px; top:5px;
  width:9px; height:9px;
  border-radius:50%;
  background:#e8dcc4;
  border:2px solid #6b4226;
}
.resume.barista .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
  margin-bottom:5px;
}
.resume.barista .entry h3 {
  font-size:11pt;
  font-weight:700;
  color:#33200f;
  line-height:1.35;
}
.resume.barista .entry h3 .sep { color:#a06a3f; margin:0 5px; font-weight:400; }
.resume.barista .entry h3 .position { color:#7a4a28; font-weight:600; }
.resume.barista .entry .date {
  font-size:8pt;
  font-weight:700;
  letter-spacing:0.04em;
  color:#6b4226;
  white-space:nowrap;
  background:rgba(122,74,40,0.1);
  border-radius:30px;
  padding:2px 9px;
}
.resume.barista .entry .date .dash { margin:0 3px; }

.resume.barista .entry ul { list-style:none; margin-top:4px; }
.resume.barista .entry li {
  position:relative;
  padding-left:15px;
  margin-bottom:3px;
  font-size:9.5pt;
  line-height:1.55;
  color:#43291a;
}
.resume.barista .entry li::before {
  content:'';
  position:absolute;
  left:1px; top:7px;
  width:5px; height:5px;
  border-radius:50% 50% 50% 0;
  background:#8a5a32;
  transform:rotate(45deg);
}

/* ===== Education ===== */
.resume.barista .edu-meta {
  font-size:9.3pt;
  color:#5a3a22;
}
.resume.barista .edu-meta .mid { color:#a06a3f; margin:0 6px; }

/* ===== Skills / flavor wheel ===== */
.resume.barista .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.barista .chip {
  display:inline-flex;
  align-items:center;
  gap:6px;
  font-size:9pt;
  font-weight:600;
  color:#4a2c18;
  background:rgba(255,250,242,0.6);
  border:1px solid #b89060;
  border-radius:30px;
  padding:4px 12px 4px 10px;
}
.resume.barista .chip .dot {
  width:7px; height:7px;
  border-radius:50%;
  background:radial-gradient(circle at 35% 35%, #b07840, #5a3219);
  flex:none;
}
.resume.barista .chip .lv { color:#8a5a32; font-weight:500; }

/* ===== Projects ===== */
.resume.barista .proj h3 { margin-bottom:4px; }
.resume.barista .proj h3 .role { color:#7a4a28; font-weight:600; }
.resume.barista .proj .desc {
  font-size:9.4pt;
  line-height:1.6;
  color:#43291a;
  margin-bottom:4px;
}

/* ===== Contract-required tail ===== */
.resume.barista li p, .resume.barista li div { margin:0; padding:0; display:inline; }
.resume.barista .skills span, .resume.barista [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.barista { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "barista",
      "version": "1.0.0",
      "name": "咖啡师",
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
