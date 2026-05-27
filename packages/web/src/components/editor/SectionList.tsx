import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useEditorStore } from '../../stores/editor.store';

const SECTION_ICONS: Record<string, string> = {
  basics: '👤', summary: '📝', experience: '💼', education: '🎓', skills: '✦', projects: '📁',
};

const SECTION_ADD_LABELS: Record<string, string> = {
  experience: '添加工作经历',
  education: '添加教育经历',
  skills: '添加技能',
  projects: '添加项目',
};

const DEFAULT_BASICS_FIELDS = [
  { key: 'name', label: '姓名', removable: false },
  { key: 'title', label: '职位头衔', removable: true },
  { key: 'email', label: '邮箱', removable: false },
  { key: 'phone', label: '电话', removable: true },
  { key: 'location', label: '所在城市', removable: true },
];

const EXTRA_BASICS_OPTIONS = [
  { key: 'website', label: '个人网站' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github', label: 'GitHub' },
  { key: 'wechat', label: '微信' },
  { key: 'avatar', label: '头像链接' },
  { key: 'birthday', label: '出生日期' },
  { key: 'gender', label: '性别' },
];

const DRAGGABLE_SECTIONS = new Set(['experience', 'education', 'skills', 'projects']);
const ARRAY_SECTIONS = new Set(['experience', 'education', 'skills', 'projects']);

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
    addArrayItem, removeArrayItem, updateField, resetToDefault,
  } = useEditorStore();

  const [visibleBasicsFields, setVisibleBasicsFields] = useState<string[]>(
    DEFAULT_BASICS_FIELDS.map(f => f.key)
  );
  const [showAddField, setShowAddField] = useState(false);

  const [hovered, setHovered] = useState<string | null>(null);
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);
  const [dropPosition, setDropPosition] = useState<'before' | 'after' | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([...ARRAY_SECTIONS, 'basics']));
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = document.querySelector('iframe[title="preview"]') as HTMLIFrameElement | null;
    iframeRef.current = iframe;
  });

  const handleDragStart = useCallback((e: React.DragEvent, key: string) => {
    if (!DRAGGABLE_SECTIONS.has(key)) { e.preventDefault(); return; }
    setDragKey(key);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', key);
    const el = e.currentTarget as HTMLElement;
    requestAnimationFrame(() => { el.style.opacity = '0.4'; });
  }, []);

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.opacity = '1';
    setDragKey(null); setDropTarget(null); setDropPosition(null);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, key: string) => {
    if (!dragKey || !DRAGGABLE_SECTIONS.has(key) || key === dragKey) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const pos = e.clientY < rect.top + rect.height / 2 ? 'before' : 'after';
    setDropTarget(key); setDropPosition(pos);
  }, [dragKey]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    const related = e.relatedTarget as HTMLElement | null;
    if (related && (e.currentTarget as HTMLElement).contains(related)) return;
    setDropTarget(null); setDropPosition(null);
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
    setDragKey(null); setDropTarget(null); setDropPosition(null);
  }, [dragKey, sectionOrder, dropPosition, reorderSections]);

  if (!schema) return null;

  const orderedSections = sectionOrder.map((key) => schema.sections.find((s) => s.key === key)).filter(Boolean);

  const handleSectionClick = (key: string) => {
    setActiveSection(key);
    if (ARRAY_SECTIONS.has(key)) {
      setExpandedSections(prev => {
        const next = new Set(prev);
        next.add(key);
        return next;
      });
    }
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
      onOk: () => removeArrayItem(sectionKey, index),
    });
  };

  const handleAddItem = (sectionKey: string) => {
    addArrayItem(sectionKey);
    setExpandedSections(prev => {
      const next = new Set(prev); next.add(sectionKey); return next;
    });
  };

  const zoomPct = Math.round(zoom * 100);

  return (
    <div style={{
      borderRight: '1px solid #E7E5E4',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      fontFamily: 'inherit',
    }}>

      {/* Modules section */}
      <div style={{ borderBottom: '1px solid #F5F5F4', flex: 1 }}>
        <div style={{ padding: '12px 14px 6px' }}>
          <span style={{
            fontSize: 10, fontWeight: 600, color: '#A8A29E',
            letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'inherit',
          }}>模块</span>
        </div>
        <div style={{ padding: '0 0 6px 0' }}>
          {orderedSections.map((section) => {
            const key = section!.key;
            const active = activeSection === key;
            const isHov = hovered === key;
            const isDragging = dragKey === key;
            const isDraggable = DRAGGABLE_SECTIONS.has(key);
            const isArraySection = ARRAY_SECTIONS.has(key);
            const isDropTarget = dropTarget === key;
            const isExpanded = expandedSections.has(key);

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
                    padding: '8px 12px', margin: '1px 6px', borderRadius: 6,
                    cursor: isDraggable ? 'grab' : 'pointer',
                    transition: 'background 0.1s, opacity 0.15s',
                    background: active ? '#F5F5F4' : isHov ? '#FAFAF9' : 'transparent',
                    opacity: isDragging ? 0.4 : 1,
                    borderTop: isDropTarget && dropPosition === 'before' ? '2px solid #1C1917' : '2px solid transparent',
                    borderBottom: isDropTarget && dropPosition === 'after' ? '2px solid #1C1917' : '2px solid transparent',
                    // Left accent line when active
                  }}
                >
                  {/* Active left accent */}
                  {active && (
                    <div style={{
                      position: 'absolute', left: 0, top: '20%', bottom: '20%',
                      width: 2, borderRadius: 1, background: '#1C1917',
                    }} />
                  )}

                  {isDraggable && (
                    <span style={{
                      fontSize: 10, color: isHov ? '#A8A29E' : '#D6D3D1',
                      flexShrink: 0, marginRight: -4, cursor: 'grab',
                      userSelect: 'none', transition: 'color 0.12s',
                    }}>
                      ⠿
                    </span>
                  )}

                  <span style={{ fontSize: 14, opacity: active ? 1 : 0.55, width: 16, textAlign: 'center', flexShrink: 0 }}>
                    {SECTION_ICONS[key] ?? '📋'}
                  </span>

                  <span style={{
                    fontSize: 13, fontWeight: active ? 600 : 400,
                    color: active ? '#1C1917' : '#78716C', flex: 1,
                    fontFamily: 'inherit',
                  }}>
                    {section!.label}
                    {isArraySection && items.length > 0 && (
                      <span style={{ fontSize: 10, color: '#A8A29E', fontWeight: 400, marginLeft: 4 }}>
                        ({items.length})
                      </span>
                    )}
                  </span>

                  {(isArraySection || key === 'basics') && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedSections(prev => {
                          const next = new Set(prev);
                          if (next.has(key)) next.delete(key); else next.add(key);
                          return next;
                        });
                      }}
                      style={{
                        fontSize: 8, color: '#A8A29E', cursor: 'pointer',
                        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.15s',
                        display: 'inline-block', padding: '0 2px',
                      }}
                    >
                      ▶
                    </span>
                  )}
                </div>

                {/* Basics fields */}
                {key === 'basics' && isExpanded && resume?.basics && (
                  <div style={{ paddingLeft: 26, paddingRight: 10, paddingBottom: 6 }}>
                    {visibleBasicsFields.map((fKey) => {
                      const fieldDef = [...DEFAULT_BASICS_FIELDS, ...EXTRA_BASICS_OPTIONS].find(f => f.key === fKey);
                      if (!fieldDef) return null;
                      const val = (resume.basics as Record<string, unknown>)[fKey] as string || '';
                      const canRemove = !DEFAULT_BASICS_FIELDS.find(f => f.key === fKey && !f.removable);
                      return (
                        <BasicFieldRow
                          key={fKey}
                          label={fieldDef.label}
                          value={val}
                          canRemove={canRemove}
                          onChange={(v) => updateField('basics', fKey, v)}
                          onRemove={() => {
                            setVisibleBasicsFields(prev => prev.filter(k => k !== fKey));
                            updateField('basics', fKey, '');
                          }}
                        />
                      );
                    })}

                    {/* Add field */}
                    <div style={{ position: 'relative' }}>
                      <button
                        onClick={() => setShowAddField(!showAddField)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 4, width: '100%',
                          marginTop: 4, padding: '4px 0',
                          border: '1.5px dashed #E7E5E4', borderRadius: 5,
                          background: 'transparent', color: '#A8A29E',
                          fontSize: 11, cursor: 'pointer', fontFamily: 'inherit',
                          transition: 'border-color 0.12s, color 0.12s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#A8A29E'; e.currentTarget.style.color = '#78716C'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.color = '#A8A29E'; }}
                      >
                        <PlusOutlined style={{ fontSize: 9, marginLeft: 6 }} /> 添加字段
                      </button>
                      {showAddField && (
                        <div style={{
                          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100,
                          background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: 8,
                          boxShadow: '0 8px 25px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)',
                          marginTop: 4, maxHeight: 160, overflowY: 'auto',
                        }}>
                          {EXTRA_BASICS_OPTIONS.filter(o => !visibleBasicsFields.includes(o.key)).map(o => (
                            <div
                              key={o.key}
                              onClick={() => { setVisibleBasicsFields(prev => [...prev, o.key]); setShowAddField(false); }}
                              style={{ padding: '7px 12px', fontSize: 12, color: '#78716C', cursor: 'pointer', fontFamily: 'inherit' }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = '#F5F5F4'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = ''; }}
                            >
                              {o.label}
                            </div>
                          ))}
                          {EXTRA_BASICS_OPTIONS.filter(o => !visibleBasicsFields.includes(o.key)).length === 0 && (
                            <div style={{ padding: '8px 12px', fontSize: 12, color: '#A8A29E', fontFamily: 'inherit' }}>已添加全部字段</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Summary */}
                {key === 'basics' && isExpanded && resume?.basics && (
                  <div style={{ paddingLeft: 14, paddingRight: 10, paddingBottom: 4, marginTop: 2 }}>
                    <div
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '7px 12px', borderRadius: 6, cursor: 'pointer',
                        background: activeSection === 'summary' ? '#F5F5F4' : 'transparent',
                        transition: 'background 0.1s',
                      }}
                      onClick={() => {
                        setActiveSection('summary');
                        const iframe = document.querySelector('iframe[title="preview"]') as HTMLIFrameElement | null;
                        iframe?.contentWindow?.postMessage({ type: 'scroll-to-section', sectionKey: 'basics' }, '*');
                      }}
                    >
                      <span style={{ fontSize: 14, opacity: 0.55, width: 16, textAlign: 'center' }}>📝</span>
                      <span style={{
                        fontSize: 13, fontWeight: activeSection === 'summary' ? 600 : 400,
                        color: activeSection === 'summary' ? '#1C1917' : '#78716C',
                        fontFamily: 'inherit',
                      }}>个人简介</span>
                    </div>

                    {activeSection === 'summary' && (
                      <div style={{ paddingLeft: 26, paddingRight: 0, paddingTop: 4, paddingBottom: 4 }}>
                        <textarea
                          value={(resume.basics as Record<string, unknown>).summary as string || ''}
                          onChange={(e) => updateField('basics', 'summary', e.target.value)}
                          rows={4}
                          placeholder="输入个人简介..."
                          style={{
                            width: '100%', fontSize: 12, color: '#1C1917',
                            border: '1px solid #E7E5E4', borderRadius: 6,
                            padding: '7px 9px', resize: 'vertical', outline: 'none',
                            fontFamily: 'inherit', lineHeight: 1.6,
                            background: '#FAFAF9', transition: 'border-color 0.12s',
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFFFFF'; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Sub-items for array sections */}
                {isArraySection && isExpanded && (
                  <div style={{ paddingLeft: 26, paddingRight: 10, paddingBottom: 4 }}>
                    {(items as Record<string, unknown>[]).map((item, itemIdx) => {
                      const summary = getItemSummary(key, item);
                      return (
                        <ItemRow
                          key={itemIdx}
                          sectionKey={key}
                          index={itemIdx}
                          item={item}
                          summary={summary}
                          onDelete={() => handleDeleteItem(key, itemIdx, summary)}
                        />
                      );
                    })}
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

      {/* Bottom: change template link */}
      <div style={{ padding: '10px 14px', borderTop: '1px solid #F5F5F4' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%', padding: '6px 0', borderRadius: 6,
            border: '1px solid #E7E5E4', background: '#FFFFFF',
            color: '#78716C', cursor: 'pointer', fontSize: 12, fontWeight: 500,
            transition: 'all 0.12s', fontFamily: 'inherit',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#78716C'; }}
        >
          换模板
        </button>
      </div>
    </div>
  );
}

/* ---- Sub-components ---- */

const ITEM_FIELDS: Record<string, { key: string; label: string; multiline?: boolean }[]> = {
  experience: [
    { key: 'company', label: '公司' }, { key: 'position', label: '职位' },
    { key: 'startDate', label: '开始时间' }, { key: 'endDate', label: '结束时间' },
    { key: 'highlights', label: '工作亮点', multiline: true },
  ],
  education: [
    { key: 'institution', label: '学校' }, { key: 'area', label: '专业' },
    { key: 'studyType', label: '学历' }, { key: 'startDate', label: '开始时间' }, { key: 'endDate', label: '结束时间' },
  ],
  skills: [{ key: 'name', label: '技能' }, { key: 'level', label: '水平' }],
  projects: [
    { key: 'name', label: '项目名称' }, { key: 'role', label: '角色' },
    { key: 'startDate', label: '开始时间' }, { key: 'endDate', label: '结束时间' },
    { key: 'description', label: '描述', multiline: true },
    { key: 'highlights', label: '亮点', multiline: true },
  ],
};

const inputBase: React.CSSProperties = {
  width: '100%', fontSize: 11, color: '#1C1917',
  border: '1px solid #E7E5E4', borderRadius: 6,
  padding: '3px 7px', outline: 'none',
  boxSizing: 'border-box', fontFamily: 'inherit',
  background: '#FAFAF9', transition: 'border-color 0.12s, background 0.12s',
};

function ItemRow({ sectionKey, index, item, summary, onDelete }: {
  sectionKey: string; index: number; item: Record<string, unknown>; summary: string; onDelete: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const updateArrayItem = useEditorStore((s) => s.updateArrayItem);
  const fields = ITEM_FIELDS[sectionKey] || [];

  return (
    <div style={{ marginBottom: 2 }}>
      <div
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '4px 6px', borderRadius: 5,
          background: hovered ? '#F5F5F4' : 'transparent',
          cursor: 'pointer', transition: 'background 0.1s',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <span style={{
          fontSize: 11, color: '#78716C',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          flex: 1, paddingRight: 4, fontFamily: 'inherit',
        }} title={summary}>
          {expanded ? '▾ ' : '▸ '}{summary}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }} title="删除"
          style={{
            flexShrink: 0, width: 18, height: 18, border: 'none', borderRadius: 4,
            background: 'transparent', color: hovered ? '#A8A29E' : 'transparent',
            cursor: 'pointer', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 11, padding: 0, transition: 'color 0.1s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#DC2626'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = hovered ? '#A8A29E' : 'transparent'; }}
        >
          <DeleteOutlined />
        </button>
      </div>

      {expanded && (
        <div style={{
          paddingLeft: 8, paddingTop: 6, paddingBottom: 8,
          background: '#FAFAF9', borderRadius: 6, marginTop: 2,
          border: '1px solid #F5F5F4',
        }}>
          {fields.map((f) => {
            const val = item[f.key];
            if (f.key === 'highlights' && Array.isArray(val)) {
              return (
                <div key={f.key} style={{ marginBottom: 6 }}>
                  <span style={{ fontSize: 10, color: '#A8A29E', fontFamily: 'inherit' }}>{f.label}</span>
                  {(val as string[]).map((h, hi) => (
                    <div key={hi} style={{ display: 'flex', gap: 4, marginTop: 3 }}>
                      <input value={h}
                        onChange={(e) => { const arr = [...val as string[]]; arr[hi] = e.target.value; updateArrayItem(sectionKey, index, f.key, arr); }}
                        style={inputBase}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFFFFF'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
                      />
                      <button
                        onClick={() => { const arr = (val as string[]).filter((_, i) => i !== hi); updateArrayItem(sectionKey, index, f.key, arr); }}
                        style={{ border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer', fontSize: 10, padding: '0 2px', fontFamily: 'inherit' }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#DC2626'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#D6D3D1'; }}
                      >×</button>
                    </div>
                  ))}
                  <button
                    onClick={() => updateArrayItem(sectionKey, index, f.key, [...val as string[], ''])}
                    style={{
                      marginTop: 3, border: '1px dashed #E7E5E4', borderRadius: 4,
                      background: 'none', color: '#A8A29E', fontSize: 10,
                      padding: '2px 6px', cursor: 'pointer', width: '100%', fontFamily: 'inherit',
                      transition: 'border-color 0.12s, color 0.12s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#A8A29E'; e.currentTarget.style.color = '#78716C'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.color = '#A8A29E'; }}
                  >+ 添加</button>
                </div>
              );
            }
            return (
              <div key={f.key} style={{ marginBottom: 5 }}>
                <span style={{ fontSize: 10, color: '#A8A29E', fontFamily: 'inherit' }}>{f.label}</span>
                {f.multiline ? (
                  <textarea value={(val as string) || ''}
                    onChange={(e) => updateArrayItem(sectionKey, index, f.key, e.target.value)}
                    rows={2}
                    style={{ ...inputBase, padding: '4px 7px', resize: 'vertical' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFFFFF'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
                  />
                ) : (
                  <input value={(val as string) || ''}
                    onChange={(e) => updateArrayItem(sectionKey, index, f.key, e.target.value)}
                    style={inputBase}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFFFFF'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
        width: '100%', marginTop: 4, padding: '5px 0',
        border: `1.5px dashed ${hov ? '#A8A29E' : '#E7E5E4'}`,
        borderRadius: 6,
        background: hov ? 'rgba(0,0,0,0.02)' : 'transparent',
        color: hov ? '#78716C' : '#A8A29E',
        fontSize: 11, cursor: 'pointer', transition: 'all 0.15s',
        fontFamily: 'inherit',
      }}
    >
      <PlusOutlined style={{ fontSize: 9 }} />
      {label}
    </button>
  );
}

function BasicFieldRow({ label, value, canRemove, onChange, onRemove }: {
  label: string; value: string; canRemove: boolean;
  onChange: (v: string) => void; onRemove: () => void;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ marginBottom: 5 }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <span style={{ fontSize: 10, color: '#A8A29E', fontFamily: 'inherit' }}>{label}</span>
        {canRemove && hov && (
          <button onClick={onRemove}
            style={{ border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer', fontSize: 10, padding: 0 }}
            onMouseEnter={e => { e.currentTarget.style.color = '#DC2626'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#D6D3D1'; }}
          >
            <DeleteOutlined />
          </button>
        )}
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`输入${label}`}
        style={inputBase}
        onFocus={(e) => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFFFFF'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
      />
    </div>
  );
}
