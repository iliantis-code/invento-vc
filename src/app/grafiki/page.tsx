"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";

const illustrations = [
  "IT industry",
  "Katowice",
  "Londyn",
  "NY",
  "Team 10 osob ",
  "Warszawa",
  "banknoty",
  "burza mozgow",
  "chemia",
  "chmura",
  "clean tech",
  "dialog",
  "diamenty",
  "dron",
  "eco cykl",
  "faktura",
  "fintech",
  "food tech",
  "handshake",
  "idea",
  "jednorozec",
  "kola zebate",
  "mapa",
  "pie chart",
  "proces",
  "rakieta",
  "ramie robotyczne",
  "rece nalewajace",
  "rece recycling",
  "rece zakrecanie",
  "reka nasionko",
  "reka pobudzanie",
  "reka smartphone",
  "reka trzymajaca cos",
  "reka wskazujaca",
  "robot",
  "roslinka energetyczna",
  "schemat 2",
  "schemat architektoniczny",
  "schemat ogranizacyjny",
  "schemat",
  "strzalka 1",
  "strzalka 2",
  "tech industry",
  "wykres",
  "wzor",
  "wzrost",
];

function IllustrationCard({ name }: { name: string }) {
  const [resetKey, setResetKey] = useState(0);

  const handleClick = useCallback(() => {
    setResetKey((k) => k + 1);
  }, []);

  return (
    <motion.div
      className="flex cursor-pointer flex-col items-center rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      onClick={handleClick}
    >
      <div className="flex h-[400px] w-full items-center justify-center overflow-hidden">
        <AnimatedIllustration
          key={resetKey}
          src={`/illustrations/${name}.svg`}
          alt={name}
          width={400}
          height={400}
          strokeScale={0.35}
          duration={2.5}
          delay={0}
          className="opacity-60"
        />
      </div>
      <p className="mt-3 text-center text-sm font-medium text-gray-500">
        {name}
      </p>
    </motion.div>
  );
}

export default function GrafikiPage() {
  return (
    <div
      className="min-h-screen font-sans text-gray-900 antialiased"
      style={{ backgroundColor: "#faf9f7" }}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-[#e8e4de] bg-[#faf9f7]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/v3"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <span aria-hidden="true">&larr;</span> Powrot
          </Link>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            invento<span className="text-[#8dacc7]">.</span>
          </span>
        </div>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pb-8 pt-12 md:pt-16">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galeria ilustracji
        </motion.h1>
        <motion.p
          className="mt-3 max-w-lg text-[15px] leading-relaxed text-gray-500"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Wszystkie ilustracje animowane — kliknij aby zobaczyc animacje od
          nowa
        </motion.p>
      </header>

      {/* Grid */}
      <main className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {illustrations.map((name) => (
            <IllustrationCard key={name} name={name} />
          ))}
        </div>
      </main>
    </div>
  );
}
