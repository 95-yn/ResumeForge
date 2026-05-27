import { useEffect, useRef, useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import { Button, Dropdown } from 'antd';
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
  let top = fieldTop + editingField.rect.height + 8;
  if (top + editorH > window.innerHeight - 20) top = fieldTop - editorH - 8;
  let left = fieldLeft;
  if (left + editorWidth > window.innerWidth - 20) left = window.innerWidth - editorWidth - 20;
  if (left < 10) left = 10;

  const toolBtnStyle = (active: boolean): React.CSSProperties => ({
    width: 28, height: 28, borderRadius: 5, border: 'none', padding: 0,
    background: active ? '#F5F5F4' : 'transparent',
    color: active ? '#1C1917' : '#78716C',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, transition: 'all 0.1s', fontFamily: 'inherit',
  });

  const sep = <div style={{ width: 1, height: 16, background: '#E7E5E4', margin: '0 2px', flexShrink: 0 }} />;

  return (
    <div ref={containerRef} style={{
      position: 'fixed', top, left, width: editorWidth, zIndex: 9999,
      background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: 14,
      boxShadow: '0 16px 50px rgba(0,0,0,0.12)',
      overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
    }}>

      {/* Rich text toolbar */}
      {richtext && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 1, padding: '6px 8px', flexWrap: 'wrap',
          borderBottom: '1px solid #F5F5F4', background: '#FAFAF9',
        }}>
          {/* Font size dropdown */}
          <Dropdown menu={{
            items: [12, 13, 14, 16, 18, 20, 24].map(s => ({
              key: s, label: <span style={{ fontFamily: 'inherit' }}>{s}px</span>,
              onClick: () => editor?.chain().focus().setFontSize(`${s}px`).run(),
            })),
          }} trigger={['click']} overlayStyle={{ zIndex: 10000 }}>
            <button style={toolBtnStyle(false)} title="字体大小"
              onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; }}
            ><FontSizeOutlined /></button>
          </Dropdown>
          {sep}
          <button style={toolBtnStyle(editor?.isActive('bold') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBold().run(); }} title="加粗 (Ctrl+B)"
            onMouseEnter={e => { if (!editor?.isActive('bold')) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive('bold')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><BoldOutlined /></button>
          <button style={toolBtnStyle(editor?.isActive('italic') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleItalic().run(); }} title="斜体 (Ctrl+I)"
            onMouseEnter={e => { if (!editor?.isActive('italic')) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive('italic')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><ItalicOutlined /></button>
          <button style={toolBtnStyle(editor?.isActive('underline') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleUnderline().run(); }} title="下划线 (Ctrl+U)"
            onMouseEnter={e => { if (!editor?.isActive('underline')) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive('underline')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><UnderlineOutlined /></button>
          <button style={toolBtnStyle(editor?.isActive('strike') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleStrike().run(); }} title="删除线"
            onMouseEnter={e => { if (!editor?.isActive('strike')) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive('strike')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><StrikethroughOutlined /></button>
          {sep}
          <button style={toolBtnStyle(editor?.isActive('bulletList') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBulletList().run(); }} title="无序列表"
            onMouseEnter={e => { if (!editor?.isActive('bulletList')) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive('bulletList')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><UnorderedListOutlined /></button>
          <button style={toolBtnStyle(editor?.isActive('orderedList') ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleOrderedList().run(); }} title="有序列表"
            onMouseEnter={e => { if (!editor?.isActive('orderedList')) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive('orderedList')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><OrderedListOutlined /></button>
          {sep}
          <button style={toolBtnStyle(editor?.isActive({ textAlign: 'left' }) ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('left').run(); }} title="左对齐"
            onMouseEnter={e => { if (!editor?.isActive({ textAlign: 'left' })) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive({ textAlign: 'left' })) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><AlignLeftOutlined /></button>
          <button style={toolBtnStyle(editor?.isActive({ textAlign: 'center' }) ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('center').run(); }} title="居中"
            onMouseEnter={e => { if (!editor?.isActive({ textAlign: 'center' })) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive({ textAlign: 'center' })) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><AlignCenterOutlined /></button>
          <button style={toolBtnStyle(editor?.isActive({ textAlign: 'right' }) ?? false)}
            onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('right').run(); }} title="右对齐"
            onMouseEnter={e => { if (!editor?.isActive({ textAlign: 'right' })) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive({ textAlign: 'right' })) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><AlignRightOutlined /></button>
          {sep}
          <button style={toolBtnStyle(editor?.isActive('link') ?? false)}
            onMouseDown={e => { e.preventDefault(); handleLink(); }} title="插入链接"
            onMouseEnter={e => { if (!editor?.isActive('link')) { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#1C1917'; } }}
            onMouseLeave={e => { if (!editor?.isActive('link')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#78716C'; } }}
          ><LinkOutlined /></button>
        </div>
      )}

      {/* Editor area */}
      <div style={{
        padding: '10px 14px', minHeight: richtext ? 100 : 38, maxHeight: 300, overflowY: 'auto',
        fontSize: 14, lineHeight: 1.7, color: '#1C1917',
      }}>
        <EditorContent editor={editor} />
      </div>

      {/* Bottom actions */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 12px', borderTop: '1px solid #F5F5F4', background: '#FAFAF9',
      }}>
        <span style={{ fontSize: 11, color: '#A8A29E', fontFamily: 'inherit' }}>
          {richtext ? '支持富文本格式' : 'Enter 确认 · Esc 取消'}
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <Button
            size="small" onClick={onCancel}
            style={{ fontSize: 12, borderRadius: 6, fontFamily: 'inherit' }}
          >取消</Button>
          <Button
            size="small" type="primary" onClick={handleConfirm}
            style={{
              fontSize: 12, borderRadius: 6,
              background: '#1C1917', borderColor: '#1C1917',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#292524'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1C1917'; }}
          >确认</Button>
        </div>
      </div>

      <style>{`
        .tiptap { outline: none; font-family: 'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif; }
        .tiptap p { margin: 0 0 4px; }
        .tiptap p:last-child { margin-bottom: 0; }
        .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder); color: #A8A29E; pointer-events: none; float: left; height: 0;
        }
        .tiptap ul, .tiptap ol { margin: 4px 0; padding-left: 20px; }
        .tiptap li { margin: 2px 0; }
        .tiptap strong { font-weight: 600; }
        .tiptap a, .editor-link { color: #0369A1; text-decoration: underline; cursor: pointer; }
        .tiptap s { text-decoration: line-through; }
        .tiptap u { text-decoration: underline; }
      `}</style>
    </div>
  );
}
