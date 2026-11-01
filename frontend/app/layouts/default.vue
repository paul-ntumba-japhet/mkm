<script setup lang="ts">
const route = useRoute()
const tone = useState<'light' | 'dark'>('mkm-masthead-tone', () => 'light')
const isHome = computed(() => route.path === '/')

watch(() => route.path, (path) => {
  if (path !== '/') tone.value = 'light'
}, { immediate: true })
</script>

<template>
  <a class="mkm-skip-link" href="#contenu">Aller au contenu</a>
  <div class="mkm-masthead" :data-tone="isHome ? tone : 'light'">
    <AppHeader />
    <HomeHero v-if="isHome" />
  </div>
  <main id="contenu">
    <slot />
  </main>
  <AppFooter />
</template>
