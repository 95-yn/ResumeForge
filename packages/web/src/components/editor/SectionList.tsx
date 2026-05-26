import { useState } from 'react';
import { useEditorStore } from '../../stores/editor.store';

const SECTION_ICONS: Record<string, string> = {
  basics: '👤', experience: '💼', education: '🎓', skills: '✦', projects: '📁',
};

export function SectionList() {
  const { schema, sectionOrder, activeSection, setActiveSection } = useEditorStore();
  const [hovered, setHovered] = useState<string | null>(null);
  if (!schema) return null;

  const orderedSections = sectionOrder.map((key) => schema.sections.find((s) => s.key === key)).filter(Boolean);

  return (
    <div style={{ width: 200, borderRight: '1px solid #E5E7EB', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid #F3F4F6' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', letterSpacing: 1, textTransform: 'uppercase' }}>模块</span>
      </div>
      <div style={{ flex: 1, padding: '6px 0', overflowY: 'auto' }}>
        {orderedSections.map((section) => {
          const key = section!.key;
          const active = activeSection === key;
          const hover = hovered === key;
          return (
            <div
              key={key}
              onClick={() => setActiveSection(key)}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '9px 14px', margin: '1px 6px', borderRadius: 6,
                cursor: 'pointer', transition: 'background 0.1s',
                background: active ? '#F3F4F6' : hover ? '#F9FAFB' : 'transparent',
              }}
            >
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
  );
}
