/* Labs 09–15 · bug = índices (desde 0) de las líneas con el fallo */
(function () {
  const T = (es, en) => ({ es, en });
  const O = (es, en, ok, wes, wen) => ({ t: T(es, en), ok, why: T(wes, wen) });
  const QFIX = T('¿Qué cambio arregla el problema que encontraste?', 'Which change fixes the problem you found?');

  GDC.LABS.push(
    {
      id: 'lab09', mod: '05', d: 3, level: 'basic', kind: 'output', file: 'Respuesta de Gemini · Quiz de Ciencias',
      title: T('La clave de respuestas equivocada', 'The wrong answer key'),
      context: T('Gemini generó este quiz para estudiantes de 12 años. Antes de publicarlo en Classroom, revísalo: una de las respuestas marcadas como correcta es falsa.', 'Gemini generated this quiz for 12-year-olds. Before publishing it in Classroom, review it: one of the answers marked correct is false.'),
      lines: [
        T('1. ¿Qué necesitan las plantas para la fotosíntesis? → Luz, agua y dióxido de carbono ✓', '1. What do plants need for photosynthesis? → Light, water and carbon dioxide ✓'),
        T('2. ¿Qué gas liberan las plantas en la fotosíntesis? → Dióxido de carbono ✓', '2. Which gas do plants release in photosynthesis? → Carbon dioxide ✓'),
        T('3. ¿En qué parte de la célula ocurre? → En los cloroplastos ✓', '3. In which part of the cell does it happen? → In the chloroplasts ✓'),
        T('4. ¿Qué pigmento capta la luz? → La clorofila ✓', '4. Which pigment captures light? → Chlorophyll ✓')
      ],
      bug: [1], question: T('¿Qué haces con el quiz?', 'What do you do with the quiz?'),
      options: [
        O('Corregir: liberan oxígeno, y revisar las demás con una fuente', 'Fix it: they release oxygen, and check the rest with a source', true, 'Correcto: corriges el error y verificas todo antes de publicar.', 'Correct: you fix the error and verify everything before publishing.'),
        O('Publicarlo tal cual: Gemini ya revisa sus propias respuestas', 'Publish it as is: Gemini already checks its own answers', false, 'La IA puede equivocarse con seguridad; la revisión es del docente.', 'AI can be confidently wrong; review is the teacher’s job.'),
        O('Borrar la pregunta 2 y publicar las otras sin revisarlas', 'Delete question 2 and publish the rest without checking them', false, 'Eliminas el error visible, pero no verificas el resto.', 'You remove the visible error but don’t verify the rest.'),
        O('Pedir a Gemini que confirme si la pregunta 2 es correcta', 'Ask Gemini to confirm whether question 2 is correct', false, 'Puede «confirmar» el mismo error; contrasta con una fuente fiable.', 'It may “confirm” the same error; check against a reliable source.')
      ],
      hint: T('Repasa qué gas absorben y cuál liberan las plantas durante la fotosíntesis.', 'Review which gas plants absorb and which they release during photosynthesis.'),
      lesson: T('Un quiz generado puede tener la clave equivocada aunque todo «suene» correcto. Revisa **cada** respuesta antes de publicar: la precisión es parte de la revisión humana.', 'A generated quiz can have the wrong key even if everything “sounds” right. Check **every** answer before publishing: accuracy is part of human review.')
    },
    {
      id: 'lab10', mod: '05', d: 3, level: 'mid', kind: 'output', file: 'Respuesta de Gemini · Plan de clase (8 años)',
      title: T('Correcto, pero no para esta edad', 'Correct, but not for this age'),
      context: T('Gemini propuso esta secuencia para una clase sobre emociones con niños de 8 años. Todo es «correcto», pero una actividad no es pertinente. Encuéntrala.', 'Gemini proposed this sequence for a lesson on emotions with 8-year-olds. Everything is “correct”, but one activity isn’t appropriate. Find it.'),
      lines: [
        T('Inicio: ronda de caritas para decir cómo llegamos hoy.', 'Warm-up: a round of emoji faces to say how we feel today.'),
        T('Desarrollo: leer un cuento corto sobre la amistad y conversar.', 'Main part: read a short story about friendship and discuss.'),
        T('Análisis: ver un fragmento de una película de terror para identificar el miedo.', 'Analysis: watch a horror film clip to identify fear.'),
        T('Cierre: dibujar una situación que nos hizo sentir orgullosos.', 'Closing: draw a situation that made us feel proud.')
      ],
      bug: [2], question: QFIX,
      options: [
        O('Usar la película, pero con el volumen bajo para que asuste menos', 'Use the film, but at a low volume so that it is less scary', false, 'Sigue siendo contenido inadecuado para la edad.', 'It is still content unsuitable for the age group.'),
        O('Reemplazarla por un cuento ilustrado en el que un personaje siente miedo', 'Replace it with an illustrated story where a character feels fear', true, 'Correcto: mismo objetivo (identificar el miedo) con un recurso pertinente.', 'Correct: same goal (identifying fear) with an appropriate resource.'),
        O('Eliminar la actividad de análisis y alargar el cierre', 'Remove the analysis activity and extend the closing instead', false, 'Pierdes el objetivo de identificar el miedo en lugar de adaptarlo.', 'You lose the goal of identifying fear instead of adapting it.'),
        O('Pedir autorización a las familias para mostrar la película', 'Ask the families for permission to show the film in class', false, 'La autorización no la convierte en un recurso adecuado para 8 años.', 'Permission doesn’t make it a suitable resource for 8-year-olds.')
      ],
      hint: T('Aplica el criterio de pertinencia: ¿es adecuado para la edad del grupo?', 'Apply the relevance criterion: is it suitable for the group’s age?'),
      lesson: T('La revisión humana no es solo de datos: también de **pertinencia**. Un contenido verdadero puede ser inadecuado para la edad o el contexto. Mantén el objetivo y cambia el recurso.', 'Human review isn’t only about facts: it is also about **relevance**. True content can be unsuitable for the age or context. Keep the goal and change the resource.')
    },
    {
      id: 'lab11', mod: '10', d: 3, level: 'mid', kind: 'flow', file: 'Consigna de tarea · Matemáticas',
      title: T('Una tarea que enseña a copiar', 'A task that teaches copying'),
      context: T('El objetivo de la unidad es que los estudiantes **aprendan a resolver** ecuaciones de primer grado. Revisa la consigna de la tarea y encuentra la línea que va contra ese objetivo.', 'The unit’s goal is for students to **learn to solve** first-degree equations. Review the task instructions and find the line that works against that goal.'),
      lines: [
        T('Resuelve las 5 ecuaciones de la ficha.', 'Solve the 5 equations on the worksheet.'),
        T('Pide a Gemini la solución de cada una y cópiala en tu cuaderno.', 'Ask Gemini for the solution to each one and copy it into your notebook.'),
        T('Escribe al final qué paso te costó más.', 'Write at the end which step was hardest for you.'),
        T('Entrega el martes.', 'Hand it in on Tuesday.')
      ],
      bug: [1], question: QFIX,
      options: [
        O('Prohibir cualquier uso de IA y revisar los cuadernos con lupa', 'Ban any AI use and check notebooks very closely', false, 'Pierdes un apoyo útil; el problema es cómo se usa, no que se use.', 'You lose a useful support; the issue is how it’s used, not that it’s used.'),
        O('Usar Guided Learning para que te guíe y entregar la conversación', 'Use Guided Learning to be guided and hand in the conversation', true, 'Correcto: el estudiante razona paso a paso y el proceso queda visible.', 'Correct: the student reasons step by step and the process is visible.'),
        O('Pedir a Gemini la solución, pero copiarla con otras palabras', 'Ask Gemini for the solution, but copy it in other words', false, 'Sigue sin desarrollar la habilidad; solo disfraza la copia.', 'It still doesn’t build the skill; it just disguises copying.'),
        O('Pedir a Gemini solo la respuesta final, sin el procedimiento', 'Ask Gemini only for the final answer, without the working', false, 'El estudiante sigue sin resolver nada por sí mismo.', 'The student still solves nothing on their own.')
      ],
      hint: T('Si el objetivo es aprender a resolver, ¿quién debería hacer el razonamiento?', 'If the goal is learning to solve, who should do the reasoning?'),
      lesson: T('Cuando el objetivo es **desarrollar una habilidad**, la IA debe guiar, no hacer. **Guided Learning** pregunta en lugar de responder, y entregar la conversación hace visible el proceso.', 'When the goal is to **develop a skill**, AI should guide, not do. **Guided Learning** asks instead of answering, and handing in the conversation makes the process visible.')
    },
    {
      id: 'lab12', mod: '25', d: 3, level: 'hard', kind: 'policy', file: 'Política de aula · Uso de IA',
      title: T('Una política que castiga sin pruebas', 'A policy that punishes without evidence'),
      context: T('Un área académica redactó su política de uso de IA. Una de las reglas puede llevar a sanciones injustas. Encuéntrala.', 'A department drafted its AI-use policy. One of the rules can lead to unfair sanctions. Find it.'),
      lines: [
        T('Cada tarea indicará qué usos de IA están permitidos.', 'Each task will state which AI uses are allowed.'),
        T('Los estudiantes declararán cómo usaron la IA en una nota final.', 'Students will declare how they used AI in a final note.'),
        T('Si un detector de IA marca más del 50 %, la nota será cero.', 'If an AI detector flags more than 50%, the grade will be zero.'),
        T('Los trabajos incluirán borradores y una breve defensa oral.', 'Assignments will include drafts and a short oral defense.')
      ],
      bug: [2], question: QFIX,
      options: [
        O('Bajar el umbral del detector al 30 % para ser más estrictos', 'Lower the detector threshold to 30% to be stricter', false, 'Un detector poco fiable con un umbral más bajo produce más falsos positivos.', 'An unreliable detector with a lower threshold produces more false positives.'),
        O('Usar dos detectores distintos y poner cero si ambos coinciden', 'Use two different detectors and give zero if both agree', false, 'Los detectores no son fiables como prueba única, ni siquiera combinados.', 'Detectors aren’t reliable as sole evidence, not even combined.'),
        O('Si hay dudas, conversar sobre el proceso con borradores y defensa', 'If in doubt, talk about the process using drafts and defense', true, 'Correcto: evaluar el proceso revela comprensión y autoría con justicia.', 'Correct: assessing the process fairly reveals understanding and authorship.'),
        O('Eliminar la declaración de uso para no complicar el proceso', 'Remove the usage declaration to keep the process simple', false, 'La transparencia es parte central de una buena política.', 'Transparency is a core part of a good policy.')
      ],
      hint: T('¿Qué línea toma una decisión de alto impacto con una herramienta poco fiable?', 'Which line makes a high-impact decision with an unreliable tool?'),
      lesson: T('Los detectores de texto generado **no son fiables como prueba única**. Una buena política combina reglas claras por tarea, **declaración de uso** y **evaluación del proceso** (borradores, decisiones, fuentes y defensa).', 'AI-text detectors **aren’t reliable as sole evidence**. A good policy combines clear per-task rules, a **usage declaration** and **process assessment** (drafts, decisions, sources and defense).')
    },
    {
      id: 'lab13', mod: '12', d: 3, level: 'hard', kind: 'notebook', file: 'Prompt · Canvas + Gemini Notebook',
      title: T('Datos simulados como evidencia', 'Simulated data as evidence'),
      context: T('Un docente preparó una presentación con su notebook. Uno de los artículos es un **modelo con datos simulados** creado para practicar. Encuentra la línea problemática.', 'A teacher prepared a presentation with his notebook. One of the articles is a **model with simulated data** created for practice. Find the problematic line.'),
      lines: [
        T('Propósito: presentación de 10 diapositivas para la semana 6.', 'Purpose: a 10-slide presentation for week 6.'),
        T('Audiencia: estudiantes de tercer ciclo de Ingeniería.', 'Audience: third-year Engineering students.'),
        T('Usa como evidencia principal las cifras del artículo modelo.', 'Use the figures from the model article as the main evidence.'),
        T('Marca con [VERIFICAR] lo que requiera validación académica.', 'Mark with [VERIFY] anything that needs academic validation.')
      ],
      bug: [2], question: QFIX,
      options: [
        O('Citar el artículo modelo, pero añadir su fecha y su autor', 'Cite the model article, but add its date and author', false, 'Citar mejor no convierte datos simulados en evidencia real.', 'Better citing doesn’t turn simulated data into real evidence.'),
        O('«El artículo modelo tiene datos simulados: no lo uses como evidencia»', '“The model article has simulated data: don’t use it as evidence”', true, 'Correcto: el límite evita presentar datos ficticios como reales.', 'Correct: the limit prevents presenting fictional data as real.'),
        O('Borrar la línea de [VERIFICAR] para que la presentación sea más limpia', 'Delete the [VERIFY] line so the presentation looks cleaner', false, 'Quitas una salvaguarda útil y no resuelves el problema.', 'You remove a useful safeguard and don’t solve the problem.'),
        O('Pedir a Gemini que «mejore» las cifras del artículo modelo', 'Ask Gemini to “improve” the model article’s figures', false, 'Inventar cifras mejores empeora el problema.', 'Making up better figures makes the problem worse.')
      ],
      hint: T('¿Qué línea trata un material de práctica como si fuera evidencia real?', 'Which line treats practice material as if it were real evidence?'),
      lesson: T('Gemini Notebook responde con tus fuentes, pero no sabe cuáles son reales y cuáles son de práctica. **Díselo en los límites**: qué documentos son evidencia y cuáles solo modelos.', 'Gemini Notebook answers from your sources, but doesn’t know which are real and which are for practice. **Tell it in the limits**: which documents are evidence and which are only models.')
    },
    {
      id: 'lab14', mod: '24', d: 1, level: 'basic', kind: 'flow', file: 'Plan de trabajo · Preparar la unidad',
      title: T('La herramienta equivocada', 'The wrong tool'),
      context: T('Una docente organizó su semana para preparar una unidad. Un paso usa una herramienta poco adecuada para lo que necesita. Encuéntralo.', 'A teacher planned her week to prepare a unit. One step uses a poorly suited tool for what she needs. Find it.'),
      lines: [
        T('Lunes: Deep Research sobre evidencia reciente de aprendizaje colaborativo.', 'Monday: Deep Research on recent evidence about collaborative learning.'),
        T('Martes: resumir mis 20 lecturas del curso, con citas, en un chat sin adjuntar nada.', 'Tuesday: summarize my 20 course readings, with citations, in a chat with nothing attached.'),
        T('Miércoles: crear la presentación de la unidad en Canvas.', 'Wednesday: create the unit presentation in Canvas.'),
        T('Jueves: generar con Nano Banana una ilustración para la portada.', 'Thursday: generate a cover illustration with Nano Banana.')
      ],
      bug: [1], question: QFIX,
      options: [
        O('Crear un notebook en Gemini Notebook con las 20 lecturas', 'Create a Gemini Notebook notebook with the 20 readings', true, 'Correcto: responde con tus fuentes y cita el fragmento exacto.', 'Correct: it answers from your sources and cites the exact passage.'),
        O('Lanzar un Deep Research para que encuentre las 20 lecturas', 'Run a Deep Research to find the 20 readings', false, 'Ya tienes las lecturas; Deep Research busca en la web.', 'You already have the readings; Deep Research searches the web.'),
        O('Pedir el resumen en el chat, pero con el modelo Pro', 'Ask for the summary in the chat, but with the Pro model', false, 'Sin las lecturas cargadas, ningún modelo puede citarlas.', 'Without the readings loaded, no model can cite them.'),
        O('Usar Guided Learning para que te enseñe las lecturas', 'Use Guided Learning to teach you the readings', false, 'Es un modo tutor; no está pensado para resumir tu corpus con citas.', 'It is a tutor mode; it isn’t designed to summarize your corpus with citations.')
      ],
      hint: T('¿Qué herramienta responde solo con tus fuentes y cita?', 'Which tool answers only from your sources and cites them?'),
      lesson: T('Elegir bien la herramienta ahorra tiempo y errores: **fuentes propias con citas → Gemini Notebook**; investigar la web → Deep Research; producto editable → Canvas; imágenes → Nano Banana.', 'Choosing the right tool saves time and errors: **your own sources with citations → Gemini Notebook**; web research → Deep Research; editable product → Canvas; images → Nano Banana.')
    },
    {
      id: 'lab15', mod: '19', d: 2, level: 'mid', kind: 'sheet', file: 'Sheets · Promedio ponderado',
      title: T('Una fórmula que suma más del 100 %', 'A formula that adds up to more than 100%'),
      context: T('El sílabo dice: prácticas 40 %, parcial 25 % y final 35 %. Gemini propuso esta fórmula, y los promedios salen más altos de lo esperado. Encuentra la línea con el error.', 'The syllabus says: practice 40%, midterm 25% and final 35%. Gemini proposed this formula, and averages come out higher than expected. Find the line with the error.'),
      lines: [
        T('Columna B = prácticas · C = parcial · D = final', 'Column B = practice · C = midterm · D = final'),
        T('Fórmula en E2: =B2*0,40 + C2*0,35 + D2*0,35', 'Formula in E2: =B2*0.40 + C2*0.35 + D2*0.35'),
        T('Copiar E2 hacia abajo para toda la columna', 'Copy E2 down the whole column'),
        T('Formato de E: número con 1 decimal', 'Format of E: number with 1 decimal')
      ],
      bug: [1], question: QFIX,
      options: [
        O('=B2*0,40 + C2*0,25 + D2*0,35', '=B2*0.40 + C2*0.25 + D2*0.35', true, 'Correcto: los pesos coinciden con el sílabo y suman 100 %.', 'Correct: the weights match the syllabus and add up to 100%.'),
        O('=PROMEDIO(B2:D2)', '=AVERAGE(B2:D2)', false, 'Un promedio simple ignora las ponderaciones del sílabo.', 'A simple average ignores the syllabus weights.'),
        O('=B2*0,40 + C2*0,35 + D2*0,25', '=B2*0.40 + C2*0.35 + D2*0.25', false, 'Suma 100 %, pero intercambia los pesos del parcial y el final.', 'It adds up to 100%, but swaps the midterm and final weights.'),
        O('=(B2*0,40 + C2*0,35 + D2*0,35)/1,1', '=(B2*0.40 + C2*0.35 + D2*0.35)/1.1', false, 'Compensa el total, pero con los pesos equivocados.', 'It compensates the total, but with the wrong weights.')
      ],
      hint: T('Suma los pesos de la fórmula: ¿dan 100 %? ¿Coinciden con el sílabo?', 'Add up the formula’s weights: do they make 100%? Do they match the syllabus?'),
      lesson: T('Prueba siempre una fórmula generada con un caso que puedas calcular a mano y comprueba que los pesos **sumen 100 %** y coincidan con tu sílabo.', 'Always test a generated formula with a case you can calculate by hand, and check that the weights **add up to 100%** and match your syllabus.')
    }
  );
})();
