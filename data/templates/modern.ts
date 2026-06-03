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
    slug: 'modern',
    name: '现代双栏',
    category: 'creative',
    html: `<div class="resume modern">
  <aside class="sidebar">
    {{#if basics.avatar}}<img class="avatar" src="{{{basics.avatar}}}" alt="" />{{/if}}
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact-list">
      {{#if basics.email}}<div class="contact-item" data-field="basics.email">{{{basics.email}}}</div>{{/if}}
      {{#if basics.phone}}<div class="contact-item" data-field="basics.phone">{{{basics.phone}}}</div>{{/if}}
      {{#if basics.location}}<div class="contact-item" data-field="basics.location">{{{basics.location}}}</div>{{/if}}
    </div>
    {{#if skills.length}}<div class="sidebar-section" data-section="skills"><h2>专业技能</h2>{{#each skills}}<div class="skill-item" data-entry="skills" data-entry-index="{{@index}}"><span class="skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="skill-level" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</div>{{/each}}</div>{{/if}}
  </aside>
  <main class="main-content">
    {{#if basics.summary}}<section class="section"><h2><span class="sec-no">01</span>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
    {{#if experience.length}}<section class="section" data-section="experience"><h2><span class="sec-no">02</span>工作经历</h2>{{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}"><h3><span data-field="experience.{{@index}}.position">{{{position}}}</span> <span class="at">@</span> <span data-field="experience.{{@index}}.company">{{{company}}}</span></h3><span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}</section>{{/if}}
    {{#if education.length}}<section class="section" data-section="education"><h2><span class="sec-no">03</span>教育背景</h2>{{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}"><h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3><p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span> · <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></p></div>{{/each}}</section>{{/if}}
    {{#if projects.length}}<section class="section" data-section="projects"><h2><span class="sec-no">04</span>项目经历</h2>{{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}"><h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} — <span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3><span class="date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>{{#if description}}<div data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}{{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}</div>{{/each}}</section>{{/if}}
  </main>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.modern {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  display: flex;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  color: #44403C;
  background: #fff;
}

/* ── Sidebar ── */
.sidebar {
  width: 195px;
  min-width: 195px;
  background: #1C1917;
  color: #F5F5F4;
  padding: 20mm 16px 24px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 14px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.12);
  background: #292524;
}

.sidebar h1 {
  font-size: 15pt;
  font-weight: 700;
  color: #F5F5F4;
  line-height: 1.25;
  letter-spacing: 0.3px;
  margin-bottom: 6px;
  padding-bottom: 8px;
  border-bottom: 2px solid #C9A227;
  word-break: break-word;
}

.sidebar .title {
  font-size: 9pt;
  color: #A8A29E;
  line-height: 1.4;
  margin-bottom: 14px;
}

.contact-list { margin-bottom: 16px; }

.contact-item {
  font-size: 8.5pt;
  margin-bottom: 5px;
  color: #A8A29E;
  word-break: break-all;
  line-height: 1.4;
}

/* ── Sidebar Section ── */
.sidebar-section { margin-top: 14px; }

.sidebar-section h2 {
  font-size: 8pt;
  color: #F5F5F4;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 4px;
  margin-bottom: 8px;
}

.skill-item {
  font-size: 8.5pt;
  margin-bottom: 5px;
  line-height: 1.4;
  word-break: break-word;
  color: #D6D3D1;
}

.skill-name { color: #D6D3D1; }
.skill-level { color: #78716C; font-size: 8pt; }

/* ── Main Content ── */
.main-content {
  flex: 1;
  padding: 20mm 20px 24px 22px;
  min-width: 0;
}

.main-content .section { margin-bottom: 13px; }

.main-content h2 {
  display: flex;
  align-items: baseline;
  gap: 9px;
  font-size: 9pt;
  color: #1C1917;
  letter-spacing: 1px;
  font-weight: 700;
  border-bottom: 1px solid #D6D3D1;
  padding-bottom: 4px;
  margin-bottom: 8px;
}

.main-content h2 .sec-no {
  font-size: 8pt;
  font-weight: 700;
  color: #C9A227;
  letter-spacing: 0.5px;
  font-feature-settings: "tnum";
}

.entry { margin-bottom: 9px; }
.entry:last-child { margin-bottom: 0; }

.entry h3 {
  font-size: 10pt;
  font-weight: 600;
  color: #1C1917;
  line-height: 1.4;
}

.at { color: #A8A29E; font-weight: 400; }

.date {
  font-size: 8.5pt;
  color: #78716C;
  margin-top: 1px;
  display: block;
}

.entry ul {
  margin-top: 4px;
  padding-left: 15px;
}

.entry li {
  font-size: 9pt;
  color: #44403C;
  margin-bottom: 2px;
  line-height: 1.5;
}

.entry p {
  font-size: 9pt;
  color: #57534E;
  margin-top: 2px;
  line-height: 1.5;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.modern { margin: 0; }
  .sidebar { background: #1C1917;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
      "templateId": "modern",
      "version": "1.0.0",
      "name": "现代双栏",
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
