export type Locale = "pl" | "en" | "de" | "cs" | "uk";

export const locales: { code: Locale; label: string; href: string }[] = [
  { code: "pl", label: "Polski", href: "/" },
  { code: "en", label: "English", href: "/en" },
  { code: "de", label: "Deutsch", href: "/de" },
  { code: "cs", label: "Čeština", href: "/cs" },
  { code: "uk", label: "Українська", href: "/uk" },
];

export const copy = {
  pl: {
    nav: {
      circles: "Męskie kręgi",
      nwta: "Trening NWTA",
      about: "O nas",
      faq: "Pytania",
      contact: "Kontakt",
      cta: "Dołącz",
    },
    hero: {
      label: "The ManKind Project · Polska",
      h1a: "Odbuduj swoją siłę.",
      h1b: "We wspólnocie.",
      lead: "Męskie kręgi i trening inicjacyjny NWTA. Miejsce, w którym mężczyźni mówią prawdę o swoim życiu — i słuchają siebie nawzajem. Bez oceniania. Bez naprawiania.",
      primary: "Trening NWTA · październik 2026",
      secondary: "Poznaj męskie kręgi",
      event: "2–4 października 2026 · Kiczyce, Śląsk Cieszyński",
      scroll: "Przewiń",
    },
    stats: [
      { value: 1985, prefix: "od ", suffix: "", label: "roku istnieje ManKind Project" },
      { value: 70000, prefix: "", suffix: "+", label: "mężczyzn przeszło trening NWTA" },
      { value: 27, prefix: "", suffix: "", label: "krajów na całym świecie" },
    ],
    problem: {
      label: "Dlaczego tu jesteśmy",
      h2a: "Masz pracę, rodzinę, obowiązki.",
      h2b: "I nikogo, komu mówisz całą prawdę.",
      lead: "Współczesny mężczyzna rzadko ma miejsce, w którym nie musi być silny, zabawny ani skuteczny. W którym może po prostu powiedzieć, jak jest.",
      cards: [
        {
          title: "Na zewnątrz wszystko gra.",
          text: "Praca idzie, dom stoi, plany się domykają. A w środku od dawna nosisz coś, czego nikt nie widzi.",
        },
        {
          title: "Rozmowy są o wszystkim — poza tym, co ważne.",
          text: "Sport, polityka, robota. Godziny rozmów, po których dalej jesteś sam ze swoimi sprawami.",
        },
        {
          title: "Zostaje złość albo cisza.",
          text: "Kiedy brakuje słów na to, co czujesz, wychodzi to bokiem — w domu, w pracy, w nocy przed sufitem.",
        },
        {
          title: "Sam już próbowałeś.",
          text: "Książki, podcasty, postanowienia. Wiedza jest. Brakuje ludzi, przy których da się ją przeżyć.",
        },
      ],
      punchA: "Mówienie o lęku nie jest słabością.",
      punchB: "Jest aktem odwagi.",
    },
    circles: {
      label: "Męskie kręgi",
      h2: "Raz w tygodniu. Krąg mężczyzn. Prawdziwa rozmowa.",
      lead: "Krąg to stała, zamknięta grupa mężczyzn, która spotyka się według jasnej struktury. Każdy ma czas, żeby mówić. Reszta słucha — naprawdę słucha.",
      features: [
        {
          title: "Stały rytm",
          text: "Cotygodniowe spotkania w tym samym gronie. Zaufanie buduje się przez powtarzalność, nie przez przypadek.",
        },
        {
          title: "Jasna struktura",
          text: "Krąg ma zasady i przebieg. To one dają bezpieczeństwo, żeby mówić o rzeczach, o których nigdzie indziej się nie mówi.",
        },
        {
          title: "Poufność",
          text: "To, co zostaje powiedziane w kręgu, zostaje w kręgu. Bez wyjątków.",
        },
        {
          title: "Równość",
          text: "Kręgi prowadzą sami uczestnicy. Nie ma guru, nie ma widowni. Jest grupa mężczyzn, którzy traktują siebie poważnie.",
        },
      ],
      noFixing: {
        label: "Zasada №1 · No Fixing",
        title: "Słuchamy. Nie naprawiamy.",
        text: "W kręgu nikt nie przerywa ci dobrą radą. Kiedy mówisz, masz pełną uwagę grupy — bez pouczania, bez porównywania, bez „ja na twoim miejscu”. Okazuje się, że to zmienia wszystko.",
      },
      cta: "Napisz i dołącz do kręgu",
    },
    becoming: {
      label: "Po co ta praca",
      h2a: "Nie robisz tego tylko dla siebie.",
      h2b: "Robisz to dla ludzi, którzy cię potrzebują.",
      lead: "Kiedy ty rośniesz, rośnie wszystko wokół ciebie. Twoje relacje. Twój dom. Twoja praca.",
      cards: [
        { img: "/images/vater.jpg", label: "Lepszy ojciec" },
        { img: "/images/herz-mit-sonne.jpg", label: "Lepszy partner" },
        { img: "/images/gruppe-von-maennern.jpg", label: "Lepszy brat" },
        { img: "/images/erziehung.jpg", label: "Lepszy syn" },
        { img: "/images/business-und-beruf.jpg", label: "Lepszy lider" },
      ],
    },
    path: {
      label: "Droga w MKP",
      h2: "Trzy kroki. Każdy w swoim tempie.",
      steps: [
        {
          num: "01",
          title: "Przyjdź do kręgu",
          text: "Pierwszy krok to zwykłe spotkanie. Przychodzisz, słuchasz, mówisz tyle, ile chcesz. Nic więcej nie musisz.",
        },
        {
          num: "02",
          title: "Przejdź trening NWTA",
          text: "Weekendowy trening inicjacyjny — 48 godzin poza strefą komfortu, w oparciu o klasyczną drogę bohatera. Dla wielu mężczyzn najmocniejsze doświadczenie rozwojowe w życiu.",
        },
        {
          num: "03",
          title: "Integruj we wspólnocie",
          text: "Po treningu wracasz do kręgu — grupy integracyjnej, w której to, co przeżyłeś, staje się codzienną praktyką: uczciwością, odpowiedzialnością, integralnością.",
        },
      ],
    },
    nwta: {
      label: "New Warrior Training Adventure",
      h2a: "Nowoczesna inicjacja.",
      h2b: "48 godzin, które zostają na całe życie.",
      lead: "NWTA to weekendowy trening inicjacyjny ManKind Project — droga bohatera przełożona na współczesne życie mężczyzny. Nie wykład i nie warsztat motywacyjny. Doświadczenie.",
      facts: [
        { k: "Termin", v: "2–4 października 2026" },
        { k: "Miejsce", v: "Kiczyce, Śląsk Cieszyński" },
        { k: "Prowadzenie", v: "Thomas Filler i międzynarodowy zespół MKP" },
        { k: "Język", v: "angielski, z tłumaczami na miejscu" },
      ],
      body: "Trening prowadzi doświadczony, międzynarodowy zespół mężczyzn, którzy sami przeszli tę drogę. Nie musisz nikogo znać i nie musisz być „gotowy”. Wystarczy decyzja.",
      cta: "Zgłoś się na trening",
      note: "Po zgłoszeniu odezwiemy się i spokojnie odpowiemy na wszystkie pytania.",
    },
    faq: {
      label: "Pytania",
      h2: "To, o co pytają mężczyźni przed pierwszym spotkaniem.",
      items: [
        {
          q: "Czy to terapia?",
          a: "Nie. Krąg nie zastępuje terapii ani leczenia. To praca rozwojowa we wspólnocie mężczyzn — wielu uczestników łączy ją z terapią, ale to dwie różne rzeczy.",
        },
        {
          q: "Czy muszę mówić o sobie?",
          a: "Nie. Mówisz tyle, ile chcesz. Samo słuchanie innych mężczyzn, którzy mówią szczerze, bywa na początku najważniejszym doświadczeniem.",
        },
        {
          q: "Czy to organizacja religijna albo polityczna?",
          a: "Nie. ManKind Project jest niezależną organizacją non-profit, otwartą dla mężczyzn każdego pochodzenia, wyznania i światopoglądu.",
        },
        {
          q: "Nie znam nikogo. Mogę przyjść sam?",
          a: "Tak — prawie każdy z nas tak zaczynał. Napisz wcześniej, umówimy pierwszy kontakt i wszystko wyjaśnimy.",
        },
        {
          q: "Czym różni się krąg od treningu NWTA?",
          a: "Krąg to cotygodniowa, stała praktyka. NWTA to jednorazowy weekendowy trening inicjacyjny. Można zacząć od jednego albo od drugiego — obie drogi prowadzą do tej samej wspólnoty.",
        },
      ],
    },
    final: {
      h2a: "Następny krok jest prosty.",
      h2b: "Jedna wiadomość.",
      lead: "Napisz albo zadzwoń. Odpowie Marek z Krakowa — bez zobowiązań, bez namawiania. Po prostu rozmowa dwóch mężczyzn.",
      person: "Marek · MKP Polska · Kraków",
      email: "marek@mkp-polska.pl",
      phone: "+48 784 601 018",
      cta: "Napisz do nas",
      call: "Zadzwoń",
    },
    footer: {
      mission:
        "„Wierzymy, że dojrzali emocjonalnie, silni, współczujący i świadomi swojego celu mężczyźni pomogą uleczyć najgłębsze rany naszego społeczeństwa.”",
      missionSrc: "— Misja The ManKind Project",
      links: [
        { label: "mankindproject.org", href: "https://mankindproject.org" },
        { label: "MKP Deutschland", href: "https://www.mkp-deutschland.de" },
        { label: "MKP Polska", href: "https://www.mkp-polska.pl" },
      ],
      note: "The ManKind Project jest organizacją non-profit działającą w 27 krajach.",
    },
  },
  en: {
    nav: {
      circles: "Men's circles",
      nwta: "NWTA Training",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      cta: "Join",
    },
    hero: {
      label: "The ManKind Project · Poland",
      h1a: "Rebuild your strength.",
      h1b: "In community.",
      lead: "Men's circles and the NWTA initiation training. A place where men tell the truth about their lives — and truly listen to each other. No judging. No fixing.",
      primary: "NWTA Training · October 2026",
      secondary: "Explore men's circles",
      event: "October 2–4, 2026 · Kiczyce, Cieszyn Silesia, Poland",
      scroll: "Scroll",
    },
    stats: [
      { value: 1985, prefix: "since ", suffix: "", label: "the ManKind Project exists" },
      { value: 70000, prefix: "", suffix: "+", label: "men have completed the NWTA" },
      { value: 27, prefix: "", suffix: "", label: "countries worldwide" },
    ],
    problem: {
      label: "Why we are here",
      h2a: "You have a job, a family, responsibilities.",
      h2b: "And no one you tell the whole truth.",
      lead: "The modern man rarely has a place where he doesn't have to be strong, funny or effective. Where he can simply say how things really are.",
      cards: [
        {
          title: "On the outside, everything is fine.",
          text: "Work is running, the house is standing, plans are on track. And inside you've been carrying something no one sees.",
        },
        {
          title: "Conversations about everything — except what matters.",
          text: "Sports, politics, work. Hours of talking, after which you are still alone with what's really going on.",
        },
        {
          title: "What's left is anger or silence.",
          text: "When the words for what you feel are missing, it comes out sideways — at home, at work, at night staring at the ceiling.",
        },
        {
          title: "You've already tried alone.",
          text: "Books, podcasts, resolutions. The knowledge is there. What's missing are men to live it with.",
        },
      ],
      punchA: "Speaking about fear is not weakness.",
      punchB: "It is an act of courage.",
    },
    circles: {
      label: "Men's circles",
      h2: "Once a week. A circle of men. A real conversation.",
      lead: "A circle is a committed, closed group of men that meets with a clear structure. Every man gets time to speak. The rest listen — truly listen.",
      features: [
        {
          title: "A steady rhythm",
          text: "Weekly meetings with the same men. Trust is built through consistency, not by chance.",
        },
        {
          title: "A clear structure",
          text: "The circle has rules and a defined flow. That is what makes it safe to speak about things you don't speak about anywhere else.",
        },
        {
          title: "Confidentiality",
          text: "What is said in the circle stays in the circle. No exceptions.",
        },
        {
          title: "Peer-led",
          text: "Circles are facilitated by the men themselves. No guru, no audience. A group of men who take each other seriously.",
        },
      ],
      noFixing: {
        label: "Rule №1 · No Fixing",
        title: "We listen. We don't fix.",
        text: "In a circle, no one interrupts you with good advice. When you speak, you have the group's full attention — no lecturing, no comparing, no \"if I were you\". It turns out that changes everything.",
      },
      cta: "Write us and join a circle",
    },
    becoming: {
      label: "What this work is for",
      h2a: "You don't do this only for yourself.",
      h2b: "You do it for the people who need you.",
      lead: "When you grow, everything around you grows. Your relationships. Your home. Your work.",
      cards: [
        { img: "/images/vater.jpg", label: "A better father" },
        { img: "/images/herz-mit-sonne.jpg", label: "A better partner" },
        { img: "/images/gruppe-von-maennern.jpg", label: "A better brother" },
        { img: "/images/erziehung.jpg", label: "A better son" },
        { img: "/images/business-und-beruf.jpg", label: "A better leader" },
      ],
    },
    path: {
      label: "The path in MKP",
      h2: "Three steps. Each at your own pace.",
      steps: [
        {
          num: "01",
          title: "Come to a circle",
          text: "The first step is an ordinary meeting. You come, you listen, you share as much as you want. Nothing more is required.",
        },
        {
          num: "02",
          title: "Do the NWTA training",
          text: "A weekend initiation training — 48 hours outside your comfort zone, built on the classic hero's journey. For many men the most powerful growth experience of their lives.",
        },
        {
          num: "03",
          title: "Integrate in community",
          text: "After the training you return to a circle — an integration group where what you experienced becomes daily practice: honesty, accountability, integrity.",
        },
      ],
    },
    nwta: {
      label: "New Warrior Training Adventure",
      h2a: "A modern initiation.",
      h2b: "48 hours that stay for life.",
      lead: "The NWTA is the ManKind Project's weekend initiation training — the hero's journey translated into the life of a modern man. Not a lecture, not a motivational workshop. An experience.",
      facts: [
        { k: "Date", v: "October 2–4, 2026" },
        { k: "Location", v: "Kiczyce, Cieszyn Silesia, Poland" },
        { k: "Led by", v: "Thomas Filler and an international MKP staff" },
        { k: "Language", v: "English, with translators on site" },
      ],
      body: "The training is led by an experienced international team of men who have walked this path themselves. You don't need to know anyone, and you don't need to feel \"ready\". A decision is enough.",
      cta: "Apply for the training",
      note: "After you apply, we will get in touch and calmly answer all your questions.",
    },
    faq: {
      label: "FAQ",
      h2: "What men ask before their first meeting.",
      items: [
        {
          q: "Is this therapy?",
          a: "No. A circle does not replace therapy or treatment. It is personal growth work in a community of men — many participants combine it with therapy, but they are two different things.",
        },
        {
          q: "Do I have to talk about myself?",
          a: "No. You share as much as you want. Simply listening to other men speaking honestly is often the most important experience at the beginning.",
        },
        {
          q: "Is this a religious or political organization?",
          a: "No. The ManKind Project is an independent nonprofit, open to men of every background, faith and worldview.",
        },
        {
          q: "I don't know anyone. Can I come alone?",
          a: "Yes — almost every one of us started that way. Write to us beforehand, we will arrange a first contact and explain everything.",
        },
        {
          q: "What is the difference between a circle and the NWTA?",
          a: "A circle is a weekly, ongoing practice. The NWTA is a one-time weekend initiation training. You can start with either — both paths lead to the same community.",
        },
      ],
    },
    final: {
      h2a: "The next step is simple.",
      h2b: "One message.",
      lead: "Write or call. Marek from Kraków will answer — no obligations, no persuasion. Just a conversation between two men.",
      person: "Marek · MKP Poland · Kraków",
      email: "marek@mkp-polska.pl",
      phone: "+48 784 601 018",
      cta: "Write to us",
      call: "Call",
    },
    footer: {
      mission:
        "“We believe that emotionally mature, powerful, compassionate, and purpose-driven men will help heal some of our society's deepest wounds.”",
      missionSrc: "— The ManKind Project mission",
      links: [
        { label: "mankindproject.org", href: "https://mankindproject.org" },
        { label: "MKP Germany", href: "https://www.mkp-deutschland.de" },
        { label: "MKP Poland", href: "https://www.mkp-polska.pl" },
      ],
      note: "The ManKind Project is a nonprofit organization active in 27 countries.",
    },
  },
  de: {
    nav: {
      circles: "Männerkreise",
      nwta: "NWTA-Training",
      about: "Über uns",
      faq: "Fragen",
      contact: "Kontakt",
      cta: "Mitmachen",
    },
    hero: {
      label: "The ManKind Project · Polen",
      h1a: "Bau deine Stärke wieder auf.",
      h1b: "In Gemeinschaft.",
      lead: "Männerkreise und das Initiationstraining NWTA. Ein Ort, an dem Männer die Wahrheit über ihr Leben aussprechen — und einander wirklich zuhören. Ohne Bewertung. Ohne Ratschläge.",
      primary: "NWTA-Training · Oktober 2026",
      secondary: "Männerkreise kennenlernen",
      event: "2.–4. Oktober 2026 · Kiczyce, Teschener Schlesien (Polen)",
      scroll: "Scrollen",
    },
    stats: [
      { value: 1985, prefix: "seit ", suffix: "", label: "besteht das ManKind Project" },
      { value: 70000, prefix: "", suffix: "+", label: "Männer haben das NWTA durchlaufen" },
      { value: 27, prefix: "", suffix: "", label: "Länder weltweit" },
    ],
    problem: {
      label: "Warum es uns gibt",
      h2a: "Du hast einen Job, eine Familie, Verantwortung.",
      h2b: "Und niemanden, dem du die ganze Wahrheit sagst.",
      lead: "Der moderne Mann hat selten einen Ort, an dem er nicht stark, witzig oder leistungsfähig sein muss. An dem er einfach sagen kann, wie es wirklich ist.",
      cards: [
        {
          title: "Nach außen läuft alles.",
          text: "Der Job läuft, das Haus steht, die Pläne gehen auf. Und innen trägst du seit Langem etwas, das niemand sieht.",
        },
        {
          title: "Gespräche über alles — außer über das, was zählt.",
          text: "Sport, Politik, Arbeit. Stundenlange Gespräche, nach denen du mit deinen Themen trotzdem allein bist.",
        },
        {
          title: "Was bleibt, ist Wut oder Schweigen.",
          text: "Wenn die Worte für das fehlen, was du fühlst, bricht es sich einen anderen Weg — zu Hause, im Job, nachts an der Zimmerdecke.",
        },
        {
          title: "Allein hast du es schon versucht.",
          text: "Bücher, Podcasts, Vorsätze. Das Wissen ist da. Was fehlt, sind Männer, mit denen du es leben kannst.",
        },
      ],
      punchA: "Über Angst zu sprechen ist keine Schwäche.",
      punchB: "Es ist ein Akt von Mut.",
    },
    circles: {
      label: "Männerkreise",
      h2: "Einmal pro Woche. Ein Kreis von Männern. Ein echtes Gespräch.",
      lead: "Ein Kreis ist eine feste, geschlossene Gruppe von Männern, die sich mit klarer Struktur trifft. Jeder bekommt Zeit zu sprechen. Die anderen hören zu — wirklich zu.",
      features: [
        {
          title: "Fester Rhythmus",
          text: "Wöchentliche Treffen im selben Kreis. Vertrauen entsteht durch Verlässlichkeit, nicht durch Zufall.",
        },
        {
          title: "Klare Struktur",
          text: "Der Kreis hat Regeln und einen Ablauf. Genau das macht es sicher, über Dinge zu sprechen, über die man sonst nirgends spricht.",
        },
        {
          title: "Vertraulichkeit",
          text: "Was im Kreis gesagt wird, bleibt im Kreis. Ohne Ausnahme.",
        },
        {
          title: "Auf Augenhöhe",
          text: "Die Kreise werden von den Männern selbst geleitet. Kein Guru, kein Publikum. Eine Gruppe von Männern, die einander ernst nimmt.",
        },
      ],
      noFixing: {
        label: "Regel Nr. 1 · No Fixing",
        title: "Wir hören zu. Wir reparieren nicht.",
        text: "Im Kreis unterbricht dich niemand mit einem gut gemeinten Ratschlag. Wenn du sprichst, hast du die volle Aufmerksamkeit der Gruppe — ohne Belehrung, ohne Vergleiche, ohne „ich an deiner Stelle“. Es zeigt sich: Genau das verändert alles.",
      },
      cta: "Schreib uns und komm in einen Kreis",
    },
    becoming: {
      label: "Wofür diese Arbeit",
      h2a: "Du tust das nicht nur für dich.",
      h2b: "Du tust es für die Menschen, die dich brauchen.",
      lead: "Wenn du wächst, wächst alles um dich herum. Deine Beziehungen. Dein Zuhause. Deine Arbeit.",
      cards: [
        { img: "/images/vater.jpg", label: "Ein besserer Vater" },
        { img: "/images/herz-mit-sonne.jpg", label: "Ein besserer Partner" },
        { img: "/images/gruppe-von-maennern.jpg", label: "Ein besserer Bruder" },
        { img: "/images/erziehung.jpg", label: "Ein besserer Sohn" },
        { img: "/images/business-und-beruf.jpg", label: "Eine bessere Führungskraft" },
      ],
    },
    path: {
      label: "Der Weg im MKP",
      h2: "Drei Schritte. Jeder in deinem Tempo.",
      steps: [
        {
          num: "01",
          title: "Komm in einen Kreis",
          text: "Der erste Schritt ist ein gewöhnliches Treffen. Du kommst, hörst zu und sagst so viel, wie du willst. Mehr musst du nicht.",
        },
        {
          num: "02",
          title: "Durchlaufe das NWTA",
          text: "Ein Initiationstraining an einem Wochenende — 48 Stunden außerhalb der Komfortzone, aufgebaut auf der klassischen Heldenreise. Für viele Männer die stärkste Entwicklungserfahrung ihres Lebens.",
        },
        {
          num: "03",
          title: "Integriere in Gemeinschaft",
          text: "Nach dem Training kehrst du in einen Kreis zurück — eine Integrationsgruppe, in der das Erlebte zur täglichen Praxis wird: Ehrlichkeit, Verantwortung, Integrität.",
        },
      ],
    },
    nwta: {
      label: "New Warrior Training Adventure",
      h2a: "Eine moderne Initiation.",
      h2b: "48 Stunden, die ein Leben lang bleiben.",
      lead: "Das NWTA ist das Wochenend-Initiationstraining des ManKind Project — die Heldenreise, übersetzt in das Leben eines modernen Mannes. Kein Vortrag, kein Motivationsworkshop. Eine Erfahrung.",
      facts: [
        { k: "Termin", v: "2.–4. Oktober 2026" },
        { k: "Ort", v: "Kiczyce, Teschener Schlesien (Polen)" },
        { k: "Leitung", v: "Thomas Filler und ein internationales MKP-Team" },
        { k: "Sprache", v: "Englisch, mit Übersetzern vor Ort" },
      ],
      body: "Das Training leitet ein erfahrenes internationales Team von Männern, die diesen Weg selbst gegangen sind. Du musst niemanden kennen und dich nicht „bereit“ fühlen. Eine Entscheidung genügt.",
      cta: "Zum Training anmelden",
      note: "Nach deiner Anmeldung melden wir uns und beantworten in Ruhe alle Fragen.",
    },
    faq: {
      label: "Fragen",
      h2: "Was Männer vor dem ersten Treffen fragen.",
      items: [
        {
          q: "Ist das Therapie?",
          a: "Nein. Ein Kreis ersetzt keine Therapie und keine Behandlung. Es ist Entwicklungsarbeit in einer Gemeinschaft von Männern — viele verbinden sie mit einer Therapie, aber es sind zwei verschiedene Dinge.",
        },
        {
          q: "Muss ich über mich sprechen?",
          a: "Nein. Du teilst so viel, wie du willst. Anderen Männern zuzuhören, die ehrlich sprechen, ist am Anfang oft die wichtigste Erfahrung.",
        },
        {
          q: "Ist das eine religiöse oder politische Organisation?",
          a: "Nein. Das ManKind Project ist eine unabhängige Non-Profit-Organisation, offen für Männer jeder Herkunft, jedes Glaubens und jeder Weltanschauung.",
        },
        {
          q: "Ich kenne niemanden. Kann ich allein kommen?",
          a: "Ja — fast jeder von uns hat so angefangen. Schreib uns vorher, wir vereinbaren einen ersten Kontakt und erklären alles.",
        },
        {
          q: "Was unterscheidet den Kreis vom NWTA?",
          a: "Der Kreis ist eine wöchentliche, dauerhafte Praxis. Das NWTA ist ein einmaliges Wochenendtraining. Du kannst mit beidem beginnen — beide Wege führen in dieselbe Gemeinschaft.",
        },
      ],
    },
    final: {
      h2a: "Der nächste Schritt ist einfach.",
      h2b: "Eine Nachricht.",
      lead: "Schreib oder ruf an. Es antwortet Marek aus Krakau — ohne Verpflichtung, ohne Überredung. Einfach ein Gespräch zwischen zwei Männern.",
      person: "Marek · MKP Polska · Krakau",
      email: "marek@mkp-polska.pl",
      phone: "+48 784 601 018",
      cta: "Schreib uns",
      call: "Anrufen",
    },
    footer: {
      mission:
        "„Wir glauben, dass emotional reife, starke, mitfühlende und sinngeleitete Männer helfen werden, einige der tiefsten Wunden unserer Gesellschaft zu heilen.“",
      missionSrc: "— Mission des ManKind Project",
      links: [
        { label: "mankindproject.org", href: "https://mankindproject.org" },
        { label: "MKP Deutschland", href: "https://www.mkp-deutschland.de" },
        { label: "MKP Polska", href: "https://www.mkp-polska.pl" },
      ],
      note: "Das ManKind Project ist eine Non-Profit-Organisation, aktiv in 27 Ländern.",
    },
  },
  cs: {
    nav: {
      circles: "Mužské kruhy",
      nwta: "Trénink NWTA",
      about: "O nás",
      faq: "Otázky",
      contact: "Kontakt",
      cta: "Přidej se",
    },
    hero: {
      label: "The ManKind Project · Polsko",
      h1a: "Obnov svou sílu.",
      h1b: "Ve společenství.",
      lead: "Mužské kruhy a iniciační trénink NWTA. Místo, kde muži říkají pravdu o svém životě — a skutečně si naslouchají. Bez hodnocení. Bez oprav.",
      primary: "Trénink NWTA · říjen 2026",
      secondary: "Poznej mužské kruhy",
      event: "2.–4. října 2026 · Kiczyce, Těšínské Slezsko (Polsko)",
      scroll: "Posunout",
    },
    stats: [
      { value: 1985, prefix: "od ", suffix: "", label: "roku existuje ManKind Project" },
      { value: 70000, prefix: "", suffix: "+", label: "mužů prošlo tréninkem NWTA" },
      { value: 27, prefix: "", suffix: "", label: "zemí po celém světě" },
    ],
    problem: {
      label: "Proč tu jsme",
      h2a: "Máš práci, rodinu, povinnosti.",
      h2b: "A nikoho, komu říkáš celou pravdu.",
      lead: "Moderní muž má málokdy místo, kde nemusí být silný, vtipný ani výkonný. Kde může prostě říct, jak to je.",
      cards: [
        {
          title: "Navenek všechno funguje.",
          text: "Práce jde, dům stojí, plány vycházejí. A uvnitř už dlouho neseš něco, co nikdo nevidí.",
        },
        {
          title: "Rozhovory o všem — kromě toho, na čem záleží.",
          text: "Sport, politika, práce. Hodiny řečí, po kterých jsi se svými věcmi pořád sám.",
        },
        {
          title: "Zůstává vztek, nebo ticho.",
          text: "Když chybí slova pro to, co cítíš, vychází to bokem — doma, v práci, v noci před stropem.",
        },
        {
          title: "Sám už jsi to zkoušel.",
          text: "Knihy, podcasty, předsevzetí. Vědění je. Chybí muži, se kterými se to dá žít.",
        },
      ],
      punchA: "Mluvit o strachu není slabost.",
      punchB: "Je to akt odvahy.",
    },
    circles: {
      label: "Mužské kruhy",
      h2: "Jednou týdně. Kruh mužů. Skutečný rozhovor.",
      lead: "Kruh je stálá, uzavřená skupina mužů, která se schází podle jasné struktury. Každý má čas mluvit. Ostatní naslouchají — opravdu naslouchají.",
      features: [
        {
          title: "Stálý rytmus",
          text: "Týdenní setkání ve stejné skupině. Důvěra se buduje opakováním, ne náhodou.",
        },
        {
          title: "Jasná struktura",
          text: "Kruh má pravidla a průběh. Právě ty dávají bezpečí mluvit o věcech, o kterých se jinde nemluví.",
        },
        {
          title: "Důvěrnost",
          text: "Co se v kruhu řekne, zůstává v kruhu. Bez výjimek.",
        },
        {
          title: "Rovnost",
          text: "Kruhy vedou sami účastníci. Žádný guru, žádné publikum. Skupina mužů, kteří se navzájem berou vážně.",
        },
      ],
      noFixing: {
        label: "Pravidlo č. 1 · No Fixing",
        title: "Nasloucháme. Neopravujeme.",
        text: "V kruhu tě nikdo nepřeruší dobrou radou. Když mluvíš, máš plnou pozornost skupiny — bez poučování, bez srovnávání, bez „já být tebou“. Ukazuje se, že právě to mění všechno.",
      },
      cta: "Napiš nám a přidej se ke kruhu",
    },
    becoming: {
      label: "K čemu ta práce je",
      h2a: "Neděláš to jen pro sebe.",
      h2b: "Děláš to pro lidi, kteří tě potřebují.",
      lead: "Když rosteš ty, roste všechno kolem tebe. Tvoje vztahy. Tvůj domov. Tvoje práce.",
      cards: [
        { img: "/images/vater.jpg", label: "Lepší otec" },
        { img: "/images/herz-mit-sonne.jpg", label: "Lepší partner" },
        { img: "/images/gruppe-von-maennern.jpg", label: "Lepší bratr" },
        { img: "/images/erziehung.jpg", label: "Lepší syn" },
        { img: "/images/business-und-beruf.jpg", label: "Lepší lídr" },
      ],
    },
    path: {
      label: "Cesta v MKP",
      h2: "Tři kroky. Každý svým tempem.",
      steps: [
        {
          num: "01",
          title: "Přijď do kruhu",
          text: "První krok je obyčejné setkání. Přijdeš, posloucháš a řekneš tolik, kolik chceš. Nic víc nemusíš.",
        },
        {
          num: "02",
          title: "Projdi tréninkem NWTA",
          text: "Víkendový iniciační trénink — 48 hodin mimo komfortní zónu, postavený na klasické cestě hrdiny. Pro mnoho mužů nejsilnější rozvojová zkušenost života.",
        },
        {
          num: "03",
          title: "Integruj ve společenství",
          text: "Po tréninku se vracíš do kruhu — integrační skupiny, kde se prožité stává každodenní praxí: upřímností, odpovědností, integritou.",
        },
      ],
    },
    nwta: {
      label: "New Warrior Training Adventure",
      h2a: "Moderní iniciace.",
      h2b: "48 hodin, které zůstanou na celý život.",
      lead: "NWTA je víkendový iniciační trénink ManKind Project — cesta hrdiny přeložená do života moderního muže. Ne přednáška, ne motivační workshop. Zkušenost.",
      facts: [
        { k: "Termín", v: "2.–4. října 2026" },
        { k: "Místo", v: "Kiczyce, Těšínské Slezsko (Polsko)" },
        { k: "Vedení", v: "Thomas Filler a mezinárodní tým MKP" },
        { k: "Jazyk", v: "angličtina, s překladateli na místě" },
      ],
      body: "Trénink vede zkušený mezinárodní tým mužů, kteří touto cestou sami prošli. Nemusíš nikoho znát a nemusíš se cítit „připravený“. Stačí rozhodnutí.",
      cta: "Přihlas se na trénink",
      note: "Po přihlášení se ozveme a v klidu odpovíme na všechny otázky.",
    },
    faq: {
      label: "Otázky",
      h2: "Na co se muži ptají před prvním setkáním.",
      items: [
        {
          q: "Je to terapie?",
          a: "Ne. Kruh nenahrazuje terapii ani léčbu. Je to rozvojová práce ve společenství mužů — mnoho účastníků ji kombinuje s terapií, ale jsou to dvě různé věci.",
        },
        {
          q: "Musím o sobě mluvit?",
          a: "Ne. Sdílíš tolik, kolik chceš. Naslouchat jiným mužům, kteří mluví upřímně, bývá na začátku tou nejdůležitější zkušeností.",
        },
        {
          q: "Je to náboženská nebo politická organizace?",
          a: "Ne. ManKind Project je nezávislá nezisková organizace, otevřená mužům každého původu, vyznání i světonázoru.",
        },
        {
          q: "Nikoho neznám. Můžu přijít sám?",
          a: "Ano — skoro každý z nás tak začínal. Napiš nám předem, domluvíme první kontakt a všechno vysvětlíme.",
        },
        {
          q: "Jaký je rozdíl mezi kruhem a tréninkem NWTA?",
          a: "Kruh je týdenní, stálá praxe. NWTA je jednorázový víkendový iniciační trénink. Můžeš začít jedním i druhým — obě cesty vedou do stejného společenství.",
        },
      ],
    },
    final: {
      h2a: "Další krok je jednoduchý.",
      h2b: "Jedna zpráva.",
      lead: "Napiš nebo zavolej. Odpoví Marek z Krakova — bez závazků, bez přemlouvání. Prostě rozhovor dvou mužů.",
      person: "Marek · MKP Polsko · Krakov",
      email: "marek@mkp-polska.pl",
      phone: "+48 784 601 018",
      cta: "Napiš nám",
      call: "Zavolej",
    },
    footer: {
      mission:
        "„Věříme, že emocionálně zralí, silní, soucitní a smysluplně žijící muži pomohou zahojit některé z nejhlubších ran naší společnosti.“",
      missionSrc: "— Mise The ManKind Project",
      links: [
        { label: "mankindproject.org", href: "https://mankindproject.org" },
        { label: "MKP Německo", href: "https://www.mkp-deutschland.de" },
        { label: "MKP Polsko", href: "https://www.mkp-polska.pl" },
      ],
      note: "The ManKind Project je nezisková organizace působící ve 27 zemích.",
    },
  },
  uk: {
    nav: {
      circles: "Чоловічі кола",
      nwta: "Тренінг NWTA",
      about: "Про нас",
      faq: "Запитання",
      contact: "Контакт",
      cta: "Долучитися",
    },
    hero: {
      label: "The ManKind Project · Польща",
      h1a: "Віднови свою силу.",
      h1b: "У спільноті.",
      lead: "Чоловічі кола та ініціаційний тренінг NWTA. Місце, де чоловіки говорять правду про своє життя — і по-справжньому слухають одне одного. Без оцінок. Без порад.",
      primary: "Тренінг NWTA · жовтень 2026",
      secondary: "Дізнатися про чоловічі кола",
      event: "2–4 жовтня 2026 · Кічице, Тешинська Сілезія (Польща)",
      scroll: "Гортай",
    },
    stats: [
      { value: 1985, prefix: "з ", suffix: "", label: "року існує ManKind Project" },
      { value: 70000, prefix: "", suffix: "+", label: "чоловіків пройшли тренінг NWTA" },
      { value: 27, prefix: "", suffix: "", label: "країн по всьому світу" },
    ],
    problem: {
      label: "Чому ми тут",
      h2a: "У тебе є робота, сім'я, обов'язки.",
      h2b: "І нікого, кому ти кажеш усю правду.",
      lead: "Сучасний чоловік рідко має місце, де не треба бути сильним, дотепним чи ефективним. Де можна просто сказати, як є насправді.",
      cards: [
        {
          title: "Зовні все гаразд.",
          text: "Робота йде, дім стоїть, плани складаються. А всередині ти давно носиш те, чого ніхто не бачить.",
        },
        {
          title: "Розмови про все — крім головного.",
          text: "Спорт, політика, робота. Години розмов, після яких ти й далі сам зі своїм.",
        },
        {
          title: "Залишається злість або мовчання.",
          text: "Коли бракує слів для того, що відчуваєш, воно виходить боком — удома, на роботі, вночі перед стелею.",
        },
        {
          title: "Сам ти вже пробував.",
          text: "Книжки, подкасти, обіцянки собі. Знання є. Бракує чоловіків, поруч з якими це можна прожити.",
        },
      ],
      punchA: "Говорити про страх — не слабкість.",
      punchB: "Це акт мужності.",
    },
    circles: {
      label: "Чоловічі кола",
      h2: "Раз на тиждень. Коло чоловіків. Справжня розмова.",
      lead: "Коло — це стала, закрита група чоловіків, що зустрічається за чіткою структурою. Кожен має час говорити. Решта слухає — по-справжньому слухає.",
      features: [
        {
          title: "Сталий ритм",
          text: "Щотижневі зустрічі в одному складі. Довіра будується на повторюваності, а не на випадку.",
        },
        {
          title: "Чітка структура",
          text: "У кола є правила та перебіг. Саме вони дають безпеку говорити про те, про що більше ніде не говорять.",
        },
        {
          title: "Конфіденційність",
          text: "Сказане в колі залишається в колі. Без винятків.",
        },
        {
          title: "Рівність",
          text: "Кола ведуть самі учасники. Немає гуру, немає глядачів. Є група чоловіків, які ставляться одне до одного серйозно.",
        },
      ],
      noFixing: {
        label: "Правило №1 · No Fixing",
        title: "Ми слухаємо. Ми не виправляємо.",
        text: "У колі ніхто не перебиває тебе доброю порадою. Коли ти говориш, у тебе повна увага групи — без повчань, без порівнянь, без «я б на твоєму місці». Виявляється, саме це змінює все.",
      },
      cta: "Напиши нам і приєднайся до кола",
    },
    becoming: {
      label: "Навіщо ця робота",
      h2a: "Ти робиш це не лише для себе.",
      h2b: "Ти робиш це для людей, яким ти потрібен.",
      lead: "Коли ростеш ти — росте все навколо тебе. Твої стосунки. Твій дім. Твоя робота.",
      cards: [
        { img: "/images/vater.jpg", label: "Кращий батько" },
        { img: "/images/herz-mit-sonne.jpg", label: "Кращий партнер" },
        { img: "/images/gruppe-von-maennern.jpg", label: "Кращий брат" },
        { img: "/images/erziehung.jpg", label: "Кращий син" },
        { img: "/images/business-und-beruf.jpg", label: "Кращий лідер" },
      ],
    },
    path: {
      label: "Шлях у MKP",
      h2: "Три кроки. Кожен у своєму темпі.",
      steps: [
        {
          num: "01",
          title: "Прийди в коло",
          text: "Перший крок — звичайна зустріч. Ти приходиш, слухаєш і говориш стільки, скільки хочеш. Більше нічого не треба.",
        },
        {
          num: "02",
          title: "Пройди тренінг NWTA",
          text: "Вікендовий ініціаційний тренінг — 48 годин поза зоною комфорту, побудований на класичному шляху героя. Для багатьох чоловіків — найсильніший досвід розвитку в житті.",
        },
        {
          num: "03",
          title: "Інтегруй у спільноті",
          text: "Після тренінгу ти повертаєшся в коло — інтеграційну групу, де пережите стає щоденною практикою: чесністю, відповідальністю, цілісністю.",
        },
      ],
    },
    nwta: {
      label: "New Warrior Training Adventure",
      h2a: "Сучасна ініціація.",
      h2b: "48 годин, що залишаються на все життя.",
      lead: "NWTA — це вікендовий ініціаційний тренінг ManKind Project: шлях героя, перекладений на життя сучасного чоловіка. Не лекція і не мотиваційний воркшоп. Досвід.",
      facts: [
        { k: "Дата", v: "2–4 жовтня 2026" },
        { k: "Місце", v: "Кічице, Тешинська Сілезія (Польща)" },
        { k: "Ведучі", v: "Томас Філлер і міжнародна команда MKP" },
        { k: "Мова", v: "англійська, з перекладачами на місці" },
      ],
      body: "Тренінг веде досвідчена міжнародна команда чоловіків, які самі пройшли цей шлях. Не треба нікого знати й не треба почуватися «готовим». Досить рішення.",
      cta: "Подати заявку на тренінг",
      note: "Після заявки ми зв'яжемося і спокійно відповімо на всі запитання.",
    },
    faq: {
      label: "Запитання",
      h2: "Про що чоловіки запитують перед першою зустріччю.",
      items: [
        {
          q: "Це терапія?",
          a: "Ні. Коло не замінює терапію чи лікування. Це робота над собою у спільноті чоловіків — багато учасників поєднують її з терапією, але це дві різні речі.",
        },
        {
          q: "Чи мушу я говорити про себе?",
          a: "Ні. Ти ділишся стільки, скільки хочеш. Слухати інших чоловіків, які говорять чесно, на початку часто є найважливішим досвідом.",
        },
        {
          q: "Це релігійна чи політична організація?",
          a: "Ні. ManKind Project — незалежна неприбуткова організація, відкрита для чоловіків будь-якого походження, віри та світогляду.",
        },
        {
          q: "Я нікого не знаю. Можна прийти самому?",
          a: "Так — майже кожен із нас так починав. Напиши нам заздалегідь, ми домовимося про перший контакт і все пояснимо.",
        },
        {
          q: "Чим коло відрізняється від тренінгу NWTA?",
          a: "Коло — це щотижнева, постійна практика. NWTA — одноразовий вікендовий ініціаційний тренінг. Можна почати з будь-якого — обидва шляхи ведуть до тієї самої спільноти.",
        },
      ],
    },
    final: {
      h2a: "Наступний крок простий.",
      h2b: "Одне повідомлення.",
      lead: "Напиши або зателефонуй. Відповість Марек із Кракова — без зобов'язань, без умовлянь. Просто розмова двох чоловіків.",
      person: "Марек · MKP Польща · Краків",
      email: "marek@mkp-polska.pl",
      phone: "+48 784 601 018",
      cta: "Напиши нам",
      call: "Зателефонувати",
    },
    footer: {
      mission:
        "«Ми віримо, що емоційно зрілі, сильні, співчутливі й свідомі своєї мети чоловіки допоможуть зцілити найглибші рани нашого суспільства.»",
      missionSrc: "— Місія The ManKind Project",
      links: [
        { label: "mankindproject.org", href: "https://mankindproject.org" },
        { label: "MKP Німеччина", href: "https://www.mkp-deutschland.de" },
        { label: "MKP Польща", href: "https://www.mkp-polska.pl" },
      ],
      note: "The ManKind Project — неприбуткова організація, що діє у 27 країнах.",
    },
  },
};

export type Copy = (typeof copy)["pl"];
