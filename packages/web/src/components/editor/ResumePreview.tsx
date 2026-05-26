import { useEffect, useRef, useMemo } from 'react';
import Handlebars from 'handlebars';
import { useEditorStore } from '../../stores/editor.store';

export function ResumePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { resume, templateHtml, templateCss } = useEditorStore();

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

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) { doc.open(); doc.write(renderedHtml); doc.close(); }
    }
  }, [renderedHtml]);

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
