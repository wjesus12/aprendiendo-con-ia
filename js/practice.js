/* Práctica: banco de preguntas (js/content/bank-*.js) + preguntas de los mini quiz de los módulos.
   Filtros por dominio, módulo, cantidad y «solo las que fallé». */
(function () {
  const esc = GDC.esc;
  GDC.BANK = GDC.BANK || [];

  const DOMAINS = {
    1: { icon: '🧠', es: 'Comprender la IA generativa y Gemini', en: 'Understanding Generative AI & Gemini' },
    2: { icon: '🛠️', es: 'Implementar Gemini en la práctica educativa', en: 'Implementing Gemini in Educational Practice' },
    3: { icon: '🛡️', es: 'Uso responsable de la IA en educación', en: 'Responsible AI Use in Education' },
    S: { icon: '🎓', es: 'Certificación para estudiantes y examen', en: 'Student certification and exam' }
  };

  /* Todas las preguntas disponibles: banco + mini quiz de módulos (comparten estadísticas por id) */
  function pool() {
    const mods = [];
    for (const id of Object.keys(GDC.MOD)) GDC.MOD[id].quiz.forEach((q, k) => mods.push(Object.assign({ id: `m${id}#${k}`, mod: id, src: 'mod' }, q)));
    return GDC.BANK.map(q => Object.assign({ src: 'bank' }, q)).concat(mods);
  }

  const U = (es, en) => { const m = GDC.lang(); return m === 'en' ? en : m === 'es' ? es : `${en} · ${es}`; };

  /* Una sesión de práctica vive mientras no cambies de vista */
  let session = null;

  function view() {
    return session && !session.done ? run() : setup();
  }

  function setup() {
    const P = GDC.Store.P();
    const all = pool();
    const failed = all.filter(q => P.answers[q.id] && P.answers[q.id].last === false);
    const seen = all.filter(q => P.answers[q.id]).length;
    const el = GDC.node(`<section class="page practica">
      <header class="page__head">
        <p class="kicker">Práctica · ${all.length} preguntas</p>
        <h1>Practica con <span class="ink-spark">escenarios reales</span></h1>
        <p class="lede">Cada pregunta plantea una situación de aula con 4 opciones plausibles. Al responder verás por qué cada una es correcta o incorrecta. Has respondido ${seen} de ${all.length}.</p>
      </header>
      <form class="pr__form sheet" id="prForm">
        <fieldset class="pr__fs"><legend>Dominio del examen</legend>
          <div class="pr__chips">
            <label class="pr__chip"><input type="radio" name="d" value="all" checked> Todos</label>
            ${Object.entries(DOMAINS).map(([k, d]) => `<label class="pr__chip"><input type="radio" name="d" value="${k}"> ${d.icon} ${k === 'S' ? 'Student' : 'D' + k} · ${d.es}</label>`).join('')}
          </div></fieldset>
        <div class="pr__row">
          <label class="field"><span>Módulo</span>
            <select name="mod"><option value="all">Todos los módulos</option>
              ${GDC.MODULES.map(m => `<option value="${m.id}">${m.id} · ${esc(m.title.es)}</option>`).join('')}</select></label>
          <label class="field"><span>Cantidad</span>
            <select name="n"><option>5</option><option selected>10</option><option>20</option><option value="999">Todas</option></select></label>
          <label class="field"><span>Idioma</span>${GDC.langSwitcher(GDC.lang(), 'practice')}</label>
        </div>
        <label class="pr__check"><input type="checkbox" name="failed" ${failed.length ? '' : 'disabled'}> Solo las que fallé la última vez (${failed.length})</label>
        <label class="pr__check"><input type="checkbox" name="unseen"> Solo las que nunca respondí</label>
        <label class="pr__check"><input type="checkbox" name="fac"> Solo preguntas de nivel universitario (Faculty)</label>
        <p class="gform__err" id="prErr" role="alert"></p>
        <button class="btn btn--spark">Empezar práctica</button>
      </form>
    </section>`);

    el.querySelector('#prForm').addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const d = fd.get('d'), mod = fd.get('mod'), n = +fd.get('n');
      let qs = all.filter(q => (d === 'all' || String(q.d) === d) && (mod === 'all' || q.mod === mod));
      if (fd.get('failed')) qs = qs.filter(q => P.answers[q.id]?.last === false);
      if (fd.get('unseen')) qs = qs.filter(q => !P.answers[q.id]);
      if (fd.get('fac')) qs = qs.filter(q => q.fac || ['27', '28', '29'].includes(q.mod));
      if (!qs.length) { el.querySelector('#prErr').textContent = 'No hay preguntas con esos filtros. Prueba otra combinación.'; return; }
      session = { qs: GDC.shuffle(qs).slice(0, n), i: 0, ok: 0, done: false, answered: false };
      GDC.App.route();
    });
    return el;
  }

  function run() {
    const s = session, q = s.qs[s.i];
    const el = GDC.node(`<section class="page practica">
      <div class="pr__bar">
        <a class="btn btn--small btn--ghost" href="#/practica" data-act="quit">← Salir</a>
        <span class="mono">${s.i + 1}/${s.qs.length} · ✓ ${s.ok}</span>
        ${GDC.langSwitcher(GDC.lang(), 'practice')}
      </div>
      <span class="bar pr__progress" aria-hidden="true"><i style="width:${Math.round((s.i / s.qs.length) * 100)}%"></i></span>
      <p class="pr__meta"><span class="chip chip--spark">${DOMAINS[q.d].icon} ${q.d === 'S' ? 'Student' : 'Dominio ' + q.d}</span>
        <a class="chip" href="#/modulo/${q.mod}">Módulo ${q.mod}</a>${q.fac ? '<span class="chip">🏛️ Faculty</span>' : ''}${q.src === 'mod' ? '<span class="chip">mini quiz</span>' : ''}</p>
      <div id="prCard">${GDC.Lessons.quizCard(q, s.i, s.qs.length, q.id)}</div>
      <div class="pr__next" id="prNext" hidden><button type="button" class="btn btn--spark" data-act="next">${s.i + 1 < s.qs.length ? U('Siguiente', 'Next') + ' →' : U('Ver resultado', 'See result')}</button></div>
    </section>`);
    /* Si cambias de idioma tras responder, la vista se redibuja: no se puede responder de nuevo, pero sí avanzar */
    if (s.answered) {
      el.querySelector('#prNext').hidden = false;
      el.querySelectorAll('.qz__opt').forEach(o => { o.disabled = true; o.classList.toggle('is-right', !!q.o[+o.dataset.oi].ok); });
    }

    el.addEventListener('click', e => {
      const opt = e.target.closest('.qz__opt');
      if (opt && !s.answered) {
        const card = opt.closest('.qz');
        GDC.Lessons.answer(card, q, +opt.dataset.oi);
        s.answered = true;
        if (q.o[+opt.dataset.oi].ok) s.ok++;
        el.querySelector('#prNext').hidden = false;
        el.querySelector('#prNext button').focus({ preventScroll: true });
      }
      if (e.target.closest('[data-act="next"]')) {
        s.i++; s.answered = false;
        if (s.i >= s.qs.length) s.done = true;
        s.done ? summary(el) : GDC.App.route();
      }
      if (e.target.closest('[data-act="quit"]')) { session = null; }
    });
    return el;
  }

  function summary(el) {
    const s = session;
    const pct = Math.round((s.ok / s.qs.length) * 100);
    const res = GDC.node(`<section class="page practica">
      <div class="pr__sum sheet">
        ${GDC.Mascot.svg({ size: 96, cls: 'is-float' })}
        <h1>${pct}% <small class="muted">(${s.ok}/${s.qs.length})</small></h1>
        <p class="lede">${pct >= 80 ? '¡Excelente! Vas por muy buen camino.' : pct >= 60 ? 'Bien. Repasa los módulos de las preguntas que fallaste.' : 'Sigue practicando: revisa la teoría y vuelve a intentarlo con «solo las que fallé».'}</p>
        <div class="row"><a class="btn btn--spark" href="#/practica" data-act="again">Nueva práctica</a><a class="btn" href="#/progreso">Ver mi progreso</a></div>
      </div>
    </section>`);
    res.addEventListener('click', e => { if (e.target.closest('[data-act="again"]')) session = null; });
    if (pct >= 80 && s.qs.length >= 10) GDC.Mascot.react('cheer');
    el.replaceWith(res);
    session = null;
  }

  GDC.Practice = { view, pool, DOMAINS, reset: () => { session = null; } };
})();
