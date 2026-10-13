/* Banco 9 · Faculty (educación superior): dominios 1 y 2. fac: true = pregunta del simulacro Faculty. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, fac: true, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('f101', 1, '28', ['Un profesor de sociología necesita mapear en una tarde lo que se ha publicado sobre un tema. ¿Qué herramienta le da el mejor punto de partida?', 'A sociology professor needs to map in an afternoon what has been published on a topic. Which tool gives him the best starting point?'],
    ['Deep Research', 'Deep Research', 'Correcto: arma un plan, explora la web y entrega un informe con fuentes.', 'Correct: it builds a plan, explores the web and delivers a sourced report.', true],
    ['Nano Banana con un esquema', 'Nano Banana with a diagram', 'Crea imágenes, no mapea literatura.', 'It creates images; it doesn’t map literature.'],
    ['Gemini Live por voz', 'Gemini Live by voice', 'Conversar no produce un mapa con fuentes.', 'Talking doesn’t produce a sourced map.'],
    ['Google Vids con su deck', 'Google Vids with his deck', 'Crea videos, no investigación.', 'It creates videos, not research.']);

  Q('f102', 1, '29', ['¿Qué ejemplo corresponde a «andamiar el desarrollo curricular» en la universidad?', 'Which example corresponds to “scaffolding curriculum development” at university?'],
    ['Un sílabo alineado a competencias', 'A syllabus aligned to competencies', 'Correcto: organiza resultados, contenidos y evaluación.', 'Correct: it organizes outcomes, content and assessment.', true],
    ['Un correo a los estudiantes del curso', 'An email to the course students', 'Eso es comunicación.', 'That is communication.'],
    ['Comentarios a un borrador de tesis', 'Comments on a thesis draft', 'Eso es feedback.', 'That is feedback.'],
    ['Una imagen para la portada del curso', 'An image for the course cover', 'No organiza el currículo.', 'It doesn’t organize the curriculum.']);

  Q('f103', 1, '16', ['Según la guía Faculty, ¿qué herramientas de Google integran Gemini?', 'According to the Faculty guide, which Google tools integrate Gemini?'],
    ['Docs, Gmail, Classroom, Meet, Slides, Sheets y Vids', 'Docs, Gmail, Classroom, Meet, Slides, Sheets and Vids', 'Correcto: es la lista del objetivo 1.1.3.', 'Correct: it’s the list in objective 1.1.3.', true],
    ['Solo Gmail, Docs y Drive, sin Classroom ni Meet', 'Only Gmail, Docs and Drive, without Classroom or Meet', 'Hay muchas más integraciones.', 'There are many more integrations.'],
    ['Solo herramientas de terceros como Zoom', 'Only third-party tools like Zoom', 'La lista es de herramientas de Google.', 'The list is of Google tools.'],
    ['Ninguna: Gemini solo funciona en su app', 'None: Gemini only works in its own app', 'Gemini se integra en Workspace.', 'Gemini integrates into Workspace.']);

  Q('f104', 1, '28', ['Una investigadora quiere comparar con citas 15 artículos que ya validó. ¿Qué herramienta elige?', 'A researcher wants to compare 15 papers she has already validated, with citations. Which tool does she pick?'],
    ['Gemini Notebook', 'Gemini Notebook', 'Correcto: responde con sus fuentes y cita.', 'Correct: it answers from her sources and cites.', true],
    ['Deep Research en la web', 'Deep Research on the web', 'Buscaría fuentes nuevas; ella ya tiene las suyas.', 'It would find new sources; she already has hers.'],
    ['Veo para un video resumen', 'Veo for a summary video', 'Genera video, no análisis con citas.', 'It generates video, not cited analysis.'],
    ['Gemini Live en el móvil', 'Gemini Live on mobile', 'No compara un corpus con citas.', 'It doesn’t compare a corpus with citations.']);

  Q('f105', 1, '24', ['¿Qué situación muestra a la IA **aumentando** la labor de un profesor universitario?', 'Which situation shows AI **augmenting** a university professor’s work?'],
    ['Propone una rúbrica que el profesor ajusta', 'It proposes a rubric the professor adjusts', 'Correcto: el criterio final es del profesor.', 'Correct: the final judgment is the professor’s.', true],
    ['Califica los exámenes finales sin revisión', 'It grades final exams with no review', 'Reemplaza una decisión de alto impacto.', 'It replaces a high-impact decision.'],
    ['Escribe el artículo que el profesor firma', 'It writes the paper the professor signs', 'Reemplaza la autoría académica.', 'It replaces academic authorship.'],
    ['Responde a los estudiantes en su nombre', 'It replies to students on his behalf', 'Sustituye la relación docente.', 'It replaces the teaching relationship.']);

  Q('f106', 1, '29', ['¿Qué aporta Gemini al diseño de cursos **más allá** del chat conversacional?', 'What does Gemini add to course design **beyond** conversational chat?'],
    ['Transformar materiales en quizzes o slides', 'Turning materials into quizzes or slides', 'Correcto: con Canvas y el Studio cambia de formato.', 'Correct: with Canvas and Studio it changes format.', true],
    ['Saludar a los estudiantes cada día', 'Greeting students every day', 'No es un valor pedagógico.', 'It isn’t a teaching value.'],
    ['Mostrar el historial de chats anteriores', 'Showing the history of earlier chats', 'Es una función del app, no un valor de diseño.', 'It’s an app feature, not a design value.'],
    ['Corregir solo la ortografía del sílabo', 'Only fixing the syllabus’s spelling', 'Es un uso mínimo, no el valor principal.', 'It’s a minimal use, not the main value.']);

  Q('f107', 1, '29', ['¿Cómo facilita Gemini la diferenciación en un curso con 120 estudiantes?', 'How does Gemini make differentiation easier in a course with 120 students?'],
    ['Creando rutas de refuerzo y de profundización', 'Creating remedial and extension paths', 'Correcto: distintas rutas hacia el mismo resultado.', 'Correct: different paths to the same outcome.', true],
    ['Dando a todos el mismo material sin cambios', 'Giving everyone the same unchanged material', 'Eso no es diferenciar.', 'That isn’t differentiating.'],
    ['Eliminando los temas difíciles del curso', 'Removing the hard topics from the course', 'Diferenciar no es recortar el currículo.', 'Differentiating isn’t cutting the curriculum.'],
    ['Decidiendo quién aprueba el curso', 'Deciding who passes the course', 'Es una decisión docente.', 'It’s a teacher’s decision.']);

  Q('f108', 1, '28', ['Para ilustrar un concepto en una ponencia académica, ¿qué herramienta encaja?', 'To illustrate a concept for an academic talk, which tool fits?'],
    ['Nano Banana o Imagen', 'Nano Banana or Imagen', 'Correcto: generan imágenes a partir de una descripción.', 'Correct: they generate images from a description.', true],
    ['Deep Research con un plan', 'Deep Research with a plan', 'Investiga, no ilustra.', 'It researches; it doesn’t illustrate.'],
    ['Gemini Notebook con citas', 'Gemini Notebook with citations', 'Analiza fuentes, no crea ilustraciones.', 'It analyzes sources; it doesn’t create illustrations.'],
    ['Google Sheets con fórmulas', 'Google Sheets with formulas', 'Es para datos, no imágenes.', 'It’s for data, not images.']);

  Q('f201', 2, '28', ['Quieres los objetivos de una propuesta de financiamiento a partir de tu resumen. ¿Qué prompt es mejor?', 'You want the objectives of a funding proposal from your summary. Which prompt is better?'],
    ['«1 objetivo general y 3 medibles, solo del resumen»', '“1 general + 3 measurable objectives, summary only”', 'Correcto: estructura clara y límite a tu fuente.', 'Correct: clear structure and a limit to your source.', true],
    ['«Escribe objetivos impresionantes para ganar el fondo»', '“Write impressive objectives to win the grant”', 'Vago y sin anclaje a tu proyecto.', 'Vague and not anchored to your project.'],
    ['«Inventa resultados preliminares para hacerlo creíble»', '“Invent preliminary results to make it credible”', 'Inventar datos es una falta grave.', 'Inventing data is serious misconduct.'],
    ['«Copia los objetivos de un proyecto ya financiado»', '“Copy the objectives of an already funded project”', 'Es plagio y no responde a tu proyecto.', 'It’s plagiarism and doesn’t fit your project.']);

  Q('f202', 2, '29', ['¿Qué falta en el prompt «Hazme un sílabo de estadística»?', 'What’s missing from the prompt “Make me a statistics syllabus”?'],
    ['Nivel, créditos y competencias', 'Level, credits and competencies', 'Correcto: sin contexto disciplinar será genérico.', 'Correct: without disciplinary context it will be generic.', true],
    ['Un saludo y la palabra «por favor»', 'A greeting and the word “please”', 'La cortesía no aporta contexto.', 'Courtesy adds no context.'],
    ['La orden de usar el modelo Ultra', 'An order to use the Ultra model', 'El modelo no compensa la falta de contexto.', 'The model doesn’t make up for missing context.'],
    ['Que el texto tenga muchos emojis', 'That the text has lots of emojis', 'No es un criterio académico.', 'It isn’t an academic criterion.']);

  Q('f203', 2, '28', ['Para fundamentar la respuesta de Gemini en tus lecturas de investigación, ¿qué haces?', 'To ground Gemini’s answer in your research readings, what do you do?'],
    ['Cargarlas en un notebook', 'Load them into a notebook or attach them', 'Correcto: grounding con tus fuentes.', 'Correct: grounding with your sources.', true],
    ['Pedir que las recuerde de memoria', 'Ask it to remember them from memory', 'No las conoce si no las cargas.', 'It doesn’t know them unless you load them.'],
    ['Describirlas en una sola frase', 'Describe them in a single sentence', 'Pierde el detalle necesario.', 'It loses the necessary detail.'],
    ['Activar el tema oscuro del app', 'Turn on the app’s dark theme', 'No tiene relación.', 'It’s unrelated.']);

  Q('f204', 2, '21', ['Evalúa: ¿cuándo aporta un Video Overview más que la lectura tradicional de un artículo denso?', 'Evaluate: when does a Video Overview add more than the traditional reading of a dense paper?'],
    ['Como primer acercamiento antes de leerlo a fondo', 'As a first approach before reading it in depth', 'Correcto: acerca el contenido; la lectura sigue siendo clave.', 'Correct: it brings the content closer; reading remains key.', true],
    ['Siempre, porque reemplaza la lectura completa', 'Always, because it replaces full reading', 'Es complemento, no sustituto.', 'It’s a complement, not a substitute.'],
    ['Como evaluación final del curso', 'As the course’s final assessment', 'Un video no evalúa el aprendizaje.', 'A video doesn’t assess learning.'],
    ['Nunca: los videos no sirven en la universidad', 'Never: videos are useless at university', 'Pueden ser útiles si se integran bien.', 'They can be useful if integrated well.']);

  Q('f205', 2, '29', ['¿Qué tarea frecuente automatiza **mejor** un Gem en un curso universitario?', 'Which frequent task does a Gem automate **best** in a university course?'],
    ['Andamiar las revisiones de literatura', 'Scaffolding literature reviews', 'Correcto: es un ejemplo de la guía Faculty (2.3.3).', 'Correct: it’s an example from the Faculty guide (2.3.3).', true],
    ['Una pregunta puntual que no se repite', 'A one-off question that won’t recur', 'Para algo puntual basta un chat.', 'For a one-off, a chat is enough.'],
    ['Publicar las notas finales del curso', 'Publishing the course’s final grades', 'Es una decisión docente de alto impacto.', 'It’s a high-impact teacher decision.'],
    ['Firmar las actas de evaluación', 'Signing the assessment records', 'No es una tarea para la IA.', 'It isn’t a task for AI.']);

  Q('f206', 2, '29', ['Quieres un seminario de 90 minutos. ¿Qué pides a Gemini?', 'You want a 90-minute seminar. What do you ask Gemini for?'],
    ['Momentos, tiempos y producto de cada uno', 'Stages, timings and outputs', 'Correcto: una estructura accionable y verificable.', 'Correct: an actionable, checkable structure.', true],
    ['Una lista larga de temas sin orden', 'A long, unordered list of topics', 'No organiza la sesión.', 'It doesn’t organize the session.'],
    ['Un resumen del curso completo', 'A summary of the whole course', 'No es la estructura de un seminario.', 'It isn’t a seminar structure.'],
    ['Una imagen para la diapositiva inicial', 'An image for the opening slide', 'Útil, pero no estructura el seminario.', 'Useful, but it doesn’t structure the seminar.']);

  Q('f207', 2, '18', ['Con un plan de pago, quieres una evaluación a partir de tus slides del curso. ¿Qué herramienta usas?', 'With a paid plan, you want an assessment from your course slides. Which tool do you use?'],
    ['Gemini en Google Forms', 'Gemini in Google Forms', 'Correcto: genera evaluaciones a partir de un Doc o Slide.', 'Correct: it generates assessments from a Doc or Slide.', true],
    ['Nano Banana en el chat', 'Nano Banana in the chat', 'Crea imágenes, no evaluaciones.', 'It creates images, not assessments.'],
    ['Gemini Live por voz', 'Gemini Live by voice', 'No genera formularios.', 'It doesn’t generate forms.'],
    ['Google Vids con avatar', 'Google Vids with an avatar', 'Crea videos, no evaluaciones.', 'It creates videos, not assessments.']);

  Q('f208', 2, '28', ['Deep Research te dio un informe con 30 fuentes. ¿Cuál es el siguiente paso más riguroso?', 'Deep Research gave you a report with 30 sources. What is the most rigorous next step?'],
    ['Leer y validar las fuentes clave', 'Read and validate the key sources', 'Correcto: luego cargas las validadas en un notebook.', 'Correct: then you load the validated ones into a notebook.', true],
    ['Copiar el informe en tu artículo', 'Copy the report into your paper', 'Sería plagio y sin verificación.', 'It would be plagiarism, unverified.'],
    ['Citar las 30 fuentes sin abrirlas', 'Cite all 30 sources without opening them', 'Pueden existir errores o alucinaciones.', 'There may be errors or hallucinations.'],
    ['Pedir otro informe hasta tener 100', 'Request another report until you have 100', 'Más fuentes no es más rigor.', 'More sources isn’t more rigour.']);

  Q('f209', 2, '29', ['Generaste rutas diferenciadas para una unidad difícil. ¿Qué revisas antes de publicarlas?', 'You generated differentiated paths for a hard unit. What do you check before publishing them?'],
    ['Que todas apunten al mismo resultado', 'That all aim at the same outcome', 'Correcto: diferenciar no es bajar expectativas.', 'Correct: differentiating isn’t lowering expectations.', true],
    ['Que tengan el mismo número de palabras', 'That they have the same word count', 'La extensión no es el criterio.', 'Length isn’t the criterion.'],
    ['Que usen el mismo color de fondo', 'That they use the same background colour', 'No es un criterio pedagógico.', 'It isn’t a teaching criterion.'],
    ['Que la IA elija qué estudiante va a cada ruta', 'That AI chooses which student takes each path', 'Esa decisión es tuya.', 'That decision is yours.']);

  Q('f210', 2, '03', ['¿Desde dónde puede un profesor iniciar una conversación con Gemini Notebook fuera de la computadora?', 'From where can a professor start a Gemini Notebook conversation away from the computer?'],
    ['Desde su app móvil', 'From its mobile app', 'Correcto: la guía menciona la app móvil (2.1.1).', 'Correct: the guide mentions the mobile app (2.1.1).', true],
    ['Solo desde una sala de cómputo', 'Only from a computer lab', 'No es así.', 'That isn’t so.'],
    ['Enviando un correo a Google', 'By emailing Google', 'No funciona por correo.', 'It doesn’t work by email.'],
    ['Desde la impresora de la facultad', 'From the faculty printer', 'No tiene relación.', 'It’s unrelated.']);

  Q('f211', 2, '29', ['¿Qué estrategia de prompt es más efectiva para una rúbrica de proyecto final universitario?', 'Which prompt strategy is most effective for a university final-project rubric?'],
    ['Criterios del sílabo, niveles y formato', 'Syllabus criteria, levels and format', 'Correcto: aplica PARTS con contexto y límites.', 'Correct: it applies PARTS with context and limits.', true],
    ['«Hazla lo más exigente posible»', '“Make it as demanding as possible”', 'Exigencia sin criterios no sirve.', 'Demand without criteria doesn’t help.'],
    ['«Que sea creativa y sorprendente»', '“Make it creative and surprising”', 'No es el objetivo de una rúbrica.', 'That isn’t a rubric’s goal.'],
    ['«Copia la rúbrica de otra universidad»', '“Copy another university’s rubric”', 'No se alinea a tu curso.', 'It doesn’t align to your course.']);

  Q('f212', 2, '15', ['Con un plan de pago, quieres convertir tu clase en Slides en un video con guion y voz. ¿Qué herramienta usas?', 'With a paid plan, you want to turn your Slides lecture into a video with script and voice. Which tool do you use?'],
    ['Google Vids', 'Google Vids', 'Correcto: objetivo 2.3.4 de la guía Faculty.', 'Correct: objective 2.3.4 of the Faculty guide.', true],
    ['Gemini Notebook', 'Gemini Notebook', 'Sus Video Overviews resumen fuentes, no convierten tu deck.', 'Its Video Overviews summarize sources; they don’t convert your deck.'],
    ['Deep Research', 'Deep Research', 'Investiga en la web.', 'It researches the web.'],
    ['Google Sheets', 'Google Sheets', 'Es para hojas de cálculo.', 'It’s for spreadsheets.']);
})();
