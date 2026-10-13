/* Consejos de Chispa (se muestran al tocarla, sin repetirse hasta agotar el mazo).
   Basados en docs/investigacion.md y docs/capacitacion-canvas.md. */
(function () {
  const T = (es, en) => ({ es, en });
  GDC.TIPS = [
    /* Prompting */
    T('Un pedido breve explora; un pedido situado produce un recurso útil.', 'A short request explores; a situated request produces a useful resource.'),
    T('Estructura tu instrucción: Propósito · Audiencia · Formato · Límites.', 'Structure your instruction: Purpose · Audience · Format · Limits.'),
    T('El marco PARTS: Persona, Act (o Aim), Recipient, Theme y Structure. No siempre necesitas los cinco.', 'The PARTS framework: Persona, Act (or Aim), Recipient, Theme and Structure. You don’t always need all five.'),
    T('Dile a Gemini qué NO inventar: «Marca con [VERIFICAR] lo que no esté en mis documentos».', 'Tell Gemini what NOT to make up: “Mark with [VERIFY] anything not in my documents.”'),
    T('Si la primera respuesta no sirve, no empieces de cero: pide un cambio concreto sobre lo que ya tienes.', 'If the first answer misses, don’t start over: ask for a specific change to what you already have.'),
    T('Indica el formato de salida: tabla, lista, rúbrica, 10 diapositivas… Gemini acierta más cuando sabe la forma.', 'State the output format: table, list, rubric, 10 slides… Gemini does better when it knows the shape.'),
    T('Da un ejemplo de lo que quieres. Un buen ejemplo vale más que tres párrafos de explicación.', 'Give an example of what you want. One good example beats three paragraphs of explanation.'),
    T('Menciona el nivel y la edad de tus estudiantes: cambia el vocabulario, la extensión y la dificultad.', 'Mention your students’ level and age: it changes vocabulary, length and difficulty.'),
    /* Ecosistema */
    T('Gemini = el cerebro · Canvas = donde construyes · Gems = tu asistente · Notebook = solo tus fuentes.', 'Gemini = the brain · Canvas = where you build · Gems = your assistant · Notebook = only your sources.'),
    T('NotebookLM ahora se llama Gemini Notebook (julio de 2026). En el examen aún puede aparecer con el nombre anterior.', 'NotebookLM is now called Gemini Notebook (July 2026). The exam may still use the old name.'),
    T('Gemini Notebook responde con base en las fuentes que tú cargas y te muestra citas para comprobarlo.', 'Gemini Notebook answers from the sources you upload and shows citations so you can check.'),
    T('Desde el Gemini app puedes añadir un notebook como fuente y trabajar con él en Canvas.', 'From the Gemini app you can add a notebook as a source and work with it in Canvas.'),
    T('Los Gems se están reemplazando por skills. En cuentas de Educación, los Gems siguen hasta al menos junio de 2027.', 'Gems are being replaced by skills. In Education accounts, Gems remain until at least June 2027.'),
    T('Un Gem bien hecho tiene nombre, objetivo, reglas claras y archivos de referencia.', 'A well-built Gem has a name, a goal, clear rules and reference files.'),
    T('Crea un Gem para lo que repites cada semana: bell-ringers, retroalimentación, correos a familias…', 'Build a Gem for what you repeat every week: bell-ringers, feedback, emails to families…'),
    /* Canvas */
    T('Canvas eficiente en 4 pasos: Adjuntar → Generar → Refinar → Verificar.', 'Efficient Canvas in 4 steps: Attach → Generate → Refine → Verify.'),
    T('En Canvas, selecciona solo el párrafo que quieres mejorar y pide el cambio: el resto queda intacto.', 'In Canvas, select only the paragraph you want to improve and ask for the change: the rest stays intact.'),
    T('Canvas guarda versiones: si un cambio no te gusta, vuelve a la versión anterior.', 'Canvas keeps versions: if you don’t like a change, go back to the previous one.'),
    T('Desde Canvas puedes exportar a Google Docs, llevar slides a Google Slides y el código Python a Colab.', 'From Canvas you can export to Google Docs, send slides to Google Slides and Python code to Colab.'),
    T('A partir de un documento en Canvas puedes crear un quiz, una infografía, una página web o un Audio Overview.', 'From a document in Canvas you can create a quiz, an infographic, a web page or an Audio Overview.'),
    T('Canvas convierte la conversación en un artefacto editable: Conversación → Artefacto visible → Revisión con criterio.', 'Canvas turns the conversation into an editable artifact: Conversation → Visible artifact → Thoughtful review.'),
    T('¿Creaste una página con Canvas? Guárdala en GitHub y publícala gratis con Netlify.', 'Built a page with Canvas? Save it on GitHub and publish it for free with Netlify.'),
    /* Modelos */
    T('En el plan gratuito, «Auto» elige el modelo por ti: Flash-Lite para lo simple, Flash o Pro para lo difícil.', 'On the free plan, “Auto” picks the model for you: Flash-Lite for simple tasks, Flash or Pro for hard ones.'),
    T('Usa más thinking para problemas que piden razonar paso a paso, como una adaptación curricular delicada.', 'Use more thinking for problems that need step-by-step reasoning, like a delicate curriculum adaptation.'),
    T('Para un correo rápido basta un modelo veloz; para rediseñar una rúbrica compleja, uno de razonamiento.', 'A quick email needs a fast model; redesigning a complex rubric calls for a reasoning one.'),
    /* Herramientas */
    T('Deep Research primero te muestra un plan. Revísalo y edítalo antes de que empiece a investigar.', 'Deep Research shows you a plan first. Review and edit it before it starts researching.'),
    T('Guided Learning no te da la respuesta de inmediato: te hace preguntas para que la construyas tú.', 'Guided Learning doesn’t hand you the answer right away: it asks questions so you build it yourself.'),
    T('Nano Banana crea y edita imágenes con lenguaje natural. Todas llevan SynthID, una marca de agua invisible.', 'Nano Banana creates and edits images with natural language. They all carry SynthID, an invisible watermark.'),
    T('Para editar una imagen con Nano Banana, describe solo el cambio: «quita el fondo», «añade una pizarra».', 'To edit an image with Nano Banana, describe only the change: “remove the background”, “add a whiteboard”.'),
    T('Con @ puedes traer apps conectadas a tu chat de Gemini.', 'With @ you can bring connected apps into your Gemini chat.'),
    T('En Docs, Sheets y Slides, el panel «Ask Gemini» trabaja con el archivo que tienes abierto.', 'In Docs, Sheets and Slides, the “Ask Gemini” panel works with the file you have open.'),
    T('Audio Overview convierte tus fuentes en una conversación tipo pódcast. Ideal para repasar en el camino.', 'Audio Overview turns your sources into a podcast-style conversation. Great for reviewing on the go.'),
    T('Un Mind Map en Gemini Notebook te muestra cómo se conectan los temas de tus documentos.', 'A Mind Map in Gemini Notebook shows how the topics in your documents connect.'),
    /* Responsabilidad */
    T('Revisa siempre: precisión, pertinencia, privacidad y transparencia.', 'Always review: accuracy, relevance, privacy and transparency.'),
    T('No cargues datos personales de tus estudiantes en un prompt.', 'Don’t put your students’ personal data in a prompt.'),
    T('Una alucinación es una respuesta segura de sí misma… pero falsa. Contrasta con fuentes.', 'A hallucination is a confident answer… that is false. Check it against sources.'),
    T('Evalúa el proceso, no solo el producto: borradores, decisiones, fuentes y defensa.', 'Assess the process, not just the product: drafts, decisions, sources and defense.'),
    T('La IA aumenta tu trabajo docente; no lo reemplaza. Tú defines el propósito y validas el resultado.', 'AI augments your teaching; it doesn’t replace it. You set the purpose and validate the result.'),
    T('Sé transparente: cuenta a tus estudiantes cuándo y cómo usaste IA para preparar un material.', 'Be transparent: tell your students when and how you used AI to prepare a material.'),
    T('En Workspace for Education, Gemini no usa tus datos para entrenar modelos ni los revisan personas.', 'In Workspace for Education, Gemini doesn’t use your data to train models, and humans don’t review it.'),
    /* Examen y portal */
    T('El examen Gemini Certified Educator dura 2 horas, es de opción múltiple y puedes rendirlo en español.', 'The Gemini Certified Educator exam lasts 2 hours, is multiple choice, and you can take it in Spanish.'),
    T('El examen evalúa las funciones gratuitas de Gemini; las preguntas sobre funciones pagas no puntúan.', 'The exam tests Gemini’s free features; questions on paid features aren’t scored.'),
    T('Pulsa / o Ctrl+K para abrir la barra de comandos y buscar cualquier módulo.', 'Press / or Ctrl+K to open the command bar and search any module.'),
    T('En el modo EN+ES ves el inglés real con su traducción debajo: así pierdes el miedo al idioma.', 'In EN+ES mode you see real English with its translation below: a great way to lose your fear of the language.'),
    T('¿Me quieres en otro lugar? Arrástrame a donde prefieras.', 'Want me somewhere else? Drag me wherever you like.'),
    T('En los simulacros no ves la explicación hasta terminar, igual que en el examen real.', 'In mock exams you don’t see explanations until the end, just like the real exam.'),
    T('¿Fallaste preguntas? En Práctica marca «solo las que fallé» y repásalas.', 'Missed some questions? In Practice tick “only the ones I missed” and review them.'),
    T('Las flashcards vuelven justo antes de que las olvides: repasa un poco cada día.', 'Flashcards come back right before you forget them: review a little every day.'),
    T('En los labs, primero encuentra la línea con el fallo; luego elige cómo arreglarla.', 'In the labs, first find the faulty line; then choose how to fix it.'),
    T('¿Enseñas en la universidad? La Parte 8 te prepara para el Gemini Certified Faculty.', 'Teach at university? Part 8 prepares you for the Gemini Certified Faculty.'),
    T('Para investigar: Deep Research hace el mapa; Gemini Notebook compara con citas tus fuentes validadas.', 'For research: Deep Research maps the field; Gemini Notebook compares your validated sources with citations.'),
    T('La IA libera tiempo cuando el docente define el propósito y revisa el resultado.', 'AI frees up time when the teacher defines the purpose and reviews the result.')
  ];
})();
