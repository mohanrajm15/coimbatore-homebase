Two small, focused changes:

1. Replace the sitewide Lovable OG image placeholder
- Generate a 1200×630 branded social-preview image (`public/og-image.jpg`) for The Royal Nest Studio House with legible text, hostel/room visual, and the ₹8,500/month offer.
- Update `index.html` so `og:image` and `twitter:image` point to `https://www.theroyalneststudiohouse.com/og-image.jpg` instead of `https://lovable.dev/opengraph-image-p98pqg.png`.
- The prerender script only replaces title/description/canonical/og:description, so the new OG image will correctly carry through to every prerendered page.

2. Fix the /pricing contradiction
- In `src/pages/Pricing.tsx`, remove the "Contact us for pricing." subheading.
- Replace it with a number-first lead, e.g., "All-inclusive rates from ₹8,500/month. No hidden charges.", so the published prices immediately follow the H1.