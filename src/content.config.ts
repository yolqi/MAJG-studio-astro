import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
  loader: glob({ pattern: 'home.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      titleEmphasis: z.string(),
      lead: z.string(),
      ctaPrimaryLabel: z.string(),
      ctaPrimaryHref: z.string(),
      ctaGhostLabel: z.string(),
      ctaGhostHref: z.string(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })),
    }),
    painPoint: z.object({
      eyebrow: z.string(),
      title: z.string(),
      paragraph1: z.string(),
      paragraph2: z.string(),
      discoverLinkLabel: z.string(),
      discoverLinkHref: z.string(),
      statValue: z.string(),
      statLabel: z.string(),
    }),
    services: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      items: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
        href: z.string(),
      })),
    }),
    process: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      steps: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
      })),
    }),
    pricingTeaser: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
    finalCta: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
  }),
});

export const collections = { home };
