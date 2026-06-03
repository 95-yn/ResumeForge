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
    slug: 'customer-support',
    name: '客户支持',
    category: 'profession',
    html: `<div class="resume customer-support">
  <header>
    <div class="cs-avatar" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a8 8 0 0 0-8 8v3a3 3 0 0 0 3 3h1v-6H6v-0a6 6 0 0 1 12 0v0h-2v6h1a3 3 0 0 0 3-3v-3a8 8 0 0 0-8-8z" fill="currentColor"/><path d="M9 18.5h6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" fill="currentColor"/></svg>
    </div>
    <div class="cs-head-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="cs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact cs-contact">
        {{#if basics.email}}<span class="cs-chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="cs-chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="cs-chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="cs-summary">
    <h2>个人简介</h2>
    <div class="cs-bubble" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="cs-block" data-section="experience">
    <h2>工作经历</h2>
    {{#each experience}}<div class="cs-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="cs-entry-head">
        <h3><span class="cs-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="cs-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date cs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="cs-block" data-section="education">
    <h2>教育背景</h2>
    {{#each education}}<div class="cs-entry cs-edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="cs-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date cs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="cs-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="cs-block" data-section="skills">
    <h2>专业技能</h2>
    <div class="skills cs-skills">{{#each skills}}<span class="cs-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="cs-skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="cs-block" data-section="projects">
    <h2>项目经历</h2>
    {{#each projects}}<div class="cs-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="cs-company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="cs-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="cs-proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="cs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.customer-support * { margin:0; padding:0; box-sizing:border-box; }
.resume.customer-support * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.customer-support {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.55;
  color:#2a3a4d;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --cs-blue:#2e9be6;
  --cs-blue-dk:#1c7fc4;
  --cs-sky:#e7f4fd;
  --cs-sky-2:#f3f9fe;
  --cs-ink:#2a3a4d;
  --cs-muted:#6b8095;
}

/* ===== Header ===== */
.resume.customer-support header {
  display:flex;
  align-items:center;
  gap:16px;
  background:linear-gradient(135deg,#3aa6ef 0%,#1c7fc4 100%);
  border-radius:22px;
  padding:20px 24px;
  color:#fff;
  position:relative;
  overflow:hidden;
}
.resume.customer-support header::after {
  content:"";
  position:absolute;
  right:-30px;
  top:-30px;
  width:120px;
  height:120px;
  background:rgba(255,255,255,.12);
  border-radius:50% 50% 50% 4px;
}
.resume.customer-support .cs-avatar {
  flex:0 0 auto;
  width:58px;
  height:58px;
  border-radius:50% 50% 50% 8px;
  background:rgba(255,255,255,.92);
  color:var(--cs-blue);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:1;
}
.resume.customer-support .cs-avatar svg { width:32px; height:32px; }
.resume.customer-support .cs-head-main { z-index:1; min-width:0; }
.resume.customer-support header h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.customer-support .cs-title {
  font-size:11pt;
  font-weight:500;
  margin-top:3px;
  color:rgba(255,255,255,.92);
}
.resume.customer-support .cs-contact {
  margin-top:10px;
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.customer-support .cs-chip {
  display:inline-block;
  background:rgba(255,255,255,.2);
  border:1px solid rgba(255,255,255,.32);
  padding:3px 12px;
  border-radius:20px;
  font-size:8.6pt;
  color:#fff;
  white-space:nowrap;
}

/* ===== Section headings ===== */
.resume.customer-support section { margin-top:18px; }
.resume.customer-support h2 {
  font-size:12pt;
  font-weight:700;
  color:var(--cs-blue-dk);
  display:flex;
  align-items:center;
  gap:9px;
  margin-bottom:11px;
}
.resume.customer-support h2::before {
  content:"";
  width:13px;
  height:13px;
  background:var(--cs-blue);
  border-radius:50% 50% 50% 2px;
  flex:0 0 auto;
}
.resume.customer-support h2::after {
  content:"";
  flex:1;
  height:2px;
  background:linear-gradient(90deg,var(--cs-sky),transparent);
  border-radius:2px;
}

/* ===== Summary bubble ===== */
.resume.customer-support .cs-bubble {
  background:var(--cs-sky);
  border-radius:16px 16px 16px 4px;
  padding:13px 17px;
  color:var(--cs-ink);
  position:relative;
}

/* ===== Entries ===== */
.resume.customer-support .cs-entry {
  position:relative;
  padding:11px 15px 11px 17px;
  margin-bottom:9px;
  background:var(--cs-sky-2);
  border-radius:14px;
  border-left:3px solid var(--cs-blue);
}
.resume.customer-support .cs-entry:last-child { margin-bottom:0; }
.resume.customer-support .cs-entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
.resume.customer-support .cs-entry h3 {
  font-size:11pt;
  font-weight:700;
  color:var(--cs-ink);
}
.resume.customer-support .cs-company { color:var(--cs-blue-dk); }
.resume.customer-support .cs-position {
  font-weight:500;
  color:var(--cs-muted);
  margin-left:9px;
  font-size:10pt;
}
.resume.customer-support .cs-date {
  font-size:8.6pt;
  color:#fff;
  background:var(--cs-blue);
  padding:2px 11px;
  border-radius:16px;
  white-space:nowrap;
  flex:0 0 auto;
}

/* ===== Lists ===== */
.resume.customer-support .cs-list {
  list-style:none;
  margin-top:7px;
}
.resume.customer-support .cs-list li {
  position:relative;
  padding-left:18px;
  margin-bottom:3px;
  color:var(--cs-ink);
}
.resume.customer-support .cs-list li::before {
  content:"";
  position:absolute;
  left:2px;
  top:6px;
  width:7px;
  height:7px;
  background:var(--cs-blue);
  border-radius:50% 50% 50% 1px;
}

/* ===== Education ===== */
.resume.customer-support .cs-edu-meta {
  margin-top:4px;
  color:var(--cs-muted);
  font-size:9.4pt;
}

/* ===== Skills ===== */
.resume.customer-support .cs-skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.customer-support .cs-skill {
  background:var(--cs-sky);
  color:var(--cs-blue-dk);
  border:1px solid #c7e6fb;
  padding:5px 14px;
  border-radius:20px 20px 20px 4px;
  font-size:9.2pt;
  font-weight:500;
}
.resume.customer-support .cs-skill-lv {
  color:var(--cs-muted);
  font-weight:400;
}

/* ===== Projects ===== */
.resume.customer-support .cs-proj-desc {
  margin-top:5px;
  color:var(--cs-ink);
}

/* ===== Required tail rules ===== */
.resume.customer-support li p, .resume.customer-support li div { margin:0; padding:0; display:inline; }
.resume.customer-support .skills span, .resume.customer-support [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.customer-support { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "customer-support",
      "version": "1.0.0",
      "name": "客户支持",
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
