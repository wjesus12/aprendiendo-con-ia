# Investigación — Gemini Desde Cero

**Fecha de verificación:** 2026-10-10.
**Regla:** cada dato lleva su fuente. Leyenda: ✅ = fuente oficial de Google · ⚠️ = solo fuentes de terceros o fuentes que se contradicen; en el portal se presenta con cautela («puede variar según tu plan o región»).

> Gemini cambia casi cada mes. En el portal, los datos volátiles (modelos, límites, precios y fechas) van en un solo archivo (`js/content/datos-volatiles.js`) con la fecha de verificación visible, para actualizarlos sin tocar los módulos.

---

## 1. Certificaciones objetivo

### 1.1 Gemini Certified Educator ✅
Fuentes: [guía oficial del examen (PDF)](https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf) · [FAQ de las certificaciones de Gemini](https://support.google.com/googleforeducation/answer/16561655?hl=en)

**Logística (FAQ oficial ✅):**
- Preguntas de opción múltiple. Según el FAQ, la mayoría son casos o escenarios ⚠️.
- **2 horas** desde que se pulsa TAKE EXAM. Si se agota el tiempo, el resultado es FAIL.
- Registro **gratuito** en [educertifications.google](https://educertifications.google). Hay que rendirlo dentro de los **14 días** siguientes al registro. Para el Learning Center ([edu.exceedlms.com](https://edu.exceedlms.com)) se usa **el mismo correo**.
- Validez: **3 años**. Sin niveles.
- Reintento: **8 días** después de reprobar; **14 días** si se reprobó por tiempo.
- Disponible en **español (Latinoamérica)** y en otros 12 idiomas.
- Evalúa las funciones **gratuitas** de Gemini. Puede haber preguntas sobre funciones pagas, pero **no puntúan**.
- Número de preguntas: **no es oficial**. Guías de terceros dicen 37, otras 35 ⚠️. El portal no afirmará una cifra; el simulacro usará 37 preguntas como aproximación declarada.
- Preparación oficial: los cursos «Getting Started with Google AI in K12», «Generative AI for Educators with Gemini» y «Teaching responsible use of AI».

**Dominios y objetivos (guía oficial ✅, resumidos y traducidos):**

| Dominio | Objetivos clave |
|---|---|
| **1. Understanding Generative AI & Gemini** | 1.1 Definir GenAI, LLM y prompting; formas en que Gemini transforma el trabajo docente; herramientas de Workspace for Education integradas con Gemini; casos de uso del Gemini app, Gems y NotebookLM · 1.2 Diferencia entre GenAI y otras IA; personalización y diferenciación; beneficios más allá del chatbot; **IA que aumenta frente a IA que reemplaza** al docente; política de privacidad de Workspace for Education · 1.3 Clasificar escenarios (planificación, calificación, feedback, comunicación, diferenciación) y **elegir la herramienta correcta** (NotebookLM, Gemini app, Gemini in Classroom) |
| **2. Implementing Gemini in Educational Practice** | 2.1 Navegar a Gemini o NotebookLM; prompt efectivo para un quiz, un esquema de clase o una rúbrica; subir fuentes para *grounding*; tareas administrativas (correo a familias, agenda); Gemini in Docs y Gmail (AI Pro for Education); Gemini in Forms para crear un quiz desde un Doc o Slide (AI Pro) · 2.2 Prompt efectivo frente a poco efectivo (**marco PARTS**); analizar una salida y refinarla; evaluar Audio Overviews y Mind Maps frente a métodos tradicionales · 2.3 Recurso creado de forma iterativa; imágenes en el Gemini app (la guía dice «Imagen 4»; hoy el app usa Nano Banana, ver §3.3); **diseñar un Gem** para una necesidad recurrente (bell-ringers, marcos de feedback); Slides → video con **Google Vids** (AI Pro) |
| **3. Responsible AI Use in Education** | 3.1 Sesgo, transparencia, privacidad, responsabilidad digital; **alucinaciones** con ejemplos educativos; enfoques ante el plagio; metacognición y pensamiento crítico · 3.2 Analizar una salida en busca de sesgos, errores o inadecuación para la audiencia; riesgos como la sobredependencia y su mitigación; dilemas éticos · 3.3 Evaluar si un contenido de IA es pedagógicamente adecuado; estrategias de alfabetización en IA; **cuándo usar IA y cuándo no** · 3.4 Pauta de aula o pregunta de discusión; plan contra el plagio y las inexactitudes |

**Pesos:** Google no los publica. Una guía de terceros reparte unas 18 preguntas sobre el Gemini app y unas 10 sobre alfabetización en IA ⚠️. El simulacro del portal repartirá las preguntas en partes iguales entre los 3 dominios y lo dirá claramente.

### 1.2 Certificación para estudiantes ✅ (con matices)
Fuentes: [FAQ oficial](https://support.google.com/googleforeducation/answer/16561655?hl=en) · [curso «Gemini certification for students»](https://edu-ges.exceedlms.com/student/path/1825256-gemini-certification-for-students)

Google tiene **dos** variantes:
- **K-12 Student** (13–17 años): primero hay que completar un curso fundacional de alrededor de 1 hora, nivel principiante, y luego pasar la evaluación. Las unidades del curso son: *Journey into AI · Learn how and when to use AI · Meet Gemini · Write effective prompts*. Cubre Gemini y NotebookLM, cómo funcionan y su uso responsable. **Al lanzarse estaba solo en inglés.**
- **Gemini Certified University Student:** opción múltiple y 2 h. Se prepara con la guía del examen, [grow.google/students](https://grow.google/students) y, como opción, Google AI Essentials. Según terceros, la guía incluye definir términos de GenAI y usar Gemini, NotebookLM y **Guided Learning** para estudiar ⚠️; no pude descargar la guía oficial.

**Decisión para el portal:** un simulacro «Student» con preguntas originales sobre los temas confirmados: alfabetización en IA, cuándo usarla, Meet Gemini, prompts, NotebookLM / Gemini Notebook, Guided Learning, integridad académica y verificación.

---

## 2. Cambios recientes que alteran el temario (¡importantes!)

### 2.1 NotebookLM ahora se llama **Gemini Notebook** ✅
Fuentes: [Google Blog, 16/07/2026](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/) · [Workspace Updates](https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html)
- Es el mismo producto independiente (notebooklm.google), con más de 30 millones de usuarios.
- Novedad: un **ordenador seguro en la nube** en cada notebook, que **escribe y ejecuta código** para analizar los datos de tus fuentes. Primero llega a Ultra y a Workspace business; Pro, en las semanas siguientes.
- Los notebooks se sincronizan entre el Gemini app y Gemini Notebook. Su llegada a AI Mode de Search está anunciada como «pronto».
- Desde enero de 2026 se puede **añadir un notebook como fuente en el Gemini app**, también en Education ([Workspace Updates](https://workspaceupdates.googleblog.com/2026/01/take-notebooks-further-notebooklm-gemini.html)).
- **Para el portal:** se enseñará como «**Gemini Notebook (antes NotebookLM)**», porque la guía del examen y muchos cursos aún dicen NotebookLM.

### 2.2 Los **Gems** pasan a **skills** ✅
Fuente: [Google Workspace Admin — About the transition from Gems to skills](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills) (actualizada el 30/09/2026)
- 13/10/2026: los skills empiezan a llegar al Gemini app para todos. Durante un tiempo **conviven** con los Gems.
- 17/11/2026: los Gems pasan a *Settings*, pero se pueden seguir creando, editando y usando.
- **Education:** no antes del **1/06/2027** se dejan de poder usar los Gems (también en Classroom y en los LMS con LTI). Los Gems que queden se convierten en **skills en borrador inactivos**, con su nombre, descripción, instrucciones y archivos de conocimiento.
- Business y enterprise: no antes del 1/03/2027.
- Los skills se invocan con **/** en el chat y Gemini puede aplicarlos solo cuando son relevantes ⚠️; la invocación con @ llegará después ⚠️. Límite de 100 skills activos ⚠️.
- Los Gems de Google Labs no migran ⚠️.
- **Para el portal:** el examen sigue pidiendo «diseñar un Gem», así que se enseñarán los **Gems** (instrucciones y conocimiento) y un apartado de transición a **skills**. Los nombres se mantienen en inglés.

### 2.3 El selector de modelos cambió ✅/⚠️
Fuentes: [Gemini release notes](https://gemini.google/release-notes/) ✅ · [9to5Google, 09/10/2026](https://9to5google.com/2026/10/09/gemini-auto-free-users/) ⚠️
- Las *release notes* ✅ registran **Gemini 3.5 Flash** (19/05/2026) y **Gemini 3.6 Flash** (21/07/2026). En la API, el último Flash estable es **gemini-3.8-flash** (02/09/2026) y el Pro es **Gemini 3.1 Pro** (19/02/2026) ([modelos de la API](https://ai.google.dev/gemini-api/docs/models) ✅, [Firebase](https://firebase.google.com/docs/ai-logic/models) ✅).
- En el app, los niveles son **Flash-Lite · Flash · Pro**. La opción «Thinking» dejó de ser un modelo y ahora es un ajuste (**Low / Medium / High**) ⚠️.
- **Plan gratuito:** desde octubre de 2026 solo aparece **«Auto»**, que envía cada prompt a Flash-Lite, Flash o Pro ⚠️.
- **Para el portal:** se enseña el **concepto** (modelos ligeros, equilibrados y de razonamiento; Auto; nivel de *thinking*), no números de versión. Las versiones van al archivo de datos volátiles.

---

## 3. Herramientas (estado actual)

### 3.1 Gemini app
- Web: gemini.google.com; apps para Android e iOS; app de escritorio para Windows (10/09/2026, Alt+Espacio) ✅ y app para macOS ✅ ([release notes](https://gemini.google/release-notes/)).
- **Gemini Live** está integrado en el chat (19/05/2026): se puede alternar entre voz y texto, y usar la cámara ✅.
- **Guided Learning:** Gemini se convierte en un tutor que hace preguntas en lugar de dar la respuesta. Hay un enlace para compartirlo en Classroom ✅ ([Google Blog](https://blog.google/outreach-initiatives/education/guided-learning/)).
- **Deep Research:** primero propone un **plan editable**, luego busca en la web durante varios minutos y entrega un informe con fuentes que se puede exportar a Docs desde Canvas ✅ ([Workspace Blog](https://workspace.google.com/blog/ai-and-machine-learning/meet-deep-research-your-new-ai-research-assistant)). Puede usar archivos y datos de Gmail o Drive si están conectados ⚠️.
- **Connected apps y Personal Intelligence:** Gmail, Calendar, Drive, Photos, YouTube, Search y Maps ✅ ([ayuda de Gemini](https://support.google.com/gemini/answer/16598406)). Desde el 23/09/2026 hay apps de terceros (Adobe, Airtable…) que se invocan con **@** ✅ ([Google Blog](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/)). Personal Intelligence está en beta y su disponibilidad varía.
- **Gemini Omni** (videos por conversación, avatares; para mayores de 18 y suscriptores) y **Gemini Spark** (agente; solo Ultra) ✅. El portal los menciona como avanzados, pero no entran en el examen.
- **Planes:** Free · Google AI Plus · Google AI Pro · Google AI Ultra ✅ ([gemini.google/subscriptions](https://gemini.google/subscriptions/)). Los precios cambian según el país, así que el portal no los fijará.

### 3.2 Canvas ✅
Fuente: [Ayuda de Gemini — Canvas](https://support.google.com/gemini/answer/16047321?hl=en)
- Espacio para crear y editar **docs, apps, slides y código**. Se abre en gemini.google.com → **+** (*Add files*/herramientas) → **Canvas**.
- A partir de un doc se pueden crear: **slides, visuales, apps, Audio Overview, quiz, infografía o página web**.
- Edición: **Select & ask**, **Suggest edits**, cambio rápido de longitud y tono, formato, **LaTeX** y versiones anteriores y siguientes. Todo se guarda automáticamente.
- Apps: **Code view**, consola de vista previa y opción de añadir funciones de IA (texto o imágenes; solo para mayores de 18).
- **Share & export:** enlace `g.co/gemini/share` (se abre solo en la web), **exportar a Google Docs**, slides a **Google Slides** o PDF, y Python a **Colab**.
- Restricciones para menores de 18: no pueden crear desde un doc ni copiar Canvas compartidos. Los enlaces de apps públicas permiten que cualquiera vea y edite los datos de la app.
- La teoría de la capacitación del usuario se integrará al recibir el PDF, sin mencionar la institución.

### 3.3 Nano Banana (imágenes) ✅/⚠️
- **Nano Banana 2** = Gemini 3.1 Flash Image, el modelo por defecto en el app. Se actualizó el 06/10/2026 con mejor calidad y mejor texto en las imágenes ✅ ([changelog de la API](https://ai.google.dev/gemini-api/docs/changelog)).
- **Nano Banana Pro** = Gemini 3 Pro Image, de mayor calidad. Tiene una cuota limitada o es solo para planes de pago ⚠️ ([Google Blog](https://blog.google/innovation-and-ai/products/nano-banana-pro/)).
- Sirve para crear y **editar** imágenes con lenguaje natural. Todas llevan **SynthID**, una marca de agua invisible, y en el plan gratuito también una marca visible ⚠️.
- Los límites gratuitos no son fijos ni se publican con estabilidad ⚠️.
- La guía del examen dice «Imagen 4». El portal explicará que es la familia de modelos de imagen de Google y que hoy el app usa Nano Banana.

### 3.4 Gems ✅/⚠️
- Se crean en Explore Gems → **New Gem**: nombre, **instrucciones** (se recomienda persona, tarea, contexto y formato), archivos de **conocimiento** opcionales, vista previa y **Save**. Hay un botón para que Gemini reescriba las instrucciones ⚠️ (guías universitarias).
- Se pueden compartir y adjuntar un notebook a un Gem ⚠️ ([XDA](https://www.xda-developers.com/pairing-notebooklm-with-gemini-gems/)).
- Ver la transición a skills en §2.2.

### 3.5 Gemini Notebook (antes NotebookLM) ✅/⚠️
- Responde **solo con tus fuentes** (*grounding*) y con **citas**. Las fuentes pueden ser PDF, Docs, Slides, webs, YouTube, audio, etc.
- **Studio:** Audio Overview (formatos *deep dive*, *brief*, *critique* y *debate*; idioma; modo interactivo), Video Overview, **Mind Map**, informes, **Flashcards**, **Quizzes**, Data Tables (exportables a Sheets), infografías y Slide Decks ⚠️ ([Google Blog: funciones para estudiantes](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-student-features/)).
- **Deep Research** dentro del notebook arma una lista de fuentes de la web ⚠️.
- Límites del plan gratuito (aprox.): 100 notebooks y 50 fuentes por notebook. Cada fuente admite hasta unas 500 000 palabras o 200 MB ⚠️.

### 3.6 Gemini en Google Workspace ✅/⚠️
- Panel lateral **«Ask Gemini»** en Docs, Sheets, Slides, Drive y Gmail. Se pueden mencionar archivos con **@** en Slides ✅ ([ayuda de Slides](https://support.google.com/docs/answer/14355071?hl=en)).
- **Docs:** «Help me create» genera borradores con formato a partir de Drive, Gmail, Chat y la web. Las ediciones sugeridas solo las ve el usuario hasta que las aprueba ✅ ([Workspace Updates, 04/2026](https://workspaceupdates.googleblog.com/2026/04/new-gemini-capabilities-in-google-docs-help-you-go-from-blank-page-to-brilliance.html)).
- **Sheets:** crea una hoja con formato a partir de un prompt; **Fill with Gemini** rellena celdas ⚠️ ([TechCrunch, 10/03/2026](https://techcrunch.com/2026/03/10/google-rolls-out-new-gemini-capabilities-to-docs-sheets-slides-and-drive/)).
- **Slides:** «Help me create a slide» genera diapositivas con el estilo del deck ✅.
- **Drive:** preguntas sobre los archivos ⚠️.
- **Forms:** crea un quiz desde un Doc o Slide (lo menciona la guía del examen; AI Pro for Education) ✅.
- **Vids:** convierte Slides en un video con guion y voz (lo menciona la guía del examen; AI Pro for Education) ✅.
- Hay funciones en beta o solo en inglés según el plan, así que el portal advertirá que la disponibilidad varía.

### 3.7 Gemini para Educación ✅
Fuentes: [Gemini for Education](https://edu.google.com/intl/ALL_us/ai/gemini-for-education/) · [Google Blog, BETT 2026](https://blog.google/products-and-platforms/products/education/bett-2026-gemini-classroom-updates/) · [Workspace Updates, 08/2026](https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html)
- **Gemini for Education** está **incluido sin costo** en las ediciones de Workspace for Education. Ofrece **protección de datos de nivel empresarial**: los datos **no los revisan personas ni se usan para entrenar modelos**. Se basa en **LearnLM**.
- **Google AI Pro for Education** es un complemento de pago que añade Gemini en Docs, Gmail, Forms, Vids, Meet y Drive. Solo para mayores de 18 ⚠️.
- **Gemini in Classroom:** gratis para docentes, con más de 30 herramientas (planes, quizzes, rúbricas, diferenciación…). Desde el **10/08/2026** también llega a **estudiantes de todas las edades** si el admin lo habilita ✅.
- Los menores de 18 tienen una experiencia con salvaguardas adicionales (*youth experience*) ⚠️.

---

## 4. Marco de prompting oficial: **PARTS** ✅/⚠️
Lo cita la guía del examen (2.2.1). Sus componentes, según materiales de Google for Education reproducidos por universidades ([CMU](https://www.cmu.edu/computing/services/ai/learn-connect/files/gemini-faculty.pdf), [Outwood](https://edtech.outwood.com/docs/ai/gemini/prompting/)):
- **P**ersona · **A**ct (o **A**im, según la fuente) · **R**ecipient · **T**heme · **S**tructure.
- No hace falta usar todos los componentes siempre.
- El portal lo enseñará como «Act / Aim» y advertirá que hay dos variantes.

---

## 5. Pendientes y decisiones

| # | Tema | Estado |
|---|---|---|
| 1 | PDF de la capacitación de Canvas del usuario | **Pendiente**: se necesita en la Fase 2 (módulos de Canvas). Sin mencionar la institución. |
| 2 | Guía oficial del examen University Student | No se pudo descargar (403). Se usarán los temas confirmados del FAQ y del curso K-12. |
| 3 | Número de preguntas del Educator | No es oficial: 37 como aproximación declarada. |
| 4 | Versiones de los modelos | Van a `datos-volatiles.js`, con fecha. |
| 5 | Precios | No se fijan, porque varían según el país. |
