# Stripe + Vercel Checkout Setup Status

Last automated run: 2026-08-08  
Stripe account: **Relaunchkit** (`acct_1TPgKKPVvmLFhcXK`) · email: jackhadcroft@gmail.com · country: GB

## Done automatically

### Stripe products + prices (live mode)

| Kit | Price | Product ID | Price ID |
|-----|-------|------------|----------|
| Weekend Walk Kit | £34.99 | `prod_V2GDcTngzH1NK3` | `price_1U2BhWPVvmLFhcXKO2CbSlfg` |
| Dog Rinse Kit (Most Popular) | £44.99 | `prod_V2GDUmHISqW7tv` | `price_1U2BhXPVvmLFhcXKaPRJl7PT` |
| Multi-Dog / Family Kit | £59.99 | `prod_V2GDpnEDYC0mUz` | `price_1U2BhXPVvmLFhcXKj5i1mva4` |

View: https://dashboard.stripe.com/acct_1TPgKKPVvmLFhcXK/products

### Vercel project located

| Field | Value |
|-------|--------|
| Project | `camprinse` |
| Project ID | `prj_5hifS8xbFE0dJJEfuKo0PdwRAIa2` |
| Team | `jackhadcroft-5882s-projects` (`team_teHvFzGEQO4f9h5hNikAWTMg`) |
| Domains | camprinse.com, www.camprinse.com, camprinse.vercel.app |
| Latest production | READY |

## Blocked (needs you)

### 1. Stripe account not activated for charges

API status:

- `charges_enabled`: **false**
- `payouts_enabled`: **false**
- `details_submitted`: **false**

Past-due requirements:

- `business_profile.product_description`
- `business_profile.support_phone`
- `business_profile.url`
- `tos_acceptance.date` / `tos_acceptance.ip` (must be accepted by you in Dashboard)

Because of this, Payment Link creation fails with:

> No valid payment method types for this payment link… activate payment methods… dashboard

**You must complete Stripe activation in the browser (cannot be finished via API for TOS):**

1. Open https://dashboard.stripe.com/acct_1TPgKKPVvmLFhcXK  
2. Complete **Activate account / Get ready to process payments**  
3. Set business details, e.g.:
   - Product description: *Portable dog rinse kits for muddy UK walks*
   - Support phone: your real support number  
   - Website: `https://camprinse.com`  
4. Accept Stripe Terms of Service  
5. Open https://dashboard.stripe.com/settings/payment_methods and ensure **Cards** are enabled for GBP  
6. Reply here: **“Stripe is activated”**

Then I will:

- Create 3 Payment Links (GB shipping address, phone collection)  
- Map them to Vercel env vars  
- Redeploy production  

### 2. Vercel env vars — need one of these

MCP can read projects/deployments but **cannot set environment variables**. CLI has no credentials in this environment (`vercel whoami` → no credentials).

**Option A (fastest — you paste links after I create them):**  
Vercel → Project `camprinse` → Settings → Environment Variables → add Production:

```txt
NEXT_PUBLIC_SITE_URL=https://camprinse.com
NEXT_PUBLIC_CHECKOUT_URL_STARTER=<payment link>
NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE=<payment link>
NEXT_PUBLIC_CHECKOUT_URL_FAMILY=<payment link>
```

Then **Redeploy** Production.

**Option B (so I can set them next time):**  
Create a Vercel token at https://vercel.com/account/tokens and either:

- run `npx vercel login` in this machine, or  
- set `VERCEL_TOKEN` in the shell and tell me to continue  

## Env mapping (once Payment Links exist)

| Env var | Stripe kit | Price ID |
|---------|------------|----------|
| `NEXT_PUBLIC_CHECKOUT_URL_STARTER` | Weekend Walk Kit | `price_1U2BhWPVvmLFhcXKO2CbSlfg` |
| `NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE` | Dog Rinse Kit | `price_1U2BhXPVvmLFhcXKaPRJl7PT` |
| `NEXT_PUBLIC_CHECKOUT_URL_FAMILY` | Multi-Dog / Family Kit | `price_1U2BhXPVvmLFhcXKj5i1mva4` |

## Do not do yet

- Do not run paid ads until a real test order + fulfilment path works  
- Checkout buttons will stay **“Checkout opening soon”** until env vars are set and redeployed  

## Resume command for agent

After Stripe activation, say:

> Stripe is activated — create payment links and wire Vercel checkout env vars
