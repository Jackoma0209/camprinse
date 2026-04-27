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
- With analytics IDs blank, no analytics scripts should load.
- With analytics IDs configured, scripts should load after interaction.

## Content Checks

- Confirm hero headline and subheadline match the launch plan.
- Confirm use-case cards are present.
- Confirm pricing is correct:
  - Starter Kit: £34.99
  - Adventure Kit: £44.99
  - Family / Van-Life Kit: £59.99
- Confirm no fake reviews are shown.
- Confirm no unverified heating, waterproof, pressure, battery-life or certification claims are present.

## Deployment Checks

- Vercel builds from `main`.
- Production domain resolves.
- Canonical URL is `https://camprinse.com`.
- `robots.txt` includes the sitemap.
- `sitemap.xml` includes all public pages.
