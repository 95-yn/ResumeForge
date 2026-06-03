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
    slug: 'campus-engineering',
    name: '工科校招',
    category: 'campus',
    html: `<div class="resume campus-engineering">
  <header>
    <div class="hd-grid"></div>
    <div class="hd-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="sec-summary"><h2>个人简介</h2><div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if projects.length}}<section class="sec-projects" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="entry proj-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if experience.length}}<section class="sec-experience" data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="entry exp-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="exp-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="exp-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="sec-education" data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="entry edu-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="sec-skills" data-section="skills"><h2>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}
</div>`,
    css: `.resume.campus-engineering * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.campus-engineering * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.campus-engineering {
  --ce-ink: #1b2733;
  --ce-blue: #1f4e79;
  --ce-accent: #2f6fb3;
  --ce-slate: #5c6b7a;
  --ce-line: #d3dce4;
  --ce-grid: #eef3f7;
  --ce-bg-soft: #f5f8fb;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm 20mm;
  background: #fff;
  color: var(--ce-ink);
  font-size: 10pt;
  line-height: 1.55;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  counter-reset: ce-sec;
}

.resume.campus-engineering header {
  position: relative;
  margin-bottom: 9mm;
  padding: 7mm 8mm;
  background: var(--ce-blue);
  color: #fff;
  overflow: hidden;
  border-radius: 2px;
}
.resume.campus-engineering .hd-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px);
  background-size: 7mm 7mm;
  pointer-events: none;
}
.resume.campus-engineering .hd-main { position: relative; z-index: 1; }
.resume.campus-engineering header h1 {
  font-size: 23pt;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 1.1;
}
.resume.campus-engineering .hd-title {
  margin-top: 2mm;
  font-size: 11pt;
  font-weight: 500;
  letter-spacing: 1px;
  color: #cfe1f2;
}
.resume.campus-engineering header .contact {
  margin-top: 5mm;
  display: flex;
  flex-wrap: wrap;
  gap: 5mm;
  font-size: 9pt;
  color: #e3edf6;
}
.resume.campus-engineering header .contact span {
  position: relative;
  padding-left: 4mm;
}
.resume.campus-engineering header .contact span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.6mm;
  height: 1.6mm;
  background: #8fc0e8;
}

.resume.campus-engineering section { margin-bottom: 7mm; counter-increment: ce-sec; }
.resume.campus-engineering h2 {
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 3mm;
  font-size: 12pt;
  font-weight: 700;
  color: var(--ce-blue);
  letter-spacing: 1px;
  padding: 0 0 2mm 0;
  margin-bottom: 4mm;
  border-bottom: 1.5px solid var(--ce-line);
}
.resume.campus-engineering h2::before {
  content: counter(ce-sec, decimal-leading-zero);
  font-family: 'Consolas', 'PingFang SC', monospace;
  font-size: 9pt;
  font-weight: 700;
  color: #fff;
  background: var(--ce-accent);
  padding: 0.6mm 1.8mm;
  border-radius: 2px;
  letter-spacing: 0.5px;
  align-self: center;
}

.resume.campus-engineering .summary-body {
  color: var(--ce-slate);
  font-size: 10pt;
  text-align: justify;
}

.resume.campus-engineering .entry { margin-bottom: 4.5mm; }
.resume.campus-engineering .entry:last-child { margin-bottom: 0; }
.resume.campus-engineering .entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 4mm;
}
.resume.campus-engineering .entry h3 {
  font-size: 10.5pt;
  font-weight: 700;
  color: var(--ce-ink);
}
.resume.campus-engineering .date {
  flex-shrink: 0;
  font-size: 8.5pt;
  font-weight: 600;
  color: var(--ce-accent);
  font-family: 'Consolas', 'PingFang SC', monospace;
  white-space: nowrap;
}

.resume.campus-engineering .proj-entry {
  position: relative;
  padding: 3mm 4mm 3mm 8mm;
  margin-bottom: 3.5mm;
  background: var(--ce-bg-soft);
  border: 1px solid var(--ce-line);
  border-radius: 2px;
}
.resume.campus-engineering .proj-entry::before {
  content: '';
  position: absolute;
  left: 3mm;
  top: 4.2mm;
  width: 2.4mm;
  height: 2.4mm;
  background: var(--ce-accent);
  transform: rotate(45deg);
}
.resume.campus-engineering .proj-entry h3 { margin-bottom: 1.5mm; }
.resume.campus-engineering .proj-name { color: var(--ce-blue); }
.resume.campus-engineering .proj-role {
  display: inline-block;
  margin-left: 2mm;
  padding: 0.3mm 2mm;
  font-size: 8pt;
  font-weight: 600;
  color: var(--ce-accent);
  background: #fff;
  border: 1px solid var(--ce-line);
  border-radius: 2px;
  vertical-align: middle;
}
.resume.campus-engineering .proj-desc {
  color: var(--ce-slate);
  font-size: 9.5pt;
  margin-bottom: 1.5mm;
}

.resume.campus-engineering .exp-company { color: var(--ce-blue); }
.resume.campus-engineering .exp-position {
  margin-left: 2.5mm;
  font-weight: 500;
  color: var(--ce-slate);
}
.resume.campus-engineering .exp-position::before {
  content: '/';
  margin-right: 2.5mm;
  color: var(--ce-line);
  font-weight: 400;
}

.resume.campus-engineering ul {
  list-style: none;
  margin-top: 1.5mm;
}
.resume.campus-engineering li {
  position: relative;
  padding-left: 4.5mm;
  margin-bottom: 1.2mm;
  font-size: 9.5pt;
  color: #33424f;
}
.resume.campus-engineering li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 2.1mm;
  width: 1.8mm;
  height: 1.8mm;
  border: 1px solid var(--ce-accent);
  background: transparent;
}

.resume.campus-engineering .edu-meta {
  margin-top: 0.8mm;
  font-size: 9.5pt;
  color: var(--ce-slate);
}

.resume.campus-engineering .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5mm;
}
.resume.campus-engineering .skill-tag {
  display: inline-block;
  padding: 1mm 3mm;
  font-size: 9pt;
  font-weight: 500;
  color: var(--ce-ink);
  background: var(--ce-grid);
  border: 1px solid var(--ce-line);
  border-radius: 2px;
}
.resume.campus-engineering .skill-tag .skill-lv {
  color: var(--ce-accent);
  font-weight: 600;
}

.resume.campus-engineering li p,
.resume.campus-engineering li div { margin: 0; padding: 0; display: inline; }
.resume.campus-engineering .skills span,
.resume.campus-engineering [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.campus-engineering { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "campus-engineering",
      "version": "1.0.0",
      "name": "工科校招",
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
