# CampRinse Testing Plan

## Local Checks

- Run `npm run lint`.
- Run `npm run build`.
- Check the home page on mobile and desktop.
- Check sticky mobile CTA.
- Check every section anchor.
- Check policy pages.
- Check sitemap and robots routes.

## Environment Checks

- With checkout URLs blank, buttons should show `Checkout opening soon`.
- With checkout URLs configured, buttons should link to the external checkout provider.
- Header / hero / final CTA use the Dog Rinse Kit (`adventure`) checkout URL.
- Pricing cards map:
  - Weekend Walk Kit → `NEXT_PUBLIC_CHECKOUT_URL_STARTER`
  - Dog Rinse Kit → `NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE`
  - Multi-Dog / Family Kit → `NEXT_PUBLIC_CHECKOUT_URL_FAMILY`
- With analytics IDs blank, no analytics scripts should load.
- With analytics IDs configured, scripts should load after interaction.

## Content Checks

- Confirm hero headline: **Mud Stays Outside**.
- Confirm dog-first problem → solution flow.
- Confirm pricing labels and amounts:
  - Weekend Walk Kit: £34.99
  - Dog Rinse Kit: £44.99 (Most Popular)
  - Multi-Dog / Family Kit: £59.99
- Confirm no fake reviews are shown.
- Confirm supplier SKU / CJDropshipping is **not** on the sales page.
- Confirm no unverified heating, waterproof, pressure, battery-life or certification claims are present.
- If images exist under `public/images/`, hero / before-after / product show real photos.

## Deployment Checks

- Vercel builds from `main`.
- Production domain resolves.
- Canonical URL is `https://camprinse.com`.
- `robots.txt` includes the sitemap.
- `sitemap.xml` includes all public pages.

## Full guide

- Checkout & env: `docs/checkout-and-env-setup.md`
- Photo shoot (freelancer): `docs/freelancer-photo-shoot-brief.md`
