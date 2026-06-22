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

/** Link wa.me usado nos CTAs do Programa de Parceiros (B2B). */
export function partnerWhatsappLink(plano?: string): string {
  const texto = plano
    ? `Quero ser parceiro NotaZap — pacote ${plano}.`
    : 'Quero ser parceiro NotaZap.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
}
