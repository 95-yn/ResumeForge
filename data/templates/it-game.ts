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
    slug: 'it-game',
    name: '游戏开发',
    category: 'tech',
    html: `<div class="resume it-game">
  <header class="hud">
    <div class="hud-top">
      <span class="pixel-heart">&#9829;&#9829;&#9829;</span>
      <span class="hud-label">PLAYER 1</span>
      <span class="pixel-coin">&#9670;&#9670;&#9670;</span>
    </div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="class-tag" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span class="contact-item" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="contact-item" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="contact-item" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}
  <section class="section">
    <h2 class="section-title"><span class="bit">&#9608;</span> 角色简介</h2>
    <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}

  {{#if experience.length}}
  <section class="section" data-section="experience">
    <h2 class="section-title"><span class="bit">&#9608;</span> 闯关历程</h2>
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-header">
        <h3>
          <span class="lv">LV.{{@index}}</span>
          <span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="arrow">&#9654;</span>
          <span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span>
        </h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if projects.length}}
  <section class="section" data-section="projects">
    <h2 class="section-title"><span class="bit">&#9608;</span> 已发布作品</h2>
    {{#each projects}}
    <div class="entry quest" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-header">
        <h3><span class="quest-star">&#9733;</span><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="arrow">&#9654;</span><span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if skills.length}}
  <section class="section" data-section="skills">
    <h2 class="section-title"><span class="bit">&#9608;</span> 技能树</h2>
    <div class="skills">
      {{#each skills}}<span class="tag" data-entry="skills" data-entry-index="{{@index}}"><span class="tag-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="tag-lv"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}

  {{#if education.length}}
  <section class="section" data-section="education">
    <h2 class="section-title"><span class="bit">&#9608;</span> 训练营</h2>
    {{#each education}}
    <div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-header">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>`,
    css: `.resume.it-game * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.it-game * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.it-game {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 16mm 18mm;
  background:
    radial-gradient(circle at 12% 0%, rgba(168, 85, 247, 0.06), transparent 40%),
    radial-gradient(circle at 90% 100%, rgba(34, 211, 238, 0.05), transparent 40%),
    #ffffff;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.5;
  color: #3b2f4a;
}

/* ===== HUD header ===== */
.resume.it-game .hud {
  position: relative;
  background:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px),
    linear-gradient(135deg, #2e1065 0%, #4c1d95 55%, #6d28d9 100%);
  border: 3px solid #1e0a4a;
  box-shadow:
    0 0 0 3px #22d3ee,
    6px 6px 0 0 #1e0a4a;
  padding: 16px 20px 14px;
  margin-bottom: 18px;
}

.resume.it-game .hud-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 7.5pt;
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.resume.it-game .hud-label {
  color: #fde047;
  font-weight: 700;
}
.resume.it-game .pixel-heart { color: #f472b6; letter-spacing: 3px; font-size: 8pt; }
.resume.it-game .pixel-coin { color: #fbbf24; letter-spacing: 3px; font-size: 8pt; }

.resume.it-game .hud h1 {
  font-size: 23pt;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 3px;
  line-height: 1.15;
  text-shadow:
    2px 2px 0 #db2777,
    4px 4px 0 #1e0a4a;
}

.resume.it-game .class-tag {
  display: inline-block;
  margin-top: 8px;
  font-size: 8.5pt;
  font-weight: 700;
  letter-spacing: 2px;
  color: #2e1065;
  background: #22d3ee;
  padding: 2px 10px;
  box-shadow: 3px 3px 0 0 #1e0a4a;
}

.resume.it-game .contact {
  margin-top: 12px;
  font-size: 8.5pt;
  color: #ddd6fe;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
}
.resume.it-game .contact-item { position: relative; padding-left: 12px; }
.resume.it-game .contact-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 5px;
  height: 5px;
  margin-top: -2.5px;
  background: #4ade80;
  box-shadow: 0 0 0 1px #1e0a4a;
}

/* ===== sections ===== */
.resume.it-game .section { margin-bottom: 15px; }

.resume.it-game .section-title {
  font-size: 11pt;
  font-weight: 800;
  color: #4c1d95;
  letter-spacing: 2px;
  padding-bottom: 5px;
  margin-bottom: 9px;
  border-bottom: 3px dashed #c4b5fd;
  display: flex;
  align-items: center;
  gap: 8px;
}
.resume.it-game .section-title .bit {
  color: #db2777;
  font-size: 8pt;
  text-shadow: 2px 0 0 #22d3ee;
}

.resume.it-game .entry { margin-bottom: 10px; }
.resume.it-game .entry:last-child { margin-bottom: 0; }

.resume.it-game .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}

.resume.it-game .entry-header h3 {
  font-size: 10.5pt;
  font-weight: 700;
  color: #2e1065;
  flex: 1;
  min-width: 0;
}

.resume.it-game .lv {
  display: inline-block;
  font-size: 7.5pt;
  font-weight: 800;
  color: #fff;
  background: #db2777;
  padding: 1px 6px;
  margin-right: 6px;
  box-shadow: 2px 2px 0 0 #1e0a4a;
  vertical-align: middle;
}
.resume.it-game .quest-star { color: #fbbf24; margin-right: 6px; }
.resume.it-game .company { color: #4c1d95; }
.resume.it-game .arrow { color: #22d3ee; margin: 0 6px; font-size: 8pt; }
.resume.it-game .position { color: #7c3aed; font-weight: 600; }

.resume.it-game .date {
  font-size: 8.5pt;
  font-weight: 700;
  color: #7c3aed;
  white-space: nowrap;
  flex-shrink: 0;
  background: #f3e8ff;
  padding: 1px 7px;
  border: 1px solid #c4b5fd;
}

.resume.it-game .quest {
  border-left: 4px solid #22d3ee;
  padding-left: 10px;
}

.resume.it-game .sub {
  font-size: 9pt;
  color: #6b5b7a;
  margin-top: 3px;
}

.resume.it-game .summary {
  font-size: 9.5pt;
  color: #3b2f4a;
  line-height: 1.65;
  background: #faf5ff;
  border: 2px solid #e9d5ff;
  border-left: 5px solid #a855f7;
  padding: 8px 12px;
}

.resume.it-game .highlights {
  margin-top: 5px;
  list-style: none;
  padding-left: 4px;
}
.resume.it-game .highlights li {
  position: relative;
  font-size: 9.5pt;
  color: #3b2f4a;
  margin-bottom: 3px;
  line-height: 1.55;
  padding-left: 16px;
}
.resume.it-game .highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  background: #a855f7;
  box-shadow:
    3px 0 0 #22d3ee,
    0 3px 0 #22d3ee;
}

/* ===== skill tree tags ===== */
.resume.it-game .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 8px;
}
.resume.it-game .tag {
  display: inline-block;
  font-size: 8.5pt;
  font-weight: 600;
  color: #2e1065;
  background: #f5f3ff;
  border: 2px solid #4c1d95;
  padding: 2px 10px;
  box-shadow: 3px 3px 0 0 #c4b5fd;
}
.resume.it-game .tag-lv { color: #db2777; font-weight: 700; }

.resume.it-game li p, .resume.it-game li div { margin: 0; padding: 0; display: inline; }
.resume.it-game .skills span, .resume.it-game [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.it-game { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "it-game",
      "version": "1.0.0",
      "name": "游戏开发",
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
