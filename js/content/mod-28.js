/* Módulo 28 · Diseñar cursos universitarios con Gemini (Faculty) */
GDC.MOD['28'] = {
  min: 16,
  intro: {
    es: 'Con PARTS, Canvas, Gems y el Studio ya sabes producir materiales. En la universidad el reto es diseñar cursos completos: sílabos, seminarios, evaluaciones formativas y sumativas y rutas diferenciadas para grupos grandes y diversos. Aquí verás cómo hacerlo con Gemini sin perder el criterio disciplinar.',
    en: 'With PARTS, Canvas, Gems and Studio you already know how to produce materials. At university the challenge is designing whole courses: syllabi, seminars, formative and summative assessments and differentiated paths for large, diverse groups. Here you will see how to do it with Gemini without losing disciplinary judgment.'
  },
  objetivos: [
    { es: 'Clasificar los puntos de integración de Gemini en la docencia universitaria.', en: 'Classify Gemini’s integration points in university teaching.' },
    { es: 'Construir prompts para contenido académico de una disciplina concreta.', en: 'Build prompts for academic content in a specific discipline.' },
    { es: 'Diseñar un Gem que automatice una tarea docente frecuente.', en: 'Design a Gem that automates a frequent teaching task.' }
  ],
  secciones: [
    {
      h: { es: 'Dónde encaja Gemini en tu curso', en: 'Where Gemini fits in your course' },
      b: [
        { p: { es: 'La guía Faculty propone clasificar los puntos de integración de Gemini en la docencia universitaria (objetivo 1.3.1):', en: 'The Faculty guide proposes classifying Gemini’s integration points in university teaching (objective 1.3.1):' } },
        { table: {
          head: [{ es: 'Punto de integración', en: 'Integration point' }, { es: 'Ejemplo universitario', en: 'University example' }],
          rows: [
            [{ es: 'Andamiar el desarrollo curricular', en: 'Scaffolding curriculum development' }, { es: 'Sílabo de 16 semanas alineado a competencias del perfil de egreso', en: '16-week syllabus aligned to graduate-profile competencies' }],
            [{ es: 'Aumentar el diseño de evaluaciones', en: 'Augmenting assessment design' }, { es: 'Rúbrica de un proyecto final y preguntas de un examen parcial', en: 'Final-project rubric and midterm exam questions' }],
            [{ es: 'Automatizar feedback personalizado', en: 'Automating personalized feedback' }, { es: 'Un Gem que comenta borradores con tu rúbrica', en: 'A Gem that comments on drafts using your rubric' }],
            [{ es: 'Facilitar comunicación compleja', en: 'Facilitating complex communication' }, { es: 'Explicar un cambio de evaluación a 120 estudiantes', en: 'Explaining an assessment change to 120 students' }],
            [{ es: 'Escalar la diferenciación', en: 'Scaling differentiation' }, { es: 'Rutas de refuerzo y de profundización para el mismo tema', en: 'Remedial and extension paths for the same topic' }]
          ]
        } }
      ]
    },
    {
      h: { es: 'Sílabos y seminarios con contexto disciplinar', en: 'Syllabi and seminars with disciplinary context' },
      b: [
        { p: { es: 'En educación superior, el contexto de la disciplina es la pieza que más cambia el resultado: nivel del curso, prerrequisitos, competencias, créditos y modalidad.', en: 'In higher education, the discipline’s context is the piece that most changes the result: course level, prerequisites, competencies, credits and format.' } },
        { compare: {
          bad: { t: { es: 'Hazme un sílabo de estadística.', en: 'Make me a statistics syllabus.' }, why: { es: 'No indica nivel, carrera, duración, competencias ni evaluación.', en: 'It states no level, programme, length, competencies or assessment.' } },
          good: { t: { es: 'Actúa como diseñador curricular universitario. Crea un sílabo de 16 semanas para «Estadística aplicada» (4 créditos, segundo año de Ingeniería, prerrequisito: Cálculo I). Incluye resultados de aprendizaje alineados a las competencias adjuntas, contenidos por semana, evaluación (40 % proyecto, 30 % parciales, 30 % prácticas) y bibliografía marcada con [VERIFICAR].', en: 'Act as a university curriculum designer. Create a 16-week syllabus for “Applied Statistics” (4 credits, second-year Engineering, prerequisite: Calculus I). Include learning outcomes aligned to the attached competencies, weekly content, assessment (40% project, 30% midterms, 30% practicals) and a bibliography marked [VERIFY].' },
                  why: { es: 'PARTS con contexto disciplinar completo y límites: el borrador sale casi listo para revisar.', en: 'PARTS with full disciplinary context and limits: the draft comes out nearly ready to review.' } }
        } },
        { prompt: { es: 'Diseña la estructura de un seminario de 90 minutos sobre [tema] para estudiantes de [año y carrera]: lectura previa, pregunta detonante, dinámica en grupos con roles, plenaria y cierre con una evaluación formativa breve. Indica tiempos y el producto de cada momento.', en: 'Design the structure of a 90-minute seminar on [topic] for [year and programme] students: pre-reading, opening question, group activity with roles, plenary and closing with a short formative assessment. State timings and each stage’s output.' },
          label: { es: '✦ Estructura de seminario', en: '✦ Seminar structure' } }
      ]
    },
    {
      h: { es: 'Evaluación y rutas diferenciadas', en: 'Assessment and differentiated paths' },
      b: [
        { list: [
          { es: '**Evaluación formativa:** pide en Canvas un quiz interactivo a partir de tus apuntes de clase.', en: '**Formative assessment:** ask Canvas for an interactive quiz from your lecture notes.' },
          { es: '**Evaluación sumativa:** con Gemini en Forms (plan de pago) puedes generarla a partir de un Doc o Slide del curso; revisa cada pregunta.', en: '**Summative assessment:** with Gemini in Forms (paid plan) you can generate it from a course Doc or Slide; review every question.' },
          { es: '**Rutas diferenciadas:** pide una ruta de refuerzo (con ejemplos resueltos) y una de profundización (con lecturas avanzadas) para el mismo resultado de aprendizaje.', en: '**Differentiated paths:** ask for a remedial path (with worked examples) and an extension path (with advanced readings) for the same learning outcome.' },
          { es: '**Recursos de estudio:** Video Overviews, guías de estudio y Mind Maps en Gemini Notebook para acercar textos complejos.', en: '**Study resources:** Video Overviews, study guides and Mind Maps in Gemini Notebook to bring complex texts closer.' }
        ] },
        { note: { es: 'La guía Faculty incluye «diseñar un recurso breve personalizado (una herramienta de evaluación formativa o un conjunto de rutas de aprendizaje diferenciadas) interactuando de forma iterativa con Gemini» (2.3.1).', en: 'The Faculty guide includes “design a short, customized instructional asset (a formative assessment tool, a set of differentiated learning paths) by interacting iteratively with Gemini” (2.3.1).' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Un Gem para tus tareas frecuentes', en: 'A Gem for your frequent tasks' },
      b: [
        { p: { es: 'La guía pide diseñar un Gem que automatice una tarea pedagógica frecuente, como **andamiar revisiones de literatura** de tus estudiantes o **redactar criterios de evaluación formativa** (2.3.3). Recuerda que los Gems conviven con los skills hasta su transición (módulo 14).', en: 'The guide asks you to design a Gem that automates a frequent teaching task, such as **scaffolding your students’ literature reviews** or **drafting formative assessment criteria** (2.3.3). Remember that Gems coexist with skills until the transition (module 14).' } },
        { prompt: { es: 'Eres un tutor de escritura académica para estudiantes de pregrado.\nTarea: cuando un estudiante pegue el borrador de su revisión de literatura, devuelve: 1) qué tan clara es su pregunta, 2) si compara fuentes o solo las resume, 3) dos preguntas para profundizar y 4) un siguiente paso concreto.\nLímites: no reescribas el texto por el estudiante; no pongas notas; si menciona una fuente, recuérdale verificarla.',
                    en: 'You are an academic writing tutor for undergraduates.\nTask: when a student pastes their literature review draft, return: 1) how clear their question is, 2) whether they compare sources or only summarize them, 3) two questions to go deeper and 4) one concrete next step.\nLimits: don’t rewrite the text for the student; don’t give grades; if they mention a source, remind them to verify it.' },
          label: { es: '✦ Instrucciones de un Gem «Tutor de revisión de literatura»', en: '✦ Instructions for a “Literature review tutor” Gem' } },
        { note: { es: 'Crea el sílabo de un curso que dictes con el prompt de esta sección. Luego pide una ruta de refuerzo para la semana más difícil y revisa que el resultado de aprendizaje no cambie.', en: 'Create the syllabus of a course you teach with this section’s prompt. Then ask for a remedial path for the hardest week and check the learning outcome doesn’t change.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Pedir un sílabo sin nivel, créditos ni competencias, y recibir algo genérico.', en: 'Asking for a syllabus without level, credits or competencies, and getting something generic.' },
    { es: 'Publicar una evaluación sumativa generada sin revisar cada pregunta y su clave.', en: 'Publishing a generated summative assessment without reviewing every question and its key.' },
    { es: 'Configurar un Gem que reescriba los trabajos de los estudiantes en lugar de guiarlos.', en: 'Setting up a Gem that rewrites students’ work instead of guiding them.' }
  ],
  ideas: [
    { es: 'Cinco puntos de integración: currículo, evaluación, feedback, comunicación y diferenciación.', en: 'Five integration points: curriculum, assessment, feedback, communication and differentiation.' },
    { es: 'En la universidad, el contexto disciplinar es la pieza clave del prompt.', en: 'At university, disciplinary context is the key piece of the prompt.' },
    { es: 'Un Gem bien diseñado guía al estudiante; no hace el trabajo por él.', en: 'A well-designed Gem guides the student; it doesn’t do the work for them.' }
  ],
  quiz: [
    { d: 1,
      q: { es: '«Un Gem que comenta los borradores de 80 estudiantes con tu rúbrica». ¿Qué punto de integración es?', en: '“A Gem that comments on 80 students’ drafts using your rubric.” Which integration point is it?' },
      o: [
        { t: { es: 'Facilitar comunicación compleja', en: 'Facilitating complex communication' }, why: { es: 'No es un comunicado; son comentarios sobre trabajos.', en: 'It isn’t a notice; it’s comments on work.' } },
        { ok: true, t: { es: 'Automatizar feedback personalizado', en: 'Automating personalized feedback' }, why: { es: 'Correcto: retroalimentación a escala con tu criterio.', en: 'Correct: feedback at scale with your criteria.' } },
        { t: { es: 'Andamiar el desarrollo curricular', en: 'Scaffolding curriculum development' }, why: { es: 'No diseña el currículo del curso.', en: 'It doesn’t design the course curriculum.' } },
        { t: { es: 'Escalar la diferenciación entre grupos', en: 'Scaling differentiation across groups' }, why: { es: 'No crea rutas distintas para el mismo objetivo.', en: 'It doesn’t create different paths for the same goal.' } }
      ] },
    { d: 2,
      q: { es: '¿Qué agrega más calidad a un prompt para un sílabo universitario?', en: 'What adds the most quality to a prompt for a university syllabus?' },
      o: [
        { t: { es: 'Pedir que sea lo más largo posible', en: 'Asking for it to be as long as possible' }, why: { es: 'La extensión no lo alinea a tu programa.', en: 'Length doesn’t align it to your programme.' } },
        { t: { es: 'Usar siempre el modelo más potente', en: 'Always using the most powerful model' }, why: { es: 'Sin contexto, el modelo no lo resuelve.', en: 'Without context, the model can’t solve it.' } },
        { ok: true, t: { es: 'Nivel, créditos y competencias', en: 'Level, credits and competencies' }, why: { es: 'Correcto: el contexto disciplinar define el resultado.', en: 'Correct: disciplinary context defines the result.' } },
        { t: { es: 'Pedirle que sea muy creativo', en: 'Asking it to be very creative' }, why: { es: 'La creatividad no reemplaza el contexto académico.', en: 'Creativity doesn’t replace academic context.' } }
      ] },
    { d: 2,
      q: { es: 'Quieres un Gem que ayude a tus estudiantes con sus revisiones de literatura. ¿Qué instrucción es esencial?', en: 'You want a Gem to help your students with their literature reviews. Which instruction is essential?' },
      o: [
        { t: { es: '«Reescribe el texto para que quede perfecto»', en: '“Rewrite the text so it’s perfect”' }, why: { es: 'Haría el trabajo por el estudiante.', en: 'It would do the student’s work.' } },
        { ok: true, t: { es: '«Guía con preguntas; no reescribas»', en: '“Guide with questions; don’t rewrite”' }, why: { es: 'Correcto: andamia sin sustituir la autoría.', en: 'Correct: it scaffolds without replacing authorship.' } },
        { t: { es: '«Pon una nota a cada borrador recibido»', en: '“Give a grade to every draft received”' }, why: { es: 'Calificar es una decisión docente.', en: 'Grading is a teacher’s decision.' } },
        { t: { es: '«Agrega fuentes para que sea más completo»', en: '“Add sources so it’s more complete”' }, why: { es: 'Puede añadir fuentes inventadas.', en: 'It may add invented sources.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Faculty exam guide (1.3.1, 2.1.2, 2.3.1, 2.3.3)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google — Ayuda de Gemini: Canvas en Gemini Apps', url: 'https://support.google.com/gemini/answer/16047321?hl=es' }
  ]
};
