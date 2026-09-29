# iTrans — Dev Notes

## Design Direction
- Dark base (`#0a0a0f`) with animated gradient orbs (teal, emerald, cyan)
- Accent palette: teal (`#23765C` from logo) → bright cyan (`#02FDFB` from logo)
- Gradients: `from-teal-600 to-cyan-400`
- Card style: `bg-white/[0.03]` border `border-white/[0.06]`, teal glow on hover

## Sections (homepage, in order)
| Section | Content |
|---|---|
| Nav | Logo + Services, Pricing, Tools, About, FAQ + "Let's Talk" CTA (gradient) |
| Hero | Logo + "We Build for Startups" headline, View Services + Get in Touch CTAs |
| Work/What We Do | Grouped by `GROUPS`: **Starter Sites** (Portfolio, Landing) then **Business Builds** (Business Website, Firebase MVP, Full-Stack App) |
| Pricing/Transparent Pricing | Same two groups. 5 fixed-price tiers, USD + LKR, "Most Popular" on Firebase MVP |
| Stack/Our Stack | FE: React/Next.js + Tailwind (top), BE+DB: Spring Boot/Node.js + MongoDB/MySQL (left), Firebase (right, Auth DB & Backendless) with divider |
| Connect/Let's Talk | Big email button `contact.itrans@gmail.com`, no socials |
| About/How We Work | 3 value cards: No Fluff, Ownership, Straight Talk |
| FAQ | 9 questions in native `<details>` (crawlable without JS) |

## Routes
| Route | Type | Notes |
|---|---|---|
| `/` | Static | Scrollable one-pager. Canonical `SITE.url/` |
| `/services/` | Static | Services index, grouped. BreadcrumbList JSON-LD |
| `/services/[slug]` | SSG | 5 pages via `generateStaticParams`. Per-page metadata + Service JSON-LD |
| `/not-found` | Static | `noindex, nofollow` |

Service slugs, in display order:
`portfolio-websites` (starter) → `landing-pages` (starter) →
`business-sites` (business) → `firebase` (business) → `full-stack-web-apps` (business)

## Package Groups
`Service.group` is `"starter" | "business"`. The split is deliberate, not cosmetic:
- **Starter Sites** — cheap, fast, single-page builds that pull people in.
- **Business Builds** — the real revenue line. These pages must **not** reference
  the starter packages. A Firebase visitor should never see "$185 portfolio".

Enforcement points — if you add a cross-group link, check all three:
1. `components/work.tsx` and `components/pricing.tsx` iterate `GROUPS`
2. `[slug]/page.tsx` "Other services" filters `s.group === service.group`
3. `components/footer.tsx` takes an optional `group` prop; `[slug]/page.tsx`
   passes `service.group`. **Removing this prop reintroduces the leak.**

## Pricing Model
Prices in `PLANS` (`lib/constants.ts`), USD is the source of truth, LKR derived in
`lib/format.ts` at `SITE.currencyUsdToLkr` (325), rounded to nearest 500.

| Group | Tier | USD | ~LKR | Timeline |
|---|---|---|---|---|
| Starter | Portfolio Website | $185 | 60,000 | 2–5 days |
| Starter | Landing Page | $300 | 97,500 | 3–7 days |
| Business | Business Website | $600 | 195,000 | 1–2 weeks |
| Business | Firebase MVP | $1,100 | 357,500 | 3–6 weeks |
| Business | Full-Stack App | $2,150 | 699,000 | 6–12 weeks |

LKR figures are deliberately ~2.5% under the internal targets (100k/200k/350k/700k)
because USD was set to rounder marketing numbers. The user is aware and chose
clean USD. If they want LKR exact, change the USD value, not the rate.

Changing a price means updating `PLANS[].usd`, `SERVICES[].priceUsd` (they are
separate, deliberately — a plan is a *price point*, a service is a *page*), and
the price + timeline answers in `FAQS`. Grep for the old number before shipping.

## Copy Rules
- `TIMELINE_NOTE` — every duration is an estimate that moves with requirements.
  Rendered on the pricing section, `/services/`, and every service page. Timelines
  are prefixed "about" on detail pages. Do not present any timeline as a guarantee.
- `SCOPE_NOTE` — tells clients extra pages/sections/features are usually possible
  and are quoted separately, agreed *before* work starts. Deliberately soft so it
  does not read as a warning. It must appear in both pricing and the per-service
  "What's included" block.
- "minor" → "small" everywhere
- Email: `contact.itrans@gmail.com`
- No social links in Connect section
- Icons: `react-icons/si` for brand logos, `react-icons/fa6` for general icons.
  Service icon map lives in `lib/icons.ts` — add new icons there, not inline.

## Stack Tools
- Frontend: React / Next.js
- Styling: Tailwind CSS
- Backend: Spring Boot / Node.js
- Database: MongoDB / MySQL
- All-in-one: Firebase (Auth, DB & Backendless)

## SEO Architecture
- **Single source of truth for the origin:** `SITE.url` in `lib/constants.ts`. It is a
  hardcoded constant, **not** an env var. This is deliberate — an unset
  `NEXT_PUBLIC_SITE_URL` previously fell back to `https://i-trans.vercel.app`,
  a *different website*, poisoning canonical / og:url / robots.txt / sitemap.xml
  and preventing indexing. If the domain ever changes, change it in ONE place.
- `trailingSlash: true` in `next.config.ts` — must stay `true` because every
  canonical and every sitemap URL has a trailing slash. Setting it `false` makes
  each sitemap URL 308-redirect.
- `app/robots.ts` + `app/sitemap.ts` are generated from `SITE.url`.
- `app/manifest.ts` + `app/opengraph-image.tsx` (ImageResponse, 1200×630).
- Icons generated by `npm run icons` → `public/icon.svg`, `icon-32x32.png`,
  `apple-icon.png`, `icon-192.png`, `icon-512.png`. Uses the `sharp` dep.
  `public/iTrans.png` is the wide wordmark logo (600×346, 24 KB).
- JSON-LD lives in **three** places, scoped so markup always matches visible content:
  - `app/layout.tsx` → `Organization` + `WebSite` + `ProfessionalService`
    (with `hasOfferCatalog` → `Offer` per service). On every page.
  - `app/page.tsx` → `FAQPage`. **Homepage only**, because that is the only page
    rendering `<Faq />`. Emitting FAQPage elsewhere is spammy structured data.
  - `app/services/[slug]/page.tsx` → `Service` + `Offer` + `BreadcrumbList`.
    `app/services/page.tsx` → `BreadcrumbList`.
- GA4 is opt-in: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (see `.env.example`). The
  gtag snippet lives in `app/layout.tsx` so it fires on every route.
- Do not add `#fragment` URLs to the sitemap — Google ignores them.

## Key Decisions
- "minor" → "small" everywhere
- "freelancers" removed from about
- Email: `contact.itrans@gmail.com`
- Favicon: `/icon.svg` (+ PNG sizes). The old `iTrans.svg` was a 230 KB
  base64-wrapped raster and was deleted.
- Contact form + API route deleted (`lib/resend.ts` removed as orphaned)
- No social links in Connect section
- Outer container: `max-w-6xl`
- FE cards: `max-w-md`; BE+DB+Firebase: `max-w-4xl` on md+ (each BE card = FE card size, Firebase = 2x width)
- Icons: `react-icons/si` (Simple Icons) for brand logos, `react-icons/fa6` for general icons
- Nav "Connect" link removed (only "Let's Talk" CTA remains)
- Homepage stays a single scrollable page by choice; depth comes from
  `/services/*`, because distinct services need distinct URLs to rank
