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
    slug: 'fresh',
    name: '清新活力',
    category: 'creative',
    html: `<div class="resume fresh">
  <div class="fresh-sidebar"></div>
  <div class="fresh-content">
    <header class="fresh-header">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="fresh-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="fresh-contacts">
        {{#if basics.email}}<span class="fresh-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="fresh-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="fresh-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </header>
    {{#if basics.summary}}
    <section class="fresh-section">
      <h2 class="fresh-section-title"><span class="fresh-dot">01</span>个人简介</h2>
      <div class="fresh-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="fresh-section" data-section="experience">
      <h2 class="fresh-section-title"><span class="fresh-dot">02</span>工作经历</h2>
      {{#each experience}}
      <div class="fresh-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="fresh-entry-top">
          <div>
            <span class="fresh-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="fresh-arrow"> › </span>
            <span class="fresh-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </div>
          <span class="fresh-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="fresh-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="fresh-section" data-section="education">
      <h2 class="fresh-section-title"><span class="fresh-dot">03</span>教育背景</h2>
      {{#each education}}
      <div class="fresh-entry" data-entry="education" data-entry-index="{{@index}}">
        <div class="fresh-entry-top">
          <div>
            <span class="fresh-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
            <span class="fresh-arrow"> · </span>
            <span data-field="education.{{@index}}.area">{{{area}}}</span>
            <span class="fresh-arrow"> · </span>
            <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
          </div>
          <span class="fresh-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if skills.length}}
    <section class="fresh-section" data-section="skills">
      <h2 class="fresh-section-title"><span class="fresh-dot">04</span>专业技能</h2>
      <div class="fresh-skills">
        {{#each skills}}<span class="fresh-skill-badge" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="fresh-skill-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
      </div>
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="fresh-section" data-section="projects">
      <h2 class="fresh-section-title"><span class="fresh-dot">05</span>项目经历</h2>
      {{#each projects}}
      <div class="fresh-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="fresh-entry-top">
          <div>
            <span class="fresh-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="fresh-arrow"> › </span><span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          <span class="fresh-date"><span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if description}}<div class="fresh-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="fresh-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.fresh {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  display: flex;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #1C1917;
  background: #fff;
}

/* ── Left Accent Bar ── */
.fresh-sidebar {
  width: 4px;
  min-width: 4px;
  background: #0369A1;
  flex-shrink: 0;
}

/* ── Main Content ── */
.fresh-content {
  flex: 1;
  padding: 18mm 24px 24px 26px;
  min-width: 0;
}

/* ── Header ── */
.fresh-header {
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid #E7F3FA;
}

.fresh-header h1 {
  font-size: 21pt;
  font-weight: 700;
  color: #1C1917;
  letter-spacing: 0.3px;
  line-height: 1.2;
}

.fresh-title {
  font-size: 10pt;
  color: #0369A1;
  font-weight: 500;
  margin-top: 4px;
}

.fresh-contacts {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 3px 14px;
}

.fresh-contact {
  font-size: 9pt;
  color: #57534E;
}

/* ── Section ── */
.fresh-section { margin-bottom: 14px; }

.fresh-section-title {
  font-size: 10.5pt;
  font-weight: 700;
  color: #0C4A6E;
  margin-bottom: 9px;
  display: flex;
  align-items: center;
  gap: 9px;
  letter-spacing: 0.5px;
}

/* numbered square label — the memory anchor */
.fresh-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 19px;
  height: 19px;
  border-radius: 4px;
  background: #0369A1;
  color: #fff;
  font-size: 8.5pt;
  font-weight: 700;
  letter-spacing: 0;
  flex-shrink: 0;
  font-feature-settings: "tnum";
}

/* ── Entry ── */
.fresh-entry {
  margin-bottom: 9px;
  padding-left: 9px;
  border-left: 1px solid #E0F2FE;
}

.fresh-entry:last-child { margin-bottom: 0; }

.fresh-entry-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
  gap: 8px;
}

.fresh-company {
  font-weight: 700;
  color: #1C1917;
  font-size: 10pt;
}

.fresh-pos {
  color: #44403C;
  font-size: 9.5pt;
}

.fresh-arrow {
  color: #A8A29E;
  font-weight: 400;
  margin: 0 3px;
}

.fresh-date {
  font-size: 9pt;
  color: #78716C;
  white-space: nowrap;
  margin-left: 8px;
  flex-shrink: 0;
}

.fresh-text {
  font-size: 9.5pt;
  color: #57534E;
  line-height: 1.65;
}

.fresh-list {
  padding-left: 14px;
  margin-top: 4px;
}

.fresh-list li {
  font-size: 9.5pt;
  color: #44403C;
  margin-bottom: 3px;
  line-height: 1.55;
}

/* ── Skills ── */
.fresh-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.fresh-skill-badge {
  background: #E0F2FE;
  border: none;
  color: #0C4A6E;
  padding: 3px 11px;
  border-radius: 4px;
  font-size: 9pt;
  font-weight: 500;
}

.fresh-skill-level {
  color: #0369A1;
  font-weight: 400;
  margin-left: 3px;
}

li p, li div { margin: 0; padding: 0; display: inline; }

@media print { .resume.fresh { margin: 0; }
  .fresh-sidebar { background: #0369A1;
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
      "templateId": "fresh",
      "version": "1.0.0",
      "name": "清新活力",
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
