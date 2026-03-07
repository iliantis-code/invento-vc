# Invento.vc — STATUS

## Aktualny stan
- **Branch**: `main` (up to date z origin)
- **Faza**: Aktywny redesign. **V3 wybrane jako baza finalnej strony** (decyzja Dagmary 7.03). Roadmapa 9 faz w `doc/ROADMAP.md`. Agent w tle tworzy zakladke `/grafiki`.
- Strona `/unicorn` (pastelowo-rozowa) na Vercel — ukryta demonstracja dla Dagmary

## Ostatnie zmiany
<!-- /wrap dopisuje nowe wpisy tutaj, najnowsze na górze -->

### 2026-03-07 — V5 Unicorn + roadmapa redesignu
- **Strona /unicorn** — nowy wariant pastelowo-rozowy (pink-50, violet-800/900) bazujacy na V3. Ukryty przed showroomem, dostepny pod bezposrednim URL
- **Jednorozec PNG** z `Inne Grafiki/`, usuniete biale tlo (Pillow), 600x435, hero zamiast SVG line-art
- **Dagmara Strzebicka** — zdjecie pobrane ze scalab.pl, jedyna osoba w team /unicorn
- **Cyferki jednorozcowe** — 13/5/3 wyciete z PNG Gemini, pionowe stats cards z ilustracja
- **Logo band** — pastelowy gradient (niebieski, roz, lawenda), statyczny
- **Transkrypcja rozmowy z Dagmara** — `doc/7_mar_o_18-34_pol.txt`, podsumowanie projektowe
- **ROADMAP.md** — `doc/ROADMAP.md` z 9 fazami pracy
- Decyzja: CHOSE V3 jako baze finalnej strony BECAUSE decyzja Dagmary z rozmowy 7.03 (REJECTED V1/V2/V4 jako baza)
- Agent w tle: tworzenie zakladki `/grafiki` (galeria wszystkich ilustracji animowanych)

### 2026-03-03 — Fix stroke-width mózgu SVG (pre-clean approach)
- **FIX stroke-width puchnięcie**: Root cause — `stroke-width:14.87` w CSS `<style>` bloku SVG było usuwane dopiero w useEffect (po renderze DOM), co dawało okno czasowe na flash/re-apply. Fix 3-warstwowy: (1) usuwanie `stroke-width` z HTML stringa SVG PRZED `dangerouslySetInnerHTML` (w fetch step), (2) `removeAttribute("stroke-width")` na elementach SVG, (3) `overwrite: true` w GSAP `.to()` zapobiega akumulacji tweenów
- Decyzja: CHOSE pre-clean SVG HTML string (regex w fetch) BECAUSE eliminuje CSS rule zanim trafi do DOM — zero okna na flash (REJECTED modyfikacja `<style>` textContent w useEffect BECAUSE DOM już wyrenderowany, CSS zdążyło zaaplikować się)
- Build przechodzi czysto, wymaga weryfikacji wizualnej w przeglądarce

### 2026-03-02 — Fix stroke-width, V5→V4, dopracowanie V3/V4
- **FIX stroke-width SVG**: Root cause — `gsap.set(paths, { attr: { "stroke-width": ... } })` ustawia SVG presentation attribute (najniższa specificity), przegrywa z CSS klasą `.str0 { stroke-width: X }` w `<style>` bloku SVG. Fix: zamiana na `gsap.set(paths, { strokeWidth: ... })` — inline CSS style (najwyższa specificity). Wszystkie sektory teraz strokeScale: 1.0
- **V5 → V4**: routing zmieniony z `/v5` na `/v4`, katalog `app/v5/` przeniesiony do `app/v4/`
- **V4 features grid**: Phosphor ikony zamienione na numery 01-06 (Inter bold text-4xl, blue-400/60)
- **V4 mózg (burza mozgow)**: zmieniony na blue-500 stroke, strokeScale 0.5
- **V3 naprawiony**: globalny Nav/Footer ukryte (dodane `/v3` `/v4` do warunków w Nav.tsx/Footer.tsx), nav border `border-[#e8e4de]`, hero padding zwiększony (pt-16 md:pt-24, pb-24)
- **V3 sektory**: dodany strokeScale 1.0 — normalizacja grubości jak V4
- **V3 logotypy**: tekstowe nazwy → marquee z obrazkami (h-14, grayscale, mix-blend-darken, opacity-50 na wrapperze)
- **V3 footer**: zmieniony na czarny (gray-950)
- **Showroom**: tło białe (było kremowe), V5→V4 w nazwie
- Decyzja: CHOSE `strokeWidth:` (CSS inline) zamiast `attr: { "stroke-width": }` (SVG attribute) BECAUSE inline style ma najwyższą CSS specificity i zawsze wygrywa nad class-based rules (REJECTED czyszczenie `<style>` textContent BECAUSE nie działa niezawodnie, CDATA/browser caching issues)
- Decyzja: CHOSE numery 01-06 w features grid BECAUSE pasują do ręcznych ilustracji lepiej niż Phosphor ikony (REJECTED Phosphor ikony BECAUSE zbyt generyczne, nie pasują do hand-drawn stylu)

### 2026-03-02 — Logotypy spółek, nawigacja, design V5
- **Logotypy spółek pobrane** z invento.vc (12 z 13 — My Owl nie znaleziony, usunięty z listy). Zapisane w `public/logos/`. Podmienione tekstowe nazwy na obrazki w V1, V2, V5
- **V1 portfolio**: logotypy w białych kartach (h-16, grayscale → kolor on hover, `group-hover`)
- **V2 portfolio**: logotypy (h-8, grayscale → kolor on hover). Nav zmieniony z białego na dark (jak V5)
- **V5 hero**: marquee (auto-scroll 120s) z logotypami — `invert mix-blend-screen opacity-60`, `h-20`. Browser mockup usunięty
- **V5 design**: niebieska kropka (blue-500) w nagłówkach ("founders.", "sectors."), "Get in touch" button → blue-500, SVG sektorów w kolorze blue-500 przez `[&_path]:!stroke-blue-500`
- **V5 sektory**: layout 3+2 (flex-wrap 33%), SVG powiększone do 160x160
- **V3**: ikonki Phosphor w hero → szare kropki (gray-400), features → niebieskie kropki (blue-600), "deeptech founders" → blue-600
- **Nav/Footer**: ukryte na V2/V5 (mają własne), widoczne na V1/team/about. Showroom (/) — tylko logo bez linków
- **Team**: usunięta animacja GSAP z ilustracji ludzi → statyczny `<img>`
- **About V2**: naprawione 404 ilustracji (microchip ai.svg → robot.svg, VR.svg → handshake.svg)
- **AnimatedIllustration**: nowy prop `strokeScale` (domyślnie 0.35) — pozwala kontrolować grubość stroke per instancję
- FAILED: `strokeScale` dla MedTech/Industry 4.0 — mimo zmiany wartości stroke renderuje się gruby. Problem prawdopodobnie w tym że SVG mają inline stroke-width w `<style>` bloku które nadpisują GSAP. Wymaga debugowania w następnej sesji
- FAILED: `brightness-0 invert` na logotypach z białym tłem (JPG/PNG) — daje jednolite szare prostokąty bo białe tło też się invertuje. Rozwiązanie: `invert mix-blend-screen` (czarne staje się przezroczyste w trybie screen)
- Decyzja: CHOSE `invert mix-blend-screen` dla logotypów na ciemnym tle BECAUSE jedyny sposób na przezroczyste tło bez konwersji do PNG z alpha (REJECTED brightness-0 invert BECAUSE zamienia białe tło w szary prostokąt)
- Decyzja: CHOSE usunięcie My Owl z portfolio BECAUSE logo niedostępne na serwerze WP pod żadnym wariantem URL

### 2026-03-02 — V4→V5 redesign Cruip Simple + poprawki V1/Team
- **V4 przerobiony** z ciemnego na jasny styl Cruip Simple (white bg, gray-900 buttons, indigo-600 accenty, browser mockup, sector pills, partner quote, portfolio highlights). Nowe sekcje: browser mockup, sector pills, partner quote blockquote, portfolio highlights cards
- **V5 stworzony** jako ciemna wersja tego samego layoutu (gray-950, white buttons, blue-400 accenty, SVG z `invert`)
- **V4 usunięty** (jasny) — Maciej wybrał ciemną wersję (V5)
- **V1 hero**: "Hands-on capital" w jednej linii, mózg przesunięty `mr-8`, usunięty nieużywany import `Image`
- **Team lokalizacje**: indywidualne rozmiary SVG per miasto (Katowice 260x90, Warszawa 160x220, USA 100x220), Statua Wolności przesunięta w górę (`-top-12`), indywidualne `speed` animacji (Katowice 3s, Warszawa 0.8s, USA 0.01s)
- **AnimatedIllustration**: nowy prop `stagger` (domyślnie 0.08) — pozwala kontrolować rozłożenie animacji per instancję. Team 10 osób: stagger=0.02, duration=0.8
- Decyzja: CHOSE ciemny Cruip (V5) BECAUSE Maciej usunął jasny V4, zostawił ciemny
- Decyzja: CHOSE indywidualne rozmiary SVG lokalizacji BECAUSE viewBoxy drastycznie różne, jeden width/height nie normalizuje wyglądu


## Decyzje
| Data | Decyzja | Dlaczego | Odrzucone |
|------|---------|----------|-----------|
| 2026-03-01 | Porzucenie Figma MCP | Zbyt ograniczone narzędzia (brak fontFamily, kruchy layout) | Figma MCP relay |
| 2026-03-01 | Next.js 16 + Tailwind 4 | Ten sam stack co Elatheris, sprawdzony | — |
| 2026-03-01 | SVG inline fetch + CSS animation | Jedyny sposób animacji wewnętrznych path SVG | img tag, SVGR (zbyt dużo plików) |
| 2026-03-01 | Push przez MCP push_files | Lokalne credentials to fundacjafutureminds, repo na iliantis-code | git push (403) |
| 2026-03-01 | GSAP DrawSVGPlugin zamiast CSS stroke-dasharray | Automatyczny stagger, animacja strokeWidth, działa z wieloma path bez konwersji do JSX | framer-motion pathLength |
| 2026-03-01 | Warianty jako podstrony /v2 /v3 | Łatwiejsze porównanie w przeglądarce, jeden dev server | Osobne branche |
| 2026-03-01 | Ręczne opacity per SVG w sektorach | Auto-kalkulacja (density) nie odzwierciedla wizualnej wagi | Auto stroke-opacity |
| 2026-03-01 | Stroke-width skalowany do viewBox | 0.35% viewBox width — normalizuje grubość niezależnie od canvas size | Stała wartość strokeWidth:7 |
| 2026-03-02 | GSAP `strokeWidth:` (CSS inline) zamiast `attr:` | Inline style wygrywa specificity nad CSS class rules w SVG `<style>` | `attr: { "stroke-width": }` (przegrywa z CSS) |
| 2026-03-02 | Numery 01-06 w features V4 | Pasują do hand-drawn stylu | Phosphor ikony (zbyt generyczne) |
| 2026-03-03 | Pre-clean SVG HTML (regex w fetch) | Eliminuje CSS stroke-width zanim trafi do DOM | Modyfikacja `<style>` textContent w useEffect (za późno) |
| 2026-03-07 | V3 jako baza finalnej strony | Decyzja Dagmary z rozmowy 7.03 | V1/V2/V4 jako baza |
| 2026-03-07 | /unicorn ukryty (nie w showroomie) | Demonstracja dla Dagmary pod bezposrednim URL | Widoczny w showroomie |

## Co nie zadziałało
- **Figma MCP** — brak fontFamily, kruchy layout, tool limitations
- **Lokalny build Next.js 16** — `_global-error` prerender useContext null (React 19 bug). Workaround: `global-error.tsx`, ale nie pomaga lokalnie. Vercel OK.
- **git push** do iliantis-code — 403 (credentials mismatch). **NAPRAWIONE** przez Admina: per-repo credential helper (board #109). Normalny `git -c http.proxyAuthMethod=basic push` działa.
- **Vercel MCP ssoProtection** — `updateproject` z `ssoProtection: {deploymentType: "none"}` i inne warianty zwracają BAD_REQUEST. Trzeba wyłączyć ręcznie w dashboard.
- **Auto stroke-opacity normalizacja** — obliczanie density (paths/sqrt(area)) nie daje wizualnie spójnych wyników, bo waga zależy też od długości path, złożoności, pustych przestrzeni w SVG
- **Modyfikacja `<style>` textContent w useEffect** — usuwanie `stroke-width` z CSS po renderze DOM daje okno czasowe gdzie CSS rule się aplikuje. **NAPRAWIONE**: pre-clean HTML stringa przed `dangerouslySetInnerHTML`

## Otwarte pytania
- [OPEN] Symbole Bostonu i Zurychu — propozycje do Dagmary, potem grafiki Nanobanana
- [OPEN] Mockup rozwijania osoby w team — 3 propozycje do wyboru Dagmary
- [OPEN] 8 osob team — potrzebne zdjecia i opisy (Robert, Bartek, Sven, Tomasz, Katarzyna, Ewelina, Dagmara, Robert)
- [OPEN] Formularz kontaktowy — webhook n8n vs bezposredni email
- [OPEN] Scraper newsow — szukac w historii cc_sessions Claude Admin
- [OPEN] Ilustracja hero — Dagmara wybierze z /grafiki
- [OPEN] Responsywnosc mobile — nie testowane jeszcze
- [OPEN] Domena invento.vc — podpiac pod Vercel?

## Backlog
Pelna roadmapa: `doc/ROADMAP.md` (9 faz)
- [x] ~~Wybor wariantu~~ — V3 (decyzja Dagmary 7.03)
- [ ] Zakladka /grafiki (agent w tle)
- [ ] Portfolio interaktywne (klikalne sektory)
- [ ] Lokalizacje (Silesia, Warszawa, Boston, Zurych)
- [ ] Team rozbudowa (8 osob, rozwijane karty)
- [ ] News & Insights (layout + scraper)
- [ ] Funds (3 podstrony: Bridge Alpha, Starter PFR, Americas)
- [ ] Formularz kontaktowy
- [ ] Teksty (Claude Desktop + Dagmara)

## Infrastruktura
- Dev server: `npm run dev` → port 3500
- GitHub: `iliantis-code/invento-vc` (public)
- Vercel: `invento-vc-iliantis-codes-projects.vercel.app`
- Push: `git -c http.proxyAuthMethod=basic push` (per-repo credential helper dla iliantis-code, board #109)
