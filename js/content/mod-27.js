/* Módulo 27 · Gemini para la investigación académica (Faculty) */
GDC.MOD['27'] = {
  min: 16,
  intro: {
    es: 'Ya sabes usar Gemini Notebook, Deep Research y el grounding con tus fuentes. Ahora llevamos esas herramientas a la vida académica universitaria: revisar literatura, ordenar un estado del arte, preparar una propuesta de financiamiento y analizar datos, siempre con rigor y verificación.',
    en: 'You already know how to use Gemini Notebook, Deep Research and grounding with your sources. Now we take those tools into university academic life: reviewing literature, organizing a state of the art, preparing a funding proposal and analyzing data, always with rigour and verification.'
  },
  objetivos: [
    { es: 'Identificar aplicaciones de Gemini para optimizar la investigación, la docencia y los resultados de los estudiantes.', en: 'Identify Gemini applications to optimize research, instruction and student outcomes.' },
    { es: 'Elegir la herramienta adecuada (Gemini Notebook, Deep Research, Gemini app) para un objetivo de investigación.', en: 'Choose the right tool (Gemini Notebook, Deep Research, Gemini app) for a research objective.' },
    { es: 'Agilizar tareas académicas, como formular objetivos para una propuesta de financiamiento.', en: 'Streamline academic tasks, such as drafting objectives for a funding proposal.' }
  ],
  secciones: [
    {
      h: { es: 'De lo que ya sabes a la universidad', en: 'From what you know to the university' },
      b: [
        { p: { es: 'La certificación **Gemini Certified Faculty** usa la misma base que la Educator (IA generativa, PARTS, grounding, ética), pero con foco en educación superior: **productividad en investigación**, participación estudiantil y diseño de currículo y evaluación. No es un «nivel superior»: es la versión para profesores universitarios.',
               en: 'The **Gemini Certified Faculty** certification builds on the same foundation as the Educator one (generative AI, PARTS, grounding, ethics), but focuses on higher education: **research productivity**, student engagement and curriculum and assessment design. It isn’t a “higher level”: it is the version for university faculty.' } },
        { table: {
          head: [{ es: 'Ya aprendiste…', en: 'You already learned…' }, { es: '…ahora lo aplicas a…', en: '…now you apply it to…' }],
          rows: [
            [{ es: 'Gemini Notebook con citas (mód. 20)', en: 'Gemini Notebook with citations (mod. 20)' }, { es: 'Revisar y comparar la literatura de tu línea de investigación', en: 'Reviewing and comparing the literature in your research line' }],
            [{ es: 'Deep Research (mód. 09)', en: 'Deep Research (mod. 09)' }, { es: 'Mapear el estado del arte y descubrir fuentes nuevas', en: 'Mapping the state of the art and discovering new sources' }],
            [{ es: 'Grounding y límites (mód. 06 y 08)', en: 'Grounding and limits (mod. 06 and 08)' }, { es: 'Que cada afirmación se apoye en una fuente citable', en: 'Making every claim rest on a citable source' }],
            [{ es: 'Studio: Mind Map y Data Tables (mód. 21)', en: 'Studio: Mind Map and Data Tables (mod. 21)' }, { es: 'Ver relaciones entre autores, teorías y hallazgos', en: 'Seeing relationships between authors, theories and findings' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Revisión de literatura con Notebook y Deep Research', en: 'Literature review with Notebook and Deep Research' },
      b: [
        { flow: [
          { es: 'Deep Research: mapa inicial', en: 'Deep Research: initial map' },
          { es: 'Seleccionas y lees las fuentes', en: 'You select and read the sources' },
          { es: 'Notebook: preguntas con citas', en: 'Notebook: questions with citations' },
          { es: 'Tú sintetizas y escribes', en: 'You synthesize and write' }
        ] },
        { p: { es: '**Deep Research** sirve para el primer mapa: qué se ha investigado, qué corrientes existen y qué fuentes conviene leer. Luego cargas en un **notebook** solo las fuentes que leíste y validaste, y preguntas con citas para comparar enfoques, métodos y hallazgos.',
               en: '**Deep Research** is for the first map: what has been researched, which schools of thought exist and which sources are worth reading. Then you load into a **notebook** only the sources you read and validated, and ask questions with citations to compare approaches, methods and findings.' } },
        { prompt: { es: 'Con base solo en las fuentes del notebook, elabora una tabla comparativa con: autor y año, pregunta de investigación, método, muestra, hallazgo principal y limitación. Cita cada celda. Al final, señala dos vacíos de investigación que aparezcan en las propias fuentes.',
                    en: 'Based only on the notebook’s sources, build a comparison table with: author and year, research question, method, sample, main finding and limitation. Cite each cell. At the end, point out two research gaps that appear in the sources themselves.' },
          label: { es: '✦ Matriz de revisión de literatura', en: '✦ Literature review matrix' } },
        { note: { es: 'La IA ordena y compara; **la síntesis académica y la autoría son tuyas**. Verifica cada cita en la fuente original antes de usarla en un artículo.', en: 'AI organizes and compares; **the academic synthesis and authorship are yours**. Verify each citation in the original source before using it in a paper.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Propuestas de financiamiento y otras tareas académicas', en: 'Funding proposals and other academic tasks' },
      b: [
        { p: { es: 'La guía Faculty menciona usar Gemini para tareas académicas frecuentes, como **formular los objetivos de una propuesta de financiamiento (grant proposal)** o preparar un **sílabo de muestra** para un curso nuevo (objetivo 2.1.4).', en: 'The Faculty guide mentions using Gemini for common academic tasks, such as **formulating the objectives of a grant proposal** or preparing a **sample syllabus** for a new course (objective 2.1.4).' } },
        { prompt: { es: 'Actúa como asesor de proyectos de investigación. A partir del resumen adjunto, propone 1 objetivo general y 3 objetivos específicos para una propuesta de financiamiento, redactados con verbos medibles. Para cada objetivo, sugiere un indicador de logro. No agregues datos que no estén en el resumen.', en: 'Act as a research project advisor. From the attached summary, propose 1 general objective and 3 specific objectives for a funding proposal, written with measurable verbs. For each objective, suggest an achievement indicator. Don’t add data that isn’t in the summary.' },
          label: { es: '✦ Objetivos para una propuesta', en: '✦ Objectives for a proposal' } },
        { table: {
          head: [{ es: 'Objetivo de investigación', en: 'Research objective' }, { es: 'Herramienta', en: 'Tool' }],
          rows: [
            [{ es: 'Sintetizar materiales fuente complejos con citas', en: 'Synthesize complex source materials with citations' }, { es: 'Gemini Notebook', en: 'Gemini Notebook' }],
            [{ es: 'Explorar el estado del arte en la web', en: 'Explore the state of the art on the web' }, { es: 'Deep Research', en: 'Deep Research' }],
            [{ es: 'Analizar datos de tus fuentes con código', en: 'Analyze your sources’ data with code' }, { es: 'Gemini Notebook (entorno de código) o Canvas + Colab', en: 'Gemini Notebook (code environment) or Canvas + Colab' }],
            [{ es: 'Redactar un primer borrador de objetivos', en: 'Draft a first set of objectives' }, { es: 'Gemini app o Canvas', en: 'Gemini app or Canvas' }],
            [{ es: 'Ilustrar un concepto para una ponencia', en: 'Illustrate a concept for a talk' }, { es: 'Nano Banana o Imagen', en: 'Nano Banana or Imagen' }]
          ]
        } },
        { note: { es: 'La guía Faculty pide «seleccionar la herramienta adecuada (NotebookLM, Gemini app, Deep Research, Canvas, Gems, Veo, Imagen) para un objetivo pedagógico o de investigación» (1.3.2).', en: 'The Faculty guide asks you to “select the appropriate Gemini-related tool (NotebookLM, Gemini app, Deep Research, Canvas, Gems, Veo, Imagen) for a specified pedagogical or research objective” (1.3.2).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Rigor: lo que la IA no sustituye', en: 'Rigour: what AI doesn’t replace' },
      b: [
        { list: [
          { es: '**Verificación de fuentes:** una cita inventada en un artículo es un problema grave de integridad.', en: '**Source verification:** an invented citation in a paper is a serious integrity problem.' },
          { es: '**Datos sensibles:** no subas datos de participantes sin anonimizar ni datos protegidos por tu comité de ética.', en: '**Sensitive data:** don’t upload non-anonymized participant data or data protected by your ethics committee.' },
          { es: '**Investigación inédita:** piensa antes de cargar manuscritos sin publicar o datos confidenciales (módulo 29).', en: '**Unpublished research:** think before uploading unpublished manuscripts or confidential data (module 29).' },
          { es: '**Transparencia:** declara el uso de IA según las normas de tu revista o institución.', en: '**Transparency:** disclose AI use according to your journal’s or institution’s rules.' }
        ] },
        { note: { es: 'Crea un notebook con 5 artículos de tu línea de investigación y pide la matriz de revisión. Abre las citas de dos filas y comprueba que sean fieles al texto.', en: 'Create a notebook with 5 papers from your research line and ask for the review matrix. Open the citations in two rows and check they are faithful to the text.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Usar las fuentes de Deep Research sin leerlas ni comprobar que existen.', en: 'Using Deep Research’s sources without reading them or checking they exist.' },
    { es: 'Dejar que la IA escriba la síntesis final del estado del arte como si fuera tuya.', en: 'Letting AI write the final state-of-the-art synthesis as if it were yours.' },
    { es: 'Cargar datos de participantes de un estudio sin anonimizar.', en: 'Uploading a study’s participant data without anonymizing it.' }
  ],
  ideas: [
    { es: 'Deep Research para el mapa inicial; Notebook para analizar con citas tus fuentes validadas.', en: 'Deep Research for the initial map; Notebook to analyze your validated sources with citations.' },
    { es: 'Gemini agiliza objetivos de propuestas y sílabos, pero la autoría académica es tuya.', en: 'Gemini speeds up proposal objectives and syllabi, but academic authorship is yours.' },
    { es: 'Verifica cada cita y protege los datos de investigación.', en: 'Verify every citation and protect research data.' }
  ],
  quiz: [
    { d: 1,
      q: { es: 'Una profesora quiere comparar con citas los 12 artículos que ya leyó para su estado del arte. ¿Qué herramienta usa?', en: 'A professor wants to compare, with citations, the 12 papers she has already read for her state of the art. Which tool does she use?' },
      o: [
        { ok: true, t: { es: 'Gemini Notebook', en: 'Gemini Notebook' }, why: { es: 'Correcto: responde con sus fuentes y cita el fragmento.', en: 'Correct: it answers from her sources and cites the passage.' } },
        { t: { es: 'Deep Research en la web', en: 'Deep Research on the web' }, why: { es: 'Busca fuentes nuevas en la web; ella ya tiene las suyas.', en: 'It finds new web sources; she already has hers.' } },
        { t: { es: 'Nano Banana', en: 'Nano Banana' }, why: { es: 'Crea imágenes, no compara artículos.', en: 'It creates images; it doesn’t compare papers.' } },
        { t: { es: 'Google Vids', en: 'Google Vids' }, why: { es: 'Crea videos, no análisis de literatura.', en: 'It creates videos, not literature analysis.' } }
      ] },
    { d: 2,
      q: { es: '¿Cuál es el mejor uso de Deep Research en una investigación académica?', en: 'What is the best use of Deep Research in academic research?' },
      o: [
        { t: { es: 'Escribir la sección de conclusiones del artículo', en: 'Writing the paper’s conclusions section' }, why: { es: 'Las conclusiones son tu aporte académico.', en: 'Conclusions are your academic contribution.' } },
        { ok: true, t: { es: 'Hacer un mapa inicial del estado del arte', en: 'Making an initial map of the state of the art' }, why: { es: 'Correcto: luego seleccionas, lees y validas las fuentes.', en: 'Correct: then you select, read and validate the sources.' } },
        { t: { es: 'Reemplazar la lectura de las fuentes clave', en: 'Replacing the reading of key sources' }, why: { es: 'Leer las fuentes sigue siendo imprescindible.', en: 'Reading the sources is still essential.' } },
        { t: { es: 'Generar los datos que faltan en el estudio', en: 'Generating the data missing from the study' }, why: { es: 'Inventar datos es una falta grave de integridad.', en: 'Inventing data is a serious integrity breach.' } }
      ] },
    { d: 3,
      q: { es: 'Gemini propone una cita de un autor reconocido para tu artículo, pero no la encuentras en ninguna base de datos. ¿Qué haces?', en: 'Gemini suggests a quote from a well-known author for your paper, but you can’t find it in any database. What do you do?' },
      o: [
        { t: { es: 'La uso: el autor es reconocido', en: 'Use it: the author is well known' }, why: { es: 'El prestigio del autor no prueba que la cita exista.', en: 'The author’s prestige doesn’t prove the quote exists.' } },
        { t: { es: 'La parafraseo para que no se note', en: 'Paraphrase it so it doesn’t show' }, why: { es: 'Disfrazar una cita no verificada es una falta.', en: 'Disguising an unverified quote is misconduct.' } },
        { ok: true, t: { es: 'No la uso hasta verificarla', en: 'Don’t use it until verified' }, why: { es: 'Correcto: puede ser una alucinación.', en: 'Correct: it may be a hallucination.' } },
        { t: { es: 'Pido a Gemini que la confirme', en: 'Ask Gemini to confirm it' }, why: { es: 'Puede confirmar con seguridad algo falso.', en: 'It may confidently confirm something false.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (PDF)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google for Education — Certificaciones (Gemini Certified Faculty)', url: 'https://edu.google.com/intl/ALL_us/learning-center/certifications/' },
    { t: 'Google Blog — NotebookLM is now Gemini Notebook', url: 'https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/' }
  ]
};
