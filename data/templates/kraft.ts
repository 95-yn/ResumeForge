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
    slug: 'kraft',
    name: '牛皮纸',
    category: 'minimal',
    html: `<div class="resume kraft">
  <header>
    <div class="tape tape-tl"></div>
    <div class="tape tape-tr"></div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<section class="block summary">
    <h2><span class="tag">个人简介</span></h2>
    <div class="note" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}
  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="tag">工作经历</span></h2>
    {{#each experience}}<div class="card" data-entry="experience" data-entry-index="{{@index}}">
      <div class="card-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="tag">教育背景</span></h2>
    {{#each education}}<div class="card" data-entry="education" data-entry-index="{{@index}}">
      <div class="card-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="tag">专业技能</span></h2>
    <div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}
  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="tag">项目经历</span></h2>
    {{#each projects}}<div class="card" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.kraft * { margin:0; padding:0; box-sizing:border-box; }
.resume.kraft * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.kraft {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  font-size:10pt;
  line-height:1.6;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#3a3128;
  background-color:#cbab7e;
  background-image:
    radial-gradient(circle at 18% 22%, rgba(255,255,255,0.10) 0, transparent 9%),
    radial-gradient(circle at 78% 64%, rgba(90,60,30,0.10) 0, transparent 11%),
    radial-gradient(circle at 42% 88%, rgba(255,255,255,0.08) 0, transparent 8%),
    linear-gradient(115deg, rgba(120,85,45,0.06) 0%, transparent 40%),
    linear-gradient(0deg, #c7a677 0%, #cead81 100%);
}

/* ---------- header / 标题贴纸 ---------- */
.resume.kraft header {
  position:relative;
  margin-bottom:9mm;
  padding:7mm 6mm 6mm;
  text-align:center;
  background:#f4ecdd;
  border:1px dashed #6b5638;
  box-shadow:2px 3px 0 rgba(58,44,28,0.22);
}
.resume.kraft .tape {
  position:absolute;
  top:-9px;
  width:74px;
  height:20px;
  background:rgba(173,142,92,0.55);
  border-left:1px dashed rgba(80,60,35,0.4);
  border-right:1px dashed rgba(80,60,35,0.4);
  box-shadow:inset 0 0 6px rgba(255,255,255,0.4);
}
.resume.kraft .tape-tl { left:24px; transform:rotate(-7deg); }
.resume.kraft .tape-tr { right:24px; transform:rotate(6deg); }

.resume.kraft h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:3px;
  color:#2e2418;
}
.resume.kraft .title {
  margin-top:3px;
  font-size:10.5pt;
  letter-spacing:5px;
  color:#7a5e36;
  text-transform:uppercase;
}
.resume.kraft .contact {
  margin-top:9px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:6px 0;
  font-size:9pt;
  color:#5a4830;
}
.resume.kraft .contact span {
  position:relative;
  padding:0 14px;
}
.resume.kraft .contact span + span::before {
  content:'✦';
  position:absolute;
  left:-4px;
  color:#a9824a;
  font-size:7pt;
}

/* ---------- section ---------- */
.resume.kraft .block { margin-bottom:7mm; }
.resume.kraft h2 {
  margin-bottom:4mm;
}
.resume.kraft .tag {
  display:inline-block;
  padding:3px 13px;
  font-size:10pt;
  font-weight:700;
  letter-spacing:2px;
  color:#f4ecdd;
  background:#4a3a26;
  box-shadow:2px 2px 0 rgba(58,44,28,0.3);
  transform:rotate(-1.2deg);
}

/* ---------- summary 便签 ---------- */
.resume.kraft .note {
  padding:5mm 6mm;
  background:#f4ecdd;
  border:1px solid #b89c6e;
  border-left:4px solid #8a6a3e;
  box-shadow:2px 2px 0 rgba(58,44,28,0.18);
  font-size:9.6pt;
  color:#473a28;
}

/* ---------- card 卡片 ---------- */
.resume.kraft .card {
  position:relative;
  margin-bottom:4.5mm;
  padding:4.5mm 5mm;
  background:#f6efe1;
  border:1px solid #c0a677;
  box-shadow:2px 2px 0 rgba(58,44,28,0.16);
}
.resume.kraft .card::before {
  content:'';
  position:absolute;
  top:-7px;
  left:14px;
  width:46px;
  height:15px;
  background:rgba(173,142,92,0.5);
  border-left:1px dashed rgba(80,60,35,0.35);
  border-right:1px dashed rgba(80,60,35,0.35);
  transform:rotate(-4deg);
}
.resume.kraft .card-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:2px 10px;
}
.resume.kraft h3 {
  font-size:11.5pt;
  font-weight:700;
  color:#2e2418;
}
.resume.kraft .company { font-weight:800; }
.resume.kraft .position {
  margin-left:9px;
  padding-left:9px;
  font-weight:600;
  color:#7a5e36;
  border-left:2px solid #c4a36e;
}
.resume.kraft .date {
  font-size:8.5pt;
  font-weight:600;
  letter-spacing:0.5px;
  color:#8a6a3e;
  white-space:nowrap;
}
.resume.kraft .meta {
  margin-top:3px;
  font-size:9.2pt;
  color:#5a4830;
}

/* ---------- 列表 ---------- */
.resume.kraft ul {
  margin-top:6px;
  list-style:none;
}
.resume.kraft li {
  position:relative;
  padding-left:16px;
  margin-bottom:3px;
  font-size:9.4pt;
  color:#473a28;
}
.resume.kraft li::before {
  content:'❖';
  position:absolute;
  left:0;
  top:0;
  color:#a9824a;
  font-size:7.5pt;
}

/* ---------- skills 贴纸 chip ---------- */
.resume.kraft .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.kraft .chip {
  display:inline-block;
  padding:4px 11px;
  font-size:9pt;
  color:#3a2d1c;
  background:#ecddc0;
  border:1px solid #b08e54;
  border-radius:2px;
  box-shadow:1px 1px 0 rgba(58,44,28,0.18);
}
.resume.kraft .chip:nth-child(3n) { transform:rotate(-1.5deg); }
.resume.kraft .chip:nth-child(3n+2) { transform:rotate(1.2deg); }
.resume.kraft .chip .lvl { color:#8a6a3e; font-weight:600; }

/* ---------- projects ---------- */
.resume.kraft .role { color:#7a5e36; font-weight:600; }
.resume.kraft .desc {
  margin-top:4px;
  font-size:9.4pt;
  color:#473a28;
}

/* ---------- 必含收尾规则 ---------- */
.resume.kraft li p, .resume.kraft li div { margin:0; padding:0; display:inline; }
.resume.kraft .skills span, .resume.kraft [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.kraft { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "kraft",
      "version": "1.0.0",
      "name": "牛皮纸",
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
