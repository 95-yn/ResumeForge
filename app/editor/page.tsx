'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Spin } from 'antd';
import { EditorLayout } from '@/components/editor/EditorLayout';
import { useEditorStore } from '@/lib/editor-store';

function EditorContent() {
  const searchParams = useSearchParams();
  const templateSlug = searchParams.get('template');
  const profession = searchParams.get('profession');
  const { loadTemplate, resume } = useEditorStore();

  useEffect(() => {
    if (templateSlug) {
      loadTemplate(templateSlug, profession || undefined);
    }
  }, [templateSlug, profession, loadTemplate]);

  if (!resume) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Spin size="large" />
    </div>
  );
  return <EditorLayout />;
}

export default function EditorPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    }>
      <EditorContent />
    </Suspense>
  );
}
