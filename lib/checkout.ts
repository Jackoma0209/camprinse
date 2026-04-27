import { type BundleId, pricingBundles } from "@/lib/pricing";

export function getCheckoutUrl(bundleId: BundleId): string | undefined {
  const bundle = pricingBundles.find((item) => item.id === bundleId);

  if (!bundle) {
    return undefined;
  }

  const url = process.env[bundle.envKey];
  return url && url.trim().length > 0 ? url : undefined;
}
