# Stripe + Vercel Checkout Setup Status

Last updated: 2026-08-08  
Stripe account: **Relaunchkit** (`acct_1TPgKKPVvmLFhcXK`)

## Status: Stripe ready — Vercel env vars need 2 minutes of your time

### Account

| Check | Status |
|-------|--------|
| `charges_enabled` | true |
| `payouts_enabled` | true |
| `details_submitted` | true |
| `card_payments` | active |
| Statement descriptor | `CAMPRINSE` |

### Products + prices (live)

| Kit | Price | Product ID | Price ID |
|-----|-------|------------|----------|
| Weekend Walk Kit | £34.99 | `prod_V2GDcTngzH1NK3` | `price_1U2BhWPVvmLFhcXKO2CbSlfg` |
| Dog Rinse Kit | £44.99 | `prod_V2GDUmHISqW7tv` | `price_1U2BhXPVvmLFhcXKaPRJl7PT` |
| Multi-Dog / Family Kit | £59.99 | `prod_V2GDpnEDYC0mUz` | `price_1U2BhXPVvmLFhcXKj5i1mva4` |

### Payment Links (live — use these)

| Kit | Env var | Payment Link |
|-----|---------|--------------|
| Weekend Walk Kit | `NEXT_PUBLIC_CHECKOUT_URL_STARTER` | https://buy.stripe.com/8x228t2yKckr3xkb18dQQ00 |
| Dog Rinse Kit | `NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE` | https://buy.stripe.com/7sYbJ31uGfwD2tgc5cdQQ01 |
| Multi-Dog / Family Kit | `NEXT_PUBLIC_CHECKOUT_URL_FAMILY` | https://buy.stripe.com/bJeaEZddobgn0l85GOdQQ02 |

Also set:

```txt
NEXT_PUBLIC_SITE_URL=https://camprinse.com
```

Payment links collect: billing address, UK shipping address, phone.

### How to add on Vercel (required)

1. Open: https://vercel.com/jackhadcroft-5882s-projects/camprinse/settings/environment-variables  
2. For **each** variable below, add to **Production** (and Preview if you want):
   - `NEXT_PUBLIC_SITE_URL` = `https://camprinse.com`
   - `NEXT_PUBLIC_CHECKOUT_URL_STARTER` = `https://buy.stripe.com/8x228t2yKckr3xkb18dQQ00`
   - `NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE` = `https://buy.stripe.com/7sYbJ31uGfwD2tgc5cdQQ01`
   - `NEXT_PUBLIC_CHECKOUT_URL_FAMILY` = `https://buy.stripe.com/bJeaEZddobgn0l85GOdQQ02`
3. **Deployments → ⋯ on latest Production → Redeploy** (env changes need a rebuild)
4. Hard-refresh https://camprinse.com — buttons should say **Shop the Dog Rinse Kit** (not Checkout opening soon)

### After env is set

- Click each pricing CTA once and confirm the right Stripe checkout amount  
- Place a **small test order to yourself** (or refund after)  
- Confirm fulfilment path for CJDropshipping  

### Popup you saw: “copy from sandbox?”

Choose **Don't copy anything** — live products/links already exist.
