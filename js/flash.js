/* Flashcards con repetición espaciada SM-2. El mazo se construye con el glosario (término → definición).
   Calificación: Otra vez (q=1) · Difícil (q=3) · Bien (q=4) · Fácil (q=5). Máx. 20 tarjetas nuevas al día. */
(function () {
  const esc = GDC.esc;
  const DAY = 86400000;
  const NEW_PER_DAY = 20;
  const U = (es, en) => { const m = GDC.lang(); return m === 'en' ? en : m === 'es' ? es : `${en} · ${es}`; };

  const cards = () => GDC.GLOSSARY.map(g => ({ id: 'g:' + g.t, front: g.t, alt: g.alt, back: g.d, cat: g.cat, mod: g.mod }));

  /* SM-2: ef = factor de facilidad · iv = intervalo en días · reps = repeticiones seguidas correctas */
  function sm2(st, q) {
    st = Object.assign({ ef: 2.5, iv: 0, reps: 0, due: 0 }, st);
    if (q < 3) { st.reps = 0; st.iv = 0; }
    else {
      st.reps += 1;
      st.iv = st.reps === 1 ? 1 : st.reps === 2 ? 6 : Math.round(st.iv * st.ef);
      st.ef = Math.max(1.3, st.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    }
    /* «Otra vez» vuelve en 10 minutos dentro de la misma sesión; el resto, en días */
    st.due = Date.now() + (st.iv ? st.iv * DAY : 10 * 60000);
    return st;
  }

  let deck = null, cat = 'all';

  function build() {
    const P = GDC.Store.P();
    const now = Date.now();
    const all = cards().filter(c => cat === 'all' || c.cat === cat);
    const due = all.filter(c => P.srs[c.id] && P.srs[c.id].due <= now).sort((a, b) => P.srs[a.id].due - P.srs[b.id].due);
    const today = GDC.today();
    const newDone = Object.values(P.srs).filter(s => s.first === today).length;
    const fresh = GDC.shuffle(all.filter(c => !P.srs[c.id])).slice(0, Math.max(0, NEW_PER_DAY - newDone));
    return { queue: due.concat(fresh), stats: { total: all.length, due: due.length, fresh: fresh.length, learned: all.filter(c => P.srs[c.id]?.reps >= 2).length }, flipped: false, done: 0 };
  }

  function view() {
    if (!deck) deck = build();
    const P = GDC.Store.P();
    const c = deck.queue[0];
    const el = GDC.node(`<section class="page flash">
      <header class="page__head">
        <p class="kicker">Flashcards · repaso espaciado</p>
        <h1>Que no se te <span class="ink-spark">olvide</span></h1>
        <p class="lede">Lee el término, intenta recordar su significado y voltea la tarjeta. Según tu respuesta, la tarjeta vuelve en minutos o en días (algoritmo SM-2).</p>
      </header>
      <div class="gl__bar">
        <label class="field fl__cat"><span class="sr-only">Categoría</span>
          <select id="flCat"><option value="all">Todas las categorías</option>
          ${Object.entries(GDC.Glossary.CATS).map(([k, v]) => `<option value="${k}" ${cat === k ? 'selected' : ''}>${v.icon} ${v.es}</option>`).join('')}</select></label>
        ${GDC.langSwitcher(GDC.lang(), 'flash')}
      </div>
      <ul class="fl__stats">
        <li><b>${deck.stats.due}</b> para repasar</li><li><b>${deck.stats.fresh}</b> nuevas hoy</li>
        <li><b>${deck.stats.learned}</b>/${deck.stats.total} aprendidas</li><li><b>${deck.done}</b> repasadas en esta sesión</li>
      </ul>
      ${c ? `<div class="fl__stage">
        <button type="button" class="fl__card${deck.flipped ? ' is-flipped' : ''}" id="flCard" aria-label="${U('Voltear la tarjeta', 'Flip the card')}">
          <span class="fl__face fl__front">
            <span class="fl__cattag">${GDC.Glossary.CATS[c.cat].icon} ${GDC.Glossary.CATS[c.cat].es}</span>
            <span class="fl__term">${esc(c.front)}</span>${c.alt ? `<span class="fl__alt">${esc(c.alt)}</span>` : ''}
            <span class="fl__hint muted">${U('Toca o pulsa Espacio para voltear', 'Tap or press Space to flip')}</span>
          </span>
          <span class="fl__face fl__back">
            <span class="fl__term fl__term--s">${esc(c.front)}</span>
            ${GDC.LB(c.back)}
            <a class="gl__mod" href="#/modulo/${c.mod}">Módulo ${c.mod} →</a>
          </span>
        </button>
        <div class="fl__rate" ${deck.flipped ? '' : 'hidden'}>
          <button type="button" class="btn fl__r fl__r--1" data-q="1">${U('Otra vez', 'Again')} <small>10 min</small></button>
          <button type="button" class="btn fl__r fl__r--3" data-q="3">${U('Difícil', 'Hard')}</button>
          <button type="button" class="btn fl__r fl__r--4" data-q="4">${U('Bien', 'Good')}</button>
          <button type="button" class="btn fl__r fl__r--5" data-q="5">${U('Fácil', 'Easy')}</button>
        </div>
        <p class="muted fl__keys">Teclado: <kbd>Espacio</kbd> voltear · <kbd>1</kbd>–<kbd>4</kbd> calificar</p>
      </div>` : `<div class="soon sheet">${GDC.Mascot.svg({ size: 80, cls: 'is-float' })}<p>${U('¡Al día! No tienes tarjetas pendientes en esta categoría. Vuelve mañana o elige otra categoría.', 'All caught up! No cards due in this category. Come back tomorrow or pick another category.')}</p></div>`}
    </section>`);

    const flip = () => { deck.flipped = !deck.flipped; GDC.App.route(); };
    const rate = q => {
      const st = sm2(P.srs[c.id], q);
      if (!P.srs[c.id]) st.first = GDC.today();
      else st.first = P.srs[c.id].first;
      P.srs[c.id] = st;
      GDC.Store.commit();
      deck.queue.shift();
      if (q < 3) deck.queue.splice(Math.min(deck.queue.length, 4), 0, c);   // reaparece pronto en la sesión
      deck.done++; deck.flipped = false;
      if (deck.done % 10 === 0) GDC.G.award(10, '10 flashcards repasadas');
      GDC.App.route();
    };

    el.querySelector('#flCat').addEventListener('change', e => { cat = e.target.value; deck = null; GDC.App.route(); });
    el.addEventListener('click', e => {
      if (e.target.closest('#flCard') && !e.target.closest('a')) flip();
      const r = e.target.closest('[data-q]'); if (r && c) rate(+r.dataset.q);
    });
    /* Atajos de teclado mientras esta vista esté montada */
    const onKey = e => {
      if (!document.body.contains(el)) return document.removeEventListener('keydown', onKey);
      if (!c || e.target.closest?.('input, select, textarea')) return;
      if (e.key === ' ') { e.preventDefault(); flip(); }
      if (deck.flipped && ['1', '2', '3', '4'].includes(e.key)) rate([1, 3, 4, 5][+e.key - 1]);
    };
    document.addEventListener('keydown', onKey);
    return el;
  }

  GDC.Flash = { view, sm2, reset: () => { deck = null; } };
})();
