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
    slug: 'chef-resume',
    name: '厨师主厨',
    category: 'profession',
    html: `<div class="resume chef-resume">
  <header>
    <div class="header-inner">
      <span class="kicker">— Carte du Chef —</span>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary-block">
    <h2><span class="num">00</span><span class="label">招牌简介</span><span class="flourish">à la carte</span></h2>
    <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="num">01</span><span class="label">主厨经历</span><span class="flourish">Spécialités</span></h2>
    {{#each experience}}<div class="menu-item" data-entry="experience" data-entry-index="{{@index}}">
      <div class="item-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="dots"></span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="num">02</span><span class="label">招牌作品</span><span class="flourish">Signature</span></h2>
    {{#each projects}}<div class="menu-item" data-entry="projects" data-entry-index="{{@index}}">
      <div class="item-head">
        <h3><span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="dots"></span><span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      </div>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="num">03</span><span class="label">拿手技艺</span><span class="flourish">Techniques</span></h2>
    <div class="skills">{{#each skills}}<span class="skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="num">04</span><span class="label">学艺背景</span><span class="flourish">Formation</span></h2>
    {{#each education}}<div class="menu-item edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="item-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.chef-resume * { margin:0; padding:0; box-sizing:border-box; }
.resume.chef-resume * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.chef-resume {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fbf8f3;
  color:#1c1a17;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

/* ===== Header: charcoal block with copper accents ===== */
.resume.chef-resume header {
  background:#1c1a17;
  color:#f5efe4;
  margin:-18mm -18mm 9mm;
  padding:16mm 18mm 13mm;
  position:relative;
  border-bottom:3px solid #b08247;
}
.resume.chef-resume header::before {
  content:"";
  position:absolute;
  left:18mm; right:18mm; top:8mm;
  border-top:1px solid rgba(176,130,71,0.45);
}
.resume.chef-resume header::after {
  content:"";
  position:absolute;
  left:18mm; right:18mm; bottom:6mm;
  border-top:1px solid rgba(176,130,71,0.35);
}
.resume.chef-resume .header-inner { text-align:center; padding-top:4mm; }
.resume.chef-resume .kicker {
  display:block;
  font-size:9pt;
  letter-spacing:0.42em;
  color:#c79a5e;
  text-transform:uppercase;
  font-style:italic;
  margin-bottom:5px;
}
.resume.chef-resume h1 {
  font-size:30pt;
  font-weight:700;
  letter-spacing:0.16em;
  color:#f5efe4;
  line-height:1.1;
  margin:2px 0 6px;
}
.resume.chef-resume .title {
  font-size:10.5pt;
  letter-spacing:0.3em;
  color:#d9b277;
  text-transform:uppercase;
  margin-bottom:10px;
}
.resume.chef-resume .contact {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:8px 22px;
  font-size:9pt;
  color:#cfc6b6;
  letter-spacing:0.04em;
  padding-top:6px;
}
.resume.chef-resume .contact span { position:relative; }
.resume.chef-resume .contact span + span::before {
  content:"◆";
  position:absolute;
  left:-13px; top:50%;
  transform:translateY(-50%);
  color:#b08247;
  font-size:5pt;
}

/* ===== Section blocks (menu style) ===== */
.resume.chef-resume .block { margin-bottom:8mm; }
.resume.chef-resume .block:last-child { margin-bottom:0; }

.resume.chef-resume h2 {
  display:flex;
  align-items:baseline;
  gap:10px;
  font-size:13pt;
  font-weight:700;
  letter-spacing:0.12em;
  color:#1c1a17;
  padding-bottom:6px;
  margin-bottom:9px;
  border-bottom:1.5px solid #1c1a17;
  position:relative;
}
.resume.chef-resume h2 .num {
  font-size:9pt;
  font-weight:700;
  color:#fbf8f3;
  background:#b08247;
  padding:2px 7px;
  letter-spacing:0.05em;
  border-radius:1px;
  flex:0 0 auto;
}
.resume.chef-resume h2 .label { flex:0 0 auto; }
.resume.chef-resume h2 .flourish {
  margin-left:auto;
  font-size:10pt;
  font-style:italic;
  font-weight:400;
  letter-spacing:0.06em;
  color:#b08247;
  text-transform:none;
}

/* ===== Menu items ===== */
.resume.chef-resume .menu-item { margin-bottom:7px; }
.resume.chef-resume .menu-item:last-child { margin-bottom:0; }

.resume.chef-resume .item-head {
  display:flex;
  align-items:baseline;
  gap:12px;
}
.resume.chef-resume .menu-item h3 {
  display:flex;
  align-items:baseline;
  gap:6px;
  flex:1 1 auto;
  font-size:11pt;
  font-weight:700;
  color:#1c1a17;
  min-width:0;
}
.resume.chef-resume .company { flex:0 0 auto; }
.resume.chef-resume .position {
  flex:0 0 auto;
  font-size:9.5pt;
  font-weight:500;
  color:#7a5e34;
  font-style:italic;
}
/* dotted leader, menu price style */
.resume.chef-resume .dots {
  flex:1 1 auto;
  align-self:flex-end;
  min-width:14px;
  height:0;
  margin-bottom:3px;
  border-bottom:1px dotted #b9a98c;
}
.resume.chef-resume .date {
  flex:0 0 auto;
  font-size:8.5pt;
  font-weight:600;
  letter-spacing:0.06em;
  color:#9c8a6a;
  white-space:nowrap;
}

.resume.chef-resume ul {
  list-style:none;
  margin:4px 0 0;
  padding-left:0;
}
.resume.chef-resume li {
  position:relative;
  padding-left:16px;
  margin-bottom:2.5px;
  color:#34302a;
  font-size:9.5pt;
}
.resume.chef-resume li::before {
  content:"❧";
  position:absolute;
  left:0; top:-0.5px;
  color:#b08247;
  font-size:8pt;
}

/* ===== Summary ===== */
.resume.chef-resume .summary {
  font-size:10pt;
  color:#34302a;
  line-height:1.7;
  padding:3px 0 0 16px;
  border-left:2px solid #b08247;
  font-style:italic;
}

/* ===== Projects ===== */
.resume.chef-resume .proj-desc {
  font-size:9.5pt;
  color:#5a5249;
  margin-top:3px;
  padding-left:0;
}

/* ===== Skills ===== */
.resume.chef-resume .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.chef-resume .skill-tag {
  display:inline-block;
  font-size:9pt;
  padding:4px 11px;
  background:#fff;
  border:1px solid #cdbb9a;
  border-radius:1px;
  color:#1c1a17;
  letter-spacing:0.03em;
  box-shadow:2px 2px 0 #ece2d0;
}
.resume.chef-resume .skill-tag .lvl {
  color:#b08247;
  font-style:italic;
  font-size:8.5pt;
}

/* ===== Education ===== */
.resume.chef-resume .edu-meta {
  font-size:9pt;
  color:#5a5249;
  margin-top:2px;
}

/* ===== required tail rules ===== */
.resume.chef-resume li p, .resume.chef-resume li div { margin:0; padding:0; display:inline; }
.resume.chef-resume .skills span, .resume.chef-resume [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.chef-resume { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "chef-resume",
      "version": "1.0.0",
      "name": "厨师主厨",
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
