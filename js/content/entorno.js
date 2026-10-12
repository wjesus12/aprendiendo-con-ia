/* El entorno Gemini: el «cerebro» en el centro y sus herramientas alrededor.
   Analogía central del portal (inspirada en la capacitación de Canvas). */
(function () {
  const E = (id, icon, name, tag, d, mod) => ({ id, icon, name, tag, d, mod });
  GDC.ENTORNO = [
    E('gemini', '🧠', 'Gemini', { es: 'El cerebro', en: 'The brain' },
      { es: 'El asistente con el que conversas en el Gemini app (web, móvil y escritorio): entiende tu pedido, razona y responde. Todas las demás herramientas se apoyan en él.',
        en: 'The assistant you talk to in the Gemini app (web, mobile and desktop): it understands your request, reasons and answers. Every other tool builds on it.' }, '03'),
    E('canvas', '✏️', 'Canvas', { es: 'Donde construyes', en: 'Where you build' },
      { es: 'Un espacio de trabajo donde la conversación se convierte en un artefacto editable: documentos, slides, quizzes, infografías, apps y páginas web. Se exporta a Docs, Slides o Colab.',
        en: 'A workspace where the conversation becomes an editable artifact: documents, slides, quizzes, infographics, apps and web pages. It exports to Docs, Slides or Colab.' }, '11'),
    E('gems', '🎯', 'Gems', { es: 'Tu asistente a medida', en: 'Your custom assistant' },
      { es: 'Un asistente personalizado con nombre, objetivo, reglas y archivos de referencia, para tareas que repites. Desde octubre de 2026 conviven con los skills, que los irán reemplazando.',
        en: 'A custom assistant with a name, goal, rules and reference files, for tasks you repeat. Since October 2026 they coexist with skills, which will gradually replace them.' }, '14'),
    E('notebook', '📚', 'Gemini Notebook', { es: 'Tu IA que solo usa tus fuentes', en: 'Your AI that only uses your sources' },
      { es: 'Antes se llamaba NotebookLM. Responde con base en los documentos que tú cargas, con citas, y los transforma en Audio Overviews, Mind Maps, Flashcards, Quizzes y más.',
        en: 'Formerly NotebookLM. It answers based on the documents you upload, with citations, and turns them into Audio Overviews, Mind Maps, Flashcards, Quizzes and more.' }, '20'),
    E('nanobanana', '🍌', 'Nano Banana', { es: 'Tu estudio de imágenes', en: 'Your image studio' },
      { es: 'El modelo de imágenes de Gemini: crea y edita imágenes describiendo lo que quieres con palabras. Cada imagen lleva SynthID, una marca de agua invisible que indica que fue generada con IA.',
        en: 'Gemini’s image model: it creates and edits images from a plain-language description. Every image carries SynthID, an invisible watermark showing it was AI-generated.' }, '13'),
    E('deepresearch', '🔎', 'Deep Research', { es: 'Tu investigador', en: 'Your researcher' },
      { es: 'Primero te propone un plan que puedes editar; luego navega por la web durante varios minutos y te entrega un informe con fuentes enlazadas que puedes exportar a Docs.',
        en: 'It first proposes a plan you can edit; then it browses the web for several minutes and delivers a report with linked sources that you can export to Docs.' }, '09'),
    E('drive', '🗂️', 'Drive · Workspace', { es: 'Tus archivos y apps de Google', en: 'Your files and Google apps' },
      { es: 'Gemini puede trabajar con tus archivos de Drive y con Gmail, Docs, Sheets y Slides: desde el chat (con @ y las apps conectadas) o desde el panel «Ask Gemini» dentro de cada app.',
        en: 'Gemini can work with your Drive files and with Gmail, Docs, Sheets and Slides: from the chat (with @ and connected apps) or from the “Ask Gemini” panel inside each app.' }, '16'),
    E('guided', '🧑‍🏫', 'Guided Learning', { es: 'Aprendizaje guiado: tu tutor', en: 'Your tutor' },
      { es: 'Un modo de estudio en el que Gemini no te da la respuesta de inmediato: te explica por partes y te hace preguntas para que construyas tú la comprensión.',
        en: 'A study mode where Gemini doesn’t hand you the answer right away: it explains step by step and asks you questions so you build the understanding yourself.' }, '10')
  ];
})();
