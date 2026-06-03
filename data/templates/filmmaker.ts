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
    slug: 'filmmaker',
    name: '影视制作',
    category: 'creative',
    html: `<div class="resume filmmaker">
  <header>
    <div class="slate-bar" aria-hidden="true">
      <span class="s"></span><span class="s"></span><span class="s"></span><span class="s"></span><span class="s"></span><span class="s"></span><span class="s"></span><span class="s"></span><span class="s"></span><span class="s"></span>
    </div>
    <div class="head-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary"><h2><span class="reel">导演阐述</span></h2><div class="body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="block"><h2><span class="reel">工作经历</span></h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="block"><h2><span class="reel">项目经历</span></h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="block"><h2><span class="reel">教育背景</span></h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="block"><h2><span class="reel">专业技能</span></h2>
    <div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}
</div>`,
    css: `.resume.filmmaker * { margin:0; padding:0; box-sizing:border-box; }
.resume.filmmaker * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.filmmaker {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#1b1b1d;
  --amber:#e0a526;
  --amber-deep:#c2841a;
  --ink:#141416;
  --ink-soft:#3a3a3e;
  --line:#d8d4cb;
}

/* ===== Header — clapperboard slate ===== */
.resume.filmmaker header {
  background:var(--ink);
  margin:-18mm -18mm 9mm -18mm;
  padding:0;
  color:#f4f1ea;
  position:relative;
  overflow:hidden;
}
.resume.filmmaker .slate-bar {
  display:flex;
  height:9mm;
  width:100%;
  transform:skewX(-24deg);
  transform-origin:left;
  margin-left:-4mm;
  width:calc(100% + 8mm);
}
.resume.filmmaker .slate-bar .s {
  flex:1;
  background:var(--ink);
}
.resume.filmmaker .slate-bar .s:nth-child(odd) {
  background:#f4f1ea;
}
.resume.filmmaker .head-inner {
  padding:7mm 18mm 7mm 18mm;
}
.resume.filmmaker h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:3px;
  line-height:1.1;
  color:#fff;
}
.resume.filmmaker .role {
  margin-top:3px;
  font-size:10.5pt;
  letter-spacing:5px;
  color:var(--amber);
  text-transform:uppercase;
  font-weight:600;
}
.resume.filmmaker .contact {
  margin-top:8px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 0;
  font-size:8.6pt;
  letter-spacing:.5px;
  color:#cfcbc1;
}
.resume.filmmaker .contact span {
  position:relative;
  padding:0 12px;
  white-space:nowrap;
}
.resume.filmmaker .contact span:first-child { padding-left:0; }
.resume.filmmaker .contact span:not(:last-child)::after {
  content:'';
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  width:4px;
  height:4px;
  background:var(--amber);
  border-radius:50%;
}

/* ===== Section headings — film reel marker ===== */
.resume.filmmaker section { margin-bottom:7mm; }
.resume.filmmaker h2 {
  font-size:12.5pt;
  font-weight:800;
  letter-spacing:2px;
  color:var(--ink);
  margin-bottom:4mm;
  display:flex;
  align-items:center;
}
.resume.filmmaker h2 .reel {
  position:relative;
  padding-left:24px;
}
.resume.filmmaker h2 .reel::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:14px;
  height:14px;
  border:2.5px solid var(--amber);
  border-radius:50%;
  box-shadow:inset 0 0 0 2px #fff, inset 0 0 0 4px var(--amber);
}
.resume.filmmaker h2::after {
  content:'';
  flex:1;
  height:0;
  margin-left:10px;
  border-top:1.5px dashed var(--line);
}

/* ===== Summary ===== */
.resume.filmmaker .summary .body {
  font-size:9.6pt;
  color:var(--ink-soft);
  padding:3mm 4mm;
  border-left:3px solid var(--amber);
  background:linear-gradient(90deg,#fbf6ea 0%, #fff 70%);
}

/* ===== Entries ===== */
.resume.filmmaker .entry {
  position:relative;
  padding:0 0 4mm 14px;
  margin-bottom:3mm;
  border-left:2px solid var(--line);
}
.resume.filmmaker .entry:last-child { margin-bottom:0; padding-bottom:0; }
.resume.filmmaker .entry::before {
  content:'';
  position:absolute;
  left:-5px;
  top:4px;
  width:8px;
  height:8px;
  background:var(--amber);
  border-radius:50%;
  box-shadow:0 0 0 2px #fff;
}
.resume.filmmaker .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.filmmaker h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--ink);
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:8px;
}
.resume.filmmaker h3 .company { color:var(--ink); }
.resume.filmmaker h3 .pos {
  font-size:9pt;
  font-weight:600;
  color:var(--amber-deep);
  letter-spacing:.5px;
}
.resume.filmmaker .date {
  font-size:8.3pt;
  font-weight:600;
  letter-spacing:1px;
  color:#fff;
  background:var(--ink);
  padding:2px 8px;
  border-radius:2px;
  white-space:nowrap;
}
.resume.filmmaker .desc {
  font-size:9.4pt;
  color:var(--ink-soft);
  margin:3px 0 2px;
}
.resume.filmmaker .edu-meta {
  font-size:9.2pt;
  color:var(--ink-soft);
  margin-top:2px;
}
.resume.filmmaker ul {
  list-style:none;
  margin-top:4px;
}
.resume.filmmaker li {
  position:relative;
  padding-left:15px;
  font-size:9.4pt;
  color:var(--ink-soft);
  margin-bottom:3px;
  line-height:1.5;
}
.resume.filmmaker li::before {
  content:'▸';
  position:absolute;
  left:0;
  top:0;
  color:var(--amber);
  font-size:8pt;
}

/* ===== Skills — film strip tags ===== */
.resume.filmmaker .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.filmmaker .skill-tag {
  font-size:8.8pt;
  font-weight:600;
  letter-spacing:.5px;
  color:var(--ink);
  padding:4px 10px 4px 14px;
  background:#faf6ec;
  border:1px solid #e7ddc6;
  border-radius:2px;
  position:relative;
}
.resume.filmmaker .skill-tag::before {
  content:'';
  position:absolute;
  left:5px;
  top:50%;
  transform:translateY(-50%);
  width:3px;
  height:60%;
  background:var(--amber);
}
.resume.filmmaker .skill-tag .lv { color:var(--amber-deep); }

/* ===== contract requirements ===== */
.resume.filmmaker li p, .resume.filmmaker li div { margin:0; padding:0; display:inline; }
.resume.filmmaker .skills span, .resume.filmmaker [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.filmmaker { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "filmmaker",
      "version": "1.0.0",
      "name": "影视制作",
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
