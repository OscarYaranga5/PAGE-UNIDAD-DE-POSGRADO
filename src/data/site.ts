// Fuente única para identidad y enlaces. Sustituir el isotipo tipográfico
// por el logo aprobado en Brand.astro cuando la universidad lo proporcione.
export const site = {
  name: 'Unidad de Posgrado',
  university: 'Universidad Nacional de Cañete',
  email: 'escuela.posgrado@undc.edu.pe',
  phone: '+51 923 703 585',
  phoneHref: 'tel:+51923703585',
  address: 'Av. Mariscal Benavides 1370, Casa de la Cultura',
  city: 'San Vicente de Cañete, Lima, Perú',
  official: 'https://posgrado.undc.edu.pe/',
  classroom: 'https://aulaposgrado.undc.edu.pe/',
  registration: 'https://posgrado-inscripciones.undc.edu.pe/',
};

export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Programas', href: '/programas/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Admisión', href: '/admision/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const admissionSteps = [
  { title: 'Encuentra tu programa', text: 'Explora las maestrías y el doctorado. Conoce su enfoque y elige tu siguiente desafío.' },
  { title: 'Revisa la convocatoria', text: 'Consulta con admisión los requisitos, el cronograma y la inversión de tu programa.' },
  { title: 'Prepara tu postulación', text: 'Reúne la documentación solicitada y sigue las indicaciones del portal institucional.' },
  { title: 'Da el siguiente paso', text: 'Completa la evaluación y revisa los resultados por los canales oficiales.' },
];

export const faqs = [
  { question: '¿Qué programas puedo estudiar?', answer: 'Puedes explorar las maestrías en Gestión Pública y en Docencia Superior e Investigación, y el Doctorado en Administración. Consulta con admisión qué programas tienen convocatoria vigente.' },
  { question: '¿Cuál es la modalidad de estudio?', answer: 'Las fichas institucionales consultadas indican modalidad presencial. Confirma la modalidad y los horarios de la convocatoria que te interesa antes de postular.' },
  { question: '¿Cómo consulto los requisitos y la inversión?', answer: 'Contacta al equipo de posgrado por correo o teléfono. Los requisitos, las tarifas y las fechas deben verificarse en el prospecto de la convocatoria vigente.' },
  { question: '¿Puedo inscribirme desde esta página?', answer: 'Esta página presenta los programas y te orienta. La inscripción se realiza en el portal institucional de admisión, al que puedes acceder desde la sección Admisión.' },
];
