"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
  const pathname = usePathname();

  // Ukryj globalny Footer na wariantach — mają własny
  if (pathname === "/" || pathname.startsWith("/v2") || pathname.startsWith("/v3") || pathname.startsWith("/v4") || pathname.startsWith("/v5") || pathname.startsWith("/unicorn") || pathname.startsWith("/grafiki")) {
    return null;
  }

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-12 md:px-20">
        <Link href="/" className="font-serif text-2xl italic">
          invento.
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="mailto:contact@invento.vc"
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <EnvelopeSimple size={18} />
            contact@invento.vc
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-white"
          >
            <LinkedinLogo size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
