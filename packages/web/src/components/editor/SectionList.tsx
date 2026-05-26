import { useState } from 'react';
import { useEditorStore } from '../../stores/editor.store';

// 每个模块对应的图标
const SECTION_ICONS: Record<string, string> = {
  basic: '👤',
  work: '💼',
  education: '📚',
  skills: '⭐',
  projects: '💻',
};

// 每个模块的默认图标（当没有匹配时使用）
const DEFAULT_ICON = '📋';

export function SectionList() {
  const { schema, sectionOrder, activeSection, setActiveSection } = useEditorStore();
  const [hovered, setHovered] = useState<string | null>(null);

  if (!schema) return null;
  const orderedSections = sectionOrder
    .map((key) => schema.sections.find((s) => s.key === key))
    .filter(Boolean);

  return (
    <div style={{
      width: 220,
      borderRight: '1px solid #F3F4F6',
      overflowY: 'auto',
      height: '100%',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* 面板标题 */}
      <div style={{
        padding: '16px 16px 12px',
        borderBottom: '1px solid #F3F4F6',
      }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: 0.8, textTransform: 'uppercase' }}>
          简历模块
        </div>
      </div>

      {/* 模块列表 */}
      <div style={{ flex: 1, padding: '8px 0' }}>
        {orderedSections.map((section) => {
          const key = section!.key;
          const isActive = activeSection === key;
          const isHovered = hovered === key;
          const icon = SECTION_ICONS[key] ?? DEFAULT_ICON;

          return (
            <div
              key={key}
              onClick={() => setActiveSection(key)}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 16px 10px 12px',
                cursor: 'pointer',
                position: 'relative',
                background: isActive
                  ? 'rgba(79,70,229,0.07)'
                  : isHovered
                    ? 'rgba(79,70,229,0.03)'
                    : 'transparent',
                transition: 'background 0.15s',
                userSelect: 'none',
              }}
            >
              {/* 左侧激活竖条 */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 3,
                height: isActive ? 28 : 0,
                borderRadius: '0 3px 3px 0',
                background: '#4F46E5',
                transition: 'height 0.2s ease',
              }} />

              {/* 图标 */}
              <span style={{
                fontSize: 15,
                width: 22,
                textAlign: 'center',
                flexShrink: 0,
                opacity: isActive ? 1 : 0.7,
              }}>
                {icon}
              </span>

              {/* 标签文字 */}
              <span style={{
                fontSize: 14,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#4F46E5' : '#374151',
                transition: 'color 0.15s, font-weight 0.15s',
              }}>
                {section!.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* 底部模板标识 */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid #F3F4F6',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        <span style={{ fontSize: 12 }}>🎨</span>
        <span style={{ fontSize: 12, color: '#9CA3AF' }}>模板：经典简洁</span>
      </div>
    </div>
  );
}
