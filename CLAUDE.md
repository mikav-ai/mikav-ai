# Mikav AI — Claude Context

Read @AGENTS.md for full project context.

## Quick Reference

- **Project:** mikav-ai (https://github.com/mikav-ai/mikav-ai)
- **Stack:** Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui (base-ui), Lucide React
- **Theme:** Light only, primary #4ca626
- **Font:** Google Sans
- **Domain:** mikav.in

## Key Rules

- shadcn here uses base-ui (not Radix) — APIs differ
- No dark mode support
- No `type` or `collapsible` props on Accordion (base-ui doesn't use them)
- Always run `npm run build` to verify changes
- Use barrel exports (`index.ts`) for component folders
