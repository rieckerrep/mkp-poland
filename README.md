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

### Auf Vercel veröffentlichen

1. Auf [vercel.com](https://vercel.com) mit dem GitHub-Konto anmelden.
2. **Add New → Project** und das Repository `rieckerrep/mkp-poland` importieren.
3. Framework-Erkennung, Build-Befehl und Ausgabeverzeichnis unverändert lassen — Vercel erkennt Next.js und pnpm automatisch.
4. Unter **Environment Variables** eintragen:
   | Name | Wert |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | die spätere Live-Adresse, z. B. `https://www.mkp-polska.pl` |
5. **Deploy** klicken.
6. Eigene Domain unter **Settings → Domains** hinzufügen. Danach `NEXT_PUBLIC_SITE_URL` auf genau diese Domain setzen und einmal neu deployen.

> **Wichtig:** Indexiert wird nur die Produktionsumgebung. Preview-Deployments bleiben automatisch auf `noindex`, damit sie nicht mit der Live-Seite konkurrieren.

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

### Publikacja na Vercel

1. Zaloguj się na [vercel.com](https://vercel.com) kontem GitHub.
2. **Add New → Project** i zaimportuj repozytorium `rieckerrep/mkp-poland`.
3. Zostaw domyślne ustawienia — Vercel sam wykryje Next.js i pnpm.
4. W **Environment Variables** dodaj:
   | Nazwa | Wartość |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | docelowy adres, np. `https://www.mkp-polska.pl` |
5. Kliknij **Deploy**.
6. Dodaj własną domenę w **Settings → Domains**. Następnie ustaw `NEXT_PUBLIC_SITE_URL` na tę domenę i wdróż ponownie.

> **Ważne:** Indeksowana jest tylko produkcja. Wdrożenia podglądowe (preview) automatycznie mają `noindex`.

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

### Deploy to Vercel

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account.
2. **Add New → Project** and import the `rieckerrep/mkp-poland` repository.
3. Leave the detected settings as they are — Vercel recognises Next.js and pnpm.
4. Under **Environment Variables** add:
   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | the final public address, e.g. `https://www.mkp-polska.pl` |
5. Click **Deploy**.
6. Add the custom domain under **Settings → Domains**, then set `NEXT_PUBLIC_SITE_URL` to that exact domain and redeploy once.

> **Important:** Only the production environment is indexed. Preview deployments stay on `noindex` automatically.

### Editing content

All copy for all five languages lives in **one** file: `content/copy.ts`. Edit, save — the dev server reloads automatically.

---

## SEO & GEO

Die Seite ist für klassische Suche **und** für generative Suchmaschinen vorbereitet.
Strona jest przygotowana pod klasyczne wyszukiwarki **i** wyszukiwarki generatywne.
The site is prepared for classic search **and** generative engines.

| Baustein | Umsetzung |
|---|---|
| `<html lang>` | serverseitig pro Sprache — jede Sprache hat eine eigene Route-Group |
| Canonical + hreflang | alle fünf Sprachen plus `x-default`, gegenseitig verlinkt |
| `sitemap.xml` | automatisch generiert, mit `xhtml:link`-Alternativen je Sprache |
| `robots.txt` | Produktion offen, Preview gesperrt; KI-Crawler ausdrücklich erlaubt |
| JSON-LD (`@graph`) | `NGO`, `WebSite`, `WebPage`, `Event` (NWTA), `Service`, `FAQPage` — pro Sprache übersetzt |
| `llms.txt` | Faktenblatt unter `/llms.txt` für generative Engines |
| Open Graph / Twitter | `og.jpg` (1200×630), Titel und Beschreibung je Sprache |
| Bilder | `next/image` mit AVIF/WebP, Hero mit `priority` |
| Sicherheits-Header | HSTS, `nosniff`, Referrer-Policy, Permissions-Policy |

### Nach dem ersten Deploy zu erledigen

1. Domain in der [Google Search Console](https://search.google.com/search-console) verifizieren und `sitemap.xml` einreichen.
2. Ergebnis mit dem [Rich Results Test](https://search.google.com/test/rich-results) prüfen (Event und FAQ).
3. Prüfen, dass `https://<domain>/robots.txt` **nicht** `Disallow: /` zeigt — sonst steht `NEXT_PUBLIC_SITE_URL` oder die Umgebung falsch.

### Fehlersuche: Startseite zeigt 404, Bilder laden aber

Symptom: `/llms.txt` und `/images/…` funktionieren, aber `/`, `/de` und `/robots.txt` liefern
`404: NOT_FOUND`. Ursache: Das Vercel-Projekt wurde ohne Framework-Preset angelegt („Other").
Dann läuft zwar `next build`, ausgeliefert wird aber nur der Ordner `public/`.

Die mitgelieferte `vercel.json` setzt `"framework": "nextjs"` und behebt das. Falls es
weiterhin auftritt, in Vercel unter **Settings → Build & Deployment** prüfen, dass
*Framework Preset* auf **Next.js** steht und *Output Directory* **nicht** überschrieben ist.

---

## Projektstruktur / Struktura / Structure

```
app/            Eine Route-Group je Sprache ((pl), (en), (de), (cs), (uk))
                + robots.ts, sitemap.ts, icon.svg, globals.css
components/     Sektionen: Hero, Problem, Circles, Becoming (Slider), Path,
                Nwta, Faq, Final + JsonLd, RootShell
content/        copy.ts — alle Texte in 5 Sprachen + Locale-Liste
lib/            seo.ts (Domain, Indexierung, Keywords), metadata.ts
public/         images/, og.jpg, llms.txt
```

## Hinweise / Uwagi / Notes

- NWTA: 2.–4. Oktober 2026, Kiczyce — Daten in `content/copy.ts` und `lib/seo.ts`.
- Anmeldung aktuell per `mailto:` — später durch ein Formular ersetzbar.
- `.env.example` zeigt alle verfügbaren Umgebungsvariablen.
