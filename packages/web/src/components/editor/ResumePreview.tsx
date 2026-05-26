import { useEffect, useRef, useMemo } from 'react';
import Handlebars from 'handlebars';
import { useEditorStore } from '../../stores/editor.store';

export function ResumePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { resume, templateHtml, templateCss } = useEditorStore();

  const renderedHtml = useMemo(() => {
    if (!templateHtml || !templateCss || !resume) return '';
    try {
      const template = Handlebars.compile(templateHtml);
      const body = template(resume);
      return `<!DOCTYPE html><html><head><style>${templateCss}</style></head><body>${body}</body></html>`;
    } catch { return '<html><body><p style="color:red">模板渲染错误</p></body></html>'; }
  }, [resume, templateHtml, templateCss]);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) { doc.open(); doc.write(renderedHtml); doc.close(); }
    }
  }, [renderedHtml]);

  return (
    <div style={{ flex: 1, background: '#f0f0f0', display: 'flex', justifyContent: 'center', padding: 24, overflowY: 'auto' }}>
      <iframe ref={iframeRef} title="preview" style={{ width: '210mm', minHeight: '297mm', background: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
    </div>
  );
}
