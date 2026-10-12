/* Banco 7 · Dominio 3: plagio, alfabetización en IA, dilemas éticos, cuándo usar o no IA. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b701', 3, '25', ['Sospechas que un trabajo fue hecho con IA sin declararlo. ¿Cuál es el primer paso más adecuado?', 'You suspect an assignment was done with AI without disclosure. What is the most appropriate first step?'],
    ['Conversar sobre el proceso con el estudiante', 'Talk with the student about the process', 'Correcto: borradores y defensa muestran comprensión y autoría.', 'Correct: drafts and defense show understanding and authorship.', true],
    ['Poner cero según un detector de IA', 'Give zero based on an AI detector', 'Los detectores no son fiables como prueba única.', 'Detectors aren’t reliable as sole evidence.'],
    ['Anunciar el caso frente a toda la clase', 'Announce the case in front of the class', 'Expone al estudiante sin pruebas.', 'It exposes the student without evidence.'],
    ['Ignorarlo para evitar un conflicto', 'Ignore it to avoid a conflict', 'Pierdes una oportunidad de integridad.', 'You miss an integrity opportunity.']);

  Q('b702', 3, '25', ['¿Qué evidencia del proceso muestra mejor el **criterio** del estudiante al usar IA?', 'Which process evidence best shows the student’s **judgment** when using AI?'],
    ['Sus decisiones sobre las sugerencias', 'Their decisions on the suggestions', 'Correcto: hace visible su criterio.', 'Correct: it makes their judgment visible.', true],
    ['El número de veces que abrió Gemini', 'How many times they opened Gemini', 'La frecuencia no muestra criterio.', 'Frequency doesn’t show judgment.'],
    ['El tiempo total frente a la pantalla', 'Total screen time', 'El tiempo no muestra criterio.', 'Time doesn’t show judgment.'],
    ['El porcentaje de un detector de IA', 'An AI detector’s percentage', 'No mide criterio y no es fiable.', 'It doesn’t measure judgment and isn’t reliable.']);

  Q('b703', 3, '25', ['¿Qué tarea es **más difícil** de resolver copiando a la IA?', 'Which task is **harder** to solve by copying from AI?'],
    ['Un resumen genérico de un tema famoso', 'A generic summary of a famous topic', 'La IA lo resuelve fácilmente.', 'AI solves it easily.'],
    ['Un análisis de datos que el grupo recogió', 'An analysis of data the group collected', 'Correcto: está situada en su propia experiencia.', 'Correct: it’s grounded in their own experience.', true],
    ['Definiciones de diez conceptos clave', 'Definitions of ten key concepts', 'Son fáciles de generar.', 'They’re easy to generate.'],
    ['Una biografía de un autor conocido', 'A biography of a well-known author', 'La IA la produce en segundos.', 'AI produces it in seconds.']);

  Q('b704', 3, '25', ['¿Qué estrategia de **alfabetización en IA** es más eficaz?', 'Which **AI literacy** strategy is most effective?'],
    ['Buscar errores en respuestas de IA', 'Finding errors in AI answers', 'Correcto: evalúan críticamente y contrastan.', 'Correct: they critically evaluate and cross-check.', true],
    ['Prohibir hablar de IA en clase', 'Banning talk about AI in class', 'Los deja sin herramientas.', 'It leaves them without tools.'],
    ['Memorizar los nombres de los modelos', 'Memorizing model names', 'No desarrolla pensamiento crítico.', 'It doesn’t build critical thinking.'],
    ['Usar la IA para todas las tareas', 'Using AI for every task', 'Usar no es lo mismo que cuestionar.', 'Using isn’t questioning.']);

  Q('b705', 3, '24', ['El objetivo es que los estudiantes **aprendan a argumentar** por escrito. ¿Cómo usas Gemini?', 'The goal is for students to **learn to argue** in writing. How do you use Gemini?'],
    ['Como guía y fuente de feedback', 'As a guide and source of feedback', 'Correcto: apoya el proceso sin escribir por ellos.', 'Correct: it supports the process without writing for them.', true],
    ['Que redacte los textos por ellos', 'Have it write the texts for them', 'Anula la habilidad que deben desarrollar.', 'It cancels the skill they must develop.'],
    ['Prohibiendo cualquier herramienta', 'Banning every tool', 'Pierdes apoyos útiles.', 'You lose useful supports.'],
    ['Solo para poner notas automáticas', 'Only for automatic grading', 'Delegas una decisión de alto impacto.', 'You delegate a high-impact decision.']);

  Q('b706', 3, '24', ['¿En qué caso es **mejor no usar** IA?', 'In which case is it **better not to use** AI?'],
    ['Cuando la tarea es practicar esa habilidad', 'When the task is to practise that skill', 'Correcto: la IA haría por ellos lo que deben aprender.', 'Correct: AI would do what they must learn.', true],
    ['Al redactar un aviso de rutina para las familias', 'When drafting a routine notice', 'Es un buen uso para ahorrar tiempo.', 'It’s a good time-saving use.'],
    ['Al crear versiones de una lectura', 'When creating versions of a reading', 'Apoya la diferenciación.', 'It supports differentiation.'],
    ['Al buscar ideas para un proyecto', 'When brainstorming a project', 'La lluvia de ideas es un buen uso.', 'Brainstorming is a good use.']);

  Q('b707', 3, '25', ['Quieres iniciar una conversación sobre IA con estudiantes de 15 años. ¿Qué recurso es más adecuado?', 'You want to start a conversation about AI with 15-year-olds. Which resource is most suitable?'],
    ['Un caso breve con un dilema ético', 'A short case with an ethical dilemma', 'Correcto: invita a pensar y debatir.', 'Correct: it invites thinking and debate.', true],
    ['Una lista de prohibiciones sin explicar', 'A list of unexplained prohibitions', 'No promueve comprensión.', 'It doesn’t build understanding.'],
    ['Un video técnico de dos horas', 'A two-hour technical video', 'Poco adecuado para iniciar el diálogo.', 'Ill-suited to start dialogue.'],
    ['Un examen sorpresa sobre modelos', 'A surprise quiz on models', 'No abre la conversación ética.', 'It doesn’t open the ethical conversation.']);

  Q('b708', 3, '25', ['¿Qué incluye una buena **pauta de aula** sobre IA?', 'What does a good **classroom guideline** on AI include?'],
    ['Usos permitidos y cómo declararlos', 'Allowed uses and how to disclose them', 'Correcto: reglas claras y transparencia.', 'Correct: clear rules and transparency.', true],
    ['La prohibición total sin excepciones', 'A total ban on AI with no exceptions at all', 'Rara vez funciona y no educa.', 'It rarely works and doesn’t educate.'],
    ['El uso de detectores como única regla', 'Detectors as the only rule', 'Los detectores no son fiables.', 'Detectors aren’t reliable.'],
    ['Ninguna regla para no limitar', 'No rules so as not to limit', 'Sin reglas, aumenta la confusión.', 'Without rules, confusion grows.']);

  Q('b709', 3, '24', ['Identifica el **riesgo** en este escenario: «Los estudiantes usan Gemini para todas las tareas y ya no intentan resolver nada solos».', 'Identify the **risk** in this scenario: “Students use Gemini for every task and no longer try anything on their own.”'],
    ['Sobredependencia', 'Over-reliance', 'Correcto: delegan lo que deberían aprender.', 'Correct: they delegate what they should learn.', true],
    ['Falta de conexión', 'Lack of connection', 'No es un problema técnico.', 'It isn’t a technical problem.'],
    ['Exceso de privacidad', 'Too much privacy', 'No es un concepto aplicable.', 'Not an applicable concept.'],
    ['Uso de grounding', 'Use of grounding', 'El grounding es una buena práctica.', 'Grounding is good practice.']);

  Q('b710', 3, '24', ['¿Qué mitiga la **sobredependencia** de la IA?', 'What mitigates **over-reliance** on AI?'],
    ['Tareas que piden explicar el propio proceso', 'Tasks asking them to explain their process', 'Correcto: fomenta metacognición y autoría.', 'Correct: it fosters metacognition and authorship.', true],
    ['Asignar más tareas para resolver con IA', 'Assigning more tasks to solve with AI', 'Aumenta la dependencia.', 'It increases dependence.'],
    ['Usar solo el modelo más rápido disponible', 'Using only the fastest available model', 'No cambia la dependencia.', 'It doesn’t change dependence.'],
    ['Eliminar la retroalimentación', 'Removing feedback', 'Empeora el aprendizaje.', 'It worsens learning.']);

  Q('b711', 3, '25', ['¿Por qué es importante que los estudiantes desarrollen **metacognición** al usar IA?', 'Why is it important for students to develop **metacognition** when using AI?'],
    ['Para reconocer lo que de verdad aprenden', 'To recognize what they really learn', 'Correcto: distinguen lo que entienden de lo que copian.', 'Correct: they tell what they understand from what they copy.', true],
    ['Para que usen la IA más rápido', 'So they use AI faster', 'La velocidad no es el objetivo.', 'Speed isn’t the goal.'],
    ['Para que memoricen las respuestas', 'So they memorize the answers', 'No es metacognición.', 'That isn’t metacognition.'],
    ['Para que eviten preguntar al docente', 'So they avoid asking the teacher', 'No es un objetivo pedagógico.', 'It isn’t a teaching goal.']);

  Q('b712', 3, '25', ['¿Qué dilema ético aparece si un docente usa IA para escribir los comentarios de las libretas sin revisarlos?', 'Which ethical dilemma arises if a teacher uses AI to write report-card comments without reviewing them?'],
    ['Comentarios inexactos firmados por él', 'Inaccurate comments signed as his own', 'Correcto: afecta la exactitud y la transparencia.', 'Correct: it affects accuracy and transparency.', true],
    ['Que los comentarios queden muy cortos', 'That the comments end up very short', 'La extensión no es el dilema.', 'Length isn’t the dilemma.'],
    ['Que use demasiado almacenamiento', 'That it uses too much storage', 'No es un dilema ético.', 'It isn’t an ethical dilemma.'],
    ['Que el modelo sea el menos potente', 'That the model is the least powerful', 'El modelo no es el dilema.', 'The model isn’t the dilemma.']);

  Q('b713', 3, '25', ['Un estudiante declara que usó Gemini para ordenar sus ideas, y el ensayo es suyo. ¿Qué haces?', 'A student discloses using Gemini to organize ideas, and the essay is his own. What do you do?'],
    ['Valorar su transparencia según la pauta', 'Value his disclosure per the guideline', 'Correcto: es el comportamiento que se busca.', 'Correct: it’s the behaviour you want.', true],
    ['Bajarle la nota por haber usado IA', 'Lower his grade for having used AI', 'Castigas la transparencia.', 'You punish transparency.'],
    ['Anular el trabajo completo sin más', 'Void the whole assignment outright', 'Desproporcionado si el uso estaba permitido.', 'Disproportionate if the use was allowed.'],
    ['Ignorar la declaración', 'Ignore the disclosure', 'Pierdes la ocasión de reforzar la buena práctica.', 'You miss the chance to reinforce good practice.']);

  Q('b714', 3, '25', ['¿Qué rediseño de tarea reduce el plagio con IA?', 'Which task redesign reduces AI plagiarism?'],
    ['Pedir borradores y una defensa oral breve', 'Requiring drafts and a short oral defense', 'Correcto: el proceso y la defensa revelan autoría.', 'Correct: process and defense reveal authorship.', true],
    ['Pedir trabajos más largos', 'Requiring longer assignments', 'La IA genera textos largos fácilmente.', 'AI easily generates long texts.'],
    ['Cambiar solo la fecha de entrega', 'Changing only the due date', 'No afecta la autoría.', 'It doesn’t affect authorship.'],
    ['Usar el mismo enunciado todos los años', 'Reusing the same prompt year after year', 'Facilita el copiado.', 'It makes copying easier.']);

  Q('b715', 3, '25', ['Evalúa: ¿qué estrategia enseña mejor el **uso responsable** de la IA?', 'Evaluate: which strategy best teaches **responsible** AI use?'],
    ['Co-crear con el grupo las reglas de uso', 'Co-creating the usage rules with the group', 'Correcto: genera comprensión y compromiso.', 'Correct: it builds understanding and commitment.', true],
    ['Imponer reglas sin explicarlas', 'Imposing rules without explaining them', 'No desarrolla comprensión.', 'It builds no understanding.'],
    ['Dejar que cada uno decida sin guía', 'Letting each decide with no guidance', 'Falta orientación.', 'It lacks guidance.'],
    ['Esperar a que ocurra un problema', 'Waiting for a problem to happen', 'Es reactivo, no educativo.', 'It’s reactive, not educational.']);

  Q('b716', 3, '05', ['Un estudiante entrega un informe con datos que no puede explicar. ¿Qué indica?', 'A student submits a report with data he can’t explain. What does it indicate?'],
    ['Posible copia o datos sin verificar', 'Possible copying or unverified data', 'Correcto: conversa sobre su proceso y sus fuentes.', 'Correct: talk about his process and sources.', true],
    ['Que es un estudiante sobresaliente', 'That he’s an outstanding student', 'No poder explicar no indica eso.', 'Being unable to explain doesn’t indicate that.'],
    ['Que usó el modelo más potente', 'That he used the most powerful model', 'El modelo no es el punto.', 'The model isn’t the point.'],
    ['Que el informe no tiene errores', 'That the report has no errors', 'No se deduce de la situación.', 'It doesn’t follow from the situation.']);

  Q('b717', 3, '24', ['Justifica: ¿por qué usar IA para crear tres versiones por nivel de una lectura es un **buen** uso?', 'Justify: why is using AI to create three level-based versions of a reading a **good** use?'],
    ['Ahorra tiempo y apoya la diferenciación', 'It saves time and helps differentiate', 'Correcto: beneficio claro con revisión docente.', 'Correct: a clear benefit with teacher review.', true],
    ['Porque así no hay que revisar nada', 'Because then nothing needs reviewing', 'Siempre hay que revisar.', 'You always need to review.'],
    ['Porque elimina la planificación', 'Because it removes planning', 'No elimina la planificación.', 'It doesn’t remove planning.'],
    ['Porque baja el nivel para todos', 'Because it lowers the level for all', 'Diferenciar no es bajar el nivel.', 'Differentiating isn’t lowering the level.']);

  Q('b718', 3, '25', ['¿Qué plan aborda **proactivamente** las inexactitudes en tareas con Gemini?', 'Which plan **proactively** addresses inaccuracies in assignments with Gemini?'],
    ['Exigir verificar fuentes y citarlas', 'Requiring verified, cited sources', 'Correcto: la verificación es parte de la tarea.', 'Correct: verification is part of the task.', true],
    ['Revisar solo si alguien se queja', 'Reviewing only if someone complains', 'Es reactivo.', 'It’s reactive.'],
    ['Confiar en que la IA no falla', 'Trusting that AI doesn’t fail', 'La IA puede fallar.', 'AI can fail.'],
    ['Prohibir las citas en los trabajos', 'Banning citations in assignments', 'Lo contrario de lo que se necesita.', 'The opposite of what’s needed.']);

  Q('b719', 3, '25', ['Un estudiante comparte en redes una imagen generada de un compañero en una situación vergonzosa. ¿Qué concepto se vulnera?', 'A student posts on social media a generated image of a classmate in an embarrassing situation. Which concept is violated?'],
    ['Responsabilidad digital y consentimiento', 'Digital responsibility and consent', 'Correcto: daña a una persona real sin permiso.', 'Correct: it harms a real person without permission.', true],
    ['La multimodalidad del modelo utilizado', 'The multimodality of the model used', 'Es una capacidad técnica.', 'It’s a technical capability.'],
    ['Ventana de contexto', 'Context window', 'No tiene relación.', 'It’s unrelated.'],
    ['Grounding de fuentes', 'Source grounding', 'No tiene relación.', 'It’s unrelated.']);

  Q('b720', 3, '25', ['¿Qué actividad desarrolla mejor el **pensamiento crítico** sobre la IA?', 'Which activity best develops **critical thinking** about AI?'],
    ['Contrastar la IA con una fuente experta', 'Checking AI against an expert source', 'Correcto: contrastar revela errores y sesgos.', 'Correct: cross-checking reveals errors and bias.', true],
    ['Copiar respuestas de IA en el cuaderno', 'Copying AI answers into the notebook', 'No implica análisis.', 'It involves no analysis.'],
    ['Usar la IA sin leer lo que genera', 'Using AI without reading its output', 'Es lo opuesto al pensamiento crítico.', 'The opposite of critical thinking.'],
    ['Contar cuántas palabras genera', 'Counting how many words it generates', 'No es pensamiento crítico.', 'It isn’t critical thinking.']);
})();
