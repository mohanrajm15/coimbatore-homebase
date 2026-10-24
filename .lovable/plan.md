# SEO-preserving AEO/GEO improvements

## Goal
Help AI search services read and accurately cite The Royal Nest Studio House without rewriting the content that already attracts Google traffic.

Google says its existing SEO practices apply to AI Overviews and AI Mode: no special AI files or schema are required. These improvements support accuracy and discoverability; they do not guarantee citations or rankings. [Google guidance](https://developers.google.com/search/docs/appearance/ai-features)

## 1. Start with a small, optional AI reading guide
- Add `/llms.txt` with the studio house name, a short factual summary, and links to existing public pages: Rooms, Pricing, Location, FAQ, Contact, the women's hostel page and selected blogs.
- State that monthly rent pays for accommodation only; the nine amenities are complimentary. Link to Pricing for current amounts and terms rather than duplicate changing details.
- Omit unverified ratings, walking times, deposit claims and competitor claims.
- Do not add `/llms-full.txt` initially: it would duplicate content and risk becoming outdated. `/llms.txt` is experimental, not a proven ranking factor.

## 2. Check discovery without changing crawler policy
- Preserve the current `Allow: /` rules. They already permit crawlers that honor robots.txt; adding repetitive AI bot rules is unnecessary.
- Add the canonical sitemap address to robots.txt.
- Add the two missing public pages to the existing sitemap: the women's hostel page and the Top 6 comparison guide. Preserve the current domain and existing entries; do not fabricate fresh publication dates.
- Check actual public responses. A robots allowance alone does not prove that a hosting firewall permits every bot.
- Do not change AI-training permissions in this work. Search discovery and model training are separate decisions.

## 3. Make business and FAQ facts consistent
- Link the existing business and organization schema with stable identifiers, using the existing name, address, phone and canonical website.
- Correct the outdated global FAQ answer that still calls amenities part of rent.
- Put FAQ schema on the pages with the corresponding questions and answers, not on every page.
- Ensure FAQ answers and matching schema appear in the initial page HTML while retaining the current expandable questions and wording.
- Remove the search schema pointing to `/search`, because the website has no search page.
- Do not add Offer, Product, AggregateRating, review counts, opening hours or social profile claims without corroboration. Leave uncertain existing claims out of the revised schema rather than invent replacements.

**One fact needs confirmation:** Pricing cards show a ₹10,000 deposit, but the Terms section says two months' rent. Do not publish a definitive deposit answer in the AI guide or add deposit schema until you confirm which is correct. Other steps can proceed independently.

## 4. Keep content changes minimal
- Keep existing price cards, comparison tables and FAQ questions; there is no need for new summary cards or a broad blog rewrite in this first pass.
- Keep room-only rent and complimentary amenities consistent wherever structured answers are generated.
- Retain CHIL SEZ IT Park and existing local keywords. Do not add unsupported distances or commute claims.

## SEO protections
Do not change existing page titles, descriptions, canonical domain, page addresses, H1–H3 wording, blog dates, images, internal links or prices. No redirects, no migration and no changes to analytics or Google preview controls. Sitemap additions and factual schema corrections are the only planned changes to existing SEO-supporting files.

## Verification and delivery
- Compare titles, descriptions, canonicals and headings before and after.
- Test schema JSON, entity references, page-specific FAQ scope, complimentary-amenity wording and sitemap coverage.
- Check initial HTML as well as browser navigation and FAQ expansion.
- Check Netlify's public pages after deployment. The live Pricing HTML currently does not contain the latest room-only introduction or complimentary terms; treat deployment as unverified until those appear.
- Do not publish to the Lovable domain. GitHub/Netlify deployment must be verified separately; do not claim it happened just because local files changed.
- Use existing Google Search Console and Analytics data for a before/after baseline if access is available. Google includes AI-feature traffic within its Web search reports, not a separate AI citation report.

## Technical details
Use the existing React/Vite static-generation setup. Maintain one shared source for FAQ answers and schema so they cannot drift. Inject stable business schema through the existing HTML/prerender pipeline, preserve all existing metadata tags, and keep DOM-dependent code safe for server rendering. Record structural decisions in `AGENTS.md` during implementation.

## Later, only if useful
Review Google Business Profile consistency and verified Google Maps/social identity links. Consider narrowly targeted direct-answer additions only after checking existing content and performance. Neither external profile edits nor a broad content rewrite is part of this first implementation.