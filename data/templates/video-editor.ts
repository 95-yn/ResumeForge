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
    slug: 'video-editor',
    name: '剪辑师',
    category: 'tech',
    html: `<div class="resume video-editor">
  <header>
    <div class="ve-head-inner">
      <div class="ve-rec"><span class="ve-rec-dot"></span>REC</div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="ve-ruler"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  </header>

  {{#if basics.summary}}<section class="ve-summary"><h2><span class="ve-track-label">V0</span>个人简介</h2><div class="ve-clip" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section class="ve-track" data-section="experience"><h2><span class="ve-track-label">V1</span>工作经历</h2>
    <div class="ve-timeline">
    {{#each experience}}<div class="ve-entry" data-entry="experience" data-entry-index="{{@index}}">
      <span class="ve-key"></span>
      <div class="ve-entry-body">
        <h3><span class="ve-comp" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="ve-pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="ve-track" data-section="projects"><h2><span class="ve-track-label">V2</span>项目经历</h2>
    <div class="ve-timeline">
    {{#each projects}}<div class="ve-entry" data-entry="projects" data-entry-index="{{@index}}">
      <span class="ve-key"></span>
      <div class="ve-entry-body">
        <h3><span class="ve-comp" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="ve-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="ve-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section class="ve-track" data-section="education"><h2><span class="ve-track-label">A1</span>教育背景</h2>
    <div class="ve-timeline">
    {{#each education}}<div class="ve-entry" data-entry="education" data-entry-index="{{@index}}">
      <span class="ve-key"></span>
      <div class="ve-entry-body">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="ve-skills" data-section="skills"><h2><span class="ve-track-label">A2</span>专业技能</h2><div class="skills">{{#each skills}}<span class="ve-skill" data-entry="skills" data-entry-index="{{@index}}"><span class="ve-skill-key"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="ve-lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}
</div>`,
    css: `.resume.video-editor * { margin:0; padding:0; box-sizing:border-box; }
.resume.video-editor * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.video-editor {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:0 0 18mm 0;
  background:#14161b;
  color:#d7dbe2;
  font-size:10pt;
  line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --ve-accent:#ff5a3c;
  --ve-cyan:#3ad6c4;
  --ve-line:#2a2e38;
  --ve-track:#1c2027;
  --ve-muted:#8b93a3;
}

/* ===== Header ===== */
.resume.video-editor header {
  background:#0e1015;
  background-image:linear-gradient(180deg,#10131a 0%,#0c0e13 100%);
  border-bottom:2px solid var(--ve-accent);
  padding:16mm 18mm 0 18mm;
}
.resume.video-editor .ve-head-inner { position:relative; padding-bottom:8mm; }
.resume.video-editor .ve-rec {
  display:inline-flex;
  align-items:center;
  gap:6px;
  font-size:7.5pt;
  letter-spacing:2px;
  font-weight:700;
  color:var(--ve-accent);
  font-family:'SF Mono',Menlo,Consolas,monospace;
  margin-bottom:6px;
}
.resume.video-editor .ve-rec-dot {
  width:7px; height:7px; border-radius:50%;
  background:var(--ve-accent);
  box-shadow:0 0 6px var(--ve-accent);
}
.resume.video-editor header h1 {
  font-size:27pt;
  font-weight:800;
  letter-spacing:1px;
  color:#fff;
  line-height:1.1;
}
.resume.video-editor header > .ve-head-inner > p {
  margin-top:5px;
  font-size:11pt;
  color:var(--ve-cyan);
  letter-spacing:1px;
  font-weight:500;
}
.resume.video-editor .contact {
  margin-top:11px;
  display:flex;
  flex-wrap:wrap;
  gap:9px 16px;
  font-size:8.6pt;
  color:var(--ve-muted);
  font-family:'SF Mono',Menlo,Consolas,monospace;
}
.resume.video-editor .contact span { position:relative; padding-left:13px; }
.resume.video-editor .contact span::before {
  content:''; position:absolute; left:0; top:50%;
  width:6px; height:6px; margin-top:-3px;
  background:var(--ve-cyan);
  transform:rotate(45deg);
}

/* ===== Time ruler ===== */
.resume.video-editor .ve-ruler {
  display:flex;
  height:14px;
  border-top:1px solid var(--ve-line);
  background:#0a0c10;
}
.resume.video-editor .ve-ruler span {
  flex:1;
  border-right:1px solid var(--ve-line);
  position:relative;
}
.resume.video-editor .ve-ruler span::after {
  content:''; position:absolute; right:-1px; top:0;
  width:1px; height:7px; background:var(--ve-muted); opacity:.5;
}

/* ===== Section headings ===== */
.resume.video-editor section { padding:0 18mm; margin-top:9mm; }
.resume.video-editor h2 {
  display:flex;
  align-items:center;
  gap:10px;
  font-size:12pt;
  font-weight:700;
  color:#fff;
  letter-spacing:.5px;
  margin-bottom:5mm;
  padding-bottom:7px;
  border-bottom:1px solid var(--ve-line);
}
.resume.video-editor .ve-track-label {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:26px;
  height:18px;
  padding:0 5px;
  background:var(--ve-accent);
  color:#0e1015;
  font-size:7.5pt;
  font-weight:800;
  letter-spacing:.5px;
  border-radius:3px;
  font-family:'SF Mono',Menlo,Consolas,monospace;
}

/* ===== Summary clip ===== */
.resume.video-editor .ve-clip {
  background:var(--ve-track);
  border-left:3px solid var(--ve-cyan);
  padding:11px 14px;
  border-radius:0 5px 5px 0;
  color:#c4cad6;
  font-size:9.4pt;
}

/* ===== Timeline tracks ===== */
.resume.video-editor .ve-timeline {
  position:relative;
  padding-left:20px;
}
.resume.video-editor .ve-timeline::before {
  content:''; position:absolute;
  left:5px; top:6px; bottom:6px;
  width:2px;
  background:linear-gradient(180deg,var(--ve-accent),var(--ve-cyan));
  opacity:.5;
}
.resume.video-editor .ve-entry {
  position:relative;
  margin-bottom:6mm;
  background:var(--ve-track);
  border:1px solid var(--ve-line);
  border-radius:6px;
  padding:11px 14px;
}
.resume.video-editor .ve-entry:last-child { margin-bottom:0; }
.resume.video-editor .ve-key {
  position:absolute;
  left:-19px; top:15px;
  width:11px; height:11px;
  background:var(--ve-accent);
  border:2px solid #14161b;
  transform:rotate(45deg);
  box-shadow:0 0 0 2px var(--ve-accent);
}
.resume.video-editor .ve-entry-body h3 {
  font-size:10.5pt;
  font-weight:700;
  color:#fff;
  display:flex;
  flex-wrap:wrap;
  align-items:baseline;
  gap:8px;
  line-height:1.35;
}
.resume.video-editor .ve-comp { color:#fff; }
.resume.video-editor .ve-pos {
  color:var(--ve-cyan);
  font-size:9pt;
  font-weight:500;
}
.resume.video-editor .date {
  display:inline-block;
  margin-top:3px;
  font-size:8pt;
  color:var(--ve-muted);
  font-family:'SF Mono',Menlo,Consolas,monospace;
  letter-spacing:.5px;
}
.resume.video-editor .ve-desc {
  margin-top:5px;
  font-size:9.2pt;
  color:#c4cad6;
}
.resume.video-editor .ve-entry-body p {
  margin-top:3px;
  font-size:9.2pt;
  color:#c4cad6;
}
.resume.video-editor .ve-entry-body ul {
  list-style:none;
  margin-top:7px;
}
.resume.video-editor .ve-entry-body li {
  position:relative;
  padding-left:15px;
  margin-bottom:4px;
  font-size:9.2pt;
  color:#c4cad6;
  line-height:1.5;
}
.resume.video-editor .ve-entry-body li::before {
  content:''; position:absolute;
  left:0; top:7px;
  width:6px; height:6px;
  background:var(--ve-cyan);
  transform:rotate(45deg);
}

/* ===== Skills ===== */
.resume.video-editor .skills {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.video-editor .ve-skill {
  display:inline-flex;
  align-items:center;
  gap:7px;
  background:var(--ve-track);
  border:1px solid var(--ve-line);
  border-radius:4px;
  padding:6px 12px;
  font-size:9pt;
  color:#dde2ea;
}
.resume.video-editor .ve-skill-key {
  width:7px; height:7px;
  background:var(--ve-accent);
  transform:rotate(45deg);
  flex-shrink:0;
}
.resume.video-editor .ve-lvl {
  color:var(--ve-muted);
  font-size:8.2pt;
  font-family:'SF Mono',Menlo,Consolas,monospace;
}

/* ===== contract-required tail ===== */
.resume.video-editor li p, .resume.video-editor li div { margin:0; padding:0; display:inline; }
.resume.video-editor .skills span, .resume.video-editor [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.video-editor { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "video-editor",
      "version": "1.0.0",
      "name": "剪辑师",
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
