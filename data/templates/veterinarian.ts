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
    slug: 'veterinarian',
    name: '兽医',
    category: 'profession',
    html: `<div class="resume veterinarian">
  <header>
    <div class="vet-header-inner">
      <div class="vet-paw" aria-hidden="true">
        <span class="vet-paw-pad"></span>
        <span class="vet-paw-toe vet-paw-toe-1"></span>
        <span class="vet-paw-toe vet-paw-toe-2"></span>
        <span class="vet-paw-toe vet-paw-toe-3"></span>
        <span class="vet-paw-toe vet-paw-toe-4"></span>
      </div>
      <div class="vet-head-text">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="vet-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
        <div class="contact">
          {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
          {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
          {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
        </div>
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="vet-section vet-summary"><h2>个人简介</h2><div class="vet-card" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="vet-section" data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="vet-card vet-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="vet-entry-head">
        <h3><span class="vet-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="vet-role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="vet-section" data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="vet-card vet-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="vet-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="vet-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="vet-section" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="vet-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="vet-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section class="vet-section" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="vet-card vet-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="vet-company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="vet-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="vet-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.veterinarian * { margin:0; padding:0; box-sizing:border-box; }
.resume.veterinarian * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.veterinarian {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fbf7ee;
  font-size:10pt;
  line-height:1.6;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#3a4a3c;
  --vet-green:#5a8a5e;
  --vet-green-deep:#3f6b46;
  --vet-green-soft:#e4efe1;
  --vet-cream:#fbf7ee;
  --vet-cream-card:#ffffff;
  --vet-accent:#e8a04b;
  --vet-ink:#3a4a3c;
  --vet-muted:#7c8a7e;
}

/* ===== Header ===== */
.resume.veterinarian header {
  background:linear-gradient(135deg, #5a8a5e 0%, #6fa173 100%);
  border-radius:22px;
  padding:9mm 10mm;
  margin-bottom:8mm;
  box-shadow:0 6px 18px rgba(90,138,94,0.18);
}
.resume.veterinarian .vet-header-inner {
  display:flex;
  align-items:center;
  gap:7mm;
}
.resume.veterinarian .vet-paw {
  position:relative;
  flex:0 0 auto;
  width:20mm;
  height:20mm;
  background:rgba(255,255,255,0.16);
  border-radius:50%;
  border:2px solid rgba(255,255,255,0.35);
}
.resume.veterinarian .vet-paw-pad {
  position:absolute;
  left:50%;
  top:54%;
  transform:translate(-50%,0);
  width:8mm;
  height:7mm;
  background:#fbf7ee;
  border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;
}
.resume.veterinarian .vet-paw-toe {
  position:absolute;
  width:3mm;
  height:3.6mm;
  background:#fbf7ee;
  border-radius:50%;
}
.resume.veterinarian .vet-paw-toe-1 { left:24%; top:28%; }
.resume.veterinarian .vet-paw-toe-2 { left:41%; top:20%; }
.resume.veterinarian .vet-paw-toe-3 { left:59%; top:20%; }
.resume.veterinarian .vet-paw-toe-4 { left:76%; top:28%; }

.resume.veterinarian .vet-head-text { flex:1 1 auto; min-width:0; }
.resume.veterinarian header h1 {
  font-size:23pt;
  font-weight:700;
  color:#ffffff;
  letter-spacing:1px;
  line-height:1.2;
}
.resume.veterinarian .vet-title {
  display:inline-block;
  margin-top:3px;
  font-size:10.5pt;
  font-weight:500;
  color:#f3f8f1;
  background:rgba(255,255,255,0.18);
  padding:2px 12px;
  border-radius:20px;
}
.resume.veterinarian .contact {
  margin-top:7px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 14px;
}
.resume.veterinarian .contact span {
  position:relative;
  font-size:9pt;
  color:#eef5ec;
  padding-left:14px;
}
.resume.veterinarian .contact span::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:6px;
  height:6px;
  border-radius:50%;
  background:#e8a04b;
}

/* ===== Sections ===== */
.resume.veterinarian .vet-section { margin-bottom:7mm; }
.resume.veterinarian h2 {
  position:relative;
  font-size:12.5pt;
  font-weight:700;
  color:var(--vet-green-deep);
  padding-left:13px;
  margin-bottom:4mm;
  letter-spacing:0.5px;
}
.resume.veterinarian h2::before {
  content:"";
  position:absolute;
  left:0;
  top:1px;
  bottom:1px;
  width:5px;
  border-radius:4px;
  background:linear-gradient(#5a8a5e,#e8a04b);
}

/* ===== Cards ===== */
.resume.veterinarian .vet-card {
  background:var(--vet-cream-card);
  border:1px solid #ece4d2;
  border-radius:16px;
  padding:5mm 6mm;
  box-shadow:0 2px 8px rgba(90,138,94,0.06);
}
.resume.veterinarian .vet-entry { margin-bottom:4mm; }
.resume.veterinarian .vet-entry:last-child { margin-bottom:0; }
.resume.veterinarian .vet-summary .vet-card { line-height:1.7; color:#4a584c; }

.resume.veterinarian .vet-entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.veterinarian h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--vet-ink);
}
.resume.veterinarian .vet-company { color:var(--vet-green-deep); }
.resume.veterinarian .vet-role {
  font-weight:500;
  color:var(--vet-muted);
  margin-left:8px;
  font-size:10pt;
}
.resume.veterinarian .date {
  font-size:8.5pt;
  font-weight:600;
  color:#a0734a;
  background:#fbf0e2;
  padding:2px 10px;
  border-radius:20px;
  white-space:nowrap;
}
.resume.veterinarian .vet-edu-meta {
  margin-top:3px;
  font-size:9.5pt;
  color:var(--vet-muted);
}
.resume.veterinarian .vet-proj-desc {
  margin-top:4px;
  font-size:9.5pt;
  color:#4a584c;
}

/* ===== Lists ===== */
.resume.veterinarian ul {
  list-style:none;
  margin-top:5px;
}
.resume.veterinarian li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:#4a584c;
}
.resume.veterinarian li::before {
  content:"";
  position:absolute;
  left:2px;
  top:7px;
  width:6px;
  height:6px;
  border-radius:50%;
  background:var(--vet-green);
}

/* ===== Skills ===== */
.resume.veterinarian .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.veterinarian .vet-skill {
  display:inline-block;
  background:var(--vet-green-soft);
  color:var(--vet-green-deep);
  border:1px solid #cfe2cb;
  border-radius:20px;
  padding:4px 13px;
  font-size:9pt;
  font-weight:500;
}
.resume.veterinarian .vet-skill-level { color:var(--vet-accent); font-weight:600; }

/* ===== contract-required tail ===== */
.resume.veterinarian li p, .resume.veterinarian li div { margin:0; padding:0; display:inline; }
.resume.veterinarian .skills span, .resume.veterinarian [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.veterinarian { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "veterinarian",
      "version": "1.0.0",
      "name": "兽医",
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
