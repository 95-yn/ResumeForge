import { useEditorStore } from '../../stores/editor.store';
import { Button } from 'antd';

export function SectionList() {
  const { schema, sectionOrder, activeSection, setActiveSection } = useEditorStore();
  if (!schema) return null;
  const orderedSections = sectionOrder.map((key) => schema.sections.find((s) => s.key === key)).filter(Boolean);

  return (
    <div style={{ width: 200, borderRight: '1px solid #e8e8e8', padding: 12, overflowY: 'auto' }}>
      <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 14 }}>简历模块</div>
      {orderedSections.map((section) => (
        <Button key={section!.key} block type={activeSection === section!.key ? 'primary' : 'default'} style={{ marginBottom: 4, textAlign: 'left' }} onClick={() => setActiveSection(section!.key)}>
          {section!.label}
        </Button>
      ))}
    </div>
  );
}
