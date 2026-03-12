"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarBlank, Tag } from "@phosphor-icons/react";
import { motion } from "motion/react";

const news = [
  {
    title: 'Resquant w raporcie „Innowacje albo dryf. Polska mapa wzrostu 2026-2035"',
    excerpt:
      "ResQuant, spółka portfelowa Invento, została wyróżniona w najnowszym raporcie analitycznym jako jeden z kluczowych graczy polskiego ekosystemu deeptech.",
    tag: "Portfolio",
    date: "Mar 8, 2026",
    logo: "ResQuant",
  },
  {
    title: "Gridaly partnerem Carpathian Startup Fest",
    excerpt:
      "Gridaly, nasza spółka z sektora Industry 4.0, została oficjalnym partnerem technologicznym tegorocznej edycji Carpathian Startup Fest w Rzeszowie.",
    tag: "Events",
    date: "Mar 3, 2026",
    logo: "Gridaly",
  },
  {
    title: "Współpraca z UW. Dagmara w jury finału Brave Camp",
    excerpt:
      "Dagmara Strzębicka, partnerka Invento, zasiadła w jury finałowej gali programu Brave Camp na Uniwersytecie Warszawskim.",
    tag: "Team",
    date: "Feb 22, 2026",
    logo: "Brave Camp",
  },
  {
    title: "Spotkajmy się w maju na InfoShare",
    excerpt:
      "Zespół Invento będzie obecny na InfoShare 2026 w Gdańsku. Zapraszamy founderów i inwestorów na spotkania networkingowe.",
    tag: "Events",
    date: "Feb 15, 2026",
    logo: "InfoShare",
  },
];

const tagColors: Record<string, string> = {
  Portfolio: "bg-blue-50 text-blue-600",
  Events: "bg-amber-50 text-amber-600",
  Team: "bg-emerald-50 text-emerald-600",
};

export default function NewsPreviewPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased" style={{ backgroundColor: "#faf9f7" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8e4de] bg-[#faf9f7]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/v3">
            <img src="/invento-logo.png" alt="invento." width={120} height={32} />
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-28">
        <Link href="/v3" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900">
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          News & Insights — Layout Preview
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
          4 warianty layoutu sekcji newsów do porównania. Każdy wariant pokazuje te same dane.
        </p>

        {/* ============================================ */}
        {/* VARIANT A — List with dividers (V1 style adapted to V3) */}
        {/* ============================================ */}
        <section className="mt-24">
          <div className="mb-6 rounded-lg bg-gray-900 px-4 py-2 text-sm font-mono text-white inline-block">
            Wariant A — Lista z dividerami
          </div>
          <div className="rounded-3xl border border-[#e8e4de] bg-[#f5f3ef]/50 p-8 md:p-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#8dacc7]">Stay updated</p>
                <h2 className="mt-2 font-serif text-3xl italic text-gray-900 md:text-4xl">
                  News & Insights
                </h2>
              </div>
              <button className="hidden items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 md:inline-flex">
                View all
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-10 divide-y divide-[#e8e4de]">
              {news.map((item, i) => (
                <motion.article
                  key={item.title}
                  className="group flex flex-col gap-4 py-7 sm:flex-row sm:items-start cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                >
                  <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-gray-400 border border-[#e8e4de]">
                    {item.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tagColors[item.tag]}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-[15px] font-semibold text-gray-900 transition-colors group-hover:text-[#8dacc7]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                  <ArrowRight size={16} className="mt-1 shrink-0 text-gray-300 transition-all group-hover:text-[#8dacc7] group-hover:translate-x-1" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VARIANT B — 2x2 Card Grid */}
        {/* ============================================ */}
        <section className="mt-24">
          <div className="mb-6 rounded-lg bg-gray-900 px-4 py-2 text-sm font-mono text-white inline-block">
            Wariant B — Grid 2×2 karty
          </div>
          <div className="rounded-3xl border border-[#e8e4de] bg-[#f5f3ef]/50 p-8 md:p-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#8dacc7]">Stay updated</p>
                <h2 className="mt-2 font-serif text-3xl italic text-gray-900 md:text-4xl">
                  News & Insights
                </h2>
              </div>
              <button className="hidden items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 md:inline-flex">
                View all
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {news.map((item, i) => (
                <motion.article
                  key={item.title}
                  className="group cursor-pointer rounded-2xl border border-[#e8e4de] bg-white p-6 transition-all hover:shadow-md hover:border-[#8dacc7]/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tagColors[item.tag]}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-[#8dacc7] line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#8dacc7] transition-all group-hover:gap-2.5">
                    Read more
                    <ArrowRight size={13} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VARIANT C — Featured + 3 small (Lakestar/Cherry pattern) */}
        {/* ============================================ */}
        <section className="mt-24">
          <div className="mb-6 rounded-lg bg-gray-900 px-4 py-2 text-sm font-mono text-white inline-block">
            Wariant C — Featured + 3 mniejsze
          </div>
          <div className="rounded-3xl border border-[#e8e4de] bg-[#f5f3ef]/50 p-8 md:p-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#8dacc7]">Stay updated</p>
                <h2 className="mt-2 font-serif text-3xl italic text-gray-900 md:text-4xl">
                  News & Insights
                </h2>
              </div>
              <button className="hidden items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 md:inline-flex">
                View all
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-5">
              {/* Featured (first news, spans 3 cols) */}
              <motion.article
                className="group cursor-pointer md:col-span-3 rounded-2xl border border-[#e8e4de] bg-white p-8 transition-all hover:shadow-md hover:border-[#8dacc7]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tagColors[news[0].tag]}`}>
                    {news[0].tag}
                  </span>
                  <span className="text-xs text-gray-400">{news[0].date}</span>
                </div>
                <div className="flex h-20 w-full items-center justify-center rounded-xl bg-[#f5f3ef] text-sm font-bold text-gray-300 mb-6">
                  {news[0].logo}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#8dacc7]">
                  {news[0].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {news[0].excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#8dacc7] transition-all group-hover:gap-2.5">
                  Read more
                  <ArrowRight size={13} />
                </div>
              </motion.article>

              {/* 3 smaller news (stacked, span 2 cols) */}
              <div className="md:col-span-2 flex flex-col gap-4">
                {news.slice(1).map((item, i) => (
                  <motion.article
                    key={item.title}
                    className="group cursor-pointer flex-1 rounded-2xl border border-[#e8e4de] bg-white p-5 transition-all hover:shadow-md hover:border-[#8dacc7]/30"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tagColors[item.tag]}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-[14px] font-semibold text-gray-900 transition-colors group-hover:text-[#8dacc7] line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VARIANT D — Minimal timeline (Accel-inspired) */}
        {/* ============================================ */}
        <section className="mt-24 mb-12">
          <div className="mb-6 rounded-lg bg-gray-900 px-4 py-2 text-sm font-mono text-white inline-block">
            Wariant D — Minimalistyczny timeline
          </div>
          <div className="rounded-3xl border border-[#e8e4de] bg-[#f5f3ef]/50 p-8 md:p-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#8dacc7]">Stay updated</p>
                <h2 className="mt-2 font-serif text-3xl italic text-gray-900 md:text-4xl">
                  News & Insights
                </h2>
              </div>
              <button className="hidden items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 md:inline-flex">
                View all
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-10">
              {news.map((item, i) => (
                <motion.article
                  key={item.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                >
                  <div className="flex items-start gap-6 py-6 border-b border-[#e8e4de] last:border-0 transition-colors hover:bg-white/50 -mx-4 px-4 rounded-xl">
                    <div className="w-24 shrink-0 pt-0.5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <CalendarBlank size={12} />
                        {item.date}
                      </div>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <Tag size={10} className="text-gray-300" />
                        <span className="text-[11px] text-gray-400">{item.tag}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-[#8dacc7]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                        {item.excerpt}
                      </p>
                    </div>
                    <ArrowRight size={16} className="mt-1 shrink-0 text-gray-300 opacity-0 transition-all group-hover:opacity-100 group-hover:text-[#8dacc7] group-hover:translate-x-1" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
