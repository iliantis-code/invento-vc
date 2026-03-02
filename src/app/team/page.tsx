"use client";

import Image from "next/image";
import { LinkedinLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { AnimatedIllustration } from "@/components/AnimatedIllustration";
import { motion } from "motion/react";

const locations: { city: string; icon: string; width: number; height: number; offsetUp?: boolean; speed: number }[] = [
  { city: "Katowice", icon: "/illustrations/Katowice.svg", width: 300, height: 90, speed: 3 },
  { city: "Warszawa", icon: "/illustrations/Warszawa.svg", width: 200, height: 300, speed: 0.8 },
  { city: "USA", icon: "/illustrations/NY.svg", width: 120, height: 290, offsetUp: true, speed: 0.01 },
];

const team = [
  {
    name: "Robert Bieleń",
    photo: "/team/robert-bielen.jpg",
    bio: "Doświadczony przedsiębiorca i inwestor z wieloletnim doświadczeniem w budowaniu i skalowaniu firm technologicznych. Specjalizuje się w rozwiązaniach deeptech i digital, wspierając founders na każdym etapie rozwoju.",
    linkedin: "#",
  },
  {
    name: "Bartosz Zalewski",
    photo: "/team/bartosz-zalewski.jpg",
    bio: "Menedżer globalnych firm technologicznych z doświadczeniem w strategii i operacjach. Łączy perspektywę korporacyjną z dynamiką startupową, pomagając spółkom portfelowym w osiąganiu ambitnych celów.",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1440px] px-8 md:px-20">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-20">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif text-5xl italic text-navy md:text-6xl">
                team
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-navy-muted">
                Invento to fundusz venture capital stworzony przez doświadczony
                zespół przedsiębiorców, menedżerów globalnych firm
                technologicznych, inwestorów i finansistów, skoncentrowany na
                rozwiązaniach deeptech i digital.
              </p>
            </motion.div>

            <div className="hidden lg:block">
              <img
                src="/illustrations/Team 10 osob .svg"
                alt="Team illustration"
                width={520}
                height={280}
                className="opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {locations.map((loc, i) => (
              <div key={loc.city} className="flex flex-col items-center justify-end gap-4">
                <div className={`flex items-end justify-center${loc.offsetUp ? " relative -top-12" : ""}`}>
                  <AnimatedIllustration
                    src={loc.icon}
                    alt={loc.city}
                    width={loc.width}
                    height={loc.height}
                    className="opacity-60"
                    duration={loc.speed}
                    delay={0.3 * i}
                  />
                </div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 * i + 1 }}
                >
                  <MapPin size={16} className="text-blue-accent" />
                  <span className="text-sm font-semibold tracking-wide text-navy">
                    {loc.city}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="overflow-hidden rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              >
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-semibold text-navy">
                      {member.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-blue-accent transition-colors hover:text-navy"
                    >
                      <LinkedinLogo size={18} weight="fill" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
