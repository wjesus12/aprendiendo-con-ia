/* Banco 5 · Dominio 2: Workspace (Gmail, Docs, Slides, Forms, Vids, Sheets), Studio, Deep Research, Nano Banana. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b501', 2, '17', ['Debes enviar a las familias un correo de inicio de año. ¿Qué prompt da el mejor borrador?', 'You must send families a start-of-year email. Which prompt gives the best draft?'],
    ['«Escribe un correo para las familias de mi clase»', '“Write an email to my class’s families”', 'Falta contenido, tono y extensión.', 'Content, tone and length are missing.'],
    ['«Correo cálido: horario, contacto y una pregunta»', '“Warm email: schedule, contact and a question”', 'Correcto: tono y contenido claros.', 'Correct: clear tone and content.', true],
    ['«Haz un correo largo y muy formal de bienvenida»', '“Make a long and very formal welcome email”', 'Largo y formal no es lo que suelen necesitar las familias.', 'Long and formal isn’t what families usually need.'],
    ['«Copia el correo de bienvenida de otra escuela»', '“Copy another school’s welcome email”', 'No se adapta a tu contexto.', 'It isn’t adapted to your context.']);

  Q('b502', 2, '17', ['En Google Docs, Gemini te sugiere ediciones. ¿Quién las ve antes de que las apruebes?', 'In Google Docs, Gemini suggests edits. Who sees them before you approve them?'],
    ['Solo tú', 'Only you', 'Correcto: tu equipo no ve cambios a medio revisar.', 'Correct: your team doesn’t see half-reviewed changes.', true],
    ['Todas las personas del documento', 'Everyone on the document', 'Son privadas hasta aprobarlas.', 'They’re private until approved.'],
    ['El administrador del dominio', 'The domain administrator', 'El administrador no revisa ediciones.', 'The administrator doesn’t review edits.'],
    ['Cualquiera con el enlace del Doc', 'Anyone with the Doc link', 'No se muestran a otros.', 'They aren’t shown to others.']);

  Q('b503', 2, '18', ['Quieres un quiz en Forms alineado a tu clase. ¿Qué es lo más importante al revisarlo?', 'You want a Forms quiz aligned to your lesson. What matters most when reviewing it?'],
    ['Que tenga muchas preguntas', 'That it has many questions', 'La cantidad no garantiza alineación.', 'Quantity doesn’t guarantee alignment.'],
    ['Que cada pregunta evalúe un objetivo', 'That each question assesses an objective', 'Correcto: alineación a los objetivos de aprendizaje.', 'Correct: alignment to the learning objectives.', true],
    ['Que las preguntas sean muy difíciles', 'That the questions are very hard', 'La dificultad debe ajustarse al objetivo.', 'Difficulty should fit the objective.'],
    ['Que use imágenes en cada pregunta', 'That it uses images in every question', 'Las imágenes no son el criterio central.', 'Images aren’t the core criterion.']);

  Q('b504', 2, '18', ['Quieres convertir tu presentación de Slides en un video con guion y voz en off. ¿Qué herramienta usas?', 'You want to turn your Slides deck into a video with a script and voiceover. Which tool do you use?'],
    ['Google Vids', 'Google Vids', 'Correcto: crea videos con guion, voz y animación.', 'Correct: it creates videos with script, voice and animation.', true],
    ['Google Sheets', 'Google Sheets', 'Es para hojas de cálculo.', 'It’s for spreadsheets.'],
    ['Gemini Notebook', 'Gemini Notebook', 'Sus Video Overviews resumen fuentes, no convierten tu deck.', 'Its Video Overviews summarize sources; they don’t convert your deck.'],
    ['Nano Banana', 'Nano Banana', 'Crea imágenes, no videos.', 'It creates images, not videos.']);

  Q('b505', 2, '18', ['En el panel de Gemini en Slides, ¿cómo usas un Doc de tu Drive como base?', 'In the Gemini panel in Slides, how do you use a Doc from your Drive as the basis?'],
    ['Mencionándolo con @', 'Mentioning it with @', 'Correcto: @ trae tus archivos al pedido.', 'Correct: @ brings your files into the request.', true],
    ['Pegándolo en las notas del orador', 'Pasting it in the speaker notes', 'Las notas no son fuente del panel.', 'Notes aren’t a panel source.'],
    ['Enviándolo por correo a Gemini', 'Emailing it to Gemini', 'Gemini no recibe archivos por correo.', 'Gemini doesn’t receive files by email.'],
    ['Imprimiéndolo y escaneándolo', 'Printing and scanning it', 'Es innecesario.', 'It’s unnecessary.']);

  Q('b506', 2, '19', ['El sílabo pondera prácticas 40 %, parcial 25 % y final 35 %. ¿Qué fórmula es correcta?', 'The syllabus weights practice 40%, midterm 25% and final 35%. Which formula is correct?'],
    ['=B2*0,40+C2*0,25+D2*0,35', '=B2*0.40+C2*0.25+D2*0.35', 'Correcto: pesos correctos que suman 100 %.', 'Correct: right weights adding up to 100%.', true],
    ['=B2*0,40+C2*0,35+D2*0,25', '=B2*0.40+C2*0.35+D2*0.25', 'Intercambia parcial y final.', 'It swaps midterm and final.'],
    ['=PROMEDIO(B2:D2)', '=AVERAGE(B2:D2)', 'Ignora las ponderaciones.', 'It ignores the weights.'],
    ['=B2*0,40+C2*0,35+D2*0,35', '=B2*0.40+C2*0.35+D2*0.35', 'Suma 110 %.', 'It adds up to 110%.']);

  Q('b507', 2, '19', ['Gemini te dio una fórmula para Sheets. ¿Cómo la validas?', 'Gemini gave you a Sheets formula. How do you validate it?'],
    ['Con un caso que calculas a mano', 'With a case you calculate by hand', 'Correcto: un caso conocido revela errores.', 'Correct: a known case reveals errors.', true],
    ['Preguntándole si está bien', 'Asking it whether it’s right', 'La autoconfirmación no es verificación.', 'Self-confirmation isn’t verification.'],
    ['Copiándola en toda la hoja ya', 'Copying it across the sheet right away', 'Multiplicarías un posible error.', 'You’d multiply a possible error.'],
    ['Cambiando el formato a moneda', 'Changing the format to currency', 'El formato no valida el cálculo.', 'Format doesn’t validate the calculation.']);

  Q('b508', 2, '21', ['¿Qué formato del Studio muestra de un vistazo cómo se relacionan los temas de tus fuentes?', 'Which Studio format shows at a glance how your sources’ topics relate?'],
    ['Mind Map', 'Mind Map', 'Correcto: temas y subtemas conectados.', 'Correct: connected topics and subtopics.', true],
    ['Audio Overview', 'Audio Overview', 'Es secuencial, no visual.', 'It’s sequential, not visual.'],
    ['Flashcards', 'Flashcards', 'Sirven para memorizar.', 'They’re for memorizing.'],
    ['Reports', 'Reports', 'Son documentos escritos.', 'They’re written documents.']);

  Q('b509', 2, '21', ['Evalúa: ¿cuándo aporta **más** un Audio Overview que una lectura tradicional?', 'Evaluate: when does an Audio Overview add **more** than a traditional reading?'],
    ['Siempre, en cualquier situación y con cualquier grupo', 'Always, in any situation and with any group', 'No siempre: puede simplificar de más.', 'Not always: it can oversimplify.'],
    ['Para acercar un tema y repasar en el trayecto', 'To introduce a topic and review on the go', 'Correcto: complementa la lectura, no la sustituye.', 'Correct: it complements reading, it doesn’t replace it.', true],
    ['Para evaluar a los estudiantes con una nota final', 'To assess students with a final grade at the end', 'Un audio no evalúa.', 'An audio doesn’t assess.'],
    ['Para reemplazar todas las lecturas', 'To replace all readings', 'Es complemento, no reemplazo.', 'It’s a complement, not a replacement.']);

  Q('b510', 2, '21', ['¿Qué puedes personalizar en un Audio Overview?', 'What can you customize in an Audio Overview?'],
    ['Formato, idioma, duración y enfoque', 'Format, language, length and focus', 'Correcto: por ejemplo, centrarlo en ciertas causas.', 'Correct: for example, focusing on certain causes.', true],
    ['Solo el volumen de las dos voces', 'Only the volume of the two voices', 'Puedes personalizar mucho más.', 'You can customize much more.'],
    ['Las fuentes de otros usuarios', 'Other users’ sources', 'Solo usa tus fuentes.', 'It only uses your sources.'],
    ['La calificación de tus alumnos', 'The grades of your students', 'No tiene relación con calificaciones.', 'It has nothing to do with grades.']);

  Q('b511', 2, '09', ['Lanzas un Deep Research y aparece un plan. ¿Qué haces?', 'You run a Deep Research and a plan appears. What do you do?'],
    ['Lo reviso y ajusto antes de iniciar', 'Review and adjust it before starting', 'Correcto: es tu mejor momento para orientarlo.', 'Correct: it’s your best moment to steer it.', true],
    ['Lo apruebo sin leer para ahorrar tiempo', 'Approve it unread to save time', 'Pierdes la oportunidad de orientarlo.', 'You lose the chance to steer it.'],
    ['Lo cancelo: el plan significa error', 'Cancel it: the plan means an error', 'El plan es parte normal del flujo.', 'The plan is a normal part of the flow.'],
    ['Lo copio en un Gem y lo ejecuto allí', 'Copy it into a Gem and run it there', 'No es el flujo de Deep Research.', 'That isn’t the Deep Research flow.']);

  Q('b512', 2, '09', ['¿Qué recibes al final de un Deep Research?', 'What do you get at the end of a Deep Research?'],
    ['Un informe con fuentes enlazadas', 'A report with linked sources', 'Correcto: y puedes exportarlo a Docs.', 'Correct: and you can export it to Docs.', true],
    ['Un video corto con un avatar', 'A short video with an avatar', 'Eso corresponde a otras herramientas.', 'That belongs to other tools.'],
    ['Una imagen que resume el tema', 'An image summarizing the topic', 'No es el resultado principal.', 'It isn’t the main output.'],
    ['Una nota de examen', 'An exam grade', 'No evalúa a nadie.', 'It assesses no one.']);

  Q('b513', 2, '13', ['Quieres una imagen para tu ficha de ciencias. ¿Qué prompt es mejor para Nano Banana?', 'You want an image for your science worksheet. Which prompt is best for Nano Banana?'],
    ['«Una planta bonita»', '“A pretty plant”', 'No dice estilo, audiencia ni uso.', 'It says no style, audience or use.'],
    ['«Planta en corte, estilo plano, para 11 años»', '“Plant cross-section, flat style, age 11”', 'Correcto: contenido, estilo y audiencia.', 'Correct: content, style and audience.', true],
    ['«La mejor imagen posible de una planta, por favor»', '“The best possible image of a plant”', '«La mejor» no da criterios.', '“The best” gives no criteria.'],
    ['«Una foto real de una planta concreta»', '“A real photo of a specific plant”', 'La IA no toma fotos reales.', 'AI doesn’t take real photos.']);

  Q('b514', 2, '13', ['Quieres quitar el fondo de una imagen generada. ¿Cómo lo pides?', 'You want to remove the background from a generated image. How do you ask?'],
    ['Describiendo solo el cambio: «quita el fondo»', 'Describing just the change: “remove background”', 'Correcto: Nano Banana conserva el resto.', 'Correct: Nano Banana keeps the rest.', true],
    ['Volviendo a describir toda la imagen desde cero', 'Describing the whole image again from scratch', 'Puede cambiar lo que ya estaba bien.', 'It may change what was already fine.'],
    ['Exportando la imagen a Google Sheets', 'Exporting the image to Google Sheets', 'Sheets no edita imágenes.', 'Sheets doesn’t edit images.'],
    ['Pidiendo un Deep Research de fondos', 'Requesting a Deep Research on backgrounds', 'No es una tarea de investigación.', 'It isn’t a research task.']);

  Q('b515', 2, '19', ['Desde el Gemini app quieres un inventario de tus rúbricas guardadas en Drive. ¿Qué haces?', 'From the Gemini app you want an inventory of the rubrics saved in your Drive. What do you do?'],
    ['Escribir «@Drive» y pedir la tabla', 'Type “@Drive” and ask for the table', 'Correcto: invocas tu Drive conectado.', 'Correct: you invoke your connected Drive.', true],
    ['Abrir un Deep Research de rúbricas', 'Open a Deep Research on rubrics', 'Busca en la web, no en tu Drive.', 'It searches the web, not your Drive.'],
    ['Crear una imagen de la carpeta', 'Create an image of the folder', 'No sirve para inventariar.', 'It doesn’t help inventory.'],
    ['Escribir «/Drive» para un skill', 'Type “/Drive” for a skill', 'La barra invoca skills, no apps.', 'The slash invokes skills, not apps.']);
})();
