"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";
import { motion } from "motion/react";

const categories = [
  { name: "FINTECH", icon: "/illustrations/fintech.svg" },
  { name: "MEDTECH", icon: "/illustrations/reka smartphone.svg" },
  { name: "INDUSTRY 4.0", icon: "/illustrations/tech industry.svg", active: true },
  { name: "CLEANTECH", icon: "/illustrations/clean tech.svg" },
  { name: "DUAL USE", icon: "/illustrations/dron.svg" },
];

const companies = [
  { name: "Quantia", logo: "/logos/quantia.png" },
  { name: "CThings.co", logo: "/logos/cthingsco.png" },
  { name: "Safebox24", logo: "/logos/safebox24.png" },
  { name: "Jivr", logo: "/logos/jivr.png" },
  { name: "Zjedz.my", logo: "/logos/zjedzmy.png" },
  { name: "Waven", logo: "/logos/waven.png" },
  { name: "Planet Heroes", logo: "/logos/planet-heroes.png" },
  { name: "Omniscopy", logo: "/logos/omniscopy.png" },
  { name: "Gridaly", logo: "/logos/gridaly.png" },
  { name: "Panamint", logo: "/logos/panamint.png" },
  { name: "ResQuant", logo: "/logos/resquant.png" },
  { name: "Redigo Carbon", logo: "/logos/redigo-carbon.png" },
];

export default function V1Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 pt-20 pb-20 md:px-20 lg:pt-32">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-6xl leading-[1.1] tracking-tight text-navy italic md:text-7xl lg:text-[5.5rem]">
              Hands-on capital
              <br />
              powering
              <br />
              exceptional
              <br />
              founders
            </h1>

            <div className="mt-16 flex items-center gap-6">
              <span className="text-sm text-navy-muted">get in touch</span>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                APPLY
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:block mr-8">
            <AnimatedIllustration
              src="/illustrations/burza mozgow.svg"
              alt="Innovation illustration"
              width={480}
              height={480}
              className="opacity-80"
              duration={2.5}
              delay={0}
            />
          </div>
        </div>
      </section>

      {/* Fund Description */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-8 py-16 md:px-20">
          <p className="max-w-4xl text-lg leading-relaxed text-navy-muted">
            Invento to fundusz venture capital stworzony przez doświadczony zespół
            przedsiębiorców, menedżerów globalnych firm technologicznych, inwestorów
            i finansistów, skoncentrowany na rozwiązaniach deeptech i digital.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-20">
          <div className="flex gap-16">
            {/* Categories */}
            <div className="hidden shrink-0 flex-col gap-1 md:flex">
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  className="group flex flex-col items-center gap-3 rounded-lg px-4 py-4 text-center transition-colors hover:bg-white"
                >
                  <AnimatedIllustration
                    src={cat.icon}
                    alt={cat.name}
                    width={56}
                    height={56}
                    className="opacity-60 transition-opacity group-hover:opacity-100"
                    duration={1.5}
                    delay={0}
                  />
                  <span
                    className={`text-xs font-bold tracking-wider ${
                      cat.active ? "text-blue-accent" : "text-navy"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Companies Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {companies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    className="group flex h-40 items-center justify-center rounded-lg border border-border bg-white px-6 transition-all hover:border-navy/20 hover:shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 max-w-full object-contain grayscale opacity-60 transition-all group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
