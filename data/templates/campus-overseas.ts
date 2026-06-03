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
    slug: 'campus-overseas',
    name: '留学申请',
    category: 'campus',
    html: `<div class="resume campus-overseas">
  <header>
    <div class="name-block">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="summary">
    <h2><span class="zh">个人简介</span><span class="en">Profile</span></h2>
    <div class="sec-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if education.length}}<section class="education" data-section="education">
    <h2><span class="zh">教育背景</span><span class="en">Education</span></h2>
    <div class="sec-body">
      {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if experience.length}}<section class="experience" data-section="experience">
    <h2><span class="zh">工作经历</span><span class="en">Experience</span></h2>
    <div class="sec-body">
      {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="projects" data-section="projects">
    <h2><span class="zh">项目经历</span><span class="en">Projects</span></h2>
    <div class="sec-body">
      {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        </div>
        {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="skills-sec" data-section="skills">
    <h2><span class="zh">专业技能</span><span class="en">Skills</span></h2>
    <div class="sec-body">
      <div class="skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.campus-overseas * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.campus-overseas * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.campus-overseas {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 20mm 18mm;
  background: #fdfcf9;
  color: #2a2724;
  font-size: 10pt;
  line-height: 1.55;
  font-family: 'Georgia', 'Times New Roman', 'Songti SC', 'STSong', 'PingFang SC', 'Microsoft YaHei', serif;
}

/* ===== Header ===== */
.resume.campus-overseas header {
  text-align: center;
  padding-bottom: 14px;
  margin-bottom: 22px;
  border-bottom: 2px solid #1c2a3a;
  position: relative;
}
.resume.campus-overseas header::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  width: 60px;
  height: 1px;
  background: #b08d57;
}
.resume.campus-overseas .name-block { margin-bottom: 8px; }
.resume.campus-overseas h1 {
  font-size: 25pt;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: #1c2a3a;
  line-height: 1.2;
}
.resume.campus-overseas .title {
  font-size: 10.5pt;
  font-style: italic;
  color: #b08d57;
  letter-spacing: 0.04em;
  margin-top: 4px;
}
.resume.campus-overseas .contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px 14px;
  font-size: 9pt;
  color: #5a5550;
  letter-spacing: 0.02em;
  margin-top: 6px;
}
.resume.campus-overseas .contact span {
  position: relative;
  white-space: nowrap;
}
.resume.campus-overseas .contact span + span::before {
  content: '◆';
  position: absolute;
  left: -10px;
  color: #c9b896;
  font-size: 5pt;
  top: 50%;
  transform: translateY(-50%);
}

/* ===== Sections ===== */
.resume.campus-overseas section { margin-bottom: 18px; }
.resume.campus-overseas h2 {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 13pt;
  font-weight: 400;
  color: #1c2a3a;
  letter-spacing: 0.08em;
  padding-bottom: 5px;
  margin-bottom: 11px;
  border-bottom: 1px solid #d8d2c6;
}
.resume.campus-overseas h2 .zh { white-space: nowrap; }
.resume.campus-overseas h2 .en {
  font-size: 8.5pt;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b08d57;
}

.resume.campus-overseas .sec-body { padding-left: 2px; }

/* ===== Summary ===== */
.resume.campus-overseas .summary .sec-body {
  font-size: 10pt;
  line-height: 1.7;
  color: #3a352f;
  text-align: justify;
}

/* ===== Entries ===== */
.resume.campus-overseas .entry { margin-bottom: 12px; }
.resume.campus-overseas .entry:last-child { margin-bottom: 0; }
.resume.campus-overseas .entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}
.resume.campus-overseas h3 {
  font-size: 11pt;
  font-weight: 700;
  color: #1c2a3a;
  line-height: 1.35;
}
.resume.campus-overseas .experience .company { color: #1c2a3a; }
.resume.campus-overseas .experience .position {
  font-weight: 400;
  font-style: italic;
  color: #6a635a;
  margin-left: 8px;
  font-size: 10pt;
}
.resume.campus-overseas .projects .role {
  font-weight: 400;
  font-style: italic;
  color: #b08d57;
  font-size: 9.5pt;
}
.resume.campus-overseas .date {
  font-size: 8.5pt;
  font-style: italic;
  color: #8a837a;
  letter-spacing: 0.03em;
  white-space: nowrap;
  flex-shrink: 0;
}
.resume.campus-overseas .meta {
  font-size: 9.5pt;
  color: #5a554e;
  margin-top: 2px;
}
.resume.campus-overseas .desc {
  font-size: 9.5pt;
  color: #4a443d;
  margin: 3px 0;
  line-height: 1.6;
  text-align: justify;
}

/* ===== Lists ===== */
.resume.campus-overseas ul {
  list-style: none;
  margin-top: 5px;
}
.resume.campus-overseas li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 4px;
  font-size: 9.5pt;
  line-height: 1.6;
  color: #3a352f;
  text-align: justify;
}
.resume.campus-overseas li::before {
  content: '—';
  position: absolute;
  left: 0;
  top: 0;
  color: #b08d57;
  font-weight: 400;
}

/* ===== Skills ===== */
.resume.campus-overseas .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 9px;
}
.resume.campus-overseas .skill {
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
  padding: 3px 11px;
  border: 1px solid #d2c8b6;
  border-radius: 1px;
  background: #faf7f0;
  font-size: 9pt;
  color: #2a2724;
}
.resume.campus-overseas .skill .sk-level {
  font-style: italic;
  font-size: 8pt;
  color: #b08d57;
}

/* ===== required tails ===== */
.resume.campus-overseas li p, .resume.campus-overseas li div { margin: 0; padding: 0; display: inline; }
.resume.campus-overseas .skills span, .resume.campus-overseas [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.campus-overseas { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "campus-overseas",
      "version": "1.0.0",
      "name": "留学申请",
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
