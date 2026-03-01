# Invento.vc — STATUS

## Aktualny stan
- **Branch**: `main`
- **Faza**: MVP strony — 3 podstrony gotowe z animacjami SVG, wdrożone na Vercel
- Strona live na `invento-vc-iliantis-codes-projects.vercel.app`, repo `iliantis-code/invento-vc`

## Ostatnie zmiany
<!-- /wrap dopisuje nowe wpisy tutaj, najnowsze na górze -->

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

## Co nie zadziałało
- **Figma MCP** — brak fontFamily, kruchy layout, tool limitations
- **Lokalny build Next.js 16** — `_global-error` prerender useContext null (React 19 bug). Workaround: `global-error.tsx`, ale nie pomaga lokalnie. Vercel OK.
- **git push** do iliantis-code — 403 (credentials mismatch). Workaround: MCP push_files

## Otwarte pytania
- [OPEN] Responsywność mobile — nie testowane jeszcze
- [OPEN] Treści bio/about — placeholder tekst, czekamy na content od klienta?
- [OPEN] Domena invento.vc — podpiąć pod Vercel?
- [OPEN] Timing animacji SVG — do dopracowania po testach w przeglądarce

## Backlog
- [ ] Przetestować animacje lokalnie, dopracować timing
- [ ] Responsywność mobile
- [ ] Metadata per page (SEO)
- [ ] Treści: bio członków zespołu, about pillars (unikalne per pillar)
- [ ] Lepsze ilustracje per sekcja (dopasowane tematycznie)
- [ ] Domena invento.vc → Vercel

## Infrastruktura
- Dev server: `npm run dev` → port 3500
- GitHub: `iliantis-code/invento-vc` (public)
- Vercel: `invento-vc-iliantis-codes-projects.vercel.app`
- Push: przez MCP `push_files` (nie git push)
