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
    slug: 'ux-researcher',
    name: '用户研究',
    category: 'profession',
    html: `<div class="resume ux-researcher">
  <header class="ux-header">
    <div class="ux-header-main">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ux-role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    </div>
    <div class="contact ux-contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="ux-section ux-summary">
    <h2><span class="ux-tag">RESEARCH</span>研究自述</h2>
    <div class="ux-summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="ux-section ux-journey" data-section="experience">
    <h2><span class="ux-tag">JOURNEY</span>工作经历</h2>
    <div class="ux-journey-track">
      {{#each experience}}<div class="ux-stage" data-entry="experience" data-entry-index="{{@index}}">
        <span class="ux-node"></span>
        <div class="ux-stage-card">
          <h3><span class="ux-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="ux-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          {{#if highlights.length}}<ul class="ux-findings">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="ux-section ux-insights" data-section="projects">
    <h2><span class="ux-tag">INSIGHTS</span>项目经历</h2>
    <div class="ux-insight-grid">
      {{#each projects}}<div class="ux-insight-card" data-entry="projects" data-entry-index="{{@index}}">
        <h3><span class="ux-pin"></span><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="ux-sep">·</span><span class="ux-proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="ux-insight-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ux-findings">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="ux-section ux-affinity" data-section="skills">
    <h2><span class="ux-tag">AFFINITY</span>专业技能</h2>
    <div class="skills ux-affinity-wall">{{#each skills}}<span class="ux-sticky" data-entry="skills" data-entry-index="{{@index}}"><span class="ux-sticky-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ux-sticky-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section class="ux-section ux-edu" data-section="education">
    <h2><span class="ux-tag">PROFILE</span>教育背景</h2>
    {{#each education}}<div class="ux-edu-item" data-entry="education" data-entry-index="{{@index}}">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      <p class="ux-edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.ux-researcher * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.ux-researcher * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.ux-researcher {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 17mm 18mm;
  background: #F4EEE2;
  background-image:
    radial-gradient(circle at 1px 1px, rgba(67,56,143,0.06) 1px, transparent 0);
  background-size: 14px 14px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #3A352B;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

/* ===== Header ===== */
.resume.ux-researcher .ux-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 14px;
  padding-bottom: 12px;
  border-bottom: 2px solid #43388F;
  margin-bottom: 16px;
}
.resume.ux-researcher .ux-header-main h1 {
  font-size: 24pt;
  font-weight: 800;
  letter-spacing: 1px;
  color: #43388F;
  line-height: 1.1;
}
.resume.ux-researcher .ux-role {
  margin-top: 4px;
  font-size: 10.5pt;
  font-weight: 600;
  color: #6E6555;
  letter-spacing: 0.5px;
}
.resume.ux-researcher .ux-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  text-align: right;
}
.resume.ux-researcher .ux-contact span {
  font-size: 8.6pt;
  color: #6E6555;
  position: relative;
  padding-left: 12px;
}
.resume.ux-researcher .ux-contact span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #C8A24B;
}

/* ===== Section shell ===== */
.resume.ux-researcher .ux-section { margin-bottom: 15px; }
.resume.ux-researcher .ux-section:last-child { margin-bottom: 0; }
.resume.ux-researcher .ux-section > h2 {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 12pt;
  font-weight: 800;
  color: #2E2A22;
  margin-bottom: 10px;
}
.resume.ux-researcher .ux-tag {
  display: inline-block;
  font-family: 'SF Mono', 'Consolas', monospace;
  font-size: 7pt;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #fff;
  background: #43388F;
  padding: 2px 7px;
  border-radius: 3px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

/* ===== Summary ===== */
.resume.ux-researcher .ux-summary-body {
  background: #FBF8F1;
  border: 1px solid #E3D9C5;
  border-left: 4px solid #C8A24B;
  border-radius: 4px;
  padding: 9px 13px;
  font-size: 9.6pt;
  color: #4A4536;
  line-height: 1.65;
}

/* ===== Journey (experience) ===== */
.resume.ux-researcher .ux-journey-track {
  position: relative;
  padding-left: 18px;
}
.resume.ux-researcher .ux-journey-track::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(#43388F, #C8A24B);
}
.resume.ux-researcher .ux-stage {
  position: relative;
  margin-bottom: 11px;
}
.resume.ux-researcher .ux-stage:last-child { margin-bottom: 0; }
.resume.ux-researcher .ux-node {
  position: absolute;
  left: -17px;
  top: 4px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #F4EEE2;
  border: 2.5px solid #43388F;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
.resume.ux-researcher .ux-stage-card {
  background: #FBF8F1;
  border: 1px solid #E3D9C5;
  border-radius: 5px;
  padding: 8px 12px;
}
.resume.ux-researcher .ux-stage-card h3 {
  font-size: 10.5pt;
  font-weight: 700;
  color: #2E2A22;
  line-height: 1.3;
}
.resume.ux-researcher .ux-company { color: #43388F; }
.resume.ux-researcher .ux-position {
  color: #6E6555;
  font-weight: 600;
}
.resume.ux-researcher .ux-position::before {
  content: ' / ';
  color: #C8A24B;
  font-weight: 700;
}
.resume.ux-researcher .date {
  display: inline-block;
  font-family: 'SF Mono', 'Consolas', monospace;
  font-size: 8pt;
  color: #8A7F6A;
  margin-top: 1px;
}

/* shared findings list */
.resume.ux-researcher .ux-findings {
  list-style: none;
  margin-top: 5px;
}
.resume.ux-researcher .ux-findings li {
  position: relative;
  padding-left: 14px;
  font-size: 9.4pt;
  color: #4A4536;
  line-height: 1.55;
  margin-bottom: 2px;
}
.resume.ux-researcher .ux-findings li::before {
  content: '';
  position: absolute;
  left: 1px;
  top: 0.62em;
  width: 5px;
  height: 5px;
  background: #C8A24B;
  transform: rotate(45deg);
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

/* ===== Insights (projects) ===== */
.resume.ux-researcher .ux-insight-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
}
.resume.ux-researcher .ux-insight-card {
  background: #FBF8F1;
  border: 1px solid #E3D9C5;
  border-top: 3px solid #43388F;
  border-radius: 4px;
  padding: 8px 11px;
}
.resume.ux-researcher .ux-insight-card h3 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 10pt;
  font-weight: 700;
  color: #2E2A22;
  line-height: 1.35;
}
.resume.ux-researcher .ux-pin {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #C8A24B;
  margin-right: 6px;
  flex-shrink: 0;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
.resume.ux-researcher .ux-sep { color: #C8A24B; margin: 0 4px; }
.resume.ux-researcher .ux-proj-role {
  font-size: 8.8pt;
  font-weight: 600;
  color: #6E6555;
}
.resume.ux-researcher .ux-insight-desc {
  font-size: 9pt;
  color: #6E6555;
  margin-top: 3px;
}

/* ===== Affinity (skills) ===== */
.resume.ux-researcher .ux-affinity-wall {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.resume.ux-researcher .ux-sticky {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #FFF6D9;
  border: 1px solid #E8D79A;
  border-radius: 3px;
  padding: 4px 9px;
  box-shadow: 1px 1px 0 rgba(67,56,143,0.10);
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
.resume.ux-researcher .ux-sticky:nth-child(3n) {
  background: #ECE9FB;
  border-color: #C7BEF0;
}
.resume.ux-researcher .ux-sticky:nth-child(3n+2) {
  background: #F0EADC;
  border-color: #DBCFB2;
}
.resume.ux-researcher .ux-sticky-name {
  font-size: 9pt;
  font-weight: 600;
  color: #2E2A22;
}
.resume.ux-researcher .ux-sticky-level {
  font-size: 7.6pt;
  color: #43388F;
  font-weight: 700;
  border-left: 1px solid rgba(67,56,143,0.3);
  padding-left: 5px;
}

/* ===== Education ===== */
.resume.ux-researcher .ux-edu-item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  column-gap: 10px;
  padding: 5px 0;
  border-bottom: 1px dashed #DCD0B8;
}
.resume.ux-researcher .ux-edu-item:last-child { border-bottom: none; }
.resume.ux-researcher .ux-edu-item h3 {
  font-size: 10pt;
  font-weight: 700;
  color: #2E2A22;
}
.resume.ux-researcher .ux-edu-meta {
  grid-column: 1 / -1;
  font-size: 8.8pt;
  color: #6E6555;
  margin-top: 1px;
}

/* ===== contract-required tail ===== */
.resume.ux-researcher li p, .resume.ux-researcher li div { margin: 0; padding: 0; display: inline; }
.resume.ux-researcher .skills span, .resume.ux-researcher [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.ux-researcher { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .resume.ux-researcher .ux-stage,
  .resume.ux-researcher .ux-insight-card,
  .resume.ux-researcher .ux-edu-item { break-inside: avoid; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "ux-researcher",
      "version": "1.0.0",
      "name": "用户研究",
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
