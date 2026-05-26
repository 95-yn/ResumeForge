import Handlebars from 'handlebars';
import type { ResumeData } from '@resume/shared';

export interface RenderOptions {
  html: string;
  css: string;
  data: ResumeData;
}

export function renderResume({ html, css, data }: RenderOptions): string {
  const template = Handlebars.compile(html);
  const body = template(data);
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${css}</style>
</head>
<body>${body}</body>
</html>`;
}
