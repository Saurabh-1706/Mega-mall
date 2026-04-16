"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, className, speed = 1 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", `${10 * speed}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden w-full h-full", className)}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt || "Parallax image"}
        className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
      />
    </div>
  );
}
