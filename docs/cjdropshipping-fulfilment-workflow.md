# CJDropshipping Fulfilment Workflow

## MVP Flow

1. Customer lands on camprinse.com.
2. Customer chooses a bundle.
3. Bundle button sends customer to the configured external checkout URL.
4. Checkout provider collects payment and order details.
5. Order details are routed to the fulfilment process.
6. Product is ordered or fulfilled through CJDropshipping.
7. Tracking is sent to the customer when available.
8. Support issues are handled through the CampRinse contact route.

## Operational Notes

- Keep checkout URLs in Vercel environment variables only.
- Do not store customer data in this Next.js MVP.
- Confirm fulfilment timing before paid traffic.
- Keep supplier SKU CJYD205389301AZ in operations notes.
- Record supplier order IDs against checkout order IDs outside this static site.
- Keep evidence photos for damaged, faulty or missing item claims.

## Required Before Launch

- External checkout provider selected.
- Bundle checkout URLs created.
- Fulfilment process tested end to end.
- Returns address and customer support process confirmed.
- Supplier communication template reviewed.
