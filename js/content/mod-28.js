/* Módulo 28 · Gemini para la investigación académica (Faculty) */
GDC.MOD['28'] = {
  min: 24,
  intro: {
    es: 'Ya sabes usar Gemini Notebook, Deep Research y el grounding con tus fuentes. Ahora llevamos esas herramientas a la vida académica universitaria: revisar literatura, ordenar un estado del arte, preparar una propuesta de financiamiento y analizar datos, siempre con rigor y verificación.',
    en: 'You already know how to use Gemini Notebook, Deep Research and grounding with your sources. Now we take those tools into university academic life: reviewing literature, organizing a state of the art, preparing a funding proposal and analyzing data, always with rigour and verification.'
  },
  objetivos: [
    { es: 'Identificar aplicaciones de Gemini para optimizar la investigación, la docencia y los resultados de los estudiantes.', en: 'Identify Gemini applications to optimize research, instruction and student outcomes.' },
    { es: 'Elegir la herramienta adecuada (Gemini Notebook, Deep Research, Gemini app) para un objetivo de investigación.', en: 'Choose the right tool (Gemini Notebook, Deep Research, Gemini app) for a research objective.' },
    { es: 'Agilizar tareas académicas, como formular objetivos para una propuesta de financiamiento.', en: 'Streamline academic tasks, such as drafting objectives for a funding proposal.' },
    { es: 'Cargar fuentes para fundamentar las respuestas y refinar un resultado que no cumple el objetivo académico (F 2.1.3, 2.2.2).', en: 'Upload sources to ground answers and refine an output that misses the academic goal (F 2.1.3, 2.2.2).' },
    { es: 'Analizar un resumen generado en busca de sesgos o imprecisiones (F 3.2.1).', en: 'Analyze a generated summary for bias or inaccuracies (F 3.2.1).' }
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
      h: { es: 'Grounding paso a paso: cargar tus fuentes (2.1.3)', en: 'Grounding step by step: uploading your sources (2.1.3)' },
      b: [
        { p: { es: 'Fundamentar (*grounding*) significa que Gemini responde **a partir de documentos que tú eliges** en lugar de su conocimiento general. Es la diferencia entre «lo que el modelo cree» y «lo que dicen tus fuentes». En investigación, es la base del rigor.', en: 'Grounding means Gemini answers **from documents you choose** instead of its general knowledge. It is the difference between “what the model thinks” and “what your sources say”. In research, it is the basis of rigour.' } },
        { steps: [
          { es: '**Elige el espacio:** Gemini Notebook para un corpus que consultarás muchas veces; la Gemini app (botón **+**) para uno o dos archivos puntuales.', en: '**Choose the space:** Gemini Notebook for a corpus you’ll query many times; the Gemini app (**+** button) for one or two one-off files.' },
          { es: '**Carga las fuentes:** PDF, Docs, Slides, páginas web o videos de YouTube. Nombra los archivos con autor y año para leer mejor las citas.', en: '**Upload the sources:** PDFs, Docs, Slides, web pages or YouTube videos. Name files with author and year to read citations more easily.' },
          { es: '**Delimita la consulta:** pide «solo con base en estas fuentes» y que diga cuándo algo **no aparece** en ellas.', en: '**Bound the query:** ask “based only on these sources” and to say when something **doesn’t appear** in them.' },
          { es: '**Revisa las citas:** en Notebook, cada número abre el fragmento exacto; compruébalo antes de usar la idea.', en: '**Check the citations:** in Notebook, each number opens the exact passage; verify it before using the idea.' }
        ] },
        { prompt: { es: 'Usa solo las fuentes cargadas. Responde: ¿qué dicen sobre [variable o concepto]? Organiza la respuesta por autor, cita cada afirmación y, si alguna fuente no trata el tema, dilo explícitamente. No completes con conocimiento externo.', en: 'Use only the uploaded sources. Answer: what do they say about [variable or concept]? Organize the answer by author, cite every claim and, if a source doesn’t address the topic, say so explicitly. Don’t fill in with outside knowledge.' },
          label: { es: '✦ Consulta fundamentada', en: '✦ Grounded query' } },
        { note: { es: 'Un notebook puede compartirse con tu grupo de investigación o tus tesistas para que consulten el mismo corpus. Comparte solo con quien tenga acceso legítimo a esas fuentes.', en: 'A notebook can be shared with your research group or thesis students so they query the same corpus. Share only with people who have legitimate access to those sources.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Analizar y refinar lo que Gemini entrega (2.2.2, 3.2.1)', en: 'Analyzing and refining what Gemini delivers (2.2.2, 3.2.1)' },
      b: [
        { p: { es: 'La guía pide **analizar un resultado de Gemini** e identificar qué hay que refinar para cumplir un objetivo académico. Usa esta lista de control antes de aceptar cualquier síntesis:', en: 'The guide asks you to **analyze a Gemini output** and identify what needs refining to meet an academic goal. Use this checklist before accepting any synthesis:' } },
        { table: {
          head: [{ es: 'Pregunta de control', en: 'Check question' }, { es: 'Si la respuesta es «no»…', en: 'If the answer is “no”…' }],
          rows: [
            [{ es: '¿Cada afirmación tiene una cita verificable?', en: 'Does every claim have a verifiable citation?' }, { es: 'Pide «cita cada afirmación» o carga la fuente que falta', en: 'Ask “cite every claim” or upload the missing source' }],
            [{ es: '¿Representa todas las posturas del debate?', en: 'Does it represent all positions in the debate?' }, { es: 'Pide explícitamente las posturas críticas o minoritarias (posible sesgo)', en: 'Explicitly ask for critical or minority positions (possible bias)' }],
            [{ es: '¿El nivel corresponde a tu audiencia?', en: 'Is the level right for your audience?' }, { es: 'Indica el público: pares, estudiantes de primer año o posgrado', en: 'State the audience: peers, first-year or graduate students' }],
            [{ es: '¿Los datos y fechas coinciden con la fuente?', en: 'Do figures and dates match the source?' }, { es: 'Corrige y pide que marque [VERIFICAR] lo que no pueda sustentar', en: 'Correct them and ask it to mark [VERIFY] whatever it can’t support' }],
            [{ es: '¿Distingue hallazgos de opiniones de los autores?', en: 'Does it separate findings from the authors’ opinions?' }, { es: 'Pide dos columnas: «evidencia» e «interpretación»', en: 'Ask for two columns: “evidence” and “interpretation”' }]
          ]
        } },
        { compare: {
          bad: { t: { es: 'Gemini resume 10 artículos y concluye: «La literatura confirma que el método X es superior».', en: 'Gemini summarizes 10 papers and concludes: “The literature confirms method X is superior”.' }, why: { es: 'Generaliza: quizá solo 6 de 10 lo afirman y con muestras pequeñas. Puede ocultar estudios en contra.', en: 'It overgeneralizes: maybe only 6 of 10 say so, with small samples. It may hide contrary studies.' } },
          good: { t: { es: 'Refinas: «Indica cuántos artículos apoyan, cuántos contradicen y cuántos no concluyen sobre X, con su tamaño de muestra y cita».', en: 'You refine: “State how many papers support, contradict or are inconclusive on X, with sample size and citation”.' }, why: { es: 'La respuesta ahora muestra el peso real de la evidencia y deja ver los matices.', en: 'The answer now shows the real weight of evidence and reveals the nuances.' } }
        } }
      ]
    },
    {
      h: { es: 'Datos, reuniones y escritura académica', en: 'Data, meetings and academic writing' },
      b: [
        { list: [
          { es: '**Datos en Sheets:** Gemini ayuda a limpiar, resumir y proponer gráficos de los datos de una encuesta o de un experimento; revisa siempre las fórmulas y el tratamiento de valores faltantes.', en: '**Data in Sheets:** Gemini helps clean, summarize and suggest charts for survey or experiment data; always check formulas and how missing values are handled.' },
          { es: '**Código para análisis:** pide en Canvas un script de análisis (por ejemplo, en Python) y ejecútalo tú en Colab con datos anonimizados.', en: '**Analysis code:** ask Canvas for an analysis script (for example, in Python) and run it yourself in Colab with anonymized data.' },
          { es: '**Reuniones del grupo:** Gemini en Meet (plan de pago) puede tomar notas y resumir acuerdos de una reunión de investigación; revisa los acuerdos antes de enviarlos.', en: '**Group meetings:** Gemini in Meet (paid plan) can take notes and summarize decisions from a research meeting; review the decisions before sending them.' },
          { es: '**Escritura:** úsalo para reorganizar, aclarar o traducir **tu** borrador, no para generar resultados o conclusiones que no obtuviste.', en: '**Writing:** use it to reorganize, clarify or translate **your** draft, not to generate results or conclusions you didn’t obtain.' }
        ] },
        { prompt: { es: 'Te pego el resumen de mi proyecto y los criterios de la convocatoria. Revisa si cada objetivo específico responde a un criterio, señala los que no se pueden medir y propone una versión medible de cada uno. No inventes resultados preliminares ni presupuesto.', en: 'I’m pasting my project summary and the call’s criteria. Check whether each specific objective addresses a criterion, flag the ones that can’t be measured and propose a measurable version of each. Don’t invent preliminary results or budget.' },
          label: { es: '✦ Revisar objetivos contra la convocatoria', en: '✦ Check objectives against the call' } },
        { note: { es: 'Muchas revistas y agencias de financiamiento tienen políticas sobre IA: algunas exigen declararla, otras prohíben usarla en la evaluación por pares. Consulta la política antes de usar Gemini en un manuscrito o en una revisión.', en: 'Many journals and funding agencies have AI policies: some require disclosure, others ban its use in peer review. Check the policy before using Gemini on a manuscript or a review.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Rigor: lo que la IA no sustituye', en: 'Rigour: what AI doesn’t replace' },
      b: [
        { list: [
          { es: '**Verificación de fuentes:** una cita inventada en un artículo es un problema grave de integridad.', en: '**Source verification:** an invented citation in a paper is a serious integrity problem.' },
          { es: '**Datos sensibles:** no subas datos de participantes sin anonimizar ni datos protegidos por tu comité de ética.', en: '**Sensitive data:** don’t upload non-anonymized participant data or data protected by your ethics committee.' },
          { es: '**Investigación inédita:** piensa antes de cargar manuscritos sin publicar o datos confidenciales (módulo 31).', en: '**Unpublished research:** think before uploading unpublished manuscripts or confidential data (module 31).' },
          { es: '**Transparencia:** declara el uso de IA según las normas de tu revista o institución.', en: '**Transparency:** disclose AI use according to your journal’s or institution’s rules.' }
        ] },
        { note: { es: 'Crea un notebook con 5 artículos de tu línea de investigación y pide la matriz de revisión. Abre las citas de dos filas y comprueba que sean fieles al texto.', en: 'Create a notebook with 5 papers from your research line and ask for the review matrix. Open the citations in two rows and check they are faithful to the text.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Usar las fuentes de Deep Research sin leerlas ni comprobar que existen.', en: 'Using Deep Research’s sources without reading them or checking they exist.' },
    { es: 'Dejar que la IA escriba la síntesis final del estado del arte como si fuera tuya.', en: 'Letting AI write the final state-of-the-art synthesis as if it were yours.' },
    { es: 'Cargar datos de participantes de un estudio sin anonimizar.', en: 'Uploading a study’s participant data without anonymizing it.' },
    { es: 'Aceptar un resumen que generaliza («toda la literatura dice…») sin contar cuántas fuentes lo apoyan.', en: 'Accepting a summary that overgeneralizes (“all the literature says…”) without counting how many sources support it.' },
    { es: 'Usar Gemini en una revisión por pares sin conocer la política de la revista.', en: 'Using Gemini in a peer review without knowing the journal’s policy.' }
  ],
  ideas: [
    { es: 'Deep Research para el mapa inicial; Notebook para analizar con citas tus fuentes validadas.', en: 'Deep Research for the initial map; Notebook to analyze your validated sources with citations.' },
    { es: 'Gemini agiliza objetivos de propuestas y sílabos, pero la autoría académica es tuya.', en: 'Gemini speeds up proposal objectives and syllabi, but academic authorship is yours.' },
    { es: 'Verifica cada cita y protege los datos de investigación.', en: 'Verify every citation and protect research data.' },
    { es: 'Grounding = cargar tus fuentes y limitar la respuesta a ellas; revisa cada cita.', en: 'Grounding = uploading your sources and limiting the answer to them; check every citation.' },
    { es: 'Antes de aceptar una síntesis, busca generalizaciones, posturas omitidas y datos sin fuente.', en: 'Before accepting a synthesis, look for overgeneralizations, omitted positions and unsourced figures.' }
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
      ] },
    { d: 2,
      q: { es: 'Para que Gemini responda **solo** con base en tus artículos, ¿qué es imprescindible?', en: 'For Gemini to answer **only** based on your papers, what is essential?' },
      o: [
        { t: { es: 'Usar el modelo más potente disponible', en: 'Using the most powerful model available' }, why: { es: 'El modelo no sustituye cargar las fuentes.', en: 'The model doesn’t replace uploading sources.' } },
        { ok: true, t: { es: 'Cargar las fuentes y limitarlo a ellas', en: 'Uploading sources, limiting it to them' }, why: { es: 'Correcto: eso es el grounding.', en: 'Correct: that is grounding.' } },
        { t: { es: 'Escribir el prompt en inglés técnico', en: 'Writing the prompt in technical English' }, why: { es: 'El idioma no fundamenta la respuesta.', en: 'Language doesn’t ground the answer.' } },
        { t: { es: 'Pedirle que sea muy preciso y serio', en: 'Asking it to be very precise and serious' }, why: { es: 'Sin fuentes, sigue usando su conocimiento general.', en: 'Without sources, it still uses general knowledge.' } }
      ] },
    { d: 2,
      q: { es: 'Gemini resume 10 artículos y afirma que «toda la literatura» apoya un método. ¿Cuál es el mejor refinamiento?', en: 'Gemini summarizes 10 papers and claims “all the literature” supports a method. What is the best refinement?' },
      o: [
        { t: { es: 'Pedir que lo diga con más seguridad', en: 'Ask it to say it more confidently' }, why: { es: 'Reforzaría una posible generalización.', en: 'It would reinforce a possible overgeneralization.' } },
        { t: { es: 'Aceptarlo: son artículos revisados por pares', en: 'Accept it: they are peer-reviewed papers' }, why: { es: 'La revisión por pares no impide que el resumen exagere.', en: 'Peer review doesn’t stop the summary from exaggerating.' } },
        { ok: true, t: { es: 'Pedir cuántos apoyan o contradicen', en: 'Ask how many support or contradict' }, why: { es: 'Correcto: revela el peso real de la evidencia.', en: 'Correct: it reveals the real weight of evidence.' } },
        { t: { es: 'Pedir que lo resuma en una sola frase', en: 'Ask it to summarize it in one sentence' }, why: { es: 'Más breve no es más preciso.', en: 'Shorter isn’t more accurate.' } }
      ] },
    { d: 3,
      q: { es: 'Un resumen de Gemini sobre un debate académico solo presenta la postura dominante. ¿Qué riesgo identificas?', en: 'A Gemini summary of an academic debate only presents the dominant position. Which risk do you identify?' },
      o: [
        { ok: true, t: { es: 'Sesgo: omite posturas críticas', en: 'Bias: it omits critical positions' }, why: { es: 'Correcto: pide de forma explícita las demás posturas.', en: 'Correct: explicitly ask for the other positions.' } },
        { t: { es: 'Un error de formato del resumen', en: 'A formatting error in the summary' }, why: { es: 'El problema es de contenido, no de formato.', en: 'The problem is content, not format.' } },
        { t: { es: 'Una función de pago desactivada', en: 'A disabled paid feature' }, why: { es: 'No tiene relación con el plan.', en: 'It has nothing to do with the plan.' } },
        { t: { es: 'Ninguno: lo dominante es lo correcto', en: 'None: the dominant view is correct' }, why: { es: 'Lo mayoritario no siempre es lo correcto ni lo completo.', en: 'The majority view isn’t always right or complete.' } }
      ] },
    { d: 2,
      q: { es: 'Un investigador quiere analizar los datos de una encuesta con un script. ¿Qué flujo es el más adecuado?', en: 'A researcher wants to analyze survey data with a script. Which workflow is most suitable?' },
      o: [
        { t: { es: 'Subir los datos con nombres a un chat personal', en: 'Upload named data to a personal chat' }, why: { es: 'Expone datos personales sin protección.', en: 'It exposes personal data without protection.' } },
        { t: { es: 'Pedir que invente los datos que faltan', en: 'Ask it to invent the missing data' }, why: { es: 'Inventar datos es una falta grave.', en: 'Inventing data is serious misconduct.' } },
        { ok: true, t: { es: 'Script en Canvas y datos anonimizados', en: 'Canvas script, anonymized data' }, why: { es: 'Correcto: control, privacidad y verificación.', en: 'Correct: control, privacy and verification.' } },
        { t: { es: 'Aceptar las conclusiones sin ver el código', en: 'Accept the conclusions without seeing the code' }, why: { es: 'Debes revisar el análisis que respalda la conclusión.', en: 'You must review the analysis behind the conclusion.' } }
      ] },
    { d: 3,
      q: { es: 'Te piden evaluar un manuscrito como revisor par y quieres usar Gemini. ¿Qué haces primero?', en: 'You’re asked to peer-review a manuscript and want to use Gemini. What do you do first?' },
      o: [
        { t: { es: 'Cargar el manuscrito completo y pedir el dictamen', en: 'Upload the full manuscript and ask for the verdict' }, why: { es: 'Puede violar la confidencialidad y delega tu juicio.', en: 'It may breach confidentiality and delegates your judgment.' } },
        { ok: true, t: { es: 'Revisar la política de IA de la revista', en: 'Check the journal’s AI policy' }, why: { es: 'Correcto: muchas restringen la IA en la revisión por pares.', en: 'Correct: many restrict AI in peer review.' } },
        { t: { es: 'Pedir a los autores que lo resuman', en: 'Ask the authors to summarize it' }, why: { es: 'La revisión es anónima y no resuelve la duda.', en: 'Review is anonymous and it doesn’t solve the question.' } },
        { t: { es: 'Usar una cuenta personal para no dejar rastro', en: 'Use a personal account to leave no trace' }, why: { es: 'Agrava el riesgo de confidencialidad.', en: 'It worsens the confidentiality risk.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (PDF)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google for Education — Certificaciones (Gemini Certified Faculty)', url: 'https://edu.google.com/intl/ALL_us/learning-center/certifications/' },
    { t: 'Google Blog — NotebookLM is now Gemini Notebook', url: 'https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/' }
  ]
};
