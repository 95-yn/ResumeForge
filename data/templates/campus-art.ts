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
    slug: 'campus-art',
    name: '艺术校招',
    category: 'campus',
    html: `<div class="resume campus-art">
  <header>
    <div class="art-mark"><span></span><span></span><span></span></div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="intro"><h2><i></i>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2><i></i>工作经历</h2>
    {{#each experience}}<div class="card" data-entry="experience" data-entry-index="{{@index}}">
      <div class="card-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2><i></i>项目经历</h2>
    {{#each projects}}<div class="card" data-entry="projects" data-entry-index="{{@index}}"><div class="card-head"><h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3></div>{{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2><i></i>教育背景</h2>
    {{#each education}}<div class="card" data-entry="education" data-entry-index="{{@index}}"><div class="card-head"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span></div><p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2><i></i>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
</div>`,
    css: `.resume.campus-art * { margin:0; padding:0; box-sizing:border-box; }
.resume.campus-art * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.campus-art {
  --c-red:#d83a2c;
  --c-blue:#1f54c4;
  --c-yellow:#e8ab17;
  --ink:#1a1a1a;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  background:#fff;
  font-size:10pt;
  line-height:1.6;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:var(--ink);
  position:relative;
}

.resume.campus-art::before {
  content:"";
  position:absolute;
  top:0; right:0;
  width:22mm; height:22mm;
  background:var(--c-red);
  clip-path:polygon(100% 0, 0 0, 100% 100%);
  z-index:0;
}
.resume.campus-art::after {
  content:"";
  position:absolute;
  top:0; right:0;
  width:11mm; height:11mm;
  background:var(--c-blue);
  clip-path:polygon(100% 0, 0 0, 100% 100%);
  z-index:0;
}

.resume.campus-art header {
  position:relative;
  z-index:1;
  margin-bottom:12mm;
  padding-bottom:7mm;
  border-bottom:2.5px solid var(--ink);
}
.resume.campus-art .art-mark {
  display:flex;
  gap:5px;
  margin-bottom:7mm;
}
.resume.campus-art .art-mark span {
  display:block;
  width:13px; height:13px;
}
.resume.campus-art .art-mark span:nth-child(1){ background:var(--c-red); }
.resume.campus-art .art-mark span:nth-child(2){ background:var(--c-yellow); border-radius:50%; }
.resume.campus-art .art-mark span:nth-child(3){ background:var(--c-blue); transform:rotate(45deg); }

.resume.campus-art header h1 {
  font-size:33pt;
  font-weight:800;
  letter-spacing:-0.5px;
  line-height:1.05;
  color:var(--ink);
}
.resume.campus-art header .role {
  display:inline-block;
  margin-top:4mm;
  font-size:11pt;
  font-weight:700;
  color:#fff;
  background:var(--c-blue);
  padding:2px 12px;
  letter-spacing:0.5px;
}
.resume.campus-art .contact {
  margin-top:5mm;
  display:flex;
  flex-wrap:wrap;
  gap:5px 18px;
  font-size:9pt;
  color:#555;
}
.resume.campus-art .contact span {
  position:relative;
  padding-left:13px;
}
.resume.campus-art .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:6px; height:6px;
  background:var(--c-red);
}
.resume.campus-art .contact span:nth-child(2)::before{ background:var(--c-yellow); border-radius:50%; }
.resume.campus-art .contact span:nth-child(3)::before{ background:var(--c-blue); }

.resume.campus-art section {
  position:relative;
  z-index:1;
  margin-bottom:10mm;
}
.resume.campus-art section h2 {
  font-size:13pt;
  font-weight:800;
  color:var(--ink);
  margin-bottom:5mm;
  display:flex;
  align-items:center;
  gap:9px;
  letter-spacing:0.5px;
}
.resume.campus-art section h2 i {
  display:inline-block;
  width:20px; height:9px;
  background:var(--c-red);
}
.resume.campus-art section:nth-of-type(2n) h2 i { background:var(--c-blue); }
.resume.campus-art section:nth-of-type(3n) h2 i { background:var(--c-yellow); }

.resume.campus-art .intro div {
  font-size:10pt;
  color:#333;
  line-height:1.75;
  padding-left:29px;
  position:relative;
}
.resume.campus-art .intro div::before {
  content:"";
  position:absolute;
  left:0; top:3px; bottom:3px;
  width:3px;
  background:var(--c-yellow);
}

.resume.campus-art .card {
  margin-bottom:6mm;
  padding-left:29px;
  position:relative;
}
.resume.campus-art .card::before {
  content:"";
  position:absolute;
  left:0; top:3px;
  width:9px; height:9px;
  background:var(--ink);
  transform:rotate(45deg);
}
.resume.campus-art .card-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.campus-art .card h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
}
.resume.campus-art .card h3 .company,
.resume.campus-art .card h3 .pname {
  font-weight:800;
}
.resume.campus-art .card h3 .position {
  font-weight:600;
  color:var(--c-blue);
}
.resume.campus-art .card h3 .position::before {
  content:"／";
  color:#bbb;
  margin:0 5px;
  font-weight:400;
}
.resume.campus-art .card h3 .prole {
  font-weight:600;
  color:var(--c-red);
  font-size:10pt;
}
.resume.campus-art .date {
  font-size:8.5pt;
  font-weight:700;
  color:#888;
  white-space:nowrap;
  letter-spacing:0.3px;
}
.resume.campus-art .edu-meta {
  font-size:9.5pt;
  color:#555;
  margin-top:1mm;
}
.resume.campus-art .card .desc {
  font-size:9.5pt;
  color:#444;
  margin-top:1.5mm;
  line-height:1.7;
}
.resume.campus-art .card ul {
  list-style:none;
  margin-top:2mm;
}
.resume.campus-art .card li {
  position:relative;
  padding-left:15px;
  margin-bottom:1.8mm;
  font-size:9.5pt;
  color:#333;
  line-height:1.65;
}
.resume.campus-art .card li::before {
  content:"";
  position:absolute;
  left:0; top:7px;
  width:6px; height:6px;
  background:var(--c-yellow);
}

.resume.campus-art .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.campus-art .skill-chip {
  display:inline-block;
  font-size:9pt;
  font-weight:600;
  color:var(--ink);
  background:#f5f5f1;
  border:1.5px solid var(--ink);
  padding:3px 11px;
}
.resume.campus-art .skill-chip:nth-child(3n+1){ border-color:var(--c-red); }
.resume.campus-art .skill-chip:nth-child(3n+2){ border-color:var(--c-blue); }
.resume.campus-art .skill-chip:nth-child(3n+3){ border-color:var(--c-yellow); }
.resume.campus-art .skill-chip .lvl {
  color:#888;
  font-weight:500;
}

.resume.campus-art li p, .resume.campus-art li div { margin:0; padding:0; display:inline; }
.resume.campus-art .skills span, .resume.campus-art [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.campus-art { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "campus-art",
      "version": "1.0.0",
      "name": "艺术校招",
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
