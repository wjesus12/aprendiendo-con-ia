/* Módulo 06 · El marco PARTS y los prompts efectivos */
GDC.MOD['06'] = {
  min: 16,
  intro: {
    es: 'Escribir buenos prompts es la habilidad que más rinde con Gemini. Aquí aprenderás dos marcos que se complementan: **PARTS**, el que cita la guía oficial del examen, y **Propósito · Audiencia · Formato · Límites**, una estructura práctica para el día a día docente.',
    en: 'Writing good prompts is the skill that pays off most with Gemini. Here you will learn two complementary frameworks: **PARTS**, the one cited by the official exam guide, and **Purpose · Audience · Format · Limits**, a practical structure for everyday teaching.'
  },
  objetivos: [
    { es: 'Construir prompts con el marco **PARTS** (Persona, Act/Aim, Recipient, Theme, Structure).', en: 'Build prompts with the **PARTS** framework (Persona, Act/Aim, Recipient, Theme, Structure).' },
    { es: 'Distinguir un prompt efectivo de uno poco efectivo por su claridad, especificidad y resultado esperado.', en: 'Tell an effective prompt from a less effective one by its clarity, specificity and intended outcome.' },
    { es: 'Añadir **límites** que eviten datos inventados.', en: 'Add **limits** that prevent invented data.' }
  ],
  secciones: [
    {
      h: { es: 'El marco PARTS', en: 'The PARTS framework' },
      b: [
        { p: { es: 'Google for Education recomienda el marco **PARTS** para crear prompts. Sus cinco piezas le dan a Gemini el contexto que necesita:', en: 'Google for Education recommends the **PARTS** framework for creating prompts. Its five pieces give Gemini the context it needs:' } },
        { table: {
          head: [{ es: 'Letra', en: 'Letter' }, { es: 'Qué defines', en: 'What you define' }, { es: 'Ejemplo', en: 'Example' }],
          rows: [
            [{ es: 'P · Persona', en: 'P · Persona' }, { es: 'El rol que adopta Gemini', en: 'The role Gemini takes on' }, { es: '«Actúa como diseñador instruccional con experiencia en secundaria»', en: '“Act as an instructional designer experienced in secondary school”' }],
            [{ es: 'A · Act / Aim', en: 'A · Act / Aim' }, { es: 'La tarea (con un verbo de acción) o el objetivo', en: 'The task (with an action verb) or the goal' }, { es: '«Crea un quiz de 8 preguntas»', en: '“Create an 8-question quiz”' }],
            [{ es: 'R · Recipient', en: 'R · Recipient' }, { es: 'Para quién es el resultado', en: 'Who the result is for' }, { es: '«para estudiantes de 14 años con nivel básico»', en: '“for 14-year-old students at a basic level”' }],
            [{ es: 'T · Theme', en: 'T · Theme' }, { es: 'El tema y el contexto', en: 'The topic and context' }, { es: '«sobre el ciclo del agua, unidad 2 del curso»', en: '“on the water cycle, unit 2 of the course”' }],
            [{ es: 'S · Structure', en: 'S · Structure' }, { es: 'El formato de la salida', en: 'The output format' }, { es: '«en una tabla con pregunta, opciones y respuesta»', en: '“in a table with question, options and answer”' }]
          ]
        } },
        { note: { es: 'Según la fuente, la segunda letra aparece como **Act** (la acción) o como **Aim** (el objetivo). La idea es la misma: decir con claridad qué quieres lograr. No hace falta usar las cinco piezas siempre.',
                  en: 'Depending on the source, the second letter appears as **Act** (the action) or **Aim** (the goal). The idea is the same: say clearly what you want to achieve. You don’t always need all five pieces.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Propósito · Audiencia · Formato · Límites', en: 'Purpose · Audience · Format · Limits' },
      b: [
        { p: { es: 'Una forma práctica de pensar el mismo problema, muy útil en la planificación docente, es responder cuatro preguntas antes de escribir:', en: 'A practical way to think about the same problem, very useful in lesson planning, is to answer four questions before writing:' } },
        { table: {
          head: [{ es: 'Pieza', en: 'Piece' }, { es: 'Pregunta', en: 'Question' }],
          rows: [
            [{ es: 'Propósito', en: 'Purpose' }, { es: '¿Qué problema debe resolver el recurso?', en: 'What problem must the resource solve?' }],
            [{ es: 'Audiencia', en: 'Audience' }, { es: '¿Para quién se diseña y en qué nivel?', en: 'Who is it designed for, and at what level?' }],
            [{ es: 'Formato', en: 'Format' }, { es: '¿Actividad, guía, borrador, aplicación o presentación?', en: 'Activity, guide, draft, app or presentation?' }],
            [{ es: 'Límites', en: 'Limits' }, { es: '¿Qué debe verificar, evitar o no inventar?', en: 'What must it verify, avoid or not invent?' }]
          ]
        } },
        { p: { es: 'Fíjate en que **Límites** no aparece en PARTS: es la pieza que más protege contra las alucinaciones (módulo 05). Úsala junto con PARTS: Persona + Propósito/Act + Audiencia/Recipient + Tema + Formato/Structure + **Límites**.',
               en: 'Notice that **Limits** isn’t in PARTS: it is the piece that best protects against hallucinations (module 05). Use it together with PARTS: Persona + Purpose/Act + Audience/Recipient + Theme + Format/Structure + **Limits**.' } }
      ]
    },
    {
      h: { es: 'Del prompt flojo al prompt situado', en: 'From weak prompt to situated prompt' },
      b: [
        { compare: {
          bad: { t: { es: 'Hazme una rúbrica de ensayo.', en: 'Make me an essay rubric.' },
                 why: { es: 'No dice para quién, qué tipo de ensayo, cuántos criterios ni cómo se califica.', en: 'It doesn’t say for whom, what kind of essay, how many criteria or how it is graded.' } },
          good: { t: { es: 'Actúa como docente de lenguaje de secundaria. Crea una rúbrica analítica para un ensayo argumentativo de 600 palabras de estudiantes de 15 años. Usa 4 criterios (tesis, argumentos, evidencias, redacción) y 4 niveles de desempeño, en una tabla. Lenguaje claro para que los estudiantes la entiendan.',
                       en: 'Act as a secondary-school language teacher. Create an analytic rubric for a 600-word argumentative essay by 15-year-old students. Use 4 criteria (thesis, arguments, evidence, writing) and 4 performance levels, in a table. Clear language so students can understand it.' },
                  why: { es: 'Tiene Persona, tarea, audiencia, tema y estructura: Gemini sabe exactamente qué entregar.', en: 'It has Persona, task, audience, theme and structure: Gemini knows exactly what to deliver.' } }
        } },
        { prompt: { es: 'Persona: actúa como [rol].\nTarea: [verbo + producto], para [propósito].\nAudiencia: [quiénes, edad/nivel, conocimientos previos].\nTema: [tema, unidad, contexto del curso].\nFormato: [tabla / lista / 10 diapositivas / extensión].\nLímites: basa el contenido solo en [fuente]; no inventes datos; marca con [VERIFICAR] lo dudoso.',
                    en: 'Persona: act as [role].\nTask: [verb + product], for [purpose].\nAudience: [who, age/level, prior knowledge].\nTheme: [topic, unit, course context].\nFormat: [table / list / 10 slides / length].\nLimits: base the content only on [source]; don’t invent data; mark doubts with [VERIFY].' },
          label: { es: '✦ Plantilla PARTS + Límites', en: '✦ PARTS + Limits template' } }
      ]
    },
    {
      h: { es: 'Trucos que suman', en: 'Tricks that add up' },
      b: [
        { list: [
          { es: '**Verbos de acción:** crea, resume, explica, reescribe, analiza, compara, adapta.', en: '**Action verbs:** create, summarize, explain, rewrite, analyze, compare, adapt.' },
          { es: '**Da un ejemplo** del estilo que quieres («algo como esto: …»).', en: '**Give an example** of the style you want (“something like this: …”).' },
          { es: '**Pide preguntas primero:** «Antes de responder, hazme 3 preguntas para entender mejor lo que necesito».', en: '**Ask for questions first:** “Before answering, ask me 3 questions to better understand what I need.”' },
          { es: '**Usa lenguaje natural:** escribe como le pedirías algo a un colega; no hacen falta palabras mágicas.', en: '**Use natural language:** write as you would ask a colleague; no magic words needed.' }
        ] },
        { note: { es: 'Toma un prompt que hayas usado esta semana y reescríbelo con la plantilla PARTS + Límites. Compara las dos respuestas.', en: 'Take a prompt you used this week and rewrite it with the PARTS + Limits template. Compare the two answers.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Creer que un prompt más largo siempre es mejor: lo que cuenta es que sea claro y específico.', en: 'Believing a longer prompt is always better: what counts is that it is clear and specific.' },
    { es: 'Olvidar la audiencia: el mismo tema para 8 o para 18 años necesita respuestas muy distintas.', en: 'Forgetting the audience: the same topic for 8- or 18-year-olds needs very different answers.' },
    { es: 'Omitir los límites y luego sorprenderse por datos inventados.', en: 'Leaving out limits and then being surprised by invented data.' }
  ],
  ideas: [
    { es: 'PARTS = Persona, Act/Aim, Recipient, Theme, Structure.', en: 'PARTS = Persona, Act/Aim, Recipient, Theme, Structure.' },
    { es: 'Propósito · Audiencia · Formato · Límites: los límites protegen contra lo inventado.', en: 'Purpose · Audience · Format · Limits: limits protect against made-up content.' },
    { es: 'Un prompt efectivo es claro, específico y deja ver el resultado esperado.', en: 'An effective prompt is clear, specific and shows the intended outcome.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'En el prompt «Crea un quiz de 8 preguntas para estudiantes de 14 años», ¿qué pieza de PARTS es «estudiantes de 14 años»?', en: 'In the prompt “Create an 8-question quiz for 14-year-old students”, which PARTS piece is “14-year-old students”?' },
      o: [
        { t: { es: 'Persona', en: 'Persona' }, why: { es: 'Persona es el rol que adopta Gemini, no el público.', en: 'Persona is the role Gemini takes on, not the audience.' } },
        { t: { es: 'Theme', en: 'Theme' }, why: { es: 'Theme es el tema o contexto (por ejemplo, el ciclo del agua).', en: 'Theme is the topic or context (for example, the water cycle).' } },
        { ok: true, t: { es: 'Recipient', en: 'Recipient' }, why: { es: 'Correcto: Recipient es para quién es el resultado.', en: 'Correct: Recipient is who the result is for.' } },
        { t: { es: 'Structure', en: 'Structure' }, why: { es: 'Structure es el formato de la salida (tabla, lista…).', en: 'Structure is the output format (table, list…).' } }
      ] },
    { d: 2,
      q: { es: '¿Cuál de estos prompts es el **más efectivo**?', en: 'Which of these prompts is the **most effective**?' },
      o: [
        { t: { es: '«Explica la fotosíntesis de forma muy completa y detallada»', en: '“Explain photosynthesis very fully and in great detail”' },
          why: { es: 'Pide detalle, pero no dice para quién ni en qué formato.', en: 'It asks for detail but doesn’t say for whom or in what format.' } },
        { ok: true, t: { es: '«Explica la fotosíntesis a niños de 9 años en 5 pasos»', en: '“Explain photosynthesis to 9-year-olds in 5 steps”' },
          why: { es: 'Correcto: es breve pero específico en audiencia y estructura.', en: 'Correct: it is short but specific about audience and structure.' } },
        { t: { es: '«Fotosíntesis: todo lo que sepas sobre ella, por favor»', en: '“Photosynthesis: everything you know about it, please”' },
          why: { es: 'Es vago: «todo lo que sepas» no orienta el resultado.', en: 'It is vague: “everything you know” doesn’t guide the result.' } },
        { t: { es: '«Eres un experto. Habla de la fotosíntesis ahora»', en: '“You are an expert. Talk about photosynthesis now”' },
          why: { es: 'Define una persona, pero ni tarea concreta ni audiencia.', en: 'It sets a persona but no concrete task or audience.' } }
      ] },
    { d: 3,
      q: { es: '¿Qué pieza añadirías para que Gemini **no invente** datos al crear un material a partir de tu sílabo?', en: 'Which piece would you add so Gemini **doesn’t invent** data when creating material from your syllabus?' },
      o: [
        { t: { es: 'Una Persona más experta en el tema', en: 'A Persona with more subject expertise' },
          why: { es: 'Un rol experto no garantiza fidelidad a tu fuente.', en: 'An expert role doesn’t guarantee faithfulness to your source.' } },
        { t: { es: 'Un formato de salida más detallado', en: 'A more detailed output format' },
          why: { es: 'El formato ordena la salida, pero no evita lo inventado.', en: 'Format organizes the output but doesn’t prevent made-up content.' } },
        { t: { es: 'Una audiencia descrita con más precisión', en: 'An audience described more precisely' },
          why: { es: 'Ajusta el nivel, pero no controla de dónde salen los datos.', en: 'It adjusts the level but doesn’t control where data comes from.' } },
        { ok: true, t: { es: 'Límites: solo el sílabo, sin inventar', en: 'Limits: only the syllabus, no inventing' },
          why: { es: 'Correcto: los límites anclan el contenido a tu fuente.', en: 'Correct: limits anchor the content to your source.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (objetivo 2.2.1, PARTS)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google for Education — Generative AI for Educators with Gemini', url: 'https://edu.exceedlms.com/student/path/1787126-generative-ai-for-educators-with-gemini' }
  ]
};
