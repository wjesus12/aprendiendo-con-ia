/* Módulo 22 · Planificar y evaluar con Gemini in Classroom */
GDC.MOD['22'] = {
  min: 14,
  intro: {
    es: '**Gemini in Classroom** reúne herramientas de IA dentro de Google Classroom para planificar, crear evaluaciones y diferenciar, usando el contexto de tus clases. Está disponible sin costo para docentes con cuentas de Workspace for Education. Aquí verás qué puedes hacer y cómo elegir la herramienta adecuada para cada escenario.',
    en: '**Gemini in Classroom** brings AI tools into Google Classroom to plan, create assessments and differentiate, using your classes’ context. It is available at no cost to teachers with Workspace for Education accounts. Here you will see what you can do and how to pick the right tool for each scenario.'
  },
  objetivos: [
    { es: 'Identificar las herramientas de Gemini in Classroom para planificar y evaluar.', en: 'Identify Gemini in Classroom tools for planning and assessment.' },
    { es: 'Clasificar escenarios docentes según la capacidad de Gemini más útil.', en: 'Classify teaching scenarios by the most useful Gemini capability.' },
    { es: 'Elegir entre Gemini app, Gemini in Classroom y Gemini Notebook según la tarea.', en: 'Choose between the Gemini app, Gemini in Classroom and Gemini Notebook according to the task.' }
  ],
  secciones: [
    {
      h: { es: 'Qué ofrece Gemini in Classroom', en: 'What Gemini in Classroom offers' },
      b: [
        { p: { es: 'Google puso a disposición de todos los docentes con cuentas de Workspace for Education más de **30 herramientas** de IA dentro de Classroom, sin costo. Entre ellas:', en: 'Google made over **30 AI tools** inside Classroom available at no cost to all teachers with Workspace for Education accounts. Among them:' } },
        { list: [
          { es: 'Planes de clase y secuencias de unidad.', en: 'Lesson plans and unit sequences.' },
          { es: 'Quizzes, rúbricas y preguntas de comprensión lectora.', en: 'Quizzes, rubrics and reading-comprehension questions.' },
          { es: 'Listas de vocabulario y actividades de repaso.', en: 'Vocabulary lists and review activities.' },
          { es: 'Tareas diferenciadas para distintos niveles.', en: 'Differentiated assignments for different levels.' },
          { es: 'Desde 2026, Gemini usa el contexto de tus clases para redactar tareas o resumir el progreso de los estudiantes.', en: 'Since 2026, Gemini uses your classes’ context to draft assignments or summarize student progress.' }
        ] },
        { p: { es: 'Desde el 10 de agosto de 2026, Gemini in Classroom también puede estar disponible para **estudiantes de todas las edades** si el administrador lo habilita, con prompts iniciales adaptados al contexto. Además, los notebooks guiados por el docente están llegando a plataformas LMS como Schoology y Canvas (de Instructure).',
               en: 'Since 10 August 2026, Gemini in Classroom can also be available to **students of all ages** if the administrator enables it, with context-aware starter prompts. Teacher-led notebooks are also reaching LMS platforms such as Schoology and Canvas (by Instructure).' } },
        { note: { es: 'Ojo con el nombre: **Canvas de Instructure** es una plataforma LMS; **Canvas de Gemini** es el espacio de creación del Gemini app (módulos 11 y 12). No son lo mismo.', en: 'Mind the name: **Canvas by Instructure** is an LMS platform; **Gemini Canvas** is the creation space in the Gemini app (modules 11 and 12). They are not the same.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Clasificar escenarios', en: 'Classifying scenarios' },
      b: [
        { p: { es: 'El objetivo 1.3.1 pide clasificar escenarios en los que las capacidades de Gemini (planificación, calificación, feedback, comunicación, diferenciación) son más útiles:', en: 'Objective 1.3.1 asks you to classify scenarios where Gemini’s capabilities (planning, grading, feedback, communication, differentiation) are most useful:' } },
        { table: {
          head: [{ es: 'Escenario', en: 'Scenario' }, { es: 'Capacidad', en: 'Capability' }],
          rows: [
            [{ es: 'Organizar las 16 semanas del curso', en: 'Organize the course’s 16 weeks' }, { es: 'Planificación curricular', en: 'Curriculum planning' }],
            [{ es: 'Crear una rúbrica para un proyecto', en: 'Create a project rubric' }, { es: 'Calificación / evaluación', en: 'Grading / assessment' }],
            [{ es: 'Comentarios formativos sobre borradores', en: 'Formative comments on drafts' }, { es: 'Feedback', en: 'Feedback' }],
            [{ es: 'Aviso a familias sobre una actividad', en: 'Notice to families about an activity' }, { es: 'Comunicación', en: 'Communication' }],
            [{ es: 'Tres versiones de una lectura por nivel', en: 'Three versions of a reading by level' }, { es: 'Diferenciación', en: 'Differentiation' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Elegir la herramienta adecuada', en: 'Choosing the right tool' },
      b: [
        { table: {
          head: [{ es: 'Tarea', en: 'Task' }, { es: 'Herramienta sugerida', en: 'Suggested tool' }, { es: 'Por qué', en: 'Why' }],
          rows: [
            [{ es: 'Resumir 10 documentos del curso con citas', en: 'Summarize 10 course documents with citations' }, { es: 'Gemini Notebook', en: 'Gemini Notebook' }, { es: 'Responde con tus fuentes y cita', en: 'Answers from your sources and cites' }],
            [{ es: 'Crear una tarea con el contexto de tu clase', en: 'Create an assignment with your class context' }, { es: 'Gemini in Classroom', en: 'Gemini in Classroom' }, { es: 'Conoce tus clases y publica la tarea', en: 'Knows your classes and publishes the assignment' }],
            [{ es: 'Lluvia de ideas para un proyecto', en: 'Brainstorm for a project' }, { es: 'Gemini app', en: 'Gemini app' }, { es: 'Conversación abierta y creativa', en: 'Open, creative conversation' }],
            [{ es: 'Redactar un correo a familias', en: 'Draft an email to families' }, { es: 'Gemini app o Gemini en Gmail', en: 'Gemini app or Gemini in Gmail' }, { es: 'Redacción con tono y contexto', en: 'Writing with tone and context' }],
            [{ es: 'Convertir una guía en presentación', en: 'Turn a guide into a presentation' }, { es: 'Canvas', en: 'Canvas' }, { es: 'Transforma documentos en otros formatos', en: 'Transforms documents into other formats' }]
          ]
        } },
        { note: { es: 'El objetivo 1.3.2 pide «seleccionar la herramienta adecuada (NotebookLM, Gemini app, Gemini in Classroom) para una tarea educativa dada (resumir documentos, redactar correos, lluvia de ideas)». Practica con la tabla de arriba.', en: 'Objective 1.3.2 asks you to “select the appropriate Gemini-related tool (NotebookLM, Gemini App, Gemini in Classroom) for a given educational task (summarizing documents, drafting emails, creative brainstorming)”. Practise with the table above.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Planificar con criterio', en: 'Planning with judgment' },
      b: [
        { prompt: { es: 'Crea una secuencia de 4 sesiones de 90 minutos para la unidad «Ecosistemas» de estudiantes de 13 años. Para cada sesión: objetivo, inicio (10 min), desarrollo con actividad colaborativa, cierre con evaluación formativa y materiales. Alinea las actividades al objetivo y propone una adaptación para estudiantes que necesitan más apoyo.', en: 'Create a sequence of 4 90-minute sessions for the “Ecosystems” unit for 13-year-olds. For each session: objective, warm-up (10 min), main part with a collaborative activity, closing with formative assessment, and materials. Align activities to the objective and propose an adaptation for students who need more support.' },
          label: { es: '✦ Secuencia didáctica', en: '✦ Teaching sequence' } },
        { note: { es: 'Revisa la secuencia con tu currículo y tu realidad: tiempos, recursos disponibles y conocimientos previos de tu grupo.', en: 'Review the sequence against your curriculum and your reality: timing, available resources and your group’s prior knowledge.' }, kind: 'tip' }
      ]
    }
  ],
  trampas: [
    { es: 'Confundir Canvas (LMS de Instructure) con Canvas de Gemini.', en: 'Confusing Canvas (Instructure’s LMS) with Gemini Canvas.' },
    { es: 'Usar Gemini app para resumir muchos documentos cuando Gemini Notebook da citas precisas.', en: 'Using the Gemini app to summarize many documents when Gemini Notebook gives precise citations.' },
    { es: 'Publicar tareas generadas sin revisarlas: Classroom las pone en manos de los estudiantes.', en: 'Publishing generated assignments without reviewing them: Classroom puts them in students’ hands.' }
  ],
  ideas: [
    { es: 'Gemini in Classroom: más de 30 herramientas sin costo para docentes de Workspace for Education.', en: 'Gemini in Classroom: over 30 no-cost tools for Workspace for Education teachers.' },
    { es: 'Capacidades: planificación, calificación, feedback, comunicación y diferenciación.', en: 'Capabilities: planning, grading, feedback, communication and differentiation.' },
    { es: 'Notebook para fuentes · Classroom para tus clases · Gemini app para idear y redactar.', en: 'Notebook for sources · Classroom for your classes · Gemini app to ideate and write.' }
  ],
  quiz: [
    { d: 1,
      q: { es: 'Necesitas resumir los 12 documentos del área para una reunión, con citas. ¿Qué herramienta eliges?', en: 'You need to summarize the department’s 12 documents for a meeting, with citations. Which tool do you choose?' },
      o: [
        { t: { es: 'Gemini in Classroom', en: 'Gemini in Classroom' }, why: { es: 'Classroom gestiona clases y tareas, no un corpus de documentos.', en: 'Classroom manages classes and assignments, not a document corpus.' } },
        { ok: true, t: { es: 'Gemini Notebook', en: 'Gemini Notebook' }, why: { es: 'Correcto: reúne las fuentes y responde con citas.', en: 'Correct: it gathers the sources and answers with citations.' } },
        { t: { es: 'Nano Banana', en: 'Nano Banana' }, why: { es: 'Es para imágenes.', en: 'It is for images.' } },
        { t: { es: 'Gemini Live', en: 'Gemini Live' }, why: { es: 'Es para conversar por voz.', en: 'It is for voice conversation.' } }
      ] },
    { d: 1,
      q: { es: '«Crear tres versiones de una lectura según el nivel de cada grupo». ¿Qué capacidad de Gemini se usa?', en: '“Create three versions of a reading by each group’s level.” Which Gemini capability is used?' },
      o: [
        { t: { es: 'Comunicación', en: 'Communication' }, why: { es: 'La comunicación es con familias o colegas.', en: 'Communication is with families or colleagues.' } },
        { t: { es: 'Calificación y evaluación', en: 'Assessment and grading' }, why: { es: 'No se está evaluando a nadie.', en: 'No one is being assessed.' } },
        { ok: true, t: { es: 'Diferenciación', en: 'Differentiation' }, why: { es: 'Correcto: adapta el material a distintos niveles.', en: 'Correct: it adapts material to different levels.' } },
        { t: { es: 'Planificación', en: 'Planning' }, why: { es: 'Planificar es organizar la secuencia, no adaptar niveles.', en: 'Planning organizes the sequence, not adapting levels.' } }
      ] },
    { d: 1,
      q: { es: 'En una reunión, un colega dice que «Canvas» es la plataforma donde publica sus cursos. ¿A qué se refiere?', en: 'In a meeting, a colleague says “Canvas” is the platform where they publish courses. What do they mean?' },
      o: [
        { t: { es: 'Al espacio de creación del Gemini app', en: 'The Gemini app’s creation space' }, why: { es: 'Ese Canvas crea documentos y apps, no aloja cursos.', en: 'That Canvas creates documents and apps; it doesn’t host courses.' } },
        { ok: true, t: { es: 'Al LMS Canvas de Instructure', en: 'The Canvas LMS by Instructure' }, why: { es: 'Correcto: es una plataforma de gestión del aprendizaje.', en: 'Correct: it is a learning management system.' } },
        { t: { es: 'A Google Classroom', en: 'Google Classroom' }, why: { es: 'Classroom es otra plataforma distinta.', en: 'Classroom is a different platform.' } },
        { t: { es: 'A Google Slides', en: 'Google Slides' }, why: { es: 'Slides es para presentaciones.', en: 'Slides is for presentations.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Blog — Gemini in Classroom: no-cost AI tools', url: 'https://blog.google/products-and-platforms/products/education/classroom-ai-features/' },
    { t: 'Google Blog — BETT 2026: Gemini and Classroom updates', url: 'https://blog.google/products-and-platforms/products/education/bett-2026-gemini-classroom-updates/' },
    { t: 'Google Workspace Updates — Gemini in Classroom para estudiantes de todas las edades (08/2026)', url: 'https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html' }
  ]
};
