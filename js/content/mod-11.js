/* Módulo 11 · Canvas I: co-crear documentos (incluye la teoría de la capacitación de Canvas) */
GDC.MOD['11'] = {
  min: 16,
  intro: {
    es: '**Canvas** es el espacio del Gemini app donde la conversación se convierte en algo que puedes editar: un documento, una guía, una presentación o una aplicación. En este primer módulo aprenderás a co-crear documentos con criterio, siguiendo un método de cuatro pasos.',
    en: '**Canvas** is the space in the Gemini app where the conversation becomes something you can edit: a document, a guide, a presentation or an app. In this first module you will learn to co-create documents thoughtfully, following a four-step method.'
  },
  objetivos: [
    { es: 'Abrir Canvas y reconocer su vista dividida: chat a la izquierda, artefacto a la derecha.', en: 'Open Canvas and recognize its split view: chat on the left, artifact on the right.' },
    { es: 'Editar con **Select & ask**, sugerencias de edición, cambios de tono y extensión y versiones.', en: 'Edit with **Select & ask**, suggested edits, tone and length changes, and versions.' },
    { es: 'Aplicar el método **Adjuntar → Generar → Refinar → Verificar**.', en: 'Apply the **Attach → Generate → Refine → Verify** method.' }
  ],
  secciones: [
    {
      h: { es: 'Explorar y cuestionar: ¿para qué Canvas?', en: 'Explore and question: why Canvas?' },
      b: [
        { p: { es: 'Empecemos por una pregunta: **¿qué tarea docente te exige más tiempo o es muy repetitiva?** Piensa en una de esta semana o en una que se repite cada ciclo. Canvas brilla justamente ahí: cuando necesitas un **producto** (una guía, una rúbrica, una presentación), no solo una respuesta.',
               en: 'Let’s start with a question: **which teaching task takes you the most time or is very repetitive?** Think of one from this week or one that repeats every term. Canvas shines exactly there: when you need a **product** (a guide, a rubric, a presentation), not just an answer.' } },
        { p: { es: 'Recuerda el mapa del entorno: **Gemini es el cerebro** y **Canvas es donde construyes**. En el chat conversas; en Canvas el resultado queda visible, editable y listo para exportar.',
               en: 'Remember the ecosystem map: **Gemini is the brain** and **Canvas is where you build**. In the chat you converse; in Canvas the result stays visible, editable and ready to export.' } },
        { flow: [
          { es: 'Explorar y cuestionar', en: 'Explore and question' },
          { es: 'Prototipar y transferir', en: 'Prototype and transfer' },
          { es: 'Productos tecnológicos', en: 'Tech products' }
        ] }
      ]
    },
    {
      h: { es: 'Canvas como espacio de co-creación', en: 'Canvas as a co-creation space' },
      b: [
        { p: { es: 'Canvas abre un espacio de trabajo donde **la conversación se transforma en un artefacto editable**. El ciclo tiene tres momentos:', en: 'Canvas opens a workspace where **the conversation becomes an editable artifact**. The cycle has three moments:' } },
        { flow: [
          { es: 'Conversación', en: 'Conversation' },
          { es: 'Artefacto visible', en: 'Visible artifact' },
          { es: 'Revisión con criterio', en: 'Thoughtful review' }
        ] },
        { table: {
          head: [{ es: 'Acción', en: 'Action' }, { es: 'Qué significa', en: 'What it means' }],
          rows: [
            [{ es: 'Crear y editar', en: 'Create and edit' }, { es: 'Partes de una indicación y ajustas el resultado', en: 'You start from an instruction and adjust the result' }],
            [{ es: 'Revisar en contexto', en: 'Review in context' }, { es: 'Seleccionas una sección y pides cambios solo ahí', en: 'You select a section and ask for changes only there' }],
            [{ es: 'Compartir o exportar', en: 'Share or export' }, { es: 'Envías a Google Docs, Slides o Colab, o compartes un enlace', en: 'You send to Google Docs, Slides or Colab, or share a link' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Abrir Canvas y moverse en él', en: 'Opening and navigating Canvas' },
      b: [
        { steps: [
          { es: 'Entra a gemini.google.com con tu cuenta.', en: 'Go to gemini.google.com with your account.' },
          { es: 'Pulsa **+** junto a la caja de prompt y elige **Canvas**.', en: 'Press **+** next to the prompt box and choose **Canvas**.' },
          { es: 'Escribe tu pedido indicando el **formato** que quieres (documento, guía, slides…).', en: 'Write your request stating the **format** you want (document, guide, slides…).' },
          { es: 'El documento aparece a la derecha; el chat sigue a la izquierda para pedir ajustes.', en: 'The document appears on the right; the chat stays on the left for adjustments.' }
        ] },
        { table: {
          head: [{ es: 'Herramienta de edición', en: 'Editing tool' }, { es: 'Para qué sirve', en: 'What it is for' }],
          rows: [
            [{ es: 'Select & ask', en: 'Select & ask' }, { es: 'Seleccionas un fragmento y pides un cambio solo en esa parte', en: 'Select a passage and ask for a change only there' }],
            [{ es: 'Suggest edits', en: 'Suggest edits' }, { es: 'Gemini propone mejoras que tú aceptas o descartas', en: 'Gemini proposes improvements you accept or reject' }],
            [{ es: 'Longitud y tono', en: 'Length and tone' }, { es: 'Alargar, acortar o cambiar el tono con un clic', en: 'Lengthen, shorten or change the tone in one click' }],
            [{ es: 'Edición directa y formato', en: 'Direct editing and formatting' }, { es: 'Escribes tú mismo: títulos, negritas, listas', en: 'Type yourself: headings, bold, lists' }],
            [{ es: 'Versiones', en: 'Versions' }, { es: 'Vuelves a una versión anterior si un cambio no te gusta', en: 'Go back to an earlier version if you don’t like a change' }],
            [{ es: 'LaTeX', en: 'LaTeX' }, { es: 'Escribir y editar fórmulas matemáticas', en: 'Write and edit maths formulas' }]
          ]
        } },
        { note: { es: 'Los cambios en Canvas se guardan automáticamente. Desde **Share & export** puedes exportar el texto a Google Docs, las slides a Google Slides (o PDF) y el código Python a Colab, o copiar un enlace para compartir.',
                  en: 'Changes in Canvas are saved automatically. From **Share & export** you can export text to Google Docs, slides to Google Slides (or PDF) and Python code to Colab, or copy a link to share.' }, kind: 'info' }
      ]
    },
    {
      h: { es: 'Canvas eficiente en 4 pasos', en: 'Efficient Canvas in 4 steps' },
      b: [
        { flow: [
          { es: 'Adjuntar', en: 'Attach' }, { es: 'Generar', en: 'Generate' }, { es: 'Refinar', en: 'Refine' }, { es: 'Verificar', en: 'Verify' }
        ] },
        { table: {
          head: [{ es: 'Paso', en: 'Step' }, { es: 'Qué haces', en: 'What you do' }],
          rows: [
            [{ es: '1. Adjuntar', en: '1. Attach' }, { es: 'Tus documentos como insumo: ejemplo, sílabo o inspiración', en: 'Your documents as input: example, syllabus or inspiration' }],
            [{ es: '2. Generar', en: '2. Generate' }, { es: 'Una primera versión a partir de ese insumo', en: 'A first version based on that input' }],
            [{ es: '3. Refinar', en: '3. Refine' }, { es: 'Seleccionas un fragmento y pides un cambio', en: 'Select a passage and ask for a change' }],
            [{ es: '4. Verificar', en: '4. Verify' }, { es: 'Contrastas con tus documentos y exportas', en: 'Check against your documents and export' }]
          ]
        } },
        { prompt: { es: 'Con el sílabo adjunto, crea una guía de estudio de la unidad 3 para estudiantes de [carrera y ciclo]. Incluye objetivos, conceptos clave con ejemplos, 5 preguntas de autoevaluación y lecturas sugeridas. Usa solo el sílabo; marca con [VERIFICAR] lo que no esté en él.',
                    en: 'Using the attached syllabus, create a study guide for unit 3 for [program and year] students. Include objectives, key concepts with examples, 5 self-assessment questions and suggested readings. Use only the syllabus; mark with [VERIFY] anything not in it.' },
          label: { es: '✦ Prompt de ejemplo para Canvas', en: '✦ Sample Canvas prompt' } },
        { quote: { es: 'La IA libera tiempo cuando el docente define el propósito y revisa el resultado.', en: 'AI frees up time when the teacher defines the purpose and reviews the result.' } }
      ]
    }
  ],
  trampas: [
    { es: 'Pedir cambios generales en el chat cuando solo querías tocar un párrafo: usa Select & ask.', en: 'Asking for general changes in the chat when you only wanted to touch one paragraph: use Select & ask.' },
    { es: 'Saltarse el paso Verificar porque el documento «se ve profesional».', en: 'Skipping the Verify step because the document “looks professional”.' },
    { es: 'No indicar el formato en el prompt y recibir un texto cuando querías una presentación.', en: 'Not stating the format in the prompt and getting text when you wanted a presentation.' }
  ],
  ideas: [
    { es: 'Canvas: la conversación se vuelve un artefacto editable.', en: 'Canvas: the conversation becomes an editable artifact.' },
    { es: 'Conversación → Artefacto visible → Revisión con criterio.', en: 'Conversation → Visible artifact → Thoughtful review.' },
    { es: 'Adjuntar → Generar → Refinar → Verificar.', en: 'Attach → Generate → Refine → Verify.' },
    { es: 'Exporta a Docs, Slides o Colab, o comparte un enlace.', en: 'Export to Docs, Slides or Colab, or share a link.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'En Canvas solo quieres reescribir el segundo párrafo de tu guía. ¿Qué haces?', en: 'In Canvas you only want to rewrite the second paragraph of your guide. What do you do?' },
      o: [
        { t: { es: 'Pido en el chat que rehaga toda la guía', en: 'Ask in the chat to redo the whole guide' },
          why: { es: 'Arriesgas cambios no deseados en el resto del documento.', en: 'You risk unwanted changes in the rest of the document.' } },
        { ok: true, t: { es: 'Selecciono el párrafo y uso Select & ask', en: 'Select the paragraph and use Select & ask' },
          why: { es: 'Correcto: el cambio se aplica solo al fragmento elegido.', en: 'Correct: the change applies only to the selected passage.' } },
        { t: { es: 'Exporto a Docs y lo reescribo allí', en: 'Export to Docs and rewrite it there' },
          why: { es: 'Funciona, pero desaprovecha la edición en contexto de Canvas.', en: 'It works, but wastes Canvas’s in-context editing.' } },
        { t: { es: 'Abro un chat nuevo con el párrafo', en: 'Open a new chat with the paragraph' },
          why: { es: 'Pierdes el contexto del documento completo.', en: 'You lose the context of the whole document.' } }
      ] },
    { d: 2,
      q: { es: '¿Cuál es el orden del método «Canvas eficiente»?', en: 'What is the order of the “efficient Canvas” method?' },
      o: [
        { t: { es: 'Generar → Adjuntar → Verificar → Refinar', en: 'Generate → Attach → Verify → Refine' },
          why: { es: 'Los insumos van primero y la verificación al final.', en: 'Inputs come first and verification last.' } },
        { t: { es: 'Refinar → Generar → Adjuntar → Verificar', en: 'Refine → Generate → Attach → Verify' },
          why: { es: 'No se puede refinar algo que aún no se generó.', en: 'You can’t refine something not yet generated.' } },
        { ok: true, t: { es: 'Adjuntar → Generar → Refinar → Verificar', en: 'Attach → Generate → Refine → Verify' },
          why: { es: 'Correcto: insumo, primera versión, ajuste puntual y contraste final.', en: 'Correct: input, first version, targeted adjustment and final check.' } },
        { t: { es: 'Adjuntar → Verificar → Generar → Refinar', en: 'Attach → Verify → Generate → Refine' },
          why: { es: 'Se verifica el resultado, así que va después de generar y refinar.', en: 'You verify the result, so it comes after generating and refining.' } }
      ] },
    { d: 1,
      q: { es: 'Terminaste una guía en Canvas y tu equipo la quiere comentar en Google Docs. ¿Qué haces?', en: 'You finished a guide in Canvas and your team wants to comment on it in Google Docs. What do you do?' },
      o: [
        { t: { es: 'Copio y pego cada sección a mano', en: 'Copy and paste each section by hand' },
          why: { es: 'Es posible, pero existe una exportación directa.', en: 'Possible, but there is a direct export.' } },
        { ok: true, t: { es: 'Uso Share & export → exportar a Docs', en: 'Use Share & export → export to Docs' },
          why: { es: 'Correcto: Canvas exporta el texto directamente a Google Docs.', en: 'Correct: Canvas exports text directly to Google Docs.' } },
        { t: { es: 'Les envío una captura de pantalla', en: 'Send them a screenshot' },
          why: { es: 'Una imagen no se puede editar ni comentar como documento.', en: 'An image can’t be edited or commented on as a document.' } },
        { t: { es: 'Les pido que entren a mi cuenta', en: 'Ask them to log into my account' },
          why: { es: 'Compartir credenciales es una mala práctica de seguridad.', en: 'Sharing credentials is poor security practice.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google — Ayuda de Gemini: Canvas en Gemini Apps', url: 'https://support.google.com/gemini/answer/16047321?hl=es' },
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.3.1)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' }
  ]
};
