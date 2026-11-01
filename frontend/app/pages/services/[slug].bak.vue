<script setup lang="ts">
import { services } from '~/data/site'
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

const route = useRoute()
const galerieImmo = [
  { src: item1, alt: 'Villa blanche contemporaine avec piscine, pelouse et palmiers.' },
  { src: item2, alt: 'Salon clair avec canapé d’angle, table basse et baie vitrée sur la ville.' },
  { src: item3, alt: 'Immeubles résidentiels modernes le long d’une rue arborée.' },
  { src: item4, alt: 'Terrain enherbé clôturé, avec des maisons au toit rouge en arrière-plan.' },
  { src: item5, alt: 'Grande parcelle herbeuse devant un quartier et des collines.' }
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
  { image: illuDemolisseur, label: 'Démolisseur', count: '12 engins', alt: 'Illustration d’une pelle de démolition.' },
  { image: illuChargeuse, label: 'Chargeuses', count: '6 engins', alt: 'Illustration d’une chargeuse sur pneus.' },
  { image: illuCompacteur, label: 'Compactage', count: '4 engins', alt: 'Illustration d’un compacteur.' },
  { image: illuLevage, label: 'Levage', count: '6 engins', alt: 'Illustration d’une grue mobile.' },
  { image: illuForeuse, label: 'Forage', count: '3 engins', alt: 'Illustration d’une foreuse.' }
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
          <img :src="item.image" :alt="item.alt">
          <strong>{{ item.label }}</strong>
          <span>{{ item.count }}</span>
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
          <NuxtLink to="/contact" class="mkm-btn mkm-btn--secondary">Parlons de votre projet</NuxtLink>
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

  <section v-else-if="service && service.slug !== 'location-engins' && service.slug !== 'educ-afrik' && service.slug !== 'solutions-numeriques' && service.slug !== 'immobilier'" class="mkm-section">
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

  <ImmobilierHero v-if="service?.slug === 'immobilier'" />

  <section v-if="service?.slug === 'immobilier'" class="mkm-section mkm-immo-expertise" aria-labelledby="titre-expertise-immobilier">
    <div class="mkm-container">
      <div class="mkm-immo-expertise__texte">
        <h2 id="titre-expertise-immobilier">Une expertise au service de vos projets immobiliers</h2>
        <p>Que vous soyez propriétaire, investisseur, particulier ou entreprise, le Groupe MKM vous accompagne dans vos démarches immobilières. Notre approche repose sur la compréhension de vos attentes, la transparence des échanges et la recherche de solutions adaptées à votre situation.</p>
        <p>De la mise en relation à l’accompagnement dans les démarches, nous facilitons la concrétisation de vos projets d’achat, de vente et de location.</p>
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
        <li v-for="item in galerieImmo" :key="item.src">
          <img :src="item.src" :alt="item.alt">
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
