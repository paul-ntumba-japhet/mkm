<script setup lang="ts">
/**
 * Galerie des réalisations MKM.
 * Les fichiers doivent être placés dans :
 *   app/assets/image/realisations/travaux.jpeg
 *   app/assets/image/realisations/travaux2.jpeg
 *   ... travaux14.jpeg (extensions jpg, jpeg, png, webp ou avif admises).
 *
 * Les anciens fichiers realisation1.png et realisation2.png sont volontairement exclus.
 */
const fichiersTravaux = import.meta.glob(
  '../assets/image/realisations/travaux*.{jpg,jpeg,png,webp,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
) as Record<string, string>

const triNaturel = new Intl.Collator('fr', {
  numeric: true,
  sensitivity: 'base'
})

const photosTravaux = Object.entries(fichiersTravaux)
  .sort(([cheminA], [cheminB]) =>
    triNaturel.compare(
      cheminA.split('/').pop() ?? '',
      cheminB.split('/').pop() ?? ''
    )
  )
  .map(([chemin, src], index) => ({
    id: chemin,
    src,
    alt: `Photographie de travaux, vue ${index + 1}`
  }))

useSeoMeta({
  title: 'Nos réalisations · Groupe MKM',
  description: 'Découvrez en images une sélection de travaux et de réalisations présentés par le Groupe MKM.'
})


/* ==========================================
   VISIONNEUSE DES PHOTOGRAPHIES
========================================== */

const activePhotoIndex = ref<number | null>(null)

const activePhoto = computed(() => {
  if (activePhotoIndex.value === null) return null
  return photosTravaux[activePhotoIndex.value] ?? null
})

const lightboxCloseButton = ref<HTMLButtonElement | null>(null)
const lightboxDialog = ref<HTMLElement | null>(null)

let previousOverflow = ''
let previousFocus: HTMLElement | null = null

function openLightbox(index: number) {
  if (!import.meta.client) return

  previousFocus = document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null

  previousOverflow = document.body.style.overflow
  activePhotoIndex.value = index

  // Bloquer le défilement derrière la visionneuse
  document.body.style.overflow = 'hidden'

  nextTick(() => lightboxCloseButton.value?.focus())
}

function closeLightbox() {
  activePhotoIndex.value = null

  if (import.meta.client) {
    document.body.style.overflow = previousOverflow
    nextTick(() => previousFocus?.focus())
  }
}

function navigateLightbox(direction: number) {
  if (activePhotoIndex.value === null || !photosTravaux.length) {
    return
  }

  activePhotoIndex.value =
    (activePhotoIndex.value + direction + photosTravaux.length)
    % photosTravaux.length
}

function onLightboxKeydown(event: KeyboardEvent) {
  if (activePhotoIndex.value === null) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeLightbox()
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    navigateLightbox(1)
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    navigateLightbox(-1)
  }

  // Garder la navigation clavier dans la visionneuse
  if (event.key === 'Tab' && lightboxDialog.value) {
    const buttons = Array.from(
      lightboxDialog.value.querySelectorAll<HTMLButtonElement>(
        'button:not(:disabled)'
      )
    )

    if (!buttons.length) return

    const first = buttons[0]
    const last = buttons[buttons.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', onLightboxKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onLightboxKeydown)

  if (activePhotoIndex.value !== null) {
    document.body.style.overflow = previousOverflow
  }
})

</script>

<template>
  <div class="mkm-realisations-page">
    <section
      class="mkm-section mkm-realisations-page__section"
      aria-labelledby="titre-realisations"
    >
      <div class="mkm-container">
        <header class="mkm-realisations-page__intro">
          <p class="mkm-eyebrow mkm-eyebrow--rule">Groupe MKM</p>
          <h1 id="titre-realisations" class="mkm-realisations-page__title">
            Nos réalisations
          </h1>
          <p class="mkm-realisations-page__description">
            Découvrez une sélection de photographies de travaux sur le terrain.
          </p>
        </header>

        <ul
          v-if="photosTravaux.length"
          class="mkm-travaux-grid"
          :class="{ 'mkm-travaux-grid--short': photosTravaux.length < 7 }"
          aria-label="Galerie photographique des travaux"
        >
          
<li
  v-for="(photo, index) in photosTravaux"
  :key="photo.id"
  class="mkm-travaux-grid__item"
>
  <figure class="mkm-travaux-grid__figure">
    <button
      type="button"
      class="mkm-travaux-grid__trigger"
      :aria-label="`Agrandir la photographie ${index + 1} sur ${photosTravaux.length}`"
      @click="openLightbox(index)"
    >
      <img
        :src="photo.src"
        :alt="photo.alt"
        loading="lazy"
        decoding="async"
      >
    </button>
  </figure>
</li>

        </ul>

        <p v-else class="mkm-realisations-page__empty" role="status">
          Aucune photographie n'est encore disponible dans cette galerie.
        </p>
      </div>
    </section>
  </div>

  
<!-- VISIONNEUSE PLEIN ÉCRAN -->
<Teleport to="body">
  <div
    v-if="activePhoto"
    ref="lightboxDialog"
    class="mkm-lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Visionneuse des réalisations"
    @click.self="closeLightbox"
  >
    <!-- Fermer -->
    <button
      ref="lightboxCloseButton"
      type="button"
      class="mkm-lightbox__close"
      aria-label="Fermer la photographie"
      @click="closeLightbox"
    >
      <span aria-hidden="true">×</span>
    </button>

    <!-- Image agrandie -->
    <figure class="mkm-lightbox__figure">
      <img
        :src="activePhoto.src"
        :alt="activePhoto.alt"
        class="mkm-lightbox__image"
      >
    </figure>

    <!-- Navigation -->
    <div class="mkm-lightbox__navigation">

      <button
        type="button"
        class="mkm-lightbox__arrow"
        aria-label="Photographie précédente"
        @click="navigateLightbox(-1)"
      >
        <span aria-hidden="true">←</span>
      </button>

      <span class="mkm-lightbox__counter">
        {{ (activePhotoIndex ?? 0) + 1 }}
        /
        {{ photosTravaux.length }}
      </span>

      <button
        type="button"
        class="mkm-lightbox__arrow"
        aria-label="Photographie suivante"
        @click="navigateLightbox(1)"
      >
        <span aria-hidden="true">→</span>
      </button>

    </div>
  </div>
</Teleport>

</template>

<style scoped>
/* Styles limités à la page /realisations. */
.mkm-realisations-page__section {
  padding-block: clamp(2.5rem, 4.5vw, 4.75rem);
}

.mkm-realisations-page__intro {
  max-width: 55rem;
  margin-bottom: clamp(1.75rem, 3vw, 2.75rem);
}

.mkm-realisations-page__title {
  margin: 0 0 0.8rem;
  color: #071b3b;
  font-size: clamp(2rem, 3.3vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.025em;
}

.mkm-realisations-page__description {
  max-width: 52ch;
  margin: 0;
  color: #627183;
  font-size: clamp(0.9375rem, 1.1vw, 1.0625rem);
  line-height: 1.65;
}

/* Galerie éditoriale asymétrique : 7 photos par séquence.
   Chaque séquence remplit la grille, sans trous, lorsque les 14
   photographies sont présentes. */
.mkm-realisations-page .mkm-travaux-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: clamp(70px, 7.2vw, 112px);
  gap: clamp(7px, 0.85vw, 13px);
  margin: 0;
  padding: 0;
  list-style: none;
}

.mkm-realisations-page .mkm-travaux-grid__item {
  grid-column: span 2;
  grid-row: span 2;
  min-width: 0;
  min-height: 0;
  margin: 0;
}

/* Première bande : grande image panoramique + portrait. */
.mkm-realisations-page .mkm-travaux-grid__item:nth-child(7n + 1) {
  grid-column: span 4;
  grid-row: span 3;
}

.mkm-realisations-page .mkm-travaux-grid__item:nth-child(7n + 2) {
  grid-column: span 2;
  grid-row: span 3;
}

/* Dernière bande : deux photos plus larges. */
.mkm-realisations-page .mkm-travaux-grid__item:nth-child(7n + 6),
.mkm-realisations-page .mkm-travaux-grid__item:nth-child(7n + 7) {
  grid-column: span 3;
  grid-row: span 2;
}

/* Cas d'une galerie encore incomplète : ne pas laisser de grands trous. */
.mkm-realisations-page .mkm-travaux-grid--short .mkm-travaux-grid__item:nth-child(n + 3) {
  grid-column: span 3;
  grid-row: span 2;
}

.mkm-realisations-page .mkm-travaux-grid__figure {
  width: 100%;
  height: 100%;
  min-height: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
  background: #eef0f1;
  box-shadow: none;
}

.mkm-realisations-page .mkm-travaux-grid__figure img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 450ms ease;
}

.mkm-realisations-page__empty {
  padding: 2rem;
  border: 1px solid #e0e5eb;
  border-radius: 12px;
  color: #627183;
  background: #f7f9fb;
}

@media (hover: hover) and (pointer: fine) {
  .mkm-travaux-grid__figure:hover img {
    transform: scale(1.035);
  }
}

/* Tablette : deux cartes par rangée, avec une photo vedette pleine largeur. */
@media (max-width: 1100px) {
  .mkm-realisations-page .mkm-travaux-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: clamp(145px, 19vw, 235px);
    gap: 10px;
  }

  .mkm-realisations-page .mkm-travaux-grid__item,
  .mkm-realisations-page .mkm-travaux-grid__item:nth-child(n),
  .mkm-realisations-page .mkm-travaux-grid--short .mkm-travaux-grid__item:nth-child(n + 3) {
    grid-column: span 1;
    grid-row: span 1;
  }

  .mkm-realisations-page .mkm-travaux-grid__item:nth-child(5n + 1) {
    grid-column: span 2;
    grid-row: span 1;
  }
}

/* Mobile : deux photos côte à côte, avec des vues panoramiques régulières. */
@media (max-width: 640px) {
  .mkm-realisations-page__section {
    padding-block: 1.75rem 2.5rem;
  }

  .mkm-realisations-page__intro {
    margin-bottom: 1.25rem;
  }

  .mkm-realisations-page .mkm-travaux-grid {
    grid-auto-rows: clamp(115px, 31vw, 175px);
    gap: 6px;
  }

  .mkm-realisations-page .mkm-travaux-grid__item:nth-child(5n + 1) {
    grid-row: span 2;
  }

  /* Pour 14 photos, éviter une dernière carte isolée sur une demi-ligne. */
  .mkm-realisations-page .mkm-travaux-grid__item:last-child:nth-child(even) {
    grid-column: span 2;
  }

  .mkm-realisations-page .mkm-travaux-grid__figure {
    border-radius: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mkm-travaux-grid__figure img {
    transition: none;
  }

  .mkm-travaux-grid__figure:hover img {
    transform: none;
  }
}


/* ==========================================
   RÉALISATIONS — HAUTEURS ASYMÉTRIQUES
   Rangées visuelles 3, 5 et 6 agrandies
========================================== */

@media (min-width: 1101px) {

.mkm-realisations-page
.mkm-travaux-grid:has(
  > .mkm-travaux-grid__item:nth-child(14)
) {
  grid-template-rows:
    /* Rangées visuelles 1 et 2 */
    repeat(5, clamp(80px, 8vw, 124px))

    /* Rangée visuelle 3 : images 6 et 7 */
    repeat(2, clamp(115px, 12vw, 180px))

    /* Rangée visuelle 4 : images 8 et 9 */
    repeat(3, clamp(80px, 8vw, 124px))

    /* Rangées visuelles 5 et 6 */
    repeat(4, clamp(115px, 12vw, 180px));
}
}


/* ==========================================
   GALERIE — IMAGES CLIQUABLES
========================================== */

.mkm-travaux-grid__trigger {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  cursor: zoom-in;
}

.mkm-travaux-grid__trigger img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mkm-travaux-grid__trigger:focus-visible {
  outline: 3px solid #c69c45;
  outline-offset: -3px;
}

/* ==========================================
   VISIONNEUSE PLEIN ÉCRAN
========================================== */

.mkm-lightbox {
  position: fixed;
  inset: 0;
  z-index: 99999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: clamp(1rem, 3vw, 2rem);
  background: rgba(3, 11, 23, 0.96);
  box-sizing: border-box;
}

/* Photographie en taille maximale */
.mkm-lightbox__figure {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1400px;
  min-height: 0;
  margin: 0;
}

.mkm-lightbox__image {
  display: block;
  max-width: 100%;
  max-height: 78vh;
  max-height: 78dvh;

  width: auto;
  height: auto;
  object-fit: contain;

  border-radius: 0;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
}

/* Bouton de fermeture */
.mkm-lightbox__close {
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  padding: 0;

  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  background: rgba(255,255,255,0.08);

  color: #ffffff;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;

  transition: background-color 200ms ease;
}

.mkm-lightbox__close:hover {
  background: rgba(255,255,255,0.2);
}

/* Navigation inférieure */
.mkm-lightbox__navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 1.25rem;
}

.mkm-lightbox__counter {
  min-width: 65px;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.mkm-lightbox__arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 50%;
  background: rgba(255,255,255,0.06);

  color: #ffffff;
  font-size: 1.4rem;
  cursor: pointer;

  transition:
    background-color 200ms ease,
    border-color 200ms ease;
}

.mkm-lightbox__arrow:hover {
  background: rgba(255,255,255,0.16);
  border-color: #c69c45;
}

.mkm-lightbox button:focus-visible {
  outline: 3px solid #c69c45;
  outline-offset: 3px;
}

/* Smartphones */
@media (max-width: 640px) {
  .mkm-lightbox {
    padding: 1rem;
  }

  .mkm-lightbox__image {
    max-height: 72vh;
    max-height: 72dvh;
  }

  .mkm-lightbox__close {
    top: 0.75rem;
    right: 0.75rem;
  }

  .mkm-lightbox__navigation {
    gap: 1.5rem;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .mkm-lightbox__close,
  .mkm-lightbox__arrow {
    transition: none;
  }
}


</style>
