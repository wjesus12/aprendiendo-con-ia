/* Módulo 20 · Notebooks y fuentes: investigar con tus documentos */
GDC.MOD['20'] = {
  min: 15,
  intro: {
    es: '**Gemini Notebook** (antes NotebookLM) es tu IA que solo usa tus fuentes. Subes tus documentos y obtienes un espacio inteligente para preguntar, resumir y organizar, con citas que te llevan al párrafo exacto de donde sale cada respuesta.',
    en: '**Gemini Notebook** (formerly NotebookLM) is your AI that only uses your sources. You upload your documents and get a smart space to ask, summarize and organize, with citations that take you to the exact passage each answer comes from.'
  },
  objetivos: [
    { es: 'Crear un notebook y cargar fuentes de distintos tipos.', en: 'Create a notebook and load sources of different types.' },
    { es: 'Hacer preguntas a tus fuentes y verificar con las citas.', en: 'Ask your sources questions and verify with the citations.' },
    { es: 'Explicar en qué se diferencia de un chat normal de Gemini.', en: 'Explain how it differs from a normal Gemini chat.' }
  ],
  secciones: [
    {
      h: { es: 'Un nombre nuevo, la misma idea', en: 'A new name, the same idea' },
      b: [
        { p: { es: 'El 16 de julio de 2026 Google renombró **NotebookLM** como **Gemini Notebook**. Sigue siendo una herramienta independiente (en notebooklm.google) y ahora también se integra con el Gemini app: puedes crear notebooks allí y se sincronizan entre ambos.',
               en: 'On 16 July 2026 Google renamed **NotebookLM** to **Gemini Notebook**. It is still a standalone tool (at notebooklm.google) and now also integrates with the Gemini app: you can create notebooks there and they sync between both.' } },
        { note: { es: 'La guía del examen todavía dice «NotebookLM». Son la misma herramienta: si ves cualquiera de los dos nombres, piensa en «IA que responde con mis fuentes y cita».', en: 'The exam guide still says “NotebookLM”. They are the same tool: whichever name you see, think “AI that answers from my sources and cites them”.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Tres pasos para tu primer notebook', en: 'Three steps for your first notebook' },
      b: [
        { flow: [
          { es: 'Define tu propósito', en: 'Define your purpose' },
          { es: 'Carga y conecta tus fuentes', en: 'Load and connect your sources' },
          { es: 'Recibe un notebook inteligente', en: 'Get a smart notebook' }
        ] },
        { table: {
          head: [{ es: 'Paso', en: 'Step' }, { es: 'Qué haces', en: 'What you do' }],
          rows: [
            [{ es: 'Define tu propósito', en: 'Define your purpose' }, { es: 'Qué quieres lograr, qué información necesitas y cómo organizarla', en: 'What you want to achieve, what information you need and how to organize it' }],
            [{ es: 'Carga y conecta tus fuentes', en: 'Load and connect your sources' }, { es: 'PDF, Google Docs y Slides de Drive, páginas web, videos de YouTube, audios, texto pegado…', en: 'PDFs, Google Docs and Slides from Drive, web pages, YouTube videos, audio, pasted text…' }],
            [{ es: 'Recibe un notebook inteligente', en: 'Get a smart notebook' }, { es: 'Gemini analiza, resume y organiza; tú preguntas y creas a partir de ahí', en: 'Gemini analyzes, summarizes and organizes; you ask and create from there' }]
          ]
        } },
        { p: { es: 'Si no tienes fuentes, la función de investigación del notebook puede proponerte fuentes de la web para que elijas cuáles añadir. Revisa siempre su procedencia.', en: 'If you have no sources, the notebook’s research feature can suggest web sources for you to choose from. Always check where they come from.' } }
      ]
    },
    {
      h: { es: 'Preguntar con citas', en: 'Asking with citations' },
      b: [
        { p: { es: 'En el chat del notebook, cada respuesta incluye **citas numeradas**. Al pulsarlas ves el fragmento exacto de la fuente. Eso convierte la verificación en algo rápido: no confías, compruebas.', en: 'In the notebook chat, each answer includes **numbered citations**. Clicking them shows the exact passage from the source. That makes verification quick: you don’t trust, you check.' } },
        { table: {
          head: [{ es: 'Aspecto', en: 'Aspect' }, { es: 'Chat de Gemini', en: 'Gemini chat' }, { es: 'Gemini Notebook', en: 'Gemini Notebook' }],
          rows: [
            [{ es: 'De dónde responde', en: 'Where it answers from' }, { es: 'Conocimiento general (y lo que adjuntes)', en: 'General knowledge (plus what you attach)' }, { es: 'Tus fuentes cargadas', en: 'Your loaded sources' }],
            [{ es: 'Citas', en: 'Citations' }, { es: 'A veces enlaces', en: 'Sometimes links' }, { es: 'Siempre, al fragmento exacto', en: 'Always, to the exact passage' }],
            [{ es: 'Ideal para', en: 'Best for' }, { es: 'Crear, idear, conversar', en: 'Creating, ideating, chatting' }, { es: 'Estudiar e investigar un corpus', en: 'Studying and researching a corpus' }]
          ]
        } },
        { prompt: { es: 'Con base solo en las fuentes, ¿qué diferencias plantean los autores sobre la evaluación formativa y la sumativa? Responde en una tabla y cita cada afirmación.', en: 'Based only on the sources, what differences do the authors draw between formative and summative assessment? Answer in a table and cite each claim.' },
          label: { es: '✦ Pregunta a tus fuentes', en: '✦ Ask your sources' } }
      ]
    },
    {
      h: { es: 'Conectar el notebook con el resto', en: 'Connecting the notebook to everything else' },
      b: [
        { list: [
          { es: '**Gemini app + Canvas:** añade el notebook como fuente del chat y crea materiales con Canvas (módulo 12).', en: '**Gemini app + Canvas:** add the notebook as a chat source and create materials with Canvas (module 12).' },
          { es: '**Gems:** puedes adjuntar un notebook a un Gem para que siempre consulte esas fuentes.', en: '**Gems:** you can attach a notebook to a Gem so it always consults those sources.' },
          { es: '**Compartir:** comparte el notebook con colegas o estudiantes para que pregunten a las mismas fuentes.', en: '**Share:** share the notebook with colleagues or students so they can query the same sources.' },
          { es: '**Análisis con código:** desde 2026 cada notebook tiene un entorno seguro que puede ejecutar código para analizar datos de tus fuentes (llega primero a los planes superiores).', en: '**Code analysis:** since 2026 each notebook has a secure environment that can run code to analyze data from your sources (arriving first on higher tiers).' }
        ] },
        { note: { es: 'En el plan gratuito hay límites (por ejemplo, número de fuentes por notebook) que se amplían en los planes de pago. Las cifras cambian; consulta la ayuda oficial si llegas al tope.', en: 'The free plan has limits (for example, number of sources per notebook) that grow on paid plans. Figures change; check the official help if you hit the cap.' }, kind: 'info' },
        { note: { es: 'Crea un notebook con el sílabo y dos lecturas de tu curso. Haz tres preguntas y abre cada cita. ¿Alguna respuesta mezcló ideas de forma imprecisa?', en: 'Create a notebook with your syllabus and two course readings. Ask three questions and open each citation. Did any answer blend ideas imprecisely?' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Pensar que, como cita, nunca se equivoca: puede interpretar mal un fragmento.', en: 'Thinking that because it cites, it is never wrong: it can misread a passage.' },
    { es: 'Mezclar en un notebook fuentes de temas sin relación y obtener respuestas confusas.', en: 'Mixing unrelated topics in one notebook and getting confusing answers.' },
    { es: 'Cargar documentos con datos personales de estudiantes sin necesidad.', en: 'Loading documents with students’ personal data unnecessarily.' }
  ],
  ideas: [
    { es: 'Gemini Notebook = antes NotebookLM: IA que responde con tus fuentes.', en: 'Gemini Notebook = formerly NotebookLM: AI that answers from your sources.' },
    { es: 'Propósito → fuentes → notebook inteligente.', en: 'Purpose → sources → smart notebook.' },
    { es: 'Las citas llevan al fragmento exacto: verifica siempre.', en: 'Citations lead to the exact passage: always verify.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '¿Qué diferencia principal tiene Gemini Notebook frente a un chat normal de Gemini?', en: 'What is the main difference between Gemini Notebook and a normal Gemini chat?' },
      o: [
        { t: { es: 'Que responde más rápido', en: 'That it answers much faster than the chat' }, why: { es: 'La velocidad no es lo que lo distingue.', en: 'Speed isn’t what sets it apart.' } },
        { ok: true, t: { es: 'Que responde con tus fuentes y cita', en: 'That it answers from your sources and cites' }, why: { es: 'Correcto: está anclado a lo que tú cargas.', en: 'Correct: it is anchored to what you upload.' } },
        { t: { es: 'Que solo funciona en inglés', en: 'That it only works with English content' }, why: { es: 'Funciona en muchos idiomas, incluido el español.', en: 'It works in many languages, including Spanish.' } },
        { t: { es: 'Que crea imágenes de alta calidad', en: 'That it creates high-quality images too' }, why: { es: 'Las imágenes corresponden a Nano Banana.', en: 'Images belong to Nano Banana.' } }
      ] },
    { d: 1,
      q: { es: 'En un examen ves la palabra «NotebookLM». ¿A qué herramienta se refiere hoy?', en: 'In an exam you see the word “NotebookLM”. Which tool does it refer to today?' },
      o: [
        { t: { es: 'A una versión antigua que ya no existe', en: 'An old version that no longer exists' }, why: { es: 'No desapareció: cambió de nombre.', en: 'It didn’t disappear: it was renamed.' } },
        { t: { es: 'A un complemento de Google Docs', en: 'A Google Docs add-on' }, why: { es: 'Es una herramienta independiente, no un complemento.', en: 'It is a standalone tool, not an add-on.' } },
        { ok: true, t: { es: 'A Gemini Notebook, su nombre actual', en: 'Gemini Notebook, its current name' }, why: { es: 'Correcto: fue renombrada en julio de 2026.', en: 'Correct: it was renamed in July 2026.' } },
        { t: { es: 'A la app de notas Google Keep', en: 'The Google Keep notes app' }, why: { es: 'Keep es otra app distinta.', en: 'Keep is a different app.' } }
      ] },
    { d: 3,
      q: { es: 'Gemini Notebook te da una respuesta con la cita [3]. ¿Cuál es el uso correcto de esa cita?', en: 'Gemini Notebook gives you an answer with citation [3]. What is the right use of that citation?' },
      o: [
        { t: { es: 'Ignorarla: la respuesta ya es fiable', en: 'Ignore it: the answer is already reliable' }, why: { es: 'Las citas existen justamente para verificar.', en: 'Citations exist precisely so you can verify.' } },
        { ok: true, t: { es: 'Abrirla y comprobar el fragmento', en: 'Open it and check the passage' }, why: { es: 'Correcto: confirma que la fuente dice lo que afirma la respuesta.', en: 'Correct: confirm the source says what the answer claims.' } },
        { t: { es: 'Copiarla en la bibliografía sin leer', en: 'Copy it into the bibliography unread' }, why: { es: 'Citar sin leer arrastra posibles errores.', en: 'Citing without reading carries over possible errors.' } },
        { t: { es: 'Borrar la fuente 3 del notebook', en: 'Delete source 3 from the notebook' }, why: { es: 'No hay motivo para borrar una fuente citada.', en: 'There is no reason to delete a cited source.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Blog — NotebookLM is now Gemini Notebook (16/07/2026)', url: 'https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/' },
    { t: 'Google Workspace Updates — NotebookLM como fuente en el Gemini app', url: 'https://workspaceupdates.googleblog.com/2026/01/take-notebooks-further-notebooklm-gemini.html' },
    { t: 'Gemini Notebook', url: 'https://notebooklm.google/' }
  ]
};
