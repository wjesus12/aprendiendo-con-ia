/* Banco 8 · Student: temas de la certificación para estudiantes y del examen. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b801', 'S', '10', ['Tienes examen de física y no entiendes un tema. ¿Qué uso de Gemini te ayuda a **aprender**?', 'You have a physics exam and don’t understand a topic. Which Gemini use helps you **learn**?'],
    ['Guided Learning', 'Guided Learning', 'Correcto: te guía con preguntas paso a paso.', 'Correct: it guides you with step-by-step questions.', true],
    ['Pedir las respuestas del examen', 'Asking for the exam answers', 'No aprendes y faltas a la integridad.', 'You don’t learn and breach integrity.'],
    ['Copiar un resumen sin leerlo', 'Copying a summary without reading it', 'No construyes comprensión.', 'You build no understanding.'],
    ['Generar una imagen del tema', 'Generating an image of the topic', 'Una imagen sola no explica el tema.', 'An image alone doesn’t explain the topic.']);

  Q('b802', 'S', '20', ['Quieres repasar tus apuntes y las lecturas del curso con preguntas que citen la fuente. ¿Qué usas?', 'You want to review your notes and course readings with questions that cite the source. What do you use?'],
    ['Gemini Notebook', 'Gemini Notebook', 'Correcto: responde con tus fuentes y crea quizzes y flashcards.', 'Correct: it answers from your sources and makes quizzes and flashcards.', true],
    ['Nano Banana', 'Nano Banana', 'Es para imágenes.', 'It’s for images.'],
    ['Google Vids', 'Google Vids', 'Es para crear videos.', 'It’s for making videos.'],
    ['Gemini Live sin fuentes', 'Gemini Live without sources', 'No usaría tus apuntes como fuente.', 'It wouldn’t use your notes as a source.']);

  Q('b803', 'S', '25', ['Usaste Gemini para ordenar ideas de tu ensayo, y tu docente permite ese uso. ¿Qué debes hacer?', 'You used Gemini to organize ideas for your essay, and your teacher allows that use. What should you do?'],
    ['Declarar cómo lo usaste', 'Disclose how you used it', 'Correcto: transparencia e integridad académica.', 'Correct: transparency and academic integrity.', true],
    ['Ocultarlo para no perder puntos', 'Hide it so you don’t lose points', 'Ocultar el uso va contra la integridad.', 'Hiding the use goes against integrity.'],
    ['Copiar tal cual lo que generó', 'Copy exactly what it generated', 'Dejaría de ser tu trabajo.', 'It would no longer be your work.'],
    ['Borrar el chat por si acaso', 'Delete the chat just in case', 'Borrar evidencia no es transparente.', 'Deleting evidence isn’t transparent.']);

  Q('b804', 'S', '05', ['Gemini te dio un dato para tu tarea que te parece raro. ¿Qué haces?', 'Gemini gave you a fact for your homework that seems odd. What do you do?'],
    ['Lo verifico en una fuente confiable', 'I check it in a reliable source', 'Correcto: la IA puede alucinar.', 'Correct: AI can hallucinate.', true],
    ['Lo uso: la IA no se equivoca', 'Use it: AI doesn’t make mistakes', 'La IA sí puede equivocarse.', 'AI can be wrong.'],
    ['Le pido que lo repita más fuerte', 'Ask it to repeat it louder', 'Repetir no lo hace cierto.', 'Repeating doesn’t make it true.'],
    ['Lo cambio por otro dato inventado', 'Swap it for another made-up fact', 'Empeora el problema.', 'It makes the problem worse.']);

  Q('b805', 'S', '06', ['¿Cuál es el mejor prompt para entender un tema difícil?', 'Which is the best prompt to understand a hard topic?'],
    ['«Explica la mitosis con un ejemplo; tengo 15»', '“Explain mitosis with an example; I’m 15”', 'Correcto: tema, nivel y formato claros.', 'Correct: clear topic, level and format.', true],
    ['«Mitosis»', '“Mitosis”', 'Muy vago: no dice qué necesitas.', 'Too vague: it doesn’t say what you need.'],
    ['«Haz mi tarea de biología completa»', '“Do my whole biology homework”', 'No aprendes y faltas a la integridad.', 'You don’t learn and breach integrity.'],
    ['«Dime todo lo que sepas sobre la biología»', '“Tell me everything you know about biology”', 'Demasiado amplio.', 'Too broad.']);

  Q('b806', 'S', '25', ['¿Qué información **no** deberías escribir en un chat con IA?', 'Which information should you **not** type into an AI chat?'],
    ['Tus contraseñas y datos personales', 'Your passwords and personal data', 'Correcto: protege tu privacidad.', 'Correct: protect your privacy.', true],
    ['Una pregunta sobre fotosíntesis', 'A question about photosynthesis', 'Es un uso normal.', 'It’s a normal use.'],
    ['Un párrafo de tu propio ensayo', 'A paragraph of your own essay', 'Puedes pedir retroalimentación sobre tu texto.', 'You can ask for feedback on your text.'],
    ['El tema de tu exposición', 'Your presentation topic', 'Es un uso normal.', 'It’s a normal use.']);

  Q('b807', 'S', '01', ['¿Qué diferencia a la IA **generativa** de otras IA que usas, como las recomendaciones de videos?', 'What sets **generative** AI apart from other AI you use, like video recommendations?'],
    ['Crea contenido nuevo', 'It creates new content', 'Correcto: texto, imágenes, código…', 'Correct: text, images, code…', true],
    ['Funciona solo sin internet', 'It only works offline', 'No es la diferencia.', 'That isn’t the difference.'],
    ['Solo sirve para jugar', 'It’s only for games', 'Tiene muchos usos.', 'It has many uses.'],
    ['Nunca comete errores', 'It never makes mistakes', 'Sí puede equivocarse.', 'It can make mistakes.']);

  Q('b808', 'S', '24', ['Tu tarea es **escribir** un cuento para practicar redacción. ¿Cómo usas Gemini de forma responsable?', 'Your task is to **write** a story to practise writing. How do you use Gemini responsibly?'],
    ['Pido ideas o feedback y escribo yo', 'I ask for ideas or feedback, and I write', 'Correcto: la escritura sigue siendo tuya.', 'Correct: the writing stays yours.', true],
    ['Le pido que escriba el cuento por mí', 'I ask it to write the whole story for me', 'No practicas la habilidad.', 'You don’t practise the skill.'],
    ['Copio un cuento de internet', 'I copy a story from the internet', 'Es plagio.', 'That’s plagiarism.'],
    ['No hago la tarea', 'I don’t do the task', 'No es una opción responsable.', 'Not a responsible option.']);

  Q('b809', 'S', '21', ['Quieres repasar en el bus los temas de tu curso. ¿Qué función del Studio te sirve?', 'You want to review your course topics on the bus. Which Studio feature helps?'],
    ['Audio Overview', 'Audio Overview', 'Correcto: un resumen tipo pódcast de tus fuentes.', 'Correct: a podcast-style summary of your sources.', true],
    ['Data Tables', 'Data Tables', 'Son tablas para comparar, no para escuchar.', 'They’re comparison tables, not for listening.'],
    ['Code view', 'Code view', 'Es para ver código en Canvas.', 'It’s for viewing code in Canvas.'],
    ['Share & export', 'Share & export', 'Es para compartir o exportar.', 'It’s for sharing or exporting.']);

  Q('b810', 'S', '25', ['Un compañero usa IA para crear una imagen burlándose de otro estudiante. ¿Qué principio rompe?', 'A classmate uses AI to make an image mocking another student. Which principle does he break?'],
    ['Responsabilidad digital', 'Digital responsibility', 'Correcto: daña a una persona real sin consentimiento.', 'Correct: it harms a real person without consent.', true],
    ['Velocidad de respuesta', 'The speed of the response', 'No es un principio ético.', 'It isn’t an ethical principle.'],
    ['Formato de salida', 'The format of the output', 'No tiene relación.', 'It’s unrelated.'],
    ['Ventana de contexto', 'Context window', 'Es un concepto técnico.', 'It’s a technical concept.']);

  Q('b811', 'S', '09', ['Para un trabajo de investigación usas Deep Research. ¿Qué haces con el informe?', 'For a research project you use Deep Research. What do you do with the report?'],
    ['Leo y verifico sus fuentes', 'I read and verify its sources', 'Correcto: y citas lo que usas.', 'Correct: and cite what you use.', true],
    ['Lo entrego como si fuera mío', 'I hand it in as my own', 'Es plagio.', 'That’s plagiarism.'],
    ['Copio solo las conclusiones', 'I copy only the conclusions', 'Sin leer ni citar, sigue siendo plagio.', 'Without reading or citing, it’s still plagiarism.'],
    ['Lo ignoro y no cito nada', 'I ignore it and cite nothing', 'Pierdes la oportunidad de aprender de él.', 'You miss the chance to learn from it.']);

  Q('b812', 'S', '25', ['¿Qué es la **integridad académica** cuando usas IA?', 'What is **academic integrity** when you use AI?'],
    ['Ser honesto sobre cómo la usaste', 'Being honest about how you used it', 'Correcto: transparencia y trabajo propio.', 'Correct: transparency and your own work.', true],
    ['No usarla nunca bajo ninguna razón', 'Never using it for any reason', 'Puede usarse de forma honesta y permitida.', 'It can be used honestly and as allowed.'],
    ['Usarla solo si nadie se entera', 'Using it only if no one finds out', 'Es lo contrario de la integridad.', 'It’s the opposite of integrity.'],
    ['Pedir a la IA que firme el trabajo', 'Asking AI to sign the work', 'No tiene sentido.', 'It makes no sense.']);

  Q('b813', 'S', '26', ['¿Qué rango de edad tiene la certificación K-12 de Gemini para estudiantes?', 'What age range does the K-12 Gemini certification for students cover?'],
    ['13 a 17 años', '13 to 17', 'Correcto: y requiere completar un curso antes.', 'Correct: and it requires completing a course first.', true],
    ['6 a 10 años', '6 to 10', 'No corresponde.', 'That’s not it.'],
    ['Solo mayores de 25', 'Only over 25', 'No corresponde.', 'That’s not it.'],
    ['Cualquier edad sin requisito', 'Any age, no requirement', 'Hay un rango y un curso previo.', 'There’s a range and a prior course.']);

  Q('b814', 'S', '26', ['¿Qué debes completar antes de rendir la certificación K-12 para estudiantes?', 'What must you complete before taking the K-12 student certification?'],
    ['Un curso fundacional', 'A foundational course', 'Correcto: luego se habilita la evaluación.', 'Correct: then the assessment unlocks.', true],
    ['Un examen previo de inglés', 'A prior English-language exam', 'No es un requisito.', 'It isn’t a requirement.'],
    ['Un pago de inscripción', 'A registration fee', 'No es el requisito descrito.', 'That isn’t the described requirement.'],
    ['Un proyecto en video', 'A video project', 'No es un requisito.', 'It isn’t a requirement.']);

  Q('b815', 'S', '26', ['¿Cómo es la evaluación de la certificación para estudiantes universitarios?', 'What is the university student certification’s assessment like?'],
    ['Opción múltiple, 2 horas', 'Multiple choice, 2 hours', 'Correcto: según el FAQ oficial.', 'Correct: per the official FAQ.', true],
    ['Un ensayo de 10 páginas', 'A written 10-page essay', 'No es el formato.', 'That isn’t the format.'],
    ['Una entrevista oral', 'An oral interview with a panel', 'No es el formato.', 'That isn’t the format.'],
    ['Un proyecto grupal', 'A group project', 'No es el formato.', 'That isn’t the format.']);

  Q('b816', 'S', '10', ['¿Por qué Guided Learning hace preguntas en lugar de darte la respuesta?', 'Why does Guided Learning ask questions instead of giving you the answer?'],
    ['Para que construyas tu comprensión', 'So you build your own understanding', 'Correcto: favorece el razonamiento propio.', 'Correct: it fosters your own reasoning.', true],
    ['Porque no conoce la respuesta correcta', 'Because it doesn’t know the answer', 'La conoce, pero prioriza tu aprendizaje.', 'It knows, but prioritizes your learning.'],
    ['Para hacerte perder tiempo', 'To waste your time', 'No es su propósito.', 'That isn’t its purpose.'],
    ['Porque está en modo de prueba', 'Because it’s in test mode', 'No es un modo de prueba.', 'It isn’t a test mode.']);

  Q('b817', 'S', '20', ['Gemini Notebook te muestra una cita [2] en su respuesta. ¿Para qué sirve?', 'Gemini Notebook shows a citation [2] in its answer. What is it for?'],
    ['Para ver de qué parte de tu fuente sale', 'To see where in your source it comes from', 'Correcto: así verificas rápido.', 'Correct: that’s how you verify quickly.', true],
    ['Para indicar la nota de tu tarea', 'To indicate your homework grade', 'No es una calificación.', 'It isn’t a grade.'],
    ['Para mostrar cuántas veces preguntaste', 'To show how many times you asked something', 'No cuenta preguntas.', 'It doesn’t count questions.'],
    ['Para decir que la respuesta es dudosa', 'To say the answer is doubtful', 'Indica la fuente, no dudas.', 'It shows the source, not doubt.']);

  Q('b818', 'S', '05', ['¿Qué deberías hacer siempre antes de usar una respuesta de IA en tu trabajo?', 'What should you always do before using an AI answer in your work?'],
    ['Revisarla y contrastarla', 'Review and cross-check it', 'Correcto: precisión antes de usar.', 'Correct: accuracy before use.', true],
    ['Traducirla a otro idioma', 'Translate it into another language', 'No verifica nada.', 'It verifies nothing.'],
    ['Hacerla más larga', 'Make it longer', 'No mejora su veracidad.', 'It doesn’t improve truthfulness.'],
    ['Copiarla sin cambios', 'Copy it unchanged', 'Es riesgoso y puede ser plagio.', 'It’s risky and may be plagiarism.']);

  Q('b819', 'S', '24', ['Tienes que memorizar vocabulario de inglés. ¿Qué uso de la IA es más útil?', 'You have to memorize English vocabulary. Which AI use is most helpful?'],
    ['Flashcards o un quiz para practicar', 'Flashcards or a quiz to practise', 'Correcto: práctica de recuperación.', 'Correct: retrieval practice.', true],
    ['Pedirle que memorice por ti', 'Asking it to memorize for you', 'No es posible: tú debes aprender.', 'Not possible: you must learn.'],
    ['Generar imágenes al azar del tema', 'Generating random images', 'No ayuda a memorizar vocabulario.', 'It doesn’t help memorize vocabulary.'],
    ['Lanzar un Deep Research de idiomas', 'Running a Deep Research', 'Es excesivo para vocabulario.', 'It’s overkill for vocabulary.']);

  Q('b820', 'S', '26', ['En una pregunta del examen dudas entre dos opciones. ¿Cuál suele ser la correcta?', 'In an exam question you hesitate between two options. Which is usually correct?'],
    ['La que mantiene la revisión humana', 'The one that keeps human review', 'Correcto: la IA apoya, no reemplaza el criterio.', 'Correct: AI supports, it doesn’t replace judgment.', true],
    ['La que automatiza todo el trabajo', 'The one that automates everything', 'Quitar la revisión suele ser un error.', 'Removing review is usually a mistake.'],
    ['La que comparte más datos', 'The one sharing more data', 'Más datos personales es peor.', 'More personal data is worse.'],
    ['La que usa el modelo más caro', 'The one using the priciest model', 'El modelo rara vez es la clave.', 'The model is rarely the key.']);
})();
