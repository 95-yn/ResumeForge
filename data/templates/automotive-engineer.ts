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
    slug: 'automotive-engineer',
    name: '汽车工程',
    category: 'profession',
    html: `<div class="resume automotive-engineer">
  <header>
    <div class="hud-rail"></div>
    <div class="head-main">
      <div class="name-block">
        <span class="redline">REDLINE</span>
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="gauge">
        <span class="gauge-needle"></span>
        <span class="gauge-tick t0"></span>
        <span class="gauge-tick t1"></span>
        <span class="gauge-tick t2"></span>
        <span class="gauge-tick t3"></span>
        <span class="gauge-tick t4"></span>
        <span class="gauge-tick t5 red"></span>
        <span class="gauge-tick t6 red"></span>
        <span class="rpm">x1000<br>r/min</span>
      </div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
    <div class="speedlines"><i></i><i></i><i></i></div>
  </header>

  {{#if basics.summary}}<section class="summary"><h2><span class="hx">技术档案</span></h2><div data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="hx">工作经历</span></h2>
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="lap-no">{{@index}}</span>
      <div class="entry-body">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="hx">教育背景</span></h2>
    {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-body">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="hx">专业技能</span></h2><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="dot"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="hx">项目经历</span></h2>
    {{#each projects}}<div class="entry proj" data-entry="projects" data-entry-index="{{@index}}">
      <div class="entry-body">
        <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="prole" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="pdesc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.automotive-engineer * { margin:0; padding:0; box-sizing:border-box; }
.resume.automotive-engineer * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.automotive-engineer {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm 16mm;
  background:#0e0e0f;
  background-image:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 26px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 26px);
  color:#e7e7e9;
  font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  position:relative;
}

/* ===== HEADER ===== */
.resume.automotive-engineer header {
  position:relative;
  border:1px solid #2a2a2c;
  border-left:5px solid #e10600;
  background:linear-gradient(135deg,#161617 0%,#0f0f10 100%);
  padding:16px 18px 14px;
  margin-bottom:18px;
  overflow:hidden;
}
.resume.automotive-engineer .hud-rail {
  position:absolute; top:0; left:5px; right:0; height:6px;
  background:repeating-linear-gradient(90deg,#e10600 0 2px,transparent 2px 9px);
  opacity:.55;
}
.resume.automotive-engineer .head-main {
  display:flex; align-items:center; justify-content:space-between; gap:16px;
}
.resume.automotive-engineer .redline {
  display:inline-block; font-size:7pt; letter-spacing:.42em; font-weight:700;
  color:#e10600; margin-bottom:4px;
}
.resume.automotive-engineer h1 {
  font-size:27pt; font-weight:800; letter-spacing:.04em; color:#fff; line-height:1.05;
  text-shadow:0 0 1px rgba(225,6,0,.25);
}
.resume.automotive-engineer .name-block p {
  margin-top:6px; font-size:10.5pt; color:#b6b6ba; letter-spacing:.16em;
  text-transform:uppercase; font-weight:600;
}

/* gauge */
.resume.automotive-engineer .gauge {
  position:relative; width:84px; height:84px; flex:none;
  border-radius:50%;
  border:2px solid #2e2e30;
  background:radial-gradient(circle at 50% 50%,#161617 0 58%,#0c0c0d 100%);
  box-shadow:inset 0 0 0 6px #0c0c0d, inset 0 0 14px rgba(0,0,0,.8);
}
.resume.automotive-engineer .gauge-tick {
  position:absolute; left:50%; top:50%; width:2px; height:9px;
  background:#7d7d80; transform-origin:50% 38px;
  margin-left:-1px; margin-top:-38px;
}
.resume.automotive-engineer .gauge-tick.t0{transform:rotate(-130deg);}
.resume.automotive-engineer .gauge-tick.t1{transform:rotate(-92deg);}
.resume.automotive-engineer .gauge-tick.t2{transform:rotate(-54deg);}
.resume.automotive-engineer .gauge-tick.t3{transform:rotate(-16deg);}
.resume.automotive-engineer .gauge-tick.t4{transform:rotate(22deg);}
.resume.automotive-engineer .gauge-tick.t5{transform:rotate(60deg);}
.resume.automotive-engineer .gauge-tick.t6{transform:rotate(98deg);}
.resume.automotive-engineer .gauge-tick.red{background:#e10600;}
.resume.automotive-engineer .gauge-needle {
  position:absolute; left:50%; top:50%; width:3px; height:33px;
  background:linear-gradient(#e10600,#ff4d47);
  transform-origin:50% 100%; transform:translate(-50%,-100%) rotate(64deg);
  border-radius:2px 2px 0 0;
  box-shadow:0 0 6px rgba(225,6,0,.7);
}
.resume.automotive-engineer .gauge::after {
  content:""; position:absolute; left:50%; top:50%; width:9px; height:9px;
  background:#e7e7e9; border-radius:50%; transform:translate(-50%,-50%);
  box-shadow:0 0 0 2px #1a1a1b;
}
.resume.automotive-engineer .gauge .rpm {
  position:absolute; left:50%; bottom:16px; transform:translateX(-50%);
  font-size:5pt; letter-spacing:.1em; color:#8a8a8d; text-align:center; line-height:1.2;
}

.resume.automotive-engineer .contact {
  display:flex; flex-wrap:wrap; gap:10px 18px; margin-top:13px;
  padding-top:11px; border-top:1px dashed #303032;
  position:relative; z-index:2;
}
.resume.automotive-engineer .contact span {
  font-size:8.6pt; color:#c9c9cc; letter-spacing:.03em; position:relative; padding-left:13px;
}
.resume.automotive-engineer .contact span::before {
  content:""; position:absolute; left:0; top:50%; width:6px; height:6px;
  transform:translateY(-50%) rotate(45deg); background:#e10600;
}
.resume.automotive-engineer .speedlines {
  position:absolute; right:-6px; bottom:8px; display:flex; flex-direction:column; gap:5px; opacity:.5;
}
.resume.automotive-engineer .speedlines i {
  display:block; height:2px; background:linear-gradient(90deg,transparent,#e10600);
}
.resume.automotive-engineer .speedlines i:nth-child(1){width:46px;}
.resume.automotive-engineer .speedlines i:nth-child(2){width:64px;}
.resume.automotive-engineer .speedlines i:nth-child(3){width:34px;}

/* ===== SECTIONS ===== */
.resume.automotive-engineer section { margin-bottom:16px; }
.resume.automotive-engineer h2 {
  position:relative; margin-bottom:11px; padding-bottom:6px;
  border-bottom:1px solid #2a2a2c;
}
.resume.automotive-engineer h2 .hx {
  display:inline-block; font-size:11.5pt; font-weight:800; letter-spacing:.16em;
  color:#fff; text-transform:uppercase; padding-left:14px; position:relative;
}
.resume.automotive-engineer h2 .hx::before {
  content:""; position:absolute; left:0; top:2px; bottom:2px; width:4px;
  background:#e10600; box-shadow:0 0 6px rgba(225,6,0,.6);
}
.resume.automotive-engineer h2::after {
  content:""; position:absolute; left:0; bottom:-1px; width:54px; height:1px;
  background:#e10600;
}

.resume.automotive-engineer .summary div {
  color:#c4c4c7; font-size:9.6pt; line-height:1.65;
  border-left:2px solid #303032; padding:2px 0 2px 12px;
}

/* entry */
.resume.automotive-engineer .entry {
  position:relative; display:flex; gap:12px;
  padding:11px 13px; margin-bottom:9px;
  background:#141415; border:1px solid #232325; border-radius:3px;
}
.resume.automotive-engineer .entry::before {
  content:""; position:absolute; left:0; top:0; bottom:0; width:3px;
  background:linear-gradient(#e10600,transparent); border-radius:3px 0 0 3px;
}
.resume.automotive-engineer .lap-no {
  flex:none; width:30px; height:30px; line-height:30px; text-align:center;
  font-size:11pt; font-weight:800; color:#e10600;
  border:1px solid #3a2020; border-radius:50%; background:#0e0e0f;
  font-style:italic;
}
.resume.automotive-engineer .entry-body { flex:1; min-width:0; }

.resume.automotive-engineer .entry h3 {
  font-size:10.5pt; font-weight:700; color:#fff; line-height:1.35;
  display:flex; flex-wrap:wrap; align-items:baseline; gap:8px;
}
.resume.automotive-engineer .company { color:#fff; }
.resume.automotive-engineer .pos {
  font-size:9pt; font-weight:600; color:#e10600; letter-spacing:.04em;
}
.resume.automotive-engineer .pos::before { content:"// "; color:#5a5a5d; font-weight:400; }

.resume.automotive-engineer .date {
  display:inline-block; margin:3px 0 6px;
  font-size:7.6pt; letter-spacing:.14em; color:#9a9a9d; font-weight:600;
  text-transform:uppercase;
  border:1px solid #2c2c2e; padding:1px 7px; border-radius:2px; background:#0f0f10;
}

.resume.automotive-engineer ul { list-style:none; margin-top:4px; }
.resume.automotive-engineer li {
  position:relative; padding-left:15px; margin-bottom:4px;
  font-size:9.3pt; color:#c2c2c5; line-height:1.55;
}
.resume.automotive-engineer li::before {
  content:""; position:absolute; left:0; top:.62em;
  width:7px; height:2px; background:#e10600;
  box-shadow:4px 0 0 -.5px #6a3030;
}

.resume.automotive-engineer .edu-meta { margin-top:3px; font-size:9pt; color:#b4b4b7; }
.resume.automotive-engineer .pdesc { font-size:9.3pt; color:#bcbcbf; margin-top:2px; line-height:1.55; }
.resume.automotive-engineer .pname { color:#fff; }
.resume.automotive-engineer .prole { color:#e10600; font-weight:600; font-size:9pt; }

/* skills */
.resume.automotive-engineer .skills {
  display:flex; flex-wrap:wrap; gap:7px;
}
.resume.automotive-engineer .skill-chip {
  display:inline-flex; align-items:center; gap:6px;
  font-size:8.8pt; color:#e2e2e4; font-weight:600; letter-spacing:.02em;
  background:#161617; border:1px solid #2c2c2e; border-left:3px solid #e10600;
  padding:4px 11px; border-radius:2px;
}
.resume.automotive-engineer .skill-chip .dot {
  width:5px; height:5px; background:#e10600; border-radius:50%;
  box-shadow:0 0 5px rgba(225,6,0,.7);
}
.resume.automotive-engineer .skill-chip .lv { color:#8f8f92; font-weight:500; }

/* contract-required tail */
.resume.automotive-engineer li p, .resume.automotive-engineer li div { margin:0; padding:0; display:inline; }
.resume.automotive-engineer .skills span, .resume.automotive-engineer [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.automotive-engineer { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "automotive-engineer",
      "version": "1.0.0",
      "name": "汽车工程",
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
