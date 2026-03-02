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
  /** Stagger between paths in seconds (default 0.08) */
  stagger?: number;
  /** Override stroke-width normalization percentage (default 0.35) */
  strokeScale?: number;
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
  stagger = 0.08,
  strokeScale = 0.35,
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
      targetStroke = vbWidth * (strokeScale / 100);
    }

    // Remove inline stroke-width from SVG <style> blocks so GSAP can control it
    const styleTags = svg.querySelectorAll("style");
    styleTags.forEach((tag) => {
      tag.textContent = (tag.textContent || "").replace(/stroke-width:[^;}"]+[;]?/g, "");
    });
    // Also clear inline style stroke-width on each element
    paths.forEach((p) => {
      (p as SVGElement).style.strokeWidth = "";
    });

    gsap.set(el, { opacity: 1 });
    // Use CSS inline style (not attr) — inline style beats class-based CSS rules in specificity
    gsap.set(paths, { strokeWidth: targetStroke });

    gsap.from(paths, {
      drawSVG: 0,
      strokeWidth: targetStroke * 0.07,
      stagger,
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
  }, [svgContent, delay, duration, strokeFrom, stagger, strokeScale]);

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
