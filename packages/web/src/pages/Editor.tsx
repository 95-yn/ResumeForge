import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { EditorLayout } from '../components/editor/EditorLayout';
import { useEditorStore } from '../stores/editor.store';

export function Editor() {
  const { resumeId } = useParams<{ resumeId: string }>();
  const { loadResume, resume } = useEditorStore();

  useEffect(() => { if (resumeId) loadResume(resumeId); }, [resumeId, loadResume]);

  if (!resume) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Spin size="large" /></div>;
  return <EditorLayout />;
}
