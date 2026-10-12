/* Módulo 16 · El ecosistema: Workspace, «Ask Gemini» y connected apps */
GDC.MOD['16'] = {
  min: 13,
  intro: {
    es: 'Gemini no vive solo en su chat: también trabaja dentro de las apps de Google que ya usas y puede consultar tus archivos de Drive o tus correos cuando lo autorizas. Aquí verás las dos puertas de entrada al ecosistema y qué herramientas de Google Workspace for Education se integran con Gemini.',
    en: 'Gemini doesn’t live only in its chat: it also works inside the Google apps you already use and can look up your Drive files or emails when you allow it. Here you will see the two entry points to the ecosystem and which Google Workspace for Education tools integrate with Gemini.'
  },
  objetivos: [
    { es: 'Nombrar las herramientas de Google Workspace for Education integradas con Gemini.', en: 'Name the Google Workspace for Education tools integrated with Gemini.' },
    { es: 'Diferenciar el uso desde el Gemini app (apps conectadas, @) del panel «Ask Gemini» dentro de cada app.', en: 'Tell using it from the Gemini app (connected apps, @) apart from the “Ask Gemini” panel inside each app.' },
    { es: 'Reconocer el papel del administrador en la disponibilidad de funciones.', en: 'Recognize the administrator’s role in feature availability.' }
  ],
  secciones: [
    {
      h: { es: 'Dos puertas de entrada', en: 'Two entry points' },
      b: [
        { table: {
          head: [{ es: 'Puerta', en: 'Entry point' }, { es: 'Cómo se usa', en: 'How it is used' }, { es: 'Ejemplo', en: 'Example' }],
          rows: [
            [{ es: '1. Desde el Gemini app', en: '1. From the Gemini app' }, { es: 'Conectas apps (Gmail, Drive, Calendar…) y las invocas con @ o pidiéndolo', en: 'You connect apps (Gmail, Drive, Calendar…) and invoke them with @ or by asking' }, { es: '«@Drive busca el sílabo de Química y resume la unidad 2»', en: '“@Drive find the Chemistry syllabus and summarize unit 2”' }],
            [{ es: '2. Dentro de cada app', en: '2. Inside each app' }, { es: 'Abres el panel lateral «Ask Gemini» en Gmail, Docs, Sheets, Slides o Drive', en: 'You open the “Ask Gemini” side panel in Gmail, Docs, Sheets, Slides or Drive' }, { es: 'En un Doc: «Resume este documento en 5 puntos»', en: 'In a Doc: “Summarize this document in 5 points”' }]
          ]
        } },
        { p: { es: 'La primera puerta es ideal cuando quieres **combinar** información de varias apps en una conversación. La segunda, cuando trabajas **dentro** de un archivo y quieres ayuda en contexto.',
               en: 'The first entry point is ideal when you want to **combine** information from several apps in one conversation. The second, when you work **inside** a file and want help in context.' } }
      ]
    },
    {
      h: { es: 'Apps conectadas y Personal Intelligence', en: 'Connected apps and Personal Intelligence' },
      b: [
        { p: { es: 'En los ajustes del Gemini app puedes conectar apps de Google como **Gmail, Calendar, Drive, Photos, YouTube y Maps**. Desde septiembre de 2026 también hay apps de terceros (por ejemplo, Adobe o Airtable) que se traen al chat con **@**. La conexión es voluntaria y puedes desactivarla cuando quieras.',
               en: 'In the Gemini app settings you can connect Google apps such as **Gmail, Calendar, Drive, Photos, YouTube and Maps**. Since September 2026 there are also third-party apps (for example, Adobe or Airtable) you bring into the chat with **@**. Connecting is optional and you can turn it off any time.' } },
        { p: { es: '**Personal Intelligence** es la capacidad de Gemini de usar ese contenido personal conectado para darte respuestas más útiles. Se está desplegando de forma gradual, así que puede no estar disponible en tu cuenta o país.',
               en: '**Personal Intelligence** is Gemini’s ability to use that connected personal content to give you more useful answers. It is rolling out gradually, so it may not be available in your account or country.' } },
        { prompt: { es: '@Gmail busca los correos de esta semana sobre la salida de campo y hazme una lista de pendientes con fecha y responsable.', en: '@Gmail find this week’s emails about the field trip and make me a to-do list with dates and owners.' },
          label: { es: '✦ Ejemplo con una app conectada', en: '✦ Example with a connected app' } }
      ]
    },
    {
      h: { es: 'Herramientas de Workspace for Education con Gemini', en: 'Workspace for Education tools with Gemini' },
      b: [
        { table: {
          head: [{ es: 'Herramienta', en: 'Tool' }, { es: 'Qué aporta Gemini', en: 'What Gemini adds' }, { es: 'Módulo', en: 'Module' }],
          rows: [
            [{ es: 'Gmail', en: 'Gmail' }, { es: 'Redactar, resumir hilos y responder con contexto', en: 'Write, summarize threads and reply with context' }, { es: '17', en: '17' }],
            [{ es: 'Docs', en: 'Docs' }, { es: 'Borradores con formato, ediciones sugeridas, resúmenes', en: 'Formatted drafts, suggested edits, summaries' }, { es: '17', en: '17' }],
            [{ es: 'Slides', en: 'Slides' }, { es: 'Crear diapositivas e imágenes con el estilo del deck', en: 'Create slides and images matching the deck’s style' }, { es: '18', en: '18' }],
            [{ es: 'Forms', en: 'Forms' }, { es: 'Crear un quiz a partir de un Doc o Slide', en: 'Create a quiz from a Doc or Slide' }, { es: '18', en: '18' }],
            [{ es: 'Vids', en: 'Vids' }, { es: 'Videos con guion, voz y animación', en: 'Videos with script, voice and animation' }, { es: '15 · 18', en: '15 · 18' }],
            [{ es: 'Sheets', en: 'Sheets' }, { es: 'Crear tablas, rellenar celdas y analizar datos', en: 'Create tables, fill cells and analyze data' }, { es: '19', en: '19' }],
            [{ es: 'Drive', en: 'Drive' }, { es: 'Preguntar y resumir a partir de tus archivos', en: 'Ask and summarize from your files' }, { es: '19', en: '19' }],
            [{ es: 'Classroom', en: 'Classroom' }, { es: 'Más de 30 herramientas para planificar, evaluar y diferenciar', en: 'Over 30 tools to plan, assess and differentiate' }, { es: '22', en: '22' }],
            [{ es: 'Gemini Notebook', en: 'Gemini Notebook' }, { es: 'Investigar y estudiar con tus fuentes', en: 'Research and study with your sources' }, { es: '20 · 21', en: '20 · 21' }]
          ]
        } },
        { note: { es: 'El objetivo 1.1.3 pide «especificar las herramientas de Google Workspace for Education que ofrecen integración con Gemini». Ten presente cuáles requieren **Google AI Pro for Education** (Gemini dentro de Gmail, Docs, Forms, Vids, Meet o Drive) y cuáles son gratuitas (Gemini app, Gemini in Classroom, Gemini Notebook).',
                  en: 'Objective 1.1.3 asks you to “specify Google Workspace for Education tools that offer integration with Gemini”. Keep in mind which require **Google AI Pro for Education** (Gemini inside Gmail, Docs, Forms, Vids, Meet or Drive) and which are free (Gemini app, Gemini in Classroom, Gemini Notebook).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'El administrador decide', en: 'The administrator decides' },
      b: [
        { p: { es: 'En una cuenta institucional, el **administrador de Google Workspace** activa o desactiva servicios (por ejemplo, Gemini Notebook o el acceso de estudiantes) y define políticas por edad. Si una función no aparece, consulta con tu área de tecnología antes de suponer que no existe.',
               en: 'In a school account, the **Google Workspace administrator** turns services on or off (for example, Gemini Notebook or student access) and sets age-based policies. If a feature doesn’t appear, check with your IT team before assuming it doesn’t exist.' } },
        { note: { es: 'Abre un Doc o Gmail con tu cuenta y busca el botón de Gemini (la chispa) arriba a la derecha. Si no aparece, anota qué ves y pregúntale a tu administrador qué servicios están habilitados.', en: 'Open a Doc or Gmail with your account and look for the Gemini button (the spark) at the top right. If it doesn’t appear, note what you see and ask your administrator which services are enabled.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Creer que conectar Gmail o Drive hace públicos tus archivos: solo Gemini los consulta para responderte a ti.', en: 'Believing that connecting Gmail or Drive makes your files public: only Gemini looks them up to answer you.' },
    { es: 'Asumir que Gemini dentro de Docs o Gmail es gratuito en todas las cuentas educativas.', en: 'Assuming Gemini inside Docs or Gmail is free on all education accounts.' },
    { es: 'Concluir que una función «no existe» cuando en realidad el administrador no la activó.', en: 'Concluding a feature “doesn’t exist” when the administrator simply hasn’t enabled it.' }
  ],
  ideas: [
    { es: 'Dos puertas: el Gemini app (apps conectadas, @) y el panel «Ask Gemini» dentro de cada app.', en: 'Two entry points: the Gemini app (connected apps, @) and the “Ask Gemini” panel inside each app.' },
    { es: 'Gratuito en Education: Gemini app, Gemini in Classroom, Gemini Notebook.', en: 'Free in Education: Gemini app, Gemini in Classroom, Gemini Notebook.' },
    { es: 'Con AI Pro for Education: Gemini dentro de Gmail, Docs, Forms, Vids, Meet y Drive.', en: 'With AI Pro for Education: Gemini inside Gmail, Docs, Forms, Vids, Meet and Drive.' }
  ],
  quiz: [
    { d: 1,
      q: { es: 'Quieres que Gemini combine información de tus correos y de tus archivos de Drive en una sola respuesta. ¿Qué usas?', en: 'You want Gemini to combine information from your emails and Drive files into one answer. What do you use?' },
      o: [
        { ok: true, t: { es: 'El Gemini app con apps conectadas (@)', en: 'The Gemini app with connected apps (@)' }, why: { es: 'Correcto: el chat puede consultar varias apps a la vez.', en: 'Correct: the chat can query several apps at once.' } },
        { t: { es: 'El panel de Gemini dentro de un Doc', en: 'The Gemini side panel inside a Google Doc' }, why: { es: 'Trabaja sobre todo con el archivo abierto, no combina tus correos.', en: 'It mainly works on the open file, not combining your emails.' } },
        { t: { es: 'Nano Banana con una captura', en: 'Nano Banana with a screenshot of both apps' }, why: { es: 'Nano Banana es para imágenes.', en: 'Nano Banana is for images.' } },
        { t: { es: 'Guided Learning en modo tutor', en: 'Guided Learning in step-by-step tutor mode' }, why: { es: 'Guided Learning es para aprender, no para buscar en tus apps.', en: 'Guided Learning is for learning, not searching your apps.' } }
      ] },
    { d: 1,
      q: { es: 'En una cuenta Workspace for Education **sin** complementos de pago, ¿qué tienes disponible?', en: 'On a Workspace for Education account **without** paid add-ons, what do you have?' },
      o: [
        { t: { es: 'Gemini dentro de Gmail, Docs y Forms', en: 'Gemini built into Gmail, Docs and Forms' }, why: { es: 'Eso requiere Google AI Pro for Education.', en: 'That requires Google AI Pro for Education.' } },
        { t: { es: 'Nada de Gemini hasta que pagues', en: 'No Gemini at all until you pay for it' }, why: { es: 'Falso: hay funciones incluidas sin costo.', en: 'False: some features are included at no cost.' } },
        { ok: true, t: { es: 'Gemini app, Classroom y Gemini Notebook', en: 'Gemini app, Classroom and Gemini Notebook' }, why: { es: 'Correcto: están incluidos en Workspace for Education.', en: 'Correct: they are included in Workspace for Education.' } },
        { t: { es: 'Solo Gemini Live por voz', en: 'Only Gemini Live, by voice, nothing else' }, why: { es: 'Hay mucho más que Gemini Live incluido.', en: 'Much more than Gemini Live is included.' } }
      ] },
    { d: 1,
      q: { es: 'Un colega no ve Gemini Notebook en su cuenta institucional. ¿Cuál es la causa más probable?', en: 'A colleague can’t see Gemini Notebook on their school account. What is the most likely cause?' },
      o: [
        { t: { es: 'Gemini Notebook solo funciona en el móvil', en: 'Gemini Notebook only works on mobile' }, why: { es: 'Funciona en la web (notebooklm.google) y en móvil.', en: 'It works on the web (notebooklm.google) and mobile.' } },
        { ok: true, t: { es: 'El administrador no activó el servicio', en: 'The admin hasn’t enabled the service' }, why: { es: 'Correcto: los servicios se habilitan desde la consola de administración.', en: 'Correct: services are enabled from the admin console.' } },
        { t: { es: 'Su navegador está en otro idioma', en: 'Their browser is in another language' }, why: { es: 'El idioma no oculta servicios.', en: 'Language doesn’t hide services.' } },
        { t: { es: 'Necesita crear un Gem primero', en: 'They need to create a Gem first' }, why: { es: 'No hay esa dependencia entre Gems y Notebook.', en: 'There is no such dependency between Gems and Notebook.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google — Ayuda de Gemini: Personal Intelligence y apps conectadas', url: 'https://support.google.com/gemini/answer/16598406' },
    { t: 'Google Blog — New connected apps in Gemini', url: 'https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/' },
    { t: 'Google for Education — Gemini for Education', url: 'https://edu.google.com/intl/ALL_us/ai/gemini-for-education/' }
  ]
};
