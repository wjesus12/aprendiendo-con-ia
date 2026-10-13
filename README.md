# Aprendiendo con IA · Guía práctica de Gemini

Portal interactivo para aprender **Google Gemini** desde cero hasta nivel experto, rumbo a las certificaciones de Google for Education **Gemini Certified Educator**, **Gemini Certified Faculty** (educación superior) y **Gemini Student Certification**. Está pensado para quien nunca ha escrito un prompt.

Cubre el entorno Gemini completo: el Gemini app y sus modelos, **Canvas**, **Gems** (y su transición a skills), **Nano Banana**, **Deep Research**, **Guided Learning**, **Gemini Live**, **Gemini Notebook** (antes NotebookLM) y Gemini en **Drive, Docs, Slides, Sheets, Gmail, Forms y Vids**.

Todo el contenido está en tres modos de idioma. Es la misma pregunta traducida, con la misma dificultad:

| Modo | Para qué sirve |
|---|---|
| **ES** | Entender el concepto |
| **EN** | Practicar como en la interfaz real de Gemini |
| **EN+ES** | Puente: cada bloque en inglés con su traducción |

Los nombres de producto (Canvas, Gems, Deep Research…) se mantienen en inglés, como en la interfaz.

## Qué incluye

| Sección | Contenido |
|---|---|
| **Ruta desde cero** | 32 módulos en 8 partes: fundamentos de IA, prompting (marco PARTS y Propósito · Audiencia · Formato · Límites), herramientas creativas, Workspace, Gemini Notebook, Gemini en el aula, la certificación y **Educator y Faculty: Gemini en la universidad** (6 módulos: fundamentos en la academia, investigación, diseño de cursos, participación estudiantil, integridad y propiedad intelectual, y el examen Faculty con enlaces oficiales de registro). Cada módulo indica qué objetivos de la guía oficial cubre y trae explicación, tablas, prompts para copiar, trampas frecuentes, ideas clave, mini quiz y fuentes oficiales |
| **Glosario** | 155 términos bilingües con buscador y 9 categorías, cada uno enlazado a su módulo |
| **Labs** | 15 casos de «encuentra el fallo» en prompts, Gems, apps de Canvas, respuestas de la IA, políticas y fórmulas de Sheets |
| **Retos** | 8 retos de construcción: arrastra o toca piezas para armar prompts, Gems y flujos, con distractores y solución explicada |
| **Práctica** | 366 preguntas de escenario (240 originales, 80 de ellas de nivel universitario, y 126 de los mini quiz; filtro «Solo preguntas de nivel universitario (Faculty)»), filtrables por dominio, módulo y «solo las que fallé» |
| **Simulacros** | Educator y Faculty: 37 preguntas y 120 minutos (12/13/12 por dominio; Faculty prioriza preguntas universitarias). Student: 30 preguntas y 60 minutos. Faculty: 2 h oficiales; Google no publica el número de preguntas (se reportan ~37). Con cronómetro, marcado para revisar, mapa de preguntas y revisión final |
| **Flashcards** | Repaso espaciado (SM-2) sobre el glosario |
| **Progreso** | XP, niveles, racha, logros, aciertos por dominio, temas débiles y brecha de idioma |
| **Cuentas locales** | De uso libre: cada persona crea su propia cuenta con nombre y contraseña (SHA-256 con sal). La información **no se envía a ninguna base de datos**: se guarda solo en el navegador. Incluye respaldo en JSON, cambio de contraseña y «Eliminar mi cuenta» |

Incluye a **Chispa**, una mascota animada que se puede arrastrar por la pantalla y que da consejos.

Las preguntas son **originales**: las del examen real son confidenciales. En el examen Educator, Google no publica el número de preguntas ni el puntaje de aprobación, así que el simulacro usa 37 preguntas y un 80 % como aproximación declarada.

## Uso

Es un sitio estático, sin compilación ni dependencias. Basta con servir la carpeta:

```bash
python3 -m http.server 8870
```

Después abre `http://localhost:8870`. Al entrar puedes **crear una cuenta** o **iniciar sesión**; no hay administrador. Todo se guarda en el `localStorage` del navegador y nunca se envía a un servidor. Para respaldar o mover el progreso a otro equipo, usa **Ajustes → Descargar respaldo** y, en el otro equipo, crea tu cuenta e **importa** el respaldo.

Atajos: pulsa `/` o `Ctrl/⌘ + K` para abrir la barra de comandos.

## Pruebas

```bash
node tests/todo.js
```

Comprueban la sintaxis, que todo el contenido sea bilingüe, que cada pregunta tenga una sola respuesta correcta y no tenga sesgo de longitud, los enlaces entre módulos, que labs y retos se puedan resolver, el armado de los simulacros y el algoritmo SM-2.

## Estructura

```
index.html        punto de entrada (scripts con ?v=N para romper caché)
css/              base (tokens y temas), app, acceso, lecciones, práctica
js/               motor: núcleo, idiomas, cuentas, gamificación, mascota, vistas,
                  lecciones, glosario, labs, retos, práctica, simulacros, flashcards
js/content/       contenido: ruta, módulos, glosario, labs, retos, banco, tips
fonts/            Space Grotesk, Geist y JetBrains Mono (OFL)
docs/             investigación con fuentes y temario
tests/            pruebas en Node y utilidades
```

## Publicación

En Netlify: *build command* vacío y *publish directory* `.`. El archivo `netlify.toml` aplica una política de seguridad de contenido estricta.

---

Portal independiente, no afiliado a Google. «Gemini» y los nombres de producto pertenecen a Google LLC. Autor: [Wilmer Jesús Paucar Ayquipa](https://linkedin.com/in/wilmerjesuspaucar).
