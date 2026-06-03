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
    slug: 'call-center',
    name: '呼叫中心',
    category: 'profession',
    html: `<div class="resume call-center">
  <header>
    <div class="cc-headline">
      <div class="cc-avatar" aria-hidden="true">
        <svg viewBox="0 0 48 48" class="cc-headset">
          <path d="M10 26v-2a14 14 0 0 1 28 0v2" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
          <rect x="7" y="25" width="6" height="11" rx="3" fill="currentColor"/>
          <rect x="35" y="25" width="6" height="11" rx="3" fill="currentColor"/>
          <path d="M38 34v3a5 5 0 0 1-5 5h-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="cc-headtext">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="cc-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="cc-wave" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span class="cc-chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="cc-chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="cc-chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="cc-summary"><h2>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2>工作经历</h2>
    {{#each experience}}<div class="cc-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="cc-entry-head">
        <h3><span class="cc-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="cc-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2>教育背景</h2>
    {{#each education}}<div class="cc-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="cc-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="cc-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="cc-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="cc-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="cc-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="cc-company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="cc-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="cc-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.call-center * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.call-center * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.call-center {
  --teal: #0e9488;
  --teal-dark: #0b6f66;
  --teal-soft: #e6f4f2;
  --teal-line: #b9e0db;
  --ink: #233037;
  --muted: #66767d;
  --gray-bg: #f4f6f6;
  --gray-line: #dde3e3;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 18mm;
  background: #fff;
  font-size: 10pt;
  line-height: 1.5;
  color: var(--ink);
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

/* ===== Header ===== */
.resume.call-center header {
  position: relative;
  padding-bottom: 14px;
  margin-bottom: 18px;
  border-bottom: 2px solid var(--teal);
}
.resume.call-center .cc-headline {
  display: flex;
  align-items: center;
  gap: 14px;
}
.resume.call-center .cc-avatar {
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--teal-soft);
  border: 1.5px solid var(--teal-line);
  color: var(--teal);
  display: flex;
  align-items: center;
  justify-content: center;
}
.resume.call-center .cc-headset { width: 30px; height: 30px; }
.resume.call-center .cc-headtext { flex: 1 1 auto; min-width: 0; }
.resume.call-center .cc-headtext h1 {
  font-size: 23pt;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--ink);
  line-height: 1.1;
}
.resume.call-center .cc-title {
  margin-top: 3px;
  font-size: 10.5pt;
  font-weight: 600;
  color: var(--teal-dark);
  letter-spacing: 0.5px;
}

/* Sound wave detail */
.resume.call-center .cc-wave {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 3px;
  height: 30px;
}
.resume.call-center .cc-wave span {
  display: block;
  width: 3px;
  border-radius: 2px;
  background: var(--teal);
  opacity: 0.85;
}
.resume.call-center .cc-wave span:nth-child(1) { height: 8px; }
.resume.call-center .cc-wave span:nth-child(2) { height: 16px; }
.resume.call-center .cc-wave span:nth-child(3) { height: 24px; }
.resume.call-center .cc-wave span:nth-child(4) { height: 12px; }
.resume.call-center .cc-wave span:nth-child(5) { height: 28px; }
.resume.call-center .cc-wave span:nth-child(6) { height: 18px; background: var(--teal-dark); }
.resume.call-center .cc-wave span:nth-child(7) { height: 26px; }
.resume.call-center .cc-wave span:nth-child(8) { height: 10px; }
.resume.call-center .cc-wave span:nth-child(9) { height: 20px; }
.resume.call-center .cc-wave span:nth-child(10) { height: 7px; }

.resume.call-center .contact {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.resume.call-center .cc-chip {
  display: inline-flex;
  align-items: center;
  padding: 3px 11px;
  background: var(--gray-bg);
  border: 1px solid var(--gray-line);
  border-radius: 12px;
  font-size: 9pt;
  color: var(--muted);
  position: relative;
}
.resume.call-center .cc-chip::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--teal);
  margin-right: 7px;
}

/* ===== Sections ===== */
.resume.call-center section { margin-bottom: 16px; }
.resume.call-center h2 {
  position: relative;
  font-size: 11.5pt;
  font-weight: 700;
  color: var(--ink);
  padding-left: 16px;
  margin-bottom: 11px;
  letter-spacing: 1px;
}
.resume.call-center h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 14px;
  border-radius: 3px;
  background: var(--teal);
}
.resume.call-center h2::after {
  content: '';
  position: absolute;
  left: 16px;
  right: 0;
  bottom: -3px;
  height: 1px;
  background: var(--gray-line);
}

/* ===== Summary ===== */
.resume.call-center .cc-summary > div {
  background: var(--teal-soft);
  border-left: 3px solid var(--teal);
  padding: 9px 13px;
  border-radius: 0 6px 6px 0;
  color: var(--ink);
  font-size: 9.8pt;
}

/* ===== Entries ===== */
.resume.call-center .cc-entry { margin-bottom: 12px; }
.resume.call-center .cc-entry:last-child { margin-bottom: 0; }
.resume.call-center .cc-entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}
.resume.call-center h3 {
  font-size: 10.5pt;
  font-weight: 600;
  color: var(--ink);
}
.resume.call-center .cc-company { font-weight: 700; }
.resume.call-center .cc-position {
  margin-left: 8px;
  font-weight: 500;
  color: var(--teal-dark);
}
.resume.call-center .date {
  flex: 0 0 auto;
  font-size: 8.6pt;
  color: var(--muted);
  background: var(--gray-bg);
  padding: 1px 8px;
  border-radius: 10px;
  white-space: nowrap;
}
.resume.call-center .cc-edu-meta {
  margin-top: 2px;
  font-size: 9.3pt;
  color: var(--muted);
}

.resume.call-center ul {
  list-style: none;
  margin-top: 5px;
}
.resume.call-center li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 3px;
  font-size: 9.6pt;
  color: #3a4a51;
}
.resume.call-center li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.62em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1.5px solid var(--teal);
}

/* ===== Skills ===== */
.resume.call-center .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.resume.call-center .cc-skill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: #fff;
  border: 1px solid var(--teal-line);
  border-radius: 14px;
  font-size: 9pt;
  color: var(--teal-dark);
  font-weight: 500;
}
.resume.call-center .cc-level { color: var(--muted); font-weight: 400; }

/* ===== Projects ===== */
.resume.call-center .cc-proj-desc {
  margin-top: 3px;
  font-size: 9.5pt;
  color: var(--muted);
}

/* ===== Required tail rules ===== */
.resume.call-center li p, .resume.call-center li div { margin: 0; padding: 0; display: inline; }
.resume.call-center .skills span, .resume.call-center [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print {
  .resume.call-center { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; }
}`,
    schema: {
      "templateId": "call-center",
      "version": "1.0.0",
      "name": "呼叫中心",
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
