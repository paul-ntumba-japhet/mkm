<script setup lang="ts">
const props = defineProps<{
  eyebrow: string
  title: string
  text: string
}>()

useSeoMeta({
  title: () => `${props.title} · Groupe MKM`,
  description: () => props.text
})
</script>

<template>
  <section class="mkm-section">
    <div class="mkm-container mkm-prose">
      <p class="mkm-eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="mkm-lead">{{ text }}</p>
      <NuxtLink to="/" class="mkm-btn mkm-btn--secondary">Retour à l’accueil</NuxtLink>
    </div>
  </section>
</template>
