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
    slug: 'motion-designer',
    name: '动效设计',
    category: 'creative',
    html: `<div class="resume motion-designer">
  <header class="md-header">
    <div class="md-glow"></div>
    <div class="md-header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="md-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact md-contact">
        {{#if basics.email}}<span class="md-chip" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="md-chip" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="md-chip" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="md-timeline"><span class="md-kf"></span><span class="md-kf"></span><span class="md-kf"></span><span class="md-kf"></span><span class="md-kf"></span></div>
  </header>
  <div class="md-body">
    {{#if basics.summary}}<section class="md-section"><h2 class="md-h2"><span class="md-h2-mark"></span>个人简介</h2><div class="md-summary" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}
    {{#if experience.length}}<section class="md-section md-track" data-section="experience"><h2 class="md-h2"><span class="md-h2-mark"></span>工作经历</h2>
      {{#each experience}}<div class="md-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="md-node"></div>
        <div class="md-entry-head">
          <h3><span class="md-co" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="md-sep">/</span><span class="md-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date md-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> <span class="md-arrow">→</span> <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="md-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </section>{{/if}}
    {{#if projects.length}}<section class="md-section md-track" data-section="projects"><h2 class="md-h2"><span class="md-h2-mark"></span>项目经历</h2>
      {{#each projects}}<div class="md-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="md-node"></div>
        <div class="md-entry-head">
          <h3><span class="md-co" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="md-sep">/</span><span class="md-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        </div>
        {{#if description}}<div class="md-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="md-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </section>{{/if}}
    {{#if skills.length}}<section class="md-section" data-section="skills"><h2 class="md-h2"><span class="md-h2-mark"></span>专业技能</h2><div class="skills md-skills">{{#each skills}}<span class="md-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="md-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
    {{#if education.length}}<section class="md-section md-track" data-section="education"><h2 class="md-h2"><span class="md-h2-mark"></span>教育背景</h2>
      {{#each education}}<div class="md-entry" data-entry="education" data-entry-index="{{@index}}">
        <div class="md-node"></div>
        <div class="md-entry-head">
          <h3 class="md-co" data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date md-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> <span class="md-arrow">→</span> <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="md-edu-sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>{{/each}}
    </section>{{/if}}
  </div>
</div>`,
    css: `.resume.motion-designer * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.motion-designer * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.motion-designer {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10pt;
  line-height: 1.6;
  color: #232330;
  --md-cyan: #1f8fa8;
  --md-violet: #7c3aed;
  --md-magenta: #b1318f;
  --md-ink: #232330;
  --md-line: #e7e4ee;
}

/* ===== Header: dark, desaturated accents ===== */
.resume.motion-designer .md-header {
  position: relative;
  background:
    radial-gradient(120% 140% at 8% -10%, rgba(31,143,168,0.20) 0%, rgba(31,143,168,0) 44%),
    radial-gradient(120% 140% at 95% 0%, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0) 46%),
    linear-gradient(125deg, #14121d 0%, #1b1727 55%, #15121f 100%);
  padding: 18mm 18mm 0;
  overflow: hidden;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.resume.motion-designer .md-glow {
  position: absolute;
  top: -40px;
  right: -30px;
  width: 220px;
  height: 220px;
  background: conic-gradient(from 120deg, #1f8fa8, #7c3aed, #b1318f, #1f8fa8);
  filter: blur(64px);
  opacity: 0.24;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.resume.motion-designer .md-header-inner { position: relative; z-index: 2; }

.resume.motion-designer .md-header h1 {
  font-size: 26pt;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1.15;
  color: #fff;
}

.resume.motion-designer .md-title {
  margin-top: 7px;
  font-size: 10.5pt;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #d8b6f0;
}

.resume.motion-designer .md-contact {
  margin-top: 13px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px 8px;
}

.resume.motion-designer .md-chip {
  font-size: 8.5pt;
  color: rgba(255,255,255,0.85);
  padding: 3px 11px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.05);
}

/* ===== Keyframe track strip under header ===== */
.resume.motion-designer .md-timeline {
  position: relative;
  z-index: 2;
  margin-top: 16px;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 0;
}
.resume.motion-designer .md-timeline::before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #1f8fa8 0%, #7c3aed 50%, #b1318f 100%);
  border-radius: 2px;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.resume.motion-designer .md-kf {
  position: relative;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
  background: #14121d;
  border: 1.5px solid #1f8fa8;
  margin-right: auto;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.resume.motion-designer .md-kf:nth-child(2) { border-color: #2ba0b8; }
.resume.motion-designer .md-kf:nth-child(3) { border-color: #7c3aed; }
.resume.motion-designer .md-kf:nth-child(4) { border-color: #9a3fc4; }
.resume.motion-designer .md-kf:nth-child(5) {
  border-color: #b1318f;
  background: #b1318f;
  margin-right: 0;
}

/* ===== Body — white panel, high-contrast near-black text ===== */
.resume.motion-designer .md-body {
  padding: 20px 18mm 18mm;
  background: #fff;
}

.resume.motion-designer .md-section { margin-bottom: 22px; }
.resume.motion-designer .md-section:last-child { margin-bottom: 0; }

.resume.motion-designer .md-h2 {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 9.5pt;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--md-ink);
  margin-bottom: 14px;
}
.resume.motion-designer .md-h2-mark {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  transform: rotate(45deg);
  background: linear-gradient(135deg, #1f8fa8, #b1318f);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.resume.motion-designer .md-summary {
  position: relative;
  font-size: 9.5pt;
  color: #232330;
  line-height: 1.7;
  padding-left: 16px;
}
.resume.motion-designer .md-summary::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  background: linear-gradient(135deg, var(--md-cyan), var(--md-violet));
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* ===== Keyframe timeline track for entries ===== */
.resume.motion-designer .md-track { position: relative; }
.resume.motion-designer .md-track .md-entry {
  position: relative;
  padding-left: 19px;
  margin-bottom: 16px;
}
.resume.motion-designer .md-track .md-entry:last-child { margin-bottom: 0; }
.resume.motion-designer .md-track .md-entry::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 7px;
  bottom: -16px;
  width: 1.5px;
  background: linear-gradient(180deg, #7c3aed, rgba(124,58,237,0.15));
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.resume.motion-designer .md-track .md-entry:last-child::before { display: none; }

.resume.motion-designer .md-node {
  position: absolute;
  left: 0;
  top: 3.5px;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
  background: #fff;
  border: 1.5px solid #7c3aed;
  box-shadow: 0 0 0 2px rgba(31,143,168,0.16);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.resume.motion-designer .md-entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.resume.motion-designer .md-entry-head h3 {
  font-size: 10.5pt;
  font-weight: 700;
  color: var(--md-ink);
  flex: 1;
  line-height: 1.4;
}
.resume.motion-designer .md-co { color: var(--md-ink); }
.resume.motion-designer .md-sep { color: #7c3aed; margin: 0 5px; font-weight: 600; }
.resume.motion-designer .md-pos {
  color: var(--md-magenta);
  font-weight: 600;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.resume.motion-designer .md-date {
  font-size: 8.5pt;
  font-weight: 600;
  color: #46414f;
  background: #f4f1f9;
  padding: 2px 9px;
  border-radius: 14px;
  white-space: nowrap;
  flex-shrink: 0;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.resume.motion-designer .md-arrow { color: var(--md-magenta); }

.resume.motion-designer .md-desc {
  font-size: 9pt;
  color: #2c2c38;
  margin-top: 6px;
  line-height: 1.65;
}

.resume.motion-designer .md-list {
  margin-top: 8px;
  list-style: none;
  padding: 0;
}
.resume.motion-designer .md-list li {
  position: relative;
  font-size: 9.5pt;
  color: #232330;
  line-height: 1.65;
  margin-bottom: 6px;
  padding-left: 14px;
}
.resume.motion-designer .md-list li:last-child { margin-bottom: 0; }
.resume.motion-designer .md-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  background: linear-gradient(135deg, #1f8fa8, #b1318f);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.resume.motion-designer .md-edu-sub {
  font-size: 9pt;
  color: #3a3a47;
  margin-top: 5px;
}

/* ===== Skills ===== */
.resume.motion-designer .md-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 8px;
}
.resume.motion-designer .md-tag {
  font-size: 9pt;
  color: var(--md-ink);
  padding: 4px 12px;
  border-radius: 16px;
  border: 1px solid var(--md-line);
  background: #faf9fc;
}
.resume.motion-designer .md-lvl { color: var(--md-magenta); font-weight: 600; }

/* ===== Required tail rules ===== */
.resume.motion-designer li p, .resume.motion-designer li div { margin: 0; padding: 0; display: inline; }
.resume.motion-designer .skills span, .resume.motion-designer [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.motion-designer { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "motion-designer",
      "version": "1.0.0",
      "name": "动效设计",
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
