import { TopBar } from './TopBar';
import { SectionList } from './SectionList';
import { ResumePreview } from './ResumePreview';
import { FieldPanel } from './FieldPanel';
import { useAutoSave } from '../../hooks/useAutoSave';

export function EditorLayout() {
  useAutoSave();
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <SectionList />
        <ResumePreview />
        <FieldPanel />
      </div>
    </div>
  );
}
