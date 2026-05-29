'use client';

import { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { compileTemplate } from '@/lib/mini-template';
import { useEditorStore } from '@/lib/editor-store';

// FloatingEditor 只在点击字段进入编辑时才挂载，且自带一整套 TipTap 扩展
// （TextAlign / FontSize / Color / Highlight 等）。动态加载把它的 chunk 移出
// 编辑器首屏，缩小 First Load JS。
const FloatingEditor = dynamic(() => import('./FloatingEditor').then(m => m.FloatingEditor), { ssr: false });

const ARRAY_SECTIONS = ['experience', 'education', 'skills', 'projects'];

const EDIT_SCRIPT = `
(function() {
  var activeEl = null;
  var editingStarted = false; // 编辑已开始（焦点移到外层 FloatingEditor）→ blur 时保留高亮
  var allFields = Array.from(document.querySelectorAll('[data-field]'));

  function showActive(el) {
    if (activeEl && activeEl !== el) {
      activeEl.style.background = '';
      activeEl.style.boxShadow = '';
    }
    activeEl = el;
    // active: brick-red 8% bg + brick-red inset border
    el.style.background = 'rgba(176,70,58,0.08)';
    el.style.boxShadow = 'inset 0 0 0 1.5px rgba(176,70,58,0.35)';
  }

  function startEdit(el) {
    showActive(el);
    editingStarted = true;
    var rect = el.getBoundingClientRect();
    parent.postMessage({
      type: 'field-clicked',
      field: el.dataset.field,
      value: el.textContent.trim(),
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
    }, '*');
    parent.postMessage({ type: 'editing-started' }, '*');
  }

  allFields.forEach(function(el) {
    el.style.cursor = 'text';
    el.style.outline = 'none';
    el.style.borderRadius = '2px';
    el.style.transition = 'background 0.12s, box-shadow 0.12s';
    // 键盘可达性：每个字段可聚焦、有角色与标签，读屏可枚举并激活
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    var label = (el.textContent || '').trim().slice(0, 40);
    el.setAttribute('aria-label', label ? ('编辑：' + label) : '编辑此处');

    el.addEventListener('mouseenter', function() {
      if (el !== activeEl) {
        // brick-red 5% hover —呼应 Archive 高亮色
        el.style.background = 'rgba(176,70,58,0.05)';
        el.style.boxShadow = '';
      }
    });
    el.addEventListener('mouseleave', function() {
      if (el !== activeEl) {
        el.style.background = '';
        el.style.boxShadow = '';
      }
    });

    // 键盘 Tab 进入字段 → 显示高亮（让焦点可见），但不立即编辑
    el.addEventListener('focus', function() {
      if (el !== activeEl) showActive(el);
      el.scrollIntoView({ block: 'nearest' });
    });
    el.addEventListener('blur', function() {
      // 编辑已开始（焦点移到外层弹窗）则保留高亮；否则若焦点不再落在本字段上则清除
      if (editingStarted) return;
      if (activeEl === el) {
        el.style.background = '';
        el.style.boxShadow = '';
        activeEl = null;
      }
    });

    el.addEventListener('click', function(e) {
      e.stopPropagation();
      startEdit(el);
    });

    el.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        parent.postMessage({ type: 'field-keydown', key: 'Escape' }, '*');
        if (activeEl) {
          activeEl.style.background = '';
          activeEl.style.boxShadow = '';
          activeEl = null;
        }
        return;
      }
      // Enter / Space 在聚焦字段上 → 开始编辑（等同点击）
      if ((e.key === 'Enter' && !e.shiftKey) || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        startEdit(el);
        return;
      }
      // Tab 交给浏览器原生焦点顺序处理（不再劫持），读屏与键盘焦点一致推进
    });
  });

  document.addEventListener('click', function(e) {
    if (activeEl && !e.target.closest('[data-field]')) {
      activeEl.style.background = '';
      activeEl.style.boxShadow = '';
      activeEl = null;
      parent.postMessage({ type: 'field-blur' }, '*');
    }
  });

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

  window.addEventListener('message', function(e) {
    if (!e.data || e.data.type !== 'clear-active-field') return;
    editingStarted = false;
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

/** Error state — elegant template render failure */
function RenderErrorState() {
  const router = useRouter();
  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      background: '#FEFEFE', gap: 20,
      boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 2px 10px rgba(0,0,0,0.04)',
      borderRadius: 3,
      fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
    }}>
      <p style={{
        fontSize: 11, color: '#A8A29E', margin: 0,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>渲染错误</p>
      <h2 style={{
        fontFamily: "'Fraunces', Georgia, serif",
        fontStyle: 'italic', fontWeight: 400,
        fontSize: 28, color: '#2D1810', margin: 0, textAlign: 'center',
      }}>
        模板渲染失败
      </h2>
      <p style={{ fontSize: 13, color: '#78716C', margin: 0, textAlign: 'center', maxWidth: 280 }}>
        此模板遇到了渲染问题，请尝试其他模板
      </p>
      <button
        onClick={() => router.push('/templates')}
        style={{
          padding: '9px 20px', borderRadius: 6,
          border: '1px solid #E7E5E4',
          background: '#FFFFFF', color: '#44403C',
          fontSize: 12, fontWeight: 500, cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'all 0.12s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#44403C'; }}
      >
        换个模板
      </button>
    </div>
  );
}

/** 预览缩放控件 — 浮于预览区右下角，不随内容滚动。缩放 50%–200%，点百分比复位 100%。 */
function ZoomControl({ zoom, setZoom }: { zoom: number; setZoom: (z: number) => void }) {
  const pct = Math.round(zoom * 100);
  const step = (delta: number) => setZoom(Math.round((zoom + delta) * 100) / 100);
  const btn: React.CSSProperties = {
    width: 26, height: 26, border: 'none', background: 'transparent',
    color: '#78716C', cursor: 'pointer', fontSize: 16, lineHeight: 1,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 6, fontFamily: 'inherit', outline: 'none',
    transition: 'background 120ms cubic-bezier(0.16,1,0.3,1), color 120ms',
  };
  const hover = (e: React.MouseEvent<HTMLButtonElement>, on: boolean) => {
    e.currentTarget.style.background = on ? '#F0EAE0' : 'transparent';
    e.currentTarget.style.color = on ? '#1C1917' : '#78716C';
  };
  return (
    <div
      style={{
        position: 'absolute', right: 18, bottom: 18, zIndex: 7,
        display: 'flex', alignItems: 'center', gap: 2,
        background: '#FEFEFE', border: '1px solid #E7E5E4', borderRadius: 8,
        padding: 3, boxShadow: '0 4px 16px rgba(28,25,23,0.10)',
        fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
      }}
    >
      <button
        style={{ ...btn, color: zoom <= 0.5 ? '#D6D3D1' : '#78716C', cursor: zoom <= 0.5 ? 'default' : 'pointer' }}
        disabled={zoom <= 0.5}
        onClick={() => step(-0.1)}
        onMouseEnter={e => { if (zoom > 0.5) hover(e, true); }}
        onMouseLeave={e => hover(e, false)}
        aria-label="缩小"
      >−</button>
      <button
        onClick={() => setZoom(1)}
        title="点击复位到 100%"
        aria-label={`当前缩放 ${pct}%，点击复位`}
        style={{
          minWidth: 44, height: 26, border: 'none', background: 'transparent',
          color: '#44403C', cursor: 'pointer', fontSize: 12, fontWeight: 500,
          fontFamily: "'JetBrains Mono', 'SF Mono', monospace", letterSpacing: '0.02em',
          borderRadius: 6, outline: 'none', transition: 'background 120ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >{pct}%</button>
      <button
        style={{ ...btn, color: zoom >= 2 ? '#D6D3D1' : '#78716C', cursor: zoom >= 2 ? 'default' : 'pointer' }}
        disabled={zoom >= 2}
        onClick={() => step(0.1)}
        onMouseEnter={e => { if (zoom < 2) hover(e, true); }}
        onMouseLeave={e => hover(e, false)}
        aria-label="放大"
      >+</button>
    </div>
  );
}

export function ResumePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isEditingRef = useRef(false);
  const hasAnimatedRef = useRef(false); // only animate first load
  const { resume, templateHtml, templateCss, updateByPath, zoom, setZoom, sectionOrder, addArrayItem, removeArrayItem } = useEditorStore();
  const [editingField, setEditingField] = useState<EditingField | null>(null);
  const [iframeRect, setIframeRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [iframeReady, setIframeReady] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true); // true until first load
  const [showCoachmark, setShowCoachmark] = useState(false);

  const isEmpty = !resume?.basics?.name && !resume?.basics?.email;

  const dismissCoachmark = useCallback(() => {
    setShowCoachmark(false);
    try { localStorage.setItem('resumeforge_coachmark_seen', '1'); } catch { /* ignore */ }
  }, []);

  // 首次进入预填模板时显示「点击即可编辑」引导（空状态已有自带提示，无需重复）。
  useEffect(() => {
    if (!iframeReady || isEmpty) return;
    try {
      if (!localStorage.getItem('resumeforge_coachmark_seen')) setShowCoachmark(true);
    } catch { /* ignore */ }
  }, [iframeReady, isEmpty]);

  // 一旦用户开始编辑任意字段，引导即完成使命，自动消失。
  useEffect(() => {
    if (editingField) setShowCoachmark(false);
  }, [editingField]);

  // 渲染结果与错误标记一并由 memo 返回，避免在 render 期间调用 setState（React 反模式）。
  const { html: renderedHtml, error: renderError } = useMemo<{ html: string; error: boolean }>(() => {
    if (!templateHtml || !templateCss || !resume) return { html: '', error: false };
    if (isEmpty) {
      return { html: `<!DOCTYPE html><html><head><style>
        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 297mm; font-family: -apple-system, sans-serif; background: #fff; }
        .placeholder { text-align: center; color: #bbb; }
        .placeholder h2 { font-size: 20px; font-weight: 400; margin-bottom: 8px; }
        .placeholder p { font-size: 14px; }
      </style></head><body><div class="placeholder"><h2>点击左侧模块开始编辑</h2><p>填写信息后这里会实时预览简历效果</p></div></body></html>`, error: false };
    }
    try {
      const template = compileTemplate(templateHtml);
      let body = template(resume);
      // 用户没主动选背景色时，不注入任何背景覆盖，让模板 CSS 自带的背景生效
      // （深色侧栏、奶白底等都保留）；只有显式选色才用 !important 覆盖全局。
      const userBg = (resume.settings as { backgroundColor?: string } | undefined)?.backgroundColor;
      const bgOverride = `<style>
        html, body { overflow: hidden !important; scrollbar-width: none; }
        html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; width: 0; height: 0; }
        ${userBg ? `html, body, .resume { background: ${userBg} !important; background-color: ${userBg} !important; }` : ''}
      </style>`;

      // 模板若没渲染 website/linkedin/github/wechat，则补进联系区。
      // 不再用 🌐/in/GH 等图标/缩写前缀（读着像 slop）；链接只显示值本身，
      // 微信不是链接、按文本注入（此前完全没注入，导致右侧不显示微信）。
      const basics = resume.basics as Record<string, string> | undefined;
      const bitStyle = 'color:inherit;text-decoration:none;margin-left:8px;font-size:0.9em;white-space:nowrap;';
      const contactBits: string[] = [];
      if (basics?.website && !body.includes(basics.website)) {
        const href = basics.website.startsWith('http') ? basics.website : 'https://' + basics.website;
        contactBits.push(`<a href="${href}" style="${bitStyle}" target="_blank" rel="noopener">${basics.website}</a>`);
      }
      if (basics?.linkedin && !body.includes(basics.linkedin)) {
        const href = basics.linkedin.startsWith('http') ? basics.linkedin : 'https://linkedin.com/in/' + basics.linkedin;
        contactBits.push(`<a href="${href}" style="${bitStyle}" target="_blank" rel="noopener">${basics.linkedin}</a>`);
      }
      if (basics?.github && !body.includes(basics.github)) {
        const href = basics.github.startsWith('http') ? basics.github : 'https://github.com/' + basics.github;
        contactBits.push(`<a href="${href}" style="${bitStyle}" target="_blank" rel="noopener">${basics.github}</a>`);
      }
      if (basics?.wechat && !body.includes(basics.wechat)) {
        contactBits.push(`<span style="margin-left:8px;font-size:0.9em;white-space:nowrap;">微信：${basics.wechat}</span>`);
      }

      if (contactBits.length > 0) {
        const linksHtml = contactBits.join('');

        // Try to find email element and inject after it; fall back to after phone, or into basics container
        const emailVal = basics?.email || '';
        const phoneVal = basics?.phone || '';
        const emailEscaped = emailVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const phoneEscaped = phoneVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        let injected = false;
        if (emailVal) {
          // Inject after the closing tag of the element containing the email
          body = body.replace(
            new RegExp(`(${emailEscaped})(</[a-zA-Z]+>)`),
            (_, m1, m2) => { injected = true; return m1 + m2 + linksHtml; }
          );
        }
        if (!injected && phoneVal) {
          body = body.replace(
            new RegExp(`(${phoneEscaped})(</[a-zA-Z]+>)`),
            (_, m1, m2) => { injected = true; return m1 + m2 + linksHtml; }
          );
        }
        if (!injected) {
          // Last resort: append before </header> or first </section>
          if (body.includes('</header>')) {
            body = body.replace('</header>', linksHtml + '</header>');
          } else if (body.includes('data-section="basics"')) {
            body = body.replace(/(<[^>]+data-section="basics"[^>]*>)([\s\S]*?)<\//, (m) => m.replace(/(<\/[a-zA-Z]+>\s*)$/, linksHtml + '$1'));
          }
        }
      }

      return { html: `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><style>${templateCss}</style>${bgOverride}</head><body style="margin:0;${userBg ? `background:${userBg};` : ''}">${body}</body></html>`, error: false };
    } catch {
      return { html: '', error: true };
    }
  }, [resume, templateHtml, templateCss, isEmpty]);

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
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'clear-active-field' }, '*');
    }
  }, [updateByPath]);

  const handleCancel = useCallback(() => {
    isEditingRef.current = false;
    setEditingField(null);
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'clear-active-field' }, '*');
    }
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data?.type) return;

      if (event.data.type === 'editing-started') return;

      if (event.data.type === 'field-clicked') {
        const { field, rect } = event.data as {
          field: string; value: string;
          rect: { top: number; left: number; width: number; height: number };
        };
        if (!field) return;
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
        if (section && ARRAY_SECTIONS.includes(section)) addArrayItem(section);
        return;
      }

      if (event.data.type === 'remove-section-item') {
        const { section, index } = event.data as { section: string; index: number };
        if (section && ARRAY_SECTIONS.includes(section) && typeof index === 'number') removeArrayItem(section, index);
        return;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [updateByPath, addArrayItem, removeArrayItem]);

  if (renderError) {
    return (
      <div style={{
        flex: 1, display: 'flex', justifyContent: 'center',
        alignItems: 'center', padding: 28, overflowY: 'auto',
        background: `#F5F2EB url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='2' seed='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.24 0 0 0 0 0.16 0 0 0 0 0.10 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        position: 'relative',
      }}>
        <RenderErrorState />
      </div>
    );
  }

  return (
    <div style={{ flex: 1, position: 'relative', display: 'flex', minHeight: 0 }}>
    <div
      data-preview-scroller
      style={{
        flex: 1, display: 'flex', justifyContent: 'center',
        alignItems: 'flex-start', padding: 28, overflowY: 'auto', height: '100%',
        position: 'relative',
        // 纸纹背景：石灰白 + SVG 噪点
        background: `#F5F2EB url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='2' seed='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.24 0 0 0 0 0.16 0 0 0 0 0.10 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}>
      {/* Loading spinner — shows while iframe content is loading, paper-ash bg prevents white flash */}
      {iframeLoading && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#F5F2EB',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            border: '2px solid #E7E5E4',
            borderTopColor: '#78716C',
            animation: 'rpSpin 700ms linear infinite',
          }} />
        </div>
      )}

      {/* 首次引导：点击即可编辑（编辑器 chrome，浮于纸面之上，不注入 iframe 文档） */}
      {showCoachmark && !iframeLoading && (
        <div
          role="status"
          style={{
            position: 'sticky', top: 0, alignSelf: 'center', zIndex: 6,
            marginBottom: -38, // 不挤占纸张布局，悬浮即可
            display: 'flex', alignItems: 'center', gap: 10,
            background: '#1C1917', color: '#FAFAF9',
            borderRadius: 999, padding: '7px 10px 7px 14px',
            fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
            fontSize: 12, fontWeight: 500, letterSpacing: '-0.1px',
            boxShadow: '0 8px 28px rgba(28,25,23,0.28), 0 2px 8px rgba(28,25,23,0.16)',
            animation: 'rpCoachIn 360ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%', background: '#B0463A',
              boxShadow: '0 0 0 3px rgba(176,70,58,0.28)', flexShrink: 0,
              animation: 'rpCoachPulse 1.8s ease-in-out infinite',
            }} />
            点击简历上的任意文字，即可直接编辑
          </span>
          <button
            onClick={dismissCoachmark}
            aria-label="知道了，关闭提示"
            style={{
              border: 'none', background: 'transparent', color: '#A8A29E',
              cursor: 'pointer', fontSize: 15, lineHeight: 1, padding: '0 2px',
              fontFamily: 'inherit', outline: 'none', flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FAFAF9'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#A8A29E'; }}
          >×</button>
        </div>
      )}

      <div style={{
        transformOrigin: 'top center',
        transform: `scale(${zoom})`,
        flexShrink: 0,
        marginBottom: `calc(297mm * ${zoom} - 297mm)`,
        position: 'relative', zIndex: 1,
      }}>
        <iframe
          ref={iframeRef}
          title="preview"
          onLoad={(e) => {
            const f = e.currentTarget;
            const doc = f.contentDocument;
            if (!doc) return;
            const updateHeight = () => {
              const h = Math.max(doc.body?.scrollHeight ?? 0, 1123);
              f.style.height = h + 'px';
            };
            updateHeight();
            if (typeof ResizeObserver !== 'undefined') {
              const ro = new ResizeObserver(updateHeight);
              if (doc.body) ro.observe(doc.body);
            }
            // First-time entrance animation only
            if (!hasAnimatedRef.current) {
              hasAnimatedRef.current = true;
              f.style.opacity = '0';
              f.style.transform = 'scale(0.98)';
              f.style.transition = 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)';
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  f.style.opacity = '1';
                  f.style.transform = 'scale(1)';
                });
              });
            }
            setIframeReady(true);
            setIframeLoading(false);
          }}
          style={{
            width: '210mm', minHeight: '297mm', background: '#fff', border: 'none',
            // Deepen paper shadow when in editing state (active field selected)
            boxShadow: editingField ? [
              '0 12px 50px rgba(28,25,23,0.14)',
              '0 3px 14px rgba(28,25,23,0.08)',
              'inset 0 1px 0 rgba(255,255,255,0.4)',
            ].join(', ') : [
              '0 8px 40px rgba(0,0,0,0.08)',
              '0 2px 10px rgba(0,0,0,0.04)',
              'inset 0 1px 0 rgba(255,255,255,0.4)',
            ].join(', '),
            display: 'block', borderRadius: 3, overflow: 'hidden',
            transition: 'box-shadow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {iframeReady && editingField && (
        <FloatingEditor
          editingField={editingField}
          iframeRect={iframeRect}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      <style>{`
        @keyframes rpSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes rpCoachIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rpCoachPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(176,70,58,0.28); }
          50%      { box-shadow: 0 0 0 5px rgba(176,70,58,0.10); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0ms !important; animation-duration: 0ms !important; }
          @keyframes rpSpin { to { transform: none; } }
        }
      `}</style>
    </div>
    <ZoomControl zoom={zoom} setZoom={setZoom} />
    </div>
  );
}
