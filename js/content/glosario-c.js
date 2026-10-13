/* Glosario (3/3): Workspace · Educación · Ética · Certificación */
(function () {
  const G = (t, cat, mod, es, en, alt) => GDC.GLOSSARY.push({ t, cat, mod, alt, d: { es, en } });

  /* Workspace */
  G('Google Workspace', 'workspace', '16', 'Conjunto de apps de Google: Gmail, Drive, Docs, Sheets, Slides, Forms, Meet, Classroom y más.', 'Google’s suite of apps: Gmail, Drive, Docs, Sheets, Slides, Forms, Meet, Classroom and more.');
  G('Google Workspace for Education', 'workspace', '03', 'Ediciones de Workspace para instituciones educativas, administradas por la institución.', 'Workspace editions for educational institutions, managed by the institution.');
  G('Gemini for Education', 'workspace', '04', 'Versión del Gemini app para instituciones, incluida sin costo en Workspace for Education, con protección de datos.', 'Version of the Gemini app for institutions, included at no cost in Workspace for Education, with data protection.');
  G('Google AI Pro for Education', 'workspace', '04', 'Complemento de pago que añade Gemini dentro de Gmail, Docs, Forms, Vids, Meet y Drive, y más acceso premium.', 'Paid add-on that brings Gemini inside Gmail, Docs, Forms, Vids, Meet and Drive, plus more premium access.');
  G('Ask Gemini (panel lateral)', 'workspace', '16', 'Panel de Gemini dentro de Gmail, Docs, Sheets, Slides y Drive para pedir ayuda en contexto.', 'Gemini panel inside Gmail, Docs, Sheets, Slides and Drive for in-context help.', 'Side panel');
  G('Help me write', 'workspace', '17', 'Función de Gmail y Docs que redacta un borrador a partir de una indicación breve.', 'Gmail and Docs feature that drafts text from a short instruction.', 'Ayúdame a escribir');
  G('Help me create', 'workspace', '17', 'Función de Docs (y Sheets/Slides) que genera un primer borrador con formato usando tus archivos, correos y la web.', 'Docs (and Sheets/Slides) feature that generates a formatted first draft using your files, emails and the web.', 'Ayúdame a crear');
  G('Ediciones sugeridas', 'workspace', '17', 'Cambios propuestos por Gemini en Docs que solo tú ves hasta aprobarlos.', 'Changes proposed by Gemini in Docs that only you see until you approve them.', 'Suggested edits');
  G('Gemini en Gmail', 'workspace', '17', 'Ayuda para redactar, refinar y resumir correos y responder preguntas sobre tu bandeja.', 'Help to write, refine and summarize emails and answer questions about your inbox.');
  G('Gemini en Slides', 'workspace', '18', 'Crea diapositivas e imágenes con el estilo de tu presentación; usa tus archivos con @.', 'Creates slides and images in your deck’s style; uses your files with @.');
  G('Gemini en Forms', 'workspace', '18', 'Crea formularios y quizzes a partir de un Doc o Slide, alineados a objetivos.', 'Creates forms and quizzes from a Doc or Slide, aligned to objectives.');
  G('Gemini en Sheets', 'workspace', '19', 'Crea tablas, rellena celdas, propone fórmulas y analiza datos con lenguaje natural.', 'Creates tables, fills cells, suggests formulas and analyzes data in natural language.');
  G('Fill with Gemini', 'workspace', '19', 'Función de Sheets que rellena automáticamente celdas de una tabla.', 'Sheets feature that automatically fills table cells.');
  G('Gemini en Drive', 'workspace', '19', 'Resume archivos y responde preguntas sobre el contenido de tu Drive.', 'Summarizes files and answers questions about your Drive content.');
  G('Administrador de Workspace', 'workspace', '16', 'Persona que activa servicios y define políticas para las cuentas de la institución.', 'Person who enables services and sets policies for the institution’s accounts.', 'Admin');
  G('Consola de administración', 'workspace', '16', 'Panel donde el administrador habilita servicios como Gemini Notebook o el acceso de estudiantes.', 'Panel where the admin enables services like Gemini Notebook or student access.', 'Admin console');

  /* Educación */
  G('Gemini in Classroom', 'aula', '22', 'Más de 30 herramientas de IA en Google Classroom, sin costo para docentes de Workspace for Education.', 'Over 30 AI tools in Google Classroom, free for Workspace for Education teachers.');
  G('Google Classroom', 'aula', '22', 'Plataforma de Google para gestionar clases, tareas y comunicación con estudiantes.', 'Google platform to manage classes, assignments and communication with students.');
  G('LMS', 'aula', '22', 'Sistema de gestión del aprendizaje, como Classroom, Schoology o Canvas de Instructure.', 'Learning management system, such as Classroom, Schoology or Canvas by Instructure.', 'Learning Management System');
  G('Canvas de Instructure', 'aula', '22', 'Plataforma LMS de la empresa Instructure; no es lo mismo que Canvas de Gemini.', 'LMS platform by Instructure; not the same as Gemini Canvas.', 'Canvas LMS');
  G('Diferenciación', 'aula', '23', 'Ofrecer distintas vías hacia el mismo objetivo de aprendizaje.', 'Offering different paths to the same learning goal.', 'Differentiation');
  G('Personalización', 'aula', '23', 'Ajustar la experiencia de aprendizaje al nivel, interés o ritmo de cada estudiante.', 'Adjusting the learning experience to each student’s level, interest or pace.', 'Personalization');
  G('DUA', 'aula', '23', 'Diseño Universal para el Aprendizaje: múltiples formas de implicación, representación y acción y expresión.', 'Universal Design for Learning: multiple means of engagement, representation and action and expression.', 'UDL');
  G('Andamiaje', 'aula', '23', 'Apoyos temporales (pasos, ejemplos, pistas) que ayudan a lograr una tarea.', 'Temporary supports (steps, examples, hints) that help complete a task.', 'Scaffolding');
  G('Bell-ringer', 'aula', '14', 'Actividad breve al inicio de la clase para activar conocimientos; buen caso de uso para un Gem.', 'Short activity at the start of class to activate knowledge; a good use case for a Gem.');
  G('Rúbrica', 'aula', '06', 'Instrumento de evaluación con criterios y niveles de desempeño.', 'Assessment tool with criteria and performance levels.', 'Rubric');
  G('Evaluación formativa', 'aula', '18', 'Evaluación durante el proceso para retroalimentar y ajustar la enseñanza.', 'Assessment during the process to give feedback and adjust teaching.', 'Formative assessment');
  G('Quiz de salida', 'aula', '18', 'Breve evaluación al final de la clase para comprobar la comprensión.', 'Short check at the end of class to verify understanding.', 'Exit ticket');
  G('Secuencia didáctica', 'aula', '22', 'Conjunto ordenado de sesiones y actividades para lograr objetivos de una unidad.', 'Ordered set of sessions and activities to achieve a unit’s objectives.', 'Teaching sequence');
  G('Aula invertida', 'aula', '15', 'Modelo en el que los estudiantes revisan el contenido antes de clase y la clase se dedica a practicar.', 'Model where students review content before class and class time is for practice.', 'Flipped classroom');
  G('Metacognición', 'aula', '10', 'Pensar sobre el propio pensamiento: reconocer cómo se aprende y detectar los propios errores.', 'Thinking about one’s own thinking: recognizing how one learns and spotting one’s own errors.', 'Metacognition');
  G('Aumentar frente a reemplazar', 'aula', '24', 'Distinción entre la IA que apoya al docente (aumenta) y la que sustituye su criterio (reemplaza).', 'Distinction between AI that supports the teacher (augments) and AI that substitutes their judgment (replaces).', 'Augment vs replace');

  /* Ética y seguridad */
  G('Sesgo', 'etica', '25', 'Tendencia de la IA a reproducir estereotipos o desequilibrios de sus datos de entrenamiento.', 'AI’s tendency to reproduce stereotypes or imbalances from its training data.', 'Bias');
  G('Transparencia', 'etica', '25', 'Declarar cuándo y cómo se usó IA en un material o trabajo.', 'Disclosing when and how AI was used in a material or assignment.', 'Transparency');
  G('Privacidad', 'etica', '25', 'Protección de los datos personales propios y de otras personas.', 'Protection of one’s own and others’ personal data.', 'Privacy');
  G('Responsabilidad digital', 'etica', '25', 'Uso ético, seguro y crítico de la tecnología.', 'Ethical, safe and critical use of technology.', 'Digital responsibility');
  G('Plagio', 'etica', '25', 'Presentar como propio un trabajo ajeno, incluido el generado por IA sin declararlo.', 'Presenting someone else’s work as one’s own, including undisclosed AI-generated work.', 'Plagiarism');
  G('Integridad académica', 'etica', '25', 'Compromiso con la honestidad en el aprendizaje y la evaluación.', 'Commitment to honesty in learning and assessment.', 'Academic integrity');
  G('Detector de IA', 'etica', '25', 'Herramienta que estima si un texto fue generado con IA; no es fiable como prueba única.', 'Tool estimating whether a text was AI-generated; not reliable as sole evidence.', 'AI detector');
  G('Alfabetización en IA', 'etica', '25', 'Entender cómo funciona la IA, evaluar sus resultados, usarla con ética y reconocer sus límites.', 'Understanding how AI works, evaluating its outputs, using it ethically and recognizing its limits.', 'AI literacy');
  G('Minimización de datos', 'etica', '25', 'Principio de compartir solo los datos personales estrictamente necesarios.', 'Principle of sharing only strictly necessary personal data.', 'Data minimization');
  G('Consentimiento', 'etica', '13', 'Autorización informada antes de usar la imagen, voz o datos de una persona.', 'Informed permission before using a person’s image, voice or data.', 'Consent');
  G('Sobredependencia', 'etica', '24', 'Riesgo de delegar en la IA tareas que la persona debería aprender o decidir.', 'Risk of delegating to AI tasks a person should learn or decide.', 'Over-reliance');
  G('Revisión humana', 'etica', '05', 'Verificar precisión, pertinencia, privacidad y transparencia antes de usar un resultado de IA.', 'Checking accuracy, relevance, privacy and transparency before using an AI result.', 'Human review');
  G('Pensamiento crítico', 'etica', '25', 'Capacidad de analizar, cuestionar y contrastar información, incluida la que produce la IA.', 'Ability to analyze, question and cross-check information, including AI output.', 'Critical thinking');
  G('Protección de datos empresarial', 'etica', '25', 'En Workspace for Education, los datos no son revisados por personas ni usados para entrenar modelos.', 'In Workspace for Education, data isn’t reviewed by humans or used to train models.', 'Enterprise-grade data protection');

  /* Certificación */
  G('Gemini Certified Educator', 'examen', '26', 'Certificación de Google for Education para docentes: opción múltiple, 2 horas, gratuita, válida 3 años.', 'Google for Education certification for teachers: multiple choice, 2 hours, free, valid 3 years.');
  G('Gemini Certified University Student', 'examen', '26', 'Certificación para estudiantes universitarios sobre el uso ético y efectivo de Gemini y Gemini Notebook.', 'Certification for university students on the ethical, effective use of Gemini and Gemini Notebook.');
  G('Gemini certification for students', 'examen', '26', 'Certificación K-12 (13 a 17 años): curso fundacional y evaluación final.', 'K-12 certification (ages 13 to 17): foundational course and final assessment.');
  G('educertifications.google', 'examen', '26', 'Launchpad de certificaciones de Google for Education donde te registras.', 'Google for Education certifications launchpad where you register.');
  G('Learning Center', 'examen', '26', 'Plataforma (edu.exceedlms.com) donde se rinde el examen; usa el mismo correo del registro.', 'Platform (edu.exceedlms.com) where you take the exam; use the same email as registration.');
  G('Accredible', 'examen', '26', 'Servicio donde se emiten y consultan los certificados digitales.', 'Service where digital certificates are issued and retrieved.');
  G('Dominio del examen', 'examen', '26', 'Cada una de las tres áreas evaluadas: comprender, implementar y uso responsable.', 'Each of the three assessed areas: understand, implement and responsible use.', 'Exam domain');
  G('Gemini Certified Faculty', 'examen', '29', 'Certificación de Google for Education para profesores universitarios: gratis, válida 3 años, de opción múltiple. Es paralela al Educator, no un nivel superior.', 'Google for Education certification for university faculty: free, valid 3 years, multiple choice. It runs parallel to the Educator, not a higher level.');
  G('Revisión de literatura', 'aula', '27', 'Análisis organizado de lo publicado sobre un tema; Gemini Notebook ayuda a compararlo con citas.', 'Organized analysis of what has been published on a topic; Gemini Notebook helps compare it with citations.', 'Literature review');
  G('Estado del arte', 'aula', '27', 'Panorama actual de la investigación sobre un tema; Deep Research ofrece un primer mapa.', 'Current overview of research on a topic; Deep Research offers a first map.', 'State of the art');
  G('Propuesta de financiamiento', 'aula', '27', 'Documento para solicitar fondos de investigación; Gemini puede ayudar a formular objetivos medibles.', 'Document requesting research funding; Gemini can help draft measurable objectives.', 'Grant proposal');
  G('Sílabo', 'aula', '28', 'Documento que organiza un curso: resultados de aprendizaje, contenidos, cronograma, evaluación y bibliografía.', 'Document organizing a course: learning outcomes, content, schedule, assessment and bibliography.', 'Syllabus');
  G('Propiedad intelectual', 'etica', '29', 'Derechos sobre obras y creaciones; la protección de datos no autoriza a cargar material con derechos de autor.', 'Rights over works and creations; data protection doesn’t authorize uploading copyrighted material.', 'Intellectual property');
  G('Conducta académica indebida', 'etica', '29', 'Faltas a la integridad como plagio, datos inventados o uso de IA no declarado.', 'Integrity breaches such as plagiarism, invented data or undisclosed AI use.', 'Academic misconduct');
  G('Simulacro', 'examen', '26', 'Examen de práctica cronometrado con preguntas originales en el formato del examen real.', 'Timed practice exam with original questions in the real exam’s format.', 'Mock exam');
})();
