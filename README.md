# MKP Poland — Landing Page

Mehrsprachige Landingpage für **The ManKind Project Polska** — Männerkreise und das Initiationstraining NWTA.

## Sprachen

| Route | Sprache |
|---|---|
| `/` | Polski (Standard) |
| `/en` | English |
| `/de` | Deutsch |
| `/cs` | Čeština |
| `/uk` | Українська |

Sprachumschaltung über das Dropdown in der Navigation. Alle Texte liegen zentral in `content/copy.ts`.

## Tech-Stack

- **Next.js 15** (App Router, komplett statisch)
- **Tailwind CSS 4**
- **Framer Motion** — Scroll-Reveals, Zähler, scroll-gekoppelter Botschaften-Slider
- **lucide-react** — Icons

## Entwicklung

```bash
pnpm install
pnpm dev     # http://localhost:3100
pnpm build   # Produktions-Build (statisch)
```

## Struktur

```
app/            Routen (eine pro Sprache) + Layout + globales CSS
components/     Sektionen (Hero, Problem, Circles, Becoming, Path, Nwta, Faq, Final)
content/        copy.ts — alle Texte in 5 Sprachen + Locale-Liste
public/images/  Optimierte Fotos (JPEG, max. 1800px)
```

## Hinweise

- `robots: noindex` ist im Root-Layout gesetzt — vor dem Livegang entfernen.
- Der NWTA-Termin (2.–4. Oktober 2026, Kiczyce) und die Kontaktdaten stehen in `content/copy.ts`.
- Anmeldung läuft aktuell per `mailto:` — kann später durch ein Formular ersetzt werden.
