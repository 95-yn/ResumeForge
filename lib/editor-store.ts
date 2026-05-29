'use client';

import { create } from 'zustand';
import type { ResumeData } from '@/data/types';
import { DEFAULT_RESUME_DATA, DEFAULT_SECTION_ORDER } from '@/data/defaults';

// 撤销/重做快照：同时记录文档数据与模块顺序，
// 这样删除/重排模块也能被 Cmd+Z 还原（此前 history 只存 data，结构变动丢失）。
interface HistorySnapshot {
  data: ResumeData;
  order: string[];
}

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

export interface Toast {
  id: string;
  message: string;
  type: 'info' | 'error' | 'success';
}

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
  history: HistorySnapshot[];
  historyIndex: number;
  zoom: number;
  toasts: Toast[];

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
  pushToast: (message: string, type?: 'info' | 'error' | 'success') => void;
  dismissToast: (id: string) => void;
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

function pushHistory(state: EditorStore, newData: ResumeData, newOrder?: string[]): Partial<EditorStore> {
  const order = newOrder ?? state.sectionOrder;
  const history = state.history.slice(0, state.historyIndex + 1);
  history.push({ data: structuredClone(newData), order: [...order] });
  if (history.length > 50) history.shift();
  return {
    history,
    historyIndex: history.length - 1,
    resume: newData,
    sectionOrder: order,
    isDirty: true,
    saveStatus: 'unsaved' as const,
  };
}

// 按模板 HTML 里 data-section 的出现顺序推导初始模块顺序，使每套模板按自带顺序打开
// （如校招模板教育/项目优先）。basics 永远在最前；模板未显式出现的用默认顺序补齐。
function sectionOrderFromTemplate(html: string | null | undefined): string[] {
  const order: string[] = ['basics'];
  if (html) {
    const re = /data-section="([^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      if (!order.includes(m[1])) order.push(m[1]);
    }
  }
  for (const k of DEFAULT_SECTION_ORDER) if (!order.includes(k)) order.push(k);
  return order;
}

// Race-condition guard: incremented on every loadTemplate call
let loadCounter = 0;

export const useEditorStore = create<EditorStore>((set, get) => ({
  resume: null, templateId: null, templateHtml: null, templateCss: null,
  templateNotFound: false,
  currentProfession: null,
  sectionOrder: [], activeSection: null, isDirty: false, saveStatus: 'saved',
  saveErrorMessage: null,
  history: [], historyIndex: -1, zoom: 1, toasts: [],

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

    // 无本地存档时，按模板自带的模块顺序打开（而非一刀切的 DEFAULT 顺序）
    const sectionOrder: string[] = local ? local.sectionOrder : sectionOrderFromTemplate(tpl.html);

    set({
      resume: resumeData, templateId: templateSlug,
      templateHtml: tpl.html, templateCss: tpl.css,
      currentProfession: profession ?? null,
      sectionOrder, history: [{ data: structuredClone(resumeData), order: [...sectionOrder] }], historyIndex: 0,
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
    set(pushHistory(state, newData, newOrder));
  },

  removeSection: (key) => {
    const state = get();
    if (!state.resume) return;
    const newOrder = state.sectionOrder.filter(k => k !== key);
    // 经由 pushHistory 记录结构变动，使删除可被 Cmd+Z 还原
    set(pushHistory(state, state.resume, newOrder));
  },

  setActiveSection: (key) => set({ activeSection: key }),
  reorderSections: (order) => {
    const state = get();
    if (!state.resume) return;
    // 重排同样进 history，撤销可回到上一次顺序
    set(pushHistory(state, state.resume, order));
  },
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
    const { currentProfession, templateId, templateHtml } = get();
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
    // 还原也回到模板自带的模块顺序（与 loadTemplate 一致）
    const resetOrder = sectionOrderFromTemplate(templateHtml);
    set({
      resume: resumeData,
      sectionOrder: resetOrder,
      history: [{ data: structuredClone(resumeData), order: [...resetOrder] }],
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
    const snap = state.history[newIndex];
    set({ resume: structuredClone(snap.data), sectionOrder: [...snap.order], historyIndex: newIndex, isDirty: true, saveStatus: 'unsaved' });
  },

  redo: () => {
    const state = get();
    if (state.historyIndex >= state.history.length - 1) return;
    const newIndex = state.historyIndex + 1;
    const snap = state.history[newIndex];
    set({ resume: structuredClone(snap.data), sectionOrder: [...snap.order], historyIndex: newIndex, isDirty: true, saveStatus: 'unsaved' });
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

  pushToast: (message, type = 'info') => {
    const id = `toast_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    // 去重：同文案同类型的 toast 不堆叠（如反复保存只刷新同一条）。
    set(s => ({ toasts: [...s.toasts.filter(t => !(t.message === message && t.type === type)), { id, message, type }] }));
    // Auto-dismiss after 4s
    setTimeout(() => {
      set(s => ({ toasts: s.toasts.filter(t => t.id !== id) }));
    }, 4000);
  },

  dismissToast: (id) => set(s => ({ toasts: s.toasts.filter(t => t.id !== id) })),
}));

// 开发期调试钩子：把 store 暴露到 window，便于 e2e 直接驱动 reducer（生产环境不挂载）。
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  (window as unknown as { __editorStore?: typeof useEditorStore }).__editorStore = useEditorStore;
}
