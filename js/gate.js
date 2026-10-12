/* Pantalla de acceso de uso libre: cada persona crea su propia cuenta local o inicia sesión.
   No hay administrador. Los datos se guardan solo en el navegador (localStorage), nunca en un servidor. */
(function () {
  const esc = GDC.esc;
  let tab = 'signup';

  function render() {
    const gate = GDC.$('#gate');
    gate.hidden = false;
    tab = GDC.Store.users().length ? 'login' : 'signup';
    gate.innerHTML = `
      <div class="gate__theme" role="radiogroup" aria-label="Tema">
        <button type="button" role="radio" data-theme-pick="light">☀️ Claro</button>
        <button type="button" role="radio" data-theme-pick="dark">🌙 Oscuro</button>
      </div>
      <div class="gate__wrap">
        <div class="gate__hero">
          <div class="gate__mascot rise">${GDC.Mascot.svg({ size: 170, cls: 'is-float' })}</div>
          <p class="gate__kicker mono rise" style="--i:1">Guía práctica de Gemini · de cero a experto</p>
          <h1 class="gate__title rise" style="--i:2">Aprendiendo<br><span class="ink-spark">con IA</span></h1>
          <p class="gate__lede rise" style="--i:3">Aprende a usar Gemini y sus herramientas aunque nunca hayas escrito un prompt. Canvas, Gems, Nano Banana, Gemini Notebook, Docs, Slides, Sheets y Drive, rumbo a las certificaciones <b>Gemini Certified Educator</b> y <b>Student</b>.</p>
          <ul class="gate__chips rise" style="--i:4">
            <li class="chip chip--spark">Gratis y abierto</li><li class="chip">26 módulos</li><li class="chip">ES · EN · EN+ES</li><li class="chip">Labs y simulacros</li>
          </ul>
        </div>
        <div class="gate__card sheet rise" style="--i:2">
          <div class="gate__tabs" role="tablist" aria-label="Acceso">
            <button type="button" role="tab" data-tab="signup">Crear cuenta</button>
            <button type="button" role="tab" data-tab="login">Iniciar sesión</button>
          </div>
          <div class="gate__privacy" role="note">
            <svg class="gate__privacyicon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 19.3 5 15.4 5 11V6l7-3z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 11.8l2.1 2.1L15.2 9.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <p><b>Tus datos se quedan en tu equipo.</b> Tu cuenta se guarda solo en este navegador y no se envía a ninguna base de datos.</p>
          </div>
          <div id="gateForm"></div>
          <details class="gate__legal"><summary>${GDC.LEGAL.short} <span>Aviso legal</span></summary>${GDC.LEGAL.paras.map(p => `<p>${p}</p>`).join('')}</details>
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
    gate.querySelector('.gate__tabs').addEventListener('click', e => {
      const b = e.target.closest('[data-tab]'); if (!b) return;
      tab = b.dataset.tab; draw();
    });
    draw();
  }

  function draw() {
    GDC.$$('.gate__tabs [data-tab]').forEach(b => {
      const on = b.dataset.tab === tab;
      b.classList.toggle('is-on', on); b.setAttribute('aria-selected', String(on));
    });
    tab === 'signup' ? signup() : login();
  }

  function signup() {
    const f = GDC.$('#gateForm');
    f.innerHTML = `
      <form id="fSignup" class="gform" novalidate>
        <label class="field"><span>Tu nombre o apodo</span><input name="name" required maxlength="32" autocomplete="username" placeholder="p. ej. Ana"></label>
        <label class="field"><span>Contraseña (mínimo 6 caracteres)</span><input name="p1" type="password" required minlength="6" autocomplete="new-password"></label>
        <label class="field"><span>Repite la contraseña</span><input name="p2" type="password" required minlength="6" autocomplete="new-password"></label>
        <p class="gform__err" id="gErr" role="alert"></p>
        <button class="btn btn--spark btn--block">Crear mi cuenta y empezar</button>
        <p class="gate__note">¿Ya tienes una cuenta en este navegador? <button type="button" class="linkbtn" data-tab-go="login">Inicia sesión</button></p>
      </form>`;
    f.querySelector('[data-tab-go]').addEventListener('click', () => { tab = 'login'; draw(); });
    GDC.$('#fSignup').addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      if (String(fd.get('p1')) !== String(fd.get('p2'))) return err('Las contraseñas no coinciden.');
      try {
        const u = GDC.Store.createUser({ name: fd.get('name'), secret: fd.get('p1') });
        GDC.Store.login(u.id);
        GDC.App.enter(true);
      } catch (x) { err(x.message); }
    });
    f.querySelector('input').focus({ preventScroll: true });
  }

  function login() {
    const f = GDC.$('#gateForm');
    const us = GDC.Store.users();
    f.innerHTML = `
      <form id="fLogin" class="gform" novalidate>
        ${us.length ? `<div class="gate__quick"><span class="gate__quickl">Cuentas en este navegador:</span>
          ${us.map(u => `<button type="button" class="plist__chip" data-name="${esc(u.name)}"><span class="avatar avatar--s" style="--h:${u.hue}">${esc(u.name.slice(0, 1).toUpperCase())}</span>${esc(u.name)}</button>`).join('')}</div>` : ''}
        <label class="field"><span>Tu nombre o apodo</span><input name="name" required maxlength="32" autocomplete="username"></label>
        <label class="field"><span>Contraseña</span><input name="s" type="password" required autocomplete="current-password"></label>
        <p class="gform__err" id="gErr" role="alert"></p>
        <button class="btn btn--primary btn--block">Entrar</button>
        <p class="gate__note">¿Primera vez aquí? <button type="button" class="linkbtn" data-tab-go="signup">Crea tu cuenta</button></p>
      </form>`;
    const name = f.querySelector('[name="name"]'), pass = f.querySelector('[name="s"]');
    f.querySelector('[data-tab-go]').addEventListener('click', () => { tab = 'signup'; draw(); });
    f.addEventListener('click', e => {
      const c = e.target.closest('.plist__chip'); if (!c) return;
      name.value = c.dataset.name; pass.focus();
    });
    GDC.$('#fLogin').addEventListener('submit', e => {
      e.preventDefault();
      const u = GDC.Store.findByName(name.value);
      if (u && GDC.Store.verify(u.id, pass.value)) { GDC.Store.login(u.id); GDC.App.enter(false); return; }
      err('El nombre o la contraseña no coinciden con ninguna cuenta de este navegador.');
      pass.select();
      GDC.Mascot.react('oops', GDC.$('.gate__mascot .chispa'));
    });
    (us.length === 1 ? (name.value = us[0].name, pass) : name).focus({ preventScroll: true });
  }

  function err(m) { const e = GDC.$('#gErr'); if (e) e.textContent = m; }
  function hide() { const g = GDC.$('#gate'); g.hidden = true; g.innerHTML = ''; }

  GDC.Gate = { render, hide };
})();
