# Changelog

## 2026-03-12

### Dodane
- Sekcja **News & Insights** na stronie V3 (po Team, przed Contact) — wariant lista z dividerami, 4 tagi: Spółki, Fundusz, Ludzie, Inne
- **Hero carousel** — 4 sloty ilustracji SVG z kropkami nawigacyjnymi (żarówka + mózg + 2 placeholdery do uzupełnienia)
- Bannery EU na podstronach funduszy: `ue-banner.png` (Bridge Alpha), `pfr-banner.png` (Starter PFR) — PNG z przezroczystym tłem, flood fill od krawędzi
- Podstrona `/v3/news-preview` — 4 warianty layoutu newsów do porównania (Dagmara wybrała wariant A)
- Pełne menu nawigacyjne na podstronach funduszy (Bridge Alpha, Starter PFR, Americas)
- "News" dodane do nawigacji głównej V3

### Zmienione
- **Portfolio** przerobione na layout V1 (białe karty z ramką + sektory SVG po lewej), mechanizm: klik sektor → wybrane logotypy kolorowe, reszta grayscale + opacity 30%
- Usunięto "get in touch" z prawego górnego rogu nav na wszystkich stronach
- Footer V3 — logotyp zmieniony z tekstu na PNG z `brightness-0 invert`
- Linki nav na podstronach funduszy wskazują na `/v3#sekcja`
- Tagi newsów zmienione na polskie: Spółki, Fundusz, Ludzie, Inne

### Naprawione
- Hero carousel: key oparty na indeksie zamiast src — naprawia brak reakcji gdy sloty mają ten sam placeholder SVG

## 2026-03-11

### Dodane
- SVG ilustracje lokalizacji: `boston.svg` (Zakim Bridge), `zurich.svg` (Alpy) — skonwertowane z PNG Gemini przez OpenCV kontury + krzywe Beziera
- Backup strony głównej jako `/v3/home-v1`
- Podstrony Funds pod `/v3/funds/bridge-alpha`, `/v3/funds/starter-pfr`, `/v3/funds/americas`
- Podstrony `/v3/grafiki`, `/v3/dagmara` (przeniesione z root)
- Zdjęcie `sven-zagala.jpg` (przeniesione z błędnego bartosz-zalewski.jpg)

### Zmienione
- Usunięte sekcje ze strony głównej V3: Logo band, Stats (13/5/3)
- Portfolio przesunięte pod Hero, logotypy spółek powiększone (h-16, max-w-160px)
- Lokalizacje: pinezki MapPin → animowane SVG (Spodek, Pałac Kultury, Zakim Bridge, Alpy)
- Katowice → "Silesia, Poland"
- Team zredukowany z 8 do 4 osób
- Wszystkie linki w nav V3 skonsolidowane pod `/v3/*`
- Podstrony Funds: nav z logo w identycznej pozycji jak strona główna, breadcrumb, max-w-6xl

## 2026-03-07

### Dodane
- Strona `/unicorn` — wariant pastelowo-rozowy (pink-50/violet-800) bazujacy na V3, ukryty przed showroomem
- Ilustracja jednorozca PNG w hero (`public/illustrations/jednorozec.png`, 600x435, przezroczyste tlo)
- Ilustracje cyferek 13/5/3 w stylu jednorozca (`public/illustrations/stat-{13,5,3}.png`) w sekcji Stats
- Zdjecie Dagmary Strzebickiej w team (`public/team/dagmara-strzebicka.webp`)
- Pastelowy gradient na logo band (niebieski, roz, lawenda)
- Keyframe `gradientShift` w `globals.css`
- Roadmapa projektu `doc/ROADMAP.md` (9 faz redesignu)
- Transkrypcja rozmowy `doc/7_mar_o_18-34_pol.txt`

### Zmienione
- Nav.tsx i Footer.tsx — ukrywaja sie na `/unicorn` i `/grafiki`
- Logotypy w marquee /unicorn powiekszone do h-28

## 2026-03-03

### Naprawione
- Stroke-width mózgu SVG (`burza mozgow.svg`) puchł przy scrollowaniu — `stroke-width` usuwany z HTML stringa SVG przed wstawieniem do DOM (zamiast modyfikacji `<style>` po renderze), `removeAttribute("stroke-width")` na elementach, `overwrite: true` w GSAP animacji
