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
    slug: 'it-react',
    name: '前端React',
    category: 'tech',
    html: `<div class="resume it-react">
  <div class="ide-titlebar">
    <span class="tb-dot tb-red"></span><span class="tb-dot tb-yellow"></span><span class="tb-dot tb-green"></span>
    <span class="tb-title">Resume.jsx — VS Code</span>
  </div>
  <div class="ide-body">
    <aside class="ide-sidebar">
      <div class="sb-head">EXPLORER</div>
      <div class="sb-tree">
        <div class="sb-folder">▾ src</div>
        <div class="sb-file sb-active">⚛ Profile.jsx</div>
        {{#if basics.summary}}<div class="sb-file">⚛ About.jsx</div>{{/if}}
        {{#if experience.length}}<div class="sb-file">⚛ Experience.jsx</div>{{/if}}
        {{#if education.length}}<div class="sb-file">⚛ Education.jsx</div>{{/if}}
        {{#if skills.length}}<div class="sb-file">{ } skills.json</div>{{/if}}
        {{#if projects.length}}<div class="sb-file">⚛ Projects.jsx</div>{{/if}}
      </div>
    </aside>
    <main class="ide-editor">
      <header class="profile-card">
        <div class="jsx-open">&lt;<span class="tag">Developer</span>&gt;</div>
        <div class="profile-inner">
          <h1 data-field="basics.name">{{{basics.name}}}</h1>
          {{#if basics.title}}<p class="role" data-field="basics.title"><span class="tag-self">&lt;</span>{{{basics.title}}}<span class="tag-self"> /&gt;</span></p>{{/if}}
          <div class="contact">
            {{#if basics.email}}<span data-field="basics.email"><i class="ci">@</i>{{{basics.email}}}</span>{{/if}}
            {{#if basics.phone}}<span data-field="basics.phone"><i class="ci">#</i>{{{basics.phone}}}</span>{{/if}}
            {{#if basics.location}}<span data-field="basics.location"><i class="ci">⌖</i>{{{basics.location}}}</span>{{/if}}
          </div>
        </div>
        <div class="jsx-close">&lt;/<span class="tag">Developer</span>&gt;</div>
      </header>

      {{#if basics.summary}}<section class="block">
        <h2><span class="kw">const</span> about <span class="op">=</span></h2>
        <div class="summary" data-field="basics.summary">{{{basics.summary}}}</div>
      </section>{{/if}}

      {{#if experience.length}}<section class="block" data-section="experience">
        <h2><span class="comment">// </span>工作经历 <span class="tag-name">&lt;Experience&gt;</span></h2>
        {{#each experience}}<div class="entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="entry-head">
            <h3><span class="company" data-field="experience.{{@index}}.company">{{{company}}}</span><span class="position" data-field="experience.{{@index}}.position">{{{position}}}</span></h3>
            <span class="date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>{{/each}}
      </section>{{/if}}

      {{#if education.length}}<section class="block" data-section="education">
        <h2><span class="comment">// </span>教育背景 <span class="tag-name">&lt;Education&gt;</span></h2>
        {{#each education}}<div class="entry" data-entry="education" data-entry-index="{{@index}}">
          <div class="entry-head">
            <h3 data-field="education.{{@index}}.institution">{{{institution}}}</h3>
            <span class="date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> — <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          <p class="edu-meta"><span data-field="education.{{@index}}.area">{{{area}}}</span> <span class="op">·</span> <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
        </div>{{/each}}
      </section>{{/if}}

      {{#if skills.length}}<section class="block" data-section="skills">
        <h2><span class="kw">import</span> skills <span class="kw">from</span> <span class="str">'./stack'</span></h2>
        <div class="skills">{{#each skills}}<span class="chip" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="lvl"> · <span data-field="skills.{{@index}}.level">{{{level}}}</span></span>{{/if}}</span>{{/each}}</div>
      </section>{{/if}}

      {{#if projects.length}}<section class="block" data-section="projects">
        <h2><span class="comment">// </span>项目经历 <span class="tag-name">&lt;Projects&gt;</span></h2>
        {{#each projects}}<div class="entry" data-entry="projects" data-entry-index="{{@index}}">
          <h3><span class="proj-name" data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}}<span class="proj-role"> · <span data-field="projects.{{@index}}.role">{{{role}}}</span></span>{{/if}}</h3>
          {{#if description}}<div class="proj-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>{{/each}}
      </section>{{/if}}
    </main>
  </div>
</div>`,
    css: `.resume.it-react * { margin:0; padding:0; box-sizing:border-box; }
.resume.it-react * { word-wrap:break-word; overflow-wrap:break-word; }
.resume.it-react {
  max-width:210mm; min-height:297mm; margin:0 auto; padding:0;
  background:#1e1e2e; color:#cdd6f4;
  font-size:10pt; line-height:1.55;
  font-family:'PingFang SC','Microsoft YaHei',sans-serif;
}
.resume.it-react .ide-titlebar {
  display:flex; align-items:center; gap:7px;
  background:#181825; padding:8px 14px; border-bottom:1px solid #313244;
}
.resume.it-react .tb-dot { width:11px; height:11px; border-radius:50%; }
.resume.it-react .tb-red { background:#f38ba8; }
.resume.it-react .tb-yellow { background:#f9e2af; }
.resume.it-react .tb-green { background:#a6e3a1; }
.resume.it-react .tb-title {
  margin-left:10px; font-size:8.5pt; color:#6c7086;
  font-family:'SF Mono',Consolas,Menlo,monospace; letter-spacing:.3px;
}
.resume.it-react .ide-body { display:flex; min-height:calc(297mm - 33px); }
.resume.it-react .ide-sidebar {
  width:44mm; flex:0 0 44mm; background:#181825;
  border-right:1px solid #313244; padding:12px 0;
  font-family:'SF Mono',Consolas,Menlo,monospace;
}
.resume.it-react .sb-head {
  font-size:7.5pt; letter-spacing:1.5px; color:#6c7086;
  padding:0 14px 10px; text-transform:uppercase;
}
.resume.it-react .sb-folder {
  font-size:8.5pt; color:#89dceb; padding:3px 14px; font-weight:600;
}
.resume.it-react .sb-file {
  font-size:8.5pt; color:#9399b2; padding:3px 14px 3px 26px;
}
.resume.it-react .sb-file.sb-active {
  color:#89b4fa; background:#1e1e2e;
  border-left:2px solid #89dceb; padding-left:24px;
}
.resume.it-react .ide-editor { flex:1; min-width:0; padding:16mm 14mm; }

.resume.it-react .profile-card {
  border:1px dashed #45475a; border-radius:8px;
  padding:12px 18px 14px; margin-bottom:18px; background:#181825;
}
.resume.it-react .jsx-open, .resume.it-react .jsx-close {
  font-family:'SF Mono',Consolas,Menlo,monospace;
  font-size:9pt; color:#6c7086;
}
.resume.it-react .jsx-close { margin-top:8px; }
.resume.it-react .tag { color:#f38ba8; }
.resume.it-react .profile-inner { padding:6px 0 0 16px; }
.resume.it-react h1 {
  font-size:21pt; font-weight:700; color:#cdd6f4; letter-spacing:.5px;
}
.resume.it-react .role {
  font-family:'SF Mono',Consolas,Menlo,monospace;
  font-size:10pt; color:#a6e3a1; margin-top:3px;
}
.resume.it-react .tag-self { color:#6c7086; }
.resume.it-react .contact {
  display:flex; flex-wrap:wrap; gap:8px 18px; margin-top:9px;
  font-family:'SF Mono',Consolas,Menlo,monospace; font-size:8.5pt;
}
.resume.it-react .contact span { color:#bac2de; display:inline-flex; align-items:center; gap:5px; }
.resume.it-react .ci {
  color:#89dceb; font-style:normal; font-weight:700;
  display:inline-flex; width:15px; height:15px; align-items:center; justify-content:center;
  background:#313244; border-radius:4px; font-size:8pt;
}

.resume.it-react .block { margin-bottom:18px; }
.resume.it-react h2 {
  font-family:'SF Mono',Consolas,Menlo,monospace;
  font-size:11pt; font-weight:600; color:#cdd6f4;
  padding-bottom:7px; margin-bottom:11px;
  border-bottom:1px solid #313244;
}
.resume.it-react .kw { color:#cba6f7; }
.resume.it-react .op { color:#89dceb; }
.resume.it-react .str { color:#a6e3a1; }
.resume.it-react .comment { color:#6c7086; }
.resume.it-react .tag-name { color:#f38ba8; font-size:9.5pt; }

.resume.it-react .summary {
  color:#bac2de; font-size:10pt; line-height:1.65;
  background:#181825; border-left:2px solid #cba6f7;
  padding:9px 14px; border-radius:0 6px 6px 0;
}

.resume.it-react .entry {
  margin-bottom:12px; padding:11px 14px;
  background:#181825; border:1px solid #313244; border-radius:6px;
}
.resume.it-react .entry:last-child { margin-bottom:0; }
.resume.it-react .entry-head {
  display:flex; justify-content:space-between; align-items:baseline;
  flex-wrap:wrap; gap:4px 10px;
}
.resume.it-react h3 { font-size:11pt; font-weight:600; }
.resume.it-react .company { color:#89b4fa; }
.resume.it-react .position { color:#f9e2af; }
.resume.it-react .position::before { content:'· '; color:#6c7086; }
.resume.it-react .date {
  font-family:'SF Mono',Consolas,Menlo,monospace;
  font-size:8pt; color:#6c7086; white-space:nowrap;
}
.resume.it-react .edu-meta { color:#bac2de; font-size:9.5pt; margin-top:3px; }
.resume.it-react .proj-name { color:#89b4fa; }
.resume.it-react .proj-role { color:#a6e3a1; font-size:9.5pt; }
.resume.it-react .proj-desc { color:#bac2de; font-size:9.5pt; margin-top:4px; }

.resume.it-react ul { list-style:none; margin-top:7px; }
.resume.it-react li {
  position:relative; padding-left:17px; margin-bottom:4px;
  color:#cdd6f4; font-size:9.5pt; line-height:1.55;
}
.resume.it-react li::before {
  content:'▹'; position:absolute; left:2px; top:0; color:#89dceb;
}

.resume.it-react .skills { display:flex; flex-wrap:wrap; gap:7px; }
.resume.it-react .chip {
  font-family:'SF Mono',Consolas,Menlo,monospace; font-size:8.5pt;
  background:#181825; border:1px solid #45475a; border-radius:5px;
  padding:4px 10px; color:#cdd6f4;
}
.resume.it-react .chip .lvl { color:#a6e3a1; }
.resume.it-react .chip::before { content:'<'; color:#f38ba8; }
.resume.it-react .chip::after { content:'/>'; color:#f38ba8; }

.resume.it-react li p, .resume.it-react li div { margin:0; padding:0; display:inline; }
.resume.it-react .skills span, .resume.it-react [class*='skill'] span { white-space:nowrap; word-break:keep-all; }

@media print {
  .resume.it-react { margin:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  @page { margin:0; size:A4; }
}`,
    schema: {
      "templateId": "it-react",
      "version": "1.0.0",
      "name": "前端React",
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
