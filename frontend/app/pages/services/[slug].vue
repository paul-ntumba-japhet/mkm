<script setup lang="ts">
import { services, contacts } from '~/data/site'
import conseilPhoto from '~/assets/image/services/accompagnement/accompagnement.png'
import { engins } from '~/data/engins'
import enginHero from '~/assets/image/group/location_engins.png'
import livreHero from '~/assets/image/services/livre/hero.png'
import livreLogo from '~/assets/image/services/livre/logo-principal.png'
import livreLecture from '~/assets/image/services/livre/lecture.png'
import livreDistribution from '~/assets/image/services/livre/distribution.png'
import livreImpression from '~/assets/image/services/livre/impression.png'
import imageCollaboration from '~/assets/image/group/collaboration_projet_client.png'
import heroNumerique from '~/assets/image/services/numeriques/services_numériques.png'
import imageCollaborationImmo from '~/assets/image/services/immobilier/collaboration_projet.png'
import imageBatiments from '~/assets/image/services/immobilier/batiments.png'
import item1 from '~/assets/image/services/immobilier/item1.png'
import item2 from '~/assets/image/services/immobilier/item2.png'
import item3 from '~/assets/image/services/immobilier/item3.png'
import item4 from '~/assets/image/services/immobilier/item4.png'
import item5 from '~/assets/image/services/immobilier/item5.png'
import { lienOffreNumerique } from '~/data/offres-numeriques'
import illuDemolisseur from '~/assets/illustrations/demolisseur.png'
import illuChargeuse from '~/assets/illustrations/chargeuse.png'
import illuCompacteur from '~/assets/illustrations/compacteur.png'
import illuLevage from '~/assets/illustrations/levage.png'
import illuForeuse from '~/assets/illustrations/foreuse.png'
import illuBiens from '~/assets/illustrations/biens-immobiliers.png'
import illuLocation from '~/assets/illustrations/mise-en-location.png'
import illuRecherche from '~/assets/illustrations/recherche-bien.png'
import illuConseils from '~/assets/illustrations/conseils-accompagnement.png'

import illuAccompagnement from '~/assets/illustrations/accompagnement.png'
import illuCible from '~/assets/illustrations/cible.png'
import illuCroissance from '~/assets/illustrations/croissance.png'

import illuSemiTruck from '~/assets/illustrations/semi-truck.png'
import illuTruck from '~/assets/illustrations/truck-line.png'
import illuLivraison from '~/assets/illustrations/livraison.png'
import illuExpedition from '~/assets/illustrations/expedition.png'
import illuTruckCamion from '~/assets/illustrations/truck-line.png'

import imageGestion from '~/assets/image/services/accompagnement/gestion-entreprise.png'
import imageEntrepreneurs from '~/assets/image/services/accompagnement/entrepreneurs.png'
import imageFormation from '~/assets/image/services/accompagnement/formation.png'

import imageBesoinConseils from '~/assets/image/services/accompagnement/besoin-conseils.png'

import transportHero from '~/assets/image/services/transport/hero.png'

import imageTransportLogistique from '~/assets/image/services/transport/transport-logistique.png'
import imageDistribution from '~/assets/image/services/transport/distribution.png'

import imageEchange from '~/assets/image/services/transport/echange.png'



const transportWhatsapp = `https://wa.me/${contacts.phoneHref.replace(/\D/g, '')}?text=${encodeURIComponent(
  'Bonjour Groupe MKM, je souhaite obtenir des informations sur vos services de logistique et de transport.'
)}`

const conseilPrestations = [
  {
    numero: '01',
    image: imageGestion,
    titre: 'Conseil en gestion d’entreprise',
    description: 'Des méthodes et des outils pour piloter votre organisation avec davantage de clarté.',
    points: [
      'Organisation administrative et financière',
      'Élaboration de plans d’affaires (business plans)',
      'Analyse des coûts, des recettes et de la rentabilité',
      'Mise en place de procédures de gestion'
    ]
  },
  {
    numero: '02',
    image: imageEntrepreneurs,
    titre: 'Accompagnement des entrepreneurs',
    description: 'Un appui concret pour structurer vos idées et transformer vos ambitions en projets viables.',
    points: [
      'Structuration et planification de projets',
      'Études de marché et identification d’opportunités',
      'Stratégies commerciales et développement des ventes',
      'Recherche de partenaires et préparation de propositions commerciales'
    ]
  },
  {
    numero: '03',
    image: imageFormation,
    titre: 'Formation et renforcement des capacités',
    description: 'Des formations adaptées aux besoins des entreprises, des institutions et des porteurs de projets.',
    points: [
      'Gestion d’entreprise, commerce et entrepreneuriat',
      'Organisation administrative et gestion financière',
      'Utilisation des outils de gestion et de suivi des activités',
      'Formations sur mesure pour les équipes, selon les besoins identifiés'
    ]
  }
]
const conseilWhatsapp = `https://wa.me/${contacts.phoneHref.replace(/\D/g, '')}?text=${encodeURIComponent('Bonjour Groupe MKM, je souhaite bénéficier de vos services de conseil et d’accompagnement. Pouvez-vous me renseigner ?')}`

const route = useRoute()


const galerieImmo = [
  {
    src: item1,
    label: 'Villa',
    alt: 'Villa blanche contemporaine avec piscine, pelouse et palmiers.'
  },
  {
    src: item2,
    label: 'Appartement',
    alt: 'Salon clair avec canapé d’angle, table basse et baie vitrée sur la ville.'
  },
  {
    src: item3,
    label: 'Immeuble résidentiel',
    alt: 'Immeubles résidentiels modernes le long d’une rue arborée.'
  },
  {
    src: item4,
    label: 'Terrain',
    alt: 'Terrain enherbé clôturé, avec des maisons au toit rouge en arrière-plan.'
  },
  {
    src: item5,
    label: 'Parcelle',
    alt: 'Grande parcelle herbeuse devant un quartier et des collines.'
  }
]

const servicesImmo = [
  {
    image: illuBiens,
    alt: 'Illustration dorée d’un immeuble avec balcons.',
    title: 'Vente de biens immobiliers',
    text: 'Vous souhaitez vendre une maison, un appartement, un immeuble ou une propriété foncière ? Présentez-nous votre bien afin d’étudier les possibilités de mise en relation avec des acquéreurs potentiels.'
  },
  {
    image: illuLocation,
    alt: 'Illustration dorée d’un immeuble, d’une main et d’un trousseau de clés.',
    title: 'Mise en location',
    text: 'Confiez-nous votre demande de mise en location. Nous recueillons les caractéristiques de votre propriété et vos conditions afin de faciliter la recherche de locataires intéressés.'
  },
  {
    image: illuRecherche,
    alt: 'Illustration dorée d’une loupe entourant des bâtiments et d’une cible.',
    title: 'Recherche et acquisition',
    text: 'Décrivez le bien que vous recherchez, votre budget et votre zone géographique privilégiée. Nous étudions votre demande pour vous orienter vers des opportunités correspondant à vos critères.'
  },
  {
    image: illuConseils,
    alt: 'Illustration dorée d’une poignée de main.',
    title: 'Conseil et accompagnement',
    text: 'Bénéficiez d’une assistance dans la préparation de votre projet, l’organisation des échanges, les visites et les démarches liées à votre transaction, selon le périmètre de notre intervention.'
  }
]


const conseilAtouts = [
  {
    image: illuAccompagnement,
    label: 'Écoute et analyse de vos besoins'
  },
  {
    image: illuCible,
    label: 'Solutions adaptées et réalistes'
  },
  {
    image: illuCroissance,
    label: 'Accompagnement de la stratégie à la mise en œuvre'
  },
  {
    image: illuConseils,
    label: 'Partenariat durable et résultats concrets'
  }
]


const piliersImmo = [
  {
    icon: 'shield-check',
    title: 'Confiance',
    text: 'Des échanges transparents et un accompagnement sérieux.'
  },
  {
    icon: 'users',
    title: 'Proximité',
    text: 'Une écoute personnalisée de chaque demande.'
  },
  {
    icon: 'flag',
    title: 'Engagement',
    text: 'Un suivi attentif tout au long de votre projet.'
  }
]
const service = computed(() => services.find(item => item.slug === route.params.slug))
const atouts = [
  { icon: 'shield', label: 'Engins récents et entretenus' },
  { icon: 'headset', label: 'Assistance 24/7' },
  { icon: 'shield-check', label: 'Sécurité et confiance' }
]



const categories = [
  {
    image: illuDemolisseur,
    label: 'Démolisseur',
    description: 'Démolition de structures et travaux de déconstruction.',
    alt: 'Illustration d’une pelle de démolition.'
  },
  {
    image: illuChargeuse,
    label: 'Chargeuses',
    description: 'Chargement, manutention et déplacement de matériaux.',
    alt: 'Illustration d’une chargeuse sur pneus.'
  },
  {
    image: illuCompacteur,
    label: 'Compactage',
    description: 'Compactage des sols et préparation des chaussées.',
    alt: 'Illustration d’un compacteur.'
  },
  {
    image: illuLevage,
    label: 'Levage',
    description: 'Levage et positionnement de charges sur chantier.',
    alt: 'Illustration d’une grue mobile.'
  },
  {
    image: illuForeuse,
    label: 'Forage',
    description: 'Forage et travaux de préparation des fondations.',
    alt: 'Illustration d’une foreuse.'
  },
  {
    image: illuTruckCamion,
    label: 'Camions',
    description: 'Transport de matériaux, équipements et charges lourdes.',
    alt: 'Illustration d’un camion de transport.'
  }
]


const populaires = engins
const prestations = [
  {
    image: livreLecture,
    alt: 'Un lecteur consulte un livre ouvert dans une bibliothèque.',
    icon: 'book',
    index: '01',
    title: 'Lecture & accès aux livres',
    text: 'Des ouvrages pour apprendre, découvrir et nourrir votre curiosité. Livres, magazines et matériels pédagogiques pour accompagner la lecture.',
    href: '#lecture'
  },
  {
    image: livreDistribution,
    alt: 'Une enseignante remet une pile de livres à trois élèves dans une classe.',
    icon: 'group',
    index: '02',
    title: 'Vente & distribution',
    text: 'Des livres pour les particuliers, les écoles et les organisations. Ouvrages et fournitures scolaires remis selon votre projet, en classe ou pour un collectif.',
    href: '#distribution'
  },
  {
    image: livreImpression,
    alt: 'Une presse d’imprimerie aligne des liasses de papier et des livres.',
    icon: 'layers',
    index: '03',
    title: 'Impression à la demande',
    text: 'Des ouvrages imprimés selon les besoins de votre projet. Le tirage suit votre demande, du livre au support pédagogique.',
    href: '#impression'
  }
]

const publics = [
  {
    icon: 'user',
    title: 'Particuliers',
    text: 'Trouvez des ouvrages qui inspirent, informent et ouvrent de nouveaux horizons.'
  },
  {
    icon: 'graduation',
    title: 'Écoles & bibliothèques',
    text: 'Accédez à une offre adaptée pour former, accompagner et enrichir les connaissances.'
  },
  {
    icon: 'pencil',
    title: 'Auteurs & éditeurs',
    text: 'Bénéficiez d’un accompagnement sur mesure pour publier et diffuser vos ouvrages.'
  },
  {
    icon: 'building',
    title: 'Entreprises & institutions',
    text: 'Des solutions de lecture et d’impression pour vos projets éducatifs, culturels et de communication.'
  }
]

const cartesNumeriques = [
  {
    tone: '1',
    title: 'Conception Logicielle et Développement',
    lead: 'Conception',
    rest: 'Logicielle et Développement',
    lines: [
      'Applications web et web mobile',
      'Logiciels d’entreprise',
      'Progiciels de gestion (ERP)',
      'Logiciels de bureau',
      'Plateforme SaaS'
    ]
  },
  {
    tone: '2',
    title: 'Hébergement et nom de domaine',
    lead: 'Hébergement et',
    rest: 'nom de domaine',
    lines: [
      'Enregistrement des noms de domaine',
      'Hébergement de sites web et d’applications',
      'Configuration de messageries professionnelles',
      'Installation de certificats SSL',
      'Migration d’hébergement',
      'Sauvegardes, surveillance et assistance technique'
    ]
  },
  {
    tone: '3',
    title: 'Intégration IA dans vos processus',
    lead: 'Intégration IA dans',
    rest: 'vos processus',
    lines: [
      'Support client',
      'Assistance commerciale',
      'Recherche documentaire',
      'Traitement des documents',
      'Automatisation interne',
      'Accompagnement pédagogique'
    ]
  }
]


const transportAtouts = [
  {
    image: illuSemiTruck,
    label: 'Transport de marchandises et de matériaux'
  },
  {
    image: illuTruck,
    label: 'Location de camions et d’engins de chantier'
  },
  {
    image: illuLivraison,
    label: 'Préparation et livraison de commandes'
  },
  {
    image: illuExpedition,
    label: 'Expéditions nationales et internationales'
  }
]


const transportPoles = [
  {
    numero: '01',
    titre: 'Transport et logistique Groupe MKM',
    description:
      'Solutions destinées aux entreprises, professionnels du bâtiment, institutions et opérateurs commerciaux.',
    image: imageTransportLogistique,
    alt: 'Camion porte-engins transportant des équipements de chantier',
    prestations: [
      'Location de camions et d’engins de chantier.',
      'Transport de matériaux et de marchandises, selon les moyens disponibles.',
      'Organisation des déplacements d’équipements.',
      'Coordination des chauffeurs, prestataires et opérations de livraison.',
      'Suivi des coûts de transport et de carburant.'
    ]
  },
  {
    numero: '02',
    titre: 'Distribution et logistique LivrAura Africa',
    description:
      'Organisation des commandes et de la distribution des livres et fournitures scolaires en RDC et à l’international.',
    image: imageDistribution,
    alt: 'Équipe LivrAura Africa préparant des commandes de livres',
    prestations: [
      'Réception des commandes de livres et fournitures scolaires.',
      'Préparation et emballage des commandes.',
      'Livraison aux clients, écoles, librairies et distributeurs en RDC.',
      'Expédition vers d’autres pays, selon les prestataires disponibles.',
      'Suivi des colis, des frais de livraison, des retards et des retours.'
    ]
  }
]


const rangeesNumeriques = [
  cartesNumeriques,
  [
    {
      tone: '4',
      title: 'Référencement et marketing digital',
      lead: 'Référencement et',
      rest: 'marketing digital',
      lines: [
        'Rédaction de pages web, articles et fiches produits',
        'Audit et optimisation du référencement naturel',
        'Définition d’une ligne éditoriale',
        'Création et gestion de campagnes sur les réseaux sociaux',
        'Configuration et gestion de campagnes Google Ads',
        'Création de pages de destination et suivi des conversions'
      ]
    },
    {
      tone: '5',
      title: 'Refonte et maintenance',
      lead: 'Refonte et',
      rest: 'maintenance',
      lines: [
        'Audit technique et fonctionnel',
        'Refonte graphique et amélioration de l’ergonomie',
        'Correction des bugs',
        'Optimisation des performances',
        'Mise à jour des composants et dépendances',
        'Ajout de fonctionnalités et connexion à d’autres services'
      ]
    },
    {
      tone: '6',
      title: 'Formation professionnelle',
      lead: 'Formation',
      rest: 'professionnelle',
      lines: [
        'Conception d’interfaces et intégration responsive',
        'Programmation frontend et backend',
        'Modélisation et exploitation des bases de données',
        'Création et consommation d’API',
        'Authentification, habilitations et sécurité',
        'Tests, gestion de versions et déploiement',
        'Réalisation d’un projet pratique accompagné'
      ]
    }
  ]
]

useSeoMeta({
  title: () => {
    if (service.value?.slug === 'educ-afrik') return 'Livreaura · Groupe MKM'
    return service.value ? `${service.value.title} · Groupe MKM` : 'Service introuvable · Groupe MKM'
  },
  description: () => {
    if (service.value?.slug === 'location-engins') return 'Location d’engins récents, avec ou sans chauffeur, à la journée, à la semaine ou au mois.'
    if (service.value?.slug === 'educ-afrik') return 'Lecture, distribution d’ouvrages et impression à la demande : le service du livre Livreaura, par Groupe MKM.'
    if (service.value?.slug === 'immobilier') return 'Acheter, vendre ou louer un bien immobilier est une décision importante. Le Groupe MKM vous accompagne avec un service de proximité.'
    if (service.value?.slug === 'conseil') return 'Conseil en gestion, accompagnement des entrepreneurs et formation sur mesure : développez vos projets avec le Groupe MKM.'
    return service.value?.description ?? ''
  }
})

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service introuvable' })
}
</script>

<template>
  <section v-if="service?.slug === 'location-engins'" class="mkm-engin-hero" aria-labelledby="titre-engins">
    <div class="mkm-container">
      <div class="mkm-engin-hero__grid">
        <div class="mkm-engin-hero__copy">
          <h1 id="titre-engins">Location <span>d’engins</span></h1>
          <p class="mkm-engin-hero__subtitle">Des engins performants pour tous vos chantiers</p>
          <p>
            Groupe MKM met à votre disposition une large gamme d’engins récents, entretenus et disponibles pour répondre à tous vos besoins. Avec ou sans chauffeur, à la journée, à la semaine ou au mois.
          </p>
          <ul class="mkm-engin-hero__atouts">
            <li v-for="item in atouts" :key="item.label">
              <MkmIcon :name="item.icon" />
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>
        <div class="mkm-engin-hero__scene">
          <img class="mkm-engin-hero__photo" :src="enginHero" alt="Pelle mécanique jaune en cours de terrassement.">
        </div>
      </div>
    </div>
  </section>

  <section v-if="service?.slug === 'location-engins'" class="mkm-section mkm-section--divided mkm-engin-categories" aria-labelledby="titre-categories-engins">
    <div class="mkm-container">
      <h2 id="titre-categories-engins">Nos catégories d’engins</h2>
      <ul class="mkm-engin-categories__liste">
        
<li v-for="item in categories" :key="item.label">
  <img
    :src="item.image"
    :alt="item.alt"
    loading="lazy"
  >

  <strong>{{ item.label }}</strong>

  <p class="mkm-engin-categories__description">
    {{ item.description }}
  </p>
</li>

      </ul>
    </div>
  </section>

  <section v-if="service?.slug === 'location-engins'" class="mkm-section mkm-section--divided mkm-engin-populaires" aria-labelledby="titre-engins-populaires">
    <div class="mkm-container">
      <h2 id="titre-engins-populaires">Engins populaires</h2>
      <div class="mkm-engin-populaires__grille">
        <article v-for="item in populaires" :key="item.name" class="mkm-engin-populaires__carte">
          <img :src="item.image" :alt="item.alt">
          <div class="mkm-engin-populaires__corps">
            <h3>{{ item.name }}</h3>
            <ul>
              <li v-for="spec in item.specs" :key="spec.label">
                <MkmIcon :name="spec.icon" />
                <span>{{ spec.label }}</span>
              </li>
            </ul>
            <p>{{ item.text }}</p>
            <NuxtLink :to="`/services/location-engins/${item.slug}`" class="mkm-btn mkm-btn--secondary">Voir les détails</NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section v-if="service?.slug === 'educ-afrik'" class="mkm-livre-hero" aria-labelledby="titre-livre">
    <img class="mkm-livre-hero__photo" :src="livreHero" alt="">
    <div class="mkm-container mkm-livre-hero__contenu">
      <nav class="mkm-livre-hero__fil" aria-label="Fil d’Ariane">
        <NuxtLink to="/">Accueil</NuxtLink>
        <span aria-hidden="true">/</span>
        <NuxtLink to="/#titre-services">Nos services</NuxtLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Livres et édition</span>
      </nav>
      <div class="mkm-livre-hero__copy">
        <img class="mkm-livre-hero__logo" :src="livreLogo" alt="Livreaura">
        <p class="mkm-livre-hero__eyebrow">Le service du livre du Groupe MKM</p>
        <h1 id="titre-livre">Le livre, de la découverte à la transmission.</h1>
        <p>
          Lecture, distribution d’ouvrages et impression à la demande : un accompagnement adapté à vos projets.
        </p>
        <div class="mkm-actions">
          <a href="#prestations" class="mkm-btn mkm-btn--gold">Découvrir livreaura</a>
        </div>
        <p class="mkm-livre-hero__signature">Lire. Publier. Transmettre.</p>
      </div>
    </div>
  </section>

  <section v-if="service?.slug === 'educ-afrik'" id="prestations" class="mkm-section mkm-livre-prestations" aria-labelledby="titre-prestations">
    <div class="mkm-container">
      <header class="mkm-livre-prestations__entete">
        <p class="mkm-eyebrow">Nos prestations</p>
        <h2 id="titre-prestations">Trois façons de faire vivre le livre</h2>
      </header>
      <ul class="mkm-livre-prestations__liste">
        <li v-for="item in prestations" :key="item.title">
          <article>
            <img class="mkm-livre-prestations__photo" :src="item.image" :alt="item.alt">
            <div class="mkm-livre-prestations__corps">
              <p class="mkm-livre-prestations__repere">
                <MkmIcon :name="item.icon" />
                <span>{{ item.index }}</span>
              </p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
              <a class="mkm-livre-prestations__lien" :href="item.href">
                Découvrir la prestation
                <MkmIcon name="arrow-right" size="small" />
              </a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>

  <section v-if="service?.slug === 'educ-afrik'" id="publics" class="mkm-livre-publics" aria-labelledby="titre-publics">
    <div class="mkm-container mkm-livre-publics__grille">
      <img
        class="mkm-livre-publics__photo"
        :src="imageCollaboration"
        alt="Deux collègues examinent des plans autour d’une table."
      >
      <div class="mkm-livre-publics__contenu">
      <h2 id="titre-publics">À chaque lecteur, à chaque projet, sa solution.</h2>
      <ul class="mkm-livre-publics__liste">
        <li v-for="item in publics" :key="item.title">
          <MkmIcon :name="item.icon" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
      </div>
    </div>
  </section>

  <section v-else-if="service && service.slug !== 'location-engins' && service.slug !== 'educ-afrik' && service.slug !== 'solutions-numeriques' && service.slug !== 'immobilier' && service.slug !== 'conseil' && service.slug !== 'logistique-transport'" class="mkm-section">
    <div class="mkm-container mkm-prose">
      <p class="mkm-eyebrow">Nos services</p>
      <h1>{{ service.title }}</h1>
      <p class="mkm-lead">{{ service.description }}</p>
      <p class="mkm-muted">La page détaillée — prestations, illustrations et moyens de contact — sera complétée ensuite.</p>
      <div class="mkm-actions">
        <NuxtLink to="/devis" class="mkm-btn mkm-btn--primary">Demander un devis</NuxtLink>
      </div>
    </div>
  </section>

  
<!-- SERVICE : LOGISTIQUE ET TRANSPORT -->
<template v-if="service?.slug === 'logistique-transport'">

<!-- Fil d'Ariane -->
<nav
  class="mkm-transport-fil"
  aria-label="Fil d'Ariane"
>
  <div class="mkm-container mkm-transport-fil__inner">
    <NuxtLink to="/">Accueil</NuxtLink>
    <span aria-hidden="true">›</span>
    <NuxtLink to="/#titre-services">
      Nos services
    </NuxtLink>
    <span aria-hidden="true">›</span>
    <span aria-current="page">
      Logistique et transport
    </span>
  </div>
</nav>

<!-- Hero -->
<section
  class="mkm-transport-hero mkm-container"
  aria-labelledby="mkm-transport-titre"
  :style="{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(9, 15, 19, .94) 0%,
        rgba(9, 15, 19, .78) 27%,
        rgba(9, 15, 19, .38) 49%,
        rgba(9, 15, 19, .04) 78%
      ),
      url('${transportHero}')
    `
  }"
>
  <div class="mkm-transport-hero__inner">

    <div class="mkm-transport-hero__content">

      <span class="mkm-transport-hero__eyebrow">
        Logistique et transport
      </span>

      <h1 id="mkm-transport-titre">
        Des solutions<br>
        logistiques et de<br>
        transport adaptées<br>
        <span>à vos activités</span>
      </h1>

      <p class="mkm-transport-hero__description">
        Nous organisons le déplacement des marchandises,
        leur stockage, leur préparation et leur livraison
        au bon endroit, dans les délais et à un coût maîtrisé.
      </p>

      <div class="mkm-transport-hero__actions">

        <a
          :href="transportWhatsapp"
          class="mkm-transport-btn mkm-transport-btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41ZM12.05 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
          </svg>

          <span>Échanger sur WhatsApp</span>
          <span aria-hidden="true">→</span>
        </a>

      </div>
    </div>
  </div>
</section>


<!-- BANDEAU DES SERVICES LOGISTIQUES -->
<section
  class="mkm-transport-atouts"
  aria-label="Nos prestations logistiques"
>
  <div class="mkm-container">

    <div class="mkm-transport-atouts__grille">

      <div
        v-for="atout in transportAtouts"
        :key="atout.label"
        class="mkm-transport-atouts__item"
      >
        <img
          :src="atout.image"
          alt=""
          class="mkm-transport-atouts__icone"
          width="64"
          height="64"
          loading="lazy"
        >

        <p class="mkm-transport-atouts__label">
          {{ atout.label }}
        </p>
      </div>

    </div>
  </div>
</section>


<!-- DEUX PÔLES COMPLÉMENTAIRES -->
<section
  class="mkm-transport-poles"
  aria-labelledby="mkm-transport-poles-titre"
>
  <div class="mkm-container">

    <!-- En-tête de section -->
    <div class="mkm-transport-poles__entete">

      <div class="mkm-transport-poles__intro">
        <p class="mkm-transport-poles__eyebrow">
          Nos domaines d’intervention
        </p>

        <h2 id="mkm-transport-poles-titre">
          Deux pôles complémentaires pour répondre
          à vos besoins logistiques
        </h2>
      </div>

      <p class="mkm-transport-poles__description">
        Le Groupe MKM met à votre disposition son
        expertise et ses ressources pour assurer
        le transport, la logistique et la distribution
        de vos marchandises, équipements, livres
        et fournitures scolaires.
      </p>

    </div>

    <!-- Grille des deux cartes -->
    <div class="mkm-transport-poles__grille">

      <article
        v-for="pole in transportPoles"
        :key="pole.numero"
        class="mkm-transport-pole"
      >

        <!-- En-tête photographique -->
        <div class="mkm-transport-pole__visuel">

          <img
            :src="pole.image"
            :alt="pole.alt"
            loading="lazy"
          >

          <span class="mkm-transport-pole__numero">
            {{ pole.numero }}
          </span>

        </div>

        <!-- Contenu -->
        <div class="mkm-transport-pole__contenu">

          <h3>{{ pole.titre }}</h3>

          <p class="mkm-transport-pole__description">
            {{ pole.description }}
          </p>

          <ul class="mkm-transport-pole__liste">

            <li
              v-for="prestation in pole.prestations"
              :key="prestation"
            >
              <span
                class="mkm-transport-pole__check"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>{{ prestation }}</span>
            </li>

          </ul>

        </div>

      </article>

    </div>

  </div>
</section>


<!-- SECTION CTA — TRANSPORT ET LOGISTIQUE -->
<section
  class="mkm-transport-cta"
  aria-labelledby="mkm-transport-cta-titre"
  :style="{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(8, 13, 18, 0.96) 0%,
        rgba(8, 13, 18, 0.88) 30%,
        rgba(8, 13, 18, 0.58) 55%,
        rgba(8, 13, 18, 0.06) 100%
      ),
      url('${imageEchange}')
    `
  }"
>
  <div class="mkm-container mkm-transport-cta__inner">

    <div class="mkm-transport-cta__content">

      <h2 id="mkm-transport-cta-titre">
        Un besoin de transport<br>
        <span>ou de distribution ?</span>
      </h2>

      <p>
        Présentez-nous votre projet, les marchandises
        concernées, leur destination et vos délais.
        Notre équipe étudiera les possibilités de
        prise en charge et vous proposera une
        solution adaptée.
      </p>

      <div class="mkm-transport-cta__actions">

        <a
          :href="transportWhatsapp"
          class="mkm-transport-btn mkm-transport-btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41ZM12.05 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/>
          </svg>

          <span>Échanger sur WhatsApp</span>
          <span aria-hidden="true">→</span>
        </a>

      </div>
    </div>

  </div>
</section>


</template>


  <template v-if="service?.slug === 'conseil'">
    <section class="mkm-conseil-hero" aria-labelledby="mkm-conseil-titre">
      <div class="mkm-container mkm-conseil-hero__grille">
        <div class="mkm-conseil-hero__texte">
          <p class="mkm-eyebrow">Expertise & développement</p>
          <h1 id="mkm-conseil-titre">Conseil <span>& accompagnement</span></h1>
          <p class="mkm-conseil-hero__lead">
            Le Groupe MKM accompagne les entreprises, les entrepreneurs et les institutions
            dans l'organisation de leurs activités, la résolution de leurs difficultés
            et le développement de leurs projets.
          </p>
          <p class="mkm-conseil-hero__detail">
            De la gestion quotidienne à la stratégie de croissance, nous proposons un appui
            pratique, structuré et adapté à vos objectifs.
          </p>
          <div class="mkm-actions">
            <a :href="conseilWhatsapp" class="mkm-btn mkm-btn--primary mkm-conseil-cta" target="_blank" rel="noopener noreferrer" aria-label="Discuter avec le Groupe MKM sur WhatsApp à propos du conseil et de l'accompagnement">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41ZM12.05 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/></svg>
              Discuter sur WhatsApp
            </a>
            <a href="#mkm-conseil-prestations" class="mkm-btn mkm-btn--secondary">Découvrir nos prestations</a>
          </div>
        </div>
        <div class="mkm-conseil-hero__visuel">
          <img :src="conseilPhoto" alt="Trois professionnels analysent ensemble des documents financiers autour d’une table de réunion." width="1101" height="864" />
          <span class="mkm-conseil-hero__signature">Votre ambition, notre engagement.</span>
        </div>
      </div>
    </section>

    
<!-- Bande des engagements -->
<section
  class="mkm-conseil-atouts"
  aria-label="Nos engagements"
>
  <div class="mkm-container">
    <div class="mkm-conseil-atouts__grille">

      <div
        v-for="(atout, index) in conseilAtouts"
        :key="index"
        class="mkm-conseil-atouts__item"
      >
        <img
          :src="atout.image"
          :alt="atout.label"
          class="mkm-conseil-atouts__icone"
          width="64"
          height="64"
        />

        <p class="mkm-conseil-atouts__label">
          {{ atout.label }}
        </p>
      </div>

    </div>
  </div>
</section>


    <section id="mkm-conseil-prestations" class="mkm-section mkm-conseil-prestations" aria-labelledby="mkm-conseil-prestations-titre">
      <div class="mkm-container">
        <div class="mkm-conseil-entete">
          <p class="mkm-eyebrow">Nos domaines d'intervention</p>
          <h2 id="mkm-conseil-prestations-titre">Un accompagnement à chaque étape de votre développement</h2>
          <p>Trois axes complémentaires pour renforcer votre organisation, développer vos activités et faire progresser vos équipes.</p>
        </div>
        
<div class="mkm-conseil-grille">
  <article
    v-for="item in conseilPrestations"
    :key="item.numero"
    class="mkm-conseil-carte"
  >
    <div class="mkm-conseil-carte__image">
      <img
        :src="item.image"
        :alt="item.titre"
        loading="lazy"
      >
      <span class="mkm-conseil-carte__numero">
        {{ item.numero }}
      </span>
    </div>

    <div class="mkm-conseil-carte__contenu">
      <h3>{{ item.titre }}</h3>
      <p>{{ item.description }}</p>

      <ul>
        <li
          v-for="point in item.points"
          :key="point"
        >
          {{ point }}
        </li>
      </ul>
    </div>
  </article>
</div>

      </div>
    </section>

    
<section
  class="mkm-conseil-bandeau"
  aria-labelledby="mkm-conseil-contact-titre"
  :style="{
    backgroundImage: `linear-gradient(
      90deg,
      rgba(9, 16, 21, 0.90) 0%,
      rgba(9, 16, 21, 0.76) 50%,
      rgba(9, 16, 21, 0.65) 100%
    ), url('${imageBesoinConseils}')`
  }"
> 
<div class="mkm-container mkm-conseil-bandeau__interieur">
    <div>
      <p class="mkm-eyebrow">
        Parlons de vos objectifs
      </p>

      <h2 id="mkm-conseil-contact-titre">
        Besoin de structurer votre activité
        ou de former votre équipe ?
      </h2>

      <p>
        Présentez-nous vos besoins. Nous étudierons
        avec vous une approche adaptée à votre projet.
      </p>
    </div>

    <a
      :href="conseilWhatsapp"
      class="mkm-btn mkm-btn--primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      Nous contacter sur WhatsApp
    </a>
  </div>

</section>
  </template>

  <ImmobilierHero v-if="service?.slug === 'immobilier'" />

  <section v-if="service?.slug === 'immobilier'" class="mkm-section mkm-immo-expertise" aria-labelledby="titre-expertise-immobilier">
    <div class="mkm-container">
      <div class="mkm-immo-expertise__texte">
        <h2 id="titre-expertise-immobilier">Une expertise au service de vos projets immobiliers</h2>
        <p>Que vous soyez propriétaire, investisseur, particulier ou entreprise, le Groupe MKM vous accompagne dans vos démarches immobilières. Notre approche repose sur la compréhension de vos attentes, la transparence des échanges et la recherche de solutions adaptées à votre situation.</p>
      </div>
      <ul class="mkm-immo-expertise__photos">
        <li>
          <img :src="imageCollaborationImmo" alt="Trois personnes examinent des plans et la photo d’une maison autour d’une table, devant un écran qui présente un ensemble résidentiel.">
        </li>
        <li>
          <img :src="imageBatiments" alt="Deux immeubles résidentiels autour d’une cour avec pelouse, allée pavée et pergola.">
        </li>
      </ul>
      <ul class="mkm-immo-piliers">
        <li v-for="item in piliersImmo" :key="item.title">
          <MkmIcon :name="item.icon" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section v-if="service?.slug === 'immobilier'" class="mkm-section mkm-immo-services" aria-labelledby="titre-services-immobilier">
    <div class="mkm-container">
      <h2 id="titre-services-immobilier">Nos services immobiliers</h2>
      <ul class="mkm-immo-services__liste">
        <li v-for="item in servicesImmo" :key="item.title">
          <img :src="item.image" :alt="item.alt">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section v-if="service?.slug === 'immobilier'" class="mkm-section mkm-immo-galerie" aria-label="Maisons, intérieurs, immeubles et terrains">
    <div class="mkm-container">
      <ul class="mkm-immo-galerie__liste">
        
<li
  v-for="item in galerieImmo"
  :key="item.src"
  class="mkm-immo-galerie__item"
>
  <img
    :src="item.src"
    :alt="item.alt"
    loading="lazy"
  >

  <span class="mkm-immo-galerie__label">
    {{ item.label }}
  </span>
</li>

      </ul>
    </div>
  </section>

  <section v-if="service?.slug === 'solutions-numeriques'" class="mkm-num-hero" aria-labelledby="titre-numerique">
    <div class="mkm-container mkm-num-hero__cadre" :style="{ '--mkm-num-hero': `url('${heroNumerique}')` }">
      <div class="mkm-num-hero__copy">
        <h1 id="titre-numerique">Des solutions numériques pensées pour <span class="mkm-num-hero__accent">votre activité</span></h1>
        <p class="mkm-lead">Groupe MKM accompagne les entreprises, les institutions et les porteurs de projets dans la conception, le développement et l’évolution de leurs outils numériques : applications, logiciels métiers, hébergement, intelligence artificielle et visibilité en ligne.</p>
        <div class="mkm-actions">
          <NuxtLink to="/devis" class="mkm-btn mkm-btn--primary">Parler de mon projet</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section v-if="service?.slug === 'solutions-numeriques'" class="mkm-num-cartes section-tours" aria-labelledby="titre-cartes-numeriques">
    <div class="mkm-container">
      <div class="u-center-text u-margin-bottom-big">
        <h2 id="titre-cartes-numeriques" class="heading-secondary">Nos solutions numériques</h2>
        <p class="mkm-num-cartes__intro">Conception, hébergement, intelligence artificielle, référencement, maintenance et formation : des solutions adaptées à votre activité.</p>
      </div>
      <div v-for="(rangee, index) in rangeesNumeriques" :key="index" class="row">
        <div v-for="item in rangee" :key="item.title" class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture" :class="`card__picture--${item.tone}`">&nbsp;</div>
              <h3 class="card__heading">
                <span class="card__heading-span card__heading-line" :class="`card__heading-span--${item.tone}`">{{ item.lead }}</span><br>
                <span class="card__heading-span" :class="`card__heading-span--${item.tone}`">{{ item.rest }}</span>
              </h3>
              <div class="card__details">
                <ul>
                  <li v-for="line in item.lines" :key="line">{{ line }}</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back" :class="`card__side--back-${item.tone}`">
              <div class="card__cta">
                <NuxtLink :to="lienOffreNumerique[item.title]" class="btn btn--white" :aria-label="`Voir plus : ${item.title}`">Voir plus</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mkm-conseil-hero { padding: clamp(4rem, 8vw, 7rem) 0; background: #f8f7f3; }
.mkm-conseil-hero__grille { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.06fr); gap: clamp(2rem, 5vw, 5rem); align-items: center; }
.mkm-conseil-hero__texte h1 { margin: 1rem 0 1.5rem; max-width: 680px; font-size: clamp(2.5rem, 4.8vw, 4.8rem); line-height: 1.09; letter-spacing: -.045em; color: #1b2830; }
.mkm-conseil-hero__texte h1 span { color: #ad8542; }
.mkm-conseil-hero__lead { font-size: clamp(1.1rem, 1.5vw, 1.32rem); line-height: 1.7; color: #263943; }
.mkm-conseil-hero__detail { margin: 1.2rem 0 2rem; line-height: 1.8; color: #54616a; }
.mkm-conseil-hero__texte .mkm-actions { display: flex; flex-wrap: wrap; gap: .8rem; }
.mkm-conseil-cta { display: inline-flex; align-items: center; gap: .65rem; }
.mkm-conseil-cta svg { flex-shrink: 0; }
.mkm-conseil-hero__visuel { position: relative; min-width: 0; }
.mkm-conseil-hero__visuel img { width: 100%; display: block; aspect-ratio: 1.28; object-fit: cover; object-position: top; border-radius: 1.2rem; box-shadow: 0 24px 55px rgba(26, 31, 35, .13); }
.mkm-conseil-hero__signature { position: absolute; bottom: 1.3rem; left: 1.3rem; right: 1.3rem; display: block; padding: .85rem 1.15rem; border-radius: .6rem; background: rgba(23, 33, 39, .85); color: white; font-size: .95rem; letter-spacing: .03em; backdrop-filter: blur(6px); }
.mkm-conseil-prestations { padding: clamp(4rem, 7vw, 6rem) 0; }
.mkm-conseil-entete { max-width: 830px; margin: 0 auto 2.8rem; text-align: center; }
.mkm-conseil-entete h2 { font-size: clamp(1.9rem, 3.2vw, 3rem); line-height: 1.2; margin: .8rem 0 1rem; color: #1b2830; }
.mkm-conseil-entete > p:last-child { line-height: 1.7; color: #55636a; }
.mkm-conseil-grille { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.4rem; }
.mkm-conseil-carte { padding: clamp(1.5rem, 2.8vw, 2.35rem); border: 1px solid #e6e0d6; border-radius: 1rem; background: white; box-shadow: 0 12px 30px rgba(24, 32, 36, .045); }
.mkm-conseil-carte__numero { display: inline-block; font-weight: 700; font-size: 1.4rem; color: #b18a4e; margin-bottom: 1.3rem; }
.mkm-conseil-carte h3 { font-size: clamp(1.25rem, 1.65vw, 1.6rem); line-height: 1.35; margin: 0 0 .8rem; color: #1b2830; }
.mkm-conseil-carte > p { line-height: 1.7; color: #59656c; }
.mkm-conseil-carte ul { margin: 1.4rem 0 0; padding-left: 1.2rem; }
.mkm-conseil-carte li { margin: .65rem 0; line-height: 1.55; color: #283b44; }
.mkm-conseil-carte li::marker { color: #b18a4e; }
.mkm-conseil-bandeau { position: relative;
  padding: clamp(4rem, 7vw, 6rem) 0;
  background-color: #1d2a32;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: white; }
.mkm-conseil-bandeau__interieur { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
.mkm-conseil-bandeau__interieur > div { max-width: 720px; }
.mkm-conseil-bandeau h2 { font-size: clamp(1.6rem, 2.4vw, 2.4rem); line-height: 1.25; margin: .6rem 0; color: white; }
.mkm-conseil-bandeau p { color: #e6e4df; line-height: 1.7; }
.mkm-conseil-bandeau .mkm-btn { flex-shrink: 0; }
@media (max-width: 900px) { .mkm-conseil-hero__grille { grid-template-columns: 1fr; } .mkm-conseil-hero__visuel { max-width: 700px; } .mkm-conseil-grille { grid-template-columns: 1fr 1fr; } .mkm-conseil-bandeau__interieur { align-items: flex-start; flex-direction: column; } }
@media (max-width: 620px) { .mkm-conseil-grille { grid-template-columns: 1fr; } .mkm-conseil-hero__signature { font-size: .85rem; } }


/* ===================================
   CONSEIL — BANDE DES ENGAGEMENTS
=================================== */

.mkm-conseil-atouts {
  width: 100%;
  background: #fff;
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
}

.mkm-conseil-atouts__grille {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;
}

.mkm-conseil-atouts__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.8rem;
  padding: 0.6rem 1.5rem;
}

.mkm-conseil-atouts__item:not(:last-child) {
  border-right: 1px solid #e5e5e5;
}

.mkm-conseil-atouts__icone {
  display: block;
  width: 64px;
  height: 64px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.mkm-conseil-atouts__item:hover
.mkm-conseil-atouts__icone {
  transform: translateY(-4px);
}

.mkm-conseil-atouts__label {
  max-width: 230px;
  margin: 0;
  color: #171717;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.45;
}

/* Tablette */

@media (max-width: 900px) {
  .mkm-conseil-atouts__grille {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mkm-conseil-atouts__item {
    padding: 1.25rem;
  }

  .mkm-conseil-atouts__item:nth-child(2) {
    border-right: none;
  }

  .mkm-conseil-atouts__item:nth-child(-n+2) {
    border-bottom: 1px solid #e5e5e5;
  }
}

/* Mobile */

@media (max-width: 480px) {
  .mkm-conseil-atouts {
    padding: 1.25rem 0;
  }

  .mkm-conseil-atouts__item {
    padding: 1rem 0.5rem;
    gap: 0.5rem;
  }

  .mkm-conseil-atouts__icone {
    width: 48px;
    height: 48px;
  }

  .mkm-conseil-atouts__label {
    font-size: 0.8rem;
  }
}


/* =========================================
   SERVICE TRANSPORT — HERO
========================================= */

/* Fil d'Ariane */

.mkm-transport-fil {
  background: #fff;
  border-bottom: 1px solid #eeeeee;
}

.mkm-transport-fil__inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.7rem;
  min-height: 44px;
  font-size: 0.82rem;
}

.mkm-transport-fil a {
  color: #343434;
  text-decoration: none;
}

.mkm-transport-fil a:hover {
  color: #c99b40;
}

.mkm-transport-fil span[aria-current] {
  color: #b88c39;
}

/* Hero */

.mkm-transport-hero {
  position: relative;
  display: flex;
  align-items: center;

  min-height: clamp(390px, 38vw, 540px);

  background-color: #172026;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  color: #fff;
}


.mkm-transport-hero__inner {
  width: 100%;
  box-sizing: border-box;

  padding-block: clamp(2.5rem, 5vw, 4.5rem);

  /* Retrait du contenu par rapport aux bords du hero */
  padding-inline: clamp(1.5rem, 4vw, 4rem);
}


.mkm-transport-hero__content {
  position: relative;
  max-width: 560px;
  z-index: 1;
}

/* Petit label */

.mkm-transport-hero__eyebrow {
  display: inline-flex;
  align-items: center;

  padding: 0.45rem 0.85rem;
  margin-bottom: 1rem;

  background: rgba(181, 141, 58, .70);
  border-radius: 4px;

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: white;
}

/* Titre */

.mkm-transport-hero h1 {
  margin: 0 0 1rem;

  font-size: clamp(2.2rem, 4vw, 4rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;

  color: #ffffff;
}

.mkm-transport-hero h1 span {
  color: #d0a448;
}

/* Description */

.mkm-transport-hero__description {
  max-width: 480px;
  margin: 0 0 1.7rem;

  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  font-weight: 400;
  line-height: 1.65;

  color: #ffffff;
}

/* Groupe de boutons */

.mkm-transport-hero__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.mkm-transport-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  min-height: 48px;
  padding: 0.8rem 1.2rem;

  border: none;
  border-radius: 50px;

  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;

  transition:
    transform .25s ease,
    box-shadow .25s ease,
    background-color .25s ease;
}

.mkm-transport-btn:hover {
  transform: translateY(-3px);
  text-decoration: none;
}

/* Bouton devis doré */

.mkm-transport-btn--gold {
  background: #d2a649;
  color: #111111;
}

.mkm-transport-btn--gold:hover {
  background: #e5b95a;
  color: #111111;
  box-shadow: 0 8px 25px rgba(210, 166, 73, .3);
}

/* Bouton WhatsApp */

.mkm-transport-btn--whatsapp {
  background: #08b85e;
  color: white;
}

.mkm-transport-btn--whatsapp:hover {
  background: #079f52;
  color: white;
  box-shadow: 0 8px 25px rgba(8, 184, 94, .3);
}

.mkm-transport-btn svg {
  flex-shrink: 0;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 900px) {
  .mkm-transport-hero {
    min-height: 470px;
    background-position: 60% center;
  }

  .mkm-transport-hero__content {
    max-width: 500px;
  }
}

@media (max-width: 600px) {
  .mkm-transport-hero {
    min-height: 540px;
    background-position: 65% center;
  }

  .mkm-transport-hero__inner {
    padding-block: 3rem;
  }

  .mkm-transport-hero h1 {
    font-size: clamp(2rem, 8vw, 2.8rem);
  }

  .mkm-transport-hero__description {
    font-size: 0.95rem;
  }



  .mkm-transport-hero__actions {
    align-items: stretch;
    flex-direction: column;
    max-width: 320px;
  }

  .mkm-transport-btn {
    width: 100%;
  }
}


/* =======================================
   TRANSPORT — BANDEAU DES 4 PRESTATIONS
======================================= */

.mkm-transport-atouts {
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
}

.mkm-transport-atouts__grille {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;
}

.mkm-transport-atouts__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem 1.5rem;
  text-align: center;
}

.mkm-transport-atouts__item:not(:last-child) {
  border-right: 1px solid #e5e5e5;
}

.mkm-transport-atouts__icone {
  display: block;
  width: 64px;
  height: 64px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.mkm-transport-atouts__item:hover
.mkm-transport-atouts__icone {
  transform: translateY(-4px);
}

.mkm-transport-atouts__label {
  max-width: 230px;
  margin: 0;
  color: #171717;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.45;
}

/* Tablettes */

@media (max-width: 900px) {
  .mkm-transport-atouts__grille {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mkm-transport-atouts__item {
    padding: 1.25rem;
  }

  .mkm-transport-atouts__item:nth-child(2) {
    border-right: none;
  }

  .mkm-transport-atouts__item:nth-child(-n+2) {
    border-bottom: 1px solid #e5e5e5;
  }
}

/* Smartphones */

@media (max-width: 480px) {
  .mkm-transport-atouts {
    padding: 1.25rem 0;
  }

  .mkm-transport-atouts__item {
    padding: 1rem 0.5rem;
    gap: 0.6rem;
  }

  .mkm-transport-atouts__icone {
    width: 48px;
    height: 48px;
  }

  .mkm-transport-atouts__label {
    font-size: 0.8rem;
    line-height: 1.4;
  }
}


/* ========================================
   TRANSPORT — DEUX PÔLES COMPLÉMENTAIRES
======================================== */

.mkm-transport-poles {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0;
  background: #ffffff;
}

/* En-tête */

.mkm-transport-poles__entete {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: end;
  gap: 3rem;
  margin-bottom: 2rem;
}

.mkm-transport-poles__eyebrow {
  margin: 0 0 0.7rem;
  color: #bf9139;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.mkm-transport-poles__intro h2 {
  max-width: 700px;
  margin: 0;
  color: #141414;
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.mkm-transport-poles__description {
  max-width: 480px;
  margin: 0;
  color: #646464;
  font-size: 1rem;
  line-height: 1.75;
}

/* Grille */

.mkm-transport-poles__grille {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 1.5rem;
}

/* Cartes */

.mkm-transport-pole {
  min-width: 0;
  overflow: hidden;
  border-radius: 10px;
  background: linear-gradient(
    145deg,
    #ffffff 0%,
    #faf7f1 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.035);
}

/* Photographies */

.mkm-transport-pole__visuel {
  position: relative;
  height: clamp(200px, 19vw, 285px);
}

.mkm-transport-pole__visuel img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
}

.mkm-transport-pole:hover
.mkm-transport-pole__visuel img {
  transform: scale(1.035);
}

/* Numéro doré */

.mkm-transport-pole__numero {
  position: absolute;
  bottom: -24px;
  left: 24px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #e2b955 0%,
    #b9851c 100%
  );

  color: white;
  font-size: 1.5rem;
  font-weight: 800;
}

/* Contenu des cartes */

.mkm-transport-pole__contenu {
  padding: 2.25rem 1.6rem 2rem;
}

.mkm-transport-pole__contenu h3 {
  margin: 0 0 0.65rem;
  color: #181818;
  font-size: clamp(1.2rem, 1.6vw, 1.5rem);
  font-weight: 750;
  line-height: 1.3;
}

.mkm-transport-pole__description {
  margin: 0 0 1.25rem;
  color: #565656;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Liste des prestations */

.mkm-transport-pole__liste {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 0;
  padding: 0;
  list-style: none;
}

.mkm-transport-pole__liste li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  color: #292929;
  font-size: 0.92rem;
  line-height: 1.45;
}

.mkm-transport-pole__check {
  display: flex;
  flex: 0 0 19px;
  align-items: center;
  justify-content: center;

  width: 19px;
  height: 19px;
  margin-top: 1px;
  border-radius: 50%;

  background: #c49635;
  color: white;
  font-size: 0.72rem;
  font-weight: 800;
}

/* Tablettes */

@media (max-width: 900px) {
  .mkm-transport-poles__entete {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .mkm-transport-poles__description {
    max-width: 680px;
  }

  .mkm-transport-poles__grille {
    gap: 1rem;
  }

  .mkm-transport-pole__contenu {
    padding: 2.2rem 1.2rem 1.5rem;
  }
}

/* Smartphones */

@media (max-width: 650px) {
  .mkm-transport-poles {
    padding: 3rem 0;
  }

  .mkm-transport-poles__grille {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mkm-transport-pole__visuel {
    height: 220px;
  }

  .mkm-transport-pole__contenu {
    padding: 2.2rem 1.25rem 1.5rem;
  }

  .mkm-transport-poles__intro h2 {
    font-size: 1.9rem;
  }
}


/* ===========================================
   TRANSPORT — SECTION CTA FINALE
=========================================== */

.mkm-transport-cta {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 340px;
  background-color: #101820;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: #fff;
}

.mkm-transport-cta__inner {
  width: 100%;
  padding-block: clamp(3rem, 5vw, 4.5rem);
}

.mkm-transport-cta__content {
  position: relative;
  z-index: 1;
  max-width: 750px;
}

/* Titre */

.mkm-transport-cta h2 {
  margin: 0 0 1rem;
  color: #fff;
  font-size: clamp(2rem, 3.2vw, 3.2rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.035em;
}

.mkm-transport-cta h2 span {
  color: #d0a448;
}

/* Description */

.mkm-transport-cta p {
  max-width: 630px;
  margin: 0 0 1.6rem;
  color: #f0f0f0;
  font-size: 1rem;
  line-height: 1.65;
}

/* Boutons */

.mkm-transport-cta__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.9rem;
}

/* Tablette */

@media (max-width: 900px) {
  .mkm-transport-cta {
    min-height: 360px;
    background-position: 65% center;
  }

  .mkm-transport-cta__content {
    max-width: 620px;
  }
}

/* Smartphone */

@media (max-width: 600px) {
  .mkm-transport-cta {
    min-height: 430px;
    background-position: 70% center;
  }

  .mkm-transport-cta__inner {
    padding-block: 3rem;
  }

  .mkm-transport-cta h2 {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
  }

  .mkm-transport-cta p {
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .mkm-transport-cta__actions {
    flex-direction: column;
    align-items: stretch;
    max-width: 340px;
  }

  .mkm-transport-cta__actions .mkm-transport-btn {
    width: 100%;
    white-space: normal;
    text-align: center;
  }
}



/* ==========================================
   TRANSPORT — CTA FINAL
   Retrait intérieur du contenu
========================================== */

.mkm-transport-cta__content {
  box-sizing: border-box;
  padding-inline: clamp(1.5rem, 3.5vw, 3.5rem);
}

/* Tablettes */
@media (max-width: 900px) {
  .mkm-transport-cta__content {
    padding-inline: 1.5rem;
  }
}

/* Smartphones */
@media (max-width: 600px) {
  .mkm-transport-cta__content {
    padding-inline: 1rem;
  }
}


</style>
