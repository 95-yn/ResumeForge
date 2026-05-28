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
    slug: 'manifesto',
    name: '宣言风格',
    category: 'creative',
    html: `<div class="resume manifesto">
  <h1 class="name" data-field="basics.name">{{{basics.name}}}</h1>
  <div class="role-line" data-field="basics.title">{{{basics.title}}}</div>
  <div class="contact-row">
    {{#if basics.email}}<span data-field="basics.email">{{{basics.email}}}</span>{{/if}}
    {{#if basics.phone}}<span data-field="basics.phone">{{{basics.phone}}}</span>{{/if}}
    {{#if basics.location}}<span data-field="basics.location">{{{basics.location}}}</span>{{/if}}
  </div>

  {{#if basics.summary}}
  <h2 class="section-title">关于</h2>
  <div data-field="basics.summary" style="font-size:10pt;line-height:1.65;">{{{basics.summary}}}</div>
  {{/if}}

  {{#if experience.length}}
  <h2 class="section-title">工作经历</h2>
  <div data-section="experience">
    {{#each experience}}
    <div class="entry" data-entry="experience" data-entry-index="{{@index}}">
      <div class="date">
        <span data-field="experience.{{@index}}.startDate">{{{startDate}}}</span> –
        <span data-field="experience.{{@index}}.endDate">{{{endDate}}}</span>
      </div>
      <div>
        <h3><span data-field="experience.{{@index}}.company">{{{company}}}</span></h3>
        <div class="sub" data-field="experience.{{@index}}.position">{{{position}}}</div>
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="experience.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </div>
  {{/if}}

  {{#if education.length}}
  <h2 class="section-title">教育背景</h2>
  <div data-section="education">
    {{#each education}}
    <div class="entry" data-entry="education" data-entry-index="{{@index}}">
      <div class="date">
        <span data-field="education.{{@index}}.startDate">{{{startDate}}}</span> –
        <span data-field="education.{{@index}}.endDate">{{{endDate}}}</span>
      </div>
      <div>
        <h3><span data-field="education.{{@index}}.institution">{{{institution}}}</span></h3>
        <div class="sub">
          <span data-field="education.{{@index}}.area">{{{area}}}</span>
          {{#if studyType}} · <span data-field="education.{{@index}}.studyType">{{{studyType}}}</span>{{/if}}
        </div>
      </div>
    </div>
    {{/each}}
  </div>
  {{/if}}

  {{#if skills.length}}
  <h2 class="section-title">专业技能</h2>
  <div class="skills-inline" data-section="skills">
    {{#each skills}}
    <span data-entry="skills" data-entry-index="{{@index}}">
      <span data-field="skills.{{@index}}.name">{{{name}}}</span>{{#if level}} <span style="color:#999" data-field="skills.{{@index}}.level">{{{level}}}</span>{{/if}}
    </span>
    {{/each}}
  </div>
  {{/if}}

  {{#if projects.length}}
  <h2 class="section-title">项目经历</h2>
  <div data-section="projects">
    {{#each projects}}
    <div class="entry" data-entry="projects" data-entry-index="{{@index}}">
      <div class="date">
        <span data-field="projects.{{@index}}.startDate">{{{startDate}}}</span> –
        <span data-field="projects.{{@index}}.endDate">{{{endDate}}}</span>
      </div>
      <div>
        <h3><span data-field="projects.{{@index}}.name">{{{name}}}</span>{{#if role}} · <span data-field="projects.{{@index}}.role">{{{role}}}</span>{{/if}}</h3>
        {{#if description}}<div class="sub" data-field="projects.{{@index}}.description">{{{description}}}</div>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li data-field="projects.{{@../index}}.highlights.{{@index}}">{{{this}}}</li>{{/each}}</ul>{{/if}}
      </div>
    </div>
    {{/each}}
  </div>
  {{/if}}
</div>
`,
    css: `* { word-wrap: break-word; overflow-wrap: break-word; }
* { margin: 0; padding: 0; box-sizing: border-box; }

.resume.manifesto {
  max-width: 210mm;
  min-height: 297mm;
  padding: 24mm 20mm 20mm;
  font-family: 'Helvetica Neue', 'Inter', -apple-system, 'PingFang SC', sans-serif;
  font-size: 10pt;
  color: #0a0a0a;
  background: #fff;
  line-height: 1.5;
}

.resume.manifesto .name {
  font-size: 84pt;
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.85;
  margin-bottom: 4pt;
  color: #FF2D6F;
}

.resume.manifesto .role-line {
  font-size: 14pt;
  font-style: italic;
  font-family: Georgia, serif;
  font-weight: 400;
  color: #0a0a0a;
  margin-bottom: 32pt;
  border-bottom: 1px solid #0a0a0a;
  padding-bottom: 18pt;
}

.resume.manifesto .contact-row {
  display: flex;
  gap: 28pt;
  font-size: 8pt;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24pt;
}

.resume.manifesto .section-title {
  font-size: 8pt;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  color: #FF2D6F;
  margin-top: 24pt;
  margin-bottom: 10pt;
  display: flex;
  align-items: baseline;
  gap: 12pt;
}

.resume.manifesto .section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #0a0a0a;
  align-self: center;
}

.resume.manifesto .entry {
  display: grid;
  grid-template-columns: 90pt 1fr;
  gap: 16pt;
  margin-bottom: 14pt;
}

.resume.manifesto .entry .date {
  font-size: 8pt;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #555;
  padding-top: 2pt;
}

.resume.manifesto .entry h3 {
  font-size: 11pt;
  font-weight: 700;
  margin-bottom: 3pt;
}

.resume.manifesto .entry .sub {
  font-style: italic;
  font-family: Georgia, serif;
  font-size: 9.5pt;
  color: #555;
  margin-bottom: 5pt;
}

.resume.manifesto .entry ul {
  margin: 4pt 0 0;
  padding-left: 14pt;
}

.resume.manifesto .entry li {
  font-size: 9.5pt;
  line-height: 1.55;
  margin-bottom: 2pt;
}

.resume.manifesto .skills-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 6pt 14pt;
  font-size: 9.5pt;
}

.resume.manifesto .skills-inline > span::after {
  content: '·';
  margin-left: 14pt;
  color: #aaa;
}

.resume.manifesto .skills-inline > span:last-child::after {
  content: '';
}

.resume.manifesto li p,
.resume.manifesto li div {
  margin: 0;
  padding: 0;
  display: inline;
}

@media print {
  @page { margin: 0; size: A4; }
  .resume.manifesto { padding: 22mm 18mm; }
}
`,
    schema: {
      name: '宣言风格',
      templateId: 'manifesto',
      sections: [
        {
          key: 'basics',
          label: '基本信息',
          type: 'object',
          fields: [
            { key: 'name', label: '姓名', type: 'text' },
            { key: 'title', label: '职位头衔', type: 'text' },
            { key: 'email', label: '邮箱', type: 'text' },
            { key: 'phone', label: '电话', type: 'text' },
            { key: 'location', label: '所在地', type: 'text' },
            { key: 'summary', label: '个人简介', type: 'richtext' },
          ],
        },
        {
          key: 'experience',
          label: '工作经历',
          type: 'array',
          fields: [
            { key: 'company', label: '公司', type: 'text' },
            { key: 'position', label: '职位', type: 'text' },
            { key: 'startDate', label: '开始日期', type: 'date' },
            { key: 'endDate', label: '结束日期', type: 'date' },
            { key: 'highlights', label: '工作亮点', type: 'array', itemType: 'richtext' },
          ],
        },
        {
          key: 'education',
          label: '教育背景',
          type: 'array',
          fields: [
            { key: 'institution', label: '学校', type: 'text' },
            { key: 'area', label: '专业', type: 'text' },
            { key: 'studyType', label: '学历', type: 'select', options: ['专科', '本科', '硕士', '博士'] },
            { key: 'startDate', label: '开始日期', type: 'date' },
            { key: 'endDate', label: '结束日期', type: 'date' },
          ],
        },
        {
          key: 'skills',
          label: '技能',
          type: 'array',
          fields: [
            { key: 'name', label: '技能名称', type: 'text' },
            { key: 'level', label: '掌握程度', type: 'text' },
          ],
        },
        {
          key: 'projects',
          label: '项目经历',
          type: 'array',
          fields: [
            { key: 'name', label: '项目名称', type: 'text' },
            { key: 'role', label: '担任角色', type: 'text' },
            { key: 'startDate', label: '开始日期', type: 'date' },
            { key: 'endDate', label: '结束日期', type: 'date' },
            { key: 'description', label: '项目描述', type: 'richtext' },
            { key: 'highlights', label: '项目亮点', type: 'array', itemType: 'richtext' },
          ],
        },
      ],
    },
  };

export default template;
