"use client";

import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

// Module-level SVG cache — fetch starts immediately on first request,
// subsequent calls reuse the same promise (no waterfall)
const svgCache = new Map<string, Promise<string>>();
export function prefetchSvg(src: string) { fetchSvg(src); }
function fetchSvg(src: string): Promise<string> {
  let cached = svgCache.get(src);
  if (!cached) {
    cached = fetch(src)
      .then((res) => res.text())
      .then((text) => text.replace(/stroke-width:[^;}"]+[;]?/g, ""));
    svgCache.set(src, cached);
  }
  return cached;
}

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
  /** Skip ScrollTrigger — start animation immediately on mount */
  immediate?: boolean;
  /** Pre-cleaned SVG markup — skips fetch entirely, animation starts on first render */
  inlineSvg?: string;
}

export const AnimatedIllustration = memo(function AnimatedIllustration({
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
  immediate = false,
  inlineSvg,
}: AnimatedIllustrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string | null>(inlineSvg ?? null);

  useEffect(() => {
    if (!inlineSvg) {
      fetchSvg(src).then(setSvgContent);
    }
  }, [src, inlineSvg]);

  useLayoutEffect(() => {
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

    // Remove stroke-width from SVG elements — both presentation attributes and inline styles.
    // CSS <style> blocks are already cleaned in the fetch step (before DOM insertion).
    paths.forEach((p) => {
      p.removeAttribute("stroke-width");
      (p as SVGElement).style.strokeWidth = "";
    });

    // Kill any existing tweens on these paths (React strict mode double-render)
    gsap.killTweensOf(paths);

    gsap.set(el, { opacity: 1 });
    // Set initial state: thin strokes, drawSVG at 0
    gsap.set(paths, { strokeWidth: targetStroke * 0.07, drawSVG: 0 });

    // Animate TO target state — ensures final stroke-width is always consistent
    const tweenConfig: gsap.TweenVars = {
      drawSVG: "0% 100%",
      strokeWidth: targetStroke,
      stagger,
      duration,
      delay,
      ease: "power2.inOut",
      overwrite: true,
    };

    if (!immediate) {
      tweenConfig.scrollTrigger = {
        trigger: el,
        start: "top 85%",
        once: true,
      };
    }

    gsap.to(paths, tweenConfig);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
      gsap.killTweensOf(paths);
    };
  }, [svgContent, delay, duration, strokeFrom, stagger, strokeScale, immediate]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={alt}
      className={`animated-illustration ${className}`}
      style={{ width, height, opacity: 0, overflow: "hidden" }}
    >
      {svgContent && (
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          style={{ width: "100%", height: "100%" }}
          className="[&>svg]:h-full [&>svg]:w-full [&>svg]:object-contain"
        />
      )}
    </div>
  );
});
