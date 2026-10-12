/* Módulo 04 · Modelos y planes: Auto, Flash-Lite, Flash, Pro y thinking */
GDC.MOD['04'] = {
  min: 12,
  intro: {
    es: 'Gemini no es un solo modelo: hay versiones más rápidas y otras que razonan más a fondo, y distintos planes de acceso. Aquí aprenderás a elegir la combinación adecuada para cada tarea docente sin perderte en números de versión.',
    en: 'Gemini isn’t a single model: there are faster versions and others that reason more deeply, plus different access plans. Here you will learn to pick the right combination for each teaching task without getting lost in version numbers.'
  },
  objetivos: [
    { es: 'Diferenciar los modelos **Flash-Lite**, **Flash** y **Pro**, y el modo **Auto**.', en: 'Tell apart the **Flash-Lite**, **Flash** and **Pro** models, and **Auto** mode.' },
    { es: 'Saber cuándo subir el nivel de **thinking** (razonamiento).', en: 'Know when to raise the **thinking** (reasoning) level.' },
    { es: 'Reconocer los planes de Gemini y qué ofrece la cuenta educativa.', en: 'Recognize Gemini’s plans and what the education account offers.' }
  ],
  secciones: [
    {
      h: { es: 'Tres «velocidades» de modelo', en: 'Three model “speeds”' },
      b: [
        { p: { es: 'En el selector de modelo del Gemini app verás nombres como **Flash-Lite**, **Flash** y **Pro**. Piensa en ellos como capas: cuanto más arriba, más capacidad de razonamiento y más tiempo de respuesta.',
               en: 'In the Gemini app’s model picker you will see names like **Flash-Lite**, **Flash** and **Pro**. Think of them as layers: the higher up, the more reasoning power and the longer the response time.' } },
        { table: {
          head: [{ es: 'Modelo', en: 'Model' }, { es: 'Fortaleza', en: 'Strength' }, { es: 'Ejemplos de uso docente', en: 'Teaching examples' }],
          rows: [
            [{ es: 'Flash-Lite', en: 'Flash-Lite' }, { es: 'La respuesta más rápida', en: 'The fastest answer' }, { es: 'Reformular una consigna, corregir ortografía, dar ideas rápidas', en: 'Rephrase an instruction, fix spelling, quick ideas' }],
            [{ es: 'Flash', en: 'Flash' }, { es: 'Equilibrio entre velocidad y calidad', en: 'Balance of speed and quality' }, { es: 'Correos a familias, resúmenes de textos largos, dinámicas rompehielos', en: 'Emails to families, summaries of long texts, icebreakers' }],
            [{ es: 'Pro', en: 'Pro' }, { es: 'Razonamiento avanzado y tareas complejas', en: 'Advanced reasoning and complex tasks' }, { es: 'Rediseñar el plan anual, optimizar rúbricas complejas, retroalimentar ensayos largos', en: 'Redesign the yearly plan, refine complex rubrics, give feedback on long essays' }]
          ]
        } },
        { note: { es: 'Los números de versión (por ejemplo, 3.6 Flash o 3.1 Pro) cambian cada pocos meses. Aprende el **concepto** de cada capa; la versión exacta la verás en tu selector. Verificado: 2026-10-10.',
                  en: 'Version numbers (for example, 3.6 Flash or 3.1 Pro) change every few months. Learn the **concept** of each layer; you will see the exact version in your picker. Verified: 2026-10-10.' }, kind: 'info' }
      ]
    },
    {
      h: { es: 'Auto y los niveles de thinking', en: 'Auto and thinking levels' },
      b: [
        { p: { es: 'En el plan gratuito, el selector muestra **Auto**: Gemini decide qué modelo usar según tu prompt (lo simple va a Flash-Lite; lo difícil, a Flash o Pro). En los planes de pago puedes elegir el modelo a mano.',
               en: 'On the free plan, the picker shows **Auto**: Gemini decides which model to use based on your prompt (simple tasks go to Flash-Lite; hard ones to Flash or Pro). On paid plans you can choose the model manually.' } },
        { p: { es: 'El **thinking** es el tiempo que el modelo dedica a razonar antes de responder. Ya no es un modelo aparte: es un nivel que ajustas (**Low**, **Medium**, **High**). Más thinking = respuestas más cuidadosas en problemas de varios pasos, a cambio de esperar un poco más.',
               en: '**Thinking** is the time the model spends reasoning before answering. It is no longer a separate model: it is a level you set (**Low**, **Medium**, **High**). More thinking = more careful answers on multi-step problems, in exchange for waiting a bit longer.' } },
        { table: {
          head: [{ es: 'Situación', en: 'Situation' }, { es: 'Thinking sugerido', en: 'Suggested thinking' }],
          rows: [
            [{ es: 'Redactar un aviso breve', en: 'Write a short notice' }, { es: 'Low', en: 'Low' }],
            [{ es: 'Armar una secuencia didáctica de 4 semanas', en: 'Build a 4-week teaching sequence' }, { es: 'Medium', en: 'Medium' }],
            [{ es: 'Analizar un caso de convivencia escolar y proponer una mediación', en: 'Analyze a school-conflict case and propose a mediation' }, { es: 'High', en: 'High' }],
            [{ es: 'Adaptar una actividad para estudiantes con necesidades especiales (DUA)', en: 'Adapt an activity for students with special needs (UDL)' }, { es: 'High', en: 'High' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Los planes de Gemini', en: 'Gemini’s plans' },
      b: [
        { p: { es: 'Para cuentas personales existen el plan **gratuito** y suscripciones de pago (**Google AI Plus**, **Google AI Pro** y **Google AI Ultra**), que amplían los límites de uso y dan acceso a modelos y funciones avanzadas. Los precios varían por país.',
               en: 'For personal accounts there is the **free** plan and paid subscriptions (**Google AI Plus**, **Google AI Pro** and **Google AI Ultra**), which raise usage limits and unlock advanced models and features. Prices vary by country.' } },
        { p: { es: 'Para instituciones educativas, **Gemini for Education** viene incluido sin costo en las ediciones de Workspace for Education, con acceso a modelos premium y protección de datos. El complemento de pago **Google AI Pro for Education** suma Gemini dentro de Docs, Gmail, Forms, Vids y más.',
               en: 'For schools, **Gemini for Education** is included at no cost in Workspace for Education editions, with access to premium models and data protection. The paid **Google AI Pro for Education** add-on brings Gemini inside Docs, Gmail, Forms, Vids and more.' } },
        { note: { es: 'El examen se centra en las funciones **gratuitas** de Gemini. Puede haber preguntas sobre funciones pagas, pero no puntúan.',
                  en: 'The exam focuses on Gemini’s **free** features. There may be questions on paid features, but they aren’t scored.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Cómo elegir sin complicarte', en: 'How to choose without overthinking' },
      b: [
        { flow: [
          { es: '¿Es simple y rápido? → Auto o Flash-Lite', en: 'Simple and quick? → Auto or Flash-Lite' },
          { es: '¿Uso diario con calidad? → Flash', en: 'Daily use with quality? → Flash' },
          { es: '¿Muchos pasos o mucho material? → Pro', en: 'Many steps or lots of material? → Pro' },
          { es: '¿Delicado o lógico? → sube el thinking', en: 'Sensitive or logical? → raise thinking' }
        ] },
        { note: { es: 'Pide el mismo plan de clase con Flash y con Pro. Compara la profundidad, la estructura y el tiempo de espera. Así calibras cuándo vale la pena usar cada uno.',
                  en: 'Ask for the same lesson plan with Flash and with Pro. Compare depth, structure and waiting time. That way you calibrate when each one is worth it.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Usar siempre el modelo más potente «por si acaso»: para tareas simples solo añade espera.', en: 'Always using the most powerful model “just in case”: for simple tasks it only adds waiting.' },
    { es: 'Memorizar números de versión para el examen: lo que se evalúa es el uso educativo, no el número.', en: 'Memorizing version numbers for the exam: what is assessed is educational use, not the number.' },
    { es: 'Creer que un modelo con más razonamiento no se equivoca: también hay que verificar.', en: 'Believing a model with more reasoning can’t be wrong: you still need to verify.' }
  ],
  ideas: [
    { es: 'Flash-Lite = rapidez · Flash = equilibrio · Pro = razonamiento avanzado.', en: 'Flash-Lite = speed · Flash = balance · Pro = advanced reasoning.' },
    { es: 'Auto elige por ti; el thinking (Low/Medium/High) ajusta la profundidad.', en: 'Auto chooses for you; thinking (Low/Medium/High) sets the depth.' },
    { es: 'Gemini for Education está incluido sin costo en Workspace for Education.', en: 'Gemini for Education is included at no cost in Workspace for Education.' }
  ],
  quiz: [
    { d: 1,
      q: { es: 'Necesitas rediseñar el plan anual de tu curso a partir del currículo y de tres documentos largos. ¿Qué eliges?', en: 'You need to redesign your course’s yearly plan from the curriculum and three long documents. What do you choose?' },
      o: [
        { t: { es: 'Flash-Lite, porque responde más rápido', en: 'Flash-Lite, because it answers fastest' },
          why: { es: 'La rapidez no compensa la falta de profundidad en una tarea compleja.', en: 'Speed doesn’t make up for lack of depth in a complex task.' } },
        { ok: true, t: { es: 'Pro, con un nivel alto de thinking', en: 'Pro, with a high thinking level' },
          why: { es: 'Correcto: mucho material y muchos pasos piden razonamiento avanzado.', en: 'Correct: lots of material and many steps call for advanced reasoning.' } },
        { t: { es: 'Cualquiera: todos dan el mismo resultado', en: 'Any of them: they all give the same result' },
          why: { es: 'Los modelos difieren en capacidad; no dan el mismo resultado.', en: 'Models differ in capability; they don’t give the same result.' } },
        { t: { es: 'Ninguno: Gemini no puede leer documentos', en: 'None: Gemini can’t read documents' },
          why: { es: 'Gemini sí analiza documentos adjuntos (módulo 08).', en: 'Gemini does analyze attached documents (module 08).' } }
      ] },
    { d: 1,
      q: { es: 'En una cuenta gratuita solo ves la opción **Auto** en el selector. ¿Qué significa?', en: 'On a free account you only see **Auto** in the picker. What does it mean?' },
      o: [
        { t: { es: 'Que tu cuenta tiene un error de configuración', en: 'That your account has a setup error' },
          why: { es: 'No es un error: es como funciona el plan gratuito hoy.', en: 'It isn’t an error: it is how the free plan works today.' } },
        { t: { es: 'Que solo puedes usar el modelo más básico', en: 'That you can only use the most basic model' },
          why: { es: 'Auto puede derivar los prompts difíciles a Flash o Pro.', en: 'Auto can route hard prompts to Flash or Pro.' } },
        { ok: true, t: { es: 'Que Gemini elige el modelo según tu prompt', en: 'That Gemini picks the model based on your prompt' },
          why: { es: 'Correcto: Auto envía lo simple a Flash-Lite y lo difícil a Flash o Pro.', en: 'Correct: Auto sends simple prompts to Flash-Lite and hard ones to Flash or Pro.' } },
        { t: { es: 'Que el thinking está desactivado del todo', en: 'That thinking is fully switched off' },
          why: { es: 'Auto no desactiva el razonamiento; decide cuánto aplicar.', en: 'Auto doesn’t switch off reasoning; it decides how much to apply.' } }
      ] },
    { d: 1,
      q: { es: 'Tu institución usa Google Workspace for Education. ¿Qué tienes sin pagar nada extra?', en: 'Your school uses Google Workspace for Education. What do you get without paying extra?' },
      o: [
        { t: { es: 'Gemini dentro de Gmail, Docs, Forms y Vids', en: 'Gemini inside Gmail, Docs, Forms and Vids' },
          why: { es: 'Gemini dentro de esas apps corresponde al complemento de pago AI Pro for Education.', en: 'Gemini inside those apps comes with the paid AI Pro for Education add-on.' } },
        { ok: true, t: { es: 'Gemini for Education con protección de datos', en: 'Gemini for Education with data protection' },
          why: { es: 'Correcto: viene incluido sin costo en las ediciones de Workspace for Education.', en: 'Correct: it is included at no cost in Workspace for Education editions.' } },
        { t: { es: 'Acceso ilimitado a todos los modelos', en: 'Unlimited access to every model' },
          why: { es: 'Hay límites de uso; «ilimitado» no describe ningún plan.', en: 'There are usage limits; “unlimited” doesn’t describe any plan.' } },
        { t: { es: 'Nada: Gemini siempre requiere un plan pago', en: 'Nothing: Gemini always requires a paid plan' },
          why: { es: 'Falso: existe un plan gratuito y Gemini for Education está incluido.', en: 'False: there is a free plan and Gemini for Education is included.' } }
      ] }
  ],
  fuentes: [
    { t: 'Gemini — Release notes', url: 'https://gemini.google/release-notes/' },
    { t: 'Gemini — Google AI Pro & Ultra', url: 'https://gemini.google/subscriptions/' },
    { t: 'Google for Education — Gemini for Education', url: 'https://edu.google.com/intl/ALL_us/ai/gemini-for-education/' },
    { t: 'Google for Education — Gemini Certifications FAQ', url: 'https://support.google.com/googleforeducation/answer/16561655?hl=es' }
  ]
};
