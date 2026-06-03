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
    slug: 'bauhaus',
    name: '包豪斯',
    category: 'creative',
    html: `<div class="resume bauhaus">
  <header>
    <div class="bh-blocks" aria-hidden="true">
      <span class="bh-sq bh-red"></span>
      <span class="bh-sq bh-yellow"></span>
      <span class="bh-circ bh-blue"></span>
    </div>
    <div class="bh-head-text">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="bh-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="bh-summary"><h2><span class="bh-tag">01</span>个人简介</h2><div class="bh-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="bh-tag bh-tag-red">02</span>工作经历</h2>
    {{#each experience}}<div class="bh-entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="bh-bar bh-bar-red" aria-hidden="true"></span>
      <div class="bh-entry-main">
        <h3><span class="bh-co" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="bh-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="bh-tag bh-tag-blue">03</span>教育背景</h2>
    {{#each education}}<div class="bh-entry" data-entry="education" data-entry-index="{{@index}}">
      <span class="bh-bar bh-bar-blue" aria-hidden="true"></span>
      <div class="bh-entry-main">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <p class="bh-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="bh-tag bh-tag-yellow">04</span>专业技能</h2><div class="skills">{{#each skills}}<span class="bh-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="bh-skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="bh-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="bh-tag bh-tag-red">05</span>项目经历</h2>
    {{#each projects}}<div class="bh-entry" data-entry="projects" data-entry-index="{{@index}}">
      <span class="bh-bar bh-bar-mix" aria-hidden="true"></span>
      <div class="bh-entry-main">
        <h3><span class="bh-pj" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="bh-pj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="bh-pj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.bauhaus * { margin:0; padding:0; box-sizing:border-box; }
.resume.bauhaus * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.bauhaus {
  --bh-red:#e63329;
  --bh-yellow:#f5c518;
  --bh-blue:#1f4fd8;
  --bh-ink:#15151a;
  --bh-line:#15151a;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  color:var(--bh-ink);
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

/* ---------- Header ---------- */
.resume.bauhaus header {
  position:relative;
  border:3px solid var(--bh-line);
  margin-bottom:9mm;
  display:flex;
  align-items:stretch;
  overflow:hidden;
}
.resume.bauhaus .bh-blocks {
  flex:0 0 34mm;
  position:relative;
  border-right:3px solid var(--bh-line);
  background:#fff;
  display:block;
}
.resume.bauhaus .bh-sq,
.resume.bauhaus .bh-circ { position:absolute; display:block; }
.resume.bauhaus .bh-red {
  top:0; left:0;
  width:55%; height:50%;
  background:var(--bh-red);
  border-bottom:3px solid var(--bh-line);
  border-right:3px solid var(--bh-line);
}
.resume.bauhaus .bh-yellow {
  top:0; right:0;
  width:45%; height:50%;
  background:var(--bh-yellow);
}
.resume.bauhaus .bh-circ.bh-blue {
  bottom:0; left:0;
  width:100%; height:50%;
  background:var(--bh-blue);
  border-radius:0 0 50% 0;
}

.resume.bauhaus .bh-head-text {
  flex:1 1 auto;
  padding:8mm 8mm 6mm;
  display:flex;
  flex-direction:column;
  justify-content:center;
  min-width:0;
}
.resume.bauhaus header h1 {
  font-size:30pt;
  font-weight:900;
  letter-spacing:1px;
  line-height:1.05;
  text-transform:uppercase;
}
.resume.bauhaus .bh-title {
  margin-top:3mm;
  display:inline-block;
  align-self:flex-start;
  background:var(--bh-blue);
  color:#fff;
  font-weight:700;
  font-size:10.5pt;
  letter-spacing:.5px;
  padding:1.5mm 3mm;
}
.resume.bauhaus .contact {
  margin-top:4mm;
  display:flex;
  flex-wrap:wrap;
  gap:2mm 5mm;
  font-size:9pt;
  font-weight:600;
}
.resume.bauhaus .contact span {
  position:relative;
  padding-left:4mm;
}
.resume.bauhaus .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:2.4mm; height:2.4mm;
  background:var(--bh-red);
}
.resume.bauhaus .contact span:nth-child(2)::before { background:var(--bh-yellow); }
.resume.bauhaus .contact span:nth-child(3)::before { background:var(--bh-blue); }

/* ---------- Sections ---------- */
.resume.bauhaus section { margin-bottom:8mm; }
.resume.bauhaus h2 {
  display:flex;
  align-items:center;
  gap:3mm;
  font-size:14pt;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
  padding-bottom:2mm;
  margin-bottom:5mm;
  border-bottom:3px solid var(--bh-line);
}
.resume.bauhaus .bh-tag {
  display:inline-block;
  min-width:8mm;
  text-align:center;
  font-size:9pt;
  font-weight:900;
  color:#fff;
  background:var(--bh-ink);
  padding:1mm 2mm;
  line-height:1;
}
.resume.bauhaus .bh-tag-red { background:var(--bh-red); }
.resume.bauhaus .bh-tag-blue { background:var(--bh-blue); }
.resume.bauhaus .bh-tag-yellow { background:var(--bh-yellow); color:var(--bh-ink); }

/* ---------- Summary ---------- */
.resume.bauhaus .bh-summary .bh-body {
  border-left:4mm solid var(--bh-yellow);
  padding-left:4mm;
  font-size:10pt;
}

/* ---------- Entries ---------- */
.resume.bauhaus .bh-entry {
  display:flex;
  gap:4mm;
  margin-bottom:5mm;
}
.resume.bauhaus .bh-entry:last-child { margin-bottom:0; }
.resume.bauhaus .bh-bar {
  flex:0 0 3mm;
  background:var(--bh-ink);
}
.resume.bauhaus .bh-bar-red { background:var(--bh-red); }
.resume.bauhaus .bh-bar-blue { background:var(--bh-blue); }
.resume.bauhaus .bh-bar-mix {
  background:linear-gradient(180deg,var(--bh-red) 0 33%,var(--bh-yellow) 33% 66%,var(--bh-blue) 66% 100%);
}
.resume.bauhaus .bh-entry-main { flex:1 1 auto; min-width:0; }

.resume.bauhaus .bh-entry h3 {
  font-size:11.5pt;
  font-weight:800;
  line-height:1.3;
  display:flex;
  flex-wrap:wrap;
  align-items:baseline;
  gap:2mm 3mm;
}
.resume.bauhaus .bh-co { color:var(--bh-ink); }
.resume.bauhaus .bh-pos {
  font-size:9.5pt;
  font-weight:600;
  color:var(--bh-blue);
}
.resume.bauhaus .bh-pj-role,
.resume.bauhaus .bh-skill-lv { font-weight:600; color:var(--bh-red); }
.resume.bauhaus .bh-pj-role { font-size:9.5pt; }

.resume.bauhaus .date {
  display:inline-block;
  margin-top:1mm;
  font-size:8.5pt;
  font-weight:700;
  letter-spacing:.5px;
  color:#fff;
  background:var(--bh-ink);
  padding:.6mm 2mm;
}
.resume.bauhaus .bh-edu-meta {
  margin-top:1.5mm;
  font-size:9.5pt;
  font-weight:600;
}
.resume.bauhaus .bh-pj-desc {
  margin-top:1.5mm;
  font-size:9.5pt;
}

.resume.bauhaus ul {
  list-style:none;
  margin-top:2mm;
}
.resume.bauhaus li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.5mm;
  font-size:9.5pt;
}
.resume.bauhaus li::before {
  content:"";
  position:absolute;
  left:0; top:1.8mm;
  width:2.4mm; height:2.4mm;
  background:var(--bh-red);
}
.resume.bauhaus li:nth-child(3n+2)::before { background:var(--bh-yellow); }
.resume.bauhaus li:nth-child(3n)::before { background:var(--bh-blue); }

/* ---------- Skills ---------- */
.resume.bauhaus .skills {
  display:flex;
  flex-wrap:wrap;
  gap:3mm;
}
.resume.bauhaus .bh-skill {
  border:2px solid var(--bh-line);
  padding:1.5mm 3mm;
  font-size:9.5pt;
  font-weight:700;
  background:#fff;
}
.resume.bauhaus .skills .bh-skill:nth-child(4n+1) { border-color:var(--bh-red); }
.resume.bauhaus .skills .bh-skill:nth-child(4n+2) { border-color:var(--bh-yellow); }
.resume.bauhaus .skills .bh-skill:nth-child(4n+3) { border-color:var(--bh-blue); }
.resume.bauhaus .bh-skill-name { color:var(--bh-ink); }

/* ---------- contract tails ---------- */
.resume.bauhaus li p,
.resume.bauhaus li div { margin:0; padding:0; display:inline; }
.resume.bauhaus .skills span,
.resume.bauhaus [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.bauhaus { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "bauhaus",
      "version": "1.0.0",
      "name": "包豪斯",
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
