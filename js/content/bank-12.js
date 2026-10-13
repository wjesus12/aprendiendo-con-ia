/* Banco 12 · Faculty (educación superior): resto del dominio 2 y dominio 3 completo. fac: true = pregunta del simulacro Faculty. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, fac: true, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('f222', 2, '30', ['¿Qué prompt es **más eficaz** para preparar la introducción de un tema en una clase universitaria?', 'Which prompt is **most effective** for preparing the introduction of a topic in a university class?'],
    ['«Explícame la elasticidad para mi clase»', '“Explain elasticity for my class”', 'Faltan público, propósito y formato.', 'Missing audience, aim and format.'],
    ['«Haz algo interesante sobre elasticidad»', '“Do something interesting on elasticity”', 'Es vago y sin resultado definido.', 'It’s vague with no defined outcome.'],
    ['Rol, meta, público, ejemplo y formato', 'Role, aim, audience, example and format', 'Correcto: aplica las piezas de PARTS.', 'Correct: it applies the PARTS pieces.', true],
    ['«Escríbelo en un tono muy académico y formal»', '“Write it in a very academic and formal tone”', 'El tono solo no da contexto suficiente.', 'Tone alone doesn’t give enough context.']);

  Q('f223', 2, '30', ['Comparado con asignar solo la lectura, ¿qué aporta un **Audio Overview** a estudiantes de primer año?', 'Compared with assigning only the reading, what does an **Audio Overview** add for first-year students?'],
    ['Reemplaza la lectura del artículo', 'It replaces reading the paper', 'Simplifica matices: no la sustituye.', 'It simplifies nuances: it doesn’t replace it.'],
    ['Una puerta de entrada al texto denso', 'An entry point to the dense text', 'Correcto: acerca el contenido antes de leer.', 'Correct: it brings the content closer before reading.', true],
    ['Una fuente citable en sus trabajos', 'A citable source for their papers', 'Se citan las fuentes originales.', 'The original sources are cited.'],
    ['Una evaluación sumativa del tema', 'A summative assessment of the topic', 'No evalúa el aprendizaje.', 'It doesn’t assess learning.']);

  Q('f224', 2, '30', ['¿Cuál es un **límite** de la guía de estudio generada en Gemini Notebook que debes cuidar?', 'Which **limit** of the study guide generated in Gemini Notebook should you watch?'],
    ['Que no puede incluir preguntas', 'That it can’t include questions', 'Sí incluye preguntas y conceptos.', 'It does include questions and concepts.'],
    ['Que solo funciona con textos en inglés', 'That it only works with English texts', 'Funciona en varios idiomas.', 'It works in several languages.'],
    ['Que los estudiantes copien sin elaborar', 'That students copy without elaborating', 'Correcto: deben responder con sus palabras.', 'Correct: they must answer in their own words.', true],
    ['Que no se basa en las fuentes cargadas', 'That it isn’t based on the uploaded sources', 'Se basa en las fuentes del notebook.', 'It’s based on the notebook’s sources.']);

  Q('f225', 2, '30', ['Generas una imagen para una clase de Sociología y representa a todas las personas de una profesión con el mismo género. ¿Qué haces?', 'You generate an image for a Sociology class and it shows everyone in a profession as the same gender. What do you do?'],
    ['La usas: es solo una ilustración', 'Use it: it’s just an illustration', 'Reforzaría un estereotipo en clase.', 'It would reinforce a stereotype in class.'],
    ['Refinas el prompt para diversificarla', 'Refine the prompt to diversify it', 'Correcto: imagen apropiada al contexto (2.3.2).', 'Correct: an image suited to the context (2.3.2).', true],
    ['La recortas para que no se note', 'Crop it so it doesn’t show', 'No resuelve el sesgo de la imagen.', 'It doesn’t solve the image’s bias.'],
    ['Pides a los estudiantes que la ignoren', 'Ask students to ignore it', 'Mejor no usar contenido sesgado.', 'Better not to use biased content.']);

  Q('f226', 2, '30', ['Quieres convertir la presentación de la semana en un video con guion y voz en off para tu clase invertida. ¿Qué indica la guía?', 'You want to turn the week’s presentation into a video with script and voiceover for your flipped class. What does the guide indicate?'],
    ['Usar Gemini dentro de Sheets', 'Use Gemini inside Sheets', 'Sheets es para datos.', 'Sheets is for data.'],
    ['Usar Deep Research', 'Use Deep Research', 'Produce informes, no videos.', 'It produces reports, not videos.'],
    ['Usar un Mind Map de Notebook', 'Use a Mind Map from Notebook', 'No es un video narrado.', 'It isn’t a narrated video.'],
    ['Usar Google Vids (de pago)', 'Use Google Vids (paid)', 'Correcto: objetivo 2.3.4.', 'Correct: objective 2.3.4.', true]);

  Q('f227', 2, '29', ['Quieres generar un examen sumativo a partir de un Doc del curso con Gemini en Forms. ¿Qué es imprescindible?', 'You want to generate a summative exam from a course Doc with Gemini in Forms. What is essential?'],
    ['Revisar cada pregunta y su respuesta', 'Reviewing every question and its key', 'Correcto: tú respondes por el examen.', 'Correct: you are accountable for the exam.', true],
    ['Publicarlo sin cambios para ahorrar tiempo', 'Publishing it unchanged to save time', 'Puede tener errores o ambigüedades.', 'It may contain errors or ambiguities.'],
    ['Pedir que tenga más de 100 preguntas', 'Asking for over 100 questions', 'La cantidad no garantiza validez.', 'Quantity doesn’t ensure validity.'],
    ['Usar la cuenta personal del docente', 'Using the professor’s personal account', 'Debe usarse la institucional.', 'The institutional one should be used.']);

  Q('f228', 2, '29', ['El primer borrador de rutas diferenciadas cambia el resultado de aprendizaje en la ruta de refuerzo. ¿Qué haces?', 'The first draft of differentiated paths changes the learning outcome in the remedial path. What do you do?'],
    ['Lo aceptas: el refuerzo puede exigir menos', 'Accept it: remedial can demand less', 'Todas las rutas deben llevar al mismo resultado.', 'All paths must lead to the same outcome.'],
    ['Eliminas la ruta de refuerzo', 'Delete the remedial path', 'Pierdes el apoyo a quien lo necesita.', 'You lose support for those who need it.'],
    ['Pides mantener el resultado y cambiar los apoyos', 'Keep the outcome, change the supports', 'Correcto: es el refinamiento iterativo.', 'Correct: that’s iterative refinement.', true],
    ['Empiezas un chat nuevo sin contexto', 'Start a new chat with no context', 'Pierdes lo ya construido.', 'You lose what you already built.']);

  /* ---- Dominio 3 ---- */
  Q('f315', 3, '31', ['¿Qué es **transparencia** en el uso académico de la IA?', 'What is **transparency** in academic AI use?'],
    ['Usar solo herramientas gratuitas', 'Using only free tools', 'El costo no tiene relación.', 'Cost is unrelated.'],
    ['Publicar todos los prompts en internet', 'Publishing every prompt online', 'No es necesario ni prudente.', 'It’s neither necessary nor prudent.'],
    ['Declarar cuándo y cómo se usó la IA', 'Disclosing when and how AI was used', 'Correcto: en el curso, la tesis o el artículo.', 'Correct: in the course, thesis or paper.', true],
    ['Evitar que los estudiantes usen la IA', 'Preventing students from using AI', 'Eso es prohibición, no transparencia.', 'That’s banning, not transparency.']);

  Q('f316', 3, '31', ['¿Cómo suele manifestarse una **alucinación** en un contexto académico?', 'How does a **hallucination** usually show up in an academic context?'],
    ['Como un error de ortografía', 'As a spelling mistake', 'Es más grave que un error de forma.', 'It’s more serious than a form error.'],
    ['Como una referencia que no existe', 'As a reference that doesn’t exist', 'Correcto: autor real, título plausible, artículo inexistente.', 'Correct: real author, plausible title, non-existent paper.', true],
    ['Como una respuesta demasiado corta', 'As an answer that is too short', 'La longitud no define una alucinación.', 'Length doesn’t define a hallucination.'],
    ['Como una respuesta en otro idioma', 'As an answer in another language', 'No es una alucinación.', 'It isn’t a hallucination.']);

  Q('f317', 3, '31', ['Un docente quiere cargar a Gemini un libro de texto completo con derechos de autor y compartir el notebook con un enlace público. ¿Qué riesgo identificas?', 'A professor wants to upload a full copyrighted textbook to Gemini and share the notebook via a public link. Which risk do you identify?'],
    ['Que el notebook quede demasiado grande', 'That the notebook gets too large', 'El tamaño no es el problema principal.', 'Size isn’t the main problem.'],
    ['Que los estudiantes no lo encuentren', 'That students won’t find it', 'No es un riesgo ético.', 'It isn’t an ethical risk.'],
    ['Que Gemini no entienda el libro', 'That Gemini won’t understand the book', 'No es el riesgo central.', 'It isn’t the core risk.'],
    ['Propiedad intelectual sin licencia', 'Unlicensed intellectual property', 'Correcto: respeta licencias y limita el acceso.', 'Correct: respect licences and limit access.', true]);

  Q('f318', 3, '31', ['¿Qué **riesgo** describe a un estudiante que ya no intenta resolver nada sin preguntar antes a Gemini?', 'Which **risk** describes a student who no longer tries anything without asking Gemini first?'],
    ['Sobredependencia de la IA', 'Over-reliance on AI', 'Correcto: pierde la práctica que produce aprendizaje.', 'Correct: they lose the practice that produces learning.', true],
    ['Sesgo de los datos de entrenamiento', 'Training-data bias', 'No describe el problema.', 'It doesn’t describe the problem.'],
    ['Problema de privacidad de datos', 'A data privacy problem', 'No hay exposición de datos.', 'There is no data exposure.'],
    ['Infracción de propiedad intelectual', 'An intellectual property breach', 'No hay uso indebido de obras.', 'There is no misuse of works.']);

  Q('f319', 3, '31', ['¿Qué mitigación propones frente a la **sobredependencia** de la IA en un curso?', 'Which mitigation do you propose against **over-reliance** on AI in a course?'],
    ['Exigir que usen la IA en cada tarea', 'Require AI use in every task', 'Aumentaría la dependencia.', 'It would increase dependence.'],
    ['Alternar tareas con y sin IA y reflexionar', 'Alternate tasks with/without AI, reflect', 'Correcto: desarrolla autonomía y metacognición.', 'Correct: it builds autonomy and metacognition.', true],
    ['Bloquear el wifi del campus', 'Block campus wifi', 'No educa y es poco viable.', 'It doesn’t educate and is hardly viable.'],
    ['Dar más puntos a quien use menos la IA', 'Give more points to whoever uses AI less', 'Castiga el uso en lugar de enseñarlo.', 'It punishes use instead of teaching it.']);

  Q('f320', 3, '31', ['Un resumen de Gemini para estudiantes de primer año incluye detalles clínicos explícitos innecesarios. ¿Qué analizas?', 'A Gemini summary for first-year students includes unnecessary explicit clinical details. What do you analyze?'],
    ['Si el resumen es lo bastante largo', 'Whether the summary is long enough', 'La longitud no es el problema.', 'Length isn’t the problem.'],
    ['Si usa el modelo más reciente', 'Whether it uses the newest model', 'No resuelve la adecuación.', 'It doesn’t solve suitability.'],
    ['Si es apropiado para esa audiencia', 'Whether it suits that audience', 'Correcto: objetivo 3.2.1.', 'Correct: objective 3.2.1.', true],
    ['Si tiene suficientes emojis', 'Whether it has enough emojis', 'No es un criterio académico.', 'It isn’t an academic criterion.']);

  Q('f321', 3, '31', ['Un tesista pide a Gemini que redacte toda la discusión de resultados. ¿Cuál es el dilema ético central?', 'A thesis student asks Gemini to write the whole discussion of results. What is the central ethical dilemma?'],
    ['La velocidad de la entrega', 'How fast it is delivered', 'No es el dilema central.', 'It isn’t the core dilemma.'],
    ['La autoría de la interpretación', 'Who authors the interpretation', 'Correcto: la interpretación debe ser suya y declarada.', 'Correct: the interpretation must be theirs and disclosed.', true],
    ['El formato de las referencias', 'The reference format', 'Es un tema menor.', 'It’s a minor issue.'],
    ['El costo del plan de Gemini', 'The cost of the Gemini plan', 'No es un dilema ético.', 'It isn’t an ethical dilemma.']);

  Q('f322', 3, '31', ['¿En qué tarea está **más** justificado usar Gemini?', 'In which task is using Gemini **most** justified?'],
    ['Decidir quién recibe una beca', 'Deciding who gets a scholarship', 'Decisión de alto impacto sobre personas.', 'A high-impact decision about people.'],
    ['Dictaminar un manuscrito confidencial', 'Reviewing a confidential manuscript', 'Riesgo de confidencialidad.', 'Confidentiality risk.'],
    ['Idear variantes de ejercicios de práctica', 'Brainstorming practice exercise variants', 'Correcto: bajo riesgo y fácil de verificar.', 'Correct: low risk and easy to verify.', true],
    ['Poner la nota final de una tesis', 'Setting the final grade of a thesis', 'Es tu juicio experto.', 'It’s your expert judgment.']);

  Q('f323', 3, '31', ['¿Qué actividad desarrolla mejor la **metacognición** de los estudiantes sobre su uso de la IA?', 'Which activity best develops students’ **metacognition** about their AI use?'],
    ['Una bitácora: qué acepté, qué cambié y por qué', 'A log: what I accepted, changed and why', 'Correcto: hace visible su propio razonamiento.', 'Correct: it makes their reasoning visible.', true],
    ['Un concurso de quién escribe más rápido', 'A contest of who writes fastest', 'No promueve la reflexión.', 'It doesn’t promote reflection.'],
    ['Copiar las respuestas de Gemini al cuaderno', 'Copying Gemini’s answers into a notebook', 'Es reproducción, no reflexión.', 'It’s reproduction, not reflection.'],
    ['Un examen sobre la historia de la IA', 'An exam on the history of AI', 'No trabaja sobre su propio uso.', 'It doesn’t address their own use.']);

  Q('f324', 3, '31', ['¿Qué estrategia para enseñar uso responsable de la IA es **más** eficaz?', 'Which strategy for teaching responsible AI use is **most** effective?'],
    ['Un aviso de prohibición en el sílabo', 'A ban notice in the syllabus', 'Prohibir sin explicar no forma criterio.', 'Banning without explaining doesn’t build judgment.'],
    ['Analizar en clase una alucinación real', 'Analyzing a real hallucination in class', 'Correcto: muestra el riesgo con un caso concreto.', 'Correct: it shows the risk with a concrete case.', true],
    ['Dejar que cada uno descubra los riesgos', 'Letting each student find the risks alone', 'Sin guía, muchos no los notan.', 'Without guidance, many won’t notice them.'],
    ['Repetir que la IA «siempre se equivoca»', 'Repeating that AI “is always wrong”', 'Es falso y genera desconfianza total.', 'It’s false and breeds total distrust.']);

  Q('f325', 3, '31', ['Quieres una actividad que provoque un **debate crítico** sobre el uso de la IA generativa en los trabajos del curso. ¿Qué incluye?', 'You want an activity that sparks **critical debate** on using generative AI in coursework. What does it include?'],
    ['Una charla de 60 minutos del docente', 'A 60-minute lecture by the professor', 'No hay discusión entre estudiantes.', 'There is no student discussion.'],
    ['Una lista de herramientas prohibidas', 'A list of banned tools', 'No provoca análisis.', 'It doesn’t prompt analysis.'],
    ['Un video promocional de Gemini', 'A promotional Gemini video', 'No es un artefacto para debatir.', 'It isn’t an artifact for debate.'],
    ['Un caso-dilema y una norma grupal', 'A dilemma case and a group rule', 'Correcto: artefacto instruccional (3.4.1).', 'Correct: instructional artifact (3.4.1).', true]);

  Q('f326', 3, '31', ['¿Qué plan aborda de forma **proactiva** las imprecisiones de la IA en un trabajo de investigación de estudiantes?', 'Which plan **proactively** addresses AI inaccuracies in a student research project?'],
    ['Revisar solo el producto final', 'Reviewing only the final product', 'Llega tarde para corregir el proceso.', 'It comes too late to correct the process.'],
    ['Confiar en la herramienta si cita fuentes', 'Trusting the tool if it cites sources', 'Las citas también deben verificarse.', 'Citations must be verified too.'],
    ['Verificar referencias y pedir bitácora', 'Checking references and asking for a log', 'Correcto: verificación integrada al proceso.', 'Correct: verification built into the process.', true],
    ['Bajar la nota si usaron la IA', 'Lowering the grade if they used AI', 'Castiga el uso sin abordar la precisión.', 'It punishes use without addressing accuracy.']);

  Q('f327', 3, '31', ['Un detector marca como «escrito por IA» el ensayo de un estudiante que escribe en su segunda lengua. ¿Qué haces?', 'A detector flags as “AI-written” the essay of a student writing in their second language. What do you do?'],
    ['Lo sancionas: el detector es objetivo', 'Sanction them: the detector is objective', 'Los detectores dan falsos positivos.', 'Detectors give false positives.'],
    ['Conversas y revisas sus borradores', 'Talk and review their drafts', 'Correcto: el detector no es prueba única.', 'Correct: the detector isn’t sole evidence.', true],
    ['Le pides reescribirlo sin explicación', 'Ask them to rewrite it without explanation', 'No esclarece lo ocurrido.', 'It doesn’t clarify what happened.'],
    ['Lo ignoras y no lo comentas', 'Ignore it and say nothing', 'Conviene aclararlo con el estudiante.', 'It’s best to clarify it with the student.']);
})();
