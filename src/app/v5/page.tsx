"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
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
  {
    name: "MedTech",
    icon: "/illustrations/reka smartphone.svg",
    opacity: 0.5,
  },
  {
    name: "Industry 4.0",
    icon: "/illustrations/tech industry.svg",
    opacity: 0.55,
  },
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
  { value: "13", label: "portfolio companies" },
  { value: "5", label: "sectors" },
  { value: "3", label: "locations" },
];

const portfolioHighlights = [
  {
    name: "Quantia",
    sector: "FinTech",
    desc: "Quantitative strategies and digital asset management platform for institutional investors.",
  },
  {
    name: "CThings.co",
    sector: "Industry 4.0",
    desc: "IoT infrastructure monitoring for critical assets — bridges, buildings, and industrial facilities.",
  },
  {
    name: "Omniscopy",
    sector: "MedTech",
    desc: "AI-powered diagnostic imaging platform for faster and more accurate medical assessments.",
  },
];

export default function V5Page() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100 antialiased">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/v5" className="text-2xl font-bold tracking-tight">
            invento<span className="text-blue-500">.</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a
              href="#portfolio"
              className="transition-colors hover:text-white"
            >
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
              className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — centered */}
      <section className="pt-20">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-32">
          {/* Stat badges */}
          <motion.div
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-sm text-gray-400"
              >
                <span className="font-semibold text-white">{s.value}</span>
                {s.label}
              </span>
            ))}
          </motion.div>

          <motion.h1
            className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hands-on capital powering exceptional founders.
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Invento is a venture capital fund focused on deeptech and digital
            solutions. We invest at the early stage and provide hands-on
            operational support.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200"
            >
              Apply now
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5"
            >
              Learn more
            </a>
          </motion.div>
        </div>
      </section>

      {/* Browser mockup */}
      <section className="px-6 pb-20">
        <motion.div
          className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/30"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-gray-900 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-3 flex-1 rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-400">
              invento.vc/portfolio
            </div>
          </div>
          {/* Browser content */}
          <div className="bg-gray-900 px-8 py-10 md:px-12 md:py-14">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Portfolio companies
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {companies.map((c, i) => (
                <motion.span
                  key={c}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
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
        </motion.div>
      </section>

      {/* Sector pills + icon grid */}
      <section id="portfolio" className="border-t border-white/10 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Investment sectors.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-gray-400">
              We invest across five high-conviction sectors where technology
              creates outsized impact.
            </p>
          </motion.div>

          {/* Sector pills */}
          <motion.div
            className="mb-12 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {sectors.map((s, i) => (
              <span
                key={s.name}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-white text-gray-900"
                    : "border border-white/15 text-gray-400 hover:bg-white/5"
                }`}
              >
                {s.name}
              </span>
            ))}
          </motion.div>

          {/* Sector icon grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {sectors.map((cat, i) => (
              <motion.div
                key={cat.name}
                className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.07 * i }}
              >
                <div style={{ opacity: cat.opacity }}>
                  <AnimatedIllustration
                    src={cat.icon}
                    alt={cat.name}
                    width={80}
                    height={80}
                    className="invert"
                    duration={2}
                    delay={0.15 * i}
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner quote */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <motion.blockquote
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
              &ldquo;We don&apos;t just invest — we roll up our sleeves. The
              best founders deserve partners who understand the daily grind of
              building from zero to one.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src="/team/robert-bielen.jpg"
                alt="Robert Bieleń"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-sm font-semibold text-white">
                  Robert Bieleń
                </div>
                <div className="text-sm text-gray-500">Managing Partner</div>
              </div>
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* Features grid */}
      <section id="about" className="border-t border-white/10 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Built for deeptech founders.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-gray-400">
              Everything you need from a venture partner — focus, speed, and
              outsized ambition.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-gray-950 p-8"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-2.5">
                  <f.icon size={24} weight="regular" className="text-blue-400" />
                </div>
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

      {/* Central illustration */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedIllustration
              src="/illustrations/burza mozgow.svg"
              alt="Innovation"
              width={360}
              height={360}
              className="opacity-40 invert"
              duration={2.5}
              delay={0.3}
            />
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-white/10 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              The team.
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p, i) => (
              <motion.div
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900"
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
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gray-900 p-6"
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

      {/* Portfolio highlights */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Exceptional founders, exceptional companies.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {portfolioHighlights.map((p, i) => (
              <motion.div
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-300">
                  {p.sector}
                </span>
                <h3 className="text-lg font-semibold text-gray-100">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-white/10 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Building something exceptional?
          </motion.h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-gray-400">
            We&apos;re looking for ambitious founders with breakthrough
            technology. Let&apos;s talk.
          </p>
          <a
            href="mailto:office@invento.vc"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200"
          >
            Apply now
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="text-xl font-bold text-white">
                invento<span className="text-blue-500">.</span>
              </span>
              <p className="mt-1 text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Invento VC. All rights
                reserved.
              </p>
            </div>

            <div className="flex gap-12 text-sm">
              <div>
                <p className="mb-2 font-semibold text-gray-200">Fund</p>
                <div className="flex flex-col gap-1.5 text-gray-500">
                  <a
                    href="#portfolio"
                    className="transition-colors hover:text-white"
                  >
                    Portfolio
                  </a>
                  <a
                    href="#about"
                    className="transition-colors hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#team"
                    className="transition-colors hover:text-white"
                  >
                    Team
                  </a>
                </div>
              </div>
              <div>
                <p className="mb-2 font-semibold text-gray-200">Connect</p>
                <div className="flex flex-col gap-1.5 text-gray-500">
                  <a
                    href="mailto:office@invento.vc"
                    className="transition-colors hover:text-white"
                  >
                    Email
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:office@invento.vc"
                className="rounded-full border border-white/10 p-2 text-gray-500 transition-colors hover:text-white"
              >
                <Envelope size={18} />
              </a>
              <a
                href="https://linkedin.com"
                className="rounded-full border border-white/10 p-2 text-gray-500 transition-colors hover:text-white"
              >
                <LinkedinLogo size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
