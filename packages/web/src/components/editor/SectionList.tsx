import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditorStore } from '../../stores/editor.store';

const SECTION_ICONS: Record<string, string> = {
  basics: '👤', experience: '💼', education: '🎓', skills: '✦', projects: '📁',
};

// Sections that can be reordered (basics is always fixed at top)
const DRAGGABLE_SECTIONS = new Set(['experience', 'education', 'skills', 'projects']);

export function SectionList() {
  const { schema, sectionOrder, activeSection, setActiveSection, reorderSections, zoom, setZoom, templateId } = useEditorStore();
  const [hovered, setHovered] = useState<string | null>(null);
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);
  const [dropPosition, setDropPosition] = useState<'before' | 'after' | null>(null);
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Get a reference to the iframe from the parent DOM
  useEffect(() => {
    const iframe = document.querySelector('iframe[title="preview"]') as HTMLIFrameElement | null;
    iframeRef.current = iframe;
  });

  const handleDragStart = useCallback((e: React.DragEvent, key: string) => {
    if (!DRAGGABLE_SECTIONS.has(key)) {
      e.preventDefault();
      return;
    }
    setDragKey(key);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', key);
    // Make drag image slightly transparent
    const el = e.currentTarget as HTMLElement;
    requestAnimationFrame(() => { el.style.opacity = '0.4'; });
  }, []);

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.opacity = '1';
    setDragKey(null);
    setDropTarget(null);
    setDropPosition(null);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, key: string) => {
    if (!dragKey || !DRAGGABLE_SECTIONS.has(key) || key === dragKey) {
      return;
    }
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    // Determine if mouse is in top half or bottom half of the element
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const pos = e.clientY < midY ? 'before' : 'after';
    setDropTarget(key);
    setDropPosition(pos);
  }, [dragKey]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    // Only clear if leaving the actual element, not entering a child
    const related = e.relatedTarget as HTMLElement | null;
    if (related && (e.currentTarget as HTMLElement).contains(related)) return;
    setDropTarget(null);
    setDropPosition(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, targetKey: string) => {
    e.preventDefault();
    if (!dragKey || !DRAGGABLE_SECTIONS.has(targetKey) || dragKey === targetKey) return;

    const currentOrder = [...sectionOrder];
    const dragIdx = currentOrder.indexOf(dragKey);
    const targetIdx = currentOrder.indexOf(targetKey);
    if (dragIdx === -1 || targetIdx === -1) return;

    // Remove dragged item
    currentOrder.splice(dragIdx, 1);
    // Find new position of target (after removal)
    const newTargetIdx = currentOrder.indexOf(targetKey);
    const insertIdx = dropPosition === 'after' ? newTargetIdx + 1 : newTargetIdx;
    currentOrder.splice(insertIdx, 0, dragKey);

    reorderSections(currentOrder);
    setDragKey(null);
    setDropTarget(null);
    setDropPosition(null);
  }, [dragKey, sectionOrder, dropPosition, reorderSections]);

  if (!schema) return null;

  const orderedSections = sectionOrder.map((key) => schema.sections.find((s) => s.key === key)).filter(Boolean);

  const handleSectionClick = (key: string) => {
    setActiveSection(key);
    // Post message to iframe to scroll to section
    const iframe = document.querySelector('iframe[title="preview"]') as HTMLIFrameElement | null;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'scroll-to-section', sectionKey: key }, '*');
    }
  };

  const zoomPct = Math.round(zoom * 100);

  const btnStyle = (active: boolean): React.CSSProperties => ({
    width: 28, height: 28, borderRadius: 6, border: '1px solid #E5E7EB',
    background: active ? '#111827' : '#F9FAFB', color: active ? '#fff' : '#374151',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 14, fontWeight: 600, lineHeight: 1, flexShrink: 0,
    transition: 'all 0.15s',
  });

  return (
    <div style={{ borderRight: '1px solid #E5E7EB', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

      {/* Template section */}
      <div style={{ padding: '12px 14px', borderBottom: '1px solid #F3F4F6' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>模板</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
          <span style={{ fontSize: 12, color: '#374151', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {templateId ?? '未选择'}
          </span>
          <button
            onClick={() => navigate('/')}
            style={{
              flexShrink: 0, padding: '3px 10px', borderRadius: 6, border: '1px solid #E5E7EB',
              background: '#F9FAFB', color: '#374151', cursor: 'pointer', fontSize: 12, fontWeight: 500,
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#F3F4F6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F9FAFB'; }}
          >
            换模板
          </button>
        </div>
      </div>

      {/* Modules section */}
      <div style={{ borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ padding: '10px 14px 6px' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', letterSpacing: 1, textTransform: 'uppercase' }}>模块</span>
        </div>
        <div style={{ padding: '0 0 6px 0' }}>
          {orderedSections.map((section) => {
            const key = section!.key;
            const active = activeSection === key;
            const hover = hovered === key;
            const isDragging = dragKey === key;
            const isDraggable = DRAGGABLE_SECTIONS.has(key);
            const isDropTarget = dropTarget === key;

            return (
              <div
                key={key}
                draggable={isDraggable}
                onDragStart={(e) => handleDragStart(e, key)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, key)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, key)}
                onClick={() => handleSectionClick(key)}
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '9px 14px', margin: '1px 6px', borderRadius: 6,
                  cursor: isDraggable ? 'grab' : 'pointer',
                  transition: 'background 0.1s, opacity 0.15s',
                  background: active ? '#F3F4F6' : hover ? '#F9FAFB' : 'transparent',
                  opacity: isDragging ? 0.4 : 1,
                  borderTop: isDropTarget && dropPosition === 'before' ? '2px solid #3B82F6' : '2px solid transparent',
                  borderBottom: isDropTarget && dropPosition === 'after' ? '2px solid #3B82F6' : '2px solid transparent',
                }}
              >
                {isDraggable && (
                  <span style={{ fontSize: 10, color: '#D1D5DB', flexShrink: 0, marginRight: -4, cursor: 'grab', userSelect: 'none' }}>
                    ⠿
                  </span>
                )}
                <span style={{ fontSize: 13, opacity: active ? 1 : 0.5, width: 18, textAlign: 'center', flexShrink: 0 }}>
                  {SECTION_ICONS[key] ?? '📋'}
                </span>
                <span style={{ fontSize: 13, fontWeight: active ? 600 : 400, color: active ? '#111827' : '#6B7280' }}>
                  {section!.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Zoom controls */}
      <div style={{ padding: '12px 14px', borderBottom: '1px solid #F3F4F6' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>缩放</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button
            style={btnStyle(false)}
            onClick={() => setZoom(zoom - 0.1)}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#F3F4F6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F9FAFB'; }}
          >−</button>
          <span style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, color: '#374151', userSelect: 'none' }}>
            {zoomPct}%
          </span>
          <button
            style={btnStyle(false)}
            onClick={() => setZoom(zoom + 0.1)}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#F3F4F6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F9FAFB'; }}
          >+</button>
        </div>
        {zoom !== 1 && (
          <button
            onClick={() => setZoom(1)}
            style={{
              marginTop: 6, width: '100%', padding: '3px 0', borderRadius: 5,
              border: '1px solid #E5E7EB', background: 'transparent', color: '#9CA3AF',
              cursor: 'pointer', fontSize: 11, transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#374151'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#9CA3AF'; }}
          >重置 100%</button>
        )}
      </div>

      {/* Tips section */}
      <div style={{ padding: '12px 14px', flex: 1 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>提示</span>
        <p style={{ fontSize: 11, color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>双击内容可直接编辑</p>
        <p style={{ fontSize: 11, color: '#9CA3AF', lineHeight: 1.6, margin: '4px 0 0' }}>点击模块名跳转到对应区域</p>
        <p style={{ fontSize: 11, color: '#9CA3AF', lineHeight: 1.6, margin: '4px 0 0' }}>拖拽模块名可调整顺序</p>
      </div>

    </div>
  );
}
