import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function StarterPfrPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased" style={{ backgroundColor: "#faf9f7" }}>
      <nav className="border-b border-[#e8e4de] bg-[#faf9f7]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
          <Link href="/v3" className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900">
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Starter PFR
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
          Early-stage fund co-financed by PFR Ventures, investing in Polish technology startups.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-[#f5f3ef] p-6">
            <div className="text-3xl font-bold">Pre-seed</div>
            <div className="mt-1 text-sm text-gray-500">Investment stage</div>
          </div>
          <div className="rounded-2xl bg-[#f5f3ef] p-6">
            <div className="text-3xl font-bold">Digital</div>
            <div className="mt-1 text-sm text-gray-500">Focus area</div>
          </div>
          <div className="rounded-2xl bg-[#f5f3ef] p-6">
            <div className="text-3xl font-bold">Poland</div>
            <div className="mt-1 text-sm text-gray-500">Geography</div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">About the fund</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
            Starter PFR is a venture capital fund co-financed by PFR Ventures under the PFR Starter program. The fund invests in innovative Polish startups at the earliest stages of development, providing capital and hands-on support to help founders validate their ideas and build scalable businesses.
          </p>
        </div>

        {/* EU logos placeholder */}
        <div className="mt-16 rounded-2xl border border-[#e8e4de] bg-[#f5f3ef] p-8 text-center text-sm text-gray-400">
          EU / PFR co-financing logos
        </div>
      </main>
    </div>
  );
}
