# Invento.vc — STATUS

## Aktualny stan
- **Branch**: `main`
- **Faza**: Aktywny redesign V3. Hero carousel naprawiony — żarówka z natychmiastową animacją CSS (zero opóźnienia), mózg z prefetch. SVG żarówki rozbity na 5 ścieżek. Slidy 3-4 puste (placeholder).

## Ostatnie zmiany
<!-- /wrap dopisuje nowe wpisy tutaj, najnowsze na górze -->

### 2026-03-13 — Hero carousel: natychmiastowa animacja CSS, rozbicie SVG żarówki
- **SVG idea.svg rozbity** z 1 path na 5 (podstawa, trzonek, żarnik, bańka, powrót) — GSAP DrawSVG animuje każdą część osobno ze staggerem
- **Slidy 3-4 hero carousel** ustawione na `src: null` (były duplikatem żarówki)
- **Animacja hero przyspieszona**: duration 5→2.5s, stagger 0.08→0.03s
- **Pure CSS animation dla hero żarówki**: `@keyframes` z `stroke-dasharray/dashoffset` w inline SVG. Startuje natychmiast z parsowaniem HTML — zero zależności od JS/React/GSAP
- **SVG cache + prefetch**: moduł-level `svgCache` Map + `prefetchSvg()` eksportowany z AnimatedIllustration. Brain SVG prefetchowany przy imporcie strony
- **Preload w head**: `<link rel="preload">` dla brain SVG w layout.tsx
- **AnimatedIllustration**: nowy prop `inlineSvg` (pomija fetch), `prefetchSvg` export
- Decyzja: CHOSE pure CSS @keyframes dla hero SVG BECAUSE jedyny sposób na animację bez czekania na JS hydration (REJECTED GSAP z inlineSvg BECAUSE useLayoutEffect wymaga hydration — 2-3s opóźnienia na dev)
- Decyzja: CHOSE hybrid CSS (hero) + GSAP (reszta) BECAUSE hero above-the-fold wymaga instant start, reszta poniżej scrollu — JS załadowany zanim user doscrolluje
- stroke-width żarówki hero: 1.2 (cienka, delikatna linia)

### 2026-03-11 — Konsolidacja V3, SVG lokalizacji, uproszczenie strony
- **Backup Home V1** (`/v3/home-v1`) — kopia V3 sprzed zmian
- **Usunięte sekcje**: Logo band ("Powering exceptional founders"), Stats (13/5/3)
- **Portfolio przesunięte wyżej** — bezpośrednio pod Hero, logotypy spółek powiększone (h-12→h-16, max-w 120→160px)
- **SVG lokalizacji**: Boston (Zakim Bridge) i Zurich (Alpy) — PNG z Gemini/Nanobanana skonwertowane na SVG (OpenCV kontury → krzywe Beziera), stroke #383A52, animowane DrawSVGPluginem. Tekst usunięty z obu.
- **Katowice → Silesia** w nazwie lokalizacji
- **Team zredukowany**: 4 osoby (Robert, Bartosz, Sven, Dagmara). Zdjęcie bartosz-zalewski.jpg → sven-zagala.jpg (błędne przypisanie)
- **Konsolidacja pod /v3/**: funds, grafiki, dagmara, home-v1 przeniesione z root do `/v3/*`. Wszystkie linki w nav zaktualizowane.
- **Schemat podstron Funds**: nav fixed z logo (identyczne jak strona główna), max-w-6xl, breadcrumb "Back to Home" pod navem, pt-28
- Decyzja: CHOSE konsolidację wszystkich podstron pod /v3/ BECAUSE spójna struktura na Vercelu, bez wycieku do starych routes (REJECTED osobne ścieżki /funds, /grafiki BECAUSE prowadzą do globalnego Nav/Footer)
- Decyzja: CHOSE OpenCV kontury + Bezier BECAUSE vtracer segfaultował, potrace nie kompilował się na Windows (REJECTED vtracer, pypotrace)

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
| 2026-03-11 | Konsolidacja podstron pod /v3/* | Spójna struktura, brak wycieku do starych routes z globalnym Nav | Osobne /funds, /grafiki |
| 2026-03-11 | Schemat podstron: nav fixed + logo only + breadcrumb | Spójność pozycji logo, max-w-6xl px-6 pt-28 | Back w navie po prawej (obco wyglądało) |
| 2026-03-11 | OpenCV kontury→Bezier do konwersji PNG→SVG | vtracer segfault, pypotrace nie kompiluje się na Win | vtracer, pypotrace |
| 2026-03-11 | Team 4 osoby (Robert, Bartosz, Sven, Daga) | Decyzja Macieja — reszta usunięta z V3 | 8-osobowy team |
| 2026-03-13 | Pure CSS @keyframes dla hero SVG | Zero opóźnienia — animacja startuje z HTML parse, bez czekania na JS | GSAP z inlineSvg (wymaga hydration) |
| 2026-03-13 | Hybrid: CSS hero + GSAP reszta | Hero above-the-fold = instant, reszta below-fold = JS gotowy po scrollu | Pełne CSS (brak ScrollTrigger), pełne GSAP (opóźnienie hero) |
| 2026-03-13 | Rozbicie idea.svg na 5 path | 1 path = brak staggeru, animacja wygląda jak flash końcówki | Zostawienie 1 path |

## Co nie zadziałało
- **Figma MCP** — brak fontFamily, kruchy layout, tool limitations
- **Lokalny build Next.js 16** — `_global-error` prerender useContext null (React 19 bug). Workaround: `global-error.tsx`, ale nie pomaga lokalnie. Vercel OK.
- **git push** do iliantis-code — 403 (credentials mismatch). **NAPRAWIONE** przez Admina: per-repo credential helper (board #109). Normalny `git -c http.proxyAuthMethod=basic push` działa.
- **Vercel MCP ssoProtection** — `updateproject` z `ssoProtection: {deploymentType: "none"}` i inne warianty zwracają BAD_REQUEST. Trzeba wyłączyć ręcznie w dashboard.
- **Auto stroke-opacity normalizacja** — obliczanie density (paths/sqrt(area)) nie daje wizualnie spójnych wyników, bo waga zależy też od długości path, złożoności, pustych przestrzeni w SVG
- **Modyfikacja `<style>` textContent w useEffect** — usuwanie `stroke-width` z CSS po renderze DOM daje okno czasowe gdzie CSS rule się aplikuje. **NAPRAWIONE**: pre-clean HTML stringa przed `dangerouslySetInnerHTML`

## Otwarte pytania
- [OPEN] Formularz kontaktowy — webhook n8n vs bezposredni email
- [OPEN] Scraper newsów — szukać w historii cc_sessions Claude Admin
- [OPEN] Ilustracja hero — Dagmara wybierze z /v3/grafiki
- [OPEN] Responsywność mobile — nie testowane jeszcze
- [OPEN] Domena invento.vc — podpiąć pod Vercel?
- [OPEN] Zdjęcie Bartosza Zalewskiego — brak (placeholder inicjały BZ)

## Backlog
Pelna roadmapa: `doc/ROADMAP.md` (9 faz)
- [x] ~~Wybor wariantu~~ — V3 (decyzja Dagmary 7.03)
- [x] ~~Zakladka /grafiki~~ → `/v3/grafiki`
- [x] ~~Portfolio interaktywne~~ (klikalne sektory)
- [x] ~~Lokalizacje~~ (Silesia, Warszawa, Boston, Zurych — SVG animowane)
- [x] ~~Team~~ — 4 osoby (Robert, Bartosz, Sven, Daga)
- [x] ~~Funds~~ — 3 podstrony pod `/v3/funds/*`
- [x] ~~Formularz kontaktowy~~ — layout gotowy, brakuje webhook
- [ ] News & Insights (layout + scraper)
- [ ] Teksty (Claude Desktop + Dagmara)
- [ ] Responsywność mobile

## Infrastruktura
- Dev server: `npm run dev` → port 3500
- GitHub: `iliantis-code/invento-vc` (public)
- Vercel: `invento-vc-iliantis-codes-projects.vercel.app`
- Push: `git -c http.proxyAuthMethod=basic push` (per-repo credential helper dla iliantis-code, board #109)
