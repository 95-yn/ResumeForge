import type { ResumeData, TemplateSchema, SectionSchema } from '@resume/shared';

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export function validateResumeData(data: ResumeData, schema: TemplateSchema): ValidationResult {
  const errors: ValidationError[] = [];
  for (const section of schema.sections) {
    if (section.type === 'array') {
      validateArraySection(data, section, errors);
    } else {
      validateObjectSection(data, section, errors);
    }
  }
  return { valid: errors.length === 0, errors };
}

function validateObjectSection(data: ResumeData, section: SectionSchema, errors: ValidationError[]): void {
  const sectionData = data[section.key] as Record<string, unknown> | undefined;
  for (const field of section.fields) {
    if (!field.required) continue;
    const value = sectionData?.[field.key];
    if (value === undefined || value === null || value === '') {
      errors.push({ field: `${section.key}.${field.key}`, message: `${field.label}不能为空` });
    }
  }
}

function validateArraySection(data: ResumeData, section: SectionSchema, errors: ValidationError[]): void {
  const items = data[section.key] as Record<string, unknown>[] | undefined;
  if (!items || !Array.isArray(items)) return;
  items.forEach((item, index) => {
    for (const field of section.fields) {
      if (!field.required) continue;
      const value = item[field.key];
      if (value === undefined || value === null || value === '') {
        errors.push({ field: `${section.key}[${index}].${field.key}`, message: `${field.label}不能为空` });
      }
    }
  });
}
