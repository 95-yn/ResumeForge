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
    slug: 'content-creator',
    name: '自媒体博主',
    category: 'creative',
    html: `<div class="resume content-creator">
  <header>
    <div class="cc-avatar">{{{basics.name}}}</div>
    <div class="cc-id">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="cc-badge">@creator</div>
  </header>

  {{#if basics.summary}}<section class="cc-bio"><h2>个人简介</h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience" class="cc-feed"><h2>工作经历</h2>
    {{#each experience}}<div data-entry="experience" data-entry-index="{{@index}}" class="cc-post">
      <div class="cc-post-head">
        <h3><span class="cc-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="cc-role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects" class="cc-projects"><h2>项目经历</h2>
    <div class="cc-grid">
    {{#each projects}}<div data-entry="projects" data-entry-index="{{@index}}" class="cc-card">
      <h3><span class="cc-pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="cc-prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="cc-pdesc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education" class="cc-edu"><h2>教育背景</h2>
    {{#each education}}<div data-entry="education" data-entry-index="{{@index}}" class="cc-erow">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills" class="cc-skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span data-entry="skills" data-entry-index="{{@index}}" class="cc-tag"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="cc-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
</div>`,
    css: `.resume.content-creator * { margin:0; padding:0; box-sizing:border-box; }
.resume.content-creator * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.content-creator {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#1f1a2e;
  --g1:#ff5e8a;
  --g2:#ff8a5b;
  --g3:#7c5cff;
  --g4:#3ec6ff;
  --ink:#1f1a2e;
  --muted:#6b6480;
  --line:#efe9f7;
  --soft:#faf7ff;
}

/* ===== Header ===== */
.resume.content-creator header {
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px 18px;
  border-radius:22px;
  background:linear-gradient(120deg,var(--g3) 0%,var(--g1) 55%,var(--g2) 100%);
  color:#fff;
  position:relative;
  overflow:hidden;
}
.resume.content-creator header::after {
  content:"";
  position:absolute;
  right:-40px;
  top:-40px;
  width:160px;
  height:160px;
  border-radius:50%;
  background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.35),transparent 60%);
}
.resume.content-creator .cc-avatar {
  flex:0 0 auto;
  width:60px;
  height:60px;
  border-radius:50%;
  background:rgba(255,255,255,.22);
  border:2px solid rgba(255,255,255,.55);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18pt;
  font-weight:800;
  letter-spacing:1px;
  overflow:hidden;
  text-indent:0;
  white-space:nowrap;
}
.resume.content-creator .cc-id { flex:1 1 auto; min-width:0; z-index:1; }
.resume.content-creator .cc-id h1 {
  font-size:21pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.content-creator .cc-id > p {
  margin-top:3px;
  font-size:10.5pt;
  font-weight:600;
  opacity:.95;
}
.resume.content-creator .contact {
  margin-top:7px;
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}
.resume.content-creator .contact span {
  font-size:8.4pt;
  font-weight:600;
  background:rgba(255,255,255,.2);
  padding:2px 9px;
  border-radius:999px;
  backdrop-filter:blur(2px);
}
.resume.content-creator .cc-badge {
  z-index:1;
  align-self:flex-start;
  font-size:8pt;
  font-weight:800;
  letter-spacing:.5px;
  background:rgba(255,255,255,.85);
  color:var(--g3);
  padding:3px 10px;
  border-radius:999px;
}

/* ===== Section headings ===== */
.resume.content-creator section { margin-top:16px; }
.resume.content-creator h2 {
  font-size:12.5pt;
  font-weight:800;
  color:var(--ink);
  margin-bottom:10px;
  padding-left:13px;
  position:relative;
  letter-spacing:.5px;
}
.resume.content-creator h2::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:6px;
  height:18px;
  border-radius:4px;
  background:linear-gradient(180deg,var(--g3),var(--g1));
}

/* ===== Bio ===== */
.resume.content-creator .cc-bio div {
  background:var(--soft);
  border:1px solid var(--line);
  border-radius:16px;
  padding:12px 15px;
  font-size:9.6pt;
  color:#3a3450;
  line-height:1.7;
}

/* ===== Experience feed ===== */
.resume.content-creator .cc-post {
  background:#fff;
  border:1px solid var(--line);
  border-radius:16px;
  padding:13px 16px;
  margin-bottom:10px;
  position:relative;
  overflow:hidden;
}
.resume.content-creator .cc-post::before {
  content:"";
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:4px;
  background:linear-gradient(180deg,var(--g1),var(--g2));
}
.resume.content-creator .cc-post-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:6px;
  margin-bottom:7px;
}
.resume.content-creator .cc-post h3 {
  font-size:11pt;
  font-weight:800;
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:8px;
}
.resume.content-creator .cc-company { color:var(--ink); }
.resume.content-creator .cc-role {
  font-size:9pt;
  font-weight:700;
  color:var(--g1);
  background:linear-gradient(120deg,rgba(255,94,138,.12),rgba(124,92,255,.12));
  padding:1px 9px;
  border-radius:999px;
}
.resume.content-creator .date {
  font-size:8.4pt;
  font-weight:700;
  color:var(--muted);
  white-space:nowrap;
}
.resume.content-creator .cc-post ul { list-style:none; }
.resume.content-creator .cc-post li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.4pt;
  color:#403a55;
  line-height:1.6;
}
.resume.content-creator .cc-post li::before {
  content:"";
  position:absolute;
  left:2px;
  top:8px;
  width:6px;
  height:6px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--g3),var(--g4));
}

/* ===== Projects grid ===== */
.resume.content-creator .cc-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}
.resume.content-creator .cc-card {
  background:linear-gradient(160deg,var(--soft),#fff);
  border:1px solid var(--line);
  border-radius:16px;
  padding:12px 14px;
}
.resume.content-creator .cc-card h3 {
  font-size:10.4pt;
  font-weight:800;
  margin-bottom:5px;
  display:flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:7px;
}
.resume.content-creator .cc-pname { color:var(--g3); }
.resume.content-creator .cc-prole {
  font-size:8.2pt;
  font-weight:700;
  color:#fff;
  background:linear-gradient(120deg,var(--g4),var(--g3));
  padding:1px 8px;
  border-radius:999px;
}
.resume.content-creator .cc-pdesc {
  font-size:9pt;
  color:#4a4460;
  margin-bottom:5px;
  line-height:1.6;
}
.resume.content-creator .cc-card ul { list-style:none; }
.resume.content-creator .cc-card li {
  position:relative;
  padding-left:14px;
  margin-bottom:2px;
  font-size:8.9pt;
  color:#403a55;
  line-height:1.55;
}
.resume.content-creator .cc-card li::before {
  content:"";
  position:absolute;
  left:2px;
  top:7px;
  width:5px;
  height:5px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--g1),var(--g2));
}

/* ===== Education ===== */
.resume.content-creator .cc-erow {
  background:#fff;
  border:1px solid var(--line);
  border-left:4px solid var(--g4);
  border-radius:14px;
  padding:10px 15px;
  margin-bottom:8px;
  display:grid;
  grid-template-columns:1fr auto;
  align-items:baseline;
  gap:4px 12px;
}
.resume.content-creator .cc-erow h3 {
  font-size:10.4pt;
  font-weight:800;
  color:var(--ink);
}
.resume.content-creator .cc-erow p {
  grid-column:1 / -1;
  font-size:9pt;
  color:var(--muted);
  font-weight:600;
}

/* ===== Skills ===== */
.resume.content-creator .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.content-creator .cc-tag {
  font-size:9pt;
  font-weight:700;
  color:var(--ink);
  background:var(--soft);
  border:1.5px solid var(--line);
  padding:5px 13px;
  border-radius:999px;
  transition:all .2s;
}
.resume.content-creator .cc-tag .cc-lv {
  color:var(--g1);
  font-weight:700;
}

/* ===== contract-required tail ===== */
.resume.content-creator li p, .resume.content-creator li div { margin:0; padding:0; display:inline; }
.resume.content-creator .skills span, .resume.content-creator [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.content-creator { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "content-creator",
      "version": "1.0.0",
      "name": "自媒体博主",
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
