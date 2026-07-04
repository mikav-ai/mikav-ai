<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mikav AI — Agent Context

## Project

- **Name:** Mikav (mikav-ai)
- **Repo:** https://github.com/mikav-ai/mikav-ai
- **Domain:** mikav.in
- **Description:** Open-source Malayalam AI copilot — know Kerala deep, build Kerala forward.

## Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS 4
- shadcn/ui (base-ui, not Radix)
- Lucide React icons
- Google Sans font

## Conventions

- Light theme only — no dark mode
- Primary color: #4ca626 (oklch(0.588 0.17 142.5))
- Components in `components/` grouped by feature (app, home, ui)
- Barrel exports via `index.ts` per folder
- Use shadcn/ui components from `@/components/ui`
- Use `@/` path alias for all imports
- No mock data unless explicitly asked

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```
