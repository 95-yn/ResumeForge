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
    slug: 'fin-fintech',
    name: '金融科技',
    category: 'profession',
    html: `<div class="resume fin-fintech">
  <header>
    <div class="hdr-bg"></div>
    <div class="hdr-inner">
      <div class="hdr-main">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary-card"><h2><span class="dot"></span>个人简介</h2><div class="card" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="dot"></span>工作经历</h2>
    <div class="timeline">
    {{#each experience}}<div class="card entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="dot"></span>项目经历</h2>
    <div class="proj-grid">
    {{#each projects}}<div class="card entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="dot"></span>教育背景</h2>
    {{#each education}}<div class="card entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="dot"></span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}
</div>`,
    css: `.resume.fin-fintech * { margin:0; padding:0; box-sizing:border-box; }
.resume.fin-fintech * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.fin-fintech {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:0 0 18mm;
  background:#f5f7fa; font-size:10pt; line-height:1.55;
  color:#1e2530;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --navy:#14365e; --navy-2:#1d4a7a; --accent:#2f6aa8; --ink:#1e2530; --muted:#5f6b7a;
}

.resume.fin-fintech header { position:relative; overflow:hidden; padding:16mm 18mm 11mm; }
.resume.fin-fintech .hdr-bg {
  position:absolute; inset:0;
  background:var(--navy);
}
.resume.fin-fintech .hdr-bg::after {
  content:''; position:absolute; inset:0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size:8mm 8mm;
}
.resume.fin-fintech .hdr-bg::before {
  content:''; position:absolute; right:14mm; top:0; bottom:0;
  width:3px; background:var(--accent);
}
.resume.fin-fintech .hdr-inner {
  position:relative; display:flex; justify-content:space-between;
  align-items:flex-end; gap:8mm; flex-wrap:wrap;
}
.resume.fin-fintech .hdr-main h1 {
  font-size:25pt; font-weight:800; letter-spacing:1px; color:#fff;
  line-height:1.1;
}
.resume.fin-fintech .hdr-main .title {
  margin-top:3mm; font-size:10.5pt; font-weight:500;
  color:#cbd9ea; letter-spacing:1px;
  display:inline-block;
  position:relative; padding-top:2mm;
}
.resume.fin-fintech .hdr-main .title::before {
  content:''; position:absolute; left:0; top:0;
  width:28px; height:2px; background:var(--accent);
}
.resume.fin-fintech .contact {
  display:flex; flex-direction:column; align-items:flex-end;
  gap:1.6mm; font-size:9pt;
}
.resume.fin-fintech .contact span {
  color:#dbe4f0; position:relative; padding-left:5mm;
}
.resume.fin-fintech .contact span::before {
  content:''; position:absolute; left:0; top:50%; transform:translateY(-50%);
  width:2mm; height:2mm; border-radius:50%;
  background:var(--accent);
}

.resume.fin-fintech section { padding:0 18mm; margin-top:8mm; }
.resume.fin-fintech section.summary-card { margin-top:-6mm; position:relative; z-index:2; }
.resume.fin-fintech h2 {
  display:flex; align-items:center; gap:2.5mm;
  font-size:12.5pt; font-weight:700; color:var(--ink);
  margin-bottom:4mm; letter-spacing:.5px;
}
.resume.fin-fintech h2 .dot {
  width:3mm; height:6mm; border-radius:1px;
  background:var(--navy); display:inline-block;
}

.resume.fin-fintech .card {
  background:#fff; border-radius:6px;
  padding:5mm 6mm;
  border:1px solid #e2e8f0;
  box-shadow:0 1px 4px rgba(20,54,94,.05);
}
.resume.fin-fintech .summary-card .card {
  border-top:2px solid var(--navy);
  font-size:9.8pt; color:#3a4252;
}

.resume.fin-fintech .timeline { display:flex; flex-direction:column; gap:4mm; }
.resume.fin-fintech .entry { position:relative; }
.resume.fin-fintech .entry-head {
  display:flex; justify-content:space-between; align-items:baseline;
  gap:5mm; flex-wrap:wrap; margin-bottom:2mm;
}
.resume.fin-fintech .entry h3 {
  font-size:11pt; font-weight:700; color:var(--ink);
  display:flex; align-items:baseline; gap:3mm; flex-wrap:wrap;
}
.resume.fin-fintech .entry h3 .company { color:var(--navy); }
.resume.fin-fintech .entry h3 .position {
  font-size:9.3pt; font-weight:600; color:var(--accent);
  padding:.6mm 2.6mm; background:#eaf1f8;
  border-radius:3px;
}
.resume.fin-fintech .date {
  font-size:8.6pt; font-weight:600; color:var(--muted);
  white-space:nowrap;
  background:#eef2f6; padding:.8mm 2.8mm; border-radius:3px;
}
.resume.fin-fintech .entry ul { list-style:none; margin-top:1mm; }
.resume.fin-fintech .entry li {
  position:relative; padding-left:5mm; margin-bottom:1.5mm;
  font-size:9.5pt; color:#3a4252; line-height:1.5;
}
.resume.fin-fintech .entry li::before {
  content:''; position:absolute; left:0; top:2.4mm;
  width:2mm; height:2mm; border-radius:50%;
  background:var(--accent);
}

.resume.fin-fintech .proj-grid { display:flex; flex-direction:column; gap:4mm; }
.resume.fin-fintech .entry h3 .role {
  font-size:9pt; font-weight:600; color:var(--muted);
}
.resume.fin-fintech .entry .desc {
  font-size:9.4pt; color:#4a5264; margin:1.5mm 0;
}

.resume.fin-fintech .edu-meta {
  font-size:9.3pt; color:var(--muted); margin-top:1mm;
}

.resume.fin-fintech .skills { display:flex; flex-wrap:wrap; gap:2.5mm; }
.resume.fin-fintech .skill-chip {
  display:inline-flex; align-items:center; gap:2mm;
  font-size:9.3pt; font-weight:600; color:var(--navy);
  padding:1.6mm 4mm; border-radius:3px;
  background:#fff;
  border:1px solid #d3deea;
}
.resume.fin-fintech .skill-chip .lvl {
  font-size:8.2pt; font-weight:600; color:#fff;
  padding:.4mm 2.2mm; border-radius:2px;
  background:var(--accent);
}

.resume.fin-fintech li p, .resume.fin-fintech li div { margin:0; padding:0; display:inline; }
.resume.fin-fintech .skills span, .resume.fin-fintech [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.fin-fintech { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; background:#fff; }
  .resume.fin-fintech .card { box-shadow:none; border:1px solid #e2e8f0; }
  .resume.fin-fintech section { break-inside:avoid; }
  .resume.fin-fintech .entry { break-inside:avoid; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "fin-fintech",
      "version": "1.0.0",
      "name": "金融科技",
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
