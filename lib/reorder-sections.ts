/**
 * 把已渲染简历 DOM 里的 [data-section] 区块按用户拖拽/键盘重排后的 sectionOrder 重新排序，
 * 并补注模板未渲染的额外联系方式字段(website/linkedin/github/wechat)。
 *
 * 预览(ResumePreview)与打印(TopBar)共用此逻辑，确保「打印 === 所见」。
 * 直接在传入的 document 上原地变更；调用方各自负责序列化(预览要整文档、打印只要 body 片段)。
 */
export function applySectionReorder(
  doc: Document,
  sectionOrder: string[],
  basics?: Record<string, string>,
): void {
  // —— 注入缺失的联系方式字段(克隆原生联系项元素，继承样式+分隔符，带 data-field 可编辑) ——
  if (basics) {
    const ref =
      doc.querySelector('[data-field="basics.email"]') ||
      doc.querySelector('[data-field="basics.phone"]') ||
      doc.querySelector('[data-field="basics.location"]');
    if (ref && ref.parentElement) {
      const extras = (['website', 'linkedin', 'github', 'wechat'] as const).filter(
        (k) => basics[k] && basics[k].trim() && !doc.querySelector(`[data-field="basics.${k}"]`),
      );
      let anchor: Element = ref;
      for (const k of extras) {
        const node = ref.cloneNode(false) as Element;
        node.setAttribute('data-field', `basics.${k}`);
        node.removeAttribute('id');
        node.textContent = basics[k];
        anchor.parentElement!.insertBefore(node, anchor.nextSibling);
        anchor = node;
      }
    }
  }

  // —— 按 sectionOrder 重排各 [data-section] ——
  const allSections = doc.querySelectorAll('[data-section]');
  if (allSections.length === 0) return;

  const parentMap = new Map<Element, Map<string, Element>>();
  allSections.forEach((el) => {
    const parent = el.parentElement;
    if (!parent) return;
    if (!parentMap.has(parent)) parentMap.set(parent, new Map());
    parentMap.get(parent)!.set(el.getAttribute('data-section')!, el);
  });

  const draggableOrder = sectionOrder.filter((k) => k !== 'basics');
  parentMap.forEach((sectionsMap, container) => {
    draggableOrder.forEach((key) => {
      const el = sectionsMap.get(key);
      if (!el) return;
      // 有些模板把区块标题放在 [data-section] 的「前一个兄弟」，需一并移动，否则标题留原地
      const prev = el.previousElementSibling;
      if (prev && (/^H[1-6]$/.test(prev.tagName) || (typeof prev.className === 'string' && /title/i.test(prev.className)))) {
        container.appendChild(prev);
      }
      container.appendChild(el);
    });
  });
}
