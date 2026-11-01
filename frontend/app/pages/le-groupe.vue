<script setup lang="ts">
import { contacts } from '~/data/site'
import portrait from '~/assets/image/mafua-makengo-michee.jpeg'
import imageEngins from '~/assets/image/group/location_engins.png'
import imageLivres from '~/assets/image/group/livres.png'
import imageImmeuble from '~/assets/image/group/immobilier.png'
import imageTransport from '~/assets/image/group/transport.png'
import imageNumerique from '~/assets/image/group/numeriques.png'
import imageAccompagnement from '~/assets/image/group/accompagnement.png'
import imageCollaboration from '~/assets/image/group/collaboration_projet_client.png'
import photoMarieFrance from '~/assets/image/group-equipe/uniformes/marie-france.png'
import photoBenMbongo from '~/assets/image/group-equipe/uniformes/ben-mbongo.png'
import photoTychique from '~/assets/image/group-equipe/uniformes/tychique-tuba.png'
import photoBeaker from '~/assets/image/group-equipe/uniformes/beraka-mabanza.png'
import photoJennifer from '~/assets/image/group-equipe/uniformes/jennifer-veko.png'
import photoPhilia from '~/assets/image/group-equipe/uniformes/philia-mbanza.png'
import photoSami from '~/assets/image/group-equipe/uniformes/sami-milambo.png'
import photoJaphet from '~/assets/image/group-equipe/uniformes/japhet-ntumba.png'
import photoEsaie from '~/assets/image/group-equipe/uniformes/esaie-kikuaku.png'

useSeoMeta({
  title: 'Le groupe · Groupe MKM',
  description: 'GROUPE MKM, entreprise congolaise multisectorielle basée à Kinshasa : expertises, mission, vision et valeurs.'
})

const domaines = [
  {
    slug: 'location-engins',
    title: 'Location d’engins et de camions',
    text: 'Équipements et camions pour les chantiers, le terrassement, le transport de matériaux et les travaux de construction.',
    link: 'Découvrir nos engins',
    image: imageEngins
  },
  {
    slug: 'educ-afrik',
    title: 'Livres et fournitures',
    text: 'Livres, fournitures scolaires et ressources pédagogiques, avec distribution et impression à la demande.',
    link: 'Découvrir l’offre éducative',
    image: imageLivres
  },
  {
    slug: 'immobilier',
    title: 'Immobilier',
    text: 'Accompagnement pour acheter, vendre ou louer des maisons, des parcelles et d’autres biens immobiliers',
    link: 'Explorer nos services immobiliers',
    image: imageImmeuble
  },
  {
    slug: 'logistique-transport',
    title: 'Logistique et transport',
    text: 'Transport de marchandises, coordination des livraisons et acheminement de matériaux ou d’équipements.',
    link: 'Découvrir nos solutions logistiques',
    image: imageTransport
  },
  {
    slug: 'solutions-numeriques',
    title: 'Solutions numériques',
    text: 'Création de sites et d’applications, hébergement et solutions numériques adaptées aux organisations.',
    link: 'Explorer nos solutions numériques',
    image: imageNumerique
  },
  {
    slug: 'conseil',
    title: 'Conseil & accompagnement',
    text: 'Conseil en gestion, structuration de projets et formation pour accompagner les entrepreneurs et leurs équipes.',
    link: 'Découvrir notre accompagnement',
    image: imageAccompagnement
  }
]


/* Apparition de la section Mission / Vision */

const missionVisionRef = ref<HTMLElement | null>(null)

let missionVisionObserver: IntersectionObserver | null = null

onMounted(() => {
  const section = missionVisionRef.value
  if (!section) return

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  ) {
    return
  }

  missionVisionObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    {
      threshold: 0.12
    }
  )

  section.classList.add('mkm-cap--animated')

  section
    .querySelectorAll(
      '.mkm-cap__intro, .mkm-cap__card, .mkm-cap__principes'
    )
    .forEach(element => {
      missionVisionObserver?.observe(element)
    })
})

onBeforeUnmount(() => {
  missionVisionObserver?.disconnect()
  missionVisionObserver = null
})



/* ==========================================
   ANIMATION SECTION NOS VALEURS
========================================== */

const valeursSectionRef = ref<HTMLElement | null>(null)

let valeursObserver: IntersectionObserver | null = null

onMounted(() => {
  const section = valeursSectionRef.value
  if (!section) return

  const mouvementReduit = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (
    mouvementReduit ||
    !('IntersectionObserver' in window)
  ) {
    return
  }

  valeursObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible')
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.12
    }
  )

  section.classList.add('mkm-valeurs--animated')
  valeursObserver.observe(section)
})

onBeforeUnmount(() => {
  valeursObserver?.disconnect()
  valeursObserver = null
})



/* Animation progressive des cartes de l'équipe */

const organigrammeRef = ref<HTMLElement | null>(null)

let equipeObserver: IntersectionObserver | null = null

onMounted(() => {
  const conteneur = organigrammeRef.value

  if (!conteneur) return

  const cartes = conteneur.querySelectorAll<HTMLElement>(
    '.mkm-groupe__membre'
  )

  // Accessibilité : aucune animation si mouvement réduit
  const mouvementReduit = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (
    mouvementReduit ||
    !('IntersectionObserver' in window)
  ) {
    return
  }

  equipeObserver = new IntersectionObserver(
    (entrees, observer) => {
      entrees.forEach(entree => {
        if (entree.isIntersecting) {
          entree.target.classList.add('is-visible')
          observer.unobserve(entree.target)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -35px 0px'
    }
  )

  // Activer l'effet seulement lorsque l'observateur existe
  conteneur.classList.add('mkm-team-motion')

  cartes.forEach(carte => {
    equipeObserver?.observe(carte)
  })
})

onBeforeUnmount(() => {
  equipeObserver?.disconnect()
  equipeObserver = null
})



const valeurs = [
  {
    title: 'Professionnalisme',
    text: 'La rigueur et la qualité dans chaque intervention.',
    icon: 'file-check'
  },
  {
    title: 'Intégrité',
    text: 'Des relations fondées sur la transparence et l’honnêteté.',
    icon: 'shield-check'
  },
  {
    title: 'Innovation',
    text: 'Des solutions adaptées aux réalités et aux besoins.',
    icon: 'lightbulb'
  },
  {
    title: 'Engagement',
    text: 'Un accompagnement sérieux à chaque étape.',
    icon: 'handshake'
  },
  {
    title: 'Satisfaction du client',
    text: 'Une écoute attentive pour améliorer nos prestations.',
    icon: 'message'
  }
]



const equipe = [
  {
    name: 'Michée MAFUA MAKENGO',
    role: 'Président-Directeur Général',
    structure: 'Groupe MKM et toutes ses branches',
    image: portrait,
    niveau: 'direction'
  },
  {
    name: 'Marie-France',
    role: 'Responsable administrative',
    structure: 'Groupe MKM et LivrAura',
    image: photoMarieFrance,
    niveau: 'strategique'
  },
  {
    name: 'Ben Mbongo',
    role: 'Responsable de la communication et de la qualité',
    structure: 'Groupe MKM et LivrAura',
    image: photoBenMbongo,
    niveau: 'strategique'
  },
  {
    name: 'Tychique Tuba',
    role: 'Responsable logistique et transport',
    structure: 'Groupe MKM et LivrAura',
    image: photoTychique,
    niveau: 'strategique'
  },
  {
    name: 'Esaïe KIKUAKU',
    role: 'Responsable juridique',
    structure: 'Groupe MKM et LivrAura',
    image: photoEsaie,
    niveau: 'strategique'
  },
  {
    name: 'Japhet Ntumba',
    role: 'Responsable informatique et solutions numériques',
    structure: 'Groupe MKM et LivrAura',
    image: photoJaphet,
    niveau: 'strategique'
  },
  {
    name: 'Philia Mabanza',
    role: 'Responsable formations et certifications',
    structure: 'Groupe MKM et LivrAura',
    image: photoPhilia,
    niveau: 'relations'
  },
  {
    name: 'Samuel Milambo',
    role: 'Responsable conformité et distribution',
    structure: 'LivrAura',
    image: photoSami,
    niveau: 'relations'
  },
  {
    name: 'Beraka Mabanza',
    role: 'Responsable relations publiques — diaspora et partenariats internationaux',
    structure: 'LivrAura — France et Europe',
    image: photoBeaker,
    niveau: 'relations'
  },
  {
    name: 'Jennifer VEKO',
    role: 'Responsable relations publiques — RDC et axe panafricain',
    structure: 'LivrAura — RDC et pays francophones et anglophones',
    image: photoJennifer,
    niveau: 'relations'
  }
]



/* Direction générale */
const directionGenerale = {
  name: 'Michée MAFUA MAKENGO',
  role: 'Président-directeur général',
  image: portrait,
  pole: 'Direction générale',
  mission: 'Orientation stratégique, coordination des activités et développement du groupe.'
}

/* Structure hiérarchique de l'équipe */
const niveauxEquipe = computed(() => [
  {
    id: 'direction',
    numero: '01',
    titre: 'Direction générale',
    description:
      'La vision, les orientations et la coordination générale des activités du groupe.',
    membres: [directionGenerale]
  },
  {
    id: 'strategique',
    numero: '02',
    titre: 'Responsables stratégiques',
    description:
      'Cinq responsables chargés de piloter les principales fonctions de gestion et d’exploitation.',
    membres: equipe.filter(
      person => person.niveau === 'strategique'
    )
  },
  {
    id: 'relations',
    numero: '03',
    titre: 'Relations publiques',
    description:
      'Les collaborateurs mobilisés pour les relations, la représentation et les activités transversales du groupe.',
    membres: equipe.filter(
      person => person.niveau === 'relations'
    )
  }
])

const profilsEquipe: Record<string, {
  pole: string
  mission: string
}> = {
  'Michée MAFUA MAKENGO': {
    pole: 'Direction générale',
    mission: 'Pilotage stratégique et développement des activités du groupe.'
  },
  'Marie-France': {
    pole: 'Administration et finances',
    mission: 'Organisation administrative et suivi des opérations financières.'
  },
  'Ben Mbongo': {
    pole: 'Communication et qualité',
    mission: 'Valorisation de l’image du groupe et amélioration de la communication.'
  },
  'Tychique Tuba': {
    pole: 'Logistique et transport',
    mission: 'Coordination des moyens logistiques et des opérations de transport.'
  },
  'Esaïe KIKUAKU': {
    pole: 'Affaires juridiques',
    mission: 'Accompagnement juridique et sécurisation des activités.'
  },
  'Japhet Ntumba': {
    pole: 'Solutions numériques',
    mission: 'Conception et coordination des projets technologiques.'
  },
  'Philia Mabanza': {
    pole: 'Formation et certifications',
    mission: 'Développement des compétences et coordination des formations.'
  },
  'Samuel Milambo': {
    pole: 'Conformité et distribution',
    mission: 'Suivi de la conformité et organisation des activités de distribution.'
  },
  'Beraka Mabanza': {
    pole: 'Développement international',
    mission: 'Développement des relations et opportunités en Europe.'
  },
  'Jennifer VEKO': {
    pole: 'Développement commercial',
    mission: 'Accompagnement commercial et développement des relations en Afrique.'
  }
}



const engagements = [
  {
    numero: '01',
    icon: 'message',
    title: 'Comprendre votre besoin',
    text: 'Prendre en compte vos objectifs, vos contraintes et le contexte du projet.'
  },
  {
    numero: '02',
    icon: 'layers',
    title: 'Réunir les bonnes expertises',
    text: 'Identifier les services pertinents et les associer lorsque le projet le nécessite.'
  },
  {
    numero: '03',
    icon: 'file-check',
    title: 'Accompagner la réalisation',
    text: 'Privilégier des échanges clairs et un suivi adapté à la prestation.'
  }
]


const etapes = [
  {
    title: 'Écouter et comprendre',
    text: 'Échanger sur votre projet, vos objectifs, votre budget et vos contraintes.'
  },
  {
    title: 'Définir la solution',
    text: 'Identifier les services et les moyens nécessaires, puis préciser le périmètre de notre intervention.'
  },
  {
    title: 'Réaliser et suivre',
    text: 'Coordonner les prestations convenues et maintenir une communication claire pendant leur réalisation.'
  },
  {
    title: 'Évaluer et améliorer',
    text: 'Recueillir vos observations et identifier les améliorations utiles pour la suite.'
  }
]
</script>

<template>
  <article class="mkm-groupe">
    <section class="mkm-section" aria-labelledby="titre-groupe">
      <div class="mkm-container mkm-groupe__intro">
        <div>
          <p class="mkm-eyebrow mkm-eyebrow--rule">Groupe MKM</p>
          <h1 id="titre-groupe">Un partenaire unique pour des solutions multiples.</h1>
          <p>
            Basé à Kinshasa, GROUPE MKM accompagne les entreprises, les institutions et les particuliers dans leurs projets.
          </p>
          
<a
  :href="contacts.whatsappHref"
  class="mkm-btn mkm-btn--whatsapp mkm-groupe__hero-whatsapp"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Nous contacter sur WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41ZM12.05 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/>
  </svg>

  <span>Nous contacter</span>
</a>

        </div>
        <figure class="mkm-groupe__figure">
          <img
            class="mkm-groupe__portrait"
            :src="portrait"
            alt="Mafua Makengo Michée, professionnel et entrepreneur congolais en gestion financière et administrative."
            width="1254"
            height="1254"
          >
          <figcaption class="mkm-groupe__legend">
            <strong>Mafua Makengo Michée</strong>
            Entrepreneur congolais, dirigeant d’entreprise et professionnel de la gestion financière, administrative et du développement des affaires.
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="mkm-section mkm-section--divided" aria-labelledby="titre-qui">
      <div class="mkm-container">
        <div class="mkm-groupe__qui">
        <div class="mkm-groupe__identite">
          <p class="mkm-eyebrow mkm-eyebrow--rule">Qui sommes-nous ?</p>
          <h2 id="titre-qui">Un groupe congolais, des expertises complémentaires</h2>
          <p>
            GROUPE MAFUA MAKENGO MANAGEMENT, en sigle <strong>GROUPE MKM</strong>, est une entreprise congolaise implantée à Kinshasa. Notre vocation est multisectorielle : plusieurs métiers sont réunis dans un même groupe, afin d’accompagner des projets qui ne se limitent pas à un seul domaine. Le groupe y concentre ses équipes et l’essentiel de ses moyens.
          </p>
          <p>
            Nous répondons aux besoins des entreprises, des institutions et des particuliers qui portent un projet. Équiper un chantier, transporter des marchandises ou développer une présence numérique : ces situations demandent des moyens différents. Nous choisissons le service qui correspond, plutôt qu’une offre identique pour tous.
          </p>
        </div>
        <aside class="mkm-groupe__bref" aria-labelledby="titre-bref">
          <h3 id="titre-bref">Le groupe en bref</h3>
          <ul class="mkm-groupe__reperes">
            <li>
              <MkmIcon name="pin" size="small" />
              <p><strong>Notre ancrage</strong> Kinshasa, République démocratique du Congo</p>
            </li>
            <li>
              <MkmIcon name="layers" size="small" />
              <p><strong>Nos métiers</strong> Six domaines d’expertise complémentaires</p>
            </li>
            <li>
              <MkmIcon name="users" size="small" />
              <p><strong>Nos clients</strong> Entreprises, institutions et particuliers</p>
            </li>
            <li>
              <MkmIcon name="flag" size="small" />
              <p><strong>Notre ambition</strong> Contribuer au développement économique en RDC et en Afrique</p>
            </li>
          </ul>
        </aside>
        </div>
        
<!-- Notre parcours d'accompagnement -->
<ol class="mkm-groupe__engagements">
  <li
    v-for="item in engagements"
    :key="item.numero"
    class="mkm-groupe__engagement"
  >
    <div class="mkm-groupe__engagement-top">

      <span class="mkm-groupe__engagement-icon">
        <MkmIcon
          :name="item.icon"
          size="small"
        />
      </span>

      <span class="mkm-groupe__engagement-numero">
        {{ item.numero }}
      </span>

    </div>

    <h3>{{ item.title }}</h3>

    <p>{{ item.text }}</p>
  </li>
</ol>

      </div>
    </section>

    <section class="mkm-section mkm-section--divided" aria-labelledby="titre-expertises-groupe">
      <div class="mkm-container">
        <h2 id="titre-expertises-groupe">Des expertises complémentaires</h2>
        <p class="mkm-groupe__lead">Six domaines d’activité pour répondre à vos besoins, mobilisés individuellement ou associés selon les exigences de votre projet.</p>
        <ul class="mkm-groupe__domaines">
          <li v-for="item in domaines" :key="item.slug">
            <NuxtLink :to="`/services/${item.slug}`" class="mkm-groupe__domaine">
              <img class="mkm-groupe__domaine-media" :src="item.image" alt="" width="1024" height="1024">
              <span class="mkm-groupe__domaine-body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <span class="mkm-groupe__service-link">
                  {{ item.link }}
                  <MkmIcon name="arrow-right" size="small" />
                </span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="mkm-section mkm-section--divided mkm-groupe__equipe-section" aria-labelledby="titre-equipe">
      <div class="mkm-container">
        <header class="mkm-groupe__equipe-intro">
          <p class="mkm-eyebrow mkm-eyebrow--rule">Notre équipe</p>
          <h2 id="titre-equipe">Des interlocuteurs pour chaque étape de votre projet</h2>
          <p>Dix membres aux compétences complémentaires, réunis autour de la direction pour accompagner les activités du Groupe MKM et de LivrAura.</p>
        </header>
        
        
<div ref="organigrammeRef" class="mkm-groupe__organigramme">

<section
  v-for="niveau in niveauxEquipe"
  :key="niveau.id"
  class="mkm-groupe__niveau"
  :class="`mkm-groupe__niveau--${niveau.id}`"
  :aria-labelledby="`titre-niveau-${niveau.id}`"
>

  <!-- En-tête du niveau -->
  <header class="mkm-groupe__niveau-header">
    <span class="mkm-groupe__niveau-numero">
      {{ niveau.numero }}
    </span>

    <h3 :id="`titre-niveau-${niveau.id}`">
      {{ niveau.titre }}
    </h3>

    <p>{{ niveau.description }}</p>
  </header>

  <!-- Cartes des membres -->
  <ul class="mkm-groupe__equipe">
    <li
      v-for="person in niveau.membres"
      :key="person.name"
      class="mkm-groupe__membre"
    >
      <article class="mkm-groupe__membre-carte">

        <div class="mkm-groupe__membre-photo-wrap">
          <img
            class="mkm-groupe__membre-photo"
            :src="person.image"
            :alt="`Portrait de ${person.name}`"
            loading="lazy"
          />
        </div>

        <div class="mkm-groupe__membre-identite">
          <h4>{{ person.name }}</h4>

          <p class="mkm-groupe__membre-fonction">
            {{ person.role }}
          </p>
        </div>

        
<!-- Rattachement / pôle -->
<div
  v-if="profilsEquipe[person.name]?.pole"
  class="mkm-groupe__membre-pole"
>
  {{ profilsEquipe[person.name]?.pole }}
</div>

<!-- Mission -->
<p
  v-if="profilsEquipe[person.name]?.mission"
  class="mkm-groupe__membre-mission"
>
  {{ profilsEquipe[person.name]?.mission }}
</p>


      </article>
    </li>
  </ul>

</section>

</div>
        
<div class="mkm-groupe__equipe-cta">
  <p>
    Vous avez un projet en tête ? Présentez-le à l’équipe :
    nous vous orienterons vers l’interlocuteur adapté.
  </p>

  <a
    :href="contacts.whatsappHref"
    class="mkm-btn mkm-btn--whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous contacter sur WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41ZM12.05 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/>
    </svg>

    <span>Nous contacter</span>
  </a>
</div>

      </div>
    </section>

    
<!-- ======================================
     NOTRE CAP — MISSION ET VISION
====================================== -->

<section ref="missionVisionRef"
  class="mkm-section mkm-section--divided mkm-cap"
  aria-labelledby="titre-cap"
>
  <div class="mkm-container">

    <!-- Introduction institutionnelle -->
    <header class="mkm-cap__intro">
      <p class="mkm-eyebrow mkm-eyebrow--rule">
        Notre cap
      </p>

      <h2 id="titre-cap">
        Une mission concrète, une vision durable
      </h2>

      <p class="mkm-cap__lead">
        Nous accompagnons les projets avec méthode,
        proximité et professionnalisme, tout en
        construisant un groupe congolais solide,
        capable de répondre à des besoins réels
        et de créer une valeur durable.
      </p>
    </header>

    <!-- Les deux cartes -->
    <div class="mkm-cap__grid">

      <!-- Notre mission -->
      <article
        class="mkm-cap__card mkm-cap__card--mission"
        aria-labelledby="titre-mission"
      >
        <div class="mkm-cap__icon">
          <MkmIcon name="target" />
        </div>

        <p class="mkm-cap__label">
          Notre mission
        </p>

        <h3 id="titre-mission">
          Accompagner chaque projet avec justesse
        </h3>

        <p class="mkm-cap__description">
          Nous mettons à la disposition de nos clients
          des services fiables, des solutions adaptées
          et un accompagnement professionnel, de
          l'expression du besoin jusqu'à la réalisation.
        </p>

        <div class="mkm-cap__details">
          <h4>Nos engagements</h4>

          <ul class="mkm-cap__list">
            <li>
              Comprendre vos objectifs et vos contraintes.
            </li>
            <li>
              Proposer une réponse claire et adaptée.
            </li>
            <li>
              Assurer un suivi sérieux à chaque étape.
            </li>
          </ul>
        </div>
      </article>

      <!-- Notre vision -->
      <article
        class="mkm-cap__card mkm-cap__card--vision"
        aria-labelledby="titre-vision"
      >
        <div class="mkm-cap__icon">
          <MkmIcon name="horizon" />
        </div>

        <p class="mkm-cap__label">
          Notre vision
        </p>

        <h3 id="titre-vision">
          Bâtir un groupe de référence en RDC et en Afrique
        </h3>

        <p class="mkm-cap__description">
          Nous développons un groupe congolais structuré,
          crédible et durable, capable d'unir plusieurs
          expertises complémentaires pour répondre aux
          besoins des entreprises, des institutions
          et des particuliers.
        </p>

        <div class="mkm-cap__details">
          <h4>Notre ambition</h4>

          <ul class="mkm-cap__list">
            <li>
              Soutenir les initiatives locales.
            </li>
            <li>
              Faciliter l'accès à des services fiables.
            </li>
            <li>
              Contribuer au développement économique durable.
            </li>
          </ul>
        </div>
      </article>

    </div>

    <!-- Principes d'action -->
    <div class="mkm-cap__principes">
      <p class="mkm-cap__principes-title">
        Nos principes d'action
      </p>

      <ul class="mkm-cap__principes-list">
        <li>Écoute</li>
        <li>Fiabilité</li>
        <li>Clarté</li>
        <li>Expertise</li>
        <li>Engagement</li>
      </ul>
    </div>

  </div>
</section>



<!-- =========================================
     NOS VALEURS — SECTION INSTITUTIONNELLE
========================================= -->

<section
  ref="valeursSectionRef"
  class="mkm-section mkm-section--divided mkm-valeurs"
  aria-labelledby="titre-valeurs"
>
  <div class="mkm-container">

    <div class="mkm-valeurs__layout">

      <!-- Panneau éditorial gauche -->
      <div class="mkm-valeurs__intro">

        <div class="mkm-valeurs__intro-copy">

          <p class="mkm-valeurs__eyebrow">
            Nos valeurs
          </p>

          <h2 id="titre-valeurs">
            Les principes qui nous définissent.
          </h2>

          <p class="mkm-valeurs__lead">
            Cinq engagements qui orientent nos décisions,
            renforcent nos relations et guident chacune
            de nos interventions.
          </p>

        </div>

        <!-- Déclaration institutionnelle -->
        <p class="mkm-valeurs__declaration">
          La confiance se construit par la qualité
          de nos actions et la constance
          de nos engagements.
        </p>

      </div>

      <!-- Liste des cinq valeurs -->
      <ul class="mkm-valeurs__liste">

        <li
          v-for="item in valeurs"
          :key="item.title"
          class="mkm-valeurs__item"
        >

          <span class="mkm-valeurs__icone">
            <MkmIcon
              :name="item.icon"
              size="small"
            />
          </span>

          <div class="mkm-valeurs__contenu">

            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.text }}
            </p>

          </div>

        </li>

      </ul>

    </div>

  </div>
</section>


    <section class="mkm-section mkm-section--divided" aria-labelledby="titre-accompagnement">
      <div class="mkm-container">
        <h2 id="titre-accompagnement">Notre manière de vous accompagner</h2>
        <p class="mkm-groupe__parcours-lead">Du premier échange au bilan, une démarche claire pour faire avancer votre projet.</p>
        <ol class="mkm-groupe__etapes">
          <li v-for="(item, index) in etapes" :key="item.title">
            <span class="mkm-groupe__numero">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="mkm-section mkm-groupe__cta-section" aria-labelledby="titre-projet">
      <div class="mkm-container mkm-groupe__cta">
        <div class="mkm-groupe__cta-copy">
          <h2 id="titre-projet">Parlons de votre projet</h2>
          <p>Vous recherchez un équipement, un service ou un accompagnement pour concrétiser votre projet ? Présentez-nous votre besoin afin d’étudier ensemble une réponse adaptée.</p>
          
<div class="mkm-actions">
  <a
    :href="contacts.whatsappHref"
    class="mkm-btn mkm-btn--whatsapp mkm-groupe__cta-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous contacter sur WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41ZM12.05 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>

    <span>Nous contacter</span>
  </a>
</div>

        </div>
        <img
          class="mkm-groupe__cta-media"
          :src="imageCollaboration"
          alt="Deux personnes échangent autour des plans d’un projet."
        >
      </div>
    </section>
  </article>
</template>
