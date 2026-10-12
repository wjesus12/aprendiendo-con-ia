/* Módulo 25 · Ética, privacidad, sesgo, plagio y alfabetización en IA */
GDC.MOD['25'] = {
  min: 18,
  intro: {
    es: 'Este es el dominio 3 del examen y, quizá, el más importante para tu aula: preparar a los estudiantes para usar la IA de forma responsable. Verás los conceptos éticos clave, la política de privacidad de Google para cuentas educativas, cómo abordar el plagio y cómo enseñar alfabetización en IA.',
    en: 'This is exam domain 3 and perhaps the most important for your classroom: preparing students to use AI responsibly. You will see the key ethical concepts, Google’s privacy policy for education accounts, how to address plagiarism and how to teach AI literacy.'
  },
  objetivos: [
    { es: 'Describir sesgo, transparencia, privacidad y responsabilidad digital en el uso de IA.', en: 'Describe bias, transparency, privacy and digital responsibility in AI use.' },
    { es: 'Explicar cómo protege Google los datos en cuentas de Workspace for Education.', en: 'Explain how Google protects data in Workspace for Education accounts.' },
    { es: 'Diseñar una pauta de aula y un plan para prevenir el plagio y las inexactitudes.', en: 'Design a classroom guideline and a plan to prevent plagiarism and inaccuracies.' }
  ],
  secciones: [
    {
      h: { es: 'Cuatro conceptos éticos clave', en: 'Four key ethical concepts' },
      b: [
        { table: {
          head: [{ es: 'Concepto', en: 'Concept' }, { es: 'Qué significa', en: 'What it means' }, { es: 'En el aula', en: 'In class' }],
          rows: [
            [{ es: 'Sesgo', en: 'Bias' }, { es: 'La IA puede reproducir estereotipos de los datos con que aprendió', en: 'AI can reproduce stereotypes from the data it learned from' }, { es: 'Revisar quién aparece en ejemplos e imágenes', en: 'Check who appears in examples and images' }],
            [{ es: 'Transparencia', en: 'Transparency' }, { es: 'Decir cuándo y cómo se usó IA', en: 'Saying when and how AI was used' }, { es: 'Declarar el uso de IA en materiales y trabajos', en: 'Disclose AI use in materials and assignments' }],
            [{ es: 'Privacidad', en: 'Privacy' }, { es: 'Proteger los datos personales propios y ajenos', en: 'Protecting your own and others’ personal data' }, { es: 'No cargar datos de estudiantes sin necesidad', en: 'Don’t upload student data unnecessarily' }],
            [{ es: 'Responsabilidad digital', en: 'Digital responsibility' }, { es: 'Usar la tecnología de forma ética, segura y crítica', en: 'Using technology ethically, safely and critically' }, { es: 'Verificar, citar y respetar a los demás', en: 'Verify, cite and respect others' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Privacidad en Workspace for Education', en: 'Privacy in Workspace for Education' },
      b: [
        { p: { es: 'Con Gemini for Education (cuentas de Workspace for Education), Google ofrece **protección de datos de nivel empresarial**: tus conversaciones y archivos **no son revisados por personas** ni se usan **para entrenar modelos de IA**. Para estudiantes menores de 18 años existen salvaguardas y filtros de contenido adicionales, y el administrador controla qué servicios están disponibles.',
               en: 'With Gemini for Education (Workspace for Education accounts), Google offers **enterprise-grade data protection**: your conversations and files **aren’t reviewed by humans** or used **to train AI models**. For students under 18 there are additional safeguards and content filters, and the administrator controls which services are available.' } },
        { note: { es: 'Objetivo 1.2.5: «articular la política de Google para proteger la privacidad al usar cuentas de Google Workspace for Education». Aun con esas protecciones, el principio de **minimizar datos** sigue siendo tu responsabilidad.', en: 'Objective 1.2.5: “articulate Google’s policy to protect privacy when using Google Workspace for Education accounts”. Even with those protections, the principle of **data minimization** remains your responsibility.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Plagio: evaluar el proceso', en: 'Plagiarism: assess the process' },
      b: [
        { p: { es: 'Prohibir la IA rara vez funciona, y los detectores de texto generado no son fiables como única prueba. Es más eficaz **diseñar tareas** en las que el proceso quede a la vista:', en: 'Banning AI rarely works, and AI-text detectors aren’t reliable as sole evidence. It is more effective to **design tasks** where the process is visible:' } },
        { table: {
          head: [{ es: 'Evidencia del proceso', en: 'Process evidence' }, { es: 'Qué muestra', en: 'What it shows' }],
          rows: [
            [{ es: 'Borradores', en: 'Drafts' }, { es: 'Versiones y cambios realizados en el producto', en: 'Versions and changes made to the product' }],
            [{ es: 'Decisiones', en: 'Decisions' }, { es: 'Razones para aceptar o descartar una sugerencia de la IA', en: 'Reasons for accepting or rejecting an AI suggestion' }],
            [{ es: 'Fuentes', en: 'Sources' }, { es: 'Información que el estudiante verificó', en: 'Information the student verified' }],
            [{ es: 'Defensa', en: 'Defense' }, { es: 'Explicación oral o escrita de lo producido', en: 'Oral or written explanation of what was produced' }]
          ]
        } },
        { quote: { es: 'La evaluación gana calidad cuando el proceso queda visible: la conversación sobre el proceso permite valorar criterio, comprensión y autoría.', en: 'Assessment improves when the process is visible: talking about the process lets you assess judgment, understanding and authorship.' } },
        { list: [
          { es: '**Política clara:** qué usos de IA se permiten en cada tarea y cómo declararlos.', en: '**Clear policy:** which AI uses are allowed in each task and how to disclose them.' },
          { es: '**Tareas situadas:** vinculadas a la experiencia local, la clase o datos propios.', en: '**Situated tasks:** linked to local experience, the class or the student’s own data.' },
          { es: '**Metacognición:** pedir que el estudiante explique cómo usó la IA y qué aprendió.', en: '**Metacognition:** ask students to explain how they used AI and what they learned.' }
        ] }
      ]
    },
    {
      h: { es: 'Alfabetización en IA', en: 'AI literacy' },
      b: [
        { p: { es: 'Alfabetizar en IA es enseñar a **entender** cómo funciona, **evaluar** críticamente sus resultados, **usarla** de forma ética y **reconocer** sus límites. Algunas estrategias eficaces:', en: 'AI literacy means teaching students to **understand** how it works, critically **evaluate** its outputs, **use** it ethically and **recognize** its limits. Some effective strategies:' } },
        { list: [
          { es: '**Cazadores de errores:** dar una respuesta de IA con fallos y pedir que los encuentren con fuentes.', en: '**Error hunters:** give an AI answer with mistakes and ask students to find them with sources.' },
          { es: '**Comparar:** la respuesta de la IA frente a una fuente experta.', en: '**Compare:** the AI answer against an expert source.' },
          { es: '**Debatir dilemas:** casos reales de uso de IA en la escuela.', en: '**Debate dilemmas:** real cases of AI use at school.' },
          { es: '**Co-crear la pauta:** que el grupo acuerde las reglas de uso.', en: '**Co-create the guideline:** let the group agree on the rules of use.' }
        ] },
        { prompt: { es: 'Ayúdame a facilitar una conversación de 20 minutos con estudiantes de 15 años sobre el uso responsable de la IA generativa. Incluye una pregunta de apertura, un caso breve con un dilema ético, tres preguntas de discusión y una propuesta de 5 reglas de aula para que el grupo las vote.', en: 'Help me facilitate a 20-minute conversation with 15-year-olds about the responsible use of generative AI. Include an opening question, a short case with an ethical dilemma, three discussion questions and a proposal of 5 classroom rules for the group to vote on.' },
          label: { es: '✦ Conversación y pauta de aula', en: '✦ Conversation and classroom guideline' } },
        { note: { es: 'Objetivos 3.4.1 y 3.4.2: desarrollar una pauta o una pregunta de discusión sobre el uso responsable de la IA, y formular un plan para abordar de forma proactiva el plagio y las inexactitudes.', en: 'Objectives 3.4.1 and 3.4.2: develop a guideline or discussion prompt on responsible AI use, and formulate a plan to proactively address plagiarism and inaccuracies.' }, kind: 'exam' }
      ]
    }
  ],
  trampas: [
    { es: 'Confiar en un detector de IA como prueba única de plagio.', en: 'Relying on an AI detector as the sole proof of plagiarism.' },
    { es: 'Creer que la protección de la cuenta educativa permite subir cualquier dato sin pensar.', en: 'Believing the education account’s protection lets you upload any data without thinking.' },
    { es: 'Enseñar solo a usar la IA y no a cuestionarla.', en: 'Teaching only how to use AI and not how to question it.' }
  ],
  ideas: [
    { es: 'Sesgo, transparencia, privacidad y responsabilidad digital.', en: 'Bias, transparency, privacy and digital responsibility.' },
    { es: 'Workspace for Education: los datos no se revisan por personas ni entrenan modelos.', en: 'Workspace for Education: data isn’t human-reviewed or used to train models.' },
    { es: 'Contra el plagio: evaluar el proceso (borradores, decisiones, fuentes, defensa).', en: 'Against plagiarism: assess the process (drafts, decisions, sources, defense).' },
    { es: 'Alfabetizar en IA: entender, evaluar, usar con ética y reconocer límites.', en: 'AI literacy: understand, evaluate, use ethically and recognize limits.' }
  ],
  quiz: [
    { d: 3,
      q: { es: 'Sospechas que un ensayo fue escrito con IA. ¿Cuál es la respuesta más adecuada?', en: 'You suspect an essay was written with AI. What is the most appropriate response?' },
      o: [
        { t: { es: 'Calificar con cero según un detector de IA', en: 'Give it zero based on an AI detector' }, why: { es: 'Los detectores no son fiables como prueba única.', en: 'Detectors aren’t reliable as sole evidence.' } },
        { ok: true, t: { es: 'Conversar sobre su proceso y borradores', en: 'Talk about the process and drafts' }, why: { es: 'Correcto: la defensa del proceso revela comprensión y autoría.', en: 'Correct: defending the process reveals understanding and authorship.' } },
        { t: { es: 'Prohibir la IA a toda la clase', en: 'Ban AI for the whole class' }, why: { es: 'Castiga a todos y no resuelve el caso.', en: 'It punishes everyone and doesn’t resolve the case.' } },
        { t: { es: 'Ignorarlo para evitar conflictos', en: 'Ignore it to avoid conflict' }, why: { es: 'Pierdes una oportunidad de aprendizaje y de integridad.', en: 'You miss a learning and integrity opportunity.' } }
      ] },
    { d: 1,
      q: { es: '¿Qué afirma la política de Google sobre Gemini en cuentas de Workspace for Education?', en: 'What does Google’s policy say about Gemini in Workspace for Education accounts?' },
      o: [
        { t: { es: 'Los datos entrenan modelos para mejorar la IA', en: 'Data trains models to improve the AI' }, why: { es: 'Es lo contrario: no se usan para entrenar.', en: 'The opposite: they aren’t used for training.' } },
        { ok: true, t: { es: 'No se revisan por personas ni entrenan modelos', en: 'Not human-reviewed and not used for training' }, why: { es: 'Correcto: es protección de datos de nivel empresarial.', en: 'Correct: it is enterprise-grade data protection.' } },
        { t: { es: 'Solo se protegen si pagas un plan', en: 'Data is only protected if you buy a paid plan' }, why: { es: 'La protección viene incluida en Gemini for Education.', en: 'Protection is included in Gemini for Education.' } },
        { t: { es: 'Los datos son públicos dentro del dominio', en: 'Data is public within the domain' }, why: { es: 'Tus chats no se publican a otros usuarios.', en: 'Your chats aren’t published to other users.' } }
      ] },
    { d: 3,
      q: { es: '¿Qué actividad desarrolla mejor la alfabetización crítica en IA de tus estudiantes?', en: 'Which activity best develops your students’ critical AI literacy?' },
      o: [
        { t: { es: 'Usar Gemini para resolver todas las tareas', en: 'Use Gemini to solve every task' }, why: { es: 'Usar no es lo mismo que cuestionar.', en: 'Using isn’t the same as questioning.' } },
        { t: { es: 'Memorizar los nombres de los modelos', en: 'Memorize the names of the models' }, why: { es: 'Los nombres no forman pensamiento crítico.', en: 'Names don’t build critical thinking.' } },
        { ok: true, t: { es: 'Encontrar errores en una respuesta de IA', en: 'Find the mistakes in an AI answer' }, why: { es: 'Correcto: los obliga a evaluar y contrastar con fuentes.', en: 'Correct: it makes them evaluate and cross-check with sources.' } },
        { t: { es: 'Evitar hablar de IA en clase', en: 'Avoid talking about AI in class' }, why: { es: 'Los deja sin herramientas para un mundo con IA.', en: 'It leaves them unprepared for a world with AI.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (dominio 3 y 1.2.5)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google for Education — Gemini for Education (privacidad)', url: 'https://edu.google.com/intl/ALL_us/ai/gemini-for-education/' },
    { t: 'Google for Education — Teaching responsible use of AI', url: 'https://edu.exceedlms.com/student/path/1724166-resource-teaching-responsible-use-of-ai' }
  ]
};
