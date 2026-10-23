import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { sections, sectionKeys, eventCategories } from './site';

const lugares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lugares' }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        section: z.enum(sectionKeys),
        category: z.string(),
        summary: z.string(),
        image: image().optional(),
        address: z.string().optional(),
        phone: z.string().optional(),
        site: z.url().optional(),
        featured: z.boolean().default(false),
      })
      .refine((d) => d.category in sections[d.section].categories, {
        message: 'category não pertence à section',
        path: ['category'],
      }),
});

const experiencias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiencias' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      image: image().optional(),
      order: z.number().default(99),
    }),
});

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.enum(Object.keys(eventCategories) as [keyof typeof eventCategories]),
      venue: z.string(),
      summary: z.string(),
      image: image().optional(),
    }),
});

export const collections = { lugares, experiencias, eventos };
