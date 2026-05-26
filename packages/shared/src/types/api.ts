import type { ResumeData } from './resume';
import type { Template } from './template';
import type { User, AuthTokens } from './user';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  message: string;
  code: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface RegisterRequest {
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
}

export interface LoginRequest {
  email?: string;
  phone?: string;
  password?: string;
  code?: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

export interface CreateResumeRequest {
  title?: string;
  templateId: string;
  data?: Partial<ResumeData>;
}

export interface UpdateResumeRequest {
  title?: string;
  templateId?: string;
  data?: Partial<ResumeData>;
  sectionOrder?: string[];
}

export interface ResumeResponse {
  id: string;
  title: string;
  templateId: string;
  data: ResumeData;
  sectionOrder: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ExportPdfRequest {
  format?: 'A4' | 'Letter';
  margin?: { top: string; right: string; bottom: string; left: string };
}

export interface ExportResponse {
  id: string;
  fileUrl: string;
  fileSize: number;
}

export interface TemplateListQuery {
  category?: string;
  page?: number;
  pageSize?: number;
}
