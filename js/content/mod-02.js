/* Módulo 02 · LLM, tokens y prompts: cómo «piensa» Gemini */
GDC.MOD['02'] = {
  min: 12,
  intro: {
    es: 'No necesitas saber programar para usar Gemini, pero entender cómo funciona por dentro te ayuda a pedirle mejor las cosas y a desconfiar cuando corresponde. Aquí verás qué es un LLM, qué son los tokens y por qué el prompt lo cambia todo.',
    en: 'You don’t need to code to use Gemini, but understanding how it works inside helps you ask better and be skeptical when you should. Here you will see what an LLM is, what tokens are and why the prompt changes everything.'
  },
  objetivos: [
    { es: 'Definir **LLM (Large Language Model)** y **prompt**, términos que pide la guía del examen.', en: 'Define **LLM (Large Language Model)** and **prompt**, terms the exam guide requires.' },
    { es: 'Entender por qué Gemini «predice» en lugar de «saber».', en: 'Understand why Gemini “predicts” rather than “knows”.' },
    { es: 'Explicar qué es la ventana de contexto y por qué importa en conversaciones largas.', en: 'Explain what the context window is and why it matters in long conversations.' }
  ],
  secciones: [
    {
      h: { es: '¿Qué es un LLM?', en: 'What is an LLM?' },
      b: [
        { p: { es: 'Un **LLM (Large Language Model, modelo de lenguaje grande)** es un modelo de IA entrenado con enormes cantidades de texto (y, en el caso de Gemini, también imágenes, audio y video) para aprender los patrones del lenguaje. Con ese aprendizaje puede responder preguntas, resumir, traducir, redactar o razonar sobre un problema.',
               en: 'An **LLM (Large Language Model)** is an AI model trained on huge amounts of text (and, in Gemini’s case, also images, audio and video) to learn the patterns of language. With that learning it can answer questions, summarize, translate, write or reason about a problem.' } },
        { p: { es: 'La idea central es sencilla: el modelo genera su respuesta **pieza por pieza**, eligiendo en cada paso la continuación más adecuada según todo lo anterior: tu prompt, el historial de la conversación y lo que aprendió en su entrenamiento.',
               en: 'The core idea is simple: the model generates its answer **piece by piece**, choosing at each step the most suitable continuation given everything before it: your prompt, the conversation history and what it learned in training.' } },
        { note: { es: 'Por eso decimos que Gemini **predice** en lugar de **saber**. Una predicción muy buena se parece a saber… hasta que falla. Ese fallo con apariencia segura es una **alucinación** (módulo 05).',
                  en: 'That is why we say Gemini **predicts** rather than **knows**. A very good prediction looks like knowing… until it fails. That confident-looking failure is a **hallucination** (module 05).' }, kind: 'info' }
      ]
    },
    {
      h: { es: 'Tokens: las piezas del lenguaje', en: 'Tokens: the pieces of language' },
      b: [
        { p: { es: 'El modelo no lee letra por letra ni palabra por palabra: trabaja con **tokens**, fragmentos de texto que pueden ser una palabra corta, parte de una palabra larga o un signo. «Evaluación» puede dividirse en varios tokens; «sol», en uno.',
               en: 'The model doesn’t read letter by letter or word by word: it works with **tokens**, text fragments that can be a short word, part of a long word or a symbol. “Assessment” may be split into several tokens; “sun” into one.' } },
        { p: { es: 'Los tokens importan porque miden cuánto texto puede manejar el modelo a la vez. Esa capacidad se llama **ventana de contexto**: todo lo que Gemini puede «tener en mente» en una conversación (tus mensajes, sus respuestas y los archivos que adjuntas).',
               en: 'Tokens matter because they measure how much text the model can handle at once. That capacity is called the **context window**: everything Gemini can “keep in mind” in a conversation (your messages, its answers and the files you attach).' } },
        { table: {
          head: [{ es: 'Concepto', en: 'Concept' }, { es: 'En palabras simples', en: 'In plain words' }, { es: 'Qué cambia para ti', en: 'What it changes for you' }],
          rows: [
            [{ es: 'Token', en: 'Token' }, { es: 'Un trozo de texto', en: 'A chunk of text' }, { es: 'Textos largos = muchos tokens', en: 'Long texts = many tokens' }],
            [{ es: 'Ventana de contexto', en: 'Context window' }, { es: 'La «memoria de trabajo» de la conversación', en: 'The conversation’s “working memory”' }, { es: 'En chats muy largos, conviene resumir y empezar uno nuevo', en: 'In very long chats, summarize and start a new one' }],
            [{ es: 'Prompt', en: 'Prompt' }, { es: 'La instrucción que escribes', en: 'The instruction you write' }, { es: 'Es tu principal palanca de calidad', en: 'It is your main quality lever' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'El prompt: tu volante', en: 'The prompt: your steering wheel' },
      b: [
        { p: { es: 'Un **prompt** es la instrucción, pregunta o pedido que le das a la IA, junto con el contexto que la acompaña. **Prompting** es el arte de escribir esas instrucciones para obtener resultados útiles. Como el modelo continúa a partir de lo que le das, un prompt vago produce una respuesta genérica.',
               en: 'A **prompt** is the instruction, question or request you give the AI, together with the context that comes with it. **Prompting** is the craft of writing those instructions to get useful results. Since the model continues from what you give it, a vague prompt produces a generic answer.' } },
        { compare: {
          bad: { t: { es: 'Crea una actividad sobre economía.', en: 'Create an activity about economics.' },
                 why: { es: 'Sin contexto: no sabe para quién, cuánto dura ni qué deben lograr. El resultado será genérico.', en: 'No context: it doesn’t know who it is for, how long it lasts or what students must achieve. The result will be generic.' } },
          good: { t: { es: 'Diseña una actividad presencial de 20 minutos para estudiantes de primer ciclo de un curso de contabilidad. En parejas, deben comparar dos indicadores (KPI) y justificar una decisión.', en: 'Design a 20-minute in-person activity for first-year students in an accounting course. In pairs, they must compare two indicators (KPIs) and justify a decision.' } ,
                  why: { es: 'Situado: propósito, audiencia, duración, modalidad y tarea concreta. Reduce la ambigüedad desde el inicio.', en: 'Situated: purpose, audience, duration, format and a concrete task. It reduces ambiguity from the start.' } }
        } },
        { quote: { es: 'Un pedido breve explora; un pedido situado produce un recurso útil.', en: 'A short request explores; a situated request produces a useful resource.' } }
      ]
    },
    {
      h: { es: 'Respuestas que cambian', en: 'Answers that change' },
      b: [
        { p: { es: 'Si repites exactamente el mismo prompt, puedes obtener respuestas distintas. No es un error: el modelo tiene cierto margen de variación al elegir cada pieza del texto. Úsalo a tu favor: pide varias versiones y quédate con la mejor.',
               en: 'If you repeat exactly the same prompt, you may get different answers. That is not a bug: the model has some room for variation when choosing each piece of text. Use it to your advantage: ask for several versions and keep the best one.' } },
        { p: { es: 'Además, lo que el modelo aprendió tiene una fecha de corte. Para temas actuales, Gemini puede apoyarse en la Búsqueda de Google; aun así, verifica los datos importantes.',
               en: 'Also, what the model learned has a cutoff date. For current topics, Gemini can rely on Google Search; even so, verify important facts.' } },
        { note: { es: 'Escribe en Gemini: «Dame tres formas distintas de explicar qué es un token a estudiantes de 12 años». Compara las tres y elige la que mejor encaja con tu grupo.',
                  en: 'Type in Gemini: “Give me three different ways to explain what a token is to 12-year-old students.” Compare the three and pick the one that best fits your group.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Pensar que Gemini «recuerda» todo lo que hablaste hace semanas: lo que cuenta es lo que está en la conversación (y en las funciones de memoria que tú actives).', en: 'Thinking Gemini “remembers” everything you discussed weeks ago: what counts is what is in the conversation (and in any memory features you turn on).' },
    { es: 'Esperar la misma respuesta palabra por palabra cada vez.', en: 'Expecting the exact same answer word for word every time.' },
    { es: 'Culpar a la herramienta por una respuesta genérica cuando el prompt también lo era.', en: 'Blaming the tool for a generic answer when the prompt was generic too.' }
  ],
  ideas: [
    { es: 'Un LLM genera texto prediciendo la continuación más adecuada.', en: 'An LLM generates text by predicting the most suitable continuation.' },
    { es: 'Los tokens son las piezas de texto; la ventana de contexto es su memoria de trabajo.', en: 'Tokens are the pieces of text; the context window is its working memory.' },
    { es: 'El prompt es tu principal palanca: más contexto, mejor resultado.', en: 'The prompt is your main lever: more context, better result.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '¿Cuál es la mejor definición de **prompt**?', en: 'Which is the best definition of a **prompt**?' },
      o: [
        { t: { es: 'El modelo de IA que genera la respuesta', en: 'The AI model that generates the answer' },
          why: { es: 'Eso es el LLM (por ejemplo, Gemini), no el prompt.', en: 'That is the LLM (for example, Gemini), not the prompt.' } },
        { ok: true, t: { es: 'La instrucción y el contexto que le das a la IA', en: 'The instruction and context you give the AI' },
          why: { es: 'Correcto: el prompt es lo que escribes (y adjuntas) para guiar la respuesta.', en: 'Correct: the prompt is what you write (and attach) to guide the answer.' } },
        { t: { es: 'La lista de fuentes que cita la respuesta', en: 'The list of sources the answer cites' },
          why: { es: 'Las citas pueden formar parte de la respuesta, pero no son el prompt.', en: 'Citations may be part of the answer, but they are not the prompt.' } },
        { t: { es: 'La configuración de privacidad de la cuenta', en: 'The account’s privacy settings' },
          why: { es: 'La privacidad se gestiona en los ajustes; no tiene que ver con el prompt.', en: 'Privacy is managed in settings; it has nothing to do with the prompt.' } }
      ] },
    { d: 1,
      q: { es: 'Llevas horas en el mismo chat y Gemini empieza a ignorar indicaciones del inicio. ¿Qué explica mejor esto?', en: 'You have been in the same chat for hours and Gemini starts ignoring early instructions. What best explains this?' },
      o: [
        { t: { es: 'Gemini se cansa cuando lo usas mucho', en: 'Gemini gets tired when you use it a lot' },
          why: { es: 'Los modelos no se cansan; el problema es de contexto, no de esfuerzo.', en: 'Models don’t get tired; the issue is context, not effort.' } },
        { t: { es: 'Tu cuenta llegó al límite de mensajes', en: 'Your account hit its message limit' },
          why: { es: 'Un límite de uso te impediría enviar mensajes, no haría que olvide instrucciones.', en: 'A usage limit would stop you from sending messages; it wouldn’t make it forget instructions.' } },
        { ok: true, t: { es: 'La conversación satura su ventana de contexto', en: 'The conversation is filling its context window' },
          why: { es: 'Correcto: en chats muy largos conviene resumir lo esencial y continuar en un chat nuevo.', en: 'Correct: in very long chats, summarize the essentials and continue in a new chat.' } },
        { t: { es: 'Las instrucciones iniciales se borran a la hora', en: 'Early instructions are deleted after an hour' },
          why: { es: 'No hay un borrado por tiempo; lo que influye es la extensión del contexto.', en: 'There is no time-based deletion; what matters is the length of the context.' } }
      ] },
    { d: 2,
      q: { es: 'Pides lo mismo dos veces y obtienes dos textos distintos. ¿Qué conviene hacer?', en: 'You ask the same thing twice and get two different texts. What should you do?' },
      o: [
        { t: { es: 'Reportarlo como un fallo del sistema', en: 'Report it as a system failure' },
          why: { es: 'La variación es normal en la IA generativa; no es un fallo.', en: 'Variation is normal in generative AI; it is not a failure.' } },
        { t: { es: 'Desconfiar de ambas y no usar ninguna', en: 'Distrust both and use neither' },
          why: { es: 'Variar no significa que estén mal: revísalas y elige.', en: 'Varying doesn’t mean they are wrong: review them and choose.' } },
        { t: { es: 'Usar siempre la primera, que es la oficial', en: 'Always use the first one, which is official' },
          why: { es: 'Ninguna versión es «oficial»: todas son propuestas que debes evaluar.', en: 'No version is “official”: all are proposals you must evaluate.' } },
        { ok: true, t: { es: 'Compararlas y quedarte con la que mejor encaja', en: 'Compare them and keep the one that fits best' },
          why: { es: 'Correcto: la variación es una oportunidad para elegir la mejor opción para tu contexto.', en: 'Correct: variation is a chance to pick the best option for your context.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (objetivo 1.1.1)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google — Gemini Apps Help', url: 'https://support.google.com/gemini/' }
  ]
};
