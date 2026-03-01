"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

interface AnimatedIllustrationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  delay?: number;
  duration?: number;
  /** Starting stroke width (animates to original) */
  strokeFrom?: number;
}

export function AnimatedIllustration({
  src,
  alt,
  width,
  height,
  className = "",
  delay = 0,
  duration = 2,
  strokeFrom = 0.5,
}: AnimatedIllustrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => setSvgContent(text));
  }, [src]);

  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    const el = containerRef.current;
    const svg = el.querySelector("svg");
    const paths = el.querySelectorAll("path, line, polyline, polygon, circle, ellipse, rect");

    if (paths.length === 0 || !svg) return;

    // Normalize stroke-width relative to viewBox size
    const vb = svg.getAttribute("viewBox");
    let targetStroke = 7;
    if (vb) {
      const parts = vb.split(/[\s,]+/).map(Number);
      const vbWidth = parts[2] || 1000;
      // Scale: 0.35% of viewBox width gives consistent visual thickness
      targetStroke = vbWidth * 0.0035;
    }

    gsap.set(el, { opacity: 1 });
    gsap.set(paths, { strokeWidth: targetStroke });

    gsap.from(paths, {
      drawSVG: 0,
      strokeWidth: targetStroke * 0.07,
      stagger: 0.08,
      duration,
      delay,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [svgContent, delay, duration, strokeFrom]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={alt}
      className={`animated-illustration ${className}`}
      style={{ width, height, opacity: 0 }}
    >
      {svgContent && (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      )}
    </div>
  );
}
