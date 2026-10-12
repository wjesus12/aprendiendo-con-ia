/* Módulo 14 · Gems y la transición a skills */
GDC.MOD['14'] = {
  min: 15,
  intro: {
    es: 'Si cada semana escribes el mismo tipo de prompt, es hora de crear un **Gem**: un asistente a medida con nombre, objetivo, reglas y archivos de referencia. También verás qué son los **skills**, que están reemplazando a los Gems, y qué significa ese cambio para las cuentas educativas.',
    en: 'If you write the same kind of prompt every week, it is time to create a **Gem**: a custom assistant with a name, goal, rules and reference files. You will also see what **skills** are, which are replacing Gems, and what that change means for education accounts.'
  },
  objetivos: [
    { es: 'Diseñar un Gem para una necesidad recurrente del aula.', en: 'Design a Gem for a recurring classroom need.' },
    { es: 'Escribir instrucciones claras y añadir conocimiento (archivos).', en: 'Write clear instructions and add knowledge (files).' },
    { es: 'Explicar la transición de Gems a skills y sus fechas para Education.', en: 'Explain the move from Gems to skills and its dates for Education.' }
  ],
  secciones: [
    {
      h: { es: 'Qué es un Gem', en: 'What a Gem is' },
      b: [
        { p: { es: 'Un **Gem** es una versión personalizada de Gemini que recuerda siempre las mismas instrucciones. En lugar de explicar tu contexto en cada chat, lo defines una vez y vuelves al Gem cada vez que repites la tarea.', en: 'A **Gem** is a customized version of Gemini that always remembers the same instructions. Instead of explaining your context in every chat, you define it once and return to the Gem every time you repeat the task.' } },
        { flow: [
          { es: 'Define su función: nombre, objetivo y reglas', en: 'Define its role: name, goal and rules' },
          { es: 'Agrega conocimiento: archivos de referencia', en: 'Add knowledge: reference files' },
          { es: 'Reutiliza el asistente en cada tarea repetida', en: 'Reuse the assistant for each repeated task' }
        ] },
        { table: {
          head: [{ es: 'Necesidad recurrente', en: 'Recurring need' }, { es: 'Gem posible', en: 'Possible Gem' }],
          rows: [
            [{ es: 'Iniciar cada clase con una actividad breve', en: 'Start each class with a short activity' }, { es: '«Bell-ringers de Historia»', en: '“History bell-ringers”' }],
            [{ es: 'Dar retroalimentación con un formato fijo', en: 'Give feedback in a fixed format' }, { es: '«Marco de feedback: logro, mejora, siguiente paso»', en: '“Feedback frame: strength, improvement, next step”' }],
            [{ es: 'Escribir comunicados a familias', en: 'Write notices to families' }, { es: '«Comunicados con el tono de mi colegio»', en: '“Notices in my school’s tone”' }],
            [{ es: 'Crear un blog para cada curso', en: 'Create a blog for each course' }, { es: '«Generador de blogs de curso» (módulo 12)', en: '“Course blog generator” (module 12)' }]
          ]
        } },
        { note: { es: 'La guía pide «diseñar un Gem para una necesidad recurrente del aula (por ejemplo, actividades bell-ringer o marcos de retroalimentación)» (2.3.3) e «identificar usos educativos del Gemini app, Gems y NotebookLM» (1.1.4).',
                  en: 'The guide asks you to “design a Gem to address a specific, recurring classroom need (e.g., bell-ringer activities, quick feedback frames)” (2.3.3) and to “identify educational use cases of the Gemini app, Gems and NotebookLM” (1.1.4).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Crear un Gem paso a paso', en: 'Creating a Gem step by step' },
      b: [
        { steps: [
          { es: 'En gemini.google.com, abre **Gems** (o Explorar Gems) y elige **Nuevo Gem**.', en: 'At gemini.google.com, open **Gems** (or Explore Gems) and choose **New Gem**.' },
          { es: 'Ponle un **nombre** claro.', en: 'Give it a clear **name**.' },
          { es: 'Escribe las **instrucciones**: rol, tarea, audiencia, formato y límites (PARTS + Límites, módulo 06). Puedes pedir a Gemini que te ayude a reescribirlas.', en: 'Write the **instructions**: role, task, audience, format and limits (PARTS + Limits, module 06). You can ask Gemini to help rewrite them.' },
          { es: 'Añade **conocimiento**: archivos de referencia como tu sílabo o una rúbrica (opcional).', en: 'Add **knowledge**: reference files such as your syllabus or a rubric (optional).' },
          { es: 'Prueba el Gem en la vista previa con un pedido real.', en: 'Test the Gem in the preview with a real request.' },
          { es: 'Pulsa **Guardar**: la vista previa no guarda sola.', en: 'Press **Save**: the preview doesn’t save on its own.' }
        ] },
        { prompt: { es: 'Eres un asistente de retroalimentación para docentes de secundaria.\nTarea: cuando te pegue un trabajo de un estudiante, da retroalimentación con este formato: 1) un logro concreto, 2) una mejora prioritaria con un ejemplo, 3) un siguiente paso alcanzable.\nAudiencia: estudiantes de 13 a 16 años; tono cercano y respetuoso.\nLímites: máximo 120 palabras; no pongas notas; usa la rúbrica adjunta como criterio; no inventes criterios que no estén en ella.',
                    en: 'You are a feedback assistant for secondary-school teachers.\nTask: when I paste a student’s work, give feedback in this format: 1) one concrete strength, 2) one priority improvement with an example, 3) one achievable next step.\nAudience: students aged 13 to 16; warm, respectful tone.\nLimits: 120 words maximum; don’t give grades; use the attached rubric as the criterion; don’t invent criteria that aren’t in it.' },
          label: { es: '✦ Instrucciones de un Gem «Marco de feedback»', en: '✦ Instructions for a “Feedback frame” Gem' } },
        { note: { es: 'Antes de pegar trabajos de estudiantes en un Gem, quita nombres y datos personales. Y revisa siempre la retroalimentación antes de entregarla.', en: 'Before pasting student work into a Gem, remove names and personal data. And always review the feedback before giving it.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'De Gems a skills: qué está cambiando', en: 'From Gems to skills: what is changing' },
      b: [
        { p: { es: 'Google está reemplazando los Gems por **skills**: conjuntos de instrucciones reutilizables que invocas escribiendo **/** en el chat (y que Gemini puede aplicar por sí solo cuando son relevantes), sin abrir un asistente aparte.',
               en: 'Google is replacing Gems with **skills**: reusable instruction sets you invoke by typing **/** in the chat (and that Gemini can apply on its own when relevant), without opening a separate assistant.' } },
        { table: {
          head: [{ es: 'Fecha', en: 'Date' }, { es: 'Qué pasa', en: 'What happens' }],
          rows: [
            [{ es: '13/10/2026', en: '13 Oct 2026' }, { es: 'Los skills empiezan a llegar al Gemini app; conviven con los Gems', en: 'Skills start arriving in the Gemini app; they coexist with Gems' }],
            [{ es: '17/11/2026', en: '17 Nov 2026' }, { es: 'Los Gems pasan a Ajustes (Settings), pero se pueden seguir creando, editando y usando', en: 'Gems move to Settings, but can still be created, edited and used' }],
            [{ es: 'No antes del 1/03/2027', en: 'Not before 1 Mar 2027' }, { es: 'Cuentas business y enterprise dejan de usar Gems', en: 'Business and enterprise accounts stop using Gems' }],
            [{ es: 'No antes del 1/06/2027', en: 'Not before 1 Jun 2027' }, { es: '**Education**: los Gems dejan de estar disponibles (también en Classroom y LMS); los restantes se convierten en skills en borrador', en: '**Education**: Gems stop being available (also in Classroom and LMSs); the rest become draft skills' }]
          ]
        } },
        { p: { es: 'En la migración automática se conservan el nombre, la descripción, las instrucciones y los archivos de conocimiento, pero el skill queda **inactivo** hasta que lo revisas y lo activas.', en: 'Automatic migration keeps the name, description, instructions and knowledge files, but the skill stays **inactive** until you review and activate it.' } },
        { note: { es: 'El examen todavía pide «diseñar un Gem». Aprende a hacerlo bien: las mismas habilidades (instrucciones claras, conocimiento, pruebas) sirven para crear skills.', en: 'The exam still asks you to “design a Gem”. Learn to do it well: the same skills (clear instructions, knowledge, testing) apply to creating skills.' }, kind: 'info' }
      ]
    }
  ],
  trampas: [
    { es: 'Probar el Gem en la vista previa y olvidar pulsar Guardar.', en: 'Testing the Gem in the preview and forgetting to press Save.' },
    { es: 'Escribir instrucciones vagas («ayúdame con mis clases»): el Gem será tan genérico como un chat normal.', en: 'Writing vague instructions (“help me with my classes”): the Gem will be as generic as a normal chat.' },
    { es: 'Pensar que los Gems desaparecen de inmediato: en Education siguen disponibles al menos hasta junio de 2027.', en: 'Thinking Gems disappear immediately: in Education they remain until at least June 2027.' }
  ],
  ideas: [
    { es: 'Gem = asistente a medida: nombre + instrucciones + conocimiento.', en: 'Gem = custom assistant: name + instructions + knowledge.' },
    { es: 'Úsalo para necesidades recurrentes: bell-ringers, feedback, comunicados.', en: 'Use it for recurring needs: bell-ringers, feedback, notices.' },
    { es: 'Los skills reemplazan a los Gems; se invocan con / en el chat.', en: 'Skills replace Gems; you invoke them with / in the chat.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Cada lunes pides a Gemini 3 actividades de inicio con el mismo formato. ¿Qué te ahorra más tiempo?', en: 'Every Monday you ask Gemini for 3 warm-up activities in the same format. What saves you the most time?' },
      o: [
        { t: { es: 'Copiar y pegar el mismo prompt largo', en: 'Copy and paste the same long prompt' },
          why: { es: 'Funciona, pero un Gem guarda esas instrucciones por ti.', en: 'It works, but a Gem stores those instructions for you.' } },
        { ok: true, t: { es: 'Crear un Gem con esas instrucciones', en: 'Create a Gem with those instructions' },
          why: { es: 'Correcto: defines una vez y reutilizas cada semana.', en: 'Correct: define once and reuse every week.' } },
        { t: { es: 'Lanzar un Deep Research cada lunes', en: 'Run a Deep Research every Monday' },
          why: { es: 'Deep Research investiga la web; no es para tareas repetidas.', en: 'Deep Research researches the web; it isn’t for repeated tasks.' } },
        { t: { es: 'Usar siempre el modelo Pro', en: 'Always use the Pro model' },
          why: { es: 'Cambiar de modelo no evita reescribir el contexto.', en: 'Switching models doesn’t avoid rewriting the context.' } }
      ] },
    { d: 2,
      q: { es: 'Probaste tu Gem en la vista previa y funciona bien. ¿Qué falta?', en: 'You tested your Gem in the preview and it works well. What is missing?' },
      o: [
        { t: { es: 'Publicarlo en la galería de Google', en: 'Publish it to Google’s gallery' },
          why: { es: 'No hace falta publicarlo para usarlo.', en: 'You don’t need to publish it to use it.' } },
        { t: { es: 'Activar el modelo Ultra', en: 'Turn on the Ultra model' },
          why: { es: 'No existe ese requisito para crear un Gem.', en: 'There is no such requirement to create a Gem.' } },
        { ok: true, t: { es: 'Pulsar Guardar para conservarlo', en: 'Press Save to keep it' },
          why: { es: 'Correcto: la vista previa no guarda el Gem automáticamente.', en: 'Correct: the preview doesn’t save the Gem automatically.' } },
        { t: { es: 'Exportarlo a Google Docs', en: 'Export it to Google Docs' },
          why: { es: 'Los Gems no se exportan a Docs para funcionar.', en: 'Gems aren’t exported to Docs to work.' } }
      ] },
    { d: 1,
      q: { es: 'Trabajas con una cuenta de Workspace for Education. ¿Qué ocurre con tus Gems?', en: 'You use a Workspace for Education account. What happens to your Gems?' },
      o: [
        { t: { es: 'Se borran el 13 de octubre de 2026', en: 'They are deleted on 13 October 2026' },
          why: { es: 'Esa fecha es cuando empiezan a llegar los skills, no un borrado.', en: 'That is when skills start arriving, not a deletion.' } },
        { ok: true, t: { es: 'Siguen hasta al menos junio de 2027', en: 'They remain until at least June 2027' },
          why: { es: 'Correcto: luego los restantes pasan a skills en borrador.', en: 'Correct: then the remaining ones become draft skills.' } },
        { t: { es: 'Se convierten en notebooks', en: 'They become notebooks' },
          why: { es: 'Migran a skills, no a Gemini Notebook.', en: 'They migrate to skills, not to Gemini Notebook.' } },
        { t: { es: 'Nunca cambian en Education', en: 'They never change in Education' },
          why: { es: 'Education también migra, aunque más tarde.', en: 'Education also migrates, just later.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Workspace Admin — About the transition from Gems to skills', url: 'https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills' },
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.3.3)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google — Gemini Apps Help', url: 'https://support.google.com/gemini/' }
  ]
};
