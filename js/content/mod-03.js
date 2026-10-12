/* Módulo 03 · Tu cuenta y tu primer chat en el Gemini app */
GDC.MOD['03'] = {
  min: 14,
  intro: {
    es: 'Hora de abrir Gemini. Verás dónde se usa, qué cuenta conviene para tu trabajo docente, cómo se lee la pantalla y cómo tener tu primera conversación útil en menos de cinco minutos.',
    en: 'Time to open Gemini. You will see where it runs, which account suits your teaching work, how to read the screen and how to have your first useful conversation in under five minutes.'
  },
  objetivos: [
    { es: 'Entrar al Gemini app desde la web, el móvil o el escritorio.', en: 'Open the Gemini app from the web, mobile or desktop.' },
    { es: 'Reconocer las partes de la interfaz: caja de prompt, botón +, selector de modelo, historial y ajustes.', en: 'Recognize the parts of the interface: prompt box, + button, model picker, history and settings.' },
    { es: 'Distinguir una cuenta personal de una cuenta de Google Workspace for Education.', en: 'Tell a personal account apart from a Google Workspace for Education account.' }
  ],
  secciones: [
    {
      h: { es: 'Dónde está Gemini', en: 'Where Gemini lives' },
      b: [
        { table: {
          head: [{ es: 'Dónde', en: 'Where' }, { es: 'Cómo entrar', en: 'How to open it' }],
          rows: [
            [{ es: 'Web', en: 'Web' }, { es: 'gemini.google.com, con tu cuenta de Google', en: 'gemini.google.com, with your Google account' }],
            [{ es: 'Móvil', en: 'Mobile' }, { es: 'App Gemini para Android y para iPhone/iPad', en: 'Gemini app for Android and iPhone/iPad' }],
            [{ es: 'Escritorio', en: 'Desktop' }, { es: 'App para Windows (se abre con Alt + Espacio) y app para macOS', en: 'App for Windows (opens with Alt + Space) and app for macOS' }],
            [{ es: 'Dentro de Google Workspace', en: 'Inside Google Workspace' }, { es: 'Panel «Ask Gemini» en Gmail, Docs, Sheets, Slides y Drive (según tu plan)', en: '“Ask Gemini” panel in Gmail, Docs, Sheets, Slides and Drive (depending on your plan)' }]
          ]
        } },
        { note: { es: 'La guía del examen pide «navegar a una herramienta de Gemini o NotebookLM» (objetivo 2.1.1). Practica entrar a gemini.google.com y a notebooklm.google, que es donde vive Gemini Notebook.',
                  en: 'The exam guide asks you to “navigate to a Gemini or NotebookLM tool” (objective 2.1.1). Practise opening gemini.google.com and notebooklm.google, which is where Gemini Notebook lives.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: '¿Con qué cuenta entro?', en: 'Which account should I use?' },
      b: [
        { p: { es: 'Gemini funciona con una cuenta personal de Google (@gmail.com) y con cuentas de organizaciones. Si tu institución usa **Google Workspace for Education**, tu cuenta institucional te da **Gemini for Education**, incluido sin costo, con protección de datos de nivel empresarial.',
               en: 'Gemini works with a personal Google account (@gmail.com) and with organization accounts. If your institution uses **Google Workspace for Education**, your school account gives you **Gemini for Education**, included at no cost, with enterprise-grade data protection.' } },
        { table: {
          head: [{ es: 'Aspecto', en: 'Aspect' }, { es: 'Cuenta personal', en: 'Personal account' }, { es: 'Cuenta Workspace for Education', en: 'Workspace for Education account' }],
          rows: [
            [{ es: 'Quién la controla', en: 'Who controls it' }, { es: 'Tú', en: 'You' }, { es: 'El administrador de tu institución', en: 'Your institution’s administrator' }],
            [{ es: 'Uso de tus datos', en: 'Use of your data' }, { es: 'Según la configuración de actividad de tu cuenta', en: 'According to your account’s activity settings' }, { es: 'No los revisan personas ni se usan para entrenar modelos', en: 'Not reviewed by humans or used to train models' }],
            [{ es: 'Ideal para', en: 'Best for' }, { es: 'Uso personal', en: 'Personal use' }, { es: 'Trabajo con materiales del curso', en: 'Work with course materials' }]
          ]
        } },
        { note: { es: 'Si una función no te aparece con tu cuenta institucional, puede que el administrador no la haya habilitado. No es un error tuyo.',
                  en: 'If a feature doesn’t show up with your school account, the administrator may not have enabled it. It isn’t your mistake.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Recorrido por la pantalla', en: 'A tour of the screen' },
      b: [
        { table: {
          head: [{ es: 'Elemento', en: 'Element' }, { es: 'Para qué sirve', en: 'What it is for' }],
          rows: [
            [{ es: 'Caja de prompt', en: 'Prompt box' }, { es: 'Escribes (o dictas con el micrófono) tu pedido', en: 'You type (or dictate with the mic) your request' }],
            [{ es: 'Botón +', en: '+ button' }, { es: 'Adjuntar archivos, fotos o Drive y elegir herramientas como Canvas o Deep Research', en: 'Attach files, photos or Drive and pick tools like Canvas or Deep Research' }],
            [{ es: 'Selector de modelo', en: 'Model picker' }, { es: 'Elegir el modelo o dejarlo en Auto (módulo 04)', en: 'Choose the model or leave it on Auto (module 04)' }],
            [{ es: 'Nuevo chat e historial', en: 'New chat and history' }, { es: 'Empezar de cero o volver a una conversación anterior', en: 'Start fresh or return to an earlier conversation' }],
            [{ es: 'Gems / Explorar', en: 'Gems / Explore' }, { es: 'Tus asistentes personalizados (módulo 14)', en: 'Your custom assistants (module 14)' }],
            [{ es: 'Ajustes y actividad', en: 'Settings and activity' }, { es: 'Tema, idioma, apps conectadas y si se guarda tu actividad', en: 'Theme, language, connected apps and whether your activity is saved' }]
          ]
        } },
        { p: { es: 'Debajo de cada respuesta hay acciones: copiar, compartir, exportar (por ejemplo a Docs), dar feedback y volver a generar. También puedes **editar tu prompt** y reenviarlo si te faltó contexto.',
               en: 'Under each answer there are actions: copy, share, export (for example to Docs), give feedback and regenerate. You can also **edit your prompt** and resend it if you left out context.' } }
      ]
    },
    {
      h: { es: 'Tu primer chat útil', en: 'Your first useful chat' },
      b: [
        { steps: [
          { es: 'Entra a gemini.google.com con tu cuenta.', en: 'Go to gemini.google.com with your account.' },
          { es: 'Piensa en una tarea real de esta semana (no una prueba genérica).', en: 'Think of a real task for this week (not a generic test).' },
          { es: 'Escribe el pedido con contexto: para quién, qué necesitas y en qué formato.', en: 'Write the request with context: who it is for, what you need and in what format.' },
          { es: 'Lee la respuesta con ojo crítico y pide un ajuste concreto.', en: 'Read the answer critically and ask for a specific adjustment.' },
          { es: 'Copia o exporta el resultado y revísalo antes de usarlo.', en: 'Copy or export the result and review it before using it.' }
        ] },
        { prompt: { es: 'Soy docente de [curso] con estudiantes de [nivel]. Redacta un mensaje breve y cálido de bienvenida para la primera semana de clases. Incluye qué aprenderán, cómo me pueden contactar y una pregunta para conocerlos. Máximo 120 palabras.',
                    en: 'I teach [course] to [level] students. Write a short, warm welcome message for the first week of class. Include what they will learn, how they can contact me and a question to get to know them. Maximum 120 words.' },
          label: { es: '✦ Prompt para tu primer chat', en: '✦ Prompt for your first chat' } }
      ]
    }
  ],
  trampas: [
    { es: 'Usar la cuenta personal para materiales con datos de estudiantes cuando tienes una cuenta institucional protegida.', en: 'Using your personal account for materials with student data when you have a protected school account.' },
    { es: 'Empezar con un prompt de prueba genérico («hola, ¿qué sabes hacer?») en lugar de una tarea real.', en: 'Starting with a generic test prompt (“hi, what can you do?”) instead of a real task.' },
    { es: 'Abrir un chat nuevo para cada corrección: mejor refina en la misma conversación.', en: 'Opening a new chat for every correction: refine within the same conversation instead.' }
  ],
  ideas: [
    { es: 'Gemini está en la web, el móvil, el escritorio y dentro de Workspace.', en: 'Gemini is on the web, mobile, desktop and inside Workspace.' },
    { es: 'Con una cuenta de Workspace for Education, tus datos no se usan para entrenar modelos.', en: 'With a Workspace for Education account, your data isn’t used to train models.' },
    { es: 'El botón + es la puerta a archivos y herramientas como Canvas o Deep Research.', en: 'The + button is the door to files and tools like Canvas or Deep Research.' }
  ],
  quiz: [
    { d: 1,
      q: { es: 'Vas a trabajar con la lista de notas de tu curso. ¿Qué cuenta conviene usar en Gemini?', en: 'You are going to work with your course’s grade list. Which account should you use in Gemini?' },
      o: [
        { ok: true, t: { es: 'Tu cuenta institucional de Workspace for Education', en: 'Your Workspace for Education school account' },
          why: { es: 'Correcto: ofrece protección de datos de nivel empresarial; aun así, minimiza los datos personales.', en: 'Correct: it offers enterprise-grade data protection; even so, minimize personal data.' } },
        { t: { es: 'Tu cuenta personal, porque responde más rápido', en: 'Your personal account, because it answers faster' },
          why: { es: 'La velocidad no es el criterio; con datos de estudiantes prima la protección.', en: 'Speed isn’t the criterion; with student data, protection comes first.' } },
        { t: { es: 'Cualquiera: las dos tratan los datos igual', en: 'Either: both treat data the same way' },
          why: { es: 'No es así: la cuenta educativa tiene compromisos de privacidad propios.', en: 'Not so: the education account has its own privacy commitments.' } },
        { t: { es: 'Una cuenta personal nueva creada solo para eso', en: 'A brand-new personal account just for that' },
          why: { es: 'Una cuenta personal nueva no añade las protecciones de la cuenta institucional.', en: 'A new personal account doesn’t add the protections of the school account.' } }
      ] },
    { d: 2,
      q: { es: '¿Dónde eliges herramientas como Canvas o Deep Research dentro del Gemini app?', en: 'Where do you choose tools like Canvas or Deep Research inside the Gemini app?' },
      o: [
        { t: { es: 'En el historial de conversaciones', en: 'In the conversation history' },
          why: { es: 'El historial sirve para volver a chats anteriores, no para elegir herramientas.', en: 'History is for returning to earlier chats, not for choosing tools.' } },
        { t: { es: 'En los ajustes de la cuenta de Google', en: 'In the Google account settings' },
          why: { es: 'Los ajustes de la cuenta no activan herramientas dentro de un chat.', en: 'Account settings don’t activate tools inside a chat.' } },
        { ok: true, t: { es: 'Desde el botón + junto a la caja de prompt', en: 'From the + button next to the prompt box' },
          why: { es: 'Correcto: ahí adjuntas archivos y eliges herramientas para ese chat.', en: 'Correct: that is where you attach files and choose tools for that chat.' } },
        { t: { es: 'Escribiendo su nombre en la barra del navegador', en: 'Typing its name in the browser address bar' },
          why: { es: 'Las herramientas se activan dentro del app, no desde la barra de direcciones.', en: 'Tools are activated inside the app, not from the address bar.' } }
      ] },
    { d: 2,
      q: { es: 'La respuesta salió bien, pero olvidaste decir que era para niños de 8 años. ¿Qué es lo más eficiente?', en: 'The answer came out fine, but you forgot to say it was for 8-year-olds. What is most efficient?' },
      o: [
        { t: { es: 'Cerrar el chat y empezar uno nuevo desde cero', en: 'Close the chat and start a new one from scratch' },
          why: { es: 'Pierdes el trabajo hecho; no hace falta empezar de cero.', en: 'You lose the work done; there is no need to start over.' } },
        { ok: true, t: { es: 'Pedir en el mismo chat que lo adapte a esa edad', en: 'Ask in the same chat to adapt it to that age' },
          why: { es: 'Correcto: también puedes editar tu prompt original y reenviarlo.', en: 'Correct: you can also edit your original prompt and resend it.' } },
        { t: { es: 'Adaptarlo tú a mano palabra por palabra', en: 'Adapt it yourself by hand, word by word' },
          why: { es: 'Es posible, pero desaprovecha la herramienta para una tarea sencilla.', en: 'Possible, but it wastes the tool on a simple task.' } },
        { t: { es: 'Cambiar de modelo para que lo entienda', en: 'Switch models so it understands' },
          why: { es: 'El problema es la falta de contexto, no el modelo elegido.', en: 'The problem is missing context, not the chosen model.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google — Gemini Apps Help', url: 'https://support.google.com/gemini/' },
    { t: 'Google for Education — Gemini for Education', url: 'https://edu.google.com/intl/ALL_us/ai/gemini-for-education/' },
    { t: 'Gemini — Release notes (apps de escritorio)', url: 'https://gemini.google/release-notes/' }
  ]
};
