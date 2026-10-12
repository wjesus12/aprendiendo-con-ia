/* Modos de idioma del CONTENIDO (la interfaz va en español):
   es = para entender · en = como en la vida real (la interfaz de Gemini suele estar en inglés) ·
   bi = EN+ES, bloque a bloque. Es la misma pregunta traducida: nunca baja la dificultad.
   Regla editorial: los nombres de producto y función de Gemini NO se traducen
   (Gemini app, Canvas, Gems, skills, Deep Research, Guided Learning, Nano Banana, Gemini Notebook,
   Audio Overview, Mind Map, prompt…). */
(function () {
  const MODES = {
    es: { id: 'es', short: 'ES', label: 'Español', hint: 'Para entender' },
    en: { id: 'en', short: 'EN', label: 'English', hint: 'Como en la vida real' },
    bi: { id: 'bi', short: 'EN+ES', label: 'Puente', hint: 'Inglés con su traducción' }
  };

  const esc = GDC.esc;

  /* Formato ligero dentro del contenido: `código`, **negrita** y *cursiva* */
  const fmt = s => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');

  const pick = (obj, lang) => {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] ?? obj.es ?? obj.en ?? '';
  };

  /* Texto en línea (títulos, opciones) */
  function L(obj, mode) {
    mode = mode || GDC.lang();
    if (typeof obj === 'string') return fmt(obj);
    if (mode === 'bi') {
      const en = pick(obj, 'en'), es = pick(obj, 'es');
      if (en === es) return fmt(en);
      return `<span class="bi"><span class="bi__en" lang="en">${fmt(en)}</span><span class="bi__es" lang="es">${fmt(es)}</span></span>`;
    }
    return `<span lang="${mode}">${fmt(pick(obj, mode))}</span>`;
  }

  /* Bloque (párrafos, enunciados, explicaciones) */
  function LB(obj, mode, tag = 'p') {
    mode = mode || GDC.lang();
    if (typeof obj === 'string') return `<${tag}>${fmt(obj)}</${tag}>`;
    if (mode === 'bi') {
      const en = pick(obj, 'en'), es = pick(obj, 'es');
      return `<div class="biblock"><${tag} class="biblock__en" lang="en">${fmt(en)}</${tag}><${tag} class="biblock__es" lang="es">${fmt(es)}</${tag}></div>`;
    }
    return `<${tag} lang="${mode}">${fmt(pick(obj, mode))}</${tag}>`;
  }

  /* Texto plano (atributos, aria, paleta de comandos) */
  function T(obj, mode) {
    mode = mode || GDC.lang();
    if (mode === 'bi') {
      const en = pick(obj, 'en'), es = pick(obj, 'es');
      return en === es ? en : `${en} · ${es}`;
    }
    return pick(obj, mode);
  }

  /* Selector de idioma reutilizable en cada actividad */
  function switcher(current, scope = 'global') {
    return `<div class="langsw" role="radiogroup" aria-label="Idioma del contenido" data-scope="${scope}">
      ${Object.values(MODES).map(m => `<button type="button" role="radio" class="langsw__b${m.id === current ? ' is-on' : ''}"
        aria-checked="${m.id === current}" data-lang="${m.id}" title="${m.label} — ${m.hint}">${m.short}</button>`).join('')}
    </div>`;
  }

  Object.assign(GDC, { MODES, fmt, pick, L, LB, T, langSwitcher: switcher });
})();
