'use client';

import { create } from 'zustand';
import type { ResumeData } from '@/data/types';
import { DEFAULT_RESUME_DATA, DEFAULT_SECTION_ORDER } from '@/data/defaults';

// Profession Chinese name → file slug mapping
const PROFESSION_SLUG_MAP: Record<string, string> = {
  'IT互联网': 'it',
  '金融财会': 'finance',
  '设计创意': 'design',
  '教育学术': 'education',
  '市场营销': 'marketing',
  '医疗健康': 'medical',
  '产品运营': 'product',
  '人力行政': 'hr',
  '法律合规': 'legal',
  '校招': 'campus',
};

interface EditorStore {
  resume: ResumeData | null;
  templateId: string | null;
  templateHtml: string | null;
  templateCss: string | null;
  templateNotFound: boolean;
  currentProfession: string | null;
  sectionOrder: string[];
  activeSection: string | null;
  isDirty: boolean;
  saveStatus: 'saved' | 'saving' | 'unsaved' | 'error';
  saveErrorMessage: string | null;
  history: ResumeData[];
  historyIndex: number;
  zoom: number;

  loadTemplate: (templateSlug: string, profession?: string) => Promise<void>;
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
  resetToDefault: () => Promise<void>;
  undo: () => void;
  redo: () => void;
  save: () => void;
  clearSaveError: () => void;
}

const GUEST_KEY_PREFIX = 'resumeforge_guest_';

function saveToLocal(templateId: string, data: ResumeData, sectionOrder: string[]): 'ok' | 'quota' {
  try {
    localStorage.setItem(GUEST_KEY_PREFIX + templateId, JSON.stringify({ data, sectionOrder }));
    return 'ok';
  } catch (err) {
    if (err instanceof DOMException && (
      err.name === 'QuotaExceededError' || err.name === 'NS_ERROR_DOM_QUOTA_REACHED'
    )) return 'quota';
    return 'quota';
  }
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

// Race-condition guard: incremented on every loadTemplate call
let loadCounter = 0;

export const useEditorStore = create<EditorStore>((set, get) => ({
  resume: null, templateId: null, templateHtml: null, templateCss: null,
  templateNotFound: false,
  currentProfession: null,
  sectionOrder: [], activeSection: null, isDirty: false, saveStatus: 'saved',
  saveErrorMessage: null,
  history: [], historyIndex: -1, zoom: 1,

  loadTemplate: async (templateSlug, profession) => {
    // Race-condition guard: tag this load attempt, abort if a newer one starts
    const loadId = ++loadCounter;

    // Dynamic import: only fetch the one template needed
    let tpl: { html: string; css: string };
    try {
      const mod = await import(`@/data/templates/${templateSlug}`);
      tpl = mod.default;
    } catch {
      console.warn(`Template not found: ${templateSlug}`);
      if (loadCounter !== loadId) return; // superseded
      set({ templateNotFound: true });
      return;
    }

    if (loadCounter !== loadId) return; // superseded by a newer loadTemplate call
    set({ templateNotFound: false });

    // Dynamic import of profession default data (lazy)
    let resumeData: ResumeData;
    const local = loadFromLocal(templateSlug);
    if (local) {
      resumeData = local.data;
    } else if (profession && PROFESSION_SLUG_MAP[profession]) {
      try {
        const profMod = await import(`@/data/profession-defaults/${PROFESSION_SLUG_MAP[profession]}`);
        resumeData = profMod.default as ResumeData;
      } catch {
        resumeData = structuredClone(DEFAULT_RESUME_DATA) as ResumeData;
      }
    } else {
      resumeData = structuredClone(DEFAULT_RESUME_DATA) as ResumeData;
    }

    if (loadCounter !== loadId) return; // superseded

    const sectionOrder: string[] = local ? local.sectionOrder : DEFAULT_SECTION_ORDER;

    set({
      resume: resumeData, templateId: templateSlug,
      templateHtml: tpl.html, templateCss: tpl.css,
      currentProfession: profession ?? null,
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

  resetToDefault: async () => {
    // Restore the *initial* template state — same data the user saw on first load.
    // Uses currentProfession to fetch the right profession-default; falls back to
    // DEFAULT_RESUME_DATA (通用) if no profession or import fails.
    const { currentProfession, templateId } = get();
    let resumeData: ResumeData;
    if (currentProfession && PROFESSION_SLUG_MAP[currentProfession]) {
      try {
        const profMod = await import(`@/data/profession-defaults/${PROFESSION_SLUG_MAP[currentProfession]}`);
        resumeData = structuredClone(profMod.default) as ResumeData;
      } catch {
        resumeData = structuredClone(DEFAULT_RESUME_DATA) as ResumeData;
      }
    } else {
      resumeData = structuredClone(DEFAULT_RESUME_DATA) as ResumeData;
    }
    // Clear localStorage so next reload also picks up the default
    if (templateId) {
      try { localStorage.removeItem(GUEST_KEY_PREFIX + templateId); } catch { /* ignore */ }
    }
    set({
      resume: resumeData,
      sectionOrder: [...DEFAULT_SECTION_ORDER],
      history: [structuredClone(resumeData)],
      historyIndex: 0,
      isDirty: false,
      saveStatus: 'saved',
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
    if (!state.isDirty || !state.resume) {
      // Even if not dirty, show saved toast for explicit Cmd+S
      if (!state.isDirty) set({ saveStatus: 'saved' });
      return;
    }
    set({ saveStatus: 'saving' });
    if (state.templateId) {
      const result = saveToLocal(state.templateId, state.resume, state.sectionOrder);
      if (result === 'quota') {
        set({ saveStatus: 'error', saveErrorMessage: '存储空间不足，请清理浏览器数据后重试' });
        return;
      }
    }
    set({ isDirty: false, saveStatus: 'saved', saveErrorMessage: null });
  },

  clearSaveError: () => set({ saveStatus: 'unsaved', saveErrorMessage: null }),
}));
