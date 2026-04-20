import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections for Eclipse Media.
 * Every collection uses the new `glob` loader (Astro 5+).
 */

const weddings = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/weddings' }),
  schema: ({ image }) =>
    z.object({
      // Core
      coupleNames: z.string(),               // e.g. "Stacie & Callum"
      weddingDate: z.date(),
      venue: z.string(),                     // display name
      venueSlug: z.string().optional(),      // links to /venues/[slug] later
      location: z.string(),                  // e.g. "Yarra Valley, VIC"

      // Media
      heroImage: image(),
      heroImagePortrait: image().optional(),
      heroAlt: z.string(),
      gallery: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          orientation: z.enum(['portrait', 'landscape', 'square']).default('landscape'),
        })
      ),

      // Optional YouTube video embed (shown above gallery when present)
      videoUrl: z.string().url().optional(),

      // Meta
      summary: z.string(),                   // 1-2 sentences, used in cards + OG
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),

      // Vendors (optional, populated when known)
      vendors: z
        .array(
          z.object({
            role: z.string(),                // Florist, Celebrant, Planner, Dress, etc.
            name: z.string(),
            url: z.string().url().optional(),
          })
        )
        .default([]),

      // A quote from the couple (doubles as testimonial)
      testimonial: z
        .object({
          quote: z.string(),
          attribution: z.string(),
        })
        .optional(),
    }),
});

export const collections = { weddings };
