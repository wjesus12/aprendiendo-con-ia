/* Pantalla de acceso: alta del admin (primer uso) o elección de perfil + PIN/contraseña. */
(function () {
  const esc = GDC.esc;

  function render() {
    const gate = GDC.$('#gate');
    gate.hidden = false;
    gate.innerHTML = `
      <div class="gate__theme" role="radiogroup" aria-label="Tema">
        <button type="button" role="radio" data-theme-pick="light">☀️ Claro</button>
        <button type="button" role="radio" data-theme-pick="dark">🌙 Oscuro</button>
      </div>
      <div class="gate__wrap">
        <div class="gate__hero">
          <div class="gate__mascot rise">${GDC.Mascot.svg({ size: 170, cls: 'is-float' })}</div>
          <p class="gate__kicker mono rise" style="--i:1">Google Gemini · de cero a experto</p>
          <h1 class="gate__title rise" style="--i:2">Gemini<br><span class="ink-spark">Desde Cero</span></h1>
          <p class="gate__lede rise" style="--i:3">Aprende a usar Gemini y sus herramientas aunque nunca hayas escrito un prompt. Canvas, Gems, Nano Banana, Gemini Notebook, Docs, Slides, Sheets y Drive, rumbo a las certificaciones <b>Gemini Certified Educator</b> y <b>Student</b>.</p>
          <ul class="gate__chips rise" style="--i:4">
            <li class="chip chip--spark">26 módulos</li><li class="chip">ES · EN · EN+ES</li><li class="chip">Labs y simulacros</li>
          </ul>
        </div>
        <div class="gate__card sheet rise" style="--i:2">
          <p class="gate__hello" id="gHello" aria-live="polite"></p>
          <div id="gateForm"></div>
        </div>
      </div>`;
    const markTheme = () => GDC.$$('[data-theme-pick]', gate).forEach(b => {
      const on = b.dataset.themePick === document.documentElement.dataset.theme;
      b.classList.toggle('is-on', on); b.setAttribute('aria-checked', String(on));
    });
    markTheme();
    gate.querySelector('.gate__theme').addEventListener('click', e => {
      const b = e.target.closest('[data-theme-pick]'); if (!b) return;
      if (b.dataset.themePick !== document.documentElement.dataset.theme) GDC.App.toggleTheme();
      markTheme();
    });
    const hello = GDC.Store.hasAdmin() ? 'Hola de nuevo. ¿Quién va a aprender hoy?' : 'Hola. Empecemos por crear la cuenta administradora.';
    GDC.type(GDC.$('#gHello'), hello, 18).then(() => {
      if (!GDC.$('#gateForm')) return;
      GDC.Store.hasAdmin() ? profiles() : firstRun();
    });
  }

  function firstRun() {
    const f = GDC.$('#gateForm');
    f.innerHTML = `
      <p class="gate__note">La cuenta admin crea perfiles de estudiante (con PIN), ve el progreso de todos y exporta respaldos. Todo se guarda solo en este navegador.</p>
      <form id="fAdmin" class="gform">
        <label class="field"><span>Tu nombre</span><input name="name" required maxlength="32" autocomplete="username" placeholder="p. ej. Wilmer"></label>
        <label class="field"><span>Contraseña (mínimo 6 caracteres)</span><input name="p1" type="password" required minlength="6" autocomplete="new-password"></label>
        <label class="field"><span>Repite la contraseña</span><input name="p2" type="password" required minlength="6" autocomplete="new-password"></label>
        <p class="gform__err" id="gErr" role="alert"></p>
        <button class="btn btn--spark btn--block">Crear admin y entrar</button>
      </form>`;
    GDC.$('#fAdmin').addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      if (fd.get('p1') !== fd.get('p2')) return err('Las contraseñas no coinciden.');
      try {
        const u = GDC.Store.createUser({ name: fd.get('name'), secret: fd.get('p1'), role: 'admin', hue: 255 });
        GDC.Store.login(u.id);
        GDC.App.enter(true);
      } catch (x) { err(x.message); }
    });
    GDC.$('#fAdmin input').focus();
  }

  function profiles() {
    const f = GDC.$('#gateForm');
    const us = GDC.Store.users();
    f.innerHTML = `
      <ul class="plist" aria-label="Perfiles">
        ${us.map(u => `<li><button type="button" class="plist__row" data-id="${u.id}">
            <span class="avatar" style="--h:${u.hue}">${esc(u.name.slice(0, 1).toUpperCase())}</span>
            <span class="plist__name">${esc(u.name)}</span>
            <span class="plist__meta">${u.role === 'admin' ? 'admin' : GDC.G.level(u.progress.xp).name}</span>
          </button></li>`).join('')}
      </ul>
      <div id="pinBox"></div>
      <p class="gate__note">¿No ves tu nombre? Pide a la persona administradora que cree tu perfil.</p>`;
    f.addEventListener('click', e => { const b = e.target.closest('.plist__row'); if (b) askSecret(b.dataset.id); });
    if (us.length === 1) askSecret(us[0].id);
  }

  function askSecret(id) {
    const u = GDC.Store.get(id);
    GDC.$$('.plist__row').forEach(b => b.classList.toggle('is-picked', b.dataset.id === id));
    const isAdmin = u.role === 'admin';
    const box = GDC.$('#pinBox');
    box.innerHTML = `<form id="fPin" class="gform gform--row">
        <label class="field field--grow"><span>${isAdmin ? 'Contraseña' : 'PIN'} de ${esc(u.name)}</span>
          <input name="s" type="password" required autocomplete="current-password" ${isAdmin ? '' : 'inputmode="numeric" pattern="[0-9]*"'}></label>
        <button class="btn btn--primary">Entrar</button>
      </form><p class="gform__err" id="gErr" role="alert"></p>`;
    const inp = box.querySelector('input');
    inp.focus();
    GDC.$('#fPin').addEventListener('submit', e => {
      e.preventDefault();
      if (GDC.Store.verify(id, inp.value)) { GDC.Store.login(id); GDC.App.enter(false); }
      else { err('No coincide. Inténtalo de nuevo.'); inp.select(); GDC.Mascot.react('oops', GDC.$('.gate__mascot .chispa')); }
    });
  }

  function err(m) { const e = GDC.$('#gErr'); if (e) e.textContent = m; }
  function hide() { const g = GDC.$('#gate'); g.hidden = true; g.innerHTML = ''; }

  GDC.Gate = { render, hide };
})();
