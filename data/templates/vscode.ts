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
  <div class="vs-activity-bar">
    <div class="vs-ab-icon">⊞</div>
    <div class="vs-ab-icon">⊙</div>
    <div class="vs-ab-icon">⋯</div>
  </div>
  <div class="vs-explorer">
    <div class="vs-explorer-title">EXPLORER</div>
    <div class="vs-file active">📄 resume.json</div>
    <div class="vs-file">📁 experience</div>
    <div class="vs-file">📁 education</div>
    <div class="vs-file">📁 projects</div>
    <div class="vs-file">📋 skills.md</div>
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
          {{#if basics.email}}<span data-field="basics.email"><span class="vs-key">email: </span><span class="vs-string">{{{basics.email}}}</span></span>{{/if}}
          {{#if basics.phone}}<span data-field="basics.phone"><span class="vs-key">phone: </span><span class="vs-string">{{{basics.phone}}}</span></span>{{/if}}
          {{#if basics.location}}<span data-field="basics.location"><span class="vs-key">location: </span><span class="vs-string">{{{basics.location}}}</span></span>{{/if}}
        </div>
      </div>
      {{#if basics.summary}}
      <div class="vs-section">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">summary</span> = {</div>
        <div class="vs-body" data-field="basics.summary">{{{basics.summary}}}</div>
        <div class="vs-close">}</div>
      </div>
      {{/if}}
      {{#if experience.length}}
      <div class="vs-section" data-section="experience">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">experience</span> = [</div>
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
        <div class="vs-close">]</div>
      </div>
      {{/if}}
      {{#if education.length}}
      <div class="vs-section" data-section="education">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">education</span> = [</div>
        {{#each education}}
        <div class="vs-entry" data-entry="education" data-entry-index="{{@index}}">
          <span class="vs-company" data-field="education.{{@index}}.institution">{{{institution}}}</span>
          <span class="vs-sep"> · </span>
          <span class="vs-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
          <span class="vs-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{/each}}
        <div class="vs-close">]</div>
      </div>
      {{/if}}
      {{#if skills.length}}
      <div class="vs-section" data-section="skills">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">skills</span> = [</div>
        <div class="vs-tags">{{#each skills}}<span class="vs-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="vs-tag-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}</div>
        <div class="vs-close">]</div>
      </div>
      {{/if}}
      {{#if projects.length}}
      <div class="vs-section" data-section="projects">
        <div class="vs-section-title"><span class="vs-keyword">const</span> <span class="vs-fn">projects</span> = [</div>
        {{#each projects}}
        <div class="vs-entry" data-entry="projects" data-entry-index="{{@index}}">
          <span class="vs-company" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="vs-sep"> · </span><span class="vs-pos" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
          {{#if description}}<div class="vs-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
          {{#if highlights.length}}<ul class="vs-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
        </div>
        {{/each}}
        <div class="vs-close">]</div>
      </div>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.vscode { max-width: 210mm; min-height: 297mm; margin: 0 auto; display: flex; font-family: "Menlo", "Monaco", "Consolas", "PingFang SC", "Microsoft YaHei", monospace; font-size: 10pt; line-height: 1.75; color: #E8E8E8; background: #1E1E1E; }
.vs-activity-bar { width: 44px; background: #333333; display: flex; flex-direction: column; align-items: center; padding: 8px 0; gap: 8px; flex-shrink: 0; }
.vs-ab-icon { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; color: #B0B0B0; font-size: 14pt; cursor: default; }
.vs-explorer { width: 160px; background: #252526; border-right: 1px solid #1E1E1E; padding: 0; flex-shrink: 0; }
.vs-explorer-title { font-size: 8pt; font-weight: 700; color: #E0E0E0; padding: 10px 12px 6px; letter-spacing: 1.5px; }
.vs-file { font-size: 9pt; color: #D6D6D6; padding: 4px 12px; cursor: default; }
.vs-file.active { background: #094771; color: #fff; }
.vs-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.vs-tab-bar { background: #2D2D2D; border-bottom: 1px solid #1E1E1E; }
.vs-tab { display: inline-block; padding: 7px 16px; font-size: 9pt; color: #D6D6D6; border-right: 1px solid #1E1E1E; }
.vs-tab.active { background: #1E1E1E; color: #fff; border-top: 2px solid #569CD6; }
.vs-editor { flex: 1; padding: 16px 18px 22px; }
.vs-header-block { background: rgba(86,156,214,0.08); border-radius: 4px; padding: 12px 14px; margin-bottom: 18px; }
.vs-name { font-size: 17pt; font-weight: 700; color: #FFFFFF; }
.vs-title { font-size: 10.5pt; color: #9CDCFE; margin-top: 4px; }
.vs-contacts { margin-top: 8px; display: flex; flex-direction: column; gap: 3px; }
.vs-key { color: #9CDCFE; }
.vs-string { color: #E8A86B; }
.vs-section { margin-bottom: 18px; }
.vs-section-title { font-size: 10pt; color: #E8E8E8; margin-bottom: 10px; }
.vs-keyword { color: #6FB3E0; }
.vs-fn { color: #E6E0A0; }
.vs-close { font-size: 10pt; color: #E8E8E8; margin-top: 6px; }
.vs-entry { margin-bottom: 14px; padding-left: 14px; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 8px 12px; }
.vs-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; }
.vs-company { color: #5FD0B0; font-weight: 700; font-size: 10.5pt; }
.vs-sep { color: #6FB3E0; }
.vs-pos { color: #D8A6D4; }
.vs-date { color: #A5C97E; margin-left: auto; font-size: 9pt; }
.vs-body { font-size: 9.5pt; color: #B6E0FF; margin-top: 6px; padding-left: 14px; line-height: 1.7; }
.vs-list { padding-left: 18px; margin-top: 6px; }
.vs-list li { font-size: 9.5pt; color: #E8E8E8; margin-bottom: 4px; line-height: 1.65; }
.vs-tags { display: flex; flex-wrap: wrap; gap: 6px; padding-left: 14px; margin-bottom: 4px; }
.vs-tag { font-size: 9pt; color: #DFF6EF; background: rgba(95,208,176,0.18); border: 1px solid rgba(95,208,176,0.5); padding: 2px 9px; border-radius: 3px; }
.vs-tag-lv { color: #8FE0CB; }
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
