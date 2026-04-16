# Eclipse Media Photography — Website

Melbourne wedding photography website for [eclipsemedia.au](https://eclipsemedia.au) — built with **Astro 5 + Tailwind v4**, optimised for SEO and performance, deployed on Cloudflare Pages.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 5 (static) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Content | MDX via Astro Content Collections |
| Images | `astro:assets` + `sharp` (build-time AVIF/WebP) |
| Hosting | Cloudflare Pages (unlimited bandwidth, AU edge) |
| Forms | Web3Forms (email-to-inbox, honeypot spam guard) |
| SEO | `@astrojs/sitemap`, JSON-LD, OG tags |

Full strategic plan: `~/.claude/plans/shimmying-forging-rain.md`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output to ./dist
npm run preview    # preview the production build
```

## Project structure

```
src/
├── assets/                  # Photography — optimised at build-time by sharp
│   ├── home/                # Home-page hero + featured tiles
│   └── weddings/            # Per-wedding folders (cover + curated gallery)
├── components/              # SEO, Header, Footer, StickyCTA, ProofStrip, WeddingCard, Testimonial
├── config/site.ts           # Single source of truth for business metadata
├── content/
│   └── weddings/            # Wedding stories as MDX (frontmatter enforced by zod)
├── layouts/BaseLayout.astro # SEO + header/footer + sticky CTA
├── pages/
│   ├── index.astro          # Home
│   ├── weddings/            # Portfolio index + individual stories
│   ├── pricing.astro        # Pricing (4 photo tiers + video add-ons + FAQ)
│   ├── contact.astro        # Web3Forms enquiry form
│   ├── thank-you.astro
│   └── 404.astro
└── styles/global.css        # Design tokens + Tailwind v4 import
```

## Configuration

Before going live, update `src/config/site.ts`:

- `web3formsAccessKey` — get one at [web3forms.com](https://web3forms.com) (free tier, 250/mo).
  The form at `/contact` posts to Web3Forms, which emails submissions directly.
- `email`, `instagram`, `phone`, `googleBusinessUrl` — real business details.

## Adding a new wedding

1. Drop curated photos (≤ 2400px long edge) into `src/assets/weddings/<couple-slug>/`.
2. Create `src/content/weddings/<couple-slug>.mdx`:

   ```yaml
   ---
   coupleNames: "Sarah & Tom"
   weddingDate: 2026-03-21
   venue: "Stones of the Yarra Valley"
   location: "Yarra Valley, VIC"
   summary: "…"
   featured: true
   heroImage: "../../assets/weddings/sarah-tom/cover.jpg"
   heroAlt: "…"
   gallery:
     - src: "../../assets/weddings/sarah-tom/01.jpg"
       alt: "…"
   ---

   ## How they met
   …
   ```

3. The new story auto-appears on `/weddings` and (if `featured: true`) on the homepage.

## What's live so far

- Home
- Portfolio (`/weddings`) + per-wedding story pages (`/weddings/[slug]`)
- Pricing (`/pricing`)
- Contact (`/contact`) + Thank-you (`/thank-you`)
- 404

### Roadmap (per plan §0 — MVP Launch Scope)

- About (full page)
- 3 venue landing pages (`/venues/[slug]`)
- 1–2 location pages (`/melbourne-wedding-photographer`, etc.)
- FAQ page
- Lead-magnet PDF + capture
- Journal / blog (MDX collection)

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard → Pages → Create → connect the GitHub repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Once built, add the custom domain `eclipsemedia.au` in Pages → Custom Domains.

DNS and SSL are auto-handled when the domain is proxied through Cloudflare.

## Image sources

Placeholder photos copied (and resized to 2400px long edge) from
`/Volumes/4TB/Photography/Exports` via `scripts/copy-placeholder-images.sh`.
Re-run only when refreshing the curated set.

---

© Yas — Eclipse Media Photography
