# Eclipse Media SEO & Launch Checklist

> Single source of truth for everything beyond the initial site build.
> Tick items as complete; reorder as priorities shift.
> Companion to the strategic plan at `~/.claude/plans/shimmying-forging-rain.md`.

> **What this checklist will NOT do**: magically make the site rank #1. It organises the *actually-ranking work*: GBP dominance, review velocity, local citations, venue pages, story-based weddings, 1–3 hr enquiry reply SLA. The site build is ~20–30% of the outcome — the rest is the loop in §5 executed relentlessly for 12–24 months.

## Status key

- `- [ ]` pending
- `- [x]` done
- 🔥 high impact / do first
- 🧑 Yas (offline work)
- 💻 Claude (code work)
- 🔁 recurring (weekly/monthly)

---

## §0 · Pre-launch (before flipping DNS)

- [x] 💻 Web3Forms key wired (done: `cdc9bab`)
- [x] 💻 Real email / phone / Instagram / GBP in `src/config/site.ts`
- [x] 💻 Fetch-based form submit → stays on-site (done: `9423f36`)
- [x] 💻 `public/_redirects` with `/investment → /pricing` 301
- [x] 🧑 Cloudflare Pages connected to GitHub (auto-build on push)
- [x] 🧑 Custom domain `eclipsemedia.au` attached to Pages project
- [x] 🧑 Before DNS flip: full WordPress backup (export + DB) stored offsite
- [x] 🧑 GSC audit: Manual Actions clean ✅, Security Issues clean ✅ — no penalty to claw back
- [x] 💻 Old WP page content extracted → `res/old-site-reference/` (About, FAQ, Privacy, Terms reference copy)
- [x] 💻 Legit old-URL 301s in `public/_redirects` (12 URLs mapped to their new homes)
- [x] 🧑 Old WP site on Cloudways — decommissioned
- [x] 🧑 Cloudways account deactivated (stop the bill)
- [x] 💻 Live smoke test: every page 200, 301 redirects land on correct targets, casino-spam URLs 404 as intended
- [x] 💻 Fix trailing-slash mismatch: Astro now emits canonical `/weddings/` to match Cloudflare Pages' server-side canonical form (resolved a `/contact/` redirect loop that was live)
- [ ] 🧑 End-to-end form submission test on live domain (submit a test enquiry, confirm it lands in inbox + `/thank-you/` displays)
- [ ] 🧑 Verify each 301 on live domain after next deploy (browser or curl: `/investment/`, `/portfolio/`, `/faq/`, etc.)
- [ ] 🧑 Lighthouse audit on live domain (target: Perf ≥ 95, SEO 100, A11y ≥ 95)

> **Note on the old WP site**: it had been compromised and injected with
> ~13,000 casino-affiliate spam URLs. We intentionally let those spam URLs
> 404 on the new site — Google drops them from the index over time. GSC
> was clean (no manual action), so there's no penalty to reverse, but
> expect a temporary dip in total impressions as the casino queries fall
> off. Real wedding-photography impressions should rebuild over 3–6 months.
- [ ] 💻 Implement 301s from old WP URLs in `public/_redirects`
- [ ] 🧑 End-to-end smoke test on `*.pages.dev` preview (every page, form submission lands, thank-you redirect works)
- [ ] 🧑 DNS cutover: nameservers → Cloudflare, custom domain attached
- [ ] 🧑 Lighthouse audit on live domain (target: Perf ≥ 95, SEO 100, A11y ≥ 95)

---

## §1 · Off-site (highest ROI — do before more code)

### Google Business Profile

- [ ] 🧑 🔥 Claim + verify GBP ([google.com/business](https://google.com/business))
- [ ] 🧑 🔥 Set primary category: Wedding Photographer; secondary: Photographer
- [ ] 🧑 🔥 Service area: Melbourne, Yarra Valley, Mornington Peninsula, Geelong, Bellarine
- [ ] 🧑 🔥 Upload 20+ best photos (initial batch)
- [ ] 🧑 Fill Services list (Wedding, Elopement, Engagement) with prices where allowed
- [ ] 🧑 Q&A section: seed 5–10 FAQs yourself
- [ ] 🧑 🔁 weekly: 1 GBP Post (behind-the-scenes, recent wedding, tip)
- [ ] 🧑 🔁 monthly: add 3–5 new photos to GBP gallery
- [ ] 🧑 Update GBP website field → `eclipsemedia.au` (post-launch)

### Review velocity (single biggest local-pack signal)

- [ ] 🧑 🔥 Generate a personal GBP review link (Google's short link)
- [ ] 🧑 🔥 Write an auto-send email template (fires 2–4 weeks post-delivery)
- [ ] 🧑 🔥 Backfill ask: email 10 past couples from the last 2 years
- [ ] 🧑 🔁 monthly target: 2–3 new reviews
- [ ] 🧑 🔁 reply to every review within 24 hrs
- [ ] 🧑 Add a Studio Ninja / Dubsado / Google Sheet CRM to track review status per couple

### Local citations (NAP consistency — Name / Address / Phone)

- [ ] 🧑 🔥 Agree a canonical NAP string (matches site footer verbatim)
- [ ] 🧑 Submit: Easy Weddings (paid tier worth it)
- [ ] 🧑 Submit: Hitched AU
- [ ] 🧑 Submit: WedShed
- [ ] 🧑 Submit: Polka Dot Bride vendor directory
- [ ] 🧑 Submit: Nouba vendor listing
- [ ] 🧑 Submit: Yellow Pages AU
- [ ] 🧑 Submit: TrueLocal
- [ ] 🧑 Submit: Hotfrog
- [ ] 🧑 Submit: StartLocal

---

## §2 · On-site content gaps (Claude-buildable, priority-ordered)

### Venue pages (highest-leverage on-site move — 3 at launch)

- [ ] 💻 Add `venues` content collection (zod schema + glob loader) to `src/content.config.ts`
- [ ] 💻 Create `src/pages/venues/index.astro` (venue directory)
- [ ] 💻 Create `src/pages/venues/[...slug].astro` (detail layout with `Place` schema)
- [ ] 💻 Write + publish `venues/stones-of-the-yarra-valley.mdx` (800–1500 words)
- [ ] 💻 Write + publish `venues/quat-quatta.mdx`
- [ ] 💻 Write + publish `venues/campbell-point-house.mdx`
- [ ] 💻 Auto-cross-link: each wedding page shows "See more at this venue" if matched
- [ ] 💻 Home page "Venues I love" strip (logos + links)
- [ ] 🧑 Pick the 3 venues + supply 6–10 real photos per venue

### Location pages (long-tail SEO engine)

- [ ] 💻 `/melbourne-wedding-photographer` (main keyword)
- [ ] 💻 `/yarra-valley-wedding-photographer` (regional, lower competition)
- [ ] 💻 Internal linking: each links to all in-region venues + weddings shot there
- [ ] 🧑 🔁 Later: `/mornington-peninsula-wedding-photographer`, `/geelong-wedding-photographer`, `/bellarine-peninsula-wedding-photographer` (one per month post-launch)
- [ ] 🧑 Write real location-page copy (not AI) — Claude can scaffold, Yas supplies voice

### Journal / blog (the content engine)

- [ ] 💻 Add `journal` content collection + `/journal` + `/journal/[slug]`
- [ ] 💻 Route integration with RSS (`@astrojs/rss`)
- [ ] 💻 `BlogPosting` JSON-LD on each post
- [ ] 🧑 🔁 **1–2 posts per month** — story-based real weddings OR venue guides (see strategic plan §5 for post-type priority)
- [ ] 🧑 Write launch post #1: real-wedding narrative, 15–25 photos, vendor list, quote
- [ ] 🧑 Write launch post #2: venue guide (photographer-POV review of one of the 3 venue pages)

### About page (real, not placeholder)

- [ ] 🧑 Supply bio (400–600 words): background, approach, why weddings, training, beliefs
- [ ] 🧑 Supply pro headshot + 3–4 "on the job" photos
- [ ] 💻 Build full About layout (hero image, prose, pull-quotes, CTA)
- [ ] 💻 Land "Melbourne wedding photographer" in H2 naturally

### Standalone FAQ page

- [ ] 💻 Move FAQ out of `/pricing` into `/faq` with richer answers (reference copy: `res/old-site-reference/faq.md` — 12 questions from the old site)
- [ ] 💻 `FAQPage` JSON-LD remains; add more questions (delivery, backup, deposit, cancellation, unplugged ceremony, etc.)
- [ ] 💻 Link from header, footer + from Pricing CTA row

### Privacy + Terms pages (legal — required because `/contact` collects PII)

- [x] 💻 Build `/privacy` page — Australian Privacy Principles framing, lists actual processors (Web3Forms, Cloudflare), plain-language
- [x] 💻 Build `/terms` page — photography-specific site Terms of Use (not a wedding-booking contract; that remains a separate signed document)
- [x] 💻 Update `public/_redirects` — `/privacy-policy/` → `/privacy/`, `/terms-conditions/` → `/terms/` (direct, no longer home-page fallback)
- [x] 💻 Link both from the footer bottom strip
- [ ] 🧑 (Optional but wise) Legal review of both pages before relying on them — first draft is Claude-authored and fit for purpose, but a 30-min review by an Australian solicitor specialising in creative-services contracts would harden them

### Lead magnet (email capture for couples not ready to enquire)

- [ ] 🧑 Write "Wedding Pricing & Planning Guide" PDF content
- [ ] 🧑 Design PDF (use package sheet as visual foundation)
- [ ] 💻 Add download gate (Web3Forms email-only capture → auto-send the PDF link)
- [ ] 💻 Add a lead-magnet hero section to `/pricing` and footer

---

## §3 · Technical SEO polish

### Analytics & Search Console (do on launch day)

- [ ] 🧑 Google Search Console: verify site, submit `sitemap-index.xml`
- [ ] 🧑 Bing Webmaster Tools: verify + submit sitemap (5-min task)
- [ ] 💻 GA4: install via `partytown` or lightweight inline
- [ ] 💻 GA4 events: `form_submit`, `email_click`, `phone_click` (spec in strategic plan §7)
- [ ] 💻 Cloudflare Web Analytics snippet

### Schema / structured data

- [x] 💻 LocalBusiness site-wide (`SEO.astro`)
- [x] 💻 BlogPosting on wedding story pages
- [x] 💻 FAQPage on pricing
- [x] 💻 BreadcrumbList on key pages
- [ ] 💻 `Place` + geo on venue pages (once built)
- [ ] 💻 `ImageObject` on gallery images (image search SEO)
- [ ] 💻 Review aggregate (once 5+ GBP reviews) — pull via API or manual snapshot
- [ ] 💻 Optional: split `site.owner` (display "Yas") vs `ownerFullName` (schema "Yasitha Waduge") so knowledge graph ties to the legal name

### Social / OG

- [ ] 💻 Dynamic OG images via Satori (one per page type: home, wedding, venue, location)
- [ ] 💻 Per-wedding OG picks hero image automatically
- [ ] 💻 Twitter meta tags (already present; verify final URLs)

### Image SEO

- [x] 💻 Descriptive filenames already used for curated weddings
- [x] 💻 Alt text enforced in zod schema
- [ ] 💻 Audit: ensure every non-decorative `<Image>` has alt prop filled (grep pass)
- [ ] 💻 Blur-up LQIP placeholders on gallery (nice-to-have, may not need)

### Redirects / crawl

- [x] 💻 `robots.txt` in place
- [x] 💻 Sitemap auto-generated
- [ ] 💻 Audit old WP GSC top URLs → add 301s in `public/_redirects`
- [ ] 🧑 Resubmit sitemap in GSC after every major content push

### Core Web Vitals

- [ ] 🧑 Live Lighthouse on eclipsemedia.au (mobile + desktop) after DNS cutover
- [ ] 💻 Fix any regressions found (hero image size, CLS, font-display swap)

---

## §4 · Authority building (slow, ongoing, highest ceiling)

- [ ] 🧑 🔁 Post-wedding backlink ask (venue + florist + planner) — include in delivery email template
- [ ] 🧑 Publication submissions — build a submissions queue
  - [ ] 🧑 Hello May
  - [ ] 🧑 Polka Dot Bride
  - [ ] 🧑 Together Journal
  - [ ] 🧑 Nouba
  - [ ] 🧑 Vogue Living (aspirational)
- [ ] 🧑 🔁 1 vendor-collab journal post per quarter (florist / planner feature → backlink exchange)
- [ ] 🧑 Guest post on a high-authority wedding planning blog (1 / year)

---

## §5 · Monthly recurring cadence (the loop that actually ranks)

Per the strategic plan's honest expectation setting — *"The strategy works only if you don't get stuck perfecting the system."* Lock in this monthly rhythm:

- [ ] 🔁 1–2 story-based wedding posts
- [ ] 🔁 1 venue guide OR 1 new venue page
- [ ] 🔁 2–3 GBP reviews secured
- [ ] 🔁 4 weekly GBP Posts
- [ ] 🔁 GBP photos refreshed (3–5 new)
- [ ] 🔁 Reply to every enquiry within 1–3 hrs (weekday) — per strategic plan §9.5
- [ ] 🔁 Review GSC once: top queries, impressions trend, indexing issues
- [ ] 🔁 1 backlink earned (venue / vendor / publication)

---

## §6 · Measurement & review

### Check-in cadence

- [ ] 🧑 🔁 **Weekly** (15 min): GBP activity (reviews, calls, direction requests)
- [ ] 🧑 🔁 **Monthly** (1 hr): GSC top queries, GA4 conversions, enquiry volume month-over-month
- [ ] 🧑 🔁 **Quarterly** (2 hrs): Rank-tracking snapshot for target keywords

### Success checkpoints (from strategic plan §13)

- [ ] 30d: all pages indexed, CWV Good across the board
- [ ] 60d: 1 venue page ranking top-20 for `[venue] wedding photographer`
- [ ] 90d: enquiry volume ≥ WordPress baseline
- [ ] 6mo: local-pack appearance for "wedding photographer near me" within Melbourne
- [ ] 12mo: top 10 for "Melbourne wedding photographer"
- [ ] 24mo: top 3 for "Melbourne wedding photographer" achievable with sustained cadence

---

© Yas — Eclipse Media Photography
