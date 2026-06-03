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
    slug: 'it-python',
    name: 'Python开发',
    category: 'tech',
    html: `<div class="resume it-python">
  <header>
    <div class="head-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="block summary"><h2>个人简介</h2><div class="indent" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section class="block" data-section="experience"><h2>工作经历</h2>
    <div class="indent">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}
  {{#if projects.length}}<section class="block" data-section="projects"><h2>项目经历</h2>
    <div class="indent">
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}
  {{#if skills.length}}<section class="block" data-section="skills"><h2>专业技能</h2><div class="indent skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if education.length}}<section class="block" data-section="education"><h2>教育背景</h2>
    <div class="indent">
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.it-python * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-python * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-python {
  --py-blue:#2b5b84;
  --py-blue-deep:#1e3a5f;
  --py-yellow:#d4a017;
  --py-yellow-deep:#a8801a;
  --cream:#faf8f2;
  --ink:#2a2a28;
  --muted:#6b6a64;
  --line:#e6e2d6;
  --mono:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:var(--cream);
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ---------- Header ---------- */
.resume.it-python header {
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:16px;
  padding-bottom:14px;
  margin-bottom:6px;
  border-bottom:3px solid var(--py-blue);
  position:relative;
}
.resume.it-python header::after {
  content:"";
  position:absolute;
  left:0; bottom:-3px;
  width:64px; height:3px;
  background:var(--py-yellow);
}
.resume.it-python .head-main { display:flex; align-items:baseline; gap:14px; flex-wrap:wrap; }
.resume.it-python h1 {
  font-size:24pt;
  font-weight:700;
  letter-spacing:.5px;
  color:var(--py-blue-deep);
}
.resume.it-python h1::before {
  content:">>> ";
  color:var(--py-yellow-deep);
  font-family:var(--mono);
  font-weight:600;
  font-size:15pt;
}
.resume.it-python .role {
  font-size:11pt;
  color:var(--muted);
  font-weight:500;
}
.resume.it-python .contact {
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:3px;
  font-size:9pt;
  color:var(--muted);
}
.resume.it-python .contact span {
  padding-left:14px;
  position:relative;
  white-space:nowrap;
}
.resume.it-python .contact span::before {
  content:"#";
  position:absolute; left:0;
  color:var(--py-blue);
  font-family:var(--mono);
  font-weight:600;
}

/* ---------- Section — def __name__ ---------- */
.resume.it-python .block { margin-top:18px; }
.resume.it-python h2 {
  font-size:11.5pt;
  font-weight:700;
  color:var(--py-blue-deep);
  letter-spacing:1px;
  padding-bottom:5px;
  margin-bottom:10px;
  border-bottom:1px solid var(--line);
  display:flex;
  align-items:baseline;
}
.resume.it-python h2::before {
  content:"def ";
  font-family:var(--mono);
  font-size:9.5pt;
  font-weight:600;
  color:var(--py-yellow-deep);
  margin-right:7px;
  letter-spacing:0;
}

/* indentation hierarchy — the signature look */
.resume.it-python .indent {
  padding-left:21px;
  margin-left:3px;
  border-left:1px solid var(--line);
}

/* ---------- Entries ---------- */
.resume.it-python .entry { margin-bottom:13px; position:relative; }
.resume.it-python .entry:last-child { margin-bottom:0; }
.resume.it-python .entry::before {
  content:"";
  position:absolute;
  left:-22px; top:5px;
  width:7px; height:7px;
  border-radius:50%;
  background:var(--cream);
  border:2px solid var(--py-blue);
}
.resume.it-python .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.it-python h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
}
.resume.it-python .company { color:var(--py-blue-deep); }
.resume.it-python .position {
  margin-left:10px;
  font-weight:500;
  color:var(--muted);
  font-size:9.5pt;
}
.resume.it-python .position::before {
  content:"·";
  margin-right:10px;
  color:var(--py-yellow-deep);
  font-weight:700;
}
.resume.it-python .date {
  font-size:8.5pt;
  color:var(--muted);
  font-family:var(--mono);
  white-space:nowrap;
  background:rgba(43,91,132,.07);
  padding:1px 7px;
  border-radius:3px;
}

/* projects */
.resume.it-python .prole {
  font-weight:500;
  color:var(--py-blue);
  font-size:9.5pt;
}
.resume.it-python .prole::before {
  content:"·";
  margin:0 7px 0 4px;
  color:var(--py-yellow-deep);
}
.resume.it-python .desc {
  font-size:9.5pt;
  color:var(--muted);
  margin:3px 0;
}

/* lists */
.resume.it-python ul { list-style:none; margin-top:5px; }
.resume.it-python li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.5pt;
}
.resume.it-python li::before {
  content:"-";
  position:absolute;
  left:2px; top:0;
  color:var(--py-yellow-deep);
  font-family:var(--mono);
  font-weight:700;
}

/* education */
.resume.it-python .edu-meta {
  font-size:9.5pt;
  color:var(--muted);
  margin-top:2px;
}

/* ---------- Skills — keyword tokens, no side stripe ---------- */
.resume.it-python .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.it-python .skill {
  font-size:9pt;
  padding:3px 11px;
  background:#fff;
  border:1px solid var(--line);
  border-radius:3px;
  color:var(--ink);
  position:relative;
}
.resume.it-python .skill::before {
  content:"@";
  font-family:var(--mono);
  color:var(--py-blue);
  font-weight:700;
  margin-right:5px;
}
.resume.it-python .skill .lv { color:var(--py-blue); font-weight:600; }

/* ---------- mandatory tail rules ---------- */
.resume.it-python li p, .resume.it-python li div { margin:0; padding:0; display:inline; }
.resume.it-python .skills span, .resume.it-python [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.it-python { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "it-python",
      "version": "1.0.0",
      "name": "Python开发",
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
