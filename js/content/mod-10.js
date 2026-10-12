/* Módulo 10 · Guided Learning y Gemini Live */
GDC.MOD['10'] = {
  min: 12,
  intro: {
    es: 'Gemini no solo responde: también puede enseñar. **Guided Learning** (aprendizaje guiado) lo convierte en un tutor que pregunta en lugar de dar la respuesta, y **Gemini Live** te permite conversar en voz alta e incluso mostrarle lo que ves con la cámara.',
    en: 'Gemini doesn’t just answer: it can also teach. **Guided Learning** turns it into a tutor that asks questions instead of giving the answer, and **Gemini Live** lets you talk out loud and even show it what you see through the camera.'
  },
  objetivos: [
    { es: 'Explicar en qué se diferencia Guided Learning de un chat normal.', en: 'Explain how Guided Learning differs from a normal chat.' },
    { es: 'Diseñar un uso de Guided Learning para tus estudiantes.', en: 'Design a use of Guided Learning for your students.' },
    { es: 'Reconocer usos de Gemini Live para practicar y explorar.', en: 'Recognize uses of Gemini Live for practice and exploration.' }
  ],
  secciones: [
    {
      h: { es: 'Guided Learning: de respuestas a comprensión', en: 'Guided Learning: from answers to understanding' },
      b: [
        { p: { es: 'En un chat normal, si preguntas «¿cómo se resuelve esta ecuación?», Gemini te da la solución. En **Guided Learning**, Gemini explica por partes y **te devuelve preguntas** para que pienses, compruebes lo que entendiste y construyas tu propio razonamiento.',
               en: 'In a normal chat, if you ask “how do I solve this equation?”, Gemini gives you the solution. In **Guided Learning**, Gemini explains step by step and **asks you questions back** so you think, check what you understood and build your own reasoning.' } },
        { table: {
          head: [{ es: 'Chat normal', en: 'Normal chat' }, { es: 'Guided Learning', en: 'Guided Learning' }],
          rows: [
            [{ es: 'Da la respuesta completa', en: 'Gives the full answer' }, { es: 'Guía paso a paso', en: 'Guides step by step' }],
            [{ es: 'Tú lees', en: 'You read' }, { es: 'Tú respondes y razonas', en: 'You answer and reason' }],
            [{ es: 'Útil para producir', en: 'Useful for producing' }, { es: 'Útil para aprender', en: 'Useful for learning' }]
          ]
        } },
        { p: { es: 'Google lo diseñó con educadores y ofrece un enlace directo para que los docentes lo compartan en Google Classroom o con sus estudiantes. Se activa desde el Gemini app eligiendo **Guided Learning** junto a la caja de prompt; también puedes adjuntar tus materiales.',
               en: 'Google designed it with educators and offers a direct link teachers can share in Google Classroom or with students. You turn it on in the Gemini app by choosing **Guided Learning** next to the prompt box; you can also attach your materials.' } }
      ]
    },
    {
      h: { es: 'Cómo usarlo en tu curso', en: 'How to use it in your course' },
      b: [
        { list: [
          { es: '**Repaso antes de una evaluación:** los estudiantes estudian un tema respondiendo las preguntas del tutor.', en: '**Review before a test:** students study a topic by answering the tutor’s questions.' },
          { es: '**Tarea con proceso:** pide que entreguen la conversación junto con su respuesta, para ver cómo razonaron.', en: '**Homework with process:** ask them to hand in the conversation with their answer, to see how they reasoned.' },
          { es: '**Recuperación:** quien faltó a clase repasa el tema con el tutor antes de la siguiente sesión.', en: '**Catch-up:** students who missed class review the topic with the tutor before the next session.' },
          { es: '**Para ti:** aprende un tema nuevo antes de enseñarlo.', en: '**For you:** learn a new topic before teaching it.' }
        ] },
        { prompt: { es: 'Quiero entender por qué las estaciones del año no se deben a la distancia entre la Tierra y el Sol. No me des la respuesta directamente: guíame con preguntas y corrígeme si me equivoco.',
                    en: 'I want to understand why the seasons are not caused by the distance between the Earth and the Sun. Don’t give me the answer directly: guide me with questions and correct me if I’m wrong.' },
          label: { es: '✦ Prompt para Guided Learning', en: '✦ Prompt for Guided Learning' } },
        { note: { es: 'Guided Learning apoya la **metacognición**: obliga a explicar, justificar y detectar los propios errores. Eso conecta con el objetivo 3.1.4 del examen (autoconciencia, metacognición y pensamiento crítico en el uso de IA).',
                  en: 'Guided Learning supports **metacognition**: it requires explaining, justifying and spotting one’s own mistakes. That connects to exam objective 3.1.4 (self-awareness, metacognition and critical thinking when using AI).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Gemini Live: conversar en voz alta', en: 'Gemini Live: talking out loud' },
      b: [
        { p: { es: '**Gemini Live** es la forma de conversar con Gemini por voz, de manera natural, pudiendo interrumpir y cambiar de tema. Desde 2026 está integrado en el chat: puedes pasar de escribir a hablar sin salir de la conversación y, en el móvil, compartir lo que ve tu cámara.',
               en: '**Gemini Live** is the way to talk with Gemini by voice, naturally, with the ability to interrupt and change topic. Since 2026 it is integrated into the chat: you can switch from typing to talking without leaving the conversation and, on mobile, share what your camera sees.' } },
        { table: {
          head: [{ es: 'Uso', en: 'Use' }, { es: 'Ejemplo', en: 'Example' }],
          rows: [
            [{ es: 'Practicar un idioma', en: 'Practise a language' }, { es: 'Conversar en inglés sobre tu fin de semana y pedir correcciones', en: 'Chat in English about your weekend and ask for corrections' }],
            [{ es: 'Ensayar una exposición', en: 'Rehearse a presentation' }, { es: 'Explicar tu clase en voz alta y pedir preguntas difíciles', en: 'Explain your lesson out loud and ask for tough questions' }],
            [{ es: 'Explorar con la cámara', en: 'Explore with the camera' }, { es: 'Mostrar una planta o un objeto y preguntar por él', en: 'Show a plant or object and ask about it' }],
            [{ es: 'Pensar en voz alta', en: 'Think out loud' }, { es: 'Hacer una lluvia de ideas mientras caminas', en: 'Brainstorm while you walk' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Límites y buenas prácticas', en: 'Limits and good practice' },
      b: [
        { list: [
          { es: 'Un tutor de IA complementa, no reemplaza, la mediación docente.', en: 'An AI tutor complements, but doesn’t replace, teacher mediation.' },
          { es: 'El tutor también puede equivocarse: enseña a los estudiantes a contrastar.', en: 'The tutor can also be wrong: teach students to cross-check.' },
          { es: 'Revisa la configuración de tu institución: el acceso de estudiantes depende de su edad y de lo que habilite el administrador.', en: 'Check your institution’s settings: student access depends on age and on what the administrator enables.' }
        ] },
        { note: { es: 'Abre Guided Learning y pídele que te enseñe un tema que no domines. Responde sus preguntas y observa cómo ajusta la explicación según tus errores.',
                  en: 'Open Guided Learning and ask it to teach you a topic you don’t master. Answer its questions and watch how it adjusts the explanation to your mistakes.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Pensar que Guided Learning «no sabe» la respuesta: la conoce, pero prioriza que tú la construyas.', en: 'Thinking Guided Learning “doesn’t know” the answer: it does, but it prioritizes you building it.' },
    { es: 'Usarlo cuando lo que necesitas es producir un material rápido: ahí conviene el chat normal o Canvas.', en: 'Using it when what you need is to produce material quickly: the normal chat or Canvas fits better there.' },
    { es: 'Compartir la cámara de Gemini Live mostrando a estudiantes o datos personales.', en: 'Sharing Gemini Live’s camera while showing students or personal data.' }
  ],
  ideas: [
    { es: 'Guided Learning = tutor que pregunta: de respuestas a comprensión.', en: 'Guided Learning = a tutor that asks: from answers to understanding.' },
    { es: 'Favorece la metacognición y el pensamiento crítico.', en: 'It fosters metacognition and critical thinking.' },
    { es: 'Gemini Live = conversación por voz (y cámara) integrada en el chat.', en: 'Gemini Live = voice (and camera) conversation built into the chat.' }
  ],
  quiz: [
    { d: 1,
      q: { es: 'Un estudiante quiere **aprender** a resolver un tipo de problema, no solo copiar la solución. ¿Qué le recomiendas?', en: 'A student wants to **learn** how to solve a type of problem, not just copy the solution. What do you recommend?' },
      o: [
        { ok: true, t: { es: 'Usar Guided Learning en el Gemini app', en: 'Use Guided Learning in the Gemini app' },
          why: { es: 'Correcto: guía paso a paso con preguntas en lugar de dar la respuesta.', en: 'Correct: it guides step by step with questions instead of giving the answer.' } },
        { t: { es: 'Pedir la respuesta en un chat normal', en: 'Ask for the answer in a normal chat' },
          why: { es: 'Le daría la solución, justo lo que quiere evitar.', en: 'It would give the solution, exactly what he wants to avoid.' } },
        { t: { es: 'Generar una imagen del problema', en: 'Generate an image of the problem' },
          why: { es: 'Una imagen no guía el razonamiento.', en: 'An image doesn’t guide the reasoning.' } },
        { t: { es: 'Lanzar un Deep Research del tema', en: 'Run a Deep Research on the topic' },
          why: { es: 'Entrega un informe para leer, no un acompañamiento paso a paso.', en: 'It delivers a report to read, not step-by-step support.' } }
      ] },
    { d: 1,
      q: { es: '¿Qué permite Gemini Live?', en: 'What does Gemini Live allow?' },
      o: [
        { t: { es: 'Publicar en vivo tus chats en redes', en: 'Livestream your chats on social media' },
          why: { es: '«Live» se refiere a conversar en tiempo real, no a transmitir.', en: '“Live” refers to real-time conversation, not broadcasting.' } },
        { ok: true, t: { es: 'Conversar por voz y mostrar lo que ves', en: 'Talk by voice and show what you see' },
          why: { es: 'Correcto: es conversación natural por voz, con cámara en el móvil.', en: 'Correct: it is natural voice conversation, with camera on mobile.' } },
        { t: { es: 'Editar videos de clase automáticamente', en: 'Edit class videos automatically' },
          why: { es: 'La edición de video corresponde a otras herramientas (módulo 15).', en: 'Video editing belongs to other tools (module 15).' } },
        { t: { es: 'Ver en directo lo que hacen tus estudiantes', en: 'Watch live what your students are doing' },
          why: { es: 'Gemini Live no supervisa a terceros.', en: 'Gemini Live doesn’t monitor other people.' } }
      ] },
    { d: 3,
      q: { es: 'Pides a tus estudiantes entregar su conversación de Guided Learning junto con la tarea. ¿Qué buscas principalmente?', en: 'You ask students to hand in their Guided Learning conversation with their homework. What are you mainly after?' },
      o: [
        { t: { es: 'Comprobar que usaron el modelo más potente', en: 'Check they used the most powerful model' },
          why: { es: 'El modelo no es lo relevante para el aprendizaje.', en: 'The model isn’t what matters for learning.' } },
        { t: { es: 'Reducir el tiempo que dedicas a corregir', en: 'Reduce the time you spend grading' },
          why: { es: 'Puede ayudar, pero el objetivo central es otro.', en: 'It may help, but the core goal is different.' } },
        { ok: true, t: { es: 'Ver el proceso de razonamiento y la autoría', en: 'See the reasoning process and authorship' },
          why: { es: 'Correcto: evaluar el proceso hace visible el criterio y la comprensión.', en: 'Correct: assessing the process makes judgment and understanding visible.' } },
        { t: { es: 'Saber cuántas veces abrieron Gemini', en: 'Know how many times they opened Gemini' },
          why: { es: 'La frecuencia de uso no refleja aprendizaje.', en: 'Frequency of use doesn’t reflect learning.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Blog — Guided Learning in Gemini: From answers to understanding', url: 'https://blog.google/outreach-initiatives/education/guided-learning/' },
    { t: 'Gemini — Release notes (Gemini Live en el chat)', url: 'https://gemini.google/release-notes/' }
  ]
};
