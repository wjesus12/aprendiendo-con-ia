/* Labs 01–08 · bug = índices (desde 0) de las líneas con el fallo */
(function () {
  const T = (es, en) => ({ es, en });
  const O = (es, en, ok, wes, wen) => ({ t: T(es, en), ok, why: T(wes, wen) });
  const QFIX = T('¿Qué cambio arregla el problema que encontraste?', 'Which change fixes the problem you found?');

  GDC.LABS.push(
    {
      id: 'lab01', mod: '06', d: 2, level: 'basic', kind: 'prompt', file: 'Prompt · Gemini app',
      title: T('Una rúbrica que no sirve a nadie', 'A rubric that serves no one'),
      context: T('Una docente pidió una rúbrica y recibió algo genérico, pensado para universitarios, cuando enseña a niños de 10 años. Encuentra la línea que provocó el problema.', 'A teacher asked for a rubric and got something generic, aimed at university students, when she teaches 10-year-olds. Find the line that caused the problem.'),
      lines: [
        T('Actúa como docente de lenguaje con experiencia.', 'Act as an experienced language teacher.'),
        T('Crea una rúbrica analítica para un cuento corto.', 'Create an analytic rubric for a short story.'),
        T('Destinatarios: mis estudiantes.', 'Recipients: my students.'),
        T('Usa 4 criterios y 4 niveles de desempeño.', 'Use 4 criteria and 4 performance levels.'),
        T('Preséntala en una tabla.', 'Present it in a table.')
      ],
      bug: [2], question: QFIX,
      options: [
        O('«Destinatarios: estudiantes de 10 años, nivel básico de escritura»', '“Recipients: 10-year-old students, basic writing level”', true, 'Correcto: el Recipient con edad y nivel ajusta vocabulario y exigencia.', 'Correct: a Recipient with age and level adjusts vocabulary and demands.'),
        O('«Actúa como el mejor experto mundial en literatura infantil»', '“Act as the world’s top expert in children’s literature”', false, 'Cambia la Persona, pero Gemini sigue sin saber quiénes son tus estudiantes.', 'It changes the Persona, but Gemini still doesn’t know who your students are.'),
        O('«Usa 8 criterios y 6 niveles para que sea más completa»', '“Use 8 criteria and 6 levels so it is more complete”', false, 'Más criterios hacen la rúbrica más compleja, justo lo contrario de lo que se necesita.', 'More criteria make the rubric more complex, exactly the opposite of what is needed.'),
        O('«Preséntala en un documento de Google Docs bien formateado»', '“Present it in a well-formatted Google Docs document”', false, 'El formato no era el problema; la audiencia sí.', 'Format wasn’t the problem; the audience was.')
      ],
      hint: T('Revisa la pieza R de PARTS: ¿para quién es el resultado?', 'Check the R in PARTS: who is the result for?'),
      lesson: T('Sin una audiencia concreta (edad, nivel, conocimientos previos), Gemini asume un público adulto genérico. El **Recipient** es una de las piezas que más cambia el resultado.', 'Without a concrete audience (age, level, prior knowledge), Gemini assumes a generic adult audience. The **Recipient** is one of the pieces that most changes the result.')
    },
    {
      id: 'lab02', mod: '05', d: 3, level: 'basic', kind: 'prompt', file: 'Prompt · Canvas',
      title: T('La bibliografía fantasma', 'The ghost bibliography'),
      context: T('Un docente creó una guía de lectura. Al revisar, tres de las referencias no existían. Encuentra la línea que invitó a inventarlas.', 'A teacher created a reading guide. On review, three of the references didn’t exist. Find the line that invited Gemini to make them up.'),
      lines: [
        T('Con el sílabo adjunto, crea una guía de lectura de la unidad 2.', 'Using the attached syllabus, create a reading guide for unit 2.'),
        T('Incluye objetivos, conceptos clave y preguntas de reflexión.', 'Include objectives, key concepts and reflection questions.'),
        T('Añade 10 referencias académicas recientes con autor, año y enlace.', 'Add 10 recent academic references with author, year and link.'),
        T('Usa un lenguaje claro para estudiantes de primer ciclo.', 'Use clear language for first-year students.')
      ],
      bug: [2], question: QFIX,
      options: [
        O('«Añade 20 referencias para tener más opciones donde elegir»', '“Add 20 references so there are more options to choose from”', false, 'Pedir más referencias sin fuente multiplica el riesgo de inventarlas.', 'Asking for more unsourced references multiplies the risk of invention.'),
        O('«Usa solo las lecturas del sílabo; marca con [VERIFICAR] lo demás»', '“Use only the syllabus readings; mark anything else with [VERIFY]”', true, 'Correcto: ancla las referencias a tu fuente y señala lo dudoso.', 'Correct: it anchors references to your source and flags doubts.'),
        O('«Añade 10 referencias, pero que sean de revistas muy conocidas»', '“Add 10 references, but from very well-known journals”', false, 'Un título de revista famosa no evita que el artículo sea inventado.', 'A famous journal name doesn’t stop the article from being made up.'),
        O('«Pide a Gemini que confirme al final que las referencias existen»', '“Ask Gemini to confirm at the end that the references exist”', false, 'La autoconfirmación no es verificación: puede confirmar algo falso.', 'Self-confirmation isn’t verification: it can confirm something false.')
      ],
      hint: T('¿Qué línea pide datos que no están en el sílabo adjunto?', 'Which line asks for data that isn’t in the attached syllabus?'),
      lesson: T('Pedir referencias, cifras o citas **sin fuente** es la receta clásica de una alucinación. Añade **límites**: «solo mis documentos; marca con [VERIFICAR] lo que no esté en ellos».', 'Asking for references, figures or quotes **without a source** is the classic recipe for a hallucination. Add **limits**: “only my documents; mark with [VERIFY] anything not in them.”')
    },
    {
      id: 'lab03', mod: '14', d: 3, level: 'mid', kind: 'gem', file: 'Gem · Instrucciones «Feedback de ensayos»',
      title: T('Un Gem con datos que no debería tener', 'A Gem with data it shouldn’t have'),
      context: T('Un docente creó un Gem para dar retroalimentación. Funciona bien, pero la coordinación de su escuela le pidió revisarlo por un problema de privacidad. Encuentra la línea.', 'A teacher built a Gem to give feedback. It works well, but the school’s coordination asked him to review it for a privacy problem. Find the line.'),
      lines: [
        T('Eres un asistente de retroalimentación para ensayos de secundaria.', 'You are a feedback assistant for secondary-school essays.'),
        T('Da un logro, una mejora con ejemplo y un siguiente paso.', 'Give one strength, one improvement with an example and one next step.'),
        T('Usa como referencia la lista adjunta con nombres, DNI y notas del curso.', 'Use as a reference the attached list with the course’s names, IDs and grades.'),
        T('Tono cercano y respetuoso; máximo 120 palabras.', 'Warm, respectful tone; 120 words maximum.'),
        T('Usa la rúbrica adjunta como único criterio.', 'Use the attached rubric as the only criterion.')
      ],
      bug: [2], question: QFIX,
      options: [
        O('Mantener la lista, pero compartir el Gem solo con colegas', 'Keep the list, but share the Gem only with colleagues', false, 'Compartirlo con menos personas no resuelve que el Gem guarde datos sensibles.', 'Sharing it with fewer people doesn’t solve the Gem storing sensitive data.'),
        O('Quitar la lista: el Gem solo necesita la rúbrica como conocimiento', 'Remove the list: the Gem only needs the rubric as knowledge', true, 'Correcto: minimización de datos. La retroalimentación no requiere nombres, DNI ni notas.', 'Correct: data minimization. Feedback doesn’t require names, IDs or grades.'),
        O('Cambiar la lista por una con solo los nombres y las notas finales', 'Swap the list for one with only names and final grades', false, 'Sigue exponiendo datos personales que la tarea no necesita.', 'It still exposes personal data the task doesn’t need.'),
        O('Pedir en las instrucciones que el Gem no muestre los DNI', 'Ask in the instructions that the Gem not show the IDs', false, 'Los datos seguirían cargados en el Gem; la instrucción no los protege.', 'The data would still be loaded in the Gem; the instruction doesn’t protect it.')
      ],
      hint: T('¿Qué información no hace falta para dar retroalimentación sobre un texto?', 'Which information isn’t needed to give feedback on a text?'),
      lesson: T('Los **archivos de conocimiento** de un Gem deben contener solo lo necesario para la tarea. Aplica la **minimización de datos**: rúbricas y ejemplos sí; listas con datos personales, no.', 'A Gem’s **knowledge files** should contain only what the task needs. Apply **data minimization**: rubrics and examples yes; lists with personal data, no.')
    },
    {
      id: 'lab04', mod: '14', d: 2, level: 'mid', kind: 'gem', file: 'Gem · Instrucciones «Bell-ringers»',
      title: T('Instrucciones que se contradicen', 'Instructions that contradict each other'),
      context: T('El Gem de actividades de inicio a veces da textos larguísimos y otras veces frases sueltas. Encuentra las dos líneas que se contradicen.', 'The warm-up activity Gem sometimes gives very long texts and other times loose phrases. Find the two lines that contradict each other.'),
      lines: [
        T('Eres un asistente que crea actividades de inicio de clase de Historia.', 'You are an assistant that creates History warm-up activities.'),
        T('Cada actividad debe poder hacerse en 5 minutos.', 'Each activity must take 5 minutes.'),
        T('Explica cada actividad con todo detalle, con contexto histórico amplio.', 'Explain each activity in full detail, with broad historical context.'),
        T('Audiencia: estudiantes de 14 años.', 'Audience: 14-year-old students.'),
        T('Responde siempre en un máximo de 40 palabras.', 'Always answer in 40 words maximum.')
      ],
      bug: [2, 4], question: QFIX,
      options: [
        O('Borrar la línea de la audiencia para que no limite al Gem', 'Delete the audience line so it doesn’t limit the Gem', false, 'La audiencia no causa la contradicción y es útil.', 'The audience doesn’t cause the contradiction and is useful.'),
        O('Dejar ambas líneas y pedir al Gem que elija la que prefiera', 'Keep both and ask the Gem to choose whichever it prefers', false, 'Así el resultado seguirá siendo inconsistente.', 'That way the result will stay inconsistent.'),
        O('Unificar: «consigna breve (máx. 60 palabras) y una línea de contexto»', 'Unify: “brief prompt (max 60 words) with one line of context”', true, 'Correcto: una sola regla clara y coherente con los 5 minutos.', 'Correct: one clear rule, consistent with the 5 minutes.'),
        O('Cambiar a un modelo con más razonamiento para que lo resuelva', 'Switch to a more reasoning-heavy model so it sorts it out', false, 'El modelo no resuelve instrucciones contradictorias; hay que corregirlas.', 'The model can’t fix contradictory instructions; they must be corrected.')
      ],
      hint: T('Busca dos reglas sobre la extensión que no pueden cumplirse a la vez.', 'Look for two length rules that can’t both be met.'),
      lesson: T('Las instrucciones de un Gem se aplican siempre. Si dos reglas chocan, el resultado será inconsistente. Revisa que extensión, tono y formato no se contradigan.', 'A Gem’s instructions always apply. If two rules clash, the result will be inconsistent. Check that length, tone and format don’t contradict each other.')
    },
    {
      id: 'lab05', mod: '12', d: 3, level: 'hard', kind: 'canvas', file: 'Plan · App de Canvas para el curso',
      title: T('Una app pública con datos sensibles', 'A public app with sensitive data'),
      context: T('Un docente creó con Canvas una app de consultas para su curso y quiere compartirla por WhatsApp. Revisa su plan y encuentra la línea riesgosa.', 'A teacher built a Q&A app for his course with Canvas and wants to share it via WhatsApp. Review his plan and find the risky line.'),
      lines: [
        T('La app muestra el temario y tres preguntas de autoevaluación.', 'The app shows the syllabus and three self-check questions.'),
        T('El formulario pide nombre, celular, dirección y nota del último examen.', 'The form asks for name, phone, address and last exam grade.'),
        T('Compartiré el enlace público de la app en el grupo del curso.', 'I’ll share the app’s public link in the course group.'),
        T('Revisaré las consultas cada viernes.', 'I’ll review the questions every Friday.')
      ],
      bug: [1], question: QFIX,
      options: [
        O('Pedir solo tema y consulta (y un código si hace falta identificar)', 'Ask only for topic and question (and an ID code if needed)', true, 'Correcto: los enlaces públicos permiten ver y editar los datos de la app; recoge lo mínimo.', 'Correct: public links let anyone view and edit the app’s data; collect the minimum.'),
        O('Mantener los campos, pero añadir un aviso de privacidad abajo', 'Keep the fields, but add a privacy notice at the bottom', false, 'Un aviso no impide que cualquiera con el enlace vea esos datos.', 'A notice doesn’t stop anyone with the link from seeing that data.'),
        O('Compartir el enlace solo por correo en lugar de WhatsApp', 'Share the link only by email instead of WhatsApp', false, 'El canal cambia, pero el enlace sigue siendo público y reenviable.', 'The channel changes, but the link is still public and forwardable.'),
        O('Revisar las consultas a diario para borrar los datos antes', 'Review questions daily to delete the data sooner', false, 'Reduce el tiempo de exposición, pero sigue recogiendo datos innecesarios.', 'It shortens exposure but still collects unnecessary data.')
      ],
      hint: T('Recuerda: un enlace público de una app de Canvas permite ver y editar sus datos.', 'Remember: a Canvas app’s public link lets anyone view and edit its data.'),
      lesson: T('Antes de publicar una app creada con IA, pregúntate qué datos recoge y quién puede verlos. Con enlaces públicos, **recoge lo mínimo** y nunca datos sensibles como notas, direcciones o teléfonos.', 'Before publishing an AI-built app, ask what data it collects and who can see it. With public links, **collect the minimum** and never sensitive data such as grades, addresses or phone numbers.')
    },
    {
      id: 'lab06', mod: '13', d: 3, level: 'basic', kind: 'prompt', file: 'Prompt · Nano Banana',
      title: T('El afiche con una cara real', 'The poster with a real face'),
      context: T('Para la feria escolar, un docente quiere un afiche llamativo con Nano Banana. Encuentra la línea que no debería estar.', 'For the school fair, a teacher wants an eye-catching poster with Nano Banana. Find the line that shouldn’t be there.'),
      lines: [
        T('Crea un afiche para la Feria de Ciencias del colegio, estilo ilustración plana.', 'Create a poster for the school Science Fair, flat illustration style.'),
        T('Usa la foto adjunta de Sofía (3.º B) como protagonista, con bata de laboratorio.', 'Use the attached photo of Sofía (Year 9 B) as the main character, in a lab coat.'),
        T('Incluye el título «Feria de Ciencias 2026» y la fecha 15 de noviembre.', 'Include the title “Science Fair 2026” and the date 15 November.'),
        T('Colores vivos y espacio para el logo del colegio.', 'Bright colours and space for the school logo.')
      ],
      bug: [1], question: QFIX,
      options: [
        O('Usar la foto, pero en baja resolución para que no se reconozca', 'Use the photo, but in low resolution so she isn’t recognized', false, 'Reducir la calidad no reemplaza el consentimiento.', 'Lowering the quality doesn’t replace consent.'),
        O('Describir un personaje ficticio y diverso en lugar de la foto', 'Describe a diverse fictional character instead of the photo', true, 'Correcto: evitas usar la imagen de una menor sin consentimiento informado.', 'Correct: you avoid using a minor’s image without informed consent.'),
        O('Usar la foto y quitar después la marca de agua visible del afiche', 'Use the photo and later remove the poster’s visible watermark', false, 'Ocultar que es IA va contra la transparencia y no resuelve el consentimiento.', 'Hiding that it’s AI goes against transparency and doesn’t solve consent.'),
        O('Usar la foto de otro estudiante que no participe en la feria', 'Use a photo of another student who isn’t in the fair', false, 'El problema de consentimiento es el mismo con cualquier estudiante.', 'The consent problem is the same with any student.')
      ],
      hint: T('¿Qué elemento involucra a una persona real menor de edad?', 'Which element involves a real minor?'),
      lesson: T('No generes ni edites imágenes de estudiantes o personas reales sin **consentimiento informado**. Un personaje ficticio resuelve el afiche sin riesgos, y recuerda declarar que la imagen fue creada con IA.', 'Don’t generate or edit images of students or real people without **informed consent**. A fictional character solves the poster risk-free, and remember to disclose that the image was AI-made.')
    },
    {
      id: 'lab07', mod: '09', d: 2, level: 'mid', kind: 'prompt', file: 'Pedido · Deep Research',
      title: T('Una investigación sin rumbo', 'A research request with no direction'),
      context: T('Un docente lanzó un Deep Research y recibió un informe enorme y poco útil para su clase. Encuentra la línea que explica por qué.', 'A teacher ran a Deep Research and got a huge report that was of little use for his class. Find the line that explains why.'),
      lines: [
        T('Investiga todo sobre la educación y la tecnología.', 'Research everything about education and technology.'),
        T('Organiza el informe con secciones y enlaces a las fuentes.', 'Organize the report with sections and links to sources.'),
        T('Prioriza fuentes académicas y de organismos educativos.', 'Prioritize academic sources and education bodies.')
      ],
      bug: [0], question: QFIX,
      options: [
        O('«Investiga todo sobre educación, tecnología e inteligencia artificial»', '“Research everything about education, technology and artificial intelligence”', false, 'Ampliar el tema lo hace aún menos útil.', 'Broadening the topic makes it even less useful.'),
        O('«Investiga estrategias de aula invertida en secundaria (últimos 5 años)»', '“Research flipped-classroom strategies in secondary school (last 5 years)”', true, 'Correcto: alcance, nivel y periodo concretos orientan el plan y el informe.', 'Correct: a concrete scope, level and period steer the plan and the report.'),
        O('«Organiza el informe en una sola página para que sea más breve»', '“Organize the report on a single page so it is shorter”', false, 'Acorta el informe, pero sigue sin un tema delimitado.', 'It shortens the report but still has no defined topic.'),
        O('«Prioriza solo blogs de docentes para que sea más práctico»', '“Prioritize only teachers’ blogs so it’s more practical”', false, 'Empeora la calidad de las fuentes y no delimita el tema.', 'It worsens source quality and doesn’t narrow the topic.')
      ],
      hint: T('Un buen pedido de investigación tiene alcance, contexto y periodo.', 'A good research request has scope, context and period.'),
      lesson: T('Deep Research rinde cuando delimitas **alcance, contexto y periodo**. Y recuerda revisar el **plan** antes de iniciarlo: es el mejor momento para corregir el rumbo.', 'Deep Research works best when you define **scope, context and period**. And remember to review the **plan** before starting: it is the best moment to correct course.')
    },
    {
      id: 'lab08', mod: '17', d: 3, level: 'mid', kind: 'prompt', file: 'Prompt · Gmail',
      title: T('Un correo que dice demasiado', 'An email that says too much'),
      context: T('Una docente quiere escribir a una familia sobre el rendimiento de su hijo. Encuentra la línea que expone información innecesaria.', 'A teacher wants to write to a family about their son’s performance. Find the line that exposes unnecessary information.'),
      lines: [
        T('Redacta un correo empático a la familia de un estudiante de 2.º de secundaria.', 'Write an empathetic email to the family of a Year 8 student.'),
        T('Contexto: Mateo Ríos tiene diagnóstico de TDAH y su nota bajó de 15 a 9.', 'Context: Mateo Ríos has an ADHD diagnosis and his grade dropped from 15 to 9.'),
        T('Menciona dos fortalezas y propone una reunión de 20 minutos.', 'Mention two strengths and propose a 20-minute meeting.'),
        T('Ofrece dos horarios: martes o jueves a las 4 p. m.', 'Offer two time slots: Tuesday or Thursday at 4 pm.')
      ],
      bug: [1], question: QFIX,
      options: [
        O('«Contexto: su rendimiento en Matemáticas bajó en el último mes»', '“Context: his Maths performance dropped in the last month”', true, 'Correcto: describe la situación sin nombre, diagnóstico ni notas.', 'Correct: it describes the situation without name, diagnosis or grades.'),
        O('«Contexto: Mateo tiene TDAH; no menciones la nota en el correo»', '“Context: Mateo has ADHD; don’t mention the grade in the email”', false, 'Sigues cargando un diagnóstico sensible que la IA no necesita.', 'You still upload a sensitive diagnosis the AI doesn’t need.'),
        O('«Contexto: Mateo Ríos, estudiante con dificultades de atención»', '“Context: Mateo Ríos, a student with attention difficulties”', false, 'Mantiene el nombre completo y un dato de salud.', 'It keeps the full name and a health detail.'),
        O('«Contexto: el estudiante del caso que te conté ayer»', '“Context: the student from the case I told you about yesterday”', false, 'Gemini no recuerda esa conversación y no le das contexto útil.', 'Gemini doesn’t remember that conversation and gets no useful context.')
      ],
      hint: T('Para redactar el correo, ¿Gemini necesita el nombre, el diagnóstico y la nota exacta?', 'To draft the email, does Gemini need the name, the diagnosis and the exact grade?'),
      lesson: T('Describe **necesidades y situaciones**, no identidades. Los diagnósticos, nombres completos y notas son datos sensibles: el correo se puede redactar igual de bien sin ellos y luego tú personalizas.', 'Describe **needs and situations**, not identities. Diagnoses, full names and grades are sensitive data: the email can be drafted just as well without them, and you personalize it afterwards.')
    }
  );
})();
