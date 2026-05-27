export type TemplateCategory = 'business' | 'creative' | 'minimal' | 'tech';

export interface Template {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: TemplateCategory;
  industry?: string;
  html: string;
  css: string;
  schema: import('./resume').TemplateSchema;
  thumbnail: string;
  isPremium: boolean;
  isBuiltin: boolean;
  downloads: number;
  version: string;
}
