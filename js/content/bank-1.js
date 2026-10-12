/* Banco 1 · Dominio 1: IA generativa, LLM, Gemini, modelos y planes. Preguntas originales.
   Opción correcta = quinto elemento true. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b101', 1, '01', ['Una colega dice que el corrector ortográfico de su procesador de texto «ya es IA generativa». ¿Qué le respondes?', 'A colleague says her word processor’s spell checker “is already generative AI”. What do you answer?'],
    ['Que corrige, pero no crea contenido nuevo', 'That it corrects but creates nothing new', 'Correcto: corregir es analizar y elegir; la IA generativa produce contenido.', 'Correct: correcting is analyzing and choosing; generative AI produces content.', true],
    ['Que tiene razón: toda IA es generativa', 'That she is right: all AI is generative', 'No: muchas IA solo clasifican o predicen.', 'No: many AIs only classify or predict.'],
    ['Que no es IA de ningún tipo', 'That it isn’t AI of any kind', 'Muchos correctores sí usan técnicas de IA; simplemente no son generativos.', 'Many checkers do use AI techniques; they just aren’t generative.'],
    ['Que solo es generativa si está en la nube', 'That it is only generative if it runs in the cloud', 'Dónde se ejecuta no define si una IA es generativa.', 'Where it runs doesn’t define whether AI is generative.']);

  Q('b102', 1, '02', ['¿Qué describe mejor un **Large Language Model (LLM)**?', 'What best describes a **Large Language Model (LLM)**?'],
    ['Una base de datos que guarda respuestas correctas', 'A database that stores correct answers', 'Un LLM no consulta respuestas guardadas; genera texto.', 'An LLM doesn’t look up stored answers; it generates text.'],
    ['Un modelo entrenado con mucho texto que genera lenguaje', 'A model trained on lots of text that generates language', 'Correcto: aprende patrones del lenguaje y los usa para generar.', 'Correct: it learns language patterns and uses them to generate.', true],
    ['Un buscador que copia párrafos de la web', 'A search engine that copies paragraphs from the web', 'Un buscador recupera páginas; un LLM produce texto nuevo.', 'A search engine retrieves pages; an LLM produces new text.'],
    ['Un programa que traduce solo al inglés', 'A program that only translates into English', 'Traducir es una de muchas tareas, en muchos idiomas.', 'Translating is one of many tasks, in many languages.']);

  Q('b103', 1, '02', ['Un estudiante pregunta por qué Gemini dio dos respuestas distintas a la misma pregunta. ¿Cuál es la mejor explicación?', 'A student asks why Gemini gave two different answers to the same question. What is the best explanation?'],
    ['El modelo genera texto con cierta variación en cada intento', 'The model generates text with some variation each time', 'Correcto: la variación es normal en la IA generativa.', 'Correct: variation is normal in generative AI.', true],
    ['Gemini se equivocó la primera vez y se corrigió solo', 'Gemini was wrong the first time and corrected itself', 'No necesariamente: ambas pueden ser válidas o ambas fallar.', 'Not necessarily: both may be valid or both may fail.'],
    ['Alguien de Google cambió la respuesta manualmente', 'Someone at Google changed the answer manually', 'Las respuestas no se editan a mano en tiempo real.', 'Answers aren’t edited by hand in real time.'],
    ['La segunda vez usó información de otro usuario', 'The second time it used another user’s information', 'No mezcla conversaciones de otros usuarios.', 'It doesn’t mix in other users’ conversations.']);

  Q('b104', 1, '02', ['¿Qué es un **prompt**, según la guía del examen?', 'What is a **prompt**, according to the exam guide?'],
    ['La configuración de privacidad del Gemini app', 'The Gemini app’s privacy configuration', 'La privacidad se configura en ajustes, no en el prompt.', 'Privacy is set in settings, not in the prompt.'],
    ['El texto que Gemini genera como respuesta', 'The text Gemini generates as an answer', 'Eso es la salida; el prompt es la entrada.', 'That is the output; the prompt is the input.'],
    ['La instrucción y el contexto que das a la IA', 'The instruction and context you give the AI', 'Correcto: guía lo que la IA va a generar.', 'Correct: it guides what the AI will generate.', true],
    ['El nombre técnico del modelo que usa Gemini', 'The technical name of the model Gemini uses', 'Los modelos tienen nombres como Flash o Pro, no «prompt».', 'Models have names like Flash or Pro, not “prompt”.']);

  Q('b105', 1, '01', ['Quieres que Gemini analice una foto de la pizarra y una lectura en PDF en el mismo chat. ¿Qué característica lo permite?', 'You want Gemini to analyze a photo of the board and a PDF reading in the same chat. Which feature allows it?'],
    ['Que es un modelo multilingüe', 'That it is a multilingual model', 'Multilingüe se refiere a idiomas, no a tipos de archivo.', 'Multilingual refers to languages, not file types.'],
    ['Que es un modelo multimodal', 'That it is a multimodal model', 'Correcto: combina texto, imagen, documentos y más.', 'Correct: it combines text, images, documents and more.', true],
    ['Que tiene una ventana de contexto pequeña', 'That it has a small context window', 'Una ventana pequeña limitaría, no permitiría, esa tarea.', 'A small window would limit, not enable, that task.'],
    ['Que funciona sin conexión a internet', 'That it works without an internet connection', 'El Gemini app necesita conexión; no es lo que permite mezclar formatos.', 'The Gemini app needs a connection; that isn’t what allows mixing formats.']);

  Q('b106', 1, '02', ['Tras dos horas en el mismo chat, Gemini olvida una regla que pusiste al inicio. ¿Qué haces?', 'After two hours in the same chat, Gemini forgets a rule you set at the start. What do you do?'],
    ['Resumir lo acordado y seguir en un chat nuevo', 'Summarize what was agreed and open a new chat', 'Correcto: alivias la ventana de contexto sin perder lo esencial.', 'Correct: you relieve the context window without losing the essentials.', true],
    ['Escribir la regla en mayúsculas para que la recuerde', 'Write the rule in capital letters so it remembers', 'Las mayúsculas no amplían la ventana de contexto.', 'Capital letters don’t enlarge the context window.'],
    ['Reiniciar el navegador y continuar en el mismo chat', 'Restart the browser and continue in the same chat', 'El chat sigue igual de largo; el problema persiste.', 'The chat is still just as long; the problem persists.'],
    ['Cambiar de cuenta de Google y volver a empezar', 'Switch Google accounts and start over', 'Es innecesario y pierdes tu historial.', 'It’s unnecessary and you lose your history.']);

  Q('b107', 1, '04', ['En tu cuenta gratuita el selector de modelo solo muestra **Auto**. ¿Qué implica?', 'On your free account the model picker only shows **Auto**. What does that mean?'],
    ['Que no puedes hacer tareas complejas', 'That you can’t do complex tasks', 'Auto puede enviar lo complejo a Flash o Pro.', 'Auto can send complex tasks to Flash or Pro.'],
    ['Que Gemini elige el modelo según tu prompt', 'That Gemini picks the model based on your prompt', 'Correcto: decide entre Flash-Lite, Flash y Pro.', 'Correct: it decides between Flash-Lite, Flash and Pro.', true],
    ['Que tu cuenta tiene un error de configuración', 'That your account has a configuration error', 'Es el comportamiento normal del plan gratuito.', 'It is the free plan’s normal behaviour.'],
    ['Que el thinking queda siempre en High', 'That thinking is always set to High', 'Auto no fija el thinking en High.', 'Auto doesn’t lock thinking to High.']);

  Q('b108', 1, '04', ['Necesitas un correo breve para recordar una reunión de mañana. ¿Qué configuración es la más sensata?', 'You need a short email reminding people of tomorrow’s meeting. Which setting is most sensible?'],
    ['Pro con thinking High, por si acaso', 'Pro with High thinking, just in case', 'Para una tarea simple solo añade espera.', 'For a simple task it only adds waiting.'],
    ['Un modelo rápido o Auto, con poco thinking', 'A fast model or Auto, with little thinking', 'Correcto: la tarea es simple y no requiere razonamiento profundo.', 'Correct: the task is simple and needs no deep reasoning.', true],
    ['Deep Research para buscar modelos de correos', 'Deep Research to find email templates', 'Es excesivo para un recordatorio.', 'It is overkill for a reminder.'],
    ['Deep Think, para que no haya errores', 'Deep Think, so there are no mistakes', 'Más razonamiento no elimina errores y es innecesario aquí.', 'More reasoning doesn’t eliminate errors and isn’t needed here.']);

  Q('b109', 1, '04', ['¿Qué tarea justifica mejor subir el nivel de **thinking**?', 'Which task best justifies raising the **thinking** level?'],
    ['Traducir una frase corta del español al inglés', 'Translating a short phrase from Spanish into English', 'Es simple: no requiere razonamiento paso a paso.', 'It is simple: it needs no step-by-step reasoning.'],
    ['Corregir la ortografía de un aviso para las familias', 'Fixing the spelling of a notice for families', 'Es mecánica; basta un modelo rápido.', 'It is mechanical; a fast model is enough.'],
    ['Analizar un caso de convivencia y proponer una mediación', 'Analyzing a coexistence case and proposing a mediation', 'Correcto: es delicado y requiere evaluar varias variables.', 'Correct: it is sensitive and requires weighing several variables.', true],
    ['Generar tres ideas de títulos para un afiche escolar', 'Generating three title ideas for a school poster', 'Es una lluvia de ideas rápida.', 'It is a quick brainstorm.']);

  Q('b110', 1, '04', ['Tu institución tiene Google Workspace for Education y nadie ha pagado complementos. ¿Qué incluye sin costo?', 'Your institution has Google Workspace for Education and no one has paid for add-ons. What is included at no cost?'],
    ['Gemini for Education con protección de datos', 'Gemini for Education with data protection', 'Correcto: viene incluido en las ediciones de Workspace for Education.', 'Correct: it is included in Workspace for Education editions.', true],
    ['Gemini dentro de Gmail, Docs, Forms y Vids', 'Gemini inside Gmail, Docs, Forms and Vids', 'Eso corresponde a Google AI Pro for Education.', 'That comes with Google AI Pro for Education.'],
    ['Acceso ilimitado a Veo y Gemini Omni', 'Unlimited access to Veo and Gemini Omni', 'Son funciones ligadas a planes de pago.', 'They are tied to paid plans.'],
    ['Nada: Gemini solo existe en planes pagos', 'Nothing: Gemini only exists on paid plans', 'Falso: hay funciones incluidas y un plan gratuito.', 'False: some features are included, and there is a free plan.']);

  Q('b111', 1, '16', ['¿Cuál de estas herramientas de Workspace for Education **no** se cita como integrada con Gemini?', 'Which of these Workspace for Education tools is **not** cited as integrated with Gemini?'],
    ['Google Docs y su panel lateral', 'Google Docs and its side panel', 'Docs integra Gemini (ayúdame a crear, ediciones sugeridas).', 'Docs integrates Gemini (help me create, suggested edits).'],
    ['Google Classroom y sus herramientas', 'Google Classroom and its tools', 'Gemini in Classroom ofrece más de 30 herramientas.', 'Gemini in Classroom offers over 30 tools.'],
    ['Google Forms y sus cuestionarios', 'Google Forms and its quizzes', 'Forms puede crear quizzes con Gemini.', 'Forms can create quizzes with Gemini.'],
    ['Una calculadora científica externa', 'An external scientific calculator', 'Correcto: no es una herramienta de Workspace.', 'Correct: it isn’t a Workspace tool.', true]);

  Q('b112', 1, '01', ['En el entorno Gemini, ¿qué analogía es correcta?', 'In the Gemini ecosystem, which analogy is correct?'],
    ['Canvas es el cerebro y Gemini donde construyes', 'Canvas is the brain and Gemini is where you build', 'Está invertido: Gemini es el cerebro; Canvas, donde construyes.', 'It’s reversed: Gemini is the brain; Canvas is where you build.'],
    ['Gemini Notebook es tu IA que solo usa tus fuentes', 'Gemini Notebook is your AI that only uses your sources', 'Correcto: responde con base en lo que cargas y cita.', 'Correct: it answers from what you upload and cites it.', true],
    ['Gems es el buscador web de Gemini', 'Gems is Gemini’s web search engine', 'Los Gems son asistentes a medida, no un buscador.', 'Gems are custom assistants, not a search engine.'],
    ['Nano Banana es el modo de voz de Gemini', 'Nano Banana is Gemini’s voice mode', 'Nano Banana es el modelo de imágenes; la voz es Gemini Live.', 'Nano Banana is the image model; voice is Gemini Live.']);

  Q('b113', 1, '01', ['¿Cuál es una forma en que Gemini puede **transformar** el trabajo docente, según la guía?', 'Which is a way Gemini can **transform** teachers’ work, according to the guide?'],
    ['Reemplazar la corrección y calificación del docente', 'Replacing the teacher’s marking and grading', 'Reemplazar decisiones de alto impacto no es el enfoque correcto.', 'Replacing high-impact decisions isn’t the right approach.'],
    ['Agilizar tareas que consumen tiempo y personalizar', 'Speeding up time-consuming tasks and personalizing', 'Correcto: libera tiempo y apoya la diferenciación.', 'Correct: it frees time and supports differentiation.', true],
    ['Eliminar la necesidad de planificar las clases', 'Removing the need to plan lessons', 'Ayuda a planificar, no elimina la planificación.', 'It helps plan; it doesn’t remove planning.'],
    ['Sustituir la comunicación con las familias', 'Replacing all communication with the families', 'Puede ayudar a redactar, pero la relación es del docente.', 'It can help draft, but the relationship is the teacher’s.']);

  Q('b114', 1, '02', ['¿Por qué decimos que Gemini «predice» en lugar de «saber»?', 'Why do we say Gemini “predicts” rather than “knows”?'],
    ['Porque genera el texto más probable', 'Because it generates the most likely text', 'Correcto: por eso puede sonar seguro y equivocarse.', 'Correct: that’s why it can sound sure and be wrong.', true],
    ['Porque consulta una enciclopedia cada vez', 'Because it checks an encyclopedia every time', 'No consulta una fuente única por defecto.', 'It doesn’t check a single source by default.'],
    ['Porque solo responde con estadísticas', 'Because it only answers with statistics', 'Responde con texto, no solo con números.', 'It answers with text, not only numbers.'],
    ['Porque nunca usa información actual', 'Because it never uses current information', 'Puede apoyarse en la Búsqueda para temas actuales.', 'It can rely on Search for current topics.']);

  Q('b115', 1, '03', ['¿Dónde puedes usar el Gemini app?', 'Where can you use the Gemini app?'],
    ['Solo en computadoras con Windows', 'Only on Windows computers', 'También en la web, móviles y macOS.', 'Also on the web, mobile and macOS.'],
    ['Solo dentro de Google Classroom', 'Only inside Google Classroom', 'Classroom es una integración, no el único lugar.', 'Classroom is one integration, not the only place.'],
    ['En la web, en el móvil y en escritorio', 'Web, mobile and desktop', 'Correcto: gemini.google.com, apps móviles y de escritorio.', 'Correct: gemini.google.com, mobile and desktop apps.', true],
    ['Solo en teléfonos Android de Google', 'Only on Google Android phones', 'También funciona en iPhone y en la web.', 'It also works on iPhone and the web.']);

  Q('b116', 1, '04', ['¿Qué afirmación sobre los nombres de versión de los modelos (por ejemplo, «3.6 Flash») es más útil para un docente?', 'Which statement about model version names (e.g. “3.6 Flash”) is most useful for a teacher?'],
    ['Conviene memorizarlos porque no cambian', 'They’re worth memorizing because they don’t change', 'Cambian cada pocos meses.', 'They change every few months.'],
    ['Importa más entender qué hace cada capa', 'Understanding what each tier does matters more', 'Correcto: rápido, equilibrado o de razonamiento avanzado.', 'Correct: fast, balanced or advanced reasoning.', true],
    ['Solo los modelos con número alto sirven', 'Only models with a high number are useful', 'Cada capa tiene su uso.', 'Each tier has its use.'],
    ['El número indica cuántos idiomas soporta', 'The number indicates how many languages it supports', 'El número indica la versión, no los idiomas.', 'The number indicates the version, not languages.']);

  Q('b117', 1, '01', ['¿Qué ejemplo usa IA **generativa** en el aula?', 'Which example uses **generative** AI in the classroom?'],
    ['Un sistema que agrupa estudiantes por nota', 'A system that groups students by grade', 'Clasificar es IA tradicional.', 'Classifying is traditional AI.'],
    ['Una alerta que predice inasistencias', 'An alert that predicts absences', 'Predecir es IA predictiva.', 'Predicting is predictive AI.'],
    ['Crear un cuento adaptado al nivel lector', 'Writing a story adapted to reading level', 'Correcto: produce un texto nuevo a partir de una instrucción.', 'Correct: it produces new text from an instruction.', true],
    ['Un filtro que bloquea páginas inapropiadas', 'A filter that blocks inappropriate pages', 'Filtrar es clasificar, no generar.', 'Filtering is classifying, not generating.']);

  Q('b118', 1, '04', ['El examen Gemini Certified Educator incluye una pregunta sobre una función de pago. ¿Qué ocurre?', 'The Gemini Certified Educator exam includes a question about a paid feature. What happens?'],
    ['Puede aparecer, pero no puntúa', 'It may appear, but it isn’t scored', 'Correcto: el examen se centra en funciones gratuitas.', 'Correct: the exam focuses on free features.', true],
    ['Vale el doble porque es más difícil', 'It is worth double because it’s harder', 'No tiene peso extra.', 'It carries no extra weight.'],
    ['Anula el examen si se responde mal', 'It voids the exam if answered wrongly', 'No existe esa regla.', 'No such rule exists.'],
    ['Solo aparece si pagaste el registro', 'It only appears if you paid the registration', 'El registro del Educator es gratuito.', 'Educator registration is free.']);

  Q('b119', 1, '02', ['¿Qué ocurre con la información posterior a la fecha de corte del modelo?', 'What happens with information after the model’s knowledge cutoff?'],
    ['El modelo la conoce igual de bien', 'The model knows it just as well', 'No la aprendió en su entrenamiento.', 'It didn’t learn it in training.'],
    ['Puede apoyarse en la Búsqueda o en tus fuentes', 'Gemini can rely on Search or your sources', 'Correcto: y aun así conviene verificar.', 'Correct: and it’s still worth verifying.', true],
    ['Gemini se niega a hablar de hechos recientes', 'Gemini refuses to discuss recent events', 'No necesariamente: puede buscar información.', 'Not necessarily: it can search for information.'],
    ['La inventa siempre de forma deliberada', 'It always makes it up deliberately', 'No es deliberado; el riesgo es la alucinación.', 'It isn’t deliberate; the risk is hallucination.']);

  Q('b120', 1, '03', ['Ves una función en un tutorial, pero no aparece en tu cuenta institucional. ¿Cuál es la explicación más probable?', 'You see a feature in a tutorial, but it doesn’t appear on your school account. What is the most likely explanation?'],
    ['La función fue eliminada en todo el mundo', 'The feature was removed worldwide', 'Es poco probable; suele ser un tema de configuración.', 'Unlikely; it is usually a configuration matter.'],
    ['El administrador o tu plan no la habilitan', 'Your administrator or plan doesn’t enable it', 'Correcto: la disponibilidad depende del plan y del administrador.', 'Correct: availability depends on the plan and the administrator.', true],
    ['Tu navegador está desactualizado', 'Your browser is out of date', 'Puede influir, pero no es la causa más común.', 'It may matter, but it isn’t the most common cause.'],
    ['Necesitas crear un Gem para activarla', 'You need to create a Gem to activate it', 'Los Gems no activan otras funciones.', 'Gems don’t activate other features.']);
})();
