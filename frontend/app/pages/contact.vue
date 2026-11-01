
<script setup lang="ts">
import {
  Headset,
  ShieldCheck,
  UsersRound,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  House,
  ChevronRight
} from '@lucide/vue'

import { contacts } from '~/data/site'
import contactHero from '~/assets/image/contact-hero.png'

useSeoMeta({
  title: 'Contactez-nous | Groupe MKM',
  description:
    'Contactez le Groupe MKM à Kinshasa par téléphone, WhatsApp ou e-mail. Notre équipe vous accompagne dans vos projets.'
})

const route = useRoute()

// Conserver le sujet provenant éventuellement d'une autre page
const emailContact = computed(() => {
  const sujet = route.query.sujet
  return typeof sujet === 'string' && sujet.trim()
    ? `mailto:${contacts.email}?subject=${encodeURIComponent(sujet)}`
    : contacts.emailHref
})

// Adresse figurant dans le footer du projet
const adresse = [
  'GB avenue Yembelete, numéro 25',
  'Immeuble Claudia Sasu',
  'Kinshasa, RDC'
]

// Localisation
const adresseRecherche = encodeURIComponent(adresse.join(', '))
const carteUrl =
  `https://maps.google.com/maps?q=${adresseRecherche}&z=15&output=embed`

const itineraireUrl =
  `https://www.google.com/maps/search/?api=1&query=${adresseRecherche}`

// Engagements sous le hero
const engagements = [
  {
    titre: 'Réponse rapide',
    description: 'À votre écoute',
    icon: Headset
  },
  {
    titre: 'Confidentialité',
    description: 'Discrétion de nos échanges',
    icon: ShieldCheck
  },
  {
    titre: 'Accompagnement',
    description: 'Personnalisé',
    icon: UsersRound
  },
  {
    titre: 'Expertise',
    description: 'Multisectorielle',
    icon: Award
  }
]

// Réseaux sociaux connus
const reseaux = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/share/1F6rUnoHnH/?mibextid=wwXIfr'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/groupemkmrdc'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/groupe-mkm/'
  }
]
</script>

<template>
  <div class="mkm-page-contact">

    <!-- FIL D'ARIANE -->
    <nav class="mkm-contact-fil" aria-label="Fil d'Ariane">
      <div class="mkm-container mkm-contact-fil__inner">
        <NuxtLink to="/">
          <House :size="15" aria-hidden="true" />
          Accueil
        </NuxtLink>

        <ChevronRight :size="14" aria-hidden="true" />

        <span aria-current="page">Contact</span>
      </div>
    </nav>

    <!-- HERO -->
    <section
      class="mkm-contact-hero"
      aria-labelledby="contact-titre"
      :style="{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(7, 10, 14, .97) 0%,
            rgba(7, 10, 14, .88) 25%,
            rgba(7, 10, 14, .58) 43%,
            rgba(7, 10, 14, .08) 72%
          ),
          url('${contactHero}')
        `
      }"
    >
      <div class="mkm-container mkm-contact-hero__inner">
        <div class="mkm-contact-hero__contenu">

          <span class="mkm-contact-hero__tag">
            Contact
          </span>

          <h1 id="contact-titre">
            Contactez<br>
            <span>Groupe MKM</span>
          </h1>

          <p>
            Notre équipe est à votre écoute pour répondre
            à vos questions, vous accompagner et vous proposer
            les meilleures solutions adaptées à vos besoins.
          </p>

          <span
            class="mkm-contact-hero__ligne"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>

    <!-- LES 4 ENGAGEMENTS -->
    <section
      class="mkm-contact-engagements"
      aria-label="Nos engagements envers vous"
    >
      <div class="mkm-container mkm-contact-engagements__grille">

        <div
          v-for="engagement in engagements"
          :key="engagement.titre"
          class="mkm-contact-engagement"
        >
          <component
            :is="engagement.icon"
            :size="40"
            :stroke-width="1.7"
            aria-hidden="true"
          />

          <h2>{{ engagement.titre }}</h2>
          <p>{{ engagement.description }}</p>
        </div>

      </div>
    </section>

    <!-- COORDONNÉES ET LOCALISATION -->
    <section class="mkm-contact-informations">
      <div class="mkm-container">

        <div class="mkm-contact-informations__grille">

          <!-- COORDONNÉES -->
          <section
            class="mkm-contact-carte"
            aria-labelledby="contact-coordonnees"
          >
            <h2 id="contact-coordonnees">
              Nos coordonnées
            </h2>

            <span class="mkm-contact-souligne" />

            <div class="mkm-contact-coordonnees">

              <!-- Téléphone -->
              <div class="mkm-contact-detail">
                <div class="mkm-contact-detail__icone">
                  <Phone :size="27" :stroke-width="1.9" />
                </div>

                <div>
                  <h3>Téléphone</h3>
                  <a :href="contacts.phoneHref">
                    {{ contacts.phoneLabel }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="mkm-contact-detail">
                <div class="mkm-contact-detail__icone">
                  <Mail :size="27" :stroke-width="1.9" />
                </div>

                <div>
                  <h3>E-mail</h3>
                  <a :href="emailContact">
                    {{ contacts.email }}
                  </a>
                </div>
              </div>

              <!-- Adresse -->
              <div class="mkm-contact-detail">
                <div class="mkm-contact-detail__icone">
                  <MapPin :size="27" :stroke-width="1.9" />
                </div>

                <div>
                  <h3>Adresse</h3>
                  <address>
                    <span
                      v-for="ligne in adresse"
                      :key="ligne"
                    >
                      {{ ligne }}
                    </span>
                  </address>
                </div>
              </div>

              <!-- Horaires -->
              <div class="mkm-contact-detail">
                <div class="mkm-contact-detail__icone">
                  <Clock3 :size="27" :stroke-width="1.9" />
                </div>

                <div>
                  <h3>Horaires d'ouverture</h3>
                  <p>Lundi – Vendredi : 08h00 – 17h00</p>
                  <p>Samedi : 08h00 – 13h00</p>
                </div>
              </div>

            </div>

            <!-- Réseaux sociaux -->
            <div class="mkm-contact-reseaux">
              <a
                v-for="reseau in reseaux"
                :key="reseau.label"
                :href="reseau.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ reseau.label }}
                <ExternalLink
                  :size="13"
                  aria-hidden="true"
                />
              </a>
            </div>

          </section>

          <!-- LOCALISATION -->
          <section
            class="mkm-contact-carte mkm-contact-localisation"
            aria-labelledby="contact-localisation"
          >
            <div class="mkm-contact-localisation__entete">
              <div>
                <h2 id="contact-localisation">
                  Notre localisation
                </h2>
                <span class="mkm-contact-souligne" />
              </div>

              <a
                :href="itineraireUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consulter l'adresse sur Google Maps"
              >
                <ExternalLink
                  :size="20"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div class="mkm-contact-localisation__carte">

              <iframe
                :src="carteUrl"
                title="Localisation du Groupe MKM à Kinshasa"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              />

              <div class="mkm-contact-localisation__adresse">
                <MapPin
                  :size="31"
                  :stroke-width="2"
                  aria-hidden="true"
                />

                <div>
                  <strong>Groupe MKM</strong>
                  <p v-for="ligne in adresse" :key="ligne">
                    {{ ligne }}
                  </p>
                </div>
              </div>

            </div>

          </section>

        </div>
      </div>
    </section>

    <!-- ASSISTANCE -->
    <section
      class="mkm-contact-assistance"
      aria-labelledby="contact-assistance-titre"
    >
      <div class="mkm-container">

        <div class="mkm-contact-assistance__entete">
          <h2 id="contact-assistance-titre">
            Besoin d'une assistance ?
          </h2>

          <span class="mkm-contact-souligne" />
        </div>

        <div class="mkm-contact-assistance__grille">

          <!-- WhatsApp -->
          <article class="mkm-contact-assistance__carte">
            <div class="mkm-contact-assistance__icone">
              <MessageCircle
                :size="35"
                :stroke-width="1.8"
              />
            </div>

            <h3>Échanger sur WhatsApp</h3>

            <p>
              Contactez-nous directement pour une
              réponse rapide à vos questions.
            </p>

            
<a
  :href="contacts.whatsappHref"
  class="mkm-btn mkm-btn--whatsapp mkm-contact-btn-whatsapp"
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

          </article>

          <!-- Appel -->
          <article class="mkm-contact-assistance__carte">
            <div class="mkm-contact-assistance__icone">
              <Phone
                :size="34"
                :stroke-width="1.8"
              />
            </div>

            <h3>Nous appeler</h3>

            <p>
              Parlez directement avec un membre
              de notre équipe pour discuter de vos besoins.
            </p>

            <a
              :href="contacts.phoneHref"
              class="mkm-contact-bouton mkm-contact-bouton--contour"
            >
              {{ contacts.phoneLabel }}
              <ArrowRight :size="18" />
            </a>
          </article>

          <!-- Email -->
          <article class="mkm-contact-assistance__carte">
            <div class="mkm-contact-assistance__icone">
              <Mail
                :size="35"
                :stroke-width="1.8"
              />
            </div>

            <h3>Nous écrire</h3>

            <p>
              Posez vos questions par e-mail
              et notre équipe pourra vous répondre.
            </p>

            <a
              :href="emailContact"
              class="mkm-contact-bouton mkm-contact-bouton--contour"
            >
              Envoyer un e-mail
              <ArrowRight :size="18" />
            </a>
          </article>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* =========================================
   CONTACT — CHARTE GROUPE MKM
========================================= */

.mkm-page-contact {
  --contact-or: #c9942e;
  --contact-or-clair: #e2ae45;
  --contact-texte: #151515;
  --contact-secondaire: #606670;

  background: #fff;
  color: var(--contact-texte);
}

/* FIL D'ARIANE */

.mkm-contact-fil {
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}

.mkm-contact-fil__inner {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 40px;
  font-size: 0.82rem;
}

.mkm-contact-fil a {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #4b5260;
  text-decoration: none;
}

.mkm-contact-fil a:hover,
.mkm-contact-fil [aria-current] {
  color: var(--contact-or);
}

/* =========================================
   HERO
========================================= */

.mkm-contact-hero {
  display: flex;
  align-items: center;
  min-height: clamp(340px, 34vw, 480px);

  background-color: #101820;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  color: #fff;
}

.mkm-contact-hero__inner {
  width: 100%;
  padding-block: clamp(3rem, 5vw, 5rem);
}

.mkm-contact-hero__contenu {
  max-width: 520px;
}

.mkm-contact-hero__tag {
  display: inline-block;
  padding: 0.4rem 1.1rem;
  margin-bottom: 1rem;
  border-radius: 30px;

  background: rgba(180, 132, 40, 0.52);
  color: #fff;

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.mkm-contact-hero h1 {
  margin: 0 0 1.2rem;
  color: #fff;
  font-size: clamp(2.7rem, 4.4vw, 4.8rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.mkm-contact-hero h1 span {
  color: var(--contact-or-clair);
}

.mkm-contact-hero p {
  max-width: 480px;
  margin: 0;
  color: #fff;
  font-size: 1.05rem;
  line-height: 1.75;
}

.mkm-contact-hero__ligne {
  display: block;
  width: 55px;
  height: 3px;
  margin-top: 1.5rem;
  background: var(--contact-or-clair);
}

/* =========================================
   ENGAGEMENTS
========================================= */

.mkm-contact-engagements {
  padding: 1.8rem 0;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.mkm-contact-engagements__grille {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.mkm-contact-engagement {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  text-align: center;
}

.mkm-contact-engagement:not(:last-child) {
  border-right: 1px solid #e3e3e3;
}

.mkm-contact-engagement svg {
  color: var(--contact-or);
  margin-bottom: 0.3rem;
}

.mkm-contact-engagement h2 {
  margin: 0;
  color: #181818;
  font-size: 0.9rem;
  font-weight: 750;
  line-height: 1.3;
  text-transform: uppercase;
}

.mkm-contact-engagement p {
  margin: 0;
  color: #515151;
  font-size: 0.87rem;
}

/* =========================================
   COORDONNÉES ET CARTE
========================================= */

.mkm-contact-informations {
  padding: 2.5rem 0 1.5rem;
}

.mkm-contact-informations__grille {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 1.4rem;
  align-items: stretch;
}

.mkm-contact-carte {
  min-width: 0;
  padding: clamp(1.25rem, 2vw, 2rem);

  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 12px;

  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.025);
}

.mkm-contact-carte h2,
.mkm-contact-assistance__entete h2 {
  margin: 0;
  color: #181818;
  font-size: clamp(1.3rem, 1.8vw, 1.7rem);
  font-weight: 800;
  text-transform: uppercase;
}

.mkm-contact-souligne {
  display: block;
  width: 48px;
  height: 3px;
  margin: 0.8rem 0 1.5rem;
  background: var(--contact-or);
}

/* Liste des coordonnées */

.mkm-contact-coordonnees {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mkm-contact-detail {
  display: flex;
  align-items: flex-start;
  gap: 1.15rem;
}

.mkm-contact-detail__icone {
  display: flex;
  flex: 0 0 62px;
  align-items: center;
  justify-content: center;

  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #faf4e8;
  color: var(--contact-or);
}

.mkm-contact-detail h3 {
  margin: 0 0 0.35rem;
  color: #1b1b1b;
  font-size: 0.9rem;
  font-weight: 750;
  text-transform: uppercase;
}

.mkm-contact-detail a,
.mkm-contact-detail p,
.mkm-contact-detail address {
  display: block;
  margin: 0;
  color: #525866;
  font-size: 0.91rem;
  line-height: 1.65;
  font-style: normal;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.mkm-contact-detail a:hover {
  color: var(--contact-or);
}

.mkm-contact-detail address span {
  display: block;
}

/* Réseaux sociaux */

.mkm-contact-reseaux {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.8rem;
  padding-top: 1.25rem;
  border-top: 1px solid #ececec;
}

.mkm-contact-reseaux a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  padding: 0.45rem 0.8rem;
  border: 1px solid #e9d7b5;
  border-radius: 30px;

  color: #91671d;
  font-size: 0.78rem;
  font-weight: 650;
  text-decoration: none;

  transition: background .2s, color .2s;
}

.mkm-contact-reseaux a:hover {
  background: var(--contact-or);
  color: #fff;
}

/* Localisation */

.mkm-contact-localisation {
  display: flex;
  flex-direction: column;
}

.mkm-contact-localisation__entete {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.mkm-contact-localisation__entete > a {
  color: var(--contact-or);
}

.mkm-contact-localisation__carte {
  position: relative;
  flex: 1;
  min-height: 400px;
  overflow: hidden;
  border-radius: 8px;
  background: #edf0f2;
}

.mkm-contact-localisation__carte iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: 0;
}

.mkm-contact-localisation__adresse {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;

  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  width: min(310px, calc(100% - 30px));
  padding: 1rem;

  transform: translateX(-50%);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 5px 22px rgba(0, 0, 0, .14);
  pointer-events: none;
}

.mkm-contact-localisation__adresse svg {
  flex-shrink: 0;
  color: var(--contact-or);
}

.mkm-contact-localisation__adresse strong {
  color: #1b1b1b;
  font-size: 0.82rem;
  text-transform: uppercase;
}

.mkm-contact-localisation__adresse p {
  margin: 0.2rem 0 0;
  color: #535353;
  font-size: 0.76rem;
  line-height: 1.4;
}

/* =========================================
   ASSISTANCE
========================================= */

.mkm-contact-assistance {
  padding: 0.8rem 0 3.5rem;
}

.mkm-contact-assistance__entete {
  margin-bottom: 1.2rem;
}

.mkm-contact-assistance__entete
.mkm-contact-souligne {
  margin-bottom: 0;
}

.mkm-contact-assistance__grille {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.mkm-contact-assistance__carte {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  padding: 1.5rem;
  text-align: center;

  background: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 12px;
}

.mkm-contact-assistance__icone {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;
  margin-bottom: 1rem;

  border-radius: 50%;
  color: var(--contact-or);
  background: #faf4e8;
}

.mkm-contact-assistance__carte h3 {
  margin: 0 0 0.55rem;
  color: #161616;
  font-size: 1.12rem;
  font-weight: 750;
}

.mkm-contact-assistance__carte p {
  max-width: 300px;
  margin: 0 auto 1.4rem;
  color: var(--contact-secondaire);
  font-size: 0.92rem;
  line-height: 1.6;
}

.mkm-contact-bouton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;

  min-height: 43px;
  max-width: 100%;
  padding: 0.7rem 1rem;
  margin-top: auto;

  border: 1px solid var(--contact-or);
  border-radius: 40px;

  font-size: 0.87rem;
  font-weight: 750;
  text-decoration: none;
  text-align: center;

  transition: transform .2s, background .2s;
}

.mkm-contact-bouton:hover {
  transform: translateY(-2px);
}

.mkm-contact-bouton--or {
  background: linear-gradient(120deg, #dca73c, #e3b44e);
  color: #161616;
}

.mkm-contact-bouton--contour {
  background: #fff;
  color: #a4701e;
}

.mkm-contact-bouton--contour:hover {
  background: #faf4e8;
  color: #855614;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 950px) {
  .mkm-contact-informations__grille {
    grid-template-columns: 1fr;
  }

  .mkm-contact-localisation__carte {
    min-height: 350px;
  }

  .mkm-contact-localisation__carte iframe {
    min-height: 350px;
  }
}

@media (max-width: 700px) {
  .mkm-contact-hero {
    min-height: 420px;
    background-position: 64% center;
  }

  .mkm-contact-hero__contenu {
    max-width: 440px;
  }

  .mkm-contact-hero h1 {
    font-size: clamp(2.3rem, 8vw, 3.3rem);
  }

  .mkm-contact-engagements__grille {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1.3rem;
  }

  .mkm-contact-engagement:nth-child(2) {
    border-right: none;
  }

  .mkm-contact-engagement:nth-child(-n+2) {
    padding-bottom: 1.2rem;
    border-bottom: 1px solid #e3e3e3;
  }

  .mkm-contact-assistance__grille {
    grid-template-columns: 1fr;
  }

  .mkm-contact-assistance__carte {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .mkm-contact-hero {
    min-height: 440px;
    background-position: 70% center;
  }

  .mkm-contact-hero p {
    font-size: 0.94rem;
  }

  .mkm-contact-engagement {
    padding-inline: 0.45rem;
  }

  .mkm-contact-engagement svg {
    width: 34px;
    height: 34px;
  }

  .mkm-contact-engagement h2 {
    font-size: 0.8rem;
  }

  .mkm-contact-engagement p {
    font-size: 0.75rem;
  }

  .mkm-contact-carte {
    padding: 1.1rem;
  }

  .mkm-contact-detail__icone {
    flex-basis: 50px;
    width: 50px;
    height: 50px;
  }

  .mkm-contact-localisation__carte,
  .mkm-contact-localisation__carte iframe {
    min-height: 320px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mkm-contact-bouton,
  .mkm-contact-reseaux a {
    transition: none;
  }
}
</style>
