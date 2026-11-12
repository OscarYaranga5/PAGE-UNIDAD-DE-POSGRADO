import { readFile } from 'node:fs/promises';
import type { APIRoute } from 'astro';

// Encuadra el escudo original, sin deformarlo. La imagen va embebida porque
// los navegadores no cargan imágenes externas dentro de un favicon SVG.
export const GET: APIRoute = async () => {
  const logo = await readFile(
    'public/images/emblema-fi-upg-azul-marino.png',
  );
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="65 0 724 724"><image width="2172" height="724" href="data:image/png;base64,${logo.toString('base64')}" /></svg>`;
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};
