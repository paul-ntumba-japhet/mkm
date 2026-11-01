<script setup lang="ts">
import { offreNumerique } from '~/data/offres-numeriques'

const route = useRoute()
const code = typeof route.query.service === 'string' ? route.query.service : ''
const offre = code ? offreNumerique(code) : undefined
const texte = offre
  ? `Vous préparez une demande pour « ${offre.title} ». Le parcours d’estimation et le formulaire seront ajoutés lorsque les prestations calculables et les règles tarifaires auront été validées. Le service indiqué reste modifiable.`
  : 'Le parcours d’estimation et le formulaire seront ajoutés lorsque les prestations calculables et les règles tarifaires auront été validées.'
</script>

<template>
  <PagePlaceholder
    eyebrow="Devis"
    title="Demander un devis"
    :text="texte"
  />
</template>
