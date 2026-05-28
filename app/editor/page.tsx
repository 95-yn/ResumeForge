'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { EditorLayout } from '@/components/editor/EditorLayout';
import { useEditorStore } from '@/lib/editor-store';

function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      height: '100vh', background: '#F5F2EB',
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        border: '2px solid #E7E5E4',
        borderTopColor: '#78716C',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function TemplateNotFound({ slug }: { slug: string | null }) {
  const router = useRouter();
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      height: '100vh', background: '#F5F2EB', gap: 24, padding: 40,
      fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
    }}>
      <p style={{
        fontSize: 11, color: '#A8A29E', margin: 0,
        fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        404
      </p>
      <h1 style={{
        fontSize: 'clamp(28px, 5vw, 48px)',
        fontFamily: "'Fraunces', Georgia, serif",
        fontWeight: 400, fontStyle: 'italic',
        color: '#2D1810', margin: 0, textAlign: 'center', lineHeight: 1.2,
      }}>
        找不到这个模板
      </h1>
      {slug && (
        <p style={{ fontSize: 13, color: '#78716C', margin: 0 }}>
          <code style={{
            fontFamily: "'JetBrains Mono', monospace",
            background: '#F0EAE0', padding: '2px 6px', borderRadius: 4,
            fontSize: 12,
          }}>{slug}</code>
          {' '}不在模板库中
        </p>
      )}
      <button
        onClick={() => router.push('/templates')}
        style={{
          padding: '10px 24px', borderRadius: 6,
          background: '#1C1917', color: '#FAFAF9',
          border: 'none', cursor: 'pointer',
          fontSize: 13, fontWeight: 600,
          fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
          transition: 'background 0.12s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#292524'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#1C1917'; }}
      >
        浏览模板市场
      </button>
    </div>
  );
}

function EditorContent() {
  const searchParams = useSearchParams();
  const templateSlug = searchParams.get('template');
  const profession = searchParams.get('profession');
  const { loadTemplate, resume, templateNotFound } = useEditorStore();

  useEffect(() => {
    if (templateSlug) {
      loadTemplate(templateSlug, profession || undefined);
    }
  }, [templateSlug, profession, loadTemplate]);

  if (templateNotFound) {
    return <TemplateNotFound slug={templateSlug} />;
  }

  if (!resume) return <LoadingSpinner />;
  return <EditorLayout />;
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#F5F2EB' }}><div style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #E7E5E4', borderTopColor: '#78716C', animation: 'spin 0.8s linear infinite' }} /><style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style></div>}>
      <EditorContent />
    </Suspense>
  );
}
