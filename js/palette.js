/* Barra de comandos con forma de «caja de prompt» de Gemini.
   Se abre con / o Ctrl/⌘+K. Acepta comandos (/ruta, /tema…) o busca módulos por nombre. */
(function () {
  const go = h => () => { location.hash = h; };

  function commands() {
    const list = [
      { k: '/inicio', d: 'Ir al inicio', run: go('#/inicio') },
      { k: '/ruta', d: 'Ruta desde cero (26 módulos)', run: go('#/ruta') },
      { k: '/glosario', d: 'Glosario de términos', run: go('#/glosario') },
      { k: '/practica', d: 'Banco de preguntas', run: go('#/practica') },
      { k: '/labs', d: 'Labs: encuentra el fallo', run: go('#/labs') },
      { k: '/retos', d: 'Retos de construcción', run: go('#/retos') },
      { k: '/flashcards', d: 'Repaso espaciado', run: go('#/flashcards') },
      { k: '/simulacro', d: 'Simulacros de examen', run: go('#/simulacro') },
      { k: '/progreso', d: 'Tu progreso y logros', run: go('#/progreso') },
      { k: '/ajustes', d: 'Ajustes y respaldo', run: go('#/ajustes') },
      { k: '/contacto', d: 'Contacto', run: go('#/contacto') },
      { k: '/aviso', d: 'Aviso legal', run: go('#/aviso-legal') },
      { k: '/tema', d: 'Cambiar tema claro / oscuro', run: () => GDC.App.toggleTheme() },
      { k: '/es', d: 'Contenido en español', run: () => GDC.App.setLang('es') },
      { k: '/en', d: 'Contenido en inglés', run: () => GDC.App.setLang('en') },
      { k: '/bi', d: 'Contenido EN+ES (puente)', run: () => GDC.App.setLang('bi') },
      { k: '/salir', d: 'Cerrar sesión', run: () => GDC.App.logout() }
    ];
    return list;
  }

  function items(q) {
    q = q.trim().toLowerCase();
    const cmds = commands().filter(c => !q || c.k.includes(q) || c.d.toLowerCase().includes(q.replace(/^\//, '')));
    const mods = q && !q.startsWith('/')
      ? GDC.MODULES.filter(m => (m.title.es + ' ' + m.title.en).toLowerCase().includes(q)).slice(0, 6)
          .map(m => ({ k: 'M' + m.id, d: m.title.es, run: go('#/modulo/' + m.id) }))
      : [];
    return [...mods, ...cmds].slice(0, 9);
  }

  let sel = 0;

  function open(prefill = '') {
    const p = GDC.$('#palette');
    if (!GDC.Store.current() || !p.hidden) return;
    p.hidden = false;
    p.innerHTML = `<div class="palette__scrim" data-close></div>
      <div class="palette__box" role="dialog" aria-modal="true" aria-label="Barra de comandos">
        <div class="palette__field">
          <span class="palette__spark" aria-hidden="true">✦</span>
          <input id="palIn" class="palette__in" placeholder="Escribe un comando o busca un módulo…" autocomplete="off" spellcheck="false" value="${GDC.esc(prefill)}">
          <kbd>Esc</kbd>
        </div>
        <ul class="palette__list" id="palList" role="listbox"></ul>
        <p class="palette__foot mono">↑↓ elegir · ↵ abrir · prueba <b>canvas</b>, <b>/tema</b> o <b>/bi</b></p>
      </div>`;
    const inp = GDC.$('#palIn');
    const draw = () => {
      const its = items(inp.value);
      sel = Math.min(sel, Math.max(0, its.length - 1));
      GDC.$('#palList').innerHTML = its.length
        ? its.map((it, i) => `<li role="option" aria-selected="${i === sel}" class="palette__it${i === sel ? ' is-sel' : ''}" data-i="${i}">
            <span class="palette__k mono">${GDC.esc(it.k)}</span><span class="palette__d">${GDC.esc(it.d)}</span></li>`).join('')
        : '<li class="palette__none">Sin resultados. Escribe / para ver los comandos.</li>';
      return its;
    };
    let its = draw();
    inp.addEventListener('input', () => { sel = 0; its = draw(); });
    inp.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, its.length); its = draw(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + its.length) % Math.max(1, its.length); its = draw(); }
      else if (e.key === 'Enter') { e.preventDefault(); if (its[sel]) { close(); its[sel].run(); } }
      else if (e.key === 'Escape') close();
    });
    p.addEventListener('click', e => {
      if (e.target.closest('[data-close]')) return close();
      const li = e.target.closest('.palette__it');
      if (li && its[+li.dataset.i]) { close(); its[+li.dataset.i].run(); }
    });
    inp.focus();
  }

  function close() {
    const p = GDC.$('#palette');
    p.hidden = true;
    p.innerHTML = '';
  }

  document.addEventListener('keydown', e => {
    const typing = !!e.target.closest?.('input, textarea, select, [contenteditable]');
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
      e.preventDefault();
      GDC.$('#palette').hidden ? open() : close();
    }
  });

  GDC.Palette = { open, close };
})();
