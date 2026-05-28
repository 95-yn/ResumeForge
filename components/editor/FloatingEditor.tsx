'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
// Underline is bundled by StarterKit v3 — adding @tiptap/extension-underline duplicates it
// Link is bundled by StarterKit v3 — adding @tiptap/extension-link would duplicate.
// setLink/unsetLink commands are still available via the bundled extension.
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { Button, Dropdown } from 'antd';
import {
  BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined,
  UnorderedListOutlined, OrderedListOutlined, LinkOutlined,
  AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined,
  FontSizeOutlined, FontColorsOutlined, BgColorsOutlined,
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

function isLongField(field: string): boolean {
  if (field === 'basics.summary') return true;
  if (/^projects\.\d+\.description$/.test(field)) return true;
  if (/^experience\.\d+\.description$/.test(field)) return true;
  if (/\.highlights\.\d+$/.test(field)) return true;
  return false;
}

const TEXT_COLORS = [
  { color: '#1C1917', label: '默认黑' },
  { color: '#DC2626', label: '红' },
  { color: '#EA580C', label: '橙' },
  { color: '#CA8A04', label: '黄' },
  { color: '#16A34A', label: '绿' },
  { color: '#2563EB', label: '蓝' },
  { color: '#7C3AED', label: '紫' },
  { color: '#78716C', label: '灰' },
];

const BG_COLORS = [
  { color: 'transparent', label: '无背景' },
  { color: '#FEF2F2', label: '浅红' },
  { color: '#FFF7ED', label: '浅橙' },
  { color: '#FEFCE8', label: '浅黄' },
  { color: '#F0FDF4', label: '浅绿' },
  { color: '#EFF6FF', label: '浅蓝' },
  { color: '#F5F3FF', label: '浅紫' },
  { color: '#F5F5F4', label: '浅灰' },
];

interface ColorPickerProps {
  colors: { color: string; label: string }[];
  onSelect: (color: string) => void;
  onReset: () => void;
  onClose: () => void;
}

function ColorPicker({ colors, onSelect, onReset, onClose }: ColorPickerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target || !document.contains(target)) return;  // detached node — ignore
      if (ref.current && !ref.current.contains(target)) onClose();
    };
    setTimeout(() => document.addEventListener('mouseup', handleClick), 50);
    return () => document.removeEventListener('mouseup', handleClick);
  }, [onClose]);

  return (
    <div ref={ref} style={{
      position: 'absolute', top: '100%', left: 0, marginTop: 4, zIndex: 10001,
      background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: 8,
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '8px 10px', minWidth: 160,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
        {colors.map(({ color, label }) => (
          <button
            key={color}
            title={label}
            onMouseDown={e => { e.preventDefault(); onSelect(color); onClose(); }}
            style={{
              width: 20, height: 20, borderRadius: '50%', border: '2px solid #E7E5E4',
              background: color === 'transparent' ? 'linear-gradient(135deg, #fff 45%, #f44 45%, #f44 55%, #fff 55%)' : color,
              cursor: 'pointer', padding: 0, flexShrink: 0,
              transition: 'transform 0.1s, border-color 0.1s',
              outline: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#1C1917'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.borderColor = '#E7E5E4'; }}
          />
        ))}
        {/* Custom color via native browser popup */}
        <label
          title="自定义颜色"
          style={{
            width: 20, height: 20, borderRadius: '50%', border: '2px solid #E7E5E4',
            background: 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
            cursor: 'pointer', padding: 0, flexShrink: 0, position: 'relative',
            overflow: 'hidden', display: 'inline-block',
          }}
          onMouseDown={e => e.preventDefault()}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#1C1917'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.borderColor = '#E7E5E4'; }}
        >
          <input
            type="color"
            defaultValue="#1C1917"
            onChange={e => { onSelect(e.target.value); onClose(); }}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              opacity: 0, cursor: 'pointer', border: 'none', padding: 0,
            }}
          />
        </label>
      </div>
      <button
        onMouseDown={e => { e.preventDefault(); onReset(); onClose(); }}
        style={{
          fontSize: 11, color: '#78716C', background: 'transparent', border: 'none',
          cursor: 'pointer', padding: '2px 4px', borderRadius: 4, fontFamily: 'inherit',
          outline: 'none',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F5F5F4'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
      >重置</button>
    </div>
  );
}

export function FloatingEditor({ editingField, iframeRect, onConfirm, onCancel }: FloatingEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const longField = isLongField(editingField.field);
  const [colorPickerOpen, setColorPickerOpen] = useState<'text' | 'bg' | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Placeholder.configure({ placeholder: '输入内容...' }),
      // Bug 3 fix: TextStyle must be registered; Color/FontSize explicitly bound
      TextStyle,
      FontSize,
      Color.configure({ types: ['textStyle'] }),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['paragraph'] }),
    ],
    content: editingField.value || '',
    autofocus: 'end',
    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor && editingField.value !== undefined) {
      const currentContent = editor.getHTML();
      if (currentContent !== editingField.value) {
        editor.commands.setContent(editingField.value || '');
      }
    }
  }, [editor, editingField.field, editingField.value]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onCancel(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onCancel]);

  const handleConfirm = useCallback(() => {
    if (!editor) return;
    let html = editor.getHTML();
    // Unwrap single <p>...</p> so inline fields (skill.name, position 等)
    // don't render as block element → no spurious line break in <li>/<span>.
    if (typeof document !== 'undefined') {
      const div = document.createElement('div');
      div.innerHTML = html;
      if (div.children.length === 1 && div.firstElementChild?.tagName === 'P') {
        html = div.firstElementChild.innerHTML;
      }
    }
    onConfirm(editingField.field, html);
  }, [editor, editingField.field, onConfirm]);

  // Click outside → implicit save (industry standard for inline editors). ESC → cancel.
  // Use mouseup (not mousedown) + document.contains guard:
  //   - mouseup fires AFTER React has flushed any onMouseDown handlers
  //     (e.g. ColorPicker swatch closes itself in onMouseDown → DOM unmount).
  //     If we read e.target during mousedown phase, it may be a detached node
  //     that ContainerRef.contains() falsely judges "outside" → unexpected close.
  //   - document.contains(target) skips events whose target was removed
  //     between mousedown and our handler firing.
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target || !document.contains(target)) return;  // stale / detached target
      if (containerRef.current && !containerRef.current.contains(target)) handleConfirm();
    };
    const timer = setTimeout(() => document.addEventListener('mouseup', handleClickOutside), 150);
    return () => { clearTimeout(timer); document.removeEventListener('mouseup', handleClickOutside); };
  }, [handleConfirm]);

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
  const editorWidth = longField ? 480 : Math.max(260, Math.min(420, editingField.rect.width + 60));
  const editorH = longField ? 280 : 120;
  let top = fieldTop + editingField.rect.height + 8;
  if (top + editorH > window.innerHeight - 20) top = fieldTop - editorH - 8;
  let left = fieldLeft;
  if (left + editorWidth > window.innerWidth - 20) left = window.innerWidth - editorWidth - 20;
  if (left < 10) left = 10;

  // Active state: brick-red 5% bg + chestnut text
  const toolBtnStyle = (active: boolean): React.CSSProperties => ({
    width: 28, height: 28, borderRadius: 5, border: 'none', padding: 0,
    background: active ? 'rgba(176,70,58,0.06)' : 'transparent',
    color: active ? '#2D1810' : '#78716C',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13,
    transition: 'background 120ms, color 120ms',
    fontFamily: 'inherit', position: 'relative' as const,
    outline: 'none',
  });

  const sep = <div style={{ width: 1, height: 16, background: '#E7E5E4', margin: '0 2px', flexShrink: 0 }} />;

  const hoverIn = (e: React.MouseEvent<HTMLButtonElement>, active: boolean) => {
    if (!active) {
      e.currentTarget.style.background = 'rgba(176,70,58,0.05)';
      e.currentTarget.style.color = '#1C1917';
    }
  };
  const hoverOut = (e: React.MouseEvent<HTMLButtonElement>, active: boolean) => {
    if (!active) {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = '#78716C';
    }
  };

  const compactToolbar = (
    <>
      <Dropdown menu={{
        items: [
          { key: 'unset', label: <span style={{ fontFamily: 'inherit', color: '#78716C' }}>默认</span>,
            onClick: () => editor?.chain().focus().unsetFontSize().run() },
          ...[12, 13, 14, 16, 18, 20, 24].map(s => ({
            key: String(s), label: <span style={{ fontFamily: 'inherit' }}>{s}px</span>,
            onClick: () => editor?.chain().focus().setFontSize(`${s}px`).run(),
          })),
        ],
      }} trigger={['click']} overlayStyle={{ zIndex: 10000 }}>
        <button style={toolBtnStyle(false)} title="字体大小"
          onMouseEnter={e => hoverIn(e, false)} onMouseLeave={e => hoverOut(e, false)}
        ><FontSizeOutlined /></button>
      </Dropdown>
      {sep}
      <button style={toolBtnStyle(editor?.isActive('bold') ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBold().run(); }} title="加粗 (Ctrl+B)"
        onMouseEnter={e => hoverIn(e, editor?.isActive('bold') ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive('bold') ?? false)}
      ><BoldOutlined /></button>
      <button style={toolBtnStyle(editor?.isActive('italic') ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleItalic().run(); }} title="斜体 (Ctrl+I)"
        onMouseEnter={e => hoverIn(e, editor?.isActive('italic') ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive('italic') ?? false)}
      ><ItalicOutlined /></button>
      {sep}
      <div style={{ position: 'relative' }}>
        <button
          style={toolBtnStyle(colorPickerOpen === 'text')}
          title="文字颜色"
          onMouseDown={e => { e.preventDefault(); setColorPickerOpen(colorPickerOpen === 'text' ? null : 'text'); }}
          onMouseEnter={e => hoverIn(e, colorPickerOpen === 'text')}
          onMouseLeave={e => hoverOut(e, colorPickerOpen === 'text')}
        ><FontColorsOutlined /></button>
        {colorPickerOpen === 'text' && (
          <ColorPicker
            colors={TEXT_COLORS}
            onSelect={c => editor?.chain().focus().setColor(c).run()}
            onReset={() => editor?.chain().focus().unsetColor().run()}
            onClose={() => setColorPickerOpen(null)}
          />
        )}
      </div>
    </>
  );

  const fullToolbar = (
    <>
      {compactToolbar}
      <button style={toolBtnStyle(editor?.isActive('underline') ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleUnderline().run(); }} title="下划线 (Ctrl+U)"
        onMouseEnter={e => hoverIn(e, editor?.isActive('underline') ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive('underline') ?? false)}
      ><UnderlineOutlined /></button>
      <button style={toolBtnStyle(editor?.isActive('strike') ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleStrike().run(); }} title="删除线"
        onMouseEnter={e => hoverIn(e, editor?.isActive('strike') ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive('strike') ?? false)}
      ><StrikethroughOutlined /></button>
      {sep}
      <button style={toolBtnStyle(editor?.isActive('bulletList') ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBulletList().run(); }} title="无序列表"
        onMouseEnter={e => hoverIn(e, editor?.isActive('bulletList') ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive('bulletList') ?? false)}
      ><UnorderedListOutlined /></button>
      <button style={toolBtnStyle(editor?.isActive('orderedList') ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleOrderedList().run(); }} title="有序列表"
        onMouseEnter={e => hoverIn(e, editor?.isActive('orderedList') ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive('orderedList') ?? false)}
      ><OrderedListOutlined /></button>
      {sep}
      <button style={toolBtnStyle(editor?.isActive({ textAlign: 'left' }) ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('left').run(); }} title="左对齐"
        onMouseEnter={e => hoverIn(e, editor?.isActive({ textAlign: 'left' }) ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive({ textAlign: 'left' }) ?? false)}
      ><AlignLeftOutlined /></button>
      <button style={toolBtnStyle(editor?.isActive({ textAlign: 'center' }) ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('center').run(); }} title="居中"
        onMouseEnter={e => hoverIn(e, editor?.isActive({ textAlign: 'center' }) ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive({ textAlign: 'center' }) ?? false)}
      ><AlignCenterOutlined /></button>
      <button style={toolBtnStyle(editor?.isActive({ textAlign: 'right' }) ?? false)}
        onMouseDown={e => { e.preventDefault(); editor?.chain().focus().setTextAlign('right').run(); }} title="右对齐"
        onMouseEnter={e => hoverIn(e, editor?.isActive({ textAlign: 'right' }) ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive({ textAlign: 'right' }) ?? false)}
      ><AlignRightOutlined /></button>
      {sep}
      <div style={{ position: 'relative' }}>
        <button
          style={toolBtnStyle(colorPickerOpen === 'bg')}
          title="背景色"
          onMouseDown={e => { e.preventDefault(); setColorPickerOpen(colorPickerOpen === 'bg' ? null : 'bg'); }}
          onMouseEnter={e => hoverIn(e, colorPickerOpen === 'bg')}
          onMouseLeave={e => hoverOut(e, colorPickerOpen === 'bg')}
        ><BgColorsOutlined /></button>
        {colorPickerOpen === 'bg' && (
          <ColorPicker
            colors={BG_COLORS}
            onSelect={c => editor?.chain().focus().setHighlight({ color: c }).run()}
            onReset={() => editor?.chain().focus().unsetHighlight().run()}
            onClose={() => setColorPickerOpen(null)}
          />
        )}
      </div>
      <button style={toolBtnStyle(editor?.isActive('link') ?? false)}
        onMouseDown={e => { e.preventDefault(); handleLink(); }} title="插入链接"
        onMouseEnter={e => hoverIn(e, editor?.isActive('link') ?? false)}
        onMouseLeave={e => hoverOut(e, editor?.isActive('link') ?? false)}
      ><LinkOutlined /></button>
    </>
  );

  return (
    <div ref={containerRef} style={{
      position: 'fixed', top, left, width: editorWidth, zIndex: 9999,
      background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: 14,
      boxShadow: '0 20px 60px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.06)',
      overflow: 'visible',
      fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
    }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        gap: 4,  // 2px → 4px per spec
        padding: '6px 8px', flexWrap: 'wrap',
        borderBottom: '1px solid #F5F5F4', background: '#FAFAF9',
        borderRadius: '14px 14px 0 0', overflow: 'visible',
      }}>
        {longField ? fullToolbar : compactToolbar}
      </div>

      <div style={{
        padding: '10px 14px', minHeight: longField ? 100 : 38, maxHeight: 300, overflowY: 'auto',
        fontSize: 14, lineHeight: 1.7, color: '#1C1917',
      }}>
        <EditorContent editor={editor} />
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 12px', borderTop: '1px solid #F5F5F4', background: '#FAFAF9',
        borderRadius: '0 0 14px 14px',
      }}>
        <span style={{ fontSize: 11, color: '#A8A29E', fontFamily: 'inherit' }}>
          {longField ? '支持富文本格式' : 'Esc 取消'}
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <Button
            size="small"
            onClick={onCancel}
            style={{ fontSize: 12, borderRadius: 6, fontFamily: 'inherit' }}
          >
            取消
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={handleConfirm}
            style={{
              fontSize: 12, borderRadius: 6,
              background: '#1C1917', borderColor: '#1C1917',
              fontFamily: 'inherit',
              boxShadow: '0 2px 6px rgba(28,25,23,0.3), 0 1px 2px rgba(28,25,23,0.2)',
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = '#292524';
              btn.style.boxShadow = '0 4px 10px rgba(28,25,23,0.35), 0 1px 3px rgba(28,25,23,0.2)';
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = '#1C1917';
              btn.style.boxShadow = '0 2px 6px rgba(28,25,23,0.3), 0 1px 2px rgba(28,25,23,0.2)';
            }}
          >
            确认
          </Button>
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
        .tiptap mark { padding: 0 2px; border-radius: 2px; }
        button:focus-visible { outline: 1px solid #1C1917 !important; outline-offset: 2px !important; }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0ms !important; animation-duration: 0ms !important; }
        }
      `}</style>
    </div>
  );
}
