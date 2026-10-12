/* Módulo 13 · Nano Banana: crear y editar imágenes */
GDC.MOD['13'] = {
  min: 13,
  intro: {
    es: '**Nano Banana** es el nombre del modelo de imágenes de Gemini. Con él puedes crear ilustraciones para tus clases y editar fotos describiendo los cambios con palabras, sin saber diseño. Aquí verás cómo pedir buenas imágenes y cómo usarlas con responsabilidad.',
    en: '**Nano Banana** is the name of Gemini’s image model. With it you can create illustrations for your lessons and edit photos by describing changes in words, with no design skills. Here you will see how to ask for good images and how to use them responsibly.'
  },
  objetivos: [
    { es: 'Generar imágenes adecuadas al contexto de una clase.', en: 'Generate images suited to a lesson’s context.' },
    { es: 'Editar imágenes con instrucciones en lenguaje natural.', en: 'Edit images with natural-language instructions.' },
    { es: 'Explicar qué es **SynthID** y por qué importa la transparencia.', en: 'Explain what **SynthID** is and why transparency matters.' }
  ],
  secciones: [
    {
      h: { es: 'La familia de imágenes de Gemini', en: 'Gemini’s image family' },
      b: [
        { table: {
          head: [{ es: 'Nombre', en: 'Name' }, { es: 'Qué es', en: 'What it is' }],
          rows: [
            [{ es: 'Nano Banana 2', en: 'Nano Banana 2' }, { es: 'El modelo de imágenes por defecto del Gemini app: rápido y con buena calidad (mejoras de octubre de 2026 en texto dentro de la imagen)', en: 'The Gemini app’s default image model: fast and good quality (October 2026 improvements to text within images)' }],
            [{ es: 'Nano Banana Pro', en: 'Nano Banana Pro' }, { es: 'Versión de mayor calidad, con cuota limitada o para planes de pago', en: 'Higher-quality version, with a limited quota or for paid plans' }],
            [{ es: 'Imagen', en: 'Imagen' }, { es: 'Otra familia de modelos de imagen de Google; la guía del examen menciona «Imagen 4» al hablar de crear imágenes en el Gemini app', en: 'Another Google image model family; the exam guide mentions “Imagen 4” when talking about creating images in the Gemini app' }]
          ]
        } },
        { note: { es: 'La guía pide «generar imágenes dentro del Gemini app que sean apropiadas para el contexto de una lección» (2.3.2). Lo importante para el examen es el **uso pedagógico y responsable**, no el nombre del modelo, que cambia con frecuencia.',
                  en: 'The guide asks you to “generate images within the Gemini app that are appropriate for a given lesson context” (2.3.2). What matters for the exam is **teaching and responsible use**, not the model name, which changes often.' }, kind: 'exam' }
      ]
    },
    {
      h: { es: 'Crear: describe la escena', en: 'Create: describe the scene' },
      b: [
        { p: { es: 'Pide la imagen en el chat (o desde la opción de crear imágenes) describiendo **qué aparece**, **estilo**, **composición** y **para qué la usarás**.', en: 'Ask for the image in the chat (or from the create-images option) describing **what appears**, **style**, **composition** and **what you will use it for**.' } },
        { compare: {
          bad: { t: { es: 'Una imagen de la célula.', en: 'An image of a cell.' }, why: { es: 'No dice qué tipo de célula, para qué edad ni qué partes deben verse.', en: 'It doesn’t say what type of cell, for what age or which parts should show.' } },
          good: { t: { es: 'Ilustración didáctica de una célula animal en corte, estilo plano y colores suaves, para estudiantes de 12 años. Que se distingan núcleo, membrana, citoplasma y mitocondrias, con espacio en blanco alrededor para que yo añada las etiquetas. Fondo blanco.', en: 'Educational cross-section illustration of an animal cell, flat style and soft colours, for 12-year-olds. Nucleus, membrane, cytoplasm and mitochondria should be distinguishable, with white space around for me to add labels. White background.' },
                  why: { es: 'Precisa contenido, estilo, audiencia y uso: obtienes una imagen lista para tu ficha.', en: 'It specifies content, style, audience and use: you get an image ready for your worksheet.' } }
        } },
        { note: { es: 'Si necesitas texto dentro de la imagen (etiquetas, títulos), revísalo con lupa: los modelos han mejorado mucho, pero pueden escribir palabras con errores. A menudo es mejor añadir tú las etiquetas.',
                  en: 'If you need text within the image (labels, titles), check it closely: models have improved a lot but can still misspell words. It is often better to add the labels yourself.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Editar: describe solo el cambio', en: 'Edit: describe only the change' },
      b: [
        { p: { es: 'Sube una imagen (o usa una que acabas de generar) y pide el cambio con palabras. Nano Banana conserva el resto de la imagen.', en: 'Upload an image (or use one you just generated) and ask for the change in words. Nano Banana keeps the rest of the image.' } },
        { list: [
          { es: '«Quita el fondo y déjalo blanco».', en: '“Remove the background and make it white.”' },
          { es: '«Añade una pizarra con una ecuación detrás del personaje».', en: '“Add a whiteboard with an equation behind the character.”' },
          { es: '«Convierte esta foto del laboratorio en una ilustración estilo cómic».', en: '“Turn this lab photo into a comic-style illustration.”' },
          { es: '«Cambia la estación del paisaje a invierno».', en: '“Change the landscape’s season to winter.”' }
        ] }
      ]
    },
    {
      h: { es: 'Uso responsable de imágenes generadas', en: 'Responsible use of generated images' },
      b: [
        { p: { es: 'Todas las imágenes creadas con los modelos de Google llevan **SynthID**, una marca de agua digital **invisible** que permite identificar que fueron generadas con IA. En el plan gratuito también suele aparecer una marca visible.',
               en: 'All images created with Google’s models carry **SynthID**, an **invisible** digital watermark that makes it possible to identify them as AI-generated. On the free plan a visible mark usually appears too.' } },
        { list: [
          { es: '**Transparencia:** indica a tus estudiantes cuándo una imagen fue generada con IA.', en: '**Transparency:** tell your students when an image was AI-generated.' },
          { es: '**Personas reales:** no generes ni edites imágenes de estudiantes, colegas o personas reales sin su consentimiento.', en: '**Real people:** don’t generate or edit images of students, colleagues or real people without consent.' },
          { es: '**Sesgo:** revisa diversidad y estereotipos (¿quién aparece como científico, docente, líder?).', en: '**Bias:** check diversity and stereotypes (who appears as the scientist, teacher, leader?).' },
          { es: '**Exactitud:** en ciencia, historia o mapas, una imagen «bonita» puede ser incorrecta.', en: '**Accuracy:** in science, history or maps, a “pretty” image can be wrong.' }
        ] },
        { note: { es: 'Crea una imagen para el inicio de tu próxima clase. Luego pide una edición concreta y revisa: ¿es exacta?, ¿es inclusiva?, ¿la etiquetarás como generada con IA?',
                  en: 'Create an image for the start of your next lesson. Then ask for a specific edit and check: is it accurate? Is it inclusive? Will you label it as AI-generated?' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Confiar en la exactitud científica o histórica de una imagen porque se ve realista.', en: 'Trusting the scientific or historical accuracy of an image because it looks realistic.' },
    { es: 'Pedir «una imagen de…» sin estilo, audiencia ni uso, y obtener algo genérico.', en: 'Asking for “an image of…” with no style, audience or use, and getting something generic.' },
    { es: 'Editar fotos de estudiantes o personas reales sin consentimiento.', en: 'Editing photos of students or real people without consent.' }
  ],
  ideas: [
    { es: 'Nano Banana crea y edita imágenes con lenguaje natural.', en: 'Nano Banana creates and edits images with natural language.' },
    { es: 'Para editar, describe solo el cambio.', en: 'To edit, describe only the change.' },
    { es: 'SynthID marca de forma invisible las imágenes generadas con IA; sé transparente.', en: 'SynthID invisibly marks AI-generated images; be transparent.' }
  ],
  quiz: [
    { d: 2,
      q: { es: '¿Qué prompt producirá la imagen más útil para una ficha de ciencias?', en: 'Which prompt will produce the most useful image for a science worksheet?' },
      o: [
        { t: { es: '«Una célula bonita, muy colorida y llamativa»', en: '“A pretty, very colourful, eye-catching cell”' },
          why: { es: 'Prioriza lo estético, no lo didáctico, y no dice para quién.', en: 'It prioritizes looks over teaching and doesn’t say who it is for.' } },
        { ok: true, t: { es: '«Célula animal en corte, estilo plano, para 12 años»', en: '“Animal cell cross-section, flat style, for age 12”' },
          why: { es: 'Correcto: precisa contenido, estilo y audiencia.', en: 'Correct: it specifies content, style and audience.' } },
        { t: { es: '«La mejor imagen de una célula que puedas hacer»', en: '“The best image of a cell that you can possibly make”' },
          why: { es: '«La mejor» no da criterios para generarla.', en: '“The best” gives no criteria to generate it.' } },
        { t: { es: '«Una foto real y detallada de una célula humana»', en: '“A real, detailed photograph of a human cell”' },
          why: { es: 'La IA no toma fotos reales; además falta el propósito didáctico.', en: 'AI doesn’t take real photos; the teaching purpose is also missing.' } }
      ] },
    { d: 3,
      q: { es: '¿Qué es **SynthID**?', en: 'What is **SynthID**?' },
      o: [
        { t: { es: 'Un filtro que mejora la calidad de las fotos', en: 'A filter that improves photo quality' },
          why: { es: 'No es un filtro estético.', en: 'It isn’t a cosmetic filter.' } },
        { t: { es: 'El nombre del plan pago de imágenes', en: 'The name of the paid image plan' },
          why: { es: 'No es un plan; los planes son Plus, Pro y Ultra.', en: 'It isn’t a plan; the plans are Plus, Pro and Ultra.' } },
        { ok: true, t: { es: 'Una marca invisible que identifica imágenes de IA', en: 'An invisible mark identifying AI images' },
          why: { es: 'Correcto: ayuda a reconocer contenido generado con IA.', en: 'Correct: it helps recognize AI-generated content.' } },
        { t: { es: 'Un sistema para firmar con tu nombre', en: 'A system to sign images with your name' },
          why: { es: 'No identifica al autor humano; señala que es contenido de IA.', en: 'It doesn’t identify the human author; it flags AI content.' } }
      ] },
    { d: 3,
      q: { es: 'Un colega quiere poner la cara de un estudiante en una imagen generada para un afiche escolar. ¿Qué le dices?', en: 'A colleague wants to put a student’s face in a generated image for a school poster. What do you say?' },
      o: [
        { t: { es: 'Que está bien si la imagen queda realista', en: 'That it is fine if the image looks realistic' },
          why: { es: 'El realismo no resuelve el problema de consentimiento.', en: 'Realism doesn’t solve the consent issue.' } },
        { t: { es: 'Que use Nano Banana Pro para más calidad', en: 'To use Nano Banana Pro for better quality' },
          why: { es: 'La calidad es irrelevante si falta el consentimiento.', en: 'Quality is irrelevant if consent is missing.' } },
        { ok: true, t: { es: 'Que no lo haga sin consentimiento informado', en: 'Not to do it without informed consent' },
          why: { es: 'Correcto: la imagen de un menor requiere autorización y cuidado.', en: 'Correct: a minor’s image requires authorization and care.' } },
        { t: { es: 'Que quite la marca visible antes de imprimir', en: 'To remove the visible mark before printing' },
          why: { es: 'Ocultar el origen va contra la transparencia.', en: 'Hiding the origin goes against transparency.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google Blog — Nano Banana Pro', url: 'https://blog.google/innovation-and-ai/products/nano-banana-pro/' },
    { t: 'Google AI for Developers — Changelog (Nano Banana 2)', url: 'https://ai.google.dev/gemini-api/docs/changelog' },
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.3.2)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' }
  ]
};
