import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Spin } from 'antd';
import { EditorLayout } from '../components/editor/EditorLayout';
import { useEditorStore } from '../stores/editor.store';

export function Editor() {
  const { resumeId } = useParams<{ resumeId: string }>();
  const [searchParams] = useSearchParams();
  const templateSlug = searchParams.get('template');
  const { loadResume, loadTemplate, resume } = useEditorStore();

  useEffect(() => {
    if (resumeId) {
      loadResume(resumeId);
    } else if (templateSlug) {
      loadTemplate(templateSlug);
    }
  }, [resumeId, templateSlug, loadResume, loadTemplate]);

  if (!resume) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Spin size="large" /></div>;
  return <EditorLayout />;
}
