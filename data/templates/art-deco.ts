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
    slug: 'art-deco',
    name: '装饰艺术',
    category: 'creative',
    html: `<div class="resume art-deco">
  <header>
    <div class="ad-frame">
      <span class="ad-corner tl"></span><span class="ad-corner tr"></span>
      <span class="ad-corner bl"></span><span class="ad-corner br"></span>
      <div class="ad-fan"></div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="ad-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="ad-rule"><span></span><i></i><span></span></div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="ad-summary"><h2><span class="ad-h2">个人简介</span></h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="ad-h2">工作经历</span></h2>
    {{#each experience}}<div class="ad-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="ad-entry-head">
        <h3><span data-field="experience.{{@index}}.company">{{{company}}}</span><span class="ad-role" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="ad-h2">教育背景</span></h2>
    {{#each education}}<div class="ad-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="ad-entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="ad-edu-line"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="ad-h2">专业技能</span></h2><div class="skills">{{#each skills}}<span class="ad-skill" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="ad-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="ad-h2">项目经历</span></h2>
    {{#each projects}}<div class="ad-entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="ad-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="ad-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.art-deco * { margin:0; padding:0; box-sizing:border-box; }
.resume.art-deco * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.art-deco {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm;
  background:#fbf9f3; color:#1a1814;
  font-size:10pt; line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}
.resume.art-deco::before {
  content:""; position:absolute; inset:7mm;
  border:1.5px solid #c9a227; pointer-events:none;
}
.resume.art-deco::after {
  content:""; position:absolute; inset:8.5mm;
  border:0.5px solid #c9a227; pointer-events:none;
}

/* ===== Header ===== */
.resume.art-deco header { position:relative; margin-bottom:9mm; }
.resume.art-deco .ad-frame {
  position:relative; background:#15130f; color:#f3e8c8;
  padding:11mm 8mm 9mm; text-align:center;
  border:1px solid #c9a227;
}
.resume.art-deco .ad-corner { position:absolute; width:7mm; height:7mm; border:1.5px solid #c9a227; }
.resume.art-deco .ad-corner.tl { top:2.5mm; left:2.5mm; border-right:none; border-bottom:none; }
.resume.art-deco .ad-corner.tr { top:2.5mm; right:2.5mm; border-left:none; border-bottom:none; }
.resume.art-deco .ad-corner.bl { bottom:2.5mm; left:2.5mm; border-right:none; border-top:none; }
.resume.art-deco .ad-corner.br { bottom:2.5mm; right:2.5mm; border-left:none; border-top:none; }

.resume.art-deco .ad-fan {
  width:14mm; height:7mm; margin:0 auto 4mm;
  background:
    repeating-conic-gradient(from 270deg at 50% 100%,
      #c9a227 0deg 9deg, transparent 9deg 18deg);
  -webkit-mask:radial-gradient(7mm at 50% 100%, #000 99%, transparent 100%);
          mask:radial-gradient(7mm at 50% 100%, #000 99%, transparent 100%);
}

.resume.art-deco header h1 {
  font-size:25pt; font-weight:700; letter-spacing:0.18em;
  color:#e9d49a; text-indent:0.18em;
  text-shadow:0 0 1px #c9a227;
}
.resume.art-deco .ad-title {
  margin-top:3mm; font-size:10pt; font-weight:400;
  letter-spacing:0.42em; text-indent:0.42em;
  text-transform:uppercase; color:#bfa45a;
}

.resume.art-deco .ad-rule {
  display:flex; align-items:center; justify-content:center; gap:3mm;
  margin:5mm auto 4mm; width:55%;
}
.resume.art-deco .ad-rule span { flex:1; height:1px; background:linear-gradient(90deg,transparent,#c9a227,transparent); }
.resume.art-deco .ad-rule i {
  width:3mm; height:3mm; background:#c9a227;
  transform:rotate(45deg); display:block;
}

.resume.art-deco header .contact {
  display:flex; flex-wrap:wrap; justify-content:center; gap:3mm 5mm;
  font-size:8.5pt; letter-spacing:0.08em; color:#d8c285;
}
.resume.art-deco header .contact span { position:relative; }
.resume.art-deco header .contact span + span::before {
  content:"◆"; position:absolute; left:-3mm; color:#8a7430; font-size:6pt; top:0.4mm;
}

/* ===== Sections ===== */
.resume.art-deco section { margin-bottom:6.5mm; position:relative; }
.resume.art-deco h2 {
  text-align:center; margin-bottom:4.5mm;
  display:flex; align-items:center; justify-content:center; gap:3.5mm;
}
.resume.art-deco h2::before,
.resume.art-deco h2::after {
  content:""; flex:1; max-width:30mm; height:0;
  border-top:1px solid #c9a227;
  position:relative;
}
.resume.art-deco h2::before { box-shadow:0 2.4px 0 -1.4px #c9a227; }
.resume.art-deco h2::after  { box-shadow:0 2.4px 0 -1.4px #c9a227; }
.resume.art-deco .ad-h2 {
  font-size:12.5pt; font-weight:700; letter-spacing:0.34em; text-indent:0.34em;
  color:#15130f; white-space:nowrap;
  padding:0 1mm; position:relative;
}
.resume.art-deco .ad-h2::before { content:"❖"; color:#c9a227; margin-right:2.5mm; font-size:9pt; font-weight:400; }

/* ===== Summary ===== */
.resume.art-deco .ad-summary > div {
  text-align:center; max-width:155mm; margin:0 auto;
  color:#36322a; font-size:9.7pt; line-height:1.7;
}

/* ===== Entries ===== */
.resume.art-deco .ad-entry {
  margin-bottom:4.5mm; padding-left:6mm; position:relative;
}
.resume.art-deco .ad-entry::before {
  content:""; position:absolute; left:0; top:1mm; bottom:1mm;
  width:2.5px; background:#c9a227;
}
.resume.art-deco .ad-entry::after {
  content:""; position:absolute; left:-0.6mm; top:-0.4mm;
  width:2mm; height:2mm; background:#15130f; border:1px solid #c9a227;
  transform:rotate(45deg);
}
.resume.art-deco .ad-entry:last-child { margin-bottom:0; }

.resume.art-deco .ad-entry-head {
  display:flex; justify-content:space-between; align-items:baseline; gap:4mm;
  flex-wrap:wrap;
}
.resume.art-deco h3 {
  font-size:11pt; font-weight:700; letter-spacing:0.04em; color:#15130f;
}
.resume.art-deco .ad-role {
  font-weight:400; color:#9a7d2a; letter-spacing:0.1em;
}
.resume.art-deco h3 .ad-role::before { content:"／"; color:#c9a227; margin:0 1.5mm; font-weight:400; }
.resume.art-deco h3 > span:first-child + .ad-role::before,
.resume.art-deco h3 .ad-role:first-child::before { }

.resume.art-deco .date {
  font-size:8pt; letter-spacing:0.12em; color:#8a7430;
  white-space:nowrap; font-weight:600;
  text-transform:uppercase;
}

.resume.art-deco .ad-edu-line { margin-top:1mm; color:#4a4438; font-size:9.5pt; }
.resume.art-deco .ad-desc { margin-top:1.5mm; color:#36322a; }

.resume.art-deco ul { list-style:none; margin-top:2mm; }
.resume.art-deco li {
  position:relative; padding-left:5mm; margin-bottom:1.4mm;
  color:#2c2820; line-height:1.55;
}
.resume.art-deco li::before {
  content:""; position:absolute; left:0.6mm; top:2mm;
  width:1.8mm; height:1.8mm; background:#c9a227;
  transform:rotate(45deg);
}

/* ===== Skills ===== */
.resume.art-deco .skills {
  display:flex; flex-wrap:wrap; gap:2.5mm; justify-content:center;
}
.resume.art-deco .ad-skill {
  display:inline-flex; align-items:center;
  padding:1.6mm 4mm;
  border:1px solid #c9a227;
  background:#fff;
  font-size:9pt; letter-spacing:0.05em; color:#15130f;
  position:relative;
}
.resume.art-deco .ad-skill::before,
.resume.art-deco .ad-skill::after {
  content:""; position:absolute; top:50%; width:1.4mm; height:1.4mm;
  background:#15130f; border:0.5px solid #c9a227; transform:translateY(-50%) rotate(45deg);
}
.resume.art-deco .ad-skill::before { left:-0.8mm; }
.resume.art-deco .ad-skill::after { right:-0.8mm; }
.resume.art-deco .ad-lvl { color:#9a7d2a; }

/* contract-required tail */
.resume.art-deco li p, .resume.art-deco li div { margin:0; padding:0; display:inline; }
.resume.art-deco .skills span, .resume.art-deco [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.art-deco { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "art-deco",
      "version": "1.0.0",
      "name": "装饰艺术",
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
