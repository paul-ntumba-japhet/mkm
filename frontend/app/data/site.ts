import slideManagement from '../assets/image/sliders/slider-1/management.png'
import slideBatiments from '../assets/image/sliders/slider-1/batiments.png'
import slideEntrepot from '../assets/image/sliders/slider-1/entrepot.png'
import slidePelle from '../assets/image/sliders/slider-2/engin9.jpeg'
import slideGrue from '../assets/image/sliders/slider-2/engin20.jpeg'
import slideNiveleuse from '../assets/image/sliders/slider-2/engin22.jpeg'
import slideLecture from '../assets/image/sliders/slider-3/eleve_lisant.png'
import slideImprimerie from '../assets/image/sliders/slider-3/imprimerie.png'
import slideDistribution from '../assets/image/sliders/slider-3/distribution_livres.png'
import slideAppareils from '../assets/image/sliders/slider-4/solutions_numeriques.png'
import slideDatacenter from '../assets/image/sliders/slider-4/datacenter.png'
import slideCollaboration from '../assets/image/sliders/slider-4/collaborating.png'
import visuelVoirie from '../assets/image/travaux.jpeg'
import visuelChargeuse from '../assets/image/travaux2.jpeg'
import visuelTractopelle from '../assets/image/engin12.jpeg'
import visuelNiveleuse from '../assets/image/engin22.jpeg'
import visuelExcavatrice from '../assets/image/engin9.jpeg'
import visuelBenne from '../assets/image/transport1.jpeg'
import illustrationEngins from '../assets/illustrations/pelle.png'
import illustrationLivres from '../assets/illustrations/livre.png'
import illustrationImmeuble from '../assets/illustrations/immeuble.png'
import illustrationTransport from '../assets/illustrations/transport.png'
import illustrationNumerique from '../assets/illustrations/solutions_numeriques.png'
import illustrationAccompagnement from '../assets/illustrations/accompagnement.png'

export const contacts = {
  phoneLabel: '+243 99 17 19 180',
  phoneHref: 'tel:+243991719180',
  email: 'contact@groupe-mkm.com',
  emailHref: 'mailto:contact@groupe-mkm.com',
  whatsappHref: 'https://wa.me/243991719180?text=Bonjour%20Groupe%20MKM%2C%20je%20souhaite%20%C3%A9changer%20au%20sujet%20de%20vos%20services.',
  location: 'Kinshasa, RDC'
}

export const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/le-groupe', label: 'Le groupe' },
  { to: '/realisations', label: 'Nos réalisations' },
  { to: '/contact', label: 'Contact' }
]

export const services = [
  {
    slug: 'location-engins',
    title: 'Location d’engins',
    icon: 'hard-hat',
    description: 'Excavatrices, bulldozers, niveleuses, compacteurs, tractopelles, pelles chargeuses, porte-char et camions bennes 30 et 40 tonnes. Pas de stock ni de calendrier en temps réel.'
  },
  {
    slug: 'immobilier',
    title: 'Immobilier',
    icon: 'building',
    description: 'Vente, achat, location, gestion immobilière, construction, promotion et expertise. Les exemples restent des contenus de présentation.'
  },
  {
    slug: 'commerce-general',
    title: 'Commerce général',
    icon: 'store',
    description: 'Familles de produits, approvisionnement, import-export et demandes professionnelles.'
  },
  {
    slug: 'logistique-transport',
    title: 'Logistique et transport',
    icon: 'truck',
    description: 'Transport national et international, transit et solutions logistiques.'
  },
  {
    slug: 'solutions-numeriques',
    title: 'Solutions numériques',
    icon: 'monitor',
    description: 'Sites web, applications mobiles, logiciels, cybersécurité, marketing digital et hébergement.'
  },
  {
    slug: 'conseil',
    title: 'Conseil et accompagnement',
    icon: 'users',
    description: 'Audit, formation, coaching, études de marché, création d’entreprise et accompagnement des PME.'
  },
  {
    slug: 'evenementiel',
    title: 'Événementiel',
    icon: 'mic',
    description: 'Mariages, conférences, séminaires, branding, sonorisation et décoration.'
  },
  {
    slug: 'educ-afrik',
    title: 'Educ Afrik',
    icon: 'book',
    description: 'Livres, fournitures scolaires, magazines et matériels pédagogiques. Prise de contact, sans boutique en ligne.'
  }
]


export const expertises = [
  {
    slug: 'location-engins',
    title: 'Location d’engins',
    illustration: illustrationEngins,
    icon: 'excavator',
    description:
      'Pelles, grues et niveleuses pour vos travaux et vos chantiers.',
    link: 'Découvrir les engins'
  },
  {
    slug: 'educ-afrik',
    title: 'Livres et fournitures',
    illustration: illustrationLivres,
    icon: 'book',
    description:
      'Ouvrages, fournitures scolaires et impression à la demande.',
    link: 'Explorer l’offre'
  },
  {
    slug: 'immobilier',
    title: 'Immobilier',
    illustration: illustrationImmeuble,
    icon: 'building',
    description:
      'Achat, vente, location et accompagnement de vos projets immobiliers.',
    link: 'Découvrir les biens'
  },
  {
    slug: 'logistique-transport',
    title: 'Logistique et transport',
    illustration: illustrationTransport,
    icon: 'truck',
    description:
      'Transport et logistique adaptés à vos marchandises et à vos activités.',
    link: 'Voir les solutions'
  },
  {
    slug: 'solutions-numeriques',
    title: 'Solutions numériques',
    illustration: illustrationNumerique,
    icon: 'monitor',
    description:
      'Sites web, applications et hébergement pour votre présence numérique.',
    link: 'Explorer les services'
  },
  {
    slug: 'conseil',
    title: 'Conseil & accompagnement',
    illustration: illustrationAccompagnement,
    icon: 'handshake',
    description:
      'Audit, formation et conseil pour structurer vos projets et vos activités.',
    link: 'En savoir plus'
  }
]


export const chiffres = [
  { value: '+10', label: 'ans d’expérience' },
  { value: '+250', label: 'projets réalisés' },
  { value: '+150', label: 'clients satisfaits' },
  { value: '6', label: 'domaines d’expertise' },
  { value: '+120', label: 'collaborateurs engagés' }
]

export const values = [
  {
    title: 'Professionnalisme',
    text: 'Des solutions de qualité.',
    icon: 'badge'
  },
  {
    title: 'Fiabilité',
    text: 'Une exécution rigoureuse.',
    icon: 'shield'
  },
  {
    title: 'Engagement',
    text: 'Votre réussite, notre priorité.',
    icon: 'flag'
  }
]

export const slides = [
  {
    id: 'groupe',
    tone: 'light' as const,
    eyebrow: 'Groupe MKM',
    title: 'Un partenaire unique',
    accent: 'pour des solutions multiples',
    description: 'Des solutions complémentaires pour accompagner vos projets.',
    collage: [
      {
        src: slideManagement,
        alt: 'Trois personnes en réunion autour d’un ordinateur portable et de plans.'
      },
      {
        src: slideBatiments,
        alt: 'Immeuble résidentiel moderne bordé de palmiers.'
      },
      {
        src: slideEntrepot,
        alt: 'Entrepôt : un responsable consulte une tablette devant un chariot élévateur.'
      }
    ],
    primary: { label: 'Découvrir le groupe', to: '/le-groupe' },
    secondary: { label: 'Demander un devis', to: '/devis' }
  },
  {
    id: 'engins',
    tone: 'light' as const,
    eyebrow: 'Location d’engins',
    title: 'Les bons engins,',
    accent: 'pour vos grands projets.',
    description: 'Pelles, grues et niveleuses : des solutions adaptées à vos chantiers.',
    collage: [
      {
        src: slidePelle,
        alt: 'Pelle mécanique jaune sur chenilles, godet au premier plan, devant un conteneur.'
      },
      {
        src: slideGrue,
        alt: 'Grue mobile jaune, flèche déployée, sur un camion porteur.'
      },
      {
        src: slideNiveleuse,
        alt: 'Niveleuse jaune et noire garée sur un parc d’engins.'
      }
    ],
    primary: { label: 'Découvrir nos engins', to: '/services/location-engins' },
    secondary: { label: 'Demander un devis', to: '/devis' }
  },
  {
    id: 'livre',
    tone: 'light' as const,
    eyebrow: 'Le livre, au cœur du savoir',
    title: 'Lire, partager, imprimer.',
    accent: 'Transmettre.',
    description: 'Lecture, distribution d’ouvrages et impression à la demande avec Livreaura.',
    collage: [
      {
        src: slideLecture,
        alt: 'Une élève lit un livre ouvert dans une bibliothèque.'
      },
      {
        src: slideImprimerie,
        alt: 'Presse d’imprimerie avec des piles de livres illustrés sur une table.'
      },
      {
        src: slideDistribution,
        alt: 'Dans une classe, des adultes remettent des livres à des élèves.'
      }
    ],
    primary: { label: 'Découvrir Livreaura', to: '/services/educ-afrik' },
    secondary: { label: 'Parlons de votre projet', to: '/contact' }
  },
  {
    id: 'numerique',
    tone: 'light' as const,
    eyebrow: 'Solutions numériques',
    title: 'Votre ambition,',
    accent: 'notre expertise numérique.',
    description: 'Sites web, applications mobiles et hébergement : donnons vie à vos projets numériques.',
    collage: [
      {
        src: slideAppareils,
        alt: 'Ordinateur portable et téléphone présentant un site et une application.'
      },
      {
        src: slideDatacenter,
        alt: 'Allée d’un centre de données, avec des baies de serveurs éclairées en bleu.'
      },
      {
        src: slideCollaboration,
        alt: 'Deux personnes examinent ensemble un écran dans un bureau.'
      }
    ],
    primary: { label: 'Découvrir nos solutions', to: '/services/solutions-numeriques' },
    secondary: { label: 'Demander un devis', to: '/devis' }
  }
]

export const realisationsAccueil = [
  {
    lead: true,
    title: 'Un chantier de voirie en images',
    activity: 'Location d’engins',
    description: 'Un aperçu des équipements mobilisés sur le terrain.',
    link: 'Voir la galerie',
    width: 1152,
    height: 1280,
    image: visuelVoirie,
    alt: 'Compacteur jaune le long d’une route en terre, avec des habitations de part et d’autre.'
  },
  {
    lead: false,
    title: 'Les engins en action',
    activity: 'Sur le terrain',
    description: 'Chargement et préparation du terrain.',
    link: 'Voir la galerie',
    width: 920,
    height: 1280,
    image: visuelChargeuse,
    alt: 'Pelle chargeuse jaune sur un chantier de route en terre.'
  },
  {
    lead: false,
    title: 'Le transport de matériaux',
    activity: 'Logistique et transport',
    description: 'Un aperçu des moyens mobilisables.',
    link: 'Voir la galerie',
    width: 950,
    height: 731,
    image: visuelBenne,
    alt: 'Camion benne rouge à trois essieux, vu de trois quarts avant.'
  }
]

export const realisations = [
  {
    title: 'Travaux de voirie',
    activity: 'Location d’engins',
    description: 'Compactage d’une voie en terre dans un quartier.',
    location: 'Kinshasa',
    image: visuelVoirie,
    alt: 'Compacteur jaune le long d’une route en terre, avec des habitations de part et d’autre.'
  },
  {
    title: 'Pelle chargeuse',
    activity: 'Location d’engins',
    description: 'Chargeuse engagée sur un chantier de voirie.',
    location: 'Kinshasa',
    image: visuelChargeuse,
    alt: 'Pelle chargeuse jaune sur un chantier de route en terre.'
  },
  {
    title: 'Tractopelle',
    activity: 'Location d’engins',
    description: 'Engin polyvalent pour creuser, charger et niveler.',
    location: 'Kinshasa',
    image: visuelTractopelle,
    alt: 'Tractopelle jaune et grise garée devant un mur.'
  },
  {
    title: 'Niveleuse',
    activity: 'Location d’engins',
    description: 'Niveleuse pour les travaux de voirie et de terrassement.',
    location: 'Kinshasa',
    image: visuelNiveleuse,
    alt: 'Niveleuse jaune garée à côté d’autres engins.'
  },
  {
    title: 'Pelle excavatrice',
    activity: 'Location d’engins',
    description: 'Excavatrice pour le terrassement et le déplacement de matériaux.',
    location: 'Kinshasa',
    image: visuelExcavatrice,
    alt: 'Pelle excavatrice jaune sur un sol de latérite, godet au premier plan.'
  },
  {
    title: 'Camion benne',
    activity: 'Logistique et transport',
    description: 'Benne pour le transport de terre, sable, graviers, pierres et déblais.',
    location: 'Kinshasa',
    image: visuelBenne,
    alt: 'Camion benne rouge à trois essieux, vu de trois quarts avant.'
  }
]
