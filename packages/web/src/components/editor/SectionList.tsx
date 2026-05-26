import { useEditorStore } from '../../stores/editor.store';
import { Button } from 'antd';

export function SectionList() {
  const { schema, sectionOrder, activeSection, setActiveSection } = useEditorStore();
  if (!schema) return null;
  const orderedSections = sectionOrder.map((key) => schema.sections.find((s) => s.key === key)).filter(Boolean);

  return (
    <div style={{ width: 220, borderRight: '1px solid #e8e8e8', padding: 16, overflowY: 'auto', height: '100%', background: '#fafafa' }}>
      <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 14, color: '#333' }}>简历模块</div>
      {orderedSections.map((section) => (
        <Button key={section!.key} block type={activeSection === section!.key ? 'primary' : 'default'} style={{ marginBottom: 4, textAlign: 'left' }} onClick={() => setActiveSection(section!.key)}>
          {section!.label}
        </Button>
      ))}
    </div>
  );
}
