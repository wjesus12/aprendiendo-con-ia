/* Módulo 07 · Iterar y refinar: del borrador al recurso final */
GDC.MOD['07'] = {
  min: 12,
  intro: {
    es: 'La primera respuesta de Gemini es un borrador, no el producto final. Los mejores resultados salen de una conversación: pides, revisas, ajustas y vuelves a pedir. Aquí aprenderás a dar retroalimentación útil a la IA.',
    en: 'Gemini’s first answer is a draft, not the final product. The best results come from a conversation: you ask, review, adjust and ask again. Here you will learn to give useful feedback to the AI.'
  },
  objetivos: [
    { es: 'Analizar una salida de Gemini e identificar qué necesita refinarse.', en: 'Analyze a Gemini output and identify what needs refining.' },
    { es: 'Pedir cambios concretos (tono, nivel, extensión, formato) sin empezar de cero.', en: 'Ask for specific changes (tone, level, length, format) without starting over.' },
    { es: 'Construir un recurso corto de forma iterativa (quiz, instrucciones diferenciadas).', en: 'Build a short resource iteratively (quiz, differentiated instructions).' }
  ],
  secciones: [
    {
      h: { es: 'El ciclo de la co-creación', en: 'The co-creation cycle' },
      b: [
        { flow: [
          { es: 'Pedir', en: 'Ask' }, { es: 'Revisar', en: 'Review' }, { es: 'Ajustar', en: 'Adjust' }, { es: 'Verificar', en: 'Verify' }
        ] },
        { p: { es: 'Iterar no es repetir la misma pregunta: es **dar retroalimentación específica** sobre lo que ya hay. Gemini conserva el contexto de la conversación, así que cada ajuste se construye sobre lo anterior.',
               en: 'Iterating isn’t repeating the same question: it is **giving specific feedback** on what is already there. Gemini keeps the conversation context, so each adjustment builds on the previous one.' } },
        { note: { es: 'La guía pide «analizar una salida de Gemini para identificar áreas que requieren refinamiento o más prompts» (2.2.2) y «desarrollar un recurso corto interactuando de forma iterativa» (2.3.1).',
                  en: 'The guide asks you to “analyze a Gemini output to identify areas that require refinement or additional prompting” (2.2.2) and to “develop a short resource by interacting iteratively” (2.3.1).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Qué revisar en un borrador', en: 'What to review in a draft' },
      b: [
        { table: {
          head: [{ es: 'Si notas…', en: 'If you notice…' }, { es: 'Pide algo como…', en: 'Ask something like…' }],
          rows: [
            [{ es: 'Nivel demasiado alto', en: 'Level too high' }, { es: '«Simplifica el vocabulario para estudiantes de 11 años»', en: '“Simplify the vocabulary for 11-year-olds”' }],
            [{ es: 'Muy largo', en: 'Too long' }, { es: '«Reduce a la mitad y conserva solo lo esencial»', en: '“Cut it in half and keep only the essentials”' }],
            [{ es: 'Tono frío', en: 'Cold tone' }, { es: '«Hazlo más cercano y motivador»', en: '“Make it warmer and more motivating”' }],
            [{ es: 'No se alinea al objetivo', en: 'Not aligned to the objective' }, { es: '«Ajusta las preguntas al objetivo: identificar causas, no memorizar fechas»', en: '“Align the questions to the objective: identify causes, not memorize dates”' }],
            [{ es: 'Formato poco útil', en: 'Unhelpful format' }, { es: '«Pásalo a una tabla con columnas X, Y, Z»', en: '“Turn it into a table with columns X, Y, Z”' }],
            [{ es: 'Falta variedad', en: 'Lacks variety' }, { es: '«Añade 2 preguntas de aplicación y 1 de reflexión»', en: '“Add 2 application questions and 1 reflection question”' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Ejemplo: un quiz en tres vueltas', en: 'Example: a quiz in three rounds' },
      b: [
        { steps: [
          { es: '**Vuelta 1:** «Crea un quiz de 6 preguntas de opción múltiple sobre las fracciones equivalentes para estudiantes de 10 años».', en: '**Round 1:** “Create a 6-question multiple-choice quiz on equivalent fractions for 10-year-olds.”' },
          { es: '**Vuelta 2:** «Las preguntas 2 y 5 son muy parecidas. Cambia la 5 por un problema con una receta de cocina».', en: '**Round 2:** “Questions 2 and 5 are very similar. Replace 5 with a problem about a cooking recipe.”' },
          { es: '**Vuelta 3:** «Ahora crea una versión con apoyo visual (dibujos descritos) para estudiantes que necesitan más andamiaje».', en: '**Round 3:** “Now create a version with visual support (described drawings) for students who need more scaffolding.”' }
        ] },
        { p: { es: 'En tres mensajes tienes dos versiones diferenciadas del mismo recurso. Y siempre puedes **editar tu prompt** anterior o **volver a generar** una respuesta si un camino no te convence.',
               en: 'In three messages you have two differentiated versions of the same resource. And you can always **edit your earlier prompt** or **regenerate** an answer if a path doesn’t convince you.' } }
      ]
    },
    {
      h: { es: 'Cuándo empezar un chat nuevo', en: 'When to start a new chat' },
      b: [
        { list: [
          { es: 'Cuando cambias por completo de tema o de curso.', en: 'When you completely change topic or course.' },
          { es: 'Cuando la conversación es tan larga que empieza a olvidar indicaciones (ventana de contexto, módulo 02).', en: 'When the conversation is so long it starts forgetting instructions (context window, module 02).' },
          { es: 'Cuando quieres una mirada «limpia», sin el sesgo de las versiones anteriores.', en: 'When you want a “clean” view, free of earlier versions’ influence.' }
        ] },
        { note: { es: 'Truco: antes de abrir un chat nuevo, pide «Resume en 5 líneas todo lo que acordamos» y pega ese resumen al inicio del nuevo chat.', en: 'Tip: before opening a new chat, ask “Summarize in 5 lines everything we agreed” and paste that summary at the start of the new chat.' }, kind: 'tip' }
      ]
    }
  ],
  trampas: [
    { es: 'Decir solo «mejóralo»: sin criterio, Gemini adivina qué significa «mejor».', en: 'Just saying “improve it”: without criteria, Gemini guesses what “better” means.' },
    { es: 'Aceptar la primera versión por falta de tiempo cuando un ajuste de 10 segundos la haría mucho mejor.', en: 'Accepting the first version for lack of time when a 10-second tweak would make it much better.' },
    { es: 'Empezar un chat nuevo para cada corrección y perder el contexto acumulado.', en: 'Starting a new chat for every correction and losing the accumulated context.' }
  ],
  ideas: [
    { es: 'La primera respuesta es un borrador.', en: 'The first answer is a draft.' },
    { es: 'Itera con retroalimentación específica: nivel, tono, extensión, formato, alineación.', en: 'Iterate with specific feedback: level, tone, length, format, alignment.' },
    { es: 'Editar el prompt o regenerar también son formas de iterar.', en: 'Editing the prompt or regenerating are also ways to iterate.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Gemini generó un quiz, pero las preguntas solo piden memorizar fechas y tu objetivo es analizar causas. ¿Qué haces?', en: 'Gemini generated a quiz, but the questions only ask to memorize dates and your goal is to analyze causes. What do you do?' },
      o: [
        { t: { es: 'Pido «mejóralo» y espero que lo adivine', en: 'Ask “improve it” and hope it guesses' },
          why: { es: '«Mejóralo» no explica qué falla; Gemini puede cambiar otra cosa.', en: '“Improve it” doesn’t explain what is wrong; Gemini may change something else.' } },
        { ok: true, t: { es: 'Pido alinear las preguntas a analizar causas', en: 'Ask to align the questions to analyzing causes' },
          why: { es: 'Correcto: la retroalimentación específica sobre el objetivo corrige el rumbo.', en: 'Correct: specific feedback on the objective corrects the course.' } },
        { t: { es: 'Abro otro chat y repito el mismo prompt', en: 'Open another chat and repeat the same prompt' },
          why: { es: 'Con el mismo prompt es probable obtener el mismo problema.', en: 'With the same prompt you will likely get the same problem.' } },
        { t: { es: 'Cambio a otro modelo sin tocar el prompt', en: 'Switch to another model without touching the prompt' },
          why: { es: 'El problema es la instrucción, no el modelo.', en: 'The problem is the instruction, not the model.' } }
      ] },
    { d: 2,
      q: { es: '¿Cuál es un buen motivo para abrir un chat nuevo?', en: 'Which is a good reason to open a new chat?' },
      o: [
        { t: { es: 'Querer ajustar el tono de la última respuesta', en: 'Wanting to adjust the tone of the last answer' },
          why: { es: 'Ese ajuste se hace mejor en el mismo chat, que conserva el contexto.', en: 'That tweak works better in the same chat, which keeps the context.' } },
        { t: { es: 'Necesitar una versión más corta del texto', en: 'Needing a shorter version of the text' },
          why: { es: 'Acortar es una iteración normal dentro del mismo chat.', en: 'Shortening is a normal iteration within the same chat.' } },
        { ok: true, t: { es: 'Cambiar por completo de curso o de tema', en: 'Switching completely to another course or topic' },
          why: { es: 'Correcto: un tema nuevo merece un contexto limpio.', en: 'Correct: a new topic deserves a clean context.' } },
        { t: { es: 'Añadir dos preguntas más al quiz actual', en: 'Adding two more questions to the current quiz' },
          why: { es: 'Es una ampliación del mismo recurso: sigue en el mismo chat.', en: 'It extends the same resource: stay in the same chat.' } }
      ] },
    { d: 2,
      q: { es: 'Necesitas una versión de tu actividad con más andamiaje para algunos estudiantes. ¿Qué es lo más eficiente?', en: 'You need a version of your activity with more scaffolding for some students. What is most efficient?' },
      o: [
        { t: { es: 'Escribir la segunda versión tú desde cero', en: 'Write the second version yourself from scratch' },
          why: { es: 'Posible, pero Gemini puede hacerlo a partir de la versión que ya tienes.', en: 'Possible, but Gemini can do it from the version you already have.' } },
        { ok: true, t: { es: 'Pedir en el chat una versión con más apoyos', en: 'Ask in the chat for a version with more supports' },
          why: { es: 'Correcto: iterar sobre lo creado genera una versión diferenciada en segundos.', en: 'Correct: iterating on what exists creates a differentiated version in seconds.' } },
        { t: { es: 'Dar la misma versión a todos para ser justos', en: 'Give everyone the same version to be fair' },
          why: { es: 'La equidad a veces requiere apoyos distintos (módulo 23).', en: 'Equity sometimes requires different supports (module 23).' } },
        { t: { es: 'Pedirle a Gemini que elija qué estudiantes la usan', en: 'Ask Gemini to choose which students use it' },
          why: { es: 'Esa decisión pedagógica es tuya, no de la IA.', en: 'That teaching decision is yours, not the AI’s.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.2.2 y 2.3.1)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google — Gemini Apps Help', url: 'https://support.google.com/gemini/' }
  ]
};
