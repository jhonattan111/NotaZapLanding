# Handoff: NotaZap — Landing Page

## Overview
Landing page de apresentação do **NotaZap**, um emissor de notas fiscais (NF-e / NFS-e) que funciona inteiramente dentro do WhatsApp. O público são micro e pequenos empresários, não técnicos, que precisam emitir nota mas não têm tempo nem acesso a um computador. A página precisa comunicar **uma coisa acima de tudo: é fácil — você manda um "oi", toca em alguns botões e a nota sai.**

Objetivo de conversão: levar o visitante a **abrir a conversa no WhatsApp** (CTAs "Abrir no WhatsApp" / "Emitir minha primeira nota").

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML/React (via Babel no navegador)** — protótipos que mostram a aparência e o comportamento pretendidos, **não código de produção para copiar diretamente**. A tarefa é **recriar este design no ambiente do codebase de destino** (Next.js, Astro, Vue, etc.) usando os padrões e bibliotecas já estabelecidos lá. Se ainda não existe um projeto, escolha o framework mais adequado (recomendação: **Astro** ou **Next.js**, pois é uma página de marketing estática com forte SEO/performance) e implemente o design nele.

O protótipo usa React apenas para organização; **não há estado nem lógica de aplicação** — é uma página estática. Pode ser reimplementado como HTML/CSS puro sem perda.

## Fidelity
**Alta fidelidade (hi-fi).** Cores, tipografia, espaçamentos e o mockup de conversa estão finalizados e devem ser reproduzidos fielmente. As únicas exceções (placeholders a substituir por dados reais antes do lançamento) estão listadas em **"Conteúdo a confirmar"** no fim deste documento.

---

## Screens / Views

É uma página única (single page), composta por seções verticais. Largura máxima do conteúdo: **1080px**, centralizado. Fundo geral `#f4f6f6`.

### 1. Navbar (topo, não fixa)
- Layout: flex, `space-between`, `align-items:center`, padding `30px 56px`, max-width 1080px centralizado.
- **Esquerda**: logo horizontal NotaZap (`logo-horizontal.png`), altura 30px.
- **Direita**: grupo flex, gap 34px — links de texto "Como funciona", "Preços", "Ajuda" (15px, peso 500, cor `--muted`) + botão pílula "Abrir no WhatsApp".
- Botão pílula: fundo `--ink` (#142025), texto `--bg`, padding `11px 20px`, `border-radius:999px`, 14.5px peso 600, ícone de balão de chat (13px) à esquerda, `white-space:nowrap`.

### 2. Hero
- Layout: grid 2 colunas `1.05fr 0.95fr`, gap 56px, `align-items:center`, padding `64px 0 88px`.
- **Coluna esquerda (texto):**
  - Eyebrow: "NOTA FISCAL SEM COMPLICAÇÃO" — uppercase, 13px, peso 600, cor `--acc`, letter-spacing 0.04em, com um dot 7px `border-radius:50%` cor `--acc` à esquerda. Margem inferior 26px.
  - H1: "Sua nota fiscal cabe numa *conversa*." — **Instrument Serif**, 67px, line-height 1.02, letter-spacing -0.02em. A palavra "conversa" é `<em>` itálico na cor `--acc`. Margem inferior 24px.
  - Subtítulo: "Emita NF-e e NFS-e direto no WhatsApp. Sem sistema, sem login, sem contador do lado. Cinco toques e pronto." — 19px, line-height 1.55, cor `--muted`, max-width 430px. Margem inferior 34px.
  - CTA row (flex, gap 16px, margem inferior 26px):
    - Botão primário: "Emitir minha primeira nota" — fundo `--acc`, texto branco, padding `15px 26px`, `border-radius:999px`, 16px peso 600, ícone balão 15px.
    - Link fantasma: "Ver como funciona →" — cor `--ink`, peso 600, 16px, sem fundo.
  - Trust row (flex, gap 10px, 14px, cor `--muted`): 3 avatares circulares sobrepostos (26px, `border:2px solid --bg`, `margin-left:-8px`, fundo `--acc-soft`) + texto "+12 mil pequenos negócios já emitem por aqui".
- **Coluna direita:** mockup de celular (ver "Componente: WhatsApp Chat Mockup").

### 3. Como funciona
- Seção com `border-top:1px solid --line`, padding `80px 0` (a primeira tem borda removida e paddingTop 0).
- Kicker "COMO FUNCIONA" (13px, uppercase, peso 600, cor `--acc`, letter-spacing 0.05em).
- H2: "Mais fácil do que mandar um "oi"." — Instrument Serif, 44px, line-height 1.08.
- Lead: "Você conversa, o NotaZap emite. Nenhuma tela nova para aprender." — 18px, cor `--muted`, max-width 520px, margem inferior 50px.
- Grid 3 colunas, gap 30px. Cada passo:
  - Número "01"/"02"/"03" — Instrument Serif, 46px, cor `--acc`, bloco, margem inferior 16px.
  - H3 (20px, peso 700) + parágrafo (15.5px, cor `--muted`).
  - **01 — "Mande um "oi"":** "Abra a conversa do NotaZap e mande um "oi" — como qualquer mensagem."
  - **02 — "Toque nos botões":** "Escolha o cliente, o valor e o serviço tocando nos botões que aparecem."
  - **03 — "Receba o PDF":** "A nota volta pronta na conversa, dentro da lei, em segundos."

### 4. Por que é diferente
- Mesma estrutura de seção (border-top, padding 80px).
- Kicker "POR QUE É DIFERENTE".
- H2: "Feito para quem não tem tempo a perder." (Instrument Serif, 44px).
- Lead: "Nada de instalar programa ou ligar o computador. O que você já usa todo dia basta."
- **Grid de benefícios** 2×2: container com `gap:1px`, fundo `--line`, `border:1px solid --line`, `border-radius:18px`, `overflow:hidden` (cria linhas divisórias finas entre células). Cada célula: fundo `--bg`, padding `32px 30px`.
  - Ícone em chip 40×40, `border-radius:11px`, fundo `--acc-soft`, cor `--acc`, margem inferior 18px (ícones line, stroke 1.8).
  - H3 19px peso 700 + parágrafo 15px cor `--muted`.
  - Conteúdo:
    1. **Sem computador** — "Tudo acontece no celular, dentro do WhatsApp que você já tem." (ícone: telefone)
    2. **Em 1 minuto ou menos** — "Da primeira mensagem ao PDF emitido em menos de um minuto." (ícone: relógio)
    3. **De qualquer lugar** — "No balcão, na obra, no carro. A qualquer hora, qualquer dia." (ícone: pin de localização)
    4. **Sempre na lei** — "Cálculo de impostos e envio para a prefeitura por nossa conta." (ícone: escudo com check)

### 5. Depoimento
- Seção centralizada, max-width 780px.
- Blockquote: "Eu fugia de emitir nota. Agora faço pelo WhatsApp entre um cliente e outro, sem nem pensar." — Instrument Serif, 38px, line-height 1.22.
- Assinatura: "**Dona Cleide** · Salão Beleza Real, Recife" — 15px, cor `--muted`, nome em `--ink` peso bold.

### 6. Footer
- `border-top:1px solid --line`, padding `48px 56px`, max-width 1080px.
- Flex space-between: logo horizontal (altura 26px) à esquerda, texto "© 2026 NotaZap · Emissão fiscal pelo WhatsApp" (14px, cor `--muted`) à direita.

---

## Componente: WhatsApp Chat Mockup

Réplica fiel da interface do WhatsApp (tema escuro) mostrando o **início real de uma conversa com o NotaZap**. É puramente visual (imagem viva), não interativo.

- **Bezel do celular:** 312×632px, fundo `#0a0f12`, `border-radius:44px`, padding 11px, sombra `0 40px 80px -30px rgba(20,32,37,0.5)` + hairline `0 0 0 1px rgba(20,32,37,0.08)`.
- **Tela:** `border-radius:34px`, `overflow:hidden`, fundo `#0b141a`, flex coluna.
- **Header (`.wa-head`):** fundo `#202c33`, padding `32px 12px 9px`. Avatar circular 34px branco com o "N" verde (`mark-green.png`) dentro. Nome "Nota Zap" (#e9edef, 14px, bold) + status "online" (#8696a0, 11px). À direita: ícones de câmera, lupa e três pontos (cor #aebac1).
- **Corpo (`.wa-body`):** flex coluna, `justify-content:flex-start` (mensagens ancoradas no topo — **não** centralizar nem empurrar pro fundo), gap 7px, `overflow:hidden`. Fundo `#0b141a` com um padrão SVG de doodles em `opacity 0.022` (papel de parede do WhatsApp). Padding `12px 9px`.
  - Pílula de data "HOJE" centralizada: fundo `#182229`, cor `#8696a0`, 10px peso 600, `border-radius:8px`.
  - **Balão enviado "oi":** `align-self:flex-end`, fundo `#005c4b`, cor `#e9edef`, `border-radius:8px` com `border-top-right-radius:2px`, 12.5px. Rodapé com hora "15:06" (#a7c7bd, 10px) + dois ticks azuis `#53bdeb`.
  - **Balão recebido (menu):** `align-self:flex-start`, fundo `#202c33`, `border-top-left-radius:2px`. Linha do remetente "Nota Zap" em `#06cf9c` (bold, 11.5px). Texto "Por gentileza, informe a opção que você deseja:". Sublinha "Selecione uma opção" em #8696a0. Hora 15:06.
  - **Lista de botões (`.wa-btns`):** largura 84%, fundo `#1f2c34`, `border-radius:8px`, `overflow:hidden`, encostada no balão acima (`margin-top:-3px`). Cada item: centralizado, padding `9px 10px`, 12.5px peso 600, cor `#00a884`, com seta de resposta (curva) à esquerda e `border-top:1px solid rgba(255,255,255,0.07)` (exceto o primeiro). Itens: **Nova Nota** (primeiro item usa cor clara `#e9edef`), Cancelar Nota, Listar Notas Emitidas, Falar com um atendente.
  - **Balão enviado (resposta citada):** fundo `#005c4b`. Dentro, um bloco de citação: fundo `rgba(255,255,255,0.06)`, `border-left:3px solid #06cf9c`, nome "Nota Zap" em verde + trecho "Por gentileza, informe a opção que você deseja…" (truncado em 2 linhas). Abaixo, o texto enviado "Nova Nota". Rodapé hora + ticks azuis.

> Observação: ícones e cores reproduzem o visual do WhatsApp para fins de mockup de produto. O glifo de balão dos botões CTA da página é um ícone **genérico** (não a marca do WhatsApp) — mantenha assim, ou troque pelo ícone oficial conforme as diretrizes de marca que vocês adotarem.

---

## Interactions & Behavior
- **Sem JavaScript de aplicação.** Página estática.
- **Hover:** aplicar estados de hover sutis nos links de nav (escurecer cor), no botão primário e na pílula (ex.: leve escurecimento do fundo ~6–8%, ou `translateY(-1px)`). Não especificado no protótipo — fica a critério, mantendo discrição.
- **CTAs:** todos os `href="#"` devem apontar para o link real do WhatsApp: `https://wa.me/55XXXXXXXXXXX?text=oi` (número e mensagem pré-preenchida a definir). Aplicar a: pílula da nav, botão primário do hero. O link "Ver como funciona →" deve fazer scroll suave até a seção "Como funciona" (`#como-funciona`).
- **Mockup do chat:** estático. (Opcional, futuro: animar a entrada das mensagens em sequência ao entrar na viewport — não faz parte deste design.)

## Responsive behavior
O design foi feito **mobile-first no discurso** e tem breakpoints definidos no protótipo:
- **> 920px (desktop):** layout descrito acima (hero 2 colunas, steps 3 colunas, benefícios 2×2).
- **≤ 920px (tablet):** padding lateral 32px. Hero vira **1 coluna** (texto em cima, celular embaixo, ambos centralizados, conteúdo de texto max-width 560px). H1 → 54px. H2 → 38px. Steps viram **1 coluna** com número e texto lado a lado (número 38px, largura 54px). Benefícios → **1 coluna**. Depoimento 30px.
- **≤ 560px (mobile):** padding lateral 20px. Nav esconde os links de texto, mantém só logo + pílula "Abrir no WhatsApp". H1 → 40px. CTA row vira **coluna** (botões full-width, centralizados). Seções padding 48px. H2 → 30px. Footer vira coluna centralizada.
- **≤ 360px:** o celular do hero recebe `transform:scale(0.92)` para nunca estourar a largura.

Recomenda-se reimplementar com as mesmas quebras. O alvo primário de uso da página é o **celular**.

---

## Design Tokens

### Cores
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#f4f6f6` | Fundo da página |
| `--ink` | `#142025` | Texto principal / botão escuro |
| `--muted` | `#5d6f74` | Texto secundário |
| `--line` | `#dde3e3` | Bordas e divisórias |
| `--acc` | `oklch(0.62 0.085 188)` ≈ `#3a9aa0` | Acento teal (CTAs, números, destaques) |
| `--acc-soft` | `oklch(0.93 0.03 188)` ≈ `#dcefef` | Fundo de chips/ícones |

Cores do mockup WhatsApp (fixas, replicam o app): fundo tela `#0b141a`, header/balão recebido `#202c33`, balão enviado `#005c4b`, verde remetente `#06cf9c`, verde botões `#00a884`, ticks azuis `#53bdeb`, texto claro `#e9edef`, texto apagado `#8696a0`.

### Tipografia
- **Display/Serif:** Instrument Serif (Google Fonts), pesos 400 + itálico. Usada em H1, H2, números dos passos, blockquote.
- **Corpo/Sans:** Hanken Grotesk (Google Fonts), pesos 400/500/600/700/800. Todo o resto.
- Escala: H1 67px · H2 44px · blockquote 38px · subtítulo hero 19px · lead 18px · corpo 15–16px · labels/kickers 13px.
- Letter-spacing geral levemente negativo (-0.01em a -0.02em nos títulos).

### Espaçamento
- Padding de seção: 80px vertical (desktop).
- Padding lateral do container: 56px (desktop) → 32px → 20px.
- Max-width do conteúdo: 1080px.
- Gaps: hero 56px · grids 30px · CTA row 16px.

### Raios e sombras
- Pílulas/botões CTA: `border-radius:999px`.
- Chips de ícone: 11px. Cards/grid de benefícios: 18px. Bezel do celular: 44px; tela 34px.
- Sombra do celular: `0 40px 80px -30px rgba(20,32,37,0.5)`.

---

## Assets
- `prototype/notazap/logo-horizontal.png` — logo NotaZap horizontal (marca + wordmark, versão preta/verde). Usado na nav (h30) e no footer (h26). Fornecido pelo cliente.
- `prototype/notazap/mark-green.png` — o símbolo "N" verde isolado (recortado do logo). Usado como avatar dentro do mockup de chat. Gerado a partir do logo do cliente.
- Ícones (telefone, relógio, pin, escudo, balão, seta de resposta, ticks, câmera, lupa, 3 pontos): **SVG inline** definidos no `option-a.jsx` (funções `ic()`, `wa()`, `replyArrow()`, `ticks()`). Podem ser substituídos por uma biblioteca de ícones do codebase (ex.: Lucide) — equivalentes: phone, clock, map-pin, shield-check, message-circle, corner-up-left, check-check.
- Fontes via Google Fonts (Instrument Serif, Hanken Grotesk).

## Files
- `prototype/NotaZap — Landing.html` — entry point do protótipo (carrega React/Babel + `option-a.jsx`).
- `prototype/notazap/option-a.jsx` — **toda a marcação, CSS e conteúdo da página** (componente `OptionA`) + o mockup de chat (`WAChat`). É a fonte de verdade do design.
- `standalone/NotaZap Landing (standalone).html` — versão única offline (imagens e tudo embutido), útil para abrir/visualizar sem servidor.

---

## Conteúdo a confirmar (placeholders → dados reais antes do lançamento)
- **Número/link do WhatsApp** nos CTAs (hoje `#`).
- **"+12 mil pequenos negócios"** — confirmar número real ou remover.
- **Depoimento da "Dona Cleide"** — substituir por depoimento real e autorizado.
- **Preços** ("R$ 19/mês" foi mencionado em iterações anteriores mas a seção de preço foi removida) — definir se haverá página/seção de preços (o link "Preços" na nav precisa de destino).
- **Links da nav** ("Como funciona", "Preços", "Ajuda") — definir destinos/âncoras.
- **Metadados/SEO:** title, description, Open Graph, favicon — não incluídos no protótipo.
