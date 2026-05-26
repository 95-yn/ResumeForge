import { Input, Select, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useEditorStore } from '../../stores/editor.store';
import type { SectionSchema } from '@resume/shared';

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 5,
  fontSize: 12,
  fontWeight: 400,
  color: '#9CA3AF',
  letterSpacing: 0.2,
};

const requiredMark = (
  <span style={{ color: '#EF4444', marginLeft: 2 }}>*</span>
);

export function FieldPanel() {
  const { schema, resume, activeSection, updateField, updateArrayItem, addArrayItem, removeArrayItem } = useEditorStore();

  if (!schema || !resume || !activeSection) {
    return (
      <div style={{
        width: 340,
        borderLeft: '1px solid #F3F4F6',
        padding: 32,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>👈</div>
          <p style={{ color: '#9CA3AF', fontSize: 13, margin: 0, lineHeight: 1.6 }}>点击左侧模块<br />开始编辑内容</p>
        </div>
      </div>
    );
  }

  const section = schema.sections.find((s) => s.key === activeSection);
  if (!section) return null;

  if (section.type === 'array') return <ArrayFieldPanel section={section} />;

  const sectionData = resume[activeSection] as Record<string, unknown>;

  return (
    <div style={{
      width: 340,
      borderLeft: '1px solid #F3F4F6',
      overflowY: 'auto',
      height: '100%',
      background: '#fff',
    }}>
      {/* 标题区域 */}
      <div style={{
        padding: '18px 20px 14px',
        borderBottom: '2px solid #EEF2FF',
      }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#1E1B4B' }}>
          {section.label}
        </h3>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: '#9CA3AF' }}>填写基本信息</p>
      </div>

      {/* 表单内容 */}
      <div style={{ padding: '16px 20px' }}>
        {section.fields.map((field) => (
          <div key={field.key} style={{ marginBottom: 14 }}>
            <label style={labelStyle}>
              {field.label}{field.required && requiredMark}
            </label>
            {field.type === 'select' ? (
              <Select
                style={{ width: '100%' }}
                value={(sectionData?.[field.key] as string) || undefined}
                onChange={(val) => updateField(activeSection, field.key, val)}
                options={field.options?.map((o) => ({ label: o, value: o }))}
                allowClear
                styles={{ popup: { root: { borderRadius: 8 } } }}
              />
            ) : field.type === 'richtext' ? (
              <Input.TextArea
                rows={4}
                value={(sectionData?.[field.key] as string) || ''}
                onChange={(e) => updateField(activeSection, field.key, e.target.value)}
                style={{ borderRadius: 8, fontSize: 13 }}
              />
            ) : (
              <Input
                value={(sectionData?.[field.key] as string) || ''}
                onChange={(e) => updateField(activeSection, field.key, e.target.value)}
                placeholder={`请输入${field.label}`}
                style={{ borderRadius: 8, fontSize: 13 }}
              />
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
    <div style={{
      width: 340,
      borderLeft: '1px solid #F3F4F6',
      overflowY: 'auto',
      height: '100%',
      background: '#fff',
    }}>
      {/* 标题区域 */}
      <div style={{
        padding: '18px 20px 14px',
        borderBottom: '2px solid #EEF2FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#1E1B4B' }}>
            {section.label}
          </h3>
          <p style={{ margin: '4px 0 0', fontSize: 12, color: '#9CA3AF' }}>共 {items.length} 条记录</p>
        </div>
        <Button
          size="small"
          icon={<PlusOutlined />}
          onClick={() => addArrayItem(activeSection!)}
          type="dashed"
          style={{
            borderRadius: 7,
            borderColor: '#C7D2FE',
            color: '#4F46E5',
            fontWeight: 500,
          }}
        >
          添加
        </Button>
      </div>

      {/* 数组项列表 */}
      <div style={{ padding: '12px 16px' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: 14,
              padding: '14px 14px 12px',
              border: '1.5px dashed #C7D2FE',
              borderRadius: 10,
              background: '#FAFBFF',
            }}
          >
            {/* 项目头部 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: '1px solid #EEF2FF',
            }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#4F46E5',
                background: '#EEF2FF',
                padding: '2px 8px',
                borderRadius: 10,
              }}>
                # {index + 1}
              </span>
              <Button
                size="small"
                danger
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => removeArrayItem(activeSection!, index)}
                style={{ borderRadius: 6, fontSize: 12 }}
              />
            </div>

            {/* 字段列表 */}
            {section.fields.map((field) => {
              if (field.type === 'array:text') {
                const highlights = (item[field.key] as string[]) || [];
                return (
                  <div key={field.key} style={{ marginBottom: 10 }}>
                    <label style={labelStyle}>{field.label}</label>
                    {highlights.map((h, hi) => (
                      <Input
                        key={hi}
                        size="small"
                        value={h}
                        style={{ marginTop: 4, borderRadius: 7, fontSize: 12 }}
                        onChange={(e) => {
                          const nh = [...highlights];
                          nh[hi] = e.target.value;
                          updateArrayItem(activeSection!, index, field.key, nh);
                        }}
                        addonAfter={
                          <DeleteOutlined
                            style={{ color: '#EF4444', cursor: 'pointer' }}
                            onClick={() => {
                              const nh = highlights.filter((_, i) => i !== hi);
                              updateArrayItem(activeSection!, index, field.key, nh);
                            }}
                          />
                        }
                      />
                    ))}
                    <Button
                      size="small"
                      type="dashed"
                      block
                      style={{
                        marginTop: 6,
                        borderRadius: 7,
                        borderColor: '#C7D2FE',
                        color: '#4F46E5',
                        fontSize: 12,
                      }}
                      onClick={() => updateArrayItem(activeSection!, index, field.key, [...highlights, ''])}
                    >
                      + 添加条目
                    </Button>
                  </div>
                );
              }
              return (
                <div key={field.key} style={{ marginBottom: 10 }}>
                  <label style={labelStyle}>{field.label}</label>
                  {field.type === 'select' ? (
                    <Select
                      style={{ width: '100%' }}
                      size="small"
                      value={(item[field.key] as string) || undefined}
                      onChange={(val) => updateArrayItem(activeSection!, index, field.key, val)}
                      options={field.options?.map((o) => ({ label: o, value: o }))}
                      allowClear
                    />
                  ) : (
                    <Input
                      size="small"
                      value={(item[field.key] as string) || ''}
                      onChange={(e) => updateArrayItem(activeSection!, index, field.key, e.target.value)}
                      style={{ borderRadius: 7, fontSize: 12 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* 底部添加按钮 */}
        {items.length === 0 && (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>📝</div>
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: '0 0 16px' }}>暂无内容，点击添加</p>
          </div>
        )}
        <Button
          type="dashed"
          block
          icon={<PlusOutlined />}
          onClick={() => addArrayItem(activeSection!)}
          style={{
            borderRadius: 8,
            borderColor: '#C7D2FE',
            color: '#4F46E5',
            fontWeight: 500,
            height: 38,
          }}
        >
          添加{section.label}
        </Button>
      </div>
    </div>
  );
}
