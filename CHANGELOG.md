# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [0.4.0] - 2026-07-05

### Added

- Research pages with 5 draft papers (dataset corpus, model finetuning, benchmark, human-in-loop trust, system paper)
- Research list with search and grid layout (`/research`)
- Research slug pages with react-markdown rendering (`/research/[slug]`)
- Blog system with markdown content from `content/blog/`
- SparkX KSUM blog post — program selection announcement
- Company page with About (overview box), Team, Brand (font + colors), Contact (form)
- Contact form using shadcn input/textarea/label
- Forms library: waitlist, feedback, support, request demo, contact, newsletter
- Cookie consent banner with accept/decline and 10s auto-accept
- Responsive mobile nav with hamburger menu
- SEO: Open Graph, Twitter Card, canonical URLs on blog and research pages
- AEO: JSON-LD Article schema on blog posts, ScholarlyArticle on papers
- Dynamic sitemap with all blog posts, research papers, and static pages
- Programs section on home page (SparkX KSUM)
- Hidden scrollbar across all browsers

### Changed

- Primary color updated to #c8242b (red)
- Secondary color updated to #fdf2e3 (warm cream)
- Moved `components/home` to `components/pages/home`
- Header nav: added Research, Blogs, Company links (left-aligned next to logo)
- Logo in header and footer now links to home
- Features and CTA sections enhanced with subtitles and shadows
- About section in card box with overview paragraph
- Removed all visible `#` anchor text from section headings

---

## [0.3.0] - 2026-07-05

### Added

- SEO metadata: Open Graph, Twitter Card, keywords, authors, robots directives
- Dynamic `sitemap.ts` generating `/sitemap.xml`
- Dynamic `robots.ts` generating `/robots.txt` with sitemap reference
- JSON-LD structured data: Organization, WebSite, SoftwareApplication, FAQPage schemas
- Answer Engine Optimization (AEO):
  - `public/llms.txt` — structured context for LLMs
  - `public/llms-full.txt` — extended deep context for AI answer engines
  - `public/skill.md` — agent behavior instructions
- `components/shared/` folder with barrel export for shared components
- `metadataBase` set to `https://mikav.in`

### Changed

- Moved `json-ld.tsx` from `components/app/` to `components/shared/`
- Updated README project structure to reflect new files

---

## [0.2.0] - 2026-07-05

### Added

- App logo icon (icon-dark.png) in header and footer
- Favicon using custom PNG (`/icons/app/favicon.png`)
- Page title template: `Page Name | Mikav AI`
- Full responsive design across mobile, tablet, and desktop
- Hero heading in primary color (#4ca626)

### Changed

- Hero heading scales from 3xl (mobile) to 7xl (desktop), wraps naturally
- Hero buttons stack vertically on mobile, horizontal on sm+
- Features grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- CTA box padding adapts per breakpoint
- Footer stacks vertically on mobile, row on sm+
- Header simplified to logo only (removed nav links and auth buttons)
- All sections use consistent responsive padding (px-4 sm:px-6 lg:px-8)

### Removed

- Header nav links (Features, FAQs)
- Header Sign In and Get Started buttons
- Geist font imports (replaced with Google Sans via CDN)
- Old favicon.ico

---

## [0.1.0] - 2026-07-05

### Added

- Initial project setup with Next.js 16, TypeScript, Tailwind CSS 4
- shadcn/ui (base-ui) and Lucide React integration
- Google Sans font via CDN link
- Light-only theme with primary color #4ca626
- App layout shell: sticky header with nav, footer with links
- Landing page composed of Hero, Features, FAQs, and CTA sections
- Full-screen hero with heading "Know Kerala. Build Kerala.", description, tags (Malayalam AI, Open Source), and CTA buttons
- Features section with 6 illustrated cards:
  - Ask Anything About Kerala
  - Native Malayalam AI
  - Open Data, Free to All
  - Explore Culture Map
  - Ideas to Startup Bridge
  - Open Source, Built Together
- FAQs section with 5-item accordion:
  - What is Mikav AI?
  - Is Mikav free to use?
  - How is this different from using a translator?
  - Can I contribute to the project?
  - How can I use Mikav for my startup idea?
- CTA section in a rounded box with primary background
- Project documentation:
  - README.md — detailed project overview, setup, structure
  - LICENSE — MIT, copyright 2026 Mikav
  - SECURITY.md — vulnerability reporting policy (security@mikav.in)
  - CODE_OF_CONDUCT.md — Contributor Covenant based
  - CONTRIBUTING.md — fork/branch/PR workflow guide
  - ROADMAP.md — 5-phase development plan
  - CHANGELOG.md — this file
  - .env.example — environment variable template
  - AGENTS.md — AI agent project context
  - CLAUDE.md — Claude-specific quick reference

### Changed

- Removed dark mode (`.dark` block and `@custom-variant dark`)
- Replaced Geist fonts with Google Sans
- Updated primary color from default black to #4ca626

### Fixed

- Accordion `collapsible` prop warning (base-ui doesn't use boolean attribute)
- Accordion `type` prop removed (not supported in base-ui)
- Added `colorScheme: "light"` on html to prevent OS dark mode override
