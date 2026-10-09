// Tout le contenu éditorial du site, en FR et en EN.
// Règle : rien d'inventé. Ce qui n'est pas confirmé par Valentin est marqué TODO.

export type Lang = 'fr' | 'en';

export const site = {
  name: 'Valentin Auclerc',
  email: 'valentin@auclerc.fr',
  github: 'https://github.com/ValentinAUCLERC',
  linkedin: 'https://www.linkedin.com/in/valentinauclerc',
  echody: 'https://www.echody.app',
  monEventsoft: {
    play: 'https://play.google.com/store/apps/details?id=com.intrapole.eventsoft',
    appStore: 'https://apps.apple.com/fr/app/eventsoft/id6747716734',
  },
};

const fr = {
  lang: 'fr',
  meta: {
    title: 'Valentin Auclerc · Ingénieur logiciel & fondateur d’Echody',
    description:
      'Ingénieur logiciel, 15 ans de PHP, directeur technique adjoint chez Intrapole / EventSoft et fondateur d’Echody, le carnet de voyage à partager.',
  },
  nav: { projects: 'Projets', skills: 'Savoir-faire', path: 'Parcours', contact: 'Contact', switch: 'EN', switchHref: '/en/' },
  hero: {
    hello: 'Bonjour 👋 moi c’est Valentin.',
    line1: 'Ingénieur.',
    line2: 'Fondateur.',
    sub: '15 ans de PHP, directeur technique adjoint chez Intrapole / EventSoft, et depuis 2026, ma propre startup : Echody.',
    chips: ['PHP · Symfony', 'React', 'DevOps', 'Lead produit', 'IA · Claude'],
  },
  projects: {
    echody: {
      kicker: 'Ma startup · accès anticipé',
      title: 'Echody',
      text: 'Le carnet de voyage à partager, à deux ou entre amis. Chaque souvenir, chaque photo, chaque étape à sa place, sur une carte.',
      // TODO(valentin) : valider cette ligne (signal utile pour Claude for Startups)
      detail: 'Conçu, développé et opéré en solo, avec Claude comme équipe d’ingénierie.',
      stack: ['Symfony 8', 'API Platform', 'React 19', 'Capacitor'],
      cta: 'Découvrir Echody',
    },
    mes: {
      kicker: 'Lead produit & tech · EventSoft',
      title: 'Mon EventSoft',
      text: 'L’app des vacataires de l’événementiel : planning, disponibilités, émargement, contrats. Une seule app pour tous leurs employeurs.',
      detail: 'J’en suis le lead et le responsable.',
      stack: ['iOS', 'Android', '1 k+ téléchargements'],
      cta: 'Voir sur Google Play',
    },
  },
  skills: {
    title: 'Ce que je sais faire',
    items: [
      { t: 'Back-end PHP', d: '15 ans de PHP, de l’applicatif legacy à Symfony 8 et API Platform. Du code qui tient en production.' },
      { t: 'Produit & équipe', d: 'Lead d’app, Product Owner (CSPO), habitué à faire avancer une équipe de devs en Scrum, et 4 ans mentor Product Manager chez OpenClassrooms.' },
      { t: 'DevOps & infra', d: 'Docker, CI/CD GitHub Actions, Proxmox, déploiements. J’aime que ce que je livre tourne tout seul.' },
      { t: 'IA appliquée', d: 'Agents de développement, intégrations LLM, bridge Symfony AI pour Mistral. L’IA au service du produit.' },
    ],
  },
  oss: {
    title: 'En open source',
    items: [
      { t: 'cao', d: 'Caisse à outils : compose son environnement local à partir de workspaces cloisonnés, secrets chiffrés compris.', tag: 'Go', href: 'https://github.com/ValentinAUCLERC/cao' },
      { t: 'Symfony AI × Mistral', d: 'Bridge Symfony AI pour l’API Mistral Conversations.', tag: 'PHP', href: 'https://github.com/ValentinAUCLERC/BridgeMistalConversation' },
    ],
  },
  path: {
    title: 'Parcours',
    // TODO(valentin) : année d'arrivée chez Intrapole
    items: [
      { y: '2026 →', t: 'Fondateur · Echody', d: 'Ma startup, développée sous mon EIRL.' },
      { y: 'TODO →', t: 'Directeur technique adjoint · Intrapole / EventSoft', d: 'Lead et responsable de l’app Mon EventSoft.' },
      { y: '2021 – 2025', t: 'Mentor Product Manager · OpenClassrooms', d: 'En indépendant : accompagnement d’étudiants de la formation Product Manager, des récits utilisateurs à la planification de sprints.' },
      { y: '2017 – 2021', t: 'Administrateur SI & Product Owner · Groupe Partnaire', d: 'Orléans. Product Owner d’une équipe Scrum : analyse des besoins utilisateurs, espace personnel Partnaire. Arrivé en stage, chargé de mission SI.' },
    ],
  },
  contact: {
    title: 'On en parle ?',
    text: 'Un projet, un poste, une question sur Echody : le plus simple, c’est un e-mail.',
  },
  footer: { legal: 'Mentions légales', legalHref: '/mentions-legales/', rights: 'Valentin Auclerc EIRL' },
};

const en: typeof fr = {
  lang: 'en',
  meta: {
    title: 'Valentin Auclerc · Software engineer & founder of Echody',
    description:
      'Software engineer with 15 years of PHP, deputy CTO at Intrapole / EventSoft and founder of Echody, the travel journal you share.',
  },
  nav: { projects: 'Projects', skills: 'Skills', path: 'Experience', contact: 'Contact', switch: 'FR', switchHref: '/' },
  hero: {
    hello: 'Hi 👋 I’m Valentin.',
    line1: 'Engineer.',
    line2: 'Founder.',
    sub: '15 years of PHP, deputy CTO at Intrapole / EventSoft, and since 2026, my own startup: Echody.',
    chips: ['PHP · Symfony', 'React', 'DevOps', 'Product lead', 'AI · Claude'],
  },
  projects: {
    echody: {
      kicker: 'My startup · early access',
      title: 'Echody',
      text: 'The travel journal you share, as a couple or with your crew. Every memory, every photo, every stop in its place, on a map.',
      detail: 'Designed, built and run solo, with Claude as my engineering team.',
      stack: ['Symfony 8', 'API Platform', 'React 19', 'Capacitor'],
      cta: 'Discover Echody',
    },
    mes: {
      kicker: 'Product & tech lead · EventSoft',
      title: 'Mon EventSoft',
      text: 'The app for event-industry staff: schedule, availability, digital sign-off, contracts. One app for all their employers.',
      detail: 'I am its lead and owner.',
      stack: ['iOS', 'Android', '1k+ downloads'],
      cta: 'See on Google Play',
    },
  },
  skills: {
    title: 'What I do',
    items: [
      { t: 'PHP back-end', d: '15 years of PHP, from legacy apps to Symfony 8 and API Platform. Code that holds up in production.' },
      { t: 'Product & team', d: 'App lead, Product Owner (CSPO), used to moving a dev team forward with Scrum, and 4 years as a Product Manager mentor at OpenClassrooms.' },
      { t: 'DevOps & infra', d: 'Docker, GitHub Actions CI/CD, Proxmox, deployments. I like what I ship to run on its own.' },
      { t: 'Applied AI', d: 'Coding agents, LLM integrations, a Symfony AI bridge for Mistral. AI in service of the product.' },
    ],
  },
  oss: {
    title: 'Open source',
    items: [
      { t: 'cao', d: 'A toolbox to compose your local setup from isolated workspaces, encrypted secrets included.', tag: 'Go', href: 'https://github.com/ValentinAUCLERC/cao' },
      { t: 'Symfony AI × Mistral', d: 'Symfony AI bridge for the Mistral Conversations API.', tag: 'PHP', href: 'https://github.com/ValentinAUCLERC/BridgeMistalConversation' },
    ],
  },
  path: {
    title: 'Experience',
    items: [
      { y: '2026 →', t: 'Founder · Echody', d: 'My startup, run through my own company.' },
      { y: 'TODO →', t: 'Deputy CTO · Intrapole / EventSoft', d: 'Lead and owner of the Mon EventSoft app.' },
      { y: '2021 – 2025', t: 'Product Manager mentor · OpenClassrooms', d: 'Freelance: mentoring students of the Product Manager program, from user stories to sprint planning.' },
      { y: '2017 – 2021', t: 'IS administrator & Product Owner · Groupe Partnaire', d: 'Orléans. Product Owner of a Scrum team: user needs analysis, the Partnaire customer portal. Started as an IS intern.' },
    ],
  },
  contact: {
    title: 'Let’s talk',
    text: 'A project, a role, a question about Echody: email is the simplest way.',
  },
  footer: { legal: 'Legal notice', legalHref: '/en/legal-notice/', rights: 'Valentin Auclerc EIRL' },
};

export const content = { fr, en };
