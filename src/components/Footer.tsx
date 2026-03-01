import Link from "next/link";
import { EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
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
