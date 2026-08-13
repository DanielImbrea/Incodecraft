export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  contentHtml: string;
  faqs?: { question: string; answer: string }[];
  relatedSlugs?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-in-romania",
    title: "Cât costă un website în România? O analiză realistă",
    excerpt:
      "Prețul unui website variază enorm în funcție de scope. Iată o analiză realistă a factorilor care influențează costul pentru afaceri din România și nu numai.",
    category: "Dezvoltare web",
    author: "INCODECRAFT",
    date: "2026-01-12",
    readingTime: "7 min citire",
    contentHtml: `
      <p>Una dintre primele întrebări pe care le pune orice antreprenor înainte de a începe un proiect de website este simplă: cât va costa? Răspunsul onest este că depinde foarte mult de scope, dar poți totuși să te gândești la asta într-un mod structurat.</p>
      <h2>Principalii factori de cost</h2>
      <p>Costul unui website este în mare parte o funcție a trei lucruri: cât de multă muncă de design personalizat este necesară, cât de multă funcționalitate custom are nevoie site-ul dincolo de o pagină de conținut și cât de multă strategie de conținut și copywriting implică.</p>
      <ul>
        <li><strong>Un website simplu de prezentare</strong> cu câteva pagini și funcționalitate standard se situează la capătul inferior al intervalului.</li>
        <li><strong>Un site de marketing cu design personalizat</strong>, cu un design system adaptat, animații și o structură de conținut construită pentru SEO costă mai mult, pentru că intră mai multe ore de design și inginerie.</li>
        <li><strong>Un website cu funcționalitate custom</strong> — formulare de rezervare, conținut restricționat, integrări cu alte sisteme — urcă mai sus în interval, pentru că nu mai este „doar un website”, ci devine software ușor.</li>
      </ul>
      <h2>Intervale tipice</h2>
      <p>Pentru piața din România, un website profesional, custom, pentru o afacere mică se încadrează de obicei în intervalul €1.000–€3.000. Un site de marketing mai ambițios, cu un design system personalizat și mai multe pagini, ajunge de regulă între €3.000–€5.000. Odată ce proiectul intră în teritoriul aplicației web custom — dashboard-uri, portaluri, funcționalitate nestandard — prețul trece la oferte specifice proiectului, nu la un pachet fix.</p>
      <h2>Ce schimbă de fapt cifra</h2>
      <table>
        <thead><tr><th>Factor</th><th>Efect asupra prețului</th></tr></thead>
        <tbody>
          <tr><td>Numărul de template-uri unice de pagină</td><td>Mai multe template-uri, mai mult timp de design și build</td></tr>
          <tr><td>Animații și interacțiuni custom</td><td>Crește timpul de inginerie</td></tr>
          <tr><td>Conținut pe care îl furnizezi vs. conținut care trebuie scris</td><td>Copywriting-ul adaugă timp semnificativ</td></tr>
          <tr><td>Integrări (rezervări, CRM, plăți)</td><td>Mută proiectul de la website la aplicație</td></tr>
        </tbody>
      </table>
      <h2>Cum obții o cifră exactă</h2>
      <p>Singura modalitate fiabilă de a obține o ofertă exactă este să descrii obiectivele, paginile și funcționalitatea reale, nu să ceri un preț în abstract. De obicei, o scurtă conversație de discovery este suficientă pentru a defini corect proiectul.</p>
    `,
    faqs: [
      {
        question: "Un website ieftin poate fi vreodată o opțiune bună?",
        answer:
          "Pentru o afacere foarte la început de drum, care are nevoie doar de o prezență temporară online, un site templated cu cost redus poate fi un pas rezonabil. De obicei trebuie înlocuit odată ce afacerea începe să se bazeze pe website pentru creștere.",
      },
      {
        question: "Facturați un preț fix sau pe oră?",
        answer:
          "Majoritatea proiectelor sunt definite la un preț fix, pe baza unui set definit de pagini și funcționalități, agreat înainte ca dezvoltarea să înceapă, astfel încât să nu existe surprize.",
      },
    ],
    relatedSlugs: ["custom-website-vs-template", "how-to-choose-a-web-development-company"],
  },
  {
    slug: "how-much-does-an-ecommerce-website-cost",
    title: "Cât costă un website e-commerce?",
    excerpt:
      "Prețul unui proiect e-commerce depinde de complexitatea catalogului, de nevoile de plată și livrare și de faptul că ai nevoie sau nu de un sistem admin custom. Iată cum să te gândești la asta.",
    category: "E-commerce",
    author: "INCODECRAFT",
    date: "2026-01-19",
    readingTime: "8 min citire",
    contentHtml: `
      <p>Proiectele e-commerce au un interval de preț mai larg decât website-urile standard, pentru că complexitatea de bază variază foarte mult — un magazin cu 20 de produse și unul cu 2.000 de produse și variante sunt probleme de inginerie fundamental diferite.</p>
      <h2>Pe platformă vs. construit custom</h2>
      <p>Un magazin pe platformă — construit pe Shopify sau WooCommerce — este de obicei calea mai rapidă și mai rentabilă pentru afaceri cu un catalog și un flux de checkout destul de standard. Un magazin construit complet custom are sens odată ce ai nevoie de comportament pe care platforma nu îl poate susține cu adevărat: logică de preț neobișnuită, configurare nestandard a produselor sau integrare profundă cu sisteme interne.</p>
      <h2>Ce influențează costul</h2>
      <ul>
        <li><strong>Dimensiunea și structura catalogului</strong> — numărul de produse, variante și categorii</li>
        <li><strong>Configurarea plăților</strong> — Stripe și metode de plată locale relevante pentru clienții din România și Moldova</li>
        <li><strong>Logica de livrare</strong> — tarife fixe, integrări cu curieri sau reguli mai complexe</li>
        <li><strong>Instrumente admin</strong> — cât de mult trebuie echipa ta să gestioneze fără implicarea unui developer</li>
        <li><strong>Design</strong> — o temă templated versus un storefront complet custom</li>
      </ul>
      <h2>Intervale tipice</h2>
      <p>Un magazin pe platformă, cu temă custom, se încadrează de obicei în intervalul €2.000–€5.000, în funcție de complexitatea catalogului. Un storefront construit complet custom, cu panou admin personalizat, pornește de obicei de la €5.000 și crește odată cu funcționalitatea.</p>
      <h2>Costuri dincolo de build</h2>
      <p>Comisioanele de procesare a plăților, hosting-ul și costurile de abonament la platformă (pentru Shopify) sunt costuri recurente, separate de prețul de dezvoltare, și merită bugetate de la început, ca să nu fii surprins mai târziu.</p>
    `,
    faqs: [
      {
        question: "Shopify sau WooCommerce — care este mai ieftin?",
        answer:
          "WooCommerce nu are taxă de abonament la platformă, dar necesită hosting și mai multă responsabilitate la setup. Shopify are o taxă lunară, dar include hosting și mai multă fiabilitate built-in. Costul total de proprietate depinde de nevoile tale specifice.",
      },
    ],
    relatedSlugs: ["shopify-vs-woocommerce", "how-to-improve-ecommerce-conversion"],
  },
  {
    slug: "custom-website-vs-template",
    title: "Website custom vs. template: care este diferența reală?",
    excerpt:
      "Template-urile și build-urile custom rezolvă probleme diferite. Iată cum să decizi care este potrivit pentru afacerea ta acum.",
    category: "Dezvoltare web",
    author: "INCODECRAFT",
    date: "2026-01-26",
    readingTime: "6 min citire",
    contentHtml: `
      <p>Alegerea între un template și un website construit custom nu ține de calitate în abstract — există template-uri bune și build-uri custom proaste. Ține de potrivirea dintre instrument și stadiul și obiectivele afacerii.</p>
      <h2>Când are sens un template</h2>
      <p>Un template este o alegere rezonabilă când rolul website-ului este simplu: să prezinte informații de bază, să arate profesional și să fii online rapid, cu un buget limitat. Multe afaceri la început de drum sunt bine deservite de un template bine ales.</p>
      <h2>Când are sens un build custom</h2>
      <p>Un build custom își merită costul odată ce website-ul trebuie să facă ceva ce un template nu poate face bine: să reflecte precis o identitate de brand specifică, să susțină structuri de conținut neobișnuite, să integreze funcționalitate custom sau să fie construit de la zero în jurul unei strategii SEO serioase.</p>
      <h2>Compromisurile reale</h2>
      <ul>
        <li><strong>Viteza de lansare</strong> — template-urile sunt mai rapide de pus live</li>
        <li><strong>Unicitate</strong> — un design custom nu poate fi confundat cu site-ul unui competitor construit pe aceeași temă</li>
        <li><strong>Plafon de performanță</strong> — codul custom are mai puține dependențe nefolosite care încetinesc paginile</li>
        <li><strong>Flexibilitate în timp</strong> — arhitectura custom se adaptează mai ușor la cerințe noi decât o temă construită pentru uz general</li>
      </ul>
      <h2>O modalitate practică de a decide</h2>
      <p>Dacă website-ul este central în modul în care clienții evaluează și aleg afacerea ta — ceea ce este adevărat pentru majoritatea afacerilor de servicii, magazinelor e-commerce și produselor SaaS — un build custom este de obicei investiția mai bună pe termen lung. Dacă website-ul este un canal secundar, un template poate fi perfect rezonabil.</p>
    `,
    relatedSlugs: ["how-much-does-a-website-cost-in-romania", "how-to-choose-a-web-development-company"],
  },
  {
    slug: "shopify-vs-woocommerce",
    title: "Shopify vs. WooCommerce: cum alegi platforma potrivită",
    excerpt:
      "Ambele platforme pot susține un magazin online serios. Alegerea corectă depinde de resursele tehnice, catalog și planurile de creștere.",
    category: "E-commerce",
    author: "INCODECRAFT",
    date: "2026-02-02",
    readingTime: "7 min citire",
    contentHtml: `
      <p>Shopify și WooCommerce pot ambele să susțină o afacere e-commerce serioasă, iar decizia între ele se reduce de obicei la cât control vrei versus cât vrei să fie gestionat pentru tine.</p>
      <h2>Shopify</h2>
      <p>Shopify este o platformă complet găzduită: hosting, securitate și infrastructură sunt gestionate pentru tine, și vine cu un ecosistem mare de aplicații. Compromisul este o taxă lunară de abonament, comisioane de tranzacție pe unele planuri și mai puțină flexibilitate pentru cerințe cu adevărat neobișnuite.</p>
      <h2>WooCommerce</h2>
      <p>WooCommerce este un plugin WordPress, ceea ce înseamnă că deții tu hosting-ul și ai mult mai multă flexibilitate pentru a personaliza comportamentul. Compromisul este mai multă responsabilitate la setup și o nevoie mai mare de mentenanță continuă.</p>
      <h2>O comparație directă</h2>
      <table>
        <thead><tr><th></th><th>Shopify</th><th>WooCommerce</th></tr></thead>
        <tbody>
          <tr><td>Hosting</td><td>Inclus</td><td>Auto-gestionat</td></tr>
          <tr><td>Cost lunar</td><td>Taxă de abonament</td><td>Doar cost de hosting</td></tr>
          <tr><td>Flexibilitate</td><td>Bună, în ecosistemul de aplicații</td><td>Foarte mare</td></tr>
          <tr><td>Mentenanță</td><td>Gestionată de Shopify</td><td>Responsabilitatea ta</td></tr>
          <tr><td>Ideal pentru</td><td>Echipe care vor mai puțin overhead tehnic</td><td>Echipe care vor control complet</td></tr>
        </tbody>
      </table>
      <h2>Părerea noastră</h2>
      <p>Pentru majoritatea afacerilor mici și medii care vor să avanseze rapid, cu mai puțină responsabilitate tehnică continuă, Shopify este alegerea mai predictibilă. Pentru afaceri cu logică neobișnuită de catalog sau care vor proprietate completă asupra stack-ului, WooCommerce merită setup-ul suplimentar.</p>
    `,
    relatedSlugs: ["how-much-does-an-ecommerce-website-cost", "how-to-improve-ecommerce-conversion"],
  },
  {
    slug: "how-to-improve-website-speed",
    title: "Cum să îmbunătățești viteza website-ului: o listă practică",
    excerpt:
      "Viteza site-ului afectează atât experiența utilizatorului, cât și pozițiile în căutare. Iată o listă practică, non-tehnică, pe care o poți parcurge.",
    category: "Performanță",
    author: "INCODECRAFT",
    date: "2026-02-09",
    readingTime: "6 min citire",
    contentHtml: `
      <p>Viteza website-ului este unul dintre puținii factori tehnici care afectează direct atât experiența utilizatorului, cât și vizibilitatea în căutare, ceea ce face ca merită luată în serios chiar dacă nu ești tu însuți tehnic.</p>
      <h2>De unde vin de obicei problemele de viteză</h2>
      <ul>
        <li><strong>Imagini neoptimizate</strong> — cea mai frecventă cauză a website-urilor lente</li>
        <li><strong>Prea multe scripturi third-party</strong> — trackere, widget-uri de chat și embed-uri care adaugă timp de încărcare</li>
        <li><strong>Biblioteci de animație inutile</strong> — JavaScript greu pentru efecte care adaugă puțină valoare</li>
        <li><strong>Hosting slab sau timp de răspuns al serverului</strong> — fundația pe care stă tot restul</li>
      </ul>
      <h2>O listă practică</h2>
      <ol>
        <li>Comprimă și dimensionează corect fiecare imagine înainte de upload</li>
        <li>Folosește formate moderne de imagine (WebP sau AVIF) acolo unde sunt suportate</li>
        <li>Auditează scripturile third-party și elimină tot ce nu este folosit activ</li>
        <li>Încarcă scripturile non-critice după conținutul principal, nu înainte</li>
        <li>Alege fonturile cu grijă și evită încărcarea greutăților de font nefolosite</li>
        <li>Testează pe o conexiune mobilă reală, nu doar pe Wi-Fi rapid de birou</li>
      </ol>
      <h2>De ce contează pentru pozițiile în căutare</h2>
      <p>Motoarele de căutare folosesc semnale de experiență a paginii, inclusiv viteza de încărcare, ca parte a ranking-ului. Un site mai rapid nu garantează singur o poziție mai bună, dar un site lent poate ține în loc o pagină altfel puternică.</p>
    `,
    faqs: [
      {
        question: "Care este un timp de încărcare țintă bun?",
        answer:
          "Ca orientare generală, țintește ca principalul conținut să fie vizibil în sub 2,5 secunde pe o conexiune mobilă tipică, ceea ce se aliniază cu pragurile Core Web Vitals folosite frecvent.",
      },
    ],
    relatedSlugs: ["custom-website-vs-template"],
  },
  {
    slug: "what-is-a-web-application",
    title: "Ce este o aplicație web? Și cum diferă de un website?",
    excerpt:
      "Linie dintre „website” și „aplicație web” este neclară în conversație, dar contează mult la planificare și buget. Iată o modalitate clară de a te gândi la asta.",
    category: "Aplicații web",
    author: "INCODECRAFT",
    date: "2026-02-16",
    readingTime: "6 min citire",
    contentHtml: `
      <p>În conversația de zi cu zi, „website” și „aplicație web” sunt adesea folosite interschimbabil, dar distincția contează odată ce planifici un proiect și un buget.</p>
      <h2>O definiție practică</h2>
      <p>Un website este în principal despre prezentarea informației: pagini, conținut și call-to-action-uri. O aplicație web este în principal despre a lăsa utilizatorii să facă ceva — să gestioneze date, să parcurgă un flux de lucru, să interacționeze cu un sistem care se schimbă în funcție de acțiunile lor.</p>
      <h2>Exemple pe fiecare parte</h2>
      <ul>
        <li><strong>Website:</strong> site-ul de marketing al unei companii, o landing page, un blog</li>
        <li><strong>Aplicație web:</strong> un dashboard pentru clienți, un sistem de rezervări, un CRM, un instrument intern de operațiuni</li>
      </ul>
      <p>Multe proiecte reale stau undeva la mijloc — un site de marketing cu un portal pentru clienți protejat prin login, de exemplu, are elemente din ambele.</p>
      <h2>De ce contează distincția la planificare</h2>
      <p>Aplicațiile web necesită de obicei mai multă gândire upfront despre structura datelor, rolurile și permisiunile utilizatorilor și despre cum se comportă sistemul în timp, pe măsură ce se acumulează date. Această muncă de planificare se vede atât în timeline, cât și în buget, și merită numită clar de la început, nu descoperită la mijlocul proiectului.</p>
      <h2>Cum descrii proiectul tău cu acuratețe</h2>
      <p>Un test simplu: dacă valoarea proiectului vine în principal din ce pot face utilizatorii în interiorul lui, nu din ce citesc pe el, descrii o aplicație web, și ar trebui definită și estimată ca atare.</p>
    `,
    relatedSlugs: ["how-much-does-a-custom-web-application-cost"],
  },
  {
    slug: "how-much-does-a-custom-web-application-cost",
    title: "Cât costă o aplicație web custom?",
    excerpt:
      "Prețul software-ului custom depinde mult mai mult de complexitatea datelor, rolurile utilizatorilor și integrări decât de designul vizual. Iată cum să te gândești la asta.",
    category: "Aplicații web",
    author: "INCODECRAFT",
    date: "2026-02-23",
    readingTime: "7 min citire",
    contentHtml: `
      <p>Prețul unei aplicații web custom este mai greu de generalizat decât prețul unui website, pentru că costul este condus în principal de complexitatea de bază, nu de finisajul vizual.</p>
      <h2>Ce influențează costul</h2>
      <ul>
        <li><strong>Complexitatea modelului de date</strong> — câte entități, relații și cazuri limită trebuie să gestioneze sistemul</li>
        <li><strong>Roluri și permisiuni</strong> — un instrument pentru un singur utilizator este mult mai simplu decât un sistem multi-rol</li>
        <li><strong>Integrări</strong> — conectarea la furnizori de plăți, API-uri externe sau sisteme de business existente</li>
        <li><strong>Nevoi de raportare</strong> — de la o listă simplă până la analize detaliate</li>
      </ul>
      <h2>Puncte de plecare orientative</h2>
      <p>Un instrument intern concentrat, care rezolvă o problemă clară — un calendar de rezervări, un CRM ușor pentru o echipă mică — pornește de obicei de la €3.000–€6.000. O platformă multi-rol mai completă, cu mai multe fluxuri de lucru de bază și integrări, pornește de regulă de la €6.000–€12.000, crescând de acolo în funcție de scope.</p>
      <h2>De ce „pachetele de aplicații web” cu preț fix funcționează rar</h2>
      <p>Spre deosebire de un website, unde numărul de pagini oferă un proxy rezonabil pentru scope, costul unei aplicații web depinde de logica de business invizibilă într-un număr de pagini. De aceea ofertele serioase pentru aplicații web urmează aproape întotdeauna o conversație de discovery, nu o listă de prețuri fixă.</p>
      <h2>Cum ții costurile sub control</h2>
      <p>Cea mai eficientă modalitate de a controla costul este să definești o primă versiune clară — cel mai mic set de funcționalități care rezolvă efectiv problema de bază — și să tratezi tot restul ca o a doua fază planificată, în loc să încerci să construiești viziunea completă din prima zi.</p>
    `,
    relatedSlugs: ["what-is-a-web-application", "how-to-choose-a-web-development-company"],
  },
  {
    slug: "how-to-choose-a-web-development-company",
    title: "Cum alegi un developer web sau un studio de dezvoltare",
    excerpt:
      "Alegerea persoanei sau echipei care îți construiește website-ul sau aplicația este o decizie mai importantă decât o tratează majoritatea afacerilor. Iată ce contează cu adevărat.",
    category: "Afaceri",
    author: "INCODECRAFT",
    date: "2026-03-02",
    readingTime: "7 min citire",
    contentHtml: `
      <p>Alegerea persoanei sau echipei care îți construiește website-ul sau aplicația web contează mai mult decât o tratează majoritatea afacerilor, pentru că decizia afectează nu doar calitatea la lansare, ci și cât de ușor poate fi schimbat produsul mai târziu.</p>
      <h2>Întrebări care merită puse</h2>
      <ul>
        <li>Pot arăta proiecte reale, funcționale — nu doar mockup-uri statice?</li>
        <li>Își explică procesul clar, sau scope-ul este vag de la început?</li>
        <li>Vei deține codul final, sau este blocat într-un sistem proprietar?</li>
        <li>Cu cine vei comunica de fapt în timpul proiectului?</li>
        <li>Cum gestionează schimbările și reviziile după lansare?</li>
      </ul>
      <h2>Agenție vs. developer independent</h2>
      <p>Agențiile mari oferă mai multe resurse pentru proiecte foarte mari, dar adaugă adesea straturi de account management între tine și persoana care construiește efectiv produsul. Un studio independent, condus de developer, schimbă această scală cu colaborare directă — lucrezi cu persoana responsabilă de cod, cu mai puține transferuri și mai puțină pierdere de informație.</p>
      <h2>Semnale de alarmă de urmărit</h2>
      <ul>
        <li>Niciun proces sau timeline clar înainte să plătești ceva</li>
        <li>Portofolii care arată doar mockup-uri de design, nu produse live</li>
        <li>Răspunsuri vagi despre cine deține codul final și hosting-ul</li>
        <li>Presiune să decizi imediat, fără o conversație de discovery adecvată</li>
      </ul>
      <h2>Cum arată o colaborare bună</h2>
      <p>O relație de lucru solidă începe cu o conversație reală de discovery despre obiectivele tale, un proces clar cu etape definite și transparență despre ce este inclus și ce nu — indiferent dacă lucrezi cu o agenție sau un studio independent.</p>
    `,
    relatedSlugs: ["custom-website-vs-template", "how-much-does-a-custom-web-application-cost"],
  },
  {
    slug: "how-ai-can-automate-a-small-business",
    title: "Cum poate AI automatiza părți dintr-o afacere mică",
    excerpt:
      "AI este cu adevărat util pentru sarcini specifice, bine definite. Iată o privire realistă asupra locurilor unde ajută efectiv o afacere mică astăzi.",
    category: "AI",
    author: "INCODECRAFT",
    date: "2026-03-09",
    readingTime: "6 min citire",
    contentHtml: `
      <p>AI este adesea discutat în termeni largi, ceea ce face greu de înțeles ce înseamnă de fapt pentru o anumită afacere mică. Cea mai utilă modalitate de a te gândi la asta este sarcină cu sarcină, nu ca o singură transformare.</p>
      <h2>Unde ajută AI cu adevărat astăzi</h2>
      <ul>
        <li><strong>Procesare repetitivă de conținut</strong> — transformare de imagini, parsare de documente, categorizare</li>
        <li><strong>Suport clienți de primă linie</strong> — răspuns la întrebări frecvente înainte de transferul către un om</li>
        <li><strong>Căutare și sumarizare internă</strong> — face cunoștințele de business existente mai ușor de găsit</li>
        <li><strong>Automatizare de flux de lucru</strong> — conectarea modelelor AI la sistemele de business existente pentru sarcini specifice, repetabile</li>
      </ul>
      <h2>Unde este mai puțin fiabil</h2>
      <p>AI este cel mai slab în situații cu ambiguitate mare, mize mari și puțin loc pentru eroare — decizii finale fără revizuire umană, de exemplu. Implementările reușite tind să păstreze un om în buclă exact pentru aceste cazuri.</p>
      <h2>Un punct de plecare practic</h2>
      <p>Cele mai reușite proiecte AI pentru afaceri mici încep îngust: alege o sarcină specifică, repetitivă, automatizeaz-o bine și extinde de acolo — în loc să încerci să construiești din prima zi un sistem AI de uz general.</p>
      <h2>Ce implică de fapt o implementare</h2>
      <p>În practică, asta înseamnă de obicei conectarea unui model AI la datele și fluxul tău de lucru existente printr-un strat de aplicație adecvat — nu doar o fereastră de chat, ci un sistem cu verificări, fallback-uri și o limită clară în jurul a ceea ce AI este de încredere să facă singur.</p>
    `,
    relatedSlugs: ["what-is-a-web-application"],
  },
];

blogPosts.push({
  slug: "how-to-improve-ecommerce-conversion",
  title: "Cum să îmbunătățești rata de conversie e-commerce: un ghid practic",
  excerpt:
    "Îmbunătățirile de conversie vin de obicei din eliminarea fricțiunii, nu din adăugarea de funcționalități strălucitoare. Iată unde să te concentrezi mai întâi.",
  category: "E-commerce",
  author: "INCODECRAFT",
  date: "2026-03-16",
  readingTime: "7 min citire",
  contentHtml: `
    <p>Optimizarea ratei de conversie este adesea tratată ca un subiect de growth hacking plin de trucuri ingenioase. În practică, cele mai mari câștiguri vin de obicei din eliminarea fricțiunii de bază care costă discret vânzări în fiecare zi.</p>
    <h2>Începe cu checkout-ul</h2>
    <p>Checkout-ul este locul unde se pierde cea mai mare parte a veniturilor e-commerce. Punctele frecvente de fricțiune includ obligarea creării unui cont înainte de cumpărare, ascunderea costurilor de livrare până la ultimul pas și cerința prea multor câmpuri în formular.</p>
    <ul>
      <li>Oferă checkout ca invitat ca flux implicit</li>
      <li>Arată costurile de livrare și livrarea estimată cât mai devreme</li>
      <li>Păstrează formularul de checkout doar cu câmpurile de care ai nevoie cu adevărat</li>
      <li>Susține metodele de plată pe care le preferă clienții tăi reali</li>
    </ul>
    <h2>Pagini de produs care răspund la întrebări reale</h2>
    <p>O pagină de produs puternică răspunde la întrebările pe care le are de fapt cumpărătorul: cum arată în utilizare, care sunt dimensiunile sau specificațiile exacte și ce se întâmplă dacă nu funcționează. Fotografii clare, descrieri oneste și detalii vizibile despre politica de retur reduc toate hesitația în momentul deciziei.</p>
    <h2>Viteza site-ului și experiența mobilă</h2>
    <p>Paginile lente și layout-urile mobile greoaie suprimă discret conversia chiar dacă nimeni nu se plânge direct — vizitatorii pur și simplu pleacă. Vezi articolul nostru companion despre viteza website-ului pentru o listă practică.</p>
    <h2>Semnale de încredere care contează cu adevărat</h2>
    <table>
      <thead><tr><th>Semnal</th><th>De ce contează</th></tr></thead>
      <tbody>
        <tr><td>Politică clară de retur</td><td>Reduce riscul perceput al unei decizii greșite</td></tr>
        <tr><td>Informații de contact vizibile</td><td>Semnalează o afacere reală, accesibilă</td></tr>
        <tr><td>Indicatori de checkout securizat</td><td>Reasigură exact în momentul plății</td></tr>
      </tbody>
    </table>
    <h2>Măsoară înainte să optimizezi</h2>
    <p>Înainte să schimbi ceva, merită să știi unde abandonează de fapt vizitatorii — pagina de produs, coșul sau checkout-ul — pentru că soluția potrivită depinde complet de locul unde stă fricțiunea.</p>
  `,
  faqs: [
    {
      question: "Care este o rată de conversie e-commerce „bună”?",
      answer:
        "Variază mult în funcție de industrie și punct de preț, așa că compararea cu o medie generică este mai puțin utilă decât urmărirea ratei tale proprii în timp și după fiecare schimbare specifică pe care o faci.",
    },
  ],
  relatedSlugs: ["how-much-does-an-ecommerce-website-cost", "how-to-improve-website-speed"],
});

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
