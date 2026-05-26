import { Input, Select, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useEditorStore } from '../../stores/editor.store';
import type { SectionSchema } from '@resume/shared';

const lbl: React.CSSProperties = { display: 'block', marginBottom: 4, fontSize: 12, fontWeight: 500, color: '#6B7280' };

export function FieldPanel() {
  const { schema, resume, activeSection, updateField, updateArrayItem, addArrayItem, removeArrayItem } = useEditorStore();

  if (!schema || !resume || !activeSection) {
    return (
      <div style={{ width: 320, borderLeft: '1px solid #E5E7EB', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <p style={{ color: '#D1D5DB', fontSize: 13 }}>← 选择模块开始编辑</p>
      </div>
    );
  }

  const section = schema.sections.find((s) => s.key === activeSection);
  if (!section) return null;
  if (section.type === 'array') return <ArrayFieldPanel section={section} />;

  const sectionData = resume[activeSection] as Record<string, unknown>;

  return (
    <div style={{ width: 320, borderLeft: '1px solid #E5E7EB', overflowY: 'auto', height: '100%', background: '#fff' }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid #F3F4F6' }}>
        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#111827' }}>{section.label}</h3>
      </div>
      <div style={{ padding: '14px 18px' }}>
        {section.fields.map((field) => (
          <div key={field.key} style={{ marginBottom: 14 }}>
            <label style={lbl}>{field.label}{field.required && <span style={{ color: '#EF4444', marginLeft: 2 }}>*</span>}</label>
            {field.type === 'select' ? (
              <Select style={{ width: '100%' }} value={(sectionData?.[field.key] as string) || undefined} onChange={(val) => updateField(activeSection, field.key, val)} options={field.options?.map((o) => ({ label: o, value: o }))} allowClear />
            ) : field.type === 'richtext' ? (
              <Input.TextArea rows={3} value={(sectionData?.[field.key] as string) || ''} onChange={(e) => updateField(activeSection, field.key, e.target.value)} style={{ fontSize: 13 }} />
            ) : (
              <Input value={(sectionData?.[field.key] as string) || ''} onChange={(e) => updateField(activeSection, field.key, e.target.value)} placeholder={`输入${field.label}`} style={{ fontSize: 13 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArrayFieldPanel({ section }: { section: SectionSchema }) {
  const { resume, activeSection, updateArrayItem, addArrayItem, removeArrayItem } = useEditorStore();
  const items = (resume![activeSection!] as Record<string, unknown>[]) || [];

  return (
    <div style={{ width: 320, borderLeft: '1px solid #E5E7EB', overflowY: 'auto', height: '100%', background: '#fff' }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#111827' }}>{section.label}</h3>
        <Button size="small" type="dashed" icon={<PlusOutlined />} onClick={() => addArrayItem(activeSection!)} style={{ fontSize: 12, borderRadius: 6 }}>添加</Button>
      </div>
      <div style={{ padding: '10px 14px' }}>
        {items.length === 0 && (
          <div style={{ textAlign: 'center', padding: '24px 0', color: '#D1D5DB', fontSize: 13 }}>
            暂无记录，点击上方添加
          </div>
        )}
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: 12, padding: 14, border: '1px solid #F3F4F6', borderRadius: 8, background: '#FAFAFA' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF' }}>#{index + 1}</span>
              <Button size="small" type="text" danger icon={<DeleteOutlined />} onClick={() => removeArrayItem(activeSection!, index)} />
            </div>
            {section.fields.map((field) => {
              if (field.type === 'array:text') {
                const highlights = (item[field.key] as string[]) || [];
                return (
                  <div key={field.key} style={{ marginBottom: 8 }}>
                    <label style={lbl}>{field.label}</label>
                    {highlights.map((h, hi) => (
                      <Input key={hi} size="small" value={h} style={{ marginTop: 3, fontSize: 12 }}
                        onChange={(e) => { const nh = [...highlights]; nh[hi] = e.target.value; updateArrayItem(activeSection!, index, field.key, nh); }}
                        addonAfter={<DeleteOutlined style={{ cursor: 'pointer', color: '#D1D5DB' }} onClick={() => updateArrayItem(activeSection!, index, field.key, highlights.filter((_, i) => i !== hi))} />}
                      />
                    ))}
                    <Button size="small" type="dashed" block style={{ marginTop: 4, fontSize: 12, borderRadius: 6 }}
                      onClick={() => updateArrayItem(activeSection!, index, field.key, [...highlights, ''])}>+ 添加</Button>
                  </div>
                );
              }
              return (
                <div key={field.key} style={{ marginBottom: 8 }}>
                  <label style={lbl}>{field.label}</label>
                  {field.type === 'select' ? (
                    <Select style={{ width: '100%' }} size="small" value={(item[field.key] as string) || undefined} onChange={(val) => updateArrayItem(activeSection!, index, field.key, val)} options={field.options?.map((o) => ({ label: o, value: o }))} allowClear />
                  ) : (
                    <Input size="small" value={(item[field.key] as string) || ''} onChange={(e) => updateArrayItem(activeSection!, index, field.key, e.target.value)} style={{ fontSize: 12 }} />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
