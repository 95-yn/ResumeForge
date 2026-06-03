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
    slug: 'ticket',
    name: '票根风',
    category: 'creative',
    html: `<div class="resume ticket">
  <header>
    <div class="ticket-stub">
      <div class="stub-no">NO. 2026<span class="stub-blink">●</span>0530</div>
      <div class="stub-barcode" aria-hidden="true"></div>
      <div class="stub-admit">ADMIT ONE</div>
    </div>
    <div class="ticket-main">
      <div class="header-top">
        <span class="serial">SERIAL · A4-RESUME</span>
        <span class="serial">VALID · 2026</span>
      </div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="perf perf-x"></div>
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary">
    <h2><span class="tab">01</span>个人简介</h2>
    <div class="block-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="tab">02</span>工作经历</h2>
    <div class="block-body">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="entry-no">{{@index}}</span>
      <div class="entry-content">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="tab">03</span>教育背景</h2>
    <div class="block-body">
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <span class="entry-no">{{@index}}</span>
      <div class="entry-content">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="tab">04</span>专业技能</h2>
    <div class="block-body"><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="tab">05</span>项目经历</h2>
    <div class="block-body">
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <span class="entry-no">{{@index}}</span>
      <div class="entry-content">
        <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  <div class="ticket-footer" aria-hidden="true">
    <div class="footer-barcode"></div>
    <span class="footer-text">★ THANK YOU FOR READING ★ NO REFUND ★</span>
  </div>
</div>`,
    css: `.resume.ticket * { margin:0; padding:0; box-sizing:border-box; }
.resume.ticket * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.ticket {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm;
  background:
    radial-gradient(circle at 0 0, transparent 4px, #fbfaf6 4px) 0 0 / 14px 14px,
    #fbfaf6;
  font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  color:#1c1a17;
  position:relative;
}

/* ===== HEADER : ticket with stub ===== */
.resume.ticket header {
  display:flex; align-items:stretch;
  border:2px solid #1c1a17;
  background:#fff;
  position:relative;
  margin-bottom:14mm;
  box-shadow:5px 5px 0 #1c1a17;
}

/* left stub */
.resume.ticket .ticket-stub {
  flex:0 0 30mm;
  background:#1c1a17;
  color:#fbfaf6;
  display:flex; flex-direction:column;
  align-items:center; justify-content:space-between;
  padding:6mm 3mm;
  text-align:center;
}
.resume.ticket .stub-no {
  font-family:'Courier New',monospace;
  font-size:7.5pt; letter-spacing:1px;
  font-weight:700;
  writing-mode:vertical-rl;
  transform:rotate(180deg);
  white-space:nowrap;
}
.resume.ticket .stub-blink { opacity:.55; margin:0 2px; }
.resume.ticket .stub-barcode {
  width:5mm; flex:1; margin:4mm 0;
  background:repeating-linear-gradient(
    to bottom,
    #fbfaf6 0, #fbfaf6 1.5px,
    transparent 1.5px, transparent 3px,
    #fbfaf6 3px, #fbfaf6 6px,
    transparent 6px, transparent 7.5px
  );
}
.resume.ticket .stub-admit {
  font-family:'Courier New',monospace;
  font-size:6.5pt; letter-spacing:1.5px;
  border:1px solid #fbfaf6; border-radius:2px;
  padding:1.5mm 1mm; line-height:1.2;
}

/* perforation between stub and main */
.resume.ticket .ticket-stub::after {
  content:''; position:absolute;
  left:30mm; top:0; bottom:0; width:0;
  border-left:2px dashed #c9c4b6;
}

.resume.ticket .ticket-main {
  flex:1; padding:7mm 8mm 6mm;
  position:relative;
}
.resume.ticket .header-top {
  display:flex; justify-content:space-between;
  font-family:'Courier New',monospace;
  font-size:6.5pt; letter-spacing:1.5px;
  color:#9a9384; margin-bottom:3mm;
}
.resume.ticket h1 {
  font-size:25pt; font-weight:800;
  letter-spacing:1px; line-height:1.05;
  color:#1c1a17;
}
.resume.ticket .title {
  display:inline-block;
  margin-top:2mm;
  font-size:9.5pt; font-weight:600;
  color:#c0392b;
  letter-spacing:.5px;
}
.resume.ticket .perf-x {
  height:0; margin:4mm 0 3.5mm;
  border-top:1.5px dashed #c9c4b6;
}
.resume.ticket .contact {
  display:flex; flex-wrap:wrap; gap:3mm 6mm;
  font-family:'Courier New',monospace;
  font-size:8pt; color:#54504a;
}
.resume.ticket .contact span {
  position:relative; padding-left:5mm;
}
.resume.ticket .contact span::before {
  content:'▸'; position:absolute; left:0;
  color:#c0392b; font-size:7pt;
}

/* ===== BLOCKS : ticket cards ===== */
.resume.ticket .block {
  background:#fff;
  border:1.5px solid #1c1a17;
  margin-bottom:9mm;
  position:relative;
  box-shadow:4px 4px 0 rgba(28,26,23,.12);
}
/* zigzag top edge */
.resume.ticket .block::before {
  content:''; position:absolute;
  left:-1.5px; right:-1.5px; top:-5px; height:5px;
  background:
    linear-gradient(135deg, #fbfaf6 50%, transparent 50%) 0 0 / 8px 5px repeat-x,
    linear-gradient(225deg, #fbfaf6 50%, transparent 50%) 0 0 / 8px 5px repeat-x;
}

.resume.ticket h2 {
  display:flex; align-items:center; gap:3mm;
  font-size:11.5pt; font-weight:800;
  letter-spacing:2px;
  padding:4mm 6mm;
  background:#1c1a17; color:#fbfaf6;
  text-transform:uppercase;
}
.resume.ticket h2 .tab {
  font-family:'Courier New',monospace;
  font-size:9pt; font-weight:700;
  background:#c0392b; color:#fff;
  padding:.5mm 2.2mm; border-radius:2px;
  letter-spacing:1px;
}
.resume.ticket .block-body { padding:5mm 6mm 5.5mm; }
.resume.ticket .summary .block-body { color:#3a362f; }

/* ===== ENTRIES ===== */
.resume.ticket .entry {
  display:flex; gap:4mm;
  padding-bottom:4.5mm; margin-bottom:4.5mm;
  border-bottom:1.5px dashed #d8d3c5;
}
.resume.ticket .entry:last-child {
  padding-bottom:0; margin-bottom:0; border-bottom:0;
}
.resume.ticket .entry-no {
  flex:0 0 auto;
  font-family:'Courier New',monospace;
  font-size:9pt; font-weight:700;
  width:8mm; height:8mm; line-height:8mm;
  text-align:center;
  border:1.5px solid #1c1a17; border-radius:50%;
  color:#1c1a17;
}
.resume.ticket .entry-content { flex:1; min-width:0; }

.resume.ticket h3 {
  font-size:11pt; font-weight:700;
  color:#1c1a17; line-height:1.3;
}
.resume.ticket h3 .company,
.resume.ticket h3 .proj-name { margin-right:0; }
.resume.ticket h3 .position {
  margin-left:3mm; padding-left:3mm; position:relative;
  color:#c0392b; font-weight:600; font-size:9.5pt;
}
.resume.ticket h3 .position::before {
  content:'·'; position:absolute; left:0; top:-0.1em;
  color:#c0392b; font-weight:800;
}
.resume.ticket h3 .proj-role {
  color:#c0392b; font-weight:600;
}
.resume.ticket .date {
  display:inline-block; margin-top:1mm;
  font-family:'Courier New',monospace;
  font-size:7.5pt; letter-spacing:.5px;
  color:#fff; background:#1c1a17;
  padding:.5mm 2mm; border-radius:2px;
}
.resume.ticket .entry-content > p {
  margin-top:1.5mm; font-size:9pt; color:#54504a;
}
.resume.ticket .proj-desc {
  margin-top:1.5mm; font-size:9.5pt; color:#3a362f;
}
.resume.ticket ul {
  list-style:none; margin-top:2.5mm;
}
.resume.ticket li {
  position:relative; padding-left:6mm;
  margin-bottom:1.8mm; font-size:9.5pt;
  color:#3a362f; line-height:1.5;
}
.resume.ticket li::before {
  content:'✂'; position:absolute; left:0; top:0;
  font-size:8pt; color:#c0392b;
  transform:scaleX(-1);
}

/* ===== SKILLS ===== */
.resume.ticket .skills {
  display:flex; flex-wrap:wrap; gap:2.5mm;
}
.resume.ticket .skill-chip {
  font-family:'Courier New',monospace;
  font-size:8.5pt; font-weight:600;
  padding:1.5mm 3mm;
  border:1.5px dashed #1c1a17;
  background:#fbfaf6;
  border-radius:3px;
  color:#1c1a17;
}
.resume.ticket .skill-lv { color:#c0392b; }

/* ===== FOOTER ===== */
.resume.ticket .ticket-footer {
  margin-top:2mm; text-align:center;
  border-top:2px dashed #c9c4b6; padding-top:5mm;
}
.resume.ticket .footer-barcode {
  height:8mm; margin:0 auto 3mm; max-width:80mm;
  background:repeating-linear-gradient(
    to right,
    #1c1a17 0, #1c1a17 1px,
    transparent 1px, transparent 3px,
    #1c1a17 3px, #1c1a17 5px,
    transparent 5px, transparent 6px,
    #1c1a17 6px, #1c1a17 9px,
    transparent 9px, transparent 11px
  );
}
.resume.ticket .footer-text {
  font-family:'Courier New',monospace;
  font-size:7pt; letter-spacing:2px;
  color:#9a9384;
}

/* contract-required tails */
.resume.ticket li p, .resume.ticket li div { margin:0; padding:0; display:inline; }
.resume.ticket .skills span, .resume.ticket [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.ticket { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "ticket",
      "version": "1.0.0",
      "name": "票根风",
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
