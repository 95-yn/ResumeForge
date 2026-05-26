export type TemplateCategory = 'classic' | 'modern' | 'creative' | 'minimal';

export interface Template {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: TemplateCategory;
  html: string;
  css: string;
  schema: import('./resume').TemplateSchema;
  thumbnail: string;
  isPremium: boolean;
  downloads: number;
}
