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
    slug: 'success-manager',
    name: '客户成功',
    category: 'profession',
    html: `<div class="resume success-manager">
  <header>
    <div class="hd-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="summary"><h2>个人简介</h2><div class="sum-body" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="journey" data-section="experience"><h2>工作经历</h2>
    <div class="timeline">
    {{#each experience}}<div class="t-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="t-node"></div>
      <div class="t-card">
        <div class="t-head">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="projects" data-section="projects"><h2>项目经历</h2>
    {{#each projects}}<div class="p-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="p-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="p-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="p-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  <div class="two-col">
    {{#if skills.length}}<section class="skills-sec" data-section="skills"><h2>专业技能</h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

    {{#if education.length}}<section class="edu-sec" data-section="education"><h2>教育背景</h2>
      {{#each education}}<div class="e-entry" data-entry="education" data-entry-index="{{@index}}">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>{{/each}}
    </section>{{/if}}
  </div>
</div>`,
    css: `.resume.success-manager * { margin:0; padding:0; box-sizing:border-box; }
.resume.success-manager * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.success-manager {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fff;
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#2a2440;
  --purple:#6d28d9;
  --purple-light:#a78bfa;
  --purple-soft:#f3effe;
  --purple-deep:#4c1d95;
  --ink:#2a2440;
  --muted:#7a7290;
}

/* ===== Header ===== */
.resume.success-manager header {
  position:relative;
  background:linear-gradient(120deg,#4c1d95 0%,#6d28d9 60%,#7c3aed 100%);
  color:#fff;
  border-radius:14px;
  padding:22px 26px;
  margin-bottom:22px;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:18px;
  overflow:hidden;
}
.resume.success-manager header::after {
  content:"";
  position:absolute;
  top:-40px;
  right:-30px;
  width:160px;
  height:160px;
  border-radius:50%;
  background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.22),rgba(255,255,255,0) 70%);
  pointer-events:none;
}
.resume.success-manager .hd-main { position:relative; z-index:1; }
.resume.success-manager h1 {
  font-size:23pt;
  font-weight:700;
  letter-spacing:1px;
  line-height:1.1;
}
.resume.success-manager .role {
  margin-top:7px;
  font-size:11pt;
  font-weight:500;
  color:#e7dcff;
  letter-spacing:.5px;
}
.resume.success-manager .contact {
  position:relative;
  z-index:1;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:5px;
  font-size:8.6pt;
  color:#ede7ff;
  text-align:right;
}
.resume.success-manager .contact span {
  position:relative;
  padding-left:13px;
}
.resume.success-manager .contact span::before {
  content:"";
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:6px;
  height:6px;
  border-radius:50%;
  background:var(--purple-light);
}

/* ===== Section headings ===== */
.resume.success-manager h2 {
  font-size:11.5pt;
  font-weight:700;
  color:var(--purple-deep);
  letter-spacing:.5px;
  margin-bottom:12px;
  padding-left:13px;
  position:relative;
}
.resume.success-manager h2::before {
  content:"";
  position:absolute;
  left:0;
  top:2px;
  bottom:2px;
  width:4px;
  border-radius:3px;
  background:linear-gradient(var(--purple),var(--purple-light));
}
.resume.success-manager section { margin-bottom:20px; }

/* ===== Summary ===== */
.resume.success-manager .summary .sum-body {
  background:var(--purple-soft);
  border-left:3px solid var(--purple-light);
  border-radius:0 10px 10px 0;
  padding:11px 15px;
  font-size:9.6pt;
  color:#3d3658;
  line-height:1.65;
}

/* ===== Customer journey timeline ===== */
.resume.success-manager .timeline {
  position:relative;
  padding-left:24px;
}
.resume.success-manager .timeline::before {
  content:"";
  position:absolute;
  left:6px;
  top:6px;
  bottom:6px;
  width:2px;
  background:linear-gradient(var(--purple-light),var(--purple-soft));
}
.resume.success-manager .t-entry {
  position:relative;
  margin-bottom:16px;
}
.resume.success-manager .t-entry:last-child { margin-bottom:0; }
.resume.success-manager .t-node {
  position:absolute;
  left:-24px;
  top:5px;
  width:14px;
  height:14px;
  border-radius:50%;
  background:#fff;
  border:3px solid var(--purple);
  box-shadow:0 0 0 3px var(--purple-soft);
  z-index:1;
}
.resume.success-manager .t-card {
  background:#fff;
  border:1px solid #ece6f9;
  border-radius:10px;
  padding:11px 15px;
  box-shadow:0 1px 4px rgba(76,29,149,.05);
}
.resume.success-manager .t-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:4px 12px;
  margin-bottom:6px;
}
.resume.success-manager .t-card h3 { font-size:10.5pt; font-weight:600; }
.resume.success-manager .t-card .company { color:var(--purple-deep); font-weight:700; }
.resume.success-manager .t-card .position {
  color:var(--purple);
  font-weight:500;
  margin-left:8px;
  padding-left:8px;
  border-left:1px solid #d9cdf2;
}
.resume.success-manager .date {
  font-size:8.4pt;
  color:var(--muted);
  font-weight:500;
  white-space:nowrap;
  background:var(--purple-soft);
  padding:2px 9px;
  border-radius:20px;
}

/* lists */
.resume.success-manager ul { list-style:none; margin-top:5px; }
.resume.success-manager li {
  position:relative;
  padding-left:15px;
  margin-bottom:3px;
  font-size:9.4pt;
  color:#3d3658;
  line-height:1.55;
}
.resume.success-manager li::before {
  content:"";
  position:absolute;
  left:1px;
  top:.62em;
  width:5px;
  height:5px;
  border-radius:50%;
  background:var(--purple-light);
}

/* ===== Projects ===== */
.resume.success-manager .p-entry {
  padding:9px 0;
  border-bottom:1px dashed #e6def7;
}
.resume.success-manager .p-entry:last-child { border-bottom:none; padding-bottom:0; }
.resume.success-manager .p-entry h3 { font-size:10pt; font-weight:600; margin-bottom:3px; }
.resume.success-manager .p-name { color:var(--purple-deep); font-weight:700; }
.resume.success-manager .p-role {
  font-size:8.4pt;
  color:var(--purple);
  font-weight:500;
  background:var(--purple-soft);
  padding:1px 8px;
  border-radius:20px;
  margin-left:6px;
}
.resume.success-manager .p-desc {
  font-size:9.2pt;
  color:#4a4366;
  line-height:1.55;
  margin-bottom:2px;
}

/* ===== Two column footer ===== */
.resume.success-manager .two-col {
  display:flex;
  gap:26px;
  align-items:flex-start;
}
.resume.success-manager .two-col .skills-sec { flex:1.15; }
.resume.success-manager .two-col .edu-sec { flex:1; }
.resume.success-manager .two-col section { margin-bottom:0; }

/* skills */
.resume.success-manager .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
}
.resume.success-manager .skill-chip {
  display:inline-block;
  background:var(--purple-soft);
  color:var(--purple-deep);
  border:1px solid #e3d8f8;
  border-radius:20px;
  padding:4px 12px;
  font-size:8.8pt;
  font-weight:500;
}
.resume.success-manager .skill-chip .lvl { color:var(--purple); font-weight:400; }

/* education */
.resume.success-manager .e-entry {
  margin-bottom:11px;
  padding-left:13px;
  border-left:2px solid var(--purple-soft);
}
.resume.success-manager .e-entry:last-child { margin-bottom:0; }
.resume.success-manager .e-entry h3 { font-size:10pt; font-weight:600; color:var(--purple-deep); }
.resume.success-manager .e-entry .date {
  display:inline-block;
  margin:3px 0;
  background:none;
  padding:0;
}
.resume.success-manager .e-entry p { font-size:9pt; color:#4a4366; margin-top:1px; }

/* ===== mandatory tail ===== */
.resume.success-manager li p, .resume.success-manager li div { margin:0; padding:0; display:inline; }
.resume.success-manager .skills span, .resume.success-manager [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.success-manager { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "success-manager",
      "version": "1.0.0",
      "name": "客户成功",
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
