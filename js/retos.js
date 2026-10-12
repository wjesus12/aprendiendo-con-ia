/* Retos de construcción: coloca cada pieza en su casilla (arrastrando o tocando pieza y casilla).
   kind 'slots' = cada casilla tiene un nombre · 'order' = casillas numeradas (secuencia).
   El banco incluye distractores. Contenido en js/content/retos.js (GDC.RETOS). */
(function () {
  const esc = GDC.esc;
  GDC.RETOS = GDC.RETOS || [];
  const U = (es, en) => { const m = GDC.lang(); return m === 'en' ? en : m === 'es' ? es : `${en} · ${es}`; };

  function list() {
    const P = GDC.Store.P();
    const done = GDC.RETOS.filter(r => P.builds[r.id]?.ok).length;
    return GDC.node(`<section class="page retos">
      <header class="page__head">
        <p class="kicker">Retos · ${done}/${GDC.RETOS.length} completados</p>
        <h1>Construye <span class="ink-spark">la solución</span></h1>
        <p class="lede">Arma prompts, Gems y flujos de trabajo pieza por pieza. Arrastra cada pieza a su casilla (o tócala y luego toca la casilla). Cuidado: hay piezas que no pertenecen a la solución.</p>
      </header>
      <div class="gl__bar">${GDC.langSwitcher(GDC.lang(), 'retos')}</div>
      <div class="labgrid">${GDC.RETOS.map((r, i) => {
        const st = P.builds[r.id];
        return `<a class="labcard rise ${st?.ok ? 'is-ok' : st ? 'is-tried' : ''}" style="--i:${i}" href="#/retos/${r.id}">
          <span class="labcard__top mono"><span>${r.id.toUpperCase()}</span><span>M${r.mod}</span></span>
          <span class="labcard__kind">${r.kind === 'order' ? '🔢 Ordenar' : '🧩 Armar'} · ${r.slots.length} piezas</span>
          <span class="labcard__t">${GDC.L(r.title)}</span>
          <span class="labcard__foot mono"><span>${r.pieces.length - r.slots.length} distractores</span><span>${st?.ok ? '✓ completado' : st ? `↻ ${st.tries} intento(s)` : '○ nuevo'}</span></span>
        </a>`;
      }).join('')}</div>
    </section>`);
  }

  function detail(id) {
    const r = GDC.RETOS.find(x => x.id === id);
    if (!r) return GDC.Views.notFound();
    const i = GDC.RETOS.indexOf(r), next = GDC.RETOS[i + 1];
    const piece = pid => r.pieces.find(p => p.id === pid);
    const state = r.slots.map(() => null);        // pieza colocada en cada casilla
    let picked = null, tries = 0, sawSolution = false, solved = false;
    const bankOrder = GDC.shuffle(r.pieces.map(p => p.id));

    const el = GDC.node(`<section class="page retod">
      <nav class="crumbs"><a href="#/retos">Retos</a> › ${r.id.toUpperCase()}</nav>
      <header class="lx__head">
        <div><p class="kicker">${r.kind === 'order' ? '🔢 Ordena la secuencia' : '🧩 Arma la solución'}</p><h1>${GDC.L(r.title)}</h1></div>
        <div class="lx__lang">${GDC.langSwitcher(GDC.lang(), 'reto')}</div>
      </header>
      <div class="lab-ctx sheet">${GDC.LB(r.brief)}</div>
      <div class="rt">
        <div class="rt__slots" id="rtSlots"></div>
        <div class="rt__bankwrap">
          <p class="rt__banklabel">${U('Piezas disponibles', 'Available pieces')} <small class="muted">${U('(toca una y luego una casilla, o arrástrala)', '(tap one then a slot, or drag it)')}</small></p>
          <div class="rt__bank" id="rtBank"></div>
        </div>
      </div>
      ${r.preview ? `<figure class="lx__prompt rt__preview"><figcaption>✦ ${U('Tu prompt hasta ahora', 'Your prompt so far')}</figcaption><div class="lx__prompttext" id="rtPreview"></div></figure>` : ''}
      <div class="lab-act">
        <button type="button" class="btn btn--spark" id="rtCheck">${U('Comprobar', 'Check')}</button>
        <button type="button" class="btn" id="rtReset">${U('Reiniciar', 'Reset')}</button>
        <button type="button" class="btn btn--ghost" id="rtSol">${U('Ver solución', 'Show solution')}</button>
        <span class="muted" id="rtMsg" aria-live="polite"></span>
      </div>
      <section class="lab-result sheet" id="rtResult" hidden></section>
      <div class="pager">
        <a class="btn" href="#/modulo/${r.mod}">📖 Módulo ${r.mod}</a>
        ${next ? `<a class="btn" href="#/retos/${next.id}">${U('Siguiente reto', 'Next challenge')} → ${next.id.toUpperCase()}</a>` : ''}
      </div>
    </section>`);

    const slotsEl = el.querySelector('#rtSlots');
    const bankEl = el.querySelector('#rtBank');
    const chip = (pid, where) => `<button type="button" class="rt__piece" data-pid="${pid}" data-where="${where}">${GDC.L(piece(pid).t)}</button>`;

    function draw(marks) {
      slotsEl.innerHTML = r.slots.map((s, k) => {
        const m = marks ? (state[k] === s.expect ? ' is-right' : ' is-wrong') : '';
        return `<div class="rt__slot${r.kind === 'order' ? ' rt__slot--order' : ''}${state[k] ? ' is-filled' : ''}${m}" data-k="${k}">
          <span class="rt__slotlabel">${r.kind === 'order' ? `<b class="lx__flown">${k + 1}</b>` : ''}${s.label ? GDC.L(s.label) : ''}</span>
          <span class="rt__drop">${state[k] ? chip(state[k], 'slot') : `<span class="rt__ph">${U('Suelta aquí', 'Drop here')}</span>`}</span>
        </div>`;
      }).join('');
      const used = new Set(state.filter(Boolean));
      bankEl.innerHTML = bankOrder.filter(pid => !used.has(pid)).map(pid => chip(pid, 'bank')).join('') || `<p class="muted">${U('No quedan piezas.', 'No pieces left.')}</p>`;
      if (picked) el.querySelectorAll(`.rt__piece[data-pid="${picked}"]`).forEach(b => b.classList.add('is-picked'));
      const pv = el.querySelector('#rtPreview');
      if (pv) pv.innerHTML = r.slots.map((s, k) => state[k]
        ? `<p><b>${s.label ? GDC.esc(GDC.T(s.label)) + ':' : ''}</b> ${GDC.esc(GDC.T(piece(state[k]).t))}</p>`
        : `<p class="muted">${s.label ? GDC.esc(GDC.T(s.label)) + ':' : ''} …</p>`).join('');
    }

    function place(pid, k) {
      if (solved) return;
      const from = state.indexOf(pid);
      if (from >= 0) state[from] = null;
      if (k == null) { /* volver al banco */ }
      else {
        if (state[k] && from >= 0) state[from] = state[k];   // intercambio entre casillas
        state[k] = pid;
      }
      picked = null;
      el.querySelector('#rtMsg').textContent = '';
      draw();
    }

    /* Tocar: elige una pieza y luego una casilla. Tocar de nuevo la pieza elegida la suelta
       (si estaba en una casilla, vuelve al banco). Tocar el banco con una pieza elegida la devuelve. */
    el.addEventListener('click', e => {
      if (el._dragged || solved) return;
      const p = e.target.closest('.rt__piece');
      const slot = e.target.closest('.rt__slot');
      if (p && p.dataset.pid === picked) {
        if (p.dataset.where === 'slot') place(picked, null); else { picked = null; draw(); }
        return;
      }
      if (picked && slot) { place(picked, +slot.dataset.k); return; }
      if (p) { picked = p.dataset.pid; draw(); return; }
      if (picked && e.target.closest('.rt__bankwrap')) place(picked, null);
    });

    /* Arrastrar con puntero (ratón y táctil) */
    let drag = null;
    el.addEventListener('pointerdown', e => {
      const p = e.target.closest('.rt__piece'); if (!p || solved || e.button > 0) return;
      drag = { pid: p.dataset.pid, src: p, x: e.clientX, y: e.clientY, ghost: null };
    });
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    function onMove(e) {
      if (!drag) return;
      if (!drag.ghost) {
        if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 8) return;
        drag.ghost = drag.src.cloneNode(true);
        drag.ghost.classList.add('rt__ghost');
        document.body.appendChild(drag.ghost);
        drag.src.classList.add('is-dragging');
      }
      drag.ghost.style.left = e.clientX + 'px';
      drag.ghost.style.top = e.clientY + 'px';
      el.querySelectorAll('.rt__slot').forEach(s => s.classList.remove('is-over'));
      document.elementFromPoint(e.clientX, e.clientY)?.closest('.rt__slot')?.classList.add('is-over');
    }
    function onUp(e) {
      if (!drag) return;
      const d = drag; drag = null;
      if (!d.ghost) return;
      d.ghost.remove();
      el._dragged = true;
      const under = document.elementFromPoint(e.clientX, e.clientY);
      const slot = under?.closest('.rt__slot');
      if (slot && el.contains(slot)) place(d.pid, +slot.dataset.k);
      else if (under?.closest('#rtBank')) place(d.pid, null);
      else draw();
      setTimeout(() => { el._dragged = false; }, 50);
    }
    /* Los listeners globales se retiran cuando la vista sale del DOM */
    const obs = new MutationObserver(() => { if (!document.body.contains(el)) { window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); obs.disconnect(); } });
    obs.observe(document.getElementById('view'), { childList: true });

    el.querySelector('#rtReset').addEventListener('click', () => { if (solved) return; state.fill(null); picked = null; el.querySelector('#rtResult').hidden = true; draw(); });

    el.querySelector('#rtCheck').addEventListener('click', () => {
      if (solved) return;
      const msg = el.querySelector('#rtMsg');
      if (state.some(x => !x)) { msg.textContent = U('Completa todas las casillas primero.', 'Fill every slot first.'); return; }
      tries++;
      const right = state.filter((pid, k) => pid === r.slots[k].expect).length;
      draw(true);
      if (right === r.slots.length) { finish(true); return; }
      msg.textContent = U(`${right}/${r.slots.length} en su lugar. Las casillas en rojo necesitan otra pieza.`, `${right}/${r.slots.length} in place. Red slots need another piece.`);
      GDC.Mascot.react('oops');
      saveTry(false);
    });

    el.querySelector('#rtSol').addEventListener('click', () => {
      if (solved) return;
      sawSolution = true;
      r.slots.forEach((s, k) => { state[k] = s.expect; });
      draw(true);
      finish(false);
    });

    function saveTry(ok) {
      const P = GDC.Store.P();
      const st = P.builds[r.id] || (P.builds[r.id] = { ok: false, tries: 0, at: null });
      const first = !st.ok;
      st.tries++; st.at = Date.now();
      if (ok) st.ok = true;
      GDC.Store.commit();
      return first;
    }

    function finish(ok) {
      solved = true;
      el.querySelector('.rt__bankwrap').hidden = true;
      const first = saveTry(ok && !sawSolution);
      if (ok && !sawSolution) {
        GDC.Mascot.react('cheer'); GDC.burst();
        if (first) GDC.G.award(tries === 1 ? 40 : 25, `reto ${r.id.toUpperCase()}`);
      }
      const distract = r.pieces.filter(p => !r.slots.some(s => s.expect === p.id));
      const res = el.querySelector('#rtResult');
      res.innerHTML = `<h2>${ok ? '✓ ' + U('¡Reto completado!', 'Challenge complete!') : '👀 ' + U('Solución de referencia', 'Reference solution')}</h2>
        ${GDC.LB(r.wrap)}
        <h3>${U('Por qué va cada pieza', 'Why each piece goes there')}</h3>
        <ul class="lx__list">${r.slots.map(s => `<li><b>${s.label ? esc(GDC.T(s.label)) + ': ' : ''}</b>${GDC.L(piece(s.expect).t)} — ${GDC.L(piece(s.expect).why)}</li>`).join('')}</ul>
        <h3>${U('Piezas que sobraban', 'Leftover pieces')}</h3>
        <ul class="lx__list">${distract.map(p => `<li>${GDC.L(p.t)} — ${GDC.L(p.why)}</li>`).join('')}</ul>
        ${ok ? '' : `<button type="button" class="btn" data-act="again">${U('Intentarlo por mi cuenta', 'Try it on my own')}</button>`}`;
      res.hidden = false;
      res.querySelector('[data-act="again"]')?.addEventListener('click', () => GDC.App.route());
      res.scrollIntoView({ behavior: GDC.reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }

    draw();
    return el;
  }

  GDC.Retos = { list, detail };
})();
