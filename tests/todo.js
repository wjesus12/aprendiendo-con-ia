/* Pruebas del portal: node tests/todo.js
   Fase 1: sintaxis de todos los JS, carga del contenido en un entorno simulado,
   bilingüismo de la ruta y presencia de la opción Contacto con el enlace correcto. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
let fails = 0, oks = 0;
const ok = (cond, msg) => { if (cond) oks++; else { fails++; console.log('  ✗ ' + msg); } };

function jsFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d =>
    d.isDirectory() ? jsFiles(path.join(dir, d.name)) : d.name.endsWith('.js') ? [path.join(dir, d.name)] : []);
}

console.log('1. Sintaxis');
for (const f of jsFiles(path.join(ROOT, 'js'))) {
  try { execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); ok(true); }
  catch (e) { ok(false, path.relative(ROOT, f) + ': ' + e.stderr.toString().split('\n')[0]); }
}

console.log('2. Scripts de index.html existen y llevan ?v=');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const refs = [...html.matchAll(/(?:src|href)="((?:js|css|fonts|img)\/[^"?]+)(\?v=\d+)?"/g)];
for (const [, file, v] of refs) {
  ok(fs.existsSync(path.join(ROOT, file)), 'falta ' + file);
  if (!file.startsWith('img/')) ok(!!v, file + ' sin ?v=N');
}
ok(!/<script>(?!<\/script>)|onclick=|javascript:/.test(html), 'index.html tiene scripts en línea u onclick');
const allJs = jsFiles(path.join(ROOT, 'js')).map(f => fs.readFileSync(f, 'utf8')).join('\n');
ok(!/\beval\(|new Function\(|onclick=/.test(allJs), 'el JS usa eval, new Function u onclick=');

console.log('3. Contenido');
const ctx = { window: {}, console };
ctx.window = ctx; ctx.GDC = {};
vm.createContext(ctx);
/* core.js crea los contenedores que llenan los archivos de contenido (igual que en el navegador) */
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/core.js'), 'utf8'), ctx);
const contentFiles = fs.readdirSync(path.join(ROOT, 'js/content')).filter(f => f.endsWith('.js')).sort();
for (const f of contentFiles) vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/content', f), 'utf8'), ctx, { filename: f });
for (const f of contentFiles) ok(html.includes(`js/content/${f}?v=`), `index.html no carga js/content/${f}`);
const { MODULES, PARTS } = ctx.GDC;
ok(MODULES.length >= 20 && MODULES.length <= 30, 'la ruta debe tener entre 20 y 30 módulos');
ok(new Set(MODULES.map(m => m.id)).size === MODULES.length, 'ids de módulo repetidos');
for (const m of MODULES) {
  ok(m.title.es && m.title.en, `módulo ${m.id} sin título bilingüe`);
  ok(PARTS.some(p => p.id === m.part), `módulo ${m.id} en una parte inexistente`);
}
for (const p of PARTS) ok(p.title.es && p.title.en, `parte ${p.id} sin título bilingüe`);
const TIPS = ctx.GDC.TIPS;
ok(TIPS.length >= 40, 'Chispa necesita al menos 40 tips');
for (const [i, t] of TIPS.entries()) ok(t.es && t.en, `tip ${i} sin versión ES y EN`);
ok(new Set(TIPS.map(t => t.es)).size === TIPS.length, 'hay tips repetidos');

console.log('4. Módulos (bilingüe, quiz y sesgo de longitud)');
/* Recorre cualquier objeto: todo par {es, en} debe tener ambos textos */
function walkBi(o, where) {
  if (Array.isArray(o)) return o.forEach((x, i) => walkBi(x, `${where}[${i}]`));
  if (o && typeof o === 'object') {
    if ('es' in o || 'en' in o) {
      ok(typeof o.es === 'string' && o.es.trim() && typeof o.en === 'string' && o.en.trim(), `${where}: falta ES o EN`);
      return;
    }
    for (const k in o) walkBi(o[k], `${where}.${k}`);
  }
}
const LIMIT = 1.15;
function checkQuestion(q, where) {
  walkBi(q, where);
  ok(Array.isArray(q.o) && q.o.length === 4, `${where}: debe tener 4 opciones`);
  ok(q.o.filter(x => x.ok).length === 1, `${where}: debe tener exactamente 1 correcta`);
  ok([1, 2, 3, "S"].includes(q.d), `${where}: dominio d inválido`);
  for (const lang of ['es', 'en']) {
    const right = q.o.find(x => x.ok)?.t[lang] || '';
    const maxWrong = Math.max(...q.o.filter(x => !x.ok).map(x => x.t[lang].length));
    ok(right.length <= maxWrong * LIMIT, `${where} [${lang}]: correcta ${right.length} car. > ${Math.round(LIMIT * 100)}% de la incorrecta más larga (${maxWrong})`);
    for (const x of q.o) ok(x.why && x.why[lang], `${where} [${lang}]: opción sin «por qué»`);
  }
}
const MOD = ctx.GDC.MOD;
const written = Object.keys(MOD).sort();
console.log(`   ${written.length}/${MODULES.length} módulos con contenido`);
for (const id of written) {
  const m = MOD[id];
  ok(MODULES.some(x => x.id === id), `MOD[${id}] no existe en la ruta`);
  walkBi({ intro: m.intro, objetivos: m.objetivos, secciones: m.secciones, trampas: m.trampas, ideas: m.ideas }, `mod ${id}`);
  ok(m.objetivos.length >= 2 && m.secciones.length >= 3 && m.trampas.length >= 2 && m.ideas.length >= 3, `mod ${id}: estructura incompleta`);
  ok(m.quiz.length >= 3, `mod ${id}: menos de 3 preguntas`);
  m.quiz.forEach((q, i) => checkQuestion(q, `mod ${id} quiz ${i + 1}`));
  ok(Array.isArray(m.fuentes) && m.fuentes.length >= 1 && m.fuentes.every(f => /^https:\/\//.test(f.url)), `mod ${id}: fuentes ausentes o sin https`);
  const txt = JSON.stringify(m);
  for (const [, ref] of txt.matchAll(/#\/modulo\/(\d\d)/g)) ok(MODULES.some(x => x.id === ref), `mod ${id}: enlace a módulo inexistente ${ref}`);
  ok(!/PUCP|IDU|1IND\d/i.test(txt), `mod ${id}: menciona la institución o códigos de curso`);
}

console.log('5. Glosario');
const GL = ctx.GDC.GLOSSARY;
console.log(`   ${GL.length} términos`);
ok(GL.length >= 110, 'el glosario necesita al menos 110 términos');
ok(Object.keys(MOD).length === MODULES.length, 'faltan módulos por escribir');
const cats = ['ia', 'prompt', 'app', 'crear', 'notebook', 'workspace', 'aula', 'etica', 'examen'];
for (const g of GL) {
  ok(g.t && g.d && g.d.es && g.d.en, `glosario «${g.t}»: falta definición bilingüe`);
  ok(cats.includes(g.cat), `glosario «${g.t}»: categoría inválida`);
  ok(MODULES.some(m => m.id === g.mod), `glosario «${g.t}»: módulo ${g.mod} inexistente`);
}
ok(new Set(GL.map(g => g.t.toLowerCase())).size === GL.length, 'glosario: términos repetidos');

console.log('6. Labs y retos');
const LABS = ctx.GDC.LABS, RETOS = ctx.GDC.RETOS;
console.log(`   ${LABS.length} labs · ${RETOS.length} retos`);
ok(LABS.length >= 15, 'se esperan al menos 15 labs');
ok(RETOS.length >= 8, 'se esperan al menos 8 retos');
ok(new Set(LABS.map(l => l.id)).size === LABS.length, 'labs: ids repetidos');
for (const l of LABS) {
  const w = `lab ${l.id}`;
  walkBi({ title: l.title, context: l.context, lines: l.lines, question: l.question, hint: l.hint, lesson: l.lesson }, w);
  ok(MODULES.some(m => m.id === l.mod), `${w}: módulo ${l.mod} inexistente`);
  ok(['basic', 'mid', 'hard'].includes(l.level), `${w}: nivel inválido`);
  ok(Array.isArray(l.bug) && l.bug.length >= 1 && l.bug.every(k => Number.isInteger(k) && k >= 0 && k < l.lines.length), `${w}: índices de bug fuera de rango`);
  ok(new Set(l.bug).size === l.bug.length, `${w}: bug repetido`);
  ok(l.lines.length - l.bug.length >= 2, `${w}: debe haber al menos 2 líneas correctas para elegir`);
  checkQuestion({ d: l.d, q: l.question, o: l.options }, w);
  ok(!/PUCP|IDU|1IND\d/i.test(JSON.stringify(l)), `${w}: menciona la institución`);
}
ok(new Set(RETOS.map(r => r.id)).size === RETOS.length, 'retos: ids repetidos');
for (const r of RETOS) {
  const w = `reto ${r.id}`;
  walkBi({ title: r.title, brief: r.brief, wrap: r.wrap, slots: r.slots.map(s => s.label).filter(Boolean), pieces: r.pieces.map(p => ({ t: p.t, why: p.why })) }, w);
  ok(MODULES.some(m => m.id === r.mod), `${w}: módulo ${r.mod} inexistente`);
  ok(['slots', 'order'].includes(r.kind), `${w}: tipo inválido`);
  const ids = r.pieces.map(p => p.id);
  ok(new Set(ids).size === ids.length, `${w}: piezas con id repetido`);
  const exp = r.slots.map(s => s.expect);
  ok(new Set(exp).size === exp.length, `${w}: dos casillas esperan la misma pieza`);
  ok(exp.every(e => ids.includes(e)), `${w}: una casilla espera una pieza inexistente (resoluble)`);
  ok(ids.length - exp.length >= 1, `${w}: necesita al menos un distractor`);
  if (r.kind === 'slots') ok(r.slots.every(s => s.label), `${w}: las casillas con nombre necesitan etiqueta`);
  ok(!/PUCP|IDU|1IND\d/i.test(JSON.stringify(r)), `${w}: menciona la institución`);
}
ok(/GDC\.Labs\.detail/.test(fs.readFileSync(path.join(ROOT, 'js/app.js'), 'utf8')), 'app.js no enruta los labs');
ok(/GDC\.Retos\.detail/.test(fs.readFileSync(path.join(ROOT, 'js/app.js'), 'utf8')), 'app.js no enruta los retos');

console.log('7. Banco de preguntas');
const BANK = ctx.GDC.BANK;
const byD = d => BANK.filter(q => q.d === d).length;
console.log(`   ${BANK.length} preguntas · D1 ${byD(1)} · D2 ${byD(2)} · D3 ${byD(3)} · Student ${byD('S')}`);
ok(new Set(BANK.map(q => q.id)).size === BANK.length, 'banco: ids repetidos');
for (const q of BANK) {
  ok(MODULES.some(m => m.id === q.mod), `banco ${q.id}: módulo ${q.mod} inexistente`);
  checkQuestion(q, `banco ${q.id}`);
  ok(!/PUCP|IDU|1IND\d/i.test(JSON.stringify(q)), `banco ${q.id}: menciona la institución`);
}
const quizTotal = Object.values(MOD).reduce((n, m) => n + m.quiz.length, 0);
console.log(`   pool de práctica: ${BANK.length + quizTotal} (banco + mini quiz)`);
if (process.env.FASE4_COMPLETA !== '0') {
  ok(BANK.length + quizTotal >= 200, 'el pool de práctica necesita al menos 200 preguntas');
  ok(byD(1) >= 15 && byD(2) >= 15 && byD(3) >= 15 && byD('S') >= 12, 'el banco no alcanza para armar los simulacros');
}

console.log('8. Motores: simulacros y SM-2');
const ectx = { window: {}, console, document: {} };
ectx.window = ectx;
vm.createContext(ectx);
ectx.GDC = { MOD: MOD, GLOSSARY: GL, LABS: [], RETOS: [], BANK: BANK, MODULES: MODULES };
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/core.js'), 'utf8'), ectx);
ectx.GDC.Store = { P: () => ({ answers: {} }) };
for (const f of ['js/practice.js', 'js/exam.js', 'js/flash.js']) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ectx);
for (const [type, mix] of Object.entries({ educator: { 1: 12, 2: 13, 3: 12 }, student: { S: 10, 1: 10, 3: 10 } })) {
  for (let round = 0; round < 20; round++) {
    const items = ectx.GDC.Exam.pickQuestions(type);
    const total = Object.values(mix).reduce((a, b) => a + b, 0);
    ok(items.length === total, `simulacro ${type}: ${items.length} preguntas en lugar de ${total}`);
    ok(new Set(items.map(x => x.q.id)).size === items.length, `simulacro ${type}: preguntas repetidas`);
    for (const [d, n] of Object.entries(mix)) ok(items.filter(x => String(x.q.d) === d).length === n, `simulacro ${type}: dominio ${d} no tiene ${n} preguntas`);
  }
}
const sm2 = ectx.GDC.Flash.sm2;
let st = sm2(undefined, 4); ok(st.reps === 1 && st.iv === 1, 'SM-2: primer acierto debe dar intervalo de 1 día');
st = sm2(st, 4); ok(st.reps === 2 && st.iv === 6, 'SM-2: segundo acierto debe dar 6 días');
st = sm2(st, 5); ok(st.reps === 3 && st.iv === Math.round(6 * st.ef) || st.iv >= 15, 'SM-2: tercer acierto debe multiplicar por EF');
const st2 = sm2(st, 1); ok(st2.reps === 0 && st2.iv === 0, 'SM-2: «Otra vez» reinicia la tarjeta');
ok(sm2(undefined, 3).ef >= 1.3 && sm2(undefined, 3).ef < 2.5, 'SM-2: «Difícil» debe bajar el factor de facilidad');

console.log('9. SHA-256');
const sctx = { window: {}, TextEncoder }; sctx.window = sctx; vm.createContext(sctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/sha256.js'), 'utf8'), sctx);
ok(sctx.GDC.sha256('abc') === 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad', 'SHA-256 de «abc» incorrecto');
ok(sctx.GDC.sha256('ñandú ✦') === require('crypto').createHash('sha256').update('ñandú ✦').digest('hex'), 'SHA-256 falla con texto UTF-8');

console.log('10. Acceso libre (sin administrador)');
const gateSrc = fs.readFileSync(path.join(ROOT, 'js/gate.js'), 'utf8');
const appSrc = fs.readFileSync(path.join(ROOT, 'js/app.js'), 'utf8');
ok(/Crear cuenta/.test(gateSrc) && /Iniciar sesión/.test(gateSrc), 'el acceso debe ofrecer «Crear cuenta» e «Iniciar sesión»');
ok(/no se envía a ninguna base de datos/.test(gateSrc), 'falta el aviso de que la información no va a ninguna base de datos');
ok(gateSrc.indexOf('gate__privacy') < gateSrc.indexOf('id="gateForm"'), 'el aviso de privacidad debe ir encima de los campos');
ok(!/#\/admin|GDC\.Admin|role: 'admin'/.test(gateSrc + appSrc + fs.readFileSync(path.join(ROOT, 'js/palette.js'), 'utf8')), 'quedan restos de la cuenta de administrador');
ok(!fs.existsSync(path.join(ROOT, 'js/admin.js')), 'js/admin.js debería haberse eliminado');

console.log('11. Contacto');
const views = fs.readFileSync(path.join(ROOT, 'js/views.js'), 'utf8');
const app = fs.readFileSync(path.join(ROOT, 'js/app.js'), 'utf8');
ok(/\['contacto', '#\/contacto', 'Contacto'\]/.test(app), 'el menú no tiene la opción Contacto');
ok(/href="https:\/\/linkedin\.com\/in\/wilmerjesuspaucar"[^>]*>LinkedIn<\/a>/.test(views), 'Contacto no enlaza a LinkedIn con el texto «LinkedIn»');

console.log(`\n${oks} comprobaciones correctas, ${fails} fallos.`);
process.exit(fails ? 1 : 0);
