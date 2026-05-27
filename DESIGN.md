---
name: ResumeForge
description: 专业简历编辑平台
colors:
  warm-ink: "#1C1917"
  warm-stone: "#78716C"
  warm-ash: "#A8A29E"
  stone-border: "#E7E5E4"
  stone-hover: "#F5F5F4"
  warm-canvas: "#FAFAF9"
  card-white: "#FEFEFE"
  deep-steel: "#292524"
  ocean-accent: "#0369A1"
  safe-green: "#16A34A"
  alert-amber: "#D97706"
  danger-red: "#DC2626"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.3px"
  title:
    fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.warm-ink}"
    textColor: "{colors.warm-canvas}"
    rounded: "{rounded.sm}"
    padding: "9px 18px"
  button-primary-hover:
    backgroundColor: "{colors.deep-steel}"
    textColor: "{colors.warm-canvas}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.warm-stone}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
  button-ghost-hover:
    backgroundColor: "{colors.stone-hover}"
    textColor: "{colors.warm-ink}"
  input-default:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.warm-ink}"
    rounded: "{rounded.md}"
    padding: "9px 12px"
  chip-filter:
    backgroundColor: "{colors.stone-hover}"
    textColor: "{colors.warm-stone}"
    rounded: "20px"
    padding: "6px 16px"
  chip-filter-active:
    backgroundColor: "{colors.warm-ink}"
    textColor: "{colors.warm-canvas}"
---

# Design System: ResumeForge

## 1. Overview

**Creative North Star: "The Quiet Workshop"**

ResumeForge is a place where work gets done without the tool getting in the way. The interface is warm but quiet: stone-tinted neutrals create an atmosphere that's professional without being cold, confident without being loud. Every pixel of chrome exists to serve the document in the center of the screen.

The system explicitly rejects: purple gradients and glassmorphism (AI tool cliché), Canva-style decoration (stickers, emoji, colorful blocks), enterprise OA dullness (lifeless cool grays), and neon/high-saturation palettes (inappropriate for a professional document tool).

**Key Characteristics:**
- Warm neutral palette with zero decorative color
- Plus Jakarta Sans throughout, one family, multiple weights
- Flat surfaces with tonal layering (no ambient shadows at rest)
- Minimal chrome; the resume preview dominates the viewport
- State transitions under 200ms; no choreographed motion

## 2. Colors

A stone-tinted monochrome palette. Every gray carries warmth (stone undertone, never blue-cool). Color enters only as functional signals: ocean blue for rare accent links, green/amber/red for system states.

### Primary
- **Warm Ink** (#1C1917): Primary text, primary buttons, active states. The single dominant color on every screen.

### Neutral
- **Deep Steel** (#292524): Hover darkening on primary surfaces. The login brand panel.
- **Warm Stone** (#78716C): Secondary text, labels, inactive navigation.
- **Warm Ash** (#A8A29E): Placeholders, disabled text, tertiary information.
- **Stone Border** (#E7E5E4): All borders and dividers.
- **Stone Hover** (#F5F5F4): Hover backgrounds, panel tints, section fills.
- **Warm Canvas** (#FAFAF9): Page background. Not white: warm.
- **Card White** (#FEFEFE): Card and panel surfaces. Nearly white but tinted.

### Functional
- **Ocean Accent** (#0369A1): Links, rare highlights. Used on less than 5% of any screen.
- **Safe Green** (#16A34A): Save confirmed, success states.
- **Alert Amber** (#D97706): Unsaved changes, warnings.
- **Danger Red** (#DC2626): Delete confirmation, error states.

### Named Rules
**The Warm Ink Rule.** #1C1917 is the only color that carries visual weight on the interface. Everything else is support. If a second color demands attention on the same screen, the hierarchy is broken.

**The No Cool Gray Rule.** Every neutral is stone-tinted. If you reach for #6B7280 or #9CA3AF, stop. Use the stone equivalents.

## 3. Typography

**Body Font:** Plus Jakarta Sans (with -apple-system, PingFang SC, Microsoft YaHei fallbacks)

**Character:** A single geometric sans that's warm and readable. Jakarta Sans carries enough personality to feel designed (it's not Inter), but enough neutrality to disappear into a tool. Weight contrast does all the work: 700 for display, 600 for titles, 500 for emphasis, 400 for body.

### Hierarchy
- **Display** (700, 26px, 1.2 line-height, -0.5px tracking): Page titles. "我的简历", "选择模板".
- **Headline** (700, 18px, 1.3, -0.3px): Section headers in sidebar and content areas.
- **Title** (600, 15px, 1.4): Card titles, template names, resume title in editor bar.
- **Body** (400, 13px, 1.6): All body text, descriptions, form labels, sidebar content. Max 65ch where applicable.
- **Label** (600, 11px, 1.2, 0.08em tracking, uppercase): Category headers ("模块", "模板", "缩放"), filter group labels.

### Named Rules
**The One Family Rule.** Plus Jakarta Sans only. No second typeface in the interface. Resume templates have their own typography; the editor shell does not compete.

## 4. Elevation

The system is flat by default. Depth is conveyed through tonal layering (canvas → card → hover), not ambient shadows. Shadows appear only in response to state.

### Shadow Vocabulary
- **Float** (`0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)`): The baseline. Applied to sticky headers (via backdrop blur), the resume preview card at rest.
- **Card Hover** (`0 8px 25px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)`): Template cards on hover, resume cards on hover. Earned by interaction, never present at rest.
- **Modal** (`0 16px 50px rgba(0,0,0,0.12)`): The floating TipTap editor. The only surface with significant elevation.

### Named Rules
**The Flat-at-Rest Rule.** No surface has a shadow in its default state except the resume preview iframe (which represents a physical document and earns its shadow). Shadows are responses to user actions, not decoration.

## 5. Components

### Buttons
- **Shape:** Gently curved (6px radius)
- **Primary:** Warm Ink background, Warm Canvas text, 13px/600, 9px 18px padding. The only button with filled background.
- **Hover:** Deep Steel background, subtle lift. Transition 120ms ease-out.
- **Focus:** 2px ring offset, Warm Ink color. Visible for keyboard navigation.
- **Ghost:** Transparent background, Stone Border outline, Warm Stone text. Hover fills Stone Hover.

### Chips / Filter Pills
- **Default:** Stone Hover background, Warm Stone text, full rounded (20px radius), 6px 16px padding.
- **Active:** Warm Ink background, Warm Canvas text. Binary toggle, no gradients.

### Cards (Template Market / Dashboard)
- **Corner Style:** Softly rounded (10px)
- **Background:** Card White
- **Border:** 1px Stone Border at rest
- **Hover:** Card Hover shadow appears, border shifts to slightly darker. Element translates -2px vertically. 150ms transition.
- **Internal Padding:** 20px horizontal, varies vertical.

### Inputs / Fields
- **Style:** Card White background, 1px Stone Border, rounded (10px), 13px body text.
- **Focus:** Border shifts to Warm Ink. No glow, no ring. Clean single-state change.
- **Placeholder:** Warm Ash color.

### Navigation (Top Bar)
- **Height:** 54px. Backdrop blur (12px) with warm canvas tint at 92% opacity.
- **Logo:** 15px/700 Warm Ink text, left-aligned. No icon, no decoration.
- **Actions:** Ghost buttons, right-aligned. Warm Stone default, Warm Ink on hover.

### Resume Preview (Signature Component)
The centerpiece. An A4-proportioned iframe (210mm × 297mm) centered on a Stone Hover field. Float shadow at rest (the "physical document" exception). The only surface that shows the user's actual content; everything else is chrome. The surrounding preview area uses Stone Hover (#F5F5F4) to create tonal contrast against the white resume paper.

## 6. Do's and Don'ts

### Do:
- **Do** use Warm Ink (#1C1917) as the only high-contrast color in the interface. Everything else is a shade of stone.
- **Do** vary spacing for rhythm. Template section padding differs from sidebar padding differs from card padding.
- **Do** keep the resume preview center-stage. Editor chrome should never compete for attention.
- **Do** use Plus Jakarta Sans exclusively in the editor UI. Resume templates define their own fonts independently.
- **Do** use state-driven shadows only. Hover → shadow appears. Rest → shadow disappears.

### Don't:
- **Don't** use purple gradients, glassmorphism, or neon colors. (PRODUCT.md anti-reference: "紫色渐变 + 毛玻璃的 AI 工具风格")
- **Don't** add decorative elements: stickers, emoji as design elements, colored blocks. (PRODUCT.md: "Canva 式的过度装饰")
- **Don't** use cool grays (#6B7280 family). Every neutral must be stone-warm.
- **Don't** use border-left or border-right greater than 1px as colored accent stripes.
- **Don't** use gradient text (background-clip: text).
- **Don't** use modals for editing. The floating TipTap editor is an inline popover, not a modal.
- **Don't** animate layout properties. State transitions only, 120-200ms, ease-out-quart.
- **Don't** use bounce or elastic easing. Exponential ease-out only.
