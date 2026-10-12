/* Módulo 21 · Studio: Audio y Video Overview, Mind Map, Flashcards y Quizzes */
GDC.MOD['21'] = {
  min: 14,
  intro: {
    es: 'El panel **Studio** de Gemini Notebook transforma tus fuentes en formatos para aprender: un pódcast, un video narrado, un mapa mental, tarjetas de estudio o un quiz. Aquí verás cuándo cada formato aporta más que los métodos tradicionales y cuándo no.',
    en: 'Gemini Notebook’s **Studio** panel transforms your sources into learning formats: a podcast, a narrated video, a mind map, study cards or a quiz. Here you will see when each format adds more than traditional methods and when it doesn’t.'
  },
  objetivos: [
    { es: 'Describir los formatos del Studio y su uso pedagógico.', en: 'Describe the Studio formats and their teaching use.' },
    { es: 'Personalizar un Audio Overview (formato, idioma, enfoque).', en: 'Customize an Audio Overview (format, language, focus).' },
    { es: 'Evaluar si un formato del Studio mejora la comprensión frente a métodos tradicionales.', en: 'Evaluate whether a Studio format improves understanding compared to traditional methods.' }
  ],
  secciones: [
    {
      h: { es: 'Los formatos del Studio', en: 'The Studio formats' },
      b: [
        { table: {
          head: [{ es: 'Formato', en: 'Format' }, { es: 'Qué es', en: 'What it is' }, { es: 'Uso en el aula', en: 'Classroom use' }],
          rows: [
            [{ es: 'Audio Overview', en: 'Audio Overview' }, { es: 'Conversación tipo pódcast entre dos voces sobre tus fuentes', en: 'Podcast-style conversation between two voices about your sources' }, { es: 'Repasar en el trayecto; introducir un tema', en: 'Review on the go; introduce a topic' }],
            [{ es: 'Video Overview', en: 'Video Overview' }, { es: 'Presentación narrada con diapositivas', en: 'Narrated slideshow' }, { es: 'Resumen visual de una unidad', en: 'Visual summary of a unit' }],
            [{ es: 'Mind Map', en: 'Mind Map' }, { es: 'Mapa de temas y subtemas conectados', en: 'Map of connected topics and subtopics' }, { es: 'Ver la estructura de un tema complejo', en: 'See the structure of a complex topic' }],
            [{ es: 'Flashcards', en: 'Flashcards' }, { es: 'Tarjetas de pregunta y respuesta', en: 'Question-and-answer cards' }, { es: 'Memorizar conceptos y vocabulario', en: 'Memorize concepts and vocabulary' }],
            [{ es: 'Quizzes', en: 'Quizzes' }, { es: 'Preguntas con explicación y cita a la fuente', en: 'Questions with explanation and source citation' }, { es: 'Autoevaluación antes de un examen', en: 'Self-assessment before a test' }],
            [{ es: 'Reports', en: 'Reports' }, { es: 'Guías de estudio, documentos informativos y más', en: 'Study guides, briefing docs and more' }, { es: 'Material de apoyo escrito', en: 'Written support material' }],
            [{ es: 'Data Tables e infografías', en: 'Data Tables and infographics' }, { es: 'Tablas comparativas (exportables a Sheets) y resúmenes visuales', en: 'Comparison tables (exportable to Sheets) and visual summaries' }, { es: 'Comparar autores, épocas o casos', en: 'Compare authors, periods or cases' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Audio Overview a tu medida', en: 'Audio Overview your way' },
      b: [
        { p: { es: 'Puedes generar el Audio Overview automáticamente o **personalizarlo**: elegir el formato (por ejemplo, análisis a fondo, resumen breve, crítica o debate), el **idioma**, la **duración** y un **enfoque** («céntrate en las causas, para estudiantes de 15 años»). En el modo interactivo puedes intervenir y hacer preguntas a las voces.',
               en: 'You can generate the Audio Overview automatically or **customize** it: choose the format (for example, deep dive, brief, critique or debate), the **language**, the **length** and a **focus** (“focus on the causes, for 15-year-olds”). In interactive mode you can jump in and ask the voices questions.' } },
        { prompt: { es: 'Enfoque: explica las tres causas principales del fenómeno según las fuentes, con ejemplos cotidianos, para estudiantes de 15 años. Cierra con dos preguntas para pensar.', en: 'Focus: explain the three main causes of the phenomenon according to the sources, with everyday examples, for 15-year-olds. Close with two questions to think about.' },
          label: { es: '✦ Enfoque personalizado para un Audio Overview', en: '✦ Custom focus for an Audio Overview' } }
      ]
    },
    {
      h: { es: '¿Mejor que lo tradicional? Depende', en: 'Better than traditional? It depends' },
      b: [
        { p: { es: 'El examen pide **evaluar** la efectividad de funciones como Audio Overviews y Mind Maps frente a métodos tradicionales (objetivo 2.2.3). No basta con decir «es más moderno»: hay que pensar en el objetivo, el estudiante y el contexto.', en: 'The exam asks you to **evaluate** the effectiveness of features like Audio Overviews and Mind Maps compared to traditional methods (objective 2.2.3). Saying “it’s more modern” isn’t enough: think about the goal, the student and the context.' } },
        { table: {
          head: [{ es: 'Formato', en: 'Format' }, { es: 'Aporta', en: 'Adds' }, { es: 'Cuidado con', en: 'Watch out for' }],
          rows: [
            [{ es: 'Audio Overview', en: 'Audio Overview' }, { es: 'Accesible, motivador, aprovecha tiempos muertos', en: 'Accessible, motivating, uses idle time' }, { es: 'Escucha pasiva; puede simplificar de más', en: 'Passive listening; may oversimplify' }],
            [{ es: 'Mind Map', en: 'Mind Map' }, { es: 'Muestra relaciones de un vistazo', en: 'Shows relationships at a glance' }, { es: 'Si lo hace la IA, el estudiante no organiza: combínalo con que lo rehagan', en: 'If AI makes it, the student doesn’t organize: pair it with having them redo it' }],
            [{ es: 'Flashcards / Quizzes', en: 'Flashcards / Quizzes' }, { es: 'Práctica de recuperación con retroalimentación', en: 'Retrieval practice with feedback' }, { es: 'Revisa que las preguntas sean correctas y relevantes', en: 'Check questions are correct and relevant' }]
          ]
        } },
        { note: { es: 'Regla práctica: usa el Studio para **acercar** el contenido y pide luego una tarea activa (explicar, comparar, aplicar) para que el estudiante construya su comprensión.', en: 'Rule of thumb: use Studio to **bring content closer**, then assign an active task (explain, compare, apply) so the student builds understanding.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Disponibilidad', en: 'Availability' },
      b: [
        { p: { es: 'Los formatos básicos están en el plan gratuito con límites diarios; algunos formatos nuevos (por ejemplo, videos cortos o estilos cinematográficos) llegan primero a planes de pago. En cuentas de menores, algunas funciones pueden estar restringidas.', en: 'Basic formats are on the free plan with daily limits; some new formats (for example, short videos or cinematic styles) arrive first on paid plans. On minors’ accounts, some features may be restricted.' } },
        { note: { es: 'En tu notebook del módulo 20, genera un Mind Map y un Audio Overview con un enfoque personalizado. Escribe dos ventajas y una limitación de cada uno para tu grupo.', en: 'In your module 20 notebook, generate a Mind Map and an Audio Overview with a custom focus. Write two advantages and one limitation of each for your group.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Reemplazar la lectura por un Audio Overview en todos los casos: es complemento, no sustituto.', en: 'Replacing reading with an Audio Overview in every case: it is a complement, not a substitute.' },
    { es: 'Dar el Mind Map hecho cuando el objetivo era que el estudiante aprendiera a organizar ideas.', en: 'Handing over a finished Mind Map when the goal was for the student to learn to organize ideas.' },
    { es: 'Usar quizzes generados sin revisar su exactitud.', en: 'Using generated quizzes without checking their accuracy.' }
  ],
  ideas: [
    { es: 'Studio: Audio y Video Overview, Mind Map, Flashcards, Quizzes, Reports y más.', en: 'Studio: Audio and Video Overviews, Mind Maps, Flashcards, Quizzes, Reports and more.' },
    { es: 'Personaliza el Audio Overview: formato, idioma, duración y enfoque.', en: 'Customize the Audio Overview: format, language, length and focus.' },
    { es: 'Evalúa cada formato según el objetivo; combínalo con tareas activas.', en: 'Evaluate each format against the goal; pair it with active tasks.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Tus estudiantes deben ver cómo se relacionan los conceptos de una unidad. ¿Qué formato del Studio encaja mejor?', en: 'Your students need to see how a unit’s concepts relate. Which Studio format fits best?' },
      o: [
        { t: { es: 'Audio Overview', en: 'Audio Overview' }, why: { es: 'Es secuencial; no muestra relaciones de un vistazo.', en: 'It is sequential; it doesn’t show relationships at a glance.' } },
        { ok: true, t: { es: 'Mind Map', en: 'Mind Map' }, why: { es: 'Correcto: muestra temas y subtemas conectados.', en: 'Correct: it shows connected topics and subtopics.' } },
        { t: { es: 'Flashcards', en: 'Flashcards' }, why: { es: 'Sirven para memorizar, no para ver relaciones.', en: 'They help memorize, not see relationships.' } },
        { t: { es: 'Data Tables', en: 'Data Tables' }, why: { es: 'Comparan, pero no muestran la jerarquía de ideas.', en: 'They compare but don’t show the hierarchy of ideas.' } }
      ] },
    { d: 2,
      q: { es: '¿Cuál es la mejor forma de usar un Audio Overview en tu curso?', en: 'What is the best way to use an Audio Overview in your course?' },
      o: [
        { t: { es: 'Sustituir todas las lecturas del curso', en: 'Replace all the readings of the course' }, why: { es: 'Es un complemento; las lecturas siguen siendo necesarias.', en: 'It is a complement; readings are still needed.' } },
        { ok: true, t: { es: 'Introducir el tema y luego una tarea activa', en: 'Introduce the topic, then an active task' }, why: { es: 'Correcto: acerca el contenido y la tarea consolida.', en: 'Correct: it brings content closer and the task consolidates it.' } },
        { t: { es: 'Ponerlo en clase sin más actividades', en: 'Play it in class with nothing else' }, why: { es: 'La escucha pasiva aprende poco por sí sola.', en: 'Passive listening alone teaches little.' } },
        { t: { es: 'Usarlo como examen final', en: 'Use it as the final exam' }, why: { es: 'Un audio no evalúa el aprendizaje.', en: 'An audio doesn’t assess learning.' } }
      ] },
    { d: 2,
      q: { es: 'Quieres un Audio Overview en español, breve y centrado en las causas. ¿Qué haces?', en: 'You want a short Audio Overview in Spanish focused on the causes. What do you do?' },
      o: [
        { t: { es: 'Lo genero automático y lo recorto', en: 'Generate it automatically and trim it' }, why: { es: 'Es más fácil personalizarlo desde el inicio.', en: 'It is easier to customize it from the start.' } },
        { t: { es: 'Le pido a Deep Research que lo haga', en: 'Ask Deep Research to make it' }, why: { es: 'El Audio Overview se genera en el Studio, no en Deep Research.', en: 'The Audio Overview is generated in Studio, not Deep Research.' } },
        { ok: true, t: { es: 'Lo personalizo: idioma, duración y enfoque', en: 'Customize it: language, length and focus' }, why: { es: 'Correcto: el Studio permite ajustar esos parámetros.', en: 'Correct: Studio lets you set those parameters.' } },
        { t: { es: 'Lo traduzco luego con otra herramienta', en: 'Translate it afterwards with another tool' }, why: { es: 'No hace falta: puedes elegir el idioma.', en: 'Not needed: you can choose the language.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Blog — NotebookLM features to help students learn', url: 'https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-student-features/' },
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.2.3)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' }
  ]
};
