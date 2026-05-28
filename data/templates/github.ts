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
    slug: 'github',
    name: 'GitHub风格',
    category: 'tech',
    html: `<div class="resume github">
  <header class="gh-header">
    <div class="gh-avatar-wrap">
      {{#if basics.avatar}}<img class="gh-avatar" src="{{{basics.avatar}}}" alt="" />{{else}}<div class="gh-avatar-placeholder"></div>{{/if}}
    </div>
    <div class="gh-header-info">
      <h1 data-field="basics.name">{{{basics.name}}}</h1>
      {{#if basics.title}}<p class="gh-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
      <div class="gh-contacts">
        {{#if basics.email}}<span class="gh-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
        {{#if basics.phone}}<span class="gh-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
        {{#if basics.location}}<span class="gh-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
      </div>
    </div>
  </header>
  {{#if basics.summary}}
  <section class="gh-section">
    <h2 class="gh-section-title">About</h2>
    <div class="gh-body" data-field="basics.summary">{{{basics.summary}}}</div>
  </section>
  {{/if}}
  {{#if experience.length}}
  <section class="gh-section" data-section="experience">
    <h2 class="gh-section-title">Experience</h2>
    {{#each experience}}
    <div class="gh-entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="gh-entry-head">
        <span class="gh-org" data-field="experience.{{@index}}.company">{{{company}}}</span>
        <span class="gh-pos" data-field="experience.{{@index}}.position">{{{position}}}</span>
        <span class="gh-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
      {{#if highlights.length}}<ul class="gh-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if projects.length}}
  <section class="gh-section" data-section="projects">
    <h2 class="gh-section-title">Projects</h2>
    {{#each projects}}
    <div class="gh-repo-card" data-entry="projects" data-entry-index="{{@index}}">
      <div class="gh-repo-head">
        <span class="gh-repo-icon">⬡</span>
        <span class="gh-repo-name" data-field="projects.{{@index}}.name">{{{name}}}</span>
        {{#if role}}<span class="gh-repo-role" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
      </div>
      {{#if description}}<div class="gh-repo-desc" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
      {{#if highlights.length}}<ul class="gh-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section class="gh-section" data-section="education">
    <h2 class="gh-section-title">Education</h2>
    {{#each education}}
    <div class="gh-entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="gh-entry-head">
        <span class="gh-org" data-field="education.{{@index}}.institution">{{{institution}}}</span>
        <span class="gh-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></span>
        <span class="gh-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> – <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></span>
      </div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section class="gh-section" data-section="skills">
    <h2 class="gh-section-title">Skills</h2>
    <div class="gh-skills">
      {{#each skills}}<span class="gh-skill-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="gh-skill-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.github { max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 16mm 20mm; font-family: -apple-system, "Segoe UI", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 9.5pt; line-height: 1.6; color: #24292F; background: #fff; border: 1px solid #D0D7DE; }
.gh-header { display: flex; align-items: flex-start; gap: 14px; padding-bottom: 14px; border-bottom: 1px solid #D0D7DE; margin-bottom: 16px; }
.gh-avatar { width: 64px; height: 64px; border-radius: 50%; border: 1px solid #D0D7DE; }
.gh-avatar-placeholder { width: 64px; height: 64px; border-radius: 50%; background: #218234; flex-shrink: 0; }
.gh-header-info { flex: 1; }
.gh-header-info h1 { font-size: 18pt; font-weight: 600; color: #24292F; }
.gh-title { font-size: 10pt; color: #57606A; margin-top: 3px; }
.gh-contacts { margin-top: 6px; display: flex; gap: 14px; flex-wrap: wrap; }
.gh-contact { font-size: 8.5pt; color: #57606A; }
.gh-section { margin-bottom: 16px; }
.gh-section-title { font-size: 9pt; font-weight: 700; color: #166534; border-bottom: 1px solid #D0D7DE; padding-bottom: 5px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
.gh-entry { margin-bottom: 10px; }
.gh-entry-head { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; }
.gh-org { font-size: 10pt; font-weight: 700; color: #24292F; }
.gh-pos { font-size: 9pt; color: #57606A; }
.gh-pos::before { content: '/'; margin-right: 6px; color: #D0D7DE; }
.gh-date { font-size: 8.5pt; color: #57606A; margin-left: auto; }
.gh-list { margin-top: 5px; padding-left: 18px; }
.gh-list li { font-size: 9pt; color: #24292F; margin-bottom: 3px; }
.gh-repo-card { border: 1px solid #D0D7DE; border-radius: 6px; padding: 10px 14px; margin-bottom: 10px; }
.gh-repo-head { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
.gh-repo-icon { color: #166534; font-size: 12pt; }
.gh-repo-name { font-size: 10pt; font-weight: 600; color: #0969DA; }
.gh-repo-role { font-size: 9pt; color: #57606A; margin-left: auto; background: #F6F8FA; border: 1px solid #D0D7DE; padding: 1px 8px; border-radius: 20px; }
.gh-repo-desc { font-size: 9pt; color: #57606A; }
.gh-body { font-size: 9.5pt; color: #24292F; }
.gh-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.gh-skill-tag { font-size: 8.5pt; color: #166534; background: #DCFCE7; border: 1px solid #BBF7D0; padding: 2px 10px; border-radius: 20px; }
.gh-skill-lv { color: #15803D; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.github { margin: 0; border: none; padding: 14mm 18mm; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] {
  white-space: nowrap;
  word-break: keep-all;
}
`,
    schema: {
          "templateId": "github",
          "version": "1.0.0",
          "name": "GitHub风格",
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
