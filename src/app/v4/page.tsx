"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Envelope,
  LinkedinLogo,
  Target,
  Handshake,
  ShieldCheck,
  Lightning,
  ChartLineUp,
  Cpu,
} from "@phosphor-icons/react";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";

const companies = [
  "Quantia",
  "CThings.co",
  "Safebox24",
  "Jivr",
  "Zjedz.my",
  "Waven",
  "Planet Heroes",
  "My Owl",
  "Omniscopy",
  "Gridaly",
  "Panamint",
  "ResQuant",
  "Redigo Carbon",
];

const features = [
  {
    icon: Target,
    title: "Early-stage focus",
    desc: "Seed and pre-Series A investments in deeptech and digital ventures across Europe.",
  },
  {
    icon: Lightning,
    title: "Operational support",
    desc: "Hands-on help with strategy, hiring, go-to-market and technology decisions.",
  },
  {
    icon: Handshake,
    title: "Global networks",
    desc: "Connections across Europe and the US to accelerate growth and open new markets.",
  },
  {
    icon: ShieldCheck,
    title: "Founder-first",
    desc: "We protect your vision and align incentives for the long term.",
  },
  {
    icon: ChartLineUp,
    title: "Milestone-driven",
    desc: "Structured support through concrete phases of company building.",
  },
  {
    icon: Cpu,
    title: "Follow-on ready",
    desc: "Reserved capital for follow-on rounds in best-performing companies.",
  },
];

const sectors = [
  { name: "FinTech", icon: "/illustrations/fintech.svg", opacity: 0.85 },
  { name: "MedTech", icon: "/illustrations/reka smartphone.svg", opacity: 0.5 },
  { name: "Industry 4.0", icon: "/illustrations/tech industry.svg", opacity: 0.55 },
  { name: "CleanTech", icon: "/illustrations/clean tech.svg", opacity: 0.85 },
  { name: "Dual Use", icon: "/illustrations/dron.svg", opacity: 0.75 },
];

const team = [
  {
    name: "Robert Bieleń",
    role: "Managing Partner",
    image: "/team/robert-bielen.jpg",
  },
  {
    name: "Bartosz Zalewski",
    role: "Partner",
    image: "/team/bartosz-zalewski.jpg",
  },
];

const stats = [
  { value: "13", label: "Portfolio companies" },
  { value: "5", label: "Investment sectors" },
  { value: "3", label: "Office locations" },
];

export default function V4Page() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100 antialiased">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/v4" className="text-2xl font-bold tracking-tight">
            invento<span className="text-blue-500">.</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#portfolio" className="transition-colors hover:text-white">
              Portfolio
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#team" className="transition-colors hover:text-white">
              Team
            </a>
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20">
        {/* Gradient blurs */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-60 -left-20 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Venture Capital Fund
              </div>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                Hands-on capital{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  powering exceptional
                </span>{" "}
                founders.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
                Invento to fundusz venture capital skoncentrowany na
                rozwiązaniach deeptech i digital. Inwestujemy w early-stage
                i wspieramy operacyjnie.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
                >
                  Apply now
                  <ArrowRight size={16} weight="bold" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10"
                >
                  Learn more
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hidden justify-center lg:flex"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatedIllustration
                src="/illustrations/burza mozgow.svg"
                alt="Innovation"
                width={440}
                height={440}
                className="opacity-40"
                duration={2.5}
                delay={0.5}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio logos */}
      <section className="border-y border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our portfolio companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((c, i) => (
              <motion.span
                key={c}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.04 * i }}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="about" className="border-t border-white/5 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                deeptech founders.
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Everything you need from a venture partner — focus, speed, and
              outsized ambition.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-gray-950 p-8"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
              >
                <f.icon
                  size={28}
                  weight="regular"
                  className="mb-4 text-blue-400"
                />
                <h3 className="text-base font-semibold text-gray-100">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="portfolio" className="border-t border-white/5 bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            Investment sectors.
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {sectors.map((cat, i) => (
              <motion.div
                key={cat.name}
                className="group flex flex-col items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-blue-500/20 hover:bg-white/[0.04]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.07 * i }}
              >
                <div
                  style={{ opacity: cat.opacity }}
                  className="transition-opacity group-hover:opacity-90"
                >
                  <AnimatedIllustration
                    src={cat.icon}
                    alt={cat.name}
                    width={100}
                    height={100}
                    className="invert"
                    duration={2}
                    delay={0.15 * i}
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-200">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="border-t border-white/5 bg-gray-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            The team.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p, i) => (
              <motion.div
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-white/5 bg-gray-950"
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
                <div className="p-6">
                  <h3 className="font-semibold text-gray-100">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Locations */}
            <motion.div
              className="flex flex-col justify-between rounded-2xl border border-white/5 bg-gray-950 p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div>
                <h3 className="mb-6 font-semibold text-gray-100">
                  Our locations
                </h3>
                {["Katowice, Poland", "Warsaw, Poland", "USA"].map((loc) => (
                  <div
                    key={loc}
                    className="mb-3 flex items-center gap-2.5 text-sm text-gray-400"
                  >
                    <MapPin size={15} className="text-blue-400/60" />
                    {loc}
                  </div>
                ))}
              </div>
              <AnimatedIllustration
                src="/illustrations/mapa.svg"
                alt="Locations"
                width={180}
                height={100}
                className="mt-6 opacity-20 invert"
                duration={2}
                delay={0.5}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden border-t border-white/5">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Building something exceptional?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-gray-400">
            We&apos;re looking for ambitious founders with breakthrough
            technology. Let&apos;s talk.
          </p>
          <a
            href="mailto:office@invento.vc"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
          >
            Apply now
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-gray-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-xl font-bold">
            invento<span className="text-blue-500">.</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:office@invento.vc"
              className="text-gray-600 transition-colors hover:text-gray-400"
            >
              <Envelope size={18} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 transition-colors hover:text-gray-400"
            >
              <LinkedinLogo size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
