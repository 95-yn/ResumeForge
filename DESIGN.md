---
name: ResumeForge
description: 简历编辑平台，三层美学家族
colors:
  paper-cream: "#F5F1E8"
  paper-stone: "#F8F6F1"
  paper-ash: "#F5F2EB"
  warm-canvas: "#FAFAF9"
  card-white: "#FEFEFE"
  ink-coffee: "#3D2A1A"
  ink-chestnut: "#2D1810"
  ink-warm: "#1C1917"
  ink-deep-steel: "#292524"
  stone-mid: "#78716C"
  stone-light: "#A8A29E"
  stone-border: "#E7E5E4"
  stone-divider: "#F5F5F4"
  cyan-marine: "#1E5A6B"
  brick-red: "#B0463A"
  electric-pink: "#FF2D6F"
  alert-amber: "#D97706"
  safe-green: "#16A34A"
typography:
  display-serif:
    fontFamily: "'Old Standard TT', 'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(72px, 14vw, 200px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  display-modern:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(64px, 8vw, 96px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body-serif:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  body-sans:
    fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  mono-label:
    fontFamily: "'JetBrains Mono', 'SF Mono', monospace"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  none: "0"
  sm: "6px"
  md: "10px"
  lg: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "24px"
  xl: "40px"
  xxl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ink-warm}"
    textColor: "{colors.warm-canvas}"
    rounded: "{rounded.sm}"
    padding: "9px 18px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.stone-mid}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
  input-default:
    backgroundColor: "{colors.warm-canvas}"
    textColor: "{colors.ink-warm}"
    rounded: "{rounded.sm}"
    padding: "5px 8px"
---

# Design System: ResumeForge

## 1. Overview

**Creative North Star: "Three Editorial Rooms in One House"**

ResumeForge 是一个有三个房间的编辑工作室。每个房间有自己的气质，但共享一套手艺标准（印刷品级的字体、克制的色彩、对版面的认真）。

- **房间一 / Type Specimen**（首页 `/`）：字体样本册的气质，奶油底色+焦糖深褐，超大衬线展示"RESUME"作为字体样本。
- **房间二 / Editorial Archive**（模板市场 `/templates`）：杂志档案的气质，Fraunces 衬线+JetBrains Mono 标签，Masonry 网格，每个模板像一本小册子有自己的编号。
- **房间三 / Quiet Workshop**（编辑器 `/editor`）：工作坊的气质，纸纹背景+SVG 线条 icon+Mono uppercase 标签，最小化 chrome 让简历占主舞台。

系统明确拒绝：紫渐变 AI 美学、Canva 式装饰、企业 OA 灰、SaaS 三栏卡片模式、Inter 字体堆栈。

**Key Characteristics:**
- 三种字体家族协同工作：Old Standard TT（landing 衬线）、Fraunces（archive 衬线）、JetBrains Mono（标签）、Plus Jakarta Sans（编辑器 UI）
- 暖色调中性：paper-cream、paper-stone、paper-ash、ink-coffee 等命名都来自印刷品
- 不用规则 grid，用 masonry 节奏 / typography 错位
- 一笔强调色：Type Specimen 用 cyan-marine，Archive 用 brick-red，Workshop 用纯 ink，Manifesto 模板用 electric-pink

## 2. Colors

### Primary
- **Ink Warm** (#1C1917): 编辑器主文字、主按钮、活跃态。唯一承载视觉重量的颜色。

### Paper（背景层）
- **Paper Cream** (#F5F1E8): Landing 底色，温暖的奶油白。
- **Paper Stone** (#F8F6F1): Archive 底色，更冷一些的石灰白。
- **Paper Ash** (#F5F2EB): Workshop 预览区底色，加纸纹噪点。
- **Warm Canvas** (#FAFAF9): 编辑器 chrome 底色。
- **Card White** (#FEFEFE): 卡片表面。

### Ink（文字层）
- **Ink Coffee** (#3D2A1A): Landing 主文字。
- **Ink Chestnut** (#2D1810): Archive 主文字，更深一点。
- **Ink Warm** (#1C1917): Workshop 主文字。
- **Ink Deep Steel** (#292524): Hover 加深。

### Stone（中性灰）
- **Stone Mid** (#78716C): 次要文字。
- **Stone Light** (#A8A29E): 占位、禁用、Mono label。
- **Stone Border** (#E7E5E4): 所有边框。
- **Stone Divider** (#F5F5F4): hover 底色、分隔区。

### Accent（点缀，<5%）
- **Cyan Marine** (#1E5A6B): Type Specimen 标签 + Landing CTA 强调。
- **Brick Red** (#B0463A): Archive hover 高亮。
- **Electric Pink** (#FF2D6F): Manifesto 模板专用，只用于名字和 section 标题。
- 功能色：Alert Amber、Safe Green、Danger Red 用于状态指示。

### Named Rules
**The Three-Room Rule.** 每个页面有自己的 paper + ink + accent 三元组，不要混淆。Landing 是 cream+coffee+marine，Archive 是 stone+chestnut+brick，Workshop 是 ash+warm+ink-only。

**The No Cool Gray Rule.** 所有中性色都是石头/纸张色调。不用 #6B7280 这类冷灰。

## 3. Typography

**Display 衬线（Landing）:** Old Standard TT
**Display 衬线（Archive）:** Fraunces
**Body 无衬线（全站 UI）:** Plus Jakarta Sans, fallback PingFang SC
**Mono 标签:** JetBrains Mono, fallback SF Mono

**Character:** 三种衬线 + 一种 mono 标签字体共同营造印刷品质感。Old Standard TT 是 19 世纪报纸字样，给 Landing 注入"字体样本册"的气质。Fraunces 现代但有 optical sizes，让 Archive 的标题有杂志感。Mono 标签用极小的字号 + 大写 + 0.08em letter-spacing 营造编辑卡片的元数据感。

### Hierarchy
- **Display 衬线** (400, clamp(72-200px), 0.95 line-height, -0.03em): Landing hero RESUME，Archive "Templates" 标题。
- **Body 衬线** (400, 14px, 1.6): Archive 模板描述（italic）。
- **Display 无衬线** (700, 26px, 1.2, -0.5px): 编辑器页面标题。
- **Body 无衬线** (400, 13px, 1.6): 所有 UI 文字、表单输入。
- **Mono Label** (500, 10px, 0.08em, uppercase): Mono 标签、卡片元数据、字段 label。

### Named Rules
**The Specimen-Archive-Workshop Rule.** Type Specimen 房间用 Old Standard TT。Archive 房间用 Fraunces。Workshop 房间用 Plus Jakarta Sans。Mono 标签三个房间都用 JetBrains Mono。

## 4. Elevation

系统默认平面。深度通过纸张色阶（cream → stone → ash）和细边框传达，而不是阴影。

### Shadow Vocabulary
- **Float** (0 1px 3px rgba(0,0,0,0.04)): 编辑器顶栏 sticky 时浮起。
- **Card Hover** (0 8px 25px rgba(0,0,0,0.06)): 模板卡片 hover。
- **Modal** (0 16px 50px rgba(0,0,0,0.12)): FloatingEditor 浮动编辑器。
- **Paper Drop** (0 8px 40px rgba(0,0,0,0.08), 0 2px 10px rgba(0,0,0,0.04)): 编辑器中的 A4 简历纸。

### Named Rules
**The Paper-Casts-Shadow Rule.** 简历纸是唯一拥有静态阴影的元素，因为它代表一张物理纸。其他所有阴影都是交互的响应。

## 5. Components

### Buttons
- **Primary**: Ink Warm 背景，Warm Canvas 文字，13px/600，9px 18px padding，sm radius。
- **Ghost**: 透明背景，Stone Border 1px 描边，Stone Mid 文字，hover 填 Stone Divider。
- **Text Link (Archive)**: 无边框无背景，下划线偏移 3px 表示当前选中。不是胶囊不是按钮，是 magazine 风格的内联链接。

### Section Icons (Editor)
- 1.5px stroke SVG 线条 icon。
- 用户/公文包/毕业帽/星形/文件夹形状对应 basics/experience/education/skills/projects。
- 颜色继承 Stone Mid，size 14-15px。
- 替代了所有 emoji（emoji 是 anti-pattern）。

### Cards (Archive)
- 无 box、无阴影、无边框。
- Marginalia 注释：左上角 `№ 001` mono 小字。
- Hover：图片 grayscale(30%) → grayscale(0%) 过渡。标题色变 Brick Red。
- 整卡片可点击。

### Inputs (Editor)
- Warm Canvas 背景，Stone Border 1px，sm radius。
- Focus border 变 Ink Warm（无 ring 无 glow）。
- Label 用 Mono 小字 + uppercase + 0.06em letter-spacing。

### Filter Bar (Archive bottom)
- 固定底部，56px 高（可展开到 100px）。
- 全是 inline 文字按钮，当前选中加 underline-offset: 3px。
- 不是胶囊，不是 select。

### Floating Editor (TipTap)
- lg radius (14px)，Modal 阴影。
- 工具栏：Warm Canvas 底色，active 态 Stone Divider 背景 + Ink Warm 文字。

## 6. Do's and Don'ts

### Do:
- **Do** 让每个房间保持自己的字体和 paper 色。Landing 永远是 Old Standard TT + cream，Archive 永远是 Fraunces + stone，Workshop 永远是 Plus Jakarta Sans + ash。
- **Do** 用 SVG 线条 icon 而不是 emoji 作为 UI 图标。
- **Do** Mono 标签必须 uppercase + letter-spacing。
- **Do** 卡片用 marginalia 注释（№、年份、类别）代替按钮。
- **Do** 状态变化用 ease-out-expo，120-200ms。

### Don't:
- **Don't** 用紫渐变、毛玻璃、霓虹色。
- **Don't** 用 Canva 式装饰（emoji 当 icon、彩色方块）。
- **Don't** 用冷灰色（#6B7280 系列）。
- **Don't** 用 Inter/Roboto 系统字体堆栈。
- **Don't** 用 hero + CTA + 三栏卡片的 SaaS 模式。
- **Don't** 用 border-left/right 大于 1px 作为彩色 stripe。
- **Don't** 用 gradient text (background-clip: text)。
- **Don't** 用 bounce/elastic easing。
