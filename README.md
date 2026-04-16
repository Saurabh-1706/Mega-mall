# West Edmonton Mall — Interactive Sales Deck

A cinematic, fully interactive browser-based sales tool for **West Edmonton Mall** — North America's largest shopping mall. Built as a high-fidelity pitch deck for prospective retail tenants, corporate sponsors, and event partners.

> **Live Demo:** *(Deploy to Vercel/Netlify to generate URL)*
> **Tech Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · Noto Serif · Inter

---

## 🎯 Project Brief

This tool replaces the fragmented sales process (PDFs, YouTube videos, spreadsheets) with a single, self-contained web experience. A sales rep can screen-share it on a live call or send it as a standalone link that a prospect explores on their own.

**Target audience:** Decision-makers at brands, agencies, and production companies evaluating whether to invest in a presence at WEM.

---

## ✨ Features

### Phase 1 — Core Interactive Deck
| Section | Route | Story Beat |
|---|---|---|
| The Vision | `/` | Cinematic hero + district bento grid + leasing CTA |
| Overview | `/overview` | Scale, demographics, market dominance, catchment map |
| Retail Districts | `/retail` | Europa Boulevard, flagship experiences, retail evolution |
| Attractions | `/attractions` | Galaxyland, World Waterpark, Sea Life Caverns |
| Events & Venue | `/events` | 7 venue environments, capacity data, event type matrix, booking form |

### Phase 2 — Expandable Sub-Modules
| Module | Route | Purpose |
|---|---|---|
| Sponsorships | `/sponsorships` | Partnership tiers, demographic data, activation formats, inquiry form |

### UX & Technical Highlights
- **Non-linear navigation** — sidebar on desktop, slide-out drawer on mobile
- **Scroll progress indicator** — persistent gold bar tracks reading position
- **Cinematic hero** — full-viewport animated background with gold typography
- **Dining & Lifestyle section** — F&B as destination, not afterthought
- **CSS catchment map** — pulsing ring visualization with provincial markers
- **Responsive** — desktop sidebar nav collapses to functional mobile drawer
- **Zero external image dependencies** — all assets hosted in `/public/images/wem/`

---

## 🤖 AI Tools Used

| Tool | Usage |
|---|---|
| **Google Gemini (via Antigravity IDE)** | Image generation for Sea Life Caverns, Dining district, luxury boutique interiors, phygital retail concept, and hero night imagery |
| **Gemini Pro** | Copywriting, section structuring, demographic data narrative |
| **AI-assisted code generation** | Component architecture, Tailwind layout patterns, mobile drawer implementation |

All AI-generated images are stored in `/public/images/wem/` alongside real WEM assets:
- `wem_night_hero.jpg` — Europa Boulevard night view (Flickr / licensed)
- `wem_interior.jpg`, `wem_europa.jpg`, `wem_galaxyland.jpg` — Wikimedia Commons (CC licensed)
- `wem_luxury_retail.jpg`, `wem_sealife.jpg`, `wem_dining.jpg`, `wem_phygital.jpg` — AI-generated

---

## 🏗️ Architecture

```
app/
├── layout.tsx              # Root layout, Navigation, ScrollProgress
├── page.tsx                # Home: Hero, Vision, Districts, Dining CTA
├── overview/page.tsx       # Why WEM: Scale, catchment, market data
├── retail/page.tsx         # Retail + luxury leasing pitch
├── attractions/page.tsx    # Galaxyland, Waterpark, Sea Life
├── events/page.tsx         # Venue portfolio + booking form
├── sponsorships/page.tsx   # Phase 2: Partnership tiers + inquiry
├── components/
│   ├── Navigation.tsx      # Sidebar (desktop) + drawer (mobile)
│   ├── AvailabilityForm.tsx # Leasing inquiry form with validation
│   └── ScrollProgress.tsx  # Gold scroll progress bar
└── globals.css             # Design tokens, gold gradient, animations

public/images/wem/          # All images served locally (no CDN dependencies)
```

### Design System
- **Primary:** `#f2ca50` (WEM Gold)
- **Background:** `#131315` (Deep Black)
- **Headlines:** Noto Serif (editorial weight)
- **Labels/Body:** Inter
- **Shape:** Square corners (luxury editorial aesthetic)
- **Radius:** 0px (purposely anti-rounded for high-fashion feel)

---

## 🚀 Setup & Running Locally

```bash
# Clone
git clone <repo-url>
cd MALL

# Install
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start
```

**Node.js 18+** required.

---

## 🎨 Design Decisions

1. **Editorial grid over card-based UI** — Inspired by luxury brand sites (Hermès, Saint Laurent). No rounded corners, heavy use of negative space, oversized serif typography.

2. **Gold as the singular accent** — A single brand color (`#f2ca50`) creates consistency and avoids visual noise. Used sparingly to maximize impact.

3. **Non-linear navigation** — The fixed sidebar allows prospects to jump directly to the section most relevant to them (retail tenant vs. sponsor vs. event promoter) without being forced through a linear slide show.

4. **Local asset strategy** — All images are downloaded to `/public/images/wem/` to eliminate external CDN dependencies, hotlinking blocks, and 404 errors during presentations.

5. **Phase 2 architecture** — Each route is a self-contained Next.js page, making it trivial to add new modules (`/leasing`, `/luxury`, `/dining`) without touching existing pages.

---

## 📊 What I Would Improve With More Time

- **True video hero** — Source and self-host a licensed WEM B-roll loop from the official press kit
- **Leasing module** — Segmented by tenant category (Luxury / F&B / Pop-Up) with individual pitch pages
- **Interactive floor map** — Clickable zones showing available retail units
- **Animation polish** — Scroll-triggered entrance animations on all sections using Intersection Observer
- **Lighthouse 90+ audit** — Image optimization (WebP conversion, lazy loading attributes)
- **CMS integration** — Replace hardcoded data with a headless CMS for the leasing team to manage

---

## 📧 Submission

Built for the Liat.ai Interview Project brief.

**Subject:** West Edmonton Mall (WEM), Edmonton, Alberta — World's Largest Shopping Mall by GLA.
