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

const contact = defineCollection({
  loader: glob({ pattern: 'contact.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    intro: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
    }),
    infoItems: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
});

const pricingPlan = z.object({
  name: z.string(),
  badge: z.string().optional(),
  tag: z.string(),
  price: z.string(),
  priceSuffix: z.string(),
  billing: z.string(),
  features: z.array(z.string()),
  ctaLabel: z.string(),
  featured: z.boolean(),
});

const tarifs = defineCollection({
  loader: glob({ pattern: 'tarifs.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    intro: z.object({
      eyebrow: z.string(),
      title: z.string(),
      titleEmphasis: z.string(),
      lead: z.string(),
    }),
    web: z.object({
      plans: z.array(pricingPlan),
      note: z.string(),
    }),
    social: z.object({
      plans: z.array(pricingPlan),
      alacarteHeading: z.string(),
      alacarteItems: z.array(z.object({ label: z.string(), price: z.string() })),
      note: z.string(),
    }),
    faq: z.object({
      eyebrow: z.string(),
      title: z.string(),
      items: z.array(z.object({ question: z.string(), answer: z.string() })),
    }),
    finalCta: z.object({
      eyebrow: z.string(),
      title: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
  }),
});

const sitesWeb = defineCollection({
  loader: glob({ pattern: 'sites-web.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      titleEmphasis: z.string(),
      lead: z.string(),
      ctaPrimaryLabel: z.string(),
      ctaPrimaryHref: z.string(),
      ctaGhostLabel: z.string(),
      ctaGhostHref: z.string(),
    }),
    audience: z.object({
      eyebrow: z.string(),
      title: z.string(),
      titleEmphasis: z.string(),
      titleSuffix: z.string(),
      subtitle: z.string(),
      items: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
    }),
    why: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      items: z.array(z.object({ icon: z.string(), title: z.string(), description: z.string() })),
    }),
    process: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      steps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
    }),
    deepDive: z.object({
      eyebrow: z.string(),
      title: z.string(),
      paragraphs: z.array(z.string()),
    }),
    pricingTeaser: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
  }),
});

const reseauxSociaux = defineCollection({
  loader: glob({ pattern: 'reseaux-sociaux.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      titleEmphasis: z.string(),
      lead: z.string(),
      ctaPrimaryLabel: z.string(),
      ctaPrimaryHref: z.string(),
      ctaGhostLabel: z.string(),
      ctaGhostHref: z.string(),
    }),
    whatWeDo: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      items: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
    }),
    feedPreview: z.object({
      eyebrow: z.string(),
      title: z.string(),
      badge: z.string(),
      feedTitle: z.string(),
      bullets: z.array(z.string()),
    }),
    pitch: z.object({ text: z.string() }),
    pricingTeaser: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
  }),
});

const nousSommes = defineCollection({
  loader: glob({ pattern: 'nous-sommes.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      titleEmphasis: z.string(),
      lead: z.string(),
    }),
    constat: z.object({
      eyebrow: z.string(),
      title: z.string(),
      paragraphs: z.array(z.string()),
    }),
    founders: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      people: z.array(z.object({ name: z.string(), bio: z.string() })),
      revealText: z.string(),
    }),
    finalCta: z.object({
      eyebrow: z.string(),
      title: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
  }),
});

const mentionsLegales = defineCollection({
  loader: glob({ pattern: 'mentions-legales.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    intro: z.object({ eyebrow: z.string(), title: z.string() }),
    editeur: z.object({
      heading: z.string(),
      paragraph1: z.string(),
      addressLines: z.array(z.string()),
      paragraph3: z.string(),
    }),
    hebergeur: z.object({
      heading: z.string(),
      addressLines: z.array(z.string()),
    }),
    propriete: z.object({ heading: z.string(), paragraph: z.string() }),
    donneesPerso: z.object({
      heading: z.string(),
      text: z.string(),
      linkLabel: z.string(),
      linkHref: z.string(),
    }),
  }),
});

const politiqueConfidentialite = defineCollection({
  loader: glob({ pattern: 'politique-confidentialite.yaml', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    intro: z.object({ eyebrow: z.string(), title: z.string() }),
    sections: z.array(z.object({
      heading: z.string(),
      paragraphs: z.array(z.string()),
    })),
  }),
});

export const collections = {
  home,
  realisations,
  contact,
  tarifs,
  sitesWeb,
  reseauxSociaux,
  nousSommes,
  mentionsLegales,
  politiqueConfidentialite,
};
