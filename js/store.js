/* Persistencia local de uso libre: cada persona crea su propia cuenta (nombre + contraseña).
   Hash SHA-256 con sal. Todo vive en localStorage de este navegador: no hay servidor ni base de datos.
   No existe rol de administrador (las cuentas «admin» antiguas se tratan como cuentas normales). */
(function () {
  const APP = 'gemini-desde-cero';   /* identificador interno de los respaldos: no cambiar (compatibilidad) */
  const KEY = 'gdc.v1';
  const SESSION = 'gdc.session';

  const blank = () => ({ version: 1, created: Date.now(), users: {} });

  function freshProgress() {
    return {
      xp: 0,
      streak: { count: 0, best: 0, last: null },
      days: {},          // 'YYYY-MM-DD' -> xp del día
      badges: {},        // id -> timestamp
      modules: {},       // '01' -> { read, quiz, at }
      answers: {},       // id pregunta -> { n, ok, last, mode }
      exams: [],         // historial de simulacros
      srs: {},           // id flashcard -> { ef, iv, reps, due }
      labs: {},          // id lab -> { ok, tries, at }
      builds: {},        // id reto -> { ok, tries, at }
      langStats: { en: { n: 0, ok: 0 }, es: { n: 0, ok: 0 }, bi: { n: 0, ok: 0 } },
      domainStats: { 1: { n: 0, ok: 0 }, 2: { n: 0, ok: 0 }, 3: { n: 0, ok: 0 }, S: { n: 0, ok: 0 } }
    };
  }

  let db = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      const parsed = JSON.parse(raw);
      return parsed && parsed.users ? parsed : blank();
    } catch (e) { return blank(); }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); return true; }
    catch (e) { GDC.toast('No se pudo guardar: el almacenamiento del navegador está lleno o bloqueado.', 'bad'); return false; }
  }

  const uid = () => 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const salt = () => Array.from(crypto.getRandomValues(new Uint8Array(12)), b => b.toString(16).padStart(2, '0')).join('');
  const hash = (secret, s) => GDC.sha256(s + '::' + secret);

  const MIN = 6;
  const norm = n => String(n || '').trim().toLowerCase();

  const Store = {
    APP,
    users() { return Object.values(db.users).sort((a, b) => (b.lastLogin || b.created) - (a.lastLogin || a.created)); },
    get(id) { return db.users[id] || null; },
    findByName(name) { return Object.values(db.users).find(u => norm(u.name) === norm(name)) || null; },

    createUser({ name, secret, hue }) {
      name = String(name || '').trim().slice(0, 32);
      if (!name) throw new Error('Escribe tu nombre o apodo.');
      if (Store.findByName(name)) throw new Error('Ya hay una cuenta con ese nombre en este navegador. Elige otro o inicia sesión.');
      if (!secret || String(secret).length < MIN) throw new Error('La contraseña necesita al menos 6 caracteres.');
      const s = salt();
      const u = {
        id: uid(), name, role: 'user', salt: s, hash: hash(String(secret), s),
        hue: hue ?? Math.floor(200 + Math.random() * 140),
        created: Date.now(), lastLogin: null,
        prefs: { theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light', lang: 'es', motion: true },
        progress: freshProgress()
      };
      db.users[u.id] = u; save();
      return u;
    },
    verify(id, secret) { const u = db.users[id]; return !!u && hash(String(secret), u.salt) === u.hash; },
    setSecret(id, secret) {
      const u = db.users[id]; if (!u) return;
      if (!secret || String(secret).length < MIN) throw new Error('La contraseña necesita al menos 6 caracteres.');
      u.salt = salt(); u.hash = hash(String(secret), u.salt); save();
    },
    /* Cada persona puede borrar su propia cuenta de este navegador */
    remove(id) {
      if (!db.users[id]) return;
      delete db.users[id]; save();
      if (Store.current() === null) Store.logout();
    },
    resetProgress(id) { const u = db.users[id]; if (u) { u.progress = freshProgress(); save(); } },

    /* sesión */
    login(id) {
      const u = db.users[id]; if (!u) return;
      u.lastLogin = Date.now(); save();
      try { sessionStorage.setItem(SESSION, id); localStorage.setItem(SESSION, id); } catch (e) {}
    },
    logout() { try { sessionStorage.removeItem(SESSION); localStorage.removeItem(SESSION); } catch (e) {} },
    current() {
      let id = null;
      try { id = sessionStorage.getItem(SESSION) || localStorage.getItem(SESSION); } catch (e) {}
      return id && db.users[id] ? db.users[id] : null;
    },

    P() { const u = Store.current(); return u ? u.progress : freshProgress(); },
    commit() { save(); },
    pref(k) { return Store.current()?.prefs[k]; },
    setPref(k, v) { const u = Store.current(); if (u) { u.prefs[k] = v; save(); } },

    /* respaldos: cada persona exporta su progreso (sin contraseña) y lo importa en su cuenta actual */
    exportUser(id) {
      const u = db.users[id]; if (!u) return null;
      const { hash: _h, salt: _s, ...pub } = u;
      return JSON.stringify({ app: APP, kind: 'profile', exported: new Date().toISOString(), user: pub }, null, 2);
    },
    importInto(id, text) {
      const u = db.users[id]; if (!u) throw new Error('Inicia sesión antes de importar.');
      let data;
      try { data = JSON.parse(text); } catch (e) { throw new Error('El archivo no es un JSON válido.'); }
      if (data.app !== APP || data.kind !== 'profile' || !data.user?.progress) throw new Error('El archivo no es un respaldo de progreso de Aprendiendo con IA.');
      u.progress = Object.assign(freshProgress(), data.user.progress); save();
      return u.name;
    },
    wipe() { db = blank(); save(); Store.logout(); },
    freshProgress
  };

  GDC.Store = Store;
  GDC.lang = () => Store.pref('lang') || 'es';
})();
