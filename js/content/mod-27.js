/* Módulo 27 · IA generativa y Gemini en la academia (Faculty, dominio 1) */
GDC.MOD['27'] = {
  min: 22,
  intro: {
    es: 'Bienvenido a la Parte 8. Todo lo que aprendiste en los módulos 01 a 26 sigue valiendo: aquí lo **reinterpretas para la universidad**. Este módulo cubre el dominio 1 del examen **Gemini Certified Faculty**: los conceptos de IA generativa explicados con ejemplos académicos, las herramientas de Google que integran Gemini, cuándo usar cada herramienta para investigar o enseñar, y la diferencia entre que la IA **aumente** tu labor o la **reemplace**.',
    en: 'Welcome to Part 8. Everything you learned in modules 01 to 26 still applies: here you **reinterpret it for the university**. This module covers domain 1 of the **Gemini Certified Faculty** exam: generative AI concepts explained with academic examples, the Google tools that integrate Gemini, when to use each tool to research or teach, and the difference between AI **augmenting** your work and **replacing** it.'
  },
  objetivos: [
    { es: 'Definir IA generativa, LLM y prompting con ejemplos de la vida universitaria (F 1.1.1).', en: 'Define generative AI, LLM and prompting with university examples (F 1.1.1).' },
    { es: 'Explicar en qué se diferencia la IA generativa de otras formas de IA (F 1.2.1).', en: 'Explain how generative AI differs from other forms of AI (F 1.2.1).' },
    { es: 'Nombrar las herramientas de Google que integran Gemini y el uso pedagógico de cada herramienta de IA (F 1.1.3, 1.1.4).', en: 'Name the Google tools that integrate Gemini and the teaching use of each AI tool (F 1.1.3, 1.1.4).' },
    { es: 'Distinguir entre aumentar y reemplazar la experiencia docente, y explicar la privacidad en cuentas de Workspace for Education (F 1.2.4, 1.2.5).', en: 'Tell augmenting from replacing the faculty experience, and explain privacy in Workspace for Education accounts (F 1.2.4, 1.2.5).' }
  ],
  secciones: [
    {
      h: { es: 'Qué es el Faculty y cómo se organiza esta parte', en: 'What the Faculty is and how this part is organized' },
      b: [
        { p: { es: 'La guía oficial dice que la certificación busca «cultivar la fluidez académica en IA» de los profesores universitarios y de sus estudiantes: demostrar que entiendes cómo la IA generativa mejora la **productividad en investigación**, apoya la **participación estudiantil** y permite **diseñar currículo y evaluación** de forma innovadora, siempre con criterio ético.',
               en: 'The official guide says the certification aims to “cultivate scholarly AI fluency” among university faculty and their students: showing you understand how generative AI improves **research productivity**, supports **student engagement** and enables innovative **curriculum and assessment design**, always with ethical judgment.' } },
        { table: {
          head: [{ es: 'Dominio del examen Faculty', en: 'Faculty exam domain' }, { es: 'Qué evalúa', en: 'What it assesses' }, { es: 'Módulos de esta parte', en: 'Modules in this part' }],
          rows: [
            [{ es: '1. Comprender la IA generativa y Gemini en la academia', en: '1. Understanding Generative AI & Gemini in Academia' }, { es: 'Conceptos, herramientas, puntos de integración, aumentar vs. reemplazar, privacidad', en: 'Concepts, tools, integration points, augment vs. replace, privacy' }, { es: '27 (este) y 29', en: '27 (this one) and 29' }],
            [{ es: '2. Aprovechar Gemini en aplicaciones académicas', en: '2. Harnessing Gemini for Scholarly Applications' }, { es: 'Prompts, grounding, investigación, sílabos, Gems, Studio, imágenes y video', en: 'Prompts, grounding, research, syllabi, Gems, Studio, images and video' }, { es: '28, 29 y 30', en: '28, 29 and 30' }],
            [{ es: '3. Uso ético y responsable de la IA en la academia', en: '3. Ethical & Responsible AI Use in Academia' }, { es: 'Sesgo, alucinaciones, integridad, propiedad intelectual, alfabetización en IA', en: 'Bias, hallucinations, integrity, intellectual property, AI literacy' }, { es: '31', en: '31' }],
            [{ es: 'Logística y estrategia', en: 'Logistics and strategy' }, { es: 'Formato, número de preguntas, registro y enlaces oficiales', en: 'Format, number of questions, registration and official links' }, { es: '32', en: '32' }]
          ]
        } },
        { p: { es: 'Los objetivos de la guía siguen la **taxonomía de Bloom**: recordar, comprender, aplicar, analizar, evaluar y crear. Eso te da una pista de cómo serán las preguntas: unas piden definir o identificar, pero la mayoría plantea un **escenario universitario** y te pide elegir la mejor acción.',
               en: 'The guide’s objectives follow **Bloom’s taxonomy**: remembering, understanding, applying, analyzing, evaluating and creating. That hints at what the questions look like: some ask you to define or identify, but most present a **university scenario** and ask you to choose the best action.' } },
        { note: { es: 'Faculty y Educator son certificaciones **paralelas**: Faculty no exige aprobar el Educator antes ni es un «nivel 2». Si enseñas en la universidad, esta es la que te corresponde; puedes tener ambas.', en: 'Faculty and Educator are **parallel** certifications: Faculty doesn’t require passing the Educator first and isn’t a “level 2”. If you teach at university, this is the one for you; you can hold both.' }, kind: 'info' }
      ]
    },
    {
      h: { es: 'Conceptos base, con ejemplos académicos', en: 'Core concepts, with academic examples' },
      b: [
        { p: { es: 'El objetivo 1.1.1 pide definir tres términos. Los viste en los módulos 01 y 02; aquí van en versión universitaria:', en: 'Objective 1.1.1 asks you to define three terms. You saw them in modules 01 and 02; here they are in a university version:' } },
        { table: {
          head: [{ es: 'Término', en: 'Term' }, { es: 'Definición breve', en: 'Short definition' }, { es: 'Ejemplo en la universidad', en: 'University example' }],
          rows: [
            [{ es: '**IA generativa (GenAI)**', en: '**Generative AI (GenAI)**' }, { es: 'IA que **crea contenido nuevo** (texto, imagen, audio, video, código) a partir de patrones aprendidos', en: 'AI that **creates new content** (text, image, audio, video, code) from learned patterns' }, { es: 'Redactar un caso clínico ficticio para un seminario de Medicina', en: 'Drafting a fictional clinical case for a Medicine seminar' }],
            [{ es: '**Modelo de lenguaje grande (LLM)**', en: '**Large Language Model (LLM)**' }, { es: 'Modelo entrenado con enormes cantidades de texto que **predice la siguiente palabra (token)**', en: 'Model trained on huge amounts of text that **predicts the next word (token)**' }, { es: 'Gemini resumiendo un artículo de 30 páginas en tres ideas', en: 'Gemini summarizing a 30-page paper into three ideas' }],
            [{ es: '**Prompting**', en: '**Prompting**' }, { es: 'Escribir **instrucciones** claras para obtener el resultado que necesitas', en: 'Writing clear **instructions** to get the result you need' }, { es: 'Pedir una rúbrica indicando curso, nivel, criterios y escala', en: 'Asking for a rubric stating course, level, criteria and scale' }]
          ]
        } },
        { h: { es: 'IA generativa frente a otras formas de IA (1.2.1)', en: 'Generative AI versus other forms of AI (1.2.1)' } },
        { compare: {
          bad: { t: { es: 'IA tradicional (predictiva o de clasificación): un sistema que detecta qué estudiantes tienen riesgo de abandonar a partir de sus notas y asistencia.', en: 'Traditional AI (predictive or classification): a system that flags which students are at risk of dropping out from their grades and attendance.' },
                 why: { es: '**Analiza y clasifica** datos existentes: su salida es una etiqueta o una predicción, no contenido nuevo.', en: 'It **analyzes and classifies** existing data: its output is a label or a prediction, not new content.' } },
          good: { t: { es: 'IA generativa: Gemini redacta una tutoría personalizada para esos estudiantes, con un plan de estudio de cuatro semanas.', en: 'Generative AI: Gemini drafts a personalized tutoring message for those students, with a four-week study plan.' },
                  why: { es: '**Crea** un texto que no existía. Por eso necesita revisión humana: puede sonar seguro y aun así equivocarse.', en: 'It **creates** text that didn’t exist. That’s why it needs human review: it can sound confident and still be wrong.' } }
        } },
        { note: { es: 'En el examen, la palabra clave es **crear**. Si el sistema solo clasifica, predice o recomienda a partir de datos, no es IA generativa.', en: 'In the exam, the key word is **create**. If the system only classifies, predicts or recommends from data, it isn’t generative AI.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Google tools que integran Gemini (1.1.3)', en: 'Google tools that integrate Gemini (1.1.3)' },
      b: [
        { p: { es: 'La guía Faculty lista siete herramientas de Google con integración de Gemini. Memorízalas con un ejemplo universitario para cada una:', en: 'The Faculty guide lists seven Google tools with Gemini integration. Memorize them with a university example for each:' } },
        { table: {
          head: [{ es: 'Herramienta', en: 'Tool' }, { es: 'Uso típico en la universidad', en: 'Typical university use' }],
          rows: [
            [{ es: 'Docs', en: 'Docs' }, { es: 'Borrador de un sílabo o de la sección de métodos de una propuesta', en: 'Draft of a syllabus or a proposal’s methods section' }],
            [{ es: 'Gmail', en: 'Gmail' }, { es: 'Responder con el tono adecuado a una consulta de un tesista', en: 'Replying in the right tone to a thesis student’s question' }],
            [{ es: 'Classroom', en: 'Classroom' }, { es: 'Crear materiales y tareas del curso con Gemini in Classroom', en: 'Creating course materials and assignments with Gemini in Classroom' }],
            [{ es: 'Meet', en: 'Meet' }, { es: 'Notas de una reunión del grupo de investigación o de una asesoría', en: 'Notes from a research group meeting or advising session' }],
            [{ es: 'Slides', en: 'Slides' }, { es: 'Diapositivas de una clase magistral o de una ponencia', en: 'Slides for a lecture or a conference talk' }],
            [{ es: 'Sheets', en: 'Sheets' }, { es: 'Ordenar y analizar los datos de una encuesta del curso', en: 'Organizing and analyzing course survey data' }],
            [{ es: 'Vids', en: 'Vids' }, { es: 'Convertir una presentación en un video para la clase invertida', en: 'Turning a presentation into a flipped-classroom video' }]
          ]
        } },
        { note: { es: 'Gemini dentro de Gmail, Docs, Forms, Vids, Meet o Drive requiere un plan como **Google AI Pro for Education**; la Gemini app, Gemini in Classroom y Gemini Notebook están disponibles sin costo en Workspace for Education (módulo 16). La guía marca algunos objetivos como **PAID feature**: según las FAQ de Google, las preguntas sobre funciones de pago se incluyen con fines de aprendizaje y **no puntúan**.', en: 'Gemini inside Gmail, Docs, Forms, Vids, Meet or Drive requires a plan such as **Google AI Pro for Education**; the Gemini app, Gemini in Classroom and Gemini Notebook are available at no cost in Workspace for Education (module 16). The guide marks some objectives as **PAID feature**: according to Google’s FAQ, questions about paid features are included for learning purposes and are **not scored**.' }, kind: 'info' }
      ]
    },
    {
      h: { es: 'Las herramientas de IA y su valor pedagógico (1.1.4, 1.3.2)', en: 'The AI tools and their teaching value (1.1.4, 1.3.2)' },
      b: [
        { p: { es: 'El objetivo 1.3.2 es de los más preguntados: dado un objetivo pedagógico o de investigación, **elegir la herramienta adecuada**. Usa esta tabla como mapa mental:', en: 'Objective 1.3.2 is one of the most tested: given a teaching or research goal, **choose the right tool**. Use this table as a mental map:' } },
        { table: {
          head: [{ es: 'Herramienta', en: 'Tool' }, { es: 'Para qué es mejor', en: 'What it’s best for' }, { es: 'Ejemplo Faculty', en: 'Faculty example' }],
          rows: [
            [{ es: 'Gemini app', en: 'Gemini app' }, { es: 'Conversar, idear, redactar y refinar', en: 'Chatting, brainstorming, drafting and refining' }, { es: 'Generar contenido de clase a medida (*tailored lecture content*)', en: 'Generating tailored lecture content' }],
            [{ es: 'Gemini Notebook (antes NotebookLM)', en: 'Gemini Notebook (formerly NotebookLM)' }, { es: 'Responder **solo desde tus fuentes**, con citas', en: 'Answering **only from your sources**, with citations' }, { es: 'Sintetizar materiales fuente complejos', en: 'Synthesizing complex source materials' }],
            [{ es: 'Deep Research', en: 'Deep Research' }, { es: 'Investigar en la web con un plan y entregar un informe con fuentes', en: 'Researching the web with a plan and delivering a sourced report' }, { es: 'Mapa inicial del estado del arte', en: 'Initial map of the state of the art' }],
            [{ es: 'Canvas', en: 'Canvas' }, { es: 'Co-crear y editar documentos, código, apps, quizzes y páginas', en: 'Co-creating and editing documents, code, apps, quizzes and pages' }, { es: 'Diseño conceptual de un simulador o de una guía interactiva', en: 'Conceptual design of a simulator or an interactive guide' }],
            [{ es: 'Gems', en: 'Gems' }, { es: 'Asistentes personalizados para tareas repetidas', en: 'Custom assistants for repeated tasks' }, { es: 'Tutor que andamia revisiones de literatura', en: 'Tutor that scaffolds literature reviews' }],
            [{ es: 'Veo', en: 'Veo' }, { es: 'Generar clips de video a partir de texto o imágenes', en: 'Generating video clips from text or images' }, { es: 'Visualizar un proceso difícil de filmar', en: 'Visualizing a process that is hard to film' }],
            [{ es: 'Imagen (y Nano Banana en la Gemini app)', en: 'Imagen (and Nano Banana in the Gemini app)' }, { es: 'Generar y editar imágenes', en: 'Generating and editing images' }, { es: 'Ilustrar un concepto abstracto para una clase', en: 'Illustrating an abstract concept for a lecture' }]
          ]
        } },
        { list: [
          { es: '**¿Tus fuentes o la web?** Si ya tienes los documentos, Notebook; si necesitas descubrir fuentes, Deep Research.', en: '**Your sources or the web?** If you already have the documents, Notebook; if you need to discover sources, Deep Research.' },
          { es: '**¿Una vez o muchas?** Si la tarea se repite cada semana, un Gem (o un skill, módulo 14).', en: '**Once or many times?** If the task repeats every week, a Gem (or a skill, module 14).' },
          { es: '**¿Texto, imagen o video?** El formato final decide entre la Gemini app/Canvas, Imagen/Nano Banana o Veo/Vids.', en: '**Text, image or video?** The final format decides between Gemini app/Canvas, Imagen/Nano Banana or Veo/Vids.' }
        ] },
        { note: { es: 'La guía usa los nombres **NotebookLM** e **Imagen 4**. Desde el 16/07/2026 NotebookLM se llama **Gemini Notebook**, y en la Gemini app las imágenes se crean con **Nano Banana**. Si una pregunta dice NotebookLM o Imagen, piensa en esas mismas funciones.', en: 'The guide uses the names **NotebookLM** and **Imagen 4**. Since 16/07/2026 NotebookLM is called **Gemini Notebook**, and in the Gemini app images are created with **Nano Banana**. If a question says NotebookLM or Imagen, think of those same features.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Más allá del chat: valor para investigar y diseñar cursos (1.1.2, 1.2.2, 1.2.3)', en: 'Beyond chat: value for research and course design (1.1.2, 1.2.2, 1.2.3)' },
      b: [
        { p: { es: 'Un error común es pensar que Gemini es «un chat que responde preguntas». La guía pide describir su valor pedagógico **más allá del uso conversacional básico**:', en: 'A common mistake is thinking Gemini is “a chat that answers questions”. The guide asks you to describe its teaching value **beyond basic conversational use**:' } },
        { list: [
          { es: '**Transformar formatos:** de un artículo a una guía de estudio, un Audio Overview, un Mind Map o un quiz.', en: '**Transforming formats:** from a paper to a study guide, an Audio Overview, a Mind Map or a quiz.' },
          { es: '**Fundamentar en fuentes:** respuestas con citas a tu corpus de investigación.', en: '**Grounding in sources:** answers with citations to your research corpus.' },
          { es: '**Diferenciar a escala:** la misma meta de aprendizaje con rutas de refuerzo, estándar y de profundización para un grupo de 120 estudiantes.', en: '**Differentiating at scale:** the same learning goal with remedial, standard and extension paths for a group of 120 students.' },
          { es: '**Andamiar:** pasos intermedios, preguntas guía y ejemplos resueltos que se retiran a medida que el estudiante avanza (Guided Learning, módulo 10).', en: '**Scaffolding:** intermediate steps, guiding questions and worked examples that fade as the student progresses (Guided Learning, module 10).' },
          { es: '**Prototipar:** con Canvas, una app o simulador que ilustra un modelo teórico.', en: '**Prototyping:** with Canvas, an app or simulator that illustrates a theoretical model.' }
        ] },
        { prompt: { es: 'Soy docente de [curso] en [carrera], con un grupo de [n] estudiantes de perfiles diversos. Para el resultado de aprendizaje «[resultado]», crea tres rutas: refuerzo (con un ejemplo resuelto paso a paso), estándar (con un ejercicio guiado) y profundización (con una lectura avanzada y una pregunta abierta). Mantén el mismo resultado de aprendizaje en las tres rutas e indica cómo evaluaré cada una.', en: 'I teach [course] in [programme], with a group of [n] students with diverse profiles. For the learning outcome “[outcome]”, create three paths: remedial (with a step-by-step worked example), standard (with a guided exercise) and extension (with an advanced reading and an open question). Keep the same learning outcome in all three paths and say how I will assess each.' },
          label: { es: '✦ Diferenciación y andamiaje (1.2.2)', en: '✦ Differentiation and scaffolding (1.2.2)' } }
      ]
    },
    {
      h: { es: 'Aumentar, no reemplazar, y la privacidad (1.2.4, 1.2.5)', en: 'Augment, not replace, and privacy (1.2.4, 1.2.5)' },
      b: [
        { table: {
          head: [{ es: 'La IA **aumenta** tu labor cuando…', en: 'AI **augments** your work when…' }, { es: 'La IA **reemplaza** tu labor cuando…', en: 'AI **replaces** your work when…' }],
          rows: [
            [{ es: 'Propone un borrador de rúbrica que tú ajustas a tu curso', en: 'It proposes a draft rubric you adjust to your course' }, { es: 'Califica los trabajos finales sin que nadie los revise', en: 'It grades final work with no one reviewing it' }],
            [{ es: 'Ordena la literatura para que tú escribas la síntesis', en: 'It organizes the literature so you write the synthesis' }, { es: 'Escribe el artículo que tú firmas como autor', en: 'It writes the paper you sign as author' }],
            [{ es: 'Sugiere preguntas para tu tutoría de tesis', en: 'It suggests questions for your thesis advising' }, { es: 'Responde a tus tesistas en tu nombre', en: 'It answers your thesis students on your behalf' }]
          ]
        } },
        { p: { es: 'Regla práctica: **las decisiones de alto impacto** (notas, autoría, juicios sobre un estudiante, conclusiones de una investigación) **siguen siendo tuyas**. La IA te da tiempo para lo que solo tú puedes hacer: acompañar, discutir y pensar con tus estudiantes.', en: 'Rule of thumb: **high-impact decisions** (grades, authorship, judgments about a student, research conclusions) **remain yours**. AI gives you time for what only you can do: mentoring, discussing and thinking with your students.' } },
        { p: { es: 'Sobre privacidad (1.2.5): con una cuenta de **Google Workspace for Education**, tus datos y prompts **no se usan para entrenar modelos** ni los revisan personas, y se aplican las protecciones de datos de tu institución (módulo 25). Con una cuenta personal esas garantías pueden ser distintas: usa la institucional para el trabajo académico.', en: 'On privacy (1.2.5): with a **Google Workspace for Education** account, your data and prompts are **not used to train models** or reviewed by humans, and your institution’s data protections apply (module 25). With a personal account those guarantees may differ: use the institutional one for academic work.' } },
        { note: { es: 'Que tus datos no entrenen modelos **no** te autoriza a cargar cualquier cosa: los derechos de autor, la confidencialidad de una investigación y los datos de participantes siguen siendo tu responsabilidad (módulo 31).', en: 'Your data not training models does **not** authorize you to upload anything: copyright, research confidentiality and participant data remain your responsibility (module 31).' }, kind: 'warn' },
        { note: { es: 'Abre la Gemini app con tu cuenta institucional y pide: «Explícame la diferencia entre IA generativa e IA predictiva con un ejemplo de mi disciplina, [disciplina]». Luego pide lo mismo para tus estudiantes de primer año y compara el nivel.', en: 'Open the Gemini app with your institutional account and ask: “Explain the difference between generative and predictive AI with an example from my discipline, [discipline]”. Then ask the same for your first-year students and compare the level.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Confundir IA predictiva (clasifica, recomienda) con IA generativa (crea contenido nuevo).', en: 'Confusing predictive AI (classifies, recommends) with generative AI (creates new content).' },
    { es: 'Elegir Deep Research cuando ya tienes las fuentes: para analizar tu propio corpus con citas, usa Gemini Notebook.', en: 'Choosing Deep Research when you already have the sources: to analyze your own corpus with citations, use Gemini Notebook.' },
    { es: 'Creer que Faculty es un «nivel 2» del Educator o que lo exige como requisito.', en: 'Believing Faculty is an Educator “level 2” or requires it as a prerequisite.' },
    { es: 'Pensar que, como los datos no entrenan modelos, se puede cargar cualquier manuscrito o dato de participantes.', en: 'Thinking that, since data doesn’t train models, any manuscript or participant data can be uploaded.' }
  ],
  ideas: [
    { es: 'Tres dominios: comprender (conceptos y herramientas), aprovechar (aplicaciones académicas) y uso ético.', en: 'Three domains: understanding (concepts and tools), harnessing (scholarly applications) and ethical use.' },
    { es: 'IA generativa = crea contenido nuevo; LLM = predice el siguiente token; prompting = instrucciones claras.', en: 'Generative AI = creates new content; LLM = predicts the next token; prompting = clear instructions.' },
    { es: 'Siete integraciones: Docs, Gmail, Classroom, Meet, Slides, Sheets y Vids.', en: 'Seven integrations: Docs, Gmail, Classroom, Meet, Slides, Sheets and Vids.' },
    { es: 'Tus fuentes → Notebook; la web → Deep Research; tarea repetida → Gem; crear y editar → Canvas.', en: 'Your sources → Notebook; the web → Deep Research; repeated task → Gem; create and edit → Canvas.' },
    { es: 'La IA aumenta tu labor; las decisiones de alto impacto siguen siendo tuyas.', en: 'AI augments your work; high-impact decisions remain yours.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '¿Cuál de estos sistemas universitarios es un ejemplo de **IA generativa**?', en: 'Which of these university systems is an example of **generative AI**?' },
      o: [
        { t: { es: 'Uno que predice qué estudiantes abandonarán', en: 'One that predicts which students will drop out' }, why: { es: 'Predecir a partir de datos es IA predictiva.', en: 'Predicting from data is predictive AI.' } },
        { ok: true, t: { es: 'Uno que redacta un caso de estudio nuevo', en: 'One that drafts a new case study' }, why: { es: 'Correcto: crea contenido que no existía.', en: 'Correct: it creates content that didn’t exist.' } },
        { t: { es: 'Uno que ordena los libros por el número de préstamos', en: 'One that sorts books by number of loans' }, why: { es: 'Ordenar datos no crea contenido nuevo.', en: 'Sorting data doesn’t create new content.' } },
        { t: { es: 'Uno que detecta correos sospechosos de spam', en: 'One that detects suspicious spam emails' }, why: { es: 'Clasificar mensajes es IA tradicional.', en: 'Classifying messages is traditional AI.' } }
      ] },
    { d: 1,
      q: { es: 'Según la guía Faculty, ¿qué grupo de herramientas de Google ofrece integración con Gemini?', en: 'According to the Faculty guide, which group of Google tools offers Gemini integration?' },
      o: [
        { t: { es: 'Solo Docs y Gmail, sin ninguna otra app por ahora', en: 'Only Docs and Gmail, with no other app for now' }, why: { es: 'La lista es mucho más amplia.', en: 'The list is much broader.' } },
        { t: { es: 'Maps, YouTube y Chrome únicamente', en: 'Maps, YouTube and Chrome only' }, why: { es: 'No son las herramientas que lista la guía.', en: 'They aren’t the tools the guide lists.' } },
        { ok: true, t: { es: 'Docs, Gmail, Classroom, Meet, Slides, Sheets y Vids', en: 'Docs, Gmail, Classroom, Meet, Slides, Sheets and Vids' }, why: { es: 'Correcto: es la lista del objetivo 1.1.3.', en: 'Correct: it is the list in objective 1.1.3.' } },
        { t: { es: 'Ninguna: Gemini solo funciona dentro de su propia app', en: 'None: Gemini only works inside its own standalone app' }, why: { es: 'Gemini se integra en Workspace.', en: 'Gemini integrates into Workspace.' } }
      ] },
    { d: 1,
      q: { es: 'Un profesor ya reunió 20 artículos y quiere sintetizarlos **con citas**. ¿Qué herramienta encaja mejor?', en: 'A professor has already gathered 20 papers and wants to synthesize them **with citations**. Which tool fits best?' },
      o: [
        { ok: true, t: { es: 'Gemini Notebook', en: 'Gemini Notebook' }, why: { es: 'Correcto: responde solo desde sus fuentes y cita.', en: 'Correct: it answers only from his sources and cites.' } },
        { t: { es: 'Deep Research en la web', en: 'Deep Research on the web' }, why: { es: 'Buscaría fuentes nuevas en la web.', en: 'It would look for new sources on the web.' } },
        { t: { es: 'Veo con un video', en: 'Veo with a video' }, why: { es: 'Genera video, no síntesis con citas.', en: 'It generates video, not cited synthesis.' } },
        { t: { es: 'Imagen con un esquema', en: 'Imagen with a diagram' }, why: { es: 'Genera imágenes.', en: 'It generates images.' } }
      ] },
    { d: 1,
      q: { es: '¿Qué situación muestra a la IA **reemplazando** la experiencia docente?', en: 'Which situation shows AI **replacing** the faculty experience?' },
      o: [
        { t: { es: 'Sugiere preguntas para una tutoría de tesis', en: 'It suggests questions for thesis advising' }, why: { es: 'El docente sigue conduciendo la tutoría.', en: 'The professor still leads the advising.' } },
        { t: { es: 'Propone una rúbrica que el docente ajusta', en: 'It proposes a rubric the professor adjusts' }, why: { es: 'El criterio final es del docente: aumenta.', en: 'The final judgment is the professor’s: it augments.' } },
        { ok: true, t: { es: 'Pone las notas finales sin revisión humana', en: 'It sets final grades with no human review' }, why: { es: 'Correcto: delega una decisión de alto impacto.', en: 'Correct: it delegates a high-impact decision.' } },
        { t: { es: 'Ordena la literatura antes de la síntesis', en: 'It organizes literature before the synthesis' }, why: { es: 'La síntesis la escribe el docente: aumenta.', en: 'The professor writes the synthesis: it augments.' } }
      ] },
    { d: 1,
      q: { es: '¿Qué ocurre con los prompts de un profesor que usa Gemini con su cuenta de **Workspace for Education**?', en: 'What happens to the prompts of a professor using Gemini with a **Workspace for Education** account?' },
      o: [
        { t: { es: 'Se publican para mejorar las respuestas de otros', en: 'They are published to improve others’ answers' }, why: { es: 'No se publican ni se comparten.', en: 'They aren’t published or shared.' } },
        { ok: true, t: { es: 'No se usan para entrenar los modelos', en: 'They aren’t used to train the models' }, why: { es: 'Correcto: es parte de las protecciones de datos educativas.', en: 'Correct: it’s part of education data protections.' } },
        { t: { es: 'Se usan para entrenar, pero de forma anónima', en: 'They’re used for training, but anonymously' }, why: { es: 'No se usan para entrenar modelos.', en: 'They aren’t used to train models.' } },
        { t: { es: 'Los revisa siempre un equipo de Google', en: 'A Google team always reviews them' }, why: { es: 'No los revisan personas.', en: 'Humans don’t review them.' } }
      ] },
    { d: 1,
      q: { es: '¿Qué ejemplo describe el valor de Gemini **más allá del chat básico** en el diseño de un curso?', en: 'Which example describes Gemini’s value **beyond basic chat** in course design?' },
      o: [
        { t: { es: 'Responder qué hora es en otro país', en: 'Answering what time it is in another country' }, why: { es: 'Es una consulta trivial, sin valor de diseño.', en: 'It’s a trivial query with no design value.' } },
        { t: { es: 'Saludar a los estudiantes al iniciar clase', en: 'Greeting students at the start of class' }, why: { es: 'No aporta al diseño del curso.', en: 'It adds nothing to course design.' } },
        { t: { es: 'Corregir solo la ortografía de un correo', en: 'Only fixing the spelling of an email' }, why: { es: 'Es un uso mínimo.', en: 'It’s a minimal use.' } },
        { ok: true, t: { es: 'Convertir un artículo en guía y Mind Map', en: 'Turning a paper into a guide and Mind Map' }, why: { es: 'Correcto: transforma el formato para aprender.', en: 'Correct: it transforms the format for learning.' } }
      ] },
    { d: 1,
      q: { es: 'Una docente quiere que 120 estudiantes logren el mismo resultado de aprendizaje con distintos puntos de partida. ¿Qué pide a Gemini?', en: 'A professor wants 120 students to reach the same learning outcome from different starting points. What does she ask Gemini for?' },
      o: [
        { t: { es: 'Un examen distinto para cada estudiante', en: 'A different exam for each student' }, why: { es: 'Cambiaría la meta y la equidad de la evaluación.', en: 'It would change the goal and fairness of assessment.' } },
        { ok: true, t: { es: 'Rutas de refuerzo, estándar y profundización', en: 'Remedial, standard and extension paths' }, why: { es: 'Correcto: diferencia sin cambiar el resultado.', en: 'Correct: it differentiates without changing the outcome.' } },
        { t: { es: 'Que elimine los temas más difíciles', en: 'That it removes the hardest topics' }, why: { es: 'Bajaría el nivel del curso.', en: 'It would lower the course level.' } },
        { t: { es: 'Un resumen idéntico para todo el grupo', en: 'An identical summary for the whole group' }, why: { es: 'No atiende puntos de partida distintos.', en: 'It ignores different starting points.' } }
      ] },
    { d: 1,
      q: { es: 'En el examen aparece una pregunta sobre **NotebookLM**. ¿Cómo la interpretas hoy?', en: 'A question about **NotebookLM** appears in the exam. How do you interpret it today?' },
      o: [
        { t: { es: 'Es una herramienta retirada: la omites', en: 'It’s a retired tool: you skip it' }, why: { es: 'No se retiró: cambió de nombre.', en: 'It wasn’t retired: it was renamed.' } },
        { t: { es: 'Es otro nombre de Deep Research', en: 'It’s another name for Deep Research' }, why: { es: 'Son herramientas distintas.', en: 'They are different tools.' } },
        { ok: true, t: { es: 'Es el actual Gemini Notebook', en: 'It’s today’s Gemini Notebook' }, why: { es: 'Correcto: cambió de nombre el 16/07/2026.', en: 'Correct: it was renamed on 16/07/2026.' } },
        { t: { es: 'Es una función de pago de Docs', en: 'It’s a paid Docs feature' }, why: { es: 'Es una herramienta propia de Google.', en: 'It’s a standalone Google tool.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (dominio 1)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google for Education — Certificaciones (Gemini Certified Faculty)', url: 'https://edu.google.com/intl/ALL_us/learning-center/certifications/' },
    { t: 'Google for Education Help — Gemini Certifications FAQs', url: 'https://support.google.com/googleforeducation/answer/16561655?hl=en' },
    { t: 'Google Blog — NotebookLM is now Gemini Notebook', url: 'https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/' }
  ]
};
