/* Módulo 19 · Gemini en Sheets y Drive */
GDC.MOD['19'] = {
  min: 12,
  intro: {
    es: 'Registros de asistencia, notas, inventarios, cronogramas: las hojas de cálculo están en todas partes, y Drive guarda años de materiales. Aquí verás cómo Gemini te ayuda a crear y analizar tablas en **Sheets** y a encontrar y resumir lo que guardas en **Drive**.',
    en: 'Attendance logs, grades, inventories, schedules: spreadsheets are everywhere, and Drive holds years of materials. Here you will see how Gemini helps you create and analyze tables in **Sheets** and find and summarize what you keep in **Drive**.'
  },
  objetivos: [
    { es: 'Crear una hoja de cálculo con formato a partir de un prompt.', en: 'Create a formatted spreadsheet from a prompt.' },
    { es: 'Pedir fórmulas, análisis y resúmenes de datos con lenguaje natural.', en: 'Ask for formulas, analyses and data summaries in natural language.' },
    { es: 'Preguntar y resumir a partir de tus archivos de Drive.', en: 'Ask and summarize from your Drive files.' }
  ],
  secciones: [
    {
      h: { es: 'Gemini en Sheets', en: 'Gemini in Sheets' },
      b: [
        { table: {
          head: [{ es: 'Qué pides', en: 'What you ask' }, { es: 'Ejemplo', en: 'Example' }],
          rows: [
            [{ es: 'Crear una tabla', en: 'Create a table' }, { es: '«Crea un cronograma de 16 semanas con unidad, tema, actividad y evaluación»', en: '“Create a 16-week schedule with unit, topic, activity and assessment”' }],
            [{ es: 'Rellenar celdas', en: 'Fill cells' }, { es: '«Completa la columna Categoría según el tipo de recurso»', en: '“Fill the Category column according to resource type”' }],
            [{ es: 'Fórmulas', en: 'Formulas' }, { es: '«Escribe una fórmula que calcule el promedio ponderado de las columnas C a F»', en: '“Write a formula that calculates the weighted average of columns C to F”' }],
            [{ es: 'Analizar', en: 'Analyze' }, { es: '«¿Qué unidad tuvo el promedio más bajo y en qué competencia?»', en: '“Which unit had the lowest average and in which competency?”' }]
          ]
        } },
        { p: { es: 'Las funciones más nuevas (crear una hoja completa desde un prompt o **Fill with Gemini** para rellenar celdas) se lanzaron en beta en 2026 y su disponibilidad depende del plan y del idioma. La alternativa universal: pide la tabla o la fórmula en el Gemini app y pégala en Sheets.',
               en: 'The newest features (creating a whole sheet from a prompt or **Fill with Gemini** to fill cells) launched in beta in 2026 and availability depends on plan and language. The universal alternative: ask for the table or formula in the Gemini app and paste it into Sheets.' } },
        { note: { es: 'Trabaja con códigos o iniciales en lugar de nombres completos cuando analices notas. Minimizar los datos personales es parte de la protección de tus estudiantes.', en: 'Use codes or initials instead of full names when analyzing grades. Minimizing personal data is part of protecting your students.' }, kind: 'warn' }
      ]
    },
    {
      h: { es: 'Fórmulas explicadas, no solo escritas', en: 'Formulas explained, not just written' },
      b: [
        { p: { es: 'Gemini es un gran tutor de hojas de cálculo: además de darte la fórmula, puede **explicarte cada parte**. Así aprendes y puedes corregirla si algo no cuadra.', en: 'Gemini is a great spreadsheet tutor: besides giving you the formula, it can **explain each part**. That way you learn and can fix it if something doesn’t add up.' } },
        { prompt: { es: 'En mi hoja, la columna B tiene la nota de prácticas (40 %), la C la del examen parcial (25 %) y la D la del examen final (35 %). Escribe la fórmula para el promedio ponderado en E2, explícame cada parte y dime cómo copiarla para toda la columna.', en: 'In my sheet, column B has the practice grade (40%), C the midterm (25%) and D the final exam (35%). Write the weighted-average formula for E2, explain each part and tell me how to copy it down the whole column.' },
          label: { es: '✦ Fórmula con explicación', en: '✦ Formula with explanation' } },
        { note: { es: 'Comprueba siempre una fórmula con un caso que puedas calcular a mano. Si el resultado no coincide, pide a Gemini que revise el paso que falla.', en: 'Always check a formula with a case you can calculate by hand. If the result doesn’t match, ask Gemini to review the failing step.' }, kind: 'tip' }
      ]
    },
    {
      h: { es: 'Gemini y tu Drive', en: 'Gemini and your Drive' },
      b: [
        { list: [
          { es: '**Desde Drive** (con el panel de Gemini, según tu plan): pide resúmenes de un archivo o pregunta qué contiene una carpeta.', en: '**From Drive** (with the Gemini panel, depending on your plan): ask for file summaries or what a folder contains.' },
          { es: '**Desde el Gemini app:** con Drive conectado, escribe **@Drive** y pide que busque y resuma («@Drive ¿qué rúbricas tengo para ensayos?»).', en: '**From the Gemini app:** with Drive connected, type **@Drive** and ask it to find and summarize (“@Drive which essay rubrics do I have?”).' },
          { es: '**Como fuente:** adjunta archivos de Drive con el botón + o conéctalos a un notebook de Gemini Notebook.', en: '**As a source:** attach Drive files with the + button or connect them to a Gemini Notebook notebook.' }
        ] },
        { prompt: { es: '@Drive busca mis documentos sobre evaluación formativa de los últimos dos años y hazme una tabla con nombre del archivo, fecha, tipo de recurso y una frase de resumen.', en: '@Drive find my documents on formative assessment from the last two years and make a table with file name, date, resource type and a one-line summary.' },
          label: { es: '✦ Inventario de tus materiales', en: '✦ Inventory of your materials' } }
      ]
    }
  ],
  trampas: [
    { es: 'Pegar una fórmula generada sin probarla con un caso conocido.', en: 'Pasting a generated formula without testing it on a known case.' },
    { es: 'Subir hojas completas con nombres y notas cuando bastaba con datos anonimizados.', en: 'Uploading full sheets with names and grades when anonymized data was enough.' },
    { es: 'Pensar que @Drive comparte tus archivos con otras personas.', en: 'Thinking @Drive shares your files with other people.' }
  ],
  ideas: [
    { es: 'Sheets: crear tablas, rellenar celdas, fórmulas y análisis con lenguaje natural.', en: 'Sheets: create tables, fill cells, formulas and analysis in natural language.' },
    { es: 'Pide la fórmula y su explicación; pruébala con un caso conocido.', en: 'Ask for the formula and its explanation; test it on a known case.' },
    { es: 'Drive: resúmenes en el panel, @Drive en el chat o archivos como fuente.', en: 'Drive: summaries in the panel, @Drive in the chat or files as a source.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Gemini te da una fórmula de promedio ponderado. ¿Qué haces antes de usarla en toda la hoja?', en: 'Gemini gives you a weighted-average formula. What do you do before using it across the sheet?' },
      o: [
        { t: { es: 'La copio en todas las filas de inmediato', en: 'Copy it to every row right away' }, why: { es: 'Si tiene un error, lo multiplicas en toda la hoja.', en: 'If it has an error, you multiply it across the sheet.' } },
        { ok: true, t: { es: 'La pruebo con un caso que calculo a mano', en: 'Test it on a case I calculate by hand' }, why: { es: 'Correcto: un caso conocido revela errores en segundos.', en: 'Correct: a known case reveals errors in seconds.' } },
        { t: { es: 'Le pregunto si está bien y confío', en: 'Ask it whether it’s right and trust it' }, why: { es: 'La autoconfirmación de la IA no es una verificación.', en: 'AI self-confirmation isn’t verification.' } },
        { t: { es: 'La cambio por un promedio simple', en: 'Swap it for a simple average' }, why: { es: 'Cambiarías el criterio de evaluación del curso.', en: 'You would change the course’s grading criteria.' } }
      ] },
    { d: 3,
      q: { es: 'Quieres analizar las notas del curso con Gemini. ¿Qué preparación es la más adecuada?', en: 'You want to analyze course grades with Gemini. What preparation is most appropriate?' },
      o: [
        { t: { es: 'Subir la hoja con nombres y DNI', en: 'Upload the sheet with names and IDs' }, why: { es: 'Expones datos personales innecesarios.', en: 'You expose unnecessary personal data.' } },
        { ok: true, t: { es: 'Usar códigos en lugar de nombres', en: 'Use codes instead of names' }, why: { es: 'Correcto: minimizas datos personales sin perder el análisis.', en: 'Correct: you minimize personal data without losing the analysis.' } },
        { t: { es: 'Pedirle que adivine los datos', en: 'Ask it to guess the data' }, why: { es: 'Sin datos reales, el análisis no sirve.', en: 'Without real data, the analysis is useless.' } },
        { t: { es: 'Compartir la hoja de forma pública', en: 'Share the sheet publicly' }, why: { es: 'Publicar notas es un riesgo de privacidad serio.', en: 'Publishing grades is a serious privacy risk.' } }
      ] },
    { d: 1,
      q: { es: 'Desde el Gemini app quieres encontrar tus rúbricas guardadas en Drive. ¿Qué escribes?', en: 'From the Gemini app you want to find your rubrics saved in Drive. What do you type?' },
      o: [
        { t: { es: '«/rúbricas» para invocar un skill', en: '“/rubrics” to invoke a skill' }, why: { es: 'La barra invoca skills, no busca en Drive.', en: 'The slash invokes skills; it doesn’t search Drive.' } },
        { t: { es: '«#Drive rúbricas» como etiqueta', en: '“#Drive rubrics” as a tag' }, why: { es: 'Las etiquetas con # no conectan apps.', en: '# tags don’t connect apps.' } },
        { ok: true, t: { es: '«@Drive ¿qué rúbricas tengo?»', en: '“@Drive which rubrics do I have?”' }, why: { es: 'Correcto: @ invoca la app conectada.', en: 'Correct: @ invokes the connected app.' } },
        { t: { es: 'El enlace de la carpeta sin más', en: 'Just the folder link, nothing else' }, why: { es: 'Sin instrucción, Gemini no sabe qué hacer.', en: 'Without an instruction, Gemini doesn’t know what to do.' } }
      ] }
  ],
  fuentes: [
    { t: 'TechCrunch — Google rolls out new Gemini capabilities to Docs, Sheets, Slides and Drive (10/03/2026)', url: 'https://techcrunch.com/2026/03/10/google-rolls-out-new-gemini-capabilities-to-docs-sheets-slides-and-drive/' },
    { t: 'Google — Ayuda de Gemini: apps conectadas', url: 'https://support.google.com/gemini/answer/16598406' }
  ]
};
