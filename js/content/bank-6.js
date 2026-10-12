/* Banco 6 · Dominio 3: alucinaciones, sesgo, privacidad, revisión humana. */
(function () {
  const T = (es, en) => ({ es, en });
  const Q = (id, d, mod, q, ...o) => GDC.BANK.push({ id, d, mod, q: T(...q), o: o.map(([es, en, wes, wen, ok]) => ({ t: T(es, en), why: T(wes, wen), ok: !!ok })) });

  Q('b601', 3, '05', ['¿Qué es una **alucinación** en IA generativa?', 'What is a **hallucination** in generative AI?'],
    ['Una respuesta segura, pero falsa', 'A confident but false answer', 'Correcto: suena convincente y no tiene respaldo.', 'Correct: it sounds convincing and has no backing.', true],
    ['Un error de conexión del navegador', 'A browser connection error', 'Es un fallo técnico, no una alucinación.', 'That’s a technical fault, not a hallucination.'],
    ['Una imagen con colores muy vivos', 'An image with very bright colours', 'No tiene relación con el concepto.', 'It has nothing to do with the concept.'],
    ['Una respuesta en otro idioma', 'An answer in another language', 'El idioma no define una alucinación.', 'Language doesn’t define a hallucination.']);

  Q('b602', 3, '05', ['¿Cuál es un ejemplo de alucinación en un contexto educativo?', 'Which is an example of a hallucination in an educational context?'],
    ['Un resumen más corto de lo pedido', 'A summary that is shorter than requested', 'Es un problema de extensión, no de veracidad.', 'That’s a length issue, not a truthfulness one.'],
    ['Una cita atribuida a un autor equivocado', 'A quote credited to the wrong author', 'Correcto: dato falso presentado como cierto.', 'Correct: a false fact presented as true.', true],
    ['Una respuesta con tono demasiado formal', 'An answer with too formal a tone', 'Es un problema de tono.', 'That’s a tone issue.'],
    ['Una tabla con columnas desordenadas', 'A table with messy columns', 'Es un problema de formato.', 'That’s a formatting issue.']);

  Q('b603', 3, '05', ['Gemini te dio una bibliografía. Uno de los libros no aparece en ninguna búsqueda. ¿Qué haces?', 'Gemini gave you a bibliography. One of the books doesn’t turn up in any search. What do you do?'],
    ['Lo cito igual: la IA no inventaría un libro', 'Cite it anyway: AI wouldn’t invent a book', 'Sí puede inventarlo: es una alucinación típica.', 'It can invent it: a typical hallucination.'],
    ['No lo uso y verifico el resto', 'Don’t use it and check the rest', 'Correcto: descartas lo no verificable y revisas lo demás.', 'Correct: you drop the unverifiable and check the rest.', true],
    ['Pido a Gemini que confirme que existe', 'Ask Gemini to confirm it exists', 'Puede confirmar con seguridad algo falso.', 'It can confidently confirm something false.'],
    ['Descarto toda la bibliografía sin revisar', 'Discard the whole list without checking', 'Es excesivo; verifica cada referencia.', 'Excessive; verify each reference.']);

  Q('b604', 3, '05', ['Un material es correcto, pero usa un ejemplo inapropiado para niños de 9 años. ¿Qué criterio de revisión falló?', 'A material is correct but uses an example unsuitable for 9-year-olds. Which review criterion failed?'],
    ['Precisión', 'Accuracy', 'Los datos son correctos.', 'The data is correct.'],
    ['Pertinencia', 'Relevance', 'Correcto: no es adecuado para la audiencia.', 'Correct: it doesn’t suit the audience.', true],
    ['Privacidad', 'Privacy', 'No hay datos personales expuestos.', 'No personal data is exposed.'],
    ['Transparencia', 'Transparency', 'Trata de declarar el uso de IA.', 'It’s about disclosing AI use.']);

  Q('b605', 3, '25', ['Gemini genera ejemplos donde los científicos siempre son hombres. ¿Qué concepto ético está en juego?', 'Gemini generates examples where scientists are always men. Which ethical concept is at stake?'],
    ['Sesgo', 'Bias', 'Correcto: reproduce un estereotipo de los datos.', 'Correct: it reproduces a stereotype from the data.', true],
    ['Latencia', 'Latency', 'Es un término técnico de velocidad.', 'It’s a technical speed term.'],
    ['Grounding', 'Grounding', 'Grounding es anclar a fuentes.', 'Grounding is anchoring to sources.'],
    ['Multimodalidad', 'Multimodality', 'Se refiere a tipos de información.', 'It refers to types of information.']);

  Q('b606', 3, '25', ['¿Cómo mitigas el sesgo en los materiales que genera Gemini?', 'How do you mitigate bias in materials Gemini generates?'],
    ['Usando siempre el modelo más potente', 'Always using the most powerful model', 'Ningún modelo está libre de sesgo.', 'No model is bias-free.'],
    ['Pidiendo diversidad y revisando ejemplos', 'Asking for diversity and checking examples', 'Correcto: instrucción explícita + revisión humana.', 'Correct: explicit instruction + human review.', true],
    ['Evitando usar imágenes en tus materiales', 'Avoiding images in your materials', 'El sesgo también aparece en el texto.', 'Bias also appears in text.'],
    ['Traduciendo el material a otro idioma', 'Translating the material into another language', 'Traducir no corrige estereotipos.', 'Translating doesn’t fix stereotypes.']);

  Q('b607', 3, '25', ['Quieres analizar con Gemini el rendimiento de tu curso. ¿Qué preparación protege mejor la privacidad?', 'You want to analyze your course’s performance with Gemini. Which preparation best protects privacy?'],
    ['Subir la hoja con nombres y DNI', 'Upload the sheet with names and IDs', 'Expone datos innecesarios.', 'It exposes unnecessary data.'],
    ['Usar códigos en lugar de nombres', 'Use codes instead of names', 'Correcto: minimización de datos.', 'Correct: data minimization.', true],
    ['Publicar la hoja para que la lea', 'Publish the sheet so it can read it', 'Publicarla es un riesgo grave.', 'Publishing it is a serious risk.'],
    ['Incluir fotos para identificarlos', 'Include photos to identify them', 'Datos sensibles innecesarios.', 'Unnecessary sensitive data.']);

  Q('b608', 3, '25', ['Un colega dice: «Como la cuenta escolar protege los datos, puedo subir los diagnósticos médicos de mis estudiantes». ¿Qué le dices?', 'A colleague says: “Since the school account protects data, I can upload my students’ medical diagnoses.” What do you say?'],
    ['Que tiene razón: está todo protegido', 'He’s right: everything is protected', 'La protección no elimina el deber de minimizar datos.', 'Protection doesn’t remove the duty to minimize data.'],
    ['Que solo suba lo necesario para la tarea', 'To upload only what the task needs', 'Correcto: minimizar datos sigue siendo su responsabilidad.', 'Correct: minimizing data remains his responsibility.', true],
    ['Que use su cuenta personal en su lugar', 'To use his personal account instead', 'Empeora la protección.', 'It worsens protection.'],
    ['Que los suba en una imagen, no en texto', 'To upload them as an image, not text', 'El formato no cambia el riesgo.', 'Format doesn’t change the risk.']);

  Q('b609', 3, '05', ['¿Qué combinación reduce **más** las alucinaciones al crear un material?', 'Which combination **most** reduces hallucinations when creating a material?'],
    ['Pedir creatividad y mucho detalle', 'Asking for creativity and lots of detail', 'Más libertad, más riesgo.', 'More freedom, more risk.'],
    ['Tus fuentes, límites y revisión', 'Your sources, limits and review', 'Correcto: anclas, acotas y verificas.', 'Correct: you anchor, constrain and verify.', true],
    ['Un modelo más rápido y breve', 'A faster model and shorter output', 'La rapidez no mejora la veracidad.', 'Speed doesn’t improve truthfulness.'],
    ['Repetir el prompt varias veces', 'Repeating the prompt several times', 'Repetir no verifica nada.', 'Repeating verifies nothing.']);

  Q('b610', 3, '05', ['¿Por qué un texto muy bien redactado puede ser engañoso?', 'Why can a very well-written text be misleading?'],
    ['Porque la fluidez no prueba que sea cierto', 'Because fluency doesn’t prove it’s true', 'Correcto: suena seguro aunque esté mal.', 'Correct: it sounds sure even when wrong.', true],
    ['Porque los textos largos siempre fallan', 'Because long texts always fail', 'La extensión no determina la veracidad.', 'Length doesn’t determine truthfulness.'],
    ['Porque Gemini oculta las fuentes a propósito', 'Because Gemini hides sources on purpose', 'No es intencional.', 'It isn’t intentional.'],
    ['Porque usa demasiadas palabras técnicas', 'Because it uses too many technical words', 'El vocabulario no es el problema.', 'Vocabulary isn’t the problem.']);

  Q('b611', 3, '25', ['¿Qué significa **transparencia** en el uso de IA en el aula?', 'What does **transparency** mean in classroom AI use?'],
    ['Usar solo herramientas de código abierto', 'Using only open-source tools', 'No es el sentido del término aquí.', 'That isn’t the term’s meaning here.'],
    ['Decir cuándo y cómo se usó la IA', 'Saying when and how AI was used', 'Correcto: declarar el uso de IA en materiales y trabajos.', 'Correct: disclosing AI use in materials and work.', true],
    ['Mostrar las notas de todos en público', 'Showing everyone’s grades publicly', 'Eso viola la privacidad.', 'That violates privacy.'],
    ['Permitir cualquier uso sin reglas', 'Allowing any use without rules', 'Transparencia no es ausencia de reglas.', 'Transparency isn’t a lack of rules.']);

  Q('b612', 3, '13', ['Un docente quiere editar con Nano Banana la foto grupal de su clase para un afiche. ¿Qué es imprescindible?', 'A teacher wants to edit his class group photo with Nano Banana for a poster. What is essential?'],
    ['Consentimiento informado de las familias', 'Informed consent from the families', 'Correcto: son imágenes de menores.', 'Correct: they’re images of minors.', true],
    ['Usar la mejor resolución posible para imprimir', 'Using the best possible resolution to print', 'La calidad no resuelve el consentimiento.', 'Quality doesn’t solve consent.'],
    ['Quitar la marca de agua visible', 'Removing the visible watermark', 'Va contra la transparencia.', 'It goes against transparency.'],
    ['Usar el plan pago de imágenes', 'Using the paid image plan', 'El plan no cambia el requisito ético.', 'The plan doesn’t change the ethical requirement.']);

  Q('b613', 3, '13', ['¿Para qué sirve **SynthID**?', 'What is **SynthID** for?'],
    ['Para mejorar la nitidez de la imagen', 'To sharpen the image', 'No es un filtro estético.', 'It isn’t a cosmetic filter.'],
    ['Para identificar contenido generado con IA', 'To identify AI-generated content', 'Correcto: es una marca de agua invisible.', 'Correct: it’s an invisible watermark.', true],
    ['Para firmar la imagen con tu nombre', 'To sign the image with your name', 'No identifica al autor humano.', 'It doesn’t identify the human author.'],
    ['Para comprimir la imagen y que pese menos', 'To compress the image and shrink it', 'No es un compresor.', 'It isn’t a compressor.']);

  Q('b614', 3, '05', ['Gemini resumió un artículo y el resumen dice lo contrario de una conclusión del autor. ¿Qué tipo de problema es?', 'Gemini summarized an article and the summary states the opposite of one of the author’s conclusions. What kind of problem is it?'],
    ['Inexactitud factual', 'Factual inaccuracy', 'Correcto: tergiversa la fuente; corrígelo contrastando.', 'Correct: it misrepresents the source; fix it by checking.', true],
    ['Problema de formato', 'Formatting problem', 'El formato no cambia el contenido.', 'Format doesn’t change content.'],
    ['Problema de idioma', 'Language problem', 'No es una cuestión de idioma.', 'It isn’t a language matter.'],
    ['Problema de velocidad', 'Speed problem', 'La velocidad no explica el error.', 'Speed doesn’t explain the error.']);

  Q('b615', 3, '25', ['¿Qué incluye la **responsabilidad digital** al usar IA?', 'What does **digital responsibility** include when using AI?'],
    ['Usarla de forma ética, segura y crítica', 'Using it ethically, safely and critically', 'Correcto: verificar, citar y respetar a los demás.', 'Correct: verify, cite and respect others.', true],
    ['Usarla lo más posible en todo', 'Using it as much as possible for everything', 'La cantidad no es responsabilidad.', 'Quantity isn’t responsibility.'],
    ['Evitar cualquier tecnología nueva', 'Avoiding any new technology', 'Evitarla no forma responsabilidad.', 'Avoiding it builds no responsibility.'],
    ['Confiar siempre en lo que dice la IA', 'Always trusting what AI says', 'Es lo contrario del pensamiento crítico.', 'It’s the opposite of critical thinking.']);

  Q('b616', 3, '17', ['Vas a pedir a Gemini un correo para la familia de un estudiante con dificultades. ¿Qué información incluyes?', 'You’ll ask Gemini for an email to the family of a struggling student. What information do you include?'],
    ['Nombre completo, diagnóstico y notas', 'Full name, diagnosis and grades', 'Son datos sensibles innecesarios.', 'Unnecessary sensitive data.'],
    ['La situación general y el tono buscado', 'The situation and the tone you want', 'Correcto: describes necesidades, no identidades.', 'Correct: you describe needs, not identities.', true],
    ['Su dirección y teléfono personal', 'Their address and personal phone', 'Irrelevante y sensible.', 'Irrelevant and sensitive.'],
    ['El historial disciplinario completo', 'The full disciplinary record', 'Excesivo e innecesario.', 'Excessive and unnecessary.']);

  Q('b617', 3, '05', ['Al revisar un resultado de Gemini, ¿qué cuatro criterios aplicas?', 'When reviewing a Gemini result, which four criteria do you apply?'],
    ['Precisión, pertinencia, privacidad y transparencia', 'Accuracy, relevance, privacy and transparency', 'Correcto: la revisión humana completa.', 'Correct: the full human review.', true],
    ['Velocidad, longitud, color y tipografía del texto', 'Speed, length, colour and typeface of the text', 'Son criterios de forma, no de calidad.', 'They’re form criteria, not quality ones.'],
    ['Originalidad, humor, uso de emojis y rapidez', 'Originality, humour, use of emojis and speed', 'No son criterios pedagógicos.', 'They aren’t teaching criteria.'],
    ['Modelo, plan, idioma y dispositivo', 'Model, plan, language and device', 'Son condiciones técnicas.', 'They’re technical conditions.']);

  Q('b618', 3, '25', ['¿Qué salvaguarda adicional existe para estudiantes menores de 18 con cuentas educativas?', 'What additional safeguard exists for students under 18 with education accounts?'],
    ['Filtros y protecciones de contenido extra', 'Extra content filters and protections', 'Correcto: y el admin controla el acceso.', 'Correct: and the admin controls access.', true],
    ['Acceso ilimitado a todas las funciones', 'Unlimited access to every feature', 'Al contrario: hay restricciones.', 'The opposite: there are restrictions.'],
    ['Publicación automática de sus chats', 'Automatic publishing of their chats', 'No se publican.', 'They aren’t published.'],
    ['Ninguna: el trato es igual que adultos', 'None: same treatment as adults', 'Hay salvaguardas adicionales.', 'There are additional safeguards.']);

  Q('b619', 3, '05', ['¿Qué estrategia ayuda a detectar datos inventados en un material generado?', 'Which strategy helps detect invented data in a generated material?'],
    ['Pedir que marque [VERIFICAR] lo dudoso', 'Ask it to mark doubts with [VERIFY]', 'Correcto: hace visible lo que debes revisar.', 'Correct: it makes visible what you must check.', true],
    ['Pedir que no use tablas ni listas', 'Ask it not to use tables or lists', 'Las tablas no causan invenciones.', 'Tables don’t cause invention.'],
    ['Pedir que escriba todo en mayúsculas', 'Ask it to write everything in capitals', 'No tiene efecto en la veracidad.', 'It has no effect on truthfulness.'],
    ['Pedir que sea más breve', 'Ask it to be shorter', 'Breve no es sinónimo de cierto.', 'Short isn’t a synonym for true.']);

  Q('b620', 3, '05', ['Gemini responde sobre una ley educativa aprobada la semana pasada. ¿Qué haces?', 'Gemini answers about an education law passed last week. What do you do?'],
    ['Verifico en la fuente oficial', 'Check the official source', 'Correcto: lo reciente puede estar fuera de su conocimiento.', 'Correct: recent events may be outside its knowledge.', true],
    ['Lo uso: Gemini siempre está al día', 'Use it: Gemini is always up to date', 'Puede no conocer lo más reciente.', 'It may not know the latest.'],
    ['Pido más detalles y no verifico', 'Ask for more detail and don’t verify', 'Más detalle no es más verdad.', 'More detail isn’t more truth.'],
    ['Cambio al modelo Pro y confío', 'Switch to Pro and trust it', 'El modelo no garantiza actualidad.', 'The model doesn’t guarantee recency.']);
})();
