// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/style.css', '~/assets/css/layout.css', '~/assets/css/typographie-responsive.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      bodyAttrs: {
        class: 'mkm-site'
      },
      title: 'Groupe MKM',
      meta: [
        {
          name: 'description',
          content: 'Groupe MKM, entreprise congolaise multisectorielle à Kinshasa : huit domaines d’activité, réalisations et demandes de devis.'
        }
      ]
    }
  }
})
