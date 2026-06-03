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
    slug: 'illustrator-pro',
    name: '插画师',
    category: 'creative',
    html: `<div class="resume illustrator-pro">
  <header>
    <div class="frame">
      <span class="tape tape-l"></span>
      <span class="tape tape-r"></span>
      <span class="doodle star"></span>
      <span class="doodle heart"></span>
      <span class="doodle sun"></span>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="intro"><h2><span class="bullet">✦</span>个人简介</h2><div class="card" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="bullet">✎</span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <h3><span class="co" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
      <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="bullet">❀</span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><h3><span class="co" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>{{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="bullet">✿</span>专业技能</h2><div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="bullet">✶</span>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span><p class="edu"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p></div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.illustrator-pro * { margin:0; padding:0; box-sizing:border-box; }
.resume.illustrator-pro * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.illustrator-pro {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm 16mm;
  background:#fffaf2;
  background-image:
    radial-gradient(circle at 12% 8%, rgba(255,209,150,.18) 0, transparent 22%),
    radial-gradient(circle at 88% 14%, rgba(168,213,186,.18) 0, transparent 20%),
    radial-gradient(circle at 78% 92%, rgba(255,170,165,.15) 0, transparent 24%);
  font-size:10pt; line-height:1.55; color:#4a4036;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header — picture frame ===== */
.resume.illustrator-pro header { margin-bottom:9mm; }
.resume.illustrator-pro .frame {
  position:relative;
  border:3px solid #4a4036;
  border-radius:6px;
  background:#fff;
  padding:11mm 8mm 9mm;
  text-align:center;
  box-shadow:5px 6px 0 rgba(74,64,54,.12), inset 0 0 0 4px #fffaf2, inset 0 0 0 6px #f0c987;
}
.resume.illustrator-pro .tape {
  position:absolute; top:-9px; width:62px; height:20px;
  background:rgba(168,213,186,.6);
  border:1px dashed rgba(74,64,54,.35);
}
.resume.illustrator-pro .tape-l { left:9%; transform:rotate(-7deg); }
.resume.illustrator-pro .tape-r { right:9%; transform:rotate(6deg); background:rgba(255,184,148,.6); }
.resume.illustrator-pro .doodle { position:absolute; font-style:normal; color:#e98c6b; }
.resume.illustrator-pro .doodle.star { top:9px; left:14px; font-size:16pt; color:#f0a830; }
.resume.illustrator-pro .doodle.heart { bottom:8px; right:16px; font-size:14pt; color:#e98c6b; }
.resume.illustrator-pro .doodle.sun { top:10px; right:18px; font-size:14pt; color:#7cb89a; }
.resume.illustrator-pro .doodle.star::before { content:'✺'; }
.resume.illustrator-pro .doodle.heart::before { content:'♥'; }
.resume.illustrator-pro .doodle.sun::before { content:'❋'; }

.resume.illustrator-pro h1 {
  font-size:25pt; font-weight:800; letter-spacing:2px; color:#3a322a;
  line-height:1.1;
}
.resume.illustrator-pro .role {
  display:inline-block; margin-top:5px; font-size:11pt; font-weight:600;
  color:#fff; background:#e98c6b; padding:3px 16px; border-radius:14px;
  transform:rotate(-1.2deg); box-shadow:2px 2px 0 rgba(74,64,54,.18);
}
.resume.illustrator-pro .contact {
  margin-top:9px; display:flex; flex-wrap:wrap; justify-content:center;
  gap:6px 14px; font-size:9pt; color:#7a6e60;
}
.resume.illustrator-pro .contact span { position:relative; padding-left:14px; }
.resume.illustrator-pro .contact span::before {
  content:'●'; position:absolute; left:0; top:0; font-size:7pt; color:#f0c987;
}

/* ===== Sections ===== */
.resume.illustrator-pro section { margin-bottom:8mm; }
.resume.illustrator-pro h2 {
  font-size:13pt; font-weight:800; color:#3a322a; margin-bottom:6px;
  display:flex; align-items:center; gap:8px;
  padding-bottom:5px;
  border-bottom:2.5px dashed #f0c987;
}
.resume.illustrator-pro h2 .bullet {
  display:inline-flex; align-items:center; justify-content:center;
  width:22px; height:22px; border-radius:50%;
  background:#a8d5ba; color:#3a322a; font-size:11pt;
  box-shadow:2px 2px 0 rgba(74,64,54,.15);
}

/* intro card */
.resume.illustrator-pro .intro .card {
  background:#fff; border:2px solid #4a4036; border-radius:5px;
  padding:9px 13px; box-shadow:3px 3px 0 rgba(240,201,135,.55);
  font-size:9.5pt; color:#574c40;
}

/* entries */
.resume.illustrator-pro .entry {
  position:relative; padding:6px 10px 7px 16px; margin-bottom:7px;
  border-left:3px solid #f0c987; border-radius:0 6px 6px 0;
}
.resume.illustrator-pro .entry::before {
  content:''; position:absolute; left:-7px; top:11px;
  width:11px; height:11px; border-radius:50%;
  background:#e98c6b; border:2px solid #fffaf2;
}
.resume.illustrator-pro .entry h3 {
  font-size:11pt; font-weight:700; color:#3a322a;
  display:flex; align-items:baseline; flex-wrap:wrap; gap:8px;
}
.resume.illustrator-pro .entry h3 .co { color:#c96a4b; }
.resume.illustrator-pro .entry h3 .pos {
  font-size:9pt; font-weight:600; color:#5b7a66;
  background:rgba(168,213,186,.35); padding:1px 9px; border-radius:10px;
}
.resume.illustrator-pro .date {
  display:inline-block; font-size:8.5pt; color:#9a8d7c; margin-top:2px;
  font-style:italic;
}
.resume.illustrator-pro .desc { font-size:9.3pt; color:#574c40; margin-top:3px; }

.resume.illustrator-pro ul { list-style:none; margin-top:5px; }
.resume.illustrator-pro li {
  position:relative; padding-left:16px; margin-bottom:3px;
  font-size:9.3pt; color:#574c40;
}
.resume.illustrator-pro li::before {
  content:'✿'; position:absolute; left:0; top:0; color:#e9a06b; font-size:8pt;
}

/* education paragraph */
.resume.illustrator-pro .edu { font-size:9.3pt; color:#574c40; margin-top:2px; }

/* skills chips */
.resume.illustrator-pro .skills { display:flex; flex-wrap:wrap; gap:7px 8px; }
.resume.illustrator-pro .chip {
  display:inline-block; padding:3px 12px; font-size:9pt; font-weight:600;
  color:#3a322a; background:#fff;
  border:2px solid #4a4036; border-radius:14px;
  box-shadow:2px 2px 0 rgba(168,213,186,.7);
}
.resume.illustrator-pro .chip:nth-child(3n+2) { box-shadow:2px 2px 0 rgba(255,184,148,.7); }
.resume.illustrator-pro .chip:nth-child(3n+3) { box-shadow:2px 2px 0 rgba(240,201,135,.7); }
.resume.illustrator-pro .chip .lvl { color:#9a8d7c; font-weight:500; }

/* required inline-list fixes */
.resume.illustrator-pro li p, .resume.illustrator-pro li div { margin:0; padding:0; display:inline; }
.resume.illustrator-pro .skills span, .resume.illustrator-pro [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.illustrator-pro { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "illustrator-pro",
      "version": "1.0.0",
      "name": "插画师",
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
