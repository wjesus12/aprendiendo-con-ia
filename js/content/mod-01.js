/* Módulo 01 · ¿Qué es la IA? De la IA tradicional a la IA generativa */
GDC.MOD['01'] = {
  min: 12,
  intro: {
    es: 'Antes de abrir Gemini conviene entender qué tipo de herramienta es. En este módulo verás qué es la inteligencia artificial, en qué se diferencia la IA generativa de la IA que ya usabas sin saberlo y por qué eso cambia tu forma de trabajar.',
    en: 'Before opening Gemini, it helps to understand what kind of tool it is. In this module you will see what artificial intelligence is, how generative AI differs from the AI you were already using without knowing it, and why that changes the way you work.'
  },
  objetivos: [
    { es: 'Explicar con tus palabras qué es la inteligencia artificial.', en: 'Explain in your own words what artificial intelligence is.' },
    { es: 'Distinguir la IA tradicional (predictiva) de la **IA generativa**.', en: 'Tell traditional (predictive) AI apart from **generative AI**.' },
    { es: 'Reconocer qué puede crear Gemini y qué no puede hacer por ti.', en: 'Recognize what Gemini can create and what it cannot do for you.' }
  ],
  secciones: [
    {
      h: { es: 'La IA ya estaba en tu día a día', en: 'AI was already part of your day' },
      b: [
        { p: { es: 'La **inteligencia artificial (IA)** es el campo que construye sistemas capaces de realizar tareas que normalmente requieren inteligencia humana: reconocer patrones, clasificar, predecir, entender lenguaje o tomar decisiones a partir de datos.',
               en: '**Artificial intelligence (AI)** is the field that builds systems able to perform tasks that normally require human intelligence: recognizing patterns, classifying, predicting, understanding language or making decisions from data.' } },
        { p: { es: 'Mucho antes de Gemini ya usabas IA: el filtro que manda el spam a otra carpeta, el mapa que calcula la ruta con menos tráfico o la plataforma que te recomienda el siguiente video. Esas IA **analizan** datos y **eligen** una respuesta entre opciones conocidas.',
               en: 'Long before Gemini you were already using AI: the filter that sends spam to another folder, the map that finds the route with the least traffic, or the platform that recommends your next video. Those AIs **analyze** data and **choose** an answer among known options.' } }
      ]
    },
    {
      h: { es: 'IA tradicional frente a IA generativa', en: 'Traditional AI versus generative AI' },
      b: [
        { p: { es: 'La **IA generativa (GenAI)** da un paso más: en lugar de solo clasificar o predecir, **crea contenido nuevo** —texto, imágenes, audio, video o código— a partir de lo que aprendió de enormes cantidades de datos y de la instrucción que tú le das.',
               en: '**Generative AI (GenAI)** goes one step further: instead of only classifying or predicting, it **creates new content** — text, images, audio, video or code — based on what it learned from huge amounts of data and on the instruction you give it.' } },
        { table: {
          head: [{ es: 'Aspecto', en: 'Aspect' }, { es: 'IA tradicional', en: 'Traditional AI' }, { es: 'IA generativa', en: 'Generative AI' }],
          rows: [
            [{ es: 'Qué hace', en: 'What it does' }, { es: 'Clasifica, predice, recomienda', en: 'Classifies, predicts, recommends' }, { es: 'Crea contenido nuevo', en: 'Creates new content' }],
            [{ es: 'Ejemplo', en: 'Example' }, { es: '«Este correo es spam»', en: '“This email is spam”' }, { es: '«Redacta un correo para las familias»', en: '“Write an email to families”' }],
            [{ es: 'Cómo le hablas', en: 'How you talk to it' }, { es: 'Normalmente no le hablas: actúa sola', en: 'You usually don’t: it acts on its own' }, { es: 'Con lenguaje natural: un **prompt**', en: 'In natural language: a **prompt**' }],
            [{ es: 'Resultado', en: 'Output' }, { es: 'Una etiqueta o un número', en: 'A label or a number' }, { es: 'Un texto, imagen, código…', en: 'A text, image, code…' }]
          ]
        } },
        { note: { es: 'La guía oficial del examen pide «explicar cómo la IA generativa difiere de otras formas de IA» (objetivo 1.2.1). La clave: la generativa **produce** contenido nuevo; la tradicional **analiza** y elige entre opciones.',
                  en: 'The official exam guide asks you to “explain how generative AI differs from other forms of AI” (objective 1.2.1). The key: generative AI **produces** new content; traditional AI **analyzes** and chooses among options.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Gemini: IA generativa y multimodal', en: 'Gemini: generative and multimodal AI' },
      b: [
        { p: { es: '**Gemini** es la familia de modelos de IA generativa de Google y también el nombre del asistente con el que conversas. Es **multimodal**: entiende y combina texto, imágenes, audio, video y documentos en una misma conversación.',
               en: '**Gemini** is Google’s family of generative AI models and also the name of the assistant you chat with. It is **multimodal**: it understands and combines text, images, audio, video and documents in the same conversation.' } },
        { p: { es: 'Alrededor de Gemini —el cerebro— hay herramientas especializadas que verás en esta ruta:', en: 'Around Gemini — the brain — there are specialized tools you will meet along this path:' } },
        { table: {
          head: [{ es: 'Herramienta', en: 'Tool' }, { es: 'Para qué sirve', en: 'What it is for' }],
          rows: [
            [{ es: 'Canvas', en: 'Canvas' }, { es: 'Construir y editar documentos, slides, quizzes, apps y páginas web', en: 'Build and edit documents, slides, quizzes, apps and web pages' }],
            [{ es: 'Gems', en: 'Gems' }, { es: 'Asistentes a medida para tareas que repites', en: 'Custom assistants for tasks you repeat' }],
            [{ es: 'Gemini Notebook', en: 'Gemini Notebook' }, { es: 'Investigar solo con tus fuentes, con citas', en: 'Research only with your sources, with citations' }],
            [{ es: 'Nano Banana', en: 'Nano Banana' }, { es: 'Crear y editar imágenes', en: 'Create and edit images' }],
            [{ es: 'Deep Research', en: 'Deep Research' }, { es: 'Investigar en la web y entregar un informe con fuentes', en: 'Research the web and deliver a sourced report' }],
            [{ es: 'Guided Learning', en: 'Guided Learning' }, { es: 'Aprender paso a paso con preguntas, como con un tutor', en: 'Learn step by step through questions, like with a tutor' }],
            [{ es: 'Drive y Workspace', en: 'Drive and Workspace' }, { es: 'Trabajar con tus archivos, Gmail, Docs, Sheets y Slides', en: 'Work with your files, Gmail, Docs, Sheets and Slides' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Lo que la IA generativa no hace por ti', en: 'What generative AI does not do for you' },
      b: [
        { p: { es: 'La IA generativa produce respuestas **probables**, no necesariamente **verdaderas**. No conoce a tus estudiantes, no comparte tus criterios pedagógicos y puede equivocarse con total seguridad. Por eso el rol humano no desaparece: cambia.',
               en: 'Generative AI produces **likely** answers, not necessarily **true** ones. It doesn’t know your students, doesn’t share your teaching criteria and can be wrong with total confidence. That is why the human role doesn’t disappear: it changes.' } },
        { quote: { es: 'La IA libera tiempo cuando el docente define el propósito y revisa el resultado.', en: 'AI frees up time when the teacher defines the purpose and reviews the result.' } },
        { note: { es: 'Piensa en una tarea docente que te exija mucho tiempo o que sea repetitiva. Tenla presente: a lo largo de la ruta verás qué herramienta de Gemini te ayuda con ella.',
                  en: 'Think of a teaching task that takes you a lot of time or is repetitive. Keep it in mind: throughout the path you will see which Gemini tool helps you with it.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Creer que la IA generativa «busca» la respuesta correcta como un buscador: en realidad genera texto probable.', en: 'Believing generative AI “looks up” the right answer like a search engine: it actually generates likely text.' },
    { es: 'Pensar que toda IA es generativa: el filtro de spam o las recomendaciones son IA, pero no generan contenido.', en: 'Thinking all AI is generative: spam filters or recommendations are AI, but they don’t generate content.' },
    { es: 'Suponer que, como escribe bien, también sabe lo que conviene a tu grupo de estudiantes.', en: 'Assuming that, because it writes well, it also knows what suits your group of students.' }
  ],
  ideas: [
    { es: 'IA = sistemas que hacen tareas que requieren inteligencia humana.', en: 'AI = systems that perform tasks requiring human intelligence.' },
    { es: 'La IA generativa **crea** contenido nuevo a partir de un prompt; la tradicional **analiza** y elige.', en: 'Generative AI **creates** new content from a prompt; traditional AI **analyzes** and chooses.' },
    { es: 'Gemini es multimodal y es el «cerebro» de un ecosistema de herramientas.', en: 'Gemini is multimodal and is the “brain” of an ecosystem of tools.' },
    { es: 'Tú defines el propósito y validas el resultado.', en: 'You set the purpose and validate the result.' }
  ],
  quiz: [
    { d: 1,
      q: { es: 'Un docente compara dos herramientas. ¿Cuál es un ejemplo de IA **generativa**?', en: 'A teacher compares two tools. Which is an example of **generative** AI?' },
      o: [
        { ok: true, t: { es: 'Una herramienta que redacta una guía de lectura nueva', en: 'A tool that writes a brand-new reading guide' },
          why: { es: 'Correcto: crea contenido que no existía a partir de una instrucción.', en: 'Correct: it creates content that didn’t exist, based on an instruction.' } },
        { t: { es: 'Un filtro que separa los correos de spam del resto', en: 'A filter that separates spam from other emails' },
          why: { es: 'Es IA, pero clasifica entre opciones conocidas: no genera nada nuevo.', en: 'It is AI, but it classifies among known options: it generates nothing new.' } },
        { t: { es: 'Un sistema que predice qué alumno podría desertar', en: 'A system that predicts which student might drop out' },
          why: { es: 'Es IA predictiva: estima una probabilidad, no crea contenido.', en: 'It is predictive AI: it estimates a probability, it doesn’t create content.' } },
        { t: { es: 'Una plataforma que recomienda el siguiente video', en: 'A platform that recommends the next video' },
          why: { es: 'Recomendar es elegir entre contenidos existentes: IA tradicional.', en: 'Recommending is choosing among existing content: traditional AI.' } }
      ] },
    { d: 1,
      q: { es: '¿Qué significa que Gemini sea **multimodal**?', en: 'What does it mean that Gemini is **multimodal**?' },
      o: [
        { t: { es: 'Que funciona en varios idiomas a la vez', en: 'That it works in several languages at once' },
          why: { es: 'Gemini es multilingüe, pero «multimodal» se refiere a tipos de información, no a idiomas.', en: 'Gemini is multilingual, but “multimodal” refers to types of information, not languages.' } },
        { ok: true, t: { es: 'Que combina texto, imagen, audio y video', en: 'That it combines text, image, audio and video' },
          why: { es: 'Correcto: entiende y mezcla distintos tipos de información en una conversación.', en: 'Correct: it understands and mixes different types of information in one conversation.' } },
        { t: { es: 'Que tiene una versión web y otra móvil', en: 'That it has a web and a mobile version' },
          why: { es: 'Eso describe dónde se usa, no qué tipo de información procesa.', en: 'That describes where it runs, not what kind of information it processes.' } },
        { t: { es: 'Que usa varios modelos según el plan', en: 'That it uses several models depending on the plan' },
          why: { es: 'Hay varios modelos, pero eso no es lo que significa multimodal.', en: 'There are several models, but that is not what multimodal means.' } }
      ] },
    { d: 1,
      q: { es: 'Gemini redacta una explicación muy convincente para tu clase. ¿Qué haces?', en: 'Gemini writes a very convincing explanation for your class. What do you do?' },
      o: [
        { t: { es: 'La uso tal cual: si suena bien, es correcta', en: 'Use it as is: if it sounds right, it is right' },
          why: { es: 'Un texto fluido puede contener errores: la IA genera lo probable, no lo verdadero.', en: 'Fluent text can contain errors: AI generates what is likely, not what is true.' } },
        { t: { es: 'La descarto: la IA no sirve para enseñar', en: 'Discard it: AI is no good for teaching' },
          why: { es: 'Descartar todo desaprovecha la herramienta; el punto es revisarla.', en: 'Discarding everything wastes the tool; the point is to review it.' } },
        { ok: true, t: { es: 'La reviso con mis fuentes antes de usarla', en: 'Check it against my sources before using it' },
          why: { es: 'Correcto: tú defines el propósito y validas el resultado.', en: 'Correct: you set the purpose and validate the result.' } },
        { t: { es: 'Le pido que confirme que no tiene errores', en: 'Ask it to confirm it has no errors' },
          why: { es: 'Gemini puede «confirmar» con la misma seguridad un error: la verificación es tuya.', en: 'Gemini can “confirm” an error just as confidently: checking is your job.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (PDF)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google for Education — Generative AI for Educators with Gemini', url: 'https://edu.exceedlms.com/student/path/1787126-generative-ai-for-educators-with-gemini' }
  ]
};
