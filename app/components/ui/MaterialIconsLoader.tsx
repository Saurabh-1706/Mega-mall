"use client";

import { useEffect } from "react";

/**
 * Injects the Material Symbols CSS after the page is hydrated.
 * This avoids render-blocking while still loading the font correctly —
 * next/script cannot load stylesheets, so we use a dynamic link instead.
 */
export function MaterialIconsLoader() {
  useEffect(() => {
    // Prevent duplicate injection on HMR reloads
    const existing = document.querySelector(
      'link[data-font="material-symbols"]'
    );
    if (existing) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute("data-font", "material-symbols");
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block";
    document.head.appendChild(link);
  }, []);

  return null;
}
