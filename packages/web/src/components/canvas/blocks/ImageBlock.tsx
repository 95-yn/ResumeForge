import React, { useRef } from 'react';
import type { Block, ImageBlockData } from '@resume/shared';
import { useCanvasStore } from '../../../stores/canvas.store';

interface ImageBlockProps {
  block: Block;
  isEditing: boolean;
}

const CLIP_PATHS: Record<string, string> = {
  none: 'none',
  circle: 'circle(50% at 50% 50%)',
  rounded: 'inset(0 round 12px)',
  hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
};

export const ImageBlock: React.FC<ImageBlockProps> = ({ block, isEditing }) => {
  const data = block.data as ImageBlockData;
  const updateBlockData = useCanvasStore((s) => s.updateBlockData);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      updateBlockData(block.id, { src });
    };
    reader.readAsDataURL(file);
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const clipPath = CLIP_PATHS[data.clipShape || 'none'];

  if (!data.src) {
    return (
      <div style={containerStyle}>
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: 80,
            background: '#F5F5F4',
            border: '2px dashed #D6D3D1',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            cursor: isEditing ? 'pointer' : 'default',
            clipPath,
          }}
          onClick={() => isEditing && fileInputRef.current?.click()}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A8A29E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span style={{ fontSize: 12, color: '#A8A29E' }}>
            {isEditing ? '点击上传图片' : '暂无图片'}
          </span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <img
        src={data.src}
        alt={data.alt || ''}
        style={{
          width: '100%',
          height: '100%',
          objectFit: data.objectFit || 'cover',
          clipPath,
          filter: data.filter || block.style.filter || undefined,
          display: 'block',
        }}
        draggable={false}
      />
      {isEditing && (
        <>
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              background: 'rgba(28,25,23,0.7)',
              color: '#fff',
              fontSize: 11,
              padding: '4px 10px',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            更换图片
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
};

