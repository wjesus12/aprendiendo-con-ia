/* Módulo 08 · Archivos, imágenes y grounding con tus fuentes */
GDC.MOD['08'] = {
  min: 13,
  intro: {
    es: 'Gemini trabaja mucho mejor cuando le das tu material: el sílabo, una lectura, una foto de la pizarra o una hoja de notas. A eso se le llama **grounding**: anclar la respuesta a fuentes concretas. Aquí verás cómo adjuntar archivos y conectar Drive.',
    en: 'Gemini works much better when you give it your material: the syllabus, a reading, a photo of the board or a grade sheet. That is called **grounding**: anchoring the answer to specific sources. Here you will see how to attach files and connect Drive.'
  },
  objetivos: [
    { es: 'Adjuntar archivos e imágenes a un chat desde tu equipo o desde Google Drive.', en: 'Attach files and images to a chat from your device or from Google Drive.' },
    { es: 'Explicar qué es el **grounding** y por qué mejora la calidad y la fiabilidad.', en: 'Explain what **grounding** is and why it improves quality and reliability.' },
    { es: 'Decidir cuándo basta con adjuntar y cuándo conviene usar Gemini Notebook.', en: 'Decide when attaching is enough and when Gemini Notebook is the better choice.' }
  ],
  secciones: [
    {
      h: { es: '¿Qué es el grounding?', en: 'What is grounding?' },
      b: [
        { p: { es: '**Grounding** significa basar la respuesta de la IA en fuentes concretas que tú aportas (o en resultados de búsqueda), en lugar de depender solo de lo que el modelo aprendió. Es como pasar de «respóndeme de memoria» a «respóndeme con este libro abierto».',
               en: '**Grounding** means basing the AI’s answer on specific sources you provide (or on search results), instead of relying only on what the model learned. It is like going from “answer me from memory” to “answer me with this book open”.' } },
        { list: [
          { es: '**Más pertinente:** usa tu currículo, tus términos y tu contexto.', en: '**More relevant:** it uses your curriculum, your terms and your context.' },
          { es: '**Más fiable:** reduce las alucinaciones, aunque no las elimina.', en: '**More reliable:** it reduces hallucinations, although it doesn’t eliminate them.' },
          { es: '**Más fácil de verificar:** puedes contrastar con la fuente original.', en: '**Easier to verify:** you can check against the original source.' }
        ] },
        { note: { es: 'Objetivo 2.1.3 de la guía: «subir documentos fuente relevantes a Gemini o NotebookLM para anclar (ground) las respuestas en una tarea de investigación o creación de contenido».',
                  en: 'Guide objective 2.1.3: “upload relevant source documents into Gemini or NotebookLM to ground AI responses for a given research or content creation task.”' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Cómo adjuntar material', en: 'How to attach material' },
      b: [
        { steps: [
          { es: 'En la caja de prompt, pulsa **+**.', en: 'In the prompt box, press **+**.' },
          { es: 'Elige **subir archivos** (desde tu equipo), **Drive** (desde tus archivos de Google) o **fotos/cámara** en el móvil.', en: 'Choose **upload files** (from your device), **Drive** (from your Google files) or **photos/camera** on mobile.' },
          { es: 'Escribe el prompt diciendo **qué hacer con el archivo**: resumir, extraer, adaptar, convertir.', en: 'Write the prompt saying **what to do with the file**: summarize, extract, adapt, convert.' },
          { es: 'Añade límites: «usa solo este documento».', en: 'Add limits: “use only this document.”' }
        ] },
        { p: { es: 'Gemini acepta documentos (PDF, Google Docs, archivos de texto), hojas de cálculo, presentaciones, imágenes y otros formatos compatibles. El número y el tamaño de los archivos dependen de tu plan.',
               en: 'Gemini accepts documents (PDF, Google Docs, text files), spreadsheets, presentations, images and other supported formats. The number and size of files depend on your plan.' } },
        { p: { es: 'Con las **apps conectadas** también puedes pedirle que busque en tu Drive o en Gmail escribiendo, por ejemplo, **@Drive** en el prompt (módulo 16). Y desde 2026 puedes añadir un **notebook** de Gemini Notebook como fuente del chat.',
               en: 'With **connected apps** you can also ask it to search your Drive or Gmail by typing, for example, **@Drive** in the prompt (module 16). And since 2026 you can add a Gemini Notebook **notebook** as a chat source.' } }
      ]
    },
    {
      h: { es: 'Imágenes: Gemini también «ve»', en: 'Images: Gemini also “sees”' },
      b: [
        { p: { es: 'Como Gemini es multimodal, puedes subir una foto de la pizarra, de un ejercicio resuelto a mano o de una gráfica, y pedirle que la transcriba, la explique o detecte errores.',
               en: 'Since Gemini is multimodal, you can upload a photo of the board, a handwritten solved exercise or a chart, and ask it to transcribe, explain or spot errors.' } },
        { prompt: { es: 'Adjunto la foto del esquema que hicimos hoy en clase. Transcríbelo en una lista ordenada, corrige la ortografía sin cambiar las ideas y sugiere 3 preguntas de repaso basadas solo en lo que aparece en la foto.',
                    en: 'I’m attaching a photo of the diagram we made in class today. Transcribe it as an ordered list, fix the spelling without changing the ideas and suggest 3 review questions based only on what appears in the photo.' } },
        { note: { es: 'No subas fotos donde se vean rostros, nombres completos o datos de tus estudiantes. Si la imagen los tiene, recórtala o cúbrelos antes.',
                  en: 'Don’t upload photos showing your students’ faces, full names or data. If the image has them, crop or cover them first.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: '¿Adjuntar en el chat o usar Gemini Notebook?', en: 'Attach in chat or use Gemini Notebook?' },
      b: [
        { table: {
          head: [{ es: 'Situación', en: 'Situation' }, { es: 'Mejor opción', en: 'Better option' }],
          rows: [
            [{ es: 'Una tarea rápida con 1 o 2 archivos', en: 'A quick task with 1 or 2 files' }, { es: 'Adjuntar en el chat de Gemini', en: 'Attach in the Gemini chat' }],
            [{ es: 'Muchos documentos de un curso que consultarás todo el ciclo', en: 'Many course documents you will consult all term' }, { es: 'Gemini Notebook', en: 'Gemini Notebook' }],
            [{ es: 'Necesitas citas que apunten al párrafo exacto', en: 'You need citations pointing to the exact passage' }, { es: 'Gemini Notebook', en: 'Gemini Notebook' }],
            [{ es: 'Crear un documento editable a partir de un archivo', en: 'Create an editable document from a file' }, { es: 'Chat + Canvas (módulo 11)', en: 'Chat + Canvas (module 11)' }]
          ]
        } }
      ]
    }
  ],
  trampas: [
    { es: 'Adjuntar el archivo y no decir qué hacer con él: Gemini adivinará la tarea.', en: 'Attaching the file without saying what to do with it: Gemini will guess the task.' },
    { es: 'Creer que, al adjuntar un documento, Gemini ya no puede equivocarse.', en: 'Believing that once a document is attached, Gemini can no longer be wrong.' },
    { es: 'Subir listas con nombres, notas o datos sensibles sin necesidad.', en: 'Uploading lists with names, grades or sensitive data when there is no need.' }
  ],
  ideas: [
    { es: 'Grounding = anclar la respuesta a fuentes concretas.', en: 'Grounding = anchoring the answer to specific sources.' },
    { es: 'Botón + → archivo, Drive o foto; luego di qué hacer y con qué límites.', en: '+ button → file, Drive or photo; then say what to do and with what limits.' },
    { es: 'Para muchos documentos y citas precisas, usa Gemini Notebook.', en: 'For many documents and precise citations, use Gemini Notebook.' }
  ],
  quiz: [
    { d: 2,
      q: { es: '¿Qué describe mejor el **grounding**?', en: 'What best describes **grounding**?' },
      o: [
        { t: { es: 'Entrenar a Gemini con los datos de tu escuela', en: 'Training Gemini on your school’s data' },
          why: { es: 'Adjuntar fuentes no entrena el modelo; solo informa esa respuesta.', en: 'Attaching sources doesn’t train the model; it only informs that answer.' } },
        { ok: true, t: { es: 'Basar la respuesta en fuentes que tú aportas', en: 'Basing the answer on sources you provide' },
          why: { es: 'Correcto: anclar a tus fuentes mejora la pertinencia y facilita verificar.', en: 'Correct: anchoring to your sources improves relevance and makes checking easier.' } },
        { t: { es: 'Pedir respuestas más cortas y directas', en: 'Asking for shorter, more direct answers' },
          why: { es: 'La extensión no tiene que ver con anclar a fuentes.', en: 'Length has nothing to do with anchoring to sources.' } },
        { t: { es: 'Guardar la conversación en tu Drive', en: 'Saving the conversation to your Drive' },
          why: { es: 'Exportar o guardar no es grounding.', en: 'Exporting or saving isn’t grounding.' } }
      ] },
    { d: 2,
      q: { es: 'Tienes 25 lecturas del curso y quieres consultarlas todo el ciclo con citas precisas. ¿Qué usas?', en: 'You have 25 course readings and want to consult them all term with precise citations. What do you use?' },
      o: [
        { t: { es: 'Un chat nuevo adjuntando las 25 cada vez', en: 'A new chat attaching all 25 each time' },
          why: { es: 'Es poco práctico y no organiza las fuentes a largo plazo.', en: 'It is impractical and doesn’t organize sources for the long term.' } },
        { t: { es: 'Nano Banana para resumirlas en imágenes', en: 'Nano Banana to summarize them as images' },
          why: { es: 'Nano Banana crea imágenes; no es una herramienta de consulta de fuentes.', en: 'Nano Banana creates images; it isn’t a source-consultation tool.' } },
        { ok: true, t: { es: 'Un notebook en Gemini Notebook', en: 'A notebook in Gemini Notebook' },
          why: { es: 'Correcto: reúne las fuentes y responde con citas a cada una.', en: 'Correct: it gathers the sources and answers with citations to each.' } },
        { t: { es: 'Deep Research para buscarlas en la web', en: 'Deep Research to find them on the web' },
          why: { es: 'Deep Research busca en la web; tú ya tienes tus lecturas.', en: 'Deep Research searches the web; you already have your readings.' } }
      ] },
    { d: 3,
      q: { es: 'Quieres que Gemini explique un ejercicio escrito a mano por un estudiante. ¿Qué debes cuidar primero?', en: 'You want Gemini to explain an exercise handwritten by a student. What should you take care of first?' },
      o: [
        { t: { es: 'Que la foto tenga la mejor resolución', en: 'That the photo has the best resolution' },
          why: { es: 'Ayuda a leerla, pero la prioridad es proteger los datos del estudiante.', en: 'It helps readability, but the priority is protecting the student’s data.' } },
        { ok: true, t: { es: 'Que no se vean nombre ni datos personales', en: 'That no name or personal data is visible' },
          why: { es: 'Correcto: recorta o cubre los datos antes de subir la imagen.', en: 'Correct: crop or cover the data before uploading the image.' } },
        { t: { es: 'Que el ejercicio esté bien resuelto', en: 'That the exercise is correctly solved' },
          why: { es: 'Justamente puedes pedir a Gemini que detecte errores.', en: 'You can precisely ask Gemini to spot errors.' } },
        { t: { es: 'Que esté escrito en lápiz y no en tinta', en: 'That it is written in pencil, not ink' },
          why: { es: 'El tipo de trazo no es lo importante aquí.', en: 'The type of stroke isn’t what matters here.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.1.3)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google Workspace Updates — NotebookLM como fuente en el Gemini app', url: 'https://workspaceupdates.googleblog.com/2026/01/take-notebooks-further-notebooklm-gemini.html' },
    { t: 'Google — Gemini Apps Help', url: 'https://support.google.com/gemini/' }
  ]
};
