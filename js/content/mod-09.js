/* Módulo 09 · Deep Research: plan, investigación e informe */
GDC.MOD['09'] = {
  min: 13,
  intro: {
    es: '**Deep Research** convierte a Gemini en un asistente de investigación: arma un plan, navega por la web durante varios minutos y te entrega un informe con fuentes enlazadas. Es ideal para preparar una unidad nueva o ponerte al día en un tema, siempre con ojo crítico.',
    en: '**Deep Research** turns Gemini into a research assistant: it builds a plan, browses the web for several minutes and delivers a report with linked sources. It is ideal for preparing a new unit or catching up on a topic, always with a critical eye.'
  },
  objetivos: [
    { es: 'Explicar el flujo de Deep Research: plan → investigación → informe.', en: 'Explain the Deep Research flow: plan → research → report.' },
    { es: 'Revisar y editar el plan antes de que empiece a investigar.', en: 'Review and edit the plan before it starts researching.' },
    { es: 'Evaluar un informe: fuentes, actualidad y pertinencia.', en: 'Evaluate a report: sources, recency and relevance.' }
  ],
  secciones: [
    {
      h: { es: 'Cómo funciona', en: 'How it works' },
      b: [
        { flow: [
          { es: 'Pides un tema', en: 'You ask for a topic' },
          { es: 'Gemini propone un plan', en: 'Gemini proposes a plan' },
          { es: 'Tú lo editas o apruebas', en: 'You edit or approve it' },
          { es: 'Investiga varios minutos', en: 'It researches for minutes' },
          { es: 'Informe con fuentes', en: 'Report with sources' }
        ] },
        { steps: [
          { es: 'En el Gemini app, pulsa **+** (o herramientas) y elige **Deep Research**.', en: 'In the Gemini app, press **+** (or tools) and choose **Deep Research**.' },
          { es: 'Describe qué quieres investigar y para qué.', en: 'Describe what you want to research and why.' },
          { es: 'Revisa el **plan de investigación**: puedes editarlo (añadir, quitar o precisar puntos) antes de iniciarlo.', en: 'Review the **research plan**: you can edit it (add, remove or refine points) before starting.' },
          { es: 'Espera: Gemini busca, lee y ajusta su búsqueda durante varios minutos. Puedes seguir con otras cosas.', en: 'Wait: Gemini searches, reads and refines its search for several minutes. You can do other things meanwhile.' },
          { es: 'Recibe un **informe** con secciones y enlaces a las fuentes. Puedes exportarlo a Google Docs desde Canvas.', en: 'Receive a **report** with sections and links to the sources. You can export it to Google Docs from Canvas.' }
        ] }
      ]
    },
    {
      h: { es: 'Un buen pedido de investigación', en: 'A good research request' },
      b: [
        { prompt: { es: 'Investiga estrategias de evaluación formativa con evidencia en educación secundaria publicadas en los últimos 5 años. Me interesan estrategias aplicables en clases de 30 estudiantes con pocos recursos tecnológicos. Organiza el informe por estrategia, con evidencia, cómo aplicarla y limitaciones. Prioriza fuentes académicas y de organismos educativos.',
                    en: 'Research evidence-based formative assessment strategies in secondary education published in the last 5 years. I am interested in strategies that work in classes of 30 students with few tech resources. Organize the report by strategy, with evidence, how to apply it and limitations. Prioritize academic sources and education bodies.' },
          label: { es: '✦ Pedido para Deep Research', en: '✦ Deep Research request' } },
        { p: { es: 'Fíjate en que incluye **alcance** (secundaria, últimos 5 años), **contexto** (30 estudiantes, pocos recursos), **estructura** del informe y **tipo de fuentes**. Todo eso aparecerá en el plan, y ahí puedes corregirlo.',
               en: 'Notice it includes **scope** (secondary, last 5 years), **context** (30 students, few resources), report **structure** and **source type**. All of that will show up in the plan, where you can correct it.' } }
      ]
    },
    {
      h: { es: 'Leer el informe con ojo crítico', en: 'Reading the report critically' },
      b: [
        { list: [
          { es: '**Abre las fuentes clave.** Comprueba que existen y que dicen lo que el informe afirma.', en: '**Open the key sources.** Check they exist and say what the report claims.' },
          { es: '**Mira la procedencia.** ¿Son estudios, organismos oficiales o blogs comerciales?', en: '**Check provenance.** Are they studies, official bodies or commercial blogs?' },
          { es: '**Revisa fechas.** En temas que cambian rápido, lo antiguo puede estar superado.', en: '**Check dates.** In fast-changing topics, older material may be outdated.' },
          { es: '**Contextualiza.** Una estrategia exitosa en otro país puede necesitar adaptación a tu realidad.', en: '**Contextualize.** A strategy that worked elsewhere may need adapting to your reality.' }
        ] },
        { note: { es: 'Deep Research navega por contenido público de la web: no accede a revistas de pago ni a bases de datos privadas. Si conectas tus apps, también puede usar tus archivos como fuente.',
                  en: 'Deep Research browses public web content: it doesn’t access paywalled journals or private databases. If you connect your apps, it can also use your files as a source.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Del informe al aula', en: 'From report to classroom' },
      b: [
        { p: { es: 'El informe es materia prima. Puedes abrirlo en Canvas y convertirlo en otro formato (una guía para estudiantes, una presentación o un quiz), exportarlo a Docs para editarlo con tu equipo o llevar sus fuentes a un notebook de Gemini Notebook para estudiarlas a fondo.',
               en: 'The report is raw material. You can open it in Canvas and turn it into another format (a student guide, a presentation or a quiz), export it to Docs to edit with your team, or bring its sources into a Gemini Notebook notebook to study them in depth.' } },
        { note: { es: 'Lanza un Deep Research sobre un tema de tu próxima unidad. Antes de aprobar el plan, añade un punto propio y elimina uno que no te sirva. Al final, verifica 3 fuentes.',
                  en: 'Run a Deep Research on a topic from your next unit. Before approving the plan, add one point of your own and remove one you don’t need. At the end, verify 3 sources.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Aprobar el plan sin leerlo: es tu mejor momento para orientar la investigación.', en: 'Approving the plan without reading it: it is your best moment to steer the research.' },
    { es: 'Asumir que un informe con muchas fuentes es automáticamente correcto.', en: 'Assuming a report with many sources is automatically correct.' },
    { es: 'Usar Deep Research para preguntas simples que se responden en un chat normal.', en: 'Using Deep Research for simple questions a normal chat can answer.' }
  ],
  ideas: [
    { es: 'Deep Research = plan editable + varios minutos de búsqueda + informe con fuentes.', en: 'Deep Research = editable plan + minutes of searching + sourced report.' },
    { es: 'Editar el plan es la clave para un informe útil.', en: 'Editing the plan is the key to a useful report.' },
    { es: 'Verifica las fuentes y adapta las conclusiones a tu contexto.', en: 'Verify the sources and adapt the conclusions to your context.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '¿Qué te muestra Deep Research **antes** de empezar a investigar?', en: 'What does Deep Research show you **before** it starts researching?' },
      o: [
        { t: { es: 'El informe final ya terminado y listo', en: 'The final report, finished and ready' },
          why: { es: 'El informe llega al final, después de la investigación.', en: 'The report comes at the end, after the research.' } },
        { ok: true, t: { es: 'Un plan de investigación que puedes editar', en: 'A research plan you can edit' },
          why: { es: 'Correcto: revisarlo y ajustarlo orienta toda la búsqueda.', en: 'Correct: reviewing and adjusting it steers the whole search.' } },
        { t: { es: 'Una lista de preguntas para un examen', en: 'A list of questions for an exam' },
          why: { es: 'Deep Research investiga; no genera exámenes por defecto.', en: 'Deep Research researches; it doesn’t generate exams by default.' } },
        { t: { es: 'El costo estimado de la investigación', en: 'The estimated cost of the research' },
          why: { es: 'No muestra un costo; los límites de uso dependen del plan.', en: 'It doesn’t show a cost; usage limits depend on the plan.' } }
      ] },
    { d: 1,
      q: { es: '¿Para cuál de estas tareas es **más adecuado** Deep Research?', en: 'For which of these tasks is Deep Research **most suitable**?' },
      o: [
        { t: { es: 'Corregir la ortografía de un párrafo', en: 'Fixing the spelling of a paragraph' },
          why: { es: 'Es una tarea simple: basta un chat normal.', en: 'It is a simple task: a normal chat is enough.' } },
        { t: { es: 'Crear una imagen para la portada', en: 'Creating an image for the cover' },
          why: { es: 'Eso corresponde a Nano Banana.', en: 'That is Nano Banana’s job.' } },
        { ok: true, t: { es: 'Revisar la evidencia sobre una estrategia', en: 'Reviewing the evidence on a strategy' },
          why: { es: 'Correcto: necesita buscar, leer y sintetizar muchas fuentes.', en: 'Correct: it requires searching, reading and synthesizing many sources.' } },
        { t: { es: 'Traducir un correo a otro idioma', en: 'Translating an email into another language' },
          why: { es: 'Traducir no requiere investigación web.', en: 'Translating doesn’t require web research.' } }
      ] },
    { d: 3,
      q: { es: 'El informe cita un estudio clave, pero el enlace no abre. ¿Qué haces?', en: 'The report cites a key study, but the link doesn’t open. What do you do?' },
      o: [
        { t: { es: 'Lo uso: si está en el informe, es fiable', en: 'Use it: if it is in the report, it is reliable' },
          why: { es: 'Una fuente no verificable no debe sostener una decisión.', en: 'An unverifiable source shouldn’t support a decision.' } },
        { t: { es: 'Descarto el informe completo', en: 'Discard the entire report' },
          why: { es: 'Es excesivo: verifica y descarta solo lo que no se sostiene.', en: 'That is excessive: verify and drop only what doesn’t hold up.' } },
        { ok: true, t: { es: 'Busco el estudio por otra vía antes de usarlo', en: 'Look for the study another way before using it' },
          why: { es: 'Correcto: si no aparece, no lo cites; puede ser una alucinación.', en: 'Correct: if it doesn’t turn up, don’t cite it; it may be a hallucination.' } },
        { t: { es: 'Pido a Gemini que confirme que existe', en: 'Ask Gemini to confirm it exists' },
          why: { es: 'Gemini puede confirmar con seguridad algo falso; verifica tú.', en: 'Gemini may confidently confirm something false; check it yourself.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Workspace Blog — Meet Deep Research', url: 'https://workspace.google.com/blog/ai-and-machine-learning/meet-deep-research-your-new-ai-research-assistant' },
    { t: 'Google — Gemini Apps Help', url: 'https://support.google.com/gemini/' }
  ]
};
