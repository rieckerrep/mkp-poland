export type Locale = "pl" | "en";

export const copy = {
  pl: {
    langLabel: "PL",
    otherLocaleHref: "/en",
    otherLocaleLabel: "EN",
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
    langLabel: "EN",
    otherLocaleHref: "/",
    otherLocaleLabel: "PL",
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
};

export type Copy = (typeof copy)["pl"];
