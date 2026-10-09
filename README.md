# Palm Gardens at PX — bilingual landing page (AR / EN)

Routes
- `/` — Arabic (RTL), `lang="ar-EG"`
- `/en` — English (LTR)
- `/ar` redirects to `/`

## Run

```bash
cp .env.example .env.local   # fill in the values
npm install
npm run dev                  # or: npm run build && npm start
```

Set before going live
- `NEXT_PUBLIC_SITE_URL` — real domain (used for canonicals, OG, sitemap). Also replace `www.example.com` in `public/sitemap.xml` and `public/robots.txt`.
- `NEXT_PUBLIC_WEB3FORMS_KEY` — Web3Forms access key. Leads go to the email tied to that key (use leads@grandeur-spaces.com or the one you choose).
- `NEXT_PUBLIC_GADS_ID` — Google Ads / GA4 tag (optional). Add conversion events for `call_click` and `whatsapp_click` in Google Ads.

Contact used on the page: 01027709029 (tel + WhatsApp `wa.me/201027709029`).

## Keyword placement

| Keyword group | Where it sits |
|---|---|
| بالم هيلز PX / Palm Hills PX | `<title>`, meta description, hero eyebrow, H2 "ليه بالم هيلز PX؟", footer, JSON-LD |
| Palm Gardens at PX | H1, `<title>`, OG title, form title, footer |
| تاون هاوس / townhouses for sale in Palm Hills | hero subtitle (H1 line 2), units table, meta keywords, Phase 2 section |
| فيلات / villas for sale Palm Hills PX | hero subtitle, units table (Type 1/3/4/5), Phase 2 section |
| فيلا بإطلالة على الأهرامات / Palm Hills pyramid view | pyramid section H2 + body, highlights card, image alt text |
| تقسيط بالم هيلز / Palm Hills installment plan | hero payment line, payment section H2, FAQ |
| أسعار فيلات بالم هيلز / Palm Hills PX prices | units section H2 + table, FAQ |
| 4 سنوات التسليم / 4 year delivery | hero stats, payment steps, FAQ |
| Footprint 17.5% / Core & Shell / Fully Finished | highlights, stats panel, FAQ (long-tail) |

Each H2 carries one keyword group; body copy repeats the group naturally, and every image has descriptive Arabic and English alt text.

## Notes
- Prices come from the PX factsheet and are shown as indicative with a disclaimer. Type 3 is listed as "approx. 39M" (factsheet); the short summary post says 38.8M. Confirm before launch.
- Phase 1 villas are sold out and are mentioned only as history.
- Photos are from the PX brochure and live construction updates.
- Agent disclosure: Grandeur Spaces, authorized sales agent for Palm Hills.
