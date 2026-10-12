/* «Chispa», la mascota: una estrella de cuatro puntas, regordeta y con cara,
   inspirada en la identidad de Gemini sin copiar su logotipo (puntas redondeadas,
   rostro, mejillas y una lunita que la orbita). Reacciona a aciertos y errores.
   Paleta: azul profundo → azul cielo → violeta → amarillo oscuro. */
(function () {
  let n = 0;

  const BODY = 'M50 6 C55 30 68 44 94 50 C68 56 55 70 50 94 C45 70 32 56 6 50 C32 44 45 30 50 6 Z';
  const STOPS = [['0', '#1f5fe0'], ['.34', '#3aa0f5'], ['.68', '#7a5cf0'], ['1', '#c9921a']];

  function svg({ size = 120, cls = '', mood = 'idle' } = {}) {
    const id = 'ch' + (++n);
    return `<svg class="chispa chispa--${mood} ${cls}" viewBox="0 0 100 100" width="${size}" height="${size}" role="img" aria-label="Chispa, la mascota">
      <defs>
        <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1">
          ${STOPS.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}
        </linearGradient>
        <radialGradient id="${id}s" cx=".38" cy=".32" r=".5">
          <stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <g class="chispa__orbit"><circle cx="86" cy="18" r="4.2" fill="#f2c14e"/></g>
      <g class="chispa__body">
        <path d="${BODY}" fill="url(#${id}g)" stroke="url(#${id}g)" stroke-width="7" stroke-linejoin="round"/>
        <path d="${BODY}" fill="url(#${id}s)"/>
        <g class="chispa__face">
          <ellipse class="chispa__eye" cx="43" cy="47" rx="3.3" ry="4.4" fill="#16173a"/>
          <ellipse class="chispa__eye" cx="57" cy="47" rx="3.3" ry="4.4" fill="#16173a"/>
          <circle cx="44.2" cy="45.4" r="1.2" fill="#fff"/><circle cx="58.2" cy="45.4" r="1.2" fill="#fff"/>
          <ellipse cx="37.5" cy="54" rx="3.2" ry="2" fill="#ffc38a" opacity=".8"/>
          <ellipse cx="62.5" cy="54" rx="3.2" ry="2" fill="#ffc38a" opacity=".8"/>
          <path class="chispa__mouth" d="M45.5 55 Q50 59.5 54.5 55" fill="none" stroke="#16173a" stroke-width="2.2" stroke-linecap="round"/>
        </g>
      </g>
    </svg>`;
  }

  /* Reacción sobre una instancia concreta o sobre todas las visibles */
  function react(kind = 'cheer', el) {
    const targets = el ? [el] : GDC.$$('.chispa');
    targets.forEach(t => {
      const mouth = t.querySelector('.chispa__mouth');
      if (mouth) mouth.setAttribute('d', kind === 'oops' ? 'M45.5 57.5 Q50 54 54.5 57.5' : kind === 'think' ? 'M46 56.5 L54 56.5' : 'M44.5 54.5 Q50 61 55.5 54.5');
      t.classList.remove('is-cheer', 'is-oops', 'is-think');
      void t.getBoundingClientRect();
      t.classList.add('is-' + kind);
      clearTimeout(t._rt);
      t._rt = setTimeout(() => {
        t.classList.remove('is-' + kind);
        if (mouth) mouth.setAttribute('d', 'M45.5 55 Q50 59.5 54.5 55');
      }, 1400);
    });
  }

  /* Bocadillo junto a la mascota flotante (sigue el idioma del contenido) */
  function say(text, ms = 5200) {
    const dock = GDC.$('#chispaDock');
    if (!dock) return;
    const b = dock.querySelector('.chispa-dock__say');
    if (typeof text === 'string') b.textContent = text;
    else if (GDC.lang() === 'bi') b.innerHTML = `<span lang="en">${GDC.esc(text.en)}</span><span class="chispa-dock__es" lang="es">${GDC.esc(text.es)}</span>`;
    else b.textContent = GDC.pick(text, GDC.lang());
    b.hidden = false;
    placeBubble(dock);
    clearTimeout(b._t);
    b._t = setTimeout(() => { b.hidden = true; }, ms);
  }

  /* Mazo de tips: se baraja y no repite hasta haberlos mostrado todos */
  let deck = [];
  function nextTip() {
    const all = GDC.TIPS || [];
    if (!all.length) return '¡Hola!';
    if (!deck.length) {
      const last = nextTip.last;
      deck = GDC.shuffle(all.map((_, i) => i));
      if (deck.length > 1 && deck[deck.length - 1] === last) deck.unshift(deck.pop());
    }
    nextTip.last = deck.pop();
    return all[nextTip.last];
  }

  /* ---------- Posición arrastrable (preferencia de este navegador) ---------- */
  const POS_KEY = 'gdc.chispaPos';
  const SIZE = () => (innerWidth <= 560 ? 52 : 64);
  const MARGIN = 8;

  function loadPos() {
    try { const p = JSON.parse(localStorage.getItem(POS_KEY)); if (p && isFinite(p.x) && isFinite(p.y)) return p; } catch (e) {}
    return null;
  }
  function savePos(p) { try { localStorage.setItem(POS_KEY, JSON.stringify(p)); } catch (e) {} }

  /* Guarda la posición como fracción del viewport para que sobreviva a cambios de tamaño */
  function apply(dock, fx, fy) {
    const s = SIZE();
    const x = Math.min(Math.max(MARGIN, fx * innerWidth), innerWidth - s - MARGIN);
    const y = Math.min(Math.max(MARGIN, fy * innerHeight), innerHeight - s - MARGIN);
    dock.style.left = x + 'px';
    dock.style.top = y + 'px';
    placeBubble(dock);
  }
  function current(dock) {
    const r = dock.getBoundingClientRect();
    return { x: r.left / innerWidth, y: r.top / innerHeight };
  }
  /* El bocadillo se abre hacia el lado con más espacio */
  function placeBubble(dock) {
    const r = dock.getBoundingClientRect();
    dock.classList.toggle('is-left', r.left + r.width / 2 < innerWidth / 2);
    dock.classList.toggle('is-top', r.top + r.height / 2 < innerHeight / 2);
  }

  function dock() {
    if (GDC.$('#chispaDock')) return;
    const d = GDC.node(`<div class="chispa-dock" id="chispaDock">
      <p class="chispa-dock__say" role="status" hidden></p>
      <button class="chispa-dock__btn" type="button" aria-label="Chispa: toca para un consejo; arrástrala o usa las flechas para moverla">${svg({ size: 64 })}</button>
    </div>`);
    document.body.appendChild(d);
    const btn = d.querySelector('button');
    const start = loadPos();
    if (start) apply(d, start.x, start.y);
    else apply(d, (innerWidth - SIZE() - 16) / innerWidth, (innerHeight - SIZE() - 16) / innerHeight);

    const tip = () => { react('cheer', d.querySelector('.chispa')); say(nextTip()); };

    /* Arrastre con ratón o dedo: si se mueve más de 6 px es arrastre, si no, es un toque */
    let drag = null;
    btn.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      const r = d.getBoundingClientRect();
      drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: e.clientX - r.left, oy: e.clientY - r.top, moved: false };
      btn.setPointerCapture(e.pointerId);
    });
    btn.addEventListener('pointermove', e => {
      if (!drag || e.pointerId !== drag.id) return;
      if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 6) return;
      if (!drag.moved) { drag.moved = true; d.classList.add('is-dragging'); d.querySelector('.chispa-dock__say').hidden = true; }
      apply(d, (e.clientX - drag.ox) / innerWidth, (e.clientY - drag.oy) / innerHeight);
    });
    const end = e => {
      if (!drag || e.pointerId !== drag.id) return;
      const moved = drag.moved;
      drag = null;
      d.classList.remove('is-dragging');
      if (moved) {
        savePos(current(d));
        btn.dataset.justDragged = '1';
        setTimeout(() => { delete btn.dataset.justDragged; }, 60);
      }
    };
    btn.addEventListener('pointerup', end);
    btn.addEventListener('pointercancel', end);

    /* El clic (también con Enter/Espacio) da un tip, salvo justo después de arrastrar */
    btn.addEventListener('click', () => {
      if (btn.dataset.justDragged) { delete btn.dataset.justDragged; return; }
      tip();
    });

    /* Teclado: flechas para moverla (Shift = pasos más largos) */
    btn.addEventListener('keydown', e => {
      const k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
      if (!k) return;
      e.preventDefault();
      const step = e.shiftKey ? 80 : 20;
      const r = d.getBoundingClientRect();
      apply(d, (r.left + k[0] * step) / innerWidth, (r.top + k[1] * step) / innerHeight);
      savePos(current(d));
    });

    window.addEventListener('resize', onResize);
  }
  function onResize() {
    const d = GDC.$('#chispaDock');
    if (!d) return;
    const p = loadPos() || current(d);
    apply(d, p.x, p.y);
  }
  function undock() { GDC.$('#chispaDock')?.remove(); window.removeEventListener('resize', onResize); }

  GDC.Mascot = { svg, react, say, dock, undock, nextTip, STOPS };
})();
