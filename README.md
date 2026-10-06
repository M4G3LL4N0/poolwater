# POOL WATER

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/hero-reduced.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/hero-light.svg">
    <img src="assets/hero/hero-motion.svg" alt="PoolWater — animated project plate showing request &rarr; authenticate &rarr; authorise &rarr; record &rarr; reject. Motion depicts this project's real state transition." width="100%">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/computational-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/computational-light.svg">
    <img src="assets/hero/computational-motion.svg" alt="State machine: request &rarr; authenticate &rarr; authorise &rarr; record &rarr; reject." width="100%">
  </picture>
</p>

POOL WATER is a late-night adult social gaming and nightlife brand.

It is built as an activity-driven alternative to passive nightlife: pool tables, arcade glow, foosball, air hockey, real late-night food, music energy, competition, and natural social interaction.

## Product

The public site is for guests. It should feel fun, premium, social, game-driven, nightlife-native, and not corporate.

Core public pages:

- `/` - homepage
- `/about` - story and purpose
- `/energy` - The Current, principles of the room
- `/events` - event formats and upcoming drops
- `/gallery` - premium mood tiles
- `/join` - first-access waitlist
- `/investors` - investor narrative only
- `/faq`, `/contact`, `/venues` - stable optional MVP pages

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Supabase optional for MVP forms
- pnpm
- Vercel-ready

## Local Setup

```bash
cd /Users/joshuadavis/startups/poolwater
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Environment

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=
```

Supabase is optional for the static MVP. API routes fail gracefully if environment variables are missing.

## Build

```bash
pnpm build
```

## Deploy

Do not deploy automatically during recovery work. When ready:

```bash
cd /Users/joshuadavis/startups/poolwater
pnpm install
pnpm build
vercel --prod
```

## Cleanup

After a successful build, generated artifacts can be removed safely:

```bash
rm -rf node_modules .next .turbo .vercel/cache dist build coverage playwright-report test-results .cache .parcel-cache
find . -name ".DS_Store" -type f -delete
find . -name "*.log" -type f -delete
```

Do not delete source, `pnpm-lock.yaml`, `.env.local`, `.env.example`, docs, or used public assets.
