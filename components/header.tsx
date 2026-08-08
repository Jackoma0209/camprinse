import Link from "next/link";
import { CheckoutButton } from "@/components/checkout-button";
import { MobileMenu } from "@/components/mobile-menu";
import { commerce } from "@/lib/commerce";
import { navItems, site } from "@/lib/site";

type HeaderProps = {
  compact?: boolean;
};

export function Header({ compact = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-green-950/10 bg-cream/90 backdrop-blur-xl">
      <div className="section-shell flex h-18 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-full"
          aria-label="CampRinse home"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-charcoal-green text-lg font-black text-cream">
            CR
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black tracking-tight text-charcoal-green">
              {site.name}
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
              Mud stays outside
            </span>
          </span>
        </Link>

        {!compact ? (
          <nav className="hidden items-center gap-6 text-sm font-bold text-green-950/70 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full transition hover:text-charcoal-green"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}

        <div className="hidden items-center gap-3 md:flex">
          <CheckoutButton
            bundleId="adventure"
            label={commerce.primaryCtaLabel}
          />
        </div>

        {!compact ? <MobileMenu /> : null}
      </div>
    </header>
  );
}
