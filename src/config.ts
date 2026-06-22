// Configuração central da landing — placeholders a confirmar antes do lançamento.
// Veja "Conteúdo a confirmar" no README.

/** Número do WhatsApp (formato internacional, só dígitos). Ex.: 5581999999999. */
export const WHATSAPP_NUMBER = '5522997303889';

/** Mensagem pré-preenchida ao abrir a conversa (CTA do cliente final). */
export const WHATSAPP_TEXT = 'oi';

/** Link wa.me usado nos CTAs do cliente final (B2C). */
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

/**
 * Link wa.me usado nos CTAs do Programa de Parceiros (B2B).
 * `phone` permite um número específico por pacote (formato internacional, só
 * dígitos); se omitido, usa o WhatsApp comercial padrão.
 */
export function partnerWhatsappLink(plano?: string, phone?: string): string {
  const numero = phone ?? WHATSAPP_NUMBER;
  const texto = plano
    ? `Quero ser parceiro NotaZap — pacote ${plano}.`
    : 'Quero ser parceiro NotaZap.';
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

/**
 * Dados da empresa usados nas páginas legais (política de privacidade e termos).
 * Os valores marcados como "a confirmar" são placeholders — substituir pelos
 * dados jurídicos reais antes do lançamento.
 */
export const COMPANY = {
  /** Nome comercial / marca. */
  nome: 'NotaZap',
  /** Razão social registrada. */
  razaoSocial: 'EQUILIBRI APP SISTEMAS LTDA - ME',
  /** CNPJ. */
  cnpj: '33.733.419/0001-01',
  /** Endereço da sede. */
  endereco: 'R ANTONIO LOPES SERTA 185 ANDAR 1 SALA',
  /** E-mail de contato geral. */
  email: 'contato@notazap.com.br',
  /** Canal do Encarregado de Dados (DPO), conforme LGPD. */
  emailPrivacidade: 'privacidade@notazap.com.br',
  /** Comarca/foro eleito para os Termos de Uso. */
  foro: 'Nova Friburgo/RJ',
  /** Data da última atualização dos documentos legais. */
  atualizacao: '22 de junho de 2026',
} as const;
