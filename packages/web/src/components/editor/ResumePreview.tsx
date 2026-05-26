import { useEffect, useRef, useMemo } from 'react';
import Handlebars from 'handlebars';
import { useEditorStore } from '../../stores/editor.store';

const ARRAY_SECTIONS = ['experience', 'education', 'skills', 'projects'];

const EDIT_SCRIPT = `
(function() {
  var activeEl = null;
  document.querySelectorAll('[data-field]').forEach(function(el) {
    el.style.cursor = 'text';
    el.style.outline = 'none';
    el.style.borderRadius = '2px';
    el.style.transition = 'background 0.15s';
    el.addEventListener('mouseenter', function() {
      if (el !== activeEl) el.style.background = 'rgba(0,0,0,0.04)';
    });
    el.addEventListener('mouseleave', function() {
      if (el !== activeEl) el.style.background = '';
    });
    el.addEventListener('dblclick', function(e) {
      e.stopPropagation();
      if (activeEl && activeEl !== el) {
        activeEl.contentEditable = 'false';
        activeEl.style.background = '';
      }
      activeEl = el;
      el.contentEditable = 'true';
      el.style.background = 'rgba(0,0,0,0.04)';
      el.focus();
    });
    el.addEventListener('blur', function() {
      el.contentEditable = 'false';
      el.style.background = '';
      activeEl = null;
      parent.postMessage({
        type: 'resume-field-update',
        field: el.dataset.field,
        value: el.innerHTML.replace(/<br\\s*\\/?>/g, '\\n').replace(/<[^>]*>/g, '').trim()
      }, '*');
    });
    el.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); el.blur(); }
      if (e.key === 'Escape') { el.blur(); }
    });
  });

  // Listen for scroll-to-section messages from parent
  window.addEventListener('message', function(e) {
    if (!e.data || e.data.type !== 'scroll-to-section') return;
    var key = e.data.sectionKey;
    // Try to find section by data-section attribute or heading text
    var el = document.querySelector('[data-section="' + key + '"]');
    if (!el) {
      // Fallback: look for section elements and match by class or id
      var sections = document.querySelectorAll('section, .section');
      for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        if (s.className && s.className.indexOf(key) !== -1) { el = s; break; }
        if (s.id && s.id.indexOf(key) !== -1) { el = s; break; }
      }
    }
    if (!el) {
      // Last resort: find by data-field prefix on a child
      el = document.querySelector('[data-field^="' + key + '."]');
      if (el) el = el.closest('section') || el.parentElement;
    }
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });

  // Inject add/delete buttons for array sections
  var arraySections = ['experience', 'education', 'skills', 'projects'];
  var sectionLabels = { experience: '经历', education: '教育', skills: '技能', projects: '项目' };

  // Style for add button
  var addBtnCss = 'display:block;width:100%;margin:10px 0 4px;padding:8px 0;border:1.5px dashed #D1D5DB;border-radius:6px;background:transparent;color:#9CA3AF;font-size:13px;cursor:pointer;text-align:center;transition:all 0.15s;';
  var addBtnHoverCss = 'border-color:#6B7280;color:#6B7280;background:rgba(0,0,0,0.02);';

  arraySections.forEach(function(sKey) {
    var sectionEl = document.querySelector('[data-section="' + sKey + '"]');
    if (!sectionEl) return;

    // Add "add" button at the end of the section
    var addBtn = document.createElement('button');
    addBtn.className = '__rf-add-btn';
    addBtn.setAttribute('style', addBtnCss);
    addBtn.textContent = '+ 添加' + (sectionLabels[sKey] || '条目');
    addBtn.addEventListener('mouseenter', function() {
      addBtn.setAttribute('style', addBtnCss + addBtnHoverCss);
    });
    addBtn.addEventListener('mouseleave', function() {
      addBtn.setAttribute('style', addBtnCss);
    });
    addBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      parent.postMessage({ type: 'add-section-item', section: sKey }, '*');
    });
    sectionEl.appendChild(addBtn);

    // Add delete buttons to each entry
    var entries = sectionEl.querySelectorAll('[data-entry="' + sKey + '"]');
    entries.forEach(function(entry) {
      entry.style.position = 'relative';
      var delBtn = document.createElement('button');
      delBtn.className = '__rf-del-btn';
      delBtn.setAttribute('style', 'position:absolute;top:2px;right:2px;width:20px;height:20px;border-radius:50%;border:none;background:rgba(0,0,0,0.08);color:#6B7280;font-size:13px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.15s,background 0.15s;z-index:10;padding:0;');
      delBtn.innerHTML = '&times;';
      delBtn.addEventListener('mouseenter', function() {
        delBtn.style.background = 'rgba(239,68,68,0.15)';
        delBtn.style.color = '#EF4444';
      });
      delBtn.addEventListener('mouseleave', function() {
        delBtn.style.background = 'rgba(0,0,0,0.08)';
        delBtn.style.color = '#6B7280';
      });
      delBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var idx = parseInt(entry.getAttribute('data-entry-index'), 10);
        parent.postMessage({ type: 'remove-section-item', section: sKey, index: idx }, '*');
      });
      entry.appendChild(delBtn);

      entry.addEventListener('mouseenter', function() {
        delBtn.style.opacity = '1';
      });
      entry.addEventListener('mouseleave', function() {
        delBtn.style.opacity = '0';
      });
    });
  });

  // Hide injected buttons when printing
  var printStyle = document.createElement('style');
  printStyle.textContent = '@media print { .__rf-add-btn, .__rf-del-btn { display: none !important; } }';
  document.head.appendChild(printStyle);
})();
`;

export function ResumePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isEditingRef = useRef(false);
  const { resume, templateHtml, templateCss, updateByPath, zoom, sectionOrder, addArrayItem, removeArrayItem } = useEditorStore();

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
      return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><style>${templateCss}</style></head><body style="margin:0">${body}</body></html>`;
    } catch { return '<html><body><p style="color:red;padding:20px">模板渲染错误</p></body></html>'; }
  }, [resume, templateHtml, templateCss, isEmpty]);

  // Reorder sections in the rendered HTML based on sectionOrder
  const reorderedHtml = useMemo(() => {
    if (!renderedHtml || isEmpty) return renderedHtml;
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(renderedHtml, 'text/html');
      // Find all elements with data-section
      const allSections = doc.querySelectorAll('[data-section]');
      if (allSections.length === 0) return renderedHtml;

      // Group sections by their parent container
      const parentMap = new Map<Element, Map<string, Element>>();
      allSections.forEach(el => {
        const parent = el.parentElement;
        if (!parent) return;
        if (!parentMap.has(parent)) parentMap.set(parent, new Map());
        parentMap.get(parent)!.set(el.getAttribute('data-section')!, el);
      });

      // For each container, reorder its section children according to sectionOrder
      // Only reorder draggable sections (not basics)
      const draggableOrder = sectionOrder.filter(k => k !== 'basics');
      parentMap.forEach((sectionsMap, container) => {
        draggableOrder.forEach(key => {
          const el = sectionsMap.get(key);
          if (el) container.appendChild(el); // appendChild moves existing element to end
        });
      });

      return '<!DOCTYPE html>' + doc.documentElement.outerHTML;
    } catch {
      return renderedHtml;
    }
  }, [renderedHtml, isEmpty, sectionOrder]);

  // Inject editing script after rendering
  useEffect(() => {
    if (isEditingRef.current) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(reorderedHtml);
      doc.close();
      // Inject edit script after document is written
      try {
        const scriptEl = doc.createElement('script');
        scriptEl.textContent = EDIT_SCRIPT;
        doc.body.appendChild(scriptEl);
      } catch {}
    }
  }, [reorderedHtml]);

  // Listen to postMessage from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data?.type) return;

      if (event.data.type === 'resume-field-update') {
        const { field, value } = event.data as { field: string; value: string };
        if (!field) return;
        isEditingRef.current = false;
        updateByPath(field, value);
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

  // Mark as editing when iframe gets a dblclick (prevents re-render mid-edit)
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const handleLoad = () => {
      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) return;
      iframeDoc.addEventListener('dblclick', () => {
        isEditingRef.current = true;
      });
    };
    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div style={{
      flex: 1, background: '#e8e8e8', display: 'flex', justifyContent: 'center',
      alignItems: 'flex-start', padding: 24, overflowY: 'auto', height: '100%',
    }}>
      <div style={{
        transformOrigin: 'top center',
        transform: `scale(${zoom})`,
        flexShrink: 0,
        // Adjust the layout flow so that zoom doesn't push content outside scroll
        marginBottom: zoom < 1 ? `calc(297mm * ${zoom} - 297mm)` : `calc(297mm * ${zoom} - 297mm)`,
      }}>
        <iframe
          ref={iframeRef}
          title="preview"
          style={{
            width: '210mm', height: '297mm', background: '#fff', border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)', display: 'block', borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}
