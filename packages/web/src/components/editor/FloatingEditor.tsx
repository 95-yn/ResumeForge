import { useEffect, useRef, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { BoldOutlined, ItalicOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface EditingField {
  field: string;
  value: string;
  rect: { top: number; left: number; width: number; height: number };
}

interface FloatingEditorProps {
  editingField: EditingField;
  iframeRect: { top: number; left: number; width: number; height: number } | null;
  onConfirm: (field: string, value: string) => void;
  onCancel: () => void;
}

const RICHTEXT_FIELDS = [
  'basics.summary',
  'projects',        // matches projects.*.description
  'experience',      // matches experience.*.highlights
];

function isRichtextField(field: string): boolean {
  if (field === 'basics.summary') return true;
  if (/^projects\.\d+\.description$/.test(field)) return true;
  if (/^experience\.\d+\.description$/.test(field)) return true;
  // highlights items
  if (/\.(highlights)\.\d+$/.test(field)) return true;
  return false;
}

function isShortField(field: string): boolean {
  const shortPatterns = [
    /^basics\.(name|email|phone|url|location|label)$/,
    /\.(company|position|institution|area|studyType|startDate|endDate|name|level|role|url)$/,
  ];
  return shortPatterns.some((p) => p.test(field));
}

export function FloatingEditor({ editingField, iframeRect, onConfirm, onCancel }: FloatingEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const richtext = isRichtextField(editingField.field);
  const short = !richtext && isShortField(editingField.field);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: '编辑内容...' }),
    ],
    content: editingField.value || '',
    autofocus: 'end',
  });

  // Handle escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCancel();
      }
      if (e.key === 'Enter' && !e.shiftKey && short) {
        e.preventDefault();
        handleConfirm();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, short]);

  // Click outside to cancel
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onCancel();
      }
    };
    // Delay to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCancel]);

  const handleConfirm = useCallback(() => {
    if (!editor) return;
    let value: string;
    if (richtext) {
      value = editor.getHTML();
    } else {
      value = editor.getText();
    }
    onConfirm(editingField.field, value);
  }, [editor, richtext, editingField.field, onConfirm]);

  // Compute position: iframeRect + field rect within iframe
  const iframeTop = iframeRect?.top ?? 0;
  const iframeLeft = iframeRect?.left ?? 0;

  // Field absolute position in viewport
  const fieldTop = iframeTop + editingField.rect.top;
  const fieldLeft = iframeLeft + editingField.rect.left;
  const fieldWidth = editingField.rect.width;
  const fieldHeight = editingField.rect.height;

  // Editor width
  const editorWidth = richtext ? 400 : Math.max(200, Math.min(400, fieldWidth + 40));

  // Position: prefer below field, but flip up if not enough space
  const viewportH = window.innerHeight;
  const editorApproxH = richtext ? 200 : 120;

  let top = fieldTop + fieldHeight + 4;
  if (top + editorApproxH > viewportH - 20) {
    top = fieldTop - editorApproxH - 4;
  }

  let left = fieldLeft;
  const viewportW = window.innerWidth;
  if (left + editorWidth > viewportW - 20) {
    left = viewportW - editorWidth - 20;
  }
  if (left < 10) left = 10;

  const toolbarBtnStyle = (active: boolean): React.CSSProperties => ({
    width: 28,
    height: 28,
    borderRadius: 4,
    border: 'none',
    background: active ? '#EFF6FF' : 'transparent',
    color: active ? '#3B82F6' : '#6B7280',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    padding: 0,
    transition: 'background 0.1s, color 0.1s',
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top,
        left,
        width: editorWidth,
        zIndex: 9999,
        background: '#fff',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        boxShadow: '0 4px 20px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Toolbar — only for richtext fields */}
      {richtext && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: '6px 10px',
            borderBottom: '1px solid #F3F4F6',
            background: '#FAFAFA',
          }}
        >
          <button
            style={toolbarBtnStyle(editor?.isActive('bold') ?? false)}
            onMouseDown={(e) => { e.preventDefault(); editor?.chain().focus().toggleBold().run(); }}
            title="加粗"
          >
            <BoldOutlined />
          </button>
          <button
            style={toolbarBtnStyle(editor?.isActive('italic') ?? false)}
            onMouseDown={(e) => { e.preventDefault(); editor?.chain().focus().toggleItalic().run(); }}
            title="斜体"
          >
            <ItalicOutlined />
          </button>
          <button
            style={toolbarBtnStyle(editor?.isActive('bulletList') ?? false)}
            onMouseDown={(e) => { e.preventDefault(); editor?.chain().focus().toggleBulletList().run(); }}
            title="无序列表"
          >
            <UnorderedListOutlined />
          </button>
          <div style={{ width: 1, height: 16, background: '#E5E7EB', margin: '0 4px' }} />
          <span style={{ fontSize: 11, color: '#9CA3AF', marginLeft: 2 }}>链接</span>
        </div>
      )}

      {/* Editor area */}
      <div
        style={{
          padding: '10px 12px',
          minHeight: richtext ? 80 : undefined,
          fontSize: 13,
          lineHeight: 1.6,
          color: '#111827',
        }}
      >
        <EditorContent
          editor={editor}
          style={{ outline: 'none' }}
        />
      </div>

      {/* Footer buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 8,
          padding: '8px 12px',
          borderTop: '1px solid #F3F4F6',
          background: '#FAFAFA',
        }}
      >
        <Button
          size="small"
          onClick={onCancel}
          style={{ fontSize: 12, color: '#6B7280', borderColor: '#E5E7EB' }}
        >
          取消
        </Button>
        <Button
          size="small"
          type="primary"
          onClick={handleConfirm}
          style={{ fontSize: 12 }}
        >
          确认
        </Button>
      </div>

      <style>{`
        .tiptap {
          outline: none;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #9CA3AF;
          pointer-events: none;
          float: left;
          height: 0;
        }
        .tiptap p { margin: 0 0 4px; }
        .tiptap p:last-child { margin-bottom: 0; }
        .tiptap ul { margin: 4px 0; padding-left: 18px; }
        .tiptap li { margin: 2px 0; }
      `}</style>
    </div>
  );
}
