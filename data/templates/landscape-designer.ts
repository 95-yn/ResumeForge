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
    slug: 'landscape-designer',
    name: '景观设计',
    category: 'profession',
    html: `<div class="resume landscape-designer">
  <div class="contour-bg" aria-hidden="true">
    <svg viewBox="0 0 600 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" stroke-width="1">
        <path d="M-40,120 C120,60 260,180 420,110 C520,70 600,140 660,100"/>
        <path d="M-40,160 C130,100 270,210 430,150 C530,115 600,180 660,140"/>
        <path d="M-40,210 C140,160 280,250 440,200 C540,170 600,225 660,190"/>
        <path d="M-40,270 C150,230 290,300 450,260 C550,235 600,280 660,250"/>
        <path d="M-40,560 C150,520 300,600 460,540 C560,505 600,560 660,530"/>
        <path d="M-40,610 C160,575 310,645 470,595 C570,565 600,610 660,585"/>
        <path d="M-40,665 C170,635 320,695 480,650 C580,625 600,665 660,645"/>
        <path d="M-40,720 C180,695 330,745 490,705 C590,685 600,720 660,705"/>
      </g>
    </svg>
  </div>
  <header class="resume-header">
    <div class="header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span class="contact-item" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="contact-item" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="contact-item" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  <div class="body">
    {{#if basics.summary}}
    <section class="section section-summary">
      <h2 class="section-title"><span class="title-mark"></span>个人简介</h2>
      <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="section" data-section="experience">
      <h2 class="section-title"><span class="title-mark"></span>工作经历</h2>
      {{#each experience}}
      <div class="entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="entry-header">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="sep">／</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="section" data-section="projects">
      <h2 class="section-title"><span class="title-mark"></span>项目经历</h2>
      {{#each projects}}
      <div class="entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="entry-header">
          <h3><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="sep">／</span><span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        </div>
        {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="highlights">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="section" data-section="education">
      <h2 class="section-title"><span class="title-mark"></span>教育背景</h2>
      {{#each education}}
      <div class="entry" data-entry="education" data-entry-index="{{@index}}">
        <div class="entry-header">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="sub"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if skills.length}}
    <section class="section" data-section="skills">
      <h2 class="section-title"><span class="title-mark"></span>专业技能</h2>
      <div class="skills">
        {{#each skills}}<span class="skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
      </div>
    </section>
    {{/if}}
  </div>
</div>`,
    css: `.resume.landscape-designer * { margin: 0; padding: 0; box-sizing: border-box; }
.resume.landscape-designer * { word-wrap: break-word; overflow-wrap: break-word; }

.resume.landscape-designer {
  position: relative;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 0;
  background: #F4F1E8;
  font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', -apple-system, sans-serif;
  font-size: 10pt;
  line-height: 1.55;
  color: #36412F;
  overflow: hidden;
}

/* Topographic contour texture */
.resume.landscape-designer .contour-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  color: #889B72;
  opacity: 0.16;
  pointer-events: none;
}
.resume.landscape-designer .contour-bg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Header band — moss green */
.resume.landscape-designer .resume-header {
  position: relative;
  z-index: 1;
  background:
    radial-gradient(circle at 88% -10%, rgba(255,255,255,0.10), transparent 40%),
    linear-gradient(135deg, #4B5E3D 0%, #5C7049 55%, #6B7E4F 100%);
  color: #F4F1E8;
  padding: 20mm 20mm 14mm;
  overflow: hidden;
}
.resume.landscape-designer .resume-header::after {
  content: "";
  position: absolute;
  right: -60px;
  top: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 1px solid rgba(244,241,232,0.22);
  box-shadow:
    0 0 0 14px rgba(244,241,232,0.0),
    inset 0 0 0 22px rgba(244,241,232,0.0);
  background:
    radial-gradient(circle, transparent 38%, rgba(244,241,232,0.10) 39%, rgba(244,241,232,0.10) 41%, transparent 42%,
    transparent 56%, rgba(244,241,232,0.10) 57%, rgba(244,241,232,0.10) 59%, transparent 60%,
    transparent 74%, rgba(244,241,232,0.10) 75%, rgba(244,241,232,0.10) 77%, transparent 78%);
  pointer-events: none;
}
.resume.landscape-designer .header-inner { position: relative; z-index: 2; }
.resume.landscape-designer .resume-header h1 {
  font-size: 27pt;
  font-weight: 600;
  letter-spacing: 4px;
  line-height: 1.1;
  color: #F4F1E8;
}
.resume.landscape-designer .resume-header .title {
  margin-top: 6px;
  font-size: 10.5pt;
  font-weight: 400;
  letter-spacing: 2px;
  color: #D8DEC8;
}
.resume.landscape-designer .contact {
  margin-top: 14px;
  font-size: 9pt;
  color: #E3E7D6;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 0;
}
.resume.landscape-designer .contact-item { white-space: nowrap; }
.resume.landscape-designer .contact-item + .contact-item::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  margin: 0 12px;
  border-radius: 50%;
  background: #A9B98C;
  vertical-align: middle;
}

/* Body */
.resume.landscape-designer .body {
  position: relative;
  z-index: 1;
  padding: 14mm 20mm 18mm;
}
.resume.landscape-designer .section { margin-bottom: 13px; }
.resume.landscape-designer .section:last-child { margin-bottom: 0; }

.resume.landscape-designer .section-title {
  display: flex;
  align-items: center;
  font-size: 11.5pt;
  font-weight: 600;
  letter-spacing: 3px;
  color: #4B5E3D;
  margin-bottom: 9px;
}
.resume.landscape-designer .title-mark {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 9px;
  flex-shrink: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle, transparent 22%, #889B72 23%, #889B72 30%, transparent 31%,
    transparent 52%, #889B72 53%, #889B72 60%, transparent 61%,
    #6B7E4F 0%);
  background:
    radial-gradient(circle, #6B7E4F 0 18%, transparent 19% 30%, #889B72 31% 38%, transparent 39% 52%, #B6C29A 53% 60%, transparent 61%);
}
.resume.landscape-designer .section-title::after {
  content: "";
  flex: 1;
  height: 1px;
  margin-left: 12px;
  background:
    repeating-linear-gradient(to right, #C4BFA8 0 5px, transparent 5px 9px);
}

.resume.landscape-designer .summary {
  font-size: 9.5pt;
  line-height: 1.7;
  color: #44503A;
  padding-left: 27px;
}

.resume.landscape-designer .entry {
  position: relative;
  padding-left: 27px;
  margin-bottom: 9px;
}
.resume.landscape-designer .entry:last-child { margin-bottom: 0; }
.resume.landscape-designer .entry::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 5px;
  bottom: 4px;
  width: 1px;
  background: linear-gradient(to bottom, #A9B98C, rgba(169,185,140,0.2));
}
.resume.landscape-designer .entry::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5C7049;
  box-shadow: 0 0 0 3px rgba(136,155,114,0.25);
}

.resume.landscape-designer .entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}
.resume.landscape-designer .entry-header h3 {
  font-size: 10.5pt;
  font-weight: 600;
  color: #2F3A28;
  flex: 1;
}
.resume.landscape-designer .company { font-weight: 600; }
.resume.landscape-designer .sep { color: #A9B98C; margin: 0 4px; font-weight: 400; }
.resume.landscape-designer .position { font-weight: 500; color: #5C7049; }

.resume.landscape-designer .date {
  font-size: 8.5pt;
  color: #7A8268;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.5px;
  font-variant-numeric: tabular-nums;
}
.resume.landscape-designer .sub {
  font-size: 9pt;
  color: #6B7359;
  margin-top: 2px;
}
.resume.landscape-designer .desc {
  font-size: 9.5pt;
  color: #44503A;
  line-height: 1.6;
  margin-top: 3px;
}

.resume.landscape-designer .highlights {
  margin-top: 5px;
  list-style: none;
}
.resume.landscape-designer .highlights li {
  position: relative;
  font-size: 9.5pt;
  color: #3F4A36;
  line-height: 1.55;
  margin-bottom: 3px;
  padding-left: 15px;
}
.resume.landscape-designer .highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 6px;
  height: 6px;
  border: 1px solid #6B7E4F;
  border-radius: 50%;
}

.resume.landscape-designer .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding-left: 27px;
}
.resume.landscape-designer .skill {
  font-size: 9pt;
  color: #44503A;
  background: rgba(136,155,114,0.14);
  border: 1px solid rgba(108,126,79,0.35);
  border-radius: 14px;
  padding: 3px 13px;
}
.resume.landscape-designer .skill .lv { color: #6B7E4F; }

.resume.landscape-designer li p, .resume.landscape-designer li div { margin: 0; padding: 0; display: inline; }
.resume.landscape-designer .skills span, .resume.landscape-designer [class*='skill'] span { white-space: nowrap; word-break: keep-all; }

@media print { .resume.landscape-designer { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }`,
    schema: {
      "templateId": "landscape-designer",
      "version": "1.0.0",
      "name": "景观设计",
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
