/* Banco 11 · Faculty (educación superior): dominio 1 completo y parte del dominio 2. fac: true = pregunta del simulacro Faculty. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, fac: true, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('f115', 1, '27', ['¿Qué define mejor a un **modelo de lenguaje grande (LLM)**?', 'What best defines a **large language model (LLM)**?'],
    ['Una base de datos que guarda artículos académicos', 'A database that stores academic papers', 'No almacena documentos para consultarlos.', 'It doesn’t store documents to look them up.'],
    ['Un modelo que predice el siguiente token del texto', 'A model that predicts the next token of text', 'Correcto: aprende patrones de grandes cantidades de texto.', 'Correct: it learns patterns from huge amounts of text.', true],
    ['Un buscador que copia párrafos de páginas web', 'A search engine that copies web paragraphs', 'Genera texto nuevo, no copia párrafos.', 'It generates new text; it doesn’t copy paragraphs.'],
    ['Un programa que corrige solo la ortografía', 'A program that only fixes spelling', 'Hace mucho más que corregir ortografía.', 'It does far more than fix spelling.']);

  Q('f116', 1, '27', ['Un rector pregunta qué distingue a la IA generativa del sistema de alerta temprana de deserción que ya usa la universidad. ¿Qué respondes?', 'A rector asks what distinguishes generative AI from the university’s existing early-warning dropout system. What do you answer?'],
    ['La generativa solo funciona con datos numéricos', 'Generative AI only works with numerical data', 'Trabaja con texto, imagen, audio, video y código.', 'It works with text, image, audio, video and code.'],
    ['Ninguna diferencia: ambas son el mismo tipo de IA', 'No difference: both are the same kind of AI', 'Una predice y la otra crea.', 'One predicts and the other creates.'],
    ['La generativa crea contenido; la otra predice', 'Generative AI creates content; the other predicts', 'Correcto: la alerta temprana clasifica a partir de datos.', 'Correct: early warning classifies from data.', true],
    ['La generativa nunca comete errores', 'Generative AI never makes mistakes', 'Puede alucinar: siempre requiere revisión.', 'It can hallucinate: it always needs review.']);

  Q('f117', 1, '27', ['¿Qué herramienta de Google con Gemini usarías para obtener las notas y los acuerdos de una reunión de tu grupo de investigación?', 'Which Google tool with Gemini would you use to get the notes and decisions from your research group meeting?'],
    ['Meet', 'Meet', 'Correcto: Gemini en Meet puede tomar notas (según tu plan).', 'Correct: Gemini in Meet can take notes (depending on your plan).', true],
    ['Sheets', 'Sheets', 'Sirve para datos, no para registrar reuniones.', 'It’s for data, not for recording meetings.'],
    ['Vids', 'Vids', 'Crea videos, no notas de reunión.', 'It creates videos, not meeting notes.'],
    ['Classroom', 'Classroom', 'Gestiona cursos, no reuniones de investigación.', 'It manages courses, not research meetings.']);

  Q('f118', 1, '27', ['Un docente de Arquitectura quiere un clip breve que muestre cómo cambia la luz en un edificio durante el día. ¿Qué herramienta encaja mejor?', 'An Architecture professor wants a short clip showing how light changes in a building during the day. Which tool fits best?'],
    ['Gemini Notebook con sus planos', 'Gemini Notebook with his plans', 'Analiza fuentes; no genera video.', 'It analyzes sources; it doesn’t generate video.'],
    ['Deep Research sobre iluminación', 'Deep Research on lighting', 'Entrega un informe escrito.', 'It delivers a written report.'],
    ['Un Gem de tutoría', 'A tutoring Gem', 'Es un asistente de texto.', 'It’s a text assistant.'],
    ['Veo', 'Veo', 'Correcto: genera clips de video desde texto o imágenes.', 'Correct: it generates video clips from text or images.', true]);

  Q('f119', 1, '27', ['¿Qué tarea encaja mejor con **Canvas** en la Gemini app?', 'Which task best fits **Canvas** in the Gemini app?'],
    ['Buscar fuentes nuevas en la web con un plan', 'Finding new web sources with a plan', 'Eso es Deep Research.', 'That’s Deep Research.'],
    ['Co-crear un simulador interactivo para clase', 'Co-creating an interactive class simulator', 'Correcto: Canvas crea y edita apps, código y documentos.', 'Correct: Canvas creates and edits apps, code and documents.', true],
    ['Responder solo desde 30 PDF con citas', 'Answering only from 30 PDFs with citations', 'Eso es Gemini Notebook.', 'That’s Gemini Notebook.'],
    ['Tomar notas de una reunión por video', 'Taking notes from a video meeting', 'Eso es Gemini en Meet.', 'That’s Gemini in Meet.']);

  Q('f120', 1, '27', ['¿Qué punto de integración describe «generar comentarios para cada uno de 90 ensayos con la rúbrica del curso»?', 'Which integration point describes “generating comments on each of 90 essays with the course rubric”?'],
    ['Andamiar el desarrollo curricular', 'Scaffolding curriculum development', 'No diseña el currículo.', 'It doesn’t design the curriculum.'],
    ['Facilitar comunicación compleja', 'Facilitating complex communication', 'No es un comunicado general.', 'It isn’t a general notice.'],
    ['Escalar la diferenciación', 'Scaling differentiation', 'No crea rutas de aprendizaje.', 'It doesn’t create learning paths.'],
    ['Automatizar feedback personalizado', 'Automating personalized feedback', 'Correcto: comentarios a escala, revisados por ti.', 'Correct: comments at scale, reviewed by you.', true]);

  Q('f121', 1, '27', ['Una docente usa Gemini para proponer preguntas de una tutoría de tesis y luego conduce ella la sesión. ¿Cómo se clasifica este uso?', 'A professor uses Gemini to propose thesis-advising questions and then leads the session herself. How is this use classified?'],
    ['IA que reemplaza la labor docente', 'AI replacing the faculty work', 'Ella conserva el rol central.', 'She keeps the central role.'],
    ['IA que aumenta la labor docente', 'AI augmenting the faculty work', 'Correcto: la IA prepara; ella decide y acompaña.', 'Correct: AI prepares; she decides and mentors.', true],
    ['Un uso no permitido por la guía', 'A use not allowed by the guide', 'Es un uso apropiado.', 'It’s an appropriate use.'],
    ['Una conducta académica indebida', 'Academic misconduct', 'No hay falta de integridad.', 'There is no integrity breach.']);

  Q('f122', 1, '27', ['Un profesor quiere usar Gemini para preparar material con datos de su investigación. ¿Qué cuenta le da más protección de datos?', 'A professor wants to use Gemini to prepare material with his research data. Which account gives more data protection?'],
    ['Una cuenta personal recién creada', 'A newly created personal account', 'No tiene las protecciones educativas.', 'It lacks education protections.'],
    ['La cuenta de un estudiante asistente', 'A student assistant’s account', 'No resuelve la protección y confunde la responsabilidad.', 'It doesn’t solve protection and blurs responsibility.'],
    ['Su cuenta de Workspace for Education', 'His Workspace for Education account', 'Correcto: los datos no entrenan modelos ni los revisan personas.', 'Correct: data doesn’t train models and humans don’t review it.', true],
    ['Cualquiera: todas protegen igual', 'Any: they all protect the same', 'Las garantías cambian según la cuenta.', 'Guarantees differ by account.']);

  Q('f123', 1, '27', ['¿Cuál de estas herramientas está disponible **sin costo** en Workspace for Education?', 'Which of these tools is available **at no cost** in Workspace for Education?'],
    ['Gemini dentro de Gmail', 'Gemini inside Gmail', 'Requiere un plan como AI Pro for Education.', 'It requires a plan such as AI Pro for Education.'],
    ['Gemini Notebook', 'Gemini Notebook', 'Correcto: junto con la Gemini app y Gemini in Classroom.', 'Correct: along with the Gemini app and Gemini in Classroom.', true],
    ['Gemini dentro de Vids', 'Gemini inside Vids', 'Es una función de pago.', 'It’s a paid feature.'],
    ['Gemini dentro de Forms', 'Gemini inside Forms', 'Es una función de pago.', 'It’s a paid feature.']);

  Q('f124', 1, '27', ['¿Qué ejemplo muestra el valor de Gemini para **andamiar** el aprendizaje de un estudiante universitario?', 'Which example shows Gemini’s value for **scaffolding** a university student’s learning?'],
    ['Entregar la solución completa del problema', 'Giving the full solution to the problem', 'Elimina el esfuerzo que produce aprendizaje.', 'It removes the effort that produces learning.'],
    ['Repetir la misma explicación más despacio', 'Repeating the same explanation more slowly', 'No ajusta los apoyos al progreso.', 'It doesn’t adjust support to progress.'],
    ['Corregir solo el formato de sus citas', 'Only fixing the format of their citations', 'Es un apoyo puntual, no andamiaje.', 'It’s a one-off fix, not scaffolding.'],
    ['Dar pistas que se retiran a medida que avanza', 'Giving hints that fade as they progress', 'Correcto: es lo que hace Guided Learning.', 'Correct: that’s what Guided Learning does.', true]);

  Q('f125', 1, '29', ['¿Qué ejemplo corresponde a «**aumentar el diseño de evaluaciones**»?', 'Which example corresponds to “**augmenting assessment design**”?'],
    ['Redactar el anuncio de inicio de clases', 'Drafting the start-of-term announcement', 'Es comunicación.', 'That’s communication.'],
    ['Proponer casos para el examen parcial', 'Proposing cases for the midterm exam', 'Correcto: apoya el diseño; tú validas.', 'Correct: it supports design; you validate.', true],
    ['Organizar la bibliografía del sílabo', 'Organizing the syllabus bibliography', 'Es parte del desarrollo curricular.', 'It’s part of curriculum development.'],
    ['Crear rutas de refuerzo para un tema', 'Creating remedial paths for a topic', 'Es diferenciación.', 'That’s differentiation.']);

  Q('f126', 1, '27', ['En el examen aparece «Imagen 4». ¿Qué debes recordar hoy?', '“Imagen 4” appears in the exam. What should you remember today?'],
    ['Es un modelo de video para Vids', 'It’s a video model for Vids', 'Imagen genera imágenes, no video.', 'Imagen generates images, not video.'],
    ['Es la app móvil de Gemini Notebook', 'It’s the Gemini Notebook mobile app', 'No tiene relación con Notebook.', 'It’s unrelated to Notebook.'],
    ['Es un modelo de imagen de Google', 'It’s a Google image model', 'Correcto: hoy la Gemini app crea imágenes con Nano Banana.', 'Correct: today the Gemini app creates images with Nano Banana.', true],
    ['Es la versión de pago de Deep Research', 'It’s the paid version of Deep Research', 'No es una función de investigación.', 'It isn’t a research feature.']);

  Q('f127', 1, '27', ['Un profesor nuevo pregunta qué evalúa el dominio 1 del Faculty. ¿Qué respuesta es la más precisa?', 'A new professor asks what Faculty domain 1 assesses. Which answer is most accurate?'],
    ['Programar aplicaciones con la API de Gemini', 'Programming apps with the Gemini API', 'No es un examen técnico de desarrollo.', 'It isn’t a technical development exam.'],
    ['Conceptos de IA y Gemini para enseñar', 'AI concepts and Gemini for teaching', 'Correcto: fundamentos y capacidades en la academia.', 'Correct: foundations and capabilities in academia.', true],
    ['Solo la ética y la privacidad de datos', 'Only ethics and data privacy', 'Eso es sobre todo el dominio 3.', 'That’s mostly domain 3.'],
    ['Solo la creación de Gems y de videos', 'Only creating Gems and videos', 'Eso pertenece al dominio 2.', 'That belongs to domain 2.']);

  /* ---- Dominio 2 ---- */
  Q('f215', 2, '30', ['Un profesor quiere escuchar las lecturas de su notebook mientras viaja. ¿Dónde lo hace?', 'A professor wants to listen to his notebook’s readings while travelling. Where does he do it?'],
    ['En el panel de Gemini dentro de Sheets', 'In the Gemini panel inside Sheets', 'No reproduce resúmenes en audio de un notebook.', 'It doesn’t play audio summaries of a notebook.'],
    ['En la app móvil de Gemini Notebook', 'In the Gemini Notebook mobile app', 'Correcto: allí escucha su Audio Overview.', 'Correct: he listens to his Audio Overview there.', true],
    ['En Gemini in Classroom, como tarea', 'In Gemini in Classroom, as an assignment', 'No es una tarea para estudiantes.', 'It isn’t a student assignment.'],
    ['En Google Vids, desde un video', 'In Google Vids, from a video', 'Vids crea videos; no reproduce su notebook.', 'Vids creates videos; it doesn’t play his notebook.']);

  Q('f216', 2, '28', ['Quieres que Gemini responda sobre tus 8 artículos **sin** usar su conocimiento general. ¿Qué indicas en el prompt?', 'You want Gemini to answer about your 8 papers **without** using its general knowledge. What do you state in the prompt?'],
    ['«Responde de forma creativa y extensa»', '“Answer creatively and at length”', 'Favorece el relleno con conocimiento externo.', 'It encourages filling in with outside knowledge.'],
    ['«Busca más fuentes nuevas en la web»', '“Search for more new sources on the web”', 'Saldría de tus fuentes.', 'It would leave your sources.'],
    ['«Solo estas fuentes; avisa si falta algo»', '“Only these sources; flag any gaps”', 'Correcto: limita la respuesta y muestra los vacíos.', 'Correct: it bounds the answer and shows gaps.', true],
    ['«Usa tu mejor criterio académico»', '“Use your best academic judgment”', 'No restringe las fuentes.', 'It doesn’t restrict the sources.']);

  Q('f217', 2, '28', ['¿Qué prompt formula mejor los objetivos de una **propuesta de financiamiento**?', 'Which prompt best drafts the objectives of a **grant proposal**?'],
    ['«Escribe objetivos para mi proyecto»', '“Write objectives for my project”', 'Sin resumen ni criterios, saldrá genérico.', 'Without a summary or criteria, it will be generic.'],
    ['«Inventa resultados preliminares convincentes»', '“Invent convincing preliminary results”', 'Inventar resultados es una falta grave.', 'Inventing results is serious misconduct.'],
    ['«Hazlos lo más ambiciosos posible»', '“Make them as ambitious as possible”', 'La ambición sin medida no es evaluable.', 'Unmeasured ambition isn’t assessable.'],
    ['«Objetivos medibles desde este resumen»', '“Measurable objectives from this summary”', 'Correcto: contexto, verbos medibles y sin inventar.', 'Correct: context, measurable verbs and nothing invented.', true]);

  Q('f218', 2, '28', ['Gemini entrega una síntesis de literatura sin citas. ¿Cuál es el mejor siguiente paso?', 'Gemini delivers a literature synthesis with no citations. What is the best next step?'],
    ['Pedir que cite cada afirmación', 'Ask it to cite every claim', 'Correcto: refinas para cumplir el estándar académico.', 'Correct: you refine it to meet the academic standard.', true],
    ['Usarla tal cual en el marco teórico', 'Use it as is in the theoretical framework', 'Sin citas no es utilizable académicamente.', 'Without citations it isn’t academically usable.'],
    ['Pedir que la haga más larga', 'Ask it to make it longer', 'La extensión no aporta trazabilidad.', 'Length doesn’t add traceability.'],
    ['Agregar citas de memoria al final', 'Add citations from memory at the end', 'Puede atribuir ideas a fuentes equivocadas.', 'It may attribute ideas to the wrong sources.']);

  Q('f219', 2, '29', ['¿Qué estructura de seminario pediría un docente universitario con un prompt eficaz?', 'Which seminar structure would a university professor request with an effective prompt?'],
    ['«Una clase entretenida sobre el tema»', '“An entertaining class on the topic”', 'No indica tiempos ni productos.', 'It gives no timings or outputs.'],
    ['«Lo mismo que hice el año pasado»', '“The same as I did last year”', 'Gemini no conoce tu clase anterior.', 'Gemini doesn’t know your previous class.'],
    ['Lectura, debate por roles y plenaria', 'Pre-reading, role debate, plenary', 'Correcto: momentos, tiempos y productos claros.', 'Correct: clear stages, timings and outputs.', true],
    ['«Muchas actividades para llenar 90 minutos»', '“Lots of activities to fill 90 minutes”', 'Llenar tiempo no es diseñar aprendizaje.', 'Filling time isn’t designing learning.']);

  Q('f220', 2, '29', ['¿Qué rasgo distingue a una rúbrica **útil** generada con Gemini?', 'Which trait distinguishes a **useful** rubric generated with Gemini?'],
    ['Usa adjetivos como «bueno» o «adecuado»', 'It uses adjectives like “good” or “adequate”', 'Son vagos y difíciles de aplicar.', 'They’re vague and hard to apply.'],
    ['Tiene descriptores observables por nivel', 'It has observable descriptors per level', 'Correcto: permite evaluar con consistencia.', 'Correct: it enables consistent assessment.', true],
    ['Tiene el mayor número posible de criterios', 'It has as many criteria as possible', 'Más criterios no la hacen más clara.', 'More criteria don’t make it clearer.'],
    ['No indica el peso de los criterios', 'It doesn’t state criterion weights', 'Los pesos ayudan a calificar con justicia.', 'Weights help grade fairly.']);

  Q('f221', 2, '29', ['Has creado un Gem que andamia revisiones de literatura. ¿Qué paso falta para que tus estudiantes lo usen?', 'You created a Gem that scaffolds literature reviews. Which step is missing for your students to use it?'],
    ['Pedirle que se vuelva más amable', 'Asking it to be friendlier', 'No lo pone a disposición de nadie.', 'It doesn’t make it available to anyone.'],
    ['Copiar sus instrucciones en el sílabo', 'Copying its instructions into the syllabus', 'Leer las instrucciones no es usar el Gem.', 'Reading instructions isn’t using the Gem.'],
    ['Probarlo una vez y archivarlo', 'Testing it once and archiving it', 'No lo despliega.', 'It doesn’t deploy it.'],
    ['Compartirlo y explicar su uso y límites', 'Sharing it and explaining its use and limits', 'Correcto: diseñar y desplegar (2.3.3).', 'Correct: design and deploy (2.3.3).', true]);
})();
