/* Banco 10 · Faculty (educación superior): dominios 1, 2 y 3. fac: true = pregunta del simulacro Faculty. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, fac: true, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('f109', 1, '25', ['¿Qué dice la política de Google sobre los datos en cuentas de Workspace for Education de una universidad?', 'What does Google’s policy say about data in a university’s Workspace for Education accounts?'],
    ['No se revisan por personas ni entrenan modelos', 'Not human-reviewed or used to train models', 'Correcto: protección de datos de nivel empresarial.', 'Correct: enterprise-grade data protection.', true],
    ['Se publican para mejorar la investigación', 'They are published to improve research', 'No se publican.', 'They aren’t published.'],
    ['Solo se protegen los datos de estudiantes', 'Only student data is protected', 'La protección aplica a la cuenta.', 'Protection applies to the account.'],
    ['Se comparten con otras universidades', 'They are shared with other universities', 'No se comparten.', 'They aren’t shared.']);

  Q('f110', 1, '02', ['¿En qué se diferencia la IA generativa de la IA que clasifica artículos por tema en una base de datos?', 'How does generative AI differ from AI that classifies papers by topic in a database?'],
    ['Crea contenido nuevo', 'It creates new content', 'Correcto: la otra solo clasifica entre opciones.', 'Correct: the other only classifies among options.', true],
    ['Es siempre más precisa', 'It’s always more accurate', 'No necesariamente: puede alucinar.', 'Not necessarily: it can hallucinate.'],
    ['Solo funciona en inglés', 'It only works in English', 'Funciona en muchos idiomas.', 'It works in many languages.'],
    ['No necesita datos de entrenamiento', 'It needs no training data', 'También se entrena con datos.', 'It is also trained on data.']);

  Q('f111', 1, '29', ['¿Qué relación hay entre Gemini Certified Educator y Gemini Certified Faculty?', 'How are Gemini Certified Educator and Gemini Certified Faculty related?'],
    ['Son paralelas, para públicos distintos', 'They’re parallel, for different audiences', 'Correcto: Educator escolar; Faculty universitario.', 'Correct: Educator for schools; Faculty for university.', true],
    ['Faculty exige aprobar antes el Educator', 'Faculty requires passing Educator first', 'La guía no indica ese requisito.', 'The guide states no such requirement.'],
    ['Son el mismo examen con otro nombre', 'They’re the same exam under another name', 'Tienen guías y enfoques distintos.', 'They have different guides and focus.'],
    ['Faculty es solo para estudiantes', 'Faculty is only for students', 'Es para profesores universitarios.', 'It’s for university faculty.']);

  Q('f112', 1, '29', ['¿Cuál es la preparación oficial recomendada para el Gemini Certified Faculty?', 'What is the official recommended preparation for the Gemini Certified Faculty?'],
    ['«Get Started with Google AI in Higher Education»', '“Get Started with Google AI in Higher Education”', 'Correcto: y la guía del examen.', 'Correct: plus the exam guide.', true],
    ['Un posgrado completo en inteligencia artificial aplicada', 'A graduate degree in artificial intelligence', 'No es un requisito.', 'It isn’t a requirement.'],
    ['El curso de Google Cloud para empresas', 'The Google Cloud course for businesses', 'No es la preparación indicada.', 'It isn’t the indicated preparation.'],
    ['Ninguna: no hay materiales oficiales', 'None: there are no official materials', 'Sí hay curso y guía oficiales.', 'There are an official course and guide.']);

  Q('f213', 2, '27', ['Quieres analizar las cifras de varios informes cargados en un notebook. ¿Qué capacidad nueva te ayuda?', 'You want to analyze figures from several reports loaded in a notebook. Which new capability helps?'],
    ['El entorno que ejecuta código', 'The environment that runs code', 'Correcto: Gemini Notebook puede escribir y ejecutar código.', 'Correct: Gemini Notebook can write and run code.', true],
    ['El modo de voz Gemini Live', 'The Gemini Live voice mode', 'No analiza datos de tus fuentes.', 'It doesn’t analyze your sources’ data.'],
    ['La edición de fotos de Nano Banana', 'Nano Banana’s photo editing', 'Es para imágenes.', 'It’s for images.'],
    ['El historial de chats del app', 'The app’s chat history', 'No analiza datos.', 'It doesn’t analyze data.']);

  Q('f214', 2, '28', ['¿Qué recurso del Studio ayuda a tus estudiantes a ver la estructura de un marco teórico complejo?', 'Which Studio resource helps your students see the structure of a complex theoretical framework?'],
    ['Mind Map', 'Mind Map', 'Correcto: muestra conceptos conectados.', 'Correct: it shows connected concepts.', true],
    ['Audio Overview', 'Audio Overview', 'Es secuencial, no visual.', 'It’s sequential, not visual.'],
    ['Flashcards', 'Flashcards', 'Sirven para memorizar.', 'They’re for memorizing.'],
    ['Data Tables', 'Data Tables', 'Comparan, pero no muestran la jerarquía.', 'They compare but don’t show hierarchy.']);

  Q('f301', 3, '29', ['¿Cuál es un riesgo de **propiedad intelectual** al usar IA en la universidad?', 'What is an **intellectual property** risk when using AI at university?'],
    ['Subir libros protegidos a un enlace público', 'Putting copyrighted books on a public link', 'Correcto: expone material protegido.', 'Correct: it exposes protected material.', true],
    ['Usar el tema oscuro del app', 'Using the app’s dark theme', 'No tiene relación.', 'It’s unrelated.'],
    ['Pedir resúmenes de tus propios apuntes', 'Asking for summaries of your own notes', 'Son tuyos: el riesgo es bajo.', 'They’re yours: the risk is low.'],
    ['Usar el modelo Flash en lugar de Pro', 'Using Flash instead of Pro', 'El modelo no es el riesgo.', 'The model isn’t the risk.']);

  Q('f302', 3, '29', ['Como los datos de Workspace for Education no entrenan modelos, un colega quiere cargar libros completos con derechos de autor. ¿Qué le dices?', 'Since Workspace for Education data doesn’t train models, a colleague wants to upload full copyrighted books. What do you tell him?'],
    ['Que eso no resuelve los derechos de autor', 'That this doesn’t settle copyright', 'Correcto: la privacidad no equivale a licencia de uso.', 'Correct: privacy isn’t a usage licence.', true],
    ['Que no hay problema porque está protegido', 'That there’s no problem since it’s protected', 'Confunde protección de datos con derechos.', 'It confuses data protection with rights.'],
    ['Que los suba como imágenes para evitarlo', 'To upload them as images to avoid it', 'El formato no cambia los derechos.', 'Format doesn’t change rights.'],
    ['Que los comparta con todo el curso', 'To share them with the whole course', 'Aumenta el problema.', 'It makes it worse.']);

  Q('f303', 3, '29', ['¿Qué enfoque mitiga mejor la conducta académica indebida con IA en un curso universitario?', 'Which approach best mitigates AI-related academic misconduct in a university course?'],
    ['Política por tarea y proceso visible', 'Per-task policy and a visible process', 'Correcto: reglas claras, borradores y defensa.', 'Correct: clear rules, drafts and defense.', true],
    ['Sancionar según un detector de IA', 'Sanctioning based on an AI detector', 'Los detectores no son fiables como prueba única.', 'Detectors aren’t reliable as sole evidence.'],
    ['Prohibir todas las herramientas', 'Banning all tools', 'Rara vez funciona y no educa.', 'It rarely works and doesn’t educate.'],
    ['Pedir trabajos el doble de largos', 'Requiring twice-as-long assignments', 'La IA genera textos largos fácilmente.', 'AI easily generates long texts.']);

  Q('f304', 3, '27', ['Gemini sugiere una cita de un autor famoso para tu artículo y no la encuentras en ninguna base. ¿Qué es?', 'Gemini suggests a famous author’s quote for your paper and you can’t find it in any database. What is it?'],
    ['Una posible alucinación', 'A possible hallucination', 'Correcto: no la uses sin verificarla.', 'Correct: don’t use it unverified.', true],
    ['Un dato de acceso exclusivo', 'Exclusive-access data', 'No hay motivo para suponerlo.', 'There’s no reason to assume that.'],
    ['Una cita siempre fiable', 'An always reliable quote', 'La fama del autor no prueba nada.', 'The author’s fame proves nothing.'],
    ['Un error de tu buscador', 'An error in your search engine', 'Lo prudente es suponer que no existe.', 'The prudent assumption is it doesn’t exist.']);

  Q('f305', 3, '27', ['Investigas con entrevistas a participantes. ¿Qué haces antes de analizarlas con Gemini?', 'You research with participant interviews. What do you do before analyzing them with Gemini?'],
    ['Anonimizarlas y revisar la ética', 'Anonymize them; check ethics rules', 'Correcto: protege a los participantes.', 'Correct: it protects participants.', true],
    ['Subirlas tal cual para ganar tiempo', 'Upload them as is to save time', 'Expone datos personales.', 'It exposes personal data.'],
    ['Publicarlas para que todos las vean', 'Publish them for everyone to see', 'Viola la confidencialidad.', 'It breaches confidentiality.'],
    ['Pedir a Gemini que invente más', 'Ask Gemini to invent more', 'Inventar datos es una falta grave.', 'Inventing data is serious misconduct.']);

  Q('f306', 3, '25', ['¿Qué estrategia desarrolla mejor la alfabetización en IA de estudiantes universitarios?', 'Which strategy best develops university students’ AI literacy?'],
    ['Contrastar la IA con fuentes', 'Checking AI against sources', 'Correcto: evalúan críticamente.', 'Correct: they evaluate critically.', true],
    ['Prohibir hablar de IA en clase', 'Banning talk of AI in class', 'Los deja sin herramientas.', 'It leaves them without tools.'],
    ['Memorizar los nombres de modelos', 'Memorizing model names', 'No desarrolla pensamiento crítico.', 'It doesn’t build critical thinking.'],
    ['Usar IA en todas las tareas', 'Using AI for every task', 'Usar no es cuestionar.', 'Using isn’t questioning.']);

  Q('f307', 3, '29', ['¿Qué artefacto propone la guía Faculty para debatir el uso de IA con estudiantes?', 'Which artifact does the Faculty guide propose for debating AI use with students?'],
    ['Una actividad estructurada o consigna evaluada', 'A structured activity or graded prompt', 'Correcto: objetivo 3.4.1.', 'Correct: objective 3.4.1.', true],
    ['Un video de dos horas sin discusión', 'A two-hour video with no discussion', 'No facilita el debate crítico.', 'It doesn’t foster critical debate.'],
    ['Un examen sorpresa sobre modelos', 'A surprise quiz on models', 'No abre la discusión ética.', 'It doesn’t open the ethical discussion.'],
    ['Una lista de prohibiciones sin ninguna explicación', 'A list of unexplained bans', 'No genera comprensión.', 'It builds no understanding.']);

  Q('f308', 3, '24', ['Un estudiante de tesis usa Gemini para redactar todo su marco teórico. ¿Qué riesgo es el principal?', 'A thesis student uses Gemini to write his whole theoretical framework. What is the main risk?'],
    ['Sobredependencia y autoría dudosa', 'Over-reliance and doubtful authorship', 'Correcto: delega lo que debe construir.', 'Correct: he delegates what he must build.', true],
    ['Que el texto final quede muy corto', 'That the final text ends up too short', 'La extensión no es el riesgo.', 'Length isn’t the risk.'],
    ['Que use el tema claro', 'That he uses the light theme', 'No tiene relación.', 'It’s unrelated.'],
    ['Que el modelo sea lento', 'That the model is slow', 'No es un riesgo académico.', 'It isn’t an academic risk.']);

  Q('f309', 3, '25', ['Un resumen de Gemini de un artículo omite que la muestra era muy pequeña. ¿Qué problema es?', 'A Gemini summary of a paper omits that the sample was very small. What problem is it?'],
    ['Una omisión que sesga conclusiones', 'An omission that biases findings', 'Correcto: contrasta con la fuente original.', 'Correct: check it against the original source.', true],
    ['Un problema de formato del texto', 'A problem with the text’s formatting', 'No es de formato.', 'It isn’t formatting.'],
    ['Un problema de velocidad del modelo', 'A model speed problem', 'No es de velocidad.', 'It isn’t speed.'],
    ['Ningún problema: es un resumen', 'No problem: it’s a summary', 'Omitir limitaciones distorsiona la evidencia.', 'Omitting limitations distorts evidence.']);

  Q('f310', 3, '24', ['¿Cuándo es mejor **no** usar IA en un curso universitario?', 'When is it better **not** to use AI in a university course?'],
    ['Si la tarea es practicar esa habilidad', 'When the task is to develop that skill', 'Correcto: la IA haría lo que deben aprender.', 'Correct: AI would do what they must learn.', true],
    ['Al redactar un aviso administrativo', 'When drafting an admin notice', 'Es un buen uso para ahorrar tiempo.', 'It’s a good time-saving use.'],
    ['Al crear rutas diferenciadas', 'When creating differentiated paths', 'Apoya la diferenciación.', 'It supports differentiation.'],
    ['Al mapear un estado del arte', 'When mapping a state of the art', 'Es un buen punto de partida.', 'It’s a good starting point.']);

  Q('f311', 3, '29', ['Un estudiante declara cómo usó Gemini, según la política del curso. ¿Qué haces?', 'A student discloses how he used Gemini, per the course policy. What do you do?'],
    ['Valorar su transparencia', 'Value his transparency', 'Correcto: es la conducta que se busca.', 'Correct: it’s the behaviour you want.', true],
    ['Bajarle la nota por usar IA', 'Lower his grade for using AI', 'Castigas la transparencia.', 'You punish transparency.'],
    ['Anular su trabajo completo', 'Void his whole work', 'Desproporcionado si estaba permitido.', 'Disproportionate if it was allowed.'],
    ['Ignorar su declaración', 'Ignore his disclosure', 'Pierdes la ocasión de reforzarla.', 'You miss the chance to reinforce it.']);

  Q('f312', 3, '29', ['Quieres cargar el borrador de tesis de un estudiante para darle feedback. ¿Qué es imprescindible?', 'You want to upload a student’s thesis draft to give feedback. What is essential?'],
    ['Su permiso y sin datos personales', 'Consent and no personal data', 'Correcto: respeta autoría y privacidad.', 'Correct: it respects authorship and privacy.', true],
    ['Usar el modelo más rápido', 'Using the fastest model', 'No resuelve el problema ético.', 'It doesn’t solve the ethical issue.'],
    ['Publicarlo en un enlace abierto', 'Publishing it on an open link', 'Expone un trabajo inédito.', 'It exposes unpublished work.'],
    ['Pedir a Gemini que lo firme', 'Asking Gemini to sign it', 'No tiene sentido y vulnera la autoría.', 'It makes no sense and breaches authorship.']);

  Q('f313', 3, '29', ['Un colega afirma que un detector marcó 80 % de IA en un ensayo y quiere reprobar al estudiante. ¿Qué le recomiendas?', 'A colleague says a detector flagged 80% AI in an essay and wants to fail the student. What do you recommend?'],
    ['Revisar el proceso y conversar con él', 'Review the process and talk with him', 'Correcto: el detector no es prueba suficiente.', 'Correct: the detector isn’t sufficient evidence.', true],
    ['Reprobarlo: el porcentaje es alto', 'Fail him: the percentage is high', 'No es fiable como prueba única.', 'It isn’t reliable as sole evidence.'],
    ['Usar un segundo detector para confirmar', 'Use a second detector to confirm', 'Sigue sin ser prueba suficiente.', 'It still isn’t sufficient evidence.'],
    ['Anunciarlo en clase como ejemplo', 'Announce it in class as an example', 'Expone al estudiante sin pruebas.', 'It exposes the student without evidence.']);

  Q('f314', 3, '25', ['¿Qué incluye la **responsabilidad digital** de un profesor al usar IA en investigación?', 'What does a professor’s **digital responsibility** include when using AI in research?'],
    ['Verificar, citar y declarar el uso de IA', 'Verifying, citing and disclosing AI use', 'Correcto: ética, seguridad y transparencia.', 'Correct: ethics, safety and transparency.', true],
    ['Usar la IA en todo para ahorrar tiempo', 'Using AI for everything to save time', 'La cantidad no es responsabilidad.', 'Quantity isn’t responsibility.'],
    ['Evitar declarar el uso de IA', 'Avoiding disclosing AI use', 'Va contra la transparencia.', 'It goes against transparency.'],
    ['Confiar siempre en lo que genera', 'Always trusting what it generates', 'Es lo opuesto al pensamiento crítico.', 'It’s the opposite of critical thinking.']);
})();
