## Goal
Make `og:description` and `twitter:description` unique per page (currently every page shares the homepage values from `index.html`).

## Approach
The project is SSG (prerender.js injects per-route `<title>`, `<meta name="description">`, and `<link rel="canonical">` into the static HTML for each route). Each page component also updates these client-side via `useEffect`. We'll extend both layers so `og:description` and `twitter:description` mirror each page's own meta description.

## Changes

1. **`prerender.js`** — In the meta-injection logic, also replace the `og:description` and `twitter:description` tag contents with the same per-route description already used for `<meta name="description">`. This is what crawlers (LinkedIn, Facebook, Twitter, Slack) will read.

2. **Each page component** (Index, About, Rooms, Gallery, Location, Pricing, Testimonials, Contact, FAQ, Blog, NotFound, WomensHostelSaravanampatti, and all 8 blog posts under `src/pages/blog/`) — In the existing `useEffect` that sets `document.title` and the description meta, add two lines that also update `meta[property="og:description"]` and `meta[name="twitter:description"]` to the same string. Keeps in-app navigation consistent with the prerendered head.

3. **`index.html`** — Leave the current homepage `og:description` / `twitter:description` as the fallback (matches what prerender writes for `/`).

## Out of scope
- No changes to `og:title` / `twitter:title` (not requested).
- No changes to `og:image` / canonical / JSON-LD.
- No new dependencies (not adding react-helmet-async — the existing prerender + useEffect pattern already works).
