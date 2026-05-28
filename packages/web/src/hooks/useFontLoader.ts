import { useState, useEffect } from 'react';
import { useCanvasStore } from '../stores/canvas.store';
import { loadGoogleFont, isFontLoaded, FONT_CATALOG } from '../utils/fonts';

/**
 * Hook that preloads all fonts used in the current canvas.
 * Reads blocks from the canvas store, extracts unique fontFamily values
 * from block styles and template variables, then loads each via Google Fonts.
 */
export function useFontLoader(): { loading: boolean; loadedFonts: string[] } {
  const blocks = useCanvasStore((s) => s.blocks);
  const variables = useCanvasStore((s) => s.variables);

  const [loading, setLoading] = useState(false);
  const [loadedFonts, setLoadedFonts] = useState<string[]>([]);

  useEffect(() => {
    // Collect unique font families from all blocks and template variables
    const fonts = new Set<string>();

    // From template variables
    if (variables.headingFont) fonts.add(variables.headingFont);
    if (variables.bodyFont) fonts.add(variables.bodyFont);

    // From block styles
    Object.values(blocks).forEach((block) => {
      if (block.style?.fontFamily) {
        fonts.add(block.style.fontFamily);
      }
    });

    // Filter to only fonts that exist in the catalog and are not yet loaded
    const toLoad = Array.from(fonts).filter((family) => {
      const def = FONT_CATALOG.find((f) => f.family === family);
      return def && def.source === 'google' && !isFontLoaded(family);
    });

    if (toLoad.length === 0) {
      setLoadedFonts(Array.from(fonts));
      setLoading(false);
      return;
    }

    setLoading(true);

    Promise.all(toLoad.map((family) => loadGoogleFont(family).catch(() => {})))
      .then(() => {
        setLoadedFonts(Array.from(fonts));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [blocks, variables]);

  return { loading, loadedFonts };
}
