/* Simulacros cronometrados (preguntas originales; las reales son confidenciales).
   Educator: 37 preguntas · 120 min · reparto parejo D1/D2/D3 · aprobado estimado 80 % (no oficial).
   Student: 30 preguntas · 60 min · Student + D1 + D3 (aproximación propia).
   Faculty: 37 preguntas · 120 min · D1/D2/D3 con prioridad a las preguntas universitarias (fac o módulos 27-29).
   Google no publica duración ni número de preguntas del Faculty: es una aproximación declarada. */
(function () {
  const esc = GDC.esc;
  const TYPES = {
    educator: { name: 'Gemini Certified Educator', n: 37, min: 120, mix: { 1: 12, 2: 13, 3: 12 }, pass: 80 },
    faculty: { name: 'Gemini Certified Faculty', n: 37, min: 120, mix: { 1: 12, 2: 13, 3: 12 }, pass: 80 },
    student: { name: 'Gemini Student Certification', n: 30, min: 60, mix: { S: 10, 1: 10, 3: 10 }, pass: 80 }
  };
  const FAC_MODS = ['27', '28', '29'];
  const isFac = q => !!q.fac || FAC_MODS.includes(q.mod);
  /* Qué preguntas se priorizan en cada simulacro (el resto completa si faltan) */
  const PREFER = { educator: q => !isFac(q), student: () => true, faculty: isFac };
  const CARD = {
    educator: { kicker: '👩‍🏫 Docentes de colegio', short: 'Educator', text: 'El examen real dura 2 horas y es de opción múltiple; Google no publica el número de preguntas ni el puntaje de aprobación: aquí usamos 37 y 80 % como aproximación.' },
    faculty: { kicker: '🏛️ Profesores universitarios', short: 'Faculty', text: 'Oficial: gratis, válido 3 años y de opción múltiple. Google no publica la duración ni el número de preguntas: aquí usamos 120 min, 37 preguntas y 80 % como aproximación. Prioriza investigación, diseño de cursos y propiedad intelectual (módulos 27 a 29).' },
    student: { kicker: '🎓 Estudiantes', short: 'Student', text: 'Aproximación propia basada en los temas oficiales: alfabetización en IA, Gemini, Gemini Notebook, Guided Learning y uso responsable.' }
  };
  const UI = (es, en) => { const m = GDC.lang(); return m === 'en' ? en : m === 'es' ? es : `${en} · ${es}`; };
  let exam = null;   // simulacro en curso (vive mientras la pestaña esté abierta)
  let timer = null;

  function view() {
    if (exam && !exam.done) return runView();
    if (exam && exam.done) return resultView();
    return home();
  }

  function home() {
    const P = GDC.Store.P();
    const hist = P.exams.slice(-6).reverse();
    const el = GDC.node(`<section class="page simulacro">
      <header class="page__head">
        <p class="kicker">Simulacros</p>
        <h1>Ensaya el examen <span class="ink-spark">con reloj</span></h1>
        <p class="lede">Preguntas originales con el formato de las certificaciones de Google for Education. No verás la explicación hasta terminar, como en el examen real.</p>
      </header>
      <div class="grid2">
        ${Object.entries(TYPES).map(([k, t]) => `<section class="sheet ex__card">
          <p class="kicker">${CARD[k].kicker}</p>
          <h2>${esc(t.name)}</h2>
          <ul class="ex__facts"><li><b>${t.n}</b> preguntas</li><li><b>${t.min}</b> min</li><li>aprobado estimado <b>${t.pass} %</b></li></ul>
          <p class="muted">${CARD[k].text}</p>
          <button type="button" class="btn btn--spark" data-start="${k}">Empezar simulacro</button>
        </section>`).join('')}
      </div>
      <section class="sheet"><h2>Antes de empezar</h2>
        <ul class="lx__list">
          <li>Elige el idioma ahora: ${GDC.langSwitcher(GDC.lang(), 'exam')} (el examen real puede rendirse en español).</li>
          <li>Puedes marcar preguntas para revisarlas y moverte libremente entre ellas.</li>
          <li>Si se acaba el tiempo, el simulacro se entrega automáticamente.</li>
          <li>Si sales de esta página, el simulacro sigue en curso mientras no cierres la pestaña.</li>
        </ul>
      </section>
      ${hist.length ? `<section class="sheet"><h2>Tus últimos simulacros</h2>
        <div class="tablewrap"><table class="table"><thead><tr><th>Fecha</th><th>Tipo</th><th>Puntaje</th><th>Resultado</th><th>Idioma</th></tr></thead>
        <tbody>${hist.map(x => `<tr><td>${new Date(x.at).toLocaleDateString('es')}</td><td>${CARD[x.type]?.short || x.type}</td><td>${x.pct}% (${x.ok}/${x.n})</td><td>${x.pct >= TYPES[x.type].pass ? '✓ aprobado' : '✗ no aprobado'}</td><td>${GDC.MODES[x.lang]?.short || x.lang}</td></tr>`).join('')}</tbody></table></div></section>` : ''}
    </section>`);
    el.addEventListener('click', e => { const b = e.target.closest('[data-start]'); if (b) start(b.dataset.start); });
    return el;
  }

  function pickQuestions(type) {
    const t = TYPES[type];
    const all = GDC.Practice.pool();
    const P = GDC.Store.P();
    let qs = [];
    for (const [d, n] of Object.entries(t.mix)) {
      const pref = PREFER[type] || (() => true);
      const inD = all.filter(q => String(q.d) === d);
      /* prioriza: preguntas propias del simulacro (banco y luego mini quiz) y, dentro de ellas, las que aún no viste */
      const fresh = arr => GDC.shuffle(arr).sort((a, b) => (P.answers[a.id] ? 1 : 0) - (P.answers[b.id] ? 1 : 0));
      const ordered = [
        ...fresh(inD.filter(q => pref(q) && q.src === 'bank')), ...fresh(inD.filter(q => pref(q) && q.src === 'mod')),
        ...fresh(inD.filter(q => !pref(q) && q.src === 'bank')), ...fresh(inD.filter(q => !pref(q) && q.src === 'mod'))
      ];
      qs = qs.concat(ordered.slice(0, n));
    }
    return GDC.shuffle(qs).map(q => ({ q, order: GDC.shuffle(q.o.map((_, i) => i)), pick: null, flag: false }));
  }

  function start(type) {
    exam = { type, items: pickQuestions(type), i: 0, startAt: Date.now(), endAt: Date.now() + TYPES[type].min * 60000, done: false, lang: GDC.lang() };
    GDC.App.route();
  }

  function fmt(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return (h ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(x).padStart(2, '0');
  }

  function runView() {
    const it = exam.items[exam.i], q = it.q, n = exam.items.length;
    const answered = exam.items.filter(x => x.pick != null).length;
    const el = GDC.node(`<section class="page ex">
      <div class="ex__bar sheet">
        <span class="ex__title">${esc(TYPES[exam.type].name)}</span>
        <span class="ex__count mono">${UI('Pregunta', 'Question')} ${exam.i + 1} ${UI('de', 'of')} ${n} · ${answered} ${UI('respondidas', 'answered')}</span>
        <span class="ex__timer mono" id="exTimer" role="timer" aria-live="off">⏱ ${fmt(exam.endAt - Date.now())}</span>
      </div>
      <div class="ex__grid">
        <div class="ex__main">
          <div class="qz ex__q">
            ${GDC.LB(q.q)}
            <p class="muted">${UI('Elige una respuesta.', 'Choose one answer.')}</p>
            <div class="qz__opts">${it.order.map((oi, k) => `<button type="button" class="qz__opt ex__opt${it.pick === oi ? ' is-picked' : ''}" data-oi="${oi}" aria-pressed="${it.pick === oi}">
              <span class="qz__letter">${'ABCD'[k]}</span><span class="qz__t">${GDC.L(q.o[oi].t)}</span></button>`).join('')}</div>
          </div>
          <div class="ex__nav">
            <button type="button" class="btn" data-act="prev" ${exam.i === 0 ? 'disabled' : ''}>← ${UI('Anterior', 'Previous')}</button>
            <button type="button" class="btn ${it.flag ? 'btn--flag' : 'btn--ghost'}" data-act="flag" aria-pressed="${it.flag}">⚑ ${UI('Marcar para revisar', 'Flag for review')}</button>
            ${exam.i + 1 < n ? `<button type="button" class="btn btn--primary" data-act="next">${UI('Siguiente', 'Next')} →</button>` : `<button type="button" class="btn btn--spark" data-act="finish">${UI('Terminar examen', 'End exam')}</button>`}
          </div>
        </div>
        <aside class="ex__side sheet">
          <p class="ex__sidet">${UI('Mapa de preguntas', 'Question map')}</p>
          <div class="ex__map">${exam.items.map((x, k) => `<button type="button" class="ex__dot${k === exam.i ? ' is-cur' : ''}${x.pick != null ? ' is-ans' : ''}${x.flag ? ' is-flag' : ''}" data-go="${k}" aria-label="${UI('Ir a la pregunta', 'Go to question')} ${k + 1}">${k + 1}</button>`).join('')}</div>
          <p class="muted ex__legend">■ ${UI('respondida', 'answered')} · ⚑ ${UI('marcada', 'flagged')}</p>
          <button type="button" class="btn btn--block" data-act="finish">${UI('Terminar examen', 'End exam')}</button>
        </aside>
      </div>
    </section>`);

    el.addEventListener('click', e => {
      const o = e.target.closest('.ex__opt');
      if (o) { it.pick = +o.dataset.oi; GDC.App.route(); return; }
      const g = e.target.closest('[data-go]');
      if (g) { exam.i = +g.dataset.go; GDC.App.route(); return; }
      const a = e.target.closest('[data-act]')?.dataset.act;
      if (a === 'prev' && exam.i > 0) { exam.i--; GDC.App.route(); }
      if (a === 'next' && exam.i + 1 < n) { exam.i++; GDC.App.route(); }
      if (a === 'flag') { it.flag = !it.flag; GDC.App.route(); }
      if (a === 'finish') {
        const left = exam.items.filter(x => x.pick == null).length;
        if (!left || confirm(UI(`Te quedan ${left} preguntas sin responder. ¿Terminar de todos modos?`, `You have ${left} unanswered questions. End anyway?`))) finish();
      }
    });
    tick();
    return el;
  }

  function tick() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (!exam || exam.done) return clearInterval(timer);
      const left = exam.endAt - Date.now();
      const t = document.getElementById('exTimer');
      if (t) { t.textContent = '⏱ ' + fmt(left); t.classList.toggle('is-low', left < 5 * 60000); }
      if (left <= 0) { clearInterval(timer); finish(true); }
    }, 1000);
  }

  function finish(timeout) {
    clearInterval(timer);
    const P = GDC.Store.P();
    const byD = {};
    let ok = 0;
    for (const it of exam.items) {
      const good = it.pick != null && !!it.q.o[it.pick].ok;
      if (good) ok++;
      const d = String(it.q.d);
      byD[d] = byD[d] || { n: 0, ok: 0 }; byD[d].n++; if (good) byD[d].ok++;
      /* las respuestas del simulacro alimentan «solo las que fallé» y las estadísticas */
      if (it.pick != null) {
        const a = P.answers[it.q.id] || (P.answers[it.q.id] = { n: 0, ok: 0, last: null, mode: null });
        a.n++; if (good) a.ok++; a.last = good; a.mode = exam.lang;
        const ls = P.langStats[exam.lang]; ls.n++; if (good) ls.ok++;
        if (P.domainStats[d]) { P.domainStats[d].n++; if (good) P.domainStats[d].ok++; }
      }
    }
    const n = exam.items.length, pct = Math.round((ok / n) * 100);
    Object.assign(exam, { done: true, ok, pct, byD, timeout: !!timeout, secs: Math.round((Math.min(Date.now(), exam.endAt) - exam.startAt) / 1000) });
    P.exams.push({ type: exam.type, at: Date.now(), n, ok, pct, byD, lang: exam.lang, secs: exam.secs });
    GDC.Store.commit();
    GDC.G.badge('simulacro');
    if (pct >= TYPES[exam.type].pass) { GDC.G.badge('aprobado'); GDC.burst(); }
    GDC.G.award(ok * 3, 'simulacro terminado');
    GDC.App.route();
  }

  function resultView() {
    const t = TYPES[exam.type], pass = exam.pct >= t.pass;
    const D = GDC.Practice.DOMAINS;
    const el = GDC.node(`<section class="page ex">
      <div class="ex__res sheet">
        ${GDC.Mascot.svg({ size: 96, cls: 'is-float' })}
        <p class="kicker">${esc(t.name)} · ${exam.timeout ? UI('tiempo agotado', 'time ran out') : fmt(exam.secs * 1000)}</p>
        <h1>${exam.pct}% <small class="muted">(${exam.ok}/${exam.items.length})</small></h1>
        <p class="ex__verdict ${pass ? 'is-ok' : 'is-bad'}">${pass ? '✓ ' + UI('APROBADO (estimado)', 'PASS (estimated)') : '✗ ' + UI('NO APROBADO (estimado)', 'FAIL (estimated)')}</p>
        <p class="muted">Puntaje de aprobación estimado: ${t.pass} %. No es una cifra oficial de Google.</p>
      </div>
      <section class="sheet"><h2>${UI('Por dominio', 'By domain')}</h2>
        <ul class="ex__doms">${Object.entries(exam.byD).map(([d, s]) => { const p = Math.round((s.ok / s.n) * 100); return `<li>
          <span>${D[d].icon} ${GDC.L(D[d])}</span><b>${p}%</b>
          <span class="bar"><i style="width:${p}%"></i></span><small class="muted">${s.ok}/${s.n}</small></li>`; }).join('')}</ul>
      </section>
      <section class="sheet"><h2>${UI('Revisión de respuestas', 'Answer review')}</h2>
        <div class="ex__review">${exam.items.map((it, k) => {
          const good = it.pick != null && !!it.q.o[it.pick].ok;
          return `<details class="ex__rv ${good ? 'is-ok' : 'is-bad'}">
            <summary><span class="mono">${k + 1}</span> ${good ? '✓' : '✗'} ${GDC.L(it.q.q)}</summary>
            <div class="qz__whys">${it.order.map((oi, j) => `<div class="qz__why${it.q.o[oi].ok ? ' is-right' : ''}"><b>${'ABCD'[j]}</b><div>${GDC.L(it.q.o[oi].t)}${it.pick === oi ? ' <span class="chip">' + UI('tu respuesta', 'your answer') + '</span>' : ''}${GDC.LB(it.q.o[oi].why)}</div></div>`).join('')}
              <a href="#/modulo/${it.q.mod}" class="gl__mod">Módulo ${it.q.mod} →</a></div>
          </details>`;
        }).join('')}</div>
      </section>
      <div class="row"><button type="button" class="btn btn--spark" data-act="new">${UI('Nuevo simulacro', 'New mock exam')}</button><a class="btn" href="#/practica">${UI('Practicar mis fallos', 'Practise my mistakes')}</a></div>
    </section>`);
    el.addEventListener('click', e => { if (e.target.closest('[data-act="new"]')) { exam = null; GDC.App.route(); } });
    return el;
  }

  GDC.Exam = { view, TYPES, pickQuestions, isFac };
})();
