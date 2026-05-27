import { useEffect, useRef, useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import { Button, Dropdown, InputNumber } from 'antd';
import {
  BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined,
  UnorderedListOutlined, OrderedListOutlined, LinkOutlined,
  AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined,
  FontSizeOutlined,
} from '@ant-design/icons';

export interface EditingField {
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

function isRichtextField(field: string): boolean {
  if (field === 'basics.summary') return true;
  if (/^projects\.\d+\.description$/.test(field)) return true;
  if (/^experience\.\d+\.description$/.test(field)) return true;
  if (/\.highlights\.\d+$/.test(field)) return true;
  return false;
}

export function FloatingEditor({ editingField, iframeRect, onConfirm, onCancel }: FloatingEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const richtext = isRichtextField(editingField.field);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Placeholder.configure({ placeholder: '输入内容...' }),
      Underline,
      TextStyle,
      FontSize,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'editor-link' } }),
      TextAlign.configure({ types: ['paragraph'] }),
    ],
    content: editingField.value || '',
    autofocus: 'end',
  });

  useEffect(() => {
    if (editor && editingField.value !== undefined) {
      const currentContent = richtext ? editor.getHTML() : editor.getText();
      if (currentContent !== editingField.value) {
        editor.commands.setContent(editingField.value || '');
      }
    }
  }, [editor, editingField.field, editingField.value, richtext]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onCancel(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onCancel]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) onCancel();
    };
    const timer = setTimeout(() => document.addEventListener('mousedown', handleClickOutside), 150);
    return () => { clearTimeout(timer); document.removeEventListener('mousedown', handleClickOutside); };
  }, [onCancel]);

  const handleConfirm = useCallback(() => {
    if (!editor) return;
    onConfirm(editingField.field, richtext ? editor.getHTML() : editor.getText());
  }, [editor, richtext, editingField.field, onConfirm]);

  const handleLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes('link').href;
    const url = window.prompt('输入链接地址', prev || 'https://');
    if (url === null) return;
    if (url === '') { editor.chain().focus().unsetLink().run(); return; }
    editor.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  const t = iframeRect?.top ?? 0;
  const l = iframeRect?.left ?? 0;
  const fieldTop = t + editingField.rect.top;
  const fieldLeft = l + editingField.rect.left;
  const editorWidth = richtext ? 460 : Math.max(240, Math.min(420, editingField.rect.width + 60));
  const editorH = richtext ? 240 : 100;
  let top = fieldTop + editingField.rect.height + 6;
  if (top + editorH > window.innerHeight - 20) top = fieldTop - editorH - 6;
  let left = fieldLeft;
  if (left + editorWidth > window.innerWidth - 20) left = window.innerWidth - editorWidth - 20;
  if (left < 10) left = 10;

  const btnStyle = (active: boolean): React.CSSProperties => ({
    width: 30, height: 30, borderRadius: 4, border: 'none', padding: 0,
    background: active ? '#EFF6FF' : 'transparent',
    color: active ? '#2563EB' : '#6B7280',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 14, transition: 'all 0.1s',
  });

  const sep = <div style={{ width: 1, height: 18, background: '#E5E7EB', margin: '0 3px', flexShrink: 0 }} />;

  return (
    <div ref={containerRef} style={{
      position: 'fixed', top, left, width: editorWidth, zIndex: 9999,
      background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10,
      boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
    }}>
      {/* 工具栏 */}
      {richtext && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 1, padding: '5px 8px', flexWrap: 'wrap',
          borderBottom: '1px solid #F3F4F6', background: '#FAFAFA',
        }}>
          {/* 字体大小 */}
          <Dropdown menu={{
            items: [12, 13, 14, 16, 18, 20, 24].map(s => ({
              key: s, label: `${s}px`,
              onClick: () => editor?.chain().focus().setFontSize(`${s}px`).run(),
            })),
          }} trigger={['click']} overlayStyle={{ zIndex: 10000 }}>
            <button style={btnStyle(false)} title="字体大小"><FontSizeOutlined /></button>
          </Dropdown>
          {sep}
          <button style={btnStyle(editor?.isActive('bold') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBold().run(); }} title="加粗 (Ctrl+B)">
            <BoldOutlined />
          </button>
          <button style={btnStyle(editor?.isActive('italic') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleItalic().run(); }} title="斜体 (Ctrl+I)">
            <ItalicOutlined />
          </button>
          <button style={btnStyle(editor?.isActive('underline') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleUnderline().run(); }} title="下划线 (Ctrl+U)">
            <UnderlineOutlined />
          </button>
          <button style={btnStyle(editor?.isActive('strike') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleStrike().run(); }} title="删除线">
            <StrikethroughOutlined />
          </button>
          {sep}
          <button style={btnStyle(editor?.isActive('bulletList') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBulletList().run(); }} title="无序列表">
            <UnorderedListOutlined />
          </button>
          <button style={btnStyle(editor?.isActive('orderedList') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleOrderedList().run(); }} title="有序列表">
            <OrderedListOutlined />
          </button>
          {sep}
          <button style={btnStyle(editor?.isActive({ textAlign: 'left' }) ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('left').run(); }} title="左对齐">
            <AlignLeftOutlined />
          </button>
          <button style={btnStyle(editor?.isActive({ textAlign: 'center' }) ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('center').run(); }} title="居中">
            <AlignCenterOutlined />
          </button>
          <button style={btnStyle(editor?.isActive({ textAlign: 'right' }) ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('right').run(); }} title="右对齐">
            <AlignRightOutlined />
          </button>
          {sep}
          <button style={btnStyle(editor?.isActive('link') ?? false)}
            onMouseDown={e => { e.preventDefault(); handleLink(); }} title="插入链接">
            <LinkOutlined />
          </button>
        </div>
      )}

      {/* 编辑区 */}
      <div style={{
        padding: '10px 14px', minHeight: richtext ? 100 : 36, maxHeight: 300, overflowY: 'auto',
        fontSize: 14, lineHeight: 1.7, color: '#111827',
      }}>
        <EditorContent editor={editor} />
      </div>

      {/* 底部按钮 */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 12px', borderTop: '1px solid #F3F4F6', background: '#FAFAFA',
      }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>
          {richtext ? '支持富文本格式' : 'Enter 确认 · Esc 取消'}
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <Button size="small" onClick={onCancel} style={{ fontSize: 12, borderRadius: 6 }}>取消</Button>
          <Button size="small" type="primary" onClick={handleConfirm}
            style={{ fontSize: 12, borderRadius: 6, background: '#111827', borderColor: '#111827' }}>确认</Button>
        </div>
      </div>

      <style>{`
        .tiptap { outline: none; }
        .tiptap p { margin: 0 0 4px; }
        .tiptap p:last-child { margin-bottom: 0; }
        .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder); color: #9CA3AF; pointer-events: none; float: left; height: 0;
        }
        .tiptap ul, .tiptap ol { margin: 4px 0; padding-left: 20px; }
        .tiptap li { margin: 2px 0; }
        .tiptap strong { font-weight: 600; }
        .tiptap a, .editor-link { color: #2563EB; text-decoration: underline; cursor: pointer; }
        .tiptap s { text-decoration: line-through; }
        .tiptap u { text-decoration: underline; }
      `}</style>
    </div>
  );
}
