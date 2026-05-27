import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useEditorStore } from '../../stores/editor.store';

const SECTION_META: Record<string, { icon: string; label: string; addLabel: string }> = {
  basics: { icon: '👤', label: '基本信息', addLabel: '' },
  experience: { icon: '💼', label: '工作经历', addLabel: '添加经历' },
  education: { icon: '🎓', label: '教育背景', addLabel: '添加教育' },
  skills: { icon: '⚡', label: '技能特长', addLabel: '添加技能' },
  projects: { icon: '📁', label: '项目经历', addLabel: '添加项目' },
};

const BASICS_FIELDS = [
  { key: 'name', label: '姓名', required: true },
  { key: 'title', label: '职位头衔' },
  { key: 'email', label: '邮箱', required: true },
  { key: 'phone', label: '电话' },
  { key: 'location', label: '所在城市' },
];

const EXTRA_FIELDS = [
  { key: 'website', label: '个人网站' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github', label: 'GitHub' },
  { key: 'wechat', label: '微信' },
];

const CUSTOM_MODULES = [
  { key: 'awards', label: '荣誉奖项', icon: '🏆' },
  { key: 'certifications', label: '证书资质', icon: '📜' },
  { key: 'languages', label: '语言能力', icon: '🌐' },
  { key: 'interests', label: '兴趣爱好', icon: '🎯' },
  { key: 'volunteer', label: '志愿经历', icon: '🤝' },
];

const DRAGGABLE = new Set(['experience', 'education', 'skills', 'projects']);

function getItemSummary(key: string, item: Record<string, unknown>): string {
  if (key === 'experience') return [item.company, item.position].filter(Boolean).join(' · ') || '未填写';
  if (key === 'education') return (item.institution as string) || '未填写';
  if (key === 'skills') return [item.name, item.level].filter(Boolean).join(' · ') || '未填写';
  return (item.name as string) || '未填写';
}

const inputCss: React.CSSProperties = {
  width: '100%', fontSize: 12, color: '#1C1917', background: '#FAFAF9',
  border: '1px solid #E7E5E4', borderRadius: 6, padding: '5px 8px',
  outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' as const,
  transition: 'border-color 0.12s, background 0.12s',
};

export function SectionList() {
  const {
    sectionOrder, activeSection, setActiveSection, resume,
    reorderSections, addArrayItem, removeArrayItem, updateField,
    updateArrayItem, addCustomSection,
  } = useEditorStore();

  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['basics']));
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<{ key: string; pos: 'before' | 'after' } | null>(null);
  const [showAddModule, setShowAddModule] = useState(false);
  const [showAddField, setShowAddField] = useState(false);
  const [visibleFields, setVisibleFields] = useState(BASICS_FIELDS.map(f => f.key));

  const toggle = (key: string) => setExpanded(p => {
    const n = new Set(p);
    n.has(key) ? n.delete(key) : n.add(key);
    return n;
  });

  const onDragStart = useCallback((e: React.DragEvent, key: string) => {
    setDragKey(key);
    e.dataTransfer.effectAllowed = 'move';
    (e.currentTarget as HTMLElement).style.opacity = '0.4';
  }, []);

  const onDragEnd = useCallback((e: React.DragEvent) => {
    (e.currentTarget as HTMLElement).style.opacity = '1';
    setDragKey(null);
    setDropTarget(null);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent, key: string) => {
    if (!dragKey || key === dragKey || !DRAGGABLE.has(key)) return;
    e.preventDefault();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setDropTarget({ key, pos: e.clientY < rect.top + rect.height / 2 ? 'before' : 'after' });
  }, [dragKey]);

  const onDrop = useCallback((e: React.DragEvent, targetKey: string) => {
    e.preventDefault();
    if (!dragKey || dragKey === targetKey) return;
    const order = [...sectionOrder];
    const from = order.indexOf(dragKey);
    const to = order.indexOf(targetKey);
    if (from === -1 || to === -1) return;
    order.splice(from, 1);
    const newTo = order.indexOf(targetKey);
    order.splice(dropTarget?.pos === 'after' ? newTo + 1 : newTo, 0, dragKey);
    reorderSections(order);
    setDragKey(null);
    setDropTarget(null);
  }, [dragKey, sectionOrder, dropTarget, reorderSections]);

  if (!resume) return null;

  const allSections = sectionOrder.map(key => {
    const meta = SECTION_META[key] || { icon: '📋', label: key, addLabel: '添加条目' };
    return { key, ...meta };
  });

  return (
    <div style={{ borderRight: '1px solid #E7E5E4', height: '100%', background: '#FFF', display: 'flex', flexDirection: 'column', overflowY: 'auto', fontFamily: 'inherit' }}>

      {/* Section list */}
      <div style={{ flex: 1, padding: '8px 0' }}>
        {allSections.map(({ key, icon, label, addLabel }) => {
          const isOpen = expanded.has(key);
          const isDraggable = DRAGGABLE.has(key) || !SECTION_META[key];
          const isBasics = key === 'basics';
          const isArray = !isBasics;
          const items = isArray ? ((resume[key] as Record<string, unknown>[]) || []) : [];
          const isDrop = dropTarget?.key === key;

          return (
            <div key={key}>
              {/* Section header */}
              <div
                draggable={isDraggable}
                onDragStart={e => onDragStart(e, key)}
                onDragEnd={onDragEnd}
                onDragOver={e => onDragOver(e, key)}
                onDragLeave={() => setDropTarget(null)}
                onDrop={e => onDrop(e, key)}
                onClick={() => { toggle(key); setActiveSection(key); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 12px', margin: '0 8px', borderRadius: 8,
                  cursor: isDraggable ? 'grab' : 'pointer',
                  background: activeSection === key ? '#F5F5F4' : 'transparent',
                  transition: 'background 0.1s',
                  borderTop: isDrop && dropTarget?.pos === 'before' ? '2px solid #1C1917' : '2px solid transparent',
                  borderBottom: isDrop && dropTarget?.pos === 'after' ? '2px solid #1C1917' : '2px solid transparent',
                  opacity: dragKey === key ? 0.4 : 1,
                }}
                onMouseEnter={e => { if (activeSection !== key) (e.currentTarget as HTMLElement).style.background = '#FAFAF9'; }}
                onMouseLeave={e => { if (activeSection !== key) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                {isDraggable && <span style={{ fontSize: 10, color: '#D6D3D1', cursor: 'grab', lineHeight: 1 }}>⠿</span>}
                <span style={{ fontSize: 15, width: 20, textAlign: 'center', flexShrink: 0 }}>{icon}</span>
                <span style={{ flex: 1, fontSize: 13, fontWeight: 500, color: '#1C1917' }}>{label}</span>
                {isArray && items.length > 0 && (
                  <span style={{ fontSize: 11, color: '#78716C', background: '#F5F5F4', borderRadius: 10, padding: '1px 7px', fontWeight: 500 }}>
                    {items.length}
                  </span>
                )}
                <span style={{
                  fontSize: 11, color: '#A8A29E', transition: 'transform 0.15s',
                  transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block',
                }}>▶</span>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ background: '#FAFAF9', margin: '2px 8px 4px', borderRadius: 8, padding: '6px 0', border: '1px solid #F5F5F4' }}>
                  {isBasics ? (
                    <BasicsPanel
                      resume={resume}
                      visibleFields={visibleFields}
                      showAddField={showAddField}
                      setShowAddField={setShowAddField}
                      setVisibleFields={setVisibleFields}
                      updateField={updateField}
                    />
                  ) : (
                    <ArrayPanel
                      sectionKey={key}
                      items={items}
                      addLabel={addLabel}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayItem={updateArrayItem}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom actions */}
      <div style={{ padding: '8px 12px', borderTop: '1px solid #F5F5F4', display: 'flex', gap: 6 }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <button
            onClick={() => setShowAddModule(!showAddModule)}
            style={{
              width: '100%', padding: '7px 0', borderRadius: 6,
              border: '1.5px dashed #E7E5E4', background: 'transparent',
              color: '#A8A29E', cursor: 'pointer', fontSize: 12, fontWeight: 500,
              fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
              transition: 'all 0.12s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.color = '#1C1917'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.color = '#A8A29E'; }}
          >
            <PlusOutlined style={{ fontSize: 10 }} /> 添加模块
          </button>
          {showAddModule && (
            <div style={{
              position: 'absolute', bottom: '100%', left: 0, right: 0, marginBottom: 4,
              background: '#FFF', border: '1px solid #E7E5E4', borderRadius: 8,
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)', overflow: 'hidden', zIndex: 100,
            }}>
              {CUSTOM_MODULES.filter(m => !sectionOrder.includes(m.key)).map(m => (
                <div
                  key={m.key}
                  onClick={() => { addCustomSection(m.key); setShowAddModule(false); }}
                  style={{ padding: '8px 12px', fontSize: 12, color: '#44403C', cursor: 'pointer', display: 'flex', gap: 8, alignItems: 'center' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F5F5F4'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
                >
                  <span style={{ fontSize: 14 }}>{m.icon}</span> {m.label}
                </div>
              ))}
              {CUSTOM_MODULES.filter(m => !sectionOrder.includes(m.key)).length === 0 && (
                <div style={{ padding: '10px 12px', fontSize: 12, color: '#A8A29E' }}>已添加全部模块</div>
              )}
            </div>
          )}
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '7px 14px', borderRadius: 6, border: '1px solid #E7E5E4',
            background: '#FFF', color: '#78716C', cursor: 'pointer', fontSize: 12,
            fontWeight: 500, fontFamily: 'inherit', transition: 'all 0.12s', flexShrink: 0,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#78716C'; }}
        >
          换模板
        </button>
      </div>
    </div>
  );
}

/* ---- Basics Panel ---- */
function BasicsPanel({ resume, visibleFields, showAddField, setShowAddField, setVisibleFields, updateField }: {
  resume: any; visibleFields: string[]; showAddField: boolean;
  setShowAddField: (v: boolean) => void; setVisibleFields: (fn: (p: string[]) => string[]) => void;
  updateField: (s: string, f: string, v: unknown) => void;
}) {
  const basics = resume.basics || {};
  return (
    <div style={{ padding: '4px 12px' }}>
      {visibleFields.map(fKey => {
        const def = [...BASICS_FIELDS, ...EXTRA_FIELDS].find(f => f.key === fKey);
        if (!def) return null;
        const val = (basics[fKey] as string) || '';
        return (
          <div key={fKey} style={{ marginBottom: 6 }}>
            <label style={{ fontSize: 11, color: '#A8A29E', display: 'block', marginBottom: 2 }}>{def.label}</label>
            <input
              value={val}
              onChange={e => updateField('basics', fKey, e.target.value)}
              placeholder={`输入${def.label}`}
              style={inputCss}
              onFocus={e => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFF'; }}
              onBlur={e => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
            />
          </div>
        );
      })}
      {/* 个人简介 */}
      <div style={{ marginBottom: 6 }}>
        <label style={{ fontSize: 11, color: '#A8A29E', display: 'block', marginBottom: 2 }}>个人简介</label>
        <textarea
          value={(basics.summary as string) || ''}
          onChange={e => updateField('basics', 'summary', e.target.value)}
          rows={3}
          placeholder="输入个人简介..."
          style={{ ...inputCss, resize: 'vertical' as const, lineHeight: 1.6 }}
          onFocus={e => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFF'; }}
          onBlur={e => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
        />
      </div>
      {/* Add field */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setShowAddField(!showAddField)}
          style={{
            width: '100%', padding: '4px 0', border: '1px dashed #E7E5E4', borderRadius: 5,
            background: 'transparent', color: '#A8A29E', fontSize: 11, cursor: 'pointer',
            fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3,
          }}
        >
          <PlusOutlined style={{ fontSize: 9 }} /> 添加字段
        </button>
        {showAddField && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100, marginTop: 2,
            background: '#FFF', border: '1px solid #E7E5E4', borderRadius: 6,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)', maxHeight: 150, overflowY: 'auto',
          }}>
            {EXTRA_FIELDS.filter(o => !visibleFields.includes(o.key)).map(o => (
              <div
                key={o.key}
                onClick={() => { setVisibleFields(p => [...p, o.key]); setShowAddField(false); }}
                style={{ padding: '6px 10px', fontSize: 12, color: '#44403C', cursor: 'pointer' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F5F5F4'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
              >
                {o.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Array Section Panel ---- */
function ArrayPanel({ sectionKey, items, addLabel, addArrayItem, removeArrayItem, updateArrayItem }: {
  sectionKey: string; items: Record<string, unknown>[]; addLabel: string;
  addArrayItem: (k: string) => void; removeArrayItem: (k: string, i: number) => void;
  updateArrayItem: (k: string, i: number, f: string, v: unknown) => void;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const FIELDS: Record<string, { key: string; label: string; type?: 'textarea' | 'highlights' }[]> = {
    experience: [
      { key: 'company', label: '公司' }, { key: 'position', label: '职位' },
      { key: 'startDate', label: '开始' }, { key: 'endDate', label: '结束' },
      { key: 'highlights', label: '工作亮点', type: 'highlights' },
    ],
    education: [
      { key: 'institution', label: '学校' }, { key: 'area', label: '专业' },
      { key: 'studyType', label: '学历' }, { key: 'startDate', label: '开始' }, { key: 'endDate', label: '结束' },
    ],
    skills: [{ key: 'name', label: '技能' }, { key: 'level', label: '水平' }],
    projects: [
      { key: 'name', label: '名称' }, { key: 'role', label: '角色' },
      { key: 'startDate', label: '开始' }, { key: 'endDate', label: '结束' },
      { key: 'description', label: '描述', type: 'textarea' },
      { key: 'highlights', label: '亮点', type: 'highlights' },
    ],
  };

  const fields = FIELDS[sectionKey] || [{ key: 'name', label: '名称' }, { key: 'description', label: '描述', type: 'textarea' as const }];

  return (
    <div style={{ padding: '2px 8px' }}>
      {items.map((item, idx) => {
        const summary = getItemSummary(sectionKey, item);
        const isOpen = openIdx === idx;
        return (
          <div key={idx} style={{ marginBottom: 2 }}>
            {/* Item header */}
            <div
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '5px 8px', borderRadius: 6, cursor: 'pointer',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F5F5F4'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
            >
              <span style={{ fontSize: 10, color: '#D6D3D1', transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.12s', display: 'inline-block' }}>▶</span>
              <span style={{ flex: 1, fontSize: 12, color: '#44403C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{summary}</span>
              <button
                onClick={e => {
                  e.stopPropagation();
                  Modal.confirm({ title: '删除', content: `删除「${summary}」？`, okText: '删除', cancelText: '取消', okButtonProps: { danger: true }, onOk: () => removeArrayItem(sectionKey, idx) });
                }}
                style={{ border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer', padding: 0, fontSize: 11, opacity: 0.6, transition: 'opacity 0.1s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#DC2626'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.color = '#D6D3D1'; }}
              >
                <DeleteOutlined />
              </button>
            </div>
            {/* Item edit form */}
            {isOpen && (
              <div style={{ padding: '4px 8px 8px 22px' }}>
                {fields.map(f => {
                  if (f.type === 'highlights') {
                    const arr = (item[f.key] as string[]) || [];
                    return (
                      <div key={f.key} style={{ marginBottom: 4 }}>
                        <label style={{ fontSize: 10, color: '#A8A29E' }}>{f.label}</label>
                        {arr.map((h, hi) => (
                          <div key={hi} style={{ display: 'flex', gap: 4, marginTop: 2 }}>
                            <input value={h} onChange={e => { const a = [...arr]; a[hi] = e.target.value; updateArrayItem(sectionKey, idx, f.key, a); }}
                              style={{ ...inputCss, fontSize: 11, padding: '3px 6px' }}
                              onFocus={e => { e.currentTarget.style.borderColor = '#1C1917'; }}
                              onBlur={e => { e.currentTarget.style.borderColor = '#E7E5E4'; }} />
                            <button onClick={() => updateArrayItem(sectionKey, idx, f.key, arr.filter((_, i) => i !== hi))}
                              style={{ border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer', fontSize: 10 }}>×</button>
                          </div>
                        ))}
                        <button onClick={() => updateArrayItem(sectionKey, idx, f.key, [...arr, ''])}
                          style={{ marginTop: 3, border: '1px dashed #E7E5E4', borderRadius: 4, background: 'none', color: '#A8A29E', fontSize: 10, padding: '2px 0', width: '100%', cursor: 'pointer', fontFamily: 'inherit' }}>+</button>
                      </div>
                    );
                  }
                  return (
                    <div key={f.key} style={{ marginBottom: 4 }}>
                      <label style={{ fontSize: 10, color: '#A8A29E' }}>{f.label}</label>
                      {f.type === 'textarea' ? (
                        <textarea value={(item[f.key] as string) || ''} onChange={e => updateArrayItem(sectionKey, idx, f.key, e.target.value)}
                          rows={2} style={{ ...inputCss, fontSize: 11, padding: '3px 6px', resize: 'vertical' as const }}
                          onFocus={e => { e.currentTarget.style.borderColor = '#1C1917'; }}
                          onBlur={e => { e.currentTarget.style.borderColor = '#E7E5E4'; }} />
                      ) : (
                        <input value={(item[f.key] as string) || ''} onChange={e => updateArrayItem(sectionKey, idx, f.key, e.target.value)}
                          style={{ ...inputCss, fontSize: 11, padding: '3px 6px' }}
                          onFocus={e => { e.currentTarget.style.borderColor = '#1C1917'; }}
                          onBlur={e => { e.currentTarget.style.borderColor = '#E7E5E4'; }} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      <button
        onClick={() => addArrayItem(sectionKey)}
        style={{
          width: 'calc(100% - 8px)', margin: '2px 4px 4px', padding: '5px 0',
          border: '1px dashed #E7E5E4', borderRadius: 6, background: 'transparent',
          color: '#A8A29E', fontSize: 11, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
          transition: 'all 0.12s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.color = '#1C1917'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.color = '#A8A29E'; }}
      >
        <PlusOutlined style={{ fontSize: 9 }} /> {addLabel || '添加条目'}
      </button>
    </div>
  );
}
