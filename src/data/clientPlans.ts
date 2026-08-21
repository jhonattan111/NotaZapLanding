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

/** Adicional opcional oferecido junto com qualquer plano (certificado digital). */
export interface ClientAddon {
  /** Nome do adicional. */
  nome: string;
  /** Preço cheio do adicional (R$) no período completo, antes do desconto. */
  valorOriginal: number;
  /** Preço promocional do adicional (R$) no período completo. */
  valorPromocional: number;
  /** Em quantos meses o valor é diluído na mensalidade (12 = certificado anual). */
  meses: number;
  /** Explicação curta do que é / para que serve. */
  descricao: string;
  /** Observação mostrada quando o certificado está embutido no preço. */
  nota: string;
  /** Observação mostrada quando o visitante marca que já tem certificado. */
  notaProprioCert: string;
}

export const CLIENT_ADDON: ClientAddon = raw.addon as ClientAddon;

/** Parcela mensal do adicional já embutida no preço de cada plano. */
export const ADDON_MENSAL = CLIENT_ADDON.valorPromocional / CLIENT_ADDON.meses;

/** Parcela mensal equivalente ao preço cheio do adicional, para o valor riscado. */
export const ADDON_MENSAL_ORIGINAL = CLIENT_ADDON.valorOriginal / CLIENT_ADDON.meses;
