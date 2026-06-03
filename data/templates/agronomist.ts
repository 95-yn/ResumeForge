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
    slug: 'agronomist',
    name: '农艺师',
    category: 'profession',
    html: `<div class="resume agronomist">
  <header>
    <div class="header-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary">
    <h2><span class="h2-label">个人简介</span></h2>
    <div class="summary-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="h2-label">工作经历</span></h2>
    <div class="entries">
      {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3>
            <span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span>
          </h3>
          <span class="date">
            <span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>
            <span class="dash">—</span>
            <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>
          </span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="h2-label">项目经历</span></h2>
    <div class="entries">
      {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3>
            <span class="company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </h3>
        </div>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="h2-label">教育背景</span></h2>
    <div class="entries">
      {{#each education}}<div class="entry edu" data-entry="education" data-entry-index="{{@index}}">
        <div class="entry-head">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date">
            <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>
            <span class="dash">—</span>
            <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>
          </span>
        </div>
        <p class="edu-meta">
          <span data-field="education.{{@index}}.area">{{{area}}}</span>
          <span class="sep">·</span>
          <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        </p>
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="block skills-block" data-section="skills">
    <h2><span class="h2-label">专业技能</span></h2>
    <div class="skills">
      {{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}">
        <span class="skill-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="skill-level"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}
      </span>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.agronomist * { margin:0; padding:0; box-sizing:border-box; }
.resume.agronomist * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.agronomist {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#fdfaf2;
  color:#3a2e1f;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --wheat:#d9a441;
  --wheat-soft:#e8c87a;
  --soil:#6b4e2e;
  --soil-deep:#4a3520;
  --ink:#3a2e1f;
  --line:#cdb98a;
  position:relative;
}

/* 田垄纹理：细密的横向条纹背景 */
.resume.agronomist::before {
  content:'';
  position:absolute;
  inset:0;
  background-image:repeating-linear-gradient(
    0deg,
    transparent 0,
    transparent 7px,
    rgba(107,78,46,0.035) 7px,
    rgba(107,78,46,0.035) 8px
  );
  pointer-events:none;
  z-index:0;
}
.resume.agronomist > * { position:relative; z-index:1; }

/* ===== Header ===== */
.resume.agronomist header {
  background:linear-gradient(135deg,var(--soil-deep) 0%,var(--soil) 100%);
  margin:-18mm -18mm 0 -18mm;
  padding:16mm 18mm 13mm 18mm;
  color:#f7efdc;
  position:relative;
  overflow:hidden;
}
/* header 内的田垄纹理（麦黄色细线） */
.resume.agronomist header::after {
  content:'';
  position:absolute;
  inset:0;
  background-image:repeating-linear-gradient(
    0deg,
    transparent 0,
    transparent 9px,
    rgba(217,164,65,0.18) 9px,
    rgba(217,164,65,0.18) 10px
  );
  pointer-events:none;
}
/* 底部麦黄分隔条 */
.resume.agronomist header::before {
  content:'';
  position:absolute;
  left:0; right:0; bottom:0;
  height:6px;
  background:repeating-linear-gradient(
    90deg,
    var(--wheat) 0, var(--wheat) 14px,
    var(--soil-deep) 14px, var(--soil-deep) 18px
  );
}
.resume.agronomist .header-inner { position:relative; z-index:2; }
.resume.agronomist h1 {
  font-size:25pt;
  font-weight:800;
  letter-spacing:2px;
  color:#fbf4e1;
  line-height:1.1;
}
.resume.agronomist .role {
  margin-top:7px;
  font-size:11pt;
  font-weight:500;
  color:var(--wheat-soft);
  letter-spacing:3px;
}
.resume.agronomist .contact {
  margin-top:13px;
  display:flex;
  flex-wrap:wrap;
  gap:8px 0;
  font-size:9pt;
  color:#e6dcc4;
}
.resume.agronomist .contact span {
  position:relative;
  padding:0 14px;
}
.resume.agronomist .contact span:first-child { padding-left:0; }
.resume.agronomist .contact span:not(:last-child)::after {
  content:'';
  position:absolute;
  right:0; top:50%;
  transform:translateY(-50%);
  width:5px; height:5px;
  background:var(--wheat);
  border-radius:50%;
}

/* ===== Sections ===== */
.resume.agronomist section { margin-top:9mm; }
.resume.agronomist h2 {
  font-size:11.5pt;
  font-weight:700;
  color:var(--soil-deep);
  letter-spacing:1px;
  margin-bottom:8px;
  display:flex;
  align-items:center;
  position:relative;
}
.resume.agronomist .h2-label {
  padding-left:16px;
  position:relative;
}
/* 标题前的麦穗叶片符号 */
.resume.agronomist .h2-label::before {
  content:'';
  position:absolute;
  left:0; top:50%;
  transform:translateY(-50%);
  width:7px; height:18px;
  background:var(--wheat);
  border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow:-1px 0 0 0 var(--soil) inset;
}
.resume.agronomist h2::after {
  content:'';
  flex:1;
  height:0;
  margin-left:12px;
  border-top:1.5px dashed var(--line);
}

/* ===== Summary ===== */
.resume.agronomist .summary-body {
  background:#f6edd6;
  border-left:3px solid var(--wheat);
  padding:9px 13px;
  border-radius:0 4px 4px 0;
  color:#4a3c28;
  font-size:9.5pt;
}

/* ===== Entries ===== */
.resume.agronomist .entries { display:flex; flex-direction:column; gap:11px; }
.resume.agronomist .entry {
  padding-left:14px;
  position:relative;
}
.resume.agronomist .entry::before {
  content:'';
  position:absolute;
  left:0; top:5px; bottom:3px;
  width:3px;
  background:linear-gradient(180deg,var(--wheat) 0%,var(--soil) 100%);
  border-radius:2px;
}
.resume.agronomist .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-wrap:wrap;
  gap:2px 10px;
}
.resume.agronomist h3 {
  font-size:10.5pt;
  font-weight:700;
  color:var(--soil-deep);
}
.resume.agronomist .company { margin-right:8px; }
.resume.agronomist .position {
  font-weight:500;
  color:var(--soil);
  font-size:9.5pt;
}
.resume.agronomist .position::before {
  content:'｜';
  color:var(--wheat);
  margin-right:6px;
  font-weight:400;
}
.resume.agronomist .date {
  font-size:8.5pt;
  color:#8a7350;
  font-weight:500;
  white-space:nowrap;
  letter-spacing:0.5px;
}
.resume.agronomist .dash { margin:0 2px; }

.resume.agronomist ul {
  list-style:none;
  margin-top:5px;
}
.resume.agronomist li {
  position:relative;
  padding-left:15px;
  margin-bottom:3px;
  font-size:9.5pt;
  color:#473a27;
  line-height:1.5;
}
/* 列表标记：麦粒形 */
.resume.agronomist li::before {
  content:'';
  position:absolute;
  left:1px; top:6px;
  width:6px; height:8px;
  background:var(--wheat);
  border-radius:50% 50% 50% 50% / 65% 65% 35% 35%;
  transform:rotate(-12deg);
}

.resume.agronomist .proj-desc {
  margin-top:4px;
  font-size:9.5pt;
  color:#4a3c28;
}

/* ===== Education ===== */
.resume.agronomist .edu-meta {
  margin-top:3px;
  font-size:9.5pt;
  color:var(--soil);
}
.resume.agronomist .edu-meta .sep {
  color:var(--wheat);
  margin:0 4px;
  font-weight:700;
}

/* ===== Skills ===== */
.resume.agronomist .skills {
  display:flex;
  flex-wrap:wrap;
  gap:7px 8px;
}
.resume.agronomist .skill-chip {
  display:inline-flex;
  align-items:center;
  background:#f1e3c2;
  border:1px solid var(--wheat-soft);
  border-radius:3px;
  padding:4px 11px;
  font-size:9pt;
  color:var(--soil-deep);
  position:relative;
}
.resume.agronomist .skill-chip::before {
  content:'';
  display:inline-block;
  width:5px; height:7px;
  margin-right:6px;
  background:var(--wheat);
  border-radius:50% 50% 50% 50% / 65% 65% 35% 35%;
  transform:rotate(-12deg);
  flex:none;
}
.resume.agronomist .skill-name { font-weight:600; }
.resume.agronomist .skill-level { color:var(--soil); font-weight:400; }

/* ===== 必含收尾 ===== */
.resume.agronomist li p, .resume.agronomist li div { margin:0; padding:0; display:inline; }
.resume.agronomist .skills span, .resume.agronomist [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.agronomist { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "agronomist",
      "version": "1.0.0",
      "name": "农艺师",
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
