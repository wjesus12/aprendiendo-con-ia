/* Motor de módulos: renderiza el contenido de js/content/mod-XX.js y su mini quiz.
   Bloques: p, h, list, steps, table, note(kind), flow, prompt, compare, quote. */
(function () {
  const esc = GDC.esc;
  GDC.MOD = GDC.MOD || {};

  const NOTE = {
    tip: { icon: '💡', label: { es: 'Consejo', en: 'Tip' } },
    warn: { icon: '⚠️', label: { es: 'Cuidado', en: 'Watch out' } },
    exam: { icon: '🎓', label: { es: 'Para el examen', en: 'For the exam' } },
    lab: { icon: '🧪', label: { es: 'Pruébalo', en: 'Try it' } },
    info: { icon: 'ℹ️', label: { es: 'Dato', en: 'Fact' } }
  };

  function block(b) {
    if (b.p) return GDC.LB(b.p);
    if (b.h) return `<h3 class="lx__h">${GDC.L(b.h)}</h3>`;
    if (b.list) return `<ul class="lx__list">${b.list.map(x => GDC.LB(x, null, 'li')).join('')}</ul>`;
    if (b.steps) return `<ol class="lx__steps">${b.steps.map(x => GDC.LB(x, null, 'li')).join('')}</ol>`;
    if (b.table) return `<div class="lx__tablewrap"><table class="lx__table">
        <thead><tr>${b.table.head.map(h => `<th>${GDC.L(h)}</th>`).join('')}</tr></thead>
        <tbody>${b.table.rows.map(r => `<tr>${r.map(c => `<td>${GDC.L(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;
    if (b.note) {
      const k = NOTE[b.kind || 'tip'];
      return `<aside class="lx__note lx__note--${b.kind || 'tip'}"><p class="lx__notelabel"><span aria-hidden="true">${k.icon}</span> ${GDC.L(k.label)}</p>${GDC.LB(b.note)}</aside>`;
    }
    if (b.flow) return `<ol class="lx__flow">${b.flow.map((x, i) => `<li style="--i:${i}"><span class="lx__flown">${i + 1}</span>${GDC.L(x)}</li>`).join('')}</ol>`;
    if (b.prompt) return `<figure class="lx__prompt">
        <figcaption>${b.label ? GDC.L(b.label) : '✦ Prompt'}</figcaption>
        <div class="lx__prompttext">${GDC.LB(b.prompt)}</div>
        <button type="button" class="btn btn--small lx__copy" data-copy="${esc(GDC.pick(b.prompt, GDC.lang() === 'en' ? 'en' : 'es'))}">Copiar</button>
      </figure>`;
    if (b.compare) return `<div class="lx__compare">
        <div class="lx__cmp lx__cmp--bad"><p class="lx__cmplabel">✗ ${GDC.L({ es: 'Poco efectivo', en: 'Less effective' })}</p><blockquote>${GDC.LB(b.compare.bad.t)}</blockquote>${GDC.LB(b.compare.bad.why)}</div>
        <div class="lx__cmp lx__cmp--good"><p class="lx__cmplabel">✓ ${GDC.L({ es: 'Efectivo', en: 'Effective' })}</p><blockquote>${GDC.LB(b.compare.good.t)}</blockquote>${GDC.LB(b.compare.good.why)}</div>
      </div>`;
    if (b.quote) return `<blockquote class="lx__quote">${GDC.LB(b.quote)}</blockquote>`;
    return '';
  }

  /* ---------- Mini quiz (reutilizable en práctica) ---------- */
  function quizCard(q, idx, total, key) {
    const order = GDC.shuffle(q.o.map((_, i) => i));
    return `<div class="qz" data-key="${esc(key)}" data-order="${order.join(',')}">
      <p class="qz__n mono">${idx + 1}/${total}</p>
      ${GDC.LB(q.q, null, 'p')}
      <div class="qz__opts">${order.map((oi, k) => `<button type="button" class="qz__opt" data-oi="${oi}">
          <span class="qz__letter">${'ABCD'[k]}</span><span class="qz__t">${GDC.L(q.o[oi].t)}</span></button>`).join('')}</div>
      <div class="qz__whys" hidden></div>
    </div>`;
  }

  function answer(card, q, oi) {
    if (card.classList.contains('is-done')) return;
    card.classList.add('is-done');
    const ok = !!q.o[oi].ok;
    const order = card.dataset.order.split(',').map(Number);
    card.querySelectorAll('.qz__opt').forEach(b => {
      const i = +b.dataset.oi;
      b.disabled = true;
      b.classList.toggle('is-right', !!q.o[i].ok);
      b.classList.toggle('is-wrong', i === oi && !ok);
      b.classList.toggle('is-picked', i === oi);
    });
    const whys = card.querySelector('.qz__whys');
    whys.innerHTML = `<p class="qz__verdict ${ok ? 'is-ok' : 'is-bad'}">${ok ? '✓ ¡Correcto!' : '✗ No es esa.'}</p>` +
      order.map((i, k) => `<div class="qz__why${q.o[i].ok ? ' is-right' : ''}"><b>${'ABCD'[k]}</b>${GDC.LB(q.o[i].why)}</div>`).join('');
    whys.hidden = false;
    GDC.Mascot.react(ok ? 'cheer' : 'oops');

    /* registro */
    const P = GDC.Store.P();
    const key = card.dataset.key;
    const a = P.answers[key] || (P.answers[key] = { n: 0, ok: 0, last: null, mode: null });
    const first = a.n === 0;
    a.n++; if (ok) a.ok++; a.last = ok; a.mode = GDC.lang();
    const ls = P.langStats[GDC.lang()]; ls.n++; if (ok) ls.ok++;
    if (q.d && P.domainStats[q.d]) { P.domainStats[q.d].n++; if (ok) P.domainStats[q.d].ok++; }
    GDC.Store.commit();
    const totalOk = Object.values(P.answers).reduce((s, x) => s + (x.ok ? 1 : 0), 0);
    if (totalOk >= 10) GDC.G.badge('quiz10');
    if (P.langStats.en.ok >= 10) GDC.G.badge('ingles');
    if (ok && first) GDC.G.award(10, 'respuesta correcta');
  }

  function bindQuiz(root, questions, prefix) {
    root.addEventListener('click', e => {
      const b = e.target.closest('.qz__opt'); if (!b) return;
      const card = b.closest('.qz');
      const idx = +card.dataset.key.split('#')[1];
      answer(card, questions[idx], +b.dataset.oi);
    });
  }

  /* ---------- Vista de módulo ---------- */
  function view(id) {
    const meta = GDC.MODULES.find(x => x.id === id);
    if (!meta) return GDC.Views.notFound();
    const m = GDC.MOD[id];
    const i = GDC.MODULES.indexOf(meta);
    const prev = GDC.MODULES[i - 1], next = GDC.MODULES[i + 1];
    const part = GDC.PARTS.find(p => p.id === meta.part);
    const P = GDC.Store.P();
    const read = !!P.modules[id]?.read;

    if (!m) {
      return GDC.node(`<section class="page modulo"><nav class="crumbs"><a href="#/ruta">Ruta</a> › Parte ${meta.part}</nav>
        <header class="page__head"><p class="kicker mono">Módulo ${meta.id}</p><h1>${GDC.L(meta.title)}</h1></header>
        <div class="soon sheet">${GDC.Mascot.svg({ size: 72, mood: 'think' })}<p>Este módulo está en preparación.</p></div></section>`);
    }

    const toc = m.secciones.map((s, k) => `<li><a href="#/modulo/${id}" data-jump="s${k}">${GDC.L(s.h)}</a></li>`).join('');
    const el = GDC.node(`<article class="page modulo lx">
      <nav class="crumbs"><a href="#/ruta">Ruta</a> › ${part.icon} Parte ${part.id} · ${GDC.L(part.title)}</nav>
      <header class="lx__head">
        <div>
          <p class="kicker mono">Módulo ${meta.id} · ${esc(meta.map)} ${read ? '· <span class="chip chip--spark">✓ leído</span>' : ''}</p>
          <h1>${GDC.L(meta.title)}</h1>
          ${GDC.LB(m.intro, null, 'p')}
          <p class="muted">⏱ ${m.min || 10} min · ${m.quiz.length} preguntas de repaso</p>
        </div>
        <div class="lx__lang">${GDC.langSwitcher(GDC.lang(), 'module')}</div>
      </header>

      <div class="lx__grid">
        <aside class="lx__side">
          <div class="lx__toc sheet"><p class="lx__toct">En este módulo</p><ol>${toc}
            <li><a href="#/modulo/${id}" data-jump="trampas">${GDC.L({ es: 'Trampas frecuentes', en: 'Common pitfalls' })}</a></li>
            <li><a href="#/modulo/${id}" data-jump="quiz">${GDC.L({ es: 'Mini quiz', en: 'Mini quiz' })}</a></li></ol></div>
        </aside>
        <div class="lx__main">
          <section class="lx__obj sheet">
            <h2>🎯 ${GDC.L({ es: 'Al terminar podrás…', en: 'By the end you will be able to…' })}</h2>
            <ul class="lx__list">${m.objetivos.map(o => GDC.LB(o, null, 'li')).join('')}</ul>
          </section>

          ${m.secciones.map((s, k) => `<section class="lx__sec" id="s${k}">
            <h2>${GDC.L(s.h)}</h2>${s.b.map(block).join('')}</section>`).join('')}

          <section class="lx__sec lx__traps" id="trampas">
            <h2>🪤 ${GDC.L({ es: 'Trampas frecuentes', en: 'Common pitfalls' })}</h2>
            <ul class="lx__list">${m.trampas.map(t => GDC.LB(t, null, 'li')).join('')}</ul>
          </section>

          <section class="lx__sec lx__ideas sheet">
            <h2>✦ ${GDC.L({ es: 'Ideas clave', en: 'Key ideas' })}</h2>
            <ul class="lx__list">${m.ideas.map(t => GDC.LB(t, null, 'li')).join('')}</ul>
          </section>

          <section class="lx__sec" id="quiz">
            <h2>🧠 ${GDC.L({ es: 'Mini quiz', en: 'Mini quiz' })}</h2>
            <p class="muted">Elige una opción: verás por qué cada respuesta es correcta o incorrecta.</p>
            <div class="lx__quiz">${m.quiz.map((q, k) => quizCard(q, k, m.quiz.length, `m${id}#${k}`)).join('')}</div>
          </section>

          ${m.fuentes?.length ? `<section class="lx__sec lx__src"><h2>📎 ${GDC.L({ es: 'Fuentes oficiales', en: 'Official sources' })}</h2>
            <ul>${m.fuentes.map(f => `<li><a href="${esc(f.url)}" target="_blank" rel="noopener noreferrer">${esc(f.t)}</a></li>`).join('')}</ul>
            <p class="muted">Verificado el ${GDC.DATA.verificado}. Gemini cambia seguido: si algo no coincide con lo que ves, manda lo que muestre tu cuenta.</p></section>` : ''}

          <div class="lx__done sheet">
            ${read ? `<p>✓ Ya marcaste este módulo como leído.</p>` : `<p>¿Terminaste de leer? Márcalo para ganar <b>25 XP</b> y avanzar en tu ruta.</p>
              <button type="button" class="btn btn--spark" data-act="read">Marcar como leído</button>`}
          </div>

          <div class="pager">
            ${prev ? `<a class="btn" href="#/modulo/${prev.id}">← ${prev.id} · ${GDC.L(prev.title)}</a>` : '<span></span>'}
            ${next ? `<a class="btn" href="#/modulo/${next.id}">${next.id} · ${GDC.L(next.title)} →</a>` : ''}
          </div>
        </div>
      </div>
    </article>`);

    el.addEventListener('click', e => {
      const j = e.target.closest('[data-jump]');
      if (j) { e.preventDefault(); el.querySelector('#' + j.dataset.jump)?.scrollIntoView({ behavior: GDC.reducedMotion() ? 'auto' : 'smooth', block: 'start' }); }
      const c = e.target.closest('[data-copy]');
      if (c) {
        navigator.clipboard?.writeText(c.dataset.copy).then(() => GDC.toast('Prompt copiado. Pégalo en Gemini.', 'ok', 1800), () => GDC.toast('No se pudo copiar.', 'bad'));
      }
      if (e.target.closest('[data-act="read"]')) markRead(id);
    });
    bindQuiz(el, m.quiz);
    return el;
  }

  function markRead(id) {
    const P = GDC.Store.P();
    P.modules[id] = Object.assign(P.modules[id] || {}, { read: true, at: Date.now() });
    GDC.Store.commit();
    GDC.G.award(25, 'módulo ' + id + ' leído');
    GDC.G.badge('modulo1');
    if (GDC.MODULES.filter(m => m.part === 1).every(m => P.modules[m.id]?.read)) GDC.G.badge('parte1');
    GDC.burst();
    GDC.App.route();
  }

  GDC.Lessons = { view, block, quizCard, answer, bindQuiz };
})();
