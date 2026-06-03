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
  <div class="mb-statusbar"><span class="mb-sb-time">9:41</span><span class="mb-sb-icons"><span class="mb-sb-sig"></span><span class="mb-sb-wifi"></span><span class="mb-sb-batt"></span></span></div>
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
/* signature memory anchor: an iOS status-bar masthead pinned above the profile */
.mb-statusbar { background: #fff; display: flex; align-items: center; justify-content: space-between; padding: 7px 22mm 0; }
.mb-sb-time { font-size: 9pt; font-weight: 700; color: #1C1C1E; letter-spacing: 0.5px; }
.mb-sb-icons { display: flex; align-items: center; gap: 6px; }
.mb-sb-sig { width: 17px; height: 10px; background: linear-gradient(to right, #1C1C1E 0 3px, transparent 3px 4px, #1C1C1E 4px 7px, transparent 7px 8px, #1C1C1E 8px 11px, transparent 11px 12px, #1C1C1E 12px 17px); clip-path: polygon(0 60%, 3px 60%, 3px 100%, 0 100%, 0 60%, 4px 40%, 7px 40%, 7px 100%, 4px 100%, 4px 40%, 8px 20%, 11px 20%, 11px 100%, 8px 100%, 8px 20%, 12px 0, 17px 0, 17px 100%, 12px 100%); }
.mb-sb-wifi { width: 14px; height: 10px; border-radius: 50% 50% 0 0; border: 2px solid #1C1C1E; border-bottom: none; }
.mb-sb-batt { width: 22px; height: 11px; border: 1px solid #1C1C1E; border-radius: 3px; position: relative; background: linear-gradient(to right, #1C1C1E 0 72%, transparent 72%); background-clip: content-box; padding: 1.5px; }
.mb-sb-batt::after { content: ''; position: absolute; right: -3px; top: 3px; width: 2px; height: 5px; background: #1C1C1E; border-radius: 0 1px 1px 0; }
.mb-header { background: #fff; text-align: center; padding: 8px 20mm 16px; border-bottom: 1px solid #D8D8DD; }
.mb-avatar { width: 72px; height: 72px; border-radius: 22px; object-fit: cover; border: 1px solid #E5E5EA; margin-bottom: 10px; }
.mb-avatar-ph { width: 72px; height: 72px; border-radius: 22px; background: #8E8E93; margin: 0 auto 10px; }
.mb-header h1 { font-size: 20pt; font-weight: 700; color: #1C1C1E; letter-spacing: -0.5px; }
.mb-title { font-size: 10.5pt; color: #636366; margin-top: 3px; }
.mb-contacts { margin-top: 8px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.mb-contact { font-size: 9pt; color: #0A6CDB; }
.mb-content { padding: 12px 14px; }
.mb-card { background: #fff; border-radius: 14px; padding: 14px 16px; margin-bottom: 10px; border: 1px solid #E7E7EC; }
.mb-card-title { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #8E8E93; margin-bottom: 10px; }
.mb-entry { padding-bottom: 10px; border-bottom: 1px solid #F2F2F7; margin-bottom: 10px; }
.mb-entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.mb-entry-head { display: flex; justify-content: space-between; align-items: flex-start; }
.mb-org { font-size: 10.5pt; font-weight: 600; color: #1C1C1E; }
.mb-pos { font-size: 9.5pt; color: #636366; }
.mb-date { font-size: 8.5pt; color: #8E8E93; white-space: nowrap; }
.mb-body { font-size: 9.5pt; color: #3C3C43; margin-top: 4px; }
.mb-list { margin-top: 5px; padding-left: 16px; }
.mb-list li { font-size: 9.5pt; color: #3C3C43; margin-bottom: 3px; }
.mb-two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.mb-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.mb-tag { font-size: 9pt; color: #0A6CDB; background: #EAF2FE; padding: 3px 10px; border-radius: 8px; }
.mb-lv { color: #0049A8; font-size: 8.5pt; }
li p, li div { margin: 0; padding: 0; display: inline; }
@media print { .resume.mobile { margin: 0; background: #fff; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
  @page { margin: 0; size: A4; } }


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
