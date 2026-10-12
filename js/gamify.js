/* Gamificación: XP, niveles, racha diaria y logros. */
(function () {
  const LEVELS = [
    { xp: 0, name: 'Curioso' },
    { xp: 120, name: 'Primer prompt' },
    { xp: 350, name: 'Explorador' },
    { xp: 700, name: 'Constructor de Canvas' },
    { xp: 1200, name: 'Creador de Gems' },
    { xp: 1900, name: 'Investigador' },
    { xp: 2800, name: 'Docente aumentado' },
    { xp: 4000, name: 'Experto Gemini' },
    { xp: 5600, name: 'Mentor Gemini' }
  ];

  const BADGES = {
    hola: { icon: '✦', name: 'Primera chispa', desc: 'Entraste al portal por primera vez.' },
    modulo1: { icon: '📖', name: 'Primera página', desc: 'Completaste tu primer módulo.' },
    parte1: { icon: '🧭', name: 'Fundamentos', desc: 'Completaste la Parte 1.' },
    racha3: { icon: '🔥', name: 'Racha de 3', desc: 'Estudiaste 3 días seguidos.' },
    racha7: { icon: '🌟', name: 'Semana completa', desc: 'Estudiaste 7 días seguidos.' },
    quiz10: { icon: '🎯', name: 'Diez aciertos', desc: 'Acertaste 10 preguntas.' },
    ingles: { icon: '🌎', name: 'Sin miedo al inglés', desc: 'Acertaste 10 preguntas en modo EN.' },
    lab1: { icon: '🔍', name: 'Ojo clínico', desc: 'Resolviste tu primer lab.' },
    simulacro: { icon: '🏁', name: 'Primer simulacro', desc: 'Terminaste un simulacro completo.' },
    aprobado: { icon: '🎓', name: 'Listo para el examen', desc: 'Aprobaste un simulacro.' }
  };

  function level(xp) {
    let i = 0;
    while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++;
    const cur = LEVELS[i], next = LEVELS[i + 1];
    const pct = next ? Math.round(((xp - cur.xp) / (next.xp - cur.xp)) * 100) : 100;
    return { n: i + 1, name: cur.name, next, pct };
  }

  function touchStreak(P) {
    const t = GDC.today();
    const s = P.streak;
    if (s.last === t) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    const ys = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, '0')}-${String(y.getDate()).padStart(2, '0')}`;
    s.count = s.last === ys ? s.count + 1 : 1;
    s.best = Math.max(s.best, s.count);
    s.last = t;
    if (s.count >= 3) badge('racha3', P);
    if (s.count >= 7) badge('racha7', P);
  }

  function award(xp, why) {
    const P = GDC.Store.P();
    const before = level(P.xp).n;
    P.xp += xp;
    P.days[GDC.today()] = (P.days[GDC.today()] || 0) + xp;
    touchStreak(P);
    GDC.Store.commit();
    if (why) GDC.toast(`+${xp} XP · ${why}`, 'ok', 2200);
    const after = level(P.xp);
    if (after.n > before) {
      GDC.burst();
      GDC.toast(`¡Subiste a nivel ${after.n}: ${after.name}!`, 'spark', 3800);
      GDC.Mascot && GDC.Mascot.react('cheer');
    }
    GDC.App && GDC.App.refreshChrome();
  }

  function badge(id, P = GDC.Store.P()) {
    if (!BADGES[id] || P.badges[id]) return false;
    P.badges[id] = Date.now();
    GDC.Store.commit();
    setTimeout(() => GDC.toast(`Logro: ${BADGES[id].icon} ${BADGES[id].name}`, 'spark', 3600), 300);
    return true;
  }

  GDC.G = { LEVELS, BADGES, level, award, badge, touchStreak };
})();
