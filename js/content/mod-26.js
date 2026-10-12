/* Módulo 26 · Los exámenes Educator y Student: estrategia y simulacros */
GDC.MOD['26'] = {
  min: 12,
  intro: {
    es: 'Llegaste al final de la ruta. Este módulo reúne lo que necesitas saber para presentarte a las certificaciones de Google for Education: cómo registrarte, cómo es el examen, qué estudiar y cómo usar los simulacros del portal.',
    en: 'You have reached the end of the path. This module gathers what you need to know to sit the Google for Education certifications: how to register, what the exam is like, what to study and how to use the portal’s mock exams.'
  },
  objetivos: [
    { es: 'Conocer la logística oficial del examen Gemini Certified Educator.', en: 'Know the official logistics of the Gemini Certified Educator exam.' },
    { es: 'Distinguir las certificaciones para estudiantes (K-12 y universitarios).', en: 'Tell apart the student certifications (K-12 and university).' },
    { es: 'Aplicar una estrategia de preparación y de respuesta.', en: 'Apply a preparation and answering strategy.' }
  ],
  secciones: [
    {
      h: { es: 'Gemini Certified Educator', en: 'Gemini Certified Educator' },
      b: [
        { table: {
          head: [{ es: 'Dato', en: 'Detail' }, { es: 'Valor', en: 'Value' }],
          rows: [
            [{ es: 'Formato', en: 'Format' }, { es: 'Preguntas de opción múltiple, muchas basadas en casos', en: 'Multiple-choice questions, many case-based' }],
            [{ es: 'Tiempo', en: 'Time' }, { es: '2 horas desde que pulsas «TAKE EXAM»; si se acaba el tiempo, el resultado es FAIL', en: '2 hours from pressing “TAKE EXAM”; if time runs out, the result is FAIL' }],
            [{ es: 'Número de preguntas', en: 'Number of questions' }, { es: 'Google no lo publica; guías no oficiales mencionan unas 37', en: 'Google doesn’t publish it; unofficial guides mention about 37' }],
            [{ es: 'Idioma', en: 'Language' }, { es: 'Disponible en español (Latinoamérica) y otros 12 idiomas', en: 'Available in Spanish (Latin America) and 12 other languages' }],
            [{ es: 'Costo y validez', en: 'Cost and validity' }, { es: 'Registro gratuito; válida por 3 años', en: 'Free registration; valid for 3 years' }],
            [{ es: 'Plazo', en: 'Window' }, { es: 'Debes iniciar el examen dentro de los 14 días posteriores al registro', en: 'You must start the exam within 14 days of registering' }],
            [{ es: 'Reintento', en: 'Retake' }, { es: '8 días después de reprobar; 14 días si fue por tiempo', en: '8 days after failing; 14 days if it was a timeout' }],
            [{ es: 'Qué evalúa', en: 'What it assesses' }, { es: 'Funciones gratuitas de Gemini; las preguntas sobre funciones pagas no puntúan', en: 'Gemini’s free features; questions on paid features aren’t scored' }]
          ]
        } },
        { p: { es: 'Los tres dominios son: **1. Comprender la IA generativa y Gemini**, **2. Implementar Gemini en la práctica educativa** y **3. Uso responsable de la IA en educación**. Esta ruta cubre todos sus objetivos (mira el código E en cada módulo).', en: 'The three domains are: **1. Understanding Generative AI & Gemini**, **2. Implementing Gemini in Educational Practice** and **3. Responsible AI Use in Education**. This path covers all their objectives (see the E code on each module).' } }
      ]
    },
    {
      h: { es: 'Cómo registrarte', en: 'How to register' },
      b: [
        { steps: [
          { es: 'Entra a **educertifications.google** y, en la sección de Gemini, pulsa **Register**.', en: 'Go to **educertifications.google** and, in the Gemini section, press **Register**.' },
          { es: 'Crea o inicia sesión en el Learning Center (edu.exceedlms.com) **con el mismo correo** que usaste al registrarte.', en: 'Create or sign in to the Learning Center (edu.exceedlms.com) **with the same email** you used to register.' },
          { es: 'Inicia el examen en un momento con 2 horas libres y conexión estable.', en: 'Start the exam at a time with 2 free hours and a stable connection.' },
          { es: 'Si apruebas, recibirás el certificado por correo (revisa spam) o en Accredible.', en: 'If you pass, you will receive the certificate by email (check spam) or on Accredible.' }
        ] },
        { note: { es: 'Si tu cuenta institucional no te deja acceder al examen, consulta con tu administrador o regístrate con otra cuenta de Google.', en: 'If your school account doesn’t let you access the exam, check with your administrator or register with another Google account.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Certificaciones para estudiantes', en: 'Student certifications' },
      b: [
        { table: {
          head: [{ es: 'Certificación', en: 'Certification' }, { es: 'Para quién', en: 'For whom' }, { es: 'Cómo es', en: 'What it is like' }],
          rows: [
            [{ es: 'Gemini certification for students (K-12)', en: 'Gemini certification for students (K-12)' }, { es: 'Estudiantes de 13 a 17 años', en: 'Students aged 13 to 17' }, { es: 'Curso de unos 60 minutos (Journey into AI, cuándo usar IA, Meet Gemini, prompts) y luego la evaluación; al lanzarse, solo en inglés', en: 'About a 60-minute course (Journey into AI, when to use AI, Meet Gemini, prompts), then the assessment; English-only at launch' }],
            [{ es: 'Gemini Certified University Student', en: 'Gemini Certified University Student' }, { es: 'Estudiantes universitarios', en: 'University students' }, { es: 'Opción múltiple, 2 horas; se prepara con la guía del examen y grow.google/students', en: 'Multiple choice, 2 hours; prepare with the exam guide and grow.google/students' }]
          ]
        } },
        { p: { es: 'Ambas se centran en el uso **ético, seguro y efectivo** de Gemini y Gemini Notebook para investigar y aprender, incluido Guided Learning.', en: 'Both focus on the **ethical, safe and effective** use of Gemini and Gemini Notebook for research and learning, including Guided Learning.' } }
      ]
    },
    {
      h: { es: 'Estrategia para el día del examen', en: 'Exam-day strategy' },
      b: [
        { list: [
          { es: '**Lee el escenario completo:** la pista suele estar en la audiencia, el objetivo o el riesgo.', en: '**Read the whole scenario:** the clue is usually in the audience, the goal or the risk.' },
          { es: '**Busca al docente en el centro:** la opción correcta casi siempre mantiene el criterio humano y la revisión.', en: '**Look for the teacher at the centre:** the right option almost always keeps human judgment and review.' },
          { es: '**Herramienta adecuada:** fuentes → Notebook; producto editable → Canvas; tarea repetida → Gem; aprender → Guided Learning.', en: '**Right tool:** sources → Notebook; editable product → Canvas; repeated task → Gem; learning → Guided Learning.' },
          { es: '**Privacidad primero:** descarta opciones que expongan datos de estudiantes.', en: '**Privacy first:** rule out options that expose student data.' },
          { es: '**Administra el tiempo:** marca las dudosas y vuelve al final.', en: '**Manage time:** flag doubtful ones and come back at the end.' }
        ] },
        { note: { es: 'Los simulacros del portal (Fase 4) imitan el formato con preguntas **originales**: las preguntas reales del examen son confidenciales. Practica en modo ES y también en EN.', en: 'The portal’s mock exams (Phase 4) mimic the format with **original** questions: real exam questions are confidential. Practise in ES mode and also in EN.' }, kind: 'info' }
      ]
    }
  ],
  trampas: [
    { es: 'Registrarse con un correo y entrar al Learning Center con otro: puede bloquear el acceso.', en: 'Registering with one email and entering the Learning Center with another: it can block access.' },
    { es: 'Dejar pasar los 14 días tras el registro sin iniciar el examen.', en: 'Letting the 14 days after registering pass without starting the exam.' },
    { es: 'Memorizar números de versión en lugar de practicar escenarios de aula.', en: 'Memorizing version numbers instead of practising classroom scenarios.' }
  ],
  ideas: [
    { es: 'Educator: opción múltiple, 2 h, gratis, en español, válida 3 años.', en: 'Educator: multiple choice, 2 h, free, in Spanish, valid 3 years.' },
    { es: 'Tres dominios: comprender, implementar y uso responsable.', en: 'Three domains: understand, implement and responsible use.' },
    { es: 'Docente en el centro, herramienta adecuada y privacidad primero.', en: 'Teacher at the centre, right tool and privacy first.' }
  ],
  quiz: [
    { d: 'S',
      q: { es: 'Te registraste al examen Educator hace 10 días y aún no lo inicias. ¿Qué debes tener en cuenta?', en: 'You registered for the Educator exam 10 days ago and haven’t started it. What should you keep in mind?' },
      o: [
        { t: { es: 'Que tienes un año para empezarlo', en: 'That you have a year to start it' }, why: { es: 'El plazo es mucho menor.', en: 'The window is much shorter.' } },
        { ok: true, t: { es: 'Que te quedan unos 4 días para iniciarlo', en: 'That you have about 4 days left to start' }, why: { es: 'Correcto: hay 14 días desde el registro; si no, debes registrarte de nuevo.', en: 'Correct: there are 14 days from registration; otherwise you must re-register.' } },
        { t: { es: 'Que debes pagar para no perderlo', en: 'That you must pay so you don’t lose it' }, why: { es: 'El registro es gratuito.', en: 'Registration is free.' } },
        { t: { es: 'Que el plazo no importa en absoluto', en: 'That the deadline doesn’t matter at all' }, why: { es: 'Sí importa: pasado el plazo, hay que registrarse otra vez.', en: 'It does: after the window, you must register again.' } }
      ] },
    { d: 'S',
      q: { es: '¿Qué ocurre con una pregunta del examen sobre una función de pago de Gemini?', en: 'What happens with an exam question about a paid Gemini feature?' },
      o: [
        { t: { es: 'Vale el doble de puntos', en: 'It is worth double points' }, why: { es: 'No tiene peso extra.', en: 'It carries no extra weight.' } },
        { t: { es: 'Anula el examen si fallas', en: 'It voids the exam if you miss it' }, why: { es: 'No existe esa regla.', en: 'There is no such rule.' } },
        { ok: true, t: { es: 'Puede aparecer, pero no puntúa', en: 'It may appear, but isn’t scored' }, why: { es: 'Correcto: el examen se centra en funciones gratuitas.', en: 'Correct: the exam focuses on free features.' } },
        { t: { es: 'Nunca aparece en el examen real', en: 'It never appears in the exam' }, why: { es: 'Puede aparecer, aunque no puntúe.', en: 'It may appear, even if not scored.' } }
      ] },
    { d: 'S',
      q: { es: 'En una pregunta de escenario dudas entre dos opciones. ¿Cuál suele ser la correcta?', en: 'In a scenario question you hesitate between two options. Which is usually correct?' },
      o: [
        { t: { es: 'La que automatiza todo sin revisión', en: 'The one that automates everything unreviewed' }, why: { es: 'Quitar la revisión humana suele ser un error.', en: 'Removing human review is usually a mistake.' } },
        { ok: true, t: { es: 'La que mantiene tu criterio y revisión', en: 'The one that keeps your judgment and review' }, why: { es: 'Correcto: la IA aumenta, no reemplaza al docente.', en: 'Correct: AI augments, it doesn’t replace the teacher.' } },
        { t: { es: 'La que usa el modelo más avanzado', en: 'The one that uses the most advanced model' }, why: { es: 'El modelo rara vez es la clave de la respuesta.', en: 'The model is rarely the key to the answer.' } },
        { t: { es: 'La que comparte más datos con la IA', en: 'The one that shares more data with AI' }, why: { es: 'Más datos personales suele ser peor opción.', en: 'More personal data is usually the worse option.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certifications FAQ', url: 'https://support.google.com/googleforeducation/answer/16561655?hl=es' },
    { t: 'Google for Education — Certificaciones (Launchpad)', url: 'https://educertifications.google/' },
    { t: 'Google for Education — Gemini certification for students', url: 'https://edu-ges.exceedlms.com/student/path/1825256-gemini-certification-for-students' },
    { t: 'Google for Education — Gemini Certified Educator exam guide', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' }
  ]
};
