<script setup lang="ts">
import { contacts } from '~/data/site'
import { findEngin } from '~/data/engins'

const route = useRoute()
const slug = computed(() => String(route.params.engin ?? ''))
const engin = computed(() => findEngin(slug.value))


if (!engin.value) {
  throw createError({ statusCode: 404, statusMessage: 'Engin introuvable' })
}

useSeoMeta({
  title: () => engin.value ? `${engin.value.name} · Groupe MKM` : 'Engin introuvable · Groupe MKM',
  description: () => engin.value?.role ?? ''
})


</script>

<template>
  <section v-if="engin" class="mkm-section mkm-engin-fiche" aria-labelledby="titre-fiche-engin">
    <div class="mkm-container">
      <NuxtLink to="/services/location-engins" class="mkm-engin-fiche__retour">Location d’engins</NuxtLink>
      <div class="mkm-engin-fiche__intro">
        <img :src="engin.image" :alt="engin.alt">
        <div>
          <h1 id="titre-fiche-engin">{{ engin.name }}</h1>
          <p>{{ engin.role }}</p>
          <ul class="mkm-engin-fiche__apercus">
            <li v-for="item in engin.specs" :key="item.label">
              <MkmIcon :name="item.icon" />
              <span>{{ item.label }}</span>
            </li>
          </ul>
          <h2>Travaux adaptés</h2>
          <ul class="mkm-engin-fiche__travaux">
            <li v-for="item in engin.works" :key="item">{{ item }}</li>
          </ul>
          <div class="mkm-actions">
            
<a
  :href="contacts.whatsappHref"
  class="mkm-btn mkm-btn--whatsapp mkm-engin-fiche__whatsapp"
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
    <path d="M16.7 13.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35ZM12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41A11.82 11.82 0 0 0 12.04 0Zm.01 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Z"/>
  </svg>
  <span>Nous contacter</span>
</a>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="engin" class="mkm-section mkm-section--divided mkm-engin-fiche" aria-labelledby="titre-caracteristiques-engin">
    <div class="mkm-container mkm-engin-fiche__bilan">
      <div>
        <h2 id="titre-caracteristiques-engin">Caractéristiques</h2>
        <div class="mkm-engin-fiche__tableau">
          <table>
            <thead>
              <tr>
                <th scope="col">Caractéristique</th>
                <th scope="col">Valeur</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in engin.sheet" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td>{{ row.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mkm-engin-fiche__note">{{ engin.note }}</p>
        <p v-if="engin.sourceUrl" class="mkm-engin-fiche__source">
          Source :
          <a :href="engin.sourceUrl" rel="noopener noreferrer" target="_blank">{{ engin.sourceName }}</a>
        </p>
        <p v-else class="mkm-engin-fiche__source">Source : {{ engin.sourceName }}</p>
      </div>
    </div>
  </section>
</template>
