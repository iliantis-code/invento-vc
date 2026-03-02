# Invento.vc — STATUS

## Aktualny stan
- **Branch**: `main`
- **Faza**: Dopracowywanie wariantów V3 i V4 (dawne V5). Bug stroke-width naprawiony. V5 przemianowane na V4.
- V4: features grid z numerami (01-06), mózg w blue-500, sektory strokeScale 1.0
- V3: logotypy marquee, czarny footer, naprawiony globalny Nav/Footer overlap

## Ostatnie zmiany
<!-- /wrap dopisuje nowe wpisy tutaj, najnowsze na górze -->

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

### 2026-03-01 — Showroom + V4 + normalizacja SVG stroke
- Stworzono **showroom** na `/` z iframe-preview 4 wariantów (V1 przeniesione z `/` do `/v1`)
- Stworzono **V4** (`/v4`) — ciemny design inspirowany Cruip Simple: gray-950 bg, gradient blur blobs, blue-500/indigo-400 gradient text, features grid z gap-px, pill badge w hero
- Naprawiono **nierówną grubość linii SVG** — `AnimatedIllustration` teraz skaluje `stroke-width` proporcjonalnie do viewBox (0.35% width). Usunięto CSS `!important` override z `globals.css`, oczyszczanie inline `stroke-width` z `<style>` bloków SVG
- Ręczne **opacity per sektor** w V3 — MedTech 0.4, Industry 0.45, Dual Use 0.6, FinTech/CleanTech 0.7 (auto-kalkulacja dawała słabe wyniki)
- Logo V3 powiększone do `text-3xl`
- **SSO Protection wyłączone** na Vercel (było `all_except_custom_domains`, blokowało Dagę)
- Decyzja: CHOSE ręczne opacity per SVG BECAUSE auto-kalkulacja (paths/sqrt(area)) nie odzwierciedla wizualnej wagi (REJECTED auto stroke-opacity BECAUSE zbyt wiele zmiennych wpływających na perceived weight)
- Decyzja: CHOSE iframe preview w showroomie BECAUSE realistyczny podgląd bez screenshotów (REJECTED statyczne obrazki BECAUSE wymagałyby generowania i aktualizacji)
- FAILED: Vercel MCP `updateproject` nie obsługuje formatu `ssoProtection` — musiał Maciej wyłączyć ręcznie w dashboard

### 2026-03-01 — GSAP DrawSVGPlugin + warianty V2/V3
- Zamieniono CSS stroke-dasharray na **GSAP DrawSVGPlugin + ScrollTrigger** — lepsza kontrola, stagger, animacja strokeWidth
- strokeWidth animuje od 0.5 do 7 (oryginalnie 14.87 — o połowę cieńsze)
- Fix logo: zamieniono `next/image` na `<img>` (Next.js Image nie ładowało PNG)
- Stworzono **V2** (`/v2`) — ciemny hero, stats cards, SaaS-owy layout
- Stworzono **V3** (`/v3`) — jasny/kremowy (#faf9f7), styl Streamline (Inspiracja 3), bullet points z ikonami Phosphor, pill buttons
- Git credentials naprawione przez Admina: per-repo credential helper dla iliantis-code (board #109), normalny `git push` działa
- Decyzja: CHOSE GSAP DrawSVGPlugin BECAUSE automatyczny stagger, animacja strokeWidth, nie trzeba konwertować path do JSX (REJECTED framer-motion pathLength BECAUSE wymaga ręcznej konwersji każdego path do motion.path)
- Decyzja: CHOSE podstrony /v2 /v3 BECAUSE łatwiejsze porównanie w przeglądarce (REJECTED osobne branche BECAUSE jeden dev server naraz)
- Zasada od Macieja: NIE pushować na Vercel z automatu — pracujemy lokalnie, push dopiero po zamknięciu etapu i za zgodą

### 2026-03-01 — Animacje SVG + Vercel deploy
- Wdrożono kod na GitHub (`iliantis-code/invento-vc`) i Vercel (auto-deploy z main)
- Dodano `AnimatedIllustration` component — SVG line-drawing animation (stroke-dasharray) triggerowane scrollem
- Dodano motion transitions (fade-in, slide-up, stagger) na wszystkie strony
- Pobrano oryginalne logo z invento.vc → `public/invento-logo.png`, wstawione w Nav
- Dodano pakiet `motion` (importy z `motion/react`)
- Dodano `global-error.tsx` — workaround na bug Next.js 16 prerender
- Decyzja: CHOSE SVG inline fetch + CSS stroke-dasharray BECAUSE jedyny sposób animacji wewnętrznych ścieżek SVG (img tag nie daje dostępu do DOM)
- Decyzja: CHOSE `motion/react` imports BECAUSE nowsza ścieżka pakietu motion, lepsza kompatybilność z React 19
- FAILED: `npm run build` lokalnie — `_global-error` prerender error (useContext null). Bug Next.js 16 + React 19, nie nasz kod. Vercel buduje OK.

### 2026-03-01 — Budowa strony Next.js
- Zbudowano 3 podstrony: Homepage, Team, About
- Stack: Next.js 16 + React 19 + Tailwind 4 + framer-motion + phosphor-icons
- Skopiowano 46 SVG ilustracji + 2 zdjęcia zespołu do public/
- Shared: Nav (fixed, active state), Footer (navy)

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

## Co nie zadziałało
- **Figma MCP** — brak fontFamily, kruchy layout, tool limitations
- **Lokalny build Next.js 16** — `_global-error` prerender useContext null (React 19 bug). Workaround: `global-error.tsx`, ale nie pomaga lokalnie. Vercel OK.
- **git push** do iliantis-code — 403 (credentials mismatch). **NAPRAWIONE** przez Admina: per-repo credential helper (board #109). Normalny `git -c http.proxyAuthMethod=basic push` działa.
- **Vercel MCP ssoProtection** — `updateproject` z `ssoProtection: {deploymentType: "none"}` i inne warianty zwracają BAD_REQUEST. Trzeba wyłączyć ręcznie w dashboard.
- **Auto stroke-opacity normalizacja** — obliczanie density (paths/sqrt(area)) nie daje wizualnie spójnych wyników, bo waga zależy też od długości path, złożoności, pustych przestrzeni w SVG

## Otwarte pytania
- [OPEN] Responsywność mobile — nie testowane jeszcze
- [OPEN] Treści bio/about — placeholder tekst, czekamy na content od klienta?
- [OPEN] Domena invento.vc — podpiąć pod Vercel?
- [OPEN] Timing animacji SVG — do dopracowania po testach w przeglądarce

## Backlog
- [x] ~~**FIX**: stroke-width MedTech/Industry 4.0~~ — naprawione (inline CSS style zamiast attr)
- [ ] Dalsze dopracowanie V3 i V4 (Maciej testuje na żywo)
- [ ] Wybrać finalny wariant designu (V1/V2/V3/V4) i dopracować
- [ ] Przetestować animacje GSAP, dopracować timing/stagger
- [ ] Responsywność mobile
- [ ] Metadata per page (SEO)
- [ ] Treści: bio członków zespołu, about pillars (unikalne per pillar)
- [ ] Lepsze ilustracje per sekcja (dopasowane tematycznie)
- [ ] Domena invento.vc → Vercel

## Infrastruktura
- Dev server: `npm run dev` → port 3500
- GitHub: `iliantis-code/invento-vc` (public)
- Vercel: `invento-vc-iliantis-codes-projects.vercel.app`
- Push: `git -c http.proxyAuthMethod=basic push` (per-repo credential helper dla iliantis-code, board #109)
