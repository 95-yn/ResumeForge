---
target: editor (Quiet Workshop)
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-05-29T03-00-18Z
slug: components-editor
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Strong status dot + toast + scroll-shadow; but save button disabled-when-saved hides the affordance and autosave is silent until it lands. |
| 2 | Match System / Real World | 3 | Good zh recruiting copy; icon-only undo/redo/reset cluster unlabeled, reset icon reads as a third undo. |
| 3 | User Control & Freedom | 3 | (FIXED) reorder/delete now in undo history. Reset still explicitly irreversible. |
| 4 | Consistency & Standards | 3 | (IMPROVED) rich-text palette unified. Still: antd Modal.confirm vs custom modal vs toast = 3 feedback vocabularies; #F0EAE0 hover off documented token. |
| 5 | Error Prevention | 3 | Delete/reset confirm, quota handled, load race-guarded, link sanitized. |
| 6 | Recognition over Recall | 3 | Clear labels+icons; Tab/Cmd+P/Cmd+K shortcuts undocumented; zoom has no control. |
| 7 | Flexibility & Efficiency | 3 | Rich shortcuts + drag; zoom dead; keyboard users can't enter preview-edit flow without a mouse click. |
| 8 | Aesthetic & Minimalist | 3 | Genuinely restrained/warm/flat; slight over-animation (status pulse + 600ms paper entrance). |
| 9 | Error Recovery | 3 | Elegant render-error + save-error states; link-injection regex can silently fail. |
| 10 | Help & Documentation | 1 | No onboarding/shortcut reference; teaching empty state only fires when name AND email blank, so pre-filled profession templates never show it. |
| **Total** | | **28/40** | **Competent+ (post-fix). Solid craft; remaining gaps in onboarding, vocabulary consolidation, a11y.** |

## Anti-Patterns Verdict

**LLM assessment**: Not obviously AI-generated. Warm stone/ink palette, flat elevation, mono uppercase labels, and the click-to-edit FloatingEditor read as hand-tuned, product-register craft. Pre-fix, two seams betrayed it: (1) two rich-text editors injected the banned cool-blue #2563EB / purple #7C3AED into the document and disagreed on active color; (2) antd Modal.confirm clashes with the custom warm modal.

**Deterministic scan**: Bundled detector engine absent from this install (detect.mjs loaded but detect-antipatterns.mjs missing) — substituted a grep ban-scan. CLEAN on gradient-text, side-stripe, glassmorphism, cool-gray, Inter/Roboto, bounce easing. Only real hit was the rich-text swatch palette (now fixed). Em dashes present only in code comments, not user copy.

## What's Working
1. Click-to-edit on the live preview (brick-red hover→active, Tab field-nav with smooth-scroll, compact/full toolbars, inline link input).
2. Designed error/loading/render-failure states (spinner over paper-ash, Fraunces-italic error card with recovery CTA, quota-aware save error).
3. Thorough paste sanitization in InlineRichText (whitelist tags, strip Word/Notion bloat).

## Priority Issues
- **[P1 — FIXED] Undo bypassed section structure.** reorderSections/removeSection skipped pushHistory; Cmd+Z couldn't restore. → history now stores {data, order}; undo/redo restore both. Verified by new Bug 6 test.
- **[P1 — FIXED] Banned colors in two divergent palettes.** → single lib/editor-colors.ts warm palette; link color → cyan-marine.
- **[P2] Fragmented confirmation vocabulary (antd vs custom vs toast).** Route all deletes through one ConfirmDialog (ResetConfirmModal is 90% there); retire Modal.confirm. → distill.
- **[P2] No onboarding; teaching empty state rarely fires.** Core interaction (click preview to edit) is undiscoverable on pre-filled templates. Add a dismissible coachmark + shortcut reference. → onboard.
- **[P3] Dead zoom feature.** State + setZoom + ResumePreview scale exist, no control surfaces it. Ship a control or cut the state. → clarify.

## Minor Observations
- #F0EAE0 is the de-facto hover token across all panes but undocumented (spec hover = #F5F5F4).
- Two grip-icon components (GripIcon dead export in TopBar).
- SaveToast and ToastContainer are two separate bottom-center toast systems that can overlap.
- PortalDropdown uses hardcoded dropH=180 for flip logic; long lists misposition.
- Link-injection regex in ResumePreview is brittle across templates and silently no-ops.
- Preview-editing requires a mouse click to enter; keyboard/SR users can't start it; save-status region lacks aria-live.

## Questions to Consider
1. Ship zoom (needs a control) or cut the state?
2. Replace antd Modal.confirm entirely to drop the framework styling clash?
3. Should profession templates open with a coachmark regardless of pre-filled data?
