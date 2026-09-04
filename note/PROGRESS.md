# AIMAX Berhad — Build Progress Log

## Project Info
- **Path:** `/opt/docker/aimax-berhad/` on `192.168.151.80` (project root — moved up from `web/` subdir on 2026-09-04)
- **Stack:** Angular 22.1 (zoneless, standalone, Signals)
- **Goal:** Static 21-page site mirroring the design PDF
- **Started:** 2026-09-04

---

## Decisions Made
- 2026-09-04: Target Angular = **22.1.x** (latest stable)
- 2026-09-04: Styling = **plain CSS + :root tokens** (no SCSS, matches Intemath)
- 2026-09-04: File layout = **one folder per component, 3 files each** (matches Intemath exactly)
- 2026-09-04: No CMS, no SSR, no git
- 2026-09-04: **Standalone components + Signals + lazy loadComponent** (modern Angular, not Intemath's NgModules)
- 2026-09-04: Project scaffolded into **`/opt/docker/aimax-berhad/web/`** subdirectory (Option 2) so existing assets/ in parent stay untouched
- 2026-09-04: Static assets live in `public/` (Angular 22 default), not `src/assets/`

## Decisions Pending
- _None_

---

## Phase Status

### Phase 1 — Scaffold ✅ DONE
- [x] Resolve folder collision (chose Option 2: scaffold into `web/` subdir)
- [x] `npx @angular/cli@latest ng new web ...` (Angular 22.1.0 installed)
- [x] Copy needed images from `image/` → `public/assets/images/` (72 files)
- [x] Set `src/styles.css` with tokens
- [x] Update `src/index.html` → `<title>AIMAX Berhad</title>`
- [x] Verify `npm run build` works ✅ (77 KB initial transfer, 1.3s build time)

### Phase 2 — Shell ✅ DONE
- [x] `header/` (sticky nav, mobile menu via Signal)
- [x] `footer/` (multi-column + copyright strip)
- [x] `app.component.ts` → `<app-header /> <router-outlet /> <app-footer />`
- [x] `app.routes.ts` → all 21 routes stubbed
- [x] `app.config.ts` (zoneless + router + http)
- [x] `not-found/` page

### Phase 3 — Home + About + Board ✅ DONE
- [x] `home/` (hero + 3 cards + careers CTA)
- [x] `about/` (corporate overview)
- [x] `about-structure/` (corporate tree diagram)
- [x] `board-of-directors/` (4×2 grid)
- [x] `director-detail/` (1 component, 8 slugs, full bios)

### Phase 4 — Businesses ✅ DONE
- [x] `businesses/` landing (3 division cards)
- [x] `glove-product/` (1 component, 3 routes via route data — nitrile/natural/chlorinated)
- [x] `certifications/` (icon grid)
- [x] `healthcare/` (BU cards + eMedAsia flow)
- [x] `financial-services/` (moneylending card)

### Phase 5 — IR + Media + Contact ✅ DONE
- [x] `investor-relations/` (Bursa shortcuts + downloads + CTA)
- [x] `media-centre/` (Signal-driven tabs + cards)
- [x] `contact-us/` (Signal Form + mailto fallback)

### Phase 6 — SEO + Build + Deploy 🟡 IN PROGRESS
- [x] Per-route `<title>` via route `title` (21 routes)
- [x] `robots.txt` + `sitemap.xml` with 21 routes
- [x] `npm run build` → `dist/web/browser/`
- [x] Assets included (72 images in `dist/.../assets/images/`)
- [x] HTTP smoke test: `/`, all assets 200 ✅
- [ ] Real-browser smoke test (open in Chrome, check console)
- [ ] Configure nginx vhost on `192.168.151.80` at `/var/www/aimax-berhad/`
- [ ] Wire SPA fallback (`try_files $uri $uri/ /index.html`)
- [ ] Drop dist to nginx root

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

## Session Log

### 2026-09-04 — Session 1: Discovery & Plan
- Analyzed data pipeline script (unrelated context)
- SSH'd into `192.168.151.80`, found PDF + asset drop
- Extracted all 20 PDF pages via vision analysis
- Mapped 21 pages of AIMAX website design
- Drafted two plan versions (latest Angular 22, plain CSS, no CMS, Intemath-style layout)
- Created `note/PLAN.md` and `note/PROGRESS.md`
- **Discovery:** Assets were moved to `/opt/docker/aimax-berhad/image/` (not at the root anymore)

### 2026-09-04 — Session 2: Scaffold + All 16 Components
- Picked Option 2 (scaffold into `web/` subdir)
- Ran `ng new web --style=css --ssr=false --standalone --skip-git --skip-tests` → Angular 22.1
- Copied 72 images from `image/` → `src/assets/images/` (later moved to `public/assets/images/` per Angular 22 default)
- Updated `index.html`, `styles.css` with brand tokens
- Wrote 16 components × 3 files = 48 component files, plus app shell (5 files) = 53 source files
- 21 lazy routes wired in `app.routes.ts`
- `npm run build` ✅ succeeded
- 14 lazy chunks emitted, 77 KB initial transfer
- HTTP smoke test: home + assets return 200; SPA routes return 404 from python http.server (expected — nginx will fix)
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
- SPA server still serving on `http://192.168.151.80:8765/`
