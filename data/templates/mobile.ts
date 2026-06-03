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
    slug: 'mobile',
    name: '移动开发',
    category: 'tech',
    html: `<div class="resume mobile">
  <header class="mb-header">
    <div class="mb-avatar-area">
      {{#if basics.avatar}}<img class="mb-avatar" src="{{{basics.avatar}}}" alt="" />{{else}}<div class="mb-avatar-ph"></div>{{/if}}
    </div>
    <h1 data-field="basics.name">{{{basics.name}}}</h1>
    {{#if basics.title}}<p class="mb-title" data-field="basics.title">{{{basics.title}}}</p>{{/if}}
    <div class="mb-contacts">
      {{#if basics.email}}<span class="mb-contact" data-field="basics.email">{{{basics.email}}}</span>{{/if}}
      {{#if basics.phone}}<span class="mb-contact" data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
      {{#if basics.location}}<span class="mb-contact" data-field="basics.location">{{{basics.location}}}</span>{{/if}}
    </div>
  </header>
  <div class="mb-content">
    {{#if basics.summary}}
    <div class="mb-card">
      <h2 class="mb-card-title">简介</h2>
      <div class="mb-body" data-field="basics.summary">{{{basics.summary}}}</div>
    </div>
    {{/if}}
    {{#if experience.length}}
    <div class="mb-card" data-section="experience">
      <h2 class="mb-card-title">工作经历</h2>
      {{#each experience}}
      <div class="mb-entry" data-entry="experience" data-entry-index="{{@index}}">
        <div class="mb-entry-head">
          <div>
            <p class="mb-org" data-field="experience.{{@index}}.company">{{{company}}}</p>
            <p class="mb-pos" data-field="experience.{{@index}}.position">{{{position}}}</p>
          </div>
          <span class="mb-date"><span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span></span>
        </div>
        {{#if highlights.length}}<ul class="mb-list">{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    {{#if projects.length}}
    <div class="mb-card" data-section="projects">
      <h2 class="mb-card-title">项目经历</h2>
      {{#each projects}}
      <div class="mb-entry" data-entry="projects" data-entry-index="{{@index}}">
        <div class="mb-entry-head">
          <p class="mb-org" data-field="projects.{{@index}}.name">{{{name}}}</p>
          {{#if role}}<span class="mb-date" data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}
        </div>
        {{#if description}}<div class="mb-body" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul class="mb-list">{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    <div class="mb-two">
      {{#if education.length}}
      <div class="mb-card" data-section="education">
        <h2 class="mb-card-title">教育背景</h2>
        {{#each education}}
        <div class="mb-entry" data-entry="education" data-entry-index="{{@index}}">
          <p class="mb-org" data-field="education.{{@index}}.institution">{{{institution}}}</p>
          <p class="mb-pos"><span data-field="education.{{@index}}.area">{{{area}}}</span> · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span></p>
          <p class="mb-date"><span data-field="education.{{@index}}.startDate">{{{startDate}}}</span>–<span data-field="education.{{@index}}.endDate">{{{endDate}}}</span></p>
        </div>
        {{/each}}
      </div>
      {{/if}}
      {{#if skills.length}}
      <div class="mb-card" data-section="skills">
        <h2 class="mb-card-title">专业技能</h2>
        <div class="mb-tags">
          {{#each skills}}<span class="mb-tag" data-entry="skills" data-entry-index="{{@index}}"><span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}}<span class="mb-lv" data-field="skills.{{@index}}.level"> · {{{level}}}</span>{{/if}}</span>{{/each}}
        </div>
      </div>
      {{/if}}
    </div>
  </div>
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.mobile { max-width: 210mm; min-height: 297mm; margin: 0 auto; font-family: -apple-system, "SF Pro Text", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 10pt; line-height: 1.6; color: #1C1C1E; background: #F2F2F7; }
.mb-header { background: #fff; text-align: center; padding: 16mm 20mm 14px; border-bottom: 1px solid #C6C6C8; }
.mb-avatar { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #E5E5EA; margin-bottom: 10px; }
.mb-avatar-ph { width: 72px; height: 72px; border-radius: 50%; background: #8E8E93; margin: 0 auto 10px; }
.mb-header h1 { font-size: 20pt; font-weight: 700; color: #1C1C1E; letter-spacing: -0.5px; }
.mb-title { font-size: 10.5pt; color: #3C3C43; opacity: 0.6; margin-top: 3px; }
.mb-contacts { margin-top: 8px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.mb-contact { font-size: 9pt; color: #007AFF; }
.mb-content { padding: 12px 14px; }
.mb-card { background: #fff; border-radius: 12px; padding: 14px 16px; margin-bottom: 10px; }
.mb-card-title { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #8E8E93; margin-bottom: 10px; }
.mb-entry { padding-bottom: 10px; border-bottom: 1px solid #F2F2F7; margin-bottom: 10px; }
.mb-entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.mb-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.mb-org { font-size: 10.5pt; font-weight: 600; color: #1C1C1E; }
.mb-pos { font-size: 9.5pt; color: #3C3C43; opacity: 0.65; }
.mb-date { font-size: 8.5pt; color: #8E8E93; white-space: nowrap; }
.mb-body { font-size: 9.5pt; color: #3C3C43; margin-top: 4px; }
.mb-list { margin-top: 5px; padding-left: 16px; }
.mb-list li { font-size: 9.5pt; color: #3C3C43; margin-bottom: 3px; }
.mb-two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.mb-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.mb-tag { font-size: 9pt; color: #007AFF; background: #EBF5FF; padding: 3px 10px; border-radius: 8px; }
.mb-lv { color: #0055CC; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.mobile { margin: 0; background: #fff; } .mb-card { box-shadow: none; border: 1px solid #E5E5EA; } }


/* skill-no-wrap */
.tag, .skill-tag, .skill, .skills span, .skill-tags > *, [class*='skill'] span, [class*='tag'] { white-space: nowrap;
  word-break: keep-all; }
`,
    schema: {
          "templateId": "mobile",
          "version": "1.0.0",
          "name": "移动开发",
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
