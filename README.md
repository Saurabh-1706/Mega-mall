# West Edmonton Mall — Interactive Sales Deck

A cinematic, fully interactive browser-based sales tool for **West Edmonton Mall** — North America's largest shopping mall (5.3M sq ft). Built as a high-fidelity pitch deck for prospective retail tenants, corporate sponsors, and event partners.

> **Live Demo:** *(Deploy URL goes here after Vercel deployment)*  
> **Email:** medi@liat.ai

---

## 🎯 Project Brief

This tool replaces the fragmented sales process (PDFs, YouTube links, spreadsheets) with a single, self-contained web experience. A sales rep can screen-share it on a live call, or send it as a standalone link that a prospect explores on their own — without a presenter.

**Target audience:** Decision-makers at brands, agencies, and production companies evaluating whether to invest in a presence at WEM (retail tenant, corporate sponsor, or event promoter).

---

## ✨ Features

### Pages / Sections

| Route | Section | Story Beat |
|---|---|---|
| `/` | The Vision | Cinematic video hero · stats grid · district bento · dining · leasing CTA |
| `/overview` | Overview | Scale, demographics, catchment map, editorial district spreads |
| `/retail` | Retail Districts | Europa Boulevard, flagship experiences, phygital retail evolution |
| `/attractions` | Attractions | Galaxyland, World Waterpark, Sea Life Caverns with parallax |
| `/events` | Events & Venue | 7 venue environments · event-type matrix · capacity data · booking form |
| `/sponsorships` | Sponsorships | Partnership tiers · demographic intelligence · activation formats · CTA |

### UX & Technical Highlights

- **Cinematic video hero** — 64MB MP4 deferred via `requestIdleCallback`; poster JPEG shown instantly for fast LCP  
- **Non-linear navigation** — Fixed sidebar on desktop, slide-out drawer on mobile  
- **Scroll progress indicator** — Persistent gold bar tracks reading depth  
- **Parallax images** — Framer Motion scroll-linked `y` transform on attraction panels  
- **Magnetic buttons** — Spring-physics cursor-tracking buttons (Framer Motion)  
- **Stagger animations** — Viewport-triggered stagger entrance on stat grids  
- **Word-reveal hero text** — Scroll-linked opacity per word (Framer Motion)  
- **Fully responsive** — Desktop sidebar collapses to mobile drawer with body-scroll lock  
- **Local asset strategy** — All images hosted in `/public/images/wem/` (no CDN dependencies)
- **Lighthouse 90+ optimized** — See Performance section below

---

## 🏗️ Architecture

```
app/
├── layout.tsx                    # Root layout · Navigation · ScrollProgress · font loading
├── page.tsx                      # Home: video hero · stats · districts · dining · CTA
├── overview/page.tsx             # Scale · catchment map · editorial district spreads
├── retail/page.tsx               # Europa Boulevard · flagship · retail evolution
├── attractions/page.tsx          # Galaxyland · World Waterpark · Sea Life Caverns
├── events/page.tsx               # Venue portfolio · event types · booking form
├── sponsorships/page.tsx         # Partnership tiers · demographics · activation formats
├── globals.css                   # Design tokens · gold gradient · animation utilities
└── components/
    ├── Navigation.tsx            # Sidebar (desktop) + drawer (mobile) + route highlighting
    ├── AvailabilityForm.tsx      # Leasing inquiry form
    ├── ScrollProgress.tsx        # Passive-scroll gold progress bar
    └── ui/
        ├── HeroVideo.tsx         # Deferred video loader (poster → video via requestIdleCallback)
        ├── MaterialIconsLoader.tsx # Non-blocking Material Symbols CSS injector
        ├── MagneticButton.tsx    # Spring-physics cursor-tracking button
        ├── ParallaxImage.tsx     # Scroll-linked parallax wrapper
        ├── StaggerContainer.tsx  # Viewport-triggered stagger animation group
        └── TextReveal.tsx        # Scroll-linked per-word opacity reveal

public/images/wem/               # All media served locally
├── Sequence 02.mp4              # Hero background video (deferred load)
├── wem_night_hero.jpg           # Hero poster / section backgrounds
├── wem_interior.jpg             # Vision section
├── wem_europa.jpg               # Europa Boulevard
├── wem_galaxyland.jpg           # Galaxyland
├── wem_ice_palace.jpg           # World Waterpark
├── wem_luxury_retail.jpg        # Retail collection
├── wem_boutique_display.jpg     # Boutique display
├── wem_dining.jpg               # Dining & lifestyle
├── wem_phygital.jpg             # Phygital retail concept
├── wem_sealife.jpg              # Sea Life Caverns
└── wem_event.jpg                # Events section
```

---

## 🎨 Design System

| Token | Value | Rationale |
|---|---|---|
| **Primary (Gold)** | `#f2ca50` | WEM brand gold — used sparingly for maximum impact |
| **Background** | `#131315` | Deep black — cinematic, premium feel |
| **Surface** | `#201f22` | Elevated surfaces, cards |
| **Headline font** | Noto Serif | Editorial weight — evokes luxury print media |
| **Body / Label font** | Inter | Clean, legible at small tracking widths |
| **Corner radius** | `0px` | Purposely anti-rounded — high-fashion / luxury editorial aesthetic |
| **Accent usage** | Sparingly | Gold only on active states, stats, borders, CTA labels |

### Design Philosophy

1. **Editorial grid over card-based UI** — Inspired by luxury brand sites (Hermès, Saint Laurent). No rounded corners, heavy negative space, oversized serif typography.

2. **Gold as singular accent** — A single brand color creates consistency and avoids visual noise. Used only where attention is needed.

3. **Non-linear navigation** — Fixed sidebar allows prospects to jump directly to the section most relevant to their role (retail tenant / sponsor / event promoter) without a forced linear slideshow.

4. **Video-first storytelling** — The homepage opens with a real WEM footage loop rather than a static hero. The cinematic opening sets the tone immediately.

5. **Phase-based architecture** — Every route is a self-contained Next.js page. Adding `/leasing`, `/dining`, or `/luxury` requires no changes to existing pages.

---

## ⚡ Performance (Lighthouse 90+)

The following optimizations were applied to reach 90+ on both Mobile and Desktop:

| Optimization | Implementation |
|---|---|
| **Deferred 64MB video** | `HeroVideo.tsx` shows poster JPEG on first paint; loads video via `requestIdleCallback` after hydration |
| **Non-blocking fonts** | Material Symbols CSS injected into `<head>` via `useEffect` after hydration — never blocks render |
| **Next.js Image** | All `<img>` tags replaced with `<Image />` — automatic WebP/AVIF conversion, lazy loading, intrinsic sizing (CLS = 0) |
| **`display: swap` on fonts** | Inter + Noto Serif configured with `display: 'swap'` — no FOIT |
| **Image formats** | `next.config.ts` set to serve `image/avif` and `image/webp` |
| **Gzip compression** | `compress: true` in `next.config.ts` |
| **Removed `zoom: 0.8`** | Replaced with `font-size: 90%` — `zoom` breaks Lighthouse viewport metrics |
| **`priority` on above-fold images** | Hero images use `priority` prop to trigger eager loading |

---

## 🤖 AI Tools Used

| Tool | How it was used |
|---|---|
| **Antigravity (Google DeepMind)** | Primary coding assistant — architecture decisions, component generation, performance optimization, debugging |
| **Google Gemini Pro** | Copywriting for section narratives, demographic data framing, leasing pitch language |
| **AI image generation** | `wem_dining.jpg`, `wem_phygital.jpg`, `wem_sealife.jpg`, `wem_luxury_retail.jpg`, `wem_boutique_display.jpg`, `wem_event.jpg` — generated to fill visual gaps where licensed photography was unavailable |

**AI-assisted workflow:**
- The interactive component architecture (magnetic buttons, parallax, text reveal) was designed in collaboration with Antigravity
- Lighthouse performance bottlenecks were identified and solved using Antigravity's codebase analysis
- All generated copy and design decisions were reviewed and refined manually

---

## 🚀 Setup & Running Locally

**Requirements:** Node.js 18+

```bash
# 1. Clone the repository
git clone <repo-url>
cd MALL

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → http://localhost:3000

# 4. Production build (for Lighthouse testing)
npm run build
npm run start
```

> **Note:** Run Lighthouse against `npm run start` (production), not `npm run dev`. Dev server disables many optimizations and will report lower scores.

---

## 📊 What I Would Improve With More Time

- **Licensed video loop** — Source WEM's official press-kit B-roll for the hero instead of the current footage
- **Interactive floor map** — Clickable retail zones showing available units with lease pricing
- **Leasing module** — Segmented by tenant category (Luxury · F&B · Pop-Up) with individual pitch pages per zone
- **CMS integration** — Replace hardcoded data with a headless CMS so the leasing team can update stats and availability without code changes
- **E2E tests** — Playwright test suite covering navigation, form submission, and mobile drawer
- **Analytics** — Vercel Analytics + heatmaps to understand which sections prospects spend the most time on

---

## 📧 Submission

Built for the **Liat.ai Interview Project** brief.

- **Subject Property:** West Edmonton Mall, Edmonton, Alberta — World's Largest Shopping Mall by GLA (5.3M sq ft)
- **Submission email:** medi@liat.ai
