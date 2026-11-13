import type { APIRoute } from 'astro';

const pages = [
  '/', '/lenguaje', '/arquitectura', '/docs', '/ejemplos', '/estado', '/novedades',
  '/buscar', '/playground', '/aprender', '/ecosistema', '/roadmap', '/comunidad',
  '/acerca', '/descargar', '/cli', '/biblioteca', '/licencia', '/nosotros', '/contacto', '/contribuir', '/glosario',
  '/docs/introduccion', '/docs/instalacion', '/docs/primer-programa', '/docs/guia-de-inicio',
  '/docs/sintaxis-basica', '/docs/variables-y-tipos', '/docs/operadores-y-control', '/docs/funciones',
  '/docs/colecciones-y-modulos', '/docs/manejo-de-errores', '/docs/cli-y-herramientas',
  '/docs/biblioteca-estandar', '/docs/proyectos-y-paquetes', '/docs/interoperabilidad-ffi',
  '/docs/ejecucion-y-motores', '/docs/referencia-lenguaje', '/docs/palabras-clave', '/docs/faq',
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') || 'https://alexandevs2309.github.io';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${base}${p === '/' ? '/' : p + '/'}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
