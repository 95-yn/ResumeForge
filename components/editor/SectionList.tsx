'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useEditorStore } from '@/lib/editor-store';
import { InlineRichText } from './InlineRichText';
import { confirmDialog } from './ConfirmDialog';

const RESUME_BG_COLORS = [
  { color: '#FFFFFF', label: '白' },
  { color: '#FAFAF9', label: '米白' },
  { color: '#F5F5F4', label: '浅灰' },
  { color: '#FFFBEB', label: '暖黄' },
  { color: '#FFF1F2', label: '浅粉' },
  { color: '#ECFDF5', label: '浅绿' },
  { color: '#EFF6FF', label: '浅蓝' },
  { color: '#FAF5FF', label: '浅紫' },
];

/** 6-dot grip SVG icon */
function GripDots() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="2.5" cy="2.5"  r="1.1" fill="currentColor" />
      <circle cx="7.5" cy="2.5"  r="1.1" fill="currentColor" />
      <circle cx="2.5" cy="7"    r="1.1" fill="currentColor" />
      <circle cx="7.5" cy="7"    r="1.1" fill="currentColor" />
      <circle cx="2.5" cy="11.5" r="1.1" fill="currentColor" />
      <circle cx="7.5" cy="11.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

/** Chevron that rotates 90deg with spring easing */
function CollapseChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10" height="10" viewBox="0 0 10 10" fill="none"
      aria-hidden="true"
      style={{
        color: '#A8A29E',
        transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1)',
        flexShrink: 0,
      }}
    >
      <path d="M3 2l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 简笔 SVG icon — 1.5px stroke
function SectionIcon({ name, size = 14 }: { name: string; size?: number }) {
  const s = {
    width: size, height: size, fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'basics': return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>;
    case 'experience': return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>;
    case 'education': return <svg viewBox="0 0 24 24" {...s}><path d="M22 10L12 4 2 10l10 6 10-6Z"/><path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"/></svg>;
    case 'skills': return <svg viewBox="0 0 24 24" {...s}><path d="M12 2l2.6 6.5L21 9.2l-5 4.7L17.4 21 12 17.7 6.6 21 8 13.9 3 9.2l6.4-0.7L12 2z"/></svg>;
    case 'projects': return <svg viewBox="0 0 24 24" {...s}><path d="M3 7v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-7L11 5H4a1 1 0 0 0-1 1v1Z"/></svg>;
    case 'awards': return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="9" r="6"/><path d="M9 15l-2 7 5-3 5 3-2-7"/></svg>;
    case 'certifications': return <svg viewBox="0 0 24 24" {...s}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>;
    case 'languages': return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'interests': return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>;
    case 'volunteer': return <svg viewBox="0 0 24 24" {...s}><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>;
    default: return <svg viewBox="0 0 24 24" {...s}><rect x="4" y="4" width="16" height="16" rx="2"/></svg>;
  }
}

const SECTION_META: Record<string, { iconName: string; label: string; addLabel: string }> = {
  basics:     { iconName: 'basics',     label: '基本信息', addLabel: '' },
  experience: { iconName: 'experience', label: '工作经历', addLabel: '添加经历' },
  education:  { iconName: 'education',  label: '教育背景', addLabel: '添加教育' },
  skills:     { iconName: 'skills',     label: '技能特长', addLabel: '添加技能' },
  projects:   { iconName: 'projects',   label: '项目经历', addLabel: '添加项目' },
};

const BASICS_FIELDS = [
  { key: 'name',     label: '姓名',     required: true },
  { key: 'title',    label: '职位头衔' },
  { key: 'email',    label: '邮箱',     required: true },
  { key: 'phone',    label: '电话' },
  { key: 'location', label: '所在城市' },
];

const EXTRA_FIELDS = [
  { key: 'website',  label: '个人网站' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github',   label: 'GitHub' },
  { key: 'wechat',   label: '微信' },
];

/** 专业招聘语境占位文案 */
const BASICS_PLACEHOLDERS: Record<string, string> = {
  name:     '你的真实姓名',
  title:    '目标职位，如：前端工程师 / 产品经理',
  email:    '常用邮箱，招聘方将通过此联系你',
  phone:    '11 位手机号',
  location: '求职城市，如：北京 / 上海',
  website:  'https://yoursite.com',
  linkedin: 'linkedin.com/in/yourname',
  github:   'github.com/yourname',
  wechat:   '微信号（选填）',
};

const CUSTOM_MODULES = [
  { key: 'awards',         label: '荣誉奖项', iconName: 'awards' },
  { key: 'certifications', label: '证书资质', iconName: 'certifications' },
  { key: 'languages',      label: '语言能力', iconName: 'languages' },
  { key: 'interests',      label: '兴趣爱好', iconName: 'interests' },
  { key: 'volunteer',      label: '志愿经历', iconName: 'volunteer' },
];

const DRAGGABLE = new Set(['experience', 'education', 'skills', 'projects']);

function getItemSummary(key: string, item: Record<string, unknown>): string {
  if (key === 'experience') return [item.company, item.position].filter(Boolean).join(' · ') || '未填写';
  if (key === 'education') return (item.institution as string) || '未填写';
  if (key === 'skills') return [item.name, item.level].filter(Boolean).join(' · ') || '未填写';
  return (item.name as string) || '未填写';
}

const inputCss: React.CSSProperties = {
  width: '100%', fontSize: 13, color: '#1C1917', background: '#FAFAF9',
  border: '1px solid #E7E5E4', borderRadius: 6, padding: '7px 10px',
  outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' as const,
  transition: 'border-color 0.12s, background 0.12s',
};

const CONTENT_EDITABLE_STYLE = `
  [data-placeholder]:empty::before {
    content: attr(data-placeholder);
    color: #A8A29E;
    pointer-events: none;
  }
  /* focus-visible keyboard outlines */
  button:focus-visible, a:focus-visible, [tabindex]:focus-visible {
    outline: 1px solid #1C1917 !important;
    outline-offset: 2px !important;
  }
  @media (prefers-reduced-motion: reduce) {
    * { transition-duration: 0ms !important; animation-duration: 0ms !important; }
  }
`;

/** Animated collapsible panel — height 0 → auto with spring */
function CollapsiblePanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  // 'auto' = 展开完成后解锁为自适应高度（关键：内部 TipTap 等异步内容晚于首帧布局，
  // 若把 maxHeight 永久冻结在打开瞬间测得的 scrollHeight，会把后续字段裁掉）。
  const [maxH, setMaxH] = useState<number | 'auto'>(open ? 'auto' : 0);
  const [opacity, setOpacity] = useState(open ? 1 : 0);

  const rafRef = useRef<number>();
  const prevOpen = useRef(open);

  if (prevOpen.current !== open) {
    prevOpen.current = open;
    if (open) {
      setMaxH(0);
      setOpacity(0);
      cancelAnimationFrame(rafRef.current!);
      rafRef.current = requestAnimationFrame(() => {
        const h = innerRef.current?.scrollHeight ?? 600;
        setMaxH(h + 40);
        setOpacity(1);
      });
    } else {
      // auto → 先固定到当前实测像素，再下一帧收到 0，才能产生过渡动画
      const h = innerRef.current?.scrollHeight ?? 0;
      setMaxH(h);
      setOpacity(0);
      cancelAnimationFrame(rafRef.current!);
      rafRef.current = requestAnimationFrame(() => {
        setMaxH(0);
      });
    }
  }

  // 展开动画结束后解锁为 auto，使晚到的内容（TipTap 编辑器、新增亮点等）完整显示
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === 'max-height' && open) setMaxH('auto');
  };

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      style={{
        maxHeight: maxH === 'auto' ? 'none' : maxH,
        opacity,
        overflow: 'hidden',
        transition: [
          `max-height 280ms cubic-bezier(0.16, 1, 0.3, 1)`,
          `opacity 220ms cubic-bezier(0.16, 1, 0.3, 1)`,
        ].join(', '),
      }}
    >
      <div ref={innerRef}>
        {children}
      </div>
    </div>
  );
}

export function SectionList() {
  const {
    sectionOrder, activeSection, setActiveSection, resume,
    reorderSections, addArrayItem, removeArrayItem, updateField,
    updateArrayItem, addCustomSection, updateSettings, removeSection,
  } = useEditorStore();

  const router = useRouter();
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
    const customMeta = CUSTOM_MODULES.find(m => m.key === key);
    const meta = SECTION_META[key] || (customMeta
      ? { iconName: customMeta.iconName, label: customMeta.label, addLabel: '添加条目' }
      : { iconName: 'default', label: key, addLabel: '添加条目' });
    return { key, ...meta };
  });

  return (
    <div style={{
      height: '100%', background: '#FEFEFE',
      display: 'flex', flexDirection: 'column', overflowY: 'auto',
      fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
      // Gradient fade left border
      borderRight: 'none',
      position: 'relative',
    }}>
      {/* Gradient right border */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 1,
        background: 'linear-gradient(to bottom, transparent 0%, #E7E5E4 20%, #E7E5E4 80%, transparent 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      <style>{CONTENT_EDITABLE_STYLE}</style>

      {/* Section list */}
      <div style={{ flex: 1, padding: '8px 0' }}>
        {allSections.map(({ key, iconName, label, addLabel }) => {
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
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                onDragStart={e => onDragStart(e, key)}
                onDragEnd={onDragEnd}
                onDragOver={e => onDragOver(e, key)}
                onDragLeave={() => setDropTarget(null)}
                onDrop={e => onDrop(e, key)}
                onClick={() => { toggle(key); setActiveSection(key); }}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(key); setActiveSection(key); } }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 12px', margin: '0 8px', borderRadius: 8,
                  cursor: isDraggable ? 'grab' : 'pointer',
                  background: activeSection === key ? '#F0EAE0' : 'transparent',
                  transition: 'background 180ms cubic-bezier(0.16, 1, 0.3, 1)',
                  // Drop indicator: brick-red 1px line instead of ink dark 2px
                  borderTop: isDrop && dropTarget?.pos === 'before' ? '1px solid #B0463A' : '1px solid transparent',
                  borderBottom: isDrop && dropTarget?.pos === 'after' ? '1px solid #B0463A' : '1px solid transparent',
                  opacity: dragKey === key ? 0.4 : 1,
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (activeSection !== key) (e.currentTarget as HTMLElement).style.background = '#F0EAE0';
                  // Section icon tints to ink-warm on hover
                  const icon = (e.currentTarget as HTMLElement).querySelector<HTMLSpanElement>('.section-icon-wrap');
                  if (icon) icon.style.color = '#1C1917';
                  // Grip appears on hover
                  const grip = (e.currentTarget as HTMLElement).querySelector<HTMLSpanElement>('.section-grip');
                  if (grip) grip.style.color = '#A8A29E';
                  const btn = (e.currentTarget as HTMLElement).querySelector<HTMLButtonElement>('.section-delete-btn');
                  if (btn) btn.style.opacity = '0.5';
                }}
                onMouseLeave={e => {
                  if (activeSection !== key) (e.currentTarget as HTMLElement).style.background = 'transparent';
                  const icon = (e.currentTarget as HTMLElement).querySelector<HTMLSpanElement>('.section-icon-wrap');
                  if (icon) icon.style.color = '#78716C';
                  const grip = (e.currentTarget as HTMLElement).querySelector<HTMLSpanElement>('.section-grip');
                  if (grip) grip.style.color = 'transparent';
                  const btn = (e.currentTarget as HTMLElement).querySelector<HTMLButtonElement>('.section-delete-btn');
                  if (btn) btn.style.opacity = '0';
                }}
              >
                {isDraggable && (
                  <span
                    className="section-grip"
                    style={{
                      color: 'transparent', cursor: 'grab', lineHeight: 1,
                      display: 'inline-flex', alignItems: 'center', flexShrink: 0,
                      transition: 'color 150ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <GripDots />
                  </span>
                )}
                <span
                  className="section-icon-wrap"
                  style={{
                    width: 18, height: 18, display: 'inline-flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, color: '#78716C',
                    transition: 'color 150ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <SectionIcon name={iconName} size={15} />
                </span>
                <span style={{
                  flex: 1, fontSize: 13, fontWeight: 500, color: '#1C1917',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {label}
                </span>
                {isArray && items.length > 0 && (
                  <span style={{
                    fontSize: 10,
                    fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: '#78716C',
                    background: 'rgba(45,24,16,0.07)',
                    borderRadius: 8, padding: '1px 5px', flexShrink: 0,
                  }}>
                    {items.length}
                  </span>
                )}
                {!isBasics && (
                  <button
                    onClick={async e => {
                      e.stopPropagation();
                      if (await confirmDialog({
                        title: '删除模块',
                        message: `确定删除「${label}」模块？删除后可通过"添加模块"恢复，或用 Cmd+Z 撤销。`,
                        confirmLabel: '删除', danger: true,
                      })) removeSection(key);
                    }}
                    title="删除模块"
                    aria-label={`删除 ${label}`}
                    style={{
                      border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer',
                      padding: '0 2px', fontSize: 12, opacity: 0,
                      transition: 'opacity 0.15s, color 0.1s',
                      lineHeight: 1, flexShrink: 0,
                    }}
                    className="section-delete-btn"
                    onMouseEnter={e => { e.currentTarget.style.color = '#B0463A'; e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#D6D3D1'; e.currentTarget.style.opacity = '0'; }}
                  >
                    <DeleteOutlined style={{ fontSize: 11 }} />
                  </button>
                )}
                <CollapseChevron open={isOpen} />
              </div>

              {/* Animated expanded content */}
              <CollapsiblePanel open={isOpen}>
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
              </CollapsiblePanel>
            </div>
          );
        })}
      </div>

      {/* Background color panel */}
      <div style={{ padding: '8px 12px', borderTop: '1px solid #F5F5F4' }}>
        <div style={{ fontSize: 10, color: '#A8A29E', marginBottom: 6, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', 'SF Mono', monospace" }}>简历背景色</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
          {/* 默认：清除覆盖，使用模板自带背景色 */}
          {(() => {
            const current = resume?.settings?.backgroundColor as string | undefined;
            const isDefault = !current;
            return (
              <button
                title="使用模板自带背景"
                aria-label="背景色: 模板默认"
                onClick={() => updateSettings('backgroundColor', '')}
                style={{
                  height: 20, padding: '0 8px', borderRadius: 10,
                  border: isDefault ? '1.5px solid #1C1917' : '1.5px solid #E7E5E4',
                  background: 'transparent', color: isDefault ? '#1C1917' : '#A8A29E',
                  cursor: 'pointer', flexShrink: 0, fontSize: 10, fontWeight: 500,
                  fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                  transition: 'border-color 0.1s, color 0.1s', outline: 'none',
                }}
                onMouseEnter={e => { if (!isDefault) { (e.currentTarget as HTMLElement).style.borderColor = '#1C1917'; (e.currentTarget as HTMLElement).style.color = '#1C1917'; } }}
                onMouseLeave={e => { if (!isDefault) { (e.currentTarget as HTMLElement).style.borderColor = '#E7E5E4'; (e.currentTarget as HTMLElement).style.color = '#A8A29E'; } }}
              >默认</button>
            );
          })()}
          {RESUME_BG_COLORS.map(({ color, label }) => {
            const current = resume?.settings?.backgroundColor as string | undefined;
            const isActive = current === color;
            return (
              <button
                key={color}
                title={label}
                aria-label={`背景色: ${label}`}
                onClick={() => updateSettings('backgroundColor', color)}
                style={{
                  width: 20, height: 20, borderRadius: '50%',
                  border: isActive ? '2px solid #1C1917' : '2px solid #E7E5E4',
                  background: color,
                  cursor: 'pointer', padding: 0, flexShrink: 0,
                  transition: 'transform 0.1s, border-color 0.1s',
                  boxShadow: isActive ? '0 0 0 2px #fff inset' : 'none',
                  outline: 'none',
                }}
                onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#1C1917'; } }}
                onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.borderColor = '#E7E5E4'; } }}
              />
            );
          })}
          {/* Custom color picker */}
          <label
            title="自定义颜色"
            style={{
              width: 20, height: 20, borderRadius: '50%',
              border: '2px solid #E7E5E4',
              background: (() => {
                const c = resume?.settings?.backgroundColor as string | undefined;
                const isPreset = RESUME_BG_COLORS.some(p => p.color === (c || '#FFFFFF'));
                return isPreset ? 'conic-gradient(red,yellow,lime,cyan,blue,magenta,red)' : (c || '#FFFFFF');
              })(),
              cursor: 'pointer', padding: 0, flexShrink: 0,
              display: 'inline-block', overflow: 'hidden',
              transition: 'transform 0.1s, border-color 0.1s',
              position: 'relative',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#1C1917'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.borderColor = '#E7E5E4'; }}
          >
            <input
              type="color"
              defaultValue={(resume?.settings?.backgroundColor as string | undefined) || '#ffffff'}
              onChange={e => updateSettings('backgroundColor', e.target.value)}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                opacity: 0, cursor: 'pointer', border: 'none', padding: 0,
              }}
            />
          </label>
          <button
            title="重置"
            onClick={() => updateSettings('backgroundColor', '#FFFFFF')}
            style={{
              fontSize: 10, color: '#A8A29E', background: 'transparent', border: 'none',
              cursor: 'pointer', padding: '2px 4px', borderRadius: 4,
              fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
              outline: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#1C1917'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#A8A29E'; }}
          >重置</button>
        </div>
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
              transition: 'all 0.12s', outline: 'none',
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
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F0EAE0'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
                >
                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#78716C' }}>
                    <SectionIcon name={m.iconName} size={14} />
                  </span>
                  {m.label}
                </div>
              ))}
              {CUSTOM_MODULES.filter(m => !sectionOrder.includes(m.key)).length === 0 && (
                <div style={{ padding: '10px 12px', fontSize: 12, color: '#A8A29E' }}>已添加全部模块</div>
              )}
            </div>
          )}
        </div>
        <button
          onClick={() => router.push('/templates')}
          style={{
            padding: '7px 14px', borderRadius: 6, border: '1px solid #E7E5E4',
            background: '#FFF', color: '#78716C', cursor: 'pointer', fontSize: 12,
            fontWeight: 500, fontFamily: 'inherit', transition: 'all 0.12s', flexShrink: 0,
            outline: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F0EAE0'; e.currentTarget.style.color = '#1C1917'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#78716C'; }}
        >
          换模板
        </button>
      </div>
    </div>
  );
}

/* ---- Portal Dropdown (Bug 1 fix) ---- */
function PortalDropdown({ anchorRef, open, onClose, children }: {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState<{ top: number; left: number; width: number } | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && anchorRef.current) {
      const r = anchorRef.current.getBoundingClientRect();
      const dropH = 180; // estimated dropdown height
      // Flip up if not enough space below
      const top = (r.bottom + 4 + dropH > window.innerHeight - 10)
        ? r.top - dropH - 4
        : r.bottom + 4;
      setPos({ top, left: r.left, width: r.width });
    }
  }, [open, anchorRef]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target || !document.contains(target)) return;  // detached node — ignore
      if (
        dropRef.current && !dropRef.current.contains(target) &&
        anchorRef.current && !anchorRef.current.contains(target)
      ) {
        onClose();
      }
    };
    setTimeout(() => document.addEventListener('click', handler), 250);
    return () => document.removeEventListener('click', handler);
  }, [open, onClose, anchorRef]);

  if (!open || !pos) return null;

  return createPortal(
    <div ref={dropRef} data-testid="portal-dropdown" style={{
      position: 'fixed', top: pos.top, left: pos.left, width: pos.width,
      zIndex: 99999,
      background: '#FFF', border: '1px solid #E7E5E4', borderRadius: 6,
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)', maxHeight: 180, overflowY: 'auto',
    }}>
      {children}
    </div>,
    document.body
  );
}

/* ---- Basics Panel ---- */
function BasicsPanel({ resume, visibleFields, showAddField, setShowAddField, setVisibleFields, updateField }: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resume: any; visibleFields: string[]; showAddField: boolean;
  setShowAddField: (v: boolean) => void; setVisibleFields: (fn: (p: string[]) => string[]) => void;
  updateField: (s: string, f: string, v: unknown) => void;
}) {
  const basics = resume.basics || {};
  const addFieldBtnRef = useRef<HTMLButtonElement>(null);

  const removeField = (fKey: string) => {
    setVisibleFields(p => p.filter(k => k !== fKey));
    updateField('basics', fKey, '');
  };

  const availableFields = [...BASICS_FIELDS, ...EXTRA_FIELDS].filter(o => !visibleFields.includes(o.key));

  return (
    <div style={{ padding: '4px 12px' }}>
      {visibleFields.map(fKey => {
        const def = [...BASICS_FIELDS, ...EXTRA_FIELDS].find(f => f.key === fKey);
        if (!def) return null;
        const val = (basics[fKey] as string) || '';
        return (
          <div key={fKey} style={{ marginBottom: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
              <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', 'SF Mono', monospace", letterSpacing: '0.06em', textTransform: 'uppercase' }}>{def.label}</label>
              <button
                onClick={() => removeField(fKey)}
                title={`删除${def.label}`}
                aria-label={`删除${def.label}`}
                style={{
                  border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer',
                  padding: 0, fontSize: 10, lineHeight: 1, opacity: 0.5,
                  transition: 'opacity 0.1s, color 0.1s', outline: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#B0463A'; e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#D6D3D1'; e.currentTarget.style.opacity = '0.5'; }}
              >
                <DeleteOutlined style={{ fontSize: 10 }} />
              </button>
            </div>
            <input
              value={val}
              onChange={e => updateField('basics', fKey, e.target.value)}
              placeholder={BASICS_PLACEHOLDERS[fKey] ?? `填写${def.label}`}
              style={inputCss}
              onFocus={e => { e.currentTarget.style.borderColor = '#1C1917'; e.currentTarget.style.background = '#FFF'; }}
              onBlur={e => { e.currentTarget.style.borderColor = '#E7E5E4'; e.currentTarget.style.background = '#FAFAF9'; }}
            />
          </div>
        );
      })}
      {/* 个人简介 */}
      <div style={{ marginBottom: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
          <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', 'SF Mono', monospace", letterSpacing: '0.06em', textTransform: 'uppercase' }}>个人简介</label>
          <button
            onClick={() => updateField('basics', 'summary', '')}
            title="清空个人简介"
            style={{
              border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer',
              padding: 0, fontSize: 10, lineHeight: 1, opacity: 0.5,
              transition: 'opacity 0.1s, color 0.1s', outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#B0463A'; e.currentTarget.style.opacity = '1'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#D6D3D1'; e.currentTarget.style.opacity = '0.5'; }}
          >
            <DeleteOutlined style={{ fontSize: 10 }} />
          </button>
        </div>
        <InlineRichText
          value={(basics.summary as string) || ''}
          onChange={html => updateField('basics', 'summary', html)}
          placeholder="一句话说清你是谁、有什么核心价值，建议 30 字内"
          minHeight={64}
        />
      </div>
      {/* Add field — uses Portal dropdown to avoid overflow clipping (Bug 1) */}
      <div>
        <button
          ref={addFieldBtnRef}
          onClick={() => setShowAddField(!showAddField)}
          data-testid="add-field-btn"
          style={{
            width: '100%', padding: '4px 0', border: '1px dashed #E7E5E4', borderRadius: 5,
            background: 'transparent', color: '#A8A29E', fontSize: 11, cursor: 'pointer',
            fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3,
            outline: 'none',
          }}
        >
          <PlusOutlined style={{ fontSize: 9 }} /> 添加字段
        </button>
        <PortalDropdown
          anchorRef={addFieldBtnRef}
          open={showAddField}
          onClose={() => setShowAddField(false)}
        >
          {availableFields.map(o => (
            <div
              key={o.key}
              onClick={() => { setVisibleFields(p => [...p, o.key]); setShowAddField(false); }}
              style={{ padding: '6px 10px', fontSize: 12, color: '#44403C', cursor: 'pointer' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F0EAE0'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
            >
              {o.label}
            </div>
          ))}
          {availableFields.length === 0 && (
            <div style={{ padding: '8px 10px', fontSize: 12, color: '#A8A29E' }}>所有字段已显示</div>
          )}
        </PortalDropdown>
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

  const fields = FIELDS[sectionKey] || [
    { key: 'name', label: '名称' },
    { key: 'description', label: '描述', type: 'textarea' as const },
  ];

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
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenIdx(isOpen ? null : idx); } }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '5px 8px', borderRadius: 6, cursor: 'pointer',
                transition: 'background 0.1s', outline: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F0EAE0'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
            >
              <CollapseChevron open={isOpen} />
              <span
                title={summary}
                style={{
                  flex: 1, fontSize: 12, color: '#44403C',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}
              >
                {summary}
              </span>
              <button
                onClick={async e => {
                  e.stopPropagation();
                  if (await confirmDialog({
                    title: '删除', message: `删除「${summary}」？`,
                    confirmLabel: '删除', danger: true,
                  })) removeArrayItem(sectionKey, idx);
                }}
                aria-label={`删除 ${summary}`}
                style={{
                  border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer',
                  padding: 0, fontSize: 11, opacity: 0.6, transition: 'opacity 0.1s', outline: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#B0463A'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.color = '#D6D3D1'; }}
              >
                <DeleteOutlined />
              </button>
            </div>
            {/* Item edit form — animated */}
            <CollapsiblePanel open={isOpen}>
              <div style={{ padding: '4px 8px 8px 22px' }}>
                {fields.map(f => {
                  if (f.type === 'highlights') {
                    // Bug 4: highlights use InlineRichText for rich text support
                    const arr = (item[f.key] as string[]) || [];
                    return (
                      <div key={f.key} style={{ marginBottom: 4 }}>
                        <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em', textTransform: 'uppercase' }}>{f.label}</label>
                        {arr.map((h, hi) => (
                          <div key={hi} style={{ display: 'flex', gap: 4, marginTop: 2, alignItems: 'flex-start' }}>
                            <div style={{ flex: 1 }}>
                              <InlineRichText
                                value={h}
                                onChange={html => { const a = [...arr]; a[hi] = html; updateArrayItem(sectionKey, idx, f.key, a); }}
                                placeholder="一条可量化的成果"
                                minHeight={32}
                              />
                            </div>
                            <button
                              onClick={() => updateArrayItem(sectionKey, idx, f.key, arr.filter((_, i) => i !== hi))}
                              aria-label="删除此条"
                              style={{ border: 'none', background: 'none', color: '#D6D3D1', cursor: 'pointer', fontSize: 10, outline: 'none', marginTop: 4, flexShrink: 0 }}
                            >×</button>
                          </div>
                        ))}
                        <button
                          onClick={() => updateArrayItem(sectionKey, idx, f.key, [...arr, ''])}
                          style={{
                            marginTop: 3, border: '1px dashed #E7E5E4', borderRadius: 4,
                            background: 'none', color: '#A8A29E', fontSize: 10,
                            padding: '2px 0', width: '100%', cursor: 'pointer',
                            fontFamily: 'inherit', outline: 'none',
                          }}
                        >+</button>
                      </div>
                    );
                  }
                  return (
                    <div key={f.key} style={{ marginBottom: 4 }}>
                      <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em', textTransform: 'uppercase' }}>{f.label}</label>
                      {f.type === 'textarea' ? (
                        // Bug 4: textarea (description) uses InlineRichText
                        <InlineRichText
                          value={(item[f.key] as string) || ''}
                          onChange={html => updateArrayItem(sectionKey, idx, f.key, html)}
                          placeholder="一句话说明职责与成果"
                          minHeight={48}
                        />
                      ) : (
                        <input
                          value={(item[f.key] as string) || ''}
                          onChange={e => updateArrayItem(sectionKey, idx, f.key, e.target.value)}
                          style={{ ...inputCss, fontSize: 11, padding: '3px 6px' }}
                          onFocus={e => { e.currentTarget.style.borderColor = '#1C1917'; }}
                          onBlur={e => { e.currentTarget.style.borderColor = '#E7E5E4'; }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </CollapsiblePanel>
          </div>
        );
      })}
      <button
        onClick={() => addArrayItem(sectionKey)}
        style={{
          width: 'calc(100% - 8px)', margin: '4px 4px 8px', padding: '8px 0',
          border: '1px dashed #D6D3D1', borderRadius: 6, background: '#FAFAF9',
          color: '#78716C', fontSize: 12, fontWeight: 500, cursor: 'pointer',
          fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          transition: 'background 160ms ease-out, border-color 160ms ease-out, color 160ms ease-out',
          outline: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#1C1917';
          e.currentTarget.style.borderStyle = 'solid';
          e.currentTarget.style.background = '#F0EAE0';
          e.currentTarget.style.color = '#1C1917';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#D6D3D1';
          e.currentTarget.style.borderStyle = 'dashed';
          e.currentTarget.style.background = '#FAFAF9';
          e.currentTarget.style.color = '#78716C';
        }}
        onFocus={e => { e.currentTarget.style.outline = '1px solid #1C1917'; e.currentTarget.style.outlineOffset = '2px'; }}
        onBlur={e => { e.currentTarget.style.outline = 'none'; }}
      >
        <PlusOutlined style={{ fontSize: 11 }} /> {addLabel || '添加条目'}
      </button>
    </div>
  );
}
