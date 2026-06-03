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
    slug: 'it-java',
    name: '后端Java',
    category: 'tech',
    html: `<div class="resume it-java">
  <header>
    <div class="hd-bar"><span class="hd-tag">@Controller</span></div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="hd-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="layer layer-summary">
    <h2><span class="layer-pin">@Service</span>个人简介</h2>
    <div class="layer-body"><div data-field="basics.summary">{{{basics.summary}}}</div></div>
  </section>{{/if}}

  {{#if experience.length}}<section class="layer" data-section="experience">
    <h2><span class="layer-pin">@Component</span>工作经历</h2>
    <div class="layer-body">
    {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <h3><span class="ent-company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="ent-position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
      <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="layer" data-section="projects">
    <h2><span class="layer-pin">@Repository</span>项目经历</h2>
    <div class="layer-body">
    {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="ent-company" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="ent-position" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section class="layer" data-section="skills">
    <h2><span class="layer-pin">@Bean</span>专业技能</h2>
    <div class="layer-body"><div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="skill-lv" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></div>
  </section>{{/if}}

  {{#if education.length}}<section class="layer" data-section="education">
    <h2><span class="layer-pin">@Entity</span>教育背景</h2>
    <div class="layer-body">
    {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
      <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> - <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.it-java * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-java * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-java {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm 16mm;
  background:#fbf6f0;
  font-size:10pt; line-height:1.55;
  color:#3a302c;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --brick:#a8341f; --brick-d:#7c2516; --brick-l:#c75a40;
  --cream:#fbf6f0; --card:#ffffff; --ink:#3a302c; --mute:#8a7d76;
  --line:#ead9cd;
}

/* ============ Header ============ */
.resume.it-java header {
  background:linear-gradient(135deg,#7c2516 0%,#a8341f 55%,#c75a40 100%);
  color:#fdeee8;
  padding:14mm 12mm 11mm;
  margin:-18mm -16mm 8mm;
  position:relative;
  overflow:hidden;
}
.resume.it-java header::after {
  content:""; position:absolute; right:-30mm; top:-30mm;
  width:70mm; height:70mm; border-radius:50%;
  background:rgba(255,255,255,0.06);
}
.resume.it-java .hd-bar { margin-bottom:6px; position:relative; z-index:1; }
.resume.it-java .hd-tag {
  display:inline-block; font-family:'SF Mono','Consolas',monospace;
  font-size:8pt; letter-spacing:0.5px;
  color:#fdeee8; background:rgba(0,0,0,0.22);
  padding:2px 9px; border-radius:3px;
  border-left:2px solid #f3b8a4;
}
.resume.it-java header h1 {
  font-size:25pt; font-weight:800; letter-spacing:2px;
  line-height:1.1; position:relative; z-index:1;
}
.resume.it-java .hd-title {
  font-size:11pt; font-weight:500; margin-top:5px;
  color:#f6cdbe; letter-spacing:0.5px; position:relative; z-index:1;
}
.resume.it-java .contact {
  margin-top:11px; display:flex; flex-wrap:wrap; gap:7px 16px;
  font-size:9pt; position:relative; z-index:1;
}
.resume.it-java .contact span {
  position:relative; padding-left:13px; color:#fbe4da;
}
.resume.it-java .contact span::before {
  content:""; position:absolute; left:0; top:50%;
  width:5px; height:5px; border-radius:1px; transform:translateY(-50%) rotate(45deg);
  background:#f3b8a4;
}

/* ============ Layers (Spring 分层) ============ */
.resume.it-java .layer { margin-bottom:6mm; }
.resume.it-java .layer h2 {
  font-size:11.5pt; font-weight:700; color:var(--brick-d);
  display:flex; align-items:center; gap:9px;
  padding-bottom:6px; margin-bottom:9px;
  border-bottom:2px solid var(--brick);
  letter-spacing:1px;
}
.resume.it-java .layer-pin {
  display:inline-block;
  font-family:'SF Mono','Consolas',monospace;
  font-size:7.5pt; font-weight:600; letter-spacing:0;
  color:#fff; background:var(--brick);
  padding:2px 7px; border-radius:3px;
  flex:none; white-space:nowrap;
}
.resume.it-java .layer-body {
  background:var(--card);
  border:1px solid var(--line);
  border-left:3px solid var(--brick-l);
  border-radius:5px;
  padding:9px 13px;
}

/* ============ Entry ============ */
.resume.it-java .entry { padding:8px 0; }
.resume.it-java .entry + .entry { border-top:1px dashed var(--line); }
.resume.it-java .entry:first-child { padding-top:2px; }
.resume.it-java .entry:last-child { padding-bottom:2px; }
.resume.it-java .entry h3 {
  font-size:11pt; font-weight:700; color:var(--ink);
  display:flex; align-items:baseline; gap:8px; flex-wrap:wrap;
}
.resume.it-java .ent-company { color:var(--brick-d); font-weight:700; }
.resume.it-java .ent-position {
  font-size:9.5pt; font-weight:500; color:var(--mute);
  position:relative; padding-left:9px;
}
.resume.it-java .ent-position::before {
  content:"/"; position:absolute; left:1px; color:var(--brick-l); font-weight:600;
}
.resume.it-java .date {
  display:inline-block; font-family:'SF Mono','Consolas',monospace;
  font-size:8.5pt; color:var(--mute); margin-top:3px; letter-spacing:0.3px;
}
.resume.it-java .edu-meta { font-size:9.5pt; color:var(--mute); margin-top:3px; }
.resume.it-java .proj-desc { font-size:9.5pt; color:#54483f; margin-top:4px; }

/* ============ Lists ============ */
.resume.it-java ul { list-style:none; margin-top:6px; }
.resume.it-java li {
  font-size:9.7pt; color:#473c35; line-height:1.6;
  padding-left:15px; position:relative; margin-bottom:3px;
}
.resume.it-java li::before {
  content:""; position:absolute; left:2px; top:0.62em;
  width:5px; height:5px; transform:rotate(45deg);
  background:var(--brick); border-radius:1px;
}

/* ============ Skills ============ */
.resume.it-java .skills { display:flex; flex-wrap:wrap; gap:7px; padding:2px 0; }
.resume.it-java .skill-chip {
  display:inline-block;
  background:#fbeee7; color:var(--brick-d);
  border:1px solid #eccab9;
  padding:3px 11px; border-radius:4px;
  font-size:9pt; font-weight:600;
}
.resume.it-java .skill-lv { color:var(--brick-l); font-weight:500; }

/* ============ Summary ============ */
.resume.it-java .layer-summary .layer-body { font-size:9.8pt; color:#473c35; line-height:1.65; }

/* ============ Contract required ============ */
.resume.it-java li p, .resume.it-java li div { margin:0; padding:0; display:inline; }
.resume.it-java .skills span, .resume.it-java [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.it-java { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "it-java",
      "version": "1.0.0",
      "name": "后端Java",
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
