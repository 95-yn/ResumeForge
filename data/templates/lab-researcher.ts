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
    slug: 'lab-researcher',
    name: '实验研究',
    category: 'profession',
    html: `<div class="resume lab-researcher">
  <header>
    <div class="hd-mark">
      <span class="hd-spec">EXP / DATA</span>
      <span class="hd-sn">N°&nbsp;{{basics.name}}</span>
    </div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="sec sec-summary">
    <h2><span class="h2-idx">00</span><span class="h2-txt">个人简介</span></h2>
    <div class="sum-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="sec" data-section="experience">
    <h2><span class="h2-idx">01</span><span class="h2-txt">工作经历</span></h2>
    {{#each experience}}<div class="entry exp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-grid">
        <span class="date" data-field-wrap>
          <span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span><span class="dash">—</span><span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>
        </span>
        <div class="entry-main">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="sec" data-section="education">
    <h2><span class="h2-idx">02</span><span class="h2-txt">教育背景</span></h2>
    {{#each education}}<div class="entry edu-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-grid">
        <span class="date">
          <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span><span class="dash">—</span><span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>
        </span>
        <div class="entry-main">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span><span class="mid-dot">·</span><span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec" data-section="skills">
    <h2><span class="h2-idx">03</span><span class="h2-txt">专业技能</span></h2>
    <div class="skills">{{#each skills}}<span class="skill-cell" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="sk-sep">·</span><span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="sec" data-section="projects">
    <h2><span class="h2-idx">04</span><span class="h2-txt">项目经历</span></h2>
    {{#each projects}}<div class="entry proj-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.lab-researcher * { margin:0; padding:0; box-sizing:border-box; }
.resume.lab-researcher * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.lab-researcher {
  --ink:#1c2226;
  --slate:#4a555d;
  --grey:#7c8893;
  --line:#d4dadd;
  --line-soft:#e6eaec;
  --teal:#1d9c93;
  --teal-deep:#0f6f68;
  --teal-wash:#e7f4f3;
  --bg-grid:#f4f6f7;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 17mm;
  background:#fff;
  background-image:linear-gradient(var(--bg-grid) 1px,transparent 1px),linear-gradient(90deg,var(--bg-grid) 1px,transparent 1px);
  background-size:5mm 5mm;
  background-position:-1px -1px;
  font-size:10pt;
  line-height:1.5;
  color:var(--ink);
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.lab-researcher header {
  border:1px solid var(--line);
  border-top:3px solid var(--teal);
  background:#fff;
  padding:7mm 8mm 6mm;
  margin-bottom:7mm;
  position:relative;
}
.resume.lab-researcher header::before {
  content:'';
  position:absolute;
  top:3px; left:0; bottom:0;
  width:4px;
  background:repeating-linear-gradient(180deg,var(--teal) 0 4px,transparent 4px 9px);
  opacity:.45;
}
.resume.lab-researcher .hd-mark {
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-family:'SFMono-Regular','Consolas',monospace;
  font-size:7pt;
  letter-spacing:.18em;
  color:var(--grey);
  text-transform:uppercase;
  margin-bottom:3mm;
}
.resume.lab-researcher .hd-spec {
  background:var(--teal-wash);
  color:var(--teal-deep);
  padding:1px 7px;
  border-radius:2px;
  font-weight:600;
}
.resume.lab-researcher .hd-sn { opacity:.8; }
.resume.lab-researcher h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:.04em;
  color:var(--ink);
  line-height:1.1;
}
.resume.lab-researcher .hd-title {
  margin-top:2mm;
  font-size:10.5pt;
  color:var(--teal-deep);
  font-weight:600;
  letter-spacing:.05em;
}
.resume.lab-researcher .contact {
  margin-top:4mm;
  padding-top:3mm;
  border-top:1px dashed var(--line);
  display:flex;
  flex-wrap:wrap;
  gap:5mm;
  font-size:8.5pt;
  color:var(--slate);
  font-family:'SFMono-Regular','Consolas',monospace;
  letter-spacing:.01em;
}
.resume.lab-researcher .contact span {
  position:relative;
  padding-left:11px;
}
.resume.lab-researcher .contact span::before {
  content:'';
  position:absolute;
  left:0; top:50%;
  width:5px; height:5px;
  margin-top:-2.5px;
  border:1px solid var(--teal);
  border-radius:50%;
}

/* ===== Sections ===== */
.resume.lab-researcher .sec { margin-bottom:6mm; }
.resume.lab-researcher h2 {
  display:flex;
  align-items:baseline;
  gap:8px;
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
  padding-bottom:2mm;
  margin-bottom:3.5mm;
  border-bottom:1.5px solid var(--ink);
  position:relative;
  letter-spacing:.06em;
}
.resume.lab-researcher h2::after {
  content:'';
  position:absolute;
  left:0; bottom:-1.5px;
  width:34px; height:1.5px;
  background:var(--teal);
}
.resume.lab-researcher .h2-idx {
  font-family:'SFMono-Regular','Consolas',monospace;
  font-size:8pt;
  font-weight:600;
  color:#fff;
  background:var(--teal-deep);
  padding:1px 5px;
  border-radius:2px;
  letter-spacing:.05em;
}
.resume.lab-researcher .h2-txt { flex:1; }

/* ===== Summary ===== */
.resume.lab-researcher .sum-body {
  font-size:9.5pt;
  color:var(--slate);
  line-height:1.7;
  border-left:2px solid var(--teal);
  padding:1mm 0 1mm 4mm;
  background:linear-gradient(90deg,var(--teal-wash),transparent 60%);
}
.resume.lab-researcher .sum-body p { margin-bottom:1.5mm; }
.resume.lab-researcher .sum-body p:last-child { margin-bottom:0; }

/* ===== Entry grid (data-grid layout) ===== */
.resume.lab-researcher .entry { margin-bottom:4.5mm; }
.resume.lab-researcher .entry:last-child { margin-bottom:0; }
.resume.lab-researcher .entry-grid {
  display:grid;
  grid-template-columns:34mm 1fr;
  gap:5mm;
  align-items:start;
}
.resume.lab-researcher .entry-grid::before {
  display:none;
}
.resume.lab-researcher .date {
  font-family:'SFMono-Regular','Consolas',monospace;
  font-size:8pt;
  color:var(--teal-deep);
  letter-spacing:.02em;
  white-space:nowrap;
  display:inline-block;
  padding:1.5mm 2mm;
  background:var(--bg-grid);
  border:1px solid var(--line-soft);
  border-left:2px solid var(--teal);
  line-height:1.4;
}
.resume.lab-researcher .date .dash { margin:0 4px; color:var(--grey); }

.resume.lab-researcher .entry-main { padding-top:.5mm; }
.resume.lab-researcher h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
  line-height:1.35;
  margin-bottom:1.5mm;
}
.resume.lab-researcher .company { font-weight:700; }
.resume.lab-researcher .position {
  font-weight:600;
  color:var(--teal-deep);
  margin-left:8px;
  padding-left:8px;
  border-left:1px solid var(--line);
  font-size:9.5pt;
}

/* ===== Lists ===== */
.resume.lab-researcher ul {
  list-style:none;
  margin-top:1.5mm;
}
.resume.lab-researcher li {
  position:relative;
  padding-left:13px;
  margin-bottom:1.3mm;
  font-size:9.3pt;
  color:var(--slate);
  line-height:1.6;
}
.resume.lab-researcher li::before {
  content:'';
  position:absolute;
  left:0; top:.62em;
  width:5px; height:5px;
  background:var(--teal);
  transform:rotate(45deg);
}

/* ===== Education ===== */
.resume.lab-researcher .edu-meta {
  font-size:9pt;
  color:var(--grey);
  margin-top:.5mm;
}
.resume.lab-researcher .edu-meta .mid-dot { margin:0 6px; color:var(--teal); }

/* ===== Skills (data grid cells) ===== */
.resume.lab-researcher .skills {
  display:flex;
  flex-wrap:wrap;
  gap:0;
  border:1px solid var(--line);
  border-bottom:none;
  border-right:none;
  background:#fff;
}
.resume.lab-researcher .skills span.skill-cell {
  white-space:nowrap;
  word-break:keep-all;
  font-size:9pt;
  color:var(--ink);
  padding:2mm 4mm;
  border-right:1px solid var(--line);
  border-bottom:1px solid var(--line);
  background:#fff;
  flex:1 1 auto;
  min-width:38mm;
  display:flex;
  align-items:baseline;
}
.resume.lab-researcher .skills span.skill-cell:hover { background:var(--teal-wash); }
.resume.lab-researcher .sk-name { font-weight:600; }
.resume.lab-researcher .sk-sep { margin:0 6px; color:var(--line); }
.resume.lab-researcher .sk-level {
  font-family:'SFMono-Regular','Consolas',monospace;
  font-size:7.5pt;
  color:var(--teal-deep);
  letter-spacing:.02em;
}

/* ===== Projects ===== */
.resume.lab-researcher .proj-entry {
  border:1px solid var(--line-soft);
  border-left:2px solid var(--teal);
  padding:3mm 4mm;
  background:#fff;
}
.resume.lab-researcher .proj-name { font-weight:700; }
.resume.lab-researcher .proj-role {
  font-family:'SFMono-Regular','Consolas',monospace;
  font-size:7.5pt;
  font-weight:600;
  color:var(--teal-deep);
  background:var(--teal-wash);
  padding:1px 6px;
  margin-left:8px;
  border-radius:2px;
  letter-spacing:.04em;
  vertical-align:1px;
}
.resume.lab-researcher .proj-desc {
  font-size:9.3pt;
  color:var(--slate);
  line-height:1.6;
  margin-top:1.2mm;
}

/* ===== Required tail rules ===== */
.resume.lab-researcher li p, .resume.lab-researcher li div { margin:0; padding:0; display:inline; }
.resume.lab-researcher .skills span, .resume.lab-researcher [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.lab-researcher { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .resume.lab-researcher .entry, .resume.lab-researcher .proj-entry { break-inside:avoid; }
  .resume.lab-researcher .sec { break-inside:avoid; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "lab-researcher",
      "version": "1.0.0",
      "name": "实验研究",
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
