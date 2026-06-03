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
  max-width:210mm; min-height:297mm; margin:0 auto; padding:16mm;
  background:#fffaf2;
  font-size:10pt; line-height:1.65; color:#3a3127;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header — picture frame (restrained) ===== */
.resume.illustrator-pro header { margin-bottom:8mm; }
.resume.illustrator-pro .frame {
  position:relative;
  border:2.5px solid #4a4036;
  border-radius:6px;
  background:#fff;
  padding:10mm 9mm 8mm;
  text-align:center;
  box-shadow:4px 5px 0 rgba(74,64,54,.1);
}
.resume.illustrator-pro .tape {
  position:absolute; top:-9px; width:62px; height:20px;
  background:rgba(168,213,186,.55);
  border:1px dashed rgba(74,64,54,.3);
}
.resume.illustrator-pro .tape-l { left:9%; transform:rotate(-7deg); }
.resume.illustrator-pro .tape-r { right:9%; transform:rotate(6deg); background:rgba(255,184,148,.55); }

.resume.illustrator-pro h1 {
  font-size:24pt; font-weight:800; letter-spacing:2px; color:#3a3127;
  line-height:1.15;
}
.resume.illustrator-pro .role {
  display:inline-block; margin-top:7px; font-size:11pt; font-weight:600;
  color:#fff; background:#e98c6b; padding:3px 16px; border-radius:14px;
}
.resume.illustrator-pro .contact {
  margin-top:11px; display:flex; flex-wrap:wrap; justify-content:center;
  gap:7px 16px; font-size:9pt; color:#6a5d4d;
}
.resume.illustrator-pro .contact span { position:relative; padding-left:14px; }
.resume.illustrator-pro .contact span::before {
  content:'●'; position:absolute; left:0; top:0; font-size:7pt; color:#f0c987;
}

/* ===== Sections ===== */
.resume.illustrator-pro section { margin-bottom:8mm; }
.resume.illustrator-pro h2 {
  font-size:13pt; font-weight:800; color:#3a3127; margin-bottom:11px;
  display:flex; align-items:center; gap:9px;
  padding-bottom:6px;
  border-bottom:2px dashed #f0c987;
}
.resume.illustrator-pro h2 .bullet {
  display:inline-flex; align-items:center; justify-content:center;
  width:22px; height:22px; border-radius:50%;
  background:#a8d5ba; color:#3a3127; font-size:11pt;
}

/* intro card */
.resume.illustrator-pro .intro .card {
  background:#fff; border:1.5px solid #ead9c0; border-radius:6px;
  padding:12px 15px;
  font-size:9.6pt; color:#3a3127; line-height:1.7;
}

/* entries — full card frame, leading flower dot, no colored side stripe */
.resume.illustrator-pro .entry {
  position:relative; padding:12px 15px 12px 30px; margin-bottom:11px;
  border:1.5px solid #ead9c0; border-radius:6px; background:#fffdf8;
}
.resume.illustrator-pro .entry:last-child { margin-bottom:0; }
.resume.illustrator-pro .entry::before {
  content:'✿'; position:absolute; left:11px; top:13px;
  font-size:10pt; color:#e9a06b; line-height:1.3;
}
.resume.illustrator-pro .entry h3 {
  font-size:11pt; font-weight:700; color:#3a3127;
  display:flex; align-items:baseline; flex-wrap:wrap; gap:9px;
  line-height:1.4;
}
.resume.illustrator-pro .entry h3 .co { color:#c96a4b; }
.resume.illustrator-pro .entry h3 .pos {
  font-size:9pt; font-weight:600; color:#4c6a57;
  background:rgba(168,213,186,.3); padding:2px 10px; border-radius:10px;
}
.resume.illustrator-pro .date {
  display:inline-block; font-size:8.5pt; color:#7a6e60; margin-top:4px;
  font-style:italic;
}
.resume.illustrator-pro .desc { font-size:9.4pt; color:#3a3127; margin-top:6px; line-height:1.65; }

.resume.illustrator-pro ul { list-style:none; margin-top:8px; }
.resume.illustrator-pro li {
  position:relative; padding-left:17px; margin-bottom:6px;
  font-size:9.4pt; color:#3a3127; line-height:1.65;
}
.resume.illustrator-pro li:last-child { margin-bottom:0; }
.resume.illustrator-pro li::before {
  content:'✿'; position:absolute; left:0; top:2px; color:#e9a06b; font-size:8pt;
}

/* education paragraph */
.resume.illustrator-pro .edu { font-size:9.4pt; color:#5a4f40; margin-top:4px; }

/* skills chips */
.resume.illustrator-pro .skills { display:flex; flex-wrap:wrap; gap:9px 10px; }
.resume.illustrator-pro .chip {
  display:inline-block; padding:4px 13px; font-size:9pt; font-weight:600;
  color:#3a3127; background:#fff;
  border:1.5px solid #4a4036; border-radius:14px;
}
.resume.illustrator-pro .chip .lvl { color:#7a6e60; font-weight:500; }

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
