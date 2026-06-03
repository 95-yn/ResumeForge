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
    slug: 'terminal',
    name: '终端风格',
    category: 'tech',
    html: `<div class="resume terminal">
  <div class="tm-title-bar">
    <span class="tm-dot tm-red"></span>
    <span class="tm-dot tm-yellow"></span>
    <span class="tm-dot tm-green"></span>
    <span class="tm-bar-title">resume — bash</span>
  </div>
  <div class="tm-body">
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">cat profile.txt</span></div>
    <div class="tm-block">
      <div class="tm-label"># NAME</div>
      <h1 class="tm-name" data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="tm-title-text" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="tm-contacts">
        {{#if basics.email}}<span class="tm-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="tm-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="tm-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
    {{#if basics.summary}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">cat summary.txt</span></div>
    <div class="tm-block">
      <div class="tm-label"># SUMMARY</div>
      <div class="tm-text" data-field="basics.summary">{{{basics.summary}}}</div>
    </div>
    {{/if}}
    {{#if experience.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">ls -la experience/</span></div>
    <div class="tm-block" data-section="experience">
      <div class="tm-label"># EXPERIENCE</div>
      {{#each experience}}
      <div class="tm-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="tm-entry-row">
          <span class="tm-green-text" data-field="experience.{{@index}}.company">{{{company}}}</span>
          <span class="tm-separator"> | </span>
          <span class="tm-cyan-text" data-field="experience.{{@index}}.position">{{{position}}}</span>
          <span class="tm-gray-text"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> ~ <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="tm-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}"><span class="tm-bullet">▸</span> {{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    {{#if education.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">cat education.log</span></div>
    <div class="tm-block" data-section="education">
      <div class="tm-label"># EDUCATION</div>
      {{#each education}}
      <div class="tm-entry" data-entry="education" data-entry-index="{{@index}}">
        <span class="tm-green-text" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="tm-separator"> | </span>
        <span class="tm-text" data-field="education.{{@index}}.area">{{{area}}}</span>
        <span class="tm-separator"> · </span>
        <span class="tm-text" data-field="education.{{@index}}.studyType">{{{studyType}}}</span>
        <span class="tm-gray-text"> [<span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>-<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>]</span>
      </div>
      {{/each}}
    </div>
    {{/if}}
    {{#if skills.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">./list-skills.sh</span></div>
    <div class="tm-block" data-section="skills">
      <div class="tm-label"># SKILLS</div>
      <div class="tm-tags">{{#each skills}}<span class="tm-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="tm-tag-lv" data-field="skills.{{@index}}.level">:{{{level}}}</span>{{/if}}</span>{{/each}}</div>
    </div>
    {{/if}}
    {{#if projects.length}}
    <div class="tm-prompt"><span class="tm-user">guest@resume</span><span class="tm-at">:</span><span class="tm-path">~</span><span class="tm-dollar">$</span> <span class="tm-cmd">git log --oneline projects/</span></div>
    <div class="tm-block" data-section="projects">
      <div class="tm-label"># PROJECTS</div>
      {{#each projects}}
      <div class="tm-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="tm-entry-row">
          <span class="tm-green-text" data-field="projects.{{@index}}.name">{{{name}}}</span>
          {{#if role}}<span class="tm-separator"> | </span><span class="tm-cyan-text" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="tm-text" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="tm-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}"><span class="tm-bullet">▸</span> {{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    <div class="tm-cursor">█</div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.terminal { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: "Menlo", "Monaco", "Courier New", "Consolas", "PingFang SC", "Microsoft YaHei", monospace; font-size: 9pt; line-height: 1.6; color: #4ADE80; background: #0A0A0A; }
.tm-title-bar { background: #1C1C1C; border-bottom: 1px solid #2D2D2D; padding: 8px 14px; display: flex; align-items: center; gap: 6px; }
.tm-dot { width: 12px; height: 12px; border-radius: 50%; }
.tm-red { background: #FF5F56; }
.tm-yellow { background: #FEBC2E; }
.tm-green { background: #28C840; }
.tm-bar-title { font-size: 9pt; color: #888; margin-left: 6px; }
.tm-body { padding: 16px 20mm 20mm; }
.tm-prompt { color: #888; margin-bottom: 5px; font-size: 9pt; }
.tm-user { color: #4ADE80; }
.tm-at { color: #888; }
.tm-path { color: #60A5FA; }
.tm-dollar { color: #E2E8F0; margin: 0 4px; }
.tm-cmd { color: #FDE68A; }
.tm-block { margin-bottom: 14px; padding-left: 0; }
.tm-label { font-size: 8pt; color: #6B7280; margin-bottom: 6px; }
.tm-name { font-size: 16pt; font-weight: 700; color: #4ADE80; letter-spacing: 1px; }
.tm-title-text { font-size: 9.5pt; color: #60A5FA; margin-top: 3px; }
.tm-contacts { margin-top: 6px; display: flex; gap: 14px; flex-wrap: wrap; }
.tm-contact { font-size: 8.5pt; color: #A1A1AA; }
.tm-text { font-size: 9pt; color: #D4D4D8; }
.tm-entry { margin-bottom: 10px; }
.tm-entry-row { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0; }
.tm-green-text { color: #4ADE80; font-weight: 700; }
.tm-cyan-text { color: #67E8F9; }
.tm-gray-text { color: #6B7280; margin-left: 8px; font-size: 8.5pt; }
.tm-separator { color: #3F3F46; margin: 0 4px; }
.tm-list { list-style: none; padding-left: 12px; margin-top: 4px; }
.tm-list li { font-size: 9pt; color: #D4D4D8; margin-bottom: 3px; }
.tm-bullet { color: #4ADE80; margin-right: 4px; }
.tm-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tm-tag { font-size: 8.5pt; color: #0A0A0A; background: #4ADE80; padding: 1px 8px; border-radius: 2px; }
.tm-tag-lv { color: #065F46; }
.tm-cursor { color: #4ADE80; animation: blink 1s step-end infinite; font-size: 11pt; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.terminal { margin: 0; print-color-adjust: exact; -webkit-print-color-adjust: exact; } .tm-cursor { display: none; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "terminal",
          "version": "1.0.0",
          "name": "终端风格",
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
