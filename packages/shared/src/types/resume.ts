export type FieldType = 'text' | 'email' | 'tel' | 'date' | 'select' | 'image' | 'richtext' | 'array:text';

export interface FieldSchema {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
}

export interface SectionSchema {
  key: string;
  label: string;
  type?: 'array';
  fields: FieldSchema[];
}

export interface TemplateSchema {
  templateId: string;
  version: string;
  name: string;
  sections: SectionSchema[];
}

export interface ResumeData {
  basics: {
    name: string;
    title?: string;
    email: string;
    phone?: string;
    location?: string;
    avatar?: string;
    summary?: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate?: string;
    endDate?: string;
    highlights: string[];
  }>;
  education: Array<{
    institution: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
  }>;
  skills: Array<{
    name: string;
    level?: string;
  }>;
  projects: Array<{
    name: string;
    role?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    highlights: string[];
  }>;
  [key: string]: unknown;
}
