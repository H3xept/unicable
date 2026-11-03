export type Project = {
  slug: string
  title: string
  /** File names inside /public/media, in the order of the original gallery. */
  images: string[]
}

export const projects: Project[] = [
  {
    slug: 'san-benedetto-dei-marsi',
    title: 'San Benedetto dei Marsi',
    images: [
      '2016-03-Impianto_San-Benedetto-dei-Marsi-16.jpg',
      '2016-03-Impianto_San-Benedetto-dei-Marsi-29a.jpg',
      '2016-03-Impianto_San-Benedetto-dei-Marsi-47.jpg',
      '2016-03-SENSORE-TEMPERATURA-CABINA-1.jpg',
      '2016-03-Impianto_San-Benedetto-dei-Marsi-19.jpg',
      '2016-03-SENSORE-ENERGIA-2.jpg',
      '2016-03-Impianto_San-Benedetto-dei-Marsi-29.jpg',
      '2016-03-Impianto_San-Benedetto-dei-Marsi-03.jpg',
    ],
  },
  {
    slug: 'torelli-celano',
    title: 'Torelli Celano',
    images: [
      '2016-03-Impianto_Torelli-Celano-38.jpg',
      '2016-03-Torelli-Celano47.jpg',
    ],
  },
  {
    slug: 'zaudi-la-valletta',
    title: 'Zaudi La Valletta',
    images: [
      '2016-03-Zaudi-La-Valletta05.jpg',
      '2016-03-Zaudi-La-Valletta-44.jpg',
    ],
  },
  {
    slug: 'terraforte-castiglione-del-lago',
    title: 'Terraforte Castiglione del Lago',
    images: [
      '2016-03-Impianto_Terraforte-Castiglione-del-lago-00.jpg',
      '2016-03-Impianto_Terraforte-Castiglione-del-lago-03.jpg',
      '2016-03-Impianto_Terraforte-Castiglione-del-lago-01.jpg',
      '2016-03-Impianto_Terraforte-Castiglione-del-lago-99.jpg',
      '2016-03-Impianto_Terraforte-Castiglione-del-lago-97.jpg',
      '2016-03-Impianto_Terraforte-Castiglione-del-lago-96.jpg',
    ],
  },
  {
    slug: 'cantina-gentili',
    title: 'Cantina Gentili',
    images: [
      '2016-02-100_3334.jpg',
      '2016-02-100_3331.jpg',
      '2015-09-cabina.png',
      '2015-11-celle-solari-energia-rinnovabile.jpg',
    ],
  },
  {
    slug: 'doncaster-uk',
    title: 'Doncaster (UK)',
    images: [
      '2016-05-IMG_1993.jpg',
      '2016-05-solar-cells-191691__180.jpg',
    ],
  },
  {
    slug: 'elettraenergy-pontinia',
    title: 'Elettraenergy Pontinia',
    images: [
      '2016-05-project-pontinia.jpg',
      '2016-05-100_3400.jpg',
    ],
  },
  {
    slug: 'emilio-cese',
    title: 'Emilio Cese',
    images: [
      '2016-05-100_3376.jpg',
      '2016-05-DSC_1655.jpg',
      '2016-05-DSC_1652.jpg',
    ],
  },
  {
    slug: 'frescaenergia-srl-torre-orsaia',
    title: 'Frescaenergia srl Torre Orsaia',
    images: [
      '2016-05-100_3456.jpg',
      '2016-05-100_3388.jpg',
      '2016-05-alternative-21581__180.jpg',
      '2016-02-impianto-fotovoltaici-italia.jpg',
    ],
  },
  {
    slug: 'scuola-comunale-la-colonnetta-castiglione-del-lago',
    title: 'Scuola comunale La Colonnetta Castiglione del Lago',
    images: [
      '2016-05-100_3339.jpg',
      '2016-05-100_3174.jpg',
      '2016-05-100_3176.jpg',
      '2016-05-100_3178.jpg',
    ],
  },
  {
    slug: 'unicable-capannone',
    title: 'Unicable capannone',
    images: [
      '2016-05-ALLEGATO-FOTO-1.jpg',
      '2016-05-ALLEGATO-FOTO-3.jpg',
    ],
  },
  {
    slug: 'greentech-amman',
    title: 'Greentech Amman',
    images: [
      '2016-06-greentech-2-1.jpg',
      '2016-06-greentech-4.jpg',
      '2016-06-greentech-1.jpg',
      '2016-06-greentech-3.jpg',
      '2016-06-Part-of-GT-Team.jpg',
    ],
  },
]

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
