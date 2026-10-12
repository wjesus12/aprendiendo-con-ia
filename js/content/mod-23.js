/* Módulo 23 · Personalización, diferenciación e inclusión */
GDC.MOD['23'] = {
  min: 13,
  intro: {
    es: 'Cada grupo es diverso: ritmos, intereses, idiomas y necesidades distintas. Gemini puede ayudarte a **personalizar** el aprendizaje y **diferenciar** materiales en minutos, siempre que tú pongas el criterio pedagógico y cuides la privacidad.',
    en: 'Every group is diverse: different paces, interests, languages and needs. Gemini can help you **personalize** learning and **differentiate** materials in minutes, as long as you provide the teaching judgment and protect privacy.'
  },
  objetivos: [
    { es: 'Describir cómo Gemini personaliza el aprendizaje y apoya la diferenciación.', en: 'Describe how Gemini personalizes learning and supports differentiation.' },
    { es: 'Crear versiones de un recurso por nivel, interés o formato.', en: 'Create versions of a resource by level, interest or format.' },
    { es: 'Aplicar principios del Diseño Universal para el Aprendizaje (DUA) con ayuda de IA.', en: 'Apply Universal Design for Learning (UDL) principles with AI help.' }
  ],
  secciones: [
    {
      h: { es: 'Personalizar y diferenciar', en: 'Personalizing and differentiating' },
      b: [
        { p: { es: '**Diferenciar** es ofrecer distintas vías para alcanzar el mismo objetivo de aprendizaje. **Personalizar** es ajustar la experiencia al estudiante (su nivel, interés o ritmo). Gemini acelera ambas tareas porque puede reescribir, simplificar, ampliar o cambiar de formato un recurso al instante.', en: '**Differentiating** is offering different paths to the same learning goal. **Personalizing** is adjusting the experience to the student (level, interest or pace). Gemini speeds up both because it can rewrite, simplify, expand or change a resource’s format instantly.' } },
        { table: {
          head: [{ es: 'Diferenciar por…', en: 'Differentiate by…' }, { es: 'Pedido a Gemini', en: 'Request to Gemini' }],
          rows: [
            [{ es: 'Nivel de lectura', en: 'Reading level' }, { es: '«Reescribe este texto en tres niveles: básico, intermedio y avanzado, con el mismo contenido clave»', en: '“Rewrite this text at three levels: basic, intermediate and advanced, with the same key content”' }],
            [{ es: 'Interés', en: 'Interest' }, { es: '«Crea el mismo problema de proporciones con contextos de fútbol, música y cocina»', en: '“Create the same proportions problem with football, music and cooking contexts”' }],
            [{ es: 'Formato', en: 'Format' }, { es: '«Convierte la explicación en una infografía, un audio y una lista de pasos»', en: '“Turn the explanation into an infographic, an audio and a step list”' }],
            [{ es: 'Idioma', en: 'Language' }, { es: '«Añade un glosario bilingüe para estudiantes que están aprendiendo español»', en: '“Add a bilingual glossary for students learning the language”' }],
            [{ es: 'Andamiaje', en: 'Scaffolding' }, { es: '«Divide la tarea en pasos con ejemplos resueltos y pistas graduadas»', en: '“Break the task into steps with worked examples and graded hints”' }]
          ]
        } },
        { note: { es: 'El objetivo 1.2.2 pide «describir cómo Gemini puede personalizar el aprendizaje y proporcionar diferenciación». Piensa en ejemplos concretos como los de la tabla.', en: 'Objective 1.2.2 asks you to “describe how Gemini can personalize student learning and provide differentiation”. Think of concrete examples like those in the table.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'DUA con IA', en: 'UDL with AI' },
      b: [
        { p: { es: 'El **Diseño Universal para el Aprendizaje (DUA)** propone ofrecer múltiples formas de **implicación**, **representación** y **acción y expresión**. Gemini y sus herramientas encajan en cada principio:', en: '**Universal Design for Learning (UDL)** proposes offering multiple means of **engagement**, **representation** and **action and expression**. Gemini and its tools fit each principle:' } },
        { table: {
          head: [{ es: 'Principio DUA', en: 'UDL principle' }, { es: 'Cómo ayuda la IA', en: 'How AI helps' }],
          rows: [
            [{ es: 'Implicación', en: 'Engagement' }, { es: 'Contextos según intereses; retos graduados; Guided Learning', en: 'Interest-based contexts; graded challenges; Guided Learning' }],
            [{ es: 'Representación', en: 'Representation' }, { es: 'Texto, audio (Audio Overview), imagen (Nano Banana), mapa (Mind Map)', en: 'Text, audio (Audio Overview), image (Nano Banana), map (Mind Map)' }],
            [{ es: 'Acción y expresión', en: 'Action and expression' }, { es: 'Opciones de entrega: escrito, oral, infografía, app creada en Canvas', en: 'Delivery options: written, oral, infographic, app built in Canvas' }]
          ]
        } },
        { prompt: { es: 'Adapta esta actividad de comprensión lectora para un estudiante con dificultades de atención: divídela en bloques cortos, añade una casilla de verificación por paso, destaca las instrucciones clave y ofrece la opción de responder en audio. Mantén el mismo objetivo de aprendizaje.', en: 'Adapt this reading-comprehension activity for a student with attention difficulties: split it into short blocks, add a checkbox per step, highlight key instructions and offer the option to answer by audio. Keep the same learning objective.' },
          label: { es: '✦ Adaptación con DUA', en: '✦ UDL adaptation' } }
      ]
    },
    {
      h: { es: 'Cuidar a las personas', en: 'Caring for people' },
      b: [
        { list: [
          { es: '**Describe necesidades, no identidades:** «un estudiante que necesita instrucciones paso a paso», no su nombre ni un diagnóstico.', en: '**Describe needs, not identities:** “a student who needs step-by-step instructions”, not their name or a diagnosis.' },
          { es: '**Evita etiquetar:** las versiones no deben estigmatizar («versión fácil» → «versión con apoyos»).', en: '**Avoid labelling:** versions shouldn’t stigmatize (“easy version” → “version with supports”).' },
          { es: '**Mismo objetivo, distintas rutas:** diferenciar no es bajar las expectativas.', en: '**Same goal, different routes:** differentiating isn’t lowering expectations.' },
          { es: '**Revisa sesgos:** nombres, contextos e imágenes que representen a todo tu grupo.', en: '**Check for bias:** names, contexts and images that represent your whole group.' }
        ] },
        { note: { es: 'Elige una actividad de tu próxima clase y pide a Gemini dos versiones: una con más andamiaje y otra con un reto adicional, ambas con el mismo objetivo. Revisa que ninguna baje las expectativas.', en: 'Pick an activity from your next lesson and ask Gemini for two versions: one with more scaffolding and one with an extra challenge, both with the same goal. Check neither lowers expectations.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Incluir diagnósticos o nombres de estudiantes en el prompt para «personalizar».', en: 'Including students’ diagnoses or names in the prompt to “personalize”.' },
    { es: 'Crear una «versión fácil» que en realidad cambia el objetivo de aprendizaje.', en: 'Creating an “easy version” that actually changes the learning goal.' },
    { es: 'Delegar en la IA la decisión de qué estudiante recibe cada versión.', en: 'Delegating to AI the decision of which student gets each version.' }
  ],
  ideas: [
    { es: 'Diferenciar = distintas vías hacia el mismo objetivo.', en: 'Differentiating = different paths to the same goal.' },
    { es: 'Gemini diferencia por nivel, interés, formato, idioma y andamiaje.', en: 'Gemini differentiates by level, interest, format, language and scaffolding.' },
    { es: 'Describe necesidades, no identidades; las decisiones son tuyas.', en: 'Describe needs, not identities; the decisions are yours.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '¿Qué pedido muestra mejor la **diferenciación** con Gemini?', en: 'Which request best shows **differentiation** with Gemini?' },
      o: [
        { t: { es: '«Haz el texto más largo para todos»', en: '“Make the text longer for everyone”' }, why: { es: 'Cambia el recurso para todos por igual: no diferencia.', en: 'It changes the resource equally for everyone: no differentiation.' } },
        { ok: true, t: { es: '«Tres niveles de lectura, mismo objetivo»', en: '“Three reading levels, same goal”' }, why: { es: 'Correcto: distintas rutas hacia el mismo aprendizaje.', en: 'Correct: different routes to the same learning.' } },
        { t: { es: '«Elige qué alumno es más lento»', en: '“Pick which student is slowest”' }, why: { es: 'Etiqueta y delega una decisión que es docente.', en: 'It labels and delegates a teacher’s decision.' } },
        { t: { es: '«Quita el objetivo para que sea fácil»', en: '“Drop the goal so it’s easier”' }, why: { es: 'Diferenciar no es bajar las expectativas.', en: 'Differentiating isn’t lowering expectations.' } }
      ] },
    { d: 3,
      q: { es: 'Quieres adaptar una actividad para un estudiante con necesidades específicas. ¿Qué incluyes en el prompt?', en: 'You want to adapt an activity for a student with specific needs. What do you include in the prompt?' },
      o: [
        { t: { es: 'Su nombre completo y su diagnóstico', en: 'Their full name and diagnosis' }, why: { es: 'Son datos sensibles innecesarios.', en: 'That is unnecessary sensitive data.' } },
        { ok: true, t: { es: 'La necesidad: «pasos cortos y audio»', en: 'The need: “short steps and audio”' }, why: { es: 'Correcto: describes la necesidad sin exponer identidad.', en: 'Correct: you describe the need without exposing identity.' } },
        { t: { es: 'Su historial de notas del año', en: 'Their grade history for the year' }, why: { es: 'No hace falta para adaptar la actividad.', en: 'Not needed to adapt the activity.' } },
        { t: { es: 'Nada: Gemini ya lo conoce', en: 'Nothing: Gemini already knows them' }, why: { es: 'Gemini no conoce a tus estudiantes.', en: 'Gemini doesn’t know your students.' } }
      ] },
    { d: 2,
      q: { es: 'Según el DUA, ofrecer la opción de entregar un trabajo en audio, por escrito o como infografía corresponde a…', en: 'Under UDL, offering the option to submit work as audio, writing or an infographic corresponds to…' },
      o: [
        { t: { es: 'Implicación', en: 'Engagement' }, why: { es: 'La implicación tiene que ver con motivar y sostener el interés.', en: 'Engagement is about motivating and sustaining interest.' } },
        { t: { es: 'Representación', en: 'Representation' }, why: { es: 'Representación es cómo se presenta el contenido.', en: 'Representation is how content is presented.' } },
        { ok: true, t: { es: 'Acción y expresión', en: 'Action and expression' }, why: { es: 'Correcto: son formas de demostrar lo aprendido.', en: 'Correct: they are ways of showing what was learned.' } },
        { t: { es: 'Evaluación sumativa', en: 'Summative assessment' }, why: { es: 'No es un principio del DUA.', en: 'It isn’t a UDL principle.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (1.2.2)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'CAST — Universal Design for Learning Guidelines', url: 'https://udlguidelines.cast.org/' }
  ]
};
