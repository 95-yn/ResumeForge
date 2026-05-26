import { useEffect, useState } from 'react';
import { View, Text, Input, ScrollView, Picker } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { request } from '../../api/client';
import type { ApiResponse, ResumeData, TemplateSchema, SectionSchema, FieldSchema } from '@resume/shared';
import './index.scss';

export default function EditorPage() {
  const router = useRouter();
  const resumeId = router.params.id;
  const [data, setData] = useState<ResumeData | null>(null);
  const [schema, setSchema] = useState<TemplateSchema | null>(null);
  const [openSection, setOpenSection] = useState<string | null>('basics');

  useEffect(() => {
    if (!resumeId) return;
    (async () => {
      const resumeRes = await request<ApiResponse<{ data: ResumeData; templateId: string }>>(`/resumes/${resumeId}`);
      setData(resumeRes.data.data);
      const tplRes = await request<ApiResponse<{ schema: TemplateSchema }>>(`/templates/${resumeRes.data.templateId}`);
      setSchema(tplRes.data.schema);
    })();
  }, [resumeId]);

  const updateField = (sectionKey: string, fieldKey: string, value: unknown) => {
    setData((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev);
      const section = next[sectionKey] as Record<string, unknown>;
      if (section && typeof section === 'object' && !Array.isArray(section)) section[fieldKey] = value;
      return next;
    });
  };

  const updateArrayField = (sectionKey: string, index: number, fieldKey: string, value: unknown) => {
    setData((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev);
      const arr = next[sectionKey] as Record<string, unknown>[];
      if (arr?.[index]) arr[index][fieldKey] = value;
      return next;
    });
  };

  const handleSave = async () => {
    if (!resumeId || !data) return;
    await request(`/resumes/${resumeId}`, { method: 'PATCH', data: { data } });
    Taro.showToast({ title: '已保存', icon: 'success' });
  };

  const handleExport = async () => {
    Taro.showLoading({ title: '生成中...' });
    try {
      const token = Taro.getStorageSync('accessToken');
      await Taro.request({
        url: `http://localhost:3001/api/resumes/${resumeId}/export/pdf`,
        method: 'POST',
        header: { Authorization: `Bearer ${token}` },
        responseType: 'arraybuffer',
      });
      Taro.hideLoading();
      Taro.showToast({ title: 'PDF 已生成', icon: 'success' });
    } catch { Taro.hideLoading(); Taro.showToast({ title: '导出失败', icon: 'error' }); }
  };

  if (!data || !schema) return <View style={{ padding: '48px', textAlign: 'center' }}>加载中...</View>;

  return (
    <View className="editor-page">
      <ScrollView scrollY style={{ flex: 1 }}>
        {schema.sections.map((section) => (
          <View key={section.key} className="section-group">
            <View className="section-header" onClick={() => setOpenSection(openSection === section.key ? null : section.key)}>
              <Text className="section-label">{section.label}</Text>
              <Text>{openSection === section.key ? '▼' : '▶'}</Text>
            </View>
            {openSection === section.key && (
              <View className="section-body">
                {section.type === 'array'
                  ? <ArrayFields section={section} data={data} onUpdate={updateArrayField} />
                  : section.fields.map((field) => (
                    <FormField key={field.key} field={field} value={(data[section.key] as Record<string, unknown>)?.[field.key]} onChange={(val) => updateField(section.key, field.key, val)} />
                  ))
                }
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View className="bottom-bar">
        <View className="btn" onClick={handleSave}>保存</View>
        <View className="btn primary" onClick={handleExport}>导出 PDF</View>
      </View>
    </View>
  );
}

function FormField({ field, value, onChange }: { field: FieldSchema; value: unknown; onChange: (v: unknown) => void }) {
  if (field.type === 'select' && field.options) {
    return (
      <View style={{ marginBottom: '16px' }}>
        <Text style={{ fontSize: '26px', color: '#555', marginBottom: '8px', display: 'block' }}>{field.label}</Text>
        <Picker mode="selector" range={field.options} value={field.options.indexOf(value as string)} onChange={(e) => onChange(field.options![e.detail.value as number])}>
          <View style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px 16px', fontSize: '28px' }}>{(value as string) || `请选择${field.label}`}</View>
        </Picker>
      </View>
    );
  }
  return (
    <View style={{ marginBottom: '16px' }}>
      <Text style={{ fontSize: '26px', color: '#555', marginBottom: '8px', display: 'block' }}>{field.label}{field.required && <Text style={{ color: 'red' }}> *</Text>}</Text>
      <Input value={(value as string) ?? ''} onInput={(e) => onChange(e.detail.value)} placeholder={`请输入${field.label}`} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px 16px', fontSize: '28px', width: '100%' }} />
    </View>
  );
}

function ArrayFields({ section, data, onUpdate }: { section: SectionSchema; data: ResumeData; onUpdate: (key: string, idx: number, field: string, val: unknown) => void }) {
  const items = (data[section.key] as Record<string, unknown>[]) || [];
  return (
    <>
      {items.map((item, index) => (
        <View key={index} style={{ padding: '12px', marginBottom: '12px', background: '#fafafa', borderRadius: '8px' }}>
          <Text style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>#{index + 1}</Text>
          {section.fields.filter((f) => f.type !== 'array:text').map((field) => (
            <FormField key={field.key} field={field} value={item[field.key]} onChange={(val) => onUpdate(section.key, index, field.key, val)} />
          ))}
        </View>
      ))}
    </>
  );
}
