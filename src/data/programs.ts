// Catálogo de filtros compartido; los contadores se calculan con los programas.
export const programCategories = [
  { type: 'Maestría', label: 'Maestrías' },
  { type: 'Doctorado', label: 'Doctorados' },
  { type: 'Segunda Especialización', label: 'Segunda Especialización' },
  { type: 'Diplomado', label: 'Diplomados' },
] as const;

export interface Program {
  slug: string;
  title: string;
  type: (typeof programCategories)[number]['type'];
  area: string;
  description: string;
  audience: string;
  semesters: number;
  image: string;
  imageAlt: string;
  skills: string[];
  source: string;
}

// Datos contrastados con las fichas institucionales el 11/11/2026.
// Mantener aquí la información que comparten tarjetas y páginas de detalle.
// No se publican precios ni fechas sin una convocatoria vigente confirmada.
export const programs: Program[] = [
  {
    slug: 'gestion-publica',
    title: 'Gestión Pública',
    type: 'Maestría',
    area: 'Gestión y desarrollo',
    description: 'Transforma tu vocación de servicio en una gestión que genere valor para la ciudadanía.',
    audience: 'Para profesionales interesados en el sector público, la planificación y la mejora de los servicios a la ciudadanía.',
    semesters: 3,
    image: '/images/gestion.webp',
    imageAlt: 'Espacio de trabajo colaborativo, fotografía referencial',
    skills: ['Planeamiento estratégico del sector público', 'Presupuesto público y gobierno digital', 'Modernización de la gestión pública', 'Investigación aplicada a la gestión'],
    source: 'https://posgrado.undc.edu.pe/gestion-publica/',
  },
  {
    slug: 'docencia-superior-investigacion',
    title: 'Docencia Superior e Investigación',
    type: 'Maestría',
    area: 'Educación e investigación',
    description: 'Conecta la enseñanza con la investigación y abre nuevas posibilidades para la educación superior.',
    audience: 'Para profesionales que desean fortalecer su práctica docente y desarrollar capacidades de investigación en educación superior.',
    semesters: 3,
    image: '/images/docencia.webp',
    imageAlt: 'Personas participando en una clase, fotografía referencial',
    skills: ['Pedagogía y estrategias didácticas', 'Gestión de la calidad educativa', 'Comunicación y propuesta de valor educativa', 'Investigación educacional'],
    source: 'https://posgrado.undc.edu.pe/maestria-en-docencia-universitaria-e-investigacion/',
  },
  {
    slug: 'administracion',
    title: 'Administración',
    type: 'Doctorado',
    area: 'Dirección e innovación',
    description: 'Profundiza en la investigación y construye nuevas perspectivas para dirigir las organizaciones.',
    audience: 'Para egresados de maestría interesados en la gestión de organizaciones, la investigación y la docencia universitaria.',
    semesters: 6,
    image: '/images/administracion.webp',
    imageAlt: 'Oficina contemporánea, fotografía referencial',
    skills: ['Innovación organizacional', 'Gestión estratégica de organizaciones', 'Investigación científica en administración'],
    source: 'https://posgrado.undc.edu.pe/doctorado-en-administracion/',
  },
];
