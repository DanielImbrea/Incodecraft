import type { Locale } from "@/i18n/routing";

type LegalSection = { title: string; body: string };

type LegalPage = {
  intro: string;
  sections: LegalSection[];
};

export const termsContent: Record<Locale, LegalPage> = {
  ro: {
    intro:
      "Acesta este un document placeholder pentru termeni și condiții. Oferă o structură generală și trebuie revizuit și personalizat — ideal cu consultanță juridică — pentru a reflecta termenii reali ai afacerii tale înainte de lansare.",
    sections: [
      {
        title: "1. Utilizarea acestui website",
        body: "Acest website este oferit în scop informativ pentru a reprezenta serviciile INCODECRAFT. Conținutul de pe acest site nu trebuie tratat ca o ofertă sau cotație obligatorie; scope-ul și prețul real al proiectului sunt confirmate direct cu fiecare client.",
      },
      {
        title: "2. Angajamente de proiect",
        body: "Orice proiect de dezvoltare întreprins de INCODECRAFT este guvernat de un acord scris separat, specific acelui proiect, care acoperă scope, timeline, preț și livrabile. Acești termeni generali nu înlocuiesc acel acord.",
      },
      {
        title: "3. Proprietate intelectuală",
        body: "Cu excepția cazului în care se convine altfel într-un contract de proiect, ownership-ul codului custom dezvoltat și al livrabilelor se transferă clientului la plata integrală. Tool-urile, bibliotecile și framework-urile interne preexistente folosite în livrare rămân proprietatea INCODECRAFT.",
      },
      {
        title: "4. Limitarea răspunderii",
        body: "[Această secțiune trebuie revizuită și finalizată cu consultanță juridică adecvată înainte de lansare, pentru a reflecta termenii de răspundere potriviți jurisdicției și structurii afacerii tale.]",
      },
      {
        title: "5. Contact",
        body: "Pentru întrebări despre acești termeni, contactează hello@incodecraft.com.",
      },
    ],
  },
  en: {
    intro:
      "This is a placeholder terms document. It provides a general structure and must be reviewed and customized — ideally with legal guidance — to reflect your actual business terms before the site goes live.",
    sections: [
      {
        title: "1. Use of this website",
        body: "This website is provided for informational purposes to represent the services of INCODECRAFT. Content on this site should not be treated as a binding offer or quote; actual project scope and pricing are confirmed directly with each client.",
      },
      {
        title: "2. Project engagements",
        body: "Any development project undertaken by INCODECRAFT is governed by a separate written agreement specific to that project, covering scope, timeline, pricing and deliverables. These general terms do not replace that agreement.",
      },
      {
        title: "3. Intellectual property",
        body: "Unless otherwise agreed in a project contract, ownership of custom-developed code and deliverables transfers to the client upon full payment. Pre-existing tools, libraries and internal frameworks used in delivery remain the property of INCODECRAFT.",
      },
      {
        title: "4. Limitation of liability",
        body: "[This section should be reviewed and finalized with appropriate legal guidance before launch, to reflect the liability terms appropriate for your jurisdiction and business structure.]",
      },
      {
        title: "5. Contact",
        body: "For any questions about these terms, contact hello@incodecraft.com.",
      },
    ],
  },
};

export const privacyContent: Record<Locale, LegalPage> = {
  ro: {
    intro:
      "Aceasta este o politică de confidențialitate placeholder. Schițează o structură standard pentru un website de studio mic și trebuie revizuită și personalizată — ideal cu consultanță juridică adecvată jurisdicției tale și reglementărilor aplicabile, cum ar fi GDPR — înainte de lansare.",
    sections: [
      {
        title: "1. Informațiile pe care le colectăm",
        body: "Când trimiți formularul de contact de pe acest website, colectăm informațiile pe care le furnizezi, care pot include numele, compania, adresa de email, numărul de telefon și detalii despre proiectul tău. Nu colectăm aceste informații prin alte mijloace decât ceea ce trimiți activ.",
      },
      {
        title: "2. Cum folosim informațiile tale",
        body: "Informațiile trimise prin formularul de contact sunt folosite exclusiv pentru a răspunde la solicitarea ta și, dacă un proiect avansează, pentru a comunica despre acel proiect. Nu vindem și nu partajăm informațiile tale cu terți în scopuri de marketing.",
      },
      {
        title: "3. Analytics",
        body: "Acest site poate folosi tool-uri de analytics care respectă confidențialitatea (cum ar fi Google Analytics 4) pentru a înțelege comportamentul agregat al vizitatorilor. [Specifică ce tool-uri de analytics sunt efectiv activate și actualizează această secțiune înainte de lansare.]",
      },
      {
        title: "4. Păstrarea datelor",
        body: "Trimiterile din formularul de contact sunt păstrate doar atât timp cât e necesar pentru a răspunde solicitării tale sau, unde un proiect continuă, pe durata relației de business și orice perioadă de retenție cerută legal după aceea.",
      },
      {
        title: "5. Drepturile tale",
        body: "Poți solicita acces, corectare sau ștergerea oricăror informații personale pe care le-ai trimis contactând hello@incodecraft.com.",
      },
      {
        title: "6. Contact",
        body: "Pentru întrebări despre această politică de confidențialitate, contactează hello@incodecraft.com.",
      },
    ],
  },
  en: {
    intro:
      "This is a placeholder privacy policy. It outlines a standard structure for a small studio website and must be reviewed and customized — ideally with legal guidance appropriate to your jurisdiction and applicable regulations such as GDPR — before the site goes live.",
    sections: [
      {
        title: "1. Information we collect",
        body: "When you submit the contact form on this website, we collect the information you provide, which may include your name, company, email address, phone number, and details about your project. We do not collect this information through any means other than what you actively submit.",
      },
      {
        title: "2. How we use your information",
        body: "Information submitted through the contact form is used solely to respond to your inquiry and, if a project moves forward, to communicate about that project. We do not sell or share your information with third parties for marketing purposes.",
      },
      {
        title: "3. Analytics",
        body: "This site may use privacy-respecting analytics tools (such as Google Analytics 4) to understand aggregate visitor behavior. [Specify which analytics tools are actually enabled and update this section accordingly before launch.]",
      },
      {
        title: "4. Data retention",
        body: "Contact form submissions are retained only as long as necessary to respond to your inquiry or, where a project proceeds, for the duration of the business relationship and any legally required retention period afterward.",
      },
      {
        title: "5. Your rights",
        body: "You may request access to, correction of, or deletion of any personal information you have submitted by contacting hello@incodecraft.com.",
      },
      {
        title: "6. Contact",
        body: "For any questions about this privacy policy, contact hello@incodecraft.com.",
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
