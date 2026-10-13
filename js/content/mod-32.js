/* Módulo 32 · El examen Gemini Certified Faculty: formato, inscripción y estrategia */
GDC.MOD['32'] = {
  min: 20,
  intro: {
    es: 'Llegaste al final de la ruta Faculty. Este módulo reúne **todo lo práctico**: qué es oficial y qué no sobre el examen, cuántas preguntas esperar, los **enlaces directos** para inscribirte y prepararte, el paso a paso del registro y una estrategia para resolver preguntas de escenario. Termina con una lista de control por dominio para saber si estás listo.',
    en: 'You’ve reached the end of the Faculty path. This module gathers **everything practical**: what is and isn’t official about the exam, how many questions to expect, the **direct links** to register and prepare, the step-by-step registration and a strategy for scenario questions. It ends with a checklist per domain so you know whether you’re ready.'
  },
  objetivos: [
    { es: 'Conocer el formato oficial del examen Faculty y distinguirlo de los datos no oficiales.', en: 'Know the official Faculty exam format and tell it apart from unofficial figures.' },
    { es: 'Inscribirte paso a paso con los enlaces oficiales.', en: 'Register step by step using the official links.' },
    { es: 'Aplicar una estrategia para las preguntas de escenario y gestionar el tiempo.', en: 'Apply a strategy for scenario questions and manage time.' },
    { es: 'Revisar los 36 objetivos de la guía con una lista de control por dominio.', en: 'Review the guide’s 36 objectives with a checklist per domain.' }
  ],
  secciones: [
    {
      h: { es: 'Ficha del examen: lo oficial y lo reportado', en: 'Exam fact sheet: official and reported' },
      b: [
        { table: {
          head: [{ es: 'Dato', en: 'Detail' }, { es: 'Valor', en: 'Value' }, { es: '¿Oficial?', en: 'Official?' }],
          rows: [
            [{ es: 'Para quién', en: 'For whom' }, { es: 'Profesores universitarios (educación superior)', en: 'University faculty (higher education)' }, { es: 'Sí, página de certificaciones', en: 'Yes, certifications page' }],
            [{ es: 'Costo', en: 'Cost' }, { es: 'Gratis', en: 'Free' }, { es: 'Sí', en: 'Yes' }],
            [{ es: 'Validez', en: 'Validity' }, { es: '3 años', en: '3 years' }, { es: 'Sí', en: 'Yes' }],
            [{ es: 'Formato', en: 'Format' }, { es: 'Preguntas de opción múltiple, en línea', en: 'Multiple-choice questions, online' }, { es: 'Sí (FAQ de Gemini)', en: 'Yes (Gemini FAQ)' }],
            [{ es: 'Tiempo', en: 'Time' }, { es: '**2 horas** desde que pulsas TAKE EXAM', en: '**2 hours** from when you click TAKE EXAM' }, { es: 'Sí (FAQ de Gemini)', en: 'Yes (Gemini FAQ)' }],
            [{ es: 'Plazo tras registrarte', en: 'Window after registering' }, { es: '**14 días** para lanzar y completar el examen', en: '**14 days** to launch and complete the exam' }, { es: 'Sí (FAQ de Gemini)', en: 'Yes (Gemini FAQ)' }],
            [{ es: 'Si no apruebas', en: 'If you don’t pass' }, { es: 'Puedes volver a rendirlo **8 días** después', en: 'You can retake it **8 days** later' }, { es: 'Sí (FAQ de Gemini)', en: 'Yes (Gemini FAQ)' }],
            [{ es: 'Requisitos previos', en: 'Prerequisites' }, { es: 'Ninguno formal; no hay niveles', en: 'None formal; there are no levels' }, { es: 'Sí (FAQ de Gemini)', en: 'Yes (Gemini FAQ)' }],
            [{ es: 'Número de preguntas', en: 'Number of questions' }, { es: '**Alrededor de 37** (algunos reportan 35)', en: '**Around 37** (some report 35)' }, { es: '**No:** lo reportan quienes rindieron los exámenes de Gemini', en: '**No:** reported by people who took the Gemini exams' }],
            [{ es: 'Puntaje para aprobar', en: 'Passing score' }, { es: 'Alrededor de **80 %** (≈ 30 de 37)', en: 'Around **80%** (≈ 30 of 37)' }, { es: '**No:** estimación reportada', en: '**No:** reported estimate' }]
          ]
        } },
        { p: { es: '**¿Cuántas preguntas tiene?** Google no publica el número exacto para el Faculty. Quienes han rendido los exámenes de Gemini para docentes reportan **37 preguntas de opción múltiple**, la mayoría en formato de **caso o escenario**. Por eso el simulacro Faculty de este portal usa **37 preguntas en 120 minutos** con un aprobado estimado de **80 %**: si te acostumbras a ese ritmo, llegarás con margen.', en: '**How many questions are there?** Google doesn’t publish the exact number for the Faculty exam. People who have taken the Gemini exams for educators report **37 multiple-choice questions**, mostly in **case or scenario** format. That’s why this portal’s Faculty mock exam uses **37 questions in 120 minutes** with an estimated pass mark of **80%**: if you get used to that pace, you’ll arrive with room to spare.' } },
        { note: { es: 'La guía marca tres objetivos como **PAID feature** (2.1.5 Gmail/Docs, 2.1.6 Forms y 2.3.4 Vids). Según las FAQ de Google para los exámenes de Gemini, las preguntas sobre funciones de pago se incluyen con fines de aprendizaje y **no puntúan**.', en: 'The guide marks three objectives as **PAID feature** (2.1.5 Gmail/Docs, 2.1.6 Forms and 2.3.4 Vids). According to Google’s FAQ for the Gemini exams, questions about paid features are included for learning purposes and are **not scored**.' }, kind: 'exam' },
        { note: { es: 'Los exámenes de Gemini están disponibles en varios idiomas, incluido **español (Latinoamérica)**. Si eliges inglés, practica en este portal con el modo **EN** o **EN+ES**: es la misma pregunta traducida.', en: 'The Gemini exams are available in several languages, including **Spanish (Latin America)**. If you choose English, practise in this portal with **EN** or **EN+ES** mode: it’s the same question translated.' }, kind: 'info' }
      ]
    },
    {
      h: { es: 'Enlaces oficiales para ingresar directo', en: 'Official links to go straight in' },
      b: [
        { p: { es: 'Guarda estos enlaces. Todos son de Google y se abren en una pestaña nueva:', en: 'Save these links. They are all Google’s and open in a new tab:' } },
        { links: [
          { t: { es: 'Registro de certificaciones (Launchpad)', en: 'Certification registration (Launchpad)' }, d: { es: 'Punto de partida oficial: busca la sección Gemini y pulsa «Register».', en: 'Official starting point: find the Gemini section and click “Register”.' }, url: 'https://educertifications.google/register' },
          { t: { es: 'Registro directo: Gemini Certified Faculty', en: 'Direct registration: Gemini Certified Faculty' }, d: { es: 'Enlace de inscripción del examen Faculty que publica Google.', en: 'Faculty exam registration link published by Google.' }, url: 'https://educertifications.google/registration/6' },
          { t: { es: 'Guía oficial del examen Faculty (PDF)', en: 'Official Faculty exam guide (PDF)' }, d: { es: 'Los tres dominios y sus 36 objetivos.', en: 'The three domains and their 36 objectives.' }, url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
          { t: { es: 'Curso: Get Started with Google AI in Higher Education', en: 'Course: Get Started with Google AI in Higher Education' }, d: { es: 'Curso gratuito de preparación recomendado para Faculty.', en: 'Free preparation course recommended for Faculty.' }, url: 'https://edu.exceedlms.com/student/path/1729146-get-started-with-google-ai-in-higher-education?locale=en' },
          { t: { es: 'Curso: Generative AI for Educators', en: 'Course: Generative AI for Educators' }, d: { es: 'El segundo curso que menciona la guía Faculty.', en: 'The second course the Faculty guide mentions.' }, url: 'https://grow.google/ai-for-educators/' },
          { t: { es: 'Página de certificaciones de Google for Education', en: 'Google for Education certifications page' }, d: { es: 'Educator, Faculty y Student: requisitos, validez y cursos.', en: 'Educator, Faculty and Student: requirements, validity and courses.' }, url: 'https://edu.google.com/intl/ALL_us/learning-center/certifications/' },
          { t: { es: 'Preguntas frecuentes de las certificaciones Gemini', en: 'Gemini certifications FAQ' }, d: { es: 'Tiempo, plazos, reintentos, idiomas y certificado.', en: 'Time, windows, retakes, languages and certificate.' }, url: 'https://support.google.com/googleforeducation/answer/16561655?hl=es' }
        ] }
      ]
    },
    {
      h: { es: 'Inscripción paso a paso', en: 'Registration step by step' },
      b: [
        { steps: [
          { es: '**Crea tu cuenta o inicia sesión en el Learning Center** (edu.exceedlms.com) **antes** de registrarte. Usa el mismo correo en todos los pasos.', en: '**Create an account or sign in to the Learning Center** (edu.exceedlms.com) **before** registering. Use the same email in every step.' },
          { es: 'Entra a **educertifications.google/register**, baja a la sección **Gemini** y elige **Gemini Certified Faculty** (o usa el enlace de registro directo).', en: 'Go to **educertifications.google/register**, scroll to the **Gemini** section and choose **Gemini Certified Faculty** (or use the direct registration link).' },
          { es: 'Pulsa **Register**. Si tu cuenta institucional no te deja acceder, consulta al administrador de tu dominio o usa otra cuenta de Google.', en: 'Click **Register**. If your institutional account can’t access it, ask your domain administrator or use another Google account.' },
          { es: 'Tienes **14 días** para lanzar el examen. Cuando estés listo, pulsa **TAKE EXAM**: desde ese momento corren las **2 horas**.', en: 'You have **14 days** to launch the exam. When you’re ready, click **TAKE EXAM**: the **2 hours** start from that moment.' },
          { es: 'Al aprobar, recibes el certificado por correo (revisa spam) y también lo encuentras en **Accredible**.', en: 'When you pass, you receive the certificate by email (check spam) and can also find it on **Accredible**.' },
          { es: 'Si no apruebas, podrás volver a intentarlo **8 días** después. Usa ese tiempo para repasar los dominios donde fallaste.', en: 'If you don’t pass, you can try again **8 days** later. Use that time to review the domains where you failed.' }
        ] },
        { note: { es: 'Rinde el examen en un lugar tranquilo, con buena conexión y sin interrupciones: si se acaban las 2 horas sin terminar, el intento cuenta como no aprobado.', en: 'Take the exam somewhere quiet, with a good connection and no interruptions: if the 2 hours run out before you finish, the attempt counts as a fail.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Cómo se reparten los objetivos', en: 'How the objectives are distributed' },
      b: [
        { table: {
          head: [{ es: 'Dominio', en: 'Domain' }, { es: 'Niveles de Bloom', en: 'Bloom levels' }, { es: 'Objetivos', en: 'Objectives' }, { es: 'Módulos para repasar', en: 'Modules to review' }],
          rows: [
            [{ es: '1. Comprender la IA generativa y Gemini en la academia', en: '1. Understanding Generative AI & Gemini in Academia' }, { es: 'Recordar, comprender, aplicar', en: 'Remember, understand, apply' }, { es: '11', en: '11' }, { es: '27, 29 (y 01-05, 16, 24)', en: '27, 29 (and 01-05, 16, 24)' }],
            [{ es: '2. Aprovechar Gemini en aplicaciones académicas', en: '2. Harnessing Gemini for Scholarly Applications' }, { es: 'Aplicar, analizar, crear', en: 'Apply, analyze, create' }, { es: '13 (3 de pago)', en: '13 (3 paid)' }, { es: '28, 29, 30 (y 06-14, 20-22)', en: '28, 29, 30 (and 06-14, 20-22)' }],
            [{ es: '3. Uso ético y responsable de la IA en la academia', en: '3. Ethical & Responsible AI Use in Academia' }, { es: 'Comprender, analizar, evaluar, crear', en: 'Understand, analyze, evaluate, create' }, { es: '12', en: '12' }, { es: '31 (y 05, 25)', en: '31 (and 05, 25)' }]
          ]
        } },
        { p: { es: 'Son **36 objetivos** en total, una cifra muy cercana a las ~37 preguntas reportadas. Google no confirma cómo se distribuyen las preguntas, pero estudiar **cada objetivo** de la guía es la forma más segura de no dejar huecos. El dominio 2 es el más extenso y el dominio 3 concentra los objetivos de nivel más alto (evaluar y crear).', en: 'There are **36 objectives** in total, very close to the ~37 reported questions. Google doesn’t confirm how questions are distributed, but studying **every objective** in the guide is the safest way to leave no gaps. Domain 2 is the largest and domain 3 holds the highest-level objectives (evaluate and create).' } }
      ]
    },
    {
      h: { es: 'Estrategia para preguntas de escenario', en: 'Strategy for scenario questions' },
      b: [
        { flow: [
          { es: 'Lee el escenario: ¿quién, qué meta, qué restricción?', en: 'Read the scenario: who, what goal, what constraint?' },
          { es: 'Ubica la palabra clave: «mejor», «primero», «más apropiado»', en: 'Find the keyword: “best”, “first”, “most appropriate”' },
          { es: 'Descarta lo que reemplaza al docente o arriesga datos', en: 'Rule out whatever replaces the professor or risks data' },
          { es: 'Elige la opción que verifica y conserva tu criterio', en: 'Pick the option that verifies and keeps your judgment' }
        ] },
        { table: {
          head: [{ es: 'Suele ser la respuesta correcta…', en: 'Usually the right answer…' }, { es: 'Suele ser una trampa…', en: 'Usually a trap…' }],
          rows: [
            [{ es: 'Verificar en la fuente original', en: 'Verifying in the original source' }, { es: 'Confiar porque «suena seguro» o el autor es famoso', en: 'Trusting because it “sounds confident” or the author is famous' }],
            [{ es: 'Usar la cuenta institucional y cargar solo lo necesario', en: 'Using the institutional account and uploading only what’s needed' }, { es: 'Usar la cuenta personal o un enlace público', en: 'Using a personal account or a public link' }],
            [{ es: 'Dar feedback concreto e iterar', en: 'Giving concrete feedback and iterating' }, { es: 'Aceptar el primer borrador o empezar de cero', en: 'Accepting the first draft or starting over' }],
            [{ es: 'La herramienta que encaja con el objetivo (tus fuentes → Notebook)', en: 'The tool that fits the goal (your sources → Notebook)' }, { es: 'La herramienta «más potente» sin importar la tarea', en: 'The “most powerful” tool regardless of the task' }],
            [{ es: 'Política clara, proceso visible y alfabetización en IA', en: 'Clear policy, visible process and AI literacy' }, { es: 'Prohibir todo o sancionar solo con detectores', en: 'Banning everything or sanctioning with detectors alone' }]
          ]
        } },
        { p: { es: '**Tiempo:** 2 horas para ~37 preguntas son unos **3 minutos por pregunta**. Responde primero las que sabes, marca las dudosas y vuelve a ellas al final. No dejes ninguna en blanco.', en: '**Time:** 2 hours for ~37 questions is about **3 minutes per question**. Answer the ones you know first, flag the doubtful ones and come back to them at the end. Don’t leave any blank.' } }
      ]
    },
    {
      h: { es: 'Lista de control final y plan de dos semanas', en: 'Final checklist and two-week plan' },
      b: [
        { list: [
          { es: '**Dominio 1:** ¿Puedes definir GenAI, LLM y prompting? ¿Nombrar las 7 integraciones (Docs, Gmail, Classroom, Meet, Slides, Sheets, Vids)? ¿Elegir entre Notebook, Deep Research, Canvas, Gems, Veo e Imagen? ¿Explicar aumentar vs. reemplazar y la privacidad en Workspace for Education?', en: '**Domain 1:** Can you define GenAI, LLM and prompting? Name the 7 integrations (Docs, Gmail, Classroom, Meet, Slides, Sheets, Vids)? Choose between Notebook, Deep Research, Canvas, Gems, Veo and Imagen? Explain augment vs. replace and privacy in Workspace for Education?' },
          { es: '**Dominio 2:** ¿Sabes dónde se inicia cada herramienta? ¿Escribir un prompt PARTS para una rúbrica o un seminario? ¿Fundamentar con fuentes? ¿Refinar una salida? ¿Evaluar Audio/Video Overviews y Mind Maps? ¿Diseñar y desplegar un Gem?', en: '**Domain 2:** Do you know where each tool starts? Write a PARTS prompt for a rubric or seminar? Ground with sources? Refine an output? Evaluate Audio/Video Overviews and Mind Maps? Design and deploy a Gem?' },
          { es: '**Dominio 3:** ¿Reconoces una alucinación académica? ¿Riesgos de propiedad intelectual y sobredependencia? ¿Un plan contra plagio? ¿Dilemas éticos de alto impacto? ¿Estrategias de alfabetización en IA y metacognición?', en: '**Domain 3:** Can you spot an academic hallucination? Intellectual property and over-reliance risks? A plan against plagiarism? High-impact ethical dilemmas? AI literacy and metacognition strategies?' }
        ] },
        { table: {
          head: [{ es: 'Días', en: 'Days' }, { es: 'Qué hacer', en: 'What to do' }],
          rows: [
            [{ es: '1-4', en: '1-4' }, { es: 'Módulos 27 a 31 y sus mini quizzes; anota tus dudas', en: 'Modules 27 to 31 and their mini quizzes; note your doubts' }],
            [{ es: '5-7', en: '5-7' }, { es: 'Práctica con el filtro «Solo preguntas de nivel universitario (Faculty)»', en: 'Practice with the “University-level questions only (Faculty)” filter' }],
            [{ es: '8', en: '8' }, { es: 'Primer simulacro Faculty (37 preguntas, 120 min) en modo ES', en: 'First Faculty mock exam (37 questions, 120 min) in ES mode' }],
            [{ es: '9-12', en: '9-12' }, { es: 'Repasa los temas débiles en Progreso y haz los labs de Gemini Notebook y Gems', en: 'Review weak topics in Progress and do the Gemini Notebook and Gems labs' }],
            [{ es: '13', en: '13' }, { es: 'Segundo simulacro, en el idioma en que rendirás el examen', en: 'Second mock exam, in the language you’ll take the exam in' }],
            [{ es: '14', en: '14' }, { es: 'Repaso ligero del glosario y regístrate cuando superes el 85 % en el simulacro', en: 'Light glossary review and register once you score above 85% in the mock exam' }]
          ]
        } },
        { note: { es: 'Haz ahora el **simulacro Gemini Certified Faculty** del portal (menú Simulacros). Al terminar, revisa cada explicación, incluso las que acertaste: así fijas el razonamiento, no solo la respuesta.', en: 'Take the portal’s **Gemini Certified Faculty mock exam** now (Mock exams menu). When you finish, review every explanation, even the ones you got right: that way you fix the reasoning, not just the answer.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Tomar como oficiales el número de preguntas y el puntaje de aprobación: son datos reportados, no publicados por Google.', en: 'Treating the number of questions and the passing score as official: they are reported figures, not published by Google.' },
    { es: 'Registrarse con un correo distinto al del Learning Center y luego no poder abrir el examen.', en: 'Registering with an email different from the Learning Center one and then being unable to open the exam.' },
    { es: 'Pulsar TAKE EXAM sin tener 2 horas libres: el tiempo corre desde ese momento.', en: 'Clicking TAKE EXAM without 2 free hours: the clock starts at that moment.' },
    { es: 'Pensar que hace falta aprobar el Educator antes de rendir el Faculty.', en: 'Thinking you must pass the Educator before taking the Faculty exam.' }
  ],
  ideas: [
    { es: 'Oficial: gratis, 3 años, opción múltiple, 2 horas, 14 días para lanzarlo y reintento a los 8 días.', en: 'Official: free, 3 years, multiple choice, 2 hours, 14 days to launch it and retake after 8 days.' },
    { es: 'Reportado: ~37 preguntas de escenario y ~80 % para aprobar.', en: 'Reported: ~37 scenario questions and ~80% to pass.' },
    { es: 'Regístrate en educertifications.google/register con el mismo correo del Learning Center.', en: 'Register at educertifications.google/register with the same email as the Learning Center.' },
    { es: '36 objetivos en 3 dominios: estudia cada uno con la guía oficial.', en: '36 objectives in 3 domains: study each one with the official guide.' },
    { es: 'En escenarios: verifica, protege datos, itera y conserva tu criterio docente.', en: 'In scenarios: verify, protect data, iterate and keep your professional judgment.' }
  ],
  quiz: [
    { d: 'S',
      q: { es: '¿Cuánto tiempo tienes para completar el examen una vez que pulsas TAKE EXAM?', en: 'How long do you have to complete the exam once you click TAKE EXAM?' },
      o: [
        { t: { es: '30 minutos, como un quiz', en: '30 minutes, like a quiz' }, why: { es: 'Es mucho menos que el tiempo oficial.', en: 'It’s far less than the official time.' } },
        { ok: true, t: { es: '2 horas', en: '2 hours' }, why: { es: 'Correcto: según las FAQ de Gemini.', en: 'Correct: per the Gemini FAQ.' } },
        { t: { es: '14 días', en: '14 days' }, why: { es: 'Ese es el plazo para lanzarlo tras registrarte.', en: 'That’s the window to launch it after registering.' } },
        { t: { es: 'Sin límite de tiempo', en: 'No time limit' }, why: { es: 'Hay un límite oficial de 2 horas.', en: 'There is an official 2-hour limit.' } }
      ] },
    { d: 'S',
      q: { es: '¿Qué afirmación sobre el **número de preguntas** del Faculty es correcta?', en: 'Which statement about the Faculty exam’s **number of questions** is correct?' },
      o: [
        { t: { es: 'Google publica que son exactamente 50', en: 'Google publishes that there are exactly 50' }, why: { es: 'Google no publica el número.', en: 'Google doesn’t publish the number.' } },
        { t: { es: 'Son 10 preguntas abiertas de desarrollo', en: 'They are 10 open essay questions' }, why: { es: 'El formato oficial es de opción múltiple.', en: 'The official format is multiple choice.' } },
        { ok: true, t: { es: 'No es oficial; se reportan unas 37', en: 'It isn’t official; about 37 are reported' }, why: { es: 'Correcto: dato reportado por quienes lo rindieron.', en: 'Correct: reported by people who took it.' } },
        { t: { es: 'Cambia según la universidad del docente', en: 'It depends on the professor’s university' }, why: { es: 'El examen es el mismo para todos.', en: 'The exam is the same for everyone.' } }
      ] },
    { d: 'S',
      q: { es: 'Te registraste hace 20 días y no lanzaste el examen. ¿Qué pasa?', en: 'You registered 20 days ago and didn’t launch the exam. What happens?' },
      o: [
        { t: { es: 'Puedes lanzarlo cuando quieras', en: 'You can launch it whenever you want' }, why: { es: 'El plazo es de 14 días.', en: 'The window is 14 days.' } },
        { t: { es: 'Pierdes la certificación Educator', en: 'You lose the Educator certification' }, why: { es: 'Son certificaciones independientes.', en: 'They are independent certifications.' } },
        { t: { es: 'Se aprueba automáticamente', en: 'It’s passed automatically' }, why: { es: 'Nunca se aprueba sin rendirlo.', en: 'It’s never passed without taking it.' } },
        { ok: true, t: { es: 'Debes registrarte de nuevo', en: 'You must register again' }, why: { es: 'Correcto: pasaron los 14 días.', en: 'Correct: the 14 days have passed.' } }
      ] },
    { d: 'S',
      q: { es: 'No aprobaste el examen. ¿Cuándo puedes volver a intentarlo?', en: 'You didn’t pass the exam. When can you try again?' },
      o: [
        { ok: true, t: { es: '8 días después del intento', en: '8 days after the attempt' }, why: { es: 'Correcto: según las FAQ de Gemini.', en: 'Correct: per the Gemini FAQ.' } },
        { t: { es: 'Al día siguiente, sin espera', en: 'The next day, with no wait' }, why: { es: 'Hay un periodo de espera.', en: 'There is a waiting period.' } },
        { t: { es: 'Solo después de un año', en: 'Only after a year' }, why: { es: 'La espera es mucho menor.', en: 'The wait is much shorter.' } },
        { t: { es: 'Nunca: solo hay un intento', en: 'Never: there’s only one attempt' }, why: { es: 'Se permiten reintentos.', en: 'Retakes are allowed.' } }
      ] },
    { d: 'S',
      q: { es: '¿Qué conviene hacer **antes** de registrarte en educertifications.google?', en: 'What should you do **before** registering at educertifications.google?' },
      o: [
        { t: { es: 'Aprobar el Gemini Certified Educator', en: 'Pass the Gemini Certified Educator' }, why: { es: 'No es requisito del Faculty.', en: 'It isn’t a Faculty prerequisite.' } },
        { ok: true, t: { es: 'Entrar al Learning Center con tu correo', en: 'Sign in to the Learning Center' }, why: { es: 'Correcto: usa el mismo correo en ambos.', en: 'Correct: use the same email on both.' } },
        { t: { es: 'Contratar Google AI Pro for Education', en: 'Buy Google AI Pro for Education' }, why: { es: 'El examen es gratis y se centra en funciones gratuitas.', en: 'The exam is free and focuses on free features.' } },
        { t: { es: 'Pedir permiso a Google por correo', en: 'Ask Google for permission by email' }, why: { es: 'No hace falta ningún permiso.', en: 'No permission is needed.' } }
      ] },
    { d: 'S',
      q: { es: 'Una pregunta trata sobre Gemini en Forms, marcado como **PAID feature**. ¿Qué indican las FAQ de Google?', en: 'A question is about Gemini in Forms, marked as a **PAID feature**. What does Google’s FAQ say?' },
      o: [
        { t: { es: 'Vale el doble que las demás', en: 'It’s worth double the others' }, why: { es: 'No puntúa.', en: 'It isn’t scored.' } },
        { t: { es: 'Debes saltarla obligatoriamente', en: 'You must skip it' }, why: { es: 'Puedes responderla; solo no puntúa.', en: 'You can answer it; it just isn’t scored.' } },
        { ok: true, t: { es: 'Es para aprender y no puntúa', en: 'It’s for learning and isn’t scored' }, why: { es: 'Correcto: no afecta el resultado.', en: 'Correct: it doesn’t affect the result.' } },
        { t: { es: 'Anula el examen si no tienes el plan', en: 'It voids the exam if you lack the plan' }, why: { es: 'No anula nada.', en: 'It voids nothing.' } }
      ] },
    { d: 'S',
      q: { es: 'Con unas 37 preguntas en 2 horas, ¿cuál es la mejor gestión del tiempo?', en: 'With about 37 questions in 2 hours, what is the best time management?' },
      o: [
        { t: { es: 'Dedicar 10 minutos a cada pregunta', en: 'Spend 10 minutes on each question' }, why: { es: 'No alcanzaría el tiempo.', en: 'You’d run out of time.' } },
        { t: { es: 'Dejar en blanco las difíciles', en: 'Leave the hard ones blank' }, why: { es: 'Una respuesta en blanco nunca suma.', en: 'A blank answer never scores.' } },
        { t: { es: 'Responder todo en 20 minutos y salir', en: 'Answer everything in 20 minutes and leave' }, why: { es: 'Desaprovecha el tiempo para pensar escenarios.', en: 'It wastes time to think through scenarios.' } },
        { ok: true, t: { es: '~3 min por pregunta y marcar dudas', en: '~3 min per question, flagging doubts' }, why: { es: 'Correcto: y vuelves a las dudosas al final.', en: 'Correct: and come back to the doubtful ones at the end.' } }
      ] },
    { d: 'S',
      q: { es: 'En una pregunta de escenario dudas entre dos opciones. ¿Cuál suele ser la correcta?', en: 'In a scenario question you hesitate between two options. Which is usually correct?' },
      o: [
        { ok: true, t: { es: 'La que verifica y conserva tu criterio', en: 'The one that verifies and keeps your judgment' }, why: { es: 'Correcto: es el patrón de la guía.', en: 'Correct: it’s the guide’s pattern.' } },
        { t: { es: 'La que automatiza todo sin revisión', en: 'The one that automates everything unreviewed' }, why: { es: 'Reemplazar al docente suele ser la trampa.', en: 'Replacing the professor is usually the trap.' } },
        { t: { es: 'La que usa la herramienta más nueva', en: 'The one using the newest tool' }, why: { es: 'Lo nuevo no siempre encaja con la tarea.', en: 'Newest doesn’t always fit the task.' } },
        { t: { es: 'La opción con el texto más largo', en: 'The option with the longest text' }, why: { es: 'La longitud no indica la respuesta.', en: 'Length doesn’t indicate the answer.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Registro de certificaciones (educertifications.google/register)', url: 'https://educertifications.google/register' },
    { t: 'Google for Education — Gemini Certified Faculty exam guide (PDF)', url: 'https://services.google.com/fh/files/misc/gemini_certified_faculty_exam_guide.pdf' },
    { t: 'Google for Education Help — Gemini Certifications FAQs', url: 'https://support.google.com/googleforeducation/answer/16561655?hl=en' },
    { t: 'Google for Education — Certificaciones (Gemini Certified Faculty)', url: 'https://edu.google.com/intl/ALL_us/learning-center/certifications/' },
    { t: 'Google Blog — Gemini certifications for education', url: 'https://blog.google/products-and-platforms/products/education/gemini-certifications-education/' }
  ]
};
