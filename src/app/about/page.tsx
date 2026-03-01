"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";
import { motion } from "motion/react";

const pillars = [
  {
    title: "our focus",
    icon: "/illustrations/chmura.svg",
    text: "Inwestujemy na etapie seed od 0,5 do 2 mln Euro. Chętnie koinwestujemy z inwestorami z Polski, Europy i US. Naszym celem jest wspieranie utalentowanych przedsiębiorców z Polski i CEE i pomóc im stać się Europejskimi Championami.",
  },
  {
    title: "ways of working",
    icon: "/illustrations/dialog.svg",
    text: "Inwestujemy na etapie seed od 0,5 do 2 mln Euro. Chętnie koinwestujemy z inwestorami z Polski, Europy i US. Naszym celem jest wspieranie utalentowanych przedsiębiorców z Polski i CEE i pomóc im stać się Europejskimi Championami.",
  },
  {
    title: "our promise",
    icon: "/illustrations/handshake.svg",
    text: "Inwestujemy na etapie seed od 0,5 do 2 mln Euro. Chętnie koinwestujemy z inwestorami z Polski, Europy i US. Naszym celem jest wspieranie utalentowanych przedsiębiorców z Polski i CEE i pomóc im stać się Europejskimi Championami.",
  },
];

const news = [
  {
    title: 'Resquant w raporcie „INNOWACJE ALBO DRYF. POLSKA MAPA WZROSTU 2026-2035"',
    excerpt:
      "Invento to fundusz venture capital stworzony przez doświadczony zespół przedsiębiorców, menedżerów globalnych firm technologicznych, inwestorów i finansistów, skoncentrowany na rozwiązaniach deeptech",
    logo: "ResQuant",
  },
  {
    title: "Gridaly partnerem Carpathian Startup Fest",
    excerpt:
      "Invento to fundusz venture capital stworzony przez doświadczony zespół przedsiębiorców, menedżerów globalnych firm technologicznych, inwestorów i finansistów, skoncentrowany na rozwiązaniach deeptech",
    logo: "Gridaly",
  },
  {
    title: "Współpraca z UW. Dagmara w jury finału Brave Camp",
    excerpt:
      "Invento to fundusz venture capital stworzony przez doświadczony zespół przedsiębiorców, menedżerów globalnych firm technologicznych, inwestorów i finansistów, skoncentrowany na rozwiązaniach deeptech",
    logo: "Brave Camp",
  },
  {
    title: "Spotkajmy się w maju na InfoShare",
    excerpt:
      "Invento to fundusz venture capital stworzony przez doświadczony zespół przedsiębiorców, menedżerów globalnych firm technologicznych, inwestorów i finansistów, skoncentrowany na rozwiązaniach deeptech",
    logo: "InfoShare",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1440px] px-8 md:px-20">
          <motion.h1
            className="font-serif text-5xl italic text-navy md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            about
          </motion.h1>
          <motion.p
            className="mt-8 max-w-3xl text-lg leading-relaxed text-navy-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Invento to fundusz venture capital stworzony przez doświadczony
            zespół przedsiębiorców, menedżerów globalnych firm technologicznych,
            inwestorów i finansistów, skoncentrowany na rozwiązaniach deeptech i
            digital.
          </motion.p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              >
                <AnimatedIllustration
                  src={pillar.icon}
                  alt={pillar.title}
                  width={64}
                  height={64}
                  className="opacity-60"
                  duration={1.8}
                  delay={0.15 * i + 0.3}
                />
                <h2 className="mt-6 font-serif text-2xl italic text-navy">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-navy-muted">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-20">
          <motion.h2
            className="font-serif text-3xl italic text-navy"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            news and insights
          </motion.h2>

          <div className="mt-12 space-y-0 divide-y divide-border">
            {news.map((item, i) => (
              <motion.article
                key={item.title}
                className="group flex flex-col gap-6 py-8 sm:flex-row sm:items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-navy-muted">
                  {item.logo}
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-navy group-hover:text-blue-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                    {item.excerpt}
                  </p>
                  <button className="mt-3 inline-flex items-center gap-1 text-sm text-blue-accent transition-colors hover:text-navy">
                    więcej
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
