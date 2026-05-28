import type { Block, CanvasConfig, TemplateVariables, ExportFormat } from '@resume/shared';

// ---------------------------------------------------------------------------
// Helper: trigger browser download
// ---------------------------------------------------------------------------
export function downloadFile(content: string | Blob, filename: string, mimeType: string): void {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// ---------------------------------------------------------------------------
// Block tree -> inline CSS string
// ---------------------------------------------------------------------------
function blockStyleToCSS(block: Block): string {
  const s = block.style;
  const parts: string[] = [];

  if (s.fontFamily) parts.push(`font-family:${s.fontFamily}`);
  if (s.fontSize) parts.push(`font-size:${s.fontSize}px`);
  if (s.fontWeight) parts.push(`font-weight:${s.fontWeight}`);
  if (s.lineHeight) parts.push(`line-height:${s.lineHeight}`);
  if (s.letterSpacing) parts.push(`letter-spacing:${s.letterSpacing}px`);
  if (s.textTransform && s.textTransform !== 'none') parts.push(`text-transform:${s.textTransform}`);
  if (s.color) parts.push(`color:${s.color}`);
  if (s.backgroundColor) parts.push(`background-color:${s.backgroundColor}`);
  if (s.opacity != null && s.opacity !== 1) parts.push(`opacity:${s.opacity}`);
  if (s.borderWidth) {
    parts.push(`border-width:${s.borderWidth}px`);
    parts.push(`border-style:${s.borderStyle || 'solid'}`);
    if (s.borderColor) parts.push(`border-color:${s.borderColor}`);
  }
  if (s.borderRadius != null) {
    if (Array.isArray(s.borderRadius)) {
      parts.push(`border-radius:${s.borderRadius.map(v => `${v}px`).join(' ')}`);
    } else {
      parts.push(`border-radius:${s.borderRadius}px`);
    }
  }
  if (s.padding) parts.push(`padding:${s.padding.map(v => `${v}px`).join(' ')}`);
  if (s.margin) parts.push(`margin:${s.margin.map(v => `${v}px`).join(' ')}`);
  if (s.textAlign) parts.push(`text-align:${s.textAlign}`);
  if (s.boxShadow) {
    const sh = s.boxShadow;
    parts.push(`box-shadow:${sh.x}px ${sh.y}px ${sh.blur}px ${sh.spread}px ${sh.color}`);
  }
  if (s.filter) parts.push(`filter:${s.filter}`);
  if (s.overflow && s.overflow !== 'visible') parts.push(`overflow:${s.overflow}`);

  return parts.join(';');
}

// ---------------------------------------------------------------------------
// Block -> HTML string
// ---------------------------------------------------------------------------
function blockToHTML(block: Block, allBlocks: Record<string, Block>): string {
  const style = blockStyleToCSS(block);
  const posStyle = `position:absolute;left:${block.position.x}px;top:${block.position.y}px;`
    + (typeof block.size.width === 'number' ? `width:${block.size.width}px;` : '')
    + (typeof block.size.height === 'number' ? `height:${block.size.height}px;` : '')
    + (block.rotation ? `transform:rotate(${block.rotation}deg);` : '')
    + `z-index:${block.zIndex};`;

  const fullStyle = `${posStyle}${style}`;
  const d = block.data;

  switch (d.type) {
    case 'text':
      return `<div style="${fullStyle}">${d.html}</div>`;

    case 'heading': {
      const tag = `h${d.level}`;
      return `<${tag} style="${fullStyle};margin:0">${d.html}</${tag}>`;
    }

    case 'image':
      return `<img src="${d.src}" alt="${d.alt || ''}" style="${fullStyle};object-fit:${d.objectFit || 'cover'}" />`;

    case 'icon':
      return `<span style="${fullStyle};font-size:${d.size}px;${d.color ? `color:${d.color}` : ''}">${d.icon}</span>`;

    case 'divider':
      return `<hr style="${fullStyle};border:none;border-top:${d.thickness}px ${d.variant} ${d.color || '#E7E5E4'}" />`;

    case 'shape':
      return `<div style="${fullStyle};background:${d.fill || 'transparent'};border:${d.strokeWidth || 1}px solid ${d.stroke || '#000'}"></div>`;

    case 'timeline': {
      const items = d.items.map(item =>
        `<div style="margin-bottom:12px"><strong>${item.title}</strong>${item.subtitle ? ` - ${item.subtitle}` : ''}<br/><span style="color:#78716C;font-size:0.85em">${item.date}</span>${item.description ? `<p style="margin:4px 0">${item.description}</p>` : ''}${item.highlights?.length ? `<ul style="margin:4px 0;padding-left:16px">${item.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` : ''}</div>`
      ).join('');
      return `<div style="${fullStyle}">${items}</div>`;
    }

    case 'skill-bar': {
      const bars = d.items.map(item => {
        const pct = Math.round((item.level / d.maxLevel) * 100);
        return `<div style="margin-bottom:6px">${d.showLabel ? `<div style="display:flex;justify-content:space-between;margin-bottom:2px"><span>${item.name}</span>${d.showPercentage ? `<span>${pct}%</span>` : ''}</div>` : ''}<div style="background:${d.trackColor || '#F5F5F4'};border-radius:4px;height:${d.barHeight}px"><div style="width:${pct}%;height:100%;background:${item.color || d.barColor || '#1C1917'};border-radius:4px"></div></div></div>`;
      }).join('');
      return `<div style="${fullStyle}">${bars}</div>`;
    }

    case 'rating': {
      const items = d.items.map(item => {
        const filled = Math.round(item.rating);
        const symbols = Array.from({ length: d.maxRating }, (_, i) =>
          `<span style="color:${i < filled ? d.activeColor || '#1C1917' : d.inactiveColor || '#E7E5E4'}">${d.symbol === 'star' ? '★' : d.symbol === 'circle' ? '●' : d.symbol === 'diamond' ? '◆' : '♥'}</span>`
        ).join('');
        return `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span>${item.name}</span><span>${symbols}</span></div>`;
      }).join('');
      return `<div style="${fullStyle}">${items}</div>`;
    }

    case 'tag-cloud': {
      const tags = d.tags.map(tag =>
        `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:13px;background:${tag.bgColor || '#F5F5F4'};color:${tag.color || '#1C1917'};margin:0 ${d.gap / 2}px ${d.gap / 2}px 0">${tag.text}</span>`
      ).join('');
      return `<div style="${fullStyle};display:flex;flex-wrap:wrap">${tags}</div>`;
    }

    case 'table': {
      const rows = d.cells.map((row, ri) => {
        const cells = row.map((cell, ci) => {
          const isHeader = (d.headerRow && ri === 0) || (d.headerCol && ci === 0);
          const tag = isHeader ? 'th' : 'td';
          const bg = isHeader && d.headerBg ? `background:${d.headerBg};` : '';
          return `<${tag} style="padding:6px 10px;border:1px solid ${d.borderColor || '#E7E5E4'};${bg}">${cell}</${tag}>`;
        }).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<table style="${fullStyle};border-collapse:collapse">${rows}</table>`;
    }

    case 'qrcode':
      return `<div style="${fullStyle};display:flex;align-items:center;justify-content:center;border:1px solid #E7E5E4"><span style="font-size:11px;color:#A8A29E">QR: ${d.value}</span></div>`;

    case 'section': {
      const childHtml = (block.children || [])
        .map(cid => allBlocks[cid] ? blockToHTML(allBlocks[cid], allBlocks) : '')
        .join('');
      return `<div style="${fullStyle}">${d.title ? `<h3 style="margin:0 0 8px">${d.title}</h3>` : ''}${childHtml}</div>`;
    }

    case 'columns': {
      const childHtml = (block.children || [])
        .map(cid => allBlocks[cid] ? blockToHTML(allBlocks[cid], allBlocks) : '')
        .join('');
      return `<div style="${fullStyle};display:grid;grid-template-columns:${d.ratios.map(r => `${r}fr`).join(' ')};gap:${d.gap}px">${childHtml}</div>`;
    }

    case 'spacer':
      return `<div style="${fullStyle};height:${d.height}px"></div>`;

    case 'page-break':
      return `<div style="page-break-after:always"></div>`;

    default:
      return `<div style="${fullStyle}"></div>`;
  }
}

// ---------------------------------------------------------------------------
// Export: HTML
// ---------------------------------------------------------------------------
export function exportToHTML(
  blocks: Block[],
  config: CanvasConfig,
  variables: TemplateVariables,
): string {
  const blockMap: Record<string, Block> = {};
  blocks.forEach(b => { blockMap[b.id] = b; });

  // Only render top-level blocks (no parentId)
  const topLevel = blocks.filter(b => !b.parentId).sort((a, b) => a.zIndex - b.zIndex);
  const bodyContent = topLevel.map(b => blockToHTML(b, blockMap)).join('\n');

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Resume</title>
<link href="https://fonts.googleapis.com/css2?family=${encodeURIComponent(variables.headingFont)}:wght@400;500;600;700&family=${encodeURIComponent(variables.bodyFont)}:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: '${variables.bodyFont}', 'PingFang SC', -apple-system, sans-serif;
    font-size: ${variables.baseFontSize}px;
    color: #1C1917;
    background: #F5F5F4;
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
  .resume-page {
    position: relative;
    width: ${config.width}px;
    height: ${config.height}px;
    background: ${config.background};
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    overflow: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: '${variables.headingFont}', 'PingFang SC', -apple-system, sans-serif;
  }
  @media print {
    body { background: none; padding: 0; }
    .resume-page { box-shadow: none; }
    @page { margin: 0; size: ${config.width}px ${config.height}px; }
  }
</style>
</head>
<body>
<div class="resume-page">
${bodyContent}
</div>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Export: PNG (stub)
// ---------------------------------------------------------------------------
export async function exportToPNG(_element?: HTMLElement): Promise<void> {
  // In a production implementation this would use html2canvas or a similar library
  // to render the canvas element to an image.
  // For now we provide a placeholder notification.
  alert('PNG 导出功能即将推出 / PNG export coming soon');
}

// ---------------------------------------------------------------------------
// Export: Markdown
// ---------------------------------------------------------------------------
export function exportToMarkdown(blocks: Block[]): string {
  const sorted = blocks
    .filter(b => !b.parentId && b.visible)
    .sort((a, b) => a.position.y - b.position.y || a.position.x - b.position.x);

  const lines: string[] = [];

  for (const block of sorted) {
    const d = block.data;
    switch (d.type) {
      case 'heading': {
        const prefix = '#'.repeat(d.level);
        const text = stripHTML(d.html);
        lines.push(`${prefix} ${text}`, '');
        break;
      }

      case 'text': {
        const text = stripHTML(d.html);
        if (text.trim()) lines.push(text, '');
        break;
      }

      case 'image':
        lines.push(`![${d.alt || ''}](${d.src})`, '');
        break;

      case 'divider':
        lines.push('---', '');
        break;

      case 'timeline':
        for (const item of d.items) {
          lines.push(`### ${item.title}${item.subtitle ? ` - ${item.subtitle}` : ''}`);
          lines.push(`*${item.date}*`);
          if (item.description) lines.push('', item.description);
          if (item.highlights?.length) {
            lines.push('');
            item.highlights.forEach(h => lines.push(`- ${h}`));
          }
          lines.push('');
        }
        break;

      case 'skill-bar':
        for (const item of d.items) {
          const pct = Math.round((item.level / d.maxLevel) * 100);
          lines.push(`- ${item.name}: ${pct}%`);
        }
        lines.push('');
        break;

      case 'rating':
        for (const item of d.items) {
          const stars = '★'.repeat(Math.round(item.rating)) + '☆'.repeat(d.maxRating - Math.round(item.rating));
          lines.push(`- ${item.name}: ${stars}`);
        }
        lines.push('');
        break;

      case 'tag-cloud':
        lines.push(d.tags.map(t => `\`${t.text}\``).join(' '), '');
        break;

      case 'table': {
        if (d.cells.length === 0) break;
        const header = d.cells[0];
        lines.push(`| ${header.join(' | ')} |`);
        lines.push(`| ${header.map(() => '---').join(' | ')} |`);
        for (let i = 1; i < d.cells.length; i++) {
          lines.push(`| ${d.cells[i].join(' | ')} |`);
        }
        lines.push('');
        break;
      }

      case 'spacer':
      case 'page-break':
        lines.push('', '---', '');
        break;

      default:
        break;
    }
  }

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

function stripHTML(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

// ---------------------------------------------------------------------------
// Export: JSON
// ---------------------------------------------------------------------------
export function exportToJSON(
  blocks: Block[],
  config: CanvasConfig,
  variables: TemplateVariables,
): string {
  return JSON.stringify({ canvas: config, variables, blocks }, null, 2);
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------
export async function triggerExport(
  format: ExportFormat,
  blocks: Block[],
  config: CanvasConfig,
  variables: TemplateVariables,
): Promise<void> {
  const timestamp = new Date().toISOString().slice(0, 10);
  const baseName = `resume-${timestamp}`;

  switch (format) {
    case 'html': {
      const html = exportToHTML(blocks, config, variables);
      downloadFile(html, `${baseName}.html`, 'text/html;charset=utf-8');
      break;
    }

    case 'png':
      await exportToPNG();
      break;

    case 'markdown': {
      const md = exportToMarkdown(blocks);
      downloadFile(md, `${baseName}.md`, 'text/markdown;charset=utf-8');
      break;
    }

    case 'json': {
      const json = exportToJSON(blocks, config, variables);
      downloadFile(json, `${baseName}.json`, 'application/json;charset=utf-8');
      break;
    }

    case 'pdf': {
      // PDF export uses the HTML export rendered in a print window
      const html = exportToHTML(blocks, config, variables);
      const win = window.open('', '_blank');
      if (!win) {
        alert('请允许弹窗以导出 PDF');
        return;
      }
      win.document.write(html);
      win.document.close();
      win.onload = () => { win.print(); };
      break;
    }

    case 'docx': {
      // DOCX export is a planned feature; fall back to HTML download with .doc extension
      // Word can open .html files saved as .doc
      const html = exportToHTML(blocks, config, variables);
      downloadFile(html, `${baseName}.doc`, 'application/msword');
      break;
    }

    default:
      console.warn(`Unsupported export format: ${format}`);
  }
}
