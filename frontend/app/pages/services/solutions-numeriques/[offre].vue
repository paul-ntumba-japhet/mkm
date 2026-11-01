<script setup lang="ts">
import { offreNumerique } from '~/data/offres-numeriques'

const route = useRoute()
const slug = Array.isArray(route.params.offre) ? route.params.offre[0] : route.params.offre
const offre = offreNumerique(String(slug || ''))

if (!offre) {
  throw createError({ statusCode: 404, statusMessage: 'Service introuvable' })
}

const devis = `/devis?service=${offre.slug}`

useSeoMeta({
  title: () => `${offre.seoTitle} | Groupe MKM`,
  description: () => offre.seoDescription
})
</script>

<template>
  <article class="mkm-num-offre">
    <section class="mkm-num-offre-hero" :aria-labelledby="`titre-${offre.slug}`">
      <div class="mkm-container">
        <nav class="mkm-num-offre__fil" aria-label="Fil d’Ariane">
          <NuxtLink to="/">Accueil</NuxtLink>
          <span aria-hidden="true">→</span>
          <NuxtLink to="/services/solutions-numeriques">Solutions numériques</NuxtLink>
          <span aria-hidden="true">→</span>
          <span>{{ offre.title }}</span>
        </nav>
        <div class="mkm-num-offre-hero__grille">
          <div class="mkm-num-offre-hero__copy">
            <h1 :id="`titre-${offre.slug}`">{{ offre.title }}</h1>
            <p class="mkm-num-offre-hero__kicker">{{ offre.kicker }}</p>
            <p class="mkm-num-offre-hero__intro">{{ offre.intro }}</p>
            <div class="mkm-actions">
              <NuxtLink :to="devis" class="mkm-btn mkm-btn--primary">{{ offre.cta }}</NuxtLink>
            </div>
            <p class="mkm-num-offre__retour">
              <NuxtLink to="/services/solutions-numeriques#titre-cartes-numeriques">Retour aux expertises</NuxtLink>
            </p>
          </div>
          <img class="mkm-num-offre__photo" :src="offre.image" :alt="offre.imageAlt">
        </div>
      </div>
    </section>

    <section class="mkm-section mkm-num-offre-prestas" :aria-labelledby="`prestations-${offre.slug}`">
      <div class="mkm-container">
        <h2 :id="`prestations-${offre.slug}`">{{ offre.prestationsTitre }}</h2>
        <div class="mkm-num-offre-prestas__grille">
          <article v-for="item in offre.prestations" :key="item.title" class="mkm-num-offre-presta">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mkm-section" :aria-labelledby="`parcours-${offre.slug}`">
      <div class="mkm-container mkm-num-offre-parcours">
        <h2 :id="`parcours-${offre.slug}`">{{ offre.parcoursTitre }}</h2>
        <p v-for="(paragraphe, index) in offre.livrables" :key="index" class="mkm-num-offre-livrables">{{ paragraphe }}</p>
        <ol class="mkm-num-offre-etapes">
          <li v-for="etape in offre.etapes" :key="etape.title">
            <p class="mkm-num-offre-etapes__titre">{{ etape.title }}</p>
            <p>{{ etape.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="mkm-num-offre-contact" aria-labelledby="contact-offre">
      <div class="mkm-container mkm-num-offre-parcours">
        <h2 id="contact-offre">{{ offre.contactTitre }}</h2>
        <p>{{ offre.contactTexte }}</p>
        <NuxtLink :to="devis" class="mkm-btn mkm-btn--gold">{{ offre.contactCta }}</NuxtLink>
      </div>
    </section>
  </article>
</template>
