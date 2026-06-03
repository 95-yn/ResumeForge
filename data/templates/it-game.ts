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
  --ind:#3b3f6b;
  --ind-deep:#23264a;
  --ind-soft:#6b6f9c;
  --slate:#2f3447;
  --amber:#b0792a;
  --tint:#f2f2f7;
  --line:#d6d8e6;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 16mm 18mm;
  background: #ffffff;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.5;
  color: #2c2e3e;
}

/* ===== HUD header ===== */
.resume.it-game .hud {
  position: relative;
  background:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px),
    linear-gradient(135deg, var(--ind-deep) 0%, var(--ind) 100%);
  border: 3px solid var(--ind-deep);
  box-shadow: 5px 5px 0 0 var(--line);
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
  color: #e8c87a;
  font-weight: 700;
}
.resume.it-game .pixel-heart { color: #c98fae; letter-spacing: 3px; font-size: 8pt; }
.resume.it-game .pixel-coin { color: #d0a85a; letter-spacing: 3px; font-size: 8pt; }

.resume.it-game .hud h1 {
  font-size: 23pt;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 3px;
  line-height: 1.15;
  text-shadow: 2px 2px 0 var(--ind-deep);
}

.resume.it-game .class-tag {
  display: inline-block;
  margin-top: 8px;
  font-size: 8.5pt;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--ind-deep);
  background: #d8dae8;
  padding: 2px 10px;
  box-shadow: 3px 3px 0 0 rgba(35,38,74,0.4);
}

.resume.it-game .contact {
  margin-top: 12px;
  font-size: 8.5pt;
  color: #d6d8ec;
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
  background: #9fa3c8;
  box-shadow: 0 0 0 1px var(--ind-deep);
}

/* ===== sections ===== */
.resume.it-game .section { margin-bottom: 15px; }

.resume.it-game .section-title {
  font-size: 11pt;
  font-weight: 800;
  color: var(--ind-deep);
  letter-spacing: 2px;
  padding-bottom: 5px;
  margin-bottom: 9px;
  border-bottom: 2px solid var(--line);
  display: flex;
  align-items: center;
  gap: 8px;
}
.resume.it-game .section-title .bit {
  color: var(--ind);
  font-size: 8pt;
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
  color: var(--ind-deep);
  flex: 1;
  min-width: 0;
}

.resume.it-game .lv {
  display: inline-block;
  font-size: 7.5pt;
  font-weight: 800;
  color: #fff;
  background: var(--ind);
  padding: 1px 6px;
  margin-right: 6px;
  box-shadow: 2px 2px 0 0 rgba(35,38,74,0.45);
  vertical-align: middle;
}
.resume.it-game .quest-star { color: var(--amber); margin-right: 6px; }
.resume.it-game .company { color: var(--ind); }
.resume.it-game .arrow { color: var(--ind-soft); margin: 0 6px; font-size: 8pt; }
.resume.it-game .position { color: var(--slate); font-weight: 600; }

.resume.it-game .date {
  font-size: 8.5pt;
  font-weight: 700;
  color: var(--slate);
  white-space: nowrap;
  flex-shrink: 0;
  background: var(--tint);
  padding: 1px 7px;
  border: 1px solid var(--line);
}

.resume.it-game .quest {
  position: relative;
  padding-left: 14px;
}
.resume.it-game .quest::before {
  content: "\\25C6";
  position: absolute;
  left: 0;
  top: 0.1em;
  font-size: 7pt;
  color: var(--ind-soft);
}

.resume.it-game .sub {
  font-size: 9pt;
  color: #5d5f72;
  margin-top: 3px;
}

.resume.it-game .summary {
  font-size: 9.5pt;
  color: #2c2e3e;
  line-height: 1.65;
  background: var(--tint);
  border: 1px solid var(--line);
  padding: 9px 13px;
  border-radius: 3px;
}

.resume.it-game .highlights {
  margin-top: 5px;
  list-style: none;
  padding-left: 4px;
}
.resume.it-game .highlights li {
  position: relative;
  font-size: 9.5pt;
  color: #2c2e3e;
  margin-bottom: 3px;
  line-height: 1.55;
  padding-left: 16px;
}
.resume.it-game .highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  background: var(--ind);
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
  color: var(--ind-deep);
  background: var(--tint);
  border: 2px solid var(--ind);
  padding: 2px 10px;
  box-shadow: 3px 3px 0 0 var(--line);
}
.resume.it-game .tag-lv { color: var(--slate); font-weight: 700; }

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
