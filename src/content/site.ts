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

// Landing page B2B dedicada (brief §híbrido; estrutura: benchmark §7).
// Página de campanha focada: uma promessa, prova, e um só objetivo (pedir proposta).
export interface CompaniesContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; sub: string; cta: string; back: string; points: string[] };
  offers: { eyebrow: string; title: string; intro: string; items: Card[] };
  why: { eyebrow: string; title: string; items: Card[] };
  how: { eyebrow: string; title: string; steps: Step[] };
  confidentiality: { title: string; text: string };
  band: { title: string; text: string; cta: string };
  form: {
    eyebrow: string; title: string; text: string;
    labels: { name: string; company: string; email: string; size: string; message: string };
    submit: string; privacy: string; pending: string;
  };
}

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
  companies: CompaniesContent;
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
      { label: 'Equipa', href: '/pt/#equipa' },
      { label: 'Empresas', href: '/pt/empresas' },
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
    companies: {
      meta: {
        title: 'Psicologia para empresas em Lisboa e online | Nest Minds',
        description:
          'Bem-estar psicológico para equipas: protocolos para colaboradores, workshops, bolsas de consultas e programas à medida. Em português, inglês e espanhol. Peça uma proposta.',
      },
      hero: {
        eyebrow: 'Empresas e organizações',
        h1: 'Cuidar das pessoas também é cuidar das empresas.',
        sub: 'Bem-estar psicológico para equipas, lideranças e organizações — em Lisboa e online, com atendimento em português, inglês e espanhol.',
        cta: 'Pedir proposta',
        back: '← Voltar ao site Nest Minds',
        points: [
          'Atendimento em português, inglês e espanhol',
          'Presencial em Lisboa e online',
          'Confidencialidade e reporte agregado',
        ],
      },
      offers: {
        eyebrow: 'O que oferecemos',
        title: 'Quatro formas de começar',
        intro: 'Pode começar simples, com um protocolo sem custo, e evoluir para formação e acompanhamento contínuo.',
        items: [
          { icon: 'care', title: 'Protocolo empresarial', text: 'Condições especiais de consulta para colaboradores e famílias, sem custo de adesão para a empresa.' },
          { icon: 'talk', title: 'Workshops e formação', text: 'Sessões práticas sobre stress, burnout, comunicação, inteligência emocional e parentalidade — online ou presenciais.' },
          { icon: 'heart', title: 'Bolsas de consultas', text: 'A empresa disponibiliza um conjunto de sessões aos colaboradores, com marcação simples e sigilo clínico.' },
          { icon: 'academy', title: 'Programas à medida', text: 'Acompanhamento contínuo e intervenções desenhadas para os objetivos de cada organização.' },
        ],
      },
      why: {
        eyebrow: 'Porquê a Nest Minds',
        title: 'O que nos distingue',
        items: [
          { icon: 'globe', title: 'Atendimento multilingue', text: 'Equipas internacionais acompanhadas em português, inglês e espanhol.' },
          { icon: 'brain', title: 'Parentalidade e neurodesenvolvimento', text: 'Uma especialização que vai além do catálogo corporativo genérico.' },
          { icon: 'adult', title: 'Equipa clínica verificada', text: 'Psicólogos com formação e especialização reais, não uma bolsa anónima.' },
        ],
      },
      how: {
        eyebrow: 'Como avançamos',
        title: 'Da conversa à proposta',
        intro: 'Um processo simples, sem compromisso, para perceber o que faz sentido para a vossa equipa.',
        steps: [
          { title: 'Pedido de proposta', text: 'Diga-nos a dimensão da equipa e o que procura.' },
          { title: 'Proposta à medida', text: 'Enviamos uma proposta clara, com formatos e condições.' },
          { title: 'Arranque', text: 'Agendamos os workshops ou ativamos o protocolo e as bolsas.' },
        ],
      },
      confidentiality: {
        title: 'Confidencialidade e rigor',
        text: 'O reporte à empresa é sempre agregado: o conteúdo das sessões fica entre o profissional e o colaborador. Cumprimos as regras de proteção de dados e não prometemos resposta de urgência nem formação certificada sem a estrutura adequada.',
      },
      band: {
        title: 'Comece a cuidar da sua equipa.',
        text: 'Conte-nos sobre a vossa equipa e enviamos uma proposta adaptada à vossa realidade.',
        cta: 'Pedir proposta',
      },
      form: {
        eyebrow: 'Pedido de proposta',
        title: 'Falemos sobre a vossa equipa',
        text: 'Deixe os seus dados e o que procura. Respondemos com uma proposta adaptada à vossa organização.',
        labels: {
          name: 'Nome',
          company: 'Empresa',
          email: 'Email profissional',
          size: 'Nº de colaboradores (opcional)',
          message: 'O que procura',
        },
        submit: 'Pedir proposta',
        privacy: 'Ao enviar, autoriza o contacto da Nest Minds para responder ao seu pedido.',
        pending: 'Formulário em configuração. Enquanto o envio não está ativo, contacte-nos pelos canais habituais do site.',
      },
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
        { label: 'Empresas', href: '/pt/empresas' },
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
      { label: 'Autism & ADHD', href: '/en/#neuro' },
      { label: 'Online Therapy', href: '/en/#modalities' },
      { label: 'Our Team', href: '/en/#equipa' },
      { label: 'For Companies', href: '/en/companies' },
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
    companies: {
      meta: {
        title: 'Workplace mental health for international teams in Lisbon | Nest Minds',
        description:
          'Psychological support, workshops and training for companies with international teams in Lisbon — in English, Portuguese and Spanish, in person and online. Request a proposal.',
      },
      hero: {
        eyebrow: 'Workplace wellbeing · Lisbon',
        h1: 'Mental health support your whole team can actually use.',
        sub: 'For companies in Lisbon with international teams: psychological support, workshops and training delivered in your people’s own language — English, Portuguese and Spanish.',
        cta: 'Request a proposal',
        back: '← Back to Nest Minds',
        points: [
          'Care in English, Portuguese & Spanish',
          'In person in Lisbon and online',
          'EU data protection, aggregated reporting',
        ],
      },
      offers: {
        eyebrow: 'What we offer',
        title: 'Four ways to start',
        intro: 'Begin with a no-cost protocol and grow into workshops and ongoing care as your team needs it.',
        items: [
          { icon: 'talk', title: 'Workshops & training', text: 'Practical sessions on stress, burnout, communication, leadership and emotional intelligence — in English, online or on-site.' },
          { icon: 'heart', title: 'Employee session packs', text: 'The company funds a set of confidential sessions your people can book directly, with no language barrier.' },
          { icon: 'care', title: 'Employee protocol', text: 'Preferential consultation terms for employees and their families, at no joining cost to the company.' },
          { icon: 'academy', title: 'Tailored programmes', text: 'Ongoing support and interventions designed around your organisation’s goals and culture.' },
        ],
      },
      why: {
        eyebrow: 'Why Nest Minds',
        title: 'Built for international teams in Lisbon',
        items: [
          { icon: 'globe', title: 'No language barrier', text: 'Your team is supported in English, Portuguese and Spanish — not forced into a second language when it matters most.' },
          { icon: 'brain', title: 'Beyond the generic EAP', text: 'Specialist depth in parenting, neurodiversity and life abroad — relevant to a relocated, multicultural workforce.' },
          { icon: 'adult', title: 'A verified clinical team', text: 'Psychologists with real training and specialisation, not an anonymous pool behind an app.' },
        ],
      },
      how: {
        eyebrow: 'How we work',
        title: 'From first call to kick-off',
        intro: 'A simple, no-commitment process to find what fits your team.',
        steps: [
          { title: 'Request a proposal', text: 'Tell us your team size, languages and what you are looking for.' },
          { title: 'Tailored proposal', text: 'We send a clear one-page proposal with formats and terms.' },
          { title: 'Kick-off', text: 'We schedule the workshops or activate the protocol and session packs.' },
        ],
      },
      confidentiality: {
        title: 'Confidentiality & EU data protection',
        text: 'Reporting to the company is always aggregated: what happens in sessions stays between the professional and the employee. We follow EU data-protection rules and never promise emergency response or certified training without the right structure in place.',
      },
      band: {
        title: 'Give your international team somewhere to turn.',
        text: 'Tell us about your team and we’ll come back with a proposal tailored to how you actually work.',
        cta: 'Request a proposal',
      },
      form: {
        eyebrow: 'Request a proposal',
        title: 'Let’s talk about your team',
        text: 'Leave your details and what you are looking for. We will reply with a proposal tailored to your organisation.',
        labels: {
          name: 'Name',
          company: 'Company',
          email: 'Work email',
          size: 'Number of employees (optional)',
          message: 'What you are looking for',
        },
        submit: 'Request a proposal',
        privacy: 'By submitting, you allow Nest Minds to contact you about your request.',
        pending: 'Form being configured. While submission is not yet live, please reach us through the site’s usual channels.',
      },
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
        { label: 'For Companies', href: '/en/companies' },
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
      { label: 'Autismo y TDAH', href: '/es/#neuro' },
      { label: 'Terapia Online', href: '/es/#modalities' },
      { label: 'Equipo', href: '/es/#equipa' },
      { label: 'Empresas', href: '/es/empresas' },
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
    companies: {
      meta: {
        title: 'Psicología para empresas en Lisboa y online | Nest Minds',
        description:
          'Bienestar psicológico para equipos: protocolos para empleados, talleres, bonos de sesiones y programas a medida. En español, inglés y portugués. Solicita una propuesta.',
      },
      hero: {
        eyebrow: 'Empresas y organizaciones',
        h1: 'Cuidar de las personas también es cuidar de la empresa.',
        sub: 'Bienestar psicológico para equipos, liderazgo y organizaciones — en Lisboa y online, con atención en español, inglés y portugués.',
        cta: 'Solicitar propuesta',
        back: '← Volver a Nest Minds',
        points: [
          'Atención en español, inglés y portugués',
          'Presencial en Lisboa y online',
          'Confidencialidad e informe agregado',
        ],
      },
      offers: {
        eyebrow: 'Qué ofrecemos',
        title: 'Cuatro maneras de empezar',
        intro: 'Puedes empezar de forma sencilla, con un protocolo sin coste, y crecer hacia formación y acompañamiento continuo.',
        items: [
          { icon: 'care', title: 'Protocolo de empresa', text: 'Condiciones preferentes de consulta para empleados y familias, sin coste de adhesión para la empresa.' },
          { icon: 'talk', title: 'Talleres y formación', text: 'Sesiones prácticas sobre estrés, burnout, comunicación, inteligencia emocional y parentalidad — online o presenciales.' },
          { icon: 'heart', title: 'Bonos de sesiones', text: 'La empresa ofrece un conjunto de sesiones a los empleados, con reserva sencilla y confidencialidad clínica.' },
          { icon: 'academy', title: 'Programas a medida', text: 'Acompañamiento continuo e intervenciones diseñadas para los objetivos de cada organización.' },
        ],
      },
      why: {
        eyebrow: 'Por qué Nest Minds',
        title: 'Lo que nos distingue',
        items: [
          { icon: 'globe', title: 'Atención multilingüe', text: 'Equipos internacionales atendidos en español, inglés y portugués.' },
          { icon: 'brain', title: 'Parentalidad y neurodesarrollo', text: 'Una especialización que va más allá del catálogo corporativo genérico.' },
          { icon: 'adult', title: 'Un equipo clínico verificado', text: 'Psicólogos con formación y especialización reales, no una bolsa anónima.' },
        ],
      },
      how: {
        eyebrow: 'Cómo avanzamos',
        title: 'De la conversación a la propuesta',
        intro: 'Un proceso sencillo y sin compromiso para encontrar lo que encaja con tu equipo.',
        steps: [
          { title: 'Solicitar propuesta', text: 'Cuéntanos el tamaño del equipo y qué buscáis.' },
          { title: 'Propuesta a medida', text: 'Enviamos una propuesta clara, con formatos y condiciones.' },
          { title: 'Puesta en marcha', text: 'Agendamos los talleres o activamos el protocolo y los bonos.' },
        ],
      },
      confidentiality: {
        title: 'Confidencialidad y rigor',
        text: 'El informe a la empresa es siempre agregado: lo que ocurre en las sesiones queda entre el profesional y la persona. Cumplimos las normas de protección de datos y no prometemos respuesta de urgencia ni formación certificada sin la estructura adecuada.',
      },
      band: {
        title: 'Empieza a cuidar de tu equipo.',
        text: 'Cuéntanos sobre tu equipo y te enviamos una propuesta adaptada a vuestra realidad.',
        cta: 'Solicitar propuesta',
      },
      form: {
        eyebrow: 'Solicitud de propuesta',
        title: 'Hablemos de tu equipo',
        text: 'Déjanos tus datos y lo que buscáis. Te responderemos con una propuesta adaptada a tu organización.',
        labels: {
          name: 'Nombre',
          company: 'Empresa',
          email: 'Email profesional',
          size: 'Nº de empleados (opcional)',
          message: 'Qué buscáis',
        },
        submit: 'Solicitar propuesta',
        privacy: 'Al enviar, autorizas a Nest Minds a contactarte para responder a tu solicitud.',
        pending: 'Formulario en configuración. Mientras el envío no está activo, contáctanos por los canales habituales del sitio.',
      },
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
        { label: 'Empresas', href: '/es/empresas' },
      ],
      linksB: [
        { label: 'Equipo', href: '/es/#equipa' },
        { label: 'Contacto', href: '/es/#contacto' },
      ],
      legal: 'Política de privacidad',
    },
  },
};
