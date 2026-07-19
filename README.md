# Syed Mohammad Mujahid — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), React 19,
TypeScript, and Tailwind CSS. Dark-by-default, glassmorphic design system, command
palette (⌘K), and every project written up as a full engineering case study.

## Tech stack

- **Framework:** Next.js 15 (App Router, Server Components by default)
- **UI:** React 19, Tailwind CSS, shadcn/ui-style primitives, Radix UI (Dialog, Tooltip, Separator, Slot)
- **Motion:** Framer Motion (scroll reveals, page transitions) + `next-themes` for dark/light
- **Icons:** lucide-react
- **Command palette:** `cmdk`
- **Type-safety:** strict TypeScript throughout

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

```bash
npm run build        # production build
npm run start         # run the production build locally
npm run lint           # ESLint
npm run type-check   # tsc --noEmit
```

> This project was generated in a sandboxed environment without registry
> access, so `npm install` has not been run or verified here. Run it locally
> before your first `npm run dev` — if any dependency version in
> `package.json` fails to resolve, loosen that one range and re-install.

## Deploying (Vercel)

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new) — zero configuration needed,
   the framework preset is auto-detected.
3. Set `NEXT_PUBLIC_SITE_URL` (see below) and, once you wire up email
   (see `app/api/contact/route.ts`), any provider API key as environment
   variables in the Vercel dashboard.
4. Deploy.

## Required before you go live

1. **Contact form email delivery.** `app/api/contact/route.ts` validates
   submissions and logs them server-side, but doesn't send an email yet — no
   provider is configured. The route has a ready-to-uncomment example for
   [Resend](https://resend.com); Formspree or Web3Forms are no-backend
   alternatives if you'd rather not touch the API route at all.
2. **`SITE_URL`.** Set in `lib/constants.ts` (`https://syedmujahid.dev` as a
   placeholder) — used for canonical URLs, the sitemap, and OpenGraph tags.
   Update it to your real domain before deploying.
3. **GitHub profile URL.** `profile.githubUrl` is `null` — the resume didn't
   list one. Add it in `data/profile.ts` once you have a public GitHub, and
   the footer/hero GitHub links and the "coming soon" states will activate
   automatically.
4. **Resume PDF privacy check.** `public/Syed_Mohammad_Mujahid_Resume.pdf` is
   your real resume converted straight from the uploaded `.docx` — which
   means its "Personal Details" section (parents' names, DOB) is intact in
   the downloadable file, even though that section is deliberately excluded
   from the website's own content. Worth a quick look before this goes
   public — and the DOB in the source doc reads "27-12-1005," almost
   certainly a typo for 2005.

Profile photo (`public/images/profile/portrait-*.jpg`) and the résumé PDF
are both now generated from your real uploaded files — nothing to redo there
unless you want different crops or a newer resume version.

## Content assumptions (please review)

Everything below is either a direct resume fact or an explicitly-flagged
inference — nothing is invented. Search each file for the word "confirm" or
"placeholder" to find every flagged spot.

- **Academic year/status**: computed as final-year B.Tech CSE (2023–2027
  batch) based on today's date, since your prior portfolio said "2nd year"
  but that's now stale.
- **Project dates**: the resume didn't give exact dates for the three
  projects, only durations (e.g. "40 days"). `year` fields in
  `data/projects.ts` are approximate placeholders — update once you have
  exact dates.
- **Certifications**: two of the three certifications had no listed issuer
  or date on the resume. Those fields are visible, honest placeholders
  ("Issuer not specified — confirm & update") rather than guesses — see
  `data/certifications.ts`.
- **Achievement years**: several achievements/extracurriculars had no year on
  the resume; marked "Year not specified" or "Ongoing" rather than guessed —
  see `data/achievements.ts`.
- **Skill levels**: no percentages. Three honest tiers instead — `core`
  (used across shipped projects), `working` (one project/coursework), and
  `exploring` (a stated interest, not yet backed by a project). This
  deliberately replaces the arbitrary percentage bars from the earlier
  portfolio version.
- **Personal details removed for privacy**: date of birth and parents'
  names, which appeared on the resume, are intentionally excluded from the
  public site — they're not relevant to recruiters and shouldn't be public.
- **Unverified claims dropped**: a few phrases from the earlier portfolio
  version (e.g. project-expo participation described as being "selected" for
  a "competitive national" event) overstated what the resume actually
  documents. Rewritten to match the resume exactly.
- **Two phone numbers** are included on the Contact page, pulled directly
  from the resume. If you'd rather keep phone numbers off a public page,
  remove them from `contactLinks` in `app/contact/page.tsx` and from
  `profile.phones` in `data/profile.ts`.

## Project structure

```
app/                  Routes (App Router) — one folder per page
  about/ projects/ skills/ certifications/ achievements/ contact/
  api/contact/         Contact form submission handler
  sitemap.ts robots.ts Auto-generated SEO files
  layout.tsx           Root layout: nav, footer, theme provider, JSON-LD
components/
  ui/                  Low-level primitives (Button, Card, Badge, Dialog…)
  layout/              Nav, footer, command palette, theme toggle, transitions
  home/                Homepage sections (hero, stats, featured projects…)
  projects/            Project card, hero, section wrapper, filter grid
  shared/              Cross-page pieces (SectionHeading, Reveal, glyphs…)
  contact/             Contact form (client component)
data/                  Typed content — the resume's single source of truth
types/                 Shared TypeScript interfaces for the data above
hooks/                 useTypingEffect, useScrollProgress, useCommandPalette…
lib/                   cn() helper, SEO metadata builder, constants, fonts
```

## Editing content

You should never need to touch component code to update copy — everything
user-facing lives in `data/*.ts`:

| File | Controls |
|---|---|
| `data/profile.ts` | Name, headline, bio, contact info, socials |
| `data/education.ts` | Degrees/schools |
| `data/projects.ts` | Project case studies (full detail pages) |
| `data/skills.ts` | Skill categories & levels |
| `data/certifications.ts` | Certification cards |
| `data/achievements.ts` | Achievements timeline |

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables Framer Motion/CSS animation via
  a global media query in `globals.css`).
- Skip-to-content link, visible focus rings, semantic landmarks throughout.
- Images use `next/image` for automatic optimization/responsive `sizes`.
- Metadata (title templates, OpenGraph, Twitter cards, JSON-LD `Person`
  schema, sitemap, robots.txt) is centralized in `lib/seo.ts` and
  `app/layout.tsx` — run Lighthouse after adding your real photo/resume to
  confirm scores before shipping.
