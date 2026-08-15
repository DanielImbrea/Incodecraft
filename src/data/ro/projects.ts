export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  href?: string;
  year: string;
  technology: string[];
  featured: boolean;
  isPlaceholder?: boolean;
  caseStudy: {
    overview: string;
    challenge: string;
    approach: string;
    solution: string;
    features: string[];
    outcome: string;
    takeaways: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "presentation-websites",
    name: "Site-uri de prezentare",
    category: "Dezvoltare web",
    summary:
      "Website-uri corporate și site-uri de prezentare construite custom — rapide, clare și optimizate pentru a reprezenta credibil afacerea online.",
    description:
      "Site-uri multi-pagină pentru companii, freelanceri și servicii locale: structură clară, design adaptat brandului, formulare de contact și fundație SEO-ready — fără template generic.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    caseStudy: {
      overview:
        "Multe afaceri au nevoie de un site care să explice ce fac, să inspire încredere și să transforme vizitatorii în lead-uri — nu o pagină aglomerată sau un template care arată ca alte zece site-uri din aceeași industrie.",
      challenge:
        "Site-urile ieftine pe template par bine la lansare, dar limitează structura, viteza și diferențierea pe măsură ce afacerea crește sau vrea să apară serios în căutări.",
      approach:
        "Conținutul și obiectivele fiecărei pagini sunt stabilite mai întâi — cine e audiența, ce acțiune vrem de la vizitator — apoi design-ul și implementarea urmează acea structură, nu invers.",
      solution:
        "Site-uri custom cu pagini de servicii, despre, contact, blog sau landing page-uri dedicate, implementate în Next.js pentru viteză, accesibilitate și metadata corectă din start.",
      features: [
        "Design custom aliniat identității vizuale a brandului",
        "Structură clară: servicii, despre, contact, legal",
        "Formulare de contact și captare lead-uri",
        "Optimizare SEO on-page și metadata per pagină",
        "Performanță ridicată și layout responsive",
        "Cod pe care clientul îl deține, fără platformă închisă",
      ],
      outcome:
        "Afacerea are un site care o reprezintă corect, se încarcă rapid și poate fi extins cu pagini sau funcționalități noi fără să schimbe platforma.",
      takeaways: [
        "Un site de prezentare reușit e clar mai întâi, impresionant al doilea.",
        "Construit custom de la început costă mai puțin decât să refaci un template peste un an.",
      ],
    },
  },
  {
    slug: "portfolio-websites",
    name: "Portofolii",
    category: "Dezvoltare web",
    summary:
      "Site-uri portofoliu pentru creatori, agenții și profesioniști — proiecte, studii de caz și contact într-un format curat, rapid și ușor de actualizat.",
    description:
      "Portofolii online construite custom pentru designeri, developeri, fotografi, arhitecți și studiouri mici — focus pe munca expusă, nu pe efecte inutile.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    caseStudy: {
      overview:
        "Un portofoliu bun face treaba de filtrare: arată rapid ce fel de muncă faci, cum gândești și cum poate cineva să te contacteze — fără ca vizitatorul să caute prin link-uri împrăștiate.",
      challenge:
        "Platformele de portofoliu gratuite sau template-urile generice arată similar, se încarcă lent sau nu permit structura de case study de care un profesionist senior are nevoie.",
      approach:
        "Proiectele reprezentative sunt selectate și ordonate strategic, fiecare cu context scurt — problemă, abordare, rezultat — nu doar o grilă de imagini fără explicație.",
      solution:
        "Site portofoliu custom cu pagină principală, grid de proiecte, pagini de case study, pagină despre și contact direct — ușor de extins când apare un proiect nou.",
      features: [
        "Grid de proiecte cu categorii și filtrare",
        "Pagini case study cu detaliu proiect",
        "Pagină despre și secțiune contact",
        "Design care pune munca în centru, nu template-ul",
        "Performanță optimizată pentru încărcare rapidă imagini",
        "Structură ușor de actualizat când se adaugă proiecte noi",
      ],
      outcome:
        "Profesionistul are un portofoliu care arată la fel de bine ca munca pe care o prezintă — și poate adăuga proiecte noi fără să reconstruiască site-ul.",
      takeaways: [
        "Mai puține proiecte bine explicate bat o grilă mare fără context.",
        "Un portofoliu rapid pe mobil contează la fel de mult ca pe desktop.",
      ],
    },
  },
  {
    slug: "pixiqueai",
    name: "PixiqueAI",
    category: "Platformă AI SaaS",
    summary:
      "O platformă de procesare imagini cu AI pentru creatori și afaceri, acoperind upload, transformare, credite și billing.",
    description:
      "PixiqueAI este un produs SaaS pentru procesare imagini asistată de AI — upload, transformare și export imagini printr-o interfață web rapidă și modernă, susținută de un sistem de billing bazat pe credite.",
    href: "https://pixiqueai.com/",
    year: "2024–2025",
    technology: ["Next.js", "TypeScript", "Supabase", "Stripe", "Replicate", "Vercel", "Cloudflare"],
    featured: true,
    caseStudy: {
      overview:
        "PixiqueAI avea nevoie de un produs care să transforme procesarea AI de imagini — istoric un workflow tehnic, bazat pe scripturi — în ceva pe care oricine îl poate folosi direct din browser, fără a sacrifica performanța și fiabilitatea pe care un utilizator plătitor le așteaptă de la un produs SaaS.",
      challenge:
        "Transformarea imaginilor cu AI este compute-heavy și asincronă prin natură. Provocarea centrală a fost proiectarea unei interfețe și arhitecturi backend care să gestioneze upload-uri, procesare AI în coadă, consum credite și billing, păstrând totuși o experiență instant și predictibilă pentru utilizatorul final.",
      approach:
        "Construcția a început cu modelul de date: cum se relaționează imaginile, job-urile, creditele și utilizatorii, și cum trece starea de la „uploaded” la „processing” la „ready” fără să lase utilizatorul să ghicească. Apoi interfața a fost proiectată în jurul acelui state machine, nu invers — fiecare ecran reflectă exact unde se află un job.",
      solution:
        "Rezultatul este o aplicație Next.js și TypeScript cu Supabase pentru autentificare, storage și stratul relațional de date, Replicate alimentând modelele AI de imagini, și Stripe gestionând abonamente și top-up-uri de credite. Cloudflare stă în fața livrării media pentru încărcare rapidă și cached a imaginilor la nivel global, iar întreaga aplicație este deployată pe Vercel.",
      features: [
        "Upload imagini drag-and-drop cu validare client-side și feedback progres",
        "Coadă procesare AI asincronă cu status job în timp real",
        "Sistem de utilizare bazat pe credite legat de abonamente Stripe și top-up-uri one-off",
        "Autentificare securizată și storage per-utilizator via Supabase",
        "Procesare batch pentru multiple imagini într-un singur job",
        "Interfață SaaS modernă și responsive, pentru desktop și mobil",
        "Livrare imagini backed by CDN pentru timpi de încărcare rapizi global",
      ],
      outcome:
        "PixiqueAI a fost lansat ca produs SaaS funcțional, live, cu flux end-to-end complet — de la sign-up, la upload, la procesare AI, la billing.",
      takeaways: [
        "Proiectarea în jurul stării asincrone de la început previne o interfață fragilă mai târziu.",
        "Un model de billing bazat pe credite trebuie aplicat consistent atât pe client cât și pe server ca să rămână de încredere.",
        "Externalizarea compute-ului greu către un provider AI specializat (Replicate) a menținut aplicația core lean și mentenabilă.",
      ],
    },
  },
  {
    slug: "postcadence",
    name: "PostCadence",
    category: "Platformă AI · Social media",
    summary:
      "Platformă AI care ajută oamenii și afacerile să posteze regulat pe social media — conținut generat, programat și publicat dintr-un singur loc.",
    description:
      "Un produs SaaS construit în jurul unei probleme simple: majoritatea oamenilor vor prezență constantă pe social media, dar nu au timp sau inspirație zilnic. AI-ul generează postări, adaptează tonul pe platformă și le programează automat.",
    year: "2024–2025",
    technology: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Stripe", "Vercel"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "Proiectul a pornit de la o observație comună: conturile care cresc postează consistent, dar puțini au bandwidth-ul să scrie ceva bun în fiecare zi. Scopul a fost un tool care să elimine fricțiunea — nu doar să genereze text, ci să mențină un ritm de publicare pe termen lung.",
      challenge:
        "Generarea de conținut e doar jumătate din problemă. Utilizatorii abandonează tool-urile când trebuie să copieze manual pe fiecare platformă, când postările sună generic sau când nu au o vedere clară a ce urmează să fie publicat săptămâna viitoare.",
      approach:
        "Fluxul a fost proiectat în jurul obișnuinței: setezi profilul brandului o dată, alegi frecvența și tonul, iar platforma propune un calendar de postări pe care îl poți aproba, edita sau regenera — nu un chat gol care lasă utilizatorul să ghicească următorul pas.",
      solution:
        "O aplicație web cu generare AI de postări adaptate pe platformă (caption, hashtags, variații), calendar de conținut, programare automată și dashboard de activitate. Autentificare, planuri de abonament și istoric postări într-un singur produs.",
      features: [
        "Generare postări AI pe baza profilului de brand și obiectivelor",
        "Adaptare ton și format per platformă (Instagram, Facebook, LinkedIn, X)",
        "Calendar de conținut cu programare săptămânală sau lunară",
        "Editare și regenerare înainte de publicare",
        "Programare automată — postări publicate la ora setată",
        "Istoric postări și overview activitate cont",
        "Planuri de abonament cu limite de generare configurabile",
      ],
      outcome:
        "Utilizatorii pot menține un ritm constant de postare fără să pornească de la zero în fiecare zi — AI-ul propune, utilizatorul aprobă, platforma publică.",
      takeaways: [
        "Consistența bate viralitatea pentru majoritatea conturilor mici — produsul trebuie optimizat pentru obișnuință, nu pentru o singură postare perfectă.",
        "Cu cât AI-ul e mai integrat în workflow-ul de programare, cu atât mai puțin copy-paste manual între tool și rețele sociale.",
      ],
    },
  },
  {
    slug: "custom-crm",
    name: "Platformă CRM custom",
    category: "Aplicație web",
    summary:
      "CRM personalizat, construit în jurul workflow-ului real de vânzări și clienți — pipeline, contacte, task-uri și rapoarte, fără limitele unui tool generic.",
    description:
      "Sistem de management al relației cu clienții, complet custom, pentru echipe care au depășit spreadsheet-urile și CRM-urile SaaS generice — cu module adaptate modului în care afacerea vinde și face follow-up.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "Clientul avea nevoie de un singur loc unde să urmărească lead-uri, deal-uri active, istoric clienți și follow-up-uri — nu un CRM enterprise supraîncărcat, ci ceva construit exact pentru procesul lor.",
      challenge:
        "CRM-urile gata făcute forțau workaround-uri: câmpuri care nu se potriveau pipeline-ului, rapoarte în care nu aveau încredere și abonamente lunare pentru funcții pe care nu le foloseau.",
      approach:
        "Fiecare etapă a ciclului de vânzări și relație cu clientul a fost mapată mai întâi — de la primul contact la deal închis și follow-up post-vânzare — apoi tradusă într-un model de date și o interfață pe care echipa o poate adopta fără manuale de instruire.",
      solution:
        "Un CRM web cu etape de pipeline custom, înregistrări contact și companie, remindere task-uri, istoric activitate și acces bazat pe roluri, susținut de o bază de date relațională pe care clientul o deține complet.",
      features: [
        "Pipeline de vânzări custom, cu etape aliniate procesului de business",
        "Contacte, companii și deal-uri cu istoric complet de activitate",
        "Atribuire task-uri, remindere și tracking follow-up",
        "Acces bazat pe roluri pentru vânzări, management și admin",
        "Căutare, filtre și dashboard-uri ușoare de raportare",
        "Export și hook-uri de integrare pentru email sau contabilitate",
      ],
      outcome:
        "Echipa a trecut de la note împrăștiate și spreadsheet-uri la un singur sistem partajat, folosit zilnic — cu loc să adauge module pe măsură ce afacerea crește.",
      takeaways: [
        "Un CRM funcționează doar dacă pipeline-ul oglinde modul în care echipa gândește deja deal-urile.",
        "Ownership-ul asupra codebase-ului înseamnă că câmpuri și workflow-uri noi nu așteaptă roadmap-ul unui vendor.",
      ],
    },
  },
  {
    slug: "offline-crm",
    name: "CRM offline-first",
    category: "Aplicație web",
    summary:
      "Sisteme CRM offline pentru registraturi de primărie — dosare cetățeni, cereri documente și sync automat când revine internetul.",
    description:
      "Tool de registratură cu funcționare offline pentru secretariate de primărie și birouri municipale din România — acolo unde conexiunea nu poate fi luată ca garantată.",
    year: "2024–2025",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "PWA", "IndexedDB", "Service Workers"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "Secretarele de primărie lucrează adesea în clădiri cu internet slab sau întrerupt. Totuși trebuie să înregistreze dosare cetățeni, cereri și documente fără ca sistemul să se blocheze când pică conexiunea.",
      challenge:
        "CRM-urile cloud standard devin inutilizabile offline. Personalul revine la formulare pe hârtie, apoi reintroduce datele — dublând munca și introducând erori.",
      approach:
        "Arhitectura a fost proiectată offline-first: stocare locală pentru operațiuni zilnice, sincronizare în fundal când revine conexiunea și reguli clare de conflict ca doi oameni care actualizează aceeași înregistrare să nu se suprascrie reciproc.",
      solution:
        "O aplicație web progresivă care rulează în browser, cache-uiește înregistrările local și sincronizează cu baza centrală când e online — orientată spre registratură, dosare cetățeni și cereri documente la primărie.",
      features: [
        "Funcționalitate completă de citire/scriere fără conexiune activă la internet",
        "Sincronizare automată în fundal când rețeaua e disponibilă",
        "Urmărire dosare cetățeni și cereri documente pentru birouri municipale",
        "Registru intrări-ieșiri și status cereri, cu istoric complet",
        "Detectare conflicte și merge pentru medii multi-post la ghișeu",
        "Rezumat print-friendly și export pentru arhivă",
      ],
      outcome:
        "Personalul de la ghișeu poate continua să lucreze în timpul întreruperilor. Datele introduse offline se sincronizează fiabil odată ce revine conexiunea, fără reintroducere pe hârtie.",
      takeaways: [
        "Offline-first e o decizie de produs, nu un patch — trebuie planificat de la stratul de date în sus.",
        "Ghișeele din sector public au nevoie de fiabilitate offline — funcționalitățile de clinică (salarii, rapoarte, CSV) stau într-un CRM dedicat separat.",
      ],
    },
  },
  {
    slug: "clinic-crm",
    name: "CRM pentru clinici",
    category: "Aplicație web",
    summary:
      "Sisteme CRM custom livrate pentru mai multe clinici — pacienți, programări, calcul salarii, rapoarte și export CSV, adaptate fiecărei unități.",
    description:
      "Platforme de management pentru clinici private și cabinete medicale: mai multe implementări distincte, fiecare configurată pe workflow-ul clinicii — de la recepție și fișe pacient, până la raportare financiară și extrase pentru contabilitate.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "PWA"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "Mai multe clinici au avut nevoie de același lucru: un singur sistem în loc de registre, Excel-uri și calcule manuale — dar fiecare cu reguli proprii de program, tarife și personal.",
      challenge:
        "Fiecare clinică funcționa diferit: medici cu procente variabile, recepții cu programe schimbătoare, rapoarte cerute lunar de contabilă și zero toleranță pentru dublarea datelor între hârtie și digital.",
      approach:
        "S-a pornit de la workflow-ul real al fiecărei clinici — intake pacient, programări, servicii prestate, comision personal — apoi s-au construit module reutilizabile (rapoarte, export CSV, calcul salarii) pe un core comun.",
      solution:
        "CRM-uri web custom, câte unul per clinică, cu fișe pacient, calendar programări, evidență servicii, modul de calcul salarii pe reguli configurabile, rapoarte zilnice/lunare și export CSV pentru contabilitate sau analiză externă.",
      features: [
        "Fișe pacient și istoric vizite / servicii prestate",
        "Programări și calendar multi-medic, multi-cabinet",
        "Calcul salarii și comisioane pe reguli configurabile per clinică",
        "Rapoarte zilnice, lunare și pe perioadă custom",
        "Export CSV pentru contabilitate, audit sau analiză în Excel",
        "Roluri separate: recepție, medic, admin, management",
        "Funcționare offline acolo unde conexiunea e instabilă (PWA + sync)",
        "Filtre, căutare și dashboard-uri pentru activitatea clinicii",
      ],
      outcome:
        "Fiecare clinică lucrează dintr-un singur sistem adaptat modului ei de operare — fără reintroducere manuală a datelor și cu rapoarte gata de trimis la contabilitate.",
      takeaways: [
        "CRM-urile pentru clinici par similare la suprafață, dar regulile de salarii și raportare diferă radical — configurabilitatea bate un template fix.",
        "Exportul CSV și rapoartele clare câștigă încrederea administrației mai repede decât orice funcție „smart”.",
      ],
    },
  },
  {
    slug: "commerce-platform",
    name: "Platformă e-commerce custom",
    category: "E-commerce",
    summary:
      "Un magazin online construit custom cu management produse, checkout Stripe și dashboard admin pentru inventar și comenzi.",
    description:
      "O platformă e-commerce complet custom, construită pentru a muta o afacere retail în creștere de la un magazin restrictiv bazat pe template pe o arhitectură pe care afacerea o deține de fapt.",
    year: "2024",
    technology: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "Acest proiect a înlocuit un storefront rigid bazat pe template cu o platformă custom proiectată în jurul catalogului real, procesului de fulfilment și planurilor de creștere ale afacerii.",
      challenge:
        "Platforma anterioară limita variantele de produse, făcea update-urile bulk de catalog dureroase și nu oferea flexibilitate reală pentru promoții sau reguli de livrare specifice afacerii.",
      approach:
        "Lucrul a început cu un audit complet al catalogului și fluxului de checkout existent, mapând fiecare edge case — variante, bundle-uri, discount-uri și tier-uri de livrare — înainte ca o linie de cod de interfață să fie scrisă.",
      solution:
        "Un storefront și panou admin custom au fost construite cu date structurate de produse, checkout backed by Stripe și un dashboard de inventar care permite staff-ului non-tehnic să gestioneze produse, comenzi și stoc fără a atinge codul.",
      features: [
        "Catalog produse custom cu variante, bundle-uri și filtrare",
        "Checkout powered by Stripe cu metode de plată salvate",
        "Dashboard admin pentru inventar, comenzi și management clienți",
        "Reguli de livrare și configurare tarife",
        "Pagini produse și categorii optimizate SEO",
      ],
      outcome:
        "Afacerea rulează acum pe o platformă pe care o deține complet, cu flexibilitatea de a adăuga funcționalități și promoții imposibile pe template-ul anterior.",
      takeaways: [
        "Maparea edge case-urilor din catalog înainte de a construi UI-ul a evitat rework costisitor.",
        "Un panou admin custom se amortizează rapid odată ce o echipă se bazează pe el zilnic.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
