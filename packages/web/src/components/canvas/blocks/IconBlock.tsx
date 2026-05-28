import React from 'react';
import type { Block, IconBlockData } from '@resume/shared';
import { renderIcon } from '../../../utils/icons';

interface IconBlockProps {
  block: Block;
  isEditing: boolean;
}

export const IconBlock: React.FC<IconBlockProps> = ({ block }) => {
  const data = block.data as IconBlockData;

  const svgHtml = renderIcon(
    data.icon,
    data.size || 24,
    data.color || block.style.color || 'currentColor',
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: data.color || block.style.color || '#1C1917',
      }}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
};

