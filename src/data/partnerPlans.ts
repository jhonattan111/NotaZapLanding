// Pacotes do Programa de Parceiros (revenda com marca NotaZap).
// Valores em `partnerPlans.json` (editável em /admin). O escritório paga
// mensalidade fixa por cartão recorrente, independente da ocupação, e revende
// ao cliente final por no mínimo o valor de `revenda`.

import raw from './partnerPlans.json';

export interface PartnerPlan {
  key: string;
  /** Nome do pacote. */
  name: string;
  /** Clientes ativos incluídos. */
  clientes: string;
  /** Mensalidade NotaZap paga pelo escritório (R$/mês), só o número. */
  mensalidade: string;
  /** Custo por cliente/mês para o contador (R$). Linha verde. */
  custoCliente: string;
  /** Preço mínimo de revenda ao cliente final (R$/mês). Linha amarela. */
  revenda: string;
  /** Margem bruta mínima por cliente (R$/mês). Linha verde. */
  margem: string;
  /** WhatsApp de contato deste pacote (formato internacional, só dígitos). */
  phone: string;
}

export const PARTNER_PLANS: PartnerPlan[] = raw.plans as PartnerPlan[];
