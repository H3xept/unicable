/**
 * Italian copy. It comes from the Wayback Machine snapshot of
 * https://www.unicableimpianti.it/ (18 April 2026). Wording is preserved;
 * only spelling (accents, apostrophes, casing) is normalised.
 */
import type { Content } from './content'

const number = (value: number) => value.toLocaleString('it-IT')

const ownPlantPitch = 'Un impianto fotovoltaico vostro, o sul tetto o sul cortile, conviene sempre.'
const zeroMaintenance =
  'Oggi la tecnologia permette di realizzare impianti di affidabilità elevata con zero manutenzione. Ossia una volta installato potrete anche dimenticarvi di averlo, perché non vi darà problemi. Ma avrete il vantaggio di avere la vostra energia elettrica, di giorno o in ogni momento, in dipendenza del tipo di impianto che avrete realizzato.'

export const it: Content = {
  company: {
    siteTitle: 'Unicable Srl – Impianti fotovoltaici e solare termico',
    tagline: "Specialisti in Tecnologie per l'Energia",
    since: (year) => `Sul mercato dal ${year}`,
    about: (year) => `Impianti fotovoltaici, sistemi di accumulo e kit pronti all’uso dal ${year}.`,
    activity: 'Impianti fotovoltaici e solare termico',
    offices: { legal: 'Sede legale', branch: 'Filiale' },
    phoneLines: '3 linee',
    phoneFax: 'T/fax',
    mobileName: 'Ing. Fausto Fernando',
    vat: 'P.IVA',
  },
  ui: {
    home: 'Home',
    gallery: 'Galleria',
    allProjects: 'Tutte le realizzazioni',
    download: 'Download',
    contactUs: 'Contattaci',
    contactLong: 'Contatto per informazioni',
    mainNav: 'Principale',
    mobileNav: 'Mobile',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
    call: (phone) => `Chiama ${phone}`,
    skipToContent: 'Vai al contenuto',
    breadcrumb: 'Percorso',
    language: 'Lingua',
    logoLabel: 'UNICABLE Impianti SRL – Home',
    learnMore: 'Scopri di più',
    discoverKits: 'Scopri i kit',
    pdf: (megabytes) => `PDF · ${number(megabytes)} MB`,
    photos: (count) => `${count} foto`,
  },
  documents: {
    accumulo: 'Sistemi di accumulo 1–50 kW',
    pompaggio: 'Kit A1 – Pompaggio solare',
    marbleCahm: 'MarbleCahm',
  },
  home: {
    heroAlt: 'Impianto fotovoltaico UNICABLE a San Benedetto dei Marsi',
    mottoLead: 'L’energia',
    mottoHighlight: 'è natura.',
    promise:
      "Con noi la migliore qualità impiantistica, assistenza e manutenzione professionale 'cost oriented'. Affidabilità certa e costi contenuti.",
    requestInfo: 'Richiedi informazioni',
    ourProjects: 'Le nostre realizzazioni',
    aboutEyebrow: 'Chi siamo',
    aboutTitle: (year) => `UNICABLE è presente sul mercato dal ${year}.`,
    intro:
      'Vi aiuterà a creare la vostra sorgente di energia elettrica, per ogni uso. Gli impianti UNICABLE hanno una affidabilità estrema e una frequenza di guasto insignificante. Vi invitiamo a visitare le nostre realizzazioni e a raccogliere giudizi su di noi dai nostri clienti.',
    visitProjects: 'Visita le realizzazioni',
    talkToUs: 'Parla con noi',
    aboutImageAlt: 'Tecnico UNICABLE al lavoro su un impianto fotovoltaico',
    factsEyebrow: 'Alcuni dati',
    factsTitle: 'Affidabilità certa e costi contenuti.',
    factsText: 'Gli impianti UNICABLE hanno una affidabilità estrema e una frequenza di guasto insignificante.',
    facts: [
      { value: '> 1100 h', label: 'MTBF su impianti gestiti' },
      { value: 'Zero', label: 'Sanzioni SL / ARPA / Vigili / Amm.ni' },
      { value: '220 ore', label: 'Formazione certificata nel 2025' },
      { value: '2', label: "Domande di brevetto per innovazione nel controllo e nella generazione dell'energia" },
    ],
    certifications: 'Certificazioni',
    offerEyebrow: 'Soluzioni',
    offerTitle: 'La vostra sorgente di energia elettrica, per ogni uso.',
    kitsCardSubtitle: 'Kit completi pronti all’uso',
    projectsEyebrow: 'Galleria',
    projectsTitle: 'Le nostre realizzazioni',
    projectsText: (count) => `Vi invitiamo a visitare le nostre realizzazioni: ${count} impianti documentati in foto.`,
    projectsCta: 'Vedi tutta la galleria',
    kitBandTitle: 'Kit fotovoltaici fino a 6 kW, pronti all’uso.',
    contactEyebrow: 'Contatti',
    contactTitle: 'Assistenza e manutenzione professionale.',
    contactText:
      'Per un nuovo impianto, per aumentare la resa del vostro impianto o per un sistema di accumulo, chiamate o scriveteci.',
  },
  services: {
    privati: {
      nav: 'Privati',
      title: 'Privati',
      subtitle: 'Impianti fotovoltaici residenziali',
      description:
        'Impianti fotovoltaici residenziali da 3 a 20 kW: connessi alla rete, in isola o con accumulo. Affidabilità elevata e zero manutenzione.',
      items: [
        'Connessi alla rete da 3 a 20 kW',
        'In isola da 3 a 20 kW con accumulo',
        'Connessi alla rete e con accumulo da 3 a 20 kW',
        'Impianti esclusivamente per luci di emergenza e/o antifurto',
        'Impianti di comando cancelli remoti senza alimentazione elettrica disponibile (con accumulo)',
        'Pali di illuminazione fotovoltaici stradali, da giardino, da balcone',
      ],
      body: [`${ownPlantPitch} Vi garantisce un livello di sicurezza in più.`, zeroMaintenance],
    },
    aziende: {
      nav: 'Aziende',
      title: 'Aziende',
      subtitle: 'Impianti fotovoltaici industriali',
      description:
        'Impianti fotovoltaici industriali connessi alla rete o in isola in regime di SEU. Valutate il risparmio nei 20–30 anni di vita dell’impianto.',
      items: ['Connessi alla rete', 'In isola in regime di SEU'],
      body: [`${ownPlantPitch} Valutate il risparmio che può consentirvi nei 20–30 anni di vita.`, zeroMaintenance],
      highlights: [{ value: '20–30 anni', label: "Vita utile dell'impianto" }],
    },
    'grandi-impianti': {
      nav: 'Grandi impianti',
      title: 'Grandi impianti',
      subtitle: 'Grandi impianti commerciali',
      description:
        'Grandi impianti fotovoltaici da 0,2 a 20 MW: progetto, AU o PAS, connessione in MT o AT, contratto di vendita con ESCO o distributori.',
      items: ['Connessi alla rete da 0,2 a 20 MW'],
      body: [
        'UNICABLE ingegneria cura lo sviluppo del progetto a partire dalla richiesta di AU o PAS. Cura la connessione con la rete e la connessione in MT o AT.',
        'Negozia con o per voi un buon contratto di vendita con le ESCO o i distributori, aiutandovi a spuntare un buon e affidabile prezzo.',
      ],
      highlights: [{ value: '0,2–20 MW', label: 'Potenza connessa alla rete' }],
    },
  },
  service: {
    imageAlt: (title) => `${title}: impianto realizzato da UNICABLE`,
    talkTitle: 'Parla con un tecnico',
    talkText: 'Fotovoltaico: progettazione, resa, manutenzione.',
    kitA1: 'Kit A1',
    otherSolutions: 'Altre soluzioni',
  },
  kits: {
    nav: 'Kits',
    title: 'Kits',
    footerTitle: 'Kits: impianti in kit',
    pitch: {
      questions: ['Sei un installatore?', 'Sei un amante del fai da te?'],
      text: 'UNICABLE realizza kit completi pronti all’uso per impianti fotovoltaici fino a 6 kW. Dentro la scatola troverai tutto il materiale e i certificati che ti permetteranno di realizzare la tua centrale elettrica!',
    },
    rangeEyebrow: 'La gamma',
    rangeTitle: 'Impianti in kit',
    range: [
      { title: 'Sistemi con accumulo 1–50 kW', doc: 'accumulo' },
      { title: 'Impianti di irrigazione da 3 a 20 kW', doc: 'pompaggio' },
      { title: 'Impianti di comando cancelli remoti senza alimentazione elettrica disponibile (con accumulo)' },
    ],
    datasheet: (megabytes) => `Scheda tecnica PDF · ${number(megabytes)} MB`,
    imageAlt: 'Cabina di un impianto UNICABLE',
    stepsEyebrow: 'Come funziona',
    stepsTitle: 'Dalla fabbrica alla vostra centrale elettrica',
    steps: [
      {
        title: 'Consegna a domicilio',
        text: "Il kit arriva a casa vostra dentro una o più casse con tutto il materiale che vi necessita per l'installazione.",
      },
      {
        title: 'Collaudato in fabbrica',
        text: 'Una pre-installazione e la prova di funzionamento è stata già eseguita in fabbrica prima della spedizione: infatti troverete all’interno il certificato di collaudo, le referenze del collaudatore, anche le foto o il film (a seconda del prodotto) su chiavetta USB del funzionamento. Il vostro acquisto è assolutamente sicuro.',
      },
      {
        title: 'Istruzioni passo passo',
        text: 'Dovrete solo leggere le istruzioni passo passo fino alla fine, e il lavoro è fatto. Un impianto costruito da voi consente un vantaggio economico sicuro, e inoltre agevolerà il vostro intervento, in caso di bisogno, prima di chiamare un tecnico, perché con molta probabilità il vostro impianto lo conoscerete molto bene.',
      },
      {
        title: 'Garanzia di 2 anni',
        text: 'La garanzia sui materiali del kit è di 2 anni, purché il montaggio sia conforme alle istruzioni.',
      },
    ],
    places: 'Potreste installare il vostro kit a casa, in campeggio, in giardino, ma persino su una barca o su un mezzo mobile.',
    signoff: 'Buon lavoro!',
    featuredEyebrow: 'In evidenza',
    featured: { title: 'Kit A1 – Pompaggio solare AC1', text: 'Potenze elettriche da 0,37 a 2,2 kW.' },
  },
  download: {
    title: 'Download',
    subtitle: 'Brochure e schede tecniche in formato PDF.',
    items: [
      { group: 'Sistemi di accumulo residenziali e industriali', label: 'Sistemi di accumulo', doc: 'accumulo' },
      { group: 'Kits', label: 'Pompaggio solare', doc: 'pompaggio' },
    ],
    relatedTitle: 'Aziende collegate',
  },
  contact: {
    title: 'Contatto per informazioni',
    subtitle: 'Scegliete l’area di interesse e contattate direttamente il referente.',
    crumb: 'Contatti',
    areasLabel: 'Aree',
    email: 'Email',
    officePhone: 'Tel',
    brochure: 'Scarica brochure dati su sistemi di accumulo',
    callNow: 'Chiama ora',
    areas: {
      fotovoltaico: {
        title: 'Fotovoltaico',
        groups: [
          {
            title: 'Aumentare la resa del tuo impianto fotovoltaico',
            items: [
              "Esame dell'installazione, verifica della massima efficienza dei componenti installati",
              'Esame del posizionamento: inclinazione e orientamento efficiente',
              "Verifica stato dei moduli e capacità di raffreddamento dell'inverter",
              'Verifica anomalie e disfunzione del cablaggio',
            ],
          },
          {
            title: 'Manutenzioni e misure, verifiche, riparazione moduli rotti',
            items: [
              'Misure di produzione per singolo pannello e per stringa',
              'Manutenzioni connessioni e verifica termica',
              'Riparazione moduli rotti e/o guasti',
            ],
          },
          {
            title: 'Correzione cos φ e recupero energia reattiva',
            items: ['Misura cos φ sulle 24 ore e eventuale proposta di dispositivo correttivo'],
          },
          {
            title: 'Realizzare un impianto',
            items: ["Realizzeremo per voi l'impianto migliore adattato alle vostre esigenze e consumi"],
          },
        ],
      },
      accumulo: {
        title: 'Accumulo a batteria',
        note: 'Con o senza connessione alla rete elettrica',
        groups: [
          {
            title: 'Sistemi isolati fino a 50 kW',
            text: "Off grid, in isola monofase o trifase da 1 kW a 50 kW, con accumulo a batterie piombo acido tipologia di trazione. Per l'utilizzo residenziale o in attività produttive in assenza di rete elettrica. Sistemi fissi, con struttura a terra o su copertura. Con o senza generatore a richiamo automatico di riserva.",
            items: ['Impianti 1 – 1,5 – 3,5 kW monofase', 'Impianti 10–35 kW trifase', 'Impianti 40–50 kW trifase'],
          },
        ],
      },
      generazione: {
        title: 'Gruppi di generazione solare',
        groups: [
          {
            items: [
              'Fino a 20 kW trifase e monofase carrellati',
              'Sistemi di irrigazione completi di pompa e circuiti idraulici',
              'Lampione stradale fotovoltaico singolo o in schiera (LED)',
              'Punti di misura remoti (livelli fiumi, orologi, centraline ambientali)',
              'Pensiline e parcheggi automobili con illuminazione fotovoltaica',
            ],
          },
        ],
      },
    },
  },
  gallery: {
    subtitle: (projects, photos) =>
      `${projects} realizzazioni, ${photos} foto. Vi invitiamo a visitare le nostre realizzazioni e a raccogliere giudizi su di noi dai nostri clienti.`,
    projectSubtitle: (photos) => `${photos} foto dell’impianto`,
    photoAlt: (title, index, count) => `${title}, foto ${index} di ${count}`,
    openPhoto: (alt) => `Apri ${alt}`,
    otherProjects: 'Altre realizzazioni',
    previous: 'Precedente',
    next: 'Successiva',
  },
  lightbox: {
    label: (index, count) => `Foto ${index} di ${count}`,
    close: 'Chiudi',
    previous: 'Foto precedente',
    next: 'Foto successiva',
  },
  notFound: {
    title: 'Pagina non trovata',
    text: 'La pagina richiesta non esiste o è stata spostata.',
    back: 'Torna alla home',
  },
  seo: {
    titleSuffix: ' | Unicable Srl',
    homeDescription:
      "UNICABLE srl, dal 1997: impianti fotovoltaici per privati, aziende e grandi impianti, sistemi di accumulo, kit pronti all'uso, assistenza e manutenzione.",
    kits: {
      title: 'Kit fotovoltaici pronti all’uso fino a 6 kW',
      description:
        'Kit completi per impianti fotovoltaici fino a 6 kW, collaudati in fabbrica, con istruzioni passo passo e garanzia di 2 anni. Accumulo, irrigazione, cancelli.',
    },
    download: {
      title: 'Download brochure e schede tecniche',
      description: 'Brochure e schede tecniche in PDF: sistemi di accumulo da 1 a 50 kW e kit A1 per il pompaggio solare.',
    },
    contact: {
      title: 'Contatto per informazioni',
      description: (phone) =>
        `Fotovoltaico, accumulo a batteria e gruppi di generazione solare: contattate i referenti UNICABLE. Tel ${phone}, sedi a Siena e Castiglione del Lago.`,
    },
    gallery: {
      title: 'Galleria delle realizzazioni',
      description: (projects, photos) =>
        `Le realizzazioni UNICABLE in foto: ${projects} impianti e ${photos} immagini, da San Benedetto dei Marsi a Greentech Amman.`,
    },
    project: {
      title: (name) => `${name} – Galleria realizzazioni`,
      description: (name, photos, since) =>
        `${name}: ${photos} foto della realizzazione UNICABLE. Impianti fotovoltaici, sistemi di accumulo e manutenzione dal ${since}.`,
    },
  },
}
