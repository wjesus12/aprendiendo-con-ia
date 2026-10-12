/* Módulo 15 · Video y voz: Vids, Omni y Veo */
GDC.MOD['15'] = {
  min: 11,
  intro: {
    es: 'El video es uno de los formatos más potentes para enseñar, y Google tiene varias herramientas con IA para crearlo. Aquí verás un panorama claro de **Google Vids**, **Gemini Omni** y **Veo**: qué hace cada uno, para quién está disponible y cómo usarlos con criterio.',
    en: 'Video is one of the most powerful formats for teaching, and Google has several AI tools to create it. Here you will get a clear overview of **Google Vids**, **Gemini Omni** and **Veo**: what each does, who it is available to and how to use them thoughtfully.'
  },
  objetivos: [
    { es: 'Distinguir Google Vids, Gemini Omni y Veo.', en: 'Tell Google Vids, Gemini Omni and Veo apart.' },
    { es: 'Describir cómo convertir una presentación de Slides en un video con Vids.', en: 'Describe how to turn a Slides presentation into a video with Vids.' },
    { es: 'Aplicar criterios éticos al contenido audiovisual generado con IA.', en: 'Apply ethical criteria to AI-generated audiovisual content.' }
  ],
  secciones: [
    {
      h: { es: 'Tres herramientas, tres usos', en: 'Three tools, three uses' },
      b: [
        { table: {
          head: [{ es: 'Herramienta', en: 'Tool' }, { es: 'Qué hace', en: 'What it does' }, { es: 'Disponibilidad', en: 'Availability' }],
          rows: [
            [{ es: 'Google Vids', en: 'Google Vids' }, { es: 'App de Workspace para crear videos de presentación con guion, voz en off y animaciones generadas con Gemini', en: 'Workspace app to create presentation videos with script, voiceover and animations generated with Gemini' }, { es: 'Workspace; en educación, con Google AI Pro for Education', en: 'Workspace; in education, with Google AI Pro for Education' }],
            [{ es: 'Gemini Omni', en: 'Gemini Omni' }, { es: 'Crea y edita videos conversando, incluidos avatares', en: 'Creates and edits videos through conversation, including avatars' }, { es: 'Suscriptores de Google AI mayores de 18 años; varía por región', en: 'Google AI subscribers aged 18+; varies by region' }],
            [{ es: 'Veo', en: 'Veo' }, { es: 'Modelo de Google que genera clips de video a partir de texto o imágenes', en: 'Google model that generates video clips from text or images' }, { es: 'Según el plan; acceso amplio en los planes superiores', en: 'Depends on plan; broad access on top tiers' }]
          ]
        } },
        { note: { es: 'Estas funciones cambian rápido y suelen depender de planes de pago. El examen evalúa sobre todo las funciones gratuitas; las de pago pueden aparecer, pero no puntúan.',
                  en: 'These features change quickly and often depend on paid plans. The exam mainly assesses free features; paid ones may appear but aren’t scored.' }, kind: 'info' }
      ]
    },
    {
      h: { es: 'De Slides a video con Google Vids', en: 'From Slides to video with Google Vids' },
      b: [
        { p: { es: 'La guía del examen menciona transformar una presentación de Google Slides en un video atractivo con **Google Vids**, incorporando guion, voz en off y animaciones generados con Gemini (objetivo 2.3.4, disponible con Google AI Pro for Education).',
               en: 'The exam guide mentions turning a Google Slides presentation into an engaging video with **Google Vids**, adding a script, voiceover and animations generated with Gemini (objective 2.3.4, available with Google AI Pro for Education).' } },
        { flow: [
          { es: 'Presentación en Slides', en: 'Slides deck' },
          { es: 'Importar a Vids', en: 'Import into Vids' },
          { es: 'Guion con Gemini', en: 'Script with Gemini' },
          { es: 'Voz en off y animación', en: 'Voiceover and animation' },
          { es: 'Revisar y compartir', en: 'Review and share' }
        ] },
        { p: { es: 'Un video corto (2–4 minutos) que resuma la clase es ideal para que los estudiantes repasen, para el aula invertida o para quien faltó.', en: 'A short video (2–4 minutes) summarizing the lesson is ideal for student review, flipped classrooms or those who missed class.' } }
      ]
    },
    {
      h: { es: 'Alternativas sin video generado', en: 'Alternatives without generated video' },
      b: [
        { p: { es: 'Si no tienes acceso a estas herramientas, puedes lograr efectos parecidos con funciones disponibles para más usuarios:', en: 'If you don’t have access to these tools, you can achieve similar effects with features available to more users:' } },
        { list: [
          { es: '**Audio Overview** en Gemini Notebook o en Canvas: un resumen tipo pódcast de tus materiales.', en: '**Audio Overview** in Gemini Notebook or Canvas: a podcast-style summary of your materials.' },
          { es: '**Video Overview** en Gemini Notebook: una presentación narrada a partir de tus fuentes (módulo 21).', en: '**Video Overview** in Gemini Notebook: a narrated slideshow from your sources (module 21).' },
          { es: '**Guion con Gemini** + grabación propia: Gemini escribe el guion y tú grabas.', en: '**Script with Gemini** + your own recording: Gemini writes the script and you record.' }
        ] }
      ]
    },
    {
      h: { es: 'Ética del contenido audiovisual', en: 'Ethics of audiovisual content' },
      b: [
        { list: [
          { es: '**Rostros y voces reales:** no imites a personas reales sin consentimiento.', en: '**Real faces and voices:** don’t imitate real people without consent.' },
          { es: '**Transparencia:** indica que el video o la voz se generaron con IA.', en: '**Transparency:** state that the video or voice was AI-generated.' },
          { es: '**Exactitud:** revisa el guion como revisarías un texto: la voz convincente no lo hace verdadero.', en: '**Accuracy:** review the script as you would a text: a convincing voice doesn’t make it true.' },
          { es: '**Accesibilidad:** añade subtítulos y descripciones.', en: '**Accessibility:** add captions and descriptions.' }
        ] },
        { note: { es: 'Pide a Gemini un guion de 2 minutos que resuma tu última clase, con un gancho inicial, tres ideas clave y una pregunta final. Léelo en voz alta y ajústalo.', en: 'Ask Gemini for a 2-minute script summarizing your last lesson, with an opening hook, three key ideas and a closing question. Read it aloud and adjust it.' }, kind: 'lab' }
      ]
    }
  ],
  trampas: [
    { es: 'Confundir Vids (app para videos de presentación) con Veo (modelo que genera clips).', en: 'Confusing Vids (an app for presentation videos) with Veo (a model that generates clips).' },
    { es: 'Suponer que todas estas funciones están en el plan gratuito.', en: 'Assuming all these features are on the free plan.' },
    { es: 'Publicar un video con voz sintética sin avisar que es IA.', en: 'Publishing a video with a synthetic voice without saying it is AI.' }
  ],
  ideas: [
    { es: 'Vids: Slides → video con guion, voz y animación (AI Pro for Education).', en: 'Vids: Slides → video with script, voice and animation (AI Pro for Education).' },
    { es: 'Omni: video conversando; Veo: modelo de generación de clips.', en: 'Omni: video through conversation; Veo: clip-generation model.' },
    { es: 'Alternativas: Audio y Video Overview, o guion + grabación propia.', en: 'Alternatives: Audio and Video Overviews, or script + your own recording.' }
  ],
  quiz: [
    { d: 2,
      q: { es: 'Quieres convertir tu presentación de Slides en un video con guion y voz en off. ¿Qué herramienta corresponde?', en: 'You want to turn your Slides deck into a video with a script and voiceover. Which tool fits?' },
      o: [
        { ok: true, t: { es: 'Google Vids', en: 'Google Vids' }, why: { es: 'Correcto: es la app de Workspace pensada para eso.', en: 'Correct: it is the Workspace app designed for that.' } },
        { t: { es: 'Nano Banana', en: 'Nano Banana' }, why: { es: 'Nano Banana crea y edita imágenes, no videos.', en: 'Nano Banana creates and edits images, not videos.' } },
        { t: { es: 'Deep Research', en: 'Deep Research' }, why: { es: 'Deep Research investiga en la web.', en: 'Deep Research researches the web.' } },
        { t: { es: 'Gemini Live', en: 'Gemini Live' }, why: { es: 'Gemini Live es para conversar por voz.', en: 'Gemini Live is for voice conversation.' } }
      ] },
    { d: 1,
      q: { es: '¿Qué es **Veo**?', en: 'What is **Veo**?' },
      o: [
        { t: { es: 'La app de Workspace para videos de clase', en: 'The Workspace app for class videos' }, why: { es: 'Esa es Google Vids.', en: 'That is Google Vids.' } },
        { ok: true, t: { es: 'Un modelo que genera clips de video', en: 'A model that generates video clips' }, why: { es: 'Correcto: genera video a partir de texto o imágenes.', en: 'Correct: it generates video from text or images.' } },
        { t: { es: 'El modo de voz del Gemini app', en: 'The Gemini app’s voice mode' }, why: { es: 'El modo de voz es Gemini Live.', en: 'The voice mode is Gemini Live.' } },
        { t: { es: 'Un visor de videos de YouTube', en: 'A YouTube video viewer' }, why: { es: 'No es un reproductor; es un modelo generativo.', en: 'It isn’t a player; it is a generative model.' } }
      ] },
    { d: 3,
      q: { es: 'Generaste un video con una voz sintética para tu curso. ¿Qué es imprescindible antes de publicarlo?', en: 'You generated a video with a synthetic voice for your course. What is essential before publishing it?' },
      o: [
        { t: { es: 'Que dure menos de un minuto en total', en: 'That it lasts under a minute in total' }, why: { es: 'La duración depende del objetivo, no es un requisito ético.', en: 'Length depends on the goal; it isn’t an ethical requirement.' } },
        { t: { es: 'Que use la voz de un personaje famoso', en: 'That it uses a famous person’s voice' }, why: { es: 'Imitar a personas reales sin permiso es un problema ético.', en: 'Imitating real people without permission is an ethical problem.' } },
        { ok: true, t: { es: 'Revisar el guion y avisar que es IA', en: 'Check the script and disclose AI use' }, why: { es: 'Correcto: exactitud y transparencia ante todo.', en: 'Correct: accuracy and transparency first.' } },
        { t: { es: 'Quitarle todos los subtítulos', en: 'Remove all of the captions' }, why: { es: 'Los subtítulos mejoran la accesibilidad; no conviene quitarlos.', en: 'Captions improve accessibility; don’t remove them.' } }
      ] }
  ],
  fuentes: [
    { t: 'Google for Education — Gemini Certified Educator exam guide (2.3.4)', url: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf' },
    { t: 'Gemini — Release notes (Gemini Omni)', url: 'https://gemini.google/release-notes/' },
    { t: 'Gemini — Google AI Pro & Ultra (Veo)', url: 'https://gemini.google/subscriptions/' }
  ]
};
