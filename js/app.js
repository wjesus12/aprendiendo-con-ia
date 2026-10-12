/* Arranque, rutas por hash y cromática (barra superior con el menú de opciones). */
(function () {
  const ROUTES = [
    [/^#\/?(inicio)?$/, () => GDC.Views.home(), 'inicio'],
    [/^#\/ruta$/, () => GDC.Views.ruta(), 'ruta'],
    [/^#\/modulo\/(\d\d)$/, m => GDC.Lessons.view(m[1]), 'ruta'],
    [/^#\/glosario$/, () => GDC.Glossary.view(), 'glosario'],
    [/^#\/practica$/, () => GDC.Practice.view(), 'practica'],
    [/^#\/labs$/, () => GDC.Labs.list(), 'labs'],
    [/^#\/labs\/(lab\d\d)$/, m => GDC.Labs.detail(m[1]), 'labs'],
    [/^#\/retos$/, () => GDC.Retos.list(), 'retos'],
    [/^#\/retos\/(reto\d\d)$/, m => GDC.Retos.detail(m[1]), 'retos'],
    [/^#\/flashcards$/, () => GDC.Flash.view(), 'flashcards'],
    [/^#\/simulacro$/, () => GDC.Exam.view(), 'simulacro'],
    [/^#\/progreso$/, () => GDC.Views.progreso(), 'progreso'],
    [/^#\/ajustes$/, () => GDC.Views.ajustes(), 'ajustes'],
    [/^#\/contacto$/, () => GDC.Views.contacto(), 'contacto'],
    [/^#\/aviso-legal$/, () => GDC.Views.legal(), 'aviso-legal']
  ];

  /* Menú de opciones (barra superior) */
  const NAV = [
    ['inicio', '#/inicio', 'Inicio'],
    ['ruta', '#/ruta', 'Ruta'],
    ['glosario', '#/glosario', 'Glosario'],
    ['practica', '#/practica', 'Práctica'],
    ['labs', '#/labs', 'Labs'],
    ['retos', '#/retos', 'Retos'],
    ['flashcards', '#/flashcards', 'Flashcards'],
    ['simulacro', '#/simulacro', 'Simulacros'],
    ['progreso', '#/progreso', 'Progreso'],
    ['contacto', '#/contacto', 'Contacto']
  ];

  let current = 'inicio';

  function applyPrefs() {
    const u = GDC.Store.current();
    let saved = null;
    try { saved = localStorage.getItem('gdc.theme'); } catch (e) {}
    const t = u?.prefs.theme || saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = t;
    document.documentElement.dataset.motion = u && u.prefs.motion === false ? 'off' : 'on';
    document.querySelector('meta[name="theme-color"]').content = t === 'dark' ? '#15141b' : '#f6f4ef';
  }

  function toggleTheme() {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    GDC.Store.setPref('theme', t);
    try { localStorage.setItem('gdc.theme', t); } catch (e) {}
    applyPrefs();
    renderChrome();
  }
  function setMotion(on) { GDC.Store.setPref('motion', on); applyPrefs(); }
  function setLang(l) {
    if (!GDC.MODES[l]) return;
    GDC.Store.setPref('lang', l);
    GDC.toast(`Contenido en ${GDC.MODES[l].label} (${GDC.MODES[l].short})`, 'info', 1800);
    route();
  }

  function renderChrome() {
    const u = GDC.Store.current();
    if (!u) return;
    const lv = GDC.G.level(u.progress.xp);
    const bar = GDC.$('#topbar');
    bar.innerHTML = `
      <a class="brand" href="#/inicio" aria-label="Aprendiendo con IA, inicio">
        ${GDC.Mascot.svg({ size: 34 })}<span class="brand__t">Aprendiendo <b class="ink-spark">con IA</b></span>
      </a>
      <nav class="nav" id="nav" aria-label="Opciones">
        <ul class="nav__list">
          ${NAV.map(([id, href, label]) => `<li><a class="nav__a${id === current ? ' is-on' : ''}" href="${href}" ${id === current ? 'aria-current="page"' : ''}>${label}</a></li>`).join('')}
        </ul>
      </nav>
      <div class="tools">
        <button class="tools__b tools__search" type="button" data-act="palette" aria-label="Abrir barra de comandos">✦ <span>Buscar</span> <kbd>/</kbd></button>
        ${GDC.langSwitcher(GDC.lang(), 'global')}
        <button class="tools__b" type="button" data-act="theme" aria-label="Cambiar tema">${document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙'}</button>
        <details class="me">
          <summary class="me__s" aria-label="Menú de ${GDC.esc(u.name)}"><span class="avatar avatar--s" style="--h:${u.hue}">${GDC.esc(u.name[0].toUpperCase())}</span><span class="me__xp mono">${u.progress.xp} XP</span></summary>
          <div class="me__menu">
            <p class="me__name"><b>${GDC.esc(u.name)}</b><br><small>Nivel ${lv.n} · ${GDC.esc(lv.name)}</small></p>
            <a href="#/ajustes">Ajustes</a>
            <button type="button" data-act="logout">Cerrar sesión</button>
          </div>
        </details>
        <button class="tools__b burger" type="button" data-act="menu" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav">☰</button>
      </div>`;
    GDC.$('#foot').innerHTML = `<p>Aprendiendo con IA · Guía práctica de Gemini — recurso educativo independiente, no afiliado a Google. «Gemini» y los nombres de producto son marcas de Google LLC. Datos verificados el ${GDC.DATA.verificado}. <a href="#/aviso-legal">Aviso legal</a></p>`;
  }

  function onChromeClick(e) {
    const b = e.target.closest('[data-act]');
    if (b && b.closest('#topbar')) {
      const a = b.dataset.act;
      if (a === 'palette') GDC.Palette.open();
      if (a === 'theme') toggleTheme();
      if (a === 'logout') logout();
      if (a === 'menu') {
        const open = !GDC.$('#topbar').classList.contains('is-open');
        GDC.$('#topbar').classList.toggle('is-open', open);
        b.setAttribute('aria-expanded', String(open));
      }
    }
    if (e.target.closest('.langsw__b')) {
      setLang(e.target.closest('.langsw__b').dataset.lang);
    }
    if (e.target.closest('.nav__a')) GDC.$('#topbar').classList.remove('is-open');
    if (!e.target.closest('.me')) GDC.$$('.me[open]').forEach(d => d.removeAttribute('open'));
  }

  function route() {
    if (!GDC.Store.current()) return;
    const [hashPath] = (location.hash || '#/inicio').split('?');
    let view = null;
    current = 'inicio';
    for (const [re, fn, p] of ROUTES) {
      const m = hashPath.match(re);
      if (m) { view = fn(m); current = p; break; }
    }
    if (!view) view = GDC.Views.notFound();
    const host = GDC.$('#view');
    host.replaceChildren(view);
    renderChrome();
    window.scrollTo({ top: 0, behavior: 'instant' });
    host.focus({ preventScroll: true });
  }

  function enter(firstTime) {
    GDC.Gate.hide();
    applyPrefs();
    GDC.$('#app').hidden = false;
    const P = GDC.Store.P();
    const isNew = firstTime || !P.badges.hola;
    GDC.G.touchStreak(P);
    GDC.Store.commit();
    if (isNew) GDC.G.badge('hola', P);
    GDC.Mascot.dock();
    route();
    setTimeout(() => GDC.Mascot.say(isNew ? '¡Hola! Soy Chispa. Tócame cuando quieras un consejo.' : '¡Qué bueno verte! Sigamos donde lo dejaste.'), 600);
  }

  function logout() {
    GDC.Store.logout();
    GDC.Mascot.undock();
    GDC.$('#app').hidden = true;
    GDC.$('#view').replaceChildren();
    applyPrefs();
    location.hash = '';
    GDC.Gate.render();
  }

  function boot() {
    /* Cada vista empieza arriba: el navegador no debe restaurar el desplazamiento de la visita anterior */
    try { history.scrollRestoration = 'manual'; } catch (e) {}
    applyPrefs();
    document.addEventListener('click', onChromeClick);
    window.addEventListener('hashchange', route);
    if (GDC.Store.current()) enter(false);
    else GDC.Gate.render();
  }

  GDC.App = { boot, enter, route, logout, toggleTheme, setMotion, setLang, refreshChrome: renderChrome };
  boot();
})();
