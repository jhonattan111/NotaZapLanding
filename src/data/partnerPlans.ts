// Pacotes do Programa de Parceiros (revenda com marca NotaZap).
// Valores conforme tabela comercial. O escritório paga mensalidade fixa por
// cartão recorrente, independente da ocupação, e revende ao cliente final por
// no mínimo R$ 29,90/mês.

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

/** WhatsApp comercial para Starter, Growth e Pro: (22) 99216-4166. */
const PHONE_SGP = '5522992164166';
/** WhatsApp comercial para o Master: (22) 99961-2008. */
const PHONE_MASTER = '5522999612008';

export const PARTNER_PLANS: PartnerPlan[] = [
  {
    key: 'starter',
    name: 'Starter',
    clientes: 'Até 10',
    mensalidade: '149,90',
    custoCliente: '14,99',
    revenda: '29,90',
    margem: '14,91',
    phone: PHONE_SGP,
  },
  {
    key: 'growth',
    name: 'Growth',
    clientes: 'Até 30',
    mensalidade: '349,90',
    custoCliente: '11,66',
    revenda: '29,90',
    margem: '18,24',
    phone: PHONE_SGP,
  },
  {
    key: 'pro',
    name: 'Pro',
    clientes: 'Até 70',
    mensalidade: '649,90',
    custoCliente: '9,28',
    revenda: '29,90',
    margem: '20,62',
    phone: PHONE_SGP,
  },
  {
    key: 'master',
    name: 'Master',
    clientes: 'Ilimitado',
    mensalidade: '999,90',
    custoCliente: '< 8,33*',
    revenda: '29,90',
    margem: '> 21,57',
    phone: PHONE_MASTER,
  },
];
