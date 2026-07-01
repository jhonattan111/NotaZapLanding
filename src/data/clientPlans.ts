// Planos do cliente final (B2C) — emissão de notas fiscais pelo WhatsApp.
// Preço mensal promocional é o de lançamento; o plano anual é cobrado à
// vista uma vez por ano e sai mais barato que 12x o mensal promocional.

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

export const CLIENT_PLANS: ClientPlan[] = [
  {
    key: 'start',
    name: 'Start',
    notas: 5,
    valorOriginal: 29.9,
    valorPromocional: 9.9,
    valorAnual: 89.9,
  },
  {
    key: 'essencial',
    name: 'Essencial',
    notas: 15,
    valorOriginal: 39.9,
    valorPromocional: 12.9,
    valorAnual: 109.9,
    destaque: true,
  },
  {
    key: 'profissional',
    name: 'Profissional',
    notas: 50,
    valorOriginal: 59.9,
    valorPromocional: 19.9,
    valorAnual: 169.9,
  },
  {
    key: 'business',
    name: 'Business',
    notas: 100,
    valorOriginal: 89.9,
    valorPromocional: 29.9,
    valorAnual: 249.9,
  },
];
