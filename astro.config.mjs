import { defineConfig } from 'astro/config';

// Toda ruta se genera como HTML: no se necesita un servidor Node al publicar.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
