"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedIllustrationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of drawing animation (seconds) */
  duration?: number;
}

export function AnimatedIllustration({
  src,
  alt,
  width,
  height,
  className = "",
  delay = 0,
  duration = 2,
}: AnimatedIllustrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => setSvgContent(text));
  }, [src]);

  return (
    <motion.div
      ref={containerRef}
      role="img"
      aria-label={alt}
      className={`animated-illustration ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {svgContent && (
        <div
          className={`svg-draw ${isInView ? "animate" : ""}`}
          style={
            {
              "--draw-duration": `${duration}s`,
              "--draw-delay": `${delay}s`,
            } as React.CSSProperties
          }
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </motion.div>
  );
}
