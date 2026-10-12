/* Banco 2 · Dominio 1: usos educativos, elegir herramienta, aumentar vs reemplazar, privacidad. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b201', 1, '22', ['Una docente necesita resumir las 15 lecturas de su curso y que cada idea indique de qué texto sale. ¿Qué herramienta elige?', 'A teacher needs to summarize her course’s 15 readings, with each idea showing which text it comes from. Which tool does she choose?'],
    ['Gemini Notebook', 'Gemini Notebook', 'Correcto: responde con sus fuentes y cita el fragmento.', 'Correct: it answers from her sources and cites the passage.', true],
    ['Nano Banana con un collage', 'Nano Banana with a collage', 'Crea imágenes, no resúmenes con citas.', 'It creates images, not cited summaries.'],
    ['Gemini Live por voz', 'Gemini Live by voice', 'Conversar por voz no organiza un corpus con citas.', 'Talking by voice doesn’t organize a cited corpus.'],
    ['Deep Research en la web', 'Deep Research on the web', 'Busca en la web; ella ya tiene sus lecturas.', 'It searches the web; she already has her readings.']);

  Q('b202', 1, '22', ['Un docente quiere ideas creativas para iniciar un proyecto interdisciplinario. ¿Qué es lo más adecuado?', 'A teacher wants creative ideas to launch an interdisciplinary project. What is most suitable?'],
    ['Gemini Notebook sin ninguna fuente cargada', 'Gemini Notebook with no sources', 'Notebook brilla con fuentes; para idear sin ellas, mejor el chat.', 'Notebook shines with sources; to ideate without them, the chat is better.'],
    ['Una conversación en el Gemini app', 'A conversation in the Gemini app', 'Correcto: la lluvia de ideas abierta encaja con el chat.', 'Correct: open brainstorming fits the chat.', true],
    ['Un quiz de salida en Forms', 'An exit quiz in Forms', 'Un quiz evalúa; no genera ideas de proyecto.', 'A quiz assesses; it doesn’t generate project ideas.'],
    ['Un Audio Overview de un PDF', 'An Audio Overview of a PDF', 'Resume fuentes existentes; no es para idear.', 'It summarizes existing sources; it isn’t for ideating.']);

  Q('b203', 1, '14', ['¿Cuál es un uso educativo típico de un **Gem**?', 'What is a typical educational use of a **Gem**?'],
    ['Investigar en la web durante varios minutos', 'Researching the web for several minutes', 'Eso es Deep Research.', 'That is Deep Research.'],
    ['Generar cada semana actividades con tu formato', 'Weekly activities in your own format', 'Correcto: guarda instrucciones para una necesidad recurrente.', 'Correct: it stores instructions for a recurring need.', true],
    ['Publicar un sitio web con un enlace', 'Publishing a website with a link', 'Publicar sitios no es función de un Gem.', 'Publishing sites isn’t a Gem’s function.'],
    ['Convertir fuentes en un pódcast', 'Turning sources into a podcast', 'Eso es un Audio Overview.', 'That is an Audio Overview.']);

  Q('b204', 1, '24', ['¿Qué situación muestra a la IA **reemplazando** (no aumentando) al docente?', 'Which situation shows AI **replacing** (not augmenting) the teacher?'],
    ['La IA propone tres versiones y el docente elige', 'AI proposes three versions and the teacher picks', 'El docente decide: es aumento.', 'The teacher decides: that’s augmenting.'],
    ['La IA publica notas finales sin revisión', 'AI publishes final grades with no review', 'Correcto: una decisión de alto impacto queda sin criterio humano.', 'Correct: a high-impact decision is left without human judgment.', true],
    ['La IA redacta un borrador que el docente edita', 'AI drafts something the teacher edits', 'El docente mantiene el control: es aumento.', 'The teacher keeps control: that’s augmenting.'],
    ['La IA sugiere preguntas y el docente adapta', 'AI suggests questions and the teacher adapts', 'Es apoyo, no reemplazo.', 'It is support, not replacement.']);

  Q('b205', 1, '25', ['Una madre pregunta si lo que su hijo escribe en Gemini con su cuenta escolar entrena la IA de Google. ¿Qué le respondes?', 'A mother asks whether what her son types into Gemini with his school account trains Google’s AI. What do you tell her?'],
    ['Sí, todo se usa para mejorar los modelos', 'Yes, everything is used to improve the models', 'En Workspace for Education no se usa para entrenar modelos.', 'In Workspace for Education it isn’t used to train models.'],
    ['Solo si el estudiante es mayor de edad', 'Only if the student is an adult', 'La protección no depende de la edad en este punto.', 'The protection doesn’t depend on age on this point.'],
    ['No: con la cuenta escolar no entrena modelos', 'No: with the school account it trains no models', 'Correcto: protección de nivel empresarial, sin revisión humana.', 'Correct: enterprise-grade protection, no human review.', true],
    ['Depende de si usa el celular o la computadora', 'It depends on whether he uses a phone or computer', 'El dispositivo no cambia la política de la cuenta.', 'The device doesn’t change the account policy.']);

  Q('b206', 1, '23', ['¿Cómo puede Gemini apoyar la **diferenciación**?', 'How can Gemini support **differentiation**?'],
    ['Dando a todos exactamente el mismo material', 'Giving everyone exactly the same material', 'Eso es lo contrario de diferenciar.', 'That is the opposite of differentiating.'],
    ['Creando versiones por nivel con el mismo objetivo', 'Level-based versions, same goal', 'Correcto: distintas rutas hacia el mismo aprendizaje.', 'Correct: different routes to the same learning.', true],
    ['Decidiendo qué estudiante es menos capaz', 'Deciding which student is less capable', 'Etiqueta y delega una decisión docente.', 'It labels and delegates a teacher decision.'],
    ['Bajando el objetivo para algunos estudiantes', 'Lowering the goal for some students', 'Diferenciar no es bajar expectativas.', 'Differentiating isn’t lowering expectations.']);

  Q('b207', 1, '24', ['¿Qué beneficio de Gemini va **más allá del chatbot**?', 'Which Gemini benefit goes **beyond the chatbot**?'],
    ['Responder preguntas en una ventana de chat', 'Answering questions in a chat window', 'Eso es justamente la función de chatbot.', 'That is exactly the chatbot function.'],
    ['Convertir un documento en quiz, slides o audio', 'Turning a document into a quiz, slides or audio', 'Correcto: transforma información en otros formatos.', 'Correct: it transforms information into other formats.', true],
    ['Saludar al iniciar cada conversación', 'Greeting you at the start of each conversation', 'No es un beneficio educativo relevante.', 'It isn’t a relevant educational benefit.'],
    ['Mostrar el historial de chats anteriores', 'Showing the history of earlier chats', 'Es una función del app, no un beneficio pedagógico.', 'It’s an app feature, not a teaching benefit.']);

  Q('b208', 1, '22', ['Clasifica: «Redactar un aviso a las familias sobre la reunión del viernes». ¿Qué capacidad de Gemini es?', 'Classify: “Drafting a notice to families about Friday’s meeting.” Which Gemini capability is it?'],
    ['Diferenciación', 'Differentiation', 'No se adapta un material a niveles.', 'No material is adapted to levels.'],
    ['Comunicación', 'Communication', 'Correcto: es comunicación con la comunidad educativa.', 'Correct: it is communication with the school community.', true],
    ['Calificación', 'Grading', 'No se evalúa a nadie.', 'No one is assessed.'],
    ['Planificación curricular', 'Curriculum planning', 'No organiza contenidos ni secuencias.', 'It doesn’t organize content or sequences.']);

  Q('b209', 1, '22', ['Clasifica: «Escribir comentarios formativos sobre los borradores de los ensayos». ¿Qué capacidad es?', 'Classify: “Writing formative comments on essay drafts.” Which capability is it?'],
    ['Comunicación institucional', 'Institutional communication', 'Los comentarios van al estudiante sobre su trabajo.', 'The comments go to the student about their work.'],
    ['Planificación de la unidad', 'Unit planning', 'No se organiza la secuencia de clases.', 'The lesson sequence isn’t being organized.'],
    ['Retroalimentación (feedback)', 'Feedback', 'Correcto: orienta la mejora del trabajo.', 'Correct: it guides improvement of the work.', true],
    ['Diferenciación por intereses', 'Differentiation by interest', 'No se crean versiones por interés.', 'No interest-based versions are created.']);

  Q('b210', 1, '20', ['¿Qué uso educativo es más propio de **Gemini Notebook**?', 'Which educational use belongs most to **Gemini Notebook**?'],
    ['Crear la portada ilustrada de un libro', 'Creating a book’s illustrated cover', 'Eso es Nano Banana.', 'That is Nano Banana.'],
    ['Estudiar un conjunto de lecturas con citas', 'Studying readings with citations', 'Correcto: responde con tus fuentes y cita.', 'Correct: it answers from your sources and cites.', true],
    ['Conversar en inglés para practicar', 'Chatting in English to practise', 'Eso encaja con Gemini Live.', 'That fits Gemini Live.'],
    ['Programar un juego de repaso en HTML', 'Coding a review game in HTML', 'Eso encaja con Canvas.', 'That fits Canvas.']);

  Q('b211', 1, '24', ['¿Cuál de estas afirmaciones resume mejor el rol docente con IA?', 'Which statement best sums up the teacher’s role with AI?'],
    ['La IA decide y el docente ejecuta', 'AI decides and the teacher executes', 'Invierte los roles: las decisiones pedagógicas son del docente.', 'It reverses the roles: teaching decisions are the teacher’s.'],
    ['El docente define el propósito y revisa', 'The teacher sets the purpose and reviews', 'Correcto: la IA libera tiempo; el criterio sigue siendo humano.', 'Correct: AI frees time; judgment stays human.', true],
    ['La IA solo sirve para tareas de oficina', 'AI is only useful for office tasks', 'También apoya la enseñanza y el aprendizaje.', 'It also supports teaching and learning.'],
    ['El docente debe evitar revisar para ahorrar tiempo', 'The teacher should skip reviewing to save time', 'La revisión es imprescindible.', 'Review is essential.']);

  Q('b212', 1, '16', ['¿Qué significa escribir **@Drive** en un chat del Gemini app?', 'What does typing **@Drive** in a Gemini app chat mean?'],
    ['Compartir el chat con tu Drive público', 'Sharing the chat to your public Drive', 'No publica nada; consulta tus archivos.', 'It doesn’t publish anything; it looks up your files.'],
    ['Traer tu Drive conectado a la conversación', 'Bringing your Drive into the chat', 'Correcto: @ invoca una app conectada.', 'Correct: @ invokes a connected app.', true],
    ['Guardar la respuesta como archivo de Drive', 'Saving the answer as a Drive file', 'Para guardar se usa exportar, no @.', 'Saving uses export, not @.'],
    ['Crear una carpeta nueva en tu unidad', 'Creating a new folder in your drive', '@ no crea carpetas.', '@ doesn’t create folders.']);

  Q('b213', 1, '10', ['¿Qué distingue a **Guided Learning** de un chat normal?', 'What distinguishes **Guided Learning** from a normal chat?'],
    ['Responde más rápido y con textos más cortos', 'It answers faster and with shorter texts', 'La velocidad no es lo que lo distingue.', 'Speed isn’t what sets it apart.'],
    ['Guía con preguntas en lugar de resolver', 'It guides with questions instead of solving', 'Correcto: busca que el estudiante construya la comprensión.', 'Correct: it aims for the student to build understanding.', true],
    ['Solo funciona con matemáticas', 'It only works with maths', 'Sirve para muchos temas.', 'It works for many subjects.'],
    ['No permite adjuntar archivos', 'It doesn’t allow attaching files', 'Puedes adjuntar tus materiales.', 'You can attach your materials.']);

  Q('b214', 1, '09', ['¿Qué tarea encaja mejor con **Deep Research**?', 'Which task best fits **Deep Research**?'],
    ['Reformular una consigna en lenguaje simple', 'Rewording an instruction in simple language', 'Es una tarea breve para un chat normal.', 'It is a short task for a normal chat.'],
    ['Revisar estudios recientes sobre una estrategia', 'Reviewing recent studies on a strategy', 'Correcto: requiere buscar y sintetizar muchas fuentes.', 'Correct: it requires searching and synthesizing many sources.', true],
    ['Crear un Gem de retroalimentación', 'Creating a feedback Gem', 'Los Gems se crean en su propia sección.', 'Gems are created in their own section.'],
    ['Editar una foto para la portada', 'Editing a photo for the cover', 'Eso es Nano Banana.', 'That is Nano Banana.']);

  Q('b215', 1, '13', ['¿Qué es **Nano Banana**?', 'What is **Nano Banana**?'],
    ['Un modo de estudio con preguntas', 'A study mode with questions', 'Eso es Guided Learning.', 'That is Guided Learning.'],
    ['El modelo de imágenes de Gemini', 'Gemini’s image model', 'Correcto: crea y edita imágenes con lenguaje natural.', 'Correct: it creates and edits images in natural language.', true],
    ['Una app de juegos educativos', 'An educational games app', 'No es una app de juegos.', 'It isn’t a games app.'],
    ['El plan gratuito de Gemini', 'Gemini’s free plan', 'Los planes son Free, Plus, Pro y Ultra.', 'The plans are Free, Plus, Pro and Ultra.']);

  Q('b216', 1, '20', ['NotebookLM y Gemini Notebook… ¿qué relación tienen?', 'NotebookLM and Gemini Notebook… how are they related?'],
    ['Son la misma herramienta con otro nombre', 'Same tool under a new name', 'Correcto: fue renombrada en julio de 2026.', 'Correct: it was renamed in July 2026.', true],
    ['Notebook es la versión de pago de NotebookLM', 'Notebook is NotebookLM’s paid version', 'No es una versión de pago distinta.', 'It isn’t a separate paid version.'],
    ['NotebookLM es solo para estudiantes', 'NotebookLM is only for students', 'Lo usan docentes, estudiantes y profesionales.', 'Teachers, students and professionals use it.'],
    ['Son dos productos sin relación', 'They are two unrelated products', 'Son el mismo producto.', 'They are the same product.']);

  Q('b217', 1, '04', ['¿Qué ofrece el complemento **Google AI Pro for Education**?', 'What does the **Google AI Pro for Education** add-on offer?'],
    ['El acceso básico a Gemini, que sin él no existe', 'Basic Gemini access, which doesn’t exist without it', 'El acceso base ya está incluido en Workspace for Education.', 'Base access is already included in Workspace for Education.'],
    ['Gemini dentro de Gmail, Docs, Forms y Vids', 'Gemini inside Gmail, Docs, Forms and Vids', 'Correcto: y más acceso premium.', 'Correct: plus more premium access.', true],
    ['Una certificación automática para docentes', 'An automatic certification for teachers', 'La certificación requiere aprobar el examen.', 'Certification requires passing the exam.'],
    ['Cursos presenciales de Google', 'In-person Google courses', 'No incluye cursos presenciales.', 'It doesn’t include in-person courses.']);

  Q('b218', 1, '22', ['Clasifica: «Rediseñar el plan anual alineado al currículo nacional». ¿Qué capacidad es?', 'Classify: “Redesigning the yearly plan aligned to the national curriculum.” Which capability is it?'],
    ['Comunicación con familias', 'Communication with families', 'No es un mensaje a terceros.', 'It isn’t a message to others.'],
    ['Feedback sobre trabajos', 'Feedback on student work', 'No comenta el trabajo de un estudiante.', 'It doesn’t comment on a student’s work.'],
    ['Planificación curricular', 'Curriculum planning', 'Correcto: organiza objetivos y secuencias del año.', 'Correct: it organizes the year’s goals and sequences.', true],
    ['Calificación de desempeño', 'Performance grading', 'No evalúa desempeños.', 'It doesn’t assess performance.']);

  Q('b219', 1, '16', ['¿Por qué una función de Gemini puede verse en una cuenta personal pero no en la institucional?', 'Why might a Gemini feature appear on a personal account but not on a school one?'],
    ['Porque las cuentas escolares son más antiguas', 'Because school accounts are older', 'La antigüedad no determina las funciones.', 'Age doesn’t determine features.'],
    ['Porque el admin controla qué se habilita', 'Because the admin controls what is enabled', 'Correcto: en cuentas institucionales decide el administrador.', 'Correct: in school accounts the administrator decides.', true],
    ['Porque Gemini no funciona en escuelas', 'Because Gemini doesn’t work in schools', 'Gemini for Education existe para escuelas.', 'Gemini for Education exists for schools.'],
    ['Porque hay que pagar por cada estudiante', 'Because you must pay per student', 'Hay funciones incluidas sin costo.', 'Some features are included at no cost.']);

  Q('b220', 1, '01', ['Un docente cree que «si la IA lo dice, ya está verificado». ¿Qué concepto debe recordar?', 'A teacher believes “if the AI says it, it’s verified.” Which concept should he remember?'],
    ['Que la IA nunca usa fuentes', 'That AI never uses sources', 'Puede usar fuentes; aun así puede equivocarse.', 'It can use sources; even so it can be wrong.'],
    ['Que genera lo probable, no lo verdadero', 'That it generates the likely, not the true', 'Correcto: por eso existe la revisión humana.', 'Correct: that’s why human review exists.', true],
    ['Que solo se equivoca en inglés', 'That it only makes mistakes in English', 'Puede equivocarse en cualquier idioma.', 'It can be wrong in any language.'],
    ['Que el modelo Pro nunca se equivoca en nada', 'That the Pro model doesn’t make mistakes', 'Ningún modelo es infalible.', 'No model is infallible.']);

  Q('b221', 1, '14', ['¿Qué está pasando con los Gems desde octubre de 2026?', 'What is happening to Gems since October 2026?'],
    ['Desaparecieron de inmediato para todos', 'They disappeared immediately for everyone', 'Conviven con los skills durante una transición.', 'They coexist with skills during a transition.'],
    ['Los skills empiezan a reemplazarlos', 'Skills are starting to replace them', 'Correcto: en Education, los Gems siguen al menos hasta junio de 2027.', 'Correct: in Education, Gems remain until at least June 2027.', true],
    ['Se convierten en notebooks', 'They are turning into notebooks', 'Migran a skills, no a notebooks.', 'They migrate to skills, not notebooks.'],
    ['Pasan a ser de pago exclusivamente', 'They become paid-only', 'No es un cambio de precio, sino de función.', 'It isn’t a pricing change but a feature change.']);

  Q('b222', 1, '22', ['¿Qué ofrece **Gemini in Classroom** a los docentes con Workspace for Education?', 'What does **Gemini in Classroom** offer teachers with Workspace for Education?'],
    ['Solo un corrector ortográfico', 'Only a spell checker', 'Ofrece muchas más herramientas.', 'It offers many more tools.'],
    ['Más de 30 herramientas sin costo', 'Over 30 tools at no cost', 'Correcto: planes, quizzes, rúbricas, diferenciación y más.', 'Correct: plans, quizzes, rubrics, differentiation and more.', true],
    ['Un examen de certificación', 'A certification exam', 'La certificación es aparte.', 'Certification is separate.'],
    ['Calificación automática obligatoria', 'Mandatory automatic grading', 'No impone calificación automática.', 'It doesn’t impose automatic grading.']);

  Q('b223', 1, '23', ['Un docente quiere que estudiantes que aprenden español entiendan una lectura. ¿Qué apoyo de Gemini es pertinente?', 'A teacher wants students learning Spanish to understand a reading. Which Gemini support is appropriate?'],
    ['Traducir todo y eliminar el texto original', 'Translating everything and deleting the original', 'Pierde el objetivo de aprender la lengua.', 'It loses the goal of learning the language.'],
    ['Añadir un glosario bilingüe y apoyos visuales', 'Adding a bilingual glossary and visual aids', 'Correcto: apoya sin cambiar el objetivo.', 'Correct: it supports without changing the goal.', true],
    ['Darles una lectura de otro tema más fácil', 'Giving them an easier reading on another topic', 'Cambia el contenido y el objetivo.', 'It changes the content and the goal.'],
    ['Pedirles que no participen en la actividad', 'Asking them not to take part', 'Excluye en lugar de incluir.', 'It excludes instead of including.']);

  Q('b224', 1, '03', ['Quieres usar Gemini con materiales del curso. ¿Qué cuenta es preferible?', 'You want to use Gemini with course materials. Which account is preferable?'],
    ['Una personal creada solo para eso', 'A personal one created just for that', 'No añade las protecciones institucionales.', 'It doesn’t add institutional protections.'],
    ['La institucional de Workspace for Education', 'The Workspace for Education school account', 'Correcto: ofrece protección de datos de nivel empresarial.', 'Correct: it offers enterprise-grade data protection.', true],
    ['La de un colega para no gastar tu cuota', 'A colleague’s, so you don’t use your quota', 'Compartir cuentas es mala práctica de seguridad.', 'Sharing accounts is poor security practice.'],
    ['Cualquiera: todas tratan los datos igual', 'Any: they all treat data the same', 'No: la cuenta educativa tiene compromisos propios.', 'No: the education account has its own commitments.']);

  Q('b225', 1, '12', ['Necesitas un juego de repaso interactivo para la próxima clase. ¿Qué herramienta encaja?', 'You need an interactive review game for next class. Which tool fits?'],
    ['Canvas, para crear una app', 'Canvas, to build an app', 'Correcto: Canvas crea apps y quizzes interactivos.', 'Correct: Canvas builds apps and interactive quizzes.', true],
    ['Deep Research sobre juegos', 'Deep Research about games', 'Investiga, pero no construye el juego.', 'It researches but doesn’t build the game.'],
    ['Nano Banana con una imagen', 'Nano Banana with an image', 'Una imagen no es interactiva.', 'An image isn’t interactive.'],
    ['Gemini Live por voz', 'Gemini Live by voice', 'Es conversación, no un juego reutilizable.', 'It’s conversation, not a reusable game.']);
})();
