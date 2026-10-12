/* Banco 3 · Dominio 2: prompting, PARTS, límites e iteración. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b301', 2, '06', ['En el prompt «Actúa como tutor de química», ¿qué pieza de PARTS aparece?', 'In the prompt “Act as a chemistry tutor”, which PARTS piece appears?'],
    ['Persona', 'Persona', 'Correcto: define el rol que adopta Gemini.', 'Correct: it defines the role Gemini takes on.', true],
    ['Recipient, el público destinatario', 'Recipient, the target audience', 'Recipient es para quién es el resultado.', 'Recipient is who the result is for.'],
    ['Structure, el formato de salida', 'Structure, the output format', 'Structure es el formato (tabla, lista…).', 'Structure is the format (table, list…).'],
    ['Theme, el tema y su contexto', 'Theme, the topic and its context', 'Theme es el tema o contexto.', 'Theme is the topic or context.']);

  Q('b302', 2, '06', ['¿Qué pieza de PARTS es «en una tabla de tres columnas»?', 'Which PARTS piece is “in a three-column table”?'],
    ['Act, la acción que se pide', 'Act, the action requested', 'La acción sería «crea», «resume»…', 'The action would be “create”, “summarize”…'],
    ['Persona, el rol de Gemini', 'Persona, Gemini’s role', 'La persona es el rol, no el formato.', 'Persona is the role, not the format.'],
    ['Structure', 'Structure', 'Correcto: define el formato de la salida.', 'Correct: it defines the output format.', true],
    ['Recipient, la audiencia', 'Recipient, the audience', 'La audiencia es para quién.', 'Audience is who it’s for.']);

  Q('b303', 2, '06', ['¿Cuál es el prompt **menos** efectivo?', 'Which is the **least** effective prompt?'],
    ['«Hazme algo de historia»', '“Make me something about history”', 'Correcto: no define tarea, audiencia, tema concreto ni formato.', 'Correct: it defines no task, audience, specific topic or format.', true],
    ['«Resume la Revolución Francesa para 14 años, en 5 puntos»', '“Summarize the French Revolution for 14-year-olds in 5 points”', 'Es claro: tarea, audiencia y estructura.', 'It is clear: task, audience and structure.'],
    ['«Crea 6 preguntas sobre el Imperio inca con respuestas»', '“Create 6 questions on the Inca Empire with answers”', 'Es específico en tarea y producto.', 'It is specific about task and product.'],
    ['«Explica la imprenta a niños de 9 años con un ejemplo»', '“Explain the printing press to 9-year-olds with an example”', 'Indica audiencia y enfoque.', 'It states audience and approach.']);

  Q('b304', 2, '06', ['Quieres que Gemini no invente datos al usar tu sílabo. ¿Qué añades?', 'You want Gemini not to invent data when using your syllabus. What do you add?'],
    ['«Sé lo más detallado y extenso posible en todo»', '“Be as detailed and extensive as possible”', 'Pedir más extensión aumenta el riesgo de inventar.', 'Asking for more length raises the risk of invention.'],
    ['«Usa solo el sílabo; marca [VERIFICAR] lo dudoso»', '“Use only the syllabus; mark doubts [VERIFY]”', 'Correcto: es un límite que ancla a tu fuente.', 'Correct: it’s a limit that anchors to your source.', true],
    ['«Actúa como el mayor experto del mundo»', '“Act as the world’s greatest expert”', 'Una persona experta no garantiza fidelidad a tu fuente.', 'An expert persona doesn’t guarantee faithfulness to your source.'],
    ['«Responde muy rápido y sin pensar mucho»', '“Answer very fast without thinking much”', 'La rapidez no reduce las invenciones.', 'Speed doesn’t reduce invention.']);

  Q('b305', 2, '06', ['La guía del examen menciona el marco PARTS. ¿Qué significan sus letras?', 'The exam guide mentions the PARTS framework. What do its letters stand for?'],
    ['Purpose, Audience, Requirements, Tone, Sources', 'Purpose, Audience, Requirements, Tone, Sources', 'Es una combinación inventada.', 'It’s a made-up combination.'],
    ['Persona, Act/Aim, Recipient, Theme, Structure', 'Persona, Act/Aim, Recipient, Theme, Structure', 'Correcto: así lo presenta Google for Education.', 'Correct: that’s how Google for Education presents it.', true],
    ['Plan, Ask, Review, Test, Share', 'Plan, Ask, Review, Test, Share', 'Suena lógico, pero no es PARTS.', 'It sounds logical, but it isn’t PARTS.'],
    ['Prompt, Answer, Result, Task, Summary', 'Prompt, Answer, Result, Task, Summary', 'No corresponde al marco.', 'It doesn’t match the framework.']);

  Q('b306', 2, '07', ['Gemini generó una guía demasiado avanzada para tu grupo. ¿Cuál es la mejor retroalimentación?', 'Gemini generated a guide too advanced for your group. What is the best feedback?'],
    ['«Mejóralo»', '“Improve it”', 'No dice qué cambiar.', 'It doesn’t say what to change.'],
    ['«Está mal, hazlo de nuevo»', '“It’s wrong, do it again”', 'No orienta el cambio.', 'It doesn’t guide the change.'],
    ['«Simplifica para 12 años, frases cortas»', '“Simplify for age 12, short sentences”', 'Correcto: retroalimentación concreta sobre nivel y estilo.', 'Correct: concrete feedback on level and style.', true],
    ['«Cámbialo todo pero que se parezca»', '“Change everything but keep it similar”', 'Es contradictorio y vago.', 'It is contradictory and vague.']);

  Q('b307', 2, '07', ['¿Qué significa **iterar** con Gemini?', 'What does **iterating** with Gemini mean?'],
    ['Repetir el mismo prompt hasta que acierte', 'Repeating the same prompt until it gets it right', 'Repetir igual suele dar el mismo problema.', 'Repeating the same usually gives the same problem.'],
    ['Mejorar el resultado con ajustes concretos', 'Improving the result with concrete tweaks', 'Correcto: cada vuelta se construye sobre la anterior.', 'Correct: each round builds on the previous one.', true],
    ['Abrir un chat nuevo por cada cambio', 'Opening a new chat for every change', 'Pierdes el contexto acumulado.', 'You lose the accumulated context.'],
    ['Cambiar de modelo en cada mensaje', 'Switching models on every message', 'El modelo no es la palanca principal.', 'The model isn’t the main lever.']);

  Q('b308', 2, '06', ['Analiza este prompt: «Crea una rúbrica para mis alumnos». ¿Qué le falta **sobre todo**?', 'Analyze this prompt: “Create a rubric for my students.” What does it **mainly** lack?'],
    ['Un saludo cordial al inicio', 'A friendly greeting at the start', 'Saludar no mejora el resultado.', 'Greeting doesn’t improve the result.'],
    ['Audiencia, tema y criterios concretos', 'Audience, topic and concrete criteria', 'Correcto: sin eso, la rúbrica será genérica.', 'Correct: without them, the rubric will be generic.', true],
    ['La palabra «por favor» al final', 'The word “please” at the end', 'La cortesía no aporta contexto.', 'Courtesy adds no context.'],
    ['Una petición de usar el modelo Pro', 'A request to use the Pro model instead', 'El modelo no compensa la falta de contexto.', 'The model doesn’t make up for missing context.']);

  Q('b309', 2, '07', ['¿Cuándo conviene **editar** tu prompt anterior en lugar de escribir uno nuevo?', 'When is it better to **edit** your earlier prompt instead of writing a new one?'],
    ['Cuando cambias por completo de tema', 'When you completely change topic', 'Para otro tema conviene un chat nuevo.', 'For another topic, a new chat is better.'],
    ['Cuando olvidaste un dato clave del contexto', 'When you forgot a key piece of context', 'Correcto: reenvías el pedido completo y corregido.', 'Correct: you resend the full, corrected request.', true],
    ['Cuando la respuesta ya es perfecta', 'When the answer is already perfect', 'No hace falta editar nada.', 'There’s nothing to edit.'],
    ['Cuando quieres guardar la conversación', 'When you want to save the conversation', 'Editar no guarda la conversación.', 'Editing doesn’t save the conversation.']);

  Q('b310', 2, '06', ['¿Qué estrategia ayuda cuando no sabes bien cómo pedir algo?', 'Which strategy helps when you aren’t sure how to ask for something?'],
    ['Escribir el prompt más largo posible', 'Writing the longest prompt possible', 'La longitud no sustituye la claridad.', 'Length doesn’t replace clarity.'],
    ['Pedir que te haga preguntas antes', 'Asking Gemini to ask you questions first', 'Correcto: así aclara lo que necesitas antes de responder.', 'Correct: it clarifies your needs before answering.', true],
    ['Usar solo palabras en inglés técnico', 'Using only technical English words', 'No es necesario: el lenguaje natural funciona.', 'Not needed: natural language works.'],
    ['Copiar un prompt de otra materia', 'Copying a prompt from another subject', 'No estará adaptado a tu contexto.', 'It won’t be adapted to your context.']);

  Q('b311', 2, '06', ['Quieres un quiz de 8 preguntas para 3.º de secundaria sobre ecosistemas. ¿Qué pieza falta en «Crea un quiz de 8 preguntas sobre ecosistemas»?', 'You want an 8-question quiz for Year 9 on ecosystems. Which piece is missing from “Create an 8-question quiz on ecosystems”?'],
    ['El tema (Theme)', 'The topic (Theme)', 'El tema está: ecosistemas.', 'The topic is there: ecosystems.'],
    ['La tarea (Act)', 'The task (Act)', 'La tarea está: crea un quiz.', 'The task is there: create a quiz.'],
    ['La audiencia (Recipient)', 'The audience (Recipient)', 'Correcto: falta indicar para quién es.', 'Correct: it doesn’t say who it’s for.', true],
    ['El número de preguntas', 'The number of questions', 'Ya indica 8 preguntas.', 'It already states 8 questions.']);

  Q('b312', 2, '07', ['Gemini entregó un plan de clase sólido, pero sin evaluación formativa. ¿Qué haces?', 'Gemini delivered a solid lesson plan, but with no formative assessment. What do you do?'],
    ['Lo descarto y empiezo otro chat nuevo', 'Discard it and start another chat', 'Pierdes un trabajo que ya es sólido.', 'You lose work that is already solid.'],
    ['Pido añadir un cierre con evaluación', 'Ask it to add a closing assessment', 'Correcto: un ajuste concreto completa el plan.', 'Correct: one concrete tweak completes the plan.', true],
    ['Lo uso así y evalúo otro día', 'Use it as is and assess another day', 'Deja un hueco pedagógico importante.', 'It leaves an important teaching gap.'],
    ['Cambio a otro modelo y repito', 'Switch models and repeat', 'El problema no es el modelo.', 'The problem isn’t the model.']);

  Q('b313', 2, '06', ['¿Qué verbo hace más clara la tarea en un prompt?', 'Which verb makes the task clearest in a prompt?'],
    ['«Habla un poco sobre…»', '“Talk a bit about…”', 'Es vago: no dice qué producto quieres.', 'It’s vague: it doesn’t say what product you want.'],
    ['«Compara en una tabla…»', '“Compare in a table…”', 'Correcto: acción clara y formato definido.', 'Correct: a clear action and defined format.', true],
    ['«Piensa un momento en…»', '“Think for a moment about…”', 'No indica un resultado concreto.', 'It indicates no concrete result.'],
    ['«Algo interesante sobre…»', '“Something interesting about…”', 'Es ambiguo.', 'It is ambiguous.']);

  Q('b314', 2, '07', ['Generaste dos versiones de una actividad y ninguna te convence del todo. ¿Qué es lo más útil?', 'You generated two versions of an activity and neither fully convinces you. What is most useful?'],
    ['Aceptar la primera por ser la original', 'Accept the first one since it’s the original', 'No hay una versión «oficial».', 'There’s no “official” version.'],
    ['Pedir combinar lo mejor de ambas', 'Ask to combine the best of both', 'Correcto: iteras sobre lo que ya funciona.', 'Correct: you iterate on what already works.', true],
    ['Abandonar y hacerlo a mano siempre', 'Give up and always do it by hand', 'Desaprovechas la iteración.', 'You waste iteration.'],
    ['Pedir diez versiones más al azar', 'Ask for ten more random versions', 'Sin criterio, más versiones no ayudan.', 'Without criteria, more versions don’t help.']);

  Q('b315', 2, '06', ['¿Qué aporta incluir un **ejemplo** del estilo que buscas en el prompt?', 'What does including an **example** of the style you want add to a prompt?'],
    ['Hace que Gemini copie el ejemplo textual', 'It makes Gemini copy the example verbatim', 'Lo usa como guía, no como texto a copiar.', 'It uses it as a guide, not text to copy.'],
    ['Orienta el formato y el tono esperados', 'It guides the expected format and tone', 'Correcto: un buen ejemplo vale más que mucha explicación.', 'Correct: a good example beats lots of explanation.', true],
    ['Obliga a usar el modelo más potente', 'It forces the most powerful model', 'No afecta el modelo usado.', 'It doesn’t affect the model used.'],
    ['Desactiva las alucinaciones por completo', 'It turns off hallucinations completely', 'Nada las elimina por completo.', 'Nothing eliminates them completely.']);

  Q('b316', 2, '06', ['Construye la mejor consigna para una **agenda de reunión de docentes**:', 'Build the best instruction for a **staff meeting agenda**:'],
    ['«Haz una agenda»', '“Make an agenda”', 'Muy vaga: sin duración, tema ni formato.', 'Too vague: no length, topic or format.'],
    ['«Agenda de 45 min sobre evaluación, en tabla»', '“45-min agenda on assessment, as a table”', 'Correcto: duración, tema y formato.', 'Correct: duration, topic and format.', true],
    ['«Escribe todo lo que haya que hablar»', '“Write everything that needs discussing”', 'Sin límites ni estructura.', 'No limits or structure.'],
    ['«Agenda creativa y original, sorpréndeme»', '“A creative, original agenda, surprise me”', 'La creatividad no es el objetivo de una agenda.', 'Creativity isn’t an agenda’s goal.']);

  Q('b317', 2, '07', ['¿Qué revisa primero un docente al analizar la salida de Gemini para un objetivo de aprendizaje?', 'What does a teacher check first when analyzing Gemini’s output against a learning objective?'],
    ['Que el texto tenga muchos emojis', 'That the text has lots of emojis', 'No es un criterio pedagógico.', 'It isn’t a teaching criterion.'],
    ['Que se alinee al objetivo y al nivel', 'That it aligns to the objective and level', 'Correcto: alineación y pertinencia primero.', 'Correct: alignment and relevance first.', true],
    ['Que sea lo más largo posible', 'That it is as long as possible', 'La extensión no garantiza aprendizaje.', 'Length doesn’t guarantee learning.'],
    ['Que use vocabulario muy técnico', 'That it uses very technical vocabulary', 'Puede ser inadecuado para la audiencia.', 'It may not suit the audience.']);

  Q('b318', 2, '06', ['¿Por qué los **límites** no forman parte de PARTS pero conviene añadirlos?', 'Why aren’t **limits** part of PARTS, yet worth adding?'],
    ['Porque hacen la respuesta más larga', 'Because they make the answer longer', 'No buscan extensión.', 'They aren’t about length.'],
    ['Porque protegen contra datos inventados', 'Because they guard against invented data', 'Correcto: dicen qué verificar, evitar o no inventar.', 'Correct: they say what to verify, avoid or not invent.', true],
    ['Porque cambian el modelo a Pro', 'Because they switch the model to Pro', 'No cambian el modelo.', 'They don’t change the model.'],
    ['Porque traducen la respuesta al inglés', 'Because they translate the answer', 'No tienen relación con el idioma.', 'They have nothing to do with language.']);

  Q('b319', 2, '07', ['Un borrador de correo quedó demasiado formal para las familias. ¿Qué pides?', 'An email draft came out too formal for families. What do you ask?'],
    ['«Hazlo más cercano y cálido»', '“Make it warmer and friendlier”', 'Correcto: ajuste concreto de tono.', 'Correct: a concrete tone tweak.', true],
    ['«Tradúcelo a otro idioma distinto»', '“Translate it into another language”', 'No resuelve el tono.', 'It doesn’t fix the tone.'],
    ['«Ponlo en una tabla de tres columnas»', '“Put it in a three-column table”', 'Cambia el formato, no el tono.', 'It changes format, not tone.'],
    ['«Duplica su extensión con más datos»', '“Double its length with more data”', 'Más largo no es más cercano.', 'Longer isn’t warmer.']);

  Q('b320', 2, '06', ['Tu prompt incluye: «Persona: experto. Tarea: crea un quiz. Formato: tabla». ¿Qué riesgo persiste?', 'Your prompt includes: “Persona: expert. Task: create a quiz. Format: table.” What risk remains?'],
    ['Que no sepa qué es un quiz', 'That it doesn’t know what a quiz is', 'Sabe qué es un quiz.', 'It knows what a quiz is.'],
    ['Que falten audiencia, tema y límites', 'That audience, topic and limits are missing', 'Correcto: sin ellos el quiz será genérico y sin anclaje.', 'Correct: without them the quiz will be generic and unanchored.', true],
    ['Que la tabla no se pueda copiar', 'That the table can’t be copied', 'Las tablas se pueden copiar o exportar.', 'Tables can be copied or exported.'],
    ['Que la persona «experto» sea ilegal', 'That the “expert” persona is not allowed', 'Definir una persona es válido.', 'Setting a persona is valid.']);
})();
