import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useEditorStore } from '../../stores/editor.store';

const SECTION_ICONS: Record<string, string> = {
  basics: '👤', experience: '💼', education: '🎓', skills: '✦', projects: '📁',
};

const SECTION_ADD_LABELS: Record<string, string> = {
  experience: '添加工作经历',
  education: '添加教育经历',
  skills: '添加技能',
  projects: '添加项目',
};

const BASICS_FIELDS = [
  { key: 'name', label: '姓名' },
  { key: 'title', label: '职位头衔' },
  { key: 'email', label: '邮箱' },
  { key: 'phone', label: '电话' },
  { key: 'location', label: '所在城市' },
  { key: 'summary', label: '个人简介' },
];

// Sections that can be reordered (basics is always fixed at top)
const DRAGGABLE_SECTIONS = new Set(['experience', 'education', 'skills', 'projects']);
const ARRAY_SECTIONS = new Set(['experience', 'education', 'skills', 'projects']);

/** Returns a single-line summary string for a section item */
function getItemSummary(sectionKey: string, item: Record<string, unknown>): string {
  switch (sectionKey) {
    case 'experience':
      return [item.company, item.position].filter(Boolean).join(' - ') || '未填写';
    case 'education':
      return (item.institution as string) || '未填写';
    case 'skills':
      return [item.name, item.level ? `· ${item.level}` : ''].filter(Boolean).join(' ') || '未填写';
    case 'projects':
      return (item.name as string) || '未填写';
    default:
      return '条目';
  }
}

export function SectionList() {
  const {
    schema, sectionOrder, activeSection, setActiveSection,
    reorderSections, zoom, setZoom, templateId, resume,
    addArrayItem, removeArrayItem, updateField,
  } = useEditorStore();

  const [hovered, setHovered] = useState<string | null>(null);
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);
  const [dropPosition, setDropPosition] = useState<'before' | 'after' | null>(null);
  // Track which sections are expanded (showing items)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([...ARRAY_SECTIONS, 'basics']));
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
    if (!dragKey || !DRAGGABLE_SECTIONS.has(key) || key === dragKey) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const pos = e.clientY < midY ? 'before' : 'after';
    setDropTarget(key);
    setDropPosition(pos);
  }, [dragKey]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
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

    currentOrder.splice(dragIdx, 1);
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
    // Toggle expanded state for array sections
    if (ARRAY_SECTIONS.has(key)) {
      setExpandedSections(prev => {
        const next = new Set(prev);
        if (next.has(key)) {
          // Keep expanded - just navigate
        } else {
          next.add(key);
        }
        return next;
      });
    }
    // Post message to iframe to scroll to section
    const iframe = document.querySelector('iframe[title="preview"]') as HTMLIFrameElement | null;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'scroll-to-section', sectionKey: key }, '*');
    }
  };

  const handleDeleteItem = (sectionKey: string, index: number, summary: string) => {
    Modal.confirm({
      title: '确认删除',
      content: `确定要删除「${summary}」吗？此操作不可恢复。`,
      okText: '删除',
      cancelText: '取消',
      okButtonProps: { danger: true },
      onOk: () => {
        removeArrayItem(sectionKey, index);
      },
    });
  };

  const handleAddItem = (sectionKey: string) => {
    addArrayItem(sectionKey);
    // Ensure section is expanded
    setExpandedSections(prev => {
      const next = new Set(prev);
      next.add(sectionKey);
      return next;
    });
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
      <div style={{ borderBottom: '1px solid #F3F4F6', flex: 1 }}>
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
            const isArraySection = ARRAY_SECTIONS.has(key);
            const isDropTarget = dropTarget === key;
            const isExpanded = expandedSections.has(key);

            // Get items for array sections
            const items = isArraySection && resume
              ? (resume[key as keyof typeof resume] as Record<string, unknown>[] | undefined) ?? []
              : [];

            return (
              <div key={key}>
                {/* Section header row */}
                <div
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
                  <span style={{ fontSize: 13, fontWeight: active ? 600 : 400, color: active ? '#111827' : '#6B7280', flex: 1 }}>
                    {section!.label}
                    {isArraySection && items.length > 0 && (
                      <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 400, marginLeft: 4 }}>
                        ({items.length})
                      </span>
                    )}
                  </span>
                  {/* Collapse/expand toggle */}
                  {(isArraySection || key === 'basics') && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedSections(prev => {
                          const next = new Set(prev);
                          if (next.has(key)) next.delete(key);
                          else next.add(key);
                          return next;
                        });
                      }}
                      style={{
                        fontSize: 10, color: '#9CA3AF', cursor: 'pointer',
                        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.15s',
                        display: 'inline-block',
                        padding: '0 2px',
                      }}
                    >
                      ▶
                    </span>
                  )}
                </div>

                {/* Basics fields */}
                {key === 'basics' && isExpanded && resume?.basics && (
                  <div style={{ paddingLeft: 28, paddingRight: 10, paddingBottom: 6 }}>
                    {BASICS_FIELDS.map((f) => {
                      const val = (resume.basics as Record<string, unknown>)[f.key] as string || '';
                      return (
                        <div key={f.key} style={{ marginBottom: 4 }}>
                          <span style={{ fontSize: 11, color: '#9CA3AF', display: 'block', marginBottom: 2 }}>{f.label}</span>
                          {f.key === 'summary' ? (
                            <textarea
                              value={val}
                              onChange={(e) => updateField('basics', f.key, e.target.value)}
                              rows={2}
                              style={{
                                width: '100%', fontSize: 12, color: '#374151', border: '1px solid #E5E7EB',
                                borderRadius: 4, padding: '4px 6px', resize: 'vertical', outline: 'none',
                                fontFamily: 'inherit', lineHeight: 1.5,
                              }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = '#3B82F6'; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = '#E5E7EB'; }}
                            />
                          ) : (
                            <input
                              value={val}
                              onChange={(e) => updateField('basics', f.key, e.target.value)}
                              style={{
                                width: '100%', fontSize: 12, color: '#374151', border: '1px solid #E5E7EB',
                                borderRadius: 4, padding: '3px 6px', outline: 'none',
                              }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = '#3B82F6'; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = '#E5E7EB'; }}
                              placeholder={`输入${f.label}`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Sub-items for array sections */}
                {isArraySection && isExpanded && (
                  <div style={{ paddingLeft: 28, paddingRight: 10, paddingBottom: 4 }}>
                    {(items as Record<string, unknown>[]).map((item, itemIdx) => {
                      const summary = getItemSummary(key, item);
                      return (
                        <ItemRow
                          key={itemIdx}
                          summary={summary}
                          onDelete={() => handleDeleteItem(key, itemIdx, summary)}
                        />
                      );
                    })}

                    {/* Add button */}
                    <AddButton
                      label={SECTION_ADD_LABELS[key] ?? '添加条目'}
                      onClick={() => handleAddItem(key)}
                    />
                  </div>
                )}
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

    </div>
  );
}

/* ---- Sub-components ---- */

function ItemRow({ summary, onDelete }: { summary: string; onDelete: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3px 0',
        borderRadius: 4,
        background: hovered ? '#F9FAFB' : 'transparent',
        transition: 'background 0.1s',
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: '#6B7280',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1,
          paddingRight: 4,
        }}
        title={summary}
      >
        {summary}
      </span>
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(); }}
        title="删除此条目"
        style={{
          flexShrink: 0,
          width: 20,
          height: 20,
          border: 'none',
          borderRadius: 4,
          background: 'transparent',
          color: hovered ? '#9CA3AF' : 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          padding: 0,
          transition: 'color 0.1s, background 0.1s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#EF4444';
          e.currentTarget.style.background = 'rgba(239,68,68,0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = hovered ? '#9CA3AF' : 'transparent';
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <DeleteOutlined />
      </button>
    </div>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        width: '100%',
        marginTop: 4,
        padding: '5px 0',
        border: `1.5px dashed ${hovered ? '#6B7280' : '#D1D5DB'}`,
        borderRadius: 5,
        background: hovered ? 'rgba(0,0,0,0.02)' : 'transparent',
        color: hovered ? '#6B7280' : '#9CA3AF',
        fontSize: 12,
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
    >
      <PlusOutlined style={{ fontSize: 10 }} />
      {label}
    </button>
  );
}
