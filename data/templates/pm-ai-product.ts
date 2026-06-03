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
    slug: 'pm-ai-product',
    name: 'AI产品',
    category: 'profession',
    html: `<div class="resume pm-ai-product">
  <header>
    <div class="hdr-grid"></div>
    <div class="hdr-core">
      <div class="node-badge"><span class="node-dot"></span>MODEL</div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="role" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    <div class="loop-track" aria-hidden="true">
      <span class="loop-step">数据</span><span class="loop-arrow">→</span><span class="loop-step">训练</span><span class="loop-arrow">→</span><span class="loop-step">推理</span><span class="loop-arrow">→</span><span class="loop-step">反馈</span><span class="loop-arrow loop-back">↺</span>
    </div>
  </header>

  {{#if basics.summary}}<section class="block summary">
    <h2><span class="h-idx">∑</span>个人简介</h2>
    <div class="card-glow"><div data-field="basics.summary">{{{basics.summary}}}</div></div>
  </section>{{/if}}

  {{#if experience.length}}<section class="block" data-section="experience">
    <h2><span class="h-idx">01</span>工作经历</h2>
    <div class="timeline">
    {{#each experience}}<div class="exp-item" data-entry="experience" data-entry-index="{{@index}}">
      <span class="tl-node"></span>
      <div class="exp-head">
        <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
        <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section class="block" data-section="projects">
    <h2><span class="h-idx">02</span>项目经历</h2>
    {{#each projects}}<div class="proj-item" data-entry="projects" data-entry-index="{{@index}}">
      <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="proj-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
      {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>{{/each}}
  </section>{{/if}}

  {{#if skills.length}}<section class="block" data-section="skills">
    <h2><span class="h-idx">03</span>专业技能</h2>
    <div class="skills">{{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
  </section>{{/if}}

  {{#if education.length}}<section class="block" data-section="education">
    <h2><span class="h-idx">04</span>教育背景</h2>
    {{#each education}}<div class="edu-item" data-entry="education" data-entry-index="{{@index}}">
      <div class="edu-head">
        <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
        <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      <p><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
    </div>{{/each}}
  </section>{{/if}}
</div>`,
    css: `.resume.pm-ai-product * { margin:0; padding:0; box-sizing:border-box; }
.resume.pm-ai-product * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.pm-ai-product {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:0 0 18mm;
  background:#fff; font-size:10pt; line-height:1.5; color:#1a1730;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
  --ink:#1a1730; --blue:#4338ca; --purple:#6d28d9; --violet:#5b21b6;
  --soft:#6b6892; --line:#e7e4f5; --bg:#f7f6ff;
}

/* ===== header ===== */
.resume.pm-ai-product header {
  position:relative; overflow:hidden;
  padding:16mm 18mm 0;
  background:linear-gradient(135deg,#312e81 0%,#4c3ba6 48%,#6d28d9 100%);
  color:#fff;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.resume.pm-ai-product .hdr-grid {
  position:absolute; inset:0;
  background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);
  background-size:18px 18px;
  mask-image:radial-gradient(circle at 78% 30%,#000 0%,transparent 70%);
  -webkit-mask-image:radial-gradient(circle at 78% 30%,#000 0%,transparent 70%);
  pointer-events:none;
}
.resume.pm-ai-product .hdr-core { position:relative; z-index:1; }
.resume.pm-ai-product .node-badge {
  display:inline-flex; align-items:center; gap:6px;
  font-size:7.5pt; letter-spacing:.22em; font-weight:600;
  padding:3px 10px; border-radius:20px;
  background:rgba(255,255,255,.13); border:1px solid rgba(255,255,255,.28);
  color:#e9e6ff; margin-bottom:11px;
}
.resume.pm-ai-product .node-dot {
  width:6px; height:6px; border-radius:50%;
  background:#c4b5fd; box-shadow:0 0 0 3px rgba(196,181,253,.35);
}
.resume.pm-ai-product header h1 {
  font-size:27pt; font-weight:800; letter-spacing:.01em; line-height:1.05;
}
.resume.pm-ai-product .role {
  margin-top:6px; font-size:11pt; font-weight:500; color:#ddd8ff;
}
.resume.pm-ai-product .contact {
  margin-top:12px; display:flex; flex-wrap:wrap; gap:8px 0;
  font-size:8.7pt; color:#eae6ff;
}
.resume.pm-ai-product .contact span { position:relative; padding:0 13px; }
.resume.pm-ai-product .contact span:first-child { padding-left:0; }
.resume.pm-ai-product .contact span + span::before {
  content:''; position:absolute; left:0; top:50%; transform:translateY(-50%);
  width:3px; height:3px; border-radius:50%; background:rgba(255,255,255,.5);
}

.resume.pm-ai-product .loop-track {
  position:relative; z-index:1;
  margin:15px -18mm 0; padding:7px 18mm;
  display:flex; align-items:center; gap:9px; flex-wrap:wrap;
  background:rgba(10,8,30,.28);
  border-top:1px solid rgba(255,255,255,.14);
  font-size:7.6pt; letter-spacing:.04em;
}
.resume.pm-ai-product .loop-step {
  padding:2px 9px; border-radius:14px; font-weight:600;
  background:rgba(255,255,255,.12); color:#f0edff;
  border:1px solid rgba(255,255,255,.2);
}
.resume.pm-ai-product .loop-arrow { color:#c4b5fd; font-weight:700; }
.resume.pm-ai-product .loop-back { color:#c4b5fd; }

/* ===== body ===== */
.resume.pm-ai-product .block { padding:0 18mm; margin-top:15px; }
.resume.pm-ai-product .summary { margin-top:16px; }

.resume.pm-ai-product h2 {
  display:flex; align-items:center; gap:9px;
  font-size:11.5pt; font-weight:700; color:var(--ink);
  padding-bottom:7px; margin-bottom:11px;
  border-bottom:1px solid var(--line);
}
.resume.pm-ai-product .h-idx {
  display:inline-flex; align-items:center; justify-content:center;
  min-width:24px; height:20px; padding:0 5px;
  font-size:8pt; font-weight:700; letter-spacing:.04em;
  color:#fff; border-radius:6px;
  background:linear-gradient(135deg,var(--blue),var(--purple));
}

/* summary card — full frame, top accent rule (no side stripe) */
.resume.pm-ai-product .card-glow {
  position:relative; padding:12px 14px;
  background:var(--bg);
  border:1px solid var(--line);
  border-radius:9px; color:#403c63;
  overflow:hidden;
}
.resume.pm-ai-product .card-glow::before {
  content:''; position:absolute; left:0; right:0; top:0; height:3px;
  background:linear-gradient(90deg,var(--blue),var(--purple));
}

/* experience timeline */
.resume.pm-ai-product .timeline { position:relative; padding-left:17px; }
.resume.pm-ai-product .timeline::before {
  content:''; position:absolute; left:4px; top:5px; bottom:4px; width:1.5px;
  background:linear-gradient(180deg,var(--blue),var(--purple),transparent);
}
.resume.pm-ai-product .exp-item { position:relative; margin-bottom:13px; }
.resume.pm-ai-product .exp-item:last-child { margin-bottom:0; }
.resume.pm-ai-product .tl-node {
  position:absolute; left:-17px; top:4px;
  width:9px; height:9px; border-radius:50%;
  background:#fff; border:2.5px solid var(--purple);
  box-shadow:0 0 0 3px rgba(109,40,217,.12);
}
.resume.pm-ai-product .exp-head {
  display:flex; justify-content:space-between; align-items:baseline; gap:12px;
  flex-wrap:wrap;
}
.resume.pm-ai-product .exp-item h3 { font-size:10.5pt; font-weight:700; }
.resume.pm-ai-product .company { color:var(--ink); }
.resume.pm-ai-product .position {
  color:var(--violet); font-weight:600; margin-left:9px; font-size:9.8pt;
}
.resume.pm-ai-product .position::before { content:'·'; margin-right:9px; color:var(--soft); font-weight:400; }
.resume.pm-ai-product .date {
  font-size:8pt; font-weight:600; color:var(--soft); white-space:nowrap;
  font-variant-numeric:tabular-nums;
}

.resume.pm-ai-product ul { list-style:none; margin-top:6px; }
.resume.pm-ai-product li {
  position:relative; padding-left:15px; margin-bottom:3.5px;
  color:#403c63; font-size:9.6pt;
}
.resume.pm-ai-product li::before {
  content:''; position:absolute; left:2px; top:7px;
  width:4px; height:4px; border-radius:1px; transform:rotate(45deg);
  background:linear-gradient(135deg,var(--blue),var(--purple));
}

/* projects — full-bordered card, leading index dot, no side stripe */
.resume.pm-ai-product .proj-item {
  margin-bottom:11px; padding:10px 13px;
  background:var(--bg); border:1px solid var(--line);
  border-radius:9px;
}
.resume.pm-ai-product .proj-item:last-child { margin-bottom:0; }
.resume.pm-ai-product .proj-item h3 { font-size:10.3pt; font-weight:700; color:var(--ink); }
.resume.pm-ai-product .proj-role {
  margin-left:8px; font-size:8pt; font-weight:600; color:var(--purple);
  padding:1px 8px; border-radius:12px; background:rgba(109,40,217,.1);
}
.resume.pm-ai-product .proj-desc { margin-top:4px; color:#4e4a70; font-size:9.5pt; }
.resume.pm-ai-product .proj-item ul { margin-top:5px; }

/* skills — reduced badge emphasis: outline chips, plain level text */
.resume.pm-ai-product .skills { display:flex; flex-wrap:wrap; gap:7px; }
.resume.pm-ai-product .skill-chip {
  display:inline-flex; align-items:center; gap:6px;
  padding:4px 11px; font-size:9pt; font-weight:500;
  border-radius:7px; color:#312a5e;
  background:#faf9ff;
  border:1px solid var(--line);
}
.resume.pm-ai-product .skill-chip .lvl {
  font-size:7.8pt; font-weight:700; color:var(--purple);
  padding-left:6px; border-left:1px solid var(--line);
}

/* education */
.resume.pm-ai-product .edu-item { margin-bottom:8px; }
.resume.pm-ai-product .edu-item:last-child { margin-bottom:0; }
.resume.pm-ai-product .edu-head {
  display:flex; justify-content:space-between; align-items:baseline; gap:12px;
  flex-wrap:wrap;
}
.resume.pm-ai-product .edu-item h3 { font-size:10.3pt; font-weight:700; color:var(--ink); }
.resume.pm-ai-product .edu-item p { margin-top:2px; color:#54506f; font-size:9.4pt; }

/* contract tail */
.resume.pm-ai-product li p, .resume.pm-ai-product li div { margin:0; padding:0; display:inline; }
.resume.pm-ai-product .skills span, .resume.pm-ai-product [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.pm-ai-product { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "pm-ai-product",
      "version": "1.0.0",
      "name": "AI产品",
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
