/* Retos de construcción · slots[].expect = id de la pieza correcta; el resto de piezas son distractores */
(function () {
  const T = (es, en) => ({ es, en });
  const P = (id, es, en, wes, wen) => ({ id, t: T(es, en), why: T(wes, wen) });
  const S = (expect, es, en) => ({ expect, label: es ? T(es, en) : null });

  GDC.RETOS.push(
    {
      id: 'reto01', mod: '06', kind: 'slots', preview: true,
      title: T('Arma un prompt con PARTS + Límites', 'Build a prompt with PARTS + Limits'),
      brief: T('Necesitas una rúbrica para un ensayo argumentativo de estudiantes de 15 años. Coloca cada fragmento en la pieza de PARTS que le corresponde y añade los límites.', 'You need a rubric for an argumentative essay by 15-year-olds. Place each fragment in its PARTS piece and add the limits.'),
      slots: [S('p', 'Persona', 'Persona'), S('a', 'Act', 'Act'), S('r', 'Recipient', 'Recipient'), S('t', 'Theme', 'Theme'), S('s', 'Structure', 'Structure'), S('l', 'Límites', 'Limits')],
      pieces: [
        P('p', 'Actúa como docente de lenguaje de secundaria', 'Act as a secondary-school language teacher', 'Define el rol que adopta Gemini.', 'It sets the role Gemini takes on.'),
        P('a', 'Crea una rúbrica analítica', 'Create an analytic rubric', 'Es la tarea, con un verbo de acción.', 'It is the task, with an action verb.'),
        P('r', 'para estudiantes de 15 años', 'for 15-year-old students', 'Dice para quién es el resultado.', 'It says who the result is for.'),
        P('t', 'de un ensayo argumentativo de 600 palabras', 'for a 600-word argumentative essay', 'Es el tema y el contexto del pedido.', 'It is the topic and context of the request.'),
        P('s', 'en una tabla con 4 criterios y 4 niveles', 'in a table with 4 criteria and 4 levels', 'Define el formato de la salida.', 'It defines the output format.'),
        P('l', 'usa solo los criterios de mi sílabo; no inventes otros', 'use only my syllabus criteria; don’t invent others', 'Ancla el resultado a tu fuente y evita lo inventado.', 'It anchors the result to your source and prevents invention.'),
        P('x1', 'hazlo lo más largo posible', 'make it as long as possible', 'Distractor: la extensión no mejora una rúbrica y la vuelve difícil de usar.', 'Distractor: length doesn’t improve a rubric and makes it hard to use.'),
        P('x2', 'sé muy creativo', 'be very creative', 'Distractor: la creatividad no es un criterio útil para una rúbrica.', 'Distractor: creativity isn’t a useful criterion for a rubric.')
      ],
      wrap: T('Un prompt con **PARTS + Límites** le da a Gemini rol, tarea, audiencia, tema, formato y fronteras. El resultado sale casi listo para usar.', 'A prompt with **PARTS + Limits** gives Gemini a role, task, audience, topic, format and boundaries. The result comes out nearly ready to use.')
    },
    {
      id: 'reto02', mod: '12', kind: 'order',
      title: T('Laboratorio 1: presentación con Gemini Notebook + Canvas', 'Lab 1: presentation with Gemini Notebook + Canvas'),
      brief: T('Quieres una presentación de 10 diapositivas basada solo en tu temario y un artículo. Ordena los pasos del laboratorio. Hay dos pasos que no pertenecen al flujo.', 'You want a 10-slide presentation based only on your syllabus and an article. Put the lab steps in order. Two steps don’t belong to the flow.'),
      slots: [S('n1'), S('n2'), S('n3'), S('n4'), S('n5'), S('n6')],
      pieces: [
        P('n1', 'Entrar a Gemini Notebook', 'Open Gemini Notebook', 'Primero vas a la herramienta que guardará tus fuentes.', 'First you go to the tool that will hold your sources.'),
        P('n2', 'Crear un cuaderno nuevo', 'Create a new notebook', 'Un cuaderno por tema mantiene las fuentes ordenadas.', 'One notebook per topic keeps sources organized.'),
        P('n3', 'Subir el temario y el artículo', 'Upload the syllabus and the article', 'Son las fuentes en las que se basará la presentación.', 'They are the sources the presentation will be based on.'),
        P('n4', 'Ir a Gemini y conectar el notebook', 'Go to Gemini and connect the notebook', 'El chat de Gemini usará el notebook como fuente.', 'The Gemini chat will use the notebook as its source.'),
        P('n5', 'Activar Canvas con el notebook conectado', 'Turn on Canvas with the notebook connected', 'Canvas convertirá la conversación en diapositivas editables.', 'Canvas will turn the conversation into editable slides.'),
        P('n6', 'Usar el prompt estructurado y revisar', 'Use the structured prompt and review', 'Propósito, audiencia, formato y límites; luego verificas.', 'Purpose, audience, format and limits; then you verify.'),
        P('x1', 'Lanzar Deep Research para buscar más artículos', 'Run Deep Research to find more articles', 'Distractor: el reto pide usar solo tus documentos.', 'Distractor: the challenge asks to use only your documents.'),
        P('x2', 'Generar la portada con Nano Banana primero', 'Generate the cover with Nano Banana first', 'Distractor: la imagen no es parte del flujo base y no va antes de las fuentes.', 'Distractor: the image isn’t part of the core flow and doesn’t come before the sources.')
      ],
      wrap: T('Fuentes primero (Notebook), luego construcción (Canvas) y siempre revisión. Así la presentación usa **solo tus materiales**.', 'Sources first (Notebook), then building (Canvas), and always review. That way the presentation uses **only your materials**.')
    },
    {
      id: 'reto03', mod: '12', kind: 'slots', preview: true,
      title: T('Laboratorio 2: prompt del blog informativo', 'Lab 2: the informative blog prompt'),
      brief: T('Arma el prompt estructurado para que Canvas cree un blog de una página para tu curso, con un formulario de consultas conectado a Google Sheets.', 'Build the structured prompt so Canvas creates a one-page blog for your course, with a questions form connected to Google Sheets.'),
      slots: [S('pr', 'Propósito', 'Purpose'), S('au', 'Audiencia', 'Audience'), S('fo', 'Formato', 'Format'), S('db', 'Base de datos', 'Database'), S('li', 'Límites', 'Limits')],
      pieces: [
        P('pr', 'Crear un blog informativo de una página sobre mi curso, usando solo el sílabo adjunto', 'Create a one-page informative blog about my course, using only the attached syllabus', 'Dice qué problema resuelve el recurso y con qué fuente.', 'It says what problem the resource solves and from which source.'),
        P('au', 'Estudiantes de primer ciclo con conocimientos básicos', 'First-year students with basic knowledge', 'Define para quién se diseña y su nivel.', 'It defines who it is designed for and their level.'),
        P('fo', 'Un único HTML con CSS y JS integrados, índice y 3 preguntas desplegables', 'A single HTML with embedded CSS and JS, an index and 3 expandable questions', 'Describe la forma exacta del producto.', 'It describes the product’s exact form.'),
        P('db', 'Cada consulta se guarda en Google Sheets mediante Apps Script', 'Each question is saved to Google Sheets via Apps Script', 'Conecta el formulario con una hoja de cálculo.', 'It connects the form to a spreadsheet.'),
        P('li', 'No inventes datos; marca [VERIFICAR]; no pidas datos sensibles', 'Don’t invent data; mark [VERIFY]; don’t request sensitive data', 'Protege contra lo inventado y cuida la privacidad.', 'It protects against invention and safeguards privacy.'),
        P('x1', 'Pide nombre, DNI, celular y dirección en el formulario', 'Ask for name, ID, phone and address in the form', 'Distractor: recoge datos sensibles innecesarios.', 'Distractor: it collects unnecessary sensitive data.'),
        P('x2', 'Usa librerías externas de cualquier CDN', 'Use external libraries from any CDN', 'Distractor: el laboratorio pide un archivo único sin librerías externas.', 'Distractor: the lab asks for a single file with no external libraries.')
      ],
      wrap: T('Propósito, audiencia, formato, base de datos y límites: con esa estructura Canvas entrega un blog funcional y además el paso a paso para conectar Sheets con Apps Script.', 'Purpose, audience, format, database and limits: with that structure Canvas delivers a working blog plus the steps to connect Sheets with Apps Script.')
    },
    {
      id: 'reto04', mod: '14', kind: 'slots',
      title: T('Diseña un Gem «Marco de feedback»', 'Design a “Feedback frame” Gem'),
      brief: T('Crea un Gem que dé retroalimentación a trabajos de estudiantes de secundaria con un formato fijo. Coloca cada pieza en la parte del Gem que corresponde.', 'Create a Gem that gives feedback on secondary students’ work in a fixed format. Place each piece in the right part of the Gem.'),
      slots: [S('nm', 'Nombre', 'Name'), S('ro', 'Rol', 'Role'), S('ta', 'Tarea', 'Task'), S('to', 'Tono y extensión', 'Tone and length'), S('kn', 'Conocimiento (archivo)', 'Knowledge (file)')],
      pieces: [
        P('nm', 'Feedback 3 pasos · Secundaria', '3-step feedback · Secondary', 'Un nombre claro para encontrarlo y reutilizarlo.', 'A clear name to find and reuse it.'),
        P('ro', 'Eres un asistente de retroalimentación para docentes', 'You are a feedback assistant for teachers', 'Define quién es el Gem.', 'It defines who the Gem is.'),
        P('ta', 'Da un logro, una mejora con ejemplo y un siguiente paso', 'Give one strength, one improvement with an example and one next step', 'Es el formato fijo que se repetirá siempre.', 'It is the fixed format that will always repeat.'),
        P('to', 'Cercano y respetuoso; máximo 120 palabras', 'Warm and respectful; 120 words maximum', 'Mantiene el estilo coherente con tus estudiantes.', 'It keeps the style consistent for your students.'),
        P('kn', 'La rúbrica del curso', 'The course rubric', 'Es el criterio de referencia que el Gem debe usar.', 'It is the reference criterion the Gem must use.'),
        P('x1', 'La lista de notas con nombres y DNI', 'The grade list with names and IDs', 'Distractor: datos personales que el Gem no necesita.', 'Distractor: personal data the Gem doesn’t need.'),
        P('x2', 'Pon la nota final de cada trabajo', 'Give each piece of work a final grade', 'Distractor: calificar es una decisión docente, no del Gem.', 'Distractor: grading is a teacher’s decision, not the Gem’s.')
      ],
      wrap: T('Un buen Gem tiene **nombre, rol, tarea, tono** y **conocimiento** limitado a lo necesario. Recuerda pulsar **Guardar** y que, con el tiempo, los Gems pasarán a skills.', 'A good Gem has a **name, role, task, tone** and **knowledge** limited to what is needed. Remember to press **Save**, and that over time Gems will move to skills.')
    },
    {
      id: 'reto05', mod: '24', kind: 'slots',
      title: T('Cada tarea con su herramienta', 'Each task with its tool'),
      brief: T('Asigna a cada tarea docente la herramienta del ecosistema Gemini más adecuada. Sobran dos herramientas.', 'Assign each teaching task the most suitable tool in the Gemini ecosystem. Two tools are left over.'),
      slots: [
        S('nb', 'Resumir 20 lecturas del curso con citas', 'Summarize 20 course readings with citations'),
        S('cv', 'Convertir una guía en una presentación editable', 'Turn a guide into an editable presentation'),
        S('dr', 'Revisar la evidencia reciente sobre una estrategia', 'Review recent evidence on a strategy'),
        S('nbn', 'Crear una ilustración para la ficha', 'Create an illustration for the worksheet'),
        S('gl', 'Que un estudiante aprenda a resolver paso a paso', 'Help a student learn to solve step by step')
      ],
      pieces: [
        P('nb', 'Gemini Notebook', 'Gemini Notebook', 'Responde solo con tus fuentes y cita el fragmento exacto.', 'It answers only from your sources and cites the exact passage.'),
        P('cv', 'Canvas', 'Canvas', 'Transforma documentos en slides, quizzes, webs o apps.', 'It turns documents into slides, quizzes, web pages or apps.'),
        P('dr', 'Deep Research', 'Deep Research', 'Investiga la web y entrega un informe con fuentes.', 'It researches the web and delivers a sourced report.'),
        P('nbn', 'Nano Banana', 'Nano Banana', 'Crea y edita imágenes con lenguaje natural.', 'It creates and edits images with natural language.'),
        P('gl', 'Guided Learning', 'Guided Learning', 'Guía con preguntas en lugar de dar la respuesta.', 'It guides with questions instead of giving the answer.'),
        P('x1', 'Gemini Live', 'Gemini Live', 'Sobra: sirve para conversar por voz, no para estas tareas.', 'Left over: it is for voice conversation, not these tasks.'),
        P('x2', 'Google Vids', 'Google Vids', 'Sobra: crea videos, que ninguna de estas tareas pide.', 'Left over: it creates videos, which none of these tasks asks for.')
      ],
      wrap: T('Fuentes con citas → Notebook · producto editable → Canvas · investigar la web → Deep Research · imágenes → Nano Banana · aprender paso a paso → Guided Learning.', 'Sources with citations → Notebook · editable product → Canvas · web research → Deep Research · images → Nano Banana · step-by-step learning → Guided Learning.')
    },
    {
      id: 'reto06', mod: '09', kind: 'order',
      title: T('El flujo de Deep Research', 'The Deep Research flow'),
      brief: T('Ordena los pasos para obtener un informe útil con Deep Research. Hay un paso que no corresponde.', 'Put the steps in order to get a useful Deep Research report. One step doesn’t belong.'),
      slots: [S('d1'), S('d2'), S('d3'), S('d4'), S('d5')],
      pieces: [
        P('d1', 'Elegir Deep Research desde el botón +', 'Choose Deep Research from the + button', 'Activa la herramienta en el Gemini app.', 'It activates the tool in the Gemini app.'),
        P('d2', 'Describir el tema con alcance, contexto y periodo', 'Describe the topic with scope, context and period', 'Un pedido delimitado produce un plan útil.', 'A well-scoped request produces a useful plan.'),
        P('d3', 'Revisar y editar el plan propuesto', 'Review and edit the proposed plan', 'Es el mejor momento para orientar la investigación.', 'It is the best moment to steer the research.'),
        P('d4', 'Esperar mientras investiga varios minutos', 'Wait while it researches for several minutes', 'Gemini busca, lee y ajusta su búsqueda.', 'Gemini searches, reads and refines its search.'),
        P('d5', 'Verificar las fuentes clave y exportar a Docs', 'Verify the key sources and export to Docs', 'Cierras con verificación antes de usar el informe.', 'You close with verification before using the report.'),
        P('x1', 'Aprobar el plan sin leerlo para ahorrar tiempo', 'Approve the plan without reading it to save time', 'Distractor: perderías la oportunidad de orientar la búsqueda.', 'Distractor: you would lose the chance to steer the search.')
      ],
      wrap: T('Plan editable + investigación + **verificación**. El plan es tu volante; las fuentes, tu responsabilidad.', 'Editable plan + research + **verification**. The plan is your steering wheel; the sources are your responsibility.')
    },
    {
      id: 'reto07', mod: '25', kind: 'slots',
      title: T('Evaluar el proceso, no solo el producto', 'Assess the process, not just the product'),
      brief: T('Diseña la evidencia de proceso para un trabajo en el que los estudiantes pueden usar IA. Une cada tipo de evidencia con lo que muestra.', 'Design process evidence for an assignment where students may use AI. Match each type of evidence with what it shows.'),
      slots: [
        S('bo', 'Borradores', 'Drafts'), S('de', 'Decisiones', 'Decisions'), S('fu', 'Fuentes', 'Sources'), S('df', 'Defensa', 'Defense')
      ],
      pieces: [
        P('bo', 'Versiones y cambios realizados en el producto', 'Versions and changes made to the product', 'Muestra cómo evolucionó el trabajo.', 'It shows how the work evolved.'),
        P('de', 'Razones para aceptar o descartar sugerencias de la IA', 'Reasons for accepting or rejecting AI suggestions', 'Hace visible el criterio del estudiante.', 'It makes the student’s judgment visible.'),
        P('fu', 'Información que el estudiante verificó', 'Information the student verified', 'Muestra la contrastación con fuentes fiables.', 'It shows cross-checking with reliable sources.'),
        P('df', 'Explicación oral o escrita de lo producido', 'Oral or written explanation of what was produced', 'Revela comprensión y autoría.', 'It reveals understanding and authorship.'),
        P('x1', 'Porcentaje que marca un detector de IA', 'Percentage flagged by an AI detector', 'Distractor: los detectores no son fiables como prueba única.', 'Distractor: detectors aren’t reliable as sole evidence.'),
        P('x2', 'Número de veces que abrió Gemini', 'Number of times they opened Gemini', 'Distractor: la frecuencia de uso no muestra aprendizaje.', 'Distractor: frequency of use doesn’t show learning.')
      ],
      wrap: T('La evaluación gana calidad cuando el proceso queda visible: **borradores, decisiones, fuentes y defensa** permiten valorar criterio, comprensión y autoría.', 'Assessment improves when the process is visible: **drafts, decisions, sources and defense** let you assess judgment, understanding and authorship.')
    },
    {
      id: 'reto08', mod: '18', kind: 'slots',
      title: T('Una clase con Slides, Forms y Vids', 'A lesson with Slides, Forms and Vids'),
      brief: T('Planifica una secuencia completa con Gemini en Workspace. Asigna a cada momento de la clase el producto adecuado.', 'Plan a complete sequence with Gemini in Workspace. Assign each moment of the lesson the right product.'),
      slots: [
        S('sl', 'Antes de clase', 'Before class'), S('fm', 'Cierre de clase', 'End of class'), S('vd', 'Después de clase', 'After class')
      ],
      pieces: [
        P('sl', 'Presentación en Slides con imágenes y preguntas', 'Slides deck with images and questions', 'Preparas lo que vas a exponer.', 'You prepare what you will present.'),
        P('fm', 'Quiz de salida en Forms alineado a los objetivos', 'Forms exit quiz aligned to the objectives', 'Compruebas qué entendieron.', 'You check what they understood.'),
        P('vd', 'Video resumen en Vids de 3 minutos', '3-minute summary video in Vids', 'Refuerzas para repasar o para quien faltó.', 'You reinforce for review or for those who missed class.'),
        P('x1', 'Informe de Deep Research de 20 páginas', '20-page Deep Research report', 'Distractor: es material de investigación, no un momento de clase.', 'Distractor: it is research material, not a lesson moment.'),
        P('x2', 'Imagen de Nano Banana como examen', 'Nano Banana image as an exam', 'Distractor: una imagen no evalúa la comprensión.', 'Distractor: an image doesn’t assess understanding.')
      ],
      wrap: T('**Slides → Forms → Vids**: presentar, evaluar y reforzar. Revisa cada producto antes de compartirlo con tus estudiantes.', '**Slides → Forms → Vids**: present, assess and reinforce. Review each product before sharing it with your students.')
    }
  );
})();
