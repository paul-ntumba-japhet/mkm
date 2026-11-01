<script setup lang="ts">
import { chiffres, expertises, realisationsAccueil } from '~/data/site'


/* Animation des statistiques */

const statsSection = ref<HTMLElement | null>(null)

const valeursAnimees = ref(
  chiffres.map(item => item.value)
)

let observer: IntersectionObserver | null = null
let animationId: number | null = null
let animationLancee = false

function animerStatistiques() {
  if (animationLancee) return
  animationLancee = true

  // Respecter les préférences d'accessibilité
  if (window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches) {
    return
  }

  const duree = 1500
  const debut = performance.now()

  function animer(temps: number) {
    const progression = Math.min(
      (temps - debut) / duree,
      1
    )

    // Accélération puis ralentissement
    const easing = 1 - Math.pow(
      1 - progression, 3
    )

    valeursAnimees.value = chiffres.map(item => {
      const resultat = item.value.match(
        /^([^0-9]*)(\d+)(.*)$/
      )

      if (!resultat) return item.value

      const prefixe = resultat[1]
      const valeur = Number(resultat[2])
      const suffixe = resultat[3]

      const nombre = Math.round(
        valeur * easing
      )

      return `${prefixe}${nombre}${suffixe}`
    })

    if (progression < 1) {
      animationId = requestAnimationFrame(animer)
    } else {
      valeursAnimees.value = chiffres.map(
        item => item.value
      )
    }
  }

  animationId = requestAnimationFrame(animer)
}

onMounted(() => {
  if (!statsSection.value) return

  if (!('IntersectionObserver' in window)) {
    animerStatistiques()
    return
  }

  observer = new IntersectionObserver(
    (entrees) => {
      if (entrees[0]?.isIntersecting) {
        animerStatistiques()
        observer?.disconnect()
      }
    },
    {
      threshold: 0.2
    }
  )

  observer.observe(statsSection.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()

  if (animationId !== null) {
    cancelAnimationFrame(animationId)
  }
})


useSeoMeta({
  title: 'Accueil · Groupe MKM',
  description: 'Présentation du Groupe MKM à Kinshasa : six expertises et une sélection de réalisations.'
})
</script>

<template>
  
<!-- ======================================
     ACCUEIL — NOS EXPERTISES
====================================== -->

<section
  class="mkm-section mkm-section--divided mkm-expertises"
  aria-labelledby="titre-services"
>
  <div class="mkm-container">

    <!-- En-tête -->
    <header class="mkm-section__head">
      <div>
        <p class="mkm-eyebrow mkm-eyebrow--rule">
          Nos expertises
        </p>

        <h2 id="titre-services">
          Six expertises au service de vos projets
        </h2>

        <p class="mkm-lead mkm-muted">
          Des solutions complémentaires pour vos chantiers,
          vos activités et votre développement.
        </p>
      </div>
    </header>

    <!-- Grille des six cartes -->
    <ul class="mkm-grid mkm-grid--expertises">

      <li
        v-for="expertise in expertises"
        :key="expertise.slug"
      >
        <NuxtLink
          :to="`/services/${expertise.slug}`"
          class="mkm-card mkm-card--interactive"
        >

          <!-- Pictogramme linéaire -->
          
          <img
            class="mkm-card__illustration"
            :src="expertise.illustration"
            alt=""
            width="1254"
            height="1254"
            loading="lazy"
          />


          <!-- Titre -->
          <h3 class="mkm-card__title">
            {{ expertise.title }}
          </h3>

          <!-- Description -->
          <p class="mkm-card__description">
            {{ expertise.description }}
          </p>

          <!-- Lien -->
          <span class="mkm-card__link">
            {{ expertise.link }}
            <MkmIcon
              name="arrow-right"
              size="small"
            />
          </span>

        </NuxtLink>
      </li>

    </ul>

  </div>
</section>


 
<!-- ACCUEIL — NOS RÉALISATIONS -->

<section
  class="mkm-section mkm-section--divided mkm-realisations"
  aria-labelledby="titre-realisations"
>
  <div class="mkm-container">

    <!-- En-tête -->
    <header class="mkm-section__head mkm-realisations__head">
      <div>
        <p class="mkm-eyebrow mkm-eyebrow--rule">
          Nos réalisations
        </p>

        <h2 id="titre-realisations">
          Des projets concrets, une expertise sur le terrain.
        </h2>

        <p class="mkm-lead mkm-muted">
          Découvrez notre sélection de photographies
          et d'interventions sur le terrain.
        </p>
      </div>

      <NuxtLink
        to="/realisations"
        class="mkm-btn mkm-btn--secondary"
      >
        Toutes nos réalisations
        <MkmIcon name="arrow-right" size="small" />
      </NuxtLink>
    </header>

    <!-- Galerie asymétrique -->
    <ul class="mkm-showcase">
      <li
        v-for="item in realisationsAccueil"
        :key="item.title"
        :class="{
          'mkm-showcase__item--lead': item.lead
        }"
      >
        <NuxtLink
          to="/realisations"
          class="mkm-showcase__card"
          :aria-label="`${item.link} — ${item.title}`"
        >
          <!-- Photographie -->
          <img
            class="mkm-showcase__media"
            :src="item.image"
            :alt="item.alt"
            :width="item.width"
            :height="item.height"
            loading="lazy"
          />

          <!-- Contenu directement sur la photographie -->
          <div class="mkm-showcase__body">

            <p class="mkm-showcase__activity">
              {{ item.activity }}
            </p>

            <h3 class="mkm-showcase__title">
              {{ item.title }}
            </h3>

            <!-- Description réservée à la grande carte -->
            <p
              v-if="item.lead"
              class="mkm-showcase__text"
            >
              {{ item.description }}
            </p>

            <span class="mkm-showcase__link">
              {{ item.link }}
              <MkmIcon
                name="arrow-right"
                size="small"
              />
            </span>

          </div>
        </NuxtLink>
      </li>
    </ul>

  </div>
</section>


  <section class="mkm-section mkm-stats" aria-labelledby="titre-chiffres">
    
<section
  ref="statsSection"
  class="mkm-section mkm-stats"
  aria-labelledby="titre-chiffres"
>
  <div class="mkm-container">

    <p class="mkm-eyebrow mkm-eyebrow--rule">
      En chiffres
    </p>

    <h2 id="titre-chiffres">
      Une expertise qui se traduit en actions
    </h2>

    <ul class="mkm-stats__list">
      <li
        v-for="(item, index) in chiffres"
        :key="item.label"
      >
        <p
          class="mkm-stats__value"
          :aria-label="item.value"
        >
          {{ valeursAnimees[index] }}
        </p>

        <p class="mkm-stats__label">
          {{ item.label }}
        </p>
      </li>
    </ul>

  </div>
</section>

  </section>
</template>
