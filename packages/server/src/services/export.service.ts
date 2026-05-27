import { renderResume } from '@resume/engine';
import { prisma } from '../server';
import { getBrowser } from '../utils/puppeteer-pool';
import { AppError } from '../middleware/error-handler';
import type { ResumeData } from '@resume/shared';

export interface PdfExportOptions {
  format?: 'A4' | 'Letter';
  margin?: { top: string; right: string; bottom: string; left: string };
}

const DEFAULT_MARGIN = { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' };

export async function exportPdf(resumeId: string, userId: string, options: PdfExportOptions = {}) {
  const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');

  let template = await prisma.template.findUnique({ where: { id: resume.templateId } });
  if (!template) template = await prisma.template.findUnique({ where: { slug: resume.templateId } });
  if (!template) throw new AppError(404, '模板不存在', 'TEMPLATE_NOT_FOUND');

  return renderAndExportPdf(template.html, template.css, resume.data as ResumeData, options, resumeId);
}

export async function exportPdfDirect(input: { templateSlug: string; data: ResumeData }, options: PdfExportOptions = {}) {
  const template = await prisma.template.findUnique({ where: { slug: input.templateSlug } });
  if (!template) throw new AppError(404, '模板不存在', 'TEMPLATE_NOT_FOUND');
  return renderAndExportPdf(template.html, template.css, input.data, options);
}

async function renderAndExportPdf(html: string, css: string, data: ResumeData, options: PdfExportOptions, resumeId?: string) {
  const fullHtml = renderResume({ html, css, data });
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    await page.setContent(fullHtml, { waitUntil: 'networkidle0', timeout: 15000 });
    const pdfBuffer = await page.pdf({
      format: options.format ?? 'A4',
      margin: options.margin ?? DEFAULT_MARGIN,
      printBackground: true,
    });
    if (resumeId) {
      await prisma.export.create({
        data: {
          resumeId,
          format: 'pdf',
          status: 'done',
          fileUrl: '',
          fileSize: pdfBuffer.length,
          options: { format: options.format ?? 'A4', margin: options.margin ?? DEFAULT_MARGIN },
        },
      });
    }
    return { buffer: Buffer.from(pdfBuffer), fileSize: pdfBuffer.length };
  } finally {
    await page.close();
  }
}
