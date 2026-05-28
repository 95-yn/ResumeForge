import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import type { Block, HeadingBlockData } from '@resume/shared';
import { useCanvasStore } from '../../../stores/canvas.store';

interface HeadingBlockProps {
  block: Block;
  isEditing: boolean;
}

const FONT_SIZES: Record<number, number> = {
  1: 32,
  2: 26,
  3: 22,
  4: 18,
  5: 16,
  6: 14,
};

export const HeadingBlock: React.FC<HeadingBlockProps> = ({ block, isEditing }) => {
  const data = block.data as HeadingBlockData;
  const updateBlockData = useCanvasStore((s) => s.updateBlockData);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] },
        paragraph: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        blockquote: false,
        codeBlock: false,
        horizontalRule: false,
      }),
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading'] }),
      Placeholder.configure({ placeholder: '输入标题...' }),
    ],
    content: data.html || `<h${data.level}>标题</h${data.level}>`,
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
    fontSize: block.style.fontSize ? `${block.style.fontSize}px` : `${FONT_SIZES[data.level] || 22}px`,
    fontWeight: block.style.fontWeight || 700,
    lineHeight: block.style.lineHeight || 1.3,
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
        dangerouslySetInnerHTML={{ __html: data.html || `<h${data.level}>标题</h${data.level}>` }}
      />
    );
  }

  return (
    <div style={{ ...containerStyle, position: 'relative' }}>
      <EditorContent editor={editor} style={{ outline: 'none' }} />
    </div>
  );
};

