# Gemini Desde Cero — reglas del proyecto

Portal estático para aprender Google Gemini desde cero, rumbo a las certificaciones **Gemini Certified Educator** y **Gemini Student Certification** (Google for Education). Autor: Wilmer Jesús Paucar Ayquipa.

## Cómo trabajar aquí
- Responde siempre **en español**.
- Antes de cambiar contenido sobre Gemini, verifica en fuentes oficiales (Google Blog, Workspace Updates, ayuda de Gemini, guía del examen). Registra fuentes y fecha en `docs/investigacion.md` y actualiza `js/content/datos-volatiles.js` (`verificado`). Nunca inventes funciones, fechas ni cifras; si algo no es oficial, dilo en el texto.
- Tras cualquier cambio: `node tests/todo.js` debe terminar con **0 fallos**.

## Técnica
- HTML, CSS y JS **vanilla**: sin compilación, sin frameworks, sin CDN. Fuentes locales en `fonts/`.
- Namespace global `GDC`, rutas por hash (`js/app.js`), una vista nueva por render (los listeners mueren con ella).
- **CSP estricta** (`netlify.toml`): nada de `<script>` en línea, `onclick=""` ni `eval`.
- Contenido separado del motor en `js/content/` y en **archivos pequeños** (un módulo por archivo, bancos de ~20 preguntas).
- Al añadir o quitar un archivo de `js/content/`, ejecuta `python3 tests/tools/sync_index.py N` (N = nueva versión) para regenerar las etiquetas de `index.html`.
- Al cambiar cualquier CSS/JS, sube su `?v=N` en `index.html`.
- `js/core.js` crea los contenedores (`GDC.MOD`, `GDC.GLOSSARY`, `GDC.LABS`, `GDC.RETOS`, `GDC.BANK`) que llenan los archivos de contenido.

## Contenido
- Todo el contenido existe en `{ es, en }` y se muestra en tres modos: ES, EN y EN+ES. Es la **misma pregunta traducida**: nunca bajes la dificultad por el idioma.
- **No traduzcas** los nombres de producto y función de Gemini: Gemini app, Canvas, Gems, skills, Deep Research, Guided Learning, Gemini Live, Nano Banana, Gemini Notebook (antes NotebookLM), Audio Overview, Mind Map, Studio, Flash, Pro, Auto…
- Preguntas: 4 opciones plausibles, una sola correcta, un «por qué» por opción. **Sesgo de longitud**: la correcta no puede superar en más de un 15 % a la incorrecta más larga (lo vigila el test). Para corregir, acorta la correcta o alarga los distractores (`tests/tools/fix.py` hace reemplazos exactos).
- Las preguntas reales del examen son confidenciales: todas las del portal son **originales**.
- No menciones la institución donde el autor dio su capacitación ni códigos de curso (lo vigila el test).

## Identidad visual
- Estética «cuaderno de laboratorio», temas claro y oscuro (tokens en `css/base.css`), respeta `prefers-reduced-motion`.
- Mascota **Chispa** (`js/mascot.js`): estrella de cuatro puntas con cara. Paleta pedida por el autor: azul profundo `#1f5fe0` → azul cielo `#3aa0f5` → violeta `#7a5cf0` → amarillo oscuro `#c9921a` (sin rosa). Es arrastrable y da tips de `js/content/tips.js` (bilingües, en mazo sin repetir).
- El menú tiene la opción **Contacto**, que muestra solo el hipervínculo «LinkedIn» a https://linkedin.com/in/wilmerjesuspaucar.

## Verificación
- Prueba en el navegador: escritorio y móvil (375 px, sin scroll horizontal), tema claro y oscuro, los tres idiomas y la consola sin errores.
- Borra las cuentas de prueba al terminar.
