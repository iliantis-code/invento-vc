"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, MapPin, Envelope, LinkedinLogo } from "@phosphor-icons/react";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";

const categories = [
  { name: "FinTech", icon: "/illustrations/fintech.svg" },
  { name: "MedTech", icon: "/illustrations/reka smartphone.svg" },
  { name: "Industry 4.0", icon: "/illustrations/tech industry.svg" },
  { name: "CleanTech", icon: "/illustrations/clean tech.svg" },
  { name: "Dual Use", icon: "/illustrations/dron.svg" },
];

const companies = [
  { name: "Quantia", logo: "/logos/quantia.png" },
  { name: "CThings.co", logo: "/logos/cthingsco.jpg" },
  { name: "Safebox24", logo: "/logos/safebox24.jpg" },
  { name: "Jivr", logo: "/logos/jivr.jpg" },
  { name: "Zjedz.my", logo: "/logos/zjedzmy.jpg" },
  { name: "Waven", logo: "/logos/waven.jpg" },
  { name: "Planet Heroes", logo: "/logos/planet-heroes.jpg" },
  { name: "Omniscopy", logo: "/logos/omniscopy.jpg" },
  { name: "Gridaly", logo: "/logos/gridaly.jpg" },
  { name: "Panamint", logo: "/logos/panamint.jpg" },
  { name: "ResQuant", logo: "/logos/resquant.jpg" },
  { name: "Redigo Carbon", logo: "/logos/redigo-carbon.png" },
];

const stats = [
  { value: "12", label: "Portfolio companies", sublabel: "across deeptech & digital" },
  { value: "5", label: "Sectors", sublabel: "FinTech · MedTech · Industry 4.0 · CleanTech · Dual Use" },
  { value: "3", label: "Locations", sublabel: "Katowice · Warsaw · USA" },
];

const pillars = [
  {
    title: "Our Focus",
    description: "We invest in early-stage deeptech and digital companies that solve real problems with breakthrough technology.",
    icon: "/illustrations/robot.svg",
  },
  {
    title: "Ways of Working",
    description: "Hands-on partnership. We bring operational experience, global networks, and strategic support — not just capital.",
    icon: "/illustrations/burza mozgow.svg",
  },
  {
    title: "Our Promise",
    description: "Founder-first approach. We align incentives, protect vision, and work alongside you through every challenge.",
    icon: "/illustrations/handshake.svg",
  },
];

const team = [
  { name: "Robert Bieleń", role: "Managing Partner", image: "/team/robert-bielen.jpg" },
  { name: "Bartosz Zalewski", role: "Partner", image: "/team/bartosz-zalewski.jpg" },
];

export default function V2Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/v2" className="text-2xl font-bold tracking-tight text-white">
            invento<span className="text-blue-500">.</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#portfolio" className="transition-colors hover:text-white">Portfolio</a>
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#team" className="transition-colors hover:text-white">Team</a>
            <a href="#contact" className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — dark */}
      <section className="relative overflow-hidden bg-gray-950 pt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
                Venture Capital · Deeptech & Digital
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Hands-on capital powering exceptional founders.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
                Invento to fundusz VC stworzony przez doświadczony zespół przedsiębiorców,
                menedżerów globalnych firm technologicznych, inwestorów i finansistów.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
                {["Early-stage focus", "Operational support", "Global networks", "Founder-first"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-4">
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100">
                  Get in touch
                  <ArrowRight size={14} weight="bold" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white">
                  Apply now
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedIllustration
                src="/illustrations/burza mozgow.svg"
                alt="Innovation"
                width={420}
                height={420}
                className="opacity-70 [&_.str0]:!stroke-blue-400/60"
                duration={2.5}
                delay={0}
              />
            </motion.div>
          </div>
        </div>

        {/* gradient fade to white */}
        <div className="h-24 bg-gradient-to-b from-gray-950 to-white" />
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="text-5xl font-bold tracking-tight text-gray-900">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold text-gray-900">{stat.label}</div>
                <div className="mt-1 text-xs text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo band — portfolio */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-gray-400">
            Portfolio companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {companies.map((company, i) => (
              <motion.img
                key={company.name}
                src={company.logo}
                alt={company.name}
                className="h-8 object-contain grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.03 * i }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Deeptech sectors we invest in.
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Focused on breakthrough technologies solving real-world problems at scale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-gray-200 hover:shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <AnimatedIllustration
                  src={cat.icon}
                  alt={cat.name}
                  width={64}
                  height={64}
                  className="opacity-50 transition-opacity group-hover:opacity-80"
                  duration={1.5}
                  delay={0}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars — what we do */}
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            How we work with founders.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
              >
                <div className="mb-6 h-16 w-16">
                  <AnimatedIllustration
                    src={pillar.icon}
                    alt={pillar.title}
                    width={64}
                    height={64}
                    className="opacity-60 [&_.str0]:!stroke-blue-400/70"
                    duration={1.5}
                    delay={0}
                  />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            The team.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                className="group overflow-hidden rounded-2xl border border-gray-100"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Locations card */}
            <motion.div
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/50 p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h3 className="mb-6 text-lg font-semibold text-gray-900">Our locations</h3>
                {["Katowice, Poland", "Warsaw, Poland", "USA"].map((loc) => (
                  <div key={loc} className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-gray-400" />
                    {loc}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <AnimatedIllustration
                  src="/illustrations/mapa.svg"
                  alt="Locations"
                  width={200}
                  height={120}
                  className="opacity-40"
                  duration={2}
                  delay={0}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Ready to build something exceptional?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-gray-500">
            We&apos;re looking for ambitious founders with breakthrough technology.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Apply now
              <ArrowRight size={14} weight="bold" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <span className="text-sm font-bold text-gray-900">
            invento<span className="text-blue-600">.</span>
          </span>
          <div className="flex items-center gap-4">
            <a href="mailto:office@invento.vc" className="text-gray-400 transition-colors hover:text-gray-600">
              <Envelope size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 transition-colors hover:text-gray-600">
              <LinkedinLogo size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
