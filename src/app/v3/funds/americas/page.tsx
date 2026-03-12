import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function AmericasPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased" style={{ backgroundColor: "#faf9f7" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8e4de] bg-[#faf9f7]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/v3">
            <img src="/invento-logo.png" alt="invento." width={120} height={32} />
          </Link>
          <div className="hidden items-center gap-8 text-sm text-gray-500 md:flex">
            <Link href="/v3#portfolio" className="transition-colors hover:text-gray-900">Portfolio</Link>
            <Link href="/v3#about" className="transition-colors hover:text-gray-900">About us</Link>
            <Link href="/v3#team" className="transition-colors hover:text-gray-900">Team</Link>
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
            <Link href="/v3#contact" className="transition-colors hover:text-gray-900">Contact</Link>
          </div>
          <div />
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-28">
        <Link href="/v3" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900">
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Americas
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
          Transatlantic investment vehicle connecting European deep technology with American markets.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-[#f5f3ef] p-6">
            <div className="text-3xl font-bold">Seed</div>
            <div className="mt-1 text-sm text-gray-500">Investment stage</div>
          </div>
          <div className="rounded-2xl bg-[#f5f3ef] p-6">
            <div className="text-3xl font-bold">Cross-border</div>
            <div className="mt-1 text-sm text-gray-500">Focus area</div>
          </div>
          <div className="rounded-2xl bg-[#f5f3ef] p-6">
            <div className="text-3xl font-bold">US & LATAM</div>
            <div className="mt-1 text-sm text-gray-500">Geography</div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">About the fund</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
            Americas is Invento&apos;s transatlantic fund, bridging European deep technology with the US and Latin American markets. The fund supports founders who are building globally scalable ventures and provides access to networks, partners and customers across the Americas.
          </p>
        </div>
      </main>
    </div>
  );
}
