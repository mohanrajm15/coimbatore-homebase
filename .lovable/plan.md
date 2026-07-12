## Add new blog: "Ladies Hostel Rent in Saravanampatti: Real 2026 Prices (₹8,500–₹11,500)"

### New file
`src/pages/blog/LadiesHostelRentSaravanampatti2026.tsx` — full long-form post (~1,500+ words), styled like existing blog posts, using ONLY facts already on the site (Pricing page + memory):

- **Prices**: Deluxe Triple ₹8,500, Deluxe Twin ₹9,500, Studio Triple ₹11,500 (all per month).
- **Deposit**: ₹10,000 refundable (per Pricing cards), refunded within 1 week of checkout minus damages. (Note: Pricing page text also says "equivalent to 2 months' rent" — I'll use the card figure ₹10,000 as the concrete number, matching the meta description already live.)
- **Included** (from Pricing): Private bedroom, kitchen facilities, attached bathroom, fully furnished, high-speed WiFi, AC available, balcony, power backup, housekeeping, dedicated parking, 24/7 CCTV, municipality water, common area maintenance.
- **Extra / not included**: Electricity (billed every 2 months at actuals), food.
- **Terms**: 3-month minimum stay, rent by 5th of month, 30-day notice, early termination forfeits deposit.
- **Location context** (from memory): Near KGISL, Adithya Techno Park, CHIL SEZ, KCT, SNS, Kumaraguru.
- **Contact**: +91 96293 13135, address 3 Mahalakshmi Garden Phase III, Saravanampatti.

### H2 structure (matches brief)
1. What a ladies hostel in Saravanampatti actually costs
2. Price by sharing type (triple / twin / studio)
3. What's included vs. what's extra (electricity, deposit, food)
4. Deposit norms in Saravanampatti
5. Our rent card, in full (table with all 3 rooms + deposit)
6. Cheapest vs. best value
7. How to avoid hidden charges
8. FAQ section (5–6 Qs answering rent/deposit/electricity/minimum stay/what's included/notice period)

### SEO / meta
- Title: `Ladies Hostel Rent in Saravanampatti: Real 2026 Prices (₹8,500–₹11,500) | The Royal Nest`
- Meta description: transparent rent card summary using real figures.
- Canonical: `https://theroyalneststudiohouse.com/blog/ladies-hostel-rent-saravanampatti-2026`
- JSON-LD: `BlogPosting` + `FAQPage` (matches brief). No Offer/AggregateRating (no reviews on site yet).
- Internal link: prominent CTA/link → `/pricing`, plus contextual links to `/rooms` and `/location`.

### Wire-up (all required)
- `src/App.tsx` — import + `<Route path="/blog/ladies-hostel-rent-saravanampatti-2026" ...>`.
- `src/pages/Blog.tsx` — add new post to `blogPosts` array at the top (dated 2026, most recent).
- `src/entry-server.tsx` — add route to `routeMeta` map (title/description/canonical) so SSR/prerender output correct meta.
- `prerender.js` — add `/blog/ladies-hostel-rent-saravanampatti-2026` to `routesToPrerender`.
- `public/sitemap.xml` — add the new URL.

### What I will NOT do
- Not invent competitor prices, ratings, or third-party quotes. The "cheapest vs best value" section will compare our own three room types honestly (Deluxe Triple = cheapest; Studio = most space/best-value for professionals), not made-up competitor data.
- Not add Offer/Product/AggregateRating schema (no review data exists).
- Not modify Pricing page content.
