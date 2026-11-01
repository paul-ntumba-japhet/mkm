<script setup lang="ts">
import logo from '~/assets/brand/logo-blanc.png'
import { contacts, services } from '~/data/site'

const year = new Date().getFullYear()

const footerServices = services.filter(
  service => !['evenementiel', 'commerce-general'].includes(service.slug)
)

const tiktokUrl = 'https://www.tiktok.com/@nom_officiel'

const quickLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/le-groupe', label: 'À propos' },
  { to: '/realisations', label: 'Nos réalisations' },
  { to: '/realisations', label: 'Nos projets' }
]

const address = [
  'GB avenue Yembelete',
  'Numéro 25, Immeuble Claudia Sasu',
  'Kinshasa, RDC'
]

</script>

<template>
  <footer class="mkm-footer">
    <div class="mkm-container mkm-footer__grid">
      <div class="mkm-footer__brand">
        <NuxtLink to="/" class="mkm-footer__logo">
          <img :src="logo" alt="Groupe MKM" width="1774" height="887">
        </NuxtLink>
        <p class="mkm-footer__text">
          Un groupe multisectoriel engagé à vous fournir des solutions innovantes et adaptées à vos besoins.
        </p>
        <ul class="mkm-footer__social">
          <li>
            <a class="mkm-footer__social-link" href="https://www.facebook.com/share/1F6rUnoHnH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Visiter la page Facebook du Groupe MKM">
              <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#1877F2" /><path fill="#fff" d="M13.4 19v-6.1h2l.3-2.3h-2.3V9.2c0-.7.2-1.1 1.2-1.1h1.3V6.1c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.3H9v2.3h2.1V19h2.3z" /></svg>
            </a>
          </li>
          <li>
            <a class="mkm-footer__social-link" href="https://www.instagram.com/groupemkmrdc?rpxt=NnR0NXQzamJhaHdu&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Visiter la page Instagram du Groupe MKM">
              <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true"><defs><radialGradient id="mkm-ig" cx="30%" cy="107%" r="130%"><stop offset="0%" stop-color="#feda75" /><stop offset="25%" stop-color="#fa7e1e" /><stop offset="50%" stop-color="#d62976" /><stop offset="75%" stop-color="#962fbf" /><stop offset="100%" stop-color="#4f5bd5" /></radialGradient></defs><rect width="24" height="24" rx="5" fill="url(#mkm-ig)" /><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" stroke-width="1.6" /><circle cx="12" cy="12" r="2.5" fill="none" stroke="#fff" stroke-width="1.6" /><circle cx="16.3" cy="7.7" r=".9" fill="#fff" /></svg>
            </a>
          </li>
          <li>
            <a class="mkm-footer__social-link" href="https://www.linkedin.com/company/groupe-mkm/" target="_blank" rel="noopener noreferrer" aria-label="Visiter la page LinkedIn du Groupe MKM">
              <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#0A66C2" /><path fill="#fff" d="M6.7 9.5H4.6v8.7h2.1V9.5zM5.6 5.2a1.25 1.25 0 1 0 .02 2.5 1.25 1.25 0 0 0-.02-2.5zM19.4 18.2h-2.1v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.1V9.5h2v1.2h.1c.3-.5 1-1.2 2.1-1.2 2.3 0 2.7 1.5 2.7 3.5v5.2z" /></svg>
            </a>
          </li>

          
<!-- TikTok -->
<li>
  <a
    v-if="tiktokUrl"
    class="mkm-footer__social-link"
    :href="tiktokUrl"
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
            <a href="https://www.tiktok.com/@groupe.mkm.rdc?_r=1&_t=ZS-9An60NGHUCT" target="_blank" rel="noopener noreferrer" aria-label="Visiter la page TikTok du Groupe MKM">

            <span
              class="mkm-footer__social-link"
              role="img"
              aria-label="TikTok"
            >
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                aria-hidden="true"
              >
                <rect width="24" height="24" rx="5" fill="#111111" />
                <path
                  fill="#25F4EE"
                  d="M15.5 4h2.2c.2 2 1.4 3.3 3.3 3.5v2.2c-1.4 0-2.6-.4-3.5-1.2v6.4a5.5 5.5 0 1 1-5.5-5.5v2.7a2.8 2.8 0 1 0 2.8 2.8V4z"
                />
                <path
                  fill="#FE2C55"
                  d="M16 4h2.2c.2 2 1.4 3.3 3.3 3.5v2.2c-1.4 0-2.6-.4-3.5-1.2v6.4a5.5 5.5 0 1 1-5.5-5.5v2.7a2.8 2.8 0 1 0 2.8 2.8V4z"
                />
                <path
                  fill="#FFFFFF"
                  d="M15.8 4H18c.2 2 1.4 3.3 3.3 3.5v2.2c-1.4 0-2.6-.4-3.5-1.2v6.4a5.5 5.5 0 1 1-5.5-5.5v2.7a2.8 2.8 0 1 0 2.8 2.8V4z"
                />
              </svg>

            </span>
          </a>
              
          </li>

        </ul>
      </div>

      <div>
        <h2 class="mkm-footer__title">Liens rapides</h2>
        <ul class="mkm-footer__links">
          <li v-for="item in quickLinks" :key="item.label">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="mkm-footer__title">Nos services</h2>
        <ul class="mkm-footer__links mkm-footer__services">
          <li v-for="service in footerServices" :key="service.slug">
            <NuxtLink :to="`/services/${service.slug}`">{{ service.title }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="mkm-footer__title">Nous contacter</h2>
        <ul class="mkm-footer__contact">
          <li>
            <a :href="contacts.phoneHref">
              <MkmIcon name="phone" size="small" />
              <span>{{ contacts.phoneLabel }}</span>
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
      <nav aria-label="Informations légales">
        <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
        <span aria-hidden="true">|</span>
        <NuxtLink to="/confidentialite">Politique de confidentialité</NuxtLink>
      </nav>
    </div>
  </footer>
</template>