/* Mapa de la ruta «desde cero»: partes y módulos (el contenido de cada módulo
   llega en la Fase 2, en archivos js/content/mod-XX.js). */
(function () {
  GDC.PARTS = [
    { id: 1, icon: '🧭', title: { es: 'Fundamentos', en: 'Foundations' } },
    { id: 2, icon: '✍️', title: { es: 'Prompting y uso diario', en: 'Prompting and everyday use' } },
    { id: 3, icon: '🎨', title: { es: 'Herramientas creativas', en: 'Creative tools' } },
    { id: 4, icon: '🗂️', title: { es: 'Gemini en Google Workspace', en: 'Gemini in Google Workspace' } },
    { id: 5, icon: '📚', title: { es: 'Gemini Notebook (antes NotebookLM)', en: 'Gemini Notebook (formerly NotebookLM)' } },
    { id: 6, icon: '🏫', title: { es: 'Gemini en el aula', en: 'Gemini in the classroom' } },
    { id: 7, icon: '🎓', title: { es: 'Rumbo a la certificación', en: 'Road to certification' } },
    { id: 8, icon: '🏛️', title: { es: 'Educator y Faculty: Gemini en la universidad', en: 'Educator and Faculty: Gemini in higher education' } }
  ];

  const M = (id, part, es, en, map) => ({ id, part, title: { es, en }, map });
  GDC.MODULES = [
    M('01', 1, '¿Qué es la IA? De la IA tradicional a la IA generativa', 'What is AI? From traditional AI to generative AI', 'E 1.1.1 · 1.2.1'),
    M('02', 1, 'LLM, tokens y prompts: cómo «piensa» Gemini', 'LLMs, tokens and prompts: how Gemini “thinks”', 'E 1.1.1'),
    M('03', 1, 'Tu cuenta y tu primer chat en el Gemini app', 'Your account and your first chat in the Gemini app', 'E 2.1.1'),
    M('04', 1, 'Modelos y planes: Auto, Flash-Lite, Flash, Pro y thinking', 'Models and plans: Auto, Flash-Lite, Flash, Pro and thinking', 'E 1.1.2'),
    M('05', 1, 'Alucinaciones, límites y cómo verificar', 'Hallucinations, limits and how to verify', 'E 3.1.2 · 3.2.1'),
    M('06', 2, 'El marco PARTS y los prompts efectivos', 'The PARTS framework and effective prompts', 'E 2.1.2 · 2.2.1'),
    M('07', 2, 'Iterar y refinar: del borrador al recurso final', 'Iterate and refine: from draft to final resource', 'E 2.2.2 · 2.3.1'),
    M('08', 2, 'Archivos, imágenes y grounding con tus fuentes', 'Files, images and grounding with your sources', 'E 2.1.3'),
    M('09', 2, 'Deep Research: plan, investigación e informe', 'Deep Research: plan, research and report', 'E 1.2.3'),
    M('10', 2, 'Guided Learning y Gemini Live', 'Guided Learning and Gemini Live', 'E 1.2.2'),
    M('11', 3, 'Canvas I: co-crear documentos', 'Canvas I: co-creating documents', 'E 2.3.1'),
    M('12', 3, 'Canvas II: apps, quizzes, slides y páginas web', 'Canvas II: apps, quizzes, slides and web pages', 'E 1.2.3 · 2.3.1'),
    M('13', 3, 'Nano Banana: crear y editar imágenes', 'Nano Banana: create and edit images', 'E 2.3.2'),
    M('14', 3, 'Gems y la transición a skills', 'Gems and the move to skills', 'E 1.1.4 · 2.3.3'),
    M('15', 3, 'Video y voz: Vids, Omni y Veo', 'Video and voice: Vids, Omni and Veo', 'E 2.3.4'),
    M('16', 4, 'El ecosistema: Workspace, «Ask Gemini» y connected apps', 'The ecosystem: Workspace, “Ask Gemini” and connected apps', 'E 1.1.3'),
    M('17', 4, 'Gemini en Gmail y Docs', 'Gemini in Gmail and Docs', 'E 2.1.4 · 2.1.5'),
    M('18', 4, 'Gemini en Slides, Forms y Vids', 'Gemini in Slides, Forms and Vids', 'E 2.1.6 · 2.3.4'),
    M('19', 4, 'Gemini en Sheets y Drive', 'Gemini in Sheets and Drive', 'E 1.1.3'),
    M('20', 5, 'Notebooks y fuentes: investigar con tus documentos', 'Notebooks and sources: research with your documents', 'E 1.1.4 · 2.1.3'),
    M('21', 5, 'Studio: Audio y Video Overview, Mind Map, Flashcards y Quizzes', 'Studio: Audio and Video Overviews, Mind Maps, Flashcards and Quizzes', 'E 2.2.3'),
    M('22', 6, 'Planificar y evaluar con Gemini in Classroom', 'Planning and assessing with Gemini in Classroom', 'E 1.3.1 · 1.3.2'),
    M('23', 6, 'Personalización, diferenciación e inclusión', 'Personalization, differentiation and inclusion', 'E 1.2.2'),
    M('24', 6, 'Aumentar, no reemplazar: elegir la herramienta correcta', 'Augment, don’t replace: choosing the right tool', 'E 1.2.4 · 1.3.2 · 3.3.3'),
    M('25', 6, 'Ética, privacidad, sesgo, plagio y alfabetización en IA', 'Ethics, privacy, bias, plagiarism and AI literacy', 'E 1.2.5 · 3.1–3.4'),
    M('26', 7, 'Los exámenes Educator y Student: estrategia y simulacros', 'The Educator and Student exams: strategy and mock exams', '—'),
    M('27', 8, 'IA generativa y Gemini en la academia', 'Generative AI and Gemini in academia', 'F 1.1.1 · 1.1.3 · 1.1.4 · 1.2.1-1.2.5 · 1.3.2'),
    M('28', 8, 'Gemini para la investigación académica', 'Gemini for academic research', 'F 1.1.2 · 1.3.2 · 2.1.3 · 2.1.4 · 2.2.2 · 3.2.1'),
    M('29', 8, 'Diseñar cursos universitarios con Gemini', 'Designing university courses with Gemini', 'F 1.3.1 · 2.1.2 · 2.1.6 · 2.3.1 · 2.3.3'),
    M('30', 8, 'Participación estudiantil: Studio, imágenes, video y prompts', 'Student engagement: Studio, images, video and prompts', 'F 2.1.1 · 2.1.5 · 2.2.1 · 2.2.3 · 2.3.2 · 2.3.4'),
    M('31', 8, 'Integridad académica, propiedad intelectual y alfabetización en IA', 'Academic integrity, intellectual property and AI literacy', 'F 3.1.1-3.1.4 · 3.2.1-3.2.3 · 3.3.1-3.3.3 · 3.4.1 · 3.4.2'),
    M('32', 8, 'El examen Gemini Certified Faculty: formato, inscripción y estrategia', 'The Gemini Certified Faculty exam: format, registration and strategy', 'F 1-3 · repaso')
  ];
})();
