export interface AcademicEvent {
  id: string;
  title: string;
  category: string;
  description: string;
  // Fecha ISO YYYY-MM-DD y destino real al confirmar la convocatoria.
  date: string | null;
  href?: string;
}

// Reservas visuales, no anuncios de eventos ficticios.
// Sustituir cada registro con una convocatoria aprobada cuando esté disponible.
export const events: AcademicEvent[] = [
  {
    id: 'agenda-posgrado',
    title: 'Próximamente',
    category: 'Agenda de posgrado',
    description: 'Nuevos encuentros para seguir aprendiendo.',
    date: null,
  },
  {
    id: 'charlas-posgrado',
    title: 'Próximamente',
    category: 'Charlas y conferencias',
    description: 'Un espacio para conectar ideas y experiencias.',
    date: null,
  },
  {
    id: 'comunidad-posgrado',
    title: 'Próximamente',
    category: 'Comunidad académica',
    description: 'Pronto compartiremos nuestra programación.',
    date: null,
  },
];
