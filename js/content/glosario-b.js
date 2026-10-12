/* Glosario (2/3): Gemini app · Crear · Gemini Notebook */
(function () {
  const G = (t, cat, mod, es, en, alt) => GDC.GLOSSARY.push({ t, cat, mod, alt, d: { es, en } });

  /* Gemini app */
  G('Gemini app', 'app', '03', 'La aplicación de Gemini para conversar con la IA, en la web (gemini.google.com), el móvil y el escritorio.', 'Gemini’s app for chatting with the AI, on the web (gemini.google.com), mobile and desktop.');
  G('Botón +', 'app', '03', 'Botón junto a la caja de prompt para adjuntar archivos o Drive y elegir herramientas como Canvas o Deep Research.', 'Button next to the prompt box to attach files or Drive and choose tools like Canvas or Deep Research.', '+ button');
  G('Selector de modelo', 'app', '04', 'Menú para elegir el modelo (o Auto) y el nivel de thinking.', 'Menu to choose the model (or Auto) and the thinking level.', 'Model picker');
  G('Actividad en Gemini Apps', 'app', '03', 'Ajuste que determina si se guardan tus conversaciones; algunas funciones, como los skills, lo requieren activo.', 'Setting that determines whether your conversations are saved; some features, like skills, require it on.', 'Keep Activity');
  G('Gemini Live', 'app', '10', 'Conversación por voz con Gemini, natural e interrumpible; en el móvil puede usar la cámara.', 'Voice conversation with Gemini, natural and interruptible; on mobile it can use the camera.');
  G('Guided Learning', 'app', '10', 'Modo tutor: Gemini explica por partes y te hace preguntas en lugar de darte la respuesta.', 'Tutor mode: Gemini explains step by step and asks you questions instead of giving the answer.', 'Aprendizaje guiado');
  G('Deep Research', 'app', '09', 'Herramienta que arma un plan, investiga en la web varios minutos y entrega un informe con fuentes.', 'Tool that builds a plan, researches the web for minutes and delivers a sourced report.');
  G('Plan de investigación', 'app', '09', 'Esquema que propone Deep Research antes de empezar; puedes editarlo o aprobarlo.', 'Outline Deep Research proposes before starting; you can edit or approve it.', 'Research plan');
  G('Apps conectadas', 'app', '16', 'Apps (Gmail, Drive, Calendar y otras) que autorizas para que Gemini las consulte desde el chat.', 'Apps (Gmail, Drive, Calendar and others) you authorize Gemini to query from the chat.', 'Connected apps');
  G('@ (mención)', 'app', '16', 'Escribir @ seguido de una app (por ejemplo @Drive) para traerla a la conversación.', 'Typing @ followed by an app (for example @Drive) to bring it into the conversation.', '@ mention');
  G('Personal Intelligence', 'app', '16', 'Capacidad de Gemini de usar tu contenido conectado para respuestas más útiles; se despliega gradualmente.', 'Gemini’s ability to use your connected content for more useful answers; rolling out gradually.');
  G('Gems', 'app', '14', 'Asistentes personalizados con nombre, instrucciones y archivos de conocimiento, para tareas repetidas.', 'Custom assistants with a name, instructions and knowledge files, for repeated tasks.');
  G('Skills', 'app', '14', 'Instrucciones reutilizables que se invocan con / en el chat; están reemplazando a los Gems.', 'Reusable instructions invoked with / in the chat; they are replacing Gems.');
  G('Archivos de conocimiento', 'app', '14', 'Documentos de referencia que añades a un Gem para que los use siempre.', 'Reference documents you add to a Gem so it always uses them.', 'Knowledge files');
  G('App de escritorio de Gemini', 'app', '03', 'Aplicación para Windows (Alt + Espacio) y macOS que abre Gemini desde cualquier lugar.', 'App for Windows (Alt + Space) and macOS that opens Gemini from anywhere.', 'Gemini desktop app');
  G('Plan gratuito', 'app', '04', 'Acceso sin costo al Gemini app, con límites de uso y modelo en Auto.', 'No-cost access to the Gemini app, with usage limits and Auto model selection.', 'Free plan');
  G('Google AI Plus', 'app', '04', 'Suscripción de entrada con más uso y almacenamiento que el plan gratuito.', 'Entry subscription with more usage and storage than the free plan.');
  G('Google AI Pro', 'app', '04', 'Suscripción con modelos avanzados, más límites y funciones como Gemini en Workspace personal.', 'Subscription with advanced models, higher limits and features like Gemini in personal Workspace.');
  G('Google AI Ultra', 'app', '04', 'Suscripción superior con el máximo acceso a modelos y funciones experimentales.', 'Top subscription with maximum access to models and experimental features.');

  /* Crear */
  G('Canvas', 'crear', '11', 'Espacio del Gemini app donde la conversación se convierte en un artefacto editable: documentos, slides, quizzes, apps y webs.', 'Space in the Gemini app where the conversation becomes an editable artifact: documents, slides, quizzes, apps and web pages.');
  G('Select & ask', 'crear', '11', 'En Canvas, seleccionar un fragmento y pedir un cambio solo en esa parte.', 'In Canvas, selecting a passage and asking for a change only there.');
  G('Suggest edits', 'crear', '11', 'En Canvas, Gemini propone mejoras que tú aceptas o rechazas.', 'In Canvas, Gemini proposes improvements you accept or reject.');
  G('Share & export', 'crear', '11', 'Menú de Canvas para compartir un enlace o exportar a Docs, Slides, PDF o Colab.', 'Canvas menu to share a link or export to Docs, Slides, PDF or Colab.');
  G('Versiones', 'crear', '11', 'Historial de Canvas para volver a una versión anterior del documento.', 'Canvas history to go back to an earlier version of the document.', 'Versions');
  G('LaTeX', 'crear', '11', 'Lenguaje para escribir fórmulas matemáticas; Canvas permite editarlas.', 'Language for writing maths formulas; Canvas lets you edit them.');
  G('Colab', 'crear', '11', 'Entorno de Google para ejecutar código Python en el navegador; Canvas exporta código allí.', 'Google environment to run Python code in the browser; Canvas exports code there.');
  G('Code view', 'crear', '12', 'Vista de Canvas para ver y editar el código de una app, con consola de vista previa.', 'Canvas view to see and edit an app’s code, with a preview console.');
  G('Artefacto', 'crear', '11', 'El producto editable que se construye en Canvas a partir de la conversación.', 'The editable product built in Canvas from the conversation.', 'Artifact');
  G('Infografía', 'crear', '12', 'Resumen visual de un tema que Canvas o Gemini Notebook pueden crear.', 'A visual summary of a topic that Canvas or Gemini Notebook can create.', 'Infographic');
  G('Netlify', 'crear', '12', 'Plataforma para publicar sitios web con un enlace público, sin servidores.', 'Platform to publish websites with a public link, no servers needed.');
  G('GitHub', 'crear', '12', 'Plataforma para guardar proyectos y su historial de cambios; permite volver a versiones anteriores.', 'Platform to store projects and their change history; lets you go back to earlier versions.');
  G('Apps Script', 'crear', '12', 'Herramienta de Google para automatizar y conectar apps, por ejemplo guardar un formulario en Sheets.', 'Google tool to automate and connect apps, for example saving a form to Sheets.');
  G('Nano Banana', 'crear', '13', 'Modelo de imágenes de Gemini para crear y editar imágenes con lenguaje natural.', 'Gemini’s image model for creating and editing images with natural language.');
  G('Nano Banana Pro', 'crear', '13', 'Versión de mayor calidad de Nano Banana, con cuota limitada o en planes de pago.', 'Higher-quality version of Nano Banana, with a limited quota or on paid plans.');
  G('Imagen', 'crear', '13', 'Familia de modelos de imagen de Google; la guía del examen menciona Imagen 4.', 'Google’s image model family; the exam guide mentions Imagen 4.');
  G('SynthID', 'crear', '13', 'Marca de agua digital invisible que identifica contenido generado con los modelos de Google.', 'Invisible digital watermark that identifies content generated with Google’s models.');
  G('Google Vids', 'crear', '15', 'App de Workspace para crear videos con guion, voz en off y animaciones generadas con Gemini.', 'Workspace app to create videos with script, voiceover and animations generated with Gemini.');
  G('Veo', 'crear', '15', 'Modelo de Google que genera clips de video a partir de texto o imágenes.', 'Google model that generates video clips from text or images.');
  G('Gemini Omni', 'crear', '15', 'Función para crear y editar videos conversando, incluidos avatares; para suscriptores mayores de 18.', 'Feature to create and edit videos through conversation, including avatars; for subscribers 18+.');
  G('Voz en off', 'crear', '15', 'Narración que acompaña un video; puede generarse con IA.', 'Narration accompanying a video; it can be AI-generated.', 'Voiceover');

  /* Gemini Notebook */
  G('Gemini Notebook', 'notebook', '20', 'Herramienta de Google (antes NotebookLM) que responde con base en tus fuentes y cita el fragmento exacto.', 'Google tool (formerly NotebookLM) that answers based on your sources and cites the exact passage.');
  G('NotebookLM', 'notebook', '20', 'Nombre anterior de Gemini Notebook, hasta julio de 2026; aún aparece en la guía del examen.', 'Former name of Gemini Notebook, until July 2026; it still appears in the exam guide.');
  G('Notebook', 'notebook', '20', 'Cuaderno de Gemini Notebook que agrupa tus fuentes sobre un tema.', 'A Gemini Notebook notebook grouping your sources on a topic.', 'Cuaderno');
  G('Fuente', 'notebook', '20', 'Documento, web, video o audio que cargas a un notebook para que la IA responda con él.', 'Document, web page, video or audio you load into a notebook for the AI to answer from.', 'Source');
  G('Cita', 'notebook', '20', 'Referencia numerada que lleva al fragmento exacto de la fuente que respalda una respuesta.', 'Numbered reference leading to the exact source passage backing an answer.', 'Citation');
  G('Studio', 'notebook', '21', 'Panel de Gemini Notebook que transforma tus fuentes en audio, video, mapas, tarjetas, quizzes y más.', 'Gemini Notebook panel that turns your sources into audio, video, maps, cards, quizzes and more.');
  G('Audio Overview', 'notebook', '21', 'Conversación tipo pódcast generada a partir de tus fuentes; personalizable en formato, idioma y enfoque.', 'Podcast-style conversation generated from your sources; customizable in format, language and focus.');
  G('Modo interactivo', 'notebook', '21', 'Opción del Audio Overview para intervenir y hacer preguntas a las voces.', 'Audio Overview option to jump in and ask the voices questions.', 'Interactive mode');
  G('Video Overview', 'notebook', '21', 'Presentación narrada con diapositivas generada a partir de tus fuentes.', 'Narrated slideshow generated from your sources.');
  G('Mind Map', 'notebook', '21', 'Mapa de temas y subtemas conectados que resume la estructura de tus fuentes.', 'Map of connected topics and subtopics summarizing your sources’ structure.', 'Mapa mental');
  G('Flashcards', 'notebook', '21', 'Tarjetas de pregunta y respuesta para repasar, con explicación y cita.', 'Question-and-answer cards for review, with explanation and citation.', 'Tarjetas de estudio');
  G('Reports', 'notebook', '21', 'Documentos generados por el Studio, como guías de estudio o documentos informativos.', 'Documents generated by Studio, such as study guides or briefing docs.', 'Informes');
  G('Data Tables', 'notebook', '21', 'Tablas comparativas creadas a partir de tus fuentes; se pueden exportar a Sheets.', 'Comparison tables created from your sources; exportable to Sheets.', 'Tablas de datos');
})();
