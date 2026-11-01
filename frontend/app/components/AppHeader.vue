<script setup lang="ts">
import logo from '~/assets/brand/mkm-group.png'
import { nav } from '~/data/site'

const open = ref(false)
const route = useRoute()

const isEducAfrik = computed(
  () => route.path === '/services/educ-afrik'
)


const isImmobilier = computed(
  () => route.path === '/services/immobilier'
)


const isScrolled = ref(false)

function updateHeaderScroll() {
  if (!import.meta.client) return

  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  updateHeaderScroll()

  window.addEventListener(
    'scroll',
    updateHeaderScroll,
    { passive: true }
  )
})

watch(() => route.path, () => {
  nextTick(updateHeaderScroll)
})

const tone = useState<'light' | 'dark'>('mkm-masthead-tone', () => 'light')
const header = ref<HTMLElement | null>(null)
const toggle = ref<HTMLButtonElement | null>(null)

const ctaClass = computed(() => tone.value === 'dark'
  ? 'mkm-btn mkm-btn--gold mkm-header__cta'
  : 'mkm-btn mkm-btn--primary mkm-header__cta')


watch(() => route.fullPath, () => {
  open.value = false
})

function onKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !open.value) return
  open.value = false
  toggle.value?.focus()
}

function onPointerDown(event: PointerEvent) {
  if (!open.value || !header.value) return
  if (event.target instanceof Node && !header.value.contains(event.target)) open.value = false
}

watch(open, (isOpen) => {
  if (!import.meta.client) return
  if (isOpen) {
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('pointerdown', onPointerDown)
  } else {
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('pointerdown', onPointerDown)
  }
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('pointerdown', onPointerDown)
  window.removeEventListener('scroll', updateHeaderScroll)
})
</script>

<template>
  <header ref="header" class="mkm-header" :class="{
    'mkm-header--livre-scrolled': isEducAfrik && isScrolled,
    'mkm-header--immo-scrolled': isImmobilier && isScrolled
  }">
    <div class="mkm-container mkm-header__inner">
      <NuxtLink to="/" class="mkm-logo-link" aria-label="Groupe MKM — Accueil">
        <img class="mkm-logo mkm-logo--light" :src="logo" alt="" width="1254" height="1254">
        <img class="mkm-logo mkm-logo--dark" :src="logo" alt="" width="1254" height="1254">
      </NuxtLink>
      <button
        ref="toggle"
        type="button"
        class="mkm-menu-toggle"
        :aria-expanded="open"
        aria-controls="navigation-principale"
        @click="open = !open"
      >
        <MkmIcon :name="open ? 'close' : 'menu'" />
        <span class="mkm-sr-only">{{ open ? 'Fermer le menu' : 'Ouvrir le menu' }}</span>
      </button>
      <nav id="navigation-principale" class="mkm-nav">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="mkm-nav__link"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
