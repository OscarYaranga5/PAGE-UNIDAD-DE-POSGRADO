type TestimonialBase = {
  id: string;
  program: string;
  area: string;
};

// Un testimonio publicado requiere una cita y una identidad autorizadas.
// Mantener status: 'pending' hasta contar con ese material; no usar stock
// como si fuera la fotografía de un egresado real.
export type Testimonial = TestimonialBase &
  (
    | { status: 'pending' }
    | {
        status: 'published';
        quote: string;
        name: string;
        role: string;
        image?: string;
      }
  );

export const testimonials: Testimonial[] = [
  {
    id: 'gestion-publica',
    program: 'Maestría en Gestión Pública',
    area: 'Gestión pública',
    status: 'pending',
  },
  {
    id: 'docencia-investigacion',
    program: 'Maestría en Docencia Superior e Investigación',
    area: 'Docencia e investigación',
    status: 'pending',
  },
  {
    id: 'administracion',
    program: 'Doctorado en Administración',
    area: 'Administración',
    status: 'pending',
  },
];
