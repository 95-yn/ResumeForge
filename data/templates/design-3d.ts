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
    slug: 'design-3d',
    name: '三维设计',
    category: 'creative',
    html: `<div class="resume design-3d">
  <header>
    <div class="hero-grid"></div>
    <div class="hero-inner">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>

  {{#if basics.summary}}<section class="summary"><h2><span class="hx">个人简介</span></h2><div class="card" data-field="basics.summary">{{{basics.summary}}}</div></section>{{/if}}

  {{#if experience.length}}<section data-section="experience"><h2><span class="hx">工作经历</span></h2>
    {{#each experience}}<div class="card entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3><span class="co" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="pos" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects"><h2><span class="hx">项目经历</span></h2>
    {{#each projects}}<div class="card entry" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="co" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills"><h2><span class="hx">专业技能</span></h2><div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div></section>{{/if}}

  {{#if education.length}}<section data-section="education"><h2><span class="hx">教育背景</span></h2>
    {{#each education}}<div class="card entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="entry-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.design-3d * { margin:0; padding:0; box-sizing:border-box; }
.resume.design-3d * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.design-3d {
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm;
  background:#0d1018;
  color:#c9d2e3;
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  background-image:
    linear-gradient(rgba(99,180,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,180,255,0.05) 1px, transparent 1px);
  background-size:26px 26px;
}

/* ===== HERO (isometric grid + render highlight) ===== */
.resume.design-3d header {
  position:relative;
  border-radius:14px;
  padding:30px 28px;
  margin-bottom:24px;
  overflow:hidden;
  background:
    radial-gradient(120% 160% at 12% -10%, rgba(110,231,255,0.30), transparent 55%),
    radial-gradient(140% 180% at 95% 120%, rgba(168,85,247,0.34), transparent 50%),
    linear-gradient(135deg, #1b2235 0%, #111626 60%, #0c1020 100%);
  box-shadow:
    0 24px 50px -22px rgba(0,0,0,0.9),
    inset 0 1px 0 rgba(255,255,255,0.10),
    inset 0 0 0 1px rgba(110,231,255,0.18);
}
.resume.design-3d .hero-grid {
  position:absolute;
  inset:-40% -10% auto -10%;
  height:200%;
  background-image:
    linear-gradient(rgba(110,231,255,0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(110,231,255,0.16) 1px, transparent 1px);
  background-size:30px 30px;
  transform:perspective(420px) rotateX(58deg) translateY(-6%);
  transform-origin:center top;
  -webkit-mask-image:linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.25) 55%, transparent 80%);
  mask-image:linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.25) 55%, transparent 80%);
  pointer-events:none;
}
.resume.design-3d .hero-inner { position:relative; z-index:1; }
.resume.design-3d header h1 {
  font-size:30pt;
  font-weight:800;
  letter-spacing:1px;
  line-height:1.1;
  color:#fff;
  text-shadow:0 2px 0 rgba(0,0,0,0.35), 0 0 22px rgba(110,231,255,0.45);
}
.resume.design-3d header .role {
  margin-top:8px;
  display:inline-block;
  font-size:11pt;
  font-weight:600;
  letter-spacing:2px;
  color:#0c1020;
  padding:4px 12px;
  border-radius:6px;
  background:linear-gradient(180deg,#9ff5ff,#5ad1ff);
  box-shadow:0 6px 14px -6px rgba(90,209,255,0.8), inset 0 1px 0 rgba(255,255,255,0.7);
}
.resume.design-3d header .contact {
  margin-top:16px;
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.resume.design-3d header .contact span {
  font-size:9pt;
  color:#bfe9ff;
  padding:4px 11px;
  border-radius:20px;
  background:rgba(255,255,255,0.06);
  border:1px solid rgba(110,231,255,0.28);
  box-shadow:inset 0 1px 0 rgba(255,255,255,0.10);
}

/* ===== SECTIONS ===== */
.resume.design-3d section { margin-bottom:22px; }
.resume.design-3d h2 {
  font-size:9pt;
  font-weight:700;
  letter-spacing:3px;
  text-transform:uppercase;
  margin-bottom:13px;
  display:flex;
  align-items:center;
  gap:10px;
}
.resume.design-3d h2 .hx {
  position:relative;
  padding-left:18px;
  color:#eaf2ff;
}
.resume.design-3d h2 .hx::before {
  content:'';
  position:absolute;
  left:0;
  top:50%;
  width:9px;
  height:9px;
  transform:translateY(-50%) rotate(45deg);
  background:linear-gradient(135deg,#6ee7ff,#a855f7);
  box-shadow:0 0 12px rgba(110,231,255,0.7);
  border-radius:2px;
}
.resume.design-3d h2::after {
  content:'';
  flex:1;
  height:1px;
  background:linear-gradient(90deg, rgba(110,231,255,0.35), transparent);
}

/* ===== CARDS (3D extruded panels) ===== */
.resume.design-3d .card {
  position:relative;
  background:linear-gradient(160deg, rgba(30,38,58,0.92), rgba(18,23,38,0.92));
  border:1px solid rgba(120,150,200,0.16);
  border-top-color:rgba(180,210,255,0.28);
  border-radius:11px;
  padding:15px 17px;
  box-shadow:
    0 14px 26px -16px rgba(0,0,0,0.85),
    inset 0 1px 0 rgba(255,255,255,0.07);
}
.resume.design-3d .card::before {
  content:'';
  position:absolute;
  left:0; top:12px; bottom:12px;
  width:3px;
  border-radius:3px;
  background:linear-gradient(180deg,#6ee7ff,#a855f7);
  box-shadow:0 0 10px rgba(110,231,255,0.6);
}
.resume.design-3d .summary .card { line-height:1.65; color:#cdd7ea; }
.resume.design-3d .entry + .entry { margin-top:12px; }

.resume.design-3d .entry-head {
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  gap:12px;
  flex-wrap:wrap;
}
.resume.design-3d h3 {
  font-size:11.5pt;
  font-weight:700;
  color:#f4f8ff;
  line-height:1.3;
}
.resume.design-3d h3 .co { color:#fff; }
.resume.design-3d h3 .pos {
  font-weight:500;
  font-size:10pt;
  color:#7fe3ff;
  margin-left:8px;
}
.resume.design-3d .date {
  font-size:8.5pt;
  font-weight:600;
  letter-spacing:0.5px;
  color:#8aa0c4;
  white-space:nowrap;
  padding:2px 9px;
  border-radius:5px;
  background:rgba(110,231,255,0.08);
  border:1px solid rgba(110,231,255,0.18);
}
.resume.design-3d .desc {
  margin-top:7px;
  color:#bcc7dc;
  line-height:1.6;
}
.resume.design-3d .edu-meta {
  margin-top:6px;
  color:#9fb0cd;
  font-size:9.5pt;
}

.resume.design-3d ul {
  margin-top:9px;
  list-style:none;
  display:flex;
  flex-direction:column;
  gap:5px;
}
.resume.design-3d li {
  position:relative;
  padding-left:17px;
  color:#c4cfe2;
  line-height:1.55;
}
.resume.design-3d li::before {
  content:'';
  position:absolute;
  left:2px;
  top:0.55em;
  width:6px;
  height:6px;
  transform:rotate(45deg);
  background:linear-gradient(135deg,#6ee7ff,#5ad1ff);
  box-shadow:0 0 8px rgba(110,231,255,0.7);
  border-radius:1px;
}

/* ===== SKILLS (glossy chips) ===== */
.resume.design-3d .skills {
  display:flex;
  flex-wrap:wrap;
  gap:9px;
}
.resume.design-3d .chip {
  display:inline-flex;
  align-items:center;
  font-size:9pt;
  font-weight:600;
  color:#dff4ff;
  padding:6px 13px;
  border-radius:8px;
  background:linear-gradient(180deg, rgba(60,80,120,0.55), rgba(28,36,56,0.7));
  border:1px solid rgba(130,160,210,0.22);
  border-top-color:rgba(190,220,255,0.35);
  box-shadow:
    0 8px 16px -10px rgba(0,0,0,0.8),
    inset 0 1px 0 rgba(255,255,255,0.14);
}
.resume.design-3d .chip .lvl { color:#8ce0ff; font-weight:500; }

/* contract-required tails */
.resume.design-3d li p, .resume.design-3d li div { margin:0; padding:0; display:inline; }
.resume.design-3d .skills span, .resume.design-3d [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.design-3d { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "design-3d",
      "version": "1.0.0",
      "name": "三维设计",
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
