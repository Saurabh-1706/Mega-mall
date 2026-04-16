"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[100vh] flex items-center justify-center", className)}>
      <div className="max-w-4xl mx-auto flex flex-wrap gap-x-[1.5rem] p-5">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
