"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "companies" },
  { href: "/team", label: "team" },
  { href: "/about", label: "about" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 md:px-20">
        <Link href="/">
          <Image
            src="/invento-logo.png"
            alt="invento."
            width={140}
            height={36}
            priority
          />
        </Link>

        <div className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-navy",
                pathname === link.href
                  ? "text-navy underline underline-offset-4"
                  : "text-navy-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
