import Link from "next/link";
import { ArrowLeft, Camera, MapPin, Pen, Globe, EnvelopeSimple, CheckCircle, Circle } from "@phosphor-icons/react/dist/ssr";

const tasks = [
  {
    category: "Zdjęcia team",
    items: [
      { text: "Zdjęcie: Sven Zagała", done: false },
      { text: "Zdjęcie: Tomasz Gołąb", done: false },
      { text: "Zdjęcie: Katarzyna Geiger", done: false },
      { text: "Zdjęcie: Ewelina Wolny", done: false },
      { text: "Zdjęcie: Robert Mazgaj", done: false },
      { text: "Zdjęcie: Robert Bieleń", done: true },
      { text: "Zdjęcie: Bartosz Zalewski", done: true },
      { text: "Zdjęcie: Dagmara Strzębicka", done: true },
    ],
  },
  {
    category: "Bio / opisy osób",
    items: [
      { text: "Bio: Tomasz Gołąb — brak opisu", done: false },
      { text: "Bio: Ewelina Wolny — brak opisu", done: false },
      { text: "Bio: Dagmara Strzębicka — brak opisu", done: false },
      { text: "Weryfikacja ról i tytułów wszystkich 8 osób", done: false },
    ],
  },
  {
    category: "Lokalizacje — symbole miast",
    items: [
      { text: "Wybór symbolu Bostonu: Zakim Bridge, MIT Dome, Skyline, Faneuil Hall lub żaglówka? → patrz doc/location-symbols.md", done: false },
      { text: "Wybór symbolu Zurychu: Grossmünster, Jezioro+Alpy, Fraumünster, Hauptbahnhof lub zegar? → patrz doc/location-symbols.md", done: false },
      { text: "Po wyborze → zamówienie 2 ilustracji w Nanobanana", done: false },
    ],
  },
  {
    category: "Team section — wzorzec",
    items: [
      { text: "Akceptacja obecnego mockupu (klikalne karty z rozwijaniem) lub wybór innego wzorca → patrz doc/team-patterns.md", done: false },
    ],
  },
  {
    category: "Ilustracja hero",
    items: [
      { text: "Wybór ilustracji hero z /grafiki (aktualnie: żarówka idea.svg)", done: false },
    ],
  },
  {
    category: "Funds — podstrony",
    items: [
      { text: "Weryfikacja opisów: Bridge Alpha, Starter PFR, Americas", done: false },
      { text: "Logotypy unijne dla Bridge Alpha i Starter PFR (pliki PNG/SVG)", done: false },
    ],
  },
  {
    category: "Teksty",
    items: [
      { text: "Sesja pisania tekstów w Claude Desktop (hero, about, portfolio, CTA)", done: false },
    ],
  },
  {
    category: "Formularz kontaktowy",
    items: [
      { text: "Decyzja: webhook n8n czy bezpośredni email?", done: false },
    ],
  },
  {
    category: "Portfolio — spółki",
    items: [
      { text: "Weryfikacja przypisania spółek do sektorów (FinTech, MedTech, Industry 4.0, CleanTech, Dual Use)", done: false },
      { text: "Czy są nowe spółki do dodania?", done: false },
    ],
  },
];

export default function DagmaraPage() {
  const total = tasks.reduce((s, t) => s + t.items.length, 0);
  const done = tasks.reduce((s, t) => s + t.items.filter((i) => i.done).length, 0);

  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased" style={{ backgroundColor: "#faf9f7" }}>
      <nav className="border-b border-[#e8e4de] bg-[#faf9f7]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-4">
          <Link href="/v3" className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900">
            <ArrowLeft size={16} />
            Wróć do strony
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Dagmara — lista rzeczy do strony
        </h1>
        <p className="mt-3 text-[15px] text-gray-500">
          Poniżej wszystko, czego potrzebujemy od Ciebie żeby dokończyć stronę invento.vc.
          Gotowe: <span className="font-semibold text-gray-900">{done}/{total}</span>
        </p>

        <div className="mt-12 space-y-10">
          {tasks.map((group) => (
            <div key={group.category}>
              <h2 className="mb-4 text-lg font-bold text-gray-900">{group.category}</h2>
              <div className="space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item.text}
                    className={`flex items-start gap-3 rounded-lg p-3 text-sm ${
                      item.done ? "bg-green-50 text-gray-400 line-through" : "bg-[#f5f3ef] text-gray-700"
                    }`}
                  >
                    {item.done ? (
                      <CheckCircle size={18} className="mt-0.5 shrink-0 text-green-500" weight="fill" />
                    ) : (
                      <Circle size={18} className="mt-0.5 shrink-0 text-gray-300" />
                    )}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#e8e4de] bg-[#f5f3ef] p-6 text-sm text-gray-500">
          <p className="font-semibold text-gray-900">Jak dostarczyć materiały?</p>
          <p className="mt-2">Zdjęcia i logotypy wyślij Maciejowi — wrzuci je na stronę. Decyzje (wybory symboli, wzorca team, itp.) wystarczy powiedzieć lub napisać.</p>
        </div>
      </main>
    </div>
  );
}
