'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { EditorLayout } from '@/components/editor/EditorLayout';
import { useEditorStore } from '@/lib/editor-store';

/** 编辑器骨架屏：镜像真实布局（顶栏 / 左侧模块 / A4 纸），加载完成切换无明显跳动。 */
function EditorSkeleton() {
  const sk = '#EDE7DE'; // 占位块（暖灰），配合 shimmer
  const block = (w: number | string, h: number, extra: React.CSSProperties = {}): React.CSSProperties => ({
    width: w, height: h, borderRadius: 5, background: sk,
    backgroundImage: `linear-gradient(90deg, ${sk} 0%, #F4EFE7 50%, ${sk} 100%)`,
    backgroundSize: '200% 100%', animation: 'edSkeleton 1.3s ease-in-out infinite',
    ...extra,
  });
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#FAFAF9' }} aria-busy="true" aria-label="编辑器加载中">
      {/* 顶栏 */}
      <div style={{ height: 52, flexShrink: 0, background: '#FFFFFF', borderBottom: '1px solid #E7E5E4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={block(30, 30, { borderRadius: 6 })} />
          <div style={block(120, 14)} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={block(64, 32, { borderRadius: 6 })} />
          <div style={block(120, 32, { borderRadius: 6 })} />
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* 左侧模块 */}
        <div style={{ width: 220, flexShrink: 0, borderRight: '1px solid #E7E5E4', padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={block(15, 15, { borderRadius: 4 })} />
              <div style={block(`${55 + (i % 3) * 12}%`, 12)} />
            </div>
          ))}
        </div>
        {/* 预览区：纸纹底 + A4 纸 */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 28, background: '#F5F2EB' }}>
          <div style={{ width: '210mm', maxWidth: '100%', minHeight: '297mm', background: '#fff', boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 2px 10px rgba(0,0,0,0.04)', padding: '20mm', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={block('45%', 28, { margin: '0 auto' })} />
            <div style={block('30%', 14, { margin: '0 auto 12px' })} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: i ? 10 : 0 }}>
                <div style={block(`${28 + (i % 2) * 10}%`, 12)} />
                <div style={block('92%', 9)} />
                <div style={block('80%', 9)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes edSkeleton { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) { [aria-busy="true"] * { animation: none !important; } }`}</style>
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

  if (!resume) return <EditorSkeleton />;
  return <EditorLayout />;
}

export default function EditorPage() {
  return (
    <Suspense fallback={<EditorSkeleton />}>
      <EditorContent />
    </Suspense>
  );
}
