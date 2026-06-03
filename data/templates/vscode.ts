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
    slug: 'vscode',
    name: 'VS Code风格',
    category: 'tech',
    html: `<div class="resume vscode">
  <div class="vs-explorer">
    <div class="vs-explorer-title">EXPLORER</div>
    <div class="vs-file active">resume.json</div>
    <div class="vs-file">experience</div>
    <div class="vs-file">education</div>
    <div class="vs-file">projects</div>
    <div class="vs-file">skills.md</div>
  </div>
  <div class="vs-main">
    <div class="vs-tab-bar">
      <div class="vs-tab active">resume.json</div>
    </div>
    <div class="vs-editor">
      <div class="vs-header-block">
        <h1 class="vs-name" data-field="basics.name">{{{basics.name}}}</h1>
        {{#if basics.title}}<p class="vs-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
        <div class="vs-contacts">
          {{#if basics.email}}<span data-field="basics.email"><span class="vs-key">email </span><span class="vs-string">{{{basics.email}}}</span></span>{{/if}}
          {{#if basics.phone}}<span data-field="basics.phone"><span class="vs-key">phone </span><span class="vs-string">{{{basics.phone}}}</span></span>{{/if}}
          {{#if basics.location}}<span data-field="basics.location"><span class="vs-key">location </span><span class="vs-string">{{{basics.location}}}</span></span>{{/if}}
        </div>
      </div>
      {{#if basics.summary}}
      <div class="vs-section">
        <div class="vs-section-title"><span class="vs-keyword">summary</span></div>
        <div class="vs-body" data-field="basics.summary">{{{basics.summary}}}</div>
      </div>
      {{/if}}
      {{#if experience.length}}
      <div class="vs-section" data-section="experience">
        <div class="vs-section-title"><span class="vs-keyword">experience</span></div>
        {{#each experience}}
        <div class="vs-entry" data-entry="experience" data-entry-index="{{@index}}">
          <div class="vs-entry-head">
            <span class="vs-company" data-field="experience.{{@index}}.company">{{{company}}}</span>
            <span class="vs-sep"> · </span>
            <span class="vs-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
            <span class="vs-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
          </div>
          {{#if highlights.length}}<ul class="vs-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </div>
      {{/if}}
      {{#if education.length}}
      <div class="vs-section" data-section="education">
        <div class="vs-section-title"><span class="vs-keyword">education</span></div>
        {{#each education}}
        <div class="vs-entry" data-entry="education" data-entry-index="{{@index}}">
          <span class="vs-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="vs-sep"> · </span>
          <span class="vs-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="vs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
      </div>
      {{/if}}
      {{#if skills.length}}
      <div class="vs-section" data-section="skills">
        <div class="vs-section-title"><span class="vs-keyword">skills</span></div>
        <div class="vs-tags">{{#each skills}}<span class="vs-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="vs-tag-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}</div>
      </div>
      {{/if}}
      {{#if projects.length}}
      <div class="vs-section" data-section="projects">
        <div class="vs-section-title"><span class="vs-keyword">projects</span></div>
        {{#each projects}}
        <div class="vs-entry" data-entry="projects" data-entry-index="{{@index}}">
          <div class="vs-entry-head">
            <span class="vs-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
            {{#if role}}<span class="vs-sep"> · </span><span class="vs-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          </div>
          {{#if description}}<div class="vs-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="vs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
      </div>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.vscode { max-width: 210mm; min-height: 297mm; margin: 0 auto; display: flex; font-family: "Menlo", "Monaco", "Consolas", "PingFang SC", "Microsoft YaHei", monospace; font-size: 9.5pt; line-height: 1.6; color: #ECECEC; background: #1E1E1E; }
.vs-explorer { width: 150px; background: #252526; border-right: 1px solid #333333; padding: 0; flex-shrink: 0; }
.vs-explorer-title { font-size: 8.5pt; font-weight: 700; color: #C8C8C8; padding: 12px 14px 8px; letter-spacing: 1.5px; }
.vs-file { font-size: 9pt; color: #C4C4C4; padding: 5px 14px; cursor: default; }
.vs-file.active { background: #094771; color: #fff; }
.vs-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.vs-tab-bar { background: #2D2D2D; border-bottom: 1px solid #1E1E1E; }
.vs-tab { display: inline-block; padding: 8px 18px; font-size: 9.5pt; color: #C4C4C4; }
.vs-tab.active { background: #1E1E1E; color: #fff; border-top: 2px solid #569CD6; }
.vs-editor { flex: 1; padding: 20px 22px 24px; }
.vs-header-block { background: rgba(86,156,214,0.10); border-radius: 4px; padding: 16px 18px; margin-bottom: 22px; }
.vs-name { font-size: 19pt; font-weight: 700; color: #FFFFFF; line-height: 1.3; }
.vs-title { font-size: 11.5pt; color: #9CDCFE; margin-top: 6px; }
.vs-contacts { margin-top: 10px; display: flex; flex-direction: column; gap: 4px; }
.vs-key { color: #9CDCFE; }
.vs-string { color: #ECB07A; }
.vs-section { margin-bottom: 22px; }
.vs-section-title { font-size: 11pt; margin-bottom: 11px; padding-bottom: 5px; border-bottom: 1px solid #3A3A3A; }
.vs-keyword { color: #6FB3E0; font-weight: 700; }
.vs-entry { margin-bottom: 14px; background: rgba(255,255,255,0.04); border-radius: 4px; padding: 11px 14px; }
.vs-entry:last-child { margin-bottom: 0; }
.vs-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; line-height: 1.5; }
.vs-company { color: #7CDCC0; font-weight: 700; font-size: 11pt; }
.vs-sep { color: #6FB3E0; }
.vs-pos { color: #E0B6DC; }
.vs-date { color: #B6D597; margin-left: auto; font-size: 9pt; }
.vs-body { font-size: 9.5pt; color: #DCEBFA; margin-top: 7px; line-height: 1.65; }
.vs-list { list-style: none; padding-left: 16px; margin-top: 8px; }
.vs-list li { position: relative; font-size: 9.5pt; color: #ECECEC; margin-bottom: 5px; line-height: 1.6; }
.vs-list li::before { content: "›"; position: absolute; left: -14px; color: #6FB3E0; }
.vs-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.vs-tag { font-size: 9pt; color: #EAF8F2; background: rgba(124,220,192,0.18); border: 1px solid rgba(124,220,192,0.5); padding: 3px 10px; border-radius: 3px; }
.vs-tag-lv { color: #9CE3CE; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.vscode { margin: 0; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
      "templateId": "vscode",
      "version": "1.0.0",
      "name": "VS Code风格",
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
