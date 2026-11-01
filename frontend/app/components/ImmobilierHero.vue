<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import hero1 from '~/assets/image/services/immobilier/hero1.png'
import hero2 from '~/assets/image/services/immobilier/hero2.png'
import hero3 from '~/assets/image/services/immobilier/hero3.png'
import { contacts } from '~/data/site'

const slides = [
  {
    src: hero1,
    alt: 'Villa contemporaine au coucher du soleil, avec terrasse, palmiers et vue sur la ville.'
  },
  {
    src: hero2,
    alt: 'Maison blanche moderne avec un porche en béton, une allée pavée et un jardin de palmiers.'
  },
  {
    src: hero3,
    alt: 'Résidence avec une piscine, des transats et des palmiers devant les balcons.'
  }
]

const instance = getCurrentInstance()
const SLIDE_MS = 720
const index = ref(0)
const leaving = ref<number | null>(null)
const userPaused = ref(false)
const keyboardPaused = ref(false)
const hovering = ref(false)
const reducedMotion = ref(false)
const hero = ref<HTMLElement | null>(null)
let timer: ReturnType<typeof setInterval> | undefined
let leaveTimer: ReturnType<typeof setTimeout> | undefined
let removeMedia: (() => void) | undefined

const holding = computed(() => userPaused.value || keyboardPaused.value || reducedMotion.value)

function show (next: number) {
  const normalized = (next + slides.length) % slides.length
  if (normalized === index.value) return
  if (!reducedMotion.value) {
    leaving.value = index.value
    if (leaveTimer) clearTimeout(leaveTimer)
    leaveTimer = setTimeout(() => {
      leaving.value = null
      instance?.update()
    }, SLIDE_MS)
  }
  index.value = normalized
  instance?.update()
}

function restart () {
  if (timer) clearInterval(timer)
  timer = undefined
  if (!import.meta.client || userPaused.value || keyboardPaused.value || hovering.value || reducedMotion.value) return
  timer = setInterval(() => show(index.value + 1), 7000)
}

function onFocusIn (event: FocusEvent) {
  const target = event.target
  if (!(target instanceof Element)) return
  if (target.closest('[data-hero-playback], .mkm-slider-controls, .mkm-slider-pagination')) return
  keyboardPaused.value = true
}

function onFocusOut (event: FocusEvent) {
  const next = event.relatedTarget
  if (!(next instanceof Node) || !hero.value?.contains(next)) {
    keyboardPaused.value = false
    hovering.value = false
  }
}

function togglePlayback () {
  if (reducedMotion.value) return
  if (userPaused.value || keyboardPaused.value) {
    userPaused.value = false
    keyboardPaused.value = false
    return
  }
  userPaused.value = true
}

onMounted(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  const apply = () => {
    reducedMotion.value = media.matches
  }
  apply()
  media.addEventListener('change', apply)
  removeMedia = () => media.removeEventListener('change', apply)
  restart()
})

watch([userPaused, keyboardPaused, hovering, reducedMotion], restart)

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  if (leaveTimer) clearTimeout(leaveTimer)
  removeMedia?.()
})
</script>

<template>
  <section
    ref="hero"
    class="mkm-immo-hero"
    aria-roledescription="carrousel"
    aria-labelledby="titre-immobilier"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <div class="mkm-immo-hero__cadre">
        <div class="mkm-immo-hero__stage">
          <img
            v-for="(slide, slideIndex) in slides"
            :key="slide.src"
            :src="slide.src"
            :alt="slideIndex === index ? slide.alt : ''"
            :class="{ 'is-active': slideIndex === index, 'is-leaving': slideIndex === leaving }"
            :aria-hidden="slideIndex === index ? undefined : 'true'"
          >
        </div>
        <div class="mkm-immo-hero__voile" aria-hidden="true" />
        <div class="mkm-container mkm-immo-hero__contenu">
        <div class="mkm-immo-hero__copy">
          <p class="mkm-eyebrow">Nos services</p>
          <h1 id="titre-immobilier">Donnez vie à vos ambitions immobilières</h1>
          <p>Acheter, vendre ou louer un bien immobilier est une décision importante. Le Groupe MKM vous accompagne dans vos projets immobiliers en vous proposant un service de proximité, une écoute attentive et des solutions adaptées à vos besoins.</p>
          
<div class="mkm-actions">
  <a
    :href="contacts.whatsappHref"
    class="mkm-btn mkm-btn--whatsapp mkm-immo-hero__whatsapp"
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
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .06 5.37.05 11.98c0 2.11.55 4.17 1.61 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.85 1.49h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.52-8.41A11.82 11.82 0 0 0 12.04 0Zm.01 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94a9.88 9.88 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.9 7.04c0 5.48-4.47 9.95-9.98 9.95Zm-3.03-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/>
    </svg>

    <span>Nous contacter</span>
  </a>
</div>

        </div>
        <div class="mkm-immo-hero__barre">
          <div class="mkm-slider-pagination" role="group" aria-label="Diapositives">
            <button
              v-for="(slide, slideIndex) in slides"
              :key="slide.src"
              type="button"
              class="mkm-slider-page"
              :aria-current="slideIndex === index ? 'true' : undefined"
              :aria-label="`Afficher la diapositive ${slideIndex + 1}`"
              @click="show(slideIndex)"
            >
              {{ String(slideIndex + 1).padStart(2, '0') }}
            </button>
          </div>
          <div class="mkm-slider-controls">
            <button type="button" class="mkm-slider-control" aria-label="Diapositive précédente" @click="show(index - 1)">
              <MkmIcon name="chevron-left" />
            </button>
            <button
              type="button"
              class="mkm-slider-control"
              data-hero-playback
              :aria-pressed="holding"
              :disabled="reducedMotion"
              :aria-label="holding ? 'Reprendre le défilement' : 'Mettre le défilement en pause'"
              @click="togglePlayback"
            >
              <MkmIcon :name="holding ? 'play' : 'pause'" />
            </button>
            <button type="button" class="mkm-slider-control" aria-label="Diapositive suivante" @click="show(index + 1)">
              <MkmIcon name="chevron-right" />
            </button>
          </div>
        </div>
        </div>
      </div>
  </section>
</template>
