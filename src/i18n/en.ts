/** English copy: a translation of the Italian copy in src/i18n/it.ts. */
import type { Content } from './content'

const number = (value: number) => value.toLocaleString('en-GB')

const ownPlantPitch = 'Your own photovoltaic system, on the roof or in the yard, always pays off.'
const zeroMaintenance =
  'Today’s technology makes highly reliable systems with zero maintenance possible. Once the system is installed, you can forget it is there, because it will give you no trouble. And you will have your own electricity, during the day or at any time, depending on the type of system you choose.'

export const en: Content = {
  company: {
    siteTitle: 'Unicable Srl – Photovoltaic and solar thermal systems',
    tagline: 'Specialists in Energy Technologies',
    since: (year) => `In business since ${year}`,
    about: (year) => `Photovoltaic systems, energy storage and ready-to-install kits since ${year}.`,
    activity: 'Photovoltaic and solar thermal systems',
    offices: { legal: 'Registered office', branch: 'Branch office' },
    phoneLines: '3 lines',
    phoneFax: 'Tel/fax',
    mobileName: 'Fausto Fernando',
    vat: 'VAT no.',
  },
  ui: {
    home: 'Home',
    gallery: 'Gallery',
    allProjects: 'All projects',
    download: 'Downloads',
    contactUs: 'Contact',
    contactLong: 'Get in touch',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    call: (phone) => `Call ${phone}`,
    skipToContent: 'Skip to content',
    breadcrumb: 'Breadcrumb',
    language: 'Language',
    logoLabel: 'UNICABLE Impianti SRL – Home',
    learnMore: 'Learn more',
    discoverKits: 'Explore the kits',
    pdf: (megabytes) => `PDF in Italian · ${number(megabytes)} MB`,
    // Every project has at least two photos, so the plural form is enough.
    photos: (count) => `${count} photos`,
  },
  documents: {
    accumulo: 'Energy storage systems 1–50 kW',
    pompaggio: 'Kit A1 – Solar pumping',
    marbleCahm: 'MarbleCahm',
  },
  home: {
    heroAlt: 'UNICABLE photovoltaic plant at San Benedetto dei Marsi',
    mottoLead: 'Energy',
    mottoHighlight: 'is nature.',
    promise:
      'With us you get the best system quality and professional, cost-oriented support and maintenance. Proven reliability at contained costs.',
    requestInfo: 'Request information',
    ourProjects: 'Our projects',
    aboutEyebrow: 'About us',
    aboutTitle: (year) => `UNICABLE has been in business since ${year}.`,
    intro:
      'We will help you create your own source of electricity, for any use. UNICABLE systems are extremely reliable and fail very rarely. We invite you to visit our projects and to ask our customers what they think of us.',
    visitProjects: 'Visit our projects',
    talkToUs: 'Talk to us',
    aboutImageAlt: 'UNICABLE technician working on a photovoltaic system',
    factsEyebrow: 'Key figures',
    factsTitle: 'Proven reliability at contained costs.',
    factsText: 'UNICABLE systems are extremely reliable and fail very rarely.',
    facts: [
      { value: '> 1,100 h', label: 'MTBF on the plants we manage' },
      { value: 'Zero', label: 'Fines from safety, environmental, police or local authorities' },
      { value: '220 hours', label: 'Certified training in 2025' },
      { value: '2', label: 'Patent applications for innovations in energy control and generation' },
    ],
    certifications: 'Certifications',
    offerEyebrow: 'Solutions',
    offerTitle: 'Your own source of electricity, for any use.',
    kitsCardSubtitle: 'Complete ready-to-install kits',
    projectsEyebrow: 'Gallery',
    projectsTitle: 'Our projects',
    projectsText: (count) => `We invite you to visit our projects: ${count} plants documented in photos.`,
    projectsCta: 'See the whole gallery',
    kitBandTitle: 'Photovoltaic kits up to 6 kW, ready to install.',
    contactEyebrow: 'Contact',
    contactTitle: 'Professional support and maintenance.',
    contactText:
      'For a new system, to raise the yield of your existing system, or for an energy storage system, call or write to us.',
  },
  services: {
    privati: {
      nav: 'Residential',
      title: 'Residential',
      subtitle: 'Residential photovoltaic systems',
      description:
        'Residential photovoltaic systems from 3 to 20 kW: grid-connected, off-grid or with storage. High reliability and zero maintenance.',
      items: [
        'Grid-connected, 3 to 20 kW',
        'Off-grid with storage, 3 to 20 kW',
        'Grid-connected with storage, 3 to 20 kW',
        'Systems only for emergency lighting and/or burglar alarms',
        'Remote gate controls where no mains power is available (with storage)',
        'Photovoltaic lights for streets, gardens and balconies',
      ],
      body: [`${ownPlantPitch} It also gives you an extra level of security.`, zeroMaintenance],
    },
    aziende: {
      nav: 'Business',
      title: 'Business',
      subtitle: 'Industrial photovoltaic systems',
      description:
        'Industrial photovoltaic systems, grid-connected or off-grid under the Italian SEU scheme. Weigh the savings over the plant’s 20–30-year life.',
      items: ['Grid-connected', 'Off-grid under the SEU (efficient user system) scheme'],
      body: [`${ownPlantPitch} Consider the savings it can bring you over its 20–30-year life.`, zeroMaintenance],
      highlights: [{ value: '20–30 years', label: 'Service life of the plant' }],
    },
    'grandi-impianti': {
      nav: 'Utility-scale',
      title: 'Utility-scale plants',
      subtitle: 'Large commercial plants',
      description:
        'Photovoltaic plants from 0.2 to 20 MW: design, AU or PAS permits, MV or HV grid connection, sales contracts with ESCOs or distributors.',
      items: ['Grid-connected, 0.2 to 20 MW'],
      body: [
        'UNICABLE engineering develops the project, starting from the permit application (AU single authorisation or PAS simplified procedure). It manages the grid connection at medium voltage (MV) or high voltage (HV).',
        'With you or on your behalf, it negotiates a good sales contract with ESCOs (energy service companies) or distributors, and helps you secure a good and dependable price.',
      ],
      highlights: [{ value: '0.2–20 MW', label: 'Grid-connected capacity' }],
    },
  },
  service: {
    imageAlt: (title) => `${title}: a plant built by UNICABLE`,
    talkTitle: 'Talk to an engineer',
    talkText: 'Photovoltaics: design, yield, maintenance.',
    kitA1: 'Kit A1',
    otherSolutions: 'Other solutions',
  },
  kits: {
    nav: 'Kits',
    title: 'Kits',
    footerTitle: 'Kits: systems in a box',
    pitch: {
      questions: ['Are you an installer?', 'Do you love DIY?'],
      text: 'UNICABLE makes complete, ready-to-install kits for photovoltaic systems up to 6 kW. Inside the box you will find all the materials and certificates you need to build your own power plant!',
    },
    rangeEyebrow: 'The range',
    rangeTitle: 'Systems in kit form',
    range: [
      { title: 'Storage systems 1–50 kW', doc: 'accumulo' },
      { title: 'Irrigation systems from 3 to 20 kW', doc: 'pompaggio' },
      { title: 'Remote gate controls where no mains power is available (with storage)' },
    ],
    datasheet: (megabytes) => `Datasheet, PDF in Italian · ${number(megabytes)} MB`,
    imageAlt: 'Equipment cabin of a UNICABLE plant',
    stepsEyebrow: 'How it works',
    stepsTitle: 'From the factory to your own power plant',
    steps: [
      {
        title: 'Home delivery',
        text: 'The kit arrives at your home in one or more crates, with all the material you need for the installation.',
      },
      {
        title: 'Factory-tested',
        text: 'Before shipping, the kit is pre-installed and its operation is tested at the factory. Inside you will find the test certificate, the tester’s references, and photos or a video of the working system on a USB stick (depending on the product). Your purchase is completely safe.',
      },
      {
        title: 'Step-by-step instructions',
        text: 'You only have to follow the step-by-step instructions to the end, and the job is done. A system you build yourself saves you money for certain. It also makes it easier to step in yourself, if needed, before you call a technician, because you will most likely know your system very well.',
      },
      {
        title: '2-year warranty',
        text: 'The kit materials carry a 2-year warranty, provided the assembly follows the instructions.',
      },
    ],
    places: 'You could install your kit at home, at a campsite, in the garden, or even on a boat or a vehicle.',
    signoff: 'Enjoy the build!',
    featuredEyebrow: 'Featured',
    featured: { title: 'Kit A1 – AC1 solar pumping', text: 'Electrical power from 0.37 to 2.2 kW.' },
  },
  download: {
    title: 'Downloads',
    subtitle: 'Brochures and datasheets in PDF format, in Italian.',
    items: [
      { group: 'Residential and industrial energy storage systems', label: 'Energy storage systems', doc: 'accumulo' },
      { group: 'Kits', label: 'Solar pumping', doc: 'pompaggio' },
    ],
    relatedTitle: 'Related companies',
  },
  contact: {
    title: 'Get in touch',
    subtitle: 'Choose your area of interest and contact the person in charge directly.',
    crumb: 'Contact',
    areasLabel: 'Areas',
    email: 'Email',
    officePhone: 'Tel',
    brochure: 'Download the energy storage brochure',
    callNow: 'Call now',
    areas: {
      fotovoltaico: {
        title: 'Photovoltaics',
        groups: [
          {
            title: 'Increase the yield of your photovoltaic system',
            items: [
              'Inspection of the installation and check that the installed components reach peak efficiency',
              'Review of the placement: efficient tilt and orientation',
              'Check of the module condition and of the inverter cooling capacity',
              'Check for wiring faults and malfunctions',
            ],
          },
          {
            title: 'Maintenance, measurements, inspections and repair of broken modules',
            items: [
              'Production measurements per panel and per string',
              'Maintenance of connections and thermal inspection',
              'Repair of broken and/or faulty modules',
            ],
          },
          {
            title: 'Power factor (cos φ) correction and reactive energy recovery',
            items: ['24-hour cos φ measurement and, if needed, a proposal for a correction device'],
          },
          {
            title: 'Build a new system',
            items: ['We will build the best system for your needs and consumption'],
          },
        ],
      },
      accumulo: {
        title: 'Battery storage',
        note: 'With or without a grid connection',
        groups: [
          {
            title: 'Off-grid systems up to 50 kW',
            text: 'Off-grid single-phase or three-phase systems from 1 kW to 50 kW, with traction-type lead-acid battery storage. For homes or businesses where no grid is available. Fixed systems, ground-mounted or on a roof. With or without an automatic backup generator.',
            items: ['1 – 1.5 – 3.5 kW single-phase systems', '10–35 kW three-phase systems', '40–50 kW three-phase systems'],
          },
        ],
      },
      generazione: {
        title: 'Solar generator units',
        groups: [
          {
            items: [
              'Trailer-mounted units up to 20 kW, three-phase and single-phase',
              'Complete irrigation systems with pump and hydraulic circuits',
              'Photovoltaic street lights, single or in rows (LED)',
              'Remote measuring stations (river levels, clocks, environmental monitors)',
              'Canopies and car parks with photovoltaic lighting',
            ],
          },
        ],
      },
    },
  },
  gallery: {
    subtitle: (projects, photos) =>
      `${projects} projects, ${photos} photos. We invite you to visit our projects and to ask our customers what they think of us.`,
    projectSubtitle: (photos) => `${photos} photos of the plant`,
    photoAlt: (title, index, count) => `${title}, photo ${index} of ${count}`,
    openPhoto: (alt) => `Open ${alt}`,
    otherProjects: 'Other projects',
    previous: 'Previous',
    next: 'Next',
  },
  lightbox: {
    label: (index, count) => `Photo ${index} of ${count}`,
    close: 'Close',
    previous: 'Previous photo',
    next: 'Next photo',
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you requested does not exist or has moved.',
    back: 'Back to the home page',
  },
  seo: {
    titleSuffix: ' | Unicable Srl',
    homeDescription:
      'UNICABLE srl, since 1997: photovoltaic systems for homes, businesses and utility-scale plants, energy storage, ready-to-install kits, support and maintenance.',
    kits: {
      title: 'Ready-to-install photovoltaic kits up to 6 kW',
      description:
        'Complete kits for photovoltaic systems up to 6 kW, factory-tested, with step-by-step instructions and a 2-year warranty. Storage, irrigation, gate controls.',
    },
    download: {
      title: 'Brochures and datasheets',
      description: 'PDF brochures and datasheets, in Italian: energy storage systems from 1 to 50 kW and the A1 solar pumping kit.',
    },
    contact: {
      title: 'Get in touch',
      description: (phone) =>
        `Photovoltaics, battery storage and solar generator units: contact the UNICABLE specialists. Tel +39 ${phone}, offices in Siena and Castiglione del Lago.`,
    },
    gallery: {
      title: 'Project gallery',
      description: (projects, photos) =>
        `UNICABLE projects in photos: ${projects} plants and ${photos} images, from San Benedetto dei Marsi to Greentech Amman.`,
    },
    project: {
      title: (name) => `${name} – Project gallery`,
      description: (name, photos, since) =>
        `${name}: ${photos} photos of this UNICABLE project. Photovoltaic systems, energy storage and maintenance since ${since}.`,
    },
  },
}
