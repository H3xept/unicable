/**
 * All copy below comes from the Wayback Machine snapshot of
 * https://www.unicableimpianti.it/ (18 April 2026). Wording is preserved;
 * only spelling (accents, apostrophes, casing) is normalised.
 */

export const media = (file: string) => `/media/${file}`
export const thumb = (file: string) => `/media/thumbs/${file.replace(/\.(png|jpe?g)$/i, '.jpg')}`

export const company = {
  name: 'UNICABLE srl',
  brand: 'UNICABLE',
  siteTitle: 'Unicable Srl – Impianti fotovoltaici e solare termico',
  tagline: "Specialisti in Tecnologie per l'Energia",
  since: 1997,
  vat: '00944150523',
  email: 'info@unicableimpianti.it',
  phone: { display: '075 965 2137', intl: '(+39) 075.9652137', href: 'tel:+390759652137', note: 'Tel/fax, 3 linee' },
  mobile: { display: '338 272 1657', href: 'tel:+393382721657' },
  offices: [
    { label: 'Sede legale', address: 'Viale C.B. Cavour 136', city: '53100 Siena' },
    { label: 'Filiale', address: 'Via delle Genziane 12', city: '06061 Castiglione del Lago (PG)' },
  ],
} as const

export const mapsUrl = (address: string, city: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${city}`)}`

export const documents = {
  accumulo: {
    title: 'Sistemi di accumulo 1–50 kW',
    file: media('2016-06-sistemi-di-accumulo-1-50-KW.pdf'),
    size: '1,4 MB',
  },
  pompaggio: {
    title: 'Kit A1 – Pompaggio solare',
    file: media('2016-02-Pompaggio-solare_kitA1_UnicableImpianti.pdf'),
    size: '0,9 MB',
  },
  marbleCahm: {
    title: 'MarbleCahm',
    file: media('2016-03-MarbleCahm.pdf'),
    size: '1,9 MB',
  },
} as const

export const home = {
  intro:
    'Vi aiuterà a creare la vostra sorgente di energia elettrica, per ogni uso. Gli impianti UNICABLE hanno una affidabilità estrema e una frequenza di guasto insignificante. Vi invitiamo a visitare le nostre realizzazioni e a raccogliere giudizi su di noi dai nostri clienti.',
  motto: "L'energia è natura.",
  promise:
    "Con noi la migliore qualità impiantistica, assistenza e manutenzione professionale 'cost oriented'. Affidabilità certa e costi contenuti.",
  facts: [
    { value: '> 1100 h', label: 'MTBF su impianti gestiti' },
    { value: 'Zero', label: 'Sanzioni SL / ARPA / Vigili / Amm.ni' },
    { value: '220 ore', label: 'Formazione certificata nel 2025' },
    { value: '2', label: "Domande di brevetto per innovazione nel controllo e nella generazione dell'energia" },
  ],
  certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
}

export type Service = {
  slug: string
  nav: string
  title: string
  subtitle: string
  image: string
  items: string[]
  body: string[]
  highlights?: { value: string; label: string }[]
}

const ownPlantPitch =
  'Un impianto fotovoltaico vostro, o sul tetto o sul cortile, conviene sempre.'

export const services: Service[] = [
  {
    slug: 'privati',
    nav: 'Privati',
    title: 'Privati',
    subtitle: 'Impianti fotovoltaici residenziali',
    image: '2016-02-100_3157.jpg',
    items: [
      'Connessi alla rete da 3 a 20 kW',
      'In isola da 3 a 20 kW con accumulo',
      'Connessi alla rete e con accumulo da 3 a 20 kW',
      'Impianti esclusivamente per luci di emergenza e/o antifurto',
      'Impianti di comando cancelli remoti senza alimentazione elettrica disponibile (con accumulo)',
      'Pali di illuminazione fotovoltaici stradali, da giardino, da balcone',
    ],
    body: [
      `${ownPlantPitch} Vi garantisce un livello di sicurezza in più.`,
      'Oggi la tecnologia permette di realizzare impianti di affidabilità elevata con zero manutenzione. Ossia una volta installato potrete anche dimenticarvi di averlo, perché non vi darà problemi. Ma avrete il vantaggio di avere la vostra energia elettrica, di giorno o in ogni momento, in dipendenza del tipo di impianto che avrete realizzato.',
    ],
  },
  {
    slug: 'aziende',
    nav: 'Aziende',
    title: 'Aziende',
    subtitle: 'Impianti fotovoltaici industriali',
    image: '2016-02-100_3334.jpg',
    items: ['Connessi alla rete', 'In isola in regime di SEU'],
    body: [
      `${ownPlantPitch} Valutate il risparmio che può consentirvi nei 30–40 anni di vita.`,
      'Oggi la tecnologia permette di realizzare impianti di affidabilità elevata con zero manutenzione. Ossia una volta installato potrete anche dimenticarvi di averlo, perché non vi darà problemi. Ma avrete il vantaggio di avere la vostra energia elettrica, di giorno o in ogni momento, in dipendenza del tipo di impianto che avrete realizzato.',
    ],
    highlights: [{ value: '30–40 anni', label: "Vita utile dell'impianto" }],
  },
  {
    slug: 'grandi-impianti',
    nav: 'Grandi impianti',
    title: 'Grandi impianti',
    subtitle: 'Grandi impianti commerciali',
    image: '2016-02-100_3498.jpg',
    items: ['Connessi alla rete da 0,2 a 20 MW'],
    body: [
      'UNICABLE ingegneria cura lo sviluppo del progetto a partire dalla richiesta di AU o PAS. Cura la connessione con la rete e la connessione in MT o AT.',
      'Negozia con o per voi un buon contratto di vendita con le ESCO o i distributori, aiutandovi a spuntare un buon e affidabile prezzo.',
      "Realizza l'impianto chiavi in mano con performance ratio > 88%. Dovrete solo esercitarvi sulla disciplina contabile e vedere un impianto chiavi in mano da 900 k€/MW, con un buon contratto di vendita da noi proposto (compreso tra 0,05 e 0,06 €/kWh), se vi rende la convenienza finanziaria sufficiente.",
    ],
    highlights: [
      { value: '0,2–20 MW', label: 'Potenza connessa alla rete' },
      { value: '> 88%', label: 'Performance ratio' },
      { value: '900 k€/MW', label: 'Impianto chiavi in mano' },
      { value: '0,05–0,06 €/kWh', label: 'Contratto di vendita proposto' },
    ],
  },
]

export const kits = {
  image: '2015-09-cabina.png',
  pitch: {
    questions: ['Sei un installatore?', 'Sei un amante del fai da te?'],
    text: 'UNICABLE realizza kit completi pronti all’uso per impianti fotovoltaici fino a 6 kW. Dentro la scatola troverai tutto il materiale e i certificati che ti permetteranno di realizzare la tua centrale elettrica!',
  },
  range: [
    { title: 'Sistemi con accumulo 1–50 kW', doc: documents.accumulo },
    { title: 'Impianti di irrigazione da 3 a 20 kW', doc: documents.pompaggio },
    { title: 'Impianti di comando cancelli remoti senza alimentazione elettrica disponibile (con accumulo)' },
  ],
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
  featured: {
    title: 'Kit A1 – Pompaggio solare AC1',
    text: 'Potenze elettriche da 0,37 a 2,2 kW.',
    image: '2016-02-pompaggio-solare_kit.jpg',
    doc: documents.pompaggio,
  },
}

export const downloads = [
  { group: 'Sistemi di accumulo residenziali e industriali', label: 'Sistemi di accumulo', doc: documents.accumulo },
  { group: 'Kits', label: 'Pompaggio solare', doc: documents.pompaggio },
]

export type ContactArea = {
  id: string
  title: string
  note?: string
  email: string
  phones: { display: string; href: string; label: string }[]
  groups: { title?: string; text?: string; items: string[] }[]
  doc?: { title: string; file: string; size: string }
}

const office = { display: company.phone.display, href: company.phone.href, label: 'Tel' }

export const contactAreas: ContactArea[] = [
  {
    id: 'fotovoltaico',
    title: 'Fotovoltaico',
    email: 'fernando@unicableimpianti.it',
    phones: [office, { display: company.mobile.display, href: company.mobile.href, label: 'Cell' }],
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
  {
    id: 'accumulo',
    title: 'Accumulo a batteria',
    note: 'Con o senza connessione alla rete elettrica',
    email: 'guido@unicableimpianti.it',
    phones: [office],
    groups: [
      {
        title: 'Sistemi isolati fino a 50 kW',
        text: "Off grid, in isola monofase o trifase da 1 kW a 50 kW, con accumulo a batterie piombo acido tipologia di trazione. Per l'utilizzo residenziale o in attività produttive in assenza di rete elettrica. Sistemi fissi, con struttura a terra o su copertura. Con o senza generatore a richiamo automatico di riserva.",
        items: ['Impianti 1 – 1,5 – 3,5 kW monofase', 'Impianti 10–35 kW trifase', 'Impianti 40–50 kW trifase'],
      },
    ],
    doc: documents.accumulo,
  },
  {
    id: 'generazione',
    title: 'Gruppi di generazione solare',
    email: 'guido@unicableimpianti.it',
    phones: [office],
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
]

export const relatedCompanies = [
  { label: 'Unicable.us', href: 'http://www.unicable.us' },
  { label: 'Unicableservizi.com', href: 'http://www.unicableservizi.com' },
]
