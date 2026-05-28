'use client';

import { create } from 'zustand';
import type { ResumeData } from '@/data/types';
import { DEFAULT_RESUME_DATA, DEFAULT_SECTION_ORDER, PROFESSION_RESUME_DATA } from '@/data/defaults';
import { TEMPLATES } from '@/data/templates';

interface EditorStore {
  resume: ResumeData | null;
  templateId: string | null;
  templateHtml: string | null;
  templateCss: string | null;
  sectionOrder: string[];
  activeSection: string | null;
  isDirty: boolean;
  saveStatus: 'saved' | 'saving' | 'unsaved';
  history: ResumeData[];
  historyIndex: number;
  zoom: number;

  loadTemplate: (templateSlug: string, profession?: string) => void;
  updateField: (sectionKey: string, fieldKey: string, value: unknown) => void;
  updateArrayItem: (sectionKey: string, index: number, fieldKey: string, value: unknown) => void;
  addArrayItem: (sectionKey: string) => void;
  removeArrayItem: (sectionKey: string, index: number) => void;
  addCustomSection: (key: string) => void;
  removeSection: (key: string) => void;
  setActiveSection: (key: string | null) => void;
  reorderSections: (order: string[]) => void;
  updateByPath: (path: string, value: unknown) => void;
  updateSettings: (key: string, value: unknown) => void;
  setZoom: (zoom: number) => void;
  resetToDefault: () => void;
  undo: () => void;
  redo: () => void;
  save: () => void;
}

const GUEST_KEY_PREFIX = 'resumeforge_guest_';

function saveToLocal(templateId: string, data: ResumeData, sectionOrder: string[]) {
  try { localStorage.setItem(GUEST_KEY_PREFIX + templateId, JSON.stringify({ data, sectionOrder })); } catch {}
}

function loadFromLocal(templateId: string): { data: ResumeData; sectionOrder: string[] } | null {
  try {
    const raw = localStorage.getItem(GUEST_KEY_PREFIX + templateId);
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
  resume: null, templateId: null, templateHtml: null, templateCss: null,
  sectionOrder: [], activeSection: null, isDirty: false, saveStatus: 'saved',
  history: [], historyIndex: -1, zoom: 1,

  loadTemplate: (templateSlug, profession) => {
    // Find template from local data (no API call)
    const tpl = TEMPLATES.find(t => t.slug === templateSlug);
    if (!tpl) {
      console.warn(`Template not found: ${templateSlug}`);
      return;
    }

    const local = loadFromLocal(templateSlug);
    const resumeData: ResumeData = local
      ? local.data
      : ((PROFESSION_RESUME_DATA[profession || '通用'] || DEFAULT_RESUME_DATA) as ResumeData);
    const sectionOrder: string[] = local ? local.sectionOrder : DEFAULT_SECTION_ORDER;

    set({
      resume: resumeData, templateId: templateSlug,
      templateHtml: tpl.html, templateCss: tpl.css,
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
      const newItem = sectionKey === 'skills'
        ? { name: '新技能', level: '熟悉' }
        : sectionKey === 'experience'
        ? { company: '公司名称', position: '职位名称', startDate: '2024-01', endDate: '至今', highlights: ['工作内容描述'] }
        : sectionKey === 'education'
        ? { institution: '学校名称', area: '专业', studyType: '本科', startDate: '2020-09', endDate: '2024-06' }
        : { name: '项目名称', role: '担任角色', startDate: '2024-01', endDate: '至今', description: '项目简介', highlights: ['项目亮点'] };
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

  addCustomSection: (key) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    if (!(key in newData)) newData[key] = [];
    const newOrder = state.sectionOrder.includes(key) ? state.sectionOrder : [...state.sectionOrder, key];
    set({ ...pushHistory(state, newData), sectionOrder: newOrder });
  },

  removeSection: (key) => {
    const state = get();
    const newOrder = state.sectionOrder.filter(k => k !== key);
    set({ sectionOrder: newOrder, isDirty: true, saveStatus: 'unsaved' });
  },

  setActiveSection: (key) => set({ activeSection: key }),
  reorderSections: (order) => set({ sectionOrder: order, isDirty: true, saveStatus: 'unsaved' }),
  setZoom: (zoom) => set({ zoom: Math.max(0.5, Math.min(2, zoom)) }),

  updateSettings: (key, value) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    if (!newData.settings) newData.settings = {};
    (newData.settings as Record<string, unknown>)[key] = value;
    set(pushHistory(state, newData));
  },

  resetToDefault: () => {
    const resumeData = structuredClone(DEFAULT_RESUME_DATA) as ResumeData;
    set({
      resume: resumeData,
      sectionOrder: [...DEFAULT_SECTION_ORDER],
      history: [structuredClone(resumeData)],
      historyIndex: 0,
      isDirty: true,
      saveStatus: 'unsaved',
    });
  },

  updateByPath: (path, value) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const parts = path.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  save: () => {
    const state = get();
    if (!state.isDirty || !state.resume) return;
    set({ saveStatus: 'saving' });
    if (state.templateId) {
      saveToLocal(state.templateId, state.resume, state.sectionOrder);
    }
    set({ isDirty: false, saveStatus: 'saved' });
  },
}));
