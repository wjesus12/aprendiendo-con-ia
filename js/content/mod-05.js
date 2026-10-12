/* Módulo 05 · Alucinaciones, límites y cómo verificar */
GDC.MOD['05'] = {
  min: 14,
  intro: {
    es: 'Gemini puede equivocarse con total seguridad. Saberlo no es motivo para no usarlo: es la razón para usarlo bien. En este módulo aprenderás a reconocer las alucinaciones, sus causas y una rutina simple para verificar antes de usar cualquier resultado.',
    en: 'Gemini can be wrong with complete confidence. Knowing that isn’t a reason not to use it: it is the reason to use it well. In this module you will learn to recognize hallucinations, their causes and a simple routine to verify before using any result.'
  },
  objetivos: [
    { es: 'Explicar qué es una **alucinación** y dar ejemplos en contextos educativos.', en: 'Explain what a **hallucination** is and give examples in educational contexts.' },
    { es: 'Aplicar técnicas que reducen errores: fuentes propias, límites en el prompt y etiquetas [VERIFICAR].', en: 'Apply techniques that reduce errors: your own sources, limits in the prompt and [VERIFY] tags.' },
    { es: 'Revisar cualquier resultado con cuatro criterios: precisión, pertinencia, privacidad y transparencia.', en: 'Review any result with four criteria: accuracy, relevance, privacy and transparency.' }
  ],
  secciones: [
    {
      h: { es: '¿Qué es una alucinación?', en: 'What is a hallucination?' },
      b: [
        { p: { es: 'Una **alucinación** es una respuesta de la IA que suena segura y bien escrita, pero que es **falsa, inventada o no se apoya en ninguna fuente**. Ocurre porque el modelo genera el texto más probable, no el texto comprobado (módulo 02).',
               en: 'A **hallucination** is an AI answer that sounds confident and well written but is **false, made up or not backed by any source**. It happens because the model generates the most likely text, not checked text (module 02).' } },
        { table: {
          head: [{ es: 'Cómo se ve en el aula', en: 'What it looks like in class' }, { es: 'Ejemplo', en: 'Example' }],
          rows: [
            [{ es: 'Citas o libros inventados', en: 'Made-up citations or books' }, { es: 'Una bibliografía con autores reales y títulos que no existen', en: 'A bibliography with real authors and titles that don’t exist' }],
            [{ es: 'Datos o fechas erróneas', en: 'Wrong data or dates' }, { es: 'Un año equivocado en una línea de tiempo histórica', en: 'A wrong year on a historical timeline' }],
            [{ es: 'Cálculos con fallos', en: 'Faulty calculations' }, { es: 'Una solución de matemáticas con un paso incorrecto', en: 'A maths solution with a wrong step' }],
            [{ es: 'Frases atribuidas a quien no las dijo', en: 'Quotes attributed to the wrong person' }, { es: 'Una cita célebre puesta en boca de otro autor', en: 'A famous quote credited to another author' }],
            [{ es: 'Contenido inadecuado para la edad', en: 'Content unsuitable for the age group' }, { es: 'Un ejemplo correcto, pero demasiado complejo o sensible para el grupo', en: 'A correct example that is too complex or sensitive for the group' }]
          ]
        } },
        { note: { es: 'La guía pide «explicar el concepto de alucinaciones y dar ejemplos de cómo se manifiestan en contextos educativos» (objetivo 3.1.2) y «analizar una salida de Gemini en busca de sesgos, inexactitudes o contenido inapropiado» (3.2.1).',
                  en: 'The guide asks you to “explain the concept of hallucinations and provide examples of how they manifest in educational contexts” (objective 3.1.2) and to “analyze a Gemini output for bias, factual inaccuracies or inappropriateness” (3.2.1).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Cómo reducir los errores desde el prompt', en: 'How to reduce errors from the prompt' },
      b: [
        { list: [
          { es: '**Dale tus fuentes.** Adjunta el sílabo, el texto o el documento base (módulo 08) o trabaja en Gemini Notebook, que responde solo con tus fuentes y cita de dónde sale cada idea (módulo 20).', en: '**Give it your sources.** Attach the syllabus, text or base document (module 08) or work in Gemini Notebook, which answers only from your sources and cites where each idea comes from (module 20).' },
          { es: '**Pon límites explícitos.** «Basa el contenido solo en mis documentos. No inventes datos ni citas.»', en: '**Set explicit limits.** “Base the content only on my documents. Do not invent data or quotes.”' },
          { es: '**Pide que marque lo dudoso.** «Marca con [VERIFICAR] lo que no esté en los documentos o requiera validación.»', en: '**Ask it to flag doubts.** “Mark with [VERIFY] anything not in the documents or that needs validation.”' },
          { es: '**Pide fuentes y revísalas.** Abre los enlaces: una fuente que no existe o que no dice eso es una señal de alerta.', en: '**Ask for sources and check them.** Open the links: a source that doesn’t exist or doesn’t say that is a red flag.' }
        ] },
        { prompt: { es: 'Basa tu respuesta solo en el documento adjunto. Si algo no está en él, dilo en lugar de suponer. Marca con [VERIFICAR] cualquier dato que requiera validación académica o adaptación a nuestro contexto. No inventes datos, autores ni citas.',
                    en: 'Base your answer only on the attached document. If something isn’t in it, say so instead of guessing. Mark with [VERIFY] any data that needs academic validation or adaptation to our context. Do not invent data, authors or quotes.' },
          label: { es: '✦ Bloque de «límites» para pegar al final de tus prompts', en: '✦ “Limits” block to paste at the end of your prompts' } }
      ]
    },
    {
      h: { es: 'La revisión humana sigue siendo necesaria', en: 'Human review is still necessary' },
      b: [
        { p: { es: 'Antes de llevar cualquier resultado al aula, pásalo por cuatro filtros:', en: 'Before taking any result to class, run it through four filters:' } },
        { table: {
          head: [{ es: 'Criterio', en: 'Criterion' }, { es: 'Pregunta que te haces', en: 'Question to ask yourself' }],
          rows: [
            [{ es: 'Precisión', en: 'Accuracy' }, { es: '¿Lo contrasté con fuentes confiables?', en: 'Did I check it against reliable sources?' }],
            [{ es: 'Pertinencia', en: 'Relevance' }, { es: '¿Responde al aprendizaje esperado y a mi grupo?', en: 'Does it serve the expected learning and my group?' }],
            [{ es: 'Privacidad', en: 'Privacy' }, { es: '¿Evité cargar datos personales de estudiantes?', en: 'Did I avoid uploading students’ personal data?' }],
            [{ es: 'Transparencia', en: 'Transparency' }, { es: '¿Explico que usé IA y cómo?', en: 'Do I explain that I used AI and how?' }]
          ]
        } },
        { note: { es: 'Pídele a Gemini «tres fuentes académicas sobre [tema de tu curso] con autor, año y enlace». Abre cada enlace y comprueba si existe y si dice lo que Gemini afirma. Anota cuántas pasaron la prueba.',
                  en: 'Ask Gemini for “three academic sources on [your course topic] with author, year and link”. Open each link and check whether it exists and says what Gemini claims. Note how many passed the test.' }, kind: 'lab' }
      ]
    },
    {
      h: { es: 'Otros límites que conviene conocer', en: 'Other limits worth knowing' },
      b: [
        { list: [
          { es: '**Sesgo:** el modelo aprendió de textos humanos y puede reproducir estereotipos. Revisa ejemplos, nombres e imágenes con mirada inclusiva (módulo 25).', en: '**Bias:** the model learned from human texts and can reproduce stereotypes. Review examples, names and images with an inclusive eye (module 25).' },
          { es: '**Actualidad:** lo aprendido tiene fecha de corte; para hechos recientes, pide que use la Búsqueda o verifica tú.', en: '**Recency:** what it learned has a cutoff date; for recent facts, ask it to use Search or verify yourself.' },
          { es: '**Contexto local:** puede no conocer tu currículo nacional, tu institución o tu realidad. Dáselo tú.', en: '**Local context:** it may not know your national curriculum, your institution or your reality. Provide it yourself.' }
        ] }
      ]
    }
  ],
  trampas: [
    { es: 'Pedirle a Gemini que confirme si su propia respuesta es correcta y darlo por verificado.', en: 'Asking Gemini to confirm whether its own answer is correct and treating that as verified.' },
    { es: 'Confiar más en una respuesta porque es larga, ordenada y con tono académico.', en: 'Trusting an answer more because it is long, tidy and academic in tone.' },
    { es: 'Revisar solo los datos y olvidar si el contenido es adecuado para la edad del grupo.', en: 'Checking only the facts and forgetting whether the content suits the group’s age.' }
  ],
  ideas: [
    { es: 'Una alucinación es falsa pero suena segura: la fluidez no prueba nada.', en: 'A hallucination is false but sounds confident: fluency proves nothing.' },
    { es: 'Tus fuentes + límites claros + [VERIFICAR] reducen mucho los errores.', en: 'Your sources + clear limits + [VERIFY] greatly reduce errors.' },
    { es: 'Revisa siempre: precisión, pertinencia, privacidad y transparencia.', en: 'Always review: accuracy, relevance, privacy and transparency.' }
  ],
  quiz: [
    { d: 3,
      q: { es: 'Gemini te entrega una bibliografía de cinco libros para tu curso. ¿Cuál es el riesgo principal?', en: 'Gemini gives you a five-book bibliography for your course. What is the main risk?' },
      o: [
        { t: { es: 'Que los libros estén en otro idioma', en: 'That the books are in another language' },
          why: { es: 'Es un detalle práctico; el riesgo central es que no existan.', en: 'That is a practical detail; the central risk is that they don’t exist.' } },
        { ok: true, t: { es: 'Que algunos títulos sean inventados', en: 'That some titles are made up' },
          why: { es: 'Correcto: las citas inventadas son una alucinación típica; comprueba cada una.', en: 'Correct: invented citations are a typical hallucination; check each one.' } },
        { t: { es: 'Que la lista sea demasiado corta', en: 'That the list is too short' },
          why: { es: 'La extensión se ajusta con el prompt; no es el riesgo principal.', en: 'Length can be adjusted with the prompt; it isn’t the main risk.' } },
        { t: { es: 'Que los libros sean muy recientes', en: 'That the books are very recent' },
          why: { es: 'Más bien lo contrario: el modelo puede no conocer publicaciones recientes.', en: 'Rather the opposite: the model may not know recent publications.' } }
      ] },
    { d: 3,
      q: { es: '¿Qué instrucción reduce **mejor** las alucinaciones al crear un material a partir de tu sílabo?', en: 'Which instruction **best** reduces hallucinations when creating material from your syllabus?' },
      o: [
        { t: { es: '«Sé lo más creativo posible con el tema»', en: '“Be as creative as possible with the topic”' },
          why: { es: 'Más libertad creativa aumenta el riesgo de contenido inventado.', en: 'More creative freedom increases the risk of invented content.' } },
        { t: { es: '«Responde rápido y en pocas palabras»', en: '“Answer quickly and in a few words”' },
          why: { es: 'La brevedad no hace que la respuesta sea más fiel a tu fuente.', en: 'Brevity doesn’t make the answer more faithful to your source.' } },
        { ok: true, t: { es: '«Usa solo el sílabo y marca lo dudoso»', en: '“Use only the syllabus and flag doubts”' },
          why: { es: 'Correcto: anclar a tu fuente y señalar lo dudoso facilita la verificación.', en: 'Correct: anchoring to your source and flagging doubts makes checking easier.' } },
        { t: { es: '«Añade muchos datos para que sea completo»', en: '“Add lots of data so it is complete”' },
          why: { es: 'Pedir más datos sin fuente invita a que los invente.', en: 'Asking for more unsourced data invites it to make them up.' } }
      ] },
    { d: 3,
      q: { es: 'Un material generado es correcto, pero usa un ejemplo violento para estudiantes de 10 años. ¿Qué criterio falló?', en: 'A generated material is correct but uses a violent example for 10-year-olds. Which criterion failed?' },
      o: [
        { t: { es: 'Precisión', en: 'Accuracy' },
          why: { es: 'El contenido es correcto: la precisión no es el problema.', en: 'The content is correct: accuracy isn’t the problem.' } },
        { ok: true, t: { es: 'Pertinencia', en: 'Relevance' },
          why: { es: 'Correcto: no es adecuado para la audiencia, aunque sea verdadero.', en: 'Correct: it isn’t suitable for the audience, even if true.' } },
        { t: { es: 'Privacidad', en: 'Privacy' },
          why: { es: 'No se expusieron datos personales en este caso.', en: 'No personal data was exposed in this case.' } },
        { t: { es: 'Transparencia', en: 'Transparency' },
          why: { es: 'La transparencia trata de declarar el uso de IA, no del contenido.', en: 'Transparency is about disclosing AI use, not about the content.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (objetivos 3.1.2 y 3.2.1)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Google for Education — Teaching responsible use of AI', url: 'https://edu.exceedlms.com/student/path/1724166-resource-teaching-responsible-use-of-ai' }
  ]
};
