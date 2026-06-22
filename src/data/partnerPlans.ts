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
}

export const PARTNER_PLANS: PartnerPlan[] = [
  {
    key: 'starter',
    name: 'Starter',
    clientes: 'Até 10',
    mensalidade: '149,90',
    custoCliente: '14,99',
    revenda: '29,90',
    margem: '14,91',
  },
  {
    key: 'growth',
    name: 'Growth',
    clientes: 'Até 30',
    mensalidade: '349,90',
    custoCliente: '11,66',
    revenda: '29,90',
    margem: '18,24',
  },
  {
    key: 'pro',
    name: 'Pro',
    clientes: 'Até 70',
    mensalidade: '649,90',
    custoCliente: '9,28',
    revenda: '29,90',
    margem: '20,62',
  },
  {
    key: 'master',
    name: 'Master',
    clientes: 'Ilimitado',
    mensalidade: '999,90',
    custoCliente: '< 8,33*',
    revenda: '29,90',
    margem: '> 21,57',
  },
];
