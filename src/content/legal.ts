import type { Locale } from "@/i18n/routing";

type LegalSection = { title: string; body: string };

type LegalPage = {
  intro: string;
  sections: LegalSection[];
};

export const termsContent: Record<Locale, LegalPage> = {
  ro: {
    intro:
      "Acești termeni și condiții reglementează utilizarea website-ului incodecraft.com și cadrul general al serviciilor oferite de INCODECRAFT. Prin accesarea site-ului, accepți acești termeni. Pentru proiectele de dezvoltare, termenii detaliați sunt cei din contractul scris al fiecărui proiect.",
    sections: [
      {
        title: "1. Utilizarea acestui website",
        body: "Acest website este oferit în scop informativ, pentru a prezenta serviciile INCODECRAFT. Conținutul de pe site — inclusiv descrieri de servicii, intervale orientative de preț sau exemple de proiecte — nu constituie o ofertă fermă sau o cotație obligatorie. Detaliile proiectului, prețul și livrabilele se confirmă direct cu fiecare client, în scris, înainte de începerea lucrului.",
      },
      {
        title: "2. Angajamente de proiect",
        body: "Orice proiect de dezvoltare întreprins de INCODECRAFT este guvernat de un acord scris separat, specific acelui proiect, care acoperă scope-ul, calendarul, prețul, livrabilele și condițiile de plată. Acești termeni generali de website nu înlocuiesc acel acord și se aplică doar în măsura în care nu intră în conflict cu el.",
      },
      {
        title: "3. Proprietate intelectuală",
        body: "Conținutul acestui website — texte, design, logo, imagini și cod sursă al site-ului — aparține INCODECRAFT sau licențiatorilor săi și nu poate fi copiat, reprodus sau refolosit fără acord scris prealabil. Cu excepția cazului în care se convine altfel într-un contract de proiect, ownership-ul codului custom dezvoltat pentru client și al livrabilelor se transferă clientului la plata integrală. Tool-urile, bibliotecile și framework-urile preexistente folosite în livrare rămân proprietatea INCODECRAFT sau a deținătorilor de licență ai acestora.",
      },
      {
        title: "4. Limitarea răspunderii",
        body: "Website-ul este furnizat „ca atare”, în scop informativ. INCODECRAFT depune eforturi rezonabile pentru acuratețea informațiilor, dar nu garantează că site-ul va funcționa neîntrerupt, fără erori sau că informațiile sunt complete ori actualizate permanent. În măsura maximă permisă de legea aplicabilă, INCODECRAFT nu răspunde pentru daune indirecte, pierderi de profit, pierderi de date sau alte prejudicii rezultate din utilizarea sau imposibilitatea utilizării acestui website. Pentru proiectele de dezvoltare, limitele de răspundere aplicabile sunt cele prevăzute în contractul scris al proiectului respectiv. Nimic din acești termeni nu exclude sau limitează răspunderea acolo unde legea nu permite acest lucru.",
      },
      {
        title: "5. Linkuri externe",
        body: "Site-ul poate conține linkuri către website-uri terțe. INCODECRAFT nu controlează conținutul acelor site-uri și nu își asumă răspunderea pentru informațiile sau practicile lor.",
      },
      {
        title: "6. Modificări",
        body: "INCODECRAFT poate actualiza acești termeni ocazional. Versiunea publicată pe site la data accesării este cea aplicabilă. Pentru proiecte active, prevalează termenii din contractul proiectului.",
      },
      {
        title: "7. Lege aplicabilă",
        body: "Acești termeni sunt guvernați de legea română. Orice litigiu care nu poate fi soluționat amiabil va fi supus instanțelor competente din România, cu respectarea regulilor imperative de protecție a consumatorilor, acolo unde sunt aplicabile.",
      },
      {
        title: "8. Contact",
        body: "Pentru întrebări despre acești termeni, contactează hello@incodecraft.com.",
      },
    ],
  },
  en: {
    intro:
      "These terms and conditions govern use of the incodecraft.com website and the general framework for services offered by INCODECRAFT. By accessing the site, you accept these terms. For development projects, the detailed terms are those in each project's written agreement.",
    sections: [
      {
        title: "1. Use of this website",
        body: "This website is provided for informational purposes to present INCODECRAFT's services. Content on the site — including service descriptions, indicative price ranges, or project examples — does not constitute a binding offer or quote. Project scope, pricing, and deliverables are confirmed directly with each client in writing before work begins.",
      },
      {
        title: "2. Project engagements",
        body: "Any development project undertaken by INCODECRAFT is governed by a separate written agreement specific to that project, covering scope, timeline, pricing, deliverables, and payment terms. These general website terms do not replace that agreement and apply only to the extent they do not conflict with it.",
      },
      {
        title: "3. Intellectual property",
        body: "Content on this website — text, design, logo, images, and the site's source code — belongs to INCODECRAFT or its licensors and may not be copied, reproduced, or reused without prior written consent. Unless otherwise agreed in a project contract, ownership of custom-developed code and deliverables transfers to the client upon full payment. Pre-existing tools, libraries, and frameworks used in delivery remain the property of INCODECRAFT or their respective license holders.",
      },
      {
        title: "4. Limitation of liability",
        body: "The website is provided on an \"as is\" basis for informational purposes. INCODECRAFT makes reasonable efforts to keep information accurate but does not guarantee uninterrupted or error-free operation, or that information is complete or always up to date. To the maximum extent permitted by applicable law, INCODECRAFT is not liable for indirect damages, loss of profit, loss of data, or other harm arising from use of or inability to use this website. For development projects, applicable liability limits are those set out in the relevant project contract. Nothing in these terms excludes or limits liability where the law does not permit it.",
      },
      {
        title: "5. External links",
        body: "The site may contain links to third-party websites. INCODECRAFT does not control the content of those sites and is not responsible for their information or practices.",
      },
      {
        title: "6. Changes",
        body: "INCODECRAFT may update these terms from time to time. The version published on the site at the time of access applies. For active projects, the project contract terms prevail.",
      },
      {
        title: "7. Governing law",
        body: "These terms are governed by the laws of Romania. Any dispute that cannot be resolved amicably shall be submitted to the competent courts in Romania, subject to mandatory consumer protection rules where applicable.",
      },
      {
        title: "8. Contact",
        body: "For questions about these terms, contact hello@incodecraft.com.",
      },
    ],
  },
};

export const privacyContent: Record<Locale, LegalPage> = {
  ro: {
    intro:
      "Această politică descrie cum INCODECRAFT colectează, folosește și protejează datele personale când vizitezi incodecraft.com sau ne contactezi. INCODECRAFT acționează ca operator de date pentru informațiile pe care le trimiți prin formularul de contact. Respectăm Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.",
    sections: [
      {
        title: "1. Operator de date",
        body: "Operatorul datelor este INCODECRAFT. Pentru orice solicitare legată de datele personale, ne poți contacta la hello@incodecraft.com.",
      },
      {
        title: "2. Informațiile pe care le colectăm",
        body: "Când trimiți formularul de contact, colectăm informațiile pe care le furnizezi: nume, companie (opțional), email, telefon (opțional), tip proiect, buget, termen, sursa recomandării și descrierea proiectului. Nu colectăm aceste date decât prin ceea ce trimiți activ. Dacă accepți cookie-urile de analytics, colectăm și date tehnice agregate despre utilizarea site-ului (vezi secțiunea Analytics).",
      },
      {
        title: "3. Temeiul legal și scopul prelucrării",
        body: "Datele din formularul de contact sunt prelucrate pentru a răspunde solicitării tale și, dacă un proiect avansează, pentru comunicarea despre acel proiect — temei: măsuri precontractuale la cererea ta și, după caz, executarea unui contract (art. 6 alin. (1) lit. b GDPR). Datele de analytics sunt prelucrate pe baza consimțământului tău (art. 6 alin. (1) lit. a GDPR), acordat prin banner-ul de cookie-uri.",
      },
      {
        title: "4. Cum folosim informațiile tale",
        body: "Informațiile trimise prin formularul de contact sunt folosite exclusiv pentru a răspunde solicitării tale și, dacă un proiect continuă, pentru comunicarea despre acel proiect. Nu vindem datele tale și nu le partajăm cu terți în scopuri de marketing.",
      },
      {
        title: "5. Analytics",
        body: "Folosim Google Analytics 4 pentru a înțelege cum este folosit site-ul (pagini vizitate, surse de trafic, comportament agregat). GA4 setează cookie-uri și procesează date tehnice despre dispozitivul și browserul tău. Analytics se activează doar dacă accepți cookie-urile din banner; poți schimba alegerea oricând din linkul „Setări cookie” din footer. Google acționează ca persoană împuternicită de operator în acest context, conform politicii Google.",
      },
      {
        title: "6. Păstrarea datelor",
        body: "Trimiterile din formularul de contact sunt păstrate atât timp cât e necesar pentru a răspunde solicitării tale sau, dacă un proiect continuă, pe durata relației de business și orice perioadă de retenție cerută legal după aceea (de exemplu, obligații contabile sau fiscale). Datele de analytics sunt păstrate conform setărilor Google Analytics și politicii de retenție ale acestuia.",
      },
      {
        title: "7. Drepturile tale",
        body: "Conform GDPR, ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție, precum și dreptul de a retrage consimțământul pentru analytics fără a afecta legalitatea prelucrării anterioare. Poți depune și o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP). Pentru exercitarea drepturilor, scrie la hello@incodecraft.com.",
      },
      {
        title: "8. Securitate",
        body: "Aplicăm măsuri tehnice și organizatorice rezonabile pentru protejarea datelor transmise prin site. Comunicarea prin internet nu poate fi garantată ca fiind complet securizată; transmiți informațiile pe propria răspundere, în limite rezonabile.",
      },
      {
        title: "9. Modificări",
        body: "Putem actualiza această politică ocazional. Versiunea publicată pe site la data accesării este cea aplicabilă.",
      },
      {
        title: "10. Contact",
        body: "Pentru întrebări despre această politică de confidențialitate, contactează hello@incodecraft.com.",
      },
    ],
  },
  en: {
    intro:
      "This policy describes how INCODECRAFT collects, uses, and protects personal data when you visit incodecraft.com or contact us. INCODECRAFT acts as data controller for information you submit through the contact form. We comply with Regulation (EU) 2016/679 (GDPR) and applicable national law.",
    sections: [
      {
        title: "1. Data controller",
        body: "The data controller is INCODECRAFT. For any request relating to personal data, contact us at hello@incodecraft.com.",
      },
      {
        title: "2. Information we collect",
        body: "When you submit the contact form, we collect the information you provide: name, company (optional), email, phone (optional), project type, budget, timeline, referral source, and project description. We only collect this data through what you actively submit. If you accept analytics cookies, we also collect aggregated technical data about site usage (see the Analytics section).",
      },
      {
        title: "3. Legal basis and purpose",
        body: "Contact form data is processed to respond to your inquiry and, if a project proceeds, to communicate about that project — legal basis: pre-contractual steps at your request and, where applicable, contract performance (GDPR Art. 6(1)(b)). Analytics data is processed on the basis of your consent (GDPR Art. 6(1)(a)), given via the cookie banner.",
      },
      {
        title: "4. How we use your information",
        body: "Information submitted through the contact form is used solely to respond to your inquiry and, if a project continues, to communicate about that project. We do not sell your data or share it with third parties for marketing purposes.",
      },
      {
        title: "5. Analytics",
        body: "We use Google Analytics 4 to understand how the site is used (pages visited, traffic sources, aggregate behavior). GA4 sets cookies and processes technical data about your device and browser. Analytics only runs if you accept cookies in the banner; you can change your choice anytime via the “Cookie settings” link in the footer. Google acts as a processor in this context, under Google's policies.",
      },
      {
        title: "6. Data retention",
        body: "Contact form submissions are retained as long as necessary to respond to your inquiry or, if a project proceeds, for the duration of the business relationship and any legally required retention period afterward (for example, accounting or tax obligations). Analytics data is retained according to Google Analytics settings and retention policies.",
      },
      {
        title: "7. Your rights",
        body: "Under GDPR, you have the right of access, rectification, erasure, restriction, portability, and objection, and the right to withdraw consent for analytics without affecting the lawfulness of prior processing. You may also lodge a complaint with your national data protection authority. In Romania, this is ANSPDCP. To exercise your rights, email hello@incodecraft.com.",
      },
      {
        title: "8. Security",
        body: "We apply reasonable technical and organizational measures to protect data submitted through the site. Internet communication cannot be guaranteed as fully secure; you share information at your own reasonable risk.",
      },
      {
        title: "9. Changes",
        body: "We may update this policy from time to time. The version published on the site at the time of access applies.",
      },
      {
        title: "10. Contact",
        body: "For questions about this privacy policy, contact hello@incodecraft.com.",
      },
    ],
  },
};

export function getTermsContent(locale: Locale) {
  return termsContent[locale];
}

export function getPrivacyContent(locale: Locale) {
  return privacyContent[locale];
}
