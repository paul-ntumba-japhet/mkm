import photoXe265c from '~/assets/image/engin15.jpeg'
import photoLw500 from '~/assets/image/engin10.jpeg'
import photoXs203 from '~/assets/image/engin3.jpeg'
import photoXe210 from '~/assets/image/engin7.jpeg'
import photoXe215 from '~/assets/image/engin11.jpeg'
import photoZl50 from '~/assets/image/engin18.jpeg'
import photoXc870 from '~/assets/image/engin12.jpeg'
import photoGrue from '~/assets/image/engin20.jpeg'

export type EnginSpec = { icon: string, label: string }
export type EnginRow = { label: string, value: string }

export type Engin = {
  slug: string
  name: string
  image: string
  alt: string
  specs: EnginSpec[]
  text: string
  role: string
  works: string[]
  sheet: EnginRow[]
  sourceName: string
  sourceUrl: string | null
  note: string
}

const noteCatalogue = 'Valeurs de catalogue du constructeur. Elles décrivent une configuration de référence et doivent être rapprochées de la plaque de l’engin proposé avant toute location.'

export const engins: Engin[] = [
  {
    slug: 'xe265c',
    name: 'Pelle sur chenilles XCMG XE265C',
    image: photoXe265c,
    alt: 'Pelle sur chenilles XCMG XE265C sur un chantier de terrassement.',
    specs: [
      { icon: 'weight', label: '25 500 kg' },
      { icon: 'box', label: '1,2 m³' },
      { icon: 'zap', label: '135,5 kW' }
    ],
    text: 'Pelle sur chenilles pour l’excavation, les fouilles et le chargement.',
    role: 'Pelle hydraulique sur chenilles destinée aux excavations et aux chargements de terrassement. La masse de catalogue est de 25 500 kg : une indication « 30 tonnes » ne correspond pas à la fiche constructeur.',
    works: [
      'Terrassements de volume',
      'Fouilles et excavation',
      'Chargement de camions',
      'Aménagement de plateformes'
    ],
    sheet: [
      { label: 'Masse en ordre de marche', value: '25 500 kg' },
      { label: 'Puissance nominale', value: '135,5 kW' },
      { label: 'Moteur de référence', value: 'Isuzu CC-6BG1TRP-05' },
      { label: 'Godet de référence', value: '1,2 m³' },
      { label: 'Couple maximal', value: '637 N·m à 1 800 tr/min' },
      { label: 'Cylindrée', value: '6,494 L' },
      { label: 'Vitesse de translation', value: '5,9 / 4,0 km/h' },
      { label: 'Vitesse de rotation', value: '11,3 tr/min' },
      { label: 'Force au godet', value: '179 kN' },
      { label: 'Force au balancier', value: '125 kN' },
      { label: 'Cabine de référence', value: 'ROPS et FOPS' },
      { label: 'Norme d’émission', value: 'Chine II' }
    ],
    sourceName: 'XCMG — fiche XE265C',
    sourceUrl: 'https://www.xcmgglobal.com/product/c-series/xe265c/',
    note: noteCatalogue
  },
  {
    slug: 'lw500kn',
    name: 'Chargeuse XCMG LW500KN',
    image: photoLw500,
    alt: 'Chargeuse sur pneus XCMG LW500KN avec godet frontal.',
    specs: [
      { icon: 'weight', label: '17 200 kg' },
      { icon: 'box', label: '5 000 kg' },
      { icon: 'zap', label: '162 kW' }
    ],
    text: 'Chargeuse sur pneus pour reprendre les matériaux et charger les camions.',
    role: 'Chargeuse articulée sur pneus pour la reprise de matériaux en vrac et le chargement des camions. La charge nominale de 5 000 kg ne doit pas être confondue avec la masse de la machine, qui est de 17 200 kg au catalogue.',
    works: [
      'Carrières et dépôts de matériaux',
      'Travaux routiers',
      'Chargement sur chantier',
      'Reprise de sable, gravier et terre'
    ],
    sheet: [
      { label: 'Charge nominale', value: '5 000 kg' },
      { label: 'Masse de référence', value: '17 200 kg' },
      { label: 'Puissance nominale', value: '162 kW' },
      { label: 'Moteur de référence', value: 'WD10G220E21' },
      { label: 'Godets au catalogue', value: '2,7 à 4,5 m³ selon configuration' },
      { label: 'Hauteur de déversement', value: '3 150 à 3 560 mm' },
      { label: 'Portée au déversement maxi', value: '1 100 à 1 190 mm' },
      { label: 'Force d’arrachement', value: '170 kN' },
      { label: 'Empattement', value: '3 300 mm' },
      { label: 'Voie', value: '2 250 mm' },
      { label: 'Rayon de braquage aux pneus', value: '5 925 mm' },
      { label: 'Angle d’articulation', value: '30°' },
      { label: 'Pneumatiques', value: '23.5-25-16PR' },
      { label: 'Dimensions hors tout', value: '8 870 × 3 000 × 3 350 mm' }
    ],
    sourceName: 'XCMG — tableau LW500KN',
    sourceUrl: 'https://www.machmall.com/item-detail/xcmg-loader-9152.html',
    note: `${noteCatalogue} Le volume du godet effectivement monté reste à confirmer.`
  },
  {
    slug: 'xs203j',
    name: 'Compacteur XCMG XS203J',
    image: photoXs203,
    alt: 'Compacteur vibrant XCMG XS203J à cylindre lisse.',
    specs: [
      { icon: 'weight', label: '20 000 kg' },
      { icon: 'box', label: '2 130 mm' },
      { icon: 'zap', label: '128 kW' }
    ],
    text: 'Compacteur à cylindre lisse pour densifier remblais et couches de forme.',
    role: 'Compacteur de sol vibrant à un cylindre lisse et deux pneus arrière. Il densifie les couches de remblais, les matériaux granulaires et les couches de forme.',
    works: [
      'Plateformes et remblais',
      'Couches de forme',
      'Travaux routiers',
      'Sols sableux, graveleux ou argileux, selon l’étude de compactage'
    ],
    sheet: [
      { label: 'Masse en ordre de marche', value: '20 000 kg' },
      { label: 'Charge sur le cylindre avant', value: '10 000 kg' },
      { label: 'Largeur du cylindre', value: '2 130 mm' },
      { label: 'Diamètre du cylindre', value: '1 600 mm' },
      { label: 'Charge linéaire statique', value: '470 N/cm' },
      { label: 'Force centrifuge', value: '353 / 245 kN' },
      { label: 'Fréquence de vibration', value: '33 / 28 Hz' },
      { label: 'Amplitude nominale', value: '1,9 / 0,95 mm' },
      { label: 'Puissance nominale', value: '128 kW' },
      { label: 'Moteur de référence', value: 'Shanghai Diesel SC8D175.2G2B1' },
      { label: 'Vitesse de translation', value: '3 à 9,4 km/h' },
      { label: 'Aptitude en pente', value: '30 %' },
      { label: 'Rayon de braquage extérieur', value: '6 500 mm' },
      { label: 'Dimensions hors tout', value: '6 220 × 2 430 × 3 200 mm' }
    ],
    sourceName: 'XCMG — fiche XS203J',
    sourceUrl: 'https://www.machmall.com/item-detail/XCMG-XS203J-6848.html',
    note: noteCatalogue
  },
  {
    slug: 'xe210wd',
    name: 'Pelle sur pneus XCMG XE210WD',
    image: photoXe210,
    alt: 'Pelle sur pneus XCMG XE210WD.',
    specs: [
      { icon: 'weight', label: '20 800 kg' },
      { icon: 'box', label: '0,86 m³' },
      { icon: 'zap', label: '135 kW' }
    ],
    text: 'Pelle sur pneus pour les tranchées et les déplacements entre chantiers.',
    role: 'Pelle hydraulique sur pneus, adaptée aux chantiers qui demandent des déplacements fréquents. Les appuis stabilisent la machine pendant le travail. Plusieurs photographies du parc peuvent montrer la même unité.',
    works: [
      'Tranchées de réseaux',
      'Assainissement',
      'Terrassement urbain',
      'Chargement de déblais'
    ],
    sheet: [
      { label: 'Masse en ordre de marche', value: '20 800 kg' },
      { label: 'Puissance nominale', value: '135 kW' },
      { label: 'Moteur de référence', value: 'Cummins QSB7' },
      { label: 'Godet de référence', value: '0,86 m³' },
      { label: 'Couple maximal', value: '740 N·m à 1 200 tr/min' },
      { label: 'Cylindrée', value: '6,7 L' },
      { label: 'Vitesse de translation', value: '31 / 9,5 / 3 km/h' },
      { label: 'Vitesse de rotation', value: '10,5 tr/min' },
      { label: 'Force au godet', value: '144 kN' },
      { label: 'Force au balancier', value: '100 kN' },
      { label: 'Norme d’émission', value: 'Chine III' }
    ],
    sourceName: 'XCMG — fiche XE210WD',
    sourceUrl: 'https://www.xcmgglobal.com/product/wheel-excavator/xe210wd/',
    note: `${noteCatalogue} Le godet monté et les stabilisateurs de l’unité MKM restent à confirmer.`
  },
  {
    slug: 'xe215c',
    name: 'Pelle sur chenilles XCMG XE215C',
    image: photoXe215,
    alt: 'Pelle sur chenilles XCMG XE215C.',
    specs: [
      { icon: 'weight', label: '21 500 kg' },
      { icon: 'box', label: '1 m³' },
      { icon: 'zap', label: '128,5 kW' }
    ],
    text: 'Pelle sur chenilles pour les fondations, les terrassements et les réseaux.',
    role: 'Pelle hydraulique sur chenilles pour les travaux courants d’excavation. Le modèle est lisible sur la vue de chantier ; une vue de transport du parc reste une identification complémentaire à valider.',
    works: [
      'Fondations',
      'Terrassements',
      'Réseaux',
      'Chargement de déblais'
    ],
    sheet: [
      { label: 'Masse en ordre de marche', value: '21 500 kg' },
      { label: 'Puissance nominale', value: '128,5 kW' },
      { label: 'Moteur de référence', value: 'Isuzu CC-6BG1TRP' },
      { label: 'Godet de référence', value: '1 m³' },
      { label: 'Couple maximal', value: '637,9 N·m à 1 800 tr/min' },
      { label: 'Cylindrée', value: '6,494 L' },
      { label: 'Vitesse de translation', value: '5,5 / 3,3 km/h' },
      { label: 'Vitesse de rotation', value: '13,2 tr/min' },
      { label: 'Force au godet', value: '149 kN' },
      { label: 'Force au balancier', value: '111 kN' },
      { label: 'Norme d’émission', value: 'Chine II' }
    ],
    sourceName: 'XCMG — fiche XE215C',
    sourceUrl: 'https://www.xcmgglobal.com/product/c-series/xe215c/',
    note: `${noteCatalogue} L’année et la version moteur de l’unité proposée peuvent différer.`
  },
  {
    slug: 'zl50gn',
    name: 'Chargeuse XCMG ZL50GN',
    image: photoZl50,
    alt: 'Chargeuse sur pneus XCMG ZL50GN.',
    specs: [
      { icon: 'weight', label: '17 500 kg' },
      { icon: 'box', label: '5 000 kg' },
      { icon: 'zap', label: '162 kW' }
    ],
    text: 'Chargeuse articulée pour déplacer et charger les matériaux en vrac.',
    role: 'Chargeuse articulée pour reprendre, déplacer et charger des matériaux en vrac. Ce modèle est distinct de la LW500KN, même si leurs usages sont proches.',
    works: [
      'Chargement de granulats',
      'Travaux de voirie',
      'Manutention sur plateformes',
      'Dépôts de matériaux'
    ],
    sheet: [
      { label: 'Charge nominale', value: '5 000 kg' },
      { label: 'Masse de référence', value: '17 500 kg' },
      { label: 'Puissance nominale', value: '162 kW' },
      { label: 'Moteur de référence', value: 'Shangchai SC11CB220G2B1' },
      { label: 'Godets au catalogue', value: '2,5 à 4,5 m³ selon configuration' },
      { label: 'Hauteur de déversement', value: '3 100 à 3 780 mm' },
      { label: 'Portée au déversement maxi', value: '1 100 à 1 220 mm' },
      { label: 'Force d’arrachement', value: '175 kN' },
      { label: 'Empattement', value: '3 300 mm' },
      { label: 'Voie', value: '2 250 mm' },
      { label: 'Rayon de braquage aux pneus', value: '5 925 mm' },
      { label: 'Angle d’articulation', value: '38°' },
      { label: 'Pneumatiques', value: '23.5-25-16PR' },
      { label: 'Dimensions hors tout', value: '8 225 × 3 016 × 3 515 mm' }
    ],
    sourceName: 'XCMG — tableau ZL50GN',
    sourceUrl: 'https://www.machmall.com/item-detail/xcmg-loader-9152.html',
    note: `${noteCatalogue} Le volume du godet monté et la version moteur restent à confirmer.`
  },
  {
    slug: 'xc870hk',
    name: 'Tractopelle XCMG XC870HK',
    image: photoXc870,
    alt: 'Tractopelle XCMG XC870HK.',
    specs: [
      { icon: 'weight', label: '8 200 kg' },
      { icon: 'box', label: '1 m³' },
      { icon: 'ruler', label: '4,32 m' }
    ],
    text: 'Tractopelle à godet avant et pelle arrière, pour terrasser et creuser.',
    role: 'Engin polyvalent qui associe un godet chargeur à l’avant et une pelle à l’arrière, avec stabilisateurs. Il alterne chargement et excavation. Le catalogue propose plusieurs motorisations : aucune puissance unique n’est affichée tant que la plaque de l’unité MKM n’a pas été lue.',
    works: [
      'Petits terrassements',
      'Tranchées',
      'Aménagements',
      'Entretien de voirie et chargement'
    ],
    sheet: [
      { label: 'Masse de référence', value: '8 200 kg' },
      { label: 'Puissance selon motorisation', value: '70, 74, 74,9 ou 82 kW' },
      { label: 'Motorisations au catalogue', value: 'Cummins, Deutz ou Weichai' },
      { label: 'Godet avant', value: '1 m³' },
      { label: 'Godet arrière', value: '0,25 m³' },
      { label: 'Charge nominale avant', value: '2 500 kg' },
      { label: 'Hauteur de déversement', value: '2 770 mm' },
      { label: 'Portée de déversement', value: '755 mm' },
      { label: 'Force d’arrachement avant', value: '66 kN' },
      { label: 'Profondeur maximale de fouille', value: '4 320 mm' },
      { label: 'Rayon maximal de fouille', value: '5 420 mm' },
      { label: 'Force de fouille', value: '63 kN' },
      { label: 'Vitesse maximale', value: '≥ 40 km/h' },
      { label: 'Empattement', value: '2 180 mm' },
      { label: 'Transmission', value: '4 roues motrices ou 2, selon version' },
      { label: 'Dimensions hors tout', value: '6 075 × 2 350 × 3 520 mm' }
    ],
    sourceName: 'XCMG — fiche XC870HK',
    sourceUrl: 'https://www.machmall.com/item-detail/xcmg-retroexcavadora-xc870hk-9513.html',
    note: `${noteCatalogue} La motorisation installée, le balancier et les godets fournis doivent être confirmés.`
  },
  {
    slug: 'grue-mobile-xcmg',
    name: 'Grue mobile télescopique XCMG',
    image: photoGrue,
    alt: 'Grue mobile télescopique XCMG avec crochet de levage.',
    specs: [
      { icon: 'crane', label: 'Flèche' },
      { icon: 'shield', label: 'Appuis' },
      { icon: 'hook', label: 'Crochet' }
    ],
    text: 'Grue mobile à flèche télescopique pour lever et poser des charges.',
    role: 'Grue routière à flèche télescopique, avec crochet et stabilisateurs. Elle sert à lever et à positionner des charges sur chantier. La marque XCMG est lisible ; le modèle ne l’est pas sur la photographie, donc aucune capacité de levage n’est publiée.',
    works: [
      'Pose d’éléments préfabriqués',
      'Manutention de matériels',
      'Opérations de montage, après étude de levage'
    ],
    sheet: [
      { label: 'Type', value: 'Grue mobile à flèche télescopique' },
      { label: 'Marque', value: 'XCMG' },
      { label: 'Équipement visible', value: 'Flèche télescopique, moufle et crochet' },
      { label: 'Appuis', value: 'Stabilisateurs' },
      { label: 'Porteur', value: 'Châssis routier à plusieurs essieux' },
      { label: 'Capacité de levage', value: 'Selon le tableau de charges du modèle exact' },
      { label: 'Portée et hauteur', value: 'Selon la longueur de flèche et les appuis' },
      { label: 'Puissance et masse', value: 'À confirmer une fois le modèle identifié' }
    ],
    sourceName: 'Photographies Groupe MKM',
    sourceUrl: null,
    note: 'La charge admissible dépend de la portée, de la longueur de flèche, du contrepoids et des appuis. Aucun tonnage ne peut être déduit de l’apparence de la machine. Le tableau de charges correspondant à la configuration proposée doit être fourni avant l’opération.'
  }
]

export function findEngin(slug: string) {
  return engins.find(item => item.slug === slug)
}
