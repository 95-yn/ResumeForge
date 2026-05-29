---
target: editor (Quiet Workshop)
total_score: 34
p0_count: 0
p1_count: 0
timestamp: 2026-05-29T06-27-19Z
slug: components-editor
---
## Design Health Score (re-critique)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3.5 | StatusDot + aria-live + scroll shadow + coachmark + zoom %. Dynamic FloatingEditor has no loading fallback (sub-frame, gated). |
| 2 | Match System / Real World | 4 | zh labels, mono micro-labels, professional copy, PDF "姓名 · 职位". Idiomatic. |
| 3 | User Control & Freedom | 3.5 | Undo restores {data, order}; Esc cancels; confirm before destructive. Minor: removeField visibility is local state. |
| 4 | Consistency & Standards | 3.5 | Palette unified (editor-colors.ts), one ConfirmDialog, custom Tooltip. StatusDot still uses non-palette traffic-light colors. |
| 5 | Error Prevention | 3.5 | confirmDialog on delete/reset; paste sanitizer; URL scheme guard; quota handled. |
| 6 | Recognition over Recall | 3.5 | Toolbars, tooltips with shortcuts, item summaries, section counts. |
| 7 | Flexibility & Efficiency | 3.5 | Cmd+Z/Y/S/P/K, click-outside save, zoom, drag, dynamic import, Tab+Enter editing. |
| 8 | Aesthetic & Minimalist | 3.5 | Quiet Workshop holds; static paper shadow; ease-out-expo; disciplined accent. |
| 9 | Error Recovery | 3 | Error toast + RenderErrorState + print-failure toast; recoverable. No inline field validation (out of scope). |
| 10 | Help & Documentation | 3 | First-run coachmark + empty-state hint + rich tooltips. No persistent help affordance (OK for register). |
| **Total** | | **34/40** | **Strong (good, not yet impeccable). Up from 28.** |

## Score delta vs prior 28/40
**28 → 34 (+6).** Gains: H3 control/freedom (+1.5, undo covers structure), H4 consistency (+1, palette unification + single ConfirmDialog + antd removed), H1 status (+1, zoom/coachmark/aria-live/scroll), H5 (+0.5), H7/H8 (+0.5 each). No regressions from the recent changes.

## Anti-Patterns Verdict
Deterministic ban-scan CLEAN: no gradient-text, glassmorphism, cool-gray, Inter/Roboto, side-stripe, banned blue/purple, em-dash copy, console.log, or TODO. A Linear/Notion/Figma-fluent user would now trust it.

## What's Working
1. Undo/redo as {data, order} snapshots — structure changes genuinely reversible.
2. Unified design vocabulary — editor-colors.ts single source; custom Tooltip/ConfirmDialog/FontSizeMenu/ToastContainer all speak ink/stone/brick; antd ConfigProvider/Modal.confirm gone.
3. Keyboard a11y in the iframe — data-field gets tabindex/role/aria-label; focus highlight; Enter/Space edits; Tab native; editingStarted flag preserves highlight into the popup.

## Remaining Issues (none P0/P1)
- **[P2 — FIXED] setRenderError during render** → memo now returns {html, error}; renderError derived. Done (46d01a4).
- **[P2] Link-injection regex** mutates rendered template HTML to graft website/linkedin/github after email; fragile across templates, glyph labels (🌐/in/GH) read as slop. Pre-existing & test-covered (Bug 2). Fix = templates own contact rendering, or scope to a known basics container. → harden/extract. (backlog)
- **[P3] StatusDot off-palette colors** (#22C55E/#F59E0B/#DC2626 traffic-lights). Warm them or document as explicit semantic exception. → colorize.
- **[P3] Tooltip no edge-collision** — far-right print tooltip (long copy, translateX(-50%)) may clip past viewport right edge. → harden (clamp/shift).
- **[P3] Zoom buttons 26px** — below comfortable touch min; fine for mouse-only desktop tool.
- **[P3] removeField visibility is local state**, not history-tracked as a unit with the value clear. → clarify.

## Regressions from recent changes
None found. Dynamic FloatingEditor correctly gated; coachmark z-order/timing sound; toast dedup coalesces rapid saves; keyboard focus model (editingStarted/blur/clear-active-field) correct, no Tab trap.

## Questions to Consider
1. Should link-injection exist, or should templates own contact rendering?
2. Is StatusDot green/amber/red an intentional palette exception?
3. Touch/tablet support, or mouse-only? (grip/delete are hover-only opacity:0.)
