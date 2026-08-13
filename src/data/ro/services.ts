export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  whoFor: string[];
  whatIBuild: string[];
  typicalFeatures: string[];
  businessValue: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Dezvoltare web",
    shortName: "Website-uri",
    tagline: "Website-uri moderne și rapide, construite să reprezinte afacerea ta cum trebuie.",
    summary:
      "Website-uri corporate, landing page-uri și site-uri de marketing, construite custom și optimizate pentru viteză, vizibilitate în căutări și conversie — nu asamblate dintr-un template generic.",
    whoFor: [
      "Afaceri care au nevoie de un website profesional care reflectă modul în care operează de fapt",
      "Companii care depășesc un website bazat pe template sau învechit",
      "Echipe care lansează un produs, serviciu sau brand nou",
    ],
    whatIBuild: [
      "Website-uri corporate și de business",
      "Pagini de marketing și landing page-uri",
      "Site-uri multi-pagină cu conținut pregătit pentru CMS",
      "Arhitectură SEO-ready din prima zi",
    ],
    typicalFeatures: [
      "Design system custom adaptat brandului tău",
      "Implementare rapidă, accesibilă, mobile-first",
      "Structură SEO on-page și metadata",
      "Formulare de contact și captare lead-uri",
      "Setup pregătit pentru analytics",
    ],
    businessValue: [
      "Un site care se încarcă rapid și reprezintă credibil afacerea ta",
      "Structură pe care motoarele de căutare o pot indexa bine",
      "O fundație ușor de extins pe măsură ce afacerea crește",
    ],
  },
  {
    slug: "web-applications",
    name: "Aplicații web",
    shortName: "Aplicații",
    tagline: "Software personalizat pentru părțile afacerii tale pe care spreadsheet-urile nu le pot gestiona.",
    summary:
      "Dashboard-uri, CRM-uri, sisteme de booking, portaluri clienți și tool-uri interne — construite în jurul workflow-ului tău real, nu un template rigid off-the-shelf.",
    whoFor: [
      "Afaceri care coordonează operațiuni prin spreadsheet-uri sau tool-uri deconectate",
      "Echipe care au nevoie de un portal clienți sau sistem de booking",
      "Companii care au nevoie de software adaptat unui proces intern specific",
    ],
    whatIBuild: [
      "Dashboard-uri de business și tool-uri interne",
      "Sisteme CRM și de management clienți",
      "Platforme de booking și programări",
      "Portaluri clienți",
      "Produse SaaS, de la prima versiune la iterații continue",
    ],
    typicalFeatures: [
      "Autentificare și acces bazat pe roluri",
      "Modele de date custom construite în jurul workflow-ului tău",
      "Raportare și analytics ușoare",
      "Integrări cu tool-urile pe care le folosești deja",
      "Arhitectură curată, mentenabilă, care poate scala cu afacerea",
    ],
    businessValue: [
      "Înlocuiește spreadsheet-urile fragile cu un singur sistem de încredere",
      "Software modelat în jurul modului în care echipa ta lucrează de fapt",
      "Un codebase pe care îl deții, nu o platformă terță blocată",
    ],
  },
  {
    slug: "ecommerce",
    name: "Dezvoltare e-commerce",
    shortName: "E-commerce",
    tagline: "Magazine online construite să vândă — nu doar să arate bine.",
    summary:
      "Magazine online custom și implementări pe platformă (Shopify, WooCommerce) acoperind catalog, checkout, livrare și tool-uri admin, gândite pentru nevoile e-commerce din România și Moldova.",
    whoFor: [
      "Afaceri care lansează un magazin online nou",
      "Retaileri care depășesc un storefront restrictiv bazat pe template",
      "Companii care au nevoie de checkout, livrare sau logică de catalog custom",
    ],
    whatIBuild: [
      "Magazine online construite custom",
      "Implementări WooCommerce și Shopify",
      "Sisteme de catalog produse și inventar",
      "Integrări plăți Stripe și locale",
      "Integrări livrare și fulfilment",
      "Panouri admin pentru management magazin fără cunoștințe tehnice",
    ],
    typicalFeatures: [
      "Căutare și filtrare avansată produse",
      "Coș și flux de checkout simplificat",
      "Management inventar și comenzi",
      "Pagini produse și categorii optimizate SEO",
      "Performanță optimizată pentru încărcare rapidă pe mobil",
    ],
    businessValue: [
      "Un magazin construit în jurul catalogului și procesului tău de fulfilment, nu un template generic",
      "Pagini mai rapide și checkout mai fluid, ceea ce contează direct pentru conversie",
      "Un sistem admin pe care echipa ta îl poate rula fără ajutor de developer",
    ],
  },
  {
    slug: "ai-development",
    name: "Aplicații cu AI",
    shortName: "AI",
    tagline: "Funcționalități AI practice care rezolvă o problemă reală în produsul tău.",
    summary:
      "Integrări AI, workflow-uri de automatizare și aplicații powered by AI — de la pipeline-uri de procesare imagini la asistenți integrați direct în produsul tău.",
    whoFor: [
      "Produse care au nevoie ca o funcție AI să funcționeze fiabil, nu doar ca demo",
      "Afaceri care vor să automatizeze un workflow manual, repetitiv",
      "Echipe care vor un asistent AI integrat într-un produs existent",
    ],
    whatIBuild: [
      "Integrări AI în aplicații web existente",
      "Pipeline-uri de procesare imagini cu AI",
      "Workflow-uri de automatizare conectând modele AI la sisteme de business",
      "Asistenți AI și interfețe bazate pe chat",
    ],
    typicalFeatures: [
      "Integrare cu provideri de modele AI de top",
      "Procesare asincronă job-uri pentru task-uri compute-heavy",
      "Tracking utilizare și sisteme de credite sau cote",
      "Fallback clar și error handling când rezultatele AI sunt incerte",
    ],
    businessValue: [
      "Funcții AI care rezistă în producție, nu doar într-un demo",
      "Automatizare care elimină muncă manuală reală din echipa ta",
      "Un partener tehnic care înțelege atât stratul AI cât și produsul din jur",
    ],
  },
  {
    slug: "integrations",
    name: "Integrări custom",
    shortName: "Integrări",
    tagline: "Conectează tool-urile pe care afacerea ta le folosește deja.",
    summary:
      "API-uri, provideri de plăți, sisteme email, CRM-uri și alte servicii externe, integrate curat în produsul sau website-ul tău existent.",
    whoFor: [
      "Afaceri care au nevoie ca două sisteme să comunice fiabil între ele",
      "Echipe care adaugă plăți, email sau conexiuni CRM la un site sau app existent",
    ],
    whatIBuild: [
      "Integrări plăți (Stripe și altele)",
      "Sisteme email și notificări",
      "Integrări CRM și API-uri terțe",
      "Automatizare între tool-uri de business existente",
    ],
    typicalFeatures: [
      "Gestionare securizată credențiale și configurare environment",
      "Error handling și logică retry pentru apeluri externe",
      "Logging clar ca problemele să poată fi diagnosticate rapid",
    ],
    businessValue: [
      "Mai puțină muncă manuală mutând date între sisteme",
      "Mai puține erori de la copy-paste informații între tool-uri",
    ],
  },
  {
    slug: "maintenance",
    name: "Mentenanță și îmbunătățiri",
    shortName: "Mentenanță",
    tagline: "Păstrează un site sau produs existent rapid, securizat și actual.",
    summary:
      "Lucru continuu de performanță, bug fixing, funcționalități noi, update-uri de securitate și îmbunătățiri SEO pentru website-uri și aplicații deja în producție.",
    whoFor: [
      "Afaceri cu un site sau app existent care necesită atenție continuă",
      "Echipe fără developer in-house pentru mentenanța produsului",
    ],
    whatIBuild: [
      "Îmbunătățiri performanță și Core Web Vitals",
      "Bug fixing și lucru de stabilitate",
      "Dezvoltare funcționalități noi pe codebase-uri existente",
      "Patch-uri securitate și update-uri dependențe",
      "Audituri SEO și tehnice",
    ],
    typicalFeatures: [
      "Verificări regulate performanță și securitate",
      "Raportare clară despre ce s-a schimbat și de ce",
    ],
    businessValue: [
      "Un produs care rămâne rapid, securizat și actual în timp",
      "Acces direct la persoana care întreține codebase-ul tău",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
