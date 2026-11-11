export interface NewsItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  // Fecha ISO YYYY-MM-DD al aprobar la publicación. No inventar fechas.
  publishedAt: string | null;
  isDemo: boolean;
  paragraphs: string[];
}

// Contenido editorial de muestra para revisar el diseño y la navegación.
// Sustituir por noticias aprobadas y cambiar isDemo a false al publicarlas.
export const news: NewsItem[] = [
  {
    slug: 'tu-siguiente-etapa-de-posgrado',
    title: 'Orientación para tu siguiente etapa de posgrado',
    category: 'Formación académica',
    image: '/images/docencia.webp',
    imageAlt: 'Participantes en una clase; fotografía referencial',
    excerpt:
      'Conoce qué aspectos revisar antes de elegir el programa que acompañará tus metas profesionales.',
    publishedAt: null,
    isDemo: true,
    paragraphs: [
      'Elegir un posgrado empieza por identificar qué quieres aprender y cómo se relaciona con tu experiencia. Revisa el enfoque del programa, el perfil de formación y los temas que te gustaría explorar.',
      'Antes de tomar una decisión, consulta la modalidad, la duración, los requisitos y la inversión en la convocatoria vigente. Conversar con el equipo de posgrado puede ayudarte a resolver tus dudas.',
      'Explora las fichas de los programas de este sitio y utiliza los canales de contacto institucionales para solicitar orientación.',
    ],
  },
  {
    slug: 'investigacion-buenas-preguntas',
    title: 'La investigación empieza con una buena pregunta',
    category: 'Investigación',
    image: '/images/administracion.webp',
    imageAlt:
      'Espacio de trabajo para el intercambio de ideas; fotografía referencial',
    excerpt:
      'Una mirada a cómo conectar la experiencia profesional con los desafíos que vale la pena investigar.',
    publishedAt: null,
    isDemo: true,
    paragraphs: [
      'La experiencia profesional puede ser el punto de partida para una pregunta de investigación. Observar una dificultad, comparar perspectivas y revisar lo que ya se conoce ayuda a delimitar un tema.',
      'Una pregunta clara permite identificar qué información necesitas y qué métodos podrían ayudarte a estudiarla. El proceso requiere lectura, reflexión y atención a las implicaciones éticas.',
      'Consulta el enfoque de investigación del programa que te interesa y revisa sus documentos académicos para conocer las líneas y los requisitos oficiales.',
    ],
  },
  {
    slug: 'comunidad-que-comparte-conocimiento',
    title: 'Una comunidad que comparte conocimiento',
    category: 'Comunidad de posgrado',
    image: '/images/comunidad.webp',
    imageAlt:
      'Profesionales colaborando alrededor de una mesa; fotografía referencial',
    excerpt:
      'Encuentra los espacios y canales institucionales que acompañan la experiencia de estudiar un posgrado.',
    publishedAt: null,
    isDemo: true,
    paragraphs: [
      'El intercambio de ideas permite conocer otras experiencias y ampliar nuestra manera de abordar un problema. La formación de posgrado ofrece un contexto para conectar esas perspectivas con el estudio de una especialidad.',
      'El aula virtual y el portal universitario son accesos útiles para la comunidad académica. Cada plataforma puede requerir credenciales institucionales y tiene sus propios servicios.',
      'En la sección Comunidad encontrarás los enlaces institucionales. Para novedades, resultados y comunicados oficiales, consulta el portal de posgrado.',
    ],
  },
];

export function formatNewsDate(date: string): string {
  // UTC evita que una fecha sin hora retroceda un día en la zona de Lima.
  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
