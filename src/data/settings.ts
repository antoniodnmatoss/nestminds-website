// ==========================================================================
// Nest Minds — configuração central. Dados por confirmar = TODO_VERIFY.
// Nunca inventar morada, contactos, NIPC, ERS, preços ou profissionais.
// A equipa preenche e valida (ver content-approval-checklist.md).
// ==========================================================================

export const TODO = 'TODO_VERIFY';

export const settings = {
  brand: 'Nest Minds',
  legalEntity: 'PsiNest, Lda.',
  siteUrl: 'https://nestminds-website.vercel.app', // → https://nestminds.pt quando ativar

  // --- Contactos (POR CONFIRMAR antes de publicar) ---
  email: TODO,          // ex. geral@nestminds.pt
  phone: TODO,
  whatsapp: TODO,
  address: {
    line: TODO,         // morada final no Lumiar, Lisboa
    city: 'Lisboa',
    area: 'Lumiar',
    mapsUrl: TODO,
  },
  hours: TODO,

  // --- Formulários ---
  // Web3Forms: colar a access key quando existir; enquanto for null, o
  // formulário mostra-se mas o envio real fica assinalado como pendente.
  web3formsKey: null as string | null,

  // --- Dados legais (POR CONFIRMAR) ---
  nipc: TODO,
  ersNumber: TODO,

  // --- Feature flags: só ligar quando houver conteúdo/validação real ---
  flags: {
    booking: false,          // integração de marcações real
    teamPublished: false,    // perfis de psicólogos validados
    pricesPublic: false,     // preços B2B visíveis (default: "Pedir proposta")
    resources: false,        // secção de artigos
  },

  social: {
    instagram: TODO,
    linkedin: TODO,
  },
};
