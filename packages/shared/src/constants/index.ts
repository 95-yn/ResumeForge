export const FIELD_TYPES = ['text', 'email', 'tel', 'date', 'select', 'image', 'richtext', 'array:text'] as const;
export const TEMPLATE_CATEGORIES = ['classic', 'modern', 'creative', 'minimal'] as const;
export const DEFAULT_SECTION_ORDER = ['basics', 'experience', 'education', 'skills', 'projects'];
export const DEFAULT_RESUME_DATA = {
  basics: { name: '', email: '' },
  experience: [],
  education: [],
  skills: [],
  projects: [],
};
