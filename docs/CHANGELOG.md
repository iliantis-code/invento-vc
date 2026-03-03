# Changelog

## 2026-03-03

### Naprawione
- Stroke-width mózgu SVG (`burza mozgow.svg`) puchł przy scrollowaniu — `stroke-width` usuwany z HTML stringa SVG przed wstawieniem do DOM (zamiast modyfikacji `<style>` po renderze), `removeAttribute("stroke-width")` na elementach, `overwrite: true` w GSAP animacji
