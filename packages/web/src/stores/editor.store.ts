import { create } from 'zustand';
import type { ResumeData, TemplateSchema } from '@resume/shared';
import { DEFAULT_RESUME_DATA, DEFAULT_SECTION_ORDER } from '@resume/shared';
import { api } from '../api/client';

interface EditorStore {
  mode: 'guest' | 'cloud';
  resumeId: string | null;
  resume: ResumeData | null;
  templateId: string | null;
  templateHtml: string | null;
  templateCss: string | null;
  schema: TemplateSchema | null;
  sectionOrder: string[];
  activeSection: string | null;
  isDirty: boolean;
  saveStatus: 'saved' | 'saving' | 'unsaved';
  history: ResumeData[];
  historyIndex: number;
  zoom: number;

  loadResume: (resumeId: string) => Promise<void>;
  loadTemplate: (templateSlug: string) => Promise<void>;
  updateField: (sectionKey: string, fieldKey: string, value: unknown) => void;
  updateArrayItem: (sectionKey: string, index: number, fieldKey: string, value: unknown) => void;
  addArrayItem: (sectionKey: string) => void;
  removeArrayItem: (sectionKey: string, index: number) => void;
  setActiveSection: (key: string | null) => void;
  reorderSections: (order: string[]) => void;
  updateByPath: (path: string, value: unknown) => void;
  setZoom: (zoom: number) => void;
  undo: () => void;
  redo: () => void;
  save: () => Promise<void>;
}

const GUEST_KEY = 'resumeforge_guest';

function saveToLocal(templateId: string, data: ResumeData, sectionOrder: string[]) {
  try { localStorage.setItem(GUEST_KEY, JSON.stringify({ templateId, data, sectionOrder })); } catch {}
}

function loadFromLocal(): { templateId: string; data: ResumeData; sectionOrder: string[] } | null {
  try {
    const raw = localStorage.getItem(GUEST_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function pushHistory(state: EditorStore, newData: ResumeData): Partial<EditorStore> {
  const history = state.history.slice(0, state.historyIndex + 1);
  history.push(structuredClone(newData));
  if (history.length > 50) history.shift();
  return { history, historyIndex: history.length - 1, resume: newData, isDirty: true, saveStatus: 'unsaved' as const };
}

export const useEditorStore = create<EditorStore>((set, get) => ({
  mode: 'guest', resumeId: null, resume: null, templateId: null, templateHtml: null, templateCss: null, schema: null,
  sectionOrder: [], activeSection: null, isDirty: false, saveStatus: 'saved', history: [], historyIndex: -1, zoom: 1,

  loadResume: async (resumeId) => {
    const { data: resumeRes } = await api.get(`/resumes/${resumeId}`);
    const resume = resumeRes.data;
    const { data: tplRes } = await api.get(`/templates/${resume.templateId}`);
    const tpl = tplRes.data;
    const resumeData = resume.data as ResumeData;
    set({
      mode: 'cloud', resumeId, resume: resumeData, templateId: resume.templateId,
      templateHtml: tpl.html, templateCss: tpl.css, schema: tpl.schema as TemplateSchema,
      sectionOrder: resume.sectionOrder, history: [structuredClone(resumeData)], historyIndex: 0,
      isDirty: false, saveStatus: 'saved',
    });
  },

  loadTemplate: async (templateSlug) => {
    const { data: tplRes } = await api.get(`/templates/${templateSlug}`);
    const tpl = tplRes.data;
    const local = loadFromLocal();
    const resumeData = (local && local.templateId === templateSlug) ? local.data : (DEFAULT_RESUME_DATA as ResumeData);
    const sectionOrder = (local && local.templateId === templateSlug) ? local.sectionOrder : DEFAULT_SECTION_ORDER;
    set({
      mode: 'guest', resumeId: null, resume: resumeData, templateId: templateSlug,
      templateHtml: tpl.html, templateCss: tpl.css, schema: tpl.schema as TemplateSchema,
      sectionOrder, history: [structuredClone(resumeData)], historyIndex: 0,
      isDirty: false, saveStatus: 'saved',
    });
  },

  updateField: (sectionKey, fieldKey, value) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const section = newData[sectionKey] as Record<string, unknown>;
    if (section && typeof section === 'object' && !Array.isArray(section)) section[fieldKey] = value;
    set(pushHistory(state, newData));
  },

  updateArrayItem: (sectionKey, index, fieldKey, value) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const arr = newData[sectionKey] as Record<string, unknown>[];
    if (arr?.[index]) arr[index][fieldKey] = value;
    set(pushHistory(state, newData));
  },

  addArrayItem: (sectionKey) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const arr = newData[sectionKey] as Record<string, unknown>[];
    if (Array.isArray(arr)) {
      const newItem = sectionKey === 'skills' ? { name: '', level: '' }
        : sectionKey === 'experience' ? { company: '', position: '', startDate: '', endDate: '', highlights: [] }
        : sectionKey === 'education' ? { institution: '', area: '', studyType: '', startDate: '', endDate: '' }
        : { name: '', role: '', description: '', highlights: [] };
      arr.push(newItem);
    }
    set(pushHistory(state, newData));
  },

  removeArrayItem: (sectionKey, index) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const arr = newData[sectionKey] as unknown[];
    if (Array.isArray(arr)) arr.splice(index, 1);
    set(pushHistory(state, newData));
  },

  setActiveSection: (key) => set({ activeSection: key }),
  reorderSections: (order) => set({ sectionOrder: order, isDirty: true, saveStatus: 'unsaved' }),
  setZoom: (zoom) => set({ zoom: Math.max(0.5, Math.min(2, zoom)) }),

  updateByPath: (path, value) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const parts = path.split('.');
    let target: any = newData;
    for (let i = 0; i < parts.length - 1; i++) {
      const key = /^\d+$/.test(parts[i]) ? parseInt(parts[i]) : parts[i];
      target = target[key];
      if (target == null) return;
    }
    const lastKey = /^\d+$/.test(parts[parts.length - 1]) ? parseInt(parts[parts.length - 1]) : parts[parts.length - 1];
    target[lastKey] = value;
    set(pushHistory(state, newData));
  },

  undo: () => {
    const state = get();
    if (state.historyIndex <= 0) return;
    const newIndex = state.historyIndex - 1;
    set({ resume: structuredClone(state.history[newIndex]), historyIndex: newIndex, isDirty: true, saveStatus: 'unsaved' });
  },

  redo: () => {
    const state = get();
    if (state.historyIndex >= state.history.length - 1) return;
    const newIndex = state.historyIndex + 1;
    set({ resume: structuredClone(state.history[newIndex]), historyIndex: newIndex, isDirty: true, saveStatus: 'unsaved' });
  },

  save: async () => {
    const state = get();
    if (!state.isDirty || !state.resume) return;
    set({ saveStatus: 'saving' });
    if (state.mode === 'guest' && state.templateId) {
      saveToLocal(state.templateId, state.resume, state.sectionOrder);
    } else if (state.resumeId) {
      await api.patch(`/resumes/${state.resumeId}`, { data: state.resume, sectionOrder: state.sectionOrder });
    }
    set({ isDirty: false, saveStatus: 'saved' });
  },
}));
