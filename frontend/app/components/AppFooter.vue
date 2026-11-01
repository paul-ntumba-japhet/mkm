<script setup lang="ts">
import logo from '~/assets/brand/logo-blanc.png'
import { contacts, expertises } from '~/data/site'

const year = new Date().getFullYear()

// Les six métiers et leurs routes proviennent de la liste officielle de l'accueil.
const footerServices = expertises.map(({ slug, title }) => ({
  to: `/services/${slug}`,
  label:
    slug === 'location-engins'
      ? 'Location d’engins et de camions'
      : slug === 'conseil'
        ? 'Conseil et accompagnement'
        : title
}))

// Pas de doublon « Nos projets » tant qu'une page dédiée n'existe pas.
const quickLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/le-groupe', label: 'Le groupe' },
  { to: '/realisations', label: 'Nos réalisations' }
]


const tiktok = 'https://www.tiktok.com/@groupe.mkm.rdc?_r=1&_t=ZS-9An60NGHUCT'

// Vérifier le libellé officiel de l'adresse avant publication.
const address = [
  'GB avenue Yembelete',
  'Numéro 25, Immeuble Claudia Sasu',
  'Kinshasa, RDC'
]

// Dans l'archive de référence, ces pages ne contiennent que des textes provisoires.
// Passer à true seulement après avoir publié des textes juridiques validés.
const legalPagesPublished = false
</script>

<template>
  <footer class="mkm-footer">
    <div class="mkm-container mkm-footer__grid">
      <!-- 1. Identité -->
      <div class="mkm-footer__brand">
        <NuxtLink to="/" class="mkm-footer__logo" aria-label="Groupe MKM — accueil">
          <img :src="logo" alt="Groupe MKM" width="1774" height="887">
        </NuxtLink>
        <p class="mkm-footer__text">
          Un groupe multisectoriel engagé à vous fournir des solutions innovantes
          et adaptées à vos besoins.
        </p>

        <ul class="mkm-footer__social" aria-label="Réseaux sociaux officiels">
          <li>
            <a
              class="mkm-footer__social-link"
              href="https://www.facebook.com/share/1F6rUnoHnH/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Groupe MKM sur Facebook (nouvel onglet)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M13.4 21v-8.1h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.6 0-4.3 1.6-4.3 4.5v1.9H7v3.1h2.9V21h3.5z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              class="mkm-footer__social-link"
              href="https://www.instagram.com/groupemkmrdc?rpxt=NnR0NXQzamJhaHdu&amp;utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Groupe MKM sur Instagram (nouvel onglet)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" stroke-width="2" />
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2" />
                <circle cx="17.7" cy="6.4" r="1.15" fill="currentColor" />
              </svg>
            </a>
          </li>
          
<!-- TikTok -->
<li>
  <a
    v-if="tiktok"
    class="mkm-footer__social-link"
    :href="tiktok"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Groupe MKM sur TikTok (nouvel onglet)"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.7 2h-3.3v13.4a3.5 3.5 0 1 1-3.4-3.5V8.6a6.8 6.8 0 1 0 6.7 6.8V8.4a8.9 8.9 0 0 0 5.3 1.7V6.8a5.6 5.6 0 0 1-5.3-4.8Z"
      />
    </svg>
  </a>

  <span
    v-else
    class="mkm-footer__social-link mkm-footer__social-link--inactive"
    role="img"
    aria-label="TikTok — lien à renseigner"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.7 2h-3.3v13.4a3.5 3.5 0 1 1-3.4-3.5V8.6a6.8 6.8 0 1 0 6.7 6.8V8.4a8.9 8.9 0 0 0 5.3 1.7V6.8a5.6 5.6 0 0 1-5.3-4.8Z"
      />
    </svg>
  </span>
</li>

          <li>
            <a
              class="mkm-footer__social-link"
              href="https://www.linkedin.com/company/groupe-mkm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Groupe MKM sur LinkedIn (nouvel onglet)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M5.2 8.6H2.7V21h2.5V8.6zM4 3A1.55 1.55 0 1 0 4 6.1 1.55 1.55 0 0 0 4 3zM21.3 21h-2.6v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21h-2.6V8.6h2.5v1.7h.1c.4-.7 1.3-2 2.9-2 3.1 0 4 2 4 4.8V21z" />
              </svg>
            </a>
          </li>
          <!-- Ajouter TikTok uniquement lorsque l'URL officielle aura été confirmée. -->
        </ul>
      </div>

      <!-- 2. Navigation -->
      <nav class="mkm-footer__column" aria-label="Navigation de pied de page">
        <h2 class="mkm-footer__title">Liens rapides</h2>
        <ul class="mkm-footer__links">
          <li v-for="item in quickLinks" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- 3. Expertises -->
      <nav class="mkm-footer__column" aria-label="Expertises du Groupe MKM">
        <h2 class="mkm-footer__title">Nos expertises</h2>
        <ul class="mkm-footer__links mkm-footer__services">
          <li v-for="service in footerServices" :key="service.to">
            <NuxtLink :to="service.to">{{ service.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- 4. Contacts directs -->
      <div class="mkm-footer__column">
        <h2 class="mkm-footer__title">Nous contacter</h2>
        <ul class="mkm-footer__contact">
          <li>
            <a :href="contacts.phoneHref">
              <MkmIcon name="phone" size="small" />
              <span>{{ contacts.phoneLabel }}</span>
            </a>
          </li>
          <li>
            <a :href="contacts.whatsappHref" target="_blank" rel="noopener noreferrer">
              <MkmIcon name="message" size="small" />
              <span>Échanger sur WhatsApp</span>
            </a>
          </li>
          <li>
            <a :href="contacts.emailHref">
              <MkmIcon name="mail" size="small" />
              <span>{{ contacts.email }}</span>
            </a>
          </li>
          <li>
            <p class="mkm-footer__address">
              <MkmIcon name="pin" size="small" />
              <span>
                <span v-for="line in address" :key="line">{{ line }}</span>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="mkm-container mkm-footer__legal">
      <p>© {{ year }} Groupe MKM. Tous droits réservés.</p>
      <nav v-if="legalPagesPublished" aria-label="Informations légales">
        <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
        <span aria-hidden="true">|</span>
        <NuxtLink to="/confidentialite">Politique de confidentialité</NuxtLink>
      </nav>
    </div>
  </footer>
</template>
