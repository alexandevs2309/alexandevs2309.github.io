import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ejemplos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ejemplos' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    nivel: z.enum(['basico', 'practico', 'avanzado']),
    estado: z.enum(['garantizado', 'experimental']),
    resultado: z.string(),
    archivo: z.string(),
    caracteristicas: z.array(z.string()).default([]),
    orden: z.number().default(0),
  }),
});

const novedades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/novedades' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.string().optional(),
    version: z.string().optional(),
    tipo: z.enum(['release', 'prototipo', 'perfil', 'nota']).default('nota'),
    estado: z.enum(['publicado', 'preparado']).default('publicado'),
    resumen: z.string(),
  }),
});

const glosario = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glosario' }),
  schema: z.object({
    termino: z.string(),
    resumen: z.string(),
    categoria: z.string().default('general'),
  }),
});

export const collections = { ejemplos, novedades, glosario };
