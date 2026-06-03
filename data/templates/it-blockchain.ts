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
    slug: 'it-blockchain',
    name: '区块链开发',
    category: 'tech',
    html: `<div class="resume it-blockchain">
  <header>
    <div class="hdr-node">
      <div class="hdr-main">
        <h1 data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      </div>
      <div class="hdr-hash">0x</div>
    </div>
    <div class="contact">
      {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}<section class="summary">
    <h2><span class="blk">#</span>个人简介</h2>
    <div class="sum-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  {{#if experience.length}}<section data-section="experience">
    <h2><span class="blk">#</span>工作经历</h2>
    <div class="chain">
      {{#each experience}}<div class="block" data-entry="experience" data-entry-index="{{@index}}">
        <span class="node-dot"></span>
        <div class="block-head">
          <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
          <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if projects.length}}<section data-section="projects">
    <h2><span class="blk">#</span>项目经历</h2>
    <div class="chain">
      {{#each projects}}<div class="block" data-entry="projects" data-entry-index="{{@index}}">
        <span class="node-dot"></span>
        <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>{{/each}}
    </div>
  </section>{{/if}}

  {{#if skills.length}}<section data-section="skills">
    <h2><span class="blk">#</span>专业技能</h2>
    <div class="skills">
      {{#each skills}}<span class="skill-chip" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-tick"></span><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="lvl" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>{{/if}}

  {{#if education.length}}<section data-section="education">
    <h2><span class="blk">#</span>教育背景</h2>
    <div class="chain">
      {{#each education}}<div class="block edu" data-entry="education" data-entry-index="{{@index}}">
        <span class="node-dot"></span>
        <div class="block-head">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
      </div>{{/each}}
    </div>
  </section>{{/if}}
</div>`,
    css: `.resume.it-blockchain * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-blockchain * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.it-blockchain {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:18mm;
  background:#0d0d0f;
  background-image:
    radial-gradient(circle at 88% 6%, rgba(212,175,55,0.10), transparent 42%),
    linear-gradient(rgba(212,175,55,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212,175,55,0.035) 1px, transparent 1px);
  background-size:auto, 26px 26px, 26px 26px;
  color:#e8e6e0; font-size:10pt; line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}

/* ===== Header ===== */
.resume.it-blockchain header {
  position:relative;
  border:1px solid rgba(212,175,55,0.35);
  border-radius:6px;
  padding:14px 18px;
  margin-bottom:22px;
  background:linear-gradient(135deg, rgba(212,175,55,0.07), rgba(0,0,0,0.2));
  overflow:hidden;
}
.resume.it-blockchain header::before {
  content:''; position:absolute; left:0; top:0; bottom:0; width:4px;
  background:linear-gradient(180deg,#d4af37,#9a7b1f);
}
.resume.it-blockchain .hdr-node {
  display:flex; align-items:flex-start; justify-content:space-between; gap:14px;
}
.resume.it-blockchain h1 {
  font-size:23pt; font-weight:800; letter-spacing:1px; color:#f3efe4;
  line-height:1.15;
}
.resume.it-blockchain .title {
  margin-top:5px; font-size:10.5pt; color:#d4af37;
  letter-spacing:1.5px; font-weight:600; text-transform:uppercase;
}
.resume.it-blockchain .hdr-hash {
  font-family:'Courier New',monospace; font-weight:800;
  font-size:18pt; color:rgba(212,175,55,0.35);
  border:1.5px solid rgba(212,175,55,0.3); border-radius:5px;
  padding:3px 9px; letter-spacing:1px; flex-shrink:0;
}
.resume.it-blockchain .contact {
  margin-top:12px; padding-top:11px;
  border-top:1px dashed rgba(212,175,55,0.28);
  display:flex; flex-wrap:wrap; gap:8px 14px;
  font-size:9pt; color:#b8b6b0; font-family:'Courier New',monospace;
}
.resume.it-blockchain .contact span { position:relative; padding-left:14px; }
.resume.it-blockchain .contact span::before {
  content:''; position:absolute; left:0; top:50%; transform:translateY(-50%);
  width:6px; height:6px; background:#d4af37; border-radius:1px;
  box-shadow:0 0 0 2px rgba(212,175,55,0.18);
}

/* ===== Sections ===== */
.resume.it-blockchain section { margin-bottom:20px; }
.resume.it-blockchain h2 {
  font-size:11.5pt; font-weight:800; color:#f3efe4;
  letter-spacing:1.5px; margin-bottom:12px;
  display:flex; align-items:center; gap:8px;
  padding-bottom:7px;
  border-bottom:1px solid rgba(212,175,55,0.22);
}
.resume.it-blockchain h2 .blk {
  font-family:'Courier New',monospace; color:#d4af37; font-size:13pt; font-weight:800;
}

/* summary */
.resume.it-blockchain .sum-body {
  color:#c9c7c1; font-size:9.5pt; line-height:1.7;
  padding-left:14px; border-left:2px solid rgba(212,175,55,0.4);
}

/* ===== Chain / Blocks ===== */
.resume.it-blockchain .chain {
  position:relative; padding-left:22px;
}
.resume.it-blockchain .chain::before {
  content:''; position:absolute; left:5px; top:6px; bottom:6px; width:1.5px;
  background:linear-gradient(180deg, rgba(212,175,55,0.55), rgba(212,175,55,0.12));
}
.resume.it-blockchain .block {
  position:relative; margin-bottom:14px;
  border:1px solid rgba(212,175,55,0.2);
  border-radius:5px;
  padding:11px 14px;
  background:linear-gradient(180deg, rgba(255,255,255,0.025), rgba(212,175,55,0.025));
}
.resume.it-blockchain .block:last-child { margin-bottom:0; }
.resume.it-blockchain .node-dot {
  position:absolute; left:-21px; top:14px;
  width:11px; height:11px; transform:rotate(45deg);
  background:#0d0d0f; border:2px solid #d4af37; border-radius:2px;
  box-shadow:0 0 0 3px rgba(13,13,15,1), 0 0 6px rgba(212,175,55,0.5);
}
.resume.it-blockchain .block-head {
  display:flex; justify-content:space-between; align-items:baseline;
  flex-wrap:wrap; gap:2px 10px;
}
.resume.it-blockchain h3 {
  font-size:11pt; font-weight:700; color:#f0ede4; line-height:1.35;
}
.resume.it-blockchain .company { color:#f3efe4; }
.resume.it-blockchain .position,
.resume.it-blockchain .role {
  color:#d4af37; font-weight:600; margin-left:8px; font-size:10pt;
}
.resume.it-blockchain .position::before,
.resume.it-blockchain .role::before {
  content:'/ '; color:rgba(212,175,55,0.55); font-weight:400;
}
.resume.it-blockchain .pname { color:#f3efe4; }
.resume.it-blockchain .date {
  font-family:'Courier New',monospace; font-size:8.5pt;
  color:#9a8a55; white-space:nowrap; flex-shrink:0;
}

.resume.it-blockchain .proj-desc {
  margin-top:6px; color:#c9c7c1; font-size:9.5pt; line-height:1.6;
}
.resume.it-blockchain ul { margin-top:8px; list-style:none; }
.resume.it-blockchain li {
  position:relative; padding-left:16px; margin-bottom:5px;
  color:#cdcbc5; font-size:9.5pt; line-height:1.6;
}
.resume.it-blockchain li::before {
  content:'▸'; position:absolute; left:0; top:0;
  color:#d4af37; font-size:9pt;
}
.resume.it-blockchain .edu-meta {
  margin-top:5px; color:#b8b6b0; font-size:9.5pt;
}

/* ===== Skills ===== */
.resume.it-blockchain .skills {
  display:flex; flex-wrap:wrap; gap:8px;
}
.resume.it-blockchain .skill-chip {
  display:inline-flex; align-items:center; gap:6px;
  padding:5px 12px;
  border:1px solid rgba(212,175,55,0.35); border-radius:3px;
  background:linear-gradient(135deg, rgba(212,175,55,0.10), rgba(0,0,0,0.1));
  font-size:9pt; color:#e8e6e0;
  font-family:'Courier New',monospace;
}
.resume.it-blockchain .sk-tick {
  width:6px; height:6px; transform:rotate(45deg);
  background:#d4af37; flex-shrink:0;
}
.resume.it-blockchain .lvl { color:#d4af37; }

/* ===== contract clauses ===== */
.resume.it-blockchain li p, .resume.it-blockchain li div { margin:0; padding:0; display:inline; }
.resume.it-blockchain .skills span, .resume.it-blockchain [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.it-blockchain { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
  .resume.it-blockchain section { page-break-inside:avoid; }
  .resume.it-blockchain .block { page-break-inside:avoid; } }`,
    schema: {
      "templateId": "it-blockchain",
      "version": "1.0.0",
      "name": "区块链开发",
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
