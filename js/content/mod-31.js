/* Módulo 31 · Integridad académica, propiedad intelectual y alfabetización en IA (Faculty, dominio 3) */
GDC.MOD['31'] = {
  min: 26,
  intro: {
    es: 'El dominio 3 del Faculty retoma lo que viste en el módulo 25 (sesgo, alucinaciones, plagio, alfabetización en IA) y lo lleva a la universidad: **riesgos de propiedad intelectual**, **conducta académica indebida** en trabajos e investigación, dilemas éticos propios de la educación superior y cómo formar estudiantes **conscientes de su propio uso de la IA**. Es el dominio con más objetivos de nivel alto (analizar, evaluar y crear), así que aquí practicarás con casos.',
    en: 'Faculty domain 3 picks up what you saw in module 25 (bias, hallucinations, plagiarism, AI literacy) and takes it to the university: **intellectual property risks**, **academic misconduct** in coursework and research, ethical dilemmas specific to higher education and how to develop students who are **aware of their own AI use**. It is the domain with the most high-level objectives (analyze, evaluate and create), so here you will practise with cases.'
  },
  objetivos: [
    { es: 'Describir sesgo, transparencia, privacidad y responsabilidad digital, y explicar las alucinaciones en contextos académicos (F 3.1.1, 3.1.2).', en: 'Describe bias, transparency, privacy and digital responsibility, and explain hallucinations in scholarly contexts (F 3.1.1, 3.1.2).' },
    { es: 'Identificar riesgos de propiedad intelectual y de sobredependencia, y proponer mitigaciones (F 3.2.2).', en: 'Identify intellectual property and over-reliance risks, and propose mitigations (F 3.2.2).' },
    { es: 'Describir enfoques para mitigar la conducta académica indebida y planificar cómo prevenir plagio e imprecisiones (F 3.1.3, 3.4.2).', en: 'Describe approaches to mitigating academic misconduct and plan how to prevent plagiarism and inaccuracies (F 3.1.3, 3.4.2).' },
    { es: 'Analizar dilemas éticos, evaluar contenidos generados y justificar cuándo usar o no la IA (F 3.2.3, 3.3.1, 3.3.3).', en: 'Analyze ethical dilemmas, evaluate generated content and justify when to use AI or not (F 3.2.3, 3.3.1, 3.3.3).' },
    { es: 'Promover metacognición y alfabetización en IA en los estudiantes (F 3.1.4, 3.3.2, 3.4.1).', en: 'Promote metacognition and AI literacy in students (F 3.1.4, 3.3.2, 3.4.1).' }
  ],
  secciones: [
    {
      h: { es: 'Conceptos éticos y alucinaciones en la academia (3.1.1, 3.1.2)', en: 'Ethical concepts and hallucinations in academia (3.1.1, 3.1.2)' },
      b: [
        { table: {
          head: [{ es: 'Concepto', en: 'Concept' }, { es: 'Qué significa', en: 'What it means' }, { es: 'Ejemplo universitario', en: 'University example' }],
          rows: [
            [{ es: '**Sesgo**', en: '**Bias**' }, { es: 'Resultados que favorecen o perjudican a grupos o posturas por patrones de los datos de entrenamiento', en: 'Outputs that favour or harm groups or positions due to training-data patterns' }, { es: 'Una revisión que solo cita autores de un país o de una escuela teórica', en: 'A review citing only authors from one country or one theoretical school' }],
            [{ es: '**Transparencia**', en: '**Transparency**' }, { es: 'Declarar cuándo y cómo se usó la IA', en: 'Disclosing when and how AI was used' }, { es: 'Nota en el sílabo o en el artículo sobre el uso de Gemini', en: 'A note in the syllabus or paper on Gemini use' }],
            [{ es: '**Privacidad**', en: '**Privacy**' }, { es: 'Proteger los datos personales y confidenciales', en: 'Protecting personal and confidential data' }, { es: 'No cargar notas ni datos de participantes identificables', en: 'Not uploading grades or identifiable participant data' }],
            [{ es: '**Responsabilidad digital**', en: '**Digital responsibility**' }, { es: 'Usar la tecnología de forma ética, segura y respetuosa', en: 'Using technology ethically, safely and respectfully' }, { es: 'Respetar licencias y la autoría de otros', en: 'Respecting licences and others’ authorship' }]
          ]
        } },
        { p: { es: 'Una **alucinación** es una respuesta que suena segura pero es falsa o no tiene sustento. En la academia se manifiesta de formas muy concretas:', en: 'A **hallucination** is an answer that sounds confident but is false or unsupported. In academia it shows up in very specific ways:' } },
        { list: [
          { es: '**Referencias inexistentes:** autor real, título plausible, revista real… pero el artículo no existe o el DOI apunta a otro trabajo.', en: '**Non-existent references:** real author, plausible title, real journal… but the paper doesn’t exist or the DOI points to another work.' },
          { es: '**Citas textuales inventadas** atribuidas a un autor reconocido.', en: '**Invented verbatim quotes** attributed to a well-known author.' },
          { es: '**Cifras y estadísticas** sin fuente o con decimales «demasiado exactos».', en: '**Figures and statistics** without a source or with “too precise” decimals.' },
          { es: '**Fechas o hechos históricos** mezclados entre eventos parecidos.', en: '**Dates or historical facts** mixed up between similar events.' },
          { es: '**Resultados atribuidos a un estudio** que en realidad concluyó otra cosa.', en: '**Findings attributed to a study** that actually concluded something else.' }
        ] },
        { note: { es: 'Mitigación: fundamenta con tus fuentes (Gemini Notebook), pide que marque [VERIFICAR] lo que no pueda sustentar y comprueba cada referencia en la base de datos original antes de citarla.', en: 'Mitigation: ground with your sources (Gemini Notebook), ask it to mark [VERIFY] whatever it can’t support, and check every reference in the original database before citing it.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Propiedad intelectual: piensa antes de cargar', en: 'Intellectual property: think before you upload' },
      b: [
        { p: { es: 'La guía Faculty pide identificar riesgos como la **sobredependencia** y los **problemas de propiedad intelectual** en escenarios académicos, y proponer mitigaciones (objetivo 3.2.2).', en: 'The Faculty guide asks you to identify risks such as **over-reliance** and **intellectual property concerns** in academic scenarios, and to propose mitigations (objective 3.2.2).' } },
        { table: {
          head: [{ es: 'Riesgo', en: 'Risk' }, { es: 'Mitigación', en: 'Mitigation' }],
          rows: [
            [{ es: 'Cargar manuscritos inéditos o datos confidenciales', en: 'Uploading unpublished manuscripts or confidential data' }, { es: 'Usar la cuenta institucional protegida y cargar solo lo necesario', en: 'Use the protected school account and upload only what’s needed' }],
            [{ es: 'Subir libros o artículos con derechos de autor a herramientas o enlaces públicos', en: 'Uploading copyrighted books or papers to public tools or links' }, { es: 'Respetar licencias; compartir notebooks solo con quien tenga acceso legítimo', en: 'Respect licences; share notebooks only with those who have legitimate access' }],
            [{ es: 'Atribución confusa del texto generado', en: 'Unclear attribution of generated text' }, { es: 'Declarar el uso de IA según la política de la revista o la universidad', en: 'Disclose AI use per the journal’s or university’s policy' }],
            [{ es: 'Trabajo de tesis de estudiantes cargado sin permiso', en: 'Students’ thesis work uploaded without permission' }, { es: 'Pedir consentimiento y anonimizar', en: 'Ask for consent and anonymize' }]
          ]
        } },
        { note: { es: 'Recuerda: en Workspace for Education tus datos no se usan para entrenar modelos, pero eso **no** resuelve los derechos de autor ni la confidencialidad: esas decisiones siguen siendo tuyas.', en: 'Remember: in Workspace for Education your data isn’t used to train models, but that does **not** settle copyright or confidentiality: those decisions are still yours.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Conducta académica indebida en la era de la IA', en: 'Academic misconduct in the AI era' },
      b: [
        { list: [
          { es: '**Política por curso y por tarea:** qué usos de IA se permiten y cómo se declaran.', en: '**Policy per course and per task:** which AI uses are allowed and how they are disclosed.' },
          { es: '**Evaluar el proceso:** borradores, decisiones, fuentes y defensa oral (módulo 25).', en: '**Assess the process:** drafts, decisions, sources and oral defense (module 25).' },
          { es: '**Tareas situadas:** datos propios, trabajo de campo o casos locales difíciles de delegar.', en: '**Situated tasks:** own data, fieldwork or local cases that are hard to delegate.' },
          { es: '**No sancionar solo con detectores:** no son fiables como prueba única.', en: '**Don’t sanction with detectors alone:** they aren’t reliable as sole evidence.' }
        ] },
        { prompt: { es: 'Diseña una actividad de 30 minutos para estudiantes universitarios de [carrera] que provoque un debate crítico sobre el uso apropiado de la IA generativa en sus trabajos: un caso breve con un dilema, tres preguntas de discusión, una consigna para redactar en grupo una norma de uso y una rúbrica corta para valorar los argumentos.', en: 'Design a 30-minute activity for [programme] university students that sparks critical debate on the appropriate use of generative AI in their work: a short case with a dilemma, three discussion questions, a prompt for groups to draft a usage rule, and a short rubric to assess the arguments.' },
          label: { es: '✦ Artefacto para el debate en clase', en: '✦ Artifact for class debate' } },
        { note: { es: 'Objetivo 3.4.1 del Faculty: «desarrollar un artefacto instruccional (una actividad estructurada o una consigna evaluada) para facilitar la discusión crítica sobre el uso apropiado de la IA generativa».', en: 'Faculty objective 3.4.1: “develop an instructional artifact (such as a structured class activity or graded assignment prompt) to facilitate critical discussion among students regarding the appropriate use of generative AI tools”.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Plan para prevenir plagio e imprecisiones (3.4.2)', en: 'Plan to prevent plagiarism and inaccuracies (3.4.2)' },
      b: [
        { p: { es: 'La guía pide **formular un plan** para abordar de forma proactiva el plagio y las imprecisiones al integrar Gemini en las tareas. Un plan completo tiene cuatro momentos:', en: 'The guide asks you to **formulate a plan** to proactively address plagiarism and factual inaccuracies when integrating Gemini into assignments. A complete plan has four stages:' } },
        { table: {
          head: [{ es: 'Momento', en: 'Stage' }, { es: 'Acción', en: 'Action' }],
          rows: [
            [{ es: 'Antes: política', en: 'Before: policy' }, { es: 'Indica en el sílabo y en cada consigna qué usos de IA se permiten (idear, revisar estilo) y cuáles no (redactar el producto final)', en: 'State in the syllabus and each brief which AI uses are allowed (brainstorming, style review) and which aren’t (drafting the final product)' }],
            [{ es: 'Durante: proceso', en: 'During: process' }, { es: 'Pide borradores, el historial de prompts relevantes y una bitácora de decisiones', en: 'Ask for drafts, relevant prompt history and a decision log' }],
            [{ es: 'Entrega: declaración', en: 'Submission: disclosure' }, { es: 'Una nota breve: qué herramienta usó, para qué y qué verificó', en: 'A short note: which tool was used, for what and what was verified' }],
            [{ es: 'Después: verificación', en: 'After: verification' }, { es: 'Defensa oral breve o preguntas sobre el propio trabajo; revisión de referencias por muestreo', en: 'Short oral defense or questions about their own work; spot-check of references' }]
          ]
        } },
        { note: { es: 'Los detectores de IA dan falsos positivos (por ejemplo, con estudiantes que escriben en una segunda lengua). Úsalos, si acaso, como una señal para conversar, nunca como prueba única de una sanción.', en: 'AI detectors give false positives (for example, with students writing in a second language). Use them, if at all, as a signal to start a conversation, never as the sole evidence for a sanction.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Dilemas éticos y cuándo no usar la IA (3.2.3, 3.3.1, 3.3.3)', en: 'Ethical dilemmas and when not to use AI (3.2.3, 3.3.1, 3.3.3)' },
      b: [
        { p: { es: 'Las preguntas de nivel alto plantean un **escenario** y piden identificar el dilema o justificar una decisión. Practica con estos casos:', en: 'High-level questions present a **scenario** and ask you to identify the dilemma or justify a decision. Practise with these cases:' } },
        { table: {
          head: [{ es: 'Escenario', en: 'Scenario' }, { es: 'Dilema', en: 'Dilemma' }, { es: 'Decisión defendible', en: 'Defensible decision' }],
          rows: [
            [{ es: 'Un docente quiere que Gemini califique 200 ensayos finales', en: 'A professor wants Gemini to grade 200 final essays' }, { es: 'Eficiencia frente a equidad y responsabilidad', en: 'Efficiency versus fairness and accountability' }, { es: 'Gemini puede sugerir comentarios con tu rúbrica; la nota final la decides tú', en: 'Gemini can suggest comments with your rubric; you decide the final grade' }],
            [{ es: 'Un tesista usa Gemini para redactar la discusión de resultados', en: 'A thesis student uses Gemini to write the discussion of results' }, { es: 'Ayuda legítima frente a autoría', en: 'Legitimate help versus authorship' }, { es: 'Permitir revisión de estilo; la interpretación debe ser suya y declarada', en: 'Allow style review; the interpretation must be theirs and disclosed' }],
            [{ es: 'Un comité usa IA para preseleccionar postulantes a una beca', en: 'A committee uses AI to pre-screen scholarship applicants' }, { es: 'Sesgo y decisiones de alto impacto', en: 'Bias and high-impact decisions' }, { es: 'No delegar la selección; si se usa, con revisión humana y criterios transparentes', en: 'Don’t delegate selection; if used, with human review and transparent criteria' }],
            [{ es: 'Se generan casos clínicos con datos reales de pacientes', en: 'Clinical cases are generated with real patient data' }, { es: 'Valor didáctico frente a privacidad', en: 'Teaching value versus privacy' }, { es: 'Usar casos ficticios o datos totalmente anonimizados', en: 'Use fictional cases or fully anonymized data' }]
          ]
        } },
        { compare: {
          bad: { t: { es: 'Contenido generado para un curso de Historia de primer año: un resumen de la colonización que solo presenta la perspectiva de los colonizadores, con tono celebratorio.', en: 'Content generated for a first-year History course: a summary of colonization that only presents the colonizers’ perspective, in a celebratory tone.' }, why: { es: 'Sesgo de perspectiva y tono inadecuado para la audiencia: requiere refinar o descartar (3.3.1).', en: 'Perspective bias and a tone unsuited to the audience: it needs refining or discarding (3.3.1).' } },
          good: { t: { es: 'Versión refinada: presenta varias perspectivas con fuentes, distingue hechos de interpretaciones y cierra con preguntas para el debate.', en: 'Refined version: presents several perspectives with sources, separates facts from interpretations and closes with debate questions.' }, why: { es: 'Pedagógicamente apropiada y éticamente equilibrada para el contexto.', en: 'Pedagogically appropriate and ethically balanced for the context.' } }
        } },
        { list: [
          { es: '**Usa la IA** cuando ahorra tiempo en tareas de bajo riesgo y tú puedes verificar el resultado: borradores, ideas, formatos, primeras búsquedas.', en: '**Use AI** when it saves time on low-risk tasks and you can verify the result: drafts, ideas, formats, initial searches.' },
          { es: '**No la uses (o hazlo con mucha cautela)** cuando la tarea implica juicio experto, datos sensibles, confidencialidad (revisión por pares) o una decisión de alto impacto sobre personas.', en: '**Don’t use it (or use it very cautiously)** when the task involves expert judgment, sensitive data, confidentiality (peer review) or a high-impact decision about people.' }
        ] }
      ]
    },
    {
      h: { es: 'Metacognición y alfabetización en IA (3.1.4, 3.3.2)', en: 'Metacognition and AI literacy (3.1.4, 3.3.2)' },
      b: [
        { p: { es: 'La guía insiste en que los estudiantes desarrollen **autoconciencia, metacognición y pensamiento crítico** sobre su propio uso de la IA: saber cuándo les ayuda a aprender y cuándo solo les ahorra el esfuerzo que produce el aprendizaje.', en: 'The guide stresses that students should develop **self-awareness, metacognition and critical thinking** about their own AI use: knowing when it helps them learn and when it just spares them the effort that produces learning.' } },
        { table: {
          head: [{ es: 'Estrategia para enseñar alfabetización en IA', en: 'Strategy for teaching AI literacy' }, { es: 'Por qué es eficaz', en: 'Why it works' }],
          rows: [
            [{ es: 'Comparar la respuesta de Gemini con una fuente académica y encontrar diferencias', en: 'Comparing Gemini’s answer with an academic source and finding differences' }, { es: 'Desarrolla verificación y escepticismo sano', en: 'Builds verification and healthy scepticism' }],
            [{ es: 'Bitácora de uso: qué pregunté, qué acepté, qué corregí y por qué', en: 'Usage log: what I asked, what I accepted, what I corrected and why' }, { es: 'Hace visible la metacognición', en: 'Makes metacognition visible' }],
            [{ es: 'Co-construir con el grupo las normas de uso del curso', en: 'Co-building the course’s usage rules with the group' }, { es: 'Genera compromiso y comprensión de los límites', en: 'Builds commitment and understanding of limits' }],
            [{ es: 'Analizar en clase una alucinación real', en: 'Analyzing a real hallucination in class' }, { es: 'Muestra el riesgo con un ejemplo concreto', en: 'Shows the risk with a concrete example' }],
            [{ es: 'Solo prohibir el uso, sin explicar', en: 'Only banning use, with no explanation' }, { es: '**Poco eficaz:** no educa y es difícil de sostener', en: '**Less effective:** it doesn’t educate and is hard to sustain' }]
          ]
        } },
        { prompt: { es: 'Crea una bitácora de uso de IA de una página para estudiantes de [curso]. Columnas: fecha, tarea, prompt usado, qué acepté, qué cambié y por qué, cómo verifiqué. Añade tres preguntas de reflexión para el final del semestre sobre lo que aprendieron a hacer sin ayuda.', en: 'Create a one-page AI usage log for [course] students. Columns: date, task, prompt used, what I accepted, what I changed and why, how I verified. Add three end-of-semester reflection questions about what they learned to do without help.' },
          label: { es: '✦ Bitácora metacognitiva', en: '✦ Metacognitive log' } },
        { note: { es: 'Redacta con Gemini la política de IA de uno de tus cursos (permitido, no permitido, cómo declarar) y la actividad de debate de esta sección. Pide a un colega que la lea como si fuera estudiante: ¿queda claro qué puede hacer?', en: 'Draft with Gemini the AI policy for one of your courses (allowed, not allowed, how to disclose) and this section’s debate activity. Ask a colleague to read it as a student: is it clear what they can do?' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Creer que, como los datos no entrenan modelos, se puede cargar cualquier material con derechos de autor.', en: 'Believing that, since data doesn’t train models, any copyrighted material can be uploaded.' },
    { es: 'Sancionar a un estudiante solo por el resultado de un detector de IA.', en: 'Sanctioning a student based only on an AI detector’s result.' },
    { es: 'Citar una referencia que Gemini sugirió sin comprobar que existe.', en: 'Citing a reference Gemini suggested without checking it exists.' },
    { es: 'Prohibir la IA sin explicar por qué, en lugar de enseñar a usarla con criterio.', en: 'Banning AI without explaining why, instead of teaching how to use it with judgment.' },
    { es: 'Delegar en la IA decisiones de alto impacto sobre personas (notas, becas, admisiones).', en: 'Delegating high-impact decisions about people to AI (grades, scholarships, admissions).' }
  ],
  ideas: [
    { es: 'La protección de datos no resuelve la propiedad intelectual: carga solo lo necesario y respeta licencias.', en: 'Data protection doesn’t settle intellectual property: upload only what’s needed and respect licences.' },
    { es: 'Contra la conducta indebida: política clara, proceso visible y tareas situadas.', en: 'Against misconduct: clear policy, visible process and situated tasks.' },
    { es: 'Alucinaciones académicas típicas: referencias, citas y cifras inventadas; verifica en la fuente original.', en: 'Typical academic hallucinations: invented references, quotes and figures; verify in the original source.' },
    { es: 'Plan contra plagio e imprecisiones: política, proceso, declaración y verificación.', en: 'Plan against plagiarism and inaccuracies: policy, process, disclosure and verification.' },
    { es: 'Alfabetización en IA: comparar, registrar, reflexionar y co-construir normas.', en: 'AI literacy: compare, log, reflect and co-build rules.' }
  ],
  quiz: [
    { d: 3,
      q: { es: 'Un profesor quiere cargar en Gemini el manuscrito inédito de su próximo artículo. ¿Qué es lo más prudente?', en: 'A professor wants to upload his next paper’s unpublished manuscript to Gemini. What is most prudent?' },
      o: [
        { t: { es: 'Cargarlo con su cuenta personal', en: 'Upload it with his personal account' }, why: { es: 'Pierde las protecciones de la cuenta institucional.', en: 'He loses the school account’s protections.' } },
        { ok: true, t: { es: 'Cuenta institucional y solo lo necesario', en: 'School account, only what’s needed' }, why: { es: 'Correcto: protección y minimización de datos.', en: 'Correct: protection and data minimization.' } },
        { t: { es: 'Compartirlo en un enlace público de Canvas', en: 'Share it via a public Canvas link' }, why: { es: 'Expone un trabajo inédito a cualquiera.', en: 'It exposes unpublished work to anyone.' } },
        { t: { es: 'Pedir a Gemini que lo publique por él', en: 'Ask Gemini to publish it for him' }, why: { es: 'Gemini no publica artículos; además viola la autoría.', en: 'Gemini doesn’t publish papers; it also breaches authorship.' } }
      ] },
    { d: 3,
      q: { es: '¿Qué enfoque mitiga mejor la conducta académica indebida con IA en un curso universitario?', en: 'Which approach best mitigates AI-related academic misconduct in a university course?' },
      o: [
        { t: { es: 'Usar un detector y sancionar si supera el 50 %', en: 'Use a detector and sanction above 50%' }, why: { es: 'Los detectores no son fiables como prueba única.', en: 'Detectors aren’t reliable as sole evidence.' } },
        { t: { es: 'Prohibir cualquier herramienta digital', en: 'Ban every digital tool' }, why: { es: 'Rara vez funciona y no educa.', en: 'It rarely works and doesn’t educate.' } },
        { ok: true, t: { es: 'Política clara y proceso visible', en: 'Clear policy and a visible process' }, why: { es: 'Correcto: reglas por tarea, borradores y defensa.', en: 'Correct: per-task rules, drafts and defense.' } },
        { t: { es: 'Pedir trabajos mucho más largos', en: 'Require much longer assignments' }, why: { es: 'La IA genera textos largos con facilidad.', en: 'AI easily generates long texts.' } }
      ] },
    { d: 3,
      q: { es: 'Gemini sugiere para tu artículo una referencia con autor real, revista real y DOI, pero el DOI abre otro trabajo. ¿Qué es?', en: 'Gemini suggests a reference for your paper with a real author, real journal and DOI, but the DOI opens another work. What is it?' },
      o: [
        { t: { es: 'Un error menor de formato APA', en: 'A minor APA formatting error' }, why: { es: 'Es más grave: la referencia puede no existir.', en: 'It’s more serious: the reference may not exist.' } },
        { ok: true, t: { es: 'Una probable alucinación', en: 'A likely hallucination' }, why: { es: 'Correcto: no la uses sin verificarla.', en: 'Correct: don’t use it without verifying it.' } },
        { t: { es: 'Un artículo retirado por la revista', en: 'A paper retracted by the journal' }, why: { es: 'No hay evidencia de eso; lo probable es que no exista.', en: 'There is no evidence of that; it likely doesn’t exist.' } },
        { t: { es: 'Una función de pago no activada', en: 'A paid feature not enabled' }, why: { es: 'No tiene relación con el plan.', en: 'It has nothing to do with the plan.' } }
      ] },
    { d: 3,
      q: { es: '¿Qué estrategia de alfabetización en IA es **menos** eficaz con estudiantes universitarios?', en: 'Which AI literacy strategy is **least** effective with university students?' },
      o: [
        { t: { es: 'Comparar respuestas de Gemini con fuentes académicas', en: 'Comparing Gemini answers with academic sources' }, why: { es: 'Es eficaz: desarrolla la verificación.', en: 'It works: it builds verification.' } },
        { t: { es: 'Llevar una bitácora de uso de la IA', en: 'Keeping an AI usage log' }, why: { es: 'Es eficaz: hace visible la metacognición.', en: 'It works: it makes metacognition visible.' } },
        { ok: true, t: { es: 'Prohibirla sin explicar por qué', en: 'Banning it without explaining why' }, why: { es: 'Correcto: no educa y es difícil de sostener.', en: 'Correct: it doesn’t educate and is hard to sustain.' } },
        { t: { es: 'Co-construir con el grupo las normas de uso', en: 'Co-building usage rules with the group' }, why: { es: 'Es eficaz: genera compromiso.', en: 'It works: it builds commitment.' } }
      ] },
    { d: 3,
      q: { es: 'Un comité quiere que la IA preseleccione postulantes a una beca. ¿Cuál es el principal dilema ético?', en: 'A committee wants AI to pre-screen scholarship applicants. What is the main ethical dilemma?' },
      o: [
        { t: { es: 'El costo de la licencia de la herramienta', en: 'The cost of the tool’s licence' }, why: { es: 'Es un tema administrativo, no el dilema central.', en: 'It’s an administrative issue, not the core dilemma.' } },
        { t: { es: 'Que el proceso termine demasiado rápido', en: 'That the process ends too quickly' }, why: { es: 'La velocidad no es el problema ético.', en: 'Speed isn’t the ethical problem.' } },
        { t: { es: 'Que los postulantes escriban mejor con IA', en: 'That applicants write better with AI' }, why: { es: 'No es el riesgo de la preselección.', en: 'It isn’t the pre-screening risk.' } },
        { ok: true, t: { es: 'Sesgo en una decisión de alto impacto', en: 'Bias in a high-impact decision' }, why: { es: 'Correcto: exige revisión humana y transparencia.', en: 'Correct: it requires human review and transparency.' } }
      ] },
    { d: 3,
      q: { es: '¿Qué plan aborda de forma **proactiva** el plagio al integrar Gemini en un trabajo final?', en: 'Which plan **proactively** addresses plagiarism when integrating Gemini into a final project?' },
      o: [
        { ok: true, t: { es: 'Política, borradores, declaración y defensa', en: 'Policy, drafts, disclosure and defense' }, why: { es: 'Correcto: cubre antes, durante y después.', en: 'Correct: it covers before, during and after.' } },
        { t: { es: 'Pasar todos los trabajos por un detector', en: 'Run every paper through a detector' }, why: { es: 'Es reactivo y poco fiable como prueba.', en: 'It’s reactive and unreliable as evidence.' } },
        { t: { es: 'Avisar que habrá sanciones severas', en: 'Warn there will be severe sanctions' }, why: { es: 'La amenaza sola no educa ni previene bien.', en: 'Threats alone don’t educate or prevent well.' } },
        { t: { es: 'Pedir el trabajo final escrito a mano', en: 'Require the final paper handwritten' }, why: { es: 'No forma en el uso responsable de la IA.', en: 'It doesn’t teach responsible AI use.' } }
      ] },
    { d: 3,
      q: { es: '¿En cuál de estas tareas académicas está **menos** justificado usar Gemini?', en: 'In which of these academic tasks is using Gemini **least** justified?' },
      o: [
        { t: { es: 'Idear títulos para una ponencia', en: 'Brainstorming titles for a talk' }, why: { es: 'Es de bajo riesgo y fácil de verificar.', en: 'It’s low-risk and easy to verify.' } },
        { t: { es: 'Reformatear una bibliografía ya verificada', en: 'Reformatting an already verified bibliography' }, why: { es: 'Es de bajo riesgo; revisas el resultado.', en: 'It’s low-risk; you check the result.' } },
        { ok: true, t: { es: 'Dictaminar un manuscrito confidencial', en: 'Reviewing a confidential manuscript' }, why: { es: 'Correcto: confidencialidad y juicio experto.', en: 'Correct: confidentiality and expert judgment.' } },
        { t: { es: 'Resumir tus propios apuntes de clase', en: 'Summarizing your own lecture notes' }, why: { es: 'Son tus materiales y puedes verificar.', en: 'They’re your materials and you can verify.' } }
      ] },
    { d: 3,
      q: { es: '¿Por qué la guía da importancia a la **metacognición** en el uso estudiantil de la IA?', en: 'Why does the guide stress **metacognition** in students’ AI use?' },
      o: [
        { t: { es: 'Para que usen la IA el mayor tiempo posible', en: 'So they use AI as much as possible' }, why: { es: 'La meta no es más uso, sino mejor uso.', en: 'The goal isn’t more use, but better use.' } },
        { t: { es: 'Para que escriban prompts más largos', en: 'So they write longer prompts' }, why: { es: 'La longitud no es metacognición.', en: 'Length isn’t metacognition.' } },
        { t: { es: 'Para que no necesiten a sus profesores', en: 'So they no longer need their professors' }, why: { es: 'El docente sigue siendo central.', en: 'The professor remains central.' } },
        { ok: true, t: { es: 'Para que noten cuándo la IA les quita aprendizaje', en: 'To notice when AI takes away learning' }, why: { es: 'Correcto: autoconciencia y pensamiento crítico.', en: 'Correct: self-awareness and critical thinking.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (dominio 3)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google for Education — Certificaciones (Gemini Certified Faculty)', url: 'https://edu.google.com/intl/ALL_us/learning-center/certifications/' },
    { t: 'Google for Education Help — Gemini Certifications FAQs', url: 'https://support.google.com/googleforeducation/answer/16561655?hl=en' }
  ]
};
