/* Persistencia local: una cuenta admin (contraseña) + estudiantes (PIN).
   Hash SHA-256 con sal. Todo vive en localStorage de este navegador; no hay servidor. */
(function () {
  const APP = 'gemini-desde-cero';
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

  const minLen = role => role === 'admin' ? 6 : 4;

  const Store = {
    APP,
    hasAdmin() { return Object.values(db.users).some(u => u.role === 'admin'); },
    users() {
      return Object.values(db.users).sort((a, b) =>
        (a.role === 'admin' ? -1 : 0) - (b.role === 'admin' ? -1 : 0) || a.created - b.created);
    },
    get(id) { return db.users[id] || null; },

    createUser({ name, secret, role = 'student', hue }) {
      name = String(name || '').trim().slice(0, 32);
      if (!name) throw new Error('El nombre es obligatorio.');
      if (Object.values(db.users).some(u => u.name.toLowerCase() === name.toLowerCase())) throw new Error('Ya existe un perfil con ese nombre.');
      if (!secret || String(secret).length < minLen(role)) throw new Error(role === 'admin' ? 'La contraseña del admin necesita al menos 6 caracteres.' : 'El PIN necesita al menos 4 dígitos.');
      if (role !== 'admin' && !/^\d+$/.test(String(secret))) throw new Error('El PIN solo admite números.');
      const s = salt();
      const u = {
        id: uid(), name, role, salt: s, hash: hash(String(secret), s),
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
      if (!secret || String(secret).length < minLen(u.role)) throw new Error('Demasiado corto.');
      if (u.role !== 'admin' && !/^\d+$/.test(String(secret))) throw new Error('El PIN solo admite números.');
      u.salt = salt(); u.hash = hash(String(secret), u.salt); save();
    },
    remove(id) {
      const u = db.users[id];
      if (!u || u.role === 'admin') throw new Error('La cuenta admin no se puede borrar.');
      delete db.users[id]; save();
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

    /* respaldos */
    exportAll() { return JSON.stringify({ app: APP, exported: new Date().toISOString(), db }, null, 2); },
    exportUser(id) {
      const u = db.users[id]; if (!u) return null;
      const { hash: _h, salt: _s, ...pub } = u;
      return JSON.stringify({ app: APP, kind: 'profile', exported: new Date().toISOString(), user: pub }, null, 2);
    },
    importAll(text) {
      const data = JSON.parse(text);
      if (data.app !== APP) throw new Error('El archivo no es un respaldo de Gemini Desde Cero.');
      if (data.db && data.db.users) { db = data.db; save(); return 'all'; }
      if (data.kind === 'profile' && data.user) {
        const existing = Object.values(db.users).find(x => x.name.toLowerCase() === data.user.name.toLowerCase());
        if (!existing) throw new Error('No existe un perfil llamado «' + data.user.name + '». Créalo primero y vuelve a importar.');
        existing.progress = Object.assign(freshProgress(), data.user.progress); save(); return existing.name;
      }
      throw new Error('Formato no reconocido.');
    },
    wipe() { db = blank(); save(); Store.logout(); },
    freshProgress
  };

  GDC.Store = Store;
  GDC.lang = () => Store.pref('lang') || 'es';
})();
