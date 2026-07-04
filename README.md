<p align="center">
  <strong>Mikav</strong>
</p>

<p align="center">
  Open-source Malayalam AI copilot — know Kerala deep, build Kerala forward.
</p>

<p align="center">
  <a href="https://mikav.in">Website</a> •
  <a href="https://github.com/mikav-ai/mikav-ai">GitHub</a> •
  <a href="https://github.com/orgs/mikav-ai/discussions">Discussions</a> •
  <a href="ROADMAP.md">Roadmap</a> •
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

---

## What is Mikav?

Mikav is an open-source AI copilot built on a native Malayalam model — no translate-patch, a real language brain from the ground up. It helps people know Kerala deep: art forms, history, festivals, culture. Ask anything, get a true answer.

The data is open too — free for researchers, developers, anyone curious. Beyond knowing, Mikav bridges culture-passion to real action: connecting ideas to startup paths, incubation programs, and mentors. The whole thing is built together — open code, open road, no wall.

## Features

- **Native Malayalam AI** — Built from ground for Malayalam, not a translation layer. Understands true word, idiom, script, meaning deep.
- **Ask Anything About Kerala** — Art, history, festivals, culture — type any question, get a clear answer. No search-hunt, just ask.
- **Open Data, Free to All** — Culture datasets open, download free, use anywhere. Researcher, dev, curious mind — all welcome.
- **Explore Culture Map** — Visual journey through regions, art forms, artisans, festival calendar. Browse, wander, discover.
- **Ideas to Startup Bridge** — Turn culture passion into real venture. Connect to incubation programs, grants, mentors — path from idea to action.
- **Open Source, Built Together** — Code open, roadmap open, community-driven. Anyone can join, build, fix, grow this together — no wall, no lock.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/mikav-ai/mikav-ai.git
cd mikav-ai
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed. See the file for all available variables.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 + shadcn/ui (base-ui) |
| Font | Google Sans |
| Icons | Lucide React |
| Theme | Light only, primary #4ca626 |

## Project Structure

```
mikav-ai/
├── app/                # Next.js app router pages & layouts
│   ├── layout.tsx      # Root layout (font, theme, SEO metadata)
│   ├── page.tsx        # Home page
│   ├── globals.css     # Tailwind config & theme variables
│   ├── sitemap.ts      # Dynamic sitemap generation
│   └── robots.ts       # Dynamic robots.txt generation
├── components/
│   ├── app/            # Layout shell (header, footer, layout)
│   ├── home/           # Landing page sections (hero, features, faqs, cta)
│   ├── shared/         # Shared components (JSON-LD structured data)
│   └── ui/             # shadcn/ui primitives (button, card, accordion)
├── lib/                # Shared utilities
├── public/
│   ├── icons/app/      # App icons (favicon, light/dark logos)
│   ├── llms.txt        # LLM context (Answer Engine Optimization)
│   ├── llms-full.txt   # Extended LLM context
│   └── skill.md        # Agent instructions
├── .env.example        # Environment variable template
├── AGENTS.md           # AI agent context
├── CHANGELOG.md        # Version history
├── CODE_OF_CONDUCT.md  # Community standards
├── CONTRIBUTING.md     # How to contribute
├── LICENSE             # MIT License
├── ROADMAP.md          # Development roadmap
└── SECURITY.md         # Security policy
```

## Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Contributing

We welcome contributions from everyone — developers, designers, writers, researchers, culture enthusiasts. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Join the conversation in [Discussions](https://github.com/orgs/mikav-ai/discussions).

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the full development plan across 5 phases: Foundation → Core AI → Culture Platform → Startup Bridge → Community & Scale.

## License

MIT — see [LICENSE](LICENSE) for details.

## Community

- **Website:** [mikav.in](https://mikav.in)
- **GitHub:** [github.com/mikav-ai/mikav-ai](https://github.com/mikav-ai/mikav-ai)
- **Discussions:** [github.com/orgs/mikav-ai/discussions](https://github.com/orgs/mikav-ai/discussions)
- **Email:** hello@mikav.in
- **Security:** security@mikav.in
