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
    slug: 'broadcaster',
    name: '主持播音',
    category: 'creative',
    html: `<div class="resume broadcaster">
  <header>
    <div class="marquee">
      <span class="bulb"></span>
      <div class="stage-name">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <span class="bulb"></span>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="summary"><h2>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="co" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="po" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="pj" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.broadcaster * { margin:0; padding:0; box-sizing:border-box; }
.resume.broadcaster * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.broadcaster {
  --crimson:#7a1422;
  --crimson-deep:#5a0f19;
  --gold:#b08a3c;
  --ink:#2a2422;
  --body:#33302e;
  --paper:#ffffff;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:0 0 18mm;
  background:var(--paper);
  color:var(--body);
  font-size:10.5pt;
  line-height:1.6;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.broadcaster header {
  position:relative;
  padding:16mm 18mm 12mm;
  background:var(--crimson);
  color:#fff;
  border-bottom:2px solid var(--gold);
}
.resume.broadcaster .marquee {
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:16px;
}
.resume.broadcaster .bulb {
  flex:none;
  width:7px; height:7px;
  border-radius:50%;
  background:var(--gold);
}
.resume.broadcaster .stage-name { text-align:center; }
.resume.broadcaster header h1 {
  font-size:27pt;
  font-weight:800;
  letter-spacing:.08em;
  line-height:1.15;
  color:#fff;
}
.resume.broadcaster header p {
  margin-top:7px;
  font-size:11pt;
  letter-spacing:.28em;
  text-indent:.28em;
  color:#f0d9a6;
}
.resume.broadcaster .contact {
  position:relative;
  margin-top:14px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:8px 0;
  font-size:9.5pt;
  letter-spacing:.03em;
}
.resume.broadcaster .contact span {
  position:relative;
  padding:0 15px;
  color:#f4ece0;
}
.resume.broadcaster .contact span + span::before {
  content:"";
  position:absolute; left:0; top:50%;
  width:3px; height:3px; margin-top:-1.5px;
  border-radius:50%;
  background:var(--gold);
}

/* ===== Sections ===== */
.resume.broadcaster section {
  padding:0 18mm;
  margin-top:14px;
}
.resume.broadcaster section:first-of-type { margin-top:16px; }
.resume.broadcaster h2 {
  position:relative;
  font-size:12pt;
  font-weight:700;
  letter-spacing:.12em;
  color:var(--crimson);
  padding-bottom:5px;
  margin-bottom:11px;
  border-bottom:1px solid #e2d3bd;
}

/* summary */
.resume.broadcaster .summary div {
  color:var(--body);
  line-height:1.7;
}

/* entries */
.resume.broadcaster .entry { margin-bottom:13px; }
.resume.broadcaster .entry:last-child { margin-bottom:2px; }
.resume.broadcaster .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
  margin-bottom:4px;
}
.resume.broadcaster h3 {
  font-size:11.5pt;
  font-weight:700;
  color:var(--ink);
}
.resume.broadcaster h3 .co { color:var(--crimson); }
.resume.broadcaster h3 .po {
  margin-left:9px;
  font-weight:500;
  font-size:10.5pt;
  color:#6a4a30;
}
.resume.broadcaster .date {
  flex:none;
  font-size:9pt;
  font-weight:600;
  letter-spacing:.04em;
  color:var(--crimson);
}
.resume.broadcaster .edu-meta { color:#5a5048; margin-top:2px; font-size:10pt; }

.resume.broadcaster ul {
  list-style:none;
  margin-top:5px;
}
.resume.broadcaster li {
  position:relative;
  padding-left:15px;
  margin-bottom:4px;
  color:var(--body);
  line-height:1.6;
}
.resume.broadcaster li::before {
  content:"";
  position:absolute; left:2px; top:.62em;
  width:5px; height:5px;
  transform:rotate(45deg);
  background:var(--gold);
}

/* projects */
.resume.broadcaster h3 .role { font-weight:500; font-size:10pt; color:#6a4a30; }
.resume.broadcaster .desc { margin-top:3px; color:var(--body); line-height:1.65; }

/* skills */
.resume.broadcaster .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.broadcaster .chip {
  display:inline-flex;
  align-items:center;
  padding:3px 13px;
  font-size:9.5pt;
  color:var(--crimson-deep);
  background:#f7f0e4;
  border:1px solid #d9c8a8;
  border-radius:14px;
}
.resume.broadcaster .chip .lv { color:#8a6a30; font-weight:600; }

.resume.broadcaster li p, .resume.broadcaster li div { margin:0; padding:0; display:inline; }
.resume.broadcaster .skills span, .resume.broadcaster [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.broadcaster { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "broadcaster",
      "version": "1.0.0",
      "name": "主持播音",
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
