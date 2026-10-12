/* Panel de administración: crear estudiantes, ver su progreso, reiniciar, borrar y respaldar. */
(function () {
  const esc = GDC.esc;

  function view() {
    const me = GDC.Store.current();
    if (me.role !== 'admin') return GDC.Views.notFound();
    const us = GDC.Store.users();
    const el = GDC.node(`<section class="page admin">
      <header class="page__head"><p class="kicker">Administración</p><h1>Perfiles y progreso</h1>
        <p class="lede">Todo se guarda en este navegador. Exporta un respaldo con regularidad.</p></header>
      <div class="grid2">
        <section class="sheet"><h2>Nuevo estudiante</h2>
          <form class="gform" id="fNew">
            <label class="field"><span>Nombre</span><input name="name" required maxlength="32"></label>
            <label class="field"><span>PIN (mínimo 4 dígitos)</span><input name="pin" required minlength="4" inputmode="numeric" pattern="[0-9]*" autocomplete="off"></label>
            <button class="btn btn--spark">Crear perfil</button>
          </form>
        </section>
        <section class="sheet"><h2>Respaldos</h2>
          <div class="row">
            <button class="btn" type="button" data-act="exportAll">Exportar todo (.json)</button>
            <label class="btn">Importar<input type="file" accept="application/json,.json" data-act="import" hidden></label>
          </div>
          <p class="muted">«Importar» con un respaldo completo reemplaza todos los perfiles de este navegador.</p>
          <button class="btn btn--danger btn--small" type="button" data-act="wipe">Borrar todos los datos</button>
        </section>
      </div>
      <section class="sheet">
        <h2>Perfiles (${us.length})</h2>
        <div class="tablewrap"><table class="table">
          <thead><tr><th>Perfil</th><th>Nivel</th><th>XP</th><th>Módulos</th><th>Racha</th><th>Último acceso</th><th><span class="sr-only">Acciones</span></th></tr></thead>
          <tbody>${us.map(u => {
            const P = u.progress, lv = GDC.G.level(P.xp);
            const mods = Object.values(P.modules).filter(m => m.read).length;
            return `<tr>
              <td><span class="avatar avatar--s" style="--h:${u.hue}">${esc(u.name[0].toUpperCase())}</span> ${esc(u.name)} ${u.role === 'admin' ? '<span class="chip">admin</span>' : ''}</td>
              <td>${lv.n} · ${esc(lv.name)}</td><td>${P.xp}</td><td>${mods}/${GDC.MODULES.length}</td><td>${P.streak.count}</td>
              <td>${u.lastLogin ? new Date(u.lastLogin).toLocaleDateString('es') : '—'}</td>
              <td class="table__act">${u.role === 'admin' ? '' : `
                <button class="btn btn--small" type="button" data-act="pin" data-id="${u.id}">PIN</button>
                <button class="btn btn--small" type="button" data-act="exp" data-id="${u.id}">Exportar</button>
                <button class="btn btn--small" type="button" data-act="reset" data-id="${u.id}">Reiniciar</button>
                <button class="btn btn--small btn--danger" type="button" data-act="del" data-id="${u.id}">Borrar</button>`}</td>
            </tr>`;
          }).join('')}</tbody>
        </table></div>
      </section>
    </section>`);

    el.querySelector('#fNew').addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try { const u = GDC.Store.createUser({ name: fd.get('name'), secret: fd.get('pin') }); GDC.toast(`Perfil «${u.name}» creado.`, 'ok'); GDC.App.route(); }
      catch (x) { GDC.toast(x.message, 'bad'); }
    });

    el.addEventListener('click', e => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const id = b.dataset.id, u = id && GDC.Store.get(id);
      switch (b.dataset.act) {
        case 'exportAll': GDC.download(`gemini-desde-cero-respaldo-${GDC.today()}.json`, GDC.Store.exportAll()); break;
        case 'exp': GDC.download(`gemini-desde-cero-${u.name}-${GDC.today()}.json`, GDC.Store.exportUser(id)); break;
        case 'pin': {
          const p = prompt(`Nuevo PIN para ${u.name} (mínimo 4 dígitos):`);
          if (p) { try { GDC.Store.setSecret(id, p); GDC.toast('PIN actualizado.', 'ok'); } catch (x) { GDC.toast(x.message, 'bad'); } }
          break;
        }
        case 'reset': if (confirm(`¿Reiniciar todo el progreso de ${u.name}?`)) { GDC.Store.resetProgress(id); GDC.App.route(); } break;
        case 'del': if (confirm(`¿Borrar el perfil de ${u.name}? No se puede deshacer.`)) { GDC.Store.remove(id); GDC.App.route(); } break;
        case 'wipe':
          if (confirm('¿Borrar TODOS los perfiles y el progreso de este navegador?') && confirm('Última confirmación: esta acción no se puede deshacer.')) { GDC.Store.wipe(); location.hash = ''; location.reload(); }
          break;
      }
    });

    el.addEventListener('change', e => {
      if (e.target.dataset.act !== 'import' || !e.target.files[0]) return;
      e.target.files[0].text().then(t => {
        try { const r = GDC.Store.importAll(t); GDC.toast(r === 'all' ? 'Respaldo completo restaurado.' : `Progreso de ${r} restaurado.`, 'ok'); GDC.App.route(); }
        catch (x) { GDC.toast(x.message, 'bad', 5000); }
      });
    });
    return el;
  }

  GDC.Admin = { view };
})();
