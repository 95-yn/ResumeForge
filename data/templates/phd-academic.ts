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
    slug: 'phd-academic',
    name: '博士学者',
    category: 'profession',
    html: `<div class="resume phd-academic">
  <header>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="block summary"><h2>个人简介</h2><div class="rule"></div><div class="prose" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
  {{#if experience.length}}<section class="block" data-section="experience"><h2>工作经历</h2><div class="rule"></div>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="org" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep">,</span> <span class="role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section class="block" data-section="education"><h2>教育背景</h2><div class="rule"></div>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="degree"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span class="study" data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section class="block" data-section="skills"><h2>专业技能</h2><div class="rule"></div><div class="skills">{{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
  {{#if projects.length}}<section class="block" data-section="projects"><h2>项目经历</h2><div class="rule"></div>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="sep"> · </span><span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="prose" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.phd-academic * { margin:0; padding:0; box-sizing:border-box; }
.resume.phd-academic * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.phd-academic {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:20mm 18mm;
  background:#f7f4ec;
  color:#1c1a16;
  font-family:'Songti SC','SimSun',Georgia,'Times New Roman','PingFang SC','Microsoft YaHei',serif;
  font-size:10.5pt;
  line-height:1.62;
}

/* ---------- Header ---------- */
.resume.phd-academic header {
  text-align:center;
  padding-bottom:14px;
  margin-bottom:22px;
  border-bottom:2.5px solid #1c1a16;
  position:relative;
}
.resume.phd-academic header::after {
  content:"";
  position:absolute;
  left:0; right:0;
  bottom:-6px;
  height:0.8px;
  background:#1c1a16;
}
.resume.phd-academic h1 {
  font-size:25pt;
  font-weight:600;
  letter-spacing:0.06em;
  line-height:1.15;
  color:#14120e;
}
.resume.phd-academic .title {
  margin-top:7px;
  font-size:11pt;
  font-style:italic;
  letter-spacing:0.04em;
  color:#5a544a;
}
.resume.phd-academic .contact {
  margin-top:11px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:6px 20px;
  font-size:9pt;
  letter-spacing:0.02em;
  color:#3a352d;
}
.resume.phd-academic .contact span {
  position:relative;
  white-space:nowrap;
}
.resume.phd-academic .contact span + span::before {
  content:"·";
  position:absolute;
  left:-12px;
  color:#9a9182;
}

/* ---------- Section ---------- */
.resume.phd-academic .block { margin-bottom:20px; }
.resume.phd-academic h2 {
  font-size:10.5pt;
  font-weight:600;
  text-transform:uppercase;
  letter-spacing:0.22em;
  color:#14120e;
}
.resume.phd-academic .rule {
  height:1px;
  background:#bcb3a0;
  margin:6px 0 12px;
  position:relative;
}
.resume.phd-academic .rule::before {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:42px;
  height:1px;
  background:#1c1a16;
}

/* ---------- Entries (publication-list style) ---------- */
.resume.phd-academic .entry {
  margin-bottom:13px;
  padding-left:18px;
  position:relative;
  break-inside:avoid;
}
.resume.phd-academic .entry::before {
  content:"";
  position:absolute;
  left:2px;
  top:0.62em;
  width:5px;
  height:5px;
  border:1px solid #1c1a16;
  transform:rotate(45deg);
}
.resume.phd-academic .entry:last-child { margin-bottom:0; }

.resume.phd-academic .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:14px;
}
.resume.phd-academic h3 {
  font-size:11pt;
  font-weight:600;
  letter-spacing:0.01em;
  color:#14120e;
  line-height:1.4;
}
.resume.phd-academic .org { font-weight:600; }
.resume.phd-academic .role {
  font-weight:400;
  font-style:italic;
  color:#3a352d;
}
.resume.phd-academic .proj { font-weight:600; }
.resume.phd-academic .sep { color:#7c7367; font-weight:400; }

.resume.phd-academic .date {
  font-size:8.5pt;
  font-style:italic;
  letter-spacing:0.03em;
  color:#6a6256;
  white-space:nowrap;
  flex-shrink:0;
}

.resume.phd-academic .degree {
  margin-top:2px;
  font-size:9.5pt;
  color:#3a352d;
}
.resume.phd-academic .study { font-style:italic; color:#5a544a; }

/* ---------- Lists & prose ---------- */
.resume.phd-academic ul {
  list-style:none;
  margin-top:6px;
}
.resume.phd-academic li {
  position:relative;
  padding-left:15px;
  margin-bottom:4px;
  font-size:10pt;
  color:#2a261f;
  line-height:1.6;
  text-align:justify;
}
.resume.phd-academic li::before {
  content:"—";
  position:absolute;
  left:0;
  color:#8a8170;
}
.resume.phd-academic .prose {
  margin-top:4px;
  font-size:10pt;
  color:#2a261f;
  line-height:1.66;
  text-align:justify;
}
.resume.phd-academic .summary .prose { text-align:justify; }

/* ---------- Skills ---------- */
.resume.phd-academic .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 9px;
}
.resume.phd-academic .skill {
  font-size:9pt;
  letter-spacing:0.02em;
  color:#1c1a16;
  padding:3px 11px;
  border:1px solid #c8bfa d;
  border:1px solid #c8bfad;
  background:#fbf9f3;
}
.resume.phd-academic .sk-name { font-weight:600; }
.resume.phd-academic .sk-level { font-style:italic; color:#6a6256; }

/* ---------- Required tails ---------- */
.resume.phd-academic li p, .resume.phd-academic li div { margin:0; padding:0; display:inline; }
.resume.phd-academic .skills span, .resume.phd-academic [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.phd-academic { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "phd-academic",
      "version": "1.0.0",
      "name": "博士学者",
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
