"use client";

import Link from "next/link";

const variants = [
  {
    name: "V1 — Navy Serif",
    description: "Styl Accel.com: navy + serif italic headline, dużo whitespace, granatowe SVG line-art",
    href: "/v1",
    bg: "#121F45",
    accent: "#fafafc",
  },
  {
    name: "V2 — Dark Hero",
    description: "Ciemny hero, stats cards, SaaS layout, blue accents",
    href: "/v2",
    bg: "#0a0a0a",
    accent: "#3b82f6",
  },
  {
    name: "V3 — Cream Streamline",
    description: "Kremowy (#faf9f7), styl Streamline, pill buttons, ciepłe szarości",
    href: "/v3",
    bg: "#faf9f7",
    accent: "#121F45",
  },
  {
    name: "V5 — Dark Cruip",
    description: "Ciemny (gray-950), styl Cruip Simple, browser mockup, sector pills",
    href: "/v5",
    bg: "#030712",
    accent: "#3b82f6",
  },
];

export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#f5f5f0] pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-serif text-5xl italic text-navy md:text-6xl">
          Invento.vc
        </h1>
        <p className="mt-4 max-w-xl text-lg text-navy-muted">
          Wybierz wariant designu strony
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {variants.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Preview via iframe */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <iframe
                  src={v.href}
                  className="pointer-events-none h-[300%] w-[300%] origin-top-left scale-[0.3333]"
                  tabIndex={-1}
                  loading="lazy"
                  title={v.name}
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-navy/5 transition-colors" />
              </div>

              {/* Label */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-navy">{v.name}</h2>
                <p className="mt-1 text-sm text-navy-muted leading-relaxed">
                  {v.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
