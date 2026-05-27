import { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import Handlebars from 'handlebars';
import { useEditorStore } from '../../stores/editor.store';
import { FloatingEditor } from './FloatingEditor';

const ARRAY_SECTIONS = ['experience', 'education', 'skills', 'projects'];

// EDIT_SCRIPT injected into the iframe.
// Responsibilities:
//   - hover highlight
//   - click → send field-clicked postMessage (no contentEditable)
//   - Tab/Enter/Escape keydown → postMessage to parent
//   - scroll-to-section listener
// Does NOT inject add/delete buttons. Preview is clean.
const EDIT_SCRIPT = `
(function() {
  var activeEl = null;
  var allFields = Array.from(document.querySelectorAll('[data-field]'));

  allFields.forEach(function(el, idx) {
    el.style.cursor = 'text';
    el.style.outline = 'none';
    el.style.borderRadius = '2px';
    el.style.transition = 'background 0.12s, box-shadow 0.12s';

    el.addEventListener('mouseenter', function() {
      if (el !== activeEl) {
        el.style.background = 'rgba(28,25,23,0.05)';
        el.style.boxShadow = '';
      }
    });
    el.addEventListener('mouseleave', function() {
      if (el !== activeEl) {
        el.style.background = '';
        el.style.boxShadow = '';
      }
    });

    el.addEventListener('click', function(e) {
      e.stopPropagation();
      // Clear previous active highlight
      if (activeEl && activeEl !== el) {
        activeEl.style.background = '';
        activeEl.style.boxShadow = '';
      }
      activeEl = el;
      el.style.background = 'rgba(28,25,23,0.08)';
      el.style.boxShadow = 'inset 0 0 0 1.5px rgba(28,25,23,0.2)';
      // Notify parent
      var rect = el.getBoundingClientRect();
      parent.postMessage({
        type: 'field-clicked',
        field: el.dataset.field,
        value: el.textContent.trim(),
        rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
      }, '*');
      parent.postMessage({ type: 'editing-started' }, '*');
    });

    el.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        parent.postMessage({ type: 'field-keydown', key: 'Escape' }, '*');
        // Clear active highlight
        if (activeEl) {
          activeEl.style.background = '';
          activeEl.style.boxShadow = '';
          activeEl = null;
        }
        return;
      }
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        parent.postMessage({ type: 'field-keydown', key: 'Enter', idx: idx, total: allFields.length }, '*');
        return;
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        var nextIdx = e.shiftKey ? idx - 1 : idx + 1;
        parent.postMessage({ type: 'field-keydown', key: 'Tab', idx: nextIdx, total: allFields.length }, '*');
      }
    });
  });

  // Click blank area: clear active highlight
  document.addEventListener('click', function(e) {
    if (activeEl && !e.target.closest('[data-field]')) {
      activeEl.style.background = '';
      activeEl.style.boxShadow = '';
      activeEl = null;
      parent.postMessage({ type: 'field-blur' }, '*');
    }
  });

  // Listen for scroll-to-section messages from parent
  window.addEventListener('message', function(e) {
    if (!e.data || e.data.type !== 'scroll-to-section') return;
    var key = e.data.sectionKey;
    var el = document.querySelector('[data-section="' + key + '"]');
    if (!el) {
      var sections = document.querySelectorAll('section, .section');
      for (var i = 0; i \x3c sections.length; i++) {
        var s = sections[i];
        if (s.className && s.className.indexOf(key) !== -1) { el = s; break; }
        if (s.id && s.id.indexOf(key) !== -1) { el = s; break; }
      }
    }
    if (!el) {
      el = document.querySelector('[data-field^="' + key + '."]');
      if (el) el = el.closest('section') || el.parentElement;
    }
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });

  // Listen for clear-active message from parent (when editor closes)
  window.addEventListener('message', function(e) {
    if (!e.data || e.data.type !== 'clear-active-field') return;
    if (activeEl) {
      activeEl.style.background = '';
      activeEl.style.boxShadow = '';
      activeEl = null;
    }
  });
})();
`;

interface EditingField {
  field: string;
  value: string;
  rect: { top: number; left: number; width: number; height: number };
}

export function ResumePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isEditingRef = useRef(false);
  const { resume, templateHtml, templateCss, updateByPath, zoom, sectionOrder, addArrayItem, removeArrayItem } = useEditorStore();
  const [editingField, setEditingField] = useState<EditingField | null>(null);
  const [iframeRect, setIframeRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const isEmpty = !resume?.basics?.name && !resume?.basics?.email;

  const renderedHtml = useMemo(() => {
    if (!templateHtml || !templateCss || !resume) return '';
    if (isEmpty) {
      return `<!DOCTYPE html><html><head><style>
        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 297mm; font-family: -apple-system, sans-serif; background: #fff; }
        .placeholder { text-align: center; color: #bbb; }
        .placeholder h2 { font-size: 20px; font-weight: 400; margin-bottom: 8px; }
        .placeholder p { font-size: 14px; }
      </style></head><body><div class="placeholder"><h2>点击左侧模块开始编辑</h2><p>填写信息后这里会实时预览简历效果</p></div></body></html>`;
    }
    try {
      const template = Handlebars.compile(templateHtml);
      const body = template(resume);
      const bgColor = resume.settings?.backgroundColor || '#ffffff';
      return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><style>${templateCss}</style></head><body style="margin:0;background:${bgColor}">${body}</body></html>`;
    } catch { return '<html><body><p style="color:red;padding:20px">模板渲染错误</p></body></html>'; }
  }, [resume, templateHtml, templateCss, isEmpty]);

  // Reorder sections in the rendered HTML based on sectionOrder
  const reorderedHtml = useMemo(() => {
    if (!renderedHtml || isEmpty) return renderedHtml;
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(renderedHtml, 'text/html');
      const allSections = doc.querySelectorAll('[data-section]');
      if (allSections.length === 0) return renderedHtml;

      const parentMap = new Map<Element, Map<string, Element>>();
      allSections.forEach(el => {
        const parent = el.parentElement;
        if (!parent) return;
        if (!parentMap.has(parent)) parentMap.set(parent, new Map());
        parentMap.get(parent)!.set(el.getAttribute('data-section')!, el);
      });

      const draggableOrder = sectionOrder.filter(k => k !== 'basics');
      parentMap.forEach((sectionsMap, container) => {
        draggableOrder.forEach(key => {
          const el = sectionsMap.get(key);
          if (el) container.appendChild(el);
        });
      });

      return '<!DOCTYPE html>' + doc.documentElement.outerHTML;
    } catch {
      return renderedHtml;
    }
  }, [renderedHtml, isEmpty, sectionOrder]);

  const finalHtml = useMemo(() => {
    if (!reorderedHtml || isEmpty) return reorderedHtml;
    return reorderedHtml.replace('</body>', `<script>${EDIT_SCRIPT}<\/script></body>`);
  }, [reorderedHtml, isEmpty]);

  useEffect(() => {
    if (editingField) return;
    if (iframeRef.current) {
      iframeRef.current.srcdoc = finalHtml;
    }
  }, [finalHtml, editingField]);

  const handleConfirm = useCallback((field: string, value: string) => {
    isEditingRef.current = false;
    updateByPath(field, value);
    setEditingField(null);
    // Clear iframe active highlight
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'clear-active-field' }, '*');
    }
  }, [updateByPath]);

  const handleCancel = useCallback(() => {
    isEditingRef.current = false;
    setEditingField(null);
    // Clear iframe active highlight
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'clear-active-field' }, '*');
    }
  }, []);

  // Listen to postMessage from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data?.type) return;

      if (event.data.type === 'editing-started') {
        return;
      }

      if (event.data.type === 'field-clicked') {
        const { field, rect } = event.data as {
          field: string; value: string;
          rect: { top: number; left: number; width: number; height: number };
        };
        if (!field) return;
        // 从 store 取最新值而非 iframe DOM
        const currentResume = useEditorStore.getState().resume;
        let storeValue = '';
        if (currentResume) {
          const parts = field.split('.');
          let target: unknown = currentResume;
          for (const p of parts) {
            if (target == null) break;
            target = (target as Record<string, unknown>)[/^\d+$/.test(p) ? parseInt(p) : p];
          }
          storeValue = typeof target === 'string' ? target : '';
        }
        if (iframeRef.current) {
          const ir = iframeRef.current.getBoundingClientRect();
          setIframeRect({ top: ir.top, left: ir.left, width: ir.width, height: ir.height });
        }
        setEditingField({ field, value: storeValue, rect });
        return;
      }

      if (event.data.type === 'field-blur') {
        // Blank area clicked in iframe, close editor
        setEditingField(null);
        isEditingRef.current = false;
        return;
      }

      if (event.data.type === 'field-keydown') {
        const { key } = event.data as { key: string };
        if (key === 'Escape') {
          setEditingField(null);
          isEditingRef.current = false;
        }
        return;
      }

      if (event.data.type === 'add-section-item') {
        const { section } = event.data as { section: string };
        if (section && ARRAY_SECTIONS.includes(section)) {
          addArrayItem(section);
        }
        return;
      }

      if (event.data.type === 'remove-section-item') {
        const { section, index } = event.data as { section: string; index: number };
        if (section && ARRAY_SECTIONS.includes(section) && typeof index === 'number') {
          removeArrayItem(section, index);
        }
        return;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [updateByPath, addArrayItem, removeArrayItem]);

  return (
    <div style={{
      flex: 1, background: '#F5F5F4', display: 'flex', justifyContent: 'center',
      alignItems: 'flex-start', padding: 28, overflowY: 'auto', height: '100%',
      position: 'relative',
    }}>
      <div style={{
        transformOrigin: 'top center',
        transform: `scale(${zoom})`,
        flexShrink: 0,
        marginBottom: zoom < 1 ? `calc(297mm * ${zoom} - 297mm)` : `calc(297mm * ${zoom} - 297mm)`,
      }}>
        <iframe
          ref={iframeRef}
          title="preview"
          style={{
            width: '210mm', height: '297mm', background: '#fff', border: 'none',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 2px 10px rgba(0,0,0,0.04)',
            display: 'block', borderRadius: 3,
          }}
        />
      </div>

      {/* FloatingEditor rendered outside the scaled div, in fixed positioning */}
      {editingField && (
        <FloatingEditor
          editingField={editingField}
          iframeRect={iframeRect}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
