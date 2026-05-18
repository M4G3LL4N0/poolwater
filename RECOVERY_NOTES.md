# Recovery Notes: Poolwater

- Startup name: Poolwater
- Folder: /Users/joshuadavis/startups/poolwater
- One-line description: First run the development server: bash npm run dev # or yarn dev # or pnpm dev # or bun dev Open http://localhost:3000 http://localhost:3000 with your browser to see the result.
- Target user: Founders, operators, and investors evaluating or launching new ventures.
- Problem: Promising ideas and early ventures lose momentum when positioning, product readiness, and execution priorities are unclear.
- Solution: An AI-assisted workflow that packages expertise, context, and decisions into a more usable product experience.
- MVP goal: Make the core poolwater experience clear, navigable, buildable with pnpm, and ready for manual Vercel deployment.
- Main pages/routes: /, /about, /admin, /contact, /energy, /events, /faq, /gallery, /investors, /join, /venues
- Current state: Blocked by validation errors.
- Useful work preserved: Existing source, route structure, public assets, docs, package metadata, pnpm lockfile, and env examples were preserved.
- Broken/drifted areas: pnpm build failed:   [90m46 |[0m                 </[33mLink[0m>   [90m47 |[0m               ))} Next.js build worker exited with code: 1 and signal: null
- Improvements made: Cleaned generated local artifacts after validation (384M -> 3.9M).
- Build/deploy status: Not ready; see blocked areas.
- Large files flagged: None over 25 MB after excluding generated/cache directories.
- Return-later commands:
  - pnpm install
  - pnpm lint (no lint script present)
  - pnpm typecheck (no typecheck script present)
  - pnpm build
  - vercel --prod
## Focused Blocker Recovery - 2026-05-05

- Project vision recovered: Pool Water is currently implemented as a premium late-night pool/social venue concept, with events, gallery, join, and investor pages. This differs from the broader pool-maintenance possibility, so repo source was treated as truth.
- Root cause of previous build failure: typed route casts, missing Supabase helper export, and event records that did not satisfy the local `EventRecord` interface.
- Files changed in this pass: `components/site-shell.tsx`, `lib/events.ts`, `lib/poolwater-content.ts`, `lib/supabase.ts`, and `lib/types.ts`.
- Build status: `pnpm build` passes as of 2026-05-05.
- Lint/typecheck status: no scripts are defined, so both were skipped.
- Deploy readiness: ready for manual Vercel deployment after reinstalling dependencies.
- Cleanup performed: removed `node_modules`, `.next`, logs, generated caches, and stale non-pnpm lockfiles. No >25 MB source/media files remain.
- Remaining risks: clarify whether Pool Water should remain a venue/events concept or pivot to pool-water diagnostics/service intelligence.
- Manual deploy command:

```bash
cd /Users/joshuadavis/startups/poolwater
pnpm install
pnpm build
vercel --prod
```
