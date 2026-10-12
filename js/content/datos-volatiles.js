/* Datos que Google cambia a menudo. Se actualizan AQUÍ, sin tocar los módulos.
   Fuentes y matices: docs/investigacion.md */
(function () {
  GDC.DATA = {
    verificado: '2026-10-10',
    modelosApp: {
      gratis: 'Auto (elige entre Flash-Lite, Flash y Pro según el prompt)',
      pago: ['Flash-Lite', 'Flash', 'Pro'],
      thinking: ['Low', 'Medium', 'High']
    },
    modelosApi: { flash: 'Gemini 3.8 Flash', pro: 'Gemini 3.1 Pro', flashLite: 'Gemini 3.5 Flash-Lite' },
    imagen: { defecto: 'Nano Banana 2 (Gemini 3.1 Flash Image)', pro: 'Nano Banana Pro (Gemini 3 Pro Image)' },
    planes: ['Free', 'Google AI Plus', 'Google AI Pro', 'Google AI Ultra'],
    notebook: { nombre: 'Gemini Notebook', antes: 'NotebookLM', desde: '2026-07-16', url: 'https://notebooklm.google' },
    gemsSkills: {
      skillsDesde: '2026-10-13',
      gemsASettings: '2026-11-17',
      finEducation: 'no antes del 2027-06-01',
      finBusiness: 'no antes del 2027-03-01'
    },
    examen: {
      educator: { tiempoMin: 120, preguntas: 37, preguntasOficial: false, validezAnios: 3, reintentoDias: 8, ventanaDias: 14, idiomaES: true, aprobadoEstimado: 80 },
      student: { tiempoMin: 60, preguntas: 30, aproximacionPropia: true }
    },
    enlaces: {
      gemini: 'https://gemini.google.com',
      certificaciones: 'https://educertifications.google',
      guiaEducator: 'https://services.google.com/fh/files/misc/geminieducatorexamguide.pdf',
      faq: 'https://support.google.com/googleforeducation/answer/16561655?hl=es',
      ayudaCanvas: 'https://support.google.com/gemini/answer/16047321?hl=es',
      skills: 'https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills',
      releaseNotes: 'https://gemini.google/release-notes/'
    }
  };
})();
