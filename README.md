# MKP Poland — Landing Page

**The ManKind Project Polska** — Männerkreise & NWTA · Męskie kręgi & NWTA · Men's circles & NWTA

Sprachen / Języki / Languages: `/` Polski · `/en` English · `/de` Deutsch · `/cs` Čeština · `/uk` Українська

Tech: Next.js 15 (App Router, statisch) · Tailwind CSS 4 · Framer Motion · lucide-react

---

## 🇩🇪 Deutsch

### Voraussetzungen

1. **Node.js 20 oder neuer** — [nodejs.org](https://nodejs.org) (LTS-Version reicht). Prüfen mit:
   ```bash
   node --version
   ```
2. **pnpm** (Paketmanager) — einmalig installieren:
   ```bash
   npm install -g pnpm
   ```
3. **Git** — [git-scm.com](https://git-scm.com)

### Repo klonen und starten — Schritt für Schritt

1. Terminal öffnen und in den Ordner wechseln, in dem das Projekt liegen soll:
   ```bash
   cd Desktop
   ```
2. Repository klonen:
   ```bash
   git clone https://github.com/rieckerrep/mkp-poland.git
   ```
3. In den Projektordner wechseln:
   ```bash
   cd mkp-poland
   ```
4. Abhängigkeiten installieren (dauert beim ersten Mal ca. 1 Minute):
   ```bash
   pnpm install
   ```
5. Entwicklungsserver starten:
   ```bash
   pnpm dev
   ```
6. Im Browser öffnen: **http://localhost:3100**

### Produktions-Build

```bash
pnpm build   # baut die statische Seite
pnpm start   # startet den Produktionsserver auf Port 3100
```

### Texte ändern

Alle Texte aller fünf Sprachen liegen in **einer** Datei: `content/copy.ts`. Ändern, speichern — der Dev-Server lädt automatisch neu.

---

## 🇵🇱 Polski

### Wymagania

1. **Node.js 20 lub nowszy** — [nodejs.org](https://nodejs.org) (wersja LTS wystarczy). Sprawdź:
   ```bash
   node --version
   ```
2. **pnpm** (menedżer pakietów) — instalacja jednorazowa:
   ```bash
   npm install -g pnpm
   ```
3. **Git** — [git-scm.com](https://git-scm.com)

### Klonowanie i uruchomienie — krok po kroku

1. Otwórz terminal i przejdź do folderu, w którym ma być projekt:
   ```bash
   cd Desktop
   ```
2. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/rieckerrep/mkp-poland.git
   ```
3. Wejdź do folderu projektu:
   ```bash
   cd mkp-poland
   ```
4. Zainstaluj zależności (za pierwszym razem ok. 1 minuta):
   ```bash
   pnpm install
   ```
5. Uruchom serwer deweloperski:
   ```bash
   pnpm dev
   ```
6. Otwórz w przeglądarce: **http://localhost:3100**

### Build produkcyjny

```bash
pnpm build   # buduje stronę statyczną
pnpm start   # uruchamia serwer produkcyjny na porcie 3100
```

### Edycja tekstów

Wszystkie teksty we wszystkich pięciu językach są w **jednym** pliku: `content/copy.ts`. Zmień, zapisz — serwer deweloperski przeładuje się automatycznie.

---

## 🇬🇧 English

### Prerequisites

1. **Node.js 20 or newer** — [nodejs.org](https://nodejs.org) (LTS is fine). Check with:
   ```bash
   node --version
   ```
2. **pnpm** (package manager) — one-time install:
   ```bash
   npm install -g pnpm
   ```
3. **Git** — [git-scm.com](https://git-scm.com)

### Clone and run — step by step

1. Open a terminal and go to the folder where the project should live:
   ```bash
   cd Desktop
   ```
2. Clone the repository:
   ```bash
   git clone https://github.com/rieckerrep/mkp-poland.git
   ```
3. Enter the project folder:
   ```bash
   cd mkp-poland
   ```
4. Install dependencies (about 1 minute on first run):
   ```bash
   pnpm install
   ```
5. Start the development server:
   ```bash
   pnpm dev
   ```
6. Open in your browser: **http://localhost:3100**

### Production build

```bash
pnpm build   # builds the static site
pnpm start   # starts the production server on port 3100
```

### Editing content

All copy for all five languages lives in **one** file: `content/copy.ts`. Edit, save — the dev server reloads automatically.

---

## Projektstruktur / Struktura / Structure

```
app/            Routen pro Sprache (/, /en, /de, /cs, /uk) + Layout + globals.css
components/     Sektionen: Hero, Problem, Circles, Becoming (Slider), Path, Nwta, Faq, Final
content/        copy.ts — alle Texte in 5 Sprachen + Locale-Liste
public/images/  Optimierte Fotos (JPEG, max. 1800 px)
```

## Hinweise / Uwagi / Notes

- `robots: noindex` ist im Root-Layout gesetzt — vor dem Livegang entfernen. / Usunąć przed startem produkcyjnym. / Remove before going live.
- NWTA: 2.–4. Oktober 2026, Kiczyce — Daten in `content/copy.ts`.
- Anmeldung aktuell per `mailto:` — später durch Formular ersetzbar.
