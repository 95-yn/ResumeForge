import { TopBar } from './TopBar';
import { SectionList } from './SectionList';
import { ResumePreview } from './ResumePreview';
import { useAutoSave } from '../../hooks/useAutoSave';

export function EditorLayout() {
  useAutoSave();
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <TopBar />
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <SectionList />
        <ResumePreview />
      </div>
    </div>
  );
}
