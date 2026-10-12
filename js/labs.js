/* Labs «encuentra el fallo»: 1) señala la(s) línea(s) con el error · 2) elige el arreglo.
   Contenido en js/content/labs-*.js (GDC.LABS). */
(function () {
  const esc = GDC.esc;
  GDC.LABS = GDC.LABS || [];

  const LEVEL = { basic: 'Básico', mid: 'Intermedio', hard: 'Avanzado' };
  const KIND = {
    prompt: '✍️ Prompt', gem: '🎯 Gem', canvas: '✏️ Canvas', output: '🤖 Respuesta de la IA',
    policy: '🛡️ Política', flow: '🧭 Flujo de trabajo', sheet: '📊 Sheets', notebook: '📚 Notebook'
  };
  const U = (es, en) => { const m = GDC.lang(); return m === 'en' ? en : m === 'es' ? es : `${en} · ${es}`; };

  /* ---------- listado ---------- */
  function list() {
    const P = GDC.Store.P();
    const solved = GDC.LABS.filter(l => P.labs[l.id]?.ok).length;
    const el = GDC.node(`<section class="page labs">
      <header class="page__head">
        <p class="kicker">Labs · ${solved}/${GDC.LABS.length} resueltos</p>
        <h1>Encuentra <span class="ink-spark">el fallo</span></h1>
        <p class="lede">Cada lab es un prompt, un Gem, una respuesta de la IA o un flujo de trabajo real con un error frecuente. Señala la línea que falla, elige el arreglo y lee por qué.</p>
      </header>
      <div class="gl__bar">${GDC.langSwitcher(GDC.lang(), 'labs')}</div>
      <div class="labgrid">${GDC.LABS.map((l, i) => {
        const st = P.labs[l.id];
        return `<a class="labcard rise ${st?.ok ? 'is-ok' : st ? 'is-tried' : ''}" style="--i:${i % 8}" href="#/labs/${l.id}">
          <span class="labcard__top mono"><span>${l.id.toUpperCase()}</span><span>M${l.mod} · D${l.d}</span></span>
          <span class="labcard__kind">${KIND[l.kind]}</span>
          <span class="labcard__t">${GDC.L(l.title)}</span>
          <span class="labcard__foot mono"><span>${LEVEL[l.level]}</span><span>${st?.ok ? '✓ resuelto' : st ? `↻ ${st.tries} intento(s)` : '○ nuevo'}</span></span>
        </a>`;
      }).join('')}</div>
    </section>`);
    return el;
  }

  /* ---------- detalle ---------- */
  function lineHTML(ln) {
    if (GDC.lang() === 'bi') return `<span class="lab-ln__en" lang="en">${esc(ln.en)}</span><span class="lab-ln__es" lang="es">${esc(ln.es)}</span>`;
    return `<span lang="${GDC.lang()}">${esc(GDC.pick(ln, GDC.lang()))}</span>`;
  }

  function detail(id) {
    const lab = GDC.LABS.find(l => l.id === id);
    if (!lab) return GDC.Views.notFound();
    const i = GDC.LABS.indexOf(lab), next = GDC.LABS[i + 1];
    const multi = lab.bug.length > 1;
    const order = GDC.shuffle(lab.options.map((_, k) => k));
    const mod = GDC.MODULES.find(m => m.id === lab.mod);

    const el = GDC.node(`<section class="page labd">
      <nav class="crumbs"><a href="#/labs">Labs</a> › ${lab.id.toUpperCase()} · ${LEVEL[lab.level]}</nav>
      <header class="lx__head">
        <div><p class="kicker">${KIND[lab.kind]}</p><h1>${GDC.L(lab.title)}</h1></div>
        <div class="lx__lang">${GDC.langSwitcher(GDC.lang(), 'lab')}</div>
      </header>
      <div class="labwrap">
        <div class="labmain">
          <div class="lab-ctx sheet">${GDC.LB(lab.context)}</div>
          <ol class="lab-steps">
            <li class="is-on" id="st1">1 · ${U(multi ? `Señala las ${lab.bug.length} líneas con el fallo` : 'Señala la línea con el fallo', multi ? `Select the ${lab.bug.length} faulty lines` : 'Select the faulty line')}</li>
            <li id="st2">2 · ${U('Elige el arreglo', 'Choose the fix')}</li>
          </ol>
          <figure class="lab-file">
            <figcaption><span>${esc(lab.file)}</span><span class="mono">${lab.lines.length} ${U('líneas', 'lines')}</span></figcaption>
            <div class="lab-lines" id="labLines">${lab.lines.map((ln, k) => `<button type="button" class="lab-ln" data-i="${k}" aria-pressed="false">
              <span class="lab-ln__n mono">${k + 1}</span><span class="lab-ln__c">${lineHTML(ln)}</span></button>`).join('')}</div>
          </figure>
          <div class="lab-act">
            <button type="button" class="btn btn--primary" id="labCheck" disabled>${U('Confirmar', 'Confirm')}</button>
            <span class="muted" id="labMsg" aria-live="polite"></span>
          </div>
          <section class="lab-fix" id="labFix" hidden>
            ${GDC.LB(lab.question)}
            <div class="qz__opts">${order.map((oi, k) => `<button type="button" class="qz__opt" data-oi="${oi}">
              <span class="qz__letter">${'ABCD'[k]}</span><span class="qz__t">${GDC.L(lab.options[oi].t)}</span></button>`).join('')}</div>
            <div class="qz__whys" id="labWhy" hidden></div>
          </section>
          <section class="lab-result sheet" id="labResult" hidden></section>
        </div>
        <aside class="labside">
          <details class="sheet lab-hint"><summary>💡 ${U('Pista', 'Hint')}</summary>${GDC.LB(lab.hint)}</details>
          ${mod ? `<a class="tile" href="#/modulo/${mod.id}"><span class="tile__ico">📖</span><span class="tile__t">Módulo ${mod.id}</span><span class="tile__d">${GDC.L(mod.title)}</span></a>` : ''}
          ${next ? `<a class="btn btn--block" href="#/labs/${next.id}">${U('Siguiente lab', 'Next lab')} → ${next.id.toUpperCase()}</a>` : ''}
        </aside>
      </div>
    </section>`);

    const sel = new Set();
    let linesOk = false, tries = 0;
    const lines = el.querySelector('#labLines');
    const check = el.querySelector('#labCheck');
    const msg = el.querySelector('#labMsg');

    lines.addEventListener('click', e => {
      const b = e.target.closest('.lab-ln'); if (!b || linesOk) return;
      const k = +b.dataset.i;
      if (sel.has(k)) sel.delete(k);
      else { if (!multi) { sel.clear(); lines.querySelectorAll('.lab-ln').forEach(x => { x.classList.remove('is-sel'); x.setAttribute('aria-pressed', 'false'); }); } sel.add(k); }
      b.classList.toggle('is-sel', sel.has(k)); b.setAttribute('aria-pressed', String(sel.has(k)));
      lines.querySelectorAll('.lab-ln').forEach(x => x.classList.remove('is-wrong'));
      check.disabled = sel.size !== lab.bug.length;
      msg.textContent = sel.size ? `${sel.size}/${lab.bug.length}` : '';
    });

    check.addEventListener('click', () => {
      tries++;
      const ok = lab.bug.every(k => sel.has(k)) && sel.size === lab.bug.length;
      if (!ok) {
        sel.forEach(k => { if (!lab.bug.includes(k)) lines.querySelector(`[data-i="${k}"]`).classList.add('is-wrong'); });
        msg.textContent = U('Todavía no. Relee el contexto: ¿qué regla o riesgo se incumple?', 'Not yet. Reread the context: which rule or risk is being broken?');
        GDC.Mascot.react('oops');
        if (tries >= 2) el.querySelector('.lab-hint').open = true;
        return;
      }
      linesOk = true;
      lab.bug.forEach(k => lines.querySelector(`[data-i="${k}"]`).classList.add('is-bug'));
      lines.querySelectorAll('.lab-ln').forEach(x => x.disabled = true);
      check.hidden = true;
      msg.textContent = U('¡Bien visto! Ahora elige el arreglo.', 'Well spotted! Now choose the fix.');
      el.querySelector('#st1').classList.replace('is-on', 'is-done');
      el.querySelector('#st2').classList.add('is-on');
      el.querySelector('#labFix').hidden = false;
      el.querySelector('#labFix').scrollIntoView({ behavior: GDC.reducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
      GDC.Mascot.react('cheer');
    });

    el.querySelector('#labFix').addEventListener('click', e => {
      const b = e.target.closest('.qz__opt'); if (!b || el.querySelector('#labFix').classList.contains('is-done')) return;
      el.querySelector('#labFix').classList.add('is-done');
      const oi = +b.dataset.oi, ok = !!lab.options[oi].ok;
      el.querySelectorAll('#labFix .qz__opt').forEach(x => {
        const k = +x.dataset.oi; x.disabled = true;
        x.classList.toggle('is-right', !!lab.options[k].ok);
        x.classList.toggle('is-wrong', k === oi && !ok);
      });
      const why = el.querySelector('#labWhy');
      why.innerHTML = `<p class="qz__verdict ${ok ? 'is-ok' : 'is-bad'}">${ok ? '✓ ' + U('¡Arreglo correcto!', 'Correct fix!') : '✗ ' + U('Ese arreglo no resuelve el problema.', 'That fix doesn’t solve the problem.')}</p>` +
        order.map((k, n) => `<div class="qz__why${lab.options[k].ok ? ' is-right' : ''}"><b>${'ABCD'[n]}</b>${GDC.LB(lab.options[k].why)}</div>`).join('');
      why.hidden = false;
      finish(lab, ok && tries === 1, ok, el);
    });
    return el;
  }

  function finish(lab, perfect, ok, el) {
    const P = GDC.Store.P();
    const st = P.labs[lab.id] || (P.labs[lab.id] = { ok: false, tries: 0, at: null });
    const first = !st.ok;
    st.tries++; st.at = Date.now();
    if (ok) st.ok = true;
    GDC.Store.commit();
    GDC.Mascot.react(ok ? 'cheer' : 'oops');
    if (ok && first) { GDC.G.award(perfect ? 30 : 15, `lab ${lab.id.toUpperCase()}`); GDC.G.badge('lab1'); }
    const res = el.querySelector('#labResult');
    res.innerHTML = `<h2>${ok ? '✓' : '↻'} ${GDC.L({ es: 'Lo que aprendiste', en: 'What you learned' })}</h2>${GDC.LB(lab.lesson)}
      ${ok ? '' : `<button type="button" class="btn" data-act="retry">${GDC.L({ es: 'Intentar de nuevo', en: 'Try again' })}</button>`}`;
    res.hidden = false;
    res.addEventListener('click', e => { if (e.target.closest('[data-act="retry"]')) GDC.App.route(); });
  }

  GDC.Labs = { list, detail };
})();
