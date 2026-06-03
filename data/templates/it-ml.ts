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
    slug: 'it-ml',
    name: '机器学习',
    category: 'tech',
    html: `<div class="resume it-ml">
  <header class="ml-header">
    <div class="ml-grid"></div>
    <div class="ml-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ml-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact ml-contact">
        {{#if basics.email}}<span class="ml-chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="ml-chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="ml-chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <main class="ml-body">
    {{#if basics.summary}}
    <section class="ml-section ml-summary-sec">
      <h2 class="ml-h2"><span class="ml-layer">layer.0</span>个人简介</h2>
      <div class="ml-summary" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="ml-section" data-section="experience">
      <h2 class="ml-h2"><span class="ml-layer">layer.1</span>工作经历</h2>
      {{#each experience}}
      <div class="ml-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="ml-node"></div>
        <div class="ml-entry-head">
          <h3><span class="ml-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="ml-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date ml-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="ml-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="ml-section" data-section="projects">
      <h2 class="ml-h2"><span class="ml-layer">layer.2</span>项目经历</h2>
      {{#each projects}}
      <div class="ml-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="ml-node"></div>
        <div class="ml-entry-head">
          <h3><span class="ml-company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="ml-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        </div>
        {{#if description}}<div class="ml-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="ml-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if skills.length}}
    <section class="ml-section" data-section="skills">
      <h2 class="ml-h2"><span class="ml-layer">layer.3</span>专业技能</h2>
      <div class="skills ml-skills">{{#each skills}}<span class="ml-tensor" data-entry="skills" data-entry-index="{{@index}}"><span class="ml-tname" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="ml-tdot"></span><span class="ml-tlevel" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="ml-section" data-section="education">
      <h2 class="ml-h2"><span class="ml-layer">layer.4</span>教育背景</h2>
      {{#each education}}
      <div class="ml-entry ml-edu" data-entry="education" data-entry-index="{{@index}}">
        <div class="ml-node"></div>
        <div class="ml-entry-head">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date ml-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="ml-sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
      {{/each}}
    </section>
    {{/if}}
  </main>
</div>`,
    css: `.resume.it-ml * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.it-ml * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.it-ml {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 0;
  background: #FFFFFF;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.5;
  color: #1E293B;
  --ml-ink: #1E293B;
  --ml-muted: #64748B;
  --ml-blue: #4F46E5;
  --ml-purple: #9333EA;
  --ml-line: #E2E8F0;
}

/* ===== Header: 蓝紫渐变 + 张量网格 ===== */
.resume.it-ml .ml-header {
  position: relative;
  overflow: hidden;
  padding: 16mm 18mm 12mm;
  background: linear-gradient(120deg, #4338CA 0%, #6D28D9 48%, #9333EA 100%);
  color: #FFFFFF;
}

.resume.it-ml .ml-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(ellipse 80% 120% at 80% 0%, #000 0%, transparent 75%);
  mask-image: radial-gradient(ellipse 80% 120% at 80% 0%, #000 0%, transparent 75%);
}

.resume.it-ml .ml-header-inner { position: relative; z-index: 1; }

.resume.it-ml .ml-header h1 {
  font-size: 24pt;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1.15;
}

.resume.it-ml .ml-title {
  margin-top: 5px;
  font-size: 10.5pt;
  font-weight: 400;
  color: rgba(255,255,255,0.85);
  letter-spacing: 0.5px;
}

.resume.it-ml .ml-contact {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.resume.it-ml .ml-chip {
  font-size: 8.5pt;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.28);
  color: #FFFFFF;
  letter-spacing: 0.3px;
}

/* ===== Body ===== */
.resume.it-ml .ml-body { padding: 12mm 18mm 16mm; }

.resume.it-ml .ml-section { margin-bottom: 13px; }
.resume.it-ml .ml-section:last-child { margin-bottom: 0; }

.resume.it-ml .ml-h2 {
  position: relative;
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 11.5pt;
  font-weight: 800;
  color: var(--ml-ink);
  padding-bottom: 6px;
  margin-bottom: 9px;
  border-bottom: 1px solid var(--ml-line);
  letter-spacing: 1px;
}

.resume.it-ml .ml-h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 56px;
  height: 2.5px;
  background: linear-gradient(90deg, #4F46E5, #9333EA);
  border-radius: 2px;
}

.resume.it-ml .ml-layer {
  font-family: 'SF Mono', 'Roboto Mono', Consolas, monospace;
  font-size: 7pt;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--ml-purple);
  background: rgba(147,51,234,0.08);
  border: 1px solid rgba(147,51,234,0.25);
  padding: 1.5px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

/* ===== Entries: 模型层次 / 节点 ===== */
.resume.it-ml .ml-entry {
  position: relative;
  padding-left: 16px;
  margin-bottom: 9px;
}
.resume.it-ml .ml-entry:last-child { margin-bottom: 0; }

.resume.it-ml .ml-entry::before {
  content: "";
  position: absolute;
  left: 3.5px;
  top: 6px;
  bottom: -9px;
  width: 1.5px;
  background: linear-gradient(180deg, #6366F1, rgba(147,51,234,0.15));
}
.resume.it-ml .ml-entry:last-child::before { display: none; }

.resume.it-ml .ml-node {
  position: absolute;
  left: 0;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 2px solid #6D28D9;
  box-shadow: 0 0 0 2px rgba(109,40,217,0.12);
}

.resume.it-ml .ml-entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.resume.it-ml .ml-entry-head h3 {
  font-size: 10.5pt;
  font-weight: 700;
  color: var(--ml-ink);
  flex: 1;
}

.resume.it-ml .ml-company { color: var(--ml-ink); }

.resume.it-ml .ml-pos {
  font-weight: 500;
  color: var(--ml-blue);
}
.resume.it-ml .ml-pos::before {
  content: "·";
  margin: 0 6px;
  color: var(--ml-muted);
  font-weight: 400;
}

.resume.it-ml .ml-date {
  font-family: 'SF Mono', 'Roboto Mono', Consolas, monospace;
  font-size: 8pt;
  color: var(--ml-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.resume.it-ml .ml-sub,
.resume.it-ml .ml-desc {
  font-size: 9pt;
  color: var(--ml-muted);
  margin-top: 3px;
}

.resume.it-ml .ml-summary {
  font-size: 9.5pt;
  color: #334155;
  line-height: 1.65;
}
.resume.it-ml .ml-summary-sec .ml-summary {
  padding-left: 16px;
  border-left: 2px solid;
  border-image: linear-gradient(180deg, #4F46E5, #9333EA) 1;
}

.resume.it-ml .ml-list {
  margin-top: 5px;
  padding-left: 0;
  list-style: none;
}

.resume.it-ml .ml-list li {
  position: relative;
  padding-left: 14px;
  font-size: 9.5pt;
  color: #334155;
  margin-bottom: 3px;
  line-height: 1.55;
}
.resume.it-ml .ml-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 5px;
  height: 5px;
  background: linear-gradient(135deg, #4F46E5, #9333EA);
  border-radius: 1.5px;
  transform: rotate(45deg);
}

/* ===== Skills: 张量块 ===== */
.resume.it-ml .ml-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 7px;
}

.resume.it-ml .ml-tensor {
  display: inline-flex;
  align-items: center;
  font-size: 9pt;
  padding: 3px 11px;
  border-radius: 5px;
  background: linear-gradient(135deg, rgba(79,70,229,0.06), rgba(147,51,234,0.06));
  border: 1px solid rgba(109,40,217,0.22);
  color: var(--ml-ink);
}

.resume.it-ml .ml-tname { font-weight: 600; }

.resume.it-ml .ml-tdot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ml-purple);
  margin: 0 6px;
}

.resume.it-ml .ml-tlevel {
  font-size: 8pt;
  color: var(--ml-muted);
}

li p, li div { margin: 0; padding: 0; display: inline; }
.resume.it-ml li p, .resume.it-ml li div { margin: 0; padding: 0; display: inline; }
.resume.it-ml .skills span, .resume.it-ml [class*='skill'] span { white-space: nowrap; word-break: keep-all; }
.resume.it-ml .ml-tensor { white-space: nowrap; word-break: keep-all; }

@media print {
  .resume.it-ml { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; }
}`,
    schema: {
      "templateId": "it-ml",
      "version": "1.0.0",
      "name": "机器学习",
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
