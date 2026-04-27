# Vercel Deployment Guide

## Project Settings

- Framework preset: Next.js
- Package manager: npm
- Build command: `npm run build`
- Output directory: Next.js default
- Production branch: `main`

## Domains

- Primary: `camprinse.com`
- UK domain: `camprinse.co.uk`

Set `camprinse.com` as the canonical domain. Point `camprinse.co.uk` to the same Vercel project and decide whether it redirects to the primary domain.

## Environment Variables

Add these as Vercel project environment variables:

```txt
NEXT_PUBLIC_SITE_URL=https://camprinse.com
NEXT_PUBLIC_CHECKOUT_URL_STARTER=
NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE=
NEXT_PUBLIC_CHECKOUT_URL_FAMILY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
```

Only add checkout URLs once supplier, fulfilment, returns and safety checks are complete.

## Deployment Checks

- Confirm `npm run build` passes locally.
- Confirm Vercel production deployment builds from `main`.
- Confirm checkout buttons are disabled if checkout URLs are blank.
- Confirm sitemap and robots are available after deployment.
- Confirm canonical metadata uses `https://camprinse.com`.
