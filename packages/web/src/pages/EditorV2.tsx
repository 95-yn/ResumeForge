import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Spin } from 'antd';
import { EditorLayoutV2 } from '../components/editor/EditorLayoutV2';
import { useEditorStore } from '../stores/editor.store';
import { useCanvasStore } from '../stores/canvas.store';
import { convertResumeDataToBlocks } from '../utils/template-converter';

export function EditorV2() {
  const { resumeId } = useParams<{ resumeId: string }>();
  const [searchParams] = useSearchParams();
  const templateSlug = searchParams.get('template');
  const profession = searchParams.get('profession');
  const { loadResume, loadTemplate, resume } = useEditorStore();
  const { loadBlocks } = useCanvasStore();

  const [blocksLoaded, setBlocksLoaded] = useState(false);

  // 1. Load resume data (from server or template)
  useEffect(() => {
    if (resumeId) {
      loadResume(resumeId);
    } else if (templateSlug) {
      loadTemplate(templateSlug, profession || undefined);
    }
  }, [resumeId, templateSlug, profession, loadResume, loadTemplate]);

  // 2. When resume data is ready, convert to blocks and load into canvas store
  useEffect(() => {
    if (!resume) return;
    if (blocksLoaded) return; // only convert once

    const blocks = convertResumeDataToBlocks(resume);
    loadBlocks(blocks);
    setBlocksLoaded(true);
  }, [resume, blocksLoaded, loadBlocks]);

  // Loading state
  if (!resume || !blocksLoaded) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#FAFAF9',
          flexDirection: 'column',
          gap: 16,
          fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
        }}
      >
        <Spin size="large" />
        <span style={{ fontSize: 13, color: '#A8A29E' }}>正在加载编辑器...</span>
      </div>
    );
  }

  return <EditorLayoutV2 />;
}
