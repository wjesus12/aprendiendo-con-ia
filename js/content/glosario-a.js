/* Glosario (1/3): IA y modelos · Prompting */
(function () {
  const G = (t, cat, mod, es, en, alt) => GDC.GLOSSARY.push({ t, cat, mod, alt, d: { es, en } });

  /* IA y modelos */
  G('Inteligencia artificial (IA)', 'ia', '01', 'Campo que construye sistemas capaces de realizar tareas que requieren inteligencia humana: reconocer patrones, predecir, entender lenguaje.', 'Field that builds systems able to perform tasks requiring human intelligence: recognizing patterns, predicting, understanding language.', 'Artificial intelligence (AI)');
  G('IA generativa', 'ia', '01', 'IA que crea contenido nuevo (texto, imagen, audio, video, código) a partir de una instrucción.', 'AI that creates new content (text, image, audio, video, code) from an instruction.', 'Generative AI (GenAI)');
  G('IA tradicional', 'ia', '01', 'IA que analiza datos para clasificar, predecir o recomendar entre opciones conocidas, sin crear contenido nuevo.', 'AI that analyzes data to classify, predict or recommend among known options, without creating new content.', 'Predictive AI');
  G('LLM', 'ia', '02', 'Modelo de lenguaje grande: IA entrenada con enormes cantidades de texto para entender y generar lenguaje.', 'Large Language Model: AI trained on huge amounts of text to understand and generate language.', 'Large Language Model');
  G('Modelo', 'ia', '02', 'El sistema de IA ya entrenado que genera las respuestas (por ejemplo, Gemini Flash o Gemini Pro).', 'The trained AI system that generates answers (for example, Gemini Flash or Gemini Pro).', 'Model');
  G('Token', 'ia', '02', 'Fragmento de texto (una palabra corta, parte de una palabra o un signo) con el que trabaja el modelo.', 'A piece of text (a short word, part of a word or a symbol) the model works with.');
  G('Ventana de contexto', 'ia', '02', 'Cantidad de información que el modelo puede considerar a la vez en una conversación: mensajes, respuestas y archivos.', 'The amount of information the model can consider at once in a conversation: messages, answers and files.', 'Context window');
  G('Multimodal', 'ia', '01', 'Capacidad de entender y combinar varios tipos de información: texto, imagen, audio, video y documentos.', 'The ability to understand and combine several types of information: text, image, audio, video and documents.');
  G('Gemini', 'ia', '01', 'Familia de modelos de IA generativa de Google y nombre del asistente con el que conversas.', 'Google’s family of generative AI models and the name of the assistant you chat with.');
  G('Datos de entrenamiento', 'ia', '02', 'Textos, imágenes y otros datos con los que el modelo aprendió patrones antes de ser usado.', 'Texts, images and other data the model learned patterns from before being used.', 'Training data');
  G('Fecha de corte', 'ia', '02', 'Momento hasta el que llega lo aprendido por el modelo; para hechos posteriores necesita búsqueda o fuentes.', 'The point up to which the model’s learning extends; for later facts it needs search or sources.', 'Knowledge cutoff');
  G('Variabilidad de respuestas', 'ia', '02', 'El mismo prompt puede producir respuestas distintas; no es un error, es parte de cómo genera texto el modelo.', 'The same prompt can produce different answers; it isn’t a bug, it is part of how the model generates text.');
  G('Flash-Lite', 'ia', '04', 'Modelo de Gemini orientado a la respuesta más rápida, para tareas simples.', 'Gemini model geared to the fastest answer, for simple tasks.');
  G('Flash', 'ia', '04', 'Modelo de Gemini que equilibra velocidad y calidad; ideal para el uso diario.', 'Gemini model that balances speed and quality; ideal for everyday use.');
  G('Pro', 'ia', '04', 'Modelo de Gemini con razonamiento avanzado, para tareas complejas y mucho material.', 'Gemini model with advanced reasoning, for complex tasks and lots of material.');
  G('Auto', 'ia', '04', 'Modo en el que Gemini elige el modelo según tu prompt; es la opción del plan gratuito.', 'Mode in which Gemini picks the model based on your prompt; it is the free plan’s option.');
  G('Thinking', 'ia', '04', 'Tiempo que el modelo dedica a razonar antes de responder; se ajusta en niveles Low, Medium y High.', 'Time the model spends reasoning before answering; set in Low, Medium and High levels.', 'Nivel de razonamiento');
  G('Deep Think', 'ia', '04', 'Modo de razonamiento muy profundo para problemas difíciles, disponible en planes superiores.', 'Very deep reasoning mode for hard problems, available on higher plans.');
  G('LearnLM', 'ia', '04', 'Familia de modelos ajustados para el aprendizaje, en la que se basa Gemini for Education.', 'Family of models fine-tuned for learning, on which Gemini for Education is based.');
  G('Alucinación', 'ia', '05', 'Respuesta de la IA que suena segura pero es falsa, inventada o sin respaldo en ninguna fuente.', 'An AI answer that sounds confident but is false, made up or not backed by any source.', 'Hallucination');
  G('Google AI Studio', 'ia', '04', 'Entorno de Google para desarrolladores donde se prueban los modelos de Gemini con más opciones técnicas.', 'Google’s developer environment for testing Gemini models with more technical options.');
  G('Gemini Spark', 'ia', '24', 'Agente personal de Gemini que realiza tareas por ti; disponible primero para suscriptores de Ultra.', 'Gemini’s personal agent that carries out tasks for you; available first to Ultra subscribers.');

  /* Prompting */
  G('Prompt', 'prompt', '02', 'La instrucción, pregunta o pedido que le das a la IA, junto con su contexto.', 'The instruction, question or request you give the AI, together with its context.');
  G('Prompting', 'prompt', '02', 'El arte de escribir instrucciones para obtener resultados útiles de la IA.', 'The craft of writing instructions to get useful results from AI.');
  G('PARTS', 'prompt', '06', 'Marco de Google for Education para prompts: Persona, Act/Aim, Recipient, Theme y Structure.', 'Google for Education prompt framework: Persona, Act/Aim, Recipient, Theme and Structure.');
  G('Persona', 'prompt', '06', 'En PARTS, el rol que adopta Gemini («actúa como diseñador instruccional»).', 'In PARTS, the role Gemini takes on (“act as an instructional designer”).');
  G('Act / Aim', 'prompt', '06', 'En PARTS, la tarea con un verbo de acción (Act) o el objetivo que quieres lograr (Aim).', 'In PARTS, the task with an action verb (Act) or the goal you want to achieve (Aim).');
  G('Recipient', 'prompt', '06', 'En PARTS, para quién es el resultado: audiencia, edad, nivel.', 'In PARTS, who the result is for: audience, age, level.');
  G('Theme', 'prompt', '06', 'En PARTS, el tema y el contexto del pedido.', 'In PARTS, the topic and context of the request.');
  G('Structure', 'prompt', '06', 'En PARTS, el formato de la salida: tabla, lista, número de diapositivas, extensión.', 'In PARTS, the output format: table, list, number of slides, length.');
  G('Propósito · Audiencia · Formato · Límites', 'prompt', '06', 'Estructura práctica para un prompt útil: qué resolver, para quién, en qué forma y qué no inventar.', 'Practical structure for a useful prompt: what to solve, for whom, in what form and what not to invent.');
  G('Límites', 'prompt', '06', 'Parte del prompt que indica qué verificar, evitar o no inventar; protege contra las alucinaciones.', 'Part of the prompt stating what to verify, avoid or not invent; it protects against hallucinations.', 'Limits');
  G('Prompt situado', 'prompt', '06', 'Pedido con propósito, audiencia, duración, modalidad y tarea concreta; produce recursos útiles.', 'A request with purpose, audience, duration, format and a concrete task; it produces useful resources.');
  G('Verbo de acción', 'prompt', '06', 'Verbo que define la tarea con claridad: crea, resume, explica, compara, adapta.', 'A verb that defines the task clearly: create, summarize, explain, compare, adapt.');
  G('Ejemplo en el prompt', 'prompt', '06', 'Muestra del estilo o formato que esperas; suele mejorar mucho el resultado.', 'A sample of the style or format you expect; it usually improves the result a lot.', 'Few-shot');
  G('Iterar', 'prompt', '07', 'Mejorar un resultado en varias vueltas dando retroalimentación específica.', 'Improving a result over several rounds by giving specific feedback.', 'Iterate');
  G('Regenerar', 'prompt', '07', 'Pedir otra versión de la misma respuesta.', 'Asking for another version of the same answer.', 'Regenerate');
  G('Editar el prompt', 'prompt', '07', 'Modificar un mensaje ya enviado para reenviarlo con el contexto que faltaba.', 'Changing an already sent message to resend it with the missing context.');
  G('[VERIFICAR]', 'prompt', '05', 'Etiqueta que le pides a Gemini usar para marcar lo dudoso o lo que no está en tus fuentes.', 'A tag you ask Gemini to use to flag doubtful content or anything not in your sources.', '[VERIFY]');
  G('Grounding', 'prompt', '08', 'Anclar la respuesta de la IA a fuentes concretas que tú aportas o a resultados de búsqueda.', 'Anchoring the AI’s answer to specific sources you provide or to search results.');
  G('Contexto', 'prompt', '06', 'Información que acompaña al pedido: para quién, para qué, con qué materiales y restricciones.', 'Information accompanying the request: for whom, why, with what materials and constraints.', 'Context');
})();
