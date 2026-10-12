/* Núcleo: namespace GDC y utilidades compartidas (DOM, escape, avisos, animaciones). */
(function () {
  const GDC = window.GDC = window.GDC || {};

  GDC.VERSION = '0.2.0';
  /* Contenedores de contenido (los rellenan los archivos de js/content/) */
  GDC.MOD = GDC.MOD || {};
  GDC.GLOSSARY = GDC.GLOSSARY || [];
  GDC.LABS = GDC.LABS || [];
  GDC.RETOS = GDC.RETOS || [];
  GDC.BANK = GDC.BANK || [];
  GDC.$ = (sel, root = document) => root.querySelector(sel);
  GDC.$$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  GDC.esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* Crea un nodo a partir de HTML (un solo elemento raíz). */
  GDC.node = html => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  GDC.reducedMotion = () =>
    document.documentElement.dataset.motion === 'off' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Aviso flotante */
  GDC.toast = (msg, kind = 'info', ms = 3200) => {
    const box = GDC.$('#toasts');
    if (!box) return;
    const t = GDC.node(`<div class="toast toast--${kind}" role="status"></div>`);
    t.textContent = msg;
    box.appendChild(t);
    setTimeout(() => { t.classList.add('is-out'); setTimeout(() => t.remove(), 300); }, ms);
  };

  /* Escribe texto letra a letra (respeta movimiento reducido) */
  GDC.type = (el, text, speed = 14) => new Promise(res => {
    if (GDC.reducedMotion()) { el.textContent = text; return res(); }
    let i = 0;
    const tick = () => {
      el.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(tick, speed); else res();
    };
    tick();
  });

  /* Lluvia breve de chispas (logros, subir de nivel) */
  GDC.burst = (x = innerWidth / 2, y = innerHeight / 3, n = 18) => {
    if (GDC.reducedMotion()) return;
    for (let i = 0; i < n; i++) {
      const s = GDC.node('<span class="burst" aria-hidden="true"></span>');
      const a = (Math.PI * 2 * i) / n + Math.random() * .4;
      const d = 60 + Math.random() * 90;
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      s.style.setProperty('--dx', Math.cos(a) * d + 'px');
      s.style.setProperty('--dy', Math.sin(a) * d + 'px');
      s.style.setProperty('--hue', String(220 + Math.random() * 110));
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 900);
    }
  };

  /* Descarga un texto como archivo (respaldos JSON) */
  GDC.download = (name, text, type = 'application/json') => {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = Object.assign(document.createElement('a'), { href: url, download: name });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  GDC.today = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  GDC.shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
})();
