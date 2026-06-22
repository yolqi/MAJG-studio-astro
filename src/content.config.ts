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

const realisations = defineCollection({
  loader: glob({ pattern: 'realisations.yaml', base: './src/content/pages' }),
  schema: ({ image }) => z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    intro: z.object({
      eyebrow: z.string(),
      titleLine1: z.string(),
      titleEmphasis: z.string(),
      lead: z.string(),
    }),
    gite: z.object({
      tag: z.string(),
      rooms: z.array(z.object({
        key: z.string(),
        label: z.string(),
        titleLine1: z.string(),
        titleLine2: z.string(),
        description: z.string(),
        button: z.string(),
        photo: image(),
      })),
      info: z.object({
        tag: z.string(),
        title: z.string(),
        place: z.string(),
        more: z.string(),
        bullets: z.array(z.string()),
        stats: z.array(z.object({ value: z.string(), label: z.string() })),
      }),
    }),
    institut: z.object({
      tag: z.string(),
      titleLine1: z.string(),
      titleLine2: z.string(),
      soins: z.array(z.object({
        label: z.string(),
        price: z.string(),
        duree: z.string(),
        photo: image(),
      })),
      button: z.string(),
      info: z.object({
        tag: z.string(),
        title: z.string(),
        place: z.string(),
        more: z.string(),
        bullets: z.array(z.string()),
        stats: z.array(z.object({ value: z.string(), label: z.string() })),
      }),
    }),
    artisan: z.object({
      titleLine1: z.string(),
      titleLine2: z.string(),
      photo: image(),
      checkboxes: z.array(z.object({
        label: z.string(),
        min: z.number(),
        max: z.number(),
        checked: z.boolean(),
      })),
      info: z.object({
        tag: z.string(),
        title: z.string(),
        place: z.string(),
        more: z.string(),
        bullets: z.array(z.string()),
        stats: z.array(z.object({ value: z.string(), label: z.string() })),
      }),
    }),
    socialFeed: z.object({
      cells: z.array(z.object({
        type: z.string(),
        sujet: z.string(),
        photo: image(),
      })),
      info: z.object({
        tag: z.string(),
        title: z.string(),
        place: z.string(),
        more: z.string(),
        bullets: z.array(z.string()),
        stats: z.array(z.object({ value: z.string(), label: z.string() })),
      }),
    }),
    finalCta: z.object({
      eyebrow: z.string(),
      title: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
  }),
});

export const collections = { home, realisations };
