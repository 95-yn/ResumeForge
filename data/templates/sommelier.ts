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
    slug: 'sommelier',
    name: '侍酒师',
    category: 'profession',
    html: `<div class="resume sommelier">
  <header>
    <div class="label-frame">
      <span class="vintage-mark">EST.</span>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <span class="vintage-mark bottom">RESERVE</span>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="summary"><h2><span class="h2-text">侍酒札记</span></h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section data-section="experience"><h2><span class="h2-text">侍酒履历</span></h2>
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="entry">
      <div class="entry-head">
        <h3><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section data-section="education"><h2><span class="h2-text">教育背景</span></h2>
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="entry edu">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section data-section="skills"><h2><span class="h2-text">品鉴专长</span></h2><div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="skill-chip"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section data-section="projects"><h2><span class="h2-text">精选臻藏</span></h2>
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="entry">
      <h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.sommelier * { margin:0; padding:0; box-sizing:border-box; }
.resume.sommelier * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.sommelier {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#fbf7ef;
  color:#3a2018;
  font-family:'PingFang SC','Microsoft YaHei',Georgia,'Times New Roman',serif;
  font-size:10pt;
  line-height:1.55;
  --wine:#6e1423;
  --wine-deep:#4a0e18;
  --gold:#b08d4f;
  --gold-light:#cbab6e;
  --cream:#fbf7ef;
  --ink:#3a2018;
}

/* ===== Header — wine label ===== */
.resume.sommelier header {
  text-align:center;
  margin-bottom:9mm;
  padding-bottom:6mm;
}
.resume.sommelier .label-frame {
  position:relative;
  border:2px solid var(--wine);
  border-radius:3px;
  padding:9mm 8mm 8mm;
  background:
    linear-gradient(180deg, rgba(110,20,35,0.04), rgba(110,20,35,0) 40%);
  box-shadow:inset 0 0 0 1px var(--gold-light);
  max-width:130mm;
  margin:0 auto;
}
.resume.sommelier .label-frame::before,
.resume.sommelier .label-frame::after {
  content:'';
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:34mm;
  height:1px;
  background:linear-gradient(90deg, transparent, var(--gold), transparent);
}
.resume.sommelier .label-frame::before { top:6mm; }
.resume.sommelier .label-frame::after { bottom:6mm; }
.resume.sommelier .vintage-mark {
  display:block;
  font-size:7pt;
  letter-spacing:0.4em;
  color:var(--gold);
  text-transform:uppercase;
  font-style:italic;
  margin-bottom:2mm;
}
.resume.sommelier .vintage-mark.bottom { margin:2mm 0 0; }
.resume.sommelier header h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:0.14em;
  color:var(--wine);
  line-height:1.15;
  text-indent:0.14em;
}
.resume.sommelier header h1 + p {
  margin-top:2.5mm;
  font-size:10.5pt;
  font-style:italic;
  letter-spacing:0.22em;
  color:var(--ink);
  text-indent:0.22em;
}
.resume.sommelier .contact {
  margin-top:5mm;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:3mm 0;
  font-size:8.5pt;
  letter-spacing:0.04em;
  color:#5a3a2e;
}
.resume.sommelier .contact span { position:relative; padding:0 5mm; }
.resume.sommelier .contact span + span::before {
  content:'';
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%) rotate(45deg);
  width:3px; height:3px;
  background:var(--gold);
}

/* ===== Section headings ===== */
.resume.sommelier section { margin-bottom:7mm; }
.resume.sommelier h2 {
  position:relative;
  text-align:center;
  margin-bottom:5mm;
  font-size:8.5pt;
  letter-spacing:0.3em;
  text-transform:uppercase;
  color:var(--wine);
}
.resume.sommelier h2::before,
.resume.sommelier h2::after {
  content:'';
  position:absolute;
  top:50%;
  width:34%;
  height:1px;
  background:linear-gradient(90deg, transparent, var(--gold-light), var(--gold));
}
.resume.sommelier h2::before { left:0; }
.resume.sommelier h2::after { right:0; transform:scaleX(-1); }
.resume.sommelier .h2-text {
  display:inline-block;
  padding:0 4mm;
  position:relative;
}
.resume.sommelier .h2-text::before {
  content:'❦';
  margin-right:2mm;
  color:var(--gold);
  font-size:9pt;
}

/* ===== Summary ===== */
.resume.sommelier .summary div {
  text-align:center;
  font-style:italic;
  font-size:10pt;
  line-height:1.7;
  color:#4a2c22;
  max-width:150mm;
  margin:0 auto;
}

/* ===== Entries ===== */
.resume.sommelier .entry {
  position:relative;
  margin-bottom:5mm;
  padding-left:5mm;
}
.resume.sommelier .entry::before {
  content:'';
  position:absolute;
  left:0;
  top:1.6mm;
  width:1.8mm; height:1.8mm;
  background:var(--wine);
  border:1px solid var(--gold);
  transform:rotate(45deg);
}
.resume.sommelier .entry:last-child { margin-bottom:0; }
.resume.sommelier .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:4mm;
  flex-wrap:wrap;
}
.resume.sommelier h3 {
  font-size:11.5pt;
  font-weight:700;
  color:var(--wine-deep);
  letter-spacing:0.02em;
}
.resume.sommelier h3 .role {
  font-weight:400;
  font-style:italic;
  font-size:10pt;
  color:var(--gold);
}
.resume.sommelier h3 .role::before { content:'· '; color:var(--gold-light); }
.resume.sommelier .date {
  font-size:8pt;
  letter-spacing:0.08em;
  color:#8a6a52;
  font-style:italic;
  white-space:nowrap;
}
.resume.sommelier .edu-meta {
  margin-top:1mm;
  font-size:9.5pt;
  color:#5a3a2e;
  font-style:italic;
}
.resume.sommelier .proj-desc {
  margin-top:1.5mm;
  font-size:9.5pt;
  color:#4a2c22;
  font-style:italic;
}

/* ===== Lists ===== */
.resume.sommelier ul {
  list-style:none;
  margin-top:2.5mm;
}
.resume.sommelier li {
  position:relative;
  padding-left:5mm;
  margin-bottom:1.6mm;
  font-size:9.7pt;
  line-height:1.55;
  color:#3a2018;
}
.resume.sommelier li::before {
  content:'';
  position:absolute;
  left:0;
  top:0.55em;
  width:4px; height:4px;
  background:var(--wine);
  border:1px solid var(--gold);
  transform:rotate(45deg);
}

/* ===== Skills — wine chips ===== */
.resume.sommelier .skills {
  display:flex;
  flex-wrap:wrap;
  gap:2.5mm;
  justify-content:center;
}
.resume.sommelier .skill-chip {
  display:inline-block;
  padding:1.6mm 4.5mm;
  border:1px solid var(--gold);
  border-radius:30px;
  font-size:9pt;
  color:var(--wine-deep);
  background:rgba(176,141,79,0.07);
  letter-spacing:0.02em;
}
.resume.sommelier .skill-chip .lvl {
  color:var(--gold);
  font-style:italic;
}

/* ===== required contract rules ===== */
.resume.sommelier li p, .resume.sommelier li div { margin:0; padding:0; display:inline; }
.resume.sommelier .skills span, .resume.sommelier [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.sommelier { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "sommelier",
      "version": "1.0.0",
      "name": "侍酒师",
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
