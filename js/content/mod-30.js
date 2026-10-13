/* Módulo 30 · Participación estudiantil: Studio, imágenes, video y prompts (Faculty, dominio 2) */
GDC.MOD['30'] = {
  min: 22,
  intro: {
    es: 'Un curso universitario no solo se diseña: también hay que lograr que los estudiantes **lean, comprendan y participen**. Este módulo reúne los objetivos del dominio 2 que faltan: dónde iniciar cada herramienta, cómo distinguir un prompt eficaz de uno débil, cuándo un Audio Overview o un Mind Map ayuda más que una lectura tradicional, y cómo crear imágenes, videos y comunicaciones adecuadas para la educación superior.',
    en: 'A university course isn’t only designed: students also need to **read, understand and engage**. This module gathers the remaining domain 2 objectives: where to start each tool, how to tell an effective prompt from a weak one, when an Audio Overview or a Mind Map helps more than traditional reading, and how to create images, videos and communications suited to higher education.'
  },
  objetivos: [
    { es: 'Navegar a la Gemini app, Gemini en Workspace, Gemini in Classroom y Gemini Notebook (web y app móvil) e iniciar una tarea (F 2.1.1).', en: 'Navigate to the Gemini app, Gemini in Workspace, Gemini in Classroom and Gemini Notebook (web and mobile app) and start a task (F 2.1.1).' },
    { es: 'Distinguir un prompt eficaz de uno poco eficaz con el marco PARTS (F 2.2.1).', en: 'Tell an effective prompt from a less effective one with the PARTS framework (F 2.2.1).' },
    { es: 'Evaluar Audio y Video Overviews, guías de estudio y Mind Maps frente a métodos tradicionales (F 2.2.3).', en: 'Evaluate Audio and Video Overviews, study guides and Mind Maps against traditional methods (F 2.2.3).' },
    { es: 'Crear imágenes y videos apropiados para el contexto pedagógico, y redactar correos con el tono adecuado (F 2.3.2, 2.3.4, 2.1.5).', en: 'Create images and videos suited to the teaching context, and draft emails in the right tone (F 2.3.2, 2.3.4, 2.1.5).' }
  ],
  secciones: [
    {
      h: { es: 'Dónde empieza cada tarea (2.1.1)', en: 'Where each task starts (2.1.1)' },
      b: [
        { p: { es: 'Parece básico, pero la guía lo evalúa: saber **a dónde ir** para iniciar una conversación o una tarea. Repasa los cinco puntos de entrada que menciona:', en: 'It seems basic, but the guide tests it: knowing **where to go** to start a conversation or a task. Review the five entry points it mentions:' } },
        { table: {
          head: [{ es: 'Punto de entrada', en: 'Entry point' }, { es: 'Cómo llegas', en: 'How you get there' }, { es: 'Úsalo para…', en: 'Use it for…' }],
          rows: [
            [{ es: 'Gemini app', en: 'Gemini app' }, { es: 'gemini.google.com o la app móvil; botón para un chat nuevo', en: 'gemini.google.com or the mobile app; new chat button' }, { es: 'Idear, redactar, Canvas, Deep Research, Gems', en: 'Brainstorming, drafting, Canvas, Deep Research, Gems' }],
            [{ es: 'Gemini en Workspace', en: 'Gemini in Workspace' }, { es: 'Ícono de Gemini o panel lateral dentro de Docs, Gmail, Slides, Sheets…', en: 'Gemini icon or side panel inside Docs, Gmail, Slides, Sheets…' }, { es: 'Trabajar sobre el archivo que tienes abierto', en: 'Working on the file you have open' }],
            [{ es: 'Gemini in Classroom', en: 'Gemini in Classroom' }, { es: 'Pestaña o herramientas de Gemini dentro de Classroom', en: 'Gemini tab or tools inside Classroom' }, { es: 'Materiales y tareas del curso', en: 'Course materials and assignments' }],
            [{ es: 'Gemini Notebook (web)', en: 'Gemini Notebook (web)' }, { es: 'notebooklm.google, crear notebook y cargar fuentes', en: 'notebooklm.google, create a notebook and upload sources' }, { es: 'Estudiar e investigar con tus fuentes', en: 'Studying and researching with your sources' }],
            [{ es: 'Gemini Notebook (app móvil)', en: 'Gemini Notebook (mobile app)' }, { es: 'App en Android o iOS', en: 'App on Android or iOS' }, { es: 'Escuchar Audio Overviews en el trayecto, revisar notebooks', en: 'Listening to Audio Overviews on the go, reviewing notebooks' }]
          ]
        } },
        { note: { es: 'Pista de examen: si la tarea es **sobre un archivo que ya está abierto** (resumir este Doc, responder este correo), la respuesta suele ser Gemini **dentro** de esa herramienta de Workspace. Si la tarea parte de **tus fuentes**, Gemini Notebook.', en: 'Exam hint: if the task is **about a file that is already open** (summarize this Doc, reply to this email), the answer is usually Gemini **inside** that Workspace tool. If the task starts from **your sources**, Gemini Notebook.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Prompt eficaz frente a prompt débil (2.2.1)', en: 'Effective versus weak prompt (2.2.1)' },
      b: [
        { p: { es: 'El marco **PARTS** (Persona, Aim, Recipients, Theme, Structure) que viste en el módulo 06 es el criterio oficial para juzgar un prompt. Un prompt eficaz es **claro, específico y orientado a un resultado**.', en: 'The **PARTS** framework (Persona, Aim, Recipients, Theme, Structure) you saw in module 06 is the official yardstick for judging a prompt. An effective prompt is **clear, specific and outcome-oriented**.' } },
        { compare: {
          bad: { t: { es: 'Explícame la teoría de juegos para mi clase.', en: 'Explain game theory for my class.' }, why: { es: 'Falta el público (¿qué carrera y año?), el propósito (¿introducir, repasar, evaluar?) y el formato. Gemini adivinará y saldrá genérico.', en: 'Missing the audience (which programme and year?), the aim (introduce, review, assess?) and the format. Gemini will guess and it will be generic.' } },
          good: { t: { es: 'Eres profesor de Economía (Persona). Quiero introducir el dilema del prisionero en 15 minutos (Aim) a estudiantes de segundo año sin base matemática avanzada (Recipients). Usa un ejemplo de competencia entre dos cafeterías del campus (Theme). Entrega: explicación de 150 palabras, una matriz de pagos y dos preguntas para discutir en parejas (Structure).', en: 'You are an Economics professor (Persona). I want to introduce the prisoner’s dilemma in 15 minutes (Aim) to second-year students without advanced maths (Recipients). Use an example of competition between two campus cafés (Theme). Deliver: a 150-word explanation, a payoff matrix and two pair-discussion questions (Structure).' },
                  why: { es: 'Las cinco piezas de PARTS están presentes: el resultado se puede usar casi sin cambios.', en: 'All five PARTS pieces are present: the result can be used almost unchanged.' } }
        } },
        { table: {
          head: [{ es: 'Señal de prompt débil', en: 'Weak-prompt sign' }, { es: 'Cómo corregirla', en: 'How to fix it' }],
          rows: [
            [{ es: 'Verbos vagos: «háblame de», «algo sobre»', en: 'Vague verbs: “tell me about”, “something on”' }, { es: 'Verbo de acción y producto: «crea una rúbrica de 4 niveles»', en: 'Action verb and product: “create a 4-level rubric”' }],
            [{ es: 'Sin público ni nivel', en: 'No audience or level' }, { es: 'Carrera, año, conocimientos previos', en: 'Programme, year, prior knowledge' }],
            [{ es: 'Sin formato de salida', en: 'No output format' }, { es: 'Tabla, extensión, número de ítems', en: 'Table, length, number of items' }],
            [{ es: 'Varias tareas mezcladas', en: 'Several tasks mixed together' }, { es: 'Una tarea por prompt o pasos numerados', en: 'One task per prompt or numbered steps' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Studio frente a la lectura tradicional (2.2.3)', en: 'Studio versus traditional reading (2.2.3)' },
      b: [
        { p: { es: 'La guía pide **evaluar** (no solo usar) las funciones de Gemini Notebook para explorar material complejo **comparadas con métodos tradicionales**. La clave: son **puertas de entrada** al texto, no reemplazos de la lectura.', en: 'The guide asks you to **evaluate** (not just use) Gemini Notebook features for exploring complex material **compared to traditional methods**. The key: they are **entry points** to the text, not replacements for reading.' } },
        { table: {
          head: [{ es: 'Función', en: 'Feature' }, { es: 'Ventaja frente a lo tradicional', en: 'Advantage over traditional methods' }, { es: 'Límite que debes cuidar', en: 'Limit to watch' }],
          rows: [
            [{ es: 'Audio Overview', en: 'Audio Overview' }, { es: 'Conversación tipo pódcast que acerca un artículo denso; se escucha en el trayecto', en: 'Podcast-style conversation that makes a dense paper approachable; can be heard on the go' }, { es: 'Simplifica matices; no sustituye leer los métodos y resultados', en: 'Simplifies nuances; doesn’t replace reading methods and results' }],
            [{ es: 'Video Overview', en: 'Video Overview' }, { es: 'Explicación visual con diapositivas narradas a partir de tus fuentes', en: 'Visual explanation with narrated slides from your sources' }, { es: 'Revisa que las cifras y gráficos coincidan con la fuente', en: 'Check that figures and charts match the source' }],
            [{ es: 'Guía de estudio (study guide)', en: 'Study guide' }, { es: 'Preguntas, glosario y temas clave en segundos', en: 'Questions, glossary and key topics in seconds' }, { es: 'El estudiante debe responder con sus palabras, no copiar', en: 'Students must answer in their own words, not copy' }],
            [{ es: 'Mind Map', en: 'Mind Map' }, { es: 'Muestra las relaciones entre conceptos y fuentes de un vistazo', en: 'Shows relationships between concepts and sources at a glance' }, { es: 'La estructura la propone la IA: discútela, no la memorices', en: 'The structure is AI-proposed: discuss it, don’t memorize it' }]
          ]
        } },
        { prompt: { es: 'Crea una guía de estudio para estas lecturas pensada para estudiantes de primer año: 5 conceptos clave con definición breve y cita, 5 preguntas de comprensión ordenadas de menor a mayor dificultad y 2 preguntas que obliguen a comparar autores. No incluyas las respuestas.', en: 'Create a study guide for these readings aimed at first-year students: 5 key concepts with a short definition and citation, 5 comprehension questions from easiest to hardest and 2 questions that require comparing authors. Don’t include the answers.' },
          label: { es: '✦ Guía de estudio que no da las respuestas', en: '✦ Study guide that doesn’t give the answers' } },
        { note: { es: 'Una secuencia que funciona: el estudiante escucha el Audio Overview antes de clase, lee el artículo con la guía de estudio y en clase discute el Mind Map para corregirlo. La IA abre la puerta; el aprendizaje ocurre en la lectura y la discusión.', en: 'A sequence that works: students listen to the Audio Overview before class, read the paper with the study guide and in class discuss the Mind Map to correct it. AI opens the door; learning happens in reading and discussion.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Imágenes apropiadas para el contexto (2.3.2)', en: 'Images suited to the context (2.3.2)' },
      b: [
        { p: { es: 'La guía pide generar imágenes con **Imagen 4** en la Gemini app que sean **apropiadas** para cierto contexto pedagógico. Hoy, en la Gemini app, las imágenes se crean y editan con **Nano Banana** (módulo 13). Lo que el examen evalúa es tu **criterio**:', en: 'The guide asks you to generate images with **Imagen 4** in the Gemini app that are **appropriate** for a given teaching context. Today, in the Gemini app, images are created and edited with **Nano Banana** (module 13). What the exam assesses is your **judgment**:' } },
        { list: [
          { es: '**Precisión disciplinar:** una ilustración anatómica o un diagrama de un circuito debe ser correcto; si no lo es, no se usa.', en: '**Disciplinary accuracy:** an anatomical illustration or a circuit diagram must be correct; if it isn’t, it isn’t used.' },
          { es: '**Sin estereotipos:** revisa cómo representa profesiones, géneros y culturas.', en: '**No stereotypes:** check how it represents professions, genders and cultures.' },
          { es: '**Transparencia:** indica que es una imagen generada con IA; las imágenes de Gemini llevan la marca de agua invisible SynthID.', en: '**Transparency:** state it’s an AI-generated image; Gemini images carry the invisible SynthID watermark.' },
          { es: '**Propósito:** que aclare un concepto abstracto, no que solo decore la diapositiva.', en: '**Purpose:** it should clarify an abstract concept, not just decorate the slide.' }
        ] },
        { prompt: { es: 'Crea una ilustración didáctica, estilo diagrama limpio con fondo blanco, que muestre el ciclo del carbono para una clase de Ecología de primer año. Rotula en español: fotosíntesis, respiración, descomposición, combustión y océano. Sin personas. Colores sobrios y alto contraste para proyectar en el aula.', en: 'Create an instructional illustration, clean diagram style on a white background, showing the carbon cycle for a first-year Ecology class. Label in English: photosynthesis, respiration, decomposition, combustion and ocean. No people. Sober colours and high contrast for classroom projection.' },
          label: { es: '✦ Imagen para una clase', en: '✦ Image for a class' } }
      ]
    },
    {
      h: { es: 'Video y comunicación (2.3.4, 2.1.5)', en: 'Video and communication (2.3.4, 2.1.5)' },
      b: [
        { list: [
          { es: '**Google Vids (pago):** transforma una presentación de Slides en un video con guion, voz en off y animaciones generadas con Gemini. Ideal para la clase invertida o para un resumen de la semana.', en: '**Google Vids (paid):** turns a Slides presentation into a video with a Gemini-generated script, voiceover and animations. Ideal for a flipped classroom or a weekly recap.' },
          { es: '**Veo:** genera clips cortos a partir de texto o imágenes para visualizar procesos difíciles de filmar (un fenómeno físico, una reconstrucción histórica). Indica siempre que es contenido generado.', en: '**Veo:** generates short clips from text or images to visualize processes that are hard to film (a physical phenomenon, a historical reconstruction). Always state it is generated content.' },
          { es: '**Gemini en Gmail y Docs (pago):** redacta correos o textos con un **contexto y tono** definidos, por ejemplo una respuesta cordial pero firme a un pedido de cambio de nota.', en: '**Gemini in Gmail and Docs (paid):** drafts emails or texts with a defined **context and tone**, for example a cordial but firm reply to a grade-change request.' }
        ] },
        { prompt: { es: 'Redacta un correo para un estudiante que pide subir su nota del parcial sin justificación. Tono: cordial, respetuoso y firme. Contexto: la rúbrica se publicó al inicio del curso y hay un plazo de revisión de 5 días hábiles. Ofrece una cita de 15 minutos para revisar el examen juntos. Máximo 120 palabras.', en: 'Draft an email to a student asking to raise their midterm grade without justification. Tone: cordial, respectful and firm. Context: the rubric was published at the start of the course and there is a 5-working-day review window. Offer a 15-minute meeting to review the exam together. Maximum 120 words.' },
          label: { es: '✦ Correo con tono y contexto', en: '✦ Email with tone and context' } },
        { note: { es: 'Los objetivos 2.1.5 (Gmail/Docs), 2.1.6 (Forms) y 2.3.4 (Vids) están marcados como **PAID feature** en la guía. Estúdialos, pero recuerda que las FAQ de Google indican que las preguntas sobre funciones de pago no afectan el resultado.', en: 'Objectives 2.1.5 (Gmail/Docs), 2.1.6 (Forms) and 2.3.4 (Vids) are marked **PAID feature** in the guide. Study them, but remember Google’s FAQ says questions about paid features don’t affect the result.' }, kind: 'exam' },
        { note: { es: 'Carga en un notebook dos lecturas de tu curso y genera un Audio Overview y un Mind Map. Escucha 5 minutos y anota una idea que el audio simplificó demasiado: ese es el punto que debes aclarar en clase.', en: 'Load two readings from your course into a notebook and generate an Audio Overview and a Mind Map. Listen for 5 minutes and note one idea the audio oversimplified: that is the point to clarify in class.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Presentar el Audio Overview como sustituto de la lectura en lugar de una puerta de entrada.', en: 'Presenting the Audio Overview as a substitute for reading rather than an entry point.' },
    { es: 'Usar una imagen generada con errores disciplinares porque «se ve bien».', en: 'Using a generated image with disciplinary errors because it “looks good”.' },
    { es: 'Juzgar un prompt por su longitud y no por si tiene las piezas de PARTS.', en: 'Judging a prompt by its length rather than by whether it has the PARTS pieces.' },
    { es: 'Buscar Gemini en la app cuando la tarea es sobre el Doc que ya tienes abierto.', en: 'Looking for Gemini in the app when the task is about the Doc you already have open.' }
  ],
  ideas: [
    { es: 'Cinco entradas: Gemini app, Gemini en Workspace, Gemini in Classroom, Notebook web y Notebook móvil.', en: 'Five entry points: Gemini app, Gemini in Workspace, Gemini in Classroom, Notebook web and Notebook mobile.' },
    { es: 'Prompt eficaz = claro, específico y con resultado definido (PARTS).', en: 'Effective prompt = clear, specific and with a defined outcome (PARTS).' },
    { es: 'Audio y Video Overviews, guías y Mind Maps abren la puerta al texto; no reemplazan la lectura.', en: 'Audio and Video Overviews, guides and Mind Maps open the door to the text; they don’t replace reading.' },
    { es: 'Imágenes y videos: precisión, sin estereotipos, transparencia y propósito.', en: 'Images and videos: accuracy, no stereotypes, transparency and purpose.' },
    { es: 'Gmail/Docs, Forms y Vids con Gemini son de pago: se estudian, pero no puntúan.', en: 'Gmail/Docs, Forms and Vids with Gemini are paid: study them, but they aren’t scored.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Una profesora tiene abierto un Doc con su sílabo y quiere resumirlo para un correo. ¿Dónde inicia la tarea más rápido?', en: 'A professor has her syllabus Doc open and wants to summarize it for an email. Where does she start the task fastest?' },
      o: [
        { ok: true, t: { es: 'En el panel de Gemini dentro de Docs', en: 'In the Gemini panel inside Docs' }, why: { es: 'Correcto: trabaja sobre el archivo abierto.', en: 'Correct: it works on the open file.' } },
        { t: { es: 'En un notebook nuevo con otras fuentes', en: 'In a new notebook with other sources' }, why: { es: 'Es un paso extra innecesario aquí.', en: 'It’s an unnecessary extra step here.' } },
        { t: { es: 'En Deep Research, buscando en la web', en: 'In Deep Research, searching the web' }, why: { es: 'No necesita fuentes externas.', en: 'She doesn’t need external sources.' } },
        { t: { es: 'En Gemini in Classroom, creando una tarea', en: 'In Gemini in Classroom, creating an assignment' }, why: { es: 'No es una tarea del curso.', en: 'It isn’t a course assignment.' } }
      ] },
    { d: 2,
      q: { es: 'Un profesor quiere escuchar en el bus el resumen de las lecturas de su notebook. ¿Qué usa?', en: 'A professor wants to listen on the bus to a summary of his notebook’s readings. What does he use?' },
      o: [
        { t: { es: 'Veo desde la Gemini app', en: 'Veo from the Gemini app' }, why: { es: 'Veo genera video, no resúmenes de fuentes.', en: 'Veo generates video, not source summaries.' } },
        { t: { es: 'Gemini en Gmail con un borrador', en: 'Gemini in Gmail with a draft' }, why: { es: 'No resume su notebook.', en: 'It doesn’t summarize his notebook.' } },
        { ok: true, t: { es: 'Audio Overview en Notebook móvil', en: 'Audio Overview in Notebook mobile' }, why: { es: 'Correcto: objetivo 2.1.1 y 2.2.3.', en: 'Correct: objectives 2.1.1 and 2.2.3.' } },
        { t: { es: 'Un Mind Map impreso del notebook', en: 'A printed Mind Map of the notebook' }, why: { es: 'No se escucha.', en: 'It can’t be listened to.' } }
      ] },
    { d: 2,
      q: { es: '¿Qué le falta al prompt «Explícame la teoría de juegos para mi clase»?', en: 'What is missing from the prompt “Explain game theory for my class”?' },
      o: [
        { t: { es: 'Más amabilidad en la petición', en: 'More politeness in the request' }, why: { es: 'La cortesía no mejora la precisión.', en: 'Politeness doesn’t improve precision.' } },
        { ok: true, t: { es: 'Público, propósito y formato de salida', en: 'Audience, aim and output format' }, why: { es: 'Correcto: faltan piezas clave de PARTS.', en: 'Correct: key PARTS pieces are missing.' } },
        { t: { es: 'Escribirlo en mayúsculas para enfatizar', en: 'Writing it in capitals for emphasis' }, why: { es: 'El énfasis no aporta contexto.', en: 'Emphasis adds no context.' } },
        { t: { es: 'Nada: es claro y suficientemente breve', en: 'Nothing: it’s clear and short enough' }, why: { es: 'Es breve, pero ambiguo.', en: 'It’s short, but ambiguous.' } }
      ] },
    { d: 2,
      q: { es: '¿Cuál es la **mejor** forma de usar un Audio Overview con estudiantes de pregrado?', en: 'What is the **best** way to use an Audio Overview with undergraduates?' },
      o: [
        { t: { es: 'Como reemplazo de la lectura obligatoria', en: 'As a replacement for the required reading' }, why: { es: 'Simplifica matices: no sustituye la lectura.', en: 'It simplifies nuances: it doesn’t replace reading.' } },
        { t: { es: 'Como fuente para citar en sus trabajos', en: 'As a source to cite in their papers' }, why: { es: 'Se citan las fuentes originales.', en: 'The original sources are cited.' } },
        { t: { es: 'Como examen final de la unidad', en: 'As the unit’s final exam' }, why: { es: 'No es una evaluación.', en: 'It isn’t an assessment.' } },
        { ok: true, t: { es: 'Como puerta de entrada antes de leer', en: 'As an entry point before reading' }, why: { es: 'Correcto: acerca el texto sin reemplazarlo.', en: 'Correct: it opens the text without replacing it.' } }
      ] },
    { d: 2,
      q: { es: 'Generas una ilustración anatómica para tu clase y notas un hueso mal ubicado. ¿Qué haces?', en: 'You generate an anatomical illustration for your class and notice a misplaced bone. What do you do?' },
      o: [
        { t: { es: 'La usas: los estudiantes no lo notarán', en: 'Use it: students won’t notice' }, why: { es: 'Enseñaría un error disciplinar.', en: 'It would teach a disciplinary error.' } },
        { ok: true, t: { es: 'La corriges o no la usas', en: 'Fix it or don’t use it' }, why: { es: 'Correcto: la precisión es el primer criterio.', en: 'Correct: accuracy is the first criterion.' } },
        { t: { es: 'La usas, pero sin decir que es de IA', en: 'Use it, but without saying it’s AI' }, why: { es: 'Suma un error y falta de transparencia.', en: 'It adds an error and a lack of transparency.' } },
        { t: { es: 'Le pides a los estudiantes que la memoricen', en: 'Ask students to memorize it' }, why: { es: 'Fijarían un error.', en: 'They would learn an error.' } }
      ] },
    { d: 2,
      q: { es: 'Quieres convertir tus diapositivas de la semana en un video con guion y voz en off. ¿Qué herramienta describe la guía?', en: 'You want to turn your weekly slides into a video with script and voiceover. Which tool does the guide describe?' },
      o: [
        { t: { es: 'Gemini Notebook con un Mind Map', en: 'Gemini Notebook with a Mind Map' }, why: { es: 'Un Mind Map no es un video narrado.', en: 'A Mind Map isn’t a narrated video.' } },
        { t: { es: 'Deep Research con un informe', en: 'Deep Research with a report' }, why: { es: 'Entrega un informe escrito.', en: 'It delivers a written report.' } },
        { ok: true, t: { es: 'Google Vids con Gemini (de pago)', en: 'Google Vids with Gemini (paid)' }, why: { es: 'Correcto: objetivo 2.3.4.', en: 'Correct: objective 2.3.4.' } },
        { t: { es: 'Gemini en Gmail con un adjunto', en: 'Gemini in Gmail with an attachment' }, why: { es: 'Redacta correos, no videos.', en: 'It drafts emails, not videos.' } }
      ] },
    { d: 2,
      q: { es: 'Comparada con leer el artículo completo, ¿qué ventaja ofrece un Mind Map de Gemini Notebook?', en: 'Compared with reading the full paper, what advantage does a Gemini Notebook Mind Map offer?' },
      o: [
        { ok: true, t: { es: 'Ver relaciones entre conceptos de un vistazo', en: 'Seeing how concepts relate at a glance' }, why: { es: 'Correcto: orienta antes y después de leer.', en: 'Correct: it orients before and after reading.' } },
        { t: { es: 'Garantizar que no hay errores de contenido', en: 'Guaranteeing there are no content errors' }, why: { es: 'La estructura la propone la IA y puede fallar.', en: 'The structure is AI-proposed and may be wrong.' } },
        { t: { es: 'Reemplazar la sección de métodos y resultados', en: 'Replacing the methods and results section' }, why: { es: 'No sustituye leer el detalle.', en: 'It doesn’t replace reading the detail.' } },
        { t: { es: 'Citar el artículo de forma automática en APA', en: 'Citing the paper automatically in APA' }, why: { es: 'No es su función.', en: 'That isn’t its function.' } }
      ] },
    { d: 2,
      q: { es: 'Un estudiante pide subir su nota sin justificación. ¿Qué indicación es clave al pedir el correo de respuesta a Gemini?', en: 'A student asks for a higher grade without justification. Which instruction is key when asking Gemini for the reply email?' },
      o: [
        { t: { es: 'Que el correo sea lo más largo posible', en: 'That the email be as long as possible' }, why: { es: 'La extensión no ayuda a la claridad.', en: 'Length doesn’t help clarity.' } },
        { t: { es: 'Que acepte el pedido para evitar conflictos', en: 'That it accept the request to avoid conflict' }, why: { es: 'La decisión es tuya y debe ser justa.', en: 'The decision is yours and must be fair.' } },
        { t: { es: 'Que use un tono informal con emojis', en: 'That it use an informal tone with emojis' }, why: { es: 'No corresponde al contexto académico.', en: 'It doesn’t fit the academic context.' } },
        { ok: true, t: { es: 'Contexto y tono: cordial, firme y con plazos', en: 'Context and tone: cordial, firm, with deadlines' }, why: { es: 'Correcto: objetivo 2.1.5.', en: 'Correct: objective 2.1.5.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (dominio 2)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google — Gemini Notebook (antes NotebookLM)', url: 'https://notebooklm.google' },
    { t: 'Google for Education Help — Gemini Certifications FAQs', url: 'https://support.google.com/googleforeducation/answer/16561655?hl=en' }
  ]
};
