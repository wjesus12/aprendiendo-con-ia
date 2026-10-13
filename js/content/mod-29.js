/* Módulo 29 · Diseñar cursos universitarios con Gemini (Faculty) */
GDC.MOD['29'] = {
  min: 24,
  intro: {
    es: 'Con PARTS, Canvas, Gems y el Studio ya sabes producir materiales. En la universidad el reto es diseñar cursos completos: sílabos, seminarios, evaluaciones formativas y sumativas y rutas diferenciadas para grupos grandes y diversos. Aquí verás cómo hacerlo con Gemini sin perder el criterio disciplinar.',
    en: 'With PARTS, Canvas, Gems and Studio you already know how to produce materials. At university the challenge is designing whole courses: syllabi, seminars, formative and summative assessments and differentiated paths for large, diverse groups. Here you will see how to do it with Gemini without losing disciplinary judgment.'
  },
  objetivos: [
    { es: 'Clasificar los puntos de integración de Gemini en la docencia universitaria.', en: 'Classify Gemini’s integration points in university teaching.' },
    { es: 'Construir prompts para contenido académico de una disciplina concreta.', en: 'Build prompts for academic content in a specific discipline.' },
    { es: 'Diseñar un Gem que automatice una tarea docente frecuente.', en: 'Design a Gem that automates a frequent teaching task.' },
    { es: 'Crear rúbricas y evaluaciones formativas o sumativas a partir del contenido del curso (F 2.1.2, 2.1.6).', en: 'Create rubrics and formative or summative assessments from course content (F 2.1.2, 2.1.6).' },
    { es: 'Diseñar un recurso breve de forma iterativa, ronda a ronda (F 2.3.1).', en: 'Design a short asset iteratively, round by round (F 2.3.1).' }
  ],
  secciones: [
    {
      h: { es: 'Dónde encaja Gemini en tu curso', en: 'Where Gemini fits in your course' },
      b: [
        { p: { es: 'La guía Faculty propone clasificar los puntos de integración de Gemini en la docencia universitaria (objetivo 1.3.1):', en: 'The Faculty guide proposes classifying Gemini’s integration points in university teaching (objective 1.3.1):' } },
        { table: {
          head: [{ es: 'Punto de integración', en: 'Integration point' }, { es: 'Ejemplo universitario', en: 'University example' }],
          rows: [
            [{ es: 'Andamiar el desarrollo curricular', en: 'Scaffolding curriculum development' }, { es: 'Sílabo de 16 semanas alineado a competencias del perfil de egreso', en: '16-week syllabus aligned to graduate-profile competencies' }],
            [{ es: 'Aumentar el diseño de evaluaciones', en: 'Augmenting assessment design' }, { es: 'Rúbrica de un proyecto final y preguntas de un examen parcial', en: 'Final-project rubric and midterm exam questions' }],
            [{ es: 'Automatizar feedback personalizado', en: 'Automating personalized feedback' }, { es: 'Un Gem que comenta borradores con tu rúbrica', en: 'A Gem that comments on drafts using your rubric' }],
            [{ es: 'Facilitar comunicación compleja', en: 'Facilitating complex communication' }, { es: 'Explicar un cambio de evaluación a 120 estudiantes', en: 'Explaining an assessment change to 120 students' }],
            [{ es: 'Escalar la diferenciación', en: 'Scaling differentiation' }, { es: 'Rutas de refuerzo y de profundización para el mismo tema', en: 'Remedial and extension paths for the same topic' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Sílabos y seminarios con contexto disciplinar', en: 'Syllabi and seminars with disciplinary context' },
      b: [
        { p: { es: 'En educación superior, el contexto de la disciplina es la pieza que más cambia el resultado: nivel del curso, prerrequisitos, competencias, créditos y modalidad.', en: 'In higher education, the discipline’s context is the piece that most changes the result: course level, prerequisites, competencies, credits and format.' } },
        { compare: {
          bad: { t: { es: 'Hazme un sílabo de estadística.', en: 'Make me a statistics syllabus.' }, why: { es: 'No indica nivel, carrera, duración, competencias ni evaluación.', en: 'It states no level, programme, length, competencies or assessment.' } },
          good: { t: { es: 'Actúa como diseñador curricular universitario. Crea un sílabo de 16 semanas para «Estadística aplicada» (4 créditos, segundo año de Ingeniería, prerrequisito: Cálculo I). Incluye resultados de aprendizaje alineados a las competencias adjuntas, contenidos por semana, evaluación (40 % proyecto, 30 % parciales, 30 % prácticas) y bibliografía marcada con [VERIFICAR].', en: 'Act as a university curriculum designer. Create a 16-week syllabus for “Applied Statistics” (4 credits, second-year Engineering, prerequisite: Calculus I). Include learning outcomes aligned to the attached competencies, weekly content, assessment (40% project, 30% midterms, 30% practicals) and a bibliography marked [VERIFY].' },
                  why: { es: 'PARTS con contexto disciplinar completo y límites: el borrador sale casi listo para revisar.', en: 'PARTS with full disciplinary context and limits: the draft comes out nearly ready to review.' } }
        } },
        { prompt: { es: 'Diseña la estructura de un seminario de 90 minutos sobre [tema] para estudiantes de [año y carrera]: lectura previa, pregunta detonante, dinámica en grupos con roles, plenaria y cierre con una evaluación formativa breve. Indica tiempos y el producto de cada momento.', en: 'Design the structure of a 90-minute seminar on [topic] for [year and programme] students: pre-reading, opening question, group activity with roles, plenary and closing with a short formative assessment. State timings and each stage’s output.' },
          label: { es: '✦ Estructura de seminario', en: '✦ Seminar structure' } }
      ]
    },
    {
      h: { es: 'Evaluación y rutas diferenciadas', en: 'Assessment and differentiated paths' },
      b: [
        { list: [
          { es: '**Evaluación formativa:** pide en Canvas un quiz interactivo a partir de tus apuntes de clase.', en: '**Formative assessment:** ask Canvas for an interactive quiz from your lecture notes.' },
          { es: '**Evaluación sumativa:** con Gemini en Forms (plan de pago) puedes generarla a partir de un Doc o Slide del curso; revisa cada pregunta.', en: '**Summative assessment:** with Gemini in Forms (paid plan) you can generate it from a course Doc or Slide; review every question.' },
          { es: '**Rutas diferenciadas:** pide una ruta de refuerzo (con ejemplos resueltos) y una de profundización (con lecturas avanzadas) para el mismo resultado de aprendizaje.', en: '**Differentiated paths:** ask for a remedial path (with worked examples) and an extension path (with advanced readings) for the same learning outcome.' },
          { es: '**Recursos de estudio:** Video Overviews, guías de estudio y Mind Maps en Gemini Notebook para acercar textos complejos.', en: '**Study resources:** Video Overviews, study guides and Mind Maps in Gemini Notebook to bring complex texts closer.' }
        ] },
        { note: { es: 'La guía Faculty incluye «diseñar un recurso breve personalizado (una herramienta de evaluación formativa o un conjunto de rutas de aprendizaje diferenciadas) interactuando de forma iterativa con Gemini» (2.3.1).', en: 'The Faculty guide includes “design a short, customized instructional asset (a formative assessment tool, a set of differentiated learning paths) by interacting iteratively with Gemini” (2.3.1).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Rúbricas y evaluaciones con criterio disciplinar (2.1.2, 2.1.6)', en: 'Rubrics and assessments with disciplinary judgment (2.1.2, 2.1.6)' },
      b: [
        { p: { es: 'El objetivo 2.1.2 pide construir un prompt eficaz para tres productos académicos: **evaluación formativa**, **estructura de seminario** y **rúbrica de evaluación**, siempre para una disciplina y un contexto curricular concretos.', en: 'Objective 2.1.2 asks you to build an effective prompt for three academic products: a **formative assessment**, a **seminar structure** and an **evaluation rubric**, always for a specific discipline and curricular context.' } },
        { prompt: { es: 'Actúa como especialista en evaluación universitaria de [disciplina]. Crea una rúbrica analítica para el informe final de [curso] (tercer año). Criterios: planteamiento del problema, uso de evidencia, análisis, conclusiones y escritura académica. Cuatro niveles de logro con descriptores observables, sin adjetivos vagos como «bueno» o «adecuado». Peso de cada criterio en porcentaje. Formato: tabla.', en: 'Act as a university assessment specialist in [discipline]. Create an analytic rubric for the final report of [course] (third year). Criteria: problem statement, use of evidence, analysis, conclusions and academic writing. Four achievement levels with observable descriptors, no vague adjectives like “good” or “adequate”. Weight of each criterion as a percentage. Format: table.' },
          label: { es: '✦ Rúbrica analítica', en: '✦ Analytic rubric' } },
        { table: {
          head: [{ es: 'Tipo de evaluación', en: 'Assessment type' }, { es: 'Para qué sirve', en: 'What it’s for' }, { es: 'Con Gemini', en: 'With Gemini' }],
          rows: [
            [{ es: 'Formativa', en: 'Formative' }, { es: 'Dar feedback durante el aprendizaje; no pesa (o pesa poco) en la nota', en: 'Giving feedback during learning; doesn’t count (or counts little) toward the grade' }, { es: 'Quiz interactivo en Canvas, preguntas de salida, Flashcards del Studio', en: 'Interactive quiz in Canvas, exit questions, Studio Flashcards' }],
            [{ es: 'Sumativa', en: 'Summative' }, { es: 'Certificar lo aprendido al final de una unidad', en: 'Certifying learning at the end of a unit' }, { es: 'Gemini en Forms (plan de pago) desde un Doc o Slide; revisión pregunta por pregunta', en: 'Gemini in Forms (paid plan) from a Doc or Slide; question-by-question review' }]
          ]
        } },
        { note: { es: 'Revisa cada pregunta generada: que tenga una sola respuesta correcta, que mida el resultado de aprendizaje y que no dependa de datos que la IA pudo inventar. Tú firmas el examen.', en: 'Review each generated question: it should have a single correct answer, measure the learning outcome and not depend on data the AI may have invented. You sign the exam.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Diseño iterativo: del borrador al recurso final (2.3.1)', en: 'Iterative design: from draft to final asset (2.3.1)' },
      b: [
        { p: { es: 'La guía no pide un recurso perfecto en un solo prompt: pide diseñarlo **interactuando de forma iterativa** con Gemini. Así se ve un ciclo típico para una herramienta de evaluación formativa:', en: 'The guide doesn’t ask for a perfect asset in a single prompt: it asks you to design it **by interacting iteratively** with Gemini. This is a typical cycle for a formative assessment tool:' } },
        { flow: [
          { es: 'Ronda 1: borrador con contexto (PARTS)', en: 'Round 1: draft with context (PARTS)' },
          { es: 'Ronda 2: ajustar nivel y errores frecuentes', en: 'Round 2: adjust level and common errors' },
          { es: 'Ronda 3: feedback para cada opción', en: 'Round 3: feedback for each option' },
          { es: 'Ronda 4: formato final (Canvas, Forms)', en: 'Round 4: final format (Canvas, Forms)' },
          { es: 'Tú pruebas y validas', en: 'You test and validate' }
        ] },
        { list: [
          { es: '**Ronda 2:** «Las preguntas 3 y 5 son demasiado fáciles para tercer año; súbelas al nivel de análisis y usa como distractores los errores más comunes de mis estudiantes: [errores]».', en: '**Round 2:** “Questions 3 and 5 are too easy for third year; raise them to the analysis level and use my students’ most common errors as distractors: [errors]”.' },
          { es: '**Ronda 3:** «Para cada opción incorrecta, escribe una retroalimentación de una línea que explique el error sin dar la respuesta».', en: '**Round 3:** “For each wrong option, write one line of feedback explaining the error without giving away the answer”.' },
          { es: '**Ronda 4:** «Conviértelo en un quiz interactivo en Canvas que muestre la retroalimentación al responder».', en: '**Round 4:** “Turn it into an interactive quiz in Canvas that shows the feedback on answering”.' }
        ] },
        { note: { es: 'En el examen, la mejor respuesta suele ser **dar feedback específico y refinar**, no empezar de cero ni aceptar el primer borrador.', en: 'In the exam, the best answer is usually **giving specific feedback and refining**, not starting over or accepting the first draft.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Gemini in Classroom en un curso universitario', en: 'Gemini in Classroom in a university course' },
      b: [
        { p: { es: 'Si tu universidad usa Google Classroom, **Gemini in Classroom** (sin costo en Workspace for Education) reúne herramientas para planificar y crear materiales dentro del propio curso: ideas de clase, preguntas, rúbricas, textos nivelados y más (módulo 22). La guía Faculty lo incluye entre los lugares desde donde debes saber iniciar una tarea (2.1.1).', en: 'If your university uses Google Classroom, **Gemini in Classroom** (no cost in Workspace for Education) brings together tools to plan and create materials inside the course itself: lesson ideas, questions, rubrics, levelled texts and more (module 22). The Faculty guide lists it among the places where you should know how to start a task (2.1.1).' } },
        { list: [
          { es: '**Classroom:** materiales y tareas del curso, con la rúbrica asociada.', en: '**Classroom:** course materials and assignments, with the attached rubric.' },
          { es: '**Gemini app:** diseño libre, iteración y Canvas.', en: '**Gemini app:** open design, iteration and Canvas.' },
          { es: '**Gemini Notebook:** recursos que deben citar tus lecturas del curso.', en: '**Gemini Notebook:** resources that must cite your course readings.' }
        ] }
      ]
    },
    {
      h: { es: 'Un Gem para tus tareas frecuentes', en: 'A Gem for your frequent tasks' },
      b: [
        { p: { es: 'La guía pide diseñar un Gem que automatice una tarea pedagógica frecuente, como **andamiar revisiones de literatura** de tus estudiantes o **redactar criterios de evaluación formativa** (2.3.3). Recuerda que los Gems conviven con los skills hasta su transición (módulo 14).', en: 'The guide asks you to design a Gem that automates a frequent teaching task, such as **scaffolding your students’ literature reviews** or **drafting formative assessment criteria** (2.3.3). Remember that Gems coexist with skills until the transition (module 14).' } },
        { prompt: { es: 'Eres un tutor de escritura académica para estudiantes de pregrado.\nTarea: cuando un estudiante pegue el borrador de su revisión de literatura, devuelve: 1) qué tan clara es su pregunta, 2) si compara fuentes o solo las resume, 3) dos preguntas para profundizar y 4) un siguiente paso concreto.\nLímites: no reescribas el texto por el estudiante; no pongas notas; si menciona una fuente, recuérdale verificarla.',
                    en: 'You are an academic writing tutor for undergraduates.\nTask: when a student pastes their literature review draft, return: 1) how clear their question is, 2) whether they compare sources or only summarize them, 3) two questions to go deeper and 4) one concrete next step.\nLimits: don’t rewrite the text for the student; don’t give grades; if they mention a source, remind them to verify it.' },
          label: { es: '✦ Instrucciones de un Gem «Tutor de revisión de literatura»', en: '✦ Instructions for a “Literature review tutor” Gem' } },
        { h: { es: 'Diseñar y desplegar el Gem', en: 'Designing and deploying the Gem' } },
        { steps: [
          { es: 'En la Gemini app, abre **Gems** y elige crear uno nuevo.', en: 'In the Gemini app, open **Gems** and choose to create a new one.' },
          { es: 'Escribe las instrucciones con rol, tarea, formato y **límites** (qué no debe hacer).', en: 'Write the instructions with role, task, format and **limits** (what it must not do).' },
          { es: 'Añade archivos de conocimiento: tu rúbrica, la guía del curso o un ejemplo modelo.', en: 'Add knowledge files: your rubric, the course guide or a model example.' },
          { es: 'Prueba el Gem con 2 o 3 borradores reales (anonimizados) y ajusta las instrucciones.', en: 'Test the Gem with 2 or 3 real (anonymized) drafts and adjust the instructions.' },
          { es: '**Despliega:** compártelo con tus estudiantes o colegas y explica para qué sirve y para qué no.', en: '**Deploy:** share it with your students or colleagues and explain what it is for and what it isn’t.' }
        ] },
        { prompt: { es: 'Eres un asistente para redactar criterios de evaluación formativa en [disciplina].\nTarea: cuando el docente indique un resultado de aprendizaje, propone 3 criterios observables, una pregunta de verificación para cada uno y un ejemplo de evidencia aceptable.\nLímites: no asignes notas; usa el vocabulario de la rúbrica adjunta; si el resultado es ambiguo, pide aclaración antes de responder.', en: 'You are an assistant for drafting formative assessment criteria in [discipline].\nTask: when the instructor gives a learning outcome, propose 3 observable criteria, a check question for each and an example of acceptable evidence.\nLimits: don’t assign grades; use the attached rubric’s vocabulary; if the outcome is ambiguous, ask for clarification before answering.' },
          label: { es: '✦ Gem «Criterios de evaluación formativa»', en: '✦ “Formative assessment criteria” Gem' } },
        { note: { es: 'Crea el sílabo de un curso que dictes con el prompt de esta sección. Luego pide una ruta de refuerzo para la semana más difícil y revisa que el resultado de aprendizaje no cambie.', en: 'Create the syllabus of a course you teach with this section’s prompt. Then ask for a remedial path for the hardest week and check the learning outcome doesn’t change.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Pedir un sílabo sin nivel, créditos ni competencias, y recibir algo genérico.', en: 'Asking for a syllabus without level, credits or competencies, and getting something generic.' },
    { es: 'Publicar una evaluación sumativa generada sin revisar cada pregunta y su clave.', en: 'Publishing a generated summative assessment without reviewing every question and its key.' },
    { es: 'Configurar un Gem que reescriba los trabajos de los estudiantes en lugar de guiarlos.', en: 'Setting up a Gem that rewrites students’ work instead of guiding them.' },
    { es: 'Aceptar el primer borrador o, al contrario, empezar de cero en vez de iterar con feedback concreto.', en: 'Accepting the first draft or, conversely, starting over instead of iterating with concrete feedback.' },
    { es: 'Rúbricas con adjetivos vagos («bueno», «adecuado») en vez de descriptores observables.', en: 'Rubrics with vague adjectives (“good”, “adequate”) instead of observable descriptors.' }
  ],
  ideas: [
    { es: 'Cinco puntos de integración: currículo, evaluación, feedback, comunicación y diferenciación.', en: 'Five integration points: curriculum, assessment, feedback, communication and differentiation.' },
    { es: 'En la universidad, el contexto disciplinar es la pieza clave del prompt.', en: 'At university, disciplinary context is the key piece of the prompt.' },
    { es: 'Un Gem bien diseñado guía al estudiante; no hace el trabajo por él.', en: 'A well-designed Gem guides the student; it doesn’t do the work for them.' },
    { es: 'Diseño iterativo: borrador → feedback concreto → formato final → tú validas.', en: 'Iterative design: draft → concrete feedback → final format → you validate.' },
    { es: 'Formativa para aprender (Canvas, Studio); sumativa para certificar (Forms, plan de pago) con revisión total.', en: 'Formative to learn (Canvas, Studio); summative to certify (Forms, paid plan) with full review.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '«Un Gem que comenta los borradores de 80 estudiantes con tu rúbrica». ¿Qué punto de integración es?', en: '“A Gem that comments on 80 students’ drafts using your rubric.” Which integration point is it?' },
      o: [
        { t: { es: 'Facilitar comunicación compleja', en: 'Facilitating complex communication' }, why: { es: 'No es un comunicado; son comentarios sobre trabajos.', en: 'It isn’t a notice; it’s comments on work.' } },
        { ok: true, t: { es: 'Automatizar feedback personalizado', en: 'Automating personalized feedback' }, why: { es: 'Correcto: retroalimentación a escala con tu criterio.', en: 'Correct: feedback at scale with your criteria.' } },
        { t: { es: 'Andamiar el desarrollo curricular', en: 'Scaffolding curriculum development' }, why: { es: 'No diseña el currículo del curso.', en: 'It doesn’t design the course curriculum.' } },
        { t: { es: 'Escalar la diferenciación entre grupos', en: 'Scaling differentiation across groups' }, why: { es: 'No crea rutas distintas para el mismo objetivo.', en: 'It doesn’t create different paths for the same goal.' } }
      ] },
    { d: 2,
      q: { es: '¿Qué agrega más calidad a un prompt para un sílabo universitario?', en: 'What adds the most quality to a prompt for a university syllabus?' },
      o: [
        { t: { es: 'Pedir que sea lo más largo posible', en: 'Asking for it to be as long as possible' }, why: { es: 'La extensión no lo alinea a tu programa.', en: 'Length doesn’t align it to your programme.' } },
        { t: { es: 'Usar siempre el modelo más potente', en: 'Always using the most powerful model' }, why: { es: 'Sin contexto, el modelo no lo resuelve.', en: 'Without context, the model can’t solve it.' } },
        { ok: true, t: { es: 'Nivel, créditos y competencias', en: 'Level, credits and competencies' }, why: { es: 'Correcto: el contexto disciplinar define el resultado.', en: 'Correct: disciplinary context defines the result.' } },
        { t: { es: 'Pedirle que sea muy creativo', en: 'Asking it to be very creative' }, why: { es: 'La creatividad no reemplaza el contexto académico.', en: 'Creativity doesn’t replace academic context.' } }
      ] },
    { d: 2,
      q: { es: 'Quieres un Gem que ayude a tus estudiantes con sus revisiones de literatura. ¿Qué instrucción es esencial?', en: 'You want a Gem to help your students with their literature reviews. Which instruction is essential?' },
      o: [
        { t: { es: '«Reescribe el texto para que quede perfecto»', en: '“Rewrite the text so it’s perfect”' }, why: { es: 'Haría el trabajo por el estudiante.', en: 'It would do the student’s work.' } },
        { ok: true, t: { es: '«Guía con preguntas; no reescribas»', en: '“Guide with questions; don’t rewrite”' }, why: { es: 'Correcto: andamia sin sustituir la autoría.', en: 'Correct: it scaffolds without replacing authorship.' } },
        { t: { es: '«Pon una nota a cada borrador recibido»', en: '“Give a grade to every draft received”' }, why: { es: 'Calificar es una decisión docente.', en: 'Grading is a teacher’s decision.' } },
        { t: { es: '«Agrega fuentes para que sea más completo»', en: '“Add sources so it’s more complete”' }, why: { es: 'Puede añadir fuentes inventadas.', en: 'It may add invented sources.' } }
      ] },
    { d: 2,
      q: { es: '¿Qué prompt producirá la rúbrica más útil para un curso universitario?', en: 'Which prompt will produce the most useful rubric for a university course?' },
      o: [
        { t: { es: '«Hazme una rúbrica buena para un informe»', en: '“Make me a good rubric for a report”' }, why: { es: 'No da disciplina, nivel ni criterios.', en: 'It gives no discipline, level or criteria.' } },
        { ok: true, t: { es: 'Curso, nivel, criterios, niveles y pesos', en: 'Course, level, criteria, levels and weights' }, why: { es: 'Correcto: contexto completo y formato claro.', en: 'Correct: full context and a clear format.' } },
        { t: { es: '«Rúbrica con muchos adjetivos de calidad»', en: '“A rubric with many quality adjectives”' }, why: { es: 'Los adjetivos vagos no son observables.', en: 'Vague adjectives aren’t observable.' } },
        { t: { es: '«Rúbrica igual a la del semestre pasado»', en: '“A rubric like last semester’s”' }, why: { es: 'Gemini no conoce tu rúbrica anterior si no la cargas.', en: 'Gemini doesn’t know your old rubric unless you upload it.' } }
      ] },
    { d: 2,
      q: { es: 'El primer borrador de un quiz formativo es demasiado fácil para tu grupo. ¿Qué haces?', en: 'The first draft of a formative quiz is too easy for your group. What do you do?' },
      o: [
        { t: { es: 'Lo publicas y ajustas el próximo semestre', en: 'Publish it now and adjust it next semester' }, why: { es: 'Desperdicia la evaluación de este grupo.', en: 'It wastes this group’s assessment.' } },
        { t: { es: 'Borras el chat y empiezas de cero', en: 'Delete the chat and start over' }, why: { es: 'Pierdes el contexto ya construido.', en: 'You lose the context already built.' } },
        { t: { es: 'Pides «hazlo mejor» sin más detalle', en: 'Ask “make it better” with no detail' }, why: { es: 'Sin criterio, el cambio es impredecible.', en: 'Without criteria, the change is unpredictable.' } },
        { ok: true, t: { es: 'Das feedback concreto: nivel y errores típicos', en: 'Give concrete feedback on level and errors' }, why: { es: 'Correcto: es el diseño iterativo (2.3.1).', en: 'Correct: that is iterative design (2.3.1).' } }
      ] },
    { d: 2,
      q: { es: 'Quieres generar un examen sumativo desde las diapositivas del curso con Gemini en Forms. ¿Qué debes saber?', en: 'You want to generate a summative exam from course slides with Gemini in Forms. What should you know?' },
      o: [
        { ok: true, t: { es: 'Es de pago y debes revisar cada pregunta', en: 'It’s paid and you must review every question' }, why: { es: 'Correcto: objetivo 2.1.6, marcado como PAID.', en: 'Correct: objective 2.1.6, marked PAID.' } },
        { t: { es: 'Es gratis y ya viene validado por Google', en: 'It’s free and already validated by Google' }, why: { es: 'Requiere plan y nadie valida tu examen por ti.', en: 'It needs a plan and no one validates your exam for you.' } },
        { t: { es: 'Solo funciona con archivos en formato PDF', en: 'It only works with PDF files' }, why: { es: 'La guía menciona un Doc o una Slide.', en: 'The guide mentions a Doc or a Slide.' } },
        { t: { es: 'Califica y publica las notas en automático', en: 'It grades and publishes grades automatically' }, why: { es: 'Las notas siguen siendo tu decisión.', en: 'Grades remain your decision.' } }
      ] },
    { d: 2,
      q: { es: '¿Qué paso completa el **despliegue** de un Gem para tus estudiantes?', en: 'Which step completes the **deployment** of a Gem for your students?' },
      o: [
        { t: { es: 'Escribirle instrucciones muy largas', en: 'Writing very long instructions' }, why: { es: 'La extensión no lo pone en manos de nadie.', en: 'Length doesn’t put it in anyone’s hands.' } },
        { t: { es: 'Guardarlo en tu lista de Gems personales', en: 'Saving it in your personal Gems list' }, why: { es: 'Solo tú lo usarías.', en: 'Only you would use it.' } },
        { ok: true, t: { es: 'Compartirlo y explicar su uso y límites', en: 'Sharing it and explaining its use and limits' }, why: { es: 'Correcto: diseñar y desplegar (2.3.3).', en: 'Correct: design and deploy (2.3.3).' } },
        { t: { es: 'Pedirle que se presente en cada clase', en: 'Asking it to introduce itself each class' }, why: { es: 'No es parte del despliegue.', en: 'It isn’t part of deployment.' } }
      ] },
    { d: 1,
      q: { es: '«Explicar a 120 estudiantes un cambio en el sistema de evaluación con un mensaje claro y empático». ¿Qué punto de integración es?', en: '“Explaining an assessment change to 120 students with a clear, empathetic message.” Which integration point is it?' },
      o: [
        { t: { es: 'Escalar la diferenciación', en: 'Scaling differentiation' }, why: { es: 'No crea rutas distintas.', en: 'It doesn’t create different paths.' } },
        { t: { es: 'Aumentar el diseño de evaluaciones', en: 'Augmenting assessment design' }, why: { es: 'No diseña la evaluación; la comunica.', en: 'It doesn’t design the assessment; it communicates it.' } },
        { t: { es: 'Automatizar feedback personalizado', en: 'Automating personalized feedback' }, why: { es: 'No comenta el trabajo de cada estudiante.', en: 'It doesn’t comment on each student’s work.' } },
        { ok: true, t: { es: 'Facilitar comunicación compleja', en: 'Facilitating complex communication' }, why: { es: 'Correcto: un mensaje delicado para muchos.', en: 'Correct: a delicate message for many.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (1.3.1, 2.1.2, 2.3.1, 2.3.3)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google — Ayuda de Gemini: Canvas en Gemini Apps', url: 'https://support.google.com/gemini/answer/16047321?hl=es' }
  ]
};
