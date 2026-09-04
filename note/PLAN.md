# AIMAX Berhad — Static Angular 22 Site (LOCALHOST ONLY)

**Project root:** `/opt/docker/aimax-berhad/` on `192.168.151.80`
**Asset source:** `/opt/docker/aimax-berhad/image/` (logos, BOD portraits, glove images, icons)
**PDF reference:** `/opt/docker/aimax-berhad/AIMAX BERHAD WEBSITE PREVIEW 2.pdf`

> **Deployment scope: LOCALHOST ONLY.** This project is intended to run on `192.168.151.80` via `ng serve` or a local SPA-aware static server. **No live deploy, no nginx vhost, no domain, no SSL.** The `dist/` output stays on the host machine and is served to the local browser for testing.

---

## Stack (latest stable as of June 2026)

| Item | Version |
|---|---|
| Angular | **22.x** (released Jun 3, 2026, LTS through May 2028) |
| Node.js | **20 LTS** or **22 LTS** |
| TypeScript | **5.6+**, strict mode |
| Architecture | **Standalone components + Signals + `inject()`** (no NgModules) |
| Change detection | **Zoneless** (`provideZonelessChangeDetection`) |
| Forms | **Signal Forms** (stable in v22) for contact form |
| Routing | `provideRouter` + lazy `loadComponent` |
| Styling | **CSS + CSS custom properties** (no SCSS — matches Intemath) |
| Hosting | **Localhost** — `ng serve` on port 4200, OR Python SPA fallback server on port 8765 |
| Tests | None (skipped via `--skip-tests`) |
| Git | **Yes** — `git@github.com:lineclearexpresscms/aimax-berhad-web.git` (master) |

**Browser support (`browserslist`):** `> 0.5%, last 2 versions, not dead, not IE 11`. TS target: `ES2022`.

---

## Bootstrap Command (already executed)

```bash
cd /opt/docker
ng new aimax-berhad \
  --directory=aimax-berhad \
  --routing=true \
  --style=css \
  --ssr=false \
  --strict=true \
  --standalone=true \
  --skip-git=false \
  --skip-tests=true \
  --package-manager=npm \
  --defaults
```

> Project was scaffolded directly into `/opt/docker/aimax-berhad/` (assets had been moved to `image/` subdir so the root was usable). Later, the entire `web/` subdir was folded back into the project root.

---

## File Structure (Intemath convention)

One folder per component, 3 files each (`.ts` + `.html` + `.css`). 16 components = 48 files.

```
/opt/docker/aimax-berhad/
├── note/                                  ← this folder (PLAN + PROGRESS)
├── image/                                 ← source assets (untouched)
├── AIMAX BERHAD WEBSITE PREVIEW 2.pdf
│
├── angular.json                           ← "aimax-berhad" project
├── package.json                           ← Angular 22.1
├── tsconfig.json / tsconfig.app.json
├── .editorconfig / .prettierrc / .vscode/
├── public/                                ← static assets (Angular 22 default)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/images/                     ← 72 PNGs + icons (copied from image/)
│
└── src/
    ├── main.ts                            ← bootstrapApplication
    ├── index.html                         ← <title>AIMAX Berhad</title>
    ├── styles.css                         ← :root tokens + global reset
    └── app/
        ├── app.component.ts / .html / .css
        ├── app.config.ts                  ← zoneless + router + http
        ├── app.routes.ts                  ← 21 lazy standalone routes
        ├── header/{.ts, .html, .css}
        ├── footer/{.ts, .html, .css}
        ├── home/{.ts, .html, .css}
        ├── about/{.ts, .html, .css}
        ├── about-structure/{.ts, .html, .css}
        ├── board-of-directors/{.ts, .html, .css}
        ├── director-detail/{.ts, .html, .css}
        ├── businesses/{.ts, .html, .css}
        ├── glove-product/{.ts, .html, .css}
        ├── certifications/{.ts, .html, .css}
        ├── healthcare/{.ts, .html, .css}
        ├── financial-services/{.ts, .html, .css}
        ├── investor-relations/{.ts, .html, .css}
        ├── media-centre/{.ts, .html, .css}
        ├── contact-us/{.ts, .html, .css}
        └── not-found/{.ts, .html, .css}
```

---

## Routes (`app.routes.ts`)

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    title: 'AIMAX Berhad — Home' },

  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    title: 'About Us — AIMAX Berhad' },
  { path: 'about/structure', loadComponent: () => import('./about-structure/about-structure.component').then(m => m.AboutStructureComponent),
    title: 'Corporate Structure — AIMAX Berhad' },
  { path: 'about/board-of-directors', loadComponent: () => import('./board-of-directors/board-of-directors.component').then(m => m.BoardOfDirectorsComponent),
    title: 'Board of Directors — AIMAX Berhad' },
  { path: 'about/board-of-directors/:slug', loadComponent: () => import('./director-detail/director-detail.component').then(m => m.DirectorDetailComponent),
    title: 'Director Profile — AIMAX Berhad' },

  { path: 'businesses', loadComponent: () => import('./businesses/businesses.component').then(m => m.BusinessesComponent),
    title: 'Our Businesses — AIMAX Berhad' },
  { path: 'businesses/gloves/nitrile', loadComponent: () => import('./glove-product/glove-product.component').then(m => m.GloveProductComponent),
    data: { product: 'nitrile' }, title: 'Nitrile Examination Gloves — AIMAX' },
  { path: 'businesses/gloves/natural-latex', loadComponent: () => import('./glove-product/glove-product.component').then(m => m.GloveProductComponent),
    data: { product: 'natural' }, title: 'Natural Latex Gloves — AIMAX' },
  { path: 'businesses/gloves/chlorinated-latex', loadComponent: () => import('./glove-product/glove-product.component').then(m => m.GloveProductComponent),
    data: { product: 'chlorinated' }, title: 'Chlorinated Latex Gloves — AIMAX' },
  { path: 'businesses/gloves/certifications', loadComponent: () => import('./certifications/certifications.component').then(m => m.CertificationsComponent),
    title: 'Certifications — AIMAX Gloves' },
  { path: 'businesses/healthcare', loadComponent: () => import('./healthcare/healthcare.component').then(m => m.HealthcareComponent),
    title: 'Healthcare — AIMAX Berhad' },
  { path: 'businesses/financial-services', loadComponent: () => import('./financial-services/financial-services.component').then(m => m.FinancialServicesComponent),
    title: 'Financial Services — AIMAX Berhad' },

  { path: 'investor-relations', loadComponent: () => import('./investor-relations/investor-relations.component').then(m => m.InvestorRelationsComponent),
    title: 'Investor Relations — AIMAX Berhad' },
  { path: 'media-centre', loadComponent: () => import('./media-centre/media-centre.component').then(m => m.MediaCentreComponent),
    title: 'Media Centre — AIMAX Berhad' },
  { path: 'contact-us', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Contact Us — AIMAX Berhad' },

  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Not Found — AIMAX Berhad' }
];
```

---

## `app.config.ts` (zoneless + router + http)

```typescript
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
    provideHttpClient(withFetch())
  ]
};
```

---

## Global Styles (`src/styles.css`)

```css
:root {
  --c-primary:       #4B2E83;
  --c-primary-dark:  #3A1F66;
  --c-secondary:     #1FB6B0;
  --c-bg:            #FFFFFF;
  --c-bg-alt:        #F2F2F5;
  --c-text:          #222222;
  --c-text-muted:    #6B7280;
  --radius-card:     16px;
  --radius-pill:     999px;
  --space-section:   clamp(48px, 8vw, 96px);
  --font-sans:       'Inter', system-ui, -apple-system, sans-serif;
  --max-width:       1280px;
  --header-height:   72px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body { font-family: var(--font-sans); font-size: 1rem; color: var(--c-text); background: var(--c-bg); line-height: 1.6; overflow-x: hidden; }
a { text-decoration: none; color: inherit; }
img { max-width: 100%; height: auto; display: block; }
button { font-family: inherit; cursor: pointer; }

.container { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
@media (max-width: 768px) { .container { padding: 0 16px; } }
```

---

## Content Storage Convention

Copy lives inside each component's `.html` (Intemath convention). Repeated data uses a small const at the top of the component `.ts`:

```typescript
// director-detail.component.ts
interface Director { slug: string; name: string; title: string; photo: string; bioHtml: string; }
const DIRECTORS: Director[] = [
  { slug: 'ng-keok-chai', name: 'Ng Keok Chai', title: 'Independent Non-Executive Chairman',
    photo: 'assets/images/BOD AIMAX-13.png', bioHtml: `<p>...</p>` },
  // ... 7 more
];

@Component({ selector: 'app-director-detail', standalone: true,
  templateUrl: './director-detail.component.html', styleUrls: ['./director-detail.component.css'] })
export class DirectorDetailComponent {
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.params, { initialValue: {} });
  director = computed(() => DIRECTORS.find(d => d.slug === this.params()['slug']) ?? DIRECTORS[0]);
}
```

---

## Localhost Run Commands

**Option A — Angular dev server (recommended for dev):**
```bash
ssh jieling@192.168.151.80
cd /opt/docker/aimax-berhad
npx ng serve --host 0.0.0.0 --port 4200
# Open http://192.168.151.80:4200 in your browser
```
SPA fallback is built into `ng serve`. HMR enabled for live edits.

**Option B — Production build + SPA-aware static server (what's running now):**
```bash
ssh jieling@192.168.151.80
cd /opt/docker/aimax-berhad
npm run build                                                       # → dist/web/browser/
# Start the SPA fallback server (Python, single file at /tmp/spa_server.py)
nohup python3 /tmp/spa_server.py >/tmp/spa.log 2>&1 & disown
# Open http://192.168.151.80:8765 in your browser
```

**Stop the server:**
```bash
ssh jieling@192.168.151.80 'fuser -k 8765/tcp 2>/dev/null'
```

**Git workflow (commit + push):**
```bash
ssh jieling@192.168.151.80
cd /opt/docker/aimax-berhad
git add -A
git commit -m "Your message"
git push origin master
```
Remote: `git@github.com:lineclearexpresscms/aimax-berhad-web.git`

---

## Risks / Watch-outs

- **Localhost only** — no nginx, no domain, no deploy. The `dist/` folder is for local review only.
- Angular 22 brand new (Jun 3, 2026) — minor bugs possible. v21 LTS is a safer fallback if any blocker appears.
- Hero PNGs are 1–3 MB each — ship as-is in v1, optimize later.
- PDF content typos ("INTERGRATED", "Assests") — fix once in the HTML.
- `node_modules/` is 250MB and `dist/` is 33MB — both gitignored, repo stays small.
- The repo on GitHub is empty/private — confirm visibility before sharing.
- macOS/Windows users can also `git clone` and run `npm install` + `ng serve` locally; no remote server needed.
