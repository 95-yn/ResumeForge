import { Input, Select, Button, Divider } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useEditorStore } from '../../stores/editor.store';
import type { SectionSchema } from '@resume/shared';

export function FieldPanel() {
  const { schema, resume, activeSection, updateField, updateArrayItem, addArrayItem, removeArrayItem } = useEditorStore();

  if (!schema || !resume || !activeSection) {
    return <div style={{ width: 320, borderLeft: '1px solid #e8e8e8', padding: 16 }}><p style={{ color: '#999' }}>点击左侧模块开始编辑</p></div>;
  }

  const section = schema.sections.find((s) => s.key === activeSection);
  if (!section) return null;

  if (section.type === 'array') return <ArrayFieldPanel section={section} />;

  const sectionData = resume[activeSection] as Record<string, unknown>;

  return (
    <div style={{ width: 320, borderLeft: '1px solid #e8e8e8', padding: 16, overflowY: 'auto' }}>
      <h3 style={{ marginBottom: 16 }}>{section.label}</h3>
      {section.fields.map((field) => (
        <div key={field.key} style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4, fontSize: 13, color: '#555' }}>{field.label} {field.required && <span style={{ color: 'red' }}>*</span>}</label>
          {field.type === 'select' ? (
            <Select style={{ width: '100%' }} value={(sectionData?.[field.key] as string) || undefined} onChange={(val) => updateField(activeSection, field.key, val)} options={field.options?.map((o) => ({ label: o, value: o }))} allowClear />
          ) : field.type === 'richtext' ? (
            <Input.TextArea rows={4} value={(sectionData?.[field.key] as string) || ''} onChange={(e) => updateField(activeSection, field.key, e.target.value)} />
          ) : (
            <Input value={(sectionData?.[field.key] as string) || ''} onChange={(e) => updateField(activeSection, field.key, e.target.value)} placeholder={`请输入${field.label}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function ArrayFieldPanel({ section }: { section: SectionSchema }) {
  const { resume, activeSection, updateArrayItem, addArrayItem, removeArrayItem } = useEditorStore();
  const items = (resume![activeSection!] as Record<string, unknown>[]) || [];

  return (
    <div style={{ width: 320, borderLeft: '1px solid #e8e8e8', padding: 16, overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>{section.label}</h3>
        <Button size="small" icon={<PlusOutlined />} onClick={() => addArrayItem(activeSection!)}>添加</Button>
      </div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: 16, padding: 12, border: '1px solid #e8e8e8', borderRadius: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontWeight: 500 }}>#{index + 1}</span>
            <Button size="small" danger icon={<DeleteOutlined />} onClick={() => removeArrayItem(activeSection!, index)} />
          </div>
          {section.fields.map((field) => {
            if (field.type === 'array:text') {
              const highlights = (item[field.key] as string[]) || [];
              return (
                <div key={field.key} style={{ marginBottom: 8 }}>
                  <label style={{ fontSize: 13, color: '#555' }}>{field.label}</label>
                  {highlights.map((h, hi) => (
                    <Input key={hi} size="small" value={h} style={{ marginTop: 4 }}
                      onChange={(e) => { const nh = [...highlights]; nh[hi] = e.target.value; updateArrayItem(activeSection!, index, field.key, nh); }}
                      addonAfter={<DeleteOutlined onClick={() => { const nh = highlights.filter((_, i) => i !== hi); updateArrayItem(activeSection!, index, field.key, nh); }} />} />
                  ))}
                  <Button size="small" type="dashed" block style={{ marginTop: 4 }} onClick={() => updateArrayItem(activeSection!, index, field.key, [...highlights, ''])}>+ 添加条目</Button>
                </div>
              );
            }
            return (
              <div key={field.key} style={{ marginBottom: 8 }}>
                <label style={{ fontSize: 13, color: '#555' }}>{field.label}</label>
                {field.type === 'select' ? (
                  <Select style={{ width: '100%' }} size="small" value={(item[field.key] as string) || undefined} onChange={(val) => updateArrayItem(activeSection!, index, field.key, val)} options={field.options?.map((o) => ({ label: o, value: o }))} allowClear />
                ) : (
                  <Input size="small" value={(item[field.key] as string) || ''} onChange={(e) => updateArrayItem(activeSection!, index, field.key, e.target.value)} />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
