# Old WordPress Site — Reference Content

Content extracted from the pre-rebuild `eclipsemedia.au` WordPress site
before it was decommissioned. Stored here as source material for building
out the new Astro equivalents (About, FAQ, Privacy, Terms).

**Not published.** Files in this folder are reference only — they are not
imported into the Astro build.

## Context

The WordPress site had been compromised: ~13,000 casino-affiliate spam URLs
were injected as posts. Google Search Console showed no manual actions and
no security issues at the time of decommission, so the spam was either too
fresh to be flagged or was cloaked (served to bots only).

The 12 legitimate URLs were:

```
/about/
/blog/
/contact/
/faq/
/portfolio/
/portfolio/jenny-ron/
/portfolio/lydia-lucas/
/portfolio/maria-joel/
/portfolio/tylortroy/
/investment/
/privacy-policy/       (created just before decommission — minimal SEO history)
/terms-conditions/     (created just before decommission — minimal SEO history)
```

Spam URLs are left to 404 on the new site; Google drops them over time.
Only the legitimate URLs are 301-redirected (see `public/_redirects`).

## Files

- `about.md` — original About page copy (Yas's voice, keep for full About build)
- `faq.md` — 12 wedding FAQs (reuse when splitting FAQ into its own page)
- `privacy-policy.md` — boilerplate privacy policy (starting point, needs domain cleanup)
- `terms-conditions.md` — boilerplate terms (starting point, needs photography-specific rewrite)
