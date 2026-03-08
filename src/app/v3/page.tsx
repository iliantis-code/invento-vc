"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, MapPin, Envelope, LinkedinLogo, Target, Handshake, ShieldCheck, Lightning, ChartLineUp } from "@phosphor-icons/react";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";

const companies = [
  { name: "Quantia", logo: "/logos/quantia.png", sector: "FinTech" },
  { name: "CThings.co", logo: "/logos/cthingsco.png", sector: "Industry 4.0" },
  { name: "Safebox24", logo: "/logos/safebox24.png", sector: "Industry 4.0" },
  { name: "Jivr", logo: "/logos/jivr.png", sector: "CleanTech" },
  { name: "Zjedz.my", logo: "/logos/zjedzmy.png", sector: "FinTech" },
  { name: "Waven", logo: "/logos/waven.png", sector: "MedTech" },
  { name: "Planet Heroes", logo: "/logos/planet-heroes.png", sector: "CleanTech" },
  { name: "Omniscopy", logo: "/logos/omniscopy.png", sector: "MedTech" },
  { name: "Gridaly", logo: "/logos/gridaly.png", sector: "Industry 4.0" },
  { name: "Panamint", logo: "/logos/panamint.png", sector: "Dual Use" },
  { name: "ResQuant", logo: "/logos/resquant.png", sector: "Dual Use" },
  { name: "Redigo Carbon", logo: "/logos/redigo-carbon.png", sector: "CleanTech" },
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
  { name: "Robert Bieleń", role: "General Partner", image: "/team/robert-bielen.jpg", bio: "Lawyer. Venture Capital and Investment Banking experience. Managed over 20 seed and VC investment projects, mentor of early-stage R&D startups.", linkedin: "https://linkedin.com" },
  { name: "Bartosz Zalewski", role: "General Partner", image: "/team/bartosz-zalewski.jpg", bio: "Economist, specialist in corporate finance, venture capital and private equity with over 20 years of experience. Nearly 50 venture capital investments.", linkedin: "https://linkedin.com" },
  { name: "Sven Zagała", role: "Partner", image: null, bio: "International corporate and startup experience. Founder and investor in IT, Telco, Web3, SaaS, DeepTech projects.", linkedin: "https://linkedin.com" },
  { name: "Tomasz Gołąb", role: "Partner", image: null, bio: "", linkedin: "https://linkedin.com" },
  { name: "Katarzyna Geiger", role: "Partner", image: null, bio: "Corporate experience in responsible supply-chain management and sustainable growth. Investor and mentor in GreenTech Impact projects.", linkedin: "https://linkedin.com" },
  { name: "Ewelina Wolny", role: "Operations", image: null, bio: "", linkedin: "https://linkedin.com" },
  { name: "Dagmara Strzębicka", role: "Partner", image: "/team/dagmara-strzebicka.webp", bio: "", linkedin: "https://linkedin.com" },
  { name: "Robert Mazgaj", role: "Investment Manager", image: null, bio: "Project documentation, business analysis, audit, control. Licensed Financial Advisor since 2010.", linkedin: "https://linkedin.com" },
];

function TeamSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="team" className="bg-[#faf9f7]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
          The team.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => {
            const isExpanded = expanded === p.name;
            return (
              <motion.div
                key={p.name}
                className="cursor-pointer overflow-hidden rounded-2xl bg-[#f5f3ef] transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                onClick={() => setExpanded(isExpanded ? null : p.name)}
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#e8e4de]">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl font-bold text-[#d0ccc6]">
                      {p.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-400">{p.role}</p>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        {p.bio && (
                          <p className="mt-3 text-xs leading-relaxed text-gray-500">{p.bio}</p>
                        )}
                        <a
                          href={p.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#8dacc7] transition-colors hover:text-gray-900"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <LinkedinLogo size={14} />
                          LinkedIn
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const filtered = activeSector
    ? companies.filter((c) => c.sector === activeSector)
    : companies;

  return (
    <section id="portfolio" className="border-t border-[#e8e4de] bg-[#f5f3ef]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Portfolio.
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
            We invest in founders who tackle problems with innovative technology.
            Our portfolio spans fintech, medtech, industry 4.0, cleantech and
            dual-use — united by a commitment to outsized impact.
          </p>
        </div>
        <div className="flex gap-16">
          {/* Left — sectors (V1 layout: vertical, illustration on top, name below) */}
          <div className="hidden shrink-0 flex-col gap-1 md:flex">
            {sectors.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveSector(activeSector === cat.name ? null : cat.name)}
                className={`group flex flex-col items-center gap-3 rounded-lg px-4 py-4 text-center transition-all ${
                  activeSector === cat.name ? "bg-[#faf9f7]" : "hover:bg-[#faf9f7]"
                }`}
              >
                <div className={`transition-opacity ${activeSector === cat.name ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                  <AnimatedIllustration
                    src={cat.icon}
                    alt={cat.name}
                    width={56}
                    height={56}
                    duration={1.5}
                    delay={0}
                    strokeScale={2.0}
                  />
                </div>
                <span className={`text-xs font-bold tracking-wider transition-colors ${
                  activeSector === cat.name ? "text-[#8dacc7]" : "text-gray-900"
                }`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right — logos grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((c) => (
                  <motion.div
                    key={c.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-28 items-center justify-center px-4"
                  >
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="h-12 max-w-[120px] object-contain grayscale mix-blend-darken"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function V3Page() {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased" style={{ backgroundColor: "#faf9f7" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8e4de] bg-[#faf9f7]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/v3">
            <img src="/invento-logo.png" alt="invento." width={120} height={32} />
          </Link>
          <div className="hidden items-center gap-8 text-sm text-gray-500 md:flex">
            <a href="#portfolio" className="transition-colors hover:text-gray-900">Portfolio</a>
            <a href="#about" className="transition-colors hover:text-gray-900">About us</a>
            <a href="#team" className="transition-colors hover:text-gray-900">Team</a>
            <div className="group relative">
              <button className="transition-colors hover:text-gray-900">Funds</button>
              <div className="pointer-events-none absolute left-1/2 top-full pt-2 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="min-w-[160px] rounded-lg border border-[#e8e4de] bg-[#faf9f7] py-1.5 shadow-lg">
                  <Link href="/funds/bridge-alpha" className="block px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-[#f5f3ef] hover:text-gray-900">Bridge Alpha</Link>
                  <Link href="/funds/starter-pfr" className="block px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-[#f5f3ef] hover:text-gray-900">Starter PFR</Link>
                  <Link href="/funds/americas" className="block px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-[#f5f3ef] hover:text-gray-900">Americas</Link>
                </div>
              </div>
            </div>
            <a href="#contact" className="transition-colors hover:text-gray-900">Contact</a>
            <Link href="/grafiki" className="transition-colors hover:text-gray-900">Grafiki</Link>
            <Link href="/v3333" className="text-[#8dacc7] transition-colors hover:text-gray-900">Dagmara</Link>
          </div>
          <a href="#contact" className="text-sm italic text-gray-500 underline underline-offset-4 transition-colors hover:text-gray-900">
            get in touch
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
              <h1 className="text-[2.75rem] font-bold leading-[1.15] tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem]">
                Hands-on capital{" "}
                <span className="text-[#8dacc7]">powering exceptional founders.</span>
              </h1>

              <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-gray-500">
                We back early-stage projects — from seed to scale, across deeptech,
                digital and beyond. We bring capital, support operationally and
                connect founders to global networks.
              </p>


              <div className="mt-10 flex items-center gap-4">
                <span className="text-lg font-medium text-gray-500">
                  get in touch
                </span>
                <a href="#contact" className="inline-flex w-[100px] items-center justify-center rounded-full border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#8dacc7] hover:text-[#8dacc7] hover:shadow-[0_0_0_1px_#8dacc7]">
                  APPLY
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex w-[100px] items-center justify-center rounded-full border border-gray-300 py-2.5 text-gray-500 transition-all duration-300 hover:scale-105 hover:border-[#8dacc7] hover:text-[#8dacc7] hover:shadow-[0_0_0_1px_#8dacc7]">
                  <LinkedinLogo size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex w-[100px] items-center justify-center rounded-full border border-gray-300 py-2.5 text-gray-500 transition-all duration-300 hover:scale-105 hover:border-[#8dacc7] hover:text-[#8dacc7] hover:shadow-[0_0_0_1px_#8dacc7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"/></svg>
                </a>
              </div>

            </motion.div>

            <div className="hidden lg:flex justify-center">
              <AnimatedIllustration
                src="/illustrations/idea.svg"
                alt="Innovation"
                width={400}
                height={400}
                className="opacity-60"
                duration={5}
                delay={0}
                immediate
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo band */}
      <section className="border-y border-[#e8e4de] bg-[#f5f3ef]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="mb-2 text-center text-lg font-bold text-gray-900">
            Powering exceptional founders across deeptech & digital.
          </p>
          <p className="mb-8 text-center text-base text-gray-400">
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
      <section className="bg-[#faf9f7]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-2xl bg-[#f5f3ef] p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div className="text-5xl font-bold tracking-tight">{s.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio — interactive sectors + logos */}
      <PortfolioSection />

      {/* About — sectors + features */}
      <section id="about" className="bg-[#faf9f7]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Tailor made for{" "}
                <span className="text-[#8dacc7]">deeptech founders.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
                Invento is built on the habits that make the best VC partnerships
                successful: staying focused on technology, moving quickly, and
                always aiming for outsized impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="rounded-xl bg-[#f5f3ef] p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.06 * i }}
                >
                  <div className="mb-3 h-2 w-2 rounded-full bg-[#8dacc7]" />
                  <div className="text-sm font-semibold text-gray-900">{f.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-gray-400">{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-[#e8e4de] bg-[#f5f3ef]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
            Locations.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Katowice, Poland", "Warsaw, Poland", "Boston, USA", "Zurich, Switzerland"].map((loc, i) => (
              <motion.div
                key={loc}
                className="flex flex-col items-center gap-4 rounded-2xl bg-[#faf9f7] p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <MapPin size={24} className="text-[#8dacc7]" />
                <span className="text-sm font-medium text-gray-700">{loc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Contact form */}
      <section id="contact" className="border-t border-[#e8e4de] bg-[#f5f3ef]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Building something exceptional?
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-500">
                We&apos;re looking for ambitious founders with breakthrough technology.
                Tell us about your project — we&apos;ll get back to you.
              </p>
              <div className="mt-8 space-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <Envelope size={16} className="text-[#8dacc7]" />
                  <a href="mailto:office@invento.vc" className="transition-colors hover:text-gray-900">office@invento.vc</a>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedinLogo size={16} className="text-[#8dacc7]" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gray-900">LinkedIn</a>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="rounded-lg border border-[#e8e4de] bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#8dacc7]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="rounded-lg border border-[#e8e4de] bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#8dacc7]"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-[#e8e4de] bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#8dacc7]"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full resize-none rounded-lg border border-[#e8e4de] bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#8dacc7]"
              />
              <div>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-[#e8e4de] px-4 py-3 text-sm text-gray-400 transition-colors hover:border-[#8dacc7] hover:text-gray-500">
                  <ArrowUpRight size={16} className="rotate-90" />
                  Attach a file (pitch deck, one-pager...)
                  <input type="file" className="hidden" />
                </label>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Send message
                <ArrowRight size={14} weight="bold" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-3xl font-bold text-white">invento<span className="text-blue-600">.</span></span>
          <div className="flex items-center gap-4">
            <a href="mailto:office@invento.vc" className="text-gray-500 transition-colors hover:text-gray-300">
              <Envelope size={18} />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 transition-colors hover:text-gray-300">
              <LinkedinLogo size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
