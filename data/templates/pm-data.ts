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
    slug: 'pm-data',
    name: '数据产品',
    category: 'profession',
    html: `<div class="resume pm-data">
  <header>
    <div class="hdr-grid">
      <div class="hdr-id">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="hdr-metric">
        <span class="hm-spark"></span>
        <span class="hm-label">DATA · PM</span>
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary"><h2><span class="h2-tick">01</span>个人简介</h2><div class="panel" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="sec-exp"><h2><span class="h2-tick">02</span>工作经历</h2>
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="entry">
      <div class="entry-top">
        <h3><span class="e-co" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="e-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span><span class="dsep">—</span><span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="sec-proj"><h2><span class="h2-tick">03</span>项目经历</h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="entry">
      <h3><span class="p-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="p-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="p-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="sec-skills"><h2><span class="h2-tick">04</span>专业技能</h2><div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="skill-chip"><span class="sk-dot"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sk-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if education.length}}<section data-section="education" class="sec-edu"><h2><span class="h2-tick">05</span>教育背景</h2>
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="entry">
      <div class="entry-top">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span><span class="dsep">—</span><span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="edu-dot">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.pm-data * { margin:0; padding:0; box-sizing:border-box; }
.resume.pm-data * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.pm-data {
  --ink:#0b2536;
  --sub:#4a6577;
  --cyan:#06b6d4;
  --blue:#1d6fe0;
  --deep:#0a2f4a;
  --grid:#dbe9f0;
  --chip:#eef7fb;
  --line:#e1ecf2;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:17mm 18mm;
  background:#fff;
  background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);
  background-size:9mm 9mm;
  background-position:-1px -1px;
  font-size:10pt;
  line-height:1.5;
  color:var(--ink);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.pm-data header {
  position:relative;
  background:linear-gradient(135deg,var(--deep) 0%,#0d3a5c 55%,#0e4a6e 100%);
  color:#fff;
  border-radius:10px;
  padding:9mm 9mm 7mm;
  margin-bottom:7mm;
  overflow:hidden;
  box-shadow:0 6px 20px -10px rgba(10,47,74,.6);
}
.resume.pm-data header::before {
  content:"";
  position:absolute;
  inset:0;
  background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
  background-size:7mm 7mm;
}
.resume.pm-data header::after {
  content:"";
  position:absolute;
  right:-4mm; bottom:-10mm;
  width:60mm; height:34mm;
  background:
    linear-gradient(to top,var(--cyan) 0%,var(--cyan) 100%) left 0mm bottom 0 / 5mm 12mm no-repeat,
    linear-gradient(to top,var(--cyan),var(--cyan)) left 7mm bottom 0 / 5mm 20mm no-repeat,
    linear-gradient(to top,#38d6ec,#38d6ec) left 14mm bottom 0 / 5mm 15mm no-repeat,
    linear-gradient(to top,var(--blue),var(--blue)) left 21mm bottom 0 / 5mm 27mm no-repeat,
    linear-gradient(to top,#5ee0f2,#5ee0f2) left 28mm bottom 0 / 5mm 18mm no-repeat,
    linear-gradient(to top,var(--cyan),var(--cyan)) left 35mm bottom 0 / 5mm 24mm no-repeat,
    linear-gradient(to top,var(--blue),var(--blue)) left 42mm bottom 0 / 5mm 14mm no-repeat;
  opacity:.55;
}
.resume.pm-data .hdr-grid {
  position:relative;
  z-index:2;
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:8mm;
}
.resume.pm-data .hdr-id h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:.5px;
  line-height:1.1;
}
.resume.pm-data .hdr-id p {
  margin-top:2.5mm;
  font-size:11pt;
  font-weight:500;
  color:#9fdcef;
  letter-spacing:.3px;
}
.resume.pm-data .hdr-metric {
  position:relative;
  z-index:2;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:2mm;
  flex-shrink:0;
}
.resume.pm-data .hm-spark {
  width:26mm; height:9mm;
  display:block;
  background:
    linear-gradient(to top,var(--cyan),var(--cyan)) left 0mm bottom 0 / 3mm 30% no-repeat,
    linear-gradient(to top,var(--cyan),var(--cyan)) left 4mm bottom 0 / 3mm 55% no-repeat,
    linear-gradient(to top,#5ee0f2,#5ee0f2) left 8mm bottom 0 / 3mm 40% no-repeat,
    linear-gradient(to top,#5ee0f2,#5ee0f2) left 12mm bottom 0 / 3mm 80% no-repeat,
    linear-gradient(to top,var(--cyan),var(--cyan)) left 16mm bottom 0 / 3mm 60% no-repeat,
    linear-gradient(to top,#5ee0f2,#5ee0f2) left 20mm bottom 0 / 3mm 100% no-repeat;
  border-bottom:1.5px solid rgba(94,224,242,.5);
}
.resume.pm-data .hm-label {
  font-size:7.5pt;
  font-weight:700;
  letter-spacing:3px;
  color:#7fcfe5;
}
.resume.pm-data .contact {
  position:relative;
  z-index:2;
  margin-top:6mm;
  display:flex;
  flex-wrap:wrap;
  gap:3mm 6mm;
}
.resume.pm-data .contact span {
  font-size:9pt;
  color:#c9e9f3;
  letter-spacing:.2px;
  display:inline-flex;
  align-items:center;
}
.resume.pm-data .contact span::before {
  content:"";
  width:1.6mm; height:1.6mm;
  margin-right:2mm;
  border-radius:50%;
  background:var(--cyan);
  box-shadow:0 0 0 1.5px rgba(6,182,212,.3);
}

/* ===== Sections ===== */
.resume.pm-data section {
  margin-bottom:6mm;
}
.resume.pm-data h2 {
  display:flex;
  align-items:center;
  gap:3mm;
  font-size:11.5pt;
  font-weight:800;
  color:var(--deep);
  letter-spacing:.5px;
  padding-bottom:2.5mm;
  margin-bottom:4mm;
  border-bottom:2px solid var(--line);
  position:relative;
}
.resume.pm-data h2::after {
  content:"";
  position:absolute;
  left:0; bottom:-2px;
  width:18mm; height:2px;
  background:linear-gradient(90deg,var(--cyan),var(--blue));
}
.resume.pm-data .h2-tick {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:7mm; height:7mm;
  padding:0 1mm;
  border-radius:5px;
  background:linear-gradient(135deg,var(--cyan),var(--blue));
  color:#fff;
  font-size:8pt;
  font-weight:800;
  letter-spacing:.5px;
}

/* ===== Panel / Summary ===== */
.resume.pm-data .panel {
  background:#fff;
  border:1px solid var(--line);
  border-left:3px solid var(--cyan);
  border-radius:7px;
  padding:4mm 5mm;
  font-size:10pt;
  color:var(--sub);
  line-height:1.65;
  box-shadow:0 2px 8px -6px rgba(10,47,74,.25);
}

/* ===== Entries ===== */
.resume.pm-data .entry {
  background:#fff;
  border:1px solid var(--line);
  border-radius:7px;
  padding:4mm 5mm 4mm;
  margin-bottom:3.5mm;
  box-shadow:0 2px 8px -7px rgba(10,47,74,.25);
  position:relative;
}
.resume.pm-data .entry::before {
  content:"";
  position:absolute;
  left:0; top:5mm; bottom:5mm;
  width:3px;
  border-radius:3px;
  background:linear-gradient(var(--cyan),var(--blue));
}
.resume.pm-data .entry:last-child { margin-bottom:0; }
.resume.pm-data .entry-top {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:4mm;
  flex-wrap:wrap;
}
.resume.pm-data .entry h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:0 3mm;
}
.resume.pm-data .e-co { color:var(--deep); font-weight:800; }
.resume.pm-data .e-pos {
  font-size:9.5pt;
  font-weight:600;
  color:var(--blue);
}
.resume.pm-data .e-pos::before {
  content:"";
  display:inline-block;
  width:3mm; height:1px;
  margin-right:2.5mm;
  vertical-align:middle;
  background:var(--grid);
}
.resume.pm-data .date {
  font-size:8.5pt;
  font-weight:600;
  color:var(--cyan);
  white-space:nowrap;
  background:var(--chip);
  padding:1mm 2.5mm;
  border-radius:4px;
  letter-spacing:.3px;
}
.resume.pm-data .date .dsep { margin:0 1mm; color:var(--sub); }

.resume.pm-data .entry ul {
  list-style:none;
  margin-top:3mm;
}
.resume.pm-data .entry li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.8mm;
  font-size:9.7pt;
  color:var(--sub);
  line-height:1.55;
}
.resume.pm-data .entry li:last-child { margin-bottom:0; }
.resume.pm-data .entry li::before {
  content:"";
  position:absolute;
  left:0; top:1.9mm;
  width:2.2mm; height:2.2mm;
  border-radius:1px;
  background:linear-gradient(135deg,var(--cyan),var(--blue));
  transform:rotate(45deg);
}

/* ===== Projects ===== */
.resume.pm-data .sec-proj .entry h3 {
  display:flex;
  align-items:baseline;
  gap:3mm;
  flex-wrap:wrap;
}
.resume.pm-data .p-name { color:var(--deep); font-weight:800; }
.resume.pm-data .p-role {
  font-size:8pt;
  font-weight:700;
  color:var(--cyan);
  background:var(--chip);
  padding:.6mm 2mm;
  border-radius:4px;
  letter-spacing:.3px;
}
.resume.pm-data .p-desc {
  margin-top:2mm;
  font-size:9.5pt;
  color:var(--sub);
  line-height:1.6;
}

/* ===== Skills ===== */
.resume.pm-data .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
}
.resume.pm-data .skill-chip {
  display:inline-flex;
  align-items:center;
  gap:1.8mm;
  background:var(--chip);
  border:1px solid var(--line);
  border-radius:6px;
  padding:1.6mm 3mm;
  font-size:9pt;
  font-weight:600;
  color:var(--deep);
}
.resume.pm-data .sk-dot {
  width:2mm; height:2mm;
  border-radius:50%;
  background:linear-gradient(135deg,var(--cyan),var(--blue));
  flex-shrink:0;
}
.resume.pm-data .sk-lv {
  font-size:8pt;
  font-weight:600;
  color:var(--cyan);
  padding-left:1.8mm;
  border-left:1px solid var(--grid);
}

/* ===== Education ===== */
.resume.pm-data .sec-edu .entry h3 {
  font-size:10.5pt;
  font-weight:800;
  color:var(--deep);
}
.resume.pm-data .edu-meta {
  margin-top:1.8mm;
  font-size:9.3pt;
  color:var(--sub);
}
.resume.pm-data .edu-dot { margin:0 2mm; color:var(--cyan); }

/* ===== Contract-required tail ===== */
.resume.pm-data li p, .resume.pm-data li div { margin:0; padding:0; display:inline; }
.resume.pm-data .skills span, .resume.pm-data [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.pm-data { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.pm-data .entry, .resume.pm-data .panel { break-inside:avoid; }
  .resume.pm-data section { break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "pm-data",
      "version": "1.0.0",
      "name": "数据产品",
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
