import imageConception from '~/assets/image/services/numeriques/conception_logicielle.png'
import imageHebergement from '~/assets/image/services/numeriques/hebergement_domaine.png'
import imageIa from '~/assets/image/services/numeriques/integration_ia.png'
import imageMarketing from '~/assets/image/services/numeriques/marketing.webp'
import imageMaintenance from '~/assets/image/services/numeriques/maintenance2.webp'
import imageFormation from '~/assets/image/services/numeriques/formation.jpg'

export type OffreNumerique = {
  slug: string
  seoTitle: string
  seoDescription: string
  image: string
  imageAlt: string
  title: string
  kicker: string
  intro: string
  cta: string
  prestationsTitre: string
  prestations: { title: string, text: string }[]
  parcoursTitre: string
  etapes: { title: string, text: string }[]
  livrables: string[]
  contactTitre: string
  contactTexte: string
  contactCta: string
}

export const offresNumeriques: OffreNumerique[] = [
  {
    slug: 'conception-developpement',
    seoTitle: 'Conception et développement d’applications',
    seoDescription: 'Sites web, applications mobiles, logiciels métiers, CRM et ERP : Groupe MKM vous accompagne dans la conception de solutions adaptées à votre activité.',
    image: imageConception,
    imageAlt: 'Interfaces de solutions numériques sur ordinateur, tablette et téléphone.',
    title: 'Conception et développement de solutions numériques',
    kicker: 'Des outils pensés pour votre activité et vos utilisateurs.',
    intro: 'Vous souhaitez présenter vos services, vendre en ligne ou mieux organiser votre entreprise ? Groupe MKM vous accompagne dans la conception d’une solution adaptée à vos objectifs. Nous partons de vos usages pour définir les fonctionnalités utiles, simplifier les parcours et préparer les évolutions de votre projet.',
    cta: 'Parler de mon projet',
    prestationsTitre: 'Ce que nous réalisons',
    prestations: [
      {
        title: 'Sites web et boutiques en ligne',
        text: 'Sites vitrines, sites institutionnels, catalogues et plateformes e-commerce : nous structurons votre offre et facilitons la prise de contact ou l’achat. Le contenu, la navigation et l’affichage sont pensés pour les usages sur ordinateur et sur mobile.'
      },
      {
        title: 'Applications web et portails',
        text: 'Espaces clients, portails partenaires, outils de réservation, plateformes de formation ou applications de suivi : vos utilisateurs accèdent aux services dont ils ont besoin depuis leur navigateur, avec des droits adaptés à leur rôle.'
      },
      {
        title: 'Applications mobiles',
        text: 'Nous concevons des applications pour Android et iOS selon le périmètre retenu. Consultation d’informations, commandes, notifications ou suivi d’activité : chaque fonctionnalité répond à un usage identifié, avec une interface adaptée aux petits écrans.'
      },
      {
        title: 'Logiciels métiers, CRM et ERP',
        text: 'Gestion commerciale, relation client, stocks, facturation, ressources humaines ou suivi de projets : nous étudions vos processus pour créer ou adapter les modules nécessaires. L’objectif est de limiter les doubles saisies et de rendre les informations plus faciles à exploiter.'
      },
      {
        title: 'Logiciels de bureau',
        text: 'Pour les activités qui nécessitent une application installée sur un poste de travail, nous étudions les contraintes d’utilisation, de connexion et d’équipement. Le fonctionnement hors ligne et les échanges avec d’autres outils sont définis selon les besoins.'
      },
      {
        title: 'Plateformes SaaS',
        text: 'Vous souhaitez proposer un logiciel en ligne à plusieurs entreprises ou organisations ? Nous définissons avec vous les espaces utilisateurs, les habilitations et les fonctions d’administration. Les abonnements, paiements et intégrations éventuelles font l’objet d’un cadrage spécifique.'
      }
    ],
    parcoursTitre: 'De votre besoin à une solution utilisable',
    etapes: [
      { title: 'Cadrer le projet.', text: 'Nous identifions les utilisateurs, les tâches prioritaires, les données et les contraintes pour établir un périmètre réaliste.' },
      { title: 'Concevoir les parcours.', text: 'Les écrans et fonctionnalités sont organisés puis présentés sous forme de maquettes pour validation.' },
      { title: 'Développer et tester.', text: 'La solution est construite par étapes, avec des vérifications fonctionnelles et des retours sur les usages convenus.' },
      { title: 'Déployer et transmettre.', text: 'Nous préparons la mise en service, les accès et les éléments de prise en main prévus au devis.' }
    ],
    livrables: [
      'Livrables prévus selon le projet : périmètre fonctionnel, maquettes validées, application testée, documentation et accompagnement au démarrage. Les conditions de remise du code source, l’hébergement et la maintenance sont précisés dans l’offre.'
    ],
    contactTitre: 'Transformons votre besoin en projet concret.',
    contactTexte: 'Présentez-nous votre activité, vos utilisateurs et les difficultés que vous souhaitez résoudre. Nous vous aiderons à définir une première étape adaptée.',
    contactCta: 'Demander un devis de développement'
  },
  {
    slug: 'hebergement-domaines',
    seoTitle: 'Hébergement web et noms de domaine',
    seoDescription: 'Domaine, hébergement, messagerie professionnelle et migration : Groupe MKM accompagne la mise en ligne et le suivi de vos services numériques.',
    image: imageHebergement,
    imageAlt: 'Baies de serveurs illustrant l’hébergement de sites et d’applications.',
    title: 'Hébergement et noms de domaine',
    kicker: 'Une présence en ligne organisée dès le départ.',
    intro: 'Votre site, votre application et vos e-mails professionnels ont besoin d’un environnement adapté. Groupe MKM vous accompagne dans le choix et la configuration des services nécessaires, depuis votre nom de domaine jusqu’à la mise en ligne, avec des modalités de suivi définies selon vos besoins.',
    cta: 'Étudier mon besoin d’hébergement',
    prestationsTitre: 'Nos prestations',
    prestations: [
      {
        title: 'Enregistrement et gestion des domaines',
        text: 'Nous vous aidons à choisir un nom cohérent avec votre activité, à vérifier sa disponibilité et à configurer ses connexions avec votre site et votre messagerie. Les accès de gestion et les échéances de renouvellement sont clarifiés dès la mise en place.'
      },
      {
        title: 'Hébergement de sites et d’applications',
        text: 'Un site de présentation et une application de gestion n’ont pas les mêmes besoins. Nous étudions les ressources, le stockage et les contraintes techniques pour proposer un environnement proportionné à votre usage et à son évolution prévisible.'
      },
      {
        title: 'Messageries professionnelles',
        text: 'Utilisez des adresses rattachées à votre domaine pour vos échanges professionnels. Nous accompagnons la création des comptes, leur configuration et, selon le périmètre, la reprise des messages existants et la prise en main par les utilisateurs.'
      },
      {
        title: 'Certificats et configuration HTTPS',
        text: 'Nous configurons les certificats nécessaires aux connexions HTTPS et vérifions leur fonctionnement. Ce dispositif protège les échanges en transit ; il s’intègre à un ensemble de mesures comprenant aussi les accès, les mises à jour et les sauvegardes.'
      },
      {
        title: 'Migration d’hébergement',
        text: 'Vous souhaitez déplacer votre site ou votre application ? Nous examinons l’existant, préparons les transferts et les tests, puis organisons la bascule. Les contraintes d’interruption et les possibilités de retour arrière sont évaluées avant l’intervention.'
      },
      {
        title: 'Sauvegardes, surveillance et assistance',
        text: 'Selon l’offre retenue, nous définissons les données à sauvegarder, leur fréquence de copie, leur durée de conservation et les contrôles à réaliser. Le périmètre de surveillance et les modalités d’assistance sont précisés pour éviter les zones d’incertitude.'
      }
    ],
    parcoursTitre: 'Une mise en place en quatre étapes',
    etapes: [
      { title: 'Analyser l’existant.', text: 'Sites, applications, domaine, messagerie et accès sont recensés pour identifier les besoins réels.' },
      { title: 'Définir la configuration.', text: 'Nous précisons les services retenus, leur coût récurrent et les responsabilités de chacun.' },
      { title: 'Configurer et vérifier.', text: 'Les services sont installés ou transférés, puis testés avant leur mise à disposition.' },
      { title: 'Organiser le suivi.', text: 'Les accès, renouvellements, sauvegardes et demandes d’assistance sont documentés.' }
    ],
    livrables: [
      'Livrables selon l’offre : services configurés, inventaire des accès transmis par un canal adapté, récapitulatif des abonnements et consignes de gestion. Les engagements de disponibilité et de support sont ceux de l’offre convenue.'
    ],
    contactTitre: 'Préparez votre mise en ligne ou votre migration.',
    contactTexte: 'Indiquez le type de site ou d’application, votre situation actuelle et les services souhaités. Nous vous aiderons à choisir une configuration adaptée.',
    contactCta: 'Demander un devis d’hébergement'
  },
  {
    slug: 'agents-ia',
    seoTitle: 'Agents IA et automatisation des processus',
    seoDescription: 'Support, assistance commerciale, recherche documentaire et automatisation : explorez les usages des agents IA avec Groupe MKM.',
    image: imageIa,
    imageAlt: 'Assistant conversationnel illustrant un service d’accompagnement automatisé.',
    title: 'Intégration d’agents IA dans vos processus',
    kicker: 'Une assistance adaptée à vos tâches, à vos outils et à vos équipes.',
    intro: 'Répondre aux demandes courantes, retrouver une information ou préparer un document peut mobiliser beaucoup de temps. Groupe MKM vous aide à identifier les usages pertinents de l’intelligence artificielle, puis à intégrer des assistants dans vos applications et vos processus, avec des règles de fonctionnement et de validation explicites.',
    cta: 'Étudier mon cas d’usage',
    prestationsTitre: 'Des usages concrets pour votre organisation',
    prestations: [
      {
        title: 'Support client',
        text: 'Un assistant peut répondre aux questions fréquentes à partir de contenus validés, orienter un utilisateur et préparer une demande de support. Les situations complexes ou non couvertes sont dirigées vers un interlocuteur humain selon le parcours défini.'
      },
      {
        title: 'Assistance commerciale',
        text: 'Présentation de l’offre, recueil des besoins, qualification d’une demande ou préparation d’un rendez-vous : l’assistant accompagne les premiers échanges. Les tarifs, disponibilités et engagements commerciaux doivent provenir de sources à jour et suivre les validations prévues.'
      },
      {
        title: 'Recherche documentaire',
        text: 'Facilitez la consultation de procédures, guides, catalogues et documents internes. L’assistant recherche dans les sources autorisées et peut restituer les références utiles, afin que vos collaborateurs puissent vérifier et approfondir les réponses proposées.'
      },
      {
        title: 'Traitement de documents',
        text: 'Extraction d’informations, classement, résumé ou préparation de synthèses : nous étudions les tâches répétitives qui peuvent être assistées. Les informations importantes sont soumises aux contrôles définis avec vos équipes avant leur utilisation.'
      },
      {
        title: 'Automatisation interne',
        text: 'Un agent peut être relié à vos outils pour préparer une fiche, mettre à jour certaines informations ou déclencher un circuit de traitement autorisé. Les actions accessibles, les droits et les étapes de confirmation sont délimités dès la conception.'
      },
      {
        title: 'Accompagnement pédagogique',
        text: 'Un assistant peut aider à retrouver une ressource, expliquer une notion ou proposer des exercices à partir d’un corpus choisi. Le contenu et les objectifs sont définis avec les responsables pédagogiques, qui conservent la maîtrise de l’accompagnement.'
      }
    ],
    parcoursTitre: 'Une intégration progressive et contrôlée',
    etapes: [
      { title: 'Choisir un usage utile.', text: 'Nous examinons les tâches, leur fréquence et les difficultés rencontrées pour sélectionner un premier périmètre.' },
      { title: 'Préparer les sources et les règles.', text: 'Les documents, accès autorisés, limites et situations nécessitant une intervention humaine sont définis.' },
      { title: 'Tester un prototype.', text: 'Des scénarios représentatifs permettent d’évaluer les réponses, les erreurs et l’intérêt réel pour les utilisateurs.' },
      { title: 'Intégrer et ajuster.', text: 'Après validation, l’assistant est connecté aux outils prévus et ses usages sont suivis pour guider les améliorations.' }
    ],
    livrables: [
      'Livrables selon le projet : description du cas d’usage, prototype, intégration, scénarios de test et guide d’utilisation. Les données transmises aux fournisseurs, les règles de conservation et les coûts d’utilisation sont examinés lors du cadrage.'
    ],
    contactTitre: 'Identifions une première tâche à simplifier.',
    contactTexte: 'Décrivez un processus, les outils utilisés et les difficultés rencontrées. Nous examinerons avec vous l’intérêt d’un assistant IA et les conditions de sa mise en place.',
    contactCta: 'Parler de mon projet IA'
  },
  {
    slug: 'contenu-seo-marketing',
    seoTitle: 'Contenu, SEO et marketing digital',
    seoDescription: 'Rédaction web, référencement naturel, réseaux sociaux et campagnes publicitaires : Groupe MKM accompagne votre visibilité et vos prises de contact.',
    image: imageMarketing,
    imageAlt: 'Création de contenu, recherche en ligne et analyse de campagnes digitales.',
    title: 'Contenu, référencement naturel et marketing digital',
    kicker: 'Présentez clairement votre offre et facilitez la rencontre avec vos clients.',
    intro: 'Une présence en ligne utile repose sur des messages compréhensibles, des contenus pertinents et des actions adaptées à votre public. Groupe MKM vous accompagne dans la rédaction, l’amélioration de votre visibilité et la préparation de campagnes, avec un suivi des indicateurs liés à vos objectifs.',
    cta: 'Parler de mes objectifs de visibilité',
    prestationsTitre: 'Nos leviers d’accompagnement',
    prestations: [
      {
        title: 'Rédaction de contenus web',
        text: 'Pages de services, articles, fiches produits et textes de présentation : nous organisons l’information pour répondre aux questions de vos visiteurs et faciliter leur décision. Le ton, les messages et les appels à l’action sont adaptés à votre activité.'
      },
      {
        title: 'Audit et optimisation du référencement naturel',
        text: 'Nous examinons la structure du site, les contenus et les points techniques qui peuvent gêner sa compréhension ou sa découverte. Les améliorations sont priorisées selon leur utilité, leur faisabilité et les recherches pertinentes pour votre public.'
      },
      {
        title: 'Ligne éditoriale et calendrier de publication',
        text: 'Nous définissons avec vous les sujets à traiter, les publics concernés et les formats à privilégier. Un calendrier permet d’organiser les publications et les validations, tout en maintenant une cohérence entre votre site et vos autres canaux.'
      },
      {
        title: 'Réseaux sociaux et campagnes ciblées',
        text: 'Nous préparons des contenus et des campagnes adaptés aux plateformes retenues. Les messages, visuels, audiences et objectifs sont définis ensemble ; la gestion quotidienne des échanges et la modération sont précisées dans le périmètre de l’offre.'
      },
      {
        title: 'Campagnes Google Ads',
        text: 'Nous accompagnons la préparation et la gestion de campagnes publicitaires : choix des objectifs, structure des annonces, ciblage et suivi. Le budget d’achat publicitaire est distinct des frais de conception et de gestion de la prestation.'
      },
      {
        title: 'Pages de destination et suivi des conversions',
        text: 'Une campagne doit conduire vers une page cohérente avec sa promesse. Nous préparons des pages centrées sur une action utile : demande de devis, prise de contact ou inscription. Les outils de mesure sont configurés selon les choix de suivi et de consentement retenus.'
      }
    ],
    parcoursTitre: 'Des actions organisées autour de vos objectifs',
    etapes: [
      { title: 'Comprendre votre offre.', text: 'Nous identifions vos publics, vos messages et les actions que vous souhaitez encourager.' },
      { title: 'Définir les priorités.', text: 'Les contenus, canaux et budgets sont sélectionnés pour établir un plan d’action réaliste.' },
      { title: 'Produire et diffuser.', text: 'Les éléments prévus sont rédigés, validés puis publiés ou mis en campagne.' },
      { title: 'Mesurer et ajuster.', text: 'Les résultats observés servent à améliorer les contenus, les ciblages et les parcours.' }
    ],
    livrables: [
      'Livrables selon l’offre : audit priorisé, textes validés, calendrier éditorial, campagnes configurées et bilan de suivi. Les indicateurs peuvent porter sur la visibilité, les visites qualifiées, les prises de contact et le coût des demandes obtenues, selon les données disponibles.'
    ],
    contactTitre: 'Donnons une direction claire à votre présence en ligne.',
    contactTexte: 'Partagez votre site, vos canaux actuels et vos objectifs. Nous vous proposerons les premières actions à privilégier.',
    contactCta: 'Demander un devis de communication digitale'
  },
  {
    slug: 'refonte-maintenance',
    seoTitle: 'Refonte et maintenance d’applications',
    seoDescription: 'Audit, correction de bugs, refonte, performances et évolutions : Groupe MKM accompagne l’amélioration de vos sites et applications existants.',
    image: imageMaintenance,
    imageAlt: 'Analyse et amélioration d’une application existante.',
    title: 'Refonte, correction et maintenance',
    kicker: 'Faites évoluer vos outils au rythme de votre activité.',
    intro: 'Votre application présente des erreurs, manque de fluidité ou ne répond plus à vos besoins ? Groupe MKM analyse l’existant pour identifier les améliorations utiles. Selon la situation, nous intervenons sur un problème précis, une refonte ciblée ou un programme d’évolution et de maintenance.',
    cta: 'Faire examiner mon application',
    prestationsTitre: 'Nos interventions',
    prestations: [
      {
        title: 'Audit technique et fonctionnel',
        text: 'Nous étudions le fonctionnement de l’application, les parcours, les composants et les difficultés signalées. L’analyse débouche sur des constats et des priorités pour distinguer les corrections urgentes des évolutions qui peuvent être planifiées.'
      },
      {
        title: 'Refonte graphique et ergonomique',
        text: 'Nous retravaillons les interfaces pour rendre les contenus plus lisibles et les actions plus faciles à comprendre. Navigation, formulaires et adaptation mobile sont examinés en tenant compte des usages réels et de l’identité de votre entreprise.'
      },
      {
        title: 'Correction des bugs',
        text: 'Erreurs de formulaire, calculs incohérents ou fonctionnalités qui ne répondent plus : nous cherchons à reproduire le problème, à identifier sa cause et à appliquer une correction vérifiable. Les parcours concernés sont testés après intervention.'
      },
      {
        title: 'Optimisation des performances',
        text: 'Nous analysons les lenteurs observées pour cibler les améliorations possibles : chargement des pages, accès aux données, fichiers ou traitements. Les changements sont évalués sur des mesures comparables, selon l’environnement et les usages retenus.'
      },
      {
        title: 'Mise à jour des composants',
        text: 'Les mises à jour sont préparées en tenant compte des dépendances et des risques d’incompatibilité. Lorsque l’environnement le permet, elles sont testées sur une copie avant la mise en production, avec une sauvegarde et un scénario de retour arrière.'
      },
      {
        title: 'Nouvelles fonctionnalités et connexions',
        text: 'Ajout d’un module, évolution des droits, nouveaux rapports ou connexion à un autre service : nous étudions la compatibilité avec l’architecture existante. Le périmètre et les éventuels travaux préalables sont clarifiés avant le développement.'
      }
    ],
    parcoursTitre: 'Une intervention préparée et vérifiable',
    etapes: [
      { title: 'Recueillir les informations.', text: 'Nous recensons les symptômes, les usages, les accès autorisés et la documentation disponible.' },
      { title: 'Diagnostiquer et prioriser.', text: 'Un plan d’intervention distingue les corrections, les dépendances et les évolutions souhaitées.' },
      { title: 'Corriger et tester.', text: 'Les modifications sont vérifiées dans un environnement adapté avant leur déploiement, lorsque celui-ci est disponible.' },
      { title: 'Livrer et suivre.', text: 'Nous présentons les changements réalisés et les recommandations pour la suite.' }
    ],
    livrables: [
      'Livrables selon la mission : compte rendu d’audit, liste des interventions, vérifications réalisées et notes de livraison. La maintenance récurrente, les horaires d’assistance et les délais de prise en charge font l’objet de conditions convenues.'
    ],
    contactTitre: 'Commençons par comprendre ce qui vous freine.',
    contactTexte: 'Décrivez les difficultés rencontrées, les outils concernés et vos priorités. Vous pourrez transmettre des captures et des informations techniques par le canal convenu, sans communiquer vos mots de passe dans le formulaire.',
    contactCta: 'Demander un diagnostic'
  },
  {
    slug: 'formation-developpement-web',
    seoTitle: 'Formation au développement web',
    seoDescription: 'Interfaces, programmation, bases de données, API et déploiement : développez vos compétences à travers un parcours pratique adapté à votre niveau.',
    image: imageFormation,
    imageAlt: 'Participants réunis pour une séance de formation.',
    title: 'Formation au développement d’applications web',
    kicker: 'Comprendre, pratiquer et construire un projet de bout en bout.',
    intro: 'Vous souhaitez acquérir des bases solides ou structurer vos compétences en développement ? Groupe MKM propose un accompagnement associant explications, exercices et réalisation pratique. Le parcours est défini selon votre niveau, vos objectifs et le temps disponible pour apprendre et mettre en application.',
    cta: 'Demander un programme adapté',
    prestationsTitre: 'Les compétences travaillées',
    prestations: [
      {
        title: 'Interfaces et intégration responsive',
        text: 'Apprenez à organiser une page, à traduire une maquette en interface et à adapter son affichage aux différents écrans. La lisibilité, les formulaires, la navigation et les principes d’accessibilité sont abordés dans les exercices.'
      },
      {
        title: 'Programmation frontend et backend',
        text: 'Comprenez le rôle du navigateur et du serveur, puis développez les interactions et traitements nécessaires à une application. Les technologies sont choisies en fonction du parcours, avec une progression adaptée aux prérequis des participants.'
      },
      {
        title: 'Bases de données',
        text: 'Passez de l’analyse d’un besoin à l’organisation des données. Le parcours aborde la modélisation, les relations, les requêtes et les opérations courantes pour conserver et exploiter les informations de manière cohérente.'
      },
      {
        title: 'Création et utilisation d’API',
        text: 'Découvrez comment des applications échangent des données. Vous pratiquez la création de points d’accès, la consommation d’un service, la validation des informations reçues et la gestion des erreurs.'
      },
      {
        title: 'Authentification, habilitations et sécurité',
        text: 'Apprenez à distinguer l’identification d’un utilisateur de ses autorisations. Les exercices abordent la gestion des sessions ou des jetons selon la solution retenue, les contrôles d’accès et la validation des entrées.'
      },
      {
        title: 'Tests, versions et déploiement',
        text: 'Organisez vos modifications avec un outil de gestion de versions, vérifiez les fonctionnalités et préparez la mise en ligne. L’objectif est de comprendre un cycle de travail reproductible, du développement à la livraison.'
      },
      {
        title: 'Projet pratique accompagné',
        text: 'Mobilisez les compétences acquises dans une application de taille adaptée au parcours : outil de gestion, portail ou catalogue, par exemple. Vous avancez par étapes, présentez vos choix et améliorez votre réalisation à partir des retours reçus.'
      }
    ],
    parcoursTitre: 'Un parcours construit selon votre niveau',
    etapes: [
      { title: 'Faire le point.', text: 'Un échange permet d’identifier vos acquis, vos objectifs et les compétences à renforcer.' },
      { title: 'Définir le programme.', text: 'Les modules, prérequis, modalités, durée et rythme sont précisés avant l’engagement.' },
      { title: 'Apprendre par la pratique.', text: 'Démonstrations, exercices et corrections accompagnent la progression vers le projet.' },
      { title: 'Évaluer les acquis.', text: 'La réalisation et sa présentation permettent d’identifier les compétences acquises et les pistes de progression.' }
    ],
    livrables: [
      'Public concerné : débutants motivés, étudiants, développeurs souhaitant consolider leurs bases et équipes ayant un besoin de montée en compétences. Les prérequis varient selon les modules ; les niveaux ne sont pas supposés identiques.',
      'Supports prévus selon la formule : programme, exercices, ressources pédagogiques et retours sur le projet. Les logiciels, l’équipement et les conditions de connexion nécessaires sont indiqués avant le démarrage.'
    ],
    contactTitre: 'Construisons votre parcours d’apprentissage.',
    contactTexte: 'Indiquez votre niveau actuel, les compétences recherchées, vos disponibilités et, pour une équipe, le nombre de participants. Nous pourrons proposer un programme cohérent avec vos objectifs.',
    contactCta: 'Recevoir une proposition de formation'
  }
]

export function offreNumerique (slug: string) {
  return offresNumeriques.find(item => item.slug === slug)
}

export const lienOffreNumerique: Record<string, string> = {
  'Conception Logicielle et Développement': '/services/solutions-numeriques/conception-developpement',
  'Hébergement et nom de domaine': '/services/solutions-numeriques/hebergement-domaines',
  'Intégration IA dans vos processus': '/services/solutions-numeriques/agents-ia',
  'Référencement et marketing digital': '/services/solutions-numeriques/contenu-seo-marketing',
  'Refonte et maintenance': '/services/solutions-numeriques/refonte-maintenance',
  'Formation professionnelle': '/services/solutions-numeriques/formation-developpement-web'
}
