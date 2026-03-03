"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, MapPin, Envelope, LinkedinLogo, Target, Handshake, ShieldCheck, Lightning, ChartLineUp } from "@phosphor-icons/react";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";

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

const features = [
  { icon: Target, title: "Early-stage focus", desc: "Seed and pre-Series A investments in deeptech and digital ventures." },
  { icon: Lightning, title: "Operational support", desc: "Hands-on help with strategy, hiring, GTM and technology decisions." },
  { icon: Handshake, title: "Global networks", desc: "Connections across Europe and the US to accelerate growth." },
  { icon: ShieldCheck, title: "Founder-first", desc: "We protect your vision and align incentives for the long term." },
  { icon: ChartLineUp, title: "Milestones", desc: "Structured support through concrete phases of company building." },
  { icon: ArrowUpRight, title: "Follow-on ready", desc: "Reserved capital for follow-on rounds in best-performing companies." },
];

const stats = [
  { value: "13", label: "Portfolio companies" },
  { value: "5", label: "Investment sectors" },
  { value: "3", label: "Office locations" },
];

const sectors = [
  { name: "FinTech", icon: "/illustrations/fintech.svg", opacity: 0.7, strokeScale: 1.0 },
  { name: "MedTech", icon: "/illustrations/reka smartphone.svg", opacity: 0.4, strokeScale: 1.0 },
  { name: "Industry 4.0", icon: "/illustrations/tech industry.svg", opacity: 0.45, strokeScale: 1.0 },
  { name: "CleanTech", icon: "/illustrations/clean tech.svg", opacity: 0.7, strokeScale: 1.0 },
  { name: "Dual Use", icon: "/illustrations/dron.svg", opacity: 0.6, strokeScale: 1.0 },
];

const team = [
  { name: "Dagmara Strzębicka", role: "Managing Partner", image: "/team/dagmara-strzebicka.webp" },
];

export default function V5Page() {
  return (
    <div className="min-h-screen font-sans text-violet-900 antialiased" style={{ backgroundColor: "#fdf2f8" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-pink-200 bg-[#fdf2f8]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/unicorn" className="text-2xl font-bold tracking-tight text-violet-900">
            invento<span className="text-pink-500">.</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-pink-400 md:flex">
            <a href="#portfolio" className="transition-colors hover:text-violet-900">Portfolio</a>
            <a href="#about" className="transition-colors hover:text-violet-900">About us</a>
            <a href="#team" className="transition-colors hover:text-violet-900">Team</a>
            <a href="#contact" className="transition-colors hover:text-violet-900">Contact</a>
          </div>
          <a href="#contact" className="rounded-full bg-violet-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[2.75rem] font-bold leading-[1.15] tracking-tight text-violet-900 md:text-5xl lg:text-[3.5rem]">
                Hands-on capital{" "}
                <span className="text-pink-500">powering exceptional founders.</span>
              </h1>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-pink-400">
                Invento to fundusz venture capital skoncentrowany na rozwiązaniach
                deeptech i digital. Inwestujemy w early-stage i wspieramy operacyjnie.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {features.slice(0, 4).map((f) => (
                  <div key={f.title} className="flex items-center gap-2.5">
                    <div className="h-2 w-2 shrink-0 rounded-full bg-pink-300" />
                    <span className="text-sm font-medium text-violet-900">{f.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-violet-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700">
                  Get started
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-pink-200 px-5 py-2.5 text-sm text-pink-400 transition-colors hover:border-pink-300 hover:text-violet-900">
                  Apply now
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:flex justify-center overflow-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/illustrations/jednorozec.png"
                alt="Unicorn"
                className="drop-shadow-lg w-[130%] max-w-none"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo band */}
      <section className="border-y border-pink-200 bg-[linear-gradient(135deg,#dbeafe_0%,#fdf2f8_35%,#fce7f3_65%,#f5d0fe_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="mb-2 text-center text-lg font-bold text-violet-900">
            Powering exceptional founders across deeptech & digital.
          </p>
          <p className="mb-8 text-center text-base text-pink-300">
            From early-stage ventures to category-defining companies.
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max items-center gap-16 animate-[marquee_120s_linear_infinite]">
              {[...companies, ...companies].map((c, i) => (
                <span key={`${c.name}-${i}`} className="shrink-0 opacity-50">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-14 object-contain grayscale mix-blend-darken"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#fdf2f8" }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-2xl bg-pink-100 p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div className="text-5xl font-bold tracking-tight text-violet-900">{s.value}</div>
                <div className="mt-2 text-sm font-medium text-pink-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About — sectors + features */}
      <section id="about" style={{ backgroundColor: "#fdf2f8" }}>
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-violet-900 md:text-4xl">
                Tailor made for{" "}
                <span className="text-pink-500">deeptech founders.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-pink-400">
                Invento is built on the habits that make the best VC partnerships
                successful: staying focused on technology, moving quickly, and
                always aiming for outsized impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="rounded-xl bg-pink-100 p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.06 * i }}
                >
                  <div className="mb-3 h-2 w-2 rounded-full bg-pink-500" />
                  <div className="text-sm font-semibold text-violet-900">{f.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-pink-300">{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="portfolio" className="border-t border-pink-200 bg-pink-100">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-violet-900 md:text-4xl">
            Investment sectors.
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {sectors.map((cat, i) => (
              <motion.div
                key={cat.name}
                className="group flex flex-col items-center gap-5 rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md"
                style={{ backgroundColor: "#fdf2f8" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.07 * i }}
              >
                <div style={{ opacity: cat.opacity }} className="transition-opacity group-hover:opacity-80 [&_path]:!stroke-pink-400 [&_line]:!stroke-pink-400">
                  <AnimatedIllustration
                    src={cat.icon}
                    alt={cat.name}
                    width={120}
                    height={120}
                    duration={2}
                    delay={0}
                    strokeScale={cat.strokeScale}
                  />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-violet-700">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ backgroundColor: "#fdf2f8" }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-violet-900 md:text-4xl">
            The team.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((p, i) => (
              <motion.div
                key={p.name}
                className="group overflow-hidden rounded-2xl bg-pink-100 max-w-xs"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-violet-900">{p.name}</h3>
                  <p className="text-sm text-pink-400">{p.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Locations */}
            <motion.div
              className="flex flex-col justify-between rounded-2xl bg-pink-100 p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div>
                <h3 className="mb-5 font-semibold text-violet-900">Our locations</h3>
                {["Katowice, Poland", "Warsaw, Poland", "USA"].map((loc) => (
                  <div key={loc} className="mb-2.5 flex items-center gap-2 text-sm text-pink-400">
                    <MapPin size={15} className="text-pink-300" />
                    {loc}
                  </div>
                ))}
              </div>
              <AnimatedIllustration
                src="/illustrations/mapa.svg"
                alt="Locations"
                width={180}
                height={100}
                className="mt-6 opacity-30 [&_path]:!stroke-pink-300"
                duration={2}
                delay={0}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-pink-200 bg-pink-100">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-violet-900 md:text-4xl">
            Building something exceptional?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-pink-400">
            We&apos;re looking for ambitious founders with breakthrough technology.
            Let&apos;s talk.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700">
            Apply now
            <ArrowRight size={14} weight="bold" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-3xl font-bold text-white">invento<span className="text-pink-400">.</span></span>
          <div className="flex items-center gap-4">
            <a href="mailto:office@invento.vc" className="text-violet-300 transition-colors hover:text-white">
              <Envelope size={18} />
            </a>
            <a href="https://linkedin.com" className="text-violet-300 transition-colors hover:text-white">
              <LinkedinLogo size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}