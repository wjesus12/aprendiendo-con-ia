/* Módulo 17 · Gemini en Gmail y Docs */
GDC.MOD['17'] = {
  min: 13,
  intro: {
    es: 'Correos a familias, comunicados, informes, actas de reunión: buena parte del trabajo docente es escribir. Gemini en **Gmail** y **Docs** te ayuda a redactar con el contexto y el tono adecuados, y a resumir lo que no tienes tiempo de leer completo.',
    en: 'Emails to families, notices, reports, meeting minutes: much of teaching work is writing. Gemini in **Gmail** and **Docs** helps you write with the right context and tone, and summarize what you don’t have time to read in full.'
  },
  objetivos: [
    { es: 'Redactar un correo o un texto con requisitos de contexto y tono.', en: 'Write an email or text with context and tone requirements.' },
    { es: 'Usar Gemini para tareas administrativas: comunicados a familias o agendas de reunión.', en: 'Use Gemini for admin tasks: notices to families or meeting agendas.' },
    { es: 'Revisar y aprobar las ediciones sugeridas antes de aplicarlas.', en: 'Review and approve suggested edits before applying them.' }
  ],
  secciones: [
    {
      h: { es: 'Gemini en Gmail', en: 'Gemini in Gmail' },
      b: [
        { table: {
          head: [{ es: 'Función', en: 'Feature' }, { es: 'Para qué te sirve', en: 'What it helps with' }],
          rows: [
            [{ es: 'Ayúdame a escribir (Help me write)', en: 'Help me write' }, { es: 'Un borrador de correo a partir de una indicación breve', en: 'A draft email from a short instruction' }],
            [{ es: 'Refinar el borrador', en: 'Refine the draft' }, { es: 'Hacerlo más formal, más breve o más detallado', en: 'Make it more formal, shorter or more detailed' }],
            [{ es: 'Resumir un hilo', en: 'Summarize a thread' }, { es: 'Entender una conversación larga en segundos', en: 'Understand a long conversation in seconds' }],
            [{ es: 'Panel lateral', en: 'Side panel' }, { es: 'Preguntar sobre tus correos («¿qué pidió la coordinación esta semana?»)', en: 'Ask about your emails (“what did coordination ask for this week?”)' }]
          ]
        } },
        { prompt: { es: 'Redacta un correo para las familias de 3.º de secundaria sobre la salida de campo al museo del viernes 24. Incluye hora de salida (8:00) y regreso (13:00), qué deben traer y la fecha límite para la autorización (miércoles 22). Tono cálido y claro; máximo 150 palabras.',
                    en: 'Write an email to the families of Year 9 about Friday the 24th’s field trip to the museum. Include departure (8:00) and return (13:00) times, what to bring and the deadline for the permission slip (Wednesday the 22nd). Warm, clear tone; 150 words maximum.' },
          label: { es: '✦ Comunicado a familias', en: '✦ Notice to families' } }
      ]
    },
    {
      h: { es: 'Gemini en Docs', en: 'Gemini in Docs' },
      b: [
        { list: [
          { es: '**Ayúdame a crear (Help me create):** genera un primer borrador con formato a partir de tu indicación, y puede tomar información de tus archivos, correos y la web.', en: '**Help me create:** generates a formatted first draft from your instruction, and can draw on your files, emails and the web.' },
          { es: '**Barra inferior o panel lateral:** pides ediciones sobre todo el documento («hazlo más breve», «añade un ejemplo en cada sección»).', en: '**Bottom bar or side panel:** you request edits across the whole document (“make it shorter”, “add an example in each section”).' },
          { es: '**Ediciones sugeridas:** solo tú las ves hasta que las apruebas, así que tu equipo no ve cambios a medio revisar.', en: '**Suggested edits:** only you see them until you approve them, so your team doesn’t see half-reviewed changes.' },
          { es: '**Resumir:** obtén los puntos clave de un documento largo.', en: '**Summarize:** get the key points of a long document.' }
        ] },
        { note: { es: 'Los objetivos 2.1.4 y 2.1.5 piden usar Gemini para tareas administrativas (correo de bienvenida a familias, agenda de reunión de docentes) y para redactar en Docs y Gmail según contexto y tono. Gemini dentro de Docs y Gmail está disponible con **Google AI Pro for Education**.',
                  en: 'Objectives 2.1.4 and 2.1.5 ask you to use Gemini for admin tasks (back-to-school email to families, staff meeting agenda) and to write in Docs and Gmail with context and tone. Gemini inside Docs and Gmail is available with **Google AI Pro for Education**.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Contexto y tono: el corazón del buen correo', en: 'Context and tone: the heart of a good email' },
      b: [
        { compare: {
          bad: { t: { es: 'Escribe un correo para un padre por las notas.', en: 'Write an email to a parent about grades.' }, why: { es: 'No dice qué pasa con las notas, qué se espera del padre ni qué tono usar.', en: 'It doesn’t say what is happening with the grades, what is expected of the parent or what tone to use.' } },
          good: { t: { es: 'Redacta un correo a la familia de un estudiante cuyo rendimiento en Matemáticas bajó en el último mes. Tono empático y constructivo; menciona dos fortalezas, propón una reunión de 20 minutos y ofrece dos horarios. No incluyas notas ni datos sensibles.', en: 'Write an email to the family of a student whose Maths performance dropped in the last month. Empathetic, constructive tone; mention two strengths, propose a 20-minute meeting and offer two time slots. Don’t include grades or sensitive data.' },
                  why: { es: 'Contexto, propósito, tono, estructura y límites: el borrador sale casi listo.', en: 'Context, purpose, tone, structure and limits: the draft comes out almost ready.' } }
        } },
        { prompt: { es: 'Crea la agenda de una reunión de docentes de 45 minutos sobre la evaluación del bimestre. Incluye objetivo, 4 puntos con tiempo asignado, responsables por rol (no por nombre) y acuerdos esperados. Formato de tabla.', en: 'Create the agenda for a 45-minute staff meeting on the term’s assessment. Include the goal, 4 items with allotted time, owners by role (not by name) and expected agreements. Table format.' },
          label: { es: '✦ Agenda de reunión', en: '✦ Meeting agenda' } }
      ]
    },
    {
      h: { es: 'Sin Gemini en Docs, también se puede', en: 'Without Gemini in Docs, you still can' },
      b: [
        { p: { es: 'Si tu cuenta no tiene Gemini dentro de Docs o Gmail, haz el mismo trabajo en el **Gemini app** (o en **Canvas**) y luego **exporta a Docs** o copia el texto al correo. El método (contexto, tono, límites, revisión) es el mismo.',
               en: 'If your account doesn’t have Gemini inside Docs or Gmail, do the same work in the **Gemini app** (or **Canvas**) and then **export to Docs** or copy the text into the email. The method (context, tone, limits, review) is the same.' } },
        { note: { es: 'Redacta con Gemini el correo de bienvenida de tu próximo ciclo. Luego pide dos versiones: una más formal y otra más breve. Elige y ajusta a mano lo que haga falta.', en: 'Draft your next term’s welcome email with Gemini. Then ask for two versions: one more formal and one shorter. Pick one and adjust by hand as needed.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Enviar el borrador sin leerlo: fechas, nombres y horas son errores comunes.', en: 'Sending the draft without reading it: dates, names and times are common errors.' },
    { es: 'Incluir notas, diagnósticos o datos sensibles de un estudiante en el prompt.', en: 'Including a student’s grades, diagnoses or sensitive data in the prompt.' },
    { es: 'Aprobar todas las ediciones sugeridas de golpe sin revisar cada una.', en: 'Approving all suggested edits at once without reviewing each one.' }
  ],
  ideas: [
    { es: 'Gmail: ayúdame a escribir, refinar y resumir hilos.', en: 'Gmail: help me write, refine and summarize threads.' },
    { es: 'Docs: ayúdame a crear, editar todo el documento y ediciones sugeridas privadas hasta aprobarlas.', en: 'Docs: help me create, edit the whole doc, and suggested edits private until approved.' },
    { es: 'Contexto + tono + límites = correos casi listos.', en: 'Context + tone + limits = nearly ready emails.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Debes escribir a una familia sobre un tema delicado. ¿Qué prompt es mejor?', en: 'You must write to a family about a sensitive matter. Which prompt is better?' },
      o: [
        { t: { es: '«Escribe un correo formal a un padre»', en: '“Write a formal email to a parent”' }, why: { es: 'Falta el contexto, el propósito y los límites.', en: 'Context, purpose and limits are missing.' } },
        { ok: true, t: { es: '«Correo empático: dos fortalezas y reunión»', en: '“Empathetic email: two strengths and a meeting”' }, why: { es: 'Correcto: define tono, contenido y siguiente paso.', en: 'Correct: it sets tone, content and next step.' } },
        { t: { es: '«Explica todas sus notas del bimestre»', en: '“Explain all of their term grades”' }, why: { es: 'Expone datos sensibles sin necesidad.', en: 'It exposes sensitive data unnecessarily.' } },
        { t: { es: '«Hazlo lo más largo y completo posible»', en: '“Make it as long and complete as possible”' }, why: { es: 'Más largo no es más claro ni más empático.', en: 'Longer isn’t clearer or more empathetic.' } }
      ] },
    { d: 2,
      q: { es: 'Usas Gemini en Docs y te propone ediciones. ¿Quién las ve antes de que las apruebes?', en: 'You use Gemini in Docs and it proposes edits. Who sees them before you approve them?' },
      o: [
        { t: { es: 'Todas las personas con acceso al Doc', en: 'Everyone with access to the Doc' }, why: { es: 'No: las ediciones sugeridas son privadas hasta aprobarlas.', en: 'No: suggested edits are private until approved.' } },
        { ok: true, t: { es: 'Solo tú', en: 'Only you' }, why: { es: 'Correcto: tu equipo no ve cambios a medio revisar.', en: 'Correct: your team doesn’t see half-reviewed changes.' } },
        { t: { es: 'Solo el administrador', en: 'Only the administrator' }, why: { es: 'El administrador no revisa tus ediciones.', en: 'The administrator doesn’t review your edits.' } },
        { t: { es: 'Google, para entrenar el modelo', en: 'Google, to train the model' }, why: { es: 'En Workspace for Education, tus datos no entrenan modelos.', en: 'In Workspace for Education, your data doesn’t train models.' } }
      ] },
    { d: 2,
      q: { es: 'Tu cuenta no tiene Gemini dentro de Gmail. ¿Cómo redactas igual el comunicado con ayuda de IA?', en: 'Your account doesn’t have Gemini inside Gmail. How do you still draft the notice with AI help?' },
      o: [
        { t: { es: 'No se puede sin el complemento de pago', en: 'It can’t be done without the paid add-on' }, why: { es: 'Sí se puede, desde el Gemini app.', en: 'It can, from the Gemini app.' } },
        { t: { es: 'Con Nano Banana en formato de imagen', en: 'With Nano Banana as an image' }, why: { es: 'Un comunicado en imagen no es editable ni accesible.', en: 'A notice as an image isn’t editable or accessible.' } },
        { ok: true, t: { es: 'En el Gemini app y luego lo copias', en: 'In the Gemini app and then copy it' }, why: { es: 'Correcto: el método es el mismo; solo cambia dónde lo escribes.', en: 'Correct: the method is the same; only where you write changes.' } },
        { t: { es: 'Con Deep Research sobre comunicados', en: 'With Deep Research on notices' }, why: { es: 'No necesitas investigar la web para redactar un aviso.', en: 'You don’t need web research to draft a notice.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Workspace Updates — Nuevas capacidades de Gemini en Docs (abril de 2026)', url: 'https://workspaceupdates.googleblog.com/2026/04/new-gemini-capabilities-in-google-docs-help-you-go-from-blank-page-to-brilliance.html' },
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.1.4 y 2.1.5)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' }
  ]
};
