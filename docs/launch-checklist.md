# CampRinse Launch Checklist

## Positioning (live)

- [x] Dog-first homepage: “Mud Stays Outside”
- [x] Primary CTA: Shop the Dog Rinse Kit
- [x] Pricing reframed as dog rinse kits
- [x] Checkout paused until env URLs set
- [ ] Real dog photography in `public/images/` (see `docs/dog-photography-brief.md`)
- [ ] Freelancer brief sent / shoot booked (`docs/freelancer-photo-shoot-brief.md`)

## Product

- [ ] Supplier manual received (English)
- [ ] Product photos and videos received
- [ ] Bundle contents confirmed for:
  - Weekend Walk Kit (£34.99)
  - Dog Rinse Kit / Adventure (£44.99) — Most Popular
  - Multi-Dog / Family Kit (£59.99)
- [ ] Safety wording approved
- [ ] No unverified performance claims on page

## Checkout (do not run ads until done)

Full walkthrough: `docs/checkout-and-env-setup.md`

- [ ] External checkout provider configured (Stripe Payment Links recommended)
- [ ] Three GBP products/links created (Weekend Walk / Dog Rinse / Multi-Dog)
- [ ] `NEXT_PUBLIC_CHECKOUT_URL_STARTER` set in Vercel
- [ ] `NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE` set in Vercel (Dog Rinse Kit)
- [ ] `NEXT_PUBLIC_CHECKOUT_URL_FAMILY` set in Vercel
- [ ] Production redeployed after env change
- [ ] Test purchase completed
- [ ] Order confirmation email checked
- [ ] Buttons show real checkout (not “Checkout opening soon”)

## Site

- [ ] Production domain connected (`camprinse.com`)
- [ ] UK domain connected or redirected (`camprinse.co.uk`)
- [ ] `NEXT_PUBLIC_SITE_URL` set to `https://camprinse.com`
- [ ] Analytics IDs only after consent + privacy wording ready
- [ ] Sitemap and robots checked
- [ ] Mobile sticky CTA checked
- [ ] Drop-in images verified after upload:
  - `hero-dog-boot.jpg`
  - `before-muddy-paws.jpg`
  - `after-clean-paws.jpg`
  - `product-kit.jpg` (optional)

## Operations

- [ ] Fulfilment workflow tested
- [ ] Customer support inbox ready (`hello@camprinse.com`)
- [ ] Returns handling confirmed
- [ ] Supplier issue process documented
- [ ] **Paid traffic held** until checkout and fulfilment are verified
