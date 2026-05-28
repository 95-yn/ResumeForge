import React, { useCallback, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import type { Block, TextBlockData } from '@resume/shared';
import { useCanvasStore } from '../../../stores/canvas.store';

interface TextBlockProps {
  block: Block;
  isEditing: boolean;
}

const TOOLBAR_STYLE: React.CSSProperties = {
  display: 'flex',
  gap: 2,
  padding: '4px 6px',
  background: '#fff',
  border: '1px solid #E7E5E4',
  borderRadius: 6,
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  position: 'absolute',
  top: -40,
  left: 0,
  zIndex: 100,
  whiteSpace: 'nowrap',
};

const BTN_STYLE: React.CSSProperties = {
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  padding: '2px 6px',
  borderRadius: 4,
  fontSize: 12,
  fontWeight: 600,
  color: '#1C1917',
  lineHeight: 1,
};

const BTN_ACTIVE: React.CSSProperties = {
  ...BTN_STYLE,
  background: '#E7E5E4',
};

function Toolbar({ editor }: { editor: ReturnType<typeof useEditor> }) {
  if (!editor) return null;

  const btn = (label: string, action: () => void, isActive: boolean) => (
    <button
      key={label}
      style={isActive ? BTN_ACTIVE : BTN_STYLE}
      onMouseDown={(e) => { e.preventDefault(); action(); }}
    >
      {label}
    </button>
  );

  return (
    <div style={TOOLBAR_STYLE} onMouseDown={(e) => e.stopPropagation()}>
      {btn('B', () => editor.chain().focus().toggleBold().run(), editor.isActive('bold'))}
      {btn('I', () => editor.chain().focus().toggleItalic().run(), editor.isActive('italic'))}
      {btn('U', () => editor.chain().focus().toggleUnderline().run(), editor.isActive('underline'))}
      {btn('S', () => editor.chain().focus().toggleStrike().run(), editor.isActive('strike'))}
      <span style={{ width: 1, background: '#E7E5E4', margin: '0 2px' }} />
      {btn('L', () => editor.chain().focus().setTextAlign('left').run(), editor.isActive({ textAlign: 'left' }))}
      {btn('C', () => editor.chain().focus().setTextAlign('center').run(), editor.isActive({ textAlign: 'center' }))}
      {btn('R', () => editor.chain().focus().setTextAlign('right').run(), editor.isActive({ textAlign: 'right' }))}
      <span style={{ width: 1, background: '#E7E5E4', margin: '0 2px' }} />
      {btn('UL', () => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'))}
      {btn('OL', () => editor.chain().focus().toggleOrderedList().run(), editor.isActive('orderedList'))}
    </div>
  );
}

export const TextBlock: React.FC<TextBlockProps> = ({ block, isEditing }) => {
  const data = block.data as TextBlockData;
  const updateBlockData = useCanvasStore((s) => s.updateBlockData);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight.configure({ multicolor: true }),
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: data.placeholder || '输入文本...' }),
    ],
    content: data.html,
    editable: isEditing,
    onUpdate: ({ editor: ed }) => {
      updateBlockData(block.id, { html: ed.getHTML() });
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditing);
      if (isEditing) {
        editor.commands.focus('end');
      }
    }
  }, [isEditing, editor]);

  useEffect(() => {
    if (editor && !isEditing && editor.getHTML() !== data.html) {
      editor.commands.setContent(data.html);
    }
  }, [data.html, isEditing, editor]);

  const containerStyle: React.CSSProperties = {
    fontFamily: block.style.fontFamily || "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
    fontSize: block.style.fontSize ? `${block.style.fontSize}px` : undefined,
    fontWeight: block.style.fontWeight,
    lineHeight: block.style.lineHeight,
    letterSpacing: block.style.letterSpacing ? `${block.style.letterSpacing}px` : undefined,
    color: block.style.color || '#1C1917',
    textAlign: block.style.textAlign,
    textTransform: block.style.textTransform,
    width: '100%',
    height: '100%',
    outline: 'none',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  };

  if (!isEditing) {
    return (
      <div
        style={containerStyle}
        dangerouslySetInnerHTML={{ __html: data.html || `<p style="color:#A8A29E">${data.placeholder || '输入文本...'}</p>` }}
      />
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Toolbar editor={editor} />
      <div style={containerStyle}>
        <EditorContent editor={editor} style={{ outline: 'none' }} />
      </div>
    </div>
  );
};

