/* Módulo 18 · Gemini en Slides, Forms y Vids */
GDC.MOD['18'] = {
  min: 12,
  intro: {
    es: 'Presentar, evaluar y explicar en video: tres tareas clave del aula. Aquí verás cómo Gemini ayuda en **Google Slides** (crear diapositivas e imágenes), **Google Forms** (crear un quiz a partir de tus materiales) y **Google Vids** (convertir tu presentación en video).',
    en: 'Presenting, assessing and explaining on video: three key classroom tasks. Here you will see how Gemini helps in **Google Slides** (creating slides and images), **Google Forms** (creating a quiz from your materials) and **Google Vids** (turning your deck into a video).'
  },
  objetivos: [
    { es: 'Crear diapositivas coherentes con el estilo de una presentación usando Gemini.', en: 'Create slides consistent with a deck’s style using Gemini.' },
    { es: 'Crear un quiz en Forms alineado a objetivos a partir de un Doc o Slide.', en: 'Create a Forms quiz aligned to objectives from a Doc or Slide.' },
    { es: 'Encadenar Slides → Forms → Vids en una secuencia de clase.', en: 'Chain Slides → Forms → Vids into a lesson sequence.' }
  ],
  secciones: [
    {
      h: { es: 'Gemini en Slides', en: 'Gemini in Slides' },
      b: [
        { list: [
          { es: '**Ayúdame a crear una diapositiva:** genera diapositivas nuevas que respetan el estilo de tu presentación (desde la barra de herramientas o los menús Insertar y Diapositiva).', en: '**Help me create a slide:** generates new slides that match your deck’s style (from the toolbar or the Insert and Slide menus).' },
          { es: '**Usar tus archivos:** en el panel puedes mencionar documentos de Drive con **@** para crear diapositivas a partir de ellos.', en: '**Use your files:** in the panel you can mention Drive documents with **@** to create slides from them.' },
          { es: '**Imágenes:** genera ilustraciones para tus diapositivas.', en: '**Images:** generate illustrations for your slides.' },
          { es: '**Resumir y reorganizar:** pide un resumen del deck o sugerencias de orden.', en: '**Summarize and reorganize:** ask for a deck summary or ordering suggestions.' }
        ] },
        { prompt: { es: '@[Doc de la unidad 4] crea 3 diapositivas que resuman los conceptos clave, con una pregunta de discusión al final. Mantén el estilo del resto de la presentación.', en: '@[Unit 4 Doc] create 3 slides summarizing the key concepts, with a discussion question at the end. Keep the style of the rest of the deck.' },
          label: { es: '✦ En el panel de Slides', en: '✦ In the Slides panel' } }
      ]
    },
    {
      h: { es: 'Gemini en Forms: del material al quiz', en: 'Gemini in Forms: from material to quiz' },
      b: [
        { p: { es: 'La guía del examen incluye «usar Gemini en Forms para crear un quiz alineado a objetivos de aprendizaje a partir de un Doc o una presentación» (2.1.6, con Google AI Pro for Education). La clave pedagógica es **alinear**: cada pregunta debe evaluar un objetivo concreto.',
               en: 'The exam guide includes “using Gemini in Forms to create a quiz that aligns with learning objectives and is based on a Doc or Slide” (2.1.6, with Google AI Pro for Education). The teaching key is **alignment**: each question must assess a specific objective.' } },
        { steps: [
          { es: 'Define 2–4 objetivos de aprendizaje de la clase.', en: 'Define 2–4 learning objectives for the lesson.' },
          { es: 'Pide a Gemini en Forms un quiz basado en tu Doc o Slide, indicando esos objetivos.', en: 'Ask Gemini in Forms for a quiz based on your Doc or Slide, stating those objectives.' },
          { es: 'Revisa cada pregunta: ¿evalúa el objetivo?, ¿la respuesta correcta es inequívoca?, ¿los distractores son plausibles?', en: 'Review each question: does it assess the objective? Is the correct answer unambiguous? Are distractors plausible?' },
          { es: 'Activa el modo cuestionario, asigna puntos y retroalimentación.', en: 'Turn on quiz mode, assign points and feedback.' }
        ] },
        { note: { es: 'Sin Gemini en Forms, pide el quiz en el Gemini app o en Canvas con el formato «pregunta / 4 opciones / respuesta / explicación» y cópialo en Forms.', en: 'Without Gemini in Forms, ask for the quiz in the Gemini app or Canvas in the format “question / 4 options / answer / explanation” and copy it into Forms.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Una secuencia completa', en: 'A complete sequence' },
      b: [
        { flow: [
          { es: 'Slides: presentas', en: 'Slides: you present' },
          { es: 'Forms: evalúas', en: 'Forms: you assess' },
          { es: 'Vids: refuerzas en video', en: 'Vids: you reinforce on video' }
        ] },
        { table: {
          head: [{ es: 'Momento', en: 'Moment' }, { es: 'Herramienta', en: 'Tool' }, { es: 'Producto', en: 'Product' }],
          rows: [
            [{ es: 'Antes de clase', en: 'Before class' }, { es: 'Slides + Gemini', en: 'Slides + Gemini' }, { es: 'Presentación con imágenes y preguntas', en: 'Deck with images and questions' }],
            [{ es: 'Cierre de clase', en: 'End of class' }, { es: 'Forms + Gemini', en: 'Forms + Gemini' }, { es: 'Quiz de salida de 5 preguntas', en: '5-question exit quiz' }],
            [{ es: 'Después de clase', en: 'After class' }, { es: 'Vids + Gemini', en: 'Vids + Gemini' }, { es: 'Video resumen de 3 minutos', en: '3-minute summary video' }]
          ]
        } },
        { note: { es: 'Toma una presentación que ya tengas. Crea con IA 5 preguntas de salida alineadas a sus objetivos y revisa que cada distractor sea un error real que cometen tus estudiantes.', en: 'Take a deck you already have. Use AI to create 5 exit questions aligned to its objectives and check that each distractor is a real mistake your students make.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Publicar un quiz generado sin revisar si la respuesta correcta es realmente correcta.', en: 'Publishing a generated quiz without checking whether the right answer is really right.' },
    { es: 'Distractores absurdos que nadie elegiría: no miden comprensión.', en: 'Absurd distractors no one would pick: they don’t measure understanding.' },
    { es: 'Llenar las diapositivas de texto generado: menos texto y más preguntas.', en: 'Filling slides with generated text: less text, more questions.' }
  ],
  ideas: [
    { es: 'Slides: ayúdame a crear una diapositiva con el estilo del deck; @ para usar tus archivos.', en: 'Slides: help me create a slide in the deck’s style; @ to use your files.' },
    { es: 'Forms: quiz desde un Doc o Slide, alineado a objetivos.', en: 'Forms: quiz from a Doc or Slide, aligned to objectives.' },
    { es: 'Slides → Forms → Vids: presentar, evaluar, reforzar.', en: 'Slides → Forms → Vids: present, assess, reinforce.' }
  ],
  quiz: [
    { d: 2,
      q: { es: '¿Qué hace que un quiz generado con Gemini en Forms sea pedagógicamente bueno?', en: 'What makes a quiz generated with Gemini in Forms pedagogically good?' },
      o: [
        { t: { es: 'Que tenga muchas preguntas', en: 'That it has a lot of questions' }, why: { es: 'La cantidad no garantiza que evalúe lo importante.', en: 'Quantity doesn’t guarantee it assesses what matters.' } },
        { ok: true, t: { es: 'Que se alinee a los objetivos', en: 'That it aligns with the objectives' }, why: { es: 'Correcto: cada pregunta debe evaluar un objetivo concreto.', en: 'Correct: each question must assess a specific objective.' } },
        { t: { es: 'Que las preguntas sean difíciles', en: 'That the questions are really hard' }, why: { es: 'La dificultad debe ajustarse al objetivo, no ser un fin.', en: 'Difficulty should fit the objective, not be a goal.' } },
        { t: { es: 'Que lo haya hecho la IA sola', en: 'That the AI made it all on its own' }, why: { es: 'La revisión docente sigue siendo imprescindible.', en: 'Teacher review is still essential.' } }
      ] },
    { d: 2,
      q: { es: 'En Slides quieres crear diapositivas a partir de un Doc de tu Drive. ¿Cómo lo indicas en el panel?', en: 'In Slides you want to create slides from a Doc in your Drive. How do you indicate it in the panel?' },
      o: [
        { t: { es: 'Pegando el enlace en las notas', en: 'Pasting the link in the notes' }, why: { es: 'Las notas del orador no son una fuente para el panel.', en: 'Speaker notes aren’t a source for the panel.' } },
        { ok: true, t: { es: 'Mencionándolo con @ en el prompt', en: 'Mentioning it with @ in the prompt' }, why: { es: 'Correcto: @ trae tus archivos de Drive como referencia.', en: 'Correct: @ brings your Drive files in as a reference.' } },
        { t: { es: 'Descargándolo como PDF primero', en: 'Downloading it as a PDF first' }, why: { es: 'No hace falta; el panel accede a tu Drive.', en: 'Not needed; the panel accesses your Drive.' } },
        { t: { es: 'Compartiéndolo con Gemini por correo', en: 'Sharing it with Gemini by email' }, why: { es: 'Gemini no recibe archivos por correo.', en: 'Gemini doesn’t receive files by email.' } }
      ] },
    { d: 2,
      q: { es: 'Al final de la clase quieres comprobar rápidamente qué entendieron. ¿Qué recurso encaja mejor?', en: 'At the end of class you want to quickly check what they understood. Which resource fits best?' },
      o: [
        { t: { es: 'Un video largo en Vids', en: 'A long video in Vids' }, why: { es: 'Un video refuerza, pero no mide la comprensión.', en: 'A video reinforces but doesn’t measure understanding.' } },
        { t: { es: 'Un informe de Deep Research', en: 'A Deep Research report' }, why: { es: 'Es material de investigación, no una evaluación.', en: 'It is research material, not an assessment.' } },
        { ok: true, t: { es: 'Un quiz de salida en Forms', en: 'An exit quiz in Forms' }, why: { es: 'Correcto: breve, alineado y con resultados inmediatos.', en: 'Correct: short, aligned and with instant results.' } },
        { t: { es: 'Una imagen con Nano Banana', en: 'An image with Nano Banana' }, why: { es: 'Una imagen no evalúa la comprensión.', en: 'An image doesn’t assess understanding.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google — Ayuda de Docs Editors: Colabora con Gemini en Google Slides', url: 'https://support.google.com/docs/answer/14355071?hl=es' },
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.1.6 y 2.3.4)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' }
  ]
};
