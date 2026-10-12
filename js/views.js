/* Vistas principales. Cada función devuelve un contenedor NUEVO (los listeners mueren con él). */
(function () {
  const esc = GDC.esc;
  const wrap = (cls, html) => GDC.node(`<section class="page ${cls}">${html}</section>`);

  /* ---------- Escena del entorno Gemini (analogía central del portal) ----------
     Gemini (el cerebro) en el centro; las demás herramientas lo orbitan. */
  function entornoScene() {
    const tools = GDC.ENTORNO.filter(e => e.id !== 'gemini');
    const n = tools.length;
    return `<div class="orbit" id="orbit">
      <div class="orbit__ring" aria-hidden="true"></div>
      <button type="button" class="orbit__core" data-k="gemini" aria-label="Gemini, el cerebro">${GDC.Mascot.svg({ size: 104, cls: 'is-float' })}<span class="orbit__corelabel">🧠 Gemini</span></button>
      ${tools.map((e, i) => {
        const a = (-90 + (360 / n) * i) * Math.PI / 180;
        const x = 50 + 40 * Math.cos(a), y = 50 + 40 * Math.sin(a);
        return `<button type="button" class="orbit__node" style="--x:${x.toFixed(1)}%;--y:${y.toFixed(1)}%;--i:${i}" data-k="${e.id}" aria-label="${esc(e.name)}">
          <span class="orbit__ico" aria-hidden="true">${e.icon}</span><span class="orbit__name">${esc(e.name)}</span></button>`;
      }).join('')}
    </div>`;
  }

  function bindEntorno(root) {
    const box = root.querySelector('#orbitInfo');
    const show = k => {
      const e = GDC.ENTORNO.find(x => x.id === k);
      root.querySelectorAll('[data-k]').forEach(n => n.classList.toggle('is-on', n.dataset.k === k));
      box.innerHTML = `<p class="orbit__tag">${e.icon} <b>${esc(e.name)}</b> = ${GDC.L(e.tag)}</p>${GDC.LB(e.d)}
        <a class="orbit__more" href="#/modulo/${e.mod}">Ir al módulo ${e.mod} →</a>`;
      GDC.Mascot.react('cheer', root.querySelector('.orbit__core .chispa'));
    };
    root.querySelector('#orbit').addEventListener('click', ev => { const n = ev.target.closest('[data-k]'); if (n) show(n.dataset.k); });
    show('gemini');
  }

  /* ---------- Inicio ---------- */
  function home() {
    const u = GDC.Store.current();
    const P = u.progress;
    const lv = GDC.G.level(P.xp);
    const done = Object.values(P.modules).filter(m => m.read).length;
    const next = GDC.MODULES.find(m => !P.modules[m.id]?.read) || GDC.MODULES[0];
    const el = wrap('home', `
      <div class="home__hero">
        <div>
          <p class="kicker rise">Hola, ${esc(u.name)} ✦</p>
          <h1 class="rise" style="--i:1">¿Qué aprendemos <span class="ink-spark">hoy</span>?</h1>
          <p class="lede rise" style="--i:2">Sigue la ruta desde cero o salta directo a lo que necesitas. Cada actividad se puede ver en español, en inglés o en ambos.</p>
          <div class="home__cta rise" style="--i:3">
            <a class="btn btn--spark" href="#/modulo/${next.id}">${done ? 'Continuar' : 'Empezar'}: Módulo ${next.id}</a>
            <button class="btn" type="button" data-act="palette">Buscar <kbd>/</kbd></button>
          </div>
        </div>
        <div class="home__stats sheet rise" style="--i:2">
          <div class="stat"><span class="stat__n">${lv.n}</span><span class="stat__l">Nivel · ${esc(lv.name)}</span>
            <span class="bar" aria-hidden="true"><i style="width:${lv.pct}%"></i></span></div>
          <div class="stat"><span class="stat__n">${P.xp}</span><span class="stat__l">XP total</span></div>
          <div class="stat"><span class="stat__n">${P.streak.count}🔥</span><span class="stat__l">Racha de días</span></div>
          <div class="stat"><span class="stat__n">${done}/${GDC.MODULES.length}</span><span class="stat__l">Módulos leídos</span></div>
        </div>
      </div>

      <section class="block rise" style="--i:3">
        <div class="block__head"><div><h2>El entorno Gemini en una imagen</h2><p class="muted">Toca cada herramienta para descubrir qué hace.</p></div>${GDC.langSwitcher(GDC.lang(), 'home')}</div>
        <div class="entorno">
          ${entornoScene()}
          <div class="entorno__info sheet" id="orbitInfo" aria-live="polite"></div>
        </div>
      </section>

      <section class="block">
        <h2>Tu camino</h2>
        <div class="tiles">
          ${tile('#/ruta', '🧭', 'Ruta desde cero', '26 módulos en 7 partes: de «¿qué es la IA?» a nivel experto.')}
          ${tile('#/glosario', '📒', 'Glosario', 'Más de 110 términos con buscador y enlace al módulo.')}
          ${tile('#/practica', '🎯', 'Práctica', 'Preguntas de escenario con explicación de cada opción.')}
          ${tile('#/labs', '🔍', 'Labs', 'Encuentra el fallo en prompts, Gems y flujos reales.')}
          ${tile('#/retos', '🧩', 'Retos', 'Arma soluciones pieza a pieza y compáralas.')}
          ${tile('#/flashcards', '🃏', 'Flashcards', 'Repaso espaciado para no olvidar.')}
          ${tile('#/simulacro', '🏁', 'Simulacros', 'Educator y Student, cronometrados.')}
          ${tile('#/progreso', '📈', 'Progreso', 'Nivel, logros, temas débiles y brecha de idioma.')}
        </div>
      </section>`);
    el.addEventListener('click', e => { if (e.target.closest('[data-act="palette"]')) GDC.Palette.open(); });
    bindEntorno(el);
    return el;
  }

  const tile = (href, ico, t, d) => `<a class="tile" href="${href}"><span class="tile__ico" aria-hidden="true">${ico}</span><span class="tile__t">${t}</span><span class="tile__d">${d}</span></a>`;

  /* ---------- Ruta ---------- */
  function ruta() {
    const P = GDC.Store.P();
    return wrap('ruta', `
      <header class="page__head">
        <p class="kicker">Ruta desde cero</p>
        <h1>De «¿qué es la IA?» a <span class="ink-spark">experto Gemini</span></h1>
        <p class="lede">Siete partes, veintiséis módulos. Cada módulo indica qué objetivos del examen <b>Gemini Certified Educator</b> cubre (E 1.1.1, E 2.3.3…).</p>
      </header>
      <ol class="parts">
        ${GDC.PARTS.map(p => `<li class="part sheet rise" style="--i:${p.id}">
          <h2 class="part__t"><span aria-hidden="true">${p.icon}</span> Parte ${p.id} · ${GDC.L(p.title)}</h2>
          <ol class="mods">
            ${GDC.MODULES.filter(m => m.part === p.id).map(m => `<li>
              <a class="mod${P.modules[m.id]?.read ? ' is-done' : ''}" href="#/modulo/${m.id}">
                <span class="mod__n mono">${m.id}</span>
                <span class="mod__t">${GDC.L(m.title)}</span>
                <span class="mod__map mono">${esc(m.map)}</span>
              </a></li>`).join('')}
          </ol>
        </li>`).join('')}
      </ol>`);
  }

  function modulo(id) {
    const m = GDC.MODULES.find(x => x.id === id);
    if (!m) return notFound();
    const i = GDC.MODULES.indexOf(m);
    const prev = GDC.MODULES[i - 1], next = GDC.MODULES[i + 1];
    return wrap('modulo', `
      <nav class="crumbs"><a href="#/ruta">Ruta</a> › Parte ${m.part}</nav>
      <header class="page__head">
        <p class="kicker mono">Módulo ${m.id} · ${esc(m.map)}</p>
        <h1>${GDC.L(m.title)}</h1>
      </header>
      ${soon('El contenido de este módulo llega en la Fase 2: objetivos, explicación, tablas, ejemplos, trampas frecuentes, ideas clave y mini quiz.')}
      <div class="pager">
        ${prev ? `<a class="btn" href="#/modulo/${prev.id}">← ${prev.id}</a>` : '<span></span>'}
        ${next ? `<a class="btn" href="#/modulo/${next.id}">${next.id} →</a>` : ''}
      </div>`);
  }

  const soon = text => `<div class="soon sheet">${GDC.Mascot.svg({ size: 72, mood: 'think' })}<p>${text}</p></div>`;

  /* ---------- Contacto: solo el enlace a LinkedIn ---------- */
  function contacto() {
    return wrap('contacto', `
      <div class="contacto__card sheet rise">
        <a class="contacto__link" href="https://linkedin.com/in/wilmerjesuspaucar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>`);
  }

  /* ---------- Progreso ---------- */
  function progreso() {
    const P = GDC.Store.P();
    const lv = GDC.G.level(P.xp);
    const last14 = [...Array(14)].map((_, k) => {
      const d = new Date(); d.setDate(d.getDate() - (13 - k));
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      return { key, xp: P.days[key] || 0, label: d.toLocaleDateString('es', { weekday: 'narrow' }) };
    });
    const max = Math.max(20, ...last14.map(x => x.xp));
    const ls = P.langStats;
    /* temas débiles: módulos con ≥2 respuestas y menor porcentaje de acierto */
    const pool = GDC.Practice.pool();
    const byMod = {};
    for (const q of pool) { const a = P.answers[q.id]; if (!a) continue; const m = byMod[q.mod] || (byMod[q.mod] = { n: 0, ok: 0 }); m.n += 1; if (a.last) m.ok += 1; }
    const weak = Object.entries(byMod).filter(([, v]) => v.n >= 2).map(([id, v]) => ({ id, n: v.n, ok: v.ok, pct: Math.round((v.ok / v.n) * 100), title: GDC.MODULES.find(m => m.id === id)?.title.es || '' }))
      .filter(w => w.pct < 80).sort((a, b) => a.pct - b.pct).slice(0, 5);
    const lastExam = P.exams[P.exams.length - 1];
    const pct = s => s.n ? Math.round((s.ok / s.n) * 100) + '%' : '—';
    return wrap('progreso', `
      <header class="page__head"><p class="kicker">Tu progreso</p><h1>Nivel ${lv.n}: <span class="ink-spark">${esc(lv.name)}</span></h1>
        <p class="lede">${P.xp} XP${lv.next ? ` · faltan ${lv.next.xp - P.xp} XP para «${esc(lv.next.name)}»` : ' · nivel máximo'}</p></header>
      <div class="grid2">
        <section class="sheet"><h2>Últimos 14 días</h2>
          <div class="spark14" role="img" aria-label="XP por día en los últimos 14 días">
            ${last14.map(x => `<span class="spark14__c" title="${x.key}: ${x.xp} XP"><i style="height:${Math.round((x.xp / max) * 100)}%"></i><b>${x.label}</b></span>`).join('')}
          </div>
          <p class="muted">Racha actual: <b>${P.streak.count}</b> · mejor racha: <b>${P.streak.best}</b></p>
        </section>
        <section class="sheet"><h2>Brecha de idioma</h2>
          <p class="muted">Porcentaje de aciertos según el idioma en que respondiste.</p>
          <ul class="langgap">
            <li><span>ES</span><b>${pct(ls.es)}</b><small>${ls.es.n} respuestas</small></li>
            <li><span>EN</span><b>${pct(ls.en)}</b><small>${ls.en.n} respuestas</small></li>
            <li><span>EN+ES</span><b>${pct(ls.bi)}</b><small>${ls.bi.n} respuestas</small></li>
          </ul>
        </section>
      </div>
      <div class="grid2">
        <section class="sheet"><h2>Por dominio del examen</h2>
          <ul class="ex__doms">${Object.entries(GDC.Practice.DOMAINS).map(([d, D]) => { const st = P.domainStats[d] || { n: 0, ok: 0 }; const p = st.n ? Math.round((st.ok / st.n) * 100) : 0; return `<li>
            <span>${D.icon} ${d === 'S' ? 'Student' : 'D' + d} · ${esc(D.es)}</span><b>${st.n ? p + '%' : '—'}</b>
            <span class="bar"><i style="width:${p}%"></i></span><small class="muted">${st.ok}/${st.n} respuestas</small></li>`; }).join('')}</ul>
        </section>
        <section class="sheet"><h2>Temas para reforzar</h2>
          ${weak.length ? `<ul class="weak">${weak.map(w => `<li><a href="#/modulo/${w.id}">Módulo ${w.id} · ${esc(w.title)}</a><b>${w.pct}%</b><small class="muted">${w.ok}/${w.n}</small></li>`).join('')}</ul>
            <a class="btn btn--small" href="#/practica">Practicar «solo las que fallé»</a>` : '<p class="muted">Responde al menos 2 preguntas de un módulo para ver aquí tus temas débiles.</p>'}
        </section>
      </div>
      <section class="sheet"><h2>Actividad</h2>
        <ul class="fl__stats">
          <li><b>${Object.values(P.modules).filter(m => m.read).length}</b>/${GDC.MODULES.length} módulos leídos</li>
          <li><b>${Object.values(P.labs).filter(l => l.ok).length}</b>/${GDC.LABS.length} labs</li>
          <li><b>${Object.values(P.builds).filter(b => b.ok).length}</b>/${GDC.RETOS.length} retos</li>
          <li><b>${Object.values(P.srs).filter(c => c.reps >= 2).length}</b> flashcards aprendidas</li>
          <li><b>${P.exams.length}</b> simulacros${lastExam ? ` · último: ${lastExam.pct}% (${lastExam.type === 'educator' ? 'Educator' : 'Student'})` : ''}</li>
        </ul>
      </section>
      <section class="sheet"><h2>Logros</h2>
        <ul class="badges">${Object.entries(GDC.G.BADGES).map(([id, b]) => `<li class="badge${P.badges[id] ? ' is-on' : ''}">
          <span class="badge__i" aria-hidden="true">${b.icon}</span><b>${esc(b.name)}</b><small>${esc(b.desc)}</small></li>`).join('')}</ul>
      </section>`);
  }

  /* ---------- Ajustes ---------- */
  function ajustes() {
    const u = GDC.Store.current();
    const el = wrap('ajustes', `
      <header class="page__head"><p class="kicker">Ajustes</p><h1>Tu espacio</h1></header>
      <div class="grid2">
        <section class="sheet"><h2>Idioma del contenido</h2>
          <p class="muted">La interfaz siempre está en español. El contenido de módulos, preguntas, labs y flashcards sigue este modo, y puedes cambiarlo en cada actividad.</p>
          ${GDC.langSwitcher(GDC.lang(), 'settings')}
          <ul class="modes">${Object.values(GDC.MODES).map(m => `<li><b>${m.short}</b> — ${m.label}: ${m.hint}</li>`).join('')}</ul>
        </section>
        <section class="sheet"><h2>Apariencia</h2>
          <div class="row"><button class="btn" type="button" data-act="theme">Tema: ${u.prefs.theme === 'dark' ? 'oscuro 🌙' : 'claro ☀️'}</button>
          <button class="btn" type="button" data-act="motion">Animaciones: ${u.prefs.motion ? 'sí' : 'reducidas'}</button></div>
          <p class="muted">Si tu sistema pide «reducir movimiento», el portal lo respeta siempre.</p>
        </section>
        <section class="sheet"><h2>${u.role === 'admin' ? 'Contraseña' : 'PIN'}</h2>
          <form class="gform" id="fSecret">
            <label class="field"><span>Nuevo ${u.role === 'admin' ? 'contraseña (mín. 6)' : 'PIN (mín. 4 dígitos)'}</span>
              <input name="s" type="password" required ${u.role === 'admin' ? 'minlength="6"' : 'minlength="4" inputmode="numeric" pattern="[0-9]*"'} autocomplete="new-password"></label>
            <button class="btn btn--primary">Cambiar</button>
          </form>
        </section>
        <section class="sheet"><h2>Respaldo de tu progreso</h2>
          <p class="muted">Tu progreso vive solo en este navegador. Descárgalo para no perderlo o para llevarlo a otro equipo.</p>
          <div class="row"><button class="btn" type="button" data-act="export">Descargar respaldo (.json)</button>
          <label class="btn">Importar respaldo<input type="file" accept="application/json,.json" data-act="import" hidden></label></div>
        </section>
      </div>`);
    el.addEventListener('click', e => {
      const a = e.target.closest('[data-act]')?.dataset.act;
      if (a === 'theme') { GDC.App.toggleTheme(); GDC.App.route(); }
      if (a === 'motion') { GDC.App.setMotion(!u.prefs.motion); GDC.App.route(); }
      if (a === 'export') GDC.download(`gemini-desde-cero-${u.name}-${GDC.today()}.json`, GDC.Store.exportUser(u.id));
    });
    el.addEventListener('change', e => {
      if (e.target.dataset.act !== 'import' || !e.target.files[0]) return;
      e.target.files[0].text().then(t => {
        try { const r = GDC.Store.importAll(t); GDC.toast(r === 'all' ? 'Respaldo completo restaurado.' : `Progreso de ${r} restaurado.`, 'ok'); GDC.App.route(); }
        catch (x) { GDC.toast(x.message, 'bad', 5000); }
      });
    });
    el.querySelector('#fSecret').addEventListener('submit', e => {
      e.preventDefault();
      try { GDC.Store.setSecret(u.id, new FormData(e.target).get('s')); e.target.reset(); GDC.toast('Actualizado.', 'ok'); }
      catch (x) { GDC.toast(x.message, 'bad'); }
    });
    return el;
  }

  function notFound() {
    return wrap('nf', `${soon('Esta página no existe. Vuelve al <a href="#/inicio">inicio</a> o pulsa <kbd>/</kbd> para buscar.')}`);
  }

  GDC.Views = {
    home, ruta, modulo, contacto, progreso, ajustes, notFound,
  };
})();
