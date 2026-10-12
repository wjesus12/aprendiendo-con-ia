/* Módulo 12 · Canvas II: apps, quizzes, slides y páginas web (incluye los laboratorios de la capacitación) */
GDC.MOD['12'] = {
  min: 20,
  intro: {
    es: 'Canvas no solo escribe documentos: también crea **presentaciones, quizzes, infografías, aplicaciones y páginas web** a partir de tus materiales. En este módulo pasarás de la intención pedagógica al recurso, con dos laboratorios completos y la forma de publicar lo que crees.',
    en: 'Canvas doesn’t just write documents: it also creates **presentations, quizzes, infographics, apps and web pages** from your materials. In this module you will go from teaching intent to resource, with two full labs and a way to publish what you create.'
  },
  objetivos: [
    { es: 'Transformar un documento en slides, quiz, infografía, página web o Audio Overview.', en: 'Turn a document into slides, a quiz, an infographic, a web page or an Audio Overview.' },
    { es: 'Combinar Canvas con Gemini Notebook y con Gems para crear recursos con tus fuentes.', en: 'Combine Canvas with Gemini Notebook and Gems to create resources from your sources.' },
    { es: 'Conocer cómo guardar (GitHub) y publicar (Netlify) una página creada con Canvas.', en: 'Know how to save (GitHub) and publish (Netlify) a page created with Canvas.' }
  ],
  secciones: [
    {
      h: { es: 'De un documento a muchos formatos', en: 'From one document to many formats' },
      b: [
        { p: { es: 'Cuando ya tienes un documento en Canvas, puedes pedirle que lo convierta en otro formato. Así un mismo contenido llega de varias formas a tus estudiantes.',
               en: 'Once you have a document in Canvas, you can ask it to turn it into another format. That way the same content reaches your students in several ways.' } },
        { table: {
          head: [{ es: 'Formato', en: 'Format' }, { es: 'Uso en el aula', en: 'Classroom use' }],
          rows: [
            [{ es: 'Slides (presentación)', en: 'Slides (presentation)' }, { es: 'Exponer la clase; se exporta a Google Slides o PDF', en: 'Present the lesson; exports to Google Slides or PDF' }],
            [{ es: 'Quiz interactivo', en: 'Interactive quiz' }, { es: 'Autoevaluación con retroalimentación inmediata', en: 'Self-assessment with instant feedback' }],
            [{ es: 'Infografía', en: 'Infographic' }, { es: 'Resumen visual de un tema', en: 'Visual summary of a topic' }],
            [{ es: 'Página web', en: 'Web page' }, { es: 'Un sitio de una página para el curso', en: 'A one-page course site' }],
            [{ es: 'Audio Overview', en: 'Audio Overview' }, { es: 'Repasar escuchando, como un pódcast', en: 'Review by listening, like a podcast' }],
            [{ es: 'App', en: 'App' }, { es: 'Simuladores, juegos de repaso, calculadoras', en: 'Simulators, review games, calculators' }]
          ]
        } },
        { note: { es: 'Algunas funciones tienen restricción de edad: crear a partir de un documento (slides, quizzes, infografías, páginas web, Audio Overviews) y añadir funciones de IA a una app no están disponibles para menores de 18 años.',
                  en: 'Some features have age restrictions: creating from a document (slides, quizzes, infographics, web pages, Audio Overviews) and adding AI features to an app aren’t available to users under 18.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Laboratorio 1: presentación con Canvas + Gemini Notebook', en: 'Lab 1: presentation with Canvas + Gemini Notebook' },
      b: [
        { p: { es: '**Reto:** convertir tus materiales en una presentación virtual usando solo tus fuentes.', en: '**Challenge:** turn your materials into a virtual presentation using only your sources.' } },
        { steps: [
          { es: 'Entra a **Gemini Notebook** y crea un cuaderno nuevo.', en: 'Open **Gemini Notebook** and create a new notebook.' },
          { es: 'Sube tus recursos: temario, artículo, lecturas.', en: 'Upload your resources: syllabus, article, readings.' },
          { es: 'Ve a **Gemini** y conecta ese notebook como fuente del chat.', en: 'Go to **Gemini** and connect that notebook as the chat’s source.' },
          { es: 'Activa **Canvas** con la conexión al notebook.', en: 'Turn on **Canvas** with the notebook connected.' },
          { es: 'Usa el prompt estructurado.', en: 'Use the structured prompt.' }
        ] },
        { prompt: { es: 'Propósito: diseñar una presentación virtual clara y dinámica para la clase de [semana o tema], usando únicamente los documentos del notebook.\nAudiencia: estudiantes de [carrera y ciclo], con conocimientos [básicos/intermedios] del tema.\nFormato: presentación de 10 diapositivas. Cada una con título, 3-4 ideas clave, 1 interacción rápida (pregunta, caso o votación) y 1 sugerencia visual. La última, con 3 preguntas de autoevaluación.\nLímites: basa el contenido solo en mis documentos. Si alguno es un modelo con datos simulados, no lo uses como evidencia. Marca con [VERIFICAR] lo que requiera validación académica o adaptación al contexto local. No inventes datos.',
                    en: 'Purpose: design a clear, engaging virtual presentation for the [week or topic] class, using only the notebook’s documents.\nAudience: [program and year] students, with [basic/intermediate] knowledge of the topic.\nFormat: a 10-slide presentation. Each with a title, 3-4 key ideas, 1 quick interaction (question, case or poll) and 1 visual suggestion. The last one with 3 self-assessment questions.\nLimits: base the content only on my documents. If any is a model with simulated data, don’t use it as evidence. Mark with [VERIFY] anything needing academic validation or local adaptation. Don’t invent data.' },
          label: { es: '✦ Prompt estructurado: presentación para mi clase', en: '✦ Structured prompt: presentation for my class' } }
      ]
    },
    {
      h: { es: 'Laboratorio 2: blog informativo con Canvas + Gems', en: 'Lab 2: informative blog with Canvas + Gems' },
      b: [
        { p: { es: '**Pregunta para pensar:** si tuvieras el poder de crear un portal web, ¿para qué lo usarías en tu curso? **Reto:** crear un blog informativo de una página con tus materiales, donde los estudiantes registren sus consultas.',
               en: '**Question to think about:** if you could create a web portal, what would you use it for in your course? **Challenge:** create a one-page informative blog from your materials, where students can log their questions.' } },
        { prompt: { es: 'Propósito: crear un blog informativo de una página sobre [curso], usando solo el documento adjunto (brief o sílabo), donde los estudiantes registren sus consultas.\nAudiencia: estudiantes de [carrera y ciclo].\nFormato: un único archivo HTML con CSS y JavaScript integrados, sin librerías externas, con: 1) título con resumen, secciones con resultados de aprendizaje, contenidos y evaluación tomados del documento, y pie con contacto docente; 2) diseño legible, con buen contraste y adaptable a celular; 3) índice de navegación, tres preguntas de autoevaluación desplegables y un formulario «Registra tu consulta» (nombre, código, tema y consulta); 4) cada consulta se guarda en una hoja de Google Sheets mediante Apps Script.\nLímites: basa el contenido solo en mis materiales. No inventes datos ni citas: marca con [VERIFICAR] lo que no esté en ellos. No pidas datos personales sensibles y garantiza accesibilidad visual. Dame también el paso a paso para crear la hoja y conectarla con Apps Script.',
                    en: 'Purpose: create a one-page informative blog about [course], using only the attached document (brief or syllabus), where students log their questions.\nAudience: [program and year] students.\nFormat: a single HTML file with embedded CSS and JavaScript, no external libraries, with: 1) title with summary, sections with learning outcomes, content and assessment taken from the document, and a footer with teacher contact; 2) readable, high-contrast, mobile-friendly design; 3) navigation index, three expandable self-check questions and a “Log your question” form (name, ID, topic and question); 4) each question is saved to a Google Sheets sheet via Apps Script.\nLimits: base the content only on my materials. Don’t invent data or quotes: mark with [VERIFY] anything not in them. Don’t request sensitive personal data and ensure visual accessibility. Also give me the step-by-step to create the sheet and connect it with Apps Script.' },
          label: { es: '✦ Prompt estructurado: blog informativo para mi curso', en: '✦ Structured prompt: informative blog for my course' } },
        { table: {
          head: [{ es: 'Estilo visual sugerido', en: 'Suggested visual style' }, { es: 'Paleta', en: 'Palette' }],
          rows: [
            [{ es: 'A · Académico sobrio', en: 'A · Sober academic' }, { es: 'Fondo #FFFFFF · texto #121212 · acento azul #1F3A5F', en: 'Background #FFFFFF · text #121212 · blue accent #1F3A5F' }],
            [{ es: 'B · Editorial', en: 'B · Editorial' }, { es: 'Fondo #F4F4F6 · texto #121212 · acento naranja #FF5500', en: 'Background #F4F4F6 · text #121212 · orange accent #FF5500' }],
            [{ es: 'C · Minimalista oscuro', en: 'C · Minimal dark' }, { es: 'Fondo #121212 · texto #F4F4F6 · acento celeste #4FC3F7', en: 'Background #121212 · text #F4F4F6 · light-blue accent #4FC3F7' }]
          ]
        } },
        { note: { es: 'Si creas un **Gem** con las reglas del blog (estructura, estilos, límites), podrás generar un blog para cada curso con un pedido corto (módulo 14).',
                  en: 'If you create a **Gem** with the blog’s rules (structure, styles, limits), you can generate a blog for each course with a short request (module 14).' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Guardar y publicar: GitHub y Netlify', en: 'Save and publish: GitHub and Netlify' },
      b: [
        { table: {
          head: [{ es: 'Aspecto', en: 'Aspect' }, { es: 'GitHub', en: 'GitHub' }, { es: 'Netlify', en: 'Netlify' }],
          rows: [
            [{ es: 'Qué es', en: 'What it is' }, { es: 'Plataforma para guardar proyectos y su historial de cambios', en: 'A platform to store projects and their change history' }, { es: 'Plataforma para publicar sitios web con un enlace público', en: 'A platform to publish websites with a public link' }],
            [{ es: 'Qué hace', en: 'What it does' }, { es: 'Conserva cada versión y permite compartirla', en: 'Keeps every version and lets you share it' }, { es: 'Toma tu archivo HTML y lo pone en línea, sin servidores', en: 'Takes your HTML file and puts it online, no servers' }],
            [{ es: 'Para ti', en: 'For you' }, { es: 'Un respaldo seguro: vuelves a una versión anterior', en: 'A safe backup: go back to an earlier version' }, { es: 'Tu página disponible desde cualquier celular o computadora', en: 'Your page available from any phone or computer' }]
          ]
        } },
        { note: { es: 'Los enlaces públicos de una app de Canvas permiten que cualquiera vea y edite los datos de esa app. Para materiales de curso con datos de estudiantes, prefiere publicar con control (por ejemplo, un archivo propio en Netlify) y no recojas datos sensibles.',
                  en: 'Public links to a Canvas app let anyone view and edit that app’s data. For course materials with student data, prefer controlled publishing (for example, your own file on Netlify) and don’t collect sensitive data.' }, kind: 'warn' }
      ]
    }
  ],
  trampas: [
    { es: 'Pedir una app compleja en un solo prompt y frustrarse: construye por partes y prueba cada parte.', en: 'Asking for a complex app in one prompt and getting frustrated: build in parts and test each one.' },
    { es: 'Usar documentos con datos simulados como si fueran evidencia real.', en: 'Using documents with simulated data as if they were real evidence.' },
    { es: 'Recoger datos personales sensibles en un formulario creado con IA sin revisar cómo se guardan.', en: 'Collecting sensitive personal data in an AI-built form without checking how it is stored.' }
  ],
  ideas: [
    { es: 'Un documento en Canvas puede convertirse en slides, quiz, infografía, web, app o Audio Overview.', en: 'A Canvas document can become slides, a quiz, an infographic, a web page, an app or an Audio Overview.' },
    { es: 'Canvas + Gemini Notebook = recursos basados solo en tus fuentes.', en: 'Canvas + Gemini Notebook = resources based only on your sources.' },
    { es: 'Canvas + Gems = recursos repetibles con tus propias reglas.', en: 'Canvas + Gems = repeatable resources with your own rules.' },
    { es: 'GitHub guarda versiones; Netlify publica con un enlace.', en: 'GitHub keeps versions; Netlify publishes with a link.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Quieres una presentación de clase que use **solo** tus lecturas del curso. ¿Qué combinación es la más adecuada?', en: 'You want a class presentation that uses **only** your course readings. Which combination fits best?' },
      o: [
        { t: { es: 'Deep Research y luego Nano Banana', en: 'Deep Research and then Nano Banana' },
          why: { es: 'Deep Research busca en la web, no solo en tus lecturas.', en: 'Deep Research searches the web, not only your readings.' } },
        { ok: true, t: { es: 'Gemini Notebook conectado a Canvas', en: 'Gemini Notebook connected to Canvas' },
          why: { es: 'Correcto: el notebook aporta tus fuentes y Canvas construye las slides.', en: 'Correct: the notebook provides your sources and Canvas builds the slides.' } },
        { t: { es: 'Un chat normal sin adjuntar nada', en: 'A normal chat with nothing attached' },
          why: { es: 'Sin tus fuentes, Gemini usará conocimiento general.', en: 'Without your sources, Gemini will use general knowledge.' } },
        { t: { es: 'Guided Learning con preguntas', en: 'Guided Learning with questions' },
          why: { es: 'Guided Learning enseña paso a paso; no produce presentaciones.', en: 'Guided Learning teaches step by step; it doesn’t produce presentations.' } }
      ] },
    { d: 2,
      q: { es: 'Creaste un blog con Canvas. ¿Qué servicio lo pone en línea con un enlace público, sin servidores?', en: 'You created a blog with Canvas. Which service puts it online with a public link, no servers needed?' },
      o: [
        { t: { es: 'GitHub, porque guarda el historial', en: 'GitHub, because it keeps the history' },
          why: { es: 'GitHub guarda y versiona; la publicación del ejemplo la hace Netlify.', en: 'GitHub stores and versions; in this example Netlify does the publishing.' } },
        { t: { es: 'Google Sheets con Apps Script', en: 'Google Sheets with Apps Script' },
          why: { es: 'Sheets guarda las consultas del formulario; no aloja la página.', en: 'Sheets stores the form’s questions; it doesn’t host the page.' } },
        { ok: true, t: { es: 'Netlify, que publica el archivo HTML', en: 'Netlify, which publishes the HTML file' },
          why: { es: 'Correcto: Netlify toma tu HTML y lo pone en línea.', en: 'Correct: Netlify takes your HTML and puts it online.' } },
        { t: { es: 'Gemini Notebook, que comparte enlaces', en: 'Gemini Notebook, which shares links' },
          why: { es: 'Gemini Notebook organiza fuentes; no publica sitios web.', en: 'Gemini Notebook organizes sources; it doesn’t publish websites.' } }
      ] },
    { d: 3,
      q: { es: 'Un artículo de tu carpeta es un **modelo con datos simulados**. ¿Qué instrucción añades en el prompt?', en: 'One article in your folder is a **model with simulated data**. Which instruction do you add to the prompt?' },
      o: [
        { t: { es: '«Usa todos los datos para que sea más completo»', en: '“Use all the data so it is more complete”' },
          why: { es: 'Mezclarías datos simulados con evidencia real.', en: 'You would mix simulated data with real evidence.' } },
        { ok: true, t: { es: '«No uses ese artículo como evidencia»', en: '“Don’t use that article as evidence”' },
          why: { es: 'Correcto: los límites evitan presentar datos simulados como reales.', en: 'Correct: limits prevent presenting simulated data as real.' } },
        { t: { es: '«Cita ese artículo en cada diapositiva»', en: '“Cite that article on every slide”' },
          why: { es: 'Le darías autoridad a datos que no son reales.', en: 'You would give authority to data that isn’t real.' } },
        { t: { es: '«Busca datos parecidos en la web»', en: '“Find similar data on the web”' },
          why: { es: 'Saca el recurso de tus fuentes y no resuelve el problema.', en: 'It takes the resource away from your sources and doesn’t solve the problem.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google — Ayuda de Gemini: Canvas en Gemini Apps', url: 'https://support.google.com/gemini/answer/16047321?hl=es' },
    { t: 'Google Workspace Updates — Notebooks como fuente en el Gemini app', url: 'https://workspaceupdates.googleblog.com/2026/01/take-notebooks-further-notebooklm-gemini.html' },
    { t: 'Netlify — Documentación', url: 'https://docs.netlify.com/' },
    { t: 'GitHub — Documentación', url: 'https://docs.github.com/es' }
  ]
};
