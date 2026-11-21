// ==========================================================================
// Nest Minds — conteúdo do site, separado do código (brief §14).
// Três experiências comerciais (PT/EN/ES), não tradução palavra-a-palavra.
// Dados por confirmar ficam em settings.ts como TODO_VERIFY.
// ==========================================================================

export const locales = ['pt', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export const localeLabel: Record<Locale, string> = { pt: 'PT', en: 'EN', es: 'ES' };
export const htmlLang: Record<Locale, string> = { pt: 'pt-PT', en: 'en', es: 'es' };

export type NavItem = { label: string; href: string };
export type Card = { icon: string; title: string; text: string };
export type Step = { title: string; text: string };

export interface LocaleContent {
  meta: { title: string; description: string };
  nav: NavItem[];
  cta: { book: string; team: string; proposal: string };
  hero: { eyebrow: string; h1: string; sub: string; visualNote: string };
  services: { eyebrow: string; title: string; intro: string; items: Card[] };
  neuro: { eyebrow: string; title: string; intro: string; items: Card[]; note: string };
  how: { eyebrow: string; title: string; intro: string; steps: Step[] };
  modalities: { eyebrow: string; title: string; items: Card[] };
  team: { eyebrow: string; title: string; text: string };
  corporate: { eyebrow: string; title: string; text: string; items: Card[]; cta: string };
  resources: { eyebrow: string; title: string; text: string };
  contact: { eyebrow: string; title: string; text: string; cta: string; emergency: string };
  footer: { tagline: string; colA: string; colB: string; linksA: NavItem[]; linksB: NavItem[]; legal: string };
}

export const site: Record<Locale, LocaleContent> = {
  // ---------------------------------------------------------------- PT
  pt: {
    meta: {
      title: 'Nest Minds — Psicologia e bem-estar em Lisboa e online',
      description:
        'Acompanhamento psicológico especializado para adultos, crianças, adolescentes e famílias, em Lisboa (Lumiar) e online. Autismo, PHDA, avaliação e formação para empresas.',
    },
    nav: [
      { label: 'Início', href: '/pt/' },
      { label: 'Psicologia Clínica', href: '/pt/#servicos' },
      { label: 'Neurodesenvolvimento', href: '/pt/#neuro' },
      { label: 'Empresas', href: '/pt/#empresas' },
      { label: 'Equipa', href: '/pt/#equipa' },
      { label: 'Contactos', href: '/pt/#contacto' },
    ],
    cta: { book: 'Marcar consulta', team: 'Conhecer a equipa', proposal: 'Pedir proposta' },
    hero: {
      eyebrow: 'Nest Minds · Psicologia e bem-estar',
      h1: 'Um espaço para cuidar da mente, em todas as fases da vida.',
      sub: 'Acompanhamento psicológico especializado para adultos, crianças, adolescentes e famílias, em Lisboa e online.',
      visualNote: 'Espaço de atendimento no Lumiar, Lisboa (imagem a adicionar).',
    },
    services: {
      eyebrow: 'Psicologia Clínica',
      title: 'Acompanhamento para cada fase da vida',
      intro: 'Uma equipa coordenada, com diferentes especializações, para responder a cada pessoa — não uma lista indiferenciada de profissionais.',
      items: [
        { icon: 'adult', title: 'Adultos', text: 'Ansiedade, depressão, stress, burnout, autoestima, trauma, relações e transições de vida.' },
        { icon: 'child', title: 'Crianças e adolescentes', text: 'Emoções, comportamento, relações e escola, com trabalho próximo dos pais e cuidadores.' },
        { icon: 'assess', title: 'Avaliação psicológica', text: 'Avaliação clínica, emocional, cognitiva e/ou neuropsicológica, conforme a situação.' },
      ],
    },
    neuro: {
      eyebrow: 'Neurodesenvolvimento',
      title: 'Autismo e PHDA, com rigor e respeito',
      intro: 'Avaliação e acompanhamento centrados na pessoa, com abordagem respeitosa da neurodiversidade.',
      items: [
        { icon: 'brain', title: 'Autismo', text: 'Avaliação especializada, acompanhamento e apoio a famílias e necessidades escolares e do adulto.' },
        { icon: 'focus', title: 'PHDA', text: 'Avaliação e acompanhamento: atenção, funções executivas, organização e autorregulação.' },
      ],
      note: 'A disponibilidade de cada avaliação depende dos profissionais habilitados; confirmamos consigo antes de marcar.',
    },
    how: {
      eyebrow: 'Como funciona',
      title: 'A primeira consulta, passo a passo',
      intro: 'Um processo simples e sem compromisso clínico até perceber se fazemos sentido para si.',
      steps: [
        { title: 'Pedido de contacto', text: 'Diz-nos o que procura, idioma e modalidade preferidos.' },
        { title: 'Encaminhamento', text: 'Ajudamos a escolher o profissional mais adequado ao seu caso.' },
        { title: 'Primeira sessão', text: 'Presencial em Lisboa ou online, para conhecer e definir objetivos.' },
        { title: 'Acompanhamento', text: 'Um plano ajustado a si, revisto ao longo do tempo.' },
      ],
    },
    modalities: {
      eyebrow: 'Presencial e online',
      title: 'Onde e como quiser',
      items: [
        { icon: 'pin', title: 'Presencial em Lisboa', text: 'No nosso espaço de atendimento no Lumiar.' },
        { icon: 'laptop', title: 'Online em Portugal', text: 'Consultas por vídeo, com a mesma qualidade clínica, onde a prestação é permitida.' },
      ],
    },
    team: {
      eyebrow: 'Equipa',
      title: 'Uma equipa em quem pode confiar',
      text: 'Psicólogos com formação, especialização e experiência verificadas. Os perfis completos da equipa são publicados após validação — nunca apresentamos profissionais ou credenciais fictícios.',
    },
    corporate: {
      eyebrow: 'Empresas e organizações',
      title: 'Bem-estar psicológico para equipas',
      text: 'Soluções para problemas concretos de equipas, lideranças e organizações, com práticas responsáveis de psicologia do trabalho.',
      items: [
        { icon: 'talk', title: 'Nest Minds Talks', text: 'Workshops e palestras interativas para equipas, RH e lideranças.' },
        { icon: 'academy', title: 'Nest Minds Academy', text: 'Programas formativos em várias sessões, com exercícios práticos.' },
        { icon: 'care', title: 'Corporate Care', text: 'Acordo trimestral ou anual, adaptado à organização.' },
      ],
      cta: 'Pedir proposta',
    },
    resources: {
      eyebrow: 'Recursos',
      title: 'Conteúdos assinados por profissionais',
      text: 'Artigos informativos, com linguagem acessível e não estigmatizante. Em preparação.',
    },
    contact: {
      eyebrow: 'Contacto e marcações',
      title: 'Dê o primeiro passo',
      text: 'Envie-nos um pedido de contacto e indique o idioma, a modalidade e a área de interesse. Entramos em contacto para o ajudar a encontrar o profissional certo.',
      cta: 'Marcar consulta',
      emergency: 'A Nest Minds não é um serviço de urgência. Em situação de emergência, contacte o 112 ou o serviço de saúde local.',
    },
    footer: {
      tagline: 'Psicologia, neurodesenvolvimento e bem-estar. Uma marca PsiNest, Lda.',
      colA: 'Serviços',
      colB: 'Nest Minds',
      linksA: [
        { label: 'Psicologia Clínica', href: '/pt/#servicos' },
        { label: 'Neurodesenvolvimento', href: '/pt/#neuro' },
        { label: 'Empresas', href: '/pt/#empresas' },
      ],
      linksB: [
        { label: 'Equipa', href: '/pt/#equipa' },
        { label: 'Contactos', href: '/pt/#contacto' },
      ],
      legal: 'Política de privacidade',
    },
  },

  // ---------------------------------------------------------------- EN
  en: {
    meta: {
      title: 'Nest Minds — English-speaking psychologists in Lisbon & online',
      description:
        'Psychological care in English, in Lisbon and online where available. Support for adults, children and families, expat life, autism and ADHD, and corporate wellbeing.',
    },
    nav: [
      { label: 'Home', href: '/en/' },
      { label: 'Therapy in English', href: '/en/#servicos' },
      { label: 'Online Therapy', href: '/en/#modalities' },
      { label: 'Autism & ADHD', href: '/en/#neuro' },
      { label: 'For Companies', href: '/en/#empresas' },
      { label: 'Our Team', href: '/en/#equipa' },
      { label: 'Contact', href: '/en/#contacto' },
    ],
    cta: { book: 'Find a psychologist', team: 'Meet the team', proposal: 'Request a proposal' },
    hero: {
      eyebrow: 'Nest Minds · English-speaking psychologists',
      h1: 'Feel understood. Wherever life takes you.',
      sub: 'Psychological care in English, in Lisbon and online where available. Dedicated support for adults, children and families.',
      visualNote: 'Our practice in Lumiar, Lisbon (photo to be added).',
    },
    services: {
      eyebrow: 'Therapy in English',
      title: 'English-speaking therapy in Lisbon',
      intro: 'In-person in Lisbon and online in Portugal — a coordinated team of psychologists, not an undifferentiated list.',
      items: [
        { icon: 'adult', title: 'Adults', text: 'Anxiety, depression, stress, burnout, self-esteem, trauma, relationships and life transitions.' },
        { icon: 'child', title: 'Children & families', text: 'Support for international children and families, working closely with parents.' },
        { icon: 'globe', title: 'Expat & international life', text: 'Relocation, adaptation and multicultural relationships — without pathologising migration.' },
      ],
    },
    neuro: {
      eyebrow: 'Autism & ADHD',
      title: 'Neurodevelopmental support',
      intro: 'Assessment and support centred on the person, with a respectful approach to neurodiversity.',
      items: [
        { icon: 'brain', title: 'Autism', text: 'Specialised assessment, support and guidance for families, school and adult needs.' },
        { icon: 'focus', title: 'ADHD', text: 'Assessment and support: attention, executive function, organisation and self-regulation.' },
      ],
      note: 'Availability of each assessment depends on qualified professionals; we confirm with you before booking.',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Your first session, step by step',
      intro: 'A simple process with no clinical commitment until you decide we are the right fit.',
      steps: [
        { title: 'Request contact', text: 'Tell us what you are looking for, your preferred language and format.' },
        { title: 'Matching', text: 'We help you find the psychologist best suited to you.' },
        { title: 'First session', text: 'In Lisbon or online, to get to know each other and set goals.' },
        { title: 'Ongoing care', text: 'A plan tailored to you, reviewed over time.' },
      ],
    },
    modalities: {
      eyebrow: 'In-person & online',
      title: 'Online therapy in English',
      items: [
        { icon: 'pin', title: 'In person in Lisbon', text: 'At our practice in Lumiar.' },
        { icon: 'laptop', title: 'Online where available', text: 'Video sessions with the same clinical quality, subject to eligibility by country.' },
      ],
    },
    team: {
      eyebrow: 'Our team',
      title: 'A team you can trust',
      text: 'Psychologists with verified training, specialisation and genuine fluency. Full team profiles are published after validation — we never show fictitious professionals or credentials.',
    },
    corporate: {
      eyebrow: 'For companies',
      title: 'Corporate mental health & wellbeing',
      text: 'Solutions for real challenges facing teams, leaders and organisations, grounded in responsible workplace psychology.',
      items: [
        { icon: 'talk', title: 'Nest Minds Talks', text: 'Interactive workshops and talks for teams, HR and leadership.' },
        { icon: 'academy', title: 'Nest Minds Academy', text: 'Multi-session training programmes with practical exercises.' },
        { icon: 'care', title: 'Corporate Care', text: 'A quarterly or annual agreement tailored to your organisation.' },
      ],
      cta: 'Request a proposal',
    },
    resources: {
      eyebrow: 'Resources',
      title: 'Articles written by professionals',
      text: 'Clear, non-stigmatising, informative content. Coming soon.',
    },
    contact: {
      eyebrow: 'Contact & booking',
      title: 'Take the first step',
      text: 'Send us a request and tell us your language, format and area of interest. We will help you find the right psychologist.',
      cta: 'Book a session',
      emergency: 'Nest Minds is not an emergency service. In a crisis, contact your local emergency number or health service.',
    },
    footer: {
      tagline: 'Psychology, neurodevelopment and wellbeing. A PsiNest, Lda brand.',
      colA: 'Services',
      colB: 'Nest Minds',
      linksA: [
        { label: 'Therapy in English', href: '/en/#servicos' },
        { label: 'Autism & ADHD', href: '/en/#neuro' },
        { label: 'For Companies', href: '/en/#empresas' },
      ],
      linksB: [
        { label: 'Our Team', href: '/en/#equipa' },
        { label: 'Contact', href: '/en/#contacto' },
      ],
      legal: 'Privacy policy',
    },
  },

  // ---------------------------------------------------------------- ES
  es: {
    meta: {
      title: 'Nest Minds — Psicólogos en español en Lisboa y online',
      description:
        'Atención psicológica en español, presencial en Lisboa y online donde esté disponible. Apoyo para adultos, niños y familias, autismo y TDAH, y bienestar para empresas.',
    },
    nav: [
      { label: 'Inicio', href: '/es/' },
      { label: 'Psicología en Español', href: '/es/#servicos' },
      { label: 'Terapia Online', href: '/es/#modalities' },
      { label: 'Autismo y TDAH', href: '/es/#neuro' },
      { label: 'Empresas', href: '/es/#empresas' },
      { label: 'Equipo', href: '/es/#equipa' },
      { label: 'Contacto', href: '/es/#contacto' },
    ],
    cta: { book: 'Encontrar psicólogo', team: 'Conocer al equipo', proposal: 'Solicitar propuesta' },
    hero: {
      eyebrow: 'Nest Minds · Psicología en español',
      h1: 'Un espacio donde sentirte comprendido, estés donde estés.',
      sub: 'Atención psicológica en español, presencial en Lisboa y online donde esté disponible. Apoyo especializado para adultos, niños, adolescentes y familias.',
      visualNote: 'Nuestro espacio en Lumiar, Lisboa (imagen por añadir).',
    },
    services: {
      eyebrow: 'Psicología en español',
      title: 'Psicólogos que atienden en español en Lisboa',
      intro: 'Presencial en Lisboa y online en Portugal — un equipo coordinado de psicólogos, no una lista indiferenciada.',
      items: [
        { icon: 'adult', title: 'Adultos', text: 'Ansiedad, depresión, estrés, burnout, autoestima, trauma, relaciones y transiciones vitales.' },
        { icon: 'child', title: 'Niños y familias', text: 'Apoyo a la infancia y a las familias, trabajando de cerca con madres y padres.' },
        { icon: 'globe', title: 'Vida internacional', text: 'Adaptación, mudanza de país y relaciones multiculturales, sin patologizar la migración.' },
      ],
    },
    neuro: {
      eyebrow: 'Autismo y TDAH',
      title: 'Apoyo al neurodesarrollo',
      intro: 'Evaluación y acompañamiento centrados en la persona, con un enfoque respetuoso de la neurodiversidad.',
      items: [
        { icon: 'brain', title: 'Autismo', text: 'Evaluación especializada, acompañamiento y apoyo a familias, escuela y necesidades del adulto.' },
        { icon: 'focus', title: 'TDAH', text: 'Evaluación y acompañamiento: atención, funciones ejecutivas, organización y autorregulación.' },
      ],
      note: 'La disponibilidad de cada evaluación depende de los profesionales habilitados; lo confirmamos antes de la cita.',
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Tu primera sesión, paso a paso',
      intro: 'Un proceso sencillo y sin compromiso clínico hasta decidir si encajamos contigo.',
      steps: [
        { title: 'Solicitar contacto', text: 'Cuéntanos qué buscas y tu idioma y modalidad preferidos.' },
        { title: 'Derivación', text: 'Te ayudamos a elegir al profesional más adecuado.' },
        { title: 'Primera sesión', text: 'En Lisboa u online, para conoceros y definir objetivos.' },
        { title: 'Seguimiento', text: 'Un plan adaptado a ti, revisado con el tiempo.' },
      ],
    },
    modalities: {
      eyebrow: 'Presencial y online',
      title: 'Psicología online en español',
      items: [
        { icon: 'pin', title: 'Presencial en Lisboa', text: 'En nuestro espacio del Lumiar.' },
        { icon: 'laptop', title: 'Online donde esté disponible', text: 'Sesiones por vídeo con la misma calidad clínica, según elegibilidad por país.' },
      ],
    },
    team: {
      eyebrow: 'Equipo',
      title: 'Un equipo en quien confiar',
      text: 'Psicólogos con formación, especialización y fluidez verificadas. Los perfiles completos se publican tras su validación — nunca mostramos profesionales ni credenciales ficticios.',
    },
    corporate: {
      eyebrow: 'Empresas y organizaciones',
      title: 'Bienestar psicológico para equipos',
      text: 'Soluciones para retos reales de equipos, liderazgo y organizaciones, con prácticas responsables de psicología del trabajo.',
      items: [
        { icon: 'talk', title: 'Nest Minds Talks', text: 'Talleres y charlas interactivas para equipos, RR. HH. y liderazgo.' },
        { icon: 'academy', title: 'Nest Minds Academy', text: 'Programas formativos en varias sesiones, con ejercicios prácticos.' },
        { icon: 'care', title: 'Corporate Care', text: 'Un acuerdo trimestral o anual adaptado a la organización.' },
      ],
      cta: 'Solicitar propuesta',
    },
    resources: {
      eyebrow: 'Recursos',
      title: 'Contenidos firmados por profesionales',
      text: 'Artículos informativos, con lenguaje accesible y no estigmatizante. En preparación.',
    },
    contact: {
      eyebrow: 'Contacto y citas',
      title: 'Da el primer paso',
      text: 'Envíanos una solicitud e indícanos idioma, modalidad y área de interés. Te ayudamos a encontrar al psicólogo adecuado.',
      cta: 'Solicitar cita',
      emergency: 'Nest Minds no es un servicio de urgencias. En caso de emergencia, contacta con el número local de emergencias o tu servicio de salud.',
    },
    footer: {
      tagline: 'Psicología, neurodesarrollo y bienestar. Una marca de PsiNest, Lda.',
      colA: 'Servicios',
      colB: 'Nest Minds',
      linksA: [
        { label: 'Psicología en Español', href: '/es/#servicos' },
        { label: 'Autismo y TDAH', href: '/es/#neuro' },
        { label: 'Empresas', href: '/es/#empresas' },
      ],
      linksB: [
        { label: 'Equipo', href: '/es/#equipa' },
        { label: 'Contacto', href: '/es/#contacto' },
      ],
      legal: 'Política de privacidad',
    },
  },
};
