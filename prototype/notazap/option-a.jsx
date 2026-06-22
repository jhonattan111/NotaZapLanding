// NotaZap landing — editorial calmo. Light cool off-white, Instrument Serif
// display + Hanken Grotesk body, single teal accent. Real logo lockup in
// chrome; hero shows a faithful WhatsApp-dark replica of the real NotaZap flow.
function OptionA() {
  const W = 1240;
  return (
    <div className="oa-root" style={{ width: '100%' }}>
      <style>{`
        .oa-root{
          --bg:#f4f6f6; --ink:#142025; --muted:#5d6f74; --line:#dde3e3;
          --acc:oklch(0.62 0.085 188); --acc-soft:oklch(0.93 0.03 188);
          background:var(--bg); color:var(--ink); position:relative;
          font-family:"Hanken Grotesk",system-ui,sans-serif; line-height:1.5;
          letter-spacing:-0.01em;
        }
        .oa-root *{box-sizing:border-box; margin:0; padding:0;}
        .oa-serif{font-family:"Instrument Serif",Georgia,serif; font-weight:400; letter-spacing:-0.01em;}
        .oa-wrap{max-width:1080px; margin:0 auto; padding:0 56px;}
        /* nav */
        .oa-nav{display:flex; align-items:center; justify-content:space-between; padding:30px 56px; max-width:1080px; margin:0 auto;}
        .oa-brand{height:30px; display:block;}
        .oa-navlinks{display:flex; gap:34px; align-items:center; font-size:15px; color:var(--muted); font-weight:500;}
        .oa-navlinks a{color:inherit; text-decoration:none;}
        .oa-pill{background:var(--ink); color:var(--bg); padding:11px 20px; border-radius:999px; font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:8px; text-decoration:none; white-space:nowrap;}
        /* hero */
        .oa-hero{display:grid; grid-template-columns:1.05fr 0.95fr; gap:56px; align-items:center; padding:64px 0 88px;}
        .oa-eyebrow{display:inline-flex; align-items:center; gap:9px; font-size:13px; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; color:var(--acc); margin-bottom:26px;}
        .oa-eyebrow .dot{width:7px; height:7px; border-radius:50%; background:var(--acc);}
        .oa-h1{font-size:67px; line-height:1.02; letter-spacing:-0.02em; margin-bottom:24px;}
        .oa-h1 em{font-style:italic; color:var(--acc);}
        .oa-sub{font-size:19px; line-height:1.55; color:var(--muted); max-width:430px; margin-bottom:34px;}
        .oa-cta-row{display:flex; align-items:center; gap:16px; margin-bottom:26px;}
        .oa-btn-primary{background:var(--acc); color:#fff; padding:15px 26px; border-radius:999px; font-size:16px; font-weight:600; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:9px; text-decoration:none;}
        .oa-btn-ghost{color:var(--ink); font-weight:600; font-size:16px; text-decoration:none; display:inline-flex; align-items:center; gap:7px;}
        .oa-trust{display:flex; align-items:center; gap:10px; font-size:14px; color:var(--muted);}
        .oa-avs{display:flex;}
        .oa-avs span{width:26px; height:26px; border-radius:50%; border:2px solid var(--bg); margin-left:-8px; background:var(--acc-soft);}

        /* phone bezel */
        .oa-phone{justify-self:center; width:312px; height:632px; background:#0a0f12; border-radius:44px; padding:11px; box-shadow:0 40px 80px -30px rgba(20,32,37,0.5), 0 0 0 1px rgba(20,32,37,0.08);}
        /* whatsapp screen */
        .wa-screen{height:100%; border-radius:34px; overflow:hidden; display:flex; flex-direction:column; background:#0b141a; font-family:"Hanken Grotesk",system-ui,sans-serif;}
        .wa-head{flex:0 0 auto; background:#202c33; padding:32px 12px 9px; display:flex; align-items:center; gap:9px;}
        .wa-av{width:34px; height:34px; border-radius:50%; background:#fff; display:flex; align-items:center; justify-content:center; flex:0 0 auto; overflow:hidden;}
        .wa-av img{width:74%; height:74%; object-fit:contain;}
        .wa-meta{flex:1; min-width:0;}
        .wa-name{color:#e9edef; font-size:14px; font-weight:700; line-height:1.15; letter-spacing:-0.01em;}
        .wa-status{color:#8696a0; font-size:11px;}
        .wa-icons{display:flex; gap:14px; align-items:center; color:#aebac1; flex:0 0 auto; padding-right:4px;}
        .wa-body{flex:1; min-height:0; padding:12px 9px 12px; display:flex; flex-direction:column; justify-content:flex-start; gap:7px; overflow:hidden;
          background-color:#0b141a;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.022' stroke-width='1.4'%3E%3Ccircle cx='13' cy='13' r='5'/%3E%3Cpath d='M34 8h8M38 4v8'/%3E%3Cpath d='M6 38c4-5 9-5 13 0'/%3E%3Crect x='34' y='34' width='9' height='9' rx='2'/%3E%3C/g%3E%3C/svg%3E");
        }
        .wa-day{align-self:center; background:#182229; color:#8696a0; font-size:10px; font-weight:600; padding:4px 11px; border-radius:8px; margin-bottom:2px;}
        /* incoming */
        .wa-in{align-self:flex-start; max-width:84%; background:#202c33; color:#e9edef; border-radius:8px; border-top-left-radius:2px; padding:6px 8px 4px; font-size:12.5px; line-height:1.38; box-shadow:0 1px 0 rgba(0,0,0,0.18);}
        .wa-in .sndr{color:#06cf9c; font-weight:700; font-size:11.5px; margin-bottom:2px;}
        .wa-in .q{display:block;}
        .wa-in .opt{color:#8696a0; font-size:11.5px; margin-top:3px;}
        .wa-in .tm{color:#8696a0; font-size:10px; text-align:right; margin-top:1px;}
        /* button list */
        .wa-btns{align-self:flex-start; width:84%; background:#1f2c34; border-radius:8px; overflow:hidden; margin-top:-3px;}
        .wa-btn{display:flex; align-items:center; justify-content:center; gap:8px; padding:9px 10px; font-size:12.5px; font-weight:600; color:#00a884; border-top:1px solid rgba(255,255,255,0.07); text-align:center; white-space:nowrap;}
        .wa-btn:first-child{border-top:none;}
        .wa-btn.alt{color:#e9edef;}
        .wa-btn svg{flex:0 0 auto; color:inherit; opacity:0.9;}
        /* outgoing */
        .wa-out{align-self:flex-end; max-width:84%; background:#005c4b; color:#e9edef; border-radius:8px; border-top-right-radius:2px; padding:6px 9px 4px; font-size:12.5px; line-height:1.38;}
        .wa-out .txt{display:block;}
        .wa-foot{display:flex; align-items:center; justify-content:flex-end; gap:4px; margin-top:2px;}
        .wa-foot .tm{color:#a7c7bd; font-size:10px;}
        .wa-foot .tk{color:#53bdeb;}
        /* quoted reply inside outgoing */
        .wa-quote{background:rgba(255,255,255,0.06); border-left:3px solid #06cf9c; border-radius:5px; padding:5px 8px; margin-bottom:4px;}
        .wa-quote .qn{color:#06cf9c; font-size:11px; font-weight:700; line-height:1.2;}
        .wa-quote .qt{color:#b9c4ca; font-size:11px; line-height:1.3; margin-top:1px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;}

        /* sections */
        .oa-sec{padding:80px 0; border-top:1px solid var(--line);}
        .oa-kicker{font-size:13px; font-weight:600; letter-spacing:0.05em; text-transform:uppercase; color:var(--acc); margin-bottom:14px;}
        .oa-h2{font-size:44px; line-height:1.08; letter-spacing:-0.02em; margin-bottom:14px;}
        .oa-lead{font-size:18px; color:var(--muted); max-width:520px; margin-bottom:50px;}
        .oa-steps{display:grid; grid-template-columns:repeat(3,1fr); gap:30px;}
        .oa-step .n{font-family:"Instrument Serif",serif; font-size:46px; color:var(--acc); line-height:1; margin-bottom:16px; display:block;}
        .oa-step h3{font-size:20px; font-weight:700; letter-spacing:-0.01em; margin-bottom:8px;}
        .oa-step p{font-size:15.5px; color:var(--muted); line-height:1.5;}
        .oa-bens{display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:var(--line); border:1px solid var(--line); border-radius:18px; overflow:hidden;}
        .oa-ben{background:var(--bg); padding:32px 30px;}
        .oa-ben .bi{width:40px; height:40px; border-radius:11px; background:var(--acc-soft); color:var(--acc); display:flex; align-items:center; justify-content:center; margin-bottom:18px;}
        .oa-ben h3{font-size:19px; font-weight:700; letter-spacing:-0.01em; margin-bottom:7px;}
        .oa-ben p{font-size:15px; color:var(--muted); line-height:1.5;}
        /* quote */
        .oa-quote{text-align:center; max-width:780px; margin:0 auto;}
        .oa-quote blockquote{font-family:"Instrument Serif",serif; font-size:38px; line-height:1.22; letter-spacing:-0.01em; margin-bottom:28px;}
        .oa-quote .by{font-size:15px; color:var(--muted); font-weight:500;}
        .oa-quote .by b{color:var(--ink);}
        .oa-foot{padding:48px 56px; max-width:1080px; margin:0 auto; border-top:1px solid var(--line); display:flex; justify-content:space-between; align-items:center; color:var(--muted); font-size:14px;}
        .oa-foot img{height:26px; display:block;}

        /* ---------- responsive ---------- */
        @media (max-width: 920px){
          .oa-nav{padding:24px 32px;}
          .oa-wrap{padding:0 32px;}
          .oa-hero{grid-template-columns:1fr; gap:44px; padding:40px 0 64px;}
          .oa-hero > div{max-width:560px;}
          .oa-h1{font-size:54px;}
          .oa-sub{max-width:520px;}
          .oa-sec{padding:64px 0;}
          .oa-h2{font-size:38px;}
          .oa-steps{grid-template-columns:1fr; gap:8px;}
          .oa-step{display:flex; align-items:baseline; gap:18px;}
          .oa-step .n{margin-bottom:0; font-size:38px; flex:0 0 auto; width:54px;}
          .oa-bens{grid-template-columns:1fr;}
          .oa-quote blockquote{font-size:30px;}
        }
        @media (max-width: 560px){
          .oa-nav{padding:18px 20px;}
          .oa-navlinks{gap:0;}
          .oa-navlinks a:not(.oa-pill){display:none;}
          .oa-wrap{padding:0 20px;}
          .oa-hero{padding:24px 0 48px;}
          .oa-h1{font-size:40px;}
          .oa-sub{font-size:17px;}
          .oa-cta-row{flex-direction:column; align-items:stretch; gap:12px;}
          .oa-btn-primary, .oa-btn-ghost{justify-content:center;}
          .oa-trust{font-size:13px;}
          .oa-sec{padding:48px 0;}
          .oa-h2{font-size:30px;}
          .oa-lead{font-size:16px; margin-bottom:36px;}
          .oa-quote blockquote{font-size:25px;}
          .oa-step{flex-direction:column; gap:6px;}
          .oa-step .n{width:auto;}
          .oa-foot{flex-direction:column; gap:16px; text-align:center; padding:36px 20px;}
        }
        @media (max-width: 360px){
          .oa-phone{transform:scale(0.92); transform-origin:top center;}
        }
      `}</style>

      <nav className="oa-nav">
        <img className="oa-brand" src={(window.__resources&&window.__resources.logo)||"notazap/logo-horizontal.png"} alt="NotaZap" />
        <div className="oa-navlinks">
          <a href="#">Como funciona</a>
          <a href="#">Preços</a>
          <a href="#">Ajuda</a>
          <a className="oa-pill" href="#">{wa(13)} Abrir no WhatsApp</a>
        </div>
      </nav>

      <div className="oa-wrap">
        <section className="oa-hero">
          <div>
            <span className="oa-eyebrow"><span className="dot"></span>Nota fiscal sem complicação</span>
            <h1 className="oa-h1 oa-serif">Sua nota fiscal cabe numa <em>conversa</em>.</h1>
            <p className="oa-sub">Emita NF-e e NFS-e direto no WhatsApp. Sem sistema, sem login, sem contador do lado. Cinco toques e pronto.</p>
            <div className="oa-cta-row">
              <a className="oa-btn-primary" href="#">{wa(15)} Emitir minha primeira nota</a>
              <a className="oa-btn-ghost" href="#">Ver como funciona →</a>
            </div>
            <div className="oa-trust">
              <span className="oa-avs"><span></span><span></span><span></span></span>
              +12 mil pequenos negócios já emitem por aqui
            </div>
          </div>
          <WAChat />
        </section>
      </div>

      <div className="oa-wrap">
        <section className="oa-sec" style={{borderTop:'none', paddingTop:0}}>
          <div className="oa-kicker">Como funciona</div>
          <h2 className="oa-h2 oa-serif">Mais fácil do que mandar um “oi”.</h2>
          <p className="oa-lead">Você conversa, o NotaZap emite. Nenhuma tela nova para aprender.</p>
          <div className="oa-steps">
            <div className="oa-step"><span className="n">01</span><h3>Mande um “oi”</h3><p>Abra a conversa do NotaZap e mande um “oi” — como qualquer mensagem.</p></div>
            <div className="oa-step"><span className="n">02</span><h3>Toque nos botões</h3><p>Escolha o cliente, o valor e o serviço tocando nos botões que aparecem.</p></div>
            <div className="oa-step"><span className="n">03</span><h3>Receba o PDF</h3><p>A nota volta pronta na conversa, dentro da lei, em segundos.</p></div>
          </div>
        </section>

        <section className="oa-sec">
          <div className="oa-kicker">Por que é diferente</div>
          <h2 className="oa-h2 oa-serif">Feito para quem não tem tempo a perder.</h2>
          <p className="oa-lead">Nada de instalar programa ou ligar o computador. O que você já usa todo dia basta.</p>
          <div className="oa-bens">
            <div className="oa-ben"><div className="bi">{ic('phone')}</div><h3>Sem computador</h3><p>Tudo acontece no celular, dentro do WhatsApp que você já tem.</p></div>
            <div className="oa-ben"><div className="bi">{ic('clock')}</div><h3>Em 1 minuto ou menos</h3><p>Da primeira mensagem ao PDF emitido em menos de um minuto.</p></div>
            <div className="oa-ben"><div className="bi">{ic('pin')}</div><h3>De qualquer lugar</h3><p>No balcão, na obra, no carro. A qualquer hora, qualquer dia.</p></div>
            <div className="oa-ben"><div className="bi">{ic('shield')}</div><h3>Sempre na lei</h3><p>Cálculo de impostos e envio para a prefeitura por nossa conta.</p></div>
          </div>
        </section>

        <section className="oa-sec">
          <div className="oa-quote">
            <blockquote>“Eu fugia de emitir nota. Agora faço pelo WhatsApp entre um cliente e outro, .”</blockquote>
            <div className="by"><b>Erick</b> · Oficina Simas Turbo, Nova Friburgo</div>
          </div>
        </section>
      </div>

      <footer className="oa-foot">
        <img src={(window.__resources&&window.__resources.logo)||"notazap/logo-horizontal.png"} alt="NotaZap" />
        <div>© 2026 NotaZap · Emissão fiscal pelo WhatsApp</div>
      </footer>
    </div>
  );
}

// generic chat-bubble glyph for CTA buttons
function wa(s){
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.1 2 11.2c0 1.8.6 3.5 1.6 5L2 22l6-1.6c1.2.5 2.6.8 4 .8 5.5 0 10-4.1 10-9.2S17.5 2 12 2z"/>
    </svg>
  );
}
function ic(name){
  const p = {
    phone:"M7 2h10v20H7zM10 18h4",
    clock:"M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    pin:"M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12zM12 10a1 1 0 100-2 1 1 0 000 2z",
    shield:"M12 2l8 3v6c0 5-3.5 8-8 11-4.5-3-8-6-8-11V5l8-3zM9 12l2 2 4-4",
  }[name];
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={p}/></svg>;
}
// curved reply arrow used on WhatsApp list buttons
function replyArrow(){
  return <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 4.5L3 8l3.5 3.5M3 8h6.5a3.5 3.5 0 013.5 3.5V12"/></svg>;
}
function ticks(){
  return <svg className="tk" width="15" height="11" viewBox="0 0 17 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6l3 3 6.5-7.5M6.5 9l.5.5 6.5-7.5"/></svg>;
}

// Faithful WhatsApp-dark replica of the real NotaZap conversation start.
function WAChat(){
  return (
    <div className="oa-phone">
      <div className="wa-screen">
        <div className="wa-head">
          <span className="wa-av"><img src={(window.__resources&&window.__resources.mark)||"notazap/mark-green.png"} alt="" /></span>
          <div className="wa-meta">
            <div className="wa-name">Nota Zap</div>
            <div className="wa-status">online</div>
          </div>
          <div className="wa-icons">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="13" height="12" rx="2.5"/><path d="M15 10l6-3v10l-6-3z"/></svg>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="7"/><path d="M21 21l-5.2-5.2"/></svg>
            <svg width="5" height="18" viewBox="0 0 5 18" fill="currentColor"><circle cx="2.5" cy="2.5" r="2"/><circle cx="2.5" cy="9" r="2"/><circle cx="2.5" cy="15.5" r="2"/></svg>
          </div>
        </div>

        <div className="wa-body">
          <div className="wa-day">HOJE</div>

          <div className="wa-out">
            <span className="txt">oi</span>
            <div className="wa-foot"><span className="tm">15:06</span>{ticks()}</div>
          </div>

          <div className="wa-in">
            <div className="sndr">Nota Zap</div>
            <span className="q">Por gentileza, informe a opção que você deseja:</span>
            <div className="opt">Selecione uma opção</div>
            <div className="tm">15:06</div>
          </div>
          <div className="wa-btns">
            <div className="wa-btn alt">{replyArrow()} Nova Nota</div>
            <div className="wa-btn">{replyArrow()} Cancelar Nota</div>
            <div className="wa-btn">{replyArrow()} Listar Notas Emitidas</div>
            <div className="wa-btn">{replyArrow()} Falar com um atendente</div>
          </div>

          <div className="wa-out">
            <div className="wa-quote">
              <div className="qn">Nota Zap</div>
              <div className="qt">Por gentileza, informe a opção que você deseja…</div>
            </div>
            <span className="txt">Nova Nota</span>
            <div className="wa-foot"><span className="tm">15:06</span>{ticks()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.OptionA = OptionA;
