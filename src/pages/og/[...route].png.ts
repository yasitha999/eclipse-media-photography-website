import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '@/lib/og-image';

/** Map of static routes to their OG image config */
const staticPages: Record<string, { title: string; subtitle?: string }> = {
  index: {
    title: 'Melbourne Wedding Photography',
    subtitle: 'Timeless moments, artfully captured',
  },
  weddings: {
    title: 'Wedding Stories',
    subtitle: 'Real couples, real love, real moments',
  },
  pricing: {
    title: 'Investment & Pricing',
    subtitle: 'Melbourne wedding photography packages',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Let\u2019s start planning your day',
  },
  about: {
    title: 'About Eclipse Media',
    subtitle: 'Melbourne wedding photographer',
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know',
  },
  privacy: {
    title: 'Privacy Policy',
  },
  terms: {
    title: 'Terms & Conditions',
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.entries(staticPages).map(([route, config]) => ({
    params: { route },
    props: config,
  }));

  // Add wedding story pages
  const weddings = await getCollection('weddings', ({ data }) => !data.draft);
  for (const wedding of weddings) {
    paths.push({
      params: { route: `weddings/${wedding.id}` },
      props: {
        title: wedding.data.coupleNames,
        subtitle: `${wedding.data.venue} · ${wedding.data.location}`,
      },
    });
  }

  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle } = props as { title: string; subtitle?: string };
  const png = await generateOgImage({ title, subtitle });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
