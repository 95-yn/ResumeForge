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
    slug: 'sustainability',
    name: '可持续发展',
    category: 'profession',
    html: `<div class="resume sustainability">
  <header>
    <div class="leaf-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" width="40" height="40">
        <path d="M20 4 C8 10 6 26 12 36 C14 28 18 20 30 12 C22 18 18 26 16 34 C26 32 36 20 20 4 Z" fill="#4a7c3f"/>
        <path d="M20 6 C18 14 17 24 14 34" stroke="#dfe8d6" stroke-width="0.8" fill="none"/>
      </svg>
    </div>
    <div class="head-text">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary">
    <h2><span class="vein"></span>个人简介</h2>
    <div class="body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="vein"></span>工作经历</h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <h3>
        <span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="dot">·</span>
        <span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span>
      </h3>
      <span class="date">
        <span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>
        <span class="sep">–</span>
        <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>
      </span>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="vein"></span>教育背景</h2>
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <span class="date">
        <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>
        <span class="sep">–</span>
        <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>
      </span>
      <p class="edu-meta">
        <span data-field="education.{{@index}}.area">{{{area}}}</span>
        <span class="dot">·</span>
        <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
      </p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="vein"></span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-pill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl">·</span> <span data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="vein"></span>项目经历</h2>
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3>
        <span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="dot">·</span> <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.sustainability * { margin:0; padding:0; box-sizing:border-box; }
.resume.sustainability * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.sustainability {
  --leaf:#4a7c3f;
  --leaf-deep:#2f5226;
  --leaf-soft:#8aa97c;
  --paper:#f4f1e6;
  --paper-line:#e3ddca;
  --ink:#33372d;
  --ink-soft:#6a6e5e;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:
    repeating-linear-gradient(0deg, transparent 0, transparent 5mm, rgba(74,124,63,0.035) 5mm, rgba(74,124,63,0.035) calc(5mm + 0.6px)),
    #f8f6ee;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ---------- header ---------- */
.resume.sustainability header {
  display:flex;
  align-items:flex-start;
  gap:14px;
  padding:0 0 14px;
  border-bottom:1.5px solid var(--leaf);
  position:relative;
  margin-bottom:18px;
}
.resume.sustainability header::after {
  content:"";
  position:absolute;
  left:0; right:0; bottom:-4px;
  height:1px;
  background:var(--leaf-soft);
  opacity:0.5;
}
.resume.sustainability .leaf-mark {
  flex:0 0 auto;
  width:48px; height:48px;
  display:flex; align-items:center; justify-content:center;
  border:1.5px solid var(--leaf);
  border-radius:50% 50% 50% 0;
  background:rgba(74,124,63,0.06);
}
.resume.sustainability .leaf-mark svg { display:block; }
.resume.sustainability .head-text { flex:1 1 auto; }
.resume.sustainability h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:1px;
  color:var(--leaf-deep);
  line-height:1.1;
}
.resume.sustainability .title {
  margin-top:3px;
  font-size:10.5pt;
  color:var(--leaf);
  font-weight:600;
  letter-spacing:0.5px;
}
.resume.sustainability .contact {
  margin-top:8px;
  display:flex;
  flex-wrap:wrap;
  gap:6px 14px;
  font-size:9pt;
  color:var(--ink-soft);
}
.resume.sustainability .contact span {
  position:relative;
  padding-left:14px;
}
.resume.sustainability .contact span::before {
  content:"";
  position:absolute;
  left:0; top:50%;
  width:6px; height:6px;
  transform:translateY(-50%) rotate(45deg);
  border-radius:60% 0 60% 0;
  background:var(--leaf-soft);
}

/* ---------- sections ---------- */
.resume.sustainability .block { margin-bottom:16px; }
.resume.sustainability h2 {
  display:flex;
  align-items:center;
  gap:8px;
  font-size:11pt;
  font-weight:700;
  color:var(--leaf-deep);
  letter-spacing:2px;
  padding-bottom:5px;
  margin-bottom:9px;
  border-bottom:1px dashed var(--leaf-soft);
}
.resume.sustainability h2 .vein {
  flex:0 0 auto;
  width:16px; height:16px;
  background:
    linear-gradient(var(--leaf),var(--leaf)) center/1.4px 100% no-repeat,
    linear-gradient(var(--leaf-soft),var(--leaf-soft)) 50% 30%/9px 1px no-repeat,
    linear-gradient(var(--leaf-soft),var(--leaf-soft)) 50% 55%/12px 1px no-repeat,
    linear-gradient(var(--leaf-soft),var(--leaf-soft)) 50% 78%/8px 1px no-repeat;
  border-radius:50% 50% 50% 0;
  border:1px solid var(--leaf);
  transform:rotate(-45deg);
}

.resume.sustainability .summary .body {
  font-size:9.7pt;
  color:var(--ink);
  text-align:justify;
  padding-left:14px;
  border-left:2px solid var(--leaf-soft);
}

/* ---------- entries ---------- */
.resume.sustainability .entry {
  position:relative;
  padding:0 0 0 16px;
  margin-bottom:11px;
}
.resume.sustainability .entry::before {
  content:"";
  position:absolute;
  left:3px; top:5px;
  width:7px; height:7px;
  background:var(--leaf);
  border-radius:60% 0 60% 0;
}
.resume.sustainability .entry::after {
  content:"";
  position:absolute;
  left:6px; top:14px; bottom:2px;
  width:1px;
  background:var(--paper-line);
}
.resume.sustainability .entry:last-child::after { display:none; }

.resume.sustainability .entry h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--ink);
  line-height:1.35;
}
.resume.sustainability .entry .company,
.resume.sustainability .entry .proj-name { color:var(--leaf-deep); }
.resume.sustainability .entry .position,
.resume.sustainability .entry .role { color:var(--leaf); font-weight:600; }
.resume.sustainability .dot { color:var(--leaf-soft); margin:0 2px; font-weight:400; }

.resume.sustainability .date {
  display:inline-block;
  margin-top:2px;
  font-size:8.5pt;
  color:var(--ink-soft);
  font-style:italic;
  letter-spacing:0.3px;
}
.resume.sustainability .date .sep { margin:0 2px; }

.resume.sustainability .edu-meta {
  margin-top:2px;
  font-size:9.5pt;
  color:var(--ink-soft);
}

.resume.sustainability .proj-desc {
  margin-top:3px;
  font-size:9.5pt;
  color:var(--ink);
}

.resume.sustainability ul {
  list-style:none;
  margin-top:5px;
}
.resume.sustainability li {
  position:relative;
  padding-left:14px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:var(--ink);
}
.resume.sustainability li::before {
  content:"";
  position:absolute;
  left:0; top:6px;
  width:6px; height:6px;
  background:var(--leaf-soft);
  border-radius:60% 0 60% 0;
  transform:rotate(10deg);
}

/* ---------- skills ---------- */
.resume.sustainability .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.sustainability .skill-pill {
  display:inline-flex;
  align-items:center;
  padding:3px 11px;
  font-size:9pt;
  color:var(--leaf-deep);
  background:rgba(74,124,63,0.07);
  border:1px solid var(--leaf-soft);
  border-radius:11px 11px 11px 2px;
}
.resume.sustainability .skill-pill .lvl { color:var(--leaf-soft); margin:0 3px; }

/* ---------- mandatory ---------- */
.resume.sustainability li p, .resume.sustainability li div { margin:0; padding:0; display:inline; }
.resume.sustainability .skills span, .resume.sustainability [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.sustainability { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "sustainability",
      "version": "1.0.0",
      "name": "可持续发展",
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
