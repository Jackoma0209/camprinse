# CampRinse Checkout & Environment Setup Guide

Step-by-step guide to turn **“Checkout opening soon”** into live purchase buttons on `camprinse.com`.

This site does **not** process cards itself. Each kit button opens an **external checkout URL** stored in Vercel environment variables.

---

## 1. How checkout works on this site

```
Visitor clicks "Shop the Dog Rinse Kit"
        ↓
CheckoutButton looks up env var for that bundle
        ↓
If URL empty → grey "Checkout opening soon"
If URL set   → link opens external checkout (new provider page)
        ↓
Customer pays on Stripe / Shopify / PayPal / etc.
        ↓
You fulfil via CJDropshipping (or your warehouse process)
```

### Bundle → env var map

| Kit on site | Price | Internal id | Vercel env variable |
|-------------|-------|-------------|---------------------|
| Weekend Walk Kit | £34.99 | `starter` | `NEXT_PUBLIC_CHECKOUT_URL_STARTER` |
| **Dog Rinse Kit** (Most Popular) | **£44.99** | `adventure` | `NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE` |
| Multi-Dog / Family Kit | £59.99 | `family` | `NEXT_PUBLIC_CHECKOUT_URL_FAMILY` |

Code references: `lib/pricing.ts`, `lib/checkout.ts`, `components/checkout-button.tsx`.

---

## 2. Before you enable checkout (go/no-go)

Do **not** paste live payment links until these are true:

- [ ] Supplier manual + safety wording confirmed  
- [ ] You know real box contents / what ships for each kit  
- [ ] Fulfilment timing known (and acceptable for UK customers)  
- [ ] Returns process written (`/returns-policy` matches reality)  
- [ ] Support inbox monitored (`hello@camprinse.com`)  
- [ ] At least one end-to-end dry run planned (test order)  
- [ ] Hero/product photos in progress or live (conversion quality)  

If any row fails, keep checkout URLs **blank** on Production.

---

## 3. Choose a checkout provider

Any tool that gives you a **stable HTTPS payment link** works. Common MVP options:

### Option A — Stripe Payment Links (recommended for UK MVP)

**Why:** Fast, no custom backend, good receipts, easy test mode.

1. Create a [Stripe](https://stripe.com) account (UK business details).  
2. Complete verification for live payments.  
3. **Products → Payment Links → New**  
4. Create **three** products/prices matching the site:

| Product name | Amount |
|--------------|--------|
| CampRinse Weekend Walk Kit | £34.99 |
| CampRinse Dog Rinse Kit | £44.99 |
| CampRinse Multi-Dog / Family Kit | £59.99 |

5. For each Payment Link:
   - Currency: **GBP**  
   - Collect shipping address (if you need it for fulfilment)  
   - After payment: thank-you page (Stripe default or your own)  
   - Optional: email receipts on  
6. Copy each Payment Link URL (looks like `https://buy.stripe.com/...`).  
7. Use **test mode** links first, then switch to **live** links after a successful test purchase.

### Option B — Shopify (or similar storefront)

1. Create three products with the same names/prices.  
2. Use each product’s checkout / buy link, or a cart permalink.  
3. Ensure product variants match what you will actually ship.  
4. Paste those URLs into the three env vars below.

### Option C — PayPal / Gumroad / Lemon Squeezy / other

1. Create three fixed-price checkout links in GBP.  
2. Confirm shipping fields and customer email are collected.  
3. Paste URLs into Vercel.

**Rule:** One unique URL per kit. Do not reuse one link for all three unless you only sell a single SKU.

---

## 4. Set environment variables in Vercel

### 4.1 Open the project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)  
2. Open the **CampRinse** project  
3. **Settings → Environment Variables**

### 4.2 Add / edit these variables

Set for **Production** (and Preview if you want to test on preview URLs):

```txt
NEXT_PUBLIC_SITE_URL=https://camprinse.com

NEXT_PUBLIC_CHECKOUT_URL_STARTER=https://buy.stripe.com/YOUR_STARTER_LINK
NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE=https://buy.stripe.com/YOUR_DOG_RINSE_KIT_LINK
NEXT_PUBLIC_CHECKOUT_URL_FAMILY=https://buy.stripe.com/YOUR_FAMILY_LINK
```

Leave blank (or omit) until ready:

```txt
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
```

### 4.3 Important notes

| Topic | Detail |
|-------|--------|
| `NEXT_PUBLIC_*` | Exposed to the browser — **never** put secret API keys here |
| Secrets | Stripe **secret** keys stay only in Stripe / server tools, not these vars |
| Redeploy | After changing env vars, **redeploy** Production so the static build picks them up |
| Empty string | Whitespace-only values are treated as disabled (buttons stay off) |

### 4.4 Redeploy

1. **Deployments** → open latest Production deployment  
2. **⋯ → Redeploy** (or push a commit to `main`)  
3. Wait for build success  

---

## 5. Local testing (optional)

Create `.env.local` in the project root (never commit this file):

```txt
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CHECKOUT_URL_STARTER=https://buy.stripe.com/test_...
NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE=https://buy.stripe.com/test_...
NEXT_PUBLIC_CHECKOUT_URL_FAMILY=https://buy.stripe.com/test_...
```

```bash
npm run dev
```

Checks:
- Buttons show your CTA labels (not “Checkout opening soon”)  
- Click opens the correct provider page for each kit  
- Most popular / header / sticky CTA all hit the **Dog Rinse Kit** (`adventure`) URL  

`.gitignore` should already exclude `.env*`. Confirm before committing.

---

## 6. Production verification checklist

On https://camprinse.com after redeploy:

- [ ] Header button is a real link (not disabled grey)  
- [ ] Hero “Shop the Dog Rinse Kit” opens **Adventure** checkout  
- [ ] Pricing: Weekend Walk → STARTER URL  
- [ ] Pricing: Dog Rinse Kit → ADVENTURE URL  
- [ ] Pricing: Multi-Dog / Family → FAMILY URL  
- [ ] Mobile sticky bar → jumps to `#pricing` (still useful even with live checkout)  
- [ ] Final CTA → Dog Rinse Kit checkout  
- [ ] Complete a **real £0 test or small live test** purchase  
- [ ] Confirmation email received  
- [ ] You can map the order to fulfilment (manual spreadsheet is fine for MVP)  

---

## 7. Fulfilment handoff (MVP)

After payment:

1. Checkout provider emails you (and the customer).  
2. You create the supplier order (CJDropshipping SKU `CJYD205389301AZ` — ops only, not on the sales page).  
3. Record: `checkout_order_id` ↔ `supplier_order_id` ↔ tracking.  
4. Send tracking to the customer when available.  
5. Handle issues via contact / returns policy.

Details: `docs/cjdropshipping-fulfilment-workflow.md`.

---

## 8. Analytics (after privacy is ready)

Only add when cookie/privacy wording matches reality:

| Variable | Example | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXX` | Google Analytics 4 |
| `NEXT_PUBLIC_META_PIXEL_ID` | numeric id | Meta ads pixel |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | pixel id | TikTok pixel |

Scripts load from `components/analytics.tsx` only when IDs are set.

**Paid ads:** do not scale spend until checkout + fulfilment tests pass.

---

## 9. Domains & SEO env

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://camprinse.com` |

Also confirm in Vercel **Domains**:
- `camprinse.com` → Production  
- `camprinse.co.uk` → same project (redirect to primary recommended)  

---

## 10. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Still “Checkout opening soon” | Env not set, wrong environment, or no redeploy | Set Production vars + redeploy |
| Wrong kit price at checkout | Payment link product mismatch | Edit Stripe/Shopify product price |
| All buttons go to same product | Same URL in all three vars | Create three links |
| Link works locally but not live | Only set in `.env.local` | Copy into Vercel Production |
| Build OK but old content | CDN cache | Hard refresh; confirm latest deployment commit |
| Customer paid, nothing shipped | No ops process | Use fulfilment workflow doc + order spreadsheet |

---

## 11. Recommended go-live sequence

1. Stripe (or chosen) **test** Payment Links → local + Preview  
2. One full test purchase + fake fulfilment dry-run  
3. Switch to **live** Payment Links  
4. Set three Production env vars → redeploy  
5. One live test order to yourself (refund if needed)  
6. Soft launch (friends / organic)  
7. Photos live from freelancer brief  
8. Then paid traffic  

---

## Related docs

- `docs/stripe-setup-status.md` — **live status of automated Stripe/Vercel wiring**  
- `docs/launch-checklist.md` — master go-live list  
- `docs/freelancer-photo-shoot-brief.md` — send to photographer  
- `docs/dog-photography-brief.md` — filename map for engineers  
- `docs/vercel-deployment-guide.md` — deploy settings  
- `docs/cjdropshipping-fulfilment-workflow.md` — after payment  
- `docs/testing-plan.md` — regression checks  
