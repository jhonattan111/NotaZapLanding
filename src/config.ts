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
