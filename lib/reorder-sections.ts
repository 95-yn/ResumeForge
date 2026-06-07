/** 照片显示尺寸（中式 1 寸证件照常见比例 3:4） */
export const AVATAR_W = 78;
export const AVATAR_H = 104;
/** 默认位置：照片右上角距「纸张边缘」的内缩(px)。
 *  绝对定位相对 .resume 的 padding 框，而模板 box-sizing:border-box 使 padding 框≈纸张边，
 *  故该值即距纸边的距离。取 56 ≈ 14.8mm，越过常见 ~18mm 页边距落在内容右上角附近，不贴边。
 *  可被用户拖动后的坐标覆盖。 */
export const AVATAR_INSET = 56;

/** 默认占位图：暖色渐变圆角卡片 + 柔和徽章底 + 居中连贯人形。开启「显示照片」但未上传时使用。 */
export const DEFAULT_AVATAR =
  'data:image/svg+xml,' +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='156' height='208' viewBox='0 0 156 208'>" +
      '<defs>' +
      "<linearGradient id='b' x1='0' y1='0' x2='0' y2='1'>" +
      "<stop offset='0' stop-color='#F3ECE2'/><stop offset='1' stop-color='#E4DBCC'/></linearGradient>" +
      "<clipPath id='c'><rect width='156' height='208' rx='12'/></clipPath>" +
      '</defs>' +
      "<g clip-path='url(#c)'>" +
      "<rect width='156' height='208' fill='url(#b)'/>" +
      "<circle cx='78' cy='104' r='58' fill='#FFFFFF' opacity='0.55'/>" +
      "<g fill='#AEA391'>" +
      "<circle cx='78' cy='90' r='20'/>" +
      "<path d='M78 116c-23 0-41 17-41 38 0 3 2 5 5 5h72c3 0 5-2 5-5 0-21-18-38-41-38z'/>" +
      '</g></g></svg>',
  );

export interface AvatarSettings {
  avatarVisible?: boolean;
  avatarPos?: { x: number; y: number };
}

/**
 * 把已渲染简历 DOM 里的 [data-section] 区块按用户拖拽/键盘重排后的 sectionOrder 重新排序，
 * 并补注模板未渲染的额外字段：性别、联系方式(website/linkedin/github/wechat)、照片。
 *
 * 预览(ResumePreview)与打印(TopBar)共用此逻辑，确保「打印 === 所见」。
 * 直接在传入的 document 上原地变更；调用方各自负责序列化(预览要整文档、打印只要 body 片段)。
 */
export function applySectionReorder(
  doc: Document,
  sectionOrder: string[],
  basics?: Record<string, string>,
  settings?: AvatarSettings,
): void {
  // —— 注入缺失的联系方式/性别字段(克隆原生联系项元素，继承样式+分隔符，带 data-field 可编辑) ——
  if (basics) {
    const ref =
      doc.querySelector('[data-field="basics.email"]') ||
      doc.querySelector('[data-field="basics.phone"]') ||
      doc.querySelector('[data-field="basics.location"]');
    if (ref && ref.parentElement) {
      // 性别排在最前(紧贴姓名/联系行起始)，其余联系方式依次其后
      const extras = (['gender', 'website', 'linkedin', 'github', 'wechat'] as const).filter(
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

    // —— 注入照片 ——
    injectAvatar(doc, basics.avatar, settings);
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

/**
 * 把照片统一注入到「整页(.resume)」内，绝对定位，可显示/隐藏、可拖动。
 * - 显示与否由 settings.avatarVisible 决定；旧数据(未设置该项)若已上传照片则默认显示。
 * - 未上传照片但开启显示时，用 DEFAULT_AVATAR 占位图。
 * - 位置：用户拖动后的 settings.avatarPos(相对页面左上角的 left/top)优先；否则默认右上角内缩 AVATAR_INSET。
 * - 锚在 .resume 整页根(而非页眉)，使拖动坐标系与模板布局无关、统一一致。
 * - 接管模板自带头像位(class 含 "avatar" 的 <img>)：移除原生节点，统一由本注入控制(可隐藏/拖动)。
 * - 全部用内联样式，无需改任何模板 CSS。重复调用幂等(已注入则跳过)。
 */
function injectAvatar(doc: Document, avatar?: string, settings?: AvatarSettings): void {
  const hasUpload = !!(avatar && avatar.trim());
  // 显示判定：默认隐藏，仅在显式开启「显示照片」时才出现（上传照片会自动开启）
  const visible = settings?.avatarVisible === true;

  // 接管/清理模板自带头像位，避免与注入的照片重复
  doc.querySelectorAll('img[class*="avatar" i]').forEach((el) => el.remove());

  if (!visible) return;
  if (doc.querySelector('[data-rf-avatar]')) return; // 幂等：已注入

  const root =
    (doc.querySelector('.resume') as HTMLElement | null) ||
    (doc.body.firstElementChild as HTMLElement | null);
  if (!root) return;

  // 整页根需为定位上下文
  const pos = root.style.position;
  if (!pos || pos === 'static') root.style.position = 'relative';

  // 位置：拖动后的坐标(left/top)优先，否则默认右上角内缩
  const p = settings?.avatarPos;
  const place =
    p && Number.isFinite(p.x) && Number.isFinite(p.y)
      ? `left:${p.x}px;top:${p.y}px`
      : `right:${AVATAR_INSET}px;top:${AVATAR_INSET}px`;

  const img = doc.createElement('img');
  img.setAttribute('data-rf-avatar', '');
  img.setAttribute('alt', '照片');
  img.setAttribute('src', hasUpload ? avatar! : DEFAULT_AVATAR);
  img.style.cssText = [
    'position:absolute',
    place,
    `width:${AVATAR_W}px`,
    `height:${AVATAR_H}px`,
    'object-fit:cover',
    'border-radius:4px',
    'border:1px solid rgba(0,0,0,0.08)',
    'box-shadow:0 1px 4px rgba(0,0,0,0.08)',
    'z-index:5',
  ].join(';');
  root.appendChild(img);
}
