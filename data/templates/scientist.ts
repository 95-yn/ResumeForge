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
    slug: 'scientist',
    name: '科研人员',
    category: 'profession',
    html: `<div class="resume scientist">
  <header>
    <div class="masthead">
      <div class="masthead-rule"></div>
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="abstract-label" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="contact">
        {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
      <div class="masthead-rule"></div>
    </div>
  </header>

  {{#if basics.summary}}<section class="block abstract-block">
    <h2><span class="sec-no">§</span>个人简介</h2>
    <div class="abstract" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>{{/if}}

  <div class="columns">
    <div class="col col-main">
      {{#if experience.length}}<section class="block" data-section="experience">
        <h2><span class="sec-no">1</span>工作经历</h2>
        {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="entry-head">
            <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
            <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>{{/each}}
      </section>{{/if}}

      {{#if projects.length}}<section class="block" data-section="projects">
        <h2><span class="sec-no">2</span>项目经历</h2>
        {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
          <h3><span class="pname" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} <span class="role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
          {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>{{/each}}
      </section>{{/if}}
    </div>

    <div class="col col-side">
      {{#if education.length}}<section class="block" data-section="education">
        <h2><span class="sec-no">3</span>教育背景</h2>
        {{#each education}}<div class="entry edu-entry" data-entry="education" data-entry-index="{{@index}}">
          <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
          <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          <p class="edu-detail"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>{{/each}}
      </section>{{/if}}

      {{#if skills.length}}<section class="block" data-section="skills">
        <h2><span class="sec-no">4</span>专业技能</h2>
        <div class="skills">{{#each skills}}<span class="skill-item" data-entry="skills" data-entry-index="{{@index}}"><span class="sk-name" data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} · <span class="sk-level" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}</span>{{/each}}</div>
      </section>{{/if}}
    </div>
  </div>
</div>`,
    css: `.resume.scientist * { margin:0; padding:0; box-sizing:border-box; }
.resume.scientist * { word-wrap:break-word; overflow-wrap:break-word; }

.resume.scientist {
  --indigo:#283593;
  --indigo-deep:#1a237e;
  --indigo-soft:#5c6bc0;
  --ink:#1c1f2e;
  --muted:#5b6072;
  --line:#d6d9e6;
  --paper-tint:#f4f5fb;
  max-width:210mm;
  min-height:297mm;
  margin:0 auto;
  padding:18mm 16mm;
  background:#fff;
  color:var(--ink);
  font-size:10pt;
  line-height:1.5;
  font-family:'PingFang SC','Microsoft YaHei','Georgia',serif;
}

/* Masthead — paper title block */
.resume.scientist .masthead { text-align:center; margin-bottom:9mm; }
.resume.scientist .masthead-rule {
  height:2px;
  background:var(--indigo-deep);
  position:relative;
}
.resume.scientist .masthead-rule::after {
  content:''; position:absolute; left:0; right:0; bottom:-3px; height:1px; background:var(--indigo-soft);
}
.resume.scientist .masthead-rule:last-child::after { top:-3px; bottom:auto; }
.resume.scientist h1 {
  font-size:25pt;
  font-weight:700;
  letter-spacing:0.06em;
  color:var(--indigo-deep);
  margin:7mm 0 2.5mm;
  line-height:1.15;
}
.resume.scientist .abstract-label {
  font-size:10.5pt;
  font-style:italic;
  color:var(--indigo);
  letter-spacing:0.04em;
  margin-bottom:3.5mm;
}
.resume.scientist .contact {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:0 5mm;
  font-size:8.8pt;
  color:var(--muted);
  margin-bottom:5mm;
  font-family:'PingFang SC','Microsoft YaHei','Courier New',monospace;
}
.resume.scientist .contact span { position:relative; padding-left:3.5mm; }
.resume.scientist .contact span:first-child { padding-left:0; }
.resume.scientist .contact span:first-child::before { display:none; }
.resume.scientist .contact span::before {
  content:''; position:absolute; left:0; top:50%; width:3px; height:3px;
  transform:translateY(-50%) rotate(45deg); background:var(--indigo-soft);
}

/* Section headings — numbered like paper sections */
.resume.scientist .block { margin-bottom:6mm; }
.resume.scientist h2 {
  font-size:11pt;
  font-weight:700;
  color:var(--indigo-deep);
  letter-spacing:0.04em;
  padding-bottom:1.5mm;
  margin-bottom:3.5mm;
  border-bottom:1.5px solid var(--indigo-deep);
  display:flex;
  align-items:baseline;
  gap:2.5mm;
}
.resume.scientist .sec-no {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:5.5mm;
  height:5.5mm;
  font-size:8.5pt;
  font-weight:700;
  color:#fff;
  background:var(--indigo);
  border-radius:2px;
  font-family:'Courier New',monospace;
}

/* Abstract */
.resume.scientist .abstract-block { background:var(--paper-tint); border-left:3px solid var(--indigo); padding:4mm 5mm; }
.resume.scientist .abstract-block h2 { border-bottom:none; margin-bottom:2.5mm; padding-bottom:0; }
.resume.scientist .abstract { font-size:9.5pt; color:var(--ink); text-align:justify; line-height:1.6; }

/* Two-column body */
.resume.scientist .columns { display:flex; gap:8mm; align-items:flex-start; }
.resume.scientist .col-main { flex:1 1 62%; min-width:0; }
.resume.scientist .col-side { flex:1 1 38%; min-width:0; }

/* Entries */
.resume.scientist .entry { margin-bottom:4mm; padding-left:4mm; position:relative; }
.resume.scientist .entry::before {
  content:''; position:absolute; left:0; top:1.5mm; bottom:1mm; width:2px;
  background:linear-gradient(var(--indigo-soft),transparent);
}
.resume.scientist .entry-head { display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:0 3mm; }
.resume.scientist h3 {
  font-size:10pt; font-weight:700; color:var(--ink); line-height:1.35; margin-bottom:0.5mm;
}
.resume.scientist .company { color:var(--indigo-deep); }
.resume.scientist .position { color:var(--muted); font-weight:500; }
.resume.scientist .position::before { content:' / '; color:var(--line); font-weight:400; }
.resume.scientist .date {
  font-size:8pt; color:var(--indigo); font-family:'Courier New',monospace; white-space:nowrap; font-weight:600;
}

.resume.scientist .pname { color:var(--indigo-deep); }
.resume.scientist .role { font-size:8.5pt; color:#fff; background:var(--indigo-soft); padding:0.3mm 1.8mm; border-radius:2px; font-weight:600; }
.resume.scientist .proj-desc { font-size:9pt; color:var(--muted); margin:1mm 0; text-align:justify; }

/* Lists — equation/numbered style */
.resume.scientist ul { list-style:none; margin:1.5mm 0 0; }
.resume.scientist li {
  font-size:9.3pt; color:var(--ink); line-height:1.55; padding-left:5mm; position:relative; margin-bottom:1mm; text-align:justify;
}
.resume.scientist li::before {
  content:'▸'; position:absolute; left:0.5mm; top:0; color:var(--indigo-soft); font-size:8pt;
}

/* Education entries */
.resume.scientist .edu-entry { margin-bottom:3.5mm; }
.resume.scientist .edu-entry h3 { font-size:9.5pt; color:var(--indigo-deep); }
.resume.scientist .edu-detail { font-size:8.8pt; color:var(--muted); margin-top:0.5mm; }
.resume.scientist .edu-entry .date { display:block; margin-top:0.5mm; }

/* Skills */
.resume.scientist .skills { display:flex; flex-wrap:wrap; gap:2mm; }
.resume.scientist .skill-item {
  font-size:8.6pt; color:var(--indigo-deep); background:var(--paper-tint);
  border:1px solid var(--line); border-radius:2px; padding:1mm 2.5mm; line-height:1.3;
}
.resume.scientist .sk-level { color:var(--indigo-soft); font-family:'Courier New',monospace; font-size:8pt; }

.resume.scientist li p, .resume.scientist li div { margin:0; padding:0; display:inline; }
.resume.scientist .skills span, .resume.scientist [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print { .resume.scientist { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; } }`,
    schema: {
      "templateId": "scientist",
      "version": "1.0.0",
      "name": "科研人员",
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
