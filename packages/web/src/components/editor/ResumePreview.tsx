import { useEffect, useRef, useMemo } from 'react';
import Handlebars from 'handlebars';
import { useEditorStore } from '../../stores/editor.store';

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
})();
`;

export function ResumePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isEditingRef = useRef(false);
  const { resume, templateHtml, templateCss, updateByPath } = useEditorStore();

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

  // Inject editing script after rendering
  useEffect(() => {
    if (isEditingRef.current) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(renderedHtml);
      doc.close();
      // Inject edit script after document is written
      try {
        const scriptEl = doc.createElement('script');
        scriptEl.textContent = EDIT_SCRIPT;
        doc.body.appendChild(scriptEl);
      } catch {}
    }
  }, [renderedHtml]);

  // Listen to postMessage from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type !== 'resume-field-update') return;
      const { field, value } = event.data as { field: string; value: string };
      if (!field) return;
      isEditingRef.current = false;
      updateByPath(field, value);
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [updateByPath]);

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
      <iframe
        ref={iframeRef}
        title="preview"
        style={{
          width: '210mm', height: '297mm', background: '#fff', border: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)', flexShrink: 0, borderRadius: 2,
        }}
      />
    </div>
  );
}
