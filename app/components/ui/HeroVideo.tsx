"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
  className?: string;
}

/**
 * HeroVideo — renders a poster instantly (fast LCP), then assigns the video
 * src after the page is interactive so the browser doesn't block parsing on
 * a 64 MB asset.
 */
export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Only load the video after the page is interactive.
    // Using requestIdleCallback where available for maximum friendliness.
    const load = () => {
      if (video.src) return; // already loaded
      video.src = src;
      video.load();
    };

    if ("requestIdleCallback" in window) {
      (window as Window & typeof globalThis).requestIdleCallback(load, { timeout: 2000 });
    } else {
      setTimeout(load, 1000);
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload="none"
      className={className}
      aria-hidden="true"
    />
  );
}
