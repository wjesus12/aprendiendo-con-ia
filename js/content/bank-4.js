/* Banco 4 · Dominio 2: archivos y grounding, Canvas, Gems. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b401', 2, '08', ['Quieres que Gemini cree preguntas **basadas en tu lectura**. ¿Qué haces primero?', 'You want Gemini to create questions **based on your reading**. What do you do first?'],
    ['Adjuntar la lectura con el botón +', 'Attach the reading with the + button', 'Correcto: así anclas (grounding) la respuesta a tu fuente.', 'Correct: that anchors (grounds) the answer to your source.', true],
    ['Pedir que la busque en internet por su título', 'Ask it to search the internet by title', 'Puede encontrar otra versión o inventarla.', 'It may find another version or make one up.'],
    ['Describir la lectura de memoria en el chat', 'Describe the reading from memory in the chat', 'Tu resumen puede omitir partes clave.', 'Your summary may leave out key parts.'],
    ['Activar el modelo Pro sin adjuntar nada', 'Turn on the Pro model without attaching anything', 'El modelo no conoce tu lectura si no la das.', 'The model doesn’t know your reading unless you give it.']);

  Q('b402', 2, '08', ['¿Qué es el **grounding**?', 'What is **grounding**?'],
    ['Entrenar un modelo con datos de la escuela', 'Training a model on school data', 'Adjuntar fuentes no entrena el modelo.', 'Attaching sources doesn’t train the model.'],
    ['Anclar la respuesta a fuentes concretas', 'Anchoring the answer to specific sources', 'Correcto: tus documentos o resultados de búsqueda.', 'Correct: your documents or search results.', true],
    ['Bajar la temperatura del modelo a cero', 'Setting the model’s temperature to zero', 'No es una opción del Gemini app ni es grounding.', 'It isn’t a Gemini app option nor grounding.'],
    ['Exportar el chat a un documento de Drive', 'Exporting the chat to a Drive document', 'Exportar no ancla la respuesta.', 'Exporting doesn’t anchor the answer.']);

  Q('b403', 2, '08', ['Subiste una foto de un ejercicio resuelto a mano por un estudiante. ¿Qué debes cuidar?', 'You uploaded a photo of a student’s handwritten solved exercise. What should you take care of?'],
    ['Que se vea su nombre para identificarlo', 'That his name shows so you can identify him', 'Expones datos personales sin necesidad.', 'You expose personal data unnecessarily.'],
    ['Que no aparezcan nombre ni datos personales', 'That no name or personal data appears', 'Correcto: recorta o cubre los datos antes de subir.', 'Correct: crop or cover data before uploading.', true],
    ['Que la foto esté en blanco y negro', 'That the photo is black and white', 'El color no es lo importante.', 'Colour isn’t what matters.'],
    ['Que el ejercicio esté bien resuelto', 'That the exercise is correctly solved', 'Puedes pedirle que detecte errores.', 'You can ask it to spot errors.']);

  Q('b404', 2, '11', ['¿Cómo abres **Canvas** en el Gemini app?', 'How do you open **Canvas** in the Gemini app?'],
    ['Desde el botón + junto a la caja de prompt', 'From the + button next to the prompt box', 'Correcto: ahí eliges la herramienta Canvas.', 'Correct: that’s where you pick the Canvas tool.', true],
    ['Escribiendo «/canvas» en la barra del navegador', 'Typing “/canvas” in the browser address bar', 'La herramienta se activa dentro del app.', 'The tool is turned on inside the app.'],
    ['Desde la configuración de la cuenta de Google', 'From the Google account settings', 'Los ajustes de cuenta no abren Canvas.', 'Account settings don’t open Canvas.'],
    ['Solo pidiendo un plan de pago Ultra', 'Only by requesting a paid Ultra plan', 'Canvas básico está disponible sin pago.', 'Basic Canvas is available without paying.']);

  Q('b405', 2, '11', ['En Canvas quieres cambiar el tono de un solo párrafo. ¿Qué usas?', 'In Canvas you want to change the tone of a single paragraph. What do you use?'],
    ['Select & ask sobre ese párrafo', 'Select & ask on that paragraph', 'Correcto: el cambio se aplica solo a lo seleccionado.', 'Correct: the change applies only to the selection.', true],
    ['Un chat nuevo con el párrafo copiado', 'A new chat with the paragraph pasted', 'Pierdes el contexto del documento.', 'You lose the document’s context.'],
    ['Exportarlo a Docs y empezar de cero', 'Export it to Docs and start over', 'Es más lento y desaprovecha Canvas.', 'It’s slower and wastes Canvas.'],
    ['Pedir que reescriba todo el documento', 'Ask it to rewrite the whole document', 'Puede cambiar partes que estaban bien.', 'It may change parts that were fine.']);

  Q('b406', 2, '11', ['¿Cuál es el orden del método «Canvas eficiente»?', 'What is the order of the “efficient Canvas” method?'],
    ['Generar, Adjuntar, Verificar, Refinar', 'Generate, Attach, Verify, Refine', 'Los insumos van primero.', 'Inputs come first.'],
    ['Adjuntar, Generar, Refinar, Verificar', 'Attach, Generate, Refine, Verify', 'Correcto: insumo, versión, ajuste y contraste.', 'Correct: input, draft, tweak and check.', true],
    ['Refinar, Adjuntar, Generar, Verificar', 'Refine, Attach, Generate, Verify', 'No se refina lo que no existe.', 'You can’t refine what doesn’t exist.'],
    ['Verificar, Generar, Adjuntar, Refinar', 'Verify, Generate, Attach, Refine', 'La verificación va al final.', 'Verification comes last.']);

  Q('b407', 2, '12', ['Tienes una guía en Canvas y quieres que los estudiantes se autoevalúen. ¿Qué pides?', 'You have a guide in Canvas and want students to self-assess. What do you ask for?'],
    ['Convertir la guía en un quiz interactivo', 'Turn the guide into an interactive quiz', 'Correcto: Canvas crea quizzes a partir de un documento.', 'Correct: Canvas creates quizzes from a document.', true],
    ['Una imagen de la guía con Nano Banana', 'An image of the guide with Nano Banana', 'Una imagen no permite autoevaluarse.', 'An image doesn’t allow self-assessment.'],
    ['Un Deep Research sobre autoevaluación', 'A Deep Research on self-assessment', 'Investiga el tema, pero no crea el recurso.', 'It researches the topic but doesn’t create the resource.'],
    ['Un Gem con el nombre de la guía', 'A Gem named after the guide', 'Un Gem no convierte el documento en quiz.', 'A Gem doesn’t turn the document into a quiz.']);

  Q('b408', 2, '11', ['Tu equipo quiere comentar en Google Docs la guía que creaste en Canvas. ¿Qué haces?', 'Your team wants to comment in Google Docs on the guide you made in Canvas. What do you do?'],
    ['Share & export → exportar a Docs', 'Share & export → export to Docs', 'Correcto: exportación directa y editable.', 'Correct: a direct, editable export.', true],
    ['Enviar capturas de pantalla por correo', 'Email them screenshots', 'No se pueden editar ni comentar como documento.', 'They can’t be edited or commented on as a document.'],
    ['Copiar el enlace del historial del chat', 'Copy the chat history link', 'No crea un documento colaborativo.', 'It doesn’t create a collaborative document.'],
    ['Pedirles la contraseña de tu cuenta', 'Ask them for your account password', 'Nunca compartas credenciales.', 'Never share credentials.']);

  Q('b409', 2, '12', ['Quieres una presentación basada **solo** en tus lecturas. ¿Qué combinación usas?', 'You want a presentation based **only** on your readings. Which combination do you use?'],
    ['Gemini Notebook conectado a Canvas', 'Gemini Notebook connected to Canvas', 'Correcto: el notebook aporta fuentes y Canvas construye.', 'Correct: the notebook supplies sources and Canvas builds.', true],
    ['Deep Research y luego Gemini Live', 'Deep Research and then Gemini Live', 'Deep Research usa la web, no solo tus lecturas.', 'Deep Research uses the web, not only your readings.'],
    ['Un chat normal sin adjuntar nada', 'A normal chat with nothing attached', 'Usaría conocimiento general.', 'It would use general knowledge.'],
    ['Nano Banana y un Gem de imágenes', 'Nano Banana and an image Gem', 'Crea imágenes, no una presentación fiel a tus fuentes.', 'It creates images, not a source-faithful presentation.']);

  Q('b410', 2, '12', ['Creaste una app de consultas en Canvas y piensas compartir su enlace público. ¿Qué debes saber?', 'You built a Q&A app in Canvas and plan to share its public link. What should you know?'],
    ['Que el enlace caduca automáticamente en una hora', 'That the link expires automatically in an hour', 'No es así.', 'That isn’t so.'],
    ['Que cualquiera puede ver y editar sus datos', 'That anyone can view and edit its data', 'Correcto: no recojas datos sensibles.', 'Correct: don’t collect sensitive data.', true],
    ['Que solo funciona si se abre desde un celular', 'That it only works when opened on a phone', 'Los enlaces se abren en la web.', 'Links open on the web.'],
    ['Que Google revisa cada respuesta', 'That Google reviews every answer', 'No hay una revisión humana de esos datos.', 'There’s no human review of that data.']);

  Q('b411', 2, '14', ['Diseñas un Gem de «actividades de inicio». ¿Qué parte define el **formato fijo** de cada actividad?', 'You’re designing a “warm-up activities” Gem. Which part defines each activity’s **fixed format**?'],
    ['El nombre del Gem', 'The Gem’s name', 'El nombre ayuda a encontrarlo, no define el formato.', 'The name helps find it; it doesn’t set the format.'],
    ['Las instrucciones', 'The instructions', 'Correcto: ahí defines rol, tarea, formato y límites.', 'Correct: that’s where you set role, task, format and limits.', true],
    ['El historial de chats', 'The chat history', 'El historial no configura el Gem.', 'History doesn’t configure the Gem.'],
    ['El tema claro u oscuro', 'The light or dark theme', 'El tema visual no afecta las respuestas.', 'The visual theme doesn’t affect answers.']);

  Q('b412', 2, '14', ['¿Qué archivo es adecuado como **conocimiento** de un Gem de retroalimentación?', 'Which file is suitable as **knowledge** for a feedback Gem?'],
    ['La rúbrica del curso', 'The course rubric', 'Correcto: es el criterio que debe aplicar.', 'Correct: it’s the criterion it must apply.', true],
    ['La lista de notas con nombres', 'The grade list with names', 'Contiene datos personales innecesarios.', 'It contains unnecessary personal data.'],
    ['Fotos de los estudiantes', 'Photos of the students', 'Datos sensibles e irrelevantes para la tarea.', 'Sensitive data irrelevant to the task.'],
    ['El directorio de contactos', 'The contacts directory', 'Expone datos personales sin necesidad.', 'It exposes personal data unnecessarily.']);

  Q('b413', 2, '14', ['Probaste tu Gem en la vista previa y funciona. ¿Qué falta para conservarlo?', 'You tested your Gem in the preview and it works. What’s missing to keep it?'],
    ['Pulsar Guardar', 'Press Save', 'Correcto: la vista previa no lo guarda sola.', 'Correct: the preview doesn’t save it on its own.', true],
    ['Publicarlo en una galería', 'Publish it to a gallery', 'No hace falta publicarlo.', 'It doesn’t need publishing.'],
    ['Exportarlo a Google Docs', 'Export it to Google Docs', 'Los Gems no se exportan para funcionar.', 'Gems aren’t exported to work.'],
    ['Activar el plan Ultra', 'Turn on the Ultra plan', 'No se requiere Ultra.', 'Ultra isn’t required.']);

  Q('b414', 2, '14', ['¿Qué necesidad del aula resuelve **mejor** un Gem?', 'Which classroom need does a Gem solve **best**?'],
    ['Una pregunta puntual que no se repetirá', 'A one-off question that won’t recur', 'Para algo puntual basta un chat.', 'For a one-off, a chat is enough.'],
    ['Feedback con el mismo formato cada semana', 'Feedback in the same format every week', 'Correcto: una necesidad recurrente con reglas fijas.', 'Correct: a recurring need with fixed rules.', true],
    ['Buscar artículos recientes en la web', 'Finding recent articles on the web', 'Eso es Deep Research.', 'That’s Deep Research.'],
    ['Crear una ilustración para un afiche', 'Creating an illustration for a poster', 'Eso es Nano Banana.', 'That’s Nano Banana.']);

  Q('b415', 2, '08', ['Tienes 2 archivos y una tarea rápida. ¿Dónde trabajas?', 'You have 2 files and a quick task. Where do you work?'],
    ['Adjuntándolos en un chat de Gemini', 'Attaching them in a Gemini chat', 'Correcto: para algo rápido basta adjuntar.', 'Correct: for something quick, attaching is enough.', true],
    ['Creando un notebook con 50 fuentes', 'Creating a notebook with 50 sources', 'Es excesivo para dos archivos.', 'It’s overkill for two files.'],
    ['En Deep Research con un plan largo', 'In Deep Research with a long plan', 'No necesitas investigar la web.', 'You don’t need web research.'],
    ['En Nano Banana como imágenes', 'In Nano Banana as images', 'No es una herramienta de documentos.', 'It isn’t a document tool.']);

  Q('b416', 2, '12', ['¿Qué formatos puede crear Canvas a partir de un documento?', 'Which formats can Canvas create from a document?'],
    ['Solo un resumen breve en texto plano', 'Only a short summary in plain text', 'Puede crear muchos más formatos.', 'It can create many more formats.'],
    ['Slides, quiz, infografía o página web', 'Slides, quiz, infographic or web page', 'Correcto: y también Audio Overview.', 'Correct: and Audio Overview too.', true],
    ['Solo hojas de cálculo de Google Sheets', 'Only spreadsheets in Google Sheets', 'No es su función principal.', 'That isn’t its main function.'],
    ['Solo videos con avatar', 'Only avatar videos', 'Eso corresponde a otras herramientas.', 'That belongs to other tools.']);

  Q('b417', 2, '11', ['Un cambio en Canvas empeoró tu documento. ¿Qué haces?', 'A change in Canvas made your document worse. What do you do?'],
    ['Volver a la versión anterior', 'Go back to the previous version', 'Correcto: Canvas guarda versiones.', 'Correct: Canvas keeps versions.', true],
    ['Borrar el chat y empezar todo', 'Delete the chat and start over', 'Pierdes todo el trabajo.', 'You lose all the work.'],
    ['Reescribirlo a mano desde cero', 'Rewrite it by hand from scratch', 'No hace falta: existe el historial.', 'Not needed: there’s a history.'],
    ['Cambiar al tema oscuro', 'Switch to dark theme', 'El tema no recupera versiones.', 'The theme doesn’t restore versions.']);

  Q('b418', 2, '12', ['¿Qué servicio guarda tu página HTML y su historial de cambios?', 'Which service stores your HTML page and its change history?'],
    ['GitHub', 'GitHub', 'Correcto: guarda versiones y permite volver atrás.', 'Correct: it keeps versions and lets you go back.', true],
    ['Netlify', 'Netlify', 'Netlify publica; el historial lo da GitHub en este flujo.', 'Netlify publishes; GitHub provides the history in this flow.'],
    ['Gemini Live', 'Gemini Live', 'Es conversación por voz.', 'It’s voice conversation.'],
    ['Nano Banana', 'Nano Banana', 'Es para imágenes.', 'It’s for images.']);

  Q('b419', 2, '14', ['¿Cómo se invoca un **skill** en el chat de Gemini?', 'How do you invoke a **skill** in the Gemini chat?'],
    ['Escribiendo / y eligiéndolo', 'Typing / and choosing it', 'Correcto: y Gemini también puede aplicarlo solo.', 'Correct: and Gemini can also apply it on its own.', true],
    ['Escribiendo # y su número', 'Typing # and its number', 'No se usa # para skills.', '# isn’t used for skills.'],
    ['Desde la app de Google Drive', 'From the Google Drive app', 'Los skills viven en Gemini.', 'Skills live in Gemini.'],
    ['Solo por correo electrónico', 'Only by email', 'No se invocan por correo.', 'They aren’t invoked by email.']);

  Q('b420', 2, '08', ['Gemini respondió con datos que no están en el documento que adjuntaste. ¿Qué ajustas?', 'Gemini answered with data that isn’t in the document you attached. What do you adjust?'],
    ['Añado: «usa solo el documento adjunto»', 'Add: “use only the attached document”', 'Correcto: el límite refuerza el anclaje a la fuente.', 'Correct: the limit reinforces anchoring to the source.', true],
    ['Pido más datos para complementarlo', 'Ask for more data to complement it', 'Aumentas el riesgo de datos inventados.', 'You raise the risk of invented data.'],
    ['Quito el documento para que no se confunda', 'Remove the document so it isn’t confused', 'Sin fuente, inventará aún más.', 'Without a source, it will invent even more.'],
    ['Cambio el idioma de la respuesta', 'Change the answer’s language', 'El idioma no es la causa.', 'Language isn’t the cause.']);
})();
