# PAGE UNIDAD DE POSGRADO

Sitio estático con Astro, TypeScript y CSS nativo. Identidad azul y fuentes locales Manrope y DM Sans. No requiere backend ni base de datos.

## Desarrollo local

Requiere Node.js 22.23.4 o superior, según la versión de Astro instalada.

```powershell
npm.cmd ci
npm.cmd run dev
```

Abrir la dirección indicada por Astro en la terminal. En Windows se utiliza `npm.cmd` para evitar restricciones de ejecución de scripts de PowerShell.

```powershell
npm.cmd run check
npm.cmd run build
```

La compilación genera los archivos estáticos en `dist/`.

## Tarjetas de navegación

El inicio muestra el bloque «¿Por qué estudiar en Posgrado UNDC?» después del catálogo de programas.

- `src/data/discover.ts`: títulos, fotografías, encuadres y destinos de las cinco tarjetas.
- `src/components/DiscoverCards.astro`: estructura accesible y estilos responsive del bloque.
- `src/pages/index.astro`: ubicación del componente en la portada.
- `src/pages/investigacion.astro` y `src/pages/comunidad.astro`: nuevas páginas de destino.

Cada tarjeta utiliza un único enlace nativo que cubre su superficie completa. El botón visual es un `span` para evitar controles interactivos anidados. Funciona con teclado y sin JavaScript. Al cambiar un destino, crear primero su página en `src/pages/`.

## Contenido e identidad

El bloque de testimonios sustituye las preguntas frecuentes del inicio. Su diseño está en `TestimonialsSection.astro` y el contenido en `src/data/testimonials.ts`. Los registros `pending` muestran reservas sin citas ni identidades inventadas. Para publicar, usar `status: 'published'` y completar `quote`, `name` y `role` con autorización del profesional; `image` es opcional. Las preguntas frecuentes continúan en la página de Admisión.

El carrusel de próximos eventos aparece inmediatamente después del hero, en lugar de la antigua franja azul. `src/components/EventsSection.astro` implementa el desplazamiento horizontal con flechas, teclado, gestos táctiles y ajuste a cada tarjeta. Respeta la preferencia de movimiento reducido y no avanza automáticamente. Sin JavaScript conserva el desplazamiento nativo.

`src/data/events.ts` contiene tres reservas «Próximamente», sin fechas inventadas ni enlaces de inscripción. Para incorporar un evento confirmado, actualizar su título, descripción y fecha ISO `YYYY-MM-DD`; añadir `href` únicamente cuando exista una página real de destino.

La sección de Noticias reemplaza el bloque de pasos de admisión en la portada. `src/data/news.ts` centraliza publicaciones, imágenes y fechas. `NewsSection.astro` presenta las tres primeras; `NewsCards.astro` comparte las tarjetas con `/noticias/`. Las páginas `/noticias/[slug]/` se generan automáticamente.

Las tres publicaciones iniciales son contenido de muestra, identificado en tarjetas y artículos. Para publicar noticias reales, sustituir textos e imágenes, completar `publishedAt` en formato `YYYY-MM-DD` y cambiar `isDemo` a `false` después de su aprobación. Los pasos para postular siguen disponibles en `/admision/`.

- `src/data/programs.ts`: información compartida por tarjetas y fichas académicas.
- `src/data/site.ts`: datos institucionales, navegación y preguntas frecuentes.
- `src/styles/global.css`: colores, fuentes y estilos generales; el bloque de navegación tiene estilos encapsulados en su componente.

El logo FI–UPG proporcionado por el usuario se conserva en `public/images/logo-fi-upg.png`. `Brand.astro` lo reutiliza en cabecera y pie, con variantes WebP optimizadas por Astro y su transparencia original. El icono de pestaña utiliza el mismo logo. Las fotografías son referenciales. El contenido académico incluye enlaces a sus fuentes institucionales. La página de contacto prepara un correo local; no almacena ni envía datos automáticamente.

El sitio conserva `noindex` y `robots.txt` restrictivo durante la revisión. Antes de publicar, validar identidad y contenidos, configurar el dominio y revisar esas directivas.
