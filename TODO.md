# TODO: details to fill in

These items came up in the portfolio review but need facts only you have, so they were left out of the page. Each line says what's missing and where it goes.

## Experience (`src/data/experience.json` → `bullets`)

Each role has an empty `bullets: []` array. The card shows a bulleted list as soon as the array has entries. Aim for 2–3 per role in the form *did X with Y, result Z*.

- [ ] **AIFP**: the model or pipeline you built, the data scale, and a metric. If RegBridge came out of this work, say so.
- [ ] **Lumena Energy**: the system you built, the stack, and the impact.
- [ ] **ACM Illinois Tech**: the site you maintain, the number of users or members, and the CI/deploy setup.
- [ ] **Current research assistant position** (University of Alabama): add a new entry at the top with `company`, `position`, `start_date`, `end_date` (e.g. "Present") and `bullets`.

## Research (`src/data/research.json`)

- [ ] **RegBridge venue or preprint status**: append it to the RegBridge `description` (SimPhysQA already says "Under review.").
- [ ] **RegBridge code or demo link**: add it once one exists. RegBridge can then become a featured project too (see Projects below).
- [ ] **One-paragraph research statement**, e.g. "I'm interested in grounding LLM outputs in verifiable evidence". This needs a small new field and a line in `src/components/Research.jsx` above the paper cards.
- [ ] **Google Scholar / ORCID / arXiv links**: these go next to LinkedIn and GitHub in `src/components/Footer.jsx`, which uses the same link-plus-arrow pattern.

## Skills (`src/data/skills.json`)

Only skills named in the review doc or already on the site are listed. Add these if they're true:

- [ ] **AI/ML & Research**: PyTorch, vLLM, etc.
- [ ] **Backend & Data**: anything beyond FastAPI, Node.js/Express, PostgreSQL, Prisma, MySQL.
- [ ] **Cloud & DevOps**: other AWS services besides Cognito, plus Docker, GitHub Actions, Terraform.

## Projects (`src/data/projects.json`)

- [ ] **RegBridge demo**: there's no code or demo link in the repo. Once there is one, add an entry with `"featured": true` (needs `name`, `description`, `tech_stack`, `status`, `icon`, `link`).
- [ ] **Contractor CRM**: deployment/CI detail, and users or scale. Append to its `description`.
- [ ] **WebScrapeInsight**: the vector store or embedding model used (add to `tech_stack`), and the outcome (append to `description`).

## "How I build" (`src/data/research.json` → `how_i_build`)

- [ ] **CI/CD pipeline, containerization, IaC, deploy targets**: add these as more entries in the array.

## The site itself

- [ ] **Lighthouse or CI badge**: the review suggests one as a software-engineering signal. It needs a CI workflow first; none exists in the repo.

## Flagged, not changed (your call)

- [ ] **Contractor CRM link** (`projects.json`) opens an AWS Cognito login screen, which is a dead end for visitors. Link a demo, screenshots or a short video instead.
- [ ] **Voting Web App link** is plain `http://` on free hosting. Fix it or drop it.
- [ ] **Pokébook** is on a random Netlify subdomain (`funny-baklava-823a63`). Rename it in Netlify, then update `link`.
- [ ] **Contact email** (`src/data/email.json`) is still the Gmail address. The review suggests your university email.
- [ ] **SimPhysQA PDF** (`public/papers/2.pdf`) is an anonymous submission. Check the venue's anonymity policy before keeping it public next to your name.
- [ ] **Unsplash API key** is hardcoded in `src/scripts/loadImages.js`. That file is unused legacy code, but the key is in git history, so consider rotating it. The React app reads `VITE_UNSPLASH_API_KEY` from `.env` instead.
- [ ] **No lint or type-check tooling** is configured (no ESLint, Prettier or TypeScript), so only `npm run build` can be run as a check.
