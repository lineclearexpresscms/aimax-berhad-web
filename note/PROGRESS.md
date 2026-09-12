# AIMAX Berhad — Build Progress Log

## Project Info
- **Path:** `/opt/docker/aimax-berhad/` on `192.168.151.80` (project root — moved up from `web/` subdir on 2026-09-04)
- **Stack:** Angular 22.1 (zoneless, standalone, Signals)
- **Goal:** Static 21-page site mirroring the design PDF
- **Scope:** **LOCALHOST ONLY** — no deploy, no nginx, no live domain
- **Started:** 2026-09-04

---

## Decisions Made
- 2026-09-04: Target Angular = **22.1.x** (latest stable)
- 2026-09-04: Styling = **plain CSS + :root tokens** (no SCSS, matches Intemath)
- 2026-09-04: File layout = **one folder per component, 3 files each** (matches Intemath exactly)
- 2026-09-04: No CMS, no SSR
- 2026-09-04: **Standalone components + Signals + lazy loadComponent** (modern Angular, not Intemath's NgModules)
- 2026-09-04: Project scaffolded into **`/opt/docker/aimax-berhad/web/`** subdirectory, then flattened to project root on 2026-09-04
- 2026-09-04: Static assets live in `public/` (Angular 22 default), not `src/assets/`
- 2026-09-04: **Git included** — initial commit `bfeb2af` pushed to `git@github.com:lineclearexpresscms/aimax-berhad-web.git`
- 2026-09-04: **Localhost-only run** — no nginx vhost, no deploy, no live domain. SPA served via `ng serve` or local Python SPA server.

## Decisions Pending
- _None_

---

## Phase Status

### Phase 1 — Scaffold ✅ DONE
- [x] Resolve folder collision (scaffolded into `web/` subdir, later flattened)
- [x] `npx @angular/cli@latest ng new web ...` (Angular 22.1.0 installed)
- [x] Copy needed images from `image/` → `public/assets/images/` (72 files)
- [x] Set `src/styles.css` with tokens
- [x] Update `src/index.html` → `<title>AIMAX Berhad</title>`
- [x] Verify `npm run build` works ✅ (77 KB initial transfer, 1.3s build time)

### Phase 2 — Shell ✅ DONE
- [x] `header/` (sticky nav, mobile menu via Signal)
- [x] `footer/` (multi-column + copyright strip + newsletter form)
- [x] `app.component.ts` → `<app-header /> <router-outlet /> <app-footer />`
- [x] `app.routes.ts` → all 21 routes stubbed
- [x] `app.config.ts` (zoneless + router + http)
- [x] `not-found/` page

### Phase 3 — Home + About + Board ✅ DONE
- [x] `home/` (hero + 3 cards + careers CTA + stats strip)
- [x] `about/` (corporate overview with PDF-exact copy)
- [x] `about-structure/` (real `Corporate Structure Aimax.png` diagram + subsidiary grid)
- [x] `board-of-directors/` (4×2 grid with 8 directors)
- [x] `director-detail/` (1 component, 8 slugs, full bios via PDF-extracted copy)

### Phase 4 — Businesses ✅ DONE
- [x] `businesses/` landing (3 division cards)
- [x] `glove-product/` (1 component, 3 routes via route data — nitrile/natural/chlorinated)
  - Real application icons (8 for nitrile, 6 for latex/chlorinated)
  - Real color swatches for nitrile (5 colors per PDF)
  - Exact weight tables per PDF page 12/13/14
- [x] `certifications/` (real `PRODUCT_COMPLIANCE_SINGLE-*.png` icons + SGS cert + MDA logo)
- [x] `healthcare/` (real `PARTNERSHIP-25/26/27.png` logos + PDF-exact copy + eMedAsia flow)
- [x] `financial-services/` (moneylending card)

### Phase 5 — IR + Media + Contact ✅ DONE
- [x] `investor-relations/` (24 Bursa shortcuts in 4-col grid + downloads + Stay Connected panel + real Bursa link)
- [x] `media-centre/` (Signal-driven tabs + 4-col news grid)
- [x] `contact-us/` (Signal Form with all 7 fields + Registration No. 200101001581 (537337-M))

### Phase 6 — SEO + Build + Localhost Serve ✅ DONE
- [x] Per-route `<title>` via route `title` (21 routes)
- [x] `robots.txt` + `sitemap.xml` with 21 routes (in `public/`)
- [x] `npm run build` → `dist/web/browser/`
- [x] Assets included (72 images in `dist/.../assets/images/`)
- [x] HTTP smoke test: `/`, all assets, all 21 routes return 200 ✅
- [x] SPA fallback server running on `http://192.168.151.80:8765/`
- [x] **No deploy** — project stays on host machine for local review only

### Phase 7 — Git ✅ DONE
- [x] Initial commit `bfeb2af` (143 files, +10,028 lines)
- [x] Pushed to `git@github.com:lineclearexpresscms/aimax-berhad-web.git` (master)
- [x] `node_modules/` and `dist/` gitignored — repo stays lean

### Phase 8 — Localhost Polish ✅ DONE
- [x] Logo size fixed (header 32px, footer 28px)
- [x] Project root flattened — `web/` subdir removed, all source files at `/opt/docker/aimax-berhad/`
- [x] SPA server restarted on new path
- [x] Git history preserved after move

---

## Build Stats (latest)

```
Initial bundle:    278 KB raw / 77 KB gzipped
Build time:        1.3 seconds
Lazy chunks:       14 routes (one per page)
Total chunks:      17 JS files
Output:            dist/web/browser/
```

---

## How to Run (Localhost)

**Dev server (with HMR):**
```bash
ssh jieling@192.168.151.80
cd /opt/docker/aimax-berhad
npx ng serve --host 0.0.0.0 --port 4200
# → http://192.168.151.80:4200
```

**Production preview (what's currently running):**
```bash
ssh jieling@192.168.151.80
cd /opt/docker/aimax-berhad
npm run build
nohup python3 /tmp/spa_server.py >/tmp/spa.log 2>&1 & disown
# → http://192.168.151.80:8765
```

**Stop the server:**
```bash
ssh jieling@192.168.151.80 'fuser -k 8765/tcp 2>/dev/null'
```

---

## Session Log

### 2026-09-04 — Session 1: Discovery & Plan
- Analyzed data pipeline script (unrelated context)
- SSH'd into `192.168.151.80`, found PDF + asset drop
- Extracted all 20 PDF pages via vision analysis
- Mapped 21 pages of AIMAX website design
- Drafted two plan versions (latest Angular 22, plain CSS, no CMS, Intemath-style layout)
- Created `note/PLAN.md` and `note/PROGRESS.md`

### 2026-09-04 — Session 2: Scaffold + All 16 Components
- Picked Option 2 (scaffold into `web/` subdir)
- Ran `ng new web --style=css --ssr=false --standalone --skip-git --skip-tests` → Angular 22.1
- Copied 72 images from `image/` → `src/assets/images/` (later moved to `public/assets/images/` per Angular 22 default)
- Updated `index.html`, `styles.css` with brand tokens
- Wrote 16 components × 3 files = 48 component files, plus app shell (5 files) = 53 source files
- 21 lazy routes wired in `app.routes.ts`
- `npm run build` ✅ succeeded
- 14 lazy chunks emitted, 77 KB initial transfer
- HTTP smoke test: home + assets return 200; SPA routes return 404 from python http.server (later fixed by custom SPA fallback server)

### 2026-09-04 — Session 3: Compare to PDF + fix gaps
- Compared my build to all 20 PDF pages via vision analysis
- Identified 4 biggest visual gaps
- **Fixed:**
  1. Corporate Structure: now shows `Corporate Structure Aimax.png` diagram + subsidiary grid below
  2. Glove Products: real application icons (8 for nitrile, 6 for latex/chlorinated), color swatches for nitrile (5 colors), exact weight tables per PDF page 12/13/14
  3. Certifications: real `PRODUCT_COMPLIANCE_SINGLE-*.png` images (7 conformance items) + MDA logo
  4. Healthcare: real `PARTNERSHIP-25/26/27.png` logos + exact copy from PDF
  5. About: exact copy from PDF (2 paragraphs reworded to match)
- Build re-verified: 1.3s, 14 lazy chunks, 77 KB initial transfer
- User confirmed: **"no need deploy, i just need you test it in localhost"** — switch to localhost-only
- Added SPA fallback server so all 21 routes work locally (Python, single file)
- Added real Bursa link (`https://www.klsescreener.com/v2/announcements/stock/0041`)
- Added Registration No. 200101001581 (537337-M) to Contact Us page

### 2026-09-04 — Session 4: Git + Localhost Polish
- **Git:** initial commit `bfeb2af` (143 files, +10,028 lines) pushed to `git@github.com:lineclearexpresscms/aimax-berhad-web.git`
- **Logo size fix:** header logo 32px, footer logo 28px
- **Project root flattened:** moved all `web/` contents up one level so the project sits directly at `/opt/docker/aimax-berhad/`
- **SPA server restarted** on new path → `http://192.168.151.80:8765/` still serving all 21 routes with 200
- **PLAN.md + PROGRESS.md updated** to reflect localhost-only scope (no deploy, no nginx)

### 2026-09-04 — Session 5: PDF Fidelity Audit + Header Dropdowns
- **Full PDF audit:** compared all 20 PDF pages against the build via vision analysis
- **Footer fix:** stripped back from 8 cols to 6 cols (PDF layout: Logo / About us / Businesses / Investor Relations / Media Centre / Corporate HQ). Removed Leadership / Newsletter / Sitemap columns.
- **Footer Businesses:** relabeled to match PDF wording — "Latex Powder-free Gloves" / Healthcare / Financial Services
- **IR AGM labels:** updated to exact PDF wording "Summary of Key Matters Discussed at Xth AGM" (was "Xth AGM")
- **Header dropdowns added** to match footer's 3 sub-items:
  - **About Us ▾** → Corporate Overview / Corporate Structure / Board of Directors
  - **Businesses ▾** → Latex Powder-free Gloves / Healthcare / Financial Services
  - **Investor Relations** → flat (1 item only per PDF)
  - **Media Centre ▾** → Media Release / Media Coverage / Events / Happenings / Video Gallery
  - **Contact Us** → flat
- **Active state propagation:** top-level + sub-items both show the 2px purple `::after` bar when route is current
- **Cross-component tab nav:** new `shared/media-tab.service.ts` so clicking "Media Release" in header dropdown pre-selects the matching tab on `/media-centre`
- **Media Centre tabs expanded:** from 2 (Media Release/Coverage + Events) to 4 (added Media Coverage as separate tab, added Video Gallery) — matches PDF footer sub-items
- **Mobile dropdown styling:** sub-items always visible under parent on mobile, with 1px dividers
- **Header active state fixes:**
  - Top-level `About Us` uses `[routerLinkActiveOptions]="{ exact: true }"` so it doesn't match `/about/structure`
  - Sub-items use `routerLinkActive="is-active"` so the current sub-page gets the underline
- **Caret arrows removed** on desktop (hover alone signals dropdown)
- **Mobile underlines removed** by default (only show on hover/focus/active)
- Final build: 1.3s, 17 JS chunks, 77 KB initial transfer. SPA server still on `:8765`.

### 2026-09-04 — Session 5 ending: ⏸️ ON HOLD
- User signaled another task — saving current state and pausing AIMAX work
- All work committed to git (master pushed)
- SPA server still running on `http://192.168.151.80:8765/` for any further review
- To resume: just start the session again and reference this PROGRESS.md

---

### 2026-09-08 — Session 6: Media Centre Tabs Unique Routes
- **Bug fix:** all 4 Media Centre sub-items pointed to `/media-centre`, so on that page every sub-item got the `is-active` underline bar
- **Fix:** each sub-item now uses a unique URL — `/media-centre/release`, `/media-centre/coverage`, `/media-centre/events`, `/media-centre/video`. Updated `app.routes.ts` to add `:tab` param route. `MediaCentreComponent` reads `:tab` from `ActivatedRoute` and syncs state with the URL.
- Removed unused `MediaTabService` (the URL does the routing now)
- Build clean, all routes 200

### 2026-09-08 — Session 6 cont.: Header dropdown UX fix
- **Bug:** clicking `About Us` kept its dropdown open via `:focus-within` even after mouse-over to `Businesses`
- **Fix:** switched from CSS-only `:hover`/`@media` rules to Angular signal-driven open/close via `(mouseenter)` and `(mouseleave)` events on each `<li class="nav__item--has-dropdown">`. Only one dropdown can be open at a time.

### 2026-09-08 — Session 6 cont.: Hero image polish
- `.hero__image img` `max-height: 360px` → `520px`
- `aspect-ratio: 2092 / 1386` so the hero image displays at its native 3:2 landscape ratio (no distortion)
- `.hero__title` `font-weight: 700` → `300` (light/thin)
- `.hero .container { padding: 0 }` — flush edges (no horizontal gap between title and image)

### 2026-09-08 — Session 6 cont.: Divisions grid fill + responsive
- `.divisions__grid` → `clamp(280px, 40vh, 520px)` height, `min-height: 320px`
- `.division-card` → `position: relative; height: 100%`
- `.division-card__image` → `position: absolute; inset: 0` (full-bleed image, fills entire card)
- Added tablet breakpoint `@media (max-width: 1024px)` so hero stacks vertically on tablets
- Same breakpoint for `.divisions__grid`: stacks vertically on tablet, `height: auto`

### 2026-09-08 — Session 6 cont.: Hero padding
- `.hero { padding: clamp(80px, 12vw, 160px) 0 }` → `clamp(80px, 12vw, 100px) 0` (more compact)

### 2026-09-08 — Session 6: PHASE 9 — Merge Corporate Overview + Structure (IN PROGRESS)
- **User request:** merge the two separate pages into ONE `/about` page. Header layout stays the same, only the redirect link for the now-removed "Corporate Structure" sub-item changes.
- **Plan updated** (`note/PLAN.md`): Phase 9 added documenting the change
- **Routes to remove:** `/about/structure` (and `AboutStructureComponent`)
- **About dropdown after:** Corporate Overview (`/about`) + Board of Directors (`/about/board-of-directors`) — 2 items only
- **Footer "Corporate Structure" link** → `/about` (was `/about/structure`)
- **Subagent dispatched** to extract verbatim PDF copy + image list from both PDF sections
