# boris-yamp

Personal portfolio of Boris Yampolsky — full-stack engineer with a quantum-computing background.

Live: https://boris-yamp.vercel.app (pending deploy)

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- next-intl (EN + HE with RTL)
- CSS Modules
- Vercel (deploy target)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/[locale]/` — pages, per-locale layouts and dynamic OG image.
- `components/` — section and layout components (CSS Modules).
- `content/` — site config and project metadata.
- `i18n/` — next-intl routing and request configs.
- `messages/` — `en.json`, `he.json`.
- `public/cv/` — downloadable CV PDF.
- `public/images/` — photo used in OG image.
- `styles/` — global CSS, design tokens, reset.
