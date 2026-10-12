/* Glosario: buscador, filtro por categoría y enlace al módulo donde se explica cada término. */
(function () {
  const esc = GDC.esc;
  GDC.GLOSSARY = GDC.GLOSSARY || [];

  const CATS = {
    ia: { icon: '🧠', es: 'IA y modelos', en: 'AI and models' },
    prompt: { icon: '✍️', es: 'Prompting', en: 'Prompting' },
    app: { icon: '✦', es: 'Gemini app', en: 'Gemini app' },
    crear: { icon: '🎨', es: 'Crear (Canvas, imágenes, video)', en: 'Create (Canvas, images, video)' },
    notebook: { icon: '📚', es: 'Gemini Notebook', en: 'Gemini Notebook' },
    workspace: { icon: '🗂️', es: 'Workspace', en: 'Workspace' },
    aula: { icon: '🏫', es: 'Educación', en: 'Education' },
    etica: { icon: '🛡️', es: 'Ética y seguridad', en: 'Ethics and safety' },
    examen: { icon: '🎓', es: 'Certificación', en: 'Certification' }
  };

  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  function view() {
    const all = GDC.GLOSSARY.slice().sort((a, b) => norm(a.t).localeCompare(norm(b.t)));
    let cat = 'all', q = '';
    const el = GDC.node(`<section class="page glosario">
      <header class="page__head">
        <p class="kicker">Glosario</p>
        <h1>${all.length} términos de <span class="ink-spark">Gemini</span></h1>
        <p class="lede">Los nombres de producto se mantienen en inglés, como en la interfaz. Cada término te lleva al módulo donde se explica.</p>
      </header>
      <div class="gl__bar">
        <label class="field gl__search"><span class="sr-only">Buscar término</span>
          <input type="search" id="glQ" placeholder="Buscar: prompt, Canvas, alucinación…" autocomplete="off"></label>
        ${GDC.langSwitcher(GDC.lang(), 'glossary')}
      </div>
      <div class="gl__cats" role="tablist" aria-label="Categorías">
        <button type="button" class="gl__cat is-on" data-cat="all">Todas <small>${all.length}</small></button>
        ${Object.entries(CATS).map(([k, c]) => `<button type="button" class="gl__cat" data-cat="${k}">${c.icon} ${c.es} <small>${all.filter(x => x.cat === k).length}</small></button>`).join('')}
      </div>
      <p class="muted" id="glCount" aria-live="polite"></p>
      <dl class="gl__list" id="glList"></dl>
    </section>`);

    const draw = () => {
      const nq = norm(q.trim());
      const list = all.filter(x => (cat === 'all' || x.cat === cat) &&
        (!nq || norm(x.t + ' ' + (x.alt || '') + ' ' + x.d.es + ' ' + x.d.en).includes(nq)));
      el.querySelector('#glCount').textContent = `${list.length} término${list.length === 1 ? '' : 's'}`;
      el.querySelector('#glList').innerHTML = list.map(x => {
        const mod = GDC.MODULES.find(m => m.id === x.mod);
        return `<div class="gl__item">
          <dt><span class="gl__t">${esc(x.t)}</span>${x.alt ? ` <span class="gl__alt">${esc(x.alt)}</span>` : ''} <span class="gl__catchip">${CATS[x.cat].icon}</span></dt>
          <dd>${GDC.LB(x.d)}${mod ? `<a class="gl__mod" href="#/modulo/${mod.id}">Módulo ${mod.id} · ${GDC.L(mod.title)} →</a>` : ''}</dd>
        </div>`;
      }).join('') || '<p class="muted">Sin resultados. Prueba con otra palabra.</p>';
    };

    el.querySelector('#glQ').addEventListener('input', e => { q = e.target.value; draw(); });
    el.addEventListener('click', e => {
      const b = e.target.closest('.gl__cat'); if (!b) return;
      cat = b.dataset.cat;
      el.querySelectorAll('.gl__cat').forEach(x => x.classList.toggle('is-on', x === b));
      draw();
    });
    draw();
    return el;
  }

  GDC.Glossary = { view, CATS };
})();
