// Planos do cliente final (B2C) — emissão de notas fiscais pelo WhatsApp.
// Os valores em si vivem em `clientPlans.json` (editável pelo painel admin em
// /admin, ver public/admin/config.yml). Este arquivo só define o tipo e
// reexporta os dados já tipados — nada aqui precisa mudar quando o preço mudar.

import raw from './clientPlans.json';

export interface ClientPlan {
  key: string;
  /** Nome comercial do plano. */
  name: string;
  /** Notas fiscais incluídas por mês. */
  notas: number;
  /** Preço cheio mensal (R$), antes do desconto de lançamento. */
  valorOriginal: number;
  /** Preço mensal promocional (R$), cartão recorrente. */
  valorPromocional: number;
  /** Preço do plano anual (R$), cobrado à vista uma vez por ano. */
  valorAnual: number;
  /** Destaca o plano como o mais popular. */
  destaque?: boolean;
}

export const CLIENT_PLANS: ClientPlan[] = raw.plans as ClientPlan[];
