/* Módulo 29 · Integridad, propiedad intelectual y el examen Faculty */
GDC.MOD['29'] = {
  min: 16,
  intro: {
    es: 'El dominio ético del Faculty retoma lo que viste en el módulo 25 (sesgo, alucinaciones, plagio, alfabetización en IA) y añade dos temas propios de la universidad: los **riesgos de propiedad intelectual** y la **conducta académica indebida** en trabajos de investigación. Cerramos con lo que debes saber del examen Faculty.',
    en: 'The Faculty ethics domain picks up what you saw in module 25 (bias, hallucinations, plagiarism, AI literacy) and adds two topics specific to university: **intellectual property risks** and **academic misconduct** in research work. We close with what you need to know about the Faculty exam.'
  },
  objetivos: [
    { es: 'Identificar riesgos de propiedad intelectual y de sobredependencia, y proponer mitigaciones.', en: 'Identify intellectual property and over-reliance risks, and propose mitigations.' },
    { es: 'Describir enfoques para mitigar la conducta académica indebida con IA.', en: 'Describe approaches to mitigating academic misconduct with AI.' },
    { es: 'Conocer la logística oficial del examen Gemini Certified Faculty.', en: 'Know the official logistics of the Gemini Certified Faculty exam.' }
  ],
  secciones: [
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
      h: { es: 'El examen Gemini Certified Faculty', en: 'The Gemini Certified Faculty exam' },
      b: [
        { table: {
          head: [{ es: 'Dato', en: 'Detail' }, { es: 'Valor', en: 'Value' }],
          rows: [
            [{ es: 'Para quién', en: 'For whom' }, { es: 'Profesores universitarios (educación superior)', en: 'University faculty (higher education)' }],
            [{ es: 'Costo y validez', en: 'Cost and validity' }, { es: 'Gratis; válida por 3 años (oficial)', en: 'Free; valid for 3 years (official)' }],
            [{ es: 'Formato', en: 'Format' }, { es: 'Opción múltiple, como todos los exámenes de Gemini (oficial)', en: 'Multiple choice, like all Gemini exams (official)' }],
            [{ es: 'Preparación oficial', en: 'Official preparation' }, { es: 'Curso «Get Started with Google AI in Higher Education» y la guía del examen', en: '“Get Started with Google AI in Higher Education” course and the exam guide' }],
            [{ es: 'Duración y número de preguntas', en: 'Duration and number of questions' }, { es: 'Google no lo publica; el simulacro del portal usa 120 min y 37 preguntas como aproximación', en: 'Google doesn’t publish it; the portal’s mock exam uses 120 min and 37 questions as an approximation' }],
            [{ es: 'Registro', en: 'Registration' }, { es: 'educertifications.google, sección Faculty', en: 'educertifications.google, Faculty section' }]
          ]
        } },
        { p: { es: 'Los tres dominios son: **1. Comprender la IA generativa y Gemini en la academia**, **2. Aprovechar Gemini en aplicaciones académicas** y **3. Uso ético y responsable de la IA en la academia**. Esta parte de la ruta, junto con los módulos 01 a 25, cubre sus objetivos (código F en cada módulo).', en: 'The three domains are: **1. Understanding Generative AI & Gemini in Academia**, **2. Harnessing Gemini for Scholarly Applications** and **3. Ethical & Responsible AI Use in Academia**. This part of the path, together with modules 01 to 25, covers their objectives (F code on each module).' } },
        { note: { es: 'Faculty **no** es un nivel superior del Educator: son certificaciones paralelas. Si enseñas en la universidad, Faculty es la que más te corresponde; puedes rendir ambas.', en: 'Faculty is **not** a higher level of the Educator: they are parallel certifications. If you teach at university, Faculty fits you best; you can take both.' }, kind: 'info' },
        { note: { es: 'Haz el simulacro Faculty del portal en modo ES y luego en EN. Anota los temas donde fallaste y vuelve a los módulos 27 a 29.', en: 'Take the portal’s Faculty mock exam in ES mode and then in EN. Note the topics where you failed and go back to modules 27 to 29.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Creer que, como los datos no entrenan modelos, se puede cargar cualquier material con derechos de autor.', en: 'Believing that, since data doesn’t train models, any copyrighted material can be uploaded.' },
    { es: 'Sancionar a un estudiante solo por el resultado de un detector de IA.', en: 'Sanctioning a student based only on an AI detector’s result.' },
    { es: 'Pensar que hace falta aprobar el Educator antes de rendir el Faculty.', en: 'Thinking you must pass the Educator before taking the Faculty exam.' }
  ],
  ideas: [
    { es: 'La protección de datos no resuelve la propiedad intelectual: carga solo lo necesario y respeta licencias.', en: 'Data protection doesn’t settle intellectual property: upload only what’s needed and respect licences.' },
    { es: 'Contra la conducta indebida: política clara, proceso visible y tareas situadas.', en: 'Against misconduct: clear policy, visible process and situated tasks.' },
    { es: 'Faculty: gratis, 3 años, opción múltiple, para profesores universitarios.', en: 'Faculty: free, 3 years, multiple choice, for university faculty.' }
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
    { d: 'S',
      q: { es: '¿Qué afirmación sobre el Gemini Certified Faculty es correcta?', en: 'Which statement about the Gemini Certified Faculty is correct?' },
      o: [
        { t: { es: 'Requiere aprobar antes el Educator', en: 'It requires passing the Educator first' }, why: { es: 'La guía no indica ese requisito.', en: 'The guide states no such requirement.' } },
        { ok: true, t: { es: 'Es gratis y vale por 3 años', en: 'It’s free and valid for 3 years' }, why: { es: 'Correcto: según la página oficial de certificaciones.', en: 'Correct: per the official certifications page.' } },
        { t: { es: 'Es solo para estudiantes de posgrado', en: 'It’s only for graduate students' }, why: { es: 'Es para profesores universitarios.', en: 'It’s for university faculty.' } },
        { t: { es: 'Se rinde de forma presencial', en: 'It’s taken in person' }, why: { es: 'Se rinde en línea, como los demás exámenes de Gemini.', en: 'It’s taken online, like the other Gemini exams.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (dominio 3)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google for Education — Certificaciones (Gemini Certified Faculty)', url: 'https://edu.google.com/intl/ALL_us/learning-center/certifications/' },
    { t: 'Google Blog — Gemini certifications for education', url: 'https://blog.google/products-and-platforms/products/education/gemini-certifications-education/' }
  ]
};
