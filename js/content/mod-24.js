/* Módulo 24 · Aumentar, no reemplazar: elegir la herramienta correcta */
GDC.MOD['24'] = {
  min: 12,
  intro: {
    es: 'La pregunta de fondo no es «¿qué puede hacer la IA?», sino «¿qué debería hacer la IA en mi aula y qué debo hacer yo?». Este módulo reúne el mapa completo de herramientas y te ayuda a decidir cuándo usar IA, cuál usar y cuándo no usarla.',
    en: 'The underlying question isn’t “what can AI do?” but “what should AI do in my classroom, and what should I do?”. This module brings together the full tool map and helps you decide when to use AI, which tool to use and when not to use it.'
  },
  objetivos: [
    { es: 'Diferenciar entre una IA que **aumenta** y una IA que **reemplaza** la labor docente.', en: 'Tell AI that **augments** apart from AI that **replaces** the teacher’s work.' },
    { es: 'Elegir la herramienta del ecosistema Gemini adecuada para cada tarea.', en: 'Choose the right Gemini ecosystem tool for each task.' },
    { es: 'Justificar cuándo usar o no usar IA, considerando beneficios y riesgos.', en: 'Justify when to use or not use AI, weighing benefits and risks.' }
  ],
  secciones: [
    {
      h: { es: 'Aumentar frente a reemplazar', en: 'Augmenting versus replacing' },
      b: [
        { table: {
          head: [{ es: 'La IA aumenta cuando…', en: 'AI augments when…' }, { es: 'La IA reemplaza (mal) cuando…', en: 'AI (wrongly) replaces when…' }],
          rows: [
            [{ es: 'Genera un borrador que tú adaptas', en: 'It drafts something you adapt' }, { es: 'Su texto llega tal cual a los estudiantes', en: 'Its text reaches students unchanged' }],
            [{ es: 'Te libera tiempo para acompañar a tus estudiantes', en: 'It frees time to support your students' }, { es: 'Sustituye la relación y la retroalimentación humana', en: 'It replaces human relationship and feedback' }],
            [{ es: 'Propone opciones y tú decides', en: 'It proposes options and you decide' }, { es: 'Decide calificaciones o medidas sin revisión', en: 'It decides grades or measures without review' }],
            [{ es: 'Ayuda a los estudiantes a pensar', en: 'It helps students think' }, { es: 'Piensa por ellos', en: 'It thinks for them' }]
          ]
        } },
        { quote: { es: 'La IA libera tiempo cuando el docente define el propósito y revisa el resultado.', en: 'AI frees up time when the teacher defines the purpose and reviews the result.' } },
        { note: { es: 'Objetivo 1.2.4: «diferenciar entre una IA que aumenta y una que reemplaza la experiencia del educador». Las respuestas correctas del examen suelen mantener al docente en el centro de las decisiones.', en: 'Objective 1.2.4: “differentiate between AI augmenting and AI replacing the educator experience”. Correct exam answers usually keep the teacher at the centre of decisions.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'El mapa completo de herramientas', en: 'The complete tool map' },
      b: [
        { table: {
          head: [{ es: 'Si necesitas…', en: 'If you need…' }, { es: 'Usa', en: 'Use' }],
          rows: [
            [{ es: 'Conversar, idear, redactar algo rápido', en: 'Chat, ideate, write something quickly' }, { es: 'Gemini app', en: 'Gemini app' }],
            [{ es: 'Un producto editable: guía, slides, quiz, web, app', en: 'An editable product: guide, slides, quiz, web, app' }, { es: 'Canvas', en: 'Canvas' }],
            [{ es: 'Repetir la misma tarea cada semana', en: 'Repeat the same task every week' }, { es: 'Gems (y skills)', en: 'Gems (and skills)' }],
            [{ es: 'Responder solo con tus documentos y con citas', en: 'Answer only from your documents, with citations' }, { es: 'Gemini Notebook', en: 'Gemini Notebook' }],
            [{ es: 'Convertir fuentes en audio, mapa o tarjetas', en: 'Turn sources into audio, a map or cards' }, { es: 'Studio de Gemini Notebook', en: 'Gemini Notebook Studio' }],
            [{ es: 'Investigar un tema en la web con informe', en: 'Research a topic on the web with a report' }, { es: 'Deep Research', en: 'Deep Research' }],
            [{ es: 'Que un estudiante aprenda paso a paso', en: 'Help a student learn step by step' }, { es: 'Guided Learning', en: 'Guided Learning' }],
            [{ es: 'Crear o editar imágenes', en: 'Create or edit images' }, { es: 'Nano Banana', en: 'Nano Banana' }],
            [{ es: 'Trabajar con tus correos y archivos', en: 'Work with your emails and files' }, { es: 'Apps conectadas (@) o «Ask Gemini» en Workspace', en: 'Connected apps (@) or “Ask Gemini” in Workspace' }],
            [{ es: 'Tareas con el contexto de tus clases', en: 'Assignments with your class context' }, { es: 'Gemini in Classroom', en: 'Gemini in Classroom' }]
          ]
        } }
      ]
    },
    {
      h: { es: '¿Usar IA o no? Una decisión justificada', en: 'Use AI or not? A justified decision' },
      b: [
        { p: { es: 'No todo debe hacerse con IA. Hazte estas preguntas:', en: 'Not everything should be done with AI. Ask yourself:' } },
        { steps: [
          { es: '¿El objetivo es que **el estudiante desarrolle** esa habilidad (escribir, calcular, argumentar)? Entonces la IA no debe hacerlo por él; a lo sumo, guiar.', en: 'Is the goal for **the student to develop** that skill (writing, calculating, arguing)? Then AI shouldn’t do it for them; at most, guide.' },
          { es: '¿Hay **datos sensibles** o decisiones de alto impacto (calificaciones, sanciones)? Decide tú y usa la IA solo como apoyo.', en: 'Are there **sensitive data** or high-impact decisions (grades, sanctions)? You decide and use AI only as support.' },
          { es: '¿La tarea es **repetitiva o mecánica** para ti? Ahí la IA aporta mucho.', en: 'Is the task **repetitive or mechanical** for you? That is where AI adds a lot.' },
          { es: '¿Puedes **verificar** el resultado? Si no, busca otra vía.', en: 'Can you **verify** the result? If not, find another way.' }
        ] },
        { note: { es: 'Objetivo 3.3.3: «justificar decisiones sobre cuándo usar o no herramientas de IA para tareas educativas concretas, considerando beneficios y riesgos».', en: 'Objective 3.3.3: “justify decisions regarding when to use or not use AI tools for specific educational tasks, considering both benefits and risks”.' }, kind: 'exam' },
        { note: { es: 'Haz una lista de 6 tareas de tu semana. Al lado de cada una escribe: «IA lo hace», «IA ayuda» o «sin IA», y por qué.', en: 'List 6 tasks from your week. Next to each write: “AI does it”, “AI helps” or “no AI”, and why.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Usar IA para todo por eficiencia, incluso cuando el objetivo es que el estudiante practique esa habilidad.', en: 'Using AI for everything for efficiency, even when the goal is for the student to practise that skill.' },
    { es: 'Pensar que «aumentar» significa que la IA trabaja sola mientras tú no revisas.', en: 'Thinking “augment” means AI works alone while you don’t review.' },
    { es: 'Elegir la herramienta por moda y no por la tarea.', en: 'Choosing the tool because it’s trendy rather than for the task.' }
  ],
  ideas: [
    { es: 'La IA aumenta tu trabajo: tú defines el propósito y revisas.', en: 'AI augments your work: you set the purpose and review.' },
    { es: 'Cada tarea tiene su herramienta en el ecosistema Gemini.', en: 'Each task has its tool in the Gemini ecosystem.' },
    { es: 'No usar IA también es una decisión pedagógica válida.', en: 'Not using AI is also a valid teaching decision.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '¿Cuál de estas situaciones es un ejemplo de IA que **aumenta** la labor docente?', en: 'Which of these is an example of AI that **augments** teaching work?' },
      o: [
        { t: { es: 'La IA califica y publica las notas sola', en: 'AI grades and publishes the marks alone' }, why: { es: 'Reemplaza una decisión de alto impacto sin revisión.', en: 'It replaces a high-impact decision without review.' } },
        { ok: true, t: { es: 'La IA propone un borrador que tú adaptas', en: 'AI drafts something that you adapt' }, why: { es: 'Correcto: tú mantienes el criterio y la decisión final.', en: 'Correct: you keep the judgment and the final decision.' } },
        { t: { es: 'La IA responde a las familias por ti', en: 'AI replies to families on your behalf' }, why: { es: 'Sustituye una relación que requiere tu voz.', en: 'It replaces a relationship that needs your voice.' } },
        { t: { es: 'La IA hace la tarea de los estudiantes', en: 'AI does the students’ homework' }, why: { es: 'Reemplaza el aprendizaje del estudiante.', en: 'It replaces the student’s learning.' } }
      ] },
    { d: 3,
      q: { es: 'El objetivo de la unidad es que los estudiantes aprendan a escribir un ensayo argumentativo. ¿Cómo usas la IA?', en: 'The unit’s goal is for students to learn to write an argumentative essay. How do you use AI?' },
      o: [
        { t: { es: 'Que Gemini escriba los ensayos', en: 'Have Gemini write the essays for them' }, why: { es: 'Anula justamente la habilidad que deben desarrollar.', en: 'It cancels exactly the skill they must develop.' } },
        { t: { es: 'Prohibir cualquier herramienta digital', en: 'Ban every digital tool' }, why: { es: 'Pierdes apoyos útiles como la guía o el feedback.', en: 'You lose useful supports like guidance or feedback.' } },
        { ok: true, t: { es: 'Como guía y feedback, no como autor', en: 'As guide and feedback, not as author' }, why: { es: 'Correcto: apoya el proceso sin reemplazar la escritura.', en: 'Correct: it supports the process without replacing the writing.' } },
        { t: { es: 'Solo para corregir la ortografía final', en: 'Only to fix the final spelling' }, why: { es: 'Es posible, pero desaprovecha el apoyo al proceso.', en: 'Possible, but it wastes support for the process.' } }
      ] },
    { d: 1,
      q: { es: 'Necesitas un asistente que cada semana genere actividades de inicio con tu formato. ¿Qué herramienta eliges?', en: 'You need an assistant that generates warm-up activities in your format every week. Which tool do you pick?' },
      o: [
        { t: { es: 'Deep Research', en: 'Deep Research' }, why: { es: 'Investiga la web; no guarda instrucciones repetibles.', en: 'It researches the web; it doesn’t store repeatable instructions.' } },
        { ok: true, t: { es: 'Un Gem', en: 'A Gem' }, why: { es: 'Correcto: guarda tus instrucciones para reutilizarlas (y con el tiempo, un skill).', en: 'Correct: it stores your instructions for reuse (and, over time, a skill).' } },
        { t: { es: 'Gemini Notebook', en: 'Gemini Notebook' }, why: { es: 'Sirve para consultar fuentes, no para tareas repetidas con formato.', en: 'It is for consulting sources, not repeated formatted tasks.' } },
        { t: { es: 'Nano Banana', en: 'Nano Banana' }, why: { es: 'Crea imágenes, no actividades.', en: 'It creates images, not activities.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (1.2.4, 1.3.2 y 3.3.3)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' }
  ]
};
