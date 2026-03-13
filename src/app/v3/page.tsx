"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, MapPin, Envelope, LinkedinLogo, Target, Handshake, ShieldCheck, Lightning, ChartLineUp } from "@phosphor-icons/react";
import { AnimatedIllustration, prefetchSvg } from "@/components/AnimatedIllustration";

// Pure CSS-animated SVG — starts drawing the MOMENT browser parses HTML, zero JS dependency
const IDEA_CSS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.01 270.29" style="width:100%;height:100%;object-fit:contain"><defs><style>@keyframes heroDrawStroke{from{stroke-dashoffset:2000}to{stroke-dashoffset:0}}.hero-p{fill:none;stroke:#2B2A29;stroke-miterlimit:22.9256;stroke-width:1.2;stroke-dasharray:2000;stroke-dashoffset:2000;animation:heroDrawStroke 2s ease-in-out forwards}</style></defs><g><path class="hero-p" style="animation-delay:0s" d="M171.36 269.43c21.65,-25.48 -49.01,11.98 -29.65,-6.71 32.59,-31.46 62.33,-18.68 22.73,-8.92 -25.38,6.25 -57.29,2.93 -6.36,-11.79 43.81,-12.66 20.16,-15.46 -5.67,-6.13 -25.53,9.22 -34.82,4.89 1.74,-5.71 25.16,-7.29 25.12,-26.08 -8.08,-12.78 -22.39,8.97 -18.07,-4.78 4.36,-28.81"/><path class="hero-p" style="animation-delay:0.2s" d="M150.43 188.58c13.15,-14.09 -58.05,-22.26 -42.59,-81.46"/><path class="hero-p" style="animation-delay:0.4s" d="M107.84 107.12c4.89,-18.74 19.35,-32.8 21.14,-34.65 12.7,-13.12 21.18,10.29 -18.04,8.03 -7.34,-0.42 -14.71,2.44 -32.78,9.55 -67.17,26.44 -17.19,-30.04 -4.53,8.94 1.74,5.36 11.24,11.8 31.52,19.21"/><path class="hero-p" style="animation-delay:0.6s" d="M105.15 118.20c67.3,24.61 -46.64,66.51 33.13,48.3 51.04,-11.65 78.07,-66.97 55.15,-113.38 -17.42,-35.28 -61.28,-60.39 -116.63,-49.07 -65.53,13.4 -99.82,89.14 -55.55,141.48"/><path class="hero-p" style="animation-delay:0.8s" d="M21.25 145.53c39.49,46.68 83.43,31.45 95.87,54.47 5.06,9.36 2.24,33.84 19.52,27.95"/></g></svg>`;

// Prefetch brain SVG for slide 2
prefetchSvg("/illustrations/burza mozgow.svg");

const heroSlides = [
  { src: "/illustrations/idea.svg", alt: "Innovation", cssSvg: IDEA_CSS_SVG },
  { src: "/illustrations/burza mozgow.svg", alt: "Brainstorm", cssSvg: undefined },
  { src: null, alt: "Slide 3", cssSvg: undefined },       // placeholder — zamień src
  { src: null, alt: "Slide 4", cssSvg: undefined },       // placeholder — zamień src
];

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

const news = [
  {
    title: 'Resquant w raporcie „Innowacje albo dryf. Polska mapa wzrostu 2026-2035"',
    excerpt: "ResQuant, spółka portfelowa Invento, została wyróżniona w najnowszym raporcie analitycznym jako jeden z kluczowych graczy polskiego ekosystemu deeptech.",
    tag: "Spółki",
    date: "Mar 8, 2026",
    logo: "ResQuant",
  },
  {
    title: "Gridaly partnerem Carpathian Startup Fest",
    excerpt: "Gridaly, nasza spółka z sektora Industry 4.0, została oficjalnym partnerem technologicznym tegorocznej edycji Carpathian Startup Fest w Rzeszowie.",
    tag: "Spółki",
    date: "Mar 3, 2026",
    logo: "Gridaly",
  },
  {
    title: "Współpraca z UW. Dagmara w jury finału Brave Camp",
    excerpt: "Dagmara Strzębicka, partnerka Invento, zasiadła w jury finałowej gali programu Brave Camp na Uniwersytecie Warszawskim.",
    tag: "Ludzie",
    date: "Feb 22, 2026",
    logo: "Brave Camp",
  },
  {
    title: "Spotkajmy się w maju na InfoShare",
    excerpt: "Zespół Invento będzie obecny na InfoShare 2026 w Gdańsku. Zapraszamy founderów i inwestorów na spotkania networkingowe.",
    tag: "Fundusz",
    date: "Feb 15, 2026",
    logo: "InfoShare",
  },
];

const team = [
  { name: "Robert Bieleń", role: "General Partner", image: "/team/robert-bielen.jpg", bio: "Lawyer. Venture Capital and Investment Banking experience. Managed over 20 seed and VC investment projects, mentor of early-stage R&D startups.", linkedin: "https://linkedin.com" },
  { name: "Bartosz Zalewski", role: "General Partner", image: null, bio: "Economist, specialist in corporate finance, venture capital and private equity with over 20 years of experience. Nearly 50 venture capital investments.", linkedin: "https://linkedin.com" },
  { name: "Sven Zagała", role: "Partner", image: "/team/sven-zagala.jpg", bio: "International corporate and startup experience. Founder and investor in IT, Telco, Web3, SaaS, DeepTech projects.", linkedin: "https://linkedin.com" },
  { name: "Dagmara Strzębicka", role: "Partner", image: "/team/dagmara-strzebicka.webp", bio: "", linkedin: "https://linkedin.com" },
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
  return (
    <section id="portfolio" className="border-t border-[#e8e4de] bg-[#faf9f7]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex gap-12 lg:gap-16">
          {/* Left — sector icons stacked vertically */}
          <div className="hidden shrink-0 flex-col gap-0 md:flex">
            {sectors.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveSector(activeSector === cat.name ? null : cat.name)}
                className={`group flex flex-col items-center gap-2 rounded-xl px-5 py-4 text-center transition-all ${
                  activeSector === cat.name ? "bg-[#f0eeea]" : "hover:bg-[#f0eeea]"
                }`}
              >
                <div className={`transition-opacity ${activeSector === cat.name ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                  <AnimatedIllustration
                    src={cat.icon}
                    alt={cat.name}
                    width={52}
                    height={52}
                    duration={1.5}
                    delay={0}
                    strokeScale={2.0}
                  />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  activeSector === cat.name ? "text-[#8dacc7]" : "text-gray-500 group-hover:text-gray-900"
                }`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right — logos in white cards with border */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {companies.map((c) => {
                const isActive = !activeSector || c.sector === activeSector;
                return (
                  <motion.div
                    key={c.name}
                    animate={{ opacity: isActive ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-28 items-center justify-center rounded-xl border border-[#e8e4de] bg-white px-4 shadow-sm"
                  >
                    <img
                      src={c.logo}
                      alt={c.name}
                      className={`h-12 max-w-[140px] object-contain transition-all duration-300 ${
                        isActive ? "grayscale-0" : "grayscale"
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function V3Page() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
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
                  <Link href="/v3/funds/bridge-alpha" className="block px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-[#f5f3ef] hover:text-gray-900">Bridge Alpha</Link>
                  <Link href="/v3/funds/starter-pfr" className="block px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-[#f5f3ef] hover:text-gray-900">Starter PFR</Link>
                  <Link href="/v3/funds/americas" className="block px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-[#f5f3ef] hover:text-gray-900">Americas</Link>
                </div>
              </div>
            </div>
            <a href="#news" className="transition-colors hover:text-gray-900">News</a>
            <a href="#contact" className="transition-colors hover:text-gray-900">Contact</a>
            <Link href="/v3/grafiki" className="transition-colors hover:text-gray-900">Grafiki</Link>
            <Link href="/v3/dagmara" className="text-[#8dacc7] transition-colors hover:text-gray-900">Dagmara</Link>
            <Link href="/v3/home-v1" className="text-[#8dacc7] transition-colors hover:text-gray-900">Home V1</Link>
          </div>
          <div />
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

            <div className="hidden lg:flex flex-col items-center">
              <div className="relative h-[400px] w-[400px]">
                {/* Slide 0 (lightbulb): pure CSS animation — starts instantly with HTML, no JS needed */}
                {activeHeroSlide === 0 && (
                  <div
                    className="absolute inset-0 opacity-60"
                    role="img"
                    aria-label={heroSlides[0].alt}
                    dangerouslySetInnerHTML={{ __html: IDEA_CSS_SVG }}
                  />
                )}
                {/* Other slides: GSAP-based animation */}
                {activeHeroSlide !== 0 && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHeroSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      {heroSlides[activeHeroSlide].src ? (
                        <AnimatedIllustration
                          src={heroSlides[activeHeroSlide].src}
                          alt={heroSlides[activeHeroSlide].alt}
                          width={400}
                          height={400}
                          className="opacity-60"
                          duration={2.5}
                          delay={0}
                          stagger={0.03}
                          immediate
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-lg text-gray-300">
                          {/* placeholder — dodaj SVG */}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
              <div className="mt-12 flex items-center gap-3">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHeroSlide(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      i === activeHeroSlide
                        ? "bg-[#8dacc7] scale-125"
                        : "bg-[#c5d3de] hover:bg-[#8dacc7]/60"
                    }`}
                  />
                ))}
              </div>
            </div>
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
            {[
              { name: "Silesia, Poland", illustration: "/illustrations/Katowice.svg" },
              { name: "Warsaw, Poland", illustration: "/illustrations/Warszawa.svg" },
              { name: "Boston, USA", illustration: "/illustrations/boston.svg" },
              { name: "Zurich, Switzerland", illustration: "/illustrations/zurich.svg" },
            ].map((loc, i) => (
              <motion.div
                key={loc.name}
                className="flex flex-col items-center gap-4 rounded-2xl bg-[#faf9f7] p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                {loc.illustration ? (
                  <AnimatedIllustration
                    src={loc.illustration}
                    alt={loc.name}
                    width={120}
                    height={120}
                    duration={2}
                    delay={0}
                    strokeScale={0.5}
                    className="opacity-60"
                  />
                ) : (
                  <MapPin size={24} className="text-[#8dacc7]" />
                )}
                <span className="text-sm font-medium text-gray-700">{loc.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* News & Insights */}
      <section id="news" className="border-t border-[#e8e4de] bg-[#faf9f7]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#8dacc7]">Stay updated</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
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
                className="group cursor-pointer flex gap-4 py-7 sm:items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <div className="hidden sm:flex h-14 w-24 shrink-0 items-center justify-center rounded-lg bg-[#f5f3ef] text-xs font-bold text-gray-400 border border-[#e8e4de]">
                  {item.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                      item.tag === "Spółki" ? "bg-blue-50 text-blue-600" :
                      item.tag === "Fundusz" ? "bg-amber-50 text-amber-600" :
                      item.tag === "Ludzie" ? "bg-emerald-50 text-emerald-600" :
                      "bg-gray-100 text-gray-500"
                    }`}>
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
          <img src="/invento-logo.png" alt="invento." width={120} height={32} className="brightness-0 invert" />
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
